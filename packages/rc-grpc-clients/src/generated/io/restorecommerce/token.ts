/* eslint-disable */
import { FileDescriptorProto } from "ts-proto-descriptors/google/protobuf/descriptor";
import {
  Any,
  protoMetadata as protoMetadata2,
} from "../../google/protobuf/any";
import {
  Subject,
  protoMetadata as protoMetadata1,
} from "../../io/restorecommerce/auth";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "io.restorecommerce.token";

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

const baseTokenData: object = { id: "", expiresIn: 0, type: "" };

export const TokenData = {
  encode(message: TokenData, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.payload !== undefined) {
      Any.encode(message.payload, writer.uint32(18).fork()).ldelim();
    }
    if (message.expiresIn !== 0) {
      writer.uint32(25).double(message.expiresIn);
    }
    if (message.type !== "") {
      writer.uint32(34).string(message.type);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TokenData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseTokenData) as TokenData;
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
    const message = globalThis.Object.create(baseTokenData) as TokenData;
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
    message.payload !== undefined &&
      (obj.payload = message.payload ? Any.toJSON(message.payload) : undefined);
    message.expiresIn !== undefined && (obj.expiresIn = message.expiresIn);
    message.type !== undefined && (obj.type = message.type);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseIdentifier: object = { id: "", type: "" };

export const Identifier = {
  encode(message: Identifier, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Identifier {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseIdentifier) as Identifier;
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
    const message = globalThis.Object.create(baseIdentifier) as Identifier;
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
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseGrantId: object = { grantId: "" };

export const GrantId = {
  encode(message: GrantId, writer: Writer = Writer.create()): Writer {
    if (message.grantId !== "") {
      writer.uint32(10).string(message.grantId);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GrantId {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseGrantId) as GrantId;
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
    const message = globalThis.Object.create(baseGrantId) as GrantId;
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
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

/** Microservice definition. */
export interface Service {
  /** creates or upserts ID_token to `Redis` and returns sucess or failure message */
  upsert(request: TokenData): Promise<Any>;
  /** find id_token using access_token identifier (Return previously stored instance of an oidc-provider model) */
  find(request: Identifier): Promise<Any>;
  /** removes the id_token from redis */
  destroy(request: Identifier): Promise<Any>;
  /** Destroy/Drop/Remove a stored id_token by its grantId property reference. */
  revokeByGrantId(request: GrantId): Promise<Any>;
  /** Mark a stored id_token as consumed (not yet expired though!). Future finds for this id should be fulfilled with an object containing additional property named "consumed" with a truthy value (timestamp, date, boolean, etc). */
  consume(request: Identifier): Promise<Any>;
}

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto.fromPartial({
    dependency: ["io/restorecommerce/auth.proto", "google/protobuf/any.proto"],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        field: [
          { name: "id", number: 1, label: 1, type: 9, jsonName: "id" },
          {
            name: "payload",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".google.protobuf.Any",
            jsonName: "payload",
          },
          {
            name: "expires_in",
            number: 3,
            label: 1,
            type: 1,
            jsonName: "expiresIn",
          },
          { name: "type", number: 4, label: 1, type: 9, jsonName: "type" },
          {
            name: "subject",
            number: 5,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            jsonName: "subject",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "TokenData",
      },
      {
        field: [
          { name: "id", number: 1, label: 1, type: 9, jsonName: "id" },
          { name: "type", number: 2, label: 1, type: 9, jsonName: "type" },
          {
            name: "subject",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            jsonName: "subject",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Identifier",
      },
      {
        field: [
          {
            name: "grant_id",
            number: 1,
            label: 1,
            type: 9,
            jsonName: "grantId",
          },
          {
            name: "subject",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            jsonName: "subject",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "GrantId",
      },
    ],
    enumType: [],
    service: [
      {
        method: [
          {
            name: "upsert",
            inputType: ".io.restorecommerce.token.TokenData",
            outputType: ".google.protobuf.Any",
          },
          {
            name: "find",
            inputType: ".io.restorecommerce.token.Identifier",
            outputType: ".google.protobuf.Any",
          },
          {
            name: "destroy",
            inputType: ".io.restorecommerce.token.Identifier",
            outputType: ".google.protobuf.Any",
          },
          {
            name: "revokeByGrantId",
            inputType: ".io.restorecommerce.token.GrantId",
            outputType: ".google.protobuf.Any",
          },
          {
            name: "consume",
            inputType: ".io.restorecommerce.token.Identifier",
            outputType: ".google.protobuf.Any",
          },
        ],
        name: "Service",
      },
    ],
    extension: [],
    name: "io/restorecommerce/token.proto",
    package: "io.restorecommerce.token",
    sourceCodeInfo: {
      location: [
        {
          path: [6, 0],
          span: [10, 0, 16, 1],
          leadingDetachedComments: [],
          leadingComments: "\n Microservice definition.\n",
        },
        {
          path: [6, 0, 2, 0],
          span: [11, 2, 55],
          leadingDetachedComments: [],
          trailingComments:
            " creates or upserts ID_token to `Redis` and returns sucess or failure message\n",
        },
        {
          path: [6, 0, 2, 1],
          span: [12, 2, 54],
          leadingDetachedComments: [],
          trailingComments:
            " find id_token using access_token identifier (Return previously stored instance of an oidc-provider model)  \n",
        },
        {
          path: [6, 0, 2, 2],
          span: [13, 2, 57],
          leadingDetachedComments: [],
          trailingComments: " removes the id_token from redis\n",
        },
        {
          path: [6, 0, 2, 3],
          span: [14, 2, 62],
          leadingDetachedComments: [],
          trailingComments:
            " Destroy/Drop/Remove a stored id_token by its grantId property reference.\n",
        },
        {
          path: [6, 0, 2, 4],
          span: [15, 2, 57],
          leadingDetachedComments: [],
          trailingComments:
            ' Mark a stored id_token as consumed (not yet expired though!). Future finds for this id should be fulfilled with an object containing additional property named "consumed" with a truthy value (timestamp, date, boolean, etc).\n',
        },
      ],
    },
    syntax: "proto3",
  }),
  references: {
    ".io.restorecommerce.token.TokenData": TokenData,
    ".io.restorecommerce.token.Identifier": Identifier,
    ".io.restorecommerce.token.GrantId": GrantId,
  },
  dependencies: [protoMetadata1, protoMetadata2],
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
