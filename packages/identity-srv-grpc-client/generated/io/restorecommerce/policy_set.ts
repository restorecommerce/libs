/* eslint-disable */
import { Meta } from '../../io/restorecommerce/meta';
import { Target, Effect } from '../../io/restorecommerce/rule';
import { Subject, ApiKey } from '../../io/restorecommerce/auth';
import { PolicyRQ } from '../../io/restorecommerce/policy';
import { ReadRequest, DeleteRequest } from '../../io/restorecommerce/resource_base';
import { Empty } from '../../google/protobuf/empty';
import { Writer, Reader } from 'protobufjs/minimal';


export interface PolicySet {
  id: string;
  meta?: Meta;
  name: string;
  description: string;
  target?: Target;
  combiningAlgorithm: string;
  /**
   *  policy IDs
   */
  policies: string[];
}

export interface PolicySetList {
  items: PolicySet[];
  totalCount: number;
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
}

export interface PolicySetRQ {
  id: string;
  target?: Target;
  combiningAlgorithm: string;
  policies: PolicyRQ[];
  effect: Effect;
}

const basePolicySet: object = {
  id: "",
  name: "",
  description: "",
  combiningAlgorithm: "",
  policies: "",
};

const basePolicySetList: object = {
  totalCount: 0,
};

const basePolicySetRQ: object = {
  id: "",
  combiningAlgorithm: "",
  effect: 0,
};

export interface Service {

  Read(request: ReadRequest): Promise<PolicySetList>;

  Create(request: PolicySetList): Promise<PolicySetList>;

  Delete(request: DeleteRequest): Promise<Empty>;

  Update(request: PolicySetList): Promise<PolicySetList>;

  Upsert(request: PolicySetList): Promise<PolicySetList>;

}

export const PolicySet = {
  encode(message: PolicySet, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    if (message.meta !== undefined && message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.name);
    writer.uint32(34).string(message.description);
    if (message.target !== undefined && message.target !== undefined) {
      Target.encode(message.target, writer.uint32(42).fork()).ldelim();
    }
    writer.uint32(50).string(message.combiningAlgorithm);
    for (const v of message.policies) {
      writer.uint32(58).string(v!);
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PolicySet {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePolicySet } as PolicySet;
    message.policies = [];
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
          message.combiningAlgorithm = reader.string();
          break;
        case 7:
          message.policies.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const PolicySetList = {
  encode(message: PolicySetList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      PolicySet.encode(v!, writer.uint32(10).fork()).ldelim();
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
  decode(input: Uint8Array | Reader, length?: number): PolicySetList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePolicySetList } as PolicySetList;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(PolicySet.decode(reader, reader.uint32()));
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

export const PolicySetRQ = {
  encode(message: PolicySetRQ, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    if (message.target !== undefined && message.target !== undefined) {
      Target.encode(message.target, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.combiningAlgorithm);
    for (const v of message.policies) {
      PolicyRQ.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    writer.uint32(40).int32(message.effect);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PolicySetRQ {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePolicySetRQ } as PolicySetRQ;
    message.policies = [];
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
          message.policies.push(PolicyRQ.decode(reader, reader.uint32()));
          break;
        case 5:
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
