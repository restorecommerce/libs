/* eslint-disable */
import { Subject } from '../../io/restorecommerce/auth';
import { Meta } from '../../io/restorecommerce/meta';
import { Any } from '../../google/protobuf/any';
import { ReadRequest, DeleteRequest } from '../../io/restorecommerce/resource_base';
import { Empty } from '../../google/protobuf/empty';
import { Writer, Reader } from 'protobufjs/minimal';


export interface Deleted {
  id: string;
}

export interface LocationList {
  items: Location[];
  totalCount: number;
  subject?: Subject;
}

export interface Location {
  /**
   *  Location ID, unique, key
   */
  id: string;
  meta?: Meta;
  /**
   *  Location name
   */
  name: string;
  description: string;
  /**
   *  Organization to which this location is linked
   */
  organizationId: string;
  /**
   *   Location which may contain this location; may be null
   */
  parentId: string;
  /**
   *  Locations contained in this location
   */
  childrenIds: string[];
  addressId: string;
  /**
   * / additional data
   */
  data?: Any;
}

const baseDeleted: object = {
  id: "",
};

const baseLocationList: object = {
  totalCount: 0,
};

const baseLocation: object = {
  id: "",
  name: "",
  description: "",
  organizationId: "",
  parentId: "",
  childrenIds: "",
  addressId: "",
};

/**
 *
 *  Microservice definition.
 */
export interface Service {

  Read(request: ReadRequest): Promise<LocationList>;

  Create(request: LocationList): Promise<LocationList>;

  Delete(request: DeleteRequest): Promise<Empty>;

  Update(request: LocationList): Promise<LocationList>;

  Upsert(request: LocationList): Promise<LocationList>;

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

export const protobufPackage = 'io.restorecommerce.location'

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

export const LocationList = {
  encode(message: LocationList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      Location.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(16).uint32(message.totalCount);
    if (message.subject !== undefined && message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): LocationList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLocationList } as LocationList;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Location.decode(reader, reader.uint32()));
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
  fromJSON(object: any): LocationList {
    const message = { ...baseLocationList } as LocationList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Location.fromJSON(e));
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
  fromPartial(object: DeepPartial<LocationList>): LocationList {
    const message = { ...baseLocationList } as LocationList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Location.fromPartial(e));
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
  toJSON(message: LocationList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map(e => e ? Location.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },
};

export const Location = {
  encode(message: Location, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    if (message.meta !== undefined && message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.name);
    writer.uint32(34).string(message.description);
    writer.uint32(42).string(message.organizationId);
    writer.uint32(50).string(message.parentId);
    for (const v of message.childrenIds) {
      writer.uint32(58).string(v!);
    }
    writer.uint32(66).string(message.addressId);
    if (message.data !== undefined && message.data !== undefined) {
      Any.encode(message.data, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Location {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLocation } as Location;
    message.childrenIds = [];
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
          message.organizationId = reader.string();
          break;
        case 6:
          message.parentId = reader.string();
          break;
        case 7:
          message.childrenIds.push(reader.string());
          break;
        case 8:
          message.addressId = reader.string();
          break;
        case 9:
          message.data = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Location {
    const message = { ...baseLocation } as Location;
    message.childrenIds = [];
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
    if (object.organizationId !== undefined && object.organizationId !== null) {
      message.organizationId = String(object.organizationId);
    } else {
      message.organizationId = "";
    }
    if (object.parentId !== undefined && object.parentId !== null) {
      message.parentId = String(object.parentId);
    } else {
      message.parentId = "";
    }
    if (object.childrenIds !== undefined && object.childrenIds !== null) {
      for (const e of object.childrenIds) {
        message.childrenIds.push(String(e));
      }
    }
    if (object.addressId !== undefined && object.addressId !== null) {
      message.addressId = String(object.addressId);
    } else {
      message.addressId = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromJSON(object.data);
    } else {
      message.data = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<Location>): Location {
    const message = { ...baseLocation } as Location;
    message.childrenIds = [];
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
    if (object.organizationId !== undefined && object.organizationId !== null) {
      message.organizationId = object.organizationId;
    } else {
      message.organizationId = "";
    }
    if (object.parentId !== undefined && object.parentId !== null) {
      message.parentId = object.parentId;
    } else {
      message.parentId = "";
    }
    if (object.childrenIds !== undefined && object.childrenIds !== null) {
      for (const e of object.childrenIds) {
        message.childrenIds.push(e);
      }
    }
    if (object.addressId !== undefined && object.addressId !== null) {
      message.addressId = object.addressId;
    } else {
      message.addressId = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromPartial(object.data);
    } else {
      message.data = undefined;
    }
    return message;
  },
  toJSON(message: Location): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.organizationId !== undefined && (obj.organizationId = message.organizationId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    if (message.childrenIds) {
      obj.childrenIds = message.childrenIds.map(e => e);
    } else {
      obj.childrenIds = [];
    }
    message.addressId !== undefined && (obj.addressId = message.addressId);
    message.data !== undefined && (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    return obj;
  },
};

export const metaDeleted: { [key in keyof Required<Deleted>]: MetaBase | string } = {
  id: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
}
export const metaLocationList: { [key in keyof Required<LocationList>]: MetaBase | string } = {
  items: {kind:'array', type:{kind:'object', type:'.io.restorecommerce.location.Location', name:'Location'} as MetaMessage} as MetaArray,
  totalCount: {kind:'builtin', type:'number', original:'uint32'} as MetaPrimitive,
  subject: {kind:'object', type:'.io.restorecommerce.auth.Subject', name:'Subject'} as MetaMessage,
}
export const metaLocation: { [key in keyof Required<Location>]: MetaBase | string } = {
  id: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  meta: {kind:'object', type:'.io.restorecommerce.meta.Meta', name:'Meta'} as MetaMessage,
  name: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  description: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  organizationId: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  parentId: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  childrenIds: {kind:'array', type:{kind:'builtin', type:'string', original:'string'} as MetaPrimitive} as MetaArray,
  addressId: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  data: {kind:'object', type:'.google.protobuf.Any', name:'Any'} as MetaMessage,
}
export const metaService: { [key in keyof Service]: MetaService<any, any> } = {
  Read: {request: {kind:'object', type:'.io.restorecommerce.resourcebase.ReadRequest', name:'ReadRequest'} as MetaMessage, response: {kind:'object', type:'.io.restorecommerce.location.LocationList', name:'LocationList'} as MetaMessage, clientStreaming: false, serverStreaming: false, encodeRequest: ReadRequest.encode, decodeResponse: LocationList.decode} as MetaService<ReadRequest, LocationList>,
  Create: {request: {kind:'object', type:'.io.restorecommerce.location.LocationList', name:'LocationList'} as MetaMessage, response: {kind:'object', type:'.io.restorecommerce.location.LocationList', name:'LocationList'} as MetaMessage, clientStreaming: false, serverStreaming: false, encodeRequest: LocationList.encode, decodeResponse: LocationList.decode} as MetaService<LocationList, LocationList>,
  Delete: {request: {kind:'object', type:'.io.restorecommerce.resourcebase.DeleteRequest', name:'DeleteRequest'} as MetaMessage, response: {kind:'object', type:'.google.protobuf.Empty', name:'Empty'} as MetaMessage, clientStreaming: false, serverStreaming: false, encodeRequest: DeleteRequest.encode, decodeResponse: Empty.decode} as MetaService<DeleteRequest, Empty>,
  Update: {request: {kind:'object', type:'.io.restorecommerce.location.LocationList', name:'LocationList'} as MetaMessage, response: {kind:'object', type:'.io.restorecommerce.location.LocationList', name:'LocationList'} as MetaMessage, clientStreaming: false, serverStreaming: false, encodeRequest: LocationList.encode, decodeResponse: LocationList.decode} as MetaService<LocationList, LocationList>,
  Upsert: {request: {kind:'object', type:'.io.restorecommerce.location.LocationList', name:'LocationList'} as MetaMessage, response: {kind:'object', type:'.io.restorecommerce.location.LocationList', name:'LocationList'} as MetaMessage, clientStreaming: false, serverStreaming: false, encodeRequest: LocationList.encode, decodeResponse: LocationList.decode} as MetaService<LocationList, LocationList>,
}
export const metadata: { [key: string]: ['service', string, any, { [key: string]: MetaService<any, any> }] | ['enum', string, any, any] | ['message', string, any, { [key: string]: MetaBase | string }] } = {
  Deleted: ['message', '.io.restorecommerce.location.Deleted', Deleted, metaDeleted],
  LocationList: ['message', '.io.restorecommerce.location.LocationList', LocationList, metaLocationList],
  Location: ['message', '.io.restorecommerce.location.Location', Location, metaLocation],
  Service: ['service', '.io.restorecommerce.location.Service', undefined, metaService],
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