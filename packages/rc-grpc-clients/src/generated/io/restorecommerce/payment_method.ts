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
  totalCount?: number | undefined;
  subject?: Subject;
}

export interface PaymentMethodListResponse {
  items: PaymentMethodResponse[];
  totalCount: number;
  operationStatus?: OperationStatus;
}

export interface PaymentMethodResponse {
  payload?: PaymentMethod;
  status?: Status;
}

export interface PaymentMethod {
  id?: string | undefined;
  meta?: Meta | undefined;
  paymentMethod?: PaymentMethodEnum | undefined;
  transferType?: TransferTypeEnum | undefined;
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
  return { items: [], totalCount: undefined, subject: undefined };
}

export const PaymentMethodList = {
  encode(message: PaymentMethodList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      PaymentMethod.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== undefined) {
      writer.uint32(16).uint32(message.totalCount);
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

  fromJSON(object: any): PaymentMethodList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => PaymentMethod.fromJSON(e)) : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : undefined,
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
    message.totalCount !== undefined && (obj.totalCount = Math.round(message.totalCount));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<PaymentMethodList>): PaymentMethodList {
    return PaymentMethodList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PaymentMethodList>): PaymentMethodList {
    const message = createBasePaymentMethodList();
    message.items = object.items?.map((e) => PaymentMethod.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBasePaymentMethodListResponse(): PaymentMethodListResponse {
  return { items: [], totalCount: 0, operationStatus: undefined };
}

export const PaymentMethodListResponse = {
  encode(message: PaymentMethodListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      PaymentMethodResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.operationStatus !== undefined) {
      OperationStatus.encode(message.operationStatus, writer.uint32(26).fork()).ldelim();
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

  fromJSON(object: any): PaymentMethodListResponse {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => PaymentMethodResponse.fromJSON(e)) : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
      operationStatus: isSet(object.operationStatus) ? OperationStatus.fromJSON(object.operationStatus) : undefined,
    };
  },

  toJSON(message: PaymentMethodListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? PaymentMethodResponse.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = Math.round(message.totalCount));
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus ? OperationStatus.toJSON(message.operationStatus) : undefined);
    return obj;
  },

  create(base?: DeepPartial<PaymentMethodListResponse>): PaymentMethodListResponse {
    return PaymentMethodListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PaymentMethodListResponse>): PaymentMethodListResponse {
    const message = createBasePaymentMethodListResponse();
    message.items = object.items?.map((e) => PaymentMethodResponse.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    message.operationStatus = (object.operationStatus !== undefined && object.operationStatus !== null)
      ? OperationStatus.fromPartial(object.operationStatus)
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
  return { id: undefined, meta: undefined, paymentMethod: undefined, transferType: undefined, data: undefined };
}

export const PaymentMethod = {
  encode(message: PaymentMethod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    if (message.paymentMethod !== undefined) {
      writer.uint32(24).int32(paymentMethodEnumToNumber(message.paymentMethod));
    }
    if (message.transferType !== undefined) {
      writer.uint32(32).int32(transferTypeEnumToNumber(message.transferType));
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

          message.paymentMethod = paymentMethodEnumFromJSON(reader.int32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.transferType = transferTypeEnumFromJSON(reader.int32());
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
      paymentMethod: isSet(object.paymentMethod) ? paymentMethodEnumFromJSON(object.paymentMethod) : undefined,
      transferType: isSet(object.transferType) ? transferTypeEnumFromJSON(object.transferType) : undefined,
      data: isSet(object.data) ? Any.fromJSON(object.data) : undefined,
    };
  },

  toJSON(message: PaymentMethod): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.paymentMethod !== undefined && (obj.paymentMethod = message.paymentMethod !== undefined
      ? paymentMethodEnumToJSON(message.paymentMethod)
      : undefined);
    message.transferType !== undefined &&
      (obj.transferType = message.transferType !== undefined
        ? transferTypeEnumToJSON(message.transferType)
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
    message.paymentMethod = object.paymentMethod ?? undefined;
    message.transferType = object.transferType ?? undefined;
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
