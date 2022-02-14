/* eslint-disable */
import { FileDescriptorProto } from "ts-proto-descriptors/google/protobuf/descriptor";
import {
  Subject,
  protoMetadata as protoMetadata2,
} from "../../io/restorecommerce/auth";
import {
  Any,
  protoMetadata as protoMetadata1,
} from "../../google/protobuf/any";
import {
  OperationStatus,
  protoMetadata as protoMetadata3,
} from "../../io/restorecommerce/status";
import { Observable } from "rxjs";
import {
  protoMetadata as protoMetadata4,
  Sort,
} from "../../io/restorecommerce/resource_base";
import { Writer, Reader } from "protobufjs/minimal";

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
  collectionName: string;
  startVertexId: string[];
}

export interface Collection {
  collectionName: string;
  limit: number;
  offset: number;
  sort: Sort[];
}

export interface Options {
  /** to include vertices */
  includeVertex: string[];
  /** to exclude vertices */
  excludeVertex: string[];
  /** to include vertices */
  includeEdge: string[];
  /** to exclude vertices */
  excludeEdge: string[];
  /** either inbound or outbound, defaults to outbound direction */
  direction: Options_Direction;
}

export enum Options_Direction {
  OUTBOUND = 0,
  INBOUND = 1,
  UNRECOGNIZED = -1,
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
    default:
      return "UNKNOWN";
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
  and = 0,
  or = 1,
  UNRECOGNIZED = -1,
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
    default:
      return "UNKNOWN";
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

export interface TraversalResponse {
  /** vertices */
  data?: Any;
  /** traversed vertices paths */
  paths?: Any;
  operationStatus?: OperationStatus;
}

const baseTraversalRequest: object = { path: false };

export const TraversalRequest = {
  encode(message: TraversalRequest, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): TraversalRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseTraversalRequest
    ) as TraversalRequest;
    message.filters = [];
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
    const message = globalThis.Object.create(
      baseTraversalRequest
    ) as TraversalRequest;
    message.filters = [];
    if (object.vertices !== undefined && object.vertices !== null) {
      message.vertices = Vertices.fromJSON(object.vertices);
    } else {
      message.vertices = undefined;
    }
    if (object.collection !== undefined && object.collection !== null) {
      message.collection = Collection.fromJSON(object.collection);
    } else {
      message.collection = undefined;
    }
    if (object.opts !== undefined && object.opts !== null) {
      message.opts = Options.fromJSON(object.opts);
    } else {
      message.opts = undefined;
    }
    if (object.path !== undefined && object.path !== null) {
      message.path = Boolean(object.path);
    } else {
      message.path = false;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    if (object.filters !== undefined && object.filters !== null) {
      for (const e of object.filters) {
        message.filters.push(Filters.fromJSON(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<TraversalRequest>): TraversalRequest {
    const message = { ...baseTraversalRequest } as TraversalRequest;
    message.filters = [];
    if (object.vertices !== undefined && object.vertices !== null) {
      message.vertices = Vertices.fromPartial(object.vertices);
    } else {
      message.vertices = undefined;
    }
    if (object.collection !== undefined && object.collection !== null) {
      message.collection = Collection.fromPartial(object.collection);
    } else {
      message.collection = undefined;
    }
    if (object.opts !== undefined && object.opts !== null) {
      message.opts = Options.fromPartial(object.opts);
    } else {
      message.opts = undefined;
    }
    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    } else {
      message.path = false;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    if (object.filters !== undefined && object.filters !== null) {
      for (const e of object.filters) {
        message.filters.push(Filters.fromPartial(e));
      }
    }
    return message;
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
};

const baseVertices: object = { collectionName: "", startVertexId: "" };

export const Vertices = {
  encode(message: Vertices, writer: Writer = Writer.create()): Writer {
    if (message.collectionName !== "") {
      writer.uint32(10).string(message.collectionName);
    }
    for (const v of message.startVertexId) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Vertices {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseVertices) as Vertices;
    message.startVertexId = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionName = reader.string();
          break;
        case 2:
          message.startVertexId.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Vertices {
    const message = globalThis.Object.create(baseVertices) as Vertices;
    message.startVertexId = [];
    if (object.collectionName !== undefined && object.collectionName !== null) {
      message.collectionName = String(object.collectionName);
    } else {
      message.collectionName = "";
    }
    if (object.startVertexId !== undefined && object.startVertexId !== null) {
      for (const e of object.startVertexId) {
        message.startVertexId.push(String(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Vertices>): Vertices {
    const message = { ...baseVertices } as Vertices;
    message.startVertexId = [];
    if (object.collectionName !== undefined && object.collectionName !== null) {
      message.collectionName = object.collectionName;
    } else {
      message.collectionName = "";
    }
    if (object.startVertexId !== undefined && object.startVertexId !== null) {
      for (const e of object.startVertexId) {
        message.startVertexId.push(e);
      }
    }
    return message;
  },

  toJSON(message: Vertices): unknown {
    const obj: any = {};
    message.collectionName !== undefined &&
      (obj.collectionName = message.collectionName);
    if (message.startVertexId) {
      obj.startVertexId = message.startVertexId.map((e) => e);
    } else {
      obj.startVertexId = [];
    }
    return obj;
  },
};

const baseCollection: object = { collectionName: "", limit: 0, offset: 0 };

export const Collection = {
  encode(message: Collection, writer: Writer = Writer.create()): Writer {
    if (message.collectionName !== "") {
      writer.uint32(10).string(message.collectionName);
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

  decode(input: Reader | Uint8Array, length?: number): Collection {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseCollection) as Collection;
    message.sort = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionName = reader.string();
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
    const message = globalThis.Object.create(baseCollection) as Collection;
    message.sort = [];
    if (object.collectionName !== undefined && object.collectionName !== null) {
      message.collectionName = String(object.collectionName);
    } else {
      message.collectionName = "";
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = Number(object.limit);
    } else {
      message.limit = 0;
    }
    if (object.offset !== undefined && object.offset !== null) {
      message.offset = Number(object.offset);
    } else {
      message.offset = 0;
    }
    if (object.sort !== undefined && object.sort !== null) {
      for (const e of object.sort) {
        message.sort.push(Sort.fromJSON(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Collection>): Collection {
    const message = { ...baseCollection } as Collection;
    message.sort = [];
    if (object.collectionName !== undefined && object.collectionName !== null) {
      message.collectionName = object.collectionName;
    } else {
      message.collectionName = "";
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = object.limit;
    } else {
      message.limit = 0;
    }
    if (object.offset !== undefined && object.offset !== null) {
      message.offset = object.offset;
    } else {
      message.offset = 0;
    }
    if (object.sort !== undefined && object.sort !== null) {
      for (const e of object.sort) {
        message.sort.push(Sort.fromPartial(e));
      }
    }
    return message;
  },

  toJSON(message: Collection): unknown {
    const obj: any = {};
    message.collectionName !== undefined &&
      (obj.collectionName = message.collectionName);
    message.limit !== undefined && (obj.limit = message.limit);
    message.offset !== undefined && (obj.offset = message.offset);
    if (message.sort) {
      obj.sort = message.sort.map((e) => (e ? Sort.toJSON(e) : undefined));
    } else {
      obj.sort = [];
    }
    return obj;
  },
};

const baseOptions: object = {
  includeVertex: "",
  excludeVertex: "",
  includeEdge: "",
  excludeEdge: "",
  direction: 0,
};

export const Options = {
  encode(message: Options, writer: Writer = Writer.create()): Writer {
    for (const v of message.includeVertex) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.excludeVertex) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.includeEdge) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.excludeEdge) {
      writer.uint32(34).string(v!);
    }
    if (message.direction !== 0) {
      writer.uint32(40).int32(message.direction);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Options {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseOptions) as Options;
    message.includeVertex = [];
    message.excludeVertex = [];
    message.includeEdge = [];
    message.excludeEdge = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.includeVertex.push(reader.string());
          break;
        case 2:
          message.excludeVertex.push(reader.string());
          break;
        case 3:
          message.includeEdge.push(reader.string());
          break;
        case 4:
          message.excludeEdge.push(reader.string());
          break;
        case 5:
          message.direction = reader.int32() as any;
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
    message.includeVertex = [];
    message.excludeVertex = [];
    message.includeEdge = [];
    message.excludeEdge = [];
    if (object.includeVertex !== undefined && object.includeVertex !== null) {
      for (const e of object.includeVertex) {
        message.includeVertex.push(String(e));
      }
    }
    if (object.excludeVertex !== undefined && object.excludeVertex !== null) {
      for (const e of object.excludeVertex) {
        message.excludeVertex.push(String(e));
      }
    }
    if (object.includeEdge !== undefined && object.includeEdge !== null) {
      for (const e of object.includeEdge) {
        message.includeEdge.push(String(e));
      }
    }
    if (object.excludeEdge !== undefined && object.excludeEdge !== null) {
      for (const e of object.excludeEdge) {
        message.excludeEdge.push(String(e));
      }
    }
    if (object.direction !== undefined && object.direction !== null) {
      message.direction = options_DirectionFromJSON(object.direction);
    } else {
      message.direction = 0;
    }
    return message;
  },

  fromPartial(object: DeepPartial<Options>): Options {
    const message = { ...baseOptions } as Options;
    message.includeVertex = [];
    message.excludeVertex = [];
    message.includeEdge = [];
    message.excludeEdge = [];
    if (object.includeVertex !== undefined && object.includeVertex !== null) {
      for (const e of object.includeVertex) {
        message.includeVertex.push(e);
      }
    }
    if (object.excludeVertex !== undefined && object.excludeVertex !== null) {
      for (const e of object.excludeVertex) {
        message.excludeVertex.push(e);
      }
    }
    if (object.includeEdge !== undefined && object.includeEdge !== null) {
      for (const e of object.includeEdge) {
        message.includeEdge.push(e);
      }
    }
    if (object.excludeEdge !== undefined && object.excludeEdge !== null) {
      for (const e of object.excludeEdge) {
        message.excludeEdge.push(e);
      }
    }
    if (object.direction !== undefined && object.direction !== null) {
      message.direction = object.direction;
    } else {
      message.direction = 0;
    }
    return message;
  },

  toJSON(message: Options): unknown {
    const obj: any = {};
    if (message.includeVertex) {
      obj.includeVertex = message.includeVertex.map((e) => e);
    } else {
      obj.includeVertex = [];
    }
    if (message.excludeVertex) {
      obj.excludeVertex = message.excludeVertex.map((e) => e);
    } else {
      obj.excludeVertex = [];
    }
    if (message.includeEdge) {
      obj.includeEdge = message.includeEdge.map((e) => e);
    } else {
      obj.includeEdge = [];
    }
    if (message.excludeEdge) {
      obj.excludeEdge = message.excludeEdge.map((e) => e);
    } else {
      obj.excludeEdge = [];
    }
    message.direction !== undefined &&
      (obj.direction = options_DirectionToJSON(message.direction));
    return obj;
  },
};

const baseFilters: object = { entity: "", edge: "", operator: 0 };

export const Filters = {
  encode(message: Filters, writer: Writer = Writer.create()): Writer {
    if (message.entity !== "") {
      writer.uint32(10).string(message.entity);
    }
    if (message.edge !== "") {
      writer.uint32(18).string(message.edge);
    }
    for (const v of message.filter) {
      Filter.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.operator !== 0) {
      writer.uint32(32).int32(message.operator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Filters {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseFilters) as Filters;
    message.filter = [];
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
          message.operator = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Filters {
    const message = globalThis.Object.create(baseFilters) as Filters;
    message.filter = [];
    if (object.entity !== undefined && object.entity !== null) {
      message.entity = String(object.entity);
    } else {
      message.entity = "";
    }
    if (object.edge !== undefined && object.edge !== null) {
      message.edge = String(object.edge);
    } else {
      message.edge = "";
    }
    if (object.filter !== undefined && object.filter !== null) {
      for (const e of object.filter) {
        message.filter.push(Filter.fromJSON(e));
      }
    }
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = filters_OperatorFromJSON(object.operator);
    } else {
      message.operator = 0;
    }
    return message;
  },

  fromPartial(object: DeepPartial<Filters>): Filters {
    const message = { ...baseFilters } as Filters;
    message.filter = [];
    if (object.entity !== undefined && object.entity !== null) {
      message.entity = object.entity;
    } else {
      message.entity = "";
    }
    if (object.edge !== undefined && object.edge !== null) {
      message.edge = object.edge;
    } else {
      message.edge = "";
    }
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
      Filters.encode(v!, writer.uint32(42).fork()).ldelim();
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
        message.filters.push(Filters.fromJSON(e));
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
        message.filters.push(Filters.fromPartial(e));
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
        e ? Filters.toJSON(e) : undefined
      );
    } else {
      obj.filters = [];
    }
    return obj;
  },
};

const baseTraversalResponse: object = {};

export const TraversalResponse = {
  encode(message: TraversalResponse, writer: Writer = Writer.create()): Writer {
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.paths !== undefined) {
      Any.encode(message.paths, writer.uint32(18).fork()).ldelim();
    }
    if (message.operationStatus !== undefined) {
      OperationStatus.encode(
        message.operationStatus,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TraversalResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseTraversalResponse
    ) as TraversalResponse;
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

  fromJSON(object: any): TraversalResponse {
    const message = globalThis.Object.create(
      baseTraversalResponse
    ) as TraversalResponse;
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromJSON(object.data);
    } else {
      message.data = undefined;
    }
    if (object.paths !== undefined && object.paths !== null) {
      message.paths = Any.fromJSON(object.paths);
    } else {
      message.paths = undefined;
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

  fromPartial(object: DeepPartial<TraversalResponse>): TraversalResponse {
    const message = { ...baseTraversalResponse } as TraversalResponse;
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromPartial(object.data);
    } else {
      message.data = undefined;
    }
    if (object.paths !== undefined && object.paths !== null) {
      message.paths = Any.fromPartial(object.paths);
    } else {
      message.paths = undefined;
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

  toJSON(message: TraversalResponse): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    message.paths !== undefined &&
      (obj.paths = message.paths ? Any.toJSON(message.paths) : undefined);
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus
        ? OperationStatus.toJSON(message.operationStatus)
        : undefined);
    return obj;
  },
};

/** Service provides the CRUD operations */
export interface Service {
  Traversal(request: TraversalRequest): Observable<TraversalResponse>;
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
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/resource_base.proto",
    ],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        field: [
          {
            name: "vertices",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.graph.Vertices",
            oneofIndex: 0,
            jsonName: "vertices",
          },
          {
            name: "collection",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.graph.Collection",
            oneofIndex: 0,
            jsonName: "collection",
          },
          {
            name: "opts",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.graph.Options",
            jsonName: "opts",
          },
          { name: "path", number: 4, label: 1, type: 8, jsonName: "path" },
          {
            name: "subject",
            number: 5,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            jsonName: "subject",
          },
          {
            name: "filters",
            number: 6,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.graph.Filters",
            jsonName: "filters",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [{ name: "vertex" }],
        reservedRange: [],
        reservedName: [],
        name: "TraversalRequest",
      },
      {
        field: [
          {
            name: "collection_name",
            number: 1,
            label: 1,
            type: 9,
            jsonName: "collectionName",
          },
          {
            name: "start_vertex_id",
            number: 2,
            label: 3,
            type: 9,
            jsonName: "startVertexId",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Vertices",
      },
      {
        field: [
          {
            name: "collection_name",
            number: 1,
            label: 1,
            type: 9,
            jsonName: "collectionName",
          },
          { name: "limit", number: 2, label: 1, type: 13, jsonName: "limit" },
          { name: "offset", number: 3, label: 1, type: 13, jsonName: "offset" },
          {
            name: "sort",
            number: 4,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.resourcebase.Sort",
            jsonName: "sort",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Collection",
      },
      {
        field: [
          {
            name: "include_vertex",
            number: 1,
            label: 3,
            type: 9,
            jsonName: "includeVertex",
          },
          {
            name: "exclude_vertex",
            number: 2,
            label: 3,
            type: 9,
            jsonName: "excludeVertex",
          },
          {
            name: "include_edge",
            number: 3,
            label: 3,
            type: 9,
            jsonName: "includeEdge",
          },
          {
            name: "exclude_edge",
            number: 4,
            label: 3,
            type: 9,
            jsonName: "excludeEdge",
          },
          {
            name: "direction",
            number: 5,
            label: 1,
            type: 14,
            typeName: ".io.restorecommerce.graph.Options.Direction",
            jsonName: "direction",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [
          {
            value: [
              { name: "OUTBOUND", number: 0 },
              { name: "INBOUND", number: 1 },
            ],
            reservedRange: [],
            reservedName: [],
            name: "Direction",
          },
        ],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Options",
      },
      {
        field: [
          { name: "entity", number: 1, label: 1, type: 9, jsonName: "entity" },
          { name: "edge", number: 2, label: 1, type: 9, jsonName: "edge" },
          {
            name: "filter",
            number: 3,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.graph.Filter",
            jsonName: "filter",
          },
          {
            name: "operator",
            number: 4,
            label: 1,
            type: 14,
            typeName: ".io.restorecommerce.graph.Filters.Operator",
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
        name: "Filters",
      },
      {
        field: [
          { name: "field", number: 1, label: 1, type: 9, jsonName: "field" },
          {
            name: "operation",
            number: 2,
            label: 1,
            type: 14,
            typeName: ".io.restorecommerce.graph.Filter.Operation",
            jsonName: "operation",
          },
          { name: "value", number: 3, label: 1, type: 9, jsonName: "value" },
          {
            name: "type",
            number: 4,
            label: 1,
            type: 14,
            typeName: ".io.restorecommerce.graph.Filter.ValueType",
            jsonName: "type",
          },
          {
            name: "filters",
            number: 5,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.graph.Filters",
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
            name: "data",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".google.protobuf.Any",
            jsonName: "data",
          },
          {
            name: "paths",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".google.protobuf.Any",
            jsonName: "paths",
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
        name: "TraversalResponse",
      },
    ],
    enumType: [],
    service: [
      {
        method: [
          {
            name: "Traversal",
            inputType: ".io.restorecommerce.graph.TraversalRequest",
            outputType: ".io.restorecommerce.graph.TraversalResponse",
            serverStreaming: true,
          },
        ],
        name: "Service",
      },
    ],
    extension: [],
    name: "io/restorecommerce/graph.proto",
    package: "io.restorecommerce.graph",
    sourceCodeInfo: {
      location: [
        {
          path: [6, 0],
          span: [9, 0, 11, 1],
          leadingDetachedComments: [],
          leadingComments: " Service provides the CRUD operations\n",
        },
        {
          path: [4, 0, 8, 0],
          span: [15, 2, 18, 3],
          leadingDetachedComments: [],
          leadingComments: " Document handle either _id or _key value\n",
        },
        {
          path: [4, 3, 2, 0],
          span: [38, 1, 36],
          leadingDetachedComments: [],
          trailingComments: " to include vertices\n",
        },
        {
          path: [4, 3, 2, 1],
          span: [39, 1, 36],
          leadingDetachedComments: [],
          trailingComments: " to exclude vertices\n",
        },
        {
          path: [4, 3, 2, 2],
          span: [40, 1, 34],
          leadingDetachedComments: [],
          trailingComments: " to include vertices\n",
        },
        {
          path: [4, 3, 2, 3],
          span: [41, 1, 34],
          leadingDetachedComments: [],
          trailingComments: " to exclude vertices\n",
        },
        {
          path: [4, 3, 2, 4],
          span: [42, 1, 25],
          leadingDetachedComments: [],
          trailingComments:
            " either inbound or outbound, defaults to outbound direction\n",
        },
        {
          path: [4, 4, 2, 0],
          span: [51, 2, 20],
          leadingDetachedComments: [],
          trailingComments: " entity on which the filters are applied\n",
        },
        {
          path: [4, 4, 2, 1],
          span: [52, 2, 18],
          leadingDetachedComments: [],
          trailingComments:
            " if edge is specified depending on the direction filter are applied only for those entities\n",
        },
        {
          path: [4, 5, 4, 1, 2, 0],
          span: [77, 4, 15],
          leadingDetachedComments: [],
          trailingComments: " default value type if not specified\n",
        },
        {
          path: [4, 6, 2, 0],
          span: [88, 2, 31],
          leadingDetachedComments: [],
          trailingComments: " vertices\n",
        },
        {
          path: [4, 6, 2, 1],
          span: [89, 2, 32],
          leadingDetachedComments: [],
          trailingComments: " traversed vertices paths\n",
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
