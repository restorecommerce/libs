/* eslint-disable */
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import {
  Address,
  ContactPerson,
  protoMetadata as protoMetadata6,
} from "./address";
import { Country, protoMetadata as protoMetadata7 } from "./country";
import {
  Status,
  OperationStatus,
  protoMetadata as protoMetadata4,
} from "./status";
import {
  Any,
  protoMetadata as protoMetadata1,
} from "../../google/protobuf/any";
import { Meta, protoMetadata as protoMetadata5 } from "./meta";
import { Subject, protoMetadata as protoMetadata3 } from "./auth";
import { CallContext, CallOptions } from "nice-grpc-common";
import {
  protoMetadata as protoMetadata2,
  ReadRequest,
  DeleteRequest,
  DeleteResponse,
} from "./resource_base";
import { protoMetadata as protoMetadata8, Item } from "./product";
import {
  protoMetadata as protoMetadata9,
  KafkaSubscription,
  Resolver,
} from "./options";
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "io.restorecommerce.fulfillment";

export enum State {
  Undefined = "Undefined",
  Invalid = "Invalid",
  Failed = "Failed",
  Created = "Created",
  Submitted = "Submitted",
  Shipping = "Shipping",
  Fulfilled = "Fulfilled",
  Cancelled = "Cancelled",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function stateFromJSON(object: any): State {
  switch (object) {
    case 0:
    case "Undefined":
      return State.Undefined;
    case 1:
    case "Invalid":
      return State.Invalid;
    case 2:
    case "Failed":
      return State.Failed;
    case 3:
    case "Created":
      return State.Created;
    case 4:
    case "Submitted":
      return State.Submitted;
    case 5:
    case "Shipping":
      return State.Shipping;
    case 6:
    case "Fulfilled":
      return State.Fulfilled;
    case 7:
    case "Cancelled":
      return State.Cancelled;
    case -1:
    case "UNRECOGNIZED":
    default:
      return State.UNRECOGNIZED;
  }
}

export function stateToJSON(object: State): string {
  switch (object) {
    case State.Undefined:
      return "Undefined";
    case State.Invalid:
      return "Invalid";
    case State.Failed:
      return "Failed";
    case State.Created:
      return "Created";
    case State.Submitted:
      return "Submitted";
    case State.Shipping:
      return "Shipping";
    case State.Fulfilled:
      return "Fulfilled";
    case State.Cancelled:
      return "Cancelled";
    case State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function stateToNumber(object: State): number {
  switch (object) {
    case State.Undefined:
      return 0;
    case State.Invalid:
      return 1;
    case State.Failed:
      return 2;
    case State.Created:
      return 3;
    case State.Submitted:
      return 4;
    case State.Shipping:
      return 5;
    case State.Fulfilled:
      return 6;
    case State.Cancelled:
      return 7;
    case State.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface FulfillmentAddress {
  address?: Address;
  country?: Country;
  contact_person?: ContactPerson;
}

export interface Parcel {
  id: string;
  product_id: string;
  product_variant_id: string;
  items: Item[];
  weight_in_kg: number;
  height_in_cm: number;
  width_in_cm: number;
  length_in_cm: number;
}

export interface Label {
  url: string | undefined;
  pdf: string | undefined;
  png: string | undefined;
  parcel_id: string;
  /** filled on Order */
  shipment_number: string;
  /** update by Track */
  state: State;
  /** API status */
  status?: Status;
}

export interface Order {
  reference_id: string;
  parcels: Parcel[];
  sender?: FulfillmentAddress;
  receiver?: FulfillmentAddress;
  notify: string;
}

export interface Event {
  timestamp: number;
  location: string;
  details?: Any;
  status?: Status;
}

export interface Tracking {
  shipment_number: string;
  events: Event[];
  details?: Any;
  status?: Status;
}

/** This is the message of how it get stored to the database */
export interface Fulfillment {
  id: string;
  /** filled by user */
  order?: Order;
  meta?: Meta;
  /** filled by service */
  labels: Label[];
  /** filled by service */
  tracking: Tracking[];
  /** filled by service */
  state: State;
}

export interface FulfillmentList {
  items: Fulfillment[];
  total_count: number;
  subject?: Subject;
}

export interface FulfillmentResponse {
  payload?: Fulfillment;
  status?: Status;
}

export interface FulfillmentListResponse {
  items: FulfillmentResponse[];
  total_count: number;
  operation_status?: OperationStatus;
}

export interface FulfillmentId {
  id: string;
  /** optional */
  shipment_numbers: string[];
  options?: Any;
  subject?: Subject;
}

export interface FulfillmentIdList {
  items: FulfillmentId[];
  total_count: number;
  subject?: Subject;
}

export interface Deleted {
  id: string;
}

function createBaseFulfillmentAddress(): FulfillmentAddress {
  return { address: undefined, country: undefined, contact_person: undefined };
}

export const FulfillmentAddress = {
  encode(
    message: FulfillmentAddress,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== undefined) {
      Address.encode(message.address, writer.uint32(10).fork()).ldelim();
    }
    if (message.country !== undefined) {
      Country.encode(message.country, writer.uint32(18).fork()).ldelim();
    }
    if (message.contact_person !== undefined) {
      ContactPerson.encode(
        message.contact_person,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FulfillmentAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFulfillmentAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = Address.decode(reader, reader.uint32());
          break;
        case 2:
          message.country = Country.decode(reader, reader.uint32());
          break;
        case 3:
          message.contact_person = ContactPerson.decode(
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

  fromJSON(object: any): FulfillmentAddress {
    return {
      address: isSet(object.address)
        ? Address.fromJSON(object.address)
        : undefined,
      country: isSet(object.country)
        ? Country.fromJSON(object.country)
        : undefined,
      contact_person: isSet(object.contact_person)
        ? ContactPerson.fromJSON(object.contact_person)
        : undefined,
    };
  },

  toJSON(message: FulfillmentAddress): unknown {
    const obj: any = {};
    message.address !== undefined &&
      (obj.address = message.address
        ? Address.toJSON(message.address)
        : undefined);
    message.country !== undefined &&
      (obj.country = message.country
        ? Country.toJSON(message.country)
        : undefined);
    message.contact_person !== undefined &&
      (obj.contact_person = message.contact_person
        ? ContactPerson.toJSON(message.contact_person)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<FulfillmentAddress>): FulfillmentAddress {
    const message = createBaseFulfillmentAddress();
    message.address =
      object.address !== undefined && object.address !== null
        ? Address.fromPartial(object.address)
        : undefined;
    message.country =
      object.country !== undefined && object.country !== null
        ? Country.fromPartial(object.country)
        : undefined;
    message.contact_person =
      object.contact_person !== undefined && object.contact_person !== null
        ? ContactPerson.fromPartial(object.contact_person)
        : undefined;
    return message;
  },
};

function createBaseParcel(): Parcel {
  return {
    id: "",
    product_id: "",
    product_variant_id: "",
    items: [],
    weight_in_kg: 0,
    height_in_cm: 0,
    width_in_cm: 0,
    length_in_cm: 0,
  };
}

export const Parcel = {
  encode(
    message: Parcel,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.product_id !== "") {
      writer.uint32(18).string(message.product_id);
    }
    if (message.product_variant_id !== "") {
      writer.uint32(26).string(message.product_variant_id);
    }
    for (const v of message.items) {
      Item.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.weight_in_kg !== 0) {
      writer.uint32(41).double(message.weight_in_kg);
    }
    if (message.height_in_cm !== 0) {
      writer.uint32(49).double(message.height_in_cm);
    }
    if (message.width_in_cm !== 0) {
      writer.uint32(57).double(message.width_in_cm);
    }
    if (message.length_in_cm !== 0) {
      writer.uint32(65).double(message.length_in_cm);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Parcel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParcel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.product_id = reader.string();
          break;
        case 3:
          message.product_variant_id = reader.string();
          break;
        case 4:
          message.items.push(Item.decode(reader, reader.uint32()));
          break;
        case 5:
          message.weight_in_kg = reader.double();
          break;
        case 6:
          message.height_in_cm = reader.double();
          break;
        case 7:
          message.width_in_cm = reader.double();
          break;
        case 8:
          message.length_in_cm = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Parcel {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      product_id: isSet(object.product_id) ? String(object.product_id) : "",
      product_variant_id: isSet(object.product_variant_id)
        ? String(object.product_variant_id)
        : "",
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => Item.fromJSON(e))
        : [],
      weight_in_kg: isSet(object.weight_in_kg)
        ? Number(object.weight_in_kg)
        : 0,
      height_in_cm: isSet(object.height_in_cm)
        ? Number(object.height_in_cm)
        : 0,
      width_in_cm: isSet(object.width_in_cm) ? Number(object.width_in_cm) : 0,
      length_in_cm: isSet(object.length_in_cm)
        ? Number(object.length_in_cm)
        : 0,
    };
  },

  toJSON(message: Parcel): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.product_id !== undefined && (obj.product_id = message.product_id);
    message.product_variant_id !== undefined &&
      (obj.product_variant_id = message.product_variant_id);
    if (message.items) {
      obj.items = message.items.map((e) => (e ? Item.toJSON(e) : undefined));
    } else {
      obj.items = [];
    }
    message.weight_in_kg !== undefined &&
      (obj.weight_in_kg = message.weight_in_kg);
    message.height_in_cm !== undefined &&
      (obj.height_in_cm = message.height_in_cm);
    message.width_in_cm !== undefined &&
      (obj.width_in_cm = message.width_in_cm);
    message.length_in_cm !== undefined &&
      (obj.length_in_cm = message.length_in_cm);
    return obj;
  },

  fromPartial(object: DeepPartial<Parcel>): Parcel {
    const message = createBaseParcel();
    message.id = object.id ?? "";
    message.product_id = object.product_id ?? "";
    message.product_variant_id = object.product_variant_id ?? "";
    message.items = object.items?.map((e) => Item.fromPartial(e)) || [];
    message.weight_in_kg = object.weight_in_kg ?? 0;
    message.height_in_cm = object.height_in_cm ?? 0;
    message.width_in_cm = object.width_in_cm ?? 0;
    message.length_in_cm = object.length_in_cm ?? 0;
    return message;
  },
};

function createBaseLabel(): Label {
  return {
    url: undefined,
    pdf: undefined,
    png: undefined,
    parcel_id: "",
    shipment_number: "",
    state: State.Undefined,
    status: undefined,
  };
}

export const Label = {
  encode(message: Label, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.url !== undefined) {
      writer.uint32(10).string(message.url);
    }
    if (message.pdf !== undefined) {
      writer.uint32(18).string(message.pdf);
    }
    if (message.png !== undefined) {
      writer.uint32(26).string(message.png);
    }
    if (message.parcel_id !== "") {
      writer.uint32(34).string(message.parcel_id);
    }
    if (message.shipment_number !== "") {
      writer.uint32(42).string(message.shipment_number);
    }
    if (message.state !== State.Undefined) {
      writer.uint32(48).int32(stateToNumber(message.state));
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Label {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLabel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.url = reader.string();
          break;
        case 2:
          message.pdf = reader.string();
          break;
        case 3:
          message.png = reader.string();
          break;
        case 4:
          message.parcel_id = reader.string();
          break;
        case 5:
          message.shipment_number = reader.string();
          break;
        case 6:
          message.state = stateFromJSON(reader.int32());
          break;
        case 7:
          message.status = Status.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Label {
    return {
      url: isSet(object.url) ? String(object.url) : undefined,
      pdf: isSet(object.pdf) ? String(object.pdf) : undefined,
      png: isSet(object.png) ? String(object.png) : undefined,
      parcel_id: isSet(object.parcel_id) ? String(object.parcel_id) : "",
      shipment_number: isSet(object.shipment_number)
        ? String(object.shipment_number)
        : "",
      state: isSet(object.state)
        ? stateFromJSON(object.state)
        : State.Undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: Label): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    message.pdf !== undefined && (obj.pdf = message.pdf);
    message.png !== undefined && (obj.png = message.png);
    message.parcel_id !== undefined && (obj.parcel_id = message.parcel_id);
    message.shipment_number !== undefined &&
      (obj.shipment_number = message.shipment_number);
    message.state !== undefined && (obj.state = stateToJSON(message.state));
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Label>): Label {
    const message = createBaseLabel();
    message.url = object.url ?? undefined;
    message.pdf = object.pdf ?? undefined;
    message.png = object.png ?? undefined;
    message.parcel_id = object.parcel_id ?? "";
    message.shipment_number = object.shipment_number ?? "";
    message.state = object.state ?? State.Undefined;
    message.status =
      object.status !== undefined && object.status !== null
        ? Status.fromPartial(object.status)
        : undefined;
    return message;
  },
};

function createBaseOrder(): Order {
  return {
    reference_id: "",
    parcels: [],
    sender: undefined,
    receiver: undefined,
    notify: "",
  };
}

export const Order = {
  encode(message: Order, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reference_id !== "") {
      writer.uint32(10).string(message.reference_id);
    }
    for (const v of message.parcels) {
      Parcel.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.sender !== undefined) {
      FulfillmentAddress.encode(
        message.sender,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.receiver !== undefined) {
      FulfillmentAddress.encode(
        message.receiver,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.notify !== "") {
      writer.uint32(42).string(message.notify);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Order {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reference_id = reader.string();
          break;
        case 2:
          message.parcels.push(Parcel.decode(reader, reader.uint32()));
          break;
        case 3:
          message.sender = FulfillmentAddress.decode(reader, reader.uint32());
          break;
        case 4:
          message.receiver = FulfillmentAddress.decode(reader, reader.uint32());
          break;
        case 5:
          message.notify = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Order {
    return {
      reference_id: isSet(object.reference_id)
        ? String(object.reference_id)
        : "",
      parcels: Array.isArray(object?.parcels)
        ? object.parcels.map((e: any) => Parcel.fromJSON(e))
        : [],
      sender: isSet(object.sender)
        ? FulfillmentAddress.fromJSON(object.sender)
        : undefined,
      receiver: isSet(object.receiver)
        ? FulfillmentAddress.fromJSON(object.receiver)
        : undefined,
      notify: isSet(object.notify) ? String(object.notify) : "",
    };
  },

  toJSON(message: Order): unknown {
    const obj: any = {};
    message.reference_id !== undefined &&
      (obj.reference_id = message.reference_id);
    if (message.parcels) {
      obj.parcels = message.parcels.map((e) =>
        e ? Parcel.toJSON(e) : undefined
      );
    } else {
      obj.parcels = [];
    }
    message.sender !== undefined &&
      (obj.sender = message.sender
        ? FulfillmentAddress.toJSON(message.sender)
        : undefined);
    message.receiver !== undefined &&
      (obj.receiver = message.receiver
        ? FulfillmentAddress.toJSON(message.receiver)
        : undefined);
    message.notify !== undefined && (obj.notify = message.notify);
    return obj;
  },

  fromPartial(object: DeepPartial<Order>): Order {
    const message = createBaseOrder();
    message.reference_id = object.reference_id ?? "";
    message.parcels = object.parcels?.map((e) => Parcel.fromPartial(e)) || [];
    message.sender =
      object.sender !== undefined && object.sender !== null
        ? FulfillmentAddress.fromPartial(object.sender)
        : undefined;
    message.receiver =
      object.receiver !== undefined && object.receiver !== null
        ? FulfillmentAddress.fromPartial(object.receiver)
        : undefined;
    message.notify = object.notify ?? "";
    return message;
  },
};

function createBaseEvent(): Event {
  return { timestamp: 0, location: "", details: undefined, status: undefined };
}

export const Event = {
  encode(message: Event, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timestamp !== 0) {
      writer.uint32(8).int64(message.timestamp);
    }
    if (message.location !== "") {
      writer.uint32(18).string(message.location);
    }
    if (message.details !== undefined) {
      Any.encode(message.details, writer.uint32(26).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Event {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.location = reader.string();
          break;
        case 3:
          message.details = Any.decode(reader, reader.uint32());
          break;
        case 4:
          message.status = Status.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Event {
    return {
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      location: isSet(object.location) ? String(object.location) : "",
      details: isSet(object.details) ? Any.fromJSON(object.details) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: Event): unknown {
    const obj: any = {};
    message.timestamp !== undefined &&
      (obj.timestamp = Math.round(message.timestamp));
    message.location !== undefined && (obj.location = message.location);
    message.details !== undefined &&
      (obj.details = message.details ? Any.toJSON(message.details) : undefined);
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Event>): Event {
    const message = createBaseEvent();
    message.timestamp = object.timestamp ?? 0;
    message.location = object.location ?? "";
    message.details =
      object.details !== undefined && object.details !== null
        ? Any.fromPartial(object.details)
        : undefined;
    message.status =
      object.status !== undefined && object.status !== null
        ? Status.fromPartial(object.status)
        : undefined;
    return message;
  },
};

function createBaseTracking(): Tracking {
  return {
    shipment_number: "",
    events: [],
    details: undefined,
    status: undefined,
  };
}

export const Tracking = {
  encode(
    message: Tracking,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.shipment_number !== "") {
      writer.uint32(10).string(message.shipment_number);
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.details !== undefined) {
      Any.encode(message.details, writer.uint32(34).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Tracking {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTracking();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.shipment_number = reader.string();
          break;
        case 3:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        case 4:
          message.details = Any.decode(reader, reader.uint32());
          break;
        case 5:
          message.status = Status.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Tracking {
    return {
      shipment_number: isSet(object.shipment_number)
        ? String(object.shipment_number)
        : "",
      events: Array.isArray(object?.events)
        ? object.events.map((e: any) => Event.fromJSON(e))
        : [],
      details: isSet(object.details) ? Any.fromJSON(object.details) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: Tracking): unknown {
    const obj: any = {};
    message.shipment_number !== undefined &&
      (obj.shipment_number = message.shipment_number);
    if (message.events) {
      obj.events = message.events.map((e) => (e ? Event.toJSON(e) : undefined));
    } else {
      obj.events = [];
    }
    message.details !== undefined &&
      (obj.details = message.details ? Any.toJSON(message.details) : undefined);
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Tracking>): Tracking {
    const message = createBaseTracking();
    message.shipment_number = object.shipment_number ?? "";
    message.events = object.events?.map((e) => Event.fromPartial(e)) || [];
    message.details =
      object.details !== undefined && object.details !== null
        ? Any.fromPartial(object.details)
        : undefined;
    message.status =
      object.status !== undefined && object.status !== null
        ? Status.fromPartial(object.status)
        : undefined;
    return message;
  },
};

function createBaseFulfillment(): Fulfillment {
  return {
    id: "",
    order: undefined,
    meta: undefined,
    labels: [],
    tracking: [],
    state: State.Undefined,
  };
}

export const Fulfillment = {
  encode(
    message: Fulfillment,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(18).fork()).ldelim();
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.labels) {
      Label.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.tracking) {
      Tracking.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.state !== State.Undefined) {
      writer.uint32(48).int32(stateToNumber(message.state));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Fulfillment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFulfillment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.order = Order.decode(reader, reader.uint32());
          break;
        case 3:
          message.meta = Meta.decode(reader, reader.uint32());
          break;
        case 4:
          message.labels.push(Label.decode(reader, reader.uint32()));
          break;
        case 5:
          message.tracking.push(Tracking.decode(reader, reader.uint32()));
          break;
        case 6:
          message.state = stateFromJSON(reader.int32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Fulfillment {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      order: isSet(object.order) ? Order.fromJSON(object.order) : undefined,
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      labels: Array.isArray(object?.labels)
        ? object.labels.map((e: any) => Label.fromJSON(e))
        : [],
      tracking: Array.isArray(object?.tracking)
        ? object.tracking.map((e: any) => Tracking.fromJSON(e))
        : [],
      state: isSet(object.state)
        ? stateFromJSON(object.state)
        : State.Undefined,
    };
  },

  toJSON(message: Fulfillment): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.order !== undefined &&
      (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    if (message.labels) {
      obj.labels = message.labels.map((e) => (e ? Label.toJSON(e) : undefined));
    } else {
      obj.labels = [];
    }
    if (message.tracking) {
      obj.tracking = message.tracking.map((e) =>
        e ? Tracking.toJSON(e) : undefined
      );
    } else {
      obj.tracking = [];
    }
    message.state !== undefined && (obj.state = stateToJSON(message.state));
    return obj;
  },

  fromPartial(object: DeepPartial<Fulfillment>): Fulfillment {
    const message = createBaseFulfillment();
    message.id = object.id ?? "";
    message.order =
      object.order !== undefined && object.order !== null
        ? Order.fromPartial(object.order)
        : undefined;
    message.meta =
      object.meta !== undefined && object.meta !== null
        ? Meta.fromPartial(object.meta)
        : undefined;
    message.labels = object.labels?.map((e) => Label.fromPartial(e)) || [];
    message.tracking =
      object.tracking?.map((e) => Tracking.fromPartial(e)) || [];
    message.state = object.state ?? State.Undefined;
    return message;
  },
};

function createBaseFulfillmentList(): FulfillmentList {
  return { items: [], total_count: 0, subject: undefined };
}

export const FulfillmentList = {
  encode(
    message: FulfillmentList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      Fulfillment.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FulfillmentList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFulfillmentList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Fulfillment.decode(reader, reader.uint32()));
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

  fromJSON(object: any): FulfillmentList {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => Fulfillment.fromJSON(e))
        : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      subject: isSet(object.subject)
        ? Subject.fromJSON(object.subject)
        : undefined,
    };
  },

  toJSON(message: FulfillmentList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? Fulfillment.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.total_count !== undefined &&
      (obj.total_count = Math.round(message.total_count));
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<FulfillmentList>): FulfillmentList {
    const message = createBaseFulfillmentList();
    message.items = object.items?.map((e) => Fulfillment.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.subject =
      object.subject !== undefined && object.subject !== null
        ? Subject.fromPartial(object.subject)
        : undefined;
    return message;
  },
};

function createBaseFulfillmentResponse(): FulfillmentResponse {
  return { payload: undefined, status: undefined };
}

export const FulfillmentResponse = {
  encode(
    message: FulfillmentResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.payload !== undefined) {
      Fulfillment.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FulfillmentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFulfillmentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = Fulfillment.decode(reader, reader.uint32());
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

  fromJSON(object: any): FulfillmentResponse {
    return {
      payload: isSet(object.payload)
        ? Fulfillment.fromJSON(object.payload)
        : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: FulfillmentResponse): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload
        ? Fulfillment.toJSON(message.payload)
        : undefined);
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<FulfillmentResponse>): FulfillmentResponse {
    const message = createBaseFulfillmentResponse();
    message.payload =
      object.payload !== undefined && object.payload !== null
        ? Fulfillment.fromPartial(object.payload)
        : undefined;
    message.status =
      object.status !== undefined && object.status !== null
        ? Status.fromPartial(object.status)
        : undefined;
    return message;
  },
};

function createBaseFulfillmentListResponse(): FulfillmentListResponse {
  return { items: [], total_count: 0, operation_status: undefined };
}

export const FulfillmentListResponse = {
  encode(
    message: FulfillmentListResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      FulfillmentResponse.encode(v!, writer.uint32(10).fork()).ldelim();
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FulfillmentListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFulfillmentListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            FulfillmentResponse.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): FulfillmentListResponse {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => FulfillmentResponse.fromJSON(e))
        : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      operation_status: isSet(object.operation_status)
        ? OperationStatus.fromJSON(object.operation_status)
        : undefined,
    };
  },

  toJSON(message: FulfillmentListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? FulfillmentResponse.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.total_count !== undefined &&
      (obj.total_count = Math.round(message.total_count));
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status
        ? OperationStatus.toJSON(message.operation_status)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<FulfillmentListResponse>
  ): FulfillmentListResponse {
    const message = createBaseFulfillmentListResponse();
    message.items =
      object.items?.map((e) => FulfillmentResponse.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.operation_status =
      object.operation_status !== undefined && object.operation_status !== null
        ? OperationStatus.fromPartial(object.operation_status)
        : undefined;
    return message;
  },
};

function createBaseFulfillmentId(): FulfillmentId {
  return {
    id: "",
    shipment_numbers: [],
    options: undefined,
    subject: undefined,
  };
}

export const FulfillmentId = {
  encode(
    message: FulfillmentId,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.shipment_numbers) {
      writer.uint32(18).string(v!);
    }
    if (message.options !== undefined) {
      Any.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FulfillmentId {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFulfillmentId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.shipment_numbers.push(reader.string());
          break;
        case 3:
          message.options = Any.decode(reader, reader.uint32());
          break;
        case 4:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FulfillmentId {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      shipment_numbers: Array.isArray(object?.shipment_numbers)
        ? object.shipment_numbers.map((e: any) => String(e))
        : [],
      options: isSet(object.options) ? Any.fromJSON(object.options) : undefined,
      subject: isSet(object.subject)
        ? Subject.fromJSON(object.subject)
        : undefined,
    };
  },

  toJSON(message: FulfillmentId): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.shipment_numbers) {
      obj.shipment_numbers = message.shipment_numbers.map((e) => e);
    } else {
      obj.shipment_numbers = [];
    }
    message.options !== undefined &&
      (obj.options = message.options ? Any.toJSON(message.options) : undefined);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<FulfillmentId>): FulfillmentId {
    const message = createBaseFulfillmentId();
    message.id = object.id ?? "";
    message.shipment_numbers = object.shipment_numbers?.map((e) => e) || [];
    message.options =
      object.options !== undefined && object.options !== null
        ? Any.fromPartial(object.options)
        : undefined;
    message.subject =
      object.subject !== undefined && object.subject !== null
        ? Subject.fromPartial(object.subject)
        : undefined;
    return message;
  },
};

function createBaseFulfillmentIdList(): FulfillmentIdList {
  return { items: [], total_count: 0, subject: undefined };
}

export const FulfillmentIdList = {
  encode(
    message: FulfillmentIdList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      FulfillmentId.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FulfillmentIdList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFulfillmentIdList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(FulfillmentId.decode(reader, reader.uint32()));
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

  fromJSON(object: any): FulfillmentIdList {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => FulfillmentId.fromJSON(e))
        : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      subject: isSet(object.subject)
        ? Subject.fromJSON(object.subject)
        : undefined,
    };
  },

  toJSON(message: FulfillmentIdList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? FulfillmentId.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.total_count !== undefined &&
      (obj.total_count = Math.round(message.total_count));
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<FulfillmentIdList>): FulfillmentIdList {
    const message = createBaseFulfillmentIdList();
    message.items =
      object.items?.map((e) => FulfillmentId.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.subject =
      object.subject !== undefined && object.subject !== null
        ? Subject.fromPartial(object.subject)
        : undefined;
    return message;
  },
};

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

/** Microservice definition. */
export type ServiceDefinition = typeof ServiceDefinition;
export const ServiceDefinition = {
  name: "Service",
  fullName: "io.restorecommerce.fulfillment.Service",
  methods: {
    /** Returns a list of shipment IDs. */
    read: {
      name: "Read",
      requestType: ReadRequest,
      requestStream: false,
      responseType: FulfillmentListResponse,
      responseStream: false,
      options: {},
    },
    /** Creates fulfillment orders */
    create: {
      name: "Create",
      requestType: FulfillmentList,
      requestStream: false,
      responseType: FulfillmentListResponse,
      responseStream: false,
      options: {},
    },
    /** Updates fulfillment orders unless Status is beyond Submit */
    update: {
      name: "Update",
      requestType: FulfillmentList,
      requestStream: false,
      responseType: FulfillmentListResponse,
      responseStream: false,
      options: {},
    },
    /** Creates or Updates fulfillment orders unless Status is beyond Submit */
    upsert: {
      name: "Upsert",
      requestType: FulfillmentList,
      requestStream: false,
      responseType: FulfillmentListResponse,
      responseStream: false,
      options: {},
    },
    /** Creates, Submits and Updates fulfillment orders against API */
    submit: {
      name: "Submit",
      requestType: FulfillmentList,
      requestStream: false,
      responseType: FulfillmentListResponse,
      responseStream: false,
      options: {},
    },
    /** Track a batch of fulfillments */
    track: {
      name: "Track",
      requestType: FulfillmentIdList,
      requestStream: false,
      responseType: FulfillmentListResponse,
      responseStream: false,
      options: {},
    },
    /** Cancel a batch of fulfillments */
    cancel: {
      name: "Cancel",
      requestType: FulfillmentIdList,
      requestStream: false,
      responseType: FulfillmentListResponse,
      responseStream: false,
      options: {},
    },
    /** Delete a batch of fulfillments from the database */
    delete: {
      name: "Delete",
      requestType: DeleteRequest,
      requestStream: false,
      responseType: DeleteResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface ServiceServiceImplementation<CallContextExt = {}> {
  /** Returns a list of shipment IDs. */
  read(
    request: ReadRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<FulfillmentListResponse>>;
  /** Creates fulfillment orders */
  create(
    request: FulfillmentList,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<FulfillmentListResponse>>;
  /** Updates fulfillment orders unless Status is beyond Submit */
  update(
    request: FulfillmentList,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<FulfillmentListResponse>>;
  /** Creates or Updates fulfillment orders unless Status is beyond Submit */
  upsert(
    request: FulfillmentList,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<FulfillmentListResponse>>;
  /** Creates, Submits and Updates fulfillment orders against API */
  submit(
    request: FulfillmentList,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<FulfillmentListResponse>>;
  /** Track a batch of fulfillments */
  track(
    request: FulfillmentIdList,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<FulfillmentListResponse>>;
  /** Cancel a batch of fulfillments */
  cancel(
    request: FulfillmentIdList,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<FulfillmentListResponse>>;
  /** Delete a batch of fulfillments from the database */
  delete(
    request: DeleteRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<DeleteResponse>>;
}

export interface ServiceClient<CallOptionsExt = {}> {
  /** Returns a list of shipment IDs. */
  read(
    request: DeepPartial<ReadRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<FulfillmentListResponse>;
  /** Creates fulfillment orders */
  create(
    request: DeepPartial<FulfillmentList>,
    options?: CallOptions & CallOptionsExt
  ): Promise<FulfillmentListResponse>;
  /** Updates fulfillment orders unless Status is beyond Submit */
  update(
    request: DeepPartial<FulfillmentList>,
    options?: CallOptions & CallOptionsExt
  ): Promise<FulfillmentListResponse>;
  /** Creates or Updates fulfillment orders unless Status is beyond Submit */
  upsert(
    request: DeepPartial<FulfillmentList>,
    options?: CallOptions & CallOptionsExt
  ): Promise<FulfillmentListResponse>;
  /** Creates, Submits and Updates fulfillment orders against API */
  submit(
    request: DeepPartial<FulfillmentList>,
    options?: CallOptions & CallOptionsExt
  ): Promise<FulfillmentListResponse>;
  /** Track a batch of fulfillments */
  track(
    request: DeepPartial<FulfillmentIdList>,
    options?: CallOptions & CallOptionsExt
  ): Promise<FulfillmentListResponse>;
  /** Cancel a batch of fulfillments */
  cancel(
    request: DeepPartial<FulfillmentIdList>,
    options?: CallOptions & CallOptionsExt
  ): Promise<FulfillmentListResponse>;
  /** Delete a batch of fulfillments from the database */
  delete(
    request: DeepPartial<DeleteRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<DeleteResponse>;
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
    name: "io/restorecommerce/fulfillment.proto",
    package: "io.restorecommerce.fulfillment",
    dependency: [
      "google/protobuf/any.proto",
      "io/restorecommerce/resource_base.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/address.proto",
      "io/restorecommerce/country.proto",
      "io/restorecommerce/product.proto",
      "io/restorecommerce/options.proto",
    ],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        name: "FulfillmentAddress",
        field: [
          {
            name: "address",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.address.Address",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "address",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "country",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.country.Country",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "country",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "contact_person",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.address.ContactPerson",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "contactPerson",
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
        name: "Parcel",
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
            name: "product_id",
            number: 2,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "productId",
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
            name: "product_variant_id",
            number: 3,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "productVariantId",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "items",
            number: 4,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.product.Item",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "items",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "weight_in_kg",
            number: 5,
            label: 1,
            type: 1,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "weightInKg",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "height_in_cm",
            number: 6,
            label: 1,
            type: 1,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "heightInCm",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "width_in_cm",
            number: 7,
            label: 1,
            type: 1,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "widthInCm",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "length_in_cm",
            number: 8,
            label: 1,
            type: 1,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "lengthInCm",
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
        name: "Label",
        field: [
          {
            name: "url",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "url",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "pdf",
            number: 2,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "pdf",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "png",
            number: 3,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "png",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "parcel_id",
            number: 4,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "parcelId",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "shipment_number",
            number: 5,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "shipmentNumber",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "state",
            number: 6,
            label: 1,
            type: 14,
            typeName: ".io.restorecommerce.fulfillment.State",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "state",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "status",
            number: 7,
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
        oneofDecl: [{ name: "type", options: undefined }],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "Order",
        field: [
          {
            name: "reference_id",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "referenceId",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "parcels",
            number: 2,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Parcel",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "parcels",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "sender",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.FulfillmentAddress",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "sender",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "receiver",
            number: 4,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.FulfillmentAddress",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "receiver",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "notify",
            number: 5,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "notify",
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
        name: "Event",
        field: [
          {
            name: "timestamp",
            number: 1,
            label: 1,
            type: 3,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "timestamp",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "location",
            number: 2,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "location",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "details",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".google.protobuf.Any",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "details",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "status",
            number: 4,
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
        name: "Tracking",
        field: [
          {
            name: "shipment_number",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "shipmentNumber",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "events",
            number: 3,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Event",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "events",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "details",
            number: 4,
            label: 1,
            type: 11,
            typeName: ".google.protobuf.Any",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "details",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "status",
            number: 5,
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
        name: "Fulfillment",
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
            name: "order",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Order",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "order",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "meta",
            number: 3,
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
            name: "labels",
            number: 4,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Label",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "labels",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "tracking",
            number: 5,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Tracking",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "tracking",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "state",
            number: 6,
            label: 1,
            type: 14,
            typeName: ".io.restorecommerce.fulfillment.State",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "state",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: {
          messageSetWireFormat: false,
          noStandardDescriptorAccessor: false,
          deprecated: false,
          mapEntry: false,
          uninterpretedOption: [],
        },
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "FulfillmentList",
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Fulfillment",
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
        name: "FulfillmentResponse",
        field: [
          {
            name: "payload",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Fulfillment",
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
        name: "FulfillmentListResponse",
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.FulfillmentResponse",
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
        name: "FulfillmentId",
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
            name: "shipment_numbers",
            number: 2,
            label: 3,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "shipmentNumbers",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "options",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".google.protobuf.Any",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "options",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "subject",
            number: 4,
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
        name: "FulfillmentIdList",
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.FulfillmentId",
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
    ],
    enumType: [
      {
        name: "State",
        value: [
          { name: "Undefined", number: 0, options: undefined },
          { name: "Invalid", number: 1, options: undefined },
          { name: "Failed", number: 2, options: undefined },
          { name: "Created", number: 3, options: undefined },
          { name: "Submitted", number: 4, options: undefined },
          { name: "Shipping", number: 5, options: undefined },
          { name: "Fulfilled", number: 6, options: undefined },
          { name: "Cancelled", number: 7, options: undefined },
        ],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
    ],
    service: [
      {
        name: "Service",
        method: [
          {
            name: "Read",
            inputType: ".io.restorecommerce.resourcebase.ReadRequest",
            outputType:
              ".io.restorecommerce.fulfillment.FulfillmentListResponse",
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
            inputType: ".io.restorecommerce.fulfillment.FulfillmentList",
            outputType:
              ".io.restorecommerce.fulfillment.FulfillmentListResponse",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Update",
            inputType: ".io.restorecommerce.fulfillment.FulfillmentList",
            outputType:
              ".io.restorecommerce.fulfillment.FulfillmentListResponse",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Upsert",
            inputType: ".io.restorecommerce.fulfillment.FulfillmentList",
            outputType:
              ".io.restorecommerce.fulfillment.FulfillmentListResponse",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Submit",
            inputType: ".io.restorecommerce.fulfillment.FulfillmentList",
            outputType:
              ".io.restorecommerce.fulfillment.FulfillmentListResponse",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Track",
            inputType: ".io.restorecommerce.fulfillment.FulfillmentIdList",
            outputType:
              ".io.restorecommerce.fulfillment.FulfillmentListResponse",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Cancel",
            inputType: ".io.restorecommerce.fulfillment.FulfillmentIdList",
            outputType:
              ".io.restorecommerce.fulfillment.FulfillmentListResponse",
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
        ],
        options: { deprecated: false, uninterpretedOption: [] },
      },
    ],
    extension: [],
    options: undefined,
    sourceCodeInfo: {
      location: [
        {
          path: [6, 0],
          span: [17, 0, 61, 1],
          leadingComments: "*\nMicroservice definition.\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [6, 0, 2, 0],
          span: [23, 2, 25, 3],
          leadingComments: "*\nReturns a list of shipment IDs.\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [6, 0, 2, 1],
          span: [30, 2, 65],
          leadingComments: "*\nCreates fulfillment orders\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [6, 0, 2, 2],
          span: [35, 2, 65],
          leadingComments:
            "*\nUpdates fulfillment orders unless Status is beyond Submit\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [6, 0, 2, 3],
          span: [40, 2, 65],
          leadingComments:
            "*\nCreates or Updates fulfillment orders unless Status is beyond Submit\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [6, 0, 2, 4],
          span: [45, 2, 65],
          leadingComments:
            "*\nCreates, Submits and Updates fulfillment orders against API\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [6, 0, 2, 5],
          span: [50, 2, 66],
          leadingComments: "*\nTrack a batch of fulfillments\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [6, 0, 2, 6],
          span: [55, 2, 67],
          leadingComments: "*\nCancel a batch of fulfillments\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [6, 0, 2, 7],
          span: [60, 2, 118],
          leadingComments:
            "*\nDelete a batch of fulfillments from the database\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [4, 2, 2, 4],
          span: [106, 2, 29],
          leadingComments: "",
          trailingComments: "filled on Order\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 2, 2, 5],
          span: [107, 2, 18],
          leadingComments: "",
          trailingComments: "update by Track\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 2, 2, 6],
          span: [108, 2, 46],
          leadingComments: "",
          trailingComments: "API status\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 6],
          span: [136, 0, 151, 1],
          leadingComments:
            "*\nThis is the message of how it get stored to the database\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [4, 6, 2, 1],
          span: [146, 2, 18],
          leadingComments: "",
          trailingComments: "filled by user\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 6, 2, 3],
          span: [148, 2, 28],
          leadingComments: "",
          trailingComments: "filled by service\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 6, 2, 4],
          span: [149, 2, 33],
          leadingComments: "",
          trailingComments: "filled by service\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 6, 2, 5],
          span: [150, 2, 18],
          leadingComments: "",
          trailingComments: "filled by service\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 10, 2, 1],
          span: [172, 2, 39],
          leadingComments: "",
          trailingComments: "optional\n",
          leadingDetachedComments: [],
        },
      ],
    },
    syntax: "proto3",
  }),
  references: {
    ".io.restorecommerce.fulfillment.State": State,
    ".io.restorecommerce.fulfillment.FulfillmentAddress": FulfillmentAddress,
    ".io.restorecommerce.fulfillment.Parcel": Parcel,
    ".io.restorecommerce.fulfillment.Label": Label,
    ".io.restorecommerce.fulfillment.Order": Order,
    ".io.restorecommerce.fulfillment.Event": Event,
    ".io.restorecommerce.fulfillment.Tracking": Tracking,
    ".io.restorecommerce.fulfillment.Fulfillment": Fulfillment,
    ".io.restorecommerce.fulfillment.FulfillmentList": FulfillmentList,
    ".io.restorecommerce.fulfillment.FulfillmentResponse": FulfillmentResponse,
    ".io.restorecommerce.fulfillment.FulfillmentListResponse":
      FulfillmentListResponse,
    ".io.restorecommerce.fulfillment.FulfillmentId": FulfillmentId,
    ".io.restorecommerce.fulfillment.FulfillmentIdList": FulfillmentIdList,
    ".io.restorecommerce.fulfillment.Deleted": Deleted,
  },
  dependencies: [
    protoMetadata1,
    protoMetadata2,
    protoMetadata3,
    protoMetadata4,
    protoMetadata5,
    protoMetadata6,
    protoMetadata7,
    protoMetadata8,
    protoMetadata9,
  ],
  options: {
    messages: {
      Parcel: {
        fields: {
          product_id: {
            resolver: Resolver.decode(
              Buffer.from(
                "CjouaW8ucmVzdG9yZWNvbW1lcmNlLmZ1bGZpbGxtZW50X3Byb2R1Y3QuRnVsZmlsbG1lbnRQcm9kdWN0EghyZXNvdXJjZRoTZnVsZmlsbG1lbnRfcHJvZHVjdCIEUmVhZCoHcHJvZHVjdA==",
                "base64"
              )
            ),
          },
        },
      },
      Fulfillment: {
        options: {
          kafka_subscriber: KafkaSubscription.decode(
            Buffer.from(
              "CgxmdWxmaWxsbWVudHMSJ2lvLnJlc3RvcmVjb21tZXJjZS5mdWxmaWxsbWVudC5yZXNvdXJjZRoSZnVsZmlsbG1lbnRDcmVhdGVkIhJmdWxmaWxsbWVudFVwZGF0ZWQqEmZ1bGZpbGxtZW50RGVsZXRlZA==",
              "base64"
            )
          ),
        },
      },
    },
    services: {
      Service: {
        options: { service_name: "fulfillment" },
        methods: { Read: { is_query: true } },
      },
    },
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
