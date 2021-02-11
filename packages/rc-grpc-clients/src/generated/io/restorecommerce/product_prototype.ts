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

export const protobufPackage = "io.restorecommerce.product_prototype";

/** ProductPrototype resource */
export interface ProductPrototype {
  id: string;
  meta?: Meta;
  name: string;
  version: string;
  description: string;
  categoryId: string;
}

export interface ProductPrototypeList {
  items: ProductPrototype[];
  totalCount: number;
  subject?: Subject;
}

export interface Deleted {
  id: string;
}

const baseProductPrototype: object = {
  id: "",
  name: "",
  version: "",
  description: "",
  categoryId: "",
};

export const ProductPrototype = {
  encode(message: ProductPrototype, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    if (message.meta !== undefined && message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.name);
    writer.uint32(34).string(message.version);
    writer.uint32(42).string(message.description);
    writer.uint32(50).string(message.categoryId);
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ProductPrototype {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProductPrototype } as ProductPrototype;
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
          message.version = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          message.categoryId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProductPrototype {
    const message = { ...baseProductPrototype } as ProductPrototype;
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
    if (object.version !== undefined && object.version !== null) {
      message.version = String(object.version);
    } else {
      message.version = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.categoryId !== undefined && object.categoryId !== null) {
      message.categoryId = String(object.categoryId);
    } else {
      message.categoryId = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<ProductPrototype>): ProductPrototype {
    const message = { ...baseProductPrototype } as ProductPrototype;
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
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    } else {
      message.version = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.categoryId !== undefined && object.categoryId !== null) {
      message.categoryId = object.categoryId;
    } else {
      message.categoryId = "";
    }
    return message;
  },

  toJSON(message: ProductPrototype): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.version !== undefined && (obj.version = message.version);
    message.description !== undefined &&
      (obj.description = message.description);
    message.categoryId !== undefined && (obj.categoryId = message.categoryId);
    return obj;
  },
};

const baseProductPrototypeList: object = { totalCount: 0 };

export const ProductPrototypeList = {
  encode(
    message: ProductPrototypeList,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.items) {
      ProductPrototype.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(16).uint32(message.totalCount);
    if (message.subject !== undefined && message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ProductPrototypeList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProductPrototypeList } as ProductPrototypeList;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(ProductPrototype.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ProductPrototypeList {
    const message = { ...baseProductPrototypeList } as ProductPrototypeList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(ProductPrototype.fromJSON(e));
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

  fromPartial(object: DeepPartial<ProductPrototypeList>): ProductPrototypeList {
    const message = { ...baseProductPrototypeList } as ProductPrototypeList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(ProductPrototype.fromPartial(e));
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

  toJSON(message: ProductPrototypeList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? ProductPrototype.toJSON(e) : undefined
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
  Read(request: ReadRequest): Promise<ProductPrototypeList>;
  Create(request: ProductPrototypeList): Promise<ProductPrototypeList>;
  Delete(request: DeleteRequest): Promise<Empty>;
  Update(request: ProductPrototypeList): Promise<ProductPrototypeList>;
  Upsert(request: ProductPrototypeList): Promise<ProductPrototypeList>;
}

export interface ProtoMetadata {
  fileDescriptor: IFileDescriptorProto;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: {
    dependency: [
      "google/protobuf/empty.proto",
      "io/restorecommerce/resource_base.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
    ],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        name: "ProductPrototype",
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
            name: "version",
            number: 4,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "version",
          },
          {
            name: "description",
            number: 5,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "description",
          },
          {
            name: "category_id",
            number: 6,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "categoryId",
          },
        ],
      },
      {
        name: "ProductPrototypeList",
        field: [
          {
            name: "items",
            number: 1,
            label: "LABEL_REPEATED",
            type: "TYPE_MESSAGE",
            typeName: ".io.restorecommerce.product_prototype.ProductPrototype",
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
            outputType:
              ".io.restorecommerce.product_prototype.ProductPrototypeList",
          },
          {
            name: "Create",
            inputType:
              ".io.restorecommerce.product_prototype.ProductPrototypeList",
            outputType:
              ".io.restorecommerce.product_prototype.ProductPrototypeList",
          },
          {
            name: "Delete",
            inputType: ".io.restorecommerce.resourcebase.DeleteRequest",
            outputType: ".google.protobuf.Empty",
          },
          {
            name: "Update",
            inputType:
              ".io.restorecommerce.product_prototype.ProductPrototypeList",
            outputType:
              ".io.restorecommerce.product_prototype.ProductPrototypeList",
          },
          {
            name: "Upsert",
            inputType:
              ".io.restorecommerce.product_prototype.ProductPrototypeList",
            outputType:
              ".io.restorecommerce.product_prototype.ProductPrototypeList",
          },
        ],
      },
    ],
    extension: [],
    name: "io/restorecommerce/product_prototype.proto",
    package: "io.restorecommerce.product_prototype",
    sourceCodeInfo: {
      location: [
        {
          path: [4, 0],
          span: [10, 0, 17, 1],
          leadingComments: " ProductPrototype resource\n",
        },
      ],
    },
    syntax: "proto3",
  } as any,
  references: {
    ".io.restorecommerce.product_prototype.ProductPrototype": ProductPrototype,
    ".io.restorecommerce.product_prototype.ProductPrototypeList": ProductPrototypeList,
    ".io.restorecommerce.product_prototype.Deleted": Deleted,
  },
  dependencies: [
    google_protobuf_empty_protoMetadata,
    io_restorecommerce_resource_base_protoMetadata,
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
