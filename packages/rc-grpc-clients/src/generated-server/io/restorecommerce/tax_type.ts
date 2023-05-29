/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { protoMetadata as protoMetadata3, Subject } from "./auth";
import { Meta, protoMetadata as protoMetadata2 } from "./meta";
import { protoMetadata as protoMetadata5 } from "./options";
import { DeleteRequest, DeleteResponse, protoMetadata as protoMetadata1, ReadRequest } from "./resource_base";
import { OperationStatus, protoMetadata as protoMetadata4, Status } from "./status";

export const protobufPackage = "io.restorecommerce.tax_type";

export enum Behavior {
  NONE = "NONE",
  ADDITIVE_ON_GROSS = "ADDITIVE_ON_GROSS",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function behaviorFromJSON(object: any): Behavior {
  switch (object) {
    case 0:
    case "NONE":
      return Behavior.NONE;
    case 1:
    case "ADDITIVE_ON_GROSS":
      return Behavior.ADDITIVE_ON_GROSS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Behavior.UNRECOGNIZED;
  }
}

export function behaviorToJSON(object: Behavior): string {
  switch (object) {
    case Behavior.NONE:
      return "NONE";
    case Behavior.ADDITIVE_ON_GROSS:
      return "ADDITIVE_ON_GROSS";
    case Behavior.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function behaviorToNumber(object: Behavior): number {
  switch (object) {
    case Behavior.NONE:
      return 0;
    case Behavior.ADDITIVE_ON_GROSS:
      return 1;
    case Behavior.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface Deleted {
  id?: string | undefined;
}

export interface TaxTypeList {
  items: TaxType[];
  total_count?: number | undefined;
  subject?: Subject;
}

export interface TaxTypeListResponse {
  items: TaxTypeResponse[];
  total_count: number;
  operation_status?: OperationStatus;
}

export interface TaxTypeResponse {
  payload?: TaxType;
  status?: Status;
}

export interface TaxType {
  id?: string | undefined;
  meta?: Meta | undefined;
  type?: string | undefined;
  description?: string | undefined;
  behavior?: Behavior | undefined;
}

function createBaseDeleted(): Deleted {
  return { id: undefined };
}

export const Deleted = {
  encode(message: Deleted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
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
    return { id: isSet(object.id) ? String(object.id) : undefined };
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
    message.id = object.id ?? undefined;
    return message;
  },
};

function createBaseTaxTypeList(): TaxTypeList {
  return { items: [], total_count: undefined, subject: undefined };
}

export const TaxTypeList = {
  encode(message: TaxTypeList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      TaxType.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== undefined) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TaxTypeList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTaxTypeList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(TaxType.decode(reader, reader.uint32()));
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

  fromJSON(object: any): TaxTypeList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => TaxType.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: TaxTypeList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? TaxType.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<TaxTypeList>): TaxTypeList {
    return TaxTypeList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TaxTypeList>): TaxTypeList {
    const message = createBaseTaxTypeList();
    message.items = object.items?.map((e) => TaxType.fromPartial(e)) || [];
    message.total_count = object.total_count ?? undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseTaxTypeListResponse(): TaxTypeListResponse {
  return { items: [], total_count: 0, operation_status: undefined };
}

export const TaxTypeListResponse = {
  encode(message: TaxTypeListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      TaxTypeResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(message.operation_status, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TaxTypeListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTaxTypeListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(TaxTypeResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): TaxTypeListResponse {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => TaxTypeResponse.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      operation_status: isSet(object.operation_status) ? OperationStatus.fromJSON(object.operation_status) : undefined,
    };
  },

  toJSON(message: TaxTypeListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? TaxTypeResponse.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status ? OperationStatus.toJSON(message.operation_status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<TaxTypeListResponse>): TaxTypeListResponse {
    return TaxTypeListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TaxTypeListResponse>): TaxTypeListResponse {
    const message = createBaseTaxTypeListResponse();
    message.items = object.items?.map((e) => TaxTypeResponse.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.operation_status = (object.operation_status !== undefined && object.operation_status !== null)
      ? OperationStatus.fromPartial(object.operation_status)
      : undefined;
    return message;
  },
};

function createBaseTaxTypeResponse(): TaxTypeResponse {
  return { payload: undefined, status: undefined };
}

export const TaxTypeResponse = {
  encode(message: TaxTypeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      TaxType.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TaxTypeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTaxTypeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payload = TaxType.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): TaxTypeResponse {
    return {
      payload: isSet(object.payload) ? TaxType.fromJSON(object.payload) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: TaxTypeResponse): unknown {
    const obj: any = {};
    message.payload !== undefined && (obj.payload = message.payload ? TaxType.toJSON(message.payload) : undefined);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<TaxTypeResponse>): TaxTypeResponse {
    return TaxTypeResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TaxTypeResponse>): TaxTypeResponse {
    const message = createBaseTaxTypeResponse();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? TaxType.fromPartial(object.payload)
      : undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBaseTaxType(): TaxType {
  return { id: undefined, meta: undefined, type: undefined, description: undefined, behavior: undefined };
}

export const TaxType = {
  encode(message: TaxType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    if (message.type !== undefined) {
      writer.uint32(26).string(message.type);
    }
    if (message.description !== undefined) {
      writer.uint32(34).string(message.description);
    }
    if (message.behavior !== undefined) {
      writer.uint32(40).int32(behaviorToNumber(message.behavior));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TaxType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTaxType();
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

          message.type = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.description = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.behavior = behaviorFromJSON(reader.int32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TaxType {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      type: isSet(object.type) ? String(object.type) : undefined,
      description: isSet(object.description) ? String(object.description) : undefined,
      behavior: isSet(object.behavior) ? behaviorFromJSON(object.behavior) : undefined,
    };
  },

  toJSON(message: TaxType): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.type !== undefined && (obj.type = message.type);
    message.description !== undefined && (obj.description = message.description);
    message.behavior !== undefined &&
      (obj.behavior = message.behavior !== undefined ? behaviorToJSON(message.behavior) : undefined);
    return obj;
  },

  create(base?: DeepPartial<TaxType>): TaxType {
    return TaxType.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TaxType>): TaxType {
    const message = createBaseTaxType();
    message.id = object.id ?? undefined;
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    message.type = object.type ?? undefined;
    message.description = object.description ?? undefined;
    message.behavior = object.behavior ?? undefined;
    return message;
  },
};

/** Microservice definition. */
export type TaxTypeServiceDefinition = typeof TaxTypeServiceDefinition;
export const TaxTypeServiceDefinition = {
  name: "TaxTypeService",
  fullName: "io.restorecommerce.tax_type.TaxTypeService",
  methods: {
    read: {
      name: "Read",
      requestType: ReadRequest,
      requestStream: false,
      responseType: TaxTypeListResponse,
      responseStream: false,
      options: { _unknownFields: { 248008: [Buffer.from([1])] } },
    },
    create: {
      name: "Create",
      requestType: TaxTypeList,
      requestStream: false,
      responseType: TaxTypeListResponse,
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
      requestType: TaxTypeList,
      requestStream: false,
      responseType: TaxTypeListResponse,
      responseStream: false,
      options: {},
    },
    upsert: {
      name: "Upsert",
      requestType: TaxTypeList,
      requestStream: false,
      responseType: TaxTypeListResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface TaxTypeServiceImplementation<CallContextExt = {}> {
  read(request: ReadRequest, context: CallContext & CallContextExt): Promise<DeepPartial<TaxTypeListResponse>>;
  create(request: TaxTypeList, context: CallContext & CallContextExt): Promise<DeepPartial<TaxTypeListResponse>>;
  delete(request: DeleteRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteResponse>>;
  update(request: TaxTypeList, context: CallContext & CallContextExt): Promise<DeepPartial<TaxTypeListResponse>>;
  upsert(request: TaxTypeList, context: CallContext & CallContextExt): Promise<DeepPartial<TaxTypeListResponse>>;
}

export interface TaxTypeServiceClient<CallOptionsExt = {}> {
  read(request: DeepPartial<ReadRequest>, options?: CallOptions & CallOptionsExt): Promise<TaxTypeListResponse>;
  create(request: DeepPartial<TaxTypeList>, options?: CallOptions & CallOptionsExt): Promise<TaxTypeListResponse>;
  delete(request: DeepPartial<DeleteRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteResponse>;
  update(request: DeepPartial<TaxTypeList>, options?: CallOptions & CallOptionsExt): Promise<TaxTypeListResponse>;
  upsert(request: DeepPartial<TaxTypeList>, options?: CallOptions & CallOptionsExt): Promise<TaxTypeListResponse>;
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
    "name": "io/restorecommerce/tax_type.proto",
    "package": "io.restorecommerce.tax_type",
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
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_id", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "TaxTypeList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.tax_type.TaxType",
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
      "name": "TaxTypeListResponse",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.tax_type.TaxTypeResponse",
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
      "name": "TaxTypeResponse",
      "field": [{
        "name": "payload",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.tax_type.TaxType",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "payload",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "status",
        "number": 3,
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
      "name": "TaxType",
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
        "name": "type",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "type",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "description",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "description",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "behavior",
        "number": 5,
        "label": 1,
        "type": 14,
        "typeName": ".io.restorecommerce.tax_type.Behavior",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "behavior",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "_id", "options": undefined },
        { "name": "_meta", "options": undefined },
        { "name": "_type", "options": undefined },
        { "name": "_description", "options": undefined },
        { "name": "_behavior", "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "enumType": [{
      "name": "Behavior",
      "value": [{ "name": "NONE", "number": 0, "options": undefined }, {
        "name": "ADDITIVE_ON_GROSS",
        "number": 1,
        "options": undefined,
      }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "service": [{
      "name": "TaxTypeService",
      "method": [{
        "name": "Read",
        "inputType": ".io.restorecommerce.resourcebase.ReadRequest",
        "outputType": ".io.restorecommerce.tax_type.TaxTypeListResponse",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Create",
        "inputType": ".io.restorecommerce.tax_type.TaxTypeList",
        "outputType": ".io.restorecommerce.tax_type.TaxTypeListResponse",
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
        "inputType": ".io.restorecommerce.tax_type.TaxTypeList",
        "outputType": ".io.restorecommerce.tax_type.TaxTypeListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Upsert",
        "inputType": ".io.restorecommerce.tax_type.TaxTypeList",
        "outputType": ".io.restorecommerce.tax_type.TaxTypeListResponse",
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
        "span": [13, 0, 21, 1],
        "leadingComments": "\n Microservice definition.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {
    ".io.restorecommerce.tax_type.Behavior": Behavior,
    ".io.restorecommerce.tax_type.Deleted": Deleted,
    ".io.restorecommerce.tax_type.TaxTypeList": TaxTypeList,
    ".io.restorecommerce.tax_type.TaxTypeListResponse": TaxTypeListResponse,
    ".io.restorecommerce.tax_type.TaxTypeResponse": TaxTypeResponse,
    ".io.restorecommerce.tax_type.TaxType": TaxType,
  },
  dependencies: [protoMetadata1, protoMetadata2, protoMetadata3, protoMetadata4, protoMetadata5],
  options: { services: { "TaxTypeService": { options: undefined, methods: { "Read": { "is_query": true } } } } },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
