/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { Any, protoMetadata as protoMetadata1 } from "../../google/protobuf/any";
import { BillingAddress, protoMetadata as protoMetadata8 } from "./address";
import { Amount, protoMetadata as protoMetadata9 } from "./amount";
import { protoMetadata as protoMetadata5, Subject } from "./auth";
import { protoMetadata as protoMetadata14 } from "./customer";
import { File, protoMetadata as protoMetadata11 } from "./file";
import { Meta, protoMetadata as protoMetadata3 } from "./meta";
import { KafkaSubscription, protoMetadata as protoMetadata7, Resolver } from "./options";
import { protoMetadata as protoMetadata4 } from "./organization";
import { Price, protoMetadata as protoMetadata10 } from "./price";
import { protoMetadata as protoMetadata12, Reference } from "./reference";
import { DeleteRequest, DeleteResponse, protoMetadata as protoMetadata2, ReadRequest } from "./resource_base";
import { protoMetadata as protoMetadata15 } from "./shop";
import { OperationStatus, protoMetadata as protoMetadata6, Status, StatusListResponse } from "./status";
import { protoMetadata as protoMetadata13 } from "./user";

export const protobufPackage = "io.restorecommerce.invoice";

export enum PaymentState {
  UNPAYED = "UNPAYED",
  PAYED = "PAYED",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function paymentStateFromJSON(object: any): PaymentState {
  switch (object) {
    case 0:
    case "UNPAYED":
      return PaymentState.UNPAYED;
    case 1:
    case "PAYED":
      return PaymentState.PAYED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PaymentState.UNRECOGNIZED;
  }
}

export function paymentStateToJSON(object: PaymentState): string {
  switch (object) {
    case PaymentState.UNPAYED:
      return "UNPAYED";
    case PaymentState.PAYED:
      return "PAYED";
    case PaymentState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function paymentStateToNumber(object: PaymentState): number {
  switch (object) {
    case PaymentState.UNPAYED:
      return 0;
    case PaymentState.PAYED:
      return 1;
    case PaymentState.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface RequestInvoiceNumber {
  shopId?: string | undefined;
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

export interface InvoiceId {
  id?: string | undefined;
  channelIds: string[];
  options?: Any | undefined;
  subject?: Subject | undefined;
}

export interface InvoiceIdList {
  items: InvoiceId[];
  totalCount?: number | undefined;
  subject?: Subject;
}

/** The Invoice recource, stored in DB. */
export interface Invoice {
  id?: string | undefined;
  meta?: Meta | undefined;
  invoiceNumber?: string | undefined;
  reference?: Reference | undefined;
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
  paymentState?: PaymentState | undefined;
  sender?: BillingAddress | undefined;
  recipient?: BillingAddress | undefined;
  positions: Position[];
  totalAmounts: Amount[];
  /** is there no better type for that? */
  paymentHints: string[];
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
  sent?: boolean | undefined;
  withdrawn?: boolean | undefined;
}

export interface Position {
  id?: string | undefined;
  rows: Row[];
  /** repeated in case of multiple currencies? */
  amounts: Amount[];
}

export interface Row {
  id?: string | undefined;
  productItem?: ProductItem | undefined;
  manualItem?: ManualItem | undefined;
  unitPrice?: Price | undefined;
  quantity?: number | undefined;
  amount?:
    | Amount
    | undefined;
  /** if there is any contract associated with product */
  contractStartDate?: number | undefined;
}

export interface ProductItem {
  productId?: string | undefined;
  variantId?: string | undefined;
}

export interface ManualItem {
  stockKeepingUnit?: string | undefined;
  name?: string | undefined;
  descritpion?: string | undefined;
}

function createBaseRequestInvoiceNumber(): RequestInvoiceNumber {
  return { shopId: undefined, context: undefined, subject: undefined };
}

export const RequestInvoiceNumber = {
  encode(message: RequestInvoiceNumber, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shopId !== undefined) {
      writer.uint32(10).string(message.shopId);
    }
    if (message.context !== undefined) {
      Any.encode(message.context, writer.uint32(18).fork()).ldelim();
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestInvoiceNumber {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestInvoiceNumber();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.shopId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.context = Any.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RequestInvoiceNumber {
    return {
      shopId: isSet(object.shopId) ? String(object.shopId) : undefined,
      context: isSet(object.context) ? Any.fromJSON(object.context) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: RequestInvoiceNumber): unknown {
    const obj: any = {};
    message.shopId !== undefined && (obj.shopId = message.shopId);
    message.context !== undefined && (obj.context = message.context ? Any.toJSON(message.context) : undefined);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<RequestInvoiceNumber>): RequestInvoiceNumber {
    return RequestInvoiceNumber.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RequestInvoiceNumber>): RequestInvoiceNumber {
    const message = createBaseRequestInvoiceNumber();
    message.shopId = object.shopId ?? undefined;
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvoiceNumberResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.invoiceNumber = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvoiceList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(Invoice.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.totalCount = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvoiceListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(InvoiceResponse.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.totalCount = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.operationStatus = OperationStatus.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvoiceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payload = Invoice.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.status = Status.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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

function createBaseInvoiceId(): InvoiceId {
  return { id: undefined, channelIds: [], options: undefined, subject: undefined };
}

export const InvoiceId = {
  encode(message: InvoiceId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): InvoiceId {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvoiceId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.channelIds.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.options = Any.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InvoiceId {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      channelIds: Array.isArray(object?.channelIds) ? object.channelIds.map((e: any) => String(e)) : [],
      options: isSet(object.options) ? Any.fromJSON(object.options) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: InvoiceId): unknown {
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

  create(base?: DeepPartial<InvoiceId>): InvoiceId {
    return InvoiceId.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<InvoiceId>): InvoiceId {
    const message = createBaseInvoiceId();
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

function createBaseInvoiceIdList(): InvoiceIdList {
  return { items: [], totalCount: undefined, subject: undefined };
}

export const InvoiceIdList = {
  encode(message: InvoiceIdList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      InvoiceId.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== undefined) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvoiceIdList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvoiceIdList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(InvoiceId.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.totalCount = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InvoiceIdList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => InvoiceId.fromJSON(e)) : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: InvoiceIdList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? InvoiceId.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = Math.round(message.totalCount));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<InvoiceIdList>): InvoiceIdList {
    return InvoiceIdList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<InvoiceIdList>): InvoiceIdList {
    const message = createBaseInvoiceIdList();
    message.items = object.items?.map((e) => InvoiceId.fromPartial(e)) || [];
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
    invoiceNumber: undefined,
    reference: undefined,
    userId: undefined,
    customerId: undefined,
    shopId: undefined,
    timestamp: undefined,
    paymentState: undefined,
    sender: undefined,
    recipient: undefined,
    positions: [],
    totalAmounts: [],
    paymentHints: [],
    documents: [],
    customerRemark: undefined,
    fromDate: undefined,
    toDate: undefined,
    sent: undefined,
    withdrawn: undefined,
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
    if (message.invoiceNumber !== undefined) {
      writer.uint32(26).string(message.invoiceNumber);
    }
    if (message.reference !== undefined) {
      Reference.encode(message.reference, writer.uint32(34).fork()).ldelim();
    }
    if (message.userId !== undefined) {
      writer.uint32(42).string(message.userId);
    }
    if (message.customerId !== undefined) {
      writer.uint32(50).string(message.customerId);
    }
    if (message.shopId !== undefined) {
      writer.uint32(58).string(message.shopId);
    }
    if (message.timestamp !== undefined) {
      writer.uint32(65).double(message.timestamp);
    }
    if (message.paymentState !== undefined) {
      writer.uint32(72).int32(paymentStateToNumber(message.paymentState));
    }
    if (message.sender !== undefined) {
      BillingAddress.encode(message.sender, writer.uint32(82).fork()).ldelim();
    }
    if (message.recipient !== undefined) {
      BillingAddress.encode(message.recipient, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.positions) {
      Position.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.totalAmounts) {
      Amount.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.paymentHints) {
      writer.uint32(114).string(v!);
    }
    for (const v of message.documents) {
      File.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    if (message.customerRemark !== undefined) {
      writer.uint32(130).string(message.customerRemark);
    }
    if (message.fromDate !== undefined) {
      writer.uint32(137).double(message.fromDate);
    }
    if (message.toDate !== undefined) {
      writer.uint32(145).double(message.toDate);
    }
    if (message.sent !== undefined) {
      writer.uint32(152).bool(message.sent);
    }
    if (message.withdrawn !== undefined) {
      writer.uint32(160).bool(message.withdrawn);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Invoice {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvoice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.meta = Meta.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.invoiceNumber = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.reference = Reference.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.customerId = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.shopId = reader.string();
          continue;
        case 8:
          if (tag !== 65) {
            break;
          }

          message.timestamp = reader.double();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.paymentState = paymentStateFromJSON(reader.int32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.sender = BillingAddress.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.recipient = BillingAddress.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.positions.push(Position.decode(reader, reader.uint32()));
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.totalAmounts.push(Amount.decode(reader, reader.uint32()));
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.paymentHints.push(reader.string());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.documents.push(File.decode(reader, reader.uint32()));
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.customerRemark = reader.string();
          continue;
        case 17:
          if (tag !== 137) {
            break;
          }

          message.fromDate = reader.double();
          continue;
        case 18:
          if (tag !== 145) {
            break;
          }

          message.toDate = reader.double();
          continue;
        case 19:
          if (tag !== 152) {
            break;
          }

          message.sent = reader.bool();
          continue;
        case 20:
          if (tag !== 160) {
            break;
          }

          message.withdrawn = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Invoice {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      invoiceNumber: isSet(object.invoiceNumber) ? String(object.invoiceNumber) : undefined,
      reference: isSet(object.reference) ? Reference.fromJSON(object.reference) : undefined,
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      customerId: isSet(object.customerId) ? String(object.customerId) : undefined,
      shopId: isSet(object.shopId) ? String(object.shopId) : undefined,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : undefined,
      paymentState: isSet(object.paymentState) ? paymentStateFromJSON(object.paymentState) : undefined,
      sender: isSet(object.sender) ? BillingAddress.fromJSON(object.sender) : undefined,
      recipient: isSet(object.recipient) ? BillingAddress.fromJSON(object.recipient) : undefined,
      positions: Array.isArray(object?.positions) ? object.positions.map((e: any) => Position.fromJSON(e)) : [],
      totalAmounts: Array.isArray(object?.totalAmounts) ? object.totalAmounts.map((e: any) => Amount.fromJSON(e)) : [],
      paymentHints: Array.isArray(object?.paymentHints) ? object.paymentHints.map((e: any) => String(e)) : [],
      documents: Array.isArray(object?.documents) ? object.documents.map((e: any) => File.fromJSON(e)) : [],
      customerRemark: isSet(object.customerRemark) ? String(object.customerRemark) : undefined,
      fromDate: isSet(object.fromDate) ? Number(object.fromDate) : undefined,
      toDate: isSet(object.toDate) ? Number(object.toDate) : undefined,
      sent: isSet(object.sent) ? Boolean(object.sent) : undefined,
      withdrawn: isSet(object.withdrawn) ? Boolean(object.withdrawn) : undefined,
    };
  },

  toJSON(message: Invoice): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.invoiceNumber !== undefined && (obj.invoiceNumber = message.invoiceNumber);
    message.reference !== undefined &&
      (obj.reference = message.reference ? Reference.toJSON(message.reference) : undefined);
    message.userId !== undefined && (obj.userId = message.userId);
    message.customerId !== undefined && (obj.customerId = message.customerId);
    message.shopId !== undefined && (obj.shopId = message.shopId);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.paymentState !== undefined &&
      (obj.paymentState = message.paymentState !== undefined ? paymentStateToJSON(message.paymentState) : undefined);
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
    if (message.paymentHints) {
      obj.paymentHints = message.paymentHints.map((e) => e);
    } else {
      obj.paymentHints = [];
    }
    if (message.documents) {
      obj.documents = message.documents.map((e) => e ? File.toJSON(e) : undefined);
    } else {
      obj.documents = [];
    }
    message.customerRemark !== undefined && (obj.customerRemark = message.customerRemark);
    message.fromDate !== undefined && (obj.fromDate = message.fromDate);
    message.toDate !== undefined && (obj.toDate = message.toDate);
    message.sent !== undefined && (obj.sent = message.sent);
    message.withdrawn !== undefined && (obj.withdrawn = message.withdrawn);
    return obj;
  },

  create(base?: DeepPartial<Invoice>): Invoice {
    return Invoice.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Invoice>): Invoice {
    const message = createBaseInvoice();
    message.id = object.id ?? undefined;
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    message.invoiceNumber = object.invoiceNumber ?? undefined;
    message.reference = (object.reference !== undefined && object.reference !== null)
      ? Reference.fromPartial(object.reference)
      : undefined;
    message.userId = object.userId ?? undefined;
    message.customerId = object.customerId ?? undefined;
    message.shopId = object.shopId ?? undefined;
    message.timestamp = object.timestamp ?? undefined;
    message.paymentState = object.paymentState ?? undefined;
    message.sender = (object.sender !== undefined && object.sender !== null)
      ? BillingAddress.fromPartial(object.sender)
      : undefined;
    message.recipient = (object.recipient !== undefined && object.recipient !== null)
      ? BillingAddress.fromPartial(object.recipient)
      : undefined;
    message.positions = object.positions?.map((e) => Position.fromPartial(e)) || [];
    message.totalAmounts = object.totalAmounts?.map((e) => Amount.fromPartial(e)) || [];
    message.paymentHints = object.paymentHints?.map((e) => e) || [];
    message.documents = object.documents?.map((e) => File.fromPartial(e)) || [];
    message.customerRemark = object.customerRemark ?? undefined;
    message.fromDate = object.fromDate ?? undefined;
    message.toDate = object.toDate ?? undefined;
    message.sent = object.sent ?? undefined;
    message.withdrawn = object.withdrawn ?? undefined;
    return message;
  },
};

function createBasePosition(): Position {
  return { id: undefined, rows: [], amounts: [] };
}

export const Position = {
  encode(message: Position, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.rows) {
      Row.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.amounts) {
      Amount.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Position {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.rows.push(Row.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.amounts.push(Amount.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Position {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      rows: Array.isArray(object?.rows) ? object.rows.map((e: any) => Row.fromJSON(e)) : [],
      amounts: Array.isArray(object?.amounts) ? object.amounts.map((e: any) => Amount.fromJSON(e)) : [],
    };
  },

  toJSON(message: Position): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.rows) {
      obj.rows = message.rows.map((e) => e ? Row.toJSON(e) : undefined);
    } else {
      obj.rows = [];
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
    message.rows = object.rows?.map((e) => Row.fromPartial(e)) || [];
    message.amounts = object.amounts?.map((e) => Amount.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRow(): Row {
  return {
    id: undefined,
    productItem: undefined,
    manualItem: undefined,
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
    if (message.productItem !== undefined) {
      ProductItem.encode(message.productItem, writer.uint32(18).fork()).ldelim();
    }
    if (message.manualItem !== undefined) {
      ManualItem.encode(message.manualItem, writer.uint32(26).fork()).ldelim();
    }
    if (message.unitPrice !== undefined) {
      Price.encode(message.unitPrice, writer.uint32(34).fork()).ldelim();
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.productItem = ProductItem.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.manualItem = ManualItem.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.unitPrice = Price.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.quantity = reader.uint32();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.amount = Amount.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 57) {
            break;
          }

          message.contractStartDate = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Row {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      productItem: isSet(object.productItem) ? ProductItem.fromJSON(object.productItem) : undefined,
      manualItem: isSet(object.manualItem) ? ManualItem.fromJSON(object.manualItem) : undefined,
      unitPrice: isSet(object.unitPrice) ? Price.fromJSON(object.unitPrice) : undefined,
      quantity: isSet(object.quantity) ? Number(object.quantity) : undefined,
      amount: isSet(object.amount) ? Amount.fromJSON(object.amount) : undefined,
      contractStartDate: isSet(object.contractStartDate) ? Number(object.contractStartDate) : undefined,
    };
  },

  toJSON(message: Row): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.productItem !== undefined &&
      (obj.productItem = message.productItem ? ProductItem.toJSON(message.productItem) : undefined);
    message.manualItem !== undefined &&
      (obj.manualItem = message.manualItem ? ManualItem.toJSON(message.manualItem) : undefined);
    message.unitPrice !== undefined &&
      (obj.unitPrice = message.unitPrice ? Price.toJSON(message.unitPrice) : undefined);
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
    message.productItem = (object.productItem !== undefined && object.productItem !== null)
      ? ProductItem.fromPartial(object.productItem)
      : undefined;
    message.manualItem = (object.manualItem !== undefined && object.manualItem !== null)
      ? ManualItem.fromPartial(object.manualItem)
      : undefined;
    message.unitPrice = (object.unitPrice !== undefined && object.unitPrice !== null)
      ? Price.fromPartial(object.unitPrice)
      : undefined;
    message.quantity = object.quantity ?? undefined;
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Amount.fromPartial(object.amount)
      : undefined;
    message.contractStartDate = object.contractStartDate ?? undefined;
    return message;
  },
};

function createBaseProductItem(): ProductItem {
  return { productId: undefined, variantId: undefined };
}

export const ProductItem = {
  encode(message: ProductItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.productId !== undefined) {
      writer.uint32(10).string(message.productId);
    }
    if (message.variantId !== undefined) {
      writer.uint32(18).string(message.variantId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProductItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProductItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.productId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.variantId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProductItem {
    return {
      productId: isSet(object.productId) ? String(object.productId) : undefined,
      variantId: isSet(object.variantId) ? String(object.variantId) : undefined,
    };
  },

  toJSON(message: ProductItem): unknown {
    const obj: any = {};
    message.productId !== undefined && (obj.productId = message.productId);
    message.variantId !== undefined && (obj.variantId = message.variantId);
    return obj;
  },

  create(base?: DeepPartial<ProductItem>): ProductItem {
    return ProductItem.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ProductItem>): ProductItem {
    const message = createBaseProductItem();
    message.productId = object.productId ?? undefined;
    message.variantId = object.variantId ?? undefined;
    return message;
  },
};

function createBaseManualItem(): ManualItem {
  return { stockKeepingUnit: undefined, name: undefined, descritpion: undefined };
}

export const ManualItem = {
  encode(message: ManualItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stockKeepingUnit !== undefined) {
      writer.uint32(10).string(message.stockKeepingUnit);
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    if (message.descritpion !== undefined) {
      writer.uint32(26).string(message.descritpion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ManualItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseManualItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.stockKeepingUnit = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.descritpion = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ManualItem {
    return {
      stockKeepingUnit: isSet(object.stockKeepingUnit) ? String(object.stockKeepingUnit) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      descritpion: isSet(object.descritpion) ? String(object.descritpion) : undefined,
    };
  },

  toJSON(message: ManualItem): unknown {
    const obj: any = {};
    message.stockKeepingUnit !== undefined && (obj.stockKeepingUnit = message.stockKeepingUnit);
    message.name !== undefined && (obj.name = message.name);
    message.descritpion !== undefined && (obj.descritpion = message.descritpion);
    return obj;
  },

  create(base?: DeepPartial<ManualItem>): ManualItem {
    return ManualItem.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ManualItem>): ManualItem {
    const message = createBaseManualItem();
    message.stockKeepingUnit = object.stockKeepingUnit ?? undefined;
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
      options: { _unknownFields: { 248008: [Buffer.from([1])] } },
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
    /** Mark invoices as withdrawn */
    withdraw: {
      name: "Withdraw",
      requestType: InvoiceIdList,
      requestStream: false,
      responseType: InvoiceListResponse,
      responseStream: false,
      options: {},
    },
    /** Triggers notification-srv (sends invoice per email for instance) */
    send: {
      name: "Send",
      requestType: InvoiceIdList,
      requestStream: false,
      responseType: StatusListResponse,
      responseStream: false,
      options: {},
    },
    /** Generate an incremented invoice number */
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
  /** Mark invoices as withdrawn */
  withdraw(request: InvoiceIdList, context: CallContext & CallContextExt): Promise<DeepPartial<InvoiceListResponse>>;
  /** Triggers notification-srv (sends invoice per email for instance) */
  send(request: InvoiceIdList, context: CallContext & CallContextExt): Promise<DeepPartial<StatusListResponse>>;
  /** Generate an incremented invoice number */
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
  /** Mark invoices as withdrawn */
  withdraw(request: DeepPartial<InvoiceIdList>, options?: CallOptions & CallOptionsExt): Promise<InvoiceListResponse>;
  /** Triggers notification-srv (sends invoice per email for instance) */
  send(request: DeepPartial<InvoiceIdList>, options?: CallOptions & CallOptionsExt): Promise<StatusListResponse>;
  /** Generate an incremented invoice number */
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
      "io/restorecommerce/amount.proto",
      "io/restorecommerce/price.proto",
      "io/restorecommerce/file.proto",
      "io/restorecommerce/reference.proto",
      "io/restorecommerce/user.proto",
      "io/restorecommerce/customer.proto",
      "io/restorecommerce/shop.proto",
    ],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "RequestInvoiceNumber",
      "field": [{
        "name": "shop_id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "shopId",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "context",
        "number": 2,
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
      "oneofDecl": [{ "name": "_shop_id", "options": undefined }],
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
      "name": "InvoiceId",
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
      "name": "InvoiceIdList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.invoice.InvoiceId",
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
        "name": "invoice_number",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "invoiceNumber",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "reference",
        "number": 4,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.reference.Reference",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "reference",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "user_id",
        "number": 5,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
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
        "number": 6,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 5,
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
        "number": 7,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 6,
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
        "number": 8,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 7,
        "jsonName": "timestamp",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "payment_state",
        "number": 9,
        "label": 1,
        "type": 14,
        "typeName": ".io.restorecommerce.invoice.PaymentState",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 8,
        "jsonName": "paymentState",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "sender",
        "number": 10,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.address.BillingAddress",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 9,
        "jsonName": "sender",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "recipient",
        "number": 11,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.address.BillingAddress",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 10,
        "jsonName": "recipient",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "positions",
        "number": 12,
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
        "number": 13,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.amount.Amount",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "totalAmounts",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "payment_hints",
        "number": 14,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "paymentHints",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "documents",
        "number": 15,
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
        "number": 16,
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
        "number": 17,
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
        "number": 18,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 13,
        "jsonName": "toDate",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "sent",
        "number": 19,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 14,
        "jsonName": "sent",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "withdrawn",
        "number": 20,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 15,
        "jsonName": "withdrawn",
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
        { "name": "_invoice_number", "options": undefined },
        { "name": "_reference", "options": undefined },
        { "name": "_user_id", "options": undefined },
        { "name": "_customer_id", "options": undefined },
        { "name": "_shop_id", "options": undefined },
        { "name": "_timestamp", "options": undefined },
        { "name": "_payment_state", "options": undefined },
        { "name": "_sender", "options": undefined },
        { "name": "_recipient", "options": undefined },
        { "name": "_customer_remark", "options": undefined },
        { "name": "_from_date", "options": undefined },
        { "name": "_to_date", "options": undefined },
        { "name": "_sent", "options": undefined },
        { "name": "_withdrawn", "options": undefined },
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
        "name": "rows",
        "number": 3,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.invoice.Row",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "rows",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "amounts",
        "number": 5,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.amount.Amount",
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
        "name": "product_item",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.invoice.ProductItem",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "productItem",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "manual_item",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.invoice.ManualItem",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "manualItem",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "unit_price",
        "number": 4,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.price.Price",
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
        "typeName": ".io.restorecommerce.amount.Amount",
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
        { "name": "item_type", "options": undefined },
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
      "name": "ProductItem",
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
      "name": "ManualItem",
      "field": [{
        "name": "stock_keeping_unit",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "stockKeepingUnit",
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
      "oneofDecl": [
        { "name": "_stock_keeping_unit", "options": undefined },
        { "name": "_name", "options": undefined },
        { "name": "_descritpion", "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "enumType": [{
      "name": "PaymentState",
      "value": [{ "name": "UNPAYED", "number": 0, "options": undefined }, {
        "name": "PAYED",
        "number": 1,
        "options": undefined,
      }],
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
        "name": "Withdraw",
        "inputType": ".io.restorecommerce.invoice.InvoiceIdList",
        "outputType": ".io.restorecommerce.invoice.InvoiceListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Send",
        "inputType": ".io.restorecommerce.invoice.InvoiceIdList",
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
        "path": [3, 12],
        "span": [18, 0, 39],
        "leadingComments": " Used by resolvers\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0],
        "span": [25, 0, 53, 1],
        "leadingComments": "\n Microservice definition.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 5],
        "span": [37, 2, 57],
        "leadingComments": "\n Render invoices as PDF to ostorage. (creates if not exist, updates if id is given)\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 6],
        "span": [42, 2, 61],
        "leadingComments": "\n Mark invoices as withdrawn\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 7],
        "span": [47, 2, 82],
        "leadingComments": "\n Triggers notification-srv (sends invoice per email for instance) \n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 8],
        "span": [52, 2, 82],
        "leadingComments": "\n Generate an incremented invoice number\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 8],
        "span": [107, 0, 160, 1],
        "leadingComments": "\n The Invoice recource, stored in DB.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 8, 2, 5],
        "span": [129, 2, 137, 4],
        "leadingComments": "",
        "trailingComments": " customer_number ref. to recipent orga\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 8, 2, 6],
        "span": [138, 2, 146, 4],
        "leadingComments": "",
        "trailingComments": " shop_number --- ref. to sender orga\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 8, 2, 13],
        "span": [153, 2, 37],
        "leadingComments": "",
        "trailingComments": " is there no better type for that?\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 8, 2, 14],
        "span": [154, 2, 55],
        "leadingComments": "",
        "trailingComments": " url to rendered PDFs\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 8, 2, 16],
        "span": [156, 2, 33],
        "leadingComments": "",
        "trailingComments": " value performance from date\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 8, 2, 17],
        "span": [157, 2, 31],
        "leadingComments": "",
        "trailingComments": " value performance to date\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 9, 2, 2],
        "span": [165, 2, 56],
        "leadingComments": "",
        "trailingComments": " repeated in case of multiple currencies?\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 10, 2, 6],
        "span": [177, 2, 42],
        "leadingComments": "",
        "trailingComments": " if there is any contract associated with product\n",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {
    ".io.restorecommerce.invoice.PaymentState": PaymentState,
    ".io.restorecommerce.invoice.RequestInvoiceNumber": RequestInvoiceNumber,
    ".io.restorecommerce.invoice.InvoiceNumberResponse": InvoiceNumberResponse,
    ".io.restorecommerce.invoice.Deleted": Deleted,
    ".io.restorecommerce.invoice.InvoiceList": InvoiceList,
    ".io.restorecommerce.invoice.InvoiceListResponse": InvoiceListResponse,
    ".io.restorecommerce.invoice.InvoiceResponse": InvoiceResponse,
    ".io.restorecommerce.invoice.InvoiceId": InvoiceId,
    ".io.restorecommerce.invoice.InvoiceIdList": InvoiceIdList,
    ".io.restorecommerce.invoice.Invoice": Invoice,
    ".io.restorecommerce.invoice.Position": Position,
    ".io.restorecommerce.invoice.Row": Row,
    ".io.restorecommerce.invoice.ProductItem": ProductItem,
    ".io.restorecommerce.invoice.ManualItem": ManualItem,
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
    protoMetadata14,
    protoMetadata15,
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
      "ProductItem": {
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
