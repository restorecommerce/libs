/* eslint-disable */
import { Subject, ApiKey } from '../../io/restorecommerce/auth';
import { Meta } from '../../io/restorecommerce/meta';
import { ReadRequest, DeleteRequest } from '../../io/restorecommerce/resource_base';
import { Empty } from '../../google/protobuf/empty';
import { Writer, Reader } from 'protobufjs/minimal';


export interface AuthenticationLogList {
  items: AuthenticationLog[];
  totalCount: number;
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
}

/**
 * *
 *  Authentication Log
 */
export interface AuthenticationLog {
  /**
   *  log id
   */
  id: string;
  ipv4Address: string;
  ipv6Address: string;
  operatingSystem: string;
  userAgent: string;
  /**
   *  time stamp of login, logout or token update
   */
  date: number;
  /**
   *  login, logout
   */
  activity: string;
  /**
   *  meta info
   */
  meta?: Meta;
  /**
   *  subject id
   */
  subjectId: string;
  /**
   *  token name associated with io.restorecommerce.auth.Token.token_name
   */
  tokenName: string;
}

export interface Deleted {
  id: string;
}

const baseAuthenticationLogList: object = {
  totalCount: 0,
};

const baseAuthenticationLog: object = {
  id: "",
  ipv4Address: "",
  ipv6Address: "",
  operatingSystem: "",
  userAgent: "",
  date: 0,
  activity: "",
  subjectId: "",
  tokenName: "",
};

const baseDeleted: object = {
  id: "",
};

/**
 *
 *  Microservice definition.
 */
export interface Service {

  Read(request: ReadRequest): Promise<AuthenticationLogList>;

  Create(request: AuthenticationLogList): Promise<AuthenticationLogList>;

  Delete(request: DeleteRequest): Promise<Empty>;

  Update(request: AuthenticationLogList): Promise<AuthenticationLogList>;

  Upsert(request: AuthenticationLogList): Promise<AuthenticationLogList>;

}

export const protobufPackage = 'io.restorecommerce.authentication_log'

export const AuthenticationLogList = {
  encode(message: AuthenticationLogList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      AuthenticationLog.encode(v!, writer.uint32(10).fork()).ldelim();
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
  decode(input: Uint8Array | Reader, length?: number): AuthenticationLogList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAuthenticationLogList } as AuthenticationLogList;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(AuthenticationLog.decode(reader, reader.uint32()));
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
  fromJSON(object: any): AuthenticationLogList {
    const message = { ...baseAuthenticationLogList } as AuthenticationLogList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(AuthenticationLog.fromJSON(e));
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
  fromPartial(object: DeepPartial<AuthenticationLogList>): AuthenticationLogList {
    const message = { ...baseAuthenticationLogList } as AuthenticationLogList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(AuthenticationLog.fromPartial(e));
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
  toJSON(message: AuthenticationLogList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map(e => e ? AuthenticationLog.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    message.apiKey !== undefined && (obj.apiKey = message.apiKey ? ApiKey.toJSON(message.apiKey) : undefined);
    return obj;
  },
};

export const AuthenticationLog = {
  encode(message: AuthenticationLog, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    writer.uint32(18).string(message.ipv4Address);
    writer.uint32(26).string(message.ipv6Address);
    writer.uint32(34).string(message.operatingSystem);
    writer.uint32(42).string(message.userAgent);
    writer.uint32(49).double(message.date);
    writer.uint32(58).string(message.activity);
    if (message.meta !== undefined && message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(66).fork()).ldelim();
    }
    writer.uint32(74).string(message.subjectId);
    writer.uint32(82).string(message.tokenName);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): AuthenticationLog {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAuthenticationLog } as AuthenticationLog;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.ipv4Address = reader.string();
          break;
        case 3:
          message.ipv6Address = reader.string();
          break;
        case 4:
          message.operatingSystem = reader.string();
          break;
        case 5:
          message.userAgent = reader.string();
          break;
        case 6:
          message.date = reader.double();
          break;
        case 7:
          message.activity = reader.string();
          break;
        case 8:
          message.meta = Meta.decode(reader, reader.uint32());
          break;
        case 9:
          message.subjectId = reader.string();
          break;
        case 10:
          message.tokenName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AuthenticationLog {
    const message = { ...baseAuthenticationLog } as AuthenticationLog;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.ipv4Address !== undefined && object.ipv4Address !== null) {
      message.ipv4Address = String(object.ipv4Address);
    } else {
      message.ipv4Address = "";
    }
    if (object.ipv6Address !== undefined && object.ipv6Address !== null) {
      message.ipv6Address = String(object.ipv6Address);
    } else {
      message.ipv6Address = "";
    }
    if (object.operatingSystem !== undefined && object.operatingSystem !== null) {
      message.operatingSystem = String(object.operatingSystem);
    } else {
      message.operatingSystem = "";
    }
    if (object.userAgent !== undefined && object.userAgent !== null) {
      message.userAgent = String(object.userAgent);
    } else {
      message.userAgent = "";
    }
    if (object.date !== undefined && object.date !== null) {
      message.date = Number(object.date);
    } else {
      message.date = 0;
    }
    if (object.activity !== undefined && object.activity !== null) {
      message.activity = String(object.activity);
    } else {
      message.activity = "";
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromJSON(object.meta);
    } else {
      message.meta = undefined;
    }
    if (object.subjectId !== undefined && object.subjectId !== null) {
      message.subjectId = String(object.subjectId);
    } else {
      message.subjectId = "";
    }
    if (object.tokenName !== undefined && object.tokenName !== null) {
      message.tokenName = String(object.tokenName);
    } else {
      message.tokenName = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<AuthenticationLog>): AuthenticationLog {
    const message = { ...baseAuthenticationLog } as AuthenticationLog;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.ipv4Address !== undefined && object.ipv4Address !== null) {
      message.ipv4Address = object.ipv4Address;
    } else {
      message.ipv4Address = "";
    }
    if (object.ipv6Address !== undefined && object.ipv6Address !== null) {
      message.ipv6Address = object.ipv6Address;
    } else {
      message.ipv6Address = "";
    }
    if (object.operatingSystem !== undefined && object.operatingSystem !== null) {
      message.operatingSystem = object.operatingSystem;
    } else {
      message.operatingSystem = "";
    }
    if (object.userAgent !== undefined && object.userAgent !== null) {
      message.userAgent = object.userAgent;
    } else {
      message.userAgent = "";
    }
    if (object.date !== undefined && object.date !== null) {
      message.date = object.date;
    } else {
      message.date = 0;
    }
    if (object.activity !== undefined && object.activity !== null) {
      message.activity = object.activity;
    } else {
      message.activity = "";
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromPartial(object.meta);
    } else {
      message.meta = undefined;
    }
    if (object.subjectId !== undefined && object.subjectId !== null) {
      message.subjectId = object.subjectId;
    } else {
      message.subjectId = "";
    }
    if (object.tokenName !== undefined && object.tokenName !== null) {
      message.tokenName = object.tokenName;
    } else {
      message.tokenName = "";
    }
    return message;
  },
  toJSON(message: AuthenticationLog): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.ipv4Address !== undefined && (obj.ipv4Address = message.ipv4Address);
    message.ipv6Address !== undefined && (obj.ipv6Address = message.ipv6Address);
    message.operatingSystem !== undefined && (obj.operatingSystem = message.operatingSystem);
    message.userAgent !== undefined && (obj.userAgent = message.userAgent);
    message.date !== undefined && (obj.date = message.date);
    message.activity !== undefined && (obj.activity = message.activity);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.subjectId !== undefined && (obj.subjectId = message.subjectId);
    message.tokenName !== undefined && (obj.tokenName = message.tokenName);
    return obj;
  },
};

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