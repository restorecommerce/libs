/* eslint-disable */
import { Subject } from '../../io/restorecommerce/auth';
import { Meta } from '../../io/restorecommerce/meta';
import { ReadRequest, DeleteRequest } from '../../io/restorecommerce/resource_base';
import { Empty } from '../../google/protobuf/empty';
import { Writer, Reader } from 'protobufjs/minimal';


export interface Deleted {
  id: string;
}

export interface TaxTypeList {
  items: TaxType[];
  totalCount: number;
  subject?: Subject;
}

export interface TaxType {
  id: string;
  meta?: Meta;
  type: string;
  description: string;
}

const baseDeleted: object = {
  id: "",
};

const baseTaxTypeList: object = {
  totalCount: 0,
};

const baseTaxType: object = {
  id: "",
  type: "",
  description: "",
};

/**
 *
 *  Microservice definition.
 */
export interface Service {

  Read(request: ReadRequest): Promise<TaxTypeList>;

  Create(request: TaxTypeList): Promise<TaxTypeList>;

  Delete(request: DeleteRequest): Promise<Empty>;

  Update(request: TaxTypeList): Promise<TaxTypeList>;

  Upsert(request: TaxTypeList): Promise<TaxTypeList>;

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

export const protobufPackage = 'io.restorecommerce.tax_type'

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

export const TaxTypeList = {
  encode(message: TaxTypeList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      TaxType.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(16).uint32(message.totalCount);
    if (message.subject !== undefined && message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): TaxTypeList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTaxTypeList } as TaxTypeList;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(TaxType.decode(reader, reader.uint32()));
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
  fromJSON(object: any): TaxTypeList {
    const message = { ...baseTaxTypeList } as TaxTypeList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(TaxType.fromJSON(e));
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
  fromPartial(object: DeepPartial<TaxTypeList>): TaxTypeList {
    const message = { ...baseTaxTypeList } as TaxTypeList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(TaxType.fromPartial(e));
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
  toJSON(message: TaxTypeList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map(e => e ? TaxType.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },
};

export const TaxType = {
  encode(message: TaxType, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    if (message.meta !== undefined && message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.type);
    writer.uint32(34).string(message.description);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): TaxType {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTaxType } as TaxType;
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
          message.type = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TaxType {
    const message = { ...baseTaxType } as TaxType;
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
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<TaxType>): TaxType {
    const message = { ...baseTaxType } as TaxType;
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
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    return message;
  },
  toJSON(message: TaxType): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.type !== undefined && (obj.type = message.type);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },
};

export const metaDeleted: { [key in keyof Required<Deleted>]: MetaBase | string } = {
  id: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
}
export const metaTaxTypeList: { [key in keyof Required<TaxTypeList>]: MetaBase | string } = {
  items: {kind:'array', type:{kind:'object', type:'.io.restorecommerce.tax_type.TaxType', name:'TaxType'} as MetaMessage} as MetaArray,
  totalCount: {kind:'builtin', type:'number', original:'uint32'} as MetaPrimitive,
  subject: {kind:'object', type:'.io.restorecommerce.auth.Subject', name:'Subject'} as MetaMessage,
}
export const metaTaxType: { [key in keyof Required<TaxType>]: MetaBase | string } = {
  id: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  meta: {kind:'object', type:'.io.restorecommerce.meta.Meta', name:'Meta'} as MetaMessage,
  type: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  description: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
}
export const metaService: { [key in keyof Service]: MetaService<any, any> } = {
  Read: {request: {kind:'object', type:'.io.restorecommerce.resourcebase.ReadRequest', name:'ReadRequest'} as MetaMessage, response: {kind:'object', type:'.io.restorecommerce.tax_type.TaxTypeList', name:'TaxTypeList'} as MetaMessage, clientStreaming: false, serverStreaming: false, encodeRequest: ReadRequest.encode, decodeResponse: TaxTypeList.decode} as MetaService<ReadRequest, TaxTypeList>,
  Create: {request: {kind:'object', type:'.io.restorecommerce.tax_type.TaxTypeList', name:'TaxTypeList'} as MetaMessage, response: {kind:'object', type:'.io.restorecommerce.tax_type.TaxTypeList', name:'TaxTypeList'} as MetaMessage, clientStreaming: false, serverStreaming: false, encodeRequest: TaxTypeList.encode, decodeResponse: TaxTypeList.decode} as MetaService<TaxTypeList, TaxTypeList>,
  Delete: {request: {kind:'object', type:'.io.restorecommerce.resourcebase.DeleteRequest', name:'DeleteRequest'} as MetaMessage, response: {kind:'object', type:'.google.protobuf.Empty', name:'Empty'} as MetaMessage, clientStreaming: false, serverStreaming: false, encodeRequest: DeleteRequest.encode, decodeResponse: Empty.decode} as MetaService<DeleteRequest, Empty>,
  Update: {request: {kind:'object', type:'.io.restorecommerce.tax_type.TaxTypeList', name:'TaxTypeList'} as MetaMessage, response: {kind:'object', type:'.io.restorecommerce.tax_type.TaxTypeList', name:'TaxTypeList'} as MetaMessage, clientStreaming: false, serverStreaming: false, encodeRequest: TaxTypeList.encode, decodeResponse: TaxTypeList.decode} as MetaService<TaxTypeList, TaxTypeList>,
  Upsert: {request: {kind:'object', type:'.io.restorecommerce.tax_type.TaxTypeList', name:'TaxTypeList'} as MetaMessage, response: {kind:'object', type:'.io.restorecommerce.tax_type.TaxTypeList', name:'TaxTypeList'} as MetaMessage, clientStreaming: false, serverStreaming: false, encodeRequest: TaxTypeList.encode, decodeResponse: TaxTypeList.decode} as MetaService<TaxTypeList, TaxTypeList>,
}
export const metadata: { [key: string]: ['service', string, any, { [key: string]: MetaService<any, any> }] | ['enum', string, any, any] | ['message', string, any, { [key: string]: MetaBase | string }] } = {
  Deleted: ['message', '.io.restorecommerce.tax_type.Deleted', Deleted, metaDeleted],
  TaxTypeList: ['message', '.io.restorecommerce.tax_type.TaxTypeList', TaxTypeList, metaTaxTypeList],
  TaxType: ['message', '.io.restorecommerce.tax_type.TaxType', TaxType, metaTaxType],
  Service: ['service', '.io.restorecommerce.tax_type.Service', undefined, metaService],
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