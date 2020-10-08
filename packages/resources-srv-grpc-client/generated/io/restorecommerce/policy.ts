/* eslint-disable */
import { Meta } from '../../io/restorecommerce/meta';
import { Target, Effect, RuleRQ } from '../../io/restorecommerce/rule';
import { Subject, ApiKey } from '../../io/restorecommerce/auth';
import { ReadRequest, DeleteRequest } from '../../io/restorecommerce/resource_base';
import { Empty } from '../../google/protobuf/empty';
import { Writer, Reader } from 'protobufjs/minimal';


/**
 * *
 *  A Policy is defined by a set of Rules.
 */
export interface Policy {
  id: string;
  meta?: Meta;
  name: string;
  description: string;
  /**
   *  rule IDs
   */
  rules: string[];
  /**
   *  general policy target
   */
  target?: Target;
  effect: Effect;
  combiningAlgorithm: string;
}

export interface PolicyRQ {
  id: string;
  target?: Target;
  combiningAlgorithm: string;
  rules: RuleRQ[];
  effect: Effect;
  hasRules: boolean;
}

export interface PolicyList {
  items: Policy[];
  totalCount: number;
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
}

const basePolicy: object = {
  id: "",
  name: "",
  description: "",
  rules: "",
  effect: 0,
  combiningAlgorithm: "",
};

const basePolicyRQ: object = {
  id: "",
  combiningAlgorithm: "",
  effect: 0,
  hasRules: false,
};

const basePolicyList: object = {
  totalCount: 0,
};

export interface Service {

  Read(request: ReadRequest): Promise<PolicyList>;

  Create(request: PolicyList): Promise<PolicyList>;

  Delete(request: DeleteRequest): Promise<Empty>;

  Update(request: PolicyList): Promise<PolicyList>;

  Upsert(request: PolicyList): Promise<PolicyList>;

}

export const Policy = {
  encode(message: Policy, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    if (message.meta !== undefined && message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.name);
    writer.uint32(34).string(message.description);
    for (const v of message.rules) {
      writer.uint32(42).string(v!);
    }
    if (message.target !== undefined && message.target !== undefined) {
      Target.encode(message.target, writer.uint32(50).fork()).ldelim();
    }
    writer.uint32(56).int32(message.effect);
    writer.uint32(66).string(message.combiningAlgorithm);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Policy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePolicy } as Policy;
    message.rules = [];
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
          message.rules.push(reader.string());
          break;
        case 6:
          message.target = Target.decode(reader, reader.uint32());
          break;
        case 7:
          message.effect = reader.int32() as any;
          break;
        case 8:
          message.combiningAlgorithm = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const PolicyRQ = {
  encode(message: PolicyRQ, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    if (message.target !== undefined && message.target !== undefined) {
      Target.encode(message.target, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.combiningAlgorithm);
    for (const v of message.rules) {
      RuleRQ.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    writer.uint32(40).int32(message.effect);
    writer.uint32(48).bool(message.hasRules);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PolicyRQ {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePolicyRQ } as PolicyRQ;
    message.rules = [];
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
          message.combiningAlgorithm = reader.string();
          break;
        case 4:
          message.rules.push(RuleRQ.decode(reader, reader.uint32()));
          break;
        case 5:
          message.effect = reader.int32() as any;
          break;
        case 6:
          message.hasRules = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const PolicyList = {
  encode(message: PolicyList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      Policy.encode(v!, writer.uint32(10).fork()).ldelim();
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
  decode(input: Uint8Array | Reader, length?: number): PolicyList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePolicyList } as PolicyList;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Policy.decode(reader, reader.uint32()));
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
