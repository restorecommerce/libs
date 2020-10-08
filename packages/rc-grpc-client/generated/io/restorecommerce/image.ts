/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal';


/**
 *  ProductCategory resource
 */
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

const baseImageList: object = {
  totalCount: 0,
};

const baseDeleted: object = {
  id: "",
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
  decode(input: Uint8Array | Reader, length?: number): Image {
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
};

export const ImageList = {
  encode(message: ImageList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      Image.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(16).uint32(message.totalCount);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ImageList {
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
};

export const Deleted = {
  encode(message: Deleted, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Deleted {
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
};
