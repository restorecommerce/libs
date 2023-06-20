/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { protoMetadata as protoMetadata3 } from "./currency";
import { protoMetadata as protoMetadata1, Resolver } from "./options";
import { protoMetadata as protoMetadata2 } from "./tax";

export const protobufPackage = "io.restorecommerce.amount";

export interface VAT {
  taxId?: string | undefined;
  vat?: number | undefined;
}

export interface Amount {
  currencyId?: string | undefined;
  gross?: number | undefined;
  net?: number | undefined;
  vats: VAT[];
}

function createBaseVAT(): VAT {
  return { taxId: undefined, vat: undefined };
}

export const VAT = {
  encode(message: VAT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.taxId !== undefined) {
      writer.uint32(10).string(message.taxId);
    }
    if (message.vat !== undefined) {
      writer.uint32(17).double(message.vat);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VAT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVAT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.taxId = reader.string();
          break;
        case 2:
          message.vat = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VAT {
    return {
      taxId: isSet(object.taxId) ? String(object.taxId) : undefined,
      vat: isSet(object.vat) ? Number(object.vat) : undefined,
    };
  },

  toJSON(message: VAT): unknown {
    const obj: any = {};
    message.taxId !== undefined && (obj.taxId = message.taxId);
    message.vat !== undefined && (obj.vat = message.vat);
    return obj;
  },

  create(base?: DeepPartial<VAT>): VAT {
    return VAT.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<VAT>): VAT {
    const message = createBaseVAT();
    message.taxId = object.taxId ?? undefined;
    message.vat = object.vat ?? undefined;
    return message;
  },
};

function createBaseAmount(): Amount {
  return { currencyId: undefined, gross: undefined, net: undefined, vats: [] };
}

export const Amount = {
  encode(message: Amount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.currencyId !== undefined) {
      writer.uint32(10).string(message.currencyId);
    }
    if (message.gross !== undefined) {
      writer.uint32(17).double(message.gross);
    }
    if (message.net !== undefined) {
      writer.uint32(25).double(message.net);
    }
    for (const v of message.vats) {
      VAT.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Amount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAmount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.currencyId = reader.string();
          break;
        case 2:
          message.gross = reader.double();
          break;
        case 3:
          message.net = reader.double();
          break;
        case 4:
          message.vats.push(VAT.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Amount {
    return {
      currencyId: isSet(object.currencyId) ? String(object.currencyId) : undefined,
      gross: isSet(object.gross) ? Number(object.gross) : undefined,
      net: isSet(object.net) ? Number(object.net) : undefined,
      vats: Array.isArray(object?.vats) ? object.vats.map((e: any) => VAT.fromJSON(e)) : [],
    };
  },

  toJSON(message: Amount): unknown {
    const obj: any = {};
    message.currencyId !== undefined && (obj.currencyId = message.currencyId);
    message.gross !== undefined && (obj.gross = message.gross);
    message.net !== undefined && (obj.net = message.net);
    if (message.vats) {
      obj.vats = message.vats.map((e) => e ? VAT.toJSON(e) : undefined);
    } else {
      obj.vats = [];
    }
    return obj;
  },

  create(base?: DeepPartial<Amount>): Amount {
    return Amount.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Amount>): Amount {
    const message = createBaseAmount();
    message.currencyId = object.currencyId ?? undefined;
    message.gross = object.gross ?? undefined;
    message.net = object.net ?? undefined;
    message.vats = object.vats?.map((e) => VAT.fromPartial(e)) || [];
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
    "name": "io/restorecommerce/amount.proto",
    "package": "io.restorecommerce.amount",
    "dependency": [
      "io/restorecommerce/options.proto",
      "io/restorecommerce/tax.proto",
      "io/restorecommerce/currency.proto",
    ],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
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
    }, {
      "name": "Amount",
      "field": [{
        "name": "currency_id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
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
        "name": "gross",
        "number": 2,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "gross",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "net",
        "number": 3,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "net",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "vats",
        "number": 4,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.amount.VAT",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "vats",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_currency_id", "options": undefined }, { "name": "_gross", "options": undefined }, {
        "name": "_net",
        "options": undefined,
      }],
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
  references: { ".io.restorecommerce.amount.VAT": VAT, ".io.restorecommerce.amount.Amount": Amount },
  dependencies: [protoMetadata1, protoMetadata2, protoMetadata3],
  options: {
    messages: {
      "VAT": {
        fields: {
          "tax_id": {
            "resolver": Resolver.decode(
              Buffer.from("ChsuaW8ucmVzdG9yZWNvbW1lcmNlLnRheC5UYXgSC21hc3Rlcl9kYXRhGgN0YXgiBFJlYWQqA3RheA==", "base64"),
            ),
          },
        },
      },
      "Amount": {
        fields: {
          "currency_id": {
            "resolver": Resolver.decode(
              Buffer.from(
                "CiUuaW8ucmVzdG9yZWNvbW1lcmNlLmN1cnJlbmN5LkN1cnJlbmN5EgttYXN0ZXJfZGF0YRoIY3VycmVuY3kiBFJlYWQqCGN1cnJlbmN5",
                "base64",
              ),
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
