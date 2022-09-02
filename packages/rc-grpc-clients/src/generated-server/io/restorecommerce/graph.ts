/* eslint-disable */
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { Subject, protoMetadata as protoMetadata2 } from "./auth";
import {
  Any,
  protoMetadata as protoMetadata1,
} from "../../google/protobuf/any";
import { OperationStatus, protoMetadata as protoMetadata3 } from "./status";
import { CallContext, CallOptions } from "nice-grpc-common";
import { protoMetadata as protoMetadata4, Sort } from "./resource_base";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "io.restorecommerce.graph";

export interface TraversalRequest {
  vertices?: Vertices | undefined;
  collection?: Collection | undefined;
  opts?: Options;
  path: boolean;
  subject?: Subject;
  filters: Filters[];
}

export interface Vertices {
  collection_name: string;
  start_vertex_id: string[];
}

export interface Collection {
  collection_name: string;
  limit: number;
  offset: number;
  sort: Sort[];
}

export interface Options {
  /** to include vertices */
  include_vertex: string[];
  /** to exclude vertices */
  exclude_vertex: string[];
  /** to include vertices */
  include_edge: string[];
  /** to exclude vertices */
  exclude_edge: string[];
  /** either inbound or outbound, defaults to outbound direction */
  direction: Options_Direction;
}

export enum Options_Direction {
  OUTBOUND = "OUTBOUND",
  INBOUND = "INBOUND",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function options_DirectionFromJSON(object: any): Options_Direction {
  switch (object) {
    case 0:
    case "OUTBOUND":
      return Options_Direction.OUTBOUND;
    case 1:
    case "INBOUND":
      return Options_Direction.INBOUND;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Options_Direction.UNRECOGNIZED;
  }
}

export function options_DirectionToJSON(object: Options_Direction): string {
  switch (object) {
    case Options_Direction.OUTBOUND:
      return "OUTBOUND";
    case Options_Direction.INBOUND:
      return "INBOUND";
    case Options_Direction.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function options_DirectionToNumber(object: Options_Direction): number {
  switch (object) {
    case Options_Direction.OUTBOUND:
      return 0;
    case Options_Direction.INBOUND:
      return 1;
    case Options_Direction.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface Filters {
  /** entity on which the filters are applied */
  entity: string;
  /** if edge is specified depending on the direction filter are applied only for those entities */
  edge: string;
  filter: Filter[];
  operator: Filters_Operator;
}

export enum Filters_Operator {
  and = "and",
  or = "or",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function filters_OperatorFromJSON(object: any): Filters_Operator {
  switch (object) {
    case 0:
    case "and":
      return Filters_Operator.and;
    case 1:
    case "or":
      return Filters_Operator.or;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Filters_Operator.UNRECOGNIZED;
  }
}

export function filters_OperatorToJSON(object: Filters_Operator): string {
  switch (object) {
    case Filters_Operator.and:
      return "and";
    case Filters_Operator.or:
      return "or";
    case Filters_Operator.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function filters_OperatorToNumber(object: Filters_Operator): number {
  switch (object) {
    case Filters_Operator.and:
      return 0;
    case Filters_Operator.or:
      return 1;
    case Filters_Operator.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface Filter {
  field: string;
  operation: Filter_Operation;
  value: string;
  type: Filter_ValueType;
  filters: Filters[];
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

export interface TraversalResponse {
  /** vertices */
  data?: Any;
  /** traversed vertices paths */
  paths?: Any;
  operation_status?: OperationStatus;
}

function createBaseTraversalRequest(): TraversalRequest {
  return {
    vertices: undefined,
    collection: undefined,
    opts: undefined,
    path: false,
    subject: undefined,
    filters: [],
  };
}

export const TraversalRequest = {
  encode(
    message: TraversalRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.vertices !== undefined) {
      Vertices.encode(message.vertices, writer.uint32(10).fork()).ldelim();
    }
    if (message.collection !== undefined) {
      Collection.encode(message.collection, writer.uint32(18).fork()).ldelim();
    }
    if (message.opts !== undefined) {
      Options.encode(message.opts, writer.uint32(26).fork()).ldelim();
    }
    if (message.path === true) {
      writer.uint32(32).bool(message.path);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.filters) {
      Filters.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TraversalRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTraversalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vertices = Vertices.decode(reader, reader.uint32());
          break;
        case 2:
          message.collection = Collection.decode(reader, reader.uint32());
          break;
        case 3:
          message.opts = Options.decode(reader, reader.uint32());
          break;
        case 4:
          message.path = reader.bool();
          break;
        case 5:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        case 6:
          message.filters.push(Filters.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TraversalRequest {
    return {
      vertices: isSet(object.vertices)
        ? Vertices.fromJSON(object.vertices)
        : undefined,
      collection: isSet(object.collection)
        ? Collection.fromJSON(object.collection)
        : undefined,
      opts: isSet(object.opts) ? Options.fromJSON(object.opts) : undefined,
      path: isSet(object.path) ? Boolean(object.path) : false,
      subject: isSet(object.subject)
        ? Subject.fromJSON(object.subject)
        : undefined,
      filters: Array.isArray(object?.filters)
        ? object.filters.map((e: any) => Filters.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TraversalRequest): unknown {
    const obj: any = {};
    message.vertices !== undefined &&
      (obj.vertices = message.vertices
        ? Vertices.toJSON(message.vertices)
        : undefined);
    message.collection !== undefined &&
      (obj.collection = message.collection
        ? Collection.toJSON(message.collection)
        : undefined);
    message.opts !== undefined &&
      (obj.opts = message.opts ? Options.toJSON(message.opts) : undefined);
    message.path !== undefined && (obj.path = message.path);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    if (message.filters) {
      obj.filters = message.filters.map((e) =>
        e ? Filters.toJSON(e) : undefined
      );
    } else {
      obj.filters = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<TraversalRequest>): TraversalRequest {
    const message = createBaseTraversalRequest();
    message.vertices =
      object.vertices !== undefined && object.vertices !== null
        ? Vertices.fromPartial(object.vertices)
        : undefined;
    message.collection =
      object.collection !== undefined && object.collection !== null
        ? Collection.fromPartial(object.collection)
        : undefined;
    message.opts =
      object.opts !== undefined && object.opts !== null
        ? Options.fromPartial(object.opts)
        : undefined;
    message.path = object.path ?? false;
    message.subject =
      object.subject !== undefined && object.subject !== null
        ? Subject.fromPartial(object.subject)
        : undefined;
    message.filters = object.filters?.map((e) => Filters.fromPartial(e)) || [];
    return message;
  },
};

function createBaseVertices(): Vertices {
  return { collection_name: "", start_vertex_id: [] };
}

export const Vertices = {
  encode(
    message: Vertices,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collection_name !== "") {
      writer.uint32(10).string(message.collection_name);
    }
    for (const v of message.start_vertex_id) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vertices {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVertices();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collection_name = reader.string();
          break;
        case 2:
          message.start_vertex_id.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Vertices {
    return {
      collection_name: isSet(object.collection_name)
        ? String(object.collection_name)
        : "",
      start_vertex_id: Array.isArray(object?.start_vertex_id)
        ? object.start_vertex_id.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: Vertices): unknown {
    const obj: any = {};
    message.collection_name !== undefined &&
      (obj.collection_name = message.collection_name);
    if (message.start_vertex_id) {
      obj.start_vertex_id = message.start_vertex_id.map((e) => e);
    } else {
      obj.start_vertex_id = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Vertices>): Vertices {
    const message = createBaseVertices();
    message.collection_name = object.collection_name ?? "";
    message.start_vertex_id = object.start_vertex_id?.map((e) => e) || [];
    return message;
  },
};

function createBaseCollection(): Collection {
  return { collection_name: "", limit: 0, offset: 0, sort: [] };
}

export const Collection = {
  encode(
    message: Collection,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collection_name !== "") {
      writer.uint32(10).string(message.collection_name);
    }
    if (message.limit !== 0) {
      writer.uint32(16).uint32(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(24).uint32(message.offset);
    }
    for (const v of message.sort) {
      Sort.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Collection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collection_name = reader.string();
          break;
        case 2:
          message.limit = reader.uint32();
          break;
        case 3:
          message.offset = reader.uint32();
          break;
        case 4:
          message.sort.push(Sort.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Collection {
    return {
      collection_name: isSet(object.collection_name)
        ? String(object.collection_name)
        : "",
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
      sort: Array.isArray(object?.sort)
        ? object.sort.map((e: any) => Sort.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Collection): unknown {
    const obj: any = {};
    message.collection_name !== undefined &&
      (obj.collection_name = message.collection_name);
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    message.offset !== undefined && (obj.offset = Math.round(message.offset));
    if (message.sort) {
      obj.sort = message.sort.map((e) => (e ? Sort.toJSON(e) : undefined));
    } else {
      obj.sort = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Collection>): Collection {
    const message = createBaseCollection();
    message.collection_name = object.collection_name ?? "";
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    message.sort = object.sort?.map((e) => Sort.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOptions(): Options {
  return {
    include_vertex: [],
    exclude_vertex: [],
    include_edge: [],
    exclude_edge: [],
    direction: Options_Direction.OUTBOUND,
  };
}

export const Options = {
  encode(
    message: Options,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.include_vertex) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.exclude_vertex) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.include_edge) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.exclude_edge) {
      writer.uint32(34).string(v!);
    }
    if (message.direction !== Options_Direction.OUTBOUND) {
      writer.uint32(40).int32(options_DirectionToNumber(message.direction));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Options {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.include_vertex.push(reader.string());
          break;
        case 2:
          message.exclude_vertex.push(reader.string());
          break;
        case 3:
          message.include_edge.push(reader.string());
          break;
        case 4:
          message.exclude_edge.push(reader.string());
          break;
        case 5:
          message.direction = options_DirectionFromJSON(reader.int32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Options {
    return {
      include_vertex: Array.isArray(object?.include_vertex)
        ? object.include_vertex.map((e: any) => String(e))
        : [],
      exclude_vertex: Array.isArray(object?.exclude_vertex)
        ? object.exclude_vertex.map((e: any) => String(e))
        : [],
      include_edge: Array.isArray(object?.include_edge)
        ? object.include_edge.map((e: any) => String(e))
        : [],
      exclude_edge: Array.isArray(object?.exclude_edge)
        ? object.exclude_edge.map((e: any) => String(e))
        : [],
      direction: isSet(object.direction)
        ? options_DirectionFromJSON(object.direction)
        : Options_Direction.OUTBOUND,
    };
  },

  toJSON(message: Options): unknown {
    const obj: any = {};
    if (message.include_vertex) {
      obj.include_vertex = message.include_vertex.map((e) => e);
    } else {
      obj.include_vertex = [];
    }
    if (message.exclude_vertex) {
      obj.exclude_vertex = message.exclude_vertex.map((e) => e);
    } else {
      obj.exclude_vertex = [];
    }
    if (message.include_edge) {
      obj.include_edge = message.include_edge.map((e) => e);
    } else {
      obj.include_edge = [];
    }
    if (message.exclude_edge) {
      obj.exclude_edge = message.exclude_edge.map((e) => e);
    } else {
      obj.exclude_edge = [];
    }
    message.direction !== undefined &&
      (obj.direction = options_DirectionToJSON(message.direction));
    return obj;
  },

  fromPartial(object: DeepPartial<Options>): Options {
    const message = createBaseOptions();
    message.include_vertex = object.include_vertex?.map((e) => e) || [];
    message.exclude_vertex = object.exclude_vertex?.map((e) => e) || [];
    message.include_edge = object.include_edge?.map((e) => e) || [];
    message.exclude_edge = object.exclude_edge?.map((e) => e) || [];
    message.direction = object.direction ?? Options_Direction.OUTBOUND;
    return message;
  },
};

function createBaseFilters(): Filters {
  return { entity: "", edge: "", filter: [], operator: Filters_Operator.and };
}

export const Filters = {
  encode(
    message: Filters,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(10).string(message.entity);
    }
    if (message.edge !== "") {
      writer.uint32(18).string(message.edge);
    }
    for (const v of message.filter) {
      Filter.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.operator !== Filters_Operator.and) {
      writer.uint32(32).int32(filters_OperatorToNumber(message.operator));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Filters {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFilters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entity = reader.string();
          break;
        case 2:
          message.edge = reader.string();
          break;
        case 3:
          message.filter.push(Filter.decode(reader, reader.uint32()));
          break;
        case 4:
          message.operator = filters_OperatorFromJSON(reader.int32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Filters {
    return {
      entity: isSet(object.entity) ? String(object.entity) : "",
      edge: isSet(object.edge) ? String(object.edge) : "",
      filter: Array.isArray(object?.filter)
        ? object.filter.map((e: any) => Filter.fromJSON(e))
        : [],
      operator: isSet(object.operator)
        ? filters_OperatorFromJSON(object.operator)
        : Filters_Operator.and,
    };
  },

  toJSON(message: Filters): unknown {
    const obj: any = {};
    message.entity !== undefined && (obj.entity = message.entity);
    message.edge !== undefined && (obj.edge = message.edge);
    if (message.filter) {
      obj.filter = message.filter.map((e) =>
        e ? Filter.toJSON(e) : undefined
      );
    } else {
      obj.filter = [];
    }
    message.operator !== undefined &&
      (obj.operator = filters_OperatorToJSON(message.operator));
    return obj;
  },

  fromPartial(object: DeepPartial<Filters>): Filters {
    const message = createBaseFilters();
    message.entity = object.entity ?? "";
    message.edge = object.edge ?? "";
    message.filter = object.filter?.map((e) => Filter.fromPartial(e)) || [];
    message.operator = object.operator ?? Filters_Operator.and;
    return message;
  },
};

function createBaseFilter(): Filter {
  return {
    field: "",
    operation: Filter_Operation.eq,
    value: "",
    type: Filter_ValueType.STRING,
    filters: [],
  };
}

export const Filter = {
  encode(
    message: Filter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.field !== "") {
      writer.uint32(10).string(message.field);
    }
    if (message.operation !== Filter_Operation.eq) {
      writer.uint32(16).int32(filter_OperationToNumber(message.operation));
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    if (message.type !== Filter_ValueType.STRING) {
      writer.uint32(32).int32(filter_ValueTypeToNumber(message.type));
    }
    for (const v of message.filters) {
      Filters.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Filter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.field = reader.string();
          break;
        case 2:
          message.operation = filter_OperationFromJSON(reader.int32());
          break;
        case 3:
          message.value = reader.string();
          break;
        case 4:
          message.type = filter_ValueTypeFromJSON(reader.int32());
          break;
        case 5:
          message.filters.push(Filters.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Filter {
    return {
      field: isSet(object.field) ? String(object.field) : "",
      operation: isSet(object.operation)
        ? filter_OperationFromJSON(object.operation)
        : Filter_Operation.eq,
      value: isSet(object.value) ? String(object.value) : "",
      type: isSet(object.type)
        ? filter_ValueTypeFromJSON(object.type)
        : Filter_ValueType.STRING,
      filters: Array.isArray(object?.filters)
        ? object.filters.map((e: any) => Filters.fromJSON(e))
        : [],
    };
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
        e ? Filters.toJSON(e) : undefined
      );
    } else {
      obj.filters = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Filter>): Filter {
    const message = createBaseFilter();
    message.field = object.field ?? "";
    message.operation = object.operation ?? Filter_Operation.eq;
    message.value = object.value ?? "";
    message.type = object.type ?? Filter_ValueType.STRING;
    message.filters = object.filters?.map((e) => Filters.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTraversalResponse(): TraversalResponse {
  return { data: undefined, paths: undefined, operation_status: undefined };
}

export const TraversalResponse = {
  encode(
    message: TraversalResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.paths !== undefined) {
      Any.encode(message.paths, writer.uint32(18).fork()).ldelim();
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(
        message.operation_status,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TraversalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTraversalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.paths = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.operation_status = OperationStatus.decode(
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

  fromJSON(object: any): TraversalResponse {
    return {
      data: isSet(object.data) ? Any.fromJSON(object.data) : undefined,
      paths: isSet(object.paths) ? Any.fromJSON(object.paths) : undefined,
      operation_status: isSet(object.operation_status)
        ? OperationStatus.fromJSON(object.operation_status)
        : undefined,
    };
  },

  toJSON(message: TraversalResponse): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    message.paths !== undefined &&
      (obj.paths = message.paths ? Any.toJSON(message.paths) : undefined);
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status
        ? OperationStatus.toJSON(message.operation_status)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TraversalResponse>): TraversalResponse {
    const message = createBaseTraversalResponse();
    message.data =
      object.data !== undefined && object.data !== null
        ? Any.fromPartial(object.data)
        : undefined;
    message.paths =
      object.paths !== undefined && object.paths !== null
        ? Any.fromPartial(object.paths)
        : undefined;
    message.operation_status =
      object.operation_status !== undefined && object.operation_status !== null
        ? OperationStatus.fromPartial(object.operation_status)
        : undefined;
    return message;
  },
};

/** Service provides the CRUD operations */
export type ServiceDefinition = typeof ServiceDefinition;
export const ServiceDefinition = {
  name: "Service",
  fullName: "io.restorecommerce.graph.Service",
  methods: {
    traversal: {
      name: "Traversal",
      requestType: TraversalRequest,
      requestStream: false,
      responseType: TraversalResponse,
      responseStream: true,
      options: {},
    },
  },
} as const;

export interface ServiceServiceImplementation<CallContextExt = {}> {
  traversal(
    request: TraversalRequest,
    context: CallContext & CallContextExt
  ): ServerStreamingMethodResult<DeepPartial<TraversalResponse>>;
}

export interface ServiceClient<CallOptionsExt = {}> {
  traversal(
    request: DeepPartial<TraversalRequest>,
    options?: CallOptions & CallOptionsExt
  ): AsyncIterable<TraversalResponse>;
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
      [key: string]: {
        options?: { [key: string]: any };
        methods?: { [key: string]: { [key: string]: any } };
      };
    };
    messages?: {
      [key: string]: ProtoMetaMessageOptions;
    };
    enums?: {
      [key: string]: {
        options?: { [key: string]: any };
        values?: { [key: string]: { [key: string]: any } };
      };
    };
  };
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto1.fromPartial({
    name: "io/restorecommerce/graph.proto",
    package: "io.restorecommerce.graph",
    dependency: [
      "google/protobuf/any.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/resource_base.proto",
    ],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        name: "TraversalRequest",
        field: [
          {
            name: "vertices",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.graph.Vertices",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "vertices",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "collection",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.graph.Collection",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "collection",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "opts",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.graph.Options",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "opts",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "path",
            number: 4,
            label: 1,
            type: 8,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "path",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "subject",
            number: 5,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "subject",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "filters",
            number: 6,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.graph.Filters",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "filters",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [{ name: "vertex", options: undefined }],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "Vertices",
        field: [
          {
            name: "collection_name",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "collectionName",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "start_vertex_id",
            number: 2,
            label: 3,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "startVertexId",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "Collection",
        field: [
          {
            name: "collection_name",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "collectionName",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "limit",
            number: 2,
            label: 1,
            type: 13,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "limit",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "offset",
            number: 3,
            label: 1,
            type: 13,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "offset",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "sort",
            number: 4,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.resourcebase.Sort",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "sort",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "Options",
        field: [
          {
            name: "include_vertex",
            number: 1,
            label: 3,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "includeVertex",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "exclude_vertex",
            number: 2,
            label: 3,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "excludeVertex",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "include_edge",
            number: 3,
            label: 3,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "includeEdge",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "exclude_edge",
            number: 4,
            label: 3,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "excludeEdge",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "direction",
            number: 5,
            label: 1,
            type: 14,
            typeName: ".io.restorecommerce.graph.Options.Direction",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "direction",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [
          {
            name: "Direction",
            value: [
              { name: "OUTBOUND", number: 0, options: undefined },
              { name: "INBOUND", number: 1, options: undefined },
            ],
            options: undefined,
            reservedRange: [],
            reservedName: [],
          },
        ],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "Filters",
        field: [
          {
            name: "entity",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "entity",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "edge",
            number: 2,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "edge",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "filter",
            number: 3,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.graph.Filter",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "filter",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "operator",
            number: 4,
            label: 1,
            type: 14,
            typeName: ".io.restorecommerce.graph.Filters.Operator",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "operator",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [
          {
            name: "Operator",
            value: [
              { name: "and", number: 0, options: undefined },
              { name: "or", number: 1, options: undefined },
            ],
            options: undefined,
            reservedRange: [],
            reservedName: [],
          },
        ],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "Filter",
        field: [
          {
            name: "field",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "field",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "operation",
            number: 2,
            label: 1,
            type: 14,
            typeName: ".io.restorecommerce.graph.Filter.Operation",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "operation",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "value",
            number: 3,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "value",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "type",
            number: 4,
            label: 1,
            type: 14,
            typeName: ".io.restorecommerce.graph.Filter.ValueType",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "type",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "filters",
            number: 5,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.graph.Filters",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "filters",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [
          {
            name: "Operation",
            value: [
              { name: "eq", number: 0, options: undefined },
              { name: "lt", number: 1, options: undefined },
              { name: "lte", number: 2, options: undefined },
              { name: "gt", number: 3, options: undefined },
              { name: "gte", number: 4, options: undefined },
              { name: "isEmpty", number: 5, options: undefined },
              { name: "iLike", number: 6, options: undefined },
              { name: "in", number: 7, options: undefined },
              { name: "neq", number: 8, options: undefined },
            ],
            options: undefined,
            reservedRange: [],
            reservedName: [],
          },
          {
            name: "ValueType",
            value: [
              { name: "STRING", number: 0, options: undefined },
              { name: "NUMBER", number: 1, options: undefined },
              { name: "BOOLEAN", number: 2, options: undefined },
              { name: "DATE", number: 3, options: undefined },
              { name: "ARRAY", number: 4, options: undefined },
            ],
            options: undefined,
            reservedRange: [],
            reservedName: [],
          },
        ],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "TraversalResponse",
        field: [
          {
            name: "data",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".google.protobuf.Any",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "data",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "paths",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".google.protobuf.Any",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "paths",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "operation_status",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.OperationStatus",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "operationStatus",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
    ],
    enumType: [],
    service: [
      {
        name: "Service",
        method: [
          {
            name: "Traversal",
            inputType: ".io.restorecommerce.graph.TraversalRequest",
            outputType: ".io.restorecommerce.graph.TraversalResponse",
            options: undefined,
            clientStreaming: false,
            serverStreaming: true,
          },
        ],
        options: undefined,
      },
    ],
    extension: [],
    options: undefined,
    sourceCodeInfo: {
      location: [
        {
          path: [6, 0],
          span: [9, 0, 11, 1],
          leadingComments: " Service provides the CRUD operations\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [4, 0, 8, 0],
          span: [15, 2, 18, 3],
          leadingComments: " Document handle either _id or _key value\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [4, 3, 2, 0],
          span: [38, 1, 36],
          leadingComments: "",
          trailingComments: " to include vertices\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 3, 2, 1],
          span: [39, 1, 36],
          leadingComments: "",
          trailingComments: " to exclude vertices\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 3, 2, 2],
          span: [40, 1, 34],
          leadingComments: "",
          trailingComments: " to include vertices\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 3, 2, 3],
          span: [41, 1, 34],
          leadingComments: "",
          trailingComments: " to exclude vertices\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 3, 2, 4],
          span: [42, 1, 25],
          leadingComments: "",
          trailingComments:
            " either inbound or outbound, defaults to outbound direction\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 4, 2, 0],
          span: [51, 2, 20],
          leadingComments: "",
          trailingComments: " entity on which the filters are applied\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 4, 2, 1],
          span: [52, 2, 18],
          leadingComments: "",
          trailingComments:
            " if edge is specified depending on the direction filter are applied only for those entities\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 5, 4, 1, 2, 0],
          span: [77, 4, 15],
          leadingComments: "",
          trailingComments: " default value type if not specified\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 6, 2, 0],
          span: [88, 2, 31],
          leadingComments: "",
          trailingComments: " vertices\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 6, 2, 1],
          span: [89, 2, 32],
          leadingComments: "",
          trailingComments: " traversed vertices paths\n",
          leadingDetachedComments: [],
        },
      ],
    },
    syntax: "proto3",
  }),
  references: {
    ".io.restorecommerce.graph.TraversalRequest": TraversalRequest,
    ".io.restorecommerce.graph.Vertices": Vertices,
    ".io.restorecommerce.graph.Collection": Collection,
    ".io.restorecommerce.graph.Options": Options,
    ".io.restorecommerce.graph.Options.Direction": Options_Direction,
    ".io.restorecommerce.graph.Filters": Filters,
    ".io.restorecommerce.graph.Filters.Operator": Filters_Operator,
    ".io.restorecommerce.graph.Filter": Filter,
    ".io.restorecommerce.graph.Filter.Operation": Filter_Operation,
    ".io.restorecommerce.graph.Filter.ValueType": Filter_ValueType,
    ".io.restorecommerce.graph.TraversalResponse": TraversalResponse,
  },
  dependencies: [
    protoMetadata1,
    protoMetadata2,
    protoMetadata3,
    protoMetadata4,
  ],
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export type ServerStreamingMethodResult<Response> = {
  [Symbol.asyncIterator](): AsyncIterator<Response, void>;
};