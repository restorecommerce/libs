/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { protoMetadata as protoMetadata3, Subject } from "./auth";
import { Meta, protoMetadata as protoMetadata2 } from "./meta";
import { protoMetadata as protoMetadata5 } from "./options";
import { DeleteRequest, DeleteResponse, protoMetadata as protoMetadata1, ReadRequest } from "./resource_base";
import { OperationStatus, protoMetadata as protoMetadata4, Status } from "./status";

export const protobufPackage = "io.restorecommerce.authentication_log";

export interface AuthenticationLogList {
  items: AuthenticationLog[];
  total_count: number;
  subject?: Subject;
}

export interface AuthenticationLogListResponse {
  items: AuthenticationLogResponse[];
  total_count: number;
  operation_status?: OperationStatus;
}

export interface AuthenticationLogResponse {
  payload?: AuthenticationLog;
  status?: Status;
}

/** Authentication Log */
export interface AuthenticationLog {
  /** log id */
  id: string;
  ipv4_address: string;
  ipv6_address: string;
  operating_system: string;
  user_agent: string;
  /** time stamp of login, logout or token update */
  date: number;
  /** login, logout */
  activity: string;
  /** meta info */
  meta?: Meta;
  /** subject id */
  subject_id: string;
  /** token name associated with io.restorecommerce.auth.Token.token_name */
  token_name: string;
}

export interface Deleted {
  id: string;
}

function createBaseAuthenticationLogList(): AuthenticationLogList {
  return { items: [], total_count: 0, subject: undefined };
}

export const AuthenticationLogList = {
  encode(message: AuthenticationLogList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      AuthenticationLog.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthenticationLogList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthenticationLogList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(AuthenticationLog.decode(reader, reader.uint32()));
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

  fromJSON(object: any): AuthenticationLogList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => AuthenticationLog.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: AuthenticationLogList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? AuthenticationLog.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<AuthenticationLogList>): AuthenticationLogList {
    return AuthenticationLogList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AuthenticationLogList>): AuthenticationLogList {
    const message = createBaseAuthenticationLogList();
    message.items = object.items?.map((e) => AuthenticationLog.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseAuthenticationLogListResponse(): AuthenticationLogListResponse {
  return { items: [], total_count: 0, operation_status: undefined };
}

export const AuthenticationLogListResponse = {
  encode(message: AuthenticationLogListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      AuthenticationLogResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(message.operation_status, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthenticationLogListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthenticationLogListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(AuthenticationLogResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): AuthenticationLogListResponse {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => AuthenticationLogResponse.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      operation_status: isSet(object.operation_status) ? OperationStatus.fromJSON(object.operation_status) : undefined,
    };
  },

  toJSON(message: AuthenticationLogListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? AuthenticationLogResponse.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status ? OperationStatus.toJSON(message.operation_status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<AuthenticationLogListResponse>): AuthenticationLogListResponse {
    return AuthenticationLogListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AuthenticationLogListResponse>): AuthenticationLogListResponse {
    const message = createBaseAuthenticationLogListResponse();
    message.items = object.items?.map((e) => AuthenticationLogResponse.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.operation_status = (object.operation_status !== undefined && object.operation_status !== null)
      ? OperationStatus.fromPartial(object.operation_status)
      : undefined;
    return message;
  },
};

function createBaseAuthenticationLogResponse(): AuthenticationLogResponse {
  return { payload: undefined, status: undefined };
}

export const AuthenticationLogResponse = {
  encode(message: AuthenticationLogResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      AuthenticationLog.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthenticationLogResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthenticationLogResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = AuthenticationLog.decode(reader, reader.uint32());
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

  fromJSON(object: any): AuthenticationLogResponse {
    return {
      payload: isSet(object.payload) ? AuthenticationLog.fromJSON(object.payload) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: AuthenticationLogResponse): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload ? AuthenticationLog.toJSON(message.payload) : undefined);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<AuthenticationLogResponse>): AuthenticationLogResponse {
    return AuthenticationLogResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AuthenticationLogResponse>): AuthenticationLogResponse {
    const message = createBaseAuthenticationLogResponse();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? AuthenticationLog.fromPartial(object.payload)
      : undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBaseAuthenticationLog(): AuthenticationLog {
  return {
    id: "",
    ipv4_address: "",
    ipv6_address: "",
    operating_system: "",
    user_agent: "",
    date: 0,
    activity: "",
    meta: undefined,
    subject_id: "",
    token_name: "",
  };
}

export const AuthenticationLog = {
  encode(message: AuthenticationLog, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.ipv4_address !== "") {
      writer.uint32(18).string(message.ipv4_address);
    }
    if (message.ipv6_address !== "") {
      writer.uint32(26).string(message.ipv6_address);
    }
    if (message.operating_system !== "") {
      writer.uint32(34).string(message.operating_system);
    }
    if (message.user_agent !== "") {
      writer.uint32(42).string(message.user_agent);
    }
    if (message.date !== 0) {
      writer.uint32(49).double(message.date);
    }
    if (message.activity !== "") {
      writer.uint32(58).string(message.activity);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(66).fork()).ldelim();
    }
    if (message.subject_id !== "") {
      writer.uint32(74).string(message.subject_id);
    }
    if (message.token_name !== "") {
      writer.uint32(82).string(message.token_name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthenticationLog {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthenticationLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.ipv4_address = reader.string();
          break;
        case 3:
          message.ipv6_address = reader.string();
          break;
        case 4:
          message.operating_system = reader.string();
          break;
        case 5:
          message.user_agent = reader.string();
          break;
        case 6:
          message.date = reader.double();
          break;
        case 7:
          message.activity = reader.string();
          break;
        case 8:
          message.meta = Meta.decode(reader, reader.uint32());
          break;
        case 9:
          message.subject_id = reader.string();
          break;
        case 10:
          message.token_name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthenticationLog {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      ipv4_address: isSet(object.ipv4_address) ? String(object.ipv4_address) : "",
      ipv6_address: isSet(object.ipv6_address) ? String(object.ipv6_address) : "",
      operating_system: isSet(object.operating_system) ? String(object.operating_system) : "",
      user_agent: isSet(object.user_agent) ? String(object.user_agent) : "",
      date: isSet(object.date) ? Number(object.date) : 0,
      activity: isSet(object.activity) ? String(object.activity) : "",
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      subject_id: isSet(object.subject_id) ? String(object.subject_id) : "",
      token_name: isSet(object.token_name) ? String(object.token_name) : "",
    };
  },

  toJSON(message: AuthenticationLog): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.ipv4_address !== undefined && (obj.ipv4_address = message.ipv4_address);
    message.ipv6_address !== undefined && (obj.ipv6_address = message.ipv6_address);
    message.operating_system !== undefined && (obj.operating_system = message.operating_system);
    message.user_agent !== undefined && (obj.user_agent = message.user_agent);
    message.date !== undefined && (obj.date = message.date);
    message.activity !== undefined && (obj.activity = message.activity);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.subject_id !== undefined && (obj.subject_id = message.subject_id);
    message.token_name !== undefined && (obj.token_name = message.token_name);
    return obj;
  },

  create(base?: DeepPartial<AuthenticationLog>): AuthenticationLog {
    return AuthenticationLog.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AuthenticationLog>): AuthenticationLog {
    const message = createBaseAuthenticationLog();
    message.id = object.id ?? "";
    message.ipv4_address = object.ipv4_address ?? "";
    message.ipv6_address = object.ipv6_address ?? "";
    message.operating_system = object.operating_system ?? "";
    message.user_agent = object.user_agent ?? "";
    message.date = object.date ?? 0;
    message.activity = object.activity ?? "";
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    message.subject_id = object.subject_id ?? "";
    message.token_name = object.token_name ?? "";
    return message;
  },
};

function createBaseDeleted(): Deleted {
  return { id: "" };
}

export const Deleted = {
  encode(message: Deleted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Deleted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Deleted {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: Deleted): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create(base?: DeepPartial<Deleted>): Deleted {
    return Deleted.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Deleted>): Deleted {
    const message = createBaseDeleted();
    message.id = object.id ?? "";
    return message;
  },
};

/** Microservice definition. */
export type ServiceDefinition = typeof ServiceDefinition;
export const ServiceDefinition = {
  name: "Service",
  fullName: "io.restorecommerce.authentication_log.Service",
  methods: {
    read: {
      name: "Read",
      requestType: ReadRequest,
      requestStream: false,
      responseType: AuthenticationLogListResponse,
      responseStream: false,
      options: {},
    },
    create: {
      name: "Create",
      requestType: AuthenticationLogList,
      requestStream: false,
      responseType: AuthenticationLogListResponse,
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
      requestType: AuthenticationLogList,
      requestStream: false,
      responseType: AuthenticationLogListResponse,
      responseStream: false,
      options: {},
    },
    upsert: {
      name: "Upsert",
      requestType: AuthenticationLogList,
      requestStream: false,
      responseType: AuthenticationLogListResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface ServiceImplementation<CallContextExt = {}> {
  read(
    request: ReadRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<AuthenticationLogListResponse>>;
  create(
    request: AuthenticationLogList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<AuthenticationLogListResponse>>;
  delete(request: DeleteRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteResponse>>;
  update(
    request: AuthenticationLogList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<AuthenticationLogListResponse>>;
  upsert(
    request: AuthenticationLogList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<AuthenticationLogListResponse>>;
}

export interface ServiceClient<CallOptionsExt = {}> {
  read(
    request: DeepPartial<ReadRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<AuthenticationLogListResponse>;
  create(
    request: DeepPartial<AuthenticationLogList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<AuthenticationLogListResponse>;
  delete(request: DeepPartial<DeleteRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteResponse>;
  update(
    request: DeepPartial<AuthenticationLogList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<AuthenticationLogListResponse>;
  upsert(
    request: DeepPartial<AuthenticationLogList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<AuthenticationLogListResponse>;
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
    "name": "io/restorecommerce/authentication_log.proto",
    "package": "io.restorecommerce.authentication_log",
    "dependency": [
      "io/restorecommerce/resource_base.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/options.proto",
    ],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "AuthenticationLogList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.authentication_log.AuthenticationLog",
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
      "name": "AuthenticationLogListResponse",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.authentication_log.AuthenticationLogResponse",
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
      "name": "AuthenticationLogResponse",
      "field": [{
        "name": "payload",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.authentication_log.AuthenticationLog",
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
      "name": "AuthenticationLog",
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
        "name": "ipv4_address",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "ipv4Address",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "ipv6_address",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "ipv6Address",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "operating_system",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "operatingSystem",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "user_agent",
        "number": 5,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "userAgent",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "date",
        "number": 6,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "date",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "activity",
        "number": 7,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "activity",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "meta",
        "number": 8,
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
        "name": "subject_id",
        "number": 9,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "subjectId",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "token_name",
        "number": 10,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "tokenName",
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
      "name": "Deleted",
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
        "outputType": ".io.restorecommerce.authentication_log.AuthenticationLogListResponse",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Create",
        "inputType": ".io.restorecommerce.authentication_log.AuthenticationLogList",
        "outputType": ".io.restorecommerce.authentication_log.AuthenticationLogListResponse",
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
        "inputType": ".io.restorecommerce.authentication_log.AuthenticationLogList",
        "outputType": ".io.restorecommerce.authentication_log.AuthenticationLogListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Upsert",
        "inputType": ".io.restorecommerce.authentication_log.AuthenticationLogList",
        "outputType": ".io.restorecommerce.authentication_log.AuthenticationLogListResponse",
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
        "path": [6, 0],
        "span": [13, 0, 23, 1],
        "leadingComments": "\n Microservice definition.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 3],
        "span": [45, 0, 56, 1],
        "leadingComments": "*\n Authentication Log\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 3, 2, 0],
        "span": [46, 2, 16],
        "leadingComments": "",
        "trailingComments": " log id\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 3, 2, 5],
        "span": [51, 2, 18],
        "leadingComments": "",
        "trailingComments": " time stamp of login, logout or token update\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 3, 2, 6],
        "span": [52, 2, 22],
        "leadingComments": "",
        "trailingComments": " login, logout\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 3, 2, 7],
        "span": [53, 2, 40],
        "leadingComments": "",
        "trailingComments": " meta info\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 3, 2, 8],
        "span": [54, 2, 24],
        "leadingComments": "",
        "trailingComments": " subject id\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 3, 2, 9],
        "span": [55, 2, 25],
        "leadingComments": "",
        "trailingComments": " token name associated with io.restorecommerce.auth.Token.token_name\n",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {
    ".io.restorecommerce.authentication_log.AuthenticationLogList": AuthenticationLogList,
    ".io.restorecommerce.authentication_log.AuthenticationLogListResponse": AuthenticationLogListResponse,
    ".io.restorecommerce.authentication_log.AuthenticationLogResponse": AuthenticationLogResponse,
    ".io.restorecommerce.authentication_log.AuthenticationLog": AuthenticationLog,
    ".io.restorecommerce.authentication_log.Deleted": Deleted,
  },
  dependencies: [protoMetadata1, protoMetadata2, protoMetadata3, protoMetadata4, protoMetadata5],
  options: {
    services: {
      "Service": { options: { "service_name": "authentication_log" }, methods: { "Read": { "is_query": true } } },
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
