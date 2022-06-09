/* eslint-disable */
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
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
import {
  protoMetadata as protoMetadata5,
  Resolver,
} from "../../io/restorecommerce/options";
import { protoMetadata as protoMetadata6 } from "../../io/restorecommerce/contact_point";

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

function createBaseOrderList(): OrderList {
  return { items: [], totalCount: 0, subject: undefined };
}

export const OrderList = {
  encode(
    message: OrderList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => Order.fromJSON(e))
        : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
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
    message.totalCount !== undefined &&
      (obj.totalCount = Math.round(message.totalCount));
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<OrderList>): OrderList {
    const message = createBaseOrderList();
    message.items = object.items?.map((e) => Order.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    message.subject =
      object.subject !== undefined && object.subject !== null
        ? Subject.fromPartial(object.subject)
        : undefined;
    return message;
  },
};

function createBaseOrderListResponse(): OrderListResponse {
  return { items: [], totalCount: 0, operationStatus: undefined };
}

export const OrderListResponse = {
  encode(
    message: OrderListResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => OrderResponse.fromJSON(e))
        : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
      operationStatus: isSet(object.operationStatus)
        ? OperationStatus.fromJSON(object.operationStatus)
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
    message.totalCount !== undefined &&
      (obj.totalCount = Math.round(message.totalCount));
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus
        ? OperationStatus.toJSON(message.operationStatus)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<OrderListResponse>): OrderListResponse {
    const message = createBaseOrderListResponse();
    message.items =
      object.items?.map((e) => OrderResponse.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    message.operationStatus =
      object.operationStatus !== undefined && object.operationStatus !== null
        ? OperationStatus.fromPartial(object.operationStatus)
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
    customerReference: "",
    items: [],
    totalPrice: 0,
    shippingContactPointId: "",
    billingContactPointId: "",
    totalWeightInKg: 0,
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
    return {
      id: isSet(object.id) ? String(object.id) : "",
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      status: isSet(object.status) ? String(object.status) : "",
      customerReference: isSet(object.customerReference)
        ? String(object.customerReference)
        : "",
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => Items.fromJSON(e))
        : [],
      totalPrice: isSet(object.totalPrice) ? Number(object.totalPrice) : 0,
      shippingContactPointId: isSet(object.shippingContactPointId)
        ? String(object.shippingContactPointId)
        : "",
      billingContactPointId: isSet(object.billingContactPointId)
        ? String(object.billingContactPointId)
        : "",
      totalWeightInKg: isSet(object.totalWeightInKg)
        ? Number(object.totalWeightInKg)
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
    message.customerReference = object.customerReference ?? "";
    message.items = object.items?.map((e) => Items.fromPartial(e)) || [];
    message.totalPrice = object.totalPrice ?? 0;
    message.shippingContactPointId = object.shippingContactPointId ?? "";
    message.billingContactPointId = object.billingContactPointId ?? "";
    message.totalWeightInKg = object.totalWeightInKg ?? 0;
    return message;
  },
};

function createBaseItems(): Items {
  return { quantityPrice: 0, item: undefined };
}

export const Items = {
  encode(message: Items, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.quantityPrice !== 0) {
      writer.uint32(9).double(message.quantityPrice);
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
    return {
      quantityPrice: isSet(object.quantityPrice)
        ? Number(object.quantityPrice)
        : 0,
      item: isSet(object.item) ? Item.fromJSON(object.item) : undefined,
    };
  },

  toJSON(message: Items): unknown {
    const obj: any = {};
    message.quantityPrice !== undefined &&
      (obj.quantityPrice = message.quantityPrice);
    message.item !== undefined &&
      (obj.item = message.item ? Item.toJSON(message.item) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Items>): Items {
    const message = createBaseItems();
    message.quantityPrice = object.quantityPrice ?? 0;
    message.item =
      object.item !== undefined && object.item !== null
        ? Item.fromPartial(object.item)
        : undefined;
    return message;
  },
};

function createBaseItem(): Item {
  return {
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
}

export const Item = {
  encode(message: Item, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Item {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseItem();
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
    return {
      productVariantBundleId: isSet(object.productVariantBundleId)
        ? String(object.productVariantBundleId)
        : "",
      productName: isSet(object.productName) ? String(object.productName) : "",
      productDescription: isSet(object.productDescription)
        ? String(object.productDescription)
        : "",
      manufacturerName: isSet(object.manufacturerName)
        ? String(object.manufacturerName)
        : "",
      manufacturerDescription: isSet(object.manufacturerDescription)
        ? String(object.manufacturerDescription)
        : "",
      prototypeName: isSet(object.prototypeName)
        ? String(object.prototypeName)
        : "",
      prototypeDescription: isSet(object.prototypeDescription)
        ? String(object.prototypeDescription)
        : "",
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
      vat: isSet(object.vat) ? Number(object.vat) : 0,
      price: isSet(object.price) ? Number(object.price) : 0,
      itemType: isSet(object.itemType) ? String(object.itemType) : "",
      taricCode: isSet(object.taricCode) ? Number(object.taricCode) : 0,
      stockKeepingUnit: isSet(object.stockKeepingUnit)
        ? String(object.stockKeepingUnit)
        : "",
      weightInKg: isSet(object.weightInKg) ? Number(object.weightInKg) : 0,
      lengthInCm: isSet(object.lengthInCm) ? Number(object.lengthInCm) : 0,
      widthInCm: isSet(object.widthInCm) ? Number(object.widthInCm) : 0,
      heightInCm: isSet(object.heightInCm) ? Number(object.heightInCm) : 0,
    };
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
    message.quantity !== undefined &&
      (obj.quantity = Math.round(message.quantity));
    message.vat !== undefined && (obj.vat = Math.round(message.vat));
    message.price !== undefined && (obj.price = message.price);
    message.itemType !== undefined && (obj.itemType = message.itemType);
    message.taricCode !== undefined && (obj.taricCode = message.taricCode);
    message.stockKeepingUnit !== undefined &&
      (obj.stockKeepingUnit = message.stockKeepingUnit);
    message.weightInKg !== undefined && (obj.weightInKg = message.weightInKg);
    message.lengthInCm !== undefined &&
      (obj.lengthInCm = Math.round(message.lengthInCm));
    message.widthInCm !== undefined &&
      (obj.widthInCm = Math.round(message.widthInCm));
    message.heightInCm !== undefined &&
      (obj.heightInCm = Math.round(message.heightInCm));
    return obj;
  },

  fromPartial(object: DeepPartial<Item>): Item {
    const message = createBaseItem();
    message.productVariantBundleId = object.productVariantBundleId ?? "";
    message.productName = object.productName ?? "";
    message.productDescription = object.productDescription ?? "";
    message.manufacturerName = object.manufacturerName ?? "";
    message.manufacturerDescription = object.manufacturerDescription ?? "";
    message.prototypeName = object.prototypeName ?? "";
    message.prototypeDescription = object.prototypeDescription ?? "";
    message.quantity = object.quantity ?? 0;
    message.vat = object.vat ?? 0;
    message.price = object.price ?? 0;
    message.itemType = object.itemType ?? "";
    message.taricCode = object.taricCode ?? 0;
    message.stockKeepingUnit = object.stockKeepingUnit ?? "";
    message.weightInKg = object.weightInKg ?? 0;
    message.lengthInCm = object.lengthInCm ?? 0;
    message.widthInCm = object.widthInCm ?? 0;
    message.heightInCm = object.heightInCm ?? 0;
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
  return { orderData: [], meta: undefined };
}

export const OrderDataList = {
  encode(
    message: OrderDataList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.orderData) {
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
    return {
      orderData: Array.isArray(object?.orderData)
        ? object.orderData.map((e: any) => OrderData.fromJSON(e))
        : [],
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
    };
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

  fromPartial(object: DeepPartial<OrderDataList>): OrderDataList {
    const message = createBaseOrderDataList();
    message.orderData =
      object.orderData?.map((e) => OrderData.fromPartial(e)) || [];
    message.meta =
      object.meta !== undefined && object.meta !== null
        ? Meta.fromPartial(object.meta)
        : undefined;
    return message;
  },
};

function createBaseOrderData(): OrderData {
  return { orderId: "", shipments: [] };
}

export const OrderData = {
  encode(
    message: OrderData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.orderId !== "") {
      writer.uint32(10).string(message.orderId);
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
    return {
      orderId: isSet(object.orderId) ? String(object.orderId) : "",
      shipments: Array.isArray(object?.shipments)
        ? object.shipments.map((e: any) => Shipments.fromJSON(e))
        : [],
    };
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

  fromPartial(object: DeepPartial<OrderData>): OrderData {
    const message = createBaseOrderData();
    message.orderId = object.orderId ?? "";
    message.shipments =
      object.shipments?.map((e) => Shipments.fromPartial(e)) || [];
    return message;
  },
};

function createBaseShipments(): Shipments {
  return {
    totalWeightInKg: 0,
    individualWeightInKg: 0,
    amount: 0,
    exportType: "",
    exportDescription: "",
    customsTariffNumber: "",
    invoiceNumber: "",
    customsValue: 0,
  };
}

export const Shipments = {
  encode(
    message: Shipments,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Shipments {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShipments();
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
    return {
      totalWeightInKg: isSet(object.totalWeightInKg)
        ? Number(object.totalWeightInKg)
        : 0,
      individualWeightInKg: isSet(object.individualWeightInKg)
        ? Number(object.individualWeightInKg)
        : 0,
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      exportType: isSet(object.exportType) ? String(object.exportType) : "",
      exportDescription: isSet(object.exportDescription)
        ? String(object.exportDescription)
        : "",
      customsTariffNumber: isSet(object.customsTariffNumber)
        ? String(object.customsTariffNumber)
        : "",
      invoiceNumber: isSet(object.invoiceNumber)
        ? String(object.invoiceNumber)
        : "",
      customsValue: isSet(object.customsValue)
        ? Number(object.customsValue)
        : 0,
    };
  },

  toJSON(message: Shipments): unknown {
    const obj: any = {};
    message.totalWeightInKg !== undefined &&
      (obj.totalWeightInKg = message.totalWeightInKg);
    message.individualWeightInKg !== undefined &&
      (obj.individualWeightInKg = message.individualWeightInKg);
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
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

  fromPartial(object: DeepPartial<Shipments>): Shipments {
    const message = createBaseShipments();
    message.totalWeightInKg = object.totalWeightInKg ?? 0;
    message.individualWeightInKg = object.individualWeightInKg ?? 0;
    message.amount = object.amount ?? 0;
    message.exportType = object.exportType ?? "";
    message.exportDescription = object.exportDescription ?? "";
    message.customsTariffNumber = object.customsTariffNumber ?? "";
    message.invoiceNumber = object.invoiceNumber ?? "";
    message.customsValue = object.customsValue ?? 0;
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

export interface Service {
  Read(request: ReadRequest): Promise<OrderListResponse>;
  Create(request: OrderList): Promise<OrderListResponse>;
  Delete(request: DeleteRequest): Promise<DeleteResponse>;
  Update(request: OrderList): Promise<OrderListResponse>;
  Upsert(request: OrderList): Promise<OrderListResponse>;
  TriggerFulfillment(request: OrderDataList): Promise<FulfillmentResults>;
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

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
