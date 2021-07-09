/* eslint-disable */
import { FileDescriptorProto } from "ts-proto-descriptors/google/protobuf/descriptor";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "io.restorecommerce.filter";

export interface Filter {
  field: string;
  operation: Filter_Operation;
  value: string;
  type: Filter_ValueType;
  filters: FilterOp[];
}

export enum Filter_Operation {
  eq = 0,
  lt = 1,
  lte = 2,
  gt = 3,
  gte = 4,
  isEmpty = 5,
  iLike = 6,
  in = 7,
  neq = 8,
  UNRECOGNIZED = -1,
}

export function filter_OperationFromJSON(object: any): Filter_Operation {
  switch (object) {
    case 0:
    case "eq":
      return Filter_Operation.eq;
    case 1:
    case "lt":
      return Filter_Operation.lt;
    case 2:
    case "lte":
      return Filter_Operation.lte;
    case 3:
    case "gt":
      return Filter_Operation.gt;
    case 4:
    case "gte":
      return Filter_Operation.gte;
    case 5:
    case "isEmpty":
      return Filter_Operation.isEmpty;
    case 6:
    case "iLike":
      return Filter_Operation.iLike;
    case 7:
    case "in":
      return Filter_Operation.in;
    case 8:
    case "neq":
      return Filter_Operation.neq;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Filter_Operation.UNRECOGNIZED;
  }
}

export function filter_OperationToJSON(object: Filter_Operation): string {
  switch (object) {
    case Filter_Operation.eq:
      return "eq";
    case Filter_Operation.lt:
      return "lt";
    case Filter_Operation.lte:
      return "lte";
    case Filter_Operation.gt:
      return "gt";
    case Filter_Operation.gte:
      return "gte";
    case Filter_Operation.isEmpty:
      return "isEmpty";
    case Filter_Operation.iLike:
      return "iLike";
    case Filter_Operation.in:
      return "in";
    case Filter_Operation.neq:
      return "neq";
    default:
      return "UNKNOWN";
  }
}

export enum Filter_ValueType {
  /** STRING - default value type if not specified */
  STRING = 0,
  NUMBER = 1,
  BOOLEAN = 2,
  DATE = 3,
  ARRAY = 4,
  UNRECOGNIZED = -1,
}

export function filter_ValueTypeFromJSON(object: any): Filter_ValueType {
  switch (object) {
    case 0:
    case "STRING":
      return Filter_ValueType.STRING;
    case 1:
    case "NUMBER":
      return Filter_ValueType.NUMBER;
    case 2:
    case "BOOLEAN":
      return Filter_ValueType.BOOLEAN;
    case 3:
    case "DATE":
      return Filter_ValueType.DATE;
    case 4:
    case "ARRAY":
      return Filter_ValueType.ARRAY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Filter_ValueType.UNRECOGNIZED;
  }
}

export function filter_ValueTypeToJSON(object: Filter_ValueType): string {
  switch (object) {
    case Filter_ValueType.STRING:
      return "STRING";
    case Filter_ValueType.NUMBER:
      return "NUMBER";
    case Filter_ValueType.BOOLEAN:
      return "BOOLEAN";
    case Filter_ValueType.DATE:
      return "DATE";
    case Filter_ValueType.ARRAY:
      return "ARRAY";
    default:
      return "UNKNOWN";
  }
}

export interface FilterOp {
  filter: Filter[];
  operator: FilterOp_Operator;
}

export enum FilterOp_Operator {
  and = 0,
  or = 1,
  UNRECOGNIZED = -1,
}

export function filterOp_OperatorFromJSON(object: any): FilterOp_Operator {
  switch (object) {
    case 0:
    case "and":
      return FilterOp_Operator.and;
    case 1:
    case "or":
      return FilterOp_Operator.or;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FilterOp_Operator.UNRECOGNIZED;
  }
}

export function filterOp_OperatorToJSON(object: FilterOp_Operator): string {
  switch (object) {
    case FilterOp_Operator.and:
      return "and";
    case FilterOp_Operator.or:
      return "or";
    default:
      return "UNKNOWN";
  }
}

const baseFilter: object = { field: "", operation: 0, value: "", type: 0 };

export const Filter = {
  encode(message: Filter, writer: Writer = Writer.create()): Writer {
    if (message.field !== "") {
      writer.uint32(10).string(message.field);
    }
    if (message.operation !== 0) {
      writer.uint32(16).int32(message.operation);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    if (message.type !== 0) {
      writer.uint32(32).int32(message.type);
    }
    for (const v of message.filters) {
      FilterOp.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Filter {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseFilter) as Filter;
    message.filters = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.field = reader.string();
          break;
        case 2:
          message.operation = reader.int32() as any;
          break;
        case 3:
          message.value = reader.string();
          break;
        case 4:
          message.type = reader.int32() as any;
          break;
        case 6:
          message.filters.push(FilterOp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Filter {
    const message = globalThis.Object.create(baseFilter) as Filter;
    message.filters = [];
    if (object.field !== undefined && object.field !== null) {
      message.field = String(object.field);
    } else {
      message.field = "";
    }
    if (object.operation !== undefined && object.operation !== null) {
      message.operation = filter_OperationFromJSON(object.operation);
    } else {
      message.operation = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = filter_ValueTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.filters !== undefined && object.filters !== null) {
      for (const e of object.filters) {
        message.filters.push(FilterOp.fromJSON(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Filter>): Filter {
    const message = { ...baseFilter } as Filter;
    message.filters = [];
    if (object.field !== undefined && object.field !== null) {
      message.field = object.field;
    } else {
      message.field = "";
    }
    if (object.operation !== undefined && object.operation !== null) {
      message.operation = object.operation;
    } else {
      message.operation = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.filters !== undefined && object.filters !== null) {
      for (const e of object.filters) {
        message.filters.push(FilterOp.fromPartial(e));
      }
    }
    return message;
  },

  toJSON(message: Filter): unknown {
    const obj: any = {};
    message.field !== undefined && (obj.field = message.field);
    message.operation !== undefined &&
      (obj.operation = filter_OperationToJSON(message.operation));
    message.value !== undefined && (obj.value = message.value);
    message.type !== undefined &&
      (obj.type = filter_ValueTypeToJSON(message.type));
    if (message.filters) {
      obj.filters = message.filters.map((e) =>
        e ? FilterOp.toJSON(e) : undefined
      );
    } else {
      obj.filters = [];
    }
    return obj;
  },
};

const baseFilterOp: object = { operator: 0 };

export const FilterOp = {
  encode(message: FilterOp, writer: Writer = Writer.create()): Writer {
    for (const v of message.filter) {
      Filter.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.operator !== 0) {
      writer.uint32(16).int32(message.operator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): FilterOp {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseFilterOp) as FilterOp;
    message.filter = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filter.push(Filter.decode(reader, reader.uint32()));
          break;
        case 2:
          message.operator = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FilterOp {
    const message = globalThis.Object.create(baseFilterOp) as FilterOp;
    message.filter = [];
    if (object.filter !== undefined && object.filter !== null) {
      for (const e of object.filter) {
        message.filter.push(Filter.fromJSON(e));
      }
    }
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = filterOp_OperatorFromJSON(object.operator);
    } else {
      message.operator = 0;
    }
    return message;
  },

  fromPartial(object: DeepPartial<FilterOp>): FilterOp {
    const message = { ...baseFilterOp } as FilterOp;
    message.filter = [];
    if (object.filter !== undefined && object.filter !== null) {
      for (const e of object.filter) {
        message.filter.push(Filter.fromPartial(e));
      }
    }
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    } else {
      message.operator = 0;
    }
    return message;
  },

  toJSON(message: FilterOp): unknown {
    const obj: any = {};
    if (message.filter) {
      obj.filter = message.filter.map((e) =>
        e ? Filter.toJSON(e) : undefined
      );
    } else {
      obj.filter = [];
    }
    message.operator !== undefined &&
      (obj.operator = filterOp_OperatorToJSON(message.operator));
    return obj;
  },
};

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto.fromPartial({
    dependency: [],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        field: [
          { name: "field", number: 1, label: 1, type: 9, jsonName: "field" },
          {
            name: "operation",
            number: 2,
            label: 1,
            type: 14,
            typeName: ".io.restorecommerce.filter.Filter.Operation",
            jsonName: "operation",
          },
          { name: "value", number: 3, label: 1, type: 9, jsonName: "value" },
          {
            name: "type",
            number: 4,
            label: 1,
            type: 14,
            typeName: ".io.restorecommerce.filter.Filter.ValueType",
            jsonName: "type",
          },
          {
            name: "filters",
            number: 6,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.filter.FilterOp",
            jsonName: "filters",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [
          {
            value: [
              { name: "eq", number: 0 },
              { name: "lt", number: 1 },
              { name: "lte", number: 2 },
              { name: "gt", number: 3 },
              { name: "gte", number: 4 },
              { name: "isEmpty", number: 5 },
              { name: "iLike", number: 6 },
              { name: "in", number: 7 },
              { name: "neq", number: 8 },
            ],
            reservedRange: [],
            reservedName: [],
            name: "Operation",
          },
          {
            value: [
              { name: "STRING", number: 0 },
              { name: "NUMBER", number: 1 },
              { name: "BOOLEAN", number: 2 },
              { name: "DATE", number: 3 },
              { name: "ARRAY", number: 4 },
            ],
            reservedRange: [],
            reservedName: [],
            name: "ValueType",
          },
        ],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Filter",
      },
      {
        field: [
          {
            name: "filter",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.filter.Filter",
            jsonName: "filter",
          },
          {
            name: "operator",
            number: 2,
            label: 1,
            type: 14,
            typeName: ".io.restorecommerce.filter.FilterOp.Operator",
            jsonName: "operator",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [
          {
            value: [
              { name: "and", number: 0 },
              { name: "or", number: 1 },
            ],
            reservedRange: [],
            reservedName: [],
            name: "Operator",
          },
        ],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "FilterOp",
      },
    ],
    enumType: [],
    service: [],
    extension: [],
    name: "io/restorecommerce/filter.proto",
    package: "io.restorecommerce.filter",
    sourceCodeInfo: {
      location: [
        {
          path: [4, 0, 4, 1, 2, 0],
          span: [20, 4, 15],
          leadingDetachedComments: [],
          trailingComments: " default value type if not specified\n",
        },
      ],
    },
    syntax: "proto3",
  }),
  references: {
    ".io.restorecommerce.filter.Filter": Filter,
    ".io.restorecommerce.filter.Filter.Operation": Filter_Operation,
    ".io.restorecommerce.filter.Filter.ValueType": Filter_ValueType,
    ".io.restorecommerce.filter.FilterOp": FilterOp,
    ".io.restorecommerce.filter.FilterOp.Operator": FilterOp_Operator,
  },
  dependencies: [],
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
