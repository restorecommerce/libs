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

export const protobufPackage = 'io.restorecommerce.meta'

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
  fromJSON(object: any): Meta {
    const message = { ...baseMeta } as Meta;
    message.owner = [];
    if (object.created !== undefined && object.created !== null) {
      message.created = Number(object.created);
    } else {
      message.created = 0;
    }
    if (object.modified !== undefined && object.modified !== null) {
      message.modified = Number(object.modified);
    } else {
      message.modified = 0;
    }
    if (object.modifiedBy !== undefined && object.modifiedBy !== null) {
      message.modifiedBy = String(object.modifiedBy);
    } else {
      message.modifiedBy = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      for (const e of object.owner) {
        message.owner.push(Attribute.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Meta>): Meta {
    const message = { ...baseMeta } as Meta;
    message.owner = [];
    if (object.created !== undefined && object.created !== null) {
      message.created = object.created;
    } else {
      message.created = 0;
    }
    if (object.modified !== undefined && object.modified !== null) {
      message.modified = object.modified;
    } else {
      message.modified = 0;
    }
    if (object.modifiedBy !== undefined && object.modifiedBy !== null) {
      message.modifiedBy = object.modifiedBy;
    } else {
      message.modifiedBy = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      for (const e of object.owner) {
        message.owner.push(Attribute.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: Meta): unknown {
    const obj: any = {};
    message.created !== undefined && (obj.created = message.created);
    message.modified !== undefined && (obj.modified = message.modified);
    message.modifiedBy !== undefined && (obj.modifiedBy = message.modifiedBy);
    if (message.owner) {
      obj.owner = message.owner.map(e => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.owner = [];
    }
    return obj;
  },
};

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