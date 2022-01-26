/* eslint-disable */
import { FileDescriptorProto } from "ts-proto-descriptors/google/protobuf/descriptor";
import {
  Country,
  protoMetadata as protoMetadata7,
} from "../../io/restorecommerce/country";
import {
  Status,
  OperationStatus,
  protoMetadata as protoMetadata4,
} from "../../io/restorecommerce/status";
import {
  Meta,
  protoMetadata as protoMetadata5,
} from "../../io/restorecommerce/meta";
import {
  Subject,
  protoMetadata as protoMetadata3,
} from "../../io/restorecommerce/auth";
import {
  Any,
  protoMetadata as protoMetadata1,
} from "../../google/protobuf/any";
import {
  protoMetadata as protoMetadata2,
  DeleteResponse,
  ReadRequest,
  DeleteRequest,
} from "../../io/restorecommerce/resource_base";
import {
  protoMetadata as protoMetadata6,
  Address as Address8,
} from "../../io/restorecommerce/address";
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "io.restorecommerce.fulfillment";

export enum State {
  Undefined = 0,
  Invalid = 1,
  Ordered = 2,
  Shipping = 3,
  Done = 4,
  Cancelled = 5,
  Failed = 6,
  UNRECOGNIZED = -1,
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
    default:
      return "UNKNOWN";
  }
}

export interface Contact {
  name: string;
  email: string;
  phone: string;
}

export interface Branch {
  provider: string;
  branchNumber: string;
  postNumber: string;
}

export interface Packstation {
  provider: string;
  stationNumber: string;
  postNumber: string;
}

export interface Address {
  title: string;
  name: string[];
  address?: Address8 | undefined;
  packstation?: Packstation | undefined;
  branch?: Branch | undefined;
  country?: Country;
  contact?: Contact;
}

export interface Parcel {
  productId: string;
  productVariantId: string;
  items: Parcel_Item[];
  weightInKg: number;
  heightInCm: number;
  widthInCm: number;
  lengthInCm: number;
}

export interface Parcel_Item {
  itemId: string;
  quantity: number;
}

export interface Order {
  referenceId: string;
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
  shipmentNumber: string;
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
  totalCount: number;
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
  totalCount: number;
  operationStatus?: OperationStatus;
}

export interface TrackingRequest {
  fulfillmentId: string;
  /** optional */
  shipmentNumbers: string[];
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
  shipmentNumber: string;
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
  operationStatus?: OperationStatus;
}

export interface CancelRequestList {
  ids: string[];
  subject?: Subject;
}

export interface Deleted {
  id: string;
}

const baseContact: object = { name: "", email: "", phone: "" };

export const Contact = {
  encode(message: Contact, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): Contact {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseContact) as Contact;
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
    const message = globalThis.Object.create(baseContact) as Contact;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = String(object.email);
    } else {
      message.email = "";
    }
    if (object.phone !== undefined && object.phone !== null) {
      message.phone = String(object.phone);
    } else {
      message.phone = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<Contact>): Contact {
    const message = { ...baseContact } as Contact;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = "";
    }
    if (object.phone !== undefined && object.phone !== null) {
      message.phone = object.phone;
    } else {
      message.phone = "";
    }
    return message;
  },

  toJSON(message: Contact): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.email !== undefined && (obj.email = message.email);
    message.phone !== undefined && (obj.phone = message.phone);
    return obj;
  },
};

const baseBranch: object = { provider: "", branchNumber: "", postNumber: "" };

export const Branch = {
  encode(message: Branch, writer: Writer = Writer.create()): Writer {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.branchNumber !== "") {
      writer.uint32(18).string(message.branchNumber);
    }
    if (message.postNumber !== "") {
      writer.uint32(26).string(message.postNumber);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Branch {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseBranch) as Branch;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider = reader.string();
          break;
        case 2:
          message.branchNumber = reader.string();
          break;
        case 3:
          message.postNumber = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Branch {
    const message = globalThis.Object.create(baseBranch) as Branch;
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = String(object.provider);
    } else {
      message.provider = "";
    }
    if (object.branchNumber !== undefined && object.branchNumber !== null) {
      message.branchNumber = String(object.branchNumber);
    } else {
      message.branchNumber = "";
    }
    if (object.postNumber !== undefined && object.postNumber !== null) {
      message.postNumber = String(object.postNumber);
    } else {
      message.postNumber = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<Branch>): Branch {
    const message = { ...baseBranch } as Branch;
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    } else {
      message.provider = "";
    }
    if (object.branchNumber !== undefined && object.branchNumber !== null) {
      message.branchNumber = object.branchNumber;
    } else {
      message.branchNumber = "";
    }
    if (object.postNumber !== undefined && object.postNumber !== null) {
      message.postNumber = object.postNumber;
    } else {
      message.postNumber = "";
    }
    return message;
  },

  toJSON(message: Branch): unknown {
    const obj: any = {};
    message.provider !== undefined && (obj.provider = message.provider);
    message.branchNumber !== undefined &&
      (obj.branchNumber = message.branchNumber);
    message.postNumber !== undefined && (obj.postNumber = message.postNumber);
    return obj;
  },
};

const basePackstation: object = {
  provider: "",
  stationNumber: "",
  postNumber: "",
};

export const Packstation = {
  encode(message: Packstation, writer: Writer = Writer.create()): Writer {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.stationNumber !== "") {
      writer.uint32(18).string(message.stationNumber);
    }
    if (message.postNumber !== "") {
      writer.uint32(26).string(message.postNumber);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Packstation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(basePackstation) as Packstation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider = reader.string();
          break;
        case 2:
          message.stationNumber = reader.string();
          break;
        case 3:
          message.postNumber = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Packstation {
    const message = globalThis.Object.create(basePackstation) as Packstation;
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = String(object.provider);
    } else {
      message.provider = "";
    }
    if (object.stationNumber !== undefined && object.stationNumber !== null) {
      message.stationNumber = String(object.stationNumber);
    } else {
      message.stationNumber = "";
    }
    if (object.postNumber !== undefined && object.postNumber !== null) {
      message.postNumber = String(object.postNumber);
    } else {
      message.postNumber = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<Packstation>): Packstation {
    const message = { ...basePackstation } as Packstation;
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    } else {
      message.provider = "";
    }
    if (object.stationNumber !== undefined && object.stationNumber !== null) {
      message.stationNumber = object.stationNumber;
    } else {
      message.stationNumber = "";
    }
    if (object.postNumber !== undefined && object.postNumber !== null) {
      message.postNumber = object.postNumber;
    } else {
      message.postNumber = "";
    }
    return message;
  },

  toJSON(message: Packstation): unknown {
    const obj: any = {};
    message.provider !== undefined && (obj.provider = message.provider);
    message.stationNumber !== undefined &&
      (obj.stationNumber = message.stationNumber);
    message.postNumber !== undefined && (obj.postNumber = message.postNumber);
    return obj;
  },
};

const baseAddress: object = { title: "", name: "" };

export const Address = {
  encode(message: Address, writer: Writer = Writer.create()): Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    for (const v of message.name) {
      writer.uint32(18).string(v!);
    }
    if (message.address !== undefined) {
      Address8.encode(message.address, writer.uint32(26).fork()).ldelim();
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

  decode(input: Reader | Uint8Array, length?: number): Address {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseAddress) as Address;
    message.name = [];
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
          message.address = Address8.decode(reader, reader.uint32());
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
    const message = globalThis.Object.create(baseAddress) as Address;
    message.name = [];
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.name !== undefined && object.name !== null) {
      for (const e of object.name) {
        message.name.push(String(e));
      }
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = Address8.fromJSON(object.address);
    } else {
      message.address = undefined;
    }
    if (object.packstation !== undefined && object.packstation !== null) {
      message.packstation = Packstation.fromJSON(object.packstation);
    } else {
      message.packstation = undefined;
    }
    if (object.branch !== undefined && object.branch !== null) {
      message.branch = Branch.fromJSON(object.branch);
    } else {
      message.branch = undefined;
    }
    if (object.country !== undefined && object.country !== null) {
      message.country = Country.fromJSON(object.country);
    } else {
      message.country = undefined;
    }
    if (object.contact !== undefined && object.contact !== null) {
      message.contact = Contact.fromJSON(object.contact);
    } else {
      message.contact = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<Address>): Address {
    const message = { ...baseAddress } as Address;
    message.name = [];
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.name !== undefined && object.name !== null) {
      for (const e of object.name) {
        message.name.push(e);
      }
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = Address8.fromPartial(object.address);
    } else {
      message.address = undefined;
    }
    if (object.packstation !== undefined && object.packstation !== null) {
      message.packstation = Packstation.fromPartial(object.packstation);
    } else {
      message.packstation = undefined;
    }
    if (object.branch !== undefined && object.branch !== null) {
      message.branch = Branch.fromPartial(object.branch);
    } else {
      message.branch = undefined;
    }
    if (object.country !== undefined && object.country !== null) {
      message.country = Country.fromPartial(object.country);
    } else {
      message.country = undefined;
    }
    if (object.contact !== undefined && object.contact !== null) {
      message.contact = Contact.fromPartial(object.contact);
    } else {
      message.contact = undefined;
    }
    return message;
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
        ? Address8.toJSON(message.address)
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
};

const baseParcel: object = {
  productId: "",
  productVariantId: "",
  weightInKg: 0,
  heightInCm: 0,
  widthInCm: 0,
  lengthInCm: 0,
};

export const Parcel = {
  encode(message: Parcel, writer: Writer = Writer.create()): Writer {
    if (message.productId !== "") {
      writer.uint32(10).string(message.productId);
    }
    if (message.productVariantId !== "") {
      writer.uint32(18).string(message.productVariantId);
    }
    for (const v of message.items) {
      Parcel_Item.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.weightInKg !== 0) {
      writer.uint32(37).float(message.weightInKg);
    }
    if (message.heightInCm !== 0) {
      writer.uint32(45).float(message.heightInCm);
    }
    if (message.widthInCm !== 0) {
      writer.uint32(53).float(message.widthInCm);
    }
    if (message.lengthInCm !== 0) {
      writer.uint32(61).float(message.lengthInCm);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Parcel {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseParcel) as Parcel;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.productId = reader.string();
          break;
        case 2:
          message.productVariantId = reader.string();
          break;
        case 3:
          message.items.push(Parcel_Item.decode(reader, reader.uint32()));
          break;
        case 4:
          message.weightInKg = reader.float();
          break;
        case 5:
          message.heightInCm = reader.float();
          break;
        case 6:
          message.widthInCm = reader.float();
          break;
        case 7:
          message.lengthInCm = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Parcel {
    const message = globalThis.Object.create(baseParcel) as Parcel;
    message.items = [];
    if (object.productId !== undefined && object.productId !== null) {
      message.productId = String(object.productId);
    } else {
      message.productId = "";
    }
    if (
      object.productVariantId !== undefined &&
      object.productVariantId !== null
    ) {
      message.productVariantId = String(object.productVariantId);
    } else {
      message.productVariantId = "";
    }
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Parcel_Item.fromJSON(e));
      }
    }
    if (object.weightInKg !== undefined && object.weightInKg !== null) {
      message.weightInKg = Number(object.weightInKg);
    } else {
      message.weightInKg = 0;
    }
    if (object.heightInCm !== undefined && object.heightInCm !== null) {
      message.heightInCm = Number(object.heightInCm);
    } else {
      message.heightInCm = 0;
    }
    if (object.widthInCm !== undefined && object.widthInCm !== null) {
      message.widthInCm = Number(object.widthInCm);
    } else {
      message.widthInCm = 0;
    }
    if (object.lengthInCm !== undefined && object.lengthInCm !== null) {
      message.lengthInCm = Number(object.lengthInCm);
    } else {
      message.lengthInCm = 0;
    }
    return message;
  },

  fromPartial(object: DeepPartial<Parcel>): Parcel {
    const message = { ...baseParcel } as Parcel;
    message.items = [];
    if (object.productId !== undefined && object.productId !== null) {
      message.productId = object.productId;
    } else {
      message.productId = "";
    }
    if (
      object.productVariantId !== undefined &&
      object.productVariantId !== null
    ) {
      message.productVariantId = object.productVariantId;
    } else {
      message.productVariantId = "";
    }
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Parcel_Item.fromPartial(e));
      }
    }
    if (object.weightInKg !== undefined && object.weightInKg !== null) {
      message.weightInKg = object.weightInKg;
    } else {
      message.weightInKg = 0;
    }
    if (object.heightInCm !== undefined && object.heightInCm !== null) {
      message.heightInCm = object.heightInCm;
    } else {
      message.heightInCm = 0;
    }
    if (object.widthInCm !== undefined && object.widthInCm !== null) {
      message.widthInCm = object.widthInCm;
    } else {
      message.widthInCm = 0;
    }
    if (object.lengthInCm !== undefined && object.lengthInCm !== null) {
      message.lengthInCm = object.lengthInCm;
    } else {
      message.lengthInCm = 0;
    }
    return message;
  },

  toJSON(message: Parcel): unknown {
    const obj: any = {};
    message.productId !== undefined && (obj.productId = message.productId);
    message.productVariantId !== undefined &&
      (obj.productVariantId = message.productVariantId);
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? Parcel_Item.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.weightInKg !== undefined && (obj.weightInKg = message.weightInKg);
    message.heightInCm !== undefined && (obj.heightInCm = message.heightInCm);
    message.widthInCm !== undefined && (obj.widthInCm = message.widthInCm);
    message.lengthInCm !== undefined && (obj.lengthInCm = message.lengthInCm);
    return obj;
  },
};

const baseParcel_Item: object = { itemId: "", quantity: 0 };

export const Parcel_Item = {
  encode(message: Parcel_Item, writer: Writer = Writer.create()): Writer {
    if (message.itemId !== "") {
      writer.uint32(10).string(message.itemId);
    }
    if (message.quantity !== 0) {
      writer.uint32(16).int32(message.quantity);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Parcel_Item {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseParcel_Item) as Parcel_Item;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.itemId = reader.string();
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
    const message = globalThis.Object.create(baseParcel_Item) as Parcel_Item;
    if (object.itemId !== undefined && object.itemId !== null) {
      message.itemId = String(object.itemId);
    } else {
      message.itemId = "";
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = Number(object.quantity);
    } else {
      message.quantity = 0;
    }
    return message;
  },

  fromPartial(object: DeepPartial<Parcel_Item>): Parcel_Item {
    const message = { ...baseParcel_Item } as Parcel_Item;
    if (object.itemId !== undefined && object.itemId !== null) {
      message.itemId = object.itemId;
    } else {
      message.itemId = "";
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = object.quantity;
    } else {
      message.quantity = 0;
    }
    return message;
  },

  toJSON(message: Parcel_Item): unknown {
    const obj: any = {};
    message.itemId !== undefined && (obj.itemId = message.itemId);
    message.quantity !== undefined && (obj.quantity = message.quantity);
    return obj;
  },
};

const baseOrder: object = { referenceId: "", notify: "" };

export const Order = {
  encode(message: Order, writer: Writer = Writer.create()): Writer {
    if (message.referenceId !== "") {
      writer.uint32(10).string(message.referenceId);
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

  decode(input: Reader | Uint8Array, length?: number): Order {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseOrder) as Order;
    message.parcels = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.referenceId = reader.string();
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
    const message = globalThis.Object.create(baseOrder) as Order;
    message.parcels = [];
    if (object.referenceId !== undefined && object.referenceId !== null) {
      message.referenceId = String(object.referenceId);
    } else {
      message.referenceId = "";
    }
    if (object.parcels !== undefined && object.parcels !== null) {
      for (const e of object.parcels) {
        message.parcels.push(Parcel.fromJSON(e));
      }
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = Address.fromJSON(object.sender);
    } else {
      message.sender = undefined;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = Address.fromJSON(object.receiver);
    } else {
      message.receiver = undefined;
    }
    if (object.notify !== undefined && object.notify !== null) {
      message.notify = String(object.notify);
    } else {
      message.notify = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<Order>): Order {
    const message = { ...baseOrder } as Order;
    message.parcels = [];
    if (object.referenceId !== undefined && object.referenceId !== null) {
      message.referenceId = object.referenceId;
    } else {
      message.referenceId = "";
    }
    if (object.parcels !== undefined && object.parcels !== null) {
      for (const e of object.parcels) {
        message.parcels.push(Parcel.fromPartial(e));
      }
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = Address.fromPartial(object.sender);
    } else {
      message.sender = undefined;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = Address.fromPartial(object.receiver);
    } else {
      message.receiver = undefined;
    }
    if (object.notify !== undefined && object.notify !== null) {
      message.notify = object.notify;
    } else {
      message.notify = "";
    }
    return message;
  },

  toJSON(message: Order): unknown {
    const obj: any = {};
    message.referenceId !== undefined &&
      (obj.referenceId = message.referenceId);
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
};

const baseLabel: object = { shipmentNumber: "", state: 0 };

export const Label = {
  encode(message: Label, writer: Writer = Writer.create()): Writer {
    if (message.url !== undefined) {
      writer.uint32(10).string(message.url);
    }
    if (message.pdf !== undefined) {
      writer.uint32(18).string(message.pdf);
    }
    if (message.png !== undefined) {
      writer.uint32(26).string(message.png);
    }
    if (message.shipmentNumber !== "") {
      writer.uint32(34).string(message.shipmentNumber);
    }
    if (message.state !== 0) {
      writer.uint32(40).int32(message.state);
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Label {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseLabel) as Label;
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
          message.shipmentNumber = reader.string();
          break;
        case 5:
          message.state = reader.int32() as any;
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
    const message = globalThis.Object.create(baseLabel) as Label;
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = undefined;
    }
    if (object.pdf !== undefined && object.pdf !== null) {
      message.pdf = String(object.pdf);
    } else {
      message.pdf = undefined;
    }
    if (object.png !== undefined && object.png !== null) {
      message.png = String(object.png);
    } else {
      message.png = undefined;
    }
    if (object.shipmentNumber !== undefined && object.shipmentNumber !== null) {
      message.shipmentNumber = String(object.shipmentNumber);
    } else {
      message.shipmentNumber = "";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = stateFromJSON(object.state);
    } else {
      message.state = 0;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromJSON(object.status);
    } else {
      message.status = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<Label>): Label {
    const message = { ...baseLabel } as Label;
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = undefined;
    }
    if (object.pdf !== undefined && object.pdf !== null) {
      message.pdf = object.pdf;
    } else {
      message.pdf = undefined;
    }
    if (object.png !== undefined && object.png !== null) {
      message.png = object.png;
    } else {
      message.png = undefined;
    }
    if (object.shipmentNumber !== undefined && object.shipmentNumber !== null) {
      message.shipmentNumber = object.shipmentNumber;
    } else {
      message.shipmentNumber = "";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    } else {
      message.state = 0;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromPartial(object.status);
    } else {
      message.status = undefined;
    }
    return message;
  },

  toJSON(message: Label): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    message.pdf !== undefined && (obj.pdf = message.pdf);
    message.png !== undefined && (obj.png = message.png);
    message.shipmentNumber !== undefined &&
      (obj.shipmentNumber = message.shipmentNumber);
    message.state !== undefined && (obj.state = stateToJSON(message.state));
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },
};

const baseFulfillmentRequest: object = { id: "" };

export const FulfillmentRequest = {
  encode(
    message: FulfillmentRequest,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): FulfillmentRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseFulfillmentRequest
    ) as FulfillmentRequest;
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
    const message = globalThis.Object.create(
      baseFulfillmentRequest
    ) as FulfillmentRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.order !== undefined && object.order !== null) {
      message.order = Order.fromJSON(object.order);
    } else {
      message.order = undefined;
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromJSON(object.meta);
    } else {
      message.meta = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<FulfillmentRequest>): FulfillmentRequest {
    const message = { ...baseFulfillmentRequest } as FulfillmentRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.order !== undefined && object.order !== null) {
      message.order = Order.fromPartial(object.order);
    } else {
      message.order = undefined;
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromPartial(object.meta);
    } else {
      message.meta = undefined;
    }
    return message;
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
};

const baseFulfillmentRequestList: object = { totalCount: 0 };

export const FulfillmentRequestList = {
  encode(
    message: FulfillmentRequestList,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.items) {
      FulfillmentRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): FulfillmentRequestList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseFulfillmentRequestList
    ) as FulfillmentRequestList;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            FulfillmentRequest.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.totalCount = reader.uint32();
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
    const message = globalThis.Object.create(
      baseFulfillmentRequestList
    ) as FulfillmentRequestList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(FulfillmentRequest.fromJSON(e));
      }
    }
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = Number(object.totalCount);
    } else {
      message.totalCount = 0;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<FulfillmentRequestList>
  ): FulfillmentRequestList {
    const message = { ...baseFulfillmentRequestList } as FulfillmentRequestList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(FulfillmentRequest.fromPartial(e));
      }
    }
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = object.totalCount;
    } else {
      message.totalCount = 0;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
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
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseFulfillment: object = { id: "", fulfilled: false };

export const Fulfillment = {
  encode(message: Fulfillment, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): Fulfillment {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseFulfillment) as Fulfillment;
    message.labels = [];
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
    const message = globalThis.Object.create(baseFulfillment) as Fulfillment;
    message.labels = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.order !== undefined && object.order !== null) {
      message.order = Order.fromJSON(object.order);
    } else {
      message.order = undefined;
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromJSON(object.meta);
    } else {
      message.meta = undefined;
    }
    if (object.labels !== undefined && object.labels !== null) {
      for (const e of object.labels) {
        message.labels.push(Label.fromJSON(e));
      }
    }
    if (object.fulfilled !== undefined && object.fulfilled !== null) {
      message.fulfilled = Boolean(object.fulfilled);
    } else {
      message.fulfilled = false;
    }
    return message;
  },

  fromPartial(object: DeepPartial<Fulfillment>): Fulfillment {
    const message = { ...baseFulfillment } as Fulfillment;
    message.labels = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.order !== undefined && object.order !== null) {
      message.order = Order.fromPartial(object.order);
    } else {
      message.order = undefined;
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromPartial(object.meta);
    } else {
      message.meta = undefined;
    }
    if (object.labels !== undefined && object.labels !== null) {
      for (const e of object.labels) {
        message.labels.push(Label.fromPartial(e));
      }
    }
    if (object.fulfilled !== undefined && object.fulfilled !== null) {
      message.fulfilled = object.fulfilled;
    } else {
      message.fulfilled = false;
    }
    return message;
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
};

const baseFulfillmentResponse: object = {};

export const FulfillmentResponse = {
  encode(
    message: FulfillmentResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.payload !== undefined) {
      Fulfillment.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): FulfillmentResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseFulfillmentResponse
    ) as FulfillmentResponse;
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
    const message = globalThis.Object.create(
      baseFulfillmentResponse
    ) as FulfillmentResponse;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = Fulfillment.fromJSON(object.payload);
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

  fromPartial(object: DeepPartial<FulfillmentResponse>): FulfillmentResponse {
    const message = { ...baseFulfillmentResponse } as FulfillmentResponse;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = Fulfillment.fromPartial(object.payload);
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
};

const baseFulfillmentResponseList: object = { totalCount: 0 };

export const FulfillmentResponseList = {
  encode(
    message: FulfillmentResponseList,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.items) {
      FulfillmentResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.operationStatus !== undefined) {
      OperationStatus.encode(
        message.operationStatus,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): FulfillmentResponseList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseFulfillmentResponseList
    ) as FulfillmentResponseList;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            FulfillmentResponse.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.totalCount = reader.uint32();
          break;
        case 3:
          message.operationStatus = OperationStatus.decode(
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
    const message = globalThis.Object.create(
      baseFulfillmentResponseList
    ) as FulfillmentResponseList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(FulfillmentResponse.fromJSON(e));
      }
    }
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = Number(object.totalCount);
    } else {
      message.totalCount = 0;
    }
    if (
      object.operationStatus !== undefined &&
      object.operationStatus !== null
    ) {
      message.operationStatus = OperationStatus.fromJSON(
        object.operationStatus
      );
    } else {
      message.operationStatus = undefined;
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<FulfillmentResponseList>
  ): FulfillmentResponseList {
    const message = {
      ...baseFulfillmentResponseList,
    } as FulfillmentResponseList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(FulfillmentResponse.fromPartial(e));
      }
    }
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = object.totalCount;
    } else {
      message.totalCount = 0;
    }
    if (
      object.operationStatus !== undefined &&
      object.operationStatus !== null
    ) {
      message.operationStatus = OperationStatus.fromPartial(
        object.operationStatus
      );
    } else {
      message.operationStatus = undefined;
    }
    return message;
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
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus
        ? OperationStatus.toJSON(message.operationStatus)
        : undefined);
    return obj;
  },
};

const baseTrackingRequest: object = { fulfillmentId: "", shipmentNumbers: "" };

export const TrackingRequest = {
  encode(message: TrackingRequest, writer: Writer = Writer.create()): Writer {
    if (message.fulfillmentId !== "") {
      writer.uint32(10).string(message.fulfillmentId);
    }
    for (const v of message.shipmentNumbers) {
      writer.uint32(18).string(v!);
    }
    if (message.options !== undefined) {
      Any.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TrackingRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseTrackingRequest
    ) as TrackingRequest;
    message.shipmentNumbers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fulfillmentId = reader.string();
          break;
        case 2:
          message.shipmentNumbers.push(reader.string());
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
    const message = globalThis.Object.create(
      baseTrackingRequest
    ) as TrackingRequest;
    message.shipmentNumbers = [];
    if (object.fulfillmentId !== undefined && object.fulfillmentId !== null) {
      message.fulfillmentId = String(object.fulfillmentId);
    } else {
      message.fulfillmentId = "";
    }
    if (
      object.shipmentNumbers !== undefined &&
      object.shipmentNumbers !== null
    ) {
      for (const e of object.shipmentNumbers) {
        message.shipmentNumbers.push(String(e));
      }
    }
    if (object.options !== undefined && object.options !== null) {
      message.options = Any.fromJSON(object.options);
    } else {
      message.options = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<TrackingRequest>): TrackingRequest {
    const message = { ...baseTrackingRequest } as TrackingRequest;
    message.shipmentNumbers = [];
    if (object.fulfillmentId !== undefined && object.fulfillmentId !== null) {
      message.fulfillmentId = object.fulfillmentId;
    } else {
      message.fulfillmentId = "";
    }
    if (
      object.shipmentNumbers !== undefined &&
      object.shipmentNumbers !== null
    ) {
      for (const e of object.shipmentNumbers) {
        message.shipmentNumbers.push(e);
      }
    }
    if (object.options !== undefined && object.options !== null) {
      message.options = Any.fromPartial(object.options);
    } else {
      message.options = undefined;
    }
    return message;
  },

  toJSON(message: TrackingRequest): unknown {
    const obj: any = {};
    message.fulfillmentId !== undefined &&
      (obj.fulfillmentId = message.fulfillmentId);
    if (message.shipmentNumbers) {
      obj.shipmentNumbers = message.shipmentNumbers.map((e) => e);
    } else {
      obj.shipmentNumbers = [];
    }
    message.options !== undefined &&
      (obj.options = message.options ? Any.toJSON(message.options) : undefined);
    return obj;
  },
};

const baseTrackingRequestList: object = {};

export const TrackingRequestList = {
  encode(
    message: TrackingRequestList,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.items) {
      TrackingRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TrackingRequestList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseTrackingRequestList
    ) as TrackingRequestList;
    message.items = [];
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
    const message = globalThis.Object.create(
      baseTrackingRequestList
    ) as TrackingRequestList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(TrackingRequest.fromJSON(e));
      }
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<TrackingRequestList>): TrackingRequestList {
    const message = { ...baseTrackingRequestList } as TrackingRequestList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(TrackingRequest.fromPartial(e));
      }
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
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
};

const baseEvent: object = { timestamp: 0, location: "" };

export const Event = {
  encode(message: Event, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): Event {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseEvent) as Event;
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
    const message = globalThis.Object.create(baseEvent) as Event;
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Number(object.timestamp);
    } else {
      message.timestamp = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = String(object.location);
    } else {
      message.location = "";
    }
    if (object.details !== undefined && object.details !== null) {
      message.details = Any.fromJSON(object.details);
    } else {
      message.details = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromJSON(object.status);
    } else {
      message.status = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<Event>): Event {
    const message = { ...baseEvent } as Event;
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = object.location;
    } else {
      message.location = "";
    }
    if (object.details !== undefined && object.details !== null) {
      message.details = Any.fromPartial(object.details);
    } else {
      message.details = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromPartial(object.status);
    } else {
      message.status = undefined;
    }
    return message;
  },

  toJSON(message: Event): unknown {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.location !== undefined && (obj.location = message.location);
    message.details !== undefined &&
      (obj.details = message.details ? Any.toJSON(message.details) : undefined);
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },
};

const baseTracking: object = { shipmentNumber: "" };

export const Tracking = {
  encode(message: Tracking, writer: Writer = Writer.create()): Writer {
    if (message.shipmentNumber !== "") {
      writer.uint32(10).string(message.shipmentNumber);
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

  decode(input: Reader | Uint8Array, length?: number): Tracking {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseTracking) as Tracking;
    message.events = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.shipmentNumber = reader.string();
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
    const message = globalThis.Object.create(baseTracking) as Tracking;
    message.events = [];
    if (object.shipmentNumber !== undefined && object.shipmentNumber !== null) {
      message.shipmentNumber = String(object.shipmentNumber);
    } else {
      message.shipmentNumber = "";
    }
    if (object.events !== undefined && object.events !== null) {
      for (const e of object.events) {
        message.events.push(Event.fromJSON(e));
      }
    }
    if (object.details !== undefined && object.details !== null) {
      message.details = Any.fromJSON(object.details);
    } else {
      message.details = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromJSON(object.status);
    } else {
      message.status = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<Tracking>): Tracking {
    const message = { ...baseTracking } as Tracking;
    message.events = [];
    if (object.shipmentNumber !== undefined && object.shipmentNumber !== null) {
      message.shipmentNumber = object.shipmentNumber;
    } else {
      message.shipmentNumber = "";
    }
    if (object.events !== undefined && object.events !== null) {
      for (const e of object.events) {
        message.events.push(Event.fromPartial(e));
      }
    }
    if (object.details !== undefined && object.details !== null) {
      message.details = Any.fromPartial(object.details);
    } else {
      message.details = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromPartial(object.status);
    } else {
      message.status = undefined;
    }
    return message;
  },

  toJSON(message: Tracking): unknown {
    const obj: any = {};
    message.shipmentNumber !== undefined &&
      (obj.shipmentNumber = message.shipmentNumber);
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
};

const baseTrackingResult: object = {};

export const TrackingResult = {
  encode(message: TrackingResult, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): TrackingResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseTrackingResult
    ) as TrackingResult;
    message.tracks = [];
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
    const message = globalThis.Object.create(
      baseTrackingResult
    ) as TrackingResult;
    message.tracks = [];
    if (object.fulfillment !== undefined && object.fulfillment !== null) {
      message.fulfillment = Fulfillment.fromJSON(object.fulfillment);
    } else {
      message.fulfillment = undefined;
    }
    if (object.tracks !== undefined && object.tracks !== null) {
      for (const e of object.tracks) {
        message.tracks.push(Tracking.fromJSON(e));
      }
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromJSON(object.status);
    } else {
      message.status = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<TrackingResult>): TrackingResult {
    const message = { ...baseTrackingResult } as TrackingResult;
    message.tracks = [];
    if (object.fulfillment !== undefined && object.fulfillment !== null) {
      message.fulfillment = Fulfillment.fromPartial(object.fulfillment);
    } else {
      message.fulfillment = undefined;
    }
    if (object.tracks !== undefined && object.tracks !== null) {
      for (const e of object.tracks) {
        message.tracks.push(Tracking.fromPartial(e));
      }
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromPartial(object.status);
    } else {
      message.status = undefined;
    }
    return message;
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
};

const baseTrackingResultList: object = {};

export const TrackingResultList = {
  encode(
    message: TrackingResultList,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.items) {
      TrackingResult.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.operationStatus !== undefined) {
      OperationStatus.encode(
        message.operationStatus,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TrackingResultList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseTrackingResultList
    ) as TrackingResultList;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(TrackingResult.decode(reader, reader.uint32()));
          break;
        case 2:
          message.operationStatus = OperationStatus.decode(
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
    const message = globalThis.Object.create(
      baseTrackingResultList
    ) as TrackingResultList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(TrackingResult.fromJSON(e));
      }
    }
    if (
      object.operationStatus !== undefined &&
      object.operationStatus !== null
    ) {
      message.operationStatus = OperationStatus.fromJSON(
        object.operationStatus
      );
    } else {
      message.operationStatus = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<TrackingResultList>): TrackingResultList {
    const message = { ...baseTrackingResultList } as TrackingResultList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(TrackingResult.fromPartial(e));
      }
    }
    if (
      object.operationStatus !== undefined &&
      object.operationStatus !== null
    ) {
      message.operationStatus = OperationStatus.fromPartial(
        object.operationStatus
      );
    } else {
      message.operationStatus = undefined;
    }
    return message;
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
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus
        ? OperationStatus.toJSON(message.operationStatus)
        : undefined);
    return obj;
  },
};

const baseCancelRequestList: object = { ids: "" };

export const CancelRequestList = {
  encode(message: CancelRequestList, writer: Writer = Writer.create()): Writer {
    for (const v of message.ids) {
      writer.uint32(10).string(v!);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CancelRequestList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseCancelRequestList
    ) as CancelRequestList;
    message.ids = [];
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
    const message = globalThis.Object.create(
      baseCancelRequestList
    ) as CancelRequestList;
    message.ids = [];
    if (object.ids !== undefined && object.ids !== null) {
      for (const e of object.ids) {
        message.ids.push(String(e));
      }
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<CancelRequestList>): CancelRequestList {
    const message = { ...baseCancelRequestList } as CancelRequestList;
    message.ids = [];
    if (object.ids !== undefined && object.ids !== null) {
      for (const e of object.ids) {
        message.ids.push(e);
      }
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
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
};

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

/** Microservice definition. */
export interface Service {
  /** Returns a list of shipment IDs. */
  Read(request: ReadRequest): Promise<FulfillmentResponseList>;
  /** Creates and executes fulfillment orders */
  Create(request: FulfillmentRequestList): Promise<FulfillmentResponseList>;
  /** Track a batch of fulfillment orders */
  Track(request: TrackingRequestList): Promise<TrackingResultList>;
  /** Cancel a batch of fulfillment orders */
  Cancel(request: CancelRequestList): Promise<FulfillmentResponseList>;
  /** Delete a batch of fulfillments from the database */
  Delete(request: DeleteRequest): Promise<DeleteResponse>;
}

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto.fromPartial({
    dependency: [
      "google/protobuf/any.proto",
      "io/restorecommerce/resource_base.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/address.proto",
      "io/restorecommerce/country.proto",
    ],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        field: [
          { name: "name", number: 1, label: 1, type: 9, jsonName: "name" },
          { name: "email", number: 2, label: 1, type: 9, jsonName: "email" },
          { name: "phone", number: 3, label: 1, type: 9, jsonName: "phone" },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Contact",
      },
      {
        field: [
          {
            name: "provider",
            number: 1,
            label: 1,
            type: 9,
            jsonName: "provider",
          },
          {
            name: "branch_number",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "branchNumber",
          },
          {
            name: "post_number",
            number: 3,
            label: 1,
            type: 9,
            jsonName: "postNumber",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Branch",
      },
      {
        field: [
          {
            name: "provider",
            number: 1,
            label: 1,
            type: 9,
            jsonName: "provider",
          },
          {
            name: "station_number",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "stationNumber",
          },
          {
            name: "post_number",
            number: 3,
            label: 1,
            type: 9,
            jsonName: "postNumber",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Packstation",
      },
      {
        field: [
          { name: "title", number: 1, label: 1, type: 9, jsonName: "title" },
          { name: "name", number: 2, label: 3, type: 9, jsonName: "name" },
          {
            name: "address",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.address.Address",
            oneofIndex: 0,
            jsonName: "address",
          },
          {
            name: "packstation",
            number: 4,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Packstation",
            oneofIndex: 0,
            jsonName: "packstation",
          },
          {
            name: "branch",
            number: 5,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Branch",
            oneofIndex: 0,
            jsonName: "branch",
          },
          {
            name: "country",
            number: 6,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.country.Country",
            jsonName: "country",
          },
          {
            name: "contact",
            number: 7,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Contact",
            jsonName: "contact",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [{ name: "type" }],
        reservedRange: [],
        reservedName: [],
        name: "Address",
      },
      {
        field: [
          {
            name: "product_id",
            number: 1,
            label: 1,
            type: 9,
            jsonName: "productId",
          },
          {
            name: "product_variant_id",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "productVariantId",
          },
          {
            name: "items",
            number: 3,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Parcel.Item",
            jsonName: "items",
          },
          {
            name: "weight_in_kg",
            number: 4,
            label: 1,
            type: 2,
            jsonName: "weightInKg",
          },
          {
            name: "height_in_cm",
            number: 5,
            label: 1,
            type: 2,
            jsonName: "heightInCm",
          },
          {
            name: "width_in_cm",
            number: 6,
            label: 1,
            type: 2,
            jsonName: "widthInCm",
          },
          {
            name: "length_in_cm",
            number: 7,
            label: 1,
            type: 2,
            jsonName: "lengthInCm",
          },
        ],
        extension: [],
        nestedType: [
          {
            field: [
              {
                name: "item_id",
                number: 1,
                label: 1,
                type: 9,
                jsonName: "itemId",
              },
              {
                name: "quantity",
                number: 2,
                label: 1,
                type: 5,
                jsonName: "quantity",
              },
            ],
            extension: [],
            nestedType: [],
            enumType: [],
            extensionRange: [],
            oneofDecl: [],
            reservedRange: [],
            reservedName: [],
            name: "Item",
          },
        ],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Parcel",
      },
      {
        field: [
          {
            name: "reference_id",
            number: 1,
            label: 1,
            type: 9,
            jsonName: "referenceId",
          },
          {
            name: "parcels",
            number: 2,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Parcel",
            jsonName: "parcels",
          },
          {
            name: "sender",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Address",
            jsonName: "sender",
          },
          {
            name: "receiver",
            number: 4,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Address",
            jsonName: "receiver",
          },
          { name: "notify", number: 5, label: 1, type: 9, jsonName: "notify" },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Order",
      },
      {
        field: [
          {
            name: "url",
            number: 1,
            label: 1,
            type: 9,
            oneofIndex: 0,
            jsonName: "url",
          },
          {
            name: "pdf",
            number: 2,
            label: 1,
            type: 9,
            oneofIndex: 0,
            jsonName: "pdf",
          },
          {
            name: "png",
            number: 3,
            label: 1,
            type: 9,
            oneofIndex: 0,
            jsonName: "png",
          },
          {
            name: "shipment_number",
            number: 4,
            label: 1,
            type: 9,
            jsonName: "shipmentNumber",
          },
          {
            name: "state",
            number: 5,
            label: 1,
            type: 14,
            typeName: ".io.restorecommerce.fulfillment.State",
            jsonName: "state",
          },
          {
            name: "status",
            number: 6,
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
        oneofDecl: [{ name: "type" }],
        reservedRange: [],
        reservedName: [],
        name: "Label",
      },
      {
        field: [
          { name: "id", number: 1, label: 1, type: 9, jsonName: "id" },
          {
            name: "order",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Order",
            jsonName: "order",
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
        name: "FulfillmentRequest",
      },
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.FulfillmentRequest",
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
        name: "FulfillmentRequestList",
      },
      {
        field: [
          { name: "id", number: 1, label: 1, type: 9, jsonName: "id" },
          {
            name: "order",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Order",
            jsonName: "order",
          },
          {
            name: "meta",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.meta.Meta",
            jsonName: "meta",
          },
          {
            name: "labels",
            number: 4,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Label",
            jsonName: "labels",
          },
          {
            name: "fulfilled",
            number: 5,
            label: 1,
            type: 8,
            jsonName: "fulfilled",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Fulfillment",
      },
      {
        field: [
          {
            name: "payload",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Fulfillment",
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
        name: "FulfillmentResponse",
      },
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.FulfillmentResponse",
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
        name: "FulfillmentResponseList",
      },
      {
        field: [
          {
            name: "fulfillment_id",
            number: 1,
            label: 1,
            type: 9,
            jsonName: "fulfillmentId",
          },
          {
            name: "shipment_numbers",
            number: 2,
            label: 3,
            type: 9,
            jsonName: "shipmentNumbers",
          },
          {
            name: "options",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".google.protobuf.Any",
            jsonName: "options",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "TrackingRequest",
      },
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.TrackingRequest",
            jsonName: "items",
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
        name: "TrackingRequestList",
      },
      {
        field: [
          {
            name: "timestamp",
            number: 1,
            label: 1,
            type: 3,
            jsonName: "timestamp",
          },
          {
            name: "location",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "location",
          },
          {
            name: "details",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".google.protobuf.Any",
            jsonName: "details",
          },
          {
            name: "status",
            number: 4,
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
        name: "Event",
      },
      {
        field: [
          {
            name: "shipment_number",
            number: 1,
            label: 1,
            type: 9,
            jsonName: "shipmentNumber",
          },
          {
            name: "events",
            number: 3,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Event",
            jsonName: "events",
          },
          {
            name: "details",
            number: 4,
            label: 1,
            type: 11,
            typeName: ".google.protobuf.Any",
            jsonName: "details",
          },
          {
            name: "status",
            number: 5,
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
        name: "Tracking",
      },
      {
        field: [
          {
            name: "fulfillment",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Fulfillment",
            jsonName: "fulfillment",
          },
          {
            name: "tracks",
            number: 2,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.Tracking",
            jsonName: "tracks",
          },
          {
            name: "status",
            number: 3,
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
        name: "TrackingResult",
      },
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.fulfillment.TrackingResult",
            jsonName: "items",
          },
          {
            name: "operation_status",
            number: 2,
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
        name: "TrackingResultList",
      },
      {
        field: [
          { name: "ids", number: 1, label: 3, type: 9, jsonName: "ids" },
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
        name: "CancelRequestList",
      },
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
    ],
    enumType: [
      {
        value: [
          { name: "Undefined", number: 0 },
          { name: "Invalid", number: 1 },
          { name: "Ordered", number: 2 },
          { name: "Shipping", number: 3 },
          { name: "Done", number: 4 },
          { name: "Cancelled", number: 5 },
          { name: "Failed", number: 6 },
        ],
        reservedRange: [],
        reservedName: [],
        name: "State",
      },
    ],
    service: [
      {
        method: [
          {
            name: "Read",
            inputType: ".io.restorecommerce.resourcebase.ReadRequest",
            outputType:
              ".io.restorecommerce.fulfillment.FulfillmentResponseList",
          },
          {
            name: "Create",
            inputType: ".io.restorecommerce.fulfillment.FulfillmentRequestList",
            outputType:
              ".io.restorecommerce.fulfillment.FulfillmentResponseList",
          },
          {
            name: "Track",
            inputType: ".io.restorecommerce.fulfillment.TrackingRequestList",
            outputType: ".io.restorecommerce.fulfillment.TrackingResultList",
          },
          {
            name: "Cancel",
            inputType: ".io.restorecommerce.fulfillment.CancelRequestList",
            outputType:
              ".io.restorecommerce.fulfillment.FulfillmentResponseList",
          },
          {
            name: "Delete",
            inputType: ".io.restorecommerce.resourcebase.DeleteRequest",
            outputType: ".io.restorecommerce.resourcebase.DeleteResponse",
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
          span: [15, 0, 40, 1],
          leadingDetachedComments: [],
          leadingComments: "*\nMicroservice definition.\n",
        },
        {
          path: [6, 0, 2, 0],
          span: [19, 2, 91],
          leadingDetachedComments: [],
          leadingComments: "*\nReturns a list of shipment IDs.\n",
        },
        {
          path: [6, 0, 2, 1],
          span: [24, 2, 72],
          leadingDetachedComments: [],
          leadingComments: "*\nCreates and executes fulfillment orders\n",
        },
        {
          path: [6, 0, 2, 2],
          span: [29, 2, 63],
          leadingDetachedComments: [],
          leadingComments: "*\nTrack a batch of fulfillment orders\n",
        },
        {
          path: [6, 0, 2, 3],
          span: [34, 2, 67],
          leadingDetachedComments: [],
          leadingComments: "*\nCancel a batch of fulfillment orders\n",
        },
        {
          path: [6, 0, 2, 4],
          span: [39, 2, 118],
          leadingDetachedComments: [],
          leadingComments:
            "*\nDelete a batch of fulfillments from the database\n",
        },
        {
          path: [4, 6, 2, 3],
          span: [111, 2, 29],
          leadingDetachedComments: [],
          trailingComments: "filled on Order\n",
        },
        {
          path: [4, 6, 2, 4],
          span: [112, 2, 18],
          leadingDetachedComments: [],
          trailingComments: "update by Track\n",
        },
        {
          path: [4, 6, 2, 5],
          span: [113, 2, 46],
          leadingDetachedComments: [],
          trailingComments: "API status\n",
        },
        {
          path: [4, 9],
          span: [131, 0, 137, 1],
          leadingDetachedComments: [],
          leadingComments:
            "*\nThis is the message how it get stored to the database\n",
        },
        {
          path: [4, 9, 2, 3],
          span: [135, 2, 28],
          leadingDetachedComments: [],
          trailingComments: "filled by service\n",
        },
        {
          path: [4, 12, 2, 1],
          span: [152, 2, 39],
          leadingDetachedComments: [],
          trailingComments: "optional\n",
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
    ".io.restorecommerce.fulfillment.FulfillmentRequestList": FulfillmentRequestList,
    ".io.restorecommerce.fulfillment.Fulfillment": Fulfillment,
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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
