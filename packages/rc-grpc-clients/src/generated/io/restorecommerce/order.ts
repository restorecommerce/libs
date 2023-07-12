/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { Any, protoMetadata as protoMetadata1 } from "../../google/protobuf/any";
import { BillingAddress, protoMetadata as protoMetadata7, ShippingAddress } from "./address";
import { Amount, protoMetadata as protoMetadata8 } from "./amount";
import { protoMetadata as protoMetadata4, Subject } from "./auth";
import { protoMetadata as protoMetadata10 } from "./country";
import {
  FulfillmentListResponse,
  InvoiceSection as InvoiceSection15,
  protoMetadata as protoMetadata11,
  State,
  stateFromJSON,
  stateToJSON,
  stateToNumber,
} from "./fulfillment";
import { PackingSolutionListResponse, Preferences, protoMetadata as protoMetadata12 } from "./fulfillment_product";
import {
  InvoiceListResponse,
  PaymentState,
  paymentStateFromJSON,
  paymentStateToJSON,
  paymentStateToNumber,
  protoMetadata as protoMetadata13,
} from "./invoice";
import { Meta, protoMetadata as protoMetadata3 } from "./meta";
import { KafkaSubscription, protoMetadata as protoMetadata6, Resolver } from "./options";
import { Price, protoMetadata as protoMetadata9 } from "./price";
import { DeleteRequest, DeleteResponse, protoMetadata as protoMetadata2, ReadRequest } from "./resource_base";
import { protoMetadata as protoMetadata14 } from "./shop";
import { OperationStatus, protoMetadata as protoMetadata5, Status, StatusListResponse } from "./status";

export const protobufPackage = "io.restorecommerce.order";

export enum OrderState {
  FAILED = "FAILED",
  INVALID = "INVALID",
  CREATED = "CREATED",
  SUBMITTED = "SUBMITTED",
  IN_PROCESS = "IN_PROCESS",
  DONE = "DONE",
  WITHDRAWN = "WITHDRAWN",
  CANCELLED = "CANCELLED",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function orderStateFromJSON(object: any): OrderState {
  switch (object) {
    case 0:
    case "FAILED":
      return OrderState.FAILED;
    case 1:
    case "INVALID":
      return OrderState.INVALID;
    case 2:
    case "CREATED":
      return OrderState.CREATED;
    case 3:
    case "SUBMITTED":
      return OrderState.SUBMITTED;
    case 4:
    case "IN_PROCESS":
      return OrderState.IN_PROCESS;
    case 5:
    case "DONE":
      return OrderState.DONE;
    case 6:
    case "WITHDRAWN":
      return OrderState.WITHDRAWN;
    case 7:
    case "CANCELLED":
      return OrderState.CANCELLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderState.UNRECOGNIZED;
  }
}

export function orderStateToJSON(object: OrderState): string {
  switch (object) {
    case OrderState.FAILED:
      return "FAILED";
    case OrderState.INVALID:
      return "INVALID";
    case OrderState.CREATED:
      return "CREATED";
    case OrderState.SUBMITTED:
      return "SUBMITTED";
    case OrderState.IN_PROCESS:
      return "IN_PROCESS";
    case OrderState.DONE:
      return "DONE";
    case OrderState.WITHDRAWN:
      return "WITHDRAWN";
    case OrderState.CANCELLED:
      return "CANCELLED";
    case OrderState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function orderStateToNumber(object: OrderState): number {
  switch (object) {
    case OrderState.FAILED:
      return 0;
    case OrderState.INVALID:
      return 1;
    case OrderState.CREATED:
      return 2;
    case OrderState.SUBMITTED:
      return 3;
    case OrderState.IN_PROCESS:
      return 4;
    case OrderState.DONE:
      return 5;
    case OrderState.WITHDRAWN:
      return 6;
    case OrderState.CANCELLED:
      return 7;
    case OrderState.UNRECOGNIZED:
    default:
      return -1;
  }
}

export enum FulfillmentInvoiceMode {
  INCLUDE = "INCLUDE",
  EXCLUDE = "EXCLUDE",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function fulfillmentInvoiceModeFromJSON(object: any): FulfillmentInvoiceMode {
  switch (object) {
    case 0:
    case "INCLUDE":
      return FulfillmentInvoiceMode.INCLUDE;
    case 1:
    case "EXCLUDE":
      return FulfillmentInvoiceMode.EXCLUDE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FulfillmentInvoiceMode.UNRECOGNIZED;
  }
}

export function fulfillmentInvoiceModeToJSON(object: FulfillmentInvoiceMode): string {
  switch (object) {
    case FulfillmentInvoiceMode.INCLUDE:
      return "INCLUDE";
    case FulfillmentInvoiceMode.EXCLUDE:
      return "EXCLUDE";
    case FulfillmentInvoiceMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function fulfillmentInvoiceModeToNumber(object: FulfillmentInvoiceMode): number {
  switch (object) {
    case FulfillmentInvoiceMode.INCLUDE:
      return 0;
    case FulfillmentInvoiceMode.EXCLUDE:
      return 1;
    case FulfillmentInvoiceMode.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface Item {
  id?: string | undefined;
  productId?: string | undefined;
  variantId?: string | undefined;
  quantity?:
    | number
    | undefined;
  /** Set by service */
  unitPrice?:
    | Price
    | undefined;
  /** Set by service */
  amount?: Amount | undefined;
}

/** Database Entity */
export interface Order {
  id?: string | undefined;
  meta?: Meta | undefined;
  userId?: string | undefined;
  customerId?: string | undefined;
  shopId?: string | undefined;
  items: Item[];
  /** Set by service */
  orderState?:
    | OrderState
    | undefined;
  /** Set by kafka */
  fulfillmentState?:
    | State
    | undefined;
  /** Set by kafka */
  paymentState?:
    | PaymentState
    | undefined;
  /** Set by service --- repeated in case of variant currency? */
  totalAmounts: Amount[];
  shippingAddress?: ShippingAddress | undefined;
  billingAddress?: BillingAddress | undefined;
  notificationEmail?: string | undefined;
  customerOrderNr?: string | undefined;
  customerRemark?: string | undefined;
  packagingPreferences?: Preferences | undefined;
}

export interface OrderIdList {
  ids: string[];
  subject?: Subject | undefined;
}

export interface OrderList {
  items: Order[];
  totalCount?: number | undefined;
  subject?: Subject | undefined;
}

export interface OrderListResponse {
  items: OrderResponse[];
  totalCount: number;
  operationStatus?: OperationStatus | undefined;
}

export interface OrderResponse {
  payload?: Order | undefined;
  status?: Status | undefined;
}

export interface Deleted {
  id: string;
}

export interface FulfillmentRequest {
  orderId?:
    | string
    | undefined;
  /** @TODO: not used! */
  exportType?:
    | string
    | undefined;
  /** @TODO: not used! */
  exportDescription?:
    | string
    | undefined;
  /** @TODO: not used! */
  invoiceNumber?: string | undefined;
  senderAddress?:
    | ShippingAddress
    | undefined;
  /** select all on empty */
  selectedItems: string[];
  data?: Any | undefined;
}

export interface FulfillmentRequestList {
  items: FulfillmentRequest[];
  totalCount?: number | undefined;
  subject?: Subject | undefined;
}

export interface InvoiceSection {
  orderId?:
    | string
    | undefined;
  /** select all on empty */
  selectedItems: string[];
  fulfillmentMode?:
    | FulfillmentInvoiceMode
    | undefined;
  /** includes all on empty */
  selectedFulfillments: InvoiceSection15[];
}

export interface InvoiceRequest {
  /** if given */
  invoiceNumber?: string | undefined;
  paymentHints: string[];
  sections: InvoiceSection[];
}

export interface InvoiceRequestList {
  items: InvoiceRequest[];
  totalCount?: number | undefined;
  subject?: Subject | undefined;
}

function createBaseItem(): Item {
  return {
    id: undefined,
    productId: undefined,
    variantId: undefined,
    quantity: undefined,
    unitPrice: undefined,
    amount: undefined,
  };
}

export const Item = {
  encode(message: Item, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.productId !== undefined) {
      writer.uint32(18).string(message.productId);
    }
    if (message.variantId !== undefined) {
      writer.uint32(26).string(message.variantId);
    }
    if (message.quantity !== undefined) {
      writer.uint32(32).int32(message.quantity);
    }
    if (message.unitPrice !== undefined) {
      Price.encode(message.unitPrice, writer.uint32(42).fork()).ldelim();
    }
    if (message.amount !== undefined) {
      Amount.encode(message.amount, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Item {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseItem();
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

          message.productId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.variantId = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.quantity = reader.int32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.unitPrice = Price.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.amount = Amount.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Item {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      productId: isSet(object.productId) ? String(object.productId) : undefined,
      variantId: isSet(object.variantId) ? String(object.variantId) : undefined,
      quantity: isSet(object.quantity) ? Number(object.quantity) : undefined,
      unitPrice: isSet(object.unitPrice) ? Price.fromJSON(object.unitPrice) : undefined,
      amount: isSet(object.amount) ? Amount.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: Item): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.productId !== undefined && (obj.productId = message.productId);
    message.variantId !== undefined && (obj.variantId = message.variantId);
    message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
    message.unitPrice !== undefined &&
      (obj.unitPrice = message.unitPrice ? Price.toJSON(message.unitPrice) : undefined);
    message.amount !== undefined && (obj.amount = message.amount ? Amount.toJSON(message.amount) : undefined);
    return obj;
  },

  create(base?: DeepPartial<Item>): Item {
    return Item.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Item>): Item {
    const message = createBaseItem();
    message.id = object.id ?? undefined;
    message.productId = object.productId ?? undefined;
    message.variantId = object.variantId ?? undefined;
    message.quantity = object.quantity ?? undefined;
    message.unitPrice = (object.unitPrice !== undefined && object.unitPrice !== null)
      ? Price.fromPartial(object.unitPrice)
      : undefined;
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Amount.fromPartial(object.amount)
      : undefined;
    return message;
  },
};

function createBaseOrder(): Order {
  return {
    id: undefined,
    meta: undefined,
    userId: undefined,
    customerId: undefined,
    shopId: undefined,
    items: [],
    orderState: undefined,
    fulfillmentState: undefined,
    paymentState: undefined,
    totalAmounts: [],
    shippingAddress: undefined,
    billingAddress: undefined,
    notificationEmail: undefined,
    customerOrderNr: undefined,
    customerRemark: undefined,
    packagingPreferences: undefined,
  };
}

export const Order = {
  encode(message: Order, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    if (message.userId !== undefined) {
      writer.uint32(26).string(message.userId);
    }
    if (message.customerId !== undefined) {
      writer.uint32(34).string(message.customerId);
    }
    if (message.shopId !== undefined) {
      writer.uint32(42).string(message.shopId);
    }
    for (const v of message.items) {
      Item.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.orderState !== undefined) {
      writer.uint32(56).int32(orderStateToNumber(message.orderState));
    }
    if (message.fulfillmentState !== undefined) {
      writer.uint32(64).int32(stateToNumber(message.fulfillmentState));
    }
    if (message.paymentState !== undefined) {
      writer.uint32(72).int32(paymentStateToNumber(message.paymentState));
    }
    for (const v of message.totalAmounts) {
      Amount.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.shippingAddress !== undefined) {
      ShippingAddress.encode(message.shippingAddress, writer.uint32(90).fork()).ldelim();
    }
    if (message.billingAddress !== undefined) {
      BillingAddress.encode(message.billingAddress, writer.uint32(98).fork()).ldelim();
    }
    if (message.notificationEmail !== undefined) {
      writer.uint32(106).string(message.notificationEmail);
    }
    if (message.customerOrderNr !== undefined) {
      writer.uint32(114).string(message.customerOrderNr);
    }
    if (message.customerRemark !== undefined) {
      writer.uint32(122).string(message.customerRemark);
    }
    if (message.packagingPreferences !== undefined) {
      Preferences.encode(message.packagingPreferences, writer.uint32(130).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Order {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrder();
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

          message.userId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.customerId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.shopId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.items.push(Item.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.orderState = orderStateFromJSON(reader.int32());
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.fulfillmentState = stateFromJSON(reader.int32());
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

          message.totalAmounts.push(Amount.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.shippingAddress = ShippingAddress.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.billingAddress = BillingAddress.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.notificationEmail = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.customerOrderNr = reader.string();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.customerRemark = reader.string();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.packagingPreferences = Preferences.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Order {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      customerId: isSet(object.customerId) ? String(object.customerId) : undefined,
      shopId: isSet(object.shopId) ? String(object.shopId) : undefined,
      items: Array.isArray(object?.items) ? object.items.map((e: any) => Item.fromJSON(e)) : [],
      orderState: isSet(object.orderState) ? orderStateFromJSON(object.orderState) : undefined,
      fulfillmentState: isSet(object.fulfillmentState) ? stateFromJSON(object.fulfillmentState) : undefined,
      paymentState: isSet(object.paymentState) ? paymentStateFromJSON(object.paymentState) : undefined,
      totalAmounts: Array.isArray(object?.totalAmounts) ? object.totalAmounts.map((e: any) => Amount.fromJSON(e)) : [],
      shippingAddress: isSet(object.shippingAddress) ? ShippingAddress.fromJSON(object.shippingAddress) : undefined,
      billingAddress: isSet(object.billingAddress) ? BillingAddress.fromJSON(object.billingAddress) : undefined,
      notificationEmail: isSet(object.notificationEmail) ? String(object.notificationEmail) : undefined,
      customerOrderNr: isSet(object.customerOrderNr) ? String(object.customerOrderNr) : undefined,
      customerRemark: isSet(object.customerRemark) ? String(object.customerRemark) : undefined,
      packagingPreferences: isSet(object.packagingPreferences)
        ? Preferences.fromJSON(object.packagingPreferences)
        : undefined,
    };
  },

  toJSON(message: Order): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.userId !== undefined && (obj.userId = message.userId);
    message.customerId !== undefined && (obj.customerId = message.customerId);
    message.shopId !== undefined && (obj.shopId = message.shopId);
    if (message.items) {
      obj.items = message.items.map((e) => e ? Item.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.orderState !== undefined &&
      (obj.orderState = message.orderState !== undefined ? orderStateToJSON(message.orderState) : undefined);
    message.fulfillmentState !== undefined &&
      (obj.fulfillmentState = message.fulfillmentState !== undefined
        ? stateToJSON(message.fulfillmentState)
        : undefined);
    message.paymentState !== undefined &&
      (obj.paymentState = message.paymentState !== undefined ? paymentStateToJSON(message.paymentState) : undefined);
    if (message.totalAmounts) {
      obj.totalAmounts = message.totalAmounts.map((e) => e ? Amount.toJSON(e) : undefined);
    } else {
      obj.totalAmounts = [];
    }
    message.shippingAddress !== undefined &&
      (obj.shippingAddress = message.shippingAddress ? ShippingAddress.toJSON(message.shippingAddress) : undefined);
    message.billingAddress !== undefined &&
      (obj.billingAddress = message.billingAddress ? BillingAddress.toJSON(message.billingAddress) : undefined);
    message.notificationEmail !== undefined && (obj.notificationEmail = message.notificationEmail);
    message.customerOrderNr !== undefined && (obj.customerOrderNr = message.customerOrderNr);
    message.customerRemark !== undefined && (obj.customerRemark = message.customerRemark);
    message.packagingPreferences !== undefined && (obj.packagingPreferences = message.packagingPreferences
      ? Preferences.toJSON(message.packagingPreferences)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<Order>): Order {
    return Order.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Order>): Order {
    const message = createBaseOrder();
    message.id = object.id ?? undefined;
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    message.userId = object.userId ?? undefined;
    message.customerId = object.customerId ?? undefined;
    message.shopId = object.shopId ?? undefined;
    message.items = object.items?.map((e) => Item.fromPartial(e)) || [];
    message.orderState = object.orderState ?? undefined;
    message.fulfillmentState = object.fulfillmentState ?? undefined;
    message.paymentState = object.paymentState ?? undefined;
    message.totalAmounts = object.totalAmounts?.map((e) => Amount.fromPartial(e)) || [];
    message.shippingAddress = (object.shippingAddress !== undefined && object.shippingAddress !== null)
      ? ShippingAddress.fromPartial(object.shippingAddress)
      : undefined;
    message.billingAddress = (object.billingAddress !== undefined && object.billingAddress !== null)
      ? BillingAddress.fromPartial(object.billingAddress)
      : undefined;
    message.notificationEmail = object.notificationEmail ?? undefined;
    message.customerOrderNr = object.customerOrderNr ?? undefined;
    message.customerRemark = object.customerRemark ?? undefined;
    message.packagingPreferences = (object.packagingPreferences !== undefined && object.packagingPreferences !== null)
      ? Preferences.fromPartial(object.packagingPreferences)
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderIdList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ids.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
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
  return { items: [], totalCount: undefined, subject: undefined };
}

export const OrderList = {
  encode(message: OrderList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== undefined) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(Order.decode(reader, reader.uint32()));
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

  fromJSON(object: any): OrderList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => Order.fromJSON(e)) : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : undefined,
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
    message.totalCount = object.totalCount ?? undefined;
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(OrderResponse.decode(reader, reader.uint32()));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payload = Order.decode(reader, reader.uint32());
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

function createBaseFulfillmentRequest(): FulfillmentRequest {
  return {
    orderId: undefined,
    exportType: undefined,
    exportDescription: undefined,
    invoiceNumber: undefined,
    senderAddress: undefined,
    selectedItems: [],
    data: undefined,
  };
}

export const FulfillmentRequest = {
  encode(message: FulfillmentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderId !== undefined) {
      writer.uint32(10).string(message.orderId);
    }
    if (message.exportType !== undefined) {
      writer.uint32(18).string(message.exportType);
    }
    if (message.exportDescription !== undefined) {
      writer.uint32(26).string(message.exportDescription);
    }
    if (message.invoiceNumber !== undefined) {
      writer.uint32(34).string(message.invoiceNumber);
    }
    if (message.senderAddress !== undefined) {
      ShippingAddress.encode(message.senderAddress, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.selectedItems) {
      writer.uint32(50).string(v!);
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FulfillmentRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFulfillmentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.orderId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.exportType = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.exportDescription = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.invoiceNumber = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.senderAddress = ShippingAddress.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.selectedItems.push(reader.string());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.data = Any.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FulfillmentRequest {
    return {
      orderId: isSet(object.orderId) ? String(object.orderId) : undefined,
      exportType: isSet(object.exportType) ? String(object.exportType) : undefined,
      exportDescription: isSet(object.exportDescription) ? String(object.exportDescription) : undefined,
      invoiceNumber: isSet(object.invoiceNumber) ? String(object.invoiceNumber) : undefined,
      senderAddress: isSet(object.senderAddress) ? ShippingAddress.fromJSON(object.senderAddress) : undefined,
      selectedItems: Array.isArray(object?.selectedItems) ? object.selectedItems.map((e: any) => String(e)) : [],
      data: isSet(object.data) ? Any.fromJSON(object.data) : undefined,
    };
  },

  toJSON(message: FulfillmentRequest): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = message.orderId);
    message.exportType !== undefined && (obj.exportType = message.exportType);
    message.exportDescription !== undefined && (obj.exportDescription = message.exportDescription);
    message.invoiceNumber !== undefined && (obj.invoiceNumber = message.invoiceNumber);
    message.senderAddress !== undefined &&
      (obj.senderAddress = message.senderAddress ? ShippingAddress.toJSON(message.senderAddress) : undefined);
    if (message.selectedItems) {
      obj.selectedItems = message.selectedItems.map((e) => e);
    } else {
      obj.selectedItems = [];
    }
    message.data !== undefined && (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    return obj;
  },

  create(base?: DeepPartial<FulfillmentRequest>): FulfillmentRequest {
    return FulfillmentRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FulfillmentRequest>): FulfillmentRequest {
    const message = createBaseFulfillmentRequest();
    message.orderId = object.orderId ?? undefined;
    message.exportType = object.exportType ?? undefined;
    message.exportDescription = object.exportDescription ?? undefined;
    message.invoiceNumber = object.invoiceNumber ?? undefined;
    message.senderAddress = (object.senderAddress !== undefined && object.senderAddress !== null)
      ? ShippingAddress.fromPartial(object.senderAddress)
      : undefined;
    message.selectedItems = object.selectedItems?.map((e) => e) || [];
    message.data = (object.data !== undefined && object.data !== null) ? Any.fromPartial(object.data) : undefined;
    return message;
  },
};

function createBaseFulfillmentRequestList(): FulfillmentRequestList {
  return { items: [], totalCount: undefined, subject: undefined };
}

export const FulfillmentRequestList = {
  encode(message: FulfillmentRequestList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      FulfillmentRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== undefined) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FulfillmentRequestList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFulfillmentRequestList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(FulfillmentRequest.decode(reader, reader.uint32()));
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

  fromJSON(object: any): FulfillmentRequestList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => FulfillmentRequest.fromJSON(e)) : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : undefined,
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
    message.totalCount = object.totalCount ?? undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseInvoiceSection(): InvoiceSection {
  return { orderId: undefined, selectedItems: [], fulfillmentMode: undefined, selectedFulfillments: [] };
}

export const InvoiceSection = {
  encode(message: InvoiceSection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderId !== undefined) {
      writer.uint32(10).string(message.orderId);
    }
    for (const v of message.selectedItems) {
      writer.uint32(18).string(v!);
    }
    if (message.fulfillmentMode !== undefined) {
      writer.uint32(24).int32(fulfillmentInvoiceModeToNumber(message.fulfillmentMode));
    }
    for (const v of message.selectedFulfillments) {
      InvoiceSection15.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvoiceSection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvoiceSection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.orderId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.selectedItems.push(reader.string());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.fulfillmentMode = fulfillmentInvoiceModeFromJSON(reader.int32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.selectedFulfillments.push(InvoiceSection15.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InvoiceSection {
    return {
      orderId: isSet(object.orderId) ? String(object.orderId) : undefined,
      selectedItems: Array.isArray(object?.selectedItems) ? object.selectedItems.map((e: any) => String(e)) : [],
      fulfillmentMode: isSet(object.fulfillmentMode)
        ? fulfillmentInvoiceModeFromJSON(object.fulfillmentMode)
        : undefined,
      selectedFulfillments: Array.isArray(object?.selectedFulfillments)
        ? object.selectedFulfillments.map((e: any) => InvoiceSection.fromJSON(e))
        : [],
    };
  },

  toJSON(message: InvoiceSection): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = message.orderId);
    if (message.selectedItems) {
      obj.selectedItems = message.selectedItems.map((e) => e);
    } else {
      obj.selectedItems = [];
    }
    message.fulfillmentMode !== undefined && (obj.fulfillmentMode = message.fulfillmentMode !== undefined
      ? fulfillmentInvoiceModeToJSON(message.fulfillmentMode)
      : undefined);
    if (message.selectedFulfillments) {
      obj.selectedFulfillments = message.selectedFulfillments.map((e) => e ? InvoiceSection15.toJSON(e) : undefined);
    } else {
      obj.selectedFulfillments = [];
    }
    return obj;
  },

  create(base?: DeepPartial<InvoiceSection>): InvoiceSection {
    return InvoiceSection.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<InvoiceSection>): InvoiceSection {
    const message = createBaseInvoiceSection();
    message.orderId = object.orderId ?? undefined;
    message.selectedItems = object.selectedItems?.map((e) => e) || [];
    message.fulfillmentMode = object.fulfillmentMode ?? undefined;
    message.selectedFulfillments = object.selectedFulfillments?.map((e) => InvoiceSection15.fromPartial(e)) || [];
    return message;
  },
};

function createBaseInvoiceRequest(): InvoiceRequest {
  return { invoiceNumber: undefined, paymentHints: [], sections: [] };
}

export const InvoiceRequest = {
  encode(message: InvoiceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.invoiceNumber !== undefined) {
      writer.uint32(10).string(message.invoiceNumber);
    }
    for (const v of message.paymentHints) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.sections) {
      InvoiceSection.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvoiceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvoiceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.invoiceNumber = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.paymentHints.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sections.push(InvoiceSection.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InvoiceRequest {
    return {
      invoiceNumber: isSet(object.invoiceNumber) ? String(object.invoiceNumber) : undefined,
      paymentHints: Array.isArray(object?.paymentHints) ? object.paymentHints.map((e: any) => String(e)) : [],
      sections: Array.isArray(object?.sections) ? object.sections.map((e: any) => InvoiceSection.fromJSON(e)) : [],
    };
  },

  toJSON(message: InvoiceRequest): unknown {
    const obj: any = {};
    message.invoiceNumber !== undefined && (obj.invoiceNumber = message.invoiceNumber);
    if (message.paymentHints) {
      obj.paymentHints = message.paymentHints.map((e) => e);
    } else {
      obj.paymentHints = [];
    }
    if (message.sections) {
      obj.sections = message.sections.map((e) => e ? InvoiceSection.toJSON(e) : undefined);
    } else {
      obj.sections = [];
    }
    return obj;
  },

  create(base?: DeepPartial<InvoiceRequest>): InvoiceRequest {
    return InvoiceRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<InvoiceRequest>): InvoiceRequest {
    const message = createBaseInvoiceRequest();
    message.invoiceNumber = object.invoiceNumber ?? undefined;
    message.paymentHints = object.paymentHints?.map((e) => e) || [];
    message.sections = object.sections?.map((e) => InvoiceSection.fromPartial(e)) || [];
    return message;
  },
};

function createBaseInvoiceRequestList(): InvoiceRequestList {
  return { items: [], totalCount: undefined, subject: undefined };
}

export const InvoiceRequestList = {
  encode(message: InvoiceRequestList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      InvoiceRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== undefined) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvoiceRequestList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvoiceRequestList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(InvoiceRequest.decode(reader, reader.uint32()));
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

  fromJSON(object: any): InvoiceRequestList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => InvoiceRequest.fromJSON(e)) : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: InvoiceRequestList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? InvoiceRequest.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = Math.round(message.totalCount));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<InvoiceRequestList>): InvoiceRequestList {
    return InvoiceRequestList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<InvoiceRequestList>): InvoiceRequestList {
    const message = createBaseInvoiceRequestList();
    message.items = object.items?.map((e) => InvoiceRequest.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? undefined;
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
      options: { _unknownFields: { 248008: [Buffer.from([1])] } },
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
    /** Requires Invoice Service */
    createInvoice: {
      name: "CreateInvoice",
      requestType: InvoiceRequestList,
      requestStream: false,
      responseType: InvoiceListResponse,
      responseStream: false,
      options: {},
    },
    /** Requires Invoice Service */
    triggerInvoice: {
      name: "TriggerInvoice",
      requestType: InvoiceRequestList,
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
  /** Requires Invoice Service */
  createInvoice(
    request: InvoiceRequestList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<InvoiceListResponse>>;
  /** Requires Invoice Service */
  triggerInvoice(
    request: InvoiceRequestList,
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
  /** Requires Invoice Service */
  createInvoice(
    request: DeepPartial<InvoiceRequestList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<InvoiceListResponse>;
  /** Requires Invoice Service */
  triggerInvoice(
    request: DeepPartial<InvoiceRequestList>,
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
      "google/protobuf/any.proto",
      "io/restorecommerce/resource_base.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/options.proto",
      "io/restorecommerce/address.proto",
      "io/restorecommerce/amount.proto",
      "io/restorecommerce/price.proto",
      "io/restorecommerce/country.proto",
      "io/restorecommerce/fulfillment.proto",
      "io/restorecommerce/fulfillment_product.proto",
      "io/restorecommerce/invoice.proto",
      "io/restorecommerce/shop.proto",
    ],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "Item",
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
        "name": "product_id",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
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
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "variantId",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "quantity",
        "number": 4,
        "label": 1,
        "type": 5,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "quantity",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "unit_price",
        "number": 5,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.price.Price",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "unitPrice",
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
        "oneofIndex": 5,
        "jsonName": "amount",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "_id", "options": undefined },
        { "name": "_product_id", "options": undefined },
        { "name": "_variant_id", "options": undefined },
        { "name": "_quantity", "options": undefined },
        { "name": "_unit_price", "options": undefined },
        { "name": "_amount", "options": undefined },
      ],
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
        "name": "user_id",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
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
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
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
        "number": 5,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
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
        "name": "items",
        "number": 6,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.order.Item",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "items",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "order_state",
        "number": 7,
        "label": 1,
        "type": 14,
        "typeName": ".io.restorecommerce.order.OrderState",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 5,
        "jsonName": "orderState",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "fulfillment_state",
        "number": 8,
        "label": 1,
        "type": 14,
        "typeName": ".io.restorecommerce.fulfillment.State",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 6,
        "jsonName": "fulfillmentState",
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
        "name": "total_amounts",
        "number": 10,
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
        "name": "shipping_address",
        "number": 11,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.address.ShippingAddress",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 8,
        "jsonName": "shippingAddress",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "billing_address",
        "number": 12,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.address.BillingAddress",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 9,
        "jsonName": "billingAddress",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "notification_email",
        "number": 13,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 10,
        "jsonName": "notificationEmail",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "customer_order_nr",
        "number": 14,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 11,
        "jsonName": "customerOrderNr",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "customer_remark",
        "number": 15,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 12,
        "jsonName": "customerRemark",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "packaging_preferences",
        "number": 16,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment_product.Preferences",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 13,
        "jsonName": "packagingPreferences",
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
        { "name": "_user_id", "options": undefined },
        { "name": "_customer_id", "options": undefined },
        { "name": "_shop_id", "options": undefined },
        { "name": "_order_state", "options": undefined },
        { "name": "_fulfillment_state", "options": undefined },
        { "name": "_payment_state", "options": undefined },
        { "name": "_shipping_address", "options": undefined },
        { "name": "_billing_address", "options": undefined },
        { "name": "_notification_email", "options": undefined },
        { "name": "_customer_order_nr", "options": undefined },
        { "name": "_customer_remark", "options": undefined },
        { "name": "_packaging_preferences", "options": undefined },
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
      "name": "FulfillmentRequest",
      "field": [{
        "name": "order_id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "orderId",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "export_type",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "exportType",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "export_description",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "exportDescription",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "invoice_number",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "invoiceNumber",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "sender_address",
        "number": 5,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.address.ShippingAddress",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "senderAddress",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "selected_items",
        "number": 6,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "selectedItems",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "data",
        "number": 7,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.Any",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "data",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "_order_id", "options": undefined },
        { "name": "_export_type", "options": undefined },
        { "name": "_export_description", "options": undefined },
        { "name": "_invoice_number", "options": undefined },
        { "name": "_sender_address", "options": undefined },
      ],
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
      "name": "InvoiceSection",
      "field": [{
        "name": "order_id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "orderId",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "selected_items",
        "number": 2,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "selectedItems",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "fulfillment_mode",
        "number": 3,
        "label": 1,
        "type": 14,
        "typeName": ".io.restorecommerce.order.FulfillmentInvoiceMode",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "fulfillmentMode",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "selected_fulfillments",
        "number": 4,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment.InvoiceSection",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "selectedFulfillments",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_order_id", "options": undefined }, {
        "name": "_fulfillment_mode",
        "options": undefined,
      }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "InvoiceRequest",
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
        "proto3Optional": true,
      }, {
        "name": "payment_hints",
        "number": 2,
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
        "name": "sections",
        "number": 3,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.order.InvoiceSection",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "sections",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_invoice_number", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "InvoiceRequestList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.order.InvoiceRequest",
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
    }],
    "enumType": [{
      "name": "OrderState",
      "value": [
        { "name": "FAILED", "number": 0, "options": undefined },
        { "name": "INVALID", "number": 1, "options": undefined },
        { "name": "CREATED", "number": 2, "options": undefined },
        { "name": "SUBMITTED", "number": 3, "options": undefined },
        { "name": "IN_PROCESS", "number": 4, "options": undefined },
        { "name": "DONE", "number": 5, "options": undefined },
        { "name": "WITHDRAWN", "number": 6, "options": undefined },
        { "name": "CANCELLED", "number": 7, "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "FulfillmentInvoiceMode",
      "value": [{ "name": "INCLUDE", "number": 0, "options": undefined }, {
        "name": "EXCLUDE",
        "number": 1,
        "options": undefined,
      }],
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
      }, {
        "name": "CreateInvoice",
        "inputType": ".io.restorecommerce.order.InvoiceRequestList",
        "outputType": ".io.restorecommerce.invoice.InvoiceListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "TriggerInvoice",
        "inputType": ".io.restorecommerce.order.InvoiceRequestList",
        "outputType": ".io.restorecommerce.status.StatusListResponse",
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
        "span": [20, 0, 39],
        "leadingComments": " Used by resolvers\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 9],
        "span": [37, 2, 129],
        "leadingComments": " Requires Fulfillment Service\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 10],
        "span": [39, 2, 114],
        "leadingComments": " Requires Fulfillment Service\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 11],
        "span": [41, 2, 105],
        "leadingComments": " Requires Fulfillment Service\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 12],
        "span": [44, 2, 98],
        "leadingComments": " Requires Invoice Service\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 13],
        "span": [46, 2, 97],
        "leadingComments": " Requires Invoice Service\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0, 2, 4],
        "span": [78, 2, 57],
        "leadingComments": "",
        "trailingComments": "Set by service\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0, 2, 5],
        "span": [79, 2, 55],
        "leadingComments": "",
        "trailingComments": "Set by service\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1],
        "span": [85, 0, 134, 1],
        "leadingComments": "*\nDatabase Entity\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 6],
        "span": [124, 2, 38],
        "leadingComments": "",
        "trailingComments": " Set by service\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 7],
        "span": [125, 2, 70],
        "leadingComments": "",
        "trailingComments": " Set by kafka\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 8],
        "span": [126, 2, 69],
        "leadingComments": "",
        "trailingComments": " Set by kafka\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 9],
        "span": [127, 2, 63],
        "leadingComments": "",
        "trailingComments": " Set by service --- repeated in case of variant currency?\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 7, 2, 1],
        "span": [164, 2, 34],
        "leadingComments": "",
        "trailingComments": " @TODO: not used!\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 7, 2, 2],
        "span": [165, 2, 41],
        "leadingComments": "",
        "trailingComments": " @TODO: not used!\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 7, 2, 3],
        "span": [166, 2, 37],
        "leadingComments": "",
        "trailingComments": " @TODO: not used!\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 7, 2, 5],
        "span": [168, 2, 37],
        "leadingComments": "",
        "trailingComments": " select all on empty\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 9, 2, 1],
        "span": [180, 2, 37],
        "leadingComments": "",
        "trailingComments": " select all on empty\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 9, 2, 3],
        "span": [182, 2, 83],
        "leadingComments": "",
        "trailingComments": " includes all on empty\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 10, 2, 0],
        "span": [186, 2, 37],
        "leadingComments": "",
        "trailingComments": " if given\n",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {
    ".io.restorecommerce.order.OrderState": OrderState,
    ".io.restorecommerce.order.FulfillmentInvoiceMode": FulfillmentInvoiceMode,
    ".io.restorecommerce.order.Item": Item,
    ".io.restorecommerce.order.Order": Order,
    ".io.restorecommerce.order.OrderIdList": OrderIdList,
    ".io.restorecommerce.order.OrderList": OrderList,
    ".io.restorecommerce.order.OrderListResponse": OrderListResponse,
    ".io.restorecommerce.order.OrderResponse": OrderResponse,
    ".io.restorecommerce.order.Deleted": Deleted,
    ".io.restorecommerce.order.FulfillmentRequest": FulfillmentRequest,
    ".io.restorecommerce.order.FulfillmentRequestList": FulfillmentRequestList,
    ".io.restorecommerce.order.InvoiceSection": InvoiceSection,
    ".io.restorecommerce.order.InvoiceRequest": InvoiceRequest,
    ".io.restorecommerce.order.InvoiceRequestList": InvoiceRequestList,
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
  ],
  options: {
    messages: {
      "Item": {
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
      "Order": {
        options: {
          "kafka_subscriber": KafkaSubscription.decode(
            Buffer.from(
              "CgZvcmRlcnMSImlvLnJlc3RvcmVjb21tZXJjZS5vcmRlcnMucmVzb3VyY2UaDG9yZGVyQ3JlYXRlZCIMb3JkZXJVcGRhdGVkKgxvcmRlckRlbGV0ZWQ=",
              "base64",
            ),
          ),
        },
        fields: {
          "user_id": {
            "resolver": Resolver.decode(
              Buffer.from(
                "CiUuaW8ucmVzdG9yZWNvbW1lcmNlLmN1c3RvbWVyLkN1c3RvbWVyEgttYXN0ZXJfZGF0YRoIY3VzdG9tZXIiBFJlYWQqCGN1c3RvbWVy",
                "base64",
              ),
            ),
          },
          "customer_id": {
            "resolver": Resolver.decode(
              Buffer.from(
                "CiUuaW8ucmVzdG9yZWNvbW1lcmNlLmN1c3RvbWVyLkN1c3RvbWVyEgttYXN0ZXJfZGF0YRoIY3VzdG9tZXIiBFJlYWQqCGN1c3RvbWVy",
                "base64",
              ),
            ),
          },
          "shop_id": {
            "resolver": Resolver.decode(
              Buffer.from(
                "Ch0uaW8ucmVzdG9yZWNvbW1lcmNlLnNob3AuU2hvcBILbWFzdGVyX2RhdGEaBHNob3AiBFJlYWQqBHNob3A=",
                "base64",
              ),
            ),
          },
        },
      },
    },
    services: { "OrderService": { options: undefined, methods: { "Read": { "is_query": true } } } },
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
