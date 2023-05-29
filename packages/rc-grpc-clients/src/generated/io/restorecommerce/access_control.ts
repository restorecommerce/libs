/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { Any, protoMetadata as protoMetadata1 } from "../../google/protobuf/any";
import { Attribute, protoMetadata as protoMetadata5 } from "./attribute";
import { protoMetadata as protoMetadata6 } from "./options";
import { PolicySetRQ, protoMetadata as protoMetadata3 } from "./policy_set";
import { protoMetadata as protoMetadata2, Target } from "./rule";
import { OperationStatus, protoMetadata as protoMetadata4 } from "./status";

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
  obligations: Attribute[];
  evaluationCacheable: boolean;
  operationStatus?: OperationStatus;
}

export enum Response_Decision {
  PERMIT = "PERMIT",
  DENY = "DENY",
  NOT_APPLICABLE = "NOT_APPLICABLE",
  INDETERMINATE = "INDETERMINATE",
  UNRECOGNIZED = "UNRECOGNIZED",
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
    case Response_Decision.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function response_DecisionToNumber(object: Response_Decision): number {
  switch (object) {
    case Response_Decision.PERMIT:
      return 0;
    case Response_Decision.DENY:
      return 1;
    case Response_Decision.NOT_APPLICABLE:
      return 2;
    case Response_Decision.INDETERMINATE:
      return 3;
    case Response_Decision.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface ReverseQuery {
  policySets: PolicySetRQ[];
  obligations: Attribute[];
  operationStatus?: OperationStatus;
}

function createBaseRequest(): Request {
  return { target: undefined, context: undefined };
}

export const Request = {
  encode(message: Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.target !== undefined) {
      Target.encode(message.target, writer.uint32(10).fork()).ldelim();
    }
    if (message.context !== undefined) {
      Context.encode(message.context, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Request {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.target = Target.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.context = Context.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Request {
    return {
      target: isSet(object.target) ? Target.fromJSON(object.target) : undefined,
      context: isSet(object.context) ? Context.fromJSON(object.context) : undefined,
    };
  },

  toJSON(message: Request): unknown {
    const obj: any = {};
    message.target !== undefined && (obj.target = message.target ? Target.toJSON(message.target) : undefined);
    message.context !== undefined && (obj.context = message.context ? Context.toJSON(message.context) : undefined);
    return obj;
  },

  create(base?: DeepPartial<Request>): Request {
    return Request.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Request>): Request {
    const message = createBaseRequest();
    message.target = (object.target !== undefined && object.target !== null)
      ? Target.fromPartial(object.target)
      : undefined;
    message.context = (object.context !== undefined && object.context !== null)
      ? Context.fromPartial(object.context)
      : undefined;
    return message;
  },
};

function createBaseContext(): Context {
  return { subject: undefined, resources: [], security: undefined };
}

export const Context = {
  encode(message: Context, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Context {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subject = Any.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.resources.push(Any.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.security = Any.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Context {
    return {
      subject: isSet(object.subject) ? Any.fromJSON(object.subject) : undefined,
      resources: Array.isArray(object?.resources) ? object.resources.map((e: any) => Any.fromJSON(e)) : [],
      security: isSet(object.security) ? Any.fromJSON(object.security) : undefined,
    };
  },

  toJSON(message: Context): unknown {
    const obj: any = {};
    message.subject !== undefined && (obj.subject = message.subject ? Any.toJSON(message.subject) : undefined);
    if (message.resources) {
      obj.resources = message.resources.map((e) => e ? Any.toJSON(e) : undefined);
    } else {
      obj.resources = [];
    }
    message.security !== undefined && (obj.security = message.security ? Any.toJSON(message.security) : undefined);
    return obj;
  },

  create(base?: DeepPartial<Context>): Context {
    return Context.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Context>): Context {
    const message = createBaseContext();
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Any.fromPartial(object.subject)
      : undefined;
    message.resources = object.resources?.map((e) => Any.fromPartial(e)) || [];
    message.security = (object.security !== undefined && object.security !== null)
      ? Any.fromPartial(object.security)
      : undefined;
    return message;
  },
};

function createBaseResponse(): Response {
  return {
    decision: Response_Decision.PERMIT,
    obligations: [],
    evaluationCacheable: false,
    operationStatus: undefined,
  };
}

export const Response = {
  encode(message: Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.decision !== Response_Decision.PERMIT) {
      writer.uint32(8).int32(response_DecisionToNumber(message.decision));
    }
    for (const v of message.obligations) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.evaluationCacheable === true) {
      writer.uint32(24).bool(message.evaluationCacheable);
    }
    if (message.operationStatus !== undefined) {
      OperationStatus.encode(message.operationStatus, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.decision = response_DecisionFromJSON(reader.int32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.obligations.push(Attribute.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.evaluationCacheable = reader.bool();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.operationStatus = OperationStatus.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Response {
    return {
      decision: isSet(object.decision) ? response_DecisionFromJSON(object.decision) : Response_Decision.PERMIT,
      obligations: Array.isArray(object?.obligations) ? object.obligations.map((e: any) => Attribute.fromJSON(e)) : [],
      evaluationCacheable: isSet(object.evaluationCacheable) ? Boolean(object.evaluationCacheable) : false,
      operationStatus: isSet(object.operationStatus) ? OperationStatus.fromJSON(object.operationStatus) : undefined,
    };
  },

  toJSON(message: Response): unknown {
    const obj: any = {};
    message.decision !== undefined && (obj.decision = response_DecisionToJSON(message.decision));
    if (message.obligations) {
      obj.obligations = message.obligations.map((e) => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.obligations = [];
    }
    message.evaluationCacheable !== undefined && (obj.evaluationCacheable = message.evaluationCacheable);
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus ? OperationStatus.toJSON(message.operationStatus) : undefined);
    return obj;
  },

  create(base?: DeepPartial<Response>): Response {
    return Response.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Response>): Response {
    const message = createBaseResponse();
    message.decision = object.decision ?? Response_Decision.PERMIT;
    message.obligations = object.obligations?.map((e) => Attribute.fromPartial(e)) || [];
    message.evaluationCacheable = object.evaluationCacheable ?? false;
    message.operationStatus = (object.operationStatus !== undefined && object.operationStatus !== null)
      ? OperationStatus.fromPartial(object.operationStatus)
      : undefined;
    return message;
  },
};

function createBaseReverseQuery(): ReverseQuery {
  return { policySets: [], obligations: [], operationStatus: undefined };
}

export const ReverseQuery = {
  encode(message: ReverseQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.policySets) {
      PolicySetRQ.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.obligations) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.operationStatus !== undefined) {
      OperationStatus.encode(message.operationStatus, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReverseQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReverseQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.policySets.push(PolicySetRQ.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.obligations.push(Attribute.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.operationStatus = OperationStatus.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReverseQuery {
    return {
      policySets: Array.isArray(object?.policySets) ? object.policySets.map((e: any) => PolicySetRQ.fromJSON(e)) : [],
      obligations: Array.isArray(object?.obligations) ? object.obligations.map((e: any) => Attribute.fromJSON(e)) : [],
      operationStatus: isSet(object.operationStatus) ? OperationStatus.fromJSON(object.operationStatus) : undefined,
    };
  },

  toJSON(message: ReverseQuery): unknown {
    const obj: any = {};
    if (message.policySets) {
      obj.policySets = message.policySets.map((e) => e ? PolicySetRQ.toJSON(e) : undefined);
    } else {
      obj.policySets = [];
    }
    if (message.obligations) {
      obj.obligations = message.obligations.map((e) => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.obligations = [];
    }
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus ? OperationStatus.toJSON(message.operationStatus) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ReverseQuery>): ReverseQuery {
    return ReverseQuery.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ReverseQuery>): ReverseQuery {
    const message = createBaseReverseQuery();
    message.policySets = object.policySets?.map((e) => PolicySetRQ.fromPartial(e)) || [];
    message.obligations = object.obligations?.map((e) => Attribute.fromPartial(e)) || [];
    message.operationStatus = (object.operationStatus !== undefined && object.operationStatus !== null)
      ? OperationStatus.fromPartial(object.operationStatus)
      : undefined;
    return message;
  },
};

export type AccessControlServiceDefinition = typeof AccessControlServiceDefinition;
export const AccessControlServiceDefinition = {
  name: "AccessControlService",
  fullName: "io.restorecommerce.access_control.AccessControlService",
  methods: {
    isAllowed: {
      name: "IsAllowed",
      requestType: Request,
      requestStream: false,
      responseType: Response,
      responseStream: false,
      options: { _unknownFields: { 248008: [Buffer.from([1])] } },
    },
    whatIsAllowed: {
      name: "WhatIsAllowed",
      requestType: Request,
      requestStream: false,
      responseType: ReverseQuery,
      responseStream: false,
      options: { _unknownFields: { 248008: [Buffer.from([1])] } },
    },
  },
} as const;

export interface AccessControlServiceImplementation<CallContextExt = {}> {
  isAllowed(request: Request, context: CallContext & CallContextExt): Promise<DeepPartial<Response>>;
  whatIsAllowed(request: Request, context: CallContext & CallContextExt): Promise<DeepPartial<ReverseQuery>>;
}

export interface AccessControlServiceClient<CallOptionsExt = {}> {
  isAllowed(request: DeepPartial<Request>, options?: CallOptions & CallOptionsExt): Promise<Response>;
  whatIsAllowed(request: DeepPartial<Request>, options?: CallOptions & CallOptionsExt): Promise<ReverseQuery>;
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
    "name": "io/restorecommerce/access_control.proto",
    "package": "io.restorecommerce.access_control",
    "dependency": [
      "google/protobuf/any.proto",
      "io/restorecommerce/rule.proto",
      "io/restorecommerce/policy_set.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/attribute.proto",
      "io/restorecommerce/options.proto",
    ],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "Request",
      "field": [{
        "name": "target",
        "number": 1,
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
        "name": "context",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.access_control.Context",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "context",
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
      "name": "Context",
      "field": [{
        "name": "subject",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.Any",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "subject",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "resources",
        "number": 2,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.Any",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "resources",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "security",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.Any",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "security",
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
      "name": "Response",
      "field": [{
        "name": "decision",
        "number": 1,
        "label": 1,
        "type": 14,
        "typeName": ".io.restorecommerce.access_control.Response.Decision",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "decision",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "obligations",
        "number": 2,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.attribute.Attribute",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "obligations",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "evaluation_cacheable",
        "number": 3,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "evaluationCacheable",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "operation_status",
        "number": 4,
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
      "enumType": [{
        "name": "Decision",
        "value": [
          { "name": "PERMIT", "number": 0, "options": undefined },
          { "name": "DENY", "number": 1, "options": undefined },
          { "name": "NOT_APPLICABLE", "number": 2, "options": undefined },
          { "name": "INDETERMINATE", "number": 3, "options": undefined },
        ],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ReverseQuery",
      "field": [{
        "name": "policy_sets",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.policy_set.PolicySetRQ",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "policySets",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "obligations",
        "number": 2,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.attribute.Attribute",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "obligations",
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
    }],
    "enumType": [],
    "service": [{
      "name": "AccessControlService",
      "method": [{
        "name": "IsAllowed",
        "inputType": ".io.restorecommerce.access_control.Request",
        "outputType": ".io.restorecommerce.access_control.Response",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "WhatIsAllowed",
        "inputType": ".io.restorecommerce.access_control.Request",
        "outputType": ".io.restorecommerce.access_control.ReverseQuery",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": false,
        "serverStreaming": false,
      }],
      "options": undefined,
    }],
    "extension": [],
    "options": undefined,
    "sourceCodeInfo": {
      "location": [{
        "path": [4, 0, 2, 1],
        "span": [19, 2, 22],
        "leadingComments":
          " generic data structure which can be provided\n to a contextQuery (see io/restorecommerce/rule.proto)\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {
    ".io.restorecommerce.access_control.Request": Request,
    ".io.restorecommerce.access_control.Context": Context,
    ".io.restorecommerce.access_control.Response": Response,
    ".io.restorecommerce.access_control.Response.Decision": Response_Decision,
    ".io.restorecommerce.access_control.ReverseQuery": ReverseQuery,
  },
  dependencies: [protoMetadata1, protoMetadata2, protoMetadata3, protoMetadata4, protoMetadata5, protoMetadata6],
  options: {
    services: {
      "AccessControlService": {
        options: undefined,
        methods: { "IsAllowed": { "is_query": true }, "WhatIsAllowed": { "is_query": true } },
      },
    },
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
