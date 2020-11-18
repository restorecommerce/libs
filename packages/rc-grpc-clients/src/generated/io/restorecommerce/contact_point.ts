/* eslint-disable */
import { Subject } from '../../io/restorecommerce/auth';
import { Meta } from '../../io/restorecommerce/meta';
import { ReadRequest, DeleteRequest } from '../../io/restorecommerce/resource_base';
import { Empty } from '../../google/protobuf/empty';
import { Writer, Reader } from 'protobufjs/minimal';


export interface Deleted {
  id: string;
}

export interface ContactPointList {
  items: ContactPoint[];
  totalCount: number;
  subject?: Subject;
}

export interface ContactPoint {
  id: string;
  meta?: Meta;
  physicalAddressId: string;
  website: string;
  email: string;
  contactPointTypeId: string;
  telephone: string;
  timezoneId: string;
  localeId: string;
}

const baseDeleted: object = {
  id: "",
};

const baseContactPointList: object = {
  totalCount: 0,
};

const baseContactPoint: object = {
  id: "",
  physicalAddressId: "",
  website: "",
  email: "",
  contactPointTypeId: "",
  telephone: "",
  timezoneId: "",
  localeId: "",
};

export interface Service {

  Read(request: ReadRequest): Promise<ContactPointList>;

  Create(request: ContactPointList): Promise<ContactPointList>;

  Delete(request: DeleteRequest): Promise<Empty>;

  Update(request: ContactPointList): Promise<ContactPointList>;

  Upsert(request: ContactPointList): Promise<ContactPointList>;

}

export const protobufPackage = 'io.restorecommerce.contact_point'

export const Deleted = {
  encode(message: Deleted, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Deleted {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleted } as Deleted;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Deleted {
    const message = { ...baseDeleted } as Deleted;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Deleted>): Deleted {
    const message = { ...baseDeleted } as Deleted;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
  toJSON(message: Deleted): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
};

export const ContactPointList = {
  encode(message: ContactPointList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      ContactPoint.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(16).uint32(message.totalCount);
    if (message.subject !== undefined && message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ContactPointList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseContactPointList } as ContactPointList;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(ContactPoint.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalCount = reader.uint32();
          break;
        case 3:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ContactPointList {
    const message = { ...baseContactPointList } as ContactPointList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(ContactPoint.fromJSON(e));
      }
    }
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = Number(object.totalCount);
    } else {
      message.totalCount = 0;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<ContactPointList>): ContactPointList {
    const message = { ...baseContactPointList } as ContactPointList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(ContactPoint.fromPartial(e));
      }
    }
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = object.totalCount;
    } else {
      message.totalCount = 0;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },
  toJSON(message: ContactPointList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map(e => e ? ContactPoint.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },
};

export const ContactPoint = {
  encode(message: ContactPoint, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    if (message.meta !== undefined && message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.physicalAddressId);
    writer.uint32(34).string(message.website);
    writer.uint32(42).string(message.email);
    writer.uint32(50).string(message.contactPointTypeId);
    writer.uint32(66).string(message.telephone);
    writer.uint32(74).string(message.timezoneId);
    writer.uint32(82).string(message.localeId);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ContactPoint {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseContactPoint } as ContactPoint;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.meta = Meta.decode(reader, reader.uint32());
          break;
        case 3:
          message.physicalAddressId = reader.string();
          break;
        case 4:
          message.website = reader.string();
          break;
        case 5:
          message.email = reader.string();
          break;
        case 6:
          message.contactPointTypeId = reader.string();
          break;
        case 8:
          message.telephone = reader.string();
          break;
        case 9:
          message.timezoneId = reader.string();
          break;
        case 10:
          message.localeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ContactPoint {
    const message = { ...baseContactPoint } as ContactPoint;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromJSON(object.meta);
    } else {
      message.meta = undefined;
    }
    if (object.physicalAddressId !== undefined && object.physicalAddressId !== null) {
      message.physicalAddressId = String(object.physicalAddressId);
    } else {
      message.physicalAddressId = "";
    }
    if (object.website !== undefined && object.website !== null) {
      message.website = String(object.website);
    } else {
      message.website = "";
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = String(object.email);
    } else {
      message.email = "";
    }
    if (object.contactPointTypeId !== undefined && object.contactPointTypeId !== null) {
      message.contactPointTypeId = String(object.contactPointTypeId);
    } else {
      message.contactPointTypeId = "";
    }
    if (object.telephone !== undefined && object.telephone !== null) {
      message.telephone = String(object.telephone);
    } else {
      message.telephone = "";
    }
    if (object.timezoneId !== undefined && object.timezoneId !== null) {
      message.timezoneId = String(object.timezoneId);
    } else {
      message.timezoneId = "";
    }
    if (object.localeId !== undefined && object.localeId !== null) {
      message.localeId = String(object.localeId);
    } else {
      message.localeId = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<ContactPoint>): ContactPoint {
    const message = { ...baseContactPoint } as ContactPoint;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromPartial(object.meta);
    } else {
      message.meta = undefined;
    }
    if (object.physicalAddressId !== undefined && object.physicalAddressId !== null) {
      message.physicalAddressId = object.physicalAddressId;
    } else {
      message.physicalAddressId = "";
    }
    if (object.website !== undefined && object.website !== null) {
      message.website = object.website;
    } else {
      message.website = "";
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = "";
    }
    if (object.contactPointTypeId !== undefined && object.contactPointTypeId !== null) {
      message.contactPointTypeId = object.contactPointTypeId;
    } else {
      message.contactPointTypeId = "";
    }
    if (object.telephone !== undefined && object.telephone !== null) {
      message.telephone = object.telephone;
    } else {
      message.telephone = "";
    }
    if (object.timezoneId !== undefined && object.timezoneId !== null) {
      message.timezoneId = object.timezoneId;
    } else {
      message.timezoneId = "";
    }
    if (object.localeId !== undefined && object.localeId !== null) {
      message.localeId = object.localeId;
    } else {
      message.localeId = "";
    }
    return message;
  },
  toJSON(message: ContactPoint): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.physicalAddressId !== undefined && (obj.physicalAddressId = message.physicalAddressId);
    message.website !== undefined && (obj.website = message.website);
    message.email !== undefined && (obj.email = message.email);
    message.contactPointTypeId !== undefined && (obj.contactPointTypeId = message.contactPointTypeId);
    message.telephone !== undefined && (obj.telephone = message.telephone);
    message.timezoneId !== undefined && (obj.timezoneId = message.timezoneId);
    message.localeId !== undefined && (obj.localeId = message.localeId);
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