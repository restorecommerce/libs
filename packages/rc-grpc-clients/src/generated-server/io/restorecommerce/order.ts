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
  price?:
    | number
    | undefined;
  /** Set by service */
  vats: VAT[];
}

/** Database Entity */
export interface Order {
  id?: string | undefined;
  meta?: Meta | undefined;
  state?: OrderState | undefined;
  customer_reference?: string | undefined;
  items: OrderItem[];
  /** Set by service */
  total_price?:
    | number
    | undefined;
  /** Set by service */
  total_vat?: number | undefined;
  shipping_address?: ShippingAddress | undefined;
  billing_address?: ShippingAddress | undefined;
  billing_email?: string | undefined;
  notification_email?: string | undefined;
  packing_preferences?: Preferences | undefined;
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

export interface ShippingDetails {
  export_type?: string | undefined;
  export_description?: string | undefined;
  invoice_number?: string | undefined;
  sender_address?: ShippingAddress | undefined;
}

export interface FulfillmentRequest {
  reference_id?: string | undefined;
  shipping_details?: ShippingDetails | undefined;
}

export interface FulfillmentRequestList {
  items: FulfillmentRequest[];
  total_count?: number | undefined;
  subject?: Subject;
}

function createBaseOrderItem(): OrderItem {
  return {
    product_id: undefined,
    variant_id: undefined,
    quantity: undefined,
    unit_price: undefined,
    price: undefined,
    vats: [],
  };
}

export const OrderItem = {
  encode(message: OrderItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.product_id !== undefined) {
      writer.uint32(10).string(message.product_id);
    }
    if (message.variant_id !== undefined) {
      writer.uint32(18).string(message.variant_id);
    }
    if (message.quantity !== undefined) {
      writer.uint32(24).int32(message.quantity);
    }
    if (message.unit_price !== undefined) {
      writer.uint32(33).double(message.unit_price);
    }
    if (message.price !== undefined) {
      writer.uint32(41).double(message.price);
    }
    for (const v of message.vats) {
      VAT.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderItem();
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
        case 3:
          if (tag !== 24) {
            break;
          }

          message.quantity = reader.int32();
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.unit_price = reader.double();
          continue;
        case 5:
          if (tag !== 41) {
            break;
          }

          message.price = reader.double();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.vats.push(VAT.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OrderItem {
    return {
      product_id: isSet(object.product_id) ? String(object.product_id) : undefined,
      variant_id: isSet(object.variant_id) ? String(object.variant_id) : undefined,
      quantity: isSet(object.quantity) ? Number(object.quantity) : undefined,
      unit_price: isSet(object.unit_price) ? Number(object.unit_price) : undefined,
      price: isSet(object.price) ? Number(object.price) : undefined,
      vats: Array.isArray(object?.vats) ? object.vats.map((e: any) => VAT.fromJSON(e)) : [],
    };
  },

  toJSON(message: OrderItem): unknown {
    const obj: any = {};
    message.product_id !== undefined && (obj.product_id = message.product_id);
    message.variant_id !== undefined && (obj.variant_id = message.variant_id);
    message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
    message.unit_price !== undefined && (obj.unit_price = message.unit_price);
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
    message.product_id = object.product_id ?? undefined;
    message.variant_id = object.variant_id ?? undefined;
    message.quantity = object.quantity ?? undefined;
    message.unit_price = object.unit_price ?? undefined;
    message.price = object.price ?? undefined;
    message.vats = object.vats?.map((e) => VAT.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOrder(): Order {
  return {
    id: undefined,
    meta: undefined,
    state: undefined,
    customer_reference: undefined,
    items: [],
    total_price: undefined,
    total_vat: undefined,
    shipping_address: undefined,
    billing_address: undefined,
    billing_email: undefined,
    notification_email: undefined,
    packing_preferences: undefined,
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
    if (message.state !== undefined) {
      writer.uint32(24).int32(orderStateToNumber(message.state));
    }
    if (message.customer_reference !== undefined) {
      writer.uint32(34).string(message.customer_reference);
    }
    for (const v of message.items) {
      OrderItem.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.total_price !== undefined) {
      writer.uint32(49).double(message.total_price);
    }
    if (message.total_vat !== undefined) {
      writer.uint32(57).double(message.total_vat);
    }
    if (message.shipping_address !== undefined) {
      ShippingAddress.encode(message.shipping_address, writer.uint32(66).fork()).ldelim();
    }
    if (message.billing_address !== undefined) {
      ShippingAddress.encode(message.billing_address, writer.uint32(74).fork()).ldelim();
    }
    if (message.billing_email !== undefined) {
      writer.uint32(82).string(message.billing_email);
    }
    if (message.notification_email !== undefined) {
      writer.uint32(90).string(message.notification_email);
    }
    if (message.packing_preferences !== undefined) {
      Preferences.encode(message.packing_preferences, writer.uint32(98).fork()).ldelim();
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
          if (tag !== 24) {
            break;
          }

          message.state = orderStateFromJSON(reader.int32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.customer_reference = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.items.push(OrderItem.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 49) {
            break;
          }

          message.total_price = reader.double();
          continue;
        case 7:
          if (tag !== 57) {
            break;
          }

          message.total_vat = reader.double();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.shipping_address = ShippingAddress.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.billing_address = ShippingAddress.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.billing_email = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.notification_email = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.packing_preferences = Preferences.decode(reader, reader.uint32());
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
      state: isSet(object.state) ? orderStateFromJSON(object.state) : undefined,
      customer_reference: isSet(object.customer_reference) ? String(object.customer_reference) : undefined,
      items: Array.isArray(object?.items) ? object.items.map((e: any) => OrderItem.fromJSON(e)) : [],
      total_price: isSet(object.total_price) ? Number(object.total_price) : undefined,
      total_vat: isSet(object.total_vat) ? Number(object.total_vat) : undefined,
      shipping_address: isSet(object.shipping_address) ? ShippingAddress.fromJSON(object.shipping_address) : undefined,
      billing_address: isSet(object.billing_address) ? ShippingAddress.fromJSON(object.billing_address) : undefined,
      billing_email: isSet(object.billing_email) ? String(object.billing_email) : undefined,
      notification_email: isSet(object.notification_email) ? String(object.notification_email) : undefined,
      packing_preferences: isSet(object.packing_preferences)
        ? Preferences.fromJSON(object.packing_preferences)
        : undefined,
    };
  },

  toJSON(message: Order): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.state !== undefined &&
      (obj.state = message.state !== undefined ? orderStateToJSON(message.state) : undefined);
    message.customer_reference !== undefined && (obj.customer_reference = message.customer_reference);
    if (message.items) {
      obj.items = message.items.map((e) => e ? OrderItem.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_price !== undefined && (obj.total_price = message.total_price);
    message.total_vat !== undefined && (obj.total_vat = message.total_vat);
    message.shipping_address !== undefined &&
      (obj.shipping_address = message.shipping_address ? ShippingAddress.toJSON(message.shipping_address) : undefined);
    message.billing_address !== undefined &&
      (obj.billing_address = message.billing_address ? ShippingAddress.toJSON(message.billing_address) : undefined);
    message.billing_email !== undefined && (obj.billing_email = message.billing_email);
    message.notification_email !== undefined && (obj.notification_email = message.notification_email);
    message.packing_preferences !== undefined && (obj.packing_preferences = message.packing_preferences
      ? Preferences.toJSON(message.packing_preferences)
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
    message.state = object.state ?? undefined;
    message.customer_reference = object.customer_reference ?? undefined;
    message.items = object.items?.map((e) => OrderItem.fromPartial(e)) || [];
    message.total_price = object.total_price ?? undefined;
    message.total_vat = object.total_vat ?? undefined;
    message.shipping_address = (object.shipping_address !== undefined && object.shipping_address !== null)
      ? ShippingAddress.fromPartial(object.shipping_address)
      : undefined;
    message.billing_address = (object.billing_address !== undefined && object.billing_address !== null)
      ? ShippingAddress.fromPartial(object.billing_address)
      : undefined;
    message.billing_email = object.billing_email ?? undefined;
    message.notification_email = object.notification_email ?? undefined;
    message.packing_preferences = (object.packing_preferences !== undefined && object.packing_preferences !== null)
      ? Preferences.fromPartial(object.packing_preferences)
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

function createBaseShippingDetails(): ShippingDetails {
  return {
    export_type: undefined,
    export_description: undefined,
    invoice_number: undefined,
    sender_address: undefined,
  };
}

export const ShippingDetails = {
  encode(message: ShippingDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.export_type !== undefined) {
      writer.uint32(10).string(message.export_type);
    }
    if (message.export_description !== undefined) {
      writer.uint32(18).string(message.export_description);
    }
    if (message.invoice_number !== undefined) {
      writer.uint32(26).string(message.invoice_number);
    }
    if (message.sender_address !== undefined) {
      ShippingAddress.encode(message.sender_address, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ShippingDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShippingDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.export_type = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.export_description = reader.string();
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

          message.sender_address = ShippingAddress.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ShippingDetails {
    return {
      export_type: isSet(object.export_type) ? String(object.export_type) : undefined,
      export_description: isSet(object.export_description) ? String(object.export_description) : undefined,
      invoice_number: isSet(object.invoice_number) ? String(object.invoice_number) : undefined,
      sender_address: isSet(object.sender_address) ? ShippingAddress.fromJSON(object.sender_address) : undefined,
    };
  },

  toJSON(message: ShippingDetails): unknown {
    const obj: any = {};
    message.export_type !== undefined && (obj.export_type = message.export_type);
    message.export_description !== undefined && (obj.export_description = message.export_description);
    message.invoice_number !== undefined && (obj.invoice_number = message.invoice_number);
    message.sender_address !== undefined &&
      (obj.sender_address = message.sender_address ? ShippingAddress.toJSON(message.sender_address) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ShippingDetails>): ShippingDetails {
    return ShippingDetails.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ShippingDetails>): ShippingDetails {
    const message = createBaseShippingDetails();
    message.export_type = object.export_type ?? undefined;
    message.export_description = object.export_description ?? undefined;
    message.invoice_number = object.invoice_number ?? undefined;
    message.sender_address = (object.sender_address !== undefined && object.sender_address !== null)
      ? ShippingAddress.fromPartial(object.sender_address)
      : undefined;
    return message;
  },
};

function createBaseFulfillmentRequest(): FulfillmentRequest {
  return { reference_id: undefined, shipping_details: undefined };
}

export const FulfillmentRequest = {
  encode(message: FulfillmentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reference_id !== undefined) {
      writer.uint32(10).string(message.reference_id);
    }
    if (message.shipping_details !== undefined) {
      ShippingDetails.encode(message.shipping_details, writer.uint32(18).fork()).ldelim();
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

          message.reference_id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.shipping_details = ShippingDetails.decode(reader, reader.uint32());
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
      reference_id: isSet(object.reference_id) ? String(object.reference_id) : undefined,
      shipping_details: isSet(object.shipping_details) ? ShippingDetails.fromJSON(object.shipping_details) : undefined,
    };
  },

  toJSON(message: FulfillmentRequest): unknown {
    const obj: any = {};
    message.reference_id !== undefined && (obj.reference_id = message.reference_id);
    message.shipping_details !== undefined &&
      (obj.shipping_details = message.shipping_details ? ShippingDetails.toJSON(message.shipping_details) : undefined);
    return obj;
  },

  create(base?: DeepPartial<FulfillmentRequest>): FulfillmentRequest {
    return FulfillmentRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FulfillmentRequest>): FulfillmentRequest {
    const message = createBaseFulfillmentRequest();
    message.reference_id = object.reference_id ?? undefined;
    message.shipping_details = (object.shipping_details !== undefined && object.shipping_details !== null)
      ? ShippingDetails.fromPartial(object.shipping_details)
      : undefined;
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
        "name": "quantity",
        "number": 3,
        "label": 1,
        "type": 5,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "quantity",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "unit_price",
        "number": 4,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "unitPrice",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "price",
        "number": 5,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "price",
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
      "oneofDecl": [
        { "name": "_product_id", "options": undefined },
        { "name": "_variant_id", "options": undefined },
        { "name": "_quantity", "options": undefined },
        { "name": "_unit_price", "options": undefined },
        { "name": "_price", "options": undefined },
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
        "name": "state",
        "number": 3,
        "label": 1,
        "type": 14,
        "typeName": ".io.restorecommerce.order.OrderState",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "state",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "customer_reference",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "customerReference",
        "options": undefined,
        "proto3Optional": true,
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
        "oneofIndex": 4,
        "jsonName": "totalPrice",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "total_vat",
        "number": 7,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 5,
        "jsonName": "totalVat",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "shipping_address",
        "number": 8,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.address.ShippingAddress",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 6,
        "jsonName": "shippingAddress",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "billing_address",
        "number": 9,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.address.ShippingAddress",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 7,
        "jsonName": "billingAddress",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "billing_email",
        "number": 10,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 8,
        "jsonName": "billingEmail",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "notification_email",
        "number": 11,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 9,
        "jsonName": "notificationEmail",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "packing_preferences",
        "number": 12,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment_product.Preferences",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 10,
        "jsonName": "packingPreferences",
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
        { "name": "_state", "options": undefined },
        { "name": "_customer_reference", "options": undefined },
        { "name": "_total_price", "options": undefined },
        { "name": "_total_vat", "options": undefined },
        { "name": "_shipping_address", "options": undefined },
        { "name": "_billing_address", "options": undefined },
        { "name": "_billing_email", "options": undefined },
        { "name": "_notification_email", "options": undefined },
        { "name": "_packing_preferences", "options": undefined },
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
        "proto3Optional": true,
      }, {
        "name": "export_description",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "exportDescription",
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
        "name": "sender_address",
        "number": 4,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.address.ShippingAddress",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "senderAddress",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "_export_type", "options": undefined },
        { "name": "_export_description", "options": undefined },
        { "name": "_invoice_number", "options": undefined },
        { "name": "_sender_address", "options": undefined },
      ],
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
        "proto3Optional": true,
      }, {
        "name": "shipping_details",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.order.ShippingDetails",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "shippingDetails",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_reference_id", "options": undefined }, {
        "name": "_shipping_details",
        "options": undefined,
      }],
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
      "options": undefined,
    }],
    "extension": [],
    "options": undefined,
    "sourceCodeInfo": {
      "location": [{
        "path": [6, 0, 2, 9],
        "span": [30, 2, 129],
        "leadingComments": " Requires Fulfillment Service\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 10],
        "span": [32, 2, 114],
        "leadingComments": " Requires Fulfillment Service\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 11],
        "span": [34, 2, 105],
        "leadingComments": " Requires Fulfillment Service\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0, 2, 3],
        "span": [53, 2, 33],
        "leadingComments": "",
        "trailingComments": "Set by service\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0, 2, 4],
        "span": [54, 2, 28],
        "leadingComments": "",
        "trailingComments": "Set by service\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0, 2, 5],
        "span": [55, 2, 47],
        "leadingComments": "",
        "trailingComments": "Set by service\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1],
        "span": [61, 0, 82, 1],
        "leadingComments": "*\nDatabase Entity\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 5],
        "span": [75, 2, 34],
        "leadingComments": "",
        "trailingComments": "Set by service\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 6],
        "span": [76, 2, 32],
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
