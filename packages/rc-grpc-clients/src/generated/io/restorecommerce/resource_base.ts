/* eslint-disable */
import { FileDescriptorProto } from "ts-proto-descriptors/google/protobuf/descriptor";
import {
  Any,
  protoMetadata as protoMetadata1,
} from "../../google/protobuf/any";
import {
  Subject,
  protoMetadata as protoMetadata3,
} from "../../io/restorecommerce/auth";
import {
  OperationStatus,
  Status,
  protoMetadata as protoMetadata4,
} from "../../io/restorecommerce/status";
import {
  Meta,
  protoMetadata as protoMetadata2,
} from "../../io/restorecommerce/meta";
import {
  protoMetadata as protoMetadata5,
  FilterOp as FilterOp6,
} from "../../io/restorecommerce/filter";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "io.restorecommerce.resourcebase";

export interface FieldFilter {
  name: string;
  include: boolean;
}

export interface Sort {
  field: string;
  order: Sort_SortOrder;
}

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

export interface Filter {
  field: string;
  operation: Filter_Operation;
  value: string;
  type: Filter_ValueType;
  /** for nested filtering and to make optional its in separate filter.proto file */
  filters: FilterOp6[];
}

export enum Filter_Operation {
  eq = 0,
  lt = 1,
  lte = 2,
  gt = 3,
  gte = 4,
  isEmpty = 5,
  iLike = 6,
  in = 7,
  neq = 8,
  UNRECOGNIZED = -1,
}

export function filter_OperationFromJSON(object: any): Filter_Operation {
  switch (object) {
    case 0:
    case "eq":
      return Filter_Operation.eq;
    case 1:
    case "lt":
      return Filter_Operation.lt;
    case 2:
    case "lte":
      return Filter_Operation.lte;
    case 3:
    case "gt":
      return Filter_Operation.gt;
    case 4:
    case "gte":
      return Filter_Operation.gte;
    case 5:
    case "isEmpty":
      return Filter_Operation.isEmpty;
    case 6:
    case "iLike":
      return Filter_Operation.iLike;
    case 7:
    case "in":
      return Filter_Operation.in;
    case 8:
    case "neq":
      return Filter_Operation.neq;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Filter_Operation.UNRECOGNIZED;
  }
}

export function filter_OperationToJSON(object: Filter_Operation): string {
  switch (object) {
    case Filter_Operation.eq:
      return "eq";
    case Filter_Operation.lt:
      return "lt";
    case Filter_Operation.lte:
      return "lte";
    case Filter_Operation.gt:
      return "gt";
    case Filter_Operation.gte:
      return "gte";
    case Filter_Operation.isEmpty:
      return "isEmpty";
    case Filter_Operation.iLike:
      return "iLike";
    case Filter_Operation.in:
      return "in";
    case Filter_Operation.neq:
      return "neq";
    default:
      return "UNKNOWN";
  }
}

export enum Filter_ValueType {
  /** STRING - default value type if not specified */
  STRING = 0,
  NUMBER = 1,
  BOOLEAN = 2,
  DATE = 3,
  ARRAY = 4,
  UNRECOGNIZED = -1,
}

export function filter_ValueTypeFromJSON(object: any): Filter_ValueType {
  switch (object) {
    case 0:
    case "STRING":
      return Filter_ValueType.STRING;
    case 1:
    case "NUMBER":
      return Filter_ValueType.NUMBER;
    case 2:
    case "BOOLEAN":
      return Filter_ValueType.BOOLEAN;
    case 3:
    case "DATE":
      return Filter_ValueType.DATE;
    case 4:
    case "ARRAY":
      return Filter_ValueType.ARRAY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Filter_ValueType.UNRECOGNIZED;
  }
}

export function filter_ValueTypeToJSON(object: Filter_ValueType): string {
  switch (object) {
    case Filter_ValueType.STRING:
      return "STRING";
    case Filter_ValueType.NUMBER:
      return "NUMBER";
    case Filter_ValueType.BOOLEAN:
      return "BOOLEAN";
    case Filter_ValueType.DATE:
      return "DATE";
    case Filter_ValueType.ARRAY:
      return "ARRAY";
    default:
      return "UNKNOWN";
  }
}

export interface FilterOp {
  filter: Filter[];
  operator: FilterOp_Operator;
}

export enum FilterOp_Operator {
  and = 0,
  or = 1,
  UNRECOGNIZED = -1,
}

export function filterOp_OperatorFromJSON(object: any): FilterOp_Operator {
  switch (object) {
    case 0:
    case "and":
      return FilterOp_Operator.and;
    case 1:
    case "or":
      return FilterOp_Operator.or;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FilterOp_Operator.UNRECOGNIZED;
  }
}

export function filterOp_OperatorToJSON(object: FilterOp_Operator): string {
  switch (object) {
    case FilterOp_Operator.and:
      return "and";
    case FilterOp_Operator.or:
      return "or";
    default:
      return "UNKNOWN";
  }
}

export interface ReadRequest {
  offset: number;
  limit: number;
  sort: Sort[];
  /** / Filter based on fieldName|operation, value|list */
  filters: FilterOp[];
  /** / Fields selector */
  field: FieldFilter[];
  search: string[];
  /**
   * Check the query parameters of HTTP request.
   * If query parameter `locales` is given,
   * return all corresponding localized values.
   * Otherwise, return always the localized value
   * with highest priority.
   * Can be empty, single locale or multiple locales.
   */
  localesLimiter: string[];
  customQueries: string[];
  customArguments?: Any;
  subject?: Subject;
}

export interface DeleteRequest {
  /** / Request to purge the whole collection */
  collection: boolean;
  /** / Delete specified documents */
  ids: string[];
  subject?: Subject;
}

export interface DeleteResponse {
  status: Status[];
  operationStatus?: OperationStatus;
}

/** / List of resources */
export interface ResourceList {
  items: Resource[];
  totalCount: number;
  subject?: Subject;
}

/** ResourceList response */
export interface ResourceListResponse {
  items: ResourceResponse[];
  totalCount: number;
  operationStatus?: OperationStatus;
}

/** resource read response */
export interface ResourceResponse {
  payload?: Resource;
  status?: Status;
}

/** / Example resource */
export interface Resource {
  id: string;
  meta?: Meta;
  value: number;
  text: string;
  active: boolean;
  created: number;
  status: string;
}

const baseFieldFilter: object = { name: "", include: false };

export const FieldFilter = {
  encode(message: FieldFilter, writer: Writer = Writer.create()): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.include === true) {
      writer.uint32(16).bool(message.include);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): FieldFilter {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseFieldFilter) as FieldFilter;
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
    const message = globalThis.Object.create(baseFieldFilter) as FieldFilter;
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

const baseSort: object = { field: "", order: 0 };

export const Sort = {
  encode(message: Sort, writer: Writer = Writer.create()): Writer {
    if (message.field !== "") {
      writer.uint32(10).string(message.field);
    }
    if (message.order !== 0) {
      writer.uint32(16).int32(message.order);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Sort {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseSort) as Sort;
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
    const message = globalThis.Object.create(baseSort) as Sort;
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
    message.order !== undefined &&
      (obj.order = sort_SortOrderToJSON(message.order));
    return obj;
  },
};

const baseFilter: object = { field: "", operation: 0, value: "", type: 0 };

export const Filter = {
  encode(message: Filter, writer: Writer = Writer.create()): Writer {
    if (message.field !== "") {
      writer.uint32(10).string(message.field);
    }
    if (message.operation !== 0) {
      writer.uint32(16).int32(message.operation);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    if (message.type !== 0) {
      writer.uint32(32).int32(message.type);
    }
    for (const v of message.filters) {
      FilterOp6.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Filter {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseFilter) as Filter;
    message.filters = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.field = reader.string();
          break;
        case 2:
          message.operation = reader.int32() as any;
          break;
        case 3:
          message.value = reader.string();
          break;
        case 4:
          message.type = reader.int32() as any;
          break;
        case 5:
          message.filters.push(FilterOp6.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Filter {
    const message = globalThis.Object.create(baseFilter) as Filter;
    message.filters = [];
    if (object.field !== undefined && object.field !== null) {
      message.field = String(object.field);
    } else {
      message.field = "";
    }
    if (object.operation !== undefined && object.operation !== null) {
      message.operation = filter_OperationFromJSON(object.operation);
    } else {
      message.operation = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = filter_ValueTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.filters !== undefined && object.filters !== null) {
      for (const e of object.filters) {
        message.filters.push(FilterOp6.fromJSON(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Filter>): Filter {
    const message = { ...baseFilter } as Filter;
    message.filters = [];
    if (object.field !== undefined && object.field !== null) {
      message.field = object.field;
    } else {
      message.field = "";
    }
    if (object.operation !== undefined && object.operation !== null) {
      message.operation = object.operation;
    } else {
      message.operation = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.filters !== undefined && object.filters !== null) {
      for (const e of object.filters) {
        message.filters.push(FilterOp6.fromPartial(e));
      }
    }
    return message;
  },

  toJSON(message: Filter): unknown {
    const obj: any = {};
    message.field !== undefined && (obj.field = message.field);
    message.operation !== undefined &&
      (obj.operation = filter_OperationToJSON(message.operation));
    message.value !== undefined && (obj.value = message.value);
    message.type !== undefined &&
      (obj.type = filter_ValueTypeToJSON(message.type));
    if (message.filters) {
      obj.filters = message.filters.map((e) =>
        e ? FilterOp6.toJSON(e) : undefined
      );
    } else {
      obj.filters = [];
    }
    return obj;
  },
};

const baseFilterOp: object = { operator: 0 };

export const FilterOp = {
  encode(message: FilterOp, writer: Writer = Writer.create()): Writer {
    for (const v of message.filter) {
      Filter.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.operator !== 0) {
      writer.uint32(16).int32(message.operator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): FilterOp {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseFilterOp) as FilterOp;
    message.filter = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filter.push(Filter.decode(reader, reader.uint32()));
          break;
        case 2:
          message.operator = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FilterOp {
    const message = globalThis.Object.create(baseFilterOp) as FilterOp;
    message.filter = [];
    if (object.filter !== undefined && object.filter !== null) {
      for (const e of object.filter) {
        message.filter.push(Filter.fromJSON(e));
      }
    }
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = filterOp_OperatorFromJSON(object.operator);
    } else {
      message.operator = 0;
    }
    return message;
  },

  fromPartial(object: DeepPartial<FilterOp>): FilterOp {
    const message = { ...baseFilterOp } as FilterOp;
    message.filter = [];
    if (object.filter !== undefined && object.filter !== null) {
      for (const e of object.filter) {
        message.filter.push(Filter.fromPartial(e));
      }
    }
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    } else {
      message.operator = 0;
    }
    return message;
  },

  toJSON(message: FilterOp): unknown {
    const obj: any = {};
    if (message.filter) {
      obj.filter = message.filter.map((e) =>
        e ? Filter.toJSON(e) : undefined
      );
    } else {
      obj.filter = [];
    }
    message.operator !== undefined &&
      (obj.operator = filterOp_OperatorToJSON(message.operator));
    return obj;
  },
};

const baseReadRequest: object = {
  offset: 0,
  limit: 0,
  search: "",
  localesLimiter: "",
  customQueries: "",
};

export const ReadRequest = {
  encode(message: ReadRequest, writer: Writer = Writer.create()): Writer {
    if (message.offset !== 0) {
      writer.uint32(8).uint32(message.offset);
    }
    if (message.limit !== 0) {
      writer.uint32(16).uint32(message.limit);
    }
    for (const v of message.sort) {
      Sort.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.filters) {
      FilterOp.encode(v!, writer.uint32(34).fork()).ldelim();
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
    if (message.customArguments !== undefined) {
      Any.encode(message.customArguments, writer.uint32(74).fork()).ldelim();
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ReadRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseReadRequest) as ReadRequest;
    message.sort = [];
    message.filters = [];
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
          message.filters.push(FilterOp.decode(reader, reader.uint32()));
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReadRequest {
    const message = globalThis.Object.create(baseReadRequest) as ReadRequest;
    message.sort = [];
    message.filters = [];
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
    if (object.filters !== undefined && object.filters !== null) {
      for (const e of object.filters) {
        message.filters.push(FilterOp.fromJSON(e));
      }
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
    if (
      object.customArguments !== undefined &&
      object.customArguments !== null
    ) {
      message.customArguments = Any.fromJSON(object.customArguments);
    } else {
      message.customArguments = undefined;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<ReadRequest>): ReadRequest {
    const message = { ...baseReadRequest } as ReadRequest;
    message.sort = [];
    message.filters = [];
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
    if (object.filters !== undefined && object.filters !== null) {
      for (const e of object.filters) {
        message.filters.push(FilterOp.fromPartial(e));
      }
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
    if (
      object.customArguments !== undefined &&
      object.customArguments !== null
    ) {
      message.customArguments = Any.fromPartial(object.customArguments);
    } else {
      message.customArguments = undefined;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  toJSON(message: ReadRequest): unknown {
    const obj: any = {};
    message.offset !== undefined && (obj.offset = message.offset);
    message.limit !== undefined && (obj.limit = message.limit);
    if (message.sort) {
      obj.sort = message.sort.map((e) => (e ? Sort.toJSON(e) : undefined));
    } else {
      obj.sort = [];
    }
    if (message.filters) {
      obj.filters = message.filters.map((e) =>
        e ? FilterOp.toJSON(e) : undefined
      );
    } else {
      obj.filters = [];
    }
    if (message.field) {
      obj.field = message.field.map((e) =>
        e ? FieldFilter.toJSON(e) : undefined
      );
    } else {
      obj.field = [];
    }
    if (message.search) {
      obj.search = message.search.map((e) => e);
    } else {
      obj.search = [];
    }
    if (message.localesLimiter) {
      obj.localesLimiter = message.localesLimiter.map((e) => e);
    } else {
      obj.localesLimiter = [];
    }
    if (message.customQueries) {
      obj.customQueries = message.customQueries.map((e) => e);
    } else {
      obj.customQueries = [];
    }
    message.customArguments !== undefined &&
      (obj.customArguments = message.customArguments
        ? Any.toJSON(message.customArguments)
        : undefined);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseDeleteRequest: object = { collection: false, ids: "" };

export const DeleteRequest = {
  encode(message: DeleteRequest, writer: Writer = Writer.create()): Writer {
    if (message.collection === true) {
      writer.uint32(8).bool(message.collection);
    }
    for (const v of message.ids) {
      writer.uint32(18).string(v!);
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
    return message;
  },

  toJSON(message: DeleteRequest): unknown {
    const obj: any = {};
    message.collection !== undefined && (obj.collection = message.collection);
    if (message.ids) {
      obj.ids = message.ids.map((e) => e);
    } else {
      obj.ids = [];
    }
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseDeleteResponse: object = {};

export const DeleteResponse = {
  encode(message: DeleteResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.status) {
      Status.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.operationStatus !== undefined) {
      OperationStatus.encode(
        message.operationStatus,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DeleteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseDeleteResponse
    ) as DeleteResponse;
    message.status = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status.push(Status.decode(reader, reader.uint32()));
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

  fromJSON(object: any): DeleteResponse {
    const message = globalThis.Object.create(
      baseDeleteResponse
    ) as DeleteResponse;
    message.status = [];
    if (object.status !== undefined && object.status !== null) {
      for (const e of object.status) {
        message.status.push(Status.fromJSON(e));
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

  fromPartial(object: DeepPartial<DeleteResponse>): DeleteResponse {
    const message = { ...baseDeleteResponse } as DeleteResponse;
    message.status = [];
    if (object.status !== undefined && object.status !== null) {
      for (const e of object.status) {
        message.status.push(Status.fromPartial(e));
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

  toJSON(message: DeleteResponse): unknown {
    const obj: any = {};
    if (message.status) {
      obj.status = message.status.map((e) =>
        e ? Status.toJSON(e) : undefined
      );
    } else {
      obj.status = [];
    }
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus
        ? OperationStatus.toJSON(message.operationStatus)
        : undefined);
    return obj;
  },
};

const baseResourceList: object = { totalCount: 0 };

export const ResourceList = {
  encode(message: ResourceList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      Resource.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ResourceList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseResourceList) as ResourceList;
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResourceList {
    const message = globalThis.Object.create(baseResourceList) as ResourceList;
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
    return message;
  },

  toJSON(message: ResourceList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? Resource.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseResourceListResponse: object = { totalCount: 0 };

export const ResourceListResponse = {
  encode(
    message: ResourceListResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.items) {
      ResourceResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.operationStatus !== undefined) {
      OperationStatus.encode(
        message.operationStatus,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ResourceListResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseResourceListResponse
    ) as ResourceListResponse;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(ResourceResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalCount = reader.uint32();
          break;
        case 3:
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

  fromJSON(object: any): ResourceListResponse {
    const message = globalThis.Object.create(
      baseResourceListResponse
    ) as ResourceListResponse;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(ResourceResponse.fromJSON(e));
      }
    }
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = Number(object.totalCount);
    } else {
      message.totalCount = 0;
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

  fromPartial(object: DeepPartial<ResourceListResponse>): ResourceListResponse {
    const message = { ...baseResourceListResponse } as ResourceListResponse;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(ResourceResponse.fromPartial(e));
      }
    }
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = object.totalCount;
    } else {
      message.totalCount = 0;
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

  toJSON(message: ResourceListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? ResourceResponse.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus
        ? OperationStatus.toJSON(message.operationStatus)
        : undefined);
    return obj;
  },
};

const baseResourceResponse: object = {};

export const ResourceResponse = {
  encode(message: ResourceResponse, writer: Writer = Writer.create()): Writer {
    if (message.payload !== undefined) {
      Resource.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ResourceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseResourceResponse
    ) as ResourceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = Resource.decode(reader, reader.uint32());
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

  fromJSON(object: any): ResourceResponse {
    const message = globalThis.Object.create(
      baseResourceResponse
    ) as ResourceResponse;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = Resource.fromJSON(object.payload);
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

  fromPartial(object: DeepPartial<ResourceResponse>): ResourceResponse {
    const message = { ...baseResourceResponse } as ResourceResponse;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = Resource.fromPartial(object.payload);
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

  toJSON(message: ResourceResponse): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload
        ? Resource.toJSON(message.payload)
        : undefined);
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },
};

const baseResource: object = {
  id: "",
  value: 0,
  text: "",
  active: false,
  created: 0,
  status: "",
};

export const Resource = {
  encode(message: Resource, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    if (message.value !== 0) {
      writer.uint32(24).int32(message.value);
    }
    if (message.text !== "") {
      writer.uint32(34).string(message.text);
    }
    if (message.active === true) {
      writer.uint32(40).bool(message.active);
    }
    if (message.created !== 0) {
      writer.uint32(49).double(message.created);
    }
    if (message.status !== "") {
      writer.uint32(58).string(message.status);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Resource {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseResource) as Resource;
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
        case 5:
          message.active = reader.bool();
          break;
        case 6:
          message.created = reader.double();
          break;
        case 7:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Resource {
    const message = globalThis.Object.create(baseResource) as Resource;
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
    if (object.active !== undefined && object.active !== null) {
      message.active = Boolean(object.active);
    } else {
      message.active = false;
    }
    if (object.created !== undefined && object.created !== null) {
      message.created = Number(object.created);
    } else {
      message.created = 0;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
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
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    } else {
      message.active = false;
    }
    if (object.created !== undefined && object.created !== null) {
      message.created = object.created;
    } else {
      message.created = 0;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    return message;
  },

  toJSON(message: Resource): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.value !== undefined && (obj.value = message.value);
    message.text !== undefined && (obj.text = message.text);
    message.active !== undefined && (obj.active = message.active);
    message.created !== undefined && (obj.created = message.created);
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },
};

/** Service provides the CRUD operations */
export interface Service {
  Read(request: ReadRequest): Promise<ResourceListResponse>;
  Create(request: ResourceList): Promise<ResourceListResponse>;
  Delete(request: DeleteRequest): Promise<DeleteResponse>;
  Update(request: ResourceList): Promise<ResourceListResponse>;
  Upsert(request: ResourceList): Promise<ResourceListResponse>;
}

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto.fromPartial({
    dependency: [
      "google/protobuf/any.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/filter.proto",
    ],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        field: [
          { name: "name", number: 1, label: 1, type: 9, jsonName: "name" },
          {
            name: "include",
            number: 2,
            label: 1,
            type: 8,
            jsonName: "include",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "FieldFilter",
      },
      {
        field: [
          { name: "field", number: 1, label: 1, type: 9, jsonName: "field" },
          {
            name: "order",
            number: 2,
            label: 1,
            type: 14,
            typeName: ".io.restorecommerce.resourcebase.Sort.SortOrder",
            jsonName: "order",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [
          {
            value: [
              { name: "UNSORTED", number: 0 },
              { name: "ASCENDING", number: 1 },
              { name: "DESCENDING", number: 2 },
            ],
            reservedRange: [],
            reservedName: [],
            name: "SortOrder",
          },
        ],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Sort",
      },
      {
        field: [
          { name: "field", number: 1, label: 1, type: 9, jsonName: "field" },
          {
            name: "operation",
            number: 2,
            label: 1,
            type: 14,
            typeName: ".io.restorecommerce.resourcebase.Filter.Operation",
            jsonName: "operation",
          },
          { name: "value", number: 3, label: 1, type: 9, jsonName: "value" },
          {
            name: "type",
            number: 4,
            label: 1,
            type: 14,
            typeName: ".io.restorecommerce.resourcebase.Filter.ValueType",
            jsonName: "type",
          },
          {
            name: "filters",
            number: 5,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.filter.FilterOp",
            jsonName: "filters",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [
          {
            value: [
              { name: "eq", number: 0 },
              { name: "lt", number: 1 },
              { name: "lte", number: 2 },
              { name: "gt", number: 3 },
              { name: "gte", number: 4 },
              { name: "isEmpty", number: 5 },
              { name: "iLike", number: 6 },
              { name: "in", number: 7 },
              { name: "neq", number: 8 },
            ],
            reservedRange: [],
            reservedName: [],
            name: "Operation",
          },
          {
            value: [
              { name: "STRING", number: 0 },
              { name: "NUMBER", number: 1 },
              { name: "BOOLEAN", number: 2 },
              { name: "DATE", number: 3 },
              { name: "ARRAY", number: 4 },
            ],
            reservedRange: [],
            reservedName: [],
            name: "ValueType",
          },
        ],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Filter",
      },
      {
        field: [
          {
            name: "filter",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.resourcebase.Filter",
            jsonName: "filter",
          },
          {
            name: "operator",
            number: 2,
            label: 1,
            type: 14,
            typeName: ".io.restorecommerce.resourcebase.FilterOp.Operator",
            jsonName: "operator",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [
          {
            value: [
              { name: "and", number: 0 },
              { name: "or", number: 1 },
            ],
            reservedRange: [],
            reservedName: [],
            name: "Operator",
          },
        ],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "FilterOp",
      },
      {
        field: [
          { name: "offset", number: 1, label: 1, type: 13, jsonName: "offset" },
          { name: "limit", number: 2, label: 1, type: 13, jsonName: "limit" },
          {
            name: "sort",
            number: 3,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.resourcebase.Sort",
            jsonName: "sort",
          },
          {
            name: "filters",
            number: 4,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.resourcebase.FilterOp",
            jsonName: "filters",
          },
          {
            name: "field",
            number: 5,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.resourcebase.FieldFilter",
            jsonName: "field",
          },
          { name: "search", number: 6, label: 3, type: 9, jsonName: "search" },
          {
            name: "locales_limiter",
            number: 7,
            label: 3,
            type: 9,
            jsonName: "localesLimiter",
          },
          {
            name: "custom_queries",
            number: 8,
            label: 3,
            type: 9,
            jsonName: "customQueries",
          },
          {
            name: "custom_arguments",
            number: 9,
            label: 1,
            type: 11,
            typeName: ".google.protobuf.Any",
            jsonName: "customArguments",
          },
          {
            name: "subject",
            number: 10,
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
        name: "ReadRequest",
      },
      {
        field: [
          {
            name: "collection",
            number: 1,
            label: 1,
            type: 8,
            jsonName: "collection",
          },
          { name: "ids", number: 2, label: 3, type: 9, jsonName: "ids" },
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
            name: "status",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.status.Status",
            jsonName: "status",
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
        name: "DeleteResponse",
      },
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.resourcebase.Resource",
            jsonName: "items",
          },
          {
            name: "total_count",
            number: 2,
            label: 1,
            type: 13,
            jsonName: "totalCount",
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
        name: "ResourceList",
      },
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.resourcebase.ResourceResponse",
            jsonName: "items",
          },
          {
            name: "total_count",
            number: 2,
            label: 1,
            type: 13,
            jsonName: "totalCount",
          },
          {
            name: "operation_status",
            number: 3,
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
        name: "ResourceListResponse",
      },
      {
        field: [
          {
            name: "payload",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.resourcebase.Resource",
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
        name: "ResourceResponse",
      },
      {
        field: [
          { name: "id", number: 1, label: 1, type: 9, jsonName: "id" },
          {
            name: "meta",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.meta.Meta",
            jsonName: "meta",
          },
          { name: "value", number: 3, label: 1, type: 5, jsonName: "value" },
          { name: "text", number: 4, label: 1, type: 9, jsonName: "text" },
          { name: "active", number: 5, label: 1, type: 8, jsonName: "active" },
          {
            name: "created",
            number: 6,
            label: 1,
            type: 1,
            jsonName: "created",
          },
          { name: "status", number: 7, label: 1, type: 9, jsonName: "status" },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Resource",
      },
    ],
    enumType: [],
    service: [
      {
        method: [
          {
            name: "Read",
            inputType: ".io.restorecommerce.resourcebase.ReadRequest",
            outputType: ".io.restorecommerce.resourcebase.ResourceListResponse",
          },
          {
            name: "Create",
            inputType: ".io.restorecommerce.resourcebase.ResourceList",
            outputType: ".io.restorecommerce.resourcebase.ResourceListResponse",
          },
          {
            name: "Delete",
            inputType: ".io.restorecommerce.resourcebase.DeleteRequest",
            outputType: ".io.restorecommerce.resourcebase.DeleteResponse",
          },
          {
            name: "Update",
            inputType: ".io.restorecommerce.resourcebase.ResourceList",
            outputType: ".io.restorecommerce.resourcebase.ResourceListResponse",
          },
          {
            name: "Upsert",
            inputType: ".io.restorecommerce.resourcebase.ResourceList",
            outputType: ".io.restorecommerce.resourcebase.ResourceListResponse",
          },
        ],
        name: "Service",
      },
    ],
    extension: [],
    name: "io/restorecommerce/resource_base.proto",
    package: "io.restorecommerce.resourcebase",
    sourceCodeInfo: {
      location: [
        {
          path: [6, 0],
          span: [10, 0, 16, 1],
          leadingDetachedComments: [],
          leadingComments: " Service provides the CRUD operations\n",
        },
        {
          path: [4, 2, 4, 1, 2, 0],
          span: [49, 4, 15],
          leadingDetachedComments: [],
          trailingComments: " default value type if not specified\n",
        },
        {
          path: [4, 2, 2, 4],
          span: [56, 2, 58],
          leadingDetachedComments: [],
          trailingComments:
            " for nested filtering and to make optional its in separate filter.proto file\n",
        },
        {
          path: [4, 4, 2, 3],
          span: [74, 2, 32],
          leadingDetachedComments: [],
          leadingComments:
            "/ Filter based on fieldName|operation, value|list\n",
          trailingComments: " repeated filters\n",
        },
        {
          path: [4, 4, 2, 4],
          span: [77, 2, 33],
          leadingDetachedComments: [],
          leadingComments: "/ Fields selector\n",
        },
        {
          path: [4, 4, 2, 6],
          span: [87, 2, 38],
          leadingDetachedComments: [],
          leadingComments:
            "* Check the query parameters of HTTP request.\n If query parameter `locales` is given,\n return all corresponding localized values.\n Otherwise, return always the localized value\n with highest priority.\n Can be empty, single locale or multiple locales.\n",
        },
        {
          path: [4, 5, 2, 0],
          span: [96, 2, 22],
          leadingDetachedComments: [],
          leadingComments: "/ Request to purge the whole collection\n",
        },
        {
          path: [4, 5, 2, 1],
          span: [98, 2, 26],
          leadingDetachedComments: [],
          leadingComments: "/ Delete specified documents\n",
        },
        {
          path: [4, 7],
          span: [108, 0, 112, 1],
          leadingDetachedComments: [],
          leadingComments: "/ List of resources\n",
        },
        {
          path: [4, 8],
          span: [115, 0, 119, 1],
          leadingDetachedComments: [],
          leadingComments: " ResourceList response\n",
        },
        {
          path: [4, 9],
          span: [122, 0, 125, 1],
          leadingDetachedComments: [],
          leadingComments: " resource read response\n",
        },
        {
          path: [4, 10],
          span: [128, 0, 136, 1],
          leadingDetachedComments: [],
          leadingComments: "/ Example resource\n",
        },
      ],
    },
    syntax: "proto3",
  }),
  references: {
    ".io.restorecommerce.resourcebase.FieldFilter": FieldFilter,
    ".io.restorecommerce.resourcebase.Sort": Sort,
    ".io.restorecommerce.resourcebase.Sort.SortOrder": Sort_SortOrder,
    ".io.restorecommerce.resourcebase.Filter": Filter,
    ".io.restorecommerce.resourcebase.Filter.Operation": Filter_Operation,
    ".io.restorecommerce.resourcebase.Filter.ValueType": Filter_ValueType,
    ".io.restorecommerce.resourcebase.FilterOp": FilterOp,
    ".io.restorecommerce.resourcebase.FilterOp.Operator": FilterOp_Operator,
    ".io.restorecommerce.resourcebase.ReadRequest": ReadRequest,
    ".io.restorecommerce.resourcebase.DeleteRequest": DeleteRequest,
    ".io.restorecommerce.resourcebase.DeleteResponse": DeleteResponse,
    ".io.restorecommerce.resourcebase.ResourceList": ResourceList,
    ".io.restorecommerce.resourcebase.ResourceListResponse": ResourceListResponse,
    ".io.restorecommerce.resourcebase.ResourceResponse": ResourceResponse,
    ".io.restorecommerce.resourcebase.Resource": Resource,
  },
  dependencies: [
    protoMetadata1,
    protoMetadata2,
    protoMetadata3,
    protoMetadata4,
    protoMetadata5,
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
