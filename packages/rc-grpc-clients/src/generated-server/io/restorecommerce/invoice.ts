/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { Any, protoMetadata as protoMetadata1 } from "../../google/protobuf/any";
import { BillingAddress, protoMetadata as protoMetadata8 } from "./address";
import { protoMetadata as protoMetadata5, Subject } from "./auth";
import { protoMetadata as protoMetadata11 } from "./customer";
import { Meta, protoMetadata as protoMetadata3 } from "./meta";
import { KafkaSubscription, protoMetadata as protoMetadata7, Resolver } from "./options";
import { protoMetadata as protoMetadata4 } from "./organization";
import { DeleteRequest, DeleteResponse, protoMetadata as protoMetadata2, ReadRequest } from "./resource_base";
import { protoMetadata as protoMetadata12 } from "./shop";
import { OperationStatus, protoMetadata as protoMetadata6, Status } from "./status";
import { protoMetadata as protoMetadata9, VAT } from "./tax";
import { protoMetadata as protoMetadata10 } from "./user";

export const protobufPackage = "io.restorecommerce.invoice";

export enum State {
  FAILED = "FAILED",
  INVALID = "INVALID",
  CREATED = "CREATED",
  SENT = "SENT",
  PAYED = "PAYED",
  WITHDRAWN = "WITHDRAWN",
  CANCELLED = "CANCELLED",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function stateFromJSON(object: any): State {
  switch (object) {
    case 0:
    case "FAILED":
      return State.FAILED;
    case 1:
    case "INVALID":
      return State.INVALID;
    case 2:
    case "CREATED":
      return State.CREATED;
    case 3:
    case "SENT":
      return State.SENT;
    case 4:
    case "PAYED":
      return State.PAYED;
    case 5:
    case "WITHDRAWN":
      return State.WITHDRAWN;
    case 6:
    case "CANCELLED":
      return State.CANCELLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return State.UNRECOGNIZED;
  }
}

export function stateToJSON(object: State): string {
  switch (object) {
    case State.FAILED:
      return "FAILED";
    case State.INVALID:
      return "INVALID";
    case State.CREATED:
      return "CREATED";
    case State.SENT:
      return "SENT";
    case State.PAYED:
      return "PAYED";
    case State.WITHDRAWN:
      return "WITHDRAWN";
    case State.CANCELLED:
      return "CANCELLED";
    case State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function stateToNumber(object: State): number {
  switch (object) {
    case State.FAILED:
      return 0;
    case State.INVALID:
      return 1;
    case State.CREATED:
      return 2;
    case State.SENT:
      return 3;
    case State.PAYED:
      return 4;
    case State.WITHDRAWN:
      return 5;
    case State.CANCELLED:
      return 6;
    case State.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface RequestInvoiceNumber {
  context?: Any;
  subject?: Subject;
}

export interface InvoiceNumberResponse {
  invoice_number: string;
}

export interface Deleted {
  id: string;
}

export interface InvoiceList {
  items: Invoice[];
  total_count?: number | undefined;
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

/** The Invoice recource, stored in DB. */
export interface Invoice {
  /** invoice_number */
  id?: string | undefined;
  meta?:
    | Meta
    | undefined;
  /** forigner_key: use the following pattern: `${collection}/${id}` most likly an order. */
  reference_id?: string | undefined;
  user_id?: string | undefined;
  customer_id?: string | undefined;
  shop_id?: string | undefined;
  timestamp?: number | undefined;
  state?: State | undefined;
  total_gross?: number | undefined;
  total_net?: number | undefined;
  vats: VAT[];
  /** rendered on create, update and upsert? */
  document?: string | undefined;
  recipient_billing_address?: BillingAddress | undefined;
  sender_billing_address?: BillingAddress | undefined;
  payment_method_details?: Any | undefined;
  customer_remark?: string | undefined;
}

export interface InvoicePosition {
  item_id?: string | undefined;
  currency?: string | undefined;
  invoice_rows: InvoiceRow[];
  gross?: number | undefined;
  net?: number | undefined;
  vats: VAT[];
}

export interface InvoiceRow {
  product_id?: string | undefined;
  variant_id?: string | undefined;
  price_per_unit?: number | undefined;
  quantity?: number | undefined;
  gross?: number | undefined;
  net?: number | undefined;
  vats: VAT[];
  /** if there is any contract associated with product */
  contract_start_date?: number | undefined;
}

function createBaseRequestInvoiceNumber(): RequestInvoiceNumber {
  return { context: undefined, subject: undefined };
}

export const RequestInvoiceNumber = {
  encode(message: RequestInvoiceNumber, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.context !== undefined) {
      Any.encode(message.context, writer.uint32(10).fork()).ldelim();
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestInvoiceNumber {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestInvoiceNumber();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.context = Any.decode(reader, reader.uint32());
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

  fromJSON(object: any): RequestInvoiceNumber {
    return {
      context: isSet(object.context) ? Any.fromJSON(object.context) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: RequestInvoiceNumber): unknown {
    const obj: any = {};
    message.context !== undefined && (obj.context = message.context ? Any.toJSON(message.context) : undefined);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<RequestInvoiceNumber>): RequestInvoiceNumber {
    return RequestInvoiceNumber.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RequestInvoiceNumber>): RequestInvoiceNumber {
    const message = createBaseRequestInvoiceNumber();
    message.context = (object.context !== undefined && object.context !== null)
      ? Any.fromPartial(object.context)
      : undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseInvoiceNumberResponse(): InvoiceNumberResponse {
  return { invoice_number: "" };
}

export const InvoiceNumberResponse = {
  encode(message: InvoiceNumberResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.invoice_number !== "") {
      writer.uint32(10).string(message.invoice_number);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvoiceNumberResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvoiceNumberResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.invoice_number = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InvoiceNumberResponse {
    return { invoice_number: isSet(object.invoice_number) ? String(object.invoice_number) : "" };
  },

  toJSON(message: InvoiceNumberResponse): unknown {
    const obj: any = {};
    message.invoice_number !== undefined && (obj.invoice_number = message.invoice_number);
    return obj;
  },

  create(base?: DeepPartial<InvoiceNumberResponse>): InvoiceNumberResponse {
    return InvoiceNumberResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<InvoiceNumberResponse>): InvoiceNumberResponse {
    const message = createBaseInvoiceNumberResponse();
    message.invoice_number = object.invoice_number ?? "";
    return message;
  },
};

function createBaseDeleted(): Deleted {
  return { id: "" };
}

export const Deleted = {
  encode(message: Deleted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Deleted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleted();
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
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: Deleted): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create(base?: DeepPartial<Deleted>): Deleted {
    return Deleted.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Deleted>): Deleted {
    const message = createBaseDeleted();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseInvoiceList(): InvoiceList {
  return { items: [], total_count: undefined, subject: undefined };
}

export const InvoiceList = {
  encode(message: InvoiceList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      Invoice.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== undefined) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvoiceList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvoiceList();
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
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => Invoice.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: InvoiceList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? Invoice.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<InvoiceList>): InvoiceList {
    return InvoiceList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<InvoiceList>): InvoiceList {
    const message = createBaseInvoiceList();
    message.items = object.items?.map((e) => Invoice.fromPartial(e)) || [];
    message.total_count = object.total_count ?? undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseInvoiceListResponse(): InvoiceListResponse {
  return { items: [], total_count: 0, operation_status: undefined };
}

export const InvoiceListResponse = {
  encode(message: InvoiceListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      InvoiceResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(message.operation_status, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvoiceListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvoiceListResponse();
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
          message.operation_status = OperationStatus.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InvoiceListResponse {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => InvoiceResponse.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      operation_status: isSet(object.operation_status) ? OperationStatus.fromJSON(object.operation_status) : undefined,
    };
  },

  toJSON(message: InvoiceListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? InvoiceResponse.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status ? OperationStatus.toJSON(message.operation_status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<InvoiceListResponse>): InvoiceListResponse {
    return InvoiceListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<InvoiceListResponse>): InvoiceListResponse {
    const message = createBaseInvoiceListResponse();
    message.items = object.items?.map((e) => InvoiceResponse.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.operation_status = (object.operation_status !== undefined && object.operation_status !== null)
      ? OperationStatus.fromPartial(object.operation_status)
      : undefined;
    return message;
  },
};

function createBaseInvoiceResponse(): InvoiceResponse {
  return { payload: undefined, status: undefined };
}

export const InvoiceResponse = {
  encode(message: InvoiceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      Invoice.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvoiceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvoiceResponse();
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
    return {
      payload: isSet(object.payload) ? Invoice.fromJSON(object.payload) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: InvoiceResponse): unknown {
    const obj: any = {};
    message.payload !== undefined && (obj.payload = message.payload ? Invoice.toJSON(message.payload) : undefined);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<InvoiceResponse>): InvoiceResponse {
    return InvoiceResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<InvoiceResponse>): InvoiceResponse {
    const message = createBaseInvoiceResponse();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? Invoice.fromPartial(object.payload)
      : undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBaseInvoice(): Invoice {
  return {
    id: undefined,
    meta: undefined,
    reference_id: undefined,
    user_id: undefined,
    customer_id: undefined,
    shop_id: undefined,
    timestamp: undefined,
    state: undefined,
    total_gross: undefined,
    total_net: undefined,
    vats: [],
    document: undefined,
    recipient_billing_address: undefined,
    sender_billing_address: undefined,
    payment_method_details: undefined,
    customer_remark: undefined,
  };
}

export const Invoice = {
  encode(message: Invoice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    if (message.reference_id !== undefined) {
      writer.uint32(26).string(message.reference_id);
    }
    if (message.user_id !== undefined) {
      writer.uint32(34).string(message.user_id);
    }
    if (message.customer_id !== undefined) {
      writer.uint32(42).string(message.customer_id);
    }
    if (message.shop_id !== undefined) {
      writer.uint32(50).string(message.shop_id);
    }
    if (message.timestamp !== undefined) {
      writer.uint32(57).double(message.timestamp);
    }
    if (message.state !== undefined) {
      writer.uint32(64).int32(stateToNumber(message.state));
    }
    if (message.total_gross !== undefined) {
      writer.uint32(73).double(message.total_gross);
    }
    if (message.total_net !== undefined) {
      writer.uint32(81).double(message.total_net);
    }
    for (const v of message.vats) {
      VAT.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.document !== undefined) {
      writer.uint32(98).string(message.document);
    }
    if (message.recipient_billing_address !== undefined) {
      BillingAddress.encode(message.recipient_billing_address, writer.uint32(106).fork()).ldelim();
    }
    if (message.sender_billing_address !== undefined) {
      BillingAddress.encode(message.sender_billing_address, writer.uint32(114).fork()).ldelim();
    }
    if (message.payment_method_details !== undefined) {
      Any.encode(message.payment_method_details, writer.uint32(122).fork()).ldelim();
    }
    if (message.customer_remark !== undefined) {
      writer.uint32(130).string(message.customer_remark);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Invoice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvoice();
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
          message.reference_id = reader.string();
          break;
        case 4:
          message.user_id = reader.string();
          break;
        case 5:
          message.customer_id = reader.string();
          break;
        case 6:
          message.shop_id = reader.string();
          break;
        case 7:
          message.timestamp = reader.double();
          break;
        case 8:
          message.state = stateFromJSON(reader.int32());
          break;
        case 9:
          message.total_gross = reader.double();
          break;
        case 10:
          message.total_net = reader.double();
          break;
        case 11:
          message.vats.push(VAT.decode(reader, reader.uint32()));
          break;
        case 12:
          message.document = reader.string();
          break;
        case 13:
          message.recipient_billing_address = BillingAddress.decode(reader, reader.uint32());
          break;
        case 14:
          message.sender_billing_address = BillingAddress.decode(reader, reader.uint32());
          break;
        case 15:
          message.payment_method_details = Any.decode(reader, reader.uint32());
          break;
        case 16:
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
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      reference_id: isSet(object.reference_id) ? String(object.reference_id) : undefined,
      user_id: isSet(object.user_id) ? String(object.user_id) : undefined,
      customer_id: isSet(object.customer_id) ? String(object.customer_id) : undefined,
      shop_id: isSet(object.shop_id) ? String(object.shop_id) : undefined,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : undefined,
      state: isSet(object.state) ? stateFromJSON(object.state) : undefined,
      total_gross: isSet(object.total_gross) ? Number(object.total_gross) : undefined,
      total_net: isSet(object.total_net) ? Number(object.total_net) : undefined,
      vats: Array.isArray(object?.vats) ? object.vats.map((e: any) => VAT.fromJSON(e)) : [],
      document: isSet(object.document) ? String(object.document) : undefined,
      recipient_billing_address: isSet(object.recipient_billing_address)
        ? BillingAddress.fromJSON(object.recipient_billing_address)
        : undefined,
      sender_billing_address: isSet(object.sender_billing_address)
        ? BillingAddress.fromJSON(object.sender_billing_address)
        : undefined,
      payment_method_details: isSet(object.payment_method_details)
        ? Any.fromJSON(object.payment_method_details)
        : undefined,
      customer_remark: isSet(object.customer_remark) ? String(object.customer_remark) : undefined,
    };
  },

  toJSON(message: Invoice): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.reference_id !== undefined && (obj.reference_id = message.reference_id);
    message.user_id !== undefined && (obj.user_id = message.user_id);
    message.customer_id !== undefined && (obj.customer_id = message.customer_id);
    message.shop_id !== undefined && (obj.shop_id = message.shop_id);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.state !== undefined && (obj.state = message.state !== undefined ? stateToJSON(message.state) : undefined);
    message.total_gross !== undefined && (obj.total_gross = message.total_gross);
    message.total_net !== undefined && (obj.total_net = message.total_net);
    if (message.vats) {
      obj.vats = message.vats.map((e) => e ? VAT.toJSON(e) : undefined);
    } else {
      obj.vats = [];
    }
    message.document !== undefined && (obj.document = message.document);
    message.recipient_billing_address !== undefined &&
      (obj.recipient_billing_address = message.recipient_billing_address
        ? BillingAddress.toJSON(message.recipient_billing_address)
        : undefined);
    message.sender_billing_address !== undefined && (obj.sender_billing_address = message.sender_billing_address
      ? BillingAddress.toJSON(message.sender_billing_address)
      : undefined);
    message.payment_method_details !== undefined && (obj.payment_method_details = message.payment_method_details
      ? Any.toJSON(message.payment_method_details)
      : undefined);
    message.customer_remark !== undefined && (obj.customer_remark = message.customer_remark);
    return obj;
  },

  create(base?: DeepPartial<Invoice>): Invoice {
    return Invoice.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Invoice>): Invoice {
    const message = createBaseInvoice();
    message.id = object.id ?? undefined;
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    message.reference_id = object.reference_id ?? undefined;
    message.user_id = object.user_id ?? undefined;
    message.customer_id = object.customer_id ?? undefined;
    message.shop_id = object.shop_id ?? undefined;
    message.timestamp = object.timestamp ?? undefined;
    message.state = object.state ?? undefined;
    message.total_gross = object.total_gross ?? undefined;
    message.total_net = object.total_net ?? undefined;
    message.vats = object.vats?.map((e) => VAT.fromPartial(e)) || [];
    message.document = object.document ?? undefined;
    message.recipient_billing_address =
      (object.recipient_billing_address !== undefined && object.recipient_billing_address !== null)
        ? BillingAddress.fromPartial(object.recipient_billing_address)
        : undefined;
    message.sender_billing_address =
      (object.sender_billing_address !== undefined && object.sender_billing_address !== null)
        ? BillingAddress.fromPartial(object.sender_billing_address)
        : undefined;
    message.payment_method_details =
      (object.payment_method_details !== undefined && object.payment_method_details !== null)
        ? Any.fromPartial(object.payment_method_details)
        : undefined;
    message.customer_remark = object.customer_remark ?? undefined;
    return message;
  },
};

function createBaseInvoicePosition(): InvoicePosition {
  return { item_id: undefined, currency: undefined, invoice_rows: [], gross: undefined, net: undefined, vats: [] };
}

export const InvoicePosition = {
  encode(message: InvoicePosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.item_id !== undefined) {
      writer.uint32(10).string(message.item_id);
    }
    if (message.currency !== undefined) {
      writer.uint32(18).string(message.currency);
    }
    for (const v of message.invoice_rows) {
      InvoiceRow.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.gross !== undefined) {
      writer.uint32(33).double(message.gross);
    }
    if (message.net !== undefined) {
      writer.uint32(41).double(message.net);
    }
    for (const v of message.vats) {
      VAT.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvoicePosition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvoicePosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.item_id = reader.string();
          break;
        case 2:
          message.currency = reader.string();
          break;
        case 3:
          message.invoice_rows.push(InvoiceRow.decode(reader, reader.uint32()));
          break;
        case 4:
          message.gross = reader.double();
          break;
        case 5:
          message.net = reader.double();
          break;
        case 6:
          message.vats.push(VAT.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InvoicePosition {
    return {
      item_id: isSet(object.item_id) ? String(object.item_id) : undefined,
      currency: isSet(object.currency) ? String(object.currency) : undefined,
      invoice_rows: Array.isArray(object?.invoice_rows)
        ? object.invoice_rows.map((e: any) => InvoiceRow.fromJSON(e))
        : [],
      gross: isSet(object.gross) ? Number(object.gross) : undefined,
      net: isSet(object.net) ? Number(object.net) : undefined,
      vats: Array.isArray(object?.vats) ? object.vats.map((e: any) => VAT.fromJSON(e)) : [],
    };
  },

  toJSON(message: InvoicePosition): unknown {
    const obj: any = {};
    message.item_id !== undefined && (obj.item_id = message.item_id);
    message.currency !== undefined && (obj.currency = message.currency);
    if (message.invoice_rows) {
      obj.invoice_rows = message.invoice_rows.map((e) => e ? InvoiceRow.toJSON(e) : undefined);
    } else {
      obj.invoice_rows = [];
    }
    message.gross !== undefined && (obj.gross = message.gross);
    message.net !== undefined && (obj.net = message.net);
    if (message.vats) {
      obj.vats = message.vats.map((e) => e ? VAT.toJSON(e) : undefined);
    } else {
      obj.vats = [];
    }
    return obj;
  },

  create(base?: DeepPartial<InvoicePosition>): InvoicePosition {
    return InvoicePosition.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<InvoicePosition>): InvoicePosition {
    const message = createBaseInvoicePosition();
    message.item_id = object.item_id ?? undefined;
    message.currency = object.currency ?? undefined;
    message.invoice_rows = object.invoice_rows?.map((e) => InvoiceRow.fromPartial(e)) || [];
    message.gross = object.gross ?? undefined;
    message.net = object.net ?? undefined;
    message.vats = object.vats?.map((e) => VAT.fromPartial(e)) || [];
    return message;
  },
};

function createBaseInvoiceRow(): InvoiceRow {
  return {
    product_id: undefined,
    variant_id: undefined,
    price_per_unit: undefined,
    quantity: undefined,
    gross: undefined,
    net: undefined,
    vats: [],
    contract_start_date: undefined,
  };
}

export const InvoiceRow = {
  encode(message: InvoiceRow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.product_id !== undefined) {
      writer.uint32(10).string(message.product_id);
    }
    if (message.variant_id !== undefined) {
      writer.uint32(18).string(message.variant_id);
    }
    if (message.price_per_unit !== undefined) {
      writer.uint32(25).double(message.price_per_unit);
    }
    if (message.quantity !== undefined) {
      writer.uint32(32).uint32(message.quantity);
    }
    if (message.gross !== undefined) {
      writer.uint32(49).double(message.gross);
    }
    if (message.net !== undefined) {
      writer.uint32(57).double(message.net);
    }
    for (const v of message.vats) {
      VAT.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.contract_start_date !== undefined) {
      writer.uint32(73).double(message.contract_start_date);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvoiceRow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvoiceRow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.product_id = reader.string();
          break;
        case 2:
          message.variant_id = reader.string();
          break;
        case 3:
          message.price_per_unit = reader.double();
          break;
        case 4:
          message.quantity = reader.uint32();
          break;
        case 6:
          message.gross = reader.double();
          break;
        case 7:
          message.net = reader.double();
          break;
        case 8:
          message.vats.push(VAT.decode(reader, reader.uint32()));
          break;
        case 9:
          message.contract_start_date = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InvoiceRow {
    return {
      product_id: isSet(object.product_id) ? String(object.product_id) : undefined,
      variant_id: isSet(object.variant_id) ? String(object.variant_id) : undefined,
      price_per_unit: isSet(object.price_per_unit) ? Number(object.price_per_unit) : undefined,
      quantity: isSet(object.quantity) ? Number(object.quantity) : undefined,
      gross: isSet(object.gross) ? Number(object.gross) : undefined,
      net: isSet(object.net) ? Number(object.net) : undefined,
      vats: Array.isArray(object?.vats) ? object.vats.map((e: any) => VAT.fromJSON(e)) : [],
      contract_start_date: isSet(object.contract_start_date) ? Number(object.contract_start_date) : undefined,
    };
  },

  toJSON(message: InvoiceRow): unknown {
    const obj: any = {};
    message.product_id !== undefined && (obj.product_id = message.product_id);
    message.variant_id !== undefined && (obj.variant_id = message.variant_id);
    message.price_per_unit !== undefined && (obj.price_per_unit = message.price_per_unit);
    message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
    message.gross !== undefined && (obj.gross = message.gross);
    message.net !== undefined && (obj.net = message.net);
    if (message.vats) {
      obj.vats = message.vats.map((e) => e ? VAT.toJSON(e) : undefined);
    } else {
      obj.vats = [];
    }
    message.contract_start_date !== undefined && (obj.contract_start_date = message.contract_start_date);
    return obj;
  },

  create(base?: DeepPartial<InvoiceRow>): InvoiceRow {
    return InvoiceRow.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<InvoiceRow>): InvoiceRow {
    const message = createBaseInvoiceRow();
    message.product_id = object.product_id ?? undefined;
    message.variant_id = object.variant_id ?? undefined;
    message.price_per_unit = object.price_per_unit ?? undefined;
    message.quantity = object.quantity ?? undefined;
    message.gross = object.gross ?? undefined;
    message.net = object.net ?? undefined;
    message.vats = object.vats?.map((e) => VAT.fromPartial(e)) || [];
    message.contract_start_date = object.contract_start_date ?? undefined;
    return message;
  },
};

/** Microservice definition. */
export type InvoiceServiceDefinition = typeof InvoiceServiceDefinition;
export const InvoiceServiceDefinition = {
  name: "InvoiceService",
  fullName: "io.restorecommerce.invoice.InvoiceService",
  methods: {
    read: {
      name: "Read",
      requestType: ReadRequest,
      requestStream: false,
      responseType: InvoiceListResponse,
      responseStream: false,
      options: {},
    },
    create: {
      name: "Create",
      requestType: InvoiceList,
      requestStream: false,
      responseType: InvoiceListResponse,
      responseStream: false,
      options: {},
    },
    update: {
      name: "Update",
      requestType: InvoiceList,
      requestStream: false,
      responseType: InvoiceListResponse,
      responseStream: false,
      options: {},
    },
    render: {
      name: "Render",
      requestType: InvoiceList,
      requestStream: false,
      responseType: InvoiceListResponse,
      responseStream: false,
      options: {},
    },
    upsert: {
      name: "Upsert",
      requestType: InvoiceList,
      requestStream: false,
      responseType: InvoiceListResponse,
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
    generateInvoiceNumber: {
      name: "GenerateInvoiceNumber",
      requestType: RequestInvoiceNumber,
      requestStream: false,
      responseType: InvoiceNumberResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface InvoiceServiceImplementation<CallContextExt = {}> {
  read(request: ReadRequest, context: CallContext & CallContextExt): Promise<DeepPartial<InvoiceListResponse>>;
  create(request: InvoiceList, context: CallContext & CallContextExt): Promise<DeepPartial<InvoiceListResponse>>;
  update(request: InvoiceList, context: CallContext & CallContextExt): Promise<DeepPartial<InvoiceListResponse>>;
  render(request: InvoiceList, context: CallContext & CallContextExt): Promise<DeepPartial<InvoiceListResponse>>;
  upsert(request: InvoiceList, context: CallContext & CallContextExt): Promise<DeepPartial<InvoiceListResponse>>;
  delete(request: DeleteRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteResponse>>;
  generateInvoiceNumber(
    request: RequestInvoiceNumber,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<InvoiceNumberResponse>>;
}

export interface InvoiceServiceClient<CallOptionsExt = {}> {
  read(request: DeepPartial<ReadRequest>, options?: CallOptions & CallOptionsExt): Promise<InvoiceListResponse>;
  create(request: DeepPartial<InvoiceList>, options?: CallOptions & CallOptionsExt): Promise<InvoiceListResponse>;
  update(request: DeepPartial<InvoiceList>, options?: CallOptions & CallOptionsExt): Promise<InvoiceListResponse>;
  render(request: DeepPartial<InvoiceList>, options?: CallOptions & CallOptionsExt): Promise<InvoiceListResponse>;
  upsert(request: DeepPartial<InvoiceList>, options?: CallOptions & CallOptionsExt): Promise<InvoiceListResponse>;
  delete(request: DeepPartial<DeleteRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteResponse>;
  generateInvoiceNumber(
    request: DeepPartial<RequestInvoiceNumber>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<InvoiceNumberResponse>;
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
    "name": "io/restorecommerce/invoice.proto",
    "package": "io.restorecommerce.invoice",
    "dependency": [
      "google/protobuf/any.proto",
      "io/restorecommerce/resource_base.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/organization.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/options.proto",
      "io/restorecommerce/address.proto",
      "io/restorecommerce/tax.proto",
      "io/restorecommerce/user.proto",
      "io/restorecommerce/customer.proto",
      "io/restorecommerce/shop.proto",
    ],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "RequestInvoiceNumber",
      "field": [{
        "name": "context",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.Any",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "context",
        "options": undefined,
        "proto3Optional": false,
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
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "InvoiceNumberResponse",
      "field": [{
        "name": "invoice_number",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "invoiceNumber",
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
      "name": "Deleted",
      "field": [{
        "name": "id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "id",
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
      "name": "InvoiceList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.invoice.Invoice",
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
      "name": "InvoiceListResponse",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.invoice.InvoiceResponse",
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
      "name": "InvoiceResponse",
      "field": [{
        "name": "payload",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.invoice.Invoice",
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
      "name": "Invoice",
      "field": [{
        "name": "id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
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
        "oneofIndex": 1,
        "jsonName": "meta",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "reference_id",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "referenceId",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "user_id",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
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
        "name": "customer_id",
        "number": 5,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "customerId",
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
        "name": "shop_id",
        "number": 6,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 5,
        "jsonName": "shopId",
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
        "name": "timestamp",
        "number": 7,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 6,
        "jsonName": "timestamp",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "state",
        "number": 8,
        "label": 1,
        "type": 14,
        "typeName": ".io.restorecommerce.invoice.State",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 7,
        "jsonName": "state",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "total_gross",
        "number": 9,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 8,
        "jsonName": "totalGross",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "total_net",
        "number": 10,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 9,
        "jsonName": "totalNet",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "vats",
        "number": 11,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.tax.VAT",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "vats",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "document",
        "number": 12,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 10,
        "jsonName": "document",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "recipient_billing_address",
        "number": 13,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.address.BillingAddress",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 11,
        "jsonName": "recipientBillingAddress",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "sender_billing_address",
        "number": 14,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.address.BillingAddress",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 12,
        "jsonName": "senderBillingAddress",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "payment_method_details",
        "number": 15,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.Any",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 13,
        "jsonName": "paymentMethodDetails",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "customer_remark",
        "number": 16,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 14,
        "jsonName": "customerRemark",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "_id", "options": undefined },
        { "name": "_meta", "options": undefined },
        { "name": "_reference_id", "options": undefined },
        { "name": "_user_id", "options": undefined },
        { "name": "_customer_id", "options": undefined },
        { "name": "_shop_id", "options": undefined },
        { "name": "_timestamp", "options": undefined },
        { "name": "_state", "options": undefined },
        { "name": "_total_gross", "options": undefined },
        { "name": "_total_net", "options": undefined },
        { "name": "_document", "options": undefined },
        { "name": "_recipient_billing_address", "options": undefined },
        { "name": "_sender_billing_address", "options": undefined },
        { "name": "_payment_method_details", "options": undefined },
        { "name": "_customer_remark", "options": undefined },
      ],
      "options": {
        "messageSetWireFormat": false,
        "noStandardDescriptorAccessor": false,
        "deprecated": false,
        "mapEntry": false,
        "uninterpretedOption": [],
      },
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "InvoicePosition",
      "field": [{
        "name": "item_id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "itemId",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "currency",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "currency",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "invoice_rows",
        "number": 3,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.invoice.InvoiceRow",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "invoiceRows",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "gross",
        "number": 4,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "gross",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "net",
        "number": 5,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "net",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "vats",
        "number": 6,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.tax.VAT",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "vats",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_item_id", "options": undefined }, { "name": "_currency", "options": undefined }, {
        "name": "_gross",
        "options": undefined,
      }, { "name": "_net", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "InvoiceRow",
      "field": [{
        "name": "product_id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "productId",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "variant_id",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "variantId",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "price_per_unit",
        "number": 3,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "pricePerUnit",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "quantity",
        "number": 4,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "quantity",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "gross",
        "number": 6,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "gross",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "net",
        "number": 7,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 5,
        "jsonName": "net",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "vats",
        "number": 8,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.tax.VAT",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "vats",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "contract_start_date",
        "number": 9,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 6,
        "jsonName": "contractStartDate",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "_product_id", "options": undefined },
        { "name": "_variant_id", "options": undefined },
        { "name": "_price_per_unit", "options": undefined },
        { "name": "_quantity", "options": undefined },
        { "name": "_gross", "options": undefined },
        { "name": "_net", "options": undefined },
        { "name": "_contract_start_date", "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "enumType": [{
      "name": "State",
      "value": [
        { "name": "FAILED", "number": 0, "options": undefined },
        { "name": "INVALID", "number": 1, "options": undefined },
        { "name": "CREATED", "number": 2, "options": undefined },
        { "name": "SENT", "number": 3, "options": undefined },
        { "name": "PAYED", "number": 4, "options": undefined },
        { "name": "WITHDRAWN", "number": 5, "options": undefined },
        { "name": "CANCELLED", "number": 6, "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "service": [{
      "name": "InvoiceService",
      "method": [{
        "name": "Read",
        "inputType": ".io.restorecommerce.resourcebase.ReadRequest",
        "outputType": ".io.restorecommerce.invoice.InvoiceListResponse",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Create",
        "inputType": ".io.restorecommerce.invoice.InvoiceList",
        "outputType": ".io.restorecommerce.invoice.InvoiceListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Update",
        "inputType": ".io.restorecommerce.invoice.InvoiceList",
        "outputType": ".io.restorecommerce.invoice.InvoiceListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Render",
        "inputType": ".io.restorecommerce.invoice.InvoiceList",
        "outputType": ".io.restorecommerce.invoice.InvoiceListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Upsert",
        "inputType": ".io.restorecommerce.invoice.InvoiceList",
        "outputType": ".io.restorecommerce.invoice.InvoiceListResponse",
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
        "name": "GenerateInvoiceNumber",
        "inputType": ".io.restorecommerce.invoice.RequestInvoiceNumber",
        "outputType": ".io.restorecommerce.invoice.InvoiceNumberResponse",
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
        "path": [3, 9],
        "span": [15, 0, 39],
        "leadingComments": " Used by resolvers\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0],
        "span": [22, 0, 32, 1],
        "leadingComments": "\n Microservice definition.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 6],
        "span": [77, 0, 126, 1],
        "leadingComments": "\n The Invoice recource, stored in DB.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 6, 2, 0],
        "span": [86, 2, 25],
        "leadingComments": "",
        "trailingComments": " invoice_number\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 6, 2, 2],
        "span": [88, 2, 35],
        "leadingComments": "",
        "trailingComments": " forigner_key: use the following pattern: `${collection}/${id}` most likly an order.\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 6, 2, 11],
        "span": [121, 2, 32],
        "leadingComments": "",
        "trailingComments": " rendered on create, update and upsert?\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 8, 2, 7],
        "span": [145, 2, 42],
        "leadingComments": "",
        "trailingComments": " if there is any contract associated with product\n",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {
    ".io.restorecommerce.invoice.State": State,
    ".io.restorecommerce.invoice.RequestInvoiceNumber": RequestInvoiceNumber,
    ".io.restorecommerce.invoice.InvoiceNumberResponse": InvoiceNumberResponse,
    ".io.restorecommerce.invoice.Deleted": Deleted,
    ".io.restorecommerce.invoice.InvoiceList": InvoiceList,
    ".io.restorecommerce.invoice.InvoiceListResponse": InvoiceListResponse,
    ".io.restorecommerce.invoice.InvoiceResponse": InvoiceResponse,
    ".io.restorecommerce.invoice.Invoice": Invoice,
    ".io.restorecommerce.invoice.InvoicePosition": InvoicePosition,
    ".io.restorecommerce.invoice.InvoiceRow": InvoiceRow,
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
    protoMetadata10,
    protoMetadata11,
    protoMetadata12,
  ],
  options: {
    messages: {
      "Invoice": {
        options: {
          "kafka_subscriber": KafkaSubscription.decode(
            Buffer.from(
              "CghpbnZvaWNlcxIjaW8ucmVzdG9yZWNvbW1lcmNlLmludm9pY2UucmVzb3VyY2UaDmludm9pY2VDcmVhdGVkIg5pbnZvaWNlVXBkYXRlZCoOaW52b2ljZURlbGV0ZWQ=",
              "base64",
            ),
          ),
        },
        fields: {
          "user_id": {
            "resolver": Resolver.decode(
              Buffer.from("Ch0uaW8ucmVzdG9yZWNvbW1lcmNlLnVzZXIuVXNlchIIZGllbnRpdHkaBHVzZXIiBFJlYWQqBHVzZXI=", "base64"),
            ),
          },
          "customer_id": {
            "resolver": Resolver.decode(
              Buffer.from(
                "CiUuaW8ucmVzdG9yZWNvbW1lcmNlLmN1c3RvbWVyLkN1c3RvbWVyEghyZXNvdXJjZRoIY3VzdG9tZXIiBFJlYWQqCGN1c3RvbWVy",
                "base64",
              ),
            ),
          },
          "shop_id": {
            "resolver": Resolver.decode(
              Buffer.from("Ch0uaW8ucmVzdG9yZWNvbW1lcmNlLnNob3AuU2hvcBIIcmVzb3VyY2UaBHNob3AiBFJlYWQqBHNob3A=", "base64"),
            ),
          },
        },
      },
    },
    services: { "InvoiceService": { options: undefined, methods: { "Read": { "is_query": true } } } },
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
