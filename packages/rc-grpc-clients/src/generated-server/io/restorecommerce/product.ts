/* eslint-disable */
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { Meta, protoMetadata as protoMetadata2 } from "./meta";
import { Subject, protoMetadata as protoMetadata4 } from "./auth";
import {
  OperationStatus,
  Status,
  protoMetadata as protoMetadata5,
} from "./status";
import { CallContext, CallOptions } from "nice-grpc-common";
import {
  protoMetadata as protoMetadata1,
  ReadRequest,
  DeleteRequest,
  DeleteResponse,
} from "./resource_base";
import { protoMetadata as protoMetadata3, Image } from "./image";
import { protoMetadata as protoMetadata6, Attribute } from "./attribute";
import { protoMetadata as protoMetadata7, Resolver } from "./options";
import { protoMetadata as protoMetadata8 } from "./manufacturer";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "io.restorecommerce.product";

export interface Volume {
  width_in_cm: number;
  height_in_cm: number;
  length_in_cm: number;
  weight_in_kg: number;
}

/** Product resource */
export interface MainProduct {
  id: string;
  product?: Product | undefined;
  bundle?: Bundle | undefined;
  active: boolean;
  meta?: Meta;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  manufacturer_id: string;
  taric_code: string;
  prototype?: Identifier | undefined;
  category?: Identifier | undefined;
  tax_ids: string[];
  gtin: string;
  physical?: PhysicalProduct | undefined;
  virtual?: VirtualProduct | undefined;
}

export interface PhysicalProduct {
  variants: PhysicalVariant[];
}

export interface VirtualProduct {
  variants: VirtualVariant[];
}

export interface Identifier {
  id: string;
}

export interface ProductList {
  items: MainProduct[];
  total_count: number;
  subject?: Subject;
}

export interface ProductListResponse {
  items: ProductResponse[];
  total_count: number;
  operation_status?: OperationStatus;
}

export interface ProductResponse {
  payload?: MainProduct;
  status?: Status;
}

export interface PhysicalVariant {
  id: string;
  name: string;
  description: string;
  stock_level: number;
  price: number;
  sale: boolean;
  sale_price: number;
  image: Image[];
  stock_keeping_unit: string;
  template_variant: string;
  packing_volume?: Volume;
  attributes: Attribute[];
}

export interface VirtualVariant {
  id: string;
  name: string;
  description: string;
  stock_level: number;
  price: number;
  sale: boolean;
  sale_price: number;
  image: Image[];
  stock_keeping_unit: string;
  template_variant: string;
  attributes: Attribute[];
}

export interface Bundle {
  id: string;
  name: string;
  description: string;
  image: Image[];
  products: BundleProduct[];
  price: number;
}

export interface BundleProduct {
  product_id: string;
  variant_id: string;
  quantity: number;
  price_ratio: number;
}

export interface VAT {
  tax_id: string;
  vat: number;
}

export interface Deleted {
  id: string;
}

function createBaseVolume(): Volume {
  return { width_in_cm: 0, height_in_cm: 0, length_in_cm: 0, weight_in_kg: 0 };
}

export const Volume = {
  encode(
    message: Volume,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.width_in_cm !== 0) {
      writer.uint32(9).double(message.width_in_cm);
    }
    if (message.height_in_cm !== 0) {
      writer.uint32(17).double(message.height_in_cm);
    }
    if (message.length_in_cm !== 0) {
      writer.uint32(25).double(message.length_in_cm);
    }
    if (message.weight_in_kg !== 0) {
      writer.uint32(33).double(message.weight_in_kg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Volume {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVolume();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.width_in_cm = reader.double();
          break;
        case 2:
          message.height_in_cm = reader.double();
          break;
        case 3:
          message.length_in_cm = reader.double();
          break;
        case 4:
          message.weight_in_kg = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Volume {
    return {
      width_in_cm: isSet(object.width_in_cm) ? Number(object.width_in_cm) : 0,
      height_in_cm: isSet(object.height_in_cm)
        ? Number(object.height_in_cm)
        : 0,
      length_in_cm: isSet(object.length_in_cm)
        ? Number(object.length_in_cm)
        : 0,
      weight_in_kg: isSet(object.weight_in_kg)
        ? Number(object.weight_in_kg)
        : 0,
    };
  },

  toJSON(message: Volume): unknown {
    const obj: any = {};
    message.width_in_cm !== undefined &&
      (obj.width_in_cm = message.width_in_cm);
    message.height_in_cm !== undefined &&
      (obj.height_in_cm = message.height_in_cm);
    message.length_in_cm !== undefined &&
      (obj.length_in_cm = message.length_in_cm);
    message.weight_in_kg !== undefined &&
      (obj.weight_in_kg = message.weight_in_kg);
    return obj;
  },

  fromPartial(object: DeepPartial<Volume>): Volume {
    const message = createBaseVolume();
    message.width_in_cm = object.width_in_cm ?? 0;
    message.height_in_cm = object.height_in_cm ?? 0;
    message.length_in_cm = object.length_in_cm ?? 0;
    message.weight_in_kg = object.weight_in_kg ?? 0;
    return message;
  },
};

function createBaseMainProduct(): MainProduct {
  return {
    id: "",
    product: undefined,
    bundle: undefined,
    active: false,
    meta: undefined,
  };
}

export const MainProduct = {
  encode(
    message: MainProduct,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.product !== undefined) {
      Product.encode(message.product, writer.uint32(18).fork()).ldelim();
    }
    if (message.bundle !== undefined) {
      Bundle.encode(message.bundle, writer.uint32(26).fork()).ldelim();
    }
    if (message.active === true) {
      writer.uint32(32).bool(message.active);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MainProduct {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMainProduct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.product = Product.decode(reader, reader.uint32());
          break;
        case 3:
          message.bundle = Bundle.decode(reader, reader.uint32());
          break;
        case 4:
          message.active = reader.bool();
          break;
        case 5:
          message.meta = Meta.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MainProduct {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      product: isSet(object.product)
        ? Product.fromJSON(object.product)
        : undefined,
      bundle: isSet(object.bundle) ? Bundle.fromJSON(object.bundle) : undefined,
      active: isSet(object.active) ? Boolean(object.active) : false,
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
    };
  },

  toJSON(message: MainProduct): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.product !== undefined &&
      (obj.product = message.product
        ? Product.toJSON(message.product)
        : undefined);
    message.bundle !== undefined &&
      (obj.bundle = message.bundle ? Bundle.toJSON(message.bundle) : undefined);
    message.active !== undefined && (obj.active = message.active);
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MainProduct>): MainProduct {
    const message = createBaseMainProduct();
    message.id = object.id ?? "";
    message.product =
      object.product !== undefined && object.product !== null
        ? Product.fromPartial(object.product)
        : undefined;
    message.bundle =
      object.bundle !== undefined && object.bundle !== null
        ? Bundle.fromPartial(object.bundle)
        : undefined;
    message.active = object.active ?? false;
    message.meta =
      object.meta !== undefined && object.meta !== null
        ? Meta.fromPartial(object.meta)
        : undefined;
    return message;
  },
};

function createBaseProduct(): Product {
  return {
    id: "",
    name: "",
    description: "",
    manufacturer_id: "",
    taric_code: "",
    prototype: undefined,
    category: undefined,
    tax_ids: [],
    gtin: "",
    physical: undefined,
    virtual: undefined,
  };
}

export const Product = {
  encode(
    message: Product,
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
    if (message.manufacturer_id !== "") {
      writer.uint32(34).string(message.manufacturer_id);
    }
    if (message.taric_code !== "") {
      writer.uint32(42).string(message.taric_code);
    }
    if (message.prototype !== undefined) {
      Identifier.encode(message.prototype, writer.uint32(50).fork()).ldelim();
    }
    if (message.category !== undefined) {
      Identifier.encode(message.category, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.tax_ids) {
      writer.uint32(66).string(v!);
    }
    if (message.gtin !== "") {
      writer.uint32(74).string(message.gtin);
    }
    if (message.physical !== undefined) {
      PhysicalProduct.encode(
        message.physical,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.virtual !== undefined) {
      VirtualProduct.encode(message.virtual, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Product {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProduct();
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
          message.manufacturer_id = reader.string();
          break;
        case 5:
          message.taric_code = reader.string();
          break;
        case 6:
          message.prototype = Identifier.decode(reader, reader.uint32());
          break;
        case 7:
          message.category = Identifier.decode(reader, reader.uint32());
          break;
        case 8:
          message.tax_ids.push(reader.string());
          break;
        case 9:
          message.gtin = reader.string();
          break;
        case 10:
          message.physical = PhysicalProduct.decode(reader, reader.uint32());
          break;
        case 11:
          message.virtual = VirtualProduct.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Product {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      manufacturer_id: isSet(object.manufacturer_id)
        ? String(object.manufacturer_id)
        : "",
      taric_code: isSet(object.taric_code) ? String(object.taric_code) : "",
      prototype: isSet(object.prototype)
        ? Identifier.fromJSON(object.prototype)
        : undefined,
      category: isSet(object.category)
        ? Identifier.fromJSON(object.category)
        : undefined,
      tax_ids: Array.isArray(object?.tax_ids)
        ? object.tax_ids.map((e: any) => String(e))
        : [],
      gtin: isSet(object.gtin) ? String(object.gtin) : "",
      physical: isSet(object.physical)
        ? PhysicalProduct.fromJSON(object.physical)
        : undefined,
      virtual: isSet(object.virtual)
        ? VirtualProduct.fromJSON(object.virtual)
        : undefined,
    };
  },

  toJSON(message: Product): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.manufacturer_id !== undefined &&
      (obj.manufacturer_id = message.manufacturer_id);
    message.taric_code !== undefined && (obj.taric_code = message.taric_code);
    message.prototype !== undefined &&
      (obj.prototype = message.prototype
        ? Identifier.toJSON(message.prototype)
        : undefined);
    message.category !== undefined &&
      (obj.category = message.category
        ? Identifier.toJSON(message.category)
        : undefined);
    if (message.tax_ids) {
      obj.tax_ids = message.tax_ids.map((e) => e);
    } else {
      obj.tax_ids = [];
    }
    message.gtin !== undefined && (obj.gtin = message.gtin);
    message.physical !== undefined &&
      (obj.physical = message.physical
        ? PhysicalProduct.toJSON(message.physical)
        : undefined);
    message.virtual !== undefined &&
      (obj.virtual = message.virtual
        ? VirtualProduct.toJSON(message.virtual)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Product>): Product {
    const message = createBaseProduct();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.manufacturer_id = object.manufacturer_id ?? "";
    message.taric_code = object.taric_code ?? "";
    message.prototype =
      object.prototype !== undefined && object.prototype !== null
        ? Identifier.fromPartial(object.prototype)
        : undefined;
    message.category =
      object.category !== undefined && object.category !== null
        ? Identifier.fromPartial(object.category)
        : undefined;
    message.tax_ids = object.tax_ids?.map((e) => e) || [];
    message.gtin = object.gtin ?? "";
    message.physical =
      object.physical !== undefined && object.physical !== null
        ? PhysicalProduct.fromPartial(object.physical)
        : undefined;
    message.virtual =
      object.virtual !== undefined && object.virtual !== null
        ? VirtualProduct.fromPartial(object.virtual)
        : undefined;
    return message;
  },
};

function createBasePhysicalProduct(): PhysicalProduct {
  return { variants: [] };
}

export const PhysicalProduct = {
  encode(
    message: PhysicalProduct,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.variants) {
      PhysicalVariant.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PhysicalProduct {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePhysicalProduct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.variants.push(
            PhysicalVariant.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PhysicalProduct {
    return {
      variants: Array.isArray(object?.variants)
        ? object.variants.map((e: any) => PhysicalVariant.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PhysicalProduct): unknown {
    const obj: any = {};
    if (message.variants) {
      obj.variants = message.variants.map((e) =>
        e ? PhysicalVariant.toJSON(e) : undefined
      );
    } else {
      obj.variants = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<PhysicalProduct>): PhysicalProduct {
    const message = createBasePhysicalProduct();
    message.variants =
      object.variants?.map((e) => PhysicalVariant.fromPartial(e)) || [];
    return message;
  },
};

function createBaseVirtualProduct(): VirtualProduct {
  return { variants: [] };
}

export const VirtualProduct = {
  encode(
    message: VirtualProduct,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.variants) {
      VirtualVariant.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VirtualProduct {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVirtualProduct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.variants.push(VirtualVariant.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VirtualProduct {
    return {
      variants: Array.isArray(object?.variants)
        ? object.variants.map((e: any) => VirtualVariant.fromJSON(e))
        : [],
    };
  },

  toJSON(message: VirtualProduct): unknown {
    const obj: any = {};
    if (message.variants) {
      obj.variants = message.variants.map((e) =>
        e ? VirtualVariant.toJSON(e) : undefined
      );
    } else {
      obj.variants = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<VirtualProduct>): VirtualProduct {
    const message = createBaseVirtualProduct();
    message.variants =
      object.variants?.map((e) => VirtualVariant.fromPartial(e)) || [];
    return message;
  },
};

function createBaseIdentifier(): Identifier {
  return { id: "" };
}

export const Identifier = {
  encode(
    message: Identifier,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Identifier {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentifier();
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

  fromJSON(object: any): Identifier {
    return {
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: Identifier): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<Identifier>): Identifier {
    const message = createBaseIdentifier();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseProductList(): ProductList {
  return { items: [], total_count: 0, subject: undefined };
}

export const ProductList = {
  encode(
    message: ProductList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      MainProduct.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProductList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProductList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(MainProduct.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ProductList {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => MainProduct.fromJSON(e))
        : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      subject: isSet(object.subject)
        ? Subject.fromJSON(object.subject)
        : undefined,
    };
  },

  toJSON(message: ProductList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? MainProduct.toJSON(e) : undefined
      );
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

  fromPartial(object: DeepPartial<ProductList>): ProductList {
    const message = createBaseProductList();
    message.items = object.items?.map((e) => MainProduct.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.subject =
      object.subject !== undefined && object.subject !== null
        ? Subject.fromPartial(object.subject)
        : undefined;
    return message;
  },
};

function createBaseProductListResponse(): ProductListResponse {
  return { items: [], total_count: 0, operation_status: undefined };
}

export const ProductListResponse = {
  encode(
    message: ProductListResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      ProductResponse.encode(v!, writer.uint32(10).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ProductListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProductListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(ProductResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ProductListResponse {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => ProductResponse.fromJSON(e))
        : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      operation_status: isSet(object.operation_status)
        ? OperationStatus.fromJSON(object.operation_status)
        : undefined,
    };
  },

  toJSON(message: ProductListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? ProductResponse.toJSON(e) : undefined
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

  fromPartial(object: DeepPartial<ProductListResponse>): ProductListResponse {
    const message = createBaseProductListResponse();
    message.items =
      object.items?.map((e) => ProductResponse.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.operation_status =
      object.operation_status !== undefined && object.operation_status !== null
        ? OperationStatus.fromPartial(object.operation_status)
        : undefined;
    return message;
  },
};

function createBaseProductResponse(): ProductResponse {
  return { payload: undefined, status: undefined };
}

export const ProductResponse = {
  encode(
    message: ProductResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.payload !== undefined) {
      MainProduct.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProductResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProductResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = MainProduct.decode(reader, reader.uint32());
          break;
        case 3:
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
    return {
      payload: isSet(object.payload)
        ? MainProduct.fromJSON(object.payload)
        : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: ProductResponse): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload
        ? MainProduct.toJSON(message.payload)
        : undefined);
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ProductResponse>): ProductResponse {
    const message = createBaseProductResponse();
    message.payload =
      object.payload !== undefined && object.payload !== null
        ? MainProduct.fromPartial(object.payload)
        : undefined;
    message.status =
      object.status !== undefined && object.status !== null
        ? Status.fromPartial(object.status)
        : undefined;
    return message;
  },
};

function createBasePhysicalVariant(): PhysicalVariant {
  return {
    id: "",
    name: "",
    description: "",
    stock_level: 0,
    price: 0,
    sale: false,
    sale_price: 0,
    image: [],
    stock_keeping_unit: "",
    template_variant: "",
    packing_volume: undefined,
    attributes: [],
  };
}

export const PhysicalVariant = {
  encode(
    message: PhysicalVariant,
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
    if (message.stock_level !== 0) {
      writer.uint32(32).int32(message.stock_level);
    }
    if (message.price !== 0) {
      writer.uint32(41).double(message.price);
    }
    if (message.sale === true) {
      writer.uint32(48).bool(message.sale);
    }
    if (message.sale_price !== 0) {
      writer.uint32(57).double(message.sale_price);
    }
    for (const v of message.image) {
      Image.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.stock_keeping_unit !== "") {
      writer.uint32(74).string(message.stock_keeping_unit);
    }
    if (message.template_variant !== "") {
      writer.uint32(82).string(message.template_variant);
    }
    if (message.packing_volume !== undefined) {
      Volume.encode(message.packing_volume, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PhysicalVariant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePhysicalVariant();
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
          message.stock_level = reader.int32();
          break;
        case 5:
          message.price = reader.double();
          break;
        case 6:
          message.sale = reader.bool();
          break;
        case 7:
          message.sale_price = reader.double();
          break;
        case 8:
          message.image.push(Image.decode(reader, reader.uint32()));
          break;
        case 9:
          message.stock_keeping_unit = reader.string();
          break;
        case 10:
          message.template_variant = reader.string();
          break;
        case 11:
          message.packing_volume = Volume.decode(reader, reader.uint32());
          break;
        case 12:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PhysicalVariant {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      stock_level: isSet(object.stock_level) ? Number(object.stock_level) : 0,
      price: isSet(object.price) ? Number(object.price) : 0,
      sale: isSet(object.sale) ? Boolean(object.sale) : false,
      sale_price: isSet(object.sale_price) ? Number(object.sale_price) : 0,
      image: Array.isArray(object?.image)
        ? object.image.map((e: any) => Image.fromJSON(e))
        : [],
      stock_keeping_unit: isSet(object.stock_keeping_unit)
        ? String(object.stock_keeping_unit)
        : "",
      template_variant: isSet(object.template_variant)
        ? String(object.template_variant)
        : "",
      packing_volume: isSet(object.packing_volume)
        ? Volume.fromJSON(object.packing_volume)
        : undefined,
      attributes: Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => Attribute.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PhysicalVariant): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.stock_level !== undefined &&
      (obj.stock_level = Math.round(message.stock_level));
    message.price !== undefined && (obj.price = message.price);
    message.sale !== undefined && (obj.sale = message.sale);
    message.sale_price !== undefined && (obj.sale_price = message.sale_price);
    if (message.image) {
      obj.image = message.image.map((e) => (e ? Image.toJSON(e) : undefined));
    } else {
      obj.image = [];
    }
    message.stock_keeping_unit !== undefined &&
      (obj.stock_keeping_unit = message.stock_keeping_unit);
    message.template_variant !== undefined &&
      (obj.template_variant = message.template_variant);
    message.packing_volume !== undefined &&
      (obj.packing_volume = message.packing_volume
        ? Volume.toJSON(message.packing_volume)
        : undefined);
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) =>
        e ? Attribute.toJSON(e) : undefined
      );
    } else {
      obj.attributes = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<PhysicalVariant>): PhysicalVariant {
    const message = createBasePhysicalVariant();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.stock_level = object.stock_level ?? 0;
    message.price = object.price ?? 0;
    message.sale = object.sale ?? false;
    message.sale_price = object.sale_price ?? 0;
    message.image = object.image?.map((e) => Image.fromPartial(e)) || [];
    message.stock_keeping_unit = object.stock_keeping_unit ?? "";
    message.template_variant = object.template_variant ?? "";
    message.packing_volume =
      object.packing_volume !== undefined && object.packing_volume !== null
        ? Volume.fromPartial(object.packing_volume)
        : undefined;
    message.attributes =
      object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    return message;
  },
};

function createBaseVirtualVariant(): VirtualVariant {
  return {
    id: "",
    name: "",
    description: "",
    stock_level: 0,
    price: 0,
    sale: false,
    sale_price: 0,
    image: [],
    stock_keeping_unit: "",
    template_variant: "",
    attributes: [],
  };
}

export const VirtualVariant = {
  encode(
    message: VirtualVariant,
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
    if (message.stock_level !== 0) {
      writer.uint32(32).int32(message.stock_level);
    }
    if (message.price !== 0) {
      writer.uint32(41).double(message.price);
    }
    if (message.sale === true) {
      writer.uint32(48).bool(message.sale);
    }
    if (message.sale_price !== 0) {
      writer.uint32(57).double(message.sale_price);
    }
    for (const v of message.image) {
      Image.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.stock_keeping_unit !== "") {
      writer.uint32(74).string(message.stock_keeping_unit);
    }
    if (message.template_variant !== "") {
      writer.uint32(82).string(message.template_variant);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VirtualVariant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVirtualVariant();
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
          message.stock_level = reader.int32();
          break;
        case 5:
          message.price = reader.double();
          break;
        case 6:
          message.sale = reader.bool();
          break;
        case 7:
          message.sale_price = reader.double();
          break;
        case 8:
          message.image.push(Image.decode(reader, reader.uint32()));
          break;
        case 9:
          message.stock_keeping_unit = reader.string();
          break;
        case 10:
          message.template_variant = reader.string();
          break;
        case 11:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VirtualVariant {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      stock_level: isSet(object.stock_level) ? Number(object.stock_level) : 0,
      price: isSet(object.price) ? Number(object.price) : 0,
      sale: isSet(object.sale) ? Boolean(object.sale) : false,
      sale_price: isSet(object.sale_price) ? Number(object.sale_price) : 0,
      image: Array.isArray(object?.image)
        ? object.image.map((e: any) => Image.fromJSON(e))
        : [],
      stock_keeping_unit: isSet(object.stock_keeping_unit)
        ? String(object.stock_keeping_unit)
        : "",
      template_variant: isSet(object.template_variant)
        ? String(object.template_variant)
        : "",
      attributes: Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => Attribute.fromJSON(e))
        : [],
    };
  },

  toJSON(message: VirtualVariant): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.stock_level !== undefined &&
      (obj.stock_level = Math.round(message.stock_level));
    message.price !== undefined && (obj.price = message.price);
    message.sale !== undefined && (obj.sale = message.sale);
    message.sale_price !== undefined && (obj.sale_price = message.sale_price);
    if (message.image) {
      obj.image = message.image.map((e) => (e ? Image.toJSON(e) : undefined));
    } else {
      obj.image = [];
    }
    message.stock_keeping_unit !== undefined &&
      (obj.stock_keeping_unit = message.stock_keeping_unit);
    message.template_variant !== undefined &&
      (obj.template_variant = message.template_variant);
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) =>
        e ? Attribute.toJSON(e) : undefined
      );
    } else {
      obj.attributes = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<VirtualVariant>): VirtualVariant {
    const message = createBaseVirtualVariant();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.stock_level = object.stock_level ?? 0;
    message.price = object.price ?? 0;
    message.sale = object.sale ?? false;
    message.sale_price = object.sale_price ?? 0;
    message.image = object.image?.map((e) => Image.fromPartial(e)) || [];
    message.stock_keeping_unit = object.stock_keeping_unit ?? "";
    message.template_variant = object.template_variant ?? "";
    message.attributes =
      object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBundle(): Bundle {
  return {
    id: "",
    name: "",
    description: "",
    image: [],
    products: [],
    price: 0,
  };
}

export const Bundle = {
  encode(
    message: Bundle,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    for (const v of message.image) {
      Image.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.products) {
      BundleProduct.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.price !== 0) {
      writer.uint32(57).double(message.price);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Bundle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBundle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.image.push(Image.decode(reader, reader.uint32()));
          break;
        case 6:
          message.products.push(BundleProduct.decode(reader, reader.uint32()));
          break;
        case 7:
          message.price = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Bundle {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      image: Array.isArray(object?.image)
        ? object.image.map((e: any) => Image.fromJSON(e))
        : [],
      products: Array.isArray(object?.products)
        ? object.products.map((e: any) => BundleProduct.fromJSON(e))
        : [],
      price: isSet(object.price) ? Number(object.price) : 0,
    };
  },

  toJSON(message: Bundle): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.image) {
      obj.image = message.image.map((e) => (e ? Image.toJSON(e) : undefined));
    } else {
      obj.image = [];
    }
    if (message.products) {
      obj.products = message.products.map((e) =>
        e ? BundleProduct.toJSON(e) : undefined
      );
    } else {
      obj.products = [];
    }
    message.price !== undefined && (obj.price = message.price);
    return obj;
  },

  fromPartial(object: DeepPartial<Bundle>): Bundle {
    const message = createBaseBundle();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.image = object.image?.map((e) => Image.fromPartial(e)) || [];
    message.products =
      object.products?.map((e) => BundleProduct.fromPartial(e)) || [];
    message.price = object.price ?? 0;
    return message;
  },
};

function createBaseBundleProduct(): BundleProduct {
  return { product_id: "", variant_id: "", quantity: 0, price_ratio: 0 };
}

export const BundleProduct = {
  encode(
    message: BundleProduct,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.product_id !== "") {
      writer.uint32(10).string(message.product_id);
    }
    if (message.variant_id !== "") {
      writer.uint32(18).string(message.variant_id);
    }
    if (message.quantity !== 0) {
      writer.uint32(24).uint32(message.quantity);
    }
    if (message.price_ratio !== 0) {
      writer.uint32(33).double(message.price_ratio);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BundleProduct {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBundleProduct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.product_id = reader.string();
          break;
        case 2:
          message.variant_id = reader.string();
          break;
        case 3:
          message.quantity = reader.uint32();
          break;
        case 4:
          message.price_ratio = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BundleProduct {
    return {
      product_id: isSet(object.product_id) ? String(object.product_id) : "",
      variant_id: isSet(object.variant_id) ? String(object.variant_id) : "",
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
      price_ratio: isSet(object.price_ratio) ? Number(object.price_ratio) : 0,
    };
  },

  toJSON(message: BundleProduct): unknown {
    const obj: any = {};
    message.product_id !== undefined && (obj.product_id = message.product_id);
    message.variant_id !== undefined && (obj.variant_id = message.variant_id);
    message.quantity !== undefined &&
      (obj.quantity = Math.round(message.quantity));
    message.price_ratio !== undefined &&
      (obj.price_ratio = message.price_ratio);
    return obj;
  },

  fromPartial(object: DeepPartial<BundleProduct>): BundleProduct {
    const message = createBaseBundleProduct();
    message.product_id = object.product_id ?? "";
    message.variant_id = object.variant_id ?? "";
    message.quantity = object.quantity ?? 0;
    message.price_ratio = object.price_ratio ?? 0;
    return message;
  },
};

function createBaseVAT(): VAT {
  return { tax_id: "", vat: 0 };
}

export const VAT = {
  encode(message: VAT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tax_id !== "") {
      writer.uint32(10).string(message.tax_id);
    }
    if (message.vat !== 0) {
      writer.uint32(17).double(message.vat);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VAT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVAT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tax_id = reader.string();
          break;
        case 2:
          message.vat = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VAT {
    return {
      tax_id: isSet(object.tax_id) ? String(object.tax_id) : "",
      vat: isSet(object.vat) ? Number(object.vat) : 0,
    };
  },

  toJSON(message: VAT): unknown {
    const obj: any = {};
    message.tax_id !== undefined && (obj.tax_id = message.tax_id);
    message.vat !== undefined && (obj.vat = message.vat);
    return obj;
  },

  fromPartial(object: DeepPartial<VAT>): VAT {
    const message = createBaseVAT();
    message.tax_id = object.tax_id ?? "";
    message.vat = object.vat ?? 0;
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
  fullName: "io.restorecommerce.product.Service",
  methods: {
    read: {
      name: "Read",
      requestType: ReadRequest,
      requestStream: false,
      responseType: ProductListResponse,
      responseStream: false,
      options: {},
    },
    create: {
      name: "Create",
      requestType: ProductList,
      requestStream: false,
      responseType: ProductListResponse,
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
      requestType: ProductList,
      requestStream: false,
      responseType: ProductListResponse,
      responseStream: false,
      options: {},
    },
    upsert: {
      name: "Upsert",
      requestType: ProductList,
      requestStream: false,
      responseType: ProductListResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface ServiceServiceImplementation<CallContextExt = {}> {
  read(
    request: ReadRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<ProductListResponse>>;
  create(
    request: ProductList,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<ProductListResponse>>;
  delete(
    request: DeleteRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<DeleteResponse>>;
  update(
    request: ProductList,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<ProductListResponse>>;
  upsert(
    request: ProductList,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<ProductListResponse>>;
}

export interface ServiceClient<CallOptionsExt = {}> {
  read(
    request: DeepPartial<ReadRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<ProductListResponse>;
  create(
    request: DeepPartial<ProductList>,
    options?: CallOptions & CallOptionsExt
  ): Promise<ProductListResponse>;
  delete(
    request: DeepPartial<DeleteRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<DeleteResponse>;
  update(
    request: DeepPartial<ProductList>,
    options?: CallOptions & CallOptionsExt
  ): Promise<ProductListResponse>;
  upsert(
    request: DeepPartial<ProductList>,
    options?: CallOptions & CallOptionsExt
  ): Promise<ProductListResponse>;
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
    name: "io/restorecommerce/product.proto",
    package: "io.restorecommerce.product",
    dependency: [
      "io/restorecommerce/resource_base.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/image.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/attribute.proto",
      "io/restorecommerce/options.proto",
      "io/restorecommerce/manufacturer.proto",
    ],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        name: "Volume",
        field: [
          {
            name: "width_in_cm",
            number: 1,
            label: 1,
            type: 1,
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
            number: 2,
            label: 1,
            type: 1,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "heightInCm",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "length_in_cm",
            number: 3,
            label: 1,
            type: 1,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "lengthInCm",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "weight_in_kg",
            number: 4,
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
        name: "MainProduct",
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
            name: "product",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.product.Product",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "product",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "bundle",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.product.Bundle",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "bundle",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "active",
            number: 4,
            label: 1,
            type: 8,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "active",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "meta",
            number: 5,
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
        oneofDecl: [{ name: "product_type", options: undefined }],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "Product",
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
            name: "manufacturer_id",
            number: 4,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "manufacturerId",
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
            name: "taric_code",
            number: 5,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "taricCode",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "prototype",
            number: 6,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.product.Identifier",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "prototype",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "category",
            number: 7,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.product.Identifier",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "category",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "tax_ids",
            number: 8,
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
            name: "gtin",
            number: 9,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "gtin",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "physical",
            number: 10,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.product.PhysicalProduct",
            extendee: "",
            defaultValue: "",
            oneofIndex: 1,
            jsonName: "physical",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "virtual",
            number: 11,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.product.VirtualProduct",
            extendee: "",
            defaultValue: "",
            oneofIndex: 1,
            jsonName: "virtual",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [
          { name: "classification", options: undefined },
          { name: "nature", options: undefined },
        ],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "PhysicalProduct",
        field: [
          {
            name: "variants",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.product.PhysicalVariant",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "variants",
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
        name: "VirtualProduct",
        field: [
          {
            name: "variants",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.product.VirtualVariant",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "variants",
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
        name: "Identifier",
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
        name: "ProductList",
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.product.MainProduct",
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
        name: "ProductListResponse",
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.product.ProductResponse",
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
        name: "ProductResponse",
        field: [
          {
            name: "payload",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.product.MainProduct",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "payload",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "status",
            number: 3,
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
        name: "PhysicalVariant",
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
            name: "stock_level",
            number: 4,
            label: 1,
            type: 5,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "stockLevel",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "price",
            number: 5,
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
            name: "sale",
            number: 6,
            label: 1,
            type: 8,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "sale",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "sale_price",
            number: 7,
            label: 1,
            type: 1,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "salePrice",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "image",
            number: 8,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.image.Image",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "image",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "stock_keeping_unit",
            number: 9,
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
            name: "template_variant",
            number: 10,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "templateVariant",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "packing_volume",
            number: 11,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.product.Volume",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "packingVolume",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "attributes",
            number: 12,
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
        name: "VirtualVariant",
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
            name: "stock_level",
            number: 4,
            label: 1,
            type: 5,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "stockLevel",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "price",
            number: 5,
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
            name: "sale",
            number: 6,
            label: 1,
            type: 8,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "sale",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "sale_price",
            number: 7,
            label: 1,
            type: 1,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "salePrice",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "image",
            number: 8,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.image.Image",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "image",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "stock_keeping_unit",
            number: 9,
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
            name: "template_variant",
            number: 10,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "templateVariant",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "attributes",
            number: 11,
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
        name: "Bundle",
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
            name: "image",
            number: 5,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.image.Image",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "image",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "products",
            number: 6,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.product.BundleProduct",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "products",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "price",
            number: 7,
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
        name: "BundleProduct",
        field: [
          {
            name: "product_id",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "productId",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "variant_id",
            number: 2,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "variantId",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "quantity",
            number: 3,
            label: 1,
            type: 13,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "quantity",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "price_ratio",
            number: 4,
            label: 1,
            type: 1,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "priceRatio",
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
        name: "VAT",
        field: [
          {
            name: "tax_id",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "taxId",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "vat",
            number: 2,
            label: 1,
            type: 1,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "vat",
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
            outputType: ".io.restorecommerce.product.ProductListResponse",
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
            inputType: ".io.restorecommerce.product.ProductList",
            outputType: ".io.restorecommerce.product.ProductListResponse",
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
            inputType: ".io.restorecommerce.product.ProductList",
            outputType: ".io.restorecommerce.product.ProductListResponse",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Upsert",
            inputType: ".io.restorecommerce.product.ProductList",
            outputType: ".io.restorecommerce.product.ProductListResponse",
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
          path: [3, 7],
          span: [13, 0, 47],
          leadingComments: " Used by resolvers\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [4, 1],
          span: [35, 0, 43, 1],
          leadingComments: " Product resource\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
      ],
    },
    syntax: "proto3",
  }),
  references: {
    ".io.restorecommerce.product.Volume": Volume,
    ".io.restorecommerce.product.MainProduct": MainProduct,
    ".io.restorecommerce.product.Product": Product,
    ".io.restorecommerce.product.PhysicalProduct": PhysicalProduct,
    ".io.restorecommerce.product.VirtualProduct": VirtualProduct,
    ".io.restorecommerce.product.Identifier": Identifier,
    ".io.restorecommerce.product.ProductList": ProductList,
    ".io.restorecommerce.product.ProductListResponse": ProductListResponse,
    ".io.restorecommerce.product.ProductResponse": ProductResponse,
    ".io.restorecommerce.product.PhysicalVariant": PhysicalVariant,
    ".io.restorecommerce.product.VirtualVariant": VirtualVariant,
    ".io.restorecommerce.product.Bundle": Bundle,
    ".io.restorecommerce.product.BundleProduct": BundleProduct,
    ".io.restorecommerce.product.VAT": VAT,
    ".io.restorecommerce.product.Deleted": Deleted,
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
      Product: {
        fields: {
          manufacturer_id: {
            resolver: Resolver.decode(
              Buffer.from(
                "Ci0uaW8ucmVzdG9yZWNvbW1lcmNlLm1hbnVmYWN0dXJlci5NYW51ZmFjdHVyZXISB2NhdGFsb2caDG1hbnVmYWN0dXJlciIEUmVhZCoMbWFudWZhY3R1cmVy",
                "base64"
              )
            ),
          },
        },
      },
    },
    services: {
      Service: {
        options: { service_name: "product" },
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
