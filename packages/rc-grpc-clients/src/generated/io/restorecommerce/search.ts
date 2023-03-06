/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { Any, protoMetadata as protoMetadata1 } from "../../google/protobuf/any";
import { protoMetadata as protoMetadata2, Subject } from "./auth";
import { protoMetadata as protoMetadata3 } from "./options";

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

function createBaseSearchRequest(): SearchRequest {
  return { collection: "", text: "", acl: [], subject: undefined };
}

export const SearchRequest = {
  encode(message: SearchRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): SearchRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSearchRequest();
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
    return {
      collection: isSet(object.collection) ? String(object.collection) : "",
      text: isSet(object.text) ? String(object.text) : "",
      acl: Array.isArray(object?.acl) ? object.acl.map((e: any) => String(e)) : [],
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
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
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<SearchRequest>): SearchRequest {
    return SearchRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SearchRequest>): SearchRequest {
    const message = createBaseSearchRequest();
    message.collection = object.collection ?? "";
    message.text = object.text ?? "";
    message.acl = object.acl?.map((e) => e) || [];
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseSearchResponse(): SearchResponse {
  return { data: [] };
}

export const SearchResponse = {
  encode(message: SearchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.data) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SearchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSearchResponse();
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
    return { data: Array.isArray(object?.data) ? object.data.map((e: any) => Any.fromJSON(e)) : [] };
  },

  toJSON(message: SearchResponse): unknown {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map((e) => e ? Any.toJSON(e) : undefined);
    } else {
      obj.data = [];
    }
    return obj;
  },

  create(base?: DeepPartial<SearchResponse>): SearchResponse {
    return SearchResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SearchResponse>): SearchResponse {
    const message = createBaseSearchResponse();
    message.data = object.data?.map((e) => Any.fromPartial(e)) || [];
    return message;
  },
};

/** Service provides the CRUD operations */
export type ServiceDefinition = typeof ServiceDefinition;
export const ServiceDefinition = {
  name: "Service",
  fullName: "io.restorecommerce.search.Service",
  methods: {
    search: {
      name: "Search",
      requestType: SearchRequest,
      requestStream: false,
      responseType: SearchResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface ServiceImplementation<CallContextExt = {}> {
  search(request: SearchRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SearchResponse>>;
}

export interface ServiceClient<CallOptionsExt = {}> {
  search(request: DeepPartial<SearchRequest>, options?: CallOptions & CallOptionsExt): Promise<SearchResponse>;
}

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
    "name": "io/restorecommerce/search.proto",
    "package": "io.restorecommerce.search",
    "dependency": ["google/protobuf/any.proto", "io/restorecommerce/auth.proto", "io/restorecommerce/options.proto"],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "SearchRequest",
      "field": [{
        "name": "collection",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "collection",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "text",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "text",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "acl",
        "number": 3,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "acl",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "subject",
        "number": 4,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.auth.Subject",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "subject",
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
    }, {
      "name": "SearchResponse",
      "field": [{
        "name": "data",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.Any",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "data",
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
    "enumType": [],
    "service": [{
      "name": "Service",
      "method": [{
        "name": "Search",
        "inputType": ".io.restorecommerce.search.SearchRequest",
        "outputType": ".io.restorecommerce.search.SearchResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }],
      "options": { "deprecated": false, "uninterpretedOption": [] },
    }],
    "extension": [],
    "options": undefined,
    "sourceCodeInfo": {
      "location": [{
        "path": [6, 0],
        "span": [8, 0, 12, 1],
        "leadingComments": " Service provides the CRUD operations\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {
    ".io.restorecommerce.search.SearchRequest": SearchRequest,
    ".io.restorecommerce.search.SearchResponse": SearchResponse,
  },
  dependencies: [protoMetadata1, protoMetadata2, protoMetadata3],
  options: { services: { "Service": { options: { "service_name": "search" }, methods: {} } } },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
