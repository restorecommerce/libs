/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { Any, protoMetadata as protoMetadata2 } from "../../google/protobuf/any";
import { Attribute, protoMetadata as protoMetadata5 } from "./attribute";
import { protoMetadata as protoMetadata4, Subject } from "./auth";
import { FilterOp, protoMetadata as protoMetadata1 } from "./filter";
import { Meta, protoMetadata as protoMetadata3 } from "./meta";
import { protoMetadata as protoMetadata8 } from "./options";
import { DeleteResponse, protoMetadata as protoMetadata7 } from "./resource_base";
import { OperationStatus, protoMetadata as protoMetadata6, Status } from "./status";

export const protobufPackage = "io.restorecommerce.ostorage";

export interface CopyRequestList {
  items: CopyRequestItem[];
  subject?: Subject;
}

export interface CopyResponseList {
  responses: copyResponsePayloadWithStatus[];
  operation_status?: OperationStatus;
}

export interface copyResponsePayloadWithStatus {
  payload?: CopyResponseItem;
  status?: Status;
}

export interface CopyRequestItem {
  bucket: string;
  copySource: string;
  key: string;
  meta?: Meta | undefined;
  options?: Options | undefined;
}

export interface CopyResponseItem {
  bucket: string;
  copySource: string;
  key: string;
  meta?: Meta;
  options?: Options;
}

export interface Options {
  encoding?: string | undefined;
  content_type?: string | undefined;
  content_language?: string | undefined;
  content_disposition?: string | undefined;
  length?: number | undefined;
  version?: string | undefined;
  md5?: string | undefined;
  tags: Attribute[];
  /** optional meta data ex: from and to dates */
  data?: Any | undefined;
}

export interface Object {
  key: string;
  bucket: string;
  object?: Buffer | undefined;
  meta?: Meta | undefined;
  url?: string | undefined;
  options?: Options | undefined;
  subject?: Subject;
}

export interface ObjectResponse {
  response?: ObjectResponsePayloadWithStatus;
  operation_status?: OperationStatus;
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
  download?: boolean | undefined;
  subject?: Subject;
}

export interface ListResponse {
  responses: ObjectsDataWithPayloadStatus[];
  operation_status?: OperationStatus;
}

export interface ObjectsDataWithPayloadStatus {
  payload?: ObjectData;
  status?: Status;
}

export interface ObjectData {
  object_name: string;
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
  operation_status?: OperationStatus;
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
  filters?: FilterOp | undefined;
  subject?: Subject;
  max_keys?: number | undefined;
  prefix?: string | undefined;
}

/**
 * OstorageMessage is used for emitting
 * objectUploaded and objectDownloaded events
 */
export interface OstorageMessage {
  key?: string | undefined;
  bucket?: string | undefined;
  metadata?: Any | undefined;
  subject?: Subject | undefined;
}

export interface MoveRequestList {
  items: MoveRequestItem[];
  subject?: Subject;
}

export interface MoveRequestItem {
  /** destination bucket name */
  bucket?:
    | string
    | undefined;
  /** source object with bucket name */
  sourceObject?:
    | string
    | undefined;
  /** destination key name */
  key?: string | undefined;
  meta?: Meta | undefined;
  options?: Options | undefined;
}

export interface MoveResponseList {
  responses: MoveResponsePayloadWithStatus[];
  operation_status?: OperationStatus;
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

function createBaseCopyRequestList(): CopyRequestList {
  return { items: [], subject: undefined };
}

export const CopyRequestList = {
  encode(message: CopyRequestList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      CopyRequestItem.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CopyRequestList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCopyRequestList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(CopyRequestItem.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CopyRequestList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => CopyRequestItem.fromJSON(e)) : [],
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: CopyRequestList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? CopyRequestItem.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CopyRequestList>): CopyRequestList {
    return CopyRequestList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CopyRequestList>): CopyRequestList {
    const message = createBaseCopyRequestList();
    message.items = object.items?.map((e) => CopyRequestItem.fromPartial(e)) || [];
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseCopyResponseList(): CopyResponseList {
  return { responses: [], operation_status: undefined };
}

export const CopyResponseList = {
  encode(message: CopyResponseList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.responses) {
      copyResponsePayloadWithStatus.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(message.operation_status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CopyResponseList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCopyResponseList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.responses.push(copyResponsePayloadWithStatus.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.operation_status = OperationStatus.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CopyResponseList {
    return {
      responses: Array.isArray(object?.responses)
        ? object.responses.map((e: any) => copyResponsePayloadWithStatus.fromJSON(e))
        : [],
      operation_status: isSet(object.operation_status) ? OperationStatus.fromJSON(object.operation_status) : undefined,
    };
  },

  toJSON(message: CopyResponseList): unknown {
    const obj: any = {};
    if (message.responses) {
      obj.responses = message.responses.map((e) => e ? copyResponsePayloadWithStatus.toJSON(e) : undefined);
    } else {
      obj.responses = [];
    }
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status ? OperationStatus.toJSON(message.operation_status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CopyResponseList>): CopyResponseList {
    return CopyResponseList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CopyResponseList>): CopyResponseList {
    const message = createBaseCopyResponseList();
    message.responses = object.responses?.map((e) => copyResponsePayloadWithStatus.fromPartial(e)) || [];
    message.operation_status = (object.operation_status !== undefined && object.operation_status !== null)
      ? OperationStatus.fromPartial(object.operation_status)
      : undefined;
    return message;
  },
};

function createBasecopyResponsePayloadWithStatus(): copyResponsePayloadWithStatus {
  return { payload: undefined, status: undefined };
}

export const copyResponsePayloadWithStatus = {
  encode(message: copyResponsePayloadWithStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      CopyResponseItem.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): copyResponsePayloadWithStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasecopyResponsePayloadWithStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payload = CopyResponseItem.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.status = Status.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): copyResponsePayloadWithStatus {
    return {
      payload: isSet(object.payload) ? CopyResponseItem.fromJSON(object.payload) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: copyResponsePayloadWithStatus): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload ? CopyResponseItem.toJSON(message.payload) : undefined);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<copyResponsePayloadWithStatus>): copyResponsePayloadWithStatus {
    return copyResponsePayloadWithStatus.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<copyResponsePayloadWithStatus>): copyResponsePayloadWithStatus {
    const message = createBasecopyResponsePayloadWithStatus();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? CopyResponseItem.fromPartial(object.payload)
      : undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBaseCopyRequestItem(): CopyRequestItem {
  return { bucket: "", copySource: "", key: "", meta: undefined, options: undefined };
}

export const CopyRequestItem = {
  encode(message: CopyRequestItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): CopyRequestItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCopyRequestItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bucket = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.copySource = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.key = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.meta = Meta.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.options = Options.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CopyRequestItem {
    return {
      bucket: isSet(object.bucket) ? String(object.bucket) : "",
      copySource: isSet(object.copySource) ? String(object.copySource) : "",
      key: isSet(object.key) ? String(object.key) : "",
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      options: isSet(object.options) ? Options.fromJSON(object.options) : undefined,
    };
  },

  toJSON(message: CopyRequestItem): unknown {
    const obj: any = {};
    message.bucket !== undefined && (obj.bucket = message.bucket);
    message.copySource !== undefined && (obj.copySource = message.copySource);
    message.key !== undefined && (obj.key = message.key);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.options !== undefined && (obj.options = message.options ? Options.toJSON(message.options) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CopyRequestItem>): CopyRequestItem {
    return CopyRequestItem.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CopyRequestItem>): CopyRequestItem {
    const message = createBaseCopyRequestItem();
    message.bucket = object.bucket ?? "";
    message.copySource = object.copySource ?? "";
    message.key = object.key ?? "";
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    message.options = (object.options !== undefined && object.options !== null)
      ? Options.fromPartial(object.options)
      : undefined;
    return message;
  },
};

function createBaseCopyResponseItem(): CopyResponseItem {
  return { bucket: "", copySource: "", key: "", meta: undefined, options: undefined };
}

export const CopyResponseItem = {
  encode(message: CopyResponseItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): CopyResponseItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCopyResponseItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bucket = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.copySource = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.key = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.meta = Meta.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.options = Options.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CopyResponseItem {
    return {
      bucket: isSet(object.bucket) ? String(object.bucket) : "",
      copySource: isSet(object.copySource) ? String(object.copySource) : "",
      key: isSet(object.key) ? String(object.key) : "",
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      options: isSet(object.options) ? Options.fromJSON(object.options) : undefined,
    };
  },

  toJSON(message: CopyResponseItem): unknown {
    const obj: any = {};
    message.bucket !== undefined && (obj.bucket = message.bucket);
    message.copySource !== undefined && (obj.copySource = message.copySource);
    message.key !== undefined && (obj.key = message.key);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.options !== undefined && (obj.options = message.options ? Options.toJSON(message.options) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CopyResponseItem>): CopyResponseItem {
    return CopyResponseItem.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CopyResponseItem>): CopyResponseItem {
    const message = createBaseCopyResponseItem();
    message.bucket = object.bucket ?? "";
    message.copySource = object.copySource ?? "";
    message.key = object.key ?? "";
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    message.options = (object.options !== undefined && object.options !== null)
      ? Options.fromPartial(object.options)
      : undefined;
    return message;
  },
};

function createBaseOptions(): Options {
  return {
    encoding: undefined,
    content_type: undefined,
    content_language: undefined,
    content_disposition: undefined,
    length: undefined,
    version: undefined,
    md5: undefined,
    tags: [],
    data: undefined,
  };
}

export const Options = {
  encode(message: Options, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encoding !== undefined) {
      writer.uint32(10).string(message.encoding);
    }
    if (message.content_type !== undefined) {
      writer.uint32(18).string(message.content_type);
    }
    if (message.content_language !== undefined) {
      writer.uint32(26).string(message.content_language);
    }
    if (message.content_disposition !== undefined) {
      writer.uint32(34).string(message.content_disposition);
    }
    if (message.length !== undefined) {
      writer.uint32(40).int32(message.length);
    }
    if (message.version !== undefined) {
      writer.uint32(50).string(message.version);
    }
    if (message.md5 !== undefined) {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Options {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.encoding = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.content_type = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.content_language = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.content_disposition = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.length = reader.int32();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.version = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.md5 = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.tags.push(Attribute.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.data = Any.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Options {
    return {
      encoding: isSet(object.encoding) ? String(object.encoding) : undefined,
      content_type: isSet(object.content_type) ? String(object.content_type) : undefined,
      content_language: isSet(object.content_language) ? String(object.content_language) : undefined,
      content_disposition: isSet(object.content_disposition) ? String(object.content_disposition) : undefined,
      length: isSet(object.length) ? Number(object.length) : undefined,
      version: isSet(object.version) ? String(object.version) : undefined,
      md5: isSet(object.md5) ? String(object.md5) : undefined,
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => Attribute.fromJSON(e)) : [],
      data: isSet(object.data) ? Any.fromJSON(object.data) : undefined,
    };
  },

  toJSON(message: Options): unknown {
    const obj: any = {};
    message.encoding !== undefined && (obj.encoding = message.encoding);
    message.content_type !== undefined && (obj.content_type = message.content_type);
    message.content_language !== undefined && (obj.content_language = message.content_language);
    message.content_disposition !== undefined && (obj.content_disposition = message.content_disposition);
    message.length !== undefined && (obj.length = Math.round(message.length));
    message.version !== undefined && (obj.version = message.version);
    message.md5 !== undefined && (obj.md5 = message.md5);
    if (message.tags) {
      obj.tags = message.tags.map((e) => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.tags = [];
    }
    message.data !== undefined && (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    return obj;
  },

  create(base?: DeepPartial<Options>): Options {
    return Options.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Options>): Options {
    const message = createBaseOptions();
    message.encoding = object.encoding ?? undefined;
    message.content_type = object.content_type ?? undefined;
    message.content_language = object.content_language ?? undefined;
    message.content_disposition = object.content_disposition ?? undefined;
    message.length = object.length ?? undefined;
    message.version = object.version ?? undefined;
    message.md5 = object.md5 ?? undefined;
    message.tags = object.tags?.map((e) => Attribute.fromPartial(e)) || [];
    message.data = (object.data !== undefined && object.data !== null) ? Any.fromPartial(object.data) : undefined;
    return message;
  },
};

function createBaseObject(): Object {
  return {
    key: "",
    bucket: "",
    object: undefined,
    meta: undefined,
    url: undefined,
    options: undefined,
    subject: undefined,
  };
}

export const Object = {
  encode(message: Object, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.bucket !== "") {
      writer.uint32(18).string(message.bucket);
    }
    if (message.object !== undefined) {
      writer.uint32(26).bytes(message.object);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(34).fork()).ldelim();
    }
    if (message.url !== undefined) {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Object {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.bucket = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.object = reader.bytes() as Buffer;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.meta = Meta.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.url = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.options = Options.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Object {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      bucket: isSet(object.bucket) ? String(object.bucket) : "",
      object: isSet(object.object) ? Buffer.from(bytesFromBase64(object.object)) : undefined,
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      url: isSet(object.url) ? String(object.url) : undefined,
      options: isSet(object.options) ? Options.fromJSON(object.options) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: Object): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.bucket !== undefined && (obj.bucket = message.bucket);
    message.object !== undefined &&
      (obj.object = message.object !== undefined ? base64FromBytes(message.object) : undefined);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.url !== undefined && (obj.url = message.url);
    message.options !== undefined && (obj.options = message.options ? Options.toJSON(message.options) : undefined);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<Object>): Object {
    return Object.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Object>): Object {
    const message = createBaseObject();
    message.key = object.key ?? "";
    message.bucket = object.bucket ?? "";
    message.object = object.object ?? undefined;
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    message.url = object.url ?? undefined;
    message.options = (object.options !== undefined && object.options !== null)
      ? Options.fromPartial(object.options)
      : undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseObjectResponse(): ObjectResponse {
  return { response: undefined, operation_status: undefined };
}

export const ObjectResponse = {
  encode(message: ObjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== undefined) {
      ObjectResponsePayloadWithStatus.encode(message.response, writer.uint32(10).fork()).ldelim();
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(message.operation_status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.response = ObjectResponsePayloadWithStatus.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.operation_status = OperationStatus.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ObjectResponse {
    return {
      response: isSet(object.response) ? ObjectResponsePayloadWithStatus.fromJSON(object.response) : undefined,
      operation_status: isSet(object.operation_status) ? OperationStatus.fromJSON(object.operation_status) : undefined,
    };
  },

  toJSON(message: ObjectResponse): unknown {
    const obj: any = {};
    message.response !== undefined &&
      (obj.response = message.response ? ObjectResponsePayloadWithStatus.toJSON(message.response) : undefined);
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status ? OperationStatus.toJSON(message.operation_status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ObjectResponse>): ObjectResponse {
    return ObjectResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ObjectResponse>): ObjectResponse {
    const message = createBaseObjectResponse();
    message.response = (object.response !== undefined && object.response !== null)
      ? ObjectResponsePayloadWithStatus.fromPartial(object.response)
      : undefined;
    message.operation_status = (object.operation_status !== undefined && object.operation_status !== null)
      ? OperationStatus.fromPartial(object.operation_status)
      : undefined;
    return message;
  },
};

function createBaseObjectResponsePayloadWithStatus(): ObjectResponsePayloadWithStatus {
  return { payload: undefined, status: undefined };
}

export const ObjectResponsePayloadWithStatus = {
  encode(message: ObjectResponsePayloadWithStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      ObjectResponsePayload.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectResponsePayloadWithStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectResponsePayloadWithStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payload = ObjectResponsePayload.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.status = Status.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ObjectResponsePayloadWithStatus {
    return {
      payload: isSet(object.payload) ? ObjectResponsePayload.fromJSON(object.payload) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: ObjectResponsePayloadWithStatus): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload ? ObjectResponsePayload.toJSON(message.payload) : undefined);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ObjectResponsePayloadWithStatus>): ObjectResponsePayloadWithStatus {
    return ObjectResponsePayloadWithStatus.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ObjectResponsePayloadWithStatus>): ObjectResponsePayloadWithStatus {
    const message = createBaseObjectResponsePayloadWithStatus();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? ObjectResponsePayload.fromPartial(object.payload)
      : undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBaseObjectResponsePayload(): ObjectResponsePayload {
  return { key: "", bucket: "", object: Buffer.alloc(0), meta: undefined, url: "", options: undefined };
}

export const ObjectResponsePayload = {
  encode(message: ObjectResponsePayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectResponsePayload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectResponsePayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.bucket = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.object = reader.bytes() as Buffer;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.meta = Meta.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.url = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.options = Options.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ObjectResponsePayload {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      bucket: isSet(object.bucket) ? String(object.bucket) : "",
      object: isSet(object.object) ? Buffer.from(bytesFromBase64(object.object)) : Buffer.alloc(0),
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      url: isSet(object.url) ? String(object.url) : "",
      options: isSet(object.options) ? Options.fromJSON(object.options) : undefined,
    };
  },

  toJSON(message: ObjectResponsePayload): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.bucket !== undefined && (obj.bucket = message.bucket);
    message.object !== undefined &&
      (obj.object = base64FromBytes(message.object !== undefined ? message.object : Buffer.alloc(0)));
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.url !== undefined && (obj.url = message.url);
    message.options !== undefined && (obj.options = message.options ? Options.toJSON(message.options) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ObjectResponsePayload>): ObjectResponsePayload {
    return ObjectResponsePayload.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ObjectResponsePayload>): ObjectResponsePayload {
    const message = createBaseObjectResponsePayload();
    message.key = object.key ?? "";
    message.bucket = object.bucket ?? "";
    message.object = object.object ?? Buffer.alloc(0);
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    message.url = object.url ?? "";
    message.options = (object.options !== undefined && object.options !== null)
      ? Options.fromPartial(object.options)
      : undefined;
    return message;
  },
};

function createBaseGetRequest(): GetRequest {
  return { key: "", bucket: "", download: undefined, subject: undefined };
}

export const GetRequest = {
  encode(message: GetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.bucket !== "") {
      writer.uint32(18).string(message.bucket);
    }
    if (message.download !== undefined) {
      writer.uint32(24).bool(message.download);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.bucket = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.download = reader.bool();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetRequest {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      bucket: isSet(object.bucket) ? String(object.bucket) : "",
      download: isSet(object.download) ? Boolean(object.download) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: GetRequest): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.bucket !== undefined && (obj.bucket = message.bucket);
    message.download !== undefined && (obj.download = message.download);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<GetRequest>): GetRequest {
    return GetRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetRequest>): GetRequest {
    const message = createBaseGetRequest();
    message.key = object.key ?? "";
    message.bucket = object.bucket ?? "";
    message.download = object.download ?? undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseListResponse(): ListResponse {
  return { responses: [], operation_status: undefined };
}

export const ListResponse = {
  encode(message: ListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.responses) {
      ObjectsDataWithPayloadStatus.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(message.operation_status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.responses.push(ObjectsDataWithPayloadStatus.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.operation_status = OperationStatus.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListResponse {
    return {
      responses: Array.isArray(object?.responses)
        ? object.responses.map((e: any) => ObjectsDataWithPayloadStatus.fromJSON(e))
        : [],
      operation_status: isSet(object.operation_status) ? OperationStatus.fromJSON(object.operation_status) : undefined,
    };
  },

  toJSON(message: ListResponse): unknown {
    const obj: any = {};
    if (message.responses) {
      obj.responses = message.responses.map((e) => e ? ObjectsDataWithPayloadStatus.toJSON(e) : undefined);
    } else {
      obj.responses = [];
    }
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status ? OperationStatus.toJSON(message.operation_status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ListResponse>): ListResponse {
    return ListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ListResponse>): ListResponse {
    const message = createBaseListResponse();
    message.responses = object.responses?.map((e) => ObjectsDataWithPayloadStatus.fromPartial(e)) || [];
    message.operation_status = (object.operation_status !== undefined && object.operation_status !== null)
      ? OperationStatus.fromPartial(object.operation_status)
      : undefined;
    return message;
  },
};

function createBaseObjectsDataWithPayloadStatus(): ObjectsDataWithPayloadStatus {
  return { payload: undefined, status: undefined };
}

export const ObjectsDataWithPayloadStatus = {
  encode(message: ObjectsDataWithPayloadStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      ObjectData.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectsDataWithPayloadStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectsDataWithPayloadStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payload = ObjectData.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.status = Status.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ObjectsDataWithPayloadStatus {
    return {
      payload: isSet(object.payload) ? ObjectData.fromJSON(object.payload) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: ObjectsDataWithPayloadStatus): unknown {
    const obj: any = {};
    message.payload !== undefined && (obj.payload = message.payload ? ObjectData.toJSON(message.payload) : undefined);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ObjectsDataWithPayloadStatus>): ObjectsDataWithPayloadStatus {
    return ObjectsDataWithPayloadStatus.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ObjectsDataWithPayloadStatus>): ObjectsDataWithPayloadStatus {
    const message = createBaseObjectsDataWithPayloadStatus();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? ObjectData.fromPartial(object.payload)
      : undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBaseObjectData(): ObjectData {
  return { object_name: "", url: "", meta: undefined };
}

export const ObjectData = {
  encode(message: ObjectData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.object_name !== "") {
      writer.uint32(10).string(message.object_name);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.object_name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.url = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.meta = Meta.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ObjectData {
    return {
      object_name: isSet(object.object_name) ? String(object.object_name) : "",
      url: isSet(object.url) ? String(object.url) : "",
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
    };
  },

  toJSON(message: ObjectData): unknown {
    const obj: any = {};
    message.object_name !== undefined && (obj.object_name = message.object_name);
    message.url !== undefined && (obj.url = message.url);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ObjectData>): ObjectData {
    return ObjectData.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ObjectData>): ObjectData {
    const message = createBaseObjectData();
    message.object_name = object.object_name ?? "";
    message.url = object.url ?? "";
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    return message;
  },
};

function createBaseDeleteRequest(): DeleteRequest {
  return { key: "", bucket: "", subject: undefined };
}

export const DeleteRequest = {
  encode(message: DeleteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.bucket = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteRequest {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      bucket: isSet(object.bucket) ? String(object.bucket) : "",
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: DeleteRequest): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.bucket !== undefined && (obj.bucket = message.bucket);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<DeleteRequest>): DeleteRequest {
    return DeleteRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DeleteRequest>): DeleteRequest {
    const message = createBaseDeleteRequest();
    message.key = object.key ?? "";
    message.bucket = object.bucket ?? "";
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBasePutResponse(): PutResponse {
  return { response: undefined, operation_status: undefined };
}

export const PutResponse = {
  encode(message: PutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== undefined) {
      PutResponseWithPayloadStatus.encode(message.response, writer.uint32(10).fork()).ldelim();
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(message.operation_status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PutResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.response = PutResponseWithPayloadStatus.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.operation_status = OperationStatus.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PutResponse {
    return {
      response: isSet(object.response) ? PutResponseWithPayloadStatus.fromJSON(object.response) : undefined,
      operation_status: isSet(object.operation_status) ? OperationStatus.fromJSON(object.operation_status) : undefined,
    };
  },

  toJSON(message: PutResponse): unknown {
    const obj: any = {};
    message.response !== undefined &&
      (obj.response = message.response ? PutResponseWithPayloadStatus.toJSON(message.response) : undefined);
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status ? OperationStatus.toJSON(message.operation_status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<PutResponse>): PutResponse {
    return PutResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PutResponse>): PutResponse {
    const message = createBasePutResponse();
    message.response = (object.response !== undefined && object.response !== null)
      ? PutResponseWithPayloadStatus.fromPartial(object.response)
      : undefined;
    message.operation_status = (object.operation_status !== undefined && object.operation_status !== null)
      ? OperationStatus.fromPartial(object.operation_status)
      : undefined;
    return message;
  },
};

function createBasePutResponseWithPayloadStatus(): PutResponseWithPayloadStatus {
  return { payload: undefined, status: undefined };
}

export const PutResponseWithPayloadStatus = {
  encode(message: PutResponseWithPayloadStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      Response.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PutResponseWithPayloadStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePutResponseWithPayloadStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payload = Response.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.status = Status.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PutResponseWithPayloadStatus {
    return {
      payload: isSet(object.payload) ? Response.fromJSON(object.payload) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: PutResponseWithPayloadStatus): unknown {
    const obj: any = {};
    message.payload !== undefined && (obj.payload = message.payload ? Response.toJSON(message.payload) : undefined);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<PutResponseWithPayloadStatus>): PutResponseWithPayloadStatus {
    return PutResponseWithPayloadStatus.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PutResponseWithPayloadStatus>): PutResponseWithPayloadStatus {
    const message = createBasePutResponseWithPayloadStatus();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? Response.fromPartial(object.payload)
      : undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBaseResponse(): Response {
  return { url: "", bucket: "", key: "", meta: undefined, tags: [], length: 0 };
}

export const Response = {
  encode(message: Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.url = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.bucket = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.key = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.meta = Meta.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.tags.push(Attribute.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.length = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Response {
    return {
      url: isSet(object.url) ? String(object.url) : "",
      bucket: isSet(object.bucket) ? String(object.bucket) : "",
      key: isSet(object.key) ? String(object.key) : "",
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => Attribute.fromJSON(e)) : [],
      length: isSet(object.length) ? Number(object.length) : 0,
    };
  },

  toJSON(message: Response): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    message.bucket !== undefined && (obj.bucket = message.bucket);
    message.key !== undefined && (obj.key = message.key);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    if (message.tags) {
      obj.tags = message.tags.map((e) => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.tags = [];
    }
    message.length !== undefined && (obj.length = Math.round(message.length));
    return obj;
  },

  create(base?: DeepPartial<Response>): Response {
    return Response.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Response>): Response {
    const message = createBaseResponse();
    message.url = object.url ?? "";
    message.bucket = object.bucket ?? "";
    message.key = object.key ?? "";
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    message.tags = object.tags?.map((e) => Attribute.fromPartial(e)) || [];
    message.length = object.length ?? 0;
    return message;
  },
};

function createBaseListRequest(): ListRequest {
  return { bucket: "", filters: undefined, subject: undefined, max_keys: undefined, prefix: undefined };
}

export const ListRequest = {
  encode(message: ListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bucket !== "") {
      writer.uint32(10).string(message.bucket);
    }
    if (message.filters !== undefined) {
      FilterOp.encode(message.filters, writer.uint32(18).fork()).ldelim();
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    if (message.max_keys !== undefined) {
      writer.uint32(32).int32(message.max_keys);
    }
    if (message.prefix !== undefined) {
      writer.uint32(42).string(message.prefix);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bucket = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.filters = FilterOp.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.max_keys = reader.int32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.prefix = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListRequest {
    return {
      bucket: isSet(object.bucket) ? String(object.bucket) : "",
      filters: isSet(object.filters) ? FilterOp.fromJSON(object.filters) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
      max_keys: isSet(object.max_keys) ? Number(object.max_keys) : undefined,
      prefix: isSet(object.prefix) ? String(object.prefix) : undefined,
    };
  },

  toJSON(message: ListRequest): unknown {
    const obj: any = {};
    message.bucket !== undefined && (obj.bucket = message.bucket);
    message.filters !== undefined && (obj.filters = message.filters ? FilterOp.toJSON(message.filters) : undefined);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    message.max_keys !== undefined && (obj.max_keys = Math.round(message.max_keys));
    message.prefix !== undefined && (obj.prefix = message.prefix);
    return obj;
  },

  create(base?: DeepPartial<ListRequest>): ListRequest {
    return ListRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ListRequest>): ListRequest {
    const message = createBaseListRequest();
    message.bucket = object.bucket ?? "";
    message.filters = (object.filters !== undefined && object.filters !== null)
      ? FilterOp.fromPartial(object.filters)
      : undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    message.max_keys = object.max_keys ?? undefined;
    message.prefix = object.prefix ?? undefined;
    return message;
  },
};

function createBaseOstorageMessage(): OstorageMessage {
  return { key: undefined, bucket: undefined, metadata: undefined, subject: undefined };
}

export const OstorageMessage = {
  encode(message: OstorageMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== undefined) {
      writer.uint32(10).string(message.key);
    }
    if (message.bucket !== undefined) {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): OstorageMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOstorageMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.bucket = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.metadata = Any.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OstorageMessage {
    return {
      key: isSet(object.key) ? String(object.key) : undefined,
      bucket: isSet(object.bucket) ? String(object.bucket) : undefined,
      metadata: isSet(object.metadata) ? Any.fromJSON(object.metadata) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: OstorageMessage): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.bucket !== undefined && (obj.bucket = message.bucket);
    message.metadata !== undefined && (obj.metadata = message.metadata ? Any.toJSON(message.metadata) : undefined);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<OstorageMessage>): OstorageMessage {
    return OstorageMessage.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<OstorageMessage>): OstorageMessage {
    const message = createBaseOstorageMessage();
    message.key = object.key ?? undefined;
    message.bucket = object.bucket ?? undefined;
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? Any.fromPartial(object.metadata)
      : undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseMoveRequestList(): MoveRequestList {
  return { items: [], subject: undefined };
}

export const MoveRequestList = {
  encode(message: MoveRequestList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      MoveRequestItem.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MoveRequestList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMoveRequestList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(MoveRequestItem.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MoveRequestList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => MoveRequestItem.fromJSON(e)) : [],
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: MoveRequestList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? MoveRequestItem.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MoveRequestList>): MoveRequestList {
    return MoveRequestList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MoveRequestList>): MoveRequestList {
    const message = createBaseMoveRequestList();
    message.items = object.items?.map((e) => MoveRequestItem.fromPartial(e)) || [];
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseMoveRequestItem(): MoveRequestItem {
  return { bucket: undefined, sourceObject: undefined, key: undefined, meta: undefined, options: undefined };
}

export const MoveRequestItem = {
  encode(message: MoveRequestItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bucket !== undefined) {
      writer.uint32(10).string(message.bucket);
    }
    if (message.sourceObject !== undefined) {
      writer.uint32(18).string(message.sourceObject);
    }
    if (message.key !== undefined) {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MoveRequestItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMoveRequestItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bucket = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sourceObject = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.key = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.meta = Meta.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.options = Options.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MoveRequestItem {
    return {
      bucket: isSet(object.bucket) ? String(object.bucket) : undefined,
      sourceObject: isSet(object.sourceObject) ? String(object.sourceObject) : undefined,
      key: isSet(object.key) ? String(object.key) : undefined,
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      options: isSet(object.options) ? Options.fromJSON(object.options) : undefined,
    };
  },

  toJSON(message: MoveRequestItem): unknown {
    const obj: any = {};
    message.bucket !== undefined && (obj.bucket = message.bucket);
    message.sourceObject !== undefined && (obj.sourceObject = message.sourceObject);
    message.key !== undefined && (obj.key = message.key);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.options !== undefined && (obj.options = message.options ? Options.toJSON(message.options) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MoveRequestItem>): MoveRequestItem {
    return MoveRequestItem.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MoveRequestItem>): MoveRequestItem {
    const message = createBaseMoveRequestItem();
    message.bucket = object.bucket ?? undefined;
    message.sourceObject = object.sourceObject ?? undefined;
    message.key = object.key ?? undefined;
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    message.options = (object.options !== undefined && object.options !== null)
      ? Options.fromPartial(object.options)
      : undefined;
    return message;
  },
};

function createBaseMoveResponseList(): MoveResponseList {
  return { responses: [], operation_status: undefined };
}

export const MoveResponseList = {
  encode(message: MoveResponseList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.responses) {
      MoveResponsePayloadWithStatus.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(message.operation_status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MoveResponseList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMoveResponseList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.responses.push(MoveResponsePayloadWithStatus.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.operation_status = OperationStatus.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MoveResponseList {
    return {
      responses: Array.isArray(object?.responses)
        ? object.responses.map((e: any) => MoveResponsePayloadWithStatus.fromJSON(e))
        : [],
      operation_status: isSet(object.operation_status) ? OperationStatus.fromJSON(object.operation_status) : undefined,
    };
  },

  toJSON(message: MoveResponseList): unknown {
    const obj: any = {};
    if (message.responses) {
      obj.responses = message.responses.map((e) => e ? MoveResponsePayloadWithStatus.toJSON(e) : undefined);
    } else {
      obj.responses = [];
    }
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status ? OperationStatus.toJSON(message.operation_status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MoveResponseList>): MoveResponseList {
    return MoveResponseList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MoveResponseList>): MoveResponseList {
    const message = createBaseMoveResponseList();
    message.responses = object.responses?.map((e) => MoveResponsePayloadWithStatus.fromPartial(e)) || [];
    message.operation_status = (object.operation_status !== undefined && object.operation_status !== null)
      ? OperationStatus.fromPartial(object.operation_status)
      : undefined;
    return message;
  },
};

function createBaseMoveResponsePayloadWithStatus(): MoveResponsePayloadWithStatus {
  return { payload: undefined, status: undefined };
}

export const MoveResponsePayloadWithStatus = {
  encode(message: MoveResponsePayloadWithStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      MoveResponseItem.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MoveResponsePayloadWithStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMoveResponsePayloadWithStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payload = MoveResponseItem.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.status = Status.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MoveResponsePayloadWithStatus {
    return {
      payload: isSet(object.payload) ? MoveResponseItem.fromJSON(object.payload) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: MoveResponsePayloadWithStatus): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload ? MoveResponseItem.toJSON(message.payload) : undefined);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MoveResponsePayloadWithStatus>): MoveResponsePayloadWithStatus {
    return MoveResponsePayloadWithStatus.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MoveResponsePayloadWithStatus>): MoveResponsePayloadWithStatus {
    const message = createBaseMoveResponsePayloadWithStatus();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? MoveResponseItem.fromPartial(object.payload)
      : undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBaseMoveResponseItem(): MoveResponseItem {
  return { bucket: "", sourceObject: "", key: "", meta: undefined, options: undefined };
}

export const MoveResponseItem = {
  encode(message: MoveResponseItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MoveResponseItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMoveResponseItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bucket = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sourceObject = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.key = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.meta = Meta.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.options = Options.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MoveResponseItem {
    return {
      bucket: isSet(object.bucket) ? String(object.bucket) : "",
      sourceObject: isSet(object.sourceObject) ? String(object.sourceObject) : "",
      key: isSet(object.key) ? String(object.key) : "",
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      options: isSet(object.options) ? Options.fromJSON(object.options) : undefined,
    };
  },

  toJSON(message: MoveResponseItem): unknown {
    const obj: any = {};
    message.bucket !== undefined && (obj.bucket = message.bucket);
    message.sourceObject !== undefined && (obj.sourceObject = message.sourceObject);
    message.key !== undefined && (obj.key = message.key);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.options !== undefined && (obj.options = message.options ? Options.toJSON(message.options) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MoveResponseItem>): MoveResponseItem {
    return MoveResponseItem.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MoveResponseItem>): MoveResponseItem {
    const message = createBaseMoveResponseItem();
    message.bucket = object.bucket ?? "";
    message.sourceObject = object.sourceObject ?? "";
    message.key = object.key ?? "";
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    message.options = (object.options !== undefined && object.options !== null)
      ? Options.fromPartial(object.options)
      : undefined;
    return message;
  },
};

export type ObjectServiceDefinition = typeof ObjectServiceDefinition;
export const ObjectServiceDefinition = {
  name: "ObjectService",
  fullName: "io.restorecommerce.ostorage.ObjectService",
  methods: {
    get: {
      name: "Get",
      requestType: GetRequest,
      requestStream: false,
      responseType: ObjectResponse,
      responseStream: true,
      options: { _unknownFields: { 248008: [Buffer.from([1])] } },
    },
    put: {
      name: "Put",
      requestType: Object,
      requestStream: true,
      responseType: PutResponse,
      responseStream: false,
      options: {},
    },
    delete: {
      name: "Delete",
      requestType: DeleteRequest,
      requestStream: false,
      responseType: DeleteResponse,
      responseStream: false,
      options: {},
    },
    list: {
      name: "List",
      requestType: ListRequest,
      requestStream: false,
      responseType: ListResponse,
      responseStream: false,
      options: { _unknownFields: { 248008: [Buffer.from([1])] } },
    },
    copy: {
      name: "Copy",
      requestType: CopyRequestList,
      requestStream: false,
      responseType: CopyResponseList,
      responseStream: false,
      options: {},
    },
    move: {
      name: "Move",
      requestType: MoveRequestList,
      requestStream: false,
      responseType: MoveResponseList,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface ObjectServiceImplementation<CallContextExt = {}> {
  get(
    request: GetRequest,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<ObjectResponse>>;
  put(request: AsyncIterable<Object>, context: CallContext & CallContextExt): Promise<DeepPartial<PutResponse>>;
  delete(request: DeleteRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteResponse>>;
  list(request: ListRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListResponse>>;
  copy(request: CopyRequestList, context: CallContext & CallContextExt): Promise<DeepPartial<CopyResponseList>>;
  move(request: MoveRequestList, context: CallContext & CallContextExt): Promise<DeepPartial<MoveResponseList>>;
}

export interface ObjectServiceClient<CallOptionsExt = {}> {
  get(request: DeepPartial<GetRequest>, options?: CallOptions & CallOptionsExt): AsyncIterable<ObjectResponse>;
  put(request: AsyncIterable<DeepPartial<Object>>, options?: CallOptions & CallOptionsExt): Promise<PutResponse>;
  delete(request: DeepPartial<DeleteRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteResponse>;
  list(request: DeepPartial<ListRequest>, options?: CallOptions & CallOptionsExt): Promise<ListResponse>;
  copy(request: DeepPartial<CopyRequestList>, options?: CallOptions & CallOptionsExt): Promise<CopyResponseList>;
  move(request: DeepPartial<MoveRequestList>, options?: CallOptions & CallOptionsExt): Promise<MoveResponseList>;
}

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
    "name": "io/restorecommerce/ostorage.proto",
    "package": "io.restorecommerce.ostorage",
    "dependency": [
      "io/restorecommerce/filter.proto",
      "google/protobuf/any.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/attribute.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/resource_base.proto",
      "io/restorecommerce/options.proto",
    ],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "CopyRequestList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.ostorage.CopyRequestItem",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "items",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "subject",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.auth.Subject",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "subject",
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
    }, {
      "name": "CopyResponseList",
      "field": [{
        "name": "responses",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.ostorage.copyResponsePayloadWithStatus",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "responses",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "operation_status",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.status.OperationStatus",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "operationStatus",
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
    }, {
      "name": "copyResponsePayloadWithStatus",
      "field": [{
        "name": "payload",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.ostorage.CopyResponseItem",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "payload",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "status",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.status.Status",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "status",
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
    }, {
      "name": "CopyRequestItem",
      "field": [{
        "name": "bucket",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "bucket",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "copySource",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "copySource",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "key",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "key",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "meta",
        "number": 4,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.meta.Meta",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "meta",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "options",
        "number": 5,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.ostorage.Options",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "options",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_meta", "options": undefined }, { "name": "_options", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "CopyResponseItem",
      "field": [{
        "name": "bucket",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "bucket",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "copySource",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "copySource",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "key",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "key",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "meta",
        "number": 4,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.meta.Meta",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "meta",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "options",
        "number": 5,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.ostorage.Options",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "options",
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
    }, {
      "name": "Options",
      "field": [{
        "name": "encoding",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "encoding",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "content_type",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "contentType",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "content_language",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "contentLanguage",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "content_disposition",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "contentDisposition",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "length",
        "number": 5,
        "label": 1,
        "type": 5,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "length",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "version",
        "number": 6,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 5,
        "jsonName": "version",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "md5",
        "number": 7,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 6,
        "jsonName": "md5",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "tags",
        "number": 8,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.attribute.Attribute",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "tags",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "data",
        "number": 9,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.Any",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 7,
        "jsonName": "data",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "_encoding", "options": undefined },
        { "name": "_content_type", "options": undefined },
        { "name": "_content_language", "options": undefined },
        { "name": "_content_disposition", "options": undefined },
        { "name": "_length", "options": undefined },
        { "name": "_version", "options": undefined },
        { "name": "_md5", "options": undefined },
        { "name": "_data", "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "Object",
      "field": [{
        "name": "key",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "key",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "bucket",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "bucket",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "object",
        "number": 3,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "object",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "meta",
        "number": 4,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.meta.Meta",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "meta",
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
        "oneofIndex": 2,
        "jsonName": "url",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "options",
        "number": 6,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.ostorage.Options",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "options",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "subject",
        "number": 7,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.auth.Subject",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "subject",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_object", "options": undefined }, { "name": "_meta", "options": undefined }, {
        "name": "_url",
        "options": undefined,
      }, { "name": "_options", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ObjectResponse",
      "field": [{
        "name": "response",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.ostorage.ObjectResponsePayloadWithStatus",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "response",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "operation_status",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.status.OperationStatus",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "operationStatus",
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
    }, {
      "name": "ObjectResponsePayloadWithStatus",
      "field": [{
        "name": "payload",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.ostorage.ObjectResponsePayload",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "payload",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "status",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.status.Status",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "status",
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
    }, {
      "name": "ObjectResponsePayload",
      "field": [{
        "name": "key",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "key",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "bucket",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "bucket",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "object",
        "number": 3,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "object",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "meta",
        "number": 4,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.meta.Meta",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "meta",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "url",
        "number": 5,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "url",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "options",
        "number": 6,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.ostorage.Options",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "options",
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
    }, {
      "name": "GetRequest",
      "field": [{
        "name": "key",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "key",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "bucket",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "bucket",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "download",
        "number": 3,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "download",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "subject",
        "number": 4,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.auth.Subject",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "subject",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_download", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ListResponse",
      "field": [{
        "name": "responses",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.ostorage.ObjectsDataWithPayloadStatus",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "responses",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "operation_status",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.status.OperationStatus",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "operationStatus",
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
    }, {
      "name": "ObjectsDataWithPayloadStatus",
      "field": [{
        "name": "payload",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.ostorage.ObjectData",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "payload",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "status",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.status.Status",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "status",
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
    }, {
      "name": "ObjectData",
      "field": [{
        "name": "object_name",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "objectName",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "url",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "url",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "meta",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.meta.Meta",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "meta",
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
    }, {
      "name": "DeleteRequest",
      "field": [{
        "name": "key",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "key",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "bucket",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "bucket",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "subject",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.auth.Subject",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "subject",
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
    }, {
      "name": "PutResponse",
      "field": [{
        "name": "response",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.ostorage.PutResponseWithPayloadStatus",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "response",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "operation_status",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.status.OperationStatus",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "operationStatus",
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
    }, {
      "name": "PutResponseWithPayloadStatus",
      "field": [{
        "name": "payload",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.ostorage.Response",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "payload",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "status",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.status.Status",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "status",
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
    }, {
      "name": "Response",
      "field": [{
        "name": "url",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "url",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "bucket",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "bucket",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "key",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "key",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "meta",
        "number": 4,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.meta.Meta",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "meta",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "tags",
        "number": 5,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.attribute.Attribute",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "tags",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "length",
        "number": 6,
        "label": 1,
        "type": 5,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "length",
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
    }, {
      "name": "ListRequest",
      "field": [{
        "name": "bucket",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "bucket",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "filters",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.filter.FilterOp",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "filters",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "subject",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.auth.Subject",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "subject",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "max_keys",
        "number": 4,
        "label": 1,
        "type": 5,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "maxKeys",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "prefix",
        "number": 5,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "prefix",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_filters", "options": undefined }, { "name": "_max_keys", "options": undefined }, {
        "name": "_prefix",
        "options": undefined,
      }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "OstorageMessage",
      "field": [{
        "name": "key",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "key",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "bucket",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "bucket",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "metadata",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.Any",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "metadata",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "subject",
        "number": 4,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.auth.Subject",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "subject",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_key", "options": undefined }, { "name": "_bucket", "options": undefined }, {
        "name": "_metadata",
        "options": undefined,
      }, { "name": "_subject", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "MoveRequestList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.ostorage.MoveRequestItem",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "items",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "subject",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.auth.Subject",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "subject",
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
    }, {
      "name": "MoveRequestItem",
      "field": [{
        "name": "bucket",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "bucket",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "sourceObject",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "sourceObject",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "key",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "key",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "meta",
        "number": 4,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.meta.Meta",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "meta",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "options",
        "number": 5,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.ostorage.Options",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "options",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "_bucket", "options": undefined },
        { "name": "_sourceObject", "options": undefined },
        { "name": "_key", "options": undefined },
        { "name": "_meta", "options": undefined },
        { "name": "_options", "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "MoveResponseList",
      "field": [{
        "name": "responses",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.ostorage.MoveResponsePayloadWithStatus",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "responses",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "operation_status",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.status.OperationStatus",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "operationStatus",
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
    }, {
      "name": "MoveResponsePayloadWithStatus",
      "field": [{
        "name": "payload",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.ostorage.MoveResponseItem",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "payload",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "status",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.status.Status",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "status",
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
    }, {
      "name": "MoveResponseItem",
      "field": [{
        "name": "bucket",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "bucket",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "sourceObject",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "sourceObject",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "key",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "key",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "meta",
        "number": 4,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.meta.Meta",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "meta",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "options",
        "number": 5,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.ostorage.Options",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "options",
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
    "service": [{
      "name": "ObjectService",
      "method": [{
        "name": "Get",
        "inputType": ".io.restorecommerce.ostorage.GetRequest",
        "outputType": ".io.restorecommerce.ostorage.ObjectResponse",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": false,
        "serverStreaming": true,
      }, {
        "name": "Put",
        "inputType": ".io.restorecommerce.ostorage.Object",
        "outputType": ".io.restorecommerce.ostorage.PutResponse",
        "options": undefined,
        "clientStreaming": true,
        "serverStreaming": false,
      }, {
        "name": "Delete",
        "inputType": ".io.restorecommerce.ostorage.DeleteRequest",
        "outputType": ".io.restorecommerce.resourcebase.DeleteResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "List",
        "inputType": ".io.restorecommerce.ostorage.ListRequest",
        "outputType": ".io.restorecommerce.ostorage.ListResponse",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Copy",
        "inputType": ".io.restorecommerce.ostorage.CopyRequestList",
        "outputType": ".io.restorecommerce.ostorage.CopyResponseList",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Move",
        "inputType": ".io.restorecommerce.ostorage.MoveRequestList",
        "outputType": ".io.restorecommerce.ostorage.MoveResponseList",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }],
      "options": undefined,
    }],
    "extension": [],
    "options": undefined,
    "sourceCodeInfo": {
      "location": [{
        "path": [4, 5, 2, 8],
        "span": [66, 2, 40],
        "leadingComments": "",
        "trailingComments": " optional meta data ex: from and to dates\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 17, 2, 5],
        "span": [143, 2, 19],
        "leadingComments": "",
        "trailingComments": " file size of uploaded object\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 18, 2, 1],
        "span": [148, 2, 58],
        "leadingComments": "",
        "trailingComments": "/ Filter based on fieldName|operation, value|list\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 19],
        "span": [156, 0, 161, 1],
        "leadingComments": " OstorageMessage is used for emitting\n objectUploaded and objectDownloaded events\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 21, 2, 0],
        "span": [169, 2, 29],
        "leadingComments": "",
        "trailingComments": " destination bucket name\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 21, 2, 1],
        "span": [170, 2, 35],
        "leadingComments": "",
        "trailingComments": " source object with bucket name\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 21, 2, 2],
        "span": [171, 2, 26],
        "leadingComments": "",
        "trailingComments": " destination key name\n",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
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
    protoMetadata8,
  ],
  options: {
    services: {
      "ObjectService": { options: undefined, methods: { "Get": { "is_query": true }, "List": { "is_query": true } } },
    },
  },
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

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export type ServerStreamingMethodResult<Response> = { [Symbol.asyncIterator](): AsyncIterator<Response, void> };
