/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { protoMetadata as protoMetadata3, Subject } from "./auth";
import { Meta, protoMetadata as protoMetadata2 } from "./meta";
import { protoMetadata as protoMetadata5 } from "./options";
import { DeleteRequest, DeleteResponse, protoMetadata as protoMetadata1, ReadRequest } from "./resource_base";
import { OperationStatus, protoMetadata as protoMetadata4, Status } from "./status";

export const protobufPackage = "io.restorecommerce.currency";

export interface Deleted {
  id: string;
}

export interface CurrencyList {
  items: Currency[];
  total_count?: number | undefined;
  subject?: Subject;
}

export interface CurrencyListResponse {
  items: CurrencyResponse[];
  total_count: number;
  operation_status?: OperationStatus;
}

export interface CurrencyResponse {
  payload?: Currency;
  status?: Status;
}

export interface Currency {
  id?: string | undefined;
  meta?: Meta | undefined;
  name?: string | undefined;
  symbol?: string | undefined;
  country_id?:
    | string
    | undefined;
  /**
   * For custom exchange rates beyond market.
   * Regular rates are retrived from API by calling QueryExchangeRate.
   */
  custom_exchange_rates: ExchangeRate[];
}

export interface ExchangeRate {
  to_currency_id?: string | undefined;
  rate?:
    | number
    | undefined;
  /** fees */
  expenses?:
    | number
    | undefined;
  /** leave empty == 1.0 */
  amount?: number | undefined;
}

export interface ExchangeRateQuery {
  from_currency_id?: string | undefined;
  to_currency_id?:
    | string
    | undefined;
  /** now in general case */
  datetime?:
    | number
    | undefined;
  /** leave empty == 1.0 */
  amount?: number | undefined;
}

export interface ExchangeRateQueryList {
  items: ExchangeRate[];
  total_count?: number | undefined;
  subject?: Subject;
}

export interface ExchangeRateResponse {
  from_currency_id?: string | undefined;
  payload?: ExchangeRate;
  timestamp?: number | undefined;
  status?: Status;
}

export interface ExchangeRateListResponse {
  items: ExchangeRateResponse[];
  operation_status?: OperationStatus;
}

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

  create(base?: DeepPartial<Deleted>): Deleted {
    return Deleted.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Deleted>): Deleted {
    const message = createBaseDeleted();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseCurrencyList(): CurrencyList {
  return { items: [], total_count: undefined, subject: undefined };
}

export const CurrencyList = {
  encode(message: CurrencyList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      Currency.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== undefined) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CurrencyList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrencyList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Currency.decode(reader, reader.uint32()));
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

  fromJSON(object: any): CurrencyList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => Currency.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: CurrencyList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? Currency.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CurrencyList>): CurrencyList {
    return CurrencyList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CurrencyList>): CurrencyList {
    const message = createBaseCurrencyList();
    message.items = object.items?.map((e) => Currency.fromPartial(e)) || [];
    message.total_count = object.total_count ?? undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseCurrencyListResponse(): CurrencyListResponse {
  return { items: [], total_count: 0, operation_status: undefined };
}

export const CurrencyListResponse = {
  encode(message: CurrencyListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      CurrencyResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(message.operation_status, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CurrencyListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrencyListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(CurrencyResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): CurrencyListResponse {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => CurrencyResponse.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      operation_status: isSet(object.operation_status) ? OperationStatus.fromJSON(object.operation_status) : undefined,
    };
  },

  toJSON(message: CurrencyListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? CurrencyResponse.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status ? OperationStatus.toJSON(message.operation_status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CurrencyListResponse>): CurrencyListResponse {
    return CurrencyListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CurrencyListResponse>): CurrencyListResponse {
    const message = createBaseCurrencyListResponse();
    message.items = object.items?.map((e) => CurrencyResponse.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.operation_status = (object.operation_status !== undefined && object.operation_status !== null)
      ? OperationStatus.fromPartial(object.operation_status)
      : undefined;
    return message;
  },
};

function createBaseCurrencyResponse(): CurrencyResponse {
  return { payload: undefined, status: undefined };
}

export const CurrencyResponse = {
  encode(message: CurrencyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      Currency.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CurrencyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrencyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = Currency.decode(reader, reader.uint32());
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

  fromJSON(object: any): CurrencyResponse {
    return {
      payload: isSet(object.payload) ? Currency.fromJSON(object.payload) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: CurrencyResponse): unknown {
    const obj: any = {};
    message.payload !== undefined && (obj.payload = message.payload ? Currency.toJSON(message.payload) : undefined);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CurrencyResponse>): CurrencyResponse {
    return CurrencyResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CurrencyResponse>): CurrencyResponse {
    const message = createBaseCurrencyResponse();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? Currency.fromPartial(object.payload)
      : undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBaseCurrency(): Currency {
  return {
    id: undefined,
    meta: undefined,
    name: undefined,
    symbol: undefined,
    country_id: undefined,
    custom_exchange_rates: [],
  };
}

export const Currency = {
  encode(message: Currency, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    if (message.name !== undefined) {
      writer.uint32(26).string(message.name);
    }
    if (message.symbol !== undefined) {
      writer.uint32(34).string(message.symbol);
    }
    if (message.country_id !== undefined) {
      writer.uint32(42).string(message.country_id);
    }
    for (const v of message.custom_exchange_rates) {
      ExchangeRate.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Currency {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrency();
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
          message.symbol = reader.string();
          break;
        case 5:
          message.country_id = reader.string();
          break;
        case 6:
          message.custom_exchange_rates.push(ExchangeRate.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Currency {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      symbol: isSet(object.symbol) ? String(object.symbol) : undefined,
      country_id: isSet(object.country_id) ? String(object.country_id) : undefined,
      custom_exchange_rates: Array.isArray(object?.custom_exchange_rates)
        ? object.custom_exchange_rates.map((e: any) => ExchangeRate.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Currency): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.country_id !== undefined && (obj.country_id = message.country_id);
    if (message.custom_exchange_rates) {
      obj.custom_exchange_rates = message.custom_exchange_rates.map((e) => e ? ExchangeRate.toJSON(e) : undefined);
    } else {
      obj.custom_exchange_rates = [];
    }
    return obj;
  },

  create(base?: DeepPartial<Currency>): Currency {
    return Currency.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Currency>): Currency {
    const message = createBaseCurrency();
    message.id = object.id ?? undefined;
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    message.name = object.name ?? undefined;
    message.symbol = object.symbol ?? undefined;
    message.country_id = object.country_id ?? undefined;
    message.custom_exchange_rates = object.custom_exchange_rates?.map((e) => ExchangeRate.fromPartial(e)) || [];
    return message;
  },
};

function createBaseExchangeRate(): ExchangeRate {
  return { to_currency_id: undefined, rate: undefined, expenses: undefined, amount: undefined };
}

export const ExchangeRate = {
  encode(message: ExchangeRate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.to_currency_id !== undefined) {
      writer.uint32(10).string(message.to_currency_id);
    }
    if (message.rate !== undefined) {
      writer.uint32(25).double(message.rate);
    }
    if (message.expenses !== undefined) {
      writer.uint32(33).double(message.expenses);
    }
    if (message.amount !== undefined) {
      writer.uint32(41).double(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExchangeRate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExchangeRate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.to_currency_id = reader.string();
          break;
        case 3:
          message.rate = reader.double();
          break;
        case 4:
          message.expenses = reader.double();
          break;
        case 5:
          message.amount = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExchangeRate {
    return {
      to_currency_id: isSet(object.to_currency_id) ? String(object.to_currency_id) : undefined,
      rate: isSet(object.rate) ? Number(object.rate) : undefined,
      expenses: isSet(object.expenses) ? Number(object.expenses) : undefined,
      amount: isSet(object.amount) ? Number(object.amount) : undefined,
    };
  },

  toJSON(message: ExchangeRate): unknown {
    const obj: any = {};
    message.to_currency_id !== undefined && (obj.to_currency_id = message.to_currency_id);
    message.rate !== undefined && (obj.rate = message.rate);
    message.expenses !== undefined && (obj.expenses = message.expenses);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  create(base?: DeepPartial<ExchangeRate>): ExchangeRate {
    return ExchangeRate.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ExchangeRate>): ExchangeRate {
    const message = createBaseExchangeRate();
    message.to_currency_id = object.to_currency_id ?? undefined;
    message.rate = object.rate ?? undefined;
    message.expenses = object.expenses ?? undefined;
    message.amount = object.amount ?? undefined;
    return message;
  },
};

function createBaseExchangeRateQuery(): ExchangeRateQuery {
  return { from_currency_id: undefined, to_currency_id: undefined, datetime: undefined, amount: undefined };
}

export const ExchangeRateQuery = {
  encode(message: ExchangeRateQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from_currency_id !== undefined) {
      writer.uint32(10).string(message.from_currency_id);
    }
    if (message.to_currency_id !== undefined) {
      writer.uint32(18).string(message.to_currency_id);
    }
    if (message.datetime !== undefined) {
      writer.uint32(25).double(message.datetime);
    }
    if (message.amount !== undefined) {
      writer.uint32(33).double(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExchangeRateQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExchangeRateQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from_currency_id = reader.string();
          break;
        case 2:
          message.to_currency_id = reader.string();
          break;
        case 3:
          message.datetime = reader.double();
          break;
        case 4:
          message.amount = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExchangeRateQuery {
    return {
      from_currency_id: isSet(object.from_currency_id) ? String(object.from_currency_id) : undefined,
      to_currency_id: isSet(object.to_currency_id) ? String(object.to_currency_id) : undefined,
      datetime: isSet(object.datetime) ? Number(object.datetime) : undefined,
      amount: isSet(object.amount) ? Number(object.amount) : undefined,
    };
  },

  toJSON(message: ExchangeRateQuery): unknown {
    const obj: any = {};
    message.from_currency_id !== undefined && (obj.from_currency_id = message.from_currency_id);
    message.to_currency_id !== undefined && (obj.to_currency_id = message.to_currency_id);
    message.datetime !== undefined && (obj.datetime = message.datetime);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  create(base?: DeepPartial<ExchangeRateQuery>): ExchangeRateQuery {
    return ExchangeRateQuery.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ExchangeRateQuery>): ExchangeRateQuery {
    const message = createBaseExchangeRateQuery();
    message.from_currency_id = object.from_currency_id ?? undefined;
    message.to_currency_id = object.to_currency_id ?? undefined;
    message.datetime = object.datetime ?? undefined;
    message.amount = object.amount ?? undefined;
    return message;
  },
};

function createBaseExchangeRateQueryList(): ExchangeRateQueryList {
  return { items: [], total_count: undefined, subject: undefined };
}

export const ExchangeRateQueryList = {
  encode(message: ExchangeRateQueryList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      ExchangeRate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== undefined) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExchangeRateQueryList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExchangeRateQueryList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(ExchangeRate.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ExchangeRateQueryList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => ExchangeRate.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: ExchangeRateQueryList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? ExchangeRate.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ExchangeRateQueryList>): ExchangeRateQueryList {
    return ExchangeRateQueryList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ExchangeRateQueryList>): ExchangeRateQueryList {
    const message = createBaseExchangeRateQueryList();
    message.items = object.items?.map((e) => ExchangeRate.fromPartial(e)) || [];
    message.total_count = object.total_count ?? undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseExchangeRateResponse(): ExchangeRateResponse {
  return { from_currency_id: undefined, payload: undefined, timestamp: undefined, status: undefined };
}

export const ExchangeRateResponse = {
  encode(message: ExchangeRateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from_currency_id !== undefined) {
      writer.uint32(10).string(message.from_currency_id);
    }
    if (message.payload !== undefined) {
      ExchangeRate.encode(message.payload, writer.uint32(26).fork()).ldelim();
    }
    if (message.timestamp !== undefined) {
      writer.uint32(17).double(message.timestamp);
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExchangeRateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExchangeRateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from_currency_id = reader.string();
          break;
        case 3:
          message.payload = ExchangeRate.decode(reader, reader.uint32());
          break;
        case 2:
          message.timestamp = reader.double();
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

  fromJSON(object: any): ExchangeRateResponse {
    return {
      from_currency_id: isSet(object.from_currency_id) ? String(object.from_currency_id) : undefined,
      payload: isSet(object.payload) ? ExchangeRate.fromJSON(object.payload) : undefined,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: ExchangeRateResponse): unknown {
    const obj: any = {};
    message.from_currency_id !== undefined && (obj.from_currency_id = message.from_currency_id);
    message.payload !== undefined && (obj.payload = message.payload ? ExchangeRate.toJSON(message.payload) : undefined);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ExchangeRateResponse>): ExchangeRateResponse {
    return ExchangeRateResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ExchangeRateResponse>): ExchangeRateResponse {
    const message = createBaseExchangeRateResponse();
    message.from_currency_id = object.from_currency_id ?? undefined;
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? ExchangeRate.fromPartial(object.payload)
      : undefined;
    message.timestamp = object.timestamp ?? undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBaseExchangeRateListResponse(): ExchangeRateListResponse {
  return { items: [], operation_status: undefined };
}

export const ExchangeRateListResponse = {
  encode(message: ExchangeRateListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      ExchangeRateResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(message.operation_status, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExchangeRateListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExchangeRateListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(ExchangeRateResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ExchangeRateListResponse {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => ExchangeRateResponse.fromJSON(e)) : [],
      operation_status: isSet(object.operation_status) ? OperationStatus.fromJSON(object.operation_status) : undefined,
    };
  },

  toJSON(message: ExchangeRateListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? ExchangeRateResponse.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status ? OperationStatus.toJSON(message.operation_status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ExchangeRateListResponse>): ExchangeRateListResponse {
    return ExchangeRateListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ExchangeRateListResponse>): ExchangeRateListResponse {
    const message = createBaseExchangeRateListResponse();
    message.items = object.items?.map((e) => ExchangeRateResponse.fromPartial(e)) || [];
    message.operation_status = (object.operation_status !== undefined && object.operation_status !== null)
      ? OperationStatus.fromPartial(object.operation_status)
      : undefined;
    return message;
  },
};

/** Microservice definition. */
export type CurrencyServiceDefinition = typeof CurrencyServiceDefinition;
export const CurrencyServiceDefinition = {
  name: "CurrencyService",
  fullName: "io.restorecommerce.currency.CurrencyService",
  methods: {
    read: {
      name: "Read",
      requestType: ReadRequest,
      requestStream: false,
      responseType: CurrencyListResponse,
      responseStream: false,
      options: {},
    },
    create: {
      name: "Create",
      requestType: CurrencyList,
      requestStream: false,
      responseType: CurrencyListResponse,
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
    update: {
      name: "Update",
      requestType: CurrencyList,
      requestStream: false,
      responseType: CurrencyListResponse,
      responseStream: false,
      options: {},
    },
    upsert: {
      name: "Upsert",
      requestType: CurrencyList,
      requestStream: false,
      responseType: CurrencyListResponse,
      responseStream: false,
      options: {},
    },
    queryExchangeRate: {
      name: "QueryExchangeRate",
      requestType: ExchangeRateQueryList,
      requestStream: false,
      responseType: ExchangeRateListResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface CurrencyServiceImplementation<CallContextExt = {}> {
  read(request: ReadRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CurrencyListResponse>>;
  create(request: CurrencyList, context: CallContext & CallContextExt): Promise<DeepPartial<CurrencyListResponse>>;
  delete(request: DeleteRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteResponse>>;
  update(request: CurrencyList, context: CallContext & CallContextExt): Promise<DeepPartial<CurrencyListResponse>>;
  upsert(request: CurrencyList, context: CallContext & CallContextExt): Promise<DeepPartial<CurrencyListResponse>>;
  queryExchangeRate(
    request: ExchangeRateQueryList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ExchangeRateListResponse>>;
}

export interface CurrencyServiceClient<CallOptionsExt = {}> {
  read(request: DeepPartial<ReadRequest>, options?: CallOptions & CallOptionsExt): Promise<CurrencyListResponse>;
  create(request: DeepPartial<CurrencyList>, options?: CallOptions & CallOptionsExt): Promise<CurrencyListResponse>;
  delete(request: DeepPartial<DeleteRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteResponse>;
  update(request: DeepPartial<CurrencyList>, options?: CallOptions & CallOptionsExt): Promise<CurrencyListResponse>;
  upsert(request: DeepPartial<CurrencyList>, options?: CallOptions & CallOptionsExt): Promise<CurrencyListResponse>;
  queryExchangeRate(
    request: DeepPartial<ExchangeRateQueryList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ExchangeRateListResponse>;
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
    "name": "io/restorecommerce/currency.proto",
    "package": "io.restorecommerce.currency",
    "dependency": [
      "io/restorecommerce/resource_base.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/options.proto",
    ],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "Deleted",
      "field": [{
        "name": "id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "id",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "CurrencyList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.currency.Currency",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "items",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "total_count",
        "number": 2,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "totalCount",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "subject",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.auth.Subject",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "subject",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_total_count", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "CurrencyListResponse",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.currency.CurrencyResponse",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "items",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "total_count",
        "number": 2,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "totalCount",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "operation_status",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.status.OperationStatus",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "operationStatus",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "CurrencyResponse",
      "field": [{
        "name": "payload",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.currency.Currency",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "payload",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "status",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.status.Status",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "status",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "Currency",
      "field": [{
        "name": "id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "id",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "meta",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.meta.Meta",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "meta",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "name",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "symbol",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "symbol",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "country_id",
        "number": 5,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "countryId",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "custom_exchange_rates",
        "number": 6,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.currency.ExchangeRate",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "customExchangeRates",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "_id", "options": undefined },
        { "name": "_meta", "options": undefined },
        { "name": "_name", "options": undefined },
        { "name": "_symbol", "options": undefined },
        { "name": "_country_id", "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ExchangeRate",
      "field": [{
        "name": "to_currency_id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "toCurrencyId",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "rate",
        "number": 3,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "rate",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "expenses",
        "number": 4,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "expenses",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "amount",
        "number": 5,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "amount",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_to_currency_id", "options": undefined }, { "name": "_rate", "options": undefined }, {
        "name": "_expenses",
        "options": undefined,
      }, { "name": "_amount", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ExchangeRateQuery",
      "field": [{
        "name": "from_currency_id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "fromCurrencyId",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "to_currency_id",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "toCurrencyId",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "datetime",
        "number": 3,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "datetime",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "amount",
        "number": 4,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "amount",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "_from_currency_id", "options": undefined },
        { "name": "_to_currency_id", "options": undefined },
        { "name": "_datetime", "options": undefined },
        { "name": "_amount", "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ExchangeRateQueryList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.currency.ExchangeRate",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "items",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "total_count",
        "number": 2,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "totalCount",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "subject",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.auth.Subject",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "subject",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_total_count", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ExchangeRateResponse",
      "field": [{
        "name": "from_currency_id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "fromCurrencyId",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "payload",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.currency.ExchangeRate",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "payload",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "timestamp",
        "number": 2,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "timestamp",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "status",
        "number": 4,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.status.Status",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "status",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_from_currency_id", "options": undefined }, {
        "name": "_timestamp",
        "options": undefined,
      }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ExchangeRateListResponse",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.currency.ExchangeRateResponse",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "items",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "operation_status",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.status.OperationStatus",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "operationStatus",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "enumType": [],
    "service": [{
      "name": "CurrencyService",
      "method": [{
        "name": "Read",
        "inputType": ".io.restorecommerce.resourcebase.ReadRequest",
        "outputType": ".io.restorecommerce.currency.CurrencyListResponse",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Create",
        "inputType": ".io.restorecommerce.currency.CurrencyList",
        "outputType": ".io.restorecommerce.currency.CurrencyListResponse",
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
        "name": "Update",
        "inputType": ".io.restorecommerce.currency.CurrencyList",
        "outputType": ".io.restorecommerce.currency.CurrencyListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Upsert",
        "inputType": ".io.restorecommerce.currency.CurrencyList",
        "outputType": ".io.restorecommerce.currency.CurrencyListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "QueryExchangeRate",
        "inputType": ".io.restorecommerce.currency.ExchangeRateQueryList",
        "outputType": ".io.restorecommerce.currency.ExchangeRateListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }],
      "options": undefined,
    }],
    "extension": [],
    "options": undefined,
    "sourceCodeInfo": {
      "location": [{
        "path": [6, 0],
        "span": [13, 0, 22, 1],
        "leadingComments": "\n Microservice definition.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 4, 2, 5],
        "span": [55, 2, 50],
        "leadingComments":
          "\n For custom exchange rates beyond market.\n Regular rates are retrived from API by calling QueryExchangeRate.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 5, 2, 2],
        "span": [61, 2, 31],
        "leadingComments": "",
        "trailingComments": "fees\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 5, 2, 3],
        "span": [62, 2, 29],
        "leadingComments": "",
        "trailingComments": " leave empty == 1.0\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 6, 2, 2],
        "span": [68, 2, 31],
        "leadingComments": "",
        "trailingComments": " now in general case\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 6, 2, 3],
        "span": [69, 2, 29],
        "leadingComments": "",
        "trailingComments": " leave empty == 1.0\n",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {
    ".io.restorecommerce.currency.Deleted": Deleted,
    ".io.restorecommerce.currency.CurrencyList": CurrencyList,
    ".io.restorecommerce.currency.CurrencyListResponse": CurrencyListResponse,
    ".io.restorecommerce.currency.CurrencyResponse": CurrencyResponse,
    ".io.restorecommerce.currency.Currency": Currency,
    ".io.restorecommerce.currency.ExchangeRate": ExchangeRate,
    ".io.restorecommerce.currency.ExchangeRateQuery": ExchangeRateQuery,
    ".io.restorecommerce.currency.ExchangeRateQueryList": ExchangeRateQueryList,
    ".io.restorecommerce.currency.ExchangeRateResponse": ExchangeRateResponse,
    ".io.restorecommerce.currency.ExchangeRateListResponse": ExchangeRateListResponse,
  },
  dependencies: [protoMetadata1, protoMetadata2, protoMetadata3, protoMetadata4, protoMetadata5],
  options: { services: { "CurrencyService": { options: undefined, methods: { "Read": { "is_query": true } } } } },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
