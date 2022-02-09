/* eslint-disable */
import { FileDescriptorProto } from "ts-proto-descriptors/google/protobuf/descriptor";
import {
  UserResponse,
  protoMetadata as protoMetadata1,
} from "../../io/restorecommerce/user";
import {
  protoMetadata as protoMetadata2,
  Empty,
} from "../../google/protobuf/empty";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "io.restorecommerce.oauth";

export interface ServicesResponse {
  services: string[];
}

export interface GenerateLinksResponse {
  links: { [key: string]: string };
}

export interface GenerateLinksResponse_LinksEntry {
  key: string;
  value: string;
}

export interface ExchangeCodeRequest {
  service: string;
  code: string;
  state: string;
}

export interface ExchangeCodeResponse {
  user?: UserResponse;
  email: string;
}

const baseServicesResponse: object = { services: "" };

export const ServicesResponse = {
  encode(message: ServicesResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.services) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ServicesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseServicesResponse
    ) as ServicesResponse;
    message.services = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.services.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ServicesResponse {
    const message = globalThis.Object.create(
      baseServicesResponse
    ) as ServicesResponse;
    message.services = [];
    if (object.services !== undefined && object.services !== null) {
      for (const e of object.services) {
        message.services.push(String(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<ServicesResponse>): ServicesResponse {
    const message = { ...baseServicesResponse } as ServicesResponse;
    message.services = [];
    if (object.services !== undefined && object.services !== null) {
      for (const e of object.services) {
        message.services.push(e);
      }
    }
    return message;
  },

  toJSON(message: ServicesResponse): unknown {
    const obj: any = {};
    if (message.services) {
      obj.services = message.services.map((e) => e);
    } else {
      obj.services = [];
    }
    return obj;
  },
};

const baseGenerateLinksResponse: object = {};

export const GenerateLinksResponse = {
  encode(
    message: GenerateLinksResponse,
    writer: Writer = Writer.create()
  ): Writer {
    Object.entries(message.links).forEach(([key, value]) => {
      GenerateLinksResponse_LinksEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenerateLinksResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseGenerateLinksResponse
    ) as GenerateLinksResponse;
    message.links = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = GenerateLinksResponse_LinksEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry1.value !== undefined) {
            message.links[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenerateLinksResponse {
    const message = globalThis.Object.create(
      baseGenerateLinksResponse
    ) as GenerateLinksResponse;
    message.links = {};
    if (object.links !== undefined && object.links !== null) {
      Object.entries(object.links).forEach(([key, value]) => {
        message.links[key] = String(value);
      });
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<GenerateLinksResponse>
  ): GenerateLinksResponse {
    const message = { ...baseGenerateLinksResponse } as GenerateLinksResponse;
    message.links = {};
    if (object.links !== undefined && object.links !== null) {
      Object.entries(object.links).forEach(([key, value]) => {
        if (value !== undefined) {
          message.links[key] = String(value);
        }
      });
    }
    return message;
  },

  toJSON(message: GenerateLinksResponse): unknown {
    const obj: any = {};
    obj.links = {};
    if (message.links) {
      Object.entries(message.links).forEach(([k, v]) => {
        obj.links[k] = v;
      });
    }
    return obj;
  },
};

const baseGenerateLinksResponse_LinksEntry: object = { key: "", value: "" };

export const GenerateLinksResponse_LinksEntry = {
  encode(
    message: GenerateLinksResponse_LinksEntry,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): GenerateLinksResponse_LinksEntry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseGenerateLinksResponse_LinksEntry
    ) as GenerateLinksResponse_LinksEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenerateLinksResponse_LinksEntry {
    const message = globalThis.Object.create(
      baseGenerateLinksResponse_LinksEntry
    ) as GenerateLinksResponse_LinksEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<GenerateLinksResponse_LinksEntry>
  ): GenerateLinksResponse_LinksEntry {
    const message = {
      ...baseGenerateLinksResponse_LinksEntry,
    } as GenerateLinksResponse_LinksEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: GenerateLinksResponse_LinksEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
};

const baseExchangeCodeRequest: object = { service: "", code: "", state: "" };

export const ExchangeCodeRequest = {
  encode(
    message: ExchangeCodeRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.service !== "") {
      writer.uint32(10).string(message.service);
    }
    if (message.code !== "") {
      writer.uint32(18).string(message.code);
    }
    if (message.state !== "") {
      writer.uint32(26).string(message.state);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ExchangeCodeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseExchangeCodeRequest
    ) as ExchangeCodeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.service = reader.string();
          break;
        case 2:
          message.code = reader.string();
          break;
        case 3:
          message.state = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExchangeCodeRequest {
    const message = globalThis.Object.create(
      baseExchangeCodeRequest
    ) as ExchangeCodeRequest;
    if (object.service !== undefined && object.service !== null) {
      message.service = String(object.service);
    } else {
      message.service = "";
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = String(object.code);
    } else {
      message.code = "";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = String(object.state);
    } else {
      message.state = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<ExchangeCodeRequest>): ExchangeCodeRequest {
    const message = { ...baseExchangeCodeRequest } as ExchangeCodeRequest;
    if (object.service !== undefined && object.service !== null) {
      message.service = object.service;
    } else {
      message.service = "";
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = "";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    } else {
      message.state = "";
    }
    return message;
  },

  toJSON(message: ExchangeCodeRequest): unknown {
    const obj: any = {};
    message.service !== undefined && (obj.service = message.service);
    message.code !== undefined && (obj.code = message.code);
    message.state !== undefined && (obj.state = message.state);
    return obj;
  },
};

const baseExchangeCodeResponse: object = { email: "" };

export const ExchangeCodeResponse = {
  encode(
    message: ExchangeCodeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.user !== undefined) {
      UserResponse.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ExchangeCodeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseExchangeCodeResponse
    ) as ExchangeCodeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = UserResponse.decode(reader, reader.uint32());
          break;
        case 2:
          message.email = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExchangeCodeResponse {
    const message = globalThis.Object.create(
      baseExchangeCodeResponse
    ) as ExchangeCodeResponse;
    if (object.user !== undefined && object.user !== null) {
      message.user = UserResponse.fromJSON(object.user);
    } else {
      message.user = undefined;
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = String(object.email);
    } else {
      message.email = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<ExchangeCodeResponse>): ExchangeCodeResponse {
    const message = { ...baseExchangeCodeResponse } as ExchangeCodeResponse;
    if (object.user !== undefined && object.user !== null) {
      message.user = UserResponse.fromPartial(object.user);
    } else {
      message.user = undefined;
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = "";
    }
    return message;
  },

  toJSON(message: ExchangeCodeResponse): unknown {
    const obj: any = {};
    message.user !== undefined &&
      (obj.user = message.user ? UserResponse.toJSON(message.user) : undefined);
    message.email !== undefined && (obj.email = message.email);
    return obj;
  },
};

export interface Service {
  AvailableServices(request: Empty): Promise<ServicesResponse>;
  GenerateLinks(request: Empty): Promise<GenerateLinksResponse>;
  ExchangeCode(request: ExchangeCodeRequest): Promise<ExchangeCodeResponse>;
}

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto.fromPartial({
    dependency: [
      "io/restorecommerce/user.proto",
      "google/protobuf/empty.proto",
    ],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        field: [
          {
            name: "services",
            number: 1,
            label: 3,
            type: 9,
            jsonName: "services",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "ServicesResponse",
      },
      {
        field: [
          {
            name: "links",
            number: 1,
            label: 3,
            type: 11,
            typeName:
              ".io.restorecommerce.oauth.GenerateLinksResponse.LinksEntry",
            jsonName: "links",
          },
        ],
        extension: [],
        nestedType: [
          {
            field: [
              { name: "key", number: 1, label: 1, type: 9, jsonName: "key" },
              {
                name: "value",
                number: 2,
                label: 1,
                type: 9,
                jsonName: "value",
              },
            ],
            extension: [],
            nestedType: [],
            enumType: [],
            extensionRange: [],
            oneofDecl: [],
            reservedRange: [],
            reservedName: [],
            name: "LinksEntry",
            options: { uninterpretedOption: [], mapEntry: true },
          },
        ],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "GenerateLinksResponse",
      },
      {
        field: [
          {
            name: "service",
            number: 1,
            label: 1,
            type: 9,
            jsonName: "service",
          },
          { name: "code", number: 2, label: 1, type: 9, jsonName: "code" },
          { name: "state", number: 3, label: 1, type: 9, jsonName: "state" },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "ExchangeCodeRequest",
      },
      {
        field: [
          {
            name: "user",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.user.UserResponse",
            jsonName: "user",
          },
          { name: "email", number: 2, label: 1, type: 9, jsonName: "email" },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "ExchangeCodeResponse",
      },
    ],
    enumType: [],
    service: [
      {
        method: [
          {
            name: "AvailableServices",
            inputType: ".google.protobuf.Empty",
            outputType: ".io.restorecommerce.oauth.ServicesResponse",
          },
          {
            name: "GenerateLinks",
            inputType: ".google.protobuf.Empty",
            outputType: ".io.restorecommerce.oauth.GenerateLinksResponse",
          },
          {
            name: "ExchangeCode",
            inputType: ".io.restorecommerce.oauth.ExchangeCodeRequest",
            outputType: ".io.restorecommerce.oauth.ExchangeCodeResponse",
          },
        ],
        name: "Service",
      },
    ],
    extension: [],
    name: "io/restorecommerce/oauth.proto",
    package: "io.restorecommerce.oauth",
    sourceCodeInfo: { location: [] },
    syntax: "proto3",
  }),
  references: {
    ".io.restorecommerce.oauth.ServicesResponse": ServicesResponse,
    ".io.restorecommerce.oauth.GenerateLinksResponse": GenerateLinksResponse,
    ".io.restorecommerce.oauth.GenerateLinksResponse.LinksEntry": GenerateLinksResponse_LinksEntry,
    ".io.restorecommerce.oauth.ExchangeCodeRequest": ExchangeCodeRequest,
    ".io.restorecommerce.oauth.ExchangeCodeResponse": ExchangeCodeResponse,
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
