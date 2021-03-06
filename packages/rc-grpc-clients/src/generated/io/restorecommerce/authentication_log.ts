/* eslint-disable */
import { FileDescriptorProto } from "ts-proto-descriptors/google/protobuf/descriptor";
import {
  Subject,
  protoMetadata as protoMetadata4,
} from "../../io/restorecommerce/auth";
import {
  Meta,
  protoMetadata as protoMetadata3,
} from "../../io/restorecommerce/meta";
import {
  protoMetadata as protoMetadata1,
  ReadRequest,
  DeleteRequest,
} from "../../io/restorecommerce/resource_base";
import {
  protoMetadata as protoMetadata2,
  Empty,
} from "../../google/protobuf/empty";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "io.restorecommerce.authentication_log";

export interface AuthenticationLogList {
  items: AuthenticationLog[];
  totalCount: number;
  subject?: Subject;
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

const baseAuthenticationLogList: object = { totalCount: 0 };

export const AuthenticationLogList = {
  encode(
    message: AuthenticationLogList,
    writer: Writer = Writer.create()
  ): Writer {
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
    const message = globalThis.Object.create(
      baseAuthenticationLogList
    ) as AuthenticationLogList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(AuthenticationLog.fromJSON(e));
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

  toJSON(message: AuthenticationLogList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? AuthenticationLog.toJSON(e) : undefined
      );
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

const baseAuthenticationLog: object = {
  id: "",
  ipv4Address: "",
  ipv6Address: "",
  operatingSystem: "",
  userAgent: "",
  date: 0,
  activity: "",
  subjectId: "",
  tokenName: "",
};

export const AuthenticationLog = {
  encode(message: AuthenticationLog, writer: Writer = Writer.create()): Writer {
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
    const message = globalThis.Object.create(
      baseAuthenticationLog
    ) as AuthenticationLog;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.ipv4Address !== undefined && object.ipv4Address !== null) {
      message.ipv4Address = String(object.ipv4Address);
    } else {
      message.ipv4Address = "";
    }
    if (object.ipv6Address !== undefined && object.ipv6Address !== null) {
      message.ipv6Address = String(object.ipv6Address);
    } else {
      message.ipv6Address = "";
    }
    if (
      object.operatingSystem !== undefined &&
      object.operatingSystem !== null
    ) {
      message.operatingSystem = String(object.operatingSystem);
    } else {
      message.operatingSystem = "";
    }
    if (object.userAgent !== undefined && object.userAgent !== null) {
      message.userAgent = String(object.userAgent);
    } else {
      message.userAgent = "";
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
    if (object.subjectId !== undefined && object.subjectId !== null) {
      message.subjectId = String(object.subjectId);
    } else {
      message.subjectId = "";
    }
    if (object.tokenName !== undefined && object.tokenName !== null) {
      message.tokenName = String(object.tokenName);
    } else {
      message.tokenName = "";
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
    if (object.ipv4Address !== undefined && object.ipv4Address !== null) {
      message.ipv4Address = object.ipv4Address;
    } else {
      message.ipv4Address = "";
    }
    if (object.ipv6Address !== undefined && object.ipv6Address !== null) {
      message.ipv6Address = object.ipv6Address;
    } else {
      message.ipv6Address = "";
    }
    if (
      object.operatingSystem !== undefined &&
      object.operatingSystem !== null
    ) {
      message.operatingSystem = object.operatingSystem;
    } else {
      message.operatingSystem = "";
    }
    if (object.userAgent !== undefined && object.userAgent !== null) {
      message.userAgent = object.userAgent;
    } else {
      message.userAgent = "";
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
    if (object.subjectId !== undefined && object.subjectId !== null) {
      message.subjectId = object.subjectId;
    } else {
      message.subjectId = "";
    }
    if (object.tokenName !== undefined && object.tokenName !== null) {
      message.tokenName = object.tokenName;
    } else {
      message.tokenName = "";
    }
    return message;
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
  Read(request: ReadRequest): Promise<AuthenticationLogList>;
  Create(request: AuthenticationLogList): Promise<AuthenticationLogList>;
  Delete(request: DeleteRequest): Promise<Empty>;
  Update(request: AuthenticationLogList): Promise<AuthenticationLogList>;
  Upsert(request: AuthenticationLogList): Promise<AuthenticationLogList>;
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
      "google/protobuf/empty.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
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
              ".io.restorecommerce.authentication_log.AuthenticationLogList",
          },
          {
            name: "Create",
            inputType:
              ".io.restorecommerce.authentication_log.AuthenticationLogList",
            outputType:
              ".io.restorecommerce.authentication_log.AuthenticationLogList",
          },
          {
            name: "Delete",
            inputType: ".io.restorecommerce.resourcebase.DeleteRequest",
            outputType: ".google.protobuf.Empty",
          },
          {
            name: "Update",
            inputType:
              ".io.restorecommerce.authentication_log.AuthenticationLogList",
            outputType:
              ".io.restorecommerce.authentication_log.AuthenticationLogList",
          },
          {
            name: "Upsert",
            inputType:
              ".io.restorecommerce.authentication_log.AuthenticationLogList",
            outputType:
              ".io.restorecommerce.authentication_log.AuthenticationLogList",
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
          path: [4, 1],
          span: [29, 0, 40, 1],
          leadingDetachedComments: [],
          leadingComments: "*\n Authentication Log\n",
        },
        {
          path: [4, 1, 2, 0],
          span: [30, 2, 16],
          leadingDetachedComments: [],
          trailingComments: " log id\n",
        },
        {
          path: [4, 1, 2, 5],
          span: [35, 2, 18],
          leadingDetachedComments: [],
          trailingComments: " time stamp of login, logout or token update\n",
        },
        {
          path: [4, 1, 2, 6],
          span: [36, 2, 22],
          leadingDetachedComments: [],
          trailingComments: " login, logout\n",
        },
        {
          path: [4, 1, 2, 7],
          span: [37, 2, 40],
          leadingDetachedComments: [],
          trailingComments: " meta info\n",
        },
        {
          path: [4, 1, 2, 8],
          span: [38, 2, 24],
          leadingDetachedComments: [],
          trailingComments: " subject id\n",
        },
        {
          path: [4, 1, 2, 9],
          span: [39, 2, 25],
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
