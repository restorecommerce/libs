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

export const protobufPackage = "io.restorecommerce.customer";

export interface CustomerList {
  items: Customer[];
  total_count: number;
  subject?: Subject;
}

export interface CustomerListResponse {
  items: CustomerResponse[];
  total_count: number;
  operation_status?: OperationStatus;
}

export interface CustomerResponse {
  payload?: Customer;
  status?: Status;
}

export interface Customer {
  id: string;
  meta?: Meta;
  individual_user?: IndividualUser | undefined;
  org_user?: OrgUser | undefined;
  guest?: Guest | undefined;
}

export interface IndividualUser {
  user_id: string;
  address_id: string;
  contact_point_ids: string[];
}

export interface OrgUser {
  user_id: string;
  organization_id: string;
}

export interface Guest {
  guest: boolean;
  address_id: string;
  contact_point_ids: string[];
}

const baseCustomerList: object = { total_count: 0 };

export const CustomerList = {
  encode(message: CustomerList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      Customer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CustomerList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseCustomerList) as CustomerList;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Customer.decode(reader, reader.uint32()));
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

  fromJSON(object: any): CustomerList {
    const message = globalThis.Object.create(baseCustomerList) as CustomerList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Customer.fromJSON(e));
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

  fromPartial(object: DeepPartial<CustomerList>): CustomerList {
    const message = { ...baseCustomerList } as CustomerList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Customer.fromPartial(e));
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

  toJSON(message: CustomerList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? Customer.toJSON(e) : undefined
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

const baseCustomerListResponse: object = { total_count: 0 };

export const CustomerListResponse = {
  encode(
    message: CustomerListResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.items) {
      CustomerResponse.encode(v!, writer.uint32(10).fork()).ldelim();
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

  decode(input: Reader | Uint8Array, length?: number): CustomerListResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseCustomerListResponse
    ) as CustomerListResponse;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(CustomerResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): CustomerListResponse {
    const message = globalThis.Object.create(
      baseCustomerListResponse
    ) as CustomerListResponse;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(CustomerResponse.fromJSON(e));
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

  fromPartial(object: DeepPartial<CustomerListResponse>): CustomerListResponse {
    const message = { ...baseCustomerListResponse } as CustomerListResponse;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(CustomerResponse.fromPartial(e));
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

  toJSON(message: CustomerListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? CustomerResponse.toJSON(e) : undefined
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

const baseCustomerResponse: object = {};

export const CustomerResponse = {
  encode(message: CustomerResponse, writer: Writer = Writer.create()): Writer {
    if (message.payload !== undefined) {
      Customer.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CustomerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseCustomerResponse
    ) as CustomerResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = Customer.decode(reader, reader.uint32());
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

  fromJSON(object: any): CustomerResponse {
    const message = globalThis.Object.create(
      baseCustomerResponse
    ) as CustomerResponse;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = Customer.fromJSON(object.payload);
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

  fromPartial(object: DeepPartial<CustomerResponse>): CustomerResponse {
    const message = { ...baseCustomerResponse } as CustomerResponse;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = Customer.fromPartial(object.payload);
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

  toJSON(message: CustomerResponse): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload
        ? Customer.toJSON(message.payload)
        : undefined);
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },
};

const baseCustomer: object = { id: "" };

export const Customer = {
  encode(message: Customer, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    if (message.individual_user !== undefined) {
      IndividualUser.encode(
        message.individual_user,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.org_user !== undefined) {
      OrgUser.encode(message.org_user, writer.uint32(34).fork()).ldelim();
    }
    if (message.guest !== undefined) {
      Guest.encode(message.guest, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Customer {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseCustomer) as Customer;
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
          message.individual_user = IndividualUser.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.org_user = OrgUser.decode(reader, reader.uint32());
          break;
        case 5:
          message.guest = Guest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Customer {
    const message = globalThis.Object.create(baseCustomer) as Customer;
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
    if (
      object.individual_user !== undefined &&
      object.individual_user !== null
    ) {
      message.individual_user = IndividualUser.fromJSON(object.individual_user);
    } else {
      message.individual_user = undefined;
    }
    if (object.org_user !== undefined && object.org_user !== null) {
      message.org_user = OrgUser.fromJSON(object.org_user);
    } else {
      message.org_user = undefined;
    }
    if (object.guest !== undefined && object.guest !== null) {
      message.guest = Guest.fromJSON(object.guest);
    } else {
      message.guest = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<Customer>): Customer {
    const message = { ...baseCustomer } as Customer;
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
    if (
      object.individual_user !== undefined &&
      object.individual_user !== null
    ) {
      message.individual_user = IndividualUser.fromPartial(
        object.individual_user
      );
    } else {
      message.individual_user = undefined;
    }
    if (object.org_user !== undefined && object.org_user !== null) {
      message.org_user = OrgUser.fromPartial(object.org_user);
    } else {
      message.org_user = undefined;
    }
    if (object.guest !== undefined && object.guest !== null) {
      message.guest = Guest.fromPartial(object.guest);
    } else {
      message.guest = undefined;
    }
    return message;
  },

  toJSON(message: Customer): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.individual_user !== undefined &&
      (obj.individual_user = message.individual_user
        ? IndividualUser.toJSON(message.individual_user)
        : undefined);
    message.org_user !== undefined &&
      (obj.org_user = message.org_user
        ? OrgUser.toJSON(message.org_user)
        : undefined);
    message.guest !== undefined &&
      (obj.guest = message.guest ? Guest.toJSON(message.guest) : undefined);
    return obj;
  },
};

const baseIndividualUser: object = {
  user_id: "",
  address_id: "",
  contact_point_ids: "",
};

export const IndividualUser = {
  encode(message: IndividualUser, writer: Writer = Writer.create()): Writer {
    if (message.user_id !== "") {
      writer.uint32(10).string(message.user_id);
    }
    if (message.address_id !== "") {
      writer.uint32(18).string(message.address_id);
    }
    for (const v of message.contact_point_ids) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): IndividualUser {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseIndividualUser
    ) as IndividualUser;
    message.contact_point_ids = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user_id = reader.string();
          break;
        case 2:
          message.address_id = reader.string();
          break;
        case 3:
          message.contact_point_ids.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IndividualUser {
    const message = globalThis.Object.create(
      baseIndividualUser
    ) as IndividualUser;
    message.contact_point_ids = [];
    if (object.user_id !== undefined && object.user_id !== null) {
      message.user_id = String(object.user_id);
    } else {
      message.user_id = "";
    }
    if (object.address_id !== undefined && object.address_id !== null) {
      message.address_id = String(object.address_id);
    } else {
      message.address_id = "";
    }
    if (
      object.contact_point_ids !== undefined &&
      object.contact_point_ids !== null
    ) {
      for (const e of object.contact_point_ids) {
        message.contact_point_ids.push(String(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<IndividualUser>): IndividualUser {
    const message = { ...baseIndividualUser } as IndividualUser;
    message.contact_point_ids = [];
    if (object.user_id !== undefined && object.user_id !== null) {
      message.user_id = object.user_id;
    } else {
      message.user_id = "";
    }
    if (object.address_id !== undefined && object.address_id !== null) {
      message.address_id = object.address_id;
    } else {
      message.address_id = "";
    }
    if (
      object.contact_point_ids !== undefined &&
      object.contact_point_ids !== null
    ) {
      for (const e of object.contact_point_ids) {
        message.contact_point_ids.push(e);
      }
    }
    return message;
  },

  toJSON(message: IndividualUser): unknown {
    const obj: any = {};
    message.user_id !== undefined && (obj.user_id = message.user_id);
    message.address_id !== undefined && (obj.address_id = message.address_id);
    if (message.contact_point_ids) {
      obj.contact_point_ids = message.contact_point_ids.map((e) => e);
    } else {
      obj.contact_point_ids = [];
    }
    return obj;
  },
};

const baseOrgUser: object = { user_id: "", organization_id: "" };

export const OrgUser = {
  encode(message: OrgUser, writer: Writer = Writer.create()): Writer {
    if (message.user_id !== "") {
      writer.uint32(10).string(message.user_id);
    }
    if (message.organization_id !== "") {
      writer.uint32(18).string(message.organization_id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): OrgUser {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseOrgUser) as OrgUser;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user_id = reader.string();
          break;
        case 2:
          message.organization_id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrgUser {
    const message = globalThis.Object.create(baseOrgUser) as OrgUser;
    if (object.user_id !== undefined && object.user_id !== null) {
      message.user_id = String(object.user_id);
    } else {
      message.user_id = "";
    }
    if (
      object.organization_id !== undefined &&
      object.organization_id !== null
    ) {
      message.organization_id = String(object.organization_id);
    } else {
      message.organization_id = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<OrgUser>): OrgUser {
    const message = { ...baseOrgUser } as OrgUser;
    if (object.user_id !== undefined && object.user_id !== null) {
      message.user_id = object.user_id;
    } else {
      message.user_id = "";
    }
    if (
      object.organization_id !== undefined &&
      object.organization_id !== null
    ) {
      message.organization_id = object.organization_id;
    } else {
      message.organization_id = "";
    }
    return message;
  },

  toJSON(message: OrgUser): unknown {
    const obj: any = {};
    message.user_id !== undefined && (obj.user_id = message.user_id);
    message.organization_id !== undefined &&
      (obj.organization_id = message.organization_id);
    return obj;
  },
};

const baseGuest: object = {
  guest: false,
  address_id: "",
  contact_point_ids: "",
};

export const Guest = {
  encode(message: Guest, writer: Writer = Writer.create()): Writer {
    if (message.guest === true) {
      writer.uint32(8).bool(message.guest);
    }
    if (message.address_id !== "") {
      writer.uint32(18).string(message.address_id);
    }
    for (const v of message.contact_point_ids) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Guest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseGuest) as Guest;
    message.contact_point_ids = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.guest = reader.bool();
          break;
        case 2:
          message.address_id = reader.string();
          break;
        case 3:
          message.contact_point_ids.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Guest {
    const message = globalThis.Object.create(baseGuest) as Guest;
    message.contact_point_ids = [];
    if (object.guest !== undefined && object.guest !== null) {
      message.guest = Boolean(object.guest);
    } else {
      message.guest = false;
    }
    if (object.address_id !== undefined && object.address_id !== null) {
      message.address_id = String(object.address_id);
    } else {
      message.address_id = "";
    }
    if (
      object.contact_point_ids !== undefined &&
      object.contact_point_ids !== null
    ) {
      for (const e of object.contact_point_ids) {
        message.contact_point_ids.push(String(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Guest>): Guest {
    const message = { ...baseGuest } as Guest;
    message.contact_point_ids = [];
    if (object.guest !== undefined && object.guest !== null) {
      message.guest = object.guest;
    } else {
      message.guest = false;
    }
    if (object.address_id !== undefined && object.address_id !== null) {
      message.address_id = object.address_id;
    } else {
      message.address_id = "";
    }
    if (
      object.contact_point_ids !== undefined &&
      object.contact_point_ids !== null
    ) {
      for (const e of object.contact_point_ids) {
        message.contact_point_ids.push(e);
      }
    }
    return message;
  },

  toJSON(message: Guest): unknown {
    const obj: any = {};
    message.guest !== undefined && (obj.guest = message.guest);
    message.address_id !== undefined && (obj.address_id = message.address_id);
    if (message.contact_point_ids) {
      obj.contact_point_ids = message.contact_point_ids.map((e) => e);
    } else {
      obj.contact_point_ids = [];
    }
    return obj;
  },
};

/** Microservice definition. */
export interface Service {
  Read(request: ReadRequest): Promise<CustomerListResponse>;
  Create(request: CustomerList): Promise<CustomerListResponse>;
  Delete(request: DeleteRequest): Promise<DeleteResponse>;
  Update(request: CustomerList): Promise<CustomerListResponse>;
  Upsert(request: CustomerList): Promise<CustomerListResponse>;
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
            typeName: ".io.restorecommerce.customer.Customer",
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
        name: "CustomerList",
      },
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.customer.CustomerResponse",
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
        name: "CustomerListResponse",
      },
      {
        field: [
          {
            name: "payload",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.customer.Customer",
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
        name: "CustomerResponse",
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
            name: "individual_user",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.customer.IndividualUser",
            oneofIndex: 0,
            jsonName: "individualUser",
          },
          {
            name: "org_user",
            number: 4,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.customer.OrgUser",
            oneofIndex: 0,
            jsonName: "orgUser",
          },
          {
            name: "guest",
            number: 5,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.customer.Guest",
            oneofIndex: 0,
            jsonName: "guest",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [{ name: "customer" }],
        reservedRange: [],
        reservedName: [],
        name: "Customer",
      },
      {
        field: [
          { name: "user_id", number: 1, label: 1, type: 9, jsonName: "userId" },
          {
            name: "address_id",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "addressId",
          },
          {
            name: "contact_point_ids",
            number: 3,
            label: 3,
            type: 9,
            jsonName: "contactPointIds",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "IndividualUser",
      },
      {
        field: [
          { name: "user_id", number: 1, label: 1, type: 9, jsonName: "userId" },
          {
            name: "organization_id",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "organizationId",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "OrgUser",
      },
      {
        field: [
          { name: "guest", number: 1, label: 1, type: 8, jsonName: "guest" },
          {
            name: "address_id",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "addressId",
          },
          {
            name: "contact_point_ids",
            number: 3,
            label: 3,
            type: 9,
            jsonName: "contactPointIds",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Guest",
      },
    ],
    enumType: [],
    service: [
      {
        method: [
          {
            name: "Read",
            inputType: ".io.restorecommerce.resourcebase.ReadRequest",
            outputType: ".io.restorecommerce.customer.CustomerListResponse",
          },
          {
            name: "Create",
            inputType: ".io.restorecommerce.customer.CustomerList",
            outputType: ".io.restorecommerce.customer.CustomerListResponse",
          },
          {
            name: "Delete",
            inputType: ".io.restorecommerce.resourcebase.DeleteRequest",
            outputType: ".io.restorecommerce.resourcebase.DeleteResponse",
          },
          {
            name: "Update",
            inputType: ".io.restorecommerce.customer.CustomerList",
            outputType: ".io.restorecommerce.customer.CustomerListResponse",
          },
          {
            name: "Upsert",
            inputType: ".io.restorecommerce.customer.CustomerList",
            outputType: ".io.restorecommerce.customer.CustomerListResponse",
          },
        ],
        name: "Service",
      },
    ],
    extension: [],
    name: "io/restorecommerce/customer.proto",
    package: "io.restorecommerce.customer",
    sourceCodeInfo: {
      location: [
        {
          path: [6, 0],
          span: [12, 0, 18, 1],
          leadingDetachedComments: [],
          leadingComments: "\nMicroservice definition.\n",
        },
      ],
    },
    syntax: "proto3",
  }),
  references: {
    ".io.restorecommerce.customer.CustomerList": CustomerList,
    ".io.restorecommerce.customer.CustomerListResponse": CustomerListResponse,
    ".io.restorecommerce.customer.CustomerResponse": CustomerResponse,
    ".io.restorecommerce.customer.Customer": Customer,
    ".io.restorecommerce.customer.IndividualUser": IndividualUser,
    ".io.restorecommerce.customer.OrgUser": OrgUser,
    ".io.restorecommerce.customer.Guest": Guest,
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
