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
};
