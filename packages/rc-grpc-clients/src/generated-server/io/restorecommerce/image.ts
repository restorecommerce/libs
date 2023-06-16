/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";

export const protobufPackage = "io.restorecommerce.image";

export interface Image {
  id?: string | undefined;
  caption?: string | undefined;
  filename?: string | undefined;
  content_type?: string | undefined;
  url?: string | undefined;
  width?: number | undefined;
  height?: number | undefined;
  length?: number | undefined;
  tags: string[];
  index?: number | undefined;
}

export interface ImageList {
  items: Image[];
  total_count?: number | undefined;
}

export interface Deleted {
  id: string;
}

function createBaseImage(): Image {
  return {
    id: undefined,
    caption: undefined,
    filename: undefined,
    content_type: undefined,
    url: undefined,
    width: undefined,
    height: undefined,
    length: undefined,
    tags: [],
    index: undefined,
  };
}

export const Image = {
  encode(message: Image, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.caption !== undefined) {
      writer.uint32(18).string(message.caption);
    }
    if (message.filename !== undefined) {
      writer.uint32(26).string(message.filename);
    }
    if (message.content_type !== undefined) {
      writer.uint32(34).string(message.content_type);
    }
    if (message.url !== undefined) {
      writer.uint32(42).string(message.url);
    }
    if (message.width !== undefined) {
      writer.uint32(49).double(message.width);
    }
    if (message.height !== undefined) {
      writer.uint32(57).double(message.height);
    }
    if (message.length !== undefined) {
      writer.uint32(65).double(message.length);
    }
    for (const v of message.tags) {
      writer.uint32(74).string(v!);
    }
    if (message.index !== undefined) {
      writer.uint32(80).int64(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Image {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.caption = reader.string();
          break;
        case 3:
          message.filename = reader.string();
          break;
        case 4:
          message.content_type = reader.string();
          break;
        case 5:
          message.url = reader.string();
          break;
        case 6:
          message.width = reader.double();
          break;
        case 7:
          message.height = reader.double();
          break;
        case 8:
          message.length = reader.double();
          break;
        case 9:
          message.tags.push(reader.string());
          break;
        case 10:
          message.index = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Image {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      caption: isSet(object.caption) ? String(object.caption) : undefined,
      filename: isSet(object.filename) ? String(object.filename) : undefined,
      content_type: isSet(object.content_type) ? String(object.content_type) : undefined,
      url: isSet(object.url) ? String(object.url) : undefined,
      width: isSet(object.width) ? Number(object.width) : undefined,
      height: isSet(object.height) ? Number(object.height) : undefined,
      length: isSet(object.length) ? Number(object.length) : undefined,
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [],
      index: isSet(object.index) ? Number(object.index) : undefined,
    };
  },

  toJSON(message: Image): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.caption !== undefined && (obj.caption = message.caption);
    message.filename !== undefined && (obj.filename = message.filename);
    message.content_type !== undefined && (obj.content_type = message.content_type);
    message.url !== undefined && (obj.url = message.url);
    message.width !== undefined && (obj.width = message.width);
    message.height !== undefined && (obj.height = message.height);
    message.length !== undefined && (obj.length = message.length);
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    message.index !== undefined && (obj.index = Math.round(message.index));
    return obj;
  },

  create(base?: DeepPartial<Image>): Image {
    return Image.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Image>): Image {
    const message = createBaseImage();
    message.id = object.id ?? undefined;
    message.caption = object.caption ?? undefined;
    message.filename = object.filename ?? undefined;
    message.content_type = object.content_type ?? undefined;
    message.url = object.url ?? undefined;
    message.width = object.width ?? undefined;
    message.height = object.height ?? undefined;
    message.length = object.length ?? undefined;
    message.tags = object.tags?.map((e) => e) || [];
    message.index = object.index ?? undefined;
    return message;
  },
};

function createBaseImageList(): ImageList {
  return { items: [], total_count: undefined };
}

export const ImageList = {
  encode(message: ImageList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      Image.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== undefined) {
      writer.uint32(16).uint32(message.total_count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ImageList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImageList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Image.decode(reader, reader.uint32()));
          break;
        case 2:
          message.total_count = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ImageList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => Image.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : undefined,
    };
  },

  toJSON(message: ImageList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? Image.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    return obj;
  },

  create(base?: DeepPartial<ImageList>): ImageList {
    return ImageList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ImageList>): ImageList {
    const message = createBaseImageList();
    message.items = object.items?.map((e) => Image.fromPartial(e)) || [];
    message.total_count = object.total_count ?? undefined;
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
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
    "name": "io/restorecommerce/image.proto",
    "package": "io.restorecommerce.image",
    "dependency": [],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "Image",
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
        "name": "caption",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "caption",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "filename",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "filename",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "content_type",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "contentType",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "url",
        "number": 5,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "url",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "width",
        "number": 6,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 5,
        "jsonName": "width",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "height",
        "number": 7,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 6,
        "jsonName": "height",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "length",
        "number": 8,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 7,
        "jsonName": "length",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "tags",
        "number": 9,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "tags",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "index",
        "number": 10,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 8,
        "jsonName": "index",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "_id", "options": undefined },
        { "name": "_caption", "options": undefined },
        { "name": "_filename", "options": undefined },
        { "name": "_content_type", "options": undefined },
        { "name": "_url", "options": undefined },
        { "name": "_width", "options": undefined },
        { "name": "_height", "options": undefined },
        { "name": "_length", "options": undefined },
        { "name": "_index", "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ImageList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.image.Image",
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
    ".io.restorecommerce.image.Image": Image,
    ".io.restorecommerce.image.ImageList": ImageList,
    ".io.restorecommerce.image.Deleted": Deleted,
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
