/* eslint-disable */
import { FileDescriptorProto } from "ts-proto-descriptors/google/protobuf/descriptor";
import {
  Subject,
  protoMetadata as protoMetadata5,
} from "../../io/restorecommerce/auth";
import {
  Status,
  protoMetadata as protoMetadata7,
  StatusArray,
} from "../../io/restorecommerce/status";
import {
  Meta,
  protoMetadata as protoMetadata3,
} from "../../io/restorecommerce/meta";
import {
  Organization,
  protoMetadata as protoMetadata4,
} from "../../io/restorecommerce/organization";
import {
  Any,
  protoMetadata as protoMetadata6,
} from "../../google/protobuf/any";
import {
  protoMetadata as protoMetadata1,
  ReadRequest,
  DeleteRequest,
} from "../../io/restorecommerce/resource_base";
import { protoMetadata as protoMetadata2 } from "../../google/protobuf/empty";
import { Writer, Reader } from "protobufjs/minimal";

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

export interface InvoiceListResponse {
  items: Invoice[];
  totalCount: number;
  status: Status[];
}

export interface InvoiceListReadResponse {
  items: Invoice[];
  totalCount: number;
  status?: Status;
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
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Deleted {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseDeleted) as Deleted;
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
    const message = globalThis.Object.create(baseDeleted) as Deleted;
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
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): InvoiceList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseInvoiceList) as InvoiceList;
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
    const message = globalThis.Object.create(baseInvoiceList) as InvoiceList;
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

const baseInvoiceListResponse: object = { totalCount: 0 };

export const InvoiceListResponse = {
  encode(
    message: InvoiceListResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.items) {
      Invoice.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    for (const v of message.status) {
      Status.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): InvoiceListResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseInvoiceListResponse
    ) as InvoiceListResponse;
    message.items = [];
    message.status = [];
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
          message.status.push(Status.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InvoiceListResponse {
    const message = globalThis.Object.create(
      baseInvoiceListResponse
    ) as InvoiceListResponse;
    message.items = [];
    message.status = [];
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
    if (object.status !== undefined && object.status !== null) {
      for (const e of object.status) {
        message.status.push(Status.fromJSON(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<InvoiceListResponse>): InvoiceListResponse {
    const message = { ...baseInvoiceListResponse } as InvoiceListResponse;
    message.items = [];
    message.status = [];
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
    if (object.status !== undefined && object.status !== null) {
      for (const e of object.status) {
        message.status.push(Status.fromPartial(e));
      }
    }
    return message;
  },

  toJSON(message: InvoiceListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => (e ? Invoice.toJSON(e) : undefined));
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    if (message.status) {
      obj.status = message.status.map((e) =>
        e ? Status.toJSON(e) : undefined
      );
    } else {
      obj.status = [];
    }
    return obj;
  },
};

const baseInvoiceListReadResponse: object = { totalCount: 0 };

export const InvoiceListReadResponse = {
  encode(
    message: InvoiceListReadResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.items) {
      Invoice.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): InvoiceListReadResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseInvoiceListReadResponse
    ) as InvoiceListReadResponse;
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
          message.status = Status.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InvoiceListReadResponse {
    const message = globalThis.Object.create(
      baseInvoiceListReadResponse
    ) as InvoiceListReadResponse;
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
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromJSON(object.status);
    } else {
      message.status = undefined;
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<InvoiceListReadResponse>
  ): InvoiceListReadResponse {
    const message = {
      ...baseInvoiceListReadResponse,
    } as InvoiceListReadResponse;
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
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromPartial(object.status);
    } else {
      message.status = undefined;
    }
    return message;
  },

  toJSON(message: InvoiceListReadResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => (e ? Invoice.toJSON(e) : undefined));
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
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
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    if (message.timestamp !== "") {
      writer.uint32(34).string(message.timestamp);
    }
    if (message.customerId !== "") {
      writer.uint32(42).string(message.customerId);
    }
    if (message.paymentStatus !== "") {
      writer.uint32(50).string(message.paymentStatus);
    }
    if (message.totalAmount !== 0) {
      writer.uint32(57).double(message.totalAmount);
    }
    if (message.netAmount !== 0) {
      writer.uint32(65).double(message.netAmount);
    }
    if (message.vatAmount !== 0) {
      writer.uint32(73).double(message.vatAmount);
    }
    if (message.document !== "") {
      writer.uint32(82).string(message.document);
    }
    if (message.invoiceNumber !== "") {
      writer.uint32(90).string(message.invoiceNumber);
    }
    if (message.customerRemark !== "") {
      writer.uint32(98).string(message.customerRemark);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Invoice {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseInvoice) as Invoice;
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
    const message = globalThis.Object.create(baseInvoice) as Invoice;
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
    const message = globalThis.Object.create(
      baseInvoicesPositionsData
    ) as InvoicesPositionsData;
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
    const message = globalThis.Object.create(
      baseInvoicesPositionsData
    ) as InvoicesPositionsData;
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
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.invoicePositions) {
      InvoicePosition.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.recipientCustomer !== undefined) {
      RecipientCustomer.encode(
        message.recipientCustomer,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.recipientBillingAddress !== undefined) {
      BillingAddress.encode(
        message.recipientBillingAddress,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.senderBillingAddress !== undefined) {
      BillingAddress.encode(
        message.senderBillingAddress,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.recipientOrganization !== undefined) {
      Organization.encode(
        message.recipientOrganization,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.senderOrganization !== undefined) {
      Organization.encode(
        message.senderOrganization,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.paymentMethodDetails !== undefined) {
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
    const message = globalThis.Object.create(
      baseInvoicePositions
    ) as InvoicePositions;
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
    const message = globalThis.Object.create(
      baseInvoicePositions
    ) as InvoicePositions;
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
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.customerNumber !== "") {
      writer.uint32(18).string(message.customerNumber);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): RecipientCustomer {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseRecipientCustomer
    ) as RecipientCustomer;
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
    const message = globalThis.Object.create(
      baseRecipientCustomer
    ) as RecipientCustomer;
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
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.website !== "") {
      writer.uint32(18).string(message.website);
    }
    if (message.street !== "") {
      writer.uint32(26).string(message.street);
    }
    if (message.buildingNumber !== "") {
      writer.uint32(34).string(message.buildingNumber);
    }
    if (message.postcode !== "") {
      writer.uint32(42).string(message.postcode);
    }
    if (message.region !== "") {
      writer.uint32(50).string(message.region);
    }
    if (message.countryName !== "") {
      writer.uint32(58).string(message.countryName);
    }
    if (message.telephone !== "") {
      writer.uint32(74).string(message.telephone);
    }
    if (message.timezone !== "") {
      writer.uint32(82).string(message.timezone);
    }
    if (message.economicArea !== "") {
      writer.uint32(90).string(message.economicArea);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): BillingAddress {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseBillingAddress
    ) as BillingAddress;
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
    const message = globalThis.Object.create(
      baseBillingAddress
    ) as BillingAddress;
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
    if (message.currency !== "") {
      writer.uint32(10).string(message.currency);
    }
    for (const v of message.tableList) {
      InvoiceRow.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.totalPrice !== undefined) {
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
    const message = globalThis.Object.create(
      baseInvoicePosition
    ) as InvoicePosition;
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
    const message = globalThis.Object.create(
      baseInvoicePosition
    ) as InvoicePosition;
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
    if (message.product !== "") {
      writer.uint32(10).string(message.product);
    }
    if (message.pricePerUnit !== 0) {
      writer.uint32(16).uint32(message.pricePerUnit);
    }
    if (message.quantity !== 0) {
      writer.uint32(24).uint32(message.quantity);
    }
    if (message.vat !== "") {
      writer.uint32(34).string(message.vat);
    }
    if (message.amount !== 0) {
      writer.uint32(40).uint32(message.amount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): InvoiceRow {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseInvoiceRow) as InvoiceRow;
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
    const message = globalThis.Object.create(baseInvoiceRow) as InvoiceRow;
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
    if (message.gross !== 0) {
      writer.uint32(8).uint32(message.gross);
    }
    if (message.net !== 0) {
      writer.uint32(16).uint32(message.net);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): InvoicePrice {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseInvoicePrice) as InvoicePrice;
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
    const message = globalThis.Object.create(baseInvoicePrice) as InvoicePrice;
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
    const message = globalThis.Object.create(
      baseTriggerInvoices
    ) as TriggerInvoices;
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
    const message = globalThis.Object.create(
      baseTriggerInvoices
    ) as TriggerInvoices;
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
  Read(request: ReadRequest): Promise<InvoiceListReadResponse>;
  Create(request: InvoiceList): Promise<InvoiceListResponse>;
  Delete(request: DeleteRequest): Promise<StatusArray>;
  Update(request: InvoiceList): Promise<InvoiceListResponse>;
  Upsert(request: InvoiceList): Promise<InvoiceListResponse>;
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
      "google/protobuf/empty.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/organization.proto",
      "io/restorecommerce/auth.proto",
      "google/protobuf/any.proto",
      "io/restorecommerce/status.proto",
    ],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        field: [{ name: "id", number: 1, label: 1, type: 9, jsonName: "id" }],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Deleted",
      },
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.invoice.Invoice",
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
        name: "InvoiceList",
      },
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.invoice.Invoice",
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
            name: "status",
            number: 3,
            label: 3,
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
        name: "InvoiceListResponse",
      },
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.invoice.Invoice",
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
            name: "status",
            number: 3,
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
        name: "InvoiceListReadResponse",
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
            name: "timestamp",
            number: 4,
            label: 1,
            type: 9,
            jsonName: "timestamp",
          },
          {
            name: "customer_id",
            number: 5,
            label: 1,
            type: 9,
            jsonName: "customerId",
          },
          {
            name: "payment_status",
            number: 6,
            label: 1,
            type: 9,
            jsonName: "paymentStatus",
          },
          {
            name: "total_amount",
            number: 7,
            label: 1,
            type: 1,
            jsonName: "totalAmount",
          },
          {
            name: "net_amount",
            number: 8,
            label: 1,
            type: 1,
            jsonName: "netAmount",
          },
          {
            name: "vat_amount",
            number: 9,
            label: 1,
            type: 1,
            jsonName: "vatAmount",
          },
          {
            name: "document",
            number: 10,
            label: 1,
            type: 9,
            jsonName: "document",
          },
          {
            name: "invoice_number",
            number: 11,
            label: 1,
            type: 9,
            jsonName: "invoiceNumber",
          },
          {
            name: "customer_remark",
            number: 12,
            label: 1,
            type: 9,
            jsonName: "customerRemark",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Invoice",
      },
      {
        field: [
          {
            name: "invoices_positions_data",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.invoice.InvoicePositions",
            jsonName: "invoicesPositionsData",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "InvoicesPositionsData",
      },
      {
        field: [
          { name: "id", number: 1, label: 1, type: 9, jsonName: "id" },
          {
            name: "invoice_positions",
            number: 2,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.invoice.InvoicePosition",
            jsonName: "invoicePositions",
          },
          {
            name: "recipient_customer",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.invoice.RecipientCustomer",
            jsonName: "recipientCustomer",
          },
          {
            name: "recipient_billing_address",
            number: 4,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.invoice.BillingAddress",
            jsonName: "recipientBillingAddress",
          },
          {
            name: "sender_billing_address",
            number: 5,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.invoice.BillingAddress",
            jsonName: "senderBillingAddress",
          },
          {
            name: "recipient_organization",
            number: 6,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.organization.Organization",
            jsonName: "recipientOrganization",
          },
          {
            name: "sender_organization",
            number: 7,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.organization.Organization",
            jsonName: "senderOrganization",
          },
          {
            name: "payment_method_details",
            number: 8,
            label: 1,
            type: 11,
            typeName: ".google.protobuf.Any",
            jsonName: "paymentMethodDetails",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "InvoicePositions",
      },
      {
        field: [
          { name: "id", number: 1, label: 1, type: 9, jsonName: "id" },
          {
            name: "customer_number",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "customerNumber",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "RecipientCustomer",
      },
      {
        field: [
          { name: "email", number: 1, label: 1, type: 9, jsonName: "email" },
          {
            name: "website",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "website",
          },
          { name: "street", number: 3, label: 1, type: 9, jsonName: "street" },
          {
            name: "building_number",
            number: 4,
            label: 1,
            type: 9,
            jsonName: "buildingNumber",
          },
          {
            name: "postcode",
            number: 5,
            label: 1,
            type: 9,
            jsonName: "postcode",
          },
          { name: "region", number: 6, label: 1, type: 9, jsonName: "region" },
          {
            name: "country_name",
            number: 7,
            label: 1,
            type: 9,
            jsonName: "countryName",
          },
          {
            name: "telephone",
            number: 9,
            label: 1,
            type: 9,
            jsonName: "telephone",
          },
          {
            name: "timezone",
            number: 10,
            label: 1,
            type: 9,
            jsonName: "timezone",
          },
          {
            name: "economic_area",
            number: 11,
            label: 1,
            type: 9,
            jsonName: "economicArea",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "BillingAddress",
      },
      {
        field: [
          {
            name: "currency",
            number: 1,
            label: 1,
            type: 9,
            jsonName: "currency",
          },
          {
            name: "tableList",
            number: 2,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.invoice.InvoiceRow",
            jsonName: "tableList",
          },
          {
            name: "totalPrice",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.invoice.InvoicePrice",
            jsonName: "totalPrice",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "InvoicePosition",
      },
      {
        field: [
          {
            name: "product",
            number: 1,
            label: 1,
            type: 9,
            jsonName: "product",
          },
          {
            name: "pricePerUnit",
            number: 2,
            label: 1,
            type: 13,
            jsonName: "pricePerUnit",
          },
          {
            name: "quantity",
            number: 3,
            label: 1,
            type: 13,
            jsonName: "quantity",
          },
          { name: "vat", number: 4, label: 1, type: 9, jsonName: "vat" },
          { name: "amount", number: 5, label: 1, type: 13, jsonName: "amount" },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "InvoiceRow",
      },
      {
        field: [
          { name: "gross", number: 1, label: 1, type: 13, jsonName: "gross" },
          { name: "net", number: 2, label: 1, type: 13, jsonName: "net" },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "InvoicePrice",
      },
      {
        field: [{ name: "ids", number: 1, label: 3, type: 9, jsonName: "ids" }],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "TriggerInvoices",
      },
    ],
    enumType: [],
    service: [
      {
        method: [
          {
            name: "Read",
            inputType: ".io.restorecommerce.resourcebase.ReadRequest",
            outputType: ".io.restorecommerce.invoice.InvoiceListReadResponse",
          },
          {
            name: "Create",
            inputType: ".io.restorecommerce.invoice.InvoiceList",
            outputType: ".io.restorecommerce.invoice.InvoiceListResponse",
          },
          {
            name: "Delete",
            inputType: ".io.restorecommerce.resourcebase.DeleteRequest",
            outputType: ".io.restorecommerce.status.StatusArray",
          },
          {
            name: "Update",
            inputType: ".io.restorecommerce.invoice.InvoiceList",
            outputType: ".io.restorecommerce.invoice.InvoiceListResponse",
          },
          {
            name: "Upsert",
            inputType: ".io.restorecommerce.invoice.InvoiceList",
            outputType: ".io.restorecommerce.invoice.InvoiceListResponse",
          },
        ],
        name: "Service",
      },
    ],
    extension: [],
    name: "io/restorecommerce/invoice.proto",
    package: "io.restorecommerce.invoice",
    sourceCodeInfo: {
      location: [
        {
          path: [6, 0],
          span: [15, 0, 21, 1],
          leadingDetachedComments: [],
          leadingComments: "\n Microservice definition.\n",
        },
        {
          path: [4, 1],
          span: [30, 0, 34, 1],
          leadingDetachedComments: [],
          leadingComments: "\n For multiple invoices\n",
        },
        {
          path: [4, 4],
          span: [51, 0, 63, 1],
          leadingDetachedComments: [],
          leadingComments: "\n A simple invoice.\n",
        },
        {
          path: [4, 4, 2, 7],
          span: [59, 2, 24],
          leadingDetachedComments: [],
          trailingComments: " difference between net and total\n",
        },
        {
          path: [4, 5],
          span: [68, 0, 70, 1],
          leadingDetachedComments: [],
          leadingComments: "*\n List of Invoice Positions data\n",
        },
        {
          path: [4, 6, 2, 0],
          span: [73, 2, 16],
          leadingDetachedComments: [],
          trailingComments: " contract or customer identifier\n",
        },
        {
          path: [4, 7, 2, 0],
          span: [84, 2, 16],
          leadingDetachedComments: [],
          trailingComments: " customer id - used to store the resource in DB\n",
        },
        {
          path: [4, 7, 2, 1],
          span: [85, 2, 29],
          leadingDetachedComments: [],
          trailingComments:
            " displayed in invoice - auto generated per customer\n",
        },
        {
          path: [4, 12, 2, 0],
          span: [121, 2, 26],
          leadingDetachedComments: [],
          trailingComments:
            " list of id referring to contract_ids or customer_ids\n",
        },
      ],
    },
    syntax: "proto3",
  }),
  references: {
    ".io.restorecommerce.invoice.Deleted": Deleted,
    ".io.restorecommerce.invoice.InvoiceList": InvoiceList,
    ".io.restorecommerce.invoice.InvoiceListResponse": InvoiceListResponse,
    ".io.restorecommerce.invoice.InvoiceListReadResponse": InvoiceListReadResponse,
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
    protoMetadata1,
    protoMetadata2,
    protoMetadata3,
    protoMetadata4,
    protoMetadata5,
    protoMetadata6,
    protoMetadata7,
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
