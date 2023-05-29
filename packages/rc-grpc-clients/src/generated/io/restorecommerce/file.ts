/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";

export const protobufPackage = "io.restorecommerce.file";

export interface File {
  id?: string | undefined;
  index?: number | undefined;
  caption?: string | undefined;
  filename?: string | undefined;
  contentType?: string | undefined;
  url?: string | undefined;
  bytes?: number | undefined;
  tags: string[];
}

export interface FileList {
  items: File[];
  totalCount?: number | undefined;
}

export interface Deleted {
  id: string;
}

function createBaseFile(): File {
  return {
    id: undefined,
    index: undefined,
    caption: undefined,
    filename: undefined,
    contentType: undefined,
    url: undefined,
    bytes: undefined,
    tags: [],
  };
}

export const File = {
  encode(message: File, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.index !== undefined) {
      writer.uint32(16).int64(message.index);
    }
    if (message.caption !== undefined) {
      writer.uint32(26).string(message.caption);
    }
    if (message.filename !== undefined) {
      writer.uint32(34).string(message.filename);
    }
    if (message.contentType !== undefined) {
      writer.uint32(42).string(message.contentType);
    }
    if (message.url !== undefined) {
      writer.uint32(50).string(message.url);
    }
    if (message.bytes !== undefined) {
      writer.uint32(56).int64(message.bytes);
    }
    for (const v of message.tags) {
      writer.uint32(66).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): File {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.index = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.caption = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.filename = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.contentType = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.url = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.bytes = longToNumber(reader.int64() as Long);
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.tags.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): File {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      index: isSet(object.index) ? Number(object.index) : undefined,
      caption: isSet(object.caption) ? String(object.caption) : undefined,
      filename: isSet(object.filename) ? String(object.filename) : undefined,
      contentType: isSet(object.contentType) ? String(object.contentType) : undefined,
      url: isSet(object.url) ? String(object.url) : undefined,
      bytes: isSet(object.bytes) ? Number(object.bytes) : undefined,
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: File): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.caption !== undefined && (obj.caption = message.caption);
    message.filename !== undefined && (obj.filename = message.filename);
    message.contentType !== undefined && (obj.contentType = message.contentType);
    message.url !== undefined && (obj.url = message.url);
    message.bytes !== undefined && (obj.bytes = Math.round(message.bytes));
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    return obj;
  },

  create(base?: DeepPartial<File>): File {
    return File.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<File>): File {
    const message = createBaseFile();
    message.id = object.id ?? undefined;
    message.index = object.index ?? undefined;
    message.caption = object.caption ?? undefined;
    message.filename = object.filename ?? undefined;
    message.contentType = object.contentType ?? undefined;
    message.url = object.url ?? undefined;
    message.bytes = object.bytes ?? undefined;
    message.tags = object.tags?.map((e) => e) || [];
    return message;
  },
};

function createBaseFileList(): FileList {
  return { items: [], totalCount: undefined };
}

export const FileList = {
  encode(message: FileList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      File.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== undefined) {
      writer.uint32(16).uint32(message.totalCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(File.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.totalCount = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FileList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => File.fromJSON(e)) : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : undefined,
    };
  },

  toJSON(message: FileList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? File.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = Math.round(message.totalCount));
    return obj;
  },

  create(base?: DeepPartial<FileList>): FileList {
    return FileList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FileList>): FileList {
    const message = createBaseFileList();
    message.items = object.items?.map((e) => File.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? undefined;
    return message;
  },
};

function createBaseDeleted(): Deleted {
  return { id: "" };
}

export const Deleted = {
  encode(message: Deleted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Deleted {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Deleted {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: Deleted): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create(base?: DeepPartial<Deleted>): Deleted {
    return Deleted.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Deleted>): Deleted {
    const message = createBaseDeleted();
    message.id = object.id ?? "";
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
    "name": "io/restorecommerce/file.proto",
    "package": "io.restorecommerce.file",
    "dependency": [],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "File",
      "field": [{
        "name": "id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "id",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "index",
        "number": 2,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "index",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "caption",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "caption",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "filename",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "filename",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "content_type",
        "number": 5,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "contentType",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "url",
        "number": 6,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 5,
        "jsonName": "url",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "bytes",
        "number": 7,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 6,
        "jsonName": "bytes",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "tags",
        "number": 8,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "tags",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "_id", "options": undefined },
        { "name": "_index", "options": undefined },
        { "name": "_caption", "options": undefined },
        { "name": "_filename", "options": undefined },
        { "name": "_content_type", "options": undefined },
        { "name": "_url", "options": undefined },
        { "name": "_bytes", "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "FileList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.file.File",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "items",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "total_count",
        "number": 2,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "totalCount",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_total_count", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "Deleted",
      "field": [{
        "name": "id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "id",
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
    "extension": [],
    "options": undefined,
    "sourceCodeInfo": { "location": [] },
    "syntax": "proto3",
  }),
  references: {
    ".io.restorecommerce.file.File": File,
    ".io.restorecommerce.file.FileList": FileList,
    ".io.restorecommerce.file.Deleted": Deleted,
  },
  dependencies: [],
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
