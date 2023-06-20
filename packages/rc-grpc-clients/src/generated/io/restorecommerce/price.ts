/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { protoMetadata as protoMetadata3 } from "./currency";
import { protoMetadata as protoMetadata1, Resolver } from "./options";
import { protoMetadata as protoMetadata2 } from "./tax";

export const protobufPackage = "io.restorecommerce.price";

export interface Price {
  regularPrice?: number | undefined;
  sale?: boolean | undefined;
  salePrice?: number | undefined;
  currencyId?: string | undefined;
  taxIds: string[];
}

function createBasePrice(): Price {
  return { regularPrice: undefined, sale: undefined, salePrice: undefined, currencyId: undefined, taxIds: [] };
}

export const Price = {
  encode(message: Price, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.regularPrice !== undefined) {
      writer.uint32(9).double(message.regularPrice);
    }
    if (message.sale !== undefined) {
      writer.uint32(16).bool(message.sale);
    }
    if (message.salePrice !== undefined) {
      writer.uint32(25).double(message.salePrice);
    }
    if (message.currencyId !== undefined) {
      writer.uint32(34).string(message.currencyId);
    }
    for (const v of message.taxIds) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Price {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.regularPrice = reader.double();
          break;
        case 2:
          message.sale = reader.bool();
          break;
        case 3:
          message.salePrice = reader.double();
          break;
        case 4:
          message.currencyId = reader.string();
          break;
        case 5:
          message.taxIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Price {
    return {
      regularPrice: isSet(object.regularPrice) ? Number(object.regularPrice) : undefined,
      sale: isSet(object.sale) ? Boolean(object.sale) : undefined,
      salePrice: isSet(object.salePrice) ? Number(object.salePrice) : undefined,
      currencyId: isSet(object.currencyId) ? String(object.currencyId) : undefined,
      taxIds: Array.isArray(object?.taxIds) ? object.taxIds.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: Price): unknown {
    const obj: any = {};
    message.regularPrice !== undefined && (obj.regularPrice = message.regularPrice);
    message.sale !== undefined && (obj.sale = message.sale);
    message.salePrice !== undefined && (obj.salePrice = message.salePrice);
    message.currencyId !== undefined && (obj.currencyId = message.currencyId);
    if (message.taxIds) {
      obj.taxIds = message.taxIds.map((e) => e);
    } else {
      obj.taxIds = [];
    }
    return obj;
  },

  create(base?: DeepPartial<Price>): Price {
    return Price.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Price>): Price {
    const message = createBasePrice();
    message.regularPrice = object.regularPrice ?? undefined;
    message.sale = object.sale ?? undefined;
    message.salePrice = object.salePrice ?? undefined;
    message.currencyId = object.currencyId ?? undefined;
    message.taxIds = object.taxIds?.map((e) => e) || [];
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
    "name": "io/restorecommerce/price.proto",
    "package": "io.restorecommerce.price",
    "dependency": [
      "io/restorecommerce/options.proto",
      "io/restorecommerce/tax.proto",
      "io/restorecommerce/currency.proto",
    ],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "Price",
      "field": [{
        "name": "regular_price",
        "number": 1,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "regularPrice",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "sale",
        "number": 2,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "sale",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "sale_price",
        "number": 3,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "salePrice",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "currency_id",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "currencyId",
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
        "name": "tax_ids",
        "number": 5,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "taxIds",
        "options": {
          "ctype": 0,
          "packed": false,
          "jstype": 0,
          "lazy": false,
          "deprecated": false,
          "weak": false,
          "uninterpretedOption": [],
        },
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_regular_price", "options": undefined }, { "name": "_sale", "options": undefined }, {
        "name": "_sale_price",
        "options": undefined,
      }, { "name": "_currency_id", "options": undefined }],
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
        "path": [3, 0],
        "span": [5, 0, 42],
        "leadingComments": " Used by resolvers\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: { ".io.restorecommerce.price.Price": Price },
  dependencies: [protoMetadata1, protoMetadata2, protoMetadata3],
  options: {
    messages: {
      "Price": {
        fields: {
          "currency_id": {
            "resolver": Resolver.decode(
              Buffer.from(
                "CiUuaW8ucmVzdG9yZWNvbW1lcmNlLmN1cnJlbmN5LkN1cnJlbmN5EgttYXN0ZXJfZGF0YRoIY3VycmVuY3kiBFJlYWQqCGN1cnJlbmN5",
                "base64",
              ),
            ),
          },
          "tax_ids": {
            "resolver": Resolver.decode(
              Buffer.from("ChsuaW8ucmVzdG9yZWNvbW1lcmNlLnRheC5UYXgSC21hc3Rlcl9kYXRhGgN0YXgiBFJlYWQqBXRheGVz", "base64"),
            ),
          },
        },
      },
    },
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
