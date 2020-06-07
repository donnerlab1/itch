// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var daemon_pb = require('./daemon_pb.js');

function serialize_daemon_GetBalanceRequest(arg) {
  if (!(arg instanceof daemon_pb.GetBalanceRequest)) {
    throw new Error('Expected argument of type daemon.GetBalanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_daemon_GetBalanceRequest(buffer_arg) {
  return daemon_pb.GetBalanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_daemon_GetBalanceResponse(arg) {
  if (!(arg instanceof daemon_pb.GetBalanceResponse)) {
    throw new Error('Expected argument of type daemon.GetBalanceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_daemon_GetBalanceResponse(buffer_arg) {
  return daemon_pb.GetBalanceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_daemon_GetConnectionRequest(arg) {
  if (!(arg instanceof daemon_pb.GetConnectionRequest)) {
    throw new Error('Expected argument of type daemon.GetConnectionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_daemon_GetConnectionRequest(buffer_arg) {
  return daemon_pb.GetConnectionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_daemon_GetConnectionResponse(arg) {
  if (!(arg instanceof daemon_pb.GetConnectionResponse)) {
    throw new Error('Expected argument of type daemon.GetConnectionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_daemon_GetConnectionResponse(buffer_arg) {
  return daemon_pb.GetConnectionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_daemon_LncliRequest(arg) {
  if (!(arg instanceof daemon_pb.LncliRequest)) {
    throw new Error('Expected argument of type daemon.LncliRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_daemon_LncliRequest(buffer_arg) {
  return daemon_pb.LncliRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_daemon_LncliResponse(arg) {
  if (!(arg instanceof daemon_pb.LncliResponse)) {
    throw new Error('Expected argument of type daemon.LncliResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_daemon_LncliResponse(buffer_arg) {
  return daemon_pb.LncliResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var DaemonServiceService = exports.DaemonServiceService = {
  lncli: {
    path: '/daemon.DaemonService/Lncli',
    requestStream: false,
    responseStream: false,
    requestType: daemon_pb.LncliRequest,
    responseType: daemon_pb.LncliResponse,
    requestSerialize: serialize_daemon_LncliRequest,
    requestDeserialize: deserialize_daemon_LncliRequest,
    responseSerialize: serialize_daemon_LncliResponse,
    responseDeserialize: deserialize_daemon_LncliResponse,
  },
  getConnection: {
    path: '/daemon.DaemonService/GetConnection',
    requestStream: false,
    responseStream: false,
    requestType: daemon_pb.GetConnectionRequest,
    responseType: daemon_pb.GetConnectionResponse,
    requestSerialize: serialize_daemon_GetConnectionRequest,
    requestDeserialize: deserialize_daemon_GetConnectionRequest,
    responseSerialize: serialize_daemon_GetConnectionResponse,
    responseDeserialize: deserialize_daemon_GetConnectionResponse,
  },
  getBalance: {
    path: '/daemon.DaemonService/GetBalance',
    requestStream: false,
    responseStream: false,
    requestType: daemon_pb.GetBalanceRequest,
    responseType: daemon_pb.GetBalanceResponse,
    requestSerialize: serialize_daemon_GetBalanceRequest,
    requestDeserialize: deserialize_daemon_GetBalanceRequest,
    responseSerialize: serialize_daemon_GetBalanceResponse,
    responseDeserialize: deserialize_daemon_GetBalanceResponse,
  },
};

exports.DaemonServiceClient = grpc.makeGenericClientConstructor(DaemonServiceService);
