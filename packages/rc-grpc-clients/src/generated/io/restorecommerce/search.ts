/* eslint-disable */
import { FileDescriptorProto } from "ts-proto-descriptors/google/protobuf/descriptor";
import {
  Subject,
  protoMetadata as protoMetadata2,
} from "../../io/restorecommerce/auth";
import {
  protoMetadata as protoMetadata1,
  Any,
} from "../../google/protobuf/any";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "io.restorecommerce.search";

export interface SearchRequest {
  collection: string;
  text: string;
  acl: string[];
  subject?: Subject;
}

export interface SearchResponse {
  data: Any[];
}

const baseSearchRequest: object = { collection: "", text: "", acl: "" };

export const SearchRequest = {
  encode(message: SearchRequest, writer: Writer = Writer.create()): Writer {
    if (message.collection !== "") {
      writer.uint32(10).string(message.collection);
    }
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    for (const v of message.acl) {
      writer.uint32(26).string(v!);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SearchRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseSearchRequest
    ) as SearchRequest;
    message.acl = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collection = reader.string();
          break;
        case 2:
          message.text = reader.string();
          break;
        case 3:
          message.acl.push(reader.string());
          break;
        case 4:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SearchRequest {
    const message = globalThis.Object.create(
      baseSearchRequest
    ) as SearchRequest;
    message.acl = [];
    if (object.collection !== undefined && object.collection !== null) {
      message.collection = String(object.collection);
    } else {
      message.collection = "";
    }
    if (object.text !== undefined && object.text !== null) {
      message.text = String(object.text);
    } else {
      message.text = "";
    }
    if (object.acl !== undefined && object.acl !== null) {
      for (const e of object.acl) {
        message.acl.push(String(e));
      }
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<SearchRequest>): SearchRequest {
    const message = { ...baseSearchRequest } as SearchRequest;
    message.acl = [];
    if (object.collection !== undefined && object.collection !== null) {
      message.collection = object.collection;
    } else {
      message.collection = "";
    }
    if (object.text !== undefined && object.text !== null) {
      message.text = object.text;
    } else {
      message.text = "";
    }
    if (object.acl !== undefined && object.acl !== null) {
      for (const e of object.acl) {
        message.acl.push(e);
      }
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  toJSON(message: SearchRequest): unknown {
    const obj: any = {};
    message.collection !== undefined && (obj.collection = message.collection);
    message.text !== undefined && (obj.text = message.text);
    if (message.acl) {
      obj.acl = message.acl.map((e) => e);
    } else {
      obj.acl = [];
    }
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseSearchResponse: object = {};

export const SearchResponse = {
  encode(message: SearchResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.data) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SearchResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseSearchResponse
    ) as SearchResponse;
    message.data = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SearchResponse {
    const message = globalThis.Object.create(
      baseSearchResponse
    ) as SearchResponse;
    message.data = [];
    if (object.data !== undefined && object.data !== null) {
      for (const e of object.data) {
        message.data.push(Any.fromJSON(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<SearchResponse>): SearchResponse {
    const message = { ...baseSearchResponse } as SearchResponse;
    message.data = [];
    if (object.data !== undefined && object.data !== null) {
      for (const e of object.data) {
        message.data.push(Any.fromPartial(e));
      }
    }
    return message;
  },

  toJSON(message: SearchResponse): unknown {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map((e) => (e ? Any.toJSON(e) : undefined));
    } else {
      obj.data = [];
    }
    return obj;
  },
};

/** Service provides the CRUD operations */
export interface Service {
  Search(request: SearchRequest): Promise<SearchResponse>;
}

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto.fromPartial({
    dependency: ["google/protobuf/any.proto", "io/restorecommerce/auth.proto"],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        field: [
          {
            name: "collection",
            number: 1,
            label: 1,
            type: 9,
            jsonName: "collection",
          },
          { name: "text", number: 2, label: 1, type: 9, jsonName: "text" },
          { name: "acl", number: 3, label: 3, type: 9, jsonName: "acl" },
          {
            name: "subject",
            number: 4,
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
        name: "SearchRequest",
      },
      {
        field: [
          {
            name: "data",
            number: 1,
            label: 3,
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
        name: "SearchResponse",
      },
    ],
    enumType: [],
    service: [
      {
        method: [
          {
            name: "Search",
            inputType: ".io.restorecommerce.search.SearchRequest",
            outputType: ".io.restorecommerce.search.SearchResponse",
          },
        ],
        name: "Service",
      },
    ],
    extension: [],
    name: "io/restorecommerce/search.proto",
    package: "io.restorecommerce.search",
    sourceCodeInfo: {
      location: [
        {
          path: [6, 0],
          span: [7, 0, 9, 1],
          leadingDetachedComments: [],
          leadingComments: " Service provides the CRUD operations\n",
        },
      ],
    },
    syntax: "proto3",
  }),
  references: {
    ".io.restorecommerce.search.SearchRequest": SearchRequest,
    ".io.restorecommerce.search.SearchResponse": SearchResponse,
  },
  dependencies: [protoMetadata1, protoMetadata2],
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
