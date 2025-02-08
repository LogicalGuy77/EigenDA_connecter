// source: common/common.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.common.BlobCommitment', null, global);
goog.exportSymbol('proto.common.G1Commitment', null, global);
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
proto.common.G1Commitment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.common.G1Commitment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.common.G1Commitment.displayName = 'proto.common.G1Commitment';
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
proto.common.BlobCommitment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.common.BlobCommitment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.common.BlobCommitment.displayName = 'proto.common.BlobCommitment';
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
proto.common.G1Commitment.prototype.toObject = function(opt_includeInstance) {
  return proto.common.G1Commitment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.common.G1Commitment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.G1Commitment.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: msg.getX_asB64(),
    y: msg.getY_asB64()
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
 * @return {!proto.common.G1Commitment}
 */
proto.common.G1Commitment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.common.G1Commitment;
  return proto.common.G1Commitment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.common.G1Commitment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.common.G1Commitment}
 */
proto.common.G1Commitment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setY(value);
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
proto.common.G1Commitment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.common.G1Commitment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.common.G1Commitment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.G1Commitment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getY_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes x = 1;
 * @return {!(string|Uint8Array)}
 */
proto.common.G1Commitment.prototype.getX = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes x = 1;
 * This is a type-conversion wrapper around `getX()`
 * @return {string}
 */
proto.common.G1Commitment.prototype.getX_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getX()));
};


/**
 * optional bytes x = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getX()`
 * @return {!Uint8Array}
 */
proto.common.G1Commitment.prototype.getX_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getX()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.common.G1Commitment} returns this
 */
proto.common.G1Commitment.prototype.setX = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes y = 2;
 * @return {!(string|Uint8Array)}
 */
proto.common.G1Commitment.prototype.getY = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes y = 2;
 * This is a type-conversion wrapper around `getY()`
 * @return {string}
 */
proto.common.G1Commitment.prototype.getY_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getY()));
};


/**
 * optional bytes y = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getY()`
 * @return {!Uint8Array}
 */
proto.common.G1Commitment.prototype.getY_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getY()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.common.G1Commitment} returns this
 */
proto.common.G1Commitment.prototype.setY = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
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
proto.common.BlobCommitment.prototype.toObject = function(opt_includeInstance) {
  return proto.common.BlobCommitment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.common.BlobCommitment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.BlobCommitment.toObject = function(includeInstance, msg) {
  var f, obj = {
    commitment: msg.getCommitment_asB64(),
    lengthCommitment: msg.getLengthCommitment_asB64(),
    lengthProof: msg.getLengthProof_asB64(),
    length: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.common.BlobCommitment}
 */
proto.common.BlobCommitment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.common.BlobCommitment;
  return proto.common.BlobCommitment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.common.BlobCommitment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.common.BlobCommitment}
 */
proto.common.BlobCommitment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setCommitment(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setLengthCommitment(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setLengthProof(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLength(value);
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
proto.common.BlobCommitment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.common.BlobCommitment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.common.BlobCommitment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.BlobCommitment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommitment_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getLengthCommitment_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getLengthProof_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getLength();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional bytes commitment = 1;
 * @return {!(string|Uint8Array)}
 */
proto.common.BlobCommitment.prototype.getCommitment = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes commitment = 1;
 * This is a type-conversion wrapper around `getCommitment()`
 * @return {string}
 */
proto.common.BlobCommitment.prototype.getCommitment_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getCommitment()));
};


/**
 * optional bytes commitment = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getCommitment()`
 * @return {!Uint8Array}
 */
proto.common.BlobCommitment.prototype.getCommitment_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getCommitment()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.common.BlobCommitment} returns this
 */
proto.common.BlobCommitment.prototype.setCommitment = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes length_commitment = 2;
 * @return {!(string|Uint8Array)}
 */
proto.common.BlobCommitment.prototype.getLengthCommitment = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes length_commitment = 2;
 * This is a type-conversion wrapper around `getLengthCommitment()`
 * @return {string}
 */
proto.common.BlobCommitment.prototype.getLengthCommitment_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getLengthCommitment()));
};


/**
 * optional bytes length_commitment = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getLengthCommitment()`
 * @return {!Uint8Array}
 */
proto.common.BlobCommitment.prototype.getLengthCommitment_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getLengthCommitment()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.common.BlobCommitment} returns this
 */
proto.common.BlobCommitment.prototype.setLengthCommitment = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes length_proof = 3;
 * @return {!(string|Uint8Array)}
 */
proto.common.BlobCommitment.prototype.getLengthProof = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes length_proof = 3;
 * This is a type-conversion wrapper around `getLengthProof()`
 * @return {string}
 */
proto.common.BlobCommitment.prototype.getLengthProof_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getLengthProof()));
};


/**
 * optional bytes length_proof = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getLengthProof()`
 * @return {!Uint8Array}
 */
proto.common.BlobCommitment.prototype.getLengthProof_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getLengthProof()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.common.BlobCommitment} returns this
 */
proto.common.BlobCommitment.prototype.setLengthProof = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional uint32 length = 4;
 * @return {number}
 */
proto.common.BlobCommitment.prototype.getLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.common.BlobCommitment} returns this
 */
proto.common.BlobCommitment.prototype.setLength = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


goog.object.extend(exports, proto.common);
