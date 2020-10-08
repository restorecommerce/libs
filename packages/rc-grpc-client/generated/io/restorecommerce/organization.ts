/* eslint-disable */
import { Subject, ApiKey } from '../../io/restorecommerce/auth';
import { Meta } from '../../io/restorecommerce/meta';
import { Any } from '../../google/protobuf/any';
import { ReadRequest, DeleteRequest } from '../../io/restorecommerce/resource_base';
import { Empty } from '../../google/protobuf/empty';
import { Writer, Reader } from 'protobufjs/minimal';


export interface Deleted {
  id: string;
}

export interface DeleteOrgData {
  orgIds: string[];
  userIds: string[];
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
}

export interface PaymentMethod {
  wiretransfer?: WireTransfer | undefined;
  paypal?: Paypal | undefined;
  transferType: PaymentMethod_TransferType;
}

export interface WireTransfer {
  iban: string;
  bic: string;
  bankName: string;
}

export interface Paypal {
  username: string;
  email: string;
  password: string;
}

export interface OrganizationList {
  items: Organization[];
  totalCount: number;
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
}

export interface Organization {
  /**
   * / Organization ID, unique, key
   */
  id: string;
  meta?: Meta;
  /**
   * / Address for the organization
   */
  addressId: string;
  /**
   *   Hierarchically superior organization; may be null
   */
  parentId: string;
  /**
   *  Hierarchically inferior organizations; may be null/empty
   */
  childrenIds: string[];
  /**
   *  list of possible legal addresses of different types
   */
  contactPointIds: string[];
  website: string;
  email: string;
  /**
   *  base64; arangoDB does not support blob storage
   */
  logo: string;
  vatId: string;
  isicV4: string;
  registration: string;
  registrationCourt: string;
  name: string;
  paymentMethods: PaymentMethod[];
  /**
   * / additional data
   */
  data?: Any;
  systemOwner: boolean;
}

const baseDeleted: object = {
  id: "",
};

const baseDeleteOrgData: object = {
  orgIds: "",
  userIds: "",
};

const basePaymentMethod: object = {
  transferType: 0,
};

const baseWireTransfer: object = {
  iban: "",
  bic: "",
  bankName: "",
};

const basePaypal: object = {
  username: "",
  email: "",
  password: "",
};

const baseOrganizationList: object = {
  totalCount: 0,
};

const baseOrganization: object = {
  id: "",
  addressId: "",
  parentId: "",
  childrenIds: "",
  contactPointIds: "",
  website: "",
  email: "",
  logo: "",
  vatId: "",
  isicV4: "",
  registration: "",
  registrationCourt: "",
  name: "",
  systemOwner: false,
};

export interface Service {

  Read(request: ReadRequest): Promise<OrganizationList>;

  Create(request: OrganizationList): Promise<OrganizationList>;

  Delete(request: DeleteRequest): Promise<Empty>;

  Update(request: OrganizationList): Promise<OrganizationList>;

  Upsert(request: OrganizationList): Promise<OrganizationList>;

}

export enum PaymentMethod_TransferType {
  RECEIVE = 0,
  SEND = 1,
  BOTH = 2,
  UNRECOGNIZED = -1,
}

export const Deleted = {
  encode(message: Deleted, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Deleted {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleted } as Deleted;
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
};

export const DeleteOrgData = {
  encode(message: DeleteOrgData, writer: Writer = Writer.create()): Writer {
    for (const v of message.orgIds) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.userIds) {
      writer.uint32(18).string(v!);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): DeleteOrgData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteOrgData } as DeleteOrgData;
    message.orgIds = [];
    message.userIds = [];
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

export const PaymentMethod = {
  encode(message: PaymentMethod, writer: Writer = Writer.create()): Writer {
    if (message.wiretransfer !== undefined) {
      WireTransfer.encode(message.wiretransfer, writer.uint32(10).fork()).ldelim();
    }
    if (message.paypal !== undefined) {
      Paypal.encode(message.paypal, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(80).int32(message.transferType);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PaymentMethod {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePaymentMethod } as PaymentMethod;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wiretransfer = WireTransfer.decode(reader, reader.uint32());
          break;
        case 2:
          message.paypal = Paypal.decode(reader, reader.uint32());
          break;
        case 10:
          message.transferType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const WireTransfer = {
  encode(message: WireTransfer, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.iban);
    writer.uint32(18).string(message.bic);
    writer.uint32(26).string(message.bankName);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): WireTransfer {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWireTransfer } as WireTransfer;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iban = reader.string();
          break;
        case 2:
          message.bic = reader.string();
          break;
        case 3:
          message.bankName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const Paypal = {
  encode(message: Paypal, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.username);
    writer.uint32(18).string(message.email);
    writer.uint32(26).string(message.password);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Paypal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePaypal } as Paypal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.username = reader.string();
          break;
        case 2:
          message.email = reader.string();
          break;
        case 3:
          message.password = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const OrganizationList = {
  encode(message: OrganizationList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      Organization.encode(v!, writer.uint32(10).fork()).ldelim();
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
  decode(input: Uint8Array | Reader, length?: number): OrganizationList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOrganizationList } as OrganizationList;
    message.items = [];
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

export const Organization = {
  encode(message: Organization, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    if (message.meta !== undefined && message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.addressId);
    writer.uint32(34).string(message.parentId);
    for (const v of message.childrenIds) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.contactPointIds) {
      writer.uint32(50).string(v!);
    }
    writer.uint32(58).string(message.website);
    writer.uint32(66).string(message.email);
    writer.uint32(74).string(message.logo);
    writer.uint32(82).string(message.vatId);
    writer.uint32(90).string(message.isicV4);
    writer.uint32(98).string(message.registration);
    writer.uint32(106).string(message.registrationCourt);
    writer.uint32(114).string(message.name);
    for (const v of message.paymentMethods) {
      PaymentMethod.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    if (message.data !== undefined && message.data !== undefined) {
      Any.encode(message.data, writer.uint32(130).fork()).ldelim();
    }
    writer.uint32(136).bool(message.systemOwner);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Organization {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOrganization } as Organization;
    message.childrenIds = [];
    message.contactPointIds = [];
    message.paymentMethods = [];
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
        case 5:
          message.childrenIds.push(reader.string());
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
          message.paymentMethods.push(PaymentMethod.decode(reader, reader.uint32()));
          break;
        case 16:
          message.data = Any.decode(reader, reader.uint32());
          break;
        case 17:
          message.systemOwner = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};
