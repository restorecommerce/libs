/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { protoMetadata as protoMetadata6, ShippingAddress } from "./address";
import { protoMetadata as protoMetadata3, Subject } from "./auth";
import { protoMetadata as protoMetadata8 } from "./country";
import { FulfillmentListResponse, protoMetadata as protoMetadata9 } from "./fulfillment";
import { PackingSolutionListResponse, Preferences, protoMetadata as protoMetadata10 } from "./fulfillment_product";
import { Meta, protoMetadata as protoMetadata2 } from "./meta";
import { KafkaSubscription, protoMetadata as protoMetadata5 } from "./options";
import { DeleteRequest, DeleteResponse, protoMetadata as protoMetadata1, ReadRequest } from "./resource_base";
import { OperationStatus, protoMetadata as protoMetadata4, Status, StatusListResponse } from "./status";
import { protoMetadata as protoMetadata7, VAT } from "./tax";

export const protobufPackage = "io.restorecommerce.order";

export enum OrderState {
  Created = "Created",
  Submitted = "Submitted",
  Confirmed = "Confirmed",
  Invalid = "Invalid",
  Shipping = "Shipping",
  Failed = "Failed",
  Done = "Done",
  Withdrawn = "Withdrawn",
  Cancelled = "Cancelled",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function orderStateFromJSON(object: any): OrderState {
  switch (object) {
    case 0:
    case "Created":
      return OrderState.Created;
    case 1:
    case "Submitted":
      return OrderState.Submitted;
    case 2:
    case "Confirmed":
      return OrderState.Confirmed;
    case 3:
    case "Invalid":
      return OrderState.Invalid;
    case 4:
    case "Shipping":
      return OrderState.Shipping;
    case 5:
    case "Failed":
      return OrderState.Failed;
    case 6:
    case "Done":
      return OrderState.Done;
    case 7:
    case "Withdrawn":
      return OrderState.Withdrawn;
    case 8:
    case "Cancelled":
      return OrderState.Cancelled;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderState.UNRECOGNIZED;
  }
}

export function orderStateToJSON(object: OrderState): string {
  switch (object) {
    case OrderState.Created:
      return "Created";
    case OrderState.Submitted:
      return "Submitted";
    case OrderState.Confirmed:
      return "Confirmed";
    case OrderState.Invalid:
      return "Invalid";
    case OrderState.Shipping:
      return "Shipping";
    case OrderState.Failed:
      return "Failed";
    case OrderState.Done:
      return "Done";
    case OrderState.Withdrawn:
      return "Withdrawn";
    case OrderState.Cancelled:
      return "Cancelled";
    case OrderState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function orderStateToNumber(object: OrderState): number {
  switch (object) {
    case OrderState.Created:
      return 0;
    case OrderState.Submitted:
      return 1;
    case OrderState.Confirmed:
      return 2;
    case OrderState.Invalid:
      return 3;
    case OrderState.Shipping:
      return 4;
    case OrderState.Failed:
      return 5;
    case OrderState.Done:
      return 6;
    case OrderState.Withdrawn:
      return 7;
    case OrderState.Cancelled:
      return 8;
    case OrderState.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface OrderItem {
  productId: string;
  variantId: string;
  quantity: number;
  /** Set by service */
  unitPrice: number;
  /** Set by service */
  price: number;
  /** Set by service */
  vats: VAT[];
}

/** Database Entity */
export interface Order {
  id: string;
  meta?: Meta;
  state: OrderState;
  customerReference: string;
  items: OrderItem[];
  /** Set by service */
  totalPrice: number;
  /** Set by service */
  totalVat: number;
  shippingAddress?: ShippingAddress;
  billingAddress?: ShippingAddress;
  billingEmail: string;
  notificationEmail: string;
  packingPreferences?: Preferences;
}

export interface OrderIdList {
  ids: string[];
  subject?: Subject;
}

export interface OrderList {
  items: Order[];
  totalCount: number;
  subject?: Subject;
}

export interface OrderListResponse {
  items: OrderResponse[];
  totalCount: number;
  operationStatus?: OperationStatus;
}

export interface OrderResponse {
  payload?: Order;
  status?: Status;
}

export interface Deleted {
  id: string;
}

export interface ShippingDetails {
  exportType: string;
  exportDescription: string;
  invoiceNumber: string;
  senderAddress?: ShippingAddress;
}

export interface FulfillmentRequest {
  referenceId: string;
  shippingDetails?: ShippingDetails;
}

export interface FulfillmentRequestList {
  items: FulfillmentRequest[];
  totalCount: number;
  subject?: Subject;
}

function createBaseOrderItem(): OrderItem {
  return { productId: "", variantId: "", quantity: 0, unitPrice: 0, price: 0, vats: [] };
}

export const OrderItem = {
  encode(message: OrderItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.productId !== "") {
      writer.uint32(10).string(message.productId);
    }
    if (message.variantId !== "") {
      writer.uint32(18).string(message.variantId);
    }
    if (message.quantity !== 0) {
      writer.uint32(24).int32(message.quantity);
    }
    if (message.unitPrice !== 0) {
      writer.uint32(33).double(message.unitPrice);
    }
    if (message.price !== 0) {
      writer.uint32(41).double(message.price);
    }
    for (const v of message.vats) {
      VAT.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderItem();
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
          message.quantity = reader.int32();
          break;
        case 4:
          message.unitPrice = reader.double();
          break;
        case 5:
          message.price = reader.double();
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

  fromJSON(object: any): OrderItem {
    return {
      productId: isSet(object.productId) ? String(object.productId) : "",
      variantId: isSet(object.variantId) ? String(object.variantId) : "",
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
      unitPrice: isSet(object.unitPrice) ? Number(object.unitPrice) : 0,
      price: isSet(object.price) ? Number(object.price) : 0,
      vats: Array.isArray(object?.vats) ? object.vats.map((e: any) => VAT.fromJSON(e)) : [],
    };
  },

  toJSON(message: OrderItem): unknown {
    const obj: any = {};
    message.productId !== undefined && (obj.productId = message.productId);
    message.variantId !== undefined && (obj.variantId = message.variantId);
    message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
    message.unitPrice !== undefined && (obj.unitPrice = message.unitPrice);
    message.price !== undefined && (obj.price = message.price);
    if (message.vats) {
      obj.vats = message.vats.map((e) => e ? VAT.toJSON(e) : undefined);
    } else {
      obj.vats = [];
    }
    return obj;
  },

  create(base?: DeepPartial<OrderItem>): OrderItem {
    return OrderItem.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<OrderItem>): OrderItem {
    const message = createBaseOrderItem();
    message.productId = object.productId ?? "";
    message.variantId = object.variantId ?? "";
    message.quantity = object.quantity ?? 0;
    message.unitPrice = object.unitPrice ?? 0;
    message.price = object.price ?? 0;
    message.vats = object.vats?.map((e) => VAT.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOrder(): Order {
  return {
    id: "",
    meta: undefined,
    state: OrderState.Created,
    customerReference: "",
    items: [],
    totalPrice: 0,
    totalVat: 0,
    shippingAddress: undefined,
    billingAddress: undefined,
    billingEmail: "",
    notificationEmail: "",
    packingPreferences: undefined,
  };
}

export const Order = {
  encode(message: Order, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    if (message.state !== OrderState.Created) {
      writer.uint32(24).int32(orderStateToNumber(message.state));
    }
    if (message.customerReference !== "") {
      writer.uint32(34).string(message.customerReference);
    }
    for (const v of message.items) {
      OrderItem.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.totalPrice !== 0) {
      writer.uint32(49).double(message.totalPrice);
    }
    if (message.totalVat !== 0) {
      writer.uint32(57).double(message.totalVat);
    }
    if (message.shippingAddress !== undefined) {
      ShippingAddress.encode(message.shippingAddress, writer.uint32(66).fork()).ldelim();
    }
    if (message.billingAddress !== undefined) {
      ShippingAddress.encode(message.billingAddress, writer.uint32(74).fork()).ldelim();
    }
    if (message.billingEmail !== "") {
      writer.uint32(82).string(message.billingEmail);
    }
    if (message.notificationEmail !== "") {
      writer.uint32(90).string(message.notificationEmail);
    }
    if (message.packingPreferences !== undefined) {
      Preferences.encode(message.packingPreferences, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Order {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrder();
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
          message.state = orderStateFromJSON(reader.int32());
          break;
        case 4:
          message.customerReference = reader.string();
          break;
        case 5:
          message.items.push(OrderItem.decode(reader, reader.uint32()));
          break;
        case 6:
          message.totalPrice = reader.double();
          break;
        case 7:
          message.totalVat = reader.double();
          break;
        case 8:
          message.shippingAddress = ShippingAddress.decode(reader, reader.uint32());
          break;
        case 9:
          message.billingAddress = ShippingAddress.decode(reader, reader.uint32());
          break;
        case 10:
          message.billingEmail = reader.string();
          break;
        case 11:
          message.notificationEmail = reader.string();
          break;
        case 12:
          message.packingPreferences = Preferences.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Order {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      state: isSet(object.state) ? orderStateFromJSON(object.state) : OrderState.Created,
      customerReference: isSet(object.customerReference) ? String(object.customerReference) : "",
      items: Array.isArray(object?.items) ? object.items.map((e: any) => OrderItem.fromJSON(e)) : [],
      totalPrice: isSet(object.totalPrice) ? Number(object.totalPrice) : 0,
      totalVat: isSet(object.totalVat) ? Number(object.totalVat) : 0,
      shippingAddress: isSet(object.shippingAddress) ? ShippingAddress.fromJSON(object.shippingAddress) : undefined,
      billingAddress: isSet(object.billingAddress) ? ShippingAddress.fromJSON(object.billingAddress) : undefined,
      billingEmail: isSet(object.billingEmail) ? String(object.billingEmail) : "",
      notificationEmail: isSet(object.notificationEmail) ? String(object.notificationEmail) : "",
      packingPreferences: isSet(object.packingPreferences)
        ? Preferences.fromJSON(object.packingPreferences)
        : undefined,
    };
  },

  toJSON(message: Order): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.state !== undefined && (obj.state = orderStateToJSON(message.state));
    message.customerReference !== undefined && (obj.customerReference = message.customerReference);
    if (message.items) {
      obj.items = message.items.map((e) => e ? OrderItem.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalPrice !== undefined && (obj.totalPrice = message.totalPrice);
    message.totalVat !== undefined && (obj.totalVat = message.totalVat);
    message.shippingAddress !== undefined &&
      (obj.shippingAddress = message.shippingAddress ? ShippingAddress.toJSON(message.shippingAddress) : undefined);
    message.billingAddress !== undefined &&
      (obj.billingAddress = message.billingAddress ? ShippingAddress.toJSON(message.billingAddress) : undefined);
    message.billingEmail !== undefined && (obj.billingEmail = message.billingEmail);
    message.notificationEmail !== undefined && (obj.notificationEmail = message.notificationEmail);
    message.packingPreferences !== undefined &&
      (obj.packingPreferences = message.packingPreferences
        ? Preferences.toJSON(message.packingPreferences)
        : undefined);
    return obj;
  },

  create(base?: DeepPartial<Order>): Order {
    return Order.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Order>): Order {
    const message = createBaseOrder();
    message.id = object.id ?? "";
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    message.state = object.state ?? OrderState.Created;
    message.customerReference = object.customerReference ?? "";
    message.items = object.items?.map((e) => OrderItem.fromPartial(e)) || [];
    message.totalPrice = object.totalPrice ?? 0;
    message.totalVat = object.totalVat ?? 0;
    message.shippingAddress = (object.shippingAddress !== undefined && object.shippingAddress !== null)
      ? ShippingAddress.fromPartial(object.shippingAddress)
      : undefined;
    message.billingAddress = (object.billingAddress !== undefined && object.billingAddress !== null)
      ? ShippingAddress.fromPartial(object.billingAddress)
      : undefined;
    message.billingEmail = object.billingEmail ?? "";
    message.notificationEmail = object.notificationEmail ?? "";
    message.packingPreferences = (object.packingPreferences !== undefined && object.packingPreferences !== null)
      ? Preferences.fromPartial(object.packingPreferences)
      : undefined;
    return message;
  },
};

function createBaseOrderIdList(): OrderIdList {
  return { ids: [], subject: undefined };
}

export const OrderIdList = {
  encode(message: OrderIdList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.ids) {
      writer.uint32(10).string(v!);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderIdList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderIdList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ids.push(reader.string());
          break;
        case 2:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrderIdList {
    return {
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => String(e)) : [],
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: OrderIdList): unknown {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map((e) => e);
    } else {
      obj.ids = [];
    }
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<OrderIdList>): OrderIdList {
    return OrderIdList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<OrderIdList>): OrderIdList {
    const message = createBaseOrderIdList();
    message.ids = object.ids?.map((e) => e) || [];
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseOrderList(): OrderList {
  return { items: [], totalCount: 0, subject: undefined };
}

export const OrderList = {
  encode(message: OrderList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Order.decode(reader, reader.uint32()));
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

  fromJSON(object: any): OrderList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => Order.fromJSON(e)) : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: OrderList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? Order.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = Math.round(message.totalCount));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<OrderList>): OrderList {
    return OrderList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<OrderList>): OrderList {
    const message = createBaseOrderList();
    message.items = object.items?.map((e) => Order.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseOrderListResponse(): OrderListResponse {
  return { items: [], totalCount: 0, operationStatus: undefined };
}

export const OrderListResponse = {
  encode(message: OrderListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      OrderResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.operationStatus !== undefined) {
      OperationStatus.encode(message.operationStatus, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(OrderResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): OrderListResponse {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => OrderResponse.fromJSON(e)) : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
      operationStatus: isSet(object.operationStatus) ? OperationStatus.fromJSON(object.operationStatus) : undefined,
    };
  },

  toJSON(message: OrderListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? OrderResponse.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = Math.round(message.totalCount));
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus ? OperationStatus.toJSON(message.operationStatus) : undefined);
    return obj;
  },

  create(base?: DeepPartial<OrderListResponse>): OrderListResponse {
    return OrderListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<OrderListResponse>): OrderListResponse {
    const message = createBaseOrderListResponse();
    message.items = object.items?.map((e) => OrderResponse.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    message.operationStatus = (object.operationStatus !== undefined && object.operationStatus !== null)
      ? OperationStatus.fromPartial(object.operationStatus)
      : undefined;
    return message;
  },
};

function createBaseOrderResponse(): OrderResponse {
  return { payload: undefined, status: undefined };
}

export const OrderResponse = {
  encode(message: OrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      Order.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = Order.decode(reader, reader.uint32());
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

  fromJSON(object: any): OrderResponse {
    return {
      payload: isSet(object.payload) ? Order.fromJSON(object.payload) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: OrderResponse): unknown {
    const obj: any = {};
    message.payload !== undefined && (obj.payload = message.payload ? Order.toJSON(message.payload) : undefined);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<OrderResponse>): OrderResponse {
    return OrderResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<OrderResponse>): OrderResponse {
    const message = createBaseOrderResponse();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? Order.fromPartial(object.payload)
      : undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
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

function createBaseShippingDetails(): ShippingDetails {
  return { exportType: "", exportDescription: "", invoiceNumber: "", senderAddress: undefined };
}

export const ShippingDetails = {
  encode(message: ShippingDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exportType !== "") {
      writer.uint32(10).string(message.exportType);
    }
    if (message.exportDescription !== "") {
      writer.uint32(18).string(message.exportDescription);
    }
    if (message.invoiceNumber !== "") {
      writer.uint32(26).string(message.invoiceNumber);
    }
    if (message.senderAddress !== undefined) {
      ShippingAddress.encode(message.senderAddress, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ShippingDetails {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShippingDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exportType = reader.string();
          break;
        case 2:
          message.exportDescription = reader.string();
          break;
        case 3:
          message.invoiceNumber = reader.string();
          break;
        case 4:
          message.senderAddress = ShippingAddress.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ShippingDetails {
    return {
      exportType: isSet(object.exportType) ? String(object.exportType) : "",
      exportDescription: isSet(object.exportDescription) ? String(object.exportDescription) : "",
      invoiceNumber: isSet(object.invoiceNumber) ? String(object.invoiceNumber) : "",
      senderAddress: isSet(object.senderAddress) ? ShippingAddress.fromJSON(object.senderAddress) : undefined,
    };
  },

  toJSON(message: ShippingDetails): unknown {
    const obj: any = {};
    message.exportType !== undefined && (obj.exportType = message.exportType);
    message.exportDescription !== undefined && (obj.exportDescription = message.exportDescription);
    message.invoiceNumber !== undefined && (obj.invoiceNumber = message.invoiceNumber);
    message.senderAddress !== undefined &&
      (obj.senderAddress = message.senderAddress ? ShippingAddress.toJSON(message.senderAddress) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ShippingDetails>): ShippingDetails {
    return ShippingDetails.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ShippingDetails>): ShippingDetails {
    const message = createBaseShippingDetails();
    message.exportType = object.exportType ?? "";
    message.exportDescription = object.exportDescription ?? "";
    message.invoiceNumber = object.invoiceNumber ?? "";
    message.senderAddress = (object.senderAddress !== undefined && object.senderAddress !== null)
      ? ShippingAddress.fromPartial(object.senderAddress)
      : undefined;
    return message;
  },
};

function createBaseFulfillmentRequest(): FulfillmentRequest {
  return { referenceId: "", shippingDetails: undefined };
}

export const FulfillmentRequest = {
  encode(message: FulfillmentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.referenceId !== "") {
      writer.uint32(10).string(message.referenceId);
    }
    if (message.shippingDetails !== undefined) {
      ShippingDetails.encode(message.shippingDetails, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FulfillmentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFulfillmentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.referenceId = reader.string();
          break;
        case 2:
          message.shippingDetails = ShippingDetails.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FulfillmentRequest {
    return {
      referenceId: isSet(object.referenceId) ? String(object.referenceId) : "",
      shippingDetails: isSet(object.shippingDetails) ? ShippingDetails.fromJSON(object.shippingDetails) : undefined,
    };
  },

  toJSON(message: FulfillmentRequest): unknown {
    const obj: any = {};
    message.referenceId !== undefined && (obj.referenceId = message.referenceId);
    message.shippingDetails !== undefined &&
      (obj.shippingDetails = message.shippingDetails ? ShippingDetails.toJSON(message.shippingDetails) : undefined);
    return obj;
  },

  create(base?: DeepPartial<FulfillmentRequest>): FulfillmentRequest {
    return FulfillmentRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FulfillmentRequest>): FulfillmentRequest {
    const message = createBaseFulfillmentRequest();
    message.referenceId = object.referenceId ?? "";
    message.shippingDetails = (object.shippingDetails !== undefined && object.shippingDetails !== null)
      ? ShippingDetails.fromPartial(object.shippingDetails)
      : undefined;
    return message;
  },
};

function createBaseFulfillmentRequestList(): FulfillmentRequestList {
  return { items: [], totalCount: 0, subject: undefined };
}

export const FulfillmentRequestList = {
  encode(message: FulfillmentRequestList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      FulfillmentRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FulfillmentRequestList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFulfillmentRequestList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(FulfillmentRequest.decode(reader, reader.uint32()));
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

  fromJSON(object: any): FulfillmentRequestList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => FulfillmentRequest.fromJSON(e)) : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: FulfillmentRequestList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? FulfillmentRequest.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = Math.round(message.totalCount));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<FulfillmentRequestList>): FulfillmentRequestList {
    return FulfillmentRequestList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FulfillmentRequestList>): FulfillmentRequestList {
    const message = createBaseFulfillmentRequestList();
    message.items = object.items?.map((e) => FulfillmentRequest.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

export type OrderServiceDefinition = typeof OrderServiceDefinition;
export const OrderServiceDefinition = {
  name: "OrderService",
  fullName: "io.restorecommerce.order.OrderService",
  methods: {
    read: {
      name: "Read",
      requestType: ReadRequest,
      requestStream: false,
      responseType: OrderListResponse,
      responseStream: false,
      options: {},
    },
    create: {
      name: "Create",
      requestType: OrderList,
      requestStream: false,
      responseType: OrderListResponse,
      responseStream: false,
      options: {},
    },
    update: {
      name: "Update",
      requestType: OrderList,
      requestStream: false,
      responseType: OrderListResponse,
      responseStream: false,
      options: {},
    },
    upsert: {
      name: "Upsert",
      requestType: OrderList,
      requestStream: false,
      responseType: OrderListResponse,
      responseStream: false,
      options: {},
    },
    evaluate: {
      name: "Evaluate",
      requestType: OrderList,
      requestStream: false,
      responseType: OrderListResponse,
      responseStream: false,
      options: {},
    },
    submit: {
      name: "Submit",
      requestType: OrderList,
      requestStream: false,
      responseType: OrderListResponse,
      responseStream: false,
      options: {},
    },
    withdraw: {
      name: "Withdraw",
      requestType: OrderIdList,
      requestStream: false,
      responseType: OrderListResponse,
      responseStream: false,
      options: {},
    },
    cancel: {
      name: "Cancel",
      requestType: OrderIdList,
      requestStream: false,
      responseType: OrderListResponse,
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
    /** Requires Fulfillment Service */
    queryPackingSolution: {
      name: "QueryPackingSolution",
      requestType: FulfillmentRequestList,
      requestStream: false,
      responseType: PackingSolutionListResponse,
      responseStream: false,
      options: {},
    },
    /** Requires Fulfillment Service */
    createFulfillment: {
      name: "CreateFulfillment",
      requestType: FulfillmentRequestList,
      requestStream: false,
      responseType: FulfillmentListResponse,
      responseStream: false,
      options: {},
    },
    /** Requires Fulfillment Service */
    triggerFulfillment: {
      name: "TriggerFulfillment",
      requestType: FulfillmentRequestList,
      requestStream: false,
      responseType: StatusListResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface OrderServiceImplementation<CallContextExt = {}> {
  read(request: ReadRequest, context: CallContext & CallContextExt): Promise<DeepPartial<OrderListResponse>>;
  create(request: OrderList, context: CallContext & CallContextExt): Promise<DeepPartial<OrderListResponse>>;
  update(request: OrderList, context: CallContext & CallContextExt): Promise<DeepPartial<OrderListResponse>>;
  upsert(request: OrderList, context: CallContext & CallContextExt): Promise<DeepPartial<OrderListResponse>>;
  evaluate(request: OrderList, context: CallContext & CallContextExt): Promise<DeepPartial<OrderListResponse>>;
  submit(request: OrderList, context: CallContext & CallContextExt): Promise<DeepPartial<OrderListResponse>>;
  withdraw(request: OrderIdList, context: CallContext & CallContextExt): Promise<DeepPartial<OrderListResponse>>;
  cancel(request: OrderIdList, context: CallContext & CallContextExt): Promise<DeepPartial<OrderListResponse>>;
  delete(request: DeleteRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteResponse>>;
  /** Requires Fulfillment Service */
  queryPackingSolution(
    request: FulfillmentRequestList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PackingSolutionListResponse>>;
  /** Requires Fulfillment Service */
  createFulfillment(
    request: FulfillmentRequestList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<FulfillmentListResponse>>;
  /** Requires Fulfillment Service */
  triggerFulfillment(
    request: FulfillmentRequestList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<StatusListResponse>>;
}

export interface OrderServiceClient<CallOptionsExt = {}> {
  read(request: DeepPartial<ReadRequest>, options?: CallOptions & CallOptionsExt): Promise<OrderListResponse>;
  create(request: DeepPartial<OrderList>, options?: CallOptions & CallOptionsExt): Promise<OrderListResponse>;
  update(request: DeepPartial<OrderList>, options?: CallOptions & CallOptionsExt): Promise<OrderListResponse>;
  upsert(request: DeepPartial<OrderList>, options?: CallOptions & CallOptionsExt): Promise<OrderListResponse>;
  evaluate(request: DeepPartial<OrderList>, options?: CallOptions & CallOptionsExt): Promise<OrderListResponse>;
  submit(request: DeepPartial<OrderList>, options?: CallOptions & CallOptionsExt): Promise<OrderListResponse>;
  withdraw(request: DeepPartial<OrderIdList>, options?: CallOptions & CallOptionsExt): Promise<OrderListResponse>;
  cancel(request: DeepPartial<OrderIdList>, options?: CallOptions & CallOptionsExt): Promise<OrderListResponse>;
  delete(request: DeepPartial<DeleteRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteResponse>;
  /** Requires Fulfillment Service */
  queryPackingSolution(
    request: DeepPartial<FulfillmentRequestList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PackingSolutionListResponse>;
  /** Requires Fulfillment Service */
  createFulfillment(
    request: DeepPartial<FulfillmentRequestList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<FulfillmentListResponse>;
  /** Requires Fulfillment Service */
  triggerFulfillment(
    request: DeepPartial<FulfillmentRequestList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<StatusListResponse>;
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
    "name": "io/restorecommerce/order.proto",
    "package": "io.restorecommerce.order",
    "dependency": [
      "io/restorecommerce/resource_base.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/options.proto",
      "io/restorecommerce/address.proto",
      "io/restorecommerce/tax.proto",
      "io/restorecommerce/country.proto",
      "io/restorecommerce/fulfillment.proto",
      "io/restorecommerce/fulfillment_product.proto",
    ],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "OrderItem",
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
        "proto3Optional": false,
      }, {
        "name": "variant_id",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "variantId",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "quantity",
        "number": 3,
        "label": 1,
        "type": 5,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "quantity",
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
        "oneofIndex": 0,
        "jsonName": "unitPrice",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "price",
        "number": 5,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "price",
        "options": undefined,
        "proto3Optional": false,
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
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "Order",
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
      }, {
        "name": "meta",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.meta.Meta",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "meta",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "state",
        "number": 3,
        "label": 1,
        "type": 14,
        "typeName": ".io.restorecommerce.order.OrderState",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "state",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "customer_reference",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "customerReference",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "items",
        "number": 5,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.order.OrderItem",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "items",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "total_price",
        "number": 6,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "totalPrice",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "total_vat",
        "number": 7,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "totalVat",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "shipping_address",
        "number": 8,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.address.ShippingAddress",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "shippingAddress",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "billing_address",
        "number": 9,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.address.ShippingAddress",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "billingAddress",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "billing_email",
        "number": 10,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "billingEmail",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "notification_email",
        "number": 11,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "notificationEmail",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "packing_preferences",
        "number": 12,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment_product.Preferences",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "packingPreferences",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
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
      "name": "OrderIdList",
      "field": [{
        "name": "ids",
        "number": 1,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "ids",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "subject",
        "number": 2,
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
      "name": "OrderList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.order.Order",
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
      "name": "OrderListResponse",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.order.OrderResponse",
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
      "name": "OrderResponse",
      "field": [{
        "name": "payload",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.order.Order",
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
      "name": "ShippingDetails",
      "field": [{
        "name": "export_type",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "exportType",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "export_description",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "exportDescription",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "invoice_number",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "invoiceNumber",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "sender_address",
        "number": 4,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.address.ShippingAddress",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "senderAddress",
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
      "name": "FulfillmentRequest",
      "field": [{
        "name": "reference_id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "referenceId",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "shipping_details",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.order.ShippingDetails",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "shippingDetails",
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
      "name": "FulfillmentRequestList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.order.FulfillmentRequest",
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
    }],
    "enumType": [{
      "name": "OrderState",
      "value": [
        { "name": "Created", "number": 0, "options": undefined },
        { "name": "Submitted", "number": 1, "options": undefined },
        { "name": "Confirmed", "number": 2, "options": undefined },
        { "name": "Invalid", "number": 3, "options": undefined },
        { "name": "Shipping", "number": 4, "options": undefined },
        { "name": "Failed", "number": 5, "options": undefined },
        { "name": "Done", "number": 6, "options": undefined },
        { "name": "Withdrawn", "number": 7, "options": undefined },
        { "name": "Cancelled", "number": 8, "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "service": [{
      "name": "OrderService",
      "method": [{
        "name": "Read",
        "inputType": ".io.restorecommerce.resourcebase.ReadRequest",
        "outputType": ".io.restorecommerce.order.OrderListResponse",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Create",
        "inputType": ".io.restorecommerce.order.OrderList",
        "outputType": ".io.restorecommerce.order.OrderListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Update",
        "inputType": ".io.restorecommerce.order.OrderList",
        "outputType": ".io.restorecommerce.order.OrderListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Upsert",
        "inputType": ".io.restorecommerce.order.OrderList",
        "outputType": ".io.restorecommerce.order.OrderListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Evaluate",
        "inputType": ".io.restorecommerce.order.OrderList",
        "outputType": ".io.restorecommerce.order.OrderListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Submit",
        "inputType": ".io.restorecommerce.order.OrderList",
        "outputType": ".io.restorecommerce.order.OrderListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Withdraw",
        "inputType": ".io.restorecommerce.order.OrderIdList",
        "outputType": ".io.restorecommerce.order.OrderListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Cancel",
        "inputType": ".io.restorecommerce.order.OrderIdList",
        "outputType": ".io.restorecommerce.order.OrderListResponse",
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
        "name": "QueryPackingSolution",
        "inputType": ".io.restorecommerce.order.FulfillmentRequestList",
        "outputType": ".io.restorecommerce.fulfillment_product.PackingSolutionListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "CreateFulfillment",
        "inputType": ".io.restorecommerce.order.FulfillmentRequestList",
        "outputType": ".io.restorecommerce.fulfillment.FulfillmentListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "TriggerFulfillment",
        "inputType": ".io.restorecommerce.order.FulfillmentRequestList",
        "outputType": ".io.restorecommerce.status.StatusListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }],
      "options": { "deprecated": false, "uninterpretedOption": [] },
    }],
    "extension": [],
    "options": undefined,
    "sourceCodeInfo": {
      "location": [{
        "path": [6, 0, 2, 9],
        "span": [32, 2, 129],
        "leadingComments": " Requires Fulfillment Service\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 10],
        "span": [34, 2, 114],
        "leadingComments": " Requires Fulfillment Service\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 11],
        "span": [36, 2, 105],
        "leadingComments": " Requires Fulfillment Service\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0, 2, 3],
        "span": [55, 2, 24],
        "leadingComments": "",
        "trailingComments": "Set by service\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0, 2, 4],
        "span": [56, 2, 19],
        "leadingComments": "",
        "trailingComments": "Set by service\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0, 2, 5],
        "span": [57, 2, 47],
        "leadingComments": "",
        "trailingComments": "Set by service\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1],
        "span": [63, 0, 84, 1],
        "leadingComments": "*\nDatabase Entity\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 5],
        "span": [77, 2, 25],
        "leadingComments": "",
        "trailingComments": "Set by service\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 6],
        "span": [78, 2, 23],
        "leadingComments": "",
        "trailingComments": "Set by service\n",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {
    ".io.restorecommerce.order.OrderState": OrderState,
    ".io.restorecommerce.order.OrderItem": OrderItem,
    ".io.restorecommerce.order.Order": Order,
    ".io.restorecommerce.order.OrderIdList": OrderIdList,
    ".io.restorecommerce.order.OrderList": OrderList,
    ".io.restorecommerce.order.OrderListResponse": OrderListResponse,
    ".io.restorecommerce.order.OrderResponse": OrderResponse,
    ".io.restorecommerce.order.Deleted": Deleted,
    ".io.restorecommerce.order.ShippingDetails": ShippingDetails,
    ".io.restorecommerce.order.FulfillmentRequest": FulfillmentRequest,
    ".io.restorecommerce.order.FulfillmentRequestList": FulfillmentRequestList,
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
  ],
  options: {
    messages: {
      "Order": {
        options: {
          "kafka_subscriber": KafkaSubscription.decode(
            Buffer.from(
              "CgZvcmRlcnMSImlvLnJlc3RvcmVjb21tZXJjZS5vcmRlcnMucmVzb3VyY2UaDG9yZGVyQ3JlYXRlZCIMb3JkZXJVcGRhdGVkKgxvcmRlckRlbGV0ZWQ=",
              "base64",
            ),
          ),
        },
      },
    },
    services: { "OrderService": { options: { "service_name": "order" }, methods: { "Read": { "is_query": true } } } },
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
