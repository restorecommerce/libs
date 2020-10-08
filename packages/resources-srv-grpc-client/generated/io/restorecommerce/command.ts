/* eslint-disable */
import { Meta } from '../../io/restorecommerce/meta';
import { Subject, ApiKey } from '../../io/restorecommerce/auth';
import { ReadRequest, DeleteRequest } from '../../io/restorecommerce/resource_base';
import { Empty } from '../../google/protobuf/empty';
import { Writer, Reader } from 'protobufjs/minimal';


/**
 *  command resource
 */
export interface Command {
  id: string;
  meta?: Meta;
  /**
   *  command name
   */
  name: string;
  /**
   *  all possible parameters
   */
  parameters: CommandParameter[];
  /**
   *  command description
   */
  description: string;
}

export interface CommandParameter {
  /**
   *   field name
   */
  field: string;
  /**
   *  field description
   */
  description: string;
  /**
   *  field's type
   */
  type: CommandParameter_ParameterType;
  /**
   *  dump properties in case of `object_value``
   */
  properties: string;
}

export interface CommandList {
  items: Command[];
  totalCount: number;
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
}

const baseCommand: object = {
  id: "",
  name: "",
  description: "",
};

const baseCommandParameter: object = {
  field: "",
  description: "",
  type: 0,
  properties: "",
};

const baseCommandList: object = {
  totalCount: 0,
};

export interface Service {

  Read(request: ReadRequest): Promise<CommandList>;

  Create(request: CommandList): Promise<CommandList>;

  Delete(request: DeleteRequest): Promise<Empty>;

  Update(request: CommandList): Promise<CommandList>;

  Upsert(request: CommandList): Promise<CommandList>;

}

export enum CommandParameter_ParameterType {
  boolean_value = 0,
  object_value = 1,
  array_value = 2,
  number_value = 3,
  string_value = 4,
  UNRECOGNIZED = -1,
}

export const Command = {
  encode(message: Command, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    if (message.meta !== undefined && message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.name);
    for (const v of message.parameters) {
      CommandParameter.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    writer.uint32(42).string(message.description);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Command {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCommand } as Command;
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
};

export const CommandParameter = {
  encode(message: CommandParameter, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.field);
    writer.uint32(18).string(message.description);
    writer.uint32(24).int32(message.type);
    writer.uint32(34).string(message.properties);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CommandParameter {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCommandParameter } as CommandParameter;
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
};

export const CommandList = {
  encode(message: CommandList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      Command.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(16).uint32(message.totalCount);
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CommandList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCommandList } as CommandList;
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
        case 4:
          message.apiKey = ApiKey.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};
