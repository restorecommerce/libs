/* eslint-disable */
import { Subject } from '../../io/restorecommerce/auth';
import { Meta } from '../../io/restorecommerce/meta';
import { ReadRequest, DeleteRequest } from '../../io/restorecommerce/resource_base';
import { Empty } from '../../google/protobuf/empty';
import { Writer, Reader } from 'protobufjs/minimal';


export interface Deleted {
  id: string;
}

export interface AddressList {
  items: Address[];
  totalCount: number;
  subject?: Subject;
}

export interface Address {
  id: string;
  meta?: Meta;
  postcode: string;
  countryId: string;
  locality: string;
  street: string;
  region: string;
  geoCoordinates?: Address_GeoPoint;
  altitude: number;
  buildingNumber: string;
  addressAddition?: AddressAddition;
}

export interface Address_GeoPoint {
  latitude: number;
  longitude: number;
}

export interface AddressAddition {
  field1: string;
  field2: string;
}

const baseDeleted: object = {
  id: "",
};

const baseAddressList: object = {
  totalCount: 0,
};

const baseAddress: object = {
  id: "",
  postcode: "",
  countryId: "",
  locality: "",
  street: "",
  region: "",
  altitude: 0,
  buildingNumber: "",
};

const baseAddress_GeoPoint: object = {
  latitude: 0,
  longitude: 0,
};

const baseAddressAddition: object = {
  field1: "",
  field2: "",
};

/**
 *
 *  Microservice definition.
 */
export interface Service {

  Read(request: ReadRequest): Promise<AddressList>;

  Create(request: AddressList): Promise<AddressList>;

  Delete(request: DeleteRequest): Promise<Empty>;

  Update(request: AddressList): Promise<AddressList>;

  Upsert(request: AddressList): Promise<AddressList>;

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

export const protobufPackage = 'io.restorecommerce.address'

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

export const AddressList = {
  encode(message: AddressList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      Address.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(16).uint32(message.totalCount);
    if (message.subject !== undefined && message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): AddressList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddressList } as AddressList;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Address.decode(reader, reader.uint32()));
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
  fromJSON(object: any): AddressList {
    const message = { ...baseAddressList } as AddressList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Address.fromJSON(e));
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
  fromPartial(object: DeepPartial<AddressList>): AddressList {
    const message = { ...baseAddressList } as AddressList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Address.fromPartial(e));
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
  toJSON(message: AddressList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map(e => e ? Address.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },
};

export const Address = {
  encode(message: Address, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    if (message.meta !== undefined && message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.postcode);
    writer.uint32(34).string(message.countryId);
    writer.uint32(42).string(message.locality);
    writer.uint32(50).string(message.street);
    writer.uint32(58).string(message.region);
    if (message.geoCoordinates !== undefined && message.geoCoordinates !== undefined) {
      Address_GeoPoint.encode(message.geoCoordinates, writer.uint32(66).fork()).ldelim();
    }
    writer.uint32(73).double(message.altitude);
    writer.uint32(82).string(message.buildingNumber);
    if (message.addressAddition !== undefined && message.addressAddition !== undefined) {
      AddressAddition.encode(message.addressAddition, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Address {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddress } as Address;
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
          message.postcode = reader.string();
          break;
        case 4:
          message.countryId = reader.string();
          break;
        case 5:
          message.locality = reader.string();
          break;
        case 6:
          message.street = reader.string();
          break;
        case 7:
          message.region = reader.string();
          break;
        case 8:
          message.geoCoordinates = Address_GeoPoint.decode(reader, reader.uint32());
          break;
        case 9:
          message.altitude = reader.double();
          break;
        case 10:
          message.buildingNumber = reader.string();
          break;
        case 11:
          message.addressAddition = AddressAddition.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Address {
    const message = { ...baseAddress } as Address;
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
    if (object.postcode !== undefined && object.postcode !== null) {
      message.postcode = String(object.postcode);
    } else {
      message.postcode = "";
    }
    if (object.countryId !== undefined && object.countryId !== null) {
      message.countryId = String(object.countryId);
    } else {
      message.countryId = "";
    }
    if (object.locality !== undefined && object.locality !== null) {
      message.locality = String(object.locality);
    } else {
      message.locality = "";
    }
    if (object.street !== undefined && object.street !== null) {
      message.street = String(object.street);
    } else {
      message.street = "";
    }
    if (object.region !== undefined && object.region !== null) {
      message.region = String(object.region);
    } else {
      message.region = "";
    }
    if (object.geoCoordinates !== undefined && object.geoCoordinates !== null) {
      message.geoCoordinates = Address_GeoPoint.fromJSON(object.geoCoordinates);
    } else {
      message.geoCoordinates = undefined;
    }
    if (object.altitude !== undefined && object.altitude !== null) {
      message.altitude = Number(object.altitude);
    } else {
      message.altitude = 0;
    }
    if (object.buildingNumber !== undefined && object.buildingNumber !== null) {
      message.buildingNumber = String(object.buildingNumber);
    } else {
      message.buildingNumber = "";
    }
    if (object.addressAddition !== undefined && object.addressAddition !== null) {
      message.addressAddition = AddressAddition.fromJSON(object.addressAddition);
    } else {
      message.addressAddition = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<Address>): Address {
    const message = { ...baseAddress } as Address;
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
    if (object.postcode !== undefined && object.postcode !== null) {
      message.postcode = object.postcode;
    } else {
      message.postcode = "";
    }
    if (object.countryId !== undefined && object.countryId !== null) {
      message.countryId = object.countryId;
    } else {
      message.countryId = "";
    }
    if (object.locality !== undefined && object.locality !== null) {
      message.locality = object.locality;
    } else {
      message.locality = "";
    }
    if (object.street !== undefined && object.street !== null) {
      message.street = object.street;
    } else {
      message.street = "";
    }
    if (object.region !== undefined && object.region !== null) {
      message.region = object.region;
    } else {
      message.region = "";
    }
    if (object.geoCoordinates !== undefined && object.geoCoordinates !== null) {
      message.geoCoordinates = Address_GeoPoint.fromPartial(object.geoCoordinates);
    } else {
      message.geoCoordinates = undefined;
    }
    if (object.altitude !== undefined && object.altitude !== null) {
      message.altitude = object.altitude;
    } else {
      message.altitude = 0;
    }
    if (object.buildingNumber !== undefined && object.buildingNumber !== null) {
      message.buildingNumber = object.buildingNumber;
    } else {
      message.buildingNumber = "";
    }
    if (object.addressAddition !== undefined && object.addressAddition !== null) {
      message.addressAddition = AddressAddition.fromPartial(object.addressAddition);
    } else {
      message.addressAddition = undefined;
    }
    return message;
  },
  toJSON(message: Address): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.postcode !== undefined && (obj.postcode = message.postcode);
    message.countryId !== undefined && (obj.countryId = message.countryId);
    message.locality !== undefined && (obj.locality = message.locality);
    message.street !== undefined && (obj.street = message.street);
    message.region !== undefined && (obj.region = message.region);
    message.geoCoordinates !== undefined && (obj.geoCoordinates = message.geoCoordinates ? Address_GeoPoint.toJSON(message.geoCoordinates) : undefined);
    message.altitude !== undefined && (obj.altitude = message.altitude);
    message.buildingNumber !== undefined && (obj.buildingNumber = message.buildingNumber);
    message.addressAddition !== undefined && (obj.addressAddition = message.addressAddition ? AddressAddition.toJSON(message.addressAddition) : undefined);
    return obj;
  },
};

export const Address_GeoPoint = {
  encode(message: Address_GeoPoint, writer: Writer = Writer.create()): Writer {
    writer.uint32(9).double(message.latitude);
    writer.uint32(17).double(message.longitude);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Address_GeoPoint {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddress_GeoPoint } as Address_GeoPoint;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.latitude = reader.double();
          break;
        case 2:
          message.longitude = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Address_GeoPoint {
    const message = { ...baseAddress_GeoPoint } as Address_GeoPoint;
    if (object.latitude !== undefined && object.latitude !== null) {
      message.latitude = Number(object.latitude);
    } else {
      message.latitude = 0;
    }
    if (object.longitude !== undefined && object.longitude !== null) {
      message.longitude = Number(object.longitude);
    } else {
      message.longitude = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<Address_GeoPoint>): Address_GeoPoint {
    const message = { ...baseAddress_GeoPoint } as Address_GeoPoint;
    if (object.latitude !== undefined && object.latitude !== null) {
      message.latitude = object.latitude;
    } else {
      message.latitude = 0;
    }
    if (object.longitude !== undefined && object.longitude !== null) {
      message.longitude = object.longitude;
    } else {
      message.longitude = 0;
    }
    return message;
  },
  toJSON(message: Address_GeoPoint): unknown {
    const obj: any = {};
    message.latitude !== undefined && (obj.latitude = message.latitude);
    message.longitude !== undefined && (obj.longitude = message.longitude);
    return obj;
  },
};

export const AddressAddition = {
  encode(message: AddressAddition, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.field1);
    writer.uint32(18).string(message.field2);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): AddressAddition {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddressAddition } as AddressAddition;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.field1 = reader.string();
          break;
        case 2:
          message.field2 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AddressAddition {
    const message = { ...baseAddressAddition } as AddressAddition;
    if (object.field1 !== undefined && object.field1 !== null) {
      message.field1 = String(object.field1);
    } else {
      message.field1 = "";
    }
    if (object.field2 !== undefined && object.field2 !== null) {
      message.field2 = String(object.field2);
    } else {
      message.field2 = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<AddressAddition>): AddressAddition {
    const message = { ...baseAddressAddition } as AddressAddition;
    if (object.field1 !== undefined && object.field1 !== null) {
      message.field1 = object.field1;
    } else {
      message.field1 = "";
    }
    if (object.field2 !== undefined && object.field2 !== null) {
      message.field2 = object.field2;
    } else {
      message.field2 = "";
    }
    return message;
  },
  toJSON(message: AddressAddition): unknown {
    const obj: any = {};
    message.field1 !== undefined && (obj.field1 = message.field1);
    message.field2 !== undefined && (obj.field2 = message.field2);
    return obj;
  },
};

export const metaDeleted: { [key in keyof Required<Deleted>]: MetaI | string } = {
  id: {meta:'builtin', type:'string', original:'string'} as MetaB,
}
export const metaAddressList: { [key in keyof Required<AddressList>]: MetaI | string } = {
  items: {meta:'array', type:{meta:'object', type:'.io.restorecommerce.address.Address', name:'Address'} as MetaO} as MetaA,
  totalCount: {meta:'builtin', type:'number', original:'uint32'} as MetaB,
  subject: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.Subject', name:'Subject'} as MetaO]} as MetaU,
  apiKey: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.ApiKey', name:'ApiKey'} as MetaO]} as MetaU,
}
export const metaAddress: { [key in keyof Required<Address>]: MetaI | string } = {
  id: {meta:'builtin', type:'string', original:'string'} as MetaB,
  meta: {meta:'object', type:'.io.restorecommerce.meta.Meta', name:'Meta'} as MetaO,
  postcode: {meta:'builtin', type:'string', original:'string'} as MetaB,
  countryId: {meta:'builtin', type:'string', original:'string'} as MetaB,
  locality: {meta:'builtin', type:'string', original:'string'} as MetaB,
  street: {meta:'builtin', type:'string', original:'string'} as MetaB,
  region: {meta:'builtin', type:'string', original:'string'} as MetaB,
  geoCoordinates: {meta:'object', type:'.io.restorecommerce.address.Address.GeoPoint', name:'Address_GeoPoint'} as MetaO,
  altitude: {meta:'builtin', type:'number', original:'double'} as MetaB,
  buildingNumber: {meta:'builtin', type:'string', original:'string'} as MetaB,
  addressAddition: {meta:'object', type:'.io.restorecommerce.address.AddressAddition', name:'AddressAddition'} as MetaO,
}
export const metaAddress_GeoPoint: { [key in keyof Required<Address_GeoPoint>]: MetaI | string } = {
  latitude: {meta:'builtin', type:'number', original:'double'} as MetaB,
  longitude: {meta:'builtin', type:'number', original:'double'} as MetaB,
}
export const metaAddressAddition: { [key in keyof Required<AddressAddition>]: MetaI | string } = {
  field1: {meta:'builtin', type:'string', original:'string'} as MetaB,
  field2: {meta:'builtin', type:'string', original:'string'} as MetaB,
}
export const metaService: { [key in keyof Service]: MetaS<any, any> } = {
  Read: {request: {meta:'object', type:'.io.restorecommerce.resourcebase.ReadRequest', name:'ReadRequest'} as MetaO, response: {meta:'object', type:'.io.restorecommerce.address.AddressList', name:'AddressList'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: ReadRequest.encode, decodeResponse: AddressList.decode} as MetaS<ReadRequest, AddressList>,
  Create: {request: {meta:'object', type:'.io.restorecommerce.address.AddressList', name:'AddressList'} as MetaO, response: {meta:'object', type:'.io.restorecommerce.address.AddressList', name:'AddressList'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: AddressList.encode, decodeResponse: AddressList.decode} as MetaS<AddressList, AddressList>,
  Delete: {request: {meta:'object', type:'.io.restorecommerce.resourcebase.DeleteRequest', name:'DeleteRequest'} as MetaO, response: {meta:'object', type:'.google.protobuf.Empty', name:'Empty'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: DeleteRequest.encode, decodeResponse: Empty.decode} as MetaS<DeleteRequest, Empty>,
  Update: {request: {meta:'object', type:'.io.restorecommerce.address.AddressList', name:'AddressList'} as MetaO, response: {meta:'object', type:'.io.restorecommerce.address.AddressList', name:'AddressList'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: AddressList.encode, decodeResponse: AddressList.decode} as MetaS<AddressList, AddressList>,
  Upsert: {request: {meta:'object', type:'.io.restorecommerce.address.AddressList', name:'AddressList'} as MetaO, response: {meta:'object', type:'.io.restorecommerce.address.AddressList', name:'AddressList'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: AddressList.encode, decodeResponse: AddressList.decode} as MetaS<AddressList, AddressList>,
}
export const metaPackageIoRestorecommerceAddress: { [key: string]: ['service', string, any, { [key: string]: MetaS<any, any> }] | ['enum', string, any, any] | ['message', string, any, { [key: string]: MetaI | string }] } = {
  Deleted: ['message', '.io.restorecommerce.address.Deleted', Deleted, metaDeleted],
  AddressList: ['message', '.io.restorecommerce.address.AddressList', AddressList, metaAddressList],
  Address: ['message', '.io.restorecommerce.address.Address', Address, metaAddress],
  Address_GeoPoint: ['message', '.io.restorecommerce.address.Address.GeoPoint', Address_GeoPoint, metaAddress_GeoPoint],
  AddressAddition: ['message', '.io.restorecommerce.address.AddressAddition', AddressAddition, metaAddressAddition],
  Service: ['service', '.io.restorecommerce.address.Service', undefined, metaService],
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