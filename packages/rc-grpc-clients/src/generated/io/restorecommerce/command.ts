/* eslint-disable */
import { FileDescriptorProto } from "ts-proto-descriptors/google/protobuf/descriptor";
import {
  Meta,
  protoMetadata as protoMetadata2,
} from "../../io/restorecommerce/meta";
import {
  Subject,
  protoMetadata as protoMetadata3,
} from "../../io/restorecommerce/auth";
import {
  OperationStatus,
  Status,
  protoMetadata as protoMetadata4,
} from "../../io/restorecommerce/status";
import {
  protoMetadata as protoMetadata1,
  DeleteResponse,
  ReadRequest,
  DeleteRequest,
} from "../../io/restorecommerce/resource_base";
import { Writer, Reader } from "protobufjs/minimal";

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
  boolean_value = 0,
  object_value = 1,
  array_value = 2,
  number_value = 3,
  string_value = 4,
  UNRECOGNIZED = -1,
}

export function commandParameter_ParameterTypeFromJSON(
  object: any
): CommandParameter_ParameterType {
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

export function commandParameter_ParameterTypeToJSON(
  object: CommandParameter_ParameterType
): string {
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
    default:
      return "UNKNOWN";
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

const baseCommand: object = { id: "", name: "", description: "" };

export const Command = {
  encode(message: Command, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): Command {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseCommand) as Command;
    message.parameters = [];
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
          message.parameters.push(
            CommandParameter.decode(reader, reader.uint32())
          );
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
    const message = globalThis.Object.create(baseCommand) as Command;
    message.parameters = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromJSON(object.meta);
    } else {
      message.meta = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.parameters !== undefined && object.parameters !== null) {
      for (const e of object.parameters) {
        message.parameters.push(CommandParameter.fromJSON(e));
      }
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<Command>): Command {
    const message = { ...baseCommand } as Command;
    message.parameters = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromPartial(object.meta);
    } else {
      message.meta = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.parameters !== undefined && object.parameters !== null) {
      for (const e of object.parameters) {
        message.parameters.push(CommandParameter.fromPartial(e));
      }
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    return message;
  },

  toJSON(message: Command): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.name !== undefined && (obj.name = message.name);
    if (message.parameters) {
      obj.parameters = message.parameters.map((e) =>
        e ? CommandParameter.toJSON(e) : undefined
      );
    } else {
      obj.parameters = [];
    }
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },
};

const baseCommandParameter: object = {
  field: "",
  description: "",
  type: 0,
  properties: "",
};

export const CommandParameter = {
  encode(message: CommandParameter, writer: Writer = Writer.create()): Writer {
    if (message.field !== "") {
      writer.uint32(10).string(message.field);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.properties !== "") {
      writer.uint32(34).string(message.properties);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CommandParameter {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseCommandParameter
    ) as CommandParameter;
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
          message.type = reader.int32() as any;
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
    const message = globalThis.Object.create(
      baseCommandParameter
    ) as CommandParameter;
    if (object.field !== undefined && object.field !== null) {
      message.field = String(object.field);
    } else {
      message.field = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = commandParameter_ParameterTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.properties !== undefined && object.properties !== null) {
      message.properties = String(object.properties);
    } else {
      message.properties = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<CommandParameter>): CommandParameter {
    const message = { ...baseCommandParameter } as CommandParameter;
    if (object.field !== undefined && object.field !== null) {
      message.field = object.field;
    } else {
      message.field = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.properties !== undefined && object.properties !== null) {
      message.properties = object.properties;
    } else {
      message.properties = "";
    }
    return message;
  },

  toJSON(message: CommandParameter): unknown {
    const obj: any = {};
    message.field !== undefined && (obj.field = message.field);
    message.description !== undefined &&
      (obj.description = message.description);
    message.type !== undefined &&
      (obj.type = commandParameter_ParameterTypeToJSON(message.type));
    message.properties !== undefined && (obj.properties = message.properties);
    return obj;
  },
};

const baseCommandList: object = { totalCount: 0 };

export const CommandList = {
  encode(message: CommandList, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): CommandList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseCommandList) as CommandList;
    message.items = [];
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
    const message = globalThis.Object.create(baseCommandList) as CommandList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Command.fromJSON(e));
      }
    }
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = Number(object.totalCount);
    } else {
      message.totalCount = 0;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<CommandList>): CommandList {
    const message = { ...baseCommandList } as CommandList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Command.fromPartial(e));
      }
    }
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = object.totalCount;
    } else {
      message.totalCount = 0;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  toJSON(message: CommandList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => (e ? Command.toJSON(e) : undefined));
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseCommandListResponse: object = { totalCount: 0 };

export const CommandListResponse = {
  encode(
    message: CommandListResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.items) {
      CommandResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.operationStatus !== undefined) {
      OperationStatus.encode(
        message.operationStatus,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CommandListResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseCommandListResponse
    ) as CommandListResponse;
    message.items = [];
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
          message.operationStatus = OperationStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommandListResponse {
    const message = globalThis.Object.create(
      baseCommandListResponse
    ) as CommandListResponse;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(CommandResponse.fromJSON(e));
      }
    }
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = Number(object.totalCount);
    } else {
      message.totalCount = 0;
    }
    if (
      object.operationStatus !== undefined &&
      object.operationStatus !== null
    ) {
      message.operationStatus = OperationStatus.fromJSON(
        object.operationStatus
      );
    } else {
      message.operationStatus = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<CommandListResponse>): CommandListResponse {
    const message = { ...baseCommandListResponse } as CommandListResponse;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(CommandResponse.fromPartial(e));
      }
    }
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = object.totalCount;
    } else {
      message.totalCount = 0;
    }
    if (
      object.operationStatus !== undefined &&
      object.operationStatus !== null
    ) {
      message.operationStatus = OperationStatus.fromPartial(
        object.operationStatus
      );
    } else {
      message.operationStatus = undefined;
    }
    return message;
  },

  toJSON(message: CommandListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? CommandResponse.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus
        ? OperationStatus.toJSON(message.operationStatus)
        : undefined);
    return obj;
  },
};

const baseCommandResponse: object = {};

export const CommandResponse = {
  encode(message: CommandResponse, writer: Writer = Writer.create()): Writer {
    if (message.payload !== undefined) {
      Command.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CommandResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseCommandResponse
    ) as CommandResponse;
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
    const message = globalThis.Object.create(
      baseCommandResponse
    ) as CommandResponse;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = Command.fromJSON(object.payload);
    } else {
      message.payload = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromJSON(object.status);
    } else {
      message.status = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<CommandResponse>): CommandResponse {
    const message = { ...baseCommandResponse } as CommandResponse;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = Command.fromPartial(object.payload);
    } else {
      message.payload = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromPartial(object.status);
    } else {
      message.status = undefined;
    }
    return message;
  },

  toJSON(message: CommandResponse): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload
        ? Command.toJSON(message.payload)
        : undefined);
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },
};

export interface Service {
  Read(request: ReadRequest): Promise<CommandListResponse>;
  Create(request: CommandList): Promise<CommandListResponse>;
  Delete(request: DeleteRequest): Promise<DeleteResponse>;
  Update(request: CommandList): Promise<CommandListResponse>;
  Upsert(request: CommandList): Promise<CommandListResponse>;
}

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto.fromPartial({
    dependency: [
      "io/restorecommerce/resource_base.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
    ],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        field: [
          { name: "id", number: 1, label: 1, type: 9, jsonName: "id" },
          {
            name: "meta",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.meta.Meta",
            jsonName: "meta",
          },
          { name: "name", number: 3, label: 1, type: 9, jsonName: "name" },
          {
            name: "parameters",
            number: 4,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.command.CommandParameter",
            jsonName: "parameters",
          },
          {
            name: "description",
            number: 5,
            label: 1,
            type: 9,
            jsonName: "description",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Command",
      },
      {
        field: [
          { name: "field", number: 1, label: 1, type: 9, jsonName: "field" },
          {
            name: "description",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "description",
          },
          {
            name: "type",
            number: 3,
            label: 1,
            type: 14,
            typeName:
              ".io.restorecommerce.command.CommandParameter.ParameterType",
            jsonName: "type",
          },
          {
            name: "properties",
            number: 4,
            label: 1,
            type: 9,
            jsonName: "properties",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [
          {
            value: [
              { name: "boolean_value", number: 0 },
              { name: "object_value", number: 1 },
              { name: "array_value", number: 2 },
              { name: "number_value", number: 3 },
              { name: "string_value", number: 4 },
            ],
            reservedRange: [],
            reservedName: [],
            name: "ParameterType",
          },
        ],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "CommandParameter",
      },
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.command.Command",
            jsonName: "items",
          },
          {
            name: "total_count",
            number: 2,
            label: 1,
            type: 13,
            jsonName: "totalCount",
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
        name: "CommandList",
      },
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.command.CommandResponse",
            jsonName: "items",
          },
          {
            name: "total_count",
            number: 2,
            label: 1,
            type: 13,
            jsonName: "totalCount",
          },
          {
            name: "operation_status",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.OperationStatus",
            jsonName: "operationStatus",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "CommandListResponse",
      },
      {
        field: [
          {
            name: "payload",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.command.Command",
            jsonName: "payload",
          },
          {
            name: "status",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.Status",
            jsonName: "status",
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
            name: "Read",
            inputType: ".io.restorecommerce.resourcebase.ReadRequest",
            outputType: ".io.restorecommerce.command.CommandListResponse",
          },
          {
            name: "Create",
            inputType: ".io.restorecommerce.command.CommandList",
            outputType: ".io.restorecommerce.command.CommandListResponse",
          },
          {
            name: "Delete",
            inputType: ".io.restorecommerce.resourcebase.DeleteRequest",
            outputType: ".io.restorecommerce.resourcebase.DeleteResponse",
          },
          {
            name: "Update",
            inputType: ".io.restorecommerce.command.CommandList",
            outputType: ".io.restorecommerce.command.CommandListResponse",
          },
          {
            name: "Upsert",
            inputType: ".io.restorecommerce.command.CommandList",
            outputType: ".io.restorecommerce.command.CommandListResponse",
          },
        ],
        name: "Service",
      },
    ],
    extension: [],
    name: "io/restorecommerce/command.proto",
    package: "io.restorecommerce.command",
    sourceCodeInfo: {
      location: [
        {
          path: [4, 0],
          span: [10, 0, 16, 1],
          leadingDetachedComments: [],
          leadingComments: " command resource\n",
        },
        {
          path: [4, 0, 2, 2],
          span: [13, 2, 18],
          leadingDetachedComments: [],
          trailingComments: " command name\n",
        },
        {
          path: [4, 0, 2, 3],
          span: [14, 2, 43],
          leadingDetachedComments: [],
          trailingComments: " all possible parameters\n",
        },
        {
          path: [4, 0, 2, 4],
          span: [15, 2, 25],
          leadingDetachedComments: [],
          trailingComments: " command description\n",
        },
        {
          path: [4, 1, 2, 0],
          span: [27, 2, 19],
          leadingDetachedComments: [],
          trailingComments: "  field name\n",
        },
        {
          path: [4, 1, 2, 1],
          span: [28, 2, 25],
          leadingDetachedComments: [],
          trailingComments: " field description\n",
        },
        {
          path: [4, 1, 2, 2],
          span: [29, 2, 25],
          leadingDetachedComments: [],
          trailingComments: " field's type\n",
        },
        {
          path: [4, 1, 2, 3],
          span: [30, 2, 24],
          leadingDetachedComments: [],
          trailingComments: " dump properties in case of `object_value``\n",
        },
      ],
    },
    syntax: "proto3",
  }),
  references: {
    ".io.restorecommerce.command.Command": Command,
    ".io.restorecommerce.command.CommandParameter": CommandParameter,
    ".io.restorecommerce.command.CommandParameter.ParameterType": CommandParameter_ParameterType,
    ".io.restorecommerce.command.CommandList": CommandList,
    ".io.restorecommerce.command.CommandListResponse": CommandListResponse,
    ".io.restorecommerce.command.CommandResponse": CommandResponse,
  },
  dependencies: [
    protoMetadata1,
    protoMetadata2,
    protoMetadata3,
    protoMetadata4,
  ],
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
