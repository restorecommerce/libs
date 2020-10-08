/* eslint-disable */
import { Target } from '../../io/restorecommerce/rule';
import { Any } from '../../google/protobuf/any';
import { PolicySetRQ } from '../../io/restorecommerce/policy_set';
import { Writer, Reader } from 'protobufjs/minimal';


export interface Request {
  target?: Target;
  /**
   *  generic data structure which can be provided
   *  to a contextQuery (see io/restorecommerce/rule.proto)
   */
  context?: Context;
}

export interface Context {
  subject?: Any;
  resources: Any[];
  security?: Any;
}

export interface Response {
  decision: Response_Decision;
  obligation: string;
}

export interface ReverseQuery {
  policySets: PolicySetRQ[];
}

const baseRequest: object = {
};

const baseContext: object = {
};

const baseResponse: object = {
  decision: 0,
  obligation: "",
};

const baseReverseQuery: object = {
};

export interface Service {

  IsAllowed(request: Request): Promise<Response>;

  WhatIsAllowed(request: Request): Promise<ReverseQuery>;

}

export enum Response_Decision {
  PERMIT = 0,
  DENY = 1,
  NOT_APPLICABLE = 2,
  INDETERMINATE = 3,
  UNRECOGNIZED = -1,
}

export const Request = {
  encode(message: Request, writer: Writer = Writer.create()): Writer {
    if (message.target !== undefined && message.target !== undefined) {
      Target.encode(message.target, writer.uint32(10).fork()).ldelim();
    }
    if (message.context !== undefined && message.context !== undefined) {
      Context.encode(message.context, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Request {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRequest } as Request;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.target = Target.decode(reader, reader.uint32());
          break;
        case 2:
          message.context = Context.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const Context = {
  encode(message: Context, writer: Writer = Writer.create()): Writer {
    if (message.subject !== undefined && message.subject !== undefined) {
      Any.encode(message.subject, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.resources) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.security !== undefined && message.security !== undefined) {
      Any.encode(message.security, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Context {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseContext } as Context;
    message.resources = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subject = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.resources.push(Any.decode(reader, reader.uint32()));
          break;
        case 3:
          message.security = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const Response = {
  encode(message: Response, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.decision);
    writer.uint32(18).string(message.obligation);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Response {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResponse } as Response;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.decision = reader.int32() as any;
          break;
        case 2:
          message.obligation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const ReverseQuery = {
  encode(message: ReverseQuery, writer: Writer = Writer.create()): Writer {
    for (const v of message.policySets) {
      PolicySetRQ.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ReverseQuery {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReverseQuery } as ReverseQuery;
    message.policySets = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policySets.push(PolicySetRQ.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};
