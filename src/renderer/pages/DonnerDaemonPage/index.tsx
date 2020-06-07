import { Dispatch } from "common/types";
import React, { useEffect, useState } from "react";
import { hook } from "renderer/hocs/hook";
import { withTab } from "renderer/hocs/withTab";
import { MeatProps } from "renderer/scenes/HubScene/Meats/types";
import styled, * as styles from "renderer/styles";
import {
  GetBalanceRequest,
  LncliRequest,
  GetBalanceResponse,
} from "../../../static/generated/daemon/daemon_pb";
import { DaemonServiceClient } from "../../../static/generated/daemon/daemon_grpc_pb";
import { credentials } from "@grpc/grpc-js";
import Terminal from "react-console-emulator";

const DonnerDaemonDiv = styled.div`
  ${styles.meat};
`;

const DonnerDaemonContentDiv = styled.div`
  overflow-y: auto;
  padding: 0px 20px 30px 20px;
  font-size: 20px;

  color: ${props => props.theme.baseText};

  table,
  th,
  td {
    border: 1px solid white;
  }
  .heading,
  h2 {
    font-size: 18px;
  }

  h2 {
    padding: 10px 15px;
    margin-top: 20px;
    margin-bottom: 5px;
    flex-shrink: 0;
  }

  .icon.turner {
    display: inline-block;
    width: 15px;
    text-align: center;
    transform: rotateZ(0deg);
    transition: transform 0.2s ease-in-out;

    &.turned {
      transform: rotateZ(90deg);
    }
  }

  .preferences-form {
    z-index: 5;
  }

  .advanced-form {
    .section {
      margin: 8px 0;

      &.component {
        margin-left: 16px;
      }

      &:first-child {
        margin-top: 0;
      }
    }

    .button:hover {
      cursor: pointer;
    }
  }

  .explanation {
    padding: 0 15px;
    margin: 15px 0 0 0;

    color: #b9b9b9;
    font-size: 14px;
    max-width: 500px;
    border-radius: $explanation-border-radius;
    line-height: 1.6;

    &.drop-down {
      animation: soft-drop 0.8s;
    }

    &.flex {
      display: flex;
      flex-shrink: 0;

      a,
      .link {
        margin-left: 8px;
        display: flex;
      }
    }

    a,
    .link {
      text-decoration: underline;
      color: #ececec;

      &:hover {
        cursor: pointer;
      }
    }
  }

  .link-box {
    margin: 20px 15px;
    font-size: 80%;

    .icon {
      margin-right: 8px;
    }

    a {
      color: #87a7c3;
      text-decoration: none;
    }
  }
`;

type DaemonState = {
  balance: GetBalanceResponse;
};

const DonnerDaemonPage = (props: Props) => {
  const [daemonState, setDaemonState] = useState<DaemonState>({
    balance: new GetBalanceResponse(),
  });

  // const refTerminal = useRef(null)
  const refTerminal = React.createRef();

  const client = new DaemonServiceClient(
    "localhost:10101",
    credentials.createInsecure()
  );

  const balanceRequest = () => {
    console.log("making missing balanace request");
    client.getBalance(new GetBalanceRequest(), (e, response) => {
      if (e) {
        console.log(e);
        return;
      }
      console.log(response);
      setDaemonState(prevState => ({
        ...prevState,
        balance: response,
      }));
      return;
    });
  };

  const lncliRequest = (cmd: string) => {
    console.log("making lncli request " + cmd);
    const req = new LncliRequest();
    req.setCommand(cmd);
    const terminal: any = refTerminal.current;
    return client.lncli(req, (e, response) => {
      if (e) {
        console.log(e);
        terminal.pushToStdout(e);
        return;
      }
      console.log(response);
      terminal.pushToStdout(response.getTextResponse());
    });
  };

  const commands = {
    echo: {
      description: "Echo a passed string.",
      usage: "echo <string>",
      fn: function() {
        return `${Array.from(arguments).join(" ")}`;
      },
    },
    lncli: {
      description: "Lncli command",
      usage: "lncli <string>",
      fn: function() {
        lncliRequest(`${Array.from(arguments).join(" ")}`);
        return "Running, please wait...";
      },
    },
  };
  const refreshBalance = (e: any) => {
    e.preventDefault();
    balanceRequest();
  };
  useEffect(() => {
    console.log("mounted");
    balanceRequest();
    return () => {
      console.log("unmounted");
    };
  }, []);

  return (
    <DonnerDaemonDiv>
      <DonnerDaemonContentDiv>
        <h1>Donner Daemon</h1>
        <br />
        <button onClick={refreshBalance}>Refresh</button>
        <h2>Balance</h2>
        <table>
          <tr>
            <th>Type</th>
            <th>Sats</th>
          </tr>
          <tr>
            <th>Buffer</th>
            <th>{daemonState.balance.getBufferBalance()}</th>
          </tr>
          <tr>
            <th>Node</th>
            <th>{daemonState.balance.getDaemonBalance()}</th>
          </tr>
          <tr>
            <th>ChannelCost</th>
            <th>{daemonState.balance.getChannelMissingBalance()}</th>
          </tr>
          <tr>
            <th>Total</th>
            <th>
              {daemonState.balance.getBufferBalance() +
                daemonState.balance.getDaemonBalance() -
                daemonState.balance.getChannelMissingBalance()}
            </th>
          </tr>
        </table>

        <br />
        <h2>Debug</h2>
        <br />
        <Terminal
          commands={commands}
          ref={refTerminal}
          welcomeMessage={["Welcome to the Donner Daemon terminal!"]}
          promptLabel={"me@daemon:~$"}
          style={{ userSelect: "text" }}
          messageStyle={{ whiteSpace: "pre-wrap" }}
        />
      </DonnerDaemonContentDiv>
    </DonnerDaemonDiv>
  );
};

interface Props extends MeatProps {
  tab: string;
  dispatch: Dispatch;
}

export default hook()(withTab(DonnerDaemonPage));
