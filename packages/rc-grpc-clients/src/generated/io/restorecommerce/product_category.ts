/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { protoMetadata as protoMetadata4, Subject } from "./auth";
import { Image, protoMetadata as protoMetadata3 } from "./image";
import { Meta, protoMetadata as protoMetadata2 } from "./meta";
import { protoMetadata as protoMetadata6, Resolver } from "./options";
import { protoMetadata as protoMetadata7 } from "./price_group";
import { DeleteRequest, DeleteResponse, protoMetadata as protoMetadata1, ReadRequest } from "./resource_base";
import { OperationStatus, protoMetadata as protoMetadata5, Status } from "./status";

export const protobufPackage = "io.restorecommerce.product_category";

/** ProductCategory resource */
export interface ProductCategory {
  id: string;
  meta?: Meta;
  name: string;
  description: string;
  priceGroupId: string;
  image?: Image;
  parent?: Parent;
}

export interface ProductCategoryList {
  items: ProductCategory[];
  totalCount: number;
  subject?: Subject;
}

export interface ProductCategoryListResponse {
  items: ProductCategoryResponse[];
  totalCount: number;
  operationStatus?: OperationStatus;
}

export interface ProductCategoryResponse {
  payload?: ProductCategory;
  status?: Status;
}

export interface Deleted {
  id: string;
}

export interface Parent {
  parentId: string;
}

function createBaseProductCategory(): ProductCategory {
  return { id: "", meta: undefined, name: "", description: "", priceGroupId: "", image: undefined, parent: undefined };
}

export const ProductCategory = {
  encode(message: ProductCategory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.priceGroupId !== "") {
      writer.uint32(42).string(message.priceGroupId);
    }
    if (message.image !== undefined) {
      Image.encode(message.image, writer.uint32(50).fork()).ldelim();
    }
    if (message.parent !== undefined) {
      Parent.encode(message.parent, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProductCategory {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProductCategory();
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
          message.priceGroupId = reader.string();
          break;
        case 6:
          message.image = Image.decode(reader, reader.uint32());
          break;
        case 7:
          message.parent = Parent.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProductCategory {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      priceGroupId: isSet(object.priceGroupId) ? String(object.priceGroupId) : "",
      image: isSet(object.image) ? Image.fromJSON(object.image) : undefined,
      parent: isSet(object.parent) ? Parent.fromJSON(object.parent) : undefined,
    };
  },

  toJSON(message: ProductCategory): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.priceGroupId !== undefined && (obj.priceGroupId = message.priceGroupId);
    message.image !== undefined && (obj.image = message.image ? Image.toJSON(message.image) : undefined);
    message.parent !== undefined && (obj.parent = message.parent ? Parent.toJSON(message.parent) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ProductCategory>): ProductCategory {
    return ProductCategory.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ProductCategory>): ProductCategory {
    const message = createBaseProductCategory();
    message.id = object.id ?? "";
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.priceGroupId = object.priceGroupId ?? "";
    message.image = (object.image !== undefined && object.image !== null) ? Image.fromPartial(object.image) : undefined;
    message.parent = (object.parent !== undefined && object.parent !== null)
      ? Parent.fromPartial(object.parent)
      : undefined;
    return message;
  },
};

function createBaseProductCategoryList(): ProductCategoryList {
  return { items: [], totalCount: 0, subject: undefined };
}

export const ProductCategoryList = {
  encode(message: ProductCategoryList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      ProductCategory.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProductCategoryList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProductCategoryList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(ProductCategory.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ProductCategoryList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => ProductCategory.fromJSON(e)) : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: ProductCategoryList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? ProductCategory.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = Math.round(message.totalCount));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ProductCategoryList>): ProductCategoryList {
    return ProductCategoryList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ProductCategoryList>): ProductCategoryList {
    const message = createBaseProductCategoryList();
    message.items = object.items?.map((e) => ProductCategory.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseProductCategoryListResponse(): ProductCategoryListResponse {
  return { items: [], totalCount: 0, operationStatus: undefined };
}

export const ProductCategoryListResponse = {
  encode(message: ProductCategoryListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      ProductCategoryResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.operationStatus !== undefined) {
      OperationStatus.encode(message.operationStatus, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProductCategoryListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProductCategoryListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(ProductCategoryResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalCount = reader.uint32();
          break;
        case 3:
          message.operationStatus = OperationStatus.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProductCategoryListResponse {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => ProductCategoryResponse.fromJSON(e)) : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
      operationStatus: isSet(object.operationStatus) ? OperationStatus.fromJSON(object.operationStatus) : undefined,
    };
  },

  toJSON(message: ProductCategoryListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? ProductCategoryResponse.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = Math.round(message.totalCount));
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus ? OperationStatus.toJSON(message.operationStatus) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ProductCategoryListResponse>): ProductCategoryListResponse {
    return ProductCategoryListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ProductCategoryListResponse>): ProductCategoryListResponse {
    const message = createBaseProductCategoryListResponse();
    message.items = object.items?.map((e) => ProductCategoryResponse.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    message.operationStatus = (object.operationStatus !== undefined && object.operationStatus !== null)
      ? OperationStatus.fromPartial(object.operationStatus)
      : undefined;
    return message;
  },
};

function createBaseProductCategoryResponse(): ProductCategoryResponse {
  return { payload: undefined, status: undefined };
}

export const ProductCategoryResponse = {
  encode(message: ProductCategoryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      ProductCategory.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProductCategoryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProductCategoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = ProductCategory.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = Status.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProductCategoryResponse {
    return {
      payload: isSet(object.payload) ? ProductCategory.fromJSON(object.payload) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: ProductCategoryResponse): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload ? ProductCategory.toJSON(message.payload) : undefined);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ProductCategoryResponse>): ProductCategoryResponse {
    return ProductCategoryResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ProductCategoryResponse>): ProductCategoryResponse {
    const message = createBaseProductCategoryResponse();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? ProductCategory.fromPartial(object.payload)
      : undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBaseDeleted(): Deleted {
  return { id: "" };
}

export const Deleted = {
  encode(message: Deleted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Deleted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleted();
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
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: Deleted): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create(base?: DeepPartial<Deleted>): Deleted {
    return Deleted.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Deleted>): Deleted {
    const message = createBaseDeleted();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseParent(): Parent {
  return { parentId: "" };
}

export const Parent = {
  encode(message: Parent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.parentId !== "") {
      writer.uint32(10).string(message.parentId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Parent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parentId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Parent {
    return { parentId: isSet(object.parentId) ? String(object.parentId) : "" };
  },

  toJSON(message: Parent): unknown {
    const obj: any = {};
    message.parentId !== undefined && (obj.parentId = message.parentId);
    return obj;
  },

  create(base?: DeepPartial<Parent>): Parent {
    return Parent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Parent>): Parent {
    const message = createBaseParent();
    message.parentId = object.parentId ?? "";
    return message;
  },
};

export type ServiceDefinition = typeof ServiceDefinition;
export const ServiceDefinition = {
  name: "Service",
  fullName: "io.restorecommerce.product_category.Service",
  methods: {
    read: {
      name: "Read",
      requestType: ReadRequest,
      requestStream: false,
      responseType: ProductCategoryListResponse,
      responseStream: false,
      options: {},
    },
    create: {
      name: "Create",
      requestType: ProductCategoryList,
      requestStream: false,
      responseType: ProductCategoryListResponse,
      responseStream: false,
      options: {},
    },
    delete: {
      name: "Delete",
      requestType: DeleteRequest,
      requestStream: false,
      responseType: DeleteResponse,
      responseStream: false,
      options: {},
    },
    update: {
      name: "Update",
      requestType: ProductCategoryList,
      requestStream: false,
      responseType: ProductCategoryListResponse,
      responseStream: false,
      options: {},
    },
    upsert: {
      name: "Upsert",
      requestType: ProductCategoryList,
      requestStream: false,
      responseType: ProductCategoryListResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface ServiceImplementation<CallContextExt = {}> {
  read(request: ReadRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ProductCategoryListResponse>>;
  create(
    request: ProductCategoryList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ProductCategoryListResponse>>;
  delete(request: DeleteRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteResponse>>;
  update(
    request: ProductCategoryList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ProductCategoryListResponse>>;
  upsert(
    request: ProductCategoryList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ProductCategoryListResponse>>;
}

export interface ServiceClient<CallOptionsExt = {}> {
  read(request: DeepPartial<ReadRequest>, options?: CallOptions & CallOptionsExt): Promise<ProductCategoryListResponse>;
  create(
    request: DeepPartial<ProductCategoryList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ProductCategoryListResponse>;
  delete(request: DeepPartial<DeleteRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteResponse>;
  update(
    request: DeepPartial<ProductCategoryList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ProductCategoryListResponse>;
  upsert(
    request: DeepPartial<ProductCategoryList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ProductCategoryListResponse>;
}

type ProtoMetaMessageOptions = {
  options?: { [key: string]: any };
  fields?: { [key: string]: { [key: string]: any } };
  oneof?: { [key: string]: { [key: string]: any } };
  nested?: { [key: string]: ProtoMetaMessageOptions };
};

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto1;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
  options?: {
    options?: { [key: string]: any };
    services?: {
      [key: string]: { options?: { [key: string]: any }; methods?: { [key: string]: { [key: string]: any } } };
    };
    messages?: { [key: string]: ProtoMetaMessageOptions };
    enums?: { [key: string]: { options?: { [key: string]: any }; values?: { [key: string]: { [key: string]: any } } } };
  };
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto1.fromPartial({
    "name": "io/restorecommerce/product_category.proto",
    "package": "io.restorecommerce.product_category",
    "dependency": [
      "io/restorecommerce/resource_base.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/image.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/options.proto",
      "io/restorecommerce/price_group.proto",
    ],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "ProductCategory",
      "field": [{
        "name": "id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "id",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "meta",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.meta.Meta",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "meta",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "name",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "description",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "description",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "price_group_id",
        "number": 5,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "priceGroupId",
        "options": {
          "ctype": 0,
          "packed": false,
          "jstype": 0,
          "lazy": false,
          "deprecated": false,
          "weak": false,
          "uninterpretedOption": [],
        },
        "proto3Optional": false,
      }, {
        "name": "image",
        "number": 6,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.image.Image",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "image",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "parent",
        "number": 7,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.product_category.Parent",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "parent",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ProductCategoryList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.product_category.ProductCategory",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "items",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "total_count",
        "number": 2,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "totalCount",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "subject",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.auth.Subject",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "subject",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ProductCategoryListResponse",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.product_category.ProductCategoryResponse",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "items",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "total_count",
        "number": 2,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "totalCount",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "operation_status",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.status.OperationStatus",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "operationStatus",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ProductCategoryResponse",
      "field": [{
        "name": "payload",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.product_category.ProductCategory",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "payload",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "status",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.status.Status",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "status",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "Deleted",
      "field": [{
        "name": "id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "id",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "Parent",
      "field": [{
        "name": "parent_id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "parentId",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "enumType": [],
    "service": [{
      "name": "Service",
      "method": [{
        "name": "Read",
        "inputType": ".io.restorecommerce.resourcebase.ReadRequest",
        "outputType": ".io.restorecommerce.product_category.ProductCategoryListResponse",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Create",
        "inputType": ".io.restorecommerce.product_category.ProductCategoryList",
        "outputType": ".io.restorecommerce.product_category.ProductCategoryListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Delete",
        "inputType": ".io.restorecommerce.resourcebase.DeleteRequest",
        "outputType": ".io.restorecommerce.resourcebase.DeleteResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Update",
        "inputType": ".io.restorecommerce.product_category.ProductCategoryList",
        "outputType": ".io.restorecommerce.product_category.ProductCategoryListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Upsert",
        "inputType": ".io.restorecommerce.product_category.ProductCategoryList",
        "outputType": ".io.restorecommerce.product_category.ProductCategoryListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }],
      "options": { "deprecated": false, "uninterpretedOption": [] },
    }],
    "extension": [],
    "options": undefined,
    "sourceCodeInfo": {
      "location": [{
        "path": [3, 6],
        "span": [12, 0, 46],
        "leadingComments": " Used by resolvers\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0],
        "span": [15, 0, 31, 1],
        "leadingComments": " ProductCategory resource\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {
    ".io.restorecommerce.product_category.ProductCategory": ProductCategory,
    ".io.restorecommerce.product_category.ProductCategoryList": ProductCategoryList,
    ".io.restorecommerce.product_category.ProductCategoryListResponse": ProductCategoryListResponse,
    ".io.restorecommerce.product_category.ProductCategoryResponse": ProductCategoryResponse,
    ".io.restorecommerce.product_category.Deleted": Deleted,
    ".io.restorecommerce.product_category.Parent": Parent,
  },
  dependencies: [
    protoMetadata1,
    protoMetadata2,
    protoMetadata3,
    protoMetadata4,
    protoMetadata5,
    protoMetadata6,
    protoMetadata7,
  ],
  options: {
    messages: {
      "ProductCategory": {
        fields: {
          "price_group_id": {
            "resolver": Resolver.decode(
              Buffer.from(
                "CiouaW8ucmVzdG9yZWNvbW1lcmNlLnByaWNlX2dyb3VwLlByaWNlR3JvdXASB2NhdGFsb2caC3ByaWNlX2dyb3VwIgRSZWFkKgpwcmljZUdyb3Vw",
                "base64",
              ),
            ),
          },
        },
      },
    },
    services: {
      "Service": { options: { "service_name": "product_category" }, methods: { "Read": { "is_query": true } } },
    },
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
