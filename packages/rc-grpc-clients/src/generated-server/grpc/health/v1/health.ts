/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";

export const protobufPackage = "grpc.health.v1";

export interface HealthCheckRequest {
  service: string;
}

export interface HealthCheckResponse {
  status: HealthCheckResponse_ServingStatus;
}

export enum HealthCheckResponse_ServingStatus {
  UNKNOWN = "UNKNOWN",
  SERVING = "SERVING",
  NOT_SERVING = "NOT_SERVING",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function healthCheckResponse_ServingStatusFromJSON(object: any): HealthCheckResponse_ServingStatus {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return HealthCheckResponse_ServingStatus.UNKNOWN;
    case 1:
    case "SERVING":
      return HealthCheckResponse_ServingStatus.SERVING;
    case 2:
    case "NOT_SERVING":
      return HealthCheckResponse_ServingStatus.NOT_SERVING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return HealthCheckResponse_ServingStatus.UNRECOGNIZED;
  }
}

export function healthCheckResponse_ServingStatusToJSON(object: HealthCheckResponse_ServingStatus): string {
  switch (object) {
    case HealthCheckResponse_ServingStatus.UNKNOWN:
      return "UNKNOWN";
    case HealthCheckResponse_ServingStatus.SERVING:
      return "SERVING";
    case HealthCheckResponse_ServingStatus.NOT_SERVING:
      return "NOT_SERVING";
    case HealthCheckResponse_ServingStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function healthCheckResponse_ServingStatusToNumber(object: HealthCheckResponse_ServingStatus): number {
  switch (object) {
    case HealthCheckResponse_ServingStatus.UNKNOWN:
      return 0;
    case HealthCheckResponse_ServingStatus.SERVING:
      return 1;
    case HealthCheckResponse_ServingStatus.NOT_SERVING:
      return 2;
    case HealthCheckResponse_ServingStatus.UNRECOGNIZED:
    default:
      return -1;
  }
}

function createBaseHealthCheckRequest(): HealthCheckRequest {
  return { service: "" };
}

export const HealthCheckRequest = {
  encode(message: HealthCheckRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.service !== "") {
      writer.uint32(10).string(message.service);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HealthCheckRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHealthCheckRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): HealthCheckRequest {
    return { service: isSet(object.service) ? String(object.service) : "" };
  },

  toJSON(message: HealthCheckRequest): unknown {
    const obj: any = {};
    message.service !== undefined && (obj.service = message.service);
    return obj;
  },

  create(base?: DeepPartial<HealthCheckRequest>): HealthCheckRequest {
    return HealthCheckRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<HealthCheckRequest>): HealthCheckRequest {
    const message = createBaseHealthCheckRequest();
    message.service = object.service ?? "";
    return message;
  },
};

function createBaseHealthCheckResponse(): HealthCheckResponse {
  return { status: HealthCheckResponse_ServingStatus.UNKNOWN };
}

export const HealthCheckResponse = {
  encode(message: HealthCheckResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== HealthCheckResponse_ServingStatus.UNKNOWN) {
      writer.uint32(8).int32(healthCheckResponse_ServingStatusToNumber(message.status));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HealthCheckResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHealthCheckResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.status = healthCheckResponse_ServingStatusFromJSON(reader.int32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HealthCheckResponse {
    return {
      status: isSet(object.status)
        ? healthCheckResponse_ServingStatusFromJSON(object.status)
        : HealthCheckResponse_ServingStatus.UNKNOWN,
    };
  },

  toJSON(message: HealthCheckResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = healthCheckResponse_ServingStatusToJSON(message.status));
    return obj;
  },

  create(base?: DeepPartial<HealthCheckResponse>): HealthCheckResponse {
    return HealthCheckResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<HealthCheckResponse>): HealthCheckResponse {
    const message = createBaseHealthCheckResponse();
    message.status = object.status ?? HealthCheckResponse_ServingStatus.UNKNOWN;
    return message;
  },
};

export type HealthDefinition = typeof HealthDefinition;
export const HealthDefinition = {
  name: "Health",
  fullName: "grpc.health.v1.Health",
  methods: {
    check: {
      name: "Check",
      requestType: HealthCheckRequest,
      requestStream: false,
      responseType: HealthCheckResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface HealthServiceImplementation<CallContextExt = {}> {
  check(request: HealthCheckRequest, context: CallContext & CallContextExt): Promise<DeepPartial<HealthCheckResponse>>;
}

export interface HealthClient<CallOptionsExt = {}> {
  check(request: DeepPartial<HealthCheckRequest>, options?: CallOptions & CallOptionsExt): Promise<HealthCheckResponse>;
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
    "name": "grpc/health/v1/health.proto",
    "package": "grpc.health.v1",
    "dependency": [],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "HealthCheckRequest",
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
      "name": "HealthCheckResponse",
      "field": [{
        "name": "status",
        "number": 1,
        "label": 1,
        "type": 14,
        "typeName": ".grpc.health.v1.HealthCheckResponse.ServingStatus",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "status",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [{
        "name": "ServingStatus",
        "value": [{ "name": "UNKNOWN", "number": 0, "options": undefined }, {
          "name": "SERVING",
          "number": 1,
          "options": undefined,
        }, { "name": "NOT_SERVING", "number": 2, "options": undefined }],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "enumType": [],
    "service": [{
      "name": "Health",
      "method": [{
        "name": "Check",
        "inputType": ".grpc.health.v1.HealthCheckRequest",
        "outputType": ".grpc.health.v1.HealthCheckResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }],
      "options": undefined,
    }],
    "extension": [],
    "options": {
      "javaPackage": "",
      "javaOuterClassname": "",
      "javaMultipleFiles": false,
      "javaGenerateEqualsAndHash": false,
      "javaStringCheckUtf8": false,
      "optimizeFor": 1,
      "goPackage": "",
      "ccGenericServices": false,
      "javaGenericServices": false,
      "pyGenericServices": false,
      "phpGenericServices": false,
      "deprecated": false,
      "ccEnableArenas": false,
      "objcClassPrefix": "",
      "csharpNamespace": "Grpc.Health.V1",
      "swiftPrefix": "",
      "phpClassPrefix": "",
      "phpNamespace": "",
      "phpMetadataNamespace": "",
      "rubyPackage": "",
      "uninterpretedOption": [],
    },
    "sourceCodeInfo": { "location": [] },
    "syntax": "proto3",
  }),
  references: {
    ".grpc.health.v1.HealthCheckRequest": HealthCheckRequest,
    ".grpc.health.v1.HealthCheckResponse": HealthCheckResponse,
    ".grpc.health.v1.HealthCheckResponse.ServingStatus": HealthCheckResponse_ServingStatus,
  },
  dependencies: [],
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
