/* eslint-disable */
import { Struct } from '../../google/protobuf/struct';
import { Any } from '../../google/protobuf/any';
import { Subject, ApiKey } from '../../io/restorecommerce/auth';
import { Meta } from '../../io/restorecommerce/meta';
import { Empty } from '../../google/protobuf/empty';
import { Writer, Reader } from 'protobufjs/minimal';


export interface FieldFilter {
  name: string;
  include: boolean;
}

export interface Sort {
  field: string;
  order: Sort_SortOrder;
}

export interface ReadRequest {
  offset: number;
  limit: number;
  sort: Sort[];
  /**
   * / Filter based on fieldName|operation, value|list
   */
  filter?: Struct;
  /**
   * / Fields selector
   */
  field: FieldFilter[];
  search: string[];
  /**
   * * Check the query parameters of HTTP request.
   *  If query parameter `locales` is given,
   *  return all corresponding localized values.
   *  Otherwise, return always the localized value
   *  with highest priority.
   *  Can be empty, single locale or multiple locales.
   */
  localesLimiter: string[];
  customQueries: string[];
  customArguments?: Any;
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
}

export interface DeleteRequest {
  /**
   * / Request to purge the whole collection
   */
  collection: boolean;
  /**
   * / Delete specified documents
   */
  ids: string[];
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
}

/**
 * / List of resources
 */
export interface ResourceList {
  items: Resource[];
  totalCount: number;
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
}

/**
 * / Example resource
 */
export interface Resource {
  id: string;
  meta?: Meta;
  value: number;
  text: string;
}

const baseFieldFilter: object = {
  name: "",
  include: false,
};

const baseSort: object = {
  field: "",
  order: 0,
};

const baseReadRequest: object = {
  offset: 0,
  limit: 0,
  search: "",
  localesLimiter: "",
  customQueries: "",
};

const baseDeleteRequest: object = {
  collection: false,
  ids: "",
};

const baseResourceList: object = {
  totalCount: 0,
};

const baseResource: object = {
  id: "",
  value: 0,
  text: "",
};

/**
 *  Service provides the CRUD operations
 */
export interface Service {

  Read(request: ReadRequest): Promise<ResourceList>;

  Create(request: ResourceList): Promise<ResourceList>;

  Delete(request: DeleteRequest): Promise<Empty>;

  Update(request: ResourceList): Promise<ResourceList>;

  Upsert(request: ResourceList): Promise<ResourceList>;

}

export enum Sort_SortOrder {
  UNSORTED = 0,
  ASCENDING = 1,
  DESCENDING = 2,
  UNRECOGNIZED = -1,
}

export const FieldFilter = {
  encode(message: FieldFilter, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.name);
    writer.uint32(16).bool(message.include);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): FieldFilter {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFieldFilter } as FieldFilter;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.include = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const Sort = {
  encode(message: Sort, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.field);
    writer.uint32(16).int32(message.order);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Sort {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSort } as Sort;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.field = reader.string();
          break;
        case 2:
          message.order = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const ReadRequest = {
  encode(message: ReadRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint32(message.offset);
    writer.uint32(16).uint32(message.limit);
    for (const v of message.sort) {
      Sort.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.filter !== undefined && message.filter !== undefined) {
      Struct.encode(message.filter, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.field) {
      FieldFilter.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.search) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.localesLimiter) {
      writer.uint32(58).string(v!);
    }
    for (const v of message.customQueries) {
      writer.uint32(66).string(v!);
    }
    if (message.customArguments !== undefined && message.customArguments !== undefined) {
      Any.encode(message.customArguments, writer.uint32(74).fork()).ldelim();
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(82).fork()).ldelim();
    }
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ReadRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReadRequest } as ReadRequest;
    message.sort = [];
    message.field = [];
    message.search = [];
    message.localesLimiter = [];
    message.customQueries = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.offset = reader.uint32();
          break;
        case 2:
          message.limit = reader.uint32();
          break;
        case 3:
          message.sort.push(Sort.decode(reader, reader.uint32()));
          break;
        case 4:
          message.filter = Struct.decode(reader, reader.uint32());
          break;
        case 5:
          message.field.push(FieldFilter.decode(reader, reader.uint32()));
          break;
        case 6:
          message.search.push(reader.string());
          break;
        case 7:
          message.localesLimiter.push(reader.string());
          break;
        case 8:
          message.customQueries.push(reader.string());
          break;
        case 9:
          message.customArguments = Any.decode(reader, reader.uint32());
          break;
        case 10:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        case 11:
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

export const DeleteRequest = {
  encode(message: DeleteRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).bool(message.collection);
    for (const v of message.ids) {
      writer.uint32(18).string(v!);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): DeleteRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteRequest } as DeleteRequest;
    message.ids = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collection = reader.bool();
          break;
        case 2:
          message.ids.push(reader.string());
          break;
        case 3:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        case 4:
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

export const ResourceList = {
  encode(message: ResourceList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      Resource.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(16).uint32(message.totalCount);
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ResourceList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResourceList } as ResourceList;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Resource.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalCount = reader.uint32();
          break;
        case 3:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        case 4:
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

export const Resource = {
  encode(message: Resource, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    if (message.meta !== undefined && message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(24).int32(message.value);
    writer.uint32(34).string(message.text);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Resource {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResource } as Resource;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.meta = Meta.decode(reader, reader.uint32());
          break;
        case 3:
          message.value = reader.int32();
          break;
        case 4:
          message.text = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};
