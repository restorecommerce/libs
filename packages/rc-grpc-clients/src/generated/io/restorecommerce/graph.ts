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
  aid: string;
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
  aid: "",
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

export interface MetaI {
  readonly meta: 'object' | 'array' | 'map' | 'union' | 'builtin';
}

export interface MetaO extends MetaI {
  readonly meta: 'object';
  readonly type: string;
  readonly name: string;
}

export interface MetaA extends MetaI {
  readonly meta: 'array';
  readonly type: MetaI | string;
}

export interface MetaM extends MetaI {
  readonly meta: 'map';
  readonly key: string;
  readonly value: MetaI | string;
}

export interface MetaU extends MetaI {
  readonly meta: 'union';
  readonly choices: Array<MetaI | string | undefined>;
}

export interface MetaS<T, R> {
  readonly request: MetaO;
  readonly response: MetaO;
  readonly clientStreaming: boolean;
  readonly serverStreaming: boolean;
  readonly encodeRequest?: (message: T, writer: Writer) => Writer;
  readonly decodeResponse?: (input: Uint8Array | Reader, length?: number) => R;
}

export interface MetaB extends MetaI {
  readonly meta: 'builtin';
  readonly type: string;
  readonly original: string;
}

export const protobufPackage = 'io.restorecommerce.graph'

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
  fromJSON(object: any): TraversalRequest {
    const message = { ...baseTraversalRequest } as TraversalRequest;
    if (object.startVertex !== undefined && object.startVertex !== null) {
      message.startVertex = String(object.startVertex);
    } else {
      message.startVertex = undefined;
    }
    if (object.startVertices !== undefined && object.startVertices !== null) {
      message.startVertices = TraversalRequest_StartVertices.fromJSON(object.startVertices);
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
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromJSON(object.apiKey);
    } else {
      message.apiKey = undefined;
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
      message.startVertices = TraversalRequest_StartVertices.fromPartial(object.startVertices);
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
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromPartial(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  toJSON(message: TraversalRequest): unknown {
    const obj: any = {};
    message.startVertex !== undefined && (obj.startVertex = message.startVertex);
    message.startVertices !== undefined && (obj.startVertices = message.startVertices ? TraversalRequest_StartVertices.toJSON(message.startVertices) : undefined);
    message.opts !== undefined && (obj.opts = message.opts ? Options.toJSON(message.opts) : undefined);
    message.collectionName !== undefined && (obj.collectionName = message.collectionName);
    message.edgeName !== undefined && (obj.edgeName = message.edgeName);
    message.data !== undefined && (obj.data = message.data);
    message.path !== undefined && (obj.path = message.path);
    message.aql !== undefined && (obj.aql = message.aql);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    message.apiKey !== undefined && (obj.apiKey = message.apiKey ? ApiKey.toJSON(message.apiKey) : undefined);
    return obj;
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
  fromJSON(object: any): TraversalRequest_StartVertices {
    const message = { ...baseTraversalRequest_StartVertices } as TraversalRequest_StartVertices;
    message.vertices = [];
    if (object.vertices !== undefined && object.vertices !== null) {
      for (const e of object.vertices) {
        message.vertices.push(String(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TraversalRequest_StartVertices>): TraversalRequest_StartVertices {
    const message = { ...baseTraversalRequest_StartVertices } as TraversalRequest_StartVertices;
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
      obj.vertices = message.vertices.map(e => e);
    } else {
      obj.vertices = [];
    }
    return obj;
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
  fromJSON(object: any): TraversalResponse {
    const message = { ...baseTraversalResponse } as TraversalResponse;
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
    return message;
  },
  toJSON(message: TraversalResponse): unknown {
    const obj: any = {};
    if (message.vertexFields) {
      obj.vertexFields = message.vertexFields.map(e => e ? VertexFields.toJSON(e) : undefined);
    } else {
      obj.vertexFields = [];
    }
    message.paths !== undefined && (obj.paths = message.paths ? Any.toJSON(message.paths) : undefined);
    message.data !== undefined && (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    return obj;
  },
};

export const VertexFields = {
  encode(message: VertexFields, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.aid);
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
        case 1:
          message.aid = reader.string();
          break;
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
  fromJSON(object: any): VertexFields {
    const message = { ...baseVertexFields } as VertexFields;
    if (object.aid !== undefined && object.aid !== null) {
      message.aid = String(object.aid);
    } else {
      message.aid = "";
    }
    if (object.Key !== undefined && object.Key !== null) {
      message.Key = String(object.Key);
    } else {
      message.Key = "";
    }
    if (object.Rev !== undefined && object.Rev !== null) {
      message.Rev = String(object.Rev);
    } else {
      message.Rev = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<VertexFields>): VertexFields {
    const message = { ...baseVertexFields } as VertexFields;
    if (object.aid !== undefined && object.aid !== null) {
      message.aid = object.aid;
    } else {
      message.aid = "";
    }
    if (object.Key !== undefined && object.Key !== null) {
      message.Key = object.Key;
    } else {
      message.Key = "";
    }
    if (object.Rev !== undefined && object.Rev !== null) {
      message.Rev = object.Rev;
    } else {
      message.Rev = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
  toJSON(message: VertexFields): unknown {
    const obj: any = {};
    message.aid !== undefined && (obj.aid = message.aid);
    message.Key !== undefined && (obj.Key = message.Key);
    message.Rev !== undefined && (obj.Rev = message.Rev);
    message.id !== undefined && (obj.id = message.id);
    return obj;
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
  fromJSON(object: any): Options {
    const message = { ...baseOptions } as Options;
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
    if (object.lowestCommonAncestor !== undefined && object.lowestCommonAncestor !== null) {
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
    if (object.lowestCommonAncestor !== undefined && object.lowestCommonAncestor !== null) {
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
    message.startVertex !== undefined && (obj.startVertex = message.startVertex);
    message.visitor !== undefined && (obj.visitor = message.visitor);
    message.itemOrder !== undefined && (obj.itemOrder = message.itemOrder);
    message.strategy !== undefined && (obj.strategy = message.strategy);
    if (message.filter) {
      obj.filter = message.filter.map(e => e ? Filter.toJSON(e) : undefined);
    } else {
      obj.filter = [];
    }
    message.init !== undefined && (obj.init = message.init);
    message.maxIterations !== undefined && (obj.maxIterations = message.maxIterations);
    message.maxDepth !== undefined && (obj.maxDepth = message.maxDepth);
    message.uniqueness !== undefined && (obj.uniqueness = message.uniqueness ? Uniqueness.toJSON(message.uniqueness) : undefined);
    message.order !== undefined && (obj.order = message.order);
    message.graphName !== undefined && (obj.graphName = message.graphName);
    if (message.expander) {
      obj.expander = message.expander.map(e => e ? Expander.toJSON(e) : undefined);
    } else {
      obj.expander = [];
    }
    message.edgeCollection !== undefined && (obj.edgeCollection = message.edgeCollection);
    message.lowestCommonAncestor !== undefined && (obj.lowestCommonAncestor = message.lowestCommonAncestor);
    return obj;
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
  fromJSON(object: any): Filter {
    const message = { ...baseFilter } as Filter;
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
  fromJSON(object: any): Expander {
    const message = { ...baseExpander } as Expander;
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
  fromJSON(object: any): Uniqueness {
    const message = { ...baseUniqueness } as Uniqueness;
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

export const metaTraversalRequest: { [key in keyof Required<TraversalRequest>]: MetaI | string } = {
  startVertex: {meta:'union', choices: [undefined, {meta:'builtin', type:'string', original:'string'} as MetaB]} as MetaU,
  startVertices: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.graph.TraversalRequest.StartVertices', name:'TraversalRequest_StartVertices'} as MetaO]} as MetaU,
  opts: {meta:'object', type:'.io.restorecommerce.graph.Options', name:'Options'} as MetaO,
  collectionName: {meta:'builtin', type:'string', original:'string'} as MetaB,
  edgeName: {meta:'builtin', type:'string', original:'string'} as MetaB,
  data: {meta:'builtin', type:'boolean', original:'bool'} as MetaB,
  path: {meta:'builtin', type:'boolean', original:'bool'} as MetaB,
  aql: {meta:'builtin', type:'boolean', original:'bool'} as MetaB,
  subject: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.Subject', name:'Subject'} as MetaO]} as MetaU,
  apiKey: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.ApiKey', name:'ApiKey'} as MetaO]} as MetaU,
}
export const metaTraversalRequest_StartVertices: { [key in keyof Required<TraversalRequest_StartVertices>]: MetaI | string } = {
  vertices: {meta:'array', type:{meta:'builtin', type:'string', original:'string'} as MetaB} as MetaA,
}
export const metaTraversalResponse: { [key in keyof Required<TraversalResponse>]: MetaI | string } = {
  vertexFields: {meta:'array', type:{meta:'object', type:'.io.restorecommerce.graph.VertexFields', name:'VertexFields'} as MetaO} as MetaA,
  paths: {meta:'object', type:'.google.protobuf.Any', name:'Any'} as MetaO,
  data: {meta:'object', type:'.google.protobuf.Any', name:'Any'} as MetaO,
}
export const metaVertexFields: { [key in keyof Required<VertexFields>]: MetaI | string } = {
  aid: {meta:'builtin', type:'string', original:'string'} as MetaB,
  Key: {meta:'builtin', type:'string', original:'string'} as MetaB,
  Rev: {meta:'builtin', type:'string', original:'string'} as MetaB,
  id: {meta:'builtin', type:'string', original:'string'} as MetaB,
}
export const metaOptions: { [key in keyof Required<Options>]: MetaI | string } = {
  sort: {meta:'builtin', type:'string', original:'string'} as MetaB,
  direction: {meta:'builtin', type:'string', original:'string'} as MetaB,
  minDepth: {meta:'builtin', type:'number', original:'uint32'} as MetaB,
  startVertex: {meta:'builtin', type:'string', original:'string'} as MetaB,
  visitor: {meta:'builtin', type:'string', original:'string'} as MetaB,
  itemOrder: {meta:'builtin', type:'string', original:'string'} as MetaB,
  strategy: {meta:'builtin', type:'string', original:'string'} as MetaB,
  filter: {meta:'array', type:{meta:'object', type:'.io.restorecommerce.graph.Filter', name:'Filter'} as MetaO} as MetaA,
  init: {meta:'builtin', type:'string', original:'string'} as MetaB,
  maxIterations: {meta:'builtin', type:'number', original:'uint32'} as MetaB,
  maxDepth: {meta:'builtin', type:'number', original:'uint32'} as MetaB,
  uniqueness: {meta:'object', type:'.io.restorecommerce.graph.Uniqueness', name:'Uniqueness'} as MetaO,
  order: {meta:'builtin', type:'string', original:'string'} as MetaB,
  graphName: {meta:'builtin', type:'string', original:'string'} as MetaB,
  expander: {meta:'array', type:{meta:'object', type:'.io.restorecommerce.graph.Expander', name:'Expander'} as MetaO} as MetaA,
  edgeCollection: {meta:'builtin', type:'string', original:'string'} as MetaB,
  lowestCommonAncestor: {meta:'builtin', type:'boolean', original:'bool'} as MetaB,
}
export const metaFilter: { [key in keyof Required<Filter>]: MetaI | string } = {
  vertex: {meta:'builtin', type:'string', original:'string'} as MetaB,
}
export const metaExpander: { [key in keyof Required<Expander>]: MetaI | string } = {
  edge: {meta:'builtin', type:'string', original:'string'} as MetaB,
  direction: {meta:'builtin', type:'string', original:'string'} as MetaB,
}
export const metaUniqueness: { [key in keyof Required<Uniqueness>]: MetaI | string } = {
  vertices: {meta:'builtin', type:'string', original:'string'} as MetaB,
  edges: {meta:'builtin', type:'string', original:'string'} as MetaB,
}
export const metaService: { [key in keyof Service]: MetaS<any, any> } = {
  Traversal: {request: {meta:'object', type:'.io.restorecommerce.graph.TraversalRequest', name:'TraversalRequest'} as MetaO, response: {meta:'object', type:'.io.restorecommerce.graph.TraversalResponse', name:'TraversalResponse'} as MetaO, clientStreaming: false, serverStreaming: true, encodeRequest: TraversalRequest.encode, decodeResponse: TraversalResponse.decode} as MetaS<TraversalRequest, TraversalResponse>,
}
export const metaPackageIoRestorecommerceGraph: { [key: string]: ['service', string, any, { [key: string]: MetaS<any, any> }] | ['enum', string, any, any] | ['message', string, any, { [key: string]: MetaI | string }] } = {
  TraversalRequest: ['message', '.io.restorecommerce.graph.TraversalRequest', TraversalRequest, metaTraversalRequest],
  TraversalRequest_StartVertices: ['message', '.io.restorecommerce.graph.TraversalRequest.StartVertices', TraversalRequest_StartVertices, metaTraversalRequest_StartVertices],
  TraversalResponse: ['message', '.io.restorecommerce.graph.TraversalResponse', TraversalResponse, metaTraversalResponse],
  VertexFields: ['message', '.io.restorecommerce.graph.VertexFields', VertexFields, metaVertexFields],
  Options: ['message', '.io.restorecommerce.graph.Options', Options, metaOptions],
  Filter: ['message', '.io.restorecommerce.graph.Filter', Filter, metaFilter],
  Expander: ['message', '.io.restorecommerce.graph.Expander', Expander, metaExpander],
  Uniqueness: ['message', '.io.restorecommerce.graph.Uniqueness', Uniqueness, metaUniqueness],
  Service: ['service', '.io.restorecommerce.graph.Service', undefined, metaService],
}
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