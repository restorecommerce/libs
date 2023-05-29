/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { Any, protoMetadata as protoMetadata1 } from "../google/protobuf/any";

export const protobufPackage = "echo";

export interface EchoRequest {
  message: string;
  test?: Any;
}

export interface EchoResponse {
  message: string;
  test?: Any;
}

function createBaseEchoRequest(): EchoRequest {
  return { message: "", test: undefined };
}

export const EchoRequest = {
  encode(message: EchoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.test !== undefined) {
      Any.encode(message.test, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EchoRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEchoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.test = Any.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EchoRequest {
    return {
      message: isSet(object.message) ? String(object.message) : "",
      test: isSet(object.test) ? Any.fromJSON(object.test) : undefined,
    };
  },

  toJSON(message: EchoRequest): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.test !== undefined && (obj.test = message.test ? Any.toJSON(message.test) : undefined);
    return obj;
  },

  create(base?: DeepPartial<EchoRequest>): EchoRequest {
    return EchoRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<EchoRequest>): EchoRequest {
    const message = createBaseEchoRequest();
    message.message = object.message ?? "";
    message.test = (object.test !== undefined && object.test !== null) ? Any.fromPartial(object.test) : undefined;
    return message;
  },
};

function createBaseEchoResponse(): EchoResponse {
  return { message: "", test: undefined };
}

export const EchoResponse = {
  encode(message: EchoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.test !== undefined) {
      Any.encode(message.test, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EchoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEchoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.test = Any.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EchoResponse {
    return {
      message: isSet(object.message) ? String(object.message) : "",
      test: isSet(object.test) ? Any.fromJSON(object.test) : undefined,
    };
  },

  toJSON(message: EchoResponse): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.test !== undefined && (obj.test = message.test ? Any.toJSON(message.test) : undefined);
    return obj;
  },

  create(base?: DeepPartial<EchoResponse>): EchoResponse {
    return EchoResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<EchoResponse>): EchoResponse {
    const message = createBaseEchoResponse();
    message.message = object.message ?? "";
    message.test = (object.test !== undefined && object.test !== null) ? Any.fromPartial(object.test) : undefined;
    return message;
  },
};

/** The greeting service definition. */
export type EchoServiceDefinition = typeof EchoServiceDefinition;
export const EchoServiceDefinition = {
  name: "EchoService",
  fullName: "echo.EchoService",
  methods: {
    /** Sends a greeting */
    echoUnary: {
      name: "echoUnary",
      requestType: EchoRequest,
      requestStream: false,
      responseType: EchoResponse,
      responseStream: false,
      options: {},
    },
    echoServerStream: {
      name: "echoServerStream",
      requestType: EchoRequest,
      requestStream: false,
      responseType: EchoResponse,
      responseStream: true,
      options: {},
    },
    echoClientStream: {
      name: "echoClientStream",
      requestType: EchoRequest,
      requestStream: true,
      responseType: EchoResponse,
      responseStream: false,
      options: {},
    },
    echoBidiStream: {
      name: "echoBidiStream",
      requestType: EchoRequest,
      requestStream: true,
      responseType: EchoResponse,
      responseStream: true,
      options: {},
    },
  },
} as const;

export interface EchoServiceImplementation<CallContextExt = {}> {
  /** Sends a greeting */
  echoUnary(request: EchoRequest, context: CallContext & CallContextExt): Promise<DeepPartial<EchoResponse>>;
  echoServerStream(
    request: EchoRequest,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<EchoResponse>>;
  echoClientStream(
    request: AsyncIterable<EchoRequest>,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<EchoResponse>>;
  echoBidiStream(
    request: AsyncIterable<EchoRequest>,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<EchoResponse>>;
}

export interface EchoServiceClient<CallOptionsExt = {}> {
  /** Sends a greeting */
  echoUnary(request: DeepPartial<EchoRequest>, options?: CallOptions & CallOptionsExt): Promise<EchoResponse>;
  echoServerStream(
    request: DeepPartial<EchoRequest>,
    options?: CallOptions & CallOptionsExt,
  ): AsyncIterable<EchoResponse>;
  echoClientStream(
    request: AsyncIterable<DeepPartial<EchoRequest>>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<EchoResponse>;
  echoBidiStream(
    request: AsyncIterable<DeepPartial<EchoRequest>>,
    options?: CallOptions & CallOptionsExt,
  ): AsyncIterable<EchoResponse>;
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
    "name": "echo/echo.proto",
    "package": "echo",
    "dependency": ["google/protobuf/any.proto"],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "EchoRequest",
      "field": [{
        "name": "message",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "message",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "test",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.Any",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "test",
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
      "name": "EchoResponse",
      "field": [{
        "name": "message",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "message",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "test",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.Any",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "test",
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
    }],
    "enumType": [],
    "service": [{
      "name": "EchoService",
      "method": [{
        "name": "echoUnary",
        "inputType": ".echo.EchoRequest",
        "outputType": ".echo.EchoResponse",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "echoServerStream",
        "inputType": ".echo.EchoRequest",
        "outputType": ".echo.EchoResponse",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": false,
        "serverStreaming": true,
      }, {
        "name": "echoClientStream",
        "inputType": ".echo.EchoRequest",
        "outputType": ".echo.EchoResponse",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": true,
        "serverStreaming": false,
      }, {
        "name": "echoBidiStream",
        "inputType": ".echo.EchoRequest",
        "outputType": ".echo.EchoResponse",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": true,
        "serverStreaming": true,
      }],
      "options": undefined,
    }],
    "extension": [],
    "options": undefined,
    "sourceCodeInfo": {
      "location": [{
        "path": [3, 0],
        "span": [4, 0, 35],
        "leadingComments": ' import "google/protobuf/wrappers.proto";\n',
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0],
        "span": [7, 0, 13, 1],
        "leadingComments": " The greeting service definition.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 0],
        "span": [9, 2, 55],
        "leadingComments": " Sends a greeting\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: { ".echo.EchoRequest": EchoRequest, ".echo.EchoResponse": EchoResponse },
  dependencies: [protoMetadata1],
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export type ServerStreamingMethodResult<Response> = { [Symbol.asyncIterator](): AsyncIterator<Response, void> };
