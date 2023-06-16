/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";

export const protobufPackage = "google.protobuf";

/**
 * / `NullValue` is a singleton enumeration to represent the null value for the
 * / `Value` type union.
 * /
 * /  The JSON representation for `NullValue` is JSON `null`.
 */
export enum NullValue {
  /** NULL_VALUE - / Null value. */
  NULL_VALUE = "NULL_VALUE",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function nullValueFromJSON(object: any): NullValue {
  switch (object) {
    case 0:
    case "NULL_VALUE":
      return NullValue.NULL_VALUE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return NullValue.UNRECOGNIZED;
  }
}

export function nullValueToJSON(object: NullValue): string {
  switch (object) {
    case NullValue.NULL_VALUE:
      return "NULL_VALUE";
    case NullValue.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function nullValueToNumber(object: NullValue): number {
  switch (object) {
    case NullValue.NULL_VALUE:
      return 0;
    case NullValue.UNRECOGNIZED:
    default:
      return -1;
  }
}

/**
 * / `Struct` represents a structured data value, consisting of fields
 * / which map to dynamically typed values. In some languages, `Struct`
 * / might be supported by a native representation. For example, in
 * / scripting languages like JS a struct is represented as an
 * / object. The details of that representation are described together
 * / with the proto support for the language.
 * /
 * / The JSON representation for `Struct` is JSON object.
 */
export interface Struct {
  /** / Unordered map of dynamically typed values. */
  fields: { [key: string]: any };
}

export interface Struct_FieldsEntry {
  key: string;
  value?: any;
}

/**
 * / `Value` represents a dynamically typed value which can be either
 * / null, a number, a string, a boolean, a recursive struct value, or a
 * / list of values. A producer of value is expected to set one of that
 * / variants, absence of any variant indicates an error.
 * /
 * / The JSON representation for `Value` is JSON value.
 */
export interface Value {
  /** / Represents a null value. */
  null_value?:
    | NullValue
    | undefined;
  /** / Represents a double value. */
  number_value?:
    | number
    | undefined;
  /** / Represents a string value. */
  string_value?:
    | string
    | undefined;
  /** / Represents a boolean value. */
  bool_value?:
    | boolean
    | undefined;
  /** / Represents a structured value. */
  struct_value?: { [key: string]: any };
  /** / Represents a repeated `Value`. */
  list_value?: Array<any>;
}

/**
 * / `ListValue` is a wrapper around a repeated field of values.
 * /
 * / The JSON representation for `ListValue` is JSON array.
 */
export interface ListValue {
  /** / Repeated field of dynamically typed values. */
  values: any[];
}

function createBaseStruct(): Struct {
  return { fields: {} };
}

export const Struct = {
  encode(message: Struct, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.fields).forEach(([key, value]) => {
      if (value !== undefined) {
        Struct_FieldsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
      }
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Struct {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStruct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = Struct_FieldsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.fields[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Struct {
    return {
      fields: isObject(object.fields)
        ? Object.entries(object.fields).reduce<{ [key: string]: any }>((acc, [key, value]) => {
          acc[key] = value as any;
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: Struct): unknown {
    const obj: any = {};
    obj.fields = {};
    if (message.fields) {
      Object.entries(message.fields).forEach(([k, v]) => {
        obj.fields[k] = v;
      });
    }
    return obj;
  },

  create(base?: DeepPartial<Struct>): Struct {
    return Struct.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Struct>): Struct {
    const message = createBaseStruct();
    message.fields = Object.entries(object.fields ?? {}).reduce<{ [key: string]: any }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});
    return message;
  },

  wrap(object: { [key: string]: any } | undefined): Struct {
    const struct = createBaseStruct();
    if (object !== undefined) {
      Object.keys(object).forEach((key) => {
        struct.fields[key] = object[key];
      });
    }
    return struct;
  },

  unwrap(message: Struct): { [key: string]: any } {
    const object: { [key: string]: any } = {};
    if (message.fields) {
      Object.keys(message.fields).forEach((key) => {
        object[key] = message.fields[key];
      });
    }
    return object;
  },
};

function createBaseStruct_FieldsEntry(): Struct_FieldsEntry {
  return { key: "", value: undefined };
}

export const Struct_FieldsEntry = {
  encode(message: Struct_FieldsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Value.encode(Value.wrap(message.value), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Struct_FieldsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStruct_FieldsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = Value.unwrap(Value.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Struct_FieldsEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object?.value) ? object.value : undefined };
  },

  toJSON(message: Struct_FieldsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create(base?: DeepPartial<Struct_FieldsEntry>): Struct_FieldsEntry {
    return Struct_FieldsEntry.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Struct_FieldsEntry>): Struct_FieldsEntry {
    const message = createBaseStruct_FieldsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? undefined;
    return message;
  },
};

function createBaseValue(): Value {
  return {
    null_value: undefined,
    number_value: undefined,
    string_value: undefined,
    bool_value: undefined,
    struct_value: undefined,
    list_value: undefined,
  };
}

export const Value = {
  encode(message: Value, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.null_value !== undefined) {
      writer.uint32(8).int32(nullValueToNumber(message.null_value));
    }
    if (message.number_value !== undefined) {
      writer.uint32(17).double(message.number_value);
    }
    if (message.string_value !== undefined) {
      writer.uint32(26).string(message.string_value);
    }
    if (message.bool_value !== undefined) {
      writer.uint32(32).bool(message.bool_value);
    }
    if (message.struct_value !== undefined) {
      Struct.encode(Struct.wrap(message.struct_value), writer.uint32(42).fork()).ldelim();
    }
    if (message.list_value !== undefined) {
      ListValue.encode(ListValue.wrap(message.list_value), writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Value {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.null_value = nullValueFromJSON(reader.int32());
          break;
        case 2:
          message.number_value = reader.double();
          break;
        case 3:
          message.string_value = reader.string();
          break;
        case 4:
          message.bool_value = reader.bool();
          break;
        case 5:
          message.struct_value = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 6:
          message.list_value = ListValue.unwrap(ListValue.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Value {
    return {
      null_value: isSet(object.null_value) ? nullValueFromJSON(object.null_value) : undefined,
      number_value: isSet(object.number_value) ? Number(object.number_value) : undefined,
      string_value: isSet(object.string_value) ? String(object.string_value) : undefined,
      bool_value: isSet(object.bool_value) ? Boolean(object.bool_value) : undefined,
      struct_value: isObject(object.struct_value) ? object.struct_value : undefined,
      list_value: Array.isArray(object.list_value) ? [...object.list_value] : undefined,
    };
  },

  toJSON(message: Value): unknown {
    const obj: any = {};
    message.null_value !== undefined &&
      (obj.null_value = message.null_value !== undefined ? nullValueToJSON(message.null_value) : undefined);
    message.number_value !== undefined && (obj.number_value = message.number_value);
    message.string_value !== undefined && (obj.string_value = message.string_value);
    message.bool_value !== undefined && (obj.bool_value = message.bool_value);
    message.struct_value !== undefined && (obj.struct_value = message.struct_value);
    message.list_value !== undefined && (obj.list_value = message.list_value);
    return obj;
  },

  create(base?: DeepPartial<Value>): Value {
    return Value.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Value>): Value {
    const message = createBaseValue();
    message.null_value = object.null_value ?? undefined;
    message.number_value = object.number_value ?? undefined;
    message.string_value = object.string_value ?? undefined;
    message.bool_value = object.bool_value ?? undefined;
    message.struct_value = object.struct_value ?? undefined;
    message.list_value = object.list_value ?? undefined;
    return message;
  },

  wrap(value: any): Value {
    const result = createBaseValue();
    if (value === null) {
      result.null_value = NullValue.NULL_VALUE;
    } else if (typeof value === "boolean") {
      result.bool_value = value;
    } else if (typeof value === "number") {
      result.number_value = value;
    } else if (typeof value === "string") {
      result.string_value = value;
    } else if (Array.isArray(value)) {
      result.list_value = value;
    } else if (typeof value === "object") {
      result.struct_value = value;
    } else if (typeof value !== "undefined") {
      throw new Error("Unsupported any value type: " + typeof value);
    }
    return result;
  },

  unwrap(message: any): string | number | boolean | Object | null | Array<any> | undefined {
    if (message.string_value !== undefined) {
      return message.string_value;
    } else if (message?.number_value !== undefined) {
      return message.number_value;
    } else if (message?.bool_value !== undefined) {
      return message.bool_value;
    } else if (message?.struct_value !== undefined) {
      return message.struct_value as any;
    } else if (message?.list_value !== undefined) {
      return message.list_value;
    } else if (message?.null_value !== undefined) {
      return null;
    }
    return undefined;
  },
};

function createBaseListValue(): ListValue {
  return { values: [] };
}

export const ListValue = {
  encode(message: ListValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.values) {
      Value.encode(Value.wrap(v!), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.values.push(Value.unwrap(Value.decode(reader, reader.uint32())));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListValue {
    return { values: Array.isArray(object?.values) ? [...object.values] : [] };
  },

  toJSON(message: ListValue): unknown {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map((e) => e);
    } else {
      obj.values = [];
    }
    return obj;
  },

  create(base?: DeepPartial<ListValue>): ListValue {
    return ListValue.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ListValue>): ListValue {
    const message = createBaseListValue();
    message.values = object.values?.map((e) => e) || [];
    return message;
  },

  wrap(array: Array<any> | undefined): ListValue {
    const result = createBaseListValue();
    result.values = array ?? [];
    return result;
  },

  unwrap(message: ListValue): Array<any> {
    if (message?.hasOwnProperty("values") && Array.isArray(message.values)) {
      return message.values;
    } else {
      return message as any;
    }
  },
};

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
    "name": "google/protobuf/struct.proto",
    "package": "google.protobuf",
    "dependency": [],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "Struct",
      "field": [{
        "name": "fields",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.Struct.FieldsEntry",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "fields",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [{
        "name": "FieldsEntry",
        "field": [{
          "name": "key",
          "number": 1,
          "label": 1,
          "type": 9,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "key",
          "options": undefined,
          "proto3Optional": false,
        }, {
          "name": "value",
          "number": 2,
          "label": 1,
          "type": 11,
          "typeName": ".google.protobuf.Value",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "value",
          "options": undefined,
          "proto3Optional": false,
        }],
        "extension": [],
        "nestedType": [],
        "enumType": [],
        "extensionRange": [],
        "oneofDecl": [],
        "options": {
          "messageSetWireFormat": false,
          "noStandardDescriptorAccessor": false,
          "deprecated": false,
          "mapEntry": true,
          "uninterpretedOption": [],
        },
        "reservedRange": [],
        "reservedName": [],
      }],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "Value",
      "field": [{
        "name": "null_value",
        "number": 1,
        "label": 1,
        "type": 14,
        "typeName": ".google.protobuf.NullValue",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "nullValue",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "number_value",
        "number": 2,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "numberValue",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "string_value",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "stringValue",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "bool_value",
        "number": 4,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "boolValue",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "struct_value",
        "number": 5,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.Struct",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "structValue",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "list_value",
        "number": 6,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.ListValue",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "listValue",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "kind", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ListValue",
      "field": [{
        "name": "values",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.Value",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "values",
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
    }],
    "enumType": [{
      "name": "NullValue",
      "value": [{ "name": "NULL_VALUE", "number": 0, "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "service": [],
    "extension": [],
    "options": {
      "javaPackage": "com.google.protobuf",
      "javaOuterClassname": "StructProto",
      "javaMultipleFiles": true,
      "javaGenerateEqualsAndHash": true,
      "javaStringCheckUtf8": false,
      "optimizeFor": 1,
      "goPackage": "github.com/golang/protobuf/ptypes/struct;structpb",
      "ccGenericServices": false,
      "javaGenericServices": false,
      "pyGenericServices": false,
      "phpGenericServices": false,
      "deprecated": false,
      "ccEnableArenas": false,
      "objcClassPrefix": "GPB",
      "csharpNamespace": "Google.Protobuf.WellKnownTypes",
      "swiftPrefix": "",
      "phpClassPrefix": "",
      "phpNamespace": "",
      "phpMetadataNamespace": "",
      "rubyPackage": "",
      "uninterpretedOption": [],
    },
    "sourceCodeInfo": {
      "location": [{
        "path": [4, 0],
        "span": [51, 0, 54, 1],
        "leadingComments":
          "/ `Struct` represents a structured data value, consisting of fields\n/ which map to dynamically typed values. In some languages, `Struct`\n/ might be supported by a native representation. For example, in\n/ scripting languages like JS a struct is represented as an\n/ object. The details of that representation are described together\n/ with the proto support for the language.\n/\n/ The JSON representation for `Struct` is JSON object.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0, 2, 0],
        "span": [53, 2, 32],
        "leadingComments": "/ Unordered map of dynamically typed values.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1],
        "span": [62, 0, 78, 1],
        "leadingComments":
          "/ `Value` represents a dynamically typed value which can be either\n/ null, a number, a string, a boolean, a recursive struct value, or a\n/ list of values. A producer of value is expected to set one of that\n/ variants, absence of any variant indicates an error.\n/\n/ The JSON representation for `Value` is JSON value.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 8, 0],
        "span": [64, 2, 77, 3],
        "leadingComments": "/ The kind of value.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 0],
        "span": [66, 4, 29],
        "leadingComments": "/ Represents a null value.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 1],
        "span": [68, 4, 28],
        "leadingComments": "/ Represents a double value.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 2],
        "span": [70, 4, 28],
        "leadingComments": "/ Represents a string value.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 3],
        "span": [72, 4, 24],
        "leadingComments": "/ Represents a boolean value.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 4],
        "span": [74, 4, 28],
        "leadingComments": "/ Represents a structured value.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 5],
        "span": [76, 4, 29],
        "leadingComments": "/ Represents a repeated `Value`.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [5, 0],
        "span": [84, 0, 87, 1],
        "leadingComments":
          "/ `NullValue` is a singleton enumeration to represent the null value for the\n/ `Value` type union.\n/\n/  The JSON representation for `NullValue` is JSON `null`.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [5, 0, 2, 0],
        "span": [86, 2, 17],
        "leadingComments": "/ Null value.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 2],
        "span": [92, 0, 95, 1],
        "leadingComments":
          "/ `ListValue` is a wrapper around a repeated field of values.\n/\n/ The JSON representation for `ListValue` is JSON array.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 2, 2, 0],
        "span": [94, 2, 28],
        "leadingComments": "/ Repeated field of dynamically typed values.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {
    ".google.protobuf.NullValue": NullValue,
    ".google.protobuf.Struct": Struct,
    ".google.protobuf.Struct.FieldsEntry": Struct_FieldsEntry,
    ".google.protobuf.Value": Value,
    ".google.protobuf.ListValue": ListValue,
  },
  dependencies: [],
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
