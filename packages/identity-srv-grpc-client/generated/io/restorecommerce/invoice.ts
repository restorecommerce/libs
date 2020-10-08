/* eslint-disable */
import { Subject, ApiKey } from '../../io/restorecommerce/auth';
import { Meta } from '../../io/restorecommerce/meta';
import { Organization } from '../../io/restorecommerce/organization';
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
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
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

export const InvoiceList = {
  encode(message: InvoiceList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      Invoice.encode(v!, writer.uint32(10).fork()).ldelim();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
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
};
