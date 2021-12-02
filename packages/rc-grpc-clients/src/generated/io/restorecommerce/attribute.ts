/* eslint-disable */
import { FileDescriptorProto } from "ts-proto-descriptors/google/protobuf/descriptor";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "io.restorecommerce.attribute";

export interface Attribute {
  id: string;
  value: string;
  attribute: Attribute[];
}

export interface AttributeObj {
  attribute?: Attribute;
}

const baseAttribute: object = { id: "", value: "" };

export const Attribute = {
  encode(message: Attribute, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    for (const v of message.attribute) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Attribute {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseAttribute) as Attribute;
    message.attribute = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        case 3:
          message.attribute.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Attribute {
    const message = globalThis.Object.create(baseAttribute) as Attribute;
    message.attribute = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    if (object.attribute !== undefined && object.attribute !== null) {
      for (const e of object.attribute) {
        message.attribute.push(Attribute.fromJSON(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Attribute>): Attribute {
    const message = { ...baseAttribute } as Attribute;
    message.attribute = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    if (object.attribute !== undefined && object.attribute !== null) {
      for (const e of object.attribute) {
        message.attribute.push(Attribute.fromPartial(e));
      }
    }
    return message;
  },

  toJSON(message: Attribute): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.value !== undefined && (obj.value = message.value);
    if (message.attribute) {
      obj.attribute = message.attribute.map((e) =>
        e ? Attribute.toJSON(e) : undefined
      );
    } else {
      obj.attribute = [];
    }
    return obj;
  },
};

const baseAttributeObj: object = {};

export const AttributeObj = {
  encode(message: AttributeObj, writer: Writer = Writer.create()): Writer {
    if (message.attribute !== undefined) {
      Attribute.encode(message.attribute, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): AttributeObj {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseAttributeObj) as AttributeObj;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.attribute = Attribute.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AttributeObj {
    const message = globalThis.Object.create(baseAttributeObj) as AttributeObj;
    if (object.attribute !== undefined && object.attribute !== null) {
      message.attribute = Attribute.fromJSON(object.attribute);
    } else {
      message.attribute = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<AttributeObj>): AttributeObj {
    const message = { ...baseAttributeObj } as AttributeObj;
    if (object.attribute !== undefined && object.attribute !== null) {
      message.attribute = Attribute.fromPartial(object.attribute);
    } else {
      message.attribute = undefined;
    }
    return message;
  },

  toJSON(message: AttributeObj): unknown {
    const obj: any = {};
    message.attribute !== undefined &&
      (obj.attribute = message.attribute
        ? Attribute.toJSON(message.attribute)
        : undefined);
    return obj;
  },
};

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto.fromPartial({
    dependency: [],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        field: [
          { name: "id", number: 1, label: 1, type: 9, jsonName: "id" },
          { name: "value", number: 2, label: 1, type: 9, jsonName: "value" },
          {
            name: "attribute",
            number: 3,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.attribute.Attribute",
            jsonName: "attribute",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Attribute",
      },
      {
        field: [
          {
            name: "attribute",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.attribute.Attribute",
            jsonName: "attribute",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "AttributeObj",
      },
    ],
    enumType: [],
    service: [],
    extension: [],
    name: "io/restorecommerce/attribute.proto",
    package: "io.restorecommerce.attribute",
    sourceCodeInfo: { location: [] },
    syntax: "proto3",
  }),
  references: {
    ".io.restorecommerce.attribute.Attribute": Attribute,
    ".io.restorecommerce.attribute.AttributeObj": AttributeObj,
  },
  dependencies: [],
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
