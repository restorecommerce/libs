/* eslint-disable */
import { Subject, ApiKey } from '../../io/restorecommerce/auth';
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
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
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
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
}

/**
 *  Request object for capture call for both standard and cardless payments.
 */
export interface CaptureRequest {
  provider: Provider;
  paymentSum: number;
  currency: string;
  paymentId: string;
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
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

/**  Possible service providers. Provider names must be exactly as in config.yml.
 */
export enum Provider {
  NO_PROVIDER = 0,
  PaypalExpressGateway = 1,
  AuthorizeNetGateway = 2,
  UNRECOGNIZED = -1,
}

/**  Possible payment identifiers.
 */
export enum PaymentIdType {
  NO_IDENTIFIER_TYPE = 0,
  TOKEN = 1,
  TRANSACTION_ID = 2,
  UNRECOGNIZED = -1,
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
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(98).fork()).ldelim();
    }
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(106).fork()).ldelim();
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
        case 13:
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
};

export const PaymentRequest = {
  encode(message: PaymentRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.provider);
    writer.uint32(16).int32(message.paymentSum);
    writer.uint32(26).string(message.currency);
    writer.uint32(34).string(message.paymentId);
    writer.uint32(42).string(message.payerId);
    writer.uint32(50).string(message.token);
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(58).fork()).ldelim();
    }
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(66).fork()).ldelim();
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
        case 8:
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

export const CaptureRequest = {
  encode(message: CaptureRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.provider);
    writer.uint32(16).int32(message.paymentSum);
    writer.uint32(26).string(message.currency);
    writer.uint32(34).string(message.paymentId);
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(42).fork()).ldelim();
    }
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(50).fork()).ldelim();
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
        case 6:
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
};
