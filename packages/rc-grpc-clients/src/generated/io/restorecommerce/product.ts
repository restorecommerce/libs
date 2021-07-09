/* eslint-disable */
import { FileDescriptorProto } from "ts-proto-descriptors/google/protobuf/descriptor";
import {
  Meta,
  protoMetadata as protoMetadata2,
} from "../../io/restorecommerce/meta";
import {
  Subject,
  protoMetadata as protoMetadata4,
} from "../../io/restorecommerce/auth";
import {
  OperationStatus,
  Status,
  protoMetadata as protoMetadata5,
} from "../../io/restorecommerce/status";
import {
  protoMetadata as protoMetadata1,
  DeleteResponse,
  ReadRequest,
  DeleteRequest,
} from "../../io/restorecommerce/resource_base";
import {
  protoMetadata as protoMetadata3,
  Image,
} from "../../io/restorecommerce/image";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "io.restorecommerce.product";

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
  manufacturerId: string;
  taricCode: string;
  prototype?: Identifier | undefined;
  category?: Identifier | undefined;
  taxTypeId: string[];
  variants: Variant[];
  gtin: string;
}

export interface Identifier {
  id: string;
}

export interface ProductList {
  items: MainProduct[];
  totalCount: number;
  subject?: Subject;
}

export interface ProductListResponse {
  items: ProductResponse[];
  totalCount: number;
  operationStatus?: OperationStatus;
}

export interface ProductResponse {
  payload?: MainProduct;
  status?: Status;
}

export interface Variant {
  id: string;
  name: string;
  description: string;
  stockLevel: number;
  price: number;
  sale: boolean;
  salePrice: number;
  image: Image[];
  stockKeepingUnit: string;
  attributes: VariantAttribute[];
}

export interface VariantAttribute {
  key: string;
  values: string[];
}

export interface Bundle {
  id: string;
  name: string;
  description: string;
  image: Image[];
  product: BundleProduct[];
  price: number;
}

export interface BundleProduct {
  productId: string;
  quantity: number;
}

export interface Deleted {
  id: string;
}

const baseMainProduct: object = { id: "", active: false };

export const MainProduct = {
  encode(message: MainProduct, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MainProduct {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseMainProduct) as MainProduct;
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
    const message = globalThis.Object.create(baseMainProduct) as MainProduct;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.product !== undefined && object.product !== null) {
      message.product = Product.fromJSON(object.product);
    } else {
      message.product = undefined;
    }
    if (object.bundle !== undefined && object.bundle !== null) {
      message.bundle = Bundle.fromJSON(object.bundle);
    } else {
      message.bundle = undefined;
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = Boolean(object.active);
    } else {
      message.active = false;
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromJSON(object.meta);
    } else {
      message.meta = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<MainProduct>): MainProduct {
    const message = { ...baseMainProduct } as MainProduct;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.product !== undefined && object.product !== null) {
      message.product = Product.fromPartial(object.product);
    } else {
      message.product = undefined;
    }
    if (object.bundle !== undefined && object.bundle !== null) {
      message.bundle = Bundle.fromPartial(object.bundle);
    } else {
      message.bundle = undefined;
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    } else {
      message.active = false;
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromPartial(object.meta);
    } else {
      message.meta = undefined;
    }
    return message;
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
};

const baseProduct: object = {
  id: "",
  name: "",
  description: "",
  manufacturerId: "",
  taricCode: "",
  taxTypeId: "",
  gtin: "",
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
    if (message.manufacturerId !== "") {
      writer.uint32(34).string(message.manufacturerId);
    }
    if (message.taricCode !== "") {
      writer.uint32(42).string(message.taricCode);
    }
    if (message.prototype !== undefined) {
      Identifier.encode(message.prototype, writer.uint32(50).fork()).ldelim();
    }
    if (message.category !== undefined) {
      Identifier.encode(message.category, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.taxTypeId) {
      writer.uint32(66).string(v!);
    }
    for (const v of message.variants) {
      Variant.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.gtin !== "") {
      writer.uint32(82).string(message.gtin);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Product {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseProduct) as Product;
    message.taxTypeId = [];
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
          message.manufacturerId = reader.string();
          break;
        case 5:
          message.taricCode = reader.string();
          break;
        case 6:
          message.prototype = Identifier.decode(reader, reader.uint32());
          break;
        case 7:
          message.category = Identifier.decode(reader, reader.uint32());
          break;
        case 8:
          message.taxTypeId.push(reader.string());
          break;
        case 9:
          message.variants.push(Variant.decode(reader, reader.uint32()));
          break;
        case 10:
          message.gtin = reader.string();
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
    message.taxTypeId = [];
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
    if (object.manufacturerId !== undefined && object.manufacturerId !== null) {
      message.manufacturerId = String(object.manufacturerId);
    } else {
      message.manufacturerId = "";
    }
    if (object.taricCode !== undefined && object.taricCode !== null) {
      message.taricCode = String(object.taricCode);
    } else {
      message.taricCode = "";
    }
    if (object.prototype !== undefined && object.prototype !== null) {
      message.prototype = Identifier.fromJSON(object.prototype);
    } else {
      message.prototype = undefined;
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = Identifier.fromJSON(object.category);
    } else {
      message.category = undefined;
    }
    if (object.taxTypeId !== undefined && object.taxTypeId !== null) {
      for (const e of object.taxTypeId) {
        message.taxTypeId.push(String(e));
      }
    }
    if (object.variants !== undefined && object.variants !== null) {
      for (const e of object.variants) {
        message.variants.push(Variant.fromJSON(e));
      }
    }
    if (object.gtin !== undefined && object.gtin !== null) {
      message.gtin = String(object.gtin);
    } else {
      message.gtin = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<Product>): Product {
    const message = { ...baseProduct } as Product;
    message.taxTypeId = [];
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
    if (object.manufacturerId !== undefined && object.manufacturerId !== null) {
      message.manufacturerId = object.manufacturerId;
    } else {
      message.manufacturerId = "";
    }
    if (object.taricCode !== undefined && object.taricCode !== null) {
      message.taricCode = object.taricCode;
    } else {
      message.taricCode = "";
    }
    if (object.prototype !== undefined && object.prototype !== null) {
      message.prototype = Identifier.fromPartial(object.prototype);
    } else {
      message.prototype = undefined;
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = Identifier.fromPartial(object.category);
    } else {
      message.category = undefined;
    }
    if (object.taxTypeId !== undefined && object.taxTypeId !== null) {
      for (const e of object.taxTypeId) {
        message.taxTypeId.push(e);
      }
    }
    if (object.variants !== undefined && object.variants !== null) {
      for (const e of object.variants) {
        message.variants.push(Variant.fromPartial(e));
      }
    }
    if (object.gtin !== undefined && object.gtin !== null) {
      message.gtin = object.gtin;
    } else {
      message.gtin = "";
    }
    return message;
  },

  toJSON(message: Product): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.manufacturerId !== undefined &&
      (obj.manufacturerId = message.manufacturerId);
    message.taricCode !== undefined && (obj.taricCode = message.taricCode);
    message.prototype !== undefined &&
      (obj.prototype = message.prototype
        ? Identifier.toJSON(message.prototype)
        : undefined);
    message.category !== undefined &&
      (obj.category = message.category
        ? Identifier.toJSON(message.category)
        : undefined);
    if (message.taxTypeId) {
      obj.taxTypeId = message.taxTypeId.map((e) => e);
    } else {
      obj.taxTypeId = [];
    }
    if (message.variants) {
      obj.variants = message.variants.map((e) =>
        e ? Variant.toJSON(e) : undefined
      );
    } else {
      obj.variants = [];
    }
    message.gtin !== undefined && (obj.gtin = message.gtin);
    return obj;
  },
};

const baseIdentifier: object = { id: "" };

export const Identifier = {
  encode(message: Identifier, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Identifier {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseIdentifier) as Identifier;
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
    const message = globalThis.Object.create(baseIdentifier) as Identifier;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<Identifier>): Identifier {
    const message = { ...baseIdentifier } as Identifier;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: Identifier): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
};

const baseProductList: object = { totalCount: 0 };

export const ProductList = {
  encode(message: ProductList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      MainProduct.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.items.push(MainProduct.decode(reader, reader.uint32()));
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
        message.items.push(MainProduct.fromJSON(e));
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
        message.items.push(MainProduct.fromPartial(e));
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
      obj.items = message.items.map((e) =>
        e ? MainProduct.toJSON(e) : undefined
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

const baseProductListResponse: object = { totalCount: 0 };

export const ProductListResponse = {
  encode(
    message: ProductListResponse,
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

  decode(input: Reader | Uint8Array, length?: number): ProductListResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseProductListResponse
    ) as ProductListResponse;
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

  fromJSON(object: any): ProductListResponse {
    const message = globalThis.Object.create(
      baseProductListResponse
    ) as ProductListResponse;
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

  fromPartial(object: DeepPartial<ProductListResponse>): ProductListResponse {
    const message = { ...baseProductListResponse } as ProductListResponse;
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

  toJSON(message: ProductListResponse): unknown {
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

const baseProductResponse: object = {};

export const ProductResponse = {
  encode(message: ProductResponse, writer: Writer = Writer.create()): Writer {
    if (message.payload !== undefined) {
      MainProduct.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(26).fork()).ldelim();
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
    const message = globalThis.Object.create(
      baseProductResponse
    ) as ProductResponse;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = MainProduct.fromJSON(object.payload);
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
      message.payload = MainProduct.fromPartial(object.payload);
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
        ? MainProduct.toJSON(message.payload)
        : undefined);
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },
};

const baseVariant: object = {
  id: "",
  name: "",
  description: "",
  stockLevel: 0,
  price: 0,
  sale: false,
  salePrice: 0,
  stockKeepingUnit: "",
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
    if (message.stockLevel !== 0) {
      writer.uint32(32).int32(message.stockLevel);
    }
    if (message.price !== 0) {
      writer.uint32(41).double(message.price);
    }
    if (message.sale === true) {
      writer.uint32(48).bool(message.sale);
    }
    if (message.salePrice !== 0) {
      writer.uint32(57).double(message.salePrice);
    }
    for (const v of message.image) {
      Image.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.stockKeepingUnit !== "") {
      writer.uint32(74).string(message.stockKeepingUnit);
    }
    for (const v of message.attributes) {
      VariantAttribute.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Variant {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseVariant) as Variant;
    message.image = [];
    message.attributes = [];
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
          message.attributes.push(
            VariantAttribute.decode(reader, reader.uint32())
          );
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
    message.image = [];
    message.attributes = [];
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
    if (object.stockLevel !== undefined && object.stockLevel !== null) {
      message.stockLevel = Number(object.stockLevel);
    } else {
      message.stockLevel = 0;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Number(object.price);
    } else {
      message.price = 0;
    }
    if (object.sale !== undefined && object.sale !== null) {
      message.sale = Boolean(object.sale);
    } else {
      message.sale = false;
    }
    if (object.salePrice !== undefined && object.salePrice !== null) {
      message.salePrice = Number(object.salePrice);
    } else {
      message.salePrice = 0;
    }
    if (object.image !== undefined && object.image !== null) {
      for (const e of object.image) {
        message.image.push(Image.fromJSON(e));
      }
    }
    if (
      object.stockKeepingUnit !== undefined &&
      object.stockKeepingUnit !== null
    ) {
      message.stockKeepingUnit = String(object.stockKeepingUnit);
    } else {
      message.stockKeepingUnit = "";
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      for (const e of object.attributes) {
        message.attributes.push(VariantAttribute.fromJSON(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Variant>): Variant {
    const message = { ...baseVariant } as Variant;
    message.image = [];
    message.attributes = [];
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
    if (object.stockLevel !== undefined && object.stockLevel !== null) {
      message.stockLevel = object.stockLevel;
    } else {
      message.stockLevel = 0;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    } else {
      message.price = 0;
    }
    if (object.sale !== undefined && object.sale !== null) {
      message.sale = object.sale;
    } else {
      message.sale = false;
    }
    if (object.salePrice !== undefined && object.salePrice !== null) {
      message.salePrice = object.salePrice;
    } else {
      message.salePrice = 0;
    }
    if (object.image !== undefined && object.image !== null) {
      for (const e of object.image) {
        message.image.push(Image.fromPartial(e));
      }
    }
    if (
      object.stockKeepingUnit !== undefined &&
      object.stockKeepingUnit !== null
    ) {
      message.stockKeepingUnit = object.stockKeepingUnit;
    } else {
      message.stockKeepingUnit = "";
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      for (const e of object.attributes) {
        message.attributes.push(VariantAttribute.fromPartial(e));
      }
    }
    return message;
  },

  toJSON(message: Variant): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.stockLevel !== undefined && (obj.stockLevel = message.stockLevel);
    message.price !== undefined && (obj.price = message.price);
    message.sale !== undefined && (obj.sale = message.sale);
    message.salePrice !== undefined && (obj.salePrice = message.salePrice);
    if (message.image) {
      obj.image = message.image.map((e) => (e ? Image.toJSON(e) : undefined));
    } else {
      obj.image = [];
    }
    message.stockKeepingUnit !== undefined &&
      (obj.stockKeepingUnit = message.stockKeepingUnit);
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) =>
        e ? VariantAttribute.toJSON(e) : undefined
      );
    } else {
      obj.attributes = [];
    }
    return obj;
  },
};

const baseVariantAttribute: object = { key: "", values: "" };

export const VariantAttribute = {
  encode(message: VariantAttribute, writer: Writer = Writer.create()): Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    for (const v of message.values) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): VariantAttribute {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseVariantAttribute
    ) as VariantAttribute;
    message.values = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.values.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VariantAttribute {
    const message = globalThis.Object.create(
      baseVariantAttribute
    ) as VariantAttribute;
    message.values = [];
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.values !== undefined && object.values !== null) {
      for (const e of object.values) {
        message.values.push(String(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<VariantAttribute>): VariantAttribute {
    const message = { ...baseVariantAttribute } as VariantAttribute;
    message.values = [];
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.values !== undefined && object.values !== null) {
      for (const e of object.values) {
        message.values.push(e);
      }
    }
    return message;
  },

  toJSON(message: VariantAttribute): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    if (message.values) {
      obj.values = message.values.map((e) => e);
    } else {
      obj.values = [];
    }
    return obj;
  },
};

const baseBundle: object = { id: "", name: "", description: "", price: 0 };

export const Bundle = {
  encode(message: Bundle, writer: Writer = Writer.create()): Writer {
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
    for (const v of message.product) {
      BundleProduct.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.price !== 0) {
      writer.uint32(57).double(message.price);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Bundle {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseBundle) as Bundle;
    message.image = [];
    message.product = [];
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
          message.product.push(BundleProduct.decode(reader, reader.uint32()));
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
    const message = globalThis.Object.create(baseBundle) as Bundle;
    message.image = [];
    message.product = [];
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
    if (object.image !== undefined && object.image !== null) {
      for (const e of object.image) {
        message.image.push(Image.fromJSON(e));
      }
    }
    if (object.product !== undefined && object.product !== null) {
      for (const e of object.product) {
        message.product.push(BundleProduct.fromJSON(e));
      }
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Number(object.price);
    } else {
      message.price = 0;
    }
    return message;
  },

  fromPartial(object: DeepPartial<Bundle>): Bundle {
    const message = { ...baseBundle } as Bundle;
    message.image = [];
    message.product = [];
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
    if (object.image !== undefined && object.image !== null) {
      for (const e of object.image) {
        message.image.push(Image.fromPartial(e));
      }
    }
    if (object.product !== undefined && object.product !== null) {
      for (const e of object.product) {
        message.product.push(BundleProduct.fromPartial(e));
      }
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    } else {
      message.price = 0;
    }
    return message;
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
    if (message.product) {
      obj.product = message.product.map((e) =>
        e ? BundleProduct.toJSON(e) : undefined
      );
    } else {
      obj.product = [];
    }
    message.price !== undefined && (obj.price = message.price);
    return obj;
  },
};

const baseBundleProduct: object = { productId: "", quantity: 0 };

export const BundleProduct = {
  encode(message: BundleProduct, writer: Writer = Writer.create()): Writer {
    if (message.productId !== "") {
      writer.uint32(10).string(message.productId);
    }
    if (message.quantity !== 0) {
      writer.uint32(16).uint32(message.quantity);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): BundleProduct {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseBundleProduct
    ) as BundleProduct;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.productId = reader.string();
          break;
        case 2:
          message.quantity = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BundleProduct {
    const message = globalThis.Object.create(
      baseBundleProduct
    ) as BundleProduct;
    if (object.productId !== undefined && object.productId !== null) {
      message.productId = String(object.productId);
    } else {
      message.productId = "";
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = Number(object.quantity);
    } else {
      message.quantity = 0;
    }
    return message;
  },

  fromPartial(object: DeepPartial<BundleProduct>): BundleProduct {
    const message = { ...baseBundleProduct } as BundleProduct;
    if (object.productId !== undefined && object.productId !== null) {
      message.productId = object.productId;
    } else {
      message.productId = "";
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = object.quantity;
    } else {
      message.quantity = 0;
    }
    return message;
  },

  toJSON(message: BundleProduct): unknown {
    const obj: any = {};
    message.productId !== undefined && (obj.productId = message.productId);
    message.quantity !== undefined && (obj.quantity = message.quantity);
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
  Read(request: ReadRequest): Promise<ProductListResponse>;
  Create(request: ProductList): Promise<ProductListResponse>;
  Delete(request: DeleteRequest): Promise<DeleteResponse>;
  Update(request: ProductList): Promise<ProductListResponse>;
  Upsert(request: ProductList): Promise<ProductListResponse>;
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
      "io/restorecommerce/image.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
    ],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        field: [
          { name: "id", number: 1, label: 1, type: 9, jsonName: "id" },
          {
            name: "product",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.product.Product",
            oneofIndex: 0,
            jsonName: "product",
          },
          {
            name: "bundle",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.product.Bundle",
            oneofIndex: 0,
            jsonName: "bundle",
          },
          { name: "active", number: 4, label: 1, type: 8, jsonName: "active" },
          {
            name: "meta",
            number: 5,
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
        oneofDecl: [{ name: "product_type" }],
        reservedRange: [],
        reservedName: [],
        name: "MainProduct",
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
            name: "manufacturer_id",
            number: 4,
            label: 1,
            type: 9,
            jsonName: "manufacturerId",
          },
          {
            name: "taric_code",
            number: 5,
            label: 1,
            type: 9,
            jsonName: "taricCode",
          },
          {
            name: "prototype",
            number: 6,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.product.Identifier",
            oneofIndex: 0,
            jsonName: "prototype",
          },
          {
            name: "category",
            number: 7,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.product.Identifier",
            oneofIndex: 0,
            jsonName: "category",
          },
          {
            name: "tax_type_id",
            number: 8,
            label: 3,
            type: 9,
            jsonName: "taxTypeId",
          },
          {
            name: "variants",
            number: 9,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.product.Variant",
            jsonName: "variants",
          },
          { name: "gtin", number: 10, label: 1, type: 9, jsonName: "gtin" },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [{ name: "classification" }],
        reservedRange: [],
        reservedName: [],
        name: "Product",
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
        name: "Identifier",
      },
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.product.MainProduct",
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
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.product.ProductResponse",
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
        name: "ProductListResponse",
      },
      {
        field: [
          {
            name: "payload",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.product.MainProduct",
            jsonName: "payload",
          },
          {
            name: "status",
            number: 3,
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
            name: "stock_level",
            number: 4,
            label: 1,
            type: 5,
            jsonName: "stockLevel",
          },
          { name: "price", number: 5, label: 1, type: 1, jsonName: "price" },
          { name: "sale", number: 6, label: 1, type: 8, jsonName: "sale" },
          {
            name: "sale_price",
            number: 7,
            label: 1,
            type: 1,
            jsonName: "salePrice",
          },
          {
            name: "image",
            number: 8,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.image.Image",
            jsonName: "image",
          },
          {
            name: "stock_keeping_unit",
            number: 9,
            label: 1,
            type: 9,
            jsonName: "stockKeepingUnit",
          },
          {
            name: "attributes",
            number: 10,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.product.VariantAttribute",
            jsonName: "attributes",
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
          { name: "key", number: 1, label: 1, type: 9, jsonName: "key" },
          { name: "values", number: 2, label: 3, type: 9, jsonName: "values" },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "VariantAttribute",
      },
      {
        field: [
          { name: "id", number: 1, label: 1, type: 9, jsonName: "id" },
          { name: "name", number: 3, label: 1, type: 9, jsonName: "name" },
          {
            name: "description",
            number: 4,
            label: 1,
            type: 9,
            jsonName: "description",
          },
          {
            name: "image",
            number: 5,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.image.Image",
            jsonName: "image",
          },
          {
            name: "product",
            number: 6,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.product.BundleProduct",
            jsonName: "product",
          },
          { name: "price", number: 7, label: 1, type: 1, jsonName: "price" },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Bundle",
      },
      {
        field: [
          {
            name: "product_id",
            number: 1,
            label: 1,
            type: 9,
            jsonName: "productId",
          },
          {
            name: "quantity",
            number: 2,
            label: 1,
            type: 13,
            jsonName: "quantity",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "BundleProduct",
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
            outputType: ".io.restorecommerce.product.ProductListResponse",
          },
          {
            name: "Create",
            inputType: ".io.restorecommerce.product.ProductList",
            outputType: ".io.restorecommerce.product.ProductListResponse",
          },
          {
            name: "Delete",
            inputType: ".io.restorecommerce.resourcebase.DeleteRequest",
            outputType: ".io.restorecommerce.resourcebase.DeleteResponse",
          },
          {
            name: "Update",
            inputType: ".io.restorecommerce.product.ProductList",
            outputType: ".io.restorecommerce.product.ProductListResponse",
          },
          {
            name: "Upsert",
            inputType: ".io.restorecommerce.product.ProductList",
            outputType: ".io.restorecommerce.product.ProductListResponse",
          },
        ],
        name: "Service",
      },
    ],
    extension: [],
    name: "io/restorecommerce/product.proto",
    package: "io.restorecommerce.product",
    sourceCodeInfo: {
      location: [
        {
          path: [4, 0],
          span: [19, 0, 27, 1],
          leadingDetachedComments: [],
          leadingComments: " Product resource\n",
        },
      ],
    },
    syntax: "proto3",
  }),
  references: {
    ".io.restorecommerce.product.MainProduct": MainProduct,
    ".io.restorecommerce.product.Product": Product,
    ".io.restorecommerce.product.Identifier": Identifier,
    ".io.restorecommerce.product.ProductList": ProductList,
    ".io.restorecommerce.product.ProductListResponse": ProductListResponse,
    ".io.restorecommerce.product.ProductResponse": ProductResponse,
    ".io.restorecommerce.product.Variant": Variant,
    ".io.restorecommerce.product.VariantAttribute": VariantAttribute,
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
