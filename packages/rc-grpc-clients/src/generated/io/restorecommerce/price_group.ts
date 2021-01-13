/* eslint-disable */
import { Meta } from '../../io/restorecommerce/meta';
import { Subject } from '../../io/restorecommerce/auth';
import { ReadRequest, DeleteRequest } from '../../io/restorecommerce/resource_base';
import { Empty } from '../../google/protobuf/empty';
import { Writer, Reader } from 'protobufjs/minimal';


/**
 *  PriceGroup resource
 */
export interface PriceGroup {
  id: string;
  meta?: Meta;
  name: string;
  description: string;
}

export interface PriceGroupList {
  items: PriceGroup[];
  totalCount: number;
  subject?: Subject;
}

export interface Deleted {
  id: string;
}

const basePriceGroup: object = {
  id: "",
  name: "",
  description: "",
};

const basePriceGroupList: object = {
  totalCount: 0,
};

const baseDeleted: object = {
  id: "",
};

export interface Service {

  Read(request: ReadRequest): Promise<PriceGroupList>;

  Create(request: PriceGroupList): Promise<PriceGroupList>;

  Delete(request: DeleteRequest): Promise<Empty>;

  Update(request: PriceGroupList): Promise<PriceGroupList>;

  Upsert(request: PriceGroupList): Promise<PriceGroupList>;

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

export const protobufPackage = 'io.restorecommerce.price_group'

export const PriceGroup = {
  encode(message: PriceGroup, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    if (message.meta !== undefined && message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.name);
    writer.uint32(34).string(message.description);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PriceGroup {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePriceGroup } as PriceGroup;
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PriceGroup {
    const message = { ...basePriceGroup } as PriceGroup;
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
    return message;
  },
  fromPartial(object: DeepPartial<PriceGroup>): PriceGroup {
    const message = { ...basePriceGroup } as PriceGroup;
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
    return message;
  },
  toJSON(message: PriceGroup): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },
};

export const PriceGroupList = {
  encode(message: PriceGroupList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      PriceGroup.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(16).uint32(message.totalCount);
    if (message.subject !== undefined && message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PriceGroupList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePriceGroupList } as PriceGroupList;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(PriceGroup.decode(reader, reader.uint32()));
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
  fromJSON(object: any): PriceGroupList {
    const message = { ...basePriceGroupList } as PriceGroupList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(PriceGroup.fromJSON(e));
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
  fromPartial(object: DeepPartial<PriceGroupList>): PriceGroupList {
    const message = { ...basePriceGroupList } as PriceGroupList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(PriceGroup.fromPartial(e));
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
  toJSON(message: PriceGroupList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map(e => e ? PriceGroup.toJSON(e) : undefined);
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

export const metaPriceGroup: { [key in keyof Required<PriceGroup>]: MetaBase | string } = {
  id: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  meta: {kind:'object', type:'.io.restorecommerce.meta.Meta', name:'Meta'} as MetaMessage,
  name: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  description: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
}
export const metaPriceGroupList: { [key in keyof Required<PriceGroupList>]: MetaBase | string } = {
  items: {kind:'array', type:{kind:'object', type:'.io.restorecommerce.price_group.PriceGroup', name:'PriceGroup'} as MetaMessage} as MetaArray,
  totalCount: {kind:'builtin', type:'number', original:'uint32'} as MetaPrimitive,
  subject: {kind:'object', type:'.io.restorecommerce.auth.Subject', name:'Subject'} as MetaMessage,
}
export const metaDeleted: { [key in keyof Required<Deleted>]: MetaBase | string } = {
  id: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
}
export const metaService: { [key in keyof Service]: MetaService<any, any> } = {
  Read: {request: {kind:'object', type:'.io.restorecommerce.resourcebase.ReadRequest', name:'ReadRequest'} as MetaMessage, response: {kind:'object', type:'.io.restorecommerce.price_group.PriceGroupList', name:'PriceGroupList'} as MetaMessage, clientStreaming: false, serverStreaming: false, encodeRequest: ReadRequest.encode, decodeResponse: PriceGroupList.decode} as MetaService<ReadRequest, PriceGroupList>,
  Create: {request: {kind:'object', type:'.io.restorecommerce.price_group.PriceGroupList', name:'PriceGroupList'} as MetaMessage, response: {kind:'object', type:'.io.restorecommerce.price_group.PriceGroupList', name:'PriceGroupList'} as MetaMessage, clientStreaming: false, serverStreaming: false, encodeRequest: PriceGroupList.encode, decodeResponse: PriceGroupList.decode} as MetaService<PriceGroupList, PriceGroupList>,
  Delete: {request: {kind:'object', type:'.io.restorecommerce.resourcebase.DeleteRequest', name:'DeleteRequest'} as MetaMessage, response: {kind:'object', type:'.google.protobuf.Empty', name:'Empty'} as MetaMessage, clientStreaming: false, serverStreaming: false, encodeRequest: DeleteRequest.encode, decodeResponse: Empty.decode} as MetaService<DeleteRequest, Empty>,
  Update: {request: {kind:'object', type:'.io.restorecommerce.price_group.PriceGroupList', name:'PriceGroupList'} as MetaMessage, response: {kind:'object', type:'.io.restorecommerce.price_group.PriceGroupList', name:'PriceGroupList'} as MetaMessage, clientStreaming: false, serverStreaming: false, encodeRequest: PriceGroupList.encode, decodeResponse: PriceGroupList.decode} as MetaService<PriceGroupList, PriceGroupList>,
  Upsert: {request: {kind:'object', type:'.io.restorecommerce.price_group.PriceGroupList', name:'PriceGroupList'} as MetaMessage, response: {kind:'object', type:'.io.restorecommerce.price_group.PriceGroupList', name:'PriceGroupList'} as MetaMessage, clientStreaming: false, serverStreaming: false, encodeRequest: PriceGroupList.encode, decodeResponse: PriceGroupList.decode} as MetaService<PriceGroupList, PriceGroupList>,
}
export const metadata: { [key: string]: ['service', string, any, { [key: string]: MetaService<any, any> }] | ['enum', string, any, any] | ['message', string, any, { [key: string]: MetaBase | string }] } = {
  PriceGroup: ['message', '.io.restorecommerce.price_group.PriceGroup', PriceGroup, metaPriceGroup],
  PriceGroupList: ['message', '.io.restorecommerce.price_group.PriceGroupList', PriceGroupList, metaPriceGroupList],
  Deleted: ['message', '.io.restorecommerce.price_group.Deleted', Deleted, metaDeleted],
  Service: ['service', '.io.restorecommerce.price_group.Service', undefined, metaService],
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