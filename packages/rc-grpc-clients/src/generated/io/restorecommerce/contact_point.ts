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
import {
  protoMetadata as protoMetadata5,
  Resolver,
} from "../../io/restorecommerce/options";
import { protoMetadata as protoMetadata6 } from "../../io/restorecommerce/address";
import { protoMetadata as protoMetadata7 } from "../../io/restorecommerce/contact_point_type";
import { protoMetadata as protoMetadata8 } from "../../io/restorecommerce/timezone";
import { protoMetadata as protoMetadata9 } from "../../io/restorecommerce/locale";

export const protobufPackage = "io.restorecommerce.contact_point";

export interface Deleted {
  id: string;
}

export interface ContactPointList {
  items: ContactPoint[];
  totalCount: number;
  subject?: Subject;
}

export interface ContactPointListResponse {
  items: ContactPointResponse[];
  totalCount: number;
  operationStatus?: OperationStatus;
}

export interface ContactPointResponse {
  payload?: ContactPoint;
  status?: Status;
}

export interface ContactPoint {
  id: string;
  meta?: Meta;
  physicalAddressId: string;
  website: string;
  email: string;
  contactPointTypeId: string;
  telephone: string;
  timezoneId: string;
  localeId: string;
}

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

function createBaseContactPointList(): ContactPointList {
  return { items: [], totalCount: 0, subject: undefined };
}

export const ContactPointList = {
  encode(
    message: ContactPointList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      ContactPoint.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContactPointList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContactPointList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(ContactPoint.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ContactPointList {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => ContactPoint.fromJSON(e))
        : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
      subject: isSet(object.subject)
        ? Subject.fromJSON(object.subject)
        : undefined,
    };
  },

  toJSON(message: ContactPointList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? ContactPoint.toJSON(e) : undefined
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

  fromPartial(object: DeepPartial<ContactPointList>): ContactPointList {
    const message = createBaseContactPointList();
    message.items = object.items?.map((e) => ContactPoint.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    message.subject =
      object.subject !== undefined && object.subject !== null
        ? Subject.fromPartial(object.subject)
        : undefined;
    return message;
  },
};

function createBaseContactPointListResponse(): ContactPointListResponse {
  return { items: [], totalCount: 0, operationStatus: undefined };
}

export const ContactPointListResponse = {
  encode(
    message: ContactPointListResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      ContactPointResponse.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): ContactPointListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContactPointListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            ContactPointResponse.decode(reader, reader.uint32())
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

  fromJSON(object: any): ContactPointListResponse {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => ContactPointResponse.fromJSON(e))
        : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
      operationStatus: isSet(object.operationStatus)
        ? OperationStatus.fromJSON(object.operationStatus)
        : undefined,
    };
  },

  toJSON(message: ContactPointListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? ContactPointResponse.toJSON(e) : undefined
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
    object: DeepPartial<ContactPointListResponse>
  ): ContactPointListResponse {
    const message = createBaseContactPointListResponse();
    message.items =
      object.items?.map((e) => ContactPointResponse.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    message.operationStatus =
      object.operationStatus !== undefined && object.operationStatus !== null
        ? OperationStatus.fromPartial(object.operationStatus)
        : undefined;
    return message;
  },
};

function createBaseContactPointResponse(): ContactPointResponse {
  return { payload: undefined, status: undefined };
}

export const ContactPointResponse = {
  encode(
    message: ContactPointResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.payload !== undefined) {
      ContactPoint.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ContactPointResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContactPointResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = ContactPoint.decode(reader, reader.uint32());
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

  fromJSON(object: any): ContactPointResponse {
    return {
      payload: isSet(object.payload)
        ? ContactPoint.fromJSON(object.payload)
        : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: ContactPointResponse): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload
        ? ContactPoint.toJSON(message.payload)
        : undefined);
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ContactPointResponse>): ContactPointResponse {
    const message = createBaseContactPointResponse();
    message.payload =
      object.payload !== undefined && object.payload !== null
        ? ContactPoint.fromPartial(object.payload)
        : undefined;
    message.status =
      object.status !== undefined && object.status !== null
        ? Status.fromPartial(object.status)
        : undefined;
    return message;
  },
};

function createBaseContactPoint(): ContactPoint {
  return {
    id: "",
    meta: undefined,
    physicalAddressId: "",
    website: "",
    email: "",
    contactPointTypeId: "",
    telephone: "",
    timezoneId: "",
    localeId: "",
  };
}

export const ContactPoint = {
  encode(
    message: ContactPoint,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    if (message.physicalAddressId !== "") {
      writer.uint32(26).string(message.physicalAddressId);
    }
    if (message.website !== "") {
      writer.uint32(34).string(message.website);
    }
    if (message.email !== "") {
      writer.uint32(42).string(message.email);
    }
    if (message.contactPointTypeId !== "") {
      writer.uint32(50).string(message.contactPointTypeId);
    }
    if (message.telephone !== "") {
      writer.uint32(66).string(message.telephone);
    }
    if (message.timezoneId !== "") {
      writer.uint32(74).string(message.timezoneId);
    }
    if (message.localeId !== "") {
      writer.uint32(82).string(message.localeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContactPoint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContactPoint();
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
          message.physicalAddressId = reader.string();
          break;
        case 4:
          message.website = reader.string();
          break;
        case 5:
          message.email = reader.string();
          break;
        case 6:
          message.contactPointTypeId = reader.string();
          break;
        case 8:
          message.telephone = reader.string();
          break;
        case 9:
          message.timezoneId = reader.string();
          break;
        case 10:
          message.localeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ContactPoint {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      physicalAddressId: isSet(object.physicalAddressId)
        ? String(object.physicalAddressId)
        : "",
      website: isSet(object.website) ? String(object.website) : "",
      email: isSet(object.email) ? String(object.email) : "",
      contactPointTypeId: isSet(object.contactPointTypeId)
        ? String(object.contactPointTypeId)
        : "",
      telephone: isSet(object.telephone) ? String(object.telephone) : "",
      timezoneId: isSet(object.timezoneId) ? String(object.timezoneId) : "",
      localeId: isSet(object.localeId) ? String(object.localeId) : "",
    };
  },

  toJSON(message: ContactPoint): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.physicalAddressId !== undefined &&
      (obj.physicalAddressId = message.physicalAddressId);
    message.website !== undefined && (obj.website = message.website);
    message.email !== undefined && (obj.email = message.email);
    message.contactPointTypeId !== undefined &&
      (obj.contactPointTypeId = message.contactPointTypeId);
    message.telephone !== undefined && (obj.telephone = message.telephone);
    message.timezoneId !== undefined && (obj.timezoneId = message.timezoneId);
    message.localeId !== undefined && (obj.localeId = message.localeId);
    return obj;
  },

  fromPartial(object: DeepPartial<ContactPoint>): ContactPoint {
    const message = createBaseContactPoint();
    message.id = object.id ?? "";
    message.meta =
      object.meta !== undefined && object.meta !== null
        ? Meta.fromPartial(object.meta)
        : undefined;
    message.physicalAddressId = object.physicalAddressId ?? "";
    message.website = object.website ?? "";
    message.email = object.email ?? "";
    message.contactPointTypeId = object.contactPointTypeId ?? "";
    message.telephone = object.telephone ?? "";
    message.timezoneId = object.timezoneId ?? "";
    message.localeId = object.localeId ?? "";
    return message;
  },
};

export interface Service {
  Read(request: ReadRequest): Promise<ContactPointListResponse>;
  Create(request: ContactPointList): Promise<ContactPointListResponse>;
  Delete(request: DeleteRequest): Promise<DeleteResponse>;
  Update(request: ContactPointList): Promise<ContactPointListResponse>;
  Upsert(request: ContactPointList): Promise<ContactPointListResponse>;
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
    name: "io/restorecommerce/contact_point.proto",
    package: "io.restorecommerce.contact_point",
    dependency: [
      "io/restorecommerce/resource_base.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/options.proto",
      "io/restorecommerce/address.proto",
      "io/restorecommerce/contact_point_type.proto",
      "io/restorecommerce/timezone.proto",
      "io/restorecommerce/locale.proto",
    ],
    publicDependency: [],
    weakDependency: [],
    messageType: [
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
      {
        name: "ContactPointList",
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.contact_point.ContactPoint",
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
        name: "ContactPointListResponse",
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.contact_point.ContactPointResponse",
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
        name: "ContactPointResponse",
        field: [
          {
            name: "payload",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.contact_point.ContactPoint",
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
        name: "ContactPoint",
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
            name: "meta",
            number: 2,
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
            name: "physical_address_id",
            number: 3,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "physicalAddressId",
            options: {
              ctype: 0,
              packed: false,
              jstype: 0,
              lazy: false,
              deprecated: false,
              weak: false,
              uninterpretedOption: [],
            },
            proto3Optional: false,
          },
          {
            name: "website",
            number: 4,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "website",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "email",
            number: 5,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "email",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "contact_point_type_id",
            number: 6,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "contactPointTypeId",
            options: {
              ctype: 0,
              packed: false,
              jstype: 0,
              lazy: false,
              deprecated: false,
              weak: false,
              uninterpretedOption: [],
            },
            proto3Optional: false,
          },
          {
            name: "telephone",
            number: 8,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "telephone",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "timezone_id",
            number: 9,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "timezoneId",
            options: {
              ctype: 0,
              packed: false,
              jstype: 0,
              lazy: false,
              deprecated: false,
              weak: false,
              uninterpretedOption: [],
            },
            proto3Optional: false,
          },
          {
            name: "locale_id",
            number: 10,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "localeId",
            options: {
              ctype: 0,
              packed: false,
              jstype: 0,
              lazy: false,
              deprecated: false,
              weak: false,
              uninterpretedOption: [],
            },
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
              ".io.restorecommerce.contact_point.ContactPointListResponse",
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
            inputType: ".io.restorecommerce.contact_point.ContactPointList",
            outputType:
              ".io.restorecommerce.contact_point.ContactPointListResponse",
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
            inputType: ".io.restorecommerce.contact_point.ContactPointList",
            outputType:
              ".io.restorecommerce.contact_point.ContactPointListResponse",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Upsert",
            inputType: ".io.restorecommerce.contact_point.ContactPointList",
            outputType:
              ".io.restorecommerce.contact_point.ContactPointListResponse",
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
          path: [3, 5],
          span: [11, 0, 42],
          leadingComments: " Used by resolvers\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
      ],
    },
    syntax: "proto3",
  }),
  references: {
    ".io.restorecommerce.contact_point.Deleted": Deleted,
    ".io.restorecommerce.contact_point.ContactPointList": ContactPointList,
    ".io.restorecommerce.contact_point.ContactPointListResponse":
      ContactPointListResponse,
    ".io.restorecommerce.contact_point.ContactPointResponse":
      ContactPointResponse,
    ".io.restorecommerce.contact_point.ContactPoint": ContactPoint,
  },
  dependencies: [
    protoMetadata1,
    protoMetadata2,
    protoMetadata3,
    protoMetadata4,
    protoMetadata5,
    protoMetadata6,
    protoMetadata7,
    protoMetadata8,
    protoMetadata9,
  ],
  options: {
    messages: {
      ContactPoint: {
        fields: {
          physical_address_id: {
            resolver: Resolver.decode(
              Buffer.from(
                "CiMuaW8ucmVzdG9yZWNvbW1lcmNlLmFkZHJlc3MuQWRkcmVzcxIIcmVzb3VyY2UaB2FkZHJlc3MiBFJlYWQqD3BoeXNpY2FsQWRkcmVzcw==",
                "base64"
              )
            ),
          },
          contact_point_type_id: {
            resolver: Resolver.decode(
              Buffer.from(
                "CjcuaW8ucmVzdG9yZWNvbW1lcmNlLmNvbnRhY3RfcG9pbnRfdHlwZS5Db250YWN0UG9pbnRUeXBlEghyZXNvdXJjZRoSY29udGFjdF9wb2ludF90eXBlIgRSZWFkKhBjb250YWN0UG9pbnRUeXBl",
                "base64"
              )
            ),
          },
          timezone_id: {
            resolver: Resolver.decode(
              Buffer.from(
                "CiUuaW8ucmVzdG9yZWNvbW1lcmNlLnRpbWV6b25lLlRpbWV6b25lEghyZXNvdXJjZRoIdGltZXpvbmUiBFJlYWQqCHRpbWV6b25l",
                "base64"
              )
            ),
          },
          locale_id: {
            resolver: Resolver.decode(
              Buffer.from(
                "CiEuaW8ucmVzdG9yZWNvbW1lcmNlLmxvY2FsZS5Mb2NhbGUSCHJlc291cmNlGgZsb2NhbGUiBFJlYWQqBmxvY2FsZQ==",
                "base64"
              )
            ),
          },
        },
      },
    },
    services: {
      Service: {
        options: { service_name: "contact_point" },
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
