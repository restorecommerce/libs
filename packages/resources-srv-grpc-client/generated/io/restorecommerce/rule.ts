/* eslint-disable */
import { Attribute } from '../../io/restorecommerce/attribute';
import { Meta } from '../../io/restorecommerce/meta';
import { Subject, ApiKey } from '../../io/restorecommerce/auth';
import { ReadRequest, DeleteRequest } from '../../io/restorecommerce/resource_base';
import { Empty } from '../../google/protobuf/empty';
import { Writer, Reader } from 'protobufjs/minimal';


/**
 * *
 *  Target specified by a Rule or a Request.
 */
export interface Target {
  subject: Attribute[];
  resources: Attribute[];
  action: Attribute[];
}

export interface Rule {
  id: string;
  meta?: Meta;
  name: string;
  description: string;
  target?: Target;
  contextQuery?: ContextQuery;
  /**
   *  JS code
   */
  condition: string;
  effect: Effect;
}

/**
 *  used for `whatIsAllowed` / reverse queries
 */
export interface RuleRQ {
  id: string;
  target?: Target;
  effect: Effect;
  condition: string;
  contextQuery?: ContextQuery;
}

export interface RuleList {
  items: Rule[];
  totalCount: number;
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
}

/**
 *  Query to pull resources from an external service
 *   and append them to the request's context.
 *  The retrieved data can then be passed onto the request's context
 */
export interface ContextQuery {
  filters: ContextQuery_Filter[];
  query: string;
}

export interface ContextQuery_Filter {
  field: string;
  operation: string;
  value: string;
}

const baseTarget: object = {
};

const baseRule: object = {
  id: "",
  name: "",
  description: "",
  condition: "",
  effect: 0,
};

const baseRuleRQ: object = {
  id: "",
  effect: 0,
  condition: "",
};

const baseRuleList: object = {
  totalCount: 0,
};

const baseContextQuery: object = {
  query: "",
};

const baseContextQuery_Filter: object = {
  field: "",
  operation: "",
  value: "",
};

export interface Service {

  Read(request: ReadRequest): Promise<RuleList>;

  Create(request: RuleList): Promise<RuleList>;

  Delete(request: DeleteRequest): Promise<Empty>;

  Update(request: RuleList): Promise<RuleList>;

  Upsert(request: RuleList): Promise<RuleList>;

}

/** *
 Resulting effect from a Policy or Rule.
 */
export enum Effect {
  PERMIT = 0,
  DENY = 1,
  UNRECOGNIZED = -1,
}

export const Target = {
  encode(message: Target, writer: Writer = Writer.create()): Writer {
    for (const v of message.subject) {
      Attribute.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.resources) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.action) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Target {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTarget } as Target;
    message.subject = [];
    message.resources = [];
    message.action = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subject.push(Attribute.decode(reader, reader.uint32()));
          break;
        case 2:
          message.resources.push(Attribute.decode(reader, reader.uint32()));
          break;
        case 3:
          message.action.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const Rule = {
  encode(message: Rule, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    if (message.meta !== undefined && message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.name);
    writer.uint32(34).string(message.description);
    if (message.target !== undefined && message.target !== undefined) {
      Target.encode(message.target, writer.uint32(42).fork()).ldelim();
    }
    if (message.contextQuery !== undefined && message.contextQuery !== undefined) {
      ContextQuery.encode(message.contextQuery, writer.uint32(50).fork()).ldelim();
    }
    writer.uint32(58).string(message.condition);
    writer.uint32(64).int32(message.effect);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Rule {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRule } as Rule;
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
          message.description = reader.string();
          break;
        case 5:
          message.target = Target.decode(reader, reader.uint32());
          break;
        case 6:
          message.contextQuery = ContextQuery.decode(reader, reader.uint32());
          break;
        case 7:
          message.condition = reader.string();
          break;
        case 8:
          message.effect = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const RuleRQ = {
  encode(message: RuleRQ, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    if (message.target !== undefined && message.target !== undefined) {
      Target.encode(message.target, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(24).int32(message.effect);
    writer.uint32(34).string(message.condition);
    if (message.contextQuery !== undefined && message.contextQuery !== undefined) {
      ContextQuery.encode(message.contextQuery, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): RuleRQ {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRuleRQ } as RuleRQ;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.target = Target.decode(reader, reader.uint32());
          break;
        case 3:
          message.effect = reader.int32() as any;
          break;
        case 4:
          message.condition = reader.string();
          break;
        case 5:
          message.contextQuery = ContextQuery.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const RuleList = {
  encode(message: RuleList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      Rule.encode(v!, writer.uint32(10).fork()).ldelim();
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
  decode(input: Uint8Array | Reader, length?: number): RuleList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRuleList } as RuleList;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Rule.decode(reader, reader.uint32()));
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

export const ContextQuery = {
  encode(message: ContextQuery, writer: Writer = Writer.create()): Writer {
    for (const v of message.filters) {
      ContextQuery_Filter.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(18).string(message.query);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ContextQuery {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseContextQuery } as ContextQuery;
    message.filters = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filters.push(ContextQuery_Filter.decode(reader, reader.uint32()));
          break;
        case 2:
          message.query = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const ContextQuery_Filter = {
  encode(message: ContextQuery_Filter, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.field);
    writer.uint32(18).string(message.operation);
    writer.uint32(26).string(message.value);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ContextQuery_Filter {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseContextQuery_Filter } as ContextQuery_Filter;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.field = reader.string();
          break;
        case 2:
          message.operation = reader.string();
          break;
        case 3:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};
