/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { Attribute, protoMetadata as protoMetadata5 } from "./attribute";
import { protoMetadata as protoMetadata3, Subject } from "./auth";
import { Item, Parcel, protoMetadata as protoMetadata7 } from "./fulfillment";
import { protoMetadata as protoMetadata6 } from "./fulfillment_courier";
import { Meta, protoMetadata as protoMetadata2 } from "./meta";
import { KafkaSubscription, protoMetadata as protoMetadata8, Resolver } from "./options";
import { DeleteRequest, DeleteResponse, protoMetadata as protoMetadata1, ReadRequest } from "./resource_base";
import { OperationStatus, protoMetadata as protoMetadata4, Status } from "./status";

export const protobufPackage = "io.restorecommerce.fulfillment_product";

export interface Preferences {
  /** ID, name or type */
  couriers: Attribute[];
  pricing: number;
  compactness: number;
  homogeneity: number;
}

export interface Query {
  /**
   * io.restorecommerce.fulfillment.Address sender = 1;
   * io.restorecommerce.fulfillment.Address receiver = 2;
   */
  goods: Item[];
  preferences?: Preferences;
  reference_id: string;
}

export interface QueryList {
  items: Query[];
  total_count: number;
  subject?: Subject;
}

export interface FulfillmentProduct {
  id: string;
  name: string;
  description: string;
  courier_id: string;
  start_zones: string[];
  destination_zones: string[];
  tax_ids: string[];
  attributes: Attribute[];
  variants: Variant[];
  meta?: Meta;
}

export interface Variant {
  id: string;
  name: string;
  description: string;
  price: number;
  max_weight: number;
  max_width: number;
  max_height: number;
  max_length: number;
  max_volume: number;
}

export interface FulfillmentProductList {
  items: FulfillmentProduct[];
  total_count: number;
  subject?: Subject;
}

export interface FulfillmentProductResponse {
  payload?: FulfillmentProduct;
  status?: Status;
}

export interface FulfillmentProductResponseList {
  items: FulfillmentProductResponse[];
  total_count: number;
  operation_status?: OperationStatus;
}

export interface PackingSolution {
  reference_id: string;
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
  total_count: number;
  operation_status?: OperationStatus;
}

export interface Deleted {
  id: string;
}

function createBasePreferences(): Preferences {
  return { couriers: [], pricing: 0, compactness: 0, homogeneity: 0 };
}

export const Preferences = {
  encode(message: Preferences, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      couriers: Array.isArray(object?.couriers) ? object.couriers.map((e: any) => Attribute.fromJSON(e)) : [],
      pricing: isSet(object.pricing) ? Number(object.pricing) : 0,
      compactness: isSet(object.compactness) ? Number(object.compactness) : 0,
      homogeneity: isSet(object.homogeneity) ? Number(object.homogeneity) : 0,
    };
  },

  toJSON(message: Preferences): unknown {
    const obj: any = {};
    if (message.couriers) {
      obj.couriers = message.couriers.map((e) => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.couriers = [];
    }
    message.pricing !== undefined && (obj.pricing = message.pricing);
    message.compactness !== undefined && (obj.compactness = message.compactness);
    message.homogeneity !== undefined && (obj.homogeneity = message.homogeneity);
    return obj;
  },

  create(base?: DeepPartial<Preferences>): Preferences {
    return Preferences.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Preferences>): Preferences {
    const message = createBasePreferences();
    message.couriers = object.couriers?.map((e) => Attribute.fromPartial(e)) || [];
    message.pricing = object.pricing ?? 0;
    message.compactness = object.compactness ?? 0;
    message.homogeneity = object.homogeneity ?? 0;
    return message;
  },
};

function createBaseQuery(): Query {
  return { goods: [], preferences: undefined, reference_id: "" };
}

export const Query = {
  encode(message: Query, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.goods) {
      Item.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.preferences !== undefined) {
      Preferences.encode(message.preferences, writer.uint32(34).fork()).ldelim();
    }
    if (message.reference_id !== "") {
      writer.uint32(42).string(message.reference_id);
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
        case 3:
          message.goods.push(Item.decode(reader, reader.uint32()));
          break;
        case 4:
          message.preferences = Preferences.decode(reader, reader.uint32());
          break;
        case 5:
          message.reference_id = reader.string();
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
      goods: Array.isArray(object?.goods) ? object.goods.map((e: any) => Item.fromJSON(e)) : [],
      preferences: isSet(object.preferences) ? Preferences.fromJSON(object.preferences) : undefined,
      reference_id: isSet(object.reference_id) ? String(object.reference_id) : "",
    };
  },

  toJSON(message: Query): unknown {
    const obj: any = {};
    if (message.goods) {
      obj.goods = message.goods.map((e) => e ? Item.toJSON(e) : undefined);
    } else {
      obj.goods = [];
    }
    message.preferences !== undefined &&
      (obj.preferences = message.preferences ? Preferences.toJSON(message.preferences) : undefined);
    message.reference_id !== undefined && (obj.reference_id = message.reference_id);
    return obj;
  },

  create(base?: DeepPartial<Query>): Query {
    return Query.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Query>): Query {
    const message = createBaseQuery();
    message.goods = object.goods?.map((e) => Item.fromPartial(e)) || [];
    message.preferences = (object.preferences !== undefined && object.preferences !== null)
      ? Preferences.fromPartial(object.preferences)
      : undefined;
    message.reference_id = object.reference_id ?? "";
    return message;
  },
};

function createBaseQueryList(): QueryList {
  return { items: [], total_count: 0, subject: undefined };
}

export const QueryList = {
  encode(message: QueryList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      Query.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
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

  fromJSON(object: any): QueryList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => Query.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: QueryList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? Query.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryList>): QueryList {
    return QueryList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryList>): QueryList {
    const message = createBaseQueryList();
    message.items = object.items?.map((e) => Query.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.subject = (object.subject !== undefined && object.subject !== null)
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
    courier_id: "",
    start_zones: [],
    destination_zones: [],
    tax_ids: [],
    attributes: [],
    variants: [],
    meta: undefined,
  };
}

export const FulfillmentProduct = {
  encode(message: FulfillmentProduct, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.courier_id !== "") {
      writer.uint32(34).string(message.courier_id);
    }
    for (const v of message.start_zones) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.destination_zones) {
      writer.uint32(66).string(v!);
    }
    for (const v of message.tax_ids) {
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
          message.courier_id = reader.string();
          break;
        case 6:
          message.start_zones.push(reader.string());
          break;
        case 8:
          message.destination_zones.push(reader.string());
          break;
        case 9:
          message.tax_ids.push(reader.string());
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
      courier_id: isSet(object.courier_id) ? String(object.courier_id) : "",
      start_zones: Array.isArray(object?.start_zones) ? object.start_zones.map((e: any) => String(e)) : [],
      destination_zones: Array.isArray(object?.destination_zones)
        ? object.destination_zones.map((e: any) => String(e))
        : [],
      tax_ids: Array.isArray(object?.tax_ids) ? object.tax_ids.map((e: any) => String(e)) : [],
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
    message.courier_id !== undefined && (obj.courier_id = message.courier_id);
    if (message.start_zones) {
      obj.start_zones = message.start_zones.map((e) => e);
    } else {
      obj.start_zones = [];
    }
    if (message.destination_zones) {
      obj.destination_zones = message.destination_zones.map((e) => e);
    } else {
      obj.destination_zones = [];
    }
    if (message.tax_ids) {
      obj.tax_ids = message.tax_ids.map((e) => e);
    } else {
      obj.tax_ids = [];
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
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.courier_id = object.courier_id ?? "";
    message.start_zones = object.start_zones?.map((e) => e) || [];
    message.destination_zones = object.destination_zones?.map((e) => e) || [];
    message.tax_ids = object.tax_ids?.map((e) => e) || [];
    message.attributes = object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    message.variants = object.variants?.map((e) => Variant.fromPartial(e)) || [];
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    return message;
  },
};

function createBaseVariant(): Variant {
  return {
    id: "",
    name: "",
    description: "",
    price: 0,
    max_weight: 0,
    max_width: 0,
    max_height: 0,
    max_length: 0,
    max_volume: 0,
  };
}

export const Variant = {
  encode(message: Variant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.max_weight !== 0) {
      writer.uint32(41).double(message.max_weight);
    }
    if (message.max_width !== 0) {
      writer.uint32(49).double(message.max_width);
    }
    if (message.max_height !== 0) {
      writer.uint32(57).double(message.max_height);
    }
    if (message.max_length !== 0) {
      writer.uint32(65).double(message.max_length);
    }
    if (message.max_volume !== 0) {
      writer.uint32(73).double(message.max_volume);
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
          message.max_weight = reader.double();
          break;
        case 6:
          message.max_width = reader.double();
          break;
        case 7:
          message.max_height = reader.double();
          break;
        case 8:
          message.max_length = reader.double();
          break;
        case 9:
          message.max_volume = reader.double();
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
      max_weight: isSet(object.max_weight) ? Number(object.max_weight) : 0,
      max_width: isSet(object.max_width) ? Number(object.max_width) : 0,
      max_height: isSet(object.max_height) ? Number(object.max_height) : 0,
      max_length: isSet(object.max_length) ? Number(object.max_length) : 0,
      max_volume: isSet(object.max_volume) ? Number(object.max_volume) : 0,
    };
  },

  toJSON(message: Variant): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.price !== undefined && (obj.price = message.price);
    message.max_weight !== undefined && (obj.max_weight = message.max_weight);
    message.max_width !== undefined && (obj.max_width = message.max_width);
    message.max_height !== undefined && (obj.max_height = message.max_height);
    message.max_length !== undefined && (obj.max_length = message.max_length);
    message.max_volume !== undefined && (obj.max_volume = message.max_volume);
    return obj;
  },

  create(base?: DeepPartial<Variant>): Variant {
    return Variant.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Variant>): Variant {
    const message = createBaseVariant();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.price = object.price ?? 0;
    message.max_weight = object.max_weight ?? 0;
    message.max_width = object.max_width ?? 0;
    message.max_height = object.max_height ?? 0;
    message.max_length = object.max_length ?? 0;
    message.max_volume = object.max_volume ?? 0;
    return message;
  },
};

function createBaseFulfillmentProductList(): FulfillmentProductList {
  return { items: [], total_count: 0, subject: undefined };
}

export const FulfillmentProductList = {
  encode(message: FulfillmentProductList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      FulfillmentProduct.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FulfillmentProductList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFulfillmentProductList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(FulfillmentProduct.decode(reader, reader.uint32()));
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

  fromJSON(object: any): FulfillmentProductList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => FulfillmentProduct.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
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
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<FulfillmentProductList>): FulfillmentProductList {
    return FulfillmentProductList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FulfillmentProductList>): FulfillmentProductList {
    const message = createBaseFulfillmentProductList();
    message.items = object.items?.map((e) => FulfillmentProduct.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
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

function createBaseFulfillmentProductResponseList(): FulfillmentProductResponseList {
  return { items: [], total_count: 0, operation_status: undefined };
}

export const FulfillmentProductResponseList = {
  encode(message: FulfillmentProductResponseList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      FulfillmentProductResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(message.operation_status, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FulfillmentProductResponseList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFulfillmentProductResponseList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(FulfillmentProductResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): FulfillmentProductResponseList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => FulfillmentProductResponse.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      operation_status: isSet(object.operation_status) ? OperationStatus.fromJSON(object.operation_status) : undefined,
    };
  },

  toJSON(message: FulfillmentProductResponseList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? FulfillmentProductResponse.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status ? OperationStatus.toJSON(message.operation_status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<FulfillmentProductResponseList>): FulfillmentProductResponseList {
    return FulfillmentProductResponseList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FulfillmentProductResponseList>): FulfillmentProductResponseList {
    const message = createBaseFulfillmentProductResponseList();
    message.items = object.items?.map((e) => FulfillmentProductResponse.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.operation_status = (object.operation_status !== undefined && object.operation_status !== null)
      ? OperationStatus.fromPartial(object.operation_status)
      : undefined;
    return message;
  },
};

function createBasePackingSolution(): PackingSolution {
  return { reference_id: "", price: 0, compactness: 0, homogeneity: 0, score: 0, parcels: [] };
}

export const PackingSolution = {
  encode(message: PackingSolution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reference_id !== "") {
      writer.uint32(10).string(message.reference_id);
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
          message.reference_id = reader.string();
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
      reference_id: isSet(object.reference_id) ? String(object.reference_id) : "",
      price: isSet(object.price) ? Number(object.price) : 0,
      compactness: isSet(object.compactness) ? Number(object.compactness) : 0,
      homogeneity: isSet(object.homogeneity) ? Number(object.homogeneity) : 0,
      score: isSet(object.score) ? Number(object.score) : 0,
      parcels: Array.isArray(object?.parcels) ? object.parcels.map((e: any) => Parcel.fromJSON(e)) : [],
    };
  },

  toJSON(message: PackingSolution): unknown {
    const obj: any = {};
    message.reference_id !== undefined && (obj.reference_id = message.reference_id);
    message.price !== undefined && (obj.price = message.price);
    message.compactness !== undefined && (obj.compactness = message.compactness);
    message.homogeneity !== undefined && (obj.homogeneity = message.homogeneity);
    message.score !== undefined && (obj.score = message.score);
    if (message.parcels) {
      obj.parcels = message.parcels.map((e) => e ? Parcel.toJSON(e) : undefined);
    } else {
      obj.parcels = [];
    }
    return obj;
  },

  create(base?: DeepPartial<PackingSolution>): PackingSolution {
    return PackingSolution.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PackingSolution>): PackingSolution {
    const message = createBasePackingSolution();
    message.reference_id = object.reference_id ?? "";
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
  encode(message: PackingSolutionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.solutions) {
      PackingSolution.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PackingSolutionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePackingSolutionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.solutions.push(PackingSolution.decode(reader, reader.uint32()));
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
      solutions: Array.isArray(object?.solutions) ? object.solutions.map((e: any) => PackingSolution.fromJSON(e)) : [],
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: PackingSolutionResponse): unknown {
    const obj: any = {};
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
    message.solutions = object.solutions?.map((e) => PackingSolution.fromPartial(e)) || [];
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBasePackingSolutionResponseList(): PackingSolutionResponseList {
  return { items: [], total_count: 0, operation_status: undefined };
}

export const PackingSolutionResponseList = {
  encode(message: PackingSolutionResponseList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      PackingSolutionResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(message.operation_status, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PackingSolutionResponseList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePackingSolutionResponseList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(PackingSolutionResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): PackingSolutionResponseList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => PackingSolutionResponse.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      operation_status: isSet(object.operation_status) ? OperationStatus.fromJSON(object.operation_status) : undefined,
    };
  },

  toJSON(message: PackingSolutionResponseList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? PackingSolutionResponse.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status ? OperationStatus.toJSON(message.operation_status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<PackingSolutionResponseList>): PackingSolutionResponseList {
    return PackingSolutionResponseList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PackingSolutionResponseList>): PackingSolutionResponseList {
    const message = createBasePackingSolutionResponseList();
    message.items = object.items?.map((e) => PackingSolutionResponse.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.operation_status = (object.operation_status !== undefined && object.operation_status !== null)
      ? OperationStatus.fromPartial(object.operation_status)
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

export interface ServiceImplementation<CallContextExt = {}> {
  read(
    request: ReadRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<FulfillmentProductResponseList>>;
  find(request: QueryList, context: CallContext & CallContextExt): Promise<DeepPartial<PackingSolutionResponseList>>;
  create(
    request: FulfillmentProductList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<FulfillmentProductResponseList>>;
  update(
    request: FulfillmentProductList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<FulfillmentProductResponseList>>;
  upsert(
    request: FulfillmentProductList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<FulfillmentProductResponseList>>;
  delete(request: DeleteRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteResponse>>;
}

export interface ServiceClient<CallOptionsExt = {}> {
  read(
    request: DeepPartial<ReadRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<FulfillmentProductResponseList>;
  find(request: DeepPartial<QueryList>, options?: CallOptions & CallOptionsExt): Promise<PackingSolutionResponseList>;
  create(
    request: DeepPartial<FulfillmentProductList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<FulfillmentProductResponseList>;
  update(
    request: DeepPartial<FulfillmentProductList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<FulfillmentProductResponseList>;
  upsert(
    request: DeepPartial<FulfillmentProductList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<FulfillmentProductResponseList>;
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
        "name": "pricing",
        "number": 2,
        "label": 1,
        "type": 2,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "pricing",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "compactness",
        "number": 3,
        "label": 1,
        "type": 2,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "compactness",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "homogeneity",
        "number": 4,
        "label": 1,
        "type": 2,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "homogeneity",
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
      "name": "Query",
      "field": [{
        "name": "goods",
        "number": 3,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment.Item",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "goods",
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
        "oneofIndex": 0,
        "jsonName": "preferences",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "reference_id",
        "number": 5,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "referenceId",
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
      "name": "QueryList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment_product.Query",
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
        "proto3Optional": false,
      }, {
        "name": "name",
        "number": 2,
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
        "number": 3,
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
        "name": "courier_id",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
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
        "proto3Optional": false,
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
        "oneofIndex": 0,
        "jsonName": "meta",
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
        "proto3Optional": false,
      }, {
        "name": "name",
        "number": 2,
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
        "number": 3,
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
        "name": "price",
        "number": 4,
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
        "name": "max_weight",
        "number": 5,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "maxWeight",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "max_width",
        "number": 6,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "maxWidth",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "max_height",
        "number": 7,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "maxHeight",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "max_length",
        "number": 8,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "maxLength",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "max_volume",
        "number": 9,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "maxVolume",
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
      "name": "FulfillmentProductResponseList",
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
        "proto3Optional": false,
      }, {
        "name": "price",
        "number": 2,
        "label": 1,
        "type": 2,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "price",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "compactness",
        "number": 3,
        "label": 1,
        "type": 2,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "compactness",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "homogeneity",
        "number": 4,
        "label": 1,
        "type": 2,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "homogeneity",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "score",
        "number": 5,
        "label": 1,
        "type": 2,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "score",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "parcels",
        "number": 6,
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
      "name": "PackingSolutionResponse",
      "field": [{
        "name": "solutions",
        "number": 1,
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
      "name": "PackingSolutionResponseList",
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
      "name": "Service",
      "method": [{
        "name": "Read",
        "inputType": ".io.restorecommerce.resourcebase.ReadRequest",
        "outputType": ".io.restorecommerce.fulfillment_product.FulfillmentProductResponseList",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Find",
        "inputType": ".io.restorecommerce.fulfillment_product.QueryList",
        "outputType": ".io.restorecommerce.fulfillment_product.PackingSolutionResponseList",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Create",
        "inputType": ".io.restorecommerce.fulfillment_product.FulfillmentProductList",
        "outputType": ".io.restorecommerce.fulfillment_product.FulfillmentProductResponseList",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Update",
        "inputType": ".io.restorecommerce.fulfillment_product.FulfillmentProductList",
        "outputType": ".io.restorecommerce.fulfillment_product.FulfillmentProductResponseList",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Upsert",
        "inputType": ".io.restorecommerce.fulfillment_product.FulfillmentProductList",
        "outputType": ".io.restorecommerce.fulfillment_product.FulfillmentProductResponseList",
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
      "options": { "deprecated": false, "uninterpretedOption": [] },
    }],
    "extension": [],
    "options": undefined,
    "sourceCodeInfo": {
      "location": [{
        "path": [4, 0, 2, 0],
        "span": [33, 2, 63],
        "leadingComments": "",
        "trailingComments": "ID, name or type\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 0],
        "span": [42, 2, 57],
        "leadingComments":
          " io.restorecommerce.fulfillment.Address sender = 1;\n io.restorecommerce.fulfillment.Address receiver = 2;\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {
    ".io.restorecommerce.fulfillment_product.Preferences": Preferences,
    ".io.restorecommerce.fulfillment_product.Query": Query,
    ".io.restorecommerce.fulfillment_product.QueryList": QueryList,
    ".io.restorecommerce.fulfillment_product.FulfillmentProduct": FulfillmentProduct,
    ".io.restorecommerce.fulfillment_product.Variant": Variant,
    ".io.restorecommerce.fulfillment_product.FulfillmentProductList": FulfillmentProductList,
    ".io.restorecommerce.fulfillment_product.FulfillmentProductResponse": FulfillmentProductResponse,
    ".io.restorecommerce.fulfillment_product.FulfillmentProductResponseList": FulfillmentProductResponseList,
    ".io.restorecommerce.fulfillment_product.PackingSolution": PackingSolution,
    ".io.restorecommerce.fulfillment_product.PackingSolutionResponse": PackingSolutionResponse,
    ".io.restorecommerce.fulfillment_product.PackingSolutionResponseList": PackingSolutionResponseList,
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
      "FulfillmentProduct": {
        options: {
          "kafka_subscriber": KafkaSubscription.decode(
            Buffer.from(
              "ChJmdWxmaWxsbWVudFByb2R1Y3QSL2lvLnJlc3RvcmVjb21tZXJjZS5mdWxmaWxsbWVudF9wcm9kdWN0LnJlc291cmNlGhlmdWxmaWxsbWVudFByb2R1Y3RDcmVhdGVkIhlmdWxmaWxsbWVudFByb2R1Y3RVcGRhdGVkKhlmdWxmaWxsbWVudFByb2R1Y3REZWxldGVk",
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
      "Service": {
        options: { "service_name": "fulfillment_product" },
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
