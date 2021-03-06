/* eslint-disable */
import { FileDescriptorProto } from "ts-proto-descriptors/google/protobuf/descriptor";
import {
  protoMetadata as protoMetadata1,
  Attribute,
} from "../../io/restorecommerce/attribute";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "io.restorecommerce.meta";

export interface Meta {
  /** timestamp */
  created: number;
  /** timestamp */
  modified: number;
  /** ID from last User who modified it */
  modifiedBy: string;
  owner: Attribute[];
}

const baseMeta: object = { created: 0, modified: 0, modifiedBy: "" };

export const Meta = {
  encode(message: Meta, writer: Writer = Writer.create()): Writer {
    if (message.created !== 0) {
      writer.uint32(9).double(message.created);
    }
    if (message.modified !== 0) {
      writer.uint32(17).double(message.modified);
    }
    if (message.modifiedBy !== "") {
      writer.uint32(26).string(message.modifiedBy);
    }
    for (const v of message.owner) {
      Attribute.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Meta {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseMeta) as Meta;
    message.owner = [];
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
          message.modifiedBy = reader.string();
          break;
        case 4:
          message.owner.push(Attribute.decode(reader, reader.uint32()));
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
    if (object.modifiedBy !== undefined && object.modifiedBy !== null) {
      message.modifiedBy = String(object.modifiedBy);
    } else {
      message.modifiedBy = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      for (const e of object.owner) {
        message.owner.push(Attribute.fromJSON(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Meta>): Meta {
    const message = { ...baseMeta } as Meta;
    message.owner = [];
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
    if (object.modifiedBy !== undefined && object.modifiedBy !== null) {
      message.modifiedBy = object.modifiedBy;
    } else {
      message.modifiedBy = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      for (const e of object.owner) {
        message.owner.push(Attribute.fromPartial(e));
      }
    }
    return message;
  },

  toJSON(message: Meta): unknown {
    const obj: any = {};
    message.created !== undefined && (obj.created = message.created);
    message.modified !== undefined && (obj.modified = message.modified);
    message.modifiedBy !== undefined && (obj.modifiedBy = message.modifiedBy);
    if (message.owner) {
      obj.owner = message.owner.map((e) =>
        e ? Attribute.toJSON(e) : undefined
      );
    } else {
      obj.owner = [];
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
