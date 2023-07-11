/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { Any, protoMetadata as protoMetadata1 } from "../../google/protobuf/any";
import { protoMetadata as protoMetadata17, Timestamp } from "../../google/protobuf/timestamp";
import { BillingAddress, protoMetadata as protoMetadata8 } from "./address";
import { Amount, protoMetadata as protoMetadata9 } from "./amount";
import { Attribute, protoMetadata as protoMetadata13 } from "./attribute";
import { protoMetadata as protoMetadata5, Subject } from "./auth";
import { protoMetadata as protoMetadata15 } from "./customer";
import { File, protoMetadata as protoMetadata11 } from "./file";
import { Meta, protoMetadata as protoMetadata3 } from "./meta";
import { KafkaSubscription, protoMetadata as protoMetadata7, Resolver } from "./options";
import { protoMetadata as protoMetadata4 } from "./organization";
import { Price, protoMetadata as protoMetadata10 } from "./price";
import { protoMetadata as protoMetadata18 } from "./product";
import { protoMetadata as protoMetadata12, Reference } from "./reference";
import { DeleteRequest, DeleteResponse, protoMetadata as protoMetadata2, ReadRequest } from "./resource_base";
import { protoMetadata as protoMetadata16 } from "./shop";
import { OperationStatus, protoMetadata as protoMetadata6, Status, StatusListResponse } from "./status";
import { protoMetadata as protoMetadata14 } from "./user";

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
  shop_id?: string | undefined;
  context?: Any | undefined;
  subject?: Subject | undefined;
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
  subject?: Subject | undefined;
}

export interface InvoiceListResponse {
  items: InvoiceResponse[];
  total_count: number;
  operation_status?: OperationStatus | undefined;
}

export interface InvoiceResponse {
  payload?: Invoice | undefined;
  status?: Status | undefined;
}

export interface InvoiceId {
  id?: string | undefined;
  channel_ids: string[];
  options?: Any | undefined;
  subject?: Subject | undefined;
}

export interface InvoiceIdList {
  items: InvoiceId[];
  total_count?: number | undefined;
  subject?: Subject | undefined;
}

/** The Invoice recource, stored in DB. */
export interface Invoice {
  id?: string | undefined;
  meta?: Meta | undefined;
  invoice_number?: string | undefined;
  references: Reference[];
  user_id?:
    | string
    | undefined;
  /** customer_number ref. to recipent orga */
  customer_id?:
    | string
    | undefined;
  /** shop_number --- ref. to sender orga */
  shop_id?: string | undefined;
  timestamp?: Date | undefined;
  payment_state?: PaymentState | undefined;
  sender?: BillingAddress | undefined;
  recipient?: BillingAddress | undefined;
  sections: Section[];
  total_amounts: Amount[];
  payment_hints: string[];
  /** url to rendered PDFs */
  documents: File[];
  /** value performance from date */
  from_date?:
    | Date
    | undefined;
  /** value performance to date */
  to_date?: Date | undefined;
  sent?: boolean | undefined;
  withdrawn?: boolean | undefined;
}

export interface Section {
  id?: string | undefined;
  customer_remark?: string | undefined;
  positions: Position[];
  /** repeated in case of multiple currencies? */
  amounts: Amount[];
}

export interface Position {
  id?: string | undefined;
  product_item?: ProductItem | undefined;
  fultillment_item?: FulfillmentItem | undefined;
  manual_item?: ManualItem | undefined;
  unit_price?: Price | undefined;
  quantity?: number | undefined;
  amount?:
    | Amount
    | undefined;
  /** if there is any contract associated with product */
  contract_start_date?: number | undefined;
  attributes: Attribute[];
}

export interface ProductItem {
  product_id?: string | undefined;
  variant_id?: string | undefined;
}

export interface FulfillmentItem {
  product_id?: string | undefined;
  variant_id?: string | undefined;
}

export interface ManualItem {
  stock_keeping_unit?: string | undefined;
  name?: string | undefined;
  descritpion?: string | undefined;
}

function createBaseRequestInvoiceNumber(): RequestInvoiceNumber {
  return { shop_id: undefined, context: undefined, subject: undefined };
}

export const RequestInvoiceNumber = {
  encode(message: RequestInvoiceNumber, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shop_id !== undefined) {
      writer.uint32(10).string(message.shop_id);
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

          message.shop_id = reader.string();
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
      shop_id: isSet(object.shop_id) ? String(object.shop_id) : undefined,
      context: isSet(object.context) ? Any.fromJSON(object.context) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: RequestInvoiceNumber): unknown {
    const obj: any = {};
    message.shop_id !== undefined && (obj.shop_id = message.shop_id);
    message.context !== undefined && (obj.context = message.context ? Any.toJSON(message.context) : undefined);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<RequestInvoiceNumber>): RequestInvoiceNumber {
    return RequestInvoiceNumber.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RequestInvoiceNumber>): RequestInvoiceNumber {
    const message = createBaseRequestInvoiceNumber();
    message.shop_id = object.shop_id ?? undefined;
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

          message.invoice_number = reader.string();
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

          message.total_count = reader.uint32();
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

          message.total_count = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.operation_status = OperationStatus.decode(reader, reader.uint32());
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
  return { id: undefined, channel_ids: [], options: undefined, subject: undefined };
}

export const InvoiceId = {
  encode(message: InvoiceId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.channel_ids) {
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

          message.channel_ids.push(reader.string());
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
      channel_ids: Array.isArray(object?.channel_ids) ? object.channel_ids.map((e: any) => String(e)) : [],
      options: isSet(object.options) ? Any.fromJSON(object.options) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: InvoiceId): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.channel_ids) {
      obj.channel_ids = message.channel_ids.map((e) => e);
    } else {
      obj.channel_ids = [];
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
    message.channel_ids = object.channel_ids?.map((e) => e) || [];
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
  return { items: [], total_count: undefined, subject: undefined };
}

export const InvoiceIdList = {
  encode(message: InvoiceIdList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      InvoiceId.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== undefined) {
      writer.uint32(16).uint32(message.total_count);
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

          message.total_count = reader.uint32();
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
      total_count: isSet(object.total_count) ? Number(object.total_count) : undefined,
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
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<InvoiceIdList>): InvoiceIdList {
    return InvoiceIdList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<InvoiceIdList>): InvoiceIdList {
    const message = createBaseInvoiceIdList();
    message.items = object.items?.map((e) => InvoiceId.fromPartial(e)) || [];
    message.total_count = object.total_count ?? undefined;
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
    invoice_number: undefined,
    references: [],
    user_id: undefined,
    customer_id: undefined,
    shop_id: undefined,
    timestamp: undefined,
    payment_state: undefined,
    sender: undefined,
    recipient: undefined,
    sections: [],
    total_amounts: [],
    payment_hints: [],
    documents: [],
    from_date: undefined,
    to_date: undefined,
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
    if (message.invoice_number !== undefined) {
      writer.uint32(26).string(message.invoice_number);
    }
    for (const v of message.references) {
      Reference.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.user_id !== undefined) {
      writer.uint32(42).string(message.user_id);
    }
    if (message.customer_id !== undefined) {
      writer.uint32(50).string(message.customer_id);
    }
    if (message.shop_id !== undefined) {
      writer.uint32(58).string(message.shop_id);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(66).fork()).ldelim();
    }
    if (message.payment_state !== undefined) {
      writer.uint32(72).int32(paymentStateToNumber(message.payment_state));
    }
    if (message.sender !== undefined) {
      BillingAddress.encode(message.sender, writer.uint32(82).fork()).ldelim();
    }
    if (message.recipient !== undefined) {
      BillingAddress.encode(message.recipient, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.sections) {
      Section.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.total_amounts) {
      Amount.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.payment_hints) {
      writer.uint32(114).string(v!);
    }
    for (const v of message.documents) {
      File.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    if (message.from_date !== undefined) {
      Timestamp.encode(toTimestamp(message.from_date), writer.uint32(130).fork()).ldelim();
    }
    if (message.to_date !== undefined) {
      Timestamp.encode(toTimestamp(message.to_date), writer.uint32(138).fork()).ldelim();
    }
    if (message.sent !== undefined) {
      writer.uint32(144).bool(message.sent);
    }
    if (message.withdrawn !== undefined) {
      writer.uint32(152).bool(message.withdrawn);
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

          message.invoice_number = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.references.push(Reference.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.user_id = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.customer_id = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.shop_id = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.payment_state = paymentStateFromJSON(reader.int32());
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

          message.sections.push(Section.decode(reader, reader.uint32()));
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.total_amounts.push(Amount.decode(reader, reader.uint32()));
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.payment_hints.push(reader.string());
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

          message.from_date = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.to_date = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 18:
          if (tag !== 144) {
            break;
          }

          message.sent = reader.bool();
          continue;
        case 19:
          if (tag !== 152) {
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
      invoice_number: isSet(object.invoice_number) ? String(object.invoice_number) : undefined,
      references: Array.isArray(object?.references) ? object.references.map((e: any) => Reference.fromJSON(e)) : [],
      user_id: isSet(object.user_id) ? String(object.user_id) : undefined,
      customer_id: isSet(object.customer_id) ? String(object.customer_id) : undefined,
      shop_id: isSet(object.shop_id) ? String(object.shop_id) : undefined,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      payment_state: isSet(object.payment_state) ? paymentStateFromJSON(object.payment_state) : undefined,
      sender: isSet(object.sender) ? BillingAddress.fromJSON(object.sender) : undefined,
      recipient: isSet(object.recipient) ? BillingAddress.fromJSON(object.recipient) : undefined,
      sections: Array.isArray(object?.sections) ? object.sections.map((e: any) => Section.fromJSON(e)) : [],
      total_amounts: Array.isArray(object?.total_amounts)
        ? object.total_amounts.map((e: any) => Amount.fromJSON(e))
        : [],
      payment_hints: Array.isArray(object?.payment_hints) ? object.payment_hints.map((e: any) => String(e)) : [],
      documents: Array.isArray(object?.documents) ? object.documents.map((e: any) => File.fromJSON(e)) : [],
      from_date: isSet(object.from_date) ? fromJsonTimestamp(object.from_date) : undefined,
      to_date: isSet(object.to_date) ? fromJsonTimestamp(object.to_date) : undefined,
      sent: isSet(object.sent) ? Boolean(object.sent) : undefined,
      withdrawn: isSet(object.withdrawn) ? Boolean(object.withdrawn) : undefined,
    };
  },

  toJSON(message: Invoice): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.invoice_number !== undefined && (obj.invoice_number = message.invoice_number);
    if (message.references) {
      obj.references = message.references.map((e) => e ? Reference.toJSON(e) : undefined);
    } else {
      obj.references = [];
    }
    message.user_id !== undefined && (obj.user_id = message.user_id);
    message.customer_id !== undefined && (obj.customer_id = message.customer_id);
    message.shop_id !== undefined && (obj.shop_id = message.shop_id);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    message.payment_state !== undefined &&
      (obj.payment_state = message.payment_state !== undefined ? paymentStateToJSON(message.payment_state) : undefined);
    message.sender !== undefined && (obj.sender = message.sender ? BillingAddress.toJSON(message.sender) : undefined);
    message.recipient !== undefined &&
      (obj.recipient = message.recipient ? BillingAddress.toJSON(message.recipient) : undefined);
    if (message.sections) {
      obj.sections = message.sections.map((e) => e ? Section.toJSON(e) : undefined);
    } else {
      obj.sections = [];
    }
    if (message.total_amounts) {
      obj.total_amounts = message.total_amounts.map((e) => e ? Amount.toJSON(e) : undefined);
    } else {
      obj.total_amounts = [];
    }
    if (message.payment_hints) {
      obj.payment_hints = message.payment_hints.map((e) => e);
    } else {
      obj.payment_hints = [];
    }
    if (message.documents) {
      obj.documents = message.documents.map((e) => e ? File.toJSON(e) : undefined);
    } else {
      obj.documents = [];
    }
    message.from_date !== undefined && (obj.from_date = message.from_date.toISOString());
    message.to_date !== undefined && (obj.to_date = message.to_date.toISOString());
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
    message.invoice_number = object.invoice_number ?? undefined;
    message.references = object.references?.map((e) => Reference.fromPartial(e)) || [];
    message.user_id = object.user_id ?? undefined;
    message.customer_id = object.customer_id ?? undefined;
    message.shop_id = object.shop_id ?? undefined;
    message.timestamp = object.timestamp ?? undefined;
    message.payment_state = object.payment_state ?? undefined;
    message.sender = (object.sender !== undefined && object.sender !== null)
      ? BillingAddress.fromPartial(object.sender)
      : undefined;
    message.recipient = (object.recipient !== undefined && object.recipient !== null)
      ? BillingAddress.fromPartial(object.recipient)
      : undefined;
    message.sections = object.sections?.map((e) => Section.fromPartial(e)) || [];
    message.total_amounts = object.total_amounts?.map((e) => Amount.fromPartial(e)) || [];
    message.payment_hints = object.payment_hints?.map((e) => e) || [];
    message.documents = object.documents?.map((e) => File.fromPartial(e)) || [];
    message.from_date = object.from_date ?? undefined;
    message.to_date = object.to_date ?? undefined;
    message.sent = object.sent ?? undefined;
    message.withdrawn = object.withdrawn ?? undefined;
    return message;
  },
};

function createBaseSection(): Section {
  return { id: undefined, customer_remark: undefined, positions: [], amounts: [] };
}

export const Section = {
  encode(message: Section, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.customer_remark !== undefined) {
      writer.uint32(18).string(message.customer_remark);
    }
    for (const v of message.positions) {
      Position.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.amounts) {
      Amount.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Section {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSection();
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

          message.customer_remark = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.positions.push(Position.decode(reader, reader.uint32()));
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

  fromJSON(object: any): Section {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      customer_remark: isSet(object.customer_remark) ? String(object.customer_remark) : undefined,
      positions: Array.isArray(object?.positions) ? object.positions.map((e: any) => Position.fromJSON(e)) : [],
      amounts: Array.isArray(object?.amounts) ? object.amounts.map((e: any) => Amount.fromJSON(e)) : [],
    };
  },

  toJSON(message: Section): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.customer_remark !== undefined && (obj.customer_remark = message.customer_remark);
    if (message.positions) {
      obj.positions = message.positions.map((e) => e ? Position.toJSON(e) : undefined);
    } else {
      obj.positions = [];
    }
    if (message.amounts) {
      obj.amounts = message.amounts.map((e) => e ? Amount.toJSON(e) : undefined);
    } else {
      obj.amounts = [];
    }
    return obj;
  },

  create(base?: DeepPartial<Section>): Section {
    return Section.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Section>): Section {
    const message = createBaseSection();
    message.id = object.id ?? undefined;
    message.customer_remark = object.customer_remark ?? undefined;
    message.positions = object.positions?.map((e) => Position.fromPartial(e)) || [];
    message.amounts = object.amounts?.map((e) => Amount.fromPartial(e)) || [];
    return message;
  },
};

function createBasePosition(): Position {
  return {
    id: undefined,
    product_item: undefined,
    fultillment_item: undefined,
    manual_item: undefined,
    unit_price: undefined,
    quantity: undefined,
    amount: undefined,
    contract_start_date: undefined,
    attributes: [],
  };
}

export const Position = {
  encode(message: Position, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.product_item !== undefined) {
      ProductItem.encode(message.product_item, writer.uint32(18).fork()).ldelim();
    }
    if (message.fultillment_item !== undefined) {
      FulfillmentItem.encode(message.fultillment_item, writer.uint32(26).fork()).ldelim();
    }
    if (message.manual_item !== undefined) {
      ManualItem.encode(message.manual_item, writer.uint32(34).fork()).ldelim();
    }
    if (message.unit_price !== undefined) {
      Price.encode(message.unit_price, writer.uint32(42).fork()).ldelim();
    }
    if (message.quantity !== undefined) {
      writer.uint32(48).uint32(message.quantity);
    }
    if (message.amount !== undefined) {
      Amount.encode(message.amount, writer.uint32(58).fork()).ldelim();
    }
    if (message.contract_start_date !== undefined) {
      writer.uint32(65).double(message.contract_start_date);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(74).fork()).ldelim();
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
        case 2:
          if (tag !== 18) {
            break;
          }

          message.product_item = ProductItem.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.fultillment_item = FulfillmentItem.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.manual_item = ManualItem.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.unit_price = Price.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.quantity = reader.uint32();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.amount = Amount.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 65) {
            break;
          }

          message.contract_start_date = reader.double();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.attributes.push(Attribute.decode(reader, reader.uint32()));
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
      product_item: isSet(object.product_item) ? ProductItem.fromJSON(object.product_item) : undefined,
      fultillment_item: isSet(object.fultillment_item) ? FulfillmentItem.fromJSON(object.fultillment_item) : undefined,
      manual_item: isSet(object.manual_item) ? ManualItem.fromJSON(object.manual_item) : undefined,
      unit_price: isSet(object.unit_price) ? Price.fromJSON(object.unit_price) : undefined,
      quantity: isSet(object.quantity) ? Number(object.quantity) : undefined,
      amount: isSet(object.amount) ? Amount.fromJSON(object.amount) : undefined,
      contract_start_date: isSet(object.contract_start_date) ? Number(object.contract_start_date) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : [],
    };
  },

  toJSON(message: Position): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.product_item !== undefined &&
      (obj.product_item = message.product_item ? ProductItem.toJSON(message.product_item) : undefined);
    message.fultillment_item !== undefined &&
      (obj.fultillment_item = message.fultillment_item ? FulfillmentItem.toJSON(message.fultillment_item) : undefined);
    message.manual_item !== undefined &&
      (obj.manual_item = message.manual_item ? ManualItem.toJSON(message.manual_item) : undefined);
    message.unit_price !== undefined &&
      (obj.unit_price = message.unit_price ? Price.toJSON(message.unit_price) : undefined);
    message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
    message.amount !== undefined && (obj.amount = message.amount ? Amount.toJSON(message.amount) : undefined);
    message.contract_start_date !== undefined && (obj.contract_start_date = message.contract_start_date);
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },

  create(base?: DeepPartial<Position>): Position {
    return Position.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Position>): Position {
    const message = createBasePosition();
    message.id = object.id ?? undefined;
    message.product_item = (object.product_item !== undefined && object.product_item !== null)
      ? ProductItem.fromPartial(object.product_item)
      : undefined;
    message.fultillment_item = (object.fultillment_item !== undefined && object.fultillment_item !== null)
      ? FulfillmentItem.fromPartial(object.fultillment_item)
      : undefined;
    message.manual_item = (object.manual_item !== undefined && object.manual_item !== null)
      ? ManualItem.fromPartial(object.manual_item)
      : undefined;
    message.unit_price = (object.unit_price !== undefined && object.unit_price !== null)
      ? Price.fromPartial(object.unit_price)
      : undefined;
    message.quantity = object.quantity ?? undefined;
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Amount.fromPartial(object.amount)
      : undefined;
    message.contract_start_date = object.contract_start_date ?? undefined;
    message.attributes = object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    return message;
  },
};

function createBaseProductItem(): ProductItem {
  return { product_id: undefined, variant_id: undefined };
}

export const ProductItem = {
  encode(message: ProductItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.product_id !== undefined) {
      writer.uint32(10).string(message.product_id);
    }
    if (message.variant_id !== undefined) {
      writer.uint32(18).string(message.variant_id);
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

          message.product_id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.variant_id = reader.string();
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
      product_id: isSet(object.product_id) ? String(object.product_id) : undefined,
      variant_id: isSet(object.variant_id) ? String(object.variant_id) : undefined,
    };
  },

  toJSON(message: ProductItem): unknown {
    const obj: any = {};
    message.product_id !== undefined && (obj.product_id = message.product_id);
    message.variant_id !== undefined && (obj.variant_id = message.variant_id);
    return obj;
  },

  create(base?: DeepPartial<ProductItem>): ProductItem {
    return ProductItem.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ProductItem>): ProductItem {
    const message = createBaseProductItem();
    message.product_id = object.product_id ?? undefined;
    message.variant_id = object.variant_id ?? undefined;
    return message;
  },
};

function createBaseFulfillmentItem(): FulfillmentItem {
  return { product_id: undefined, variant_id: undefined };
}

export const FulfillmentItem = {
  encode(message: FulfillmentItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.product_id !== undefined) {
      writer.uint32(10).string(message.product_id);
    }
    if (message.variant_id !== undefined) {
      writer.uint32(18).string(message.variant_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FulfillmentItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFulfillmentItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.product_id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.variant_id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FulfillmentItem {
    return {
      product_id: isSet(object.product_id) ? String(object.product_id) : undefined,
      variant_id: isSet(object.variant_id) ? String(object.variant_id) : undefined,
    };
  },

  toJSON(message: FulfillmentItem): unknown {
    const obj: any = {};
    message.product_id !== undefined && (obj.product_id = message.product_id);
    message.variant_id !== undefined && (obj.variant_id = message.variant_id);
    return obj;
  },

  create(base?: DeepPartial<FulfillmentItem>): FulfillmentItem {
    return FulfillmentItem.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FulfillmentItem>): FulfillmentItem {
    const message = createBaseFulfillmentItem();
    message.product_id = object.product_id ?? undefined;
    message.variant_id = object.variant_id ?? undefined;
    return message;
  },
};

function createBaseManualItem(): ManualItem {
  return { stock_keeping_unit: undefined, name: undefined, descritpion: undefined };
}

export const ManualItem = {
  encode(message: ManualItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stock_keeping_unit !== undefined) {
      writer.uint32(10).string(message.stock_keeping_unit);
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

          message.stock_keeping_unit = reader.string();
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
      stock_keeping_unit: isSet(object.stock_keeping_unit) ? String(object.stock_keeping_unit) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      descritpion: isSet(object.descritpion) ? String(object.descritpion) : undefined,
    };
  },

  toJSON(message: ManualItem): unknown {
    const obj: any = {};
    message.stock_keeping_unit !== undefined && (obj.stock_keeping_unit = message.stock_keeping_unit);
    message.name !== undefined && (obj.name = message.name);
    message.descritpion !== undefined && (obj.descritpion = message.descritpion);
    return obj;
  },

  create(base?: DeepPartial<ManualItem>): ManualItem {
    return ManualItem.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ManualItem>): ManualItem {
    const message = createBaseManualItem();
    message.stock_keeping_unit = object.stock_keeping_unit ?? undefined;
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
    /** Evaluates and (re-)Renders invoices as PDF to ostorage. (creates if not exist, updates if id is given) */
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
  /** Evaluates and (re-)Renders invoices as PDF to ostorage. (creates if not exist, updates if id is given) */
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
  /** Evaluates and (re-)Renders invoices as PDF to ostorage. (creates if not exist, updates if id is given) */
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
      "io/restorecommerce/attribute.proto",
      "io/restorecommerce/user.proto",
      "io/restorecommerce/customer.proto",
      "io/restorecommerce/shop.proto",
      "google/protobuf/timestamp.proto",
      "io/restorecommerce/product.proto",
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
        "name": "references",
        "number": 4,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.reference.Reference",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "references",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "user_id",
        "number": 5,
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
        "number": 6,
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
        "number": 7,
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
        "number": 8,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.Timestamp",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 6,
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
        "oneofIndex": 7,
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
        "oneofIndex": 8,
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
        "oneofIndex": 9,
        "jsonName": "recipient",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "sections",
        "number": 12,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.invoice.Section",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "sections",
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
        "name": "from_date",
        "number": 16,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.Timestamp",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 10,
        "jsonName": "fromDate",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "to_date",
        "number": 17,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.Timestamp",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 11,
        "jsonName": "toDate",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "sent",
        "number": 18,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 12,
        "jsonName": "sent",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "withdrawn",
        "number": 19,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 13,
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
        { "name": "_user_id", "options": undefined },
        { "name": "_customer_id", "options": undefined },
        { "name": "_shop_id", "options": undefined },
        { "name": "_timestamp", "options": undefined },
        { "name": "_payment_state", "options": undefined },
        { "name": "_sender", "options": undefined },
        { "name": "_recipient", "options": undefined },
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
      "name": "Section",
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
        "name": "customer_remark",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "customerRemark",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "positions",
        "number": 3,
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
      "oneofDecl": [{ "name": "_id", "options": undefined }, { "name": "_customer_remark", "options": undefined }],
      "options": undefined,
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
        "name": "fultillment_item",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.invoice.FulfillmentItem",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "fultillmentItem",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "manual_item",
        "number": 4,
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
        "number": 5,
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
        "number": 6,
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
        "number": 7,
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
        "number": 8,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 5,
        "jsonName": "contractStartDate",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "attributes",
        "number": 9,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.attribute.Attribute",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "attributes",
        "options": undefined,
        "proto3Optional": false,
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
      "name": "FulfillmentItem",
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
        "path": [3, 13],
        "span": [19, 0, 39],
        "leadingComments": " Used by resolvers\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0],
        "span": [28, 0, 56, 1],
        "leadingComments": "\n Microservice definition.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 5],
        "span": [40, 2, 57],
        "leadingComments":
          "\n Evaluates and (re-)Renders invoices as PDF to ostorage. (creates if not exist, updates if id is given)\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 6],
        "span": [45, 2, 61],
        "leadingComments": "\n Mark invoices as withdrawn\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 7],
        "span": [50, 2, 82],
        "leadingComments": "\n Triggers notification-srv (sends invoice per email for instance) \n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 8],
        "span": [55, 2, 82],
        "leadingComments": "\n Generate an incremented invoice number\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 8],
        "span": [110, 0, 162, 1],
        "leadingComments": "\n The Invoice recource, stored in DB.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 8, 2, 5],
        "span": [132, 2, 140, 4],
        "leadingComments": "",
        "trailingComments": " customer_number ref. to recipent orga\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 8, 2, 6],
        "span": [141, 2, 149, 4],
        "leadingComments": "",
        "trailingComments": " shop_number --- ref. to sender orga\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 8, 2, 14],
        "span": [157, 2, 55],
        "leadingComments": "",
        "trailingComments": " url to rendered PDFs\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 8, 2, 15],
        "span": [158, 2, 52],
        "leadingComments": "",
        "trailingComments": " value performance from date\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 8, 2, 16],
        "span": [159, 2, 50],
        "leadingComments": "",
        "trailingComments": " value performance to date\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 9, 2, 3],
        "span": [168, 2, 56],
        "leadingComments": "",
        "trailingComments": " repeated in case of multiple currencies?\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 10, 2, 7],
        "span": [181, 2, 42],
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
    ".io.restorecommerce.invoice.Section": Section,
    ".io.restorecommerce.invoice.Position": Position,
    ".io.restorecommerce.invoice.ProductItem": ProductItem,
    ".io.restorecommerce.invoice.FulfillmentItem": FulfillmentItem,
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
    protoMetadata16,
    protoMetadata17,
    protoMetadata18,
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
      "FulfillmentItem": {
        fields: {
          "product_id": {
            "resolver": Resolver.decode(
              Buffer.from(
                "CjouaW8ucmVzdG9yZWNvbW1lcmNlLmZ1bGZpbGxtZW50X3Byb2R1Y3QuRnVsZmlsbG1lbnRQcm9kdWN0EgtmdWxmaWxsbWVudBoTZnVsZmlsbG1lbnRfcHJvZHVjdCIEUmVhZCoHcHJvZHVjdA==",
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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
