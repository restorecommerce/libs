/* eslint-disable */
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
import { protoMetadata as protoMetadata1 } from "../../google/protobuf/descriptor";

export const protobufPackage = "io.restorecommerce.options";

export interface Resolver {
  targetType: string;
  targetService: string;
  targetSubService: string;
  targetMethod: string;
  fieldName: string;
}

function createBaseResolver(): Resolver {
  return {
    targetType: "",
    targetService: "",
    targetSubService: "",
    targetMethod: "",
    fieldName: "",
  };
}

export const Resolver = {
  encode(
    message: Resolver,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.targetType !== "") {
      writer.uint32(10).string(message.targetType);
    }
    if (message.targetService !== "") {
      writer.uint32(18).string(message.targetService);
    }
    if (message.targetSubService !== "") {
      writer.uint32(26).string(message.targetSubService);
    }
    if (message.targetMethod !== "") {
      writer.uint32(34).string(message.targetMethod);
    }
    if (message.fieldName !== "") {
      writer.uint32(42).string(message.fieldName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resolver {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResolver();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetType = reader.string();
          break;
        case 2:
          message.targetService = reader.string();
          break;
        case 3:
          message.targetSubService = reader.string();
          break;
        case 4:
          message.targetMethod = reader.string();
          break;
        case 5:
          message.fieldName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Resolver {
    return {
      targetType: isSet(object.targetType) ? String(object.targetType) : "",
      targetService: isSet(object.targetService)
        ? String(object.targetService)
        : "",
      targetSubService: isSet(object.targetSubService)
        ? String(object.targetSubService)
        : "",
      targetMethod: isSet(object.targetMethod)
        ? String(object.targetMethod)
        : "",
      fieldName: isSet(object.fieldName) ? String(object.fieldName) : "",
    };
  },

  toJSON(message: Resolver): unknown {
    const obj: any = {};
    message.targetType !== undefined && (obj.targetType = message.targetType);
    message.targetService !== undefined &&
      (obj.targetService = message.targetService);
    message.targetSubService !== undefined &&
      (obj.targetSubService = message.targetSubService);
    message.targetMethod !== undefined &&
      (obj.targetMethod = message.targetMethod);
    message.fieldName !== undefined && (obj.fieldName = message.fieldName);
    return obj;
  },

  fromPartial(object: DeepPartial<Resolver>): Resolver {
    const message = createBaseResolver();
    message.targetType = object.targetType ?? "";
    message.targetService = object.targetService ?? "";
    message.targetSubService = object.targetSubService ?? "";
    message.targetMethod = object.targetMethod ?? "";
    message.fieldName = object.fieldName ?? "";
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
    name: "io/restorecommerce/options.proto",
    package: "io.restorecommerce.options",
    dependency: ["google/protobuf/descriptor.proto"],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        name: "Resolver",
        field: [
          {
            name: "target_type",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "targetType",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "target_service",
            number: 2,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "targetService",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "target_sub_service",
            number: 3,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "targetSubService",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "target_method",
            number: 4,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "targetMethod",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "field_name",
            number: 5,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "fieldName",
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
    ],
    enumType: [],
    service: [],
    extension: [
      {
        name: "resolver",
        number: 31000,
        label: 1,
        type: 11,
        typeName: ".io.restorecommerce.options.Resolver",
        extendee: ".google.protobuf.FieldOptions",
        defaultValue: "",
        oneofIndex: 0,
        jsonName: "resolver",
        options: undefined,
        proto3Optional: true,
      },
      {
        name: "is_query",
        number: 31001,
        label: 1,
        type: 8,
        typeName: "",
        extendee: ".google.protobuf.MethodOptions",
        defaultValue: "",
        oneofIndex: 0,
        jsonName: "isQuery",
        options: undefined,
        proto3Optional: true,
      },
      {
        name: "service_name",
        number: 31002,
        label: 1,
        type: 9,
        typeName: "",
        extendee: ".google.protobuf.ServiceOptions",
        defaultValue: "",
        oneofIndex: 0,
        jsonName: "serviceName",
        options: undefined,
        proto3Optional: true,
      },
    ],
    options: undefined,
    sourceCodeInfo: { location: [] },
    syntax: "proto3",
  }),
  references: { ".io.restorecommerce.options.Resolver": Resolver },
  dependencies: [protoMetadata1],
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
