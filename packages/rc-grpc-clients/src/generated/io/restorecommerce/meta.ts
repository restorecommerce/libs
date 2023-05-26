/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto } from "ts-proto-descriptors";
import { Attribute, AttributeObj, protoMetadata as protoMetadata1 } from "./attribute";

export const protobufPackage = "io.restorecommerce.meta";

export interface Meta {
  /** timestamp */
  created?:
    | number
    | undefined;
  /** timestamp */
  modified?:
    | number
    | undefined;
  /** ID from last User who modified it */
  modifiedBy?: string | undefined;
  owners: Attribute[];
  acls: AttributeObj[];
}

function createBaseMeta(): Meta {
  return { created: undefined, modified: undefined, modifiedBy: undefined, owners: [], acls: [] };
}

export const Meta = {
  encode(message: Meta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.created !== undefined) {
      writer.uint32(9).double(message.created);
    }
    if (message.modified !== undefined) {
      writer.uint32(17).double(message.modified);
    }
    if (message.modifiedBy !== undefined) {
      writer.uint32(26).string(message.modifiedBy);
    }
    for (const v of message.owners) {
      Attribute.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.acls) {
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
          message.modifiedBy = reader.string();
          break;
        case 4:
          message.owners.push(Attribute.decode(reader, reader.uint32()));
          break;
        case 5:
          message.acls.push(AttributeObj.decode(reader, reader.uint32()));
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
      created: isSet(object.created) ? Number(object.created) : undefined,
      modified: isSet(object.modified) ? Number(object.modified) : undefined,
      modifiedBy: isSet(object.modifiedBy) ? String(object.modifiedBy) : undefined,
      owners: Array.isArray(object?.owners) ? object.owners.map((e: any) => Attribute.fromJSON(e)) : [],
      acls: Array.isArray(object?.acls) ? object.acls.map((e: any) => AttributeObj.fromJSON(e)) : [],
    };
  },

  toJSON(message: Meta): unknown {
    const obj: any = {};
    message.created !== undefined && (obj.created = message.created);
    message.modified !== undefined && (obj.modified = message.modified);
    message.modifiedBy !== undefined && (obj.modifiedBy = message.modifiedBy);
    if (message.owners) {
      obj.owners = message.owners.map((e) => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.owners = [];
    }
    if (message.acls) {
      obj.acls = message.acls.map((e) => e ? AttributeObj.toJSON(e) : undefined);
    } else {
      obj.acls = [];
    }
    return obj;
  },

  create(base?: DeepPartial<Meta>): Meta {
    return Meta.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Meta>): Meta {
    const message = createBaseMeta();
    message.created = object.created ?? undefined;
    message.modified = object.modified ?? undefined;
    message.modifiedBy = object.modifiedBy ?? undefined;
    message.owners = object.owners?.map((e) => Attribute.fromPartial(e)) || [];
    message.acls = object.acls?.map((e) => AttributeObj.fromPartial(e)) || [];
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
      [key: string]: { options?: { [key: string]: any }; methods?: { [key: string]: { [key: string]: any } } };
    };
    messages?: { [key: string]: ProtoMetaMessageOptions };
    enums?: { [key: string]: { options?: { [key: string]: any }; values?: { [key: string]: { [key: string]: any } } } };
  };
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto.fromPartial({
    "name": "io/restorecommerce/meta.proto",
    "package": "io.restorecommerce.meta",
    "dependency": ["io/restorecommerce/attribute.proto"],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "Meta",
      "field": [{
        "name": "created",
        "number": 1,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "created",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "modified",
        "number": 2,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "modified",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "modified_by",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "modifiedBy",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "owners",
        "number": 4,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.attribute.Attribute",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "owners",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "acls",
        "number": 5,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.attribute.AttributeObj",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "acls",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_created", "options": undefined }, { "name": "_modified", "options": undefined }, {
        "name": "_modified_by",
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
    "sourceCodeInfo": {
      "location": [{
        "path": [4, 0, 2, 0],
        "span": [9, 4, 32],
        "leadingComments": "",
        "trailingComments": " timestamp\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0, 2, 1],
        "span": [10, 4, 33],
        "leadingComments": "",
        "trailingComments": " timestamp\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0, 2, 2],
        "span": [11, 4, 36],
        "leadingComments": "",
        "trailingComments": " ID from last User who modified it\n",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: { ".io.restorecommerce.meta.Meta": Meta },
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
