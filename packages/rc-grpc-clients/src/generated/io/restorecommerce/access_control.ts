/* eslint-disable */
import { FileDescriptorProto } from "ts-proto-descriptors/google/protobuf/descriptor";
import {
  Target,
  protoMetadata as protoMetadata2,
} from "../../io/restorecommerce/rule";
import {
  Any,
  protoMetadata as protoMetadata1,
} from "../../google/protobuf/any";
import {
  OperationStatus,
  protoMetadata as protoMetadata4,
} from "../../io/restorecommerce/status";
import {
  protoMetadata as protoMetadata3,
  PolicySetRQ,
} from "../../io/restorecommerce/policy_set";
import {
  protoMetadata as protoMetadata5,
  Attribute,
} from "../../io/restorecommerce/attribute";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "io.restorecommerce.access_control";

export interface Request {
  target?: Target;
  /**
   * generic data structure which can be provided
   * to a contextQuery (see io/restorecommerce/rule.proto)
   */
  context?: Context;
}

export interface Context {
  subject?: Any;
  resources: Any[];
  security?: Any;
}

export interface Response {
  decision: Response_Decision;
  obligation: Attribute[];
  evaluationCacheable: boolean;
  operationStatus?: OperationStatus;
}

export enum Response_Decision {
  PERMIT = 0,
  DENY = 1,
  NOT_APPLICABLE = 2,
  INDETERMINATE = 3,
  UNRECOGNIZED = -1,
}

export function response_DecisionFromJSON(object: any): Response_Decision {
  switch (object) {
    case 0:
    case "PERMIT":
      return Response_Decision.PERMIT;
    case 1:
    case "DENY":
      return Response_Decision.DENY;
    case 2:
    case "NOT_APPLICABLE":
      return Response_Decision.NOT_APPLICABLE;
    case 3:
    case "INDETERMINATE":
      return Response_Decision.INDETERMINATE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Response_Decision.UNRECOGNIZED;
  }
}

export function response_DecisionToJSON(object: Response_Decision): string {
  switch (object) {
    case Response_Decision.PERMIT:
      return "PERMIT";
    case Response_Decision.DENY:
      return "DENY";
    case Response_Decision.NOT_APPLICABLE:
      return "NOT_APPLICABLE";
    case Response_Decision.INDETERMINATE:
      return "INDETERMINATE";
    default:
      return "UNKNOWN";
  }
}

export interface ReverseQuery {
  policySets: PolicySetRQ[];
  obligation: Attribute[];
  operationStatus?: OperationStatus;
}

const baseRequest: object = {};

export const Request = {
  encode(message: Request, writer: Writer = Writer.create()): Writer {
    if (message.target !== undefined) {
      Target.encode(message.target, writer.uint32(10).fork()).ldelim();
    }
    if (message.context !== undefined) {
      Context.encode(message.context, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Request {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseRequest) as Request;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.target = Target.decode(reader, reader.uint32());
          break;
        case 2:
          message.context = Context.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Request {
    const message = globalThis.Object.create(baseRequest) as Request;
    if (object.target !== undefined && object.target !== null) {
      message.target = Target.fromJSON(object.target);
    } else {
      message.target = undefined;
    }
    if (object.context !== undefined && object.context !== null) {
      message.context = Context.fromJSON(object.context);
    } else {
      message.context = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<Request>): Request {
    const message = { ...baseRequest } as Request;
    if (object.target !== undefined && object.target !== null) {
      message.target = Target.fromPartial(object.target);
    } else {
      message.target = undefined;
    }
    if (object.context !== undefined && object.context !== null) {
      message.context = Context.fromPartial(object.context);
    } else {
      message.context = undefined;
    }
    return message;
  },

  toJSON(message: Request): unknown {
    const obj: any = {};
    message.target !== undefined &&
      (obj.target = message.target ? Target.toJSON(message.target) : undefined);
    message.context !== undefined &&
      (obj.context = message.context
        ? Context.toJSON(message.context)
        : undefined);
    return obj;
  },
};

const baseContext: object = {};

export const Context = {
  encode(message: Context, writer: Writer = Writer.create()): Writer {
    if (message.subject !== undefined) {
      Any.encode(message.subject, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.resources) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.security !== undefined) {
      Any.encode(message.security, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Context {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseContext) as Context;
    message.resources = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subject = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.resources.push(Any.decode(reader, reader.uint32()));
          break;
        case 3:
          message.security = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Context {
    const message = globalThis.Object.create(baseContext) as Context;
    message.resources = [];
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Any.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    if (object.resources !== undefined && object.resources !== null) {
      for (const e of object.resources) {
        message.resources.push(Any.fromJSON(e));
      }
    }
    if (object.security !== undefined && object.security !== null) {
      message.security = Any.fromJSON(object.security);
    } else {
      message.security = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<Context>): Context {
    const message = { ...baseContext } as Context;
    message.resources = [];
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Any.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    if (object.resources !== undefined && object.resources !== null) {
      for (const e of object.resources) {
        message.resources.push(Any.fromPartial(e));
      }
    }
    if (object.security !== undefined && object.security !== null) {
      message.security = Any.fromPartial(object.security);
    } else {
      message.security = undefined;
    }
    return message;
  },

  toJSON(message: Context): unknown {
    const obj: any = {};
    message.subject !== undefined &&
      (obj.subject = message.subject ? Any.toJSON(message.subject) : undefined);
    if (message.resources) {
      obj.resources = message.resources.map((e) =>
        e ? Any.toJSON(e) : undefined
      );
    } else {
      obj.resources = [];
    }
    message.security !== undefined &&
      (obj.security = message.security
        ? Any.toJSON(message.security)
        : undefined);
    return obj;
  },
};

const baseResponse: object = { decision: 0, evaluationCacheable: false };

export const Response = {
  encode(message: Response, writer: Writer = Writer.create()): Writer {
    if (message.decision !== 0) {
      writer.uint32(8).int32(message.decision);
    }
    for (const v of message.obligation) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.evaluationCacheable === true) {
      writer.uint32(24).bool(message.evaluationCacheable);
    }
    if (message.operationStatus !== undefined) {
      OperationStatus.encode(
        message.operationStatus,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Response {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseResponse) as Response;
    message.obligation = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.decision = reader.int32() as any;
          break;
        case 2:
          message.obligation.push(Attribute.decode(reader, reader.uint32()));
          break;
        case 3:
          message.evaluationCacheable = reader.bool();
          break;
        case 4:
          message.operationStatus = OperationStatus.decode(
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

  fromJSON(object: any): Response {
    const message = globalThis.Object.create(baseResponse) as Response;
    message.obligation = [];
    if (object.decision !== undefined && object.decision !== null) {
      message.decision = response_DecisionFromJSON(object.decision);
    } else {
      message.decision = 0;
    }
    if (object.obligation !== undefined && object.obligation !== null) {
      for (const e of object.obligation) {
        message.obligation.push(Attribute.fromJSON(e));
      }
    }
    if (
      object.evaluationCacheable !== undefined &&
      object.evaluationCacheable !== null
    ) {
      message.evaluationCacheable = Boolean(object.evaluationCacheable);
    } else {
      message.evaluationCacheable = false;
    }
    if (
      object.operationStatus !== undefined &&
      object.operationStatus !== null
    ) {
      message.operationStatus = OperationStatus.fromJSON(
        object.operationStatus
      );
    } else {
      message.operationStatus = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<Response>): Response {
    const message = { ...baseResponse } as Response;
    message.obligation = [];
    if (object.decision !== undefined && object.decision !== null) {
      message.decision = object.decision;
    } else {
      message.decision = 0;
    }
    if (object.obligation !== undefined && object.obligation !== null) {
      for (const e of object.obligation) {
        message.obligation.push(Attribute.fromPartial(e));
      }
    }
    if (
      object.evaluationCacheable !== undefined &&
      object.evaluationCacheable !== null
    ) {
      message.evaluationCacheable = object.evaluationCacheable;
    } else {
      message.evaluationCacheable = false;
    }
    if (
      object.operationStatus !== undefined &&
      object.operationStatus !== null
    ) {
      message.operationStatus = OperationStatus.fromPartial(
        object.operationStatus
      );
    } else {
      message.operationStatus = undefined;
    }
    return message;
  },

  toJSON(message: Response): unknown {
    const obj: any = {};
    message.decision !== undefined &&
      (obj.decision = response_DecisionToJSON(message.decision));
    if (message.obligation) {
      obj.obligation = message.obligation.map((e) =>
        e ? Attribute.toJSON(e) : undefined
      );
    } else {
      obj.obligation = [];
    }
    message.evaluationCacheable !== undefined &&
      (obj.evaluationCacheable = message.evaluationCacheable);
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus
        ? OperationStatus.toJSON(message.operationStatus)
        : undefined);
    return obj;
  },
};

const baseReverseQuery: object = {};

export const ReverseQuery = {
  encode(message: ReverseQuery, writer: Writer = Writer.create()): Writer {
    for (const v of message.policySets) {
      PolicySetRQ.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.obligation) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.operationStatus !== undefined) {
      OperationStatus.encode(
        message.operationStatus,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ReverseQuery {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseReverseQuery) as ReverseQuery;
    message.policySets = [];
    message.obligation = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policySets.push(PolicySetRQ.decode(reader, reader.uint32()));
          break;
        case 2:
          message.obligation.push(Attribute.decode(reader, reader.uint32()));
          break;
        case 3:
          message.operationStatus = OperationStatus.decode(
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

  fromJSON(object: any): ReverseQuery {
    const message = globalThis.Object.create(baseReverseQuery) as ReverseQuery;
    message.policySets = [];
    message.obligation = [];
    if (object.policySets !== undefined && object.policySets !== null) {
      for (const e of object.policySets) {
        message.policySets.push(PolicySetRQ.fromJSON(e));
      }
    }
    if (object.obligation !== undefined && object.obligation !== null) {
      for (const e of object.obligation) {
        message.obligation.push(Attribute.fromJSON(e));
      }
    }
    if (
      object.operationStatus !== undefined &&
      object.operationStatus !== null
    ) {
      message.operationStatus = OperationStatus.fromJSON(
        object.operationStatus
      );
    } else {
      message.operationStatus = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<ReverseQuery>): ReverseQuery {
    const message = { ...baseReverseQuery } as ReverseQuery;
    message.policySets = [];
    message.obligation = [];
    if (object.policySets !== undefined && object.policySets !== null) {
      for (const e of object.policySets) {
        message.policySets.push(PolicySetRQ.fromPartial(e));
      }
    }
    if (object.obligation !== undefined && object.obligation !== null) {
      for (const e of object.obligation) {
        message.obligation.push(Attribute.fromPartial(e));
      }
    }
    if (
      object.operationStatus !== undefined &&
      object.operationStatus !== null
    ) {
      message.operationStatus = OperationStatus.fromPartial(
        object.operationStatus
      );
    } else {
      message.operationStatus = undefined;
    }
    return message;
  },

  toJSON(message: ReverseQuery): unknown {
    const obj: any = {};
    if (message.policySets) {
      obj.policySets = message.policySets.map((e) =>
        e ? PolicySetRQ.toJSON(e) : undefined
      );
    } else {
      obj.policySets = [];
    }
    if (message.obligation) {
      obj.obligation = message.obligation.map((e) =>
        e ? Attribute.toJSON(e) : undefined
      );
    } else {
      obj.obligation = [];
    }
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus
        ? OperationStatus.toJSON(message.operationStatus)
        : undefined);
    return obj;
  },
};

export interface Service {
  IsAllowed(request: Request): Promise<Response>;
  WhatIsAllowed(request: Request): Promise<ReverseQuery>;
}

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto.fromPartial({
    dependency: [
      "google/protobuf/any.proto",
      "io/restorecommerce/rule.proto",
      "io/restorecommerce/policy_set.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/attribute.proto",
    ],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        field: [
          {
            name: "target",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.rule.Target",
            jsonName: "target",
          },
          {
            name: "context",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.access_control.Context",
            jsonName: "context",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Request",
      },
      {
        field: [
          {
            name: "subject",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".google.protobuf.Any",
            jsonName: "subject",
          },
          {
            name: "resources",
            number: 2,
            label: 3,
            type: 11,
            typeName: ".google.protobuf.Any",
            jsonName: "resources",
          },
          {
            name: "security",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".google.protobuf.Any",
            jsonName: "security",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Context",
      },
      {
        field: [
          {
            name: "decision",
            number: 1,
            label: 1,
            type: 14,
            typeName: ".io.restorecommerce.access_control.Response.Decision",
            jsonName: "decision",
          },
          {
            name: "obligation",
            number: 2,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.attribute.Attribute",
            jsonName: "obligation",
          },
          {
            name: "evaluation_cacheable",
            number: 3,
            label: 1,
            type: 8,
            jsonName: "evaluationCacheable",
          },
          {
            name: "operation_status",
            number: 4,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.OperationStatus",
            jsonName: "operationStatus",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [
          {
            value: [
              { name: "PERMIT", number: 0 },
              { name: "DENY", number: 1 },
              { name: "NOT_APPLICABLE", number: 2 },
              { name: "INDETERMINATE", number: 3 },
            ],
            reservedRange: [],
            reservedName: [],
            name: "Decision",
          },
        ],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Response",
      },
      {
        field: [
          {
            name: "policy_sets",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.policy_set.PolicySetRQ",
            jsonName: "policySets",
          },
          {
            name: "obligation",
            number: 2,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.attribute.Attribute",
            jsonName: "obligation",
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
        name: "ReverseQuery",
      },
    ],
    enumType: [],
    service: [
      {
        method: [
          {
            name: "IsAllowed",
            inputType: ".io.restorecommerce.access_control.Request",
            outputType: ".io.restorecommerce.access_control.Response",
          },
          {
            name: "WhatIsAllowed",
            inputType: ".io.restorecommerce.access_control.Request",
            outputType: ".io.restorecommerce.access_control.ReverseQuery",
          },
        ],
        name: "Service",
      },
    ],
    extension: [],
    name: "io/restorecommerce/access_control.proto",
    package: "io.restorecommerce.access_control",
    sourceCodeInfo: {
      location: [
        {
          path: [4, 0, 2, 1],
          span: [18, 2, 22],
          leadingDetachedComments: [],
          leadingComments:
            " generic data structure which can be provided\n to a contextQuery (see io/restorecommerce/rule.proto)\n",
        },
      ],
    },
    syntax: "proto3",
  }),
  references: {
    ".io.restorecommerce.access_control.Request": Request,
    ".io.restorecommerce.access_control.Context": Context,
    ".io.restorecommerce.access_control.Response": Response,
    ".io.restorecommerce.access_control.Response.Decision": Response_Decision,
    ".io.restorecommerce.access_control.ReverseQuery": ReverseQuery,
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
