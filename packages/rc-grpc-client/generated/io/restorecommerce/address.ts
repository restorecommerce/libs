/* eslint-disable */
import { Subject, ApiKey } from '../../io/restorecommerce/auth';
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
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
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

export const AddressList = {
  encode(message: AddressList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      Address.encode(v!, writer.uint32(10).fork()).ldelim();
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
};
