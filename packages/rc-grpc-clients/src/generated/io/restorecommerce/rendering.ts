/* eslint-disable */
import { FileDescriptorProto } from "ts-proto-descriptors/google/protobuf/descriptor";
import {
  Any,
  protoMetadata as protoMetadata1,
} from "../../google/protobuf/any";
import { Writer, Reader } from "protobufjs/minimal";

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
  INLINE = 0,
  COPY = 1,
  UNRECOGNIZED = -1,
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
    default:
      return "UNKNOWN";
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

const basePayload: object = { style_url: "", strategy: 0, content_type: "" };

export const Payload = {
  encode(message: Payload, writer: Writer = Writer.create()): Writer {
    if (message.templates !== undefined) {
      Any.encode(message.templates, writer.uint32(10).fork()).ldelim();
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(18).fork()).ldelim();
    }
    if (message.style_url !== "") {
      writer.uint32(26).string(message.style_url);
    }
    if (message.strategy !== 0) {
      writer.uint32(32).int32(message.strategy);
    }
    if (message.options !== undefined) {
      Any.encode(message.options, writer.uint32(42).fork()).ldelim();
    }
    if (message.content_type !== "") {
      writer.uint32(50).string(message.content_type);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Payload {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(basePayload) as Payload;
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
          message.strategy = reader.int32() as any;
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
    const message = globalThis.Object.create(basePayload) as Payload;
    if (object.templates !== undefined && object.templates !== null) {
      message.templates = Any.fromJSON(object.templates);
    } else {
      message.templates = undefined;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromJSON(object.data);
    } else {
      message.data = undefined;
    }
    if (object.style_url !== undefined && object.style_url !== null) {
      message.style_url = String(object.style_url);
    } else {
      message.style_url = "";
    }
    if (object.strategy !== undefined && object.strategy !== null) {
      message.strategy = payload_StrategyFromJSON(object.strategy);
    } else {
      message.strategy = 0;
    }
    if (object.options !== undefined && object.options !== null) {
      message.options = Any.fromJSON(object.options);
    } else {
      message.options = undefined;
    }
    if (object.content_type !== undefined && object.content_type !== null) {
      message.content_type = String(object.content_type);
    } else {
      message.content_type = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<Payload>): Payload {
    const message = { ...basePayload } as Payload;
    if (object.templates !== undefined && object.templates !== null) {
      message.templates = Any.fromPartial(object.templates);
    } else {
      message.templates = undefined;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromPartial(object.data);
    } else {
      message.data = undefined;
    }
    if (object.style_url !== undefined && object.style_url !== null) {
      message.style_url = object.style_url;
    } else {
      message.style_url = "";
    }
    if (object.strategy !== undefined && object.strategy !== null) {
      message.strategy = object.strategy;
    } else {
      message.strategy = 0;
    }
    if (object.options !== undefined && object.options !== null) {
      message.options = Any.fromPartial(object.options);
    } else {
      message.options = undefined;
    }
    if (object.content_type !== undefined && object.content_type !== null) {
      message.content_type = object.content_type;
    } else {
      message.content_type = "";
    }
    return message;
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
};

const baseRenderRequest: object = { id: "" };

export const RenderRequest = {
  encode(message: RenderRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.payload) {
      Payload.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): RenderRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseRenderRequest
    ) as RenderRequest;
    message.payload = [];
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
    const message = globalThis.Object.create(
      baseRenderRequest
    ) as RenderRequest;
    message.payload = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.payload !== undefined && object.payload !== null) {
      for (const e of object.payload) {
        message.payload.push(Payload.fromJSON(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<RenderRequest>): RenderRequest {
    const message = { ...baseRenderRequest } as RenderRequest;
    message.payload = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.payload !== undefined && object.payload !== null) {
      for (const e of object.payload) {
        message.payload.push(Payload.fromPartial(e));
      }
    }
    return message;
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
};

const baseRenderResponse: object = { id: "" };

export const RenderResponse = {
  encode(message: RenderResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.response) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): RenderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseRenderResponse
    ) as RenderResponse;
    message.response = [];
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
    const message = globalThis.Object.create(
      baseRenderResponse
    ) as RenderResponse;
    message.response = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.response !== undefined && object.response !== null) {
      for (const e of object.response) {
        message.response.push(Any.fromJSON(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<RenderResponse>): RenderResponse {
    const message = { ...baseRenderResponse } as RenderResponse;
    message.response = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.response !== undefined && object.response !== null) {
      for (const e of object.response) {
        message.response.push(Any.fromPartial(e));
      }
    }
    return message;
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
};

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto.fromPartial({
    dependency: ["google/protobuf/any.proto"],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        field: [
          {
            name: "templates",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".google.protobuf.Any",
            jsonName: "templates",
          },
          {
            name: "data",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".google.protobuf.Any",
            jsonName: "data",
          },
          {
            name: "style_url",
            number: 3,
            label: 1,
            type: 9,
            jsonName: "styleUrl",
          },
          {
            name: "strategy",
            number: 4,
            label: 1,
            type: 14,
            typeName: ".io.restorecommerce.rendering.Payload.Strategy",
            jsonName: "strategy",
          },
          {
            name: "options",
            number: 5,
            label: 1,
            type: 11,
            typeName: ".google.protobuf.Any",
            jsonName: "options",
          },
          {
            name: "content_type",
            number: 6,
            label: 1,
            type: 9,
            jsonName: "contentType",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [
          {
            value: [
              { name: "INLINE", number: 0 },
              { name: "COPY", number: 1 },
            ],
            reservedRange: [],
            reservedName: [],
            name: "Strategy",
          },
        ],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Payload",
      },
      {
        field: [
          { name: "id", number: 1, label: 1, type: 9, jsonName: "id" },
          {
            name: "payload",
            number: 2,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.rendering.Payload",
            jsonName: "payload",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "RenderRequest",
      },
      {
        field: [
          { name: "id", number: 1, label: 1, type: 9, jsonName: "id" },
          {
            name: "response",
            number: 2,
            label: 3,
            type: 11,
            typeName: ".google.protobuf.Any",
            jsonName: "response",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "RenderResponse",
      },
    ],
    enumType: [],
    service: [],
    extension: [],
    name: "io/restorecommerce/rendering.proto",
    package: "io.restorecommerce.rendering",
    sourceCodeInfo: {
      location: [
        {
          path: [4, 0, 2, 0],
          span: [9, 2, 36],
          leadingDetachedComments: [],
          leadingComments:
            " json with <key, template> pairs\n e.g. { 'subject': ..., 'message':....}\n",
        },
        {
          path: [4, 0, 2, 1],
          span: [10, 2, 31],
          leadingDetachedComments: [],
          trailingComments: " data to fill template with\n",
        },
        {
          path: [4, 0, 2, 2],
          span: [11, 2, 23],
          leadingDetachedComments: [],
          trailingComments: " stylesheet URL\n",
        },
        {
          path: [4, 0, 4, 0],
          span: [13, 2, 16, 3],
          leadingDetachedComments: [],
          trailingComments: " style-applying 'strategy'\n",
        },
        {
          path: [4, 0, 2, 3],
          span: [17, 2, 24],
          leadingDetachedComments: [],
          trailingComments: " inlining, copying CSS into <style>, etc...\n",
        },
        {
          path: [4, 0, 2, 4],
          span: [19, 2, 34],
          leadingDetachedComments: [],
          leadingComments: " rendering options JSON object\n",
        },
        {
          path: [4, 0, 2, 5],
          span: [21, 2, 26],
          leadingDetachedComments: [],
          leadingComments:
            " content type for rendering such as 'application/html' or 'application/text'\n",
        },
        {
          path: [4, 1, 2, 0],
          span: [25, 2, 16],
          leadingDetachedComments: [],
          trailingComments: " identifies the render request payload\n",
        },
        {
          path: [4, 1, 2, 1],
          span: [27, 2, 31],
          leadingDetachedComments: [],
          leadingComments:
            " List of templates with associated data and rendering options\n",
        },
        {
          path: [4, 2, 2, 1],
          span: [32, 2, 44],
          leadingDetachedComments: [],
          trailingComments: " error or HTML contents\n",
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
