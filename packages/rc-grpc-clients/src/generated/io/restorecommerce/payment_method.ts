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

export const protobufPackage = "io.restorecommerce.payment_method";

export enum PaymentMethodEnum {
  WIRE_TRANSFER = 0,
  DIRECT_DEBIT = 1,
  PAYPAL = 2,
  UNRECOGNIZED = -1,
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
    default:
      return "UNKNOWN";
  }
}

export enum TransferTypeEnum {
  RECEIVE = 0,
  SEND = 1,
  BOTH = 2,
  UNRECOGNIZED = -1,
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
    default:
      return "UNKNOWN";
  }
}

export interface Deleted {
  id: string;
}

export interface PaymentMethodList {
  items: PaymentMethod[];
  total_count: number;
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
  id: string;
  meta?: Meta;
  payment_method: PaymentMethodEnum;
  transfer_type: TransferTypeEnum;
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

const basePaymentMethodList: object = { total_count: 0 };

export const PaymentMethodList = {
  encode(message: PaymentMethodList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      PaymentMethod.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PaymentMethodList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      basePaymentMethodList
    ) as PaymentMethodList;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(PaymentMethod.decode(reader, reader.uint32()));
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

  fromJSON(object: any): PaymentMethodList {
    const message = globalThis.Object.create(
      basePaymentMethodList
    ) as PaymentMethodList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(PaymentMethod.fromJSON(e));
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

  fromPartial(object: DeepPartial<PaymentMethodList>): PaymentMethodList {
    const message = { ...basePaymentMethodList } as PaymentMethodList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(PaymentMethod.fromPartial(e));
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

  toJSON(message: PaymentMethodList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? PaymentMethod.toJSON(e) : undefined
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

const basePaymentMethodListResponse: object = { total_count: 0 };

export const PaymentMethodListResponse = {
  encode(
    message: PaymentMethodListResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.items) {
      PaymentMethodResponse.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): PaymentMethodListResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      basePaymentMethodListResponse
    ) as PaymentMethodListResponse;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            PaymentMethodResponse.decode(reader, reader.uint32())
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

  fromJSON(object: any): PaymentMethodListResponse {
    const message = globalThis.Object.create(
      basePaymentMethodListResponse
    ) as PaymentMethodListResponse;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(PaymentMethodResponse.fromJSON(e));
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
    object: DeepPartial<PaymentMethodListResponse>
  ): PaymentMethodListResponse {
    const message = {
      ...basePaymentMethodListResponse,
    } as PaymentMethodListResponse;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(PaymentMethodResponse.fromPartial(e));
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

  toJSON(message: PaymentMethodListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? PaymentMethodResponse.toJSON(e) : undefined
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

const basePaymentMethodResponse: object = {};

export const PaymentMethodResponse = {
  encode(
    message: PaymentMethodResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.payload !== undefined) {
      PaymentMethod.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PaymentMethodResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      basePaymentMethodResponse
    ) as PaymentMethodResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = PaymentMethod.decode(reader, reader.uint32());
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

  fromJSON(object: any): PaymentMethodResponse {
    const message = globalThis.Object.create(
      basePaymentMethodResponse
    ) as PaymentMethodResponse;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = PaymentMethod.fromJSON(object.payload);
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
    object: DeepPartial<PaymentMethodResponse>
  ): PaymentMethodResponse {
    const message = { ...basePaymentMethodResponse } as PaymentMethodResponse;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = PaymentMethod.fromPartial(object.payload);
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

  toJSON(message: PaymentMethodResponse): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload
        ? PaymentMethod.toJSON(message.payload)
        : undefined);
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },
};

const basePaymentMethod: object = {
  id: "",
  payment_method: 0,
  transfer_type: 0,
};

export const PaymentMethod = {
  encode(message: PaymentMethod, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    if (message.payment_method !== 0) {
      writer.uint32(24).int32(message.payment_method);
    }
    if (message.transfer_type !== 0) {
      writer.uint32(32).int32(message.transfer_type);
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PaymentMethod {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      basePaymentMethod
    ) as PaymentMethod;
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
          message.payment_method = reader.int32() as any;
          break;
        case 4:
          message.transfer_type = reader.int32() as any;
          break;
        case 5:
          message.data = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PaymentMethod {
    const message = globalThis.Object.create(
      basePaymentMethod
    ) as PaymentMethod;
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
    if (object.payment_method !== undefined && object.payment_method !== null) {
      message.payment_method = paymentMethodEnumFromJSON(object.payment_method);
    } else {
      message.payment_method = 0;
    }
    if (object.transfer_type !== undefined && object.transfer_type !== null) {
      message.transfer_type = transferTypeEnumFromJSON(object.transfer_type);
    } else {
      message.transfer_type = 0;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromJSON(object.data);
    } else {
      message.data = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<PaymentMethod>): PaymentMethod {
    const message = { ...basePaymentMethod } as PaymentMethod;
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
    if (object.payment_method !== undefined && object.payment_method !== null) {
      message.payment_method = object.payment_method;
    } else {
      message.payment_method = 0;
    }
    if (object.transfer_type !== undefined && object.transfer_type !== null) {
      message.transfer_type = object.transfer_type;
    } else {
      message.transfer_type = 0;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromPartial(object.data);
    } else {
      message.data = undefined;
    }
    return message;
  },

  toJSON(message: PaymentMethod): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.payment_method !== undefined &&
      (obj.payment_method = paymentMethodEnumToJSON(message.payment_method));
    message.transfer_type !== undefined &&
      (obj.transfer_type = transferTypeEnumToJSON(message.transfer_type));
    message.data !== undefined &&
      (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    return obj;
  },
};

/** Microservice definition. */
export interface Service {
  Read(request: ReadRequest): Promise<PaymentMethodListResponse>;
  Create(request: PaymentMethodList): Promise<PaymentMethodListResponse>;
  Delete(request: DeleteRequest): Promise<DeleteResponse>;
  Update(request: PaymentMethodList): Promise<PaymentMethodListResponse>;
  Upsert(request: PaymentMethodList): Promise<PaymentMethodListResponse>;
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
            typeName: ".io.restorecommerce.payment_method.PaymentMethod",
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
        name: "PaymentMethodList",
      },
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName:
              ".io.restorecommerce.payment_method.PaymentMethodResponse",
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
        name: "PaymentMethodListResponse",
      },
      {
        field: [
          {
            name: "payload",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.payment_method.PaymentMethod",
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
        name: "PaymentMethodResponse",
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
          {
            name: "payment_method",
            number: 3,
            label: 1,
            type: 14,
            typeName: ".io.restorecommerce.payment_method.PaymentMethodEnum",
            jsonName: "paymentMethod",
          },
          {
            name: "transfer_type",
            number: 4,
            label: 1,
            type: 14,
            typeName: ".io.restorecommerce.payment_method.TransferTypeEnum",
            jsonName: "transferType",
          },
          {
            name: "data",
            number: 5,
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
        name: "PaymentMethod",
      },
    ],
    enumType: [
      {
        value: [
          { name: "WIRE_TRANSFER", number: 0 },
          { name: "DIRECT_DEBIT", number: 1 },
          { name: "PAYPAL", number: 2 },
        ],
        reservedRange: [],
        reservedName: [],
        name: "PaymentMethodEnum",
      },
      {
        value: [
          { name: "RECEIVE", number: 0 },
          { name: "SEND", number: 1 },
          { name: "BOTH", number: 2 },
        ],
        reservedRange: [],
        reservedName: [],
        name: "TransferTypeEnum",
      },
    ],
    service: [
      {
        method: [
          {
            name: "Read",
            inputType: ".io.restorecommerce.resourcebase.ReadRequest",
            outputType:
              ".io.restorecommerce.payment_method.PaymentMethodListResponse",
          },
          {
            name: "Create",
            inputType: ".io.restorecommerce.payment_method.PaymentMethodList",
            outputType:
              ".io.restorecommerce.payment_method.PaymentMethodListResponse",
          },
          {
            name: "Delete",
            inputType: ".io.restorecommerce.resourcebase.DeleteRequest",
            outputType: ".io.restorecommerce.resourcebase.DeleteResponse",
          },
          {
            name: "Update",
            inputType: ".io.restorecommerce.payment_method.PaymentMethodList",
            outputType:
              ".io.restorecommerce.payment_method.PaymentMethodListResponse",
          },
          {
            name: "Upsert",
            inputType: ".io.restorecommerce.payment_method.PaymentMethodList",
            outputType:
              ".io.restorecommerce.payment_method.PaymentMethodListResponse",
          },
        ],
        name: "Service",
      },
    ],
    extension: [],
    name: "io/restorecommerce/payment_method.proto",
    package: "io.restorecommerce.payment_method",
    sourceCodeInfo: {
      location: [
        {
          path: [6, 0],
          span: [13, 0, 19, 1],
          leadingDetachedComments: [],
          leadingComments: "\n Microservice definition.\n",
        },
      ],
    },
    syntax: "proto3",
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
