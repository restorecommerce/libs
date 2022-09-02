/* eslint-disable */
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { Subject, protoMetadata as protoMetadata4 } from "./auth";
import {
  OperationStatus,
  Status,
  protoMetadata as protoMetadata5,
} from "./status";
import { Meta, protoMetadata as protoMetadata3 } from "./meta";
import {
  Any,
  protoMetadata as protoMetadata2,
} from "../../google/protobuf/any";
import { CallContext, CallOptions } from "nice-grpc-common";
import {
  protoMetadata as protoMetadata1,
  ReadRequest,
  DeleteRequest,
  DeleteResponse,
} from "./resource_base";
import { protoMetadata as protoMetadata6, Resolver } from "./options";
import { protoMetadata as protoMetadata7 } from "./address";
import { protoMetadata as protoMetadata8 } from "./contact_point";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "io.restorecommerce.organization";

export interface Deleted {
  id: string;
}

export interface DeleteOrgData {
  org_ids: string[];
  user_ids: string[];
  subject?: Subject;
}

export interface OrganizationList {
  items: Organization[];
  total_count: number;
  subject?: Subject;
}

export interface OrganizationListResponse {
  items: OrganizationResponse[];
  total_count: number;
  operation_status?: OperationStatus;
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
  address_id: string;
  /** Hierarchically superior organization; may be null */
  parent_id: string;
  /** list of possible legal addresses of different types */
  contact_point_ids: string[];
  website: string;
  email: string;
  /** base64; arangoDB does not support blob storage */
  logo: string;
  vat_id: string;
  isic_v4: string;
  registration: string;
  registration_court: string;
  name: string;
  payment_method_ids: string[];
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
  return { org_ids: [], user_ids: [], subject: undefined };
}

export const DeleteOrgData = {
  encode(
    message: DeleteOrgData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.org_ids) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.user_ids) {
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
          message.org_ids.push(reader.string());
          break;
        case 2:
          message.user_ids.push(reader.string());
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
      org_ids: Array.isArray(object?.org_ids)
        ? object.org_ids.map((e: any) => String(e))
        : [],
      user_ids: Array.isArray(object?.user_ids)
        ? object.user_ids.map((e: any) => String(e))
        : [],
      subject: isSet(object.subject)
        ? Subject.fromJSON(object.subject)
        : undefined,
    };
  },

  toJSON(message: DeleteOrgData): unknown {
    const obj: any = {};
    if (message.org_ids) {
      obj.org_ids = message.org_ids.map((e) => e);
    } else {
      obj.org_ids = [];
    }
    if (message.user_ids) {
      obj.user_ids = message.user_ids.map((e) => e);
    } else {
      obj.user_ids = [];
    }
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<DeleteOrgData>): DeleteOrgData {
    const message = createBaseDeleteOrgData();
    message.org_ids = object.org_ids?.map((e) => e) || [];
    message.user_ids = object.user_ids?.map((e) => e) || [];
    message.subject =
      object.subject !== undefined && object.subject !== null
        ? Subject.fromPartial(object.subject)
        : undefined;
    return message;
  },
};

function createBaseOrganizationList(): OrganizationList {
  return { items: [], total_count: 0, subject: undefined };
}

export const OrganizationList = {
  encode(
    message: OrganizationList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      Organization.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
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

  fromJSON(object: any): OrganizationList {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => Organization.fromJSON(e))
        : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
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
    message.total_count !== undefined &&
      (obj.total_count = Math.round(message.total_count));
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<OrganizationList>): OrganizationList {
    const message = createBaseOrganizationList();
    message.items = object.items?.map((e) => Organization.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.subject =
      object.subject !== undefined && object.subject !== null
        ? Subject.fromPartial(object.subject)
        : undefined;
    return message;
  },
};

function createBaseOrganizationListResponse(): OrganizationListResponse {
  return { items: [], total_count: 0, operation_status: undefined };
}

export const OrganizationListResponse = {
  encode(
    message: OrganizationListResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      OrganizationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
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

  fromJSON(object: any): OrganizationListResponse {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => OrganizationResponse.fromJSON(e))
        : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      operation_status: isSet(object.operation_status)
        ? OperationStatus.fromJSON(object.operation_status)
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
    message.total_count !== undefined &&
      (obj.total_count = Math.round(message.total_count));
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status
        ? OperationStatus.toJSON(message.operation_status)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<OrganizationListResponse>
  ): OrganizationListResponse {
    const message = createBaseOrganizationListResponse();
    message.items =
      object.items?.map((e) => OrganizationResponse.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.operation_status =
      object.operation_status !== undefined && object.operation_status !== null
        ? OperationStatus.fromPartial(object.operation_status)
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
    address_id: "",
    parent_id: "",
    contact_point_ids: [],
    website: "",
    email: "",
    logo: "",
    vat_id: "",
    isic_v4: "",
    registration: "",
    registration_court: "",
    name: "",
    payment_method_ids: [],
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
    if (message.address_id !== "") {
      writer.uint32(26).string(message.address_id);
    }
    if (message.parent_id !== "") {
      writer.uint32(34).string(message.parent_id);
    }
    for (const v of message.contact_point_ids) {
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
    if (message.vat_id !== "") {
      writer.uint32(82).string(message.vat_id);
    }
    if (message.isic_v4 !== "") {
      writer.uint32(90).string(message.isic_v4);
    }
    if (message.registration !== "") {
      writer.uint32(98).string(message.registration);
    }
    if (message.registration_court !== "") {
      writer.uint32(106).string(message.registration_court);
    }
    if (message.name !== "") {
      writer.uint32(114).string(message.name);
    }
    for (const v of message.payment_method_ids) {
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
          message.address_id = reader.string();
          break;
        case 4:
          message.parent_id = reader.string();
          break;
        case 6:
          message.contact_point_ids.push(reader.string());
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
          message.vat_id = reader.string();
          break;
        case 11:
          message.isic_v4 = reader.string();
          break;
        case 12:
          message.registration = reader.string();
          break;
        case 13:
          message.registration_court = reader.string();
          break;
        case 14:
          message.name = reader.string();
          break;
        case 15:
          message.payment_method_ids.push(reader.string());
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
      address_id: isSet(object.address_id) ? String(object.address_id) : "",
      parent_id: isSet(object.parent_id) ? String(object.parent_id) : "",
      contact_point_ids: Array.isArray(object?.contact_point_ids)
        ? object.contact_point_ids.map((e: any) => String(e))
        : [],
      website: isSet(object.website) ? String(object.website) : "",
      email: isSet(object.email) ? String(object.email) : "",
      logo: isSet(object.logo) ? String(object.logo) : "",
      vat_id: isSet(object.vat_id) ? String(object.vat_id) : "",
      isic_v4: isSet(object.isic_v4) ? String(object.isic_v4) : "",
      registration: isSet(object.registration)
        ? String(object.registration)
        : "",
      registration_court: isSet(object.registration_court)
        ? String(object.registration_court)
        : "",
      name: isSet(object.name) ? String(object.name) : "",
      payment_method_ids: Array.isArray(object?.payment_method_ids)
        ? object.payment_method_ids.map((e: any) => String(e))
        : [],
      data: isSet(object.data) ? Any.fromJSON(object.data) : undefined,
    };
  },

  toJSON(message: Organization): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.address_id !== undefined && (obj.address_id = message.address_id);
    message.parent_id !== undefined && (obj.parent_id = message.parent_id);
    if (message.contact_point_ids) {
      obj.contact_point_ids = message.contact_point_ids.map((e) => e);
    } else {
      obj.contact_point_ids = [];
    }
    message.website !== undefined && (obj.website = message.website);
    message.email !== undefined && (obj.email = message.email);
    message.logo !== undefined && (obj.logo = message.logo);
    message.vat_id !== undefined && (obj.vat_id = message.vat_id);
    message.isic_v4 !== undefined && (obj.isic_v4 = message.isic_v4);
    message.registration !== undefined &&
      (obj.registration = message.registration);
    message.registration_court !== undefined &&
      (obj.registration_court = message.registration_court);
    message.name !== undefined && (obj.name = message.name);
    if (message.payment_method_ids) {
      obj.payment_method_ids = message.payment_method_ids.map((e) => e);
    } else {
      obj.payment_method_ids = [];
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
    message.address_id = object.address_id ?? "";
    message.parent_id = object.parent_id ?? "";
    message.contact_point_ids = object.contact_point_ids?.map((e) => e) || [];
    message.website = object.website ?? "";
    message.email = object.email ?? "";
    message.logo = object.logo ?? "";
    message.vat_id = object.vat_id ?? "";
    message.isic_v4 = object.isic_v4 ?? "";
    message.registration = object.registration ?? "";
    message.registration_court = object.registration_court ?? "";
    message.name = object.name ?? "";
    message.payment_method_ids = object.payment_method_ids?.map((e) => e) || [];
    message.data =
      object.data !== undefined && object.data !== null
        ? Any.fromPartial(object.data)
        : undefined;
    return message;
  },
};

export type ServiceDefinition = typeof ServiceDefinition;
export const ServiceDefinition = {
  name: "Service",
  fullName: "io.restorecommerce.organization.Service",
  methods: {
    read: {
      name: "Read",
      requestType: ReadRequest,
      requestStream: false,
      responseType: OrganizationListResponse,
      responseStream: false,
      options: {},
    },
    create: {
      name: "Create",
      requestType: OrganizationList,
      requestStream: false,
      responseType: OrganizationListResponse,
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
      requestType: OrganizationList,
      requestStream: false,
      responseType: OrganizationListResponse,
      responseStream: false,
      options: {},
    },
    upsert: {
      name: "Upsert",
      requestType: OrganizationList,
      requestStream: false,
      responseType: OrganizationListResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface ServiceServiceImplementation<CallContextExt = {}> {
  read(
    request: ReadRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<OrganizationListResponse>>;
  create(
    request: OrganizationList,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<OrganizationListResponse>>;
  delete(
    request: DeleteRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<DeleteResponse>>;
  update(
    request: OrganizationList,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<OrganizationListResponse>>;
  upsert(
    request: OrganizationList,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<OrganizationListResponse>>;
}

export interface ServiceClient<CallOptionsExt = {}> {
  read(
    request: DeepPartial<ReadRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<OrganizationListResponse>;
  create(
    request: DeepPartial<OrganizationList>,
    options?: CallOptions & CallOptionsExt
  ): Promise<OrganizationListResponse>;
  delete(
    request: DeepPartial<DeleteRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<DeleteResponse>;
  update(
    request: DeepPartial<OrganizationList>,
    options?: CallOptions & CallOptionsExt
  ): Promise<OrganizationListResponse>;
  upsert(
    request: DeepPartial<OrganizationList>,
    options?: CallOptions & CallOptionsExt
  ): Promise<OrganizationListResponse>;
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
      "io/restorecommerce/address.proto",
      "io/restorecommerce/contact_point.proto",
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
          path: [3, 6],
          span: [12, 0, 42],
          leadingComments: " Used by resolvers\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [4, 5, 2, 0],
          span: [55, 2, 16],
          leadingComments: "",
          trailingComments: "/ Organization ID, unique, key\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 5, 2, 2],
          span: [57, 2, 65, 4],
          leadingComments: "",
          trailingComments: "/ Address for the organization\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 5, 2, 3],
          span: [66, 2, 74, 4],
          leadingComments: "",
          trailingComments:
            "  Hierarchically superior organization; may be null\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 5, 2, 4],
          span: [75, 2, 83, 4],
          leadingComments: "",
          trailingComments:
            " list of possible legal addresses of different types\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 5, 2, 7],
          span: [86, 2, 18],
          leadingComments: "",
          trailingComments: " base64; arangoDB does not support blob storage\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 5, 2, 14],
          span: [93, 2, 32],
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
    protoMetadata7,
    protoMetadata8,
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}