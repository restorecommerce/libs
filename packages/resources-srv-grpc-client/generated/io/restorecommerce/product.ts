/* eslint-disable */
import { Meta } from '../../io/restorecommerce/meta';
import { Subject, ApiKey } from '../../io/restorecommerce/auth';
import { Image } from '../../io/restorecommerce/image';
import { ReadRequest, DeleteRequest } from '../../io/restorecommerce/resource_base';
import { Empty } from '../../google/protobuf/empty';
import { Writer, Reader } from 'protobufjs/minimal';


/**
 *  Product resource
 */
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
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
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

const baseMainProduct: object = {
  id: "",
  active: false,
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

const baseIdentifier: object = {
  id: "",
};

const baseProductList: object = {
  totalCount: 0,
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

const baseVariantAttribute: object = {
  key: "",
  values: "",
};

const baseBundle: object = {
  id: "",
  name: "",
  description: "",
  price: 0,
};

const baseBundleProduct: object = {
  productId: "",
  quantity: 0,
};

const baseDeleted: object = {
  id: "",
};

export interface Service {

  Read(request: ReadRequest): Promise<ProductList>;

  Create(request: ProductList): Promise<ProductList>;

  Delete(request: DeleteRequest): Promise<Empty>;

  Update(request: ProductList): Promise<ProductList>;

  Upsert(request: ProductList): Promise<ProductList>;

}

export const MainProduct = {
  encode(message: MainProduct, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    if (message.product !== undefined) {
      Product.encode(message.product, writer.uint32(18).fork()).ldelim();
    }
    if (message.bundle !== undefined) {
      Bundle.encode(message.bundle, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(32).bool(message.active);
    if (message.meta !== undefined && message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MainProduct {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMainProduct } as MainProduct;
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
};

export const Product = {
  encode(message: Product, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    writer.uint32(18).string(message.name);
    writer.uint32(26).string(message.description);
    writer.uint32(34).string(message.manufacturerId);
    writer.uint32(42).string(message.taricCode);
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
    writer.uint32(82).string(message.gtin);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Product {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProduct } as Product;
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
};

export const Identifier = {
  encode(message: Identifier, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Identifier {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIdentifier } as Identifier;
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
};

export const ProductList = {
  encode(message: ProductList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      MainProduct.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(16).uint32(message.totalCount);
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ProductList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProductList } as ProductList;
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
        case 4:
          message.apiKey = ApiKey.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const Variant = {
  encode(message: Variant, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    writer.uint32(18).string(message.name);
    writer.uint32(26).string(message.description);
    writer.uint32(32).int32(message.stockLevel);
    writer.uint32(41).double(message.price);
    writer.uint32(48).bool(message.sale);
    writer.uint32(57).double(message.salePrice);
    for (const v of message.image) {
      Image.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    writer.uint32(74).string(message.stockKeepingUnit);
    for (const v of message.attributes) {
      VariantAttribute.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Variant {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVariant } as Variant;
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
          message.attributes.push(VariantAttribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const VariantAttribute = {
  encode(message: VariantAttribute, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.key);
    for (const v of message.values) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): VariantAttribute {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVariantAttribute } as VariantAttribute;
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
};

export const Bundle = {
  encode(message: Bundle, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    writer.uint32(26).string(message.name);
    writer.uint32(34).string(message.description);
    for (const v of message.image) {
      Image.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.product) {
      BundleProduct.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    writer.uint32(57).double(message.price);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Bundle {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBundle } as Bundle;
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
};

export const BundleProduct = {
  encode(message: BundleProduct, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.productId);
    writer.uint32(16).uint32(message.quantity);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): BundleProduct {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBundleProduct } as BundleProduct;
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
};

export const Deleted = {
  encode(message: Deleted, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Deleted {
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
};
