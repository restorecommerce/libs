/* eslint-disable */
import { Subject, ApiKey } from '../../io/restorecommerce/auth';
import { Meta } from '../../io/restorecommerce/meta';
import { Writer, Reader } from 'protobufjs/minimal';


export interface OrderId {
  orderId: string;
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
}

export interface TrackingNumber {
  orderId: string;
  shipmentType: string;
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
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
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
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
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
}

export interface Error {
  code: string;
  message: string;
}

export interface ErrorList {
  code: string[];
  message: string[];
}

const baseOrderId: object = {
  orderId: "",
};

const baseTrackingNumber: object = {
  orderId: "",
  shipmentType: "",
};

const baseStatus: object = {
  Status: "",
  OrderId: "",
};

const baseAllFulfillments: object = {
};

const baseItems: object = {
  fulfillmentStatus: "",
  orderId: "",
  serviceType: "",
  shipmentNumber: "",
};

const baseDeleteStatus: object = {
  deleteStatus: "",
};

const baseshipmentStatus: object = {
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

const baseEventDetails: object = {
  Status: "",
  Location: "",
  Time: "",
  Coutnry: "",
};

const baseLabelResult: object = {
};

const baseLabels: object = {
  labelUrl: "",
  shipmentNumber: "",
  exportLabelUrl: "",
};

const baseshipmentOrderLists: object = {
};

const baseShipmentOrder: object = {
};

const baseFulfillmentList: object = {
  OrderId: "",
  fulFillmentService: "",
};

const baseShipment: object = {
  customerReference: "",
  returnShipmentAccountNumber: "",
  returnShipmentReference: "",
};

const baseShipmentDetails: object = {
};

const baseShipmentItem: object = {
  weightInKG: 0,
  lengthInCM: "",
  widthInCM: "",
  heightInCM: "",
};

const baseNotification: object = {
  recipientEmailAddress: "",
};

const baseAddress: object = {
  streetName: "",
  streetNumber: "",
  addressAddition: "",
  zip: "",
  city: "",
};

const baseOrigin: object = {
  country: "",
  countryISOCode: "",
};

const baseShipper: object = {
};

const baseName: object = {
  name1: "",
};

const baseReceiver: object = {
  name1: "",
};

const baseCommunication: object = {
  phone: "",
  email: "",
};

const baseExportDocument: object = {
  invoiceNumber: "",
  exportType: "",
  exportTypeDescription: "",
  termsOfTrade: "",
  placeOfCommital: "",
  additionalFee: 0,
};

const baseExportDocPosition: object = {
  description: "",
  countryCodeOrigin: "",
  customsTariffNumber: "",
  amount: 0,
  netWeightInKG: 0,
  customsValue: 0,
};

const baseFulfillmentResults: object = {
};

const baseResponseDetailsList: object = {
};

const baseFulfillmentStatus: object = {
  OrderId: "",
  OrderStatus: "",
};

const baseError: object = {
  code: "",
  message: "",
};

const baseErrorList: object = {
  code: "",
  message: "",
};

/**
 *
 *  Microservice definition.
 */
export interface Service {

  CreateFulfillment(request: shipmentOrderLists): Promise<FulfillmentResults>;

  getLabels(request: OrderId): Promise<LabelResult>;

  trackFulfillment(request: TrackingNumber): Promise<Status>;

  deleteFulfillment(request: OrderId): Promise<DeleteStatus>;

  getAllFulfillments(request: FulfillmentStatus): Promise<AllFulfillments>;

}

export interface MetaI {
  readonly meta: 'object' | 'array' | 'map' | 'union' | 'builtin';
}

export interface MetaO extends MetaI {
  readonly meta: 'object';
  readonly type: string;
  readonly name: string;
}

export interface MetaA extends MetaI {
  readonly meta: 'array';
  readonly type: MetaI | string;
}

export interface MetaM extends MetaI {
  readonly meta: 'map';
  readonly key: string;
  readonly value: MetaI | string;
}

export interface MetaU extends MetaI {
  readonly meta: 'union';
  readonly choices: Array<MetaI | string | undefined>;
}

export interface MetaS<T, R> {
  readonly request: MetaO;
  readonly response: MetaO;
  readonly clientStreaming: boolean;
  readonly serverStreaming: boolean;
  readonly encodeRequest?: (message: T, writer: Writer) => Writer;
  readonly decodeResponse?: (input: Uint8Array | Reader, length?: number) => R;
}

export interface MetaB extends MetaI {
  readonly meta: 'builtin';
  readonly type: string;
  readonly original: string;
}

export const protobufPackage = 'io.restorecommerce.fulfillment'

export const OrderId = {
  encode(message: OrderId, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.orderId);
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(18).fork()).ldelim();
    }
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): OrderId {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOrderId } as OrderId;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = reader.string();
          break;
        case 2:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        case 3:
          message.apiKey = ApiKey.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OrderId {
    const message = { ...baseOrderId } as OrderId;
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
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromJSON(object.apiKey);
    } else {
      message.apiKey = undefined;
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
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromPartial(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  toJSON(message: OrderId): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = message.orderId);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    message.apiKey !== undefined && (obj.apiKey = message.apiKey ? ApiKey.toJSON(message.apiKey) : undefined);
    return obj;
  },
};

export const TrackingNumber = {
  encode(message: TrackingNumber, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.orderId);
    writer.uint32(18).string(message.shipmentType);
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): TrackingNumber {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTrackingNumber } as TrackingNumber;
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
  fromJSON(object: any): TrackingNumber {
    const message = { ...baseTrackingNumber } as TrackingNumber;
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
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromJSON(object.apiKey);
    } else {
      message.apiKey = undefined;
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
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromPartial(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  toJSON(message: TrackingNumber): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = message.orderId);
    message.shipmentType !== undefined && (obj.shipmentType = message.shipmentType);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    message.apiKey !== undefined && (obj.apiKey = message.apiKey ? ApiKey.toJSON(message.apiKey) : undefined);
    return obj;
  },
};

export const Status = {
  encode(message: Status, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.Status);
    for (const v of message.shipmentStatus) {
      shipmentStatus.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.OrderId);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Status {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStatus } as Status;
    message.shipmentStatus = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Status = reader.string();
          break;
        case 2:
          message.shipmentStatus.push(shipmentStatus.decode(reader, reader.uint32()));
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
    const message = { ...baseStatus } as Status;
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
      obj.shipmentStatus = message.shipmentStatus.map(e => e ? shipmentStatus.toJSON(e) : undefined);
    } else {
      obj.shipmentStatus = [];
    }
    message.OrderId !== undefined && (obj.OrderId = message.OrderId);
    return obj;
  },
};

export const AllFulfillments = {
  encode(message: AllFulfillments, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      Items.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): AllFulfillments {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAllFulfillments } as AllFulfillments;
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
    const message = { ...baseAllFulfillments } as AllFulfillments;
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
      obj.items = message.items.map(e => e ? Items.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    return obj;
  },
};

export const Items = {
  encode(message: Items, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.fulfillmentStatus);
    writer.uint32(18).string(message.orderId);
    writer.uint32(26).string(message.serviceType);
    for (const v of message.shipmentNumber) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Items {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseItems } as Items;
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
    const message = { ...baseItems } as Items;
    message.shipmentNumber = [];
    if (object.fulfillmentStatus !== undefined && object.fulfillmentStatus !== null) {
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
    if (object.fulfillmentStatus !== undefined && object.fulfillmentStatus !== null) {
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
    message.fulfillmentStatus !== undefined && (obj.fulfillmentStatus = message.fulfillmentStatus);
    message.orderId !== undefined && (obj.orderId = message.orderId);
    message.serviceType !== undefined && (obj.serviceType = message.serviceType);
    if (message.shipmentNumber) {
      obj.shipmentNumber = message.shipmentNumber.map(e => e);
    } else {
      obj.shipmentNumber = [];
    }
    return obj;
  },
};

export const DeleteStatus = {
  encode(message: DeleteStatus, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.deleteStatus);
    if (message.error !== undefined && message.error !== undefined) {
      Error.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): DeleteStatus {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteStatus } as DeleteStatus;
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
    const message = { ...baseDeleteStatus } as DeleteStatus;
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
    message.deleteStatus !== undefined && (obj.deleteStatus = message.deleteStatus);
    message.error !== undefined && (obj.error = message.error ? Error.toJSON(message.error) : undefined);
    return obj;
  },
};

export const shipmentStatus = {
  encode(message: shipmentStatus, writer: Writer = Writer.create()): Writer {
    for (const v of message.ShipmentData) {
      ShipmentData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): shipmentStatus {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseshipmentStatus } as shipmentStatus;
    message.ShipmentData = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ShipmentData.push(ShipmentData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): shipmentStatus {
    const message = { ...baseshipmentStatus } as shipmentStatus;
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
      obj.ShipmentData = message.ShipmentData.map(e => e ? ShipmentData.toJSON(e) : undefined);
    } else {
      obj.ShipmentData = [];
    }
    return obj;
  },
};

export const ShipmentData = {
  encode(message: ShipmentData, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.ShipmentNumber);
    writer.uint32(18).string(message.Status);
    writer.uint32(26).string(message.ShortStatus);
    writer.uint32(34).string(message.TimeStamp);
    writer.uint32(42).string(message.Receiver);
    writer.uint32(50).string(message.ReceipientName);
    writer.uint32(58).string(message.Recepientemail);
    for (const v of message.EventDetails) {
      EventDetails.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    writer.uint32(74).string(message.CustomerReference);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ShipmentData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseShipmentData } as ShipmentData;
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
          message.EventDetails.push(EventDetails.decode(reader, reader.uint32()));
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
    const message = { ...baseShipmentData } as ShipmentData;
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
    if (object.CustomerReference !== undefined && object.CustomerReference !== null) {
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
    if (object.CustomerReference !== undefined && object.CustomerReference !== null) {
      message.CustomerReference = object.CustomerReference;
    } else {
      message.CustomerReference = "";
    }
    return message;
  },
  toJSON(message: ShipmentData): unknown {
    const obj: any = {};
    message.ShipmentNumber !== undefined && (obj.ShipmentNumber = message.ShipmentNumber);
    message.Status !== undefined && (obj.Status = message.Status);
    message.ShortStatus !== undefined && (obj.ShortStatus = message.ShortStatus);
    message.TimeStamp !== undefined && (obj.TimeStamp = message.TimeStamp);
    message.Receiver !== undefined && (obj.Receiver = message.Receiver);
    message.ReceipientName !== undefined && (obj.ReceipientName = message.ReceipientName);
    message.Recepientemail !== undefined && (obj.Recepientemail = message.Recepientemail);
    if (message.EventDetails) {
      obj.EventDetails = message.EventDetails.map(e => e ? EventDetails.toJSON(e) : undefined);
    } else {
      obj.EventDetails = [];
    }
    message.CustomerReference !== undefined && (obj.CustomerReference = message.CustomerReference);
    return obj;
  },
};

export const EventDetails = {
  encode(message: EventDetails, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.Status);
    writer.uint32(18).string(message.Location);
    writer.uint32(26).string(message.Time);
    writer.uint32(34).string(message.Coutnry);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): EventDetails {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventDetails } as EventDetails;
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
    const message = { ...baseEventDetails } as EventDetails;
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

export const LabelResult = {
  encode(message: LabelResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.labels) {
      Labels.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined && message.error !== undefined) {
      Error.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): LabelResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLabelResult } as LabelResult;
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
    const message = { ...baseLabelResult } as LabelResult;
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
      obj.labels = message.labels.map(e => e ? Labels.toJSON(e) : undefined);
    } else {
      obj.labels = [];
    }
    message.error !== undefined && (obj.error = message.error ? Error.toJSON(message.error) : undefined);
    return obj;
  },
};

export const Labels = {
  encode(message: Labels, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.labelUrl);
    writer.uint32(18).string(message.shipmentNumber);
    writer.uint32(26).string(message.exportLabelUrl);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Labels {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLabels } as Labels;
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
    const message = { ...baseLabels } as Labels;
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
    message.shipmentNumber !== undefined && (obj.shipmentNumber = message.shipmentNumber);
    message.exportLabelUrl !== undefined && (obj.exportLabelUrl = message.exportLabelUrl);
    return obj;
  },
};

export const shipmentOrderLists = {
  encode(message: shipmentOrderLists, writer: Writer = Writer.create()): Writer {
    if (message.ShipmentOrder !== undefined && message.ShipmentOrder !== undefined) {
      ShipmentOrder.encode(message.ShipmentOrder, writer.uint32(10).fork()).ldelim();
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(18).fork()).ldelim();
    }
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): shipmentOrderLists {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseshipmentOrderLists } as shipmentOrderLists;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ShipmentOrder = ShipmentOrder.decode(reader, reader.uint32());
          break;
        case 2:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        case 3:
          message.apiKey = ApiKey.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): shipmentOrderLists {
    const message = { ...baseshipmentOrderLists } as shipmentOrderLists;
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
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromJSON(object.apiKey);
    } else {
      message.apiKey = undefined;
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
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromPartial(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  toJSON(message: shipmentOrderLists): unknown {
    const obj: any = {};
    message.ShipmentOrder !== undefined && (obj.ShipmentOrder = message.ShipmentOrder ? ShipmentOrder.toJSON(message.ShipmentOrder) : undefined);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    message.apiKey !== undefined && (obj.apiKey = message.apiKey ? ApiKey.toJSON(message.apiKey) : undefined);
    return obj;
  },
};

export const ShipmentOrder = {
  encode(message: ShipmentOrder, writer: Writer = Writer.create()): Writer {
    for (const v of message.fulfillmentList) {
      FulfillmentList.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.meta !== undefined && message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ShipmentOrder {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseShipmentOrder } as ShipmentOrder;
    message.fulfillmentList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fulfillmentList.push(FulfillmentList.decode(reader, reader.uint32()));
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
    const message = { ...baseShipmentOrder } as ShipmentOrder;
    message.fulfillmentList = [];
    if (object.fulfillmentList !== undefined && object.fulfillmentList !== null) {
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
    if (object.fulfillmentList !== undefined && object.fulfillmentList !== null) {
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
      obj.fulfillmentList = message.fulfillmentList.map(e => e ? FulfillmentList.toJSON(e) : undefined);
    } else {
      obj.fulfillmentList = [];
    }
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    return obj;
  },
};

export const FulfillmentList = {
  encode(message: FulfillmentList, writer: Writer = Writer.create()): Writer {
    if (message.Shipment !== undefined && message.Shipment !== undefined) {
      Shipment.encode(message.Shipment, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(18).string(message.OrderId);
    writer.uint32(34).string(message.fulFillmentService);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): FulfillmentList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFulfillmentList } as FulfillmentList;
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
    const message = { ...baseFulfillmentList } as FulfillmentList;
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
    if (object.fulFillmentService !== undefined && object.fulFillmentService !== null) {
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
    if (object.fulFillmentService !== undefined && object.fulFillmentService !== null) {
      message.fulFillmentService = object.fulFillmentService;
    } else {
      message.fulFillmentService = "";
    }
    return message;
  },
  toJSON(message: FulfillmentList): unknown {
    const obj: any = {};
    message.Shipment !== undefined && (obj.Shipment = message.Shipment ? Shipment.toJSON(message.Shipment) : undefined);
    message.OrderId !== undefined && (obj.OrderId = message.OrderId);
    message.fulFillmentService !== undefined && (obj.fulFillmentService = message.fulFillmentService);
    return obj;
  },
};

export const Shipment = {
  encode(message: Shipment, writer: Writer = Writer.create()): Writer {
    for (const v of message.ShipmentDetails) {
      ShipmentDetails.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(18).string(message.customerReference);
    if (message.Receiver !== undefined && message.Receiver !== undefined) {
      Receiver.encode(message.Receiver, writer.uint32(26).fork()).ldelim();
    }
    if (message.Shipper !== undefined && message.Shipper !== undefined) {
      Shipper.encode(message.Shipper, writer.uint32(34).fork()).ldelim();
    }
    writer.uint32(42).string(message.returnShipmentAccountNumber);
    writer.uint32(50).string(message.returnShipmentReference);
    if (message.Notification !== undefined && message.Notification !== undefined) {
      Notification.encode(message.Notification, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Shipment {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseShipment } as Shipment;
    message.ShipmentDetails = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ShipmentDetails.push(ShipmentDetails.decode(reader, reader.uint32()));
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
    const message = { ...baseShipment } as Shipment;
    message.ShipmentDetails = [];
    if (object.ShipmentDetails !== undefined && object.ShipmentDetails !== null) {
      for (const e of object.ShipmentDetails) {
        message.ShipmentDetails.push(ShipmentDetails.fromJSON(e));
      }
    }
    if (object.customerReference !== undefined && object.customerReference !== null) {
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
    if (object.returnShipmentAccountNumber !== undefined && object.returnShipmentAccountNumber !== null) {
      message.returnShipmentAccountNumber = String(object.returnShipmentAccountNumber);
    } else {
      message.returnShipmentAccountNumber = "";
    }
    if (object.returnShipmentReference !== undefined && object.returnShipmentReference !== null) {
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
    if (object.ShipmentDetails !== undefined && object.ShipmentDetails !== null) {
      for (const e of object.ShipmentDetails) {
        message.ShipmentDetails.push(ShipmentDetails.fromPartial(e));
      }
    }
    if (object.customerReference !== undefined && object.customerReference !== null) {
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
    if (object.returnShipmentAccountNumber !== undefined && object.returnShipmentAccountNumber !== null) {
      message.returnShipmentAccountNumber = object.returnShipmentAccountNumber;
    } else {
      message.returnShipmentAccountNumber = "";
    }
    if (object.returnShipmentReference !== undefined && object.returnShipmentReference !== null) {
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
      obj.ShipmentDetails = message.ShipmentDetails.map(e => e ? ShipmentDetails.toJSON(e) : undefined);
    } else {
      obj.ShipmentDetails = [];
    }
    message.customerReference !== undefined && (obj.customerReference = message.customerReference);
    message.Receiver !== undefined && (obj.Receiver = message.Receiver ? Receiver.toJSON(message.Receiver) : undefined);
    message.Shipper !== undefined && (obj.Shipper = message.Shipper ? Shipper.toJSON(message.Shipper) : undefined);
    message.returnShipmentAccountNumber !== undefined && (obj.returnShipmentAccountNumber = message.returnShipmentAccountNumber);
    message.returnShipmentReference !== undefined && (obj.returnShipmentReference = message.returnShipmentReference);
    message.Notification !== undefined && (obj.Notification = message.Notification ? Notification.toJSON(message.Notification) : undefined);
    return obj;
  },
};

export const ShipmentDetails = {
  encode(message: ShipmentDetails, writer: Writer = Writer.create()): Writer {
    if (message.ShipmentItem !== undefined && message.ShipmentItem !== undefined) {
      ShipmentItem.encode(message.ShipmentItem, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ShipmentDetails {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseShipmentDetails } as ShipmentDetails;
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
    const message = { ...baseShipmentDetails } as ShipmentDetails;
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
    message.ShipmentItem !== undefined && (obj.ShipmentItem = message.ShipmentItem ? ShipmentItem.toJSON(message.ShipmentItem) : undefined);
    return obj;
  },
};

export const ShipmentItem = {
  encode(message: ShipmentItem, writer: Writer = Writer.create()): Writer {
    writer.uint32(9).double(message.weightInKG);
    writer.uint32(18).string(message.lengthInCM);
    writer.uint32(26).string(message.widthInCM);
    writer.uint32(34).string(message.heightInCM);
    if (message.ExportDocument !== undefined && message.ExportDocument !== undefined) {
      ExportDocument.encode(message.ExportDocument, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ShipmentItem {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseShipmentItem } as ShipmentItem;
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
          message.ExportDocument = ExportDocument.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ShipmentItem {
    const message = { ...baseShipmentItem } as ShipmentItem;
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
      message.ExportDocument = ExportDocument.fromPartial(object.ExportDocument);
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
    message.ExportDocument !== undefined && (obj.ExportDocument = message.ExportDocument ? ExportDocument.toJSON(message.ExportDocument) : undefined);
    return obj;
  },
};

export const Notification = {
  encode(message: Notification, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.recipientEmailAddress);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Notification {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNotification } as Notification;
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
    const message = { ...baseNotification } as Notification;
    if (object.recipientEmailAddress !== undefined && object.recipientEmailAddress !== null) {
      message.recipientEmailAddress = String(object.recipientEmailAddress);
    } else {
      message.recipientEmailAddress = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Notification>): Notification {
    const message = { ...baseNotification } as Notification;
    if (object.recipientEmailAddress !== undefined && object.recipientEmailAddress !== null) {
      message.recipientEmailAddress = object.recipientEmailAddress;
    } else {
      message.recipientEmailAddress = "";
    }
    return message;
  },
  toJSON(message: Notification): unknown {
    const obj: any = {};
    message.recipientEmailAddress !== undefined && (obj.recipientEmailAddress = message.recipientEmailAddress);
    return obj;
  },
};

export const Address = {
  encode(message: Address, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.streetName);
    writer.uint32(18).string(message.streetNumber);
    writer.uint32(26).string(message.addressAddition);
    writer.uint32(34).string(message.zip);
    writer.uint32(42).string(message.city);
    if (message.Origin !== undefined && message.Origin !== undefined) {
      Origin.encode(message.Origin, writer.uint32(50).fork()).ldelim();
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
    const message = { ...baseAddress } as Address;
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
    if (object.addressAddition !== undefined && object.addressAddition !== null) {
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
    if (object.addressAddition !== undefined && object.addressAddition !== null) {
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
    message.streetNumber !== undefined && (obj.streetNumber = message.streetNumber);
    message.addressAddition !== undefined && (obj.addressAddition = message.addressAddition);
    message.zip !== undefined && (obj.zip = message.zip);
    message.city !== undefined && (obj.city = message.city);
    message.Origin !== undefined && (obj.Origin = message.Origin ? Origin.toJSON(message.Origin) : undefined);
    return obj;
  },
};

export const Origin = {
  encode(message: Origin, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.country);
    writer.uint32(18).string(message.countryISOCode);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Origin {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOrigin } as Origin;
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
    const message = { ...baseOrigin } as Origin;
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
    message.countryISOCode !== undefined && (obj.countryISOCode = message.countryISOCode);
    return obj;
  },
};

export const Shipper = {
  encode(message: Shipper, writer: Writer = Writer.create()): Writer {
    if (message.Name !== undefined && message.Name !== undefined) {
      Name.encode(message.Name, writer.uint32(10).fork()).ldelim();
    }
    if (message.Address !== undefined && message.Address !== undefined) {
      Address.encode(message.Address, writer.uint32(18).fork()).ldelim();
    }
    if (message.Communication !== undefined && message.Communication !== undefined) {
      Communication.encode(message.Communication, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Shipper {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseShipper } as Shipper;
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
    const message = { ...baseShipper } as Shipper;
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
    message.Name !== undefined && (obj.Name = message.Name ? Name.toJSON(message.Name) : undefined);
    message.Address !== undefined && (obj.Address = message.Address ? Address.toJSON(message.Address) : undefined);
    message.Communication !== undefined && (obj.Communication = message.Communication ? Communication.toJSON(message.Communication) : undefined);
    return obj;
  },
};

export const Name = {
  encode(message: Name, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.name1);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Name {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseName } as Name;
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
    const message = { ...baseName } as Name;
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

export const Receiver = {
  encode(message: Receiver, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.name1);
    if (message.Address !== undefined && message.Address !== undefined) {
      Address.encode(message.Address, writer.uint32(18).fork()).ldelim();
    }
    if (message.Communication !== undefined && message.Communication !== undefined) {
      Communication.encode(message.Communication, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Receiver {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReceiver } as Receiver;
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
    const message = { ...baseReceiver } as Receiver;
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
    message.Address !== undefined && (obj.Address = message.Address ? Address.toJSON(message.Address) : undefined);
    message.Communication !== undefined && (obj.Communication = message.Communication ? Communication.toJSON(message.Communication) : undefined);
    return obj;
  },
};

export const Communication = {
  encode(message: Communication, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.phone);
    writer.uint32(18).string(message.email);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Communication {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCommunication } as Communication;
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
    const message = { ...baseCommunication } as Communication;
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

export const ExportDocument = {
  encode(message: ExportDocument, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.invoiceNumber);
    writer.uint32(18).string(message.exportType);
    writer.uint32(26).string(message.exportTypeDescription);
    writer.uint32(34).string(message.termsOfTrade);
    writer.uint32(42).string(message.placeOfCommital);
    writer.uint32(49).double(message.additionalFee);
    if (message.ExportDocPosition !== undefined && message.ExportDocPosition !== undefined) {
      ExportDocPosition.encode(message.ExportDocPosition, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ExportDocument {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExportDocument } as ExportDocument;
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
          message.ExportDocPosition = ExportDocPosition.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExportDocument {
    const message = { ...baseExportDocument } as ExportDocument;
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
    if (object.exportTypeDescription !== undefined && object.exportTypeDescription !== null) {
      message.exportTypeDescription = String(object.exportTypeDescription);
    } else {
      message.exportTypeDescription = "";
    }
    if (object.termsOfTrade !== undefined && object.termsOfTrade !== null) {
      message.termsOfTrade = String(object.termsOfTrade);
    } else {
      message.termsOfTrade = "";
    }
    if (object.placeOfCommital !== undefined && object.placeOfCommital !== null) {
      message.placeOfCommital = String(object.placeOfCommital);
    } else {
      message.placeOfCommital = "";
    }
    if (object.additionalFee !== undefined && object.additionalFee !== null) {
      message.additionalFee = Number(object.additionalFee);
    } else {
      message.additionalFee = 0;
    }
    if (object.ExportDocPosition !== undefined && object.ExportDocPosition !== null) {
      message.ExportDocPosition = ExportDocPosition.fromJSON(object.ExportDocPosition);
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
    if (object.exportTypeDescription !== undefined && object.exportTypeDescription !== null) {
      message.exportTypeDescription = object.exportTypeDescription;
    } else {
      message.exportTypeDescription = "";
    }
    if (object.termsOfTrade !== undefined && object.termsOfTrade !== null) {
      message.termsOfTrade = object.termsOfTrade;
    } else {
      message.termsOfTrade = "";
    }
    if (object.placeOfCommital !== undefined && object.placeOfCommital !== null) {
      message.placeOfCommital = object.placeOfCommital;
    } else {
      message.placeOfCommital = "";
    }
    if (object.additionalFee !== undefined && object.additionalFee !== null) {
      message.additionalFee = object.additionalFee;
    } else {
      message.additionalFee = 0;
    }
    if (object.ExportDocPosition !== undefined && object.ExportDocPosition !== null) {
      message.ExportDocPosition = ExportDocPosition.fromPartial(object.ExportDocPosition);
    } else {
      message.ExportDocPosition = undefined;
    }
    return message;
  },
  toJSON(message: ExportDocument): unknown {
    const obj: any = {};
    message.invoiceNumber !== undefined && (obj.invoiceNumber = message.invoiceNumber);
    message.exportType !== undefined && (obj.exportType = message.exportType);
    message.exportTypeDescription !== undefined && (obj.exportTypeDescription = message.exportTypeDescription);
    message.termsOfTrade !== undefined && (obj.termsOfTrade = message.termsOfTrade);
    message.placeOfCommital !== undefined && (obj.placeOfCommital = message.placeOfCommital);
    message.additionalFee !== undefined && (obj.additionalFee = message.additionalFee);
    message.ExportDocPosition !== undefined && (obj.ExportDocPosition = message.ExportDocPosition ? ExportDocPosition.toJSON(message.ExportDocPosition) : undefined);
    return obj;
  },
};

export const ExportDocPosition = {
  encode(message: ExportDocPosition, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.description);
    writer.uint32(18).string(message.countryCodeOrigin);
    writer.uint32(26).string(message.customsTariffNumber);
    writer.uint32(32).uint32(message.amount);
    writer.uint32(40).uint32(message.netWeightInKG);
    writer.uint32(49).double(message.customsValue);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ExportDocPosition {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExportDocPosition } as ExportDocPosition;
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
    const message = { ...baseExportDocPosition } as ExportDocPosition;
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.countryCodeOrigin !== undefined && object.countryCodeOrigin !== null) {
      message.countryCodeOrigin = String(object.countryCodeOrigin);
    } else {
      message.countryCodeOrigin = "";
    }
    if (object.customsTariffNumber !== undefined && object.customsTariffNumber !== null) {
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
    if (object.countryCodeOrigin !== undefined && object.countryCodeOrigin !== null) {
      message.countryCodeOrigin = object.countryCodeOrigin;
    } else {
      message.countryCodeOrigin = "";
    }
    if (object.customsTariffNumber !== undefined && object.customsTariffNumber !== null) {
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
    message.description !== undefined && (obj.description = message.description);
    message.countryCodeOrigin !== undefined && (obj.countryCodeOrigin = message.countryCodeOrigin);
    message.customsTariffNumber !== undefined && (obj.customsTariffNumber = message.customsTariffNumber);
    message.amount !== undefined && (obj.amount = message.amount);
    message.netWeightInKG !== undefined && (obj.netWeightInKG = message.netWeightInKG);
    message.customsValue !== undefined && (obj.customsValue = message.customsValue);
    return obj;
  },
};

export const FulfillmentResults = {
  encode(message: FulfillmentResults, writer: Writer = Writer.create()): Writer {
    for (const v of message.fulfillmentResults) {
      ResponseDetailsList.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): FulfillmentResults {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFulfillmentResults } as FulfillmentResults;
    message.fulfillmentResults = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fulfillmentResults.push(ResponseDetailsList.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FulfillmentResults {
    const message = { ...baseFulfillmentResults } as FulfillmentResults;
    message.fulfillmentResults = [];
    if (object.fulfillmentResults !== undefined && object.fulfillmentResults !== null) {
      for (const e of object.fulfillmentResults) {
        message.fulfillmentResults.push(ResponseDetailsList.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FulfillmentResults>): FulfillmentResults {
    const message = { ...baseFulfillmentResults } as FulfillmentResults;
    message.fulfillmentResults = [];
    if (object.fulfillmentResults !== undefined && object.fulfillmentResults !== null) {
      for (const e of object.fulfillmentResults) {
        message.fulfillmentResults.push(ResponseDetailsList.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: FulfillmentResults): unknown {
    const obj: any = {};
    if (message.fulfillmentResults) {
      obj.fulfillmentResults = message.fulfillmentResults.map(e => e ? ResponseDetailsList.toJSON(e) : undefined);
    } else {
      obj.fulfillmentResults = [];
    }
    return obj;
  },
};

export const ResponseDetailsList = {
  encode(message: ResponseDetailsList, writer: Writer = Writer.create()): Writer {
    if (message.Status !== undefined && message.Status !== undefined) {
      FulfillmentStatus.encode(message.Status, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined && message.error !== undefined) {
      ErrorList.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ResponseDetailsList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResponseDetailsList } as ResponseDetailsList;
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
    const message = { ...baseResponseDetailsList } as ResponseDetailsList;
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
    message.Status !== undefined && (obj.Status = message.Status ? FulfillmentStatus.toJSON(message.Status) : undefined);
    message.error !== undefined && (obj.error = message.error ? ErrorList.toJSON(message.error) : undefined);
    return obj;
  },
};

export const FulfillmentStatus = {
  encode(message: FulfillmentStatus, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.OrderId);
    writer.uint32(18).string(message.OrderStatus);
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): FulfillmentStatus {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFulfillmentStatus } as FulfillmentStatus;
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
  fromJSON(object: any): FulfillmentStatus {
    const message = { ...baseFulfillmentStatus } as FulfillmentStatus;
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
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromJSON(object.apiKey);
    } else {
      message.apiKey = undefined;
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
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromPartial(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  toJSON(message: FulfillmentStatus): unknown {
    const obj: any = {};
    message.OrderId !== undefined && (obj.OrderId = message.OrderId);
    message.OrderStatus !== undefined && (obj.OrderStatus = message.OrderStatus);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    message.apiKey !== undefined && (obj.apiKey = message.apiKey ? ApiKey.toJSON(message.apiKey) : undefined);
    return obj;
  },
};

export const Error = {
  encode(message: Error, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.code);
    writer.uint32(18).string(message.message);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Error {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseError } as Error;
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
    const message = { ...baseError } as Error;
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
  decode(input: Uint8Array | Reader, length?: number): ErrorList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseErrorList } as ErrorList;
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
    const message = { ...baseErrorList } as ErrorList;
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
      obj.code = message.code.map(e => e);
    } else {
      obj.code = [];
    }
    if (message.message) {
      obj.message = message.message.map(e => e);
    } else {
      obj.message = [];
    }
    return obj;
  },
};

export const metaOrderId: { [key in keyof Required<OrderId>]: MetaI | string } = {
  orderId: {meta:'builtin', type:'string', original:'string'} as MetaB,
  subject: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.Subject', name:'Subject'} as MetaO]} as MetaU,
  apiKey: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.ApiKey', name:'ApiKey'} as MetaO]} as MetaU,
}
export const metaTrackingNumber: { [key in keyof Required<TrackingNumber>]: MetaI | string } = {
  orderId: {meta:'builtin', type:'string', original:'string'} as MetaB,
  shipmentType: {meta:'builtin', type:'string', original:'string'} as MetaB,
  subject: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.Subject', name:'Subject'} as MetaO]} as MetaU,
  apiKey: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.ApiKey', name:'ApiKey'} as MetaO]} as MetaU,
}
export const metaStatus: { [key in keyof Required<Status>]: MetaI | string } = {
  Status: {meta:'builtin', type:'string', original:'string'} as MetaB,
  shipmentStatus: {meta:'array', type:{meta:'object', type:'.io.restorecommerce.fulfillment.shipmentStatus', name:'shipmentStatus'} as MetaO} as MetaA,
  OrderId: {meta:'builtin', type:'string', original:'string'} as MetaB,
}
export const metaAllFulfillments: { [key in keyof Required<AllFulfillments>]: MetaI | string } = {
  items: {meta:'array', type:{meta:'object', type:'.io.restorecommerce.fulfillment.Items', name:'Items'} as MetaO} as MetaA,
}
export const metaItems: { [key in keyof Required<Items>]: MetaI | string } = {
  fulfillmentStatus: {meta:'builtin', type:'string', original:'string'} as MetaB,
  orderId: {meta:'builtin', type:'string', original:'string'} as MetaB,
  serviceType: {meta:'builtin', type:'string', original:'string'} as MetaB,
  shipmentNumber: {meta:'array', type:{meta:'builtin', type:'string', original:'string'} as MetaB} as MetaA,
}
export const metaDeleteStatus: { [key in keyof Required<DeleteStatus>]: MetaI | string } = {
  deleteStatus: {meta:'builtin', type:'string', original:'string'} as MetaB,
  error: {meta:'object', type:'.io.restorecommerce.fulfillment.Error', name:'Error'} as MetaO,
}
export const metashipmentStatus: { [key in keyof Required<shipmentStatus>]: MetaI | string } = {
  ShipmentData: {meta:'array', type:{meta:'object', type:'.io.restorecommerce.fulfillment.ShipmentData', name:'ShipmentData'} as MetaO} as MetaA,
}
export const metaShipmentData: { [key in keyof Required<ShipmentData>]: MetaI | string } = {
  ShipmentNumber: {meta:'builtin', type:'string', original:'string'} as MetaB,
  Status: {meta:'builtin', type:'string', original:'string'} as MetaB,
  ShortStatus: {meta:'builtin', type:'string', original:'string'} as MetaB,
  TimeStamp: {meta:'builtin', type:'string', original:'string'} as MetaB,
  Receiver: {meta:'builtin', type:'string', original:'string'} as MetaB,
  ReceipientName: {meta:'builtin', type:'string', original:'string'} as MetaB,
  Recepientemail: {meta:'builtin', type:'string', original:'string'} as MetaB,
  EventDetails: {meta:'array', type:{meta:'object', type:'.io.restorecommerce.fulfillment.EventDetails', name:'EventDetails'} as MetaO} as MetaA,
  CustomerReference: {meta:'builtin', type:'string', original:'string'} as MetaB,
}
export const metaEventDetails: { [key in keyof Required<EventDetails>]: MetaI | string } = {
  Status: {meta:'builtin', type:'string', original:'string'} as MetaB,
  Location: {meta:'builtin', type:'string', original:'string'} as MetaB,
  Time: {meta:'builtin', type:'string', original:'string'} as MetaB,
  Coutnry: {meta:'builtin', type:'string', original:'string'} as MetaB,
}
export const metaLabelResult: { [key in keyof Required<LabelResult>]: MetaI | string } = {
  labels: {meta:'array', type:{meta:'object', type:'.io.restorecommerce.fulfillment.Labels', name:'Labels'} as MetaO} as MetaA,
  error: {meta:'object', type:'.io.restorecommerce.fulfillment.Error', name:'Error'} as MetaO,
}
export const metaLabels: { [key in keyof Required<Labels>]: MetaI | string } = {
  labelUrl: {meta:'builtin', type:'string', original:'string'} as MetaB,
  shipmentNumber: {meta:'builtin', type:'string', original:'string'} as MetaB,
  exportLabelUrl: {meta:'builtin', type:'string', original:'string'} as MetaB,
}
export const metashipmentOrderLists: { [key in keyof Required<shipmentOrderLists>]: MetaI | string } = {
  ShipmentOrder: {meta:'object', type:'.io.restorecommerce.fulfillment.ShipmentOrder', name:'ShipmentOrder'} as MetaO,
  subject: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.Subject', name:'Subject'} as MetaO]} as MetaU,
  apiKey: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.ApiKey', name:'ApiKey'} as MetaO]} as MetaU,
}
export const metaShipmentOrder: { [key in keyof Required<ShipmentOrder>]: MetaI | string } = {
  fulfillmentList: {meta:'array', type:{meta:'object', type:'.io.restorecommerce.fulfillment.FulfillmentList', name:'FulfillmentList'} as MetaO} as MetaA,
  meta: {meta:'object', type:'.io.restorecommerce.meta.Meta', name:'Meta'} as MetaO,
}
export const metaFulfillmentList: { [key in keyof Required<FulfillmentList>]: MetaI | string } = {
  Shipment: {meta:'object', type:'.io.restorecommerce.fulfillment.Shipment', name:'Shipment'} as MetaO,
  OrderId: {meta:'builtin', type:'string', original:'string'} as MetaB,
  fulFillmentService: {meta:'builtin', type:'string', original:'string'} as MetaB,
}
export const metaShipment: { [key in keyof Required<Shipment>]: MetaI | string } = {
  ShipmentDetails: {meta:'array', type:{meta:'object', type:'.io.restorecommerce.fulfillment.ShipmentDetails', name:'ShipmentDetails'} as MetaO} as MetaA,
  customerReference: {meta:'builtin', type:'string', original:'string'} as MetaB,
  Receiver: {meta:'object', type:'.io.restorecommerce.fulfillment.Receiver', name:'Receiver'} as MetaO,
  Shipper: {meta:'object', type:'.io.restorecommerce.fulfillment.Shipper', name:'Shipper'} as MetaO,
  returnShipmentAccountNumber: {meta:'builtin', type:'string', original:'string'} as MetaB,
  returnShipmentReference: {meta:'builtin', type:'string', original:'string'} as MetaB,
  Notification: {meta:'object', type:'.io.restorecommerce.fulfillment.Notification', name:'Notification'} as MetaO,
}
export const metaShipmentDetails: { [key in keyof Required<ShipmentDetails>]: MetaI | string } = {
  ShipmentItem: {meta:'object', type:'.io.restorecommerce.fulfillment.ShipmentItem', name:'ShipmentItem'} as MetaO,
}
export const metaShipmentItem: { [key in keyof Required<ShipmentItem>]: MetaI | string } = {
  weightInKG: {meta:'builtin', type:'number', original:'double'} as MetaB,
  lengthInCM: {meta:'builtin', type:'string', original:'string'} as MetaB,
  widthInCM: {meta:'builtin', type:'string', original:'string'} as MetaB,
  heightInCM: {meta:'builtin', type:'string', original:'string'} as MetaB,
  ExportDocument: {meta:'object', type:'.io.restorecommerce.fulfillment.ExportDocument', name:'ExportDocument'} as MetaO,
}
export const metaNotification: { [key in keyof Required<Notification>]: MetaI | string } = {
  recipientEmailAddress: {meta:'builtin', type:'string', original:'string'} as MetaB,
}
export const metaAddress: { [key in keyof Required<Address>]: MetaI | string } = {
  streetName: {meta:'builtin', type:'string', original:'string'} as MetaB,
  streetNumber: {meta:'builtin', type:'string', original:'string'} as MetaB,
  addressAddition: {meta:'builtin', type:'string', original:'string'} as MetaB,
  zip: {meta:'builtin', type:'string', original:'string'} as MetaB,
  city: {meta:'builtin', type:'string', original:'string'} as MetaB,
  Origin: {meta:'object', type:'.io.restorecommerce.fulfillment.Origin', name:'Origin'} as MetaO,
}
export const metaOrigin: { [key in keyof Required<Origin>]: MetaI | string } = {
  country: {meta:'builtin', type:'string', original:'string'} as MetaB,
  countryISOCode: {meta:'builtin', type:'string', original:'string'} as MetaB,
}
export const metaShipper: { [key in keyof Required<Shipper>]: MetaI | string } = {
  Name: {meta:'object', type:'.io.restorecommerce.fulfillment.Name', name:'Name'} as MetaO,
  Address: {meta:'object', type:'.io.restorecommerce.fulfillment.Address', name:'Address'} as MetaO,
  Communication: {meta:'object', type:'.io.restorecommerce.fulfillment.Communication', name:'Communication'} as MetaO,
}
export const metaName: { [key in keyof Required<Name>]: MetaI | string } = {
  name1: {meta:'builtin', type:'string', original:'string'} as MetaB,
}
export const metaReceiver: { [key in keyof Required<Receiver>]: MetaI | string } = {
  name1: {meta:'builtin', type:'string', original:'string'} as MetaB,
  Address: {meta:'object', type:'.io.restorecommerce.fulfillment.Address', name:'Address'} as MetaO,
  Communication: {meta:'object', type:'.io.restorecommerce.fulfillment.Communication', name:'Communication'} as MetaO,
}
export const metaCommunication: { [key in keyof Required<Communication>]: MetaI | string } = {
  phone: {meta:'builtin', type:'string', original:'string'} as MetaB,
  email: {meta:'builtin', type:'string', original:'string'} as MetaB,
}
export const metaExportDocument: { [key in keyof Required<ExportDocument>]: MetaI | string } = {
  invoiceNumber: {meta:'builtin', type:'string', original:'string'} as MetaB,
  exportType: {meta:'builtin', type:'string', original:'string'} as MetaB,
  exportTypeDescription: {meta:'builtin', type:'string', original:'string'} as MetaB,
  termsOfTrade: {meta:'builtin', type:'string', original:'string'} as MetaB,
  placeOfCommital: {meta:'builtin', type:'string', original:'string'} as MetaB,
  additionalFee: {meta:'builtin', type:'number', original:'double'} as MetaB,
  ExportDocPosition: {meta:'object', type:'.io.restorecommerce.fulfillment.ExportDocPosition', name:'ExportDocPosition'} as MetaO,
}
export const metaExportDocPosition: { [key in keyof Required<ExportDocPosition>]: MetaI | string } = {
  description: {meta:'builtin', type:'string', original:'string'} as MetaB,
  countryCodeOrigin: {meta:'builtin', type:'string', original:'string'} as MetaB,
  customsTariffNumber: {meta:'builtin', type:'string', original:'string'} as MetaB,
  amount: {meta:'builtin', type:'number', original:'uint32'} as MetaB,
  netWeightInKG: {meta:'builtin', type:'number', original:'uint32'} as MetaB,
  customsValue: {meta:'builtin', type:'number', original:'double'} as MetaB,
}
export const metaFulfillmentResults: { [key in keyof Required<FulfillmentResults>]: MetaI | string } = {
  fulfillmentResults: {meta:'array', type:{meta:'object', type:'.io.restorecommerce.fulfillment.ResponseDetailsList', name:'ResponseDetailsList'} as MetaO} as MetaA,
}
export const metaResponseDetailsList: { [key in keyof Required<ResponseDetailsList>]: MetaI | string } = {
  Status: {meta:'object', type:'.io.restorecommerce.fulfillment.FulfillmentStatus', name:'FulfillmentStatus'} as MetaO,
  error: {meta:'object', type:'.io.restorecommerce.fulfillment.ErrorList', name:'ErrorList'} as MetaO,
}
export const metaFulfillmentStatus: { [key in keyof Required<FulfillmentStatus>]: MetaI | string } = {
  OrderId: {meta:'builtin', type:'string', original:'string'} as MetaB,
  OrderStatus: {meta:'builtin', type:'string', original:'string'} as MetaB,
  subject: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.Subject', name:'Subject'} as MetaO]} as MetaU,
  apiKey: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.ApiKey', name:'ApiKey'} as MetaO]} as MetaU,
}
export const metaError: { [key in keyof Required<Error>]: MetaI | string } = {
  code: {meta:'builtin', type:'string', original:'string'} as MetaB,
  message: {meta:'builtin', type:'string', original:'string'} as MetaB,
}
export const metaErrorList: { [key in keyof Required<ErrorList>]: MetaI | string } = {
  code: {meta:'array', type:{meta:'builtin', type:'string', original:'string'} as MetaB} as MetaA,
  message: {meta:'array', type:{meta:'builtin', type:'string', original:'string'} as MetaB} as MetaA,
}
export const metaService: { [key in keyof Service]: MetaS<any, any> } = {
  CreateFulfillment: {request: {meta:'object', type:'.io.restorecommerce.fulfillment.shipmentOrderLists', name:'shipmentOrderLists'} as MetaO, response: {meta:'object', type:'.io.restorecommerce.fulfillment.FulfillmentResults', name:'FulfillmentResults'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: shipmentOrderLists.encode, decodeResponse: FulfillmentResults.decode} as MetaS<shipmentOrderLists, FulfillmentResults>,
  getLabels: {request: {meta:'object', type:'.io.restorecommerce.fulfillment.OrderId', name:'OrderId'} as MetaO, response: {meta:'object', type:'.io.restorecommerce.fulfillment.LabelResult', name:'LabelResult'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: OrderId.encode, decodeResponse: LabelResult.decode} as MetaS<OrderId, LabelResult>,
  trackFulfillment: {request: {meta:'object', type:'.io.restorecommerce.fulfillment.TrackingNumber', name:'TrackingNumber'} as MetaO, response: {meta:'object', type:'.io.restorecommerce.fulfillment.Status', name:'Status'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: TrackingNumber.encode, decodeResponse: Status.decode} as MetaS<TrackingNumber, Status>,
  deleteFulfillment: {request: {meta:'object', type:'.io.restorecommerce.fulfillment.OrderId', name:'OrderId'} as MetaO, response: {meta:'object', type:'.io.restorecommerce.fulfillment.DeleteStatus', name:'DeleteStatus'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: OrderId.encode, decodeResponse: DeleteStatus.decode} as MetaS<OrderId, DeleteStatus>,
  getAllFulfillments: {request: {meta:'object', type:'.io.restorecommerce.fulfillment.FulfillmentStatus', name:'FulfillmentStatus'} as MetaO, response: {meta:'object', type:'.io.restorecommerce.fulfillment.AllFulfillments', name:'AllFulfillments'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: FulfillmentStatus.encode, decodeResponse: AllFulfillments.decode} as MetaS<FulfillmentStatus, AllFulfillments>,
}
export const metaPackageIoRestorecommerceFulfillment: { [key: string]: ['service', string, any, { [key: string]: MetaS<any, any> }] | ['enum', string, any, any] | ['message', string, any, { [key: string]: MetaI | string }] } = {
  OrderId: ['message', '.io.restorecommerce.fulfillment.OrderId', OrderId, metaOrderId],
  TrackingNumber: ['message', '.io.restorecommerce.fulfillment.TrackingNumber', TrackingNumber, metaTrackingNumber],
  Status: ['message', '.io.restorecommerce.fulfillment.Status', Status, metaStatus],
  AllFulfillments: ['message', '.io.restorecommerce.fulfillment.AllFulfillments', AllFulfillments, metaAllFulfillments],
  Items: ['message', '.io.restorecommerce.fulfillment.Items', Items, metaItems],
  DeleteStatus: ['message', '.io.restorecommerce.fulfillment.DeleteStatus', DeleteStatus, metaDeleteStatus],
  shipmentStatus: ['message', '.io.restorecommerce.fulfillment.shipmentStatus', shipmentStatus, metashipmentStatus],
  ShipmentData: ['message', '.io.restorecommerce.fulfillment.ShipmentData', ShipmentData, metaShipmentData],
  EventDetails: ['message', '.io.restorecommerce.fulfillment.EventDetails', EventDetails, metaEventDetails],
  LabelResult: ['message', '.io.restorecommerce.fulfillment.LabelResult', LabelResult, metaLabelResult],
  Labels: ['message', '.io.restorecommerce.fulfillment.Labels', Labels, metaLabels],
  shipmentOrderLists: ['message', '.io.restorecommerce.fulfillment.shipmentOrderLists', shipmentOrderLists, metashipmentOrderLists],
  ShipmentOrder: ['message', '.io.restorecommerce.fulfillment.ShipmentOrder', ShipmentOrder, metaShipmentOrder],
  FulfillmentList: ['message', '.io.restorecommerce.fulfillment.FulfillmentList', FulfillmentList, metaFulfillmentList],
  Shipment: ['message', '.io.restorecommerce.fulfillment.Shipment', Shipment, metaShipment],
  ShipmentDetails: ['message', '.io.restorecommerce.fulfillment.ShipmentDetails', ShipmentDetails, metaShipmentDetails],
  ShipmentItem: ['message', '.io.restorecommerce.fulfillment.ShipmentItem', ShipmentItem, metaShipmentItem],
  Notification: ['message', '.io.restorecommerce.fulfillment.Notification', Notification, metaNotification],
  Address: ['message', '.io.restorecommerce.fulfillment.Address', Address, metaAddress],
  Origin: ['message', '.io.restorecommerce.fulfillment.Origin', Origin, metaOrigin],
  Shipper: ['message', '.io.restorecommerce.fulfillment.Shipper', Shipper, metaShipper],
  Name: ['message', '.io.restorecommerce.fulfillment.Name', Name, metaName],
  Receiver: ['message', '.io.restorecommerce.fulfillment.Receiver', Receiver, metaReceiver],
  Communication: ['message', '.io.restorecommerce.fulfillment.Communication', Communication, metaCommunication],
  ExportDocument: ['message', '.io.restorecommerce.fulfillment.ExportDocument', ExportDocument, metaExportDocument],
  ExportDocPosition: ['message', '.io.restorecommerce.fulfillment.ExportDocPosition', ExportDocPosition, metaExportDocPosition],
  FulfillmentResults: ['message', '.io.restorecommerce.fulfillment.FulfillmentResults', FulfillmentResults, metaFulfillmentResults],
  ResponseDetailsList: ['message', '.io.restorecommerce.fulfillment.ResponseDetailsList', ResponseDetailsList, metaResponseDetailsList],
  FulfillmentStatus: ['message', '.io.restorecommerce.fulfillment.FulfillmentStatus', FulfillmentStatus, metaFulfillmentStatus],
  Error: ['message', '.io.restorecommerce.fulfillment.Error', Error, metaError],
  ErrorList: ['message', '.io.restorecommerce.fulfillment.ErrorList', ErrorList, metaErrorList],
  Service: ['service', '.io.restorecommerce.fulfillment.Service', undefined, metaService],
}
type Builtin = Date | Function | Uint8Array | string | number | undefined;
type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;