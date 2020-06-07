// GENERATED CODE -- DO NOT EDIT!

// package: daemon
// file: daemon.proto

import * as daemon_pb from "./daemon_pb";
import * as grpc from "@grpc/grpc-js";

interface IDaemonServiceService
  extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  lncli: grpc.MethodDefinition<daemon_pb.LncliRequest, daemon_pb.LncliResponse>;
  getConnection: grpc.MethodDefinition<
    daemon_pb.GetConnectionRequest,
    daemon_pb.GetConnectionResponse
  >;
  getBalance: grpc.MethodDefinition<
    daemon_pb.GetBalanceRequest,
    daemon_pb.GetBalanceResponse
  >;
}

export const DaemonServiceService: IDaemonServiceService;

export class DaemonServiceClient extends grpc.Client {
  constructor(
    address: string,
    credentials: grpc.ChannelCredentials,
    options?: object
  );
  lncli(
    argument: daemon_pb.LncliRequest,
    callback: grpc.requestCallback<daemon_pb.LncliResponse>
  ): grpc.ClientUnaryCall;
  lncli(
    argument: daemon_pb.LncliRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<daemon_pb.LncliResponse>
  ): grpc.ClientUnaryCall;
  lncli(
    argument: daemon_pb.LncliRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<daemon_pb.LncliResponse>
  ): grpc.ClientUnaryCall;
  getConnection(
    argument: daemon_pb.GetConnectionRequest,
    callback: grpc.requestCallback<daemon_pb.GetConnectionResponse>
  ): grpc.ClientUnaryCall;
  getConnection(
    argument: daemon_pb.GetConnectionRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<daemon_pb.GetConnectionResponse>
  ): grpc.ClientUnaryCall;
  getConnection(
    argument: daemon_pb.GetConnectionRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<daemon_pb.GetConnectionResponse>
  ): grpc.ClientUnaryCall;
  getBalance(
    argument: daemon_pb.GetBalanceRequest,
    callback: grpc.requestCallback<daemon_pb.GetBalanceResponse>
  ): grpc.ClientUnaryCall;
  getBalance(
    argument: daemon_pb.GetBalanceRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<daemon_pb.GetBalanceResponse>
  ): grpc.ClientUnaryCall;
  getBalance(
    argument: daemon_pb.GetBalanceRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<daemon_pb.GetBalanceResponse>
  ): grpc.ClientUnaryCall;
}
