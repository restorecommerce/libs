/* eslint-disable */
import { Any } from '../../google/protobuf/any';
import { Subject } from '../../io/restorecommerce/auth';
import { Writer, Reader } from 'protobufjs/minimal';


export interface TokenData {
  id: string;
  payload?: Any;
  expiresIn: number;
  type: string;
  subject?: Subject;
}

export interface Identifier {
  id: string;
  type: string;
  subject?: Subject;
}

export interface GrantId {
  grantId: string;
  subject?: Subject;
}

const baseTokenData: object = {
  id: "",
  expiresIn: 0,
  type: "",
};

const baseIdentifier: object = {
  id: "",
  type: "",
};

const baseGrantId: object = {
  grantId: "",
};

/**
 *
 *  Microservice definition.
 */
export interface Service {

  /**
   *  creates or upserts ID_token to `Redis` and returns sucess or failure message
   */
  upsert(request: TokenData): Promise<Any>;

  /**
   *  find id_token using access_token identifier (Return previously stored instance of an oidc-provider model)  
   */
  find(request: Identifier): Promise<Any>;

  /**
   *  removes the id_token from redis
   */
  destroy(request: Identifier): Promise<Any>;

  /**
   *  Destroy/Drop/Remove a stored id_token by its grantId property reference.
   */
  revokeByGrantId(request: GrantId): Promise<Any>;

  /**
   *  Mark a stored id_token as consumed (not yet expired though!). Future finds for this id should be fulfilled with an object containing additional property named "consumed" with a truthy value (timestamp, date, boolean, etc).
   */
  consume(request: Identifier): Promise<Any>;

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

export const protobufPackage = 'io.restorecommerce.token'

export const TokenData = {
  encode(message: TokenData, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    if (message.payload !== undefined && message.payload !== undefined) {
      Any.encode(message.payload, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(25).double(message.expiresIn);
    writer.uint32(34).string(message.type);
    if (message.subject !== undefined && message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): TokenData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTokenData } as TokenData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.payload = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.expiresIn = reader.double();
          break;
        case 4:
          message.type = reader.string();
          break;
        case 5:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TokenData {
    const message = { ...baseTokenData } as TokenData;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = Any.fromJSON(object.payload);
    } else {
      message.payload = undefined;
    }
    if (object.expiresIn !== undefined && object.expiresIn !== null) {
      message.expiresIn = Number(object.expiresIn);
    } else {
      message.expiresIn = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<TokenData>): TokenData {
    const message = { ...baseTokenData } as TokenData;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = Any.fromPartial(object.payload);
    } else {
      message.payload = undefined;
    }
    if (object.expiresIn !== undefined && object.expiresIn !== null) {
      message.expiresIn = object.expiresIn;
    } else {
      message.expiresIn = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },
  toJSON(message: TokenData): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.payload !== undefined && (obj.payload = message.payload ? Any.toJSON(message.payload) : undefined);
    message.expiresIn !== undefined && (obj.expiresIn = message.expiresIn);
    message.type !== undefined && (obj.type = message.type);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },
};

export const Identifier = {
  encode(message: Identifier, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    writer.uint32(18).string(message.type);
    if (message.subject !== undefined && message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Identifier {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIdentifier } as Identifier;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.type = reader.string();
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
  fromJSON(object: any): Identifier {
    const message = { ...baseIdentifier } as Identifier;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<Identifier>): Identifier {
    const message = { ...baseIdentifier } as Identifier;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },
  toJSON(message: Identifier): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.type !== undefined && (obj.type = message.type);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },
};

export const GrantId = {
  encode(message: GrantId, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.grantId);
    if (message.subject !== undefined && message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): GrantId {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGrantId } as GrantId;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantId = reader.string();
          break;
        case 2:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GrantId {
    const message = { ...baseGrantId } as GrantId;
    if (object.grantId !== undefined && object.grantId !== null) {
      message.grantId = String(object.grantId);
    } else {
      message.grantId = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<GrantId>): GrantId {
    const message = { ...baseGrantId } as GrantId;
    if (object.grantId !== undefined && object.grantId !== null) {
      message.grantId = object.grantId;
    } else {
      message.grantId = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },
  toJSON(message: GrantId): unknown {
    const obj: any = {};
    message.grantId !== undefined && (obj.grantId = message.grantId);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },
};

export const metaTokenData: { [key in keyof Required<TokenData>]: MetaI | string } = {
  id: {meta:'builtin', type:'string', original:'string'} as MetaB,
  payload: {meta:'object', type:'.google.protobuf.Any', name:'Any'} as MetaO,
  expiresIn: {meta:'builtin', type:'number', original:'double'} as MetaB,
  subject: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.Subject', name:'Subject'} as MetaO]} as MetaU,
  apiKey: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.ApiKey', name:'ApiKey'} as MetaO]} as MetaU,
}
export const metaIdentifier: { [key in keyof Required<Identifier>]: MetaI | string } = {
  id: {meta:'builtin', type:'string', original:'string'} as MetaB,
  subject: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.Subject', name:'Subject'} as MetaO]} as MetaU,
  apiKey: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.ApiKey', name:'ApiKey'} as MetaO]} as MetaU,
}
export const metaUniqueIdentifier: { [key in keyof Required<UniqueIdentifier>]: MetaI | string } = {
  uid: {meta:'builtin', type:'string', original:'string'} as MetaB,
  subject: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.Subject', name:'Subject'} as MetaO]} as MetaU,
  apiKey: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.ApiKey', name:'ApiKey'} as MetaO]} as MetaU,
}
export const metaUserCode: { [key in keyof Required<UserCode>]: MetaI | string } = {
  userCode: {meta:'builtin', type:'string', original:'string'} as MetaB,
  subject: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.Subject', name:'Subject'} as MetaO]} as MetaU,
  apiKey: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.ApiKey', name:'ApiKey'} as MetaO]} as MetaU,
}
export const metaGrantId: { [key in keyof Required<GrantId>]: MetaI | string } = {
  grantId: {meta:'builtin', type:'string', original:'string'} as MetaB,
  subject: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.Subject', name:'Subject'} as MetaO]} as MetaU,
  apiKey: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.ApiKey', name:'ApiKey'} as MetaO]} as MetaU,
}
export const metaService: { [key in keyof Service]: MetaS<any, any> } = {
  upsert: {request: {meta:'object', type:'.io.restorecommerce.token.TokenData', name:'TokenData'} as MetaO, response: {meta:'object', type:'.google.protobuf.Any', name:'Any'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: TokenData.encode, decodeResponse: Any.decode} as MetaS<TokenData, Any>,
  find: {request: {meta:'object', type:'.io.restorecommerce.token.Identifier', name:'Identifier'} as MetaO, response: {meta:'object', type:'.google.protobuf.Any', name:'Any'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: Identifier.encode, decodeResponse: Any.decode} as MetaS<Identifier, Any>,
  findByUid: {request: {meta:'object', type:'.io.restorecommerce.token.UniqueIdentifier', name:'UniqueIdentifier'} as MetaO, response: {meta:'object', type:'.google.protobuf.Any', name:'Any'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: UniqueIdentifier.encode, decodeResponse: Any.decode} as MetaS<UniqueIdentifier, Any>,
  findByUserCode: {request: {meta:'object', type:'.io.restorecommerce.token.UserCode', name:'UserCode'} as MetaO, response: {meta:'object', type:'.google.protobuf.Any', name:'Any'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: UserCode.encode, decodeResponse: Any.decode} as MetaS<UserCode, Any>,
  destroy: {request: {meta:'object', type:'.io.restorecommerce.token.Identifier', name:'Identifier'} as MetaO, response: {meta:'object', type:'.google.protobuf.Any', name:'Any'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: Identifier.encode, decodeResponse: Any.decode} as MetaS<Identifier, Any>,
  revokeByGrantId: {request: {meta:'object', type:'.io.restorecommerce.token.GrantId', name:'GrantId'} as MetaO, response: {meta:'object', type:'.google.protobuf.Any', name:'Any'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: GrantId.encode, decodeResponse: Any.decode} as MetaS<GrantId, Any>,
  consume: {request: {meta:'object', type:'.io.restorecommerce.token.Identifier', name:'Identifier'} as MetaO, response: {meta:'object', type:'.google.protobuf.Any', name:'Any'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: Identifier.encode, decodeResponse: Any.decode} as MetaS<Identifier, Any>,
}
export const metaPackageIoRestorecommerceToken: { [key: string]: ['service', string, any, { [key: string]: MetaS<any, any> }] | ['enum', string, any, any] | ['message', string, any, { [key: string]: MetaI | string }] } = {
  TokenData: ['message', '.io.restorecommerce.token.TokenData', TokenData, metaTokenData],
  Identifier: ['message', '.io.restorecommerce.token.Identifier', Identifier, metaIdentifier],
  UniqueIdentifier: ['message', '.io.restorecommerce.token.UniqueIdentifier', UniqueIdentifier, metaUniqueIdentifier],
  UserCode: ['message', '.io.restorecommerce.token.UserCode', UserCode, metaUserCode],
  GrantId: ['message', '.io.restorecommerce.token.GrantId', GrantId, metaGrantId],
  Service: ['service', '.io.restorecommerce.token.Service', undefined, metaService],
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