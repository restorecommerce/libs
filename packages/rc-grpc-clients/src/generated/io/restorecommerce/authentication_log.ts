/* eslint-disable */
import { FileDescriptorProto } from "ts-proto-descriptors/google/protobuf/descriptor";
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
import { Writer, Reader } from "protobufjs/minimal";

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

const baseAuthenticationLogList: object = { total_count: 0 };

export const AuthenticationLogList = {
  encode(
    message: AuthenticationLogList,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): AuthenticationLogList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseAuthenticationLogList
    ) as AuthenticationLogList;
    message.items = [];
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
    const message = globalThis.Object.create(
      baseAuthenticationLogList
    ) as AuthenticationLogList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(AuthenticationLog.fromJSON(e));
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

  fromPartial(
    object: DeepPartial<AuthenticationLogList>
  ): AuthenticationLogList {
    const message = { ...baseAuthenticationLogList } as AuthenticationLogList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(AuthenticationLog.fromPartial(e));
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

  toJSON(message: AuthenticationLogList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? AuthenticationLog.toJSON(e) : undefined
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

const baseAuthenticationLogListResponse: object = { total_count: 0 };

export const AuthenticationLogListResponse = {
  encode(
    message: AuthenticationLogListResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.items) {
      AuthenticationLogResponse.encode(v!, writer.uint32(10).fork()).ldelim();
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): AuthenticationLogListResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseAuthenticationLogListResponse
    ) as AuthenticationLogListResponse;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            AuthenticationLogResponse.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): AuthenticationLogListResponse {
    const message = globalThis.Object.create(
      baseAuthenticationLogListResponse
    ) as AuthenticationLogListResponse;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(AuthenticationLogResponse.fromJSON(e));
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
    object: DeepPartial<AuthenticationLogListResponse>
  ): AuthenticationLogListResponse {
    const message = {
      ...baseAuthenticationLogListResponse,
    } as AuthenticationLogListResponse;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(AuthenticationLogResponse.fromPartial(e));
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

  toJSON(message: AuthenticationLogListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? AuthenticationLogResponse.toJSON(e) : undefined
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

const baseAuthenticationLogResponse: object = {};

export const AuthenticationLogResponse = {
  encode(
    message: AuthenticationLogResponse,
    writer: Writer = Writer.create()
  ): Writer {
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
    input: Reader | Uint8Array,
    length?: number
  ): AuthenticationLogResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseAuthenticationLogResponse
    ) as AuthenticationLogResponse;
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
    const message = globalThis.Object.create(
      baseAuthenticationLogResponse
    ) as AuthenticationLogResponse;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = AuthenticationLog.fromJSON(object.payload);
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

  fromPartial(
    object: DeepPartial<AuthenticationLogResponse>
  ): AuthenticationLogResponse {
    const message = {
      ...baseAuthenticationLogResponse,
    } as AuthenticationLogResponse;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = AuthenticationLog.fromPartial(object.payload);
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
};

const baseAuthenticationLog: object = {
  id: "",
  ipv4_address: "",
  ipv6_address: "",
  operating_system: "",
  user_agent: "",
  date: 0,
  activity: "",
  subject_id: "",
  token_name: "",
};

export const AuthenticationLog = {
  encode(message: AuthenticationLog, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): AuthenticationLog {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseAuthenticationLog
    ) as AuthenticationLog;
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
    const message = globalThis.Object.create(
      baseAuthenticationLog
    ) as AuthenticationLog;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.ipv4_address !== undefined && object.ipv4_address !== null) {
      message.ipv4_address = String(object.ipv4_address);
    } else {
      message.ipv4_address = "";
    }
    if (object.ipv6_address !== undefined && object.ipv6_address !== null) {
      message.ipv6_address = String(object.ipv6_address);
    } else {
      message.ipv6_address = "";
    }
    if (
      object.operating_system !== undefined &&
      object.operating_system !== null
    ) {
      message.operating_system = String(object.operating_system);
    } else {
      message.operating_system = "";
    }
    if (object.user_agent !== undefined && object.user_agent !== null) {
      message.user_agent = String(object.user_agent);
    } else {
      message.user_agent = "";
    }
    if (object.date !== undefined && object.date !== null) {
      message.date = Number(object.date);
    } else {
      message.date = 0;
    }
    if (object.activity !== undefined && object.activity !== null) {
      message.activity = String(object.activity);
    } else {
      message.activity = "";
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromJSON(object.meta);
    } else {
      message.meta = undefined;
    }
    if (object.subject_id !== undefined && object.subject_id !== null) {
      message.subject_id = String(object.subject_id);
    } else {
      message.subject_id = "";
    }
    if (object.token_name !== undefined && object.token_name !== null) {
      message.token_name = String(object.token_name);
    } else {
      message.token_name = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<AuthenticationLog>): AuthenticationLog {
    const message = { ...baseAuthenticationLog } as AuthenticationLog;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.ipv4_address !== undefined && object.ipv4_address !== null) {
      message.ipv4_address = object.ipv4_address;
    } else {
      message.ipv4_address = "";
    }
    if (object.ipv6_address !== undefined && object.ipv6_address !== null) {
      message.ipv6_address = object.ipv6_address;
    } else {
      message.ipv6_address = "";
    }
    if (
      object.operating_system !== undefined &&
      object.operating_system !== null
    ) {
      message.operating_system = object.operating_system;
    } else {
      message.operating_system = "";
    }
    if (object.user_agent !== undefined && object.user_agent !== null) {
      message.user_agent = object.user_agent;
    } else {
      message.user_agent = "";
    }
    if (object.date !== undefined && object.date !== null) {
      message.date = object.date;
    } else {
      message.date = 0;
    }
    if (object.activity !== undefined && object.activity !== null) {
      message.activity = object.activity;
    } else {
      message.activity = "";
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromPartial(object.meta);
    } else {
      message.meta = undefined;
    }
    if (object.subject_id !== undefined && object.subject_id !== null) {
      message.subject_id = object.subject_id;
    } else {
      message.subject_id = "";
    }
    if (object.token_name !== undefined && object.token_name !== null) {
      message.token_name = object.token_name;
    } else {
      message.token_name = "";
    }
    return message;
  },

  toJSON(message: AuthenticationLog): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.ipv4_address !== undefined &&
      (obj.ipv4_address = message.ipv4_address);
    message.ipv6_address !== undefined &&
      (obj.ipv6_address = message.ipv6_address);
    message.operating_system !== undefined &&
      (obj.operating_system = message.operating_system);
    message.user_agent !== undefined && (obj.user_agent = message.user_agent);
    message.date !== undefined && (obj.date = message.date);
    message.activity !== undefined && (obj.activity = message.activity);
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.subject_id !== undefined && (obj.subject_id = message.subject_id);
    message.token_name !== undefined && (obj.token_name = message.token_name);
    return obj;
  },
};

const baseDeleted: object = { id: "" };

export const Deleted = {
  encode(message: Deleted, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Deleted {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseDeleted) as Deleted;
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
    const message = globalThis.Object.create(baseDeleted) as Deleted;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<Deleted>): Deleted {
    const message = { ...baseDeleted } as Deleted;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: Deleted): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
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
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
    ],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName:
              ".io.restorecommerce.authentication_log.AuthenticationLog",
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
        name: "AuthenticationLogList",
      },
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName:
              ".io.restorecommerce.authentication_log.AuthenticationLogResponse",
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
        name: "AuthenticationLogListResponse",
      },
      {
        field: [
          {
            name: "payload",
            number: 1,
            label: 1,
            type: 11,
            typeName:
              ".io.restorecommerce.authentication_log.AuthenticationLog",
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
        name: "AuthenticationLogResponse",
      },
      {
        field: [
          { name: "id", number: 1, label: 1, type: 9, jsonName: "id" },
          {
            name: "ipv4_address",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "ipv4Address",
          },
          {
            name: "ipv6_address",
            number: 3,
            label: 1,
            type: 9,
            jsonName: "ipv6Address",
          },
          {
            name: "operating_system",
            number: 4,
            label: 1,
            type: 9,
            jsonName: "operatingSystem",
          },
          {
            name: "user_agent",
            number: 5,
            label: 1,
            type: 9,
            jsonName: "userAgent",
          },
          { name: "date", number: 6, label: 1, type: 1, jsonName: "date" },
          {
            name: "activity",
            number: 7,
            label: 1,
            type: 9,
            jsonName: "activity",
          },
          {
            name: "meta",
            number: 8,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.meta.Meta",
            jsonName: "meta",
          },
          {
            name: "subject_id",
            number: 9,
            label: 1,
            type: 9,
            jsonName: "subjectId",
          },
          {
            name: "token_name",
            number: 10,
            label: 1,
            type: 9,
            jsonName: "tokenName",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "AuthenticationLog",
      },
      {
        field: [{ name: "id", number: 1, label: 1, type: 9, jsonName: "id" }],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Deleted",
      },
    ],
    enumType: [],
    service: [
      {
        method: [
          {
            name: "Read",
            inputType: ".io.restorecommerce.resourcebase.ReadRequest",
            outputType:
              ".io.restorecommerce.authentication_log.AuthenticationLogListResponse",
          },
          {
            name: "Create",
            inputType:
              ".io.restorecommerce.authentication_log.AuthenticationLogList",
            outputType:
              ".io.restorecommerce.authentication_log.AuthenticationLogListResponse",
          },
          {
            name: "Delete",
            inputType: ".io.restorecommerce.resourcebase.DeleteRequest",
            outputType: ".io.restorecommerce.resourcebase.DeleteResponse",
          },
          {
            name: "Update",
            inputType:
              ".io.restorecommerce.authentication_log.AuthenticationLogList",
            outputType:
              ".io.restorecommerce.authentication_log.AuthenticationLogListResponse",
          },
          {
            name: "Upsert",
            inputType:
              ".io.restorecommerce.authentication_log.AuthenticationLogList",
            outputType:
              ".io.restorecommerce.authentication_log.AuthenticationLogListResponse",
          },
        ],
        name: "Service",
      },
    ],
    extension: [],
    name: "io/restorecommerce/authentication_log.proto",
    package: "io.restorecommerce.authentication_log",
    sourceCodeInfo: {
      location: [
        {
          path: [6, 0],
          span: [12, 0, 18, 1],
          leadingDetachedComments: [],
          leadingComments: "\n Microservice definition.\n",
        },
        {
          path: [4, 3],
          span: [40, 0, 51, 1],
          leadingDetachedComments: [],
          leadingComments: "*\n Authentication Log\n",
        },
        {
          path: [4, 3, 2, 0],
          span: [41, 2, 16],
          leadingDetachedComments: [],
          trailingComments: " log id\n",
        },
        {
          path: [4, 3, 2, 5],
          span: [46, 2, 18],
          leadingDetachedComments: [],
          trailingComments: " time stamp of login, logout or token update\n",
        },
        {
          path: [4, 3, 2, 6],
          span: [47, 2, 22],
          leadingDetachedComments: [],
          trailingComments: " login, logout\n",
        },
        {
          path: [4, 3, 2, 7],
          span: [48, 2, 40],
          leadingDetachedComments: [],
          trailingComments: " meta info\n",
        },
        {
          path: [4, 3, 2, 8],
          span: [49, 2, 24],
          leadingDetachedComments: [],
          trailingComments: " subject id\n",
        },
        {
          path: [4, 3, 2, 9],
          span: [50, 2, 25],
          leadingDetachedComments: [],
          trailingComments:
            " token name associated with io.restorecommerce.auth.Token.token_name\n",
        },
      ],
    },
    syntax: "proto3",
  }),
  references: {
    ".io.restorecommerce.authentication_log.AuthenticationLogList": AuthenticationLogList,
    ".io.restorecommerce.authentication_log.AuthenticationLogListResponse": AuthenticationLogListResponse,
    ".io.restorecommerce.authentication_log.AuthenticationLogResponse": AuthenticationLogResponse,
    ".io.restorecommerce.authentication_log.AuthenticationLog": AuthenticationLog,
    ".io.restorecommerce.authentication_log.Deleted": Deleted,
  },
  dependencies: [
    protoMetadata1,
    protoMetadata2,
    protoMetadata3,
    protoMetadata4,
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
