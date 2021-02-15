/* eslint-disable */
import { FileDescriptorProto } from "ts-proto-descriptors/google/protobuf/descriptor";
import {
  Subject,
  protoMetadata as protoMetadata4,
} from "../../io/restorecommerce/auth";
import {
  Meta,
  protoMetadata as protoMetadata3,
} from "../../io/restorecommerce/meta";
import {
  protoMetadata as protoMetadata1,
  ReadRequest,
  DeleteRequest,
} from "../../io/restorecommerce/resource_base";
import {
  protoMetadata as protoMetadata2,
  Empty,
} from "../../google/protobuf/empty";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "io.restorecommerce.country";

export interface Deleted {
  id: string;
}

export interface CountryList {
  items: Country[];
  totalCount: number;
  subject?: Subject;
}

export interface Country {
  id: string;
  meta?: Meta;
  name: string;
  countryCode: string;
  geographicalName: string;
  economicAreas: string[];
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

const baseCountryList: object = { totalCount: 0 };

export const CountryList = {
  encode(message: CountryList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      Country.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CountryList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseCountryList) as CountryList;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Country.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalCount = reader.uint32();
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

  fromJSON(object: any): CountryList {
    const message = globalThis.Object.create(baseCountryList) as CountryList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Country.fromJSON(e));
      }
    }
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = Number(object.totalCount);
    } else {
      message.totalCount = 0;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<CountryList>): CountryList {
    const message = { ...baseCountryList } as CountryList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Country.fromPartial(e));
      }
    }
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = object.totalCount;
    } else {
      message.totalCount = 0;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  toJSON(message: CountryList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => (e ? Country.toJSON(e) : undefined));
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseCountry: object = {
  id: "",
  name: "",
  countryCode: "",
  geographicalName: "",
  economicAreas: "",
};

export const Country = {
  encode(message: Country, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.countryCode !== "") {
      writer.uint32(34).string(message.countryCode);
    }
    if (message.geographicalName !== "") {
      writer.uint32(42).string(message.geographicalName);
    }
    for (const v of message.economicAreas) {
      writer.uint32(50).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Country {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseCountry) as Country;
    message.economicAreas = [];
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
          message.name = reader.string();
          break;
        case 4:
          message.countryCode = reader.string();
          break;
        case 5:
          message.geographicalName = reader.string();
          break;
        case 6:
          message.economicAreas.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Country {
    const message = globalThis.Object.create(baseCountry) as Country;
    message.economicAreas = [];
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
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.countryCode !== undefined && object.countryCode !== null) {
      message.countryCode = String(object.countryCode);
    } else {
      message.countryCode = "";
    }
    if (
      object.geographicalName !== undefined &&
      object.geographicalName !== null
    ) {
      message.geographicalName = String(object.geographicalName);
    } else {
      message.geographicalName = "";
    }
    if (object.economicAreas !== undefined && object.economicAreas !== null) {
      for (const e of object.economicAreas) {
        message.economicAreas.push(String(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Country>): Country {
    const message = { ...baseCountry } as Country;
    message.economicAreas = [];
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
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.countryCode !== undefined && object.countryCode !== null) {
      message.countryCode = object.countryCode;
    } else {
      message.countryCode = "";
    }
    if (
      object.geographicalName !== undefined &&
      object.geographicalName !== null
    ) {
      message.geographicalName = object.geographicalName;
    } else {
      message.geographicalName = "";
    }
    if (object.economicAreas !== undefined && object.economicAreas !== null) {
      for (const e of object.economicAreas) {
        message.economicAreas.push(e);
      }
    }
    return message;
  },

  toJSON(message: Country): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.countryCode !== undefined &&
      (obj.countryCode = message.countryCode);
    message.geographicalName !== undefined &&
      (obj.geographicalName = message.geographicalName);
    if (message.economicAreas) {
      obj.economicAreas = message.economicAreas.map((e) => e);
    } else {
      obj.economicAreas = [];
    }
    return obj;
  },
};

/** Microservice definition. */
export interface Service {
  Read(request: ReadRequest): Promise<CountryList>;
  Create(request: CountryList): Promise<CountryList>;
  Delete(request: DeleteRequest): Promise<Empty>;
  Update(request: CountryList): Promise<CountryList>;
  Upsert(request: CountryList): Promise<CountryList>;
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
      "google/protobuf/empty.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
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
            typeName: ".io.restorecommerce.country.Country",
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
        name: "CountryList",
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
          { name: "name", number: 3, label: 1, type: 9, jsonName: "name" },
          {
            name: "country_code",
            number: 4,
            label: 1,
            type: 9,
            jsonName: "countryCode",
          },
          {
            name: "geographical_name",
            number: 5,
            label: 1,
            type: 9,
            jsonName: "geographicalName",
          },
          {
            name: "economic_areas",
            number: 6,
            label: 3,
            type: 9,
            jsonName: "economicAreas",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Country",
      },
    ],
    enumType: [],
    service: [
      {
        method: [
          {
            name: "Read",
            inputType: ".io.restorecommerce.resourcebase.ReadRequest",
            outputType: ".io.restorecommerce.country.CountryList",
          },
          {
            name: "Create",
            inputType: ".io.restorecommerce.country.CountryList",
            outputType: ".io.restorecommerce.country.CountryList",
          },
          {
            name: "Delete",
            inputType: ".io.restorecommerce.resourcebase.DeleteRequest",
            outputType: ".google.protobuf.Empty",
          },
          {
            name: "Update",
            inputType: ".io.restorecommerce.country.CountryList",
            outputType: ".io.restorecommerce.country.CountryList",
          },
          {
            name: "Upsert",
            inputType: ".io.restorecommerce.country.CountryList",
            outputType: ".io.restorecommerce.country.CountryList",
          },
        ],
        name: "Service",
      },
    ],
    extension: [],
    name: "io/restorecommerce/country.proto",
    package: "io.restorecommerce.country",
    sourceCodeInfo: {
      location: [
        {
          path: [6, 0],
          span: [12, 0, 18, 1],
          leadingDetachedComments: [],
          leadingComments: "\n Microservice definition.\n",
        },
      ],
    },
    syntax: "proto3",
  }),
  references: {
    ".io.restorecommerce.country.Deleted": Deleted,
    ".io.restorecommerce.country.CountryList": CountryList,
    ".io.restorecommerce.country.Country": Country,
  },
  dependencies: [
    protoMetadata1,
    protoMetadata2,
    protoMetadata3,
    protoMetadata4,
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
