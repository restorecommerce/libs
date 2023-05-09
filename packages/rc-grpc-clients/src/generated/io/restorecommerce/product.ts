/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { Attribute, protoMetadata as protoMetadata6 } from "./attribute";
import { protoMetadata as protoMetadata4, Subject } from "./auth";
import { BoundingBox3D, protoMetadata as protoMetadata7 } from "./geometry";
import { Image, protoMetadata as protoMetadata3 } from "./image";
import { protoMetadata as protoMetadata9 } from "./manufacturer";
import { Meta, protoMetadata as protoMetadata2 } from "./meta";
import { KafkaSubscription, protoMetadata as protoMetadata8, Resolver } from "./options";
import { DeleteRequest, DeleteResponse, protoMetadata as protoMetadata1, ReadRequest } from "./resource_base";
import { OperationStatus, protoMetadata as protoMetadata5, Status } from "./status";

export const protobufPackage = "io.restorecommerce.product";

/** Product resource entity */
export interface Product {
  id?: string | undefined;
  product?: IndividualProduct | undefined;
  bundle?: Bundle | undefined;
  active?: boolean | undefined;
  meta?: Meta | undefined;
}

export interface IndividualProduct {
  name?: string | undefined;
  description?: string | undefined;
  manufacturerId?: string | undefined;
  taricCode?: string | undefined;
  prototype?: Identifier | undefined;
  category?: Identifier | undefined;
  taxIds: string[];
  gtin?: string | undefined;
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
  id?: string | undefined;
}

export interface ProductList {
  items: Product[];
  totalCount?: number | undefined;
  subject?: Subject | undefined;
}

export interface ProductListResponse {
  items: ProductResponse[];
  totalCount: number;
  operationStatus?: OperationStatus;
}

export interface ProductResponse {
  payload?: Product;
  status?: Status;
}

export interface Package {
  sizeInCm?: BoundingBox3D | undefined;
  weightInKg?: number | undefined;
  rotatable?: boolean | undefined;
}

export interface PhysicalVariant {
  id?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  stockLevel?: number | undefined;
  price?: number | undefined;
  sale?: boolean | undefined;
  salePrice?: number | undefined;
  image: Image[];
  stockKeepingUnit?: string | undefined;
  templateVariant?: string | undefined;
  packaged?: Package | undefined;
  attributes: Attribute[];
}

export interface VirtualVariant {
  id?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  stockLevel?: number | undefined;
  price?: number | undefined;
  sale?: boolean | undefined;
  salePrice?: number | undefined;
  image: Image[];
  stockKeepingUnit?: string | undefined;
  templateVariant?: string | undefined;
  attributes: Attribute[];
}

export interface Bundle {
  name?: string | undefined;
  description?: string | undefined;
  image: Image[];
  products: BundleProduct[];
  price?: number | undefined;
  prePackaged?: Package | undefined;
}

export interface BundleProduct {
  productId?: string | undefined;
  variantId?: string | undefined;
  quantity?:
    | number
    | undefined;
  /** Discount in relation to the bundle price */
  taxRatio?: number | undefined;
}

export interface Deleted {
  id?: string | undefined;
}

function createBaseProduct(): Product {
  return { id: undefined, product: undefined, bundle: undefined, active: undefined, meta: undefined };
}

export const Product = {
  encode(message: Product, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.product !== undefined) {
      IndividualProduct.encode(message.product, writer.uint32(18).fork()).ldelim();
    }
    if (message.bundle !== undefined) {
      Bundle.encode(message.bundle, writer.uint32(26).fork()).ldelim();
    }
    if (message.active !== undefined) {
      writer.uint32(32).bool(message.active);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(42).fork()).ldelim();
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
          message.product = IndividualProduct.decode(reader, reader.uint32());
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

  fromJSON(object: any): Product {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      product: isSet(object.product) ? IndividualProduct.fromJSON(object.product) : undefined,
      bundle: isSet(object.bundle) ? Bundle.fromJSON(object.bundle) : undefined,
      active: isSet(object.active) ? Boolean(object.active) : undefined,
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
    };
  },

  toJSON(message: Product): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.product !== undefined &&
      (obj.product = message.product ? IndividualProduct.toJSON(message.product) : undefined);
    message.bundle !== undefined && (obj.bundle = message.bundle ? Bundle.toJSON(message.bundle) : undefined);
    message.active !== undefined && (obj.active = message.active);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    return obj;
  },

  create(base?: DeepPartial<Product>): Product {
    return Product.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Product>): Product {
    const message = createBaseProduct();
    message.id = object.id ?? undefined;
    message.product = (object.product !== undefined && object.product !== null)
      ? IndividualProduct.fromPartial(object.product)
      : undefined;
    message.bundle = (object.bundle !== undefined && object.bundle !== null)
      ? Bundle.fromPartial(object.bundle)
      : undefined;
    message.active = object.active ?? undefined;
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    return message;
  },
};

function createBaseIndividualProduct(): IndividualProduct {
  return {
    name: undefined,
    description: undefined,
    manufacturerId: undefined,
    taricCode: undefined,
    prototype: undefined,
    category: undefined,
    taxIds: [],
    gtin: undefined,
    physical: undefined,
    virtual: undefined,
  };
}

export const IndividualProduct = {
  encode(message: IndividualProduct, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(18).string(message.description);
    }
    if (message.manufacturerId !== undefined) {
      writer.uint32(26).string(message.manufacturerId);
    }
    if (message.taricCode !== undefined) {
      writer.uint32(34).string(message.taricCode);
    }
    if (message.prototype !== undefined) {
      Identifier.encode(message.prototype, writer.uint32(42).fork()).ldelim();
    }
    if (message.category !== undefined) {
      Identifier.encode(message.category, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.taxIds) {
      writer.uint32(58).string(v!);
    }
    if (message.gtin !== undefined) {
      writer.uint32(66).string(message.gtin);
    }
    if (message.physical !== undefined) {
      PhysicalProduct.encode(message.physical, writer.uint32(74).fork()).ldelim();
    }
    if (message.virtual !== undefined) {
      VirtualProduct.encode(message.virtual, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IndividualProduct {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndividualProduct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.manufacturerId = reader.string();
          break;
        case 4:
          message.taricCode = reader.string();
          break;
        case 5:
          message.prototype = Identifier.decode(reader, reader.uint32());
          break;
        case 6:
          message.category = Identifier.decode(reader, reader.uint32());
          break;
        case 7:
          message.taxIds.push(reader.string());
          break;
        case 8:
          message.gtin = reader.string();
          break;
        case 9:
          message.physical = PhysicalProduct.decode(reader, reader.uint32());
          break;
        case 10:
          message.virtual = VirtualProduct.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IndividualProduct {
    return {
      name: isSet(object.name) ? String(object.name) : undefined,
      description: isSet(object.description) ? String(object.description) : undefined,
      manufacturerId: isSet(object.manufacturerId) ? String(object.manufacturerId) : undefined,
      taricCode: isSet(object.taricCode) ? String(object.taricCode) : undefined,
      prototype: isSet(object.prototype) ? Identifier.fromJSON(object.prototype) : undefined,
      category: isSet(object.category) ? Identifier.fromJSON(object.category) : undefined,
      taxIds: Array.isArray(object?.taxIds) ? object.taxIds.map((e: any) => String(e)) : [],
      gtin: isSet(object.gtin) ? String(object.gtin) : undefined,
      physical: isSet(object.physical) ? PhysicalProduct.fromJSON(object.physical) : undefined,
      virtual: isSet(object.virtual) ? VirtualProduct.fromJSON(object.virtual) : undefined,
    };
  },

  toJSON(message: IndividualProduct): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.manufacturerId !== undefined && (obj.manufacturerId = message.manufacturerId);
    message.taricCode !== undefined && (obj.taricCode = message.taricCode);
    message.prototype !== undefined &&
      (obj.prototype = message.prototype ? Identifier.toJSON(message.prototype) : undefined);
    message.category !== undefined &&
      (obj.category = message.category ? Identifier.toJSON(message.category) : undefined);
    if (message.taxIds) {
      obj.taxIds = message.taxIds.map((e) => e);
    } else {
      obj.taxIds = [];
    }
    message.gtin !== undefined && (obj.gtin = message.gtin);
    message.physical !== undefined &&
      (obj.physical = message.physical ? PhysicalProduct.toJSON(message.physical) : undefined);
    message.virtual !== undefined &&
      (obj.virtual = message.virtual ? VirtualProduct.toJSON(message.virtual) : undefined);
    return obj;
  },

  create(base?: DeepPartial<IndividualProduct>): IndividualProduct {
    return IndividualProduct.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<IndividualProduct>): IndividualProduct {
    const message = createBaseIndividualProduct();
    message.name = object.name ?? undefined;
    message.description = object.description ?? undefined;
    message.manufacturerId = object.manufacturerId ?? undefined;
    message.taricCode = object.taricCode ?? undefined;
    message.prototype = (object.prototype !== undefined && object.prototype !== null)
      ? Identifier.fromPartial(object.prototype)
      : undefined;
    message.category = (object.category !== undefined && object.category !== null)
      ? Identifier.fromPartial(object.category)
      : undefined;
    message.taxIds = object.taxIds?.map((e) => e) || [];
    message.gtin = object.gtin ?? undefined;
    message.physical = (object.physical !== undefined && object.physical !== null)
      ? PhysicalProduct.fromPartial(object.physical)
      : undefined;
    message.virtual = (object.virtual !== undefined && object.virtual !== null)
      ? VirtualProduct.fromPartial(object.virtual)
      : undefined;
    return message;
  },
};

function createBasePhysicalProduct(): PhysicalProduct {
  return { variants: [] };
}

export const PhysicalProduct = {
  encode(message: PhysicalProduct, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
          message.variants.push(PhysicalVariant.decode(reader, reader.uint32()));
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
      variants: Array.isArray(object?.variants) ? object.variants.map((e: any) => PhysicalVariant.fromJSON(e)) : [],
    };
  },

  toJSON(message: PhysicalProduct): unknown {
    const obj: any = {};
    if (message.variants) {
      obj.variants = message.variants.map((e) => e ? PhysicalVariant.toJSON(e) : undefined);
    } else {
      obj.variants = [];
    }
    return obj;
  },

  create(base?: DeepPartial<PhysicalProduct>): PhysicalProduct {
    return PhysicalProduct.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PhysicalProduct>): PhysicalProduct {
    const message = createBasePhysicalProduct();
    message.variants = object.variants?.map((e) => PhysicalVariant.fromPartial(e)) || [];
    return message;
  },
};

function createBaseVirtualProduct(): VirtualProduct {
  return { variants: [] };
}

export const VirtualProduct = {
  encode(message: VirtualProduct, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      variants: Array.isArray(object?.variants) ? object.variants.map((e: any) => VirtualVariant.fromJSON(e)) : [],
    };
  },

  toJSON(message: VirtualProduct): unknown {
    const obj: any = {};
    if (message.variants) {
      obj.variants = message.variants.map((e) => e ? VirtualVariant.toJSON(e) : undefined);
    } else {
      obj.variants = [];
    }
    return obj;
  },

  create(base?: DeepPartial<VirtualProduct>): VirtualProduct {
    return VirtualProduct.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<VirtualProduct>): VirtualProduct {
    const message = createBaseVirtualProduct();
    message.variants = object.variants?.map((e) => VirtualVariant.fromPartial(e)) || [];
    return message;
  },
};

function createBaseIdentifier(): Identifier {
  return { id: undefined };
}

export const Identifier = {
  encode(message: Identifier, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
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
    return { id: isSet(object.id) ? String(object.id) : undefined };
  },

  toJSON(message: Identifier): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create(base?: DeepPartial<Identifier>): Identifier {
    return Identifier.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Identifier>): Identifier {
    const message = createBaseIdentifier();
    message.id = object.id ?? undefined;
    return message;
  },
};

function createBaseProductList(): ProductList {
  return { items: [], totalCount: undefined, subject: undefined };
}

export const ProductList = {
  encode(message: ProductList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      Product.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== undefined) {
      writer.uint32(16).uint32(message.totalCount);
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
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => Product.fromJSON(e)) : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: ProductList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? Product.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = Math.round(message.totalCount));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ProductList>): ProductList {
    return ProductList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ProductList>): ProductList {
    const message = createBaseProductList();
    message.items = object.items?.map((e) => Product.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseProductListResponse(): ProductListResponse {
  return { items: [], totalCount: 0, operationStatus: undefined };
}

export const ProductListResponse = {
  encode(message: ProductListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      ProductResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.operationStatus !== undefined) {
      OperationStatus.encode(message.operationStatus, writer.uint32(26).fork()).ldelim();
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

  fromJSON(object: any): ProductListResponse {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => ProductResponse.fromJSON(e)) : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
      operationStatus: isSet(object.operationStatus) ? OperationStatus.fromJSON(object.operationStatus) : undefined,
    };
  },

  toJSON(message: ProductListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? ProductResponse.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = Math.round(message.totalCount));
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus ? OperationStatus.toJSON(message.operationStatus) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ProductListResponse>): ProductListResponse {
    return ProductListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ProductListResponse>): ProductListResponse {
    const message = createBaseProductListResponse();
    message.items = object.items?.map((e) => ProductResponse.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    message.operationStatus = (object.operationStatus !== undefined && object.operationStatus !== null)
      ? OperationStatus.fromPartial(object.operationStatus)
      : undefined;
    return message;
  },
};

function createBaseProductResponse(): ProductResponse {
  return { payload: undefined, status: undefined };
}

export const ProductResponse = {
  encode(message: ProductResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      Product.encode(message.payload, writer.uint32(10).fork()).ldelim();
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
          message.payload = Product.decode(reader, reader.uint32());
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
      payload: isSet(object.payload) ? Product.fromJSON(object.payload) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: ProductResponse): unknown {
    const obj: any = {};
    message.payload !== undefined && (obj.payload = message.payload ? Product.toJSON(message.payload) : undefined);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ProductResponse>): ProductResponse {
    return ProductResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ProductResponse>): ProductResponse {
    const message = createBaseProductResponse();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? Product.fromPartial(object.payload)
      : undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBasePackage(): Package {
  return { sizeInCm: undefined, weightInKg: undefined, rotatable: undefined };
}

export const Package = {
  encode(message: Package, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sizeInCm !== undefined) {
      BoundingBox3D.encode(message.sizeInCm, writer.uint32(10).fork()).ldelim();
    }
    if (message.weightInKg !== undefined) {
      writer.uint32(17).double(message.weightInKg);
    }
    if (message.rotatable !== undefined) {
      writer.uint32(24).bool(message.rotatable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Package {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePackage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sizeInCm = BoundingBox3D.decode(reader, reader.uint32());
          break;
        case 2:
          message.weightInKg = reader.double();
          break;
        case 3:
          message.rotatable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Package {
    return {
      sizeInCm: isSet(object.sizeInCm) ? BoundingBox3D.fromJSON(object.sizeInCm) : undefined,
      weightInKg: isSet(object.weightInKg) ? Number(object.weightInKg) : undefined,
      rotatable: isSet(object.rotatable) ? Boolean(object.rotatable) : undefined,
    };
  },

  toJSON(message: Package): unknown {
    const obj: any = {};
    message.sizeInCm !== undefined &&
      (obj.sizeInCm = message.sizeInCm ? BoundingBox3D.toJSON(message.sizeInCm) : undefined);
    message.weightInKg !== undefined && (obj.weightInKg = message.weightInKg);
    message.rotatable !== undefined && (obj.rotatable = message.rotatable);
    return obj;
  },

  create(base?: DeepPartial<Package>): Package {
    return Package.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Package>): Package {
    const message = createBasePackage();
    message.sizeInCm = (object.sizeInCm !== undefined && object.sizeInCm !== null)
      ? BoundingBox3D.fromPartial(object.sizeInCm)
      : undefined;
    message.weightInKg = object.weightInKg ?? undefined;
    message.rotatable = object.rotatable ?? undefined;
    return message;
  },
};

function createBasePhysicalVariant(): PhysicalVariant {
  return {
    id: undefined,
    name: undefined,
    description: undefined,
    stockLevel: undefined,
    price: undefined,
    sale: undefined,
    salePrice: undefined,
    image: [],
    stockKeepingUnit: undefined,
    templateVariant: undefined,
    packaged: undefined,
    attributes: [],
  };
}

export const PhysicalVariant = {
  encode(message: PhysicalVariant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(26).string(message.description);
    }
    if (message.stockLevel !== undefined) {
      writer.uint32(32).int32(message.stockLevel);
    }
    if (message.price !== undefined) {
      writer.uint32(41).double(message.price);
    }
    if (message.sale !== undefined) {
      writer.uint32(48).bool(message.sale);
    }
    if (message.salePrice !== undefined) {
      writer.uint32(57).double(message.salePrice);
    }
    for (const v of message.image) {
      Image.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.stockKeepingUnit !== undefined) {
      writer.uint32(74).string(message.stockKeepingUnit);
    }
    if (message.templateVariant !== undefined) {
      writer.uint32(82).string(message.templateVariant);
    }
    if (message.packaged !== undefined) {
      Package.encode(message.packaged, writer.uint32(90).fork()).ldelim();
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
          message.stockLevel = reader.int32();
          break;
        case 5:
          message.price = reader.double();
          break;
        case 6:
          message.sale = reader.bool();
          break;
        case 7:
          message.salePrice = reader.double();
          break;
        case 8:
          message.image.push(Image.decode(reader, reader.uint32()));
          break;
        case 9:
          message.stockKeepingUnit = reader.string();
          break;
        case 10:
          message.templateVariant = reader.string();
          break;
        case 11:
          message.packaged = Package.decode(reader, reader.uint32());
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
      id: isSet(object.id) ? String(object.id) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      description: isSet(object.description) ? String(object.description) : undefined,
      stockLevel: isSet(object.stockLevel) ? Number(object.stockLevel) : undefined,
      price: isSet(object.price) ? Number(object.price) : undefined,
      sale: isSet(object.sale) ? Boolean(object.sale) : undefined,
      salePrice: isSet(object.salePrice) ? Number(object.salePrice) : undefined,
      image: Array.isArray(object?.image) ? object.image.map((e: any) => Image.fromJSON(e)) : [],
      stockKeepingUnit: isSet(object.stockKeepingUnit) ? String(object.stockKeepingUnit) : undefined,
      templateVariant: isSet(object.templateVariant) ? String(object.templateVariant) : undefined,
      packaged: isSet(object.packaged) ? Package.fromJSON(object.packaged) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : [],
    };
  },

  toJSON(message: PhysicalVariant): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.stockLevel !== undefined && (obj.stockLevel = Math.round(message.stockLevel));
    message.price !== undefined && (obj.price = message.price);
    message.sale !== undefined && (obj.sale = message.sale);
    message.salePrice !== undefined && (obj.salePrice = message.salePrice);
    if (message.image) {
      obj.image = message.image.map((e) => e ? Image.toJSON(e) : undefined);
    } else {
      obj.image = [];
    }
    message.stockKeepingUnit !== undefined && (obj.stockKeepingUnit = message.stockKeepingUnit);
    message.templateVariant !== undefined && (obj.templateVariant = message.templateVariant);
    message.packaged !== undefined && (obj.packaged = message.packaged ? Package.toJSON(message.packaged) : undefined);
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },

  create(base?: DeepPartial<PhysicalVariant>): PhysicalVariant {
    return PhysicalVariant.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PhysicalVariant>): PhysicalVariant {
    const message = createBasePhysicalVariant();
    message.id = object.id ?? undefined;
    message.name = object.name ?? undefined;
    message.description = object.description ?? undefined;
    message.stockLevel = object.stockLevel ?? undefined;
    message.price = object.price ?? undefined;
    message.sale = object.sale ?? undefined;
    message.salePrice = object.salePrice ?? undefined;
    message.image = object.image?.map((e) => Image.fromPartial(e)) || [];
    message.stockKeepingUnit = object.stockKeepingUnit ?? undefined;
    message.templateVariant = object.templateVariant ?? undefined;
    message.packaged = (object.packaged !== undefined && object.packaged !== null)
      ? Package.fromPartial(object.packaged)
      : undefined;
    message.attributes = object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    return message;
  },
};

function createBaseVirtualVariant(): VirtualVariant {
  return {
    id: undefined,
    name: undefined,
    description: undefined,
    stockLevel: undefined,
    price: undefined,
    sale: undefined,
    salePrice: undefined,
    image: [],
    stockKeepingUnit: undefined,
    templateVariant: undefined,
    attributes: [],
  };
}

export const VirtualVariant = {
  encode(message: VirtualVariant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(26).string(message.description);
    }
    if (message.stockLevel !== undefined) {
      writer.uint32(32).int32(message.stockLevel);
    }
    if (message.price !== undefined) {
      writer.uint32(41).double(message.price);
    }
    if (message.sale !== undefined) {
      writer.uint32(48).bool(message.sale);
    }
    if (message.salePrice !== undefined) {
      writer.uint32(57).double(message.salePrice);
    }
    for (const v of message.image) {
      Image.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.stockKeepingUnit !== undefined) {
      writer.uint32(74).string(message.stockKeepingUnit);
    }
    if (message.templateVariant !== undefined) {
      writer.uint32(82).string(message.templateVariant);
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
          message.stockLevel = reader.int32();
          break;
        case 5:
          message.price = reader.double();
          break;
        case 6:
          message.sale = reader.bool();
          break;
        case 7:
          message.salePrice = reader.double();
          break;
        case 8:
          message.image.push(Image.decode(reader, reader.uint32()));
          break;
        case 9:
          message.stockKeepingUnit = reader.string();
          break;
        case 10:
          message.templateVariant = reader.string();
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
      id: isSet(object.id) ? String(object.id) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      description: isSet(object.description) ? String(object.description) : undefined,
      stockLevel: isSet(object.stockLevel) ? Number(object.stockLevel) : undefined,
      price: isSet(object.price) ? Number(object.price) : undefined,
      sale: isSet(object.sale) ? Boolean(object.sale) : undefined,
      salePrice: isSet(object.salePrice) ? Number(object.salePrice) : undefined,
      image: Array.isArray(object?.image) ? object.image.map((e: any) => Image.fromJSON(e)) : [],
      stockKeepingUnit: isSet(object.stockKeepingUnit) ? String(object.stockKeepingUnit) : undefined,
      templateVariant: isSet(object.templateVariant) ? String(object.templateVariant) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : [],
    };
  },

  toJSON(message: VirtualVariant): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.stockLevel !== undefined && (obj.stockLevel = Math.round(message.stockLevel));
    message.price !== undefined && (obj.price = message.price);
    message.sale !== undefined && (obj.sale = message.sale);
    message.salePrice !== undefined && (obj.salePrice = message.salePrice);
    if (message.image) {
      obj.image = message.image.map((e) => e ? Image.toJSON(e) : undefined);
    } else {
      obj.image = [];
    }
    message.stockKeepingUnit !== undefined && (obj.stockKeepingUnit = message.stockKeepingUnit);
    message.templateVariant !== undefined && (obj.templateVariant = message.templateVariant);
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },

  create(base?: DeepPartial<VirtualVariant>): VirtualVariant {
    return VirtualVariant.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<VirtualVariant>): VirtualVariant {
    const message = createBaseVirtualVariant();
    message.id = object.id ?? undefined;
    message.name = object.name ?? undefined;
    message.description = object.description ?? undefined;
    message.stockLevel = object.stockLevel ?? undefined;
    message.price = object.price ?? undefined;
    message.sale = object.sale ?? undefined;
    message.salePrice = object.salePrice ?? undefined;
    message.image = object.image?.map((e) => Image.fromPartial(e)) || [];
    message.stockKeepingUnit = object.stockKeepingUnit ?? undefined;
    message.templateVariant = object.templateVariant ?? undefined;
    message.attributes = object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBundle(): Bundle {
  return { name: undefined, description: undefined, image: [], products: [], price: undefined, prePackaged: undefined };
}

export const Bundle = {
  encode(message: Bundle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.image) {
      Image.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.products) {
      BundleProduct.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.price !== undefined) {
      writer.uint32(41).double(message.price);
    }
    if (message.prePackaged !== undefined) {
      Package.encode(message.prePackaged, writer.uint32(50).fork()).ldelim();
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
          message.name = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.image.push(Image.decode(reader, reader.uint32()));
          break;
        case 4:
          message.products.push(BundleProduct.decode(reader, reader.uint32()));
          break;
        case 5:
          message.price = reader.double();
          break;
        case 6:
          message.prePackaged = Package.decode(reader, reader.uint32());
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
      name: isSet(object.name) ? String(object.name) : undefined,
      description: isSet(object.description) ? String(object.description) : undefined,
      image: Array.isArray(object?.image) ? object.image.map((e: any) => Image.fromJSON(e)) : [],
      products: Array.isArray(object?.products) ? object.products.map((e: any) => BundleProduct.fromJSON(e)) : [],
      price: isSet(object.price) ? Number(object.price) : undefined,
      prePackaged: isSet(object.prePackaged) ? Package.fromJSON(object.prePackaged) : undefined,
    };
  },

  toJSON(message: Bundle): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    if (message.image) {
      obj.image = message.image.map((e) => e ? Image.toJSON(e) : undefined);
    } else {
      obj.image = [];
    }
    if (message.products) {
      obj.products = message.products.map((e) => e ? BundleProduct.toJSON(e) : undefined);
    } else {
      obj.products = [];
    }
    message.price !== undefined && (obj.price = message.price);
    message.prePackaged !== undefined &&
      (obj.prePackaged = message.prePackaged ? Package.toJSON(message.prePackaged) : undefined);
    return obj;
  },

  create(base?: DeepPartial<Bundle>): Bundle {
    return Bundle.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Bundle>): Bundle {
    const message = createBaseBundle();
    message.name = object.name ?? undefined;
    message.description = object.description ?? undefined;
    message.image = object.image?.map((e) => Image.fromPartial(e)) || [];
    message.products = object.products?.map((e) => BundleProduct.fromPartial(e)) || [];
    message.price = object.price ?? undefined;
    message.prePackaged = (object.prePackaged !== undefined && object.prePackaged !== null)
      ? Package.fromPartial(object.prePackaged)
      : undefined;
    return message;
  },
};

function createBaseBundleProduct(): BundleProduct {
  return { productId: undefined, variantId: undefined, quantity: undefined, taxRatio: undefined };
}

export const BundleProduct = {
  encode(message: BundleProduct, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.productId !== undefined) {
      writer.uint32(10).string(message.productId);
    }
    if (message.variantId !== undefined) {
      writer.uint32(18).string(message.variantId);
    }
    if (message.quantity !== undefined) {
      writer.uint32(24).uint32(message.quantity);
    }
    if (message.taxRatio !== undefined) {
      writer.uint32(33).double(message.taxRatio);
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
          message.productId = reader.string();
          break;
        case 2:
          message.variantId = reader.string();
          break;
        case 3:
          message.quantity = reader.uint32();
          break;
        case 4:
          message.taxRatio = reader.double();
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
      productId: isSet(object.productId) ? String(object.productId) : undefined,
      variantId: isSet(object.variantId) ? String(object.variantId) : undefined,
      quantity: isSet(object.quantity) ? Number(object.quantity) : undefined,
      taxRatio: isSet(object.taxRatio) ? Number(object.taxRatio) : undefined,
    };
  },

  toJSON(message: BundleProduct): unknown {
    const obj: any = {};
    message.productId !== undefined && (obj.productId = message.productId);
    message.variantId !== undefined && (obj.variantId = message.variantId);
    message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
    message.taxRatio !== undefined && (obj.taxRatio = message.taxRatio);
    return obj;
  },

  create(base?: DeepPartial<BundleProduct>): BundleProduct {
    return BundleProduct.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<BundleProduct>): BundleProduct {
    const message = createBaseBundleProduct();
    message.productId = object.productId ?? undefined;
    message.variantId = object.variantId ?? undefined;
    message.quantity = object.quantity ?? undefined;
    message.taxRatio = object.taxRatio ?? undefined;
    return message;
  },
};

function createBaseDeleted(): Deleted {
  return { id: undefined };
}

export const Deleted = {
  encode(message: Deleted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
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
    return { id: isSet(object.id) ? String(object.id) : undefined };
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
    message.id = object.id ?? undefined;
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

export interface ServiceImplementation<CallContextExt = {}> {
  read(request: ReadRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ProductListResponse>>;
  create(request: ProductList, context: CallContext & CallContextExt): Promise<DeepPartial<ProductListResponse>>;
  delete(request: DeleteRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteResponse>>;
  update(request: ProductList, context: CallContext & CallContextExt): Promise<DeepPartial<ProductListResponse>>;
  upsert(request: ProductList, context: CallContext & CallContextExt): Promise<DeepPartial<ProductListResponse>>;
}

export interface ServiceClient<CallOptionsExt = {}> {
  read(request: DeepPartial<ReadRequest>, options?: CallOptions & CallOptionsExt): Promise<ProductListResponse>;
  create(request: DeepPartial<ProductList>, options?: CallOptions & CallOptionsExt): Promise<ProductListResponse>;
  delete(request: DeepPartial<DeleteRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteResponse>;
  update(request: DeepPartial<ProductList>, options?: CallOptions & CallOptionsExt): Promise<ProductListResponse>;
  upsert(request: DeepPartial<ProductList>, options?: CallOptions & CallOptionsExt): Promise<ProductListResponse>;
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
    "name": "io/restorecommerce/product.proto",
    "package": "io.restorecommerce.product",
    "dependency": [
      "io/restorecommerce/resource_base.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/image.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/attribute.proto",
      "io/restorecommerce/geometry.proto",
      "io/restorecommerce/options.proto",
      "io/restorecommerce/manufacturer.proto",
    ],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "Product",
      "field": [{
        "name": "id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "id",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "product",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.product.IndividualProduct",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "product",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "bundle",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.product.Bundle",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "bundle",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "active",
        "number": 4,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "active",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "meta",
        "number": 5,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.meta.Meta",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "meta",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "product_type", "options": undefined }, { "name": "_id", "options": undefined }, {
        "name": "_active",
        "options": undefined,
      }, { "name": "_meta", "options": undefined }],
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
      "name": "IndividualProduct",
      "field": [{
        "name": "name",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "description",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "description",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "manufacturer_id",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "manufacturerId",
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
        "name": "taric_code",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 5,
        "jsonName": "taricCode",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "prototype",
        "number": 5,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.product.Identifier",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "prototype",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "category",
        "number": 6,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.product.Identifier",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "category",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "tax_ids",
        "number": 7,
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
        "name": "gtin",
        "number": 8,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 6,
        "jsonName": "gtin",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "physical",
        "number": 9,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.product.PhysicalProduct",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "physical",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "virtual",
        "number": 10,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.product.VirtualProduct",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "virtual",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "classification", "options": undefined },
        { "name": "nature", "options": undefined },
        { "name": "_name", "options": undefined },
        { "name": "_description", "options": undefined },
        { "name": "_manufacturer_id", "options": undefined },
        { "name": "_taric_code", "options": undefined },
        { "name": "_gtin", "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "PhysicalProduct",
      "field": [{
        "name": "variants",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.product.PhysicalVariant",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "variants",
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
      "name": "VirtualProduct",
      "field": [{
        "name": "variants",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.product.VirtualVariant",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "variants",
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
      "name": "Identifier",
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
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_id", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ProductList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.product.Product",
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
        "oneofIndex": 1,
        "jsonName": "subject",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_total_count", "options": undefined }, { "name": "_subject", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ProductListResponse",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.product.ProductResponse",
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
      "name": "ProductResponse",
      "field": [{
        "name": "payload",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.product.Product",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "payload",
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
      "name": "Package",
      "field": [{
        "name": "size_in_cm",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.geometry.BoundingBox3D",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "sizeInCm",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "weight_in_kg",
        "number": 2,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "weightInKg",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "rotatable",
        "number": 3,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "rotatable",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "_size_in_cm", "options": undefined },
        { "name": "_weight_in_kg", "options": undefined },
        { "name": "_rotatable", "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "PhysicalVariant",
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
        "name": "stock_level",
        "number": 4,
        "label": 1,
        "type": 5,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "stockLevel",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "price",
        "number": 5,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "price",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "sale",
        "number": 6,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 5,
        "jsonName": "sale",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "sale_price",
        "number": 7,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 6,
        "jsonName": "salePrice",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "image",
        "number": 8,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.image.Image",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "image",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "stock_keeping_unit",
        "number": 9,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 7,
        "jsonName": "stockKeepingUnit",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "template_variant",
        "number": 10,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 8,
        "jsonName": "templateVariant",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "packaged",
        "number": 11,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.product.Package",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 9,
        "jsonName": "packaged",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "attributes",
        "number": 12,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.attribute.Attribute",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "attributes",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "_id", "options": undefined },
        { "name": "_name", "options": undefined },
        { "name": "_description", "options": undefined },
        { "name": "_stock_level", "options": undefined },
        { "name": "_price", "options": undefined },
        { "name": "_sale", "options": undefined },
        { "name": "_sale_price", "options": undefined },
        { "name": "_stock_keeping_unit", "options": undefined },
        { "name": "_template_variant", "options": undefined },
        { "name": "_packaged", "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "VirtualVariant",
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
        "name": "stock_level",
        "number": 4,
        "label": 1,
        "type": 5,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "stockLevel",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "price",
        "number": 5,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "price",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "sale",
        "number": 6,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 5,
        "jsonName": "sale",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "sale_price",
        "number": 7,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 6,
        "jsonName": "salePrice",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "image",
        "number": 8,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.image.Image",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "image",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "stock_keeping_unit",
        "number": 9,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 7,
        "jsonName": "stockKeepingUnit",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "template_variant",
        "number": 10,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 8,
        "jsonName": "templateVariant",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "attributes",
        "number": 11,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.attribute.Attribute",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "attributes",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "_id", "options": undefined },
        { "name": "_name", "options": undefined },
        { "name": "_description", "options": undefined },
        { "name": "_stock_level", "options": undefined },
        { "name": "_price", "options": undefined },
        { "name": "_sale", "options": undefined },
        { "name": "_sale_price", "options": undefined },
        { "name": "_stock_keeping_unit", "options": undefined },
        { "name": "_template_variant", "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "Bundle",
      "field": [{
        "name": "name",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "description",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "description",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "image",
        "number": 3,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.image.Image",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "image",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "products",
        "number": 4,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.product.BundleProduct",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "products",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "price",
        "number": 5,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "price",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "pre_packaged",
        "number": 6,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.product.Package",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "prePackaged",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_name", "options": undefined }, { "name": "_description", "options": undefined }, {
        "name": "_price",
        "options": undefined,
      }, { "name": "_pre_packaged", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "BundleProduct",
      "field": [{
        "name": "product_id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "productId",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "variant_id",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "variantId",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "quantity",
        "number": 3,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "quantity",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "tax_ratio",
        "number": 4,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "taxRatio",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_product_id", "options": undefined }, { "name": "_variant_id", "options": undefined }, {
        "name": "_quantity",
        "options": undefined,
      }, { "name": "_tax_ratio", "options": undefined }],
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
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_id", "options": undefined }],
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
        "outputType": ".io.restorecommerce.product.ProductListResponse",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Create",
        "inputType": ".io.restorecommerce.product.ProductList",
        "outputType": ".io.restorecommerce.product.ProductListResponse",
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
        "name": "Update",
        "inputType": ".io.restorecommerce.product.ProductList",
        "outputType": ".io.restorecommerce.product.ProductListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Upsert",
        "inputType": ".io.restorecommerce.product.ProductList",
        "outputType": ".io.restorecommerce.product.ProductListResponse",
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
        "path": [3, 8],
        "span": [14, 0, 47],
        "leadingComments": " Used by resolvers\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0],
        "span": [29, 0, 45, 1],
        "leadingComments": " Product resource entity\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 12, 2, 3],
        "span": [149, 2, 32],
        "leadingComments": "",
        "trailingComments": "Discount in relation to the bundle price\n",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {
    ".io.restorecommerce.product.Product": Product,
    ".io.restorecommerce.product.IndividualProduct": IndividualProduct,
    ".io.restorecommerce.product.PhysicalProduct": PhysicalProduct,
    ".io.restorecommerce.product.VirtualProduct": VirtualProduct,
    ".io.restorecommerce.product.Identifier": Identifier,
    ".io.restorecommerce.product.ProductList": ProductList,
    ".io.restorecommerce.product.ProductListResponse": ProductListResponse,
    ".io.restorecommerce.product.ProductResponse": ProductResponse,
    ".io.restorecommerce.product.Package": Package,
    ".io.restorecommerce.product.PhysicalVariant": PhysicalVariant,
    ".io.restorecommerce.product.VirtualVariant": VirtualVariant,
    ".io.restorecommerce.product.Bundle": Bundle,
    ".io.restorecommerce.product.BundleProduct": BundleProduct,
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
    protoMetadata9,
  ],
  options: {
    messages: {
      "Product": {
        options: {
          "kafka_subscriber": KafkaSubscription.decode(
            Buffer.from(
              "Cghwcm9kdWN0cxIjaW8ucmVzdG9yZWNvbW1lcmNlLnByb2R1Y3QucmVzb3VyY2UaDnByb2R1Y3RDcmVhdGVkIg5wcm9kdWN0VXBkYXRlZCoOcHJvZHVjdERlbGV0ZWQ=",
              "base64",
            ),
          ),
        },
      },
      "IndividualProduct": {
        fields: {
          "manufacturer_id": {
            "resolver": Resolver.decode(
              Buffer.from(
                "Ci0uaW8ucmVzdG9yZWNvbW1lcmNlLm1hbnVmYWN0dXJlci5NYW51ZmFjdHVyZXISB2NhdGFsb2caDG1hbnVmYWN0dXJlciIEUmVhZCoMbWFudWZhY3R1cmVy",
                "base64",
              ),
            ),
          },
        },
      },
    },
    services: { "Service": { options: { "service_name": "product" }, methods: { "Read": { "is_query": true } } } },
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
