/* eslint-disable */
import { FileDescriptorProto } from "ts-proto-descriptors/google/protobuf/descriptor";
import {
  Subject,
  protoMetadata as protoMetadata3,
} from "../../io/restorecommerce/auth";
import {
  OperationStatus,
  Status,
  protoMetadata as protoMetadata4,
} from "../../io/restorecommerce/status";
import {
  Meta,
  protoMetadata as protoMetadata2,
} from "../../io/restorecommerce/meta";
import {
  protoMetadata as protoMetadata1,
  DeleteResponse,
  ReadRequest,
  DeleteRequest,
} from "../../io/restorecommerce/resource_base";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "io.restorecommerce.order";

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

export interface Order {
  id: string;
  meta?: Meta;
  name: string;
  description: string;
  status: string;
  customerReference: string;
  items: Items[];
  /** sum of all the quantity_price will be total_price */
  totalPrice: number;
  /** shipping address */
  shippingContactPointId: string;
  billingContactPointId: string;
  totalWeightInKg: number;
}

export interface Items {
  quantityPrice: number;
  item?: Item;
}

export interface Item {
  /** below identifier is id of product, variant or bundle */
  productVariantBundleId: string;
  productName: string;
  productDescription: string;
  manufacturerName: string;
  manufacturerDescription: string;
  prototypeName: string;
  prototypeDescription: string;
  quantity: number;
  vat: number;
  price: number;
  itemType: string;
  taricCode: number;
  stockKeepingUnit: string;
  weightInKg: number;
  lengthInCm: number;
  widthInCm: number;
  heightInCm: number;
}

export interface Deleted {
  id: string;
}

export interface OrderDataList {
  orderData: OrderData[];
  meta?: Meta;
}

export interface OrderData {
  orderId: string;
  shipments: Shipments[];
}

export interface Shipments {
  totalWeightInKg: number;
  /** below properties are used for international packaging */
  individualWeightInKg: number;
  /** number of items */
  amount: number;
  exportType: string;
  exportDescription: string;
  customsTariffNumber: string;
  invoiceNumber: string;
  customsValue: number;
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

const baseOrderList: object = { totalCount: 0 };

export const OrderList = {
  encode(message: OrderList, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): OrderList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseOrderList) as OrderList;
    message.items = [];
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
    const message = globalThis.Object.create(baseOrderList) as OrderList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Order.fromJSON(e));
      }
    }
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = Number(object.totalCount);
    } else {
      message.totalCount = 0;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<OrderList>): OrderList {
    const message = { ...baseOrderList } as OrderList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Order.fromPartial(e));
      }
    }
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = object.totalCount;
    } else {
      message.totalCount = 0;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  toJSON(message: OrderList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => (e ? Order.toJSON(e) : undefined));
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseOrderListResponse: object = { totalCount: 0 };

export const OrderListResponse = {
  encode(message: OrderListResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      OrderResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.operationStatus !== undefined) {
      OperationStatus.encode(
        message.operationStatus,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): OrderListResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseOrderListResponse
    ) as OrderListResponse;
    message.items = [];
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
          message.operationStatus = OperationStatus.decode(
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
    const message = globalThis.Object.create(
      baseOrderListResponse
    ) as OrderListResponse;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(OrderResponse.fromJSON(e));
      }
    }
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = Number(object.totalCount);
    } else {
      message.totalCount = 0;
    }
    if (
      object.operationStatus !== undefined &&
      object.operationStatus !== null
    ) {
      message.operationStatus = OperationStatus.fromJSON(
        object.operationStatus
      );
    } else {
      message.operationStatus = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<OrderListResponse>): OrderListResponse {
    const message = { ...baseOrderListResponse } as OrderListResponse;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(OrderResponse.fromPartial(e));
      }
    }
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = object.totalCount;
    } else {
      message.totalCount = 0;
    }
    if (
      object.operationStatus !== undefined &&
      object.operationStatus !== null
    ) {
      message.operationStatus = OperationStatus.fromPartial(
        object.operationStatus
      );
    } else {
      message.operationStatus = undefined;
    }
    return message;
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
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus
        ? OperationStatus.toJSON(message.operationStatus)
        : undefined);
    return obj;
  },
};

const baseOrderResponse: object = {};

export const OrderResponse = {
  encode(message: OrderResponse, writer: Writer = Writer.create()): Writer {
    if (message.payload !== undefined) {
      Order.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): OrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseOrderResponse
    ) as OrderResponse;
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
    const message = globalThis.Object.create(
      baseOrderResponse
    ) as OrderResponse;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = Order.fromJSON(object.payload);
    } else {
      message.payload = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromJSON(object.status);
    } else {
      message.status = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<OrderResponse>): OrderResponse {
    const message = { ...baseOrderResponse } as OrderResponse;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = Order.fromPartial(object.payload);
    } else {
      message.payload = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromPartial(object.status);
    } else {
      message.status = undefined;
    }
    return message;
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
};

const baseOrder: object = {
  id: "",
  name: "",
  description: "",
  status: "",
  customerReference: "",
  totalPrice: 0,
  shippingContactPointId: "",
  billingContactPointId: "",
  totalWeightInKg: 0,
};

export const Order = {
  encode(message: Order, writer: Writer = Writer.create()): Writer {
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
    if (message.customerReference !== "") {
      writer.uint32(50).string(message.customerReference);
    }
    for (const v of message.items) {
      Items.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.totalPrice !== 0) {
      writer.uint32(65).double(message.totalPrice);
    }
    if (message.shippingContactPointId !== "") {
      writer.uint32(74).string(message.shippingContactPointId);
    }
    if (message.billingContactPointId !== "") {
      writer.uint32(82).string(message.billingContactPointId);
    }
    if (message.totalWeightInKg !== 0) {
      writer.uint32(89).double(message.totalWeightInKg);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Order {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseOrder) as Order;
    message.items = [];
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
          message.customerReference = reader.string();
          break;
        case 7:
          message.items.push(Items.decode(reader, reader.uint32()));
          break;
        case 8:
          message.totalPrice = reader.double();
          break;
        case 9:
          message.shippingContactPointId = reader.string();
          break;
        case 10:
          message.billingContactPointId = reader.string();
          break;
        case 11:
          message.totalWeightInKg = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Order {
    const message = globalThis.Object.create(baseOrder) as Order;
    message.items = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromJSON(object.meta);
    } else {
      message.meta = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    if (
      object.customerReference !== undefined &&
      object.customerReference !== null
    ) {
      message.customerReference = String(object.customerReference);
    } else {
      message.customerReference = "";
    }
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Items.fromJSON(e));
      }
    }
    if (object.totalPrice !== undefined && object.totalPrice !== null) {
      message.totalPrice = Number(object.totalPrice);
    } else {
      message.totalPrice = 0;
    }
    if (
      object.shippingContactPointId !== undefined &&
      object.shippingContactPointId !== null
    ) {
      message.shippingContactPointId = String(object.shippingContactPointId);
    } else {
      message.shippingContactPointId = "";
    }
    if (
      object.billingContactPointId !== undefined &&
      object.billingContactPointId !== null
    ) {
      message.billingContactPointId = String(object.billingContactPointId);
    } else {
      message.billingContactPointId = "";
    }
    if (
      object.totalWeightInKg !== undefined &&
      object.totalWeightInKg !== null
    ) {
      message.totalWeightInKg = Number(object.totalWeightInKg);
    } else {
      message.totalWeightInKg = 0;
    }
    return message;
  },

  fromPartial(object: DeepPartial<Order>): Order {
    const message = { ...baseOrder } as Order;
    message.items = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromPartial(object.meta);
    } else {
      message.meta = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    if (
      object.customerReference !== undefined &&
      object.customerReference !== null
    ) {
      message.customerReference = object.customerReference;
    } else {
      message.customerReference = "";
    }
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Items.fromPartial(e));
      }
    }
    if (object.totalPrice !== undefined && object.totalPrice !== null) {
      message.totalPrice = object.totalPrice;
    } else {
      message.totalPrice = 0;
    }
    if (
      object.shippingContactPointId !== undefined &&
      object.shippingContactPointId !== null
    ) {
      message.shippingContactPointId = object.shippingContactPointId;
    } else {
      message.shippingContactPointId = "";
    }
    if (
      object.billingContactPointId !== undefined &&
      object.billingContactPointId !== null
    ) {
      message.billingContactPointId = object.billingContactPointId;
    } else {
      message.billingContactPointId = "";
    }
    if (
      object.totalWeightInKg !== undefined &&
      object.totalWeightInKg !== null
    ) {
      message.totalWeightInKg = object.totalWeightInKg;
    } else {
      message.totalWeightInKg = 0;
    }
    return message;
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
    message.customerReference !== undefined &&
      (obj.customerReference = message.customerReference);
    if (message.items) {
      obj.items = message.items.map((e) => (e ? Items.toJSON(e) : undefined));
    } else {
      obj.items = [];
    }
    message.totalPrice !== undefined && (obj.totalPrice = message.totalPrice);
    message.shippingContactPointId !== undefined &&
      (obj.shippingContactPointId = message.shippingContactPointId);
    message.billingContactPointId !== undefined &&
      (obj.billingContactPointId = message.billingContactPointId);
    message.totalWeightInKg !== undefined &&
      (obj.totalWeightInKg = message.totalWeightInKg);
    return obj;
  },
};

const baseItems: object = { quantityPrice: 0 };

export const Items = {
  encode(message: Items, writer: Writer = Writer.create()): Writer {
    if (message.quantityPrice !== 0) {
      writer.uint32(9).double(message.quantityPrice);
    }
    if (message.item !== undefined) {
      Item.encode(message.item, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Items {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseItems) as Items;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quantityPrice = reader.double();
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
    const message = globalThis.Object.create(baseItems) as Items;
    if (object.quantityPrice !== undefined && object.quantityPrice !== null) {
      message.quantityPrice = Number(object.quantityPrice);
    } else {
      message.quantityPrice = 0;
    }
    if (object.item !== undefined && object.item !== null) {
      message.item = Item.fromJSON(object.item);
    } else {
      message.item = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<Items>): Items {
    const message = { ...baseItems } as Items;
    if (object.quantityPrice !== undefined && object.quantityPrice !== null) {
      message.quantityPrice = object.quantityPrice;
    } else {
      message.quantityPrice = 0;
    }
    if (object.item !== undefined && object.item !== null) {
      message.item = Item.fromPartial(object.item);
    } else {
      message.item = undefined;
    }
    return message;
  },

  toJSON(message: Items): unknown {
    const obj: any = {};
    message.quantityPrice !== undefined &&
      (obj.quantityPrice = message.quantityPrice);
    message.item !== undefined &&
      (obj.item = message.item ? Item.toJSON(message.item) : undefined);
    return obj;
  },
};

const baseItem: object = {
  productVariantBundleId: "",
  productName: "",
  productDescription: "",
  manufacturerName: "",
  manufacturerDescription: "",
  prototypeName: "",
  prototypeDescription: "",
  quantity: 0,
  vat: 0,
  price: 0,
  itemType: "",
  taricCode: 0,
  stockKeepingUnit: "",
  weightInKg: 0,
  lengthInCm: 0,
  widthInCm: 0,
  heightInCm: 0,
};

export const Item = {
  encode(message: Item, writer: Writer = Writer.create()): Writer {
    if (message.productVariantBundleId !== "") {
      writer.uint32(10).string(message.productVariantBundleId);
    }
    if (message.productName !== "") {
      writer.uint32(18).string(message.productName);
    }
    if (message.productDescription !== "") {
      writer.uint32(26).string(message.productDescription);
    }
    if (message.manufacturerName !== "") {
      writer.uint32(34).string(message.manufacturerName);
    }
    if (message.manufacturerDescription !== "") {
      writer.uint32(42).string(message.manufacturerDescription);
    }
    if (message.prototypeName !== "") {
      writer.uint32(50).string(message.prototypeName);
    }
    if (message.prototypeDescription !== "") {
      writer.uint32(58).string(message.prototypeDescription);
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
    if (message.itemType !== "") {
      writer.uint32(90).string(message.itemType);
    }
    if (message.taricCode !== 0) {
      writer.uint32(97).double(message.taricCode);
    }
    if (message.stockKeepingUnit !== "") {
      writer.uint32(106).string(message.stockKeepingUnit);
    }
    if (message.weightInKg !== 0) {
      writer.uint32(113).double(message.weightInKg);
    }
    if (message.lengthInCm !== 0) {
      writer.uint32(120).int32(message.lengthInCm);
    }
    if (message.widthInCm !== 0) {
      writer.uint32(128).int32(message.widthInCm);
    }
    if (message.heightInCm !== 0) {
      writer.uint32(136).int32(message.heightInCm);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Item {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseItem) as Item;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.productVariantBundleId = reader.string();
          break;
        case 2:
          message.productName = reader.string();
          break;
        case 3:
          message.productDescription = reader.string();
          break;
        case 4:
          message.manufacturerName = reader.string();
          break;
        case 5:
          message.manufacturerDescription = reader.string();
          break;
        case 6:
          message.prototypeName = reader.string();
          break;
        case 7:
          message.prototypeDescription = reader.string();
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
          message.itemType = reader.string();
          break;
        case 12:
          message.taricCode = reader.double();
          break;
        case 13:
          message.stockKeepingUnit = reader.string();
          break;
        case 14:
          message.weightInKg = reader.double();
          break;
        case 15:
          message.lengthInCm = reader.int32();
          break;
        case 16:
          message.widthInCm = reader.int32();
          break;
        case 17:
          message.heightInCm = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Item {
    const message = globalThis.Object.create(baseItem) as Item;
    if (
      object.productVariantBundleId !== undefined &&
      object.productVariantBundleId !== null
    ) {
      message.productVariantBundleId = String(object.productVariantBundleId);
    } else {
      message.productVariantBundleId = "";
    }
    if (object.productName !== undefined && object.productName !== null) {
      message.productName = String(object.productName);
    } else {
      message.productName = "";
    }
    if (
      object.productDescription !== undefined &&
      object.productDescription !== null
    ) {
      message.productDescription = String(object.productDescription);
    } else {
      message.productDescription = "";
    }
    if (
      object.manufacturerName !== undefined &&
      object.manufacturerName !== null
    ) {
      message.manufacturerName = String(object.manufacturerName);
    } else {
      message.manufacturerName = "";
    }
    if (
      object.manufacturerDescription !== undefined &&
      object.manufacturerDescription !== null
    ) {
      message.manufacturerDescription = String(object.manufacturerDescription);
    } else {
      message.manufacturerDescription = "";
    }
    if (object.prototypeName !== undefined && object.prototypeName !== null) {
      message.prototypeName = String(object.prototypeName);
    } else {
      message.prototypeName = "";
    }
    if (
      object.prototypeDescription !== undefined &&
      object.prototypeDescription !== null
    ) {
      message.prototypeDescription = String(object.prototypeDescription);
    } else {
      message.prototypeDescription = "";
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = Number(object.quantity);
    } else {
      message.quantity = 0;
    }
    if (object.vat !== undefined && object.vat !== null) {
      message.vat = Number(object.vat);
    } else {
      message.vat = 0;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Number(object.price);
    } else {
      message.price = 0;
    }
    if (object.itemType !== undefined && object.itemType !== null) {
      message.itemType = String(object.itemType);
    } else {
      message.itemType = "";
    }
    if (object.taricCode !== undefined && object.taricCode !== null) {
      message.taricCode = Number(object.taricCode);
    } else {
      message.taricCode = 0;
    }
    if (
      object.stockKeepingUnit !== undefined &&
      object.stockKeepingUnit !== null
    ) {
      message.stockKeepingUnit = String(object.stockKeepingUnit);
    } else {
      message.stockKeepingUnit = "";
    }
    if (object.weightInKg !== undefined && object.weightInKg !== null) {
      message.weightInKg = Number(object.weightInKg);
    } else {
      message.weightInKg = 0;
    }
    if (object.lengthInCm !== undefined && object.lengthInCm !== null) {
      message.lengthInCm = Number(object.lengthInCm);
    } else {
      message.lengthInCm = 0;
    }
    if (object.widthInCm !== undefined && object.widthInCm !== null) {
      message.widthInCm = Number(object.widthInCm);
    } else {
      message.widthInCm = 0;
    }
    if (object.heightInCm !== undefined && object.heightInCm !== null) {
      message.heightInCm = Number(object.heightInCm);
    } else {
      message.heightInCm = 0;
    }
    return message;
  },

  fromPartial(object: DeepPartial<Item>): Item {
    const message = { ...baseItem } as Item;
    if (
      object.productVariantBundleId !== undefined &&
      object.productVariantBundleId !== null
    ) {
      message.productVariantBundleId = object.productVariantBundleId;
    } else {
      message.productVariantBundleId = "";
    }
    if (object.productName !== undefined && object.productName !== null) {
      message.productName = object.productName;
    } else {
      message.productName = "";
    }
    if (
      object.productDescription !== undefined &&
      object.productDescription !== null
    ) {
      message.productDescription = object.productDescription;
    } else {
      message.productDescription = "";
    }
    if (
      object.manufacturerName !== undefined &&
      object.manufacturerName !== null
    ) {
      message.manufacturerName = object.manufacturerName;
    } else {
      message.manufacturerName = "";
    }
    if (
      object.manufacturerDescription !== undefined &&
      object.manufacturerDescription !== null
    ) {
      message.manufacturerDescription = object.manufacturerDescription;
    } else {
      message.manufacturerDescription = "";
    }
    if (object.prototypeName !== undefined && object.prototypeName !== null) {
      message.prototypeName = object.prototypeName;
    } else {
      message.prototypeName = "";
    }
    if (
      object.prototypeDescription !== undefined &&
      object.prototypeDescription !== null
    ) {
      message.prototypeDescription = object.prototypeDescription;
    } else {
      message.prototypeDescription = "";
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = object.quantity;
    } else {
      message.quantity = 0;
    }
    if (object.vat !== undefined && object.vat !== null) {
      message.vat = object.vat;
    } else {
      message.vat = 0;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    } else {
      message.price = 0;
    }
    if (object.itemType !== undefined && object.itemType !== null) {
      message.itemType = object.itemType;
    } else {
      message.itemType = "";
    }
    if (object.taricCode !== undefined && object.taricCode !== null) {
      message.taricCode = object.taricCode;
    } else {
      message.taricCode = 0;
    }
    if (
      object.stockKeepingUnit !== undefined &&
      object.stockKeepingUnit !== null
    ) {
      message.stockKeepingUnit = object.stockKeepingUnit;
    } else {
      message.stockKeepingUnit = "";
    }
    if (object.weightInKg !== undefined && object.weightInKg !== null) {
      message.weightInKg = object.weightInKg;
    } else {
      message.weightInKg = 0;
    }
    if (object.lengthInCm !== undefined && object.lengthInCm !== null) {
      message.lengthInCm = object.lengthInCm;
    } else {
      message.lengthInCm = 0;
    }
    if (object.widthInCm !== undefined && object.widthInCm !== null) {
      message.widthInCm = object.widthInCm;
    } else {
      message.widthInCm = 0;
    }
    if (object.heightInCm !== undefined && object.heightInCm !== null) {
      message.heightInCm = object.heightInCm;
    } else {
      message.heightInCm = 0;
    }
    return message;
  },

  toJSON(message: Item): unknown {
    const obj: any = {};
    message.productVariantBundleId !== undefined &&
      (obj.productVariantBundleId = message.productVariantBundleId);
    message.productName !== undefined &&
      (obj.productName = message.productName);
    message.productDescription !== undefined &&
      (obj.productDescription = message.productDescription);
    message.manufacturerName !== undefined &&
      (obj.manufacturerName = message.manufacturerName);
    message.manufacturerDescription !== undefined &&
      (obj.manufacturerDescription = message.manufacturerDescription);
    message.prototypeName !== undefined &&
      (obj.prototypeName = message.prototypeName);
    message.prototypeDescription !== undefined &&
      (obj.prototypeDescription = message.prototypeDescription);
    message.quantity !== undefined && (obj.quantity = message.quantity);
    message.vat !== undefined && (obj.vat = message.vat);
    message.price !== undefined && (obj.price = message.price);
    message.itemType !== undefined && (obj.itemType = message.itemType);
    message.taricCode !== undefined && (obj.taricCode = message.taricCode);
    message.stockKeepingUnit !== undefined &&
      (obj.stockKeepingUnit = message.stockKeepingUnit);
    message.weightInKg !== undefined && (obj.weightInKg = message.weightInKg);
    message.lengthInCm !== undefined && (obj.lengthInCm = message.lengthInCm);
    message.widthInCm !== undefined && (obj.widthInCm = message.widthInCm);
    message.heightInCm !== undefined && (obj.heightInCm = message.heightInCm);
    return obj;
  },
};

const baseDeleted: object = { id: "" };

export const Deleted = {
  encode(message: Deleted, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Deleted {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseDeleted) as Deleted;
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
    const message = globalThis.Object.create(baseDeleted) as Deleted;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<Deleted>): Deleted {
    const message = { ...baseDeleted } as Deleted;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: Deleted): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
};

const baseOrderDataList: object = {};

export const OrderDataList = {
  encode(message: OrderDataList, writer: Writer = Writer.create()): Writer {
    for (const v of message.orderData) {
      OrderData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): OrderDataList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseOrderDataList
    ) as OrderDataList;
    message.orderData = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderData.push(OrderData.decode(reader, reader.uint32()));
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
    const message = globalThis.Object.create(
      baseOrderDataList
    ) as OrderDataList;
    message.orderData = [];
    if (object.orderData !== undefined && object.orderData !== null) {
      for (const e of object.orderData) {
        message.orderData.push(OrderData.fromJSON(e));
      }
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromJSON(object.meta);
    } else {
      message.meta = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<OrderDataList>): OrderDataList {
    const message = { ...baseOrderDataList } as OrderDataList;
    message.orderData = [];
    if (object.orderData !== undefined && object.orderData !== null) {
      for (const e of object.orderData) {
        message.orderData.push(OrderData.fromPartial(e));
      }
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromPartial(object.meta);
    } else {
      message.meta = undefined;
    }
    return message;
  },

  toJSON(message: OrderDataList): unknown {
    const obj: any = {};
    if (message.orderData) {
      obj.orderData = message.orderData.map((e) =>
        e ? OrderData.toJSON(e) : undefined
      );
    } else {
      obj.orderData = [];
    }
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    return obj;
  },
};

const baseOrderData: object = { orderId: "" };

export const OrderData = {
  encode(message: OrderData, writer: Writer = Writer.create()): Writer {
    if (message.orderId !== "") {
      writer.uint32(10).string(message.orderId);
    }
    for (const v of message.shipments) {
      Shipments.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): OrderData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseOrderData) as OrderData;
    message.shipments = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = reader.string();
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
    const message = globalThis.Object.create(baseOrderData) as OrderData;
    message.shipments = [];
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = String(object.orderId);
    } else {
      message.orderId = "";
    }
    if (object.shipments !== undefined && object.shipments !== null) {
      for (const e of object.shipments) {
        message.shipments.push(Shipments.fromJSON(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<OrderData>): OrderData {
    const message = { ...baseOrderData } as OrderData;
    message.shipments = [];
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = object.orderId;
    } else {
      message.orderId = "";
    }
    if (object.shipments !== undefined && object.shipments !== null) {
      for (const e of object.shipments) {
        message.shipments.push(Shipments.fromPartial(e));
      }
    }
    return message;
  },

  toJSON(message: OrderData): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = message.orderId);
    if (message.shipments) {
      obj.shipments = message.shipments.map((e) =>
        e ? Shipments.toJSON(e) : undefined
      );
    } else {
      obj.shipments = [];
    }
    return obj;
  },
};

const baseShipments: object = {
  totalWeightInKg: 0,
  individualWeightInKg: 0,
  amount: 0,
  exportType: "",
  exportDescription: "",
  customsTariffNumber: "",
  invoiceNumber: "",
  customsValue: 0,
};

export const Shipments = {
  encode(message: Shipments, writer: Writer = Writer.create()): Writer {
    if (message.totalWeightInKg !== 0) {
      writer.uint32(9).double(message.totalWeightInKg);
    }
    if (message.individualWeightInKg !== 0) {
      writer.uint32(17).double(message.individualWeightInKg);
    }
    if (message.amount !== 0) {
      writer.uint32(24).int32(message.amount);
    }
    if (message.exportType !== "") {
      writer.uint32(34).string(message.exportType);
    }
    if (message.exportDescription !== "") {
      writer.uint32(42).string(message.exportDescription);
    }
    if (message.customsTariffNumber !== "") {
      writer.uint32(50).string(message.customsTariffNumber);
    }
    if (message.invoiceNumber !== "") {
      writer.uint32(58).string(message.invoiceNumber);
    }
    if (message.customsValue !== 0) {
      writer.uint32(65).double(message.customsValue);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Shipments {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseShipments) as Shipments;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalWeightInKg = reader.double();
          break;
        case 2:
          message.individualWeightInKg = reader.double();
          break;
        case 3:
          message.amount = reader.int32();
          break;
        case 4:
          message.exportType = reader.string();
          break;
        case 5:
          message.exportDescription = reader.string();
          break;
        case 6:
          message.customsTariffNumber = reader.string();
          break;
        case 7:
          message.invoiceNumber = reader.string();
          break;
        case 8:
          message.customsValue = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Shipments {
    const message = globalThis.Object.create(baseShipments) as Shipments;
    if (
      object.totalWeightInKg !== undefined &&
      object.totalWeightInKg !== null
    ) {
      message.totalWeightInKg = Number(object.totalWeightInKg);
    } else {
      message.totalWeightInKg = 0;
    }
    if (
      object.individualWeightInKg !== undefined &&
      object.individualWeightInKg !== null
    ) {
      message.individualWeightInKg = Number(object.individualWeightInKg);
    } else {
      message.individualWeightInKg = 0;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Number(object.amount);
    } else {
      message.amount = 0;
    }
    if (object.exportType !== undefined && object.exportType !== null) {
      message.exportType = String(object.exportType);
    } else {
      message.exportType = "";
    }
    if (
      object.exportDescription !== undefined &&
      object.exportDescription !== null
    ) {
      message.exportDescription = String(object.exportDescription);
    } else {
      message.exportDescription = "";
    }
    if (
      object.customsTariffNumber !== undefined &&
      object.customsTariffNumber !== null
    ) {
      message.customsTariffNumber = String(object.customsTariffNumber);
    } else {
      message.customsTariffNumber = "";
    }
    if (object.invoiceNumber !== undefined && object.invoiceNumber !== null) {
      message.invoiceNumber = String(object.invoiceNumber);
    } else {
      message.invoiceNumber = "";
    }
    if (object.customsValue !== undefined && object.customsValue !== null) {
      message.customsValue = Number(object.customsValue);
    } else {
      message.customsValue = 0;
    }
    return message;
  },

  fromPartial(object: DeepPartial<Shipments>): Shipments {
    const message = { ...baseShipments } as Shipments;
    if (
      object.totalWeightInKg !== undefined &&
      object.totalWeightInKg !== null
    ) {
      message.totalWeightInKg = object.totalWeightInKg;
    } else {
      message.totalWeightInKg = 0;
    }
    if (
      object.individualWeightInKg !== undefined &&
      object.individualWeightInKg !== null
    ) {
      message.individualWeightInKg = object.individualWeightInKg;
    } else {
      message.individualWeightInKg = 0;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = 0;
    }
    if (object.exportType !== undefined && object.exportType !== null) {
      message.exportType = object.exportType;
    } else {
      message.exportType = "";
    }
    if (
      object.exportDescription !== undefined &&
      object.exportDescription !== null
    ) {
      message.exportDescription = object.exportDescription;
    } else {
      message.exportDescription = "";
    }
    if (
      object.customsTariffNumber !== undefined &&
      object.customsTariffNumber !== null
    ) {
      message.customsTariffNumber = object.customsTariffNumber;
    } else {
      message.customsTariffNumber = "";
    }
    if (object.invoiceNumber !== undefined && object.invoiceNumber !== null) {
      message.invoiceNumber = object.invoiceNumber;
    } else {
      message.invoiceNumber = "";
    }
    if (object.customsValue !== undefined && object.customsValue !== null) {
      message.customsValue = object.customsValue;
    } else {
      message.customsValue = 0;
    }
    return message;
  },

  toJSON(message: Shipments): unknown {
    const obj: any = {};
    message.totalWeightInKg !== undefined &&
      (obj.totalWeightInKg = message.totalWeightInKg);
    message.individualWeightInKg !== undefined &&
      (obj.individualWeightInKg = message.individualWeightInKg);
    message.amount !== undefined && (obj.amount = message.amount);
    message.exportType !== undefined && (obj.exportType = message.exportType);
    message.exportDescription !== undefined &&
      (obj.exportDescription = message.exportDescription);
    message.customsTariffNumber !== undefined &&
      (obj.customsTariffNumber = message.customsTariffNumber);
    message.invoiceNumber !== undefined &&
      (obj.invoiceNumber = message.invoiceNumber);
    message.customsValue !== undefined &&
      (obj.customsValue = message.customsValue);
    return obj;
  },
};

const baseFulfillmentResults: object = {};

export const FulfillmentResults = {
  encode(
    message: FulfillmentResults,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.fulfillmentResults) {
      ResponseDetailsList.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): FulfillmentResults {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseFulfillmentResults
    ) as FulfillmentResults;
    message.fulfillmentResults = [];
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
    const message = globalThis.Object.create(
      baseFulfillmentResults
    ) as FulfillmentResults;
    message.fulfillmentResults = [];
    if (
      object.fulfillmentResults !== undefined &&
      object.fulfillmentResults !== null
    ) {
      for (const e of object.fulfillmentResults) {
        message.fulfillmentResults.push(ResponseDetailsList.fromJSON(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<FulfillmentResults>): FulfillmentResults {
    const message = { ...baseFulfillmentResults } as FulfillmentResults;
    message.fulfillmentResults = [];
    if (
      object.fulfillmentResults !== undefined &&
      object.fulfillmentResults !== null
    ) {
      for (const e of object.fulfillmentResults) {
        message.fulfillmentResults.push(ResponseDetailsList.fromPartial(e));
      }
    }
    return message;
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
};

const baseResponseDetailsList: object = {};

export const ResponseDetailsList = {
  encode(
    message: ResponseDetailsList,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Status !== undefined) {
      OrderStatus.encode(message.Status, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      ErrorList.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ResponseDetailsList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseResponseDetailsList
    ) as ResponseDetailsList;
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
    const message = globalThis.Object.create(
      baseResponseDetailsList
    ) as ResponseDetailsList;
    if (object.Status !== undefined && object.Status !== null) {
      message.Status = OrderStatus.fromJSON(object.Status);
    } else {
      message.Status = undefined;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = ErrorList.fromJSON(object.error);
    } else {
      message.error = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<ResponseDetailsList>): ResponseDetailsList {
    const message = { ...baseResponseDetailsList } as ResponseDetailsList;
    if (object.Status !== undefined && object.Status !== null) {
      message.Status = OrderStatus.fromPartial(object.Status);
    } else {
      message.Status = undefined;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = ErrorList.fromPartial(object.error);
    } else {
      message.error = undefined;
    }
    return message;
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
};

const baseOrderStatus: object = { OrderId: "", OrderStatus: "" };

export const OrderStatus = {
  encode(message: OrderStatus, writer: Writer = Writer.create()): Writer {
    if (message.OrderId !== "") {
      writer.uint32(10).string(message.OrderId);
    }
    if (message.OrderStatus !== "") {
      writer.uint32(18).string(message.OrderStatus);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): OrderStatus {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseOrderStatus) as OrderStatus;
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
    const message = globalThis.Object.create(baseOrderStatus) as OrderStatus;
    if (object.OrderId !== undefined && object.OrderId !== null) {
      message.OrderId = String(object.OrderId);
    } else {
      message.OrderId = "";
    }
    if (object.OrderStatus !== undefined && object.OrderStatus !== null) {
      message.OrderStatus = String(object.OrderStatus);
    } else {
      message.OrderStatus = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<OrderStatus>): OrderStatus {
    const message = { ...baseOrderStatus } as OrderStatus;
    if (object.OrderId !== undefined && object.OrderId !== null) {
      message.OrderId = object.OrderId;
    } else {
      message.OrderId = "";
    }
    if (object.OrderStatus !== undefined && object.OrderStatus !== null) {
      message.OrderStatus = object.OrderStatus;
    } else {
      message.OrderStatus = "";
    }
    return message;
  },

  toJSON(message: OrderStatus): unknown {
    const obj: any = {};
    message.OrderId !== undefined && (obj.OrderId = message.OrderId);
    message.OrderStatus !== undefined &&
      (obj.OrderStatus = message.OrderStatus);
    return obj;
  },
};

const baseErrorList: object = { code: "", message: "" };

export const ErrorList = {
  encode(message: ErrorList, writer: Writer = Writer.create()): Writer {
    for (const v of message.code) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.message) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ErrorList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseErrorList) as ErrorList;
    message.code = [];
    message.message = [];
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
    const message = globalThis.Object.create(baseErrorList) as ErrorList;
    message.code = [];
    message.message = [];
    if (object.code !== undefined && object.code !== null) {
      for (const e of object.code) {
        message.code.push(String(e));
      }
    }
    if (object.message !== undefined && object.message !== null) {
      for (const e of object.message) {
        message.message.push(String(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<ErrorList>): ErrorList {
    const message = { ...baseErrorList } as ErrorList;
    message.code = [];
    message.message = [];
    if (object.code !== undefined && object.code !== null) {
      for (const e of object.code) {
        message.code.push(e);
      }
    }
    if (object.message !== undefined && object.message !== null) {
      for (const e of object.message) {
        message.message.push(e);
      }
    }
    return message;
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
};

export interface Service {
  Read(request: ReadRequest): Promise<OrderListResponse>;
  Create(request: OrderList): Promise<OrderListResponse>;
  Delete(request: DeleteRequest): Promise<DeleteResponse>;
  Update(request: OrderList): Promise<OrderListResponse>;
  Upsert(request: OrderList): Promise<OrderListResponse>;
  TriggerFulfillment(request: OrderDataList): Promise<FulfillmentResults>;
}

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto.fromPartial({
    dependency: [
      "io/restorecommerce/resource_base.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
    ],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.order.Order",
            jsonName: "items",
          },
          {
            name: "total_count",
            number: 2,
            label: 1,
            type: 13,
            jsonName: "totalCount",
          },
          {
            name: "subject",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            jsonName: "subject",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "OrderList",
      },
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.order.OrderResponse",
            jsonName: "items",
          },
          {
            name: "total_count",
            number: 2,
            label: 1,
            type: 13,
            jsonName: "totalCount",
          },
          {
            name: "operation_status",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.OperationStatus",
            jsonName: "operationStatus",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "OrderListResponse",
      },
      {
        field: [
          {
            name: "payload",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.order.Order",
            jsonName: "payload",
          },
          {
            name: "status",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.Status",
            jsonName: "status",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "OrderResponse",
      },
      {
        field: [
          { name: "id", number: 1, label: 1, type: 9, jsonName: "id" },
          {
            name: "meta",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.meta.Meta",
            jsonName: "meta",
          },
          { name: "name", number: 3, label: 1, type: 9, jsonName: "name" },
          {
            name: "description",
            number: 4,
            label: 1,
            type: 9,
            jsonName: "description",
          },
          { name: "status", number: 5, label: 1, type: 9, jsonName: "status" },
          {
            name: "customer_reference",
            number: 6,
            label: 1,
            type: 9,
            jsonName: "customerReference",
          },
          {
            name: "items",
            number: 7,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.order.Items",
            jsonName: "items",
          },
          {
            name: "total_price",
            number: 8,
            label: 1,
            type: 1,
            jsonName: "totalPrice",
          },
          {
            name: "shipping_contact_point_id",
            number: 9,
            label: 1,
            type: 9,
            jsonName: "shippingContactPointId",
          },
          {
            name: "billing_contact_point_id",
            number: 10,
            label: 1,
            type: 9,
            jsonName: "billingContactPointId",
          },
          {
            name: "total_weight_in_kg",
            number: 11,
            label: 1,
            type: 1,
            jsonName: "totalWeightInKg",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Order",
      },
      {
        field: [
          {
            name: "quantity_price",
            number: 1,
            label: 1,
            type: 1,
            jsonName: "quantityPrice",
          },
          {
            name: "item",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.order.Item",
            jsonName: "item",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Items",
      },
      {
        field: [
          {
            name: "product_variant_bundle_id",
            number: 1,
            label: 1,
            type: 9,
            jsonName: "productVariantBundleId",
          },
          {
            name: "product_name",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "productName",
          },
          {
            name: "product_description",
            number: 3,
            label: 1,
            type: 9,
            jsonName: "productDescription",
          },
          {
            name: "manufacturer_name",
            number: 4,
            label: 1,
            type: 9,
            jsonName: "manufacturerName",
          },
          {
            name: "manufacturer_description",
            number: 5,
            label: 1,
            type: 9,
            jsonName: "manufacturerDescription",
          },
          {
            name: "prototype_name",
            number: 6,
            label: 1,
            type: 9,
            jsonName: "prototypeName",
          },
          {
            name: "prototype_description",
            number: 7,
            label: 1,
            type: 9,
            jsonName: "prototypeDescription",
          },
          {
            name: "quantity",
            number: 8,
            label: 1,
            type: 5,
            jsonName: "quantity",
          },
          { name: "vat", number: 9, label: 1, type: 5, jsonName: "vat" },
          { name: "price", number: 10, label: 1, type: 1, jsonName: "price" },
          {
            name: "item_type",
            number: 11,
            label: 1,
            type: 9,
            jsonName: "itemType",
          },
          {
            name: "taric_code",
            number: 12,
            label: 1,
            type: 1,
            jsonName: "taricCode",
          },
          {
            name: "stock_keeping_unit",
            number: 13,
            label: 1,
            type: 9,
            jsonName: "stockKeepingUnit",
          },
          {
            name: "weight_in_kg",
            number: 14,
            label: 1,
            type: 1,
            jsonName: "weightInKg",
          },
          {
            name: "length_in_cm",
            number: 15,
            label: 1,
            type: 5,
            jsonName: "lengthInCm",
          },
          {
            name: "width_in_cm",
            number: 16,
            label: 1,
            type: 5,
            jsonName: "widthInCm",
          },
          {
            name: "height_in_cm",
            number: 17,
            label: 1,
            type: 5,
            jsonName: "heightInCm",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Item",
      },
      {
        field: [{ name: "id", number: 1, label: 1, type: 9, jsonName: "id" }],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Deleted",
      },
      {
        field: [
          {
            name: "order_data",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.order.OrderData",
            jsonName: "orderData",
          },
          {
            name: "meta",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.meta.Meta",
            jsonName: "meta",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "OrderDataList",
      },
      {
        field: [
          {
            name: "order_id",
            number: 1,
            label: 1,
            type: 9,
            jsonName: "orderId",
          },
          {
            name: "shipments",
            number: 2,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.order.Shipments",
            jsonName: "shipments",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "OrderData",
      },
      {
        field: [
          {
            name: "total_weight_in_kg",
            number: 1,
            label: 1,
            type: 1,
            jsonName: "totalWeightInKg",
          },
          {
            name: "individual_weight_in_kg",
            number: 2,
            label: 1,
            type: 1,
            jsonName: "individualWeightInKg",
          },
          { name: "amount", number: 3, label: 1, type: 5, jsonName: "amount" },
          {
            name: "export_type",
            number: 4,
            label: 1,
            type: 9,
            jsonName: "exportType",
          },
          {
            name: "export_description",
            number: 5,
            label: 1,
            type: 9,
            jsonName: "exportDescription",
          },
          {
            name: "customs_tariff_number",
            number: 6,
            label: 1,
            type: 9,
            jsonName: "customsTariffNumber",
          },
          {
            name: "invoice_number",
            number: 7,
            label: 1,
            type: 9,
            jsonName: "invoiceNumber",
          },
          {
            name: "customs_value",
            number: 8,
            label: 1,
            type: 1,
            jsonName: "customsValue",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Shipments",
      },
      {
        field: [
          {
            name: "fulfillmentResults",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.order.ResponseDetailsList",
            jsonName: "fulfillmentResults",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "FulfillmentResults",
      },
      {
        field: [
          {
            name: "Status",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.order.OrderStatus",
            jsonName: "Status",
          },
          {
            name: "error",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.order.ErrorList",
            jsonName: "error",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "ResponseDetailsList",
      },
      {
        field: [
          {
            name: "OrderId",
            number: 1,
            label: 1,
            type: 9,
            jsonName: "OrderId",
          },
          {
            name: "OrderStatus",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "OrderStatus",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "OrderStatus",
      },
      {
        field: [
          { name: "code", number: 1, label: 3, type: 9, jsonName: "code" },
          {
            name: "message",
            number: 2,
            label: 3,
            type: 9,
            jsonName: "message",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "ErrorList",
      },
    ],
    enumType: [],
    service: [
      {
        method: [
          {
            name: "Read",
            inputType: ".io.restorecommerce.resourcebase.ReadRequest",
            outputType: ".io.restorecommerce.order.OrderListResponse",
          },
          {
            name: "Create",
            inputType: ".io.restorecommerce.order.OrderList",
            outputType: ".io.restorecommerce.order.OrderListResponse",
          },
          {
            name: "Delete",
            inputType: ".io.restorecommerce.resourcebase.DeleteRequest",
            outputType: ".io.restorecommerce.resourcebase.DeleteResponse",
          },
          {
            name: "Update",
            inputType: ".io.restorecommerce.order.OrderList",
            outputType: ".io.restorecommerce.order.OrderListResponse",
          },
          {
            name: "Upsert",
            inputType: ".io.restorecommerce.order.OrderList",
            outputType: ".io.restorecommerce.order.OrderListResponse",
          },
          {
            name: "TriggerFulfillment",
            inputType: ".io.restorecommerce.order.OrderDataList",
            outputType: ".io.restorecommerce.order.FulfillmentResults",
          },
        ],
        name: "Service",
      },
    ],
    extension: [],
    name: "io/restorecommerce/order.proto",
    package: "io.restorecommerce.order",
    sourceCodeInfo: {
      location: [
        {
          path: [4, 3, 2, 7],
          span: [45, 2, 25],
          leadingDetachedComments: [],
          leadingComments:
            " sum of all the quantity_price will be total_price\n",
        },
        {
          path: [4, 3, 2, 8],
          span: [47, 2, 39],
          leadingDetachedComments: [],
          leadingComments: " shipping address\n",
        },
        {
          path: [4, 5, 2, 0],
          span: [59, 2, 39],
          leadingDetachedComments: [],
          leadingComments:
            " below identifier is id of product, variant or bundle\n",
        },
        {
          path: [4, 9, 2, 1],
          span: [95, 2, 37],
          leadingDetachedComments: [],
          leadingComments:
            " below properties are used for international packaging\n",
          trailingComments: " each items weight\n",
        },
        {
          path: [4, 9, 2, 2],
          span: [96, 2, 19],
          leadingDetachedComments: [],
          trailingComments: " number of items\n",
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
  ],
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
