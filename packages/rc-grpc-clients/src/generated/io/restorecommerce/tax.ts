/* eslint-disable */
import { Subject } from '../../io/restorecommerce/auth';
import { Meta } from '../../io/restorecommerce/meta';
import { ReadRequest, DeleteRequest } from '../../io/restorecommerce/resource_base';
import { Empty } from '../../google/protobuf/empty';
import { Writer, Reader } from 'protobufjs/minimal';


export interface Deleted {
  id: string;
}

export interface TaxList {
  items: Tax[];
  totalCount: number;
  subject?: Subject;
}

export interface Tax {
  id: string;
  meta?: Meta;
  countryId: string;
  rate: number;
  variant: string;
  typeId: string;
}

const baseDeleted: object = {
  id: "",
};

const baseTaxList: object = {
  totalCount: 0,
};

const baseTax: object = {
  id: "",
  countryId: "",
  rate: 0,
  variant: "",
  typeId: "",
};

/**
 *
 *  Microservice definition.
 */
export interface Service {

  Read(request: ReadRequest): Promise<TaxList>;

  Create(request: TaxList): Promise<TaxList>;

  Delete(request: DeleteRequest): Promise<Empty>;

  Update(request: TaxList): Promise<TaxList>;

  Upsert(request: TaxList): Promise<TaxList>;

}

export interface MetaBase {
  readonly kind: 'object' | 'array' | 'map' | 'union' | 'builtin';
}

export interface MetaMessage extends MetaBase {
  readonly kind: 'object';
  readonly type: string;
  readonly name: string;
}

export interface MetaArray extends MetaBase {
  readonly kind: 'array';
  readonly type: MetaBase | string;
}

export interface MetaMap extends MetaBase {
  readonly kind: 'map';
  readonly key: string;
  readonly value: MetaBase | string;
}

export interface MetaUnion extends MetaBase {
  readonly kind: 'union';
  readonly choices: Array<MetaBase | string | undefined>;
}

export interface MetaService<T, R> {
  readonly request: MetaMessage;
  readonly response: MetaMessage;
  readonly clientStreaming: boolean;
  readonly serverStreaming: boolean;
  readonly encodeRequest?: (message: T, writer: Writer) => Writer;
  readonly decodeResponse?: (input: Uint8Array | Reader, length?: number) => R;
}

export interface MetaPrimitive extends MetaBase {
  readonly kind: 'builtin';
  readonly type: string;
  readonly original: string;
}

export const protobufPackage = 'io.restorecommerce.tax'

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

export const TaxList = {
  encode(message: TaxList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      Tax.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(16).uint32(message.totalCount);
    if (message.subject !== undefined && message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): TaxList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTaxList } as TaxList;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Tax.decode(reader, reader.uint32()));
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
  fromJSON(object: any): TaxList {
    const message = { ...baseTaxList } as TaxList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Tax.fromJSON(e));
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
  fromPartial(object: DeepPartial<TaxList>): TaxList {
    const message = { ...baseTaxList } as TaxList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Tax.fromPartial(e));
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
  toJSON(message: TaxList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map(e => e ? Tax.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },
};

export const Tax = {
  encode(message: Tax, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    if (message.meta !== undefined && message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.countryId);
    writer.uint32(33).double(message.rate);
    writer.uint32(42).string(message.variant);
    writer.uint32(50).string(message.typeId);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Tax {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTax } as Tax;
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
          message.countryId = reader.string();
          break;
        case 4:
          message.rate = reader.double();
          break;
        case 5:
          message.variant = reader.string();
          break;
        case 6:
          message.typeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Tax {
    const message = { ...baseTax } as Tax;
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
    if (object.countryId !== undefined && object.countryId !== null) {
      message.countryId = String(object.countryId);
    } else {
      message.countryId = "";
    }
    if (object.rate !== undefined && object.rate !== null) {
      message.rate = Number(object.rate);
    } else {
      message.rate = 0;
    }
    if (object.variant !== undefined && object.variant !== null) {
      message.variant = String(object.variant);
    } else {
      message.variant = "";
    }
    if (object.typeId !== undefined && object.typeId !== null) {
      message.typeId = String(object.typeId);
    } else {
      message.typeId = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Tax>): Tax {
    const message = { ...baseTax } as Tax;
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
    if (object.countryId !== undefined && object.countryId !== null) {
      message.countryId = object.countryId;
    } else {
      message.countryId = "";
    }
    if (object.rate !== undefined && object.rate !== null) {
      message.rate = object.rate;
    } else {
      message.rate = 0;
    }
    if (object.variant !== undefined && object.variant !== null) {
      message.variant = object.variant;
    } else {
      message.variant = "";
    }
    if (object.typeId !== undefined && object.typeId !== null) {
      message.typeId = object.typeId;
    } else {
      message.typeId = "";
    }
    return message;
  },
  toJSON(message: Tax): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.countryId !== undefined && (obj.countryId = message.countryId);
    message.rate !== undefined && (obj.rate = message.rate);
    message.variant !== undefined && (obj.variant = message.variant);
    message.typeId !== undefined && (obj.typeId = message.typeId);
    return obj;
  },
};

export const metaDeleted: { [key in keyof Required<Deleted>]: MetaBase | string } = {
  id: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
}
export const metaTaxList: { [key in keyof Required<TaxList>]: MetaBase | string } = {
  items: {kind:'array', type:{kind:'object', type:'.io.restorecommerce.tax.Tax', name:'Tax'} as MetaMessage} as MetaArray,
  totalCount: {kind:'builtin', type:'number', original:'uint32'} as MetaPrimitive,
  subject: {kind:'object', type:'.io.restorecommerce.auth.Subject', name:'Subject'} as MetaMessage,
}
export const metaTax: { [key in keyof Required<Tax>]: MetaBase | string } = {
  id: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  meta: {kind:'object', type:'.io.restorecommerce.meta.Meta', name:'Meta'} as MetaMessage,
  countryId: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  rate: {kind:'builtin', type:'number', original:'double'} as MetaPrimitive,
  variant: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  typeId: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
}
export const metaService: { [key in keyof Service]: MetaService<any, any> } = {
  Read: {request: {kind:'object', type:'.io.restorecommerce.resourcebase.ReadRequest', name:'ReadRequest'} as MetaMessage, response: {kind:'object', type:'.io.restorecommerce.tax.TaxList', name:'TaxList'} as MetaMessage, clientStreaming: false, serverStreaming: false, encodeRequest: ReadRequest.encode, decodeResponse: TaxList.decode} as MetaService<ReadRequest, TaxList>,
  Create: {request: {kind:'object', type:'.io.restorecommerce.tax.TaxList', name:'TaxList'} as MetaMessage, response: {kind:'object', type:'.io.restorecommerce.tax.TaxList', name:'TaxList'} as MetaMessage, clientStreaming: false, serverStreaming: false, encodeRequest: TaxList.encode, decodeResponse: TaxList.decode} as MetaService<TaxList, TaxList>,
  Delete: {request: {kind:'object', type:'.io.restorecommerce.resourcebase.DeleteRequest', name:'DeleteRequest'} as MetaMessage, response: {kind:'object', type:'.google.protobuf.Empty', name:'Empty'} as MetaMessage, clientStreaming: false, serverStreaming: false, encodeRequest: DeleteRequest.encode, decodeResponse: Empty.decode} as MetaService<DeleteRequest, Empty>,
  Update: {request: {kind:'object', type:'.io.restorecommerce.tax.TaxList', name:'TaxList'} as MetaMessage, response: {kind:'object', type:'.io.restorecommerce.tax.TaxList', name:'TaxList'} as MetaMessage, clientStreaming: false, serverStreaming: false, encodeRequest: TaxList.encode, decodeResponse: TaxList.decode} as MetaService<TaxList, TaxList>,
  Upsert: {request: {kind:'object', type:'.io.restorecommerce.tax.TaxList', name:'TaxList'} as MetaMessage, response: {kind:'object', type:'.io.restorecommerce.tax.TaxList', name:'TaxList'} as MetaMessage, clientStreaming: false, serverStreaming: false, encodeRequest: TaxList.encode, decodeResponse: TaxList.decode} as MetaService<TaxList, TaxList>,
}
export const metadata: { [key: string]: ['service', string, any, { [key: string]: MetaService<any, any> }] | ['enum', string, any, any] | ['message', string, any, { [key: string]: MetaBase | string }] } = {
  Deleted: ['message', '.io.restorecommerce.tax.Deleted', Deleted, metaDeleted],
  TaxList: ['message', '.io.restorecommerce.tax.TaxList', TaxList, metaTaxList],
  Tax: ['message', '.io.restorecommerce.tax.Tax', Tax, metaTax],
  Service: ['service', '.io.restorecommerce.tax.Service', undefined, metaService],
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