/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var enum_pb = require('./enum_pb.js');
goog.exportSymbol('proto.statistico.ResultFilter', null, global);
goog.exportSymbol('proto.statistico.StatFilter', null, global);

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
proto.statistico.ResultFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.statistico.ResultFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.statistico.ResultFilter.displayName = 'proto.statistico.ResultFilter';
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
proto.statistico.ResultFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.statistico.ResultFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.statistico.ResultFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.statistico.ResultFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    team: jspb.Message.getFieldWithDefault(msg, 1, 0),
    result: jspb.Message.getFieldWithDefault(msg, 2, 0),
    games: jspb.Message.getFieldWithDefault(msg, 3, 0),
    venue: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.statistico.ResultFilter}
 */
proto.statistico.ResultFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.statistico.ResultFilter;
  return proto.statistico.ResultFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.statistico.ResultFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.statistico.ResultFilter}
 */
proto.statistico.ResultFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.statistico.TeamEnum} */ (reader.readEnum());
      msg.setTeam(value);
      break;
    case 2:
      var value = /** @type {!proto.statistico.ResultEnum} */ (reader.readEnum());
      msg.setResult(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGames(value);
      break;
    case 4:
      var value = /** @type {!proto.statistico.VenueEnum} */ (reader.readEnum());
      msg.setVenue(value);
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
proto.statistico.ResultFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.statistico.ResultFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.statistico.ResultFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.statistico.ResultFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeam();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getResult();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getGames();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getVenue();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional TeamEnum team = 1;
 * @return {!proto.statistico.TeamEnum}
 */
proto.statistico.ResultFilter.prototype.getTeam = function() {
  return /** @type {!proto.statistico.TeamEnum} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.statistico.TeamEnum} value */
proto.statistico.ResultFilter.prototype.setTeam = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional ResultEnum result = 2;
 * @return {!proto.statistico.ResultEnum}
 */
proto.statistico.ResultFilter.prototype.getResult = function() {
  return /** @type {!proto.statistico.ResultEnum} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.statistico.ResultEnum} value */
proto.statistico.ResultFilter.prototype.setResult = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional uint32 games = 3;
 * @return {number}
 */
proto.statistico.ResultFilter.prototype.getGames = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.statistico.ResultFilter.prototype.setGames = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional VenueEnum venue = 4;
 * @return {!proto.statistico.VenueEnum}
 */
proto.statistico.ResultFilter.prototype.getVenue = function() {
  return /** @type {!proto.statistico.VenueEnum} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.statistico.VenueEnum} value */
proto.statistico.ResultFilter.prototype.setVenue = function(value) {
  jspb.Message.setProto3EnumField(this, 4, value);
};



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
proto.statistico.StatFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.statistico.StatFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.statistico.StatFilter.displayName = 'proto.statistico.StatFilter';
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
proto.statistico.StatFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.statistico.StatFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.statistico.StatFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.statistico.StatFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    stat: jspb.Message.getFieldWithDefault(msg, 1, 0),
    team: jspb.Message.getFieldWithDefault(msg, 2, 0),
    action: jspb.Message.getFieldWithDefault(msg, 3, 0),
    games: jspb.Message.getFieldWithDefault(msg, 4, 0),
    measure: jspb.Message.getFieldWithDefault(msg, 5, 0),
    metric: jspb.Message.getFieldWithDefault(msg, 6, 0),
    value: +jspb.Message.getFieldWithDefault(msg, 7, 0.0),
    venue: jspb.Message.getFieldWithDefault(msg, 8, 0)
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
 * @return {!proto.statistico.StatFilter}
 */
proto.statistico.StatFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.statistico.StatFilter;
  return proto.statistico.StatFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.statistico.StatFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.statistico.StatFilter}
 */
proto.statistico.StatFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.statistico.StatEnum} */ (reader.readEnum());
      msg.setStat(value);
      break;
    case 2:
      var value = /** @type {!proto.statistico.TeamEnum} */ (reader.readEnum());
      msg.setTeam(value);
      break;
    case 3:
      var value = /** @type {!proto.statistico.ActionEnum} */ (reader.readEnum());
      msg.setAction(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGames(value);
      break;
    case 5:
      var value = /** @type {!proto.statistico.MeasureEnum} */ (reader.readEnum());
      msg.setMeasure(value);
      break;
    case 6:
      var value = /** @type {!proto.statistico.MetricEnum} */ (reader.readEnum());
      msg.setMetric(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValue(value);
      break;
    case 8:
      var value = /** @type {!proto.statistico.VenueEnum} */ (reader.readEnum());
      msg.setVenue(value);
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
proto.statistico.StatFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.statistico.StatFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.statistico.StatFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.statistico.StatFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStat();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getTeam();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getGames();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getMeasure();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getMetric();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
  f = message.getVenue();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
};


/**
 * optional StatEnum stat = 1;
 * @return {!proto.statistico.StatEnum}
 */
proto.statistico.StatFilter.prototype.getStat = function() {
  return /** @type {!proto.statistico.StatEnum} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.statistico.StatEnum} value */
proto.statistico.StatFilter.prototype.setStat = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional TeamEnum team = 2;
 * @return {!proto.statistico.TeamEnum}
 */
proto.statistico.StatFilter.prototype.getTeam = function() {
  return /** @type {!proto.statistico.TeamEnum} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.statistico.TeamEnum} value */
proto.statistico.StatFilter.prototype.setTeam = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional ActionEnum action = 3;
 * @return {!proto.statistico.ActionEnum}
 */
proto.statistico.StatFilter.prototype.getAction = function() {
  return /** @type {!proto.statistico.ActionEnum} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.statistico.ActionEnum} value */
proto.statistico.StatFilter.prototype.setAction = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional uint32 games = 4;
 * @return {number}
 */
proto.statistico.StatFilter.prototype.getGames = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.statistico.StatFilter.prototype.setGames = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional MeasureEnum measure = 5;
 * @return {!proto.statistico.MeasureEnum}
 */
proto.statistico.StatFilter.prototype.getMeasure = function() {
  return /** @type {!proto.statistico.MeasureEnum} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {!proto.statistico.MeasureEnum} value */
proto.statistico.StatFilter.prototype.setMeasure = function(value) {
  jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional MetricEnum metric = 6;
 * @return {!proto.statistico.MetricEnum}
 */
proto.statistico.StatFilter.prototype.getMetric = function() {
  return /** @type {!proto.statistico.MetricEnum} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {!proto.statistico.MetricEnum} value */
proto.statistico.StatFilter.prototype.setMetric = function(value) {
  jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional float value = 7;
 * @return {number}
 */
proto.statistico.StatFilter.prototype.getValue = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 7, 0.0));
};


/** @param {number} value */
proto.statistico.StatFilter.prototype.setValue = function(value) {
  jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional VenueEnum venue = 8;
 * @return {!proto.statistico.VenueEnum}
 */
proto.statistico.StatFilter.prototype.getVenue = function() {
  return /** @type {!proto.statistico.VenueEnum} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {!proto.statistico.VenueEnum} value */
proto.statistico.StatFilter.prototype.setVenue = function(value) {
  jspb.Message.setProto3EnumField(this, 8, value);
};


goog.object.extend(exports, proto.statistico);
