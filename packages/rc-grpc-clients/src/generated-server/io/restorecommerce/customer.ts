/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { protoMetadata as protoMetadata7 } from "./address";
import { protoMetadata as protoMetadata3, Subject } from "./auth";
import { protoMetadata as protoMetadata8 } from "./contact_point";
import { Meta, protoMetadata as protoMetadata2 } from "./meta";
import { protoMetadata as protoMetadata5, Resolver } from "./options";
import { protoMetadata as protoMetadata9 } from "./organization";
import { DeleteRequest, DeleteResponse, protoMetadata as protoMetadata1, ReadRequest } from "./resource_base";
import { OperationStatus, protoMetadata as protoMetadata4, Status } from "./status";
import { protoMetadata as protoMetadata6 } from "./user";

export const protobufPackage = "io.restorecommerce.customer";

export interface CustomerList {
  items: Customer[];
  total_count?: number | undefined;
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
  id?: string | undefined;
  meta?: Meta | undefined;
  individual_user?: IndividualUser | undefined;
  org_user?: OrgUser | undefined;
  guest?: Guest | undefined;
}

export interface IndividualUser {
  user_id?: string | undefined;
  address_id?: string | undefined;
  contact_point_ids: string[];
}

export interface OrgUser {
  user_id?: string | undefined;
  organization_id?: string | undefined;
}

export interface Guest {
  guest: boolean;
  address_id?: string | undefined;
  contact_point_ids: string[];
}

function createBaseCustomerList(): CustomerList {
  return { items: [], total_count: undefined, subject: undefined };
}

export const CustomerList = {
  encode(message: CustomerList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      Customer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== undefined) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CustomerList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomerList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(Customer.decode(reader, reader.uint32()));
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

  fromJSON(object: any): CustomerList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => Customer.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: CustomerList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? Customer.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CustomerList>): CustomerList {
    return CustomerList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CustomerList>): CustomerList {
    const message = createBaseCustomerList();
    message.items = object.items?.map((e) => Customer.fromPartial(e)) || [];
    message.total_count = object.total_count ?? undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseCustomerListResponse(): CustomerListResponse {
  return { items: [], total_count: 0, operation_status: undefined };
}

export const CustomerListResponse = {
  encode(message: CustomerListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      CustomerResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(message.operation_status, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CustomerListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomerListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(CustomerResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): CustomerListResponse {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => CustomerResponse.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      operation_status: isSet(object.operation_status) ? OperationStatus.fromJSON(object.operation_status) : undefined,
    };
  },

  toJSON(message: CustomerListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? CustomerResponse.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status ? OperationStatus.toJSON(message.operation_status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CustomerListResponse>): CustomerListResponse {
    return CustomerListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CustomerListResponse>): CustomerListResponse {
    const message = createBaseCustomerListResponse();
    message.items = object.items?.map((e) => CustomerResponse.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.operation_status = (object.operation_status !== undefined && object.operation_status !== null)
      ? OperationStatus.fromPartial(object.operation_status)
      : undefined;
    return message;
  },
};

function createBaseCustomerResponse(): CustomerResponse {
  return { payload: undefined, status: undefined };
}

export const CustomerResponse = {
  encode(message: CustomerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      Customer.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CustomerResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payload = Customer.decode(reader, reader.uint32());
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

  fromJSON(object: any): CustomerResponse {
    return {
      payload: isSet(object.payload) ? Customer.fromJSON(object.payload) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: CustomerResponse): unknown {
    const obj: any = {};
    message.payload !== undefined && (obj.payload = message.payload ? Customer.toJSON(message.payload) : undefined);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CustomerResponse>): CustomerResponse {
    return CustomerResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CustomerResponse>): CustomerResponse {
    const message = createBaseCustomerResponse();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? Customer.fromPartial(object.payload)
      : undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBaseCustomer(): Customer {
  return { id: undefined, meta: undefined, individual_user: undefined, org_user: undefined, guest: undefined };
}

export const Customer = {
  encode(message: Customer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    if (message.individual_user !== undefined) {
      IndividualUser.encode(message.individual_user, writer.uint32(26).fork()).ldelim();
    }
    if (message.org_user !== undefined) {
      OrgUser.encode(message.org_user, writer.uint32(34).fork()).ldelim();
    }
    if (message.guest !== undefined) {
      Guest.encode(message.guest, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Customer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomer();
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

          message.individual_user = IndividualUser.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.org_user = OrgUser.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.guest = Guest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Customer {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      individual_user: isSet(object.individual_user) ? IndividualUser.fromJSON(object.individual_user) : undefined,
      org_user: isSet(object.org_user) ? OrgUser.fromJSON(object.org_user) : undefined,
      guest: isSet(object.guest) ? Guest.fromJSON(object.guest) : undefined,
    };
  },

  toJSON(message: Customer): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.individual_user !== undefined &&
      (obj.individual_user = message.individual_user ? IndividualUser.toJSON(message.individual_user) : undefined);
    message.org_user !== undefined && (obj.org_user = message.org_user ? OrgUser.toJSON(message.org_user) : undefined);
    message.guest !== undefined && (obj.guest = message.guest ? Guest.toJSON(message.guest) : undefined);
    return obj;
  },

  create(base?: DeepPartial<Customer>): Customer {
    return Customer.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Customer>): Customer {
    const message = createBaseCustomer();
    message.id = object.id ?? undefined;
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    message.individual_user = (object.individual_user !== undefined && object.individual_user !== null)
      ? IndividualUser.fromPartial(object.individual_user)
      : undefined;
    message.org_user = (object.org_user !== undefined && object.org_user !== null)
      ? OrgUser.fromPartial(object.org_user)
      : undefined;
    message.guest = (object.guest !== undefined && object.guest !== null) ? Guest.fromPartial(object.guest) : undefined;
    return message;
  },
};

function createBaseIndividualUser(): IndividualUser {
  return { user_id: undefined, address_id: undefined, contact_point_ids: [] };
}

export const IndividualUser = {
  encode(message: IndividualUser, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user_id !== undefined) {
      writer.uint32(10).string(message.user_id);
    }
    if (message.address_id !== undefined) {
      writer.uint32(18).string(message.address_id);
    }
    for (const v of message.contact_point_ids) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IndividualUser {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndividualUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user_id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.address_id = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.contact_point_ids.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IndividualUser {
    return {
      user_id: isSet(object.user_id) ? String(object.user_id) : undefined,
      address_id: isSet(object.address_id) ? String(object.address_id) : undefined,
      contact_point_ids: Array.isArray(object?.contact_point_ids)
        ? object.contact_point_ids.map((e: any) => String(e))
        : [],
    };
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

  create(base?: DeepPartial<IndividualUser>): IndividualUser {
    return IndividualUser.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<IndividualUser>): IndividualUser {
    const message = createBaseIndividualUser();
    message.user_id = object.user_id ?? undefined;
    message.address_id = object.address_id ?? undefined;
    message.contact_point_ids = object.contact_point_ids?.map((e) => e) || [];
    return message;
  },
};

function createBaseOrgUser(): OrgUser {
  return { user_id: undefined, organization_id: undefined };
}

export const OrgUser = {
  encode(message: OrgUser, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user_id !== undefined) {
      writer.uint32(10).string(message.user_id);
    }
    if (message.organization_id !== undefined) {
      writer.uint32(18).string(message.organization_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrgUser {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrgUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user_id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.organization_id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OrgUser {
    return {
      user_id: isSet(object.user_id) ? String(object.user_id) : undefined,
      organization_id: isSet(object.organization_id) ? String(object.organization_id) : undefined,
    };
  },

  toJSON(message: OrgUser): unknown {
    const obj: any = {};
    message.user_id !== undefined && (obj.user_id = message.user_id);
    message.organization_id !== undefined && (obj.organization_id = message.organization_id);
    return obj;
  },

  create(base?: DeepPartial<OrgUser>): OrgUser {
    return OrgUser.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<OrgUser>): OrgUser {
    const message = createBaseOrgUser();
    message.user_id = object.user_id ?? undefined;
    message.organization_id = object.organization_id ?? undefined;
    return message;
  },
};

function createBaseGuest(): Guest {
  return { guest: false, address_id: undefined, contact_point_ids: [] };
}

export const Guest = {
  encode(message: Guest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guest === true) {
      writer.uint32(8).bool(message.guest);
    }
    if (message.address_id !== undefined) {
      writer.uint32(18).string(message.address_id);
    }
    for (const v of message.contact_point_ids) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Guest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGuest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.guest = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.address_id = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.contact_point_ids.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Guest {
    return {
      guest: isSet(object.guest) ? Boolean(object.guest) : false,
      address_id: isSet(object.address_id) ? String(object.address_id) : undefined,
      contact_point_ids: Array.isArray(object?.contact_point_ids)
        ? object.contact_point_ids.map((e: any) => String(e))
        : [],
    };
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

  create(base?: DeepPartial<Guest>): Guest {
    return Guest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Guest>): Guest {
    const message = createBaseGuest();
    message.guest = object.guest ?? false;
    message.address_id = object.address_id ?? undefined;
    message.contact_point_ids = object.contact_point_ids?.map((e) => e) || [];
    return message;
  },
};

/** Microservice definition. */
export type CustomerServiceDefinition = typeof CustomerServiceDefinition;
export const CustomerServiceDefinition = {
  name: "CustomerService",
  fullName: "io.restorecommerce.customer.CustomerService",
  methods: {
    read: {
      name: "Read",
      requestType: ReadRequest,
      requestStream: false,
      responseType: CustomerListResponse,
      responseStream: false,
      options: { _unknownFields: { 248008: [Buffer.from([1])] } },
    },
    create: {
      name: "Create",
      requestType: CustomerList,
      requestStream: false,
      responseType: CustomerListResponse,
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
      requestType: CustomerList,
      requestStream: false,
      responseType: CustomerListResponse,
      responseStream: false,
      options: {},
    },
    upsert: {
      name: "Upsert",
      requestType: CustomerList,
      requestStream: false,
      responseType: CustomerListResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface CustomerServiceImplementation<CallContextExt = {}> {
  read(request: ReadRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CustomerListResponse>>;
  create(request: CustomerList, context: CallContext & CallContextExt): Promise<DeepPartial<CustomerListResponse>>;
  delete(request: DeleteRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteResponse>>;
  update(request: CustomerList, context: CallContext & CallContextExt): Promise<DeepPartial<CustomerListResponse>>;
  upsert(request: CustomerList, context: CallContext & CallContextExt): Promise<DeepPartial<CustomerListResponse>>;
}

export interface CustomerServiceClient<CallOptionsExt = {}> {
  read(request: DeepPartial<ReadRequest>, options?: CallOptions & CallOptionsExt): Promise<CustomerListResponse>;
  create(request: DeepPartial<CustomerList>, options?: CallOptions & CallOptionsExt): Promise<CustomerListResponse>;
  delete(request: DeepPartial<DeleteRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteResponse>;
  update(request: DeepPartial<CustomerList>, options?: CallOptions & CallOptionsExt): Promise<CustomerListResponse>;
  upsert(request: DeepPartial<CustomerList>, options?: CallOptions & CallOptionsExt): Promise<CustomerListResponse>;
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
    "name": "io/restorecommerce/customer.proto",
    "package": "io.restorecommerce.customer",
    "dependency": [
      "io/restorecommerce/resource_base.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/options.proto",
      "io/restorecommerce/user.proto",
      "io/restorecommerce/address.proto",
      "io/restorecommerce/contact_point.proto",
      "io/restorecommerce/organization.proto",
    ],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "CustomerList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.customer.Customer",
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
      "name": "CustomerListResponse",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.customer.CustomerResponse",
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
      "name": "CustomerResponse",
      "field": [{
        "name": "payload",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.customer.Customer",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "payload",
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
      "name": "Customer",
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
        "name": "individual_user",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.customer.IndividualUser",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "individualUser",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "org_user",
        "number": 4,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.customer.OrgUser",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "orgUser",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "guest",
        "number": 5,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.customer.Guest",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "guest",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "customer", "options": undefined }, { "name": "_id", "options": undefined }, {
        "name": "_meta",
        "options": undefined,
      }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "IndividualUser",
      "field": [{
        "name": "user_id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "userId",
        "options": {
          "ctype": 0,
          "packed": false,
          "jstype": 0,
          "lazy": false,
          "deprecated": false,
          "weak": false,
          "uninterpretedOption": [],
        },
        "proto3Optional": true,
      }, {
        "name": "address_id",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "addressId",
        "options": {
          "ctype": 0,
          "packed": false,
          "jstype": 0,
          "lazy": false,
          "deprecated": false,
          "weak": false,
          "uninterpretedOption": [],
        },
        "proto3Optional": true,
      }, {
        "name": "contact_point_ids",
        "number": 3,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "contactPointIds",
        "options": {
          "ctype": 0,
          "packed": false,
          "jstype": 0,
          "lazy": false,
          "deprecated": false,
          "weak": false,
          "uninterpretedOption": [],
        },
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_user_id", "options": undefined }, { "name": "_address_id", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "OrgUser",
      "field": [{
        "name": "user_id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "userId",
        "options": {
          "ctype": 0,
          "packed": false,
          "jstype": 0,
          "lazy": false,
          "deprecated": false,
          "weak": false,
          "uninterpretedOption": [],
        },
        "proto3Optional": true,
      }, {
        "name": "organization_id",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "organizationId",
        "options": {
          "ctype": 0,
          "packed": false,
          "jstype": 0,
          "lazy": false,
          "deprecated": false,
          "weak": false,
          "uninterpretedOption": [],
        },
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_user_id", "options": undefined }, { "name": "_organization_id", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "Guest",
      "field": [{
        "name": "guest",
        "number": 1,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "guest",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "address_id",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "addressId",
        "options": {
          "ctype": 0,
          "packed": false,
          "jstype": 0,
          "lazy": false,
          "deprecated": false,
          "weak": false,
          "uninterpretedOption": [],
        },
        "proto3Optional": true,
      }, {
        "name": "contact_point_ids",
        "number": 3,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "contactPointIds",
        "options": {
          "ctype": 0,
          "packed": false,
          "jstype": 0,
          "lazy": false,
          "deprecated": false,
          "weak": false,
          "uninterpretedOption": [],
        },
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_address_id", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "enumType": [],
    "service": [{
      "name": "CustomerService",
      "method": [{
        "name": "Read",
        "inputType": ".io.restorecommerce.resourcebase.ReadRequest",
        "outputType": ".io.restorecommerce.customer.CustomerListResponse",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Create",
        "inputType": ".io.restorecommerce.customer.CustomerList",
        "outputType": ".io.restorecommerce.customer.CustomerListResponse",
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
        "inputType": ".io.restorecommerce.customer.CustomerList",
        "outputType": ".io.restorecommerce.customer.CustomerListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Upsert",
        "inputType": ".io.restorecommerce.customer.CustomerList",
        "outputType": ".io.restorecommerce.customer.CustomerListResponse",
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
        "path": [3, 5],
        "span": [11, 0, 39],
        "leadingComments": " Used by resolvers\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0],
        "span": [19, 0, 27, 1],
        "leadingComments": "\nMicroservice definition.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
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
    protoMetadata6,
    protoMetadata7,
    protoMetadata8,
    protoMetadata9,
  ],
  options: {
    messages: {
      "IndividualUser": {
        fields: {
          "user_id": {
            "resolver": Resolver.decode(
              Buffer.from("Ch0uaW8ucmVzdG9yZWNvbW1lcmNlLnVzZXIuVXNlchIIaWRlbnRpdHkaBHVzZXIiBFJlYWQqBHVzZXI=", "base64"),
            ),
          },
          "address_id": {
            "resolver": Resolver.decode(
              Buffer.from(
                "CiMuaW8ucmVzdG9yZWNvbW1lcmNlLmFkZHJlc3MuQWRkcmVzcxIIcmVzb3VyY2UaB2FkZHJlc3MiBFJlYWQqB2FkZHJlc3M=",
                "base64",
              ),
            ),
          },
          "contact_point_ids": {
            "resolver": Resolver.decode(
              Buffer.from(
                "Ci4uaW8ucmVzdG9yZWNvbW1lcmNlLmNvbnRhY3RfcG9pbnQuQ29udGFjdFBvaW50EghyZXNvdXJjZRoNY29udGFjdF9wb2ludCIEUmVhZCoNY29udGFjdFBvaW50cw==",
                "base64",
              ),
            ),
          },
        },
      },
      "OrgUser": {
        fields: {
          "user_id": {
            "resolver": Resolver.decode(
              Buffer.from("Ch0uaW8ucmVzdG9yZWNvbW1lcmNlLnVzZXIuVXNlchIIaWRlbnRpdHkaBHVzZXIiBFJlYWQqBHVzZXI=", "base64"),
            ),
          },
          "organization_id": {
            "resolver": Resolver.decode(
              Buffer.from(
                "Ci0uaW8ucmVzdG9yZWNvbW1lcmNlLm9yZ2FuaXphdGlvbi5Pcmdhbml6YXRpb24SCHJlc291cmNlGgxvcmdhbml6YXRpb24iBFJlYWQqDG9yZ2FuaXphdGlvbg==",
                "base64",
              ),
            ),
          },
        },
      },
      "Guest": {
        fields: {
          "address_id": {
            "resolver": Resolver.decode(
              Buffer.from(
                "CiMuaW8ucmVzdG9yZWNvbW1lcmNlLmFkZHJlc3MuQWRkcmVzcxIIcmVzb3VyY2UaB2FkZHJlc3MiBFJlYWQqB2FkZHJlc3M=",
                "base64",
              ),
            ),
          },
          "contact_point_ids": {
            "resolver": Resolver.decode(
              Buffer.from(
                "Ci4uaW8ucmVzdG9yZWNvbW1lcmNlLmNvbnRhY3RfcG9pbnQuQ29udGFjdFBvaW50EghyZXNvdXJjZRoNY29udGFjdF9wb2ludCIEUmVhZCoNY29udGFjdFBvaW50cw==",
                "base64",
              ),
            ),
          },
        },
      },
    },
    services: { "CustomerService": { options: undefined, methods: { "Read": { "is_query": true } } } },
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
