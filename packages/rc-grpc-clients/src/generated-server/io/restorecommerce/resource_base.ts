/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto } from "ts-proto-descriptors";
import { Any, protoMetadata as protoMetadata1 } from "../../google/protobuf/any";
import { protoMetadata as protoMetadata3, Subject } from "./auth";
import { FilterOp as FilterOp6, protoMetadata as protoMetadata5 } from "./filter";
import { Meta, protoMetadata as protoMetadata2 } from "./meta";
import { OperationStatus, protoMetadata as protoMetadata4, Status } from "./status";

export const protobufPackage = "io.restorecommerce.resourcebase";

export interface FieldFilter {
  name?: string | undefined;
  include?: boolean | undefined;
}

export interface Sort {
  field: string;
  order?: Sort_SortOrder | undefined;
}

export enum Sort_SortOrder {
  UNSORTED = "UNSORTED",
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING",
  UNRECOGNIZED = "UNRECOGNIZED",
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
    case Sort_SortOrder.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function sort_SortOrderToNumber(object: Sort_SortOrder): number {
  switch (object) {
    case Sort_SortOrder.UNSORTED:
      return 0;
    case Sort_SortOrder.ASCENDING:
      return 1;
    case Sort_SortOrder.DESCENDING:
      return 2;
    case Sort_SortOrder.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface Filter {
  field: string;
  operation: Filter_Operation;
  value: string;
  type?:
    | Filter_ValueType
    | undefined;
  /** for nested filtering and to make optional its in separate filter.proto file */
  filters: FilterOp6[];
}

export enum Filter_Operation {
  eq = "eq",
  lt = "lt",
  lte = "lte",
  gt = "gt",
  gte = "gte",
  isEmpty = "isEmpty",
  iLike = "iLike",
  in = "in",
  neq = "neq",
  UNRECOGNIZED = "UNRECOGNIZED",
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
    case Filter_Operation.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function filter_OperationToNumber(object: Filter_Operation): number {
  switch (object) {
    case Filter_Operation.eq:
      return 0;
    case Filter_Operation.lt:
      return 1;
    case Filter_Operation.lte:
      return 2;
    case Filter_Operation.gt:
      return 3;
    case Filter_Operation.gte:
      return 4;
    case Filter_Operation.isEmpty:
      return 5;
    case Filter_Operation.iLike:
      return 6;
    case Filter_Operation.in:
      return 7;
    case Filter_Operation.neq:
      return 8;
    case Filter_Operation.UNRECOGNIZED:
    default:
      return -1;
  }
}

export enum Filter_ValueType {
  /** STRING - default value type if not specified */
  STRING = "STRING",
  NUMBER = "NUMBER",
  BOOLEAN = "BOOLEAN",
  DATE = "DATE",
  ARRAY = "ARRAY",
  UNRECOGNIZED = "UNRECOGNIZED",
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
    case Filter_ValueType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function filter_ValueTypeToNumber(object: Filter_ValueType): number {
  switch (object) {
    case Filter_ValueType.STRING:
      return 0;
    case Filter_ValueType.NUMBER:
      return 1;
    case Filter_ValueType.BOOLEAN:
      return 2;
    case Filter_ValueType.DATE:
      return 3;
    case Filter_ValueType.ARRAY:
      return 4;
    case Filter_ValueType.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface FilterOp {
  filters: Filter[];
  operator?: FilterOp_Operator | undefined;
}

export enum FilterOp_Operator {
  and = "and",
  or = "or",
  UNRECOGNIZED = "UNRECOGNIZED",
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
    case FilterOp_Operator.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function filterOp_OperatorToNumber(object: FilterOp_Operator): number {
  switch (object) {
    case FilterOp_Operator.and:
      return 0;
    case FilterOp_Operator.or:
      return 1;
    case FilterOp_Operator.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface Search {
  /** search string */
  search?:
    | string
    | undefined;
  /** list of fields to be searched on entity (if not specified all indexed fields will be searched) */
  fields: string[];
  /** default search is case insensitive */
  case_sensitive?: boolean | undefined;
}

export interface ReadRequest {
  offset?: number | undefined;
  limit?: number | undefined;
  sorts: Sort[];
  /** / Filter based on fieldName|operation, value|list */
  filters: FilterOp[];
  /** / Fields selector */
  fields: FieldFilter[];
  /**
   * Check the query parameters of HTTP request.
   * If query parameter `locales` is given,
   * return all corresponding localized values.
   * Otherwise, return always the localized value
   * with highest priority.
   * Can be empty, single locale or multiple locales.
   */
  locales_limiter: string[];
  custom_queries: string[];
  custom_arguments?: Any | undefined;
  subject?: Subject;
  search?: Search | undefined;
}

export interface DeleteRequest {
  /** / Request to purge the whole collection */
  collection?:
    | boolean
    | undefined;
  /** / Delete specified documents */
  ids: string[];
  subject?: Subject;
  /** list of views to be dropped */
  views: string[];
  /** list of analyzers to be deleted */
  analyzers: string[];
}

export interface DeleteResponse {
  status: Status[];
  operation_status?: OperationStatus;
}

/** / List of resources */
export interface ResourceList {
  items: Resource[];
  total_count?: number | undefined;
  subject?: Subject;
}

/** ResourceList response */
export interface ResourceListResponse {
  items: ResourceResponse[];
  total_count: number;
  operation_status?: OperationStatus;
}

/** resource read response */
export interface ResourceResponse {
  payload?: Resource;
  status?: Status;
}

/** / Example resource */
export interface Resource {
  id?: string | undefined;
  meta?: Meta | undefined;
}

function createBaseFieldFilter(): FieldFilter {
  return { name: undefined, include: undefined };
}

export const FieldFilter = {
  encode(message: FieldFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.include !== undefined) {
      writer.uint32(16).bool(message.include);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FieldFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFieldFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.include = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FieldFilter {
    return {
      name: isSet(object.name) ? String(object.name) : undefined,
      include: isSet(object.include) ? Boolean(object.include) : undefined,
    };
  },

  toJSON(message: FieldFilter): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.include !== undefined && (obj.include = message.include);
    return obj;
  },

  create(base?: DeepPartial<FieldFilter>): FieldFilter {
    return FieldFilter.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FieldFilter>): FieldFilter {
    const message = createBaseFieldFilter();
    message.name = object.name ?? undefined;
    message.include = object.include ?? undefined;
    return message;
  },
};

function createBaseSort(): Sort {
  return { field: "", order: undefined };
}

export const Sort = {
  encode(message: Sort, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.field !== "") {
      writer.uint32(10).string(message.field);
    }
    if (message.order !== undefined) {
      writer.uint32(16).int32(sort_SortOrderToNumber(message.order));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Sort {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSort();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.field = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.order = sort_SortOrderFromJSON(reader.int32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Sort {
    return {
      field: isSet(object.field) ? String(object.field) : "",
      order: isSet(object.order) ? sort_SortOrderFromJSON(object.order) : undefined,
    };
  },

  toJSON(message: Sort): unknown {
    const obj: any = {};
    message.field !== undefined && (obj.field = message.field);
    message.order !== undefined &&
      (obj.order = message.order !== undefined ? sort_SortOrderToJSON(message.order) : undefined);
    return obj;
  },

  create(base?: DeepPartial<Sort>): Sort {
    return Sort.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Sort>): Sort {
    const message = createBaseSort();
    message.field = object.field ?? "";
    message.order = object.order ?? undefined;
    return message;
  },
};

function createBaseFilter(): Filter {
  return { field: "", operation: Filter_Operation.eq, value: "", type: undefined, filters: [] };
}

export const Filter = {
  encode(message: Filter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.field !== "") {
      writer.uint32(10).string(message.field);
    }
    if (message.operation !== Filter_Operation.eq) {
      writer.uint32(16).int32(filter_OperationToNumber(message.operation));
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    if (message.type !== undefined) {
      writer.uint32(32).int32(filter_ValueTypeToNumber(message.type));
    }
    for (const v of message.filters) {
      FilterOp6.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Filter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.field = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.operation = filter_OperationFromJSON(reader.int32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.value = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.type = filter_ValueTypeFromJSON(reader.int32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.filters.push(FilterOp6.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Filter {
    return {
      field: isSet(object.field) ? String(object.field) : "",
      operation: isSet(object.operation) ? filter_OperationFromJSON(object.operation) : Filter_Operation.eq,
      value: isSet(object.value) ? String(object.value) : "",
      type: isSet(object.type) ? filter_ValueTypeFromJSON(object.type) : undefined,
      filters: Array.isArray(object?.filters) ? object.filters.map((e: any) => FilterOp.fromJSON(e)) : [],
    };
  },

  toJSON(message: Filter): unknown {
    const obj: any = {};
    message.field !== undefined && (obj.field = message.field);
    message.operation !== undefined && (obj.operation = filter_OperationToJSON(message.operation));
    message.value !== undefined && (obj.value = message.value);
    message.type !== undefined &&
      (obj.type = message.type !== undefined ? filter_ValueTypeToJSON(message.type) : undefined);
    if (message.filters) {
      obj.filters = message.filters.map((e) => e ? FilterOp6.toJSON(e) : undefined);
    } else {
      obj.filters = [];
    }
    return obj;
  },

  create(base?: DeepPartial<Filter>): Filter {
    return Filter.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Filter>): Filter {
    const message = createBaseFilter();
    message.field = object.field ?? "";
    message.operation = object.operation ?? Filter_Operation.eq;
    message.value = object.value ?? "";
    message.type = object.type ?? undefined;
    message.filters = object.filters?.map((e) => FilterOp6.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFilterOp(): FilterOp {
  return { filters: [], operator: undefined };
}

export const FilterOp = {
  encode(message: FilterOp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.filters) {
      Filter.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.operator !== undefined) {
      writer.uint32(16).int32(filterOp_OperatorToNumber(message.operator));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FilterOp {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFilterOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filters.push(Filter.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.operator = filterOp_OperatorFromJSON(reader.int32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FilterOp {
    return {
      filters: Array.isArray(object?.filters) ? object.filters.map((e: any) => Filter.fromJSON(e)) : [],
      operator: isSet(object.operator) ? filterOp_OperatorFromJSON(object.operator) : undefined,
    };
  },

  toJSON(message: FilterOp): unknown {
    const obj: any = {};
    if (message.filters) {
      obj.filters = message.filters.map((e) => e ? Filter.toJSON(e) : undefined);
    } else {
      obj.filters = [];
    }
    message.operator !== undefined &&
      (obj.operator = message.operator !== undefined ? filterOp_OperatorToJSON(message.operator) : undefined);
    return obj;
  },

  create(base?: DeepPartial<FilterOp>): FilterOp {
    return FilterOp.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FilterOp>): FilterOp {
    const message = createBaseFilterOp();
    message.filters = object.filters?.map((e) => Filter.fromPartial(e)) || [];
    message.operator = object.operator ?? undefined;
    return message;
  },
};

function createBaseSearch(): Search {
  return { search: undefined, fields: [], case_sensitive: undefined };
}

export const Search = {
  encode(message: Search, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.search !== undefined) {
      writer.uint32(10).string(message.search);
    }
    for (const v of message.fields) {
      writer.uint32(18).string(v!);
    }
    if (message.case_sensitive !== undefined) {
      writer.uint32(24).bool(message.case_sensitive);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Search {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSearch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.search = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fields.push(reader.string());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.case_sensitive = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Search {
    return {
      search: isSet(object.search) ? String(object.search) : undefined,
      fields: Array.isArray(object?.fields) ? object.fields.map((e: any) => String(e)) : [],
      case_sensitive: isSet(object.case_sensitive) ? Boolean(object.case_sensitive) : undefined,
    };
  },

  toJSON(message: Search): unknown {
    const obj: any = {};
    message.search !== undefined && (obj.search = message.search);
    if (message.fields) {
      obj.fields = message.fields.map((e) => e);
    } else {
      obj.fields = [];
    }
    message.case_sensitive !== undefined && (obj.case_sensitive = message.case_sensitive);
    return obj;
  },

  create(base?: DeepPartial<Search>): Search {
    return Search.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Search>): Search {
    const message = createBaseSearch();
    message.search = object.search ?? undefined;
    message.fields = object.fields?.map((e) => e) || [];
    message.case_sensitive = object.case_sensitive ?? undefined;
    return message;
  },
};

function createBaseReadRequest(): ReadRequest {
  return {
    offset: undefined,
    limit: undefined,
    sorts: [],
    filters: [],
    fields: [],
    locales_limiter: [],
    custom_queries: [],
    custom_arguments: undefined,
    subject: undefined,
    search: undefined,
  };
}

export const ReadRequest = {
  encode(message: ReadRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offset !== undefined) {
      writer.uint32(8).uint32(message.offset);
    }
    if (message.limit !== undefined) {
      writer.uint32(16).uint32(message.limit);
    }
    for (const v of message.sorts) {
      Sort.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.filters) {
      FilterOp.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.fields) {
      FieldFilter.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.locales_limiter) {
      writer.uint32(58).string(v!);
    }
    for (const v of message.custom_queries) {
      writer.uint32(66).string(v!);
    }
    if (message.custom_arguments !== undefined) {
      Any.encode(message.custom_arguments, writer.uint32(74).fork()).ldelim();
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(82).fork()).ldelim();
    }
    if (message.search !== undefined) {
      Search.encode(message.search, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReadRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReadRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.offset = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.limit = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sorts.push(Sort.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.filters.push(FilterOp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.fields.push(FieldFilter.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.locales_limiter.push(reader.string());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.custom_queries.push(reader.string());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.custom_arguments = Any.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.search = Search.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReadRequest {
    return {
      offset: isSet(object.offset) ? Number(object.offset) : undefined,
      limit: isSet(object.limit) ? Number(object.limit) : undefined,
      sorts: Array.isArray(object?.sorts) ? object.sorts.map((e: any) => Sort.fromJSON(e)) : [],
      filters: Array.isArray(object?.filters) ? object.filters.map((e: any) => FilterOp.fromJSON(e)) : [],
      fields: Array.isArray(object?.fields) ? object.fields.map((e: any) => FieldFilter.fromJSON(e)) : [],
      locales_limiter: Array.isArray(object?.locales_limiter) ? object.locales_limiter.map((e: any) => String(e)) : [],
      custom_queries: Array.isArray(object?.custom_queries) ? object.custom_queries.map((e: any) => String(e)) : [],
      custom_arguments: isSet(object.custom_arguments) ? Any.fromJSON(object.custom_arguments) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
      search: isSet(object.search) ? Search.fromJSON(object.search) : undefined,
    };
  },

  toJSON(message: ReadRequest): unknown {
    const obj: any = {};
    message.offset !== undefined && (obj.offset = Math.round(message.offset));
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    if (message.sorts) {
      obj.sorts = message.sorts.map((e) => e ? Sort.toJSON(e) : undefined);
    } else {
      obj.sorts = [];
    }
    if (message.filters) {
      obj.filters = message.filters.map((e) => e ? FilterOp.toJSON(e) : undefined);
    } else {
      obj.filters = [];
    }
    if (message.fields) {
      obj.fields = message.fields.map((e) => e ? FieldFilter.toJSON(e) : undefined);
    } else {
      obj.fields = [];
    }
    if (message.locales_limiter) {
      obj.locales_limiter = message.locales_limiter.map((e) => e);
    } else {
      obj.locales_limiter = [];
    }
    if (message.custom_queries) {
      obj.custom_queries = message.custom_queries.map((e) => e);
    } else {
      obj.custom_queries = [];
    }
    message.custom_arguments !== undefined &&
      (obj.custom_arguments = message.custom_arguments ? Any.toJSON(message.custom_arguments) : undefined);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    message.search !== undefined && (obj.search = message.search ? Search.toJSON(message.search) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ReadRequest>): ReadRequest {
    return ReadRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ReadRequest>): ReadRequest {
    const message = createBaseReadRequest();
    message.offset = object.offset ?? undefined;
    message.limit = object.limit ?? undefined;
    message.sorts = object.sorts?.map((e) => Sort.fromPartial(e)) || [];
    message.filters = object.filters?.map((e) => FilterOp.fromPartial(e)) || [];
    message.fields = object.fields?.map((e) => FieldFilter.fromPartial(e)) || [];
    message.locales_limiter = object.locales_limiter?.map((e) => e) || [];
    message.custom_queries = object.custom_queries?.map((e) => e) || [];
    message.custom_arguments = (object.custom_arguments !== undefined && object.custom_arguments !== null)
      ? Any.fromPartial(object.custom_arguments)
      : undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    message.search = (object.search !== undefined && object.search !== null)
      ? Search.fromPartial(object.search)
      : undefined;
    return message;
  },
};

function createBaseDeleteRequest(): DeleteRequest {
  return { collection: undefined, ids: [], subject: undefined, views: [], analyzers: [] };
}

export const DeleteRequest = {
  encode(message: DeleteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collection !== undefined) {
      writer.uint32(8).bool(message.collection);
    }
    for (const v of message.ids) {
      writer.uint32(18).string(v!);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.views) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.analyzers) {
      writer.uint32(42).string(v!);
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
          if (tag !== 8) {
            break;
          }

          message.collection = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.ids.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.views.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.analyzers.push(reader.string());
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
      collection: isSet(object.collection) ? Boolean(object.collection) : undefined,
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => String(e)) : [],
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
      views: Array.isArray(object?.views) ? object.views.map((e: any) => String(e)) : [],
      analyzers: Array.isArray(object?.analyzers) ? object.analyzers.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: DeleteRequest): unknown {
    const obj: any = {};
    message.collection !== undefined && (obj.collection = message.collection);
    if (message.ids) {
      obj.ids = message.ids.map((e) => e);
    } else {
      obj.ids = [];
    }
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    if (message.views) {
      obj.views = message.views.map((e) => e);
    } else {
      obj.views = [];
    }
    if (message.analyzers) {
      obj.analyzers = message.analyzers.map((e) => e);
    } else {
      obj.analyzers = [];
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteRequest>): DeleteRequest {
    return DeleteRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DeleteRequest>): DeleteRequest {
    const message = createBaseDeleteRequest();
    message.collection = object.collection ?? undefined;
    message.ids = object.ids?.map((e) => e) || [];
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    message.views = object.views?.map((e) => e) || [];
    message.analyzers = object.analyzers?.map((e) => e) || [];
    return message;
  },
};

function createBaseDeleteResponse(): DeleteResponse {
  return { status: [], operation_status: undefined };
}

export const DeleteResponse = {
  encode(message: DeleteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.status) {
      Status.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(message.operation_status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.status.push(Status.decode(reader, reader.uint32()));
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

  fromJSON(object: any): DeleteResponse {
    return {
      status: Array.isArray(object?.status) ? object.status.map((e: any) => Status.fromJSON(e)) : [],
      operation_status: isSet(object.operation_status) ? OperationStatus.fromJSON(object.operation_status) : undefined,
    };
  },

  toJSON(message: DeleteResponse): unknown {
    const obj: any = {};
    if (message.status) {
      obj.status = message.status.map((e) => e ? Status.toJSON(e) : undefined);
    } else {
      obj.status = [];
    }
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status ? OperationStatus.toJSON(message.operation_status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<DeleteResponse>): DeleteResponse {
    return DeleteResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DeleteResponse>): DeleteResponse {
    const message = createBaseDeleteResponse();
    message.status = object.status?.map((e) => Status.fromPartial(e)) || [];
    message.operation_status = (object.operation_status !== undefined && object.operation_status !== null)
      ? OperationStatus.fromPartial(object.operation_status)
      : undefined;
    return message;
  },
};

function createBaseResourceList(): ResourceList {
  return { items: [], total_count: undefined, subject: undefined };
}

export const ResourceList = {
  encode(message: ResourceList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      Resource.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== undefined) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(Resource.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.total_count = reader.uint32();
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

  fromJSON(object: any): ResourceList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => Resource.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: ResourceList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? Resource.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ResourceList>): ResourceList {
    return ResourceList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ResourceList>): ResourceList {
    const message = createBaseResourceList();
    message.items = object.items?.map((e) => Resource.fromPartial(e)) || [];
    message.total_count = object.total_count ?? undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseResourceListResponse(): ResourceListResponse {
  return { items: [], total_count: 0, operation_status: undefined };
}

export const ResourceListResponse = {
  encode(message: ResourceListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      ResourceResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(message.operation_status, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(ResourceResponse.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.total_count = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): ResourceListResponse {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => ResourceResponse.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      operation_status: isSet(object.operation_status) ? OperationStatus.fromJSON(object.operation_status) : undefined,
    };
  },

  toJSON(message: ResourceListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? ResourceResponse.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status ? OperationStatus.toJSON(message.operation_status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ResourceListResponse>): ResourceListResponse {
    return ResourceListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ResourceListResponse>): ResourceListResponse {
    const message = createBaseResourceListResponse();
    message.items = object.items?.map((e) => ResourceResponse.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.operation_status = (object.operation_status !== undefined && object.operation_status !== null)
      ? OperationStatus.fromPartial(object.operation_status)
      : undefined;
    return message;
  },
};

function createBaseResourceResponse(): ResourceResponse {
  return { payload: undefined, status: undefined };
}

export const ResourceResponse = {
  encode(message: ResourceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      Resource.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payload = Resource.decode(reader, reader.uint32());
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

  fromJSON(object: any): ResourceResponse {
    return {
      payload: isSet(object.payload) ? Resource.fromJSON(object.payload) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: ResourceResponse): unknown {
    const obj: any = {};
    message.payload !== undefined && (obj.payload = message.payload ? Resource.toJSON(message.payload) : undefined);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ResourceResponse>): ResourceResponse {
    return ResourceResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ResourceResponse>): ResourceResponse {
    const message = createBaseResourceResponse();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? Resource.fromPartial(object.payload)
      : undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBaseResource(): Resource {
  return { id: undefined, meta: undefined };
}

export const Resource = {
  encode(message: Resource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resource {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): Resource {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
    };
  },

  toJSON(message: Resource): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    return obj;
  },

  create(base?: DeepPartial<Resource>): Resource {
    return Resource.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Resource>): Resource {
    const message = createBaseResource();
    message.id = object.id ?? undefined;
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    return message;
  },
};

/** Service provides the CRUD operations */
export type ServiceDefinition = typeof ServiceDefinition;
export const ServiceDefinition = {
  name: "Service",
  fullName: "io.restorecommerce.resourcebase.Service",
  methods: {
    read: {
      name: "Read",
      requestType: ReadRequest,
      requestStream: false,
      responseType: ResourceListResponse,
      responseStream: false,
      options: {},
    },
    create: {
      name: "Create",
      requestType: ResourceList,
      requestStream: false,
      responseType: ResourceListResponse,
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
    update: {
      name: "Update",
      requestType: ResourceList,
      requestStream: false,
      responseType: ResourceListResponse,
      responseStream: false,
      options: {},
    },
    upsert: {
      name: "Upsert",
      requestType: ResourceList,
      requestStream: false,
      responseType: ResourceListResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface ServiceImplementation<CallContextExt = {}> {
  read(request: ReadRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResourceListResponse>>;
  create(request: ResourceList, context: CallContext & CallContextExt): Promise<DeepPartial<ResourceListResponse>>;
  delete(request: DeleteRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteResponse>>;
  update(request: ResourceList, context: CallContext & CallContextExt): Promise<DeepPartial<ResourceListResponse>>;
  upsert(request: ResourceList, context: CallContext & CallContextExt): Promise<DeepPartial<ResourceListResponse>>;
}

export interface ServiceClient<CallOptionsExt = {}> {
  read(request: DeepPartial<ReadRequest>, options?: CallOptions & CallOptionsExt): Promise<ResourceListResponse>;
  create(request: DeepPartial<ResourceList>, options?: CallOptions & CallOptionsExt): Promise<ResourceListResponse>;
  delete(request: DeepPartial<DeleteRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteResponse>;
  update(request: DeepPartial<ResourceList>, options?: CallOptions & CallOptionsExt): Promise<ResourceListResponse>;
  upsert(request: DeepPartial<ResourceList>, options?: CallOptions & CallOptionsExt): Promise<ResourceListResponse>;
}

type ProtoMetaMessageOptions = {
  options?: { [key: string]: any };
  fields?: { [key: string]: { [key: string]: any } };
  oneof?: { [key: string]: { [key: string]: any } };
  nested?: { [key: string]: ProtoMetaMessageOptions };
};

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto;
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
  fileDescriptor: FileDescriptorProto.fromPartial({
    "name": "io/restorecommerce/resource_base.proto",
    "package": "io.restorecommerce.resourcebase",
    "dependency": [
      "google/protobuf/any.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/filter.proto",
    ],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "FieldFilter",
      "field": [{
        "name": "name",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "include",
        "number": 2,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "include",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_name", "options": undefined }, { "name": "_include", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "Sort",
      "field": [{
        "name": "field",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "field",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "order",
        "number": 2,
        "label": 1,
        "type": 14,
        "typeName": ".io.restorecommerce.resourcebase.Sort.SortOrder",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "order",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [{
        "name": "SortOrder",
        "value": [{ "name": "UNSORTED", "number": 0, "options": undefined }, {
          "name": "ASCENDING",
          "number": 1,
          "options": undefined,
        }, { "name": "DESCENDING", "number": 2, "options": undefined }],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_order", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "Filter",
      "field": [{
        "name": "field",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "field",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "operation",
        "number": 2,
        "label": 1,
        "type": 14,
        "typeName": ".io.restorecommerce.resourcebase.Filter.Operation",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "operation",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "value",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "value",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "type",
        "number": 4,
        "label": 1,
        "type": 14,
        "typeName": ".io.restorecommerce.resourcebase.Filter.ValueType",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "type",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "filters",
        "number": 5,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.filter.FilterOp",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "filters",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [{
        "name": "Operation",
        "value": [
          { "name": "eq", "number": 0, "options": undefined },
          { "name": "lt", "number": 1, "options": undefined },
          { "name": "lte", "number": 2, "options": undefined },
          { "name": "gt", "number": 3, "options": undefined },
          { "name": "gte", "number": 4, "options": undefined },
          { "name": "isEmpty", "number": 5, "options": undefined },
          { "name": "iLike", "number": 6, "options": undefined },
          { "name": "in", "number": 7, "options": undefined },
          { "name": "neq", "number": 8, "options": undefined },
        ],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }, {
        "name": "ValueType",
        "value": [
          { "name": "STRING", "number": 0, "options": undefined },
          { "name": "NUMBER", "number": 1, "options": undefined },
          { "name": "BOOLEAN", "number": 2, "options": undefined },
          { "name": "DATE", "number": 3, "options": undefined },
          { "name": "ARRAY", "number": 4, "options": undefined },
        ],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_type", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "FilterOp",
      "field": [{
        "name": "filters",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.resourcebase.Filter",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "filters",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "operator",
        "number": 2,
        "label": 1,
        "type": 14,
        "typeName": ".io.restorecommerce.resourcebase.FilterOp.Operator",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "operator",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [{
        "name": "Operator",
        "value": [{ "name": "and", "number": 0, "options": undefined }, {
          "name": "or",
          "number": 1,
          "options": undefined,
        }],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_operator", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "Search",
      "field": [{
        "name": "search",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "search",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "fields",
        "number": 2,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "fields",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "case_sensitive",
        "number": 3,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "caseSensitive",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_search", "options": undefined }, { "name": "_case_sensitive", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ReadRequest",
      "field": [{
        "name": "offset",
        "number": 1,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "offset",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "limit",
        "number": 2,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "limit",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "sorts",
        "number": 3,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.resourcebase.Sort",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "sorts",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "filters",
        "number": 4,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.resourcebase.FilterOp",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "filters",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "fields",
        "number": 5,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.resourcebase.FieldFilter",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "fields",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "locales_limiter",
        "number": 7,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "localesLimiter",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "custom_queries",
        "number": 8,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "customQueries",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "custom_arguments",
        "number": 9,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.Any",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "customArguments",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "subject",
        "number": 10,
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
        "name": "search",
        "number": 11,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.resourcebase.Search",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "search",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_offset", "options": undefined }, { "name": "_limit", "options": undefined }, {
        "name": "_custom_arguments",
        "options": undefined,
      }, { "name": "_search", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "DeleteRequest",
      "field": [{
        "name": "collection",
        "number": 1,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "collection",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "ids",
        "number": 2,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "ids",
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
      }, {
        "name": "views",
        "number": 4,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "views",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "analyzers",
        "number": 5,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "analyzers",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_collection", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "DeleteResponse",
      "field": [{
        "name": "status",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.status.Status",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "status",
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
      "name": "ResourceList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.resourcebase.Resource",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "items",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "total_count",
        "number": 2,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "totalCount",
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
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_total_count", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ResourceListResponse",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.resourcebase.ResourceResponse",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "items",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "total_count",
        "number": 2,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "totalCount",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "operation_status",
        "number": 3,
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
      "name": "ResourceResponse",
      "field": [{
        "name": "payload",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.resourcebase.Resource",
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
      "name": "Resource",
      "field": [{
        "name": "id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "id",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "meta",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.meta.Meta",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "meta",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_id", "options": undefined }, { "name": "_meta", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "enumType": [],
    "service": [{
      "name": "Service",
      "method": [{
        "name": "Read",
        "inputType": ".io.restorecommerce.resourcebase.ReadRequest",
        "outputType": ".io.restorecommerce.resourcebase.ResourceListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Create",
        "inputType": ".io.restorecommerce.resourcebase.ResourceList",
        "outputType": ".io.restorecommerce.resourcebase.ResourceListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Delete",
        "inputType": ".io.restorecommerce.resourcebase.DeleteRequest",
        "outputType": ".io.restorecommerce.resourcebase.DeleteResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Update",
        "inputType": ".io.restorecommerce.resourcebase.ResourceList",
        "outputType": ".io.restorecommerce.resourcebase.ResourceListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Upsert",
        "inputType": ".io.restorecommerce.resourcebase.ResourceList",
        "outputType": ".io.restorecommerce.resourcebase.ResourceListResponse",
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
        "path": [6, 0],
        "span": [10, 0, 16, 1],
        "leadingComments": " Service provides the CRUD operations\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 2, 4, 1, 2, 0],
        "span": [49, 4, 15],
        "leadingComments": "",
        "trailingComments": " default value type if not specified\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 2, 2, 4],
        "span": [56, 2, 58],
        "leadingComments": "",
        "trailingComments": " for nested filtering and to make optional its in separate filter.proto file\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 4, 2, 0],
        "span": [69, 2, 29],
        "leadingComments": "",
        "trailingComments": " search string\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 4, 2, 1],
        "span": [70, 2, 29],
        "leadingComments": "",
        "trailingComments":
          " list of fields to be searched on entity (if not specified all indexed fields will be searched)\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 4, 2, 2],
        "span": [71, 2, 35],
        "leadingComments": "",
        "trailingComments": " default search is case insensitive\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 5, 2, 3],
        "span": [80, 2, 32],
        "leadingComments": "/ Filter based on fieldName|operation, value|list\n",
        "trailingComments": " repeated filters\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 5, 2, 4],
        "span": [83, 2, 34],
        "leadingComments": "/ Fields selector\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 5, 2, 5],
        "span": [92, 2, 38],
        "leadingComments":
          "* Check the query parameters of HTTP request.\n If query parameter `locales` is given,\n return all corresponding localized values.\n Otherwise, return always the localized value\n with highest priority.\n Can be empty, single locale or multiple locales.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 6, 2, 0],
        "span": [102, 2, 31],
        "leadingComments": "/ Request to purge the whole collection\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 6, 2, 1],
        "span": [104, 2, 26],
        "leadingComments": "/ Delete specified documents\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 6, 2, 3],
        "span": [106, 2, 28],
        "leadingComments": "",
        "trailingComments": " list of views to be dropped\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 6, 2, 4],
        "span": [107, 2, 32],
        "leadingComments": "",
        "trailingComments": " list of analyzers to be deleted\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 8],
        "span": [116, 0, 120, 1],
        "leadingComments": "/ List of resources\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 9],
        "span": [123, 0, 127, 1],
        "leadingComments": " ResourceList response\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 10],
        "span": [130, 0, 133, 1],
        "leadingComments": " resource read response\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 11],
        "span": [136, 0, 139, 1],
        "leadingComments": "/ Example resource\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
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
    ".io.restorecommerce.resourcebase.Search": Search,
    ".io.restorecommerce.resourcebase.ReadRequest": ReadRequest,
    ".io.restorecommerce.resourcebase.DeleteRequest": DeleteRequest,
    ".io.restorecommerce.resourcebase.DeleteResponse": DeleteResponse,
    ".io.restorecommerce.resourcebase.ResourceList": ResourceList,
    ".io.restorecommerce.resourcebase.ResourceListResponse": ResourceListResponse,
    ".io.restorecommerce.resourcebase.ResourceResponse": ResourceResponse,
    ".io.restorecommerce.resourcebase.Resource": Resource,
  },
  dependencies: [protoMetadata1, protoMetadata2, protoMetadata3, protoMetadata4, protoMetadata5],
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
