/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { protoMetadata as protoMetadata6, ShippingAddress } from "./address";
import { Attribute, protoMetadata as protoMetadata5 } from "./attribute";
import { protoMetadata as protoMetadata3, Subject } from "./auth";
import { FulfillmentItem, Parcel, protoMetadata as protoMetadata10 } from "./fulfillment";
import { protoMetadata as protoMetadata9 } from "./fulfillment_courier";
import { BoundingBox3D, protoMetadata as protoMetadata8 } from "./geometry";
import { Meta, protoMetadata as protoMetadata2 } from "./meta";
import { KafkaSubscription, protoMetadata as protoMetadata11, Resolver } from "./options";
import { DeleteRequest, DeleteResponse, protoMetadata as protoMetadata1, ReadRequest } from "./resource_base";
import { OperationStatus, protoMetadata as protoMetadata4, Status } from "./status";
import { protoMetadata as protoMetadata7, VAT } from "./tax";

export const protobufPackage = "io.restorecommerce.fulfillment_product";

export interface Preferences {
  /** ID, name or type */
  couriers: Attribute[];
  options: Attribute[];
}

export interface ProductQuery {
  sender?: ShippingAddress | undefined;
  receiver?: ShippingAddress | undefined;
  items: FulfillmentItem[];
  preferences?: Preferences | undefined;
  referenceId?: string | undefined;
}

export interface ProductQueryList {
  items: ProductQuery[];
  totalCount?: number | undefined;
  subject?: Subject;
}

export interface FulfillmentProduct {
  id?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  courierId?: string | undefined;
  startZones: string[];
  destinationZones: string[];
  taxIds: string[];
  attributes: Attribute[];
  variants: Variant[];
  meta?: Meta | undefined;
}

export interface Variant {
  id?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  price?: number | undefined;
  maxSize?: BoundingBox3D | undefined;
  maxWeight?: number | undefined;
}

export interface FulfillmentProductList {
  items: FulfillmentProduct[];
  totalCount?: number | undefined;
  subject?: Subject;
}

export interface FulfillmentProductResponse {
  payload?: FulfillmentProduct;
  status?: Status;
}

export interface FulfillmentProductListResponse {
  items: FulfillmentProductResponse[];
  totalCount: number;
  operationStatus?: OperationStatus;
}

export interface PackingSolution {
  price?: number | undefined;
  compactness?: number | undefined;
  homogeneity?: number | undefined;
  score?: number | undefined;
  parcels: Parcel[];
  vats: VAT[];
}

export interface PackingSolutionResponse {
  referenceId?: string | undefined;
  solutions: PackingSolution[];
  status?: Status | undefined;
}

export interface PackingSolutionListResponse {
  items: PackingSolutionResponse[];
  totalCount?: number | undefined;
  operationStatus?: OperationStatus;
}

export interface Deleted {
  id: string;
}

function createBasePreferences(): Preferences {
  return { couriers: [], options: [] };
}

export const Preferences = {
  encode(message: Preferences, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.couriers) {
      Attribute.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.options) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Preferences {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreferences();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.couriers.push(Attribute.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.options.push(Attribute.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Preferences {
    return {
      couriers: Array.isArray(object?.couriers) ? object.couriers.map((e: any) => Attribute.fromJSON(e)) : [],
      options: Array.isArray(object?.options) ? object.options.map((e: any) => Attribute.fromJSON(e)) : [],
    };
  },

  toJSON(message: Preferences): unknown {
    const obj: any = {};
    if (message.couriers) {
      obj.couriers = message.couriers.map((e) => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.couriers = [];
    }
    if (message.options) {
      obj.options = message.options.map((e) => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.options = [];
    }
    return obj;
  },

  create(base?: DeepPartial<Preferences>): Preferences {
    return Preferences.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Preferences>): Preferences {
    const message = createBasePreferences();
    message.couriers = object.couriers?.map((e) => Attribute.fromPartial(e)) || [];
    message.options = object.options?.map((e) => Attribute.fromPartial(e)) || [];
    return message;
  },
};

function createBaseProductQuery(): ProductQuery {
  return { sender: undefined, receiver: undefined, items: [], preferences: undefined, referenceId: undefined };
}

export const ProductQuery = {
  encode(message: ProductQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== undefined) {
      ShippingAddress.encode(message.sender, writer.uint32(10).fork()).ldelim();
    }
    if (message.receiver !== undefined) {
      ShippingAddress.encode(message.receiver, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.items) {
      FulfillmentItem.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.preferences !== undefined) {
      Preferences.encode(message.preferences, writer.uint32(34).fork()).ldelim();
    }
    if (message.referenceId !== undefined) {
      writer.uint32(42).string(message.referenceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProductQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProductQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = ShippingAddress.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.receiver = ShippingAddress.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.items.push(FulfillmentItem.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.preferences = Preferences.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.referenceId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProductQuery {
    return {
      sender: isSet(object.sender) ? ShippingAddress.fromJSON(object.sender) : undefined,
      receiver: isSet(object.receiver) ? ShippingAddress.fromJSON(object.receiver) : undefined,
      items: Array.isArray(object?.items) ? object.items.map((e: any) => FulfillmentItem.fromJSON(e)) : [],
      preferences: isSet(object.preferences) ? Preferences.fromJSON(object.preferences) : undefined,
      referenceId: isSet(object.referenceId) ? String(object.referenceId) : undefined,
    };
  },

  toJSON(message: ProductQuery): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender ? ShippingAddress.toJSON(message.sender) : undefined);
    message.receiver !== undefined &&
      (obj.receiver = message.receiver ? ShippingAddress.toJSON(message.receiver) : undefined);
    if (message.items) {
      obj.items = message.items.map((e) => e ? FulfillmentItem.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.preferences !== undefined &&
      (obj.preferences = message.preferences ? Preferences.toJSON(message.preferences) : undefined);
    message.referenceId !== undefined && (obj.referenceId = message.referenceId);
    return obj;
  },

  create(base?: DeepPartial<ProductQuery>): ProductQuery {
    return ProductQuery.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ProductQuery>): ProductQuery {
    const message = createBaseProductQuery();
    message.sender = (object.sender !== undefined && object.sender !== null)
      ? ShippingAddress.fromPartial(object.sender)
      : undefined;
    message.receiver = (object.receiver !== undefined && object.receiver !== null)
      ? ShippingAddress.fromPartial(object.receiver)
      : undefined;
    message.items = object.items?.map((e) => FulfillmentItem.fromPartial(e)) || [];
    message.preferences = (object.preferences !== undefined && object.preferences !== null)
      ? Preferences.fromPartial(object.preferences)
      : undefined;
    message.referenceId = object.referenceId ?? undefined;
    return message;
  },
};

function createBaseProductQueryList(): ProductQueryList {
  return { items: [], totalCount: undefined, subject: undefined };
}

export const ProductQueryList = {
  encode(message: ProductQueryList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      ProductQuery.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== undefined) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProductQueryList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProductQueryList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(ProductQuery.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ProductQueryList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => ProductQuery.fromJSON(e)) : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: ProductQueryList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? ProductQuery.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = Math.round(message.totalCount));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ProductQueryList>): ProductQueryList {
    return ProductQueryList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ProductQueryList>): ProductQueryList {
    const message = createBaseProductQueryList();
    message.items = object.items?.map((e) => ProductQuery.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseFulfillmentProduct(): FulfillmentProduct {
  return {
    id: undefined,
    name: undefined,
    description: undefined,
    courierId: undefined,
    startZones: [],
    destinationZones: [],
    taxIds: [],
    attributes: [],
    variants: [],
    meta: undefined,
  };
}

export const FulfillmentProduct = {
  encode(message: FulfillmentProduct, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(26).string(message.description);
    }
    if (message.courierId !== undefined) {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFulfillmentProduct();
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

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.courierId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.startZones.push(reader.string());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.destinationZones.push(reader.string());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.taxIds.push(reader.string());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.variants.push(Variant.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.meta = Meta.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FulfillmentProduct {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      description: isSet(object.description) ? String(object.description) : undefined,
      courierId: isSet(object.courierId) ? String(object.courierId) : undefined,
      startZones: Array.isArray(object?.startZones) ? object.startZones.map((e: any) => String(e)) : [],
      destinationZones: Array.isArray(object?.destinationZones)
        ? object.destinationZones.map((e: any) => String(e))
        : [],
      taxIds: Array.isArray(object?.taxIds) ? object.taxIds.map((e: any) => String(e)) : [],
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : [],
      variants: Array.isArray(object?.variants) ? object.variants.map((e: any) => Variant.fromJSON(e)) : [],
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
    };
  },

  toJSON(message: FulfillmentProduct): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
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
      obj.attributes = message.attributes.map((e) => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    if (message.variants) {
      obj.variants = message.variants.map((e) => e ? Variant.toJSON(e) : undefined);
    } else {
      obj.variants = [];
    }
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    return obj;
  },

  create(base?: DeepPartial<FulfillmentProduct>): FulfillmentProduct {
    return FulfillmentProduct.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FulfillmentProduct>): FulfillmentProduct {
    const message = createBaseFulfillmentProduct();
    message.id = object.id ?? undefined;
    message.name = object.name ?? undefined;
    message.description = object.description ?? undefined;
    message.courierId = object.courierId ?? undefined;
    message.startZones = object.startZones?.map((e) => e) || [];
    message.destinationZones = object.destinationZones?.map((e) => e) || [];
    message.taxIds = object.taxIds?.map((e) => e) || [];
    message.attributes = object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    message.variants = object.variants?.map((e) => Variant.fromPartial(e)) || [];
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    return message;
  },
};

function createBaseVariant(): Variant {
  return {
    id: undefined,
    name: undefined,
    description: undefined,
    price: undefined,
    maxSize: undefined,
    maxWeight: undefined,
  };
}

export const Variant = {
  encode(message: Variant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(26).string(message.description);
    }
    if (message.price !== undefined) {
      writer.uint32(33).double(message.price);
    }
    if (message.maxSize !== undefined) {
      BoundingBox3D.encode(message.maxSize, writer.uint32(50).fork()).ldelim();
    }
    if (message.maxWeight !== undefined) {
      writer.uint32(57).double(message.maxWeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Variant {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVariant();
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

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.price = reader.double();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.maxSize = BoundingBox3D.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 57) {
            break;
          }

          message.maxWeight = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Variant {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      description: isSet(object.description) ? String(object.description) : undefined,
      price: isSet(object.price) ? Number(object.price) : undefined,
      maxSize: isSet(object.maxSize) ? BoundingBox3D.fromJSON(object.maxSize) : undefined,
      maxWeight: isSet(object.maxWeight) ? Number(object.maxWeight) : undefined,
    };
  },

  toJSON(message: Variant): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.price !== undefined && (obj.price = message.price);
    message.maxSize !== undefined &&
      (obj.maxSize = message.maxSize ? BoundingBox3D.toJSON(message.maxSize) : undefined);
    message.maxWeight !== undefined && (obj.maxWeight = message.maxWeight);
    return obj;
  },

  create(base?: DeepPartial<Variant>): Variant {
    return Variant.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Variant>): Variant {
    const message = createBaseVariant();
    message.id = object.id ?? undefined;
    message.name = object.name ?? undefined;
    message.description = object.description ?? undefined;
    message.price = object.price ?? undefined;
    message.maxSize = (object.maxSize !== undefined && object.maxSize !== null)
      ? BoundingBox3D.fromPartial(object.maxSize)
      : undefined;
    message.maxWeight = object.maxWeight ?? undefined;
    return message;
  },
};

function createBaseFulfillmentProductList(): FulfillmentProductList {
  return { items: [], totalCount: undefined, subject: undefined };
}

export const FulfillmentProductList = {
  encode(message: FulfillmentProductList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      FulfillmentProduct.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== undefined) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FulfillmentProductList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFulfillmentProductList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(FulfillmentProduct.decode(reader, reader.uint32()));
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

  fromJSON(object: any): FulfillmentProductList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => FulfillmentProduct.fromJSON(e)) : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: FulfillmentProductList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? FulfillmentProduct.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = Math.round(message.totalCount));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<FulfillmentProductList>): FulfillmentProductList {
    return FulfillmentProductList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FulfillmentProductList>): FulfillmentProductList {
    const message = createBaseFulfillmentProductList();
    message.items = object.items?.map((e) => FulfillmentProduct.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseFulfillmentProductResponse(): FulfillmentProductResponse {
  return { payload: undefined, status: undefined };
}

export const FulfillmentProductResponse = {
  encode(message: FulfillmentProductResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      FulfillmentProduct.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FulfillmentProductResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFulfillmentProductResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payload = FulfillmentProduct.decode(reader, reader.uint32());
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

  fromJSON(object: any): FulfillmentProductResponse {
    return {
      payload: isSet(object.payload) ? FulfillmentProduct.fromJSON(object.payload) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: FulfillmentProductResponse): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload ? FulfillmentProduct.toJSON(message.payload) : undefined);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<FulfillmentProductResponse>): FulfillmentProductResponse {
    return FulfillmentProductResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FulfillmentProductResponse>): FulfillmentProductResponse {
    const message = createBaseFulfillmentProductResponse();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? FulfillmentProduct.fromPartial(object.payload)
      : undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBaseFulfillmentProductListResponse(): FulfillmentProductListResponse {
  return { items: [], totalCount: 0, operationStatus: undefined };
}

export const FulfillmentProductListResponse = {
  encode(message: FulfillmentProductListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      FulfillmentProductResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.operationStatus !== undefined) {
      OperationStatus.encode(message.operationStatus, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FulfillmentProductListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFulfillmentProductListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(FulfillmentProductResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): FulfillmentProductListResponse {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => FulfillmentProductResponse.fromJSON(e)) : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
      operationStatus: isSet(object.operationStatus) ? OperationStatus.fromJSON(object.operationStatus) : undefined,
    };
  },

  toJSON(message: FulfillmentProductListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? FulfillmentProductResponse.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = Math.round(message.totalCount));
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus ? OperationStatus.toJSON(message.operationStatus) : undefined);
    return obj;
  },

  create(base?: DeepPartial<FulfillmentProductListResponse>): FulfillmentProductListResponse {
    return FulfillmentProductListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FulfillmentProductListResponse>): FulfillmentProductListResponse {
    const message = createBaseFulfillmentProductListResponse();
    message.items = object.items?.map((e) => FulfillmentProductResponse.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    message.operationStatus = (object.operationStatus !== undefined && object.operationStatus !== null)
      ? OperationStatus.fromPartial(object.operationStatus)
      : undefined;
    return message;
  },
};

function createBasePackingSolution(): PackingSolution {
  return { price: undefined, compactness: undefined, homogeneity: undefined, score: undefined, parcels: [], vats: [] };
}

export const PackingSolution = {
  encode(message: PackingSolution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.price !== undefined) {
      writer.uint32(9).double(message.price);
    }
    if (message.compactness !== undefined) {
      writer.uint32(17).double(message.compactness);
    }
    if (message.homogeneity !== undefined) {
      writer.uint32(25).double(message.homogeneity);
    }
    if (message.score !== undefined) {
      writer.uint32(33).double(message.score);
    }
    for (const v of message.parcels) {
      Parcel.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.vats) {
      VAT.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PackingSolution {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePackingSolution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.price = reader.double();
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.compactness = reader.double();
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.homogeneity = reader.double();
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.score = reader.double();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.parcels.push(Parcel.decode(reader, reader.uint32()));
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

  fromJSON(object: any): PackingSolution {
    return {
      price: isSet(object.price) ? Number(object.price) : undefined,
      compactness: isSet(object.compactness) ? Number(object.compactness) : undefined,
      homogeneity: isSet(object.homogeneity) ? Number(object.homogeneity) : undefined,
      score: isSet(object.score) ? Number(object.score) : undefined,
      parcels: Array.isArray(object?.parcels) ? object.parcels.map((e: any) => Parcel.fromJSON(e)) : [],
      vats: Array.isArray(object?.vats) ? object.vats.map((e: any) => VAT.fromJSON(e)) : [],
    };
  },

  toJSON(message: PackingSolution): unknown {
    const obj: any = {};
    message.price !== undefined && (obj.price = message.price);
    message.compactness !== undefined && (obj.compactness = message.compactness);
    message.homogeneity !== undefined && (obj.homogeneity = message.homogeneity);
    message.score !== undefined && (obj.score = message.score);
    if (message.parcels) {
      obj.parcels = message.parcels.map((e) => e ? Parcel.toJSON(e) : undefined);
    } else {
      obj.parcels = [];
    }
    if (message.vats) {
      obj.vats = message.vats.map((e) => e ? VAT.toJSON(e) : undefined);
    } else {
      obj.vats = [];
    }
    return obj;
  },

  create(base?: DeepPartial<PackingSolution>): PackingSolution {
    return PackingSolution.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PackingSolution>): PackingSolution {
    const message = createBasePackingSolution();
    message.price = object.price ?? undefined;
    message.compactness = object.compactness ?? undefined;
    message.homogeneity = object.homogeneity ?? undefined;
    message.score = object.score ?? undefined;
    message.parcels = object.parcels?.map((e) => Parcel.fromPartial(e)) || [];
    message.vats = object.vats?.map((e) => VAT.fromPartial(e)) || [];
    return message;
  },
};

function createBasePackingSolutionResponse(): PackingSolutionResponse {
  return { referenceId: undefined, solutions: [], status: undefined };
}

export const PackingSolutionResponse = {
  encode(message: PackingSolutionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.referenceId !== undefined) {
      writer.uint32(10).string(message.referenceId);
    }
    for (const v of message.solutions) {
      PackingSolution.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PackingSolutionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePackingSolutionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.referenceId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.solutions.push(PackingSolution.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): PackingSolutionResponse {
    return {
      referenceId: isSet(object.referenceId) ? String(object.referenceId) : undefined,
      solutions: Array.isArray(object?.solutions) ? object.solutions.map((e: any) => PackingSolution.fromJSON(e)) : [],
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: PackingSolutionResponse): unknown {
    const obj: any = {};
    message.referenceId !== undefined && (obj.referenceId = message.referenceId);
    if (message.solutions) {
      obj.solutions = message.solutions.map((e) => e ? PackingSolution.toJSON(e) : undefined);
    } else {
      obj.solutions = [];
    }
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<PackingSolutionResponse>): PackingSolutionResponse {
    return PackingSolutionResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PackingSolutionResponse>): PackingSolutionResponse {
    const message = createBasePackingSolutionResponse();
    message.referenceId = object.referenceId ?? undefined;
    message.solutions = object.solutions?.map((e) => PackingSolution.fromPartial(e)) || [];
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBasePackingSolutionListResponse(): PackingSolutionListResponse {
  return { items: [], totalCount: undefined, operationStatus: undefined };
}

export const PackingSolutionListResponse = {
  encode(message: PackingSolutionListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      PackingSolutionResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== undefined) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.operationStatus !== undefined) {
      OperationStatus.encode(message.operationStatus, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PackingSolutionListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePackingSolutionListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(PackingSolutionResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): PackingSolutionListResponse {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => PackingSolutionResponse.fromJSON(e)) : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : undefined,
      operationStatus: isSet(object.operationStatus) ? OperationStatus.fromJSON(object.operationStatus) : undefined,
    };
  },

  toJSON(message: PackingSolutionListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? PackingSolutionResponse.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = Math.round(message.totalCount));
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus ? OperationStatus.toJSON(message.operationStatus) : undefined);
    return obj;
  },

  create(base?: DeepPartial<PackingSolutionListResponse>): PackingSolutionListResponse {
    return PackingSolutionListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PackingSolutionListResponse>): PackingSolutionListResponse {
    const message = createBasePackingSolutionListResponse();
    message.items = object.items?.map((e) => PackingSolutionResponse.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? undefined;
    message.operationStatus = (object.operationStatus !== undefined && object.operationStatus !== null)
      ? OperationStatus.fromPartial(object.operationStatus)
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

export type FulfillmentProductServiceDefinition = typeof FulfillmentProductServiceDefinition;
export const FulfillmentProductServiceDefinition = {
  name: "FulfillmentProductService",
  fullName: "io.restorecommerce.fulfillment_product.FulfillmentProductService",
  methods: {
    read: {
      name: "Read",
      requestType: ReadRequest,
      requestStream: false,
      responseType: FulfillmentProductListResponse,
      responseStream: false,
      options: { _unknownFields: { 248008: [Buffer.from([1])] } },
    },
    find: {
      name: "Find",
      requestType: ProductQueryList,
      requestStream: false,
      responseType: PackingSolutionListResponse,
      responseStream: false,
      options: { _unknownFields: { 248008: [Buffer.from([1])] } },
    },
    create: {
      name: "Create",
      requestType: FulfillmentProductList,
      requestStream: false,
      responseType: FulfillmentProductListResponse,
      responseStream: false,
      options: {},
    },
    update: {
      name: "Update",
      requestType: FulfillmentProductList,
      requestStream: false,
      responseType: FulfillmentProductListResponse,
      responseStream: false,
      options: {},
    },
    upsert: {
      name: "Upsert",
      requestType: FulfillmentProductList,
      requestStream: false,
      responseType: FulfillmentProductListResponse,
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

export interface FulfillmentProductServiceImplementation<CallContextExt = {}> {
  read(
    request: ReadRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<FulfillmentProductListResponse>>;
  find(
    request: ProductQueryList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PackingSolutionListResponse>>;
  create(
    request: FulfillmentProductList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<FulfillmentProductListResponse>>;
  update(
    request: FulfillmentProductList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<FulfillmentProductListResponse>>;
  upsert(
    request: FulfillmentProductList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<FulfillmentProductListResponse>>;
  delete(request: DeleteRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteResponse>>;
}

export interface FulfillmentProductServiceClient<CallOptionsExt = {}> {
  read(
    request: DeepPartial<ReadRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<FulfillmentProductListResponse>;
  find(
    request: DeepPartial<ProductQueryList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PackingSolutionListResponse>;
  create(
    request: DeepPartial<FulfillmentProductList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<FulfillmentProductListResponse>;
  update(
    request: DeepPartial<FulfillmentProductList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<FulfillmentProductListResponse>;
  upsert(
    request: DeepPartial<FulfillmentProductList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<FulfillmentProductListResponse>;
  delete(request: DeepPartial<DeleteRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteResponse>;
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
    "name": "io/restorecommerce/fulfillment_product.proto",
    "package": "io.restorecommerce.fulfillment_product",
    "dependency": [
      "io/restorecommerce/resource_base.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/attribute.proto",
      "io/restorecommerce/address.proto",
      "io/restorecommerce/tax.proto",
      "io/restorecommerce/geometry.proto",
      "io/restorecommerce/fulfillment_courier.proto",
      "io/restorecommerce/fulfillment.proto",
      "io/restorecommerce/options.proto",
    ],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "Preferences",
      "field": [{
        "name": "couriers",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.attribute.Attribute",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "couriers",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "options",
        "number": 2,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.attribute.Attribute",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "options",
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
      "name": "ProductQuery",
      "field": [{
        "name": "sender",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.address.ShippingAddress",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "sender",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "receiver",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.address.ShippingAddress",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "receiver",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "items",
        "number": 3,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment.FulfillmentItem",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "items",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "preferences",
        "number": 4,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment_product.Preferences",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "preferences",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "reference_id",
        "number": 5,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "referenceId",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_sender", "options": undefined }, { "name": "_receiver", "options": undefined }, {
        "name": "_preferences",
        "options": undefined,
      }, { "name": "_reference_id", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ProductQueryList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment_product.ProductQuery",
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
      "name": "FulfillmentProduct",
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
        "name": "name",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "description",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "description",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "courier_id",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "courierId",
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
        "name": "start_zones",
        "number": 6,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "startZones",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "destination_zones",
        "number": 8,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "destinationZones",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "tax_ids",
        "number": 9,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "taxIds",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "attributes",
        "number": 10,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.attribute.Attribute",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "attributes",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "variants",
        "number": 11,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment_product.Variant",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "variants",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "meta",
        "number": 12,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.meta.Meta",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "meta",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "_id", "options": undefined },
        { "name": "_name", "options": undefined },
        { "name": "_description", "options": undefined },
        { "name": "_courier_id", "options": undefined },
        { "name": "_meta", "options": undefined },
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
      "name": "Variant",
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
        "name": "name",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "description",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "description",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "price",
        "number": 4,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "price",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "max_size",
        "number": 6,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.geometry.BoundingBox3D",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "maxSize",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "max_weight",
        "number": 7,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 5,
        "jsonName": "maxWeight",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "_id", "options": undefined },
        { "name": "_name", "options": undefined },
        { "name": "_description", "options": undefined },
        { "name": "_price", "options": undefined },
        { "name": "_max_size", "options": undefined },
        { "name": "_max_weight", "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "FulfillmentProductList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment_product.FulfillmentProduct",
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
      "name": "FulfillmentProductResponse",
      "field": [{
        "name": "payload",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment_product.FulfillmentProduct",
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
      "name": "FulfillmentProductListResponse",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment_product.FulfillmentProductResponse",
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
      "name": "PackingSolution",
      "field": [{
        "name": "price",
        "number": 1,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "price",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "compactness",
        "number": 2,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "compactness",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "homogeneity",
        "number": 3,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "homogeneity",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "score",
        "number": 4,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "score",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "parcels",
        "number": 5,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment.Parcel",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "parcels",
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
      "oneofDecl": [{ "name": "_price", "options": undefined }, { "name": "_compactness", "options": undefined }, {
        "name": "_homogeneity",
        "options": undefined,
      }, { "name": "_score", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "PackingSolutionResponse",
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
        "name": "solutions",
        "number": 2,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment_product.PackingSolution",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "solutions",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "status",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.status.Status",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "status",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_reference_id", "options": undefined }, { "name": "_status", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "PackingSolutionListResponse",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment_product.PackingSolutionResponse",
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
      "oneofDecl": [{ "name": "_total_count", "options": undefined }],
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
    "enumType": [],
    "service": [{
      "name": "FulfillmentProductService",
      "method": [{
        "name": "Read",
        "inputType": ".io.restorecommerce.resourcebase.ReadRequest",
        "outputType": ".io.restorecommerce.fulfillment_product.FulfillmentProductListResponse",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Find",
        "inputType": ".io.restorecommerce.fulfillment_product.ProductQueryList",
        "outputType": ".io.restorecommerce.fulfillment_product.PackingSolutionListResponse",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Create",
        "inputType": ".io.restorecommerce.fulfillment_product.FulfillmentProductList",
        "outputType": ".io.restorecommerce.fulfillment_product.FulfillmentProductListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Update",
        "inputType": ".io.restorecommerce.fulfillment_product.FulfillmentProductList",
        "outputType": ".io.restorecommerce.fulfillment_product.FulfillmentProductListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Upsert",
        "inputType": ".io.restorecommerce.fulfillment_product.FulfillmentProductList",
        "outputType": ".io.restorecommerce.fulfillment_product.FulfillmentProductListResponse",
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
      }],
      "options": undefined,
    }],
    "extension": [],
    "options": undefined,
    "sourceCodeInfo": {
      "location": [{
        "path": [4, 0, 2, 0],
        "span": [34, 2, 63],
        "leadingComments": "",
        "trailingComments": "ID, name or type\n",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {
    ".io.restorecommerce.fulfillment_product.Preferences": Preferences,
    ".io.restorecommerce.fulfillment_product.ProductQuery": ProductQuery,
    ".io.restorecommerce.fulfillment_product.ProductQueryList": ProductQueryList,
    ".io.restorecommerce.fulfillment_product.FulfillmentProduct": FulfillmentProduct,
    ".io.restorecommerce.fulfillment_product.Variant": Variant,
    ".io.restorecommerce.fulfillment_product.FulfillmentProductList": FulfillmentProductList,
    ".io.restorecommerce.fulfillment_product.FulfillmentProductResponse": FulfillmentProductResponse,
    ".io.restorecommerce.fulfillment_product.FulfillmentProductListResponse": FulfillmentProductListResponse,
    ".io.restorecommerce.fulfillment_product.PackingSolution": PackingSolution,
    ".io.restorecommerce.fulfillment_product.PackingSolutionResponse": PackingSolutionResponse,
    ".io.restorecommerce.fulfillment_product.PackingSolutionListResponse": PackingSolutionListResponse,
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
    protoMetadata9,
    protoMetadata10,
    protoMetadata11,
  ],
  options: {
    messages: {
      "FulfillmentProduct": {
        options: {
          "kafka_subscriber": KafkaSubscription.decode(
            Buffer.from(
              "ChRmdWxmaWxsbWVudF9wcm9kdWN0cxIvaW8ucmVzdG9yZWNvbW1lcmNlLmZ1bGZpbGxtZW50X3Byb2R1Y3QucmVzb3VyY2UaGWZ1bGZpbGxtZW50UHJvZHVjdENyZWF0ZWQiGWZ1bGZpbGxtZW50UHJvZHVjdFVwZGF0ZWQqGWZ1bGZpbGxtZW50UHJvZHVjdERlbGV0ZWQ=",
              "base64",
            ),
          ),
        },
        fields: {
          "courier_id": {
            "resolver": Resolver.decode(
              Buffer.from(
                "CjouaW8ucmVzdG9yZWNvbW1lcmNlLmZ1bGZpbGxtZW50X2NvdXJpZXIuRnVsZmlsbG1lbnRDb3VyaWVyEghyZXNvdXJjZRoTZnVsZmlsbG1lbnRfY291cmllciIEUmVhZCoHY291cmllcg==",
                "base64",
              ),
            ),
          },
        },
      },
    },
    services: {
      "FulfillmentProductService": {
        options: undefined,
        methods: { "Read": { "is_query": true }, "Find": { "is_query": true } },
      },
    },
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
