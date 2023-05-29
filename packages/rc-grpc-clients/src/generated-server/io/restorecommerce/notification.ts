/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { protoMetadata as protoMetadata3, Subject } from "./auth";
import { Meta, protoMetadata as protoMetadata2 } from "./meta";
import { protoMetadata as protoMetadata5 } from "./options";
import { DeleteRequest, DeleteResponse, protoMetadata as protoMetadata1, ReadRequest } from "./resource_base";
import { OperationStatus, protoMetadata as protoMetadata4, Status } from "./status";

export const protobufPackage = "io.restorecommerce.notification";

export interface Deleted {
  id: string;
}

export interface NotificationList {
  items: Notification[];
  total_count?: number | undefined;
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
  id?: string | undefined;
  meta?: Meta | undefined;
  name?: string | undefined;
  description?: string | undefined;
  notification_channel_ids: string[];
  email?: string | undefined;
  telephone_number?: string | undefined;
  subject_template?: string | undefined;
  body_template?: string | undefined;
}

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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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

function createBaseNotificationList(): NotificationList {
  return { items: [], total_count: undefined, subject: undefined };
}

export const NotificationList = {
  encode(message: NotificationList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      Notification.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== undefined) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NotificationList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotificationList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(Notification.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.total_count = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NotificationList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => Notification.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: NotificationList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? Notification.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<NotificationList>): NotificationList {
    return NotificationList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<NotificationList>): NotificationList {
    const message = createBaseNotificationList();
    message.items = object.items?.map((e) => Notification.fromPartial(e)) || [];
    message.total_count = object.total_count ?? undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseNotificationListResponse(): NotificationListResponse {
  return { items: [], total_count: 0, operation_status: undefined };
}

export const NotificationListResponse = {
  encode(message: NotificationListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      NotificationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(message.operation_status, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NotificationListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotificationListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(NotificationResponse.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.total_count = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.operation_status = OperationStatus.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NotificationListResponse {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => NotificationResponse.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      operation_status: isSet(object.operation_status) ? OperationStatus.fromJSON(object.operation_status) : undefined,
    };
  },

  toJSON(message: NotificationListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? NotificationResponse.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status ? OperationStatus.toJSON(message.operation_status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<NotificationListResponse>): NotificationListResponse {
    return NotificationListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<NotificationListResponse>): NotificationListResponse {
    const message = createBaseNotificationListResponse();
    message.items = object.items?.map((e) => NotificationResponse.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.operation_status = (object.operation_status !== undefined && object.operation_status !== null)
      ? OperationStatus.fromPartial(object.operation_status)
      : undefined;
    return message;
  },
};

function createBaseNotificationResponse(): NotificationResponse {
  return { items: undefined, status: undefined };
}

export const NotificationResponse = {
  encode(message: NotificationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.items !== undefined) {
      Notification.encode(message.items, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NotificationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotificationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items = Notification.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.status = Status.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NotificationResponse {
    return {
      items: isSet(object.items) ? Notification.fromJSON(object.items) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: NotificationResponse): unknown {
    const obj: any = {};
    message.items !== undefined && (obj.items = message.items ? Notification.toJSON(message.items) : undefined);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<NotificationResponse>): NotificationResponse {
    return NotificationResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<NotificationResponse>): NotificationResponse {
    const message = createBaseNotificationResponse();
    message.items = (object.items !== undefined && object.items !== null)
      ? Notification.fromPartial(object.items)
      : undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBaseNotification(): Notification {
  return {
    id: undefined,
    meta: undefined,
    name: undefined,
    description: undefined,
    notification_channel_ids: [],
    email: undefined,
    telephone_number: undefined,
    subject_template: undefined,
    body_template: undefined,
  };
}

export const Notification = {
  encode(message: Notification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    if (message.name !== undefined) {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== undefined) {
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
    if (message.subject_template !== undefined) {
      writer.uint32(66).string(message.subject_template);
    }
    if (message.body_template !== undefined) {
      writer.uint32(74).string(message.body_template);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Notification {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.meta = Meta.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.description = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.notification_channel_ids.push(reader.string());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.email = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.telephone_number = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.subject_template = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.body_template = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Notification {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      description: isSet(object.description) ? String(object.description) : undefined,
      notification_channel_ids: Array.isArray(object?.notification_channel_ids)
        ? object.notification_channel_ids.map((e: any) => String(e))
        : [],
      email: isSet(object.email) ? String(object.email) : undefined,
      telephone_number: isSet(object.telephone_number) ? String(object.telephone_number) : undefined,
      subject_template: isSet(object.subject_template) ? String(object.subject_template) : undefined,
      body_template: isSet(object.body_template) ? String(object.body_template) : undefined,
    };
  },

  toJSON(message: Notification): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    if (message.notification_channel_ids) {
      obj.notification_channel_ids = message.notification_channel_ids.map((e) => e);
    } else {
      obj.notification_channel_ids = [];
    }
    message.email !== undefined && (obj.email = message.email);
    message.telephone_number !== undefined && (obj.telephone_number = message.telephone_number);
    message.subject_template !== undefined && (obj.subject_template = message.subject_template);
    message.body_template !== undefined && (obj.body_template = message.body_template);
    return obj;
  },

  create(base?: DeepPartial<Notification>): Notification {
    return Notification.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Notification>): Notification {
    const message = createBaseNotification();
    message.id = object.id ?? undefined;
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    message.name = object.name ?? undefined;
    message.description = object.description ?? undefined;
    message.notification_channel_ids = object.notification_channel_ids?.map((e) => e) || [];
    message.email = object.email ?? undefined;
    message.telephone_number = object.telephone_number ?? undefined;
    message.subject_template = object.subject_template ?? undefined;
    message.body_template = object.body_template ?? undefined;
    return message;
  },
};

/** Message structure for Notification */
export type NotificationServiceDefinition = typeof NotificationServiceDefinition;
export const NotificationServiceDefinition = {
  name: "NotificationService",
  fullName: "io.restorecommerce.notification.NotificationService",
  methods: {
    read: {
      name: "Read",
      requestType: ReadRequest,
      requestStream: false,
      responseType: NotificationListResponse,
      responseStream: false,
      options: { _unknownFields: { 248008: [Buffer.from([1])] } },
    },
    create: {
      name: "Create",
      requestType: NotificationList,
      requestStream: false,
      responseType: NotificationListResponse,
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
      requestType: NotificationList,
      requestStream: false,
      responseType: NotificationListResponse,
      responseStream: false,
      options: {},
    },
    upsert: {
      name: "Upsert",
      requestType: NotificationList,
      requestStream: false,
      responseType: NotificationListResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface NotificationServiceImplementation<CallContextExt = {}> {
  read(request: ReadRequest, context: CallContext & CallContextExt): Promise<DeepPartial<NotificationListResponse>>;
  create(
    request: NotificationList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<NotificationListResponse>>;
  delete(request: DeleteRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteResponse>>;
  update(
    request: NotificationList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<NotificationListResponse>>;
  upsert(
    request: NotificationList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<NotificationListResponse>>;
}

export interface NotificationServiceClient<CallOptionsExt = {}> {
  read(request: DeepPartial<ReadRequest>, options?: CallOptions & CallOptionsExt): Promise<NotificationListResponse>;
  create(
    request: DeepPartial<NotificationList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<NotificationListResponse>;
  delete(request: DeepPartial<DeleteRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteResponse>;
  update(
    request: DeepPartial<NotificationList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<NotificationListResponse>;
  upsert(
    request: DeepPartial<NotificationList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<NotificationListResponse>;
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
    "name": "io/restorecommerce/notification.proto",
    "package": "io.restorecommerce.notification",
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
    }, {
      "name": "NotificationList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.notification.Notification",
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
        "proto3Optional": true,
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
      "oneofDecl": [{ "name": "_total_count", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "NotificationListResponse",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.notification.NotificationResponse",
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
      "name": "NotificationResponse",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.notification.Notification",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "items",
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
      "name": "Notification",
      "field": [{
        "name": "id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "id",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "meta",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.meta.Meta",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "meta",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "name",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "description",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "description",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "notification_channel_ids",
        "number": 5,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "notificationChannelIds",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "email",
        "number": 6,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "email",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "telephone_number",
        "number": 7,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "telephoneNumber",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "subject_template",
        "number": 8,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 5,
        "jsonName": "subjectTemplate",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "body_template",
        "number": 9,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 6,
        "jsonName": "bodyTemplate",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "address_type", "options": undefined },
        { "name": "_id", "options": undefined },
        { "name": "_meta", "options": undefined },
        { "name": "_name", "options": undefined },
        { "name": "_description", "options": undefined },
        { "name": "_subject_template", "options": undefined },
        { "name": "_body_template", "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "enumType": [],
    "service": [{
      "name": "NotificationService",
      "method": [{
        "name": "Read",
        "inputType": ".io.restorecommerce.resourcebase.ReadRequest",
        "outputType": ".io.restorecommerce.notification.NotificationListResponse",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Create",
        "inputType": ".io.restorecommerce.notification.NotificationList",
        "outputType": ".io.restorecommerce.notification.NotificationListResponse",
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
        "inputType": ".io.restorecommerce.notification.NotificationList",
        "outputType": ".io.restorecommerce.notification.NotificationListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Upsert",
        "inputType": ".io.restorecommerce.notification.NotificationList",
        "outputType": ".io.restorecommerce.notification.NotificationListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }],
      "options": undefined,
    }],
    "extension": [],
    "options": undefined,
    "sourceCodeInfo": {
      "location": [{
        "path": [6, 0],
        "span": [11, 0, 19, 1],
        "leadingComments": " Message structure for Notification\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {
    ".io.restorecommerce.notification.Deleted": Deleted,
    ".io.restorecommerce.notification.NotificationList": NotificationList,
    ".io.restorecommerce.notification.NotificationListResponse": NotificationListResponse,
    ".io.restorecommerce.notification.NotificationResponse": NotificationResponse,
    ".io.restorecommerce.notification.Notification": Notification,
  },
  dependencies: [protoMetadata1, protoMetadata2, protoMetadata3, protoMetadata4, protoMetadata5],
  options: { services: { "NotificationService": { options: undefined, methods: { "Read": { "is_query": true } } } } },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
