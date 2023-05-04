/* eslint-disable */
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import {
  FulfillmentAddress,
  protoMetadata as protoMetadata7,
  Item,
  Parcel,
} from "./fulfillment";
import { Subject, protoMetadata as protoMetadata3 } from "./auth";
import { Meta, protoMetadata as protoMetadata2 } from "./meta";
import {
  Status,
  OperationStatus,
  protoMetadata as protoMetadata4,
} from "./status";
import { CallContext, CallOptions } from "nice-grpc-common";
import {
  protoMetadata as protoMetadata1,
  ReadRequest,
  DeleteRequest,
  DeleteResponse,
} from "./resource_base";
import { protoMetadata as protoMetadata5, Attribute } from "./attribute";
import { protoMetadata as protoMetadata6 } from "./fulfillment_courier";
import {
  protoMetadata as protoMetadata8,
  KafkaSubscription,
  Resolver,
} from "./options";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "io.restorecommerce.fulfillment_product";

export interface Preferences {
  /** ID, name or type */
  couriers: Attribute[];
  pricing: number;
  compactness: number;
  homogeneity: number;
}

export interface Query {
  sender?: FulfillmentAddress;
  receiver?: FulfillmentAddress;
  goods: Item[];
  preferences?: Preferences;
  referenceId: string;
}

export interface QueryList {
  items: Query[];
  totalCount: number;
  subject?: Subject;
}

export interface FulfillmentProduct {
  id: string;
  name: string;
  description: string;
  courierId: string;
  startZones: string[];
  destinationZones: string[];
  taxIds: string[];
  attributes: Attribute[];
  variants: Variant[];
  meta?: Meta;
}

export interface Variant {
  id: string;
  name: string;
  description: string;
  price: number;
  maxWeight: number;
  maxWidth: number;
  maxHeight: number;
  maxLength: number;
  maxVolume: number;
}

export interface FulfillmentProductList {
  items: FulfillmentProduct[];
  totalCount: number;
  subject?: Subject;
}

export interface FulfillmentProductResponse {
  payload?: FulfillmentProduct;
  status?: Status;
}

export interface FulfillmentProductResponseList {
  items: FulfillmentProductResponse[];
  totalCount: number;
  operationStatus?: OperationStatus;
}

export interface PackingSolution {
  referenceId: string;
  price: number;
  compactness: number;
  homogeneity: number;
  score: number;
  parcels: Parcel[];
}

export interface PackingSolutionResponse {
  solutions: PackingSolution[];
  status?: Status;
}

export interface PackingSolutionResponseList {
  items: PackingSolutionResponse[];
  totalCount: number;
  operationStatus?: OperationStatus;
}

export interface Deleted {
  id: string;
}

function createBasePreferences(): Preferences {
  return { couriers: [], pricing: 0, compactness: 0, homogeneity: 0 };
}

export const Preferences = {
  encode(
    message: Preferences,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.couriers) {
      Attribute.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pricing !== 0) {
      writer.uint32(21).float(message.pricing);
    }
    if (message.compactness !== 0) {
      writer.uint32(29).float(message.compactness);
    }
    if (message.homogeneity !== 0) {
      writer.uint32(37).float(message.homogeneity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Preferences {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreferences();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.couriers.push(Attribute.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pricing = reader.float();
          break;
        case 3:
          message.compactness = reader.float();
          break;
        case 4:
          message.homogeneity = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Preferences {
    return {
      couriers: Array.isArray(object?.couriers)
        ? object.couriers.map((e: any) => Attribute.fromJSON(e))
        : [],
      pricing: isSet(object.pricing) ? Number(object.pricing) : 0,
      compactness: isSet(object.compactness) ? Number(object.compactness) : 0,
      homogeneity: isSet(object.homogeneity) ? Number(object.homogeneity) : 0,
    };
  },

  toJSON(message: Preferences): unknown {
    const obj: any = {};
    if (message.couriers) {
      obj.couriers = message.couriers.map((e) =>
        e ? Attribute.toJSON(e) : undefined
      );
    } else {
      obj.couriers = [];
    }
    message.pricing !== undefined && (obj.pricing = message.pricing);
    message.compactness !== undefined &&
      (obj.compactness = message.compactness);
    message.homogeneity !== undefined &&
      (obj.homogeneity = message.homogeneity);
    return obj;
  },

  fromPartial(object: DeepPartial<Preferences>): Preferences {
    const message = createBasePreferences();
    message.couriers =
      object.couriers?.map((e) => Attribute.fromPartial(e)) || [];
    message.pricing = object.pricing ?? 0;
    message.compactness = object.compactness ?? 0;
    message.homogeneity = object.homogeneity ?? 0;
    return message;
  },
};

function createBaseQuery(): Query {
  return {
    sender: undefined,
    receiver: undefined,
    goods: [],
    preferences: undefined,
    referenceId: "",
  };
}

export const Query = {
  encode(message: Query, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== undefined) {
      FulfillmentAddress.encode(
        message.sender,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.receiver !== undefined) {
      FulfillmentAddress.encode(
        message.receiver,
        writer.uint32(18).fork()
      ).ldelim();
    }
    for (const v of message.goods) {
      Item.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.preferences !== undefined) {
      Preferences.encode(
        message.preferences,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.referenceId !== "") {
      writer.uint32(42).string(message.referenceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Query {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = FulfillmentAddress.decode(reader, reader.uint32());
          break;
        case 2:
          message.receiver = FulfillmentAddress.decode(reader, reader.uint32());
          break;
        case 3:
          message.goods.push(Item.decode(reader, reader.uint32()));
          break;
        case 4:
          message.preferences = Preferences.decode(reader, reader.uint32());
          break;
        case 5:
          message.referenceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Query {
    return {
      sender: isSet(object.sender)
        ? FulfillmentAddress.fromJSON(object.sender)
        : undefined,
      receiver: isSet(object.receiver)
        ? FulfillmentAddress.fromJSON(object.receiver)
        : undefined,
      goods: Array.isArray(object?.goods)
        ? object.goods.map((e: any) => Item.fromJSON(e))
        : [],
      preferences: isSet(object.preferences)
        ? Preferences.fromJSON(object.preferences)
        : undefined,
      referenceId: isSet(object.referenceId) ? String(object.referenceId) : "",
    };
  },

  toJSON(message: Query): unknown {
    const obj: any = {};
    message.sender !== undefined &&
      (obj.sender = message.sender
        ? FulfillmentAddress.toJSON(message.sender)
        : undefined);
    message.receiver !== undefined &&
      (obj.receiver = message.receiver
        ? FulfillmentAddress.toJSON(message.receiver)
        : undefined);
    if (message.goods) {
      obj.goods = message.goods.map((e) => (e ? Item.toJSON(e) : undefined));
    } else {
      obj.goods = [];
    }
    message.preferences !== undefined &&
      (obj.preferences = message.preferences
        ? Preferences.toJSON(message.preferences)
        : undefined);
    message.referenceId !== undefined &&
      (obj.referenceId = message.referenceId);
    return obj;
  },

  fromPartial(object: DeepPartial<Query>): Query {
    const message = createBaseQuery();
    message.sender =
      object.sender !== undefined && object.sender !== null
        ? FulfillmentAddress.fromPartial(object.sender)
        : undefined;
    message.receiver =
      object.receiver !== undefined && object.receiver !== null
        ? FulfillmentAddress.fromPartial(object.receiver)
        : undefined;
    message.goods = object.goods?.map((e) => Item.fromPartial(e)) || [];
    message.preferences =
      object.preferences !== undefined && object.preferences !== null
        ? Preferences.fromPartial(object.preferences)
        : undefined;
    message.referenceId = object.referenceId ?? "";
    return message;
  },
};

function createBaseQueryList(): QueryList {
  return { items: [], totalCount: 0, subject: undefined };
}

export const QueryList = {
  encode(
    message: QueryList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      Query.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Query.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryList {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => Query.fromJSON(e))
        : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
      subject: isSet(object.subject)
        ? Subject.fromJSON(object.subject)
        : undefined,
    };
  },

  toJSON(message: QueryList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => (e ? Query.toJSON(e) : undefined));
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

  fromPartial(object: DeepPartial<QueryList>): QueryList {
    const message = createBaseQueryList();
    message.items = object.items?.map((e) => Query.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    message.subject =
      object.subject !== undefined && object.subject !== null
        ? Subject.fromPartial(object.subject)
        : undefined;
    return message;
  },
};

function createBaseFulfillmentProduct(): FulfillmentProduct {
  return {
    id: "",
    name: "",
    description: "",
    courierId: "",
    startZones: [],
    destinationZones: [],
    taxIds: [],
    attributes: [],
    variants: [],
    meta: undefined,
  };
}

export const FulfillmentProduct = {
  encode(
    message: FulfillmentProduct,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.courierId !== "") {
      writer.uint32(34).string(message.courierId);
    }
    for (const v of message.startZones) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.destinationZones) {
      writer.uint32(66).string(v!);
    }
    for (const v of message.taxIds) {
      writer.uint32(74).string(v!);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.variants) {
      Variant.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FulfillmentProduct {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFulfillmentProduct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.courierId = reader.string();
          break;
        case 6:
          message.startZones.push(reader.string());
          break;
        case 8:
          message.destinationZones.push(reader.string());
          break;
        case 9:
          message.taxIds.push(reader.string());
          break;
        case 10:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        case 11:
          message.variants.push(Variant.decode(reader, reader.uint32()));
          break;
        case 12:
          message.meta = Meta.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FulfillmentProduct {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      courierId: isSet(object.courierId) ? String(object.courierId) : "",
      startZones: Array.isArray(object?.startZones)
        ? object.startZones.map((e: any) => String(e))
        : [],
      destinationZones: Array.isArray(object?.destinationZones)
        ? object.destinationZones.map((e: any) => String(e))
        : [],
      taxIds: Array.isArray(object?.taxIds)
        ? object.taxIds.map((e: any) => String(e))
        : [],
      attributes: Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => Attribute.fromJSON(e))
        : [],
      variants: Array.isArray(object?.variants)
        ? object.variants.map((e: any) => Variant.fromJSON(e))
        : [],
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
    };
  },

  toJSON(message: FulfillmentProduct): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.courierId !== undefined && (obj.courierId = message.courierId);
    if (message.startZones) {
      obj.startZones = message.startZones.map((e) => e);
    } else {
      obj.startZones = [];
    }
    if (message.destinationZones) {
      obj.destinationZones = message.destinationZones.map((e) => e);
    } else {
      obj.destinationZones = [];
    }
    if (message.taxIds) {
      obj.taxIds = message.taxIds.map((e) => e);
    } else {
      obj.taxIds = [];
    }
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) =>
        e ? Attribute.toJSON(e) : undefined
      );
    } else {
      obj.attributes = [];
    }
    if (message.variants) {
      obj.variants = message.variants.map((e) =>
        e ? Variant.toJSON(e) : undefined
      );
    } else {
      obj.variants = [];
    }
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<FulfillmentProduct>): FulfillmentProduct {
    const message = createBaseFulfillmentProduct();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.courierId = object.courierId ?? "";
    message.startZones = object.startZones?.map((e) => e) || [];
    message.destinationZones = object.destinationZones?.map((e) => e) || [];
    message.taxIds = object.taxIds?.map((e) => e) || [];
    message.attributes =
      object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    message.variants =
      object.variants?.map((e) => Variant.fromPartial(e)) || [];
    message.meta =
      object.meta !== undefined && object.meta !== null
        ? Meta.fromPartial(object.meta)
        : undefined;
    return message;
  },
};

function createBaseVariant(): Variant {
  return {
    id: "",
    name: "",
    description: "",
    price: 0,
    maxWeight: 0,
    maxWidth: 0,
    maxHeight: 0,
    maxLength: 0,
    maxVolume: 0,
  };
}

export const Variant = {
  encode(
    message: Variant,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.price !== 0) {
      writer.uint32(33).double(message.price);
    }
    if (message.maxWeight !== 0) {
      writer.uint32(41).double(message.maxWeight);
    }
    if (message.maxWidth !== 0) {
      writer.uint32(49).double(message.maxWidth);
    }
    if (message.maxHeight !== 0) {
      writer.uint32(57).double(message.maxHeight);
    }
    if (message.maxLength !== 0) {
      writer.uint32(65).double(message.maxLength);
    }
    if (message.maxVolume !== 0) {
      writer.uint32(73).double(message.maxVolume);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Variant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVariant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.price = reader.double();
          break;
        case 5:
          message.maxWeight = reader.double();
          break;
        case 6:
          message.maxWidth = reader.double();
          break;
        case 7:
          message.maxHeight = reader.double();
          break;
        case 8:
          message.maxLength = reader.double();
          break;
        case 9:
          message.maxVolume = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Variant {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      price: isSet(object.price) ? Number(object.price) : 0,
      maxWeight: isSet(object.maxWeight) ? Number(object.maxWeight) : 0,
      maxWidth: isSet(object.maxWidth) ? Number(object.maxWidth) : 0,
      maxHeight: isSet(object.maxHeight) ? Number(object.maxHeight) : 0,
      maxLength: isSet(object.maxLength) ? Number(object.maxLength) : 0,
      maxVolume: isSet(object.maxVolume) ? Number(object.maxVolume) : 0,
    };
  },

  toJSON(message: Variant): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.price !== undefined && (obj.price = message.price);
    message.maxWeight !== undefined && (obj.maxWeight = message.maxWeight);
    message.maxWidth !== undefined && (obj.maxWidth = message.maxWidth);
    message.maxHeight !== undefined && (obj.maxHeight = message.maxHeight);
    message.maxLength !== undefined && (obj.maxLength = message.maxLength);
    message.maxVolume !== undefined && (obj.maxVolume = message.maxVolume);
    return obj;
  },

  fromPartial(object: DeepPartial<Variant>): Variant {
    const message = createBaseVariant();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.price = object.price ?? 0;
    message.maxWeight = object.maxWeight ?? 0;
    message.maxWidth = object.maxWidth ?? 0;
    message.maxHeight = object.maxHeight ?? 0;
    message.maxLength = object.maxLength ?? 0;
    message.maxVolume = object.maxVolume ?? 0;
    return message;
  },
};

function createBaseFulfillmentProductList(): FulfillmentProductList {
  return { items: [], totalCount: 0, subject: undefined };
}

export const FulfillmentProductList = {
  encode(
    message: FulfillmentProductList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      FulfillmentProduct.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FulfillmentProductList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFulfillmentProductList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            FulfillmentProduct.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): FulfillmentProductList {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => FulfillmentProduct.fromJSON(e))
        : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
      subject: isSet(object.subject)
        ? Subject.fromJSON(object.subject)
        : undefined,
    };
  },

  toJSON(message: FulfillmentProductList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? FulfillmentProduct.toJSON(e) : undefined
      );
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

  fromPartial(
    object: DeepPartial<FulfillmentProductList>
  ): FulfillmentProductList {
    const message = createBaseFulfillmentProductList();
    message.items =
      object.items?.map((e) => FulfillmentProduct.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    message.subject =
      object.subject !== undefined && object.subject !== null
        ? Subject.fromPartial(object.subject)
        : undefined;
    return message;
  },
};

function createBaseFulfillmentProductResponse(): FulfillmentProductResponse {
  return { payload: undefined, status: undefined };
}

export const FulfillmentProductResponse = {
  encode(
    message: FulfillmentProductResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.payload !== undefined) {
      FulfillmentProduct.encode(
        message.payload,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FulfillmentProductResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFulfillmentProductResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = FulfillmentProduct.decode(reader, reader.uint32());
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

  fromJSON(object: any): FulfillmentProductResponse {
    return {
      payload: isSet(object.payload)
        ? FulfillmentProduct.fromJSON(object.payload)
        : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: FulfillmentProductResponse): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload
        ? FulfillmentProduct.toJSON(message.payload)
        : undefined);
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<FulfillmentProductResponse>
  ): FulfillmentProductResponse {
    const message = createBaseFulfillmentProductResponse();
    message.payload =
      object.payload !== undefined && object.payload !== null
        ? FulfillmentProduct.fromPartial(object.payload)
        : undefined;
    message.status =
      object.status !== undefined && object.status !== null
        ? Status.fromPartial(object.status)
        : undefined;
    return message;
  },
};

function createBaseFulfillmentProductResponseList(): FulfillmentProductResponseList {
  return { items: [], totalCount: 0, operationStatus: undefined };
}

export const FulfillmentProductResponseList = {
  encode(
    message: FulfillmentProductResponseList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      FulfillmentProductResponse.encode(v!, writer.uint32(10).fork()).ldelim();
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FulfillmentProductResponseList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFulfillmentProductResponseList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            FulfillmentProductResponse.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): FulfillmentProductResponseList {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => FulfillmentProductResponse.fromJSON(e))
        : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
      operationStatus: isSet(object.operationStatus)
        ? OperationStatus.fromJSON(object.operationStatus)
        : undefined,
    };
  },

  toJSON(message: FulfillmentProductResponseList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? FulfillmentProductResponse.toJSON(e) : undefined
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

  fromPartial(
    object: DeepPartial<FulfillmentProductResponseList>
  ): FulfillmentProductResponseList {
    const message = createBaseFulfillmentProductResponseList();
    message.items =
      object.items?.map((e) => FulfillmentProductResponse.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    message.operationStatus =
      object.operationStatus !== undefined && object.operationStatus !== null
        ? OperationStatus.fromPartial(object.operationStatus)
        : undefined;
    return message;
  },
};

function createBasePackingSolution(): PackingSolution {
  return {
    referenceId: "",
    price: 0,
    compactness: 0,
    homogeneity: 0,
    score: 0,
    parcels: [],
  };
}

export const PackingSolution = {
  encode(
    message: PackingSolution,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.referenceId !== "") {
      writer.uint32(10).string(message.referenceId);
    }
    if (message.price !== 0) {
      writer.uint32(21).float(message.price);
    }
    if (message.compactness !== 0) {
      writer.uint32(29).float(message.compactness);
    }
    if (message.homogeneity !== 0) {
      writer.uint32(37).float(message.homogeneity);
    }
    if (message.score !== 0) {
      writer.uint32(45).float(message.score);
    }
    for (const v of message.parcels) {
      Parcel.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PackingSolution {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePackingSolution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.referenceId = reader.string();
          break;
        case 2:
          message.price = reader.float();
          break;
        case 3:
          message.compactness = reader.float();
          break;
        case 4:
          message.homogeneity = reader.float();
          break;
        case 5:
          message.score = reader.float();
          break;
        case 6:
          message.parcels.push(Parcel.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PackingSolution {
    return {
      referenceId: isSet(object.referenceId) ? String(object.referenceId) : "",
      price: isSet(object.price) ? Number(object.price) : 0,
      compactness: isSet(object.compactness) ? Number(object.compactness) : 0,
      homogeneity: isSet(object.homogeneity) ? Number(object.homogeneity) : 0,
      score: isSet(object.score) ? Number(object.score) : 0,
      parcels: Array.isArray(object?.parcels)
        ? object.parcels.map((e: any) => Parcel.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PackingSolution): unknown {
    const obj: any = {};
    message.referenceId !== undefined &&
      (obj.referenceId = message.referenceId);
    message.price !== undefined && (obj.price = message.price);
    message.compactness !== undefined &&
      (obj.compactness = message.compactness);
    message.homogeneity !== undefined &&
      (obj.homogeneity = message.homogeneity);
    message.score !== undefined && (obj.score = message.score);
    if (message.parcels) {
      obj.parcels = message.parcels.map((e) =>
        e ? Parcel.toJSON(e) : undefined
      );
    } else {
      obj.parcels = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<PackingSolution>): PackingSolution {
    const message = createBasePackingSolution();
    message.referenceId = object.referenceId ?? "";
    message.price = object.price ?? 0;
    message.compactness = object.compactness ?? 0;
    message.homogeneity = object.homogeneity ?? 0;
    message.score = object.score ?? 0;
    message.parcels = object.parcels?.map((e) => Parcel.fromPartial(e)) || [];
    return message;
  },
};

function createBasePackingSolutionResponse(): PackingSolutionResponse {
  return { solutions: [], status: undefined };
}

export const PackingSolutionResponse = {
  encode(
    message: PackingSolutionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.solutions) {
      PackingSolution.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PackingSolutionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePackingSolutionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.solutions.push(
            PackingSolution.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): PackingSolutionResponse {
    return {
      solutions: Array.isArray(object?.solutions)
        ? object.solutions.map((e: any) => PackingSolution.fromJSON(e))
        : [],
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: PackingSolutionResponse): unknown {
    const obj: any = {};
    if (message.solutions) {
      obj.solutions = message.solutions.map((e) =>
        e ? PackingSolution.toJSON(e) : undefined
      );
    } else {
      obj.solutions = [];
    }
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<PackingSolutionResponse>
  ): PackingSolutionResponse {
    const message = createBasePackingSolutionResponse();
    message.solutions =
      object.solutions?.map((e) => PackingSolution.fromPartial(e)) || [];
    message.status =
      object.status !== undefined && object.status !== null
        ? Status.fromPartial(object.status)
        : undefined;
    return message;
  },
};

function createBasePackingSolutionResponseList(): PackingSolutionResponseList {
  return { items: [], totalCount: 0, operationStatus: undefined };
}

export const PackingSolutionResponseList = {
  encode(
    message: PackingSolutionResponseList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      PackingSolutionResponse.encode(v!, writer.uint32(10).fork()).ldelim();
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PackingSolutionResponseList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePackingSolutionResponseList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            PackingSolutionResponse.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): PackingSolutionResponseList {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => PackingSolutionResponse.fromJSON(e))
        : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
      operationStatus: isSet(object.operationStatus)
        ? OperationStatus.fromJSON(object.operationStatus)
        : undefined,
    };
  },

  toJSON(message: PackingSolutionResponseList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? PackingSolutionResponse.toJSON(e) : undefined
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

  fromPartial(
    object: DeepPartial<PackingSolutionResponseList>
  ): PackingSolutionResponseList {
    const message = createBasePackingSolutionResponseList();
    message.items =
      object.items?.map((e) => PackingSolutionResponse.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    message.operationStatus =
      object.operationStatus !== undefined && object.operationStatus !== null
        ? OperationStatus.fromPartial(object.operationStatus)
        : undefined;
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

export type ServiceDefinition = typeof ServiceDefinition;
export const ServiceDefinition = {
  name: "Service",
  fullName: "io.restorecommerce.fulfillment_product.Service",
  methods: {
    read: {
      name: "Read",
      requestType: ReadRequest,
      requestStream: false,
      responseType: FulfillmentProductResponseList,
      responseStream: false,
      options: {},
    },
    find: {
      name: "Find",
      requestType: QueryList,
      requestStream: false,
      responseType: PackingSolutionResponseList,
      responseStream: false,
      options: {},
    },
    create: {
      name: "Create",
      requestType: FulfillmentProductList,
      requestStream: false,
      responseType: FulfillmentProductResponseList,
      responseStream: false,
      options: {},
    },
    update: {
      name: "Update",
      requestType: FulfillmentProductList,
      requestStream: false,
      responseType: FulfillmentProductResponseList,
      responseStream: false,
      options: {},
    },
    upsert: {
      name: "Upsert",
      requestType: FulfillmentProductList,
      requestStream: false,
      responseType: FulfillmentProductResponseList,
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
  },
} as const;

export interface ServiceServiceImplementation<CallContextExt = {}> {
  read(
    request: ReadRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<FulfillmentProductResponseList>>;
  find(
    request: QueryList,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<PackingSolutionResponseList>>;
  create(
    request: FulfillmentProductList,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<FulfillmentProductResponseList>>;
  update(
    request: FulfillmentProductList,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<FulfillmentProductResponseList>>;
  upsert(
    request: FulfillmentProductList,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<FulfillmentProductResponseList>>;
  delete(
    request: DeleteRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<DeleteResponse>>;
}

export interface ServiceClient<CallOptionsExt = {}> {
  read(
    request: DeepPartial<ReadRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<FulfillmentProductResponseList>;
  find(
    request: DeepPartial<QueryList>,
    options?: CallOptions & CallOptionsExt
  ): Promise<PackingSolutionResponseList>;
  create(
    request: DeepPartial<FulfillmentProductList>,
    options?: CallOptions & CallOptionsExt
  ): Promise<FulfillmentProductResponseList>;
  update(
    request: DeepPartial<FulfillmentProductList>,
    options?: CallOptions & CallOptionsExt
  ): Promise<FulfillmentProductResponseList>;
  upsert(
    request: DeepPartial<FulfillmentProductList>,
    options?: CallOptions & CallOptionsExt
  ): Promise<FulfillmentProductResponseList>;
  delete(
    request: DeepPartial<DeleteRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<DeleteResponse>;
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
    name: "io/restorecommerce/fulfillment_product.proto",
    package: "io.restorecommerce.fulfillment_product",
    dependency: [
      "io/restorecommerce/resource_base.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/attribute.proto",
      "io/restorecommerce/fulfillment_courier.proto",
      "io/restorecommerce/fulfillment.proto",
      "io/restorecommerce/options.proto",
    ],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        name: "Preferences",
        field: [
          {
            name: "couriers",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.attribute.Attribute",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "couriers",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "pricing",
            number: 2,
            label: 1,
            type: 2,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "pricing",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "compactness",
            number: 3,
            label: 1,
            type: 2,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "compactness",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "homogeneity",
            number: 4,
            label: 1,
            type: 2,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "homogeneity",
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
        name: "Query",
        field: [
          {
            name: "sender",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.FulfillmentAddress",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "sender",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "receiver",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.FulfillmentAddress",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "receiver",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "goods",
            number: 3,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Item",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "goods",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "preferences",
            number: 4,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment_product.Preferences",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "preferences",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "reference_id",
            number: 5,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "referenceId",
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
        name: "QueryList",
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment_product.Query",
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
        name: "FulfillmentProduct",
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
            name: "name",
            number: 2,
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
            number: 3,
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
            name: "courier_id",
            number: 4,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "courierId",
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
            name: "start_zones",
            number: 6,
            label: 3,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "startZones",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "destination_zones",
            number: 8,
            label: 3,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "destinationZones",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "tax_ids",
            number: 9,
            label: 3,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "taxIds",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "attributes",
            number: 10,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.attribute.Attribute",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "attributes",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "variants",
            number: 11,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment_product.Variant",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "variants",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "meta",
            number: 12,
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
        options: {
          messageSetWireFormat: false,
          noStandardDescriptorAccessor: false,
          deprecated: false,
          mapEntry: false,
          uninterpretedOption: [],
        },
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "Variant",
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
            name: "name",
            number: 2,
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
            number: 3,
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
            name: "price",
            number: 4,
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
            name: "max_weight",
            number: 5,
            label: 1,
            type: 1,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "maxWeight",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "max_width",
            number: 6,
            label: 1,
            type: 1,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "maxWidth",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "max_height",
            number: 7,
            label: 1,
            type: 1,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "maxHeight",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "max_length",
            number: 8,
            label: 1,
            type: 1,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "maxLength",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "max_volume",
            number: 9,
            label: 1,
            type: 1,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "maxVolume",
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
        name: "FulfillmentProductList",
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName:
              ".io.restorecommerce.fulfillment_product.FulfillmentProduct",
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
        name: "FulfillmentProductResponse",
        field: [
          {
            name: "payload",
            number: 1,
            label: 1,
            type: 11,
            typeName:
              ".io.restorecommerce.fulfillment_product.FulfillmentProduct",
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
        name: "FulfillmentProductResponseList",
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName:
              ".io.restorecommerce.fulfillment_product.FulfillmentProductResponse",
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
        name: "PackingSolution",
        field: [
          {
            name: "reference_id",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "referenceId",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "price",
            number: 2,
            label: 1,
            type: 2,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "price",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "compactness",
            number: 3,
            label: 1,
            type: 2,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "compactness",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "homogeneity",
            number: 4,
            label: 1,
            type: 2,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "homogeneity",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "score",
            number: 5,
            label: 1,
            type: 2,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "score",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "parcels",
            number: 6,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Parcel",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "parcels",
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
        name: "PackingSolutionResponse",
        field: [
          {
            name: "solutions",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment_product.PackingSolution",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "solutions",
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
        name: "PackingSolutionResponseList",
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName:
              ".io.restorecommerce.fulfillment_product.PackingSolutionResponse",
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
    ],
    enumType: [],
    service: [
      {
        name: "Service",
        method: [
          {
            name: "Read",
            inputType: ".io.restorecommerce.resourcebase.ReadRequest",
            outputType:
              ".io.restorecommerce.fulfillment_product.FulfillmentProductResponseList",
            options: {
              deprecated: false,
              idempotencyLevel: 0,
              uninterpretedOption: [],
            },
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Find",
            inputType: ".io.restorecommerce.fulfillment_product.QueryList",
            outputType:
              ".io.restorecommerce.fulfillment_product.PackingSolutionResponseList",
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
            inputType:
              ".io.restorecommerce.fulfillment_product.FulfillmentProductList",
            outputType:
              ".io.restorecommerce.fulfillment_product.FulfillmentProductResponseList",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Update",
            inputType:
              ".io.restorecommerce.fulfillment_product.FulfillmentProductList",
            outputType:
              ".io.restorecommerce.fulfillment_product.FulfillmentProductResponseList",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Upsert",
            inputType:
              ".io.restorecommerce.fulfillment_product.FulfillmentProductList",
            outputType:
              ".io.restorecommerce.fulfillment_product.FulfillmentProductResponseList",
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
        ],
        options: { deprecated: false, uninterpretedOption: [] },
      },
    ],
    extension: [],
    options: undefined,
    sourceCodeInfo: {
      location: [
        {
          path: [4, 0, 2, 0],
          span: [33, 2, 63],
          leadingComments: "",
          trailingComments: "ID, name or type\n",
          leadingDetachedComments: [],
        },
      ],
    },
    syntax: "proto3",
  }),
  references: {
    ".io.restorecommerce.fulfillment_product.Preferences": Preferences,
    ".io.restorecommerce.fulfillment_product.Query": Query,
    ".io.restorecommerce.fulfillment_product.QueryList": QueryList,
    ".io.restorecommerce.fulfillment_product.FulfillmentProduct":
      FulfillmentProduct,
    ".io.restorecommerce.fulfillment_product.Variant": Variant,
    ".io.restorecommerce.fulfillment_product.FulfillmentProductList":
      FulfillmentProductList,
    ".io.restorecommerce.fulfillment_product.FulfillmentProductResponse":
      FulfillmentProductResponse,
    ".io.restorecommerce.fulfillment_product.FulfillmentProductResponseList":
      FulfillmentProductResponseList,
    ".io.restorecommerce.fulfillment_product.PackingSolution": PackingSolution,
    ".io.restorecommerce.fulfillment_product.PackingSolutionResponse":
      PackingSolutionResponse,
    ".io.restorecommerce.fulfillment_product.PackingSolutionResponseList":
      PackingSolutionResponseList,
    ".io.restorecommerce.fulfillment_product.Deleted": Deleted,
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
  ],
  options: {
    messages: {
      FulfillmentProduct: {
        options: {
          kafka_subscriber: KafkaSubscription.decode(
            Buffer.from(
              "ChRmdWxmaWxsbWVudF9wcm9kdWN0cxIvaW8ucmVzdG9yZWNvbW1lcmNlLmZ1bGZpbGxtZW50X3Byb2R1Y3QucmVzb3VyY2UaGWZ1bGZpbGxtZW50UHJvZHVjdENyZWF0ZWQiGWZ1bGZpbGxtZW50UHJvZHVjdFVwZGF0ZWQqGWZ1bGZpbGxtZW50UHJvZHVjdERlbGV0ZWQ=",
              "base64"
            )
          ),
        },
        fields: {
          courier_id: {
            resolver: Resolver.decode(
              Buffer.from(
                "CjouaW8ucmVzdG9yZWNvbW1lcmNlLmZ1bGZpbGxtZW50X2NvdXJpZXIuRnVsZmlsbG1lbnRDb3VyaWVyEghyZXNvdXJjZRoTZnVsZmlsbG1lbnRfY291cmllciIEUmVhZCoHY291cmllcg==",
                "base64"
              )
            ),
          },
        },
      },
    },
    services: {
      Service: {
        options: { service_name: "fulfillment_product" },
        methods: { Read: { is_query: true }, Find: { is_query: true } },
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
