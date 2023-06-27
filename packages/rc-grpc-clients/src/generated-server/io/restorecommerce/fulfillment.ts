/* eslint-disable */
import * as Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { Any, protoMetadata as protoMetadata1 } from "../../google/protobuf/any";
import { protoMetadata as protoMetadata7, ShippingAddress } from "./address";
import { Amount, protoMetadata as protoMetadata11 } from "./amount";
import { protoMetadata as protoMetadata4, Subject } from "./auth";
import { protoMetadata as protoMetadata8 } from "./country";
import { InvoiceListResponse, protoMetadata as protoMetadata12 } from "./invoice";
import { Meta, protoMetadata as protoMetadata6 } from "./meta";
import { KafkaSubscription, protoMetadata as protoMetadata10, Resolver } from "./options";
import { Package, protoMetadata as protoMetadata9 } from "./product";
import { protoMetadata as protoMetadata2, Reference } from "./reference";
import { DeleteRequest, DeleteResponse, protoMetadata as protoMetadata3, ReadRequest } from "./resource_base";
import { OperationStatus, protoMetadata as protoMetadata5, Status, StatusListResponse } from "./status";

export const protobufPackage = "io.restorecommerce.fulfillment";

export enum State {
  FAILED = "FAILED",
  INVALID = "INVALID",
  CREATED = "CREATED",
  SUBMITTED = "SUBMITTED",
  IN_TRANSIT = "IN_TRANSIT",
  FULFILLED = "FULFILLED",
  WITHDRAWN = "WITHDRAWN",
  CANCELLED = "CANCELLED",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function stateFromJSON(object: any): State {
  switch (object) {
    case 0:
    case "FAILED":
      return State.FAILED;
    case 1:
    case "INVALID":
      return State.INVALID;
    case 2:
    case "CREATED":
      return State.CREATED;
    case 3:
    case "SUBMITTED":
      return State.SUBMITTED;
    case 4:
    case "IN_TRANSIT":
      return State.IN_TRANSIT;
    case 5:
    case "FULFILLED":
      return State.FULFILLED;
    case 6:
    case "WITHDRAWN":
      return State.WITHDRAWN;
    case 7:
    case "CANCELLED":
      return State.CANCELLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return State.UNRECOGNIZED;
  }
}

export function stateToJSON(object: State): string {
  switch (object) {
    case State.FAILED:
      return "FAILED";
    case State.INVALID:
      return "INVALID";
    case State.CREATED:
      return "CREATED";
    case State.SUBMITTED:
      return "SUBMITTED";
    case State.IN_TRANSIT:
      return "IN_TRANSIT";
    case State.FULFILLED:
      return "FULFILLED";
    case State.WITHDRAWN:
      return "WITHDRAWN";
    case State.CANCELLED:
      return "CANCELLED";
    case State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function stateToNumber(object: State): number {
  switch (object) {
    case State.FAILED:
      return 0;
    case State.INVALID:
      return 1;
    case State.CREATED:
      return 2;
    case State.SUBMITTED:
      return 3;
    case State.IN_TRANSIT:
      return 4;
    case State.FULFILLED:
      return 5;
    case State.WITHDRAWN:
      return 6;
    case State.CANCELLED:
      return 7;
    case State.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface Item {
  product_id?: string | undefined;
  variant_id?: string | undefined;
  quantity?: number | undefined;
  package?: Package | undefined;
}

export interface Parcel {
  id?: string | undefined;
  product_id?: string | undefined;
  variant_id?: string | undefined;
  item?: Item | undefined;
  amount?: Amount | undefined;
  package?: Package | undefined;
}

export interface Label {
  url?: string | undefined;
  pdf?: string | undefined;
  png?: string | undefined;
  parcel_id?:
    | string
    | undefined;
  /** filled on Order */
  shipment_number?:
    | string
    | undefined;
  /** update by Track */
  state?:
    | State
    | undefined;
  /** API status */
  status?: Status | undefined;
}

export interface Packaging {
  reference?: Reference | undefined;
  parcels: Parcel[];
  sender?: ShippingAddress | undefined;
  recipient?: ShippingAddress | undefined;
  notify?: string | undefined;
  export_type?: string | undefined;
  export_description?: string | undefined;
  invoice_number?: string | undefined;
}

export interface Event {
  timestamp?: number | undefined;
  location?: string | undefined;
  details?: Any | undefined;
  status?: Status | undefined;
}

export interface Tracking {
  shipment_number?: string | undefined;
  events: Event[];
  details?: Any | undefined;
  status?: Status | undefined;
}

/** This is the message of how it get stored to the database */
export interface Fulfillment {
  id?:
    | string
    | undefined;
  /** set by user */
  packaging?: Packaging | undefined;
  meta?:
    | Meta
    | undefined;
  /** set by service */
  labels: Label[];
  /** set by service */
  trackings: Tracking[];
  /** set by service */
  total_amounts: Amount[];
  /** set by service */
  state?: State | undefined;
}

export interface FulfillmentList {
  items: Fulfillment[];
  total_count?: number | undefined;
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
  id?:
    | string
    | undefined;
  /** optional */
  shipment_numbers: string[];
  options?: Any | undefined;
  subject?: Subject | undefined;
}

export interface FulfillmentIdList {
  items: FulfillmentId[];
  total_count?: number | undefined;
  subject?: Subject;
}

export interface Deleted {
  id: string;
}

export interface InvoiceRequest {
  /** if given */
  invoice_number?: string | undefined;
  fulfillment_id?:
    | string
    | undefined;
  /** includes all on empty */
  included_parcels: string[];
}

export interface InvoiceRequestList {
  items: InvoiceRequest[];
  total_count?: number | undefined;
  subject?: Subject;
}

function createBaseItem(): Item {
  return { product_id: undefined, variant_id: undefined, quantity: undefined, package: undefined };
}

export const Item = {
  encode(message: Item, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.product_id !== undefined) {
      writer.uint32(10).string(message.product_id);
    }
    if (message.variant_id !== undefined) {
      writer.uint32(18).string(message.variant_id);
    }
    if (message.quantity !== undefined) {
      writer.uint32(24).int32(message.quantity);
    }
    if (message.package !== undefined) {
      Package.encode(message.package, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Item {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.product_id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.variant_id = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.quantity = reader.int32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.package = Package.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Item {
    return {
      product_id: isSet(object.product_id) ? String(object.product_id) : undefined,
      variant_id: isSet(object.variant_id) ? String(object.variant_id) : undefined,
      quantity: isSet(object.quantity) ? Number(object.quantity) : undefined,
      package: isSet(object.package) ? Package.fromJSON(object.package) : undefined,
    };
  },

  toJSON(message: Item): unknown {
    const obj: any = {};
    message.product_id !== undefined && (obj.product_id = message.product_id);
    message.variant_id !== undefined && (obj.variant_id = message.variant_id);
    message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
    message.package !== undefined && (obj.package = message.package ? Package.toJSON(message.package) : undefined);
    return obj;
  },

  create(base?: DeepPartial<Item>): Item {
    return Item.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Item>): Item {
    const message = createBaseItem();
    message.product_id = object.product_id ?? undefined;
    message.variant_id = object.variant_id ?? undefined;
    message.quantity = object.quantity ?? undefined;
    message.package = (object.package !== undefined && object.package !== null)
      ? Package.fromPartial(object.package)
      : undefined;
    return message;
  },
};

function createBaseParcel(): Parcel {
  return {
    id: undefined,
    product_id: undefined,
    variant_id: undefined,
    item: undefined,
    amount: undefined,
    package: undefined,
  };
}

export const Parcel = {
  encode(message: Parcel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.product_id !== undefined) {
      writer.uint32(18).string(message.product_id);
    }
    if (message.variant_id !== undefined) {
      writer.uint32(26).string(message.variant_id);
    }
    if (message.item !== undefined) {
      Item.encode(message.item, writer.uint32(34).fork()).ldelim();
    }
    if (message.amount !== undefined) {
      Amount.encode(message.amount, writer.uint32(42).fork()).ldelim();
    }
    if (message.package !== undefined) {
      Package.encode(message.package, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Parcel {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParcel();
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

          message.product_id = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.variant_id = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.item = Item.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.amount = Amount.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.package = Package.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Parcel {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      product_id: isSet(object.product_id) ? String(object.product_id) : undefined,
      variant_id: isSet(object.variant_id) ? String(object.variant_id) : undefined,
      item: isSet(object.item) ? Item.fromJSON(object.item) : undefined,
      amount: isSet(object.amount) ? Amount.fromJSON(object.amount) : undefined,
      package: isSet(object.package) ? Package.fromJSON(object.package) : undefined,
    };
  },

  toJSON(message: Parcel): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.product_id !== undefined && (obj.product_id = message.product_id);
    message.variant_id !== undefined && (obj.variant_id = message.variant_id);
    message.item !== undefined && (obj.item = message.item ? Item.toJSON(message.item) : undefined);
    message.amount !== undefined && (obj.amount = message.amount ? Amount.toJSON(message.amount) : undefined);
    message.package !== undefined && (obj.package = message.package ? Package.toJSON(message.package) : undefined);
    return obj;
  },

  create(base?: DeepPartial<Parcel>): Parcel {
    return Parcel.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Parcel>): Parcel {
    const message = createBaseParcel();
    message.id = object.id ?? undefined;
    message.product_id = object.product_id ?? undefined;
    message.variant_id = object.variant_id ?? undefined;
    message.item = (object.item !== undefined && object.item !== null) ? Item.fromPartial(object.item) : undefined;
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Amount.fromPartial(object.amount)
      : undefined;
    message.package = (object.package !== undefined && object.package !== null)
      ? Package.fromPartial(object.package)
      : undefined;
    return message;
  },
};

function createBaseLabel(): Label {
  return {
    url: undefined,
    pdf: undefined,
    png: undefined,
    parcel_id: undefined,
    shipment_number: undefined,
    state: undefined,
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
    if (message.parcel_id !== undefined) {
      writer.uint32(34).string(message.parcel_id);
    }
    if (message.shipment_number !== undefined) {
      writer.uint32(42).string(message.shipment_number);
    }
    if (message.state !== undefined) {
      writer.uint32(48).int32(stateToNumber(message.state));
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Label {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLabel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.url = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pdf = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.png = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.parcel_id = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.shipment_number = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.state = stateFromJSON(reader.int32());
          continue;
        case 7:
          if (tag !== 58) {
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

  fromJSON(object: any): Label {
    return {
      url: isSet(object.url) ? String(object.url) : undefined,
      pdf: isSet(object.pdf) ? String(object.pdf) : undefined,
      png: isSet(object.png) ? String(object.png) : undefined,
      parcel_id: isSet(object.parcel_id) ? String(object.parcel_id) : undefined,
      shipment_number: isSet(object.shipment_number) ? String(object.shipment_number) : undefined,
      state: isSet(object.state) ? stateFromJSON(object.state) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: Label): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    message.pdf !== undefined && (obj.pdf = message.pdf);
    message.png !== undefined && (obj.png = message.png);
    message.parcel_id !== undefined && (obj.parcel_id = message.parcel_id);
    message.shipment_number !== undefined && (obj.shipment_number = message.shipment_number);
    message.state !== undefined && (obj.state = message.state !== undefined ? stateToJSON(message.state) : undefined);
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
    message.parcel_id = object.parcel_id ?? undefined;
    message.shipment_number = object.shipment_number ?? undefined;
    message.state = object.state ?? undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBasePackaging(): Packaging {
  return {
    reference: undefined,
    parcels: [],
    sender: undefined,
    recipient: undefined,
    notify: undefined,
    export_type: undefined,
    export_description: undefined,
    invoice_number: undefined,
  };
}

export const Packaging = {
  encode(message: Packaging, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reference !== undefined) {
      Reference.encode(message.reference, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.parcels) {
      Parcel.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.sender !== undefined) {
      ShippingAddress.encode(message.sender, writer.uint32(26).fork()).ldelim();
    }
    if (message.recipient !== undefined) {
      ShippingAddress.encode(message.recipient, writer.uint32(34).fork()).ldelim();
    }
    if (message.notify !== undefined) {
      writer.uint32(42).string(message.notify);
    }
    if (message.export_type !== undefined) {
      writer.uint32(50).string(message.export_type);
    }
    if (message.export_description !== undefined) {
      writer.uint32(58).string(message.export_description);
    }
    if (message.invoice_number !== undefined) {
      writer.uint32(66).string(message.invoice_number);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Packaging {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePackaging();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.reference = Reference.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.parcels.push(Parcel.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sender = ShippingAddress.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.recipient = ShippingAddress.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.notify = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.export_type = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.export_description = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.invoice_number = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Packaging {
    return {
      reference: isSet(object.reference) ? Reference.fromJSON(object.reference) : undefined,
      parcels: Array.isArray(object?.parcels) ? object.parcels.map((e: any) => Parcel.fromJSON(e)) : [],
      sender: isSet(object.sender) ? ShippingAddress.fromJSON(object.sender) : undefined,
      recipient: isSet(object.recipient) ? ShippingAddress.fromJSON(object.recipient) : undefined,
      notify: isSet(object.notify) ? String(object.notify) : undefined,
      export_type: isSet(object.export_type) ? String(object.export_type) : undefined,
      export_description: isSet(object.export_description) ? String(object.export_description) : undefined,
      invoice_number: isSet(object.invoice_number) ? String(object.invoice_number) : undefined,
    };
  },

  toJSON(message: Packaging): unknown {
    const obj: any = {};
    message.reference !== undefined &&
      (obj.reference = message.reference ? Reference.toJSON(message.reference) : undefined);
    if (message.parcels) {
      obj.parcels = message.parcels.map((e) => e ? Parcel.toJSON(e) : undefined);
    } else {
      obj.parcels = [];
    }
    message.sender !== undefined && (obj.sender = message.sender ? ShippingAddress.toJSON(message.sender) : undefined);
    message.recipient !== undefined &&
      (obj.recipient = message.recipient ? ShippingAddress.toJSON(message.recipient) : undefined);
    message.notify !== undefined && (obj.notify = message.notify);
    message.export_type !== undefined && (obj.export_type = message.export_type);
    message.export_description !== undefined && (obj.export_description = message.export_description);
    message.invoice_number !== undefined && (obj.invoice_number = message.invoice_number);
    return obj;
  },

  create(base?: DeepPartial<Packaging>): Packaging {
    return Packaging.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Packaging>): Packaging {
    const message = createBasePackaging();
    message.reference = (object.reference !== undefined && object.reference !== null)
      ? Reference.fromPartial(object.reference)
      : undefined;
    message.parcels = object.parcels?.map((e) => Parcel.fromPartial(e)) || [];
    message.sender = (object.sender !== undefined && object.sender !== null)
      ? ShippingAddress.fromPartial(object.sender)
      : undefined;
    message.recipient = (object.recipient !== undefined && object.recipient !== null)
      ? ShippingAddress.fromPartial(object.recipient)
      : undefined;
    message.notify = object.notify ?? undefined;
    message.export_type = object.export_type ?? undefined;
    message.export_description = object.export_description ?? undefined;
    message.invoice_number = object.invoice_number ?? undefined;
    return message;
  },
};

function createBaseEvent(): Event {
  return { timestamp: undefined, location: undefined, details: undefined, status: undefined };
}

export const Event = {
  encode(message: Event, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timestamp !== undefined) {
      writer.uint32(8).int64(message.timestamp);
    }
    if (message.location !== undefined) {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.timestamp = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.location = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.details = Any.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
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

  fromJSON(object: any): Event {
    return {
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : undefined,
      location: isSet(object.location) ? String(object.location) : undefined,
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
    message.timestamp = object.timestamp ?? undefined;
    message.location = object.location ?? undefined;
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
  return { shipment_number: undefined, events: [], details: undefined, status: undefined };
}

export const Tracking = {
  encode(message: Tracking, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shipment_number !== undefined) {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTracking();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.shipment_number = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.events.push(Event.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.details = Any.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
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

  fromJSON(object: any): Tracking {
    return {
      shipment_number: isSet(object.shipment_number) ? String(object.shipment_number) : undefined,
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
    message.shipment_number = object.shipment_number ?? undefined;
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

function createBaseFulfillment(): Fulfillment {
  return {
    id: undefined,
    packaging: undefined,
    meta: undefined,
    labels: [],
    trackings: [],
    total_amounts: [],
    state: undefined,
  };
}

export const Fulfillment = {
  encode(message: Fulfillment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.packaging !== undefined) {
      Packaging.encode(message.packaging, writer.uint32(18).fork()).ldelim();
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.labels) {
      Label.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.trackings) {
      Tracking.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.total_amounts) {
      Amount.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.state !== undefined) {
      writer.uint32(64).int32(stateToNumber(message.state));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Fulfillment {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFulfillment();
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

          message.packaging = Packaging.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.meta = Meta.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.labels.push(Label.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.trackings.push(Tracking.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.total_amounts.push(Amount.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.state = stateFromJSON(reader.int32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Fulfillment {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      packaging: isSet(object.packaging) ? Packaging.fromJSON(object.packaging) : undefined,
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      labels: Array.isArray(object?.labels) ? object.labels.map((e: any) => Label.fromJSON(e)) : [],
      trackings: Array.isArray(object?.trackings) ? object.trackings.map((e: any) => Tracking.fromJSON(e)) : [],
      total_amounts: Array.isArray(object?.total_amounts)
        ? object.total_amounts.map((e: any) => Amount.fromJSON(e))
        : [],
      state: isSet(object.state) ? stateFromJSON(object.state) : undefined,
    };
  },

  toJSON(message: Fulfillment): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.packaging !== undefined &&
      (obj.packaging = message.packaging ? Packaging.toJSON(message.packaging) : undefined);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    if (message.labels) {
      obj.labels = message.labels.map((e) => e ? Label.toJSON(e) : undefined);
    } else {
      obj.labels = [];
    }
    if (message.trackings) {
      obj.trackings = message.trackings.map((e) => e ? Tracking.toJSON(e) : undefined);
    } else {
      obj.trackings = [];
    }
    if (message.total_amounts) {
      obj.total_amounts = message.total_amounts.map((e) => e ? Amount.toJSON(e) : undefined);
    } else {
      obj.total_amounts = [];
    }
    message.state !== undefined && (obj.state = message.state !== undefined ? stateToJSON(message.state) : undefined);
    return obj;
  },

  create(base?: DeepPartial<Fulfillment>): Fulfillment {
    return Fulfillment.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Fulfillment>): Fulfillment {
    const message = createBaseFulfillment();
    message.id = object.id ?? undefined;
    message.packaging = (object.packaging !== undefined && object.packaging !== null)
      ? Packaging.fromPartial(object.packaging)
      : undefined;
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    message.labels = object.labels?.map((e) => Label.fromPartial(e)) || [];
    message.trackings = object.trackings?.map((e) => Tracking.fromPartial(e)) || [];
    message.total_amounts = object.total_amounts?.map((e) => Amount.fromPartial(e)) || [];
    message.state = object.state ?? undefined;
    return message;
  },
};

function createBaseFulfillmentList(): FulfillmentList {
  return { items: [], total_count: undefined, subject: undefined };
}

export const FulfillmentList = {
  encode(message: FulfillmentList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      Fulfillment.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== undefined) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FulfillmentList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFulfillmentList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(Fulfillment.decode(reader, reader.uint32()));
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

  fromJSON(object: any): FulfillmentList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => Fulfillment.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : undefined,
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
    message.total_count = object.total_count ?? undefined;
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFulfillmentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payload = Fulfillment.decode(reader, reader.uint32());
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

function createBaseFulfillmentListResponse(): FulfillmentListResponse {
  return { items: [], total_count: 0, operation_status: undefined };
}

export const FulfillmentListResponse = {
  encode(message: FulfillmentListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): FulfillmentListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFulfillmentListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(FulfillmentResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): FulfillmentListResponse {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => FulfillmentResponse.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      operation_status: isSet(object.operation_status) ? OperationStatus.fromJSON(object.operation_status) : undefined,
    };
  },

  toJSON(message: FulfillmentListResponse): unknown {
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

  create(base?: DeepPartial<FulfillmentListResponse>): FulfillmentListResponse {
    return FulfillmentListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FulfillmentListResponse>): FulfillmentListResponse {
    const message = createBaseFulfillmentListResponse();
    message.items = object.items?.map((e) => FulfillmentResponse.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.operation_status = (object.operation_status !== undefined && object.operation_status !== null)
      ? OperationStatus.fromPartial(object.operation_status)
      : undefined;
    return message;
  },
};

function createBaseFulfillmentId(): FulfillmentId {
  return { id: undefined, shipment_numbers: [], options: undefined, subject: undefined };
}

export const FulfillmentId = {
  encode(message: FulfillmentId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFulfillmentId();
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

          message.shipment_numbers.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.options = Any.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
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

  fromJSON(object: any): FulfillmentId {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      shipment_numbers: Array.isArray(object?.shipment_numbers)
        ? object.shipment_numbers.map((e: any) => String(e))
        : [],
      options: isSet(object.options) ? Any.fromJSON(object.options) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
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
    message.options !== undefined && (obj.options = message.options ? Any.toJSON(message.options) : undefined);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<FulfillmentId>): FulfillmentId {
    return FulfillmentId.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FulfillmentId>): FulfillmentId {
    const message = createBaseFulfillmentId();
    message.id = object.id ?? undefined;
    message.shipment_numbers = object.shipment_numbers?.map((e) => e) || [];
    message.options = (object.options !== undefined && object.options !== null)
      ? Any.fromPartial(object.options)
      : undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseFulfillmentIdList(): FulfillmentIdList {
  return { items: [], total_count: undefined, subject: undefined };
}

export const FulfillmentIdList = {
  encode(message: FulfillmentIdList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      FulfillmentId.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== undefined) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FulfillmentIdList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFulfillmentIdList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(FulfillmentId.decode(reader, reader.uint32()));
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

  fromJSON(object: any): FulfillmentIdList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => FulfillmentId.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: FulfillmentIdList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? FulfillmentId.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<FulfillmentIdList>): FulfillmentIdList {
    return FulfillmentIdList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FulfillmentIdList>): FulfillmentIdList {
    const message = createBaseFulfillmentIdList();
    message.items = object.items?.map((e) => FulfillmentId.fromPartial(e)) || [];
    message.total_count = object.total_count ?? undefined;
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

function createBaseInvoiceRequest(): InvoiceRequest {
  return { invoice_number: undefined, fulfillment_id: undefined, included_parcels: [] };
}

export const InvoiceRequest = {
  encode(message: InvoiceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.invoice_number !== undefined) {
      writer.uint32(10).string(message.invoice_number);
    }
    if (message.fulfillment_id !== undefined) {
      writer.uint32(18).string(message.fulfillment_id);
    }
    for (const v of message.included_parcels) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvoiceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvoiceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.invoice_number = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fulfillment_id = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.included_parcels.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InvoiceRequest {
    return {
      invoice_number: isSet(object.invoice_number) ? String(object.invoice_number) : undefined,
      fulfillment_id: isSet(object.fulfillment_id) ? String(object.fulfillment_id) : undefined,
      included_parcels: Array.isArray(object?.included_parcels)
        ? object.included_parcels.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: InvoiceRequest): unknown {
    const obj: any = {};
    message.invoice_number !== undefined && (obj.invoice_number = message.invoice_number);
    message.fulfillment_id !== undefined && (obj.fulfillment_id = message.fulfillment_id);
    if (message.included_parcels) {
      obj.included_parcels = message.included_parcels.map((e) => e);
    } else {
      obj.included_parcels = [];
    }
    return obj;
  },

  create(base?: DeepPartial<InvoiceRequest>): InvoiceRequest {
    return InvoiceRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<InvoiceRequest>): InvoiceRequest {
    const message = createBaseInvoiceRequest();
    message.invoice_number = object.invoice_number ?? undefined;
    message.fulfillment_id = object.fulfillment_id ?? undefined;
    message.included_parcels = object.included_parcels?.map((e) => e) || [];
    return message;
  },
};

function createBaseInvoiceRequestList(): InvoiceRequestList {
  return { items: [], total_count: undefined, subject: undefined };
}

export const InvoiceRequestList = {
  encode(message: InvoiceRequestList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      InvoiceRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== undefined) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvoiceRequestList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvoiceRequestList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(InvoiceRequest.decode(reader, reader.uint32()));
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

  fromJSON(object: any): InvoiceRequestList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => InvoiceRequest.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: InvoiceRequestList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? InvoiceRequest.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<InvoiceRequestList>): InvoiceRequestList {
    return InvoiceRequestList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<InvoiceRequestList>): InvoiceRequestList {
    const message = createBaseInvoiceRequestList();
    message.items = object.items?.map((e) => InvoiceRequest.fromPartial(e)) || [];
    message.total_count = object.total_count ?? undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

/** Microservice definition. */
export type FulfillmentServiceDefinition = typeof FulfillmentServiceDefinition;
export const FulfillmentServiceDefinition = {
  name: "FulfillmentService",
  fullName: "io.restorecommerce.fulfillment.FulfillmentService",
  methods: {
    /** Returns a list of shipment IDs. */
    read: {
      name: "Read",
      requestType: ReadRequest,
      requestStream: false,
      responseType: FulfillmentListResponse,
      responseStream: false,
      options: { _unknownFields: { 248008: [Buffer.from([1])] } },
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
    /** Evaluate fulfillment for correctness */
    evaluate: {
      name: "Evaluate",
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
    /** Withdraw a batch of fulfillments and request for cancelation */
    withdraw: {
      name: "Withdraw",
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
    /** Requires Invoice Service */
    createInvoice: {
      name: "CreateInvoice",
      requestType: InvoiceRequestList,
      requestStream: false,
      responseType: InvoiceListResponse,
      responseStream: false,
      options: {},
    },
    /** Requires Invoice Service */
    triggerInvoice: {
      name: "TriggerInvoice",
      requestType: InvoiceRequestList,
      requestStream: false,
      responseType: StatusListResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface FulfillmentServiceImplementation<CallContextExt = {}> {
  /** Returns a list of shipment IDs. */
  read(request: ReadRequest, context: CallContext & CallContextExt): Promise<DeepPartial<FulfillmentListResponse>>;
  /** Creates fulfillment orders */
  create(
    request: FulfillmentList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<FulfillmentListResponse>>;
  /** Updates fulfillment orders unless Status is beyond Submit */
  update(
    request: FulfillmentList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<FulfillmentListResponse>>;
  /** Creates or Updates fulfillment orders unless Status is beyond Submit */
  upsert(
    request: FulfillmentList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<FulfillmentListResponse>>;
  /** Evaluate fulfillment for correctness */
  evaluate(
    request: FulfillmentList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<FulfillmentListResponse>>;
  /** Creates, Submits and Updates fulfillment orders against API */
  submit(
    request: FulfillmentList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<FulfillmentListResponse>>;
  /** Track a batch of fulfillments */
  track(
    request: FulfillmentIdList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<FulfillmentListResponse>>;
  /** Withdraw a batch of fulfillments and request for cancelation */
  withdraw(
    request: FulfillmentIdList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<FulfillmentListResponse>>;
  /** Cancel a batch of fulfillments */
  cancel(
    request: FulfillmentIdList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<FulfillmentListResponse>>;
  /** Delete a batch of fulfillments from the database */
  delete(request: DeleteRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteResponse>>;
  /** Requires Invoice Service */
  createInvoice(
    request: InvoiceRequestList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<InvoiceListResponse>>;
  /** Requires Invoice Service */
  triggerInvoice(
    request: InvoiceRequestList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<StatusListResponse>>;
}

export interface FulfillmentServiceClient<CallOptionsExt = {}> {
  /** Returns a list of shipment IDs. */
  read(request: DeepPartial<ReadRequest>, options?: CallOptions & CallOptionsExt): Promise<FulfillmentListResponse>;
  /** Creates fulfillment orders */
  create(
    request: DeepPartial<FulfillmentList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<FulfillmentListResponse>;
  /** Updates fulfillment orders unless Status is beyond Submit */
  update(
    request: DeepPartial<FulfillmentList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<FulfillmentListResponse>;
  /** Creates or Updates fulfillment orders unless Status is beyond Submit */
  upsert(
    request: DeepPartial<FulfillmentList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<FulfillmentListResponse>;
  /** Evaluate fulfillment for correctness */
  evaluate(
    request: DeepPartial<FulfillmentList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<FulfillmentListResponse>;
  /** Creates, Submits and Updates fulfillment orders against API */
  submit(
    request: DeepPartial<FulfillmentList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<FulfillmentListResponse>;
  /** Track a batch of fulfillments */
  track(
    request: DeepPartial<FulfillmentIdList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<FulfillmentListResponse>;
  /** Withdraw a batch of fulfillments and request for cancelation */
  withdraw(
    request: DeepPartial<FulfillmentIdList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<FulfillmentListResponse>;
  /** Cancel a batch of fulfillments */
  cancel(
    request: DeepPartial<FulfillmentIdList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<FulfillmentListResponse>;
  /** Delete a batch of fulfillments from the database */
  delete(request: DeepPartial<DeleteRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteResponse>;
  /** Requires Invoice Service */
  createInvoice(
    request: DeepPartial<InvoiceRequestList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<InvoiceListResponse>;
  /** Requires Invoice Service */
  triggerInvoice(
    request: DeepPartial<InvoiceRequestList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<StatusListResponse>;
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
      "io/restorecommerce/reference.proto",
      "io/restorecommerce/resource_base.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/address.proto",
      "io/restorecommerce/country.proto",
      "io/restorecommerce/product.proto",
      "io/restorecommerce/options.proto",
      "io/restorecommerce/amount.proto",
      "io/restorecommerce/invoice.proto",
    ],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "Item",
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
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "variant_id",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "variantId",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "quantity",
        "number": 3,
        "label": 1,
        "type": 5,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "quantity",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "package",
        "number": 4,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.product.Package",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "package",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_product_id", "options": undefined }, { "name": "_variant_id", "options": undefined }, {
        "name": "_quantity",
        "options": undefined,
      }, { "name": "_package", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "Parcel",
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
        "proto3Optional": true,
      }, {
        "name": "product_id",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
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
        "proto3Optional": true,
      }, {
        "name": "variant_id",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "variantId",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "item",
        "number": 4,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment.Item",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "item",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "amount",
        "number": 5,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.amount.Amount",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "amount",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "package",
        "number": 6,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.product.Package",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 5,
        "jsonName": "package",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "_id", "options": undefined },
        { "name": "_product_id", "options": undefined },
        { "name": "_variant_id", "options": undefined },
        { "name": "_item", "options": undefined },
        { "name": "_amount", "options": undefined },
        { "name": "_package", "options": undefined },
      ],
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
        "name": "parcel_id",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "parcelId",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "shipment_number",
        "number": 5,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "shipmentNumber",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "state",
        "number": 6,
        "label": 1,
        "type": 14,
        "typeName": ".io.restorecommerce.fulfillment.State",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "state",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "status",
        "number": 7,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.status.Status",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "status",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "type", "options": undefined },
        { "name": "_parcel_id", "options": undefined },
        { "name": "_shipment_number", "options": undefined },
        { "name": "_state", "options": undefined },
        { "name": "_status", "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "Packaging",
      "field": [{
        "name": "reference",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.reference.Reference",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "reference",
        "options": undefined,
        "proto3Optional": true,
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
        "typeName": ".io.restorecommerce.address.ShippingAddress",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "sender",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "recipient",
        "number": 4,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.address.ShippingAddress",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "recipient",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "notify",
        "number": 5,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "notify",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "export_type",
        "number": 6,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "exportType",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "export_description",
        "number": 7,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 5,
        "jsonName": "exportDescription",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "invoice_number",
        "number": 8,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 6,
        "jsonName": "invoiceNumber",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "_reference", "options": undefined },
        { "name": "_sender", "options": undefined },
        { "name": "_recipient", "options": undefined },
        { "name": "_notify", "options": undefined },
        { "name": "_export_type", "options": undefined },
        { "name": "_export_description", "options": undefined },
        { "name": "_invoice_number", "options": undefined },
      ],
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
        "proto3Optional": true,
      }, {
        "name": "location",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "location",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "details",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.Any",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "details",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "status",
        "number": 4,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.status.Status",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "status",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_timestamp", "options": undefined }, { "name": "_location", "options": undefined }, {
        "name": "_details",
        "options": undefined,
      }, { "name": "_status", "options": undefined }],
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
        "proto3Optional": true,
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
        "oneofIndex": 1,
        "jsonName": "details",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "status",
        "number": 5,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.status.Status",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "status",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "_shipment_number", "options": undefined },
        { "name": "_details", "options": undefined },
        { "name": "_status", "options": undefined },
      ],
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
        "proto3Optional": true,
      }, {
        "name": "packaging",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment.Packaging",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "packaging",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "meta",
        "number": 3,
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
        "name": "trackings",
        "number": 5,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment.Tracking",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "trackings",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "total_amounts",
        "number": 6,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.amount.Amount",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "totalAmounts",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "state",
        "number": 8,
        "label": 1,
        "type": 14,
        "typeName": ".io.restorecommerce.fulfillment.State",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "state",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_id", "options": undefined }, { "name": "_packaging", "options": undefined }, {
        "name": "_meta",
        "options": undefined,
      }, { "name": "_state", "options": undefined }],
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
      "name": "FulfillmentListResponse",
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
      "name": "FulfillmentId",
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
        "proto3Optional": true,
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
        "oneofIndex": 1,
        "jsonName": "options",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "subject",
        "number": 4,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.auth.Subject",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "subject",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_id", "options": undefined }, { "name": "_options", "options": undefined }, {
        "name": "_subject",
        "options": undefined,
      }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "FulfillmentIdList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment.FulfillmentId",
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
      "name": "InvoiceRequest",
      "field": [{
        "name": "invoice_number",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "invoiceNumber",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "fulfillment_id",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "fulfillmentId",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "included_parcels",
        "number": 3,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "includedParcels",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_invoice_number", "options": undefined }, {
        "name": "_fulfillment_id",
        "options": undefined,
      }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "InvoiceRequestList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment.InvoiceRequest",
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
    }],
    "enumType": [{
      "name": "State",
      "value": [
        { "name": "FAILED", "number": 0, "options": undefined },
        { "name": "INVALID", "number": 1, "options": undefined },
        { "name": "CREATED", "number": 2, "options": undefined },
        { "name": "SUBMITTED", "number": 3, "options": undefined },
        { "name": "IN_TRANSIT", "number": 4, "options": undefined },
        { "name": "FULFILLED", "number": 5, "options": undefined },
        { "name": "WITHDRAWN", "number": 6, "options": undefined },
        { "name": "CANCELLED", "number": 7, "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "service": [{
      "name": "FulfillmentService",
      "method": [{
        "name": "Read",
        "inputType": ".io.restorecommerce.resourcebase.ReadRequest",
        "outputType": ".io.restorecommerce.fulfillment.FulfillmentListResponse",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Create",
        "inputType": ".io.restorecommerce.fulfillment.FulfillmentList",
        "outputType": ".io.restorecommerce.fulfillment.FulfillmentListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Update",
        "inputType": ".io.restorecommerce.fulfillment.FulfillmentList",
        "outputType": ".io.restorecommerce.fulfillment.FulfillmentListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Upsert",
        "inputType": ".io.restorecommerce.fulfillment.FulfillmentList",
        "outputType": ".io.restorecommerce.fulfillment.FulfillmentListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Evaluate",
        "inputType": ".io.restorecommerce.fulfillment.FulfillmentList",
        "outputType": ".io.restorecommerce.fulfillment.FulfillmentListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Submit",
        "inputType": ".io.restorecommerce.fulfillment.FulfillmentList",
        "outputType": ".io.restorecommerce.fulfillment.FulfillmentListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Track",
        "inputType": ".io.restorecommerce.fulfillment.FulfillmentIdList",
        "outputType": ".io.restorecommerce.fulfillment.FulfillmentListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Withdraw",
        "inputType": ".io.restorecommerce.fulfillment.FulfillmentIdList",
        "outputType": ".io.restorecommerce.fulfillment.FulfillmentListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Cancel",
        "inputType": ".io.restorecommerce.fulfillment.FulfillmentIdList",
        "outputType": ".io.restorecommerce.fulfillment.FulfillmentListResponse",
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
        "name": "CreateInvoice",
        "inputType": ".io.restorecommerce.fulfillment.InvoiceRequestList",
        "outputType": ".io.restorecommerce.invoice.InvoiceListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "TriggerInvoice",
        "inputType": ".io.restorecommerce.fulfillment.InvoiceRequestList",
        "outputType": ".io.restorecommerce.status.StatusListResponse",
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
        "path": [6, 0],
        "span": [20, 0, 82, 1],
        "leadingComments": "*\nMicroservice definition.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 0],
        "span": [24, 2, 26, 3],
        "leadingComments": "*\nReturns a list of shipment IDs.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 1],
        "span": [31, 2, 65],
        "leadingComments": "*\nCreates fulfillment orders\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 2],
        "span": [36, 2, 65],
        "leadingComments": "*\nUpdates fulfillment orders unless Status is beyond Submit\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 3],
        "span": [41, 2, 65],
        "leadingComments": "*\nCreates or Updates fulfillment orders unless Status is beyond Submit\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 4],
        "span": [46, 2, 67],
        "leadingComments": "*\nEvaluate fulfillment for correctness\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 5],
        "span": [51, 2, 65],
        "leadingComments": "*\nCreates, Submits and Updates fulfillment orders against API\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 6],
        "span": [56, 2, 66],
        "leadingComments": "*\nTrack a batch of fulfillments\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 7],
        "span": [61, 2, 69],
        "leadingComments": "*\nWithdraw a batch of fulfillments and request for cancelation\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 8],
        "span": [66, 2, 67],
        "leadingComments": "*\nCancel a batch of fulfillments\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 9],
        "span": [71, 2, 118],
        "leadingComments": "*\nDelete a batch of fulfillments from the database\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 10],
        "span": [76, 2, 98],
        "leadingComments": "*\nRequires Invoice Service\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 11],
        "span": [81, 2, 97],
        "leadingComments": "*\nRequires Invoice Service\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 2, 2, 4],
        "span": [126, 2, 38],
        "leadingComments": "",
        "trailingComments": "filled on Order\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 2, 2, 5],
        "span": [127, 2, 27],
        "leadingComments": "",
        "trailingComments": "update by Track\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 2, 2, 6],
        "span": [128, 2, 55],
        "leadingComments": "",
        "trailingComments": "API status\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 6],
        "span": [159, 0, 175, 1],
        "leadingComments": "*\nThis is the message of how it get stored to the database\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 6, 2, 1],
        "span": [169, 2, 35],
        "leadingComments": "",
        "trailingComments": "set by user\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 6, 2, 3],
        "span": [171, 2, 28],
        "leadingComments": "",
        "trailingComments": "set by service\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 6, 2, 4],
        "span": [172, 2, 34],
        "leadingComments": "",
        "trailingComments": "set by service\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 6, 2, 5],
        "span": [173, 2, 62],
        "leadingComments": "",
        "trailingComments": "set by service\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 6, 2, 6],
        "span": [174, 2, 27],
        "leadingComments": "",
        "trailingComments": "set by service\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 10, 2, 1],
        "span": [196, 2, 39],
        "leadingComments": "",
        "trailingComments": "optional\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 13, 2, 0],
        "span": [212, 2, 37],
        "leadingComments": "",
        "trailingComments": " if given\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 13, 2, 2],
        "span": [214, 2, 39],
        "leadingComments": "",
        "trailingComments": " includes all on empty\n",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {
    ".io.restorecommerce.fulfillment.State": State,
    ".io.restorecommerce.fulfillment.Item": Item,
    ".io.restorecommerce.fulfillment.Parcel": Parcel,
    ".io.restorecommerce.fulfillment.Label": Label,
    ".io.restorecommerce.fulfillment.Packaging": Packaging,
    ".io.restorecommerce.fulfillment.Event": Event,
    ".io.restorecommerce.fulfillment.Tracking": Tracking,
    ".io.restorecommerce.fulfillment.Fulfillment": Fulfillment,
    ".io.restorecommerce.fulfillment.FulfillmentList": FulfillmentList,
    ".io.restorecommerce.fulfillment.FulfillmentResponse": FulfillmentResponse,
    ".io.restorecommerce.fulfillment.FulfillmentListResponse": FulfillmentListResponse,
    ".io.restorecommerce.fulfillment.FulfillmentId": FulfillmentId,
    ".io.restorecommerce.fulfillment.FulfillmentIdList": FulfillmentIdList,
    ".io.restorecommerce.fulfillment.Deleted": Deleted,
    ".io.restorecommerce.fulfillment.InvoiceRequest": InvoiceRequest,
    ".io.restorecommerce.fulfillment.InvoiceRequestList": InvoiceRequestList,
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
    protoMetadata10,
    protoMetadata11,
    protoMetadata12,
  ],
  options: {
    messages: {
      "Parcel": {
        fields: {
          "product_id": {
            "resolver": Resolver.decode(
              Buffer.from(
                "CjouaW8ucmVzdG9yZWNvbW1lcmNlLmZ1bGZpbGxtZW50X3Byb2R1Y3QuRnVsZmlsbG1lbnRQcm9kdWN0EgttYXN0ZXJfZGF0YRoTZnVsZmlsbG1lbnRfcHJvZHVjdCIEUmVhZCoHcHJvZHVjdA==",
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
              "CgxmdWxmaWxsbWVudHMSJ2lvLnJlc3RvcmVjb21tZXJjZS5mdWxmaWxsbWVudC5yZXNvdXJjZRoSZnVsZmlsbG1lbnRDcmVhdGVkIhJmdWxmaWxsbWVudFVwZGF0ZWQqEmZ1bGZpbGxtZW50RGVsZXRlZA==",
              "base64",
            ),
          ),
        },
      },
    },
    services: { "FulfillmentService": { options: undefined, methods: { "Read": { "is_query": true } } } },
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
