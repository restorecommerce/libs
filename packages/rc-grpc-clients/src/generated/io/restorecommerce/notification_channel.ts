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

export const protobufPackage = "io.restorecommerce.notification_channel";

export interface Deleted {
  id: string;
}

export interface NotificationChannelList {
  items: NotificationChannel[];
  totalCount: number;
  subject?: Subject;
}

export interface NotificationChannelListResponse {
  items: NotificationChannelResponse[];
  totalCount: number;
  status?: Status;
}

export interface NotificationChannelResponse {
  items?: NotificationChannel;
  status?: Status;
}

export interface NotificationChannel {
  id: string;
  meta?: Meta;
  name: string;
  description: string;
  email: string | undefined;
  sms: string | undefined;
  webhook: string | undefined;
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

const baseNotificationChannelList: object = { totalCount: 0 };

export const NotificationChannelList = {
  encode(
    message: NotificationChannelList,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.items) {
      NotificationChannel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): NotificationChannelList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseNotificationChannelList
    ) as NotificationChannelList;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            NotificationChannel.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): NotificationChannelList {
    const message = globalThis.Object.create(
      baseNotificationChannelList
    ) as NotificationChannelList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(NotificationChannel.fromJSON(e));
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
    object: DeepPartial<NotificationChannelList>
  ): NotificationChannelList {
    const message = {
      ...baseNotificationChannelList,
    } as NotificationChannelList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(NotificationChannel.fromPartial(e));
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

  toJSON(message: NotificationChannelList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? NotificationChannel.toJSON(e) : undefined
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

const baseNotificationChannelListResponse: object = { totalCount: 0 };

export const NotificationChannelListResponse = {
  encode(
    message: NotificationChannelListResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.items) {
      NotificationChannelResponse.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): NotificationChannelListResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseNotificationChannelListResponse
    ) as NotificationChannelListResponse;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            NotificationChannelResponse.decode(reader, reader.uint32())
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

  fromJSON(object: any): NotificationChannelListResponse {
    const message = globalThis.Object.create(
      baseNotificationChannelListResponse
    ) as NotificationChannelListResponse;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(NotificationChannelResponse.fromJSON(e));
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
    object: DeepPartial<NotificationChannelListResponse>
  ): NotificationChannelListResponse {
    const message = {
      ...baseNotificationChannelListResponse,
    } as NotificationChannelListResponse;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(NotificationChannelResponse.fromPartial(e));
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

  toJSON(message: NotificationChannelListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? NotificationChannelResponse.toJSON(e) : undefined
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

const baseNotificationChannelResponse: object = {};

export const NotificationChannelResponse = {
  encode(
    message: NotificationChannelResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.items !== undefined) {
      NotificationChannel.encode(
        message.items,
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
  ): NotificationChannelResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseNotificationChannelResponse
    ) as NotificationChannelResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items = NotificationChannel.decode(reader, reader.uint32());
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

  fromJSON(object: any): NotificationChannelResponse {
    const message = globalThis.Object.create(
      baseNotificationChannelResponse
    ) as NotificationChannelResponse;
    if (object.items !== undefined && object.items !== null) {
      message.items = NotificationChannel.fromJSON(object.items);
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

  fromPartial(
    object: DeepPartial<NotificationChannelResponse>
  ): NotificationChannelResponse {
    const message = {
      ...baseNotificationChannelResponse,
    } as NotificationChannelResponse;
    if (object.items !== undefined && object.items !== null) {
      message.items = NotificationChannel.fromPartial(object.items);
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

  toJSON(message: NotificationChannelResponse): unknown {
    const obj: any = {};
    message.items !== undefined &&
      (obj.items = message.items
        ? NotificationChannel.toJSON(message.items)
        : undefined);
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },
};

const baseNotificationChannel: object = { id: "", name: "", description: "" };

export const NotificationChannel = {
  encode(
    message: NotificationChannel,
    writer: Writer = Writer.create()
  ): Writer {
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
    if (message.email !== undefined) {
      writer.uint32(42).string(message.email);
    }
    if (message.sms !== undefined) {
      writer.uint32(50).string(message.sms);
    }
    if (message.webhook !== undefined) {
      writer.uint32(58).string(message.webhook);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): NotificationChannel {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseNotificationChannel
    ) as NotificationChannel;
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
          message.email = reader.string();
          break;
        case 6:
          message.sms = reader.string();
          break;
        case 7:
          message.webhook = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NotificationChannel {
    const message = globalThis.Object.create(
      baseNotificationChannel
    ) as NotificationChannel;
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
    if (object.email !== undefined && object.email !== null) {
      message.email = String(object.email);
    } else {
      message.email = undefined;
    }
    if (object.sms !== undefined && object.sms !== null) {
      message.sms = String(object.sms);
    } else {
      message.sms = undefined;
    }
    if (object.webhook !== undefined && object.webhook !== null) {
      message.webhook = String(object.webhook);
    } else {
      message.webhook = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<NotificationChannel>): NotificationChannel {
    const message = { ...baseNotificationChannel } as NotificationChannel;
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
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = undefined;
    }
    if (object.sms !== undefined && object.sms !== null) {
      message.sms = object.sms;
    } else {
      message.sms = undefined;
    }
    if (object.webhook !== undefined && object.webhook !== null) {
      message.webhook = object.webhook;
    } else {
      message.webhook = undefined;
    }
    return message;
  },

  toJSON(message: NotificationChannel): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.email !== undefined && (obj.email = message.email);
    message.sms !== undefined && (obj.sms = message.sms);
    message.webhook !== undefined && (obj.webhook = message.webhook);
    return obj;
  },
};

/** Message structure for Notification Channel */
export interface Service {
  Read(request: ReadRequest): Promise<NotificationChannelListResponse>;
  Create(
    request: NotificationChannelList
  ): Promise<NotificationChannelListResponse>;
  Delete(request: DeleteRequest): Promise<StatusArray>;
  Update(
    request: NotificationChannelList
  ): Promise<NotificationChannelListResponse>;
  Upsert(
    request: NotificationChannelList
  ): Promise<NotificationChannelListResponse>;
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
            typeName:
              ".io.restorecommerce.notification_channel.NotificationChannel",
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
        name: "NotificationChannelList",
      },
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName:
              ".io.restorecommerce.notification_channel.NotificationChannelResponse",
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
        name: "NotificationChannelListResponse",
      },
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 1,
            type: 11,
            typeName:
              ".io.restorecommerce.notification_channel.NotificationChannel",
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
        name: "NotificationChannelResponse",
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
            name: "email",
            number: 5,
            label: 1,
            type: 9,
            oneofIndex: 0,
            jsonName: "email",
          },
          {
            name: "sms",
            number: 6,
            label: 1,
            type: 9,
            oneofIndex: 0,
            jsonName: "sms",
          },
          {
            name: "webhook",
            number: 7,
            label: 1,
            type: 9,
            oneofIndex: 0,
            jsonName: "webhook",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [{ name: "configuration_type" }],
        reservedRange: [],
        reservedName: [],
        name: "NotificationChannel",
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
              ".io.restorecommerce.notification_channel.NotificationChannelListResponse",
          },
          {
            name: "Create",
            inputType:
              ".io.restorecommerce.notification_channel.NotificationChannelList",
            outputType:
              ".io.restorecommerce.notification_channel.NotificationChannelListResponse",
          },
          {
            name: "Delete",
            inputType: ".io.restorecommerce.resourcebase.DeleteRequest",
            outputType: ".io.restorecommerce.status.StatusArray",
          },
          {
            name: "Update",
            inputType:
              ".io.restorecommerce.notification_channel.NotificationChannelList",
            outputType:
              ".io.restorecommerce.notification_channel.NotificationChannelListResponse",
          },
          {
            name: "Upsert",
            inputType:
              ".io.restorecommerce.notification_channel.NotificationChannelList",
            outputType:
              ".io.restorecommerce.notification_channel.NotificationChannelListResponse",
          },
        ],
        name: "Service",
      },
    ],
    extension: [],
    name: "io/restorecommerce/notification_channel.proto",
    package: "io.restorecommerce.notification_channel",
    sourceCodeInfo: {
      location: [
        {
          path: [6, 0],
          span: [11, 0, 17, 1],
          leadingDetachedComments: [],
          leadingComments: " Message structure for Notification Channel\n",
        },
      ],
    },
    syntax: "proto3",
  }),
  references: {
    ".io.restorecommerce.notification_channel.Deleted": Deleted,
    ".io.restorecommerce.notification_channel.NotificationChannelList": NotificationChannelList,
    ".io.restorecommerce.notification_channel.NotificationChannelListResponse": NotificationChannelListResponse,
    ".io.restorecommerce.notification_channel.NotificationChannelResponse": NotificationChannelResponse,
    ".io.restorecommerce.notification_channel.NotificationChannel": NotificationChannel,
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
