/* eslint-disable */
import { Subject } from '../../io/restorecommerce/auth';
import { Any } from '../../google/protobuf/any';
import { Writer, Reader } from 'protobufjs/minimal';


export interface SearchRequest {
  collection: string;
  text: string;
  acl: string[];
  subject?: Subject;
}

export interface SearchResponse {
  data: Any[];
}

const baseSearchRequest: object = {
  collection: "",
  text: "",
  acl: "",
};

const baseSearchResponse: object = {
};

/**
 *  Service provides the CRUD operations
 */
export interface Service {

  Search(request: SearchRequest): Promise<SearchResponse>;

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

export const protobufPackage = 'io.restorecommerce.search'

export const SearchRequest = {
  encode(message: SearchRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.collection);
    writer.uint32(18).string(message.text);
    for (const v of message.acl) {
      writer.uint32(26).string(v!);
    }
    if (message.subject !== undefined && message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): SearchRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSearchRequest } as SearchRequest;
    message.acl = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collection = reader.string();
          break;
        case 2:
          message.text = reader.string();
          break;
        case 3:
          message.acl.push(reader.string());
          break;
        case 4:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SearchRequest {
    const message = { ...baseSearchRequest } as SearchRequest;
    message.acl = [];
    if (object.collection !== undefined && object.collection !== null) {
      message.collection = String(object.collection);
    } else {
      message.collection = "";
    }
    if (object.text !== undefined && object.text !== null) {
      message.text = String(object.text);
    } else {
      message.text = "";
    }
    if (object.acl !== undefined && object.acl !== null) {
      for (const e of object.acl) {
        message.acl.push(String(e));
      }
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<SearchRequest>): SearchRequest {
    const message = { ...baseSearchRequest } as SearchRequest;
    message.acl = [];
    if (object.collection !== undefined && object.collection !== null) {
      message.collection = object.collection;
    } else {
      message.collection = "";
    }
    if (object.text !== undefined && object.text !== null) {
      message.text = object.text;
    } else {
      message.text = "";
    }
    if (object.acl !== undefined && object.acl !== null) {
      for (const e of object.acl) {
        message.acl.push(e);
      }
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },
  toJSON(message: SearchRequest): unknown {
    const obj: any = {};
    message.collection !== undefined && (obj.collection = message.collection);
    message.text !== undefined && (obj.text = message.text);
    if (message.acl) {
      obj.acl = message.acl.map(e => e);
    } else {
      obj.acl = [];
    }
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },
};

export const SearchResponse = {
  encode(message: SearchResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.data) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): SearchResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSearchResponse } as SearchResponse;
    message.data = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SearchResponse {
    const message = { ...baseSearchResponse } as SearchResponse;
    message.data = [];
    if (object.data !== undefined && object.data !== null) {
      for (const e of object.data) {
        message.data.push(Any.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SearchResponse>): SearchResponse {
    const message = { ...baseSearchResponse } as SearchResponse;
    message.data = [];
    if (object.data !== undefined && object.data !== null) {
      for (const e of object.data) {
        message.data.push(Any.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: SearchResponse): unknown {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.data = [];
    }
    return obj;
  },
};

export const metaSearchRequest: { [key in keyof Required<SearchRequest>]: MetaI | string } = {
  collection: {meta:'builtin', type:'string', original:'string'} as MetaB,
  text: {meta:'builtin', type:'string', original:'string'} as MetaB,
  acl: {meta:'array', type:{meta:'builtin', type:'string', original:'string'} as MetaB} as MetaA,
  subject: {meta:'object', type:'.io.restorecommerce.auth.Subject', name:'Subject'} as MetaO,
}
export const metaSearchResponse: { [key in keyof Required<SearchResponse>]: MetaI | string } = {
  data: {meta:'array', type:{meta:'object', type:'.google.protobuf.Any', name:'Any'} as MetaO} as MetaA,
}
export const metaService: { [key in keyof Service]: MetaS<any, any> } = {
  Search: {request: {meta:'object', type:'.io.restorecommerce.search.SearchRequest', name:'SearchRequest'} as MetaO, response: {meta:'object', type:'.io.restorecommerce.search.SearchResponse', name:'SearchResponse'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: SearchRequest.encode, decodeResponse: SearchResponse.decode} as MetaS<SearchRequest, SearchResponse>,
}
export const metaPackageIoRestorecommerceSearch: { [key: string]: ['service', string, any, { [key: string]: MetaS<any, any> }] | ['enum', string, any, any] | ['message', string, any, { [key: string]: MetaI | string }] } = {
  SearchRequest: ['message', '.io.restorecommerce.search.SearchRequest', SearchRequest, metaSearchRequest],
  SearchResponse: ['message', '.io.restorecommerce.search.SearchResponse', SearchResponse, metaSearchResponse],
  Service: ['service', '.io.restorecommerce.search.Service', undefined, metaService],
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