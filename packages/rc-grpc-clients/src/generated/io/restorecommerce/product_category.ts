/* eslint-disable */
import { Meta } from '../../io/restorecommerce/meta';
import { Image } from '../../io/restorecommerce/image';
import { Subject } from '../../io/restorecommerce/auth';
import { ReadRequest, DeleteRequest } from '../../io/restorecommerce/resource_base';
import { Empty } from '../../google/protobuf/empty';
import { Writer, Reader } from 'protobufjs/minimal';


/**
 *  ProductCategory resource
 */
export interface ProductCategory {
  id: string;
  meta?: Meta;
  name: string;
  description: string;
  priceGroupId: string;
  image?: Image;
  parent?: Parent;
}

export interface ProductCategoryList {
  items: ProductCategory[];
  totalCount: number;
  subject?: Subject;
}

export interface Deleted {
  id: string;
}

export interface Parent {
  parentId: string;
}

const baseProductCategory: object = {
  id: "",
  name: "",
  description: "",
  priceGroupId: "",
};

const baseProductCategoryList: object = {
  totalCount: 0,
};

const baseDeleted: object = {
  id: "",
};

const baseParent: object = {
  parentId: "",
};

export interface Service {

  Read(request: ReadRequest): Promise<ProductCategoryList>;

  Create(request: ProductCategoryList): Promise<ProductCategoryList>;

  Delete(request: DeleteRequest): Promise<Empty>;

  Update(request: ProductCategoryList): Promise<ProductCategoryList>;

  Upsert(request: ProductCategoryList): Promise<ProductCategoryList>;

}

export const protobufPackage = 'io.restorecommerce.product_category'

export const ProductCategory = {
  encode(message: ProductCategory, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    if (message.meta !== undefined && message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.name);
    writer.uint32(34).string(message.description);
    writer.uint32(42).string(message.priceGroupId);
    if (message.image !== undefined && message.image !== undefined) {
      Image.encode(message.image, writer.uint32(50).fork()).ldelim();
    }
    if (message.parent !== undefined && message.parent !== undefined) {
      Parent.encode(message.parent, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ProductCategory {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProductCategory } as ProductCategory;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.meta = Meta.decode(reader, reader.uint32());
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.priceGroupId = reader.string();
          break;
        case 6:
          message.image = Image.decode(reader, reader.uint32());
          break;
        case 7:
          message.parent = Parent.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ProductCategory {
    const message = { ...baseProductCategory } as ProductCategory;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromJSON(object.meta);
    } else {
      message.meta = undefined;
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
    if (object.priceGroupId !== undefined && object.priceGroupId !== null) {
      message.priceGroupId = String(object.priceGroupId);
    } else {
      message.priceGroupId = "";
    }
    if (object.image !== undefined && object.image !== null) {
      message.image = Image.fromJSON(object.image);
    } else {
      message.image = undefined;
    }
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = Parent.fromJSON(object.parent);
    } else {
      message.parent = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<ProductCategory>): ProductCategory {
    const message = { ...baseProductCategory } as ProductCategory;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromPartial(object.meta);
    } else {
      message.meta = undefined;
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
    if (object.priceGroupId !== undefined && object.priceGroupId !== null) {
      message.priceGroupId = object.priceGroupId;
    } else {
      message.priceGroupId = "";
    }
    if (object.image !== undefined && object.image !== null) {
      message.image = Image.fromPartial(object.image);
    } else {
      message.image = undefined;
    }
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = Parent.fromPartial(object.parent);
    } else {
      message.parent = undefined;
    }
    return message;
  },
  toJSON(message: ProductCategory): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.priceGroupId !== undefined && (obj.priceGroupId = message.priceGroupId);
    message.image !== undefined && (obj.image = message.image ? Image.toJSON(message.image) : undefined);
    message.parent !== undefined && (obj.parent = message.parent ? Parent.toJSON(message.parent) : undefined);
    return obj;
  },
};

export const ProductCategoryList = {
  encode(message: ProductCategoryList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      ProductCategory.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(16).uint32(message.totalCount);
    if (message.subject !== undefined && message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ProductCategoryList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProductCategoryList } as ProductCategoryList;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(ProductCategory.decode(reader, reader.uint32()));
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
  fromJSON(object: any): ProductCategoryList {
    const message = { ...baseProductCategoryList } as ProductCategoryList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(ProductCategory.fromJSON(e));
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
  fromPartial(object: DeepPartial<ProductCategoryList>): ProductCategoryList {
    const message = { ...baseProductCategoryList } as ProductCategoryList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(ProductCategory.fromPartial(e));
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
  toJSON(message: ProductCategoryList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map(e => e ? ProductCategory.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
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

export const Parent = {
  encode(message: Parent, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.parentId);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Parent {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParent } as Parent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parentId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Parent {
    const message = { ...baseParent } as Parent;
    if (object.parentId !== undefined && object.parentId !== null) {
      message.parentId = String(object.parentId);
    } else {
      message.parentId = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Parent>): Parent {
    const message = { ...baseParent } as Parent;
    if (object.parentId !== undefined && object.parentId !== null) {
      message.parentId = object.parentId;
    } else {
      message.parentId = "";
    }
    return message;
  },
  toJSON(message: Parent): unknown {
    const obj: any = {};
    message.parentId !== undefined && (obj.parentId = message.parentId);
    return obj;
  },
};

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