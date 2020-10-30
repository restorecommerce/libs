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
  evaluationCacheable: boolean;
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
  evaluationCacheable: boolean;
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
  evaluationCacheable: false,
};

const baseRuleRQ: object = {
  id: "",
  effect: 0,
  condition: "",
  evaluationCacheable: false,
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

export const protobufPackage = 'io.restorecommerce.rule'

/** *
 Resulting effect from a Policy or Rule.
 */
export enum Effect {
  PERMIT = 0,
  DENY = 1,
  UNRECOGNIZED = -1,
}

export function effectFromJSON(object: any): Effect {
  switch (object) {
    case 0:
    case "PERMIT":
      return Effect.PERMIT;
    case 1:
    case "DENY":
      return Effect.DENY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Effect.UNRECOGNIZED;
  }
}

export function effectToJSON(object: Effect): string {
  switch (object) {
    case Effect.PERMIT:
      return "PERMIT";
    case Effect.DENY:
      return "DENY";
    default:
      return "UNKNOWN";
  }
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
  fromJSON(object: any): Target {
    const message = { ...baseTarget } as Target;
    message.subject = [];
    message.resources = [];
    message.action = [];
    if (object.subject !== undefined && object.subject !== null) {
      for (const e of object.subject) {
        message.subject.push(Attribute.fromJSON(e));
      }
    }
    if (object.resources !== undefined && object.resources !== null) {
      for (const e of object.resources) {
        message.resources.push(Attribute.fromJSON(e));
      }
    }
    if (object.action !== undefined && object.action !== null) {
      for (const e of object.action) {
        message.action.push(Attribute.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Target>): Target {
    const message = { ...baseTarget } as Target;
    message.subject = [];
    message.resources = [];
    message.action = [];
    if (object.subject !== undefined && object.subject !== null) {
      for (const e of object.subject) {
        message.subject.push(Attribute.fromPartial(e));
      }
    }
    if (object.resources !== undefined && object.resources !== null) {
      for (const e of object.resources) {
        message.resources.push(Attribute.fromPartial(e));
      }
    }
    if (object.action !== undefined && object.action !== null) {
      for (const e of object.action) {
        message.action.push(Attribute.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: Target): unknown {
    const obj: any = {};
    if (message.subject) {
      obj.subject = message.subject.map(e => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.subject = [];
    }
    if (message.resources) {
      obj.resources = message.resources.map(e => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.resources = [];
    }
    if (message.action) {
      obj.action = message.action.map(e => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.action = [];
    }
    return obj;
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
    writer.uint32(72).bool(message.evaluationCacheable);
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
        case 9:
          message.evaluationCacheable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Rule {
    const message = { ...baseRule } as Rule;
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
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.target !== undefined && object.target !== null) {
      message.target = Target.fromJSON(object.target);
    } else {
      message.target = undefined;
    }
    if (object.contextQuery !== undefined && object.contextQuery !== null) {
      message.contextQuery = ContextQuery.fromJSON(object.contextQuery);
    } else {
      message.contextQuery = undefined;
    }
    if (object.condition !== undefined && object.condition !== null) {
      message.condition = String(object.condition);
    } else {
      message.condition = "";
    }
    if (object.effect !== undefined && object.effect !== null) {
      message.effect = effectFromJSON(object.effect);
    } else {
      message.effect = 0;
    }
    if (object.evaluationCacheable !== undefined && object.evaluationCacheable !== null) {
      message.evaluationCacheable = Boolean(object.evaluationCacheable);
    } else {
      message.evaluationCacheable = false;
    }
    return message;
  },
  fromPartial(object: DeepPartial<Rule>): Rule {
    const message = { ...baseRule } as Rule;
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
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.target !== undefined && object.target !== null) {
      message.target = Target.fromPartial(object.target);
    } else {
      message.target = undefined;
    }
    if (object.contextQuery !== undefined && object.contextQuery !== null) {
      message.contextQuery = ContextQuery.fromPartial(object.contextQuery);
    } else {
      message.contextQuery = undefined;
    }
    if (object.condition !== undefined && object.condition !== null) {
      message.condition = object.condition;
    } else {
      message.condition = "";
    }
    if (object.effect !== undefined && object.effect !== null) {
      message.effect = object.effect;
    } else {
      message.effect = 0;
    }
    if (object.evaluationCacheable !== undefined && object.evaluationCacheable !== null) {
      message.evaluationCacheable = object.evaluationCacheable;
    } else {
      message.evaluationCacheable = false;
    }
    return message;
  },
  toJSON(message: Rule): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.target !== undefined && (obj.target = message.target ? Target.toJSON(message.target) : undefined);
    message.contextQuery !== undefined && (obj.contextQuery = message.contextQuery ? ContextQuery.toJSON(message.contextQuery) : undefined);
    message.condition !== undefined && (obj.condition = message.condition);
    message.effect !== undefined && (obj.effect = effectToJSON(message.effect));
    message.evaluationCacheable !== undefined && (obj.evaluationCacheable = message.evaluationCacheable);
    return obj;
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
    writer.uint32(48).bool(message.evaluationCacheable);
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
        case 6:
          message.evaluationCacheable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RuleRQ {
    const message = { ...baseRuleRQ } as RuleRQ;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.target !== undefined && object.target !== null) {
      message.target = Target.fromJSON(object.target);
    } else {
      message.target = undefined;
    }
    if (object.effect !== undefined && object.effect !== null) {
      message.effect = effectFromJSON(object.effect);
    } else {
      message.effect = 0;
    }
    if (object.condition !== undefined && object.condition !== null) {
      message.condition = String(object.condition);
    } else {
      message.condition = "";
    }
    if (object.contextQuery !== undefined && object.contextQuery !== null) {
      message.contextQuery = ContextQuery.fromJSON(object.contextQuery);
    } else {
      message.contextQuery = undefined;
    }
    if (object.evaluationCacheable !== undefined && object.evaluationCacheable !== null) {
      message.evaluationCacheable = Boolean(object.evaluationCacheable);
    } else {
      message.evaluationCacheable = false;
    }
    return message;
  },
  fromPartial(object: DeepPartial<RuleRQ>): RuleRQ {
    const message = { ...baseRuleRQ } as RuleRQ;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.target !== undefined && object.target !== null) {
      message.target = Target.fromPartial(object.target);
    } else {
      message.target = undefined;
    }
    if (object.effect !== undefined && object.effect !== null) {
      message.effect = object.effect;
    } else {
      message.effect = 0;
    }
    if (object.condition !== undefined && object.condition !== null) {
      message.condition = object.condition;
    } else {
      message.condition = "";
    }
    if (object.contextQuery !== undefined && object.contextQuery !== null) {
      message.contextQuery = ContextQuery.fromPartial(object.contextQuery);
    } else {
      message.contextQuery = undefined;
    }
    if (object.evaluationCacheable !== undefined && object.evaluationCacheable !== null) {
      message.evaluationCacheable = object.evaluationCacheable;
    } else {
      message.evaluationCacheable = false;
    }
    return message;
  },
  toJSON(message: RuleRQ): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.target !== undefined && (obj.target = message.target ? Target.toJSON(message.target) : undefined);
    message.effect !== undefined && (obj.effect = effectToJSON(message.effect));
    message.condition !== undefined && (obj.condition = message.condition);
    message.contextQuery !== undefined && (obj.contextQuery = message.contextQuery ? ContextQuery.toJSON(message.contextQuery) : undefined);
    message.evaluationCacheable !== undefined && (obj.evaluationCacheable = message.evaluationCacheable);
    return obj;
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
  fromJSON(object: any): RuleList {
    const message = { ...baseRuleList } as RuleList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Rule.fromJSON(e));
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
  fromPartial(object: DeepPartial<RuleList>): RuleList {
    const message = { ...baseRuleList } as RuleList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Rule.fromPartial(e));
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
  toJSON(message: RuleList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map(e => e ? Rule.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    message.apiKey !== undefined && (obj.apiKey = message.apiKey ? ApiKey.toJSON(message.apiKey) : undefined);
    return obj;
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
  fromJSON(object: any): ContextQuery {
    const message = { ...baseContextQuery } as ContextQuery;
    message.filters = [];
    if (object.filters !== undefined && object.filters !== null) {
      for (const e of object.filters) {
        message.filters.push(ContextQuery_Filter.fromJSON(e));
      }
    }
    if (object.query !== undefined && object.query !== null) {
      message.query = String(object.query);
    } else {
      message.query = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<ContextQuery>): ContextQuery {
    const message = { ...baseContextQuery } as ContextQuery;
    message.filters = [];
    if (object.filters !== undefined && object.filters !== null) {
      for (const e of object.filters) {
        message.filters.push(ContextQuery_Filter.fromPartial(e));
      }
    }
    if (object.query !== undefined && object.query !== null) {
      message.query = object.query;
    } else {
      message.query = "";
    }
    return message;
  },
  toJSON(message: ContextQuery): unknown {
    const obj: any = {};
    if (message.filters) {
      obj.filters = message.filters.map(e => e ? ContextQuery_Filter.toJSON(e) : undefined);
    } else {
      obj.filters = [];
    }
    message.query !== undefined && (obj.query = message.query);
    return obj;
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
  fromJSON(object: any): ContextQuery_Filter {
    const message = { ...baseContextQuery_Filter } as ContextQuery_Filter;
    if (object.field !== undefined && object.field !== null) {
      message.field = String(object.field);
    } else {
      message.field = "";
    }
    if (object.operation !== undefined && object.operation !== null) {
      message.operation = String(object.operation);
    } else {
      message.operation = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<ContextQuery_Filter>): ContextQuery_Filter {
    const message = { ...baseContextQuery_Filter } as ContextQuery_Filter;
    if (object.field !== undefined && object.field !== null) {
      message.field = object.field;
    } else {
      message.field = "";
    }
    if (object.operation !== undefined && object.operation !== null) {
      message.operation = object.operation;
    } else {
      message.operation = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
  toJSON(message: ContextQuery_Filter): unknown {
    const obj: any = {};
    message.field !== undefined && (obj.field = message.field);
    message.operation !== undefined && (obj.operation = message.operation);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
};

export const metaTarget: { [key in keyof Target]: MetaI | string } = {
  subject: {meta:'array', type:{meta:'object', type:'.io.restorecommerce.attribute.Attribute', name:'Attribute'} as MetaO} as MetaA,
  resources: {meta:'array', type:{meta:'object', type:'.io.restorecommerce.attribute.Attribute', name:'Attribute'} as MetaO} as MetaA,
  action: {meta:'array', type:{meta:'object', type:'.io.restorecommerce.attribute.Attribute', name:'Attribute'} as MetaO} as MetaA,
}
export const metaRule: { [key in keyof Rule]: MetaI | string } = {
  id: 'string',
  meta: {meta:'object', type:'.io.restorecommerce.meta.Meta', name:'Meta'} as MetaO,
  name: 'string',
  description: 'string',
  target: {meta:'object', type:'.io.restorecommerce.rule.Target', name:'Target'} as MetaO,
  contextQuery: {meta:'object', type:'.io.restorecommerce.rule.ContextQuery', name:'ContextQuery'} as MetaO,
  condition: 'string',
  effect: {meta:'object', type:'.io.restorecommerce.rule.Effect', name:'Effect'} as MetaO,
  evaluationCacheable: 'boolean',
}
export const metaRuleRQ: { [key in keyof RuleRQ]: MetaI | string } = {
  id: 'string',
  target: {meta:'object', type:'.io.restorecommerce.rule.Target', name:'Target'} as MetaO,
  effect: {meta:'object', type:'.io.restorecommerce.rule.Effect', name:'Effect'} as MetaO,
  condition: 'string',
  contextQuery: {meta:'object', type:'.io.restorecommerce.rule.ContextQuery', name:'ContextQuery'} as MetaO,
  evaluationCacheable: 'boolean',
}
export const metaRuleList: { [key in keyof RuleList]: MetaI | string } = {
  items: {meta:'array', type:{meta:'object', type:'.io.restorecommerce.rule.Rule', name:'Rule'} as MetaO} as MetaA,
  totalCount: 'number',
  subject: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.Subject', name:'Subject'} as MetaO]} as MetaU,
  apiKey: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.ApiKey', name:'ApiKey'} as MetaO]} as MetaU,
}
export const metaContextQuery: { [key in keyof ContextQuery]: MetaI | string } = {
  filters: {meta:'array', type:{meta:'object', type:'.io.restorecommerce.rule.ContextQuery.Filter', name:'ContextQuery_Filter'} as MetaO} as MetaA,
  query: 'string',
}
export const metaContextQuery_Filter: { [key in keyof ContextQuery_Filter]: MetaI | string } = {
  field: 'string',
  operation: 'string',
  value: 'string',
}
export const metaService: { [key in keyof Service]: MetaS<any, any> } = {
  Read: {request: '.io.restorecommerce.rule.RuleList', response: '.io.restorecommerce.rule.RuleList', encodeRequest: ReadRequest.encode, decodeResponse: RuleList.decode} as MetaS<ReadRequest, RuleList>,
  Create: {request: '.io.restorecommerce.rule.RuleList', response: '.io.restorecommerce.rule.RuleList', encodeRequest: RuleList.encode, decodeResponse: RuleList.decode} as MetaS<RuleList, RuleList>,
  Delete: {request: '.google.protobuf.Empty', response: '.google.protobuf.Empty', encodeRequest: DeleteRequest.encode, decodeResponse: Empty.decode} as MetaS<DeleteRequest, Empty>,
  Update: {request: '.io.restorecommerce.rule.RuleList', response: '.io.restorecommerce.rule.RuleList', encodeRequest: RuleList.encode, decodeResponse: RuleList.decode} as MetaS<RuleList, RuleList>,
  Upsert: {request: '.io.restorecommerce.rule.RuleList', response: '.io.restorecommerce.rule.RuleList', encodeRequest: RuleList.encode, decodeResponse: RuleList.decode} as MetaS<RuleList, RuleList>,
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