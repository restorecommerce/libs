/* eslint-disable */
import { Subject, ApiKey } from '../../io/restorecommerce/auth';
import { Meta } from '../../io/restorecommerce/meta';
import { ReadRequest, DeleteRequest } from '../../io/restorecommerce/resource_base';
import { Empty } from '../../google/protobuf/empty';
import { Writer, Reader } from 'protobufjs/minimal';


export interface OrderList {
  items: Order[];
  totalCount: number;
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
}

export interface Order {
  id: string;
  meta?: Meta;
  name: string;
  description: string;
  status: string;
  items: Items[];
  /**
   *  sum of all the quantity_price will be total_price
   */
  totalPrice: number;
  /**
   *  shipping address
   */
  shippingContactPointId: string;
  billingContactPointId: string;
  totalWeightInKg: number;
}

export interface Items {
  quantityPrice: number;
  item?: Item;
}

export interface Item {
  /**
   *  below identifier is id of product, variant or bundle
   */
  productVariantBundleId: string;
  productName: string;
  productDescription: string;
  manufacturerName: string;
  manufacturerDescription: string;
  prototypeName: string;
  prototypeDescription: string;
  quantity: number;
  vat: number;
  price: number;
  itemType: string;
  taricCode: number;
  stockKeepingUnit: string;
  weightInKg: number;
  lengthInCm: number;
  widthInCm: number;
  heightInCm: number;
}

export interface Deleted {
  id: string;
}

export interface OrderDataList {
  orderData: OrderData[];
  meta?: Meta;
}

export interface OrderData {
  orderId: string;
  shipments: Shipments[];
}

export interface Shipments {
  totalWeightInKg: number;
  /**
   *  below properties are used for international packaging
   */
  individualWeightInKg: number;
  /**
   *  number of items
   */
  amount: number;
  exportType: string;
  exportDescription: string;
  customsTariffNumber: string;
  invoiceNumber: string;
  customsValue: number;
}

export interface FulfillmentResults {
  fulfillmentResults: ResponseDetailsList[];
}

export interface ResponseDetailsList {
  Status?: OrderStatus;
  error?: ErrorList;
}

export interface OrderStatus {
  OrderId: string;
  OrderStatus: string;
}

export interface ErrorList {
  code: string[];
  message: string[];
}

const baseOrderList: object = {
  totalCount: 0,
};

const baseOrder: object = {
  id: "",
  name: "",
  description: "",
  status: "",
  totalPrice: 0,
  shippingContactPointId: "",
  billingContactPointId: "",
  totalWeightInKg: 0,
};

const baseItems: object = {
  quantityPrice: 0,
};

const baseItem: object = {
  productVariantBundleId: "",
  productName: "",
  productDescription: "",
  manufacturerName: "",
  manufacturerDescription: "",
  prototypeName: "",
  prototypeDescription: "",
  quantity: 0,
  vat: 0,
  price: 0,
  itemType: "",
  taricCode: 0,
  stockKeepingUnit: "",
  weightInKg: 0,
  lengthInCm: 0,
  widthInCm: 0,
  heightInCm: 0,
};

const baseDeleted: object = {
  id: "",
};

const baseOrderDataList: object = {
};

const baseOrderData: object = {
  orderId: "",
};

const baseShipments: object = {
  totalWeightInKg: 0,
  individualWeightInKg: 0,
  amount: 0,
  exportType: "",
  exportDescription: "",
  customsTariffNumber: "",
  invoiceNumber: "",
  customsValue: 0,
};

const baseFulfillmentResults: object = {
};

const baseResponseDetailsList: object = {
};

const baseOrderStatus: object = {
  OrderId: "",
  OrderStatus: "",
};

const baseErrorList: object = {
  code: "",
  message: "",
};

export interface Service {

  Read(request: ReadRequest): Promise<OrderList>;

  Create(request: OrderList): Promise<OrderList>;

  Delete(request: DeleteRequest): Promise<Empty>;

  Update(request: OrderList): Promise<OrderList>;

  Upsert(request: OrderList): Promise<OrderList>;

  TriggerFulfillment(request: OrderDataList): Promise<FulfillmentResults>;

}

export const OrderList = {
  encode(message: OrderList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(16).uint32(message.totalCount);
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): OrderList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOrderList } as OrderList;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Order.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalCount = reader.uint32();
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

export const Order = {
  encode(message: Order, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    if (message.meta !== undefined && message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.name);
    writer.uint32(34).string(message.description);
    writer.uint32(42).string(message.status);
    for (const v of message.items) {
      Items.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    writer.uint32(57).double(message.totalPrice);
    writer.uint32(66).string(message.shippingContactPointId);
    writer.uint32(74).string(message.billingContactPointId);
    writer.uint32(81).double(message.totalWeightInKg);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Order {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOrder } as Order;
    message.items = [];
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
          message.status = reader.string();
          break;
        case 6:
          message.items.push(Items.decode(reader, reader.uint32()));
          break;
        case 7:
          message.totalPrice = reader.double();
          break;
        case 8:
          message.shippingContactPointId = reader.string();
          break;
        case 9:
          message.billingContactPointId = reader.string();
          break;
        case 10:
          message.totalWeightInKg = reader.double();
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
    writer.uint32(9).double(message.quantityPrice);
    if (message.item !== undefined && message.item !== undefined) {
      Item.encode(message.item, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Items {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseItems } as Items;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quantityPrice = reader.double();
          break;
        case 2:
          message.item = Item.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const Item = {
  encode(message: Item, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.productVariantBundleId);
    writer.uint32(18).string(message.productName);
    writer.uint32(26).string(message.productDescription);
    writer.uint32(34).string(message.manufacturerName);
    writer.uint32(42).string(message.manufacturerDescription);
    writer.uint32(50).string(message.prototypeName);
    writer.uint32(58).string(message.prototypeDescription);
    writer.uint32(64).int32(message.quantity);
    writer.uint32(72).int32(message.vat);
    writer.uint32(81).double(message.price);
    writer.uint32(90).string(message.itemType);
    writer.uint32(97).double(message.taricCode);
    writer.uint32(106).string(message.stockKeepingUnit);
    writer.uint32(113).double(message.weightInKg);
    writer.uint32(120).int32(message.lengthInCm);
    writer.uint32(128).int32(message.widthInCm);
    writer.uint32(136).int32(message.heightInCm);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Item {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseItem } as Item;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.productVariantBundleId = reader.string();
          break;
        case 2:
          message.productName = reader.string();
          break;
        case 3:
          message.productDescription = reader.string();
          break;
        case 4:
          message.manufacturerName = reader.string();
          break;
        case 5:
          message.manufacturerDescription = reader.string();
          break;
        case 6:
          message.prototypeName = reader.string();
          break;
        case 7:
          message.prototypeDescription = reader.string();
          break;
        case 8:
          message.quantity = reader.int32();
          break;
        case 9:
          message.vat = reader.int32();
          break;
        case 10:
          message.price = reader.double();
          break;
        case 11:
          message.itemType = reader.string();
          break;
        case 12:
          message.taricCode = reader.double();
          break;
        case 13:
          message.stockKeepingUnit = reader.string();
          break;
        case 14:
          message.weightInKg = reader.double();
          break;
        case 15:
          message.lengthInCm = reader.int32();
          break;
        case 16:
          message.widthInCm = reader.int32();
          break;
        case 17:
          message.heightInCm = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const Deleted = {
  encode(message: Deleted, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Deleted {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleted } as Deleted;
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
};

export const OrderDataList = {
  encode(message: OrderDataList, writer: Writer = Writer.create()): Writer {
    for (const v of message.orderData) {
      OrderData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.meta !== undefined && message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): OrderDataList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOrderDataList } as OrderDataList;
    message.orderData = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderData.push(OrderData.decode(reader, reader.uint32()));
          break;
        case 2:
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

export const OrderData = {
  encode(message: OrderData, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.orderId);
    for (const v of message.shipments) {
      Shipments.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): OrderData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOrderData } as OrderData;
    message.shipments = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = reader.string();
          break;
        case 2:
          message.shipments.push(Shipments.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const Shipments = {
  encode(message: Shipments, writer: Writer = Writer.create()): Writer {
    writer.uint32(9).double(message.totalWeightInKg);
    writer.uint32(17).double(message.individualWeightInKg);
    writer.uint32(24).int32(message.amount);
    writer.uint32(34).string(message.exportType);
    writer.uint32(42).string(message.exportDescription);
    writer.uint32(50).string(message.customsTariffNumber);
    writer.uint32(58).string(message.invoiceNumber);
    writer.uint32(65).double(message.customsValue);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Shipments {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseShipments } as Shipments;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalWeightInKg = reader.double();
          break;
        case 2:
          message.individualWeightInKg = reader.double();
          break;
        case 3:
          message.amount = reader.int32();
          break;
        case 4:
          message.exportType = reader.string();
          break;
        case 5:
          message.exportDescription = reader.string();
          break;
        case 6:
          message.customsTariffNumber = reader.string();
          break;
        case 7:
          message.invoiceNumber = reader.string();
          break;
        case 8:
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
      OrderStatus.encode(message.Status, writer.uint32(10).fork()).ldelim();
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
          message.Status = OrderStatus.decode(reader, reader.uint32());
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

export const OrderStatus = {
  encode(message: OrderStatus, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.OrderId);
    writer.uint32(18).string(message.OrderStatus);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): OrderStatus {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOrderStatus } as OrderStatus;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.OrderId = reader.string();
          break;
        case 2:
          message.OrderStatus = reader.string();
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
