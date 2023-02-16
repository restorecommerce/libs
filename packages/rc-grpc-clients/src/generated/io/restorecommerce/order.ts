/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { Address, ContactPerson, protoMetadata as protoMetadata6 } from "./address";
import { protoMetadata as protoMetadata3, Subject } from "./auth";
import { Parcel, protoMetadata as protoMetadata7 } from "./fulfillment";
import { Meta, protoMetadata as protoMetadata2 } from "./meta";
import { KafkaSubscription, protoMetadata as protoMetadata5 } from "./options";
import { DeleteRequest, DeleteResponse, protoMetadata as protoMetadata1, ReadRequest } from "./resource_base";
import { OperationStatus, protoMetadata as protoMetadata4, Status } from "./status";

export const protobufPackage = "io.restorecommerce.order";

export enum State {
  Undefined = 0,
  Invalid = 1,
  Failed = 2,
  Cancelled = 3,
  Created = 4,
  Submitted = 5,
  Shipping = 6,
  Done = 7,
  UNRECOGNIZED = -1,
}

export function stateFromJSON(object: any): State {
  switch (object) {
    case 0:
    case "Undefined":
      return State.Undefined;
    case 1:
    case "Invalid":
      return State.Invalid;
    case 2:
    case "Failed":
      return State.Failed;
    case 3:
    case "Cancelled":
      return State.Cancelled;
    case 4:
    case "Created":
      return State.Created;
    case 5:
    case "Submitted":
      return State.Submitted;
    case 6:
    case "Shipping":
      return State.Shipping;
    case 7:
    case "Done":
      return State.Done;
    case -1:
    case "UNRECOGNIZED":
    default:
      return State.UNRECOGNIZED;
  }
}

export function stateToJSON(object: State): string {
  switch (object) {
    case State.Undefined:
      return "Undefined";
    case State.Invalid:
      return "Invalid";
    case State.Failed:
      return "Failed";
    case State.Cancelled:
      return "Cancelled";
    case State.Created:
      return "Created";
    case State.Submitted:
      return "Submitted";
    case State.Shipping:
      return "Shipping";
    case State.Done:
      return "Done";
    case State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
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
  quantityPrice: number;
  itemType: string;
  taricCode: number;
  stockKeepingUnit: string;
  weightInKg: number;
  lengthInCm: number;
  widthInCm: number;
  heightInCm: number;
}

/** Database Entity */
export interface Order {
  id: string;
  meta?: Meta;
  name: string;
  description: string;
  state: State;
  customerReference: string;
  items: Item[];
  totalPrice: number;
  shippingAddress?: Address;
  billingAddress?: Address;
  billingEmail: string;
  contactPerson?: ContactPerson;
  notificationEmail: string;
  fulfillmentIds: string[];
}

export interface ShippingDetails {
  exportType: string;
  exportDescription: string;
  invoiceNumber: string;
  senderAddress?: Address;
  contactPerson?: ContactPerson;
}

export interface TriggerFulfillmentRequest {
  order?: Order;
  shippingDetails?: ShippingDetails;
  parcels: Parcel[];
}

export interface TriggerFulfillmentRequestList {
  items: TriggerFulfillmentRequest[];
  totalCount: number;
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

export interface CancelRequestList {
  ids: string[];
  subject?: Subject;
}

export interface Deleted {
  id: string;
}

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
    quantityPrice: 0,
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
    if (message.quantityPrice !== 0) {
      writer.uint32(89).double(message.quantityPrice);
    }
    if (message.itemType !== "") {
      writer.uint32(98).string(message.itemType);
    }
    if (message.taricCode !== 0) {
      writer.uint32(105).double(message.taricCode);
    }
    if (message.stockKeepingUnit !== "") {
      writer.uint32(114).string(message.stockKeepingUnit);
    }
    if (message.weightInKg !== 0) {
      writer.uint32(121).double(message.weightInKg);
    }
    if (message.lengthInCm !== 0) {
      writer.uint32(128).int32(message.lengthInCm);
    }
    if (message.widthInCm !== 0) {
      writer.uint32(136).int32(message.widthInCm);
    }
    if (message.heightInCm !== 0) {
      writer.uint32(144).int32(message.heightInCm);
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
          message.quantityPrice = reader.double();
          break;
        case 12:
          message.itemType = reader.string();
          break;
        case 13:
          message.taricCode = reader.double();
          break;
        case 14:
          message.stockKeepingUnit = reader.string();
          break;
        case 15:
          message.weightInKg = reader.double();
          break;
        case 16:
          message.lengthInCm = reader.int32();
          break;
        case 17:
          message.widthInCm = reader.int32();
          break;
        case 18:
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
      productVariantBundleId: isSet(object.productVariantBundleId) ? String(object.productVariantBundleId) : "",
      productName: isSet(object.productName) ? String(object.productName) : "",
      productDescription: isSet(object.productDescription) ? String(object.productDescription) : "",
      manufacturerName: isSet(object.manufacturerName) ? String(object.manufacturerName) : "",
      manufacturerDescription: isSet(object.manufacturerDescription) ? String(object.manufacturerDescription) : "",
      prototypeName: isSet(object.prototypeName) ? String(object.prototypeName) : "",
      prototypeDescription: isSet(object.prototypeDescription) ? String(object.prototypeDescription) : "",
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
      vat: isSet(object.vat) ? Number(object.vat) : 0,
      price: isSet(object.price) ? Number(object.price) : 0,
      quantityPrice: isSet(object.quantityPrice) ? Number(object.quantityPrice) : 0,
      itemType: isSet(object.itemType) ? String(object.itemType) : "",
      taricCode: isSet(object.taricCode) ? Number(object.taricCode) : 0,
      stockKeepingUnit: isSet(object.stockKeepingUnit) ? String(object.stockKeepingUnit) : "",
      weightInKg: isSet(object.weightInKg) ? Number(object.weightInKg) : 0,
      lengthInCm: isSet(object.lengthInCm) ? Number(object.lengthInCm) : 0,
      widthInCm: isSet(object.widthInCm) ? Number(object.widthInCm) : 0,
      heightInCm: isSet(object.heightInCm) ? Number(object.heightInCm) : 0,
    };
  },

  toJSON(message: Item): unknown {
    const obj: any = {};
    message.productVariantBundleId !== undefined && (obj.productVariantBundleId = message.productVariantBundleId);
    message.productName !== undefined && (obj.productName = message.productName);
    message.productDescription !== undefined && (obj.productDescription = message.productDescription);
    message.manufacturerName !== undefined && (obj.manufacturerName = message.manufacturerName);
    message.manufacturerDescription !== undefined && (obj.manufacturerDescription = message.manufacturerDescription);
    message.prototypeName !== undefined && (obj.prototypeName = message.prototypeName);
    message.prototypeDescription !== undefined && (obj.prototypeDescription = message.prototypeDescription);
    message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
    message.vat !== undefined && (obj.vat = Math.round(message.vat));
    message.price !== undefined && (obj.price = message.price);
    message.quantityPrice !== undefined && (obj.quantityPrice = message.quantityPrice);
    message.itemType !== undefined && (obj.itemType = message.itemType);
    message.taricCode !== undefined && (obj.taricCode = message.taricCode);
    message.stockKeepingUnit !== undefined && (obj.stockKeepingUnit = message.stockKeepingUnit);
    message.weightInKg !== undefined && (obj.weightInKg = message.weightInKg);
    message.lengthInCm !== undefined && (obj.lengthInCm = Math.round(message.lengthInCm));
    message.widthInCm !== undefined && (obj.widthInCm = Math.round(message.widthInCm));
    message.heightInCm !== undefined && (obj.heightInCm = Math.round(message.heightInCm));
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
    message.quantityPrice = object.quantityPrice ?? 0;
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

function createBaseOrder(): Order {
  return {
    id: "",
    meta: undefined,
    name: "",
    description: "",
    state: 0,
    customerReference: "",
    items: [],
    totalPrice: 0,
    shippingAddress: undefined,
    billingAddress: undefined,
    billingEmail: "",
    contactPerson: undefined,
    notificationEmail: "",
    fulfillmentIds: [],
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
    if (message.state !== 0) {
      writer.uint32(40).int32(message.state);
    }
    if (message.customerReference !== "") {
      writer.uint32(50).string(message.customerReference);
    }
    for (const v of message.items) {
      Item.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.totalPrice !== 0) {
      writer.uint32(65).double(message.totalPrice);
    }
    if (message.shippingAddress !== undefined) {
      Address.encode(message.shippingAddress, writer.uint32(90).fork()).ldelim();
    }
    if (message.billingAddress !== undefined) {
      Address.encode(message.billingAddress, writer.uint32(106).fork()).ldelim();
    }
    if (message.billingEmail !== "") {
      writer.uint32(114).string(message.billingEmail);
    }
    if (message.contactPerson !== undefined) {
      ContactPerson.encode(message.contactPerson, writer.uint32(122).fork()).ldelim();
    }
    if (message.notificationEmail !== "") {
      writer.uint32(130).string(message.notificationEmail);
    }
    for (const v of message.fulfillmentIds) {
      writer.uint32(138).string(v!);
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
          message.state = reader.int32() as any;
          break;
        case 6:
          message.customerReference = reader.string();
          break;
        case 7:
          message.items.push(Item.decode(reader, reader.uint32()));
          break;
        case 8:
          message.totalPrice = reader.double();
          break;
        case 11:
          message.shippingAddress = Address.decode(reader, reader.uint32());
          break;
        case 13:
          message.billingAddress = Address.decode(reader, reader.uint32());
          break;
        case 14:
          message.billingEmail = reader.string();
          break;
        case 15:
          message.contactPerson = ContactPerson.decode(reader, reader.uint32());
          break;
        case 16:
          message.notificationEmail = reader.string();
          break;
        case 17:
          message.fulfillmentIds.push(reader.string());
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
      state: isSet(object.state) ? stateFromJSON(object.state) : 0,
      customerReference: isSet(object.customerReference) ? String(object.customerReference) : "",
      items: Array.isArray(object?.items) ? object.items.map((e: any) => Item.fromJSON(e)) : [],
      totalPrice: isSet(object.totalPrice) ? Number(object.totalPrice) : 0,
      shippingAddress: isSet(object.shippingAddress) ? Address.fromJSON(object.shippingAddress) : undefined,
      billingAddress: isSet(object.billingAddress) ? Address.fromJSON(object.billingAddress) : undefined,
      billingEmail: isSet(object.billingEmail) ? String(object.billingEmail) : "",
      contactPerson: isSet(object.contactPerson) ? ContactPerson.fromJSON(object.contactPerson) : undefined,
      notificationEmail: isSet(object.notificationEmail) ? String(object.notificationEmail) : "",
      fulfillmentIds: Array.isArray(object?.fulfillmentIds) ? object.fulfillmentIds.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: Order): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.state !== undefined && (obj.state = stateToJSON(message.state));
    message.customerReference !== undefined && (obj.customerReference = message.customerReference);
    if (message.items) {
      obj.items = message.items.map((e) => e ? Item.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalPrice !== undefined && (obj.totalPrice = message.totalPrice);
    message.shippingAddress !== undefined &&
      (obj.shippingAddress = message.shippingAddress ? Address.toJSON(message.shippingAddress) : undefined);
    message.billingAddress !== undefined &&
      (obj.billingAddress = message.billingAddress ? Address.toJSON(message.billingAddress) : undefined);
    message.billingEmail !== undefined && (obj.billingEmail = message.billingEmail);
    message.contactPerson !== undefined &&
      (obj.contactPerson = message.contactPerson ? ContactPerson.toJSON(message.contactPerson) : undefined);
    message.notificationEmail !== undefined && (obj.notificationEmail = message.notificationEmail);
    if (message.fulfillmentIds) {
      obj.fulfillmentIds = message.fulfillmentIds.map((e) => e);
    } else {
      obj.fulfillmentIds = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Order>): Order {
    const message = createBaseOrder();
    message.id = object.id ?? "";
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.state = object.state ?? 0;
    message.customerReference = object.customerReference ?? "";
    message.items = object.items?.map((e) => Item.fromPartial(e)) || [];
    message.totalPrice = object.totalPrice ?? 0;
    message.shippingAddress = (object.shippingAddress !== undefined && object.shippingAddress !== null)
      ? Address.fromPartial(object.shippingAddress)
      : undefined;
    message.billingAddress = (object.billingAddress !== undefined && object.billingAddress !== null)
      ? Address.fromPartial(object.billingAddress)
      : undefined;
    message.billingEmail = object.billingEmail ?? "";
    message.contactPerson = (object.contactPerson !== undefined && object.contactPerson !== null)
      ? ContactPerson.fromPartial(object.contactPerson)
      : undefined;
    message.notificationEmail = object.notificationEmail ?? "";
    message.fulfillmentIds = object.fulfillmentIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseShippingDetails(): ShippingDetails {
  return {
    exportType: "",
    exportDescription: "",
    invoiceNumber: "",
    senderAddress: undefined,
    contactPerson: undefined,
  };
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
      Address.encode(message.senderAddress, writer.uint32(42).fork()).ldelim();
    }
    if (message.contactPerson !== undefined) {
      ContactPerson.encode(message.contactPerson, writer.uint32(122).fork()).ldelim();
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
        case 5:
          message.senderAddress = Address.decode(reader, reader.uint32());
          break;
        case 15:
          message.contactPerson = ContactPerson.decode(reader, reader.uint32());
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
      senderAddress: isSet(object.senderAddress) ? Address.fromJSON(object.senderAddress) : undefined,
      contactPerson: isSet(object.contactPerson) ? ContactPerson.fromJSON(object.contactPerson) : undefined,
    };
  },

  toJSON(message: ShippingDetails): unknown {
    const obj: any = {};
    message.exportType !== undefined && (obj.exportType = message.exportType);
    message.exportDescription !== undefined && (obj.exportDescription = message.exportDescription);
    message.invoiceNumber !== undefined && (obj.invoiceNumber = message.invoiceNumber);
    message.senderAddress !== undefined &&
      (obj.senderAddress = message.senderAddress ? Address.toJSON(message.senderAddress) : undefined);
    message.contactPerson !== undefined &&
      (obj.contactPerson = message.contactPerson ? ContactPerson.toJSON(message.contactPerson) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ShippingDetails>): ShippingDetails {
    const message = createBaseShippingDetails();
    message.exportType = object.exportType ?? "";
    message.exportDescription = object.exportDescription ?? "";
    message.invoiceNumber = object.invoiceNumber ?? "";
    message.senderAddress = (object.senderAddress !== undefined && object.senderAddress !== null)
      ? Address.fromPartial(object.senderAddress)
      : undefined;
    message.contactPerson = (object.contactPerson !== undefined && object.contactPerson !== null)
      ? ContactPerson.fromPartial(object.contactPerson)
      : undefined;
    return message;
  },
};

function createBaseTriggerFulfillmentRequest(): TriggerFulfillmentRequest {
  return { order: undefined, shippingDetails: undefined, parcels: [] };
}

export const TriggerFulfillmentRequest = {
  encode(message: TriggerFulfillmentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    if (message.shippingDetails !== undefined) {
      ShippingDetails.encode(message.shippingDetails, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.parcels) {
      Parcel.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TriggerFulfillmentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerFulfillmentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = Order.decode(reader, reader.uint32());
          break;
        case 2:
          message.shippingDetails = ShippingDetails.decode(reader, reader.uint32());
          break;
        case 3:
          message.parcels.push(Parcel.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TriggerFulfillmentRequest {
    return {
      order: isSet(object.order) ? Order.fromJSON(object.order) : undefined,
      shippingDetails: isSet(object.shippingDetails) ? ShippingDetails.fromJSON(object.shippingDetails) : undefined,
      parcels: Array.isArray(object?.parcels) ? object.parcels.map((e: any) => Parcel.fromJSON(e)) : [],
    };
  },

  toJSON(message: TriggerFulfillmentRequest): unknown {
    const obj: any = {};
    message.order !== undefined && (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    message.shippingDetails !== undefined &&
      (obj.shippingDetails = message.shippingDetails ? ShippingDetails.toJSON(message.shippingDetails) : undefined);
    if (message.parcels) {
      obj.parcels = message.parcels.map((e) => e ? Parcel.toJSON(e) : undefined);
    } else {
      obj.parcels = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<TriggerFulfillmentRequest>): TriggerFulfillmentRequest {
    const message = createBaseTriggerFulfillmentRequest();
    message.order = (object.order !== undefined && object.order !== null) ? Order.fromPartial(object.order) : undefined;
    message.shippingDetails = (object.shippingDetails !== undefined && object.shippingDetails !== null)
      ? ShippingDetails.fromPartial(object.shippingDetails)
      : undefined;
    message.parcels = object.parcels?.map((e) => Parcel.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTriggerFulfillmentRequestList(): TriggerFulfillmentRequestList {
  return { items: [], totalCount: 0, subject: undefined };
}

export const TriggerFulfillmentRequestList = {
  encode(message: TriggerFulfillmentRequestList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      TriggerFulfillmentRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TriggerFulfillmentRequestList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerFulfillmentRequestList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(TriggerFulfillmentRequest.decode(reader, reader.uint32()));
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

  fromJSON(object: any): TriggerFulfillmentRequestList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => TriggerFulfillmentRequest.fromJSON(e)) : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: TriggerFulfillmentRequestList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? TriggerFulfillmentRequest.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = Math.round(message.totalCount));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TriggerFulfillmentRequestList>): TriggerFulfillmentRequestList {
    const message = createBaseTriggerFulfillmentRequestList();
    message.items = object.items?.map((e) => TriggerFulfillmentRequest.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
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

function createBaseCancelRequestList(): CancelRequestList {
  return { ids: [], subject: undefined };
}

export const CancelRequestList = {
  encode(message: CancelRequestList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.ids) {
      writer.uint32(10).string(v!);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CancelRequestList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelRequestList();
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

  fromJSON(object: any): CancelRequestList {
    return {
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => String(e)) : [],
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: CancelRequestList): unknown {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map((e) => e);
    } else {
      obj.ids = [];
    }
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<CancelRequestList>): CancelRequestList {
    const message = createBaseCancelRequestList();
    message.ids = object.ids?.map((e) => e) || [];
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
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

  fromPartial(object: DeepPartial<Deleted>): Deleted {
    const message = createBaseDeleted();
    message.id = object.id ?? "";
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
    submit: {
      name: "Submit",
      requestType: OrderList,
      requestStream: false,
      responseType: OrderListResponse,
      responseStream: false,
      options: {},
    },
    cancel: {
      name: "Cancel",
      requestType: CancelRequestList,
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
    triggerFulfillment: {
      name: "TriggerFulfillment",
      requestType: TriggerFulfillmentRequestList,
      requestStream: false,
      responseType: Status,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface ServiceServiceImplementation<CallContextExt = {}> {
  read(request: ReadRequest, context: CallContext & CallContextExt): Promise<DeepPartial<OrderListResponse>>;
  create(request: OrderList, context: CallContext & CallContextExt): Promise<DeepPartial<OrderListResponse>>;
  update(request: OrderList, context: CallContext & CallContextExt): Promise<DeepPartial<OrderListResponse>>;
  upsert(request: OrderList, context: CallContext & CallContextExt): Promise<DeepPartial<OrderListResponse>>;
  submit(request: OrderList, context: CallContext & CallContextExt): Promise<DeepPartial<OrderListResponse>>;
  cancel(request: CancelRequestList, context: CallContext & CallContextExt): Promise<DeepPartial<OrderListResponse>>;
  delete(request: DeleteRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteResponse>>;
  triggerFulfillment(
    request: TriggerFulfillmentRequestList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Status>>;
}

export interface ServiceClient<CallOptionsExt = {}> {
  read(request: DeepPartial<ReadRequest>, options?: CallOptions & CallOptionsExt): Promise<OrderListResponse>;
  create(request: DeepPartial<OrderList>, options?: CallOptions & CallOptionsExt): Promise<OrderListResponse>;
  update(request: DeepPartial<OrderList>, options?: CallOptions & CallOptionsExt): Promise<OrderListResponse>;
  upsert(request: DeepPartial<OrderList>, options?: CallOptions & CallOptionsExt): Promise<OrderListResponse>;
  submit(request: DeepPartial<OrderList>, options?: CallOptions & CallOptionsExt): Promise<OrderListResponse>;
  cancel(request: DeepPartial<CancelRequestList>, options?: CallOptions & CallOptionsExt): Promise<OrderListResponse>;
  delete(request: DeepPartial<DeleteRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteResponse>;
  triggerFulfillment(
    request: DeepPartial<TriggerFulfillmentRequestList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Status>;
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
      "io/restorecommerce/fulfillment.proto",
    ],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "Item",
      "field": [{
        "name": "product_variant_bundle_id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "productVariantBundleId",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "product_name",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "productName",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "product_description",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "productDescription",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "manufacturer_name",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "manufacturerName",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "manufacturer_description",
        "number": 5,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "manufacturerDescription",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "prototype_name",
        "number": 6,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "prototypeName",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "prototype_description",
        "number": 7,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "prototypeDescription",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "quantity",
        "number": 8,
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
        "name": "vat",
        "number": 9,
        "label": 1,
        "type": 5,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "vat",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "price",
        "number": 10,
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
        "name": "quantity_price",
        "number": 11,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "quantityPrice",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "item_type",
        "number": 12,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "itemType",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "taric_code",
        "number": 13,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "taricCode",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "stock_keeping_unit",
        "number": 14,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "stockKeepingUnit",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "weight_in_kg",
        "number": 15,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "weightInKg",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "length_in_cm",
        "number": 16,
        "label": 1,
        "type": 5,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "lengthInCm",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "width_in_cm",
        "number": 17,
        "label": 1,
        "type": 5,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "widthInCm",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "height_in_cm",
        "number": 18,
        "label": 1,
        "type": 5,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "heightInCm",
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
        "name": "name",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "description",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "description",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "state",
        "number": 5,
        "label": 1,
        "type": 14,
        "typeName": ".io.restorecommerce.order.State",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "state",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "customer_reference",
        "number": 6,
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
        "number": 7,
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
        "name": "total_price",
        "number": 8,
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
        "name": "shipping_address",
        "number": 11,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.address.Address",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "shippingAddress",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "billing_address",
        "number": 13,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.address.Address",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "billingAddress",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "billing_email",
        "number": 14,
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
        "name": "contact_person",
        "number": 15,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.address.ContactPerson",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "contactPerson",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "notification_email",
        "number": 16,
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
        "name": "fulfillment_ids",
        "number": 17,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "fulfillmentIds",
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
        "number": 5,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.address.Address",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "senderAddress",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "contact_person",
        "number": 15,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.address.ContactPerson",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "contactPerson",
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
      "name": "TriggerFulfillmentRequest",
      "field": [{
        "name": "order",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.order.Order",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "order",
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
      }, {
        "name": "parcels",
        "number": 3,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment.Parcel",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "parcels",
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
      "name": "TriggerFulfillmentRequestList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.order.TriggerFulfillmentRequest",
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
      "name": "CancelRequestList",
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
    }],
    "enumType": [{
      "name": "State",
      "value": [
        { "name": "Undefined", "number": 0, "options": undefined },
        { "name": "Invalid", "number": 1, "options": undefined },
        { "name": "Failed", "number": 2, "options": undefined },
        { "name": "Cancelled", "number": 3, "options": undefined },
        { "name": "Created", "number": 4, "options": undefined },
        { "name": "Submitted", "number": 5, "options": undefined },
        { "name": "Shipping", "number": 6, "options": undefined },
        { "name": "Done", "number": 7, "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "service": [{
      "name": "Service",
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
        "name": "Submit",
        "inputType": ".io.restorecommerce.order.OrderList",
        "outputType": ".io.restorecommerce.order.OrderListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Cancel",
        "inputType": ".io.restorecommerce.order.CancelRequestList",
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
        "name": "TriggerFulfillment",
        "inputType": ".io.restorecommerce.order.TriggerFulfillmentRequestList",
        "outputType": ".io.restorecommerce.status.Status",
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
        "path": [4, 0, 2, 0],
        "span": [41, 2, 39],
        "leadingComments": " below identifier is id of product, variant or bundle\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1],
        "span": [64, 0, 87, 1],
        "leadingComments": "*\nDatabase Entity\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {
    ".io.restorecommerce.order.State": State,
    ".io.restorecommerce.order.Item": Item,
    ".io.restorecommerce.order.Order": Order,
    ".io.restorecommerce.order.ShippingDetails": ShippingDetails,
    ".io.restorecommerce.order.TriggerFulfillmentRequest": TriggerFulfillmentRequest,
    ".io.restorecommerce.order.TriggerFulfillmentRequestList": TriggerFulfillmentRequestList,
    ".io.restorecommerce.order.OrderList": OrderList,
    ".io.restorecommerce.order.OrderListResponse": OrderListResponse,
    ".io.restorecommerce.order.OrderResponse": OrderResponse,
    ".io.restorecommerce.order.CancelRequestList": CancelRequestList,
    ".io.restorecommerce.order.Deleted": Deleted,
  },
  dependencies: [
    protoMetadata1,
    protoMetadata2,
    protoMetadata3,
    protoMetadata4,
    protoMetadata5,
    protoMetadata6,
    protoMetadata7,
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
    services: { "Service": { options: { "service_name": "order" }, methods: { "Read": { "is_query": true } } } },
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
