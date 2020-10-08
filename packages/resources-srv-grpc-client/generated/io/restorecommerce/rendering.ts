/* eslint-disable */
import { Any } from '../../google/protobuf/any';
import { Writer, Reader } from 'protobufjs/minimal';


export interface Payload {
  /**
   *  json with <key, template> pairs
   *  e.g. { 'subject': ..., 'message':....}
   */
  templates?: Any;
  /**
   *  data to fill template with
   */
  data?: Any;
  /**
   *  stylesheet URL
   */
  styleUrl: string;
  /**
   *  inlining, copying CSS into <style>, etc...
   */
  strategy: Payload_Strategy;
  /**
   *  rendering options JSON object
   */
  options?: Any;
  /**
   *  content type for rendering such as 'application/html' or 'application/text'
   */
  contentType: string;
}

export interface RenderRequest {
  /**
   *  identifies the render request payload
   */
  id: string;
  /**
   *  List of templates with associated data and rendering options
   */
  payload: Payload[];
}

export interface RenderResponse {
  id: string;
  /**
   *  error or HTML contents
   */
  response: Any[];
}

const basePayload: object = {
  styleUrl: "",
  strategy: 0,
  contentType: "",
};

const baseRenderRequest: object = {
  id: "",
};

const baseRenderResponse: object = {
  id: "",
};

/**  style-applying 'strategy'
 */
export enum Payload_Strategy {
  INLINE = 0,
  COPY = 1,
  UNRECOGNIZED = -1,
}

export const Payload = {
  encode(message: Payload, writer: Writer = Writer.create()): Writer {
    if (message.templates !== undefined && message.templates !== undefined) {
      Any.encode(message.templates, writer.uint32(10).fork()).ldelim();
    }
    if (message.data !== undefined && message.data !== undefined) {
      Any.encode(message.data, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.styleUrl);
    writer.uint32(32).int32(message.strategy);
    if (message.options !== undefined && message.options !== undefined) {
      Any.encode(message.options, writer.uint32(42).fork()).ldelim();
    }
    writer.uint32(50).string(message.contentType);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Payload {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePayload } as Payload;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.templates = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.data = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.styleUrl = reader.string();
          break;
        case 4:
          message.strategy = reader.int32() as any;
          break;
        case 5:
          message.options = Any.decode(reader, reader.uint32());
          break;
        case 6:
          message.contentType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const RenderRequest = {
  encode(message: RenderRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    for (const v of message.payload) {
      Payload.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): RenderRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRenderRequest } as RenderRequest;
    message.payload = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.payload.push(Payload.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const RenderResponse = {
  encode(message: RenderResponse, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    for (const v of message.response) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): RenderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRenderResponse } as RenderResponse;
    message.response = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.response.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};
