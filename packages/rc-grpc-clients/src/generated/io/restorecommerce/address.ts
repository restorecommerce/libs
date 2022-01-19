/* eslint-disable */
import { FileDescriptorProto } from "ts-proto-descriptors/google/protobuf/descriptor";
import {
  Subject,
  protoMetadata as protoMetadata3,
} from "../../io/restorecommerce/auth";
import {
  OperationStatus,
  Status,
  protoMetadata as protoMetadata4,
} from "../../io/restorecommerce/status";
import {
  Meta,
  protoMetadata as protoMetadata2,
} from "../../io/restorecommerce/meta";
import {
  protoMetadata as protoMetadata1,
  DeleteResponse,
  ReadRequest,
  DeleteRequest,
} from "../../io/restorecommerce/resource_base";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "io.restorecommerce.address";

export interface Deleted {
  id: string;
}

export interface AddressList {
  items: Address[];
  total_count: number;
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

export interface Address {
  id: string;
  meta?: Meta;
  postcode: string;
  country_id: string;
  locality: string;
  street: string;
  region: string;
  geo_coordinates?: Address_GeoPoint;
  altitude: number;
  building_number: string;
  address_addition?: AddressAddition;
}

export interface Address_GeoPoint {
  latitude: number;
  longitude: number;
}

export interface AddressAddition {
  field1: string;
  field2: string;
}

const baseDeleted: object = { id: "" };

export const Deleted = {
  encode(message: Deleted, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Deleted {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseDeleted) as Deleted;
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
    const message = globalThis.Object.create(baseDeleted) as Deleted;
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

const baseAddressList: object = { total_count: 0 };

export const AddressList = {
  encode(message: AddressList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      Address.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): AddressList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseAddressList) as AddressList;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Address.decode(reader, reader.uint32()));
          break;
        case 2:
          message.total_count = reader.uint32();
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
    const message = globalThis.Object.create(baseAddressList) as AddressList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Address.fromJSON(e));
      }
    }
    if (object.total_count !== undefined && object.total_count !== null) {
      message.total_count = Number(object.total_count);
    } else {
      message.total_count = 0;
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
    if (object.total_count !== undefined && object.total_count !== null) {
      message.total_count = object.total_count;
    } else {
      message.total_count = 0;
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
      obj.items = message.items.map((e) => (e ? Address.toJSON(e) : undefined));
    } else {
      obj.items = [];
    }
    message.total_count !== undefined &&
      (obj.total_count = message.total_count);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseAddressListResponse: object = { total_count: 0 };

export const AddressListResponse = {
  encode(
    message: AddressListResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.items) {
      AddressResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(
        message.operation_status,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): AddressListResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseAddressListResponse
    ) as AddressListResponse;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(AddressResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.total_count = reader.uint32();
          break;
        case 3:
          message.operation_status = OperationStatus.decode(
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
    const message = globalThis.Object.create(
      baseAddressListResponse
    ) as AddressListResponse;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(AddressResponse.fromJSON(e));
      }
    }
    if (object.total_count !== undefined && object.total_count !== null) {
      message.total_count = Number(object.total_count);
    } else {
      message.total_count = 0;
    }
    if (
      object.operation_status !== undefined &&
      object.operation_status !== null
    ) {
      message.operation_status = OperationStatus.fromJSON(
        object.operation_status
      );
    } else {
      message.operation_status = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<AddressListResponse>): AddressListResponse {
    const message = { ...baseAddressListResponse } as AddressListResponse;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(AddressResponse.fromPartial(e));
      }
    }
    if (object.total_count !== undefined && object.total_count !== null) {
      message.total_count = object.total_count;
    } else {
      message.total_count = 0;
    }
    if (
      object.operation_status !== undefined &&
      object.operation_status !== null
    ) {
      message.operation_status = OperationStatus.fromPartial(
        object.operation_status
      );
    } else {
      message.operation_status = undefined;
    }
    return message;
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
    message.total_count !== undefined &&
      (obj.total_count = message.total_count);
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status
        ? OperationStatus.toJSON(message.operation_status)
        : undefined);
    return obj;
  },
};

const baseAddressResponse: object = {};

export const AddressResponse = {
  encode(message: AddressResponse, writer: Writer = Writer.create()): Writer {
    if (message.payload !== undefined) {
      Address.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): AddressResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseAddressResponse
    ) as AddressResponse;
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
    const message = globalThis.Object.create(
      baseAddressResponse
    ) as AddressResponse;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = Address.fromJSON(object.payload);
    } else {
      message.payload = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromJSON(object.status);
    } else {
      message.status = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<AddressResponse>): AddressResponse {
    const message = { ...baseAddressResponse } as AddressResponse;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = Address.fromPartial(object.payload);
    } else {
      message.payload = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromPartial(object.status);
    } else {
      message.status = undefined;
    }
    return message;
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
};

const baseAddress: object = {
  id: "",
  postcode: "",
  country_id: "",
  locality: "",
  street: "",
  region: "",
  altitude: 0,
  building_number: "",
};

export const Address = {
  encode(message: Address, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    if (message.postcode !== "") {
      writer.uint32(26).string(message.postcode);
    }
    if (message.country_id !== "") {
      writer.uint32(34).string(message.country_id);
    }
    if (message.locality !== "") {
      writer.uint32(42).string(message.locality);
    }
    if (message.street !== "") {
      writer.uint32(50).string(message.street);
    }
    if (message.region !== "") {
      writer.uint32(58).string(message.region);
    }
    if (message.geo_coordinates !== undefined) {
      Address_GeoPoint.encode(
        message.geo_coordinates,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.altitude !== 0) {
      writer.uint32(73).double(message.altitude);
    }
    if (message.building_number !== "") {
      writer.uint32(82).string(message.building_number);
    }
    if (message.address_addition !== undefined) {
      AddressAddition.encode(
        message.address_addition,
        writer.uint32(90).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Address {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseAddress) as Address;
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
          message.country_id = reader.string();
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
          message.geo_coordinates = Address_GeoPoint.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.altitude = reader.double();
          break;
        case 10:
          message.building_number = reader.string();
          break;
        case 11:
          message.address_addition = AddressAddition.decode(
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

  fromJSON(object: any): Address {
    const message = globalThis.Object.create(baseAddress) as Address;
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
    if (object.country_id !== undefined && object.country_id !== null) {
      message.country_id = String(object.country_id);
    } else {
      message.country_id = "";
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
    if (
      object.geo_coordinates !== undefined &&
      object.geo_coordinates !== null
    ) {
      message.geo_coordinates = Address_GeoPoint.fromJSON(
        object.geo_coordinates
      );
    } else {
      message.geo_coordinates = undefined;
    }
    if (object.altitude !== undefined && object.altitude !== null) {
      message.altitude = Number(object.altitude);
    } else {
      message.altitude = 0;
    }
    if (
      object.building_number !== undefined &&
      object.building_number !== null
    ) {
      message.building_number = String(object.building_number);
    } else {
      message.building_number = "";
    }
    if (
      object.address_addition !== undefined &&
      object.address_addition !== null
    ) {
      message.address_addition = AddressAddition.fromJSON(
        object.address_addition
      );
    } else {
      message.address_addition = undefined;
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
    if (object.country_id !== undefined && object.country_id !== null) {
      message.country_id = object.country_id;
    } else {
      message.country_id = "";
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
    if (
      object.geo_coordinates !== undefined &&
      object.geo_coordinates !== null
    ) {
      message.geo_coordinates = Address_GeoPoint.fromPartial(
        object.geo_coordinates
      );
    } else {
      message.geo_coordinates = undefined;
    }
    if (object.altitude !== undefined && object.altitude !== null) {
      message.altitude = object.altitude;
    } else {
      message.altitude = 0;
    }
    if (
      object.building_number !== undefined &&
      object.building_number !== null
    ) {
      message.building_number = object.building_number;
    } else {
      message.building_number = "";
    }
    if (
      object.address_addition !== undefined &&
      object.address_addition !== null
    ) {
      message.address_addition = AddressAddition.fromPartial(
        object.address_addition
      );
    } else {
      message.address_addition = undefined;
    }
    return message;
  },

  toJSON(message: Address): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.postcode !== undefined && (obj.postcode = message.postcode);
    message.country_id !== undefined && (obj.country_id = message.country_id);
    message.locality !== undefined && (obj.locality = message.locality);
    message.street !== undefined && (obj.street = message.street);
    message.region !== undefined && (obj.region = message.region);
    message.geo_coordinates !== undefined &&
      (obj.geo_coordinates = message.geo_coordinates
        ? Address_GeoPoint.toJSON(message.geo_coordinates)
        : undefined);
    message.altitude !== undefined && (obj.altitude = message.altitude);
    message.building_number !== undefined &&
      (obj.building_number = message.building_number);
    message.address_addition !== undefined &&
      (obj.address_addition = message.address_addition
        ? AddressAddition.toJSON(message.address_addition)
        : undefined);
    return obj;
  },
};

const baseAddress_GeoPoint: object = { latitude: 0, longitude: 0 };

export const Address_GeoPoint = {
  encode(message: Address_GeoPoint, writer: Writer = Writer.create()): Writer {
    if (message.latitude !== 0) {
      writer.uint32(9).double(message.latitude);
    }
    if (message.longitude !== 0) {
      writer.uint32(17).double(message.longitude);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Address_GeoPoint {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseAddress_GeoPoint
    ) as Address_GeoPoint;
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
    const message = globalThis.Object.create(
      baseAddress_GeoPoint
    ) as Address_GeoPoint;
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

const baseAddressAddition: object = { field1: "", field2: "" };

export const AddressAddition = {
  encode(message: AddressAddition, writer: Writer = Writer.create()): Writer {
    if (message.field1 !== "") {
      writer.uint32(10).string(message.field1);
    }
    if (message.field2 !== "") {
      writer.uint32(18).string(message.field2);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): AddressAddition {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseAddressAddition
    ) as AddressAddition;
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
    const message = globalThis.Object.create(
      baseAddressAddition
    ) as AddressAddition;
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

/** Microservice definition. */
export interface Service {
  Read(request: ReadRequest): Promise<AddressListResponse>;
  Create(request: AddressList): Promise<AddressListResponse>;
  Delete(request: DeleteRequest): Promise<DeleteResponse>;
  Update(request: AddressList): Promise<AddressListResponse>;
  Upsert(request: AddressList): Promise<AddressListResponse>;
}

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto.fromPartial({
    dependency: [
      "io/restorecommerce/resource_base.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
    ],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        field: [{ name: "id", number: 1, label: 1, type: 9, jsonName: "id" }],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Deleted",
      },
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.address.Address",
            jsonName: "items",
          },
          {
            name: "total_count",
            number: 2,
            label: 1,
            type: 13,
            jsonName: "totalCount",
          },
          {
            name: "subject",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            jsonName: "subject",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "AddressList",
      },
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.address.AddressResponse",
            jsonName: "items",
          },
          {
            name: "total_count",
            number: 2,
            label: 1,
            type: 13,
            jsonName: "totalCount",
          },
          {
            name: "operation_status",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.OperationStatus",
            jsonName: "operationStatus",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "AddressListResponse",
      },
      {
        field: [
          {
            name: "payload",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.address.Address",
            jsonName: "payload",
          },
          {
            name: "status",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.Status",
            jsonName: "status",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "AddressResponse",
      },
      {
        field: [
          { name: "id", number: 1, label: 1, type: 9, jsonName: "id" },
          {
            name: "meta",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.meta.Meta",
            jsonName: "meta",
          },
          {
            name: "postcode",
            number: 3,
            label: 1,
            type: 9,
            jsonName: "postcode",
          },
          {
            name: "country_id",
            number: 4,
            label: 1,
            type: 9,
            jsonName: "countryId",
          },
          {
            name: "locality",
            number: 5,
            label: 1,
            type: 9,
            jsonName: "locality",
          },
          { name: "street", number: 6, label: 1, type: 9, jsonName: "street" },
          { name: "region", number: 7, label: 1, type: 9, jsonName: "region" },
          {
            name: "geo_coordinates",
            number: 8,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.address.Address.GeoPoint",
            jsonName: "geoCoordinates",
          },
          {
            name: "altitude",
            number: 9,
            label: 1,
            type: 1,
            jsonName: "altitude",
          },
          {
            name: "building_number",
            number: 10,
            label: 1,
            type: 9,
            jsonName: "buildingNumber",
          },
          {
            name: "address_addition",
            number: 11,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.address.AddressAddition",
            jsonName: "addressAddition",
          },
        ],
        extension: [],
        nestedType: [
          {
            field: [
              {
                name: "latitude",
                number: 1,
                label: 1,
                type: 1,
                jsonName: "latitude",
              },
              {
                name: "longitude",
                number: 2,
                label: 1,
                type: 1,
                jsonName: "longitude",
              },
            ],
            extension: [],
            nestedType: [],
            enumType: [],
            extensionRange: [],
            oneofDecl: [],
            reservedRange: [],
            reservedName: [],
            name: "GeoPoint",
          },
        ],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Address",
      },
      {
        field: [
          { name: "field1", number: 1, label: 1, type: 9, jsonName: "field1" },
          { name: "field2", number: 2, label: 1, type: 9, jsonName: "field2" },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "AddressAddition",
      },
    ],
    enumType: [],
    service: [
      {
        method: [
          {
            name: "Read",
            inputType: ".io.restorecommerce.resourcebase.ReadRequest",
            outputType: ".io.restorecommerce.address.AddressListResponse",
          },
          {
            name: "Create",
            inputType: ".io.restorecommerce.address.AddressList",
            outputType: ".io.restorecommerce.address.AddressListResponse",
          },
          {
            name: "Delete",
            inputType: ".io.restorecommerce.resourcebase.DeleteRequest",
            outputType: ".io.restorecommerce.resourcebase.DeleteResponse",
          },
          {
            name: "Update",
            inputType: ".io.restorecommerce.address.AddressList",
            outputType: ".io.restorecommerce.address.AddressListResponse",
          },
          {
            name: "Upsert",
            inputType: ".io.restorecommerce.address.AddressList",
            outputType: ".io.restorecommerce.address.AddressListResponse",
          },
        ],
        name: "Service",
      },
    ],
    extension: [],
    name: "io/restorecommerce/address.proto",
    package: "io.restorecommerce.address",
    sourceCodeInfo: {
      location: [
        {
          path: [6, 0],
          span: [12, 0, 18, 1],
          leadingDetachedComments: [],
          leadingComments: "\n Microservice definition.\n",
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
    ".io.restorecommerce.address.Address": Address,
    ".io.restorecommerce.address.Address.GeoPoint": Address_GeoPoint,
    ".io.restorecommerce.address.AddressAddition": AddressAddition,
  },
  dependencies: [
    protoMetadata1,
    protoMetadata2,
    protoMetadata3,
    protoMetadata4,
  ],
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
