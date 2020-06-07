// source: daemon.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.daemon.GetBalanceRequest', null, global);
goog.exportSymbol('proto.daemon.GetBalanceResponse', null, global);
goog.exportSymbol('proto.daemon.GetConnectionRequest', null, global);
goog.exportSymbol('proto.daemon.GetConnectionResponse', null, global);
goog.exportSymbol('proto.daemon.LncliRequest', null, global);
goog.exportSymbol('proto.daemon.LncliResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.LncliRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.LncliRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.daemon.LncliRequest.displayName = 'proto.daemon.LncliRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.LncliResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.LncliResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.daemon.LncliResponse.displayName = 'proto.daemon.LncliResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.GetConnectionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.GetConnectionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.daemon.GetConnectionRequest.displayName = 'proto.daemon.GetConnectionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.GetConnectionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.GetConnectionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.daemon.GetConnectionResponse.displayName = 'proto.daemon.GetConnectionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.GetBalanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.GetBalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.daemon.GetBalanceRequest.displayName = 'proto.daemon.GetBalanceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.GetBalanceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.GetBalanceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.daemon.GetBalanceResponse.displayName = 'proto.daemon.GetBalanceResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.LncliRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.LncliRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.LncliRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.LncliRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    command: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.LncliRequest}
 */
proto.daemon.LncliRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.LncliRequest;
  return proto.daemon.LncliRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.LncliRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.LncliRequest}
 */
proto.daemon.LncliRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommand(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.LncliRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.LncliRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.LncliRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.LncliRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommand();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string command = 1;
 * @return {string}
 */
proto.daemon.LncliRequest.prototype.getCommand = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.daemon.LncliRequest} returns this
 */
proto.daemon.LncliRequest.prototype.setCommand = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.LncliResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.LncliResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.LncliResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.LncliResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    textResponse: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.LncliResponse}
 */
proto.daemon.LncliResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.LncliResponse;
  return proto.daemon.LncliResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.LncliResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.LncliResponse}
 */
proto.daemon.LncliResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTextResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.LncliResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.LncliResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.LncliResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.LncliResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTextResponse();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string text_response = 2;
 * @return {string}
 */
proto.daemon.LncliResponse.prototype.getTextResponse = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.daemon.LncliResponse} returns this
 */
proto.daemon.LncliResponse.prototype.setTextResponse = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.GetConnectionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.GetConnectionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.GetConnectionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.GetConnectionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.GetConnectionRequest}
 */
proto.daemon.GetConnectionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.GetConnectionRequest;
  return proto.daemon.GetConnectionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.GetConnectionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.GetConnectionRequest}
 */
proto.daemon.GetConnectionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.GetConnectionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.GetConnectionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.GetConnectionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.GetConnectionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.GetConnectionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.GetConnectionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.GetConnectionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.GetConnectionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeAlive: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    grpcAddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    p2pAddress: jspb.Message.getFieldWithDefault(msg, 3, ""),
    certPath: jspb.Message.getFieldWithDefault(msg, 4, ""),
    macaroonPath: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.GetConnectionResponse}
 */
proto.daemon.GetConnectionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.GetConnectionResponse;
  return proto.daemon.GetConnectionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.GetConnectionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.GetConnectionResponse}
 */
proto.daemon.GetConnectionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNodeAlive(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGrpcAddress(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setP2pAddress(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCertPath(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMacaroonPath(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.GetConnectionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.GetConnectionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.GetConnectionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.GetConnectionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeAlive();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getGrpcAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getP2pAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCertPath();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMacaroonPath();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional bool node_alive = 1;
 * @return {boolean}
 */
proto.daemon.GetConnectionResponse.prototype.getNodeAlive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.daemon.GetConnectionResponse} returns this
 */
proto.daemon.GetConnectionResponse.prototype.setNodeAlive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string grpc_address = 2;
 * @return {string}
 */
proto.daemon.GetConnectionResponse.prototype.getGrpcAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.daemon.GetConnectionResponse} returns this
 */
proto.daemon.GetConnectionResponse.prototype.setGrpcAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string p2p_address = 3;
 * @return {string}
 */
proto.daemon.GetConnectionResponse.prototype.getP2pAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.daemon.GetConnectionResponse} returns this
 */
proto.daemon.GetConnectionResponse.prototype.setP2pAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string cert_path = 4;
 * @return {string}
 */
proto.daemon.GetConnectionResponse.prototype.getCertPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.daemon.GetConnectionResponse} returns this
 */
proto.daemon.GetConnectionResponse.prototype.setCertPath = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string macaroon_path = 5;
 * @return {string}
 */
proto.daemon.GetConnectionResponse.prototype.getMacaroonPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.daemon.GetConnectionResponse} returns this
 */
proto.daemon.GetConnectionResponse.prototype.setMacaroonPath = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.GetBalanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.GetBalanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.GetBalanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.GetBalanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.GetBalanceRequest}
 */
proto.daemon.GetBalanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.GetBalanceRequest;
  return proto.daemon.GetBalanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.GetBalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.GetBalanceRequest}
 */
proto.daemon.GetBalanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.GetBalanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.GetBalanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.GetBalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.GetBalanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.GetBalanceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.GetBalanceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.GetBalanceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.GetBalanceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    bufferBalance: jspb.Message.getFieldWithDefault(msg, 1, 0),
    daemonBalance: jspb.Message.getFieldWithDefault(msg, 2, 0),
    channelMissingBalance: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.GetBalanceResponse}
 */
proto.daemon.GetBalanceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.GetBalanceResponse;
  return proto.daemon.GetBalanceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.GetBalanceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.GetBalanceResponse}
 */
proto.daemon.GetBalanceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBufferBalance(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDaemonBalance(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setChannelMissingBalance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.GetBalanceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.GetBalanceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.GetBalanceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.GetBalanceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBufferBalance();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getDaemonBalance();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getChannelMissingBalance();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional int64 buffer_balance = 1;
 * @return {number}
 */
proto.daemon.GetBalanceResponse.prototype.getBufferBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.daemon.GetBalanceResponse} returns this
 */
proto.daemon.GetBalanceResponse.prototype.setBufferBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 daemon_balance = 2;
 * @return {number}
 */
proto.daemon.GetBalanceResponse.prototype.getDaemonBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.daemon.GetBalanceResponse} returns this
 */
proto.daemon.GetBalanceResponse.prototype.setDaemonBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 channel_missing_balance = 3;
 * @return {number}
 */
proto.daemon.GetBalanceResponse.prototype.getChannelMissingBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.daemon.GetBalanceResponse} returns this
 */
proto.daemon.GetBalanceResponse.prototype.setChannelMissingBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


goog.object.extend(exports, proto.daemon);