/* eslint-disable */
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import {
  Any,
  protoMetadata as protoMetadata1,
} from "../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "io.restorecommerce.rendering";

export interface Payload {
  /**
   * json with <key, template> pairs
   * e.g. { 'subject': ..., 'message':....}
   */
  templates?: Any;
  /** data to fill template with */
  data?: Any;
  /** stylesheet URL */
  style_url: string;
  /** inlining, copying CSS into <style>, etc... */
  strategy: Payload_Strategy;
  /** rendering options JSON object */
  options?: Any;
  /** content type for rendering such as 'application/html' or 'application/text' */
  content_type: string;
}

/** style-applying 'strategy' */
export enum Payload_Strategy {
  INLINE = "INLINE",
  COPY = "COPY",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function payload_StrategyFromJSON(object: any): Payload_Strategy {
  switch (object) {
    case 0:
    case "INLINE":
      return Payload_Strategy.INLINE;
    case 1:
    case "COPY":
      return Payload_Strategy.COPY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Payload_Strategy.UNRECOGNIZED;
  }
}

export function payload_StrategyToJSON(object: Payload_Strategy): string {
  switch (object) {
    case Payload_Strategy.INLINE:
      return "INLINE";
    case Payload_Strategy.COPY:
      return "COPY";
    case Payload_Strategy.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function payload_StrategyToNumber(object: Payload_Strategy): number {
  switch (object) {
    case Payload_Strategy.INLINE:
      return 0;
    case Payload_Strategy.COPY:
      return 1;
    case Payload_Strategy.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface RenderRequest {
  /** identifies the render request payload */
  id: string;
  /** List of templates with associated data and rendering options */
  payload: Payload[];
}

export interface RenderResponse {
  id: string;
  /** error or HTML contents */
  response: Any[];
}

function createBasePayload(): Payload {
  return {
    templates: undefined,
    data: undefined,
    style_url: "",
    strategy: Payload_Strategy.INLINE,
    options: undefined,
    content_type: "",
  };
}

export const Payload = {
  encode(
    message: Payload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.templates !== undefined) {
      Any.encode(message.templates, writer.uint32(10).fork()).ldelim();
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(18).fork()).ldelim();
    }
    if (message.style_url !== "") {
      writer.uint32(26).string(message.style_url);
    }
    if (message.strategy !== Payload_Strategy.INLINE) {
      writer.uint32(32).int32(payload_StrategyToNumber(message.strategy));
    }
    if (message.options !== undefined) {
      Any.encode(message.options, writer.uint32(42).fork()).ldelim();
    }
    if (message.content_type !== "") {
      writer.uint32(50).string(message.content_type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Payload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.templates = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.data = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.style_url = reader.string();
          break;
        case 4:
          message.strategy = payload_StrategyFromJSON(reader.int32());
          break;
        case 5:
          message.options = Any.decode(reader, reader.uint32());
          break;
        case 6:
          message.content_type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Payload {
    return {
      templates: isSet(object.templates)
        ? Any.fromJSON(object.templates)
        : undefined,
      data: isSet(object.data) ? Any.fromJSON(object.data) : undefined,
      style_url: isSet(object.style_url) ? String(object.style_url) : "",
      strategy: isSet(object.strategy)
        ? payload_StrategyFromJSON(object.strategy)
        : Payload_Strategy.INLINE,
      options: isSet(object.options) ? Any.fromJSON(object.options) : undefined,
      content_type: isSet(object.content_type)
        ? String(object.content_type)
        : "",
    };
  },

  toJSON(message: Payload): unknown {
    const obj: any = {};
    message.templates !== undefined &&
      (obj.templates = message.templates
        ? Any.toJSON(message.templates)
        : undefined);
    message.data !== undefined &&
      (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    message.style_url !== undefined && (obj.style_url = message.style_url);
    message.strategy !== undefined &&
      (obj.strategy = payload_StrategyToJSON(message.strategy));
    message.options !== undefined &&
      (obj.options = message.options ? Any.toJSON(message.options) : undefined);
    message.content_type !== undefined &&
      (obj.content_type = message.content_type);
    return obj;
  },

  fromPartial(object: DeepPartial<Payload>): Payload {
    const message = createBasePayload();
    message.templates =
      object.templates !== undefined && object.templates !== null
        ? Any.fromPartial(object.templates)
        : undefined;
    message.data =
      object.data !== undefined && object.data !== null
        ? Any.fromPartial(object.data)
        : undefined;
    message.style_url = object.style_url ?? "";
    message.strategy = object.strategy ?? Payload_Strategy.INLINE;
    message.options =
      object.options !== undefined && object.options !== null
        ? Any.fromPartial(object.options)
        : undefined;
    message.content_type = object.content_type ?? "";
    return message;
  },
};

function createBaseRenderRequest(): RenderRequest {
  return { id: "", payload: [] };
}

export const RenderRequest = {
  encode(
    message: RenderRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.payload) {
      Payload.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RenderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRenderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.payload.push(Payload.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RenderRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      payload: Array.isArray(object?.payload)
        ? object.payload.map((e: any) => Payload.fromJSON(e))
        : [],
    };
  },

  toJSON(message: RenderRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.payload) {
      obj.payload = message.payload.map((e) =>
        e ? Payload.toJSON(e) : undefined
      );
    } else {
      obj.payload = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<RenderRequest>): RenderRequest {
    const message = createBaseRenderRequest();
    message.id = object.id ?? "";
    message.payload = object.payload?.map((e) => Payload.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRenderResponse(): RenderResponse {
  return { id: "", response: [] };
}

export const RenderResponse = {
  encode(
    message: RenderResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.response) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RenderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRenderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.response.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RenderResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      response: Array.isArray(object?.response)
        ? object.response.map((e: any) => Any.fromJSON(e))
        : [],
    };
  },

  toJSON(message: RenderResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.response) {
      obj.response = message.response.map((e) =>
        e ? Any.toJSON(e) : undefined
      );
    } else {
      obj.response = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<RenderResponse>): RenderResponse {
    const message = createBaseRenderResponse();
    message.id = object.id ?? "";
    message.response = object.response?.map((e) => Any.fromPartial(e)) || [];
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
    name: "io/restorecommerce/rendering.proto",
    package: "io.restorecommerce.rendering",
    dependency: ["google/protobuf/any.proto"],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        name: "Payload",
        field: [
          {
            name: "templates",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".google.protobuf.Any",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "templates",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "data",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".google.protobuf.Any",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "data",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "style_url",
            number: 3,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "styleUrl",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "strategy",
            number: 4,
            label: 1,
            type: 14,
            typeName: ".io.restorecommerce.rendering.Payload.Strategy",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "strategy",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "options",
            number: 5,
            label: 1,
            type: 11,
            typeName: ".google.protobuf.Any",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "options",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "content_type",
            number: 6,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "contentType",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [
          {
            name: "Strategy",
            value: [
              { name: "INLINE", number: 0, options: undefined },
              { name: "COPY", number: 1, options: undefined },
            ],
            options: undefined,
            reservedRange: [],
            reservedName: [],
          },
        ],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "RenderRequest",
        field: [
          {
            name: "id",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "id",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "payload",
            number: 2,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.rendering.Payload",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "payload",
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
      {
        name: "RenderResponse",
        field: [
          {
            name: "id",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "id",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "response",
            number: 2,
            label: 3,
            type: 11,
            typeName: ".google.protobuf.Any",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "response",
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
    extension: [],
    options: undefined,
    sourceCodeInfo: {
      location: [
        {
          path: [4, 0, 2, 0],
          span: [9, 2, 36],
          leadingComments:
            " json with <key, template> pairs\n e.g. { 'subject': ..., 'message':....}\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [4, 0, 2, 1],
          span: [10, 2, 31],
          leadingComments: "",
          trailingComments: " data to fill template with\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 0, 2, 2],
          span: [11, 2, 23],
          leadingComments: "",
          trailingComments: " stylesheet URL\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 0, 4, 0],
          span: [13, 2, 16, 3],
          leadingComments: "",
          trailingComments: " style-applying 'strategy'\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 0, 2, 3],
          span: [17, 2, 24],
          leadingComments: "",
          trailingComments: " inlining, copying CSS into <style>, etc...\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 0, 2, 4],
          span: [19, 2, 34],
          leadingComments: " rendering options JSON object\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [4, 0, 2, 5],
          span: [21, 2, 26],
          leadingComments:
            " content type for rendering such as 'application/html' or 'application/text'\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [4, 1, 2, 0],
          span: [25, 2, 16],
          leadingComments: "",
          trailingComments: " identifies the render request payload\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 1, 2, 1],
          span: [27, 2, 31],
          leadingComments:
            " List of templates with associated data and rendering options\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [4, 2, 2, 1],
          span: [32, 2, 44],
          leadingComments: "",
          trailingComments: " error or HTML contents\n",
          leadingDetachedComments: [],
        },
      ],
    },
    syntax: "proto3",
  }),
  references: {
    ".io.restorecommerce.rendering.Payload": Payload,
    ".io.restorecommerce.rendering.Payload.Strategy": Payload_Strategy,
    ".io.restorecommerce.rendering.RenderRequest": RenderRequest,
    ".io.restorecommerce.rendering.RenderResponse": RenderResponse,
  },
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}