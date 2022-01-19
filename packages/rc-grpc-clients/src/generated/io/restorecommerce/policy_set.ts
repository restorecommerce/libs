/* eslint-disable */
import { FileDescriptorProto } from "ts-proto-descriptors/google/protobuf/descriptor";
import {
  Meta,
  protoMetadata as protoMetadata2,
} from "../../io/restorecommerce/meta";
import {
  Target,
  Effect,
  protoMetadata as protoMetadata5,
  effectFromJSON,
  effectToJSON,
} from "../../io/restorecommerce/rule";
import {
  Subject,
  protoMetadata as protoMetadata4,
} from "../../io/restorecommerce/auth";
import {
  OperationStatus,
  Status,
  protoMetadata as protoMetadata6,
} from "../../io/restorecommerce/status";
import {
  protoMetadata as protoMetadata1,
  DeleteResponse,
  ReadRequest,
  DeleteRequest,
} from "../../io/restorecommerce/resource_base";
import {
  protoMetadata as protoMetadata3,
  PolicyRQ,
} from "../../io/restorecommerce/policy";
import { Writer, Reader } from "protobufjs/minimal";

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

const basePolicySet: object = {
  id: "",
  name: "",
  description: "",
  combining_algorithm: "",
  policies: "",
};

export const PolicySet = {
  encode(message: PolicySet, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): PolicySet {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(basePolicySet) as PolicySet;
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
    const message = globalThis.Object.create(basePolicySet) as PolicySet;
    message.policies = [];
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
    if (
      object.combining_algorithm !== undefined &&
      object.combining_algorithm !== null
    ) {
      message.combining_algorithm = String(object.combining_algorithm);
    } else {
      message.combining_algorithm = "";
    }
    if (object.policies !== undefined && object.policies !== null) {
      for (const e of object.policies) {
        message.policies.push(String(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<PolicySet>): PolicySet {
    const message = { ...basePolicySet } as PolicySet;
    message.policies = [];
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
    if (
      object.combining_algorithm !== undefined &&
      object.combining_algorithm !== null
    ) {
      message.combining_algorithm = object.combining_algorithm;
    } else {
      message.combining_algorithm = "";
    }
    if (object.policies !== undefined && object.policies !== null) {
      for (const e of object.policies) {
        message.policies.push(e);
      }
    }
    return message;
  },

  toJSON(message: PolicySet): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.target !== undefined &&
      (obj.target = message.target ? Target.toJSON(message.target) : undefined);
    message.combining_algorithm !== undefined &&
      (obj.combining_algorithm = message.combining_algorithm);
    if (message.policies) {
      obj.policies = message.policies.map((e) => e);
    } else {
      obj.policies = [];
    }
    return obj;
  },
};

const basePolicySetList: object = { total_count: 0 };

export const PolicySetList = {
  encode(message: PolicySetList, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): PolicySetList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      basePolicySetList
    ) as PolicySetList;
    message.items = [];
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
    const message = globalThis.Object.create(
      basePolicySetList
    ) as PolicySetList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(PolicySet.fromJSON(e));
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

  fromPartial(object: DeepPartial<PolicySetList>): PolicySetList {
    const message = { ...basePolicySetList } as PolicySetList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(PolicySet.fromPartial(e));
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

  toJSON(message: PolicySetList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? PolicySet.toJSON(e) : undefined
      );
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

const basePolicySetListResponse: object = { total_count: 0 };

export const PolicySetListResponse = {
  encode(
    message: PolicySetListResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.items) {
      PolicySetResponse.encode(v!, writer.uint32(10).fork()).ldelim();
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

  decode(input: Reader | Uint8Array, length?: number): PolicySetListResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      basePolicySetListResponse
    ) as PolicySetListResponse;
    message.items = [];
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

  fromJSON(object: any): PolicySetListResponse {
    const message = globalThis.Object.create(
      basePolicySetListResponse
    ) as PolicySetListResponse;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(PolicySetResponse.fromJSON(e));
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

  fromPartial(
    object: DeepPartial<PolicySetListResponse>
  ): PolicySetListResponse {
    const message = { ...basePolicySetListResponse } as PolicySetListResponse;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(PolicySetResponse.fromPartial(e));
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

  toJSON(message: PolicySetListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? PolicySetResponse.toJSON(e) : undefined
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

const basePolicySetResponse: object = {};

export const PolicySetResponse = {
  encode(message: PolicySetResponse, writer: Writer = Writer.create()): Writer {
    if (message.payload !== undefined) {
      PolicySet.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PolicySetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      basePolicySetResponse
    ) as PolicySetResponse;
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
    const message = globalThis.Object.create(
      basePolicySetResponse
    ) as PolicySetResponse;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = PolicySet.fromJSON(object.payload);
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

  fromPartial(object: DeepPartial<PolicySetResponse>): PolicySetResponse {
    const message = { ...basePolicySetResponse } as PolicySetResponse;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = PolicySet.fromPartial(object.payload);
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

  toJSON(message: PolicySetResponse): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload
        ? PolicySet.toJSON(message.payload)
        : undefined);
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },
};

const basePolicySetRQ: object = { id: "", combining_algorithm: "", effect: 0 };

export const PolicySetRQ = {
  encode(message: PolicySetRQ, writer: Writer = Writer.create()): Writer {
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
    if (message.effect !== 0) {
      writer.uint32(40).int32(message.effect);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PolicySetRQ {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(basePolicySetRQ) as PolicySetRQ;
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
          message.combining_algorithm = reader.string();
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

  fromJSON(object: any): PolicySetRQ {
    const message = globalThis.Object.create(basePolicySetRQ) as PolicySetRQ;
    message.policies = [];
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
      object.combining_algorithm !== undefined &&
      object.combining_algorithm !== null
    ) {
      message.combining_algorithm = String(object.combining_algorithm);
    } else {
      message.combining_algorithm = "";
    }
    if (object.policies !== undefined && object.policies !== null) {
      for (const e of object.policies) {
        message.policies.push(PolicyRQ.fromJSON(e));
      }
    }
    if (object.effect !== undefined && object.effect !== null) {
      message.effect = effectFromJSON(object.effect);
    } else {
      message.effect = 0;
    }
    return message;
  },

  fromPartial(object: DeepPartial<PolicySetRQ>): PolicySetRQ {
    const message = { ...basePolicySetRQ } as PolicySetRQ;
    message.policies = [];
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
      object.combining_algorithm !== undefined &&
      object.combining_algorithm !== null
    ) {
      message.combining_algorithm = object.combining_algorithm;
    } else {
      message.combining_algorithm = "";
    }
    if (object.policies !== undefined && object.policies !== null) {
      for (const e of object.policies) {
        message.policies.push(PolicyRQ.fromPartial(e));
      }
    }
    if (object.effect !== undefined && object.effect !== null) {
      message.effect = object.effect;
    } else {
      message.effect = 0;
    }
    return message;
  },

  toJSON(message: PolicySetRQ): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.target !== undefined &&
      (obj.target = message.target ? Target.toJSON(message.target) : undefined);
    message.combining_algorithm !== undefined &&
      (obj.combining_algorithm = message.combining_algorithm);
    if (message.policies) {
      obj.policies = message.policies.map((e) =>
        e ? PolicyRQ.toJSON(e) : undefined
      );
    } else {
      obj.policies = [];
    }
    message.effect !== undefined && (obj.effect = effectToJSON(message.effect));
    return obj;
  },
};

export interface Service {
  Read(request: ReadRequest): Promise<PolicySetListResponse>;
  Create(request: PolicySetList): Promise<PolicySetListResponse>;
  Delete(request: DeleteRequest): Promise<DeleteResponse>;
  Update(request: PolicySetList): Promise<PolicySetListResponse>;
  Upsert(request: PolicySetList): Promise<PolicySetListResponse>;
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
      "io/restorecommerce/policy.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/rule.proto",
      "io/restorecommerce/status.proto",
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
          {
            name: "target",
            number: 5,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.rule.Target",
            jsonName: "target",
          },
          {
            name: "combining_algorithm",
            number: 6,
            label: 1,
            type: 9,
            jsonName: "combiningAlgorithm",
          },
          {
            name: "policies",
            number: 7,
            label: 3,
            type: 9,
            jsonName: "policies",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "PolicySet",
      },
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.policy_set.PolicySet",
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
        name: "PolicySetList",
      },
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.policy_set.PolicySetResponse",
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
        name: "PolicySetListResponse",
      },
      {
        field: [
          {
            name: "payload",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.policy_set.PolicySet",
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
        name: "PolicySetResponse",
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
            name: "policies",
            number: 4,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.policy.PolicyRQ",
            jsonName: "policies",
          },
          {
            name: "effect",
            number: 5,
            label: 1,
            type: 14,
            typeName: ".io.restorecommerce.rule.Effect",
            jsonName: "effect",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "PolicySetRQ",
      },
    ],
    enumType: [],
    service: [
      {
        method: [
          {
            name: "Read",
            inputType: ".io.restorecommerce.resourcebase.ReadRequest",
            outputType: ".io.restorecommerce.policy_set.PolicySetListResponse",
          },
          {
            name: "Create",
            inputType: ".io.restorecommerce.policy_set.PolicySetList",
            outputType: ".io.restorecommerce.policy_set.PolicySetListResponse",
          },
          {
            name: "Delete",
            inputType: ".io.restorecommerce.resourcebase.DeleteRequest",
            outputType: ".io.restorecommerce.resourcebase.DeleteResponse",
          },
          {
            name: "Update",
            inputType: ".io.restorecommerce.policy_set.PolicySetList",
            outputType: ".io.restorecommerce.policy_set.PolicySetListResponse",
          },
          {
            name: "Upsert",
            inputType: ".io.restorecommerce.policy_set.PolicySetList",
            outputType: ".io.restorecommerce.policy_set.PolicySetListResponse",
          },
        ],
        name: "Service",
      },
    ],
    extension: [],
    name: "io/restorecommerce/policy_set.proto",
    package: "io.restorecommerce.policy_set",
    sourceCodeInfo: {
      location: [
        {
          path: [4, 0, 2, 6],
          span: [18, 2, 31],
          leadingDetachedComments: [],
          trailingComments: " policy IDs\n",
        },
      ],
    },
    syntax: "proto3",
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
