/* eslint-disable */
import { Any } from '../../google/protobuf/any';
import { Writer, Reader } from 'protobufjs/minimal';


export interface Payload {
  /**
   *  json with <key, template> pairs
   *  e.g. { 'subject': ..., 'message':....}
   */
  templates?: Any;
  /**
   *  data to fill template with
   */
  data?: Any;
  /**
   *  stylesheet URL
   */
  styleUrl: string;
  /**
   *  inlining, copying CSS into <style>, etc...
   */
  strategy: Payload_Strategy;
  /**
   *  rendering options JSON object
   */
  options?: Any;
  /**
   *  content type for rendering such as 'application/html' or 'application/text'
   */
  contentType: string;
}

export interface RenderRequest {
  /**
   *  identifies the render request payload
   */
  id: string;
  /**
   *  List of templates with associated data and rendering options
   */
  payload: Payload[];
}

export interface RenderResponse {
  id: string;
  /**
   *  error or HTML contents
   */
  response: Any[];
}

const basePayload: object = {
  styleUrl: "",
  strategy: 0,
  contentType: "",
};

const baseRenderRequest: object = {
  id: "",
};

const baseRenderResponse: object = {
  id: "",
};

export interface MetaBase {
  readonly kind: 'object' | 'array' | 'map' | 'union' | 'builtin';
}

export interface MetaMessage extends MetaBase {
  readonly kind: 'object';
  readonly type: string;
  readonly name: string;
}

export interface MetaArray extends MetaBase {
  readonly kind: 'array';
  readonly type: MetaBase | string;
}

export interface MetaMap extends MetaBase {
  readonly kind: 'map';
  readonly key: string;
  readonly value: MetaBase | string;
}

export interface MetaUnion extends MetaBase {
  readonly kind: 'union';
  readonly choices: Array<MetaBase | string | undefined>;
}

export interface MetaService<T, R> {
  readonly request: MetaMessage;
  readonly response: MetaMessage;
  readonly clientStreaming: boolean;
  readonly serverStreaming: boolean;
  readonly encodeRequest?: (message: T, writer: Writer) => Writer;
  readonly decodeResponse?: (input: Uint8Array | Reader, length?: number) => R;
}

export interface MetaPrimitive extends MetaBase {
  readonly kind: 'builtin';
  readonly type: string;
  readonly original: string;
}

export const protobufPackage = 'io.restorecommerce.rendering'

/**  style-applying 'strategy'
 */
export enum Payload_Strategy {
  INLINE = 0,
  COPY = 1,
  UNRECOGNIZED = -1,
}

export function payload_StrategyFromJSON(object: any): Payload_Strategy {
  switch (object) {
    case 0:
    case "INLINE":
      return Payload_Strategy.INLINE;
    case 1:
    case "COPY":
      return Payload_Strategy.COPY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Payload_Strategy.UNRECOGNIZED;
  }
}

export function payload_StrategyToJSON(object: Payload_Strategy): string {
  switch (object) {
    case Payload_Strategy.INLINE:
      return "INLINE";
    case Payload_Strategy.COPY:
      return "COPY";
    default:
      return "UNKNOWN";
  }
}

export const Payload = {
  encode(message: Payload, writer: Writer = Writer.create()): Writer {
    if (message.templates !== undefined && message.templates !== undefined) {
      Any.encode(message.templates, writer.uint32(10).fork()).ldelim();
    }
    if (message.data !== undefined && message.data !== undefined) {
      Any.encode(message.data, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.styleUrl);
    writer.uint32(32).int32(message.strategy);
    if (message.options !== undefined && message.options !== undefined) {
      Any.encode(message.options, writer.uint32(42).fork()).ldelim();
    }
    writer.uint32(50).string(message.contentType);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Payload {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePayload } as Payload;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.templates = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.data = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.styleUrl = reader.string();
          break;
        case 4:
          message.strategy = reader.int32() as any;
          break;
        case 5:
          message.options = Any.decode(reader, reader.uint32());
          break;
        case 6:
          message.contentType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Payload {
    const message = { ...basePayload } as Payload;
    if (object.templates !== undefined && object.templates !== null) {
      message.templates = Any.fromJSON(object.templates);
    } else {
      message.templates = undefined;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromJSON(object.data);
    } else {
      message.data = undefined;
    }
    if (object.styleUrl !== undefined && object.styleUrl !== null) {
      message.styleUrl = String(object.styleUrl);
    } else {
      message.styleUrl = "";
    }
    if (object.strategy !== undefined && object.strategy !== null) {
      message.strategy = payload_StrategyFromJSON(object.strategy);
    } else {
      message.strategy = 0;
    }
    if (object.options !== undefined && object.options !== null) {
      message.options = Any.fromJSON(object.options);
    } else {
      message.options = undefined;
    }
    if (object.contentType !== undefined && object.contentType !== null) {
      message.contentType = String(object.contentType);
    } else {
      message.contentType = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Payload>): Payload {
    const message = { ...basePayload } as Payload;
    if (object.templates !== undefined && object.templates !== null) {
      message.templates = Any.fromPartial(object.templates);
    } else {
      message.templates = undefined;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromPartial(object.data);
    } else {
      message.data = undefined;
    }
    if (object.styleUrl !== undefined && object.styleUrl !== null) {
      message.styleUrl = object.styleUrl;
    } else {
      message.styleUrl = "";
    }
    if (object.strategy !== undefined && object.strategy !== null) {
      message.strategy = object.strategy;
    } else {
      message.strategy = 0;
    }
    if (object.options !== undefined && object.options !== null) {
      message.options = Any.fromPartial(object.options);
    } else {
      message.options = undefined;
    }
    if (object.contentType !== undefined && object.contentType !== null) {
      message.contentType = object.contentType;
    } else {
      message.contentType = "";
    }
    return message;
  },
  toJSON(message: Payload): unknown {
    const obj: any = {};
    message.templates !== undefined && (obj.templates = message.templates ? Any.toJSON(message.templates) : undefined);
    message.data !== undefined && (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    message.styleUrl !== undefined && (obj.styleUrl = message.styleUrl);
    message.strategy !== undefined && (obj.strategy = payload_StrategyToJSON(message.strategy));
    message.options !== undefined && (obj.options = message.options ? Any.toJSON(message.options) : undefined);
    message.contentType !== undefined && (obj.contentType = message.contentType);
    return obj;
  },
};

export const RenderRequest = {
  encode(message: RenderRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    for (const v of message.payload) {
      Payload.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): RenderRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRenderRequest } as RenderRequest;
    message.payload = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.payload.push(Payload.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RenderRequest {
    const message = { ...baseRenderRequest } as RenderRequest;
    message.payload = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.payload !== undefined && object.payload !== null) {
      for (const e of object.payload) {
        message.payload.push(Payload.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RenderRequest>): RenderRequest {
    const message = { ...baseRenderRequest } as RenderRequest;
    message.payload = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.payload !== undefined && object.payload !== null) {
      for (const e of object.payload) {
        message.payload.push(Payload.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: RenderRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.payload) {
      obj.payload = message.payload.map(e => e ? Payload.toJSON(e) : undefined);
    } else {
      obj.payload = [];
    }
    return obj;
  },
};

export const RenderResponse = {
  encode(message: RenderResponse, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    for (const v of message.response) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): RenderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRenderResponse } as RenderResponse;
    message.response = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.response.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RenderResponse {
    const message = { ...baseRenderResponse } as RenderResponse;
    message.response = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.response !== undefined && object.response !== null) {
      for (const e of object.response) {
        message.response.push(Any.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RenderResponse>): RenderResponse {
    const message = { ...baseRenderResponse } as RenderResponse;
    message.response = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.response !== undefined && object.response !== null) {
      for (const e of object.response) {
        message.response.push(Any.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: RenderResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.response) {
      obj.response = message.response.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.response = [];
    }
    return obj;
  },
};

export const metaPayload: { [key in keyof Required<Payload>]: MetaBase | string } = {
  templates: {kind:'object', type:'.google.protobuf.Any', name:'Any'} as MetaMessage,
  data: {kind:'object', type:'.google.protobuf.Any', name:'Any'} as MetaMessage,
  styleUrl: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  strategy: {kind:'object', type:'.io.restorecommerce.rendering.Payload.Strategy', name:'Payload_Strategy'} as MetaMessage,
  options: {kind:'object', type:'.google.protobuf.Any', name:'Any'} as MetaMessage,
  contentType: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
}
export const metaRenderRequest: { [key in keyof Required<RenderRequest>]: MetaBase | string } = {
  id: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  payload: {kind:'array', type:{kind:'object', type:'.io.restorecommerce.rendering.Payload', name:'Payload'} as MetaMessage} as MetaArray,
}
export const metaRenderResponse: { [key in keyof Required<RenderResponse>]: MetaBase | string } = {
  id: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  response: {kind:'array', type:{kind:'object', type:'.google.protobuf.Any', name:'Any'} as MetaMessage} as MetaArray,
}
export const metadata: { [key: string]: ['service', string, any, { [key: string]: MetaService<any, any> }] | ['enum', string, any, any] | ['message', string, any, { [key: string]: MetaBase | string }] } = {
  Payload: ['message', '.io.restorecommerce.rendering.Payload', Payload, metaPayload],
  Payload_Strategy: ['enum', '.io.restorecommerce.rendering.Payload.Strategy', Payload_Strategy, undefined],
  RenderRequest: ['message', '.io.restorecommerce.rendering.RenderRequest', RenderRequest, metaRenderRequest],
  RenderResponse: ['message', '.io.restorecommerce.rendering.RenderResponse', RenderResponse, metaRenderResponse],
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