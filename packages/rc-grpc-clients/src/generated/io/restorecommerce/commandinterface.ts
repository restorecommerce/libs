/* eslint-disable */
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  Any,
  protoMetadata as protoMetadata1,
} from "../../google/protobuf/any";
import {
  Subject,
  protoMetadata as protoMetadata2,
} from "../../io/restorecommerce/auth";

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

function createBaseCommandRequest(): CommandRequest {
  return { name: "", payload: undefined, subject: undefined };
}

export const CommandRequest = {
  encode(
    message: CommandRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): CommandRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommandRequest();
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
    return {
      name: isSet(object.name) ? String(object.name) : "",
      payload: isSet(object.payload) ? Any.fromJSON(object.payload) : undefined,
      subject: isSet(object.subject)
        ? Subject.fromJSON(object.subject)
        : undefined,
    };
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

  fromPartial(object: DeepPartial<CommandRequest>): CommandRequest {
    const message = createBaseCommandRequest();
    message.name = object.name ?? "";
    message.payload =
      object.payload !== undefined && object.payload !== null
        ? Any.fromPartial(object.payload)
        : undefined;
    message.subject =
      object.subject !== undefined && object.subject !== null
        ? Subject.fromPartial(object.subject)
        : undefined;
    return message;
  },
};

function createBaseCommandResponse(): CommandResponse {
  return { services: [], payload: undefined };
}

export const CommandResponse = {
  encode(
    message: CommandResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.services) {
      writer.uint32(10).string(v!);
    }
    if (message.payload !== undefined) {
      Any.encode(message.payload, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommandResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommandResponse();
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
    return {
      services: Array.isArray(object?.services)
        ? object.services.map((e: any) => String(e))
        : [],
      payload: isSet(object.payload) ? Any.fromJSON(object.payload) : undefined,
    };
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

  fromPartial(object: DeepPartial<CommandResponse>): CommandResponse {
    const message = createBaseCommandResponse();
    message.services = object.services?.map((e) => e) || [];
    message.payload =
      object.payload !== undefined && object.payload !== null
        ? Any.fromPartial(object.payload)
        : undefined;
    return message;
  },
};

/** RPC service for executing commands */
export interface Service {
  Command(request: CommandRequest): Promise<Any>;
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
      [key: string]: {
        options?: { [key: string]: any };
        methods?: { [key: string]: { [key: string]: any } };
      };
    };
    messages?: {
      [key: string]: ProtoMetaMessageOptions;
    };
    enums?: {
      [key: string]: {
        options?: { [key: string]: any };
        values?: { [key: string]: { [key: string]: any } };
      };
    };
  };
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto1.fromPartial({
    name: "io/restorecommerce/commandinterface.proto",
    package: "io.restorecommerce.commandinterface",
    dependency: ["google/protobuf/any.proto", "io/restorecommerce/auth.proto"],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        name: "CommandRequest",
        field: [
          {
            name: "name",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "name",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "payload",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".google.protobuf.Any",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "payload",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "subject",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "subject",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "CommandResponse",
        field: [
          {
            name: "services",
            number: 1,
            label: 3,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "services",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "payload",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".google.protobuf.Any",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "payload",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
    ],
    enumType: [],
    service: [
      {
        name: "Service",
        method: [
          {
            name: "Command",
            inputType: ".io.restorecommerce.commandinterface.CommandRequest",
            outputType: ".google.protobuf.Any",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
        ],
        options: undefined,
      },
    ],
    extension: [],
    options: undefined,
    sourceCodeInfo: {
      location: [
        {
          path: [4, 0],
          span: [8, 0, 13, 1],
          leadingComments: " used to send requests through Kafka or gRPC\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [4, 0, 2, 0],
          span: [10, 2, 18],
          leadingComments:
            "  command identifier (used to demultiplex operation in the command implementation)\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [4, 0, 2, 1],
          span: [11, 2, 34],
          leadingComments: "",
          trailingComments: " variable payload\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 1],
          span: [16, 0, 22, 1],
          leadingComments: " used to push responses to Kafka\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [4, 1, 2, 0],
          span: [20, 2, 31],
          leadingComments:
            " service identifiers\n (multiple services may reply to one system command)\n (multiple service names can be bound to one microservice)\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [4, 1, 2, 1],
          span: [21, 2, 34],
          leadingComments: "",
          trailingComments: " variable payload\n",
          leadingDetachedComments: [],
        },
        {
          path: [6, 0],
          span: [27, 0, 29, 1],
          leadingComments: "*\n RPC service for executing commands\n",
          trailingComments: "",
          leadingDetachedComments: [],
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

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
