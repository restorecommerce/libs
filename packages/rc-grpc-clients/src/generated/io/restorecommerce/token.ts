/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { Any, protoMetadata as protoMetadata2 } from "../../google/protobuf/any";
import { protoMetadata as protoMetadata1, Subject } from "./auth";
import { protoMetadata as protoMetadata3 } from "./options";

export const protobufPackage = "io.restorecommerce.token";

export interface TokenData {
  id?: string | undefined;
  payload?: Any | undefined;
  expiresIn?: number | undefined;
  type?: string | undefined;
  subject?: Subject | undefined;
}

export interface Identifier {
  id?: string | undefined;
  type?: string | undefined;
  subject?: Subject | undefined;
}

export interface GrantId {
  grantId?: string | undefined;
  subject?: Subject | undefined;
}

function createBaseTokenData(): TokenData {
  return { id: undefined, payload: undefined, expiresIn: undefined, type: undefined, subject: undefined };
}

export const TokenData = {
  encode(message: TokenData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.payload !== undefined) {
      Any.encode(message.payload, writer.uint32(18).fork()).ldelim();
    }
    if (message.expiresIn !== undefined) {
      writer.uint32(25).double(message.expiresIn);
    }
    if (message.type !== undefined) {
      writer.uint32(34).string(message.type);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.payload = Any.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.expiresIn = reader.double();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.type = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TokenData {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      payload: isSet(object.payload) ? Any.fromJSON(object.payload) : undefined,
      expiresIn: isSet(object.expiresIn) ? Number(object.expiresIn) : undefined,
      type: isSet(object.type) ? String(object.type) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
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

  create(base?: DeepPartial<TokenData>): TokenData {
    return TokenData.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TokenData>): TokenData {
    const message = createBaseTokenData();
    message.id = object.id ?? undefined;
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? Any.fromPartial(object.payload)
      : undefined;
    message.expiresIn = object.expiresIn ?? undefined;
    message.type = object.type ?? undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseIdentifier(): Identifier {
  return { id: undefined, type: undefined, subject: undefined };
}

export const Identifier = {
  encode(message: Identifier, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.type !== undefined) {
      writer.uint32(18).string(message.type);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Identifier {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentifier();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Identifier {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      type: isSet(object.type) ? String(object.type) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: Identifier): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.type !== undefined && (obj.type = message.type);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<Identifier>): Identifier {
    return Identifier.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Identifier>): Identifier {
    const message = createBaseIdentifier();
    message.id = object.id ?? undefined;
    message.type = object.type ?? undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseGrantId(): GrantId {
  return { grantId: undefined, subject: undefined };
}

export const GrantId = {
  encode(message: GrantId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.grantId !== undefined) {
      writer.uint32(10).string(message.grantId);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GrantId {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrantId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.grantId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GrantId {
    return {
      grantId: isSet(object.grantId) ? String(object.grantId) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: GrantId): unknown {
    const obj: any = {};
    message.grantId !== undefined && (obj.grantId = message.grantId);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<GrantId>): GrantId {
    return GrantId.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GrantId>): GrantId {
    const message = createBaseGrantId();
    message.grantId = object.grantId ?? undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

/** Microservice definition. */
export type TokenServiceDefinition = typeof TokenServiceDefinition;
export const TokenServiceDefinition = {
  name: "TokenService",
  fullName: "io.restorecommerce.token.TokenService",
  methods: {
    /** creates or upserts ID_token to `Redis` and returns sucess or failure message */
    upsert: {
      name: "upsert",
      requestType: TokenData,
      requestStream: false,
      responseType: Any,
      responseStream: false,
      options: {},
    },
    find: {
      name: "find",
      requestType: Identifier,
      requestStream: false,
      responseType: Any,
      responseStream: false,
      options: { _unknownFields: { 248008: [Buffer.from([1])] } },
    },
    /** removes the id_token from redis */
    destroy: {
      name: "destroy",
      requestType: Identifier,
      requestStream: false,
      responseType: Any,
      responseStream: false,
      options: {},
    },
    /** Destroy/Drop/Remove a stored id_token by its grantId property reference. */
    revokeByGrantId: {
      name: "revokeByGrantId",
      requestType: GrantId,
      requestStream: false,
      responseType: Any,
      responseStream: false,
      options: {},
    },
    /** Mark a stored id_token as consumed (not yet expired though!). Future finds for this id should be fulfilled with an object containing additional property named "consumed" with a truthy value (timestamp, date, boolean, etc). */
    consume: {
      name: "consume",
      requestType: Identifier,
      requestStream: false,
      responseType: Any,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface TokenServiceImplementation<CallContextExt = {}> {
  /** creates or upserts ID_token to `Redis` and returns sucess or failure message */
  upsert(request: TokenData, context: CallContext & CallContextExt): Promise<DeepPartial<Any>>;
  find(request: Identifier, context: CallContext & CallContextExt): Promise<DeepPartial<Any>>;
  /** removes the id_token from redis */
  destroy(request: Identifier, context: CallContext & CallContextExt): Promise<DeepPartial<Any>>;
  /** Destroy/Drop/Remove a stored id_token by its grantId property reference. */
  revokeByGrantId(request: GrantId, context: CallContext & CallContextExt): Promise<DeepPartial<Any>>;
  /** Mark a stored id_token as consumed (not yet expired though!). Future finds for this id should be fulfilled with an object containing additional property named "consumed" with a truthy value (timestamp, date, boolean, etc). */
  consume(request: Identifier, context: CallContext & CallContextExt): Promise<DeepPartial<Any>>;
}

export interface TokenServiceClient<CallOptionsExt = {}> {
  /** creates or upserts ID_token to `Redis` and returns sucess or failure message */
  upsert(request: DeepPartial<TokenData>, options?: CallOptions & CallOptionsExt): Promise<Any>;
  find(request: DeepPartial<Identifier>, options?: CallOptions & CallOptionsExt): Promise<Any>;
  /** removes the id_token from redis */
  destroy(request: DeepPartial<Identifier>, options?: CallOptions & CallOptionsExt): Promise<Any>;
  /** Destroy/Drop/Remove a stored id_token by its grantId property reference. */
  revokeByGrantId(request: DeepPartial<GrantId>, options?: CallOptions & CallOptionsExt): Promise<Any>;
  /** Mark a stored id_token as consumed (not yet expired though!). Future finds for this id should be fulfilled with an object containing additional property named "consumed" with a truthy value (timestamp, date, boolean, etc). */
  consume(request: DeepPartial<Identifier>, options?: CallOptions & CallOptionsExt): Promise<Any>;
}

type ProtoMetaMessageOptions = {
  options?: { [key: string]: any };
  fields?: { [key: string]: { [key: string]: any } };
  oneof?: { [key: string]: { [key: string]: any } };
  nested?: { [key: string]: ProtoMetaMessageOptions };
};

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto1;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
  options?: {
    options?: { [key: string]: any };
    services?: {
      [key: string]: { options?: { [key: string]: any }; methods?: { [key: string]: { [key: string]: any } } };
    };
    messages?: { [key: string]: ProtoMetaMessageOptions };
    enums?: { [key: string]: { options?: { [key: string]: any }; values?: { [key: string]: { [key: string]: any } } } };
  };
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto1.fromPartial({
    "name": "io/restorecommerce/token.proto",
    "package": "io.restorecommerce.token",
    "dependency": ["io/restorecommerce/auth.proto", "google/protobuf/any.proto", "io/restorecommerce/options.proto"],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "TokenData",
      "field": [{
        "name": "id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "id",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "payload",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.Any",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "payload",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "expires_in",
        "number": 3,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "expiresIn",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "type",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "type",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "subject",
        "number": 5,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.auth.Subject",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "subject",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "_id", "options": undefined },
        { "name": "_payload", "options": undefined },
        { "name": "_expires_in", "options": undefined },
        { "name": "_type", "options": undefined },
        { "name": "_subject", "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "Identifier",
      "field": [{
        "name": "id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "id",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "type",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "type",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "subject",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.auth.Subject",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "subject",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_id", "options": undefined }, { "name": "_type", "options": undefined }, {
        "name": "_subject",
        "options": undefined,
      }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "GrantId",
      "field": [{
        "name": "grant_id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "grantId",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "subject",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.auth.Subject",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "subject",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_grant_id", "options": undefined }, { "name": "_subject", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "enumType": [],
    "service": [{
      "name": "TokenService",
      "method": [{
        "name": "upsert",
        "inputType": ".io.restorecommerce.token.TokenData",
        "outputType": ".google.protobuf.Any",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "find",
        "inputType": ".io.restorecommerce.token.Identifier",
        "outputType": ".google.protobuf.Any",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "destroy",
        "inputType": ".io.restorecommerce.token.Identifier",
        "outputType": ".google.protobuf.Any",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "revokeByGrantId",
        "inputType": ".io.restorecommerce.token.GrantId",
        "outputType": ".google.protobuf.Any",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "consume",
        "inputType": ".io.restorecommerce.token.Identifier",
        "outputType": ".google.protobuf.Any",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }],
      "options": undefined,
    }],
    "extension": [],
    "options": undefined,
    "sourceCodeInfo": {
      "location": [{
        "path": [6, 0],
        "span": [11, 0, 19, 1],
        "leadingComments": "\n Microservice definition.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 0],
        "span": [12, 2, 55],
        "leadingComments": "",
        "trailingComments": " creates or upserts ID_token to `Redis` and returns sucess or failure message\n",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 2],
        "span": [16, 2, 57],
        "leadingComments": "",
        "trailingComments": " removes the id_token from redis\n",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 3],
        "span": [17, 2, 62],
        "leadingComments": "",
        "trailingComments": " Destroy/Drop/Remove a stored id_token by its grantId property reference.\n",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 4],
        "span": [18, 2, 57],
        "leadingComments": "",
        "trailingComments":
          ' Mark a stored id_token as consumed (not yet expired though!). Future finds for this id should be fulfilled with an object containing additional property named "consumed" with a truthy value (timestamp, date, boolean, etc).\n',
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {
    ".io.restorecommerce.token.TokenData": TokenData,
    ".io.restorecommerce.token.Identifier": Identifier,
    ".io.restorecommerce.token.GrantId": GrantId,
  },
  dependencies: [protoMetadata1, protoMetadata2, protoMetadata3],
  options: { services: { "TokenService": { options: undefined, methods: { "find": { "is_query": true } } } } },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
