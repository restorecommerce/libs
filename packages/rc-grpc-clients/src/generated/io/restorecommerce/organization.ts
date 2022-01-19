/* eslint-disable */
import { FileDescriptorProto } from "ts-proto-descriptors/google/protobuf/descriptor";
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
import { Writer, Reader } from "protobufjs/minimal";

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
  /** Hierarchically inferior organizations; may be null/empty */
  children_ids: string[];
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

const baseDeleteOrgData: object = { org_ids: "", user_ids: "" };

export const DeleteOrgData = {
  encode(message: DeleteOrgData, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): DeleteOrgData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseDeleteOrgData
    ) as DeleteOrgData;
    message.org_ids = [];
    message.user_ids = [];
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
    const message = globalThis.Object.create(
      baseDeleteOrgData
    ) as DeleteOrgData;
    message.org_ids = [];
    message.user_ids = [];
    if (object.org_ids !== undefined && object.org_ids !== null) {
      for (const e of object.org_ids) {
        message.org_ids.push(String(e));
      }
    }
    if (object.user_ids !== undefined && object.user_ids !== null) {
      for (const e of object.user_ids) {
        message.user_ids.push(String(e));
      }
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<DeleteOrgData>): DeleteOrgData {
    const message = { ...baseDeleteOrgData } as DeleteOrgData;
    message.org_ids = [];
    message.user_ids = [];
    if (object.org_ids !== undefined && object.org_ids !== null) {
      for (const e of object.org_ids) {
        message.org_ids.push(e);
      }
    }
    if (object.user_ids !== undefined && object.user_ids !== null) {
      for (const e of object.user_ids) {
        message.user_ids.push(e);
      }
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
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
};

const baseOrganizationList: object = { total_count: 0 };

export const OrganizationList = {
  encode(message: OrganizationList, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): OrganizationList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseOrganizationList
    ) as OrganizationList;
    message.items = [];
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
    const message = globalThis.Object.create(
      baseOrganizationList
    ) as OrganizationList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Organization.fromJSON(e));
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

  fromPartial(object: DeepPartial<OrganizationList>): OrganizationList {
    const message = { ...baseOrganizationList } as OrganizationList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Organization.fromPartial(e));
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
      (obj.total_count = message.total_count);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseOrganizationListResponse: object = { total_count: 0 };

export const OrganizationListResponse = {
  encode(
    message: OrganizationListResponse,
    writer: Writer = Writer.create()
  ): Writer {
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
    input: Reader | Uint8Array,
    length?: number
  ): OrganizationListResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseOrganizationListResponse
    ) as OrganizationListResponse;
    message.items = [];
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
    const message = globalThis.Object.create(
      baseOrganizationListResponse
    ) as OrganizationListResponse;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(OrganizationResponse.fromJSON(e));
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
    object: DeepPartial<OrganizationListResponse>
  ): OrganizationListResponse {
    const message = {
      ...baseOrganizationListResponse,
    } as OrganizationListResponse;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(OrganizationResponse.fromPartial(e));
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
      (obj.total_count = message.total_count);
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status
        ? OperationStatus.toJSON(message.operation_status)
        : undefined);
    return obj;
  },
};

const baseOrganizationResponse: object = {};

export const OrganizationResponse = {
  encode(
    message: OrganizationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.payload !== undefined) {
      Organization.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): OrganizationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseOrganizationResponse
    ) as OrganizationResponse;
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
    const message = globalThis.Object.create(
      baseOrganizationResponse
    ) as OrganizationResponse;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = Organization.fromJSON(object.payload);
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

  fromPartial(object: DeepPartial<OrganizationResponse>): OrganizationResponse {
    const message = { ...baseOrganizationResponse } as OrganizationResponse;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = Organization.fromPartial(object.payload);
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
};

const baseOrganization: object = {
  id: "",
  address_id: "",
  parent_id: "",
  children_ids: "",
  contact_point_ids: "",
  website: "",
  email: "",
  logo: "",
  vat_id: "",
  isic_v4: "",
  registration: "",
  registration_court: "",
  name: "",
  payment_method_ids: "",
};

export const Organization = {
  encode(message: Organization, writer: Writer = Writer.create()): Writer {
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
    for (const v of message.children_ids) {
      writer.uint32(42).string(v!);
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

  decode(input: Reader | Uint8Array, length?: number): Organization {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseOrganization) as Organization;
    message.children_ids = [];
    message.contact_point_ids = [];
    message.payment_method_ids = [];
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
        case 5:
          message.children_ids.push(reader.string());
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
    const message = globalThis.Object.create(baseOrganization) as Organization;
    message.children_ids = [];
    message.contact_point_ids = [];
    message.payment_method_ids = [];
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
    if (object.address_id !== undefined && object.address_id !== null) {
      message.address_id = String(object.address_id);
    } else {
      message.address_id = "";
    }
    if (object.parent_id !== undefined && object.parent_id !== null) {
      message.parent_id = String(object.parent_id);
    } else {
      message.parent_id = "";
    }
    if (object.children_ids !== undefined && object.children_ids !== null) {
      for (const e of object.children_ids) {
        message.children_ids.push(String(e));
      }
    }
    if (
      object.contact_point_ids !== undefined &&
      object.contact_point_ids !== null
    ) {
      for (const e of object.contact_point_ids) {
        message.contact_point_ids.push(String(e));
      }
    }
    if (object.website !== undefined && object.website !== null) {
      message.website = String(object.website);
    } else {
      message.website = "";
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = String(object.email);
    } else {
      message.email = "";
    }
    if (object.logo !== undefined && object.logo !== null) {
      message.logo = String(object.logo);
    } else {
      message.logo = "";
    }
    if (object.vat_id !== undefined && object.vat_id !== null) {
      message.vat_id = String(object.vat_id);
    } else {
      message.vat_id = "";
    }
    if (object.isic_v4 !== undefined && object.isic_v4 !== null) {
      message.isic_v4 = String(object.isic_v4);
    } else {
      message.isic_v4 = "";
    }
    if (object.registration !== undefined && object.registration !== null) {
      message.registration = String(object.registration);
    } else {
      message.registration = "";
    }
    if (
      object.registration_court !== undefined &&
      object.registration_court !== null
    ) {
      message.registration_court = String(object.registration_court);
    } else {
      message.registration_court = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (
      object.payment_method_ids !== undefined &&
      object.payment_method_ids !== null
    ) {
      for (const e of object.payment_method_ids) {
        message.payment_method_ids.push(String(e));
      }
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromJSON(object.data);
    } else {
      message.data = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<Organization>): Organization {
    const message = { ...baseOrganization } as Organization;
    message.children_ids = [];
    message.contact_point_ids = [];
    message.payment_method_ids = [];
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
    if (object.address_id !== undefined && object.address_id !== null) {
      message.address_id = object.address_id;
    } else {
      message.address_id = "";
    }
    if (object.parent_id !== undefined && object.parent_id !== null) {
      message.parent_id = object.parent_id;
    } else {
      message.parent_id = "";
    }
    if (object.children_ids !== undefined && object.children_ids !== null) {
      for (const e of object.children_ids) {
        message.children_ids.push(e);
      }
    }
    if (
      object.contact_point_ids !== undefined &&
      object.contact_point_ids !== null
    ) {
      for (const e of object.contact_point_ids) {
        message.contact_point_ids.push(e);
      }
    }
    if (object.website !== undefined && object.website !== null) {
      message.website = object.website;
    } else {
      message.website = "";
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = "";
    }
    if (object.logo !== undefined && object.logo !== null) {
      message.logo = object.logo;
    } else {
      message.logo = "";
    }
    if (object.vat_id !== undefined && object.vat_id !== null) {
      message.vat_id = object.vat_id;
    } else {
      message.vat_id = "";
    }
    if (object.isic_v4 !== undefined && object.isic_v4 !== null) {
      message.isic_v4 = object.isic_v4;
    } else {
      message.isic_v4 = "";
    }
    if (object.registration !== undefined && object.registration !== null) {
      message.registration = object.registration;
    } else {
      message.registration = "";
    }
    if (
      object.registration_court !== undefined &&
      object.registration_court !== null
    ) {
      message.registration_court = object.registration_court;
    } else {
      message.registration_court = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (
      object.payment_method_ids !== undefined &&
      object.payment_method_ids !== null
    ) {
      for (const e of object.payment_method_ids) {
        message.payment_method_ids.push(e);
      }
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromPartial(object.data);
    } else {
      message.data = undefined;
    }
    return message;
  },

  toJSON(message: Organization): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.address_id !== undefined && (obj.address_id = message.address_id);
    message.parent_id !== undefined && (obj.parent_id = message.parent_id);
    if (message.children_ids) {
      obj.children_ids = message.children_ids.map((e) => e);
    } else {
      obj.children_ids = [];
    }
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
};

export interface Service {
  Read(request: ReadRequest): Promise<OrganizationListResponse>;
  Create(request: OrganizationList): Promise<OrganizationListResponse>;
  Delete(request: DeleteRequest): Promise<DeleteResponse>;
  Update(request: OrganizationList): Promise<OrganizationListResponse>;
  Upsert(request: OrganizationList): Promise<OrganizationListResponse>;
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
      "google/protobuf/any.proto",
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
          { name: "org_ids", number: 1, label: 3, type: 9, jsonName: "orgIds" },
          {
            name: "user_ids",
            number: 2,
            label: 3,
            type: 9,
            jsonName: "userIds",
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
        name: "DeleteOrgData",
      },
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.organization.Organization",
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
        name: "OrganizationList",
      },
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.organization.OrganizationResponse",
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
        name: "OrganizationListResponse",
      },
      {
        field: [
          {
            name: "payload",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.organization.Organization",
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
        name: "OrganizationResponse",
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
          {
            name: "address_id",
            number: 3,
            label: 1,
            type: 9,
            jsonName: "addressId",
          },
          {
            name: "parent_id",
            number: 4,
            label: 1,
            type: 9,
            jsonName: "parentId",
          },
          {
            name: "children_ids",
            number: 5,
            label: 3,
            type: 9,
            jsonName: "childrenIds",
          },
          {
            name: "contact_point_ids",
            number: 6,
            label: 3,
            type: 9,
            jsonName: "contactPointIds",
          },
          {
            name: "website",
            number: 7,
            label: 1,
            type: 9,
            jsonName: "website",
          },
          { name: "email", number: 8, label: 1, type: 9, jsonName: "email" },
          { name: "logo", number: 9, label: 1, type: 9, jsonName: "logo" },
          { name: "vat_id", number: 10, label: 1, type: 9, jsonName: "vatId" },
          {
            name: "isic_v4",
            number: 11,
            label: 1,
            type: 9,
            jsonName: "isicV4",
          },
          {
            name: "registration",
            number: 12,
            label: 1,
            type: 9,
            jsonName: "registration",
          },
          {
            name: "registration_court",
            number: 13,
            label: 1,
            type: 9,
            jsonName: "registrationCourt",
          },
          { name: "name", number: 14, label: 1, type: 9, jsonName: "name" },
          {
            name: "payment_method_ids",
            number: 15,
            label: 3,
            type: 9,
            jsonName: "paymentMethodIds",
          },
          {
            name: "data",
            number: 16,
            label: 1,
            type: 11,
            typeName: ".google.protobuf.Any",
            jsonName: "data",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Organization",
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
              ".io.restorecommerce.organization.OrganizationListResponse",
          },
          {
            name: "Create",
            inputType: ".io.restorecommerce.organization.OrganizationList",
            outputType:
              ".io.restorecommerce.organization.OrganizationListResponse",
          },
          {
            name: "Delete",
            inputType: ".io.restorecommerce.resourcebase.DeleteRequest",
            outputType: ".io.restorecommerce.resourcebase.DeleteResponse",
          },
          {
            name: "Update",
            inputType: ".io.restorecommerce.organization.OrganizationList",
            outputType:
              ".io.restorecommerce.organization.OrganizationListResponse",
          },
          {
            name: "Upsert",
            inputType: ".io.restorecommerce.organization.OrganizationList",
            outputType:
              ".io.restorecommerce.organization.OrganizationListResponse",
          },
        ],
        name: "Service",
      },
    ],
    extension: [],
    name: "io/restorecommerce/organization.proto",
    package: "io.restorecommerce.organization",
    sourceCodeInfo: {
      location: [
        {
          path: [4, 5, 2, 0],
          span: [46, 2, 16],
          leadingDetachedComments: [],
          trailingComments: "/ Organization ID, unique, key\n",
        },
        {
          path: [4, 5, 2, 2],
          span: [48, 2, 24],
          leadingDetachedComments: [],
          trailingComments: "/ Address for the organization\n",
        },
        {
          path: [4, 5, 2, 3],
          span: [49, 2, 23],
          leadingDetachedComments: [],
          trailingComments:
            "  Hierarchically superior organization; may be null\n",
        },
        {
          path: [4, 5, 2, 4],
          span: [50, 2, 35],
          leadingDetachedComments: [],
          trailingComments:
            " Hierarchically inferior organizations; may be null/empty\n",
        },
        {
          path: [4, 5, 2, 5],
          span: [51, 2, 40],
          leadingDetachedComments: [],
          trailingComments:
            " list of possible legal addresses of different types\n",
        },
        {
          path: [4, 5, 2, 8],
          span: [54, 2, 18],
          leadingDetachedComments: [],
          trailingComments: " base64; arangoDB does not support blob storage\n",
        },
        {
          path: [4, 5, 2, 15],
          span: [61, 2, 32],
          leadingDetachedComments: [],
          trailingComments: "/ additional data\n",
        },
      ],
    },
    syntax: "proto3",
  }),
  references: {
    ".io.restorecommerce.organization.Deleted": Deleted,
    ".io.restorecommerce.organization.DeleteOrgData": DeleteOrgData,
    ".io.restorecommerce.organization.OrganizationList": OrganizationList,
    ".io.restorecommerce.organization.OrganizationListResponse": OrganizationListResponse,
    ".io.restorecommerce.organization.OrganizationResponse": OrganizationResponse,
    ".io.restorecommerce.organization.Organization": Organization,
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
