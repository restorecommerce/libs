/* eslint-disable */
import { IFileDescriptorProto } from "protobufjs/ext/descriptor";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "io.restorecommerce.image";

/** ProductCategory resource */
export interface Image {
  id: string;
  caption: string;
  filename: string;
  contentType: string;
  url: string;
  width: number;
  height: number;
  length: number;
}

export interface ImageList {
  items: Image[];
  totalCount: number;
}

export interface Deleted {
  id: string;
}

const baseImage: object = {
  id: "",
  caption: "",
  filename: "",
  contentType: "",
  url: "",
  width: 0,
  height: 0,
  length: 0,
};

export const Image = {
  encode(message: Image, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    writer.uint32(18).string(message.caption);
    writer.uint32(26).string(message.filename);
    writer.uint32(34).string(message.contentType);
    writer.uint32(42).string(message.url);
    writer.uint32(49).double(message.width);
    writer.uint32(57).double(message.height);
    writer.uint32(65).double(message.length);
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Image {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseImage } as Image;
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
          message.contentType = reader.string();
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
    const message = { ...baseImage } as Image;
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
    if (object.contentType !== undefined && object.contentType !== null) {
      message.contentType = String(object.contentType);
    } else {
      message.contentType = "";
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
    if (object.contentType !== undefined && object.contentType !== null) {
      message.contentType = object.contentType;
    } else {
      message.contentType = "";
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
    message.contentType !== undefined &&
      (obj.contentType = message.contentType);
    message.url !== undefined && (obj.url = message.url);
    message.width !== undefined && (obj.width = message.width);
    message.height !== undefined && (obj.height = message.height);
    message.length !== undefined && (obj.length = message.length);
    return obj;
  },
};

const baseImageList: object = { totalCount: 0 };

export const ImageList = {
  encode(message: ImageList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      Image.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(16).uint32(message.totalCount);
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ImageList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseImageList } as ImageList;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Image.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalCount = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ImageList {
    const message = { ...baseImageList } as ImageList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Image.fromJSON(e));
      }
    }
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = Number(object.totalCount);
    } else {
      message.totalCount = 0;
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
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = object.totalCount;
    } else {
      message.totalCount = 0;
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
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    return obj;
  },
};

const baseDeleted: object = { id: "" };

export const Deleted = {
  encode(message: Deleted, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Deleted {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleted } as Deleted;
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
    const message = { ...baseDeleted } as Deleted;
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
  fileDescriptor: IFileDescriptorProto;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: {
    dependency: [],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        name: "Image",
        field: [
          {
            name: "id",
            number: 1,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "id",
          },
          {
            name: "caption",
            number: 2,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "caption",
          },
          {
            name: "filename",
            number: 3,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "filename",
          },
          {
            name: "content_type",
            number: 4,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "contentType",
          },
          {
            name: "url",
            number: 5,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "url",
          },
          {
            name: "width",
            number: 6,
            label: "LABEL_OPTIONAL",
            type: "TYPE_DOUBLE",
            jsonName: "width",
          },
          {
            name: "height",
            number: 7,
            label: "LABEL_OPTIONAL",
            type: "TYPE_DOUBLE",
            jsonName: "height",
          },
          {
            name: "length",
            number: 8,
            label: "LABEL_OPTIONAL",
            type: "TYPE_DOUBLE",
            jsonName: "length",
          },
        ],
      },
      {
        name: "ImageList",
        field: [
          {
            name: "items",
            number: 1,
            label: "LABEL_REPEATED",
            type: "TYPE_MESSAGE",
            typeName: ".io.restorecommerce.image.Image",
            jsonName: "items",
          },
          {
            name: "total_count",
            number: 2,
            label: "LABEL_OPTIONAL",
            type: "TYPE_UINT32",
            jsonName: "totalCount",
          },
        ],
      },
      {
        name: "Deleted",
        field: [
          {
            name: "id",
            number: 1,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "id",
          },
        ],
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
          leadingComments: " ProductCategory resource\n",
        },
      ],
    },
    syntax: "proto3",
  } as any,
  references: {
    ".io.restorecommerce.image.Image": Image,
    ".io.restorecommerce.image.ImageList": ImageList,
    ".io.restorecommerce.image.Deleted": Deleted,
  },
  dependencies: [],
};

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
