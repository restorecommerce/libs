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
  id?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  logo?: string | undefined;
  website?: string | undefined;
  stub_type?: string | undefined;
  configuration?: Any | undefined;
  meta?: Meta | undefined;
}

export interface FulfillmentCourierList {
  items: FulfillmentCourier[];
  total_count?: number | undefined;
  subject?: Subject;
}

export interface FulfillmentCourierResponse {
  payload?: FulfillmentCourier;
  status?: Status;
}

export interface FulfillmentCourierListResponse {
  items: FulfillmentCourierResponse[];
  total_count: number;
  operation_status?: OperationStatus;
}

export interface Deleted {
  id: string;
}

function createBaseFulfillmentCourier(): FulfillmentCourier {
  return {
    id: undefined,
    name: undefined,
    description: undefined,
    logo: undefined,
    website: undefined,
    stub_type: undefined,
    configuration: undefined,
    meta: undefined,
  };
}

export const FulfillmentCourier = {
  encode(message: FulfillmentCourier, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== undefined) {
      writer.uint32(34).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(42).string(message.description);
    }
    if (message.logo !== undefined) {
      writer.uint32(50).string(message.logo);
    }
    if (message.website !== undefined) {
      writer.uint32(58).string(message.website);
    }
    if (message.stub_type !== undefined) {
      writer.uint32(66).string(message.stub_type);
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFulfillmentCourier();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.description = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.logo = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.website = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.stub_type = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.configuration = Any.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.meta = Meta.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FulfillmentCourier {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      description: isSet(object.description) ? String(object.description) : undefined,
      logo: isSet(object.logo) ? String(object.logo) : undefined,
      website: isSet(object.website) ? String(object.website) : undefined,
      stub_type: isSet(object.stub_type) ? String(object.stub_type) : undefined,
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
    message.stub_type !== undefined && (obj.stub_type = message.stub_type);
    message.configuration !== undefined &&
      (obj.configuration = message.configuration ? Any.toJSON(message.configuration) : undefined);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    return obj;
  },

  create(base?: DeepPartial<FulfillmentCourier>): FulfillmentCourier {
    return FulfillmentCourier.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FulfillmentCourier>): FulfillmentCourier {
    const message = createBaseFulfillmentCourier();
    message.id = object.id ?? undefined;
    message.name = object.name ?? undefined;
    message.description = object.description ?? undefined;
    message.logo = object.logo ?? undefined;
    message.website = object.website ?? undefined;
    message.stub_type = object.stub_type ?? undefined;
    message.configuration = (object.configuration !== undefined && object.configuration !== null)
      ? Any.fromPartial(object.configuration)
      : undefined;
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    return message;
  },
};

function createBaseFulfillmentCourierList(): FulfillmentCourierList {
  return { items: [], total_count: undefined, subject: undefined };
}

export const FulfillmentCourierList = {
  encode(message: FulfillmentCourierList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      FulfillmentCourier.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== undefined) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FulfillmentCourierList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFulfillmentCourierList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(FulfillmentCourier.decode(reader, reader.uint32()));
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

  fromJSON(object: any): FulfillmentCourierList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => FulfillmentCourier.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : undefined,
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
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<FulfillmentCourierList>): FulfillmentCourierList {
    return FulfillmentCourierList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FulfillmentCourierList>): FulfillmentCourierList {
    const message = createBaseFulfillmentCourierList();
    message.items = object.items?.map((e) => FulfillmentCourier.fromPartial(e)) || [];
    message.total_count = object.total_count ?? undefined;
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFulfillmentCourierResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payload = FulfillmentCourier.decode(reader, reader.uint32());
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

  create(base?: DeepPartial<FulfillmentCourierResponse>): FulfillmentCourierResponse {
    return FulfillmentCourierResponse.fromPartial(base ?? {});
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

function createBaseFulfillmentCourierListResponse(): FulfillmentCourierListResponse {
  return { items: [], total_count: 0, operation_status: undefined };
}

export const FulfillmentCourierListResponse = {
  encode(message: FulfillmentCourierListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      FulfillmentCourierResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(message.operation_status, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FulfillmentCourierListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFulfillmentCourierListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(FulfillmentCourierResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): FulfillmentCourierListResponse {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => FulfillmentCourierResponse.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      operation_status: isSet(object.operation_status) ? OperationStatus.fromJSON(object.operation_status) : undefined,
    };
  },

  toJSON(message: FulfillmentCourierListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? FulfillmentCourierResponse.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status ? OperationStatus.toJSON(message.operation_status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<FulfillmentCourierListResponse>): FulfillmentCourierListResponse {
    return FulfillmentCourierListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FulfillmentCourierListResponse>): FulfillmentCourierListResponse {
    const message = createBaseFulfillmentCourierListResponse();
    message.items = object.items?.map((e) => FulfillmentCourierResponse.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.operation_status = (object.operation_status !== undefined && object.operation_status !== null)
      ? OperationStatus.fromPartial(object.operation_status)
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

export type FulfillmentCourierServiceDefinition = typeof FulfillmentCourierServiceDefinition;
export const FulfillmentCourierServiceDefinition = {
  name: "FulfillmentCourierService",
  fullName: "io.restorecommerce.fulfillment_courier.FulfillmentCourierService",
  methods: {
    read: {
      name: "Read",
      requestType: ReadRequest,
      requestStream: false,
      responseType: FulfillmentCourierListResponse,
      responseStream: false,
      options: { _unknownFields: { 248008: [Buffer.from([1])] } },
    },
    create: {
      name: "Create",
      requestType: FulfillmentCourierList,
      requestStream: false,
      responseType: FulfillmentCourierListResponse,
      responseStream: false,
      options: {},
    },
    update: {
      name: "Update",
      requestType: FulfillmentCourierList,
      requestStream: false,
      responseType: FulfillmentCourierListResponse,
      responseStream: false,
      options: {},
    },
    upsert: {
      name: "Upsert",
      requestType: FulfillmentCourierList,
      requestStream: false,
      responseType: FulfillmentCourierListResponse,
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

export interface FulfillmentCourierServiceImplementation<CallContextExt = {}> {
  read(
    request: ReadRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<FulfillmentCourierListResponse>>;
  create(
    request: FulfillmentCourierList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<FulfillmentCourierListResponse>>;
  update(
    request: FulfillmentCourierList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<FulfillmentCourierListResponse>>;
  upsert(
    request: FulfillmentCourierList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<FulfillmentCourierListResponse>>;
  delete(request: DeleteRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteResponse>>;
}

export interface FulfillmentCourierServiceClient<CallOptionsExt = {}> {
  read(
    request: DeepPartial<ReadRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<FulfillmentCourierListResponse>;
  create(
    request: DeepPartial<FulfillmentCourierList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<FulfillmentCourierListResponse>;
  update(
    request: DeepPartial<FulfillmentCourierList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<FulfillmentCourierListResponse>;
  upsert(
    request: DeepPartial<FulfillmentCourierList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<FulfillmentCourierListResponse>;
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
        "proto3Optional": true,
      }, {
        "name": "name",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "description",
        "number": 5,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "description",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "logo",
        "number": 6,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "logo",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "website",
        "number": 7,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "website",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "stub_type",
        "number": 8,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 5,
        "jsonName": "stubType",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "configuration",
        "number": 10,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.Any",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 6,
        "jsonName": "configuration",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "meta",
        "number": 11,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.meta.Meta",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 7,
        "jsonName": "meta",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "_id", "options": undefined },
        { "name": "_name", "options": undefined },
        { "name": "_description", "options": undefined },
        { "name": "_logo", "options": undefined },
        { "name": "_website", "options": undefined },
        { "name": "_stub_type", "options": undefined },
        { "name": "_configuration", "options": undefined },
        { "name": "_meta", "options": undefined },
      ],
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
      "name": "FulfillmentCourierListResponse",
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
      "name": "FulfillmentCourierService",
      "method": [{
        "name": "Read",
        "inputType": ".io.restorecommerce.resourcebase.ReadRequest",
        "outputType": ".io.restorecommerce.fulfillment_courier.FulfillmentCourierListResponse",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Create",
        "inputType": ".io.restorecommerce.fulfillment_courier.FulfillmentCourierList",
        "outputType": ".io.restorecommerce.fulfillment_courier.FulfillmentCourierListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Update",
        "inputType": ".io.restorecommerce.fulfillment_courier.FulfillmentCourierList",
        "outputType": ".io.restorecommerce.fulfillment_courier.FulfillmentCourierListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Upsert",
        "inputType": ".io.restorecommerce.fulfillment_courier.FulfillmentCourierList",
        "outputType": ".io.restorecommerce.fulfillment_courier.FulfillmentCourierListResponse",
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
      "options": undefined,
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
    ".io.restorecommerce.fulfillment_courier.FulfillmentCourierListResponse": FulfillmentCourierListResponse,
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
    services: { "FulfillmentCourierService": { options: undefined, methods: { "Read": { "is_query": true } } } },
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
