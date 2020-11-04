/* eslint-disable */
import { Meta } from '../../io/restorecommerce/meta';
import { Subject, ApiKey } from '../../io/restorecommerce/auth';
import { ReadRequest, DeleteRequest } from '../../io/restorecommerce/resource_base';
import { Empty } from '../../google/protobuf/empty';
import { Writer, Reader } from 'protobufjs/minimal';


/**
 *  ProductPrototype resource
 */
export interface ProductPrototype {
  id: string;
  meta?: Meta;
  name: string;
  version: string;
  description: string;
  categoryId: string;
}

export interface ProductPrototypeList {
  items: ProductPrototype[];
  totalCount: number;
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
}

export interface Deleted {
  id: string;
}

const baseProductPrototype: object = {
  id: "",
  name: "",
  version: "",
  description: "",
  categoryId: "",
};

const baseProductPrototypeList: object = {
  totalCount: 0,
};

const baseDeleted: object = {
  id: "",
};

export interface Service {

  Read(request: ReadRequest): Promise<ProductPrototypeList>;

  Create(request: ProductPrototypeList): Promise<ProductPrototypeList>;

  Delete(request: DeleteRequest): Promise<Empty>;

  Update(request: ProductPrototypeList): Promise<ProductPrototypeList>;

  Upsert(request: ProductPrototypeList): Promise<ProductPrototypeList>;

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

export const protobufPackage = 'io.restorecommerce.product_prototype'

export const ProductPrototype = {
  encode(message: ProductPrototype, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    if (message.meta !== undefined && message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.name);
    writer.uint32(34).string(message.version);
    writer.uint32(42).string(message.description);
    writer.uint32(50).string(message.categoryId);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ProductPrototype {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProductPrototype } as ProductPrototype;
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
          message.version = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          message.categoryId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ProductPrototype {
    const message = { ...baseProductPrototype } as ProductPrototype;
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
    if (object.version !== undefined && object.version !== null) {
      message.version = String(object.version);
    } else {
      message.version = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.categoryId !== undefined && object.categoryId !== null) {
      message.categoryId = String(object.categoryId);
    } else {
      message.categoryId = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<ProductPrototype>): ProductPrototype {
    const message = { ...baseProductPrototype } as ProductPrototype;
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
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    } else {
      message.version = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.categoryId !== undefined && object.categoryId !== null) {
      message.categoryId = object.categoryId;
    } else {
      message.categoryId = "";
    }
    return message;
  },
  toJSON(message: ProductPrototype): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.version !== undefined && (obj.version = message.version);
    message.description !== undefined && (obj.description = message.description);
    message.categoryId !== undefined && (obj.categoryId = message.categoryId);
    return obj;
  },
};

export const ProductPrototypeList = {
  encode(message: ProductPrototypeList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      ProductPrototype.encode(v!, writer.uint32(10).fork()).ldelim();
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
  decode(input: Uint8Array | Reader, length?: number): ProductPrototypeList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProductPrototypeList } as ProductPrototypeList;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(ProductPrototype.decode(reader, reader.uint32()));
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
  fromJSON(object: any): ProductPrototypeList {
    const message = { ...baseProductPrototypeList } as ProductPrototypeList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(ProductPrototype.fromJSON(e));
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
  fromPartial(object: DeepPartial<ProductPrototypeList>): ProductPrototypeList {
    const message = { ...baseProductPrototypeList } as ProductPrototypeList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(ProductPrototype.fromPartial(e));
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
  toJSON(message: ProductPrototypeList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map(e => e ? ProductPrototype.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    message.apiKey !== undefined && (obj.apiKey = message.apiKey ? ApiKey.toJSON(message.apiKey) : undefined);
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

export const metaProductPrototype: { [key in keyof Required<ProductPrototype>]: MetaI | string } = {
  id: {meta:'builtin', type:'string', original:'string'} as MetaB,
  meta: {meta:'object', type:'.io.restorecommerce.meta.Meta', name:'Meta'} as MetaO,
  name: {meta:'builtin', type:'string', original:'string'} as MetaB,
  version: {meta:'builtin', type:'string', original:'string'} as MetaB,
  description: {meta:'builtin', type:'string', original:'string'} as MetaB,
  categoryId: {meta:'builtin', type:'string', original:'string'} as MetaB,
}
export const metaProductPrototypeList: { [key in keyof Required<ProductPrototypeList>]: MetaI | string } = {
  items: {meta:'array', type:{meta:'object', type:'.io.restorecommerce.product_prototype.ProductPrototype', name:'ProductPrototype'} as MetaO} as MetaA,
  totalCount: {meta:'builtin', type:'number', original:'uint32'} as MetaB,
  subject: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.Subject', name:'Subject'} as MetaO]} as MetaU,
  apiKey: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.ApiKey', name:'ApiKey'} as MetaO]} as MetaU,
}
export const metaDeleted: { [key in keyof Required<Deleted>]: MetaI | string } = {
  id: {meta:'builtin', type:'string', original:'string'} as MetaB,
}
export const metaService: { [key in keyof Service]: MetaS<any, any> } = {
  Read: {request: {meta:'object', type:'.io.restorecommerce.resourcebase.ReadRequest', name:'ReadRequest'} as MetaO, response: {meta:'object', type:'.io.restorecommerce.product_prototype.ProductPrototypeList', name:'ProductPrototypeList'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: ReadRequest.encode, decodeResponse: ProductPrototypeList.decode} as MetaS<ReadRequest, ProductPrototypeList>,
  Create: {request: {meta:'object', type:'.io.restorecommerce.product_prototype.ProductPrototypeList', name:'ProductPrototypeList'} as MetaO, response: {meta:'object', type:'.io.restorecommerce.product_prototype.ProductPrototypeList', name:'ProductPrototypeList'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: ProductPrototypeList.encode, decodeResponse: ProductPrototypeList.decode} as MetaS<ProductPrototypeList, ProductPrototypeList>,
  Delete: {request: {meta:'object', type:'.io.restorecommerce.resourcebase.DeleteRequest', name:'DeleteRequest'} as MetaO, response: {meta:'object', type:'.google.protobuf.Empty', name:'Empty'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: DeleteRequest.encode, decodeResponse: Empty.decode} as MetaS<DeleteRequest, Empty>,
  Update: {request: {meta:'object', type:'.io.restorecommerce.product_prototype.ProductPrototypeList', name:'ProductPrototypeList'} as MetaO, response: {meta:'object', type:'.io.restorecommerce.product_prototype.ProductPrototypeList', name:'ProductPrototypeList'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: ProductPrototypeList.encode, decodeResponse: ProductPrototypeList.decode} as MetaS<ProductPrototypeList, ProductPrototypeList>,
  Upsert: {request: {meta:'object', type:'.io.restorecommerce.product_prototype.ProductPrototypeList', name:'ProductPrototypeList'} as MetaO, response: {meta:'object', type:'.io.restorecommerce.product_prototype.ProductPrototypeList', name:'ProductPrototypeList'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: ProductPrototypeList.encode, decodeResponse: ProductPrototypeList.decode} as MetaS<ProductPrototypeList, ProductPrototypeList>,
}
export const metaPackageIoRestorecommerceProduct_prototype: { [key: string]: ['service', string, any, { [key: string]: MetaS<any, any> }] | ['enum', string, any, any] | ['message', string, any, { [key: string]: MetaI | string }] } = {
  ProductPrototype: ['message', '.io.restorecommerce.product_prototype.ProductPrototype', ProductPrototype, metaProductPrototype],
  ProductPrototypeList: ['message', '.io.restorecommerce.product_prototype.ProductPrototypeList', ProductPrototypeList, metaProductPrototypeList],
  Deleted: ['message', '.io.restorecommerce.product_prototype.Deleted', Deleted, metaDeleted],
  Service: ['service', '.io.restorecommerce.product_prototype.Service', undefined, metaService],
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