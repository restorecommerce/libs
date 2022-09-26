/* eslint-disable */
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { Subject, protoMetadata as protoMetadata3 } from "./auth";
import {
  OperationStatus,
  Status,
  protoMetadata as protoMetadata4,
} from "./status";
import { Meta, protoMetadata as protoMetadata2 } from "./meta";
import { CallContext, CallOptions } from "nice-grpc-common";
import {
  protoMetadata as protoMetadata1,
  ReadRequest,
  DeleteRequest,
  DeleteResponse,
} from "./resource_base";
import { protoMetadata as protoMetadata5, Resolver } from "./options";
import { protoMetadata as protoMetadata6 } from "./contact_point";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "io.restorecommerce.order";

export interface OrderList {
  items: Order[];
  total_count: number;
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

export interface Order {
  id: string;
  meta?: Meta;
  name: string;
  description: string;
  status: string;
  customer_reference: string;
  items: Items[];
  /** sum of all the quantity_price will be total_price */
  total_price: number;
  /** shipping address */
  shipping_contact_point_id: string;
  billing_contact_point_id: string;
  total_weight_in_kg: number;
}

export interface Items {
  quantity_price: number;
  item?: Item;
}

export interface Item {
  /** below identifier is id of product, variant or bundle */
  product_variant_bundle_id: string;
  product_name: string;
  product_description: string;
  manufacturer_name: string;
  manufacturer_description: string;
  prototype_name: string;
  prototype_description: string;
  quantity: number;
  vat: number;
  price: number;
  item_type: string;
  taric_code: number;
  stock_keeping_unit: string;
  weight_in_kg: number;
  length_in_cm: number;
  width_in_cm: number;
  height_in_cm: number;
}

export interface Deleted {
  id: string;
}

export interface OrderDataList {
  order_data: OrderData[];
  meta?: Meta;
}

export interface OrderData {
  order_id: string;
  shipments: Shipments[];
}

export interface Shipments {
  total_weight_in_kg: number;
  /** below properties are used for international packaging */
  individual_weight_in_kg: number;
  /** number of items */
  amount: number;
  export_type: string;
  export_description: string;
  customs_tariff_number: string;
  invoice_number: string;
  customs_value: number;
}

export interface FulfillmentResults {
  fulfillmentResults: ResponseDetailsList[];
}

export interface ResponseDetailsList {
  Status?: OrderStatus;
  error?: ErrorList;
}

export interface OrderStatus {
  OrderId: string;
  OrderStatus: string;
}

export interface ErrorList {
  code: string[];
  message: string[];
}

function createBaseOrderList(): OrderList {
  return { items: [], total_count: 0, subject: undefined };
}

export const OrderList = {
  encode(
    message: OrderList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
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
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => Order.fromJSON(e))
        : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      subject: isSet(object.subject)
        ? Subject.fromJSON(object.subject)
        : undefined,
    };
  },

  toJSON(message: OrderList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => (e ? Order.toJSON(e) : undefined));
    } else {
      obj.items = [];
    }
    message.total_count !== undefined &&
      (obj.total_count = Math.round(message.total_count));
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<OrderList>): OrderList {
    const message = createBaseOrderList();
    message.items = object.items?.map((e) => Order.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.subject =
      object.subject !== undefined && object.subject !== null
        ? Subject.fromPartial(object.subject)
        : undefined;
    return message;
  },
};

function createBaseOrderListResponse(): OrderListResponse {
  return { items: [], total_count: 0, operation_status: undefined };
}

export const OrderListResponse = {
  encode(
    message: OrderListResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      OrderResponse.encode(v!, writer.uint32(10).fork()).ldelim();
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

  fromJSON(object: any): OrderListResponse {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => OrderResponse.fromJSON(e))
        : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      operation_status: isSet(object.operation_status)
        ? OperationStatus.fromJSON(object.operation_status)
        : undefined,
    };
  },

  toJSON(message: OrderListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? OrderResponse.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.total_count !== undefined &&
      (obj.total_count = Math.round(message.total_count));
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status
        ? OperationStatus.toJSON(message.operation_status)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<OrderListResponse>): OrderListResponse {
    const message = createBaseOrderListResponse();
    message.items =
      object.items?.map((e) => OrderResponse.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.operation_status =
      object.operation_status !== undefined && object.operation_status !== null
        ? OperationStatus.fromPartial(object.operation_status)
        : undefined;
    return message;
  },
};

function createBaseOrderResponse(): OrderResponse {
  return { payload: undefined, status: undefined };
}

export const OrderResponse = {
  encode(
    message: OrderResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      payload: isSet(object.payload)
        ? Order.fromJSON(object.payload)
        : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: OrderResponse): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload
        ? Order.toJSON(message.payload)
        : undefined);
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<OrderResponse>): OrderResponse {
    const message = createBaseOrderResponse();
    message.payload =
      object.payload !== undefined && object.payload !== null
        ? Order.fromPartial(object.payload)
        : undefined;
    message.status =
      object.status !== undefined && object.status !== null
        ? Status.fromPartial(object.status)
        : undefined;
    return message;
  },
};

function createBaseOrder(): Order {
  return {
    id: "",
    meta: undefined,
    name: "",
    description: "",
    status: "",
    customer_reference: "",
    items: [],
    total_price: 0,
    shipping_contact_point_id: "",
    billing_contact_point_id: "",
    total_weight_in_kg: 0,
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
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.status !== "") {
      writer.uint32(42).string(message.status);
    }
    if (message.customer_reference !== "") {
      writer.uint32(50).string(message.customer_reference);
    }
    for (const v of message.items) {
      Items.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.total_price !== 0) {
      writer.uint32(65).double(message.total_price);
    }
    if (message.shipping_contact_point_id !== "") {
      writer.uint32(74).string(message.shipping_contact_point_id);
    }
    if (message.billing_contact_point_id !== "") {
      writer.uint32(82).string(message.billing_contact_point_id);
    }
    if (message.total_weight_in_kg !== 0) {
      writer.uint32(89).double(message.total_weight_in_kg);
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
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.status = reader.string();
          break;
        case 6:
          message.customer_reference = reader.string();
          break;
        case 7:
          message.items.push(Items.decode(reader, reader.uint32()));
          break;
        case 8:
          message.total_price = reader.double();
          break;
        case 9:
          message.shipping_contact_point_id = reader.string();
          break;
        case 10:
          message.billing_contact_point_id = reader.string();
          break;
        case 11:
          message.total_weight_in_kg = reader.double();
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
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      status: isSet(object.status) ? String(object.status) : "",
      customer_reference: isSet(object.customer_reference)
        ? String(object.customer_reference)
        : "",
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => Items.fromJSON(e))
        : [],
      total_price: isSet(object.total_price) ? Number(object.total_price) : 0,
      shipping_contact_point_id: isSet(object.shipping_contact_point_id)
        ? String(object.shipping_contact_point_id)
        : "",
      billing_contact_point_id: isSet(object.billing_contact_point_id)
        ? String(object.billing_contact_point_id)
        : "",
      total_weight_in_kg: isSet(object.total_weight_in_kg)
        ? Number(object.total_weight_in_kg)
        : 0,
    };
  },

  toJSON(message: Order): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.status !== undefined && (obj.status = message.status);
    message.customer_reference !== undefined &&
      (obj.customer_reference = message.customer_reference);
    if (message.items) {
      obj.items = message.items.map((e) => (e ? Items.toJSON(e) : undefined));
    } else {
      obj.items = [];
    }
    message.total_price !== undefined &&
      (obj.total_price = message.total_price);
    message.shipping_contact_point_id !== undefined &&
      (obj.shipping_contact_point_id = message.shipping_contact_point_id);
    message.billing_contact_point_id !== undefined &&
      (obj.billing_contact_point_id = message.billing_contact_point_id);
    message.total_weight_in_kg !== undefined &&
      (obj.total_weight_in_kg = message.total_weight_in_kg);
    return obj;
  },

  fromPartial(object: DeepPartial<Order>): Order {
    const message = createBaseOrder();
    message.id = object.id ?? "";
    message.meta =
      object.meta !== undefined && object.meta !== null
        ? Meta.fromPartial(object.meta)
        : undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.status = object.status ?? "";
    message.customer_reference = object.customer_reference ?? "";
    message.items = object.items?.map((e) => Items.fromPartial(e)) || [];
    message.total_price = object.total_price ?? 0;
    message.shipping_contact_point_id = object.shipping_contact_point_id ?? "";
    message.billing_contact_point_id = object.billing_contact_point_id ?? "";
    message.total_weight_in_kg = object.total_weight_in_kg ?? 0;
    return message;
  },
};

function createBaseItems(): Items {
  return { quantity_price: 0, item: undefined };
}

export const Items = {
  encode(message: Items, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.quantity_price !== 0) {
      writer.uint32(9).double(message.quantity_price);
    }
    if (message.item !== undefined) {
      Item.encode(message.item, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Items {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseItems();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quantity_price = reader.double();
          break;
        case 2:
          message.item = Item.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Items {
    return {
      quantity_price: isSet(object.quantity_price)
        ? Number(object.quantity_price)
        : 0,
      item: isSet(object.item) ? Item.fromJSON(object.item) : undefined,
    };
  },

  toJSON(message: Items): unknown {
    const obj: any = {};
    message.quantity_price !== undefined &&
      (obj.quantity_price = message.quantity_price);
    message.item !== undefined &&
      (obj.item = message.item ? Item.toJSON(message.item) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Items>): Items {
    const message = createBaseItems();
    message.quantity_price = object.quantity_price ?? 0;
    message.item =
      object.item !== undefined && object.item !== null
        ? Item.fromPartial(object.item)
        : undefined;
    return message;
  },
};

function createBaseItem(): Item {
  return {
    product_variant_bundle_id: "",
    product_name: "",
    product_description: "",
    manufacturer_name: "",
    manufacturer_description: "",
    prototype_name: "",
    prototype_description: "",
    quantity: 0,
    vat: 0,
    price: 0,
    item_type: "",
    taric_code: 0,
    stock_keeping_unit: "",
    weight_in_kg: 0,
    length_in_cm: 0,
    width_in_cm: 0,
    height_in_cm: 0,
  };
}

export const Item = {
  encode(message: Item, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.product_variant_bundle_id !== "") {
      writer.uint32(10).string(message.product_variant_bundle_id);
    }
    if (message.product_name !== "") {
      writer.uint32(18).string(message.product_name);
    }
    if (message.product_description !== "") {
      writer.uint32(26).string(message.product_description);
    }
    if (message.manufacturer_name !== "") {
      writer.uint32(34).string(message.manufacturer_name);
    }
    if (message.manufacturer_description !== "") {
      writer.uint32(42).string(message.manufacturer_description);
    }
    if (message.prototype_name !== "") {
      writer.uint32(50).string(message.prototype_name);
    }
    if (message.prototype_description !== "") {
      writer.uint32(58).string(message.prototype_description);
    }
    if (message.quantity !== 0) {
      writer.uint32(64).int32(message.quantity);
    }
    if (message.vat !== 0) {
      writer.uint32(72).int32(message.vat);
    }
    if (message.price !== 0) {
      writer.uint32(81).double(message.price);
    }
    if (message.item_type !== "") {
      writer.uint32(90).string(message.item_type);
    }
    if (message.taric_code !== 0) {
      writer.uint32(97).double(message.taric_code);
    }
    if (message.stock_keeping_unit !== "") {
      writer.uint32(106).string(message.stock_keeping_unit);
    }
    if (message.weight_in_kg !== 0) {
      writer.uint32(113).double(message.weight_in_kg);
    }
    if (message.length_in_cm !== 0) {
      writer.uint32(120).int32(message.length_in_cm);
    }
    if (message.width_in_cm !== 0) {
      writer.uint32(128).int32(message.width_in_cm);
    }
    if (message.height_in_cm !== 0) {
      writer.uint32(136).int32(message.height_in_cm);
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
          message.product_variant_bundle_id = reader.string();
          break;
        case 2:
          message.product_name = reader.string();
          break;
        case 3:
          message.product_description = reader.string();
          break;
        case 4:
          message.manufacturer_name = reader.string();
          break;
        case 5:
          message.manufacturer_description = reader.string();
          break;
        case 6:
          message.prototype_name = reader.string();
          break;
        case 7:
          message.prototype_description = reader.string();
          break;
        case 8:
          message.quantity = reader.int32();
          break;
        case 9:
          message.vat = reader.int32();
          break;
        case 10:
          message.price = reader.double();
          break;
        case 11:
          message.item_type = reader.string();
          break;
        case 12:
          message.taric_code = reader.double();
          break;
        case 13:
          message.stock_keeping_unit = reader.string();
          break;
        case 14:
          message.weight_in_kg = reader.double();
          break;
        case 15:
          message.length_in_cm = reader.int32();
          break;
        case 16:
          message.width_in_cm = reader.int32();
          break;
        case 17:
          message.height_in_cm = reader.int32();
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
      product_variant_bundle_id: isSet(object.product_variant_bundle_id)
        ? String(object.product_variant_bundle_id)
        : "",
      product_name: isSet(object.product_name)
        ? String(object.product_name)
        : "",
      product_description: isSet(object.product_description)
        ? String(object.product_description)
        : "",
      manufacturer_name: isSet(object.manufacturer_name)
        ? String(object.manufacturer_name)
        : "",
      manufacturer_description: isSet(object.manufacturer_description)
        ? String(object.manufacturer_description)
        : "",
      prototype_name: isSet(object.prototype_name)
        ? String(object.prototype_name)
        : "",
      prototype_description: isSet(object.prototype_description)
        ? String(object.prototype_description)
        : "",
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
      vat: isSet(object.vat) ? Number(object.vat) : 0,
      price: isSet(object.price) ? Number(object.price) : 0,
      item_type: isSet(object.item_type) ? String(object.item_type) : "",
      taric_code: isSet(object.taric_code) ? Number(object.taric_code) : 0,
      stock_keeping_unit: isSet(object.stock_keeping_unit)
        ? String(object.stock_keeping_unit)
        : "",
      weight_in_kg: isSet(object.weight_in_kg)
        ? Number(object.weight_in_kg)
        : 0,
      length_in_cm: isSet(object.length_in_cm)
        ? Number(object.length_in_cm)
        : 0,
      width_in_cm: isSet(object.width_in_cm) ? Number(object.width_in_cm) : 0,
      height_in_cm: isSet(object.height_in_cm)
        ? Number(object.height_in_cm)
        : 0,
    };
  },

  toJSON(message: Item): unknown {
    const obj: any = {};
    message.product_variant_bundle_id !== undefined &&
      (obj.product_variant_bundle_id = message.product_variant_bundle_id);
    message.product_name !== undefined &&
      (obj.product_name = message.product_name);
    message.product_description !== undefined &&
      (obj.product_description = message.product_description);
    message.manufacturer_name !== undefined &&
      (obj.manufacturer_name = message.manufacturer_name);
    message.manufacturer_description !== undefined &&
      (obj.manufacturer_description = message.manufacturer_description);
    message.prototype_name !== undefined &&
      (obj.prototype_name = message.prototype_name);
    message.prototype_description !== undefined &&
      (obj.prototype_description = message.prototype_description);
    message.quantity !== undefined &&
      (obj.quantity = Math.round(message.quantity));
    message.vat !== undefined && (obj.vat = Math.round(message.vat));
    message.price !== undefined && (obj.price = message.price);
    message.item_type !== undefined && (obj.item_type = message.item_type);
    message.taric_code !== undefined && (obj.taric_code = message.taric_code);
    message.stock_keeping_unit !== undefined &&
      (obj.stock_keeping_unit = message.stock_keeping_unit);
    message.weight_in_kg !== undefined &&
      (obj.weight_in_kg = message.weight_in_kg);
    message.length_in_cm !== undefined &&
      (obj.length_in_cm = Math.round(message.length_in_cm));
    message.width_in_cm !== undefined &&
      (obj.width_in_cm = Math.round(message.width_in_cm));
    message.height_in_cm !== undefined &&
      (obj.height_in_cm = Math.round(message.height_in_cm));
    return obj;
  },

  fromPartial(object: DeepPartial<Item>): Item {
    const message = createBaseItem();
    message.product_variant_bundle_id = object.product_variant_bundle_id ?? "";
    message.product_name = object.product_name ?? "";
    message.product_description = object.product_description ?? "";
    message.manufacturer_name = object.manufacturer_name ?? "";
    message.manufacturer_description = object.manufacturer_description ?? "";
    message.prototype_name = object.prototype_name ?? "";
    message.prototype_description = object.prototype_description ?? "";
    message.quantity = object.quantity ?? 0;
    message.vat = object.vat ?? 0;
    message.price = object.price ?? 0;
    message.item_type = object.item_type ?? "";
    message.taric_code = object.taric_code ?? 0;
    message.stock_keeping_unit = object.stock_keeping_unit ?? "";
    message.weight_in_kg = object.weight_in_kg ?? 0;
    message.length_in_cm = object.length_in_cm ?? 0;
    message.width_in_cm = object.width_in_cm ?? 0;
    message.height_in_cm = object.height_in_cm ?? 0;
    return message;
  },
};

function createBaseDeleted(): Deleted {
  return { id: "" };
}

export const Deleted = {
  encode(
    message: Deleted,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    return {
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: Deleted): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<Deleted>): Deleted {
    const message = createBaseDeleted();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseOrderDataList(): OrderDataList {
  return { order_data: [], meta: undefined };
}

export const OrderDataList = {
  encode(
    message: OrderDataList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.order_data) {
      OrderData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderDataList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderDataList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order_data.push(OrderData.decode(reader, reader.uint32()));
          break;
        case 2:
          message.meta = Meta.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrderDataList {
    return {
      order_data: Array.isArray(object?.order_data)
        ? object.order_data.map((e: any) => OrderData.fromJSON(e))
        : [],
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
    };
  },

  toJSON(message: OrderDataList): unknown {
    const obj: any = {};
    if (message.order_data) {
      obj.order_data = message.order_data.map((e) =>
        e ? OrderData.toJSON(e) : undefined
      );
    } else {
      obj.order_data = [];
    }
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<OrderDataList>): OrderDataList {
    const message = createBaseOrderDataList();
    message.order_data =
      object.order_data?.map((e) => OrderData.fromPartial(e)) || [];
    message.meta =
      object.meta !== undefined && object.meta !== null
        ? Meta.fromPartial(object.meta)
        : undefined;
    return message;
  },
};

function createBaseOrderData(): OrderData {
  return { order_id: "", shipments: [] };
}

export const OrderData = {
  encode(
    message: OrderData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.order_id !== "") {
      writer.uint32(10).string(message.order_id);
    }
    for (const v of message.shipments) {
      Shipments.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order_id = reader.string();
          break;
        case 2:
          message.shipments.push(Shipments.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrderData {
    return {
      order_id: isSet(object.order_id) ? String(object.order_id) : "",
      shipments: Array.isArray(object?.shipments)
        ? object.shipments.map((e: any) => Shipments.fromJSON(e))
        : [],
    };
  },

  toJSON(message: OrderData): unknown {
    const obj: any = {};
    message.order_id !== undefined && (obj.order_id = message.order_id);
    if (message.shipments) {
      obj.shipments = message.shipments.map((e) =>
        e ? Shipments.toJSON(e) : undefined
      );
    } else {
      obj.shipments = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<OrderData>): OrderData {
    const message = createBaseOrderData();
    message.order_id = object.order_id ?? "";
    message.shipments =
      object.shipments?.map((e) => Shipments.fromPartial(e)) || [];
    return message;
  },
};

function createBaseShipments(): Shipments {
  return {
    total_weight_in_kg: 0,
    individual_weight_in_kg: 0,
    amount: 0,
    export_type: "",
    export_description: "",
    customs_tariff_number: "",
    invoice_number: "",
    customs_value: 0,
  };
}

export const Shipments = {
  encode(
    message: Shipments,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.total_weight_in_kg !== 0) {
      writer.uint32(9).double(message.total_weight_in_kg);
    }
    if (message.individual_weight_in_kg !== 0) {
      writer.uint32(17).double(message.individual_weight_in_kg);
    }
    if (message.amount !== 0) {
      writer.uint32(24).int32(message.amount);
    }
    if (message.export_type !== "") {
      writer.uint32(34).string(message.export_type);
    }
    if (message.export_description !== "") {
      writer.uint32(42).string(message.export_description);
    }
    if (message.customs_tariff_number !== "") {
      writer.uint32(50).string(message.customs_tariff_number);
    }
    if (message.invoice_number !== "") {
      writer.uint32(58).string(message.invoice_number);
    }
    if (message.customs_value !== 0) {
      writer.uint32(65).double(message.customs_value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Shipments {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShipments();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total_weight_in_kg = reader.double();
          break;
        case 2:
          message.individual_weight_in_kg = reader.double();
          break;
        case 3:
          message.amount = reader.int32();
          break;
        case 4:
          message.export_type = reader.string();
          break;
        case 5:
          message.export_description = reader.string();
          break;
        case 6:
          message.customs_tariff_number = reader.string();
          break;
        case 7:
          message.invoice_number = reader.string();
          break;
        case 8:
          message.customs_value = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Shipments {
    return {
      total_weight_in_kg: isSet(object.total_weight_in_kg)
        ? Number(object.total_weight_in_kg)
        : 0,
      individual_weight_in_kg: isSet(object.individual_weight_in_kg)
        ? Number(object.individual_weight_in_kg)
        : 0,
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      export_type: isSet(object.export_type) ? String(object.export_type) : "",
      export_description: isSet(object.export_description)
        ? String(object.export_description)
        : "",
      customs_tariff_number: isSet(object.customs_tariff_number)
        ? String(object.customs_tariff_number)
        : "",
      invoice_number: isSet(object.invoice_number)
        ? String(object.invoice_number)
        : "",
      customs_value: isSet(object.customs_value)
        ? Number(object.customs_value)
        : 0,
    };
  },

  toJSON(message: Shipments): unknown {
    const obj: any = {};
    message.total_weight_in_kg !== undefined &&
      (obj.total_weight_in_kg = message.total_weight_in_kg);
    message.individual_weight_in_kg !== undefined &&
      (obj.individual_weight_in_kg = message.individual_weight_in_kg);
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    message.export_type !== undefined &&
      (obj.export_type = message.export_type);
    message.export_description !== undefined &&
      (obj.export_description = message.export_description);
    message.customs_tariff_number !== undefined &&
      (obj.customs_tariff_number = message.customs_tariff_number);
    message.invoice_number !== undefined &&
      (obj.invoice_number = message.invoice_number);
    message.customs_value !== undefined &&
      (obj.customs_value = message.customs_value);
    return obj;
  },

  fromPartial(object: DeepPartial<Shipments>): Shipments {
    const message = createBaseShipments();
    message.total_weight_in_kg = object.total_weight_in_kg ?? 0;
    message.individual_weight_in_kg = object.individual_weight_in_kg ?? 0;
    message.amount = object.amount ?? 0;
    message.export_type = object.export_type ?? "";
    message.export_description = object.export_description ?? "";
    message.customs_tariff_number = object.customs_tariff_number ?? "";
    message.invoice_number = object.invoice_number ?? "";
    message.customs_value = object.customs_value ?? 0;
    return message;
  },
};

function createBaseFulfillmentResults(): FulfillmentResults {
  return { fulfillmentResults: [] };
}

export const FulfillmentResults = {
  encode(
    message: FulfillmentResults,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.fulfillmentResults) {
      ResponseDetailsList.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FulfillmentResults {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFulfillmentResults();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fulfillmentResults.push(
            ResponseDetailsList.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FulfillmentResults {
    return {
      fulfillmentResults: Array.isArray(object?.fulfillmentResults)
        ? object.fulfillmentResults.map((e: any) =>
            ResponseDetailsList.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: FulfillmentResults): unknown {
    const obj: any = {};
    if (message.fulfillmentResults) {
      obj.fulfillmentResults = message.fulfillmentResults.map((e) =>
        e ? ResponseDetailsList.toJSON(e) : undefined
      );
    } else {
      obj.fulfillmentResults = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<FulfillmentResults>): FulfillmentResults {
    const message = createBaseFulfillmentResults();
    message.fulfillmentResults =
      object.fulfillmentResults?.map((e) =>
        ResponseDetailsList.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseResponseDetailsList(): ResponseDetailsList {
  return { Status: undefined, error: undefined };
}

export const ResponseDetailsList = {
  encode(
    message: ResponseDetailsList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Status !== undefined) {
      OrderStatus.encode(message.Status, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      ErrorList.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseDetailsList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseDetailsList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Status = OrderStatus.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = ErrorList.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseDetailsList {
    return {
      Status: isSet(object.Status)
        ? OrderStatus.fromJSON(object.Status)
        : undefined,
      error: isSet(object.error) ? ErrorList.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ResponseDetailsList): unknown {
    const obj: any = {};
    message.Status !== undefined &&
      (obj.Status = message.Status
        ? OrderStatus.toJSON(message.Status)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? ErrorList.toJSON(message.error) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ResponseDetailsList>): ResponseDetailsList {
    const message = createBaseResponseDetailsList();
    message.Status =
      object.Status !== undefined && object.Status !== null
        ? OrderStatus.fromPartial(object.Status)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? ErrorList.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseOrderStatus(): OrderStatus {
  return { OrderId: "", OrderStatus: "" };
}

export const OrderStatus = {
  encode(
    message: OrderStatus,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.OrderId !== "") {
      writer.uint32(10).string(message.OrderId);
    }
    if (message.OrderStatus !== "") {
      writer.uint32(18).string(message.OrderStatus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.OrderId = reader.string();
          break;
        case 2:
          message.OrderStatus = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrderStatus {
    return {
      OrderId: isSet(object.OrderId) ? String(object.OrderId) : "",
      OrderStatus: isSet(object.OrderStatus) ? String(object.OrderStatus) : "",
    };
  },

  toJSON(message: OrderStatus): unknown {
    const obj: any = {};
    message.OrderId !== undefined && (obj.OrderId = message.OrderId);
    message.OrderStatus !== undefined &&
      (obj.OrderStatus = message.OrderStatus);
    return obj;
  },

  fromPartial(object: DeepPartial<OrderStatus>): OrderStatus {
    const message = createBaseOrderStatus();
    message.OrderId = object.OrderId ?? "";
    message.OrderStatus = object.OrderStatus ?? "";
    return message;
  },
};

function createBaseErrorList(): ErrorList {
  return { code: [], message: [] };
}

export const ErrorList = {
  encode(
    message: ErrorList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.code) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.message) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ErrorList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseErrorList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code.push(reader.string());
          break;
        case 2:
          message.message.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ErrorList {
    return {
      code: Array.isArray(object?.code)
        ? object.code.map((e: any) => String(e))
        : [],
      message: Array.isArray(object?.message)
        ? object.message.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: ErrorList): unknown {
    const obj: any = {};
    if (message.code) {
      obj.code = message.code.map((e) => e);
    } else {
      obj.code = [];
    }
    if (message.message) {
      obj.message = message.message.map((e) => e);
    } else {
      obj.message = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ErrorList>): ErrorList {
    const message = createBaseErrorList();
    message.code = object.code?.map((e) => e) || [];
    message.message = object.message?.map((e) => e) || [];
    return message;
  },
};

export type ServiceDefinition = typeof ServiceDefinition;
export const ServiceDefinition = {
  name: "Service",
  fullName: "io.restorecommerce.order.Service",
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
    delete: {
      name: "Delete",
      requestType: DeleteRequest,
      requestStream: false,
      responseType: DeleteResponse,
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
    triggerFulfillment: {
      name: "TriggerFulfillment",
      requestType: OrderDataList,
      requestStream: false,
      responseType: FulfillmentResults,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface ServiceServiceImplementation<CallContextExt = {}> {
  read(
    request: ReadRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<OrderListResponse>>;
  create(
    request: OrderList,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<OrderListResponse>>;
  delete(
    request: DeleteRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<DeleteResponse>>;
  update(
    request: OrderList,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<OrderListResponse>>;
  upsert(
    request: OrderList,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<OrderListResponse>>;
  triggerFulfillment(
    request: OrderDataList,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<FulfillmentResults>>;
}

export interface ServiceClient<CallOptionsExt = {}> {
  read(
    request: DeepPartial<ReadRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<OrderListResponse>;
  create(
    request: DeepPartial<OrderList>,
    options?: CallOptions & CallOptionsExt
  ): Promise<OrderListResponse>;
  delete(
    request: DeepPartial<DeleteRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<DeleteResponse>;
  update(
    request: DeepPartial<OrderList>,
    options?: CallOptions & CallOptionsExt
  ): Promise<OrderListResponse>;
  upsert(
    request: DeepPartial<OrderList>,
    options?: CallOptions & CallOptionsExt
  ): Promise<OrderListResponse>;
  triggerFulfillment(
    request: DeepPartial<OrderDataList>,
    options?: CallOptions & CallOptionsExt
  ): Promise<FulfillmentResults>;
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
      [key: string]: {
        options?: { [key: string]: any };
        methods?: { [key: string]: { [key: string]: any } };
      };
    };
    messages?: {
      [key: string]: ProtoMetaMessageOptions;
    };
    enums?: {
      [key: string]: {
        options?: { [key: string]: any };
        values?: { [key: string]: { [key: string]: any } };
      };
    };
  };
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto1.fromPartial({
    name: "io/restorecommerce/order.proto",
    package: "io.restorecommerce.order",
    dependency: [
      "io/restorecommerce/resource_base.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/options.proto",
      "io/restorecommerce/contact_point.proto",
    ],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        name: "OrderList",
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.order.Order",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "items",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "total_count",
            number: 2,
            label: 1,
            type: 13,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "totalCount",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "subject",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "subject",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "OrderListResponse",
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.order.OrderResponse",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "items",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "total_count",
            number: 2,
            label: 1,
            type: 13,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "totalCount",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "operation_status",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.OperationStatus",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "operationStatus",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "OrderResponse",
        field: [
          {
            name: "payload",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.order.Order",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "payload",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "status",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.Status",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "status",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "Order",
        field: [
          {
            name: "id",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "id",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "meta",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.meta.Meta",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "meta",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "name",
            number: 3,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "name",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "description",
            number: 4,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "description",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "status",
            number: 5,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "status",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "customer_reference",
            number: 6,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "customerReference",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "items",
            number: 7,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.order.Items",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "items",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "total_price",
            number: 8,
            label: 1,
            type: 1,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "totalPrice",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "shipping_contact_point_id",
            number: 9,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "shippingContactPointId",
            options: {
              ctype: 0,
              packed: false,
              jstype: 0,
              lazy: false,
              deprecated: false,
              weak: false,
              uninterpretedOption: [],
            },
            proto3Optional: false,
          },
          {
            name: "billing_contact_point_id",
            number: 10,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "billingContactPointId",
            options: {
              ctype: 0,
              packed: false,
              jstype: 0,
              lazy: false,
              deprecated: false,
              weak: false,
              uninterpretedOption: [],
            },
            proto3Optional: false,
          },
          {
            name: "total_weight_in_kg",
            number: 11,
            label: 1,
            type: 1,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "totalWeightInKg",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "Items",
        field: [
          {
            name: "quantity_price",
            number: 1,
            label: 1,
            type: 1,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "quantityPrice",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "item",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.order.Item",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "item",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "Item",
        field: [
          {
            name: "product_variant_bundle_id",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "productVariantBundleId",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "product_name",
            number: 2,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "productName",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "product_description",
            number: 3,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "productDescription",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "manufacturer_name",
            number: 4,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "manufacturerName",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "manufacturer_description",
            number: 5,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "manufacturerDescription",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "prototype_name",
            number: 6,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "prototypeName",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "prototype_description",
            number: 7,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "prototypeDescription",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "quantity",
            number: 8,
            label: 1,
            type: 5,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "quantity",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "vat",
            number: 9,
            label: 1,
            type: 5,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "vat",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "price",
            number: 10,
            label: 1,
            type: 1,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "price",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "item_type",
            number: 11,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "itemType",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "taric_code",
            number: 12,
            label: 1,
            type: 1,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "taricCode",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "stock_keeping_unit",
            number: 13,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "stockKeepingUnit",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "weight_in_kg",
            number: 14,
            label: 1,
            type: 1,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "weightInKg",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "length_in_cm",
            number: 15,
            label: 1,
            type: 5,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "lengthInCm",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "width_in_cm",
            number: 16,
            label: 1,
            type: 5,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "widthInCm",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "height_in_cm",
            number: 17,
            label: 1,
            type: 5,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "heightInCm",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "Deleted",
        field: [
          {
            name: "id",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "id",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "OrderDataList",
        field: [
          {
            name: "order_data",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.order.OrderData",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "orderData",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "meta",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.meta.Meta",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "meta",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "OrderData",
        field: [
          {
            name: "order_id",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "orderId",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "shipments",
            number: 2,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.order.Shipments",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "shipments",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "Shipments",
        field: [
          {
            name: "total_weight_in_kg",
            number: 1,
            label: 1,
            type: 1,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "totalWeightInKg",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "individual_weight_in_kg",
            number: 2,
            label: 1,
            type: 1,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "individualWeightInKg",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "amount",
            number: 3,
            label: 1,
            type: 5,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "amount",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "export_type",
            number: 4,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "exportType",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "export_description",
            number: 5,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "exportDescription",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "customs_tariff_number",
            number: 6,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "customsTariffNumber",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "invoice_number",
            number: 7,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "invoiceNumber",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "customs_value",
            number: 8,
            label: 1,
            type: 1,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "customsValue",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "FulfillmentResults",
        field: [
          {
            name: "fulfillmentResults",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.order.ResponseDetailsList",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "fulfillmentResults",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "ResponseDetailsList",
        field: [
          {
            name: "Status",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.order.OrderStatus",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "Status",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "error",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.order.ErrorList",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "error",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "OrderStatus",
        field: [
          {
            name: "OrderId",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "OrderId",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "OrderStatus",
            number: 2,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "OrderStatus",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "ErrorList",
        field: [
          {
            name: "code",
            number: 1,
            label: 3,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "code",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "message",
            number: 2,
            label: 3,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "message",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
    ],
    enumType: [],
    service: [
      {
        name: "Service",
        method: [
          {
            name: "Read",
            inputType: ".io.restorecommerce.resourcebase.ReadRequest",
            outputType: ".io.restorecommerce.order.OrderListResponse",
            options: {
              deprecated: false,
              idempotencyLevel: 0,
              uninterpretedOption: [],
            },
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Create",
            inputType: ".io.restorecommerce.order.OrderList",
            outputType: ".io.restorecommerce.order.OrderListResponse",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Delete",
            inputType: ".io.restorecommerce.resourcebase.DeleteRequest",
            outputType: ".io.restorecommerce.resourcebase.DeleteResponse",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Update",
            inputType: ".io.restorecommerce.order.OrderList",
            outputType: ".io.restorecommerce.order.OrderListResponse",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Upsert",
            inputType: ".io.restorecommerce.order.OrderList",
            outputType: ".io.restorecommerce.order.OrderListResponse",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "TriggerFulfillment",
            inputType: ".io.restorecommerce.order.OrderDataList",
            outputType: ".io.restorecommerce.order.FulfillmentResults",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
        ],
        options: { deprecated: false, uninterpretedOption: [] },
      },
    ],
    extension: [],
    options: undefined,
    sourceCodeInfo: {
      location: [
        {
          path: [3, 5],
          span: [11, 0, 48],
          leadingComments: " Used by resolvers\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [4, 3, 2, 7],
          span: [53, 2, 25],
          leadingComments:
            " sum of all the quantity_price will be total_price\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [4, 3, 2, 8],
          span: [55, 2, 63, 4],
          leadingComments: " shipping address\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [4, 5, 2, 0],
          span: [83, 2, 39],
          leadingComments:
            " below identifier is id of product, variant or bundle\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [4, 9, 2, 1],
          span: [119, 2, 37],
          leadingComments:
            " below properties are used for international packaging\n",
          trailingComments: " each items weight\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 9, 2, 2],
          span: [120, 2, 19],
          leadingComments: "",
          trailingComments: " number of items\n",
          leadingDetachedComments: [],
        },
      ],
    },
    syntax: "proto3",
  }),
  references: {
    ".io.restorecommerce.order.OrderList": OrderList,
    ".io.restorecommerce.order.OrderListResponse": OrderListResponse,
    ".io.restorecommerce.order.OrderResponse": OrderResponse,
    ".io.restorecommerce.order.Order": Order,
    ".io.restorecommerce.order.Items": Items,
    ".io.restorecommerce.order.Item": Item,
    ".io.restorecommerce.order.Deleted": Deleted,
    ".io.restorecommerce.order.OrderDataList": OrderDataList,
    ".io.restorecommerce.order.OrderData": OrderData,
    ".io.restorecommerce.order.Shipments": Shipments,
    ".io.restorecommerce.order.FulfillmentResults": FulfillmentResults,
    ".io.restorecommerce.order.ResponseDetailsList": ResponseDetailsList,
    ".io.restorecommerce.order.OrderStatus": OrderStatus,
    ".io.restorecommerce.order.ErrorList": ErrorList,
  },
  dependencies: [
    protoMetadata1,
    protoMetadata2,
    protoMetadata3,
    protoMetadata4,
    protoMetadata5,
    protoMetadata6,
  ],
  options: {
    messages: {
      Order: {
        fields: {
          shipping_contact_point_id: {
            resolver: Resolver.decode(
              Buffer.from(
                "Ci4uaW8ucmVzdG9yZWNvbW1lcmNlLmNvbnRhY3RfcG9pbnQuQ29udGFjdFBvaW50EghyZXNvdXJjZRoNY29udGFjdF9wb2ludCIEUmVhZCoUc2hpcHBpbmdDb250YWN0UG9pbnQ=",
                "base64"
              )
            ),
          },
          billing_contact_point_id: {
            resolver: Resolver.decode(
              Buffer.from(
                "Ci4uaW8ucmVzdG9yZWNvbW1lcmNlLmNvbnRhY3RfcG9pbnQuQ29udGFjdFBvaW50EghyZXNvdXJjZRoNY29udGFjdF9wb2ludCIEUmVhZCoTYmlsbGluZ0NvbnRhY3RQb2ludA==",
                "base64"
              )
            ),
          },
        },
      },
    },
    services: {
      Service: {
        options: { service_name: "order" },
        methods: { Read: { is_query: true } },
      },
    },
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
