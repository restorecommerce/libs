/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { Any, protoMetadata as protoMetadata1 } from "../google/protobuf/any";
import { protoMetadata as protoMetadata5, Subject } from "../io/restorecommerce/auth";
import { Meta, protoMetadata as protoMetadata3 } from "../io/restorecommerce/meta";
import {
  DeleteRequest,
  DeleteResponse,
  protoMetadata as protoMetadata2,
  ReadRequest,
} from "../io/restorecommerce/resource_base";
import { OperationStatus, protoMetadata as protoMetadata4, Status } from "../io/restorecommerce/status";

export const protobufPackage = "test";

export interface TestRequest {
  value: string;
}

export interface StreamTestResponse {
  result: string;
}

export interface TestResponse {
  result: string;
  status?: Status;
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
  total_count: number;
}

export interface TestBufferedDataResponse {
  payload?: TestBufferedData;
  status?: Status;
}

export interface TestBufferedDataListResponse {
  items: TestBufferedDataResponse[];
  total_count: number;
  operation_status?: OperationStatus;
}

export interface ExtendMe {
  bar: number;
}

export interface ResourceList {
  items: Resource[];
  total_count: number;
  subject?: Subject;
}

export interface ResourceListResponse {
  items: ResourceResponse[];
  total_count: number;
  operation_status?: OperationStatus;
}

export interface ResourceResponse {
  payload?: Resource;
  status?: Status;
}

/** / Example resource */
export interface Resource {
  id: string;
  meta?: Meta;
  value: number;
  text: string;
  active: boolean;
  created: number;
  status: string;
  data?: Any | undefined;
}

function createBaseTestRequest(): TestRequest {
  return { value: "" };
}

export const TestRequest = {
  encode(message: TestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestRequest {
    return { value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: TestRequest): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create(base?: DeepPartial<TestRequest>): TestRequest {
    return TestRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TestRequest>): TestRequest {
    const message = createBaseTestRequest();
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseStreamTestResponse(): StreamTestResponse {
  return { result: "" };
}

export const StreamTestResponse = {
  encode(message: StreamTestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== "") {
      writer.uint32(10).string(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamTestResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamTestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.result = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamTestResponse {
    return { result: isSet(object.result) ? String(object.result) : "" };
  },

  toJSON(message: StreamTestResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = message.result);
    return obj;
  },

  create(base?: DeepPartial<StreamTestResponse>): StreamTestResponse {
    return StreamTestResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<StreamTestResponse>): StreamTestResponse {
    const message = createBaseStreamTestResponse();
    message.result = object.result ?? "";
    return message;
  },
};

function createBaseTestResponse(): TestResponse {
  return { result: "", status: undefined };
}

export const TestResponse = {
  encode(message: TestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== "") {
      writer.uint32(10).string(message.result);
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.result = reader.string();
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

  fromJSON(object: any): TestResponse {
    return {
      result: isSet(object.result) ? String(object.result) : "",
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: TestResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = message.result);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<TestResponse>): TestResponse {
    return TestResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TestResponse>): TestResponse {
    const message = createBaseTestResponse();
    message.result = object.result ?? "";
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBaseTestEvent(): TestEvent {
  return { value: "", count: 0 };
}

export const TestEvent = {
  encode(message: TestEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    if (message.count !== 0) {
      writer.uint32(16).int32(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.count = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestEvent {
    return {
      value: isSet(object.value) ? String(object.value) : "",
      count: isSet(object.count) ? Number(object.count) : 0,
    };
  },

  toJSON(message: TestEvent): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    message.count !== undefined && (obj.count = Math.round(message.count));
    return obj;
  },

  create(base?: DeepPartial<TestEvent>): TestEvent {
    return TestEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TestEvent>): TestEvent {
    const message = createBaseTestEvent();
    message.value = object.value ?? "";
    message.count = object.count ?? 0;
    return message;
  },
};

function createBaseTestBufferedData(): TestBufferedData {
  return { id: "", meta: undefined, value: "", count: 0, data: undefined };
}

export const TestBufferedData = {
  encode(message: TestBufferedData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    if (message.count !== 0) {
      writer.uint32(32).int32(message.count);
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestBufferedData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestBufferedData();
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

          message.value = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.count = reader.int32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.data = Any.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestBufferedData {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      value: isSet(object.value) ? String(object.value) : "",
      count: isSet(object.count) ? Number(object.count) : 0,
      data: isSet(object.data) ? Any.fromJSON(object.data) : undefined,
    };
  },

  toJSON(message: TestBufferedData): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.value !== undefined && (obj.value = message.value);
    message.count !== undefined && (obj.count = Math.round(message.count));
    message.data !== undefined && (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    return obj;
  },

  create(base?: DeepPartial<TestBufferedData>): TestBufferedData {
    return TestBufferedData.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TestBufferedData>): TestBufferedData {
    const message = createBaseTestBufferedData();
    message.id = object.id ?? "";
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    message.value = object.value ?? "";
    message.count = object.count ?? 0;
    message.data = (object.data !== undefined && object.data !== null) ? Any.fromPartial(object.data) : undefined;
    return message;
  },
};

function createBaseTestBufferedDataList(): TestBufferedDataList {
  return { items: [], total_count: 0 };
}

export const TestBufferedDataList = {
  encode(message: TestBufferedDataList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      TestBufferedData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestBufferedDataList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestBufferedDataList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(TestBufferedData.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.total_count = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestBufferedDataList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => TestBufferedData.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
    };
  },

  toJSON(message: TestBufferedDataList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? TestBufferedData.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    return obj;
  },

  create(base?: DeepPartial<TestBufferedDataList>): TestBufferedDataList {
    return TestBufferedDataList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TestBufferedDataList>): TestBufferedDataList {
    const message = createBaseTestBufferedDataList();
    message.items = object.items?.map((e) => TestBufferedData.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    return message;
  },
};

function createBaseTestBufferedDataResponse(): TestBufferedDataResponse {
  return { payload: undefined, status: undefined };
}

export const TestBufferedDataResponse = {
  encode(message: TestBufferedDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      TestBufferedData.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestBufferedDataResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestBufferedDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payload = TestBufferedData.decode(reader, reader.uint32());
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

  fromJSON(object: any): TestBufferedDataResponse {
    return {
      payload: isSet(object.payload) ? TestBufferedData.fromJSON(object.payload) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: TestBufferedDataResponse): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload ? TestBufferedData.toJSON(message.payload) : undefined);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<TestBufferedDataResponse>): TestBufferedDataResponse {
    return TestBufferedDataResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TestBufferedDataResponse>): TestBufferedDataResponse {
    const message = createBaseTestBufferedDataResponse();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? TestBufferedData.fromPartial(object.payload)
      : undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBaseTestBufferedDataListResponse(): TestBufferedDataListResponse {
  return { items: [], total_count: 0, operation_status: undefined };
}

export const TestBufferedDataListResponse = {
  encode(message: TestBufferedDataListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      TestBufferedDataResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(message.operation_status, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestBufferedDataListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestBufferedDataListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(TestBufferedDataResponse.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.total_count = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.operation_status = OperationStatus.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestBufferedDataListResponse {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => TestBufferedDataResponse.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      operation_status: isSet(object.operation_status) ? OperationStatus.fromJSON(object.operation_status) : undefined,
    };
  },

  toJSON(message: TestBufferedDataListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? TestBufferedDataResponse.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status ? OperationStatus.toJSON(message.operation_status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<TestBufferedDataListResponse>): TestBufferedDataListResponse {
    return TestBufferedDataListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TestBufferedDataListResponse>): TestBufferedDataListResponse {
    const message = createBaseTestBufferedDataListResponse();
    message.items = object.items?.map((e) => TestBufferedDataResponse.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.operation_status = (object.operation_status !== undefined && object.operation_status !== null)
      ? OperationStatus.fromPartial(object.operation_status)
      : undefined;
    return message;
  },
};

function createBaseExtendMe(): ExtendMe {
  return { bar: 0 };
}

export const ExtendMe = {
  encode(message: ExtendMe, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bar !== 0) {
      writer.uint32(1008).int32(message.bar);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExtendMe {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtendMe();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 126:
          if (tag !== 1008) {
            break;
          }

          message.bar = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExtendMe {
    return { bar: isSet(object.bar) ? Number(object.bar) : 0 };
  },

  toJSON(message: ExtendMe): unknown {
    const obj: any = {};
    message.bar !== undefined && (obj.bar = Math.round(message.bar));
    return obj;
  },

  create(base?: DeepPartial<ExtendMe>): ExtendMe {
    return ExtendMe.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ExtendMe>): ExtendMe {
    const message = createBaseExtendMe();
    message.bar = object.bar ?? 0;
    return message;
  },
};

function createBaseResourceList(): ResourceList {
  return { items: [], total_count: 0, subject: undefined };
}

export const ResourceList = {
  encode(message: ResourceList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      Resource.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(Resource.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.total_count = reader.uint32();
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

  fromJSON(object: any): ResourceList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => Resource.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: ResourceList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? Resource.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ResourceList>): ResourceList {
    return ResourceList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ResourceList>): ResourceList {
    const message = createBaseResourceList();
    message.items = object.items?.map((e) => Resource.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseResourceListResponse(): ResourceListResponse {
  return { items: [], total_count: 0, operation_status: undefined };
}

export const ResourceListResponse = {
  encode(message: ResourceListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      ResourceResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(message.operation_status, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(ResourceResponse.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.total_count = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.operation_status = OperationStatus.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResourceListResponse {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => ResourceResponse.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      operation_status: isSet(object.operation_status) ? OperationStatus.fromJSON(object.operation_status) : undefined,
    };
  },

  toJSON(message: ResourceListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? ResourceResponse.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status ? OperationStatus.toJSON(message.operation_status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ResourceListResponse>): ResourceListResponse {
    return ResourceListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ResourceListResponse>): ResourceListResponse {
    const message = createBaseResourceListResponse();
    message.items = object.items?.map((e) => ResourceResponse.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.operation_status = (object.operation_status !== undefined && object.operation_status !== null)
      ? OperationStatus.fromPartial(object.operation_status)
      : undefined;
    return message;
  },
};

function createBaseResourceResponse(): ResourceResponse {
  return { payload: undefined, status: undefined };
}

export const ResourceResponse = {
  encode(message: ResourceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      Resource.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payload = Resource.decode(reader, reader.uint32());
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

  fromJSON(object: any): ResourceResponse {
    return {
      payload: isSet(object.payload) ? Resource.fromJSON(object.payload) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: ResourceResponse): unknown {
    const obj: any = {};
    message.payload !== undefined && (obj.payload = message.payload ? Resource.toJSON(message.payload) : undefined);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ResourceResponse>): ResourceResponse {
    return ResourceResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ResourceResponse>): ResourceResponse {
    const message = createBaseResourceResponse();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? Resource.fromPartial(object.payload)
      : undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBaseResource(): Resource {
  return { id: "", meta: undefined, value: 0, text: "", active: false, created: 0, status: "", data: undefined };
}

export const Resource = {
  encode(message: Resource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    if (message.value !== 0) {
      writer.uint32(24).int32(message.value);
    }
    if (message.text !== "") {
      writer.uint32(34).string(message.text);
    }
    if (message.active === true) {
      writer.uint32(40).bool(message.active);
    }
    if (message.created !== 0) {
      writer.uint32(49).double(message.created);
    }
    if (message.status !== "") {
      writer.uint32(58).string(message.status);
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resource {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResource();
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
          if (tag !== 24) {
            break;
          }

          message.value = reader.int32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.text = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.active = reader.bool();
          continue;
        case 6:
          if (tag !== 49) {
            break;
          }

          message.created = reader.double();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.status = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.data = Any.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Resource {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      value: isSet(object.value) ? Number(object.value) : 0,
      text: isSet(object.text) ? String(object.text) : "",
      active: isSet(object.active) ? Boolean(object.active) : false,
      created: isSet(object.created) ? Number(object.created) : 0,
      status: isSet(object.status) ? String(object.status) : "",
      data: isSet(object.data) ? Any.fromJSON(object.data) : undefined,
    };
  },

  toJSON(message: Resource): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.value !== undefined && (obj.value = Math.round(message.value));
    message.text !== undefined && (obj.text = message.text);
    message.active !== undefined && (obj.active = message.active);
    message.created !== undefined && (obj.created = message.created);
    message.status !== undefined && (obj.status = message.status);
    message.data !== undefined && (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    return obj;
  },

  create(base?: DeepPartial<Resource>): Resource {
    return Resource.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Resource>): Resource {
    const message = createBaseResource();
    message.id = object.id ?? "";
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    message.value = object.value ?? 0;
    message.text = object.text ?? "";
    message.active = object.active ?? false;
    message.created = object.created ?? 0;
    message.status = object.status ?? "";
    message.data = (object.data !== undefined && object.data !== null) ? Any.fromPartial(object.data) : undefined;
    return message;
  },
};

export type TestDefinition = typeof TestDefinition;
export const TestDefinition = {
  name: "Test",
  fullName: "test.Test",
  methods: {
    test: {
      name: "Test",
      requestType: TestRequest,
      requestStream: false,
      responseType: TestResponse,
      responseStream: false,
      options: {},
    },
    throw: {
      name: "Throw",
      requestType: TestRequest,
      requestStream: false,
      responseType: TestResponse,
      responseStream: false,
      options: {},
    },
    notImplemented: {
      name: "NotImplemented",
      requestType: TestRequest,
      requestStream: false,
      responseType: TestResponse,
      responseStream: false,
      options: {},
    },
    notFound: {
      name: "NotFound",
      requestType: TestRequest,
      requestStream: false,
      responseType: TestResponse,
      responseStream: false,
      options: {},
    },
    create: {
      name: "Create",
      requestType: TestBufferedDataList,
      requestStream: false,
      responseType: TestBufferedDataListResponse,
      responseStream: false,
      options: {},
    },
    read: {
      name: "Read",
      requestType: ReadRequest,
      requestStream: false,
      responseType: TestBufferedDataListResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface TestServiceImplementation<CallContextExt = {}> {
  test(request: TestRequest, context: CallContext & CallContextExt): Promise<DeepPartial<TestResponse>>;
  throw(request: TestRequest, context: CallContext & CallContextExt): Promise<DeepPartial<TestResponse>>;
  notImplemented(request: TestRequest, context: CallContext & CallContextExt): Promise<DeepPartial<TestResponse>>;
  notFound(request: TestRequest, context: CallContext & CallContextExt): Promise<DeepPartial<TestResponse>>;
  create(
    request: TestBufferedDataList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<TestBufferedDataListResponse>>;
  read(request: ReadRequest, context: CallContext & CallContextExt): Promise<DeepPartial<TestBufferedDataListResponse>>;
}

export interface TestClient<CallOptionsExt = {}> {
  test(request: DeepPartial<TestRequest>, options?: CallOptions & CallOptionsExt): Promise<TestResponse>;
  throw(request: DeepPartial<TestRequest>, options?: CallOptions & CallOptionsExt): Promise<TestResponse>;
  notImplemented(request: DeepPartial<TestRequest>, options?: CallOptions & CallOptionsExt): Promise<TestResponse>;
  notFound(request: DeepPartial<TestRequest>, options?: CallOptions & CallOptionsExt): Promise<TestResponse>;
  create(
    request: DeepPartial<TestBufferedDataList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<TestBufferedDataListResponse>;
  read(
    request: DeepPartial<ReadRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<TestBufferedDataListResponse>;
}

/** Stream test service */
export type StreamDefinition = typeof StreamDefinition;
export const StreamDefinition = {
  name: "Stream",
  fullName: "test.Stream",
  methods: {
    biStream: {
      name: "BiStream",
      requestType: TestRequest,
      requestStream: true,
      responseType: StreamTestResponse,
      responseStream: true,
      options: {},
    },
    responseStream: {
      name: "ResponseStream",
      requestType: TestRequest,
      requestStream: false,
      responseType: StreamTestResponse,
      responseStream: true,
      options: {},
    },
    requestStream: {
      name: "RequestStream",
      requestType: TestRequest,
      requestStream: true,
      responseType: TestResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface StreamServiceImplementation<CallContextExt = {}> {
  biStream(
    request: AsyncIterable<TestRequest>,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<StreamTestResponse>>;
  responseStream(
    request: TestRequest,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<StreamTestResponse>>;
  requestStream(
    request: AsyncIterable<TestRequest>,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<TestResponse>>;
}

export interface StreamClient<CallOptionsExt = {}> {
  biStream(
    request: AsyncIterable<DeepPartial<TestRequest>>,
    options?: CallOptions & CallOptionsExt,
  ): AsyncIterable<StreamTestResponse>;
  responseStream(
    request: DeepPartial<TestRequest>,
    options?: CallOptions & CallOptionsExt,
  ): AsyncIterable<StreamTestResponse>;
  requestStream(
    request: AsyncIterable<DeepPartial<TestRequest>>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<TestResponse>;
}

export type CRUDDefinition = typeof CRUDDefinition;
export const CRUDDefinition = {
  name: "CRUD",
  fullName: "test.CRUD",
  methods: {
    read: {
      name: "Read",
      requestType: ReadRequest,
      requestStream: false,
      responseType: ResourceListResponse,
      responseStream: false,
      options: {},
    },
    create: {
      name: "Create",
      requestType: ResourceList,
      requestStream: false,
      responseType: ResourceListResponse,
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
      requestType: ResourceList,
      requestStream: false,
      responseType: ResourceListResponse,
      responseStream: false,
      options: {},
    },
    upsert: {
      name: "Upsert",
      requestType: ResourceList,
      requestStream: false,
      responseType: ResourceListResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface CRUDServiceImplementation<CallContextExt = {}> {
  read(request: ReadRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResourceListResponse>>;
  create(request: ResourceList, context: CallContext & CallContextExt): Promise<DeepPartial<ResourceListResponse>>;
  delete(request: DeleteRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteResponse>>;
  update(request: ResourceList, context: CallContext & CallContextExt): Promise<DeepPartial<ResourceListResponse>>;
  upsert(request: ResourceList, context: CallContext & CallContextExt): Promise<DeepPartial<ResourceListResponse>>;
}

export interface CRUDClient<CallOptionsExt = {}> {
  read(request: DeepPartial<ReadRequest>, options?: CallOptions & CallOptionsExt): Promise<ResourceListResponse>;
  create(request: DeepPartial<ResourceList>, options?: CallOptions & CallOptionsExt): Promise<ResourceListResponse>;
  delete(request: DeepPartial<DeleteRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteResponse>;
  update(request: DeepPartial<ResourceList>, options?: CallOptions & CallOptionsExt): Promise<ResourceListResponse>;
  upsert(request: DeepPartial<ResourceList>, options?: CallOptions & CallOptionsExt): Promise<ResourceListResponse>;
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
    "name": "test/test.proto",
    "package": "test",
    "dependency": [
      "google/protobuf/any.proto",
      "io/restorecommerce/resource_base.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/auth.proto",
    ],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "TestRequest",
      "field": [{
        "name": "value",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "value",
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
      "name": "StreamTestResponse",
      "field": [{
        "name": "result",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "result",
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
      "name": "TestResponse",
      "field": [{
        "name": "result",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "result",
        "options": undefined,
        "proto3Optional": false,
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
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "TestEvent",
      "field": [{
        "name": "value",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "value",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "count",
        "number": 2,
        "label": 1,
        "type": 5,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "count",
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
      "name": "TestBufferedData",
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
      }, {
        "name": "meta",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.meta.Meta",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "meta",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "value",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "value",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "count",
        "number": 4,
        "label": 1,
        "type": 5,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "count",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "data",
        "number": 5,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.Any",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "data",
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
      "name": "TestBufferedDataList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".test.TestBufferedData",
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
      "name": "TestBufferedDataResponse",
      "field": [{
        "name": "payload",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".test.TestBufferedData",
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
      "name": "TestBufferedDataListResponse",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".test.TestBufferedDataResponse",
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
      "name": "ExtendMe",
      "field": [{
        "name": "bar",
        "number": 126,
        "label": 1,
        "type": 5,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "bar",
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
      "name": "ResourceList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".test.Resource",
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
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ResourceListResponse",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".test.ResourceResponse",
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
      "name": "ResourceResponse",
      "field": [{
        "name": "payload",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".test.Resource",
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
      "name": "Resource",
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
      }, {
        "name": "meta",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.meta.Meta",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "meta",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "value",
        "number": 3,
        "label": 1,
        "type": 5,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "value",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "text",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "text",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "active",
        "number": 5,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "active",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "created",
        "number": 6,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "created",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "status",
        "number": 7,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "status",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "data",
        "number": 8,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.Any",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "data",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_data", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "enumType": [],
    "service": [{
      "name": "Test",
      "method": [{
        "name": "Test",
        "inputType": ".test.TestRequest",
        "outputType": ".test.TestResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Throw",
        "inputType": ".test.TestRequest",
        "outputType": ".test.TestResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "NotImplemented",
        "inputType": ".test.TestRequest",
        "outputType": ".test.TestResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "NotFound",
        "inputType": ".test.TestRequest",
        "outputType": ".test.TestResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Create",
        "inputType": ".test.TestBufferedDataList",
        "outputType": ".test.TestBufferedDataListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Read",
        "inputType": ".io.restorecommerce.resourcebase.ReadRequest",
        "outputType": ".test.TestBufferedDataListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }],
      "options": undefined,
    }, {
      "name": "Stream",
      "method": [{
        "name": "BiStream",
        "inputType": ".test.TestRequest",
        "outputType": ".test.StreamTestResponse",
        "options": undefined,
        "clientStreaming": true,
        "serverStreaming": true,
      }, {
        "name": "ResponseStream",
        "inputType": ".test.TestRequest",
        "outputType": ".test.StreamTestResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": true,
      }, {
        "name": "RequestStream",
        "inputType": ".test.TestRequest",
        "outputType": ".test.TestResponse",
        "options": undefined,
        "clientStreaming": true,
        "serverStreaming": false,
      }],
      "options": undefined,
    }, {
      "name": "CRUD",
      "method": [{
        "name": "Read",
        "inputType": ".io.restorecommerce.resourcebase.ReadRequest",
        "outputType": ".test.ResourceListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Create",
        "inputType": ".test.ResourceList",
        "outputType": ".test.ResourceListResponse",
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
        "inputType": ".test.ResourceList",
        "outputType": ".test.ResourceListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Upsert",
        "inputType": ".test.ResourceList",
        "outputType": ".test.ResourceListResponse",
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
        "path": [6, 1],
        "span": [21, 0, 25, 1],
        "leadingComments": "*\n Stream test service\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 12],
        "span": [99, 0, 108, 1],
        "leadingComments": "/ Example resource\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {
    ".test.TestRequest": TestRequest,
    ".test.StreamTestResponse": StreamTestResponse,
    ".test.TestResponse": TestResponse,
    ".test.TestEvent": TestEvent,
    ".test.TestBufferedData": TestBufferedData,
    ".test.TestBufferedDataList": TestBufferedDataList,
    ".test.TestBufferedDataResponse": TestBufferedDataResponse,
    ".test.TestBufferedDataListResponse": TestBufferedDataListResponse,
    ".test.ExtendMe": ExtendMe,
    ".test.ResourceList": ResourceList,
    ".test.ResourceListResponse": ResourceListResponse,
    ".test.ResourceResponse": ResourceResponse,
    ".test.Resource": Resource,
  },
  dependencies: [protoMetadata1, protoMetadata2, protoMetadata3, protoMetadata4, protoMetadata5],
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export type ServerStreamingMethodResult<Response> = { [Symbol.asyncIterator](): AsyncIterator<Response, void> };
