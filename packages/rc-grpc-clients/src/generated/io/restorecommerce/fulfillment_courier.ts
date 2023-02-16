/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { Any, protoMetadata as protoMetadata1 } from "../../google/protobuf/any";
import { protoMetadata as protoMetadata4, Subject } from "./auth";
import { Meta, protoMetadata as protoMetadata3 } from "./meta";
import { KafkaSubscription, protoMetadata as protoMetadata6 } from "./options";
import { DeleteRequest, DeleteResponse, protoMetadata as protoMetadata2, ReadRequest } from "./resource_base";
import { OperationStatus, protoMetadata as protoMetadata5, Status } from "./status";

export const protobufPackage = "io.restorecommerce.fulfillment_courier";

export interface FulfillmentCourier {
  id: string;
  name: string;
  description: string;
  logo: string;
  website: string;
  stubType: string;
  configuration?: Any;
  meta?: Meta;
}

export interface FulfillmentCourierList {
  items: FulfillmentCourier[];
  totalCount: number;
  subject?: Subject;
}

export interface FulfillmentCourierResponse {
  payload?: FulfillmentCourier;
  status?: Status;
}

export interface FulfillmentCourierResponseList {
  items: FulfillmentCourierResponse[];
  totalCount: number;
  operationStatus?: OperationStatus;
}

export interface Deleted {
  id: string;
}

function createBaseFulfillmentCourier(): FulfillmentCourier {
  return {
    id: "",
    name: "",
    description: "",
    logo: "",
    website: "",
    stubType: "",
    configuration: undefined,
    meta: undefined,
  };
}

export const FulfillmentCourier = {
  encode(message: FulfillmentCourier, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.logo !== "") {
      writer.uint32(50).string(message.logo);
    }
    if (message.website !== "") {
      writer.uint32(58).string(message.website);
    }
    if (message.stubType !== "") {
      writer.uint32(66).string(message.stubType);
    }
    if (message.configuration !== undefined) {
      Any.encode(message.configuration, writer.uint32(82).fork()).ldelim();
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FulfillmentCourier {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFulfillmentCourier();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          message.logo = reader.string();
          break;
        case 7:
          message.website = reader.string();
          break;
        case 8:
          message.stubType = reader.string();
          break;
        case 10:
          message.configuration = Any.decode(reader, reader.uint32());
          break;
        case 11:
          message.meta = Meta.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FulfillmentCourier {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      logo: isSet(object.logo) ? String(object.logo) : "",
      website: isSet(object.website) ? String(object.website) : "",
      stubType: isSet(object.stubType) ? String(object.stubType) : "",
      configuration: isSet(object.configuration) ? Any.fromJSON(object.configuration) : undefined,
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
    };
  },

  toJSON(message: FulfillmentCourier): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.logo !== undefined && (obj.logo = message.logo);
    message.website !== undefined && (obj.website = message.website);
    message.stubType !== undefined && (obj.stubType = message.stubType);
    message.configuration !== undefined &&
      (obj.configuration = message.configuration ? Any.toJSON(message.configuration) : undefined);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<FulfillmentCourier>): FulfillmentCourier {
    const message = createBaseFulfillmentCourier();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.logo = object.logo ?? "";
    message.website = object.website ?? "";
    message.stubType = object.stubType ?? "";
    message.configuration = (object.configuration !== undefined && object.configuration !== null)
      ? Any.fromPartial(object.configuration)
      : undefined;
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    return message;
  },
};

function createBaseFulfillmentCourierList(): FulfillmentCourierList {
  return { items: [], totalCount: 0, subject: undefined };
}

export const FulfillmentCourierList = {
  encode(message: FulfillmentCourierList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      FulfillmentCourier.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FulfillmentCourierList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFulfillmentCourierList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(FulfillmentCourier.decode(reader, reader.uint32()));
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

  fromJSON(object: any): FulfillmentCourierList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => FulfillmentCourier.fromJSON(e)) : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: FulfillmentCourierList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? FulfillmentCourier.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = Math.round(message.totalCount));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<FulfillmentCourierList>): FulfillmentCourierList {
    const message = createBaseFulfillmentCourierList();
    message.items = object.items?.map((e) => FulfillmentCourier.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseFulfillmentCourierResponse(): FulfillmentCourierResponse {
  return { payload: undefined, status: undefined };
}

export const FulfillmentCourierResponse = {
  encode(message: FulfillmentCourierResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      FulfillmentCourier.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FulfillmentCourierResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFulfillmentCourierResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = FulfillmentCourier.decode(reader, reader.uint32());
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

  fromJSON(object: any): FulfillmentCourierResponse {
    return {
      payload: isSet(object.payload) ? FulfillmentCourier.fromJSON(object.payload) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: FulfillmentCourierResponse): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload ? FulfillmentCourier.toJSON(message.payload) : undefined);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<FulfillmentCourierResponse>): FulfillmentCourierResponse {
    const message = createBaseFulfillmentCourierResponse();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? FulfillmentCourier.fromPartial(object.payload)
      : undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBaseFulfillmentCourierResponseList(): FulfillmentCourierResponseList {
  return { items: [], totalCount: 0, operationStatus: undefined };
}

export const FulfillmentCourierResponseList = {
  encode(message: FulfillmentCourierResponseList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      FulfillmentCourierResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.operationStatus !== undefined) {
      OperationStatus.encode(message.operationStatus, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FulfillmentCourierResponseList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFulfillmentCourierResponseList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(FulfillmentCourierResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalCount = reader.uint32();
          break;
        case 3:
          message.operationStatus = OperationStatus.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FulfillmentCourierResponseList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => FulfillmentCourierResponse.fromJSON(e)) : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
      operationStatus: isSet(object.operationStatus) ? OperationStatus.fromJSON(object.operationStatus) : undefined,
    };
  },

  toJSON(message: FulfillmentCourierResponseList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? FulfillmentCourierResponse.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = Math.round(message.totalCount));
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus ? OperationStatus.toJSON(message.operationStatus) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<FulfillmentCourierResponseList>): FulfillmentCourierResponseList {
    const message = createBaseFulfillmentCourierResponseList();
    message.items = object.items?.map((e) => FulfillmentCourierResponse.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    message.operationStatus = (object.operationStatus !== undefined && object.operationStatus !== null)
      ? OperationStatus.fromPartial(object.operationStatus)
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

  fromPartial(object: DeepPartial<Deleted>): Deleted {
    const message = createBaseDeleted();
    message.id = object.id ?? "";
    return message;
  },
};

export type ServiceDefinition = typeof ServiceDefinition;
export const ServiceDefinition = {
  name: "Service",
  fullName: "io.restorecommerce.fulfillment_courier.Service",
  methods: {
    read: {
      name: "Read",
      requestType: ReadRequest,
      requestStream: false,
      responseType: FulfillmentCourierResponseList,
      responseStream: false,
      options: {},
    },
    create: {
      name: "Create",
      requestType: FulfillmentCourierList,
      requestStream: false,
      responseType: FulfillmentCourierResponseList,
      responseStream: false,
      options: {},
    },
    update: {
      name: "Update",
      requestType: FulfillmentCourierList,
      requestStream: false,
      responseType: FulfillmentCourierResponseList,
      responseStream: false,
      options: {},
    },
    upsert: {
      name: "Upsert",
      requestType: FulfillmentCourierList,
      requestStream: false,
      responseType: FulfillmentCourierResponseList,
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
  },
} as const;

export interface ServiceServiceImplementation<CallContextExt = {}> {
  read(
    request: ReadRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<FulfillmentCourierResponseList>>;
  create(
    request: FulfillmentCourierList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<FulfillmentCourierResponseList>>;
  update(
    request: FulfillmentCourierList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<FulfillmentCourierResponseList>>;
  upsert(
    request: FulfillmentCourierList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<FulfillmentCourierResponseList>>;
  delete(request: DeleteRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteResponse>>;
}

export interface ServiceClient<CallOptionsExt = {}> {
  read(
    request: DeepPartial<ReadRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<FulfillmentCourierResponseList>;
  create(
    request: DeepPartial<FulfillmentCourierList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<FulfillmentCourierResponseList>;
  update(
    request: DeepPartial<FulfillmentCourierList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<FulfillmentCourierResponseList>;
  upsert(
    request: DeepPartial<FulfillmentCourierList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<FulfillmentCourierResponseList>;
  delete(request: DeepPartial<DeleteRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteResponse>;
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
    "name": "io/restorecommerce/fulfillment_courier.proto",
    "package": "io.restorecommerce.fulfillment_courier",
    "dependency": [
      "google/protobuf/any.proto",
      "io/restorecommerce/resource_base.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/options.proto",
    ],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "FulfillmentCourier",
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
        "name": "description",
        "number": 5,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "description",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "logo",
        "number": 6,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "logo",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "website",
        "number": 7,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "website",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "stub_type",
        "number": 8,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "stubType",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "configuration",
        "number": 10,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.Any",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "configuration",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "meta",
        "number": 11,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.meta.Meta",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "meta",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": {
        "messageSetWireFormat": false,
        "noStandardDescriptorAccessor": false,
        "deprecated": false,
        "mapEntry": false,
        "uninterpretedOption": [],
      },
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "FulfillmentCourierList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment_courier.FulfillmentCourier",
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
      "name": "FulfillmentCourierResponse",
      "field": [{
        "name": "payload",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment_courier.FulfillmentCourier",
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
      "name": "FulfillmentCourierResponseList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment_courier.FulfillmentCourierResponse",
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
    "enumType": [],
    "service": [{
      "name": "Service",
      "method": [{
        "name": "Read",
        "inputType": ".io.restorecommerce.resourcebase.ReadRequest",
        "outputType": ".io.restorecommerce.fulfillment_courier.FulfillmentCourierResponseList",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Create",
        "inputType": ".io.restorecommerce.fulfillment_courier.FulfillmentCourierList",
        "outputType": ".io.restorecommerce.fulfillment_courier.FulfillmentCourierResponseList",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Update",
        "inputType": ".io.restorecommerce.fulfillment_courier.FulfillmentCourierList",
        "outputType": ".io.restorecommerce.fulfillment_courier.FulfillmentCourierResponseList",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Upsert",
        "inputType": ".io.restorecommerce.fulfillment_courier.FulfillmentCourierList",
        "outputType": ".io.restorecommerce.fulfillment_courier.FulfillmentCourierResponseList",
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
      }],
      "options": { "deprecated": false, "uninterpretedOption": [] },
    }],
    "extension": [],
    "options": undefined,
    "sourceCodeInfo": { "location": [] },
    "syntax": "proto3",
  }),
  references: {
    ".io.restorecommerce.fulfillment_courier.FulfillmentCourier": FulfillmentCourier,
    ".io.restorecommerce.fulfillment_courier.FulfillmentCourierList": FulfillmentCourierList,
    ".io.restorecommerce.fulfillment_courier.FulfillmentCourierResponse": FulfillmentCourierResponse,
    ".io.restorecommerce.fulfillment_courier.FulfillmentCourierResponseList": FulfillmentCourierResponseList,
    ".io.restorecommerce.fulfillment_courier.Deleted": Deleted,
  },
  dependencies: [protoMetadata1, protoMetadata2, protoMetadata3, protoMetadata4, protoMetadata5, protoMetadata6],
  options: {
    messages: {
      "FulfillmentCourier": {
        options: {
          "kafka_subscriber": KafkaSubscription.decode(
            Buffer.from(
              "ChNmdWxmaWxsbWVudENvdXJpZXJzEi9pby5yZXN0b3JlY29tbWVyY2UuZnVsZmlsbG1lbnRfY291cmllci5yZXNvdXJjZRoZZnVsZmlsbG1lbnRDb3VyaWVyQ3JlYXRlZCIZZnVsZmlsbG1lbnRDb3VyaWVyVXBkYXRlZCoZZnVsZmlsbG1lbnRDb3VyaWVyRGVsZXRlZA==",
              "base64",
            ),
          ),
        },
      },
    },
    services: {
      "Service": { options: { "service_name": "fulfillment_courier" }, methods: { "Read": { "is_query": true } } },
    },
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
