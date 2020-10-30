/* eslint-disable */
import { Any } from '../../google/protobuf/any';
import { Subject, ApiKey } from '../../io/restorecommerce/auth';
import { Writer, Reader } from 'protobufjs/minimal';


/**
 *  used to send requests through Kafka or gRPC
 */
export interface CommandRequest {
  /**
   *   command identifier (used to demultiplex operation in the command implementation)
   */
  name: string;
  /**
   *  variable payload
   */
  payload?: Any;
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
}

/**
 *  used to push responses to Kafka
 */
export interface CommandResponse {
  /**
   *  service identifiers
   *  (multiple services may reply to one system command)
   *  (multiple service names can be bound to one microservice)
   */
  services: string[];
  /**
   *  variable payload
   */
  payload?: Any;
}

const baseCommandRequest: object = {
  name: "",
};

const baseCommandResponse: object = {
  services: "",
};

/**
 * *
 *  RPC service for executing commands
 */
export interface Service {

  Command(request: CommandRequest): Promise<Any>;

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

export const metaCommandRequest: { [key in keyof CommandRequest]: MetaI | string } = {
  name: 'string',
  payload: {meta:'object', type:'.google.protobuf.Any', name:'Any'} as MetaO,
  subject: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.Subject', name:'Subject'} as MetaO]} as MetaU,
  apiKey: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.ApiKey', name:'ApiKey'} as MetaO]} as MetaU,
};

export const metaCommandResponse: { [key in keyof CommandResponse]: MetaI | string } = {
  services: {meta:'array', type:'string'} as MetaA,
  payload: {meta:'object', type:'.google.protobuf.Any', name:'Any'} as MetaO,
};

export const protobufPackage = 'io.restorecommerce.commandinterface'

export const CommandRequest = {
  encode(message: CommandRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.name);
    if (message.payload !== undefined && message.payload !== undefined) {
      Any.encode(message.payload, writer.uint32(18).fork()).ldelim();
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CommandRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCommandRequest } as CommandRequest;
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
  fromJSON(object: any): CommandRequest {
    const message = { ...baseCommandRequest } as CommandRequest;
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
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromJSON(object.apiKey);
    } else {
      message.apiKey = undefined;
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
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromPartial(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  toJSON(message: CommandRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.payload !== undefined && (obj.payload = message.payload ? Any.toJSON(message.payload) : undefined);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    message.apiKey !== undefined && (obj.apiKey = message.apiKey ? ApiKey.toJSON(message.apiKey) : undefined);
    return obj;
  },
};

export const CommandResponse = {
  encode(message: CommandResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.services) {
      writer.uint32(10).string(v!);
    }
    if (message.payload !== undefined && message.payload !== undefined) {
      Any.encode(message.payload, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CommandResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCommandResponse } as CommandResponse;
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
    const message = { ...baseCommandResponse } as CommandResponse;
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
      obj.services = message.services.map(e => e);
    } else {
      obj.services = [];
    }
    message.payload !== undefined && (obj.payload = message.payload ? Any.toJSON(message.payload) : undefined);
    return obj;
  },
};

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