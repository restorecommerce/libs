/* eslint-disable */
import { FileDescriptorProto } from "ts-proto-descriptors/google/protobuf/descriptor";
import {
  protoMetadata as protoMetadata1,
  Attribute,
  AttributeObj,
} from "../../io/restorecommerce/attribute";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "io.restorecommerce.meta";

export interface Meta {
  /** timestamp */
  created: number;
  /** timestamp */
  modified: number;
  /** ID from last User who modified it */
  modified_by: string;
  owner: Attribute[];
  acl: AttributeObj[];
}

const baseMeta: object = { created: 0, modified: 0, modified_by: "" };

export const Meta = {
  encode(message: Meta, writer: Writer = Writer.create()): Writer {
    if (message.created !== 0) {
      writer.uint32(9).double(message.created);
    }
    if (message.modified !== 0) {
      writer.uint32(17).double(message.modified);
    }
    if (message.modified_by !== "") {
      writer.uint32(26).string(message.modified_by);
    }
    for (const v of message.owner) {
      Attribute.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.acl) {
      AttributeObj.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Meta {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseMeta) as Meta;
    message.owner = [];
    message.acl = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.created = reader.double();
          break;
        case 2:
          message.modified = reader.double();
          break;
        case 3:
          message.modified_by = reader.string();
          break;
        case 4:
          message.owner.push(Attribute.decode(reader, reader.uint32()));
          break;
        case 5:
          message.acl.push(AttributeObj.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Meta {
    const message = globalThis.Object.create(baseMeta) as Meta;
    message.owner = [];
    message.acl = [];
    if (object.created !== undefined && object.created !== null) {
      message.created = Number(object.created);
    } else {
      message.created = 0;
    }
    if (object.modified !== undefined && object.modified !== null) {
      message.modified = Number(object.modified);
    } else {
      message.modified = 0;
    }
    if (object.modified_by !== undefined && object.modified_by !== null) {
      message.modified_by = String(object.modified_by);
    } else {
      message.modified_by = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      for (const e of object.owner) {
        message.owner.push(Attribute.fromJSON(e));
      }
    }
    if (object.acl !== undefined && object.acl !== null) {
      for (const e of object.acl) {
        message.acl.push(AttributeObj.fromJSON(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Meta>): Meta {
    const message = { ...baseMeta } as Meta;
    message.owner = [];
    message.acl = [];
    if (object.created !== undefined && object.created !== null) {
      message.created = object.created;
    } else {
      message.created = 0;
    }
    if (object.modified !== undefined && object.modified !== null) {
      message.modified = object.modified;
    } else {
      message.modified = 0;
    }
    if (object.modified_by !== undefined && object.modified_by !== null) {
      message.modified_by = object.modified_by;
    } else {
      message.modified_by = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      for (const e of object.owner) {
        message.owner.push(Attribute.fromPartial(e));
      }
    }
    if (object.acl !== undefined && object.acl !== null) {
      for (const e of object.acl) {
        message.acl.push(AttributeObj.fromPartial(e));
      }
    }
    return message;
  },

  toJSON(message: Meta): unknown {
    const obj: any = {};
    message.created !== undefined && (obj.created = message.created);
    message.modified !== undefined && (obj.modified = message.modified);
    message.modified_by !== undefined &&
      (obj.modified_by = message.modified_by);
    if (message.owner) {
      obj.owner = message.owner.map((e) =>
        e ? Attribute.toJSON(e) : undefined
      );
    } else {
      obj.owner = [];
    }
    if (message.acl) {
      obj.acl = message.acl.map((e) =>
        e ? AttributeObj.toJSON(e) : undefined
      );
    } else {
      obj.acl = [];
    }
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
    dependency: ["io/restorecommerce/attribute.proto"],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        field: [
          {
            name: "created",
            number: 1,
            label: 1,
            type: 1,
            jsonName: "created",
          },
          {
            name: "modified",
            number: 2,
            label: 1,
            type: 1,
            jsonName: "modified",
          },
          {
            name: "modified_by",
            number: 3,
            label: 1,
            type: 9,
            jsonName: "modifiedBy",
          },
          {
            name: "owner",
            number: 4,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.attribute.Attribute",
            jsonName: "owner",
          },
          {
            name: "acl",
            number: 5,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.attribute.AttributeObj",
            jsonName: "acl",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Meta",
      },
    ],
    enumType: [],
    service: [],
    extension: [],
    name: "io/restorecommerce/meta.proto",
    package: "io.restorecommerce.meta",
    sourceCodeInfo: {
      location: [
        {
          path: [4, 0, 2, 0],
          span: [9, 4, 23],
          leadingDetachedComments: [],
          trailingComments: " timestamp\n",
        },
        {
          path: [4, 0, 2, 1],
          span: [10, 4, 24],
          leadingDetachedComments: [],
          trailingComments: " timestamp\n",
        },
        {
          path: [4, 0, 2, 2],
          span: [11, 4, 27],
          leadingDetachedComments: [],
          trailingComments: " ID from last User who modified it\n",
        },
      ],
    },
    syntax: "proto3",
  }),
  references: { ".io.restorecommerce.meta.Meta": Meta },
  dependencies: [protoMetadata1],
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
