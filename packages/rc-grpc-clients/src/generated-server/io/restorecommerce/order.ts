/* eslint-disable */
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { Meta, protoMetadata as protoMetadata2 } from "./meta";
import {
  Address,
  ContactPerson,
  protoMetadata as protoMetadata6,
} from "./address";
import { Subject, protoMetadata as protoMetadata3 } from "./auth";
import {
  OperationStatus,
  Status,
  protoMetadata as protoMetadata4,
} from "./status";
import { CallContext, CallOptions } from "nice-grpc-common";
import {
  protoMetadata as protoMetadata1,
  ReadRequest,
  DeleteRequest,
  DeleteResponse,
} from "./resource_base";
import { protoMetadata as protoMetadata5, KafkaSubscription } from "./options";
import { protoMetadata as protoMetadata7, Item } from "./product";
import { protoMetadata as protoMetadata8, Parcel } from "./fulfillment";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { Address, ContactPerson, protoMetadata as protoMetadata6 } from "./address";
import { protoMetadata as protoMetadata3, Subject } from "./auth";
import { Parcel, protoMetadata as protoMetadata7 } from "./fulfillment";
import { Meta, protoMetadata as protoMetadata2 } from "./meta";
import { KafkaSubscription, protoMetadata as protoMetadata5 } from "./options";
import { DeleteRequest, DeleteResponse, protoMetadata as protoMetadata1, ReadRequest } from "./resource_base";
import { OperationStatus, protoMetadata as protoMetadata4, Status } from "./status";

export const protobufPackage = "io.restorecommerce.order";

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

/** Database Entity */
export interface Order {
  id: string;
  meta?: Meta;
  name: string;
  description: string;
  state: State;
  customer_reference: string;
  items: Item[];
  total_price: number;
  total_vat: number;
  total_weight_in_kg: number;
  shipping_address?: Address;
  billing_address?: Address;
  billing_email: string;
  contact_person?: ContactPerson;
  notification_email: string;
  fulfillment_ids: string[];
}

export interface ShippingDetails {
  export_type: string;
  export_description: string;
  invoice_number: string;
  sender_address?: Address;
  contact_person?: ContactPerson;
}

export interface TriggerFulfillmentRequest {
  order?: Order;
  shipping_details?: ShippingDetails;
  parcels: Parcel[];
}

export interface TriggerFulfillmentRequestList {
  items: TriggerFulfillmentRequest[];
  total_count: number;
  subject?: Subject;
}

export interface OrderList {
  items: Order[];
  total_count: number;
  subject?: Subject;
}

export interface OrderListResponse {
  items: OrderResponse[];
  total_count: number;
  operation_status?: OperationStatus;
}

export interface OrderResponse {
  payload?: Order;
  status?: Status;
}

export interface CancelRequestList {
  ids: string[];
  subject?: Subject;
}

export interface Deleted {
  id: string;
}

function createBaseOrder(): Order {
  return {
    id: "",
    meta: undefined,
    name: "",
    description: "",
    state: State.Undefined,
    customer_reference: "",
    items: [],
    total_price: 0,
    total_vat: 0,
    total_weight_in_kg: 0,
    shipping_address: undefined,
    billing_address: undefined,
    billing_email: "",
    contact_person: undefined,
    notification_email: "",
    fulfillment_ids: [],
  };
}

export const Order = {
  encode(message: Order, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.state !== State.Undefined) {
      writer.uint32(40).int32(stateToNumber(message.state));
    }
    if (message.customer_reference !== "") {
      writer.uint32(50).string(message.customer_reference);
    }
    for (const v of message.items) {
      Item.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.total_price !== 0) {
      writer.uint32(65).double(message.total_price);
    }
    if (message.total_vat !== 0) {
      writer.uint32(73).double(message.total_vat);
    }
    if (message.total_weight_in_kg !== 0) {
      writer.uint32(81).double(message.total_weight_in_kg);
    }
    if (message.shipping_address !== undefined) {
      Address.encode(message.shipping_address, writer.uint32(90).fork()).ldelim();
    }
    if (message.billing_address !== undefined) {
      Address.encode(message.billing_address, writer.uint32(106).fork()).ldelim();
    }
    if (message.billing_email !== "") {
      writer.uint32(114).string(message.billing_email);
    }
    if (message.contact_person !== undefined) {
      ContactPerson.encode(message.contact_person, writer.uint32(122).fork()).ldelim();
    }
    if (message.notification_email !== "") {
      writer.uint32(130).string(message.notification_email);
    }
    for (const v of message.fulfillment_ids) {
      writer.uint32(138).string(v!);
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
          message.state = stateFromJSON(reader.int32());
          break;
        case 6:
          message.customer_reference = reader.string();
          break;
        case 7:
          message.items.push(Item.decode(reader, reader.uint32()));
          break;
        case 8:
          message.total_price = reader.double();
          break;
        case 9:
          message.total_vat = reader.double();
          break;
        case 10:
          message.total_weight_in_kg = reader.double();
          break;
        case 11:
          message.shipping_address = Address.decode(reader, reader.uint32());
          break;
        case 13:
          message.billing_address = Address.decode(reader, reader.uint32());
          break;
        case 14:
          message.billing_email = reader.string();
          break;
        case 15:
          message.contact_person = ContactPerson.decode(reader, reader.uint32());
          break;
        case 16:
          message.notification_email = reader.string();
          break;
        case 17:
          message.fulfillment_ids.push(reader.string());
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
      id: isSet(object.id) ? String(object.id) : "",
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      state: isSet(object.state) ? stateFromJSON(object.state) : State.Undefined,
      customer_reference: isSet(object.customer_reference) ? String(object.customer_reference) : "",
      items: Array.isArray(object?.items) ? object.items.map((e: any) => Item.fromJSON(e)) : [],
      total_price: isSet(object.total_price) ? Number(object.total_price) : 0,
      total_vat: isSet(object.total_vat) ? Number(object.total_vat) : 0,
      total_weight_in_kg: isSet(object.total_weight_in_kg)
        ? Number(object.total_weight_in_kg)
        : 0,
      shipping_address: isSet(object.shipping_address)
        ? Address.fromJSON(object.shipping_address)
        : undefined,
      billing_address: isSet(object.billing_address)
        ? Address.fromJSON(object.billing_address)
        : undefined,
      billing_email: isSet(object.billing_email)
        ? String(object.billing_email)
        : "",
      contact_person: isSet(object.contact_person)
        ? ContactPerson.fromJSON(object.contact_person)
        : undefined,
      notification_email: isSet(object.notification_email)
        ? String(object.notification_email)
        : "",
      fulfillment_ids: Array.isArray(object?.fulfillment_ids)
        ? object.fulfillment_ids.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: Order): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.state !== undefined && (obj.state = stateToJSON(message.state));
    message.customer_reference !== undefined && (obj.customer_reference = message.customer_reference);
    if (message.items) {
      obj.items = message.items.map((e) => e ? Item.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_price !== undefined &&
      (obj.total_price = message.total_price);
    message.total_vat !== undefined && (obj.total_vat = message.total_vat);
    message.total_weight_in_kg !== undefined &&
      (obj.total_weight_in_kg = message.total_weight_in_kg);
    message.shipping_address !== undefined &&
      (obj.shipping_address = message.shipping_address ? Address.toJSON(message.shipping_address) : undefined);
    message.billing_address !== undefined &&
      (obj.billing_address = message.billing_address ? Address.toJSON(message.billing_address) : undefined);
    message.billing_email !== undefined && (obj.billing_email = message.billing_email);
    message.contact_person !== undefined &&
      (obj.contact_person = message.contact_person ? ContactPerson.toJSON(message.contact_person) : undefined);
    message.notification_email !== undefined && (obj.notification_email = message.notification_email);
    if (message.fulfillment_ids) {
      obj.fulfillment_ids = message.fulfillment_ids.map((e) => e);
    } else {
      obj.fulfillment_ids = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Order>): Order {
    const message = createBaseOrder();
    message.id = object.id ?? "";
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.state = object.state ?? State.Undefined;
    message.customer_reference = object.customer_reference ?? "";
    message.items = object.items?.map((e) => Item.fromPartial(e)) || [];
    message.total_price = object.total_price ?? 0;
    message.total_vat = object.total_vat ?? 0;
    message.total_weight_in_kg = object.total_weight_in_kg ?? 0;
    message.shipping_address =
      object.shipping_address !== undefined && object.shipping_address !== null
        ? Address.fromPartial(object.shipping_address)
        : undefined;
    message.billing_address =
      object.billing_address !== undefined && object.billing_address !== null
        ? Address.fromPartial(object.billing_address)
        : undefined;
    message.billing_email = object.billing_email ?? "";
    message.contact_person = (object.contact_person !== undefined && object.contact_person !== null)
      ? ContactPerson.fromPartial(object.contact_person)
      : undefined;
    message.notification_email = object.notification_email ?? "";
    message.fulfillment_ids = object.fulfillment_ids?.map((e) => e) || [];
    return message;
  },
};

function createBaseShippingDetails(): ShippingDetails {
  return {
    export_type: "",
    export_description: "",
    invoice_number: "",
    sender_address: undefined,
    contact_person: undefined,
  };
}

export const ShippingDetails = {
  encode(message: ShippingDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.export_type !== "") {
      writer.uint32(10).string(message.export_type);
    }
    if (message.export_description !== "") {
      writer.uint32(18).string(message.export_description);
    }
    if (message.invoice_number !== "") {
      writer.uint32(26).string(message.invoice_number);
    }
    if (message.sender_address !== undefined) {
      Address.encode(message.sender_address, writer.uint32(42).fork()).ldelim();
    }
    if (message.contact_person !== undefined) {
      ContactPerson.encode(
        message.contact_person,
        writer.uint32(122).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ShippingDetails {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShippingDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.export_type = reader.string();
          break;
        case 2:
          message.export_description = reader.string();
          break;
        case 3:
          message.invoice_number = reader.string();
          break;
        case 5:
          message.sender_address = Address.decode(reader, reader.uint32());
          break;
        case 15:
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

  fromJSON(object: any): ShippingDetails {
    return {
      export_type: isSet(object.export_type) ? String(object.export_type) : "",
      export_description: isSet(object.export_description)
        ? String(object.export_description)
        : "",
      invoice_number: isSet(object.invoice_number)
        ? String(object.invoice_number)
        : "",
      sender_address: isSet(object.sender_address)
        ? Address.fromJSON(object.sender_address)
        : undefined,
      contact_person: isSet(object.contact_person)
        ? ContactPerson.fromJSON(object.contact_person)
        : undefined,
    };
  },

  toJSON(message: ShippingDetails): unknown {
    const obj: any = {};
    message.export_type !== undefined && (obj.export_type = message.export_type);
    message.export_description !== undefined && (obj.export_description = message.export_description);
    message.invoice_number !== undefined && (obj.invoice_number = message.invoice_number);
    message.sender_address !== undefined &&
      (obj.sender_address = message.sender_address
        ? Address.toJSON(message.sender_address)
        : undefined);
    message.contact_person !== undefined &&
      (obj.contact_person = message.contact_person
        ? ContactPerson.toJSON(message.contact_person)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ShippingDetails>): ShippingDetails {
    const message = createBaseShippingDetails();
    message.export_type = object.export_type ?? "";
    message.export_description = object.export_description ?? "";
    message.invoice_number = object.invoice_number ?? "";
    message.sender_address =
      object.sender_address !== undefined && object.sender_address !== null
        ? Address.fromPartial(object.sender_address)
        : undefined;
    message.contact_person =
      object.contact_person !== undefined && object.contact_person !== null
        ? ContactPerson.fromPartial(object.contact_person)
        : undefined;
    return message;
  },
};

function createBaseTriggerFulfillmentRequest(): TriggerFulfillmentRequest {
  return { order: undefined, shipping_details: undefined, parcels: [] };
}

export const TriggerFulfillmentRequest = {
  encode(message: TriggerFulfillmentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    if (message.shipping_details !== undefined) {
      ShippingDetails.encode(message.shipping_details, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.parcels) {
      Parcel.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TriggerFulfillmentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerFulfillmentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = Order.decode(reader, reader.uint32());
          break;
        case 2:
          message.shipping_details = ShippingDetails.decode(reader, reader.uint32());
          break;
        case 3:
          message.parcels.push(Parcel.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TriggerFulfillmentRequest {
    return {
      order: isSet(object.order) ? Order.fromJSON(object.order) : undefined,
      shipping_details: isSet(object.shipping_details) ? ShippingDetails.fromJSON(object.shipping_details) : undefined,
      parcels: Array.isArray(object?.parcels) ? object.parcels.map((e: any) => Parcel.fromJSON(e)) : [],
    };
  },

  toJSON(message: TriggerFulfillmentRequest): unknown {
    const obj: any = {};
    message.order !== undefined && (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    message.shipping_details !== undefined &&
      (obj.shipping_details = message.shipping_details ? ShippingDetails.toJSON(message.shipping_details) : undefined);
    if (message.parcels) {
      obj.parcels = message.parcels.map((e) => e ? Parcel.toJSON(e) : undefined);
    } else {
      obj.parcels = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<TriggerFulfillmentRequest>): TriggerFulfillmentRequest {
    const message = createBaseTriggerFulfillmentRequest();
    message.order = (object.order !== undefined && object.order !== null) ? Order.fromPartial(object.order) : undefined;
    message.shipping_details = (object.shipping_details !== undefined && object.shipping_details !== null)
      ? ShippingDetails.fromPartial(object.shipping_details)
      : undefined;
    message.parcels = object.parcels?.map((e) => Parcel.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTriggerFulfillmentRequestList(): TriggerFulfillmentRequestList {
  return { items: [], total_count: 0, subject: undefined };
}

export const TriggerFulfillmentRequestList = {
  encode(message: TriggerFulfillmentRequestList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      TriggerFulfillmentRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TriggerFulfillmentRequestList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerFulfillmentRequestList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(TriggerFulfillmentRequest.decode(reader, reader.uint32()));
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

  fromJSON(object: any): TriggerFulfillmentRequestList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => TriggerFulfillmentRequest.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: TriggerFulfillmentRequestList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? TriggerFulfillmentRequest.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TriggerFulfillmentRequestList>): TriggerFulfillmentRequestList {
    const message = createBaseTriggerFulfillmentRequestList();
    message.items = object.items?.map((e) => TriggerFulfillmentRequest.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseOrderList(): OrderList {
  return { items: [], total_count: 0, subject: undefined };
}

export const OrderList = {
  encode(message: OrderList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Order.decode(reader, reader.uint32()));
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

  fromJSON(object: any): OrderList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => Order.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: OrderList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? Order.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<OrderList>): OrderList {
    const message = createBaseOrderList();
    message.items = object.items?.map((e) => Order.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseOrderListResponse(): OrderListResponse {
  return { items: [], total_count: 0, operation_status: undefined };
}

export const OrderListResponse = {
  encode(message: OrderListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      OrderResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(message.operation_status, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(OrderResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): OrderListResponse {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => OrderResponse.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      operation_status: isSet(object.operation_status) ? OperationStatus.fromJSON(object.operation_status) : undefined,
    };
  },

  toJSON(message: OrderListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? OrderResponse.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status ? OperationStatus.toJSON(message.operation_status) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<OrderListResponse>): OrderListResponse {
    const message = createBaseOrderListResponse();
    message.items = object.items?.map((e) => OrderResponse.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.operation_status = (object.operation_status !== undefined && object.operation_status !== null)
      ? OperationStatus.fromPartial(object.operation_status)
      : undefined;
    return message;
  },
};

function createBaseOrderResponse(): OrderResponse {
  return { payload: undefined, status: undefined };
}

export const OrderResponse = {
  encode(message: OrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      Order.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = Order.decode(reader, reader.uint32());
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

  fromJSON(object: any): OrderResponse {
    return {
      payload: isSet(object.payload) ? Order.fromJSON(object.payload) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: OrderResponse): unknown {
    const obj: any = {};
    message.payload !== undefined && (obj.payload = message.payload ? Order.toJSON(message.payload) : undefined);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<OrderResponse>): OrderResponse {
    const message = createBaseOrderResponse();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? Order.fromPartial(object.payload)
      : undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
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

  fromPartial(object: DeepPartial<Deleted>): Deleted {
    const message = createBaseDeleted();
    message.id = object.id ?? "";
    return message;
  },
};

export type ServiceDefinition = typeof ServiceDefinition;
export const ServiceDefinition = {
  name: "Service",
  fullName: "io.restorecommerce.order.Service",
  methods: {
    read: {
      name: "Read",
      requestType: ReadRequest,
      requestStream: false,
      responseType: OrderListResponse,
      responseStream: false,
      options: {},
    },
    create: {
      name: "Create",
      requestType: OrderList,
      requestStream: false,
      responseType: OrderListResponse,
      responseStream: false,
      options: {},
    },
    update: {
      name: "Update",
      requestType: OrderList,
      requestStream: false,
      responseType: OrderListResponse,
      responseStream: false,
      options: {},
    },
    upsert: {
      name: "Upsert",
      requestType: OrderList,
      requestStream: false,
      responseType: OrderListResponse,
      responseStream: false,
      options: {},
    },
    validate: {
      name: "Validate",
      requestType: OrderList,
      requestStream: false,
      responseType: OrderListResponse,
      responseStream: false,
      options: {},
    },
    submit: {
      name: "Submit",
      requestType: OrderList,
      requestStream: false,
      responseType: OrderListResponse,
      responseStream: false,
      options: {},
    },
    cancel: {
      name: "Cancel",
      requestType: CancelRequestList,
      requestStream: false,
      responseType: OrderListResponse,
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
    triggerFulfillment: {
      name: "TriggerFulfillment",
      requestType: TriggerFulfillmentRequestList,
      requestStream: false,
      responseType: Status,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface ServiceServiceImplementation<CallContextExt = {}> {
  read(
    request: ReadRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<OrderListResponse>>;
  create(
    request: OrderList,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<OrderListResponse>>;
  update(
    request: OrderList,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<OrderListResponse>>;
  upsert(
    request: OrderList,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<OrderListResponse>>;
  validate(
    request: OrderList,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<OrderListResponse>>;
  submit(
    request: OrderList,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<OrderListResponse>>;
  cancel(
    request: CancelRequestList,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<OrderListResponse>>;
  delete(
    request: DeleteRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<DeleteResponse>>;
  triggerFulfillment(
    request: TriggerFulfillmentRequestList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Status>>;
}

export interface ServiceClient<CallOptionsExt = {}> {
  read(
    request: DeepPartial<ReadRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<OrderListResponse>;
  create(
    request: DeepPartial<OrderList>,
    options?: CallOptions & CallOptionsExt
  ): Promise<OrderListResponse>;
  update(
    request: DeepPartial<OrderList>,
    options?: CallOptions & CallOptionsExt
  ): Promise<OrderListResponse>;
  upsert(
    request: DeepPartial<OrderList>,
    options?: CallOptions & CallOptionsExt
  ): Promise<OrderListResponse>;
  validate(
    request: DeepPartial<OrderList>,
    options?: CallOptions & CallOptionsExt
  ): Promise<OrderListResponse>;
  submit(
    request: DeepPartial<OrderList>,
    options?: CallOptions & CallOptionsExt
  ): Promise<OrderListResponse>;
  cancel(
    request: DeepPartial<CancelRequestList>,
    options?: CallOptions & CallOptionsExt
  ): Promise<OrderListResponse>;
  delete(
    request: DeepPartial<DeleteRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<DeleteResponse>;
  triggerFulfillment(
    request: DeepPartial<TriggerFulfillmentRequestList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Status>;
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
    "name": "io/restorecommerce/order.proto",
    "package": "io.restorecommerce.order",
    "dependency": [
      "io/restorecommerce/resource_base.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/options.proto",
      "io/restorecommerce/address.proto",
      "io/restorecommerce/product.proto",
      "io/restorecommerce/fulfillment.proto",
    ],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        name: "Order",
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
            name: "name",
            number: 3,
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
            name: "description",
            number: 4,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "description",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "state",
            number: 5,
            label: 1,
            type: 14,
            typeName: ".io.restorecommerce.order.State",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "state",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "customer_reference",
            number: 6,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "customerReference",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "items",
            number: 7,
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
            name: "total_price",
            number: 8,
            label: 1,
            type: 1,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "totalPrice",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "total_vat",
            number: 9,
            label: 1,
            type: 1,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "totalVat",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "total_weight_in_kg",
            number: 10,
            label: 1,
            type: 1,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "totalWeightInKg",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "shipping_address",
            number: 11,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.address.Address",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "shippingAddress",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "billing_address",
            number: 13,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.address.Address",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "billingAddress",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "billing_email",
            number: 14,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "billingEmail",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "contact_person",
            number: 15,
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
          {
            name: "notification_email",
            number: 16,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "notificationEmail",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "fulfillment_ids",
            number: 17,
            label: 3,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "fulfillmentIds",
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
        name: "ShippingDetails",
        field: [
          {
            name: "export_type",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "exportType",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "export_description",
            number: 2,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "exportDescription",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "invoice_number",
            number: 3,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "invoiceNumber",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "sender_address",
            number: 5,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.address.Address",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "senderAddress",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "contact_person",
            number: 15,
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
        name: "TriggerFulfillmentRequest",
        field: [
          {
            name: "order",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.order.Order",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "order",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "shipping_details",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.order.ShippingDetails",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "shippingDetails",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "parcels",
            number: 3,
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
        name: "TriggerFulfillmentRequestList",
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.order.TriggerFulfillmentRequest",
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
        name: "OrderList",
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.order.Order",
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
        name: "OrderListResponse",
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.order.OrderResponse",
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
        name: "OrderResponse",
        field: [
          {
            name: "payload",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.order.Order",
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
          { name: "Failed", number: 2, options: undefined },
          { name: "Cancelled", number: 3, options: undefined },
          { name: "Created", number: 4, options: undefined },
          { name: "Submitted", number: 5, options: undefined },
          { name: "Shipping", number: 6, options: undefined },
          { name: "Done", number: 7, options: undefined },
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
            outputType: ".io.restorecommerce.order.OrderListResponse",
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
            inputType: ".io.restorecommerce.order.OrderList",
            outputType: ".io.restorecommerce.order.OrderListResponse",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Update",
            inputType: ".io.restorecommerce.order.OrderList",
            outputType: ".io.restorecommerce.order.OrderListResponse",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Upsert",
            inputType: ".io.restorecommerce.order.OrderList",
            outputType: ".io.restorecommerce.order.OrderListResponse",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Validate",
            inputType: ".io.restorecommerce.order.OrderList",
            outputType: ".io.restorecommerce.order.OrderListResponse",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Submit",
            inputType: ".io.restorecommerce.order.OrderList",
            outputType: ".io.restorecommerce.order.OrderListResponse",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Cancel",
            inputType: ".io.restorecommerce.order.CancelRequestList",
            outputType: ".io.restorecommerce.order.OrderListResponse",
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
            name: "TriggerFulfillment",
            inputType:
              ".io.restorecommerce.order.TriggerFulfillmentRequestList",
            outputType: ".io.restorecommerce.status.Status",
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
          path: [4, 0],
          span: [44, 0, 69, 1],
          leadingComments: "*\nDatabase Entity\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
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
        "outputType": ".io.restorecommerce.order.OrderListResponse",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Create",
        "inputType": ".io.restorecommerce.order.OrderList",
        "outputType": ".io.restorecommerce.order.OrderListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Update",
        "inputType": ".io.restorecommerce.order.OrderList",
        "outputType": ".io.restorecommerce.order.OrderListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Upsert",
        "inputType": ".io.restorecommerce.order.OrderList",
        "outputType": ".io.restorecommerce.order.OrderListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Submit",
        "inputType": ".io.restorecommerce.order.OrderList",
        "outputType": ".io.restorecommerce.order.OrderListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Cancel",
        "inputType": ".io.restorecommerce.order.CancelRequestList",
        "outputType": ".io.restorecommerce.order.OrderListResponse",
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
        "name": "TriggerFulfillment",
        "inputType": ".io.restorecommerce.order.TriggerFulfillmentRequestList",
        "outputType": ".io.restorecommerce.status.Status",
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
        "path": [4, 0, 2, 0],
        "span": [41, 2, 39],
        "leadingComments": " below identifier is id of product, variant or bundle\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1],
        "span": [64, 0, 87, 1],
        "leadingComments": "*\nDatabase Entity\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {
    ".io.restorecommerce.order.State": State,
    ".io.restorecommerce.order.Order": Order,
    ".io.restorecommerce.order.ShippingDetails": ShippingDetails,
    ".io.restorecommerce.order.TriggerFulfillmentRequest": TriggerFulfillmentRequest,
    ".io.restorecommerce.order.TriggerFulfillmentRequestList": TriggerFulfillmentRequestList,
    ".io.restorecommerce.order.OrderList": OrderList,
    ".io.restorecommerce.order.OrderListResponse": OrderListResponse,
    ".io.restorecommerce.order.OrderResponse": OrderResponse,
    ".io.restorecommerce.order.CancelRequestList": CancelRequestList,
    ".io.restorecommerce.order.Deleted": Deleted,
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
      "Order": {
        options: {
          "kafka_subscriber": KafkaSubscription.decode(
            Buffer.from(
              "CgZvcmRlcnMSImlvLnJlc3RvcmVjb21tZXJjZS5vcmRlcnMucmVzb3VyY2UaDG9yZGVyQ3JlYXRlZCIMb3JkZXJVcGRhdGVkKgxvcmRlckRlbGV0ZWQ=",
              "base64",
            ),
          ),
        },
      },
    },
    services: { "Service": { options: { "service_name": "order" }, methods: { "Read": { "is_query": true } } } },
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
