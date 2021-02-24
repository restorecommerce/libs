/* eslint-disable */
import { FileDescriptorProto } from "ts-proto-descriptors/google/protobuf/descriptor";
import {
  Subject,
  protoMetadata as protoMetadata2,
} from "../../io/restorecommerce/auth";
import {
  Meta,
  protoMetadata as protoMetadata1,
} from "../../io/restorecommerce/meta";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "io.restorecommerce.fulfillment";

export interface OrderId {
  orderId: string;
  subject?: Subject;
}

export interface TrackingNumber {
  orderId: string;
  shipmentType: string;
  subject?: Subject;
}

export interface Status {
  Status: string;
  shipmentStatus: shipmentStatus[];
  OrderId: string;
}

export interface AllFulfillments {
  items: Items[];
}

export interface Items {
  fulfillmentStatus: string;
  orderId: string;
  serviceType: string;
  shipmentNumber: string[];
}

export interface DeleteStatus {
  deleteStatus: string;
  error?: Error;
}

export interface shipmentStatus {
  ShipmentData: ShipmentData[];
}

export interface ShipmentData {
  ShipmentNumber: string;
  Status: string;
  ShortStatus: string;
  TimeStamp: string;
  Receiver: string;
  ReceipientName: string;
  Recepientemail: string;
  EventDetails: EventDetails[];
  CustomerReference: string;
}

export interface EventDetails {
  Status: string;
  Location: string;
  Time: string;
  Coutnry: string;
}

export interface LabelResult {
  labels: Labels[];
  error?: Error;
}

export interface Labels {
  labelUrl: string;
  shipmentNumber: string;
  exportLabelUrl: string;
}

export interface shipmentOrderLists {
  ShipmentOrder?: ShipmentOrder;
  subject?: Subject;
}

export interface ShipmentOrder {
  fulfillmentList: FulfillmentList[];
  meta?: Meta;
}

export interface FulfillmentList {
  Shipment?: Shipment;
  OrderId: string;
  fulFillmentService: string;
}

export interface Shipment {
  ShipmentDetails: ShipmentDetails[];
  customerReference: string;
  Receiver?: Receiver;
  Shipper?: Shipper;
  returnShipmentAccountNumber: string;
  returnShipmentReference: string;
  Notification?: Notification;
}

export interface ShipmentDetails {
  ShipmentItem?: ShipmentItem;
}

export interface ShipmentItem {
  weightInKG: number;
  lengthInCM: string;
  widthInCM: string;
  heightInCM: string;
  ExportDocument?: ExportDocument;
}

export interface Notification {
  recipientEmailAddress: string;
}

export interface Address {
  streetName: string;
  streetNumber: string;
  addressAddition: string;
  zip: string;
  city: string;
  Origin?: Origin;
}

export interface Origin {
  country: string;
  countryISOCode: string;
}

export interface Shipper {
  Name?: Name;
  Address?: Address;
  Communication?: Communication;
}

export interface Name {
  name1: string;
}

export interface Receiver {
  name1: string;
  Address?: Address;
  Communication?: Communication;
}

export interface Communication {
  phone: string;
  email: string;
}

export interface ExportDocument {
  invoiceNumber: string;
  exportType: string;
  exportTypeDescription: string;
  termsOfTrade: string;
  placeOfCommital: string;
  additionalFee: number;
  ExportDocPosition?: ExportDocPosition;
}

export interface ExportDocPosition {
  description: string;
  countryCodeOrigin: string;
  customsTariffNumber: string;
  amount: number;
  netWeightInKG: number;
  customsValue: number;
}

export interface FulfillmentResults {
  fulfillmentResults: ResponseDetailsList[];
}

export interface ResponseDetailsList {
  Status?: FulfillmentStatus;
  error?: ErrorList;
}

export interface FulfillmentStatus {
  OrderId: string;
  OrderStatus: string;
  subject?: Subject;
}

export interface Error {
  code: string;
  message: string;
}

export interface ErrorList {
  code: string[];
  message: string[];
}

const baseOrderId: object = { orderId: "" };

export const OrderId = {
  encode(message: OrderId, writer: Writer = Writer.create()): Writer {
    if (message.orderId !== "") {
      writer.uint32(10).string(message.orderId);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): OrderId {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseOrderId) as OrderId;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = reader.string();
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

  fromJSON(object: any): OrderId {
    const message = globalThis.Object.create(baseOrderId) as OrderId;
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = String(object.orderId);
    } else {
      message.orderId = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<OrderId>): OrderId {
    const message = { ...baseOrderId } as OrderId;
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = object.orderId;
    } else {
      message.orderId = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  toJSON(message: OrderId): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = message.orderId);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseTrackingNumber: object = { orderId: "", shipmentType: "" };

export const TrackingNumber = {
  encode(message: TrackingNumber, writer: Writer = Writer.create()): Writer {
    if (message.orderId !== "") {
      writer.uint32(10).string(message.orderId);
    }
    if (message.shipmentType !== "") {
      writer.uint32(18).string(message.shipmentType);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TrackingNumber {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseTrackingNumber
    ) as TrackingNumber;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = reader.string();
          break;
        case 2:
          message.shipmentType = reader.string();
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

  fromJSON(object: any): TrackingNumber {
    const message = globalThis.Object.create(
      baseTrackingNumber
    ) as TrackingNumber;
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = String(object.orderId);
    } else {
      message.orderId = "";
    }
    if (object.shipmentType !== undefined && object.shipmentType !== null) {
      message.shipmentType = String(object.shipmentType);
    } else {
      message.shipmentType = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<TrackingNumber>): TrackingNumber {
    const message = { ...baseTrackingNumber } as TrackingNumber;
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = object.orderId;
    } else {
      message.orderId = "";
    }
    if (object.shipmentType !== undefined && object.shipmentType !== null) {
      message.shipmentType = object.shipmentType;
    } else {
      message.shipmentType = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  toJSON(message: TrackingNumber): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = message.orderId);
    message.shipmentType !== undefined &&
      (obj.shipmentType = message.shipmentType);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseStatus: object = { Status: "", OrderId: "" };

export const Status = {
  encode(message: Status, writer: Writer = Writer.create()): Writer {
    if (message.Status !== "") {
      writer.uint32(10).string(message.Status);
    }
    for (const v of message.shipmentStatus) {
      shipmentStatus.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.OrderId !== "") {
      writer.uint32(26).string(message.OrderId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Status {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseStatus) as Status;
    message.shipmentStatus = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Status = reader.string();
          break;
        case 2:
          message.shipmentStatus.push(
            shipmentStatus.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.OrderId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Status {
    const message = globalThis.Object.create(baseStatus) as Status;
    message.shipmentStatus = [];
    if (object.Status !== undefined && object.Status !== null) {
      message.Status = String(object.Status);
    } else {
      message.Status = "";
    }
    if (object.shipmentStatus !== undefined && object.shipmentStatus !== null) {
      for (const e of object.shipmentStatus) {
        message.shipmentStatus.push(shipmentStatus.fromJSON(e));
      }
    }
    if (object.OrderId !== undefined && object.OrderId !== null) {
      message.OrderId = String(object.OrderId);
    } else {
      message.OrderId = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<Status>): Status {
    const message = { ...baseStatus } as Status;
    message.shipmentStatus = [];
    if (object.Status !== undefined && object.Status !== null) {
      message.Status = object.Status;
    } else {
      message.Status = "";
    }
    if (object.shipmentStatus !== undefined && object.shipmentStatus !== null) {
      for (const e of object.shipmentStatus) {
        message.shipmentStatus.push(shipmentStatus.fromPartial(e));
      }
    }
    if (object.OrderId !== undefined && object.OrderId !== null) {
      message.OrderId = object.OrderId;
    } else {
      message.OrderId = "";
    }
    return message;
  },

  toJSON(message: Status): unknown {
    const obj: any = {};
    message.Status !== undefined && (obj.Status = message.Status);
    if (message.shipmentStatus) {
      obj.shipmentStatus = message.shipmentStatus.map((e) =>
        e ? shipmentStatus.toJSON(e) : undefined
      );
    } else {
      obj.shipmentStatus = [];
    }
    message.OrderId !== undefined && (obj.OrderId = message.OrderId);
    return obj;
  },
};

const baseAllFulfillments: object = {};

export const AllFulfillments = {
  encode(message: AllFulfillments, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      Items.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): AllFulfillments {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseAllFulfillments
    ) as AllFulfillments;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Items.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AllFulfillments {
    const message = globalThis.Object.create(
      baseAllFulfillments
    ) as AllFulfillments;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Items.fromJSON(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<AllFulfillments>): AllFulfillments {
    const message = { ...baseAllFulfillments } as AllFulfillments;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Items.fromPartial(e));
      }
    }
    return message;
  },

  toJSON(message: AllFulfillments): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => (e ? Items.toJSON(e) : undefined));
    } else {
      obj.items = [];
    }
    return obj;
  },
};

const baseItems: object = {
  fulfillmentStatus: "",
  orderId: "",
  serviceType: "",
  shipmentNumber: "",
};

export const Items = {
  encode(message: Items, writer: Writer = Writer.create()): Writer {
    if (message.fulfillmentStatus !== "") {
      writer.uint32(10).string(message.fulfillmentStatus);
    }
    if (message.orderId !== "") {
      writer.uint32(18).string(message.orderId);
    }
    if (message.serviceType !== "") {
      writer.uint32(26).string(message.serviceType);
    }
    for (const v of message.shipmentNumber) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Items {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseItems) as Items;
    message.shipmentNumber = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fulfillmentStatus = reader.string();
          break;
        case 2:
          message.orderId = reader.string();
          break;
        case 3:
          message.serviceType = reader.string();
          break;
        case 4:
          message.shipmentNumber.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Items {
    const message = globalThis.Object.create(baseItems) as Items;
    message.shipmentNumber = [];
    if (
      object.fulfillmentStatus !== undefined &&
      object.fulfillmentStatus !== null
    ) {
      message.fulfillmentStatus = String(object.fulfillmentStatus);
    } else {
      message.fulfillmentStatus = "";
    }
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = String(object.orderId);
    } else {
      message.orderId = "";
    }
    if (object.serviceType !== undefined && object.serviceType !== null) {
      message.serviceType = String(object.serviceType);
    } else {
      message.serviceType = "";
    }
    if (object.shipmentNumber !== undefined && object.shipmentNumber !== null) {
      for (const e of object.shipmentNumber) {
        message.shipmentNumber.push(String(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Items>): Items {
    const message = { ...baseItems } as Items;
    message.shipmentNumber = [];
    if (
      object.fulfillmentStatus !== undefined &&
      object.fulfillmentStatus !== null
    ) {
      message.fulfillmentStatus = object.fulfillmentStatus;
    } else {
      message.fulfillmentStatus = "";
    }
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = object.orderId;
    } else {
      message.orderId = "";
    }
    if (object.serviceType !== undefined && object.serviceType !== null) {
      message.serviceType = object.serviceType;
    } else {
      message.serviceType = "";
    }
    if (object.shipmentNumber !== undefined && object.shipmentNumber !== null) {
      for (const e of object.shipmentNumber) {
        message.shipmentNumber.push(e);
      }
    }
    return message;
  },

  toJSON(message: Items): unknown {
    const obj: any = {};
    message.fulfillmentStatus !== undefined &&
      (obj.fulfillmentStatus = message.fulfillmentStatus);
    message.orderId !== undefined && (obj.orderId = message.orderId);
    message.serviceType !== undefined &&
      (obj.serviceType = message.serviceType);
    if (message.shipmentNumber) {
      obj.shipmentNumber = message.shipmentNumber.map((e) => e);
    } else {
      obj.shipmentNumber = [];
    }
    return obj;
  },
};

const baseDeleteStatus: object = { deleteStatus: "" };

export const DeleteStatus = {
  encode(message: DeleteStatus, writer: Writer = Writer.create()): Writer {
    if (message.deleteStatus !== "") {
      writer.uint32(10).string(message.deleteStatus);
    }
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DeleteStatus {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseDeleteStatus) as DeleteStatus;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deleteStatus = reader.string();
          break;
        case 2:
          message.error = Error.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteStatus {
    const message = globalThis.Object.create(baseDeleteStatus) as DeleteStatus;
    if (object.deleteStatus !== undefined && object.deleteStatus !== null) {
      message.deleteStatus = String(object.deleteStatus);
    } else {
      message.deleteStatus = "";
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = Error.fromJSON(object.error);
    } else {
      message.error = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<DeleteStatus>): DeleteStatus {
    const message = { ...baseDeleteStatus } as DeleteStatus;
    if (object.deleteStatus !== undefined && object.deleteStatus !== null) {
      message.deleteStatus = object.deleteStatus;
    } else {
      message.deleteStatus = "";
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = Error.fromPartial(object.error);
    } else {
      message.error = undefined;
    }
    return message;
  },

  toJSON(message: DeleteStatus): unknown {
    const obj: any = {};
    message.deleteStatus !== undefined &&
      (obj.deleteStatus = message.deleteStatus);
    message.error !== undefined &&
      (obj.error = message.error ? Error.toJSON(message.error) : undefined);
    return obj;
  },
};

const baseshipmentStatus: object = {};

export const shipmentStatus = {
  encode(message: shipmentStatus, writer: Writer = Writer.create()): Writer {
    for (const v of message.ShipmentData) {
      ShipmentData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): shipmentStatus {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseshipmentStatus
    ) as shipmentStatus;
    message.ShipmentData = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ShipmentData.push(
            ShipmentData.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): shipmentStatus {
    const message = globalThis.Object.create(
      baseshipmentStatus
    ) as shipmentStatus;
    message.ShipmentData = [];
    if (object.ShipmentData !== undefined && object.ShipmentData !== null) {
      for (const e of object.ShipmentData) {
        message.ShipmentData.push(ShipmentData.fromJSON(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<shipmentStatus>): shipmentStatus {
    const message = { ...baseshipmentStatus } as shipmentStatus;
    message.ShipmentData = [];
    if (object.ShipmentData !== undefined && object.ShipmentData !== null) {
      for (const e of object.ShipmentData) {
        message.ShipmentData.push(ShipmentData.fromPartial(e));
      }
    }
    return message;
  },

  toJSON(message: shipmentStatus): unknown {
    const obj: any = {};
    if (message.ShipmentData) {
      obj.ShipmentData = message.ShipmentData.map((e) =>
        e ? ShipmentData.toJSON(e) : undefined
      );
    } else {
      obj.ShipmentData = [];
    }
    return obj;
  },
};

const baseShipmentData: object = {
  ShipmentNumber: "",
  Status: "",
  ShortStatus: "",
  TimeStamp: "",
  Receiver: "",
  ReceipientName: "",
  Recepientemail: "",
  CustomerReference: "",
};

export const ShipmentData = {
  encode(message: ShipmentData, writer: Writer = Writer.create()): Writer {
    if (message.ShipmentNumber !== "") {
      writer.uint32(10).string(message.ShipmentNumber);
    }
    if (message.Status !== "") {
      writer.uint32(18).string(message.Status);
    }
    if (message.ShortStatus !== "") {
      writer.uint32(26).string(message.ShortStatus);
    }
    if (message.TimeStamp !== "") {
      writer.uint32(34).string(message.TimeStamp);
    }
    if (message.Receiver !== "") {
      writer.uint32(42).string(message.Receiver);
    }
    if (message.ReceipientName !== "") {
      writer.uint32(50).string(message.ReceipientName);
    }
    if (message.Recepientemail !== "") {
      writer.uint32(58).string(message.Recepientemail);
    }
    for (const v of message.EventDetails) {
      EventDetails.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.CustomerReference !== "") {
      writer.uint32(74).string(message.CustomerReference);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ShipmentData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseShipmentData) as ShipmentData;
    message.EventDetails = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ShipmentNumber = reader.string();
          break;
        case 2:
          message.Status = reader.string();
          break;
        case 3:
          message.ShortStatus = reader.string();
          break;
        case 4:
          message.TimeStamp = reader.string();
          break;
        case 5:
          message.Receiver = reader.string();
          break;
        case 6:
          message.ReceipientName = reader.string();
          break;
        case 7:
          message.Recepientemail = reader.string();
          break;
        case 8:
          message.EventDetails.push(
            EventDetails.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.CustomerReference = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ShipmentData {
    const message = globalThis.Object.create(baseShipmentData) as ShipmentData;
    message.EventDetails = [];
    if (object.ShipmentNumber !== undefined && object.ShipmentNumber !== null) {
      message.ShipmentNumber = String(object.ShipmentNumber);
    } else {
      message.ShipmentNumber = "";
    }
    if (object.Status !== undefined && object.Status !== null) {
      message.Status = String(object.Status);
    } else {
      message.Status = "";
    }
    if (object.ShortStatus !== undefined && object.ShortStatus !== null) {
      message.ShortStatus = String(object.ShortStatus);
    } else {
      message.ShortStatus = "";
    }
    if (object.TimeStamp !== undefined && object.TimeStamp !== null) {
      message.TimeStamp = String(object.TimeStamp);
    } else {
      message.TimeStamp = "";
    }
    if (object.Receiver !== undefined && object.Receiver !== null) {
      message.Receiver = String(object.Receiver);
    } else {
      message.Receiver = "";
    }
    if (object.ReceipientName !== undefined && object.ReceipientName !== null) {
      message.ReceipientName = String(object.ReceipientName);
    } else {
      message.ReceipientName = "";
    }
    if (object.Recepientemail !== undefined && object.Recepientemail !== null) {
      message.Recepientemail = String(object.Recepientemail);
    } else {
      message.Recepientemail = "";
    }
    if (object.EventDetails !== undefined && object.EventDetails !== null) {
      for (const e of object.EventDetails) {
        message.EventDetails.push(EventDetails.fromJSON(e));
      }
    }
    if (
      object.CustomerReference !== undefined &&
      object.CustomerReference !== null
    ) {
      message.CustomerReference = String(object.CustomerReference);
    } else {
      message.CustomerReference = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<ShipmentData>): ShipmentData {
    const message = { ...baseShipmentData } as ShipmentData;
    message.EventDetails = [];
    if (object.ShipmentNumber !== undefined && object.ShipmentNumber !== null) {
      message.ShipmentNumber = object.ShipmentNumber;
    } else {
      message.ShipmentNumber = "";
    }
    if (object.Status !== undefined && object.Status !== null) {
      message.Status = object.Status;
    } else {
      message.Status = "";
    }
    if (object.ShortStatus !== undefined && object.ShortStatus !== null) {
      message.ShortStatus = object.ShortStatus;
    } else {
      message.ShortStatus = "";
    }
    if (object.TimeStamp !== undefined && object.TimeStamp !== null) {
      message.TimeStamp = object.TimeStamp;
    } else {
      message.TimeStamp = "";
    }
    if (object.Receiver !== undefined && object.Receiver !== null) {
      message.Receiver = object.Receiver;
    } else {
      message.Receiver = "";
    }
    if (object.ReceipientName !== undefined && object.ReceipientName !== null) {
      message.ReceipientName = object.ReceipientName;
    } else {
      message.ReceipientName = "";
    }
    if (object.Recepientemail !== undefined && object.Recepientemail !== null) {
      message.Recepientemail = object.Recepientemail;
    } else {
      message.Recepientemail = "";
    }
    if (object.EventDetails !== undefined && object.EventDetails !== null) {
      for (const e of object.EventDetails) {
        message.EventDetails.push(EventDetails.fromPartial(e));
      }
    }
    if (
      object.CustomerReference !== undefined &&
      object.CustomerReference !== null
    ) {
      message.CustomerReference = object.CustomerReference;
    } else {
      message.CustomerReference = "";
    }
    return message;
  },

  toJSON(message: ShipmentData): unknown {
    const obj: any = {};
    message.ShipmentNumber !== undefined &&
      (obj.ShipmentNumber = message.ShipmentNumber);
    message.Status !== undefined && (obj.Status = message.Status);
    message.ShortStatus !== undefined &&
      (obj.ShortStatus = message.ShortStatus);
    message.TimeStamp !== undefined && (obj.TimeStamp = message.TimeStamp);
    message.Receiver !== undefined && (obj.Receiver = message.Receiver);
    message.ReceipientName !== undefined &&
      (obj.ReceipientName = message.ReceipientName);
    message.Recepientemail !== undefined &&
      (obj.Recepientemail = message.Recepientemail);
    if (message.EventDetails) {
      obj.EventDetails = message.EventDetails.map((e) =>
        e ? EventDetails.toJSON(e) : undefined
      );
    } else {
      obj.EventDetails = [];
    }
    message.CustomerReference !== undefined &&
      (obj.CustomerReference = message.CustomerReference);
    return obj;
  },
};

const baseEventDetails: object = {
  Status: "",
  Location: "",
  Time: "",
  Coutnry: "",
};

export const EventDetails = {
  encode(message: EventDetails, writer: Writer = Writer.create()): Writer {
    if (message.Status !== "") {
      writer.uint32(10).string(message.Status);
    }
    if (message.Location !== "") {
      writer.uint32(18).string(message.Location);
    }
    if (message.Time !== "") {
      writer.uint32(26).string(message.Time);
    }
    if (message.Coutnry !== "") {
      writer.uint32(34).string(message.Coutnry);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EventDetails {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseEventDetails) as EventDetails;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Status = reader.string();
          break;
        case 2:
          message.Location = reader.string();
          break;
        case 3:
          message.Time = reader.string();
          break;
        case 4:
          message.Coutnry = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventDetails {
    const message = globalThis.Object.create(baseEventDetails) as EventDetails;
    if (object.Status !== undefined && object.Status !== null) {
      message.Status = String(object.Status);
    } else {
      message.Status = "";
    }
    if (object.Location !== undefined && object.Location !== null) {
      message.Location = String(object.Location);
    } else {
      message.Location = "";
    }
    if (object.Time !== undefined && object.Time !== null) {
      message.Time = String(object.Time);
    } else {
      message.Time = "";
    }
    if (object.Coutnry !== undefined && object.Coutnry !== null) {
      message.Coutnry = String(object.Coutnry);
    } else {
      message.Coutnry = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<EventDetails>): EventDetails {
    const message = { ...baseEventDetails } as EventDetails;
    if (object.Status !== undefined && object.Status !== null) {
      message.Status = object.Status;
    } else {
      message.Status = "";
    }
    if (object.Location !== undefined && object.Location !== null) {
      message.Location = object.Location;
    } else {
      message.Location = "";
    }
    if (object.Time !== undefined && object.Time !== null) {
      message.Time = object.Time;
    } else {
      message.Time = "";
    }
    if (object.Coutnry !== undefined && object.Coutnry !== null) {
      message.Coutnry = object.Coutnry;
    } else {
      message.Coutnry = "";
    }
    return message;
  },

  toJSON(message: EventDetails): unknown {
    const obj: any = {};
    message.Status !== undefined && (obj.Status = message.Status);
    message.Location !== undefined && (obj.Location = message.Location);
    message.Time !== undefined && (obj.Time = message.Time);
    message.Coutnry !== undefined && (obj.Coutnry = message.Coutnry);
    return obj;
  },
};

const baseLabelResult: object = {};

export const LabelResult = {
  encode(message: LabelResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.labels) {
      Labels.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): LabelResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseLabelResult) as LabelResult;
    message.labels = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.labels.push(Labels.decode(reader, reader.uint32()));
          break;
        case 2:
          message.error = Error.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LabelResult {
    const message = globalThis.Object.create(baseLabelResult) as LabelResult;
    message.labels = [];
    if (object.labels !== undefined && object.labels !== null) {
      for (const e of object.labels) {
        message.labels.push(Labels.fromJSON(e));
      }
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = Error.fromJSON(object.error);
    } else {
      message.error = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<LabelResult>): LabelResult {
    const message = { ...baseLabelResult } as LabelResult;
    message.labels = [];
    if (object.labels !== undefined && object.labels !== null) {
      for (const e of object.labels) {
        message.labels.push(Labels.fromPartial(e));
      }
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = Error.fromPartial(object.error);
    } else {
      message.error = undefined;
    }
    return message;
  },

  toJSON(message: LabelResult): unknown {
    const obj: any = {};
    if (message.labels) {
      obj.labels = message.labels.map((e) =>
        e ? Labels.toJSON(e) : undefined
      );
    } else {
      obj.labels = [];
    }
    message.error !== undefined &&
      (obj.error = message.error ? Error.toJSON(message.error) : undefined);
    return obj;
  },
};

const baseLabels: object = {
  labelUrl: "",
  shipmentNumber: "",
  exportLabelUrl: "",
};

export const Labels = {
  encode(message: Labels, writer: Writer = Writer.create()): Writer {
    if (message.labelUrl !== "") {
      writer.uint32(10).string(message.labelUrl);
    }
    if (message.shipmentNumber !== "") {
      writer.uint32(18).string(message.shipmentNumber);
    }
    if (message.exportLabelUrl !== "") {
      writer.uint32(26).string(message.exportLabelUrl);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Labels {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseLabels) as Labels;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.labelUrl = reader.string();
          break;
        case 2:
          message.shipmentNumber = reader.string();
          break;
        case 3:
          message.exportLabelUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Labels {
    const message = globalThis.Object.create(baseLabels) as Labels;
    if (object.labelUrl !== undefined && object.labelUrl !== null) {
      message.labelUrl = String(object.labelUrl);
    } else {
      message.labelUrl = "";
    }
    if (object.shipmentNumber !== undefined && object.shipmentNumber !== null) {
      message.shipmentNumber = String(object.shipmentNumber);
    } else {
      message.shipmentNumber = "";
    }
    if (object.exportLabelUrl !== undefined && object.exportLabelUrl !== null) {
      message.exportLabelUrl = String(object.exportLabelUrl);
    } else {
      message.exportLabelUrl = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<Labels>): Labels {
    const message = { ...baseLabels } as Labels;
    if (object.labelUrl !== undefined && object.labelUrl !== null) {
      message.labelUrl = object.labelUrl;
    } else {
      message.labelUrl = "";
    }
    if (object.shipmentNumber !== undefined && object.shipmentNumber !== null) {
      message.shipmentNumber = object.shipmentNumber;
    } else {
      message.shipmentNumber = "";
    }
    if (object.exportLabelUrl !== undefined && object.exportLabelUrl !== null) {
      message.exportLabelUrl = object.exportLabelUrl;
    } else {
      message.exportLabelUrl = "";
    }
    return message;
  },

  toJSON(message: Labels): unknown {
    const obj: any = {};
    message.labelUrl !== undefined && (obj.labelUrl = message.labelUrl);
    message.shipmentNumber !== undefined &&
      (obj.shipmentNumber = message.shipmentNumber);
    message.exportLabelUrl !== undefined &&
      (obj.exportLabelUrl = message.exportLabelUrl);
    return obj;
  },
};

const baseshipmentOrderLists: object = {};

export const shipmentOrderLists = {
  encode(
    message: shipmentOrderLists,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.ShipmentOrder !== undefined) {
      ShipmentOrder.encode(
        message.ShipmentOrder,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): shipmentOrderLists {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseshipmentOrderLists
    ) as shipmentOrderLists;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ShipmentOrder = ShipmentOrder.decode(reader, reader.uint32());
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

  fromJSON(object: any): shipmentOrderLists {
    const message = globalThis.Object.create(
      baseshipmentOrderLists
    ) as shipmentOrderLists;
    if (object.ShipmentOrder !== undefined && object.ShipmentOrder !== null) {
      message.ShipmentOrder = ShipmentOrder.fromJSON(object.ShipmentOrder);
    } else {
      message.ShipmentOrder = undefined;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<shipmentOrderLists>): shipmentOrderLists {
    const message = { ...baseshipmentOrderLists } as shipmentOrderLists;
    if (object.ShipmentOrder !== undefined && object.ShipmentOrder !== null) {
      message.ShipmentOrder = ShipmentOrder.fromPartial(object.ShipmentOrder);
    } else {
      message.ShipmentOrder = undefined;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  toJSON(message: shipmentOrderLists): unknown {
    const obj: any = {};
    message.ShipmentOrder !== undefined &&
      (obj.ShipmentOrder = message.ShipmentOrder
        ? ShipmentOrder.toJSON(message.ShipmentOrder)
        : undefined);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseShipmentOrder: object = {};

export const ShipmentOrder = {
  encode(message: ShipmentOrder, writer: Writer = Writer.create()): Writer {
    for (const v of message.fulfillmentList) {
      FulfillmentList.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ShipmentOrder {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseShipmentOrder
    ) as ShipmentOrder;
    message.fulfillmentList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fulfillmentList.push(
            FulfillmentList.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): ShipmentOrder {
    const message = globalThis.Object.create(
      baseShipmentOrder
    ) as ShipmentOrder;
    message.fulfillmentList = [];
    if (
      object.fulfillmentList !== undefined &&
      object.fulfillmentList !== null
    ) {
      for (const e of object.fulfillmentList) {
        message.fulfillmentList.push(FulfillmentList.fromJSON(e));
      }
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromJSON(object.meta);
    } else {
      message.meta = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<ShipmentOrder>): ShipmentOrder {
    const message = { ...baseShipmentOrder } as ShipmentOrder;
    message.fulfillmentList = [];
    if (
      object.fulfillmentList !== undefined &&
      object.fulfillmentList !== null
    ) {
      for (const e of object.fulfillmentList) {
        message.fulfillmentList.push(FulfillmentList.fromPartial(e));
      }
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromPartial(object.meta);
    } else {
      message.meta = undefined;
    }
    return message;
  },

  toJSON(message: ShipmentOrder): unknown {
    const obj: any = {};
    if (message.fulfillmentList) {
      obj.fulfillmentList = message.fulfillmentList.map((e) =>
        e ? FulfillmentList.toJSON(e) : undefined
      );
    } else {
      obj.fulfillmentList = [];
    }
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    return obj;
  },
};

const baseFulfillmentList: object = { OrderId: "", fulFillmentService: "" };

export const FulfillmentList = {
  encode(message: FulfillmentList, writer: Writer = Writer.create()): Writer {
    if (message.Shipment !== undefined) {
      Shipment.encode(message.Shipment, writer.uint32(10).fork()).ldelim();
    }
    if (message.OrderId !== "") {
      writer.uint32(18).string(message.OrderId);
    }
    if (message.fulFillmentService !== "") {
      writer.uint32(34).string(message.fulFillmentService);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): FulfillmentList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseFulfillmentList
    ) as FulfillmentList;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Shipment = Shipment.decode(reader, reader.uint32());
          break;
        case 2:
          message.OrderId = reader.string();
          break;
        case 4:
          message.fulFillmentService = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FulfillmentList {
    const message = globalThis.Object.create(
      baseFulfillmentList
    ) as FulfillmentList;
    if (object.Shipment !== undefined && object.Shipment !== null) {
      message.Shipment = Shipment.fromJSON(object.Shipment);
    } else {
      message.Shipment = undefined;
    }
    if (object.OrderId !== undefined && object.OrderId !== null) {
      message.OrderId = String(object.OrderId);
    } else {
      message.OrderId = "";
    }
    if (
      object.fulFillmentService !== undefined &&
      object.fulFillmentService !== null
    ) {
      message.fulFillmentService = String(object.fulFillmentService);
    } else {
      message.fulFillmentService = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<FulfillmentList>): FulfillmentList {
    const message = { ...baseFulfillmentList } as FulfillmentList;
    if (object.Shipment !== undefined && object.Shipment !== null) {
      message.Shipment = Shipment.fromPartial(object.Shipment);
    } else {
      message.Shipment = undefined;
    }
    if (object.OrderId !== undefined && object.OrderId !== null) {
      message.OrderId = object.OrderId;
    } else {
      message.OrderId = "";
    }
    if (
      object.fulFillmentService !== undefined &&
      object.fulFillmentService !== null
    ) {
      message.fulFillmentService = object.fulFillmentService;
    } else {
      message.fulFillmentService = "";
    }
    return message;
  },

  toJSON(message: FulfillmentList): unknown {
    const obj: any = {};
    message.Shipment !== undefined &&
      (obj.Shipment = message.Shipment
        ? Shipment.toJSON(message.Shipment)
        : undefined);
    message.OrderId !== undefined && (obj.OrderId = message.OrderId);
    message.fulFillmentService !== undefined &&
      (obj.fulFillmentService = message.fulFillmentService);
    return obj;
  },
};

const baseShipment: object = {
  customerReference: "",
  returnShipmentAccountNumber: "",
  returnShipmentReference: "",
};

export const Shipment = {
  encode(message: Shipment, writer: Writer = Writer.create()): Writer {
    for (const v of message.ShipmentDetails) {
      ShipmentDetails.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.customerReference !== "") {
      writer.uint32(18).string(message.customerReference);
    }
    if (message.Receiver !== undefined) {
      Receiver.encode(message.Receiver, writer.uint32(26).fork()).ldelim();
    }
    if (message.Shipper !== undefined) {
      Shipper.encode(message.Shipper, writer.uint32(34).fork()).ldelim();
    }
    if (message.returnShipmentAccountNumber !== "") {
      writer.uint32(42).string(message.returnShipmentAccountNumber);
    }
    if (message.returnShipmentReference !== "") {
      writer.uint32(50).string(message.returnShipmentReference);
    }
    if (message.Notification !== undefined) {
      Notification.encode(
        message.Notification,
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Shipment {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseShipment) as Shipment;
    message.ShipmentDetails = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ShipmentDetails.push(
            ShipmentDetails.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.customerReference = reader.string();
          break;
        case 3:
          message.Receiver = Receiver.decode(reader, reader.uint32());
          break;
        case 4:
          message.Shipper = Shipper.decode(reader, reader.uint32());
          break;
        case 5:
          message.returnShipmentAccountNumber = reader.string();
          break;
        case 6:
          message.returnShipmentReference = reader.string();
          break;
        case 7:
          message.Notification = Notification.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Shipment {
    const message = globalThis.Object.create(baseShipment) as Shipment;
    message.ShipmentDetails = [];
    if (
      object.ShipmentDetails !== undefined &&
      object.ShipmentDetails !== null
    ) {
      for (const e of object.ShipmentDetails) {
        message.ShipmentDetails.push(ShipmentDetails.fromJSON(e));
      }
    }
    if (
      object.customerReference !== undefined &&
      object.customerReference !== null
    ) {
      message.customerReference = String(object.customerReference);
    } else {
      message.customerReference = "";
    }
    if (object.Receiver !== undefined && object.Receiver !== null) {
      message.Receiver = Receiver.fromJSON(object.Receiver);
    } else {
      message.Receiver = undefined;
    }
    if (object.Shipper !== undefined && object.Shipper !== null) {
      message.Shipper = Shipper.fromJSON(object.Shipper);
    } else {
      message.Shipper = undefined;
    }
    if (
      object.returnShipmentAccountNumber !== undefined &&
      object.returnShipmentAccountNumber !== null
    ) {
      message.returnShipmentAccountNumber = String(
        object.returnShipmentAccountNumber
      );
    } else {
      message.returnShipmentAccountNumber = "";
    }
    if (
      object.returnShipmentReference !== undefined &&
      object.returnShipmentReference !== null
    ) {
      message.returnShipmentReference = String(object.returnShipmentReference);
    } else {
      message.returnShipmentReference = "";
    }
    if (object.Notification !== undefined && object.Notification !== null) {
      message.Notification = Notification.fromJSON(object.Notification);
    } else {
      message.Notification = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<Shipment>): Shipment {
    const message = { ...baseShipment } as Shipment;
    message.ShipmentDetails = [];
    if (
      object.ShipmentDetails !== undefined &&
      object.ShipmentDetails !== null
    ) {
      for (const e of object.ShipmentDetails) {
        message.ShipmentDetails.push(ShipmentDetails.fromPartial(e));
      }
    }
    if (
      object.customerReference !== undefined &&
      object.customerReference !== null
    ) {
      message.customerReference = object.customerReference;
    } else {
      message.customerReference = "";
    }
    if (object.Receiver !== undefined && object.Receiver !== null) {
      message.Receiver = Receiver.fromPartial(object.Receiver);
    } else {
      message.Receiver = undefined;
    }
    if (object.Shipper !== undefined && object.Shipper !== null) {
      message.Shipper = Shipper.fromPartial(object.Shipper);
    } else {
      message.Shipper = undefined;
    }
    if (
      object.returnShipmentAccountNumber !== undefined &&
      object.returnShipmentAccountNumber !== null
    ) {
      message.returnShipmentAccountNumber = object.returnShipmentAccountNumber;
    } else {
      message.returnShipmentAccountNumber = "";
    }
    if (
      object.returnShipmentReference !== undefined &&
      object.returnShipmentReference !== null
    ) {
      message.returnShipmentReference = object.returnShipmentReference;
    } else {
      message.returnShipmentReference = "";
    }
    if (object.Notification !== undefined && object.Notification !== null) {
      message.Notification = Notification.fromPartial(object.Notification);
    } else {
      message.Notification = undefined;
    }
    return message;
  },

  toJSON(message: Shipment): unknown {
    const obj: any = {};
    if (message.ShipmentDetails) {
      obj.ShipmentDetails = message.ShipmentDetails.map((e) =>
        e ? ShipmentDetails.toJSON(e) : undefined
      );
    } else {
      obj.ShipmentDetails = [];
    }
    message.customerReference !== undefined &&
      (obj.customerReference = message.customerReference);
    message.Receiver !== undefined &&
      (obj.Receiver = message.Receiver
        ? Receiver.toJSON(message.Receiver)
        : undefined);
    message.Shipper !== undefined &&
      (obj.Shipper = message.Shipper
        ? Shipper.toJSON(message.Shipper)
        : undefined);
    message.returnShipmentAccountNumber !== undefined &&
      (obj.returnShipmentAccountNumber = message.returnShipmentAccountNumber);
    message.returnShipmentReference !== undefined &&
      (obj.returnShipmentReference = message.returnShipmentReference);
    message.Notification !== undefined &&
      (obj.Notification = message.Notification
        ? Notification.toJSON(message.Notification)
        : undefined);
    return obj;
  },
};

const baseShipmentDetails: object = {};

export const ShipmentDetails = {
  encode(message: ShipmentDetails, writer: Writer = Writer.create()): Writer {
    if (message.ShipmentItem !== undefined) {
      ShipmentItem.encode(
        message.ShipmentItem,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ShipmentDetails {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseShipmentDetails
    ) as ShipmentDetails;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ShipmentItem = ShipmentItem.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ShipmentDetails {
    const message = globalThis.Object.create(
      baseShipmentDetails
    ) as ShipmentDetails;
    if (object.ShipmentItem !== undefined && object.ShipmentItem !== null) {
      message.ShipmentItem = ShipmentItem.fromJSON(object.ShipmentItem);
    } else {
      message.ShipmentItem = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<ShipmentDetails>): ShipmentDetails {
    const message = { ...baseShipmentDetails } as ShipmentDetails;
    if (object.ShipmentItem !== undefined && object.ShipmentItem !== null) {
      message.ShipmentItem = ShipmentItem.fromPartial(object.ShipmentItem);
    } else {
      message.ShipmentItem = undefined;
    }
    return message;
  },

  toJSON(message: ShipmentDetails): unknown {
    const obj: any = {};
    message.ShipmentItem !== undefined &&
      (obj.ShipmentItem = message.ShipmentItem
        ? ShipmentItem.toJSON(message.ShipmentItem)
        : undefined);
    return obj;
  },
};

const baseShipmentItem: object = {
  weightInKG: 0,
  lengthInCM: "",
  widthInCM: "",
  heightInCM: "",
};

export const ShipmentItem = {
  encode(message: ShipmentItem, writer: Writer = Writer.create()): Writer {
    if (message.weightInKG !== 0) {
      writer.uint32(9).double(message.weightInKG);
    }
    if (message.lengthInCM !== "") {
      writer.uint32(18).string(message.lengthInCM);
    }
    if (message.widthInCM !== "") {
      writer.uint32(26).string(message.widthInCM);
    }
    if (message.heightInCM !== "") {
      writer.uint32(34).string(message.heightInCM);
    }
    if (message.ExportDocument !== undefined) {
      ExportDocument.encode(
        message.ExportDocument,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ShipmentItem {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseShipmentItem) as ShipmentItem;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.weightInKG = reader.double();
          break;
        case 2:
          message.lengthInCM = reader.string();
          break;
        case 3:
          message.widthInCM = reader.string();
          break;
        case 4:
          message.heightInCM = reader.string();
          break;
        case 5:
          message.ExportDocument = ExportDocument.decode(
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

  fromJSON(object: any): ShipmentItem {
    const message = globalThis.Object.create(baseShipmentItem) as ShipmentItem;
    if (object.weightInKG !== undefined && object.weightInKG !== null) {
      message.weightInKG = Number(object.weightInKG);
    } else {
      message.weightInKG = 0;
    }
    if (object.lengthInCM !== undefined && object.lengthInCM !== null) {
      message.lengthInCM = String(object.lengthInCM);
    } else {
      message.lengthInCM = "";
    }
    if (object.widthInCM !== undefined && object.widthInCM !== null) {
      message.widthInCM = String(object.widthInCM);
    } else {
      message.widthInCM = "";
    }
    if (object.heightInCM !== undefined && object.heightInCM !== null) {
      message.heightInCM = String(object.heightInCM);
    } else {
      message.heightInCM = "";
    }
    if (object.ExportDocument !== undefined && object.ExportDocument !== null) {
      message.ExportDocument = ExportDocument.fromJSON(object.ExportDocument);
    } else {
      message.ExportDocument = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<ShipmentItem>): ShipmentItem {
    const message = { ...baseShipmentItem } as ShipmentItem;
    if (object.weightInKG !== undefined && object.weightInKG !== null) {
      message.weightInKG = object.weightInKG;
    } else {
      message.weightInKG = 0;
    }
    if (object.lengthInCM !== undefined && object.lengthInCM !== null) {
      message.lengthInCM = object.lengthInCM;
    } else {
      message.lengthInCM = "";
    }
    if (object.widthInCM !== undefined && object.widthInCM !== null) {
      message.widthInCM = object.widthInCM;
    } else {
      message.widthInCM = "";
    }
    if (object.heightInCM !== undefined && object.heightInCM !== null) {
      message.heightInCM = object.heightInCM;
    } else {
      message.heightInCM = "";
    }
    if (object.ExportDocument !== undefined && object.ExportDocument !== null) {
      message.ExportDocument = ExportDocument.fromPartial(
        object.ExportDocument
      );
    } else {
      message.ExportDocument = undefined;
    }
    return message;
  },

  toJSON(message: ShipmentItem): unknown {
    const obj: any = {};
    message.weightInKG !== undefined && (obj.weightInKG = message.weightInKG);
    message.lengthInCM !== undefined && (obj.lengthInCM = message.lengthInCM);
    message.widthInCM !== undefined && (obj.widthInCM = message.widthInCM);
    message.heightInCM !== undefined && (obj.heightInCM = message.heightInCM);
    message.ExportDocument !== undefined &&
      (obj.ExportDocument = message.ExportDocument
        ? ExportDocument.toJSON(message.ExportDocument)
        : undefined);
    return obj;
  },
};

const baseNotification: object = { recipientEmailAddress: "" };

export const Notification = {
  encode(message: Notification, writer: Writer = Writer.create()): Writer {
    if (message.recipientEmailAddress !== "") {
      writer.uint32(10).string(message.recipientEmailAddress);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Notification {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseNotification) as Notification;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recipientEmailAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Notification {
    const message = globalThis.Object.create(baseNotification) as Notification;
    if (
      object.recipientEmailAddress !== undefined &&
      object.recipientEmailAddress !== null
    ) {
      message.recipientEmailAddress = String(object.recipientEmailAddress);
    } else {
      message.recipientEmailAddress = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<Notification>): Notification {
    const message = { ...baseNotification } as Notification;
    if (
      object.recipientEmailAddress !== undefined &&
      object.recipientEmailAddress !== null
    ) {
      message.recipientEmailAddress = object.recipientEmailAddress;
    } else {
      message.recipientEmailAddress = "";
    }
    return message;
  },

  toJSON(message: Notification): unknown {
    const obj: any = {};
    message.recipientEmailAddress !== undefined &&
      (obj.recipientEmailAddress = message.recipientEmailAddress);
    return obj;
  },
};

const baseAddress: object = {
  streetName: "",
  streetNumber: "",
  addressAddition: "",
  zip: "",
  city: "",
};

export const Address = {
  encode(message: Address, writer: Writer = Writer.create()): Writer {
    if (message.streetName !== "") {
      writer.uint32(10).string(message.streetName);
    }
    if (message.streetNumber !== "") {
      writer.uint32(18).string(message.streetNumber);
    }
    if (message.addressAddition !== "") {
      writer.uint32(26).string(message.addressAddition);
    }
    if (message.zip !== "") {
      writer.uint32(34).string(message.zip);
    }
    if (message.city !== "") {
      writer.uint32(42).string(message.city);
    }
    if (message.Origin !== undefined) {
      Origin.encode(message.Origin, writer.uint32(50).fork()).ldelim();
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
          message.streetName = reader.string();
          break;
        case 2:
          message.streetNumber = reader.string();
          break;
        case 3:
          message.addressAddition = reader.string();
          break;
        case 4:
          message.zip = reader.string();
          break;
        case 5:
          message.city = reader.string();
          break;
        case 6:
          message.Origin = Origin.decode(reader, reader.uint32());
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
    if (object.streetName !== undefined && object.streetName !== null) {
      message.streetName = String(object.streetName);
    } else {
      message.streetName = "";
    }
    if (object.streetNumber !== undefined && object.streetNumber !== null) {
      message.streetNumber = String(object.streetNumber);
    } else {
      message.streetNumber = "";
    }
    if (
      object.addressAddition !== undefined &&
      object.addressAddition !== null
    ) {
      message.addressAddition = String(object.addressAddition);
    } else {
      message.addressAddition = "";
    }
    if (object.zip !== undefined && object.zip !== null) {
      message.zip = String(object.zip);
    } else {
      message.zip = "";
    }
    if (object.city !== undefined && object.city !== null) {
      message.city = String(object.city);
    } else {
      message.city = "";
    }
    if (object.Origin !== undefined && object.Origin !== null) {
      message.Origin = Origin.fromJSON(object.Origin);
    } else {
      message.Origin = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<Address>): Address {
    const message = { ...baseAddress } as Address;
    if (object.streetName !== undefined && object.streetName !== null) {
      message.streetName = object.streetName;
    } else {
      message.streetName = "";
    }
    if (object.streetNumber !== undefined && object.streetNumber !== null) {
      message.streetNumber = object.streetNumber;
    } else {
      message.streetNumber = "";
    }
    if (
      object.addressAddition !== undefined &&
      object.addressAddition !== null
    ) {
      message.addressAddition = object.addressAddition;
    } else {
      message.addressAddition = "";
    }
    if (object.zip !== undefined && object.zip !== null) {
      message.zip = object.zip;
    } else {
      message.zip = "";
    }
    if (object.city !== undefined && object.city !== null) {
      message.city = object.city;
    } else {
      message.city = "";
    }
    if (object.Origin !== undefined && object.Origin !== null) {
      message.Origin = Origin.fromPartial(object.Origin);
    } else {
      message.Origin = undefined;
    }
    return message;
  },

  toJSON(message: Address): unknown {
    const obj: any = {};
    message.streetName !== undefined && (obj.streetName = message.streetName);
    message.streetNumber !== undefined &&
      (obj.streetNumber = message.streetNumber);
    message.addressAddition !== undefined &&
      (obj.addressAddition = message.addressAddition);
    message.zip !== undefined && (obj.zip = message.zip);
    message.city !== undefined && (obj.city = message.city);
    message.Origin !== undefined &&
      (obj.Origin = message.Origin ? Origin.toJSON(message.Origin) : undefined);
    return obj;
  },
};

const baseOrigin: object = { country: "", countryISOCode: "" };

export const Origin = {
  encode(message: Origin, writer: Writer = Writer.create()): Writer {
    if (message.country !== "") {
      writer.uint32(10).string(message.country);
    }
    if (message.countryISOCode !== "") {
      writer.uint32(18).string(message.countryISOCode);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Origin {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseOrigin) as Origin;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.country = reader.string();
          break;
        case 2:
          message.countryISOCode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Origin {
    const message = globalThis.Object.create(baseOrigin) as Origin;
    if (object.country !== undefined && object.country !== null) {
      message.country = String(object.country);
    } else {
      message.country = "";
    }
    if (object.countryISOCode !== undefined && object.countryISOCode !== null) {
      message.countryISOCode = String(object.countryISOCode);
    } else {
      message.countryISOCode = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<Origin>): Origin {
    const message = { ...baseOrigin } as Origin;
    if (object.country !== undefined && object.country !== null) {
      message.country = object.country;
    } else {
      message.country = "";
    }
    if (object.countryISOCode !== undefined && object.countryISOCode !== null) {
      message.countryISOCode = object.countryISOCode;
    } else {
      message.countryISOCode = "";
    }
    return message;
  },

  toJSON(message: Origin): unknown {
    const obj: any = {};
    message.country !== undefined && (obj.country = message.country);
    message.countryISOCode !== undefined &&
      (obj.countryISOCode = message.countryISOCode);
    return obj;
  },
};

const baseShipper: object = {};

export const Shipper = {
  encode(message: Shipper, writer: Writer = Writer.create()): Writer {
    if (message.Name !== undefined) {
      Name.encode(message.Name, writer.uint32(10).fork()).ldelim();
    }
    if (message.Address !== undefined) {
      Address.encode(message.Address, writer.uint32(18).fork()).ldelim();
    }
    if (message.Communication !== undefined) {
      Communication.encode(
        message.Communication,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Shipper {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseShipper) as Shipper;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Name = Name.decode(reader, reader.uint32());
          break;
        case 2:
          message.Address = Address.decode(reader, reader.uint32());
          break;
        case 3:
          message.Communication = Communication.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Shipper {
    const message = globalThis.Object.create(baseShipper) as Shipper;
    if (object.Name !== undefined && object.Name !== null) {
      message.Name = Name.fromJSON(object.Name);
    } else {
      message.Name = undefined;
    }
    if (object.Address !== undefined && object.Address !== null) {
      message.Address = Address.fromJSON(object.Address);
    } else {
      message.Address = undefined;
    }
    if (object.Communication !== undefined && object.Communication !== null) {
      message.Communication = Communication.fromJSON(object.Communication);
    } else {
      message.Communication = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<Shipper>): Shipper {
    const message = { ...baseShipper } as Shipper;
    if (object.Name !== undefined && object.Name !== null) {
      message.Name = Name.fromPartial(object.Name);
    } else {
      message.Name = undefined;
    }
    if (object.Address !== undefined && object.Address !== null) {
      message.Address = Address.fromPartial(object.Address);
    } else {
      message.Address = undefined;
    }
    if (object.Communication !== undefined && object.Communication !== null) {
      message.Communication = Communication.fromPartial(object.Communication);
    } else {
      message.Communication = undefined;
    }
    return message;
  },

  toJSON(message: Shipper): unknown {
    const obj: any = {};
    message.Name !== undefined &&
      (obj.Name = message.Name ? Name.toJSON(message.Name) : undefined);
    message.Address !== undefined &&
      (obj.Address = message.Address
        ? Address.toJSON(message.Address)
        : undefined);
    message.Communication !== undefined &&
      (obj.Communication = message.Communication
        ? Communication.toJSON(message.Communication)
        : undefined);
    return obj;
  },
};

const baseName: object = { name1: "" };

export const Name = {
  encode(message: Name, writer: Writer = Writer.create()): Writer {
    if (message.name1 !== "") {
      writer.uint32(10).string(message.name1);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Name {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseName) as Name;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name1 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Name {
    const message = globalThis.Object.create(baseName) as Name;
    if (object.name1 !== undefined && object.name1 !== null) {
      message.name1 = String(object.name1);
    } else {
      message.name1 = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<Name>): Name {
    const message = { ...baseName } as Name;
    if (object.name1 !== undefined && object.name1 !== null) {
      message.name1 = object.name1;
    } else {
      message.name1 = "";
    }
    return message;
  },

  toJSON(message: Name): unknown {
    const obj: any = {};
    message.name1 !== undefined && (obj.name1 = message.name1);
    return obj;
  },
};

const baseReceiver: object = { name1: "" };

export const Receiver = {
  encode(message: Receiver, writer: Writer = Writer.create()): Writer {
    if (message.name1 !== "") {
      writer.uint32(10).string(message.name1);
    }
    if (message.Address !== undefined) {
      Address.encode(message.Address, writer.uint32(18).fork()).ldelim();
    }
    if (message.Communication !== undefined) {
      Communication.encode(
        message.Communication,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Receiver {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseReceiver) as Receiver;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name1 = reader.string();
          break;
        case 2:
          message.Address = Address.decode(reader, reader.uint32());
          break;
        case 3:
          message.Communication = Communication.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Receiver {
    const message = globalThis.Object.create(baseReceiver) as Receiver;
    if (object.name1 !== undefined && object.name1 !== null) {
      message.name1 = String(object.name1);
    } else {
      message.name1 = "";
    }
    if (object.Address !== undefined && object.Address !== null) {
      message.Address = Address.fromJSON(object.Address);
    } else {
      message.Address = undefined;
    }
    if (object.Communication !== undefined && object.Communication !== null) {
      message.Communication = Communication.fromJSON(object.Communication);
    } else {
      message.Communication = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<Receiver>): Receiver {
    const message = { ...baseReceiver } as Receiver;
    if (object.name1 !== undefined && object.name1 !== null) {
      message.name1 = object.name1;
    } else {
      message.name1 = "";
    }
    if (object.Address !== undefined && object.Address !== null) {
      message.Address = Address.fromPartial(object.Address);
    } else {
      message.Address = undefined;
    }
    if (object.Communication !== undefined && object.Communication !== null) {
      message.Communication = Communication.fromPartial(object.Communication);
    } else {
      message.Communication = undefined;
    }
    return message;
  },

  toJSON(message: Receiver): unknown {
    const obj: any = {};
    message.name1 !== undefined && (obj.name1 = message.name1);
    message.Address !== undefined &&
      (obj.Address = message.Address
        ? Address.toJSON(message.Address)
        : undefined);
    message.Communication !== undefined &&
      (obj.Communication = message.Communication
        ? Communication.toJSON(message.Communication)
        : undefined);
    return obj;
  },
};

const baseCommunication: object = { phone: "", email: "" };

export const Communication = {
  encode(message: Communication, writer: Writer = Writer.create()): Writer {
    if (message.phone !== "") {
      writer.uint32(10).string(message.phone);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Communication {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseCommunication
    ) as Communication;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.phone = reader.string();
          break;
        case 2:
          message.email = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Communication {
    const message = globalThis.Object.create(
      baseCommunication
    ) as Communication;
    if (object.phone !== undefined && object.phone !== null) {
      message.phone = String(object.phone);
    } else {
      message.phone = "";
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = String(object.email);
    } else {
      message.email = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<Communication>): Communication {
    const message = { ...baseCommunication } as Communication;
    if (object.phone !== undefined && object.phone !== null) {
      message.phone = object.phone;
    } else {
      message.phone = "";
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = "";
    }
    return message;
  },

  toJSON(message: Communication): unknown {
    const obj: any = {};
    message.phone !== undefined && (obj.phone = message.phone);
    message.email !== undefined && (obj.email = message.email);
    return obj;
  },
};

const baseExportDocument: object = {
  invoiceNumber: "",
  exportType: "",
  exportTypeDescription: "",
  termsOfTrade: "",
  placeOfCommital: "",
  additionalFee: 0,
};

export const ExportDocument = {
  encode(message: ExportDocument, writer: Writer = Writer.create()): Writer {
    if (message.invoiceNumber !== "") {
      writer.uint32(10).string(message.invoiceNumber);
    }
    if (message.exportType !== "") {
      writer.uint32(18).string(message.exportType);
    }
    if (message.exportTypeDescription !== "") {
      writer.uint32(26).string(message.exportTypeDescription);
    }
    if (message.termsOfTrade !== "") {
      writer.uint32(34).string(message.termsOfTrade);
    }
    if (message.placeOfCommital !== "") {
      writer.uint32(42).string(message.placeOfCommital);
    }
    if (message.additionalFee !== 0) {
      writer.uint32(49).double(message.additionalFee);
    }
    if (message.ExportDocPosition !== undefined) {
      ExportDocPosition.encode(
        message.ExportDocPosition,
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ExportDocument {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseExportDocument
    ) as ExportDocument;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.invoiceNumber = reader.string();
          break;
        case 2:
          message.exportType = reader.string();
          break;
        case 3:
          message.exportTypeDescription = reader.string();
          break;
        case 4:
          message.termsOfTrade = reader.string();
          break;
        case 5:
          message.placeOfCommital = reader.string();
          break;
        case 6:
          message.additionalFee = reader.double();
          break;
        case 7:
          message.ExportDocPosition = ExportDocPosition.decode(
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

  fromJSON(object: any): ExportDocument {
    const message = globalThis.Object.create(
      baseExportDocument
    ) as ExportDocument;
    if (object.invoiceNumber !== undefined && object.invoiceNumber !== null) {
      message.invoiceNumber = String(object.invoiceNumber);
    } else {
      message.invoiceNumber = "";
    }
    if (object.exportType !== undefined && object.exportType !== null) {
      message.exportType = String(object.exportType);
    } else {
      message.exportType = "";
    }
    if (
      object.exportTypeDescription !== undefined &&
      object.exportTypeDescription !== null
    ) {
      message.exportTypeDescription = String(object.exportTypeDescription);
    } else {
      message.exportTypeDescription = "";
    }
    if (object.termsOfTrade !== undefined && object.termsOfTrade !== null) {
      message.termsOfTrade = String(object.termsOfTrade);
    } else {
      message.termsOfTrade = "";
    }
    if (
      object.placeOfCommital !== undefined &&
      object.placeOfCommital !== null
    ) {
      message.placeOfCommital = String(object.placeOfCommital);
    } else {
      message.placeOfCommital = "";
    }
    if (object.additionalFee !== undefined && object.additionalFee !== null) {
      message.additionalFee = Number(object.additionalFee);
    } else {
      message.additionalFee = 0;
    }
    if (
      object.ExportDocPosition !== undefined &&
      object.ExportDocPosition !== null
    ) {
      message.ExportDocPosition = ExportDocPosition.fromJSON(
        object.ExportDocPosition
      );
    } else {
      message.ExportDocPosition = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<ExportDocument>): ExportDocument {
    const message = { ...baseExportDocument } as ExportDocument;
    if (object.invoiceNumber !== undefined && object.invoiceNumber !== null) {
      message.invoiceNumber = object.invoiceNumber;
    } else {
      message.invoiceNumber = "";
    }
    if (object.exportType !== undefined && object.exportType !== null) {
      message.exportType = object.exportType;
    } else {
      message.exportType = "";
    }
    if (
      object.exportTypeDescription !== undefined &&
      object.exportTypeDescription !== null
    ) {
      message.exportTypeDescription = object.exportTypeDescription;
    } else {
      message.exportTypeDescription = "";
    }
    if (object.termsOfTrade !== undefined && object.termsOfTrade !== null) {
      message.termsOfTrade = object.termsOfTrade;
    } else {
      message.termsOfTrade = "";
    }
    if (
      object.placeOfCommital !== undefined &&
      object.placeOfCommital !== null
    ) {
      message.placeOfCommital = object.placeOfCommital;
    } else {
      message.placeOfCommital = "";
    }
    if (object.additionalFee !== undefined && object.additionalFee !== null) {
      message.additionalFee = object.additionalFee;
    } else {
      message.additionalFee = 0;
    }
    if (
      object.ExportDocPosition !== undefined &&
      object.ExportDocPosition !== null
    ) {
      message.ExportDocPosition = ExportDocPosition.fromPartial(
        object.ExportDocPosition
      );
    } else {
      message.ExportDocPosition = undefined;
    }
    return message;
  },

  toJSON(message: ExportDocument): unknown {
    const obj: any = {};
    message.invoiceNumber !== undefined &&
      (obj.invoiceNumber = message.invoiceNumber);
    message.exportType !== undefined && (obj.exportType = message.exportType);
    message.exportTypeDescription !== undefined &&
      (obj.exportTypeDescription = message.exportTypeDescription);
    message.termsOfTrade !== undefined &&
      (obj.termsOfTrade = message.termsOfTrade);
    message.placeOfCommital !== undefined &&
      (obj.placeOfCommital = message.placeOfCommital);
    message.additionalFee !== undefined &&
      (obj.additionalFee = message.additionalFee);
    message.ExportDocPosition !== undefined &&
      (obj.ExportDocPosition = message.ExportDocPosition
        ? ExportDocPosition.toJSON(message.ExportDocPosition)
        : undefined);
    return obj;
  },
};

const baseExportDocPosition: object = {
  description: "",
  countryCodeOrigin: "",
  customsTariffNumber: "",
  amount: 0,
  netWeightInKG: 0,
  customsValue: 0,
};

export const ExportDocPosition = {
  encode(message: ExportDocPosition, writer: Writer = Writer.create()): Writer {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    if (message.countryCodeOrigin !== "") {
      writer.uint32(18).string(message.countryCodeOrigin);
    }
    if (message.customsTariffNumber !== "") {
      writer.uint32(26).string(message.customsTariffNumber);
    }
    if (message.amount !== 0) {
      writer.uint32(32).uint32(message.amount);
    }
    if (message.netWeightInKG !== 0) {
      writer.uint32(40).uint32(message.netWeightInKG);
    }
    if (message.customsValue !== 0) {
      writer.uint32(49).double(message.customsValue);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ExportDocPosition {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseExportDocPosition
    ) as ExportDocPosition;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.description = reader.string();
          break;
        case 2:
          message.countryCodeOrigin = reader.string();
          break;
        case 3:
          message.customsTariffNumber = reader.string();
          break;
        case 4:
          message.amount = reader.uint32();
          break;
        case 5:
          message.netWeightInKG = reader.uint32();
          break;
        case 6:
          message.customsValue = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExportDocPosition {
    const message = globalThis.Object.create(
      baseExportDocPosition
    ) as ExportDocPosition;
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (
      object.countryCodeOrigin !== undefined &&
      object.countryCodeOrigin !== null
    ) {
      message.countryCodeOrigin = String(object.countryCodeOrigin);
    } else {
      message.countryCodeOrigin = "";
    }
    if (
      object.customsTariffNumber !== undefined &&
      object.customsTariffNumber !== null
    ) {
      message.customsTariffNumber = String(object.customsTariffNumber);
    } else {
      message.customsTariffNumber = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Number(object.amount);
    } else {
      message.amount = 0;
    }
    if (object.netWeightInKG !== undefined && object.netWeightInKG !== null) {
      message.netWeightInKG = Number(object.netWeightInKG);
    } else {
      message.netWeightInKG = 0;
    }
    if (object.customsValue !== undefined && object.customsValue !== null) {
      message.customsValue = Number(object.customsValue);
    } else {
      message.customsValue = 0;
    }
    return message;
  },

  fromPartial(object: DeepPartial<ExportDocPosition>): ExportDocPosition {
    const message = { ...baseExportDocPosition } as ExportDocPosition;
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (
      object.countryCodeOrigin !== undefined &&
      object.countryCodeOrigin !== null
    ) {
      message.countryCodeOrigin = object.countryCodeOrigin;
    } else {
      message.countryCodeOrigin = "";
    }
    if (
      object.customsTariffNumber !== undefined &&
      object.customsTariffNumber !== null
    ) {
      message.customsTariffNumber = object.customsTariffNumber;
    } else {
      message.customsTariffNumber = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = 0;
    }
    if (object.netWeightInKG !== undefined && object.netWeightInKG !== null) {
      message.netWeightInKG = object.netWeightInKG;
    } else {
      message.netWeightInKG = 0;
    }
    if (object.customsValue !== undefined && object.customsValue !== null) {
      message.customsValue = object.customsValue;
    } else {
      message.customsValue = 0;
    }
    return message;
  },

  toJSON(message: ExportDocPosition): unknown {
    const obj: any = {};
    message.description !== undefined &&
      (obj.description = message.description);
    message.countryCodeOrigin !== undefined &&
      (obj.countryCodeOrigin = message.countryCodeOrigin);
    message.customsTariffNumber !== undefined &&
      (obj.customsTariffNumber = message.customsTariffNumber);
    message.amount !== undefined && (obj.amount = message.amount);
    message.netWeightInKG !== undefined &&
      (obj.netWeightInKG = message.netWeightInKG);
    message.customsValue !== undefined &&
      (obj.customsValue = message.customsValue);
    return obj;
  },
};

const baseFulfillmentResults: object = {};

export const FulfillmentResults = {
  encode(
    message: FulfillmentResults,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.fulfillmentResults) {
      ResponseDetailsList.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): FulfillmentResults {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseFulfillmentResults
    ) as FulfillmentResults;
    message.fulfillmentResults = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fulfillmentResults.push(
            ResponseDetailsList.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FulfillmentResults {
    const message = globalThis.Object.create(
      baseFulfillmentResults
    ) as FulfillmentResults;
    message.fulfillmentResults = [];
    if (
      object.fulfillmentResults !== undefined &&
      object.fulfillmentResults !== null
    ) {
      for (const e of object.fulfillmentResults) {
        message.fulfillmentResults.push(ResponseDetailsList.fromJSON(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<FulfillmentResults>): FulfillmentResults {
    const message = { ...baseFulfillmentResults } as FulfillmentResults;
    message.fulfillmentResults = [];
    if (
      object.fulfillmentResults !== undefined &&
      object.fulfillmentResults !== null
    ) {
      for (const e of object.fulfillmentResults) {
        message.fulfillmentResults.push(ResponseDetailsList.fromPartial(e));
      }
    }
    return message;
  },

  toJSON(message: FulfillmentResults): unknown {
    const obj: any = {};
    if (message.fulfillmentResults) {
      obj.fulfillmentResults = message.fulfillmentResults.map((e) =>
        e ? ResponseDetailsList.toJSON(e) : undefined
      );
    } else {
      obj.fulfillmentResults = [];
    }
    return obj;
  },
};

const baseResponseDetailsList: object = {};

export const ResponseDetailsList = {
  encode(
    message: ResponseDetailsList,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Status !== undefined) {
      FulfillmentStatus.encode(
        message.Status,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      ErrorList.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ResponseDetailsList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseResponseDetailsList
    ) as ResponseDetailsList;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Status = FulfillmentStatus.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = ErrorList.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseDetailsList {
    const message = globalThis.Object.create(
      baseResponseDetailsList
    ) as ResponseDetailsList;
    if (object.Status !== undefined && object.Status !== null) {
      message.Status = FulfillmentStatus.fromJSON(object.Status);
    } else {
      message.Status = undefined;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = ErrorList.fromJSON(object.error);
    } else {
      message.error = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<ResponseDetailsList>): ResponseDetailsList {
    const message = { ...baseResponseDetailsList } as ResponseDetailsList;
    if (object.Status !== undefined && object.Status !== null) {
      message.Status = FulfillmentStatus.fromPartial(object.Status);
    } else {
      message.Status = undefined;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = ErrorList.fromPartial(object.error);
    } else {
      message.error = undefined;
    }
    return message;
  },

  toJSON(message: ResponseDetailsList): unknown {
    const obj: any = {};
    message.Status !== undefined &&
      (obj.Status = message.Status
        ? FulfillmentStatus.toJSON(message.Status)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? ErrorList.toJSON(message.error) : undefined);
    return obj;
  },
};

const baseFulfillmentStatus: object = { OrderId: "", OrderStatus: "" };

export const FulfillmentStatus = {
  encode(message: FulfillmentStatus, writer: Writer = Writer.create()): Writer {
    if (message.OrderId !== "") {
      writer.uint32(10).string(message.OrderId);
    }
    if (message.OrderStatus !== "") {
      writer.uint32(18).string(message.OrderStatus);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): FulfillmentStatus {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseFulfillmentStatus
    ) as FulfillmentStatus;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.OrderId = reader.string();
          break;
        case 2:
          message.OrderStatus = reader.string();
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

  fromJSON(object: any): FulfillmentStatus {
    const message = globalThis.Object.create(
      baseFulfillmentStatus
    ) as FulfillmentStatus;
    if (object.OrderId !== undefined && object.OrderId !== null) {
      message.OrderId = String(object.OrderId);
    } else {
      message.OrderId = "";
    }
    if (object.OrderStatus !== undefined && object.OrderStatus !== null) {
      message.OrderStatus = String(object.OrderStatus);
    } else {
      message.OrderStatus = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<FulfillmentStatus>): FulfillmentStatus {
    const message = { ...baseFulfillmentStatus } as FulfillmentStatus;
    if (object.OrderId !== undefined && object.OrderId !== null) {
      message.OrderId = object.OrderId;
    } else {
      message.OrderId = "";
    }
    if (object.OrderStatus !== undefined && object.OrderStatus !== null) {
      message.OrderStatus = object.OrderStatus;
    } else {
      message.OrderStatus = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  toJSON(message: FulfillmentStatus): unknown {
    const obj: any = {};
    message.OrderId !== undefined && (obj.OrderId = message.OrderId);
    message.OrderStatus !== undefined &&
      (obj.OrderStatus = message.OrderStatus);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseError: object = { code: "", message: "" };

export const Error = {
  encode(message: Error, writer: Writer = Writer.create()): Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Error {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseError) as Error;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string();
          break;
        case 2:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Error {
    const message = globalThis.Object.create(baseError) as Error;
    if (object.code !== undefined && object.code !== null) {
      message.code = String(object.code);
    } else {
      message.code = "";
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message);
    } else {
      message.message = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<Error>): Error {
    const message = { ...baseError } as Error;
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = "";
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    } else {
      message.message = "";
    }
    return message;
  },

  toJSON(message: Error): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },
};

const baseErrorList: object = { code: "", message: "" };

export const ErrorList = {
  encode(message: ErrorList, writer: Writer = Writer.create()): Writer {
    for (const v of message.code) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.message) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ErrorList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseErrorList) as ErrorList;
    message.code = [];
    message.message = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code.push(reader.string());
          break;
        case 2:
          message.message.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ErrorList {
    const message = globalThis.Object.create(baseErrorList) as ErrorList;
    message.code = [];
    message.message = [];
    if (object.code !== undefined && object.code !== null) {
      for (const e of object.code) {
        message.code.push(String(e));
      }
    }
    if (object.message !== undefined && object.message !== null) {
      for (const e of object.message) {
        message.message.push(String(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<ErrorList>): ErrorList {
    const message = { ...baseErrorList } as ErrorList;
    message.code = [];
    message.message = [];
    if (object.code !== undefined && object.code !== null) {
      for (const e of object.code) {
        message.code.push(e);
      }
    }
    if (object.message !== undefined && object.message !== null) {
      for (const e of object.message) {
        message.message.push(e);
      }
    }
    return message;
  },

  toJSON(message: ErrorList): unknown {
    const obj: any = {};
    if (message.code) {
      obj.code = message.code.map((e) => e);
    } else {
      obj.code = [];
    }
    if (message.message) {
      obj.message = message.message.map((e) => e);
    } else {
      obj.message = [];
    }
    return obj;
  },
};

/** Microservice definition. */
export interface Service {
  CreateFulfillment(request: shipmentOrderLists): Promise<FulfillmentResults>;
  getLabels(request: OrderId): Promise<LabelResult>;
  trackFulfillment(request: TrackingNumber): Promise<Status>;
  deleteFulfillment(request: OrderId): Promise<DeleteStatus>;
  getAllFulfillments(request: FulfillmentStatus): Promise<AllFulfillments>;
}

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto.fromPartial({
    dependency: [
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
    ],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        field: [
          {
            name: "orderId",
            number: 1,
            label: 1,
            type: 9,
            jsonName: "orderId",
          },
          {
            name: "subject",
            number: 2,
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
        name: "OrderId",
      },
      {
        field: [
          {
            name: "orderId",
            number: 1,
            label: 1,
            type: 9,
            jsonName: "orderId",
          },
          {
            name: "shipmentType",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "shipmentType",
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
        name: "TrackingNumber",
      },
      {
        field: [
          { name: "Status", number: 1, label: 1, type: 9, jsonName: "Status" },
          {
            name: "shipmentStatus",
            number: 2,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.shipmentStatus",
            jsonName: "shipmentStatus",
          },
          {
            name: "OrderId",
            number: 3,
            label: 1,
            type: 9,
            jsonName: "OrderId",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Status",
      },
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Items",
            jsonName: "items",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "AllFulfillments",
      },
      {
        field: [
          {
            name: "fulfillment_status",
            number: 1,
            label: 1,
            type: 9,
            jsonName: "fulfillmentStatus",
          },
          {
            name: "order_id",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "orderId",
          },
          {
            name: "serviceType",
            number: 3,
            label: 1,
            type: 9,
            jsonName: "serviceType",
          },
          {
            name: "shipment_number",
            number: 4,
            label: 3,
            type: 9,
            jsonName: "shipmentNumber",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Items",
      },
      {
        field: [
          {
            name: "deleteStatus",
            number: 1,
            label: 1,
            type: 9,
            jsonName: "deleteStatus",
          },
          {
            name: "error",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Error",
            jsonName: "error",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "DeleteStatus",
      },
      {
        field: [
          {
            name: "ShipmentData",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.ShipmentData",
            jsonName: "ShipmentData",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "shipmentStatus",
      },
      {
        field: [
          {
            name: "ShipmentNumber",
            number: 1,
            label: 1,
            type: 9,
            jsonName: "ShipmentNumber",
          },
          { name: "Status", number: 2, label: 1, type: 9, jsonName: "Status" },
          {
            name: "ShortStatus",
            number: 3,
            label: 1,
            type: 9,
            jsonName: "ShortStatus",
          },
          {
            name: "TimeStamp",
            number: 4,
            label: 1,
            type: 9,
            jsonName: "TimeStamp",
          },
          {
            name: "Receiver",
            number: 5,
            label: 1,
            type: 9,
            jsonName: "Receiver",
          },
          {
            name: "ReceipientName",
            number: 6,
            label: 1,
            type: 9,
            jsonName: "ReceipientName",
          },
          {
            name: "Recepientemail",
            number: 7,
            label: 1,
            type: 9,
            jsonName: "Recepientemail",
          },
          {
            name: "EventDetails",
            number: 8,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.EventDetails",
            jsonName: "EventDetails",
          },
          {
            name: "Customer_Reference",
            number: 9,
            label: 1,
            type: 9,
            jsonName: "CustomerReference",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "ShipmentData",
      },
      {
        field: [
          { name: "Status", number: 1, label: 1, type: 9, jsonName: "Status" },
          {
            name: "Location",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "Location",
          },
          { name: "Time", number: 3, label: 1, type: 9, jsonName: "Time" },
          {
            name: "Coutnry",
            number: 4,
            label: 1,
            type: 9,
            jsonName: "Coutnry",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "EventDetails",
      },
      {
        field: [
          {
            name: "labels",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Labels",
            jsonName: "labels",
          },
          {
            name: "error",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Error",
            jsonName: "error",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "LabelResult",
      },
      {
        field: [
          {
            name: "labelUrl",
            number: 1,
            label: 1,
            type: 9,
            jsonName: "labelUrl",
          },
          {
            name: "shipmentNumber",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "shipmentNumber",
          },
          {
            name: "exportLabelUrl",
            number: 3,
            label: 1,
            type: 9,
            jsonName: "exportLabelUrl",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Labels",
      },
      {
        field: [
          {
            name: "ShipmentOrder",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.ShipmentOrder",
            jsonName: "ShipmentOrder",
          },
          {
            name: "subject",
            number: 2,
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
        name: "shipmentOrderLists",
      },
      {
        field: [
          {
            name: "fulfillmentList",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.FulfillmentList",
            jsonName: "fulfillmentList",
          },
          {
            name: "meta",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.meta.Meta",
            jsonName: "meta",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "ShipmentOrder",
      },
      {
        field: [
          {
            name: "Shipment",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Shipment",
            jsonName: "Shipment",
          },
          {
            name: "OrderId",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "OrderId",
          },
          {
            name: "fulFillmentService",
            number: 4,
            label: 1,
            type: 9,
            jsonName: "fulFillmentService",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "FulfillmentList",
      },
      {
        field: [
          {
            name: "ShipmentDetails",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.ShipmentDetails",
            jsonName: "ShipmentDetails",
          },
          {
            name: "customerReference",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "customerReference",
          },
          {
            name: "Receiver",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Receiver",
            jsonName: "Receiver",
          },
          {
            name: "Shipper",
            number: 4,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Shipper",
            jsonName: "Shipper",
          },
          {
            name: "returnShipmentAccountNumber",
            number: 5,
            label: 1,
            type: 9,
            jsonName: "returnShipmentAccountNumber",
          },
          {
            name: "returnShipmentReference",
            number: 6,
            label: 1,
            type: 9,
            jsonName: "returnShipmentReference",
          },
          {
            name: "Notification",
            number: 7,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Notification",
            jsonName: "Notification",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Shipment",
      },
      {
        field: [
          {
            name: "ShipmentItem",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.ShipmentItem",
            jsonName: "ShipmentItem",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "ShipmentDetails",
      },
      {
        field: [
          {
            name: "weightInKG",
            number: 1,
            label: 1,
            type: 1,
            jsonName: "weightInKG",
          },
          {
            name: "lengthInCM",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "lengthInCM",
          },
          {
            name: "widthInCM",
            number: 3,
            label: 1,
            type: 9,
            jsonName: "widthInCM",
          },
          {
            name: "heightInCM",
            number: 4,
            label: 1,
            type: 9,
            jsonName: "heightInCM",
          },
          {
            name: "ExportDocument",
            number: 5,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.ExportDocument",
            jsonName: "ExportDocument",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "ShipmentItem",
      },
      {
        field: [
          {
            name: "recipientEmailAddress",
            number: 1,
            label: 1,
            type: 9,
            jsonName: "recipientEmailAddress",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Notification",
      },
      {
        field: [
          {
            name: "streetName",
            number: 1,
            label: 1,
            type: 9,
            jsonName: "streetName",
          },
          {
            name: "streetNumber",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "streetNumber",
          },
          {
            name: "addressAddition",
            number: 3,
            label: 1,
            type: 9,
            jsonName: "addressAddition",
          },
          { name: "zip", number: 4, label: 1, type: 9, jsonName: "zip" },
          { name: "city", number: 5, label: 1, type: 9, jsonName: "city" },
          {
            name: "Origin",
            number: 6,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Origin",
            jsonName: "Origin",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Address",
      },
      {
        field: [
          {
            name: "country",
            number: 1,
            label: 1,
            type: 9,
            jsonName: "country",
          },
          {
            name: "countryISOCode",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "countryISOCode",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Origin",
      },
      {
        field: [
          {
            name: "Name",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Name",
            jsonName: "Name",
          },
          {
            name: "Address",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Address",
            jsonName: "Address",
          },
          {
            name: "Communication",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Communication",
            jsonName: "Communication",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Shipper",
      },
      {
        field: [
          { name: "name1", number: 1, label: 1, type: 9, jsonName: "name1" },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Name",
      },
      {
        field: [
          { name: "name1", number: 1, label: 1, type: 9, jsonName: "name1" },
          {
            name: "Address",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Address",
            jsonName: "Address",
          },
          {
            name: "Communication",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Communication",
            jsonName: "Communication",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Receiver",
      },
      {
        field: [
          { name: "phone", number: 1, label: 1, type: 9, jsonName: "phone" },
          { name: "email", number: 2, label: 1, type: 9, jsonName: "email" },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Communication",
      },
      {
        field: [
          {
            name: "invoiceNumber",
            number: 1,
            label: 1,
            type: 9,
            jsonName: "invoiceNumber",
          },
          {
            name: "exportType",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "exportType",
          },
          {
            name: "exportTypeDescription",
            number: 3,
            label: 1,
            type: 9,
            jsonName: "exportTypeDescription",
          },
          {
            name: "termsOfTrade",
            number: 4,
            label: 1,
            type: 9,
            jsonName: "termsOfTrade",
          },
          {
            name: "placeOfCommital",
            number: 5,
            label: 1,
            type: 9,
            jsonName: "placeOfCommital",
          },
          {
            name: "additionalFee",
            number: 6,
            label: 1,
            type: 1,
            jsonName: "additionalFee",
          },
          {
            name: "ExportDocPosition",
            number: 7,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.ExportDocPosition",
            jsonName: "ExportDocPosition",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "ExportDocument",
      },
      {
        field: [
          {
            name: "description",
            number: 1,
            label: 1,
            type: 9,
            jsonName: "description",
          },
          {
            name: "countryCodeOrigin",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "countryCodeOrigin",
          },
          {
            name: "customsTariffNumber",
            number: 3,
            label: 1,
            type: 9,
            jsonName: "customsTariffNumber",
          },
          { name: "amount", number: 4, label: 1, type: 13, jsonName: "amount" },
          {
            name: "netWeightInKG",
            number: 5,
            label: 1,
            type: 13,
            jsonName: "netWeightInKG",
          },
          {
            name: "customsValue",
            number: 6,
            label: 1,
            type: 1,
            jsonName: "customsValue",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "ExportDocPosition",
      },
      {
        field: [
          {
            name: "fulfillmentResults",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.ResponseDetailsList",
            jsonName: "fulfillmentResults",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "FulfillmentResults",
      },
      {
        field: [
          {
            name: "Status",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.FulfillmentStatus",
            jsonName: "Status",
          },
          {
            name: "error",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.ErrorList",
            jsonName: "error",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "ResponseDetailsList",
      },
      {
        field: [
          {
            name: "OrderId",
            number: 1,
            label: 1,
            type: 9,
            jsonName: "OrderId",
          },
          {
            name: "OrderStatus",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "OrderStatus",
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
        name: "FulfillmentStatus",
      },
      {
        field: [
          { name: "code", number: 1, label: 1, type: 9, jsonName: "code" },
          {
            name: "message",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "message",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Error",
      },
      {
        field: [
          { name: "code", number: 1, label: 3, type: 9, jsonName: "code" },
          {
            name: "message",
            number: 2,
            label: 3,
            type: 9,
            jsonName: "message",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "ErrorList",
      },
    ],
    enumType: [],
    service: [
      {
        method: [
          {
            name: "CreateFulfillment",
            inputType: ".io.restorecommerce.fulfillment.shipmentOrderLists",
            outputType: ".io.restorecommerce.fulfillment.FulfillmentResults",
          },
          {
            name: "getLabels",
            inputType: ".io.restorecommerce.fulfillment.OrderId",
            outputType: ".io.restorecommerce.fulfillment.LabelResult",
          },
          {
            name: "trackFulfillment",
            inputType: ".io.restorecommerce.fulfillment.TrackingNumber",
            outputType: ".io.restorecommerce.fulfillment.Status",
          },
          {
            name: "deleteFulfillment",
            inputType: ".io.restorecommerce.fulfillment.OrderId",
            outputType: ".io.restorecommerce.fulfillment.DeleteStatus",
          },
          {
            name: "getAllFulfillments",
            inputType: ".io.restorecommerce.fulfillment.FulfillmentStatus",
            outputType: ".io.restorecommerce.fulfillment.AllFulfillments",
          },
        ],
        name: "Service",
      },
    ],
    extension: [],
    name: "io/restorecommerce/fulfillment.proto",
    package: "io.restorecommerce.fulfillment",
    sourceCodeInfo: {
      location: [
        {
          path: [6, 0],
          span: [10, 0, 16, 1],
          leadingDetachedComments: [],
          leadingComments: "\n Microservice definition.\n",
        },
      ],
    },
    syntax: "proto3",
  }),
  references: {
    ".io.restorecommerce.fulfillment.OrderId": OrderId,
    ".io.restorecommerce.fulfillment.TrackingNumber": TrackingNumber,
    ".io.restorecommerce.fulfillment.Status": Status,
    ".io.restorecommerce.fulfillment.AllFulfillments": AllFulfillments,
    ".io.restorecommerce.fulfillment.Items": Items,
    ".io.restorecommerce.fulfillment.DeleteStatus": DeleteStatus,
    ".io.restorecommerce.fulfillment.shipmentStatus": shipmentStatus,
    ".io.restorecommerce.fulfillment.ShipmentData": ShipmentData,
    ".io.restorecommerce.fulfillment.EventDetails": EventDetails,
    ".io.restorecommerce.fulfillment.LabelResult": LabelResult,
    ".io.restorecommerce.fulfillment.Labels": Labels,
    ".io.restorecommerce.fulfillment.shipmentOrderLists": shipmentOrderLists,
    ".io.restorecommerce.fulfillment.ShipmentOrder": ShipmentOrder,
    ".io.restorecommerce.fulfillment.FulfillmentList": FulfillmentList,
    ".io.restorecommerce.fulfillment.Shipment": Shipment,
    ".io.restorecommerce.fulfillment.ShipmentDetails": ShipmentDetails,
    ".io.restorecommerce.fulfillment.ShipmentItem": ShipmentItem,
    ".io.restorecommerce.fulfillment.Notification": Notification,
    ".io.restorecommerce.fulfillment.Address": Address,
    ".io.restorecommerce.fulfillment.Origin": Origin,
    ".io.restorecommerce.fulfillment.Shipper": Shipper,
    ".io.restorecommerce.fulfillment.Name": Name,
    ".io.restorecommerce.fulfillment.Receiver": Receiver,
    ".io.restorecommerce.fulfillment.Communication": Communication,
    ".io.restorecommerce.fulfillment.ExportDocument": ExportDocument,
    ".io.restorecommerce.fulfillment.ExportDocPosition": ExportDocPosition,
    ".io.restorecommerce.fulfillment.FulfillmentResults": FulfillmentResults,
    ".io.restorecommerce.fulfillment.ResponseDetailsList": ResponseDetailsList,
    ".io.restorecommerce.fulfillment.FulfillmentStatus": FulfillmentStatus,
    ".io.restorecommerce.fulfillment.Error": Error,
    ".io.restorecommerce.fulfillment.ErrorList": ErrorList,
  },
  dependencies: [protoMetadata1, protoMetadata2],
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
