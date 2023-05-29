/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { Any, protoMetadata as protoMetadata2 } from "../../google/protobuf/any";
import { protoMetadata as protoMetadata4, Subject } from "./auth";
import { Meta, protoMetadata as protoMetadata3 } from "./meta";
import { DeleteRequest, DeleteResponse, protoMetadata as protoMetadata1, ReadRequest } from "./resource_base";
import { OperationStatus, protoMetadata as protoMetadata5, Status } from "./status";

export const protobufPackage = "io.restorecommerce.payment_method";

export enum PaymentMethodEnum {
  WIRE_TRANSFER = "WIRE_TRANSFER",
  DIRECT_DEBIT = "DIRECT_DEBIT",
  PAYPAL = "PAYPAL",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function paymentMethodEnumFromJSON(object: any): PaymentMethodEnum {
  switch (object) {
    case 0:
    case "WIRE_TRANSFER":
      return PaymentMethodEnum.WIRE_TRANSFER;
    case 1:
    case "DIRECT_DEBIT":
      return PaymentMethodEnum.DIRECT_DEBIT;
    case 2:
    case "PAYPAL":
      return PaymentMethodEnum.PAYPAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PaymentMethodEnum.UNRECOGNIZED;
  }
}

export function paymentMethodEnumToJSON(object: PaymentMethodEnum): string {
  switch (object) {
    case PaymentMethodEnum.WIRE_TRANSFER:
      return "WIRE_TRANSFER";
    case PaymentMethodEnum.DIRECT_DEBIT:
      return "DIRECT_DEBIT";
    case PaymentMethodEnum.PAYPAL:
      return "PAYPAL";
    case PaymentMethodEnum.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function paymentMethodEnumToNumber(object: PaymentMethodEnum): number {
  switch (object) {
    case PaymentMethodEnum.WIRE_TRANSFER:
      return 0;
    case PaymentMethodEnum.DIRECT_DEBIT:
      return 1;
    case PaymentMethodEnum.PAYPAL:
      return 2;
    case PaymentMethodEnum.UNRECOGNIZED:
    default:
      return -1;
  }
}

export enum TransferTypeEnum {
  RECEIVE = "RECEIVE",
  SEND = "SEND",
  BOTH = "BOTH",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function transferTypeEnumFromJSON(object: any): TransferTypeEnum {
  switch (object) {
    case 0:
    case "RECEIVE":
      return TransferTypeEnum.RECEIVE;
    case 1:
    case "SEND":
      return TransferTypeEnum.SEND;
    case 2:
    case "BOTH":
      return TransferTypeEnum.BOTH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TransferTypeEnum.UNRECOGNIZED;
  }
}

export function transferTypeEnumToJSON(object: TransferTypeEnum): string {
  switch (object) {
    case TransferTypeEnum.RECEIVE:
      return "RECEIVE";
    case TransferTypeEnum.SEND:
      return "SEND";
    case TransferTypeEnum.BOTH:
      return "BOTH";
    case TransferTypeEnum.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function transferTypeEnumToNumber(object: TransferTypeEnum): number {
  switch (object) {
    case TransferTypeEnum.RECEIVE:
      return 0;
    case TransferTypeEnum.SEND:
      return 1;
    case TransferTypeEnum.BOTH:
      return 2;
    case TransferTypeEnum.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface Deleted {
  id: string;
}

export interface PaymentMethodList {
  items: PaymentMethod[];
  total_count?: number | undefined;
  subject?: Subject;
}

export interface PaymentMethodListResponse {
  items: PaymentMethodResponse[];
  total_count: number;
  operation_status?: OperationStatus;
}

export interface PaymentMethodResponse {
  payload?: PaymentMethod;
  status?: Status;
}

export interface PaymentMethod {
  id?: string | undefined;
  meta?: Meta | undefined;
  payment_method?: PaymentMethodEnum | undefined;
  transfer_type?: TransferTypeEnum | undefined;
  data?: Any | undefined;
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

function createBasePaymentMethodList(): PaymentMethodList {
  return { items: [], total_count: undefined, subject: undefined };
}

export const PaymentMethodList = {
  encode(message: PaymentMethodList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      PaymentMethod.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== undefined) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PaymentMethodList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaymentMethodList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(PaymentMethod.decode(reader, reader.uint32()));
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

  fromJSON(object: any): PaymentMethodList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => PaymentMethod.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: PaymentMethodList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? PaymentMethod.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<PaymentMethodList>): PaymentMethodList {
    return PaymentMethodList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PaymentMethodList>): PaymentMethodList {
    const message = createBasePaymentMethodList();
    message.items = object.items?.map((e) => PaymentMethod.fromPartial(e)) || [];
    message.total_count = object.total_count ?? undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBasePaymentMethodListResponse(): PaymentMethodListResponse {
  return { items: [], total_count: 0, operation_status: undefined };
}

export const PaymentMethodListResponse = {
  encode(message: PaymentMethodListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      PaymentMethodResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(message.operation_status, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PaymentMethodListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaymentMethodListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(PaymentMethodResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): PaymentMethodListResponse {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => PaymentMethodResponse.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      operation_status: isSet(object.operation_status) ? OperationStatus.fromJSON(object.operation_status) : undefined,
    };
  },

  toJSON(message: PaymentMethodListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? PaymentMethodResponse.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status ? OperationStatus.toJSON(message.operation_status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<PaymentMethodListResponse>): PaymentMethodListResponse {
    return PaymentMethodListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PaymentMethodListResponse>): PaymentMethodListResponse {
    const message = createBasePaymentMethodListResponse();
    message.items = object.items?.map((e) => PaymentMethodResponse.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.operation_status = (object.operation_status !== undefined && object.operation_status !== null)
      ? OperationStatus.fromPartial(object.operation_status)
      : undefined;
    return message;
  },
};

function createBasePaymentMethodResponse(): PaymentMethodResponse {
  return { payload: undefined, status: undefined };
}

export const PaymentMethodResponse = {
  encode(message: PaymentMethodResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      PaymentMethod.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PaymentMethodResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaymentMethodResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payload = PaymentMethod.decode(reader, reader.uint32());
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

  fromJSON(object: any): PaymentMethodResponse {
    return {
      payload: isSet(object.payload) ? PaymentMethod.fromJSON(object.payload) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: PaymentMethodResponse): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload ? PaymentMethod.toJSON(message.payload) : undefined);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<PaymentMethodResponse>): PaymentMethodResponse {
    return PaymentMethodResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PaymentMethodResponse>): PaymentMethodResponse {
    const message = createBasePaymentMethodResponse();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? PaymentMethod.fromPartial(object.payload)
      : undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBasePaymentMethod(): PaymentMethod {
  return { id: undefined, meta: undefined, payment_method: undefined, transfer_type: undefined, data: undefined };
}

export const PaymentMethod = {
  encode(message: PaymentMethod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    if (message.payment_method !== undefined) {
      writer.uint32(24).int32(paymentMethodEnumToNumber(message.payment_method));
    }
    if (message.transfer_type !== undefined) {
      writer.uint32(32).int32(transferTypeEnumToNumber(message.transfer_type));
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PaymentMethod {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaymentMethod();
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

          message.payment_method = paymentMethodEnumFromJSON(reader.int32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.transfer_type = transferTypeEnumFromJSON(reader.int32());
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

  fromJSON(object: any): PaymentMethod {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      payment_method: isSet(object.payment_method) ? paymentMethodEnumFromJSON(object.payment_method) : undefined,
      transfer_type: isSet(object.transfer_type) ? transferTypeEnumFromJSON(object.transfer_type) : undefined,
      data: isSet(object.data) ? Any.fromJSON(object.data) : undefined,
    };
  },

  toJSON(message: PaymentMethod): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.payment_method !== undefined && (obj.payment_method = message.payment_method !== undefined
      ? paymentMethodEnumToJSON(message.payment_method)
      : undefined);
    message.transfer_type !== undefined && (obj.transfer_type = message.transfer_type !== undefined
      ? transferTypeEnumToJSON(message.transfer_type)
      : undefined);
    message.data !== undefined && (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    return obj;
  },

  create(base?: DeepPartial<PaymentMethod>): PaymentMethod {
    return PaymentMethod.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PaymentMethod>): PaymentMethod {
    const message = createBasePaymentMethod();
    message.id = object.id ?? undefined;
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    message.payment_method = object.payment_method ?? undefined;
    message.transfer_type = object.transfer_type ?? undefined;
    message.data = (object.data !== undefined && object.data !== null) ? Any.fromPartial(object.data) : undefined;
    return message;
  },
};

/** Microservice definition. */
export type PaymentMethodServiceDefinition = typeof PaymentMethodServiceDefinition;
export const PaymentMethodServiceDefinition = {
  name: "PaymentMethodService",
  fullName: "io.restorecommerce.payment_method.PaymentMethodService",
  methods: {
    read: {
      name: "Read",
      requestType: ReadRequest,
      requestStream: false,
      responseType: PaymentMethodListResponse,
      responseStream: false,
      options: {},
    },
    create: {
      name: "Create",
      requestType: PaymentMethodList,
      requestStream: false,
      responseType: PaymentMethodListResponse,
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
      requestType: PaymentMethodList,
      requestStream: false,
      responseType: PaymentMethodListResponse,
      responseStream: false,
      options: {},
    },
    upsert: {
      name: "Upsert",
      requestType: PaymentMethodList,
      requestStream: false,
      responseType: PaymentMethodListResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface PaymentMethodServiceImplementation<CallContextExt = {}> {
  read(request: ReadRequest, context: CallContext & CallContextExt): Promise<DeepPartial<PaymentMethodListResponse>>;
  create(
    request: PaymentMethodList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PaymentMethodListResponse>>;
  delete(request: DeleteRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteResponse>>;
  update(
    request: PaymentMethodList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PaymentMethodListResponse>>;
  upsert(
    request: PaymentMethodList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PaymentMethodListResponse>>;
}

export interface PaymentMethodServiceClient<CallOptionsExt = {}> {
  read(request: DeepPartial<ReadRequest>, options?: CallOptions & CallOptionsExt): Promise<PaymentMethodListResponse>;
  create(
    request: DeepPartial<PaymentMethodList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PaymentMethodListResponse>;
  delete(request: DeepPartial<DeleteRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteResponse>;
  update(
    request: DeepPartial<PaymentMethodList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PaymentMethodListResponse>;
  upsert(
    request: DeepPartial<PaymentMethodList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PaymentMethodListResponse>;
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
    "name": "io/restorecommerce/payment_method.proto",
    "package": "io.restorecommerce.payment_method",
    "dependency": [
      "io/restorecommerce/resource_base.proto",
      "google/protobuf/any.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
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
      "name": "PaymentMethodList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.payment_method.PaymentMethod",
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
      "name": "PaymentMethodListResponse",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.payment_method.PaymentMethodResponse",
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
      "name": "PaymentMethodResponse",
      "field": [{
        "name": "payload",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.payment_method.PaymentMethod",
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
      "name": "PaymentMethod",
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
        "name": "payment_method",
        "number": 3,
        "label": 1,
        "type": 14,
        "typeName": ".io.restorecommerce.payment_method.PaymentMethodEnum",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "paymentMethod",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "transfer_type",
        "number": 4,
        "label": 1,
        "type": 14,
        "typeName": ".io.restorecommerce.payment_method.TransferTypeEnum",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "transferType",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "data",
        "number": 5,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.Any",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "data",
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
        { "name": "_payment_method", "options": undefined },
        { "name": "_transfer_type", "options": undefined },
        { "name": "_data", "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "enumType": [{
      "name": "PaymentMethodEnum",
      "value": [{ "name": "WIRE_TRANSFER", "number": 0, "options": undefined }, {
        "name": "DIRECT_DEBIT",
        "number": 1,
        "options": undefined,
      }, { "name": "PAYPAL", "number": 2, "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "TransferTypeEnum",
      "value": [{ "name": "RECEIVE", "number": 0, "options": undefined }, {
        "name": "SEND",
        "number": 1,
        "options": undefined,
      }, { "name": "BOTH", "number": 2, "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "service": [{
      "name": "PaymentMethodService",
      "method": [{
        "name": "Read",
        "inputType": ".io.restorecommerce.resourcebase.ReadRequest",
        "outputType": ".io.restorecommerce.payment_method.PaymentMethodListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Create",
        "inputType": ".io.restorecommerce.payment_method.PaymentMethodList",
        "outputType": ".io.restorecommerce.payment_method.PaymentMethodListResponse",
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
        "inputType": ".io.restorecommerce.payment_method.PaymentMethodList",
        "outputType": ".io.restorecommerce.payment_method.PaymentMethodListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Upsert",
        "inputType": ".io.restorecommerce.payment_method.PaymentMethodList",
        "outputType": ".io.restorecommerce.payment_method.PaymentMethodListResponse",
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
        "span": [13, 0, 19, 1],
        "leadingComments": "\n Microservice definition.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {
    ".io.restorecommerce.payment_method.PaymentMethodEnum": PaymentMethodEnum,
    ".io.restorecommerce.payment_method.TransferTypeEnum": TransferTypeEnum,
    ".io.restorecommerce.payment_method.Deleted": Deleted,
    ".io.restorecommerce.payment_method.PaymentMethodList": PaymentMethodList,
    ".io.restorecommerce.payment_method.PaymentMethodListResponse": PaymentMethodListResponse,
    ".io.restorecommerce.payment_method.PaymentMethodResponse": PaymentMethodResponse,
    ".io.restorecommerce.payment_method.PaymentMethod": PaymentMethod,
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
