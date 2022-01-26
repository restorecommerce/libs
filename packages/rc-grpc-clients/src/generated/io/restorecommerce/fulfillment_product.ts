/* eslint-disable */
import { FileDescriptorProto } from "ts-proto-descriptors/google/protobuf/descriptor";
import {
  Address,
  protoMetadata as protoMetadata7,
  Parcel,
} from "../../io/restorecommerce/fulfillment";
import {
  Subject,
  protoMetadata as protoMetadata3,
} from "../../io/restorecommerce/auth";
import {
  Meta,
  protoMetadata as protoMetadata2,
} from "../../io/restorecommerce/meta";
import {
  Status,
  OperationStatus,
  protoMetadata as protoMetadata4,
} from "../../io/restorecommerce/status";
import {
  protoMetadata as protoMetadata1,
  DeleteResponse,
  ReadRequest,
  DeleteRequest,
} from "../../io/restorecommerce/resource_base";
import {
  protoMetadata as protoMetadata5,
  Attribute,
} from "../../io/restorecommerce/attribute";
import {
  protoMetadata as protoMetadata6,
  Item,
} from "../../io/restorecommerce/order";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "io.restorecommerce.fulfillment_product";

export interface Preferences {
  /** ID, name or type */
  couriers: Attribute[];
  pricing: number;
  compactness: number;
  homogeneity: number;
}

export interface Query {
  sender?: Address;
  receiver?: Address;
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
  /** repeated io.restorecommerce.country.Country start_country = 5; */
  startZones: string[];
  /** repeated io.restorecommerce.country.Country destination_country = 7; */
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

const basePreferences: object = { pricing: 0, compactness: 0, homogeneity: 0 };

export const Preferences = {
  encode(message: Preferences, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): Preferences {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(basePreferences) as Preferences;
    message.couriers = [];
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
    const message = globalThis.Object.create(basePreferences) as Preferences;
    message.couriers = [];
    if (object.couriers !== undefined && object.couriers !== null) {
      for (const e of object.couriers) {
        message.couriers.push(Attribute.fromJSON(e));
      }
    }
    if (object.pricing !== undefined && object.pricing !== null) {
      message.pricing = Number(object.pricing);
    } else {
      message.pricing = 0;
    }
    if (object.compactness !== undefined && object.compactness !== null) {
      message.compactness = Number(object.compactness);
    } else {
      message.compactness = 0;
    }
    if (object.homogeneity !== undefined && object.homogeneity !== null) {
      message.homogeneity = Number(object.homogeneity);
    } else {
      message.homogeneity = 0;
    }
    return message;
  },

  fromPartial(object: DeepPartial<Preferences>): Preferences {
    const message = { ...basePreferences } as Preferences;
    message.couriers = [];
    if (object.couriers !== undefined && object.couriers !== null) {
      for (const e of object.couriers) {
        message.couriers.push(Attribute.fromPartial(e));
      }
    }
    if (object.pricing !== undefined && object.pricing !== null) {
      message.pricing = object.pricing;
    } else {
      message.pricing = 0;
    }
    if (object.compactness !== undefined && object.compactness !== null) {
      message.compactness = object.compactness;
    } else {
      message.compactness = 0;
    }
    if (object.homogeneity !== undefined && object.homogeneity !== null) {
      message.homogeneity = object.homogeneity;
    } else {
      message.homogeneity = 0;
    }
    return message;
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
};

const baseQuery: object = { referenceId: "" };

export const Query = {
  encode(message: Query, writer: Writer = Writer.create()): Writer {
    if (message.sender !== undefined) {
      Address.encode(message.sender, writer.uint32(10).fork()).ldelim();
    }
    if (message.receiver !== undefined) {
      Address.encode(message.receiver, writer.uint32(18).fork()).ldelim();
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

  decode(input: Reader | Uint8Array, length?: number): Query {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseQuery) as Query;
    message.goods = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = Address.decode(reader, reader.uint32());
          break;
        case 2:
          message.receiver = Address.decode(reader, reader.uint32());
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
    const message = globalThis.Object.create(baseQuery) as Query;
    message.goods = [];
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = Address.fromJSON(object.sender);
    } else {
      message.sender = undefined;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = Address.fromJSON(object.receiver);
    } else {
      message.receiver = undefined;
    }
    if (object.goods !== undefined && object.goods !== null) {
      for (const e of object.goods) {
        message.goods.push(Item.fromJSON(e));
      }
    }
    if (object.preferences !== undefined && object.preferences !== null) {
      message.preferences = Preferences.fromJSON(object.preferences);
    } else {
      message.preferences = undefined;
    }
    if (object.referenceId !== undefined && object.referenceId !== null) {
      message.referenceId = String(object.referenceId);
    } else {
      message.referenceId = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<Query>): Query {
    const message = { ...baseQuery } as Query;
    message.goods = [];
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = Address.fromPartial(object.sender);
    } else {
      message.sender = undefined;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = Address.fromPartial(object.receiver);
    } else {
      message.receiver = undefined;
    }
    if (object.goods !== undefined && object.goods !== null) {
      for (const e of object.goods) {
        message.goods.push(Item.fromPartial(e));
      }
    }
    if (object.preferences !== undefined && object.preferences !== null) {
      message.preferences = Preferences.fromPartial(object.preferences);
    } else {
      message.preferences = undefined;
    }
    if (object.referenceId !== undefined && object.referenceId !== null) {
      message.referenceId = object.referenceId;
    } else {
      message.referenceId = "";
    }
    return message;
  },

  toJSON(message: Query): unknown {
    const obj: any = {};
    message.sender !== undefined &&
      (obj.sender = message.sender
        ? Address.toJSON(message.sender)
        : undefined);
    message.receiver !== undefined &&
      (obj.receiver = message.receiver
        ? Address.toJSON(message.receiver)
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
};

const baseQueryList: object = { totalCount: 0 };

export const QueryList = {
  encode(message: QueryList, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): QueryList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseQueryList) as QueryList;
    message.items = [];
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
    const message = globalThis.Object.create(baseQueryList) as QueryList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Query.fromJSON(e));
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

  fromPartial(object: DeepPartial<QueryList>): QueryList {
    const message = { ...baseQueryList } as QueryList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Query.fromPartial(e));
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

  toJSON(message: QueryList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => (e ? Query.toJSON(e) : undefined));
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

const baseFulfillmentProduct: object = {
  id: "",
  name: "",
  description: "",
  courierId: "",
  startZones: "",
  destinationZones: "",
  taxIds: "",
};

export const FulfillmentProduct = {
  encode(
    message: FulfillmentProduct,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): FulfillmentProduct {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseFulfillmentProduct
    ) as FulfillmentProduct;
    message.startZones = [];
    message.destinationZones = [];
    message.taxIds = [];
    message.attributes = [];
    message.variants = [];
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
    const message = globalThis.Object.create(
      baseFulfillmentProduct
    ) as FulfillmentProduct;
    message.startZones = [];
    message.destinationZones = [];
    message.taxIds = [];
    message.attributes = [];
    message.variants = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
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
    if (object.courierId !== undefined && object.courierId !== null) {
      message.courierId = String(object.courierId);
    } else {
      message.courierId = "";
    }
    if (object.startZones !== undefined && object.startZones !== null) {
      for (const e of object.startZones) {
        message.startZones.push(String(e));
      }
    }
    if (
      object.destinationZones !== undefined &&
      object.destinationZones !== null
    ) {
      for (const e of object.destinationZones) {
        message.destinationZones.push(String(e));
      }
    }
    if (object.taxIds !== undefined && object.taxIds !== null) {
      for (const e of object.taxIds) {
        message.taxIds.push(String(e));
      }
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      for (const e of object.attributes) {
        message.attributes.push(Attribute.fromJSON(e));
      }
    }
    if (object.variants !== undefined && object.variants !== null) {
      for (const e of object.variants) {
        message.variants.push(Variant.fromJSON(e));
      }
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromJSON(object.meta);
    } else {
      message.meta = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<FulfillmentProduct>): FulfillmentProduct {
    const message = { ...baseFulfillmentProduct } as FulfillmentProduct;
    message.startZones = [];
    message.destinationZones = [];
    message.taxIds = [];
    message.attributes = [];
    message.variants = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
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
    if (object.courierId !== undefined && object.courierId !== null) {
      message.courierId = object.courierId;
    } else {
      message.courierId = "";
    }
    if (object.startZones !== undefined && object.startZones !== null) {
      for (const e of object.startZones) {
        message.startZones.push(e);
      }
    }
    if (
      object.destinationZones !== undefined &&
      object.destinationZones !== null
    ) {
      for (const e of object.destinationZones) {
        message.destinationZones.push(e);
      }
    }
    if (object.taxIds !== undefined && object.taxIds !== null) {
      for (const e of object.taxIds) {
        message.taxIds.push(e);
      }
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      for (const e of object.attributes) {
        message.attributes.push(Attribute.fromPartial(e));
      }
    }
    if (object.variants !== undefined && object.variants !== null) {
      for (const e of object.variants) {
        message.variants.push(Variant.fromPartial(e));
      }
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromPartial(object.meta);
    } else {
      message.meta = undefined;
    }
    return message;
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
};

const baseVariant: object = {
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

export const Variant = {
  encode(message: Variant, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): Variant {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseVariant) as Variant;
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
    const message = globalThis.Object.create(baseVariant) as Variant;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
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
    if (object.price !== undefined && object.price !== null) {
      message.price = Number(object.price);
    } else {
      message.price = 0;
    }
    if (object.maxWeight !== undefined && object.maxWeight !== null) {
      message.maxWeight = Number(object.maxWeight);
    } else {
      message.maxWeight = 0;
    }
    if (object.maxWidth !== undefined && object.maxWidth !== null) {
      message.maxWidth = Number(object.maxWidth);
    } else {
      message.maxWidth = 0;
    }
    if (object.maxHeight !== undefined && object.maxHeight !== null) {
      message.maxHeight = Number(object.maxHeight);
    } else {
      message.maxHeight = 0;
    }
    if (object.maxLength !== undefined && object.maxLength !== null) {
      message.maxLength = Number(object.maxLength);
    } else {
      message.maxLength = 0;
    }
    if (object.maxVolume !== undefined && object.maxVolume !== null) {
      message.maxVolume = Number(object.maxVolume);
    } else {
      message.maxVolume = 0;
    }
    return message;
  },

  fromPartial(object: DeepPartial<Variant>): Variant {
    const message = { ...baseVariant } as Variant;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
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
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    } else {
      message.price = 0;
    }
    if (object.maxWeight !== undefined && object.maxWeight !== null) {
      message.maxWeight = object.maxWeight;
    } else {
      message.maxWeight = 0;
    }
    if (object.maxWidth !== undefined && object.maxWidth !== null) {
      message.maxWidth = object.maxWidth;
    } else {
      message.maxWidth = 0;
    }
    if (object.maxHeight !== undefined && object.maxHeight !== null) {
      message.maxHeight = object.maxHeight;
    } else {
      message.maxHeight = 0;
    }
    if (object.maxLength !== undefined && object.maxLength !== null) {
      message.maxLength = object.maxLength;
    } else {
      message.maxLength = 0;
    }
    if (object.maxVolume !== undefined && object.maxVolume !== null) {
      message.maxVolume = object.maxVolume;
    } else {
      message.maxVolume = 0;
    }
    return message;
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
};

const baseFulfillmentProductList: object = { totalCount: 0 };

export const FulfillmentProductList = {
  encode(
    message: FulfillmentProductList,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): FulfillmentProductList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseFulfillmentProductList
    ) as FulfillmentProductList;
    message.items = [];
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
    const message = globalThis.Object.create(
      baseFulfillmentProductList
    ) as FulfillmentProductList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(FulfillmentProduct.fromJSON(e));
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

  fromPartial(
    object: DeepPartial<FulfillmentProductList>
  ): FulfillmentProductList {
    const message = { ...baseFulfillmentProductList } as FulfillmentProductList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(FulfillmentProduct.fromPartial(e));
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

  toJSON(message: FulfillmentProductList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? FulfillmentProduct.toJSON(e) : undefined
      );
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

const baseFulfillmentProductResponse: object = {};

export const FulfillmentProductResponse = {
  encode(
    message: FulfillmentProductResponse,
    writer: Writer = Writer.create()
  ): Writer {
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
    input: Reader | Uint8Array,
    length?: number
  ): FulfillmentProductResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseFulfillmentProductResponse
    ) as FulfillmentProductResponse;
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
    const message = globalThis.Object.create(
      baseFulfillmentProductResponse
    ) as FulfillmentProductResponse;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = FulfillmentProduct.fromJSON(object.payload);
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

  fromPartial(
    object: DeepPartial<FulfillmentProductResponse>
  ): FulfillmentProductResponse {
    const message = {
      ...baseFulfillmentProductResponse,
    } as FulfillmentProductResponse;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = FulfillmentProduct.fromPartial(object.payload);
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
};

const baseFulfillmentProductResponseList: object = { totalCount: 0 };

export const FulfillmentProductResponseList = {
  encode(
    message: FulfillmentProductResponseList,
    writer: Writer = Writer.create()
  ): Writer {
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
    input: Reader | Uint8Array,
    length?: number
  ): FulfillmentProductResponseList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseFulfillmentProductResponseList
    ) as FulfillmentProductResponseList;
    message.items = [];
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
    const message = globalThis.Object.create(
      baseFulfillmentProductResponseList
    ) as FulfillmentProductResponseList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(FulfillmentProductResponse.fromJSON(e));
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

  fromPartial(
    object: DeepPartial<FulfillmentProductResponseList>
  ): FulfillmentProductResponseList {
    const message = {
      ...baseFulfillmentProductResponseList,
    } as FulfillmentProductResponseList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(FulfillmentProductResponse.fromPartial(e));
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

  toJSON(message: FulfillmentProductResponseList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? FulfillmentProductResponse.toJSON(e) : undefined
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

const basePackingSolution: object = {
  referenceId: "",
  price: 0,
  compactness: 0,
  homogeneity: 0,
  score: 0,
};

export const PackingSolution = {
  encode(message: PackingSolution, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): PackingSolution {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      basePackingSolution
    ) as PackingSolution;
    message.parcels = [];
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
    const message = globalThis.Object.create(
      basePackingSolution
    ) as PackingSolution;
    message.parcels = [];
    if (object.referenceId !== undefined && object.referenceId !== null) {
      message.referenceId = String(object.referenceId);
    } else {
      message.referenceId = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Number(object.price);
    } else {
      message.price = 0;
    }
    if (object.compactness !== undefined && object.compactness !== null) {
      message.compactness = Number(object.compactness);
    } else {
      message.compactness = 0;
    }
    if (object.homogeneity !== undefined && object.homogeneity !== null) {
      message.homogeneity = Number(object.homogeneity);
    } else {
      message.homogeneity = 0;
    }
    if (object.score !== undefined && object.score !== null) {
      message.score = Number(object.score);
    } else {
      message.score = 0;
    }
    if (object.parcels !== undefined && object.parcels !== null) {
      for (const e of object.parcels) {
        message.parcels.push(Parcel.fromJSON(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<PackingSolution>): PackingSolution {
    const message = { ...basePackingSolution } as PackingSolution;
    message.parcels = [];
    if (object.referenceId !== undefined && object.referenceId !== null) {
      message.referenceId = object.referenceId;
    } else {
      message.referenceId = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    } else {
      message.price = 0;
    }
    if (object.compactness !== undefined && object.compactness !== null) {
      message.compactness = object.compactness;
    } else {
      message.compactness = 0;
    }
    if (object.homogeneity !== undefined && object.homogeneity !== null) {
      message.homogeneity = object.homogeneity;
    } else {
      message.homogeneity = 0;
    }
    if (object.score !== undefined && object.score !== null) {
      message.score = object.score;
    } else {
      message.score = 0;
    }
    if (object.parcels !== undefined && object.parcels !== null) {
      for (const e of object.parcels) {
        message.parcels.push(Parcel.fromPartial(e));
      }
    }
    return message;
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
};

const basePackingSolutionResponse: object = {};

export const PackingSolutionResponse = {
  encode(
    message: PackingSolutionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.solutions) {
      PackingSolution.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PackingSolutionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      basePackingSolutionResponse
    ) as PackingSolutionResponse;
    message.solutions = [];
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
    const message = globalThis.Object.create(
      basePackingSolutionResponse
    ) as PackingSolutionResponse;
    message.solutions = [];
    if (object.solutions !== undefined && object.solutions !== null) {
      for (const e of object.solutions) {
        message.solutions.push(PackingSolution.fromJSON(e));
      }
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromJSON(object.status);
    } else {
      message.status = undefined;
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<PackingSolutionResponse>
  ): PackingSolutionResponse {
    const message = {
      ...basePackingSolutionResponse,
    } as PackingSolutionResponse;
    message.solutions = [];
    if (object.solutions !== undefined && object.solutions !== null) {
      for (const e of object.solutions) {
        message.solutions.push(PackingSolution.fromPartial(e));
      }
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromPartial(object.status);
    } else {
      message.status = undefined;
    }
    return message;
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
};

const basePackingSolutionResponseList: object = { totalCount: 0 };

export const PackingSolutionResponseList = {
  encode(
    message: PackingSolutionResponseList,
    writer: Writer = Writer.create()
  ): Writer {
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
    input: Reader | Uint8Array,
    length?: number
  ): PackingSolutionResponseList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      basePackingSolutionResponseList
    ) as PackingSolutionResponseList;
    message.items = [];
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
    const message = globalThis.Object.create(
      basePackingSolutionResponseList
    ) as PackingSolutionResponseList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(PackingSolutionResponse.fromJSON(e));
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

  fromPartial(
    object: DeepPartial<PackingSolutionResponseList>
  ): PackingSolutionResponseList {
    const message = {
      ...basePackingSolutionResponseList,
    } as PackingSolutionResponseList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(PackingSolutionResponse.fromPartial(e));
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

  toJSON(message: PackingSolutionResponseList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? PackingSolutionResponse.toJSON(e) : undefined
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

export interface Service {
  Read(request: ReadRequest): Promise<FulfillmentProductResponseList>;
  Find(request: QueryList): Promise<PackingSolutionResponseList>;
  Create(
    request: FulfillmentProductList
  ): Promise<FulfillmentProductResponseList>;
  Update(
    request: FulfillmentProductList
  ): Promise<FulfillmentProductResponseList>;
  Upsert(
    request: FulfillmentProductList
  ): Promise<FulfillmentProductResponseList>;
  Delete(request: DeleteRequest): Promise<DeleteResponse>;
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
      "io/restorecommerce/attribute.proto",
      "io/restorecommerce/order.proto",
      "io/restorecommerce/fulfillment.proto",
    ],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        field: [
          {
            name: "couriers",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.attribute.Attribute",
            jsonName: "couriers",
          },
          {
            name: "pricing",
            number: 2,
            label: 1,
            type: 2,
            jsonName: "pricing",
          },
          {
            name: "compactness",
            number: 3,
            label: 1,
            type: 2,
            jsonName: "compactness",
          },
          {
            name: "homogeneity",
            number: 4,
            label: 1,
            type: 2,
            jsonName: "homogeneity",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Preferences",
      },
      {
        field: [
          {
            name: "sender",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Address",
            jsonName: "sender",
          },
          {
            name: "receiver",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Address",
            jsonName: "receiver",
          },
          {
            name: "goods",
            number: 3,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.order.Item",
            jsonName: "goods",
          },
          {
            name: "preferences",
            number: 4,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment_product.Preferences",
            jsonName: "preferences",
          },
          {
            name: "reference_id",
            number: 5,
            label: 1,
            type: 9,
            jsonName: "referenceId",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Query",
      },
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment_product.Query",
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
        name: "QueryList",
      },
      {
        field: [
          { name: "id", number: 1, label: 1, type: 9, jsonName: "id" },
          { name: "name", number: 2, label: 1, type: 9, jsonName: "name" },
          {
            name: "description",
            number: 3,
            label: 1,
            type: 9,
            jsonName: "description",
          },
          {
            name: "courier_id",
            number: 4,
            label: 1,
            type: 9,
            jsonName: "courierId",
          },
          {
            name: "start_zones",
            number: 6,
            label: 3,
            type: 9,
            jsonName: "startZones",
          },
          {
            name: "destination_zones",
            number: 8,
            label: 3,
            type: 9,
            jsonName: "destinationZones",
          },
          { name: "tax_ids", number: 9, label: 3, type: 9, jsonName: "taxIds" },
          {
            name: "attributes",
            number: 10,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.attribute.Attribute",
            jsonName: "attributes",
          },
          {
            name: "variants",
            number: 11,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment_product.Variant",
            jsonName: "variants",
          },
          {
            name: "meta",
            number: 12,
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
        name: "FulfillmentProduct",
      },
      {
        field: [
          { name: "id", number: 1, label: 1, type: 9, jsonName: "id" },
          { name: "name", number: 2, label: 1, type: 9, jsonName: "name" },
          {
            name: "description",
            number: 3,
            label: 1,
            type: 9,
            jsonName: "description",
          },
          { name: "price", number: 4, label: 1, type: 1, jsonName: "price" },
          {
            name: "max_weight",
            number: 5,
            label: 1,
            type: 1,
            jsonName: "maxWeight",
          },
          {
            name: "max_width",
            number: 6,
            label: 1,
            type: 1,
            jsonName: "maxWidth",
          },
          {
            name: "max_height",
            number: 7,
            label: 1,
            type: 1,
            jsonName: "maxHeight",
          },
          {
            name: "max_length",
            number: 8,
            label: 1,
            type: 1,
            jsonName: "maxLength",
          },
          {
            name: "max_volume",
            number: 9,
            label: 1,
            type: 1,
            jsonName: "maxVolume",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Variant",
      },
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName:
              ".io.restorecommerce.fulfillment_product.FulfillmentProduct",
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
        name: "FulfillmentProductList",
      },
      {
        field: [
          {
            name: "payload",
            number: 1,
            label: 1,
            type: 11,
            typeName:
              ".io.restorecommerce.fulfillment_product.FulfillmentProduct",
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
        name: "FulfillmentProductResponse",
      },
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName:
              ".io.restorecommerce.fulfillment_product.FulfillmentProductResponse",
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
        name: "FulfillmentProductResponseList",
      },
      {
        field: [
          {
            name: "reference_id",
            number: 1,
            label: 1,
            type: 9,
            jsonName: "referenceId",
          },
          { name: "price", number: 2, label: 1, type: 2, jsonName: "price" },
          {
            name: "compactness",
            number: 3,
            label: 1,
            type: 2,
            jsonName: "compactness",
          },
          {
            name: "homogeneity",
            number: 4,
            label: 1,
            type: 2,
            jsonName: "homogeneity",
          },
          { name: "score", number: 5, label: 1, type: 2, jsonName: "score" },
          {
            name: "parcels",
            number: 6,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Parcel",
            jsonName: "parcels",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "PackingSolution",
      },
      {
        field: [
          {
            name: "solutions",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment_product.PackingSolution",
            jsonName: "solutions",
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
        name: "PackingSolutionResponse",
      },
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName:
              ".io.restorecommerce.fulfillment_product.PackingSolutionResponse",
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
        name: "PackingSolutionResponseList",
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
    ],
    enumType: [],
    service: [
      {
        method: [
          {
            name: "Read",
            inputType: ".io.restorecommerce.resourcebase.ReadRequest",
            outputType:
              ".io.restorecommerce.fulfillment_product.FulfillmentProductResponseList",
          },
          {
            name: "Find",
            inputType: ".io.restorecommerce.fulfillment_product.QueryList",
            outputType:
              ".io.restorecommerce.fulfillment_product.PackingSolutionResponseList",
          },
          {
            name: "Create",
            inputType:
              ".io.restorecommerce.fulfillment_product.FulfillmentProductList",
            outputType:
              ".io.restorecommerce.fulfillment_product.FulfillmentProductResponseList",
          },
          {
            name: "Update",
            inputType:
              ".io.restorecommerce.fulfillment_product.FulfillmentProductList",
            outputType:
              ".io.restorecommerce.fulfillment_product.FulfillmentProductResponseList",
          },
          {
            name: "Upsert",
            inputType:
              ".io.restorecommerce.fulfillment_product.FulfillmentProductList",
            outputType:
              ".io.restorecommerce.fulfillment_product.FulfillmentProductResponseList",
          },
          {
            name: "Delete",
            inputType: ".io.restorecommerce.resourcebase.DeleteRequest",
            outputType: ".io.restorecommerce.resourcebase.DeleteResponse",
          },
        ],
        name: "Service",
      },
    ],
    extension: [],
    name: "io/restorecommerce/fulfillment_product.proto",
    package: "io.restorecommerce.fulfillment_product",
    sourceCodeInfo: {
      location: [
        {
          path: [4, 0, 2, 0],
          span: [27, 2, 63],
          leadingDetachedComments: [],
          trailingComments: "ID, name or type\n",
        },
        {
          path: [4, 3, 2, 4],
          span: [53, 2, 34],
          leadingDetachedComments: [],
          leadingComments:
            "repeated io.restorecommerce.country.Country start_country = 5;\n",
        },
        {
          path: [4, 3, 2, 5],
          span: [55, 2, 40],
          leadingDetachedComments: [],
          leadingComments:
            "repeated io.restorecommerce.country.Country destination_country = 7;\n",
        },
      ],
    },
    syntax: "proto3",
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
