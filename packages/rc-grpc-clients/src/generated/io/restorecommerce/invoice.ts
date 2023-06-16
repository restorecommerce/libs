/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { Any, protoMetadata as protoMetadata1 } from "../../google/protobuf/any";
import { BillingAddress, protoMetadata as protoMetadata8 } from "./address";
import { protoMetadata as protoMetadata5, Subject } from "./auth";
import { protoMetadata as protoMetadata12 } from "./customer";
import { File, protoMetadata as protoMetadata10 } from "./file";
import { Meta, protoMetadata as protoMetadata3 } from "./meta";
import { KafkaSubscription, protoMetadata as protoMetadata7, Resolver } from "./options";
import { protoMetadata as protoMetadata4 } from "./organization";
import { DeleteRequest, DeleteResponse, protoMetadata as protoMetadata2, ReadRequest } from "./resource_base";
import { protoMetadata as protoMetadata13 } from "./shop";
import { OperationStatus, protoMetadata as protoMetadata6, Status, StatusListResponse } from "./status";
import { Amount, protoMetadata as protoMetadata9 } from "./tax";
import { protoMetadata as protoMetadata11 } from "./user";

export const protobufPackage = "io.restorecommerce.invoice";

export enum State {
  FAILED = "FAILED",
  INVALID = "INVALID",
  CREATED = "CREATED",
  RENDERED = "RENDERED",
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
    case "RENDERED":
      return State.RENDERED;
    case 4:
    case "SENT":
      return State.SENT;
    case 5:
    case "PAYED":
      return State.PAYED;
    case 6:
    case "WITHDRAWN":
      return State.WITHDRAWN;
    case 7:
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
    case State.RENDERED:
      return "RENDERED";
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
    case State.RENDERED:
      return 3;
    case State.SENT:
      return 4;
    case State.PAYED:
      return 5;
    case State.WITHDRAWN:
      return 6;
    case State.CANCELLED:
      return 7;
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
  invoiceNumber: string;
}

export interface Deleted {
  id: string;
}

export interface InvoiceList {
  items: Invoice[];
  totalCount?: number | undefined;
  subject?: Subject;
}

export interface InvoiceListResponse {
  items: InvoiceResponse[];
  totalCount: number;
  operationStatus?: OperationStatus;
}

export interface InvoiceResponse {
  payload?: Invoice;
  status?: Status;
}

export interface InvoiceNotification {
  id?: string | undefined;
  channelIds: string[];
  options?: Any | undefined;
  subject?: Subject | undefined;
}

export interface InvoiceNotificationList {
  items: InvoiceNotification[];
  totalCount?: number | undefined;
  subject?: Subject;
}

/** The Invoice recource, stored in DB. */
export interface Invoice {
  /** invoice_number */
  id?: string | undefined;
  meta?:
    | Meta
    | undefined;
  /**
   * A forigner_key using the following pattern: `${collection}/${id}`.
   * most likly an order_id or fulfillment_id.
   */
  referenceId?: string | undefined;
  userId?:
    | string
    | undefined;
  /** customer_number ref. to recipent orga */
  customerId?:
    | string
    | undefined;
  /** shop_number --- ref. to sender orga */
  shopId?: string | undefined;
  timestamp?: number | undefined;
  state?: State | undefined;
  sender?: BillingAddress | undefined;
  recipient?: BillingAddress | undefined;
  positions: Position[];
  totalAmounts: Amount[];
  /** is there no better type for that? */
  paymentMethodDetails?:
    | Any
    | undefined;
  /** url to rendered PDFs */
  documents: File[];
  customerRemark?:
    | string
    | undefined;
  /** value performance from date */
  fromDate?:
    | number
    | undefined;
  /** value performance to date */
  toDate?: number | undefined;
}

export interface Position {
  id?: string | undefined;
  invoiceRows: Row[];
  /** repeated in case of multiple currencies? */
  amounts: Amount[];
}

export interface Row {
  id?: string | undefined;
  product?: ProductEntry | undefined;
  manual?: ManualEntry | undefined;
  unitPrice?: number | undefined;
  quantity?: number | undefined;
  amount?:
    | Amount
    | undefined;
  /** if there is any contract associated with product */
  contractStartDate?: number | undefined;
}

export interface ProductEntry {
  productId?: string | undefined;
  variantId?: string | undefined;
}

export interface ManualEntry {
  articleNumber?: string | undefined;
  name?: string | undefined;
  descritpion?: string | undefined;
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
  return { invoiceNumber: "" };
}

export const InvoiceNumberResponse = {
  encode(message: InvoiceNumberResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.invoiceNumber !== "") {
      writer.uint32(10).string(message.invoiceNumber);
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
          message.invoiceNumber = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InvoiceNumberResponse {
    return { invoiceNumber: isSet(object.invoiceNumber) ? String(object.invoiceNumber) : "" };
  },

  toJSON(message: InvoiceNumberResponse): unknown {
    const obj: any = {};
    message.invoiceNumber !== undefined && (obj.invoiceNumber = message.invoiceNumber);
    return obj;
  },

  create(base?: DeepPartial<InvoiceNumberResponse>): InvoiceNumberResponse {
    return InvoiceNumberResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<InvoiceNumberResponse>): InvoiceNumberResponse {
    const message = createBaseInvoiceNumberResponse();
    message.invoiceNumber = object.invoiceNumber ?? "";
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
  return { items: [], totalCount: undefined, subject: undefined };
}

export const InvoiceList = {
  encode(message: InvoiceList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      Invoice.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== undefined) {
      writer.uint32(16).uint32(message.totalCount);
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
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => Invoice.fromJSON(e)) : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : undefined,
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
    message.totalCount !== undefined && (obj.totalCount = Math.round(message.totalCount));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<InvoiceList>): InvoiceList {
    return InvoiceList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<InvoiceList>): InvoiceList {
    const message = createBaseInvoiceList();
    message.items = object.items?.map((e) => Invoice.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseInvoiceListResponse(): InvoiceListResponse {
  return { items: [], totalCount: 0, operationStatus: undefined };
}

export const InvoiceListResponse = {
  encode(message: InvoiceListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      InvoiceResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.operationStatus !== undefined) {
      OperationStatus.encode(message.operationStatus, writer.uint32(26).fork()).ldelim();
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
          message.totalCount = reader.uint32();
          break;
        case 3:
          message.operationStatus = OperationStatus.decode(reader, reader.uint32());
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
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
      operationStatus: isSet(object.operationStatus) ? OperationStatus.fromJSON(object.operationStatus) : undefined,
    };
  },

  toJSON(message: InvoiceListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? InvoiceResponse.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = Math.round(message.totalCount));
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus ? OperationStatus.toJSON(message.operationStatus) : undefined);
    return obj;
  },

  create(base?: DeepPartial<InvoiceListResponse>): InvoiceListResponse {
    return InvoiceListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<InvoiceListResponse>): InvoiceListResponse {
    const message = createBaseInvoiceListResponse();
    message.items = object.items?.map((e) => InvoiceResponse.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    message.operationStatus = (object.operationStatus !== undefined && object.operationStatus !== null)
      ? OperationStatus.fromPartial(object.operationStatus)
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

function createBaseInvoiceNotification(): InvoiceNotification {
  return { id: undefined, channelIds: [], options: undefined, subject: undefined };
}

export const InvoiceNotification = {
  encode(message: InvoiceNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.channelIds) {
      writer.uint32(18).string(v!);
    }
    if (message.options !== undefined) {
      Any.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvoiceNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvoiceNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.channelIds.push(reader.string());
          break;
        case 3:
          message.options = Any.decode(reader, reader.uint32());
          break;
        case 4:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InvoiceNotification {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      channelIds: Array.isArray(object?.channelIds) ? object.channelIds.map((e: any) => String(e)) : [],
      options: isSet(object.options) ? Any.fromJSON(object.options) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: InvoiceNotification): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.channelIds) {
      obj.channelIds = message.channelIds.map((e) => e);
    } else {
      obj.channelIds = [];
    }
    message.options !== undefined && (obj.options = message.options ? Any.toJSON(message.options) : undefined);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<InvoiceNotification>): InvoiceNotification {
    return InvoiceNotification.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<InvoiceNotification>): InvoiceNotification {
    const message = createBaseInvoiceNotification();
    message.id = object.id ?? undefined;
    message.channelIds = object.channelIds?.map((e) => e) || [];
    message.options = (object.options !== undefined && object.options !== null)
      ? Any.fromPartial(object.options)
      : undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseInvoiceNotificationList(): InvoiceNotificationList {
  return { items: [], totalCount: undefined, subject: undefined };
}

export const InvoiceNotificationList = {
  encode(message: InvoiceNotificationList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      InvoiceNotification.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== undefined) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvoiceNotificationList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvoiceNotificationList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(InvoiceNotification.decode(reader, reader.uint32()));
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

  fromJSON(object: any): InvoiceNotificationList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => InvoiceNotification.fromJSON(e)) : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: InvoiceNotificationList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? InvoiceNotification.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = Math.round(message.totalCount));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<InvoiceNotificationList>): InvoiceNotificationList {
    return InvoiceNotificationList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<InvoiceNotificationList>): InvoiceNotificationList {
    const message = createBaseInvoiceNotificationList();
    message.items = object.items?.map((e) => InvoiceNotification.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseInvoice(): Invoice {
  return {
    id: undefined,
    meta: undefined,
    referenceId: undefined,
    userId: undefined,
    customerId: undefined,
    shopId: undefined,
    timestamp: undefined,
    state: undefined,
    sender: undefined,
    recipient: undefined,
    positions: [],
    totalAmounts: [],
    paymentMethodDetails: undefined,
    documents: [],
    customerRemark: undefined,
    fromDate: undefined,
    toDate: undefined,
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
    if (message.referenceId !== undefined) {
      writer.uint32(26).string(message.referenceId);
    }
    if (message.userId !== undefined) {
      writer.uint32(34).string(message.userId);
    }
    if (message.customerId !== undefined) {
      writer.uint32(42).string(message.customerId);
    }
    if (message.shopId !== undefined) {
      writer.uint32(50).string(message.shopId);
    }
    if (message.timestamp !== undefined) {
      writer.uint32(57).double(message.timestamp);
    }
    if (message.state !== undefined) {
      writer.uint32(64).int32(stateToNumber(message.state));
    }
    if (message.sender !== undefined) {
      BillingAddress.encode(message.sender, writer.uint32(74).fork()).ldelim();
    }
    if (message.recipient !== undefined) {
      BillingAddress.encode(message.recipient, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.positions) {
      Position.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.totalAmounts) {
      Amount.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.paymentMethodDetails !== undefined) {
      Any.encode(message.paymentMethodDetails, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.documents) {
      File.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    if (message.customerRemark !== undefined) {
      writer.uint32(122).string(message.customerRemark);
    }
    if (message.fromDate !== undefined) {
      writer.uint32(129).double(message.fromDate);
    }
    if (message.toDate !== undefined) {
      writer.uint32(137).double(message.toDate);
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
          message.referenceId = reader.string();
          break;
        case 4:
          message.userId = reader.string();
          break;
        case 5:
          message.customerId = reader.string();
          break;
        case 6:
          message.shopId = reader.string();
          break;
        case 7:
          message.timestamp = reader.double();
          break;
        case 8:
          message.state = stateFromJSON(reader.int32());
          break;
        case 9:
          message.sender = BillingAddress.decode(reader, reader.uint32());
          break;
        case 10:
          message.recipient = BillingAddress.decode(reader, reader.uint32());
          break;
        case 11:
          message.positions.push(Position.decode(reader, reader.uint32()));
          break;
        case 12:
          message.totalAmounts.push(Amount.decode(reader, reader.uint32()));
          break;
        case 13:
          message.paymentMethodDetails = Any.decode(reader, reader.uint32());
          break;
        case 14:
          message.documents.push(File.decode(reader, reader.uint32()));
          break;
        case 15:
          message.customerRemark = reader.string();
          break;
        case 16:
          message.fromDate = reader.double();
          break;
        case 17:
          message.toDate = reader.double();
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
      referenceId: isSet(object.referenceId) ? String(object.referenceId) : undefined,
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      customerId: isSet(object.customerId) ? String(object.customerId) : undefined,
      shopId: isSet(object.shopId) ? String(object.shopId) : undefined,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : undefined,
      state: isSet(object.state) ? stateFromJSON(object.state) : undefined,
      sender: isSet(object.sender) ? BillingAddress.fromJSON(object.sender) : undefined,
      recipient: isSet(object.recipient) ? BillingAddress.fromJSON(object.recipient) : undefined,
      positions: Array.isArray(object?.positions) ? object.positions.map((e: any) => Position.fromJSON(e)) : [],
      totalAmounts: Array.isArray(object?.totalAmounts) ? object.totalAmounts.map((e: any) => Amount.fromJSON(e)) : [],
      paymentMethodDetails: isSet(object.paymentMethodDetails) ? Any.fromJSON(object.paymentMethodDetails) : undefined,
      documents: Array.isArray(object?.documents) ? object.documents.map((e: any) => File.fromJSON(e)) : [],
      customerRemark: isSet(object.customerRemark) ? String(object.customerRemark) : undefined,
      fromDate: isSet(object.fromDate) ? Number(object.fromDate) : undefined,
      toDate: isSet(object.toDate) ? Number(object.toDate) : undefined,
    };
  },

  toJSON(message: Invoice): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.referenceId !== undefined && (obj.referenceId = message.referenceId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.customerId !== undefined && (obj.customerId = message.customerId);
    message.shopId !== undefined && (obj.shopId = message.shopId);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.state !== undefined && (obj.state = message.state !== undefined ? stateToJSON(message.state) : undefined);
    message.sender !== undefined && (obj.sender = message.sender ? BillingAddress.toJSON(message.sender) : undefined);
    message.recipient !== undefined &&
      (obj.recipient = message.recipient ? BillingAddress.toJSON(message.recipient) : undefined);
    if (message.positions) {
      obj.positions = message.positions.map((e) => e ? Position.toJSON(e) : undefined);
    } else {
      obj.positions = [];
    }
    if (message.totalAmounts) {
      obj.totalAmounts = message.totalAmounts.map((e) => e ? Amount.toJSON(e) : undefined);
    } else {
      obj.totalAmounts = [];
    }
    message.paymentMethodDetails !== undefined &&
      (obj.paymentMethodDetails = message.paymentMethodDetails ? Any.toJSON(message.paymentMethodDetails) : undefined);
    if (message.documents) {
      obj.documents = message.documents.map((e) => e ? File.toJSON(e) : undefined);
    } else {
      obj.documents = [];
    }
    message.customerRemark !== undefined && (obj.customerRemark = message.customerRemark);
    message.fromDate !== undefined && (obj.fromDate = message.fromDate);
    message.toDate !== undefined && (obj.toDate = message.toDate);
    return obj;
  },

  create(base?: DeepPartial<Invoice>): Invoice {
    return Invoice.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Invoice>): Invoice {
    const message = createBaseInvoice();
    message.id = object.id ?? undefined;
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    message.referenceId = object.referenceId ?? undefined;
    message.userId = object.userId ?? undefined;
    message.customerId = object.customerId ?? undefined;
    message.shopId = object.shopId ?? undefined;
    message.timestamp = object.timestamp ?? undefined;
    message.state = object.state ?? undefined;
    message.sender = (object.sender !== undefined && object.sender !== null)
      ? BillingAddress.fromPartial(object.sender)
      : undefined;
    message.recipient = (object.recipient !== undefined && object.recipient !== null)
      ? BillingAddress.fromPartial(object.recipient)
      : undefined;
    message.positions = object.positions?.map((e) => Position.fromPartial(e)) || [];
    message.totalAmounts = object.totalAmounts?.map((e) => Amount.fromPartial(e)) || [];
    message.paymentMethodDetails = (object.paymentMethodDetails !== undefined && object.paymentMethodDetails !== null)
      ? Any.fromPartial(object.paymentMethodDetails)
      : undefined;
    message.documents = object.documents?.map((e) => File.fromPartial(e)) || [];
    message.customerRemark = object.customerRemark ?? undefined;
    message.fromDate = object.fromDate ?? undefined;
    message.toDate = object.toDate ?? undefined;
    return message;
  },
};

function createBasePosition(): Position {
  return { id: undefined, invoiceRows: [], amounts: [] };
}

export const Position = {
  encode(message: Position, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.invoiceRows) {
      Row.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.amounts) {
      Amount.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Position {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 3:
          message.invoiceRows.push(Row.decode(reader, reader.uint32()));
          break;
        case 5:
          message.amounts.push(Amount.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Position {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      invoiceRows: Array.isArray(object?.invoiceRows) ? object.invoiceRows.map((e: any) => Row.fromJSON(e)) : [],
      amounts: Array.isArray(object?.amounts) ? object.amounts.map((e: any) => Amount.fromJSON(e)) : [],
    };
  },

  toJSON(message: Position): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.invoiceRows) {
      obj.invoiceRows = message.invoiceRows.map((e) => e ? Row.toJSON(e) : undefined);
    } else {
      obj.invoiceRows = [];
    }
    if (message.amounts) {
      obj.amounts = message.amounts.map((e) => e ? Amount.toJSON(e) : undefined);
    } else {
      obj.amounts = [];
    }
    return obj;
  },

  create(base?: DeepPartial<Position>): Position {
    return Position.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Position>): Position {
    const message = createBasePosition();
    message.id = object.id ?? undefined;
    message.invoiceRows = object.invoiceRows?.map((e) => Row.fromPartial(e)) || [];
    message.amounts = object.amounts?.map((e) => Amount.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRow(): Row {
  return {
    id: undefined,
    product: undefined,
    manual: undefined,
    unitPrice: undefined,
    quantity: undefined,
    amount: undefined,
    contractStartDate: undefined,
  };
}

export const Row = {
  encode(message: Row, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.product !== undefined) {
      ProductEntry.encode(message.product, writer.uint32(18).fork()).ldelim();
    }
    if (message.manual !== undefined) {
      ManualEntry.encode(message.manual, writer.uint32(26).fork()).ldelim();
    }
    if (message.unitPrice !== undefined) {
      writer.uint32(33).double(message.unitPrice);
    }
    if (message.quantity !== undefined) {
      writer.uint32(40).uint32(message.quantity);
    }
    if (message.amount !== undefined) {
      Amount.encode(message.amount, writer.uint32(50).fork()).ldelim();
    }
    if (message.contractStartDate !== undefined) {
      writer.uint32(57).double(message.contractStartDate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Row {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.product = ProductEntry.decode(reader, reader.uint32());
          break;
        case 3:
          message.manual = ManualEntry.decode(reader, reader.uint32());
          break;
        case 4:
          message.unitPrice = reader.double();
          break;
        case 5:
          message.quantity = reader.uint32();
          break;
        case 6:
          message.amount = Amount.decode(reader, reader.uint32());
          break;
        case 7:
          message.contractStartDate = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Row {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      product: isSet(object.product) ? ProductEntry.fromJSON(object.product) : undefined,
      manual: isSet(object.manual) ? ManualEntry.fromJSON(object.manual) : undefined,
      unitPrice: isSet(object.unitPrice) ? Number(object.unitPrice) : undefined,
      quantity: isSet(object.quantity) ? Number(object.quantity) : undefined,
      amount: isSet(object.amount) ? Amount.fromJSON(object.amount) : undefined,
      contractStartDate: isSet(object.contractStartDate) ? Number(object.contractStartDate) : undefined,
    };
  },

  toJSON(message: Row): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.product !== undefined && (obj.product = message.product ? ProductEntry.toJSON(message.product) : undefined);
    message.manual !== undefined && (obj.manual = message.manual ? ManualEntry.toJSON(message.manual) : undefined);
    message.unitPrice !== undefined && (obj.unitPrice = message.unitPrice);
    message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
    message.amount !== undefined && (obj.amount = message.amount ? Amount.toJSON(message.amount) : undefined);
    message.contractStartDate !== undefined && (obj.contractStartDate = message.contractStartDate);
    return obj;
  },

  create(base?: DeepPartial<Row>): Row {
    return Row.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Row>): Row {
    const message = createBaseRow();
    message.id = object.id ?? undefined;
    message.product = (object.product !== undefined && object.product !== null)
      ? ProductEntry.fromPartial(object.product)
      : undefined;
    message.manual = (object.manual !== undefined && object.manual !== null)
      ? ManualEntry.fromPartial(object.manual)
      : undefined;
    message.unitPrice = object.unitPrice ?? undefined;
    message.quantity = object.quantity ?? undefined;
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Amount.fromPartial(object.amount)
      : undefined;
    message.contractStartDate = object.contractStartDate ?? undefined;
    return message;
  },
};

function createBaseProductEntry(): ProductEntry {
  return { productId: undefined, variantId: undefined };
}

export const ProductEntry = {
  encode(message: ProductEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.productId !== undefined) {
      writer.uint32(10).string(message.productId);
    }
    if (message.variantId !== undefined) {
      writer.uint32(18).string(message.variantId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProductEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProductEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.productId = reader.string();
          break;
        case 2:
          message.variantId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProductEntry {
    return {
      productId: isSet(object.productId) ? String(object.productId) : undefined,
      variantId: isSet(object.variantId) ? String(object.variantId) : undefined,
    };
  },

  toJSON(message: ProductEntry): unknown {
    const obj: any = {};
    message.productId !== undefined && (obj.productId = message.productId);
    message.variantId !== undefined && (obj.variantId = message.variantId);
    return obj;
  },

  create(base?: DeepPartial<ProductEntry>): ProductEntry {
    return ProductEntry.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ProductEntry>): ProductEntry {
    const message = createBaseProductEntry();
    message.productId = object.productId ?? undefined;
    message.variantId = object.variantId ?? undefined;
    return message;
  },
};

function createBaseManualEntry(): ManualEntry {
  return { articleNumber: undefined, name: undefined, descritpion: undefined };
}

export const ManualEntry = {
  encode(message: ManualEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.articleNumber !== undefined) {
      writer.uint32(10).string(message.articleNumber);
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    if (message.descritpion !== undefined) {
      writer.uint32(26).string(message.descritpion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ManualEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseManualEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.articleNumber = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.descritpion = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ManualEntry {
    return {
      articleNumber: isSet(object.articleNumber) ? String(object.articleNumber) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      descritpion: isSet(object.descritpion) ? String(object.descritpion) : undefined,
    };
  },

  toJSON(message: ManualEntry): unknown {
    const obj: any = {};
    message.articleNumber !== undefined && (obj.articleNumber = message.articleNumber);
    message.name !== undefined && (obj.name = message.name);
    message.descritpion !== undefined && (obj.descritpion = message.descritpion);
    return obj;
  },

  create(base?: DeepPartial<ManualEntry>): ManualEntry {
    return ManualEntry.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ManualEntry>): ManualEntry {
    const message = createBaseManualEntry();
    message.articleNumber = object.articleNumber ?? undefined;
    message.name = object.name ?? undefined;
    message.descritpion = object.descritpion ?? undefined;
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
    /** Render invoices as PDF to ostorage. (creates if not exist, updates if id is given) */
    render: {
      name: "Render",
      requestType: InvoiceList,
      requestStream: false,
      responseType: InvoiceListResponse,
      responseStream: false,
      options: {},
    },
    /** Triggers notification-srv (sends invoice per email for instance) */
    send: {
      name: "Send",
      requestType: InvoiceNotificationList,
      requestStream: false,
      responseType: StatusListResponse,
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
  upsert(request: InvoiceList, context: CallContext & CallContextExt): Promise<DeepPartial<InvoiceListResponse>>;
  delete(request: DeleteRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteResponse>>;
  /** Render invoices as PDF to ostorage. (creates if not exist, updates if id is given) */
  render(request: InvoiceList, context: CallContext & CallContextExt): Promise<DeepPartial<InvoiceListResponse>>;
  /** Triggers notification-srv (sends invoice per email for instance) */
  send(
    request: InvoiceNotificationList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<StatusListResponse>>;
  generateInvoiceNumber(
    request: RequestInvoiceNumber,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<InvoiceNumberResponse>>;
}

export interface InvoiceServiceClient<CallOptionsExt = {}> {
  read(request: DeepPartial<ReadRequest>, options?: CallOptions & CallOptionsExt): Promise<InvoiceListResponse>;
  create(request: DeepPartial<InvoiceList>, options?: CallOptions & CallOptionsExt): Promise<InvoiceListResponse>;
  update(request: DeepPartial<InvoiceList>, options?: CallOptions & CallOptionsExt): Promise<InvoiceListResponse>;
  upsert(request: DeepPartial<InvoiceList>, options?: CallOptions & CallOptionsExt): Promise<InvoiceListResponse>;
  delete(request: DeepPartial<DeleteRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteResponse>;
  /** Render invoices as PDF to ostorage. (creates if not exist, updates if id is given) */
  render(request: DeepPartial<InvoiceList>, options?: CallOptions & CallOptionsExt): Promise<InvoiceListResponse>;
  /** Triggers notification-srv (sends invoice per email for instance) */
  send(
    request: DeepPartial<InvoiceNotificationList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<StatusListResponse>;
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
      "io/restorecommerce/file.proto",
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
      "name": "InvoiceNotification",
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
        "name": "channel_ids",
        "number": 2,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "channelIds",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "options",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.Any",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "options",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "subject",
        "number": 4,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.auth.Subject",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "subject",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_id", "options": undefined }, { "name": "_options", "options": undefined }, {
        "name": "_subject",
        "options": undefined,
      }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "InvoiceNotificationList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.invoice.InvoiceNotification",
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
        "name": "sender",
        "number": 9,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.address.BillingAddress",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 8,
        "jsonName": "sender",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "recipient",
        "number": 10,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.address.BillingAddress",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 9,
        "jsonName": "recipient",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "positions",
        "number": 11,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.invoice.Position",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "positions",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "total_amounts",
        "number": 12,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.tax.Amount",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "totalAmounts",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "payment_method_details",
        "number": 13,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.Any",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 10,
        "jsonName": "paymentMethodDetails",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "documents",
        "number": 14,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.file.File",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "documents",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "customer_remark",
        "number": 15,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 11,
        "jsonName": "customerRemark",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "from_date",
        "number": 16,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 12,
        "jsonName": "fromDate",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "to_date",
        "number": 17,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 13,
        "jsonName": "toDate",
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
        { "name": "_sender", "options": undefined },
        { "name": "_recipient", "options": undefined },
        { "name": "_payment_method_details", "options": undefined },
        { "name": "_customer_remark", "options": undefined },
        { "name": "_from_date", "options": undefined },
        { "name": "_to_date", "options": undefined },
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
      "name": "Position",
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
        "name": "invoice_rows",
        "number": 3,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.invoice.Row",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "invoiceRows",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "amounts",
        "number": 5,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.tax.Amount",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "amounts",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_id", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "Row",
      "field": [{
        "name": "id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "id",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "product",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.invoice.ProductEntry",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "product",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "manual",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.invoice.ManualEntry",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "manual",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "unit_price",
        "number": 4,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "unitPrice",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "quantity",
        "number": 5,
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
        "name": "amount",
        "number": 6,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.tax.Amount",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "amount",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "contract_start_date",
        "number": 7,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 5,
        "jsonName": "contractStartDate",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "entry_type", "options": undefined },
        { "name": "_id", "options": undefined },
        { "name": "_unit_price", "options": undefined },
        { "name": "_quantity", "options": undefined },
        { "name": "_amount", "options": undefined },
        { "name": "_contract_start_date", "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ProductEntry",
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
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_product_id", "options": undefined }, { "name": "_variant_id", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ManualEntry",
      "field": [{
        "name": "article_number",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "articleNumber",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "name",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "descritpion",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "descritpion",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_article_number", "options": undefined }, { "name": "_name", "options": undefined }, {
        "name": "_descritpion",
        "options": undefined,
      }],
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
        { "name": "RENDERED", "number": 3, "options": undefined },
        { "name": "SENT", "number": 4, "options": undefined },
        { "name": "PAYED", "number": 5, "options": undefined },
        { "name": "WITHDRAWN", "number": 6, "options": undefined },
        { "name": "CANCELLED", "number": 7, "options": undefined },
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
        "name": "Render",
        "inputType": ".io.restorecommerce.invoice.InvoiceList",
        "outputType": ".io.restorecommerce.invoice.InvoiceListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Send",
        "inputType": ".io.restorecommerce.invoice.InvoiceNotificationList",
        "outputType": ".io.restorecommerce.status.StatusListResponse",
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
        "path": [3, 10],
        "span": [16, 0, 39],
        "leadingComments": " Used by resolvers\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0],
        "span": [23, 0, 42, 1],
        "leadingComments": "\n Microservice definition.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 5],
        "span": [35, 2, 57],
        "leadingComments": "\n Render invoices as PDF to ostorage. (creates if not exist, updates if id is given)\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 6],
        "span": [40, 2, 92],
        "leadingComments": "\n Triggers notification-srv (sends invoice per email for instance) \n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 8],
        "span": [101, 0, 155, 1],
        "leadingComments": "\n The Invoice recource, stored in DB.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 8, 2, 0],
        "span": [110, 2, 25],
        "leadingComments": "",
        "trailingComments": " invoice_number\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 8, 2, 2],
        "span": [116, 2, 35],
        "leadingComments":
          "\n A forigner_key using the following pattern: `${collection}/${id}`.\n most likly an order_id or fulfillment_id.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 8, 2, 4],
        "span": [126, 2, 134, 4],
        "leadingComments": "",
        "trailingComments": " customer_number ref. to recipent orga\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 8, 2, 5],
        "span": [135, 2, 143, 4],
        "leadingComments": "",
        "trailingComments": " shop_number --- ref. to sender orga\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 8, 2, 12],
        "span": [150, 2, 59],
        "leadingComments": "",
        "trailingComments": " is there no better type for that?\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 8, 2, 13],
        "span": [151, 2, 55],
        "leadingComments": "",
        "trailingComments": " url to rendered PDFs\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 8, 2, 15],
        "span": [153, 2, 33],
        "leadingComments": "",
        "trailingComments": " value performance from date\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 8, 2, 16],
        "span": [154, 2, 31],
        "leadingComments": "",
        "trailingComments": " value performance to date\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 9, 2, 2],
        "span": [160, 2, 53],
        "leadingComments": "",
        "trailingComments": " repeated in case of multiple currencies?\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 10, 2, 6],
        "span": [172, 2, 42],
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
    ".io.restorecommerce.invoice.InvoiceNotification": InvoiceNotification,
    ".io.restorecommerce.invoice.InvoiceNotificationList": InvoiceNotificationList,
    ".io.restorecommerce.invoice.Invoice": Invoice,
    ".io.restorecommerce.invoice.Position": Position,
    ".io.restorecommerce.invoice.Row": Row,
    ".io.restorecommerce.invoice.ProductEntry": ProductEntry,
    ".io.restorecommerce.invoice.ManualEntry": ManualEntry,
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
    protoMetadata13,
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
              Buffer.from("Ch0uaW8ucmVzdG9yZWNvbW1lcmNlLnVzZXIuVXNlchIIaWRlbnRpdHkaBHVzZXIiBFJlYWQqBHVzZXI=", "base64"),
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
      "ProductEntry": {
        fields: {
          "product_id": {
            "resolver": Resolver.decode(
              Buffer.from(
                "CiMuaW8ucmVzdG9yZWNvbW1lcmNlLnByb2R1Y3QuUHJvZHVjdBIHY2F0YWxvZxoHcHJvZHVjdCIEUmVhZCoHcHJvZHVjdA==",
                "base64",
              ),
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
