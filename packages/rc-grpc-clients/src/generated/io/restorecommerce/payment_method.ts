/* eslint-disable */
import { Subject } from '../../io/restorecommerce/auth';
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
  subject?: Subject;
}

export interface PaymentMethod {
  id: string;
  meta?: Meta;
  paymentMethod: PaymentMethodEnum;
  transferType: TransferTypeEnum;
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
  transferType: 0,
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

export const protobufPackage = 'io.restorecommerce.payment_method'

export enum PaymentMethodEnum {
  WIRE_TRANSFER = 0,
  DIRECT_DEBIT = 1,
  PAYPAL = 2,
  UNRECOGNIZED = -1,
}

export function paymentMethodEnumFromJSON(object: any): PaymentMethodEnum {
  switch (object) {
    case 0:
    case "WIRE_TRANSFER":
      return PaymentMethodEnum.WIRE_TRANSFER;
    case 1:
    case "DIRECT_DEBIT":
      return PaymentMethodEnum.DIRECT_DEBIT;
    case 2:
    case "PAYPAL":
      return PaymentMethodEnum.PAYPAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PaymentMethodEnum.UNRECOGNIZED;
  }
}

export function paymentMethodEnumToJSON(object: PaymentMethodEnum): string {
  switch (object) {
    case PaymentMethodEnum.WIRE_TRANSFER:
      return "WIRE_TRANSFER";
    case PaymentMethodEnum.DIRECT_DEBIT:
      return "DIRECT_DEBIT";
    case PaymentMethodEnum.PAYPAL:
      return "PAYPAL";
    default:
      return "UNKNOWN";
  }
}

export enum TransferTypeEnum {
  RECEIVE = 0,
  SEND = 1,
  BOTH = 2,
  UNRECOGNIZED = -1,
}

export function transferTypeEnumFromJSON(object: any): TransferTypeEnum {
  switch (object) {
    case 0:
    case "RECEIVE":
      return TransferTypeEnum.RECEIVE;
    case 1:
    case "SEND":
      return TransferTypeEnum.SEND;
    case 2:
    case "BOTH":
      return TransferTypeEnum.BOTH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TransferTypeEnum.UNRECOGNIZED;
  }
}

export function transferTypeEnumToJSON(object: TransferTypeEnum): string {
  switch (object) {
    case TransferTypeEnum.RECEIVE:
      return "RECEIVE";
    case TransferTypeEnum.SEND:
      return "SEND";
    case TransferTypeEnum.BOTH:
      return "BOTH";
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
    if (message.subject !== undefined && message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
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
    writer.uint32(32).int32(message.transferType);
    if (message.data !== undefined && message.data !== undefined) {
      Any.encode(message.data, writer.uint32(42).fork()).ldelim();
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
          message.transferType = reader.int32() as any;
          break;
        case 5:
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
      message.paymentMethod = paymentMethodEnumFromJSON(object.paymentMethod);
    } else {
      message.paymentMethod = 0;
    }
    if (object.transferType !== undefined && object.transferType !== null) {
      message.transferType = transferTypeEnumFromJSON(object.transferType);
    } else {
      message.transferType = 0;
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
    if (object.transferType !== undefined && object.transferType !== null) {
      message.transferType = object.transferType;
    } else {
      message.transferType = 0;
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
    message.paymentMethod !== undefined && (obj.paymentMethod = paymentMethodEnumToJSON(message.paymentMethod));
    message.transferType !== undefined && (obj.transferType = transferTypeEnumToJSON(message.transferType));
    message.data !== undefined && (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    return obj;
  },
};

export const metaDeleted: { [key in keyof Required<Deleted>]: MetaI | string } = {
  id: {meta:'builtin', type:'string', original:'string'} as MetaB,
}
export const metaPaymentMethodList: { [key in keyof Required<PaymentMethodList>]: MetaI | string } = {
  items: {meta:'array', type:{meta:'object', type:'.io.restorecommerce.payment_method.PaymentMethod', name:'PaymentMethod'} as MetaO} as MetaA,
  totalCount: {meta:'builtin', type:'number', original:'uint32'} as MetaB,
  subject: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.Subject', name:'Subject'} as MetaO]} as MetaU,
  apiKey: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.ApiKey', name:'ApiKey'} as MetaO]} as MetaU,
}
export const metaPaymentMethod: { [key in keyof Required<PaymentMethod>]: MetaI | string } = {
  id: {meta:'builtin', type:'string', original:'string'} as MetaB,
  meta: {meta:'object', type:'.io.restorecommerce.meta.Meta', name:'Meta'} as MetaO,
  paymentMethod: {meta:'object', type:'.io.restorecommerce.payment_method.PaymentMethod.PaymentMethod', name:'PaymentMethod_PaymentMethod'} as MetaO,
  data: {meta:'object', type:'.google.protobuf.Any', name:'Any'} as MetaO,
}
export const metaService: { [key in keyof Service]: MetaS<any, any> } = {
  Read: {request: {meta:'object', type:'.io.restorecommerce.resourcebase.ReadRequest', name:'ReadRequest'} as MetaO, response: {meta:'object', type:'.io.restorecommerce.payment_method.PaymentMethodList', name:'PaymentMethodList'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: ReadRequest.encode, decodeResponse: PaymentMethodList.decode} as MetaS<ReadRequest, PaymentMethodList>,
  Create: {request: {meta:'object', type:'.io.restorecommerce.payment_method.PaymentMethodList', name:'PaymentMethodList'} as MetaO, response: {meta:'object', type:'.io.restorecommerce.payment_method.PaymentMethodList', name:'PaymentMethodList'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: PaymentMethodList.encode, decodeResponse: PaymentMethodList.decode} as MetaS<PaymentMethodList, PaymentMethodList>,
  Delete: {request: {meta:'object', type:'.io.restorecommerce.resourcebase.DeleteRequest', name:'DeleteRequest'} as MetaO, response: {meta:'object', type:'.google.protobuf.Empty', name:'Empty'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: DeleteRequest.encode, decodeResponse: Empty.decode} as MetaS<DeleteRequest, Empty>,
  Update: {request: {meta:'object', type:'.io.restorecommerce.payment_method.PaymentMethodList', name:'PaymentMethodList'} as MetaO, response: {meta:'object', type:'.io.restorecommerce.payment_method.PaymentMethodList', name:'PaymentMethodList'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: PaymentMethodList.encode, decodeResponse: PaymentMethodList.decode} as MetaS<PaymentMethodList, PaymentMethodList>,
  Upsert: {request: {meta:'object', type:'.io.restorecommerce.payment_method.PaymentMethodList', name:'PaymentMethodList'} as MetaO, response: {meta:'object', type:'.io.restorecommerce.payment_method.PaymentMethodList', name:'PaymentMethodList'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: PaymentMethodList.encode, decodeResponse: PaymentMethodList.decode} as MetaS<PaymentMethodList, PaymentMethodList>,
}
export const metaPackageIoRestorecommercePayment_method: { [key: string]: ['service', string, any, { [key: string]: MetaS<any, any> }] | ['enum', string, any, any] | ['message', string, any, { [key: string]: MetaI | string }] } = {
  Deleted: ['message', '.io.restorecommerce.payment_method.Deleted', Deleted, metaDeleted],
  PaymentMethodList: ['message', '.io.restorecommerce.payment_method.PaymentMethodList', PaymentMethodList, metaPaymentMethodList],
  PaymentMethod: ['message', '.io.restorecommerce.payment_method.PaymentMethod', PaymentMethod, metaPaymentMethod],
  PaymentMethod_PaymentMethod: ['enum', '.io.restorecommerce.payment_method.PaymentMethod.PaymentMethod', PaymentMethod_PaymentMethod, undefined],
  Service: ['service', '.io.restorecommerce.payment_method.Service', undefined, metaService],
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