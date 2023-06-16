/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto } from "ts-proto-descriptors";

export const protobufPackage = "io.restorecommerce.filter";

export interface Filter {
  field: string;
  operation: Filter_Operation;
  value: string;
  type: Filter_ValueType;
  filters: FilterOp[];
}

export enum Filter_Operation {
  eq = "eq",
  lt = "lt",
  lte = "lte",
  gt = "gt",
  gte = "gte",
  isEmpty = "isEmpty",
  iLike = "iLike",
  in = "in",
  neq = "neq",
  UNRECOGNIZED = "UNRECOGNIZED",
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
    case Filter_Operation.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function filter_OperationToNumber(object: Filter_Operation): number {
  switch (object) {
    case Filter_Operation.eq:
      return 0;
    case Filter_Operation.lt:
      return 1;
    case Filter_Operation.lte:
      return 2;
    case Filter_Operation.gt:
      return 3;
    case Filter_Operation.gte:
      return 4;
    case Filter_Operation.isEmpty:
      return 5;
    case Filter_Operation.iLike:
      return 6;
    case Filter_Operation.in:
      return 7;
    case Filter_Operation.neq:
      return 8;
    case Filter_Operation.UNRECOGNIZED:
    default:
      return -1;
  }
}

export enum Filter_ValueType {
  /** STRING - default value type if not specified */
  STRING = "STRING",
  NUMBER = "NUMBER",
  BOOLEAN = "BOOLEAN",
  DATE = "DATE",
  ARRAY = "ARRAY",
  UNRECOGNIZED = "UNRECOGNIZED",
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
    case Filter_ValueType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function filter_ValueTypeToNumber(object: Filter_ValueType): number {
  switch (object) {
    case Filter_ValueType.STRING:
      return 0;
    case Filter_ValueType.NUMBER:
      return 1;
    case Filter_ValueType.BOOLEAN:
      return 2;
    case Filter_ValueType.DATE:
      return 3;
    case Filter_ValueType.ARRAY:
      return 4;
    case Filter_ValueType.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface FilterOp {
  filters: Filter[];
  operator: FilterOp_Operator;
}

export enum FilterOp_Operator {
  and = "and",
  or = "or",
  UNRECOGNIZED = "UNRECOGNIZED",
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
    case FilterOp_Operator.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function filterOp_OperatorToNumber(object: FilterOp_Operator): number {
  switch (object) {
    case FilterOp_Operator.and:
      return 0;
    case FilterOp_Operator.or:
      return 1;
    case FilterOp_Operator.UNRECOGNIZED:
    default:
      return -1;
  }
}

function createBaseFilter(): Filter {
  return { field: "", operation: Filter_Operation.eq, value: "", type: Filter_ValueType.STRING, filters: [] };
}

export const Filter = {
  encode(message: Filter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.field !== "") {
      writer.uint32(10).string(message.field);
    }
    if (message.operation !== Filter_Operation.eq) {
      writer.uint32(16).int32(filter_OperationToNumber(message.operation));
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    if (message.type !== Filter_ValueType.STRING) {
      writer.uint32(32).int32(filter_ValueTypeToNumber(message.type));
    }
    for (const v of message.filters) {
      FilterOp.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Filter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.field = reader.string();
          break;
        case 2:
          message.operation = filter_OperationFromJSON(reader.int32());
          break;
        case 3:
          message.value = reader.string();
          break;
        case 4:
          message.type = filter_ValueTypeFromJSON(reader.int32());
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
    return {
      field: isSet(object.field) ? String(object.field) : "",
      operation: isSet(object.operation) ? filter_OperationFromJSON(object.operation) : Filter_Operation.eq,
      value: isSet(object.value) ? String(object.value) : "",
      type: isSet(object.type) ? filter_ValueTypeFromJSON(object.type) : Filter_ValueType.STRING,
      filters: Array.isArray(object?.filters) ? object.filters.map((e: any) => FilterOp.fromJSON(e)) : [],
    };
  },

  toJSON(message: Filter): unknown {
    const obj: any = {};
    message.field !== undefined && (obj.field = message.field);
    message.operation !== undefined && (obj.operation = filter_OperationToJSON(message.operation));
    message.value !== undefined && (obj.value = message.value);
    message.type !== undefined && (obj.type = filter_ValueTypeToJSON(message.type));
    if (message.filters) {
      obj.filters = message.filters.map((e) => e ? FilterOp.toJSON(e) : undefined);
    } else {
      obj.filters = [];
    }
    return obj;
  },

  create(base?: DeepPartial<Filter>): Filter {
    return Filter.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Filter>): Filter {
    const message = createBaseFilter();
    message.field = object.field ?? "";
    message.operation = object.operation ?? Filter_Operation.eq;
    message.value = object.value ?? "";
    message.type = object.type ?? Filter_ValueType.STRING;
    message.filters = object.filters?.map((e) => FilterOp.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFilterOp(): FilterOp {
  return { filters: [], operator: FilterOp_Operator.and };
}

export const FilterOp = {
  encode(message: FilterOp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.filters) {
      Filter.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.operator !== FilterOp_Operator.and) {
      writer.uint32(16).int32(filterOp_OperatorToNumber(message.operator));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FilterOp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFilterOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filters.push(Filter.decode(reader, reader.uint32()));
          break;
        case 2:
          message.operator = filterOp_OperatorFromJSON(reader.int32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FilterOp {
    return {
      filters: Array.isArray(object?.filters) ? object.filters.map((e: any) => Filter.fromJSON(e)) : [],
      operator: isSet(object.operator) ? filterOp_OperatorFromJSON(object.operator) : FilterOp_Operator.and,
    };
  },

  toJSON(message: FilterOp): unknown {
    const obj: any = {};
    if (message.filters) {
      obj.filters = message.filters.map((e) => e ? Filter.toJSON(e) : undefined);
    } else {
      obj.filters = [];
    }
    message.operator !== undefined && (obj.operator = filterOp_OperatorToJSON(message.operator));
    return obj;
  },

  create(base?: DeepPartial<FilterOp>): FilterOp {
    return FilterOp.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FilterOp>): FilterOp {
    const message = createBaseFilterOp();
    message.filters = object.filters?.map((e) => Filter.fromPartial(e)) || [];
    message.operator = object.operator ?? FilterOp_Operator.and;
    return message;
  },
};

type ProtoMetaMessageOptions = {
  options?: { [key: string]: any };
  fields?: { [key: string]: { [key: string]: any } };
  oneof?: { [key: string]: { [key: string]: any } };
  nested?: { [key: string]: ProtoMetaMessageOptions };
};

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto;
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
  fileDescriptor: FileDescriptorProto.fromPartial({
    "name": "io/restorecommerce/filter.proto",
    "package": "io.restorecommerce.filter",
    "dependency": [],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "Filter",
      "field": [{
        "name": "field",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "field",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "operation",
        "number": 2,
        "label": 1,
        "type": 14,
        "typeName": ".io.restorecommerce.filter.Filter.Operation",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "operation",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "value",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "value",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "type",
        "number": 4,
        "label": 1,
        "type": 14,
        "typeName": ".io.restorecommerce.filter.Filter.ValueType",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "type",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "filters",
        "number": 6,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.filter.FilterOp",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "filters",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [{
        "name": "Operation",
        "value": [
          { "name": "eq", "number": 0, "options": undefined },
          { "name": "lt", "number": 1, "options": undefined },
          { "name": "lte", "number": 2, "options": undefined },
          { "name": "gt", "number": 3, "options": undefined },
          { "name": "gte", "number": 4, "options": undefined },
          { "name": "isEmpty", "number": 5, "options": undefined },
          { "name": "iLike", "number": 6, "options": undefined },
          { "name": "in", "number": 7, "options": undefined },
          { "name": "neq", "number": 8, "options": undefined },
        ],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }, {
        "name": "ValueType",
        "value": [
          { "name": "STRING", "number": 0, "options": undefined },
          { "name": "NUMBER", "number": 1, "options": undefined },
          { "name": "BOOLEAN", "number": 2, "options": undefined },
          { "name": "DATE", "number": 3, "options": undefined },
          { "name": "ARRAY", "number": 4, "options": undefined },
        ],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "FilterOp",
      "field": [{
        "name": "filters",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.filter.Filter",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "filters",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "operator",
        "number": 2,
        "label": 1,
        "type": 14,
        "typeName": ".io.restorecommerce.filter.FilterOp.Operator",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "operator",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [{
        "name": "Operator",
        "value": [{ "name": "and", "number": 0, "options": undefined }, {
          "name": "or",
          "number": 1,
          "options": undefined,
        }],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "enumType": [],
    "service": [],
    "extension": [],
    "options": undefined,
    "sourceCodeInfo": {
      "location": [{
        "path": [4, 0, 4, 1, 2, 0],
        "span": [20, 4, 15],
        "leadingComments": "",
        "trailingComments": " default value type if not specified\n",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
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

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
