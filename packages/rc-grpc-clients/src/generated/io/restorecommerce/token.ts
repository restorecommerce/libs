/* eslint-disable */
import { Any } from '../../google/protobuf/any';
import { Subject, ApiKey } from '../../io/restorecommerce/auth';
import { Writer, Reader } from 'protobufjs/minimal';


export interface TokenData {
  id: string;
  payload?: Any;
  expiresIn: number;
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
}

export interface Identifier {
  id: string;
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
}

export interface UniqueIdentifier {
  uid: string;
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
}

export interface UserCode {
  userCode: string;
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
}

export interface GrantId {
  grantId: string;
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
}

const baseTokenData: object = {
  id: "",
  expiresIn: 0,
};

const baseIdentifier: object = {
  id: "",
};

const baseUniqueIdentifier: object = {
  uid: "",
};

const baseUserCode: object = {
  userCode: "",
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
   *  by default when storing the access_token itself is used as id, this api is used when uid is provided in payload.
   */
  findByUid(request: UniqueIdentifier): Promise<Any>;

  /**
   *  returns previously stored instance of DeviceCode by the end-user entered user code. You only need this method for the deviceFlow feature
   */
  findByUserCode(request: UserCode): Promise<Any>;

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

export const protobufPackage = 'io.restorecommerce.token'

export const TokenData = {
  encode(message: TokenData, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    if (message.payload !== undefined && message.payload !== undefined) {
      Any.encode(message.payload, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(25).double(message.expiresIn);
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(34).fork()).ldelim();
    }
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(42).fork()).ldelim();
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
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        case 5:
          message.apiKey = ApiKey.decode(reader, reader.uint32());
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
  toJSON(message: TokenData): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.payload !== undefined && (obj.payload = message.payload ? Any.toJSON(message.payload) : undefined);
    message.expiresIn !== undefined && (obj.expiresIn = message.expiresIn);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    message.apiKey !== undefined && (obj.apiKey = message.apiKey ? ApiKey.toJSON(message.apiKey) : undefined);
    return obj;
  },
};

export const Identifier = {
  encode(message: Identifier, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(18).fork()).ldelim();
    }
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(26).fork()).ldelim();
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
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        case 3:
          message.apiKey = ApiKey.decode(reader, reader.uint32());
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
  fromPartial(object: DeepPartial<Identifier>): Identifier {
    const message = { ...baseIdentifier } as Identifier;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
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
  toJSON(message: Identifier): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    message.apiKey !== undefined && (obj.apiKey = message.apiKey ? ApiKey.toJSON(message.apiKey) : undefined);
    return obj;
  },
};

export const UniqueIdentifier = {
  encode(message: UniqueIdentifier, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.uid);
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(18).fork()).ldelim();
    }
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): UniqueIdentifier {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUniqueIdentifier } as UniqueIdentifier;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uid = reader.string();
          break;
        case 2:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        case 3:
          message.apiKey = ApiKey.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UniqueIdentifier {
    const message = { ...baseUniqueIdentifier } as UniqueIdentifier;
    if (object.uid !== undefined && object.uid !== null) {
      message.uid = String(object.uid);
    } else {
      message.uid = "";
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
  fromPartial(object: DeepPartial<UniqueIdentifier>): UniqueIdentifier {
    const message = { ...baseUniqueIdentifier } as UniqueIdentifier;
    if (object.uid !== undefined && object.uid !== null) {
      message.uid = object.uid;
    } else {
      message.uid = "";
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
  toJSON(message: UniqueIdentifier): unknown {
    const obj: any = {};
    message.uid !== undefined && (obj.uid = message.uid);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    message.apiKey !== undefined && (obj.apiKey = message.apiKey ? ApiKey.toJSON(message.apiKey) : undefined);
    return obj;
  },
};

export const UserCode = {
  encode(message: UserCode, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.userCode);
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(18).fork()).ldelim();
    }
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): UserCode {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUserCode } as UserCode;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userCode = reader.string();
          break;
        case 2:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        case 3:
          message.apiKey = ApiKey.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UserCode {
    const message = { ...baseUserCode } as UserCode;
    if (object.userCode !== undefined && object.userCode !== null) {
      message.userCode = String(object.userCode);
    } else {
      message.userCode = "";
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
  fromPartial(object: DeepPartial<UserCode>): UserCode {
    const message = { ...baseUserCode } as UserCode;
    if (object.userCode !== undefined && object.userCode !== null) {
      message.userCode = object.userCode;
    } else {
      message.userCode = "";
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
  toJSON(message: UserCode): unknown {
    const obj: any = {};
    message.userCode !== undefined && (obj.userCode = message.userCode);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    message.apiKey !== undefined && (obj.apiKey = message.apiKey ? ApiKey.toJSON(message.apiKey) : undefined);
    return obj;
  },
};

export const GrantId = {
  encode(message: GrantId, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.grantId);
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(18).fork()).ldelim();
    }
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(26).fork()).ldelim();
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
        case 3:
          message.apiKey = ApiKey.decode(reader, reader.uint32());
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
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromJSON(object.apiKey);
    } else {
      message.apiKey = undefined;
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
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromPartial(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  toJSON(message: GrantId): unknown {
    const obj: any = {};
    message.grantId !== undefined && (obj.grantId = message.grantId);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    message.apiKey !== undefined && (obj.apiKey = message.apiKey ? ApiKey.toJSON(message.apiKey) : undefined);
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