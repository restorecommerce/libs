/* eslint-disable */
import { Subject } from '../../io/restorecommerce/auth';
import { Meta } from '../../io/restorecommerce/meta';
import { Organization } from '../../io/restorecommerce/organization';
import { Any } from '../../google/protobuf/any';
import { ReadRequest, DeleteRequest } from '../../io/restorecommerce/resource_base';
import { Empty } from '../../google/protobuf/empty';
import { Writer, Reader } from 'protobufjs/minimal';


export interface Deleted {
  id: string;
}

/**
 *
 *  For multiple invoices
 */
export interface InvoiceList {
  items: Invoice[];
  totalCount: number;
  subject?: Subject;
}

/**
 *
 *  A simple invoice.
 */
export interface Invoice {
  id: string;
  meta?: Meta;
  timestamp: string;
  customerId: string;
  paymentStatus: string;
  totalAmount: number;
  netAmount: number;
  /**
   *  difference between net and total
   */
  vatAmount: number;
  document: string;
  invoiceNumber: string;
  customerRemark: string;
}

/**
 * *
 *  List of Invoice Positions data
 */
export interface InvoicesPositionsData {
  invoicesPositionsData: InvoicePositions[];
}

export interface InvoicePositions {
  /**
   *  contract or customer identifier
   */
  id: string;
  invoicePositions: InvoicePosition[];
  recipientCustomer?: RecipientCustomer;
  recipientBillingAddress?: BillingAddress;
  senderBillingAddress?: BillingAddress;
  recipientOrganization?: Organization;
  senderOrganization?: Organization;
  paymentMethodDetails?: Any;
}

export interface RecipientCustomer {
  /**
   *  customer id - used to store the resource in DB
   */
  id: string;
  /**
   *  displayed in invoice - auto generated per customer
   */
  customerNumber: string;
}

export interface BillingAddress {
  email: string;
  website: string;
  street: string;
  buildingNumber: string;
  postcode: string;
  region: string;
  countryName: string;
  telephone: string;
  timezone: string;
  economicArea: string;
}

export interface InvoicePosition {
  currency: string;
  tableList: InvoiceRow[];
  totalPrice?: InvoicePrice;
}

export interface InvoiceRow {
  product: string;
  pricePerUnit: number;
  quantity: number;
  vat: string;
  amount: number;
}

export interface InvoicePrice {
  gross: number;
  net: number;
}

export interface TriggerInvoices {
  /**
   *  list of id referring to contract_ids or customer_ids
   */
  ids: string[];
}

const baseDeleted: object = {
  id: "",
};

const baseInvoiceList: object = {
  totalCount: 0,
};

const baseInvoice: object = {
  id: "",
  timestamp: "",
  customerId: "",
  paymentStatus: "",
  totalAmount: 0,
  netAmount: 0,
  vatAmount: 0,
  document: "",
  invoiceNumber: "",
  customerRemark: "",
};

const baseInvoicesPositionsData: object = {
};

const baseInvoicePositions: object = {
  id: "",
};

const baseRecipientCustomer: object = {
  id: "",
  customerNumber: "",
};

const baseBillingAddress: object = {
  email: "",
  website: "",
  street: "",
  buildingNumber: "",
  postcode: "",
  region: "",
  countryName: "",
  telephone: "",
  timezone: "",
  economicArea: "",
};

const baseInvoicePosition: object = {
  currency: "",
};

const baseInvoiceRow: object = {
  product: "",
  pricePerUnit: 0,
  quantity: 0,
  vat: "",
  amount: 0,
};

const baseInvoicePrice: object = {
  gross: 0,
  net: 0,
};

const baseTriggerInvoices: object = {
  ids: "",
};

/**
 *
 *  Microservice definition.
 */
export interface Service {

  Read(request: ReadRequest): Promise<InvoiceList>;

  Create(request: InvoiceList): Promise<InvoiceList>;

  Delete(request: DeleteRequest): Promise<Empty>;

  Update(request: InvoiceList): Promise<InvoiceList>;

  Upsert(request: InvoiceList): Promise<InvoiceList>;

}

export interface MetaBase {
  readonly kind: 'object' | 'array' | 'map' | 'union' | 'builtin';
}

export interface MetaMessage extends MetaBase {
  readonly kind: 'object';
  readonly type: string;
  readonly name: string;
}

export interface MetaArray extends MetaBase {
  readonly kind: 'array';
  readonly type: MetaBase | string;
}

export interface MetaMap extends MetaBase {
  readonly kind: 'map';
  readonly key: string;
  readonly value: MetaBase | string;
}

export interface MetaUnion extends MetaBase {
  readonly kind: 'union';
  readonly choices: Array<MetaBase | string | undefined>;
}

export interface MetaService<T, R> {
  readonly request: MetaMessage;
  readonly response: MetaMessage;
  readonly clientStreaming: boolean;
  readonly serverStreaming: boolean;
  readonly encodeRequest?: (message: T, writer: Writer) => Writer;
  readonly decodeResponse?: (input: Uint8Array | Reader, length?: number) => R;
}

export interface MetaPrimitive extends MetaBase {
  readonly kind: 'builtin';
  readonly type: string;
  readonly original: string;
}

export const protobufPackage = 'io.restorecommerce.invoice'

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

export const InvoiceList = {
  encode(message: InvoiceList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      Invoice.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(16).uint32(message.totalCount);
    if (message.subject !== undefined && message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): InvoiceList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInvoiceList } as InvoiceList;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Invoice.decode(reader, reader.uint32()));
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
  fromJSON(object: any): InvoiceList {
    const message = { ...baseInvoiceList } as InvoiceList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Invoice.fromJSON(e));
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
  fromPartial(object: DeepPartial<InvoiceList>): InvoiceList {
    const message = { ...baseInvoiceList } as InvoiceList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Invoice.fromPartial(e));
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
  toJSON(message: InvoiceList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map(e => e ? Invoice.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },
};

export const Invoice = {
  encode(message: Invoice, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    if (message.meta !== undefined && message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(34).string(message.timestamp);
    writer.uint32(42).string(message.customerId);
    writer.uint32(50).string(message.paymentStatus);
    writer.uint32(57).double(message.totalAmount);
    writer.uint32(65).double(message.netAmount);
    writer.uint32(73).double(message.vatAmount);
    writer.uint32(82).string(message.document);
    writer.uint32(90).string(message.invoiceNumber);
    writer.uint32(98).string(message.customerRemark);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Invoice {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInvoice } as Invoice;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.meta = Meta.decode(reader, reader.uint32());
          break;
        case 4:
          message.timestamp = reader.string();
          break;
        case 5:
          message.customerId = reader.string();
          break;
        case 6:
          message.paymentStatus = reader.string();
          break;
        case 7:
          message.totalAmount = reader.double();
          break;
        case 8:
          message.netAmount = reader.double();
          break;
        case 9:
          message.vatAmount = reader.double();
          break;
        case 10:
          message.document = reader.string();
          break;
        case 11:
          message.invoiceNumber = reader.string();
          break;
        case 12:
          message.customerRemark = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Invoice {
    const message = { ...baseInvoice } as Invoice;
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
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = String(object.timestamp);
    } else {
      message.timestamp = "";
    }
    if (object.customerId !== undefined && object.customerId !== null) {
      message.customerId = String(object.customerId);
    } else {
      message.customerId = "";
    }
    if (object.paymentStatus !== undefined && object.paymentStatus !== null) {
      message.paymentStatus = String(object.paymentStatus);
    } else {
      message.paymentStatus = "";
    }
    if (object.totalAmount !== undefined && object.totalAmount !== null) {
      message.totalAmount = Number(object.totalAmount);
    } else {
      message.totalAmount = 0;
    }
    if (object.netAmount !== undefined && object.netAmount !== null) {
      message.netAmount = Number(object.netAmount);
    } else {
      message.netAmount = 0;
    }
    if (object.vatAmount !== undefined && object.vatAmount !== null) {
      message.vatAmount = Number(object.vatAmount);
    } else {
      message.vatAmount = 0;
    }
    if (object.document !== undefined && object.document !== null) {
      message.document = String(object.document);
    } else {
      message.document = "";
    }
    if (object.invoiceNumber !== undefined && object.invoiceNumber !== null) {
      message.invoiceNumber = String(object.invoiceNumber);
    } else {
      message.invoiceNumber = "";
    }
    if (object.customerRemark !== undefined && object.customerRemark !== null) {
      message.customerRemark = String(object.customerRemark);
    } else {
      message.customerRemark = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Invoice>): Invoice {
    const message = { ...baseInvoice } as Invoice;
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
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = "";
    }
    if (object.customerId !== undefined && object.customerId !== null) {
      message.customerId = object.customerId;
    } else {
      message.customerId = "";
    }
    if (object.paymentStatus !== undefined && object.paymentStatus !== null) {
      message.paymentStatus = object.paymentStatus;
    } else {
      message.paymentStatus = "";
    }
    if (object.totalAmount !== undefined && object.totalAmount !== null) {
      message.totalAmount = object.totalAmount;
    } else {
      message.totalAmount = 0;
    }
    if (object.netAmount !== undefined && object.netAmount !== null) {
      message.netAmount = object.netAmount;
    } else {
      message.netAmount = 0;
    }
    if (object.vatAmount !== undefined && object.vatAmount !== null) {
      message.vatAmount = object.vatAmount;
    } else {
      message.vatAmount = 0;
    }
    if (object.document !== undefined && object.document !== null) {
      message.document = object.document;
    } else {
      message.document = "";
    }
    if (object.invoiceNumber !== undefined && object.invoiceNumber !== null) {
      message.invoiceNumber = object.invoiceNumber;
    } else {
      message.invoiceNumber = "";
    }
    if (object.customerRemark !== undefined && object.customerRemark !== null) {
      message.customerRemark = object.customerRemark;
    } else {
      message.customerRemark = "";
    }
    return message;
  },
  toJSON(message: Invoice): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.customerId !== undefined && (obj.customerId = message.customerId);
    message.paymentStatus !== undefined && (obj.paymentStatus = message.paymentStatus);
    message.totalAmount !== undefined && (obj.totalAmount = message.totalAmount);
    message.netAmount !== undefined && (obj.netAmount = message.netAmount);
    message.vatAmount !== undefined && (obj.vatAmount = message.vatAmount);
    message.document !== undefined && (obj.document = message.document);
    message.invoiceNumber !== undefined && (obj.invoiceNumber = message.invoiceNumber);
    message.customerRemark !== undefined && (obj.customerRemark = message.customerRemark);
    return obj;
  },
};

export const InvoicesPositionsData = {
  encode(message: InvoicesPositionsData, writer: Writer = Writer.create()): Writer {
    for (const v of message.invoicesPositionsData) {
      InvoicePositions.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): InvoicesPositionsData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInvoicesPositionsData } as InvoicesPositionsData;
    message.invoicesPositionsData = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.invoicesPositionsData.push(InvoicePositions.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): InvoicesPositionsData {
    const message = { ...baseInvoicesPositionsData } as InvoicesPositionsData;
    message.invoicesPositionsData = [];
    if (object.invoicesPositionsData !== undefined && object.invoicesPositionsData !== null) {
      for (const e of object.invoicesPositionsData) {
        message.invoicesPositionsData.push(InvoicePositions.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<InvoicesPositionsData>): InvoicesPositionsData {
    const message = { ...baseInvoicesPositionsData } as InvoicesPositionsData;
    message.invoicesPositionsData = [];
    if (object.invoicesPositionsData !== undefined && object.invoicesPositionsData !== null) {
      for (const e of object.invoicesPositionsData) {
        message.invoicesPositionsData.push(InvoicePositions.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: InvoicesPositionsData): unknown {
    const obj: any = {};
    if (message.invoicesPositionsData) {
      obj.invoicesPositionsData = message.invoicesPositionsData.map(e => e ? InvoicePositions.toJSON(e) : undefined);
    } else {
      obj.invoicesPositionsData = [];
    }
    return obj;
  },
};

export const InvoicePositions = {
  encode(message: InvoicePositions, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    for (const v of message.invoicePositions) {
      InvoicePosition.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.recipientCustomer !== undefined && message.recipientCustomer !== undefined) {
      RecipientCustomer.encode(message.recipientCustomer, writer.uint32(26).fork()).ldelim();
    }
    if (message.recipientBillingAddress !== undefined && message.recipientBillingAddress !== undefined) {
      BillingAddress.encode(message.recipientBillingAddress, writer.uint32(34).fork()).ldelim();
    }
    if (message.senderBillingAddress !== undefined && message.senderBillingAddress !== undefined) {
      BillingAddress.encode(message.senderBillingAddress, writer.uint32(42).fork()).ldelim();
    }
    if (message.recipientOrganization !== undefined && message.recipientOrganization !== undefined) {
      Organization.encode(message.recipientOrganization, writer.uint32(50).fork()).ldelim();
    }
    if (message.senderOrganization !== undefined && message.senderOrganization !== undefined) {
      Organization.encode(message.senderOrganization, writer.uint32(58).fork()).ldelim();
    }
    if (message.paymentMethodDetails !== undefined && message.paymentMethodDetails !== undefined) {
      Any.encode(message.paymentMethodDetails, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): InvoicePositions {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInvoicePositions } as InvoicePositions;
    message.invoicePositions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.invoicePositions.push(InvoicePosition.decode(reader, reader.uint32()));
          break;
        case 3:
          message.recipientCustomer = RecipientCustomer.decode(reader, reader.uint32());
          break;
        case 4:
          message.recipientBillingAddress = BillingAddress.decode(reader, reader.uint32());
          break;
        case 5:
          message.senderBillingAddress = BillingAddress.decode(reader, reader.uint32());
          break;
        case 6:
          message.recipientOrganization = Organization.decode(reader, reader.uint32());
          break;
        case 7:
          message.senderOrganization = Organization.decode(reader, reader.uint32());
          break;
        case 8:
          message.paymentMethodDetails = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): InvoicePositions {
    const message = { ...baseInvoicePositions } as InvoicePositions;
    message.invoicePositions = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.invoicePositions !== undefined && object.invoicePositions !== null) {
      for (const e of object.invoicePositions) {
        message.invoicePositions.push(InvoicePosition.fromJSON(e));
      }
    }
    if (object.recipientCustomer !== undefined && object.recipientCustomer !== null) {
      message.recipientCustomer = RecipientCustomer.fromJSON(object.recipientCustomer);
    } else {
      message.recipientCustomer = undefined;
    }
    if (object.recipientBillingAddress !== undefined && object.recipientBillingAddress !== null) {
      message.recipientBillingAddress = BillingAddress.fromJSON(object.recipientBillingAddress);
    } else {
      message.recipientBillingAddress = undefined;
    }
    if (object.senderBillingAddress !== undefined && object.senderBillingAddress !== null) {
      message.senderBillingAddress = BillingAddress.fromJSON(object.senderBillingAddress);
    } else {
      message.senderBillingAddress = undefined;
    }
    if (object.recipientOrganization !== undefined && object.recipientOrganization !== null) {
      message.recipientOrganization = Organization.fromJSON(object.recipientOrganization);
    } else {
      message.recipientOrganization = undefined;
    }
    if (object.senderOrganization !== undefined && object.senderOrganization !== null) {
      message.senderOrganization = Organization.fromJSON(object.senderOrganization);
    } else {
      message.senderOrganization = undefined;
    }
    if (object.paymentMethodDetails !== undefined && object.paymentMethodDetails !== null) {
      message.paymentMethodDetails = Any.fromJSON(object.paymentMethodDetails);
    } else {
      message.paymentMethodDetails = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<InvoicePositions>): InvoicePositions {
    const message = { ...baseInvoicePositions } as InvoicePositions;
    message.invoicePositions = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.invoicePositions !== undefined && object.invoicePositions !== null) {
      for (const e of object.invoicePositions) {
        message.invoicePositions.push(InvoicePosition.fromPartial(e));
      }
    }
    if (object.recipientCustomer !== undefined && object.recipientCustomer !== null) {
      message.recipientCustomer = RecipientCustomer.fromPartial(object.recipientCustomer);
    } else {
      message.recipientCustomer = undefined;
    }
    if (object.recipientBillingAddress !== undefined && object.recipientBillingAddress !== null) {
      message.recipientBillingAddress = BillingAddress.fromPartial(object.recipientBillingAddress);
    } else {
      message.recipientBillingAddress = undefined;
    }
    if (object.senderBillingAddress !== undefined && object.senderBillingAddress !== null) {
      message.senderBillingAddress = BillingAddress.fromPartial(object.senderBillingAddress);
    } else {
      message.senderBillingAddress = undefined;
    }
    if (object.recipientOrganization !== undefined && object.recipientOrganization !== null) {
      message.recipientOrganization = Organization.fromPartial(object.recipientOrganization);
    } else {
      message.recipientOrganization = undefined;
    }
    if (object.senderOrganization !== undefined && object.senderOrganization !== null) {
      message.senderOrganization = Organization.fromPartial(object.senderOrganization);
    } else {
      message.senderOrganization = undefined;
    }
    if (object.paymentMethodDetails !== undefined && object.paymentMethodDetails !== null) {
      message.paymentMethodDetails = Any.fromPartial(object.paymentMethodDetails);
    } else {
      message.paymentMethodDetails = undefined;
    }
    return message;
  },
  toJSON(message: InvoicePositions): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.invoicePositions) {
      obj.invoicePositions = message.invoicePositions.map(e => e ? InvoicePosition.toJSON(e) : undefined);
    } else {
      obj.invoicePositions = [];
    }
    message.recipientCustomer !== undefined && (obj.recipientCustomer = message.recipientCustomer ? RecipientCustomer.toJSON(message.recipientCustomer) : undefined);
    message.recipientBillingAddress !== undefined && (obj.recipientBillingAddress = message.recipientBillingAddress ? BillingAddress.toJSON(message.recipientBillingAddress) : undefined);
    message.senderBillingAddress !== undefined && (obj.senderBillingAddress = message.senderBillingAddress ? BillingAddress.toJSON(message.senderBillingAddress) : undefined);
    message.recipientOrganization !== undefined && (obj.recipientOrganization = message.recipientOrganization ? Organization.toJSON(message.recipientOrganization) : undefined);
    message.senderOrganization !== undefined && (obj.senderOrganization = message.senderOrganization ? Organization.toJSON(message.senderOrganization) : undefined);
    message.paymentMethodDetails !== undefined && (obj.paymentMethodDetails = message.paymentMethodDetails ? Any.toJSON(message.paymentMethodDetails) : undefined);
    return obj;
  },
};

export const RecipientCustomer = {
  encode(message: RecipientCustomer, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    writer.uint32(18).string(message.customerNumber);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): RecipientCustomer {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRecipientCustomer } as RecipientCustomer;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.customerNumber = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RecipientCustomer {
    const message = { ...baseRecipientCustomer } as RecipientCustomer;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.customerNumber !== undefined && object.customerNumber !== null) {
      message.customerNumber = String(object.customerNumber);
    } else {
      message.customerNumber = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<RecipientCustomer>): RecipientCustomer {
    const message = { ...baseRecipientCustomer } as RecipientCustomer;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.customerNumber !== undefined && object.customerNumber !== null) {
      message.customerNumber = object.customerNumber;
    } else {
      message.customerNumber = "";
    }
    return message;
  },
  toJSON(message: RecipientCustomer): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.customerNumber !== undefined && (obj.customerNumber = message.customerNumber);
    return obj;
  },
};

export const BillingAddress = {
  encode(message: BillingAddress, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.email);
    writer.uint32(18).string(message.website);
    writer.uint32(26).string(message.street);
    writer.uint32(34).string(message.buildingNumber);
    writer.uint32(42).string(message.postcode);
    writer.uint32(50).string(message.region);
    writer.uint32(58).string(message.countryName);
    writer.uint32(74).string(message.telephone);
    writer.uint32(82).string(message.timezone);
    writer.uint32(90).string(message.economicArea);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): BillingAddress {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBillingAddress } as BillingAddress;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.email = reader.string();
          break;
        case 2:
          message.website = reader.string();
          break;
        case 3:
          message.street = reader.string();
          break;
        case 4:
          message.buildingNumber = reader.string();
          break;
        case 5:
          message.postcode = reader.string();
          break;
        case 6:
          message.region = reader.string();
          break;
        case 7:
          message.countryName = reader.string();
          break;
        case 9:
          message.telephone = reader.string();
          break;
        case 10:
          message.timezone = reader.string();
          break;
        case 11:
          message.economicArea = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BillingAddress {
    const message = { ...baseBillingAddress } as BillingAddress;
    if (object.email !== undefined && object.email !== null) {
      message.email = String(object.email);
    } else {
      message.email = "";
    }
    if (object.website !== undefined && object.website !== null) {
      message.website = String(object.website);
    } else {
      message.website = "";
    }
    if (object.street !== undefined && object.street !== null) {
      message.street = String(object.street);
    } else {
      message.street = "";
    }
    if (object.buildingNumber !== undefined && object.buildingNumber !== null) {
      message.buildingNumber = String(object.buildingNumber);
    } else {
      message.buildingNumber = "";
    }
    if (object.postcode !== undefined && object.postcode !== null) {
      message.postcode = String(object.postcode);
    } else {
      message.postcode = "";
    }
    if (object.region !== undefined && object.region !== null) {
      message.region = String(object.region);
    } else {
      message.region = "";
    }
    if (object.countryName !== undefined && object.countryName !== null) {
      message.countryName = String(object.countryName);
    } else {
      message.countryName = "";
    }
    if (object.telephone !== undefined && object.telephone !== null) {
      message.telephone = String(object.telephone);
    } else {
      message.telephone = "";
    }
    if (object.timezone !== undefined && object.timezone !== null) {
      message.timezone = String(object.timezone);
    } else {
      message.timezone = "";
    }
    if (object.economicArea !== undefined && object.economicArea !== null) {
      message.economicArea = String(object.economicArea);
    } else {
      message.economicArea = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<BillingAddress>): BillingAddress {
    const message = { ...baseBillingAddress } as BillingAddress;
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = "";
    }
    if (object.website !== undefined && object.website !== null) {
      message.website = object.website;
    } else {
      message.website = "";
    }
    if (object.street !== undefined && object.street !== null) {
      message.street = object.street;
    } else {
      message.street = "";
    }
    if (object.buildingNumber !== undefined && object.buildingNumber !== null) {
      message.buildingNumber = object.buildingNumber;
    } else {
      message.buildingNumber = "";
    }
    if (object.postcode !== undefined && object.postcode !== null) {
      message.postcode = object.postcode;
    } else {
      message.postcode = "";
    }
    if (object.region !== undefined && object.region !== null) {
      message.region = object.region;
    } else {
      message.region = "";
    }
    if (object.countryName !== undefined && object.countryName !== null) {
      message.countryName = object.countryName;
    } else {
      message.countryName = "";
    }
    if (object.telephone !== undefined && object.telephone !== null) {
      message.telephone = object.telephone;
    } else {
      message.telephone = "";
    }
    if (object.timezone !== undefined && object.timezone !== null) {
      message.timezone = object.timezone;
    } else {
      message.timezone = "";
    }
    if (object.economicArea !== undefined && object.economicArea !== null) {
      message.economicArea = object.economicArea;
    } else {
      message.economicArea = "";
    }
    return message;
  },
  toJSON(message: BillingAddress): unknown {
    const obj: any = {};
    message.email !== undefined && (obj.email = message.email);
    message.website !== undefined && (obj.website = message.website);
    message.street !== undefined && (obj.street = message.street);
    message.buildingNumber !== undefined && (obj.buildingNumber = message.buildingNumber);
    message.postcode !== undefined && (obj.postcode = message.postcode);
    message.region !== undefined && (obj.region = message.region);
    message.countryName !== undefined && (obj.countryName = message.countryName);
    message.telephone !== undefined && (obj.telephone = message.telephone);
    message.timezone !== undefined && (obj.timezone = message.timezone);
    message.economicArea !== undefined && (obj.economicArea = message.economicArea);
    return obj;
  },
};

export const InvoicePosition = {
  encode(message: InvoicePosition, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.currency);
    for (const v of message.tableList) {
      InvoiceRow.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.totalPrice !== undefined && message.totalPrice !== undefined) {
      InvoicePrice.encode(message.totalPrice, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): InvoicePosition {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInvoicePosition } as InvoicePosition;
    message.tableList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.currency = reader.string();
          break;
        case 2:
          message.tableList.push(InvoiceRow.decode(reader, reader.uint32()));
          break;
        case 3:
          message.totalPrice = InvoicePrice.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): InvoicePosition {
    const message = { ...baseInvoicePosition } as InvoicePosition;
    message.tableList = [];
    if (object.currency !== undefined && object.currency !== null) {
      message.currency = String(object.currency);
    } else {
      message.currency = "";
    }
    if (object.tableList !== undefined && object.tableList !== null) {
      for (const e of object.tableList) {
        message.tableList.push(InvoiceRow.fromJSON(e));
      }
    }
    if (object.totalPrice !== undefined && object.totalPrice !== null) {
      message.totalPrice = InvoicePrice.fromJSON(object.totalPrice);
    } else {
      message.totalPrice = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<InvoicePosition>): InvoicePosition {
    const message = { ...baseInvoicePosition } as InvoicePosition;
    message.tableList = [];
    if (object.currency !== undefined && object.currency !== null) {
      message.currency = object.currency;
    } else {
      message.currency = "";
    }
    if (object.tableList !== undefined && object.tableList !== null) {
      for (const e of object.tableList) {
        message.tableList.push(InvoiceRow.fromPartial(e));
      }
    }
    if (object.totalPrice !== undefined && object.totalPrice !== null) {
      message.totalPrice = InvoicePrice.fromPartial(object.totalPrice);
    } else {
      message.totalPrice = undefined;
    }
    return message;
  },
  toJSON(message: InvoicePosition): unknown {
    const obj: any = {};
    message.currency !== undefined && (obj.currency = message.currency);
    if (message.tableList) {
      obj.tableList = message.tableList.map(e => e ? InvoiceRow.toJSON(e) : undefined);
    } else {
      obj.tableList = [];
    }
    message.totalPrice !== undefined && (obj.totalPrice = message.totalPrice ? InvoicePrice.toJSON(message.totalPrice) : undefined);
    return obj;
  },
};

export const InvoiceRow = {
  encode(message: InvoiceRow, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.product);
    writer.uint32(16).uint32(message.pricePerUnit);
    writer.uint32(24).uint32(message.quantity);
    writer.uint32(34).string(message.vat);
    writer.uint32(40).uint32(message.amount);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): InvoiceRow {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInvoiceRow } as InvoiceRow;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.product = reader.string();
          break;
        case 2:
          message.pricePerUnit = reader.uint32();
          break;
        case 3:
          message.quantity = reader.uint32();
          break;
        case 4:
          message.vat = reader.string();
          break;
        case 5:
          message.amount = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): InvoiceRow {
    const message = { ...baseInvoiceRow } as InvoiceRow;
    if (object.product !== undefined && object.product !== null) {
      message.product = String(object.product);
    } else {
      message.product = "";
    }
    if (object.pricePerUnit !== undefined && object.pricePerUnit !== null) {
      message.pricePerUnit = Number(object.pricePerUnit);
    } else {
      message.pricePerUnit = 0;
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = Number(object.quantity);
    } else {
      message.quantity = 0;
    }
    if (object.vat !== undefined && object.vat !== null) {
      message.vat = String(object.vat);
    } else {
      message.vat = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Number(object.amount);
    } else {
      message.amount = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<InvoiceRow>): InvoiceRow {
    const message = { ...baseInvoiceRow } as InvoiceRow;
    if (object.product !== undefined && object.product !== null) {
      message.product = object.product;
    } else {
      message.product = "";
    }
    if (object.pricePerUnit !== undefined && object.pricePerUnit !== null) {
      message.pricePerUnit = object.pricePerUnit;
    } else {
      message.pricePerUnit = 0;
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = object.quantity;
    } else {
      message.quantity = 0;
    }
    if (object.vat !== undefined && object.vat !== null) {
      message.vat = object.vat;
    } else {
      message.vat = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = 0;
    }
    return message;
  },
  toJSON(message: InvoiceRow): unknown {
    const obj: any = {};
    message.product !== undefined && (obj.product = message.product);
    message.pricePerUnit !== undefined && (obj.pricePerUnit = message.pricePerUnit);
    message.quantity !== undefined && (obj.quantity = message.quantity);
    message.vat !== undefined && (obj.vat = message.vat);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
};

export const InvoicePrice = {
  encode(message: InvoicePrice, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint32(message.gross);
    writer.uint32(16).uint32(message.net);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): InvoicePrice {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInvoicePrice } as InvoicePrice;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gross = reader.uint32();
          break;
        case 2:
          message.net = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): InvoicePrice {
    const message = { ...baseInvoicePrice } as InvoicePrice;
    if (object.gross !== undefined && object.gross !== null) {
      message.gross = Number(object.gross);
    } else {
      message.gross = 0;
    }
    if (object.net !== undefined && object.net !== null) {
      message.net = Number(object.net);
    } else {
      message.net = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<InvoicePrice>): InvoicePrice {
    const message = { ...baseInvoicePrice } as InvoicePrice;
    if (object.gross !== undefined && object.gross !== null) {
      message.gross = object.gross;
    } else {
      message.gross = 0;
    }
    if (object.net !== undefined && object.net !== null) {
      message.net = object.net;
    } else {
      message.net = 0;
    }
    return message;
  },
  toJSON(message: InvoicePrice): unknown {
    const obj: any = {};
    message.gross !== undefined && (obj.gross = message.gross);
    message.net !== undefined && (obj.net = message.net);
    return obj;
  },
};

export const TriggerInvoices = {
  encode(message: TriggerInvoices, writer: Writer = Writer.create()): Writer {
    for (const v of message.ids) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): TriggerInvoices {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTriggerInvoices } as TriggerInvoices;
    message.ids = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ids.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TriggerInvoices {
    const message = { ...baseTriggerInvoices } as TriggerInvoices;
    message.ids = [];
    if (object.ids !== undefined && object.ids !== null) {
      for (const e of object.ids) {
        message.ids.push(String(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TriggerInvoices>): TriggerInvoices {
    const message = { ...baseTriggerInvoices } as TriggerInvoices;
    message.ids = [];
    if (object.ids !== undefined && object.ids !== null) {
      for (const e of object.ids) {
        message.ids.push(e);
      }
    }
    return message;
  },
  toJSON(message: TriggerInvoices): unknown {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map(e => e);
    } else {
      obj.ids = [];
    }
    return obj;
  },
};

export const metaDeleted: { [key in keyof Required<Deleted>]: MetaBase | string } = {
  id: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
}
export const metaInvoiceList: { [key in keyof Required<InvoiceList>]: MetaBase | string } = {
  items: {kind:'array', type:{kind:'object', type:'.io.restorecommerce.invoice.Invoice', name:'Invoice'} as MetaMessage} as MetaArray,
  totalCount: {kind:'builtin', type:'number', original:'uint32'} as MetaPrimitive,
  subject: {kind:'object', type:'.io.restorecommerce.auth.Subject', name:'Subject'} as MetaMessage,
}
export const metaInvoice: { [key in keyof Required<Invoice>]: MetaBase | string } = {
  id: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  meta: {kind:'object', type:'.io.restorecommerce.meta.Meta', name:'Meta'} as MetaMessage,
  timestamp: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  customerId: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  paymentStatus: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  totalAmount: {kind:'builtin', type:'number', original:'double'} as MetaPrimitive,
  netAmount: {kind:'builtin', type:'number', original:'double'} as MetaPrimitive,
  vatAmount: {kind:'builtin', type:'number', original:'double'} as MetaPrimitive,
  document: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  invoiceNumber: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  customerRemark: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
}
export const metaInvoicesPositionsData: { [key in keyof Required<InvoicesPositionsData>]: MetaBase | string } = {
  invoicesPositionsData: {kind:'array', type:{kind:'object', type:'.io.restorecommerce.invoice.InvoicePositions', name:'InvoicePositions'} as MetaMessage} as MetaArray,
}
export const metaInvoicePositions: { [key in keyof Required<InvoicePositions>]: MetaBase | string } = {
  id: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  invoicePositions: {kind:'array', type:{kind:'object', type:'.io.restorecommerce.invoice.InvoicePosition', name:'InvoicePosition'} as MetaMessage} as MetaArray,
  recipientCustomer: {kind:'object', type:'.io.restorecommerce.invoice.RecipientCustomer', name:'RecipientCustomer'} as MetaMessage,
  recipientBillingAddress: {kind:'object', type:'.io.restorecommerce.invoice.BillingAddress', name:'BillingAddress'} as MetaMessage,
  senderBillingAddress: {kind:'object', type:'.io.restorecommerce.invoice.BillingAddress', name:'BillingAddress'} as MetaMessage,
  recipientOrganization: {kind:'object', type:'.io.restorecommerce.organization.Organization', name:'Organization'} as MetaMessage,
  senderOrganization: {kind:'object', type:'.io.restorecommerce.organization.Organization', name:'Organization'} as MetaMessage,
  paymentMethodDetails: {kind:'object', type:'.google.protobuf.Any', name:'Any'} as MetaMessage,
}
export const metaRecipientCustomer: { [key in keyof Required<RecipientCustomer>]: MetaBase | string } = {
  id: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  customerNumber: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
}
export const metaBillingAddress: { [key in keyof Required<BillingAddress>]: MetaBase | string } = {
  email: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  website: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  street: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  buildingNumber: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  postcode: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  region: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  countryName: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  telephone: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  timezone: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  economicArea: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
}
export const metaInvoicePosition: { [key in keyof Required<InvoicePosition>]: MetaBase | string } = {
  currency: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  tableList: {kind:'array', type:{kind:'object', type:'.io.restorecommerce.invoice.InvoiceRow', name:'InvoiceRow'} as MetaMessage} as MetaArray,
  totalPrice: {kind:'object', type:'.io.restorecommerce.invoice.InvoicePrice', name:'InvoicePrice'} as MetaMessage,
}
export const metaInvoiceRow: { [key in keyof Required<InvoiceRow>]: MetaBase | string } = {
  product: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  pricePerUnit: {kind:'builtin', type:'number', original:'uint32'} as MetaPrimitive,
  quantity: {kind:'builtin', type:'number', original:'uint32'} as MetaPrimitive,
  vat: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  amount: {kind:'builtin', type:'number', original:'uint32'} as MetaPrimitive,
}
export const metaInvoicePrice: { [key in keyof Required<InvoicePrice>]: MetaBase | string } = {
  gross: {kind:'builtin', type:'number', original:'uint32'} as MetaPrimitive,
  net: {kind:'builtin', type:'number', original:'uint32'} as MetaPrimitive,
}
export const metaTriggerInvoices: { [key in keyof Required<TriggerInvoices>]: MetaBase | string } = {
  ids: {kind:'array', type:{kind:'builtin', type:'string', original:'string'} as MetaPrimitive} as MetaArray,
}
export const metaService: { [key in keyof Service]: MetaService<any, any> } = {
  Read: {request: {kind:'object', type:'.io.restorecommerce.resourcebase.ReadRequest', name:'ReadRequest'} as MetaMessage, response: {kind:'object', type:'.io.restorecommerce.invoice.InvoiceList', name:'InvoiceList'} as MetaMessage, clientStreaming: false, serverStreaming: false, encodeRequest: ReadRequest.encode, decodeResponse: InvoiceList.decode} as MetaService<ReadRequest, InvoiceList>,
  Create: {request: {kind:'object', type:'.io.restorecommerce.invoice.InvoiceList', name:'InvoiceList'} as MetaMessage, response: {kind:'object', type:'.io.restorecommerce.invoice.InvoiceList', name:'InvoiceList'} as MetaMessage, clientStreaming: false, serverStreaming: false, encodeRequest: InvoiceList.encode, decodeResponse: InvoiceList.decode} as MetaService<InvoiceList, InvoiceList>,
  Delete: {request: {kind:'object', type:'.io.restorecommerce.resourcebase.DeleteRequest', name:'DeleteRequest'} as MetaMessage, response: {kind:'object', type:'.google.protobuf.Empty', name:'Empty'} as MetaMessage, clientStreaming: false, serverStreaming: false, encodeRequest: DeleteRequest.encode, decodeResponse: Empty.decode} as MetaService<DeleteRequest, Empty>,
  Update: {request: {kind:'object', type:'.io.restorecommerce.invoice.InvoiceList', name:'InvoiceList'} as MetaMessage, response: {kind:'object', type:'.io.restorecommerce.invoice.InvoiceList', name:'InvoiceList'} as MetaMessage, clientStreaming: false, serverStreaming: false, encodeRequest: InvoiceList.encode, decodeResponse: InvoiceList.decode} as MetaService<InvoiceList, InvoiceList>,
  Upsert: {request: {kind:'object', type:'.io.restorecommerce.invoice.InvoiceList', name:'InvoiceList'} as MetaMessage, response: {kind:'object', type:'.io.restorecommerce.invoice.InvoiceList', name:'InvoiceList'} as MetaMessage, clientStreaming: false, serverStreaming: false, encodeRequest: InvoiceList.encode, decodeResponse: InvoiceList.decode} as MetaService<InvoiceList, InvoiceList>,
}
export const metadata: { [key: string]: ['service', string, any, { [key: string]: MetaService<any, any> }] | ['enum', string, any, any] | ['message', string, any, { [key: string]: MetaBase | string }] } = {
  Deleted: ['message', '.io.restorecommerce.invoice.Deleted', Deleted, metaDeleted],
  InvoiceList: ['message', '.io.restorecommerce.invoice.InvoiceList', InvoiceList, metaInvoiceList],
  Invoice: ['message', '.io.restorecommerce.invoice.Invoice', Invoice, metaInvoice],
  InvoicesPositionsData: ['message', '.io.restorecommerce.invoice.InvoicesPositionsData', InvoicesPositionsData, metaInvoicesPositionsData],
  InvoicePositions: ['message', '.io.restorecommerce.invoice.InvoicePositions', InvoicePositions, metaInvoicePositions],
  RecipientCustomer: ['message', '.io.restorecommerce.invoice.RecipientCustomer', RecipientCustomer, metaRecipientCustomer],
  BillingAddress: ['message', '.io.restorecommerce.invoice.BillingAddress', BillingAddress, metaBillingAddress],
  InvoicePosition: ['message', '.io.restorecommerce.invoice.InvoicePosition', InvoicePosition, metaInvoicePosition],
  InvoiceRow: ['message', '.io.restorecommerce.invoice.InvoiceRow', InvoiceRow, metaInvoiceRow],
  InvoicePrice: ['message', '.io.restorecommerce.invoice.InvoicePrice', InvoicePrice, metaInvoicePrice],
  TriggerInvoices: ['message', '.io.restorecommerce.invoice.TriggerInvoices', TriggerInvoices, metaTriggerInvoices],
  Service: ['service', '.io.restorecommerce.invoice.Service', undefined, metaService],
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