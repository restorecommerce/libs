/* eslint-disable */
import { FileDescriptorProto } from "ts-proto-descriptors/google/protobuf/descriptor";
import {
  Subject,
  protoMetadata as protoMetadata2,
} from "../../io/restorecommerce/auth";
import {
  Meta,
  protoMetadata as protoMetadata3,
} from "../../io/restorecommerce/meta";
import {
  OperationStatus,
  Status,
  protoMetadata as protoMetadata4,
} from "../../io/restorecommerce/status";
import {
  protoMetadata as protoMetadata1,
  DeleteResponse,
  ReadRequest,
  DeleteRequest,
} from "../../io/restorecommerce/resource_base";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "io.restorecommerce.contact_point_type";

export interface Deleted {
  id: string;
}

export interface ContactPointTypeList {
  items: ContactPointType[];
  total_count: number;
  subject?: Subject;
}

export interface ContactPointType {
  id: string;
  meta?: Meta;
  type: string;
}

export interface ContactPointTypeListResponse {
  items: ContactPointTypeResponse[];
  total_count: number;
  operation_status?: OperationStatus;
}

export interface ContactPointTypeResponse {
  payload?: ContactPointType;
  status?: Status;
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

const baseContactPointTypeList: object = { total_count: 0 };

export const ContactPointTypeList = {
  encode(
    message: ContactPointTypeList,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.items) {
      ContactPointType.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ContactPointTypeList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseContactPointTypeList
    ) as ContactPointTypeList;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(ContactPointType.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ContactPointTypeList {
    const message = globalThis.Object.create(
      baseContactPointTypeList
    ) as ContactPointTypeList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(ContactPointType.fromJSON(e));
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

  fromPartial(object: DeepPartial<ContactPointTypeList>): ContactPointTypeList {
    const message = { ...baseContactPointTypeList } as ContactPointTypeList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(ContactPointType.fromPartial(e));
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

  toJSON(message: ContactPointTypeList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? ContactPointType.toJSON(e) : undefined
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

const baseContactPointType: object = { id: "", type: "" };

export const ContactPointType = {
  encode(message: ContactPointType, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ContactPointType {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseContactPointType
    ) as ContactPointType;
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
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ContactPointType {
    const message = globalThis.Object.create(
      baseContactPointType
    ) as ContactPointType;
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
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<ContactPointType>): ContactPointType {
    const message = { ...baseContactPointType } as ContactPointType;
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
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    return message;
  },

  toJSON(message: ContactPointType): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },
};

const baseContactPointTypeListResponse: object = { total_count: 0 };

export const ContactPointTypeListResponse = {
  encode(
    message: ContactPointTypeListResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.items) {
      ContactPointTypeResponse.encode(v!, writer.uint32(10).fork()).ldelim();
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): ContactPointTypeListResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseContactPointTypeListResponse
    ) as ContactPointTypeListResponse;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            ContactPointTypeResponse.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): ContactPointTypeListResponse {
    const message = globalThis.Object.create(
      baseContactPointTypeListResponse
    ) as ContactPointTypeListResponse;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(ContactPointTypeResponse.fromJSON(e));
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

  fromPartial(
    object: DeepPartial<ContactPointTypeListResponse>
  ): ContactPointTypeListResponse {
    const message = {
      ...baseContactPointTypeListResponse,
    } as ContactPointTypeListResponse;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(ContactPointTypeResponse.fromPartial(e));
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

  toJSON(message: ContactPointTypeListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? ContactPointTypeResponse.toJSON(e) : undefined
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

const baseContactPointTypeResponse: object = {};

export const ContactPointTypeResponse = {
  encode(
    message: ContactPointTypeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.payload !== undefined) {
      ContactPointType.encode(
        message.payload,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): ContactPointTypeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseContactPointTypeResponse
    ) as ContactPointTypeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = ContactPointType.decode(reader, reader.uint32());
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

  fromJSON(object: any): ContactPointTypeResponse {
    const message = globalThis.Object.create(
      baseContactPointTypeResponse
    ) as ContactPointTypeResponse;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = ContactPointType.fromJSON(object.payload);
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

  fromPartial(
    object: DeepPartial<ContactPointTypeResponse>
  ): ContactPointTypeResponse {
    const message = {
      ...baseContactPointTypeResponse,
    } as ContactPointTypeResponse;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = ContactPointType.fromPartial(object.payload);
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

  toJSON(message: ContactPointTypeResponse): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload
        ? ContactPointType.toJSON(message.payload)
        : undefined);
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },
};

/** Microservice definition. */
export interface Service {
  Read(request: ReadRequest): Promise<ContactPointTypeListResponse>;
  Create(request: ContactPointTypeList): Promise<ContactPointTypeListResponse>;
  Delete(request: DeleteRequest): Promise<DeleteResponse>;
  Update(request: ContactPointTypeList): Promise<ContactPointTypeListResponse>;
  Upsert(request: ContactPointTypeList): Promise<ContactPointTypeListResponse>;
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
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/meta.proto",
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
            typeName: ".io.restorecommerce.contact_point_type.ContactPointType",
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
        name: "ContactPointTypeList",
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
          { name: "type", number: 3, label: 1, type: 9, jsonName: "type" },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "ContactPointType",
      },
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName:
              ".io.restorecommerce.contact_point_type.ContactPointTypeResponse",
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
        name: "ContactPointTypeListResponse",
      },
      {
        field: [
          {
            name: "payload",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.contact_point_type.ContactPointType",
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
        name: "ContactPointTypeResponse",
      },
    ],
    enumType: [],
    service: [
      {
        method: [
          {
            name: "Read",
            inputType: ".io.restorecommerce.resourcebase.ReadRequest",
            outputType:
              ".io.restorecommerce.contact_point_type.ContactPointTypeListResponse",
          },
          {
            name: "Create",
            inputType:
              ".io.restorecommerce.contact_point_type.ContactPointTypeList",
            outputType:
              ".io.restorecommerce.contact_point_type.ContactPointTypeListResponse",
          },
          {
            name: "Delete",
            inputType: ".io.restorecommerce.resourcebase.DeleteRequest",
            outputType: ".io.restorecommerce.resourcebase.DeleteResponse",
          },
          {
            name: "Update",
            inputType:
              ".io.restorecommerce.contact_point_type.ContactPointTypeList",
            outputType:
              ".io.restorecommerce.contact_point_type.ContactPointTypeListResponse",
          },
          {
            name: "Upsert",
            inputType:
              ".io.restorecommerce.contact_point_type.ContactPointTypeList",
            outputType:
              ".io.restorecommerce.contact_point_type.ContactPointTypeListResponse",
          },
        ],
        name: "Service",
      },
    ],
    extension: [],
    name: "io/restorecommerce/contact_point_type.proto",
    package: "io.restorecommerce.contact_point_type",
    sourceCodeInfo: {
      location: [
        {
          path: [6, 0],
          span: [12, 0, 18, 1],
          leadingDetachedComments: [],
          leadingComments: "\n Microservice definition.\n",
        },
      ],
    },
    syntax: "proto3",
  }),
  references: {
    ".io.restorecommerce.contact_point_type.Deleted": Deleted,
    ".io.restorecommerce.contact_point_type.ContactPointTypeList": ContactPointTypeList,
    ".io.restorecommerce.contact_point_type.ContactPointType": ContactPointType,
    ".io.restorecommerce.contact_point_type.ContactPointTypeListResponse": ContactPointTypeListResponse,
    ".io.restorecommerce.contact_point_type.ContactPointTypeResponse": ContactPointTypeResponse,
  },
  dependencies: [
    protoMetadata1,
    protoMetadata2,
    protoMetadata3,
    protoMetadata4,
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
