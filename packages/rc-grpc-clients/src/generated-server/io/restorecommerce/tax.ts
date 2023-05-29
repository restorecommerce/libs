/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { protoMetadata as protoMetadata3, Subject } from "./auth";
import { protoMetadata as protoMetadata6 } from "./country";
import { Meta, protoMetadata as protoMetadata2 } from "./meta";
import { protoMetadata as protoMetadata5, Resolver } from "./options";
import { DeleteRequest, DeleteResponse, protoMetadata as protoMetadata1, ReadRequest } from "./resource_base";
import { OperationStatus, protoMetadata as protoMetadata4, Status } from "./status";
import { protoMetadata as protoMetadata7 } from "./tax_type";

export const protobufPackage = "io.restorecommerce.tax";

export interface Deleted {
  id: string;
}

export interface TaxList {
  items: Tax[];
  total_count?: number | undefined;
  subject?: Subject;
}

export interface TaxListResponse {
  items: TaxResponse[];
  total_count: number;
  operation_status?: OperationStatus;
}

export interface TaxResponse {
  payload?: Tax;
  status?: Status;
}

export interface Tax {
  id?: string | undefined;
  meta?: Meta | undefined;
  country_id?: string | undefined;
  rate?: number | undefined;
  variant?: string | undefined;
  type_id?: string | undefined;
}

export interface VAT {
  tax_id?: string | undefined;
  vat?: number | undefined;
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

function createBaseTaxList(): TaxList {
  return { items: [], total_count: undefined, subject: undefined };
}

export const TaxList = {
  encode(message: TaxList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      Tax.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== undefined) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TaxList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTaxList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(Tax.decode(reader, reader.uint32()));
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

  fromJSON(object: any): TaxList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => Tax.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: TaxList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? Tax.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<TaxList>): TaxList {
    return TaxList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TaxList>): TaxList {
    const message = createBaseTaxList();
    message.items = object.items?.map((e) => Tax.fromPartial(e)) || [];
    message.total_count = object.total_count ?? undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseTaxListResponse(): TaxListResponse {
  return { items: [], total_count: 0, operation_status: undefined };
}

export const TaxListResponse = {
  encode(message: TaxListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      TaxResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(message.operation_status, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TaxListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTaxListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(TaxResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): TaxListResponse {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => TaxResponse.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      operation_status: isSet(object.operation_status) ? OperationStatus.fromJSON(object.operation_status) : undefined,
    };
  },

  toJSON(message: TaxListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? TaxResponse.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status ? OperationStatus.toJSON(message.operation_status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<TaxListResponse>): TaxListResponse {
    return TaxListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TaxListResponse>): TaxListResponse {
    const message = createBaseTaxListResponse();
    message.items = object.items?.map((e) => TaxResponse.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.operation_status = (object.operation_status !== undefined && object.operation_status !== null)
      ? OperationStatus.fromPartial(object.operation_status)
      : undefined;
    return message;
  },
};

function createBaseTaxResponse(): TaxResponse {
  return { payload: undefined, status: undefined };
}

export const TaxResponse = {
  encode(message: TaxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      Tax.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TaxResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTaxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payload = Tax.decode(reader, reader.uint32());
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

  fromJSON(object: any): TaxResponse {
    return {
      payload: isSet(object.payload) ? Tax.fromJSON(object.payload) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: TaxResponse): unknown {
    const obj: any = {};
    message.payload !== undefined && (obj.payload = message.payload ? Tax.toJSON(message.payload) : undefined);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<TaxResponse>): TaxResponse {
    return TaxResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TaxResponse>): TaxResponse {
    const message = createBaseTaxResponse();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? Tax.fromPartial(object.payload)
      : undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBaseTax(): Tax {
  return {
    id: undefined,
    meta: undefined,
    country_id: undefined,
    rate: undefined,
    variant: undefined,
    type_id: undefined,
  };
}

export const Tax = {
  encode(message: Tax, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    if (message.country_id !== undefined) {
      writer.uint32(26).string(message.country_id);
    }
    if (message.rate !== undefined) {
      writer.uint32(33).double(message.rate);
    }
    if (message.variant !== undefined) {
      writer.uint32(42).string(message.variant);
    }
    if (message.type_id !== undefined) {
      writer.uint32(50).string(message.type_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Tax {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTax();
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

          message.country_id = reader.string();
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.rate = reader.double();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.variant = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.type_id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Tax {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      country_id: isSet(object.country_id) ? String(object.country_id) : undefined,
      rate: isSet(object.rate) ? Number(object.rate) : undefined,
      variant: isSet(object.variant) ? String(object.variant) : undefined,
      type_id: isSet(object.type_id) ? String(object.type_id) : undefined,
    };
  },

  toJSON(message: Tax): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.country_id !== undefined && (obj.country_id = message.country_id);
    message.rate !== undefined && (obj.rate = message.rate);
    message.variant !== undefined && (obj.variant = message.variant);
    message.type_id !== undefined && (obj.type_id = message.type_id);
    return obj;
  },

  create(base?: DeepPartial<Tax>): Tax {
    return Tax.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Tax>): Tax {
    const message = createBaseTax();
    message.id = object.id ?? undefined;
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    message.country_id = object.country_id ?? undefined;
    message.rate = object.rate ?? undefined;
    message.variant = object.variant ?? undefined;
    message.type_id = object.type_id ?? undefined;
    return message;
  },
};

function createBaseVAT(): VAT {
  return { tax_id: undefined, vat: undefined };
}

export const VAT = {
  encode(message: VAT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tax_id !== undefined) {
      writer.uint32(10).string(message.tax_id);
    }
    if (message.vat !== undefined) {
      writer.uint32(17).double(message.vat);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VAT {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVAT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tax_id = reader.string();
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.vat = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VAT {
    return {
      tax_id: isSet(object.tax_id) ? String(object.tax_id) : undefined,
      vat: isSet(object.vat) ? Number(object.vat) : undefined,
    };
  },

  toJSON(message: VAT): unknown {
    const obj: any = {};
    message.tax_id !== undefined && (obj.tax_id = message.tax_id);
    message.vat !== undefined && (obj.vat = message.vat);
    return obj;
  },

  create(base?: DeepPartial<VAT>): VAT {
    return VAT.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<VAT>): VAT {
    const message = createBaseVAT();
    message.tax_id = object.tax_id ?? undefined;
    message.vat = object.vat ?? undefined;
    return message;
  },
};

/** Microservice definition. */
export type TaxServiceDefinition = typeof TaxServiceDefinition;
export const TaxServiceDefinition = {
  name: "TaxService",
  fullName: "io.restorecommerce.tax.TaxService",
  methods: {
    read: {
      name: "Read",
      requestType: ReadRequest,
      requestStream: false,
      responseType: TaxListResponse,
      responseStream: false,
      options: { _unknownFields: { 248008: [Buffer.from([1])] } },
    },
    create: {
      name: "Create",
      requestType: TaxList,
      requestStream: false,
      responseType: TaxListResponse,
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
      requestType: TaxList,
      requestStream: false,
      responseType: TaxListResponse,
      responseStream: false,
      options: {},
    },
    upsert: {
      name: "Upsert",
      requestType: TaxList,
      requestStream: false,
      responseType: TaxListResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface TaxServiceImplementation<CallContextExt = {}> {
  read(request: ReadRequest, context: CallContext & CallContextExt): Promise<DeepPartial<TaxListResponse>>;
  create(request: TaxList, context: CallContext & CallContextExt): Promise<DeepPartial<TaxListResponse>>;
  delete(request: DeleteRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteResponse>>;
  update(request: TaxList, context: CallContext & CallContextExt): Promise<DeepPartial<TaxListResponse>>;
  upsert(request: TaxList, context: CallContext & CallContextExt): Promise<DeepPartial<TaxListResponse>>;
}

export interface TaxServiceClient<CallOptionsExt = {}> {
  read(request: DeepPartial<ReadRequest>, options?: CallOptions & CallOptionsExt): Promise<TaxListResponse>;
  create(request: DeepPartial<TaxList>, options?: CallOptions & CallOptionsExt): Promise<TaxListResponse>;
  delete(request: DeepPartial<DeleteRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteResponse>;
  update(request: DeepPartial<TaxList>, options?: CallOptions & CallOptionsExt): Promise<TaxListResponse>;
  upsert(request: DeepPartial<TaxList>, options?: CallOptions & CallOptionsExt): Promise<TaxListResponse>;
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
    "name": "io/restorecommerce/tax.proto",
    "package": "io.restorecommerce.tax",
    "dependency": [
      "io/restorecommerce/resource_base.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/options.proto",
      "io/restorecommerce/country.proto",
      "io/restorecommerce/tax_type.proto",
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
      "name": "TaxList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.tax.Tax",
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
      "name": "TaxListResponse",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.tax.TaxResponse",
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
      "name": "TaxResponse",
      "field": [{
        "name": "payload",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.tax.Tax",
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
      "name": "Tax",
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
        "name": "country_id",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "countryId",
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
        "name": "rate",
        "number": 4,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "rate",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "variant",
        "number": 5,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "variant",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "type_id",
        "number": 6,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 5,
        "jsonName": "typeId",
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
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "_id", "options": undefined },
        { "name": "_meta", "options": undefined },
        { "name": "_country_id", "options": undefined },
        { "name": "_rate", "options": undefined },
        { "name": "_variant", "options": undefined },
        { "name": "_type_id", "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "VAT",
      "field": [{
        "name": "tax_id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "taxId",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "vat",
        "number": 2,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "vat",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_tax_id", "options": undefined }, { "name": "_vat", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "enumType": [],
    "service": [{
      "name": "TaxService",
      "method": [{
        "name": "Read",
        "inputType": ".io.restorecommerce.resourcebase.ReadRequest",
        "outputType": ".io.restorecommerce.tax.TaxListResponse",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Create",
        "inputType": ".io.restorecommerce.tax.TaxList",
        "outputType": ".io.restorecommerce.tax.TaxListResponse",
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
        "inputType": ".io.restorecommerce.tax.TaxList",
        "outputType": ".io.restorecommerce.tax.TaxListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Upsert",
        "inputType": ".io.restorecommerce.tax.TaxList",
        "outputType": ".io.restorecommerce.tax.TaxListResponse",
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
        "path": [3, 5],
        "span": [11, 0, 42],
        "leadingComments": " Used by resolvers\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0],
        "span": [17, 0, 25, 1],
        "leadingComments": "\n Microservice definition.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {
    ".io.restorecommerce.tax.Deleted": Deleted,
    ".io.restorecommerce.tax.TaxList": TaxList,
    ".io.restorecommerce.tax.TaxListResponse": TaxListResponse,
    ".io.restorecommerce.tax.TaxResponse": TaxResponse,
    ".io.restorecommerce.tax.Tax": Tax,
    ".io.restorecommerce.tax.VAT": VAT,
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
      "Tax": {
        fields: {
          "country_id": {
            "resolver": Resolver.decode(
              Buffer.from(
                "CiMuaW8ucmVzdG9yZWNvbW1lcmNlLmNvdW50cnkuQ291bnRyeRIIcmVzb3VyY2UaB2NvdW50cnkiBFJlYWQqB2NvdW50cnk=",
                "base64",
              ),
            ),
          },
          "type_id": {
            "resolver": Resolver.decode(
              Buffer.from(
                "CiQuaW8ucmVzdG9yZWNvbW1lcmNlLnRheF90eXBlLlRheFR5cGUSCHJlc291cmNlGgh0YXhfdHlwZSIEUmVhZCoEdHlwZQ==",
                "base64",
              ),
            ),
          },
        },
      },
    },
    services: { "TaxService": { options: undefined, methods: { "Read": { "is_query": true } } } },
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
