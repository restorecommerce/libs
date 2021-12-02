/* eslint-disable */
import { FileDescriptorProto } from "ts-proto-descriptors/google/protobuf/descriptor";
import {
  Subject,
  protoMetadata as protoMetadata4,
} from "../../io/restorecommerce/auth";
import {
  OperationStatus,
  Status,
  protoMetadata as protoMetadata6,
} from "../../io/restorecommerce/status";
import {
  Meta,
  protoMetadata as protoMetadata3,
} from "../../io/restorecommerce/meta";
import {
  Any,
  protoMetadata as protoMetadata2,
} from "../../google/protobuf/any";
import {
  FilterOp,
  protoMetadata as protoMetadata1,
} from "../../io/restorecommerce/filter";
import { Observable } from "rxjs";
import {
  protoMetadata as protoMetadata5,
  Attribute,
} from "../../io/restorecommerce/attribute";
import {
  protoMetadata as protoMetadata7,
  DeleteResponse,
} from "../../io/restorecommerce/resource_base";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "io.restorecommerce.ostorage";

export interface CopyRequestList {
  items: CopyRequestItem[];
  subject?: Subject;
}

export interface CopyResponseList {
  response: copyResponsePayloadWithStatus[];
  operationStatus?: OperationStatus;
}

export interface copyResponsePayloadWithStatus {
  payload?: CopyResponseItem;
  status?: Status;
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

export interface ObjectResponse {
  response?: ObjectResponsePayloadWithStatus;
  operationStatus?: OperationStatus;
}

export interface ObjectResponsePayloadWithStatus {
  payload?: ObjectResponsePayload;
  status?: Status;
}

export interface ObjectResponsePayload {
  key: string;
  bucket: string;
  object: Buffer;
  meta?: Meta;
  url: string;
  options?: Options;
}

export interface GetRequest {
  key: string;
  bucket: string;
  download: boolean;
  subject?: Subject;
}

export interface ListResponse {
  response: ObjectsDataWithPayloadStatus[];
  operationStatus?: OperationStatus;
}

export interface ObjectsDataWithPayloadStatus {
  payload?: ObjectData;
  status?: Status;
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

export interface PutResponse {
  response?: PutResponseWithPayloadStatus;
  operationStatus?: OperationStatus;
}

export interface PutResponseWithPayloadStatus {
  payload?: Response;
  status?: Status;
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
  filters?: FilterOp;
  subject?: Subject;
  maxKeys: number;
  prefix: string;
}

/**
 * OstorageMessage is used for emitting
 * objectUploaded and objectDownloaded events
 */
export interface OstorageMessage {
  key: string;
  bucket: string;
  metadata?: Any;
  subject?: Subject;
}

export interface MoveRequestList {
  items: MoveRequestItem[];
  subject?: Subject;
}

export interface MoveRequestItem {
  /** destination bucket name */
  bucket: string;
  /** source object with bucket name */
  sourceObject: string;
  /** destination key name */
  key: string;
  meta?: Meta;
  options?: Options;
}

export interface MoveResponseList {
  response: MoveResponsePayloadWithStatus[];
  operationStatus?: OperationStatus;
}

export interface MoveResponsePayloadWithStatus {
  payload?: MoveResponseItem;
  status?: Status;
}

export interface MoveResponseItem {
  bucket: string;
  sourceObject: string;
  key: string;
  meta?: Meta;
  options?: Options;
}

const baseCopyRequestList: object = {};

export const CopyRequestList = {
  encode(message: CopyRequestList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      CopyRequestItem.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CopyRequestList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseCopyRequestList
    ) as CopyRequestList;
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

  fromJSON(object: any): CopyRequestList {
    const message = globalThis.Object.create(
      baseCopyRequestList
    ) as CopyRequestList;
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

  fromPartial(object: DeepPartial<CopyRequestList>): CopyRequestList {
    const message = { ...baseCopyRequestList } as CopyRequestList;
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

  toJSON(message: CopyRequestList): unknown {
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

const baseCopyResponseList: object = {};

export const CopyResponseList = {
  encode(message: CopyResponseList, writer: Writer = Writer.create()): Writer {
    for (const v of message.response) {
      copyResponsePayloadWithStatus
        .encode(v!, writer.uint32(10).fork())
        .ldelim();
    }
    if (message.operationStatus !== undefined) {
      OperationStatus.encode(
        message.operationStatus,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CopyResponseList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseCopyResponseList
    ) as CopyResponseList;
    message.response = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response.push(
            copyResponsePayloadWithStatus.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.operationStatus = OperationStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CopyResponseList {
    const message = globalThis.Object.create(
      baseCopyResponseList
    ) as CopyResponseList;
    message.response = [];
    if (object.response !== undefined && object.response !== null) {
      for (const e of object.response) {
        message.response.push(copyResponsePayloadWithStatus.fromJSON(e));
      }
    }
    if (
      object.operationStatus !== undefined &&
      object.operationStatus !== null
    ) {
      message.operationStatus = OperationStatus.fromJSON(
        object.operationStatus
      );
    } else {
      message.operationStatus = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<CopyResponseList>): CopyResponseList {
    const message = { ...baseCopyResponseList } as CopyResponseList;
    message.response = [];
    if (object.response !== undefined && object.response !== null) {
      for (const e of object.response) {
        message.response.push(copyResponsePayloadWithStatus.fromPartial(e));
      }
    }
    if (
      object.operationStatus !== undefined &&
      object.operationStatus !== null
    ) {
      message.operationStatus = OperationStatus.fromPartial(
        object.operationStatus
      );
    } else {
      message.operationStatus = undefined;
    }
    return message;
  },

  toJSON(message: CopyResponseList): unknown {
    const obj: any = {};
    if (message.response) {
      obj.response = message.response.map((e) =>
        e ? copyResponsePayloadWithStatus.toJSON(e) : undefined
      );
    } else {
      obj.response = [];
    }
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus
        ? OperationStatus.toJSON(message.operationStatus)
        : undefined);
    return obj;
  },
};

const basecopyResponsePayloadWithStatus: object = {};

export const copyResponsePayloadWithStatus = {
  encode(
    message: copyResponsePayloadWithStatus,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.payload !== undefined) {
      CopyResponseItem.encode(
        message.payload,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): copyResponsePayloadWithStatus {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      basecopyResponsePayloadWithStatus
    ) as copyResponsePayloadWithStatus;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = CopyResponseItem.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = Status.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): copyResponsePayloadWithStatus {
    const message = globalThis.Object.create(
      basecopyResponsePayloadWithStatus
    ) as copyResponsePayloadWithStatus;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = CopyResponseItem.fromJSON(object.payload);
    } else {
      message.payload = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromJSON(object.status);
    } else {
      message.status = undefined;
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<copyResponsePayloadWithStatus>
  ): copyResponsePayloadWithStatus {
    const message = {
      ...basecopyResponsePayloadWithStatus,
    } as copyResponsePayloadWithStatus;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = CopyResponseItem.fromPartial(object.payload);
    } else {
      message.payload = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromPartial(object.status);
    } else {
      message.status = undefined;
    }
    return message;
  },

  toJSON(message: copyResponsePayloadWithStatus): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload
        ? CopyResponseItem.toJSON(message.payload)
        : undefined);
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
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

const baseObjectResponse: object = {};

export const ObjectResponse = {
  encode(message: ObjectResponse, writer: Writer = Writer.create()): Writer {
    if (message.response !== undefined) {
      ObjectResponsePayloadWithStatus.encode(
        message.response,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.operationStatus !== undefined) {
      OperationStatus.encode(
        message.operationStatus,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ObjectResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseObjectResponse
    ) as ObjectResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = ObjectResponsePayloadWithStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.operationStatus = OperationStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectResponse {
    const message = globalThis.Object.create(
      baseObjectResponse
    ) as ObjectResponse;
    if (object.response !== undefined && object.response !== null) {
      message.response = ObjectResponsePayloadWithStatus.fromJSON(
        object.response
      );
    } else {
      message.response = undefined;
    }
    if (
      object.operationStatus !== undefined &&
      object.operationStatus !== null
    ) {
      message.operationStatus = OperationStatus.fromJSON(
        object.operationStatus
      );
    } else {
      message.operationStatus = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<ObjectResponse>): ObjectResponse {
    const message = { ...baseObjectResponse } as ObjectResponse;
    if (object.response !== undefined && object.response !== null) {
      message.response = ObjectResponsePayloadWithStatus.fromPartial(
        object.response
      );
    } else {
      message.response = undefined;
    }
    if (
      object.operationStatus !== undefined &&
      object.operationStatus !== null
    ) {
      message.operationStatus = OperationStatus.fromPartial(
        object.operationStatus
      );
    } else {
      message.operationStatus = undefined;
    }
    return message;
  },

  toJSON(message: ObjectResponse): unknown {
    const obj: any = {};
    message.response !== undefined &&
      (obj.response = message.response
        ? ObjectResponsePayloadWithStatus.toJSON(message.response)
        : undefined);
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus
        ? OperationStatus.toJSON(message.operationStatus)
        : undefined);
    return obj;
  },
};

const baseObjectResponsePayloadWithStatus: object = {};

export const ObjectResponsePayloadWithStatus = {
  encode(
    message: ObjectResponsePayloadWithStatus,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.payload !== undefined) {
      ObjectResponsePayload.encode(
        message.payload,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): ObjectResponsePayloadWithStatus {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseObjectResponsePayloadWithStatus
    ) as ObjectResponsePayloadWithStatus;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = ObjectResponsePayload.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.status = Status.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectResponsePayloadWithStatus {
    const message = globalThis.Object.create(
      baseObjectResponsePayloadWithStatus
    ) as ObjectResponsePayloadWithStatus;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = ObjectResponsePayload.fromJSON(object.payload);
    } else {
      message.payload = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromJSON(object.status);
    } else {
      message.status = undefined;
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<ObjectResponsePayloadWithStatus>
  ): ObjectResponsePayloadWithStatus {
    const message = {
      ...baseObjectResponsePayloadWithStatus,
    } as ObjectResponsePayloadWithStatus;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = ObjectResponsePayload.fromPartial(object.payload);
    } else {
      message.payload = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromPartial(object.status);
    } else {
      message.status = undefined;
    }
    return message;
  },

  toJSON(message: ObjectResponsePayloadWithStatus): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload
        ? ObjectResponsePayload.toJSON(message.payload)
        : undefined);
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },
};

const baseObjectResponsePayload: object = { key: "", bucket: "", url: "" };

export const ObjectResponsePayload = {
  encode(
    message: ObjectResponsePayload,
    writer: Writer = Writer.create()
  ): Writer {
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
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ObjectResponsePayload {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseObjectResponsePayload
    ) as ObjectResponsePayload;
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectResponsePayload {
    const message = globalThis.Object.create(
      baseObjectResponsePayload
    ) as ObjectResponsePayload;
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
    return message;
  },

  fromPartial(
    object: DeepPartial<ObjectResponsePayload>
  ): ObjectResponsePayload {
    const message = { ...baseObjectResponsePayload } as ObjectResponsePayload;
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
    return message;
  },

  toJSON(message: ObjectResponsePayload): unknown {
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

const baseListResponse: object = {};

export const ListResponse = {
  encode(message: ListResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.response) {
      ObjectsDataWithPayloadStatus.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.operationStatus !== undefined) {
      OperationStatus.encode(
        message.operationStatus,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ListResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseListResponse) as ListResponse;
    message.response = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response.push(
            ObjectsDataWithPayloadStatus.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.operationStatus = OperationStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListResponse {
    const message = globalThis.Object.create(baseListResponse) as ListResponse;
    message.response = [];
    if (object.response !== undefined && object.response !== null) {
      for (const e of object.response) {
        message.response.push(ObjectsDataWithPayloadStatus.fromJSON(e));
      }
    }
    if (
      object.operationStatus !== undefined &&
      object.operationStatus !== null
    ) {
      message.operationStatus = OperationStatus.fromJSON(
        object.operationStatus
      );
    } else {
      message.operationStatus = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<ListResponse>): ListResponse {
    const message = { ...baseListResponse } as ListResponse;
    message.response = [];
    if (object.response !== undefined && object.response !== null) {
      for (const e of object.response) {
        message.response.push(ObjectsDataWithPayloadStatus.fromPartial(e));
      }
    }
    if (
      object.operationStatus !== undefined &&
      object.operationStatus !== null
    ) {
      message.operationStatus = OperationStatus.fromPartial(
        object.operationStatus
      );
    } else {
      message.operationStatus = undefined;
    }
    return message;
  },

  toJSON(message: ListResponse): unknown {
    const obj: any = {};
    if (message.response) {
      obj.response = message.response.map((e) =>
        e ? ObjectsDataWithPayloadStatus.toJSON(e) : undefined
      );
    } else {
      obj.response = [];
    }
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus
        ? OperationStatus.toJSON(message.operationStatus)
        : undefined);
    return obj;
  },
};

const baseObjectsDataWithPayloadStatus: object = {};

export const ObjectsDataWithPayloadStatus = {
  encode(
    message: ObjectsDataWithPayloadStatus,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.payload !== undefined) {
      ObjectData.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): ObjectsDataWithPayloadStatus {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseObjectsDataWithPayloadStatus
    ) as ObjectsDataWithPayloadStatus;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = ObjectData.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = Status.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectsDataWithPayloadStatus {
    const message = globalThis.Object.create(
      baseObjectsDataWithPayloadStatus
    ) as ObjectsDataWithPayloadStatus;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = ObjectData.fromJSON(object.payload);
    } else {
      message.payload = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromJSON(object.status);
    } else {
      message.status = undefined;
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<ObjectsDataWithPayloadStatus>
  ): ObjectsDataWithPayloadStatus {
    const message = {
      ...baseObjectsDataWithPayloadStatus,
    } as ObjectsDataWithPayloadStatus;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = ObjectData.fromPartial(object.payload);
    } else {
      message.payload = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromPartial(object.status);
    } else {
      message.status = undefined;
    }
    return message;
  },

  toJSON(message: ObjectsDataWithPayloadStatus): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload
        ? ObjectData.toJSON(message.payload)
        : undefined);
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
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

const basePutResponse: object = {};

export const PutResponse = {
  encode(message: PutResponse, writer: Writer = Writer.create()): Writer {
    if (message.response !== undefined) {
      PutResponseWithPayloadStatus.encode(
        message.response,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.operationStatus !== undefined) {
      OperationStatus.encode(
        message.operationStatus,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PutResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(basePutResponse) as PutResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = PutResponseWithPayloadStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.operationStatus = OperationStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PutResponse {
    const message = globalThis.Object.create(basePutResponse) as PutResponse;
    if (object.response !== undefined && object.response !== null) {
      message.response = PutResponseWithPayloadStatus.fromJSON(object.response);
    } else {
      message.response = undefined;
    }
    if (
      object.operationStatus !== undefined &&
      object.operationStatus !== null
    ) {
      message.operationStatus = OperationStatus.fromJSON(
        object.operationStatus
      );
    } else {
      message.operationStatus = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<PutResponse>): PutResponse {
    const message = { ...basePutResponse } as PutResponse;
    if (object.response !== undefined && object.response !== null) {
      message.response = PutResponseWithPayloadStatus.fromPartial(
        object.response
      );
    } else {
      message.response = undefined;
    }
    if (
      object.operationStatus !== undefined &&
      object.operationStatus !== null
    ) {
      message.operationStatus = OperationStatus.fromPartial(
        object.operationStatus
      );
    } else {
      message.operationStatus = undefined;
    }
    return message;
  },

  toJSON(message: PutResponse): unknown {
    const obj: any = {};
    message.response !== undefined &&
      (obj.response = message.response
        ? PutResponseWithPayloadStatus.toJSON(message.response)
        : undefined);
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus
        ? OperationStatus.toJSON(message.operationStatus)
        : undefined);
    return obj;
  },
};

const basePutResponseWithPayloadStatus: object = {};

export const PutResponseWithPayloadStatus = {
  encode(
    message: PutResponseWithPayloadStatus,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.payload !== undefined) {
      Response.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): PutResponseWithPayloadStatus {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      basePutResponseWithPayloadStatus
    ) as PutResponseWithPayloadStatus;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = Response.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = Status.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PutResponseWithPayloadStatus {
    const message = globalThis.Object.create(
      basePutResponseWithPayloadStatus
    ) as PutResponseWithPayloadStatus;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = Response.fromJSON(object.payload);
    } else {
      message.payload = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromJSON(object.status);
    } else {
      message.status = undefined;
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<PutResponseWithPayloadStatus>
  ): PutResponseWithPayloadStatus {
    const message = {
      ...basePutResponseWithPayloadStatus,
    } as PutResponseWithPayloadStatus;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = Response.fromPartial(object.payload);
    } else {
      message.payload = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromPartial(object.status);
    } else {
      message.status = undefined;
    }
    return message;
  },

  toJSON(message: PutResponseWithPayloadStatus): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload
        ? Response.toJSON(message.payload)
        : undefined);
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
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

const baseListRequest: object = { bucket: "", maxKeys: 0, prefix: "" };

export const ListRequest = {
  encode(message: ListRequest, writer: Writer = Writer.create()): Writer {
    if (message.bucket !== "") {
      writer.uint32(10).string(message.bucket);
    }
    if (message.filters !== undefined) {
      FilterOp.encode(message.filters, writer.uint32(18).fork()).ldelim();
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    if (message.maxKeys !== 0) {
      writer.uint32(32).int32(message.maxKeys);
    }
    if (message.prefix !== "") {
      writer.uint32(42).string(message.prefix);
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
          message.filters = FilterOp.decode(reader, reader.uint32());
          break;
        case 3:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        case 4:
          message.maxKeys = reader.int32();
          break;
        case 5:
          message.prefix = reader.string();
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
    if (object.filters !== undefined && object.filters !== null) {
      message.filters = FilterOp.fromJSON(object.filters);
    } else {
      message.filters = undefined;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    if (object.maxKeys !== undefined && object.maxKeys !== null) {
      message.maxKeys = Number(object.maxKeys);
    } else {
      message.maxKeys = 0;
    }
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = String(object.prefix);
    } else {
      message.prefix = "";
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
    if (object.filters !== undefined && object.filters !== null) {
      message.filters = FilterOp.fromPartial(object.filters);
    } else {
      message.filters = undefined;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    if (object.maxKeys !== undefined && object.maxKeys !== null) {
      message.maxKeys = object.maxKeys;
    } else {
      message.maxKeys = 0;
    }
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = object.prefix;
    } else {
      message.prefix = "";
    }
    return message;
  },

  toJSON(message: ListRequest): unknown {
    const obj: any = {};
    message.bucket !== undefined && (obj.bucket = message.bucket);
    message.filters !== undefined &&
      (obj.filters = message.filters
        ? FilterOp.toJSON(message.filters)
        : undefined);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    message.maxKeys !== undefined && (obj.maxKeys = message.maxKeys);
    message.prefix !== undefined && (obj.prefix = message.prefix);
    return obj;
  },
};

const baseOstorageMessage: object = { key: "", bucket: "" };

export const OstorageMessage = {
  encode(message: OstorageMessage, writer: Writer = Writer.create()): Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.bucket !== "") {
      writer.uint32(18).string(message.bucket);
    }
    if (message.metadata !== undefined) {
      Any.encode(message.metadata, writer.uint32(26).fork()).ldelim();
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): OstorageMessage {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseOstorageMessage
    ) as OstorageMessage;
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
          message.metadata = Any.decode(reader, reader.uint32());
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

  fromJSON(object: any): OstorageMessage {
    const message = globalThis.Object.create(
      baseOstorageMessage
    ) as OstorageMessage;
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
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Any.fromJSON(object.metadata);
    } else {
      message.metadata = undefined;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<OstorageMessage>): OstorageMessage {
    const message = { ...baseOstorageMessage } as OstorageMessage;
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
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Any.fromPartial(object.metadata);
    } else {
      message.metadata = undefined;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  toJSON(message: OstorageMessage): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.bucket !== undefined && (obj.bucket = message.bucket);
    message.metadata !== undefined &&
      (obj.metadata = message.metadata
        ? Any.toJSON(message.metadata)
        : undefined);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseMoveRequestList: object = {};

export const MoveRequestList = {
  encode(message: MoveRequestList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      MoveRequestItem.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MoveRequestList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseMoveRequestList
    ) as MoveRequestList;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(MoveRequestItem.decode(reader, reader.uint32()));
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

  fromJSON(object: any): MoveRequestList {
    const message = globalThis.Object.create(
      baseMoveRequestList
    ) as MoveRequestList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(MoveRequestItem.fromJSON(e));
      }
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<MoveRequestList>): MoveRequestList {
    const message = { ...baseMoveRequestList } as MoveRequestList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(MoveRequestItem.fromPartial(e));
      }
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  toJSON(message: MoveRequestList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? MoveRequestItem.toJSON(e) : undefined
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

const baseMoveRequestItem: object = { bucket: "", sourceObject: "", key: "" };

export const MoveRequestItem = {
  encode(message: MoveRequestItem, writer: Writer = Writer.create()): Writer {
    if (message.bucket !== "") {
      writer.uint32(10).string(message.bucket);
    }
    if (message.sourceObject !== "") {
      writer.uint32(18).string(message.sourceObject);
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

  decode(input: Reader | Uint8Array, length?: number): MoveRequestItem {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseMoveRequestItem
    ) as MoveRequestItem;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bucket = reader.string();
          break;
        case 2:
          message.sourceObject = reader.string();
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

  fromJSON(object: any): MoveRequestItem {
    const message = globalThis.Object.create(
      baseMoveRequestItem
    ) as MoveRequestItem;
    if (object.bucket !== undefined && object.bucket !== null) {
      message.bucket = String(object.bucket);
    } else {
      message.bucket = "";
    }
    if (object.sourceObject !== undefined && object.sourceObject !== null) {
      message.sourceObject = String(object.sourceObject);
    } else {
      message.sourceObject = "";
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

  fromPartial(object: DeepPartial<MoveRequestItem>): MoveRequestItem {
    const message = { ...baseMoveRequestItem } as MoveRequestItem;
    if (object.bucket !== undefined && object.bucket !== null) {
      message.bucket = object.bucket;
    } else {
      message.bucket = "";
    }
    if (object.sourceObject !== undefined && object.sourceObject !== null) {
      message.sourceObject = object.sourceObject;
    } else {
      message.sourceObject = "";
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

  toJSON(message: MoveRequestItem): unknown {
    const obj: any = {};
    message.bucket !== undefined && (obj.bucket = message.bucket);
    message.sourceObject !== undefined &&
      (obj.sourceObject = message.sourceObject);
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

const baseMoveResponseList: object = {};

export const MoveResponseList = {
  encode(message: MoveResponseList, writer: Writer = Writer.create()): Writer {
    for (const v of message.response) {
      MoveResponsePayloadWithStatus.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.operationStatus !== undefined) {
      OperationStatus.encode(
        message.operationStatus,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MoveResponseList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseMoveResponseList
    ) as MoveResponseList;
    message.response = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response.push(
            MoveResponsePayloadWithStatus.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.operationStatus = OperationStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MoveResponseList {
    const message = globalThis.Object.create(
      baseMoveResponseList
    ) as MoveResponseList;
    message.response = [];
    if (object.response !== undefined && object.response !== null) {
      for (const e of object.response) {
        message.response.push(MoveResponsePayloadWithStatus.fromJSON(e));
      }
    }
    if (
      object.operationStatus !== undefined &&
      object.operationStatus !== null
    ) {
      message.operationStatus = OperationStatus.fromJSON(
        object.operationStatus
      );
    } else {
      message.operationStatus = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<MoveResponseList>): MoveResponseList {
    const message = { ...baseMoveResponseList } as MoveResponseList;
    message.response = [];
    if (object.response !== undefined && object.response !== null) {
      for (const e of object.response) {
        message.response.push(MoveResponsePayloadWithStatus.fromPartial(e));
      }
    }
    if (
      object.operationStatus !== undefined &&
      object.operationStatus !== null
    ) {
      message.operationStatus = OperationStatus.fromPartial(
        object.operationStatus
      );
    } else {
      message.operationStatus = undefined;
    }
    return message;
  },

  toJSON(message: MoveResponseList): unknown {
    const obj: any = {};
    if (message.response) {
      obj.response = message.response.map((e) =>
        e ? MoveResponsePayloadWithStatus.toJSON(e) : undefined
      );
    } else {
      obj.response = [];
    }
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus
        ? OperationStatus.toJSON(message.operationStatus)
        : undefined);
    return obj;
  },
};

const baseMoveResponsePayloadWithStatus: object = {};

export const MoveResponsePayloadWithStatus = {
  encode(
    message: MoveResponsePayloadWithStatus,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.payload !== undefined) {
      MoveResponseItem.encode(
        message.payload,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MoveResponsePayloadWithStatus {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseMoveResponsePayloadWithStatus
    ) as MoveResponsePayloadWithStatus;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = MoveResponseItem.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = Status.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MoveResponsePayloadWithStatus {
    const message = globalThis.Object.create(
      baseMoveResponsePayloadWithStatus
    ) as MoveResponsePayloadWithStatus;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = MoveResponseItem.fromJSON(object.payload);
    } else {
      message.payload = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromJSON(object.status);
    } else {
      message.status = undefined;
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<MoveResponsePayloadWithStatus>
  ): MoveResponsePayloadWithStatus {
    const message = {
      ...baseMoveResponsePayloadWithStatus,
    } as MoveResponsePayloadWithStatus;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = MoveResponseItem.fromPartial(object.payload);
    } else {
      message.payload = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromPartial(object.status);
    } else {
      message.status = undefined;
    }
    return message;
  },

  toJSON(message: MoveResponsePayloadWithStatus): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload
        ? MoveResponseItem.toJSON(message.payload)
        : undefined);
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },
};

const baseMoveResponseItem: object = { bucket: "", sourceObject: "", key: "" };

export const MoveResponseItem = {
  encode(message: MoveResponseItem, writer: Writer = Writer.create()): Writer {
    if (message.bucket !== "") {
      writer.uint32(10).string(message.bucket);
    }
    if (message.sourceObject !== "") {
      writer.uint32(18).string(message.sourceObject);
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

  decode(input: Reader | Uint8Array, length?: number): MoveResponseItem {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseMoveResponseItem
    ) as MoveResponseItem;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bucket = reader.string();
          break;
        case 2:
          message.sourceObject = reader.string();
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

  fromJSON(object: any): MoveResponseItem {
    const message = globalThis.Object.create(
      baseMoveResponseItem
    ) as MoveResponseItem;
    if (object.bucket !== undefined && object.bucket !== null) {
      message.bucket = String(object.bucket);
    } else {
      message.bucket = "";
    }
    if (object.sourceObject !== undefined && object.sourceObject !== null) {
      message.sourceObject = String(object.sourceObject);
    } else {
      message.sourceObject = "";
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

  fromPartial(object: DeepPartial<MoveResponseItem>): MoveResponseItem {
    const message = { ...baseMoveResponseItem } as MoveResponseItem;
    if (object.bucket !== undefined && object.bucket !== null) {
      message.bucket = object.bucket;
    } else {
      message.bucket = "";
    }
    if (object.sourceObject !== undefined && object.sourceObject !== null) {
      message.sourceObject = object.sourceObject;
    } else {
      message.sourceObject = "";
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

  toJSON(message: MoveResponseItem): unknown {
    const obj: any = {};
    message.bucket !== undefined && (obj.bucket = message.bucket);
    message.sourceObject !== undefined &&
      (obj.sourceObject = message.sourceObject);
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

export interface Service {
  Get(request: GetRequest): Observable<ObjectResponse>;
  Put(request: Observable<Object>): Promise<PutResponse>;
  Delete(request: DeleteRequest): Promise<DeleteResponse>;
  List(request: ListRequest): Promise<ListResponse>;
  Copy(request: CopyRequestList): Promise<CopyResponseList>;
  Move(request: MoveRequestList): Promise<MoveResponseList>;
}

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto.fromPartial({
    dependency: [
      "io/restorecommerce/filter.proto",
      "google/protobuf/any.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/attribute.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/resource_base.proto",
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
        name: "CopyRequestList",
      },
      {
        field: [
          {
            name: "response",
            number: 1,
            label: 3,
            type: 11,
            typeName:
              ".io.restorecommerce.ostorage.copyResponsePayloadWithStatus",
            jsonName: "response",
          },
          {
            name: "operation_status",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.OperationStatus",
            jsonName: "operationStatus",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "CopyResponseList",
      },
      {
        field: [
          {
            name: "payload",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.ostorage.CopyResponseItem",
            jsonName: "payload",
          },
          {
            name: "status",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.Status",
            jsonName: "status",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "copyResponsePayloadWithStatus",
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
          {
            name: "response",
            number: 1,
            label: 1,
            type: 11,
            typeName:
              ".io.restorecommerce.ostorage.ObjectResponsePayloadWithStatus",
            jsonName: "response",
          },
          {
            name: "operation_status",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.OperationStatus",
            jsonName: "operationStatus",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "ObjectResponse",
      },
      {
        field: [
          {
            name: "payload",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.ostorage.ObjectResponsePayload",
            jsonName: "payload",
          },
          {
            name: "status",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.Status",
            jsonName: "status",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "ObjectResponsePayloadWithStatus",
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
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "ObjectResponsePayload",
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
            name: "response",
            number: 1,
            label: 3,
            type: 11,
            typeName:
              ".io.restorecommerce.ostorage.ObjectsDataWithPayloadStatus",
            jsonName: "response",
          },
          {
            name: "operation_status",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.OperationStatus",
            jsonName: "operationStatus",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "ListResponse",
      },
      {
        field: [
          {
            name: "payload",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.ostorage.ObjectData",
            jsonName: "payload",
          },
          {
            name: "status",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.Status",
            jsonName: "status",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "ObjectsDataWithPayloadStatus",
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
          {
            name: "response",
            number: 1,
            label: 1,
            type: 11,
            typeName:
              ".io.restorecommerce.ostorage.PutResponseWithPayloadStatus",
            jsonName: "response",
          },
          {
            name: "operation_status",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.OperationStatus",
            jsonName: "operationStatus",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "PutResponse",
      },
      {
        field: [
          {
            name: "payload",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.ostorage.Response",
            jsonName: "payload",
          },
          {
            name: "status",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.Status",
            jsonName: "status",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "PutResponseWithPayloadStatus",
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
            name: "filters",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.filter.FilterOp",
            jsonName: "filters",
          },
          {
            name: "subject",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            jsonName: "subject",
          },
          {
            name: "max_keys",
            number: 4,
            label: 1,
            type: 5,
            jsonName: "maxKeys",
          },
          { name: "prefix", number: 5, label: 1, type: 9, jsonName: "prefix" },
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
      {
        field: [
          { name: "key", number: 1, label: 1, type: 9, jsonName: "key" },
          { name: "bucket", number: 2, label: 1, type: 9, jsonName: "bucket" },
          {
            name: "metadata",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".google.protobuf.Any",
            jsonName: "metadata",
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
        name: "OstorageMessage",
      },
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.ostorage.MoveRequestItem",
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
        name: "MoveRequestList",
      },
      {
        field: [
          { name: "bucket", number: 1, label: 1, type: 9, jsonName: "bucket" },
          {
            name: "sourceObject",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "sourceObject",
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
        name: "MoveRequestItem",
      },
      {
        field: [
          {
            name: "response",
            number: 1,
            label: 3,
            type: 11,
            typeName:
              ".io.restorecommerce.ostorage.MoveResponsePayloadWithStatus",
            jsonName: "response",
          },
          {
            name: "operation_status",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.OperationStatus",
            jsonName: "operationStatus",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "MoveResponseList",
      },
      {
        field: [
          {
            name: "payload",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.ostorage.MoveResponseItem",
            jsonName: "payload",
          },
          {
            name: "status",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.Status",
            jsonName: "status",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "MoveResponsePayloadWithStatus",
      },
      {
        field: [
          { name: "bucket", number: 1, label: 1, type: 9, jsonName: "bucket" },
          {
            name: "sourceObject",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "sourceObject",
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
        name: "MoveResponseItem",
      },
    ],
    enumType: [],
    service: [
      {
        method: [
          {
            name: "Get",
            inputType: ".io.restorecommerce.ostorage.GetRequest",
            outputType: ".io.restorecommerce.ostorage.ObjectResponse",
            serverStreaming: true,
          },
          {
            name: "Put",
            inputType: ".io.restorecommerce.ostorage.Object",
            outputType: ".io.restorecommerce.ostorage.PutResponse",
            clientStreaming: true,
          },
          {
            name: "Delete",
            inputType: ".io.restorecommerce.ostorage.DeleteRequest",
            outputType: ".io.restorecommerce.resourcebase.DeleteResponse",
          },
          {
            name: "List",
            inputType: ".io.restorecommerce.ostorage.ListRequest",
            outputType: ".io.restorecommerce.ostorage.ListResponse",
          },
          {
            name: "Copy",
            inputType: ".io.restorecommerce.ostorage.CopyRequestList",
            outputType: ".io.restorecommerce.ostorage.CopyResponseList",
          },
          {
            name: "Move",
            inputType: ".io.restorecommerce.ostorage.MoveRequestList",
            outputType: ".io.restorecommerce.ostorage.MoveResponseList",
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
          path: [4, 5, 2, 8],
          span: [61, 2, 31],
          leadingDetachedComments: [],
          trailingComments: " optional meta data ex: from and to dates\n",
        },
        {
          path: [4, 17, 2, 5],
          span: [138, 2, 19],
          leadingDetachedComments: [],
          trailingComments: " file size of uploaded object\n",
        },
        {
          path: [4, 18, 2, 1],
          span: [143, 2, 49],
          leadingDetachedComments: [],
          trailingComments:
            "/ Filter based on fieldName|operation, value|list\n",
        },
        {
          path: [4, 19],
          span: [151, 0, 156, 1],
          leadingDetachedComments: [],
          leadingComments:
            " OstorageMessage is used for emitting\n objectUploaded and objectDownloaded events\n",
        },
        {
          path: [4, 21, 2, 0],
          span: [164, 2, 20],
          leadingDetachedComments: [],
          trailingComments: " destination bucket name\n",
        },
        {
          path: [4, 21, 2, 1],
          span: [165, 2, 26],
          leadingDetachedComments: [],
          trailingComments: " source object with bucket name\n",
        },
        {
          path: [4, 21, 2, 2],
          span: [166, 2, 17],
          leadingDetachedComments: [],
          trailingComments: " destination key name\n",
        },
      ],
    },
    syntax: "proto3",
  }),
  references: {
    ".io.restorecommerce.ostorage.CopyRequestList": CopyRequestList,
    ".io.restorecommerce.ostorage.CopyResponseList": CopyResponseList,
    ".io.restorecommerce.ostorage.copyResponsePayloadWithStatus": copyResponsePayloadWithStatus,
    ".io.restorecommerce.ostorage.CopyRequestItem": CopyRequestItem,
    ".io.restorecommerce.ostorage.CopyResponseItem": CopyResponseItem,
    ".io.restorecommerce.ostorage.Options": Options,
    ".io.restorecommerce.ostorage.Object": Object,
    ".io.restorecommerce.ostorage.ObjectResponse": ObjectResponse,
    ".io.restorecommerce.ostorage.ObjectResponsePayloadWithStatus": ObjectResponsePayloadWithStatus,
    ".io.restorecommerce.ostorage.ObjectResponsePayload": ObjectResponsePayload,
    ".io.restorecommerce.ostorage.GetRequest": GetRequest,
    ".io.restorecommerce.ostorage.ListResponse": ListResponse,
    ".io.restorecommerce.ostorage.ObjectsDataWithPayloadStatus": ObjectsDataWithPayloadStatus,
    ".io.restorecommerce.ostorage.ObjectData": ObjectData,
    ".io.restorecommerce.ostorage.DeleteRequest": DeleteRequest,
    ".io.restorecommerce.ostorage.PutResponse": PutResponse,
    ".io.restorecommerce.ostorage.PutResponseWithPayloadStatus": PutResponseWithPayloadStatus,
    ".io.restorecommerce.ostorage.Response": Response,
    ".io.restorecommerce.ostorage.ListRequest": ListRequest,
    ".io.restorecommerce.ostorage.OstorageMessage": OstorageMessage,
    ".io.restorecommerce.ostorage.MoveRequestList": MoveRequestList,
    ".io.restorecommerce.ostorage.MoveRequestItem": MoveRequestItem,
    ".io.restorecommerce.ostorage.MoveResponseList": MoveResponseList,
    ".io.restorecommerce.ostorage.MoveResponsePayloadWithStatus": MoveResponsePayloadWithStatus,
    ".io.restorecommerce.ostorage.MoveResponseItem": MoveResponseItem,
  },
  dependencies: [
    protoMetadata1,
    protoMetadata2,
    protoMetadata3,
    protoMetadata4,
    protoMetadata5,
    protoMetadata6,
    protoMetadata7,
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
