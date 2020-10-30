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

export interface MetaS<T, R> {
  readonly request: string;
  readonly response: string;
  readonly encodeRequest: (message: T, writer: Writer) => Writer;
  readonly decodeResponse: (input: Uint8Array | Reader, length?: number) => R;
}

export const protobufPackage = 'io.restorecommerce.organization'

export enum PaymentMethod_TransferType {
  RECEIVE = 0,
  SEND = 1,
  BOTH = 2,
  UNRECOGNIZED = -1,
}

export function paymentMethod_TransferTypeFromJSON(object: any): PaymentMethod_TransferType {
  switch (object) {
    case 0:
    case "RECEIVE":
      return PaymentMethod_TransferType.RECEIVE;
    case 1:
    case "SEND":
      return PaymentMethod_TransferType.SEND;
    case 2:
    case "BOTH":
      return PaymentMethod_TransferType.BOTH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PaymentMethod_TransferType.UNRECOGNIZED;
  }
}

export function paymentMethod_TransferTypeToJSON(object: PaymentMethod_TransferType): string {
  switch (object) {
    case PaymentMethod_TransferType.RECEIVE:
      return "RECEIVE";
    case PaymentMethod_TransferType.SEND:
      return "SEND";
    case PaymentMethod_TransferType.BOTH:
      return "BOTH";
    default:
      return "UNKNOWN";
  }
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
  fromJSON(object: any): Deleted {
    const message = { ...baseDeleted } as Deleted;
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
  fromJSON(object: any): DeleteOrgData {
    const message = { ...baseDeleteOrgData } as DeleteOrgData;
    message.orgIds = [];
    message.userIds = [];
    if (object.orgIds !== undefined && object.orgIds !== null) {
      for (const e of object.orgIds) {
        message.orgIds.push(String(e));
      }
    }
    if (object.userIds !== undefined && object.userIds !== null) {
      for (const e of object.userIds) {
        message.userIds.push(String(e));
      }
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
  fromPartial(object: DeepPartial<DeleteOrgData>): DeleteOrgData {
    const message = { ...baseDeleteOrgData } as DeleteOrgData;
    message.orgIds = [];
    message.userIds = [];
    if (object.orgIds !== undefined && object.orgIds !== null) {
      for (const e of object.orgIds) {
        message.orgIds.push(e);
      }
    }
    if (object.userIds !== undefined && object.userIds !== null) {
      for (const e of object.userIds) {
        message.userIds.push(e);
      }
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
  toJSON(message: DeleteOrgData): unknown {
    const obj: any = {};
    if (message.orgIds) {
      obj.orgIds = message.orgIds.map(e => e);
    } else {
      obj.orgIds = [];
    }
    if (message.userIds) {
      obj.userIds = message.userIds.map(e => e);
    } else {
      obj.userIds = [];
    }
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    message.apiKey !== undefined && (obj.apiKey = message.apiKey ? ApiKey.toJSON(message.apiKey) : undefined);
    return obj;
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
  fromJSON(object: any): PaymentMethod {
    const message = { ...basePaymentMethod } as PaymentMethod;
    if (object.wiretransfer !== undefined && object.wiretransfer !== null) {
      message.wiretransfer = WireTransfer.fromJSON(object.wiretransfer);
    } else {
      message.wiretransfer = undefined;
    }
    if (object.paypal !== undefined && object.paypal !== null) {
      message.paypal = Paypal.fromJSON(object.paypal);
    } else {
      message.paypal = undefined;
    }
    if (object.transferType !== undefined && object.transferType !== null) {
      message.transferType = paymentMethod_TransferTypeFromJSON(object.transferType);
    } else {
      message.transferType = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<PaymentMethod>): PaymentMethod {
    const message = { ...basePaymentMethod } as PaymentMethod;
    if (object.wiretransfer !== undefined && object.wiretransfer !== null) {
      message.wiretransfer = WireTransfer.fromPartial(object.wiretransfer);
    } else {
      message.wiretransfer = undefined;
    }
    if (object.paypal !== undefined && object.paypal !== null) {
      message.paypal = Paypal.fromPartial(object.paypal);
    } else {
      message.paypal = undefined;
    }
    if (object.transferType !== undefined && object.transferType !== null) {
      message.transferType = object.transferType;
    } else {
      message.transferType = 0;
    }
    return message;
  },
  toJSON(message: PaymentMethod): unknown {
    const obj: any = {};
    message.wiretransfer !== undefined && (obj.wiretransfer = message.wiretransfer ? WireTransfer.toJSON(message.wiretransfer) : undefined);
    message.paypal !== undefined && (obj.paypal = message.paypal ? Paypal.toJSON(message.paypal) : undefined);
    message.transferType !== undefined && (obj.transferType = paymentMethod_TransferTypeToJSON(message.transferType));
    return obj;
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
  fromJSON(object: any): WireTransfer {
    const message = { ...baseWireTransfer } as WireTransfer;
    if (object.iban !== undefined && object.iban !== null) {
      message.iban = String(object.iban);
    } else {
      message.iban = "";
    }
    if (object.bic !== undefined && object.bic !== null) {
      message.bic = String(object.bic);
    } else {
      message.bic = "";
    }
    if (object.bankName !== undefined && object.bankName !== null) {
      message.bankName = String(object.bankName);
    } else {
      message.bankName = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<WireTransfer>): WireTransfer {
    const message = { ...baseWireTransfer } as WireTransfer;
    if (object.iban !== undefined && object.iban !== null) {
      message.iban = object.iban;
    } else {
      message.iban = "";
    }
    if (object.bic !== undefined && object.bic !== null) {
      message.bic = object.bic;
    } else {
      message.bic = "";
    }
    if (object.bankName !== undefined && object.bankName !== null) {
      message.bankName = object.bankName;
    } else {
      message.bankName = "";
    }
    return message;
  },
  toJSON(message: WireTransfer): unknown {
    const obj: any = {};
    message.iban !== undefined && (obj.iban = message.iban);
    message.bic !== undefined && (obj.bic = message.bic);
    message.bankName !== undefined && (obj.bankName = message.bankName);
    return obj;
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
  fromJSON(object: any): Paypal {
    const message = { ...basePaypal } as Paypal;
    if (object.username !== undefined && object.username !== null) {
      message.username = String(object.username);
    } else {
      message.username = "";
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = String(object.email);
    } else {
      message.email = "";
    }
    if (object.password !== undefined && object.password !== null) {
      message.password = String(object.password);
    } else {
      message.password = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Paypal>): Paypal {
    const message = { ...basePaypal } as Paypal;
    if (object.username !== undefined && object.username !== null) {
      message.username = object.username;
    } else {
      message.username = "";
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = "";
    }
    if (object.password !== undefined && object.password !== null) {
      message.password = object.password;
    } else {
      message.password = "";
    }
    return message;
  },
  toJSON(message: Paypal): unknown {
    const obj: any = {};
    message.username !== undefined && (obj.username = message.username);
    message.email !== undefined && (obj.email = message.email);
    message.password !== undefined && (obj.password = message.password);
    return obj;
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
  fromJSON(object: any): OrganizationList {
    const message = { ...baseOrganizationList } as OrganizationList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Organization.fromJSON(e));
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
  fromPartial(object: DeepPartial<OrganizationList>): OrganizationList {
    const message = { ...baseOrganizationList } as OrganizationList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Organization.fromPartial(e));
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
  toJSON(message: OrganizationList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map(e => e ? Organization.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    message.apiKey !== undefined && (obj.apiKey = message.apiKey ? ApiKey.toJSON(message.apiKey) : undefined);
    return obj;
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
  fromJSON(object: any): Organization {
    const message = { ...baseOrganization } as Organization;
    message.childrenIds = [];
    message.contactPointIds = [];
    message.paymentMethods = [];
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
    if (object.addressId !== undefined && object.addressId !== null) {
      message.addressId = String(object.addressId);
    } else {
      message.addressId = "";
    }
    if (object.parentId !== undefined && object.parentId !== null) {
      message.parentId = String(object.parentId);
    } else {
      message.parentId = "";
    }
    if (object.childrenIds !== undefined && object.childrenIds !== null) {
      for (const e of object.childrenIds) {
        message.childrenIds.push(String(e));
      }
    }
    if (object.contactPointIds !== undefined && object.contactPointIds !== null) {
      for (const e of object.contactPointIds) {
        message.contactPointIds.push(String(e));
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
    if (object.vatId !== undefined && object.vatId !== null) {
      message.vatId = String(object.vatId);
    } else {
      message.vatId = "";
    }
    if (object.isicV4 !== undefined && object.isicV4 !== null) {
      message.isicV4 = String(object.isicV4);
    } else {
      message.isicV4 = "";
    }
    if (object.registration !== undefined && object.registration !== null) {
      message.registration = String(object.registration);
    } else {
      message.registration = "";
    }
    if (object.registrationCourt !== undefined && object.registrationCourt !== null) {
      message.registrationCourt = String(object.registrationCourt);
    } else {
      message.registrationCourt = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.paymentMethods !== undefined && object.paymentMethods !== null) {
      for (const e of object.paymentMethods) {
        message.paymentMethods.push(PaymentMethod.fromJSON(e));
      }
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromJSON(object.data);
    } else {
      message.data = undefined;
    }
    if (object.systemOwner !== undefined && object.systemOwner !== null) {
      message.systemOwner = Boolean(object.systemOwner);
    } else {
      message.systemOwner = false;
    }
    return message;
  },
  fromPartial(object: DeepPartial<Organization>): Organization {
    const message = { ...baseOrganization } as Organization;
    message.childrenIds = [];
    message.contactPointIds = [];
    message.paymentMethods = [];
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
    if (object.addressId !== undefined && object.addressId !== null) {
      message.addressId = object.addressId;
    } else {
      message.addressId = "";
    }
    if (object.parentId !== undefined && object.parentId !== null) {
      message.parentId = object.parentId;
    } else {
      message.parentId = "";
    }
    if (object.childrenIds !== undefined && object.childrenIds !== null) {
      for (const e of object.childrenIds) {
        message.childrenIds.push(e);
      }
    }
    if (object.contactPointIds !== undefined && object.contactPointIds !== null) {
      for (const e of object.contactPointIds) {
        message.contactPointIds.push(e);
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
    if (object.vatId !== undefined && object.vatId !== null) {
      message.vatId = object.vatId;
    } else {
      message.vatId = "";
    }
    if (object.isicV4 !== undefined && object.isicV4 !== null) {
      message.isicV4 = object.isicV4;
    } else {
      message.isicV4 = "";
    }
    if (object.registration !== undefined && object.registration !== null) {
      message.registration = object.registration;
    } else {
      message.registration = "";
    }
    if (object.registrationCourt !== undefined && object.registrationCourt !== null) {
      message.registrationCourt = object.registrationCourt;
    } else {
      message.registrationCourt = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.paymentMethods !== undefined && object.paymentMethods !== null) {
      for (const e of object.paymentMethods) {
        message.paymentMethods.push(PaymentMethod.fromPartial(e));
      }
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromPartial(object.data);
    } else {
      message.data = undefined;
    }
    if (object.systemOwner !== undefined && object.systemOwner !== null) {
      message.systemOwner = object.systemOwner;
    } else {
      message.systemOwner = false;
    }
    return message;
  },
  toJSON(message: Organization): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.addressId !== undefined && (obj.addressId = message.addressId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    if (message.childrenIds) {
      obj.childrenIds = message.childrenIds.map(e => e);
    } else {
      obj.childrenIds = [];
    }
    if (message.contactPointIds) {
      obj.contactPointIds = message.contactPointIds.map(e => e);
    } else {
      obj.contactPointIds = [];
    }
    message.website !== undefined && (obj.website = message.website);
    message.email !== undefined && (obj.email = message.email);
    message.logo !== undefined && (obj.logo = message.logo);
    message.vatId !== undefined && (obj.vatId = message.vatId);
    message.isicV4 !== undefined && (obj.isicV4 = message.isicV4);
    message.registration !== undefined && (obj.registration = message.registration);
    message.registrationCourt !== undefined && (obj.registrationCourt = message.registrationCourt);
    message.name !== undefined && (obj.name = message.name);
    if (message.paymentMethods) {
      obj.paymentMethods = message.paymentMethods.map(e => e ? PaymentMethod.toJSON(e) : undefined);
    } else {
      obj.paymentMethods = [];
    }
    message.data !== undefined && (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    message.systemOwner !== undefined && (obj.systemOwner = message.systemOwner);
    return obj;
  },
};

export const metaDeleted: { [key in keyof Deleted]: MetaI | string } = {
  id: 'string',
}
export const metaDeleteOrgData: { [key in keyof DeleteOrgData]: MetaI | string } = {
  orgIds: {meta:'array', type:'string'} as MetaA,
  userIds: {meta:'array', type:'string'} as MetaA,
  subject: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.Subject', name:'Subject'} as MetaO]} as MetaU,
  apiKey: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.ApiKey', name:'ApiKey'} as MetaO]} as MetaU,
}
export const metaPaymentMethod: { [key in keyof PaymentMethod]: MetaI | string } = {
  wiretransfer: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.organization.WireTransfer', name:'WireTransfer'} as MetaO]} as MetaU,
  paypal: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.organization.Paypal', name:'Paypal'} as MetaO]} as MetaU,
  transferType: {meta:'object', type:'.io.restorecommerce.organization.PaymentMethod.TransferType', name:'PaymentMethod_TransferType'} as MetaO,
}
export const metaWireTransfer: { [key in keyof WireTransfer]: MetaI | string } = {
  iban: 'string',
  bic: 'string',
  bankName: 'string',
}
export const metaPaypal: { [key in keyof Paypal]: MetaI | string } = {
  username: 'string',
  email: 'string',
  password: 'string',
}
export const metaOrganizationList: { [key in keyof OrganizationList]: MetaI | string } = {
  items: {meta:'array', type:{meta:'object', type:'.io.restorecommerce.organization.Organization', name:'Organization'} as MetaO} as MetaA,
  totalCount: 'number',
  subject: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.Subject', name:'Subject'} as MetaO]} as MetaU,
  apiKey: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.ApiKey', name:'ApiKey'} as MetaO]} as MetaU,
}
export const metaOrganization: { [key in keyof Organization]: MetaI | string } = {
  id: 'string',
  meta: {meta:'object', type:'.io.restorecommerce.meta.Meta', name:'Meta'} as MetaO,
  addressId: 'string',
  parentId: 'string',
  childrenIds: {meta:'array', type:'string'} as MetaA,
  contactPointIds: {meta:'array', type:'string'} as MetaA,
  website: 'string',
  email: 'string',
  logo: 'string',
  vatId: 'string',
  isicV4: 'string',
  registration: 'string',
  registrationCourt: 'string',
  name: 'string',
  paymentMethods: {meta:'array', type:{meta:'object', type:'.io.restorecommerce.organization.PaymentMethod', name:'PaymentMethod'} as MetaO} as MetaA,
  data: {meta:'object', type:'.google.protobuf.Any', name:'Any'} as MetaO,
  systemOwner: 'boolean',
}
export const metaService: { [key in keyof Service]: MetaS<any, any> } = {
  Read: {request: '.io.restorecommerce.organization.OrganizationList', response: '.io.restorecommerce.organization.OrganizationList', encodeRequest: ReadRequest.encode, decodeResponse: OrganizationList.decode} as MetaS<ReadRequest, OrganizationList>,
  Create: {request: '.io.restorecommerce.organization.OrganizationList', response: '.io.restorecommerce.organization.OrganizationList', encodeRequest: OrganizationList.encode, decodeResponse: OrganizationList.decode} as MetaS<OrganizationList, OrganizationList>,
  Delete: {request: '.google.protobuf.Empty', response: '.google.protobuf.Empty', encodeRequest: DeleteRequest.encode, decodeResponse: Empty.decode} as MetaS<DeleteRequest, Empty>,
  Update: {request: '.io.restorecommerce.organization.OrganizationList', response: '.io.restorecommerce.organization.OrganizationList', encodeRequest: OrganizationList.encode, decodeResponse: OrganizationList.decode} as MetaS<OrganizationList, OrganizationList>,
  Upsert: {request: '.io.restorecommerce.organization.OrganizationList', response: '.io.restorecommerce.organization.OrganizationList', encodeRequest: OrganizationList.encode, decodeResponse: OrganizationList.decode} as MetaS<OrganizationList, OrganizationList>,
}
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