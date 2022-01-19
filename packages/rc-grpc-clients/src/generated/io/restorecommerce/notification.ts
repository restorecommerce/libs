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

export const protobufPackage = "io.restorecommerce.notification";

export interface Deleted {
  id: string;
}

export interface NotificationList {
  items: Notification[];
  total_count: number;
  subject?: Subject;
}

export interface NotificationListResponse {
  items: NotificationResponse[];
  total_count: number;
  operation_status?: OperationStatus;
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
  notification_channel_ids: string[];
  email: string | undefined;
  telephone_number: string | undefined;
  subject_template: string;
  body_template: string;
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

const baseNotificationList: object = { total_count: 0 };

export const NotificationList = {
  encode(message: NotificationList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      Notification.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
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

  fromPartial(object: DeepPartial<NotificationList>): NotificationList {
    const message = { ...baseNotificationList } as NotificationList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Notification.fromPartial(e));
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

  toJSON(message: NotificationList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? Notification.toJSON(e) : undefined
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

const baseNotificationListResponse: object = { total_count: 0 };

export const NotificationListResponse = {
  encode(
    message: NotificationListResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.items) {
      NotificationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
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

  toJSON(message: NotificationListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? NotificationResponse.toJSON(e) : undefined
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
  notification_channel_ids: "",
  subject_template: "",
  body_template: "",
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
    for (const v of message.notification_channel_ids) {
      writer.uint32(42).string(v!);
    }
    if (message.email !== undefined) {
      writer.uint32(50).string(message.email);
    }
    if (message.telephone_number !== undefined) {
      writer.uint32(58).string(message.telephone_number);
    }
    if (message.subject_template !== "") {
      writer.uint32(66).string(message.subject_template);
    }
    if (message.body_template !== "") {
      writer.uint32(74).string(message.body_template);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Notification {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseNotification) as Notification;
    message.notification_channel_ids = [];
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
          message.notification_channel_ids.push(reader.string());
          break;
        case 6:
          message.email = reader.string();
          break;
        case 7:
          message.telephone_number = reader.string();
          break;
        case 8:
          message.subject_template = reader.string();
          break;
        case 9:
          message.body_template = reader.string();
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
    message.notification_channel_ids = [];
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
      object.notification_channel_ids !== undefined &&
      object.notification_channel_ids !== null
    ) {
      for (const e of object.notification_channel_ids) {
        message.notification_channel_ids.push(String(e));
      }
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = String(object.email);
    } else {
      message.email = undefined;
    }
    if (
      object.telephone_number !== undefined &&
      object.telephone_number !== null
    ) {
      message.telephone_number = String(object.telephone_number);
    } else {
      message.telephone_number = undefined;
    }
    if (
      object.subject_template !== undefined &&
      object.subject_template !== null
    ) {
      message.subject_template = String(object.subject_template);
    } else {
      message.subject_template = "";
    }
    if (object.body_template !== undefined && object.body_template !== null) {
      message.body_template = String(object.body_template);
    } else {
      message.body_template = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<Notification>): Notification {
    const message = { ...baseNotification } as Notification;
    message.notification_channel_ids = [];
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
      object.notification_channel_ids !== undefined &&
      object.notification_channel_ids !== null
    ) {
      for (const e of object.notification_channel_ids) {
        message.notification_channel_ids.push(e);
      }
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = undefined;
    }
    if (
      object.telephone_number !== undefined &&
      object.telephone_number !== null
    ) {
      message.telephone_number = object.telephone_number;
    } else {
      message.telephone_number = undefined;
    }
    if (
      object.subject_template !== undefined &&
      object.subject_template !== null
    ) {
      message.subject_template = object.subject_template;
    } else {
      message.subject_template = "";
    }
    if (object.body_template !== undefined && object.body_template !== null) {
      message.body_template = object.body_template;
    } else {
      message.body_template = "";
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
    if (message.notification_channel_ids) {
      obj.notification_channel_ids = message.notification_channel_ids.map(
        (e) => e
      );
    } else {
      obj.notification_channel_ids = [];
    }
    message.email !== undefined && (obj.email = message.email);
    message.telephone_number !== undefined &&
      (obj.telephone_number = message.telephone_number);
    message.subject_template !== undefined &&
      (obj.subject_template = message.subject_template);
    message.body_template !== undefined &&
      (obj.body_template = message.body_template);
    return obj;
  },
};

/** Message structure for Notification */
export interface Service {
  Read(request: ReadRequest): Promise<NotificationListResponse>;
  Create(request: NotificationList): Promise<NotificationListResponse>;
  Delete(request: DeleteRequest): Promise<DeleteResponse>;
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
            outputType: ".io.restorecommerce.resourcebase.DeleteResponse",
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
          span: [10, 0, 16, 1],
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
