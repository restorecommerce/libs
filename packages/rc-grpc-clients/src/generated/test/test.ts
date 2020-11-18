/* eslint-disable */
import { Meta } from '../io/restorecommerce/meta';
import { Any } from '../google/protobuf/any';
import { ReadRequest } from '../io/restorecommerce/resource_base';
import { Observable } from 'rxjs';
import { Writer, Reader } from 'protobufjs/minimal';


export interface TestRequest {
  value: string;
}

export interface TestResponse {
  result: string;
}

export interface TestEvent {
  value: string;
  count: number;
}

export interface TestBufferedData {
  id: string;
  meta?: Meta;
  value: string;
  count: number;
  data?: Any;
}

export interface TestBufferedDataList {
  items: TestBufferedData[];
  totalCount: number;
}

export interface ExtendMe {
  bar: number;
}

const baseTestRequest: object = {
  value: "",
};

const baseTestResponse: object = {
  result: "",
};

const baseTestEvent: object = {
  value: "",
  count: 0,
};

const baseTestBufferedData: object = {
  id: "",
  value: "",
  count: 0,
};

const baseTestBufferedDataList: object = {
  totalCount: 0,
};

const baseExtendMe: object = {
  bar: 0,
};

export interface Test {

  Test(request: TestRequest): Promise<TestResponse>;

  Throw(request: TestRequest): Promise<TestResponse>;

  NotImplemented(request: TestRequest): Promise<TestResponse>;

  NotFound(request: TestRequest): Promise<TestResponse>;

  Create(request: TestBufferedDataList): Promise<TestBufferedDataList>;

  Read(request: ReadRequest): Promise<TestBufferedDataList>;

}

export interface Stream {

  BiStream(request: Observable<TestRequest>): Observable<TestResponse>;

  ResponseStream(request: TestRequest): Observable<TestResponse>;

  RequestStream(request: Observable<TestRequest>): Promise<TestResponse>;

}

export const protobufPackage = 'test'

export const TestRequest = {
  encode(message: TestRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.value);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): TestRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTestRequest } as TestRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TestRequest {
    const message = { ...baseTestRequest } as TestRequest;
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<TestRequest>): TestRequest {
    const message = { ...baseTestRequest } as TestRequest;
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
  toJSON(message: TestRequest): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
};

export const TestResponse = {
  encode(message: TestResponse, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.result);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): TestResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTestResponse } as TestResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TestResponse {
    const message = { ...baseTestResponse } as TestResponse;
    if (object.result !== undefined && object.result !== null) {
      message.result = String(object.result);
    } else {
      message.result = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<TestResponse>): TestResponse {
    const message = { ...baseTestResponse } as TestResponse;
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    } else {
      message.result = "";
    }
    return message;
  },
  toJSON(message: TestResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = message.result);
    return obj;
  },
};

export const TestEvent = {
  encode(message: TestEvent, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.value);
    writer.uint32(16).int32(message.count);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): TestEvent {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTestEvent } as TestEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.string();
          break;
        case 2:
          message.count = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TestEvent {
    const message = { ...baseTestEvent } as TestEvent;
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = Number(object.count);
    } else {
      message.count = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<TestEvent>): TestEvent {
    const message = { ...baseTestEvent } as TestEvent;
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    } else {
      message.count = 0;
    }
    return message;
  },
  toJSON(message: TestEvent): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    message.count !== undefined && (obj.count = message.count);
    return obj;
  },
};

export const TestBufferedData = {
  encode(message: TestBufferedData, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    if (message.meta !== undefined && message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.value);
    writer.uint32(32).int32(message.count);
    if (message.data !== undefined && message.data !== undefined) {
      Any.encode(message.data, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): TestBufferedData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTestBufferedData } as TestBufferedData;
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
          message.count = reader.int32();
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
  fromJSON(object: any): TestBufferedData {
    const message = { ...baseTestBufferedData } as TestBufferedData;
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
    if (object.count !== undefined && object.count !== null) {
      message.count = Number(object.count);
    } else {
      message.count = 0;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromJSON(object.data);
    } else {
      message.data = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<TestBufferedData>): TestBufferedData {
    const message = { ...baseTestBufferedData } as TestBufferedData;
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
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    } else {
      message.count = 0;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromPartial(object.data);
    } else {
      message.data = undefined;
    }
    return message;
  },
  toJSON(message: TestBufferedData): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.value !== undefined && (obj.value = message.value);
    message.count !== undefined && (obj.count = message.count);
    message.data !== undefined && (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    return obj;
  },
};

export const TestBufferedDataList = {
  encode(message: TestBufferedDataList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      TestBufferedData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(16).uint32(message.totalCount);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): TestBufferedDataList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTestBufferedDataList } as TestBufferedDataList;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(TestBufferedData.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalCount = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TestBufferedDataList {
    const message = { ...baseTestBufferedDataList } as TestBufferedDataList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(TestBufferedData.fromJSON(e));
      }
    }
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = Number(object.totalCount);
    } else {
      message.totalCount = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<TestBufferedDataList>): TestBufferedDataList {
    const message = { ...baseTestBufferedDataList } as TestBufferedDataList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(TestBufferedData.fromPartial(e));
      }
    }
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = object.totalCount;
    } else {
      message.totalCount = 0;
    }
    return message;
  },
  toJSON(message: TestBufferedDataList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map(e => e ? TestBufferedData.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    return obj;
  },
};

export const ExtendMe = {
  encode(message: ExtendMe, writer: Writer = Writer.create()): Writer {
    writer.uint32(1008).int32(message.bar);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ExtendMe {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExtendMe } as ExtendMe;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 126:
          message.bar = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExtendMe {
    const message = { ...baseExtendMe } as ExtendMe;
    if (object.bar !== undefined && object.bar !== null) {
      message.bar = Number(object.bar);
    } else {
      message.bar = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<ExtendMe>): ExtendMe {
    const message = { ...baseExtendMe } as ExtendMe;
    if (object.bar !== undefined && object.bar !== null) {
      message.bar = object.bar;
    } else {
      message.bar = 0;
    }
    return message;
  },
  toJSON(message: ExtendMe): unknown {
    const obj: any = {};
    message.bar !== undefined && (obj.bar = message.bar);
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