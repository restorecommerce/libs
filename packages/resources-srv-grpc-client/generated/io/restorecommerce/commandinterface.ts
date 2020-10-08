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
};
