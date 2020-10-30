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
  evaluationCacheable: boolean;
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
  evaluationCacheable: false,
};

const baseReverseQuery: object = {
};

export interface Service {

  IsAllowed(request: Request): Promise<Response>;

  WhatIsAllowed(request: Request): Promise<ReverseQuery>;

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

export const protobufPackage = 'io.restorecommerce.access_control'

export enum Response_Decision {
  PERMIT = 0,
  DENY = 1,
  NOT_APPLICABLE = 2,
  INDETERMINATE = 3,
  UNRECOGNIZED = -1,
}

export function response_DecisionFromJSON(object: any): Response_Decision {
  switch (object) {
    case 0:
    case "PERMIT":
      return Response_Decision.PERMIT;
    case 1:
    case "DENY":
      return Response_Decision.DENY;
    case 2:
    case "NOT_APPLICABLE":
      return Response_Decision.NOT_APPLICABLE;
    case 3:
    case "INDETERMINATE":
      return Response_Decision.INDETERMINATE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Response_Decision.UNRECOGNIZED;
  }
}

export function response_DecisionToJSON(object: Response_Decision): string {
  switch (object) {
    case Response_Decision.PERMIT:
      return "PERMIT";
    case Response_Decision.DENY:
      return "DENY";
    case Response_Decision.NOT_APPLICABLE:
      return "NOT_APPLICABLE";
    case Response_Decision.INDETERMINATE:
      return "INDETERMINATE";
    default:
      return "UNKNOWN";
  }
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
  fromJSON(object: any): Request {
    const message = { ...baseRequest } as Request;
    if (object.target !== undefined && object.target !== null) {
      message.target = Target.fromJSON(object.target);
    } else {
      message.target = undefined;
    }
    if (object.context !== undefined && object.context !== null) {
      message.context = Context.fromJSON(object.context);
    } else {
      message.context = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<Request>): Request {
    const message = { ...baseRequest } as Request;
    if (object.target !== undefined && object.target !== null) {
      message.target = Target.fromPartial(object.target);
    } else {
      message.target = undefined;
    }
    if (object.context !== undefined && object.context !== null) {
      message.context = Context.fromPartial(object.context);
    } else {
      message.context = undefined;
    }
    return message;
  },
  toJSON(message: Request): unknown {
    const obj: any = {};
    message.target !== undefined && (obj.target = message.target ? Target.toJSON(message.target) : undefined);
    message.context !== undefined && (obj.context = message.context ? Context.toJSON(message.context) : undefined);
    return obj;
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
  fromJSON(object: any): Context {
    const message = { ...baseContext } as Context;
    message.resources = [];
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Any.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    if (object.resources !== undefined && object.resources !== null) {
      for (const e of object.resources) {
        message.resources.push(Any.fromJSON(e));
      }
    }
    if (object.security !== undefined && object.security !== null) {
      message.security = Any.fromJSON(object.security);
    } else {
      message.security = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<Context>): Context {
    const message = { ...baseContext } as Context;
    message.resources = [];
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Any.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    if (object.resources !== undefined && object.resources !== null) {
      for (const e of object.resources) {
        message.resources.push(Any.fromPartial(e));
      }
    }
    if (object.security !== undefined && object.security !== null) {
      message.security = Any.fromPartial(object.security);
    } else {
      message.security = undefined;
    }
    return message;
  },
  toJSON(message: Context): unknown {
    const obj: any = {};
    message.subject !== undefined && (obj.subject = message.subject ? Any.toJSON(message.subject) : undefined);
    if (message.resources) {
      obj.resources = message.resources.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.resources = [];
    }
    message.security !== undefined && (obj.security = message.security ? Any.toJSON(message.security) : undefined);
    return obj;
  },
};

export const Response = {
  encode(message: Response, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.decision);
    writer.uint32(18).string(message.obligation);
    writer.uint32(24).bool(message.evaluationCacheable);
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
        case 3:
          message.evaluationCacheable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Response {
    const message = { ...baseResponse } as Response;
    if (object.decision !== undefined && object.decision !== null) {
      message.decision = response_DecisionFromJSON(object.decision);
    } else {
      message.decision = 0;
    }
    if (object.obligation !== undefined && object.obligation !== null) {
      message.obligation = String(object.obligation);
    } else {
      message.obligation = "";
    }
    if (object.evaluationCacheable !== undefined && object.evaluationCacheable !== null) {
      message.evaluationCacheable = Boolean(object.evaluationCacheable);
    } else {
      message.evaluationCacheable = false;
    }
    return message;
  },
  fromPartial(object: DeepPartial<Response>): Response {
    const message = { ...baseResponse } as Response;
    if (object.decision !== undefined && object.decision !== null) {
      message.decision = object.decision;
    } else {
      message.decision = 0;
    }
    if (object.obligation !== undefined && object.obligation !== null) {
      message.obligation = object.obligation;
    } else {
      message.obligation = "";
    }
    if (object.evaluationCacheable !== undefined && object.evaluationCacheable !== null) {
      message.evaluationCacheable = object.evaluationCacheable;
    } else {
      message.evaluationCacheable = false;
    }
    return message;
  },
  toJSON(message: Response): unknown {
    const obj: any = {};
    message.decision !== undefined && (obj.decision = response_DecisionToJSON(message.decision));
    message.obligation !== undefined && (obj.obligation = message.obligation);
    message.evaluationCacheable !== undefined && (obj.evaluationCacheable = message.evaluationCacheable);
    return obj;
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
  fromJSON(object: any): ReverseQuery {
    const message = { ...baseReverseQuery } as ReverseQuery;
    message.policySets = [];
    if (object.policySets !== undefined && object.policySets !== null) {
      for (const e of object.policySets) {
        message.policySets.push(PolicySetRQ.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ReverseQuery>): ReverseQuery {
    const message = { ...baseReverseQuery } as ReverseQuery;
    message.policySets = [];
    if (object.policySets !== undefined && object.policySets !== null) {
      for (const e of object.policySets) {
        message.policySets.push(PolicySetRQ.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: ReverseQuery): unknown {
    const obj: any = {};
    if (message.policySets) {
      obj.policySets = message.policySets.map(e => e ? PolicySetRQ.toJSON(e) : undefined);
    } else {
      obj.policySets = [];
    }
    return obj;
  },
};

export const metaRequest: { [key in keyof Request]: MetaI | string } = {
  target: {meta:'object', type:'.io.restorecommerce.rule.Target', name:'Target'} as MetaO,
  context: {meta:'object', type:'.io.restorecommerce.access_control.Context', name:'Context'} as MetaO,
}
export const metaContext: { [key in keyof Context]: MetaI | string } = {
  subject: {meta:'object', type:'.google.protobuf.Any', name:'Any'} as MetaO,
  resources: {meta:'array', type:{meta:'object', type:'.google.protobuf.Any', name:'Any'} as MetaO} as MetaA,
  security: {meta:'object', type:'.google.protobuf.Any', name:'Any'} as MetaO,
}
export const metaResponse: { [key in keyof Response]: MetaI | string } = {
  decision: {meta:'object', type:'.io.restorecommerce.access_control.Response.Decision', name:'Response_Decision'} as MetaO,
  obligation: 'string',
  evaluationCacheable: 'boolean',
}
export const metaReverseQuery: { [key in keyof ReverseQuery]: MetaI | string } = {
  policySets: {meta:'array', type:{meta:'object', type:'.io.restorecommerce.policy_set.PolicySetRQ', name:'PolicySetRQ'} as MetaO} as MetaA,
}
export const metaService: { [key in keyof Service]: MetaS<any, any> } = {
  IsAllowed: {request: '.io.restorecommerce.access_control.Response', response: '.io.restorecommerce.access_control.Response', encodeRequest: Request.encode, decodeResponse: Response.decode} as MetaS<Request, Response>,
  WhatIsAllowed: {request: '.io.restorecommerce.access_control.ReverseQuery', response: '.io.restorecommerce.access_control.ReverseQuery', encodeRequest: Request.encode, decodeResponse: ReverseQuery.decode} as MetaS<Request, ReverseQuery>,
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