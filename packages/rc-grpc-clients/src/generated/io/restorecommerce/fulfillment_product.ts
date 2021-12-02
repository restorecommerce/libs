/* eslint-disable */
import { FileDescriptorProto } from "ts-proto-descriptors/google/protobuf/descriptor";
import {
  Address,
  protoMetadata as protoMetadata5,
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
  protoMetadata as protoMetadata6,
  Country,
} from "../../io/restorecommerce/country";
import {
  protoMetadata as protoMetadata7,
  Attribute,
} from "../../io/restorecommerce/attribute";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "io.restorecommerce.fulfillment_product";

export interface Good {
  quantity: number;
  weight: number;
  height: number;
  width: number;
  length: number;
}

export interface Query {
  sender?: Address;
  receiver?: Address;
  good: Good[];
}

export interface QueryList {
  items: Query[];
  totalCount: number;
  subject?: Subject;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  courierId: string;
  startCountry: Country[];
  startZone: string[];
  destinationCountry: Country[];
  destinationZone: string[];
  taxId: string[];
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

export interface ProductList {
  items: Product[];
  totalCount: number;
  subject?: Subject;
}

export interface ProductResponse {
  payload?: Product;
  status?: Status;
}

export interface ProductResponseList {
  items: ProductResponse[];
  totalCount: number;
  operationStatus?: OperationStatus;
}

export interface Deleted {
  id: string;
}

const baseGood: object = {
  quantity: 0,
  weight: 0,
  height: 0,
  width: 0,
  length: 0,
};

export const Good = {
  encode(message: Good, writer: Writer = Writer.create()): Writer {
    if (message.quantity !== 0) {
      writer.uint32(9).double(message.quantity);
    }
    if (message.weight !== 0) {
      writer.uint32(17).double(message.weight);
    }
    if (message.height !== 0) {
      writer.uint32(25).double(message.height);
    }
    if (message.width !== 0) {
      writer.uint32(33).double(message.width);
    }
    if (message.length !== 0) {
      writer.uint32(41).double(message.length);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Good {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseGood) as Good;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quantity = reader.double();
          break;
        case 2:
          message.weight = reader.double();
          break;
        case 3:
          message.height = reader.double();
          break;
        case 4:
          message.width = reader.double();
          break;
        case 5:
          message.length = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Good {
    const message = globalThis.Object.create(baseGood) as Good;
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = Number(object.quantity);
    } else {
      message.quantity = 0;
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = Number(object.weight);
    } else {
      message.weight = 0;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.width !== undefined && object.width !== null) {
      message.width = Number(object.width);
    } else {
      message.width = 0;
    }
    if (object.length !== undefined && object.length !== null) {
      message.length = Number(object.length);
    } else {
      message.length = 0;
    }
    return message;
  },

  fromPartial(object: DeepPartial<Good>): Good {
    const message = { ...baseGood } as Good;
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = object.quantity;
    } else {
      message.quantity = 0;
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight;
    } else {
      message.weight = 0;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.width !== undefined && object.width !== null) {
      message.width = object.width;
    } else {
      message.width = 0;
    }
    if (object.length !== undefined && object.length !== null) {
      message.length = object.length;
    } else {
      message.length = 0;
    }
    return message;
  },

  toJSON(message: Good): unknown {
    const obj: any = {};
    message.quantity !== undefined && (obj.quantity = message.quantity);
    message.weight !== undefined && (obj.weight = message.weight);
    message.height !== undefined && (obj.height = message.height);
    message.width !== undefined && (obj.width = message.width);
    message.length !== undefined && (obj.length = message.length);
    return obj;
  },
};

const baseQuery: object = {};

export const Query = {
  encode(message: Query, writer: Writer = Writer.create()): Writer {
    if (message.sender !== undefined) {
      Address.encode(message.sender, writer.uint32(10).fork()).ldelim();
    }
    if (message.receiver !== undefined) {
      Address.encode(message.receiver, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.good) {
      Good.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Query {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseQuery) as Query;
    message.good = [];
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
          message.good.push(Good.decode(reader, reader.uint32()));
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
    message.good = [];
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
    if (object.good !== undefined && object.good !== null) {
      for (const e of object.good) {
        message.good.push(Good.fromJSON(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Query>): Query {
    const message = { ...baseQuery } as Query;
    message.good = [];
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
    if (object.good !== undefined && object.good !== null) {
      for (const e of object.good) {
        message.good.push(Good.fromPartial(e));
      }
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
    if (message.good) {
      obj.good = message.good.map((e) => (e ? Good.toJSON(e) : undefined));
    } else {
      obj.good = [];
    }
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

const baseProduct: object = {
  id: "",
  name: "",
  description: "",
  courierId: "",
  startZone: "",
  destinationZone: "",
  taxId: "",
};

export const Product = {
  encode(message: Product, writer: Writer = Writer.create()): Writer {
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
    for (const v of message.startCountry) {
      Country.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.startZone) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.destinationCountry) {
      Country.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.destinationZone) {
      writer.uint32(66).string(v!);
    }
    for (const v of message.taxId) {
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

  decode(input: Reader | Uint8Array, length?: number): Product {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseProduct) as Product;
    message.startCountry = [];
    message.startZone = [];
    message.destinationCountry = [];
    message.destinationZone = [];
    message.taxId = [];
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
        case 5:
          message.startCountry.push(Country.decode(reader, reader.uint32()));
          break;
        case 6:
          message.startZone.push(reader.string());
          break;
        case 7:
          message.destinationCountry.push(
            Country.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.destinationZone.push(reader.string());
          break;
        case 9:
          message.taxId.push(reader.string());
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

  fromJSON(object: any): Product {
    const message = globalThis.Object.create(baseProduct) as Product;
    message.startCountry = [];
    message.startZone = [];
    message.destinationCountry = [];
    message.destinationZone = [];
    message.taxId = [];
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
    if (object.startCountry !== undefined && object.startCountry !== null) {
      for (const e of object.startCountry) {
        message.startCountry.push(Country.fromJSON(e));
      }
    }
    if (object.startZone !== undefined && object.startZone !== null) {
      for (const e of object.startZone) {
        message.startZone.push(String(e));
      }
    }
    if (
      object.destinationCountry !== undefined &&
      object.destinationCountry !== null
    ) {
      for (const e of object.destinationCountry) {
        message.destinationCountry.push(Country.fromJSON(e));
      }
    }
    if (
      object.destinationZone !== undefined &&
      object.destinationZone !== null
    ) {
      for (const e of object.destinationZone) {
        message.destinationZone.push(String(e));
      }
    }
    if (object.taxId !== undefined && object.taxId !== null) {
      for (const e of object.taxId) {
        message.taxId.push(String(e));
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

  fromPartial(object: DeepPartial<Product>): Product {
    const message = { ...baseProduct } as Product;
    message.startCountry = [];
    message.startZone = [];
    message.destinationCountry = [];
    message.destinationZone = [];
    message.taxId = [];
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
    if (object.startCountry !== undefined && object.startCountry !== null) {
      for (const e of object.startCountry) {
        message.startCountry.push(Country.fromPartial(e));
      }
    }
    if (object.startZone !== undefined && object.startZone !== null) {
      for (const e of object.startZone) {
        message.startZone.push(e);
      }
    }
    if (
      object.destinationCountry !== undefined &&
      object.destinationCountry !== null
    ) {
      for (const e of object.destinationCountry) {
        message.destinationCountry.push(Country.fromPartial(e));
      }
    }
    if (
      object.destinationZone !== undefined &&
      object.destinationZone !== null
    ) {
      for (const e of object.destinationZone) {
        message.destinationZone.push(e);
      }
    }
    if (object.taxId !== undefined && object.taxId !== null) {
      for (const e of object.taxId) {
        message.taxId.push(e);
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

  toJSON(message: Product): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.courierId !== undefined && (obj.courierId = message.courierId);
    if (message.startCountry) {
      obj.startCountry = message.startCountry.map((e) =>
        e ? Country.toJSON(e) : undefined
      );
    } else {
      obj.startCountry = [];
    }
    if (message.startZone) {
      obj.startZone = message.startZone.map((e) => e);
    } else {
      obj.startZone = [];
    }
    if (message.destinationCountry) {
      obj.destinationCountry = message.destinationCountry.map((e) =>
        e ? Country.toJSON(e) : undefined
      );
    } else {
      obj.destinationCountry = [];
    }
    if (message.destinationZone) {
      obj.destinationZone = message.destinationZone.map((e) => e);
    } else {
      obj.destinationZone = [];
    }
    if (message.taxId) {
      obj.taxId = message.taxId.map((e) => e);
    } else {
      obj.taxId = [];
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

const baseProductList: object = { totalCount: 0 };

export const ProductList = {
  encode(message: ProductList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      Product.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ProductList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseProductList) as ProductList;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Product.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ProductList {
    const message = globalThis.Object.create(baseProductList) as ProductList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Product.fromJSON(e));
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

  fromPartial(object: DeepPartial<ProductList>): ProductList {
    const message = { ...baseProductList } as ProductList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Product.fromPartial(e));
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

  toJSON(message: ProductList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => (e ? Product.toJSON(e) : undefined));
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

const baseProductResponse: object = {};

export const ProductResponse = {
  encode(message: ProductResponse, writer: Writer = Writer.create()): Writer {
    if (message.payload !== undefined) {
      Product.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ProductResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseProductResponse
    ) as ProductResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = Product.decode(reader, reader.uint32());
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

  fromJSON(object: any): ProductResponse {
    const message = globalThis.Object.create(
      baseProductResponse
    ) as ProductResponse;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = Product.fromJSON(object.payload);
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

  fromPartial(object: DeepPartial<ProductResponse>): ProductResponse {
    const message = { ...baseProductResponse } as ProductResponse;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = Product.fromPartial(object.payload);
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

  toJSON(message: ProductResponse): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload
        ? Product.toJSON(message.payload)
        : undefined);
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },
};

const baseProductResponseList: object = { totalCount: 0 };

export const ProductResponseList = {
  encode(
    message: ProductResponseList,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.items) {
      ProductResponse.encode(v!, writer.uint32(10).fork()).ldelim();
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

  decode(input: Reader | Uint8Array, length?: number): ProductResponseList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseProductResponseList
    ) as ProductResponseList;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(ProductResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ProductResponseList {
    const message = globalThis.Object.create(
      baseProductResponseList
    ) as ProductResponseList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(ProductResponse.fromJSON(e));
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

  fromPartial(object: DeepPartial<ProductResponseList>): ProductResponseList {
    const message = { ...baseProductResponseList } as ProductResponseList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(ProductResponse.fromPartial(e));
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

  toJSON(message: ProductResponseList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? ProductResponse.toJSON(e) : undefined
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
  Read(request: ReadRequest): Promise<ProductResponseList>;
  /**
   * - start_address
   * - destination_address
   * - good[]:
   * - quantity
   * - weight
   * - height
   * - width
   * - depth
   */
  Find(request: QueryList): Promise<ProductResponseList>;
  Create(request: ProductList): Promise<ProductResponseList>;
  Update(request: ProductList): Promise<ProductResponseList>;
  Upsert(request: ProductList): Promise<ProductResponseList>;
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
      "io/restorecommerce/fulfillment.proto",
      "io/restorecommerce/country.proto",
      "io/restorecommerce/attribute.proto",
    ],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        field: [
          {
            name: "quantity",
            number: 1,
            label: 1,
            type: 1,
            jsonName: "quantity",
          },
          { name: "weight", number: 2, label: 1, type: 1, jsonName: "weight" },
          { name: "height", number: 3, label: 1, type: 1, jsonName: "height" },
          { name: "width", number: 4, label: 1, type: 1, jsonName: "width" },
          { name: "length", number: 5, label: 1, type: 1, jsonName: "length" },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Good",
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
            name: "good",
            number: 3,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment_product.Good",
            jsonName: "good",
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
            name: "start_country",
            number: 5,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.country.Country",
            jsonName: "startCountry",
          },
          {
            name: "start_zone",
            number: 6,
            label: 3,
            type: 9,
            jsonName: "startZone",
          },
          {
            name: "destination_country",
            number: 7,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.country.Country",
            jsonName: "destinationCountry",
          },
          {
            name: "destination_zone",
            number: 8,
            label: 3,
            type: 9,
            jsonName: "destinationZone",
          },
          { name: "tax_id", number: 9, label: 3, type: 9, jsonName: "taxId" },
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
        name: "Product",
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
            typeName: ".io.restorecommerce.fulfillment_product.Product",
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
        name: "ProductList",
      },
      {
        field: [
          {
            name: "payload",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment_product.Product",
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
        name: "ProductResponse",
      },
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment_product.ProductResponse",
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
        name: "ProductResponseList",
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
              ".io.restorecommerce.fulfillment_product.ProductResponseList",
          },
          {
            name: "Find",
            inputType: ".io.restorecommerce.fulfillment_product.QueryList",
            outputType:
              ".io.restorecommerce.fulfillment_product.ProductResponseList",
          },
          {
            name: "Create",
            inputType: ".io.restorecommerce.fulfillment_product.ProductList",
            outputType:
              ".io.restorecommerce.fulfillment_product.ProductResponseList",
          },
          {
            name: "Update",
            inputType: ".io.restorecommerce.fulfillment_product.ProductList",
            outputType:
              ".io.restorecommerce.fulfillment_product.ProductResponseList",
          },
          {
            name: "Upsert",
            inputType: ".io.restorecommerce.fulfillment_product.ProductList",
            outputType:
              ".io.restorecommerce.fulfillment_product.ProductResponseList",
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
          path: [6, 0, 2, 1],
          span: [18, 2, 53],
          leadingDetachedComments: [],
          trailingComments:
            "      - start_address\n- destination_address\n- good[]:\n- quantity\n- weight\n- height\n- width\n- depth",
        },
      ],
    },
    syntax: "proto3",
  }),
  references: {
    ".io.restorecommerce.fulfillment_product.Good": Good,
    ".io.restorecommerce.fulfillment_product.Query": Query,
    ".io.restorecommerce.fulfillment_product.QueryList": QueryList,
    ".io.restorecommerce.fulfillment_product.Product": Product,
    ".io.restorecommerce.fulfillment_product.Variant": Variant,
    ".io.restorecommerce.fulfillment_product.ProductList": ProductList,
    ".io.restorecommerce.fulfillment_product.ProductResponse": ProductResponse,
    ".io.restorecommerce.fulfillment_product.ProductResponseList": ProductResponseList,
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
