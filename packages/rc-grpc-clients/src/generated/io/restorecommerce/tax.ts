/* eslint-disable */
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  Subject,
  protoMetadata as protoMetadata3,
} from "../../io/restorecommerce/auth";
import {
  OperationStatus,
  Status,
  protoMetadata as protoMetadata4,
} from "../../io/restorecommerce/status";
import {
  Meta,
  protoMetadata as protoMetadata2,
} from "../../io/restorecommerce/meta";
import {
  protoMetadata as protoMetadata1,
  DeleteResponse,
  ReadRequest,
  DeleteRequest,
} from "../../io/restorecommerce/resource_base";
import {
  protoMetadata as protoMetadata5,
  Resolver,
} from "../../io/restorecommerce/options";
import { protoMetadata as protoMetadata6 } from "../../io/restorecommerce/country";
import { protoMetadata as protoMetadata7 } from "../../io/restorecommerce/tax_type";

export const protobufPackage = "io.restorecommerce.tax";

export interface Deleted {
  id: string;
}

export interface TaxList {
  items: Tax[];
  totalCount: number;
  subject?: Subject;
}

export interface TaxListResponse {
  items: TaxResponse[];
  totalCount: number;
  operationStatus?: OperationStatus;
}

export interface TaxResponse {
  payload?: Tax;
  status?: Status;
}

export interface Tax {
  id: string;
  meta?: Meta;
  countryId: string;
  rate: number;
  variant: string;
  typeId: string;
}

function createBaseDeleted(): Deleted {
  return { id: "" };
}

export const Deleted = {
  encode(
    message: Deleted,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    return {
      id: isSet(object.id) ? String(object.id) : "",
    };
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

function createBaseTaxList(): TaxList {
  return { items: [], totalCount: 0, subject: undefined };
}

export const TaxList = {
  encode(
    message: TaxList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      Tax.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TaxList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTaxList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Tax.decode(reader, reader.uint32()));
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

  fromJSON(object: any): TaxList {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => Tax.fromJSON(e))
        : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
      subject: isSet(object.subject)
        ? Subject.fromJSON(object.subject)
        : undefined,
    };
  },

  toJSON(message: TaxList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => (e ? Tax.toJSON(e) : undefined));
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined &&
      (obj.totalCount = Math.round(message.totalCount));
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TaxList>): TaxList {
    const message = createBaseTaxList();
    message.items = object.items?.map((e) => Tax.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    message.subject =
      object.subject !== undefined && object.subject !== null
        ? Subject.fromPartial(object.subject)
        : undefined;
    return message;
  },
};

function createBaseTaxListResponse(): TaxListResponse {
  return { items: [], totalCount: 0, operationStatus: undefined };
}

export const TaxListResponse = {
  encode(
    message: TaxListResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      TaxResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.operationStatus !== undefined) {
      OperationStatus.encode(
        message.operationStatus,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TaxListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTaxListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(TaxResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalCount = reader.uint32();
          break;
        case 3:
          message.operationStatus = OperationStatus.decode(
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

  fromJSON(object: any): TaxListResponse {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => TaxResponse.fromJSON(e))
        : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
      operationStatus: isSet(object.operationStatus)
        ? OperationStatus.fromJSON(object.operationStatus)
        : undefined,
    };
  },

  toJSON(message: TaxListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? TaxResponse.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined &&
      (obj.totalCount = Math.round(message.totalCount));
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus
        ? OperationStatus.toJSON(message.operationStatus)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TaxListResponse>): TaxListResponse {
    const message = createBaseTaxListResponse();
    message.items = object.items?.map((e) => TaxResponse.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    message.operationStatus =
      object.operationStatus !== undefined && object.operationStatus !== null
        ? OperationStatus.fromPartial(object.operationStatus)
        : undefined;
    return message;
  },
};

function createBaseTaxResponse(): TaxResponse {
  return { payload: undefined, status: undefined };
}

export const TaxResponse = {
  encode(
    message: TaxResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.payload !== undefined) {
      Tax.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TaxResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTaxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = Tax.decode(reader, reader.uint32());
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

  fromJSON(object: any): TaxResponse {
    return {
      payload: isSet(object.payload) ? Tax.fromJSON(object.payload) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: TaxResponse): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload ? Tax.toJSON(message.payload) : undefined);
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TaxResponse>): TaxResponse {
    const message = createBaseTaxResponse();
    message.payload =
      object.payload !== undefined && object.payload !== null
        ? Tax.fromPartial(object.payload)
        : undefined;
    message.status =
      object.status !== undefined && object.status !== null
        ? Status.fromPartial(object.status)
        : undefined;
    return message;
  },
};

function createBaseTax(): Tax {
  return {
    id: "",
    meta: undefined,
    countryId: "",
    rate: 0,
    variant: "",
    typeId: "",
  };
}

export const Tax = {
  encode(message: Tax, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    if (message.countryId !== "") {
      writer.uint32(26).string(message.countryId);
    }
    if (message.rate !== 0) {
      writer.uint32(33).double(message.rate);
    }
    if (message.variant !== "") {
      writer.uint32(42).string(message.variant);
    }
    if (message.typeId !== "") {
      writer.uint32(50).string(message.typeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Tax {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTax();
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
          message.countryId = reader.string();
          break;
        case 4:
          message.rate = reader.double();
          break;
        case 5:
          message.variant = reader.string();
          break;
        case 6:
          message.typeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Tax {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      countryId: isSet(object.countryId) ? String(object.countryId) : "",
      rate: isSet(object.rate) ? Number(object.rate) : 0,
      variant: isSet(object.variant) ? String(object.variant) : "",
      typeId: isSet(object.typeId) ? String(object.typeId) : "",
    };
  },

  toJSON(message: Tax): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.countryId !== undefined && (obj.countryId = message.countryId);
    message.rate !== undefined && (obj.rate = message.rate);
    message.variant !== undefined && (obj.variant = message.variant);
    message.typeId !== undefined && (obj.typeId = message.typeId);
    return obj;
  },

  fromPartial(object: DeepPartial<Tax>): Tax {
    const message = createBaseTax();
    message.id = object.id ?? "";
    message.meta =
      object.meta !== undefined && object.meta !== null
        ? Meta.fromPartial(object.meta)
        : undefined;
    message.countryId = object.countryId ?? "";
    message.rate = object.rate ?? 0;
    message.variant = object.variant ?? "";
    message.typeId = object.typeId ?? "";
    return message;
  },
};

/** Microservice definition. */
export interface Service {
  Read(request: ReadRequest): Promise<TaxListResponse>;
  Create(request: TaxList): Promise<TaxListResponse>;
  Delete(request: DeleteRequest): Promise<DeleteResponse>;
  Update(request: TaxList): Promise<TaxListResponse>;
  Upsert(request: TaxList): Promise<TaxListResponse>;
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
      [key: string]: {
        options?: { [key: string]: any };
        methods?: { [key: string]: { [key: string]: any } };
      };
    };
    messages?: {
      [key: string]: ProtoMetaMessageOptions;
    };
    enums?: {
      [key: string]: {
        options?: { [key: string]: any };
        values?: { [key: string]: { [key: string]: any } };
      };
    };
  };
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto1.fromPartial({
    name: "io/restorecommerce/tax.proto",
    package: "io.restorecommerce.tax",
    dependency: [
      "io/restorecommerce/resource_base.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/options.proto",
      "io/restorecommerce/country.proto",
      "io/restorecommerce/tax_type.proto",
    ],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        name: "Deleted",
        field: [
          {
            name: "id",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "id",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "TaxList",
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.tax.Tax",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "items",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "total_count",
            number: 2,
            label: 1,
            type: 13,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "totalCount",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "subject",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "subject",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "TaxListResponse",
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.tax.TaxResponse",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "items",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "total_count",
            number: 2,
            label: 1,
            type: 13,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "totalCount",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "operation_status",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.OperationStatus",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "operationStatus",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "TaxResponse",
        field: [
          {
            name: "payload",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.tax.Tax",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "payload",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "status",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.Status",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "status",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "Tax",
        field: [
          {
            name: "id",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "id",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "meta",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.meta.Meta",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "meta",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "country_id",
            number: 3,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "countryId",
            options: {
              ctype: 0,
              packed: false,
              jstype: 0,
              lazy: false,
              deprecated: false,
              weak: false,
              uninterpretedOption: [],
            },
            proto3Optional: false,
          },
          {
            name: "rate",
            number: 4,
            label: 1,
            type: 1,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "rate",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "variant",
            number: 5,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "variant",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "type_id",
            number: 6,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "typeId",
            options: {
              ctype: 0,
              packed: false,
              jstype: 0,
              lazy: false,
              deprecated: false,
              weak: false,
              uninterpretedOption: [],
            },
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
    ],
    enumType: [],
    service: [
      {
        name: "Service",
        method: [
          {
            name: "Read",
            inputType: ".io.restorecommerce.resourcebase.ReadRequest",
            outputType: ".io.restorecommerce.tax.TaxListResponse",
            options: {
              deprecated: false,
              idempotencyLevel: 0,
              uninterpretedOption: [],
            },
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Create",
            inputType: ".io.restorecommerce.tax.TaxList",
            outputType: ".io.restorecommerce.tax.TaxListResponse",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Delete",
            inputType: ".io.restorecommerce.resourcebase.DeleteRequest",
            outputType: ".io.restorecommerce.resourcebase.DeleteResponse",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Update",
            inputType: ".io.restorecommerce.tax.TaxList",
            outputType: ".io.restorecommerce.tax.TaxListResponse",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Upsert",
            inputType: ".io.restorecommerce.tax.TaxList",
            outputType: ".io.restorecommerce.tax.TaxListResponse",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
        ],
        options: { deprecated: false, uninterpretedOption: [] },
      },
    ],
    extension: [],
    options: undefined,
    sourceCodeInfo: {
      location: [
        {
          path: [3, 5],
          span: [11, 0, 42],
          leadingComments: " Used by resolvers\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [6, 0],
          span: [17, 0, 27, 1],
          leadingComments: "\n Microservice definition.\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
      ],
    },
    syntax: "proto3",
  }),
  references: {
    ".io.restorecommerce.tax.Deleted": Deleted,
    ".io.restorecommerce.tax.TaxList": TaxList,
    ".io.restorecommerce.tax.TaxListResponse": TaxListResponse,
    ".io.restorecommerce.tax.TaxResponse": TaxResponse,
    ".io.restorecommerce.tax.Tax": Tax,
  },
  dependencies: [
    protoMetadata1,
    protoMetadata2,
    protoMetadata3,
    protoMetadata4,
    protoMetadata5,
    protoMetadata6,
    protoMetadata7,
  ],
  options: {
    messages: {
      Tax: {
        fields: {
          country_id: {
            resolver: Resolver.decode(
              Buffer.from(
                "CiMuaW8ucmVzdG9yZWNvbW1lcmNlLmNvdW50cnkuQ291bnRyeRIIcmVzb3VyY2UaB2NvdW50cnkiBFJlYWQqB2NvdW50cnk=",
                "base64"
              )
            ),
          },
          type_id: {
            resolver: Resolver.decode(
              Buffer.from(
                "CiQuaW8ucmVzdG9yZWNvbW1lcmNlLnRheF90eXBlLlRheFR5cGUSCHJlc291cmNlGgh0YXhfdHlwZSIEUmVhZCoEdHlwZQ==",
                "base64"
              )
            ),
          },
        },
      },
    },
    services: {
      Service: {
        options: { service_name: "tax" },
        methods: { Read: { is_query: true } },
      },
    },
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
