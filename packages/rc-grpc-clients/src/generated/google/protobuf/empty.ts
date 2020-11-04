/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal';


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
export interface Empty {
}

const baseEmpty: object = {
};

export interface MetaI {
  readonly meta: 'object' | 'array' | 'map' | 'union' | 'builtin';
}

export interface MetaO extends MetaI {
  readonly meta: 'object';
  readonly type: string;
  readonly name: string;
}

export interface MetaA extends MetaI {
  readonly meta: 'array';
  readonly type: MetaI | string;
}

export interface MetaM extends MetaI {
  readonly meta: 'map';
  readonly key: string;
  readonly value: MetaI | string;
}

export interface MetaU extends MetaI {
  readonly meta: 'union';
  readonly choices: Array<MetaI | string | undefined>;
}

export interface MetaS<T, R> {
  readonly request: MetaO;
  readonly response: MetaO;
  readonly clientStreaming: boolean;
  readonly serverStreaming: boolean;
  readonly encodeRequest?: (message: T, writer: Writer) => Writer;
  readonly decodeResponse?: (input: Uint8Array | Reader, length?: number) => R;
}

export interface MetaB extends MetaI {
  readonly meta: 'builtin';
  readonly type: string;
  readonly original: string;
}

export const protobufPackage = 'google.protobuf'

export const Empty = {
  encode(_: Empty, writer: Writer = Writer.create()): Writer {
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Empty {
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

export const metaEmpty: { [key in keyof Required<Empty>]: MetaI | string } = {
}
export const metaPackageGoogleProtobuf: { [key: string]: ['service', string, any, { [key: string]: MetaS<any, any> }] | ['enum', string, any, any] | ['message', string, any, { [key: string]: MetaI | string }] } = {
  Empty: ['message', '.google.protobuf.Empty', Empty, metaEmpty],
}
type Builtin = Date | Function | Uint8Array | string | number | undefined;
type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;