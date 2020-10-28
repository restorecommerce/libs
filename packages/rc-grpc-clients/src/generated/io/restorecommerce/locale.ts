/* eslint-disable */
import { Subject, ApiKey } from '../../io/restorecommerce/auth';
import { Meta } from '../../io/restorecommerce/meta';
import { ReadRequest, DeleteRequest } from '../../io/restorecommerce/resource_base';
import { Empty } from '../../google/protobuf/empty';
import { Writer, Reader } from 'protobufjs/minimal';


export interface Deleted {
  id: string;
}

export interface LocaleList {
  items: Locale[];
  totalCount: number;
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
}

export interface Locale {
  id: string;
  meta?: Meta;
  value: string;
  description: string;
}

const baseDeleted: object = {
  id: "",
};

const baseLocaleList: object = {
  totalCount: 0,
};

const baseLocale: object = {
  id: "",
  value: "",
  description: "",
};

/**
 *
 *  Microservice definition.
 */
export interface Service {

  Read(request: ReadRequest): Promise<LocaleList>;

  Create(request: LocaleList): Promise<LocaleList>;

  Delete(request: DeleteRequest): Promise<Empty>;

  Update(request: LocaleList): Promise<LocaleList>;

  Upsert(request: LocaleList): Promise<LocaleList>;

}

export const protobufPackage = 'io.restorecommerce.locale'

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

export const LocaleList = {
  encode(message: LocaleList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      Locale.encode(v!, writer.uint32(10).fork()).ldelim();
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
  decode(input: Uint8Array | Reader, length?: number): LocaleList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLocaleList } as LocaleList;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Locale.decode(reader, reader.uint32()));
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
  fromJSON(object: any): LocaleList {
    const message = { ...baseLocaleList } as LocaleList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Locale.fromJSON(e));
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
  fromPartial(object: DeepPartial<LocaleList>): LocaleList {
    const message = { ...baseLocaleList } as LocaleList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Locale.fromPartial(e));
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
  toJSON(message: LocaleList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map(e => e ? Locale.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    message.apiKey !== undefined && (obj.apiKey = message.apiKey ? ApiKey.toJSON(message.apiKey) : undefined);
    return obj;
  },
};

export const Locale = {
  encode(message: Locale, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    if (message.meta !== undefined && message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.value);
    writer.uint32(34).string(message.description);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Locale {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLocale } as Locale;
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
          message.value = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Locale {
    const message = { ...baseLocale } as Locale;
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
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Locale>): Locale {
    const message = { ...baseLocale } as Locale;
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
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    return message;
  },
  toJSON(message: Locale): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.value !== undefined && (obj.value = message.value);
    message.description !== undefined && (obj.description = message.description);
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