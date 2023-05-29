/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { protoMetadata as protoMetadata1 } from "../../google/protobuf/descriptor";

export const protobufPackage = "io.restorecommerce.options";

export interface Resolver {
  targetType: string;
  targetService: string;
  targetSubService: string;
  targetMethod: string;
  fieldName: string;
}

export interface KafkaSubscription {
  plural: string;
  topic: string;
  created: string;
  updated: string;
  deleted: string;
}

function createBaseResolver(): Resolver {
  return { targetType: "", targetService: "", targetSubService: "", targetMethod: "", fieldName: "" };
}

export const Resolver = {
  encode(message: Resolver, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetType !== "") {
      writer.uint32(10).string(message.targetType);
    }
    if (message.targetService !== "") {
      writer.uint32(18).string(message.targetService);
    }
    if (message.targetSubService !== "") {
      writer.uint32(26).string(message.targetSubService);
    }
    if (message.targetMethod !== "") {
      writer.uint32(34).string(message.targetMethod);
    }
    if (message.fieldName !== "") {
      writer.uint32(42).string(message.fieldName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resolver {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResolver();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.targetType = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.targetService = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.targetSubService = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.targetMethod = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.fieldName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Resolver {
    return {
      targetType: isSet(object.targetType) ? String(object.targetType) : "",
      targetService: isSet(object.targetService) ? String(object.targetService) : "",
      targetSubService: isSet(object.targetSubService) ? String(object.targetSubService) : "",
      targetMethod: isSet(object.targetMethod) ? String(object.targetMethod) : "",
      fieldName: isSet(object.fieldName) ? String(object.fieldName) : "",
    };
  },

  toJSON(message: Resolver): unknown {
    const obj: any = {};
    message.targetType !== undefined && (obj.targetType = message.targetType);
    message.targetService !== undefined && (obj.targetService = message.targetService);
    message.targetSubService !== undefined && (obj.targetSubService = message.targetSubService);
    message.targetMethod !== undefined && (obj.targetMethod = message.targetMethod);
    message.fieldName !== undefined && (obj.fieldName = message.fieldName);
    return obj;
  },

  create(base?: DeepPartial<Resolver>): Resolver {
    return Resolver.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Resolver>): Resolver {
    const message = createBaseResolver();
    message.targetType = object.targetType ?? "";
    message.targetService = object.targetService ?? "";
    message.targetSubService = object.targetSubService ?? "";
    message.targetMethod = object.targetMethod ?? "";
    message.fieldName = object.fieldName ?? "";
    return message;
  },
};

function createBaseKafkaSubscription(): KafkaSubscription {
  return { plural: "", topic: "", created: "", updated: "", deleted: "" };
}

export const KafkaSubscription = {
  encode(message: KafkaSubscription, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.plural !== "") {
      writer.uint32(10).string(message.plural);
    }
    if (message.topic !== "") {
      writer.uint32(18).string(message.topic);
    }
    if (message.created !== "") {
      writer.uint32(26).string(message.created);
    }
    if (message.updated !== "") {
      writer.uint32(34).string(message.updated);
    }
    if (message.deleted !== "") {
      writer.uint32(42).string(message.deleted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KafkaSubscription {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKafkaSubscription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.plural = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.topic = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.created = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.updated = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.deleted = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): KafkaSubscription {
    return {
      plural: isSet(object.plural) ? String(object.plural) : "",
      topic: isSet(object.topic) ? String(object.topic) : "",
      created: isSet(object.created) ? String(object.created) : "",
      updated: isSet(object.updated) ? String(object.updated) : "",
      deleted: isSet(object.deleted) ? String(object.deleted) : "",
    };
  },

  toJSON(message: KafkaSubscription): unknown {
    const obj: any = {};
    message.plural !== undefined && (obj.plural = message.plural);
    message.topic !== undefined && (obj.topic = message.topic);
    message.created !== undefined && (obj.created = message.created);
    message.updated !== undefined && (obj.updated = message.updated);
    message.deleted !== undefined && (obj.deleted = message.deleted);
    return obj;
  },

  create(base?: DeepPartial<KafkaSubscription>): KafkaSubscription {
    return KafkaSubscription.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<KafkaSubscription>): KafkaSubscription {
    const message = createBaseKafkaSubscription();
    message.plural = object.plural ?? "";
    message.topic = object.topic ?? "";
    message.created = object.created ?? "";
    message.updated = object.updated ?? "";
    message.deleted = object.deleted ?? "";
    return message;
  },
};

type ProtoMetaMessageOptions = {
  options?: { [key: string]: any };
  fields?: { [key: string]: { [key: string]: any } };
  oneof?: { [key: string]: { [key: string]: any } };
  nested?: { [key: string]: ProtoMetaMessageOptions };
};

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto1;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
  options?: {
    options?: { [key: string]: any };
    services?: {
      [key: string]: { options?: { [key: string]: any }; methods?: { [key: string]: { [key: string]: any } } };
    };
    messages?: { [key: string]: ProtoMetaMessageOptions };
    enums?: { [key: string]: { options?: { [key: string]: any }; values?: { [key: string]: { [key: string]: any } } } };
  };
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto1.fromPartial({
    "name": "io/restorecommerce/options.proto",
    "package": "io.restorecommerce.options",
    "dependency": ["google/protobuf/descriptor.proto"],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "Resolver",
      "field": [{
        "name": "target_type",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "targetType",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "target_service",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "targetService",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "target_sub_service",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "targetSubService",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "target_method",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "targetMethod",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "field_name",
        "number": 5,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "fieldName",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "KafkaSubscription",
      "field": [{
        "name": "plural",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "plural",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "topic",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "topic",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "created",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "created",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "updated",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "updated",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "deleted",
        "number": 5,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "deleted",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "enumType": [],
    "service": [],
    "extension": [{
      "name": "resolver",
      "number": 31000,
      "label": 1,
      "type": 11,
      "typeName": ".io.restorecommerce.options.Resolver",
      "extendee": ".google.protobuf.FieldOptions",
      "defaultValue": "",
      "oneofIndex": 0,
      "jsonName": "resolver",
      "options": undefined,
      "proto3Optional": false,
    }, {
      "name": "is_query",
      "number": 31001,
      "label": 1,
      "type": 8,
      "typeName": "",
      "extendee": ".google.protobuf.MethodOptions",
      "defaultValue": "",
      "oneofIndex": 0,
      "jsonName": "isQuery",
      "options": undefined,
      "proto3Optional": false,
    }, {
      "name": "service_name",
      "number": 31002,
      "label": 1,
      "type": 9,
      "typeName": "",
      "extendee": ".google.protobuf.ServiceOptions",
      "defaultValue": "",
      "oneofIndex": 0,
      "jsonName": "serviceName",
      "options": undefined,
      "proto3Optional": false,
    }, {
      "name": "kafka_subscriber",
      "number": 31003,
      "label": 1,
      "type": 11,
      "typeName": ".io.restorecommerce.options.KafkaSubscription",
      "extendee": ".google.protobuf.MessageOptions",
      "defaultValue": "",
      "oneofIndex": 0,
      "jsonName": "kafkaSubscriber",
      "options": undefined,
      "proto3Optional": false,
    }],
    "options": undefined,
    "sourceCodeInfo": { "location": [] },
    "syntax": "proto3",
  }),
  references: {
    ".io.restorecommerce.options.Resolver": Resolver,
    ".io.restorecommerce.options.KafkaSubscription": KafkaSubscription,
  },
  dependencies: [protoMetadata1],
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
