/* eslint-disable */
import { FileDescriptorProto } from "ts-proto-descriptors/google/protobuf/descriptor";
import {
  Subject,
  protoMetadata as protoMetadata4,
} from "../../io/restorecommerce/auth";
import {
  OperationStatus,
  Status,
  protoMetadata as protoMetadata6,
} from "../../io/restorecommerce/status";
import {
  Meta,
  protoMetadata as protoMetadata2,
} from "../../io/restorecommerce/meta";
import {
  Organization,
  protoMetadata as protoMetadata3,
} from "../../io/restorecommerce/organization";
import {
  Any,
  protoMetadata as protoMetadata5,
} from "../../google/protobuf/any";
import {
  protoMetadata as protoMetadata1,
  DeleteResponse,
  ReadRequest,
  DeleteRequest,
} from "../../io/restorecommerce/resource_base";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "io.restorecommerce.invoice";

export interface Deleted {
  id: string;
}

/** For multiple invoices */
export interface InvoiceList {
  items: Invoice[];
  total_count: number;
  subject?: Subject;
}

export interface InvoiceListResponse {
  items: InvoiceResponse[];
  total_count: number;
  operation_status?: OperationStatus;
}

export interface InvoiceResponse {
  payload?: Invoice;
  status?: Status;
}

/** A simple invoice. */
export interface Invoice {
  id: string;
  meta?: Meta;
  timestamp: string;
  customer_id: string;
  payment_status: string;
  total_amount: number;
  net_amount: number;
  /** difference between net and total */
  vat_amount: number;
  document: string;
  invoice_number: string;
  customer_remark: string;
}

/** List of Invoice Positions data */
export interface InvoicesPositionsData {
  invoices_positions_data: InvoicePositions[];
}

export interface InvoicePositions {
  /** contract or customer identifier */
  id: string;
  invoice_positions: InvoicePosition[];
  recipient_customer?: RecipientCustomer;
  recipient_billing_address?: BillingAddress;
  sender_billing_address?: BillingAddress;
  recipient_organization?: Organization;
  sender_organization?: Organization;
  payment_method_details?: Any;
}

export interface RecipientCustomer {
  /** customer id - used to store the resource in DB */
  id: string;
  /** displayed in invoice - auto generated per customer */
  customer_number: string;
}

export interface BillingAddress {
  email: string;
  website: string;
  street: string;
  building_number: string;
  postcode: string;
  region: string;
  country_name: string;
  telephone: string;
  timezone: string;
  economic_area: string;
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

const baseInvoiceList: object = { total_count: 0 };

export const InvoiceList = {
  encode(message: InvoiceList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      Invoice.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
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
          message.total_count = reader.uint32();
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
    if (object.total_count !== undefined && object.total_count !== null) {
      message.total_count = Number(object.total_count);
    } else {
      message.total_count = 0;
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
    if (object.total_count !== undefined && object.total_count !== null) {
      message.total_count = object.total_count;
    } else {
      message.total_count = 0;
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
    message.total_count !== undefined &&
      (obj.total_count = message.total_count);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseInvoiceListResponse: object = { total_count: 0 };

export const InvoiceListResponse = {
  encode(
    message: InvoiceListResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.items) {
      InvoiceResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(
        message.operation_status,
        writer.uint32(26).fork()
      ).ldelim();
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
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(InvoiceResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.total_count = reader.uint32();
          break;
        case 3:
          message.operation_status = OperationStatus.decode(
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

  fromJSON(object: any): InvoiceListResponse {
    const message = globalThis.Object.create(
      baseInvoiceListResponse
    ) as InvoiceListResponse;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(InvoiceResponse.fromJSON(e));
      }
    }
    if (object.total_count !== undefined && object.total_count !== null) {
      message.total_count = Number(object.total_count);
    } else {
      message.total_count = 0;
    }
    if (
      object.operation_status !== undefined &&
      object.operation_status !== null
    ) {
      message.operation_status = OperationStatus.fromJSON(
        object.operation_status
      );
    } else {
      message.operation_status = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<InvoiceListResponse>): InvoiceListResponse {
    const message = { ...baseInvoiceListResponse } as InvoiceListResponse;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(InvoiceResponse.fromPartial(e));
      }
    }
    if (object.total_count !== undefined && object.total_count !== null) {
      message.total_count = object.total_count;
    } else {
      message.total_count = 0;
    }
    if (
      object.operation_status !== undefined &&
      object.operation_status !== null
    ) {
      message.operation_status = OperationStatus.fromPartial(
        object.operation_status
      );
    } else {
      message.operation_status = undefined;
    }
    return message;
  },

  toJSON(message: InvoiceListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? InvoiceResponse.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.total_count !== undefined &&
      (obj.total_count = message.total_count);
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status
        ? OperationStatus.toJSON(message.operation_status)
        : undefined);
    return obj;
  },
};

const baseInvoiceResponse: object = {};

export const InvoiceResponse = {
  encode(message: InvoiceResponse, writer: Writer = Writer.create()): Writer {
    if (message.payload !== undefined) {
      Invoice.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): InvoiceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseInvoiceResponse
    ) as InvoiceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = Invoice.decode(reader, reader.uint32());
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

  fromJSON(object: any): InvoiceResponse {
    const message = globalThis.Object.create(
      baseInvoiceResponse
    ) as InvoiceResponse;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = Invoice.fromJSON(object.payload);
    } else {
      message.payload = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromJSON(object.status);
    } else {
      message.status = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<InvoiceResponse>): InvoiceResponse {
    const message = { ...baseInvoiceResponse } as InvoiceResponse;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = Invoice.fromPartial(object.payload);
    } else {
      message.payload = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromPartial(object.status);
    } else {
      message.status = undefined;
    }
    return message;
  },

  toJSON(message: InvoiceResponse): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload
        ? Invoice.toJSON(message.payload)
        : undefined);
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },
};

const baseInvoice: object = {
  id: "",
  timestamp: "",
  customer_id: "",
  payment_status: "",
  total_amount: 0,
  net_amount: 0,
  vat_amount: 0,
  document: "",
  invoice_number: "",
  customer_remark: "",
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
    if (message.customer_id !== "") {
      writer.uint32(42).string(message.customer_id);
    }
    if (message.payment_status !== "") {
      writer.uint32(50).string(message.payment_status);
    }
    if (message.total_amount !== 0) {
      writer.uint32(57).double(message.total_amount);
    }
    if (message.net_amount !== 0) {
      writer.uint32(65).double(message.net_amount);
    }
    if (message.vat_amount !== 0) {
      writer.uint32(73).double(message.vat_amount);
    }
    if (message.document !== "") {
      writer.uint32(82).string(message.document);
    }
    if (message.invoice_number !== "") {
      writer.uint32(90).string(message.invoice_number);
    }
    if (message.customer_remark !== "") {
      writer.uint32(98).string(message.customer_remark);
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
          message.customer_id = reader.string();
          break;
        case 6:
          message.payment_status = reader.string();
          break;
        case 7:
          message.total_amount = reader.double();
          break;
        case 8:
          message.net_amount = reader.double();
          break;
        case 9:
          message.vat_amount = reader.double();
          break;
        case 10:
          message.document = reader.string();
          break;
        case 11:
          message.invoice_number = reader.string();
          break;
        case 12:
          message.customer_remark = reader.string();
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
    if (object.customer_id !== undefined && object.customer_id !== null) {
      message.customer_id = String(object.customer_id);
    } else {
      message.customer_id = "";
    }
    if (object.payment_status !== undefined && object.payment_status !== null) {
      message.payment_status = String(object.payment_status);
    } else {
      message.payment_status = "";
    }
    if (object.total_amount !== undefined && object.total_amount !== null) {
      message.total_amount = Number(object.total_amount);
    } else {
      message.total_amount = 0;
    }
    if (object.net_amount !== undefined && object.net_amount !== null) {
      message.net_amount = Number(object.net_amount);
    } else {
      message.net_amount = 0;
    }
    if (object.vat_amount !== undefined && object.vat_amount !== null) {
      message.vat_amount = Number(object.vat_amount);
    } else {
      message.vat_amount = 0;
    }
    if (object.document !== undefined && object.document !== null) {
      message.document = String(object.document);
    } else {
      message.document = "";
    }
    if (object.invoice_number !== undefined && object.invoice_number !== null) {
      message.invoice_number = String(object.invoice_number);
    } else {
      message.invoice_number = "";
    }
    if (
      object.customer_remark !== undefined &&
      object.customer_remark !== null
    ) {
      message.customer_remark = String(object.customer_remark);
    } else {
      message.customer_remark = "";
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
    if (object.customer_id !== undefined && object.customer_id !== null) {
      message.customer_id = object.customer_id;
    } else {
      message.customer_id = "";
    }
    if (object.payment_status !== undefined && object.payment_status !== null) {
      message.payment_status = object.payment_status;
    } else {
      message.payment_status = "";
    }
    if (object.total_amount !== undefined && object.total_amount !== null) {
      message.total_amount = object.total_amount;
    } else {
      message.total_amount = 0;
    }
    if (object.net_amount !== undefined && object.net_amount !== null) {
      message.net_amount = object.net_amount;
    } else {
      message.net_amount = 0;
    }
    if (object.vat_amount !== undefined && object.vat_amount !== null) {
      message.vat_amount = object.vat_amount;
    } else {
      message.vat_amount = 0;
    }
    if (object.document !== undefined && object.document !== null) {
      message.document = object.document;
    } else {
      message.document = "";
    }
    if (object.invoice_number !== undefined && object.invoice_number !== null) {
      message.invoice_number = object.invoice_number;
    } else {
      message.invoice_number = "";
    }
    if (
      object.customer_remark !== undefined &&
      object.customer_remark !== null
    ) {
      message.customer_remark = object.customer_remark;
    } else {
      message.customer_remark = "";
    }
    return message;
  },

  toJSON(message: Invoice): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.customer_id !== undefined &&
      (obj.customer_id = message.customer_id);
    message.payment_status !== undefined &&
      (obj.payment_status = message.payment_status);
    message.total_amount !== undefined &&
      (obj.total_amount = message.total_amount);
    message.net_amount !== undefined && (obj.net_amount = message.net_amount);
    message.vat_amount !== undefined && (obj.vat_amount = message.vat_amount);
    message.document !== undefined && (obj.document = message.document);
    message.invoice_number !== undefined &&
      (obj.invoice_number = message.invoice_number);
    message.customer_remark !== undefined &&
      (obj.customer_remark = message.customer_remark);
    return obj;
  },
};

const baseInvoicesPositionsData: object = {};

export const InvoicesPositionsData = {
  encode(
    message: InvoicesPositionsData,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.invoices_positions_data) {
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
    message.invoices_positions_data = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.invoices_positions_data.push(
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
    message.invoices_positions_data = [];
    if (
      object.invoices_positions_data !== undefined &&
      object.invoices_positions_data !== null
    ) {
      for (const e of object.invoices_positions_data) {
        message.invoices_positions_data.push(InvoicePositions.fromJSON(e));
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<InvoicesPositionsData>
  ): InvoicesPositionsData {
    const message = { ...baseInvoicesPositionsData } as InvoicesPositionsData;
    message.invoices_positions_data = [];
    if (
      object.invoices_positions_data !== undefined &&
      object.invoices_positions_data !== null
    ) {
      for (const e of object.invoices_positions_data) {
        message.invoices_positions_data.push(InvoicePositions.fromPartial(e));
      }
    }
    return message;
  },

  toJSON(message: InvoicesPositionsData): unknown {
    const obj: any = {};
    if (message.invoices_positions_data) {
      obj.invoices_positions_data = message.invoices_positions_data.map((e) =>
        e ? InvoicePositions.toJSON(e) : undefined
      );
    } else {
      obj.invoices_positions_data = [];
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
    for (const v of message.invoice_positions) {
      InvoicePosition.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.recipient_customer !== undefined) {
      RecipientCustomer.encode(
        message.recipient_customer,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.recipient_billing_address !== undefined) {
      BillingAddress.encode(
        message.recipient_billing_address,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.sender_billing_address !== undefined) {
      BillingAddress.encode(
        message.sender_billing_address,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.recipient_organization !== undefined) {
      Organization.encode(
        message.recipient_organization,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.sender_organization !== undefined) {
      Organization.encode(
        message.sender_organization,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.payment_method_details !== undefined) {
      Any.encode(
        message.payment_method_details,
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
    message.invoice_positions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.invoice_positions.push(
            InvoicePosition.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.recipient_customer = RecipientCustomer.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.recipient_billing_address = BillingAddress.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.sender_billing_address = BillingAddress.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.recipient_organization = Organization.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.sender_organization = Organization.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.payment_method_details = Any.decode(reader, reader.uint32());
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
    message.invoice_positions = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (
      object.invoice_positions !== undefined &&
      object.invoice_positions !== null
    ) {
      for (const e of object.invoice_positions) {
        message.invoice_positions.push(InvoicePosition.fromJSON(e));
      }
    }
    if (
      object.recipient_customer !== undefined &&
      object.recipient_customer !== null
    ) {
      message.recipient_customer = RecipientCustomer.fromJSON(
        object.recipient_customer
      );
    } else {
      message.recipient_customer = undefined;
    }
    if (
      object.recipient_billing_address !== undefined &&
      object.recipient_billing_address !== null
    ) {
      message.recipient_billing_address = BillingAddress.fromJSON(
        object.recipient_billing_address
      );
    } else {
      message.recipient_billing_address = undefined;
    }
    if (
      object.sender_billing_address !== undefined &&
      object.sender_billing_address !== null
    ) {
      message.sender_billing_address = BillingAddress.fromJSON(
        object.sender_billing_address
      );
    } else {
      message.sender_billing_address = undefined;
    }
    if (
      object.recipient_organization !== undefined &&
      object.recipient_organization !== null
    ) {
      message.recipient_organization = Organization.fromJSON(
        object.recipient_organization
      );
    } else {
      message.recipient_organization = undefined;
    }
    if (
      object.sender_organization !== undefined &&
      object.sender_organization !== null
    ) {
      message.sender_organization = Organization.fromJSON(
        object.sender_organization
      );
    } else {
      message.sender_organization = undefined;
    }
    if (
      object.payment_method_details !== undefined &&
      object.payment_method_details !== null
    ) {
      message.payment_method_details = Any.fromJSON(
        object.payment_method_details
      );
    } else {
      message.payment_method_details = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<InvoicePositions>): InvoicePositions {
    const message = { ...baseInvoicePositions } as InvoicePositions;
    message.invoice_positions = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (
      object.invoice_positions !== undefined &&
      object.invoice_positions !== null
    ) {
      for (const e of object.invoice_positions) {
        message.invoice_positions.push(InvoicePosition.fromPartial(e));
      }
    }
    if (
      object.recipient_customer !== undefined &&
      object.recipient_customer !== null
    ) {
      message.recipient_customer = RecipientCustomer.fromPartial(
        object.recipient_customer
      );
    } else {
      message.recipient_customer = undefined;
    }
    if (
      object.recipient_billing_address !== undefined &&
      object.recipient_billing_address !== null
    ) {
      message.recipient_billing_address = BillingAddress.fromPartial(
        object.recipient_billing_address
      );
    } else {
      message.recipient_billing_address = undefined;
    }
    if (
      object.sender_billing_address !== undefined &&
      object.sender_billing_address !== null
    ) {
      message.sender_billing_address = BillingAddress.fromPartial(
        object.sender_billing_address
      );
    } else {
      message.sender_billing_address = undefined;
    }
    if (
      object.recipient_organization !== undefined &&
      object.recipient_organization !== null
    ) {
      message.recipient_organization = Organization.fromPartial(
        object.recipient_organization
      );
    } else {
      message.recipient_organization = undefined;
    }
    if (
      object.sender_organization !== undefined &&
      object.sender_organization !== null
    ) {
      message.sender_organization = Organization.fromPartial(
        object.sender_organization
      );
    } else {
      message.sender_organization = undefined;
    }
    if (
      object.payment_method_details !== undefined &&
      object.payment_method_details !== null
    ) {
      message.payment_method_details = Any.fromPartial(
        object.payment_method_details
      );
    } else {
      message.payment_method_details = undefined;
    }
    return message;
  },

  toJSON(message: InvoicePositions): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.invoice_positions) {
      obj.invoice_positions = message.invoice_positions.map((e) =>
        e ? InvoicePosition.toJSON(e) : undefined
      );
    } else {
      obj.invoice_positions = [];
    }
    message.recipient_customer !== undefined &&
      (obj.recipient_customer = message.recipient_customer
        ? RecipientCustomer.toJSON(message.recipient_customer)
        : undefined);
    message.recipient_billing_address !== undefined &&
      (obj.recipient_billing_address = message.recipient_billing_address
        ? BillingAddress.toJSON(message.recipient_billing_address)
        : undefined);
    message.sender_billing_address !== undefined &&
      (obj.sender_billing_address = message.sender_billing_address
        ? BillingAddress.toJSON(message.sender_billing_address)
        : undefined);
    message.recipient_organization !== undefined &&
      (obj.recipient_organization = message.recipient_organization
        ? Organization.toJSON(message.recipient_organization)
        : undefined);
    message.sender_organization !== undefined &&
      (obj.sender_organization = message.sender_organization
        ? Organization.toJSON(message.sender_organization)
        : undefined);
    message.payment_method_details !== undefined &&
      (obj.payment_method_details = message.payment_method_details
        ? Any.toJSON(message.payment_method_details)
        : undefined);
    return obj;
  },
};

const baseRecipientCustomer: object = { id: "", customer_number: "" };

export const RecipientCustomer = {
  encode(message: RecipientCustomer, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.customer_number !== "") {
      writer.uint32(18).string(message.customer_number);
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
          message.customer_number = reader.string();
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
    if (
      object.customer_number !== undefined &&
      object.customer_number !== null
    ) {
      message.customer_number = String(object.customer_number);
    } else {
      message.customer_number = "";
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
    if (
      object.customer_number !== undefined &&
      object.customer_number !== null
    ) {
      message.customer_number = object.customer_number;
    } else {
      message.customer_number = "";
    }
    return message;
  },

  toJSON(message: RecipientCustomer): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.customer_number !== undefined &&
      (obj.customer_number = message.customer_number);
    return obj;
  },
};

const baseBillingAddress: object = {
  email: "",
  website: "",
  street: "",
  building_number: "",
  postcode: "",
  region: "",
  country_name: "",
  telephone: "",
  timezone: "",
  economic_area: "",
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
    if (message.building_number !== "") {
      writer.uint32(34).string(message.building_number);
    }
    if (message.postcode !== "") {
      writer.uint32(42).string(message.postcode);
    }
    if (message.region !== "") {
      writer.uint32(50).string(message.region);
    }
    if (message.country_name !== "") {
      writer.uint32(58).string(message.country_name);
    }
    if (message.telephone !== "") {
      writer.uint32(74).string(message.telephone);
    }
    if (message.timezone !== "") {
      writer.uint32(82).string(message.timezone);
    }
    if (message.economic_area !== "") {
      writer.uint32(90).string(message.economic_area);
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
          message.building_number = reader.string();
          break;
        case 5:
          message.postcode = reader.string();
          break;
        case 6:
          message.region = reader.string();
          break;
        case 7:
          message.country_name = reader.string();
          break;
        case 9:
          message.telephone = reader.string();
          break;
        case 10:
          message.timezone = reader.string();
          break;
        case 11:
          message.economic_area = reader.string();
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
    if (
      object.building_number !== undefined &&
      object.building_number !== null
    ) {
      message.building_number = String(object.building_number);
    } else {
      message.building_number = "";
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
    if (object.country_name !== undefined && object.country_name !== null) {
      message.country_name = String(object.country_name);
    } else {
      message.country_name = "";
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
    if (object.economic_area !== undefined && object.economic_area !== null) {
      message.economic_area = String(object.economic_area);
    } else {
      message.economic_area = "";
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
    if (
      object.building_number !== undefined &&
      object.building_number !== null
    ) {
      message.building_number = object.building_number;
    } else {
      message.building_number = "";
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
    if (object.country_name !== undefined && object.country_name !== null) {
      message.country_name = object.country_name;
    } else {
      message.country_name = "";
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
    if (object.economic_area !== undefined && object.economic_area !== null) {
      message.economic_area = object.economic_area;
    } else {
      message.economic_area = "";
    }
    return message;
  },

  toJSON(message: BillingAddress): unknown {
    const obj: any = {};
    message.email !== undefined && (obj.email = message.email);
    message.website !== undefined && (obj.website = message.website);
    message.street !== undefined && (obj.street = message.street);
    message.building_number !== undefined &&
      (obj.building_number = message.building_number);
    message.postcode !== undefined && (obj.postcode = message.postcode);
    message.region !== undefined && (obj.region = message.region);
    message.country_name !== undefined &&
      (obj.country_name = message.country_name);
    message.telephone !== undefined && (obj.telephone = message.telephone);
    message.timezone !== undefined && (obj.timezone = message.timezone);
    message.economic_area !== undefined &&
      (obj.economic_area = message.economic_area);
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
  Read(request: ReadRequest): Promise<InvoiceListResponse>;
  Create(request: InvoiceList): Promise<InvoiceListResponse>;
  Delete(request: DeleteRequest): Promise<DeleteResponse>;
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
            typeName: ".io.restorecommerce.invoice.InvoiceResponse",
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
            name: "operation_status",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.OperationStatus",
            jsonName: "operationStatus",
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
            name: "payload",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.invoice.Invoice",
            jsonName: "payload",
          },
          {
            name: "status",
            number: 2,
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
        name: "InvoiceResponse",
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
            outputType: ".io.restorecommerce.invoice.InvoiceListResponse",
          },
          {
            name: "Create",
            inputType: ".io.restorecommerce.invoice.InvoiceList",
            outputType: ".io.restorecommerce.invoice.InvoiceListResponse",
          },
          {
            name: "Delete",
            inputType: ".io.restorecommerce.resourcebase.DeleteRequest",
            outputType: ".io.restorecommerce.resourcebase.DeleteResponse",
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
          span: [14, 0, 20, 1],
          leadingDetachedComments: [],
          leadingComments: "\n Microservice definition.\n",
        },
        {
          path: [4, 1],
          span: [29, 0, 33, 1],
          leadingDetachedComments: [],
          leadingComments: "\n For multiple invoices\n",
        },
        {
          path: [4, 4],
          span: [49, 0, 61, 1],
          leadingDetachedComments: [],
          leadingComments: "\n A simple invoice.\n",
        },
        {
          path: [4, 4, 2, 7],
          span: [57, 2, 24],
          leadingDetachedComments: [],
          trailingComments: " difference between net and total\n",
        },
        {
          path: [4, 5],
          span: [66, 0, 68, 1],
          leadingDetachedComments: [],
          leadingComments: "*\n List of Invoice Positions data\n",
        },
        {
          path: [4, 6, 2, 0],
          span: [71, 2, 16],
          leadingDetachedComments: [],
          trailingComments: " contract or customer identifier\n",
        },
        {
          path: [4, 7, 2, 0],
          span: [82, 2, 16],
          leadingDetachedComments: [],
          trailingComments: " customer id - used to store the resource in DB\n",
        },
        {
          path: [4, 7, 2, 1],
          span: [83, 2, 29],
          leadingDetachedComments: [],
          trailingComments:
            " displayed in invoice - auto generated per customer\n",
        },
        {
          path: [4, 12, 2, 0],
          span: [119, 2, 26],
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
    ".io.restorecommerce.invoice.InvoiceResponse": InvoiceResponse,
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
