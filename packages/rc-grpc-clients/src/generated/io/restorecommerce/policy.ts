/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { protoMetadata as protoMetadata4, Subject } from "./auth";
import { Meta, protoMetadata as protoMetadata2 } from "./meta";
import { protoMetadata as protoMetadata6 } from "./options";
import { DeleteRequest, DeleteResponse, protoMetadata as protoMetadata1, ReadRequest } from "./resource_base";
import {
  Effect,
  effectFromJSON,
  effectToJSON,
  effectToNumber,
  protoMetadata as protoMetadata3,
  RuleRQ,
  Target,
} from "./rule";
import { OperationStatus, protoMetadata as protoMetadata5, Status } from "./status";

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

export interface PolicyListResponse {
  items: PolicyResponse[];
  totalCount: number;
  operationStatus?: OperationStatus;
}

export interface PolicyResponse {
  payload?: Policy;
  status?: Status;
}

function createBasePolicy(): Policy {
  return {
    id: "",
    meta: undefined,
    name: "",
    description: "",
    rules: [],
    target: undefined,
    effect: Effect.PERMIT,
    combiningAlgorithm: "",
    evaluationCacheable: false,
  };
}

export const Policy = {
  encode(message: Policy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.effect !== Effect.PERMIT) {
      writer.uint32(56).int32(effectToNumber(message.effect));
    }
    if (message.combiningAlgorithm !== "") {
      writer.uint32(66).string(message.combiningAlgorithm);
    }
    if (message.evaluationCacheable === true) {
      writer.uint32(72).bool(message.evaluationCacheable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Policy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicy();
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
          message.effect = effectFromJSON(reader.int32());
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
    return {
      id: isSet(object.id) ? String(object.id) : "",
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => String(e)) : [],
      target: isSet(object.target) ? Target.fromJSON(object.target) : undefined,
      effect: isSet(object.effect) ? effectFromJSON(object.effect) : Effect.PERMIT,
      combiningAlgorithm: isSet(object.combiningAlgorithm) ? String(object.combiningAlgorithm) : "",
      evaluationCacheable: isSet(object.evaluationCacheable) ? Boolean(object.evaluationCacheable) : false,
    };
  },

  toJSON(message: Policy): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    if (message.rules) {
      obj.rules = message.rules.map((e) => e);
    } else {
      obj.rules = [];
    }
    message.target !== undefined && (obj.target = message.target ? Target.toJSON(message.target) : undefined);
    message.effect !== undefined && (obj.effect = effectToJSON(message.effect));
    message.combiningAlgorithm !== undefined && (obj.combiningAlgorithm = message.combiningAlgorithm);
    message.evaluationCacheable !== undefined && (obj.evaluationCacheable = message.evaluationCacheable);
    return obj;
  },

  create(base?: DeepPartial<Policy>): Policy {
    return Policy.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Policy>): Policy {
    const message = createBasePolicy();
    message.id = object.id ?? "";
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.rules = object.rules?.map((e) => e) || [];
    message.target = (object.target !== undefined && object.target !== null)
      ? Target.fromPartial(object.target)
      : undefined;
    message.effect = object.effect ?? Effect.PERMIT;
    message.combiningAlgorithm = object.combiningAlgorithm ?? "";
    message.evaluationCacheable = object.evaluationCacheable ?? false;
    return message;
  },
};

function createBasePolicyRQ(): PolicyRQ {
  return {
    id: "",
    target: undefined,
    combiningAlgorithm: "",
    rules: [],
    effect: Effect.PERMIT,
    hasRules: false,
    evaluationCacheable: false,
  };
}

export const PolicyRQ = {
  encode(message: PolicyRQ, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.effect !== Effect.PERMIT) {
      writer.uint32(40).int32(effectToNumber(message.effect));
    }
    if (message.hasRules === true) {
      writer.uint32(48).bool(message.hasRules);
    }
    if (message.evaluationCacheable === true) {
      writer.uint32(56).bool(message.evaluationCacheable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PolicyRQ {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicyRQ();
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
          message.effect = effectFromJSON(reader.int32());
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
    return {
      id: isSet(object.id) ? String(object.id) : "",
      target: isSet(object.target) ? Target.fromJSON(object.target) : undefined,
      combiningAlgorithm: isSet(object.combiningAlgorithm) ? String(object.combiningAlgorithm) : "",
      rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => RuleRQ.fromJSON(e)) : [],
      effect: isSet(object.effect) ? effectFromJSON(object.effect) : Effect.PERMIT,
      hasRules: isSet(object.hasRules) ? Boolean(object.hasRules) : false,
      evaluationCacheable: isSet(object.evaluationCacheable) ? Boolean(object.evaluationCacheable) : false,
    };
  },

  toJSON(message: PolicyRQ): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.target !== undefined && (obj.target = message.target ? Target.toJSON(message.target) : undefined);
    message.combiningAlgorithm !== undefined && (obj.combiningAlgorithm = message.combiningAlgorithm);
    if (message.rules) {
      obj.rules = message.rules.map((e) => e ? RuleRQ.toJSON(e) : undefined);
    } else {
      obj.rules = [];
    }
    message.effect !== undefined && (obj.effect = effectToJSON(message.effect));
    message.hasRules !== undefined && (obj.hasRules = message.hasRules);
    message.evaluationCacheable !== undefined && (obj.evaluationCacheable = message.evaluationCacheable);
    return obj;
  },

  create(base?: DeepPartial<PolicyRQ>): PolicyRQ {
    return PolicyRQ.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PolicyRQ>): PolicyRQ {
    const message = createBasePolicyRQ();
    message.id = object.id ?? "";
    message.target = (object.target !== undefined && object.target !== null)
      ? Target.fromPartial(object.target)
      : undefined;
    message.combiningAlgorithm = object.combiningAlgorithm ?? "";
    message.rules = object.rules?.map((e) => RuleRQ.fromPartial(e)) || [];
    message.effect = object.effect ?? Effect.PERMIT;
    message.hasRules = object.hasRules ?? false;
    message.evaluationCacheable = object.evaluationCacheable ?? false;
    return message;
  },
};

function createBasePolicyList(): PolicyList {
  return { items: [], totalCount: 0, subject: undefined };
}

export const PolicyList = {
  encode(message: PolicyList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): PolicyList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicyList();
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
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => Policy.fromJSON(e)) : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: PolicyList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? Policy.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = Math.round(message.totalCount));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<PolicyList>): PolicyList {
    return PolicyList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PolicyList>): PolicyList {
    const message = createBasePolicyList();
    message.items = object.items?.map((e) => Policy.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBasePolicyListResponse(): PolicyListResponse {
  return { items: [], totalCount: 0, operationStatus: undefined };
}

export const PolicyListResponse = {
  encode(message: PolicyListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      PolicyResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.operationStatus !== undefined) {
      OperationStatus.encode(message.operationStatus, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PolicyListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicyListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(PolicyResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalCount = reader.uint32();
          break;
        case 3:
          message.operationStatus = OperationStatus.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PolicyListResponse {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => PolicyResponse.fromJSON(e)) : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
      operationStatus: isSet(object.operationStatus) ? OperationStatus.fromJSON(object.operationStatus) : undefined,
    };
  },

  toJSON(message: PolicyListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? PolicyResponse.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = Math.round(message.totalCount));
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus ? OperationStatus.toJSON(message.operationStatus) : undefined);
    return obj;
  },

  create(base?: DeepPartial<PolicyListResponse>): PolicyListResponse {
    return PolicyListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PolicyListResponse>): PolicyListResponse {
    const message = createBasePolicyListResponse();
    message.items = object.items?.map((e) => PolicyResponse.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    message.operationStatus = (object.operationStatus !== undefined && object.operationStatus !== null)
      ? OperationStatus.fromPartial(object.operationStatus)
      : undefined;
    return message;
  },
};

function createBasePolicyResponse(): PolicyResponse {
  return { payload: undefined, status: undefined };
}

export const PolicyResponse = {
  encode(message: PolicyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      Policy.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PolicyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = Policy.decode(reader, reader.uint32());
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

  fromJSON(object: any): PolicyResponse {
    return {
      payload: isSet(object.payload) ? Policy.fromJSON(object.payload) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: PolicyResponse): unknown {
    const obj: any = {};
    message.payload !== undefined && (obj.payload = message.payload ? Policy.toJSON(message.payload) : undefined);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<PolicyResponse>): PolicyResponse {
    return PolicyResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PolicyResponse>): PolicyResponse {
    const message = createBasePolicyResponse();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? Policy.fromPartial(object.payload)
      : undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

export type ServiceDefinition = typeof ServiceDefinition;
export const ServiceDefinition = {
  name: "Service",
  fullName: "io.restorecommerce.policy.Service",
  methods: {
    read: {
      name: "Read",
      requestType: ReadRequest,
      requestStream: false,
      responseType: PolicyListResponse,
      responseStream: false,
      options: {},
    },
    create: {
      name: "Create",
      requestType: PolicyList,
      requestStream: false,
      responseType: PolicyListResponse,
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
      requestType: PolicyList,
      requestStream: false,
      responseType: PolicyListResponse,
      responseStream: false,
      options: {},
    },
    upsert: {
      name: "Upsert",
      requestType: PolicyList,
      requestStream: false,
      responseType: PolicyListResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface ServiceImplementation<CallContextExt = {}> {
  read(request: ReadRequest, context: CallContext & CallContextExt): Promise<DeepPartial<PolicyListResponse>>;
  create(request: PolicyList, context: CallContext & CallContextExt): Promise<DeepPartial<PolicyListResponse>>;
  delete(request: DeleteRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteResponse>>;
  update(request: PolicyList, context: CallContext & CallContextExt): Promise<DeepPartial<PolicyListResponse>>;
  upsert(request: PolicyList, context: CallContext & CallContextExt): Promise<DeepPartial<PolicyListResponse>>;
}

export interface ServiceClient<CallOptionsExt = {}> {
  read(request: DeepPartial<ReadRequest>, options?: CallOptions & CallOptionsExt): Promise<PolicyListResponse>;
  create(request: DeepPartial<PolicyList>, options?: CallOptions & CallOptionsExt): Promise<PolicyListResponse>;
  delete(request: DeepPartial<DeleteRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteResponse>;
  update(request: DeepPartial<PolicyList>, options?: CallOptions & CallOptionsExt): Promise<PolicyListResponse>;
  upsert(request: DeepPartial<PolicyList>, options?: CallOptions & CallOptionsExt): Promise<PolicyListResponse>;
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
    "name": "io/restorecommerce/policy.proto",
    "package": "io.restorecommerce.policy",
    "dependency": [
      "io/restorecommerce/resource_base.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/rule.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/options.proto",
    ],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "Policy",
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
        "proto3Optional": false,
      }, {
        "name": "meta",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.meta.Meta",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "meta",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "name",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "description",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "description",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "rules",
        "number": 5,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "rules",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "target",
        "number": 6,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.rule.Target",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "target",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "effect",
        "number": 7,
        "label": 1,
        "type": 14,
        "typeName": ".io.restorecommerce.rule.Effect",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "effect",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "combining_algorithm",
        "number": 8,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "combiningAlgorithm",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "evaluation_cacheable",
        "number": 9,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "evaluationCacheable",
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
      "name": "PolicyRQ",
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
        "proto3Optional": false,
      }, {
        "name": "target",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.rule.Target",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "target",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "combining_algorithm",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "combiningAlgorithm",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "rules",
        "number": 4,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.rule.RuleRQ",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "rules",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "effect",
        "number": 5,
        "label": 1,
        "type": 14,
        "typeName": ".io.restorecommerce.rule.Effect",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "effect",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "has_rules",
        "number": 6,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "hasRules",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "evaluation_cacheable",
        "number": 7,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "evaluationCacheable",
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
      "name": "PolicyList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.policy.Policy",
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
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "PolicyListResponse",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.policy.PolicyResponse",
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
      "name": "PolicyResponse",
      "field": [{
        "name": "payload",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.policy.Policy",
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
    }],
    "enumType": [],
    "service": [{
      "name": "Service",
      "method": [{
        "name": "Read",
        "inputType": ".io.restorecommerce.resourcebase.ReadRequest",
        "outputType": ".io.restorecommerce.policy.PolicyListResponse",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Create",
        "inputType": ".io.restorecommerce.policy.PolicyList",
        "outputType": ".io.restorecommerce.policy.PolicyListResponse",
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
        "inputType": ".io.restorecommerce.policy.PolicyList",
        "outputType": ".io.restorecommerce.policy.PolicyListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Upsert",
        "inputType": ".io.restorecommerce.policy.PolicyList",
        "outputType": ".io.restorecommerce.policy.PolicyListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }],
      "options": { "deprecated": false, "uninterpretedOption": [] },
    }],
    "extension": [],
    "options": undefined,
    "sourceCodeInfo": {
      "location": [{
        "path": [4, 0],
        "span": [14, 0, 24, 1],
        "leadingComments": "*\n A Policy is defined by a set of Rules.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0, 2, 4],
        "span": [19, 2, 28],
        "leadingComments": "",
        "trailingComments": " rule IDs\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0, 2, 5],
        "span": [20, 2, 44],
        "leadingComments": "",
        "trailingComments": " general policy target\n",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {
    ".io.restorecommerce.policy.Policy": Policy,
    ".io.restorecommerce.policy.PolicyRQ": PolicyRQ,
    ".io.restorecommerce.policy.PolicyList": PolicyList,
    ".io.restorecommerce.policy.PolicyListResponse": PolicyListResponse,
    ".io.restorecommerce.policy.PolicyResponse": PolicyResponse,
  },
  dependencies: [protoMetadata1, protoMetadata2, protoMetadata3, protoMetadata4, protoMetadata5, protoMetadata6],
  options: {
    services: { "Service": { options: { "service_name": "policy" }, methods: { "Read": { "is_query": true } } } },
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
