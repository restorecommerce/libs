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
  totalCount: number;
  subject?: Subject;
}

export interface CustomerListResponse {
  items: CustomerResponse[];
  totalCount: number;
  operationStatus?: OperationStatus;
}

export interface CustomerResponse {
  payload?: Customer;
  status?: Status;
}

export interface Customer {
  id: string;
  meta?: Meta;
  individualUser?: IndividualUser | undefined;
  orgUser?: OrgUser | undefined;
  guest?: Guest | undefined;
}

export interface IndividualUser {
  userId: string;
  addressId: string;
  contactPointIds: string[];
}

export interface OrgUser {
  userId: string;
  organizationId: string;
}

export interface Guest {
  guest: boolean;
  addressId: string;
  contactPointIds: string[];
}

const baseCustomerList: object = { totalCount: 0 };

export const CustomerList = {
  encode(message: CustomerList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      Customer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
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

  fromJSON(object: any): CustomerList {
    const message = globalThis.Object.create(baseCustomerList) as CustomerList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Customer.fromJSON(e));
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

  fromPartial(object: DeepPartial<CustomerList>): CustomerList {
    const message = { ...baseCustomerList } as CustomerList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Customer.fromPartial(e));
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

  toJSON(message: CustomerList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? Customer.toJSON(e) : undefined
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

const baseCustomerListResponse: object = { totalCount: 0 };

export const CustomerListResponse = {
  encode(
    message: CustomerListResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.items) {
      CustomerResponse.encode(v!, writer.uint32(10).fork()).ldelim();
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
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = Number(object.totalCount);
    } else {
      message.totalCount = 0;
    }
    if (
      object.operationStatus !== undefined &&
      object.operationStatus !== null
    ) {
      message.operationStatus = OperationStatus.fromJSON(
        object.operationStatus
      );
    } else {
      message.operationStatus = undefined;
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
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = object.totalCount;
    } else {
      message.totalCount = 0;
    }
    if (
      object.operationStatus !== undefined &&
      object.operationStatus !== null
    ) {
      message.operationStatus = OperationStatus.fromPartial(
        object.operationStatus
      );
    } else {
      message.operationStatus = undefined;
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
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus
        ? OperationStatus.toJSON(message.operationStatus)
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
    if (message.individualUser !== undefined) {
      IndividualUser.encode(
        message.individualUser,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.orgUser !== undefined) {
      OrgUser.encode(message.orgUser, writer.uint32(34).fork()).ldelim();
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
          message.individualUser = IndividualUser.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.orgUser = OrgUser.decode(reader, reader.uint32());
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
    if (object.individualUser !== undefined && object.individualUser !== null) {
      message.individualUser = IndividualUser.fromJSON(object.individualUser);
    } else {
      message.individualUser = undefined;
    }
    if (object.orgUser !== undefined && object.orgUser !== null) {
      message.orgUser = OrgUser.fromJSON(object.orgUser);
    } else {
      message.orgUser = undefined;
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
    if (object.individualUser !== undefined && object.individualUser !== null) {
      message.individualUser = IndividualUser.fromPartial(
        object.individualUser
      );
    } else {
      message.individualUser = undefined;
    }
    if (object.orgUser !== undefined && object.orgUser !== null) {
      message.orgUser = OrgUser.fromPartial(object.orgUser);
    } else {
      message.orgUser = undefined;
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
    message.individualUser !== undefined &&
      (obj.individualUser = message.individualUser
        ? IndividualUser.toJSON(message.individualUser)
        : undefined);
    message.orgUser !== undefined &&
      (obj.orgUser = message.orgUser
        ? OrgUser.toJSON(message.orgUser)
        : undefined);
    message.guest !== undefined &&
      (obj.guest = message.guest ? Guest.toJSON(message.guest) : undefined);
    return obj;
  },
};

const baseIndividualUser: object = {
  userId: "",
  addressId: "",
  contactPointIds: "",
};

export const IndividualUser = {
  encode(message: IndividualUser, writer: Writer = Writer.create()): Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.addressId !== "") {
      writer.uint32(18).string(message.addressId);
    }
    for (const v of message.contactPointIds) {
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
    message.contactPointIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.string();
          break;
        case 2:
          message.addressId = reader.string();
          break;
        case 3:
          message.contactPointIds.push(reader.string());
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
    message.contactPointIds = [];
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = String(object.userId);
    } else {
      message.userId = "";
    }
    if (object.addressId !== undefined && object.addressId !== null) {
      message.addressId = String(object.addressId);
    } else {
      message.addressId = "";
    }
    if (
      object.contactPointIds !== undefined &&
      object.contactPointIds !== null
    ) {
      for (const e of object.contactPointIds) {
        message.contactPointIds.push(String(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<IndividualUser>): IndividualUser {
    const message = { ...baseIndividualUser } as IndividualUser;
    message.contactPointIds = [];
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = object.userId;
    } else {
      message.userId = "";
    }
    if (object.addressId !== undefined && object.addressId !== null) {
      message.addressId = object.addressId;
    } else {
      message.addressId = "";
    }
    if (
      object.contactPointIds !== undefined &&
      object.contactPointIds !== null
    ) {
      for (const e of object.contactPointIds) {
        message.contactPointIds.push(e);
      }
    }
    return message;
  },

  toJSON(message: IndividualUser): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.addressId !== undefined && (obj.addressId = message.addressId);
    if (message.contactPointIds) {
      obj.contactPointIds = message.contactPointIds.map((e) => e);
    } else {
      obj.contactPointIds = [];
    }
    return obj;
  },
};

const baseOrgUser: object = { userId: "", organizationId: "" };

export const OrgUser = {
  encode(message: OrgUser, writer: Writer = Writer.create()): Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.organizationId !== "") {
      writer.uint32(18).string(message.organizationId);
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
          message.userId = reader.string();
          break;
        case 2:
          message.organizationId = reader.string();
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
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = String(object.userId);
    } else {
      message.userId = "";
    }
    if (object.organizationId !== undefined && object.organizationId !== null) {
      message.organizationId = String(object.organizationId);
    } else {
      message.organizationId = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<OrgUser>): OrgUser {
    const message = { ...baseOrgUser } as OrgUser;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = object.userId;
    } else {
      message.userId = "";
    }
    if (object.organizationId !== undefined && object.organizationId !== null) {
      message.organizationId = object.organizationId;
    } else {
      message.organizationId = "";
    }
    return message;
  },

  toJSON(message: OrgUser): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.organizationId !== undefined &&
      (obj.organizationId = message.organizationId);
    return obj;
  },
};

const baseGuest: object = { guest: false, addressId: "", contactPointIds: "" };

export const Guest = {
  encode(message: Guest, writer: Writer = Writer.create()): Writer {
    if (message.guest === true) {
      writer.uint32(8).bool(message.guest);
    }
    if (message.addressId !== "") {
      writer.uint32(18).string(message.addressId);
    }
    for (const v of message.contactPointIds) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Guest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseGuest) as Guest;
    message.contactPointIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.guest = reader.bool();
          break;
        case 2:
          message.addressId = reader.string();
          break;
        case 3:
          message.contactPointIds.push(reader.string());
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
    message.contactPointIds = [];
    if (object.guest !== undefined && object.guest !== null) {
      message.guest = Boolean(object.guest);
    } else {
      message.guest = false;
    }
    if (object.addressId !== undefined && object.addressId !== null) {
      message.addressId = String(object.addressId);
    } else {
      message.addressId = "";
    }
    if (
      object.contactPointIds !== undefined &&
      object.contactPointIds !== null
    ) {
      for (const e of object.contactPointIds) {
        message.contactPointIds.push(String(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Guest>): Guest {
    const message = { ...baseGuest } as Guest;
    message.contactPointIds = [];
    if (object.guest !== undefined && object.guest !== null) {
      message.guest = object.guest;
    } else {
      message.guest = false;
    }
    if (object.addressId !== undefined && object.addressId !== null) {
      message.addressId = object.addressId;
    } else {
      message.addressId = "";
    }
    if (
      object.contactPointIds !== undefined &&
      object.contactPointIds !== null
    ) {
      for (const e of object.contactPointIds) {
        message.contactPointIds.push(e);
      }
    }
    return message;
  },

  toJSON(message: Guest): unknown {
    const obj: any = {};
    message.guest !== undefined && (obj.guest = message.guest);
    message.addressId !== undefined && (obj.addressId = message.addressId);
    if (message.contactPointIds) {
      obj.contactPointIds = message.contactPointIds.map((e) => e);
    } else {
      obj.contactPointIds = [];
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
