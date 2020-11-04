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

export interface MetaI {
  readonly meta: 'object' | 'array' | 'map' | 'union' | 'builtin';
}

export interface MetaO extends MetaI {
  readonly meta: 'object';
  readonly type: string;
  readonly name: string;
}

export interface MetaA extends MetaI {
  readonly meta: 'array';
  readonly type: MetaI | string;
}

export interface MetaM extends MetaI {
  readonly meta: 'map';
  readonly key: string;
  readonly value: MetaI | string;
}

export interface MetaU extends MetaI {
  readonly meta: 'union';
  readonly choices: Array<MetaI | string | undefined>;
}

export interface MetaS<T, R> {
  readonly request: MetaO;
  readonly response: MetaO;
  readonly clientStreaming: boolean;
  readonly serverStreaming: boolean;
  readonly encodeRequest?: (message: T, writer: Writer) => Writer;
  readonly decodeResponse?: (input: Uint8Array | Reader, length?: number) => R;
}

export interface MetaB extends MetaI {
  readonly meta: 'builtin';
  readonly type: string;
  readonly original: string;
}

export const protobufPackage = 'io.restorecommerce.product'

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
  fromJSON(object: any): MainProduct {
    const message = { ...baseMainProduct } as MainProduct;
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
    message.product !== undefined && (obj.product = message.product ? Product.toJSON(message.product) : undefined);
    message.bundle !== undefined && (obj.bundle = message.bundle ? Bundle.toJSON(message.bundle) : undefined);
    message.active !== undefined && (obj.active = message.active);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    return obj;
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
  fromJSON(object: any): Product {
    const message = { ...baseProduct } as Product;
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
    message.description !== undefined && (obj.description = message.description);
    message.manufacturerId !== undefined && (obj.manufacturerId = message.manufacturerId);
    message.taricCode !== undefined && (obj.taricCode = message.taricCode);
    message.prototype !== undefined && (obj.prototype = message.prototype ? Identifier.toJSON(message.prototype) : undefined);
    message.category !== undefined && (obj.category = message.category ? Identifier.toJSON(message.category) : undefined);
    if (message.taxTypeId) {
      obj.taxTypeId = message.taxTypeId.map(e => e);
    } else {
      obj.taxTypeId = [];
    }
    if (message.variants) {
      obj.variants = message.variants.map(e => e ? Variant.toJSON(e) : undefined);
    } else {
      obj.variants = [];
    }
    message.gtin !== undefined && (obj.gtin = message.gtin);
    return obj;
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
  fromJSON(object: any): Identifier {
    const message = { ...baseIdentifier } as Identifier;
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
  fromJSON(object: any): ProductList {
    const message = { ...baseProductList } as ProductList;
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
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromJSON(object.apiKey);
    } else {
      message.apiKey = undefined;
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
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromPartial(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  toJSON(message: ProductList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map(e => e ? MainProduct.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    message.apiKey !== undefined && (obj.apiKey = message.apiKey ? ApiKey.toJSON(message.apiKey) : undefined);
    return obj;
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
  fromJSON(object: any): Variant {
    const message = { ...baseVariant } as Variant;
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
    if (object.stockKeepingUnit !== undefined && object.stockKeepingUnit !== null) {
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
    if (object.stockKeepingUnit !== undefined && object.stockKeepingUnit !== null) {
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
    message.description !== undefined && (obj.description = message.description);
    message.stockLevel !== undefined && (obj.stockLevel = message.stockLevel);
    message.price !== undefined && (obj.price = message.price);
    message.sale !== undefined && (obj.sale = message.sale);
    message.salePrice !== undefined && (obj.salePrice = message.salePrice);
    if (message.image) {
      obj.image = message.image.map(e => e ? Image.toJSON(e) : undefined);
    } else {
      obj.image = [];
    }
    message.stockKeepingUnit !== undefined && (obj.stockKeepingUnit = message.stockKeepingUnit);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? VariantAttribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
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
  fromJSON(object: any): VariantAttribute {
    const message = { ...baseVariantAttribute } as VariantAttribute;
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
      obj.values = message.values.map(e => e);
    } else {
      obj.values = [];
    }
    return obj;
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
  fromJSON(object: any): Bundle {
    const message = { ...baseBundle } as Bundle;
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
    message.description !== undefined && (obj.description = message.description);
    if (message.image) {
      obj.image = message.image.map(e => e ? Image.toJSON(e) : undefined);
    } else {
      obj.image = [];
    }
    if (message.product) {
      obj.product = message.product.map(e => e ? BundleProduct.toJSON(e) : undefined);
    } else {
      obj.product = [];
    }
    message.price !== undefined && (obj.price = message.price);
    return obj;
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
  fromJSON(object: any): BundleProduct {
    const message = { ...baseBundleProduct } as BundleProduct;
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
  fromJSON(object: any): Deleted {
    const message = { ...baseDeleted } as Deleted;
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

export const metaMainProduct: { [key in keyof Required<MainProduct>]: MetaI | string } = {
  id: {meta:'builtin', type:'string', original:'string'} as MetaB,
  product: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.product.Product', name:'Product'} as MetaO]} as MetaU,
  bundle: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.product.Bundle', name:'Bundle'} as MetaO]} as MetaU,
  active: {meta:'builtin', type:'boolean', original:'bool'} as MetaB,
  meta: {meta:'object', type:'.io.restorecommerce.meta.Meta', name:'Meta'} as MetaO,
}
export const metaProduct: { [key in keyof Required<Product>]: MetaI | string } = {
  id: {meta:'builtin', type:'string', original:'string'} as MetaB,
  name: {meta:'builtin', type:'string', original:'string'} as MetaB,
  description: {meta:'builtin', type:'string', original:'string'} as MetaB,
  manufacturerId: {meta:'builtin', type:'string', original:'string'} as MetaB,
  taricCode: {meta:'builtin', type:'string', original:'string'} as MetaB,
  prototype: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.product.Identifier', name:'Identifier'} as MetaO]} as MetaU,
  category: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.product.Identifier', name:'Identifier'} as MetaO]} as MetaU,
  taxTypeId: {meta:'array', type:{meta:'builtin', type:'string', original:'string'} as MetaB} as MetaA,
  variants: {meta:'array', type:{meta:'object', type:'.io.restorecommerce.product.Variant', name:'Variant'} as MetaO} as MetaA,
  gtin: {meta:'builtin', type:'string', original:'string'} as MetaB,
}
export const metaIdentifier: { [key in keyof Required<Identifier>]: MetaI | string } = {
  id: {meta:'builtin', type:'string', original:'string'} as MetaB,
}
export const metaProductList: { [key in keyof Required<ProductList>]: MetaI | string } = {
  items: {meta:'array', type:{meta:'object', type:'.io.restorecommerce.product.MainProduct', name:'MainProduct'} as MetaO} as MetaA,
  totalCount: {meta:'builtin', type:'number', original:'uint32'} as MetaB,
  subject: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.Subject', name:'Subject'} as MetaO]} as MetaU,
  apiKey: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.ApiKey', name:'ApiKey'} as MetaO]} as MetaU,
}
export const metaVariant: { [key in keyof Required<Variant>]: MetaI | string } = {
  id: {meta:'builtin', type:'string', original:'string'} as MetaB,
  name: {meta:'builtin', type:'string', original:'string'} as MetaB,
  description: {meta:'builtin', type:'string', original:'string'} as MetaB,
  stockLevel: {meta:'builtin', type:'number', original:'int32'} as MetaB,
  price: {meta:'builtin', type:'number', original:'double'} as MetaB,
  sale: {meta:'builtin', type:'boolean', original:'bool'} as MetaB,
  salePrice: {meta:'builtin', type:'number', original:'double'} as MetaB,
  image: {meta:'array', type:{meta:'object', type:'.io.restorecommerce.image.Image', name:'Image'} as MetaO} as MetaA,
  stockKeepingUnit: {meta:'builtin', type:'string', original:'string'} as MetaB,
  attributes: {meta:'array', type:{meta:'object', type:'.io.restorecommerce.product.VariantAttribute', name:'VariantAttribute'} as MetaO} as MetaA,
}
export const metaVariantAttribute: { [key in keyof Required<VariantAttribute>]: MetaI | string } = {
  key: {meta:'builtin', type:'string', original:'string'} as MetaB,
  values: {meta:'array', type:{meta:'builtin', type:'string', original:'string'} as MetaB} as MetaA,
}
export const metaBundle: { [key in keyof Required<Bundle>]: MetaI | string } = {
  id: {meta:'builtin', type:'string', original:'string'} as MetaB,
  name: {meta:'builtin', type:'string', original:'string'} as MetaB,
  description: {meta:'builtin', type:'string', original:'string'} as MetaB,
  image: {meta:'array', type:{meta:'object', type:'.io.restorecommerce.image.Image', name:'Image'} as MetaO} as MetaA,
  product: {meta:'array', type:{meta:'object', type:'.io.restorecommerce.product.BundleProduct', name:'BundleProduct'} as MetaO} as MetaA,
  price: {meta:'builtin', type:'number', original:'double'} as MetaB,
}
export const metaBundleProduct: { [key in keyof Required<BundleProduct>]: MetaI | string } = {
  productId: {meta:'builtin', type:'string', original:'string'} as MetaB,
  quantity: {meta:'builtin', type:'number', original:'uint32'} as MetaB,
}
export const metaDeleted: { [key in keyof Required<Deleted>]: MetaI | string } = {
  id: {meta:'builtin', type:'string', original:'string'} as MetaB,
}
export const metaService: { [key in keyof Service]: MetaS<any, any> } = {
  Read: {request: {meta:'object', type:'.io.restorecommerce.resourcebase.ReadRequest', name:'ReadRequest'} as MetaO, response: {meta:'object', type:'.io.restorecommerce.product.ProductList', name:'ProductList'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: ReadRequest.encode, decodeResponse: ProductList.decode} as MetaS<ReadRequest, ProductList>,
  Create: {request: {meta:'object', type:'.io.restorecommerce.product.ProductList', name:'ProductList'} as MetaO, response: {meta:'object', type:'.io.restorecommerce.product.ProductList', name:'ProductList'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: ProductList.encode, decodeResponse: ProductList.decode} as MetaS<ProductList, ProductList>,
  Delete: {request: {meta:'object', type:'.io.restorecommerce.resourcebase.DeleteRequest', name:'DeleteRequest'} as MetaO, response: {meta:'object', type:'.google.protobuf.Empty', name:'Empty'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: DeleteRequest.encode, decodeResponse: Empty.decode} as MetaS<DeleteRequest, Empty>,
  Update: {request: {meta:'object', type:'.io.restorecommerce.product.ProductList', name:'ProductList'} as MetaO, response: {meta:'object', type:'.io.restorecommerce.product.ProductList', name:'ProductList'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: ProductList.encode, decodeResponse: ProductList.decode} as MetaS<ProductList, ProductList>,
  Upsert: {request: {meta:'object', type:'.io.restorecommerce.product.ProductList', name:'ProductList'} as MetaO, response: {meta:'object', type:'.io.restorecommerce.product.ProductList', name:'ProductList'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: ProductList.encode, decodeResponse: ProductList.decode} as MetaS<ProductList, ProductList>,
}
export const metaPackageIoRestorecommerceProduct: { [key: string]: ['service', string, any, { [key: string]: MetaS<any, any> }] | ['enum', string, any, any] | ['message', string, any, { [key: string]: MetaI | string }] } = {
  MainProduct: ['message', '.io.restorecommerce.product.MainProduct', MainProduct, metaMainProduct],
  Product: ['message', '.io.restorecommerce.product.Product', Product, metaProduct],
  Identifier: ['message', '.io.restorecommerce.product.Identifier', Identifier, metaIdentifier],
  ProductList: ['message', '.io.restorecommerce.product.ProductList', ProductList, metaProductList],
  Variant: ['message', '.io.restorecommerce.product.Variant', Variant, metaVariant],
  VariantAttribute: ['message', '.io.restorecommerce.product.VariantAttribute', VariantAttribute, metaVariantAttribute],
  Bundle: ['message', '.io.restorecommerce.product.Bundle', Bundle, metaBundle],
  BundleProduct: ['message', '.io.restorecommerce.product.BundleProduct', BundleProduct, metaBundleProduct],
  Deleted: ['message', '.io.restorecommerce.product.Deleted', Deleted, metaDeleted],
  Service: ['service', '.io.restorecommerce.product.Service', undefined, metaService],
}
type Builtin = Date | Function | Uint8Array | string | number | undefined;
type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;