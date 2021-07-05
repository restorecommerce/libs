/* eslint-disable */
import { FileDescriptorProto } from "ts-proto-descriptors/google/protobuf/descriptor";
import {
  Subject,
  protoMetadata as protoMetadata4,
} from "../../io/restorecommerce/auth";
import {
  Status,
  protoMetadata as protoMetadata5,
  StatusArray,
} from "../../io/restorecommerce/status";
import {
  Meta,
  protoMetadata as protoMetadata3,
} from "../../io/restorecommerce/meta";
import {
  protoMetadata as protoMetadata1,
  ReadRequest,
  DeleteRequest,
} from "../../io/restorecommerce/resource_base";
import { protoMetadata as protoMetadata2 } from "../../google/protobuf/empty";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "io.restorecommerce.notification";

export interface Deleted {
  id: string;
}

export interface NotificationList {
  items: Notification[];
  totalCount: number;
  subject?: Subject;
}

export interface NotificationListResponse {
  items: NotificationResponse[];
  totalCount: number;
  status?: Status;
}

export interface NotificationResponse {
  items?: Notification;
  status?: Status;
}

export interface Notification {
  id: string;
  meta?: Meta;
  name: string;
  description: string;
  notificationChannelIds: string[];
  email: string | undefined;
  telephoneNumber: string | undefined;
  subjectTemplate: string;
  bodyTemplate: string;
}

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

const baseNotificationList: object = { totalCount: 0 };

export const NotificationList = {
  encode(message: NotificationList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      Notification.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): NotificationList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseNotificationList
    ) as NotificationList;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Notification.decode(reader, reader.uint32()));
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

  fromJSON(object: any): NotificationList {
    const message = globalThis.Object.create(
      baseNotificationList
    ) as NotificationList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Notification.fromJSON(e));
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

  fromPartial(object: DeepPartial<NotificationList>): NotificationList {
    const message = { ...baseNotificationList } as NotificationList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Notification.fromPartial(e));
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

  toJSON(message: NotificationList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? Notification.toJSON(e) : undefined
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

const baseNotificationListResponse: object = { totalCount: 0 };

export const NotificationListResponse = {
  encode(
    message: NotificationListResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.items) {
      NotificationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): NotificationListResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseNotificationListResponse
    ) as NotificationListResponse;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            NotificationResponse.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.totalCount = reader.uint32();
          break;
        case 3:
          message.status = Status.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NotificationListResponse {
    const message = globalThis.Object.create(
      baseNotificationListResponse
    ) as NotificationListResponse;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(NotificationResponse.fromJSON(e));
      }
    }
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = Number(object.totalCount);
    } else {
      message.totalCount = 0;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromJSON(object.status);
    } else {
      message.status = undefined;
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<NotificationListResponse>
  ): NotificationListResponse {
    const message = {
      ...baseNotificationListResponse,
    } as NotificationListResponse;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(NotificationResponse.fromPartial(e));
      }
    }
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = object.totalCount;
    } else {
      message.totalCount = 0;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromPartial(object.status);
    } else {
      message.status = undefined;
    }
    return message;
  },

  toJSON(message: NotificationListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? NotificationResponse.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },
};

const baseNotificationResponse: object = {};

export const NotificationResponse = {
  encode(
    message: NotificationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.items !== undefined) {
      Notification.encode(message.items, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): NotificationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseNotificationResponse
    ) as NotificationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items = Notification.decode(reader, reader.uint32());
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

  fromJSON(object: any): NotificationResponse {
    const message = globalThis.Object.create(
      baseNotificationResponse
    ) as NotificationResponse;
    if (object.items !== undefined && object.items !== null) {
      message.items = Notification.fromJSON(object.items);
    } else {
      message.items = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromJSON(object.status);
    } else {
      message.status = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<NotificationResponse>): NotificationResponse {
    const message = { ...baseNotificationResponse } as NotificationResponse;
    if (object.items !== undefined && object.items !== null) {
      message.items = Notification.fromPartial(object.items);
    } else {
      message.items = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromPartial(object.status);
    } else {
      message.status = undefined;
    }
    return message;
  },

  toJSON(message: NotificationResponse): unknown {
    const obj: any = {};
    message.items !== undefined &&
      (obj.items = message.items
        ? Notification.toJSON(message.items)
        : undefined);
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },
};

const baseNotification: object = {
  id: "",
  name: "",
  description: "",
  notificationChannelIds: "",
  subjectTemplate: "",
  bodyTemplate: "",
};

export const Notification = {
  encode(message: Notification, writer: Writer = Writer.create()): Writer {
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
    for (const v of message.notificationChannelIds) {
      writer.uint32(42).string(v!);
    }
    if (message.email !== undefined) {
      writer.uint32(50).string(message.email);
    }
    if (message.telephoneNumber !== undefined) {
      writer.uint32(58).string(message.telephoneNumber);
    }
    if (message.subjectTemplate !== "") {
      writer.uint32(66).string(message.subjectTemplate);
    }
    if (message.bodyTemplate !== "") {
      writer.uint32(74).string(message.bodyTemplate);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Notification {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseNotification) as Notification;
    message.notificationChannelIds = [];
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
          message.notificationChannelIds.push(reader.string());
          break;
        case 6:
          message.email = reader.string();
          break;
        case 7:
          message.telephoneNumber = reader.string();
          break;
        case 8:
          message.subjectTemplate = reader.string();
          break;
        case 9:
          message.bodyTemplate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Notification {
    const message = globalThis.Object.create(baseNotification) as Notification;
    message.notificationChannelIds = [];
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
    if (
      object.notificationChannelIds !== undefined &&
      object.notificationChannelIds !== null
    ) {
      for (const e of object.notificationChannelIds) {
        message.notificationChannelIds.push(String(e));
      }
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = String(object.email);
    } else {
      message.email = undefined;
    }
    if (
      object.telephoneNumber !== undefined &&
      object.telephoneNumber !== null
    ) {
      message.telephoneNumber = String(object.telephoneNumber);
    } else {
      message.telephoneNumber = undefined;
    }
    if (
      object.subjectTemplate !== undefined &&
      object.subjectTemplate !== null
    ) {
      message.subjectTemplate = String(object.subjectTemplate);
    } else {
      message.subjectTemplate = "";
    }
    if (object.bodyTemplate !== undefined && object.bodyTemplate !== null) {
      message.bodyTemplate = String(object.bodyTemplate);
    } else {
      message.bodyTemplate = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<Notification>): Notification {
    const message = { ...baseNotification } as Notification;
    message.notificationChannelIds = [];
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
    if (
      object.notificationChannelIds !== undefined &&
      object.notificationChannelIds !== null
    ) {
      for (const e of object.notificationChannelIds) {
        message.notificationChannelIds.push(e);
      }
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = undefined;
    }
    if (
      object.telephoneNumber !== undefined &&
      object.telephoneNumber !== null
    ) {
      message.telephoneNumber = object.telephoneNumber;
    } else {
      message.telephoneNumber = undefined;
    }
    if (
      object.subjectTemplate !== undefined &&
      object.subjectTemplate !== null
    ) {
      message.subjectTemplate = object.subjectTemplate;
    } else {
      message.subjectTemplate = "";
    }
    if (object.bodyTemplate !== undefined && object.bodyTemplate !== null) {
      message.bodyTemplate = object.bodyTemplate;
    } else {
      message.bodyTemplate = "";
    }
    return message;
  },

  toJSON(message: Notification): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.notificationChannelIds) {
      obj.notificationChannelIds = message.notificationChannelIds.map((e) => e);
    } else {
      obj.notificationChannelIds = [];
    }
    message.email !== undefined && (obj.email = message.email);
    message.telephoneNumber !== undefined &&
      (obj.telephoneNumber = message.telephoneNumber);
    message.subjectTemplate !== undefined &&
      (obj.subjectTemplate = message.subjectTemplate);
    message.bodyTemplate !== undefined &&
      (obj.bodyTemplate = message.bodyTemplate);
    return obj;
  },
};

/** Message structure for Notification */
export interface Service {
  Read(request: ReadRequest): Promise<NotificationListResponse>;
  Create(request: NotificationList): Promise<NotificationListResponse>;
  Delete(request: DeleteRequest): Promise<StatusArray>;
  Update(request: NotificationList): Promise<NotificationListResponse>;
  Upsert(request: NotificationList): Promise<NotificationListResponse>;
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
      "io/restorecommerce/status.proto",
    ],
    publicDependency: [],
    weakDependency: [],
    messageType: [
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
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.notification.Notification",
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
        name: "NotificationList",
      },
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.notification.NotificationResponse",
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
            name: "status",
            number: 3,
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
        name: "NotificationListResponse",
      },
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.notification.Notification",
            jsonName: "items",
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
        name: "NotificationResponse",
      },
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
            name: "notification_channel_ids",
            number: 5,
            label: 3,
            type: 9,
            jsonName: "notificationChannelIds",
          },
          {
            name: "email",
            number: 6,
            label: 1,
            type: 9,
            oneofIndex: 0,
            jsonName: "email",
          },
          {
            name: "telephone_number",
            number: 7,
            label: 1,
            type: 9,
            oneofIndex: 0,
            jsonName: "telephoneNumber",
          },
          {
            name: "subject_template",
            number: 8,
            label: 1,
            type: 9,
            jsonName: "subjectTemplate",
          },
          {
            name: "body_template",
            number: 9,
            label: 1,
            type: 9,
            jsonName: "bodyTemplate",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [{ name: "address_type" }],
        reservedRange: [],
        reservedName: [],
        name: "Notification",
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
              ".io.restorecommerce.notification.NotificationListResponse",
          },
          {
            name: "Create",
            inputType: ".io.restorecommerce.notification.NotificationList",
            outputType:
              ".io.restorecommerce.notification.NotificationListResponse",
          },
          {
            name: "Delete",
            inputType: ".io.restorecommerce.resourcebase.DeleteRequest",
            outputType: ".io.restorecommerce.status.StatusArray",
          },
          {
            name: "Update",
            inputType: ".io.restorecommerce.notification.NotificationList",
            outputType:
              ".io.restorecommerce.notification.NotificationListResponse",
          },
          {
            name: "Upsert",
            inputType: ".io.restorecommerce.notification.NotificationList",
            outputType:
              ".io.restorecommerce.notification.NotificationListResponse",
          },
        ],
        name: "Service",
      },
    ],
    extension: [],
    name: "io/restorecommerce/notification.proto",
    package: "io.restorecommerce.notification",
    sourceCodeInfo: {
      location: [
        {
          path: [6, 0],
          span: [11, 0, 17, 1],
          leadingDetachedComments: [],
          leadingComments: " Message structure for Notification\n",
        },
      ],
    },
    syntax: "proto3",
  }),
  references: {
    ".io.restorecommerce.notification.Deleted": Deleted,
    ".io.restorecommerce.notification.NotificationList": NotificationList,
    ".io.restorecommerce.notification.NotificationListResponse": NotificationListResponse,
    ".io.restorecommerce.notification.NotificationResponse": NotificationResponse,
    ".io.restorecommerce.notification.Notification": Notification,
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
