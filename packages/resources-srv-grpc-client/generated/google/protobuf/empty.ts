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
};
