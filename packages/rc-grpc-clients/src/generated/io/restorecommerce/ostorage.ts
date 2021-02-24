/* eslint-disable */
import { FileDescriptorProto } from "ts-proto-descriptors/google/protobuf/descriptor";
import {
  Subject,
  protoMetadata as protoMetadata5,
} from "../../io/restorecommerce/auth";
import {
  Meta,
  protoMetadata as protoMetadata4,
} from "../../io/restorecommerce/meta";
import {
  Any,
  protoMetadata as protoMetadata3,
} from "../../google/protobuf/any";
import {
  Struct,
  protoMetadata as protoMetadata2,
} from "../../google/protobuf/struct";
import { Observable } from "rxjs";
import {
  protoMetadata as protoMetadata1,
  Empty,
} from "../../google/protobuf/empty";
import {
  protoMetadata as protoMetadata6,
  Attribute,
} from "../../io/restorecommerce/attribute";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "io.restorecommerce.ostorage";

export interface CopyRequest {
  items: CopyRequestItem[];
  subject?: Subject;
}

export interface CopyResponse {
  response: CopyResponseItem[];
}

export interface CopyRequestItem {
  bucket: string;
  copySource: string;
  key: string;
  meta?: Meta;
  options?: Options;
}

export interface CopyResponseItem {
  bucket: string;
  copySource: string;
  key: string;
  meta?: Meta;
  options?: Options;
}

export interface Options {
  encoding: string;
  contentType: string;
  contentLanguage: string;
  contentDisposition: string;
  length: number;
  version: string;
  md5: string;
  tags: Attribute[];
  /** optional meta data ex: from and to dates */
  data?: Any;
}

export interface Object {
  key: string;
  bucket: string;
  object: Buffer;
  meta?: Meta;
  url: string;
  options?: Options;
  subject?: Subject;
}

export interface GetRequest {
  key: string;
  bucket: string;
  download: boolean;
  subject?: Subject;
}

export interface ObjectsData {
  objectData: ObjectData[];
}

export interface ObjectData {
  objectName: string;
  url: string;
  meta?: Meta;
}

export interface DeleteRequest {
  key: string;
  bucket: string;
  subject?: Subject;
}

export interface Response {
  url: string;
  bucket: string;
  key: string;
  meta?: Meta;
  tags: Attribute[];
  /** file size of uploaded object */
  length: number;
}

export interface ListRequest {
  bucket: string;
  /** / Filter based on fieldName|operation, value|list */
  filter?: Struct;
  subject?: Subject;
}

const baseCopyRequest: object = {};

export const CopyRequest = {
  encode(message: CopyRequest, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      CopyRequestItem.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CopyRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseCopyRequest) as CopyRequest;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(CopyRequestItem.decode(reader, reader.uint32()));
          break;
        case 2:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CopyRequest {
    const message = globalThis.Object.create(baseCopyRequest) as CopyRequest;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(CopyRequestItem.fromJSON(e));
      }
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<CopyRequest>): CopyRequest {
    const message = { ...baseCopyRequest } as CopyRequest;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(CopyRequestItem.fromPartial(e));
      }
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  toJSON(message: CopyRequest): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? CopyRequestItem.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseCopyResponse: object = {};

export const CopyResponse = {
  encode(message: CopyResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.response) {
      CopyResponseItem.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CopyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseCopyResponse) as CopyResponse;
    message.response = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response.push(
            CopyResponseItem.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CopyResponse {
    const message = globalThis.Object.create(baseCopyResponse) as CopyResponse;
    message.response = [];
    if (object.response !== undefined && object.response !== null) {
      for (const e of object.response) {
        message.response.push(CopyResponseItem.fromJSON(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<CopyResponse>): CopyResponse {
    const message = { ...baseCopyResponse } as CopyResponse;
    message.response = [];
    if (object.response !== undefined && object.response !== null) {
      for (const e of object.response) {
        message.response.push(CopyResponseItem.fromPartial(e));
      }
    }
    return message;
  },

  toJSON(message: CopyResponse): unknown {
    const obj: any = {};
    if (message.response) {
      obj.response = message.response.map((e) =>
        e ? CopyResponseItem.toJSON(e) : undefined
      );
    } else {
      obj.response = [];
    }
    return obj;
  },
};

const baseCopyRequestItem: object = { bucket: "", copySource: "", key: "" };

export const CopyRequestItem = {
  encode(message: CopyRequestItem, writer: Writer = Writer.create()): Writer {
    if (message.bucket !== "") {
      writer.uint32(10).string(message.bucket);
    }
    if (message.copySource !== "") {
      writer.uint32(18).string(message.copySource);
    }
    if (message.key !== "") {
      writer.uint32(26).string(message.key);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(34).fork()).ldelim();
    }
    if (message.options !== undefined) {
      Options.encode(message.options, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CopyRequestItem {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseCopyRequestItem
    ) as CopyRequestItem;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bucket = reader.string();
          break;
        case 2:
          message.copySource = reader.string();
          break;
        case 3:
          message.key = reader.string();
          break;
        case 4:
          message.meta = Meta.decode(reader, reader.uint32());
          break;
        case 5:
          message.options = Options.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CopyRequestItem {
    const message = globalThis.Object.create(
      baseCopyRequestItem
    ) as CopyRequestItem;
    if (object.bucket !== undefined && object.bucket !== null) {
      message.bucket = String(object.bucket);
    } else {
      message.bucket = "";
    }
    if (object.copySource !== undefined && object.copySource !== null) {
      message.copySource = String(object.copySource);
    } else {
      message.copySource = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromJSON(object.meta);
    } else {
      message.meta = undefined;
    }
    if (object.options !== undefined && object.options !== null) {
      message.options = Options.fromJSON(object.options);
    } else {
      message.options = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<CopyRequestItem>): CopyRequestItem {
    const message = { ...baseCopyRequestItem } as CopyRequestItem;
    if (object.bucket !== undefined && object.bucket !== null) {
      message.bucket = object.bucket;
    } else {
      message.bucket = "";
    }
    if (object.copySource !== undefined && object.copySource !== null) {
      message.copySource = object.copySource;
    } else {
      message.copySource = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromPartial(object.meta);
    } else {
      message.meta = undefined;
    }
    if (object.options !== undefined && object.options !== null) {
      message.options = Options.fromPartial(object.options);
    } else {
      message.options = undefined;
    }
    return message;
  },

  toJSON(message: CopyRequestItem): unknown {
    const obj: any = {};
    message.bucket !== undefined && (obj.bucket = message.bucket);
    message.copySource !== undefined && (obj.copySource = message.copySource);
    message.key !== undefined && (obj.key = message.key);
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.options !== undefined &&
      (obj.options = message.options
        ? Options.toJSON(message.options)
        : undefined);
    return obj;
  },
};

const baseCopyResponseItem: object = { bucket: "", copySource: "", key: "" };

export const CopyResponseItem = {
  encode(message: CopyResponseItem, writer: Writer = Writer.create()): Writer {
    if (message.bucket !== "") {
      writer.uint32(10).string(message.bucket);
    }
    if (message.copySource !== "") {
      writer.uint32(18).string(message.copySource);
    }
    if (message.key !== "") {
      writer.uint32(26).string(message.key);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(34).fork()).ldelim();
    }
    if (message.options !== undefined) {
      Options.encode(message.options, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CopyResponseItem {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseCopyResponseItem
    ) as CopyResponseItem;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bucket = reader.string();
          break;
        case 2:
          message.copySource = reader.string();
          break;
        case 3:
          message.key = reader.string();
          break;
        case 4:
          message.meta = Meta.decode(reader, reader.uint32());
          break;
        case 5:
          message.options = Options.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CopyResponseItem {
    const message = globalThis.Object.create(
      baseCopyResponseItem
    ) as CopyResponseItem;
    if (object.bucket !== undefined && object.bucket !== null) {
      message.bucket = String(object.bucket);
    } else {
      message.bucket = "";
    }
    if (object.copySource !== undefined && object.copySource !== null) {
      message.copySource = String(object.copySource);
    } else {
      message.copySource = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromJSON(object.meta);
    } else {
      message.meta = undefined;
    }
    if (object.options !== undefined && object.options !== null) {
      message.options = Options.fromJSON(object.options);
    } else {
      message.options = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<CopyResponseItem>): CopyResponseItem {
    const message = { ...baseCopyResponseItem } as CopyResponseItem;
    if (object.bucket !== undefined && object.bucket !== null) {
      message.bucket = object.bucket;
    } else {
      message.bucket = "";
    }
    if (object.copySource !== undefined && object.copySource !== null) {
      message.copySource = object.copySource;
    } else {
      message.copySource = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromPartial(object.meta);
    } else {
      message.meta = undefined;
    }
    if (object.options !== undefined && object.options !== null) {
      message.options = Options.fromPartial(object.options);
    } else {
      message.options = undefined;
    }
    return message;
  },

  toJSON(message: CopyResponseItem): unknown {
    const obj: any = {};
    message.bucket !== undefined && (obj.bucket = message.bucket);
    message.copySource !== undefined && (obj.copySource = message.copySource);
    message.key !== undefined && (obj.key = message.key);
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.options !== undefined &&
      (obj.options = message.options
        ? Options.toJSON(message.options)
        : undefined);
    return obj;
  },
};

const baseOptions: object = {
  encoding: "",
  contentType: "",
  contentLanguage: "",
  contentDisposition: "",
  length: 0,
  version: "",
  md5: "",
};

export const Options = {
  encode(message: Options, writer: Writer = Writer.create()): Writer {
    if (message.encoding !== "") {
      writer.uint32(10).string(message.encoding);
    }
    if (message.contentType !== "") {
      writer.uint32(18).string(message.contentType);
    }
    if (message.contentLanguage !== "") {
      writer.uint32(26).string(message.contentLanguage);
    }
    if (message.contentDisposition !== "") {
      writer.uint32(34).string(message.contentDisposition);
    }
    if (message.length !== 0) {
      writer.uint32(40).int32(message.length);
    }
    if (message.version !== "") {
      writer.uint32(50).string(message.version);
    }
    if (message.md5 !== "") {
      writer.uint32(58).string(message.md5);
    }
    for (const v of message.tags) {
      Attribute.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Options {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseOptions) as Options;
    message.tags = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encoding = reader.string();
          break;
        case 2:
          message.contentType = reader.string();
          break;
        case 3:
          message.contentLanguage = reader.string();
          break;
        case 4:
          message.contentDisposition = reader.string();
          break;
        case 5:
          message.length = reader.int32();
          break;
        case 6:
          message.version = reader.string();
          break;
        case 7:
          message.md5 = reader.string();
          break;
        case 8:
          message.tags.push(Attribute.decode(reader, reader.uint32()));
          break;
        case 9:
          message.data = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Options {
    const message = globalThis.Object.create(baseOptions) as Options;
    message.tags = [];
    if (object.encoding !== undefined && object.encoding !== null) {
      message.encoding = String(object.encoding);
    } else {
      message.encoding = "";
    }
    if (object.contentType !== undefined && object.contentType !== null) {
      message.contentType = String(object.contentType);
    } else {
      message.contentType = "";
    }
    if (
      object.contentLanguage !== undefined &&
      object.contentLanguage !== null
    ) {
      message.contentLanguage = String(object.contentLanguage);
    } else {
      message.contentLanguage = "";
    }
    if (
      object.contentDisposition !== undefined &&
      object.contentDisposition !== null
    ) {
      message.contentDisposition = String(object.contentDisposition);
    } else {
      message.contentDisposition = "";
    }
    if (object.length !== undefined && object.length !== null) {
      message.length = Number(object.length);
    } else {
      message.length = 0;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = String(object.version);
    } else {
      message.version = "";
    }
    if (object.md5 !== undefined && object.md5 !== null) {
      message.md5 = String(object.md5);
    } else {
      message.md5 = "";
    }
    if (object.tags !== undefined && object.tags !== null) {
      for (const e of object.tags) {
        message.tags.push(Attribute.fromJSON(e));
      }
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromJSON(object.data);
    } else {
      message.data = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<Options>): Options {
    const message = { ...baseOptions } as Options;
    message.tags = [];
    if (object.encoding !== undefined && object.encoding !== null) {
      message.encoding = object.encoding;
    } else {
      message.encoding = "";
    }
    if (object.contentType !== undefined && object.contentType !== null) {
      message.contentType = object.contentType;
    } else {
      message.contentType = "";
    }
    if (
      object.contentLanguage !== undefined &&
      object.contentLanguage !== null
    ) {
      message.contentLanguage = object.contentLanguage;
    } else {
      message.contentLanguage = "";
    }
    if (
      object.contentDisposition !== undefined &&
      object.contentDisposition !== null
    ) {
      message.contentDisposition = object.contentDisposition;
    } else {
      message.contentDisposition = "";
    }
    if (object.length !== undefined && object.length !== null) {
      message.length = object.length;
    } else {
      message.length = 0;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    } else {
      message.version = "";
    }
    if (object.md5 !== undefined && object.md5 !== null) {
      message.md5 = object.md5;
    } else {
      message.md5 = "";
    }
    if (object.tags !== undefined && object.tags !== null) {
      for (const e of object.tags) {
        message.tags.push(Attribute.fromPartial(e));
      }
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromPartial(object.data);
    } else {
      message.data = undefined;
    }
    return message;
  },

  toJSON(message: Options): unknown {
    const obj: any = {};
    message.encoding !== undefined && (obj.encoding = message.encoding);
    message.contentType !== undefined &&
      (obj.contentType = message.contentType);
    message.contentLanguage !== undefined &&
      (obj.contentLanguage = message.contentLanguage);
    message.contentDisposition !== undefined &&
      (obj.contentDisposition = message.contentDisposition);
    message.length !== undefined && (obj.length = message.length);
    message.version !== undefined && (obj.version = message.version);
    message.md5 !== undefined && (obj.md5 = message.md5);
    if (message.tags) {
      obj.tags = message.tags.map((e) => (e ? Attribute.toJSON(e) : undefined));
    } else {
      obj.tags = [];
    }
    message.data !== undefined &&
      (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    return obj;
  },
};

const baseObject: object = { key: "", bucket: "", url: "" };

export const Object = {
  encode(message: Object, writer: Writer = Writer.create()): Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.bucket !== "") {
      writer.uint32(18).string(message.bucket);
    }
    if (message.object.length !== 0) {
      writer.uint32(26).bytes(message.object);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(34).fork()).ldelim();
    }
    if (message.url !== "") {
      writer.uint32(42).string(message.url);
    }
    if (message.options !== undefined) {
      Options.encode(message.options, writer.uint32(50).fork()).ldelim();
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Object {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseObject) as Object;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.bucket = reader.string();
          break;
        case 3:
          message.object = reader.bytes() as Buffer;
          break;
        case 4:
          message.meta = Meta.decode(reader, reader.uint32());
          break;
        case 5:
          message.url = reader.string();
          break;
        case 6:
          message.options = Options.decode(reader, reader.uint32());
          break;
        case 7:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Object {
    const message = globalThis.Object.create(baseObject) as Object;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.bucket !== undefined && object.bucket !== null) {
      message.bucket = String(object.bucket);
    } else {
      message.bucket = "";
    }
    if (object.object !== undefined && object.object !== null) {
      message.object = Buffer.from(bytesFromBase64(object.object));
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromJSON(object.meta);
    } else {
      message.meta = undefined;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.options !== undefined && object.options !== null) {
      message.options = Options.fromJSON(object.options);
    } else {
      message.options = undefined;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<Object>): Object {
    const message = { ...baseObject } as Object;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.bucket !== undefined && object.bucket !== null) {
      message.bucket = object.bucket;
    } else {
      message.bucket = "";
    }
    if (object.object !== undefined && object.object !== null) {
      message.object = object.object;
    } else {
      message.object = new Buffer(0);
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromPartial(object.meta);
    } else {
      message.meta = undefined;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.options !== undefined && object.options !== null) {
      message.options = Options.fromPartial(object.options);
    } else {
      message.options = undefined;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  toJSON(message: Object): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.bucket !== undefined && (obj.bucket = message.bucket);
    message.object !== undefined &&
      (obj.object = base64FromBytes(
        message.object !== undefined ? message.object : new Buffer(0)
      ));
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.url !== undefined && (obj.url = message.url);
    message.options !== undefined &&
      (obj.options = message.options
        ? Options.toJSON(message.options)
        : undefined);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseGetRequest: object = { key: "", bucket: "", download: false };

export const GetRequest = {
  encode(message: GetRequest, writer: Writer = Writer.create()): Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.bucket !== "") {
      writer.uint32(18).string(message.bucket);
    }
    if (message.download === true) {
      writer.uint32(24).bool(message.download);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseGetRequest) as GetRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.bucket = reader.string();
          break;
        case 3:
          message.download = reader.bool();
          break;
        case 4:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetRequest {
    const message = globalThis.Object.create(baseGetRequest) as GetRequest;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.bucket !== undefined && object.bucket !== null) {
      message.bucket = String(object.bucket);
    } else {
      message.bucket = "";
    }
    if (object.download !== undefined && object.download !== null) {
      message.download = Boolean(object.download);
    } else {
      message.download = false;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<GetRequest>): GetRequest {
    const message = { ...baseGetRequest } as GetRequest;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.bucket !== undefined && object.bucket !== null) {
      message.bucket = object.bucket;
    } else {
      message.bucket = "";
    }
    if (object.download !== undefined && object.download !== null) {
      message.download = object.download;
    } else {
      message.download = false;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  toJSON(message: GetRequest): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.bucket !== undefined && (obj.bucket = message.bucket);
    message.download !== undefined && (obj.download = message.download);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseObjectsData: object = {};

export const ObjectsData = {
  encode(message: ObjectsData, writer: Writer = Writer.create()): Writer {
    for (const v of message.objectData) {
      ObjectData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ObjectsData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseObjectsData) as ObjectsData;
    message.objectData = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.objectData.push(ObjectData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectsData {
    const message = globalThis.Object.create(baseObjectsData) as ObjectsData;
    message.objectData = [];
    if (object.objectData !== undefined && object.objectData !== null) {
      for (const e of object.objectData) {
        message.objectData.push(ObjectData.fromJSON(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<ObjectsData>): ObjectsData {
    const message = { ...baseObjectsData } as ObjectsData;
    message.objectData = [];
    if (object.objectData !== undefined && object.objectData !== null) {
      for (const e of object.objectData) {
        message.objectData.push(ObjectData.fromPartial(e));
      }
    }
    return message;
  },

  toJSON(message: ObjectsData): unknown {
    const obj: any = {};
    if (message.objectData) {
      obj.objectData = message.objectData.map((e) =>
        e ? ObjectData.toJSON(e) : undefined
      );
    } else {
      obj.objectData = [];
    }
    return obj;
  },
};

const baseObjectData: object = { objectName: "", url: "" };

export const ObjectData = {
  encode(message: ObjectData, writer: Writer = Writer.create()): Writer {
    if (message.objectName !== "") {
      writer.uint32(10).string(message.objectName);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ObjectData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseObjectData) as ObjectData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.objectName = reader.string();
          break;
        case 2:
          message.url = reader.string();
          break;
        case 3:
          message.meta = Meta.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectData {
    const message = globalThis.Object.create(baseObjectData) as ObjectData;
    if (object.objectName !== undefined && object.objectName !== null) {
      message.objectName = String(object.objectName);
    } else {
      message.objectName = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromJSON(object.meta);
    } else {
      message.meta = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<ObjectData>): ObjectData {
    const message = { ...baseObjectData } as ObjectData;
    if (object.objectName !== undefined && object.objectName !== null) {
      message.objectName = object.objectName;
    } else {
      message.objectName = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromPartial(object.meta);
    } else {
      message.meta = undefined;
    }
    return message;
  },

  toJSON(message: ObjectData): unknown {
    const obj: any = {};
    message.objectName !== undefined && (obj.objectName = message.objectName);
    message.url !== undefined && (obj.url = message.url);
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    return obj;
  },
};

const baseDeleteRequest: object = { key: "", bucket: "" };

export const DeleteRequest = {
  encode(message: DeleteRequest, writer: Writer = Writer.create()): Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.bucket !== "") {
      writer.uint32(18).string(message.bucket);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DeleteRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseDeleteRequest
    ) as DeleteRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.bucket = reader.string();
          break;
        case 3:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteRequest {
    const message = globalThis.Object.create(
      baseDeleteRequest
    ) as DeleteRequest;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.bucket !== undefined && object.bucket !== null) {
      message.bucket = String(object.bucket);
    } else {
      message.bucket = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<DeleteRequest>): DeleteRequest {
    const message = { ...baseDeleteRequest } as DeleteRequest;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.bucket !== undefined && object.bucket !== null) {
      message.bucket = object.bucket;
    } else {
      message.bucket = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  toJSON(message: DeleteRequest): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.bucket !== undefined && (obj.bucket = message.bucket);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseResponse: object = { url: "", bucket: "", key: "", length: 0 };

export const Response = {
  encode(message: Response, writer: Writer = Writer.create()): Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    if (message.bucket !== "") {
      writer.uint32(18).string(message.bucket);
    }
    if (message.key !== "") {
      writer.uint32(26).string(message.key);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.tags) {
      Attribute.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.length !== 0) {
      writer.uint32(48).int32(message.length);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Response {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseResponse) as Response;
    message.tags = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.url = reader.string();
          break;
        case 2:
          message.bucket = reader.string();
          break;
        case 3:
          message.key = reader.string();
          break;
        case 4:
          message.meta = Meta.decode(reader, reader.uint32());
          break;
        case 5:
          message.tags.push(Attribute.decode(reader, reader.uint32()));
          break;
        case 6:
          message.length = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Response {
    const message = globalThis.Object.create(baseResponse) as Response;
    message.tags = [];
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.bucket !== undefined && object.bucket !== null) {
      message.bucket = String(object.bucket);
    } else {
      message.bucket = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromJSON(object.meta);
    } else {
      message.meta = undefined;
    }
    if (object.tags !== undefined && object.tags !== null) {
      for (const e of object.tags) {
        message.tags.push(Attribute.fromJSON(e));
      }
    }
    if (object.length !== undefined && object.length !== null) {
      message.length = Number(object.length);
    } else {
      message.length = 0;
    }
    return message;
  },

  fromPartial(object: DeepPartial<Response>): Response {
    const message = { ...baseResponse } as Response;
    message.tags = [];
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.bucket !== undefined && object.bucket !== null) {
      message.bucket = object.bucket;
    } else {
      message.bucket = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromPartial(object.meta);
    } else {
      message.meta = undefined;
    }
    if (object.tags !== undefined && object.tags !== null) {
      for (const e of object.tags) {
        message.tags.push(Attribute.fromPartial(e));
      }
    }
    if (object.length !== undefined && object.length !== null) {
      message.length = object.length;
    } else {
      message.length = 0;
    }
    return message;
  },

  toJSON(message: Response): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    message.bucket !== undefined && (obj.bucket = message.bucket);
    message.key !== undefined && (obj.key = message.key);
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    if (message.tags) {
      obj.tags = message.tags.map((e) => (e ? Attribute.toJSON(e) : undefined));
    } else {
      obj.tags = [];
    }
    message.length !== undefined && (obj.length = message.length);
    return obj;
  },
};

const baseListRequest: object = { bucket: "" };

export const ListRequest = {
  encode(message: ListRequest, writer: Writer = Writer.create()): Writer {
    if (message.bucket !== "") {
      writer.uint32(10).string(message.bucket);
    }
    if (message.filter !== undefined) {
      Struct.encode(message.filter, writer.uint32(18).fork()).ldelim();
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ListRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseListRequest) as ListRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bucket = reader.string();
          break;
        case 2:
          message.filter = Struct.decode(reader, reader.uint32());
          break;
        case 3:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListRequest {
    const message = globalThis.Object.create(baseListRequest) as ListRequest;
    if (object.bucket !== undefined && object.bucket !== null) {
      message.bucket = String(object.bucket);
    } else {
      message.bucket = "";
    }
    if (object.filter !== undefined && object.filter !== null) {
      message.filter = Struct.fromJSON(object.filter);
    } else {
      message.filter = undefined;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<ListRequest>): ListRequest {
    const message = { ...baseListRequest } as ListRequest;
    if (object.bucket !== undefined && object.bucket !== null) {
      message.bucket = object.bucket;
    } else {
      message.bucket = "";
    }
    if (object.filter !== undefined && object.filter !== null) {
      message.filter = Struct.fromPartial(object.filter);
    } else {
      message.filter = undefined;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  toJSON(message: ListRequest): unknown {
    const obj: any = {};
    message.bucket !== undefined && (obj.bucket = message.bucket);
    message.filter !== undefined &&
      (obj.filter = message.filter ? Struct.toJSON(message.filter) : undefined);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

export interface Service {
  Get(request: GetRequest): Observable<Object>;
  Put(request: Observable<Object>): Promise<Response>;
  Delete(request: DeleteRequest): Promise<Empty>;
  List(request: ListRequest): Promise<ObjectsData>;
  Copy(request: CopyRequest): Promise<CopyResponse>;
}

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto.fromPartial({
    dependency: [
      "google/protobuf/empty.proto",
      "google/protobuf/struct.proto",
      "google/protobuf/any.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/attribute.proto",
    ],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.ostorage.CopyRequestItem",
            jsonName: "items",
          },
          {
            name: "subject",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            jsonName: "subject",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "CopyRequest",
      },
      {
        field: [
          {
            name: "response",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.ostorage.CopyResponseItem",
            jsonName: "response",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "CopyResponse",
      },
      {
        field: [
          { name: "bucket", number: 1, label: 1, type: 9, jsonName: "bucket" },
          {
            name: "copySource",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "copySource",
          },
          { name: "key", number: 3, label: 1, type: 9, jsonName: "key" },
          {
            name: "meta",
            number: 4,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.meta.Meta",
            jsonName: "meta",
          },
          {
            name: "options",
            number: 5,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.ostorage.Options",
            jsonName: "options",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "CopyRequestItem",
      },
      {
        field: [
          { name: "bucket", number: 1, label: 1, type: 9, jsonName: "bucket" },
          {
            name: "copySource",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "copySource",
          },
          { name: "key", number: 3, label: 1, type: 9, jsonName: "key" },
          {
            name: "meta",
            number: 4,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.meta.Meta",
            jsonName: "meta",
          },
          {
            name: "options",
            number: 5,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.ostorage.Options",
            jsonName: "options",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "CopyResponseItem",
      },
      {
        field: [
          {
            name: "encoding",
            number: 1,
            label: 1,
            type: 9,
            jsonName: "encoding",
          },
          {
            name: "content_type",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "contentType",
          },
          {
            name: "content_language",
            number: 3,
            label: 1,
            type: 9,
            jsonName: "contentLanguage",
          },
          {
            name: "content_disposition",
            number: 4,
            label: 1,
            type: 9,
            jsonName: "contentDisposition",
          },
          { name: "length", number: 5, label: 1, type: 5, jsonName: "length" },
          {
            name: "version",
            number: 6,
            label: 1,
            type: 9,
            jsonName: "version",
          },
          { name: "md5", number: 7, label: 1, type: 9, jsonName: "md5" },
          {
            name: "tags",
            number: 8,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.attribute.Attribute",
            jsonName: "tags",
          },
          {
            name: "data",
            number: 9,
            label: 1,
            type: 11,
            typeName: ".google.protobuf.Any",
            jsonName: "data",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Options",
      },
      {
        field: [
          { name: "key", number: 1, label: 1, type: 9, jsonName: "key" },
          { name: "bucket", number: 2, label: 1, type: 9, jsonName: "bucket" },
          { name: "object", number: 3, label: 1, type: 12, jsonName: "object" },
          {
            name: "meta",
            number: 4,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.meta.Meta",
            jsonName: "meta",
          },
          { name: "url", number: 5, label: 1, type: 9, jsonName: "url" },
          {
            name: "options",
            number: 6,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.ostorage.Options",
            jsonName: "options",
          },
          {
            name: "subject",
            number: 7,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            jsonName: "subject",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Object",
      },
      {
        field: [
          { name: "key", number: 1, label: 1, type: 9, jsonName: "key" },
          { name: "bucket", number: 2, label: 1, type: 9, jsonName: "bucket" },
          {
            name: "download",
            number: 3,
            label: 1,
            type: 8,
            jsonName: "download",
          },
          {
            name: "subject",
            number: 4,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            jsonName: "subject",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "GetRequest",
      },
      {
        field: [
          {
            name: "object_data",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.ostorage.ObjectData",
            jsonName: "objectData",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "ObjectsData",
      },
      {
        field: [
          {
            name: "object_name",
            number: 1,
            label: 1,
            type: 9,
            jsonName: "objectName",
          },
          { name: "url", number: 2, label: 1, type: 9, jsonName: "url" },
          {
            name: "meta",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.meta.Meta",
            jsonName: "meta",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "ObjectData",
      },
      {
        field: [
          { name: "key", number: 1, label: 1, type: 9, jsonName: "key" },
          { name: "bucket", number: 2, label: 1, type: 9, jsonName: "bucket" },
          {
            name: "subject",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            jsonName: "subject",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "DeleteRequest",
      },
      {
        field: [
          { name: "url", number: 1, label: 1, type: 9, jsonName: "url" },
          { name: "bucket", number: 2, label: 1, type: 9, jsonName: "bucket" },
          { name: "key", number: 3, label: 1, type: 9, jsonName: "key" },
          {
            name: "meta",
            number: 4,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.meta.Meta",
            jsonName: "meta",
          },
          {
            name: "tags",
            number: 5,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.attribute.Attribute",
            jsonName: "tags",
          },
          { name: "length", number: 6, label: 1, type: 5, jsonName: "length" },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Response",
      },
      {
        field: [
          { name: "bucket", number: 1, label: 1, type: 9, jsonName: "bucket" },
          {
            name: "filter",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".google.protobuf.Struct",
            jsonName: "filter",
          },
          {
            name: "subject",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            jsonName: "subject",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "ListRequest",
      },
    ],
    enumType: [],
    service: [
      {
        method: [
          {
            name: "Get",
            inputType: ".io.restorecommerce.ostorage.GetRequest",
            outputType: ".io.restorecommerce.ostorage.Object",
            serverStreaming: true,
          },
          {
            name: "Put",
            inputType: ".io.restorecommerce.ostorage.Object",
            outputType: ".io.restorecommerce.ostorage.Response",
            clientStreaming: true,
          },
          {
            name: "Delete",
            inputType: ".io.restorecommerce.ostorage.DeleteRequest",
            outputType: ".google.protobuf.Empty",
          },
          {
            name: "List",
            inputType: ".io.restorecommerce.ostorage.ListRequest",
            outputType: ".io.restorecommerce.ostorage.ObjectsData",
          },
          {
            name: "Copy",
            inputType: ".io.restorecommerce.ostorage.CopyRequest",
            outputType: ".io.restorecommerce.ostorage.CopyResponse",
          },
        ],
        name: "Service",
      },
    ],
    extension: [],
    name: "io/restorecommerce/ostorage.proto",
    package: "io.restorecommerce.ostorage",
    sourceCodeInfo: {
      location: [
        {
          path: [4, 4, 2, 8],
          span: [53, 2, 31],
          leadingDetachedComments: [],
          trailingComments: " optional meta data ex: from and to dates\n",
        },
        {
          path: [4, 10, 2, 5],
          span: [95, 2, 19],
          leadingDetachedComments: [],
          trailingComments: " file size of uploaded object\n",
        },
        {
          path: [4, 11, 2, 1],
          span: [100, 2, 36],
          leadingDetachedComments: [],
          trailingComments:
            "/ Filter based on fieldName|operation, value|list\n",
        },
      ],
    },
    syntax: "proto3",
  }),
  references: {
    ".io.restorecommerce.ostorage.CopyRequest": CopyRequest,
    ".io.restorecommerce.ostorage.CopyResponse": CopyResponse,
    ".io.restorecommerce.ostorage.CopyRequestItem": CopyRequestItem,
    ".io.restorecommerce.ostorage.CopyResponseItem": CopyResponseItem,
    ".io.restorecommerce.ostorage.Options": Options,
    ".io.restorecommerce.ostorage.Object": Object,
    ".io.restorecommerce.ostorage.GetRequest": GetRequest,
    ".io.restorecommerce.ostorage.ObjectsData": ObjectsData,
    ".io.restorecommerce.ostorage.ObjectData": ObjectData,
    ".io.restorecommerce.ostorage.DeleteRequest": DeleteRequest,
    ".io.restorecommerce.ostorage.Response": Response,
    ".io.restorecommerce.ostorage.ListRequest": ListRequest,
  },
  dependencies: [
    protoMetadata1,
    protoMetadata2,
    protoMetadata3,
    protoMetadata4,
    protoMetadata5,
    protoMetadata6,
  ],
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

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (let i = 0; i < arr.byteLength; ++i) {
    bin.push(String.fromCharCode(arr[i]));
  }
  return btoa(bin.join(""));
}

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
