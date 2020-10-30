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

export const protobufPackage = 'io.restorecommerce.resourcebase'

export enum Sort_SortOrder {
  UNSORTED = 0,
  ASCENDING = 1,
  DESCENDING = 2,
  UNRECOGNIZED = -1,
}

export function sort_SortOrderFromJSON(object: any): Sort_SortOrder {
  switch (object) {
    case 0:
    case "UNSORTED":
      return Sort_SortOrder.UNSORTED;
    case 1:
    case "ASCENDING":
      return Sort_SortOrder.ASCENDING;
    case 2:
    case "DESCENDING":
      return Sort_SortOrder.DESCENDING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Sort_SortOrder.UNRECOGNIZED;
  }
}

export function sort_SortOrderToJSON(object: Sort_SortOrder): string {
  switch (object) {
    case Sort_SortOrder.UNSORTED:
      return "UNSORTED";
    case Sort_SortOrder.ASCENDING:
      return "ASCENDING";
    case Sort_SortOrder.DESCENDING:
      return "DESCENDING";
    default:
      return "UNKNOWN";
  }
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
  fromJSON(object: any): FieldFilter {
    const message = { ...baseFieldFilter } as FieldFilter;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.include !== undefined && object.include !== null) {
      message.include = Boolean(object.include);
    } else {
      message.include = false;
    }
    return message;
  },
  fromPartial(object: DeepPartial<FieldFilter>): FieldFilter {
    const message = { ...baseFieldFilter } as FieldFilter;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.include !== undefined && object.include !== null) {
      message.include = object.include;
    } else {
      message.include = false;
    }
    return message;
  },
  toJSON(message: FieldFilter): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.include !== undefined && (obj.include = message.include);
    return obj;
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
  fromJSON(object: any): Sort {
    const message = { ...baseSort } as Sort;
    if (object.field !== undefined && object.field !== null) {
      message.field = String(object.field);
    } else {
      message.field = "";
    }
    if (object.order !== undefined && object.order !== null) {
      message.order = sort_SortOrderFromJSON(object.order);
    } else {
      message.order = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<Sort>): Sort {
    const message = { ...baseSort } as Sort;
    if (object.field !== undefined && object.field !== null) {
      message.field = object.field;
    } else {
      message.field = "";
    }
    if (object.order !== undefined && object.order !== null) {
      message.order = object.order;
    } else {
      message.order = 0;
    }
    return message;
  },
  toJSON(message: Sort): unknown {
    const obj: any = {};
    message.field !== undefined && (obj.field = message.field);
    message.order !== undefined && (obj.order = sort_SortOrderToJSON(message.order));
    return obj;
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
  fromJSON(object: any): ReadRequest {
    const message = { ...baseReadRequest } as ReadRequest;
    message.sort = [];
    message.field = [];
    message.search = [];
    message.localesLimiter = [];
    message.customQueries = [];
    if (object.offset !== undefined && object.offset !== null) {
      message.offset = Number(object.offset);
    } else {
      message.offset = 0;
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = Number(object.limit);
    } else {
      message.limit = 0;
    }
    if (object.sort !== undefined && object.sort !== null) {
      for (const e of object.sort) {
        message.sort.push(Sort.fromJSON(e));
      }
    }
    if (object.filter !== undefined && object.filter !== null) {
      message.filter = Struct.fromJSON(object.filter);
    } else {
      message.filter = undefined;
    }
    if (object.field !== undefined && object.field !== null) {
      for (const e of object.field) {
        message.field.push(FieldFilter.fromJSON(e));
      }
    }
    if (object.search !== undefined && object.search !== null) {
      for (const e of object.search) {
        message.search.push(String(e));
      }
    }
    if (object.localesLimiter !== undefined && object.localesLimiter !== null) {
      for (const e of object.localesLimiter) {
        message.localesLimiter.push(String(e));
      }
    }
    if (object.customQueries !== undefined && object.customQueries !== null) {
      for (const e of object.customQueries) {
        message.customQueries.push(String(e));
      }
    }
    if (object.customArguments !== undefined && object.customArguments !== null) {
      message.customArguments = Any.fromJSON(object.customArguments);
    } else {
      message.customArguments = undefined;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromJSON(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<ReadRequest>): ReadRequest {
    const message = { ...baseReadRequest } as ReadRequest;
    message.sort = [];
    message.field = [];
    message.search = [];
    message.localesLimiter = [];
    message.customQueries = [];
    if (object.offset !== undefined && object.offset !== null) {
      message.offset = object.offset;
    } else {
      message.offset = 0;
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = object.limit;
    } else {
      message.limit = 0;
    }
    if (object.sort !== undefined && object.sort !== null) {
      for (const e of object.sort) {
        message.sort.push(Sort.fromPartial(e));
      }
    }
    if (object.filter !== undefined && object.filter !== null) {
      message.filter = Struct.fromPartial(object.filter);
    } else {
      message.filter = undefined;
    }
    if (object.field !== undefined && object.field !== null) {
      for (const e of object.field) {
        message.field.push(FieldFilter.fromPartial(e));
      }
    }
    if (object.search !== undefined && object.search !== null) {
      for (const e of object.search) {
        message.search.push(e);
      }
    }
    if (object.localesLimiter !== undefined && object.localesLimiter !== null) {
      for (const e of object.localesLimiter) {
        message.localesLimiter.push(e);
      }
    }
    if (object.customQueries !== undefined && object.customQueries !== null) {
      for (const e of object.customQueries) {
        message.customQueries.push(e);
      }
    }
    if (object.customArguments !== undefined && object.customArguments !== null) {
      message.customArguments = Any.fromPartial(object.customArguments);
    } else {
      message.customArguments = undefined;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromPartial(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  toJSON(message: ReadRequest): unknown {
    const obj: any = {};
    message.offset !== undefined && (obj.offset = message.offset);
    message.limit !== undefined && (obj.limit = message.limit);
    if (message.sort) {
      obj.sort = message.sort.map(e => e ? Sort.toJSON(e) : undefined);
    } else {
      obj.sort = [];
    }
    message.filter !== undefined && (obj.filter = message.filter ? Struct.toJSON(message.filter) : undefined);
    if (message.field) {
      obj.field = message.field.map(e => e ? FieldFilter.toJSON(e) : undefined);
    } else {
      obj.field = [];
    }
    if (message.search) {
      obj.search = message.search.map(e => e);
    } else {
      obj.search = [];
    }
    if (message.localesLimiter) {
      obj.localesLimiter = message.localesLimiter.map(e => e);
    } else {
      obj.localesLimiter = [];
    }
    if (message.customQueries) {
      obj.customQueries = message.customQueries.map(e => e);
    } else {
      obj.customQueries = [];
    }
    message.customArguments !== undefined && (obj.customArguments = message.customArguments ? Any.toJSON(message.customArguments) : undefined);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    message.apiKey !== undefined && (obj.apiKey = message.apiKey ? ApiKey.toJSON(message.apiKey) : undefined);
    return obj;
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
  fromJSON(object: any): DeleteRequest {
    const message = { ...baseDeleteRequest } as DeleteRequest;
    message.ids = [];
    if (object.collection !== undefined && object.collection !== null) {
      message.collection = Boolean(object.collection);
    } else {
      message.collection = false;
    }
    if (object.ids !== undefined && object.ids !== null) {
      for (const e of object.ids) {
        message.ids.push(String(e));
      }
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromJSON(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<DeleteRequest>): DeleteRequest {
    const message = { ...baseDeleteRequest } as DeleteRequest;
    message.ids = [];
    if (object.collection !== undefined && object.collection !== null) {
      message.collection = object.collection;
    } else {
      message.collection = false;
    }
    if (object.ids !== undefined && object.ids !== null) {
      for (const e of object.ids) {
        message.ids.push(e);
      }
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromPartial(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  toJSON(message: DeleteRequest): unknown {
    const obj: any = {};
    message.collection !== undefined && (obj.collection = message.collection);
    if (message.ids) {
      obj.ids = message.ids.map(e => e);
    } else {
      obj.ids = [];
    }
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    message.apiKey !== undefined && (obj.apiKey = message.apiKey ? ApiKey.toJSON(message.apiKey) : undefined);
    return obj;
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
  fromJSON(object: any): ResourceList {
    const message = { ...baseResourceList } as ResourceList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Resource.fromJSON(e));
      }
    }
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = Number(object.totalCount);
    } else {
      message.totalCount = 0;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromJSON(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<ResourceList>): ResourceList {
    const message = { ...baseResourceList } as ResourceList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Resource.fromPartial(e));
      }
    }
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = object.totalCount;
    } else {
      message.totalCount = 0;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromPartial(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  toJSON(message: ResourceList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map(e => e ? Resource.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    message.apiKey !== undefined && (obj.apiKey = message.apiKey ? ApiKey.toJSON(message.apiKey) : undefined);
    return obj;
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
  fromJSON(object: any): Resource {
    const message = { ...baseResource } as Resource;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromJSON(object.meta);
    } else {
      message.meta = undefined;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    if (object.text !== undefined && object.text !== null) {
      message.text = String(object.text);
    } else {
      message.text = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Resource>): Resource {
    const message = { ...baseResource } as Resource;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromPartial(object.meta);
    } else {
      message.meta = undefined;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    if (object.text !== undefined && object.text !== null) {
      message.text = object.text;
    } else {
      message.text = "";
    }
    return message;
  },
  toJSON(message: Resource): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.value !== undefined && (obj.value = message.value);
    message.text !== undefined && (obj.text = message.text);
    return obj;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;