/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";

export const protobufPackage = "io.restorecommerce.reference";

export interface Reference {
  instance_type?: string | undefined;
  instance_id?: string | undefined;
}

function createBaseReference(): Reference {
  return { instance_type: undefined, instance_id: undefined };
}

export const Reference = {
  encode(message: Reference, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instance_type !== undefined) {
      writer.uint32(10).string(message.instance_type);
    }
    if (message.instance_id !== undefined) {
      writer.uint32(18).string(message.instance_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Reference {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReference();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instance_type = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.instance_id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Reference {
    return {
      instance_type: isSet(object.instance_type) ? String(object.instance_type) : undefined,
      instance_id: isSet(object.instance_id) ? String(object.instance_id) : undefined,
    };
  },

  toJSON(message: Reference): unknown {
    const obj: any = {};
    message.instance_type !== undefined && (obj.instance_type = message.instance_type);
    message.instance_id !== undefined && (obj.instance_id = message.instance_id);
    return obj;
  },

  create(base?: DeepPartial<Reference>): Reference {
    return Reference.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Reference>): Reference {
    const message = createBaseReference();
    message.instance_type = object.instance_type ?? undefined;
    message.instance_id = object.instance_id ?? undefined;
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
    "name": "io/restorecommerce/reference.proto",
    "package": "io.restorecommerce.reference",
    "dependency": [],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "Reference",
      "field": [{
        "name": "instance_type",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "instanceType",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "instance_id",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "instanceId",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_instance_type", "options": undefined }, {
        "name": "_instance_id",
        "options": undefined,
      }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "enumType": [],
    "service": [],
    "extension": [],
    "options": undefined,
    "sourceCodeInfo": { "location": [] },
    "syntax": "proto3",
  }),
  references: { ".io.restorecommerce.reference.Reference": Reference },
  dependencies: [],
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
