/* eslint-disable */
import { Meta } from '../../io/restorecommerce/meta';
import { Target, Effect, RuleRQ, effectFromJSON, effectToJSON } from '../../io/restorecommerce/rule';
import { Subject } from '../../io/restorecommerce/auth';
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
  evaluationCacheable: boolean;
}

export interface PolicyRQ {
  id: string;
  target?: Target;
  combiningAlgorithm: string;
  rules: RuleRQ[];
  effect: Effect;
  hasRules: boolean;
  evaluationCacheable: boolean;
}

export interface PolicyList {
  items: Policy[];
  totalCount: number;
  subject?: Subject;
}

const basePolicy: object = {
  id: "",
  name: "",
  description: "",
  rules: "",
  effect: 0,
  combiningAlgorithm: "",
  evaluationCacheable: false,
};

const basePolicyRQ: object = {
  id: "",
  combiningAlgorithm: "",
  effect: 0,
  hasRules: false,
  evaluationCacheable: false,
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

export interface MetaI {
  readonly meta: 'object' | 'array' | 'map' | 'union' | 'builtin';
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
  readonly request: MetaO;
  readonly response: MetaO;
  readonly clientStreaming: boolean;
  readonly serverStreaming: boolean;
  readonly encodeRequest?: (message: T, writer: Writer) => Writer;
  readonly decodeResponse?: (input: Uint8Array | Reader, length?: number) => R;
}

export interface MetaB extends MetaI {
  readonly meta: 'builtin';
  readonly type: string;
  readonly original: string;
}

export const protobufPackage = 'io.restorecommerce.policy'

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
    writer.uint32(72).bool(message.evaluationCacheable);
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
  fromJSON(object: any): Policy {
    const message = { ...basePolicy } as Policy;
    message.rules = [];
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
    if (object.rules !== undefined && object.rules !== null) {
      for (const e of object.rules) {
        message.rules.push(String(e));
      }
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
    if (object.combiningAlgorithm !== undefined && object.combiningAlgorithm !== null) {
      message.combiningAlgorithm = String(object.combiningAlgorithm);
    } else {
      message.combiningAlgorithm = "";
    }
    if (object.evaluationCacheable !== undefined && object.evaluationCacheable !== null) {
      message.evaluationCacheable = Boolean(object.evaluationCacheable);
    } else {
      message.evaluationCacheable = false;
    }
    return message;
  },
  fromPartial(object: DeepPartial<Policy>): Policy {
    const message = { ...basePolicy } as Policy;
    message.rules = [];
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
    if (object.rules !== undefined && object.rules !== null) {
      for (const e of object.rules) {
        message.rules.push(e);
      }
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
    if (object.combiningAlgorithm !== undefined && object.combiningAlgorithm !== null) {
      message.combiningAlgorithm = object.combiningAlgorithm;
    } else {
      message.combiningAlgorithm = "";
    }
    if (object.evaluationCacheable !== undefined && object.evaluationCacheable !== null) {
      message.evaluationCacheable = object.evaluationCacheable;
    } else {
      message.evaluationCacheable = false;
    }
    return message;
  },
  toJSON(message: Policy): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    if (message.rules) {
      obj.rules = message.rules.map(e => e);
    } else {
      obj.rules = [];
    }
    message.target !== undefined && (obj.target = message.target ? Target.toJSON(message.target) : undefined);
    message.effect !== undefined && (obj.effect = effectToJSON(message.effect));
    message.combiningAlgorithm !== undefined && (obj.combiningAlgorithm = message.combiningAlgorithm);
    message.evaluationCacheable !== undefined && (obj.evaluationCacheable = message.evaluationCacheable);
    return obj;
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
    writer.uint32(56).bool(message.evaluationCacheable);
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
        case 7:
          message.evaluationCacheable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PolicyRQ {
    const message = { ...basePolicyRQ } as PolicyRQ;
    message.rules = [];
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
    if (object.combiningAlgorithm !== undefined && object.combiningAlgorithm !== null) {
      message.combiningAlgorithm = String(object.combiningAlgorithm);
    } else {
      message.combiningAlgorithm = "";
    }
    if (object.rules !== undefined && object.rules !== null) {
      for (const e of object.rules) {
        message.rules.push(RuleRQ.fromJSON(e));
      }
    }
    if (object.effect !== undefined && object.effect !== null) {
      message.effect = effectFromJSON(object.effect);
    } else {
      message.effect = 0;
    }
    if (object.hasRules !== undefined && object.hasRules !== null) {
      message.hasRules = Boolean(object.hasRules);
    } else {
      message.hasRules = false;
    }
    if (object.evaluationCacheable !== undefined && object.evaluationCacheable !== null) {
      message.evaluationCacheable = Boolean(object.evaluationCacheable);
    } else {
      message.evaluationCacheable = false;
    }
    return message;
  },
  fromPartial(object: DeepPartial<PolicyRQ>): PolicyRQ {
    const message = { ...basePolicyRQ } as PolicyRQ;
    message.rules = [];
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
    if (object.combiningAlgorithm !== undefined && object.combiningAlgorithm !== null) {
      message.combiningAlgorithm = object.combiningAlgorithm;
    } else {
      message.combiningAlgorithm = "";
    }
    if (object.rules !== undefined && object.rules !== null) {
      for (const e of object.rules) {
        message.rules.push(RuleRQ.fromPartial(e));
      }
    }
    if (object.effect !== undefined && object.effect !== null) {
      message.effect = object.effect;
    } else {
      message.effect = 0;
    }
    if (object.hasRules !== undefined && object.hasRules !== null) {
      message.hasRules = object.hasRules;
    } else {
      message.hasRules = false;
    }
    if (object.evaluationCacheable !== undefined && object.evaluationCacheable !== null) {
      message.evaluationCacheable = object.evaluationCacheable;
    } else {
      message.evaluationCacheable = false;
    }
    return message;
  },
  toJSON(message: PolicyRQ): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.target !== undefined && (obj.target = message.target ? Target.toJSON(message.target) : undefined);
    message.combiningAlgorithm !== undefined && (obj.combiningAlgorithm = message.combiningAlgorithm);
    if (message.rules) {
      obj.rules = message.rules.map(e => e ? RuleRQ.toJSON(e) : undefined);
    } else {
      obj.rules = [];
    }
    message.effect !== undefined && (obj.effect = effectToJSON(message.effect));
    message.hasRules !== undefined && (obj.hasRules = message.hasRules);
    message.evaluationCacheable !== undefined && (obj.evaluationCacheable = message.evaluationCacheable);
    return obj;
  },
};

export const PolicyList = {
  encode(message: PolicyList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      Policy.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(16).uint32(message.totalCount);
    if (message.subject !== undefined && message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PolicyList {
    const message = { ...basePolicyList } as PolicyList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Policy.fromJSON(e));
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
    return message;
  },
  fromPartial(object: DeepPartial<PolicyList>): PolicyList {
    const message = { ...basePolicyList } as PolicyList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Policy.fromPartial(e));
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
    return message;
  },
  toJSON(message: PolicyList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map(e => e ? Policy.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },
};

export const metaPolicy: { [key in keyof Required<Policy>]: MetaI | string } = {
  id: {meta:'builtin', type:'string', original:'string'} as MetaB,
  meta: {meta:'object', type:'.io.restorecommerce.meta.Meta', name:'Meta'} as MetaO,
  name: {meta:'builtin', type:'string', original:'string'} as MetaB,
  description: {meta:'builtin', type:'string', original:'string'} as MetaB,
  rules: {meta:'array', type:{meta:'builtin', type:'string', original:'string'} as MetaB} as MetaA,
  target: {meta:'object', type:'.io.restorecommerce.rule.Target', name:'Target'} as MetaO,
  effect: {meta:'object', type:'.io.restorecommerce.rule.Effect', name:'Effect'} as MetaO,
  combiningAlgorithm: {meta:'builtin', type:'string', original:'string'} as MetaB,
  evaluationCacheable: {meta:'builtin', type:'boolean', original:'bool'} as MetaB,
}
export const metaPolicyRQ: { [key in keyof Required<PolicyRQ>]: MetaI | string } = {
  id: {meta:'builtin', type:'string', original:'string'} as MetaB,
  target: {meta:'object', type:'.io.restorecommerce.rule.Target', name:'Target'} as MetaO,
  combiningAlgorithm: {meta:'builtin', type:'string', original:'string'} as MetaB,
  rules: {meta:'array', type:{meta:'object', type:'.io.restorecommerce.rule.RuleRQ', name:'RuleRQ'} as MetaO} as MetaA,
  effect: {meta:'object', type:'.io.restorecommerce.rule.Effect', name:'Effect'} as MetaO,
  hasRules: {meta:'builtin', type:'boolean', original:'bool'} as MetaB,
  evaluationCacheable: {meta:'builtin', type:'boolean', original:'bool'} as MetaB,
}
export const metaPolicyList: { [key in keyof Required<PolicyList>]: MetaI | string } = {
  items: {meta:'array', type:{meta:'object', type:'.io.restorecommerce.policy.Policy', name:'Policy'} as MetaO} as MetaA,
  totalCount: {meta:'builtin', type:'number', original:'uint32'} as MetaB,
  subject: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.Subject', name:'Subject'} as MetaO]} as MetaU,
  apiKey: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.ApiKey', name:'ApiKey'} as MetaO]} as MetaU,
}
export const metaService: { [key in keyof Service]: MetaS<any, any> } = {
  Read: {request: {meta:'object', type:'.io.restorecommerce.resourcebase.ReadRequest', name:'ReadRequest'} as MetaO, response: {meta:'object', type:'.io.restorecommerce.policy.PolicyList', name:'PolicyList'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: ReadRequest.encode, decodeResponse: PolicyList.decode} as MetaS<ReadRequest, PolicyList>,
  Create: {request: {meta:'object', type:'.io.restorecommerce.policy.PolicyList', name:'PolicyList'} as MetaO, response: {meta:'object', type:'.io.restorecommerce.policy.PolicyList', name:'PolicyList'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: PolicyList.encode, decodeResponse: PolicyList.decode} as MetaS<PolicyList, PolicyList>,
  Delete: {request: {meta:'object', type:'.io.restorecommerce.resourcebase.DeleteRequest', name:'DeleteRequest'} as MetaO, response: {meta:'object', type:'.google.protobuf.Empty', name:'Empty'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: DeleteRequest.encode, decodeResponse: Empty.decode} as MetaS<DeleteRequest, Empty>,
  Update: {request: {meta:'object', type:'.io.restorecommerce.policy.PolicyList', name:'PolicyList'} as MetaO, response: {meta:'object', type:'.io.restorecommerce.policy.PolicyList', name:'PolicyList'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: PolicyList.encode, decodeResponse: PolicyList.decode} as MetaS<PolicyList, PolicyList>,
  Upsert: {request: {meta:'object', type:'.io.restorecommerce.policy.PolicyList', name:'PolicyList'} as MetaO, response: {meta:'object', type:'.io.restorecommerce.policy.PolicyList', name:'PolicyList'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: PolicyList.encode, decodeResponse: PolicyList.decode} as MetaS<PolicyList, PolicyList>,
}
export const metaPackageIoRestorecommercePolicy: { [key: string]: ['service', string, any, { [key: string]: MetaS<any, any> }] | ['enum', string, any, any] | ['message', string, any, { [key: string]: MetaI | string }] } = {
  Policy: ['message', '.io.restorecommerce.policy.Policy', Policy, metaPolicy],
  PolicyRQ: ['message', '.io.restorecommerce.policy.PolicyRQ', PolicyRQ, metaPolicyRQ],
  PolicyList: ['message', '.io.restorecommerce.policy.PolicyList', PolicyList, metaPolicyList],
  Service: ['service', '.io.restorecommerce.policy.Service', undefined, metaService],
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