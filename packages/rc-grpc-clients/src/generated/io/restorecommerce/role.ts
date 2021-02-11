/* eslint-disable */
import { IFileDescriptorProto } from "protobufjs/ext/descriptor";
import {
  Meta,
  protoMetadata as io_restorecommerce_meta_protoMetadata,
} from "../../io/restorecommerce/meta";
import {
  Subject,
  protoMetadata as io_restorecommerce_auth_protoMetadata,
} from "../../io/restorecommerce/auth";
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

export const protobufPackage = "io.restorecommerce.role";

export interface Role {
  id: string;
  meta?: Meta;
  /** specifies the role of the user */
  name: string;
  description: string;
  /** role id who can assign this role */
  assignableByRoles: string[];
}

export interface RoleList {
  items: Role[];
  totalCount: number;
  subject?: Subject;
}

export interface Deleted {
  id: string;
}

const baseRole: object = {
  id: "",
  name: "",
  description: "",
  assignableByRoles: "",
};

export const Role = {
  encode(message: Role, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    if (message.meta !== undefined && message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.name);
    writer.uint32(34).string(message.description);
    for (const v of message.assignableByRoles) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Role {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRole } as Role;
    message.assignableByRoles = [];
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
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.assignableByRoles.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Role {
    const message = { ...baseRole } as Role;
    message.assignableByRoles = [];
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
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (
      object.assignableByRoles !== undefined &&
      object.assignableByRoles !== null
    ) {
      for (const e of object.assignableByRoles) {
        message.assignableByRoles.push(String(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Role>): Role {
    const message = { ...baseRole } as Role;
    message.assignableByRoles = [];
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
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (
      object.assignableByRoles !== undefined &&
      object.assignableByRoles !== null
    ) {
      for (const e of object.assignableByRoles) {
        message.assignableByRoles.push(e);
      }
    }
    return message;
  },

  toJSON(message: Role): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.assignableByRoles) {
      obj.assignableByRoles = message.assignableByRoles.map((e) => e);
    } else {
      obj.assignableByRoles = [];
    }
    return obj;
  },
};

const baseRoleList: object = { totalCount: 0 };

export const RoleList = {
  encode(message: RoleList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      Role.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(16).uint32(message.totalCount);
    if (message.subject !== undefined && message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): RoleList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRoleList } as RoleList;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Role.decode(reader, reader.uint32()));
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

  fromJSON(object: any): RoleList {
    const message = { ...baseRoleList } as RoleList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Role.fromJSON(e));
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

  fromPartial(object: DeepPartial<RoleList>): RoleList {
    const message = { ...baseRoleList } as RoleList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Role.fromPartial(e));
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

  toJSON(message: RoleList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => (e ? Role.toJSON(e) : undefined));
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

export interface Service {
  Read(request: ReadRequest): Promise<RoleList>;
  Create(request: RoleList): Promise<RoleList>;
  Delete(request: DeleteRequest): Promise<Empty>;
  Update(request: RoleList): Promise<RoleList>;
  Upsert(request: RoleList): Promise<RoleList>;
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
        name: "Role",
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
            name: "name",
            number: 3,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "name",
          },
          {
            name: "description",
            number: 4,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "description",
          },
          {
            name: "assignable_by_roles",
            number: 5,
            label: "LABEL_REPEATED",
            type: "TYPE_STRING",
            jsonName: "assignableByRoles",
          },
        ],
      },
      {
        name: "RoleList",
        field: [
          {
            name: "items",
            number: 1,
            label: "LABEL_REPEATED",
            type: "TYPE_MESSAGE",
            typeName: ".io.restorecommerce.role.Role",
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
    ],
    enumType: [],
    service: [
      {
        name: "Service",
        method: [
          {
            name: "Read",
            inputType: ".io.restorecommerce.resourcebase.ReadRequest",
            outputType: ".io.restorecommerce.role.RoleList",
          },
          {
            name: "Create",
            inputType: ".io.restorecommerce.role.RoleList",
            outputType: ".io.restorecommerce.role.RoleList",
          },
          {
            name: "Delete",
            inputType: ".io.restorecommerce.resourcebase.DeleteRequest",
            outputType: ".google.protobuf.Empty",
          },
          {
            name: "Update",
            inputType: ".io.restorecommerce.role.RoleList",
            outputType: ".io.restorecommerce.role.RoleList",
          },
          {
            name: "Upsert",
            inputType: ".io.restorecommerce.role.RoleList",
            outputType: ".io.restorecommerce.role.RoleList",
          },
        ],
      },
    ],
    extension: [],
    name: "io/restorecommerce/role.proto",
    package: "io.restorecommerce.role",
    sourceCodeInfo: {
      location: [
        {
          path: [4, 0, 2, 2],
          span: [20, 2, 18],
          trailingComments: " specifies the role of the user\n",
        },
        {
          path: [4, 0, 2, 4],
          span: [22, 2, 42],
          trailingComments: " role id who can assign this role\n",
        },
      ],
    },
    syntax: "proto3",
  } as any,
  references: {
    ".io.restorecommerce.role.Role": Role,
    ".io.restorecommerce.role.RoleList": RoleList,
    ".io.restorecommerce.role.Deleted": Deleted,
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
