/* eslint-disable */
import { IFileDescriptorProto } from "protobufjs/ext/descriptor";
import {
  Subject,
  protoMetadata as io_restorecommerce_auth_protoMetadata,
} from "../../io/restorecommerce/auth";
import {
  Meta,
  protoMetadata as io_restorecommerce_meta_protoMetadata,
} from "../../io/restorecommerce/meta";
import {
  Organization,
  protoMetadata as io_restorecommerce_organization_protoMetadata,
} from "../../io/restorecommerce/organization";
import {
  Any,
  protoMetadata as google_protobuf_any_protoMetadata,
} from "../../google/protobuf/any";
import { Writer, Reader } from "protobufjs/minimal";
import {
  Empty,
  protoMetadata as google_protobuf_empty_protoMetadata,
} from "../../google/protobuf/empty";
import {
  ReadRequest,
  DeleteRequest,
  protoMetadata as io_restorecommerce_resource_base_protoMetadata,
} from "../../io/restorecommerce/resource_base";

export const protobufPackage = "io.restorecommerce.invoice";

export interface Deleted {
  id: string;
}

/** For multiple invoices */
export interface InvoiceList {
  items: Invoice[];
  totalCount: number;
  subject?: Subject;
}

/** A simple invoice. */
export interface Invoice {
  id: string;
  meta?: Meta;
  timestamp: string;
  customerId: string;
  paymentStatus: string;
  totalAmount: number;
  netAmount: number;
  /** difference between net and total */
  vatAmount: number;
  document: string;
  invoiceNumber: string;
  customerRemark: string;
}

/** List of Invoice Positions data */
export interface InvoicesPositionsData {
  invoicesPositionsData: InvoicePositions[];
}

export interface InvoicePositions {
  /** contract or customer identifier */
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
  /** customer id - used to store the resource in DB */
  id: string;
  /** displayed in invoice - auto generated per customer */
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
  /** list of id referring to contract_ids or customer_ids */
  ids: string[];
}

const baseDeleted: object = { id: "" };

export const Deleted = {
  encode(message: Deleted, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Deleted {
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

const baseInvoiceList: object = { totalCount: 0 };

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

  decode(input: Reader | Uint8Array, length?: number): InvoiceList {
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
      obj.items = message.items.map((e) => (e ? Invoice.toJSON(e) : undefined));
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

  decode(input: Reader | Uint8Array, length?: number): Invoice {
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
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.customerId !== undefined && (obj.customerId = message.customerId);
    message.paymentStatus !== undefined &&
      (obj.paymentStatus = message.paymentStatus);
    message.totalAmount !== undefined &&
      (obj.totalAmount = message.totalAmount);
    message.netAmount !== undefined && (obj.netAmount = message.netAmount);
    message.vatAmount !== undefined && (obj.vatAmount = message.vatAmount);
    message.document !== undefined && (obj.document = message.document);
    message.invoiceNumber !== undefined &&
      (obj.invoiceNumber = message.invoiceNumber);
    message.customerRemark !== undefined &&
      (obj.customerRemark = message.customerRemark);
    return obj;
  },
};

const baseInvoicesPositionsData: object = {};

export const InvoicesPositionsData = {
  encode(
    message: InvoicesPositionsData,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.invoicesPositionsData) {
      InvoicePositions.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): InvoicesPositionsData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInvoicesPositionsData } as InvoicesPositionsData;
    message.invoicesPositionsData = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.invoicesPositionsData.push(
            InvoicePositions.decode(reader, reader.uint32())
          );
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
    if (
      object.invoicesPositionsData !== undefined &&
      object.invoicesPositionsData !== null
    ) {
      for (const e of object.invoicesPositionsData) {
        message.invoicesPositionsData.push(InvoicePositions.fromJSON(e));
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<InvoicesPositionsData>
  ): InvoicesPositionsData {
    const message = { ...baseInvoicesPositionsData } as InvoicesPositionsData;
    message.invoicesPositionsData = [];
    if (
      object.invoicesPositionsData !== undefined &&
      object.invoicesPositionsData !== null
    ) {
      for (const e of object.invoicesPositionsData) {
        message.invoicesPositionsData.push(InvoicePositions.fromPartial(e));
      }
    }
    return message;
  },

  toJSON(message: InvoicesPositionsData): unknown {
    const obj: any = {};
    if (message.invoicesPositionsData) {
      obj.invoicesPositionsData = message.invoicesPositionsData.map((e) =>
        e ? InvoicePositions.toJSON(e) : undefined
      );
    } else {
      obj.invoicesPositionsData = [];
    }
    return obj;
  },
};

const baseInvoicePositions: object = { id: "" };

export const InvoicePositions = {
  encode(message: InvoicePositions, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    for (const v of message.invoicePositions) {
      InvoicePosition.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (
      message.recipientCustomer !== undefined &&
      message.recipientCustomer !== undefined
    ) {
      RecipientCustomer.encode(
        message.recipientCustomer,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (
      message.recipientBillingAddress !== undefined &&
      message.recipientBillingAddress !== undefined
    ) {
      BillingAddress.encode(
        message.recipientBillingAddress,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (
      message.senderBillingAddress !== undefined &&
      message.senderBillingAddress !== undefined
    ) {
      BillingAddress.encode(
        message.senderBillingAddress,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (
      message.recipientOrganization !== undefined &&
      message.recipientOrganization !== undefined
    ) {
      Organization.encode(
        message.recipientOrganization,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (
      message.senderOrganization !== undefined &&
      message.senderOrganization !== undefined
    ) {
      Organization.encode(
        message.senderOrganization,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (
      message.paymentMethodDetails !== undefined &&
      message.paymentMethodDetails !== undefined
    ) {
      Any.encode(
        message.paymentMethodDetails,
        writer.uint32(66).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): InvoicePositions {
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
          message.invoicePositions.push(
            InvoicePosition.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.recipientCustomer = RecipientCustomer.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.recipientBillingAddress = BillingAddress.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.senderBillingAddress = BillingAddress.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.recipientOrganization = Organization.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.senderOrganization = Organization.decode(
            reader,
            reader.uint32()
          );
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
    if (
      object.invoicePositions !== undefined &&
      object.invoicePositions !== null
    ) {
      for (const e of object.invoicePositions) {
        message.invoicePositions.push(InvoicePosition.fromJSON(e));
      }
    }
    if (
      object.recipientCustomer !== undefined &&
      object.recipientCustomer !== null
    ) {
      message.recipientCustomer = RecipientCustomer.fromJSON(
        object.recipientCustomer
      );
    } else {
      message.recipientCustomer = undefined;
    }
    if (
      object.recipientBillingAddress !== undefined &&
      object.recipientBillingAddress !== null
    ) {
      message.recipientBillingAddress = BillingAddress.fromJSON(
        object.recipientBillingAddress
      );
    } else {
      message.recipientBillingAddress = undefined;
    }
    if (
      object.senderBillingAddress !== undefined &&
      object.senderBillingAddress !== null
    ) {
      message.senderBillingAddress = BillingAddress.fromJSON(
        object.senderBillingAddress
      );
    } else {
      message.senderBillingAddress = undefined;
    }
    if (
      object.recipientOrganization !== undefined &&
      object.recipientOrganization !== null
    ) {
      message.recipientOrganization = Organization.fromJSON(
        object.recipientOrganization
      );
    } else {
      message.recipientOrganization = undefined;
    }
    if (
      object.senderOrganization !== undefined &&
      object.senderOrganization !== null
    ) {
      message.senderOrganization = Organization.fromJSON(
        object.senderOrganization
      );
    } else {
      message.senderOrganization = undefined;
    }
    if (
      object.paymentMethodDetails !== undefined &&
      object.paymentMethodDetails !== null
    ) {
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
    if (
      object.invoicePositions !== undefined &&
      object.invoicePositions !== null
    ) {
      for (const e of object.invoicePositions) {
        message.invoicePositions.push(InvoicePosition.fromPartial(e));
      }
    }
    if (
      object.recipientCustomer !== undefined &&
      object.recipientCustomer !== null
    ) {
      message.recipientCustomer = RecipientCustomer.fromPartial(
        object.recipientCustomer
      );
    } else {
      message.recipientCustomer = undefined;
    }
    if (
      object.recipientBillingAddress !== undefined &&
      object.recipientBillingAddress !== null
    ) {
      message.recipientBillingAddress = BillingAddress.fromPartial(
        object.recipientBillingAddress
      );
    } else {
      message.recipientBillingAddress = undefined;
    }
    if (
      object.senderBillingAddress !== undefined &&
      object.senderBillingAddress !== null
    ) {
      message.senderBillingAddress = BillingAddress.fromPartial(
        object.senderBillingAddress
      );
    } else {
      message.senderBillingAddress = undefined;
    }
    if (
      object.recipientOrganization !== undefined &&
      object.recipientOrganization !== null
    ) {
      message.recipientOrganization = Organization.fromPartial(
        object.recipientOrganization
      );
    } else {
      message.recipientOrganization = undefined;
    }
    if (
      object.senderOrganization !== undefined &&
      object.senderOrganization !== null
    ) {
      message.senderOrganization = Organization.fromPartial(
        object.senderOrganization
      );
    } else {
      message.senderOrganization = undefined;
    }
    if (
      object.paymentMethodDetails !== undefined &&
      object.paymentMethodDetails !== null
    ) {
      message.paymentMethodDetails = Any.fromPartial(
        object.paymentMethodDetails
      );
    } else {
      message.paymentMethodDetails = undefined;
    }
    return message;
  },

  toJSON(message: InvoicePositions): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.invoicePositions) {
      obj.invoicePositions = message.invoicePositions.map((e) =>
        e ? InvoicePosition.toJSON(e) : undefined
      );
    } else {
      obj.invoicePositions = [];
    }
    message.recipientCustomer !== undefined &&
      (obj.recipientCustomer = message.recipientCustomer
        ? RecipientCustomer.toJSON(message.recipientCustomer)
        : undefined);
    message.recipientBillingAddress !== undefined &&
      (obj.recipientBillingAddress = message.recipientBillingAddress
        ? BillingAddress.toJSON(message.recipientBillingAddress)
        : undefined);
    message.senderBillingAddress !== undefined &&
      (obj.senderBillingAddress = message.senderBillingAddress
        ? BillingAddress.toJSON(message.senderBillingAddress)
        : undefined);
    message.recipientOrganization !== undefined &&
      (obj.recipientOrganization = message.recipientOrganization
        ? Organization.toJSON(message.recipientOrganization)
        : undefined);
    message.senderOrganization !== undefined &&
      (obj.senderOrganization = message.senderOrganization
        ? Organization.toJSON(message.senderOrganization)
        : undefined);
    message.paymentMethodDetails !== undefined &&
      (obj.paymentMethodDetails = message.paymentMethodDetails
        ? Any.toJSON(message.paymentMethodDetails)
        : undefined);
    return obj;
  },
};

const baseRecipientCustomer: object = { id: "", customerNumber: "" };

export const RecipientCustomer = {
  encode(message: RecipientCustomer, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    writer.uint32(18).string(message.customerNumber);
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): RecipientCustomer {
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
    message.customerNumber !== undefined &&
      (obj.customerNumber = message.customerNumber);
    return obj;
  },
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

  decode(input: Reader | Uint8Array, length?: number): BillingAddress {
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
    message.buildingNumber !== undefined &&
      (obj.buildingNumber = message.buildingNumber);
    message.postcode !== undefined && (obj.postcode = message.postcode);
    message.region !== undefined && (obj.region = message.region);
    message.countryName !== undefined &&
      (obj.countryName = message.countryName);
    message.telephone !== undefined && (obj.telephone = message.telephone);
    message.timezone !== undefined && (obj.timezone = message.timezone);
    message.economicArea !== undefined &&
      (obj.economicArea = message.economicArea);
    return obj;
  },
};

const baseInvoicePosition: object = { currency: "" };

export const InvoicePosition = {
  encode(message: InvoicePosition, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.currency);
    for (const v of message.tableList) {
      InvoiceRow.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.totalPrice !== undefined && message.totalPrice !== undefined) {
      InvoicePrice.encode(
        message.totalPrice,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): InvoicePosition {
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
      obj.tableList = message.tableList.map((e) =>
        e ? InvoiceRow.toJSON(e) : undefined
      );
    } else {
      obj.tableList = [];
    }
    message.totalPrice !== undefined &&
      (obj.totalPrice = message.totalPrice
        ? InvoicePrice.toJSON(message.totalPrice)
        : undefined);
    return obj;
  },
};

const baseInvoiceRow: object = {
  product: "",
  pricePerUnit: 0,
  quantity: 0,
  vat: "",
  amount: 0,
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

  decode(input: Reader | Uint8Array, length?: number): InvoiceRow {
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
    message.pricePerUnit !== undefined &&
      (obj.pricePerUnit = message.pricePerUnit);
    message.quantity !== undefined && (obj.quantity = message.quantity);
    message.vat !== undefined && (obj.vat = message.vat);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
};

const baseInvoicePrice: object = { gross: 0, net: 0 };

export const InvoicePrice = {
  encode(message: InvoicePrice, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint32(message.gross);
    writer.uint32(16).uint32(message.net);
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): InvoicePrice {
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

const baseTriggerInvoices: object = { ids: "" };

export const TriggerInvoices = {
  encode(message: TriggerInvoices, writer: Writer = Writer.create()): Writer {
    for (const v of message.ids) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TriggerInvoices {
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
      obj.ids = message.ids.map((e) => e);
    } else {
      obj.ids = [];
    }
    return obj;
  },
};

/** Microservice definition. */
export interface Service {
  Read(request: ReadRequest): Promise<InvoiceList>;
  Create(request: InvoiceList): Promise<InvoiceList>;
  Delete(request: DeleteRequest): Promise<Empty>;
  Update(request: InvoiceList): Promise<InvoiceList>;
  Upsert(request: InvoiceList): Promise<InvoiceList>;
}

export interface ProtoMetadata {
  fileDescriptor: IFileDescriptorProto;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: {
    dependency: [
      "io/restorecommerce/resource_base.proto",
      "google/protobuf/empty.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/organization.proto",
      "io/restorecommerce/auth.proto",
      "google/protobuf/any.proto",
    ],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        name: "Deleted",
        field: [
          {
            name: "id",
            number: 1,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "id",
          },
        ],
      },
      {
        name: "InvoiceList",
        field: [
          {
            name: "items",
            number: 1,
            label: "LABEL_REPEATED",
            type: "TYPE_MESSAGE",
            typeName: ".io.restorecommerce.invoice.Invoice",
            jsonName: "items",
          },
          {
            name: "total_count",
            number: 2,
            label: "LABEL_OPTIONAL",
            type: "TYPE_UINT32",
            jsonName: "totalCount",
          },
          {
            name: "subject",
            number: 3,
            label: "LABEL_OPTIONAL",
            type: "TYPE_MESSAGE",
            typeName: ".io.restorecommerce.auth.Subject",
            jsonName: "subject",
          },
        ],
      },
      {
        name: "Invoice",
        field: [
          {
            name: "id",
            number: 1,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "id",
          },
          {
            name: "meta",
            number: 2,
            label: "LABEL_OPTIONAL",
            type: "TYPE_MESSAGE",
            typeName: ".io.restorecommerce.meta.Meta",
            jsonName: "meta",
          },
          {
            name: "timestamp",
            number: 4,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "timestamp",
          },
          {
            name: "customer_id",
            number: 5,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "customerId",
          },
          {
            name: "payment_status",
            number: 6,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "paymentStatus",
          },
          {
            name: "total_amount",
            number: 7,
            label: "LABEL_OPTIONAL",
            type: "TYPE_DOUBLE",
            jsonName: "totalAmount",
          },
          {
            name: "net_amount",
            number: 8,
            label: "LABEL_OPTIONAL",
            type: "TYPE_DOUBLE",
            jsonName: "netAmount",
          },
          {
            name: "vat_amount",
            number: 9,
            label: "LABEL_OPTIONAL",
            type: "TYPE_DOUBLE",
            jsonName: "vatAmount",
          },
          {
            name: "document",
            number: 10,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "document",
          },
          {
            name: "invoice_number",
            number: 11,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "invoiceNumber",
          },
          {
            name: "customer_remark",
            number: 12,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "customerRemark",
          },
        ],
      },
      {
        name: "InvoicesPositionsData",
        field: [
          {
            name: "invoices_positions_data",
            number: 1,
            label: "LABEL_REPEATED",
            type: "TYPE_MESSAGE",
            typeName: ".io.restorecommerce.invoice.InvoicePositions",
            jsonName: "invoicesPositionsData",
          },
        ],
      },
      {
        name: "InvoicePositions",
        field: [
          {
            name: "id",
            number: 1,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "id",
          },
          {
            name: "invoice_positions",
            number: 2,
            label: "LABEL_REPEATED",
            type: "TYPE_MESSAGE",
            typeName: ".io.restorecommerce.invoice.InvoicePosition",
            jsonName: "invoicePositions",
          },
          {
            name: "recipient_customer",
            number: 3,
            label: "LABEL_OPTIONAL",
            type: "TYPE_MESSAGE",
            typeName: ".io.restorecommerce.invoice.RecipientCustomer",
            jsonName: "recipientCustomer",
          },
          {
            name: "recipient_billing_address",
            number: 4,
            label: "LABEL_OPTIONAL",
            type: "TYPE_MESSAGE",
            typeName: ".io.restorecommerce.invoice.BillingAddress",
            jsonName: "recipientBillingAddress",
          },
          {
            name: "sender_billing_address",
            number: 5,
            label: "LABEL_OPTIONAL",
            type: "TYPE_MESSAGE",
            typeName: ".io.restorecommerce.invoice.BillingAddress",
            jsonName: "senderBillingAddress",
          },
          {
            name: "recipient_organization",
            number: 6,
            label: "LABEL_OPTIONAL",
            type: "TYPE_MESSAGE",
            typeName: ".io.restorecommerce.organization.Organization",
            jsonName: "recipientOrganization",
          },
          {
            name: "sender_organization",
            number: 7,
            label: "LABEL_OPTIONAL",
            type: "TYPE_MESSAGE",
            typeName: ".io.restorecommerce.organization.Organization",
            jsonName: "senderOrganization",
          },
          {
            name: "payment_method_details",
            number: 8,
            label: "LABEL_OPTIONAL",
            type: "TYPE_MESSAGE",
            typeName: ".google.protobuf.Any",
            jsonName: "paymentMethodDetails",
          },
        ],
      },
      {
        name: "RecipientCustomer",
        field: [
          {
            name: "id",
            number: 1,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "id",
          },
          {
            name: "customer_number",
            number: 2,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "customerNumber",
          },
        ],
      },
      {
        name: "BillingAddress",
        field: [
          {
            name: "email",
            number: 1,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "email",
          },
          {
            name: "website",
            number: 2,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "website",
          },
          {
            name: "street",
            number: 3,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "street",
          },
          {
            name: "building_number",
            number: 4,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "buildingNumber",
          },
          {
            name: "postcode",
            number: 5,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "postcode",
          },
          {
            name: "region",
            number: 6,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "region",
          },
          {
            name: "country_name",
            number: 7,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "countryName",
          },
          {
            name: "telephone",
            number: 9,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "telephone",
          },
          {
            name: "timezone",
            number: 10,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "timezone",
          },
          {
            name: "economic_area",
            number: 11,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "economicArea",
          },
        ],
      },
      {
        name: "InvoicePosition",
        field: [
          {
            name: "currency",
            number: 1,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "currency",
          },
          {
            name: "tableList",
            number: 2,
            label: "LABEL_REPEATED",
            type: "TYPE_MESSAGE",
            typeName: ".io.restorecommerce.invoice.InvoiceRow",
            jsonName: "tableList",
          },
          {
            name: "totalPrice",
            number: 3,
            label: "LABEL_OPTIONAL",
            type: "TYPE_MESSAGE",
            typeName: ".io.restorecommerce.invoice.InvoicePrice",
            jsonName: "totalPrice",
          },
        ],
      },
      {
        name: "InvoiceRow",
        field: [
          {
            name: "product",
            number: 1,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "product",
          },
          {
            name: "pricePerUnit",
            number: 2,
            label: "LABEL_OPTIONAL",
            type: "TYPE_UINT32",
            jsonName: "pricePerUnit",
          },
          {
            name: "quantity",
            number: 3,
            label: "LABEL_OPTIONAL",
            type: "TYPE_UINT32",
            jsonName: "quantity",
          },
          {
            name: "vat",
            number: 4,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "vat",
          },
          {
            name: "amount",
            number: 5,
            label: "LABEL_OPTIONAL",
            type: "TYPE_UINT32",
            jsonName: "amount",
          },
        ],
      },
      {
        name: "InvoicePrice",
        field: [
          {
            name: "gross",
            number: 1,
            label: "LABEL_OPTIONAL",
            type: "TYPE_UINT32",
            jsonName: "gross",
          },
          {
            name: "net",
            number: 2,
            label: "LABEL_OPTIONAL",
            type: "TYPE_UINT32",
            jsonName: "net",
          },
        ],
      },
      {
        name: "TriggerInvoices",
        field: [
          {
            name: "ids",
            number: 1,
            label: "LABEL_REPEATED",
            type: "TYPE_STRING",
            jsonName: "ids",
          },
        ],
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
            outputType: ".io.restorecommerce.invoice.InvoiceList",
          },
          {
            name: "Create",
            inputType: ".io.restorecommerce.invoice.InvoiceList",
            outputType: ".io.restorecommerce.invoice.InvoiceList",
          },
          {
            name: "Delete",
            inputType: ".io.restorecommerce.resourcebase.DeleteRequest",
            outputType: ".google.protobuf.Empty",
          },
          {
            name: "Update",
            inputType: ".io.restorecommerce.invoice.InvoiceList",
            outputType: ".io.restorecommerce.invoice.InvoiceList",
          },
          {
            name: "Upsert",
            inputType: ".io.restorecommerce.invoice.InvoiceList",
            outputType: ".io.restorecommerce.invoice.InvoiceList",
          },
        ],
      },
    ],
    extension: [],
    name: "io/restorecommerce/invoice.proto",
    package: "io.restorecommerce.invoice",
    sourceCodeInfo: {
      location: [
        {
          path: [6, 0],
          span: [14, 0, 20, 1],
          leadingComments: "\n Microservice definition.\n",
        },
        {
          path: [4, 1],
          span: [29, 0, 33, 1],
          leadingComments: "\n For multiple invoices\n",
        },
        {
          path: [4, 2],
          span: [38, 0, 50, 1],
          leadingComments: "\n A simple invoice.\n",
        },
        {
          path: [4, 2, 2, 7],
          span: [46, 2, 24],
          trailingComments: " difference between net and total\n",
        },
        {
          path: [4, 3],
          span: [55, 0, 57, 1],
          leadingComments: "*\n List of Invoice Positions data\n",
        },
        {
          path: [4, 4, 2, 0],
          span: [60, 2, 16],
          trailingComments: " contract or customer identifier\n",
        },
        {
          path: [4, 5, 2, 0],
          span: [71, 2, 16],
          trailingComments: " customer id - used to store the resource in DB\n",
        },
        {
          path: [4, 5, 2, 1],
          span: [72, 2, 29],
          trailingComments:
            " displayed in invoice - auto generated per customer\n",
        },
        {
          path: [4, 10, 2, 0],
          span: [108, 2, 26],
          trailingComments:
            " list of id referring to contract_ids or customer_ids\n",
        },
      ],
    },
    syntax: "proto3",
  } as any,
  references: {
    ".io.restorecommerce.invoice.Deleted": Deleted,
    ".io.restorecommerce.invoice.InvoiceList": InvoiceList,
    ".io.restorecommerce.invoice.Invoice": Invoice,
    ".io.restorecommerce.invoice.InvoicesPositionsData": InvoicesPositionsData,
    ".io.restorecommerce.invoice.InvoicePositions": InvoicePositions,
    ".io.restorecommerce.invoice.RecipientCustomer": RecipientCustomer,
    ".io.restorecommerce.invoice.BillingAddress": BillingAddress,
    ".io.restorecommerce.invoice.InvoicePosition": InvoicePosition,
    ".io.restorecommerce.invoice.InvoiceRow": InvoiceRow,
    ".io.restorecommerce.invoice.InvoicePrice": InvoicePrice,
    ".io.restorecommerce.invoice.TriggerInvoices": TriggerInvoices,
  },
  dependencies: [
    io_restorecommerce_resource_base_protoMetadata,
    google_protobuf_empty_protoMetadata,
    io_restorecommerce_meta_protoMetadata,
    io_restorecommerce_organization_protoMetadata,
    io_restorecommerce_auth_protoMetadata,
    google_protobuf_any_protoMetadata,
  ],
};

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
