/* eslint-disable */
import { FileDescriptorProto } from "ts-proto-descriptors/google/protobuf/descriptor";
import {
  Meta,
  protoMetadata as protoMetadata3,
} from "../../io/restorecommerce/meta";
import {
  Target,
  Effect,
  protoMetadata as protoMetadata4,
  RuleRQ,
  effectFromJSON,
  effectToJSON,
} from "../../io/restorecommerce/rule";
import {
  Subject,
  protoMetadata as protoMetadata5,
} from "../../io/restorecommerce/auth";
import {
  protoMetadata as protoMetadata1,
  Empty,
} from "../../google/protobuf/empty";
import {
  protoMetadata as protoMetadata2,
  ReadRequest,
  DeleteRequest,
} from "../../io/restorecommerce/resource_base";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "io.restorecommerce.policy";

/** A Policy is defined by a set of Rules. */
export interface Policy {
  id: string;
  meta?: Meta;
  name: string;
  description: string;
  /** rule IDs */
  rules: string[];
  /** general policy target */
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

export const Policy = {
  encode(message: Policy, writer: Writer = Writer.create()): Writer {
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
    for (const v of message.rules) {
      writer.uint32(42).string(v!);
    }
    if (message.target !== undefined) {
      Target.encode(message.target, writer.uint32(50).fork()).ldelim();
    }
    if (message.effect !== 0) {
      writer.uint32(56).int32(message.effect);
    }
    if (message.combiningAlgorithm !== "") {
      writer.uint32(66).string(message.combiningAlgorithm);
    }
    if (message.evaluationCacheable === true) {
      writer.uint32(72).bool(message.evaluationCacheable);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Policy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(basePolicy) as Policy;
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
    const message = globalThis.Object.create(basePolicy) as Policy;
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
    if (
      object.combiningAlgorithm !== undefined &&
      object.combiningAlgorithm !== null
    ) {
      message.combiningAlgorithm = String(object.combiningAlgorithm);
    } else {
      message.combiningAlgorithm = "";
    }
    if (
      object.evaluationCacheable !== undefined &&
      object.evaluationCacheable !== null
    ) {
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
    if (
      object.combiningAlgorithm !== undefined &&
      object.combiningAlgorithm !== null
    ) {
      message.combiningAlgorithm = object.combiningAlgorithm;
    } else {
      message.combiningAlgorithm = "";
    }
    if (
      object.evaluationCacheable !== undefined &&
      object.evaluationCacheable !== null
    ) {
      message.evaluationCacheable = object.evaluationCacheable;
    } else {
      message.evaluationCacheable = false;
    }
    return message;
  },

  toJSON(message: Policy): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.rules) {
      obj.rules = message.rules.map((e) => e);
    } else {
      obj.rules = [];
    }
    message.target !== undefined &&
      (obj.target = message.target ? Target.toJSON(message.target) : undefined);
    message.effect !== undefined && (obj.effect = effectToJSON(message.effect));
    message.combiningAlgorithm !== undefined &&
      (obj.combiningAlgorithm = message.combiningAlgorithm);
    message.evaluationCacheable !== undefined &&
      (obj.evaluationCacheable = message.evaluationCacheable);
    return obj;
  },
};

const basePolicyRQ: object = {
  id: "",
  combiningAlgorithm: "",
  effect: 0,
  hasRules: false,
  evaluationCacheable: false,
};

export const PolicyRQ = {
  encode(message: PolicyRQ, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.target !== undefined) {
      Target.encode(message.target, writer.uint32(18).fork()).ldelim();
    }
    if (message.combiningAlgorithm !== "") {
      writer.uint32(26).string(message.combiningAlgorithm);
    }
    for (const v of message.rules) {
      RuleRQ.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.effect !== 0) {
      writer.uint32(40).int32(message.effect);
    }
    if (message.hasRules === true) {
      writer.uint32(48).bool(message.hasRules);
    }
    if (message.evaluationCacheable === true) {
      writer.uint32(56).bool(message.evaluationCacheable);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PolicyRQ {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(basePolicyRQ) as PolicyRQ;
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
    const message = globalThis.Object.create(basePolicyRQ) as PolicyRQ;
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
    if (
      object.combiningAlgorithm !== undefined &&
      object.combiningAlgorithm !== null
    ) {
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
    if (
      object.evaluationCacheable !== undefined &&
      object.evaluationCacheable !== null
    ) {
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
    if (
      object.combiningAlgorithm !== undefined &&
      object.combiningAlgorithm !== null
    ) {
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
    if (
      object.evaluationCacheable !== undefined &&
      object.evaluationCacheable !== null
    ) {
      message.evaluationCacheable = object.evaluationCacheable;
    } else {
      message.evaluationCacheable = false;
    }
    return message;
  },

  toJSON(message: PolicyRQ): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.target !== undefined &&
      (obj.target = message.target ? Target.toJSON(message.target) : undefined);
    message.combiningAlgorithm !== undefined &&
      (obj.combiningAlgorithm = message.combiningAlgorithm);
    if (message.rules) {
      obj.rules = message.rules.map((e) => (e ? RuleRQ.toJSON(e) : undefined));
    } else {
      obj.rules = [];
    }
    message.effect !== undefined && (obj.effect = effectToJSON(message.effect));
    message.hasRules !== undefined && (obj.hasRules = message.hasRules);
    message.evaluationCacheable !== undefined &&
      (obj.evaluationCacheable = message.evaluationCacheable);
    return obj;
  },
};

const basePolicyList: object = { totalCount: 0 };

export const PolicyList = {
  encode(message: PolicyList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      Policy.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PolicyList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(basePolicyList) as PolicyList;
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
    const message = globalThis.Object.create(basePolicyList) as PolicyList;
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
      obj.items = message.items.map((e) => (e ? Policy.toJSON(e) : undefined));
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

export interface Service {
  Read(request: ReadRequest): Promise<PolicyList>;
  Create(request: PolicyList): Promise<PolicyList>;
  Delete(request: DeleteRequest): Promise<Empty>;
  Update(request: PolicyList): Promise<PolicyList>;
  Upsert(request: PolicyList): Promise<PolicyList>;
}

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto.fromPartial({
    dependency: [
      "google/protobuf/empty.proto",
      "io/restorecommerce/resource_base.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/rule.proto",
      "io/restorecommerce/auth.proto",
    ],
    publicDependency: [],
    weakDependency: [],
    messageType: [
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
          { name: "rules", number: 5, label: 3, type: 9, jsonName: "rules" },
          {
            name: "target",
            number: 6,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.rule.Target",
            jsonName: "target",
          },
          {
            name: "effect",
            number: 7,
            label: 1,
            type: 14,
            typeName: ".io.restorecommerce.rule.Effect",
            jsonName: "effect",
          },
          {
            name: "combining_algorithm",
            number: 8,
            label: 1,
            type: 9,
            jsonName: "combiningAlgorithm",
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
        name: "Policy",
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
            name: "combining_algorithm",
            number: 3,
            label: 1,
            type: 9,
            jsonName: "combiningAlgorithm",
          },
          {
            name: "rules",
            number: 4,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.rule.RuleRQ",
            jsonName: "rules",
          },
          {
            name: "effect",
            number: 5,
            label: 1,
            type: 14,
            typeName: ".io.restorecommerce.rule.Effect",
            jsonName: "effect",
          },
          {
            name: "has_rules",
            number: 6,
            label: 1,
            type: 8,
            jsonName: "hasRules",
          },
          {
            name: "evaluation_cacheable",
            number: 7,
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
        name: "PolicyRQ",
      },
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.policy.Policy",
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
        name: "PolicyList",
      },
    ],
    enumType: [],
    service: [
      {
        method: [
          {
            name: "Read",
            inputType: ".io.restorecommerce.resourcebase.ReadRequest",
            outputType: ".io.restorecommerce.policy.PolicyList",
          },
          {
            name: "Create",
            inputType: ".io.restorecommerce.policy.PolicyList",
            outputType: ".io.restorecommerce.policy.PolicyList",
          },
          {
            name: "Delete",
            inputType: ".io.restorecommerce.resourcebase.DeleteRequest",
            outputType: ".google.protobuf.Empty",
          },
          {
            name: "Update",
            inputType: ".io.restorecommerce.policy.PolicyList",
            outputType: ".io.restorecommerce.policy.PolicyList",
          },
          {
            name: "Upsert",
            inputType: ".io.restorecommerce.policy.PolicyList",
            outputType: ".io.restorecommerce.policy.PolicyList",
          },
        ],
        name: "Service",
      },
    ],
    extension: [],
    name: "io/restorecommerce/policy.proto",
    package: "io.restorecommerce.policy",
    sourceCodeInfo: {
      location: [
        {
          path: [4, 0],
          span: [14, 0, 24, 1],
          leadingDetachedComments: [],
          leadingComments: "*\n A Policy is defined by a set of Rules.\n",
        },
        {
          path: [4, 0, 2, 4],
          span: [19, 2, 28],
          leadingDetachedComments: [],
          trailingComments: " rule IDs\n",
        },
        {
          path: [4, 0, 2, 5],
          span: [20, 2, 44],
          leadingDetachedComments: [],
          trailingComments: " general policy target\n",
        },
      ],
    },
    syntax: "proto3",
  }),
  references: {
    ".io.restorecommerce.policy.Policy": Policy,
    ".io.restorecommerce.policy.PolicyRQ": PolicyRQ,
    ".io.restorecommerce.policy.PolicyList": PolicyList,
  },
  dependencies: [
    protoMetadata1,
    protoMetadata2,
    protoMetadata3,
    protoMetadata4,
    protoMetadata5,
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
