/* eslint-disable */
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  Subject,
  protoMetadata as protoMetadata3,
} from "../../io/restorecommerce/auth";
import {
  OperationStatus,
  Status,
  protoMetadata as protoMetadata4,
} from "../../io/restorecommerce/status";
import {
  Meta,
  protoMetadata as protoMetadata2,
} from "../../io/restorecommerce/meta";
import {
  protoMetadata as protoMetadata1,
  DeleteResponse,
  ReadRequest,
  DeleteRequest,
} from "../../io/restorecommerce/resource_base";
import { protoMetadata as protoMetadata5 } from "../../io/restorecommerce/options";

export const protobufPackage = "io.restorecommerce.authentication_log";

export interface AuthenticationLogList {
  items: AuthenticationLog[];
  totalCount: number;
  subject?: Subject;
}

export interface AuthenticationLogListResponse {
  items: AuthenticationLogResponse[];
  totalCount: number;
  operationStatus?: OperationStatus;
}

export interface AuthenticationLogResponse {
  payload?: AuthenticationLog;
  status?: Status;
}

/** Authentication Log */
export interface AuthenticationLog {
  /** log id */
  id: string;
  ipv4Address: string;
  ipv6Address: string;
  operatingSystem: string;
  userAgent: string;
  /** time stamp of login, logout or token update */
  date: number;
  /** login, logout */
  activity: string;
  /** meta info */
  meta?: Meta;
  /** subject id */
  subjectId: string;
  /** token name associated with io.restorecommerce.auth.Token.token_name */
  tokenName: string;
}

export interface Deleted {
  id: string;
}

function createBaseAuthenticationLogList(): AuthenticationLogList {
  return { items: [], totalCount: 0, subject: undefined };
}

export const AuthenticationLogList = {
  encode(
    message: AuthenticationLogList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      AuthenticationLog.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AuthenticationLogList {
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

  fromJSON(object: any): AuthenticationLogList {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => AuthenticationLog.fromJSON(e))
        : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
      subject: isSet(object.subject)
        ? Subject.fromJSON(object.subject)
        : undefined,
    };
  },

  toJSON(message: AuthenticationLogList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? AuthenticationLog.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined &&
      (obj.totalCount = Math.round(message.totalCount));
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<AuthenticationLogList>
  ): AuthenticationLogList {
    const message = createBaseAuthenticationLogList();
    message.items =
      object.items?.map((e) => AuthenticationLog.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    message.subject =
      object.subject !== undefined && object.subject !== null
        ? Subject.fromPartial(object.subject)
        : undefined;
    return message;
  },
};

function createBaseAuthenticationLogListResponse(): AuthenticationLogListResponse {
  return { items: [], totalCount: 0, operationStatus: undefined };
}

export const AuthenticationLogListResponse = {
  encode(
    message: AuthenticationLogListResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      AuthenticationLogResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.operationStatus !== undefined) {
      OperationStatus.encode(
        message.operationStatus,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AuthenticationLogListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthenticationLogListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            AuthenticationLogResponse.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.totalCount = reader.uint32();
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

  fromJSON(object: any): AuthenticationLogListResponse {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => AuthenticationLogResponse.fromJSON(e))
        : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
      operationStatus: isSet(object.operationStatus)
        ? OperationStatus.fromJSON(object.operationStatus)
        : undefined,
    };
  },

  toJSON(message: AuthenticationLogListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? AuthenticationLogResponse.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined &&
      (obj.totalCount = Math.round(message.totalCount));
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus
        ? OperationStatus.toJSON(message.operationStatus)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<AuthenticationLogListResponse>
  ): AuthenticationLogListResponse {
    const message = createBaseAuthenticationLogListResponse();
    message.items =
      object.items?.map((e) => AuthenticationLogResponse.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    message.operationStatus =
      object.operationStatus !== undefined && object.operationStatus !== null
        ? OperationStatus.fromPartial(object.operationStatus)
        : undefined;
    return message;
  },
};

function createBaseAuthenticationLogResponse(): AuthenticationLogResponse {
  return { payload: undefined, status: undefined };
}

export const AuthenticationLogResponse = {
  encode(
    message: AuthenticationLogResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.payload !== undefined) {
      AuthenticationLog.encode(
        message.payload,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AuthenticationLogResponse {
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
      payload: isSet(object.payload)
        ? AuthenticationLog.fromJSON(object.payload)
        : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: AuthenticationLogResponse): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload
        ? AuthenticationLog.toJSON(message.payload)
        : undefined);
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<AuthenticationLogResponse>
  ): AuthenticationLogResponse {
    const message = createBaseAuthenticationLogResponse();
    message.payload =
      object.payload !== undefined && object.payload !== null
        ? AuthenticationLog.fromPartial(object.payload)
        : undefined;
    message.status =
      object.status !== undefined && object.status !== null
        ? Status.fromPartial(object.status)
        : undefined;
    return message;
  },
};

function createBaseAuthenticationLog(): AuthenticationLog {
  return {
    id: "",
    ipv4Address: "",
    ipv6Address: "",
    operatingSystem: "",
    userAgent: "",
    date: 0,
    activity: "",
    meta: undefined,
    subjectId: "",
    tokenName: "",
  };
}

export const AuthenticationLog = {
  encode(
    message: AuthenticationLog,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.ipv4Address !== "") {
      writer.uint32(18).string(message.ipv4Address);
    }
    if (message.ipv6Address !== "") {
      writer.uint32(26).string(message.ipv6Address);
    }
    if (message.operatingSystem !== "") {
      writer.uint32(34).string(message.operatingSystem);
    }
    if (message.userAgent !== "") {
      writer.uint32(42).string(message.userAgent);
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
    if (message.subjectId !== "") {
      writer.uint32(74).string(message.subjectId);
    }
    if (message.tokenName !== "") {
      writer.uint32(82).string(message.tokenName);
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
          message.ipv4Address = reader.string();
          break;
        case 3:
          message.ipv6Address = reader.string();
          break;
        case 4:
          message.operatingSystem = reader.string();
          break;
        case 5:
          message.userAgent = reader.string();
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
          message.subjectId = reader.string();
          break;
        case 10:
          message.tokenName = reader.string();
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
      ipv4Address: isSet(object.ipv4Address) ? String(object.ipv4Address) : "",
      ipv6Address: isSet(object.ipv6Address) ? String(object.ipv6Address) : "",
      operatingSystem: isSet(object.operatingSystem)
        ? String(object.operatingSystem)
        : "",
      userAgent: isSet(object.userAgent) ? String(object.userAgent) : "",
      date: isSet(object.date) ? Number(object.date) : 0,
      activity: isSet(object.activity) ? String(object.activity) : "",
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      subjectId: isSet(object.subjectId) ? String(object.subjectId) : "",
      tokenName: isSet(object.tokenName) ? String(object.tokenName) : "",
    };
  },

  toJSON(message: AuthenticationLog): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.ipv4Address !== undefined &&
      (obj.ipv4Address = message.ipv4Address);
    message.ipv6Address !== undefined &&
      (obj.ipv6Address = message.ipv6Address);
    message.operatingSystem !== undefined &&
      (obj.operatingSystem = message.operatingSystem);
    message.userAgent !== undefined && (obj.userAgent = message.userAgent);
    message.date !== undefined && (obj.date = message.date);
    message.activity !== undefined && (obj.activity = message.activity);
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.subjectId !== undefined && (obj.subjectId = message.subjectId);
    message.tokenName !== undefined && (obj.tokenName = message.tokenName);
    return obj;
  },

  fromPartial(object: DeepPartial<AuthenticationLog>): AuthenticationLog {
    const message = createBaseAuthenticationLog();
    message.id = object.id ?? "";
    message.ipv4Address = object.ipv4Address ?? "";
    message.ipv6Address = object.ipv6Address ?? "";
    message.operatingSystem = object.operatingSystem ?? "";
    message.userAgent = object.userAgent ?? "";
    message.date = object.date ?? 0;
    message.activity = object.activity ?? "";
    message.meta =
      object.meta !== undefined && object.meta !== null
        ? Meta.fromPartial(object.meta)
        : undefined;
    message.subjectId = object.subjectId ?? "";
    message.tokenName = object.tokenName ?? "";
    return message;
  },
};

function createBaseDeleted(): Deleted {
  return { id: "" };
}

export const Deleted = {
  encode(
    message: Deleted,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    return {
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: Deleted): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<Deleted>): Deleted {
    const message = createBaseDeleted();
    message.id = object.id ?? "";
    return message;
  },
};

/** Microservice definition. */
export interface Service {
  Read(request: ReadRequest): Promise<AuthenticationLogListResponse>;
  Create(
    request: AuthenticationLogList
  ): Promise<AuthenticationLogListResponse>;
  Delete(request: DeleteRequest): Promise<DeleteResponse>;
  Update(
    request: AuthenticationLogList
  ): Promise<AuthenticationLogListResponse>;
  Upsert(
    request: AuthenticationLogList
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
      [key: string]: {
        options?: { [key: string]: any };
        methods?: { [key: string]: { [key: string]: any } };
      };
    };
    messages?: {
      [key: string]: ProtoMetaMessageOptions;
    };
    enums?: {
      [key: string]: {
        options?: { [key: string]: any };
        values?: { [key: string]: { [key: string]: any } };
      };
    };
  };
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto1.fromPartial({
    name: "io/restorecommerce/authentication_log.proto",
    package: "io.restorecommerce.authentication_log",
    dependency: [
      "io/restorecommerce/resource_base.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/options.proto",
    ],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        name: "AuthenticationLogList",
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName:
              ".io.restorecommerce.authentication_log.AuthenticationLog",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "items",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "total_count",
            number: 2,
            label: 1,
            type: 13,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "totalCount",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "subject",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "subject",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "AuthenticationLogListResponse",
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName:
              ".io.restorecommerce.authentication_log.AuthenticationLogResponse",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "items",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "total_count",
            number: 2,
            label: 1,
            type: 13,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "totalCount",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "operation_status",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.OperationStatus",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "operationStatus",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "AuthenticationLogResponse",
        field: [
          {
            name: "payload",
            number: 1,
            label: 1,
            type: 11,
            typeName:
              ".io.restorecommerce.authentication_log.AuthenticationLog",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "payload",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "status",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.Status",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "status",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "AuthenticationLog",
        field: [
          {
            name: "id",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "id",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "ipv4_address",
            number: 2,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "ipv4Address",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "ipv6_address",
            number: 3,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "ipv6Address",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "operating_system",
            number: 4,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "operatingSystem",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "user_agent",
            number: 5,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "userAgent",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "date",
            number: 6,
            label: 1,
            type: 1,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "date",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "activity",
            number: 7,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "activity",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "meta",
            number: 8,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.meta.Meta",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "meta",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "subject_id",
            number: 9,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "subjectId",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "token_name",
            number: 10,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "tokenName",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "Deleted",
        field: [
          {
            name: "id",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "id",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
    ],
    enumType: [],
    service: [
      {
        name: "Service",
        method: [
          {
            name: "Read",
            inputType: ".io.restorecommerce.resourcebase.ReadRequest",
            outputType:
              ".io.restorecommerce.authentication_log.AuthenticationLogListResponse",
            options: {
              deprecated: false,
              idempotencyLevel: 0,
              uninterpretedOption: [],
            },
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Create",
            inputType:
              ".io.restorecommerce.authentication_log.AuthenticationLogList",
            outputType:
              ".io.restorecommerce.authentication_log.AuthenticationLogListResponse",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Delete",
            inputType: ".io.restorecommerce.resourcebase.DeleteRequest",
            outputType: ".io.restorecommerce.resourcebase.DeleteResponse",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Update",
            inputType:
              ".io.restorecommerce.authentication_log.AuthenticationLogList",
            outputType:
              ".io.restorecommerce.authentication_log.AuthenticationLogListResponse",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Upsert",
            inputType:
              ".io.restorecommerce.authentication_log.AuthenticationLogList",
            outputType:
              ".io.restorecommerce.authentication_log.AuthenticationLogListResponse",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
        ],
        options: { deprecated: false, uninterpretedOption: [] },
      },
    ],
    extension: [],
    options: undefined,
    sourceCodeInfo: {
      location: [
        {
          path: [6, 0],
          span: [13, 0, 23, 1],
          leadingComments: "\n Microservice definition.\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [4, 3],
          span: [45, 0, 56, 1],
          leadingComments: "*\n Authentication Log\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [4, 3, 2, 0],
          span: [46, 2, 16],
          leadingComments: "",
          trailingComments: " log id\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 3, 2, 5],
          span: [51, 2, 18],
          leadingComments: "",
          trailingComments: " time stamp of login, logout or token update\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 3, 2, 6],
          span: [52, 2, 22],
          leadingComments: "",
          trailingComments: " login, logout\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 3, 2, 7],
          span: [53, 2, 40],
          leadingComments: "",
          trailingComments: " meta info\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 3, 2, 8],
          span: [54, 2, 24],
          leadingComments: "",
          trailingComments: " subject id\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 3, 2, 9],
          span: [55, 2, 25],
          leadingComments: "",
          trailingComments:
            " token name associated with io.restorecommerce.auth.Token.token_name\n",
          leadingDetachedComments: [],
        },
      ],
    },
    syntax: "proto3",
  }),
  references: {
    ".io.restorecommerce.authentication_log.AuthenticationLogList":
      AuthenticationLogList,
    ".io.restorecommerce.authentication_log.AuthenticationLogListResponse":
      AuthenticationLogListResponse,
    ".io.restorecommerce.authentication_log.AuthenticationLogResponse":
      AuthenticationLogResponse,
    ".io.restorecommerce.authentication_log.AuthenticationLog":
      AuthenticationLog,
    ".io.restorecommerce.authentication_log.Deleted": Deleted,
  },
  dependencies: [
    protoMetadata1,
    protoMetadata2,
    protoMetadata3,
    protoMetadata4,
    protoMetadata5,
  ],
  options: {
    services: {
      Service: {
        options: { service_name: "authentication_log" },
        methods: { Read: { is_query: true } },
      },
    },
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
