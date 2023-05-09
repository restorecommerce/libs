/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { protoMetadata as protoMetadata1 } from "../../google/protobuf/descriptor";

export const protobufPackage = "io.restorecommerce.options";

export interface Resolver {
  targetType?: string | undefined;
  targetService?: string | undefined;
  targetSubService?: string | undefined;
  targetMethod?: string | undefined;
  fieldName?: string | undefined;
}

export interface KafkaSubscription {
  plural?: string | undefined;
  topic?: string | undefined;
  created?: string | undefined;
  updated?: string | undefined;
  deleted?: string | undefined;
}

function createBaseResolver(): Resolver {
  return {
    targetType: undefined,
    targetService: undefined,
    targetSubService: undefined,
    targetMethod: undefined,
    fieldName: undefined,
  };
}

export const Resolver = {
  encode(message: Resolver, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetType !== undefined) {
      writer.uint32(10).string(message.targetType);
    }
    if (message.targetService !== undefined) {
      writer.uint32(18).string(message.targetService);
    }
    if (message.targetSubService !== undefined) {
      writer.uint32(26).string(message.targetSubService);
    }
    if (message.targetMethod !== undefined) {
      writer.uint32(34).string(message.targetMethod);
    }
    if (message.fieldName !== undefined) {
      writer.uint32(42).string(message.fieldName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resolver {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResolver();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetType = reader.string();
          break;
        case 2:
          message.targetService = reader.string();
          break;
        case 3:
          message.targetSubService = reader.string();
          break;
        case 4:
          message.targetMethod = reader.string();
          break;
        case 5:
          message.fieldName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Resolver {
    return {
      targetType: isSet(object.targetType) ? String(object.targetType) : undefined,
      targetService: isSet(object.targetService) ? String(object.targetService) : undefined,
      targetSubService: isSet(object.targetSubService) ? String(object.targetSubService) : undefined,
      targetMethod: isSet(object.targetMethod) ? String(object.targetMethod) : undefined,
      fieldName: isSet(object.fieldName) ? String(object.fieldName) : undefined,
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
    message.targetType = object.targetType ?? undefined;
    message.targetService = object.targetService ?? undefined;
    message.targetSubService = object.targetSubService ?? undefined;
    message.targetMethod = object.targetMethod ?? undefined;
    message.fieldName = object.fieldName ?? undefined;
    return message;
  },
};

function createBaseKafkaSubscription(): KafkaSubscription {
  return { plural: undefined, topic: undefined, created: undefined, updated: undefined, deleted: undefined };
}

export const KafkaSubscription = {
  encode(message: KafkaSubscription, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.plural !== undefined) {
      writer.uint32(10).string(message.plural);
    }
    if (message.topic !== undefined) {
      writer.uint32(18).string(message.topic);
    }
    if (message.created !== undefined) {
      writer.uint32(26).string(message.created);
    }
    if (message.updated !== undefined) {
      writer.uint32(34).string(message.updated);
    }
    if (message.deleted !== undefined) {
      writer.uint32(42).string(message.deleted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KafkaSubscription {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKafkaSubscription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.plural = reader.string();
          break;
        case 2:
          message.topic = reader.string();
          break;
        case 3:
          message.created = reader.string();
          break;
        case 4:
          message.updated = reader.string();
          break;
        case 5:
          message.deleted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KafkaSubscription {
    return {
      plural: isSet(object.plural) ? String(object.plural) : undefined,
      topic: isSet(object.topic) ? String(object.topic) : undefined,
      created: isSet(object.created) ? String(object.created) : undefined,
      updated: isSet(object.updated) ? String(object.updated) : undefined,
      deleted: isSet(object.deleted) ? String(object.deleted) : undefined,
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
    message.plural = object.plural ?? undefined;
    message.topic = object.topic ?? undefined;
    message.created = object.created ?? undefined;
    message.updated = object.updated ?? undefined;
    message.deleted = object.deleted ?? undefined;
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
        "proto3Optional": true,
      }, {
        "name": "target_service",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "targetService",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "target_sub_service",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "targetSubService",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "target_method",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "targetMethod",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "field_name",
        "number": 5,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "fieldName",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "_target_type", "options": undefined },
        { "name": "_target_service", "options": undefined },
        { "name": "_target_sub_service", "options": undefined },
        { "name": "_target_method", "options": undefined },
        { "name": "_field_name", "options": undefined },
      ],
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
        "proto3Optional": true,
      }, {
        "name": "topic",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "topic",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "created",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "created",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "updated",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "updated",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "deleted",
        "number": 5,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "deleted",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "_plural", "options": undefined },
        { "name": "_topic", "options": undefined },
        { "name": "_created", "options": undefined },
        { "name": "_updated", "options": undefined },
        { "name": "_deleted", "options": undefined },
      ],
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
      "proto3Optional": true,
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
      "proto3Optional": true,
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
      "proto3Optional": true,
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
      "proto3Optional": true,
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
