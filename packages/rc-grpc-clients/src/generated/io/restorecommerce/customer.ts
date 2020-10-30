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

export interface MetaI {
  readonly meta: 'object' | 'array' | 'map' | 'union';
}

export interface MetaO extends MetaI {
  readonly meta: 'object';
  readonly type: string;
  readonly name: string;
}

export interface MetaA extends MetaI {
  readonly meta: 'array';
  readonly type: MetaI | string;
}

export interface MetaM extends MetaI {
  readonly meta: 'map';
  readonly key: string;
  readonly value: MetaI | string;
}

export interface MetaU extends MetaI {
  readonly meta: 'union';
  readonly choices: Array<MetaI | string | undefined>;
}

export const metaCustomerList: { [key in keyof CustomerList]: MetaI | string } = {
  items: {meta:'array', type:{meta:'object', type:'.io.restorecommerce.customer.Customer', name:'Customer'} as MetaO} as MetaA,
  totalCount: 'number',
  subject: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.Subject', name:'Subject'} as MetaO]} as MetaU,
  apiKey: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.ApiKey', name:'ApiKey'} as MetaO]} as MetaU,
};

export const metaCustomer: { [key in keyof Customer]: MetaI | string } = {
  id: 'string',
  meta: {meta:'object', type:'.io.restorecommerce.meta.Meta', name:'Meta'} as MetaO,
  individualUser: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.customer.IndividualUser', name:'IndividualUser'} as MetaO]} as MetaU,
  orgUser: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.customer.OrgUser', name:'OrgUser'} as MetaO]} as MetaU,
  guest: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.customer.Guest', name:'Guest'} as MetaO]} as MetaU,
};

export const metaIndividualUser: { [key in keyof IndividualUser]: MetaI | string } = {
  userId: 'string',
  addressId: 'string',
  contactPointIds: {meta:'array', type:'string'} as MetaA,
};

export const metaOrgUser: { [key in keyof OrgUser]: MetaI | string } = {
  userId: 'string',
  organizationId: 'string',
};

export const metaGuest: { [key in keyof Guest]: MetaI | string } = {
  guest: 'boolean',
  addressId: 'string',
  contactPointIds: {meta:'array', type:'string'} as MetaA,
};

export const protobufPackage = 'io.restorecommerce.customer'

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
  fromJSON(object: any): CustomerList {
    const message = { ...baseCustomerList } as CustomerList;
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
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromJSON(object.apiKey);
    } else {
      message.apiKey = undefined;
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
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromPartial(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  toJSON(message: CustomerList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map(e => e ? Customer.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    message.apiKey !== undefined && (obj.apiKey = message.apiKey ? ApiKey.toJSON(message.apiKey) : undefined);
    return obj;
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
  fromJSON(object: any): Customer {
    const message = { ...baseCustomer } as Customer;
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
      message.individualUser = IndividualUser.fromPartial(object.individualUser);
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
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.individualUser !== undefined && (obj.individualUser = message.individualUser ? IndividualUser.toJSON(message.individualUser) : undefined);
    message.orgUser !== undefined && (obj.orgUser = message.orgUser ? OrgUser.toJSON(message.orgUser) : undefined);
    message.guest !== undefined && (obj.guest = message.guest ? Guest.toJSON(message.guest) : undefined);
    return obj;
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
  fromJSON(object: any): IndividualUser {
    const message = { ...baseIndividualUser } as IndividualUser;
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
    if (object.contactPointIds !== undefined && object.contactPointIds !== null) {
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
    if (object.contactPointIds !== undefined && object.contactPointIds !== null) {
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
      obj.contactPointIds = message.contactPointIds.map(e => e);
    } else {
      obj.contactPointIds = [];
    }
    return obj;
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
  fromJSON(object: any): OrgUser {
    const message = { ...baseOrgUser } as OrgUser;
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
    message.organizationId !== undefined && (obj.organizationId = message.organizationId);
    return obj;
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
  fromJSON(object: any): Guest {
    const message = { ...baseGuest } as Guest;
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
    if (object.contactPointIds !== undefined && object.contactPointIds !== null) {
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
    if (object.contactPointIds !== undefined && object.contactPointIds !== null) {
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
      obj.contactPointIds = message.contactPointIds.map(e => e);
    } else {
      obj.contactPointIds = [];
    }
    return obj;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;