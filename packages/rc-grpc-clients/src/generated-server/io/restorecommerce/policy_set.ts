/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { protoMetadata as protoMetadata4, Subject } from "./auth";
import { Meta, protoMetadata as protoMetadata2 } from "./meta";
import { protoMetadata as protoMetadata7 } from "./options";
import { PolicyRQ, protoMetadata as protoMetadata3 } from "./policy";
import { DeleteRequest, DeleteResponse, protoMetadata as protoMetadata1, ReadRequest } from "./resource_base";
import { Effect, effectFromJSON, effectToJSON, effectToNumber, protoMetadata as protoMetadata5, Target } from "./rule";
import { OperationStatus, protoMetadata as protoMetadata6, Status } from "./status";

export const protobufPackage = "io.restorecommerce.policy_set";

export interface PolicySet {
  id: string;
  meta?: Meta;
  name: string;
  description: string;
  target?: Target;
  combining_algorithm: string;
  /** policy IDs */
  policies: string[];
}

export interface PolicySetList {
  items: PolicySet[];
  total_count: number;
  subject?: Subject;
}

export interface PolicySetListResponse {
  items: PolicySetResponse[];
  total_count: number;
  operation_status?: OperationStatus;
}

export interface PolicySetResponse {
  payload?: PolicySet;
  status?: Status;
}

export interface PolicySetRQ {
  id: string;
  target?: Target;
  combining_algorithm: string;
  policies: PolicyRQ[];
  effect: Effect;
}

function createBasePolicySet(): PolicySet {
  return {
    id: "",
    meta: undefined,
    name: "",
    description: "",
    target: undefined,
    combining_algorithm: "",
    policies: [],
  };
}

export const PolicySet = {
  encode(message: PolicySet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.combining_algorithm !== "") {
      writer.uint32(50).string(message.combining_algorithm);
    }
    for (const v of message.policies) {
      writer.uint32(58).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PolicySet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicySet();
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
          message.combining_algorithm = reader.string();
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

  fromJSON(object: any): PolicySet {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      target: isSet(object.target) ? Target.fromJSON(object.target) : undefined,
      combining_algorithm: isSet(object.combining_algorithm) ? String(object.combining_algorithm) : "",
      policies: Array.isArray(object?.policies) ? object.policies.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: PolicySet): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.target !== undefined && (obj.target = message.target ? Target.toJSON(message.target) : undefined);
    message.combining_algorithm !== undefined && (obj.combining_algorithm = message.combining_algorithm);
    if (message.policies) {
      obj.policies = message.policies.map((e) => e);
    } else {
      obj.policies = [];
    }
    return obj;
  },

  create(base?: DeepPartial<PolicySet>): PolicySet {
    return PolicySet.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PolicySet>): PolicySet {
    const message = createBasePolicySet();
    message.id = object.id ?? "";
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.target = (object.target !== undefined && object.target !== null)
      ? Target.fromPartial(object.target)
      : undefined;
    message.combining_algorithm = object.combining_algorithm ?? "";
    message.policies = object.policies?.map((e) => e) || [];
    return message;
  },
};

function createBasePolicySetList(): PolicySetList {
  return { items: [], total_count: 0, subject: undefined };
}

export const PolicySetList = {
  encode(message: PolicySetList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      PolicySet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PolicySetList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicySetList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(PolicySet.decode(reader, reader.uint32()));
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

  fromJSON(object: any): PolicySetList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => PolicySet.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: PolicySetList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? PolicySet.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<PolicySetList>): PolicySetList {
    return PolicySetList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PolicySetList>): PolicySetList {
    const message = createBasePolicySetList();
    message.items = object.items?.map((e) => PolicySet.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBasePolicySetListResponse(): PolicySetListResponse {
  return { items: [], total_count: 0, operation_status: undefined };
}

export const PolicySetListResponse = {
  encode(message: PolicySetListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      PolicySetResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(message.operation_status, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PolicySetListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicySetListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(PolicySetResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): PolicySetListResponse {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => PolicySetResponse.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      operation_status: isSet(object.operation_status) ? OperationStatus.fromJSON(object.operation_status) : undefined,
    };
  },

  toJSON(message: PolicySetListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? PolicySetResponse.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status ? OperationStatus.toJSON(message.operation_status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<PolicySetListResponse>): PolicySetListResponse {
    return PolicySetListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PolicySetListResponse>): PolicySetListResponse {
    const message = createBasePolicySetListResponse();
    message.items = object.items?.map((e) => PolicySetResponse.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.operation_status = (object.operation_status !== undefined && object.operation_status !== null)
      ? OperationStatus.fromPartial(object.operation_status)
      : undefined;
    return message;
  },
};

function createBasePolicySetResponse(): PolicySetResponse {
  return { payload: undefined, status: undefined };
}

export const PolicySetResponse = {
  encode(message: PolicySetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      PolicySet.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PolicySetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicySetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = PolicySet.decode(reader, reader.uint32());
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

  fromJSON(object: any): PolicySetResponse {
    return {
      payload: isSet(object.payload) ? PolicySet.fromJSON(object.payload) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: PolicySetResponse): unknown {
    const obj: any = {};
    message.payload !== undefined && (obj.payload = message.payload ? PolicySet.toJSON(message.payload) : undefined);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<PolicySetResponse>): PolicySetResponse {
    return PolicySetResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PolicySetResponse>): PolicySetResponse {
    const message = createBasePolicySetResponse();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? PolicySet.fromPartial(object.payload)
      : undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBasePolicySetRQ(): PolicySetRQ {
  return { id: "", target: undefined, combining_algorithm: "", policies: [], effect: Effect.PERMIT };
}

export const PolicySetRQ = {
  encode(message: PolicySetRQ, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.target !== undefined) {
      Target.encode(message.target, writer.uint32(18).fork()).ldelim();
    }
    if (message.combining_algorithm !== "") {
      writer.uint32(26).string(message.combining_algorithm);
    }
    for (const v of message.policies) {
      PolicyRQ.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.effect !== Effect.PERMIT) {
      writer.uint32(40).int32(effectToNumber(message.effect));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PolicySetRQ {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicySetRQ();
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
          message.combining_algorithm = reader.string();
          break;
        case 4:
          message.policies.push(PolicyRQ.decode(reader, reader.uint32()));
          break;
        case 5:
          message.effect = effectFromJSON(reader.int32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PolicySetRQ {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      target: isSet(object.target) ? Target.fromJSON(object.target) : undefined,
      combining_algorithm: isSet(object.combining_algorithm) ? String(object.combining_algorithm) : "",
      policies: Array.isArray(object?.policies) ? object.policies.map((e: any) => PolicyRQ.fromJSON(e)) : [],
      effect: isSet(object.effect) ? effectFromJSON(object.effect) : Effect.PERMIT,
    };
  },

  toJSON(message: PolicySetRQ): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.target !== undefined && (obj.target = message.target ? Target.toJSON(message.target) : undefined);
    message.combining_algorithm !== undefined && (obj.combining_algorithm = message.combining_algorithm);
    if (message.policies) {
      obj.policies = message.policies.map((e) => e ? PolicyRQ.toJSON(e) : undefined);
    } else {
      obj.policies = [];
    }
    message.effect !== undefined && (obj.effect = effectToJSON(message.effect));
    return obj;
  },

  create(base?: DeepPartial<PolicySetRQ>): PolicySetRQ {
    return PolicySetRQ.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PolicySetRQ>): PolicySetRQ {
    const message = createBasePolicySetRQ();
    message.id = object.id ?? "";
    message.target = (object.target !== undefined && object.target !== null)
      ? Target.fromPartial(object.target)
      : undefined;
    message.combining_algorithm = object.combining_algorithm ?? "";
    message.policies = object.policies?.map((e) => PolicyRQ.fromPartial(e)) || [];
    message.effect = object.effect ?? Effect.PERMIT;
    return message;
  },
};

export type ServiceDefinition = typeof ServiceDefinition;
export const ServiceDefinition = {
  name: "Service",
  fullName: "io.restorecommerce.policy_set.Service",
  methods: {
    read: {
      name: "Read",
      requestType: ReadRequest,
      requestStream: false,
      responseType: PolicySetListResponse,
      responseStream: false,
      options: {},
    },
    create: {
      name: "Create",
      requestType: PolicySetList,
      requestStream: false,
      responseType: PolicySetListResponse,
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
      requestType: PolicySetList,
      requestStream: false,
      responseType: PolicySetListResponse,
      responseStream: false,
      options: {},
    },
    upsert: {
      name: "Upsert",
      requestType: PolicySetList,
      requestStream: false,
      responseType: PolicySetListResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface ServiceImplementation<CallContextExt = {}> {
  read(request: ReadRequest, context: CallContext & CallContextExt): Promise<DeepPartial<PolicySetListResponse>>;
  create(request: PolicySetList, context: CallContext & CallContextExt): Promise<DeepPartial<PolicySetListResponse>>;
  delete(request: DeleteRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteResponse>>;
  update(request: PolicySetList, context: CallContext & CallContextExt): Promise<DeepPartial<PolicySetListResponse>>;
  upsert(request: PolicySetList, context: CallContext & CallContextExt): Promise<DeepPartial<PolicySetListResponse>>;
}

export interface ServiceClient<CallOptionsExt = {}> {
  read(request: DeepPartial<ReadRequest>, options?: CallOptions & CallOptionsExt): Promise<PolicySetListResponse>;
  create(request: DeepPartial<PolicySetList>, options?: CallOptions & CallOptionsExt): Promise<PolicySetListResponse>;
  delete(request: DeepPartial<DeleteRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteResponse>;
  update(request: DeepPartial<PolicySetList>, options?: CallOptions & CallOptionsExt): Promise<PolicySetListResponse>;
  upsert(request: DeepPartial<PolicySetList>, options?: CallOptions & CallOptionsExt): Promise<PolicySetListResponse>;
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
    "name": "io/restorecommerce/policy_set.proto",
    "package": "io.restorecommerce.policy_set",
    "dependency": [
      "io/restorecommerce/resource_base.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/policy.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/rule.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/options.proto",
    ],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "PolicySet",
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
        "name": "target",
        "number": 5,
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
        "number": 6,
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
        "name": "policies",
        "number": 7,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "policies",
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
      "name": "PolicySetList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.policy_set.PolicySet",
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
      "name": "PolicySetListResponse",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.policy_set.PolicySetResponse",
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
      "name": "PolicySetResponse",
      "field": [{
        "name": "payload",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.policy_set.PolicySet",
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
      "name": "PolicySetRQ",
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
        "name": "policies",
        "number": 4,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.policy.PolicyRQ",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "policies",
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
        "outputType": ".io.restorecommerce.policy_set.PolicySetListResponse",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Create",
        "inputType": ".io.restorecommerce.policy_set.PolicySetList",
        "outputType": ".io.restorecommerce.policy_set.PolicySetListResponse",
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
        "inputType": ".io.restorecommerce.policy_set.PolicySetList",
        "outputType": ".io.restorecommerce.policy_set.PolicySetListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Upsert",
        "inputType": ".io.restorecommerce.policy_set.PolicySetList",
        "outputType": ".io.restorecommerce.policy_set.PolicySetListResponse",
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
        "path": [4, 0, 2, 6],
        "span": [19, 2, 31],
        "leadingComments": "",
        "trailingComments": " policy IDs\n",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {
    ".io.restorecommerce.policy_set.PolicySet": PolicySet,
    ".io.restorecommerce.policy_set.PolicySetList": PolicySetList,
    ".io.restorecommerce.policy_set.PolicySetListResponse": PolicySetListResponse,
    ".io.restorecommerce.policy_set.PolicySetResponse": PolicySetResponse,
    ".io.restorecommerce.policy_set.PolicySetRQ": PolicySetRQ,
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
  options: {
    services: { "Service": { options: { "service_name": "policy_set" }, methods: { "Read": { "is_query": true } } } },
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
