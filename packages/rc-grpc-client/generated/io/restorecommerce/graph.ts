/* eslint-disable */
import { Subject, ApiKey } from '../../io/restorecommerce/auth';
import { Any } from '../../google/protobuf/any';
import { Observable } from 'rxjs';
import { Writer, Reader } from 'protobufjs/minimal';


export interface TraversalRequest {
  startVertex: string | undefined;
  startVertices?: TraversalRequest_StartVertices | undefined;
  /**
   *  Filter based on fieldName|operation, value|list
   */
  opts?: Options;
  collectionName: string;
  edgeName: string;
  data: boolean;
  path: boolean;
  aql: boolean;
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
}

export interface TraversalRequest_StartVertices {
  vertices: string[];
}

export interface TraversalResponse {
  vertexFields: VertexFields[];
  paths?: Any;
  data?: Any;
}

export interface VertexFields {
  Key: string;
  Rev: string;
  id: string;
}

export interface Options {
  /**
   *  JS code
   */
  sort: string;
  /**
   *  either inbound or outbound
   */
  direction: string;
  /**
   *  ANDed with any existing filters): visits only nodes in at least the given depth
   */
  minDepth: number;
  /**
   *  id of the startVertex
   */
  startVertex: string;
  /**
   *  JS code
   */
  visitor: string;
  /**
   *  item iteration order can be "forward" or "backward"
   */
  itemOrder: string;
  /**
   *  traversal strategy can be "depthfirst" or "breadthfirst"
   */
  strategy: string;
  /**
   *  JS code
   */
  filter: Filter[];
  /**
   *  JS code
   */
  init: string;
  /**
   *  maximum number of iterations in each traversal
   */
  maxIterations: number;
  /**
   *  ANDed with any existing filters visits only nodes in at most the given depth
   */
  maxDepth: number;
  /**
   *  specifies uniqueness for vertices and edges visited
   */
  uniqueness?: Uniqueness;
  /**
   *   "preorder", "postorder" or "preorder-expander"
   */
  order: string;
  /**
   *  name of graph that contains the edges
   */
  graphName: string;
  /**
   *  JS code
   */
  expander: Expander[];
  /**
   *  name of the collection that contains the edges
   */
  edgeCollection: string;
  lowestCommonAncestor: boolean;
}

export interface Filter {
  /**
   *  exclude these vertices
   */
  vertex: string;
}

export interface Expander {
  /**
   *  expand these edges
   */
  edge: string;
  direction: string;
}

export interface Uniqueness {
  /**
   *  "none"|"global"|"path" for unique vertices
   */
  vertices: string;
  /**
   *  "none"|"global"|"path" for unique edges
   */
  edges: string;
}

const baseTraversalRequest: object = {
  collectionName: "",
  edgeName: "",
  data: false,
  path: false,
  aql: false,
};

const baseTraversalRequest_StartVertices: object = {
  vertices: "",
};

const baseTraversalResponse: object = {
};

const baseVertexFields: object = {
  Key: "",
  Rev: "",
  id: "",
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

const baseFilter: object = {
  vertex: "",
};

const baseExpander: object = {
  edge: "",
  direction: "",
};

const baseUniqueness: object = {
  vertices: "",
  edges: "",
};

/**
 *  Service provides the CRUD operations
 */
export interface Service {

  Traversal(request: TraversalRequest): Observable<TraversalResponse>;

}

export const TraversalRequest = {
  encode(message: TraversalRequest, writer: Writer = Writer.create()): Writer {
    if (message.startVertex !== undefined) {
      writer.uint32(10).string(message.startVertex);
    }
    if (message.startVertices !== undefined) {
      TraversalRequest_StartVertices.encode(message.startVertices, writer.uint32(18).fork()).ldelim();
    }
    if (message.opts !== undefined && message.opts !== undefined) {
      Options.encode(message.opts, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(34).string(message.collectionName);
    writer.uint32(42).string(message.edgeName);
    writer.uint32(48).bool(message.data);
    writer.uint32(56).bool(message.path);
    writer.uint32(64).bool(message.aql);
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(74).fork()).ldelim();
    }
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): TraversalRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTraversalRequest } as TraversalRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startVertex = reader.string();
          break;
        case 2:
          message.startVertices = TraversalRequest_StartVertices.decode(reader, reader.uint32());
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
        case 10:
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

export const TraversalRequest_StartVertices = {
  encode(message: TraversalRequest_StartVertices, writer: Writer = Writer.create()): Writer {
    for (const v of message.vertices) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): TraversalRequest_StartVertices {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTraversalRequest_StartVertices } as TraversalRequest_StartVertices;
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
};

export const TraversalResponse = {
  encode(message: TraversalResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.vertexFields) {
      VertexFields.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.paths !== undefined && message.paths !== undefined) {
      Any.encode(message.paths, writer.uint32(18).fork()).ldelim();
    }
    if (message.data !== undefined && message.data !== undefined) {
      Any.encode(message.data, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): TraversalResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTraversalResponse } as TraversalResponse;
    message.vertexFields = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vertexFields.push(VertexFields.decode(reader, reader.uint32()));
          break;
        case 2:
          message.paths = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.data = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const VertexFields = {
  encode(message: VertexFields, writer: Writer = Writer.create()): Writer {
    writer.uint32(18).string(message.Key);
    writer.uint32(26).string(message.Rev);
    writer.uint32(34).string(message.id);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): VertexFields {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVertexFields } as VertexFields;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.Key = reader.string();
          break;
        case 3:
          message.Rev = reader.string();
          break;
        case 4:
          message.id = reader.string();
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
    writer.uint32(10).string(message.sort);
    writer.uint32(18).string(message.direction);
    writer.uint32(24).uint32(message.minDepth);
    writer.uint32(34).string(message.startVertex);
    writer.uint32(42).string(message.visitor);
    writer.uint32(50).string(message.itemOrder);
    writer.uint32(58).string(message.strategy);
    for (const v of message.filter) {
      Filter.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    writer.uint32(74).string(message.init);
    writer.uint32(80).uint32(message.maxIterations);
    writer.uint32(88).uint32(message.maxDepth);
    if (message.uniqueness !== undefined && message.uniqueness !== undefined) {
      Uniqueness.encode(message.uniqueness, writer.uint32(98).fork()).ldelim();
    }
    writer.uint32(106).string(message.order);
    writer.uint32(114).string(message.graphName);
    for (const v of message.expander) {
      Expander.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    writer.uint32(130).string(message.edgeCollection);
    writer.uint32(136).bool(message.lowestCommonAncestor);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Options {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOptions } as Options;
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
};

export const Filter = {
  encode(message: Filter, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.vertex);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Filter {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFilter } as Filter;
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
};

export const Expander = {
  encode(message: Expander, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.edge);
    writer.uint32(18).string(message.direction);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Expander {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExpander } as Expander;
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
};

export const Uniqueness = {
  encode(message: Uniqueness, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.vertices);
    writer.uint32(18).string(message.edges);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Uniqueness {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUniqueness } as Uniqueness;
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
};
