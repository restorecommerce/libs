/* eslint-disable */
import * as Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { Any, protoMetadata as protoMetadata1 } from "../../google/protobuf/any";
import { Address, ContactPerson, protoMetadata as protoMetadata6 } from "./address";
import { protoMetadata as protoMetadata3, Subject } from "./auth";
import { Meta, protoMetadata as protoMetadata5 } from "./meta";
import { KafkaSubscription, protoMetadata as protoMetadata7, Resolver } from "./options";
import { DeleteRequest, DeleteResponse, protoMetadata as protoMetadata2, ReadRequest } from "./resource_base";
import { OperationStatus, protoMetadata as protoMetadata4, Status } from "./status";

export const protobufPackage = "io.restorecommerce.fulfillment";

export enum State {
  Undefined = "Undefined",
  Invalid = "Invalid",
  Failed = "Failed",
  Cancelled = "Cancelled",
  Created = "Created",
  Submitted = "Submitted",
  Shipping = "Shipping",
  Done = "Done",
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
    case "Cancelled":
      return State.Cancelled;
    case 4:
    case "Created":
      return State.Created;
    case 5:
    case "Submitted":
      return State.Submitted;
    case 6:
    case "Shipping":
      return State.Shipping;
    case 7:
    case "Done":
      return State.Done;
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
    case State.Cancelled:
      return "Cancelled";
    case State.Created:
      return "Created";
    case State.Submitted:
      return "Submitted";
    case State.Shipping:
      return "Shipping";
    case State.Done:
      return "Done";
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
    case State.Cancelled:
      return 3;
    case State.Created:
      return 4;
    case State.Submitted:
      return 5;
    case State.Shipping:
      return 6;
    case State.Done:
      return 7;
    case State.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface ShippingAddress {
  address?: Address;
  contact_person?: ContactPerson;
}

export interface Item {
  /** Catalog item! */
  item_id: string;
  name: string;
  description: string;
  taric_code: string;
  quantity: number;
}

export interface Parcel {
  product_id: string;
  product_variant_id: string;
  items: Item[];
  weight_in_kg: number;
  height_in_cm: number;
  width_in_cm: number;
  length_in_cm: number;
}

export interface Label {
  url?: string | undefined;
  pdf?: string | undefined;
  png?:
    | string
    | undefined;
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
  sender?: ShippingAddress;
  receiver?: ShippingAddress;
  notify: string;
}

/** This is the message how it get stored to the database */
export interface Fulfillment {
  id: string;
  order?: Order;
  meta?: Meta;
  /** filled by service */
  labels: Label[];
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

export interface FulfillmentResponseList {
  items: FulfillmentResponse[];
  total_count: number;
  operation_status?: OperationStatus;
}

export interface TrackingRequest {
  fulfillment_id: string;
  /** optional */
  shipment_numbers: string[];
  options?: Any;
}

export interface TrackingRequestList {
  items: TrackingRequest[];
  subject?: Subject;
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

export interface TrackingResult {
  fulfillment?: Fulfillment;
  tracks: Tracking[];
  status?: Status;
}

export interface TrackingResultList {
  items: TrackingResult[];
  operation_status?: OperationStatus;
}

export interface CancelRequestList {
  ids: string[];
  subject?: Subject;
}

export interface Deleted {
  id: string;
}

function createBaseShippingAddress(): ShippingAddress {
  return { address: undefined, contact_person: undefined };
}

export const ShippingAddress = {
  encode(message: ShippingAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== undefined) {
      Address.encode(message.address, writer.uint32(10).fork()).ldelim();
    }
    if (message.contact_person !== undefined) {
      ContactPerson.encode(message.contact_person, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ShippingAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShippingAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = Address.decode(reader, reader.uint32());
          break;
        case 2:
          message.contact_person = ContactPerson.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ShippingAddress {
    return {
      address: isSet(object.address) ? Address.fromJSON(object.address) : undefined,
      contact_person: isSet(object.contact_person) ? ContactPerson.fromJSON(object.contact_person) : undefined,
    };
  },

  toJSON(message: ShippingAddress): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address ? Address.toJSON(message.address) : undefined);
    message.contact_person !== undefined &&
      (obj.contact_person = message.contact_person ? ContactPerson.toJSON(message.contact_person) : undefined);
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
    message.contact_person = (object.contact_person !== undefined && object.contact_person !== null)
      ? ContactPerson.fromPartial(object.contact_person)
      : undefined;
    return message;
  },
};

function createBaseItem(): Item {
  return { item_id: "", name: "", description: "", taric_code: "", quantity: 0 };
}

export const Item = {
  encode(message: Item, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.item_id !== "") {
      writer.uint32(10).string(message.item_id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.taric_code !== "") {
      writer.uint32(34).string(message.taric_code);
    }
    if (message.quantity !== 0) {
      writer.uint32(40).int32(message.quantity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Item {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.item_id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.taric_code = reader.string();
          break;
        case 5:
          message.quantity = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Item {
    return {
      item_id: isSet(object.item_id) ? String(object.item_id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      taric_code: isSet(object.taric_code) ? String(object.taric_code) : "",
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
    };
  },

  toJSON(message: Item): unknown {
    const obj: any = {};
    message.item_id !== undefined && (obj.item_id = message.item_id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.taric_code !== undefined && (obj.taric_code = message.taric_code);
    message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
    return obj;
  },

  create(base?: DeepPartial<Item>): Item {
    return Item.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Item>): Item {
    const message = createBaseItem();
    message.item_id = object.item_id ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.taric_code = object.taric_code ?? "";
    message.quantity = object.quantity ?? 0;
    return message;
  },
};

function createBaseParcel(): Parcel {
  return {
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
  encode(message: Parcel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.product_id !== "") {
      writer.uint32(10).string(message.product_id);
    }
    if (message.product_variant_id !== "") {
      writer.uint32(18).string(message.product_variant_id);
    }
    for (const v of message.items) {
      Item.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.weight_in_kg !== 0) {
      writer.uint32(37).float(message.weight_in_kg);
    }
    if (message.height_in_cm !== 0) {
      writer.uint32(45).float(message.height_in_cm);
    }
    if (message.width_in_cm !== 0) {
      writer.uint32(53).float(message.width_in_cm);
    }
    if (message.length_in_cm !== 0) {
      writer.uint32(61).float(message.length_in_cm);
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
          message.product_id = reader.string();
          break;
        case 2:
          message.product_variant_id = reader.string();
          break;
        case 3:
          message.items.push(Item.decode(reader, reader.uint32()));
          break;
        case 4:
          message.weight_in_kg = reader.float();
          break;
        case 5:
          message.height_in_cm = reader.float();
          break;
        case 6:
          message.width_in_cm = reader.float();
          break;
        case 7:
          message.length_in_cm = reader.float();
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
      product_id: isSet(object.product_id) ? String(object.product_id) : "",
      product_variant_id: isSet(object.product_variant_id) ? String(object.product_variant_id) : "",
      items: Array.isArray(object?.items) ? object.items.map((e: any) => Item.fromJSON(e)) : [],
      weight_in_kg: isSet(object.weight_in_kg) ? Number(object.weight_in_kg) : 0,
      height_in_cm: isSet(object.height_in_cm) ? Number(object.height_in_cm) : 0,
      width_in_cm: isSet(object.width_in_cm) ? Number(object.width_in_cm) : 0,
      length_in_cm: isSet(object.length_in_cm) ? Number(object.length_in_cm) : 0,
    };
  },

  toJSON(message: Parcel): unknown {
    const obj: any = {};
    message.product_id !== undefined && (obj.product_id = message.product_id);
    message.product_variant_id !== undefined && (obj.product_variant_id = message.product_variant_id);
    if (message.items) {
      obj.items = message.items.map((e) => e ? Item.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.weight_in_kg !== undefined && (obj.weight_in_kg = message.weight_in_kg);
    message.height_in_cm !== undefined && (obj.height_in_cm = message.height_in_cm);
    message.width_in_cm !== undefined && (obj.width_in_cm = message.width_in_cm);
    message.length_in_cm !== undefined && (obj.length_in_cm = message.length_in_cm);
    return obj;
  },

  create(base?: DeepPartial<Parcel>): Parcel {
    return Parcel.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Parcel>): Parcel {
    const message = createBaseParcel();
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
    if (message.shipment_number !== "") {
      writer.uint32(34).string(message.shipment_number);
    }
    if (message.state !== State.Undefined) {
      writer.uint32(40).int32(stateToNumber(message.state));
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(50).fork()).ldelim();
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
          message.shipment_number = reader.string();
          break;
        case 5:
          message.state = stateFromJSON(reader.int32());
          break;
        case 6:
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
      shipment_number: isSet(object.shipment_number) ? String(object.shipment_number) : "",
      state: isSet(object.state) ? stateFromJSON(object.state) : State.Undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: Label): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    message.pdf !== undefined && (obj.pdf = message.pdf);
    message.png !== undefined && (obj.png = message.png);
    message.shipment_number !== undefined && (obj.shipment_number = message.shipment_number);
    message.state !== undefined && (obj.state = stateToJSON(message.state));
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<Label>): Label {
    return Label.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Label>): Label {
    const message = createBaseLabel();
    message.url = object.url ?? undefined;
    message.pdf = object.pdf ?? undefined;
    message.png = object.png ?? undefined;
    message.shipment_number = object.shipment_number ?? "";
    message.state = object.state ?? State.Undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBaseOrder(): Order {
  return { reference_id: "", parcels: [], sender: undefined, receiver: undefined, notify: "" };
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
      ShippingAddress.encode(message.sender, writer.uint32(26).fork()).ldelim();
    }
    if (message.receiver !== undefined) {
      ShippingAddress.encode(message.receiver, writer.uint32(34).fork()).ldelim();
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
          message.sender = ShippingAddress.decode(reader, reader.uint32());
          break;
        case 4:
          message.receiver = ShippingAddress.decode(reader, reader.uint32());
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
      reference_id: isSet(object.reference_id) ? String(object.reference_id) : "",
      parcels: Array.isArray(object?.parcels) ? object.parcels.map((e: any) => Parcel.fromJSON(e)) : [],
      sender: isSet(object.sender) ? ShippingAddress.fromJSON(object.sender) : undefined,
      receiver: isSet(object.receiver) ? ShippingAddress.fromJSON(object.receiver) : undefined,
      notify: isSet(object.notify) ? String(object.notify) : "",
    };
  },

  toJSON(message: Order): unknown {
    const obj: any = {};
    message.reference_id !== undefined && (obj.reference_id = message.reference_id);
    if (message.parcels) {
      obj.parcels = message.parcels.map((e) => e ? Parcel.toJSON(e) : undefined);
    } else {
      obj.parcels = [];
    }
    message.sender !== undefined && (obj.sender = message.sender ? ShippingAddress.toJSON(message.sender) : undefined);
    message.receiver !== undefined &&
      (obj.receiver = message.receiver ? ShippingAddress.toJSON(message.receiver) : undefined);
    message.notify !== undefined && (obj.notify = message.notify);
    return obj;
  },

  create(base?: DeepPartial<Order>): Order {
    return Order.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Order>): Order {
    const message = createBaseOrder();
    message.reference_id = object.reference_id ?? "";
    message.parcels = object.parcels?.map((e) => Parcel.fromPartial(e)) || [];
    message.sender = (object.sender !== undefined && object.sender !== null)
      ? ShippingAddress.fromPartial(object.sender)
      : undefined;
    message.receiver = (object.receiver !== undefined && object.receiver !== null)
      ? ShippingAddress.fromPartial(object.receiver)
      : undefined;
    message.notify = object.notify ?? "";
    return message;
  },
};

function createBaseFulfillment(): Fulfillment {
  return { id: "", order: undefined, meta: undefined, labels: [], state: State.Undefined };
}

export const Fulfillment = {
  encode(message: Fulfillment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.state !== State.Undefined) {
      writer.uint32(40).int32(stateToNumber(message.state));
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
      labels: Array.isArray(object?.labels) ? object.labels.map((e: any) => Label.fromJSON(e)) : [],
      state: isSet(object.state) ? stateFromJSON(object.state) : State.Undefined,
    };
  },

  toJSON(message: Fulfillment): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.order !== undefined && (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    if (message.labels) {
      obj.labels = message.labels.map((e) => e ? Label.toJSON(e) : undefined);
    } else {
      obj.labels = [];
    }
    message.state !== undefined && (obj.state = stateToJSON(message.state));
    return obj;
  },

  create(base?: DeepPartial<Fulfillment>): Fulfillment {
    return Fulfillment.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Fulfillment>): Fulfillment {
    const message = createBaseFulfillment();
    message.id = object.id ?? "";
    message.order = (object.order !== undefined && object.order !== null) ? Order.fromPartial(object.order) : undefined;
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    message.labels = object.labels?.map((e) => Label.fromPartial(e)) || [];
    message.state = object.state ?? State.Undefined;
    return message;
  },
};

function createBaseFulfillmentList(): FulfillmentList {
  return { items: [], total_count: 0, subject: undefined };
}

export const FulfillmentList = {
  encode(message: FulfillmentList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      items: Array.isArray(object?.items) ? object.items.map((e: any) => Fulfillment.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: FulfillmentList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? Fulfillment.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<FulfillmentList>): FulfillmentList {
    return FulfillmentList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FulfillmentList>): FulfillmentList {
    const message = createBaseFulfillmentList();
    message.items = object.items?.map((e) => Fulfillment.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseFulfillmentResponse(): FulfillmentResponse {
  return { payload: undefined, status: undefined };
}

export const FulfillmentResponse = {
  encode(message: FulfillmentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      payload: isSet(object.payload) ? Fulfillment.fromJSON(object.payload) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: FulfillmentResponse): unknown {
    const obj: any = {};
    message.payload !== undefined && (obj.payload = message.payload ? Fulfillment.toJSON(message.payload) : undefined);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<FulfillmentResponse>): FulfillmentResponse {
    return FulfillmentResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FulfillmentResponse>): FulfillmentResponse {
    const message = createBaseFulfillmentResponse();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? Fulfillment.fromPartial(object.payload)
      : undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBaseFulfillmentResponseList(): FulfillmentResponseList {
  return { items: [], total_count: 0, operation_status: undefined };
}

export const FulfillmentResponseList = {
  encode(message: FulfillmentResponseList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      FulfillmentResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(message.operation_status, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FulfillmentResponseList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFulfillmentResponseList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(FulfillmentResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.total_count = reader.uint32();
          break;
        case 3:
          message.operation_status = OperationStatus.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FulfillmentResponseList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => FulfillmentResponse.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      operation_status: isSet(object.operation_status) ? OperationStatus.fromJSON(object.operation_status) : undefined,
    };
  },

  toJSON(message: FulfillmentResponseList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? FulfillmentResponse.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status ? OperationStatus.toJSON(message.operation_status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<FulfillmentResponseList>): FulfillmentResponseList {
    return FulfillmentResponseList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FulfillmentResponseList>): FulfillmentResponseList {
    const message = createBaseFulfillmentResponseList();
    message.items = object.items?.map((e) => FulfillmentResponse.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.operation_status = (object.operation_status !== undefined && object.operation_status !== null)
      ? OperationStatus.fromPartial(object.operation_status)
      : undefined;
    return message;
  },
};

function createBaseTrackingRequest(): TrackingRequest {
  return { fulfillment_id: "", shipment_numbers: [], options: undefined };
}

export const TrackingRequest = {
  encode(message: TrackingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fulfillment_id !== "") {
      writer.uint32(10).string(message.fulfillment_id);
    }
    for (const v of message.shipment_numbers) {
      writer.uint32(18).string(v!);
    }
    if (message.options !== undefined) {
      Any.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TrackingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrackingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fulfillment_id = reader.string();
          break;
        case 2:
          message.shipment_numbers.push(reader.string());
          break;
        case 3:
          message.options = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TrackingRequest {
    return {
      fulfillment_id: isSet(object.fulfillment_id) ? String(object.fulfillment_id) : "",
      shipment_numbers: Array.isArray(object?.shipment_numbers)
        ? object.shipment_numbers.map((e: any) => String(e))
        : [],
      options: isSet(object.options) ? Any.fromJSON(object.options) : undefined,
    };
  },

  toJSON(message: TrackingRequest): unknown {
    const obj: any = {};
    message.fulfillment_id !== undefined && (obj.fulfillment_id = message.fulfillment_id);
    if (message.shipment_numbers) {
      obj.shipment_numbers = message.shipment_numbers.map((e) => e);
    } else {
      obj.shipment_numbers = [];
    }
    message.options !== undefined && (obj.options = message.options ? Any.toJSON(message.options) : undefined);
    return obj;
  },

  create(base?: DeepPartial<TrackingRequest>): TrackingRequest {
    return TrackingRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TrackingRequest>): TrackingRequest {
    const message = createBaseTrackingRequest();
    message.fulfillment_id = object.fulfillment_id ?? "";
    message.shipment_numbers = object.shipment_numbers?.map((e) => e) || [];
    message.options = (object.options !== undefined && object.options !== null)
      ? Any.fromPartial(object.options)
      : undefined;
    return message;
  },
};

function createBaseTrackingRequestList(): TrackingRequestList {
  return { items: [], subject: undefined };
}

export const TrackingRequestList = {
  encode(message: TrackingRequestList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      TrackingRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TrackingRequestList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrackingRequestList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(TrackingRequest.decode(reader, reader.uint32()));
          break;
        case 2:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TrackingRequestList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => TrackingRequest.fromJSON(e)) : [],
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: TrackingRequestList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? TrackingRequest.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<TrackingRequestList>): TrackingRequestList {
    return TrackingRequestList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TrackingRequestList>): TrackingRequestList {
    const message = createBaseTrackingRequestList();
    message.items = object.items?.map((e) => TrackingRequest.fromPartial(e)) || [];
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
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
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.location !== undefined && (obj.location = message.location);
    message.details !== undefined && (obj.details = message.details ? Any.toJSON(message.details) : undefined);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<Event>): Event {
    return Event.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Event>): Event {
    const message = createBaseEvent();
    message.timestamp = object.timestamp ?? 0;
    message.location = object.location ?? "";
    message.details = (object.details !== undefined && object.details !== null)
      ? Any.fromPartial(object.details)
      : undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBaseTracking(): Tracking {
  return { shipment_number: "", events: [], details: undefined, status: undefined };
}

export const Tracking = {
  encode(message: Tracking, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      shipment_number: isSet(object.shipment_number) ? String(object.shipment_number) : "",
      events: Array.isArray(object?.events) ? object.events.map((e: any) => Event.fromJSON(e)) : [],
      details: isSet(object.details) ? Any.fromJSON(object.details) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: Tracking): unknown {
    const obj: any = {};
    message.shipment_number !== undefined && (obj.shipment_number = message.shipment_number);
    if (message.events) {
      obj.events = message.events.map((e) => e ? Event.toJSON(e) : undefined);
    } else {
      obj.events = [];
    }
    message.details !== undefined && (obj.details = message.details ? Any.toJSON(message.details) : undefined);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<Tracking>): Tracking {
    return Tracking.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Tracking>): Tracking {
    const message = createBaseTracking();
    message.shipment_number = object.shipment_number ?? "";
    message.events = object.events?.map((e) => Event.fromPartial(e)) || [];
    message.details = (object.details !== undefined && object.details !== null)
      ? Any.fromPartial(object.details)
      : undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBaseTrackingResult(): TrackingResult {
  return { fulfillment: undefined, tracks: [], status: undefined };
}

export const TrackingResult = {
  encode(message: TrackingResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fulfillment !== undefined) {
      Fulfillment.encode(message.fulfillment, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tracks) {
      Tracking.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TrackingResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrackingResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fulfillment = Fulfillment.decode(reader, reader.uint32());
          break;
        case 2:
          message.tracks.push(Tracking.decode(reader, reader.uint32()));
          break;
        case 3:
          message.status = Status.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TrackingResult {
    return {
      fulfillment: isSet(object.fulfillment) ? Fulfillment.fromJSON(object.fulfillment) : undefined,
      tracks: Array.isArray(object?.tracks) ? object.tracks.map((e: any) => Tracking.fromJSON(e)) : [],
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: TrackingResult): unknown {
    const obj: any = {};
    message.fulfillment !== undefined &&
      (obj.fulfillment = message.fulfillment ? Fulfillment.toJSON(message.fulfillment) : undefined);
    if (message.tracks) {
      obj.tracks = message.tracks.map((e) => e ? Tracking.toJSON(e) : undefined);
    } else {
      obj.tracks = [];
    }
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<TrackingResult>): TrackingResult {
    return TrackingResult.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TrackingResult>): TrackingResult {
    const message = createBaseTrackingResult();
    message.fulfillment = (object.fulfillment !== undefined && object.fulfillment !== null)
      ? Fulfillment.fromPartial(object.fulfillment)
      : undefined;
    message.tracks = object.tracks?.map((e) => Tracking.fromPartial(e)) || [];
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBaseTrackingResultList(): TrackingResultList {
  return { items: [], operation_status: undefined };
}

export const TrackingResultList = {
  encode(message: TrackingResultList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      TrackingResult.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(message.operation_status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TrackingResultList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrackingResultList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(TrackingResult.decode(reader, reader.uint32()));
          break;
        case 2:
          message.operation_status = OperationStatus.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TrackingResultList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => TrackingResult.fromJSON(e)) : [],
      operation_status: isSet(object.operation_status) ? OperationStatus.fromJSON(object.operation_status) : undefined,
    };
  },

  toJSON(message: TrackingResultList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? TrackingResult.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status ? OperationStatus.toJSON(message.operation_status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<TrackingResultList>): TrackingResultList {
    return TrackingResultList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TrackingResultList>): TrackingResultList {
    const message = createBaseTrackingResultList();
    message.items = object.items?.map((e) => TrackingResult.fromPartial(e)) || [];
    message.operation_status = (object.operation_status !== undefined && object.operation_status !== null)
      ? OperationStatus.fromPartial(object.operation_status)
      : undefined;
    return message;
  },
};

function createBaseCancelRequestList(): CancelRequestList {
  return { ids: [], subject: undefined };
}

export const CancelRequestList = {
  encode(message: CancelRequestList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.ids) {
      writer.uint32(10).string(v!);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CancelRequestList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelRequestList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ids.push(reader.string());
          break;
        case 2:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CancelRequestList {
    return {
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => String(e)) : [],
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: CancelRequestList): unknown {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map((e) => e);
    } else {
      obj.ids = [];
    }
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CancelRequestList>): CancelRequestList {
    return CancelRequestList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CancelRequestList>): CancelRequestList {
    const message = createBaseCancelRequestList();
    message.ids = object.ids?.map((e) => e) || [];
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

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
      responseType: FulfillmentResponseList,
      responseStream: false,
      options: {},
    },
    /** Creates fulfillment orders */
    create: {
      name: "Create",
      requestType: FulfillmentList,
      requestStream: false,
      responseType: FulfillmentResponseList,
      responseStream: false,
      options: {},
    },
    /** Updates fulfillment orders unless Status is beyond Ordered */
    update: {
      name: "Update",
      requestType: FulfillmentList,
      requestStream: false,
      responseType: FulfillmentResponseList,
      responseStream: false,
      options: {},
    },
    /** Creates or Updates fulfillment orders unless Status is beyond Ordered */
    upsert: {
      name: "Upsert",
      requestType: FulfillmentList,
      requestStream: false,
      responseType: FulfillmentResponseList,
      responseStream: false,
      options: {},
    },
    /** Creates, Executes and Updates fulfillment orders against API */
    submit: {
      name: "Submit",
      requestType: FulfillmentList,
      requestStream: false,
      responseType: FulfillmentResponseList,
      responseStream: false,
      options: {},
    },
    /** Track a batch of fulfillment orders */
    track: {
      name: "Track",
      requestType: TrackingRequestList,
      requestStream: false,
      responseType: TrackingResultList,
      responseStream: false,
      options: {},
    },
    /** Cancel a batch of fulfillment orders */
    cancel: {
      name: "Cancel",
      requestType: CancelRequestList,
      requestStream: false,
      responseType: FulfillmentResponseList,
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

export interface ServiceImplementation<CallContextExt = {}> {
  /** Returns a list of shipment IDs. */
  read(request: ReadRequest, context: CallContext & CallContextExt): Promise<DeepPartial<FulfillmentResponseList>>;
  /** Creates fulfillment orders */
  create(
    request: FulfillmentList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<FulfillmentResponseList>>;
  /** Updates fulfillment orders unless Status is beyond Ordered */
  update(
    request: FulfillmentList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<FulfillmentResponseList>>;
  /** Creates or Updates fulfillment orders unless Status is beyond Ordered */
  upsert(
    request: FulfillmentList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<FulfillmentResponseList>>;
  /** Creates, Executes and Updates fulfillment orders against API */
  submit(
    request: FulfillmentList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<FulfillmentResponseList>>;
  /** Track a batch of fulfillment orders */
  track(request: TrackingRequestList, context: CallContext & CallContextExt): Promise<DeepPartial<TrackingResultList>>;
  /** Cancel a batch of fulfillment orders */
  cancel(
    request: CancelRequestList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<FulfillmentResponseList>>;
  /** Delete a batch of fulfillments from the database */
  delete(request: DeleteRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteResponse>>;
}

export interface ServiceClient<CallOptionsExt = {}> {
  /** Returns a list of shipment IDs. */
  read(request: DeepPartial<ReadRequest>, options?: CallOptions & CallOptionsExt): Promise<FulfillmentResponseList>;
  /** Creates fulfillment orders */
  create(
    request: DeepPartial<FulfillmentList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<FulfillmentResponseList>;
  /** Updates fulfillment orders unless Status is beyond Ordered */
  update(
    request: DeepPartial<FulfillmentList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<FulfillmentResponseList>;
  /** Creates or Updates fulfillment orders unless Status is beyond Ordered */
  upsert(
    request: DeepPartial<FulfillmentList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<FulfillmentResponseList>;
  /** Creates, Executes and Updates fulfillment orders against API */
  submit(
    request: DeepPartial<FulfillmentList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<FulfillmentResponseList>;
  /** Track a batch of fulfillment orders */
  track(request: DeepPartial<TrackingRequestList>, options?: CallOptions & CallOptionsExt): Promise<TrackingResultList>;
  /** Cancel a batch of fulfillment orders */
  cancel(
    request: DeepPartial<CancelRequestList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<FulfillmentResponseList>;
  /** Delete a batch of fulfillments from the database */
  delete(request: DeepPartial<DeleteRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteResponse>;
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
    "name": "io/restorecommerce/fulfillment.proto",
    "package": "io.restorecommerce.fulfillment",
    "dependency": [
      "google/protobuf/any.proto",
      "io/restorecommerce/resource_base.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/address.proto",
      "io/restorecommerce/options.proto",
    ],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
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
        "proto3Optional": false,
      }, {
        "name": "contact_person",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.address.ContactPerson",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "contactPerson",
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
      "name": "Item",
      "field": [{
        "name": "item_id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "itemId",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "name",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "description",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "description",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "taric_code",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "taricCode",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "quantity",
        "number": 5,
        "label": 1,
        "type": 5,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "quantity",
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
      "name": "Parcel",
      "field": [{
        "name": "product_id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "productId",
        "options": {
          "ctype": 0,
          "packed": false,
          "jstype": 0,
          "lazy": false,
          "deprecated": false,
          "weak": false,
          "uninterpretedOption": [],
        },
        "proto3Optional": false,
      }, {
        "name": "product_variant_id",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "productVariantId",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "items",
        "number": 3,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment.Item",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "items",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "weight_in_kg",
        "number": 4,
        "label": 1,
        "type": 2,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "weightInKg",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "height_in_cm",
        "number": 5,
        "label": 1,
        "type": 2,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "heightInCm",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "width_in_cm",
        "number": 6,
        "label": 1,
        "type": 2,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "widthInCm",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "length_in_cm",
        "number": 7,
        "label": 1,
        "type": 2,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "lengthInCm",
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
      "name": "Label",
      "field": [{
        "name": "url",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "url",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "pdf",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "pdf",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "png",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "png",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "shipment_number",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "shipmentNumber",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "state",
        "number": 5,
        "label": 1,
        "type": 14,
        "typeName": ".io.restorecommerce.fulfillment.State",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "state",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "status",
        "number": 6,
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
      "oneofDecl": [{ "name": "type", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "Order",
      "field": [{
        "name": "reference_id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "referenceId",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "parcels",
        "number": 2,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment.Parcel",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "parcels",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "sender",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment.ShippingAddress",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "sender",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "receiver",
        "number": 4,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment.ShippingAddress",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "receiver",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "notify",
        "number": 5,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "notify",
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
      "name": "Fulfillment",
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
      }, {
        "name": "order",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment.Order",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "order",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "meta",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.meta.Meta",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "meta",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "labels",
        "number": 4,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment.Label",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "labels",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "state",
        "number": 5,
        "label": 1,
        "type": 14,
        "typeName": ".io.restorecommerce.fulfillment.State",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "state",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": {
        "messageSetWireFormat": false,
        "noStandardDescriptorAccessor": false,
        "deprecated": false,
        "mapEntry": false,
        "uninterpretedOption": [],
      },
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "FulfillmentList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment.Fulfillment",
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
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "FulfillmentResponse",
      "field": [{
        "name": "payload",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment.Fulfillment",
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
      "name": "FulfillmentResponseList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment.FulfillmentResponse",
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
      "name": "TrackingRequest",
      "field": [{
        "name": "fulfillment_id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "fulfillmentId",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "shipment_numbers",
        "number": 2,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "shipmentNumbers",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "options",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.Any",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "options",
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
      "name": "TrackingRequestList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment.TrackingRequest",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "items",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "subject",
        "number": 2,
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
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "Event",
      "field": [{
        "name": "timestamp",
        "number": 1,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "timestamp",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "location",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "location",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "details",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.Any",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "details",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "status",
        "number": 4,
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
      "name": "Tracking",
      "field": [{
        "name": "shipment_number",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "shipmentNumber",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "events",
        "number": 3,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment.Event",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "events",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "details",
        "number": 4,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.Any",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "details",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "status",
        "number": 5,
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
      "name": "TrackingResult",
      "field": [{
        "name": "fulfillment",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment.Fulfillment",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "fulfillment",
        "options": {
          "ctype": 0,
          "packed": false,
          "jstype": 0,
          "lazy": false,
          "deprecated": false,
          "weak": false,
          "uninterpretedOption": [],
        },
        "proto3Optional": false,
      }, {
        "name": "tracks",
        "number": 2,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment.Tracking",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "tracks",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "status",
        "number": 3,
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
      "name": "TrackingResultList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment.TrackingResult",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "items",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "operation_status",
        "number": 2,
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
      "name": "CancelRequestList",
      "field": [{
        "name": "ids",
        "number": 1,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "ids",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "subject",
        "number": 2,
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
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
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
    }],
    "enumType": [{
      "name": "State",
      "value": [
        { "name": "Undefined", "number": 0, "options": undefined },
        { "name": "Invalid", "number": 1, "options": undefined },
        { "name": "Failed", "number": 2, "options": undefined },
        { "name": "Cancelled", "number": 3, "options": undefined },
        { "name": "Created", "number": 4, "options": undefined },
        { "name": "Submitted", "number": 5, "options": undefined },
        { "name": "Shipping", "number": 6, "options": undefined },
        { "name": "Done", "number": 7, "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "service": [{
      "name": "Service",
      "method": [{
        "name": "Read",
        "inputType": ".io.restorecommerce.resourcebase.ReadRequest",
        "outputType": ".io.restorecommerce.fulfillment.FulfillmentResponseList",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Create",
        "inputType": ".io.restorecommerce.fulfillment.FulfillmentList",
        "outputType": ".io.restorecommerce.fulfillment.FulfillmentResponseList",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Update",
        "inputType": ".io.restorecommerce.fulfillment.FulfillmentList",
        "outputType": ".io.restorecommerce.fulfillment.FulfillmentResponseList",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Upsert",
        "inputType": ".io.restorecommerce.fulfillment.FulfillmentList",
        "outputType": ".io.restorecommerce.fulfillment.FulfillmentResponseList",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Submit",
        "inputType": ".io.restorecommerce.fulfillment.FulfillmentList",
        "outputType": ".io.restorecommerce.fulfillment.FulfillmentResponseList",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Track",
        "inputType": ".io.restorecommerce.fulfillment.TrackingRequestList",
        "outputType": ".io.restorecommerce.fulfillment.TrackingResultList",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Cancel",
        "inputType": ".io.restorecommerce.fulfillment.CancelRequestList",
        "outputType": ".io.restorecommerce.fulfillment.FulfillmentResponseList",
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
      }],
      "options": { "deprecated": false, "uninterpretedOption": [] },
    }],
    "extension": [],
    "options": undefined,
    "sourceCodeInfo": {
      "location": [{
        "path": [6, 0],
        "span": [15, 0, 61, 1],
        "leadingComments": "*\nMicroservice definition.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 0],
        "span": [21, 2, 23, 3],
        "leadingComments": "*\nReturns a list of shipment IDs.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 1],
        "span": [28, 2, 65],
        "leadingComments": "*\nCreates fulfillment orders\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 2],
        "span": [33, 2, 65],
        "leadingComments": "*\nUpdates fulfillment orders unless Status is beyond Ordered\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 3],
        "span": [38, 2, 65],
        "leadingComments": "*\nCreates or Updates fulfillment orders unless Status is beyond Ordered\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 4],
        "span": [43, 2, 65],
        "leadingComments": "*\nCreates, Executes and Updates fulfillment orders against API\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 5],
        "span": [48, 2, 50, 3],
        "leadingComments": "*\nTrack a batch of fulfillment orders\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 6],
        "span": [55, 2, 67],
        "leadingComments": "*\nCancel a batch of fulfillment orders\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 7],
        "span": [60, 2, 118],
        "leadingComments": "*\nDelete a batch of fulfillments from the database\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 0],
        "span": [81, 2, 21],
        "leadingComments": "Catalog item!\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 3, 2, 3],
        "span": [112, 2, 29],
        "leadingComments": "",
        "trailingComments": "filled on Order\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 3, 2, 4],
        "span": [113, 2, 18],
        "leadingComments": "",
        "trailingComments": "update by Track\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 3, 2, 5],
        "span": [114, 2, 46],
        "leadingComments": "",
        "trailingComments": "API status\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 5],
        "span": [128, 0, 142, 1],
        "leadingComments": "*\nThis is the message how it get stored to the database\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 5, 2, 3],
        "span": [140, 2, 28],
        "leadingComments": "",
        "trailingComments": "filled by service\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 9, 2, 1],
        "span": [163, 2, 39],
        "leadingComments": "",
        "trailingComments": "optional\n",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {
    ".io.restorecommerce.fulfillment.State": State,
    ".io.restorecommerce.fulfillment.ShippingAddress": ShippingAddress,
    ".io.restorecommerce.fulfillment.Item": Item,
    ".io.restorecommerce.fulfillment.Parcel": Parcel,
    ".io.restorecommerce.fulfillment.Label": Label,
    ".io.restorecommerce.fulfillment.Order": Order,
    ".io.restorecommerce.fulfillment.Fulfillment": Fulfillment,
    ".io.restorecommerce.fulfillment.FulfillmentList": FulfillmentList,
    ".io.restorecommerce.fulfillment.FulfillmentResponse": FulfillmentResponse,
    ".io.restorecommerce.fulfillment.FulfillmentResponseList": FulfillmentResponseList,
    ".io.restorecommerce.fulfillment.TrackingRequest": TrackingRequest,
    ".io.restorecommerce.fulfillment.TrackingRequestList": TrackingRequestList,
    ".io.restorecommerce.fulfillment.Event": Event,
    ".io.restorecommerce.fulfillment.Tracking": Tracking,
    ".io.restorecommerce.fulfillment.TrackingResult": TrackingResult,
    ".io.restorecommerce.fulfillment.TrackingResultList": TrackingResultList,
    ".io.restorecommerce.fulfillment.CancelRequestList": CancelRequestList,
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
  ],
  options: {
    messages: {
      "Parcel": {
        fields: {
          "product_id": {
            "resolver": Resolver.decode(
              Buffer.from(
                "CjouaW8ucmVzdG9yZWNvbW1lcmNlLmZ1bGZpbGxtZW50X3Byb2R1Y3QuRnVsZmlsbG1lbnRQcm9kdWN0EghyZXNvdXJjZRoTZnVsZmlsbG1lbnRfcHJvZHVjdCIEUmVhZCoHcHJvZHVjdA==",
                "base64",
              ),
            ),
          },
        },
      },
      "Fulfillment": {
        options: {
          "kafka_subscriber": KafkaSubscription.decode(
            Buffer.from(
              "CgtmdWxmaWxsbWVudBInaW8ucmVzdG9yZWNvbW1lcmNlLmZ1bGZpbGxtZW50LnJlc291cmNlGhJmdWxmaWxsbWVudENyZWF0ZWQiEmZ1bGZpbGxtZW50VXBkYXRlZCoSZnVsZmlsbG1lbnREZWxldGVk",
              "base64",
            ),
          ),
        },
      },
      "TrackingResult": {
        fields: {
          "fulfillment": {
            "resolver": Resolver.decode(
              Buffer.from(
                "CisuaW8ucmVzdG9yZWNvbW1lcmNlLmZ1bGZpbGxtZW50LkZ1bGZpbGxtZW50EghyZXNvdXJjZRoLZnVsZmlsbG1lbnQiBFJlYWQqC2Z1bGZpbGxtZW50",
                "base64",
              ),
            ),
          },
        },
      },
    },
    services: {
      "Service": {
        options: { "service_name": "fulfillment" },
        methods: { "Read": { "is_query": true }, "Track": { "is_query": true } },
      },
    },
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
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
