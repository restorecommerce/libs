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

export interface MetaI {
  readonly meta: 'object' | 'array' | 'map' | 'union';
}

export interface MetaO extends MetaI {
  readonly meta: 'object';
  readonly type: string;
  readonly name: string;
}

export interface MetaA extends MetaI {
  readonly meta: 'array';
  readonly type: MetaI | string;
}

export interface MetaM extends MetaI {
  readonly meta: 'map';
  readonly key: string;
  readonly value: MetaI | string;
}

export interface MetaU extends MetaI {
  readonly meta: 'union';
  readonly choices: Array<MetaI | string | undefined>;
}

export interface MetaS<T, R> {
  readonly request: string;
  readonly response: string;
  readonly encodeRequest: (message: T, writer: Writer) => Writer;
  readonly decodeResponse: (input: Uint8Array | Reader, length?: number) => R;
}

export const protobufPackage = 'io.restorecommerce.command'

export enum CommandParameter_ParameterType {
  boolean_value = 0,
  object_value = 1,
  array_value = 2,
  number_value = 3,
  string_value = 4,
  UNRECOGNIZED = -1,
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
    default:
      return "UNKNOWN";
  }
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
  fromJSON(object: any): Command {
    const message = { ...baseCommand } as Command;
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
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.name !== undefined && (obj.name = message.name);
    if (message.parameters) {
      obj.parameters = message.parameters.map(e => e ? CommandParameter.toJSON(e) : undefined);
    } else {
      obj.parameters = [];
    }
    message.description !== undefined && (obj.description = message.description);
    return obj;
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
  fromJSON(object: any): CommandParameter {
    const message = { ...baseCommandParameter } as CommandParameter;
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
    message.description !== undefined && (obj.description = message.description);
    message.type !== undefined && (obj.type = commandParameter_ParameterTypeToJSON(message.type));
    message.properties !== undefined && (obj.properties = message.properties);
    return obj;
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
  fromJSON(object: any): CommandList {
    const message = { ...baseCommandList } as CommandList;
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
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromJSON(object.apiKey);
    } else {
      message.apiKey = undefined;
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
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromPartial(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  toJSON(message: CommandList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map(e => e ? Command.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    message.apiKey !== undefined && (obj.apiKey = message.apiKey ? ApiKey.toJSON(message.apiKey) : undefined);
    return obj;
  },
};

export const metaCommand: { [key in keyof Command]: MetaI | string } = {
  id: 'string',
  meta: {meta:'object', type:'.io.restorecommerce.meta.Meta', name:'Meta'} as MetaO,
  name: 'string',
  parameters: {meta:'array', type:{meta:'object', type:'.io.restorecommerce.command.CommandParameter', name:'CommandParameter'} as MetaO} as MetaA,
  description: 'string',
}
export const metaCommandParameter: { [key in keyof CommandParameter]: MetaI | string } = {
  field: 'string',
  description: 'string',
  type: {meta:'object', type:'.io.restorecommerce.command.CommandParameter.ParameterType', name:'CommandParameter_ParameterType'} as MetaO,
  properties: 'string',
}
export const metaCommandList: { [key in keyof CommandList]: MetaI | string } = {
  items: {meta:'array', type:{meta:'object', type:'.io.restorecommerce.command.Command', name:'Command'} as MetaO} as MetaA,
  totalCount: 'number',
  subject: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.Subject', name:'Subject'} as MetaO]} as MetaU,
  apiKey: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.ApiKey', name:'ApiKey'} as MetaO]} as MetaU,
}
export const metaService: { [key in keyof Service]: MetaS<any, any> } = {
  Read: {request: '.io.restorecommerce.command.CommandList', response: '.io.restorecommerce.command.CommandList', encodeRequest: ReadRequest.encode, decodeResponse: CommandList.decode} as MetaS<ReadRequest, CommandList>,
  Create: {request: '.io.restorecommerce.command.CommandList', response: '.io.restorecommerce.command.CommandList', encodeRequest: CommandList.encode, decodeResponse: CommandList.decode} as MetaS<CommandList, CommandList>,
  Delete: {request: '.google.protobuf.Empty', response: '.google.protobuf.Empty', encodeRequest: DeleteRequest.encode, decodeResponse: Empty.decode} as MetaS<DeleteRequest, Empty>,
  Update: {request: '.io.restorecommerce.command.CommandList', response: '.io.restorecommerce.command.CommandList', encodeRequest: CommandList.encode, decodeResponse: CommandList.decode} as MetaS<CommandList, CommandList>,
  Upsert: {request: '.io.restorecommerce.command.CommandList', response: '.io.restorecommerce.command.CommandList', encodeRequest: CommandList.encode, decodeResponse: CommandList.decode} as MetaS<CommandList, CommandList>,
}
type Builtin = Date | Function | Uint8Array | string | number | undefined;
type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;