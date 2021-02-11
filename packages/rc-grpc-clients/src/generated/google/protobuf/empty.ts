/* eslint-disable */
import { IFileDescriptorProto } from "protobufjs/ext/descriptor";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "google.protobuf";

/**
 * / A generic empty message that you can re-use to avoid defining duplicated
 * / empty messages in your APIs. A typical example is to use it as the request
 * / or the response type of an API method. For instance:
 * /
 * /     service Foo {
 * /       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
 * /     }
 * /
 * / The JSON representation for `Empty` is empty JSON object `{}`.
 */
export interface Empty {}

const baseEmpty: object = {};

export const Empty = {
  encode(_: Empty, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Empty {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEmpty } as Empty;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): Empty {
    const message = { ...baseEmpty } as Empty;
    return message;
  },

  fromPartial(_: DeepPartial<Empty>): Empty {
    const message = { ...baseEmpty } as Empty;
    return message;
  },

  toJSON(_: Empty): unknown {
    const obj: any = {};
    return obj;
  },
};

export interface ProtoMetadata {
  fileDescriptor: IFileDescriptorProto;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: {
    dependency: [],
    publicDependency: [],
    weakDependency: [],
    messageType: [{ name: "Empty" }],
    enumType: [],
    service: [],
    extension: [],
    name: "google/protobuf/empty.proto",
    package: "google.protobuf",
    options: {
      javaPackage: "com.google.protobuf",
      javaOuterClassname: "EmptyProto",
      javaMultipleFiles: true,
      goPackage: "github.com/golang/protobuf/ptypes/empty",
      javaGenerateEqualsAndHash: true,
      ccEnableArenas: true,
      objcClassPrefix: "GPB",
      csharpNamespace: "Google.Protobuf.WellKnownTypes",
    },
    sourceCodeInfo: {
      location: [
        {
          path: [4, 0],
          span: [52, 0, 16],
          leadingComments:
            "/ A generic empty message that you can re-use to avoid defining duplicated\n/ empty messages in your APIs. A typical example is to use it as the request\n/ or the response type of an API method. For instance:\n/\n/     service Foo {\n/       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);\n/     }\n/\n/ The JSON representation for `Empty` is empty JSON object `{}`.\n",
        },
      ],
    },
    syntax: "proto3",
  } as any,
  references: { ".google.protobuf.Empty": Empty },
  dependencies: [],
};

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
