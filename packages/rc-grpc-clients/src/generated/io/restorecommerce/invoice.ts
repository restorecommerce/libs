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

/** The Invoice recource, stored in DB. */
export interface Invoice {
  /** invoice_number */
  id?: string | undefined;
  meta?:
    | Meta
    | undefined;
  /** forigner_key: use the following pattern: `${collection}/${id}` most likly an order. */
  referenceId?: string | undefined;
  userId?: string | undefined;
  customerId?: string | undefined;
  shopId?: string | undefined;
  timestamp?: number | undefined;
  state?: State | undefined;
  totalGross?: number | undefined;
  totalNet?: number | undefined;
  vats: VAT[];
  /** rendered on create, update and upsert? */
  document?: string | undefined;
  recipientBillingAddress?: BillingAddress | undefined;
  senderBillingAddress?: BillingAddress | undefined;
  paymentMethodDetails?: Any | undefined;
  customerRemark?: string | undefined;
}

export interface InvoicePosition {
  itemId?: string | undefined;
  currency?: string | undefined;
  invoiceRows: InvoiceRow[];
  gross?: number | undefined;
  net?: number | undefined;
  vats: VAT[];
}

export interface InvoiceRow {
  productId?: string | undefined;
  variantId?: string | undefined;
  pricePerUnit?: number | undefined;
  quantity?: number | undefined;
  gross?: number | undefined;
  net?: number | undefined;
  vats: VAT[];
  /** if there is any contract associated with product */
  contractStartDate?: number | undefined;
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
    totalGross: undefined,
    totalNet: undefined,
    vats: [],
    document: undefined,
    recipientBillingAddress: undefined,
    senderBillingAddress: undefined,
    paymentMethodDetails: undefined,
    customerRemark: undefined,
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
    if (message.totalGross !== undefined) {
      writer.uint32(73).double(message.totalGross);
    }
    if (message.totalNet !== undefined) {
      writer.uint32(81).double(message.totalNet);
    }
    for (const v of message.vats) {
      VAT.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.document !== undefined) {
      writer.uint32(98).string(message.document);
    }
    if (message.recipientBillingAddress !== undefined) {
      BillingAddress.encode(message.recipientBillingAddress, writer.uint32(106).fork()).ldelim();
    }
    if (message.senderBillingAddress !== undefined) {
      BillingAddress.encode(message.senderBillingAddress, writer.uint32(114).fork()).ldelim();
    }
    if (message.paymentMethodDetails !== undefined) {
      Any.encode(message.paymentMethodDetails, writer.uint32(122).fork()).ldelim();
    }
    if (message.customerRemark !== undefined) {
      writer.uint32(130).string(message.customerRemark);
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
          message.totalGross = reader.double();
          break;
        case 10:
          message.totalNet = reader.double();
          break;
        case 11:
          message.vats.push(VAT.decode(reader, reader.uint32()));
          break;
        case 12:
          message.document = reader.string();
          break;
        case 13:
          message.recipientBillingAddress = BillingAddress.decode(reader, reader.uint32());
          break;
        case 14:
          message.senderBillingAddress = BillingAddress.decode(reader, reader.uint32());
          break;
        case 15:
          message.paymentMethodDetails = Any.decode(reader, reader.uint32());
          break;
        case 16:
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
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      referenceId: isSet(object.referenceId) ? String(object.referenceId) : undefined,
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      customerId: isSet(object.customerId) ? String(object.customerId) : undefined,
      shopId: isSet(object.shopId) ? String(object.shopId) : undefined,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : undefined,
      state: isSet(object.state) ? stateFromJSON(object.state) : undefined,
      totalGross: isSet(object.totalGross) ? Number(object.totalGross) : undefined,
      totalNet: isSet(object.totalNet) ? Number(object.totalNet) : undefined,
      vats: Array.isArray(object?.vats) ? object.vats.map((e: any) => VAT.fromJSON(e)) : [],
      document: isSet(object.document) ? String(object.document) : undefined,
      recipientBillingAddress: isSet(object.recipientBillingAddress)
        ? BillingAddress.fromJSON(object.recipientBillingAddress)
        : undefined,
      senderBillingAddress: isSet(object.senderBillingAddress)
        ? BillingAddress.fromJSON(object.senderBillingAddress)
        : undefined,
      paymentMethodDetails: isSet(object.paymentMethodDetails) ? Any.fromJSON(object.paymentMethodDetails) : undefined,
      customerRemark: isSet(object.customerRemark) ? String(object.customerRemark) : undefined,
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
    message.totalGross !== undefined && (obj.totalGross = message.totalGross);
    message.totalNet !== undefined && (obj.totalNet = message.totalNet);
    if (message.vats) {
      obj.vats = message.vats.map((e) => e ? VAT.toJSON(e) : undefined);
    } else {
      obj.vats = [];
    }
    message.document !== undefined && (obj.document = message.document);
    message.recipientBillingAddress !== undefined && (obj.recipientBillingAddress = message.recipientBillingAddress
      ? BillingAddress.toJSON(message.recipientBillingAddress)
      : undefined);
    message.senderBillingAddress !== undefined && (obj.senderBillingAddress = message.senderBillingAddress
      ? BillingAddress.toJSON(message.senderBillingAddress)
      : undefined);
    message.paymentMethodDetails !== undefined &&
      (obj.paymentMethodDetails = message.paymentMethodDetails ? Any.toJSON(message.paymentMethodDetails) : undefined);
    message.customerRemark !== undefined && (obj.customerRemark = message.customerRemark);
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
    message.totalGross = object.totalGross ?? undefined;
    message.totalNet = object.totalNet ?? undefined;
    message.vats = object.vats?.map((e) => VAT.fromPartial(e)) || [];
    message.document = object.document ?? undefined;
    message.recipientBillingAddress =
      (object.recipientBillingAddress !== undefined && object.recipientBillingAddress !== null)
        ? BillingAddress.fromPartial(object.recipientBillingAddress)
        : undefined;
    message.senderBillingAddress = (object.senderBillingAddress !== undefined && object.senderBillingAddress !== null)
      ? BillingAddress.fromPartial(object.senderBillingAddress)
      : undefined;
    message.paymentMethodDetails = (object.paymentMethodDetails !== undefined && object.paymentMethodDetails !== null)
      ? Any.fromPartial(object.paymentMethodDetails)
      : undefined;
    message.customerRemark = object.customerRemark ?? undefined;
    return message;
  },
};

function createBaseInvoicePosition(): InvoicePosition {
  return { itemId: undefined, currency: undefined, invoiceRows: [], gross: undefined, net: undefined, vats: [] };
}

export const InvoicePosition = {
  encode(message: InvoicePosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemId !== undefined) {
      writer.uint32(10).string(message.itemId);
    }
    if (message.currency !== undefined) {
      writer.uint32(18).string(message.currency);
    }
    for (const v of message.invoiceRows) {
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
          message.itemId = reader.string();
          break;
        case 2:
          message.currency = reader.string();
          break;
        case 3:
          message.invoiceRows.push(InvoiceRow.decode(reader, reader.uint32()));
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
      itemId: isSet(object.itemId) ? String(object.itemId) : undefined,
      currency: isSet(object.currency) ? String(object.currency) : undefined,
      invoiceRows: Array.isArray(object?.invoiceRows) ? object.invoiceRows.map((e: any) => InvoiceRow.fromJSON(e)) : [],
      gross: isSet(object.gross) ? Number(object.gross) : undefined,
      net: isSet(object.net) ? Number(object.net) : undefined,
      vats: Array.isArray(object?.vats) ? object.vats.map((e: any) => VAT.fromJSON(e)) : [],
    };
  },

  toJSON(message: InvoicePosition): unknown {
    const obj: any = {};
    message.itemId !== undefined && (obj.itemId = message.itemId);
    message.currency !== undefined && (obj.currency = message.currency);
    if (message.invoiceRows) {
      obj.invoiceRows = message.invoiceRows.map((e) => e ? InvoiceRow.toJSON(e) : undefined);
    } else {
      obj.invoiceRows = [];
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
    message.itemId = object.itemId ?? undefined;
    message.currency = object.currency ?? undefined;
    message.invoiceRows = object.invoiceRows?.map((e) => InvoiceRow.fromPartial(e)) || [];
    message.gross = object.gross ?? undefined;
    message.net = object.net ?? undefined;
    message.vats = object.vats?.map((e) => VAT.fromPartial(e)) || [];
    return message;
  },
};

function createBaseInvoiceRow(): InvoiceRow {
  return {
    productId: undefined,
    variantId: undefined,
    pricePerUnit: undefined,
    quantity: undefined,
    gross: undefined,
    net: undefined,
    vats: [],
    contractStartDate: undefined,
  };
}

export const InvoiceRow = {
  encode(message: InvoiceRow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.productId !== undefined) {
      writer.uint32(10).string(message.productId);
    }
    if (message.variantId !== undefined) {
      writer.uint32(18).string(message.variantId);
    }
    if (message.pricePerUnit !== undefined) {
      writer.uint32(25).double(message.pricePerUnit);
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
    if (message.contractStartDate !== undefined) {
      writer.uint32(73).double(message.contractStartDate);
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
          message.productId = reader.string();
          break;
        case 2:
          message.variantId = reader.string();
          break;
        case 3:
          message.pricePerUnit = reader.double();
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
          message.contractStartDate = reader.double();
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
      productId: isSet(object.productId) ? String(object.productId) : undefined,
      variantId: isSet(object.variantId) ? String(object.variantId) : undefined,
      pricePerUnit: isSet(object.pricePerUnit) ? Number(object.pricePerUnit) : undefined,
      quantity: isSet(object.quantity) ? Number(object.quantity) : undefined,
      gross: isSet(object.gross) ? Number(object.gross) : undefined,
      net: isSet(object.net) ? Number(object.net) : undefined,
      vats: Array.isArray(object?.vats) ? object.vats.map((e: any) => VAT.fromJSON(e)) : [],
      contractStartDate: isSet(object.contractStartDate) ? Number(object.contractStartDate) : undefined,
    };
  },

  toJSON(message: InvoiceRow): unknown {
    const obj: any = {};
    message.productId !== undefined && (obj.productId = message.productId);
    message.variantId !== undefined && (obj.variantId = message.variantId);
    message.pricePerUnit !== undefined && (obj.pricePerUnit = message.pricePerUnit);
    message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
    message.gross !== undefined && (obj.gross = message.gross);
    message.net !== undefined && (obj.net = message.net);
    if (message.vats) {
      obj.vats = message.vats.map((e) => e ? VAT.toJSON(e) : undefined);
    } else {
      obj.vats = [];
    }
    message.contractStartDate !== undefined && (obj.contractStartDate = message.contractStartDate);
    return obj;
  },

  create(base?: DeepPartial<InvoiceRow>): InvoiceRow {
    return InvoiceRow.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<InvoiceRow>): InvoiceRow {
    const message = createBaseInvoiceRow();
    message.productId = object.productId ?? undefined;
    message.variantId = object.variantId ?? undefined;
    message.pricePerUnit = object.pricePerUnit ?? undefined;
    message.quantity = object.quantity ?? undefined;
    message.gross = object.gross ?? undefined;
    message.net = object.net ?? undefined;
    message.vats = object.vats?.map((e) => VAT.fromPartial(e)) || [];
    message.contractStartDate = object.contractStartDate ?? undefined;
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
