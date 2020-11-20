/* eslint-disable */
import { Subject } from '../../io/restorecommerce/auth';
import { Meta } from '../../io/restorecommerce/meta';
import { Any } from '../../google/protobuf/any';
import { ReadRequest, DeleteRequest } from '../../io/restorecommerce/resource_base';
import { Empty } from '../../google/protobuf/empty';
import { Writer, Reader } from 'protobufjs/minimal';


export interface Deleted {
  id: string;
}

export interface CredentialList {
  items: Credential[];
  totalCount: number;
  subject?: Subject;
}

export interface Credential {
  id: string;
  meta?: Meta;
  name: string;
  description: string;
  user: string;
  pass: string;
  /**
   * / additional credentials as auth key or certificates etc
   */
  credentials?: Any;
}

const baseDeleted: object = {
  id: "",
};

const baseCredentialList: object = {
  totalCount: 0,
};

const baseCredential: object = {
  id: "",
  name: "",
  description: "",
  user: "",
  pass: "",
};

/**
 *
 *  Microservice definition.
 */
export interface Service {

  Read(request: ReadRequest): Promise<CredentialList>;

  Create(request: CredentialList): Promise<CredentialList>;

  Delete(request: DeleteRequest): Promise<Empty>;

  Update(request: CredentialList): Promise<CredentialList>;

  Upsert(request: CredentialList): Promise<CredentialList>;

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

export const protobufPackage = 'io.restorecommerce.credential'

export const Deleted = {
  encode(message: Deleted, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Deleted {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleted } as Deleted;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Deleted {
    const message = { ...baseDeleted } as Deleted;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Deleted>): Deleted {
    const message = { ...baseDeleted } as Deleted;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
  toJSON(message: Deleted): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
};

export const CredentialList = {
  encode(message: CredentialList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      Credential.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(16).uint32(message.totalCount);
    if (message.subject !== undefined && message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CredentialList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCredentialList } as CredentialList;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Credential.decode(reader, reader.uint32()));
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
  fromJSON(object: any): CredentialList {
    const message = { ...baseCredentialList } as CredentialList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Credential.fromJSON(e));
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
  fromPartial(object: DeepPartial<CredentialList>): CredentialList {
    const message = { ...baseCredentialList } as CredentialList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Credential.fromPartial(e));
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
  toJSON(message: CredentialList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map(e => e ? Credential.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },
};

export const Credential = {
  encode(message: Credential, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    if (message.meta !== undefined && message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.name);
    writer.uint32(34).string(message.description);
    writer.uint32(42).string(message.user);
    writer.uint32(50).string(message.pass);
    if (message.credentials !== undefined && message.credentials !== undefined) {
      Any.encode(message.credentials, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Credential {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCredential } as Credential;
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
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.user = reader.string();
          break;
        case 6:
          message.pass = reader.string();
          break;
        case 7:
          message.credentials = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Credential {
    const message = { ...baseCredential } as Credential;
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
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = String(object.user);
    } else {
      message.user = "";
    }
    if (object.pass !== undefined && object.pass !== null) {
      message.pass = String(object.pass);
    } else {
      message.pass = "";
    }
    if (object.credentials !== undefined && object.credentials !== null) {
      message.credentials = Any.fromJSON(object.credentials);
    } else {
      message.credentials = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<Credential>): Credential {
    const message = { ...baseCredential } as Credential;
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
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    } else {
      message.user = "";
    }
    if (object.pass !== undefined && object.pass !== null) {
      message.pass = object.pass;
    } else {
      message.pass = "";
    }
    if (object.credentials !== undefined && object.credentials !== null) {
      message.credentials = Any.fromPartial(object.credentials);
    } else {
      message.credentials = undefined;
    }
    return message;
  },
  toJSON(message: Credential): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.user !== undefined && (obj.user = message.user);
    message.pass !== undefined && (obj.pass = message.pass);
    message.credentials !== undefined && (obj.credentials = message.credentials ? Any.toJSON(message.credentials) : undefined);
    return obj;
  },
};

export const metaDeleted: { [key in keyof Required<Deleted>]: MetaI | string } = {
  id: {meta:'builtin', type:'string', original:'string'} as MetaB,
}
export const metaCredentialList: { [key in keyof Required<CredentialList>]: MetaI | string } = {
  items: {meta:'array', type:{meta:'object', type:'.io.restorecommerce.credential.Credential', name:'Credential'} as MetaO} as MetaA,
  totalCount: {meta:'builtin', type:'number', original:'uint32'} as MetaB,
  subject: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.Subject', name:'Subject'} as MetaO]} as MetaU,
  apiKey: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.ApiKey', name:'ApiKey'} as MetaO]} as MetaU,
}
export const metaCredential: { [key in keyof Required<Credential>]: MetaI | string } = {
  id: {meta:'builtin', type:'string', original:'string'} as MetaB,
  meta: {meta:'object', type:'.io.restorecommerce.meta.Meta', name:'Meta'} as MetaO,
  name: {meta:'builtin', type:'string', original:'string'} as MetaB,
  description: {meta:'builtin', type:'string', original:'string'} as MetaB,
  user: {meta:'builtin', type:'string', original:'string'} as MetaB,
  pass: {meta:'builtin', type:'string', original:'string'} as MetaB,
  credentials: {meta:'object', type:'.google.protobuf.Any', name:'Any'} as MetaO,
}
export const metaService: { [key in keyof Service]: MetaS<any, any> } = {
  Read: {request: {meta:'object', type:'.io.restorecommerce.resourcebase.ReadRequest', name:'ReadRequest'} as MetaO, response: {meta:'object', type:'.io.restorecommerce.credential.CredentialList', name:'CredentialList'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: ReadRequest.encode, decodeResponse: CredentialList.decode} as MetaS<ReadRequest, CredentialList>,
  Create: {request: {meta:'object', type:'.io.restorecommerce.credential.CredentialList', name:'CredentialList'} as MetaO, response: {meta:'object', type:'.io.restorecommerce.credential.CredentialList', name:'CredentialList'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: CredentialList.encode, decodeResponse: CredentialList.decode} as MetaS<CredentialList, CredentialList>,
  Delete: {request: {meta:'object', type:'.io.restorecommerce.resourcebase.DeleteRequest', name:'DeleteRequest'} as MetaO, response: {meta:'object', type:'.google.protobuf.Empty', name:'Empty'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: DeleteRequest.encode, decodeResponse: Empty.decode} as MetaS<DeleteRequest, Empty>,
  Update: {request: {meta:'object', type:'.io.restorecommerce.credential.CredentialList', name:'CredentialList'} as MetaO, response: {meta:'object', type:'.io.restorecommerce.credential.CredentialList', name:'CredentialList'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: CredentialList.encode, decodeResponse: CredentialList.decode} as MetaS<CredentialList, CredentialList>,
  Upsert: {request: {meta:'object', type:'.io.restorecommerce.credential.CredentialList', name:'CredentialList'} as MetaO, response: {meta:'object', type:'.io.restorecommerce.credential.CredentialList', name:'CredentialList'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: CredentialList.encode, decodeResponse: CredentialList.decode} as MetaS<CredentialList, CredentialList>,
}
export const metaPackageIoRestorecommerceCredential: { [key: string]: ['service', string, any, { [key: string]: MetaS<any, any> }] | ['enum', string, any, any] | ['message', string, any, { [key: string]: MetaI | string }] } = {
  Deleted: ['message', '.io.restorecommerce.credential.Deleted', Deleted, metaDeleted],
  CredentialList: ['message', '.io.restorecommerce.credential.CredentialList', CredentialList, metaCredentialList],
  Credential: ['message', '.io.restorecommerce.credential.Credential', Credential, metaCredential],
  Service: ['service', '.io.restorecommerce.credential.Service', undefined, metaService],
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