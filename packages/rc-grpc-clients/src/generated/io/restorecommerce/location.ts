/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { Any, protoMetadata as protoMetadata2 } from "../../google/protobuf/any";
import { protoMetadata as protoMetadata8 } from "./address";
import { protoMetadata as protoMetadata4, Subject } from "./auth";
import { Meta, protoMetadata as protoMetadata3 } from "./meta";
import { protoMetadata as protoMetadata6, Resolver } from "./options";
import { protoMetadata as protoMetadata7 } from "./organization";
import { DeleteRequest, DeleteResponse, protoMetadata as protoMetadata1, ReadRequest } from "./resource_base";
import { OperationStatus, protoMetadata as protoMetadata5, Status } from "./status";

export const protobufPackage = "io.restorecommerce.location";

export interface Deleted {
  id: string;
}

export interface LocationList {
  items: Location[];
  totalCount?: number | undefined;
  subject?: Subject;
}

export interface LocationListResponse {
  items: LocationResponse[];
  totalCount: number;
  operationStatus?: OperationStatus;
}

export interface LocationResponse {
  payload?: Location;
  status?: Status;
}

export interface Location {
  /** Location ID, unique, key */
  id?: string | undefined;
  meta?:
    | Meta
    | undefined;
  /** Location name */
  name?: string | undefined;
  description?:
    | string
    | undefined;
  /** Organization to which this location is linked */
  organizationId?:
    | string
    | undefined;
  /** Location which may contain this location; may be null */
  parentId?: string | undefined;
  addressId?:
    | string
    | undefined;
  /** / additional data */
  data?:
    | Any
    | undefined;
  /** location type */
  type?: string | undefined;
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

function createBaseLocationList(): LocationList {
  return { items: [], totalCount: undefined, subject: undefined };
}

export const LocationList = {
  encode(message: LocationList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      Location.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== undefined) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LocationList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocationList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(Location.decode(reader, reader.uint32()));
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

  fromJSON(object: any): LocationList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => Location.fromJSON(e)) : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: LocationList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? Location.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = Math.round(message.totalCount));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<LocationList>): LocationList {
    return LocationList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<LocationList>): LocationList {
    const message = createBaseLocationList();
    message.items = object.items?.map((e) => Location.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseLocationListResponse(): LocationListResponse {
  return { items: [], totalCount: 0, operationStatus: undefined };
}

export const LocationListResponse = {
  encode(message: LocationListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      LocationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.operationStatus !== undefined) {
      OperationStatus.encode(message.operationStatus, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LocationListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocationListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(LocationResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): LocationListResponse {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => LocationResponse.fromJSON(e)) : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
      operationStatus: isSet(object.operationStatus) ? OperationStatus.fromJSON(object.operationStatus) : undefined,
    };
  },

  toJSON(message: LocationListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? LocationResponse.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = Math.round(message.totalCount));
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus ? OperationStatus.toJSON(message.operationStatus) : undefined);
    return obj;
  },

  create(base?: DeepPartial<LocationListResponse>): LocationListResponse {
    return LocationListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<LocationListResponse>): LocationListResponse {
    const message = createBaseLocationListResponse();
    message.items = object.items?.map((e) => LocationResponse.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    message.operationStatus = (object.operationStatus !== undefined && object.operationStatus !== null)
      ? OperationStatus.fromPartial(object.operationStatus)
      : undefined;
    return message;
  },
};

function createBaseLocationResponse(): LocationResponse {
  return { payload: undefined, status: undefined };
}

export const LocationResponse = {
  encode(message: LocationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      Location.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LocationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payload = Location.decode(reader, reader.uint32());
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

  fromJSON(object: any): LocationResponse {
    return {
      payload: isSet(object.payload) ? Location.fromJSON(object.payload) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: LocationResponse): unknown {
    const obj: any = {};
    message.payload !== undefined && (obj.payload = message.payload ? Location.toJSON(message.payload) : undefined);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<LocationResponse>): LocationResponse {
    return LocationResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<LocationResponse>): LocationResponse {
    const message = createBaseLocationResponse();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? Location.fromPartial(object.payload)
      : undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBaseLocation(): Location {
  return {
    id: undefined,
    meta: undefined,
    name: undefined,
    description: undefined,
    organizationId: undefined,
    parentId: undefined,
    addressId: undefined,
    data: undefined,
    type: undefined,
  };
}

export const Location = {
  encode(message: Location, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    if (message.name !== undefined) {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(34).string(message.description);
    }
    if (message.organizationId !== undefined) {
      writer.uint32(42).string(message.organizationId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(50).string(message.parentId);
    }
    if (message.addressId !== undefined) {
      writer.uint32(66).string(message.addressId);
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(74).fork()).ldelim();
    }
    if (message.type !== undefined) {
      writer.uint32(82).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Location {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocation();
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

          message.description = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.organizationId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.parentId = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.addressId = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.data = Any.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.type = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Location {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      description: isSet(object.description) ? String(object.description) : undefined,
      organizationId: isSet(object.organizationId) ? String(object.organizationId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      addressId: isSet(object.addressId) ? String(object.addressId) : undefined,
      data: isSet(object.data) ? Any.fromJSON(object.data) : undefined,
      type: isSet(object.type) ? String(object.type) : undefined,
    };
  },

  toJSON(message: Location): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.organizationId !== undefined && (obj.organizationId = message.organizationId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.addressId !== undefined && (obj.addressId = message.addressId);
    message.data !== undefined && (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create(base?: DeepPartial<Location>): Location {
    return Location.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Location>): Location {
    const message = createBaseLocation();
    message.id = object.id ?? undefined;
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    message.name = object.name ?? undefined;
    message.description = object.description ?? undefined;
    message.organizationId = object.organizationId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.addressId = object.addressId ?? undefined;
    message.data = (object.data !== undefined && object.data !== null) ? Any.fromPartial(object.data) : undefined;
    message.type = object.type ?? undefined;
    return message;
  },
};

/** Microservice definition. */
export type LocationServiceDefinition = typeof LocationServiceDefinition;
export const LocationServiceDefinition = {
  name: "LocationService",
  fullName: "io.restorecommerce.location.LocationService",
  methods: {
    read: {
      name: "Read",
      requestType: ReadRequest,
      requestStream: false,
      responseType: LocationListResponse,
      responseStream: false,
      options: { _unknownFields: { 248008: [Buffer.from([1])] } },
    },
    create: {
      name: "Create",
      requestType: LocationList,
      requestStream: false,
      responseType: LocationListResponse,
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
      requestType: LocationList,
      requestStream: false,
      responseType: LocationListResponse,
      responseStream: false,
      options: {},
    },
    upsert: {
      name: "Upsert",
      requestType: LocationList,
      requestStream: false,
      responseType: LocationListResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface LocationServiceImplementation<CallContextExt = {}> {
  read(request: ReadRequest, context: CallContext & CallContextExt): Promise<DeepPartial<LocationListResponse>>;
  create(request: LocationList, context: CallContext & CallContextExt): Promise<DeepPartial<LocationListResponse>>;
  delete(request: DeleteRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteResponse>>;
  update(request: LocationList, context: CallContext & CallContextExt): Promise<DeepPartial<LocationListResponse>>;
  upsert(request: LocationList, context: CallContext & CallContextExt): Promise<DeepPartial<LocationListResponse>>;
}

export interface LocationServiceClient<CallOptionsExt = {}> {
  read(request: DeepPartial<ReadRequest>, options?: CallOptions & CallOptionsExt): Promise<LocationListResponse>;
  create(request: DeepPartial<LocationList>, options?: CallOptions & CallOptionsExt): Promise<LocationListResponse>;
  delete(request: DeepPartial<DeleteRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteResponse>;
  update(request: DeepPartial<LocationList>, options?: CallOptions & CallOptionsExt): Promise<LocationListResponse>;
  upsert(request: DeepPartial<LocationList>, options?: CallOptions & CallOptionsExt): Promise<LocationListResponse>;
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
    "name": "io/restorecommerce/location.proto",
    "package": "io.restorecommerce.location",
    "dependency": [
      "io/restorecommerce/resource_base.proto",
      "google/protobuf/any.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/options.proto",
      "io/restorecommerce/organization.proto",
      "io/restorecommerce/address.proto",
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
      "name": "LocationList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.location.Location",
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
      "name": "LocationListResponse",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.location.LocationResponse",
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
      "name": "LocationResponse",
      "field": [{
        "name": "payload",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.location.Location",
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
      "name": "Location",
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
        "name": "organization_id",
        "number": 5,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "organizationId",
        "options": {
          "ctype": 0,
          "packed": false,
          "jstype": 0,
          "lazy": false,
          "deprecated": false,
          "weak": false,
          "uninterpretedOption": [],
        },
        "proto3Optional": true,
      }, {
        "name": "parent_id",
        "number": 6,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 5,
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
        "proto3Optional": true,
      }, {
        "name": "address_id",
        "number": 8,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 6,
        "jsonName": "addressId",
        "options": {
          "ctype": 0,
          "packed": false,
          "jstype": 0,
          "lazy": false,
          "deprecated": false,
          "weak": false,
          "uninterpretedOption": [],
        },
        "proto3Optional": true,
      }, {
        "name": "data",
        "number": 9,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.Any",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 7,
        "jsonName": "data",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "type",
        "number": 10,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 8,
        "jsonName": "type",
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
        { "name": "_name", "options": undefined },
        { "name": "_description", "options": undefined },
        { "name": "_organization_id", "options": undefined },
        { "name": "_parent_id", "options": undefined },
        { "name": "_address_id", "options": undefined },
        { "name": "_data", "options": undefined },
        { "name": "_type", "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "enumType": [],
    "service": [{
      "name": "LocationService",
      "method": [{
        "name": "Read",
        "inputType": ".io.restorecommerce.resourcebase.ReadRequest",
        "outputType": ".io.restorecommerce.location.LocationListResponse",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Create",
        "inputType": ".io.restorecommerce.location.LocationList",
        "outputType": ".io.restorecommerce.location.LocationListResponse",
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
        "inputType": ".io.restorecommerce.location.LocationList",
        "outputType": ".io.restorecommerce.location.LocationListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Upsert",
        "inputType": ".io.restorecommerce.location.LocationList",
        "outputType": ".io.restorecommerce.location.LocationListResponse",
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
        "path": [3, 6],
        "span": [12, 0, 47],
        "leadingComments": " Used by resolvers\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0],
        "span": [18, 0, 26, 1],
        "leadingComments": "\n Microservice definition.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 4, 2, 0],
        "span": [50, 2, 25],
        "leadingComments": "",
        "trailingComments": " Location ID, unique, key\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 4, 2, 2],
        "span": [52, 2, 27],
        "leadingComments": "",
        "trailingComments": " Location name\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 4, 2, 4],
        "span": [54, 2, 62, 4],
        "leadingComments": "",
        "trailingComments": " Organization to which this location is linked\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 4, 2, 5],
        "span": [63, 2, 71, 4],
        "leadingComments": "",
        "trailingComments": "  Location which may contain this location; may be null\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 4, 2, 7],
        "span": [81, 2, 40],
        "leadingComments": "",
        "trailingComments": "/ additional data\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 4, 2, 8],
        "span": [82, 2, 28],
        "leadingComments": "",
        "trailingComments": " location type\n",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {
    ".io.restorecommerce.location.Deleted": Deleted,
    ".io.restorecommerce.location.LocationList": LocationList,
    ".io.restorecommerce.location.LocationListResponse": LocationListResponse,
    ".io.restorecommerce.location.LocationResponse": LocationResponse,
    ".io.restorecommerce.location.Location": Location,
  },
  dependencies: [
    protoMetadata1,
    protoMetadata2,
    protoMetadata3,
    protoMetadata4,
    protoMetadata5,
    protoMetadata6,
    protoMetadata7,
    protoMetadata8,
  ],
  options: {
    messages: {
      "Location": {
        fields: {
          "organization_id": {
            "resolver": Resolver.decode(
              Buffer.from(
                "Ci0uaW8ucmVzdG9yZWNvbW1lcmNlLm9yZ2FuaXphdGlvbi5Pcmdhbml6YXRpb24SCHJlc291cmNlGgxvcmdhbml6YXRpb24iBFJlYWQqDG9yZ2FuaXphdGlvbg==",
                "base64",
              ),
            ),
          },
          "parent_id": {
            "resolver": Resolver.decode(
              Buffer.from(
                "CiUuaW8ucmVzdG9yZWNvbW1lcmNlLmxvY2F0aW9uLkxvY2F0aW9uEghyZXNvdXJjZRoIbG9jYXRpb24iBFJlYWQqBnBhcmVudA==",
                "base64",
              ),
            ),
          },
          "address_id": {
            "resolver": Resolver.decode(
              Buffer.from(
                "CiMuaW8ucmVzdG9yZWNvbW1lcmNlLmFkZHJlc3MuQWRkcmVzcxIIcmVzb3VyY2UaB2FkZHJlc3MiBFJlYWQqB2FkZHJlc3M=",
                "base64",
              ),
            ),
          },
        },
      },
    },
    services: { "LocationService": { options: undefined, methods: { "Read": { "is_query": true } } } },
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
