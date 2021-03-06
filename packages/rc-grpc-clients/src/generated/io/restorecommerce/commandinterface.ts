/* eslint-disable */
import { FileDescriptorProto } from "ts-proto-descriptors/google/protobuf/descriptor";
import {
  Any,
  protoMetadata as protoMetadata1,
} from "../../google/protobuf/any";
import {
  Subject,
  protoMetadata as protoMetadata2,
} from "../../io/restorecommerce/auth";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "io.restorecommerce.commandinterface";

/** used to send requests through Kafka or gRPC */
export interface CommandRequest {
  /** command identifier (used to demultiplex operation in the command implementation) */
  name: string;
  /** variable payload */
  payload?: Any;
  subject?: Subject;
}

/** used to push responses to Kafka */
export interface CommandResponse {
  /**
   * service identifiers
   * (multiple services may reply to one system command)
   * (multiple service names can be bound to one microservice)
   */
  services: string[];
  /** variable payload */
  payload?: Any;
}

const baseCommandRequest: object = { name: "" };

export const CommandRequest = {
  encode(message: CommandRequest, writer: Writer = Writer.create()): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.payload !== undefined) {
      Any.encode(message.payload, writer.uint32(18).fork()).ldelim();
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CommandRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseCommandRequest
    ) as CommandRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.payload = Any.decode(reader, reader.uint32());
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

  fromJSON(object: any): CommandRequest {
    const message = globalThis.Object.create(
      baseCommandRequest
    ) as CommandRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = Any.fromJSON(object.payload);
    } else {
      message.payload = undefined;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<CommandRequest>): CommandRequest {
    const message = { ...baseCommandRequest } as CommandRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = Any.fromPartial(object.payload);
    } else {
      message.payload = undefined;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  toJSON(message: CommandRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.payload !== undefined &&
      (obj.payload = message.payload ? Any.toJSON(message.payload) : undefined);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseCommandResponse: object = { services: "" };

export const CommandResponse = {
  encode(message: CommandResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.services) {
      writer.uint32(10).string(v!);
    }
    if (message.payload !== undefined) {
      Any.encode(message.payload, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CommandResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseCommandResponse
    ) as CommandResponse;
    message.services = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.services.push(reader.string());
          break;
        case 2:
          message.payload = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommandResponse {
    const message = globalThis.Object.create(
      baseCommandResponse
    ) as CommandResponse;
    message.services = [];
    if (object.services !== undefined && object.services !== null) {
      for (const e of object.services) {
        message.services.push(String(e));
      }
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = Any.fromJSON(object.payload);
    } else {
      message.payload = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<CommandResponse>): CommandResponse {
    const message = { ...baseCommandResponse } as CommandResponse;
    message.services = [];
    if (object.services !== undefined && object.services !== null) {
      for (const e of object.services) {
        message.services.push(e);
      }
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = Any.fromPartial(object.payload);
    } else {
      message.payload = undefined;
    }
    return message;
  },

  toJSON(message: CommandResponse): unknown {
    const obj: any = {};
    if (message.services) {
      obj.services = message.services.map((e) => e);
    } else {
      obj.services = [];
    }
    message.payload !== undefined &&
      (obj.payload = message.payload ? Any.toJSON(message.payload) : undefined);
    return obj;
  },
};

/** RPC service for executing commands */
export interface Service {
  Command(request: CommandRequest): Promise<Any>;
}

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto.fromPartial({
    dependency: ["google/protobuf/any.proto", "io/restorecommerce/auth.proto"],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        field: [
          { name: "name", number: 1, label: 1, type: 9, jsonName: "name" },
          {
            name: "payload",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".google.protobuf.Any",
            jsonName: "payload",
          },
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
        name: "CommandRequest",
      },
      {
        field: [
          {
            name: "services",
            number: 1,
            label: 3,
            type: 9,
            jsonName: "services",
          },
          {
            name: "payload",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".google.protobuf.Any",
            jsonName: "payload",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "CommandResponse",
      },
    ],
    enumType: [],
    service: [
      {
        method: [
          {
            name: "Command",
            inputType: ".io.restorecommerce.commandinterface.CommandRequest",
            outputType: ".google.protobuf.Any",
          },
        ],
        name: "Service",
      },
    ],
    extension: [],
    name: "io/restorecommerce/commandinterface.proto",
    package: "io.restorecommerce.commandinterface",
    sourceCodeInfo: {
      location: [
        {
          path: [4, 0],
          span: [8, 0, 13, 1],
          leadingDetachedComments: [],
          leadingComments: " used to send requests through Kafka or gRPC\n",
        },
        {
          path: [4, 0, 2, 0],
          span: [10, 2, 18],
          leadingDetachedComments: [],
          leadingComments:
            "  command identifier (used to demultiplex operation in the command implementation)\n",
        },
        {
          path: [4, 0, 2, 1],
          span: [11, 2, 34],
          leadingDetachedComments: [],
          trailingComments: " variable payload\n",
        },
        {
          path: [4, 1],
          span: [16, 0, 22, 1],
          leadingDetachedComments: [],
          leadingComments: " used to push responses to Kafka\n",
        },
        {
          path: [4, 1, 2, 0],
          span: [20, 2, 31],
          leadingDetachedComments: [],
          leadingComments:
            " service identifiers\n (multiple services may reply to one system command)\n (multiple service names can be bound to one microservice)\n",
        },
        {
          path: [4, 1, 2, 1],
          span: [21, 2, 34],
          leadingDetachedComments: [],
          trailingComments: " variable payload\n",
        },
        {
          path: [6, 0],
          span: [27, 0, 29, 1],
          leadingDetachedComments: [],
          leadingComments: "*\n RPC service for executing commands\n",
        },
      ],
    },
    syntax: "proto3",
  }),
  references: {
    ".io.restorecommerce.commandinterface.CommandRequest": CommandRequest,
    ".io.restorecommerce.commandinterface.CommandResponse": CommandResponse,
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
