/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { protoMetadata as protoMetadata3, Subject } from "./auth";
import { Meta, protoMetadata as protoMetadata2 } from "./meta";
import { protoMetadata as protoMetadata5, Resolver } from "./options";
import { DeleteRequest, DeleteResponse, protoMetadata as protoMetadata1, ReadRequest } from "./resource_base";
import { OperationStatus, protoMetadata as protoMetadata4, Status } from "./status";

export const protobufPackage = "io.restorecommerce.unit";

export enum UnitType {
  UnitTypeUndefined = "UnitTypeUndefined",
  Length = "Length",
  Weight = "Weight",
  Speed = "Speed",
  /** Force - ... */
  Force = "Force",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function unitTypeFromJSON(object: any): UnitType {
  switch (object) {
    case 0:
    case "UnitTypeUndefined":
      return UnitType.UnitTypeUndefined;
    case 1:
    case "Length":
      return UnitType.Length;
    case 2:
    case "Weight":
      return UnitType.Weight;
    case 3:
    case "Speed":
      return UnitType.Speed;
    case 4:
    case "Force":
      return UnitType.Force;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UnitType.UNRECOGNIZED;
  }
}

export function unitTypeToJSON(object: UnitType): string {
  switch (object) {
    case UnitType.UnitTypeUndefined:
      return "UnitTypeUndefined";
    case UnitType.Length:
      return "Length";
    case UnitType.Weight:
      return "Weight";
    case UnitType.Speed:
      return "Speed";
    case UnitType.Force:
      return "Force";
    case UnitType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function unitTypeToNumber(object: UnitType): number {
  switch (object) {
    case UnitType.UnitTypeUndefined:
      return 0;
    case UnitType.Length:
      return 1;
    case UnitType.Weight:
      return 2;
    case UnitType.Speed:
      return 3;
    case UnitType.Force:
      return 4;
    case UnitType.UNRECOGNIZED:
    default:
      return -1;
  }
}

export enum UnitSystem {
  UnitSystemUndefined = "UnitSystemUndefined",
  Metric = "Metric",
  Imperial = "Imperial",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function unitSystemFromJSON(object: any): UnitSystem {
  switch (object) {
    case 0:
    case "UnitSystemUndefined":
      return UnitSystem.UnitSystemUndefined;
    case 1:
    case "Metric":
      return UnitSystem.Metric;
    case 2:
    case "Imperial":
      return UnitSystem.Imperial;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UnitSystem.UNRECOGNIZED;
  }
}

export function unitSystemToJSON(object: UnitSystem): string {
  switch (object) {
    case UnitSystem.UnitSystemUndefined:
      return "UnitSystemUndefined";
    case UnitSystem.Metric:
      return "Metric";
    case UnitSystem.Imperial:
      return "Imperial";
    case UnitSystem.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function unitSystemToNumber(object: UnitSystem): number {
  switch (object) {
    case UnitSystem.UnitSystemUndefined:
      return 0;
    case UnitSystem.Metric:
      return 1;
    case UnitSystem.Imperial:
      return 2;
    case UnitSystem.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface Unit {
  id: string;
  meta?: Meta;
  parent_id: string;
  name: string;
  symbol: string;
  standard_type?: UnitType | undefined;
  custom_type?: string | undefined;
  standard_system?: UnitSystem | undefined;
  custom_system?:
    | string
    | undefined;
  /** convert factor to standard unit */
  factor: number;
}

export interface UnitList {
  items: Unit[];
  total_count: number;
  subject?: Subject;
}

export interface UnitListResponse {
  items: UnitResponse[];
  total_count: number;
  operation_status?: OperationStatus;
}

export interface UnitResponse {
  payload?: Unit;
  status?: Status;
}

export interface Deleted {
  id: string;
}

function createBaseUnit(): Unit {
  return {
    id: "",
    meta: undefined,
    parent_id: "",
    name: "",
    symbol: "",
    standard_type: undefined,
    custom_type: undefined,
    standard_system: undefined,
    custom_system: undefined,
    factor: 0,
  };
}

export const Unit = {
  encode(message: Unit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    if (message.parent_id !== "") {
      writer.uint32(26).string(message.parent_id);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(42).string(message.symbol);
    }
    if (message.standard_type !== undefined) {
      writer.uint32(48).int32(unitTypeToNumber(message.standard_type));
    }
    if (message.custom_type !== undefined) {
      writer.uint32(58).string(message.custom_type);
    }
    if (message.standard_system !== undefined) {
      writer.uint32(64).int32(unitSystemToNumber(message.standard_system));
    }
    if (message.custom_system !== undefined) {
      writer.uint32(74).string(message.custom_system);
    }
    if (message.factor !== 0) {
      writer.uint32(81).double(message.factor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Unit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnit();
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
          message.parent_id = reader.string();
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.symbol = reader.string();
          break;
        case 6:
          message.standard_type = unitTypeFromJSON(reader.int32());
          break;
        case 7:
          message.custom_type = reader.string();
          break;
        case 8:
          message.standard_system = unitSystemFromJSON(reader.int32());
          break;
        case 9:
          message.custom_system = reader.string();
          break;
        case 10:
          message.factor = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Unit {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      parent_id: isSet(object.parent_id) ? String(object.parent_id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      standard_type: isSet(object.standard_type) ? unitTypeFromJSON(object.standard_type) : undefined,
      custom_type: isSet(object.custom_type) ? String(object.custom_type) : undefined,
      standard_system: isSet(object.standard_system) ? unitSystemFromJSON(object.standard_system) : undefined,
      custom_system: isSet(object.custom_system) ? String(object.custom_system) : undefined,
      factor: isSet(object.factor) ? Number(object.factor) : 0,
    };
  },

  toJSON(message: Unit): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.parent_id !== undefined && (obj.parent_id = message.parent_id);
    message.name !== undefined && (obj.name = message.name);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.standard_type !== undefined &&
      (obj.standard_type = message.standard_type !== undefined ? unitTypeToJSON(message.standard_type) : undefined);
    message.custom_type !== undefined && (obj.custom_type = message.custom_type);
    message.standard_system !== undefined && (obj.standard_system = message.standard_system !== undefined
      ? unitSystemToJSON(message.standard_system)
      : undefined);
    message.custom_system !== undefined && (obj.custom_system = message.custom_system);
    message.factor !== undefined && (obj.factor = message.factor);
    return obj;
  },

  create(base?: DeepPartial<Unit>): Unit {
    return Unit.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Unit>): Unit {
    const message = createBaseUnit();
    message.id = object.id ?? "";
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    message.parent_id = object.parent_id ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.standard_type = object.standard_type ?? undefined;
    message.custom_type = object.custom_type ?? undefined;
    message.standard_system = object.standard_system ?? undefined;
    message.custom_system = object.custom_system ?? undefined;
    message.factor = object.factor ?? 0;
    return message;
  },
};

function createBaseUnitList(): UnitList {
  return { items: [], total_count: 0, subject: undefined };
}

export const UnitList = {
  encode(message: UnitList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      Unit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnitList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnitList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Unit.decode(reader, reader.uint32()));
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

  fromJSON(object: any): UnitList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => Unit.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: UnitList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? Unit.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<UnitList>): UnitList {
    return UnitList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UnitList>): UnitList {
    const message = createBaseUnitList();
    message.items = object.items?.map((e) => Unit.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseUnitListResponse(): UnitListResponse {
  return { items: [], total_count: 0, operation_status: undefined };
}

export const UnitListResponse = {
  encode(message: UnitListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      UnitResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(message.operation_status, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnitListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnitListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(UnitResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): UnitListResponse {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => UnitResponse.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      operation_status: isSet(object.operation_status) ? OperationStatus.fromJSON(object.operation_status) : undefined,
    };
  },

  toJSON(message: UnitListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? UnitResponse.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status ? OperationStatus.toJSON(message.operation_status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<UnitListResponse>): UnitListResponse {
    return UnitListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UnitListResponse>): UnitListResponse {
    const message = createBaseUnitListResponse();
    message.items = object.items?.map((e) => UnitResponse.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.operation_status = (object.operation_status !== undefined && object.operation_status !== null)
      ? OperationStatus.fromPartial(object.operation_status)
      : undefined;
    return message;
  },
};

function createBaseUnitResponse(): UnitResponse {
  return { payload: undefined, status: undefined };
}

export const UnitResponse = {
  encode(message: UnitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      Unit.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = Unit.decode(reader, reader.uint32());
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

  fromJSON(object: any): UnitResponse {
    return {
      payload: isSet(object.payload) ? Unit.fromJSON(object.payload) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: UnitResponse): unknown {
    const obj: any = {};
    message.payload !== undefined && (obj.payload = message.payload ? Unit.toJSON(message.payload) : undefined);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<UnitResponse>): UnitResponse {
    return UnitResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UnitResponse>): UnitResponse {
    const message = createBaseUnitResponse();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? Unit.fromPartial(object.payload)
      : undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

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

/** Microservice definition. */
export type ServiceDefinition = typeof ServiceDefinition;
export const ServiceDefinition = {
  name: "Service",
  fullName: "io.restorecommerce.unit.Service",
  methods: {
    read: {
      name: "Read",
      requestType: ReadRequest,
      requestStream: false,
      responseType: UnitListResponse,
      responseStream: false,
      options: {},
    },
    create: {
      name: "Create",
      requestType: UnitList,
      requestStream: false,
      responseType: UnitListResponse,
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
      requestType: UnitList,
      requestStream: false,
      responseType: UnitListResponse,
      responseStream: false,
      options: {},
    },
    upsert: {
      name: "Upsert",
      requestType: UnitList,
      requestStream: false,
      responseType: UnitListResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface ServiceImplementation<CallContextExt = {}> {
  read(request: ReadRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UnitListResponse>>;
  create(request: UnitList, context: CallContext & CallContextExt): Promise<DeepPartial<UnitListResponse>>;
  delete(request: DeleteRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteResponse>>;
  update(request: UnitList, context: CallContext & CallContextExt): Promise<DeepPartial<UnitListResponse>>;
  upsert(request: UnitList, context: CallContext & CallContextExt): Promise<DeepPartial<UnitListResponse>>;
}

export interface ServiceClient<CallOptionsExt = {}> {
  read(request: DeepPartial<ReadRequest>, options?: CallOptions & CallOptionsExt): Promise<UnitListResponse>;
  create(request: DeepPartial<UnitList>, options?: CallOptions & CallOptionsExt): Promise<UnitListResponse>;
  delete(request: DeepPartial<DeleteRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteResponse>;
  update(request: DeepPartial<UnitList>, options?: CallOptions & CallOptionsExt): Promise<UnitListResponse>;
  upsert(request: DeepPartial<UnitList>, options?: CallOptions & CallOptionsExt): Promise<UnitListResponse>;
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
    "name": "io/restorecommerce/unit.proto",
    "package": "io.restorecommerce.unit",
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
      "name": "Unit",
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
        "name": "parent_id",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "parentId",
        "options": {
          "ctype": 0,
          "packed": false,
          "jstype": 0,
          "lazy": false,
          "deprecated": false,
          "weak": false,
          "uninterpretedOption": [],
        },
        "proto3Optional": false,
      }, {
        "name": "name",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "symbol",
        "number": 5,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "symbol",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "standard_type",
        "number": 6,
        "label": 1,
        "type": 14,
        "typeName": ".io.restorecommerce.unit.UnitType",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "standardType",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "custom_type",
        "number": 7,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "customType",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "standard_system",
        "number": 8,
        "label": 1,
        "type": 14,
        "typeName": ".io.restorecommerce.unit.UnitSystem",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "standardSystem",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "custom_system",
        "number": 9,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "customSystem",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "factor",
        "number": 10,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "factor",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "type", "options": undefined }, { "name": "system", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "UnitList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.unit.Unit",
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
      "name": "UnitListResponse",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.unit.UnitResponse",
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
      "name": "UnitResponse",
      "field": [{
        "name": "payload",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.unit.Unit",
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
    }],
    "enumType": [{
      "name": "UnitType",
      "value": [
        { "name": "UnitTypeUndefined", "number": 0, "options": undefined },
        { "name": "Length", "number": 1, "options": undefined },
        { "name": "Weight", "number": 2, "options": undefined },
        { "name": "Speed", "number": 3, "options": undefined },
        { "name": "Force", "number": 4, "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "UnitSystem",
      "value": [{ "name": "UnitSystemUndefined", "number": 0, "options": undefined }, {
        "name": "Metric",
        "number": 1,
        "options": undefined,
      }, { "name": "Imperial", "number": 2, "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "service": [{
      "name": "Service",
      "method": [{
        "name": "Read",
        "inputType": ".io.restorecommerce.resourcebase.ReadRequest",
        "outputType": ".io.restorecommerce.unit.UnitListResponse",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Create",
        "inputType": ".io.restorecommerce.unit.UnitList",
        "outputType": ".io.restorecommerce.unit.UnitListResponse",
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
        "inputType": ".io.restorecommerce.unit.UnitList",
        "outputType": ".io.restorecommerce.unit.UnitListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Upsert",
        "inputType": ".io.restorecommerce.unit.UnitList",
        "outputType": ".io.restorecommerce.unit.UnitListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }],
      "options": { "deprecated": false, "uninterpretedOption": [] },
    }],
    "extension": [],
    "options": undefined,
    "sourceCodeInfo": {
      "location": [{
        "path": [6, 0],
        "span": [13, 0, 23, 1],
        "leadingComments": "\n Microservice definition.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [5, 0, 2, 4],
        "span": [30, 2, 12],
        "leadingComments": "",
        "trailingComments": "...\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0, 2, 9],
        "span": [62, 2, 21],
        "leadingComments": "",
        "trailingComments": "convert factor to standard unit\n",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {
    ".io.restorecommerce.unit.UnitType": UnitType,
    ".io.restorecommerce.unit.UnitSystem": UnitSystem,
    ".io.restorecommerce.unit.Unit": Unit,
    ".io.restorecommerce.unit.UnitList": UnitList,
    ".io.restorecommerce.unit.UnitListResponse": UnitListResponse,
    ".io.restorecommerce.unit.UnitResponse": UnitResponse,
    ".io.restorecommerce.unit.Deleted": Deleted,
  },
  dependencies: [protoMetadata1, protoMetadata2, protoMetadata3, protoMetadata4, protoMetadata5],
  options: {
    messages: {
      "Unit": {
        fields: {
          "parent_id": {
            "resolver": Resolver.decode(
              Buffer.from(
                "Ch0uaW8ucmVzdG9yZWNvbW1lcmNlLnVuaXQuVW5pdBIIcmVzb3VyY2UaBHVuaXQiBFJlYWQqBnBhcmVudA==",
                "base64",
              ),
            ),
          },
        },
      },
    },
    services: { "Service": { options: { "service_name": "unit" }, methods: { "Read": { "is_query": true } } } },
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
