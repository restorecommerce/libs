/* eslint-disable */
import * as Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { Any, protoMetadata as protoMetadata1 } from "../../google/protobuf/any";
import { Attribute, protoMetadata as protoMetadata8 } from "./attribute";
import { protoMetadata as protoMetadata6, Subject } from "./auth";
import { File, protoMetadata as protoMetadata5 } from "./file";
import { BoundingBox3D, protoMetadata as protoMetadata9 } from "./geometry";
import { Image, protoMetadata as protoMetadata4 } from "./image";
import { protoMetadata as protoMetadata11 } from "./manufacturer";
import { Meta, protoMetadata as protoMetadata3 } from "./meta";
import { KafkaSubscription, protoMetadata as protoMetadata10, Resolver } from "./options";
import { DeleteRequest, DeleteResponse, protoMetadata as protoMetadata2, ReadRequest } from "./resource_base";
import { OperationStatus, protoMetadata as protoMetadata7, Status } from "./status";

export const protobufPackage = "io.restorecommerce.product";

export enum AssociationType {
  Miscellaneous = "Miscellaneous",
  Accessory = "Accessory",
  Recommendation = "Recommendation",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function associationTypeFromJSON(object: any): AssociationType {
  switch (object) {
    case 0:
    case "Miscellaneous":
      return AssociationType.Miscellaneous;
    case 1:
    case "Accessory":
      return AssociationType.Accessory;
    case 2:
    case "Recommendation":
      return AssociationType.Recommendation;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AssociationType.UNRECOGNIZED;
  }
}

export function associationTypeToJSON(object: AssociationType): string {
  switch (object) {
    case AssociationType.Miscellaneous:
      return "Miscellaneous";
    case AssociationType.Accessory:
      return "Accessory";
    case AssociationType.Recommendation:
      return "Recommendation";
    case AssociationType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function associationTypeToNumber(object: AssociationType): number {
  switch (object) {
    case AssociationType.Miscellaneous:
      return 0;
    case AssociationType.Accessory:
      return 1;
    case AssociationType.Recommendation:
      return 2;
    case AssociationType.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface Association {
  product_id?: string | undefined;
  type: AssociationType;
  tags: string[];
  data?: Any;
}

export interface Appendix {
  index?: number | undefined;
  name?: string | undefined;
  description?: string | undefined;
  tags: string[];
  url?: string | undefined;
  content_type?: string | undefined;
  thumbnail?: Image | undefined;
}

/** Product resource entity */
export interface Product {
  id?: string | undefined;
  meta?: Meta;
  product?: IndividualProduct | undefined;
  bundle?: Bundle | undefined;
  active?: boolean | undefined;
  tags: string[];
  associations: Association[];
  data?: Any;
}

export interface IndividualProduct {
  name?: string | undefined;
  description?: string | undefined;
  manufacturer_id?: string | undefined;
  taric_code?: string | undefined;
  prototype_id?: string | undefined;
  category_id?: string | undefined;
  tax_ids: string[];
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

export interface ProductList {
  items: Product[];
  total_count?: number | undefined;
  subject?: Subject | undefined;
}

export interface ProductListResponse {
  items: ProductResponse[];
  total_count: number;
  operation_status?: OperationStatus;
}

export interface ProductResponse {
  payload?: Product;
  status?: Status;
}

export interface Package {
  size_in_cm?: BoundingBox3D | undefined;
  weight_in_kg?: number | undefined;
  rotatable?: boolean | undefined;
}

export interface PhysicalVariant {
  id?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  stock_level?: number | undefined;
  price?: number | undefined;
  sale?: boolean | undefined;
  sale_price?: number | undefined;
  images: Image[];
  files: File[];
  stock_keeping_unit?: string | undefined;
  template_variant?: string | undefined;
  package?: Package | undefined;
  attributes: Attribute[];
}

export interface VirtualVariant {
  id?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  stock_level?: number | undefined;
  price?: number | undefined;
  sale?: boolean | undefined;
  sale_price?: number | undefined;
  images: Image[];
  files: File[];
  stock_keeping_unit?: string | undefined;
  template_variant?: string | undefined;
  attributes: Attribute[];
}

export interface Bundle {
  name?: string | undefined;
  description?: string | undefined;
  images: Image[];
  products: BundleProduct[];
  price?: number | undefined;
  pre_packaged?: Package | undefined;
}

export interface BundleProduct {
  product_id?: string | undefined;
  variant_id?: string | undefined;
  quantity?:
    | number
    | undefined;
  /** Discount in relation to the bundle price */
  tax_ratio?: number | undefined;
}

export interface Deleted {
  id?: string | undefined;
}

function createBaseAssociation(): Association {
  return { product_id: undefined, type: AssociationType.Miscellaneous, tags: [], data: undefined };
}

export const Association = {
  encode(message: Association, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.product_id !== undefined) {
      writer.uint32(10).string(message.product_id);
    }
    if (message.type !== AssociationType.Miscellaneous) {
      writer.uint32(16).int32(associationTypeToNumber(message.type));
    }
    for (const v of message.tags) {
      writer.uint32(26).string(v!);
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Association {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssociation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.product_id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.type = associationTypeFromJSON(reader.int32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.tags.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.data = Any.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Association {
    return {
      product_id: isSet(object.product_id) ? String(object.product_id) : undefined,
      type: isSet(object.type) ? associationTypeFromJSON(object.type) : AssociationType.Miscellaneous,
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [],
      data: isSet(object.data) ? Any.fromJSON(object.data) : undefined,
    };
  },

  toJSON(message: Association): unknown {
    const obj: any = {};
    message.product_id !== undefined && (obj.product_id = message.product_id);
    message.type !== undefined && (obj.type = associationTypeToJSON(message.type));
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    message.data !== undefined && (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    return obj;
  },

  create(base?: DeepPartial<Association>): Association {
    return Association.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Association>): Association {
    const message = createBaseAssociation();
    message.product_id = object.product_id ?? undefined;
    message.type = object.type ?? AssociationType.Miscellaneous;
    message.tags = object.tags?.map((e) => e) || [];
    message.data = (object.data !== undefined && object.data !== null) ? Any.fromPartial(object.data) : undefined;
    return message;
  },
};

function createBaseAppendix(): Appendix {
  return {
    index: undefined,
    name: undefined,
    description: undefined,
    tags: [],
    url: undefined,
    content_type: undefined,
    thumbnail: undefined,
  };
}

export const Appendix = {
  encode(message: Appendix, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== undefined) {
      writer.uint32(8).int64(message.index);
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(26).string(message.description);
    }
    for (const v of message.tags) {
      writer.uint32(34).string(v!);
    }
    if (message.url !== undefined) {
      writer.uint32(42).string(message.url);
    }
    if (message.content_type !== undefined) {
      writer.uint32(50).string(message.content_type);
    }
    if (message.thumbnail !== undefined) {
      Image.encode(message.thumbnail, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Appendix {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppendix();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.index = longToNumber(reader.int64() as Long);
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

          message.tags.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.url = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.content_type = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.thumbnail = Image.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Appendix {
    return {
      index: isSet(object.index) ? Number(object.index) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      description: isSet(object.description) ? String(object.description) : undefined,
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [],
      url: isSet(object.url) ? String(object.url) : undefined,
      content_type: isSet(object.content_type) ? String(object.content_type) : undefined,
      thumbnail: isSet(object.thumbnail) ? Image.fromJSON(object.thumbnail) : undefined,
    };
  },

  toJSON(message: Appendix): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    message.url !== undefined && (obj.url = message.url);
    message.content_type !== undefined && (obj.content_type = message.content_type);
    message.thumbnail !== undefined &&
      (obj.thumbnail = message.thumbnail ? Image.toJSON(message.thumbnail) : undefined);
    return obj;
  },

  create(base?: DeepPartial<Appendix>): Appendix {
    return Appendix.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Appendix>): Appendix {
    const message = createBaseAppendix();
    message.index = object.index ?? undefined;
    message.name = object.name ?? undefined;
    message.description = object.description ?? undefined;
    message.tags = object.tags?.map((e) => e) || [];
    message.url = object.url ?? undefined;
    message.content_type = object.content_type ?? undefined;
    message.thumbnail = (object.thumbnail !== undefined && object.thumbnail !== null)
      ? Image.fromPartial(object.thumbnail)
      : undefined;
    return message;
  },
};

function createBaseProduct(): Product {
  return {
    id: undefined,
    meta: undefined,
    product: undefined,
    bundle: undefined,
    active: undefined,
    tags: [],
    associations: [],
    data: undefined,
  };
}

export const Product = {
  encode(message: Product, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    if (message.product !== undefined) {
      IndividualProduct.encode(message.product, writer.uint32(26).fork()).ldelim();
    }
    if (message.bundle !== undefined) {
      Bundle.encode(message.bundle, writer.uint32(34).fork()).ldelim();
    }
    if (message.active !== undefined) {
      writer.uint32(40).bool(message.active);
    }
    for (const v of message.tags) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.associations) {
      Association.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Product {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProduct();
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

          message.meta = Meta.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.product = IndividualProduct.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.bundle = Bundle.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.active = reader.bool();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.tags.push(reader.string());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.associations.push(Association.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.data = Any.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Product {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      product: isSet(object.product) ? IndividualProduct.fromJSON(object.product) : undefined,
      bundle: isSet(object.bundle) ? Bundle.fromJSON(object.bundle) : undefined,
      active: isSet(object.active) ? Boolean(object.active) : undefined,
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [],
      associations: Array.isArray(object?.associations)
        ? object.associations.map((e: any) => Association.fromJSON(e))
        : [],
      data: isSet(object.data) ? Any.fromJSON(object.data) : undefined,
    };
  },

  toJSON(message: Product): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.product !== undefined &&
      (obj.product = message.product ? IndividualProduct.toJSON(message.product) : undefined);
    message.bundle !== undefined && (obj.bundle = message.bundle ? Bundle.toJSON(message.bundle) : undefined);
    message.active !== undefined && (obj.active = message.active);
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    if (message.associations) {
      obj.associations = message.associations.map((e) => e ? Association.toJSON(e) : undefined);
    } else {
      obj.associations = [];
    }
    message.data !== undefined && (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    return obj;
  },

  create(base?: DeepPartial<Product>): Product {
    return Product.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Product>): Product {
    const message = createBaseProduct();
    message.id = object.id ?? undefined;
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    message.product = (object.product !== undefined && object.product !== null)
      ? IndividualProduct.fromPartial(object.product)
      : undefined;
    message.bundle = (object.bundle !== undefined && object.bundle !== null)
      ? Bundle.fromPartial(object.bundle)
      : undefined;
    message.active = object.active ?? undefined;
    message.tags = object.tags?.map((e) => e) || [];
    message.associations = object.associations?.map((e) => Association.fromPartial(e)) || [];
    message.data = (object.data !== undefined && object.data !== null) ? Any.fromPartial(object.data) : undefined;
    return message;
  },
};

function createBaseIndividualProduct(): IndividualProduct {
  return {
    name: undefined,
    description: undefined,
    manufacturer_id: undefined,
    taric_code: undefined,
    prototype_id: undefined,
    category_id: undefined,
    tax_ids: [],
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
    if (message.manufacturer_id !== undefined) {
      writer.uint32(26).string(message.manufacturer_id);
    }
    if (message.taric_code !== undefined) {
      writer.uint32(34).string(message.taric_code);
    }
    if (message.prototype_id !== undefined) {
      writer.uint32(42).string(message.prototype_id);
    }
    if (message.category_id !== undefined) {
      writer.uint32(50).string(message.category_id);
    }
    for (const v of message.tax_ids) {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndividualProduct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.manufacturer_id = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.taric_code = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.prototype_id = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.category_id = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.tax_ids.push(reader.string());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.gtin = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.physical = PhysicalProduct.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.virtual = VirtualProduct.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IndividualProduct {
    return {
      name: isSet(object.name) ? String(object.name) : undefined,
      description: isSet(object.description) ? String(object.description) : undefined,
      manufacturer_id: isSet(object.manufacturer_id) ? String(object.manufacturer_id) : undefined,
      taric_code: isSet(object.taric_code) ? String(object.taric_code) : undefined,
      prototype_id: isSet(object.prototype_id) ? String(object.prototype_id) : undefined,
      category_id: isSet(object.category_id) ? String(object.category_id) : undefined,
      tax_ids: Array.isArray(object?.tax_ids) ? object.tax_ids.map((e: any) => String(e)) : [],
      gtin: isSet(object.gtin) ? String(object.gtin) : undefined,
      physical: isSet(object.physical) ? PhysicalProduct.fromJSON(object.physical) : undefined,
      virtual: isSet(object.virtual) ? VirtualProduct.fromJSON(object.virtual) : undefined,
    };
  },

  toJSON(message: IndividualProduct): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.manufacturer_id !== undefined && (obj.manufacturer_id = message.manufacturer_id);
    message.taric_code !== undefined && (obj.taric_code = message.taric_code);
    message.prototype_id !== undefined && (obj.prototype_id = message.prototype_id);
    message.category_id !== undefined && (obj.category_id = message.category_id);
    if (message.tax_ids) {
      obj.tax_ids = message.tax_ids.map((e) => e);
    } else {
      obj.tax_ids = [];
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
    message.manufacturer_id = object.manufacturer_id ?? undefined;
    message.taric_code = object.taric_code ?? undefined;
    message.prototype_id = object.prototype_id ?? undefined;
    message.category_id = object.category_id ?? undefined;
    message.tax_ids = object.tax_ids?.map((e) => e) || [];
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePhysicalProduct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.variants.push(PhysicalVariant.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVirtualProduct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.variants.push(VirtualVariant.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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

function createBaseProductList(): ProductList {
  return { items: [], total_count: undefined, subject: undefined };
}

export const ProductList = {
  encode(message: ProductList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      Product.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== undefined) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProductList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProductList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(Product.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.total_count = reader.uint32();
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

  fromJSON(object: any): ProductList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => Product.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : undefined,
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
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ProductList>): ProductList {
    return ProductList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ProductList>): ProductList {
    const message = createBaseProductList();
    message.items = object.items?.map((e) => Product.fromPartial(e)) || [];
    message.total_count = object.total_count ?? undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseProductListResponse(): ProductListResponse {
  return { items: [], total_count: 0, operation_status: undefined };
}

export const ProductListResponse = {
  encode(message: ProductListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      ProductResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(message.operation_status, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProductListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProductListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(ProductResponse.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.total_count = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.operation_status = OperationStatus.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProductListResponse {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => ProductResponse.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      operation_status: isSet(object.operation_status) ? OperationStatus.fromJSON(object.operation_status) : undefined,
    };
  },

  toJSON(message: ProductListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? ProductResponse.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status ? OperationStatus.toJSON(message.operation_status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ProductListResponse>): ProductListResponse {
    return ProductListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ProductListResponse>): ProductListResponse {
    const message = createBaseProductListResponse();
    message.items = object.items?.map((e) => ProductResponse.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.operation_status = (object.operation_status !== undefined && object.operation_status !== null)
      ? OperationStatus.fromPartial(object.operation_status)
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProductResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payload = Product.decode(reader, reader.uint32());
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
  return { size_in_cm: undefined, weight_in_kg: undefined, rotatable: undefined };
}

export const Package = {
  encode(message: Package, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.size_in_cm !== undefined) {
      BoundingBox3D.encode(message.size_in_cm, writer.uint32(10).fork()).ldelim();
    }
    if (message.weight_in_kg !== undefined) {
      writer.uint32(17).double(message.weight_in_kg);
    }
    if (message.rotatable !== undefined) {
      writer.uint32(24).bool(message.rotatable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Package {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePackage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.size_in_cm = BoundingBox3D.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.weight_in_kg = reader.double();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.rotatable = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Package {
    return {
      size_in_cm: isSet(object.size_in_cm) ? BoundingBox3D.fromJSON(object.size_in_cm) : undefined,
      weight_in_kg: isSet(object.weight_in_kg) ? Number(object.weight_in_kg) : undefined,
      rotatable: isSet(object.rotatable) ? Boolean(object.rotatable) : undefined,
    };
  },

  toJSON(message: Package): unknown {
    const obj: any = {};
    message.size_in_cm !== undefined &&
      (obj.size_in_cm = message.size_in_cm ? BoundingBox3D.toJSON(message.size_in_cm) : undefined);
    message.weight_in_kg !== undefined && (obj.weight_in_kg = message.weight_in_kg);
    message.rotatable !== undefined && (obj.rotatable = message.rotatable);
    return obj;
  },

  create(base?: DeepPartial<Package>): Package {
    return Package.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Package>): Package {
    const message = createBasePackage();
    message.size_in_cm = (object.size_in_cm !== undefined && object.size_in_cm !== null)
      ? BoundingBox3D.fromPartial(object.size_in_cm)
      : undefined;
    message.weight_in_kg = object.weight_in_kg ?? undefined;
    message.rotatable = object.rotatable ?? undefined;
    return message;
  },
};

function createBasePhysicalVariant(): PhysicalVariant {
  return {
    id: undefined,
    name: undefined,
    description: undefined,
    stock_level: undefined,
    price: undefined,
    sale: undefined,
    sale_price: undefined,
    images: [],
    files: [],
    stock_keeping_unit: undefined,
    template_variant: undefined,
    package: undefined,
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
    if (message.stock_level !== undefined) {
      writer.uint32(32).int32(message.stock_level);
    }
    if (message.price !== undefined) {
      writer.uint32(41).double(message.price);
    }
    if (message.sale !== undefined) {
      writer.uint32(48).bool(message.sale);
    }
    if (message.sale_price !== undefined) {
      writer.uint32(57).double(message.sale_price);
    }
    for (const v of message.images) {
      Image.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.files) {
      File.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.stock_keeping_unit !== undefined) {
      writer.uint32(82).string(message.stock_keeping_unit);
    }
    if (message.template_variant !== undefined) {
      writer.uint32(90).string(message.template_variant);
    }
    if (message.package !== undefined) {
      Package.encode(message.package, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PhysicalVariant {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePhysicalVariant();
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
          if (tag !== 32) {
            break;
          }

          message.stock_level = reader.int32();
          continue;
        case 5:
          if (tag !== 41) {
            break;
          }

          message.price = reader.double();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.sale = reader.bool();
          continue;
        case 7:
          if (tag !== 57) {
            break;
          }

          message.sale_price = reader.double();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.images.push(Image.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.files.push(File.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.stock_keeping_unit = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.template_variant = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.package = Package.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PhysicalVariant {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      description: isSet(object.description) ? String(object.description) : undefined,
      stock_level: isSet(object.stock_level) ? Number(object.stock_level) : undefined,
      price: isSet(object.price) ? Number(object.price) : undefined,
      sale: isSet(object.sale) ? Boolean(object.sale) : undefined,
      sale_price: isSet(object.sale_price) ? Number(object.sale_price) : undefined,
      images: Array.isArray(object?.images) ? object.images.map((e: any) => Image.fromJSON(e)) : [],
      files: Array.isArray(object?.files) ? object.files.map((e: any) => File.fromJSON(e)) : [],
      stock_keeping_unit: isSet(object.stock_keeping_unit) ? String(object.stock_keeping_unit) : undefined,
      template_variant: isSet(object.template_variant) ? String(object.template_variant) : undefined,
      package: isSet(object.package) ? Package.fromJSON(object.package) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : [],
    };
  },

  toJSON(message: PhysicalVariant): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.stock_level !== undefined && (obj.stock_level = Math.round(message.stock_level));
    message.price !== undefined && (obj.price = message.price);
    message.sale !== undefined && (obj.sale = message.sale);
    message.sale_price !== undefined && (obj.sale_price = message.sale_price);
    if (message.images) {
      obj.images = message.images.map((e) => e ? Image.toJSON(e) : undefined);
    } else {
      obj.images = [];
    }
    if (message.files) {
      obj.files = message.files.map((e) => e ? File.toJSON(e) : undefined);
    } else {
      obj.files = [];
    }
    message.stock_keeping_unit !== undefined && (obj.stock_keeping_unit = message.stock_keeping_unit);
    message.template_variant !== undefined && (obj.template_variant = message.template_variant);
    message.package !== undefined && (obj.package = message.package ? Package.toJSON(message.package) : undefined);
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
    message.stock_level = object.stock_level ?? undefined;
    message.price = object.price ?? undefined;
    message.sale = object.sale ?? undefined;
    message.sale_price = object.sale_price ?? undefined;
    message.images = object.images?.map((e) => Image.fromPartial(e)) || [];
    message.files = object.files?.map((e) => File.fromPartial(e)) || [];
    message.stock_keeping_unit = object.stock_keeping_unit ?? undefined;
    message.template_variant = object.template_variant ?? undefined;
    message.package = (object.package !== undefined && object.package !== null)
      ? Package.fromPartial(object.package)
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
    stock_level: undefined,
    price: undefined,
    sale: undefined,
    sale_price: undefined,
    images: [],
    files: [],
    stock_keeping_unit: undefined,
    template_variant: undefined,
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
    if (message.stock_level !== undefined) {
      writer.uint32(32).int32(message.stock_level);
    }
    if (message.price !== undefined) {
      writer.uint32(41).double(message.price);
    }
    if (message.sale !== undefined) {
      writer.uint32(48).bool(message.sale);
    }
    if (message.sale_price !== undefined) {
      writer.uint32(57).double(message.sale_price);
    }
    for (const v of message.images) {
      Image.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.files) {
      File.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.stock_keeping_unit !== undefined) {
      writer.uint32(82).string(message.stock_keeping_unit);
    }
    if (message.template_variant !== undefined) {
      writer.uint32(90).string(message.template_variant);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VirtualVariant {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVirtualVariant();
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
          if (tag !== 32) {
            break;
          }

          message.stock_level = reader.int32();
          continue;
        case 5:
          if (tag !== 41) {
            break;
          }

          message.price = reader.double();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.sale = reader.bool();
          continue;
        case 7:
          if (tag !== 57) {
            break;
          }

          message.sale_price = reader.double();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.images.push(Image.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.files.push(File.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.stock_keeping_unit = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.template_variant = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VirtualVariant {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      description: isSet(object.description) ? String(object.description) : undefined,
      stock_level: isSet(object.stock_level) ? Number(object.stock_level) : undefined,
      price: isSet(object.price) ? Number(object.price) : undefined,
      sale: isSet(object.sale) ? Boolean(object.sale) : undefined,
      sale_price: isSet(object.sale_price) ? Number(object.sale_price) : undefined,
      images: Array.isArray(object?.images) ? object.images.map((e: any) => Image.fromJSON(e)) : [],
      files: Array.isArray(object?.files) ? object.files.map((e: any) => File.fromJSON(e)) : [],
      stock_keeping_unit: isSet(object.stock_keeping_unit) ? String(object.stock_keeping_unit) : undefined,
      template_variant: isSet(object.template_variant) ? String(object.template_variant) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : [],
    };
  },

  toJSON(message: VirtualVariant): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.stock_level !== undefined && (obj.stock_level = Math.round(message.stock_level));
    message.price !== undefined && (obj.price = message.price);
    message.sale !== undefined && (obj.sale = message.sale);
    message.sale_price !== undefined && (obj.sale_price = message.sale_price);
    if (message.images) {
      obj.images = message.images.map((e) => e ? Image.toJSON(e) : undefined);
    } else {
      obj.images = [];
    }
    if (message.files) {
      obj.files = message.files.map((e) => e ? File.toJSON(e) : undefined);
    } else {
      obj.files = [];
    }
    message.stock_keeping_unit !== undefined && (obj.stock_keeping_unit = message.stock_keeping_unit);
    message.template_variant !== undefined && (obj.template_variant = message.template_variant);
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
    message.stock_level = object.stock_level ?? undefined;
    message.price = object.price ?? undefined;
    message.sale = object.sale ?? undefined;
    message.sale_price = object.sale_price ?? undefined;
    message.images = object.images?.map((e) => Image.fromPartial(e)) || [];
    message.files = object.files?.map((e) => File.fromPartial(e)) || [];
    message.stock_keeping_unit = object.stock_keeping_unit ?? undefined;
    message.template_variant = object.template_variant ?? undefined;
    message.attributes = object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBundle(): Bundle {
  return {
    name: undefined,
    description: undefined,
    images: [],
    products: [],
    price: undefined,
    pre_packaged: undefined,
  };
}

export const Bundle = {
  encode(message: Bundle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.images) {
      Image.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.products) {
      BundleProduct.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.price !== undefined) {
      writer.uint32(41).double(message.price);
    }
    if (message.pre_packaged !== undefined) {
      Package.encode(message.pre_packaged, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Bundle {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBundle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.images.push(Image.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.products.push(BundleProduct.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 41) {
            break;
          }

          message.price = reader.double();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.pre_packaged = Package.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Bundle {
    return {
      name: isSet(object.name) ? String(object.name) : undefined,
      description: isSet(object.description) ? String(object.description) : undefined,
      images: Array.isArray(object?.images) ? object.images.map((e: any) => Image.fromJSON(e)) : [],
      products: Array.isArray(object?.products) ? object.products.map((e: any) => BundleProduct.fromJSON(e)) : [],
      price: isSet(object.price) ? Number(object.price) : undefined,
      pre_packaged: isSet(object.pre_packaged) ? Package.fromJSON(object.pre_packaged) : undefined,
    };
  },

  toJSON(message: Bundle): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    if (message.images) {
      obj.images = message.images.map((e) => e ? Image.toJSON(e) : undefined);
    } else {
      obj.images = [];
    }
    if (message.products) {
      obj.products = message.products.map((e) => e ? BundleProduct.toJSON(e) : undefined);
    } else {
      obj.products = [];
    }
    message.price !== undefined && (obj.price = message.price);
    message.pre_packaged !== undefined &&
      (obj.pre_packaged = message.pre_packaged ? Package.toJSON(message.pre_packaged) : undefined);
    return obj;
  },

  create(base?: DeepPartial<Bundle>): Bundle {
    return Bundle.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Bundle>): Bundle {
    const message = createBaseBundle();
    message.name = object.name ?? undefined;
    message.description = object.description ?? undefined;
    message.images = object.images?.map((e) => Image.fromPartial(e)) || [];
    message.products = object.products?.map((e) => BundleProduct.fromPartial(e)) || [];
    message.price = object.price ?? undefined;
    message.pre_packaged = (object.pre_packaged !== undefined && object.pre_packaged !== null)
      ? Package.fromPartial(object.pre_packaged)
      : undefined;
    return message;
  },
};

function createBaseBundleProduct(): BundleProduct {
  return { product_id: undefined, variant_id: undefined, quantity: undefined, tax_ratio: undefined };
}

export const BundleProduct = {
  encode(message: BundleProduct, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.product_id !== undefined) {
      writer.uint32(10).string(message.product_id);
    }
    if (message.variant_id !== undefined) {
      writer.uint32(18).string(message.variant_id);
    }
    if (message.quantity !== undefined) {
      writer.uint32(24).uint32(message.quantity);
    }
    if (message.tax_ratio !== undefined) {
      writer.uint32(33).double(message.tax_ratio);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BundleProduct {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBundleProduct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.product_id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.variant_id = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.quantity = reader.uint32();
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.tax_ratio = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BundleProduct {
    return {
      product_id: isSet(object.product_id) ? String(object.product_id) : undefined,
      variant_id: isSet(object.variant_id) ? String(object.variant_id) : undefined,
      quantity: isSet(object.quantity) ? Number(object.quantity) : undefined,
      tax_ratio: isSet(object.tax_ratio) ? Number(object.tax_ratio) : undefined,
    };
  },

  toJSON(message: BundleProduct): unknown {
    const obj: any = {};
    message.product_id !== undefined && (obj.product_id = message.product_id);
    message.variant_id !== undefined && (obj.variant_id = message.variant_id);
    message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
    message.tax_ratio !== undefined && (obj.tax_ratio = message.tax_ratio);
    return obj;
  },

  create(base?: DeepPartial<BundleProduct>): BundleProduct {
    return BundleProduct.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<BundleProduct>): BundleProduct {
    const message = createBaseBundleProduct();
    message.product_id = object.product_id ?? undefined;
    message.variant_id = object.variant_id ?? undefined;
    message.quantity = object.quantity ?? undefined;
    message.tax_ratio = object.tax_ratio ?? undefined;
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

export type ProductServiceDefinition = typeof ProductServiceDefinition;
export const ProductServiceDefinition = {
  name: "ProductService",
  fullName: "io.restorecommerce.product.ProductService",
  methods: {
    read: {
      name: "Read",
      requestType: ReadRequest,
      requestStream: false,
      responseType: ProductListResponse,
      responseStream: false,
      options: { _unknownFields: { 248008: [Buffer.from([1])] } },
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

export interface ProductServiceImplementation<CallContextExt = {}> {
  read(request: ReadRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ProductListResponse>>;
  create(request: ProductList, context: CallContext & CallContextExt): Promise<DeepPartial<ProductListResponse>>;
  delete(request: DeleteRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteResponse>>;
  update(request: ProductList, context: CallContext & CallContextExt): Promise<DeepPartial<ProductListResponse>>;
  upsert(request: ProductList, context: CallContext & CallContextExt): Promise<DeepPartial<ProductListResponse>>;
}

export interface ProductServiceClient<CallOptionsExt = {}> {
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
      "google/protobuf/any.proto",
      "io/restorecommerce/resource_base.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/image.proto",
      "io/restorecommerce/file.proto",
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
      "name": "Association",
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
        "name": "type",
        "number": 2,
        "label": 1,
        "type": 14,
        "typeName": ".io.restorecommerce.product.AssociationType",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "type",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "tags",
        "number": 3,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "tags",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "data",
        "number": 4,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.Any",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "data",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_product_id", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "Appendix",
      "field": [{
        "name": "index",
        "number": 1,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "index",
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
        "name": "tags",
        "number": 4,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "tags",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "url",
        "number": 5,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "url",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "content_type",
        "number": 6,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "contentType",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "thumbnail",
        "number": 7,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.image.Image",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 5,
        "jsonName": "thumbnail",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "_index", "options": undefined },
        { "name": "_name", "options": undefined },
        { "name": "_description", "options": undefined },
        { "name": "_url", "options": undefined },
        { "name": "_content_type", "options": undefined },
        { "name": "_thumbnail", "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
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
        "name": "meta",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.meta.Meta",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "meta",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "product",
        "number": 3,
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
        "number": 4,
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
        "number": 5,
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
        "name": "tags",
        "number": 6,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "tags",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "associations",
        "number": 7,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.product.Association",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "associations",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "data",
        "number": 8,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.Any",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "data",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "product_type", "options": undefined }, { "name": "_id", "options": undefined }, {
        "name": "_active",
        "options": undefined,
      }],
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
        "name": "prototype_id",
        "number": 5,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "prototypeId",
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
        "name": "category_id",
        "number": 6,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "categoryId",
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
        "name": "images",
        "number": 8,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.image.Image",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "images",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "files",
        "number": 9,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.file.File",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "files",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "stock_keeping_unit",
        "number": 10,
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
        "number": 11,
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
        "name": "package",
        "number": 12,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.product.Package",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 9,
        "jsonName": "package",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "attributes",
        "number": 13,
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
        { "name": "_package", "options": undefined },
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
        "name": "images",
        "number": 8,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.image.Image",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "images",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "files",
        "number": 9,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.file.File",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "files",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "stock_keeping_unit",
        "number": 10,
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
        "number": 11,
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
        "name": "images",
        "number": 3,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.image.Image",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "images",
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
    "enumType": [{
      "name": "AssociationType",
      "value": [{ "name": "Miscellaneous", "number": 0, "options": undefined }, {
        "name": "Accessory",
        "number": 1,
        "options": undefined,
      }, { "name": "Recommendation", "number": 2, "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "service": [{
      "name": "ProductService",
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
      "options": undefined,
    }],
    "extension": [],
    "options": undefined,
    "sourceCodeInfo": {
      "location": [{
        "path": [3, 10],
        "span": [16, 0, 47],
        "leadingComments": " Used by resolvers\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 2],
        "span": [60, 0, 79, 1],
        "leadingComments": " Product resource entity\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 13, 2, 3],
        "span": [205, 2, 32],
        "leadingComments": "",
        "trailingComments": "Discount in relation to the bundle price\n",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {
    ".io.restorecommerce.product.AssociationType": AssociationType,
    ".io.restorecommerce.product.Association": Association,
    ".io.restorecommerce.product.Appendix": Appendix,
    ".io.restorecommerce.product.Product": Product,
    ".io.restorecommerce.product.IndividualProduct": IndividualProduct,
    ".io.restorecommerce.product.PhysicalProduct": PhysicalProduct,
    ".io.restorecommerce.product.VirtualProduct": VirtualProduct,
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
    protoMetadata10,
    protoMetadata11,
  ],
  options: {
    messages: {
      "Association": {
        fields: {
          "product_id": {
            "resolver": Resolver.decode(
              Buffer.from(
                "CiMuaW8ucmVzdG9yZWNvbW1lcmNlLnByb2R1Y3QuUHJvZHVjdBIHY2F0YWxvZxoHcHJvZHVjdCIEUmVhZCoHcHJvZHVjdA==",
                "base64",
              ),
            ),
          },
        },
      },
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
          "prototype_id": {
            "resolver": Resolver.decode(
              Buffer.from(
                "CjYuaW8ucmVzdG9yZWNvbW1lcmNlLnByb2R1Y3RfcHJvdG90eXBlLlByb2R1Y3RQcm90b3R5cGUSB2NhdGFsb2caEXByb2R1Y3RfcHJvdG90eXBlIgRSZWFkKglwcm90b3R5cGU=",
                "base64",
              ),
            ),
          },
          "category_id": {
            "resolver": Resolver.decode(
              Buffer.from(
                "CjQuaW8ucmVzdG9yZWNvbW1lcmNlLnByb2R1Y3RfY2F0ZWdvcnkuUHJvZHVjdENhdGVnb3J5EgdjYXRhbG9nGhBwcm9kdWN0X2NhdGVnb3J5IgRSZWFkKghjYXRlZ29yeQ==",
                "base64",
              ),
            ),
          },
        },
      },
      "BundleProduct": {
        fields: {
          "product_id": {
            "resolver": Resolver.decode(
              Buffer.from(
                "CiMuaW8ucmVzdG9yZWNvbW1lcmNlLnByb2R1Y3QuUHJvZHVjdBIHY2F0YWxvZxoHcHJvZHVjdCIEUmVhZCoHcHJvZHVjdA==",
                "base64",
              ),
            ),
          },
        },
      },
    },
    services: { "ProductService": { options: undefined, methods: { "Read": { "is_query": true } } } },
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
