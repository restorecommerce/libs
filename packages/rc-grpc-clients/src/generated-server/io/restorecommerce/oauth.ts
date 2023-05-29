/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { Empty, protoMetadata as protoMetadata4 } from "../../google/protobuf/empty";
import { protoMetadata as protoMetadata1, Subject, Tokens } from "./auth";
import { protoMetadata as protoMetadata3, Status } from "./status";
import { protoMetadata as protoMetadata2, UserResponse } from "./user";

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
  token?: Tokens;
}

export interface GetTokenRequest {
  subject?: Subject;
  service: string;
}

export interface GetTokenResponse {
  status?: Status;
  token?: string | undefined;
}

function createBaseServicesResponse(): ServicesResponse {
  return { services: [] };
}

export const ServicesResponse = {
  encode(message: ServicesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.services) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServicesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServicesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.services.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ServicesResponse {
    return { services: Array.isArray(object?.services) ? object.services.map((e: any) => String(e)) : [] };
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

  create(base?: DeepPartial<ServicesResponse>): ServicesResponse {
    return ServicesResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ServicesResponse>): ServicesResponse {
    const message = createBaseServicesResponse();
    message.services = object.services?.map((e) => e) || [];
    return message;
  },
};

function createBaseGenerateLinksResponse(): GenerateLinksResponse {
  return { links: {} };
}

export const GenerateLinksResponse = {
  encode(message: GenerateLinksResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.links).forEach(([key, value]) => {
      GenerateLinksResponse_LinksEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenerateLinksResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateLinksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = GenerateLinksResponse_LinksEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.links[entry1.key] = entry1.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenerateLinksResponse {
    return {
      links: isObject(object.links)
        ? Object.entries(object.links).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
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

  create(base?: DeepPartial<GenerateLinksResponse>): GenerateLinksResponse {
    return GenerateLinksResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GenerateLinksResponse>): GenerateLinksResponse {
    const message = createBaseGenerateLinksResponse();
    message.links = Object.entries(object.links ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseGenerateLinksResponse_LinksEntry(): GenerateLinksResponse_LinksEntry {
  return { key: "", value: "" };
}

export const GenerateLinksResponse_LinksEntry = {
  encode(message: GenerateLinksResponse_LinksEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenerateLinksResponse_LinksEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateLinksResponse_LinksEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenerateLinksResponse_LinksEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: GenerateLinksResponse_LinksEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create(base?: DeepPartial<GenerateLinksResponse_LinksEntry>): GenerateLinksResponse_LinksEntry {
    return GenerateLinksResponse_LinksEntry.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GenerateLinksResponse_LinksEntry>): GenerateLinksResponse_LinksEntry {
    const message = createBaseGenerateLinksResponse_LinksEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseExchangeCodeRequest(): ExchangeCodeRequest {
  return { service: "", code: "", state: "" };
}

export const ExchangeCodeRequest = {
  encode(message: ExchangeCodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ExchangeCodeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExchangeCodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.service = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.code = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.state = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExchangeCodeRequest {
    return {
      service: isSet(object.service) ? String(object.service) : "",
      code: isSet(object.code) ? String(object.code) : "",
      state: isSet(object.state) ? String(object.state) : "",
    };
  },

  toJSON(message: ExchangeCodeRequest): unknown {
    const obj: any = {};
    message.service !== undefined && (obj.service = message.service);
    message.code !== undefined && (obj.code = message.code);
    message.state !== undefined && (obj.state = message.state);
    return obj;
  },

  create(base?: DeepPartial<ExchangeCodeRequest>): ExchangeCodeRequest {
    return ExchangeCodeRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ExchangeCodeRequest>): ExchangeCodeRequest {
    const message = createBaseExchangeCodeRequest();
    message.service = object.service ?? "";
    message.code = object.code ?? "";
    message.state = object.state ?? "";
    return message;
  },
};

function createBaseExchangeCodeResponse(): ExchangeCodeResponse {
  return { user: undefined, email: "", token: undefined };
}

export const ExchangeCodeResponse = {
  encode(message: ExchangeCodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      UserResponse.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.token !== undefined) {
      Tokens.encode(message.token, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExchangeCodeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExchangeCodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user = UserResponse.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.email = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.token = Tokens.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExchangeCodeResponse {
    return {
      user: isSet(object.user) ? UserResponse.fromJSON(object.user) : undefined,
      email: isSet(object.email) ? String(object.email) : "",
      token: isSet(object.token) ? Tokens.fromJSON(object.token) : undefined,
    };
  },

  toJSON(message: ExchangeCodeResponse): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user ? UserResponse.toJSON(message.user) : undefined);
    message.email !== undefined && (obj.email = message.email);
    message.token !== undefined && (obj.token = message.token ? Tokens.toJSON(message.token) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ExchangeCodeResponse>): ExchangeCodeResponse {
    return ExchangeCodeResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ExchangeCodeResponse>): ExchangeCodeResponse {
    const message = createBaseExchangeCodeResponse();
    message.user = (object.user !== undefined && object.user !== null)
      ? UserResponse.fromPartial(object.user)
      : undefined;
    message.email = object.email ?? "";
    message.token = (object.token !== undefined && object.token !== null)
      ? Tokens.fromPartial(object.token)
      : undefined;
    return message;
  },
};

function createBaseGetTokenRequest(): GetTokenRequest {
  return { subject: undefined, service: "" };
}

export const GetTokenRequest = {
  encode(message: GetTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(10).fork()).ldelim();
    }
    if (message.service !== "") {
      writer.uint32(18).string(message.service);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTokenRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.service = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetTokenRequest {
    return {
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
      service: isSet(object.service) ? String(object.service) : "",
    };
  },

  toJSON(message: GetTokenRequest): unknown {
    const obj: any = {};
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    message.service !== undefined && (obj.service = message.service);
    return obj;
  },

  create(base?: DeepPartial<GetTokenRequest>): GetTokenRequest {
    return GetTokenRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetTokenRequest>): GetTokenRequest {
    const message = createBaseGetTokenRequest();
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    message.service = object.service ?? "";
    return message;
  },
};

function createBaseGetTokenResponse(): GetTokenResponse {
  return { status: undefined, token: undefined };
}

export const GetTokenResponse = {
  encode(message: GetTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(10).fork()).ldelim();
    }
    if (message.token !== undefined) {
      writer.uint32(18).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTokenResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.status = Status.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.token = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetTokenResponse {
    return {
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
      token: isSet(object.token) ? String(object.token) : undefined,
    };
  },

  toJSON(message: GetTokenResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  create(base?: DeepPartial<GetTokenResponse>): GetTokenResponse {
    return GetTokenResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetTokenResponse>): GetTokenResponse {
    const message = createBaseGetTokenResponse();
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    message.token = object.token ?? undefined;
    return message;
  },
};

export type OAuthServiceDefinition = typeof OAuthServiceDefinition;
export const OAuthServiceDefinition = {
  name: "OAuthService",
  fullName: "io.restorecommerce.oauth.OAuthService",
  methods: {
    availableServices: {
      name: "AvailableServices",
      requestType: Empty,
      requestStream: false,
      responseType: ServicesResponse,
      responseStream: false,
      options: {},
    },
    generateLinks: {
      name: "GenerateLinks",
      requestType: Empty,
      requestStream: false,
      responseType: GenerateLinksResponse,
      responseStream: false,
      options: {},
    },
    exchangeCode: {
      name: "ExchangeCode",
      requestType: ExchangeCodeRequest,
      requestStream: false,
      responseType: ExchangeCodeResponse,
      responseStream: false,
      options: {},
    },
    getToken: {
      name: "GetToken",
      requestType: GetTokenRequest,
      requestStream: false,
      responseType: GetTokenResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface OAuthServiceImplementation<CallContextExt = {}> {
  availableServices(request: Empty, context: CallContext & CallContextExt): Promise<DeepPartial<ServicesResponse>>;
  generateLinks(request: Empty, context: CallContext & CallContextExt): Promise<DeepPartial<GenerateLinksResponse>>;
  exchangeCode(
    request: ExchangeCodeRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ExchangeCodeResponse>>;
  getToken(request: GetTokenRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetTokenResponse>>;
}

export interface OAuthServiceClient<CallOptionsExt = {}> {
  availableServices(request: DeepPartial<Empty>, options?: CallOptions & CallOptionsExt): Promise<ServicesResponse>;
  generateLinks(request: DeepPartial<Empty>, options?: CallOptions & CallOptionsExt): Promise<GenerateLinksResponse>;
  exchangeCode(
    request: DeepPartial<ExchangeCodeRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ExchangeCodeResponse>;
  getToken(request: DeepPartial<GetTokenRequest>, options?: CallOptions & CallOptionsExt): Promise<GetTokenResponse>;
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
    "name": "io/restorecommerce/oauth.proto",
    "package": "io.restorecommerce.oauth",
    "dependency": [
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/user.proto",
      "io/restorecommerce/status.proto",
      "google/protobuf/empty.proto",
    ],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "ServicesResponse",
      "field": [{
        "name": "services",
        "number": 1,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "services",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "GenerateLinksResponse",
      "field": [{
        "name": "links",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.oauth.GenerateLinksResponse.LinksEntry",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "links",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [{
        "name": "LinksEntry",
        "field": [{
          "name": "key",
          "number": 1,
          "label": 1,
          "type": 9,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "key",
          "options": undefined,
          "proto3Optional": false,
        }, {
          "name": "value",
          "number": 2,
          "label": 1,
          "type": 9,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "value",
          "options": undefined,
          "proto3Optional": false,
        }],
        "extension": [],
        "nestedType": [],
        "enumType": [],
        "extensionRange": [],
        "oneofDecl": [],
        "options": {
          "messageSetWireFormat": false,
          "noStandardDescriptorAccessor": false,
          "deprecated": false,
          "mapEntry": true,
          "uninterpretedOption": [],
        },
        "reservedRange": [],
        "reservedName": [],
      }],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ExchangeCodeRequest",
      "field": [{
        "name": "service",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "service",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "code",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "code",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "state",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "state",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ExchangeCodeResponse",
      "field": [{
        "name": "user",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.user.UserResponse",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "user",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "email",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "email",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "token",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.auth.Tokens",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "token",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "GetTokenRequest",
      "field": [{
        "name": "subject",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.auth.Subject",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "subject",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "service",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "service",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "GetTokenResponse",
      "field": [{
        "name": "status",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.status.Status",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "status",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "token",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "token",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_token", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "enumType": [],
    "service": [{
      "name": "OAuthService",
      "method": [{
        "name": "AvailableServices",
        "inputType": ".google.protobuf.Empty",
        "outputType": ".io.restorecommerce.oauth.ServicesResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "GenerateLinks",
        "inputType": ".google.protobuf.Empty",
        "outputType": ".io.restorecommerce.oauth.GenerateLinksResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "ExchangeCode",
        "inputType": ".io.restorecommerce.oauth.ExchangeCodeRequest",
        "outputType": ".io.restorecommerce.oauth.ExchangeCodeResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "GetToken",
        "inputType": ".io.restorecommerce.oauth.GetTokenRequest",
        "outputType": ".io.restorecommerce.oauth.GetTokenResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }],
      "options": undefined,
    }],
    "extension": [],
    "options": undefined,
    "sourceCodeInfo": { "location": [] },
    "syntax": "proto3",
  }),
  references: {
    ".io.restorecommerce.oauth.ServicesResponse": ServicesResponse,
    ".io.restorecommerce.oauth.GenerateLinksResponse": GenerateLinksResponse,
    ".io.restorecommerce.oauth.GenerateLinksResponse.LinksEntry": GenerateLinksResponse_LinksEntry,
    ".io.restorecommerce.oauth.ExchangeCodeRequest": ExchangeCodeRequest,
    ".io.restorecommerce.oauth.ExchangeCodeResponse": ExchangeCodeResponse,
    ".io.restorecommerce.oauth.GetTokenRequest": GetTokenRequest,
    ".io.restorecommerce.oauth.GetTokenResponse": GetTokenResponse,
  },
  dependencies: [protoMetadata1, protoMetadata2, protoMetadata3, protoMetadata4],
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
