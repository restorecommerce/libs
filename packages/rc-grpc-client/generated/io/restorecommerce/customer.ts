/* eslint-disable */
import { Subject, ApiKey } from '../../io/restorecommerce/auth';
import { Meta } from '../../io/restorecommerce/meta';
import { ReadRequest, DeleteRequest } from '../../io/restorecommerce/resource_base';
import { Empty } from '../../google/protobuf/empty';
import { Writer, Reader } from 'protobufjs/minimal';


export interface CustomerList {
  items: Customer[];
  totalCount: number;
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
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

const baseCustomerList: object = {
  totalCount: 0,
};

const baseCustomer: object = {
  id: "",
};

const baseIndividualUser: object = {
  userId: "",
  addressId: "",
  contactPointIds: "",
};

const baseOrgUser: object = {
  userId: "",
  organizationId: "",
};

const baseGuest: object = {
  guest: false,
  addressId: "",
  contactPointIds: "",
};

/**
 *
 * Microservice definition.
 */
export interface Service {

  Read(request: ReadRequest): Promise<CustomerList>;

  Create(request: CustomerList): Promise<CustomerList>;

  Delete(request: DeleteRequest): Promise<Empty>;

  Update(request: CustomerList): Promise<CustomerList>;

  Upsert(request: CustomerList): Promise<CustomerList>;

}

export const CustomerList = {
  encode(message: CustomerList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      Customer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(16).uint32(message.totalCount);
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CustomerList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCustomerList } as CustomerList;
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
        case 4:
          message.apiKey = ApiKey.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const Customer = {
  encode(message: Customer, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    if (message.meta !== undefined && message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    if (message.individualUser !== undefined) {
      IndividualUser.encode(message.individualUser, writer.uint32(26).fork()).ldelim();
    }
    if (message.orgUser !== undefined) {
      OrgUser.encode(message.orgUser, writer.uint32(34).fork()).ldelim();
    }
    if (message.guest !== undefined) {
      Guest.encode(message.guest, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Customer {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCustomer } as Customer;
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
          message.individualUser = IndividualUser.decode(reader, reader.uint32());
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
};

export const IndividualUser = {
  encode(message: IndividualUser, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.userId);
    writer.uint32(18).string(message.addressId);
    for (const v of message.contactPointIds) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): IndividualUser {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIndividualUser } as IndividualUser;
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
};

export const OrgUser = {
  encode(message: OrgUser, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.userId);
    writer.uint32(18).string(message.organizationId);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): OrgUser {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOrgUser } as OrgUser;
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
};

export const Guest = {
  encode(message: Guest, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).bool(message.guest);
    writer.uint32(18).string(message.addressId);
    for (const v of message.contactPointIds) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Guest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGuest } as Guest;
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
};
