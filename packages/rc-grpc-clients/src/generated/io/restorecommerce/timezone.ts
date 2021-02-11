/* eslint-disable */
import { IFileDescriptorProto } from "protobufjs/ext/descriptor";
import {
  Subject,
  protoMetadata as io_restorecommerce_auth_protoMetadata,
} from "../../io/restorecommerce/auth";
import {
  Meta,
  protoMetadata as io_restorecommerce_meta_protoMetadata,
} from "../../io/restorecommerce/meta";
import { Writer, Reader } from "protobufjs/minimal";
import {
  Empty,
  protoMetadata as google_protobuf_empty_protoMetadata,
} from "../../google/protobuf/empty";
import {
  ReadRequest,
  DeleteRequest,
  protoMetadata as io_restorecommerce_resource_base_protoMetadata,
} from "../../io/restorecommerce/resource_base";

export const protobufPackage = "io.restorecommerce.timezone";

export interface Deleted {
  id: string;
}

export interface TimezoneList {
  items: Timezone[];
  totalCount: number;
  subject?: Subject;
}

export interface Timezone {
  id: string;
  meta?: Meta;
  value: string;
  description: string;
}

const baseDeleted: object = { id: "" };

export const Deleted = {
  encode(message: Deleted, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Deleted {
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

const baseTimezoneList: object = { totalCount: 0 };

export const TimezoneList = {
  encode(message: TimezoneList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      Timezone.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(16).uint32(message.totalCount);
    if (message.subject !== undefined && message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TimezoneList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTimezoneList } as TimezoneList;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Timezone.decode(reader, reader.uint32()));
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

  fromJSON(object: any): TimezoneList {
    const message = { ...baseTimezoneList } as TimezoneList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Timezone.fromJSON(e));
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

  fromPartial(object: DeepPartial<TimezoneList>): TimezoneList {
    const message = { ...baseTimezoneList } as TimezoneList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Timezone.fromPartial(e));
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

  toJSON(message: TimezoneList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? Timezone.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseTimezone: object = { id: "", value: "", description: "" };

export const Timezone = {
  encode(message: Timezone, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    if (message.meta !== undefined && message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.value);
    writer.uint32(34).string(message.description);
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Timezone {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTimezone } as Timezone;
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
          message.value = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Timezone {
    const message = { ...baseTimezone } as Timezone;
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
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<Timezone>): Timezone {
    const message = { ...baseTimezone } as Timezone;
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
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    return message;
  },

  toJSON(message: Timezone): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.value !== undefined && (obj.value = message.value);
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },
};

/** Microservice definition. */
export interface Service {
  Read(request: ReadRequest): Promise<TimezoneList>;
  Create(request: TimezoneList): Promise<TimezoneList>;
  Delete(request: DeleteRequest): Promise<Empty>;
  Update(request: TimezoneList): Promise<TimezoneList>;
  Upsert(request: TimezoneList): Promise<TimezoneList>;
}

export interface ProtoMetadata {
  fileDescriptor: IFileDescriptorProto;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: {
    dependency: [
      "io/restorecommerce/resource_base.proto",
      "google/protobuf/empty.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
    ],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        name: "Deleted",
        field: [
          {
            name: "id",
            number: 1,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "id",
          },
        ],
      },
      {
        name: "TimezoneList",
        field: [
          {
            name: "items",
            number: 1,
            label: "LABEL_REPEATED",
            type: "TYPE_MESSAGE",
            typeName: ".io.restorecommerce.timezone.Timezone",
            jsonName: "items",
          },
          {
            name: "total_count",
            number: 2,
            label: "LABEL_OPTIONAL",
            type: "TYPE_UINT32",
            jsonName: "totalCount",
          },
          {
            name: "subject",
            number: 3,
            label: "LABEL_OPTIONAL",
            type: "TYPE_MESSAGE",
            typeName: ".io.restorecommerce.auth.Subject",
            jsonName: "subject",
          },
        ],
      },
      {
        name: "Timezone",
        field: [
          {
            name: "id",
            number: 1,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "id",
          },
          {
            name: "meta",
            number: 2,
            label: "LABEL_OPTIONAL",
            type: "TYPE_MESSAGE",
            typeName: ".io.restorecommerce.meta.Meta",
            jsonName: "meta",
          },
          {
            name: "value",
            number: 3,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "value",
          },
          {
            name: "description",
            number: 4,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "description",
          },
        ],
      },
    ],
    enumType: [],
    service: [
      {
        name: "Service",
        method: [
          {
            name: "Read",
            inputType: ".io.restorecommerce.resourcebase.ReadRequest",
            outputType: ".io.restorecommerce.timezone.TimezoneList",
          },
          {
            name: "Create",
            inputType: ".io.restorecommerce.timezone.TimezoneList",
            outputType: ".io.restorecommerce.timezone.TimezoneList",
          },
          {
            name: "Delete",
            inputType: ".io.restorecommerce.resourcebase.DeleteRequest",
            outputType: ".google.protobuf.Empty",
          },
          {
            name: "Update",
            inputType: ".io.restorecommerce.timezone.TimezoneList",
            outputType: ".io.restorecommerce.timezone.TimezoneList",
          },
          {
            name: "Upsert",
            inputType: ".io.restorecommerce.timezone.TimezoneList",
            outputType: ".io.restorecommerce.timezone.TimezoneList",
          },
        ],
      },
    ],
    extension: [],
    name: "io/restorecommerce/timezone.proto",
    package: "io.restorecommerce.timezone",
    sourceCodeInfo: {
      location: [
        {
          path: [6, 0],
          span: [12, 0, 18, 1],
          leadingComments: "\n Microservice definition.\n",
        },
      ],
    },
    syntax: "proto3",
  } as any,
  references: {
    ".io.restorecommerce.timezone.Deleted": Deleted,
    ".io.restorecommerce.timezone.TimezoneList": TimezoneList,
    ".io.restorecommerce.timezone.Timezone": Timezone,
  },
  dependencies: [
    io_restorecommerce_resource_base_protoMetadata,
    google_protobuf_empty_protoMetadata,
    io_restorecommerce_meta_protoMetadata,
    io_restorecommerce_auth_protoMetadata,
  ],
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
