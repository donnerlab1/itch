import Context, { MinimalContext } from "../../context";
import { Logger } from "../../logger";

import { ICave } from "../../db/models/cave";

import * as paths from "../../os/paths";
import butler from "../../util/butler";
import uuid from "../../util/uuid";

import { Instance, messages } from "node-buse";

export interface IUninstallOpts {
  /** the cave to uninstall */
  cave: ICave;

  /** where to install the item */
  destPath: string;

  /** for cancellations, accessing db, etc. */
  ctx: Context;

  /** usually goes to a cave logger */
  logger: Logger;
}

import { setupClient } from "../../util/buse-utils";

export async function coreUninstall(opts: IUninstallOpts) {
  const logger = opts.logger.child({ name: "uninstall" });
  const { ctx, destPath, cave } = opts;

  const id = uuid();
  const preferences = ctx.store.getState().preferences;
  const stagingFolder = paths.downloadFolderPathForId(
    preferences,
    cave.installLocation,
    id
  );

  try {
    const instance = new Instance();
    instance.onClient(async client => {
      try {
        setupClient(client, logger, ctx);

        client.onNotification(messages.TaskStarted, ({ params }) => {
          const { type, reason } = params;
          logger.info(`Task ${type} started (for ${reason})`);
        });

        client.onNotification(messages.TaskSucceeded, ({ params }) => {
          const { type } = params;
          logger.info(`Task ${type} succeeded`);
        });

        await client.call(
          messages.Operation.Start({
            id,
            stagingFolder,
            operation: "uninstall",
            uninstallParams: {
              installFolder: destPath,
            },
          })
        );

        logger.info(`Uninstall successful`);
      } finally {
        instance.cancel();
      }
    });

    await instance.promise();
  } finally {
    try {
      await butler.wipe(stagingFolder, {
        ctx: new MinimalContext(),
        logger,
      });
    } catch (e) {
      logger.error(`Could not wipe stage folder: ${e.stack}`);
    }
  }
}
