// package: daemon
// file: daemon.proto

import * as jspb from "google-protobuf";

export class LncliRequest extends jspb.Message {
  getCommand(): string;
  setCommand(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LncliRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: LncliRequest
  ): LncliRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: LncliRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): LncliRequest;
  static deserializeBinaryFromReader(
    message: LncliRequest,
    reader: jspb.BinaryReader
  ): LncliRequest;
}

export namespace LncliRequest {
  export type AsObject = {
    command: string;
  };
}

export class LncliResponse extends jspb.Message {
  getTextResponse(): string;
  setTextResponse(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LncliResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: LncliResponse
  ): LncliResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: LncliResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): LncliResponse;
  static deserializeBinaryFromReader(
    message: LncliResponse,
    reader: jspb.BinaryReader
  ): LncliResponse;
}

export namespace LncliResponse {
  export type AsObject = {
    textResponse: string;
  };
}

export class GetConnectionRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConnectionRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetConnectionRequest
  ): GetConnectionRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetConnectionRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetConnectionRequest;
  static deserializeBinaryFromReader(
    message: GetConnectionRequest,
    reader: jspb.BinaryReader
  ): GetConnectionRequest;
}

export namespace GetConnectionRequest {
  export type AsObject = {};
}

export class GetConnectionResponse extends jspb.Message {
  getNodeAlive(): boolean;
  setNodeAlive(value: boolean): void;

  getGrpcAddress(): string;
  setGrpcAddress(value: string): void;

  getP2pAddress(): string;
  setP2pAddress(value: string): void;

  getCertPath(): string;
  setCertPath(value: string): void;

  getMacaroonPath(): string;
  setMacaroonPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConnectionResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetConnectionResponse
  ): GetConnectionResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetConnectionResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetConnectionResponse;
  static deserializeBinaryFromReader(
    message: GetConnectionResponse,
    reader: jspb.BinaryReader
  ): GetConnectionResponse;
}

export namespace GetConnectionResponse {
  export type AsObject = {
    nodeAlive: boolean;
    grpcAddress: string;
    p2pAddress: string;
    certPath: string;
    macaroonPath: string;
  };
}

export class GetBalanceRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBalanceRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetBalanceRequest
  ): GetBalanceRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetBalanceRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetBalanceRequest;
  static deserializeBinaryFromReader(
    message: GetBalanceRequest,
    reader: jspb.BinaryReader
  ): GetBalanceRequest;
}

export namespace GetBalanceRequest {
  export type AsObject = {};
}

export class GetBalanceResponse extends jspb.Message {
  getBufferBalance(): number;
  setBufferBalance(value: number): void;

  getDaemonBalance(): number;
  setDaemonBalance(value: number): void;

  getChannelMissingBalance(): number;
  setChannelMissingBalance(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBalanceResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetBalanceResponse
  ): GetBalanceResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetBalanceResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetBalanceResponse;
  static deserializeBinaryFromReader(
    message: GetBalanceResponse,
    reader: jspb.BinaryReader
  ): GetBalanceResponse;
}

export namespace GetBalanceResponse {
  export type AsObject = {
    bufferBalance: number;
    daemonBalance: number;
    channelMissingBalance: number;
  };
}
