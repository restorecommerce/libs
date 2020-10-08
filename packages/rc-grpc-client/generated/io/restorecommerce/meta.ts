/* eslint-disable */
import { Attribute } from '../../io/restorecommerce/attribute';
import { Writer, Reader } from 'protobufjs/minimal';


export interface Meta {
  /**
   *  timestamp
   */
  created: number;
  /**
   *  timestamp
   */
  modified: number;
  /**
   *  ID from last User who modified it
   */
  modifiedBy: string;
  owner: Attribute[];
}

const baseMeta: object = {
  created: 0,
  modified: 0,
  modifiedBy: "",
};

export const Meta = {
  encode(message: Meta, writer: Writer = Writer.create()): Writer {
    writer.uint32(9).double(message.created);
    writer.uint32(17).double(message.modified);
    writer.uint32(26).string(message.modifiedBy);
    for (const v of message.owner) {
      Attribute.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Meta {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMeta } as Meta;
    message.owner = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.created = reader.double();
          break;
        case 2:
          message.modified = reader.double();
          break;
        case 3:
          message.modifiedBy = reader.string();
          break;
        case 4:
          message.owner.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};
