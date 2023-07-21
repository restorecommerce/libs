/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";

export const protobufPackage = "io.restorecommerce.property";

export interface Property {
  id?: string | undefined;
  value?: string | undefined;
  unit_code?: string | undefined;
}

export interface PropertyObj {
  properties?: Property | undefined;
}

function createBaseProperty(): Property {
  return { id: undefined, value: undefined, unit_code: undefined };
}

export const Property = {
  encode(message: Property, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.value !== undefined) {
      writer.uint32(18).string(message.value);
    }
    if (message.unit_code !== undefined) {
      writer.uint32(26).string(message.unit_code);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Property {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProperty();
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

          message.value = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.unit_code = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Property {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      value: isSet(object.value) ? String(object.value) : undefined,
      unit_code: isSet(object.unit_code) ? String(object.unit_code) : undefined,
    };
  },

  toJSON(message: Property): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.value !== undefined && (obj.value = message.value);
    message.unit_code !== undefined && (obj.unit_code = message.unit_code);
    return obj;
  },

  create(base?: DeepPartial<Property>): Property {
    return Property.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Property>): Property {
    const message = createBaseProperty();
    message.id = object.id ?? undefined;
    message.value = object.value ?? undefined;
    message.unit_code = object.unit_code ?? undefined;
    return message;
  },
};

function createBasePropertyObj(): PropertyObj {
  return { properties: undefined };
}

export const PropertyObj = {
  encode(message: PropertyObj, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.properties !== undefined) {
      Property.encode(message.properties, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PropertyObj {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePropertyObj();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.properties = Property.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PropertyObj {
    return { properties: isSet(object.properties) ? Property.fromJSON(object.properties) : undefined };
  },

  toJSON(message: PropertyObj): unknown {
    const obj: any = {};
    message.properties !== undefined &&
      (obj.properties = message.properties ? Property.toJSON(message.properties) : undefined);
    return obj;
  },

  create(base?: DeepPartial<PropertyObj>): PropertyObj {
    return PropertyObj.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PropertyObj>): PropertyObj {
    const message = createBasePropertyObj();
    message.properties = (object.properties !== undefined && object.properties !== null)
      ? Property.fromPartial(object.properties)
      : undefined;
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
      [key: string]: { options?: { [key: string]: any }; methods?: { [key: string]: { [key: string]: any } } };
    };
    messages?: { [key: string]: ProtoMetaMessageOptions };
    enums?: { [key: string]: { options?: { [key: string]: any }; values?: { [key: string]: { [key: string]: any } } } };
  };
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto1.fromPartial({
    "name": "io/restorecommerce/property.proto",
    "package": "io.restorecommerce.property",
    "dependency": [],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "Property",
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
        "name": "value",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "value",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "unit_code",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "unitCode",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_id", "options": undefined }, { "name": "_value", "options": undefined }, {
        "name": "_unit_code",
        "options": undefined,
      }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "PropertyObj",
      "field": [{
        "name": "properties",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.property.Property",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "properties",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_properties", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "enumType": [],
    "service": [],
    "extension": [],
    "options": undefined,
    "sourceCodeInfo": { "location": [] },
    "syntax": "proto3",
  }),
  references: {
    ".io.restorecommerce.property.Property": Property,
    ".io.restorecommerce.property.PropertyObj": PropertyObj,
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
