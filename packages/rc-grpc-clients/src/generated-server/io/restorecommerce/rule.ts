/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { Attribute, protoMetadata as protoMetadata4 } from "./attribute";
import { protoMetadata as protoMetadata3, Subject } from "./auth";
import { FilterOp, protoMetadata as protoMetadata6 } from "./filter";
import { Meta, protoMetadata as protoMetadata2 } from "./meta";
import { protoMetadata as protoMetadata7 } from "./options";
import { DeleteRequest, DeleteResponse, protoMetadata as protoMetadata1, ReadRequest } from "./resource_base";
import { OperationStatus, protoMetadata as protoMetadata5, Status } from "./status";

export const protobufPackage = "io.restorecommerce.rule";

/** Resulting effect from a Policy or Rule. */
export enum Effect {
  PERMIT = "PERMIT",
  DENY = "DENY",
  UNRECOGNIZED = "UNRECOGNIZED",
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
    case Effect.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function effectToNumber(object: Effect): number {
  switch (object) {
    case Effect.PERMIT:
      return 0;
    case Effect.DENY:
      return 1;
    case Effect.UNRECOGNIZED:
    default:
      return -1;
  }
}

/** Target specified by a Rule or a Request. */
export interface Target {
  subjects: Attribute[];
  resources: Attribute[];
  actions: Attribute[];
}

export interface Rule {
  id?: string | undefined;
  meta?: Meta | undefined;
  name?: string | undefined;
  description?: string | undefined;
  target?: Target | undefined;
  context_query?:
    | ContextQuery
    | undefined;
  /** JS code */
  condition?: string | undefined;
  effect?: Effect | undefined;
  evaluation_cacheable?: boolean | undefined;
}

/** used for `whatIsAllowed` / reverse queries */
export interface RuleRQ {
  id?: string | undefined;
  target?: Target | undefined;
  effect?: Effect | undefined;
  condition?: string | undefined;
  context_query?: ContextQuery | undefined;
  evaluation_cacheable?: boolean | undefined;
}

export interface RuleList {
  items: Rule[];
  total_count?: number | undefined;
  subject?: Subject;
}

export interface RuleListResponse {
  items: RuleResponse[];
  total_count: number;
  operation_status?: OperationStatus;
}

export interface RuleResponse {
  payload?: Rule;
  status?: Status;
}

/**
 * Query to pull resources from an external service
 *  and append them to the request's context.
 * The retrieved data can then be passed onto the request's context
 */
export interface ContextQuery {
  filters: FilterOp[];
  query?: string | undefined;
}

function createBaseTarget(): Target {
  return { subjects: [], resources: [], actions: [] };
}

export const Target = {
  encode(message: Target, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.subjects) {
      Attribute.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.resources) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.actions) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Target {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTarget();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subjects.push(Attribute.decode(reader, reader.uint32()));
          break;
        case 2:
          message.resources.push(Attribute.decode(reader, reader.uint32()));
          break;
        case 3:
          message.actions.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Target {
    return {
      subjects: Array.isArray(object?.subjects) ? object.subjects.map((e: any) => Attribute.fromJSON(e)) : [],
      resources: Array.isArray(object?.resources) ? object.resources.map((e: any) => Attribute.fromJSON(e)) : [],
      actions: Array.isArray(object?.actions) ? object.actions.map((e: any) => Attribute.fromJSON(e)) : [],
    };
  },

  toJSON(message: Target): unknown {
    const obj: any = {};
    if (message.subjects) {
      obj.subjects = message.subjects.map((e) => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.subjects = [];
    }
    if (message.resources) {
      obj.resources = message.resources.map((e) => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.resources = [];
    }
    if (message.actions) {
      obj.actions = message.actions.map((e) => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.actions = [];
    }
    return obj;
  },

  create(base?: DeepPartial<Target>): Target {
    return Target.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Target>): Target {
    const message = createBaseTarget();
    message.subjects = object.subjects?.map((e) => Attribute.fromPartial(e)) || [];
    message.resources = object.resources?.map((e) => Attribute.fromPartial(e)) || [];
    message.actions = object.actions?.map((e) => Attribute.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRule(): Rule {
  return {
    id: undefined,
    meta: undefined,
    name: undefined,
    description: undefined,
    target: undefined,
    context_query: undefined,
    condition: undefined,
    effect: undefined,
    evaluation_cacheable: undefined,
  };
}

export const Rule = {
  encode(message: Rule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    if (message.name !== undefined) {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(34).string(message.description);
    }
    if (message.target !== undefined) {
      Target.encode(message.target, writer.uint32(42).fork()).ldelim();
    }
    if (message.context_query !== undefined) {
      ContextQuery.encode(message.context_query, writer.uint32(50).fork()).ldelim();
    }
    if (message.condition !== undefined) {
      writer.uint32(58).string(message.condition);
    }
    if (message.effect !== undefined) {
      writer.uint32(64).int32(effectToNumber(message.effect));
    }
    if (message.evaluation_cacheable !== undefined) {
      writer.uint32(72).bool(message.evaluation_cacheable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Rule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRule();
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
          message.context_query = ContextQuery.decode(reader, reader.uint32());
          break;
        case 7:
          message.condition = reader.string();
          break;
        case 8:
          message.effect = effectFromJSON(reader.int32());
          break;
        case 9:
          message.evaluation_cacheable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Rule {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      description: isSet(object.description) ? String(object.description) : undefined,
      target: isSet(object.target) ? Target.fromJSON(object.target) : undefined,
      context_query: isSet(object.context_query) ? ContextQuery.fromJSON(object.context_query) : undefined,
      condition: isSet(object.condition) ? String(object.condition) : undefined,
      effect: isSet(object.effect) ? effectFromJSON(object.effect) : undefined,
      evaluation_cacheable: isSet(object.evaluation_cacheable) ? Boolean(object.evaluation_cacheable) : undefined,
    };
  },

  toJSON(message: Rule): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.target !== undefined && (obj.target = message.target ? Target.toJSON(message.target) : undefined);
    message.context_query !== undefined &&
      (obj.context_query = message.context_query ? ContextQuery.toJSON(message.context_query) : undefined);
    message.condition !== undefined && (obj.condition = message.condition);
    message.effect !== undefined &&
      (obj.effect = message.effect !== undefined ? effectToJSON(message.effect) : undefined);
    message.evaluation_cacheable !== undefined && (obj.evaluation_cacheable = message.evaluation_cacheable);
    return obj;
  },

  create(base?: DeepPartial<Rule>): Rule {
    return Rule.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Rule>): Rule {
    const message = createBaseRule();
    message.id = object.id ?? undefined;
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    message.name = object.name ?? undefined;
    message.description = object.description ?? undefined;
    message.target = (object.target !== undefined && object.target !== null)
      ? Target.fromPartial(object.target)
      : undefined;
    message.context_query = (object.context_query !== undefined && object.context_query !== null)
      ? ContextQuery.fromPartial(object.context_query)
      : undefined;
    message.condition = object.condition ?? undefined;
    message.effect = object.effect ?? undefined;
    message.evaluation_cacheable = object.evaluation_cacheable ?? undefined;
    return message;
  },
};

function createBaseRuleRQ(): RuleRQ {
  return {
    id: undefined,
    target: undefined,
    effect: undefined,
    condition: undefined,
    context_query: undefined,
    evaluation_cacheable: undefined,
  };
}

export const RuleRQ = {
  encode(message: RuleRQ, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.target !== undefined) {
      Target.encode(message.target, writer.uint32(18).fork()).ldelim();
    }
    if (message.effect !== undefined) {
      writer.uint32(24).int32(effectToNumber(message.effect));
    }
    if (message.condition !== undefined) {
      writer.uint32(34).string(message.condition);
    }
    if (message.context_query !== undefined) {
      ContextQuery.encode(message.context_query, writer.uint32(42).fork()).ldelim();
    }
    if (message.evaluation_cacheable !== undefined) {
      writer.uint32(48).bool(message.evaluation_cacheable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RuleRQ {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRuleRQ();
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
          message.effect = effectFromJSON(reader.int32());
          break;
        case 4:
          message.condition = reader.string();
          break;
        case 5:
          message.context_query = ContextQuery.decode(reader, reader.uint32());
          break;
        case 6:
          message.evaluation_cacheable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RuleRQ {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      target: isSet(object.target) ? Target.fromJSON(object.target) : undefined,
      effect: isSet(object.effect) ? effectFromJSON(object.effect) : undefined,
      condition: isSet(object.condition) ? String(object.condition) : undefined,
      context_query: isSet(object.context_query) ? ContextQuery.fromJSON(object.context_query) : undefined,
      evaluation_cacheable: isSet(object.evaluation_cacheable) ? Boolean(object.evaluation_cacheable) : undefined,
    };
  },

  toJSON(message: RuleRQ): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.target !== undefined && (obj.target = message.target ? Target.toJSON(message.target) : undefined);
    message.effect !== undefined &&
      (obj.effect = message.effect !== undefined ? effectToJSON(message.effect) : undefined);
    message.condition !== undefined && (obj.condition = message.condition);
    message.context_query !== undefined &&
      (obj.context_query = message.context_query ? ContextQuery.toJSON(message.context_query) : undefined);
    message.evaluation_cacheable !== undefined && (obj.evaluation_cacheable = message.evaluation_cacheable);
    return obj;
  },

  create(base?: DeepPartial<RuleRQ>): RuleRQ {
    return RuleRQ.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RuleRQ>): RuleRQ {
    const message = createBaseRuleRQ();
    message.id = object.id ?? undefined;
    message.target = (object.target !== undefined && object.target !== null)
      ? Target.fromPartial(object.target)
      : undefined;
    message.effect = object.effect ?? undefined;
    message.condition = object.condition ?? undefined;
    message.context_query = (object.context_query !== undefined && object.context_query !== null)
      ? ContextQuery.fromPartial(object.context_query)
      : undefined;
    message.evaluation_cacheable = object.evaluation_cacheable ?? undefined;
    return message;
  },
};

function createBaseRuleList(): RuleList {
  return { items: [], total_count: undefined, subject: undefined };
}

export const RuleList = {
  encode(message: RuleList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      Rule.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== undefined) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RuleList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRuleList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Rule.decode(reader, reader.uint32()));
          break;
        case 2:
          message.total_count = reader.uint32();
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

  fromJSON(object: any): RuleList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => Rule.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: RuleList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? Rule.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<RuleList>): RuleList {
    return RuleList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RuleList>): RuleList {
    const message = createBaseRuleList();
    message.items = object.items?.map((e) => Rule.fromPartial(e)) || [];
    message.total_count = object.total_count ?? undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseRuleListResponse(): RuleListResponse {
  return { items: [], total_count: 0, operation_status: undefined };
}

export const RuleListResponse = {
  encode(message: RuleListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      RuleResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(message.operation_status, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RuleListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRuleListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(RuleResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.total_count = reader.uint32();
          break;
        case 3:
          message.operation_status = OperationStatus.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RuleListResponse {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => RuleResponse.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      operation_status: isSet(object.operation_status) ? OperationStatus.fromJSON(object.operation_status) : undefined,
    };
  },

  toJSON(message: RuleListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? RuleResponse.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status ? OperationStatus.toJSON(message.operation_status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<RuleListResponse>): RuleListResponse {
    return RuleListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RuleListResponse>): RuleListResponse {
    const message = createBaseRuleListResponse();
    message.items = object.items?.map((e) => RuleResponse.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.operation_status = (object.operation_status !== undefined && object.operation_status !== null)
      ? OperationStatus.fromPartial(object.operation_status)
      : undefined;
    return message;
  },
};

function createBaseRuleResponse(): RuleResponse {
  return { payload: undefined, status: undefined };
}

export const RuleResponse = {
  encode(message: RuleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      Rule.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RuleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRuleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = Rule.decode(reader, reader.uint32());
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

  fromJSON(object: any): RuleResponse {
    return {
      payload: isSet(object.payload) ? Rule.fromJSON(object.payload) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: RuleResponse): unknown {
    const obj: any = {};
    message.payload !== undefined && (obj.payload = message.payload ? Rule.toJSON(message.payload) : undefined);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<RuleResponse>): RuleResponse {
    return RuleResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RuleResponse>): RuleResponse {
    const message = createBaseRuleResponse();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? Rule.fromPartial(object.payload)
      : undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBaseContextQuery(): ContextQuery {
  return { filters: [], query: undefined };
}

export const ContextQuery = {
  encode(message: ContextQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.filters) {
      FilterOp.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.query !== undefined) {
      writer.uint32(18).string(message.query);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContextQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContextQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filters.push(FilterOp.decode(reader, reader.uint32()));
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
    return {
      filters: Array.isArray(object?.filters) ? object.filters.map((e: any) => FilterOp.fromJSON(e)) : [],
      query: isSet(object.query) ? String(object.query) : undefined,
    };
  },

  toJSON(message: ContextQuery): unknown {
    const obj: any = {};
    if (message.filters) {
      obj.filters = message.filters.map((e) => e ? FilterOp.toJSON(e) : undefined);
    } else {
      obj.filters = [];
    }
    message.query !== undefined && (obj.query = message.query);
    return obj;
  },

  create(base?: DeepPartial<ContextQuery>): ContextQuery {
    return ContextQuery.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ContextQuery>): ContextQuery {
    const message = createBaseContextQuery();
    message.filters = object.filters?.map((e) => FilterOp.fromPartial(e)) || [];
    message.query = object.query ?? undefined;
    return message;
  },
};

export type RuleServiceDefinition = typeof RuleServiceDefinition;
export const RuleServiceDefinition = {
  name: "RuleService",
  fullName: "io.restorecommerce.rule.RuleService",
  methods: {
    read: {
      name: "Read",
      requestType: ReadRequest,
      requestStream: false,
      responseType: RuleListResponse,
      responseStream: false,
      options: {},
    },
    create: {
      name: "Create",
      requestType: RuleList,
      requestStream: false,
      responseType: RuleListResponse,
      responseStream: false,
      options: {},
    },
    delete: {
      name: "Delete",
      requestType: DeleteRequest,
      requestStream: false,
      responseType: DeleteResponse,
      responseStream: false,
      options: {},
    },
    update: {
      name: "Update",
      requestType: RuleList,
      requestStream: false,
      responseType: RuleListResponse,
      responseStream: false,
      options: {},
    },
    upsert: {
      name: "Upsert",
      requestType: RuleList,
      requestStream: false,
      responseType: RuleListResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface RuleServiceImplementation<CallContextExt = {}> {
  read(request: ReadRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RuleListResponse>>;
  create(request: RuleList, context: CallContext & CallContextExt): Promise<DeepPartial<RuleListResponse>>;
  delete(request: DeleteRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteResponse>>;
  update(request: RuleList, context: CallContext & CallContextExt): Promise<DeepPartial<RuleListResponse>>;
  upsert(request: RuleList, context: CallContext & CallContextExt): Promise<DeepPartial<RuleListResponse>>;
}

export interface RuleServiceClient<CallOptionsExt = {}> {
  read(request: DeepPartial<ReadRequest>, options?: CallOptions & CallOptionsExt): Promise<RuleListResponse>;
  create(request: DeepPartial<RuleList>, options?: CallOptions & CallOptionsExt): Promise<RuleListResponse>;
  delete(request: DeepPartial<DeleteRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteResponse>;
  update(request: DeepPartial<RuleList>, options?: CallOptions & CallOptionsExt): Promise<RuleListResponse>;
  upsert(request: DeepPartial<RuleList>, options?: CallOptions & CallOptionsExt): Promise<RuleListResponse>;
}

type ProtoMetaMessageOptions = {
  options?: { [key: string]: any };
  fields?: { [key: string]: { [key: string]: any } };
  oneof?: { [key: string]: { [key: string]: any } };
  nested?: { [key: string]: ProtoMetaMessageOptions };
};

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto1;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
  options?: {
    options?: { [key: string]: any };
    services?: {
      [key: string]: { options?: { [key: string]: any }; methods?: { [key: string]: { [key: string]: any } } };
    };
    messages?: { [key: string]: ProtoMetaMessageOptions };
    enums?: { [key: string]: { options?: { [key: string]: any }; values?: { [key: string]: { [key: string]: any } } } };
  };
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto1.fromPartial({
    "name": "io/restorecommerce/rule.proto",
    "package": "io.restorecommerce.rule",
    "dependency": [
      "io/restorecommerce/resource_base.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/attribute.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/filter.proto",
      "io/restorecommerce/options.proto",
    ],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "Target",
      "field": [{
        "name": "subjects",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.attribute.Attribute",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "subjects",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "resources",
        "number": 2,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.attribute.Attribute",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "resources",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "actions",
        "number": 3,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.attribute.Attribute",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "actions",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "Rule",
      "field": [{
        "name": "id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "id",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "meta",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.meta.Meta",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "meta",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "name",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "description",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "description",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "target",
        "number": 5,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.rule.Target",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "target",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "context_query",
        "number": 6,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.rule.ContextQuery",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 5,
        "jsonName": "contextQuery",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "condition",
        "number": 7,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 6,
        "jsonName": "condition",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "effect",
        "number": 8,
        "label": 1,
        "type": 14,
        "typeName": ".io.restorecommerce.rule.Effect",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 7,
        "jsonName": "effect",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "evaluation_cacheable",
        "number": 9,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 8,
        "jsonName": "evaluationCacheable",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "_id", "options": undefined },
        { "name": "_meta", "options": undefined },
        { "name": "_name", "options": undefined },
        { "name": "_description", "options": undefined },
        { "name": "_target", "options": undefined },
        { "name": "_context_query", "options": undefined },
        { "name": "_condition", "options": undefined },
        { "name": "_effect", "options": undefined },
        { "name": "_evaluation_cacheable", "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "RuleRQ",
      "field": [{
        "name": "id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "id",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "target",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.rule.Target",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "target",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "effect",
        "number": 3,
        "label": 1,
        "type": 14,
        "typeName": ".io.restorecommerce.rule.Effect",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "effect",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "condition",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "condition",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "context_query",
        "number": 5,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.rule.ContextQuery",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "contextQuery",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "evaluation_cacheable",
        "number": 6,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 5,
        "jsonName": "evaluationCacheable",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "_id", "options": undefined },
        { "name": "_target", "options": undefined },
        { "name": "_effect", "options": undefined },
        { "name": "_condition", "options": undefined },
        { "name": "_context_query", "options": undefined },
        { "name": "_evaluation_cacheable", "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "RuleList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.rule.Rule",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "items",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "total_count",
        "number": 2,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "totalCount",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "subject",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.auth.Subject",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "subject",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_total_count", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "RuleListResponse",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.rule.RuleResponse",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "items",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "total_count",
        "number": 2,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "totalCount",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "operation_status",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.status.OperationStatus",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "operationStatus",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "RuleResponse",
      "field": [{
        "name": "payload",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.rule.Rule",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "payload",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "status",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.status.Status",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "status",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ContextQuery",
      "field": [{
        "name": "filters",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.filter.FilterOp",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "filters",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "query",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "query",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_query", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "enumType": [{
      "name": "Effect",
      "value": [{ "name": "PERMIT", "number": 0, "options": undefined }, {
        "name": "DENY",
        "number": 1,
        "options": undefined,
      }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "service": [{
      "name": "RuleService",
      "method": [{
        "name": "Read",
        "inputType": ".io.restorecommerce.resourcebase.ReadRequest",
        "outputType": ".io.restorecommerce.rule.RuleListResponse",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Create",
        "inputType": ".io.restorecommerce.rule.RuleList",
        "outputType": ".io.restorecommerce.rule.RuleListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Delete",
        "inputType": ".io.restorecommerce.resourcebase.DeleteRequest",
        "outputType": ".io.restorecommerce.resourcebase.DeleteResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Update",
        "inputType": ".io.restorecommerce.rule.RuleList",
        "outputType": ".io.restorecommerce.rule.RuleListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Upsert",
        "inputType": ".io.restorecommerce.rule.RuleList",
        "outputType": ".io.restorecommerce.rule.RuleListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }],
      "options": undefined,
    }],
    "extension": [],
    "options": undefined,
    "sourceCodeInfo": {
      "location": [{
        "path": [4, 0],
        "span": [15, 0, 19, 1],
        "leadingComments": "*\n Target specified by a Rule or a Request.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [5, 0],
        "span": [24, 0, 27, 1],
        "leadingComments": "*\n Resulting effect from a Policy or Rule.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 6],
        "span": [36, 2, 32],
        "leadingComments": "",
        "trailingComments": " JS code\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 2],
        "span": [41, 0, 48, 1],
        "leadingComments": "",
        "trailingComments": " used for `whatIsAllowed` / reverse queries\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 6],
        "span": [70, 0, 73, 1],
        "leadingComments":
          " Query to pull resources from an external service\n  and append them to the request's context.\n The retrieved data can then be passed onto the request's context\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {
    ".io.restorecommerce.rule.Effect": Effect,
    ".io.restorecommerce.rule.Target": Target,
    ".io.restorecommerce.rule.Rule": Rule,
    ".io.restorecommerce.rule.RuleRQ": RuleRQ,
    ".io.restorecommerce.rule.RuleList": RuleList,
    ".io.restorecommerce.rule.RuleListResponse": RuleListResponse,
    ".io.restorecommerce.rule.RuleResponse": RuleResponse,
    ".io.restorecommerce.rule.ContextQuery": ContextQuery,
  },
  dependencies: [
    protoMetadata1,
    protoMetadata2,
    protoMetadata3,
    protoMetadata4,
    protoMetadata5,
    protoMetadata6,
    protoMetadata7,
  ],
  options: { services: { "RuleService": { options: undefined, methods: { "Read": { "is_query": true } } } } },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
