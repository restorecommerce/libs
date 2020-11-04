/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal';


/**
 * * `Any` contains an arbitrary serialized protocol buffer message along with a
 *  URL that describes the type of the serialized message.
 *
 *  Protobuf library provides support to pack/unpack Any values in the form
 *  of utility functions or additional generated methods of the Any type.
 *
 *  Example 1: Pack and unpack a message in C++.
 *
 *      Foo foo = ...;
 *      Any any;
 *      any.PackFrom(foo);
 *      ...
 *      if (any.UnpackTo(&foo)) {
 *        ...
 *      }
 *
 *  Example 2: Pack and unpack a message in Java.
 *
 *      Foo foo = ...;
 *      Any any = Any.pack(foo);
 *      ...
 *      if (any.is(Foo.class)) {
 *        foo = any.unpack(Foo.class);
 *      }
 *
 *  The pack methods provided by protobuf library will by default use
 *  'type.googleapis.com/full.type.name' as the type URL and the unpack
 *  methods only use the fully qualified type name after the last '/'
 *  in the type URL, for example "foo.bar.com/x/y.z" will yield type
 *  name "y.z".
 *
 *
 *  JSON
 *  ====
 *  The JSON representation of an `Any` value uses the regular
 *  representation of the deserialized, embedded message, with an
 *  additional field `@type` which contains the type URL. Example:
 *
 *      package google.profile;
 *      message Person {
 *        string first_name = 1;
 *        string last_name = 2;
 *      }
 *
 *      {
 *        "@type": "type.googleapis.com/google.profile.Person",
 *        "firstName": <string>,
 *        "lastName": <string>
 *      }
 *
 *  If the embedded message type is well-known and has a custom JSON
 *  representation, that representation will be embedded adding a field
 *  `value` which holds the custom JSON in addition to the `@type`
 *  field. Example (for message [google.protobuf.Duration][]):
 *
 *      {
 *        "@type": "type.googleapis.com/google.protobuf.Duration",
 *        "value": "1.212s"
 *      }
 */
export interface Any {
  /**
   * *
   *  A URL/resource name whose content describes the type of the
   *  serialized protocol buffer message.
   *
   *  For URLs which use the schema `http`, `https`, or no schema, the
   *  following restrictions and interpretations apply:
   *
   *  * If no schema is provided, `https` is assumed.
   *  * The last segment of the URL's path must represent the fully
   *    qualified name of the type (as in `path/google.protobuf.Duration`).
   *    The name should be in a canonical form (e.g., leading "." is
   *    not accepted).
   *  * An HTTP GET on the URL must yield a [google.protobuf.Type][]
   *    value in binary format, or produce an error.
   *  * Applications are allowed to cache lookup results based on the
   *    URL, or have them precompiled into a binary to avoid any
   *    lookup. Therefore, binary compatibility needs to be preserved
   *    on changes to types. (Use versioned type names to manage
   *    breaking changes.)
   *
   *  Schemas other than `http`, `https` (or the empty schema) might be
   *  used with implementation specific semantics.
   */
  typeUrl: string;
  /**
   * *
   *  Must be a valid serialized protocol buffer of the above specified type.
   */
  value: Buffer;
}

const baseAny: object = {
  typeUrl: "",
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

export const Any = {
  encode(message: Any, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.typeUrl);
    writer.uint32(18).bytes(message.value);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Any {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAny } as Any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.typeUrl = reader.string();
          break;
        case 2:
          message.value = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Any {
    const message = { ...baseAny } as Any;
    if (object.typeUrl !== undefined && object.typeUrl !== null) {
      message.typeUrl = String(object.typeUrl);
    } else {
      message.typeUrl = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Buffer.from(bytesFromBase64(object.value));
    }
    return message;
  },
  fromPartial(object: DeepPartial<Any>): Any {
    const message = { ...baseAny } as Any;
    if (object.typeUrl !== undefined && object.typeUrl !== null) {
      message.typeUrl = object.typeUrl;
    } else {
      message.typeUrl = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = new Buffer(0);
    }
    return message;
  },
  toJSON(message: Any): unknown {
    const obj: any = {};
    message.typeUrl !== undefined && (obj.typeUrl = message.typeUrl);
    message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Buffer(0)));
    return obj;
  },
};

export const metaAny: { [key in keyof Required<Any>]: MetaI | string } = {
  typeUrl: {meta:'builtin', type:'string', original:'string'} as MetaB,
  value: {meta:'builtin', type:'Buffer', original:'bytes'} as MetaB,
}
export const metaPackageGoogleProtobuf: { [key: string]: ['service', string, any, { [key: string]: MetaS<any, any> }] | ['enum', string, any, any] | ['message', string, any, { [key: string]: MetaI | string }] } = {
  Any: ['message', '.google.protobuf.Any', Any, metaAny],
}
interface WindowBase64 {
  atob(b64: string): string;
  btoa(bin: string): string;
}

const windowBase64 = (globalThis as unknown as WindowBase64);
const atob = windowBase64.atob || ((b64: string) => Buffer.from(b64, 'base64').toString('binary'));
const btoa = windowBase64.btoa || ((bin: string) => Buffer.from(bin, 'binary').toString('base64'));

function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (let i = 0; i < arr.byteLength; ++i) {
    bin.push(String.fromCharCode(arr[i]));
  }
  return btoa(bin.join(''));
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