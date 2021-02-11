/* eslint-disable */
import { IFileDescriptorProto } from "protobufjs/ext/descriptor";
import {
  Subject,
  protoMetadata as io_restorecommerce_auth_protoMetadata,
} from "../../io/restorecommerce/auth";
import {
  Meta,
  protoMetadata as io_restorecommerce_meta_protoMetadata,
} from "../../io/restorecommerce/meta";
import { Writer, Reader } from "protobufjs/minimal";
import {
  Empty,
  protoMetadata as google_protobuf_empty_protoMetadata,
} from "../../google/protobuf/empty";
import {
  ReadRequest,
  DeleteRequest,
  protoMetadata as io_restorecommerce_resource_base_protoMetadata,
} from "../../io/restorecommerce/resource_base";

export const protobufPackage = "io.restorecommerce.order";

export interface OrderList {
  items: Order[];
  totalCount: number;
  subject?: Subject;
}

export interface Order {
  id: string;
  meta?: Meta;
  name: string;
  description: string;
  status: string;
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
    writer.uint32(16).uint32(message.totalCount);
    if (message.subject !== undefined && message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): OrderList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOrderList } as OrderList;
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
    const message = { ...baseOrderList } as OrderList;
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

const baseOrder: object = {
  id: "",
  name: "",
  description: "",
  status: "",
  totalPrice: 0,
  shippingContactPointId: "",
  billingContactPointId: "",
  totalWeightInKg: 0,
};

export const Order = {
  encode(message: Order, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    if (message.meta !== undefined && message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.name);
    writer.uint32(34).string(message.description);
    writer.uint32(42).string(message.status);
    for (const v of message.items) {
      Items.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    writer.uint32(57).double(message.totalPrice);
    writer.uint32(66).string(message.shippingContactPointId);
    writer.uint32(74).string(message.billingContactPointId);
    writer.uint32(81).double(message.totalWeightInKg);
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Order {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOrder } as Order;
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
          message.items.push(Items.decode(reader, reader.uint32()));
          break;
        case 7:
          message.totalPrice = reader.double();
          break;
        case 8:
          message.shippingContactPointId = reader.string();
          break;
        case 9:
          message.billingContactPointId = reader.string();
          break;
        case 10:
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
    const message = { ...baseOrder } as Order;
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
    writer.uint32(9).double(message.quantityPrice);
    if (message.item !== undefined && message.item !== undefined) {
      Item.encode(message.item, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Items {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseItems } as Items;
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
    const message = { ...baseItems } as Items;
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
    writer.uint32(10).string(message.productVariantBundleId);
    writer.uint32(18).string(message.productName);
    writer.uint32(26).string(message.productDescription);
    writer.uint32(34).string(message.manufacturerName);
    writer.uint32(42).string(message.manufacturerDescription);
    writer.uint32(50).string(message.prototypeName);
    writer.uint32(58).string(message.prototypeDescription);
    writer.uint32(64).int32(message.quantity);
    writer.uint32(72).int32(message.vat);
    writer.uint32(81).double(message.price);
    writer.uint32(90).string(message.itemType);
    writer.uint32(97).double(message.taricCode);
    writer.uint32(106).string(message.stockKeepingUnit);
    writer.uint32(113).double(message.weightInKg);
    writer.uint32(120).int32(message.lengthInCm);
    writer.uint32(128).int32(message.widthInCm);
    writer.uint32(136).int32(message.heightInCm);
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Item {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseItem } as Item;
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
    const message = { ...baseItem } as Item;
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
    writer.uint32(10).string(message.id);
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Deleted {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleted } as Deleted;
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
    const message = { ...baseDeleted } as Deleted;
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
    if (message.meta !== undefined && message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): OrderDataList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOrderDataList } as OrderDataList;
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
    const message = { ...baseOrderDataList } as OrderDataList;
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
    writer.uint32(10).string(message.orderId);
    for (const v of message.shipments) {
      Shipments.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): OrderData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOrderData } as OrderData;
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
    const message = { ...baseOrderData } as OrderData;
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
    writer.uint32(9).double(message.totalWeightInKg);
    writer.uint32(17).double(message.individualWeightInKg);
    writer.uint32(24).int32(message.amount);
    writer.uint32(34).string(message.exportType);
    writer.uint32(42).string(message.exportDescription);
    writer.uint32(50).string(message.customsTariffNumber);
    writer.uint32(58).string(message.invoiceNumber);
    writer.uint32(65).double(message.customsValue);
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Shipments {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseShipments } as Shipments;
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
    const message = { ...baseShipments } as Shipments;
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
    const message = { ...baseFulfillmentResults } as FulfillmentResults;
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
    const message = { ...baseFulfillmentResults } as FulfillmentResults;
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
    if (message.Status !== undefined && message.Status !== undefined) {
      OrderStatus.encode(message.Status, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined && message.error !== undefined) {
      ErrorList.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ResponseDetailsList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResponseDetailsList } as ResponseDetailsList;
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
    const message = { ...baseResponseDetailsList } as ResponseDetailsList;
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
    writer.uint32(10).string(message.OrderId);
    writer.uint32(18).string(message.OrderStatus);
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): OrderStatus {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOrderStatus } as OrderStatus;
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
    const message = { ...baseOrderStatus } as OrderStatus;
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
    const message = { ...baseErrorList } as ErrorList;
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
    const message = { ...baseErrorList } as ErrorList;
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
  Read(request: ReadRequest): Promise<OrderList>;
  Create(request: OrderList): Promise<OrderList>;
  Delete(request: DeleteRequest): Promise<Empty>;
  Update(request: OrderList): Promise<OrderList>;
  Upsert(request: OrderList): Promise<OrderList>;
  TriggerFulfillment(request: OrderDataList): Promise<FulfillmentResults>;
}

export interface ProtoMetadata {
  fileDescriptor: IFileDescriptorProto;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: {
    dependency: [
      "google/protobuf/empty.proto",
      "io/restorecommerce/resource_base.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
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
            label: "LABEL_REPEATED",
            type: "TYPE_MESSAGE",
            typeName: ".io.restorecommerce.order.Order",
            jsonName: "items",
          },
          {
            name: "total_count",
            number: 2,
            label: "LABEL_OPTIONAL",
            type: "TYPE_UINT32",
            jsonName: "totalCount",
          },
          {
            name: "subject",
            number: 3,
            label: "LABEL_OPTIONAL",
            type: "TYPE_MESSAGE",
            typeName: ".io.restorecommerce.auth.Subject",
            jsonName: "subject",
          },
        ],
      },
      {
        name: "Order",
        field: [
          {
            name: "id",
            number: 1,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "id",
          },
          {
            name: "meta",
            number: 2,
            label: "LABEL_OPTIONAL",
            type: "TYPE_MESSAGE",
            typeName: ".io.restorecommerce.meta.Meta",
            jsonName: "meta",
          },
          {
            name: "name",
            number: 3,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "name",
          },
          {
            name: "description",
            number: 4,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "description",
          },
          {
            name: "status",
            number: 5,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "status",
          },
          {
            name: "items",
            number: 6,
            label: "LABEL_REPEATED",
            type: "TYPE_MESSAGE",
            typeName: ".io.restorecommerce.order.Items",
            jsonName: "items",
          },
          {
            name: "total_price",
            number: 7,
            label: "LABEL_OPTIONAL",
            type: "TYPE_DOUBLE",
            jsonName: "totalPrice",
          },
          {
            name: "shipping_contact_point_id",
            number: 8,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "shippingContactPointId",
          },
          {
            name: "billing_contact_point_id",
            number: 9,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "billingContactPointId",
          },
          {
            name: "total_weight_in_kg",
            number: 10,
            label: "LABEL_OPTIONAL",
            type: "TYPE_DOUBLE",
            jsonName: "totalWeightInKg",
          },
        ],
      },
      {
        name: "Items",
        field: [
          {
            name: "quantity_price",
            number: 1,
            label: "LABEL_OPTIONAL",
            type: "TYPE_DOUBLE",
            jsonName: "quantityPrice",
          },
          {
            name: "item",
            number: 2,
            label: "LABEL_OPTIONAL",
            type: "TYPE_MESSAGE",
            typeName: ".io.restorecommerce.order.Item",
            jsonName: "item",
          },
        ],
      },
      {
        name: "Item",
        field: [
          {
            name: "product_variant_bundle_id",
            number: 1,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "productVariantBundleId",
          },
          {
            name: "product_name",
            number: 2,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "productName",
          },
          {
            name: "product_description",
            number: 3,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "productDescription",
          },
          {
            name: "manufacturer_name",
            number: 4,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "manufacturerName",
          },
          {
            name: "manufacturer_description",
            number: 5,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "manufacturerDescription",
          },
          {
            name: "prototype_name",
            number: 6,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "prototypeName",
          },
          {
            name: "prototype_description",
            number: 7,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "prototypeDescription",
          },
          {
            name: "quantity",
            number: 8,
            label: "LABEL_OPTIONAL",
            type: "TYPE_INT32",
            jsonName: "quantity",
          },
          {
            name: "vat",
            number: 9,
            label: "LABEL_OPTIONAL",
            type: "TYPE_INT32",
            jsonName: "vat",
          },
          {
            name: "price",
            number: 10,
            label: "LABEL_OPTIONAL",
            type: "TYPE_DOUBLE",
            jsonName: "price",
          },
          {
            name: "item_type",
            number: 11,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "itemType",
          },
          {
            name: "taric_code",
            number: 12,
            label: "LABEL_OPTIONAL",
            type: "TYPE_DOUBLE",
            jsonName: "taricCode",
          },
          {
            name: "stock_keeping_unit",
            number: 13,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "stockKeepingUnit",
          },
          {
            name: "weight_in_kg",
            number: 14,
            label: "LABEL_OPTIONAL",
            type: "TYPE_DOUBLE",
            jsonName: "weightInKg",
          },
          {
            name: "length_in_cm",
            number: 15,
            label: "LABEL_OPTIONAL",
            type: "TYPE_INT32",
            jsonName: "lengthInCm",
          },
          {
            name: "width_in_cm",
            number: 16,
            label: "LABEL_OPTIONAL",
            type: "TYPE_INT32",
            jsonName: "widthInCm",
          },
          {
            name: "height_in_cm",
            number: 17,
            label: "LABEL_OPTIONAL",
            type: "TYPE_INT32",
            jsonName: "heightInCm",
          },
        ],
      },
      {
        name: "Deleted",
        field: [
          {
            name: "id",
            number: 1,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "id",
          },
        ],
      },
      {
        name: "OrderDataList",
        field: [
          {
            name: "order_data",
            number: 1,
            label: "LABEL_REPEATED",
            type: "TYPE_MESSAGE",
            typeName: ".io.restorecommerce.order.OrderData",
            jsonName: "orderData",
          },
          {
            name: "meta",
            number: 2,
            label: "LABEL_OPTIONAL",
            type: "TYPE_MESSAGE",
            typeName: ".io.restorecommerce.meta.Meta",
            jsonName: "meta",
          },
        ],
      },
      {
        name: "OrderData",
        field: [
          {
            name: "order_id",
            number: 1,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "orderId",
          },
          {
            name: "shipments",
            number: 2,
            label: "LABEL_REPEATED",
            type: "TYPE_MESSAGE",
            typeName: ".io.restorecommerce.order.Shipments",
            jsonName: "shipments",
          },
        ],
      },
      {
        name: "Shipments",
        field: [
          {
            name: "total_weight_in_kg",
            number: 1,
            label: "LABEL_OPTIONAL",
            type: "TYPE_DOUBLE",
            jsonName: "totalWeightInKg",
          },
          {
            name: "individual_weight_in_kg",
            number: 2,
            label: "LABEL_OPTIONAL",
            type: "TYPE_DOUBLE",
            jsonName: "individualWeightInKg",
          },
          {
            name: "amount",
            number: 3,
            label: "LABEL_OPTIONAL",
            type: "TYPE_INT32",
            jsonName: "amount",
          },
          {
            name: "export_type",
            number: 4,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "exportType",
          },
          {
            name: "export_description",
            number: 5,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "exportDescription",
          },
          {
            name: "customs_tariff_number",
            number: 6,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "customsTariffNumber",
          },
          {
            name: "invoice_number",
            number: 7,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "invoiceNumber",
          },
          {
            name: "customs_value",
            number: 8,
            label: "LABEL_OPTIONAL",
            type: "TYPE_DOUBLE",
            jsonName: "customsValue",
          },
        ],
      },
      {
        name: "FulfillmentResults",
        field: [
          {
            name: "fulfillmentResults",
            number: 1,
            label: "LABEL_REPEATED",
            type: "TYPE_MESSAGE",
            typeName: ".io.restorecommerce.order.ResponseDetailsList",
            jsonName: "fulfillmentResults",
          },
        ],
      },
      {
        name: "ResponseDetailsList",
        field: [
          {
            name: "Status",
            number: 1,
            label: "LABEL_OPTIONAL",
            type: "TYPE_MESSAGE",
            typeName: ".io.restorecommerce.order.OrderStatus",
            jsonName: "Status",
          },
          {
            name: "error",
            number: 2,
            label: "LABEL_OPTIONAL",
            type: "TYPE_MESSAGE",
            typeName: ".io.restorecommerce.order.ErrorList",
            jsonName: "error",
          },
        ],
      },
      {
        name: "OrderStatus",
        field: [
          {
            name: "OrderId",
            number: 1,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "OrderId",
          },
          {
            name: "OrderStatus",
            number: 2,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "OrderStatus",
          },
        ],
      },
      {
        name: "ErrorList",
        field: [
          {
            name: "code",
            number: 1,
            label: "LABEL_REPEATED",
            type: "TYPE_STRING",
            jsonName: "code",
          },
          {
            name: "message",
            number: 2,
            label: "LABEL_REPEATED",
            type: "TYPE_STRING",
            jsonName: "message",
          },
        ],
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
            outputType: ".io.restorecommerce.order.OrderList",
          },
          {
            name: "Create",
            inputType: ".io.restorecommerce.order.OrderList",
            outputType: ".io.restorecommerce.order.OrderList",
          },
          {
            name: "Delete",
            inputType: ".io.restorecommerce.resourcebase.DeleteRequest",
            outputType: ".google.protobuf.Empty",
          },
          {
            name: "Update",
            inputType: ".io.restorecommerce.order.OrderList",
            outputType: ".io.restorecommerce.order.OrderList",
          },
          {
            name: "Upsert",
            inputType: ".io.restorecommerce.order.OrderList",
            outputType: ".io.restorecommerce.order.OrderList",
          },
          {
            name: "TriggerFulfillment",
            inputType: ".io.restorecommerce.order.OrderDataList",
            outputType: ".io.restorecommerce.order.FulfillmentResults",
          },
        ],
      },
    ],
    extension: [],
    name: "io/restorecommerce/order.proto",
    package: "io.restorecommerce.order",
    sourceCodeInfo: {
      location: [
        {
          path: [4, 1, 2, 6],
          span: [33, 2, 25],
          leadingComments:
            " sum of all the quantity_price will be total_price\n",
        },
        {
          path: [4, 1, 2, 7],
          span: [35, 2, 39],
          leadingComments: " shipping address\n",
        },
        {
          path: [4, 3, 2, 0],
          span: [47, 2, 39],
          leadingComments:
            " below identifier is id of product, variant or bundle\n",
        },
        {
          path: [4, 7, 2, 1],
          span: [83, 2, 37],
          leadingComments:
            " below properties are used for international packaging\n",
          trailingComments: " each items weight\n",
        },
        {
          path: [4, 7, 2, 2],
          span: [84, 2, 19],
          trailingComments: " number of items\n",
        },
      ],
    },
    syntax: "proto3",
  } as any,
  references: {
    ".io.restorecommerce.order.OrderList": OrderList,
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
    google_protobuf_empty_protoMetadata,
    io_restorecommerce_resource_base_protoMetadata,
    io_restorecommerce_meta_protoMetadata,
    io_restorecommerce_auth_protoMetadata,
  ],
};

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
