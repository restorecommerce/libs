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
  id?: string | undefined;
  meta?: Meta | undefined;
  name?: string | undefined;
  description?:
    | string
    | undefined;
  /** rule IDs */
  rules: string[];
  /** general policy target */
  target?: Target | undefined;
  effect?: Effect | undefined;
  combining_algorithm?: string | undefined;
  evaluation_cacheable?: boolean | undefined;
}

export interface PolicyRQ {
  id?: string | undefined;
  target?: Target | undefined;
  combining_algorithm?: string | undefined;
  rules: RuleRQ[];
  effect?: Effect | undefined;
  has_rules?: boolean | undefined;
  evaluation_cacheable?: boolean | undefined;
}

export interface PolicyList {
  items: Policy[];
  total_count?: number | undefined;
  subject?: Subject;
}

export interface PolicyListResponse {
  items: PolicyResponse[];
  total_count: number;
  operation_status?: OperationStatus;
}

export interface PolicyResponse {
  payload?: Policy;
  status?: Status;
}

function createBasePolicy(): Policy {
  return {
    id: undefined,
    meta: undefined,
    name: undefined,
    description: undefined,
    rules: [],
    target: undefined,
    effect: undefined,
    combining_algorithm: undefined,
    evaluation_cacheable: undefined,
  };
}

export const Policy = {
  encode(message: Policy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    for (const v of message.rules) {
      writer.uint32(42).string(v!);
    }
    if (message.target !== undefined) {
      Target.encode(message.target, writer.uint32(50).fork()).ldelim();
    }
    if (message.effect !== undefined) {
      writer.uint32(56).int32(effectToNumber(message.effect));
    }
    if (message.combining_algorithm !== undefined) {
      writer.uint32(66).string(message.combining_algorithm);
    }
    if (message.evaluation_cacheable !== undefined) {
      writer.uint32(72).bool(message.evaluation_cacheable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Policy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.meta = Meta.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.description = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.rules.push(reader.string());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.target = Target.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.effect = effectFromJSON(reader.int32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.combining_algorithm = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.evaluation_cacheable = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Policy {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      description: isSet(object.description) ? String(object.description) : undefined,
      rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => String(e)) : [],
      target: isSet(object.target) ? Target.fromJSON(object.target) : undefined,
      effect: isSet(object.effect) ? effectFromJSON(object.effect) : undefined,
      combining_algorithm: isSet(object.combining_algorithm) ? String(object.combining_algorithm) : undefined,
      evaluation_cacheable: isSet(object.evaluation_cacheable) ? Boolean(object.evaluation_cacheable) : undefined,
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
    message.effect !== undefined &&
      (obj.effect = message.effect !== undefined ? effectToJSON(message.effect) : undefined);
    message.combining_algorithm !== undefined && (obj.combining_algorithm = message.combining_algorithm);
    message.evaluation_cacheable !== undefined && (obj.evaluation_cacheable = message.evaluation_cacheable);
    return obj;
  },

  create(base?: DeepPartial<Policy>): Policy {
    return Policy.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Policy>): Policy {
    const message = createBasePolicy();
    message.id = object.id ?? undefined;
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    message.name = object.name ?? undefined;
    message.description = object.description ?? undefined;
    message.rules = object.rules?.map((e) => e) || [];
    message.target = (object.target !== undefined && object.target !== null)
      ? Target.fromPartial(object.target)
      : undefined;
    message.effect = object.effect ?? undefined;
    message.combining_algorithm = object.combining_algorithm ?? undefined;
    message.evaluation_cacheable = object.evaluation_cacheable ?? undefined;
    return message;
  },
};

function createBasePolicyRQ(): PolicyRQ {
  return {
    id: undefined,
    target: undefined,
    combining_algorithm: undefined,
    rules: [],
    effect: undefined,
    has_rules: undefined,
    evaluation_cacheable: undefined,
  };
}

export const PolicyRQ = {
  encode(message: PolicyRQ, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.target !== undefined) {
      Target.encode(message.target, writer.uint32(18).fork()).ldelim();
    }
    if (message.combining_algorithm !== undefined) {
      writer.uint32(26).string(message.combining_algorithm);
    }
    for (const v of message.rules) {
      RuleRQ.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.effect !== undefined) {
      writer.uint32(40).int32(effectToNumber(message.effect));
    }
    if (message.has_rules !== undefined) {
      writer.uint32(48).bool(message.has_rules);
    }
    if (message.evaluation_cacheable !== undefined) {
      writer.uint32(56).bool(message.evaluation_cacheable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PolicyRQ {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicyRQ();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.target = Target.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.combining_algorithm = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.rules.push(RuleRQ.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.effect = effectFromJSON(reader.int32());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.has_rules = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.evaluation_cacheable = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PolicyRQ {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      target: isSet(object.target) ? Target.fromJSON(object.target) : undefined,
      combining_algorithm: isSet(object.combining_algorithm) ? String(object.combining_algorithm) : undefined,
      rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => RuleRQ.fromJSON(e)) : [],
      effect: isSet(object.effect) ? effectFromJSON(object.effect) : undefined,
      has_rules: isSet(object.has_rules) ? Boolean(object.has_rules) : undefined,
      evaluation_cacheable: isSet(object.evaluation_cacheable) ? Boolean(object.evaluation_cacheable) : undefined,
    };
  },

  toJSON(message: PolicyRQ): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.target !== undefined && (obj.target = message.target ? Target.toJSON(message.target) : undefined);
    message.combining_algorithm !== undefined && (obj.combining_algorithm = message.combining_algorithm);
    if (message.rules) {
      obj.rules = message.rules.map((e) => e ? RuleRQ.toJSON(e) : undefined);
    } else {
      obj.rules = [];
    }
    message.effect !== undefined &&
      (obj.effect = message.effect !== undefined ? effectToJSON(message.effect) : undefined);
    message.has_rules !== undefined && (obj.has_rules = message.has_rules);
    message.evaluation_cacheable !== undefined && (obj.evaluation_cacheable = message.evaluation_cacheable);
    return obj;
  },

  create(base?: DeepPartial<PolicyRQ>): PolicyRQ {
    return PolicyRQ.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PolicyRQ>): PolicyRQ {
    const message = createBasePolicyRQ();
    message.id = object.id ?? undefined;
    message.target = (object.target !== undefined && object.target !== null)
      ? Target.fromPartial(object.target)
      : undefined;
    message.combining_algorithm = object.combining_algorithm ?? undefined;
    message.rules = object.rules?.map((e) => RuleRQ.fromPartial(e)) || [];
    message.effect = object.effect ?? undefined;
    message.has_rules = object.has_rules ?? undefined;
    message.evaluation_cacheable = object.evaluation_cacheable ?? undefined;
    return message;
  },
};

function createBasePolicyList(): PolicyList {
  return { items: [], total_count: undefined, subject: undefined };
}

export const PolicyList = {
  encode(message: PolicyList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      Policy.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== undefined) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PolicyList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicyList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(Policy.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.total_count = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PolicyList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => Policy.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : undefined,
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
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<PolicyList>): PolicyList {
    return PolicyList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PolicyList>): PolicyList {
    const message = createBasePolicyList();
    message.items = object.items?.map((e) => Policy.fromPartial(e)) || [];
    message.total_count = object.total_count ?? undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBasePolicyListResponse(): PolicyListResponse {
  return { items: [], total_count: 0, operation_status: undefined };
}

export const PolicyListResponse = {
  encode(message: PolicyListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      PolicyResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(message.operation_status, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PolicyListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicyListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(PolicyResponse.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.total_count = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.operation_status = OperationStatus.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PolicyListResponse {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => PolicyResponse.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      operation_status: isSet(object.operation_status) ? OperationStatus.fromJSON(object.operation_status) : undefined,
    };
  },

  toJSON(message: PolicyListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? PolicyResponse.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status ? OperationStatus.toJSON(message.operation_status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<PolicyListResponse>): PolicyListResponse {
    return PolicyListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PolicyListResponse>): PolicyListResponse {
    const message = createBasePolicyListResponse();
    message.items = object.items?.map((e) => PolicyResponse.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.operation_status = (object.operation_status !== undefined && object.operation_status !== null)
      ? OperationStatus.fromPartial(object.operation_status)
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payload = Policy.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.status = Status.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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

export type PolicyServiceDefinition = typeof PolicyServiceDefinition;
export const PolicyServiceDefinition = {
  name: "PolicyService",
  fullName: "io.restorecommerce.policy.PolicyService",
  methods: {
    read: {
      name: "Read",
      requestType: ReadRequest,
      requestStream: false,
      responseType: PolicyListResponse,
      responseStream: false,
      options: { _unknownFields: { 248008: [Buffer.from([1])] } },
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

export interface PolicyServiceImplementation<CallContextExt = {}> {
  read(request: ReadRequest, context: CallContext & CallContextExt): Promise<DeepPartial<PolicyListResponse>>;
  create(request: PolicyList, context: CallContext & CallContextExt): Promise<DeepPartial<PolicyListResponse>>;
  delete(request: DeleteRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteResponse>>;
  update(request: PolicyList, context: CallContext & CallContextExt): Promise<DeepPartial<PolicyListResponse>>;
  upsert(request: PolicyList, context: CallContext & CallContextExt): Promise<DeepPartial<PolicyListResponse>>;
}

export interface PolicyServiceClient<CallOptionsExt = {}> {
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
        "oneofIndex": 4,
        "jsonName": "target",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "effect",
        "number": 7,
        "label": 1,
        "type": 14,
        "typeName": ".io.restorecommerce.rule.Effect",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 5,
        "jsonName": "effect",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "combining_algorithm",
        "number": 8,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 6,
        "jsonName": "combiningAlgorithm",
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
        "oneofIndex": 7,
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
        { "name": "_effect", "options": undefined },
        { "name": "_combining_algorithm", "options": undefined },
        { "name": "_evaluation_cacheable", "options": undefined },
      ],
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
        "name": "combining_algorithm",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "combiningAlgorithm",
        "options": undefined,
        "proto3Optional": true,
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
        "oneofIndex": 3,
        "jsonName": "effect",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "has_rules",
        "number": 6,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "hasRules",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "evaluation_cacheable",
        "number": 7,
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
        { "name": "_combining_algorithm", "options": undefined },
        { "name": "_effect", "options": undefined },
        { "name": "_has_rules", "options": undefined },
        { "name": "_evaluation_cacheable", "options": undefined },
      ],
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
      "name": "PolicyService",
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
      "options": undefined,
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
        "span": [20, 2, 53],
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
  options: { services: { "PolicyService": { options: undefined, methods: { "Read": { "is_query": true } } } } },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
