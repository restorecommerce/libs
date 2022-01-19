/* eslint-disable */
import { FileDescriptorProto } from "ts-proto-descriptors/google/protobuf/descriptor";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "io.restorecommerce.image";

/** ProductCategory resource */
export interface Image {
  id: string;
  caption: string;
  filename: string;
  content_type: string;
  url: string;
  width: number;
  height: number;
  length: number;
}

export interface ImageList {
  items: Image[];
  total_count: number;
}

export interface Deleted {
  id: string;
}

const baseImage: object = {
  id: "",
  caption: "",
  filename: "",
  content_type: "",
  url: "",
  width: 0,
  height: 0,
  length: 0,
};

export const Image = {
  encode(message: Image, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.caption !== "") {
      writer.uint32(18).string(message.caption);
    }
    if (message.filename !== "") {
      writer.uint32(26).string(message.filename);
    }
    if (message.content_type !== "") {
      writer.uint32(34).string(message.content_type);
    }
    if (message.url !== "") {
      writer.uint32(42).string(message.url);
    }
    if (message.width !== 0) {
      writer.uint32(49).double(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(57).double(message.height);
    }
    if (message.length !== 0) {
      writer.uint32(65).double(message.length);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Image {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseImage) as Image;
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Image {
    const message = globalThis.Object.create(baseImage) as Image;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.caption !== undefined && object.caption !== null) {
      message.caption = String(object.caption);
    } else {
      message.caption = "";
    }
    if (object.filename !== undefined && object.filename !== null) {
      message.filename = String(object.filename);
    } else {
      message.filename = "";
    }
    if (object.content_type !== undefined && object.content_type !== null) {
      message.content_type = String(object.content_type);
    } else {
      message.content_type = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.width !== undefined && object.width !== null) {
      message.width = Number(object.width);
    } else {
      message.width = 0;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.length !== undefined && object.length !== null) {
      message.length = Number(object.length);
    } else {
      message.length = 0;
    }
    return message;
  },

  fromPartial(object: DeepPartial<Image>): Image {
    const message = { ...baseImage } as Image;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.caption !== undefined && object.caption !== null) {
      message.caption = object.caption;
    } else {
      message.caption = "";
    }
    if (object.filename !== undefined && object.filename !== null) {
      message.filename = object.filename;
    } else {
      message.filename = "";
    }
    if (object.content_type !== undefined && object.content_type !== null) {
      message.content_type = object.content_type;
    } else {
      message.content_type = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.width !== undefined && object.width !== null) {
      message.width = object.width;
    } else {
      message.width = 0;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.length !== undefined && object.length !== null) {
      message.length = object.length;
    } else {
      message.length = 0;
    }
    return message;
  },

  toJSON(message: Image): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.caption !== undefined && (obj.caption = message.caption);
    message.filename !== undefined && (obj.filename = message.filename);
    message.content_type !== undefined &&
      (obj.content_type = message.content_type);
    message.url !== undefined && (obj.url = message.url);
    message.width !== undefined && (obj.width = message.width);
    message.height !== undefined && (obj.height = message.height);
    message.length !== undefined && (obj.length = message.length);
    return obj;
  },
};

const baseImageList: object = { total_count: 0 };

export const ImageList = {
  encode(message: ImageList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      Image.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ImageList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseImageList) as ImageList;
    message.items = [];
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
    const message = globalThis.Object.create(baseImageList) as ImageList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Image.fromJSON(e));
      }
    }
    if (object.total_count !== undefined && object.total_count !== null) {
      message.total_count = Number(object.total_count);
    } else {
      message.total_count = 0;
    }
    return message;
  },

  fromPartial(object: DeepPartial<ImageList>): ImageList {
    const message = { ...baseImageList } as ImageList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Image.fromPartial(e));
      }
    }
    if (object.total_count !== undefined && object.total_count !== null) {
      message.total_count = object.total_count;
    } else {
      message.total_count = 0;
    }
    return message;
  },

  toJSON(message: ImageList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => (e ? Image.toJSON(e) : undefined));
    } else {
      obj.items = [];
    }
    message.total_count !== undefined &&
      (obj.total_count = message.total_count);
    return obj;
  },
};

const baseDeleted: object = { id: "" };

export const Deleted = {
  encode(message: Deleted, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Deleted {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseDeleted) as Deleted;
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
    const message = globalThis.Object.create(baseDeleted) as Deleted;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<Deleted>): Deleted {
    const message = { ...baseDeleted } as Deleted;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: Deleted): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
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
          {
            name: "caption",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "caption",
          },
          {
            name: "filename",
            number: 3,
            label: 1,
            type: 9,
            jsonName: "filename",
          },
          {
            name: "content_type",
            number: 4,
            label: 1,
            type: 9,
            jsonName: "contentType",
          },
          { name: "url", number: 5, label: 1, type: 9, jsonName: "url" },
          { name: "width", number: 6, label: 1, type: 1, jsonName: "width" },
          { name: "height", number: 7, label: 1, type: 1, jsonName: "height" },
          { name: "length", number: 8, label: 1, type: 1, jsonName: "length" },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Image",
      },
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.image.Image",
            jsonName: "items",
          },
          {
            name: "total_count",
            number: 2,
            label: 1,
            type: 13,
            jsonName: "totalCount",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "ImageList",
      },
      {
        field: [{ name: "id", number: 1, label: 1, type: 9, jsonName: "id" }],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Deleted",
      },
    ],
    enumType: [],
    service: [],
    extension: [],
    name: "io/restorecommerce/image.proto",
    package: "io.restorecommerce.image",
    sourceCodeInfo: {
      location: [
        {
          path: [4, 0],
          span: [5, 0, 14, 1],
          leadingDetachedComments: [],
          leadingComments: " ProductCategory resource\n",
        },
      ],
    },
    syntax: "proto3",
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
