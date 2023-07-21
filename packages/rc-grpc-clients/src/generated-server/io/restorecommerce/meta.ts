/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto } from "ts-proto-descriptors";
import { protoMetadata as protoMetadata2, Timestamp } from "../../google/protobuf/timestamp";
import { Attribute, protoMetadata as protoMetadata1 } from "./attribute";

export const protobufPackage = "io.restorecommerce.meta";

export interface Meta {
  /** timestamp */
  created?:
    | Date
    | undefined;
  /** timestamp */
  modified?:
    | Date
    | undefined;
  /** ID from last User who modified it */
  modified_by?: string | undefined;
  owners: Attribute[];
  acls: Attribute[];
}

function createBaseMeta(): Meta {
  return { created: undefined, modified: undefined, modified_by: undefined, owners: [], acls: [] };
}

export const Meta = {
  encode(message: Meta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.created !== undefined) {
      Timestamp.encode(toTimestamp(message.created), writer.uint32(10).fork()).ldelim();
    }
    if (message.modified !== undefined) {
      Timestamp.encode(toTimestamp(message.modified), writer.uint32(18).fork()).ldelim();
    }
    if (message.modified_by !== undefined) {
      writer.uint32(26).string(message.modified_by);
    }
    for (const v of message.owners) {
      Attribute.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.acls) {
      Attribute.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Meta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.created = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.modified = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.modified_by = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.owners.push(Attribute.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.acls.push(Attribute.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Meta {
    return {
      created: isSet(object.created) ? fromJsonTimestamp(object.created) : undefined,
      modified: isSet(object.modified) ? fromJsonTimestamp(object.modified) : undefined,
      modified_by: isSet(object.modified_by) ? String(object.modified_by) : undefined,
      owners: Array.isArray(object?.owners) ? object.owners.map((e: any) => Attribute.fromJSON(e)) : [],
      acls: Array.isArray(object?.acls) ? object.acls.map((e: any) => Attribute.fromJSON(e)) : [],
    };
  },

  toJSON(message: Meta): unknown {
    const obj: any = {};
    message.created !== undefined && (obj.created = message.created.toISOString());
    message.modified !== undefined && (obj.modified = message.modified.toISOString());
    message.modified_by !== undefined && (obj.modified_by = message.modified_by);
    if (message.owners) {
      obj.owners = message.owners.map((e) => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.owners = [];
    }
    if (message.acls) {
      obj.acls = message.acls.map((e) => e ? Attribute.toJSON(e) : undefined);
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
    message.modified_by = object.modified_by ?? undefined;
    message.owners = object.owners?.map((e) => Attribute.fromPartial(e)) || [];
    message.acls = object.acls?.map((e) => Attribute.fromPartial(e)) || [];
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
    "dependency": ["io/restorecommerce/attribute.proto", "google/protobuf/timestamp.proto"],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "Meta",
      "field": [{
        "name": "created",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.Timestamp",
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
        "type": 11,
        "typeName": ".google.protobuf.Timestamp",
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
        "typeName": ".io.restorecommerce.attribute.Attribute",
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
        "span": [10, 4, 51],
        "leadingComments": "",
        "trailingComments": " timestamp\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0, 2, 1],
        "span": [11, 4, 52],
        "leadingComments": "",
        "trailingComments": " timestamp\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0, 2, 2],
        "span": [12, 4, 36],
        "leadingComments": "",
        "trailingComments": " ID from last User who modified it\n",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: { ".io.restorecommerce.meta.Meta": Meta },
  dependencies: [protoMetadata1, protoMetadata2],
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
