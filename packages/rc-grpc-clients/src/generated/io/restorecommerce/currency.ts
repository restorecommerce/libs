/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { protoMetadata as protoMetadata6, Timestamp } from "../../google/protobuf/timestamp";
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
  totalCount?: number | undefined;
  subject?: Subject | undefined;
}

export interface CurrencyListResponse {
  items: CurrencyResponse[];
  totalCount: number;
  operationStatus?: OperationStatus | undefined;
}

export interface CurrencyResponse {
  payload?: Currency | undefined;
  status?: Status | undefined;
}

export interface Currency {
  id?: string | undefined;
  meta?: Meta | undefined;
  name?: string | undefined;
  symbol?: string | undefined;
  countryId?:
    | string
    | undefined;
  /**
   * For custom exchange rates beyond market.
   * Regular rates are retrived from API by calling QueryExchangeRate.
   */
  customExchangeRates: ExchangeRate[];
}

export interface ExchangeRate {
  toCurrencyId?: string | undefined;
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
  fromCurrencyId?: string | undefined;
  toCurrencyId?:
    | string
    | undefined;
  /** now in general case */
  datetime?:
    | Date
    | undefined;
  /** leave empty == 1.0 */
  amount?: number | undefined;
}

export interface ExchangeRateQueryList {
  items: ExchangeRate[];
  totalCount?: number | undefined;
  subject?: Subject | undefined;
}

export interface ExchangeRateResponse {
  fromCurrencyId?: string | undefined;
  payload?: ExchangeRate | undefined;
  timestamp?: Date | undefined;
  status?: Status | undefined;
}

export interface ExchangeRateListResponse {
  items: ExchangeRateResponse[];
  operationStatus?: OperationStatus | undefined;
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
  return { items: [], totalCount: undefined, subject: undefined };
}

export const CurrencyList = {
  encode(message: CurrencyList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      Currency.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== undefined) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CurrencyList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrencyList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(Currency.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.totalCount = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CurrencyList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => Currency.fromJSON(e)) : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : undefined,
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
    message.totalCount !== undefined && (obj.totalCount = Math.round(message.totalCount));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CurrencyList>): CurrencyList {
    return CurrencyList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CurrencyList>): CurrencyList {
    const message = createBaseCurrencyList();
    message.items = object.items?.map((e) => Currency.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseCurrencyListResponse(): CurrencyListResponse {
  return { items: [], totalCount: 0, operationStatus: undefined };
}

export const CurrencyListResponse = {
  encode(message: CurrencyListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      CurrencyResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.operationStatus !== undefined) {
      OperationStatus.encode(message.operationStatus, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CurrencyListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrencyListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(CurrencyResponse.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.totalCount = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.operationStatus = OperationStatus.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CurrencyListResponse {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => CurrencyResponse.fromJSON(e)) : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
      operationStatus: isSet(object.operationStatus) ? OperationStatus.fromJSON(object.operationStatus) : undefined,
    };
  },

  toJSON(message: CurrencyListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? CurrencyResponse.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = Math.round(message.totalCount));
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus ? OperationStatus.toJSON(message.operationStatus) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CurrencyListResponse>): CurrencyListResponse {
    return CurrencyListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CurrencyListResponse>): CurrencyListResponse {
    const message = createBaseCurrencyListResponse();
    message.items = object.items?.map((e) => CurrencyResponse.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    message.operationStatus = (object.operationStatus !== undefined && object.operationStatus !== null)
      ? OperationStatus.fromPartial(object.operationStatus)
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrencyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payload = Currency.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.status = Status.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    countryId: undefined,
    customExchangeRates: [],
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
    if (message.countryId !== undefined) {
      writer.uint32(42).string(message.countryId);
    }
    for (const v of message.customExchangeRates) {
      ExchangeRate.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Currency {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrency();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.meta = Meta.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.symbol = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.countryId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.customExchangeRates.push(ExchangeRate.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Currency {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      symbol: isSet(object.symbol) ? String(object.symbol) : undefined,
      countryId: isSet(object.countryId) ? String(object.countryId) : undefined,
      customExchangeRates: Array.isArray(object?.customExchangeRates)
        ? object.customExchangeRates.map((e: any) => ExchangeRate.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Currency): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.countryId !== undefined && (obj.countryId = message.countryId);
    if (message.customExchangeRates) {
      obj.customExchangeRates = message.customExchangeRates.map((e) => e ? ExchangeRate.toJSON(e) : undefined);
    } else {
      obj.customExchangeRates = [];
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
    message.countryId = object.countryId ?? undefined;
    message.customExchangeRates = object.customExchangeRates?.map((e) => ExchangeRate.fromPartial(e)) || [];
    return message;
  },
};

function createBaseExchangeRate(): ExchangeRate {
  return { toCurrencyId: undefined, rate: undefined, expenses: undefined, amount: undefined };
}

export const ExchangeRate = {
  encode(message: ExchangeRate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.toCurrencyId !== undefined) {
      writer.uint32(10).string(message.toCurrencyId);
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExchangeRate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.toCurrencyId = reader.string();
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.rate = reader.double();
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.expenses = reader.double();
          continue;
        case 5:
          if (tag !== 41) {
            break;
          }

          message.amount = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExchangeRate {
    return {
      toCurrencyId: isSet(object.toCurrencyId) ? String(object.toCurrencyId) : undefined,
      rate: isSet(object.rate) ? Number(object.rate) : undefined,
      expenses: isSet(object.expenses) ? Number(object.expenses) : undefined,
      amount: isSet(object.amount) ? Number(object.amount) : undefined,
    };
  },

  toJSON(message: ExchangeRate): unknown {
    const obj: any = {};
    message.toCurrencyId !== undefined && (obj.toCurrencyId = message.toCurrencyId);
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
    message.toCurrencyId = object.toCurrencyId ?? undefined;
    message.rate = object.rate ?? undefined;
    message.expenses = object.expenses ?? undefined;
    message.amount = object.amount ?? undefined;
    return message;
  },
};

function createBaseExchangeRateQuery(): ExchangeRateQuery {
  return { fromCurrencyId: undefined, toCurrencyId: undefined, datetime: undefined, amount: undefined };
}

export const ExchangeRateQuery = {
  encode(message: ExchangeRateQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromCurrencyId !== undefined) {
      writer.uint32(10).string(message.fromCurrencyId);
    }
    if (message.toCurrencyId !== undefined) {
      writer.uint32(18).string(message.toCurrencyId);
    }
    if (message.datetime !== undefined) {
      Timestamp.encode(toTimestamp(message.datetime), writer.uint32(26).fork()).ldelim();
    }
    if (message.amount !== undefined) {
      writer.uint32(33).double(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExchangeRateQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExchangeRateQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fromCurrencyId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.toCurrencyId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.datetime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.amount = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExchangeRateQuery {
    return {
      fromCurrencyId: isSet(object.fromCurrencyId) ? String(object.fromCurrencyId) : undefined,
      toCurrencyId: isSet(object.toCurrencyId) ? String(object.toCurrencyId) : undefined,
      datetime: isSet(object.datetime) ? fromJsonTimestamp(object.datetime) : undefined,
      amount: isSet(object.amount) ? Number(object.amount) : undefined,
    };
  },

  toJSON(message: ExchangeRateQuery): unknown {
    const obj: any = {};
    message.fromCurrencyId !== undefined && (obj.fromCurrencyId = message.fromCurrencyId);
    message.toCurrencyId !== undefined && (obj.toCurrencyId = message.toCurrencyId);
    message.datetime !== undefined && (obj.datetime = message.datetime.toISOString());
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  create(base?: DeepPartial<ExchangeRateQuery>): ExchangeRateQuery {
    return ExchangeRateQuery.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ExchangeRateQuery>): ExchangeRateQuery {
    const message = createBaseExchangeRateQuery();
    message.fromCurrencyId = object.fromCurrencyId ?? undefined;
    message.toCurrencyId = object.toCurrencyId ?? undefined;
    message.datetime = object.datetime ?? undefined;
    message.amount = object.amount ?? undefined;
    return message;
  },
};

function createBaseExchangeRateQueryList(): ExchangeRateQueryList {
  return { items: [], totalCount: undefined, subject: undefined };
}

export const ExchangeRateQueryList = {
  encode(message: ExchangeRateQueryList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      ExchangeRate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== undefined) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExchangeRateQueryList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExchangeRateQueryList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(ExchangeRate.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.totalCount = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExchangeRateQueryList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => ExchangeRate.fromJSON(e)) : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : undefined,
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
    message.totalCount !== undefined && (obj.totalCount = Math.round(message.totalCount));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ExchangeRateQueryList>): ExchangeRateQueryList {
    return ExchangeRateQueryList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ExchangeRateQueryList>): ExchangeRateQueryList {
    const message = createBaseExchangeRateQueryList();
    message.items = object.items?.map((e) => ExchangeRate.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseExchangeRateResponse(): ExchangeRateResponse {
  return { fromCurrencyId: undefined, payload: undefined, timestamp: undefined, status: undefined };
}

export const ExchangeRateResponse = {
  encode(message: ExchangeRateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromCurrencyId !== undefined) {
      writer.uint32(10).string(message.fromCurrencyId);
    }
    if (message.payload !== undefined) {
      ExchangeRate.encode(message.payload, writer.uint32(26).fork()).ldelim();
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(18).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExchangeRateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExchangeRateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fromCurrencyId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.payload = ExchangeRate.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.status = Status.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExchangeRateResponse {
    return {
      fromCurrencyId: isSet(object.fromCurrencyId) ? String(object.fromCurrencyId) : undefined,
      payload: isSet(object.payload) ? ExchangeRate.fromJSON(object.payload) : undefined,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: ExchangeRateResponse): unknown {
    const obj: any = {};
    message.fromCurrencyId !== undefined && (obj.fromCurrencyId = message.fromCurrencyId);
    message.payload !== undefined && (obj.payload = message.payload ? ExchangeRate.toJSON(message.payload) : undefined);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ExchangeRateResponse>): ExchangeRateResponse {
    return ExchangeRateResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ExchangeRateResponse>): ExchangeRateResponse {
    const message = createBaseExchangeRateResponse();
    message.fromCurrencyId = object.fromCurrencyId ?? undefined;
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
  return { items: [], operationStatus: undefined };
}

export const ExchangeRateListResponse = {
  encode(message: ExchangeRateListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      ExchangeRateResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.operationStatus !== undefined) {
      OperationStatus.encode(message.operationStatus, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExchangeRateListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExchangeRateListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(ExchangeRateResponse.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.operationStatus = OperationStatus.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExchangeRateListResponse {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => ExchangeRateResponse.fromJSON(e)) : [],
      operationStatus: isSet(object.operationStatus) ? OperationStatus.fromJSON(object.operationStatus) : undefined,
    };
  },

  toJSON(message: ExchangeRateListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? ExchangeRateResponse.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus ? OperationStatus.toJSON(message.operationStatus) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ExchangeRateListResponse>): ExchangeRateListResponse {
    return ExchangeRateListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ExchangeRateListResponse>): ExchangeRateListResponse {
    const message = createBaseExchangeRateListResponse();
    message.items = object.items?.map((e) => ExchangeRateResponse.fromPartial(e)) || [];
    message.operationStatus = (object.operationStatus !== undefined && object.operationStatus !== null)
      ? OperationStatus.fromPartial(object.operationStatus)
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
      options: { _unknownFields: { 248008: [Buffer.from([1])] } },
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
      "google/protobuf/timestamp.proto",
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
        "type": 11,
        "typeName": ".google.protobuf.Timestamp",
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
        "type": 11,
        "typeName": ".google.protobuf.Timestamp",
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
        "span": [14, 0, 23, 1],
        "leadingComments": "\n Microservice definition.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 4, 2, 5],
        "span": [56, 2, 50],
        "leadingComments":
          "\n For custom exchange rates beyond market.\n Regular rates are retrived from API by calling QueryExchangeRate.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 5, 2, 2],
        "span": [62, 2, 31],
        "leadingComments": "",
        "trailingComments": "fees\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 5, 2, 3],
        "span": [63, 2, 29],
        "leadingComments": "",
        "trailingComments": " leave empty == 1.0\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 6, 2, 2],
        "span": [69, 2, 50],
        "leadingComments": "",
        "trailingComments": " now in general case\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 6, 2, 3],
        "span": [70, 2, 29],
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
  dependencies: [protoMetadata1, protoMetadata2, protoMetadata3, protoMetadata4, protoMetadata5, protoMetadata6],
  options: { services: { "CurrencyService": { options: undefined, methods: { "Read": { "is_query": true } } } } },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
