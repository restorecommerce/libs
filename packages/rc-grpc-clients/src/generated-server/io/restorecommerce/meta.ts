/* eslint-disable */
import { FileDescriptorProto } from "ts-proto-descriptors";
import {
  protoMetadata as protoMetadata1,
  Attribute,
  AttributeObj,
} from "./attribute";
import * as _m0 from "protobufjs/minimal";

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

function createBaseMeta(): Meta {
  return { created: 0, modified: 0, modified_by: "", owner: [], acl: [] };
}

export const Meta = {
  encode(message: Meta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Meta {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMeta();
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
    return {
      created: isSet(object.created) ? Number(object.created) : 0,
      modified: isSet(object.modified) ? Number(object.modified) : 0,
      modified_by: isSet(object.modified_by) ? String(object.modified_by) : "",
      owner: Array.isArray(object?.owner)
        ? object.owner.map((e: any) => Attribute.fromJSON(e))
        : [],
      acl: Array.isArray(object?.acl)
        ? object.acl.map((e: any) => AttributeObj.fromJSON(e))
        : [],
    };
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

  fromPartial(object: DeepPartial<Meta>): Meta {
    const message = createBaseMeta();
    message.created = object.created ?? 0;
    message.modified = object.modified ?? 0;
    message.modified_by = object.modified_by ?? "";
    message.owner = object.owner?.map((e) => Attribute.fromPartial(e)) || [];
    message.acl = object.acl?.map((e) => AttributeObj.fromPartial(e)) || [];
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
  fileDescriptor: FileDescriptorProto;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
  options?: {
    options?: { [key: string]: any };
    services?: {
      [key: string]: {
        options?: { [key: string]: any };
        methods?: { [key: string]: { [key: string]: any } };
      };
    };
    messages?: {
      [key: string]: ProtoMetaMessageOptions;
    };
    enums?: {
      [key: string]: {
        options?: { [key: string]: any };
        values?: { [key: string]: { [key: string]: any } };
      };
    };
  };
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto.fromPartial({
    name: "io/restorecommerce/meta.proto",
    package: "io.restorecommerce.meta",
    dependency: ["io/restorecommerce/attribute.proto"],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        name: "Meta",
        field: [
          {
            name: "created",
            number: 1,
            label: 1,
            type: 1,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "created",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "modified",
            number: 2,
            label: 1,
            type: 1,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "modified",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "modified_by",
            number: 3,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "modifiedBy",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "owner",
            number: 4,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.attribute.Attribute",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "owner",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "acl",
            number: 5,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.attribute.AttributeObj",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "acl",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
    ],
    enumType: [],
    service: [],
    extension: [],
    options: undefined,
    sourceCodeInfo: {
      location: [
        {
          path: [4, 0, 2, 0],
          span: [9, 4, 23],
          leadingComments: "",
          trailingComments: " timestamp\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 0, 2, 1],
          span: [10, 4, 24],
          leadingComments: "",
          trailingComments: " timestamp\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 0, 2, 2],
          span: [11, 4, 27],
          leadingComments: "",
          trailingComments: " ID from last User who modified it\n",
          leadingDetachedComments: [],
        },
      ],
    },
    syntax: "proto3",
  }),
  references: { ".io.restorecommerce.meta.Meta": Meta },
  dependencies: [protoMetadata1],
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
