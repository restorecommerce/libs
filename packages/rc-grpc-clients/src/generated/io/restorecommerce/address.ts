/* eslint-disable */
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { Subject, protoMetadata as protoMetadata3 } from "./auth";
import {
  OperationStatus,
  Status,
  protoMetadata as protoMetadata4,
} from "./status";
import { Meta, protoMetadata as protoMetadata2 } from "./meta";
import { CallContext, CallOptions } from "nice-grpc-common";
import {
  protoMetadata as protoMetadata1,
  ReadRequest,
  DeleteRequest,
  DeleteResponse,
} from "./resource_base";
import { protoMetadata as protoMetadata5, Resolver } from "./options";
import { protoMetadata as protoMetadata6 } from "./country";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "io.restorecommerce.address";

export interface Deleted {
  id: string;
}

export interface AddressList {
  items: Address[];
  totalCount: number;
  subject?: Subject;
}

export interface AddressListResponse {
  items: AddressResponse[];
  totalCount: number;
  operationStatus?: OperationStatus;
}

export interface AddressResponse {
  payload?: Address;
  status?: Status;
}

export interface GeoPoint {
  latitude: number;
  longitude: number;
}

export interface AddressAddition {
  field1: string;
  field2: string;
}

export interface BusinessAddress {
  name: string;
}

export interface ResidentialAddress {
  title: string;
  givenName: string;
  midName: string;
  familyName: string;
}

export interface PackStation {
  provider: string;
  stationNumber: string;
  postNumber: string;
}

/** Uses by Order-Srv and Fulfillment-Srv */
export interface ContactPerson {
  name: string;
  email: string;
  phone: string;
}

export interface Address {
  id: string;
  meta?: Meta;
  postcode: string;
  countryId: string;
  locality: string;
  street: string;
  region: string;
  geoCoordinates?: GeoPoint;
  altitude: number;
  buildingNumber: string;
  addressAddition?: AddressAddition;
  businessAddress?: BusinessAddress | undefined;
  residentialAddress?: ResidentialAddress | undefined;
  packStation?: PackStation | undefined;
}

function createBaseDeleted(): Deleted {
  return { id: "" };
}

export const Deleted = {
  encode(
    message: Deleted,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Deleted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleted();
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
    return {
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: Deleted): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<Deleted>): Deleted {
    const message = createBaseDeleted();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseAddressList(): AddressList {
  return { items: [], totalCount: 0, subject: undefined };
}

export const AddressList = {
  encode(
    message: AddressList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      Address.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddressList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressList();
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
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => Address.fromJSON(e))
        : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
      subject: isSet(object.subject)
        ? Subject.fromJSON(object.subject)
        : undefined,
    };
  },

  toJSON(message: AddressList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => (e ? Address.toJSON(e) : undefined));
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined &&
      (obj.totalCount = Math.round(message.totalCount));
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<AddressList>): AddressList {
    const message = createBaseAddressList();
    message.items = object.items?.map((e) => Address.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    message.subject =
      object.subject !== undefined && object.subject !== null
        ? Subject.fromPartial(object.subject)
        : undefined;
    return message;
  },
};

function createBaseAddressListResponse(): AddressListResponse {
  return { items: [], totalCount: 0, operationStatus: undefined };
}

export const AddressListResponse = {
  encode(
    message: AddressListResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      AddressResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.operationStatus !== undefined) {
      OperationStatus.encode(
        message.operationStatus,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddressListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(AddressResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalCount = reader.uint32();
          break;
        case 3:
          message.operationStatus = OperationStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddressListResponse {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => AddressResponse.fromJSON(e))
        : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
      operationStatus: isSet(object.operationStatus)
        ? OperationStatus.fromJSON(object.operationStatus)
        : undefined,
    };
  },

  toJSON(message: AddressListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? AddressResponse.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined &&
      (obj.totalCount = Math.round(message.totalCount));
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus
        ? OperationStatus.toJSON(message.operationStatus)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<AddressListResponse>): AddressListResponse {
    const message = createBaseAddressListResponse();
    message.items =
      object.items?.map((e) => AddressResponse.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    message.operationStatus =
      object.operationStatus !== undefined && object.operationStatus !== null
        ? OperationStatus.fromPartial(object.operationStatus)
        : undefined;
    return message;
  },
};

function createBaseAddressResponse(): AddressResponse {
  return { payload: undefined, status: undefined };
}

export const AddressResponse = {
  encode(
    message: AddressResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.payload !== undefined) {
      Address.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = Address.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = Status.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddressResponse {
    return {
      payload: isSet(object.payload)
        ? Address.fromJSON(object.payload)
        : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: AddressResponse): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload
        ? Address.toJSON(message.payload)
        : undefined);
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<AddressResponse>): AddressResponse {
    const message = createBaseAddressResponse();
    message.payload =
      object.payload !== undefined && object.payload !== null
        ? Address.fromPartial(object.payload)
        : undefined;
    message.status =
      object.status !== undefined && object.status !== null
        ? Status.fromPartial(object.status)
        : undefined;
    return message;
  },
};

function createBaseGeoPoint(): GeoPoint {
  return { latitude: 0, longitude: 0 };
}

export const GeoPoint = {
  encode(
    message: GeoPoint,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.latitude !== 0) {
      writer.uint32(9).double(message.latitude);
    }
    if (message.longitude !== 0) {
      writer.uint32(17).double(message.longitude);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GeoPoint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeoPoint();
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

  fromJSON(object: any): GeoPoint {
    return {
      latitude: isSet(object.latitude) ? Number(object.latitude) : 0,
      longitude: isSet(object.longitude) ? Number(object.longitude) : 0,
    };
  },

  toJSON(message: GeoPoint): unknown {
    const obj: any = {};
    message.latitude !== undefined && (obj.latitude = message.latitude);
    message.longitude !== undefined && (obj.longitude = message.longitude);
    return obj;
  },

  fromPartial(object: DeepPartial<GeoPoint>): GeoPoint {
    const message = createBaseGeoPoint();
    message.latitude = object.latitude ?? 0;
    message.longitude = object.longitude ?? 0;
    return message;
  },
};

function createBaseAddressAddition(): AddressAddition {
  return { field1: "", field2: "" };
}

export const AddressAddition = {
  encode(
    message: AddressAddition,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.field1 !== "") {
      writer.uint32(10).string(message.field1);
    }
    if (message.field2 !== "") {
      writer.uint32(18).string(message.field2);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddressAddition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressAddition();
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
    return {
      field1: isSet(object.field1) ? String(object.field1) : "",
      field2: isSet(object.field2) ? String(object.field2) : "",
    };
  },

  toJSON(message: AddressAddition): unknown {
    const obj: any = {};
    message.field1 !== undefined && (obj.field1 = message.field1);
    message.field2 !== undefined && (obj.field2 = message.field2);
    return obj;
  },

  fromPartial(object: DeepPartial<AddressAddition>): AddressAddition {
    const message = createBaseAddressAddition();
    message.field1 = object.field1 ?? "";
    message.field2 = object.field2 ?? "";
    return message;
  },
};

function createBaseBusinessAddress(): BusinessAddress {
  return { name: "" };
}

export const BusinessAddress = {
  encode(
    message: BusinessAddress,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BusinessAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessAddress {
    return {
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: BusinessAddress): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<BusinessAddress>): BusinessAddress {
    const message = createBaseBusinessAddress();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseResidentialAddress(): ResidentialAddress {
  return { title: "", givenName: "", midName: "", familyName: "" };
}

export const ResidentialAddress = {
  encode(
    message: ResidentialAddress,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.givenName !== "") {
      writer.uint32(18).string(message.givenName);
    }
    if (message.midName !== "") {
      writer.uint32(26).string(message.midName);
    }
    if (message.familyName !== "") {
      writer.uint32(34).string(message.familyName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResidentialAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResidentialAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.givenName = reader.string();
          break;
        case 3:
          message.midName = reader.string();
          break;
        case 4:
          message.familyName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResidentialAddress {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      givenName: isSet(object.givenName) ? String(object.givenName) : "",
      midName: isSet(object.midName) ? String(object.midName) : "",
      familyName: isSet(object.familyName) ? String(object.familyName) : "",
    };
  },

  toJSON(message: ResidentialAddress): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.givenName !== undefined && (obj.givenName = message.givenName);
    message.midName !== undefined && (obj.midName = message.midName);
    message.familyName !== undefined && (obj.familyName = message.familyName);
    return obj;
  },

  fromPartial(object: DeepPartial<ResidentialAddress>): ResidentialAddress {
    const message = createBaseResidentialAddress();
    message.title = object.title ?? "";
    message.givenName = object.givenName ?? "";
    message.midName = object.midName ?? "";
    message.familyName = object.familyName ?? "";
    return message;
  },
};

function createBasePackStation(): PackStation {
  return { provider: "", stationNumber: "", postNumber: "" };
}

export const PackStation = {
  encode(
    message: PackStation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.stationNumber !== "") {
      writer.uint32(18).string(message.stationNumber);
    }
    if (message.postNumber !== "") {
      writer.uint32(26).string(message.postNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PackStation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePackStation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider = reader.string();
          break;
        case 2:
          message.stationNumber = reader.string();
          break;
        case 3:
          message.postNumber = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PackStation {
    return {
      provider: isSet(object.provider) ? String(object.provider) : "",
      stationNumber: isSet(object.stationNumber)
        ? String(object.stationNumber)
        : "",
      postNumber: isSet(object.postNumber) ? String(object.postNumber) : "",
    };
  },

  toJSON(message: PackStation): unknown {
    const obj: any = {};
    message.provider !== undefined && (obj.provider = message.provider);
    message.stationNumber !== undefined &&
      (obj.stationNumber = message.stationNumber);
    message.postNumber !== undefined && (obj.postNumber = message.postNumber);
    return obj;
  },

  fromPartial(object: DeepPartial<PackStation>): PackStation {
    const message = createBasePackStation();
    message.provider = object.provider ?? "";
    message.stationNumber = object.stationNumber ?? "";
    message.postNumber = object.postNumber ?? "";
    return message;
  },
};

function createBaseContactPerson(): ContactPerson {
  return { name: "", email: "", phone: "" };
}

export const ContactPerson = {
  encode(
    message: ContactPerson,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.phone !== "") {
      writer.uint32(26).string(message.phone);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContactPerson {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContactPerson();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.email = reader.string();
          break;
        case 3:
          message.phone = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ContactPerson {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      email: isSet(object.email) ? String(object.email) : "",
      phone: isSet(object.phone) ? String(object.phone) : "",
    };
  },

  toJSON(message: ContactPerson): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.email !== undefined && (obj.email = message.email);
    message.phone !== undefined && (obj.phone = message.phone);
    return obj;
  },

  fromPartial(object: DeepPartial<ContactPerson>): ContactPerson {
    const message = createBaseContactPerson();
    message.name = object.name ?? "";
    message.email = object.email ?? "";
    message.phone = object.phone ?? "";
    return message;
  },
};

function createBaseAddress(): Address {
  return {
    id: "",
    meta: undefined,
    postcode: "",
    countryId: "",
    locality: "",
    street: "",
    region: "",
    geoCoordinates: undefined,
    altitude: 0,
    buildingNumber: "",
    addressAddition: undefined,
    businessAddress: undefined,
    residentialAddress: undefined,
    packStation: undefined,
  };
}

export const Address = {
  encode(
    message: Address,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    if (message.postcode !== "") {
      writer.uint32(26).string(message.postcode);
    }
    if (message.countryId !== "") {
      writer.uint32(34).string(message.countryId);
    }
    if (message.locality !== "") {
      writer.uint32(50).string(message.locality);
    }
    if (message.street !== "") {
      writer.uint32(58).string(message.street);
    }
    if (message.region !== "") {
      writer.uint32(66).string(message.region);
    }
    if (message.geoCoordinates !== undefined) {
      GeoPoint.encode(
        message.geoCoordinates,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.altitude !== 0) {
      writer.uint32(81).double(message.altitude);
    }
    if (message.buildingNumber !== "") {
      writer.uint32(90).string(message.buildingNumber);
    }
    if (message.addressAddition !== undefined) {
      AddressAddition.encode(
        message.addressAddition,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.businessAddress !== undefined) {
      BusinessAddress.encode(
        message.businessAddress,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.residentialAddress !== undefined) {
      ResidentialAddress.encode(
        message.residentialAddress,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.packStation !== undefined) {
      PackStation.encode(
        message.packStation,
        writer.uint32(122).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Address {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddress();
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
        case 6:
          message.locality = reader.string();
          break;
        case 7:
          message.street = reader.string();
          break;
        case 8:
          message.region = reader.string();
          break;
        case 9:
          message.geoCoordinates = GeoPoint.decode(reader, reader.uint32());
          break;
        case 10:
          message.altitude = reader.double();
          break;
        case 11:
          message.buildingNumber = reader.string();
          break;
        case 12:
          message.addressAddition = AddressAddition.decode(
            reader,
            reader.uint32()
          );
          break;
        case 13:
          message.businessAddress = BusinessAddress.decode(
            reader,
            reader.uint32()
          );
          break;
        case 14:
          message.residentialAddress = ResidentialAddress.decode(
            reader,
            reader.uint32()
          );
          break;
        case 15:
          message.packStation = PackStation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Address {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      postcode: isSet(object.postcode) ? String(object.postcode) : "",
      countryId: isSet(object.countryId) ? String(object.countryId) : "",
      locality: isSet(object.locality) ? String(object.locality) : "",
      street: isSet(object.street) ? String(object.street) : "",
      region: isSet(object.region) ? String(object.region) : "",
      geoCoordinates: isSet(object.geoCoordinates)
        ? GeoPoint.fromJSON(object.geoCoordinates)
        : undefined,
      altitude: isSet(object.altitude) ? Number(object.altitude) : 0,
      buildingNumber: isSet(object.buildingNumber)
        ? String(object.buildingNumber)
        : "",
      addressAddition: isSet(object.addressAddition)
        ? AddressAddition.fromJSON(object.addressAddition)
        : undefined,
      businessAddress: isSet(object.businessAddress)
        ? BusinessAddress.fromJSON(object.businessAddress)
        : undefined,
      residentialAddress: isSet(object.residentialAddress)
        ? ResidentialAddress.fromJSON(object.residentialAddress)
        : undefined,
      packStation: isSet(object.packStation)
        ? PackStation.fromJSON(object.packStation)
        : undefined,
    };
  },

  toJSON(message: Address): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.postcode !== undefined && (obj.postcode = message.postcode);
    message.countryId !== undefined && (obj.countryId = message.countryId);
    message.locality !== undefined && (obj.locality = message.locality);
    message.street !== undefined && (obj.street = message.street);
    message.region !== undefined && (obj.region = message.region);
    message.geoCoordinates !== undefined &&
      (obj.geoCoordinates = message.geoCoordinates
        ? GeoPoint.toJSON(message.geoCoordinates)
        : undefined);
    message.altitude !== undefined && (obj.altitude = message.altitude);
    message.buildingNumber !== undefined &&
      (obj.buildingNumber = message.buildingNumber);
    message.addressAddition !== undefined &&
      (obj.addressAddition = message.addressAddition
        ? AddressAddition.toJSON(message.addressAddition)
        : undefined);
    message.businessAddress !== undefined &&
      (obj.businessAddress = message.businessAddress
        ? BusinessAddress.toJSON(message.businessAddress)
        : undefined);
    message.residentialAddress !== undefined &&
      (obj.residentialAddress = message.residentialAddress
        ? ResidentialAddress.toJSON(message.residentialAddress)
        : undefined);
    message.packStation !== undefined &&
      (obj.packStation = message.packStation
        ? PackStation.toJSON(message.packStation)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Address>): Address {
    const message = createBaseAddress();
    message.id = object.id ?? "";
    message.meta =
      object.meta !== undefined && object.meta !== null
        ? Meta.fromPartial(object.meta)
        : undefined;
    message.postcode = object.postcode ?? "";
    message.countryId = object.countryId ?? "";
    message.locality = object.locality ?? "";
    message.street = object.street ?? "";
    message.region = object.region ?? "";
    message.geoCoordinates =
      object.geoCoordinates !== undefined && object.geoCoordinates !== null
        ? GeoPoint.fromPartial(object.geoCoordinates)
        : undefined;
    message.altitude = object.altitude ?? 0;
    message.buildingNumber = object.buildingNumber ?? "";
    message.addressAddition =
      object.addressAddition !== undefined && object.addressAddition !== null
        ? AddressAddition.fromPartial(object.addressAddition)
        : undefined;
    message.businessAddress =
      object.businessAddress !== undefined && object.businessAddress !== null
        ? BusinessAddress.fromPartial(object.businessAddress)
        : undefined;
    message.residentialAddress =
      object.residentialAddress !== undefined &&
      object.residentialAddress !== null
        ? ResidentialAddress.fromPartial(object.residentialAddress)
        : undefined;
    message.packStation =
      object.packStation !== undefined && object.packStation !== null
        ? PackStation.fromPartial(object.packStation)
        : undefined;
    return message;
  },
};

/** Microservice definition. */
export type ServiceDefinition = typeof ServiceDefinition;
export const ServiceDefinition = {
  name: "Service",
  fullName: "io.restorecommerce.address.Service",
  methods: {
    read: {
      name: "Read",
      requestType: ReadRequest,
      requestStream: false,
      responseType: AddressListResponse,
      responseStream: false,
      options: {},
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

export interface ServiceServiceImplementation<CallContextExt = {}> {
  read(
    request: ReadRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<AddressListResponse>>;
  create(
    request: AddressList,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<AddressListResponse>>;
  delete(
    request: DeleteRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<DeleteResponse>>;
  update(
    request: AddressList,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<AddressListResponse>>;
  upsert(
    request: AddressList,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<AddressListResponse>>;
}

export interface ServiceClient<CallOptionsExt = {}> {
  read(
    request: DeepPartial<ReadRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<AddressListResponse>;
  create(
    request: DeepPartial<AddressList>,
    options?: CallOptions & CallOptionsExt
  ): Promise<AddressListResponse>;
  delete(
    request: DeepPartial<DeleteRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<DeleteResponse>;
  update(
    request: DeepPartial<AddressList>,
    options?: CallOptions & CallOptionsExt
  ): Promise<AddressListResponse>;
  upsert(
    request: DeepPartial<AddressList>,
    options?: CallOptions & CallOptionsExt
  ): Promise<AddressListResponse>;
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
      [key: string]: {
        options?: { [key: string]: any };
        methods?: { [key: string]: { [key: string]: any } };
      };
    };
    messages?: {
      [key: string]: ProtoMetaMessageOptions;
    };
    enums?: {
      [key: string]: {
        options?: { [key: string]: any };
        values?: { [key: string]: { [key: string]: any } };
      };
    };
  };
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto1.fromPartial({
    name: "io/restorecommerce/address.proto",
    package: "io.restorecommerce.address",
    dependency: [
      "io/restorecommerce/resource_base.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/options.proto",
      "io/restorecommerce/country.proto",
    ],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        name: "Deleted",
        field: [
          {
            name: "id",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "id",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "AddressList",
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.address.Address",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "items",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "total_count",
            number: 2,
            label: 1,
            type: 13,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "totalCount",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "subject",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "subject",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "AddressListResponse",
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.address.AddressResponse",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "items",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "total_count",
            number: 2,
            label: 1,
            type: 13,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "totalCount",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "operation_status",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.OperationStatus",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "operationStatus",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "AddressResponse",
        field: [
          {
            name: "payload",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.address.Address",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "payload",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "status",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.Status",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "status",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "GeoPoint",
        field: [
          {
            name: "latitude",
            number: 1,
            label: 1,
            type: 1,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "latitude",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "longitude",
            number: 2,
            label: 1,
            type: 1,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "longitude",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "AddressAddition",
        field: [
          {
            name: "field1",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "field1",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "field2",
            number: 2,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "field2",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "BusinessAddress",
        field: [
          {
            name: "name",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "name",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "ResidentialAddress",
        field: [
          {
            name: "title",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "title",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "given_name",
            number: 2,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "givenName",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "mid_name",
            number: 3,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "midName",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "family_name",
            number: 4,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "familyName",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "PackStation",
        field: [
          {
            name: "provider",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "provider",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "station_number",
            number: 2,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "stationNumber",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "post_number",
            number: 3,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "postNumber",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "ContactPerson",
        field: [
          {
            name: "name",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "name",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "email",
            number: 2,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "email",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "phone",
            number: 3,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "phone",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "Address",
        field: [
          {
            name: "id",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "id",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "meta",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.meta.Meta",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "meta",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "postcode",
            number: 3,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "postcode",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "country_id",
            number: 4,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "countryId",
            options: {
              ctype: 0,
              packed: false,
              jstype: 0,
              lazy: false,
              deprecated: false,
              weak: false,
              uninterpretedOption: [],
            },
            proto3Optional: false,
          },
          {
            name: "locality",
            number: 6,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "locality",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "street",
            number: 7,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "street",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "region",
            number: 8,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "region",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "geo_coordinates",
            number: 9,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.address.GeoPoint",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "geoCoordinates",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "altitude",
            number: 10,
            label: 1,
            type: 1,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "altitude",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "building_number",
            number: 11,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "buildingNumber",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "address_addition",
            number: 12,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.address.AddressAddition",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "addressAddition",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "business_address",
            number: 13,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.address.BusinessAddress",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "businessAddress",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "residential_address",
            number: 14,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.address.ResidentialAddress",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "residentialAddress",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "pack_station",
            number: 15,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.address.PackStation",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "packStation",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [{ name: "type", options: undefined }],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
    ],
    enumType: [],
    service: [
      {
        name: "Service",
        method: [
          {
            name: "Read",
            inputType: ".io.restorecommerce.resourcebase.ReadRequest",
            outputType: ".io.restorecommerce.address.AddressListResponse",
            options: {
              deprecated: false,
              idempotencyLevel: 0,
              uninterpretedOption: [],
            },
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Create",
            inputType: ".io.restorecommerce.address.AddressList",
            outputType: ".io.restorecommerce.address.AddressListResponse",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Delete",
            inputType: ".io.restorecommerce.resourcebase.DeleteRequest",
            outputType: ".io.restorecommerce.resourcebase.DeleteResponse",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Update",
            inputType: ".io.restorecommerce.address.AddressList",
            outputType: ".io.restorecommerce.address.AddressListResponse",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Upsert",
            inputType: ".io.restorecommerce.address.AddressList",
            outputType: ".io.restorecommerce.address.AddressListResponse",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
        ],
        options: { deprecated: false, uninterpretedOption: [] },
      },
    ],
    extension: [],
    options: undefined,
    sourceCodeInfo: {
      location: [
        {
          path: [3, 5],
          span: [11, 0, 42],
          leadingComments: " Used by resolvers\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [6, 0],
          span: [16, 0, 26, 1],
          leadingComments: "\n Microservice definition.\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [4, 9],
          span: [79, 0, 83, 1],
          leadingComments: "*\nUses by Order-Srv and Fulfillment-Srv\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
      ],
    },
    syntax: "proto3",
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
    ".io.restorecommerce.address.ContactPerson": ContactPerson,
    ".io.restorecommerce.address.Address": Address,
  },
  dependencies: [
    protoMetadata1,
    protoMetadata2,
    protoMetadata3,
    protoMetadata4,
    protoMetadata5,
    protoMetadata6,
  ],
  options: {
    messages: {
      Address: {
        fields: {
          country_id: {
            resolver: Resolver.decode(
              Buffer.from(
                "CiMuaW8ucmVzdG9yZWNvbW1lcmNlLmNvdW50cnkuQ291bnRyeRIIcmVzb3VyY2UaB2NvdW50cnkiBFJlYWQqB2NvdW50cnk=",
                "base64"
              )
            ),
          },
        },
      },
    },
    services: {
      Service: {
        options: { service_name: "address" },
        methods: { Read: { is_query: true } },
      },
    },
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
