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

function createBaseCustomerList(): CustomerList {
  return { items: [], totalCount: 0, subject: undefined };
}

export const CustomerList = {
  encode(
    message: CustomerList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): CustomerList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomerList();
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
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => Customer.fromJSON(e))
        : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
      subject: isSet(object.subject)
        ? Subject.fromJSON(object.subject)
        : undefined,
    };
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
    message.totalCount !== undefined &&
      (obj.totalCount = Math.round(message.totalCount));
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<CustomerList>): CustomerList {
    const message = createBaseCustomerList();
    message.items = object.items?.map((e) => Customer.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    message.subject =
      object.subject !== undefined && object.subject !== null
        ? Subject.fromPartial(object.subject)
        : undefined;
    return message;
  },
};

function createBaseCustomerListResponse(): CustomerListResponse {
  return { items: [], totalCount: 0, operationStatus: undefined };
}

export const CustomerListResponse = {
  encode(
    message: CustomerListResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CustomerListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomerListResponse();
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
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => CustomerResponse.fromJSON(e))
        : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
      operationStatus: isSet(object.operationStatus)
        ? OperationStatus.fromJSON(object.operationStatus)
        : undefined,
    };
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
    message.totalCount !== undefined &&
      (obj.totalCount = Math.round(message.totalCount));
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus
        ? OperationStatus.toJSON(message.operationStatus)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<CustomerListResponse>): CustomerListResponse {
    const message = createBaseCustomerListResponse();
    message.items =
      object.items?.map((e) => CustomerResponse.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    message.operationStatus =
      object.operationStatus !== undefined && object.operationStatus !== null
        ? OperationStatus.fromPartial(object.operationStatus)
        : undefined;
    return message;
  },
};

function createBaseCustomerResponse(): CustomerResponse {
  return { payload: undefined, status: undefined };
}

export const CustomerResponse = {
  encode(
    message: CustomerResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.payload !== undefined) {
      Customer.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CustomerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomerResponse();
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
    return {
      payload: isSet(object.payload)
        ? Customer.fromJSON(object.payload)
        : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
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

  fromPartial(object: DeepPartial<CustomerResponse>): CustomerResponse {
    const message = createBaseCustomerResponse();
    message.payload =
      object.payload !== undefined && object.payload !== null
        ? Customer.fromPartial(object.payload)
        : undefined;
    message.status =
      object.status !== undefined && object.status !== null
        ? Status.fromPartial(object.status)
        : undefined;
    return message;
  },
};

function createBaseCustomer(): Customer {
  return {
    id: "",
    meta: undefined,
    individualUser: undefined,
    orgUser: undefined,
    guest: undefined,
  };
}

export const Customer = {
  encode(
    message: Customer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Customer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomer();
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
    return {
      id: isSet(object.id) ? String(object.id) : "",
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      individualUser: isSet(object.individualUser)
        ? IndividualUser.fromJSON(object.individualUser)
        : undefined,
      orgUser: isSet(object.orgUser)
        ? OrgUser.fromJSON(object.orgUser)
        : undefined,
      guest: isSet(object.guest) ? Guest.fromJSON(object.guest) : undefined,
    };
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

  fromPartial(object: DeepPartial<Customer>): Customer {
    const message = createBaseCustomer();
    message.id = object.id ?? "";
    message.meta =
      object.meta !== undefined && object.meta !== null
        ? Meta.fromPartial(object.meta)
        : undefined;
    message.individualUser =
      object.individualUser !== undefined && object.individualUser !== null
        ? IndividualUser.fromPartial(object.individualUser)
        : undefined;
    message.orgUser =
      object.orgUser !== undefined && object.orgUser !== null
        ? OrgUser.fromPartial(object.orgUser)
        : undefined;
    message.guest =
      object.guest !== undefined && object.guest !== null
        ? Guest.fromPartial(object.guest)
        : undefined;
    return message;
  },
};

function createBaseIndividualUser(): IndividualUser {
  return { userId: "", addressId: "", contactPointIds: [] };
}

export const IndividualUser = {
  encode(
    message: IndividualUser,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): IndividualUser {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndividualUser();
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
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      addressId: isSet(object.addressId) ? String(object.addressId) : "",
      contactPointIds: Array.isArray(object?.contactPointIds)
        ? object.contactPointIds.map((e: any) => String(e))
        : [],
    };
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

  fromPartial(object: DeepPartial<IndividualUser>): IndividualUser {
    const message = createBaseIndividualUser();
    message.userId = object.userId ?? "";
    message.addressId = object.addressId ?? "";
    message.contactPointIds = object.contactPointIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseOrgUser(): OrgUser {
  return { userId: "", organizationId: "" };
}

export const OrgUser = {
  encode(
    message: OrgUser,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.organizationId !== "") {
      writer.uint32(18).string(message.organizationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrgUser {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrgUser();
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
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      organizationId: isSet(object.organizationId)
        ? String(object.organizationId)
        : "",
    };
  },

  toJSON(message: OrgUser): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.organizationId !== undefined &&
      (obj.organizationId = message.organizationId);
    return obj;
  },

  fromPartial(object: DeepPartial<OrgUser>): OrgUser {
    const message = createBaseOrgUser();
    message.userId = object.userId ?? "";
    message.organizationId = object.organizationId ?? "";
    return message;
  },
};

function createBaseGuest(): Guest {
  return { guest: false, addressId: "", contactPointIds: [] };
}

export const Guest = {
  encode(message: Guest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Guest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGuest();
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
    return {
      guest: isSet(object.guest) ? Boolean(object.guest) : false,
      addressId: isSet(object.addressId) ? String(object.addressId) : "",
      contactPointIds: Array.isArray(object?.contactPointIds)
        ? object.contactPointIds.map((e: any) => String(e))
        : [],
    };
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

  fromPartial(object: DeepPartial<Guest>): Guest {
    const message = createBaseGuest();
    message.guest = object.guest ?? false;
    message.addressId = object.addressId ?? "";
    message.contactPointIds = object.contactPointIds?.map((e) => e) || [];
    return message;
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
    name: "io/restorecommerce/customer.proto",
    package: "io.restorecommerce.customer",
    dependency: [
      "io/restorecommerce/resource_base.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/options.proto",
    ],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        name: "CustomerList",
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.customer.Customer",
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
        name: "CustomerListResponse",
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.customer.CustomerResponse",
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
        name: "CustomerResponse",
        field: [
          {
            name: "payload",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.customer.Customer",
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
        name: "Customer",
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
            name: "individual_user",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.customer.IndividualUser",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "individualUser",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "org_user",
            number: 4,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.customer.OrgUser",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "orgUser",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "guest",
            number: 5,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.customer.Guest",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "guest",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [{ name: "customer", options: undefined }],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "IndividualUser",
        field: [
          {
            name: "user_id",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "userId",
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
            name: "address_id",
            number: 2,
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
            name: "contact_point_ids",
            number: 3,
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
        name: "OrgUser",
        field: [
          {
            name: "user_id",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "userId",
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
            name: "organization_id",
            number: 2,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "organizationId",
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
      {
        name: "Guest",
        field: [
          {
            name: "guest",
            number: 1,
            label: 1,
            type: 8,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "guest",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "address_id",
            number: 2,
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
            name: "contact_point_ids",
            number: 3,
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
            outputType: ".io.restorecommerce.customer.CustomerListResponse",
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
            inputType: ".io.restorecommerce.customer.CustomerList",
            outputType: ".io.restorecommerce.customer.CustomerListResponse",
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
            inputType: ".io.restorecommerce.customer.CustomerList",
            outputType: ".io.restorecommerce.customer.CustomerListResponse",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Upsert",
            inputType: ".io.restorecommerce.customer.CustomerList",
            outputType: ".io.restorecommerce.customer.CustomerListResponse",
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
          path: [6, 0],
          span: [13, 0, 23, 1],
          leadingComments: "\nMicroservice definition.\n",
          trailingComments: "",
          leadingDetachedComments: [],
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
    protoMetadata5,
  ],
  options: {
    messages: {
      IndividualUser: {
        fields: {
          user_id: {
            resolver: Resolver.decode(
              Buffer.from(
                "Ch0uaW8ucmVzdG9yZWNvbW1lcmNlLnVzZXIuVXNlchIIaWRlbnRpdHkaBHVzZXIiBFJlYWQqBHVzZXI=",
                "base64"
              )
            ),
          },
          address_id: {
            resolver: Resolver.decode(
              Buffer.from(
                "CiMuaW8ucmVzdG9yZWNvbW1lcmNlLmFkZHJlc3MuQWRkcmVzcxIIcmVzb3VyY2UaB2FkZHJlc3MiBFJlYWQqB2FkZHJlc3M=",
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
      OrgUser: {
        fields: {
          user_id: {
            resolver: Resolver.decode(
              Buffer.from(
                "Ch0uaW8ucmVzdG9yZWNvbW1lcmNlLnVzZXIuVXNlchIIaWRlbnRpdHkaBHVzZXIiBFJlYWQqBHVzZXI=",
                "base64"
              )
            ),
          },
          organization_id: {
            resolver: Resolver.decode(
              Buffer.from(
                "Ci0uaW8ucmVzdG9yZWNvbW1lcmNlLm9yZ2FuaXphdGlvbi5Pcmdhbml6YXRpb24SCHJlc291cmNlGgxvcmdhbml6YXRpb24iBFJlYWQqDG9yZ2FuaXphdGlvbg==",
                "base64"
              )
            ),
          },
        },
      },
      Guest: {
        fields: {
          address_id: {
            resolver: Resolver.decode(
              Buffer.from(
                "CiMuaW8ucmVzdG9yZWNvbW1lcmNlLmFkZHJlc3MuQWRkcmVzcxIIcmVzb3VyY2UaB2FkZHJlc3MiBFJlYWQqB2FkZHJlc3M=",
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
        options: { service_name: "customer" },
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
