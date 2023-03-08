/* eslint-disable */
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { Country, protoMetadata as protoMetadata7 } from "./country";
import {
  Status,
  OperationStatus,
  protoMetadata as protoMetadata4,
} from "./status";
import { Meta, protoMetadata as protoMetadata5 } from "./meta";
import { Subject, protoMetadata as protoMetadata3 } from "./auth";
import {
  Any,
  protoMetadata as protoMetadata1,
} from "../../google/protobuf/any";
import { CallContext, CallOptions } from "nice-grpc-common";
import {
  protoMetadata as protoMetadata2,
  ReadRequest,
  DeleteRequest,
  DeleteResponse,
} from "./resource_base";
import {
  protoMetadata as protoMetadata6,
  Address as Address9,
} from "./address";
import { protoMetadata as protoMetadata8 } from "./options";
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "io.restorecommerce.fulfillment";

export enum State {
  Undefined = "Undefined",
  Invalid = "Invalid",
  Ordered = "Ordered",
  Shipping = "Shipping",
  Done = "Done",
  Cancelled = "Cancelled",
  Failed = "Failed",
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
    case "Ordered":
      return State.Ordered;
    case 3:
    case "Shipping":
      return State.Shipping;
    case 4:
    case "Done":
      return State.Done;
    case 5:
    case "Cancelled":
      return State.Cancelled;
    case 6:
    case "Failed":
      return State.Failed;
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
    case State.Ordered:
      return "Ordered";
    case State.Shipping:
      return "Shipping";
    case State.Done:
      return "Done";
    case State.Cancelled:
      return "Cancelled";
    case State.Failed:
      return "Failed";
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
    case State.Ordered:
      return 2;
    case State.Shipping:
      return 3;
    case State.Done:
      return 4;
    case State.Cancelled:
      return 5;
    case State.Failed:
      return 6;
    case State.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface Contact {
  name: string;
  email: string;
  phone: string;
}

export interface Branch {
  provider: string;
  branch_number: string;
  post_number: string;
}

export interface Packstation {
  provider: string;
  station_number: string;
  post_number: string;
}

export interface Address {
  title: string;
  name: string[];
  address?: Address9 | undefined;
  packstation?: Packstation | undefined;
  branch?: Branch | undefined;
  country?: Country;
  contact?: Contact;
}

export interface Parcel {
  product_id: string;
  product_variant_id: string;
  items: Parcel_Item[];
  weight_in_kg: number;
  height_in_cm: number;
  width_in_cm: number;
  length_in_cm: number;
}

export interface Parcel_Item {
  item_id: string;
  quantity: number;
}

export interface Order {
  reference_id: string;
  parcels: Parcel[];
  sender?: Address;
  receiver?: Address;
  notify: string;
}

export interface Label {
  url: string | undefined;
  pdf: string | undefined;
  png: string | undefined;
  /** filled on Order */
  shipment_number: string;
  /** update by Track */
  state: State;
  /** API status */
  status?: Status;
}

export interface FulfillmentRequest {
  id: string;
  order?: Order;
  meta?: Meta;
}

export interface FulfillmentRequestList {
  items: FulfillmentRequest[];
  total_count: number;
  subject?: Subject;
}

/** This is the message how it get stored to the database */
export interface Fulfillment {
  id: string;
  order?: Order;
  meta?: Meta;
  /** filled by service */
  labels: Label[];
  fulfilled: boolean;
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

function createBaseContact(): Contact {
  return { name: "", email: "", phone: "" };
}

export const Contact = {
  encode(
    message: Contact,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Contact {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContact();
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

  fromJSON(object: any): Contact {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      email: isSet(object.email) ? String(object.email) : "",
      phone: isSet(object.phone) ? String(object.phone) : "",
    };
  },

  toJSON(message: Contact): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.email !== undefined && (obj.email = message.email);
    message.phone !== undefined && (obj.phone = message.phone);
    return obj;
  },

  fromPartial(object: DeepPartial<Contact>): Contact {
    const message = createBaseContact();
    message.name = object.name ?? "";
    message.email = object.email ?? "";
    message.phone = object.phone ?? "";
    return message;
  },
};

function createBaseBranch(): Branch {
  return { provider: "", branch_number: "", post_number: "" };
}

export const Branch = {
  encode(
    message: Branch,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.branch_number !== "") {
      writer.uint32(18).string(message.branch_number);
    }
    if (message.post_number !== "") {
      writer.uint32(26).string(message.post_number);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Branch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBranch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider = reader.string();
          break;
        case 2:
          message.branch_number = reader.string();
          break;
        case 3:
          message.post_number = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Branch {
    return {
      provider: isSet(object.provider) ? String(object.provider) : "",
      branch_number: isSet(object.branch_number)
        ? String(object.branch_number)
        : "",
      post_number: isSet(object.post_number) ? String(object.post_number) : "",
    };
  },

  toJSON(message: Branch): unknown {
    const obj: any = {};
    message.provider !== undefined && (obj.provider = message.provider);
    message.branch_number !== undefined &&
      (obj.branch_number = message.branch_number);
    message.post_number !== undefined &&
      (obj.post_number = message.post_number);
    return obj;
  },

  fromPartial(object: DeepPartial<Branch>): Branch {
    const message = createBaseBranch();
    message.provider = object.provider ?? "";
    message.branch_number = object.branch_number ?? "";
    message.post_number = object.post_number ?? "";
    return message;
  },
};

function createBasePackstation(): Packstation {
  return { provider: "", station_number: "", post_number: "" };
}

export const Packstation = {
  encode(
    message: Packstation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.station_number !== "") {
      writer.uint32(18).string(message.station_number);
    }
    if (message.post_number !== "") {
      writer.uint32(26).string(message.post_number);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Packstation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePackstation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider = reader.string();
          break;
        case 2:
          message.station_number = reader.string();
          break;
        case 3:
          message.post_number = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Packstation {
    return {
      provider: isSet(object.provider) ? String(object.provider) : "",
      station_number: isSet(object.station_number)
        ? String(object.station_number)
        : "",
      post_number: isSet(object.post_number) ? String(object.post_number) : "",
    };
  },

  toJSON(message: Packstation): unknown {
    const obj: any = {};
    message.provider !== undefined && (obj.provider = message.provider);
    message.station_number !== undefined &&
      (obj.station_number = message.station_number);
    message.post_number !== undefined &&
      (obj.post_number = message.post_number);
    return obj;
  },

  fromPartial(object: DeepPartial<Packstation>): Packstation {
    const message = createBasePackstation();
    message.provider = object.provider ?? "";
    message.station_number = object.station_number ?? "";
    message.post_number = object.post_number ?? "";
    return message;
  },
};

function createBaseAddress(): Address {
  return {
    title: "",
    name: [],
    address: undefined,
    packstation: undefined,
    branch: undefined,
    country: undefined,
    contact: undefined,
  };
}

export const Address = {
  encode(
    message: Address,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    for (const v of message.name) {
      writer.uint32(18).string(v!);
    }
    if (message.address !== undefined) {
      Address9.encode(message.address, writer.uint32(26).fork()).ldelim();
    }
    if (message.packstation !== undefined) {
      Packstation.encode(
        message.packstation,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.branch !== undefined) {
      Branch.encode(message.branch, writer.uint32(42).fork()).ldelim();
    }
    if (message.country !== undefined) {
      Country.encode(message.country, writer.uint32(50).fork()).ldelim();
    }
    if (message.contact !== undefined) {
      Contact.encode(message.contact, writer.uint32(58).fork()).ldelim();
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
          message.title = reader.string();
          break;
        case 2:
          message.name.push(reader.string());
          break;
        case 3:
          message.address = Address9.decode(reader, reader.uint32());
          break;
        case 4:
          message.packstation = Packstation.decode(reader, reader.uint32());
          break;
        case 5:
          message.branch = Branch.decode(reader, reader.uint32());
          break;
        case 6:
          message.country = Country.decode(reader, reader.uint32());
          break;
        case 7:
          message.contact = Contact.decode(reader, reader.uint32());
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
      title: isSet(object.title) ? String(object.title) : "",
      name: Array.isArray(object?.name)
        ? object.name.map((e: any) => String(e))
        : [],
      address: isSet(object.address)
        ? Address9.fromJSON(object.address)
        : undefined,
      packstation: isSet(object.packstation)
        ? Packstation.fromJSON(object.packstation)
        : undefined,
      branch: isSet(object.branch) ? Branch.fromJSON(object.branch) : undefined,
      country: isSet(object.country)
        ? Country.fromJSON(object.country)
        : undefined,
      contact: isSet(object.contact)
        ? Contact.fromJSON(object.contact)
        : undefined,
    };
  },

  toJSON(message: Address): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    if (message.name) {
      obj.name = message.name.map((e) => e);
    } else {
      obj.name = [];
    }
    message.address !== undefined &&
      (obj.address = message.address
        ? Address9.toJSON(message.address)
        : undefined);
    message.packstation !== undefined &&
      (obj.packstation = message.packstation
        ? Packstation.toJSON(message.packstation)
        : undefined);
    message.branch !== undefined &&
      (obj.branch = message.branch ? Branch.toJSON(message.branch) : undefined);
    message.country !== undefined &&
      (obj.country = message.country
        ? Country.toJSON(message.country)
        : undefined);
    message.contact !== undefined &&
      (obj.contact = message.contact
        ? Contact.toJSON(message.contact)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Address>): Address {
    const message = createBaseAddress();
    message.title = object.title ?? "";
    message.name = object.name?.map((e) => e) || [];
    message.address =
      object.address !== undefined && object.address !== null
        ? Address9.fromPartial(object.address)
        : undefined;
    message.packstation =
      object.packstation !== undefined && object.packstation !== null
        ? Packstation.fromPartial(object.packstation)
        : undefined;
    message.branch =
      object.branch !== undefined && object.branch !== null
        ? Branch.fromPartial(object.branch)
        : undefined;
    message.country =
      object.country !== undefined && object.country !== null
        ? Country.fromPartial(object.country)
        : undefined;
    message.contact =
      object.contact !== undefined && object.contact !== null
        ? Contact.fromPartial(object.contact)
        : undefined;
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
  encode(
    message: Parcel,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.product_id !== "") {
      writer.uint32(10).string(message.product_id);
    }
    if (message.product_variant_id !== "") {
      writer.uint32(18).string(message.product_variant_id);
    }
    for (const v of message.items) {
      Parcel_Item.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.items.push(Parcel_Item.decode(reader, reader.uint32()));
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
      product_variant_id: isSet(object.product_variant_id)
        ? String(object.product_variant_id)
        : "",
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => Parcel_Item.fromJSON(e))
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
    message.product_id !== undefined && (obj.product_id = message.product_id);
    message.product_variant_id !== undefined &&
      (obj.product_variant_id = message.product_variant_id);
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? Parcel_Item.toJSON(e) : undefined
      );
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
    message.product_id = object.product_id ?? "";
    message.product_variant_id = object.product_variant_id ?? "";
    message.items = object.items?.map((e) => Parcel_Item.fromPartial(e)) || [];
    message.weight_in_kg = object.weight_in_kg ?? 0;
    message.height_in_cm = object.height_in_cm ?? 0;
    message.width_in_cm = object.width_in_cm ?? 0;
    message.length_in_cm = object.length_in_cm ?? 0;
    return message;
  },
};

function createBaseParcel_Item(): Parcel_Item {
  return { item_id: "", quantity: 0 };
}

export const Parcel_Item = {
  encode(
    message: Parcel_Item,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.item_id !== "") {
      writer.uint32(10).string(message.item_id);
    }
    if (message.quantity !== 0) {
      writer.uint32(16).int32(message.quantity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Parcel_Item {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParcel_Item();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.item_id = reader.string();
          break;
        case 2:
          message.quantity = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Parcel_Item {
    return {
      item_id: isSet(object.item_id) ? String(object.item_id) : "",
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
    };
  },

  toJSON(message: Parcel_Item): unknown {
    const obj: any = {};
    message.item_id !== undefined && (obj.item_id = message.item_id);
    message.quantity !== undefined &&
      (obj.quantity = Math.round(message.quantity));
    return obj;
  },

  fromPartial(object: DeepPartial<Parcel_Item>): Parcel_Item {
    const message = createBaseParcel_Item();
    message.item_id = object.item_id ?? "";
    message.quantity = object.quantity ?? 0;
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
      Address.encode(message.sender, writer.uint32(26).fork()).ldelim();
    }
    if (message.receiver !== undefined) {
      Address.encode(message.receiver, writer.uint32(34).fork()).ldelim();
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
          message.sender = Address.decode(reader, reader.uint32());
          break;
        case 4:
          message.receiver = Address.decode(reader, reader.uint32());
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
        ? Address.fromJSON(object.sender)
        : undefined,
      receiver: isSet(object.receiver)
        ? Address.fromJSON(object.receiver)
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
        ? Address.toJSON(message.sender)
        : undefined);
    message.receiver !== undefined &&
      (obj.receiver = message.receiver
        ? Address.toJSON(message.receiver)
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
        ? Address.fromPartial(object.sender)
        : undefined;
    message.receiver =
      object.receiver !== undefined && object.receiver !== null
        ? Address.fromPartial(object.receiver)
        : undefined;
    message.notify = object.notify ?? "";
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
    message.shipment_number = object.shipment_number ?? "";
    message.state = object.state ?? State.Undefined;
    message.status =
      object.status !== undefined && object.status !== null
        ? Status.fromPartial(object.status)
        : undefined;
    return message;
  },
};

function createBaseFulfillmentRequest(): FulfillmentRequest {
  return { id: "", order: undefined, meta: undefined };
}

export const FulfillmentRequest = {
  encode(
    message: FulfillmentRequest,
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FulfillmentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFulfillmentRequest();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FulfillmentRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      order: isSet(object.order) ? Order.fromJSON(object.order) : undefined,
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
    };
  },

  toJSON(message: FulfillmentRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.order !== undefined &&
      (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<FulfillmentRequest>): FulfillmentRequest {
    const message = createBaseFulfillmentRequest();
    message.id = object.id ?? "";
    message.order =
      object.order !== undefined && object.order !== null
        ? Order.fromPartial(object.order)
        : undefined;
    message.meta =
      object.meta !== undefined && object.meta !== null
        ? Meta.fromPartial(object.meta)
        : undefined;
    return message;
  },
};

function createBaseFulfillmentRequestList(): FulfillmentRequestList {
  return { items: [], total_count: 0, subject: undefined };
}

export const FulfillmentRequestList = {
  encode(
    message: FulfillmentRequestList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      FulfillmentRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FulfillmentRequestList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFulfillmentRequestList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            FulfillmentRequest.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): FulfillmentRequestList {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => FulfillmentRequest.fromJSON(e))
        : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      subject: isSet(object.subject)
        ? Subject.fromJSON(object.subject)
        : undefined,
    };
  },

  toJSON(message: FulfillmentRequestList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? FulfillmentRequest.toJSON(e) : undefined
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

  fromPartial(
    object: DeepPartial<FulfillmentRequestList>
  ): FulfillmentRequestList {
    const message = createBaseFulfillmentRequestList();
    message.items =
      object.items?.map((e) => FulfillmentRequest.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.subject =
      object.subject !== undefined && object.subject !== null
        ? Subject.fromPartial(object.subject)
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
    fulfilled: false,
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
    if (message.fulfilled === true) {
      writer.uint32(40).bool(message.fulfilled);
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
          message.fulfilled = reader.bool();
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
      fulfilled: isSet(object.fulfilled) ? Boolean(object.fulfilled) : false,
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
    message.fulfilled !== undefined && (obj.fulfilled = message.fulfilled);
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
    message.fulfilled = object.fulfilled ?? false;
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

function createBaseFulfillmentResponseList(): FulfillmentResponseList {
  return { items: [], total_count: 0, operation_status: undefined };
}

export const FulfillmentResponseList = {
  encode(
    message: FulfillmentResponseList,
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
  ): FulfillmentResponseList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFulfillmentResponseList();
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

  fromJSON(object: any): FulfillmentResponseList {
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

  toJSON(message: FulfillmentResponseList): unknown {
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
    object: DeepPartial<FulfillmentResponseList>
  ): FulfillmentResponseList {
    const message = createBaseFulfillmentResponseList();
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

function createBaseTrackingRequest(): TrackingRequest {
  return { fulfillment_id: "", shipment_numbers: [], options: undefined };
}

export const TrackingRequest = {
  encode(
    message: TrackingRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      fulfillment_id: isSet(object.fulfillment_id)
        ? String(object.fulfillment_id)
        : "",
      shipment_numbers: Array.isArray(object?.shipment_numbers)
        ? object.shipment_numbers.map((e: any) => String(e))
        : [],
      options: isSet(object.options) ? Any.fromJSON(object.options) : undefined,
    };
  },

  toJSON(message: TrackingRequest): unknown {
    const obj: any = {};
    message.fulfillment_id !== undefined &&
      (obj.fulfillment_id = message.fulfillment_id);
    if (message.shipment_numbers) {
      obj.shipment_numbers = message.shipment_numbers.map((e) => e);
    } else {
      obj.shipment_numbers = [];
    }
    message.options !== undefined &&
      (obj.options = message.options ? Any.toJSON(message.options) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TrackingRequest>): TrackingRequest {
    const message = createBaseTrackingRequest();
    message.fulfillment_id = object.fulfillment_id ?? "";
    message.shipment_numbers = object.shipment_numbers?.map((e) => e) || [];
    message.options =
      object.options !== undefined && object.options !== null
        ? Any.fromPartial(object.options)
        : undefined;
    return message;
  },
};

function createBaseTrackingRequestList(): TrackingRequestList {
  return { items: [], subject: undefined };
}

export const TrackingRequestList = {
  encode(
    message: TrackingRequestList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => TrackingRequest.fromJSON(e))
        : [],
      subject: isSet(object.subject)
        ? Subject.fromJSON(object.subject)
        : undefined,
    };
  },

  toJSON(message: TrackingRequestList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? TrackingRequest.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TrackingRequestList>): TrackingRequestList {
    const message = createBaseTrackingRequestList();
    message.items =
      object.items?.map((e) => TrackingRequest.fromPartial(e)) || [];
    message.subject =
      object.subject !== undefined && object.subject !== null
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

function createBaseTrackingResult(): TrackingResult {
  return { fulfillment: undefined, tracks: [], status: undefined };
}

export const TrackingResult = {
  encode(
    message: TrackingResult,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fulfillment !== undefined) {
      Fulfillment.encode(
        message.fulfillment,
        writer.uint32(10).fork()
      ).ldelim();
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
      fulfillment: isSet(object.fulfillment)
        ? Fulfillment.fromJSON(object.fulfillment)
        : undefined,
      tracks: Array.isArray(object?.tracks)
        ? object.tracks.map((e: any) => Tracking.fromJSON(e))
        : [],
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: TrackingResult): unknown {
    const obj: any = {};
    message.fulfillment !== undefined &&
      (obj.fulfillment = message.fulfillment
        ? Fulfillment.toJSON(message.fulfillment)
        : undefined);
    if (message.tracks) {
      obj.tracks = message.tracks.map((e) =>
        e ? Tracking.toJSON(e) : undefined
      );
    } else {
      obj.tracks = [];
    }
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TrackingResult>): TrackingResult {
    const message = createBaseTrackingResult();
    message.fulfillment =
      object.fulfillment !== undefined && object.fulfillment !== null
        ? Fulfillment.fromPartial(object.fulfillment)
        : undefined;
    message.tracks = object.tracks?.map((e) => Tracking.fromPartial(e)) || [];
    message.status =
      object.status !== undefined && object.status !== null
        ? Status.fromPartial(object.status)
        : undefined;
    return message;
  },
};

function createBaseTrackingResultList(): TrackingResultList {
  return { items: [], operation_status: undefined };
}

export const TrackingResultList = {
  encode(
    message: TrackingResultList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      TrackingResult.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(
        message.operation_status,
        writer.uint32(18).fork()
      ).ldelim();
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

  fromJSON(object: any): TrackingResultList {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => TrackingResult.fromJSON(e))
        : [],
      operation_status: isSet(object.operation_status)
        ? OperationStatus.fromJSON(object.operation_status)
        : undefined,
    };
  },

  toJSON(message: TrackingResultList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? TrackingResult.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status
        ? OperationStatus.toJSON(message.operation_status)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TrackingResultList>): TrackingResultList {
    const message = createBaseTrackingResultList();
    message.items =
      object.items?.map((e) => TrackingResult.fromPartial(e)) || [];
    message.operation_status =
      object.operation_status !== undefined && object.operation_status !== null
        ? OperationStatus.fromPartial(object.operation_status)
        : undefined;
    return message;
  },
};

function createBaseCancelRequestList(): CancelRequestList {
  return { ids: [], subject: undefined };
}

export const CancelRequestList = {
  encode(
    message: CancelRequestList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      ids: Array.isArray(object?.ids)
        ? object.ids.map((e: any) => String(e))
        : [],
      subject: isSet(object.subject)
        ? Subject.fromJSON(object.subject)
        : undefined,
    };
  },

  toJSON(message: CancelRequestList): unknown {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map((e) => e);
    } else {
      obj.ids = [];
    }
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<CancelRequestList>): CancelRequestList {
    const message = createBaseCancelRequestList();
    message.ids = object.ids?.map((e) => e) || [];
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
      responseType: FulfillmentResponseList,
      responseStream: false,
      options: {},
    },
    /** Creates and executes fulfillment orders */
    create: {
      name: "Create",
      requestType: FulfillmentRequestList,
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

export interface ServiceServiceImplementation<CallContextExt = {}> {
  /** Returns a list of shipment IDs. */
  read(
    request: ReadRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<FulfillmentResponseList>>;
  /** Creates and executes fulfillment orders */
  create(
    request: FulfillmentRequestList,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<FulfillmentResponseList>>;
  /** Track a batch of fulfillment orders */
  track(
    request: TrackingRequestList,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<TrackingResultList>>;
  /** Cancel a batch of fulfillment orders */
  cancel(
    request: CancelRequestList,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<FulfillmentResponseList>>;
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
  ): Promise<FulfillmentResponseList>;
  /** Creates and executes fulfillment orders */
  create(
    request: DeepPartial<FulfillmentRequestList>,
    options?: CallOptions & CallOptionsExt
  ): Promise<FulfillmentResponseList>;
  /** Track a batch of fulfillment orders */
  track(
    request: DeepPartial<TrackingRequestList>,
    options?: CallOptions & CallOptionsExt
  ): Promise<TrackingResultList>;
  /** Cancel a batch of fulfillment orders */
  cancel(
    request: DeepPartial<CancelRequestList>,
    options?: CallOptions & CallOptionsExt
  ): Promise<FulfillmentResponseList>;
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
      "io/restorecommerce/options.proto",
    ],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        name: "Contact",
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
        name: "Branch",
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
            name: "branch_number",
            number: 2,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "branchNumber",
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
        name: "Packstation",
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
        name: "Address",
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
            name: "name",
            number: 2,
            label: 3,
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
            name: "address",
            number: 3,
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
            name: "packstation",
            number: 4,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Packstation",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "packstation",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "branch",
            number: 5,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Branch",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "branch",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "country",
            number: 6,
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
            name: "contact",
            number: 7,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Contact",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "contact",
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
        name: "Parcel",
        field: [
          {
            name: "product_id",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "productId",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "product_variant_id",
            number: 2,
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
            number: 3,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Parcel.Item",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "items",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "weight_in_kg",
            number: 4,
            label: 1,
            type: 2,
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
            number: 5,
            label: 1,
            type: 2,
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
            number: 6,
            label: 1,
            type: 2,
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
            number: 7,
            label: 1,
            type: 2,
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
        nestedType: [
          {
            name: "Item",
            field: [
              {
                name: "item_id",
                number: 1,
                label: 1,
                type: 9,
                typeName: "",
                extendee: "",
                defaultValue: "",
                oneofIndex: 0,
                jsonName: "itemId",
                options: undefined,
                proto3Optional: false,
              },
              {
                name: "quantity",
                number: 2,
                label: 1,
                type: 5,
                typeName: "",
                extendee: "",
                defaultValue: "",
                oneofIndex: 0,
                jsonName: "quantity",
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
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
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
            typeName: ".io.restorecommerce.fulfillment.Address",
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
            typeName: ".io.restorecommerce.fulfillment.Address",
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
            name: "shipment_number",
            number: 4,
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
            number: 5,
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
            number: 6,
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
        name: "FulfillmentRequest",
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
        name: "FulfillmentRequestList",
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.FulfillmentRequest",
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
            name: "fulfilled",
            number: 5,
            label: 1,
            type: 8,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "fulfilled",
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
        name: "FulfillmentResponseList",
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
        name: "TrackingRequest",
        field: [
          {
            name: "fulfillment_id",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "fulfillmentId",
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
        name: "TrackingRequestList",
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.TrackingRequest",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "items",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "subject",
            number: 2,
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
        name: "TrackingResult",
        field: [
          {
            name: "fulfillment",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Fulfillment",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "fulfillment",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "tracks",
            number: 2,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Tracking",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "tracks",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "status",
            number: 3,
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
        name: "TrackingResultList",
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.TrackingResult",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "items",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "operation_status",
            number: 2,
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
        name: "CancelRequestList",
        field: [
          {
            name: "ids",
            number: 1,
            label: 3,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "ids",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "subject",
            number: 2,
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
          { name: "Ordered", number: 2, options: undefined },
          { name: "Shipping", number: 3, options: undefined },
          { name: "Done", number: 4, options: undefined },
          { name: "Cancelled", number: 5, options: undefined },
          { name: "Failed", number: 6, options: undefined },
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
              ".io.restorecommerce.fulfillment.FulfillmentResponseList",
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
            inputType: ".io.restorecommerce.fulfillment.FulfillmentRequestList",
            outputType:
              ".io.restorecommerce.fulfillment.FulfillmentResponseList",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Track",
            inputType: ".io.restorecommerce.fulfillment.TrackingRequestList",
            outputType: ".io.restorecommerce.fulfillment.TrackingResultList",
            options: {
              deprecated: false,
              idempotencyLevel: 0,
              uninterpretedOption: [],
            },
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Cancel",
            inputType: ".io.restorecommerce.fulfillment.CancelRequestList",
            outputType:
              ".io.restorecommerce.fulfillment.FulfillmentResponseList",
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
          span: [16, 0, 47, 1],
          leadingComments: "*\nMicroservice definition.\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [6, 0, 2, 0],
          span: [22, 2, 24, 3],
          leadingComments: "*\nReturns a list of shipment IDs.\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [6, 0, 2, 1],
          span: [29, 2, 72],
          leadingComments: "*\nCreates and executes fulfillment orders\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [6, 0, 2, 2],
          span: [34, 2, 36, 3],
          leadingComments: "*\nTrack a batch of fulfillment orders\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [6, 0, 2, 3],
          span: [41, 2, 67],
          leadingComments: "*\nCancel a batch of fulfillment orders\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [6, 0, 2, 4],
          span: [46, 2, 118],
          leadingComments:
            "*\nDelete a batch of fulfillments from the database\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [4, 6, 2, 3],
          span: [118, 2, 29],
          leadingComments: "",
          trailingComments: "filled on Order\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 6, 2, 4],
          span: [119, 2, 18],
          leadingComments: "",
          trailingComments: "update by Track\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 6, 2, 5],
          span: [120, 2, 46],
          leadingComments: "",
          trailingComments: "API status\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 9],
          span: [138, 0, 144, 1],
          leadingComments:
            "*\nThis is the message how it get stored to the database\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [4, 9, 2, 3],
          span: [142, 2, 28],
          leadingComments: "",
          trailingComments: "filled by service\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 12, 2, 1],
          span: [159, 2, 39],
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
    ".io.restorecommerce.fulfillment.Contact": Contact,
    ".io.restorecommerce.fulfillment.Branch": Branch,
    ".io.restorecommerce.fulfillment.Packstation": Packstation,
    ".io.restorecommerce.fulfillment.Address": Address,
    ".io.restorecommerce.fulfillment.Parcel": Parcel,
    ".io.restorecommerce.fulfillment.Parcel.Item": Parcel_Item,
    ".io.restorecommerce.fulfillment.Order": Order,
    ".io.restorecommerce.fulfillment.Label": Label,
    ".io.restorecommerce.fulfillment.FulfillmentRequest": FulfillmentRequest,
    ".io.restorecommerce.fulfillment.FulfillmentRequestList":
      FulfillmentRequestList,
    ".io.restorecommerce.fulfillment.Fulfillment": Fulfillment,
    ".io.restorecommerce.fulfillment.FulfillmentResponse": FulfillmentResponse,
    ".io.restorecommerce.fulfillment.FulfillmentResponseList":
      FulfillmentResponseList,
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
    protoMetadata8,
  ],
  options: {
    services: {
      Service: {
        options: { service_name: "fulfillment" },
        methods: { Read: { is_query: true }, Track: { is_query: true } },
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
