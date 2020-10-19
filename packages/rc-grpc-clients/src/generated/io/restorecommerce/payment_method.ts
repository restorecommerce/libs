/* eslint-disable */
import { Subject, ApiKey } from '../../io/restorecommerce/auth';
import { Meta } from '../../io/restorecommerce/meta';
import { Any } from '../../google/protobuf/any';
import { ReadRequest, DeleteRequest } from '../../io/restorecommerce/resource_base';
import { Empty } from '../../google/protobuf/empty';
import { Writer, Reader } from 'protobufjs/minimal';


export interface Deleted {
  id: string;
}

export interface PaymentMethodList {
  items: PaymentMethod[];
  totalCount: number;
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
}

export interface PaymentMethod {
  id: string;
  meta?: Meta;
  paymentMethod: PaymentMethod_PaymentMethod;
  data?: Any;
}

const baseDeleted: object = {
  id: "",
};

const basePaymentMethodList: object = {
  totalCount: 0,
};

const basePaymentMethod: object = {
  id: "",
  paymentMethod: 0,
};

/**
 *
 *  Microservice definition.
 */
export interface Service {

  Read(request: ReadRequest): Promise<PaymentMethodList>;

  Create(request: PaymentMethodList): Promise<PaymentMethodList>;

  Delete(request: DeleteRequest): Promise<Empty>;

  Update(request: PaymentMethodList): Promise<PaymentMethodList>;

  Upsert(request: PaymentMethodList): Promise<PaymentMethodList>;

}

export const protobufPackage = 'io.restorecommerce.payment_method'

export enum PaymentMethod_PaymentMethod {
  WIRETRANSFER = 0,
  DIRECTDEBIT = 1,
  PAYPAL = 2,
  UNRECOGNIZED = -1,
}

export function paymentMethod_PaymentMethodFromJSON(object: any): PaymentMethod_PaymentMethod {
  switch (object) {
    case 0:
    case "WIRETRANSFER":
      return PaymentMethod_PaymentMethod.WIRETRANSFER;
    case 1:
    case "DIRECTDEBIT":
      return PaymentMethod_PaymentMethod.DIRECTDEBIT;
    case 2:
    case "PAYPAL":
      return PaymentMethod_PaymentMethod.PAYPAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PaymentMethod_PaymentMethod.UNRECOGNIZED;
  }
}

export function paymentMethod_PaymentMethodToJSON(object: PaymentMethod_PaymentMethod): string {
  switch (object) {
    case PaymentMethod_PaymentMethod.WIRETRANSFER:
      return "WIRETRANSFER";
    case PaymentMethod_PaymentMethod.DIRECTDEBIT:
      return "DIRECTDEBIT";
    case PaymentMethod_PaymentMethod.PAYPAL:
      return "PAYPAL";
    default:
      return "UNKNOWN";
  }
}

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
  fromJSON(object: any): Deleted {
    const message = { ...baseDeleted } as Deleted;
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

export const PaymentMethodList = {
  encode(message: PaymentMethodList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      PaymentMethod.encode(v!, writer.uint32(10).fork()).ldelim();
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
  decode(input: Uint8Array | Reader, length?: number): PaymentMethodList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePaymentMethodList } as PaymentMethodList;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(PaymentMethod.decode(reader, reader.uint32()));
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
  fromJSON(object: any): PaymentMethodList {
    const message = { ...basePaymentMethodList } as PaymentMethodList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(PaymentMethod.fromJSON(e));
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
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromJSON(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<PaymentMethodList>): PaymentMethodList {
    const message = { ...basePaymentMethodList } as PaymentMethodList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(PaymentMethod.fromPartial(e));
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
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromPartial(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  toJSON(message: PaymentMethodList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map(e => e ? PaymentMethod.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    message.apiKey !== undefined && (obj.apiKey = message.apiKey ? ApiKey.toJSON(message.apiKey) : undefined);
    return obj;
  },
};

export const PaymentMethod = {
  encode(message: PaymentMethod, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    if (message.meta !== undefined && message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(24).int32(message.paymentMethod);
    if (message.data !== undefined && message.data !== undefined) {
      Any.encode(message.data, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PaymentMethod {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePaymentMethod } as PaymentMethod;
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
          message.paymentMethod = reader.int32() as any;
          break;
        case 4:
          message.data = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PaymentMethod {
    const message = { ...basePaymentMethod } as PaymentMethod;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromJSON(object.meta);
    } else {
      message.meta = undefined;
    }
    if (object.paymentMethod !== undefined && object.paymentMethod !== null) {
      message.paymentMethod = paymentMethod_PaymentMethodFromJSON(object.paymentMethod);
    } else {
      message.paymentMethod = 0;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromJSON(object.data);
    } else {
      message.data = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<PaymentMethod>): PaymentMethod {
    const message = { ...basePaymentMethod } as PaymentMethod;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromPartial(object.meta);
    } else {
      message.meta = undefined;
    }
    if (object.paymentMethod !== undefined && object.paymentMethod !== null) {
      message.paymentMethod = object.paymentMethod;
    } else {
      message.paymentMethod = 0;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromPartial(object.data);
    } else {
      message.data = undefined;
    }
    return message;
  },
  toJSON(message: PaymentMethod): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.paymentMethod !== undefined && (obj.paymentMethod = paymentMethod_PaymentMethodToJSON(message.paymentMethod));
    message.data !== undefined && (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    return obj;
  },
};

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