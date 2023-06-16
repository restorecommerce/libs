/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { Any, protoMetadata as protoMetadata1 } from "../../google/protobuf/any";
import { BillingAddress, protoMetadata as protoMetadata7, ShippingAddress } from "./address";
import { protoMetadata as protoMetadata4, Subject } from "./auth";
import { protoMetadata as protoMetadata9 } from "./country";
import {
  FulfillmentListResponse,
  protoMetadata as protoMetadata10,
  State as State13,
  stateFromJSON as stateFromJSON17,
  stateToJSON as stateToJSON19,
  stateToNumber as stateToNumber15,
} from "./fulfillment";
import { PackingSolutionListResponse, Preferences, protoMetadata as protoMetadata11 } from "./fulfillment_product";
import {
  InvoiceListResponse,
  protoMetadata as protoMetadata12,
  State as State14,
  stateFromJSON as stateFromJSON18,
  stateToJSON as stateToJSON20,
  stateToNumber as stateToNumber16,
} from "./invoice";
import { Meta, protoMetadata as protoMetadata3 } from "./meta";
import { KafkaSubscription, protoMetadata as protoMetadata6, Resolver } from "./options";
import { DeleteRequest, DeleteResponse, protoMetadata as protoMetadata2, ReadRequest } from "./resource_base";
import { OperationStatus, protoMetadata as protoMetadata5, Status, StatusListResponse } from "./status";
import { protoMetadata as protoMetadata8, VAT } from "./tax";

export const protobufPackage = "io.restorecommerce.order";

export enum State {
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
    case "SUBMITTED":
      return State.SUBMITTED;
    case 4:
    case "IN_PROCESS":
      return State.IN_PROCESS;
    case 5:
    case "DONE":
      return State.DONE;
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
    case State.SUBMITTED:
      return "SUBMITTED";
    case State.IN_PROCESS:
      return "IN_PROCESS";
    case State.DONE:
      return "DONE";
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
    case State.SUBMITTED:
      return 3;
    case State.IN_PROCESS:
      return 4;
    case State.DONE:
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

export interface Item {
  id?: string | undefined;
  product_id?: string | undefined;
  variant_id?: string | undefined;
  quantity?:
    | number
    | undefined;
  /** Set by service */
  unit_price?:
    | number
    | undefined;
  /** Set by service */
  gross?:
    | number
    | undefined;
  /** Set by service */
  net?:
    | number
    | undefined;
  /** Set by service */
  vats: VAT[];
}

/** Database Entity */
export interface Order {
  id?: string | undefined;
  meta?: Meta | undefined;
  user_id?: string | undefined;
  customer_id?: string | undefined;
  shop_id?: string | undefined;
  items: Item[];
  /** Set by service */
  order_state?:
    | State
    | undefined;
  /** Set by kafka */
  fulfillment_state?:
    | State13
    | undefined;
  /** Set by kafka */
  invoice_state?:
    | State14
    | undefined;
  /** Set by service */
  total_gross?:
    | number
    | undefined;
  /** Set by service */
  total_net?:
    | number
    | undefined;
  /** Set by service */
  total_vats: VAT[];
  shipping_address?: ShippingAddress | undefined;
  billing_address?: BillingAddress | undefined;
  billing_email?: string | undefined;
  notification_email?: string | undefined;
  customer_order_nr?: string | undefined;
  customer_remark?: string | undefined;
  packaging_preferences?: Preferences | undefined;
}

export interface OrderIdList {
  ids: string[];
  subject?: Subject;
}

export interface OrderList {
  items: Order[];
  total_count?: number | undefined;
  subject?: Subject;
}

export interface OrderListResponse {
  items: OrderResponse[];
  total_count: number;
  operation_status?: OperationStatus;
}

export interface OrderResponse {
  payload?: Order;
  status?: Status;
}

export interface Deleted {
  id: string;
}

export interface FulfillmentRequest {
  order_id?:
    | string
    | undefined;
  /** @TODO: not used! */
  export_type?:
    | string
    | undefined;
  /** @TODO: not used! */
  export_description?:
    | string
    | undefined;
  /** @TODO: not used! */
  invoice_number?: string | undefined;
  sender_address?:
    | ShippingAddress
    | undefined;
  /** includes all if empty */
  include_items: string[];
  data?: Any;
}

export interface FulfillmentRequestList {
  items: FulfillmentRequest[];
  total_count?: number | undefined;
  subject?: Subject;
}

export interface InvoiceRequest {
  /** if given */
  invoice_number?: string | undefined;
  order_id?:
    | string
    | undefined;
  /** includes all on empty */
  included_items: string[];
  /** includes all on empty */
  included_fulfillments?: string | undefined;
}

export interface InvoiceRequestList {
  items: InvoiceRequest[];
  total_count?: number | undefined;
  subject?: Subject;
}

function createBaseItem(): Item {
  return {
    id: undefined,
    product_id: undefined,
    variant_id: undefined,
    quantity: undefined,
    unit_price: undefined,
    gross: undefined,
    net: undefined,
    vats: [],
  };
}

export const Item = {
  encode(message: Item, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.product_id !== undefined) {
      writer.uint32(18).string(message.product_id);
    }
    if (message.variant_id !== undefined) {
      writer.uint32(26).string(message.variant_id);
    }
    if (message.quantity !== undefined) {
      writer.uint32(32).int32(message.quantity);
    }
    if (message.unit_price !== undefined) {
      writer.uint32(41).double(message.unit_price);
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Item {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.product_id = reader.string();
          break;
        case 3:
          message.variant_id = reader.string();
          break;
        case 4:
          message.quantity = reader.int32();
          break;
        case 5:
          message.unit_price = reader.double();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Item {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      product_id: isSet(object.product_id) ? String(object.product_id) : undefined,
      variant_id: isSet(object.variant_id) ? String(object.variant_id) : undefined,
      quantity: isSet(object.quantity) ? Number(object.quantity) : undefined,
      unit_price: isSet(object.unit_price) ? Number(object.unit_price) : undefined,
      gross: isSet(object.gross) ? Number(object.gross) : undefined,
      net: isSet(object.net) ? Number(object.net) : undefined,
      vats: Array.isArray(object?.vats) ? object.vats.map((e: any) => VAT.fromJSON(e)) : [],
    };
  },

  toJSON(message: Item): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.product_id !== undefined && (obj.product_id = message.product_id);
    message.variant_id !== undefined && (obj.variant_id = message.variant_id);
    message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
    message.unit_price !== undefined && (obj.unit_price = message.unit_price);
    message.gross !== undefined && (obj.gross = message.gross);
    message.net !== undefined && (obj.net = message.net);
    if (message.vats) {
      obj.vats = message.vats.map((e) => e ? VAT.toJSON(e) : undefined);
    } else {
      obj.vats = [];
    }
    return obj;
  },

  create(base?: DeepPartial<Item>): Item {
    return Item.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Item>): Item {
    const message = createBaseItem();
    message.id = object.id ?? undefined;
    message.product_id = object.product_id ?? undefined;
    message.variant_id = object.variant_id ?? undefined;
    message.quantity = object.quantity ?? undefined;
    message.unit_price = object.unit_price ?? undefined;
    message.gross = object.gross ?? undefined;
    message.net = object.net ?? undefined;
    message.vats = object.vats?.map((e) => VAT.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOrder(): Order {
  return {
    id: undefined,
    meta: undefined,
    user_id: undefined,
    customer_id: undefined,
    shop_id: undefined,
    items: [],
    order_state: undefined,
    fulfillment_state: undefined,
    invoice_state: undefined,
    total_gross: undefined,
    total_net: undefined,
    total_vats: [],
    shipping_address: undefined,
    billing_address: undefined,
    billing_email: undefined,
    notification_email: undefined,
    customer_order_nr: undefined,
    customer_remark: undefined,
    packaging_preferences: undefined,
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
    if (message.user_id !== undefined) {
      writer.uint32(26).string(message.user_id);
    }
    if (message.customer_id !== undefined) {
      writer.uint32(34).string(message.customer_id);
    }
    if (message.shop_id !== undefined) {
      writer.uint32(42).string(message.shop_id);
    }
    for (const v of message.items) {
      Item.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.order_state !== undefined) {
      writer.uint32(56).int32(stateToNumber(message.order_state));
    }
    if (message.fulfillment_state !== undefined) {
      writer.uint32(64).int32(stateToNumber15(message.fulfillment_state));
    }
    if (message.invoice_state !== undefined) {
      writer.uint32(72).int32(stateToNumber16(message.invoice_state));
    }
    if (message.total_gross !== undefined) {
      writer.uint32(81).double(message.total_gross);
    }
    if (message.total_net !== undefined) {
      writer.uint32(89).double(message.total_net);
    }
    for (const v of message.total_vats) {
      VAT.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.shipping_address !== undefined) {
      ShippingAddress.encode(message.shipping_address, writer.uint32(106).fork()).ldelim();
    }
    if (message.billing_address !== undefined) {
      BillingAddress.encode(message.billing_address, writer.uint32(114).fork()).ldelim();
    }
    if (message.billing_email !== undefined) {
      writer.uint32(122).string(message.billing_email);
    }
    if (message.notification_email !== undefined) {
      writer.uint32(130).string(message.notification_email);
    }
    if (message.customer_order_nr !== undefined) {
      writer.uint32(138).string(message.customer_order_nr);
    }
    if (message.customer_remark !== undefined) {
      writer.uint32(146).string(message.customer_remark);
    }
    if (message.packaging_preferences !== undefined) {
      Preferences.encode(message.packaging_preferences, writer.uint32(154).fork()).ldelim();
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
          message.user_id = reader.string();
          break;
        case 4:
          message.customer_id = reader.string();
          break;
        case 5:
          message.shop_id = reader.string();
          break;
        case 6:
          message.items.push(Item.decode(reader, reader.uint32()));
          break;
        case 7:
          message.order_state = stateFromJSON(reader.int32());
          break;
        case 8:
          message.fulfillment_state = stateFromJSON17(reader.int32());
          break;
        case 9:
          message.invoice_state = stateFromJSON18(reader.int32());
          break;
        case 10:
          message.total_gross = reader.double();
          break;
        case 11:
          message.total_net = reader.double();
          break;
        case 12:
          message.total_vats.push(VAT.decode(reader, reader.uint32()));
          break;
        case 13:
          message.shipping_address = ShippingAddress.decode(reader, reader.uint32());
          break;
        case 14:
          message.billing_address = BillingAddress.decode(reader, reader.uint32());
          break;
        case 15:
          message.billing_email = reader.string();
          break;
        case 16:
          message.notification_email = reader.string();
          break;
        case 17:
          message.customer_order_nr = reader.string();
          break;
        case 18:
          message.customer_remark = reader.string();
          break;
        case 19:
          message.packaging_preferences = Preferences.decode(reader, reader.uint32());
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
      id: isSet(object.id) ? String(object.id) : undefined,
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      user_id: isSet(object.user_id) ? String(object.user_id) : undefined,
      customer_id: isSet(object.customer_id) ? String(object.customer_id) : undefined,
      shop_id: isSet(object.shop_id) ? String(object.shop_id) : undefined,
      items: Array.isArray(object?.items) ? object.items.map((e: any) => Item.fromJSON(e)) : [],
      order_state: isSet(object.order_state) ? stateFromJSON(object.order_state) : undefined,
      fulfillment_state: isSet(object.fulfillment_state) ? stateFromJSON17(object.fulfillment_state) : undefined,
      invoice_state: isSet(object.invoice_state) ? stateFromJSON18(object.invoice_state) : undefined,
      total_gross: isSet(object.total_gross) ? Number(object.total_gross) : undefined,
      total_net: isSet(object.total_net) ? Number(object.total_net) : undefined,
      total_vats: Array.isArray(object?.total_vats) ? object.total_vats.map((e: any) => VAT.fromJSON(e)) : [],
      shipping_address: isSet(object.shipping_address) ? ShippingAddress.fromJSON(object.shipping_address) : undefined,
      billing_address: isSet(object.billing_address) ? BillingAddress.fromJSON(object.billing_address) : undefined,
      billing_email: isSet(object.billing_email) ? String(object.billing_email) : undefined,
      notification_email: isSet(object.notification_email) ? String(object.notification_email) : undefined,
      customer_order_nr: isSet(object.customer_order_nr) ? String(object.customer_order_nr) : undefined,
      customer_remark: isSet(object.customer_remark) ? String(object.customer_remark) : undefined,
      packaging_preferences: isSet(object.packaging_preferences)
        ? Preferences.fromJSON(object.packaging_preferences)
        : undefined,
    };
  },

  toJSON(message: Order): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.user_id !== undefined && (obj.user_id = message.user_id);
    message.customer_id !== undefined && (obj.customer_id = message.customer_id);
    message.shop_id !== undefined && (obj.shop_id = message.shop_id);
    if (message.items) {
      obj.items = message.items.map((e) => e ? Item.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.order_state !== undefined &&
      (obj.order_state = message.order_state !== undefined ? stateToJSON(message.order_state) : undefined);
    message.fulfillment_state !== undefined && (obj.fulfillment_state = message.fulfillment_state !== undefined
      ? stateToJSON19(message.fulfillment_state)
      : undefined);
    message.invoice_state !== undefined &&
      (obj.invoice_state = message.invoice_state !== undefined ? stateToJSON20(message.invoice_state) : undefined);
    message.total_gross !== undefined && (obj.total_gross = message.total_gross);
    message.total_net !== undefined && (obj.total_net = message.total_net);
    if (message.total_vats) {
      obj.total_vats = message.total_vats.map((e) => e ? VAT.toJSON(e) : undefined);
    } else {
      obj.total_vats = [];
    }
    message.shipping_address !== undefined &&
      (obj.shipping_address = message.shipping_address ? ShippingAddress.toJSON(message.shipping_address) : undefined);
    message.billing_address !== undefined &&
      (obj.billing_address = message.billing_address ? BillingAddress.toJSON(message.billing_address) : undefined);
    message.billing_email !== undefined && (obj.billing_email = message.billing_email);
    message.notification_email !== undefined && (obj.notification_email = message.notification_email);
    message.customer_order_nr !== undefined && (obj.customer_order_nr = message.customer_order_nr);
    message.customer_remark !== undefined && (obj.customer_remark = message.customer_remark);
    message.packaging_preferences !== undefined && (obj.packaging_preferences = message.packaging_preferences
      ? Preferences.toJSON(message.packaging_preferences)
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
    message.user_id = object.user_id ?? undefined;
    message.customer_id = object.customer_id ?? undefined;
    message.shop_id = object.shop_id ?? undefined;
    message.items = object.items?.map((e) => Item.fromPartial(e)) || [];
    message.order_state = object.order_state ?? undefined;
    message.fulfillment_state = object.fulfillment_state ?? undefined;
    message.invoice_state = object.invoice_state ?? undefined;
    message.total_gross = object.total_gross ?? undefined;
    message.total_net = object.total_net ?? undefined;
    message.total_vats = object.total_vats?.map((e) => VAT.fromPartial(e)) || [];
    message.shipping_address = (object.shipping_address !== undefined && object.shipping_address !== null)
      ? ShippingAddress.fromPartial(object.shipping_address)
      : undefined;
    message.billing_address = (object.billing_address !== undefined && object.billing_address !== null)
      ? BillingAddress.fromPartial(object.billing_address)
      : undefined;
    message.billing_email = object.billing_email ?? undefined;
    message.notification_email = object.notification_email ?? undefined;
    message.customer_order_nr = object.customer_order_nr ?? undefined;
    message.customer_remark = object.customer_remark ?? undefined;
    message.packaging_preferences =
      (object.packaging_preferences !== undefined && object.packaging_preferences !== null)
        ? Preferences.fromPartial(object.packaging_preferences)
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
  return { items: [], total_count: undefined, subject: undefined };
}

export const OrderList = {
  encode(message: OrderList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== undefined) {
      writer.uint32(16).uint32(message.total_count);
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

  fromJSON(object: any): OrderList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => Order.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : undefined,
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
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<OrderList>): OrderList {
    return OrderList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<OrderList>): OrderList {
    const message = createBaseOrderList();
    message.items = object.items?.map((e) => Order.fromPartial(e)) || [];
    message.total_count = object.total_count ?? undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseOrderListResponse(): OrderListResponse {
  return { items: [], total_count: 0, operation_status: undefined };
}

export const OrderListResponse = {
  encode(message: OrderListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      OrderResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(message.operation_status, writer.uint32(26).fork()).ldelim();
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

  fromJSON(object: any): OrderListResponse {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => OrderResponse.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      operation_status: isSet(object.operation_status) ? OperationStatus.fromJSON(object.operation_status) : undefined,
    };
  },

  toJSON(message: OrderListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? OrderResponse.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status ? OperationStatus.toJSON(message.operation_status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<OrderListResponse>): OrderListResponse {
    return OrderListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<OrderListResponse>): OrderListResponse {
    const message = createBaseOrderListResponse();
    message.items = object.items?.map((e) => OrderResponse.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.operation_status = (object.operation_status !== undefined && object.operation_status !== null)
      ? OperationStatus.fromPartial(object.operation_status)
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

function createBaseFulfillmentRequest(): FulfillmentRequest {
  return {
    order_id: undefined,
    export_type: undefined,
    export_description: undefined,
    invoice_number: undefined,
    sender_address: undefined,
    include_items: [],
    data: undefined,
  };
}

export const FulfillmentRequest = {
  encode(message: FulfillmentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.order_id !== undefined) {
      writer.uint32(10).string(message.order_id);
    }
    if (message.export_type !== undefined) {
      writer.uint32(18).string(message.export_type);
    }
    if (message.export_description !== undefined) {
      writer.uint32(26).string(message.export_description);
    }
    if (message.invoice_number !== undefined) {
      writer.uint32(34).string(message.invoice_number);
    }
    if (message.sender_address !== undefined) {
      ShippingAddress.encode(message.sender_address, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.include_items) {
      writer.uint32(50).string(v!);
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(58).fork()).ldelim();
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
          message.order_id = reader.string();
          break;
        case 2:
          message.export_type = reader.string();
          break;
        case 3:
          message.export_description = reader.string();
          break;
        case 4:
          message.invoice_number = reader.string();
          break;
        case 5:
          message.sender_address = ShippingAddress.decode(reader, reader.uint32());
          break;
        case 6:
          message.include_items.push(reader.string());
          break;
        case 7:
          message.data = Any.decode(reader, reader.uint32());
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
      order_id: isSet(object.order_id) ? String(object.order_id) : undefined,
      export_type: isSet(object.export_type) ? String(object.export_type) : undefined,
      export_description: isSet(object.export_description) ? String(object.export_description) : undefined,
      invoice_number: isSet(object.invoice_number) ? String(object.invoice_number) : undefined,
      sender_address: isSet(object.sender_address) ? ShippingAddress.fromJSON(object.sender_address) : undefined,
      include_items: Array.isArray(object?.include_items) ? object.include_items.map((e: any) => String(e)) : [],
      data: isSet(object.data) ? Any.fromJSON(object.data) : undefined,
    };
  },

  toJSON(message: FulfillmentRequest): unknown {
    const obj: any = {};
    message.order_id !== undefined && (obj.order_id = message.order_id);
    message.export_type !== undefined && (obj.export_type = message.export_type);
    message.export_description !== undefined && (obj.export_description = message.export_description);
    message.invoice_number !== undefined && (obj.invoice_number = message.invoice_number);
    message.sender_address !== undefined &&
      (obj.sender_address = message.sender_address ? ShippingAddress.toJSON(message.sender_address) : undefined);
    if (message.include_items) {
      obj.include_items = message.include_items.map((e) => e);
    } else {
      obj.include_items = [];
    }
    message.data !== undefined && (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    return obj;
  },

  create(base?: DeepPartial<FulfillmentRequest>): FulfillmentRequest {
    return FulfillmentRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FulfillmentRequest>): FulfillmentRequest {
    const message = createBaseFulfillmentRequest();
    message.order_id = object.order_id ?? undefined;
    message.export_type = object.export_type ?? undefined;
    message.export_description = object.export_description ?? undefined;
    message.invoice_number = object.invoice_number ?? undefined;
    message.sender_address = (object.sender_address !== undefined && object.sender_address !== null)
      ? ShippingAddress.fromPartial(object.sender_address)
      : undefined;
    message.include_items = object.include_items?.map((e) => e) || [];
    message.data = (object.data !== undefined && object.data !== null) ? Any.fromPartial(object.data) : undefined;
    return message;
  },
};

function createBaseFulfillmentRequestList(): FulfillmentRequestList {
  return { items: [], total_count: undefined, subject: undefined };
}

export const FulfillmentRequestList = {
  encode(message: FulfillmentRequestList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      FulfillmentRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== undefined) {
      writer.uint32(16).uint32(message.total_count);
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

  fromJSON(object: any): FulfillmentRequestList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => FulfillmentRequest.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : undefined,
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
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<FulfillmentRequestList>): FulfillmentRequestList {
    return FulfillmentRequestList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FulfillmentRequestList>): FulfillmentRequestList {
    const message = createBaseFulfillmentRequestList();
    message.items = object.items?.map((e) => FulfillmentRequest.fromPartial(e)) || [];
    message.total_count = object.total_count ?? undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseInvoiceRequest(): InvoiceRequest {
  return { invoice_number: undefined, order_id: undefined, included_items: [], included_fulfillments: undefined };
}

export const InvoiceRequest = {
  encode(message: InvoiceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.invoice_number !== undefined) {
      writer.uint32(10).string(message.invoice_number);
    }
    if (message.order_id !== undefined) {
      writer.uint32(18).string(message.order_id);
    }
    for (const v of message.included_items) {
      writer.uint32(26).string(v!);
    }
    if (message.included_fulfillments !== undefined) {
      writer.uint32(34).string(message.included_fulfillments);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvoiceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvoiceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.invoice_number = reader.string();
          break;
        case 2:
          message.order_id = reader.string();
          break;
        case 3:
          message.included_items.push(reader.string());
          break;
        case 4:
          message.included_fulfillments = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InvoiceRequest {
    return {
      invoice_number: isSet(object.invoice_number) ? String(object.invoice_number) : undefined,
      order_id: isSet(object.order_id) ? String(object.order_id) : undefined,
      included_items: Array.isArray(object?.included_items) ? object.included_items.map((e: any) => String(e)) : [],
      included_fulfillments: isSet(object.included_fulfillments) ? String(object.included_fulfillments) : undefined,
    };
  },

  toJSON(message: InvoiceRequest): unknown {
    const obj: any = {};
    message.invoice_number !== undefined && (obj.invoice_number = message.invoice_number);
    message.order_id !== undefined && (obj.order_id = message.order_id);
    if (message.included_items) {
      obj.included_items = message.included_items.map((e) => e);
    } else {
      obj.included_items = [];
    }
    message.included_fulfillments !== undefined && (obj.included_fulfillments = message.included_fulfillments);
    return obj;
  },

  create(base?: DeepPartial<InvoiceRequest>): InvoiceRequest {
    return InvoiceRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<InvoiceRequest>): InvoiceRequest {
    const message = createBaseInvoiceRequest();
    message.invoice_number = object.invoice_number ?? undefined;
    message.order_id = object.order_id ?? undefined;
    message.included_items = object.included_items?.map((e) => e) || [];
    message.included_fulfillments = object.included_fulfillments ?? undefined;
    return message;
  },
};

function createBaseInvoiceRequestList(): InvoiceRequestList {
  return { items: [], total_count: undefined, subject: undefined };
}

export const InvoiceRequestList = {
  encode(message: InvoiceRequestList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      InvoiceRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== undefined) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvoiceRequestList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvoiceRequestList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(InvoiceRequest.decode(reader, reader.uint32()));
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

  fromJSON(object: any): InvoiceRequestList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => InvoiceRequest.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : undefined,
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
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<InvoiceRequestList>): InvoiceRequestList {
    return InvoiceRequestList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<InvoiceRequestList>): InvoiceRequestList {
    const message = createBaseInvoiceRequestList();
    message.items = object.items?.map((e) => InvoiceRequest.fromPartial(e)) || [];
    message.total_count = object.total_count ?? undefined;
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
      "io/restorecommerce/tax.proto",
      "io/restorecommerce/country.proto",
      "io/restorecommerce/fulfillment.proto",
      "io/restorecommerce/fulfillment_product.proto",
      "io/restorecommerce/invoice.proto",
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
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "unitPrice",
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
        "oneofIndex": 5,
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
        "oneofIndex": 6,
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
        { "name": "_gross", "options": undefined },
        { "name": "_net", "options": undefined },
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
        "typeName": ".io.restorecommerce.order.State",
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
        "name": "invoice_state",
        "number": 9,
        "label": 1,
        "type": 14,
        "typeName": ".io.restorecommerce.invoice.State",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 7,
        "jsonName": "invoiceState",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "total_gross",
        "number": 10,
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
        "number": 11,
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
        "name": "total_vats",
        "number": 12,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.tax.VAT",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "totalVats",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "shipping_address",
        "number": 13,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.address.ShippingAddress",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 10,
        "jsonName": "shippingAddress",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "billing_address",
        "number": 14,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.address.BillingAddress",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 11,
        "jsonName": "billingAddress",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "billing_email",
        "number": 15,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 12,
        "jsonName": "billingEmail",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "notification_email",
        "number": 16,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 13,
        "jsonName": "notificationEmail",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "customer_order_nr",
        "number": 17,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 14,
        "jsonName": "customerOrderNr",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "customer_remark",
        "number": 18,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 15,
        "jsonName": "customerRemark",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "packaging_preferences",
        "number": 19,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment_product.Preferences",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 16,
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
        { "name": "_invoice_state", "options": undefined },
        { "name": "_total_gross", "options": undefined },
        { "name": "_total_net", "options": undefined },
        { "name": "_shipping_address", "options": undefined },
        { "name": "_billing_address", "options": undefined },
        { "name": "_billing_email", "options": undefined },
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
        "name": "include_items",
        "number": 6,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "includeItems",
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
        "name": "order_id",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "orderId",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "included_items",
        "number": 3,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "includedItems",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "included_fulfillments",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "includedFulfillments",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "_invoice_number", "options": undefined },
        { "name": "_order_id", "options": undefined },
        { "name": "_included_fulfillments", "options": undefined },
      ],
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
      "name": "State",
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
        "path": [6, 0, 2, 9],
        "span": [33, 2, 129],
        "leadingComments": " Requires Fulfillment Service\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 10],
        "span": [35, 2, 114],
        "leadingComments": " Requires Fulfillment Service\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 11],
        "span": [37, 2, 105],
        "leadingComments": " Requires Fulfillment Service\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 12],
        "span": [40, 2, 98],
        "leadingComments": " Requires Invoice Service\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 13],
        "span": [42, 2, 97],
        "leadingComments": " Requires Invoice Service\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0, 2, 4],
        "span": [69, 2, 33],
        "leadingComments": "",
        "trailingComments": "Set by service\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0, 2, 5],
        "span": [70, 2, 28],
        "leadingComments": "",
        "trailingComments": "Set by service\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0, 2, 6],
        "span": [71, 2, 26],
        "leadingComments": "",
        "trailingComments": "Set by service\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0, 2, 7],
        "span": [72, 2, 47],
        "leadingComments": "",
        "trailingComments": "Set by service\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1],
        "span": [78, 0, 130, 1],
        "leadingComments": "*\nDatabase Entity\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 6],
        "span": [117, 2, 33],
        "leadingComments": "",
        "trailingComments": " Set by service\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 7],
        "span": [118, 2, 70],
        "leadingComments": "",
        "trailingComments": " Set by kafka\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 8],
        "span": [119, 2, 62],
        "leadingComments": "",
        "trailingComments": " Set by kafka\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 9],
        "span": [120, 2, 35],
        "leadingComments": "",
        "trailingComments": " Set by service\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 10],
        "span": [121, 2, 33],
        "leadingComments": "",
        "trailingComments": " Set by service\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 11],
        "span": [122, 2, 54],
        "leadingComments": "",
        "trailingComments": " Set by service\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 7, 2, 1],
        "span": [160, 2, 34],
        "leadingComments": "",
        "trailingComments": " @TODO: not used!\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 7, 2, 2],
        "span": [161, 2, 41],
        "leadingComments": "",
        "trailingComments": " @TODO: not used!\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 7, 2, 3],
        "span": [162, 2, 37],
        "leadingComments": "",
        "trailingComments": " @TODO: not used!\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 7, 2, 5],
        "span": [164, 2, 36],
        "leadingComments": "",
        "trailingComments": " includes all if empty\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 9, 2, 0],
        "span": [175, 2, 37],
        "leadingComments": "",
        "trailingComments": " if given\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 9, 2, 2],
        "span": [177, 2, 37],
        "leadingComments": "",
        "trailingComments": " includes all on empty\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 9, 2, 3],
        "span": [178, 2, 44],
        "leadingComments": "",
        "trailingComments": " includes all on empty\n",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {
    ".io.restorecommerce.order.State": State,
    ".io.restorecommerce.order.Item": Item,
    ".io.restorecommerce.order.Order": Order,
    ".io.restorecommerce.order.OrderIdList": OrderIdList,
    ".io.restorecommerce.order.OrderList": OrderList,
    ".io.restorecommerce.order.OrderListResponse": OrderListResponse,
    ".io.restorecommerce.order.OrderResponse": OrderResponse,
    ".io.restorecommerce.order.Deleted": Deleted,
    ".io.restorecommerce.order.FulfillmentRequest": FulfillmentRequest,
    ".io.restorecommerce.order.FulfillmentRequestList": FulfillmentRequestList,
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
                "CiUuaW8ucmVzdG9yZWNvbW1lcmNlLmN1c3RvbWVyLkN1c3RvbWVyEghyZXNvdXJjZRoIY3VzdG9tZXIiBFJlYWQqCGN1c3RvbWVy",
                "base64",
              ),
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
