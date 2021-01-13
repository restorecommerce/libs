/* eslint-disable */
import { Subject } from '../../io/restorecommerce/auth';
import { Writer, Reader } from 'protobufjs/minimal';
import { StringValue } from '../../google/protobuf/wrappers';


/**
 *  Request object for setup calls
 */
export interface SetupRequest {
  ip: string;
  items: Item[];
  subtotal: number;
  shipping: number;
  handling: number;
  tax: number;
  currency: string;
  returnUrl: string;
  cancelReturnUrl: string;
  allowGuestCheckout: boolean;
  provider: Provider;
  subject?: Subject;
}

/**
 *  Response object for setup calls.
 */
export interface SetupResponse {
  paymentErrors: PaymentError[];
  token: string;
  confirmInitiationUrl: string;
  initiatedOn: string;
}

/**
 *  Request object for authorization or purchase call for cardless payment.
 */
export interface PaymentRequest {
  provider: Provider;
  paymentSum: number;
  currency: string;
  paymentId: string;
  payerId: string;
  token: string;
  subject?: Subject;
}

/**
 *  Request object for capture call for both standard and cardless payments.
 */
export interface CaptureRequest {
  provider: Provider;
  paymentSum: number;
  currency: string;
  paymentId: string;
  subject?: Subject;
}

/**
 *  Unified response object for authorization, purchase and capture calls
 *  for both standard and cardless payments.
 */
export interface PaymentResponse {
  paymentErrors: PaymentError[];
  paymentId: string;
  executedOn: string;
}

/**
 *  Used for building ActiveMerchant::Billing::CreditCard instance.
 */
export interface PaymentCard {
  primaryNumber: string;
  firstName: string;
  lastName: string;
  month: string;
  year: number;
  verificationValue: string;
}

/**
 *  Represents purchased item. Not all providers support this.
 */
export interface Item {
  name: string;
  description: string;
  quantity: number;
  amount: number;
}

/**
 *  Error details.
 */
export interface PaymentError {
  killed: boolean;
  code: number;
  signal?: string;
  cmd: string;
  stdout: string;
  stderr: string;
}

const baseSetupRequest: object = {
  ip: "",
  subtotal: 0,
  shipping: 0,
  handling: 0,
  tax: 0,
  currency: "",
  returnUrl: "",
  cancelReturnUrl: "",
  allowGuestCheckout: false,
  provider: 0,
};

const baseSetupResponse: object = {
  token: "",
  confirmInitiationUrl: "",
  initiatedOn: "",
};

const basePaymentRequest: object = {
  provider: 0,
  paymentSum: 0,
  currency: "",
  paymentId: "",
  payerId: "",
  token: "",
};

const baseCaptureRequest: object = {
  provider: 0,
  paymentSum: 0,
  currency: "",
  paymentId: "",
};

const basePaymentResponse: object = {
  paymentId: "",
  executedOn: "",
};

const basePaymentCard: object = {
  primaryNumber: "",
  firstName: "",
  lastName: "",
  month: "",
  year: 0,
  verificationValue: "",
};

const baseItem: object = {
  name: "",
  description: "",
  quantity: 0,
  amount: 0,
};

const basePaymentError: object = {
  killed: false,
  code: 0,
  cmd: "",
  stdout: "",
  stderr: "",
};

export interface Service {

  /**
   *  Wrapper for setup_authorization in ActiveMerchant
   */
  SetupAuthorization(request: SetupRequest): Promise<SetupResponse>;

  /**
   *  Wrapper for setup_purchase in ActiveMerchant
   */
  SetupPurchase(request: SetupRequest): Promise<SetupResponse>;

  /**
   *  Gets payment details by token or transaction. Only supported by PayPal Express Checkout.
   */
  Authorize(request: PaymentRequest): Promise<PaymentResponse>;

  /**
   *  Gets payment details by token or transaction. Only supported by PayPal Express Checkout.
   */
  Purchase(request: PaymentRequest): Promise<PaymentResponse>;

  /**
   *  Can capture both cardless and standard authorization.
   */
  Capture(request: CaptureRequest): Promise<PaymentResponse>;

}

export interface MetaBase {
  readonly kind: 'object' | 'array' | 'map' | 'union' | 'builtin';
}

export interface MetaMessage extends MetaBase {
  readonly kind: 'object';
  readonly type: string;
  readonly name: string;
}

export interface MetaArray extends MetaBase {
  readonly kind: 'array';
  readonly type: MetaBase | string;
}

export interface MetaMap extends MetaBase {
  readonly kind: 'map';
  readonly key: string;
  readonly value: MetaBase | string;
}

export interface MetaUnion extends MetaBase {
  readonly kind: 'union';
  readonly choices: Array<MetaBase | string | undefined>;
}

export interface MetaService<T, R> {
  readonly request: MetaMessage;
  readonly response: MetaMessage;
  readonly clientStreaming: boolean;
  readonly serverStreaming: boolean;
  readonly encodeRequest?: (message: T, writer: Writer) => Writer;
  readonly decodeResponse?: (input: Uint8Array | Reader, length?: number) => R;
}

export interface MetaPrimitive extends MetaBase {
  readonly kind: 'builtin';
  readonly type: string;
  readonly original: string;
}

export const protobufPackage = 'io.restorecommerce.payment'

/**  Possible service providers. Provider names must be exactly as in config.yml.
 */
export enum Provider {
  NO_PROVIDER = 0,
  PaypalExpressGateway = 1,
  AuthorizeNetGateway = 2,
  UNRECOGNIZED = -1,
}

export function providerFromJSON(object: any): Provider {
  switch (object) {
    case 0:
    case "NO_PROVIDER":
      return Provider.NO_PROVIDER;
    case 1:
    case "PaypalExpressGateway":
      return Provider.PaypalExpressGateway;
    case 2:
    case "AuthorizeNetGateway":
      return Provider.AuthorizeNetGateway;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Provider.UNRECOGNIZED;
  }
}

export function providerToJSON(object: Provider): string {
  switch (object) {
    case Provider.NO_PROVIDER:
      return "NO_PROVIDER";
    case Provider.PaypalExpressGateway:
      return "PaypalExpressGateway";
    case Provider.AuthorizeNetGateway:
      return "AuthorizeNetGateway";
    default:
      return "UNKNOWN";
  }
}

/**  Possible payment identifiers.
 */
export enum PaymentIdType {
  NO_IDENTIFIER_TYPE = 0,
  TOKEN = 1,
  TRANSACTION_ID = 2,
  UNRECOGNIZED = -1,
}

export function paymentIdTypeFromJSON(object: any): PaymentIdType {
  switch (object) {
    case 0:
    case "NO_IDENTIFIER_TYPE":
      return PaymentIdType.NO_IDENTIFIER_TYPE;
    case 1:
    case "TOKEN":
      return PaymentIdType.TOKEN;
    case 2:
    case "TRANSACTION_ID":
      return PaymentIdType.TRANSACTION_ID;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PaymentIdType.UNRECOGNIZED;
  }
}

export function paymentIdTypeToJSON(object: PaymentIdType): string {
  switch (object) {
    case PaymentIdType.NO_IDENTIFIER_TYPE:
      return "NO_IDENTIFIER_TYPE";
    case PaymentIdType.TOKEN:
      return "TOKEN";
    case PaymentIdType.TRANSACTION_ID:
      return "TRANSACTION_ID";
    default:
      return "UNKNOWN";
  }
}

export const SetupRequest = {
  encode(message: SetupRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.ip);
    for (const v of message.items) {
      Item.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(24).int32(message.subtotal);
    writer.uint32(32).int32(message.shipping);
    writer.uint32(40).int32(message.handling);
    writer.uint32(48).int32(message.tax);
    writer.uint32(58).string(message.currency);
    writer.uint32(66).string(message.returnUrl);
    writer.uint32(74).string(message.cancelReturnUrl);
    writer.uint32(80).bool(message.allowGuestCheckout);
    writer.uint32(88).int32(message.provider);
    if (message.subject !== undefined && message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): SetupRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSetupRequest } as SetupRequest;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ip = reader.string();
          break;
        case 2:
          message.items.push(Item.decode(reader, reader.uint32()));
          break;
        case 3:
          message.subtotal = reader.int32();
          break;
        case 4:
          message.shipping = reader.int32();
          break;
        case 5:
          message.handling = reader.int32();
          break;
        case 6:
          message.tax = reader.int32();
          break;
        case 7:
          message.currency = reader.string();
          break;
        case 8:
          message.returnUrl = reader.string();
          break;
        case 9:
          message.cancelReturnUrl = reader.string();
          break;
        case 10:
          message.allowGuestCheckout = reader.bool();
          break;
        case 11:
          message.provider = reader.int32() as any;
          break;
        case 12:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SetupRequest {
    const message = { ...baseSetupRequest } as SetupRequest;
    message.items = [];
    if (object.ip !== undefined && object.ip !== null) {
      message.ip = String(object.ip);
    } else {
      message.ip = "";
    }
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Item.fromJSON(e));
      }
    }
    if (object.subtotal !== undefined && object.subtotal !== null) {
      message.subtotal = Number(object.subtotal);
    } else {
      message.subtotal = 0;
    }
    if (object.shipping !== undefined && object.shipping !== null) {
      message.shipping = Number(object.shipping);
    } else {
      message.shipping = 0;
    }
    if (object.handling !== undefined && object.handling !== null) {
      message.handling = Number(object.handling);
    } else {
      message.handling = 0;
    }
    if (object.tax !== undefined && object.tax !== null) {
      message.tax = Number(object.tax);
    } else {
      message.tax = 0;
    }
    if (object.currency !== undefined && object.currency !== null) {
      message.currency = String(object.currency);
    } else {
      message.currency = "";
    }
    if (object.returnUrl !== undefined && object.returnUrl !== null) {
      message.returnUrl = String(object.returnUrl);
    } else {
      message.returnUrl = "";
    }
    if (object.cancelReturnUrl !== undefined && object.cancelReturnUrl !== null) {
      message.cancelReturnUrl = String(object.cancelReturnUrl);
    } else {
      message.cancelReturnUrl = "";
    }
    if (object.allowGuestCheckout !== undefined && object.allowGuestCheckout !== null) {
      message.allowGuestCheckout = Boolean(object.allowGuestCheckout);
    } else {
      message.allowGuestCheckout = false;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = providerFromJSON(object.provider);
    } else {
      message.provider = 0;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<SetupRequest>): SetupRequest {
    const message = { ...baseSetupRequest } as SetupRequest;
    message.items = [];
    if (object.ip !== undefined && object.ip !== null) {
      message.ip = object.ip;
    } else {
      message.ip = "";
    }
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Item.fromPartial(e));
      }
    }
    if (object.subtotal !== undefined && object.subtotal !== null) {
      message.subtotal = object.subtotal;
    } else {
      message.subtotal = 0;
    }
    if (object.shipping !== undefined && object.shipping !== null) {
      message.shipping = object.shipping;
    } else {
      message.shipping = 0;
    }
    if (object.handling !== undefined && object.handling !== null) {
      message.handling = object.handling;
    } else {
      message.handling = 0;
    }
    if (object.tax !== undefined && object.tax !== null) {
      message.tax = object.tax;
    } else {
      message.tax = 0;
    }
    if (object.currency !== undefined && object.currency !== null) {
      message.currency = object.currency;
    } else {
      message.currency = "";
    }
    if (object.returnUrl !== undefined && object.returnUrl !== null) {
      message.returnUrl = object.returnUrl;
    } else {
      message.returnUrl = "";
    }
    if (object.cancelReturnUrl !== undefined && object.cancelReturnUrl !== null) {
      message.cancelReturnUrl = object.cancelReturnUrl;
    } else {
      message.cancelReturnUrl = "";
    }
    if (object.allowGuestCheckout !== undefined && object.allowGuestCheckout !== null) {
      message.allowGuestCheckout = object.allowGuestCheckout;
    } else {
      message.allowGuestCheckout = false;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    } else {
      message.provider = 0;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },
  toJSON(message: SetupRequest): unknown {
    const obj: any = {};
    message.ip !== undefined && (obj.ip = message.ip);
    if (message.items) {
      obj.items = message.items.map(e => e ? Item.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.subtotal !== undefined && (obj.subtotal = message.subtotal);
    message.shipping !== undefined && (obj.shipping = message.shipping);
    message.handling !== undefined && (obj.handling = message.handling);
    message.tax !== undefined && (obj.tax = message.tax);
    message.currency !== undefined && (obj.currency = message.currency);
    message.returnUrl !== undefined && (obj.returnUrl = message.returnUrl);
    message.cancelReturnUrl !== undefined && (obj.cancelReturnUrl = message.cancelReturnUrl);
    message.allowGuestCheckout !== undefined && (obj.allowGuestCheckout = message.allowGuestCheckout);
    message.provider !== undefined && (obj.provider = providerToJSON(message.provider));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },
};

export const SetupResponse = {
  encode(message: SetupResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.paymentErrors) {
      PaymentError.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(18).string(message.token);
    writer.uint32(26).string(message.confirmInitiationUrl);
    writer.uint32(34).string(message.initiatedOn);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): SetupResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSetupResponse } as SetupResponse;
    message.paymentErrors = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paymentErrors.push(PaymentError.decode(reader, reader.uint32()));
          break;
        case 2:
          message.token = reader.string();
          break;
        case 3:
          message.confirmInitiationUrl = reader.string();
          break;
        case 4:
          message.initiatedOn = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SetupResponse {
    const message = { ...baseSetupResponse } as SetupResponse;
    message.paymentErrors = [];
    if (object.paymentErrors !== undefined && object.paymentErrors !== null) {
      for (const e of object.paymentErrors) {
        message.paymentErrors.push(PaymentError.fromJSON(e));
      }
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    if (object.confirmInitiationUrl !== undefined && object.confirmInitiationUrl !== null) {
      message.confirmInitiationUrl = String(object.confirmInitiationUrl);
    } else {
      message.confirmInitiationUrl = "";
    }
    if (object.initiatedOn !== undefined && object.initiatedOn !== null) {
      message.initiatedOn = String(object.initiatedOn);
    } else {
      message.initiatedOn = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<SetupResponse>): SetupResponse {
    const message = { ...baseSetupResponse } as SetupResponse;
    message.paymentErrors = [];
    if (object.paymentErrors !== undefined && object.paymentErrors !== null) {
      for (const e of object.paymentErrors) {
        message.paymentErrors.push(PaymentError.fromPartial(e));
      }
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    if (object.confirmInitiationUrl !== undefined && object.confirmInitiationUrl !== null) {
      message.confirmInitiationUrl = object.confirmInitiationUrl;
    } else {
      message.confirmInitiationUrl = "";
    }
    if (object.initiatedOn !== undefined && object.initiatedOn !== null) {
      message.initiatedOn = object.initiatedOn;
    } else {
      message.initiatedOn = "";
    }
    return message;
  },
  toJSON(message: SetupResponse): unknown {
    const obj: any = {};
    if (message.paymentErrors) {
      obj.paymentErrors = message.paymentErrors.map(e => e ? PaymentError.toJSON(e) : undefined);
    } else {
      obj.paymentErrors = [];
    }
    message.token !== undefined && (obj.token = message.token);
    message.confirmInitiationUrl !== undefined && (obj.confirmInitiationUrl = message.confirmInitiationUrl);
    message.initiatedOn !== undefined && (obj.initiatedOn = message.initiatedOn);
    return obj;
  },
};

export const PaymentRequest = {
  encode(message: PaymentRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.provider);
    writer.uint32(16).int32(message.paymentSum);
    writer.uint32(26).string(message.currency);
    writer.uint32(34).string(message.paymentId);
    writer.uint32(42).string(message.payerId);
    writer.uint32(50).string(message.token);
    if (message.subject !== undefined && message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PaymentRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePaymentRequest } as PaymentRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider = reader.int32() as any;
          break;
        case 2:
          message.paymentSum = reader.int32();
          break;
        case 3:
          message.currency = reader.string();
          break;
        case 4:
          message.paymentId = reader.string();
          break;
        case 5:
          message.payerId = reader.string();
          break;
        case 6:
          message.token = reader.string();
          break;
        case 7:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PaymentRequest {
    const message = { ...basePaymentRequest } as PaymentRequest;
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = providerFromJSON(object.provider);
    } else {
      message.provider = 0;
    }
    if (object.paymentSum !== undefined && object.paymentSum !== null) {
      message.paymentSum = Number(object.paymentSum);
    } else {
      message.paymentSum = 0;
    }
    if (object.currency !== undefined && object.currency !== null) {
      message.currency = String(object.currency);
    } else {
      message.currency = "";
    }
    if (object.paymentId !== undefined && object.paymentId !== null) {
      message.paymentId = String(object.paymentId);
    } else {
      message.paymentId = "";
    }
    if (object.payerId !== undefined && object.payerId !== null) {
      message.payerId = String(object.payerId);
    } else {
      message.payerId = "";
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<PaymentRequest>): PaymentRequest {
    const message = { ...basePaymentRequest } as PaymentRequest;
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    } else {
      message.provider = 0;
    }
    if (object.paymentSum !== undefined && object.paymentSum !== null) {
      message.paymentSum = object.paymentSum;
    } else {
      message.paymentSum = 0;
    }
    if (object.currency !== undefined && object.currency !== null) {
      message.currency = object.currency;
    } else {
      message.currency = "";
    }
    if (object.paymentId !== undefined && object.paymentId !== null) {
      message.paymentId = object.paymentId;
    } else {
      message.paymentId = "";
    }
    if (object.payerId !== undefined && object.payerId !== null) {
      message.payerId = object.payerId;
    } else {
      message.payerId = "";
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },
  toJSON(message: PaymentRequest): unknown {
    const obj: any = {};
    message.provider !== undefined && (obj.provider = providerToJSON(message.provider));
    message.paymentSum !== undefined && (obj.paymentSum = message.paymentSum);
    message.currency !== undefined && (obj.currency = message.currency);
    message.paymentId !== undefined && (obj.paymentId = message.paymentId);
    message.payerId !== undefined && (obj.payerId = message.payerId);
    message.token !== undefined && (obj.token = message.token);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },
};

export const CaptureRequest = {
  encode(message: CaptureRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.provider);
    writer.uint32(16).int32(message.paymentSum);
    writer.uint32(26).string(message.currency);
    writer.uint32(34).string(message.paymentId);
    if (message.subject !== undefined && message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CaptureRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCaptureRequest } as CaptureRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider = reader.int32() as any;
          break;
        case 2:
          message.paymentSum = reader.int32();
          break;
        case 3:
          message.currency = reader.string();
          break;
        case 4:
          message.paymentId = reader.string();
          break;
        case 5:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CaptureRequest {
    const message = { ...baseCaptureRequest } as CaptureRequest;
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = providerFromJSON(object.provider);
    } else {
      message.provider = 0;
    }
    if (object.paymentSum !== undefined && object.paymentSum !== null) {
      message.paymentSum = Number(object.paymentSum);
    } else {
      message.paymentSum = 0;
    }
    if (object.currency !== undefined && object.currency !== null) {
      message.currency = String(object.currency);
    } else {
      message.currency = "";
    }
    if (object.paymentId !== undefined && object.paymentId !== null) {
      message.paymentId = String(object.paymentId);
    } else {
      message.paymentId = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<CaptureRequest>): CaptureRequest {
    const message = { ...baseCaptureRequest } as CaptureRequest;
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    } else {
      message.provider = 0;
    }
    if (object.paymentSum !== undefined && object.paymentSum !== null) {
      message.paymentSum = object.paymentSum;
    } else {
      message.paymentSum = 0;
    }
    if (object.currency !== undefined && object.currency !== null) {
      message.currency = object.currency;
    } else {
      message.currency = "";
    }
    if (object.paymentId !== undefined && object.paymentId !== null) {
      message.paymentId = object.paymentId;
    } else {
      message.paymentId = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },
  toJSON(message: CaptureRequest): unknown {
    const obj: any = {};
    message.provider !== undefined && (obj.provider = providerToJSON(message.provider));
    message.paymentSum !== undefined && (obj.paymentSum = message.paymentSum);
    message.currency !== undefined && (obj.currency = message.currency);
    message.paymentId !== undefined && (obj.paymentId = message.paymentId);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },
};

export const PaymentResponse = {
  encode(message: PaymentResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.paymentErrors) {
      PaymentError.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(18).string(message.paymentId);
    writer.uint32(26).string(message.executedOn);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PaymentResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePaymentResponse } as PaymentResponse;
    message.paymentErrors = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paymentErrors.push(PaymentError.decode(reader, reader.uint32()));
          break;
        case 2:
          message.paymentId = reader.string();
          break;
        case 3:
          message.executedOn = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PaymentResponse {
    const message = { ...basePaymentResponse } as PaymentResponse;
    message.paymentErrors = [];
    if (object.paymentErrors !== undefined && object.paymentErrors !== null) {
      for (const e of object.paymentErrors) {
        message.paymentErrors.push(PaymentError.fromJSON(e));
      }
    }
    if (object.paymentId !== undefined && object.paymentId !== null) {
      message.paymentId = String(object.paymentId);
    } else {
      message.paymentId = "";
    }
    if (object.executedOn !== undefined && object.executedOn !== null) {
      message.executedOn = String(object.executedOn);
    } else {
      message.executedOn = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<PaymentResponse>): PaymentResponse {
    const message = { ...basePaymentResponse } as PaymentResponse;
    message.paymentErrors = [];
    if (object.paymentErrors !== undefined && object.paymentErrors !== null) {
      for (const e of object.paymentErrors) {
        message.paymentErrors.push(PaymentError.fromPartial(e));
      }
    }
    if (object.paymentId !== undefined && object.paymentId !== null) {
      message.paymentId = object.paymentId;
    } else {
      message.paymentId = "";
    }
    if (object.executedOn !== undefined && object.executedOn !== null) {
      message.executedOn = object.executedOn;
    } else {
      message.executedOn = "";
    }
    return message;
  },
  toJSON(message: PaymentResponse): unknown {
    const obj: any = {};
    if (message.paymentErrors) {
      obj.paymentErrors = message.paymentErrors.map(e => e ? PaymentError.toJSON(e) : undefined);
    } else {
      obj.paymentErrors = [];
    }
    message.paymentId !== undefined && (obj.paymentId = message.paymentId);
    message.executedOn !== undefined && (obj.executedOn = message.executedOn);
    return obj;
  },
};

export const PaymentCard = {
  encode(message: PaymentCard, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.primaryNumber);
    writer.uint32(18).string(message.firstName);
    writer.uint32(26).string(message.lastName);
    writer.uint32(34).string(message.month);
    writer.uint32(40).int32(message.year);
    writer.uint32(50).string(message.verificationValue);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PaymentCard {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePaymentCard } as PaymentCard;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.primaryNumber = reader.string();
          break;
        case 2:
          message.firstName = reader.string();
          break;
        case 3:
          message.lastName = reader.string();
          break;
        case 4:
          message.month = reader.string();
          break;
        case 5:
          message.year = reader.int32();
          break;
        case 6:
          message.verificationValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PaymentCard {
    const message = { ...basePaymentCard } as PaymentCard;
    if (object.primaryNumber !== undefined && object.primaryNumber !== null) {
      message.primaryNumber = String(object.primaryNumber);
    } else {
      message.primaryNumber = "";
    }
    if (object.firstName !== undefined && object.firstName !== null) {
      message.firstName = String(object.firstName);
    } else {
      message.firstName = "";
    }
    if (object.lastName !== undefined && object.lastName !== null) {
      message.lastName = String(object.lastName);
    } else {
      message.lastName = "";
    }
    if (object.month !== undefined && object.month !== null) {
      message.month = String(object.month);
    } else {
      message.month = "";
    }
    if (object.year !== undefined && object.year !== null) {
      message.year = Number(object.year);
    } else {
      message.year = 0;
    }
    if (object.verificationValue !== undefined && object.verificationValue !== null) {
      message.verificationValue = String(object.verificationValue);
    } else {
      message.verificationValue = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<PaymentCard>): PaymentCard {
    const message = { ...basePaymentCard } as PaymentCard;
    if (object.primaryNumber !== undefined && object.primaryNumber !== null) {
      message.primaryNumber = object.primaryNumber;
    } else {
      message.primaryNumber = "";
    }
    if (object.firstName !== undefined && object.firstName !== null) {
      message.firstName = object.firstName;
    } else {
      message.firstName = "";
    }
    if (object.lastName !== undefined && object.lastName !== null) {
      message.lastName = object.lastName;
    } else {
      message.lastName = "";
    }
    if (object.month !== undefined && object.month !== null) {
      message.month = object.month;
    } else {
      message.month = "";
    }
    if (object.year !== undefined && object.year !== null) {
      message.year = object.year;
    } else {
      message.year = 0;
    }
    if (object.verificationValue !== undefined && object.verificationValue !== null) {
      message.verificationValue = object.verificationValue;
    } else {
      message.verificationValue = "";
    }
    return message;
  },
  toJSON(message: PaymentCard): unknown {
    const obj: any = {};
    message.primaryNumber !== undefined && (obj.primaryNumber = message.primaryNumber);
    message.firstName !== undefined && (obj.firstName = message.firstName);
    message.lastName !== undefined && (obj.lastName = message.lastName);
    message.month !== undefined && (obj.month = message.month);
    message.year !== undefined && (obj.year = message.year);
    message.verificationValue !== undefined && (obj.verificationValue = message.verificationValue);
    return obj;
  },
};

export const Item = {
  encode(message: Item, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.name);
    writer.uint32(18).string(message.description);
    writer.uint32(24).int32(message.quantity);
    writer.uint32(32).int32(message.amount);
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
          message.name = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.quantity = reader.int32();
          break;
        case 4:
          message.amount = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Item {
    const message = { ...baseItem } as Item;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = Number(object.quantity);
    } else {
      message.quantity = 0;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Number(object.amount);
    } else {
      message.amount = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<Item>): Item {
    const message = { ...baseItem } as Item;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = object.quantity;
    } else {
      message.quantity = 0;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = 0;
    }
    return message;
  },
  toJSON(message: Item): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.quantity !== undefined && (obj.quantity = message.quantity);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
};

export const PaymentError = {
  encode(message: PaymentError, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).bool(message.killed);
    writer.uint32(16).int32(message.code);
    if (message.signal !== undefined && message.signal !== undefined) {
      StringValue.encode({ value: message.signal! }, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(34).string(message.cmd);
    writer.uint32(42).string(message.stdout);
    writer.uint32(50).string(message.stderr);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PaymentError {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePaymentError } as PaymentError;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.killed = reader.bool();
          break;
        case 2:
          message.code = reader.int32();
          break;
        case 3:
          message.signal = StringValue.decode(reader, reader.uint32()).value;
          break;
        case 4:
          message.cmd = reader.string();
          break;
        case 5:
          message.stdout = reader.string();
          break;
        case 6:
          message.stderr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PaymentError {
    const message = { ...basePaymentError } as PaymentError;
    if (object.killed !== undefined && object.killed !== null) {
      message.killed = Boolean(object.killed);
    } else {
      message.killed = false;
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = Number(object.code);
    } else {
      message.code = 0;
    }
    if (object.signal !== undefined && object.signal !== null) {
      message.signal = String(object.signal);
    } else {
      message.signal = undefined;
    }
    if (object.cmd !== undefined && object.cmd !== null) {
      message.cmd = String(object.cmd);
    } else {
      message.cmd = "";
    }
    if (object.stdout !== undefined && object.stdout !== null) {
      message.stdout = String(object.stdout);
    } else {
      message.stdout = "";
    }
    if (object.stderr !== undefined && object.stderr !== null) {
      message.stderr = String(object.stderr);
    } else {
      message.stderr = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<PaymentError>): PaymentError {
    const message = { ...basePaymentError } as PaymentError;
    if (object.killed !== undefined && object.killed !== null) {
      message.killed = object.killed;
    } else {
      message.killed = false;
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = 0;
    }
    if (object.signal !== undefined && object.signal !== null) {
      message.signal = object.signal;
    } else {
      message.signal = undefined;
    }
    if (object.cmd !== undefined && object.cmd !== null) {
      message.cmd = object.cmd;
    } else {
      message.cmd = "";
    }
    if (object.stdout !== undefined && object.stdout !== null) {
      message.stdout = object.stdout;
    } else {
      message.stdout = "";
    }
    if (object.stderr !== undefined && object.stderr !== null) {
      message.stderr = object.stderr;
    } else {
      message.stderr = "";
    }
    return message;
  },
  toJSON(message: PaymentError): unknown {
    const obj: any = {};
    message.killed !== undefined && (obj.killed = message.killed);
    message.code !== undefined && (obj.code = message.code);
    message.signal !== undefined && (obj.signal = message.signal);
    message.cmd !== undefined && (obj.cmd = message.cmd);
    message.stdout !== undefined && (obj.stdout = message.stdout);
    message.stderr !== undefined && (obj.stderr = message.stderr);
    return obj;
  },
};

export const metaSetupRequest: { [key in keyof Required<SetupRequest>]: MetaBase | string } = {
  ip: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  items: {kind:'array', type:{kind:'object', type:'.io.restorecommerce.payment.Item', name:'Item'} as MetaMessage} as MetaArray,
  subtotal: {kind:'builtin', type:'number', original:'int32'} as MetaPrimitive,
  shipping: {kind:'builtin', type:'number', original:'int32'} as MetaPrimitive,
  handling: {kind:'builtin', type:'number', original:'int32'} as MetaPrimitive,
  tax: {kind:'builtin', type:'number', original:'int32'} as MetaPrimitive,
  currency: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  returnUrl: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  cancelReturnUrl: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  allowGuestCheckout: {kind:'builtin', type:'boolean', original:'bool'} as MetaPrimitive,
  provider: {kind:'object', type:'.io.restorecommerce.payment.Provider', name:'Provider'} as MetaMessage,
  subject: {kind:'object', type:'.io.restorecommerce.auth.Subject', name:'Subject'} as MetaMessage,
}
export const metaSetupResponse: { [key in keyof Required<SetupResponse>]: MetaBase | string } = {
  paymentErrors: {kind:'array', type:{kind:'object', type:'.io.restorecommerce.payment.PaymentError', name:'PaymentError'} as MetaMessage} as MetaArray,
  token: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  confirmInitiationUrl: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  initiatedOn: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
}
export const metaPaymentRequest: { [key in keyof Required<PaymentRequest>]: MetaBase | string } = {
  provider: {kind:'object', type:'.io.restorecommerce.payment.Provider', name:'Provider'} as MetaMessage,
  paymentSum: {kind:'builtin', type:'number', original:'int32'} as MetaPrimitive,
  currency: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  paymentId: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  payerId: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  token: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  subject: {kind:'object', type:'.io.restorecommerce.auth.Subject', name:'Subject'} as MetaMessage,
}
export const metaCaptureRequest: { [key in keyof Required<CaptureRequest>]: MetaBase | string } = {
  provider: {kind:'object', type:'.io.restorecommerce.payment.Provider', name:'Provider'} as MetaMessage,
  paymentSum: {kind:'builtin', type:'number', original:'int32'} as MetaPrimitive,
  currency: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  paymentId: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  subject: {kind:'object', type:'.io.restorecommerce.auth.Subject', name:'Subject'} as MetaMessage,
}
export const metaPaymentResponse: { [key in keyof Required<PaymentResponse>]: MetaBase | string } = {
  paymentErrors: {kind:'array', type:{kind:'object', type:'.io.restorecommerce.payment.PaymentError', name:'PaymentError'} as MetaMessage} as MetaArray,
  paymentId: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  executedOn: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
}
export const metaPaymentCard: { [key in keyof Required<PaymentCard>]: MetaBase | string } = {
  primaryNumber: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  firstName: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  lastName: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  month: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  year: {kind:'builtin', type:'number', original:'int32'} as MetaPrimitive,
  verificationValue: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
}
export const metaItem: { [key in keyof Required<Item>]: MetaBase | string } = {
  name: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  description: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  quantity: {kind:'builtin', type:'number', original:'int32'} as MetaPrimitive,
  amount: {kind:'builtin', type:'number', original:'int32'} as MetaPrimitive,
}
export const metaPaymentError: { [key in keyof Required<PaymentError>]: MetaBase | string } = {
  killed: {kind:'builtin', type:'boolean', original:'bool'} as MetaPrimitive,
  code: {kind:'builtin', type:'number', original:'int32'} as MetaPrimitive,
  signal: {kind:'builtin', type:'string', original:'.google.protobuf.StringValue'} as MetaPrimitive,
  cmd: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  stdout: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  stderr: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
}
export const metaService: { [key in keyof Service]: MetaService<any, any> } = {
  SetupAuthorization: {request: {kind:'object', type:'.io.restorecommerce.payment.SetupRequest', name:'SetupRequest'} as MetaMessage, response: {kind:'object', type:'.io.restorecommerce.payment.SetupResponse', name:'SetupResponse'} as MetaMessage, clientStreaming: false, serverStreaming: false, encodeRequest: SetupRequest.encode, decodeResponse: SetupResponse.decode} as MetaService<SetupRequest, SetupResponse>,
  SetupPurchase: {request: {kind:'object', type:'.io.restorecommerce.payment.SetupRequest', name:'SetupRequest'} as MetaMessage, response: {kind:'object', type:'.io.restorecommerce.payment.SetupResponse', name:'SetupResponse'} as MetaMessage, clientStreaming: false, serverStreaming: false, encodeRequest: SetupRequest.encode, decodeResponse: SetupResponse.decode} as MetaService<SetupRequest, SetupResponse>,
  Authorize: {request: {kind:'object', type:'.io.restorecommerce.payment.PaymentRequest', name:'PaymentRequest'} as MetaMessage, response: {kind:'object', type:'.io.restorecommerce.payment.PaymentResponse', name:'PaymentResponse'} as MetaMessage, clientStreaming: false, serverStreaming: false, encodeRequest: PaymentRequest.encode, decodeResponse: PaymentResponse.decode} as MetaService<PaymentRequest, PaymentResponse>,
  Purchase: {request: {kind:'object', type:'.io.restorecommerce.payment.PaymentRequest', name:'PaymentRequest'} as MetaMessage, response: {kind:'object', type:'.io.restorecommerce.payment.PaymentResponse', name:'PaymentResponse'} as MetaMessage, clientStreaming: false, serverStreaming: false, encodeRequest: PaymentRequest.encode, decodeResponse: PaymentResponse.decode} as MetaService<PaymentRequest, PaymentResponse>,
  Capture: {request: {kind:'object', type:'.io.restorecommerce.payment.CaptureRequest', name:'CaptureRequest'} as MetaMessage, response: {kind:'object', type:'.io.restorecommerce.payment.PaymentResponse', name:'PaymentResponse'} as MetaMessage, clientStreaming: false, serverStreaming: false, encodeRequest: CaptureRequest.encode, decodeResponse: PaymentResponse.decode} as MetaService<CaptureRequest, PaymentResponse>,
}
export const metadata: { [key: string]: ['service', string, any, { [key: string]: MetaService<any, any> }] | ['enum', string, any, any] | ['message', string, any, { [key: string]: MetaBase | string }] } = {
  Provider: ['enum', '.io.restorecommerce.payment.Provider', Provider, undefined],
  PaymentIdType: ['enum', '.io.restorecommerce.payment.PaymentIdType', PaymentIdType, undefined],
  SetupRequest: ['message', '.io.restorecommerce.payment.SetupRequest', SetupRequest, metaSetupRequest],
  SetupResponse: ['message', '.io.restorecommerce.payment.SetupResponse', SetupResponse, metaSetupResponse],
  PaymentRequest: ['message', '.io.restorecommerce.payment.PaymentRequest', PaymentRequest, metaPaymentRequest],
  CaptureRequest: ['message', '.io.restorecommerce.payment.CaptureRequest', CaptureRequest, metaCaptureRequest],
  PaymentResponse: ['message', '.io.restorecommerce.payment.PaymentResponse', PaymentResponse, metaPaymentResponse],
  PaymentCard: ['message', '.io.restorecommerce.payment.PaymentCard', PaymentCard, metaPaymentCard],
  Item: ['message', '.io.restorecommerce.payment.Item', Item, metaItem],
  PaymentError: ['message', '.io.restorecommerce.payment.PaymentError', PaymentError, metaPaymentError],
  Service: ['service', '.io.restorecommerce.payment.Service', undefined, metaService],
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