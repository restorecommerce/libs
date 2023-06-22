/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { Any, protoMetadata as protoMetadata1 } from "../../google/protobuf/any";
import { protoMetadata as protoMetadata2, Subject } from "./auth";
import { protoMetadata as protoMetadata3 } from "./options";

export const protobufPackage = "io.restorecommerce.commandinterface";

/** used to send requests through Kafka or gRPC */
export interface CommandRequest {
  /** command identifier (used to demultiplex operation in the command implementation) */
  name?:
    | string
    | undefined;
  /** variable payload */
  payload?: Any | undefined;
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
  return { name: undefined, payload: undefined, subject: undefined };
}

export const CommandRequest = {
  encode(message: CommandRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined) {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommandRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.payload = Any.decode(reader, reader.uint32());
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

  fromJSON(object: any): CommandRequest {
    return {
      name: isSet(object.name) ? String(object.name) : undefined,
      payload: isSet(object.payload) ? Any.fromJSON(object.payload) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: CommandRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.payload !== undefined && (obj.payload = message.payload ? Any.toJSON(message.payload) : undefined);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CommandRequest>): CommandRequest {
    return CommandRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CommandRequest>): CommandRequest {
    const message = createBaseCommandRequest();
    message.name = object.name ?? undefined;
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? Any.fromPartial(object.payload)
      : undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseCommandResponse(): CommandResponse {
  return { services: [], payload: undefined };
}

export const CommandResponse = {
  encode(message: CommandResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.services) {
      writer.uint32(10).string(v!);
    }
    if (message.payload !== undefined) {
      Any.encode(message.payload, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommandResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommandResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.services.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.payload = Any.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CommandResponse {
    return {
      services: Array.isArray(object?.services) ? object.services.map((e: any) => String(e)) : [],
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
    message.payload !== undefined && (obj.payload = message.payload ? Any.toJSON(message.payload) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CommandResponse>): CommandResponse {
    return CommandResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CommandResponse>): CommandResponse {
    const message = createBaseCommandResponse();
    message.services = object.services?.map((e) => e) || [];
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? Any.fromPartial(object.payload)
      : undefined;
    return message;
  },
};

/** RPC service for executing commands */
export type CommandInterfaceServiceDefinition = typeof CommandInterfaceServiceDefinition;
export const CommandInterfaceServiceDefinition = {
  name: "CommandInterfaceService",
  fullName: "io.restorecommerce.commandinterface.CommandInterfaceService",
  methods: {
    command: {
      name: "Command",
      requestType: CommandRequest,
      requestStream: false,
      responseType: Any,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface CommandInterfaceServiceImplementation<CallContextExt = {}> {
  command(request: CommandRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Any>>;
}

export interface CommandInterfaceServiceClient<CallOptionsExt = {}> {
  command(request: DeepPartial<CommandRequest>, options?: CallOptions & CallOptionsExt): Promise<Any>;
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
    "name": "io/restorecommerce/commandinterface.proto",
    "package": "io.restorecommerce.commandinterface",
    "dependency": ["google/protobuf/any.proto", "io/restorecommerce/auth.proto", "io/restorecommerce/options.proto"],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "CommandRequest",
      "field": [{
        "name": "name",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "name",
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
        "name": "subject",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.auth.Subject",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "subject",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_name", "options": undefined }, { "name": "_payload", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "CommandResponse",
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
      }, {
        "name": "payload",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.Any",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "payload",
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
      "name": "CommandInterfaceService",
      "method": [{
        "name": "Command",
        "inputType": ".io.restorecommerce.commandinterface.CommandRequest",
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
        "path": [4, 0],
        "span": [9, 0, 14, 1],
        "leadingComments": " used to send requests through Kafka or gRPC\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0, 2, 0],
        "span": [11, 2, 27],
        "leadingComments": "  command identifier (used to demultiplex operation in the command implementation)\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0, 2, 1],
        "span": [12, 2, 43],
        "leadingComments": "",
        "trailingComments": " variable payload\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1],
        "span": [17, 0, 23, 1],
        "leadingComments": " used to push responses to Kafka\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 0],
        "span": [21, 2, 31],
        "leadingComments":
          " service identifiers\n (multiple services may reply to one system command)\n (multiple service names can be bound to one microservice)\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 1],
        "span": [22, 2, 34],
        "leadingComments": "",
        "trailingComments": " variable payload\n",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0],
        "span": [28, 0, 30, 1],
        "leadingComments": "*\n RPC service for executing commands\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {
    ".io.restorecommerce.commandinterface.CommandRequest": CommandRequest,
    ".io.restorecommerce.commandinterface.CommandResponse": CommandResponse,
  },
  dependencies: [protoMetadata1, protoMetadata2, protoMetadata3],
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
