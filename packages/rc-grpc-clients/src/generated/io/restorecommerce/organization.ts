/* eslint-disable */
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  Subject,
  protoMetadata as protoMetadata4,
} from "../../io/restorecommerce/auth";
import {
  OperationStatus,
  Status,
  protoMetadata as protoMetadata5,
} from "../../io/restorecommerce/status";
import {
  Meta,
  protoMetadata as protoMetadata3,
} from "../../io/restorecommerce/meta";
import {
  Any,
  protoMetadata as protoMetadata2,
} from "../../google/protobuf/any";
import {
  protoMetadata as protoMetadata1,
  DeleteResponse,
  ReadRequest,
  DeleteRequest,
} from "../../io/restorecommerce/resource_base";
import {
  protoMetadata as protoMetadata6,
  Resolver,
} from "../../io/restorecommerce/options";

export const protobufPackage = "io.restorecommerce.organization";

export interface Deleted {
  id: string;
}

export interface DeleteOrgData {
  orgIds: string[];
  userIds: string[];
  subject?: Subject;
}

export interface OrganizationList {
  items: Organization[];
  totalCount: number;
  subject?: Subject;
}

export interface OrganizationListResponse {
  items: OrganizationResponse[];
  totalCount: number;
  operationStatus?: OperationStatus;
}

export interface OrganizationResponse {
  payload?: Organization;
  status?: Status;
}

export interface Organization {
  /** / Organization ID, unique, key */
  id: string;
  meta?: Meta;
  /** / Address for the organization */
  addressId: string;
  /** Hierarchically superior organization; may be null */
  parentId: string;
  /** list of possible legal addresses of different types */
  contactPointIds: string[];
  website: string;
  email: string;
  /** base64; arangoDB does not support blob storage */
  logo: string;
  vatId: string;
  isicV4: string;
  registration: string;
  registrationCourt: string;
  name: string;
  paymentMethodIds: string[];
  /** / additional data */
  data?: Any;
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

function createBaseDeleteOrgData(): DeleteOrgData {
  return { orgIds: [], userIds: [], subject: undefined };
}

export const DeleteOrgData = {
  encode(
    message: DeleteOrgData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.orgIds) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.userIds) {
      writer.uint32(18).string(v!);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteOrgData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteOrgData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orgIds.push(reader.string());
          break;
        case 2:
          message.userIds.push(reader.string());
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

  fromJSON(object: any): DeleteOrgData {
    return {
      orgIds: Array.isArray(object?.orgIds)
        ? object.orgIds.map((e: any) => String(e))
        : [],
      userIds: Array.isArray(object?.userIds)
        ? object.userIds.map((e: any) => String(e))
        : [],
      subject: isSet(object.subject)
        ? Subject.fromJSON(object.subject)
        : undefined,
    };
  },

  toJSON(message: DeleteOrgData): unknown {
    const obj: any = {};
    if (message.orgIds) {
      obj.orgIds = message.orgIds.map((e) => e);
    } else {
      obj.orgIds = [];
    }
    if (message.userIds) {
      obj.userIds = message.userIds.map((e) => e);
    } else {
      obj.userIds = [];
    }
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<DeleteOrgData>): DeleteOrgData {
    const message = createBaseDeleteOrgData();
    message.orgIds = object.orgIds?.map((e) => e) || [];
    message.userIds = object.userIds?.map((e) => e) || [];
    message.subject =
      object.subject !== undefined && object.subject !== null
        ? Subject.fromPartial(object.subject)
        : undefined;
    return message;
  },
};

function createBaseOrganizationList(): OrganizationList {
  return { items: [], totalCount: 0, subject: undefined };
}

export const OrganizationList = {
  encode(
    message: OrganizationList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      Organization.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrganizationList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrganizationList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Organization.decode(reader, reader.uint32()));
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

  fromJSON(object: any): OrganizationList {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => Organization.fromJSON(e))
        : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
      subject: isSet(object.subject)
        ? Subject.fromJSON(object.subject)
        : undefined,
    };
  },

  toJSON(message: OrganizationList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? Organization.toJSON(e) : undefined
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

  fromPartial(object: DeepPartial<OrganizationList>): OrganizationList {
    const message = createBaseOrganizationList();
    message.items = object.items?.map((e) => Organization.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    message.subject =
      object.subject !== undefined && object.subject !== null
        ? Subject.fromPartial(object.subject)
        : undefined;
    return message;
  },
};

function createBaseOrganizationListResponse(): OrganizationListResponse {
  return { items: [], totalCount: 0, operationStatus: undefined };
}

export const OrganizationListResponse = {
  encode(
    message: OrganizationListResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      OrganizationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): OrganizationListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrganizationListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            OrganizationResponse.decode(reader, reader.uint32())
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

  fromJSON(object: any): OrganizationListResponse {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => OrganizationResponse.fromJSON(e))
        : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
      operationStatus: isSet(object.operationStatus)
        ? OperationStatus.fromJSON(object.operationStatus)
        : undefined,
    };
  },

  toJSON(message: OrganizationListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? OrganizationResponse.toJSON(e) : undefined
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
    object: DeepPartial<OrganizationListResponse>
  ): OrganizationListResponse {
    const message = createBaseOrganizationListResponse();
    message.items =
      object.items?.map((e) => OrganizationResponse.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    message.operationStatus =
      object.operationStatus !== undefined && object.operationStatus !== null
        ? OperationStatus.fromPartial(object.operationStatus)
        : undefined;
    return message;
  },
};

function createBaseOrganizationResponse(): OrganizationResponse {
  return { payload: undefined, status: undefined };
}

export const OrganizationResponse = {
  encode(
    message: OrganizationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.payload !== undefined) {
      Organization.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OrganizationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrganizationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = Organization.decode(reader, reader.uint32());
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

  fromJSON(object: any): OrganizationResponse {
    return {
      payload: isSet(object.payload)
        ? Organization.fromJSON(object.payload)
        : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: OrganizationResponse): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload
        ? Organization.toJSON(message.payload)
        : undefined);
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<OrganizationResponse>): OrganizationResponse {
    const message = createBaseOrganizationResponse();
    message.payload =
      object.payload !== undefined && object.payload !== null
        ? Organization.fromPartial(object.payload)
        : undefined;
    message.status =
      object.status !== undefined && object.status !== null
        ? Status.fromPartial(object.status)
        : undefined;
    return message;
  },
};

function createBaseOrganization(): Organization {
  return {
    id: "",
    meta: undefined,
    addressId: "",
    parentId: "",
    contactPointIds: [],
    website: "",
    email: "",
    logo: "",
    vatId: "",
    isicV4: "",
    registration: "",
    registrationCourt: "",
    name: "",
    paymentMethodIds: [],
    data: undefined,
  };
}

export const Organization = {
  encode(
    message: Organization,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    if (message.addressId !== "") {
      writer.uint32(26).string(message.addressId);
    }
    if (message.parentId !== "") {
      writer.uint32(34).string(message.parentId);
    }
    for (const v of message.contactPointIds) {
      writer.uint32(50).string(v!);
    }
    if (message.website !== "") {
      writer.uint32(58).string(message.website);
    }
    if (message.email !== "") {
      writer.uint32(66).string(message.email);
    }
    if (message.logo !== "") {
      writer.uint32(74).string(message.logo);
    }
    if (message.vatId !== "") {
      writer.uint32(82).string(message.vatId);
    }
    if (message.isicV4 !== "") {
      writer.uint32(90).string(message.isicV4);
    }
    if (message.registration !== "") {
      writer.uint32(98).string(message.registration);
    }
    if (message.registrationCourt !== "") {
      writer.uint32(106).string(message.registrationCourt);
    }
    if (message.name !== "") {
      writer.uint32(114).string(message.name);
    }
    for (const v of message.paymentMethodIds) {
      writer.uint32(122).string(v!);
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(130).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Organization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrganization();
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
          message.addressId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 6:
          message.contactPointIds.push(reader.string());
          break;
        case 7:
          message.website = reader.string();
          break;
        case 8:
          message.email = reader.string();
          break;
        case 9:
          message.logo = reader.string();
          break;
        case 10:
          message.vatId = reader.string();
          break;
        case 11:
          message.isicV4 = reader.string();
          break;
        case 12:
          message.registration = reader.string();
          break;
        case 13:
          message.registrationCourt = reader.string();
          break;
        case 14:
          message.name = reader.string();
          break;
        case 15:
          message.paymentMethodIds.push(reader.string());
          break;
        case 16:
          message.data = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Organization {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      addressId: isSet(object.addressId) ? String(object.addressId) : "",
      parentId: isSet(object.parentId) ? String(object.parentId) : "",
      contactPointIds: Array.isArray(object?.contactPointIds)
        ? object.contactPointIds.map((e: any) => String(e))
        : [],
      website: isSet(object.website) ? String(object.website) : "",
      email: isSet(object.email) ? String(object.email) : "",
      logo: isSet(object.logo) ? String(object.logo) : "",
      vatId: isSet(object.vatId) ? String(object.vatId) : "",
      isicV4: isSet(object.isicV4) ? String(object.isicV4) : "",
      registration: isSet(object.registration)
        ? String(object.registration)
        : "",
      registrationCourt: isSet(object.registrationCourt)
        ? String(object.registrationCourt)
        : "",
      name: isSet(object.name) ? String(object.name) : "",
      paymentMethodIds: Array.isArray(object?.paymentMethodIds)
        ? object.paymentMethodIds.map((e: any) => String(e))
        : [],
      data: isSet(object.data) ? Any.fromJSON(object.data) : undefined,
    };
  },

  toJSON(message: Organization): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.addressId !== undefined && (obj.addressId = message.addressId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    if (message.contactPointIds) {
      obj.contactPointIds = message.contactPointIds.map((e) => e);
    } else {
      obj.contactPointIds = [];
    }
    message.website !== undefined && (obj.website = message.website);
    message.email !== undefined && (obj.email = message.email);
    message.logo !== undefined && (obj.logo = message.logo);
    message.vatId !== undefined && (obj.vatId = message.vatId);
    message.isicV4 !== undefined && (obj.isicV4 = message.isicV4);
    message.registration !== undefined &&
      (obj.registration = message.registration);
    message.registrationCourt !== undefined &&
      (obj.registrationCourt = message.registrationCourt);
    message.name !== undefined && (obj.name = message.name);
    if (message.paymentMethodIds) {
      obj.paymentMethodIds = message.paymentMethodIds.map((e) => e);
    } else {
      obj.paymentMethodIds = [];
    }
    message.data !== undefined &&
      (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Organization>): Organization {
    const message = createBaseOrganization();
    message.id = object.id ?? "";
    message.meta =
      object.meta !== undefined && object.meta !== null
        ? Meta.fromPartial(object.meta)
        : undefined;
    message.addressId = object.addressId ?? "";
    message.parentId = object.parentId ?? "";
    message.contactPointIds = object.contactPointIds?.map((e) => e) || [];
    message.website = object.website ?? "";
    message.email = object.email ?? "";
    message.logo = object.logo ?? "";
    message.vatId = object.vatId ?? "";
    message.isicV4 = object.isicV4 ?? "";
    message.registration = object.registration ?? "";
    message.registrationCourt = object.registrationCourt ?? "";
    message.name = object.name ?? "";
    message.paymentMethodIds = object.paymentMethodIds?.map((e) => e) || [];
    message.data =
      object.data !== undefined && object.data !== null
        ? Any.fromPartial(object.data)
        : undefined;
    return message;
  },
};

export interface Service {
  Read(request: ReadRequest): Promise<OrganizationListResponse>;
  Create(request: OrganizationList): Promise<OrganizationListResponse>;
  Delete(request: DeleteRequest): Promise<DeleteResponse>;
  Update(request: OrganizationList): Promise<OrganizationListResponse>;
  Upsert(request: OrganizationList): Promise<OrganizationListResponse>;
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
    name: "io/restorecommerce/organization.proto",
    package: "io.restorecommerce.organization",
    dependency: [
      "io/restorecommerce/resource_base.proto",
      "google/protobuf/any.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/options.proto",
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
        name: "DeleteOrgData",
        field: [
          {
            name: "org_ids",
            number: 1,
            label: 3,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "orgIds",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "user_ids",
            number: 2,
            label: 3,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "userIds",
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
        name: "OrganizationList",
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.organization.Organization",
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
        name: "OrganizationListResponse",
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.organization.OrganizationResponse",
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
        name: "OrganizationResponse",
        field: [
          {
            name: "payload",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.organization.Organization",
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
        name: "Organization",
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
            name: "address_id",
            number: 3,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "addressId",
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
            name: "parent_id",
            number: 4,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "parentId",
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
            name: "contact_point_ids",
            number: 6,
            label: 3,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "contactPointIds",
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
            number: 7,
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
            number: 8,
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
            name: "logo",
            number: 9,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "logo",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "vat_id",
            number: 10,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "vatId",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "isic_v4",
            number: 11,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "isicV4",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "registration",
            number: 12,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "registration",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "registration_court",
            number: 13,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "registrationCourt",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "name",
            number: 14,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "name",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "payment_method_ids",
            number: 15,
            label: 3,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "paymentMethodIds",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "data",
            number: 16,
            label: 1,
            type: 11,
            typeName: ".google.protobuf.Any",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "data",
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
              ".io.restorecommerce.organization.OrganizationListResponse",
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
            inputType: ".io.restorecommerce.organization.OrganizationList",
            outputType:
              ".io.restorecommerce.organization.OrganizationListResponse",
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
            inputType: ".io.restorecommerce.organization.OrganizationList",
            outputType:
              ".io.restorecommerce.organization.OrganizationListResponse",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Upsert",
            inputType: ".io.restorecommerce.organization.OrganizationList",
            outputType:
              ".io.restorecommerce.organization.OrganizationListResponse",
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
          path: [4, 5, 2, 0],
          span: [51, 2, 16],
          leadingComments: "",
          trailingComments: "/ Organization ID, unique, key\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 5, 2, 2],
          span: [53, 2, 61, 4],
          leadingComments: "",
          trailingComments: "/ Address for the organization\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 5, 2, 3],
          span: [62, 2, 70, 4],
          leadingComments: "",
          trailingComments:
            "  Hierarchically superior organization; may be null\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 5, 2, 4],
          span: [71, 2, 79, 4],
          leadingComments: "",
          trailingComments:
            " list of possible legal addresses of different types\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 5, 2, 7],
          span: [82, 2, 18],
          leadingComments: "",
          trailingComments: " base64; arangoDB does not support blob storage\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 5, 2, 14],
          span: [89, 2, 32],
          leadingComments: "",
          trailingComments: "/ additional data\n",
          leadingDetachedComments: [],
        },
      ],
    },
    syntax: "proto3",
  }),
  references: {
    ".io.restorecommerce.organization.Deleted": Deleted,
    ".io.restorecommerce.organization.DeleteOrgData": DeleteOrgData,
    ".io.restorecommerce.organization.OrganizationList": OrganizationList,
    ".io.restorecommerce.organization.OrganizationListResponse":
      OrganizationListResponse,
    ".io.restorecommerce.organization.OrganizationResponse":
      OrganizationResponse,
    ".io.restorecommerce.organization.Organization": Organization,
  },
  dependencies: [
    protoMetadata1,
    protoMetadata2,
    protoMetadata3,
    protoMetadata4,
    protoMetadata5,
    protoMetadata6,
  ],
  options: {
    messages: {
      Organization: {
        fields: {
          address_id: {
            resolver: Resolver.decode(
              Buffer.from(
                "CiMuaW8ucmVzdG9yZWNvbW1lcmNlLmFkZHJlc3MuQWRkcmVzcxIIcmVzb3VyY2UaB2FkZHJlc3MiBFJlYWQqB2FkZHJlc3M=",
                "base64"
              )
            ),
          },
          parent_id: {
            resolver: Resolver.decode(
              Buffer.from(
                "Ci0uaW8ucmVzdG9yZWNvbW1lcmNlLm9yZ2FuaXphdGlvbi5Pcmdhbml6YXRpb24SCHJlc291cmNlGgxvcmdhbml6YXRpb24iBFJlYWQqBnBhcmVudA==",
                "base64"
              )
            ),
          },
          contact_point_ids: {
            resolver: Resolver.decode(
              Buffer.from(
                "Ci4uaW8ucmVzdG9yZWNvbW1lcmNlLmNvbnRhY3RfcG9pbnQuQ29udGFjdFBvaW50EghyZXNvdXJjZRoNY29udGFjdF9wb2ludCIEUmVhZCoNY29udGFjdFBvaW50cw==",
                "base64"
              )
            ),
          },
        },
      },
    },
    services: {
      Service: {
        options: { service_name: "organization" },
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
