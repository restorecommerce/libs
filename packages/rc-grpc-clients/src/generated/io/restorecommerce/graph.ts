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
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "io.restorecommerce.graph";

export interface TraversalRequest {
  startVertex: string | undefined;
  startVertices?: TraversalRequest_StartVertices | undefined;
  /** Filter based on fieldName|operation, value|list */
  opts?: Options;
  collectionName: string;
  edgeName: string;
  data: boolean;
  path: boolean;
  aql: boolean;
  subject?: Subject;
}

export interface TraversalRequest_StartVertices {
  vertices: string[];
}

export interface TraversalResponse {
  vertexFields: VertexFields[];
  paths?: Any;
  data?: Any;
  operationStatus?: OperationStatus;
}

export interface VertexFields {
  id: string;
  key: string;
  rev: string;
}

export interface Options {
  /** JS code */
  sort: string;
  /** either inbound or outbound */
  direction: string;
  /** ANDed with any existing filters): visits only nodes in at least the given depth */
  minDepth: number;
  /** id of the startVertex */
  startVertex: string;
  /** JS code */
  visitor: string;
  /** item iteration order can be "forward" or "backward" */
  itemOrder: string;
  /** traversal strategy can be "depthfirst" or "breadthfirst" */
  strategy: string;
  /** JS code */
  filter: Filter[];
  /** JS code */
  init: string;
  /** maximum number of iterations in each traversal */
  maxIterations: number;
  /** ANDed with any existing filters visits only nodes in at most the given depth */
  maxDepth: number;
  /** specifies uniqueness for vertices and edges visited */
  uniqueness?: Uniqueness;
  /** "preorder", "postorder" or "preorder-expander" */
  order: string;
  /** name of graph that contains the edges */
  graphName: string;
  /** JS code */
  expander: Expander[];
  /** name of the collection that contains the edges */
  edgeCollection: string;
  lowestCommonAncestor: boolean;
}

export interface Filter {
  /** exclude these vertices */
  vertex: string;
}

export interface Expander {
  /** expand these edges */
  edge: string;
  direction: string;
}

export interface Uniqueness {
  /** "none"|"global"|"path" for unique vertices */
  vertices: string;
  /** "none"|"global"|"path" for unique edges */
  edges: string;
}

const baseTraversalRequest: object = {
  collectionName: "",
  edgeName: "",
  data: false,
  path: false,
  aql: false,
};

export const TraversalRequest = {
  encode(message: TraversalRequest, writer: Writer = Writer.create()): Writer {
    if (message.startVertex !== undefined) {
      writer.uint32(10).string(message.startVertex);
    }
    if (message.startVertices !== undefined) {
      TraversalRequest_StartVertices.encode(
        message.startVertices,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.opts !== undefined) {
      Options.encode(message.opts, writer.uint32(26).fork()).ldelim();
    }
    if (message.collectionName !== "") {
      writer.uint32(34).string(message.collectionName);
    }
    if (message.edgeName !== "") {
      writer.uint32(42).string(message.edgeName);
    }
    if (message.data === true) {
      writer.uint32(48).bool(message.data);
    }
    if (message.path === true) {
      writer.uint32(56).bool(message.path);
    }
    if (message.aql === true) {
      writer.uint32(64).bool(message.aql);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TraversalRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseTraversalRequest
    ) as TraversalRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startVertex = reader.string();
          break;
        case 2:
          message.startVertices = TraversalRequest_StartVertices.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.opts = Options.decode(reader, reader.uint32());
          break;
        case 4:
          message.collectionName = reader.string();
          break;
        case 5:
          message.edgeName = reader.string();
          break;
        case 6:
          message.data = reader.bool();
          break;
        case 7:
          message.path = reader.bool();
          break;
        case 8:
          message.aql = reader.bool();
          break;
        case 9:
          message.subject = Subject.decode(reader, reader.uint32());
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
    if (object.startVertex !== undefined && object.startVertex !== null) {
      message.startVertex = String(object.startVertex);
    } else {
      message.startVertex = undefined;
    }
    if (object.startVertices !== undefined && object.startVertices !== null) {
      message.startVertices = TraversalRequest_StartVertices.fromJSON(
        object.startVertices
      );
    } else {
      message.startVertices = undefined;
    }
    if (object.opts !== undefined && object.opts !== null) {
      message.opts = Options.fromJSON(object.opts);
    } else {
      message.opts = undefined;
    }
    if (object.collectionName !== undefined && object.collectionName !== null) {
      message.collectionName = String(object.collectionName);
    } else {
      message.collectionName = "";
    }
    if (object.edgeName !== undefined && object.edgeName !== null) {
      message.edgeName = String(object.edgeName);
    } else {
      message.edgeName = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Boolean(object.data);
    } else {
      message.data = false;
    }
    if (object.path !== undefined && object.path !== null) {
      message.path = Boolean(object.path);
    } else {
      message.path = false;
    }
    if (object.aql !== undefined && object.aql !== null) {
      message.aql = Boolean(object.aql);
    } else {
      message.aql = false;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<TraversalRequest>): TraversalRequest {
    const message = { ...baseTraversalRequest } as TraversalRequest;
    if (object.startVertex !== undefined && object.startVertex !== null) {
      message.startVertex = object.startVertex;
    } else {
      message.startVertex = undefined;
    }
    if (object.startVertices !== undefined && object.startVertices !== null) {
      message.startVertices = TraversalRequest_StartVertices.fromPartial(
        object.startVertices
      );
    } else {
      message.startVertices = undefined;
    }
    if (object.opts !== undefined && object.opts !== null) {
      message.opts = Options.fromPartial(object.opts);
    } else {
      message.opts = undefined;
    }
    if (object.collectionName !== undefined && object.collectionName !== null) {
      message.collectionName = object.collectionName;
    } else {
      message.collectionName = "";
    }
    if (object.edgeName !== undefined && object.edgeName !== null) {
      message.edgeName = object.edgeName;
    } else {
      message.edgeName = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = false;
    }
    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    } else {
      message.path = false;
    }
    if (object.aql !== undefined && object.aql !== null) {
      message.aql = object.aql;
    } else {
      message.aql = false;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  toJSON(message: TraversalRequest): unknown {
    const obj: any = {};
    message.startVertex !== undefined &&
      (obj.startVertex = message.startVertex);
    message.startVertices !== undefined &&
      (obj.startVertices = message.startVertices
        ? TraversalRequest_StartVertices.toJSON(message.startVertices)
        : undefined);
    message.opts !== undefined &&
      (obj.opts = message.opts ? Options.toJSON(message.opts) : undefined);
    message.collectionName !== undefined &&
      (obj.collectionName = message.collectionName);
    message.edgeName !== undefined && (obj.edgeName = message.edgeName);
    message.data !== undefined && (obj.data = message.data);
    message.path !== undefined && (obj.path = message.path);
    message.aql !== undefined && (obj.aql = message.aql);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseTraversalRequest_StartVertices: object = { vertices: "" };

export const TraversalRequest_StartVertices = {
  encode(
    message: TraversalRequest_StartVertices,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.vertices) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): TraversalRequest_StartVertices {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseTraversalRequest_StartVertices
    ) as TraversalRequest_StartVertices;
    message.vertices = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vertices.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TraversalRequest_StartVertices {
    const message = globalThis.Object.create(
      baseTraversalRequest_StartVertices
    ) as TraversalRequest_StartVertices;
    message.vertices = [];
    if (object.vertices !== undefined && object.vertices !== null) {
      for (const e of object.vertices) {
        message.vertices.push(String(e));
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<TraversalRequest_StartVertices>
  ): TraversalRequest_StartVertices {
    const message = {
      ...baseTraversalRequest_StartVertices,
    } as TraversalRequest_StartVertices;
    message.vertices = [];
    if (object.vertices !== undefined && object.vertices !== null) {
      for (const e of object.vertices) {
        message.vertices.push(e);
      }
    }
    return message;
  },

  toJSON(message: TraversalRequest_StartVertices): unknown {
    const obj: any = {};
    if (message.vertices) {
      obj.vertices = message.vertices.map((e) => e);
    } else {
      obj.vertices = [];
    }
    return obj;
  },
};

const baseTraversalResponse: object = {};

export const TraversalResponse = {
  encode(message: TraversalResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.vertexFields) {
      VertexFields.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.paths !== undefined) {
      Any.encode(message.paths, writer.uint32(18).fork()).ldelim();
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(26).fork()).ldelim();
    }
    if (message.operationStatus !== undefined) {
      OperationStatus.encode(
        message.operationStatus,
        writer.uint32(34).fork()
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
    message.vertexFields = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vertexFields.push(
            VertexFields.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.paths = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.data = Any.decode(reader, reader.uint32());
          break;
        case 4:
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
    message.vertexFields = [];
    if (object.vertexFields !== undefined && object.vertexFields !== null) {
      for (const e of object.vertexFields) {
        message.vertexFields.push(VertexFields.fromJSON(e));
      }
    }
    if (object.paths !== undefined && object.paths !== null) {
      message.paths = Any.fromJSON(object.paths);
    } else {
      message.paths = undefined;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromJSON(object.data);
    } else {
      message.data = undefined;
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
    message.vertexFields = [];
    if (object.vertexFields !== undefined && object.vertexFields !== null) {
      for (const e of object.vertexFields) {
        message.vertexFields.push(VertexFields.fromPartial(e));
      }
    }
    if (object.paths !== undefined && object.paths !== null) {
      message.paths = Any.fromPartial(object.paths);
    } else {
      message.paths = undefined;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromPartial(object.data);
    } else {
      message.data = undefined;
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
    if (message.vertexFields) {
      obj.vertexFields = message.vertexFields.map((e) =>
        e ? VertexFields.toJSON(e) : undefined
      );
    } else {
      obj.vertexFields = [];
    }
    message.paths !== undefined &&
      (obj.paths = message.paths ? Any.toJSON(message.paths) : undefined);
    message.data !== undefined &&
      (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus
        ? OperationStatus.toJSON(message.operationStatus)
        : undefined);
    return obj;
  },
};

const baseVertexFields: object = { id: "", key: "", rev: "" };

export const VertexFields = {
  encode(message: VertexFields, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    if (message.rev !== "") {
      writer.uint32(26).string(message.rev);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): VertexFields {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseVertexFields) as VertexFields;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.key = reader.string();
          break;
        case 3:
          message.rev = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VertexFields {
    const message = globalThis.Object.create(baseVertexFields) as VertexFields;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.rev !== undefined && object.rev !== null) {
      message.rev = String(object.rev);
    } else {
      message.rev = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<VertexFields>): VertexFields {
    const message = { ...baseVertexFields } as VertexFields;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.rev !== undefined && object.rev !== null) {
      message.rev = object.rev;
    } else {
      message.rev = "";
    }
    return message;
  },

  toJSON(message: VertexFields): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.key !== undefined && (obj.key = message.key);
    message.rev !== undefined && (obj.rev = message.rev);
    return obj;
  },
};

const baseOptions: object = {
  sort: "",
  direction: "",
  minDepth: 0,
  startVertex: "",
  visitor: "",
  itemOrder: "",
  strategy: "",
  init: "",
  maxIterations: 0,
  maxDepth: 0,
  order: "",
  graphName: "",
  edgeCollection: "",
  lowestCommonAncestor: false,
};

export const Options = {
  encode(message: Options, writer: Writer = Writer.create()): Writer {
    if (message.sort !== "") {
      writer.uint32(10).string(message.sort);
    }
    if (message.direction !== "") {
      writer.uint32(18).string(message.direction);
    }
    if (message.minDepth !== 0) {
      writer.uint32(24).uint32(message.minDepth);
    }
    if (message.startVertex !== "") {
      writer.uint32(34).string(message.startVertex);
    }
    if (message.visitor !== "") {
      writer.uint32(42).string(message.visitor);
    }
    if (message.itemOrder !== "") {
      writer.uint32(50).string(message.itemOrder);
    }
    if (message.strategy !== "") {
      writer.uint32(58).string(message.strategy);
    }
    for (const v of message.filter) {
      Filter.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.init !== "") {
      writer.uint32(74).string(message.init);
    }
    if (message.maxIterations !== 0) {
      writer.uint32(80).uint32(message.maxIterations);
    }
    if (message.maxDepth !== 0) {
      writer.uint32(88).uint32(message.maxDepth);
    }
    if (message.uniqueness !== undefined) {
      Uniqueness.encode(message.uniqueness, writer.uint32(98).fork()).ldelim();
    }
    if (message.order !== "") {
      writer.uint32(106).string(message.order);
    }
    if (message.graphName !== "") {
      writer.uint32(114).string(message.graphName);
    }
    for (const v of message.expander) {
      Expander.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    if (message.edgeCollection !== "") {
      writer.uint32(130).string(message.edgeCollection);
    }
    if (message.lowestCommonAncestor === true) {
      writer.uint32(136).bool(message.lowestCommonAncestor);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Options {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseOptions) as Options;
    message.filter = [];
    message.expander = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sort = reader.string();
          break;
        case 2:
          message.direction = reader.string();
          break;
        case 3:
          message.minDepth = reader.uint32();
          break;
        case 4:
          message.startVertex = reader.string();
          break;
        case 5:
          message.visitor = reader.string();
          break;
        case 6:
          message.itemOrder = reader.string();
          break;
        case 7:
          message.strategy = reader.string();
          break;
        case 8:
          message.filter.push(Filter.decode(reader, reader.uint32()));
          break;
        case 9:
          message.init = reader.string();
          break;
        case 10:
          message.maxIterations = reader.uint32();
          break;
        case 11:
          message.maxDepth = reader.uint32();
          break;
        case 12:
          message.uniqueness = Uniqueness.decode(reader, reader.uint32());
          break;
        case 13:
          message.order = reader.string();
          break;
        case 14:
          message.graphName = reader.string();
          break;
        case 15:
          message.expander.push(Expander.decode(reader, reader.uint32()));
          break;
        case 16:
          message.edgeCollection = reader.string();
          break;
        case 17:
          message.lowestCommonAncestor = reader.bool();
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
    message.filter = [];
    message.expander = [];
    if (object.sort !== undefined && object.sort !== null) {
      message.sort = String(object.sort);
    } else {
      message.sort = "";
    }
    if (object.direction !== undefined && object.direction !== null) {
      message.direction = String(object.direction);
    } else {
      message.direction = "";
    }
    if (object.minDepth !== undefined && object.minDepth !== null) {
      message.minDepth = Number(object.minDepth);
    } else {
      message.minDepth = 0;
    }
    if (object.startVertex !== undefined && object.startVertex !== null) {
      message.startVertex = String(object.startVertex);
    } else {
      message.startVertex = "";
    }
    if (object.visitor !== undefined && object.visitor !== null) {
      message.visitor = String(object.visitor);
    } else {
      message.visitor = "";
    }
    if (object.itemOrder !== undefined && object.itemOrder !== null) {
      message.itemOrder = String(object.itemOrder);
    } else {
      message.itemOrder = "";
    }
    if (object.strategy !== undefined && object.strategy !== null) {
      message.strategy = String(object.strategy);
    } else {
      message.strategy = "";
    }
    if (object.filter !== undefined && object.filter !== null) {
      for (const e of object.filter) {
        message.filter.push(Filter.fromJSON(e));
      }
    }
    if (object.init !== undefined && object.init !== null) {
      message.init = String(object.init);
    } else {
      message.init = "";
    }
    if (object.maxIterations !== undefined && object.maxIterations !== null) {
      message.maxIterations = Number(object.maxIterations);
    } else {
      message.maxIterations = 0;
    }
    if (object.maxDepth !== undefined && object.maxDepth !== null) {
      message.maxDepth = Number(object.maxDepth);
    } else {
      message.maxDepth = 0;
    }
    if (object.uniqueness !== undefined && object.uniqueness !== null) {
      message.uniqueness = Uniqueness.fromJSON(object.uniqueness);
    } else {
      message.uniqueness = undefined;
    }
    if (object.order !== undefined && object.order !== null) {
      message.order = String(object.order);
    } else {
      message.order = "";
    }
    if (object.graphName !== undefined && object.graphName !== null) {
      message.graphName = String(object.graphName);
    } else {
      message.graphName = "";
    }
    if (object.expander !== undefined && object.expander !== null) {
      for (const e of object.expander) {
        message.expander.push(Expander.fromJSON(e));
      }
    }
    if (object.edgeCollection !== undefined && object.edgeCollection !== null) {
      message.edgeCollection = String(object.edgeCollection);
    } else {
      message.edgeCollection = "";
    }
    if (
      object.lowestCommonAncestor !== undefined &&
      object.lowestCommonAncestor !== null
    ) {
      message.lowestCommonAncestor = Boolean(object.lowestCommonAncestor);
    } else {
      message.lowestCommonAncestor = false;
    }
    return message;
  },

  fromPartial(object: DeepPartial<Options>): Options {
    const message = { ...baseOptions } as Options;
    message.filter = [];
    message.expander = [];
    if (object.sort !== undefined && object.sort !== null) {
      message.sort = object.sort;
    } else {
      message.sort = "";
    }
    if (object.direction !== undefined && object.direction !== null) {
      message.direction = object.direction;
    } else {
      message.direction = "";
    }
    if (object.minDepth !== undefined && object.minDepth !== null) {
      message.minDepth = object.minDepth;
    } else {
      message.minDepth = 0;
    }
    if (object.startVertex !== undefined && object.startVertex !== null) {
      message.startVertex = object.startVertex;
    } else {
      message.startVertex = "";
    }
    if (object.visitor !== undefined && object.visitor !== null) {
      message.visitor = object.visitor;
    } else {
      message.visitor = "";
    }
    if (object.itemOrder !== undefined && object.itemOrder !== null) {
      message.itemOrder = object.itemOrder;
    } else {
      message.itemOrder = "";
    }
    if (object.strategy !== undefined && object.strategy !== null) {
      message.strategy = object.strategy;
    } else {
      message.strategy = "";
    }
    if (object.filter !== undefined && object.filter !== null) {
      for (const e of object.filter) {
        message.filter.push(Filter.fromPartial(e));
      }
    }
    if (object.init !== undefined && object.init !== null) {
      message.init = object.init;
    } else {
      message.init = "";
    }
    if (object.maxIterations !== undefined && object.maxIterations !== null) {
      message.maxIterations = object.maxIterations;
    } else {
      message.maxIterations = 0;
    }
    if (object.maxDepth !== undefined && object.maxDepth !== null) {
      message.maxDepth = object.maxDepth;
    } else {
      message.maxDepth = 0;
    }
    if (object.uniqueness !== undefined && object.uniqueness !== null) {
      message.uniqueness = Uniqueness.fromPartial(object.uniqueness);
    } else {
      message.uniqueness = undefined;
    }
    if (object.order !== undefined && object.order !== null) {
      message.order = object.order;
    } else {
      message.order = "";
    }
    if (object.graphName !== undefined && object.graphName !== null) {
      message.graphName = object.graphName;
    } else {
      message.graphName = "";
    }
    if (object.expander !== undefined && object.expander !== null) {
      for (const e of object.expander) {
        message.expander.push(Expander.fromPartial(e));
      }
    }
    if (object.edgeCollection !== undefined && object.edgeCollection !== null) {
      message.edgeCollection = object.edgeCollection;
    } else {
      message.edgeCollection = "";
    }
    if (
      object.lowestCommonAncestor !== undefined &&
      object.lowestCommonAncestor !== null
    ) {
      message.lowestCommonAncestor = object.lowestCommonAncestor;
    } else {
      message.lowestCommonAncestor = false;
    }
    return message;
  },

  toJSON(message: Options): unknown {
    const obj: any = {};
    message.sort !== undefined && (obj.sort = message.sort);
    message.direction !== undefined && (obj.direction = message.direction);
    message.minDepth !== undefined && (obj.minDepth = message.minDepth);
    message.startVertex !== undefined &&
      (obj.startVertex = message.startVertex);
    message.visitor !== undefined && (obj.visitor = message.visitor);
    message.itemOrder !== undefined && (obj.itemOrder = message.itemOrder);
    message.strategy !== undefined && (obj.strategy = message.strategy);
    if (message.filter) {
      obj.filter = message.filter.map((e) =>
        e ? Filter.toJSON(e) : undefined
      );
    } else {
      obj.filter = [];
    }
    message.init !== undefined && (obj.init = message.init);
    message.maxIterations !== undefined &&
      (obj.maxIterations = message.maxIterations);
    message.maxDepth !== undefined && (obj.maxDepth = message.maxDepth);
    message.uniqueness !== undefined &&
      (obj.uniqueness = message.uniqueness
        ? Uniqueness.toJSON(message.uniqueness)
        : undefined);
    message.order !== undefined && (obj.order = message.order);
    message.graphName !== undefined && (obj.graphName = message.graphName);
    if (message.expander) {
      obj.expander = message.expander.map((e) =>
        e ? Expander.toJSON(e) : undefined
      );
    } else {
      obj.expander = [];
    }
    message.edgeCollection !== undefined &&
      (obj.edgeCollection = message.edgeCollection);
    message.lowestCommonAncestor !== undefined &&
      (obj.lowestCommonAncestor = message.lowestCommonAncestor);
    return obj;
  },
};

const baseFilter: object = { vertex: "" };

export const Filter = {
  encode(message: Filter, writer: Writer = Writer.create()): Writer {
    if (message.vertex !== "") {
      writer.uint32(10).string(message.vertex);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Filter {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseFilter) as Filter;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vertex = reader.string();
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
    if (object.vertex !== undefined && object.vertex !== null) {
      message.vertex = String(object.vertex);
    } else {
      message.vertex = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<Filter>): Filter {
    const message = { ...baseFilter } as Filter;
    if (object.vertex !== undefined && object.vertex !== null) {
      message.vertex = object.vertex;
    } else {
      message.vertex = "";
    }
    return message;
  },

  toJSON(message: Filter): unknown {
    const obj: any = {};
    message.vertex !== undefined && (obj.vertex = message.vertex);
    return obj;
  },
};

const baseExpander: object = { edge: "", direction: "" };

export const Expander = {
  encode(message: Expander, writer: Writer = Writer.create()): Writer {
    if (message.edge !== "") {
      writer.uint32(10).string(message.edge);
    }
    if (message.direction !== "") {
      writer.uint32(18).string(message.direction);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Expander {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseExpander) as Expander;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.edge = reader.string();
          break;
        case 2:
          message.direction = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Expander {
    const message = globalThis.Object.create(baseExpander) as Expander;
    if (object.edge !== undefined && object.edge !== null) {
      message.edge = String(object.edge);
    } else {
      message.edge = "";
    }
    if (object.direction !== undefined && object.direction !== null) {
      message.direction = String(object.direction);
    } else {
      message.direction = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<Expander>): Expander {
    const message = { ...baseExpander } as Expander;
    if (object.edge !== undefined && object.edge !== null) {
      message.edge = object.edge;
    } else {
      message.edge = "";
    }
    if (object.direction !== undefined && object.direction !== null) {
      message.direction = object.direction;
    } else {
      message.direction = "";
    }
    return message;
  },

  toJSON(message: Expander): unknown {
    const obj: any = {};
    message.edge !== undefined && (obj.edge = message.edge);
    message.direction !== undefined && (obj.direction = message.direction);
    return obj;
  },
};

const baseUniqueness: object = { vertices: "", edges: "" };

export const Uniqueness = {
  encode(message: Uniqueness, writer: Writer = Writer.create()): Writer {
    if (message.vertices !== "") {
      writer.uint32(10).string(message.vertices);
    }
    if (message.edges !== "") {
      writer.uint32(18).string(message.edges);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Uniqueness {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseUniqueness) as Uniqueness;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vertices = reader.string();
          break;
        case 2:
          message.edges = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Uniqueness {
    const message = globalThis.Object.create(baseUniqueness) as Uniqueness;
    if (object.vertices !== undefined && object.vertices !== null) {
      message.vertices = String(object.vertices);
    } else {
      message.vertices = "";
    }
    if (object.edges !== undefined && object.edges !== null) {
      message.edges = String(object.edges);
    } else {
      message.edges = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<Uniqueness>): Uniqueness {
    const message = { ...baseUniqueness } as Uniqueness;
    if (object.vertices !== undefined && object.vertices !== null) {
      message.vertices = object.vertices;
    } else {
      message.vertices = "";
    }
    if (object.edges !== undefined && object.edges !== null) {
      message.edges = object.edges;
    } else {
      message.edges = "";
    }
    return message;
  },

  toJSON(message: Uniqueness): unknown {
    const obj: any = {};
    message.vertices !== undefined && (obj.vertices = message.vertices);
    message.edges !== undefined && (obj.edges = message.edges);
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
    ],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        field: [
          {
            name: "start_vertex",
            number: 1,
            label: 1,
            type: 9,
            oneofIndex: 0,
            jsonName: "startVertex",
          },
          {
            name: "start_vertices",
            number: 2,
            label: 1,
            type: 11,
            typeName:
              ".io.restorecommerce.graph.TraversalRequest.StartVertices",
            oneofIndex: 0,
            jsonName: "startVertices",
          },
          {
            name: "opts",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.graph.Options",
            jsonName: "opts",
          },
          {
            name: "collection_name",
            number: 4,
            label: 1,
            type: 9,
            jsonName: "collectionName",
          },
          {
            name: "edge_name",
            number: 5,
            label: 1,
            type: 9,
            jsonName: "edgeName",
          },
          { name: "data", number: 6, label: 1, type: 8, jsonName: "data" },
          { name: "path", number: 7, label: 1, type: 8, jsonName: "path" },
          { name: "aql", number: 8, label: 1, type: 8, jsonName: "aql" },
          {
            name: "subject",
            number: 9,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            jsonName: "subject",
          },
        ],
        extension: [],
        nestedType: [
          {
            field: [
              {
                name: "vertices",
                number: 1,
                label: 3,
                type: 9,
                jsonName: "vertices",
              },
            ],
            extension: [],
            nestedType: [],
            enumType: [],
            extensionRange: [],
            oneofDecl: [],
            reservedRange: [],
            reservedName: [],
            name: "StartVertices",
          },
        ],
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
            name: "vertex_fields",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.graph.VertexFields",
            jsonName: "vertexFields",
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
            name: "data",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".google.protobuf.Any",
            jsonName: "data",
          },
          {
            name: "operation_status",
            number: 4,
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
      {
        field: [
          { name: "id", number: 1, label: 1, type: 9, jsonName: "id" },
          { name: "key", number: 2, label: 1, type: 9, jsonName: "key" },
          { name: "rev", number: 3, label: 1, type: 9, jsonName: "rev" },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "VertexFields",
      },
      {
        field: [
          { name: "sort", number: 1, label: 1, type: 9, jsonName: "sort" },
          {
            name: "direction",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "direction",
          },
          {
            name: "min_depth",
            number: 3,
            label: 1,
            type: 13,
            jsonName: "minDepth",
          },
          {
            name: "start_vertex",
            number: 4,
            label: 1,
            type: 9,
            jsonName: "startVertex",
          },
          {
            name: "visitor",
            number: 5,
            label: 1,
            type: 9,
            jsonName: "visitor",
          },
          {
            name: "item_order",
            number: 6,
            label: 1,
            type: 9,
            jsonName: "itemOrder",
          },
          {
            name: "strategy",
            number: 7,
            label: 1,
            type: 9,
            jsonName: "strategy",
          },
          {
            name: "filter",
            number: 8,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.graph.Filter",
            jsonName: "filter",
          },
          { name: "init", number: 9, label: 1, type: 9, jsonName: "init" },
          {
            name: "max_iterations",
            number: 10,
            label: 1,
            type: 13,
            jsonName: "maxIterations",
          },
          {
            name: "max_depth",
            number: 11,
            label: 1,
            type: 13,
            jsonName: "maxDepth",
          },
          {
            name: "uniqueness",
            number: 12,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.graph.Uniqueness",
            jsonName: "uniqueness",
          },
          { name: "order", number: 13, label: 1, type: 9, jsonName: "order" },
          {
            name: "graph_name",
            number: 14,
            label: 1,
            type: 9,
            jsonName: "graphName",
          },
          {
            name: "expander",
            number: 15,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.graph.Expander",
            jsonName: "expander",
          },
          {
            name: "edge_collection",
            number: 16,
            label: 1,
            type: 9,
            jsonName: "edgeCollection",
          },
          {
            name: "lowest_common_ancestor",
            number: 17,
            label: 1,
            type: 8,
            jsonName: "lowestCommonAncestor",
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
          { name: "vertex", number: 1, label: 1, type: 9, jsonName: "vertex" },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Filter",
      },
      {
        field: [
          { name: "edge", number: 1, label: 1, type: 9, jsonName: "edge" },
          {
            name: "direction",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "direction",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Expander",
      },
      {
        field: [
          {
            name: "vertices",
            number: 1,
            label: 1,
            type: 9,
            jsonName: "vertices",
          },
          { name: "edges", number: 2, label: 1, type: 9, jsonName: "edges" },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Uniqueness",
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
          span: [7, 0, 9, 1],
          leadingDetachedComments: [],
          leadingComments: " Service provides the CRUD operations\n",
        },
        {
          path: [4, 0, 8, 0],
          span: [17, 2, 20, 3],
          leadingDetachedComments: [],
          leadingComments: " Document handle either _id or _key value\n",
        },
        {
          path: [4, 0, 2, 2],
          span: [23, 2, 19],
          leadingDetachedComments: [],
          leadingComments: " Filter based on fieldName|operation, value|list\n",
        },
        {
          path: [4, 3, 2, 0],
          span: [46, 1, 17],
          leadingDetachedComments: [],
          trailingComments: " JS code\n",
        },
        {
          path: [4, 3, 2, 1],
          span: [47, 1, 22],
          leadingDetachedComments: [],
          trailingComments: " either inbound or outbound\n",
        },
        {
          path: [4, 3, 2, 2],
          span: [48, 1, 22],
          leadingDetachedComments: [],
          trailingComments:
            " ANDed with any existing filters): visits only nodes in at least the given depth\n",
        },
        {
          path: [4, 3, 2, 3],
          span: [49, 1, 25],
          leadingDetachedComments: [],
          trailingComments: " id of the startVertex\n",
        },
        {
          path: [4, 3, 2, 4],
          span: [50, 1, 20],
          leadingDetachedComments: [],
          trailingComments: " JS code\n",
        },
        {
          path: [4, 3, 2, 5],
          span: [51, 1, 23],
          leadingDetachedComments: [],
          trailingComments:
            ' item iteration order can be "forward" or "backward"\n',
        },
        {
          path: [4, 3, 2, 6],
          span: [52, 1, 21],
          leadingDetachedComments: [],
          trailingComments:
            ' traversal strategy can be "depthfirst" or "breadthfirst"\n',
        },
        {
          path: [4, 3, 2, 7],
          span: [53, 1, 28],
          leadingDetachedComments: [],
          trailingComments: " JS code\n",
        },
        {
          path: [4, 3, 2, 8],
          span: [54, 1, 17],
          leadingDetachedComments: [],
          trailingComments: " JS code\n",
        },
        {
          path: [4, 3, 2, 9],
          span: [55, 1, 28],
          leadingDetachedComments: [],
          trailingComments: " maximum number of iterations in each traversal\n",
        },
        {
          path: [4, 3, 2, 10],
          span: [56, 1, 23],
          leadingDetachedComments: [],
          trailingComments:
            " ANDed with any existing filters visits only nodes in at most the given depth\n",
        },
        {
          path: [4, 3, 2, 11],
          span: [57, 1, 28],
          leadingDetachedComments: [],
          trailingComments:
            " specifies uniqueness for vertices and edges visited\n",
        },
        {
          path: [4, 3, 2, 12],
          span: [58, 1, 19],
          leadingDetachedComments: [],
          trailingComments:
            '  "preorder", "postorder" or "preorder-expander"\n',
        },
        {
          path: [4, 3, 2, 13],
          span: [59, 1, 24],
          leadingDetachedComments: [],
          trailingComments: " name of graph that contains the edges\n",
        },
        {
          path: [4, 3, 2, 14],
          span: [60, 1, 33],
          leadingDetachedComments: [],
          trailingComments: " JS code\n",
        },
        {
          path: [4, 3, 2, 15],
          span: [61, 1, 29],
          leadingDetachedComments: [],
          trailingComments: " name of the collection that contains the edges\n",
        },
        {
          path: [4, 4, 2, 0],
          span: [66, 2, 20],
          leadingDetachedComments: [],
          trailingComments: " exclude these vertices\n",
        },
        {
          path: [4, 5, 2, 0],
          span: [70, 2, 18],
          leadingDetachedComments: [],
          trailingComments: " expand these edges\n",
        },
        {
          path: [4, 6, 2, 0],
          span: [75, 2, 22],
          leadingDetachedComments: [],
          trailingComments: ' "none"|"global"|"path" for unique vertices\n',
        },
        {
          path: [4, 6, 2, 1],
          span: [76, 2, 19],
          leadingDetachedComments: [],
          trailingComments: ' "none"|"global"|"path" for unique edges\n',
        },
      ],
    },
    syntax: "proto3",
  }),
  references: {
    ".io.restorecommerce.graph.TraversalRequest": TraversalRequest,
    ".io.restorecommerce.graph.TraversalRequest.StartVertices": TraversalRequest_StartVertices,
    ".io.restorecommerce.graph.TraversalResponse": TraversalResponse,
    ".io.restorecommerce.graph.VertexFields": VertexFields,
    ".io.restorecommerce.graph.Options": Options,
    ".io.restorecommerce.graph.Filter": Filter,
    ".io.restorecommerce.graph.Expander": Expander,
    ".io.restorecommerce.graph.Uniqueness": Uniqueness,
  },
  dependencies: [protoMetadata1, protoMetadata2, protoMetadata3],
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
