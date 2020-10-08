/* eslint-disable */
import { Subject, ApiKey } from '../../io/restorecommerce/auth';
import { Meta } from '../../io/restorecommerce/meta';
import { Attribute } from '../../io/restorecommerce/attribute';
import { Struct } from '../../google/protobuf/struct';
import { Observable } from 'rxjs';
import { Empty } from '../../google/protobuf/empty';
import { Writer, Reader } from 'protobufjs/minimal';


export interface CopyRequest {
  items: CopyRequestItem[];
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
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
}

export interface Object {
  key: string;
  bucket: string;
  object: Buffer;
  meta?: Meta;
  url: string;
  options?: Options;
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
}

export interface GetRequest {
  key: string;
  bucket: string;
  download: boolean;
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
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
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
}

export interface Response {
  url: string;
  bucket: string;
  key: string;
  meta?: Meta;
  tags: Attribute[];
  /**
   *  file size of uploaded object
   */
  length: number;
}

export interface ListRequest {
  bucket: string;
  /**
   * / Filter based on fieldName|operation, value|list
   */
  filter?: Struct;
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
}

const baseCopyRequest: object = {
};

const baseCopyResponse: object = {
};

const baseCopyRequestItem: object = {
  bucket: "",
  copySource: "",
  key: "",
};

const baseCopyResponseItem: object = {
  bucket: "",
  copySource: "",
  key: "",
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

const baseObject: object = {
  key: "",
  bucket: "",
  url: "",
};

const baseGetRequest: object = {
  key: "",
  bucket: "",
  download: false,
};

const baseObjectsData: object = {
};

const baseObjectData: object = {
  objectName: "",
  url: "",
};

const baseDeleteRequest: object = {
  key: "",
  bucket: "",
};

const baseResponse: object = {
  url: "",
  bucket: "",
  key: "",
  length: 0,
};

const baseListRequest: object = {
  bucket: "",
};

export interface Service {

  Get(request: GetRequest): Observable<Object>;

  Put(request: Observable<Object>): Promise<Response>;

  Delete(request: DeleteRequest): Promise<Empty>;

  List(request: ListRequest): Promise<ObjectsData>;

  Copy(request: CopyRequest): Promise<CopyResponse>;

}

export const CopyRequest = {
  encode(message: CopyRequest, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      CopyRequestItem.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(42).fork()).ldelim();
    }
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CopyRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCopyRequest } as CopyRequest;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(CopyRequestItem.decode(reader, reader.uint32()));
          break;
        case 5:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        case 6:
          message.apiKey = ApiKey.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const CopyResponse = {
  encode(message: CopyResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.response) {
      CopyResponseItem.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CopyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCopyResponse } as CopyResponse;
    message.response = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response.push(CopyResponseItem.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const CopyRequestItem = {
  encode(message: CopyRequestItem, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.bucket);
    writer.uint32(18).string(message.copySource);
    writer.uint32(26).string(message.key);
    if (message.meta !== undefined && message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(34).fork()).ldelim();
    }
    if (message.options !== undefined && message.options !== undefined) {
      Options.encode(message.options, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CopyRequestItem {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCopyRequestItem } as CopyRequestItem;
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
};

export const CopyResponseItem = {
  encode(message: CopyResponseItem, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.bucket);
    writer.uint32(18).string(message.copySource);
    writer.uint32(26).string(message.key);
    if (message.meta !== undefined && message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(34).fork()).ldelim();
    }
    if (message.options !== undefined && message.options !== undefined) {
      Options.encode(message.options, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CopyResponseItem {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCopyResponseItem } as CopyResponseItem;
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
};

export const Options = {
  encode(message: Options, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.encoding);
    writer.uint32(18).string(message.contentType);
    writer.uint32(26).string(message.contentLanguage);
    writer.uint32(34).string(message.contentDisposition);
    writer.uint32(40).int32(message.length);
    writer.uint32(50).string(message.version);
    writer.uint32(58).string(message.md5);
    for (const v of message.tags) {
      Attribute.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Options {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOptions } as Options;
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const Object = {
  encode(message: Object, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.key);
    writer.uint32(18).string(message.bucket);
    writer.uint32(26).bytes(message.object);
    if (message.meta !== undefined && message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(34).fork()).ldelim();
    }
    writer.uint32(42).string(message.url);
    if (message.options !== undefined && message.options !== undefined) {
      Options.encode(message.options, writer.uint32(50).fork()).ldelim();
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(58).fork()).ldelim();
    }
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Object {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseObject } as Object;
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
        case 8:
          message.apiKey = ApiKey.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const GetRequest = {
  encode(message: GetRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.key);
    writer.uint32(18).string(message.bucket);
    writer.uint32(24).bool(message.download);
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(34).fork()).ldelim();
    }
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): GetRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetRequest } as GetRequest;
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
        case 5:
          message.apiKey = ApiKey.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const ObjectsData = {
  encode(message: ObjectsData, writer: Writer = Writer.create()): Writer {
    for (const v of message.objectData) {
      ObjectData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ObjectsData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseObjectsData } as ObjectsData;
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
};

export const ObjectData = {
  encode(message: ObjectData, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.objectName);
    writer.uint32(18).string(message.url);
    if (message.meta !== undefined && message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ObjectData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseObjectData } as ObjectData;
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
};

export const DeleteRequest = {
  encode(message: DeleteRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.key);
    writer.uint32(18).string(message.bucket);
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(42).fork()).ldelim();
    }
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): DeleteRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteRequest } as DeleteRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.bucket = reader.string();
          break;
        case 5:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        case 6:
          message.apiKey = ApiKey.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const Response = {
  encode(message: Response, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.url);
    writer.uint32(18).string(message.bucket);
    writer.uint32(26).string(message.key);
    if (message.meta !== undefined && message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.tags) {
      Attribute.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    writer.uint32(48).int32(message.length);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Response {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResponse } as Response;
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
};

export const ListRequest = {
  encode(message: ListRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.bucket);
    if (message.filter !== undefined && message.filter !== undefined) {
      Struct.encode(message.filter, writer.uint32(18).fork()).ldelim();
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(42).fork()).ldelim();
    }
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ListRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListRequest } as ListRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bucket = reader.string();
          break;
        case 2:
          message.filter = Struct.decode(reader, reader.uint32());
          break;
        case 5:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        case 6:
          message.apiKey = ApiKey.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};
