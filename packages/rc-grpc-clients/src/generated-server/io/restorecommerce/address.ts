/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { protoMetadata as protoMetadata3, Subject } from "./auth";
import { protoMetadata as protoMetadata6 } from "./country";
import { Meta, protoMetadata as protoMetadata2 } from "./meta";
import { protoMetadata as protoMetadata5, Resolver } from "./options";
import { DeleteRequest, DeleteResponse, protoMetadata as protoMetadata1, ReadRequest } from "./resource_base";
import { OperationStatus, protoMetadata as protoMetadata4, Status } from "./status";

export const protobufPackage = "io.restorecommerce.address";

export interface Deleted {
  id: string;
}

export interface AddressList {
  items: Address[];
  total_count?: number | undefined;
  subject?: Subject;
}

export interface AddressListResponse {
  items: AddressResponse[];
  total_count: number;
  operation_status?: OperationStatus;
}

export interface AddressResponse {
  payload?: Address;
  status?: Status;
}

export interface GeoPoint {
  latitude?: number | undefined;
  longitude?: number | undefined;
}

export interface AddressAddition {
  field1?: string | undefined;
  field2?: string | undefined;
}

export interface BusinessAddress {
  name?: string | undefined;
}

export interface ResidentialAddress {
  title?: string | undefined;
  given_name?: string | undefined;
  mid_name?: string | undefined;
  family_name?: string | undefined;
}

export interface PackStation {
  provider?: string | undefined;
  station_number?: string | undefined;
  post_number?: string | undefined;
}

export interface Address {
  id?: string | undefined;
  meta?: Meta | undefined;
  postcode?: string | undefined;
  country_id?: string | undefined;
  locality?: string | undefined;
  street?: string | undefined;
  region?: string | undefined;
  geo_coordinates?: GeoPoint | undefined;
  altitude?: number | undefined;
  building_number?: string | undefined;
  address_addition?: AddressAddition | undefined;
  business_address?: BusinessAddress | undefined;
  residential_address?: ResidentialAddress | undefined;
  pack_station?: PackStation | undefined;
}

export interface Contact {
  name?: string | undefined;
  email?: string | undefined;
  phone?: string | undefined;
}

export interface ShippingAddress {
  address?: Address | undefined;
  contact?: Contact | undefined;
  comments?: string | undefined;
}

function createBaseDeleted(): Deleted {
  return { id: "" };
}

export const Deleted = {
  encode(message: Deleted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
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
    return { id: isSet(object.id) ? String(object.id) : "" };
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
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseAddressList(): AddressList {
  return { items: [], total_count: undefined, subject: undefined };
}

export const AddressList = {
  encode(message: AddressList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      Address.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== undefined) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddressList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(Address.decode(reader, reader.uint32()));
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

  fromJSON(object: any): AddressList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => Address.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: AddressList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? Address.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<AddressList>): AddressList {
    return AddressList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AddressList>): AddressList {
    const message = createBaseAddressList();
    message.items = object.items?.map((e) => Address.fromPartial(e)) || [];
    message.total_count = object.total_count ?? undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseAddressListResponse(): AddressListResponse {
  return { items: [], total_count: 0, operation_status: undefined };
}

export const AddressListResponse = {
  encode(message: AddressListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      AddressResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(message.operation_status, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddressListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(AddressResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): AddressListResponse {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => AddressResponse.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      operation_status: isSet(object.operation_status) ? OperationStatus.fromJSON(object.operation_status) : undefined,
    };
  },

  toJSON(message: AddressListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? AddressResponse.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status ? OperationStatus.toJSON(message.operation_status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<AddressListResponse>): AddressListResponse {
    return AddressListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AddressListResponse>): AddressListResponse {
    const message = createBaseAddressListResponse();
    message.items = object.items?.map((e) => AddressResponse.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.operation_status = (object.operation_status !== undefined && object.operation_status !== null)
      ? OperationStatus.fromPartial(object.operation_status)
      : undefined;
    return message;
  },
};

function createBaseAddressResponse(): AddressResponse {
  return { payload: undefined, status: undefined };
}

export const AddressResponse = {
  encode(message: AddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      Address.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddressResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payload = Address.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): AddressResponse {
    return {
      payload: isSet(object.payload) ? Address.fromJSON(object.payload) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: AddressResponse): unknown {
    const obj: any = {};
    message.payload !== undefined && (obj.payload = message.payload ? Address.toJSON(message.payload) : undefined);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<AddressResponse>): AddressResponse {
    return AddressResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AddressResponse>): AddressResponse {
    const message = createBaseAddressResponse();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? Address.fromPartial(object.payload)
      : undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBaseGeoPoint(): GeoPoint {
  return { latitude: undefined, longitude: undefined };
}

export const GeoPoint = {
  encode(message: GeoPoint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.latitude !== undefined) {
      writer.uint32(9).double(message.latitude);
    }
    if (message.longitude !== undefined) {
      writer.uint32(17).double(message.longitude);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GeoPoint {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeoPoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.latitude = reader.double();
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.longitude = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GeoPoint {
    return {
      latitude: isSet(object.latitude) ? Number(object.latitude) : undefined,
      longitude: isSet(object.longitude) ? Number(object.longitude) : undefined,
    };
  },

  toJSON(message: GeoPoint): unknown {
    const obj: any = {};
    message.latitude !== undefined && (obj.latitude = message.latitude);
    message.longitude !== undefined && (obj.longitude = message.longitude);
    return obj;
  },

  create(base?: DeepPartial<GeoPoint>): GeoPoint {
    return GeoPoint.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GeoPoint>): GeoPoint {
    const message = createBaseGeoPoint();
    message.latitude = object.latitude ?? undefined;
    message.longitude = object.longitude ?? undefined;
    return message;
  },
};

function createBaseAddressAddition(): AddressAddition {
  return { field1: undefined, field2: undefined };
}

export const AddressAddition = {
  encode(message: AddressAddition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.field1 !== undefined) {
      writer.uint32(10).string(message.field1);
    }
    if (message.field2 !== undefined) {
      writer.uint32(18).string(message.field2);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddressAddition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressAddition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.field1 = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.field2 = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddressAddition {
    return {
      field1: isSet(object.field1) ? String(object.field1) : undefined,
      field2: isSet(object.field2) ? String(object.field2) : undefined,
    };
  },

  toJSON(message: AddressAddition): unknown {
    const obj: any = {};
    message.field1 !== undefined && (obj.field1 = message.field1);
    message.field2 !== undefined && (obj.field2 = message.field2);
    return obj;
  },

  create(base?: DeepPartial<AddressAddition>): AddressAddition {
    return AddressAddition.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AddressAddition>): AddressAddition {
    const message = createBaseAddressAddition();
    message.field1 = object.field1 ?? undefined;
    message.field2 = object.field2 ?? undefined;
    return message;
  },
};

function createBaseBusinessAddress(): BusinessAddress {
  return { name: undefined };
}

export const BusinessAddress = {
  encode(message: BusinessAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BusinessAddress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BusinessAddress {
    return { name: isSet(object.name) ? String(object.name) : undefined };
  },

  toJSON(message: BusinessAddress): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create(base?: DeepPartial<BusinessAddress>): BusinessAddress {
    return BusinessAddress.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<BusinessAddress>): BusinessAddress {
    const message = createBaseBusinessAddress();
    message.name = object.name ?? undefined;
    return message;
  },
};

function createBaseResidentialAddress(): ResidentialAddress {
  return { title: undefined, given_name: undefined, mid_name: undefined, family_name: undefined };
}

export const ResidentialAddress = {
  encode(message: ResidentialAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== undefined) {
      writer.uint32(10).string(message.title);
    }
    if (message.given_name !== undefined) {
      writer.uint32(18).string(message.given_name);
    }
    if (message.mid_name !== undefined) {
      writer.uint32(26).string(message.mid_name);
    }
    if (message.family_name !== undefined) {
      writer.uint32(34).string(message.family_name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResidentialAddress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResidentialAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.given_name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.mid_name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.family_name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResidentialAddress {
    return {
      title: isSet(object.title) ? String(object.title) : undefined,
      given_name: isSet(object.given_name) ? String(object.given_name) : undefined,
      mid_name: isSet(object.mid_name) ? String(object.mid_name) : undefined,
      family_name: isSet(object.family_name) ? String(object.family_name) : undefined,
    };
  },

  toJSON(message: ResidentialAddress): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.given_name !== undefined && (obj.given_name = message.given_name);
    message.mid_name !== undefined && (obj.mid_name = message.mid_name);
    message.family_name !== undefined && (obj.family_name = message.family_name);
    return obj;
  },

  create(base?: DeepPartial<ResidentialAddress>): ResidentialAddress {
    return ResidentialAddress.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ResidentialAddress>): ResidentialAddress {
    const message = createBaseResidentialAddress();
    message.title = object.title ?? undefined;
    message.given_name = object.given_name ?? undefined;
    message.mid_name = object.mid_name ?? undefined;
    message.family_name = object.family_name ?? undefined;
    return message;
  },
};

function createBasePackStation(): PackStation {
  return { provider: undefined, station_number: undefined, post_number: undefined };
}

export const PackStation = {
  encode(message: PackStation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.provider !== undefined) {
      writer.uint32(10).string(message.provider);
    }
    if (message.station_number !== undefined) {
      writer.uint32(18).string(message.station_number);
    }
    if (message.post_number !== undefined) {
      writer.uint32(26).string(message.post_number);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PackStation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePackStation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.provider = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.station_number = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.post_number = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PackStation {
    return {
      provider: isSet(object.provider) ? String(object.provider) : undefined,
      station_number: isSet(object.station_number) ? String(object.station_number) : undefined,
      post_number: isSet(object.post_number) ? String(object.post_number) : undefined,
    };
  },

  toJSON(message: PackStation): unknown {
    const obj: any = {};
    message.provider !== undefined && (obj.provider = message.provider);
    message.station_number !== undefined && (obj.station_number = message.station_number);
    message.post_number !== undefined && (obj.post_number = message.post_number);
    return obj;
  },

  create(base?: DeepPartial<PackStation>): PackStation {
    return PackStation.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PackStation>): PackStation {
    const message = createBasePackStation();
    message.provider = object.provider ?? undefined;
    message.station_number = object.station_number ?? undefined;
    message.post_number = object.post_number ?? undefined;
    return message;
  },
};

function createBaseAddress(): Address {
  return {
    id: undefined,
    meta: undefined,
    postcode: undefined,
    country_id: undefined,
    locality: undefined,
    street: undefined,
    region: undefined,
    geo_coordinates: undefined,
    altitude: undefined,
    building_number: undefined,
    address_addition: undefined,
    business_address: undefined,
    residential_address: undefined,
    pack_station: undefined,
  };
}

export const Address = {
  encode(message: Address, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    if (message.postcode !== undefined) {
      writer.uint32(26).string(message.postcode);
    }
    if (message.country_id !== undefined) {
      writer.uint32(34).string(message.country_id);
    }
    if (message.locality !== undefined) {
      writer.uint32(50).string(message.locality);
    }
    if (message.street !== undefined) {
      writer.uint32(58).string(message.street);
    }
    if (message.region !== undefined) {
      writer.uint32(66).string(message.region);
    }
    if (message.geo_coordinates !== undefined) {
      GeoPoint.encode(message.geo_coordinates, writer.uint32(74).fork()).ldelim();
    }
    if (message.altitude !== undefined) {
      writer.uint32(81).double(message.altitude);
    }
    if (message.building_number !== undefined) {
      writer.uint32(90).string(message.building_number);
    }
    if (message.address_addition !== undefined) {
      AddressAddition.encode(message.address_addition, writer.uint32(98).fork()).ldelim();
    }
    if (message.business_address !== undefined) {
      BusinessAddress.encode(message.business_address, writer.uint32(106).fork()).ldelim();
    }
    if (message.residential_address !== undefined) {
      ResidentialAddress.encode(message.residential_address, writer.uint32(114).fork()).ldelim();
    }
    if (message.pack_station !== undefined) {
      PackStation.encode(message.pack_station, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Address {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddress();
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

          message.postcode = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.country_id = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.locality = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.street = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.region = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.geo_coordinates = GeoPoint.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 81) {
            break;
          }

          message.altitude = reader.double();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.building_number = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.address_addition = AddressAddition.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.business_address = BusinessAddress.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.residential_address = ResidentialAddress.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.pack_station = PackStation.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Address {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      postcode: isSet(object.postcode) ? String(object.postcode) : undefined,
      country_id: isSet(object.country_id) ? String(object.country_id) : undefined,
      locality: isSet(object.locality) ? String(object.locality) : undefined,
      street: isSet(object.street) ? String(object.street) : undefined,
      region: isSet(object.region) ? String(object.region) : undefined,
      geo_coordinates: isSet(object.geo_coordinates) ? GeoPoint.fromJSON(object.geo_coordinates) : undefined,
      altitude: isSet(object.altitude) ? Number(object.altitude) : undefined,
      building_number: isSet(object.building_number) ? String(object.building_number) : undefined,
      address_addition: isSet(object.address_addition) ? AddressAddition.fromJSON(object.address_addition) : undefined,
      business_address: isSet(object.business_address) ? BusinessAddress.fromJSON(object.business_address) : undefined,
      residential_address: isSet(object.residential_address)
        ? ResidentialAddress.fromJSON(object.residential_address)
        : undefined,
      pack_station: isSet(object.pack_station) ? PackStation.fromJSON(object.pack_station) : undefined,
    };
  },

  toJSON(message: Address): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.postcode !== undefined && (obj.postcode = message.postcode);
    message.country_id !== undefined && (obj.country_id = message.country_id);
    message.locality !== undefined && (obj.locality = message.locality);
    message.street !== undefined && (obj.street = message.street);
    message.region !== undefined && (obj.region = message.region);
    message.geo_coordinates !== undefined &&
      (obj.geo_coordinates = message.geo_coordinates ? GeoPoint.toJSON(message.geo_coordinates) : undefined);
    message.altitude !== undefined && (obj.altitude = message.altitude);
    message.building_number !== undefined && (obj.building_number = message.building_number);
    message.address_addition !== undefined &&
      (obj.address_addition = message.address_addition ? AddressAddition.toJSON(message.address_addition) : undefined);
    message.business_address !== undefined &&
      (obj.business_address = message.business_address ? BusinessAddress.toJSON(message.business_address) : undefined);
    message.residential_address !== undefined && (obj.residential_address = message.residential_address
      ? ResidentialAddress.toJSON(message.residential_address)
      : undefined);
    message.pack_station !== undefined &&
      (obj.pack_station = message.pack_station ? PackStation.toJSON(message.pack_station) : undefined);
    return obj;
  },

  create(base?: DeepPartial<Address>): Address {
    return Address.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Address>): Address {
    const message = createBaseAddress();
    message.id = object.id ?? undefined;
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    message.postcode = object.postcode ?? undefined;
    message.country_id = object.country_id ?? undefined;
    message.locality = object.locality ?? undefined;
    message.street = object.street ?? undefined;
    message.region = object.region ?? undefined;
    message.geo_coordinates = (object.geo_coordinates !== undefined && object.geo_coordinates !== null)
      ? GeoPoint.fromPartial(object.geo_coordinates)
      : undefined;
    message.altitude = object.altitude ?? undefined;
    message.building_number = object.building_number ?? undefined;
    message.address_addition = (object.address_addition !== undefined && object.address_addition !== null)
      ? AddressAddition.fromPartial(object.address_addition)
      : undefined;
    message.business_address = (object.business_address !== undefined && object.business_address !== null)
      ? BusinessAddress.fromPartial(object.business_address)
      : undefined;
    message.residential_address = (object.residential_address !== undefined && object.residential_address !== null)
      ? ResidentialAddress.fromPartial(object.residential_address)
      : undefined;
    message.pack_station = (object.pack_station !== undefined && object.pack_station !== null)
      ? PackStation.fromPartial(object.pack_station)
      : undefined;
    return message;
  },
};

function createBaseContact(): Contact {
  return { name: undefined, email: undefined, phone: undefined };
}

export const Contact = {
  encode(message: Contact, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.email !== undefined) {
      writer.uint32(18).string(message.email);
    }
    if (message.phone !== undefined) {
      writer.uint32(26).string(message.phone);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Contact {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContact();
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

          message.email = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.phone = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Contact {
    return {
      name: isSet(object.name) ? String(object.name) : undefined,
      email: isSet(object.email) ? String(object.email) : undefined,
      phone: isSet(object.phone) ? String(object.phone) : undefined,
    };
  },

  toJSON(message: Contact): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.email !== undefined && (obj.email = message.email);
    message.phone !== undefined && (obj.phone = message.phone);
    return obj;
  },

  create(base?: DeepPartial<Contact>): Contact {
    return Contact.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Contact>): Contact {
    const message = createBaseContact();
    message.name = object.name ?? undefined;
    message.email = object.email ?? undefined;
    message.phone = object.phone ?? undefined;
    return message;
  },
};

function createBaseShippingAddress(): ShippingAddress {
  return { address: undefined, contact: undefined, comments: undefined };
}

export const ShippingAddress = {
  encode(message: ShippingAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== undefined) {
      Address.encode(message.address, writer.uint32(10).fork()).ldelim();
    }
    if (message.contact !== undefined) {
      Contact.encode(message.contact, writer.uint32(18).fork()).ldelim();
    }
    if (message.comments !== undefined) {
      writer.uint32(26).string(message.comments);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ShippingAddress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShippingAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = Address.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.contact = Contact.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.comments = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ShippingAddress {
    return {
      address: isSet(object.address) ? Address.fromJSON(object.address) : undefined,
      contact: isSet(object.contact) ? Contact.fromJSON(object.contact) : undefined,
      comments: isSet(object.comments) ? String(object.comments) : undefined,
    };
  },

  toJSON(message: ShippingAddress): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address ? Address.toJSON(message.address) : undefined);
    message.contact !== undefined && (obj.contact = message.contact ? Contact.toJSON(message.contact) : undefined);
    message.comments !== undefined && (obj.comments = message.comments);
    return obj;
  },

  create(base?: DeepPartial<ShippingAddress>): ShippingAddress {
    return ShippingAddress.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ShippingAddress>): ShippingAddress {
    const message = createBaseShippingAddress();
    message.address = (object.address !== undefined && object.address !== null)
      ? Address.fromPartial(object.address)
      : undefined;
    message.contact = (object.contact !== undefined && object.contact !== null)
      ? Contact.fromPartial(object.contact)
      : undefined;
    message.comments = object.comments ?? undefined;
    return message;
  },
};

/** Microservice definition. */
export type AddressServiceDefinition = typeof AddressServiceDefinition;
export const AddressServiceDefinition = {
  name: "AddressService",
  fullName: "io.restorecommerce.address.AddressService",
  methods: {
    read: {
      name: "Read",
      requestType: ReadRequest,
      requestStream: false,
      responseType: AddressListResponse,
      responseStream: false,
      options: { _unknownFields: { 248008: [Buffer.from([1])] } },
    },
    create: {
      name: "Create",
      requestType: AddressList,
      requestStream: false,
      responseType: AddressListResponse,
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
      requestType: AddressList,
      requestStream: false,
      responseType: AddressListResponse,
      responseStream: false,
      options: {},
    },
    upsert: {
      name: "Upsert",
      requestType: AddressList,
      requestStream: false,
      responseType: AddressListResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface AddressServiceImplementation<CallContextExt = {}> {
  read(request: ReadRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddressListResponse>>;
  create(request: AddressList, context: CallContext & CallContextExt): Promise<DeepPartial<AddressListResponse>>;
  delete(request: DeleteRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteResponse>>;
  update(request: AddressList, context: CallContext & CallContextExt): Promise<DeepPartial<AddressListResponse>>;
  upsert(request: AddressList, context: CallContext & CallContextExt): Promise<DeepPartial<AddressListResponse>>;
}

export interface AddressServiceClient<CallOptionsExt = {}> {
  read(request: DeepPartial<ReadRequest>, options?: CallOptions & CallOptionsExt): Promise<AddressListResponse>;
  create(request: DeepPartial<AddressList>, options?: CallOptions & CallOptionsExt): Promise<AddressListResponse>;
  delete(request: DeepPartial<DeleteRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteResponse>;
  update(request: DeepPartial<AddressList>, options?: CallOptions & CallOptionsExt): Promise<AddressListResponse>;
  upsert(request: DeepPartial<AddressList>, options?: CallOptions & CallOptionsExt): Promise<AddressListResponse>;
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
    "name": "io/restorecommerce/address.proto",
    "package": "io.restorecommerce.address",
    "dependency": [
      "io/restorecommerce/resource_base.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/options.proto",
      "io/restorecommerce/country.proto",
    ],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
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
      "name": "AddressList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.address.Address",
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
        "oneofIndex": 0,
        "jsonName": "subject",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_total_count", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "AddressListResponse",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.address.AddressResponse",
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
      "name": "AddressResponse",
      "field": [{
        "name": "payload",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.address.Address",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "payload",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "status",
        "number": 2,
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
      "name": "GeoPoint",
      "field": [{
        "name": "latitude",
        "number": 1,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "latitude",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "longitude",
        "number": 2,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "longitude",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_latitude", "options": undefined }, { "name": "_longitude", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "AddressAddition",
      "field": [{
        "name": "field1",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "field1",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "field2",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "field2",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_field1", "options": undefined }, { "name": "_field2", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "BusinessAddress",
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
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_name", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ResidentialAddress",
      "field": [{
        "name": "title",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "title",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "given_name",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "givenName",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "mid_name",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "midName",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "family_name",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "familyName",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_title", "options": undefined }, { "name": "_given_name", "options": undefined }, {
        "name": "_mid_name",
        "options": undefined,
      }, { "name": "_family_name", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "PackStation",
      "field": [{
        "name": "provider",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "provider",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "station_number",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "stationNumber",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "post_number",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "postNumber",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "_provider", "options": undefined },
        { "name": "_station_number", "options": undefined },
        { "name": "_post_number", "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "Address",
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
        "oneofIndex": 2,
        "jsonName": "meta",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "postcode",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "postcode",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "country_id",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "countryId",
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
        "name": "locality",
        "number": 6,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 5,
        "jsonName": "locality",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "street",
        "number": 7,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 6,
        "jsonName": "street",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "region",
        "number": 8,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 7,
        "jsonName": "region",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "geo_coordinates",
        "number": 9,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.address.GeoPoint",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 8,
        "jsonName": "geoCoordinates",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "altitude",
        "number": 10,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 9,
        "jsonName": "altitude",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "building_number",
        "number": 11,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 10,
        "jsonName": "buildingNumber",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "address_addition",
        "number": 12,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.address.AddressAddition",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 11,
        "jsonName": "addressAddition",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "business_address",
        "number": 13,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.address.BusinessAddress",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "businessAddress",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "residential_address",
        "number": 14,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.address.ResidentialAddress",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "residentialAddress",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "pack_station",
        "number": 15,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.address.PackStation",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "packStation",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "type", "options": undefined },
        { "name": "_id", "options": undefined },
        { "name": "_meta", "options": undefined },
        { "name": "_postcode", "options": undefined },
        { "name": "_country_id", "options": undefined },
        { "name": "_locality", "options": undefined },
        { "name": "_street", "options": undefined },
        { "name": "_region", "options": undefined },
        { "name": "_geo_coordinates", "options": undefined },
        { "name": "_altitude", "options": undefined },
        { "name": "_building_number", "options": undefined },
        { "name": "_address_addition", "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "Contact",
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
        "name": "email",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "email",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "phone",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "phone",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_name", "options": undefined }, { "name": "_email", "options": undefined }, {
        "name": "_phone",
        "options": undefined,
      }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ShippingAddress",
      "field": [{
        "name": "address",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.address.Address",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "address",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "contact",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.address.Contact",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "contact",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "comments",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "comments",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_address", "options": undefined }, { "name": "_contact", "options": undefined }, {
        "name": "_comments",
        "options": undefined,
      }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "enumType": [],
    "service": [{
      "name": "AddressService",
      "method": [{
        "name": "Read",
        "inputType": ".io.restorecommerce.resourcebase.ReadRequest",
        "outputType": ".io.restorecommerce.address.AddressListResponse",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Create",
        "inputType": ".io.restorecommerce.address.AddressList",
        "outputType": ".io.restorecommerce.address.AddressListResponse",
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
        "inputType": ".io.restorecommerce.address.AddressList",
        "outputType": ".io.restorecommerce.address.AddressListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Upsert",
        "inputType": ".io.restorecommerce.address.AddressList",
        "outputType": ".io.restorecommerce.address.AddressListResponse",
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
        "path": [3, 5],
        "span": [11, 0, 42],
        "leadingComments": " Used by resolvers\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0],
        "span": [16, 0, 24, 1],
        "leadingComments": "\n Microservice definition.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {
    ".io.restorecommerce.address.Deleted": Deleted,
    ".io.restorecommerce.address.AddressList": AddressList,
    ".io.restorecommerce.address.AddressListResponse": AddressListResponse,
    ".io.restorecommerce.address.AddressResponse": AddressResponse,
    ".io.restorecommerce.address.GeoPoint": GeoPoint,
    ".io.restorecommerce.address.AddressAddition": AddressAddition,
    ".io.restorecommerce.address.BusinessAddress": BusinessAddress,
    ".io.restorecommerce.address.ResidentialAddress": ResidentialAddress,
    ".io.restorecommerce.address.PackStation": PackStation,
    ".io.restorecommerce.address.Address": Address,
    ".io.restorecommerce.address.Contact": Contact,
    ".io.restorecommerce.address.ShippingAddress": ShippingAddress,
  },
  dependencies: [protoMetadata1, protoMetadata2, protoMetadata3, protoMetadata4, protoMetadata5, protoMetadata6],
  options: {
    messages: {
      "Address": {
        fields: {
          "country_id": {
            "resolver": Resolver.decode(
              Buffer.from(
                "CiMuaW8ucmVzdG9yZWNvbW1lcmNlLmNvdW50cnkuQ291bnRyeRIIcmVzb3VyY2UaB2NvdW50cnkiBFJlYWQqB2NvdW50cnk=",
                "base64",
              ),
            ),
          },
        },
      },
    },
    services: { "AddressService": { options: undefined, methods: { "Read": { "is_query": true } } } },
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
