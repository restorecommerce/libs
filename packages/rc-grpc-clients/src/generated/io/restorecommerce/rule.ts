/* eslint-disable */
import { FileDescriptorProto } from "ts-proto-descriptors/google/protobuf/descriptor";
import {
  Meta,
  protoMetadata as protoMetadata2,
} from "../../io/restorecommerce/meta";
import {
  Subject,
  protoMetadata as protoMetadata3,
} from "../../io/restorecommerce/auth";
import {
  OperationStatus,
  Status,
  protoMetadata as protoMetadata5,
} from "../../io/restorecommerce/status";
import {
  protoMetadata as protoMetadata1,
  DeleteResponse,
  ReadRequest,
  DeleteRequest,
} from "../../io/restorecommerce/resource_base";
import {
  protoMetadata as protoMetadata4,
  Attribute,
} from "../../io/restorecommerce/attribute";
import {
  protoMetadata as protoMetadata6,
  FilterOp,
} from "../../io/restorecommerce/filter";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "io.restorecommerce.rule";

/** Resulting effect from a Policy or Rule. */
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

/** Target specified by a Rule or a Request. */
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
  context_query?: ContextQuery;
  /** JS code */
  condition: string;
  effect: Effect;
  evaluation_cacheable: boolean;
}

/** used for `whatIsAllowed` / reverse queries */
export interface RuleRQ {
  id: string;
  target?: Target;
  effect: Effect;
  condition: string;
  context_query?: ContextQuery;
  evaluation_cacheable: boolean;
}

export interface RuleList {
  items: Rule[];
  total_count: number;
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
  query: string;
}

const baseTarget: object = {};

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

  decode(input: Reader | Uint8Array, length?: number): Target {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseTarget) as Target;
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
    const message = globalThis.Object.create(baseTarget) as Target;
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
      obj.subject = message.subject.map((e) =>
        e ? Attribute.toJSON(e) : undefined
      );
    } else {
      obj.subject = [];
    }
    if (message.resources) {
      obj.resources = message.resources.map((e) =>
        e ? Attribute.toJSON(e) : undefined
      );
    } else {
      obj.resources = [];
    }
    if (message.action) {
      obj.action = message.action.map((e) =>
        e ? Attribute.toJSON(e) : undefined
      );
    } else {
      obj.action = [];
    }
    return obj;
  },
};

const baseRule: object = {
  id: "",
  name: "",
  description: "",
  condition: "",
  effect: 0,
  evaluation_cacheable: false,
};

export const Rule = {
  encode(message: Rule, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.target !== undefined) {
      Target.encode(message.target, writer.uint32(42).fork()).ldelim();
    }
    if (message.context_query !== undefined) {
      ContextQuery.encode(
        message.context_query,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.condition !== "") {
      writer.uint32(58).string(message.condition);
    }
    if (message.effect !== 0) {
      writer.uint32(64).int32(message.effect);
    }
    if (message.evaluation_cacheable === true) {
      writer.uint32(72).bool(message.evaluation_cacheable);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Rule {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseRule) as Rule;
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
          message.effect = reader.int32() as any;
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
    const message = globalThis.Object.create(baseRule) as Rule;
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
    if (object.context_query !== undefined && object.context_query !== null) {
      message.context_query = ContextQuery.fromJSON(object.context_query);
    } else {
      message.context_query = undefined;
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
    if (
      object.evaluation_cacheable !== undefined &&
      object.evaluation_cacheable !== null
    ) {
      message.evaluation_cacheable = Boolean(object.evaluation_cacheable);
    } else {
      message.evaluation_cacheable = false;
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
    if (object.context_query !== undefined && object.context_query !== null) {
      message.context_query = ContextQuery.fromPartial(object.context_query);
    } else {
      message.context_query = undefined;
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
    if (
      object.evaluation_cacheable !== undefined &&
      object.evaluation_cacheable !== null
    ) {
      message.evaluation_cacheable = object.evaluation_cacheable;
    } else {
      message.evaluation_cacheable = false;
    }
    return message;
  },

  toJSON(message: Rule): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.target !== undefined &&
      (obj.target = message.target ? Target.toJSON(message.target) : undefined);
    message.context_query !== undefined &&
      (obj.context_query = message.context_query
        ? ContextQuery.toJSON(message.context_query)
        : undefined);
    message.condition !== undefined && (obj.condition = message.condition);
    message.effect !== undefined && (obj.effect = effectToJSON(message.effect));
    message.evaluation_cacheable !== undefined &&
      (obj.evaluation_cacheable = message.evaluation_cacheable);
    return obj;
  },
};

const baseRuleRQ: object = {
  id: "",
  effect: 0,
  condition: "",
  evaluation_cacheable: false,
};

export const RuleRQ = {
  encode(message: RuleRQ, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.target !== undefined) {
      Target.encode(message.target, writer.uint32(18).fork()).ldelim();
    }
    if (message.effect !== 0) {
      writer.uint32(24).int32(message.effect);
    }
    if (message.condition !== "") {
      writer.uint32(34).string(message.condition);
    }
    if (message.context_query !== undefined) {
      ContextQuery.encode(
        message.context_query,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.evaluation_cacheable === true) {
      writer.uint32(48).bool(message.evaluation_cacheable);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): RuleRQ {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseRuleRQ) as RuleRQ;
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
    const message = globalThis.Object.create(baseRuleRQ) as RuleRQ;
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
    if (object.context_query !== undefined && object.context_query !== null) {
      message.context_query = ContextQuery.fromJSON(object.context_query);
    } else {
      message.context_query = undefined;
    }
    if (
      object.evaluation_cacheable !== undefined &&
      object.evaluation_cacheable !== null
    ) {
      message.evaluation_cacheable = Boolean(object.evaluation_cacheable);
    } else {
      message.evaluation_cacheable = false;
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
    if (object.context_query !== undefined && object.context_query !== null) {
      message.context_query = ContextQuery.fromPartial(object.context_query);
    } else {
      message.context_query = undefined;
    }
    if (
      object.evaluation_cacheable !== undefined &&
      object.evaluation_cacheable !== null
    ) {
      message.evaluation_cacheable = object.evaluation_cacheable;
    } else {
      message.evaluation_cacheable = false;
    }
    return message;
  },

  toJSON(message: RuleRQ): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.target !== undefined &&
      (obj.target = message.target ? Target.toJSON(message.target) : undefined);
    message.effect !== undefined && (obj.effect = effectToJSON(message.effect));
    message.condition !== undefined && (obj.condition = message.condition);
    message.context_query !== undefined &&
      (obj.context_query = message.context_query
        ? ContextQuery.toJSON(message.context_query)
        : undefined);
    message.evaluation_cacheable !== undefined &&
      (obj.evaluation_cacheable = message.evaluation_cacheable);
    return obj;
  },
};

const baseRuleList: object = { total_count: 0 };

export const RuleList = {
  encode(message: RuleList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      Rule.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): RuleList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseRuleList) as RuleList;
    message.items = [];
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
    const message = globalThis.Object.create(baseRuleList) as RuleList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Rule.fromJSON(e));
      }
    }
    if (object.total_count !== undefined && object.total_count !== null) {
      message.total_count = Number(object.total_count);
    } else {
      message.total_count = 0;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
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
    if (object.total_count !== undefined && object.total_count !== null) {
      message.total_count = object.total_count;
    } else {
      message.total_count = 0;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  toJSON(message: RuleList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => (e ? Rule.toJSON(e) : undefined));
    } else {
      obj.items = [];
    }
    message.total_count !== undefined &&
      (obj.total_count = message.total_count);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseRuleListResponse: object = { total_count: 0 };

export const RuleListResponse = {
  encode(message: RuleListResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      RuleResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(
        message.operation_status,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): RuleListResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseRuleListResponse
    ) as RuleListResponse;
    message.items = [];
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
          message.operation_status = OperationStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RuleListResponse {
    const message = globalThis.Object.create(
      baseRuleListResponse
    ) as RuleListResponse;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(RuleResponse.fromJSON(e));
      }
    }
    if (object.total_count !== undefined && object.total_count !== null) {
      message.total_count = Number(object.total_count);
    } else {
      message.total_count = 0;
    }
    if (
      object.operation_status !== undefined &&
      object.operation_status !== null
    ) {
      message.operation_status = OperationStatus.fromJSON(
        object.operation_status
      );
    } else {
      message.operation_status = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<RuleListResponse>): RuleListResponse {
    const message = { ...baseRuleListResponse } as RuleListResponse;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(RuleResponse.fromPartial(e));
      }
    }
    if (object.total_count !== undefined && object.total_count !== null) {
      message.total_count = object.total_count;
    } else {
      message.total_count = 0;
    }
    if (
      object.operation_status !== undefined &&
      object.operation_status !== null
    ) {
      message.operation_status = OperationStatus.fromPartial(
        object.operation_status
      );
    } else {
      message.operation_status = undefined;
    }
    return message;
  },

  toJSON(message: RuleListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? RuleResponse.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.total_count !== undefined &&
      (obj.total_count = message.total_count);
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status
        ? OperationStatus.toJSON(message.operation_status)
        : undefined);
    return obj;
  },
};

const baseRuleResponse: object = {};

export const RuleResponse = {
  encode(message: RuleResponse, writer: Writer = Writer.create()): Writer {
    if (message.payload !== undefined) {
      Rule.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): RuleResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseRuleResponse) as RuleResponse;
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
    const message = globalThis.Object.create(baseRuleResponse) as RuleResponse;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = Rule.fromJSON(object.payload);
    } else {
      message.payload = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromJSON(object.status);
    } else {
      message.status = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<RuleResponse>): RuleResponse {
    const message = { ...baseRuleResponse } as RuleResponse;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = Rule.fromPartial(object.payload);
    } else {
      message.payload = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromPartial(object.status);
    } else {
      message.status = undefined;
    }
    return message;
  },

  toJSON(message: RuleResponse): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload
        ? Rule.toJSON(message.payload)
        : undefined);
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },
};

const baseContextQuery: object = { query: "" };

export const ContextQuery = {
  encode(message: ContextQuery, writer: Writer = Writer.create()): Writer {
    for (const v of message.filters) {
      FilterOp.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.query !== "") {
      writer.uint32(18).string(message.query);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ContextQuery {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseContextQuery) as ContextQuery;
    message.filters = [];
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
    const message = globalThis.Object.create(baseContextQuery) as ContextQuery;
    message.filters = [];
    if (object.filters !== undefined && object.filters !== null) {
      for (const e of object.filters) {
        message.filters.push(FilterOp.fromJSON(e));
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
        message.filters.push(FilterOp.fromPartial(e));
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
      obj.filters = message.filters.map((e) =>
        e ? FilterOp.toJSON(e) : undefined
      );
    } else {
      obj.filters = [];
    }
    message.query !== undefined && (obj.query = message.query);
    return obj;
  },
};

export interface Service {
  Read(request: ReadRequest): Promise<RuleListResponse>;
  Create(request: RuleList): Promise<RuleListResponse>;
  Delete(request: DeleteRequest): Promise<DeleteResponse>;
  Update(request: RuleList): Promise<RuleListResponse>;
  Upsert(request: RuleList): Promise<RuleListResponse>;
}

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto.fromPartial({
    dependency: [
      "io/restorecommerce/resource_base.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/attribute.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/filter.proto",
    ],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        field: [
          {
            name: "subject",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.attribute.Attribute",
            jsonName: "subject",
          },
          {
            name: "resources",
            number: 2,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.attribute.Attribute",
            jsonName: "resources",
          },
          {
            name: "action",
            number: 3,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.attribute.Attribute",
            jsonName: "action",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Target",
      },
      {
        field: [
          { name: "id", number: 1, label: 1, type: 9, jsonName: "id" },
          {
            name: "meta",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.meta.Meta",
            jsonName: "meta",
          },
          { name: "name", number: 3, label: 1, type: 9, jsonName: "name" },
          {
            name: "description",
            number: 4,
            label: 1,
            type: 9,
            jsonName: "description",
          },
          {
            name: "target",
            number: 5,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.rule.Target",
            jsonName: "target",
          },
          {
            name: "context_query",
            number: 6,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.rule.ContextQuery",
            jsonName: "contextQuery",
          },
          {
            name: "condition",
            number: 7,
            label: 1,
            type: 9,
            jsonName: "condition",
          },
          {
            name: "effect",
            number: 8,
            label: 1,
            type: 14,
            typeName: ".io.restorecommerce.rule.Effect",
            jsonName: "effect",
          },
          {
            name: "evaluation_cacheable",
            number: 9,
            label: 1,
            type: 8,
            jsonName: "evaluationCacheable",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Rule",
      },
      {
        field: [
          { name: "id", number: 1, label: 1, type: 9, jsonName: "id" },
          {
            name: "target",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.rule.Target",
            jsonName: "target",
          },
          {
            name: "effect",
            number: 3,
            label: 1,
            type: 14,
            typeName: ".io.restorecommerce.rule.Effect",
            jsonName: "effect",
          },
          {
            name: "condition",
            number: 4,
            label: 1,
            type: 9,
            jsonName: "condition",
          },
          {
            name: "context_query",
            number: 5,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.rule.ContextQuery",
            jsonName: "contextQuery",
          },
          {
            name: "evaluation_cacheable",
            number: 6,
            label: 1,
            type: 8,
            jsonName: "evaluationCacheable",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "RuleRQ",
      },
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.rule.Rule",
            jsonName: "items",
          },
          {
            name: "total_count",
            number: 2,
            label: 1,
            type: 13,
            jsonName: "totalCount",
          },
          {
            name: "subject",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            jsonName: "subject",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "RuleList",
      },
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.rule.RuleResponse",
            jsonName: "items",
          },
          {
            name: "total_count",
            number: 2,
            label: 1,
            type: 13,
            jsonName: "totalCount",
          },
          {
            name: "operation_status",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.OperationStatus",
            jsonName: "operationStatus",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "RuleListResponse",
      },
      {
        field: [
          {
            name: "payload",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.rule.Rule",
            jsonName: "payload",
          },
          {
            name: "status",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.Status",
            jsonName: "status",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "RuleResponse",
      },
      {
        field: [
          {
            name: "filters",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.filter.FilterOp",
            jsonName: "filters",
          },
          { name: "query", number: 2, label: 1, type: 9, jsonName: "query" },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "ContextQuery",
      },
    ],
    enumType: [
      {
        value: [
          { name: "PERMIT", number: 0 },
          { name: "DENY", number: 1 },
        ],
        reservedRange: [],
        reservedName: [],
        name: "Effect",
      },
    ],
    service: [
      {
        method: [
          {
            name: "Read",
            inputType: ".io.restorecommerce.resourcebase.ReadRequest",
            outputType: ".io.restorecommerce.rule.RuleListResponse",
          },
          {
            name: "Create",
            inputType: ".io.restorecommerce.rule.RuleList",
            outputType: ".io.restorecommerce.rule.RuleListResponse",
          },
          {
            name: "Delete",
            inputType: ".io.restorecommerce.resourcebase.DeleteRequest",
            outputType: ".io.restorecommerce.resourcebase.DeleteResponse",
          },
          {
            name: "Update",
            inputType: ".io.restorecommerce.rule.RuleList",
            outputType: ".io.restorecommerce.rule.RuleListResponse",
          },
          {
            name: "Upsert",
            inputType: ".io.restorecommerce.rule.RuleList",
            outputType: ".io.restorecommerce.rule.RuleListResponse",
          },
        ],
        name: "Service",
      },
    ],
    extension: [],
    name: "io/restorecommerce/rule.proto",
    package: "io.restorecommerce.rule",
    sourceCodeInfo: {
      location: [
        {
          path: [4, 0],
          span: [15, 0, 19, 1],
          leadingDetachedComments: [],
          leadingComments: "*\n Target specified by a Rule or a Request.\n",
        },
        {
          path: [5, 0],
          span: [24, 0, 27, 1],
          leadingDetachedComments: [],
          leadingComments: "*\n Resulting effect from a Policy or Rule.\n",
        },
        {
          path: [4, 1, 2, 6],
          span: [36, 2, 23],
          leadingDetachedComments: [],
          trailingComments: " JS code\n",
        },
        {
          path: [4, 2],
          span: [41, 0, 48, 1],
          leadingDetachedComments: [],
          trailingComments: " used for `whatIsAllowed` / reverse queries\n",
        },
        {
          path: [4, 6],
          span: [70, 0, 73, 1],
          leadingDetachedComments: [],
          leadingComments:
            " Query to pull resources from an external service\n  and append them to the request's context.\n The retrieved data can then be passed onto the request's context\n",
        },
      ],
    },
    syntax: "proto3",
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
  ],
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
