/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { protoMetadata as protoMetadata3, Subject } from "./auth";
import { Meta, protoMetadata as protoMetadata2 } from "./meta";
import { protoMetadata as protoMetadata5 } from "./options";
import { DeleteRequest, DeleteResponse, protoMetadata as protoMetadata1, ReadRequest } from "./resource_base";
import { OperationStatus, protoMetadata as protoMetadata4, Status } from "./status";

export const protobufPackage = "io.restorecommerce.command";

/** command resource */
export interface Command {
  id: string;
  meta?: Meta;
  /** command name */
  name: string;
  /** all possible parameters */
  parameters: CommandParameter[];
  /** command description */
  description: string;
}

export interface CommandParameter {
  /** field name */
  field: string;
  /** field description */
  description: string;
  /** field's type */
  type: CommandParameter_ParameterType;
  /** dump properties in case of `object_value`` */
  properties: string;
}

export enum CommandParameter_ParameterType {
  boolean_value = "boolean_value",
  object_value = "object_value",
  array_value = "array_value",
  number_value = "number_value",
  string_value = "string_value",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function commandParameter_ParameterTypeFromJSON(object: any): CommandParameter_ParameterType {
  switch (object) {
    case 0:
    case "boolean_value":
      return CommandParameter_ParameterType.boolean_value;
    case 1:
    case "object_value":
      return CommandParameter_ParameterType.object_value;
    case 2:
    case "array_value":
      return CommandParameter_ParameterType.array_value;
    case 3:
    case "number_value":
      return CommandParameter_ParameterType.number_value;
    case 4:
    case "string_value":
      return CommandParameter_ParameterType.string_value;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CommandParameter_ParameterType.UNRECOGNIZED;
  }
}

export function commandParameter_ParameterTypeToJSON(object: CommandParameter_ParameterType): string {
  switch (object) {
    case CommandParameter_ParameterType.boolean_value:
      return "boolean_value";
    case CommandParameter_ParameterType.object_value:
      return "object_value";
    case CommandParameter_ParameterType.array_value:
      return "array_value";
    case CommandParameter_ParameterType.number_value:
      return "number_value";
    case CommandParameter_ParameterType.string_value:
      return "string_value";
    case CommandParameter_ParameterType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function commandParameter_ParameterTypeToNumber(object: CommandParameter_ParameterType): number {
  switch (object) {
    case CommandParameter_ParameterType.boolean_value:
      return 0;
    case CommandParameter_ParameterType.object_value:
      return 1;
    case CommandParameter_ParameterType.array_value:
      return 2;
    case CommandParameter_ParameterType.number_value:
      return 3;
    case CommandParameter_ParameterType.string_value:
      return 4;
    case CommandParameter_ParameterType.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface CommandList {
  items: Command[];
  totalCount: number;
  subject?: Subject;
}

export interface CommandListResponse {
  items: CommandResponse[];
  totalCount: number;
  operationStatus?: OperationStatus;
}

export interface CommandResponse {
  payload?: Command;
  status?: Status;
}

function createBaseCommand(): Command {
  return { id: "", meta: undefined, name: "", parameters: [], description: "" };
}

export const Command = {
  encode(message: Command, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    for (const v of message.parameters) {
      CommandParameter.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Command {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.meta = Meta.decode(reader, reader.uint32());
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.parameters.push(CommandParameter.decode(reader, reader.uint32()));
          break;
        case 5:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Command {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      parameters: Array.isArray(object?.parameters)
        ? object.parameters.map((e: any) => CommandParameter.fromJSON(e))
        : [],
      description: isSet(object.description) ? String(object.description) : "",
    };
  },

  toJSON(message: Command): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.name !== undefined && (obj.name = message.name);
    if (message.parameters) {
      obj.parameters = message.parameters.map((e) => e ? CommandParameter.toJSON(e) : undefined);
    } else {
      obj.parameters = [];
    }
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },

  create(base?: DeepPartial<Command>): Command {
    return Command.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Command>): Command {
    const message = createBaseCommand();
    message.id = object.id ?? "";
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    message.name = object.name ?? "";
    message.parameters = object.parameters?.map((e) => CommandParameter.fromPartial(e)) || [];
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseCommandParameter(): CommandParameter {
  return { field: "", description: "", type: CommandParameter_ParameterType.boolean_value, properties: "" };
}

export const CommandParameter = {
  encode(message: CommandParameter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.field !== "") {
      writer.uint32(10).string(message.field);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.type !== CommandParameter_ParameterType.boolean_value) {
      writer.uint32(24).int32(commandParameter_ParameterTypeToNumber(message.type));
    }
    if (message.properties !== "") {
      writer.uint32(34).string(message.properties);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommandParameter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommandParameter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.field = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.type = commandParameter_ParameterTypeFromJSON(reader.int32());
          break;
        case 4:
          message.properties = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommandParameter {
    return {
      field: isSet(object.field) ? String(object.field) : "",
      description: isSet(object.description) ? String(object.description) : "",
      type: isSet(object.type)
        ? commandParameter_ParameterTypeFromJSON(object.type)
        : CommandParameter_ParameterType.boolean_value,
      properties: isSet(object.properties) ? String(object.properties) : "",
    };
  },

  toJSON(message: CommandParameter): unknown {
    const obj: any = {};
    message.field !== undefined && (obj.field = message.field);
    message.description !== undefined && (obj.description = message.description);
    message.type !== undefined && (obj.type = commandParameter_ParameterTypeToJSON(message.type));
    message.properties !== undefined && (obj.properties = message.properties);
    return obj;
  },

  create(base?: DeepPartial<CommandParameter>): CommandParameter {
    return CommandParameter.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CommandParameter>): CommandParameter {
    const message = createBaseCommandParameter();
    message.field = object.field ?? "";
    message.description = object.description ?? "";
    message.type = object.type ?? CommandParameter_ParameterType.boolean_value;
    message.properties = object.properties ?? "";
    return message;
  },
};

function createBaseCommandList(): CommandList {
  return { items: [], totalCount: 0, subject: undefined };
}

export const CommandList = {
  encode(message: CommandList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      Command.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommandList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommandList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Command.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalCount = reader.uint32();
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

  fromJSON(object: any): CommandList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => Command.fromJSON(e)) : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: CommandList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? Command.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = Math.round(message.totalCount));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CommandList>): CommandList {
    return CommandList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CommandList>): CommandList {
    const message = createBaseCommandList();
    message.items = object.items?.map((e) => Command.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseCommandListResponse(): CommandListResponse {
  return { items: [], totalCount: 0, operationStatus: undefined };
}

export const CommandListResponse = {
  encode(message: CommandListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      CommandResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.operationStatus !== undefined) {
      OperationStatus.encode(message.operationStatus, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommandListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommandListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(CommandResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalCount = reader.uint32();
          break;
        case 3:
          message.operationStatus = OperationStatus.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommandListResponse {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => CommandResponse.fromJSON(e)) : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
      operationStatus: isSet(object.operationStatus) ? OperationStatus.fromJSON(object.operationStatus) : undefined,
    };
  },

  toJSON(message: CommandListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? CommandResponse.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = Math.round(message.totalCount));
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus ? OperationStatus.toJSON(message.operationStatus) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CommandListResponse>): CommandListResponse {
    return CommandListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CommandListResponse>): CommandListResponse {
    const message = createBaseCommandListResponse();
    message.items = object.items?.map((e) => CommandResponse.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    message.operationStatus = (object.operationStatus !== undefined && object.operationStatus !== null)
      ? OperationStatus.fromPartial(object.operationStatus)
      : undefined;
    return message;
  },
};

function createBaseCommandResponse(): CommandResponse {
  return { payload: undefined, status: undefined };
}

export const CommandResponse = {
  encode(message: CommandResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      Command.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
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
          message.payload = Command.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = Status.decode(reader, reader.uint32());
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
      payload: isSet(object.payload) ? Command.fromJSON(object.payload) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: CommandResponse): unknown {
    const obj: any = {};
    message.payload !== undefined && (obj.payload = message.payload ? Command.toJSON(message.payload) : undefined);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CommandResponse>): CommandResponse {
    return CommandResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CommandResponse>): CommandResponse {
    const message = createBaseCommandResponse();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? Command.fromPartial(object.payload)
      : undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

export type ServiceDefinition = typeof ServiceDefinition;
export const ServiceDefinition = {
  name: "Service",
  fullName: "io.restorecommerce.command.Service",
  methods: {
    read: {
      name: "Read",
      requestType: ReadRequest,
      requestStream: false,
      responseType: CommandListResponse,
      responseStream: false,
      options: {},
    },
    create: {
      name: "Create",
      requestType: CommandList,
      requestStream: false,
      responseType: CommandListResponse,
      responseStream: false,
      options: {},
    },
    delete: {
      name: "Delete",
      requestType: DeleteRequest,
      requestStream: false,
      responseType: DeleteResponse,
      responseStream: false,
      options: {},
    },
    update: {
      name: "Update",
      requestType: CommandList,
      requestStream: false,
      responseType: CommandListResponse,
      responseStream: false,
      options: {},
    },
    upsert: {
      name: "Upsert",
      requestType: CommandList,
      requestStream: false,
      responseType: CommandListResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface ServiceImplementation<CallContextExt = {}> {
  read(request: ReadRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CommandListResponse>>;
  create(request: CommandList, context: CallContext & CallContextExt): Promise<DeepPartial<CommandListResponse>>;
  delete(request: DeleteRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteResponse>>;
  update(request: CommandList, context: CallContext & CallContextExt): Promise<DeepPartial<CommandListResponse>>;
  upsert(request: CommandList, context: CallContext & CallContextExt): Promise<DeepPartial<CommandListResponse>>;
}

export interface ServiceClient<CallOptionsExt = {}> {
  read(request: DeepPartial<ReadRequest>, options?: CallOptions & CallOptionsExt): Promise<CommandListResponse>;
  create(request: DeepPartial<CommandList>, options?: CallOptions & CallOptionsExt): Promise<CommandListResponse>;
  delete(request: DeepPartial<DeleteRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteResponse>;
  update(request: DeepPartial<CommandList>, options?: CallOptions & CallOptionsExt): Promise<CommandListResponse>;
  upsert(request: DeepPartial<CommandList>, options?: CallOptions & CallOptionsExt): Promise<CommandListResponse>;
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
    "name": "io/restorecommerce/command.proto",
    "package": "io.restorecommerce.command",
    "dependency": [
      "io/restorecommerce/resource_base.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/options.proto",
    ],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "Command",
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
        "proto3Optional": false,
      }, {
        "name": "meta",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.meta.Meta",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "meta",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "name",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "parameters",
        "number": 4,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.command.CommandParameter",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "parameters",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "description",
        "number": 5,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "description",
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
      "name": "CommandParameter",
      "field": [{
        "name": "field",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "field",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "description",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "description",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "type",
        "number": 3,
        "label": 1,
        "type": 14,
        "typeName": ".io.restorecommerce.command.CommandParameter.ParameterType",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "type",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "properties",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "properties",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [{
        "name": "ParameterType",
        "value": [
          { "name": "boolean_value", "number": 0, "options": undefined },
          { "name": "object_value", "number": 1, "options": undefined },
          { "name": "array_value", "number": 2, "options": undefined },
          { "name": "number_value", "number": 3, "options": undefined },
          { "name": "string_value", "number": 4, "options": undefined },
        ],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "CommandList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.command.Command",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "items",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "total_count",
        "number": 2,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "totalCount",
        "options": undefined,
        "proto3Optional": false,
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
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "CommandListResponse",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.command.CommandResponse",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "items",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "total_count",
        "number": 2,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "totalCount",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "operation_status",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.status.OperationStatus",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "operationStatus",
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
      "name": "CommandResponse",
      "field": [{
        "name": "payload",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.command.Command",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "payload",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "status",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.status.Status",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "status",
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
      "name": "Service",
      "method": [{
        "name": "Read",
        "inputType": ".io.restorecommerce.resourcebase.ReadRequest",
        "outputType": ".io.restorecommerce.command.CommandListResponse",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Create",
        "inputType": ".io.restorecommerce.command.CommandList",
        "outputType": ".io.restorecommerce.command.CommandListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Delete",
        "inputType": ".io.restorecommerce.resourcebase.DeleteRequest",
        "outputType": ".io.restorecommerce.resourcebase.DeleteResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Update",
        "inputType": ".io.restorecommerce.command.CommandList",
        "outputType": ".io.restorecommerce.command.CommandListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Upsert",
        "inputType": ".io.restorecommerce.command.CommandList",
        "outputType": ".io.restorecommerce.command.CommandListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }],
      "options": { "deprecated": false, "uninterpretedOption": [] },
    }],
    "extension": [],
    "options": undefined,
    "sourceCodeInfo": {
      "location": [{
        "path": [4, 0],
        "span": [11, 0, 17, 1],
        "leadingComments": " command resource\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0, 2, 2],
        "span": [14, 2, 18],
        "leadingComments": "",
        "trailingComments": " command name\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0, 2, 3],
        "span": [15, 2, 43],
        "leadingComments": "",
        "trailingComments": " all possible parameters\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0, 2, 4],
        "span": [16, 2, 25],
        "leadingComments": "",
        "trailingComments": " command description\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 0],
        "span": [28, 2, 19],
        "leadingComments": "",
        "trailingComments": "  field name\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 1],
        "span": [29, 2, 25],
        "leadingComments": "",
        "trailingComments": " field description\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 2],
        "span": [30, 2, 25],
        "leadingComments": "",
        "trailingComments": " field's type\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 3],
        "span": [31, 2, 24],
        "leadingComments": "",
        "trailingComments": " dump properties in case of `object_value``\n",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {
    ".io.restorecommerce.command.Command": Command,
    ".io.restorecommerce.command.CommandParameter": CommandParameter,
    ".io.restorecommerce.command.CommandParameter.ParameterType": CommandParameter_ParameterType,
    ".io.restorecommerce.command.CommandList": CommandList,
    ".io.restorecommerce.command.CommandListResponse": CommandListResponse,
    ".io.restorecommerce.command.CommandResponse": CommandResponse,
  },
  dependencies: [protoMetadata1, protoMetadata2, protoMetadata3, protoMetadata4, protoMetadata5],
  options: {
    services: { "Service": { options: { "service_name": "command" }, methods: { "Read": { "is_query": true } } } },
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
