/* eslint-disable */
import { Subject, ApiKey } from '../../io/restorecommerce/auth';
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
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
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
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(34).fork()).ldelim();
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
        case 4:
          message.apiKey = ApiKey.decode(reader, reader.uint32());
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
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromJSON(object.apiKey);
    } else {
      message.apiKey = undefined;
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
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromPartial(object.apiKey);
    } else {
      message.apiKey = undefined;
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
    message.apiKey !== undefined && (obj.apiKey = message.apiKey ? ApiKey.toJSON(message.apiKey) : undefined);
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