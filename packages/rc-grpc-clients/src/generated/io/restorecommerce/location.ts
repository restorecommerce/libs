/* eslint-disable */
import { FileDescriptorProto } from "ts-proto-descriptors/google/protobuf/descriptor";
import {
  Subject,
  protoMetadata as protoMetadata4,
} from "../../io/restorecommerce/auth";
import {
  OperationStatus,
  Status,
  protoMetadata as protoMetadata5,
} from "../../io/restorecommerce/status";
import {
  Meta,
  protoMetadata as protoMetadata3,
} from "../../io/restorecommerce/meta";
import {
  Any,
  protoMetadata as protoMetadata2,
} from "../../google/protobuf/any";
import {
  protoMetadata as protoMetadata1,
  DeleteResponse,
  ReadRequest,
  DeleteRequest,
} from "../../io/restorecommerce/resource_base";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "io.restorecommerce.location";

export interface Deleted {
  id: string;
}

export interface LocationList {
  items: Location[];
  total_count: number;
  subject?: Subject;
}

export interface LocationListResponse {
  items: LocationResponse[];
  total_count: number;
  operation_status?: OperationStatus;
}

export interface LocationResponse {
  payload?: Location;
  status?: Status;
}

export interface Location {
  /** Location ID, unique, key */
  id: string;
  meta?: Meta;
  /** Location name */
  name: string;
  description: string;
  /** Organization to which this location is linked */
  organization_id: string;
  /** Location which may contain this location; may be null */
  parent_id: string;
  /** Locations contained in this location */
  children_ids: string[];
  address_id: string;
  /** / additional data */
  data?: Any;
}

const baseDeleted: object = { id: "" };

export const Deleted = {
  encode(message: Deleted, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Deleted {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseDeleted) as Deleted;
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
    const message = globalThis.Object.create(baseDeleted) as Deleted;
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

const baseLocationList: object = { total_count: 0 };

export const LocationList = {
  encode(message: LocationList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      Location.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): LocationList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseLocationList) as LocationList;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Location.decode(reader, reader.uint32()));
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

  fromJSON(object: any): LocationList {
    const message = globalThis.Object.create(baseLocationList) as LocationList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Location.fromJSON(e));
      }
    }
    if (object.total_count !== undefined && object.total_count !== null) {
      message.total_count = Number(object.total_count);
    } else {
      message.total_count = 0;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<LocationList>): LocationList {
    const message = { ...baseLocationList } as LocationList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Location.fromPartial(e));
      }
    }
    if (object.total_count !== undefined && object.total_count !== null) {
      message.total_count = object.total_count;
    } else {
      message.total_count = 0;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  toJSON(message: LocationList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? Location.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.total_count !== undefined &&
      (obj.total_count = message.total_count);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseLocationListResponse: object = { total_count: 0 };

export const LocationListResponse = {
  encode(
    message: LocationListResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.items) {
      LocationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(
        message.operation_status,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): LocationListResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseLocationListResponse
    ) as LocationListResponse;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(LocationResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.total_count = reader.uint32();
          break;
        case 3:
          message.operation_status = OperationStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LocationListResponse {
    const message = globalThis.Object.create(
      baseLocationListResponse
    ) as LocationListResponse;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(LocationResponse.fromJSON(e));
      }
    }
    if (object.total_count !== undefined && object.total_count !== null) {
      message.total_count = Number(object.total_count);
    } else {
      message.total_count = 0;
    }
    if (
      object.operation_status !== undefined &&
      object.operation_status !== null
    ) {
      message.operation_status = OperationStatus.fromJSON(
        object.operation_status
      );
    } else {
      message.operation_status = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<LocationListResponse>): LocationListResponse {
    const message = { ...baseLocationListResponse } as LocationListResponse;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(LocationResponse.fromPartial(e));
      }
    }
    if (object.total_count !== undefined && object.total_count !== null) {
      message.total_count = object.total_count;
    } else {
      message.total_count = 0;
    }
    if (
      object.operation_status !== undefined &&
      object.operation_status !== null
    ) {
      message.operation_status = OperationStatus.fromPartial(
        object.operation_status
      );
    } else {
      message.operation_status = undefined;
    }
    return message;
  },

  toJSON(message: LocationListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? LocationResponse.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.total_count !== undefined &&
      (obj.total_count = message.total_count);
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status
        ? OperationStatus.toJSON(message.operation_status)
        : undefined);
    return obj;
  },
};

const baseLocationResponse: object = {};

export const LocationResponse = {
  encode(message: LocationResponse, writer: Writer = Writer.create()): Writer {
    if (message.payload !== undefined) {
      Location.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): LocationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseLocationResponse
    ) as LocationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = Location.decode(reader, reader.uint32());
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

  fromJSON(object: any): LocationResponse {
    const message = globalThis.Object.create(
      baseLocationResponse
    ) as LocationResponse;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = Location.fromJSON(object.payload);
    } else {
      message.payload = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromJSON(object.status);
    } else {
      message.status = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<LocationResponse>): LocationResponse {
    const message = { ...baseLocationResponse } as LocationResponse;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = Location.fromPartial(object.payload);
    } else {
      message.payload = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromPartial(object.status);
    } else {
      message.status = undefined;
    }
    return message;
  },

  toJSON(message: LocationResponse): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload
        ? Location.toJSON(message.payload)
        : undefined);
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },
};

const baseLocation: object = {
  id: "",
  name: "",
  description: "",
  organization_id: "",
  parent_id: "",
  children_ids: "",
  address_id: "",
};

export const Location = {
  encode(message: Location, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.organization_id !== "") {
      writer.uint32(42).string(message.organization_id);
    }
    if (message.parent_id !== "") {
      writer.uint32(50).string(message.parent_id);
    }
    for (const v of message.children_ids) {
      writer.uint32(58).string(v!);
    }
    if (message.address_id !== "") {
      writer.uint32(66).string(message.address_id);
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Location {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseLocation) as Location;
    message.children_ids = [];
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
          message.description = reader.string();
          break;
        case 5:
          message.organization_id = reader.string();
          break;
        case 6:
          message.parent_id = reader.string();
          break;
        case 7:
          message.children_ids.push(reader.string());
          break;
        case 8:
          message.address_id = reader.string();
          break;
        case 9:
          message.data = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Location {
    const message = globalThis.Object.create(baseLocation) as Location;
    message.children_ids = [];
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
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (
      object.organization_id !== undefined &&
      object.organization_id !== null
    ) {
      message.organization_id = String(object.organization_id);
    } else {
      message.organization_id = "";
    }
    if (object.parent_id !== undefined && object.parent_id !== null) {
      message.parent_id = String(object.parent_id);
    } else {
      message.parent_id = "";
    }
    if (object.children_ids !== undefined && object.children_ids !== null) {
      for (const e of object.children_ids) {
        message.children_ids.push(String(e));
      }
    }
    if (object.address_id !== undefined && object.address_id !== null) {
      message.address_id = String(object.address_id);
    } else {
      message.address_id = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromJSON(object.data);
    } else {
      message.data = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<Location>): Location {
    const message = { ...baseLocation } as Location;
    message.children_ids = [];
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
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (
      object.organization_id !== undefined &&
      object.organization_id !== null
    ) {
      message.organization_id = object.organization_id;
    } else {
      message.organization_id = "";
    }
    if (object.parent_id !== undefined && object.parent_id !== null) {
      message.parent_id = object.parent_id;
    } else {
      message.parent_id = "";
    }
    if (object.children_ids !== undefined && object.children_ids !== null) {
      for (const e of object.children_ids) {
        message.children_ids.push(e);
      }
    }
    if (object.address_id !== undefined && object.address_id !== null) {
      message.address_id = object.address_id;
    } else {
      message.address_id = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromPartial(object.data);
    } else {
      message.data = undefined;
    }
    return message;
  },

  toJSON(message: Location): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.organization_id !== undefined &&
      (obj.organization_id = message.organization_id);
    message.parent_id !== undefined && (obj.parent_id = message.parent_id);
    if (message.children_ids) {
      obj.children_ids = message.children_ids.map((e) => e);
    } else {
      obj.children_ids = [];
    }
    message.address_id !== undefined && (obj.address_id = message.address_id);
    message.data !== undefined &&
      (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    return obj;
  },
};

/** Microservice definition. */
export interface Service {
  Read(request: ReadRequest): Promise<LocationListResponse>;
  Create(request: LocationList): Promise<LocationListResponse>;
  Delete(request: DeleteRequest): Promise<DeleteResponse>;
  Update(request: LocationList): Promise<LocationListResponse>;
  Upsert(request: LocationList): Promise<LocationListResponse>;
}

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto.fromPartial({
    dependency: [
      "io/restorecommerce/resource_base.proto",
      "google/protobuf/any.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
    ],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        field: [{ name: "id", number: 1, label: 1, type: 9, jsonName: "id" }],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Deleted",
      },
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.location.Location",
            jsonName: "items",
          },
          {
            name: "total_count",
            number: 2,
            label: 1,
            type: 13,
            jsonName: "totalCount",
          },
          {
            name: "subject",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            jsonName: "subject",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "LocationList",
      },
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.location.LocationResponse",
            jsonName: "items",
          },
          {
            name: "total_count",
            number: 2,
            label: 1,
            type: 13,
            jsonName: "totalCount",
          },
          {
            name: "operation_status",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.OperationStatus",
            jsonName: "operationStatus",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "LocationListResponse",
      },
      {
        field: [
          {
            name: "payload",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.location.Location",
            jsonName: "payload",
          },
          {
            name: "status",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.Status",
            jsonName: "status",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "LocationResponse",
      },
      {
        field: [
          { name: "id", number: 1, label: 1, type: 9, jsonName: "id" },
          {
            name: "meta",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.meta.Meta",
            jsonName: "meta",
          },
          { name: "name", number: 3, label: 1, type: 9, jsonName: "name" },
          {
            name: "description",
            number: 4,
            label: 1,
            type: 9,
            jsonName: "description",
          },
          {
            name: "organization_id",
            number: 5,
            label: 1,
            type: 9,
            jsonName: "organizationId",
          },
          {
            name: "parent_id",
            number: 6,
            label: 1,
            type: 9,
            jsonName: "parentId",
          },
          {
            name: "children_ids",
            number: 7,
            label: 3,
            type: 9,
            jsonName: "childrenIds",
          },
          {
            name: "address_id",
            number: 8,
            label: 1,
            type: 9,
            jsonName: "addressId",
          },
          {
            name: "data",
            number: 9,
            label: 1,
            type: 11,
            typeName: ".google.protobuf.Any",
            jsonName: "data",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Location",
      },
    ],
    enumType: [],
    service: [
      {
        method: [
          {
            name: "Read",
            inputType: ".io.restorecommerce.resourcebase.ReadRequest",
            outputType: ".io.restorecommerce.location.LocationListResponse",
          },
          {
            name: "Create",
            inputType: ".io.restorecommerce.location.LocationList",
            outputType: ".io.restorecommerce.location.LocationListResponse",
          },
          {
            name: "Delete",
            inputType: ".io.restorecommerce.resourcebase.DeleteRequest",
            outputType: ".io.restorecommerce.resourcebase.DeleteResponse",
          },
          {
            name: "Update",
            inputType: ".io.restorecommerce.location.LocationList",
            outputType: ".io.restorecommerce.location.LocationListResponse",
          },
          {
            name: "Upsert",
            inputType: ".io.restorecommerce.location.LocationList",
            outputType: ".io.restorecommerce.location.LocationListResponse",
          },
        ],
        name: "Service",
      },
    ],
    extension: [],
    name: "io/restorecommerce/location.proto",
    package: "io.restorecommerce.location",
    sourceCodeInfo: {
      location: [
        {
          path: [6, 0],
          span: [13, 0, 19, 1],
          leadingDetachedComments: [],
          leadingComments: "\n Microservice definition.\n",
        },
        {
          path: [4, 4, 2, 0],
          span: [43, 2, 16],
          leadingDetachedComments: [],
          trailingComments: " Location ID, unique, key\n",
        },
        {
          path: [4, 4, 2, 2],
          span: [45, 2, 18],
          leadingDetachedComments: [],
          trailingComments: " Location name\n",
        },
        {
          path: [4, 4, 2, 4],
          span: [47, 2, 29],
          leadingDetachedComments: [],
          trailingComments: " Organization to which this location is linked\n",
        },
        {
          path: [4, 4, 2, 5],
          span: [48, 2, 23],
          leadingDetachedComments: [],
          trailingComments:
            "  Location which may contain this location; may be null\n",
        },
        {
          path: [4, 4, 2, 6],
          span: [49, 2, 35],
          leadingDetachedComments: [],
          trailingComments: " Locations contained in this location\n",
        },
        {
          path: [4, 4, 2, 8],
          span: [51, 2, 31],
          leadingDetachedComments: [],
          trailingComments: "/ additional data\n",
        },
      ],
    },
    syntax: "proto3",
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
  ],
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
