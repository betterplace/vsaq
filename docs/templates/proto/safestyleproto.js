/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.webutil.html.types.SafeStyleProto');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');


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
proto.webutil.html.types.SafeStyleProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.webutil.html.types.SafeStyleProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.webutil.html.types.SafeStyleProto.displayName = 'proto.webutil.html.types.SafeStyleProto';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.webutil.html.types.SafeStyleProto.prototype.toObject = function(opt_includeInstance) {
  return proto.webutil.html.types.SafeStyleProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.webutil.html.types.SafeStyleProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.webutil.html.types.SafeStyleProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    privateDoNotAccessOrElseSafeStyleWrappedValue: jspb.Message.getField(msg, 5)
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
 * @return {!proto.webutil.html.types.SafeStyleProto}
 */
proto.webutil.html.types.SafeStyleProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.webutil.html.types.SafeStyleProto;
  return proto.webutil.html.types.SafeStyleProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.webutil.html.types.SafeStyleProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.webutil.html.types.SafeStyleProto}
 */
proto.webutil.html.types.SafeStyleProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrivateDoNotAccessOrElseSafeStyleWrappedValue(value);
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
proto.webutil.html.types.SafeStyleProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.webutil.html.types.SafeStyleProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.webutil.html.types.SafeStyleProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.webutil.html.types.SafeStyleProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string private_do_not_access_or_else_safe_style_wrapped_value = 5;
 * @return {string}
 */
proto.webutil.html.types.SafeStyleProto.prototype.getPrivateDoNotAccessOrElseSafeStyleWrappedValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.webutil.html.types.SafeStyleProto.prototype.setPrivateDoNotAccessOrElseSafeStyleWrappedValue = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.webutil.html.types.SafeStyleProto.prototype.clearPrivateDoNotAccessOrElseSafeStyleWrappedValue = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.webutil.html.types.SafeStyleProto.prototype.hasPrivateDoNotAccessOrElseSafeStyleWrappedValue = function() {
  return jspb.Message.getField(this, 5) != null;
};


