/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { protoMetadata as protoMetadata1 } from "./options";

export const protobufPackage = "io.restorecommerce.geometry";

export interface Vector3D {
  x: number;
  y: number;
  z: number;
}

export interface BoundingBox3D {
  width: number;
  height: number;
  length: number;
}

export interface OriginBoundingBox {
  origin?: Vector3D;
  bbox?: BoundingBox3D;
}

function createBaseVector3D(): Vector3D {
  return { x: 0, y: 0, z: 0 };
}

export const Vector3D = {
  encode(message: Vector3D, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(9).double(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(17).double(message.y);
    }
    if (message.z !== 0) {
      writer.uint32(25).double(message.z);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vector3D {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVector3D();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.x = reader.double();
          break;
        case 2:
          message.y = reader.double();
          break;
        case 3:
          message.z = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Vector3D {
    return {
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      z: isSet(object.z) ? Number(object.z) : 0,
    };
  },

  toJSON(message: Vector3D): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    message.z !== undefined && (obj.z = message.z);
    return obj;
  },

  create(base?: DeepPartial<Vector3D>): Vector3D {
    return Vector3D.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Vector3D>): Vector3D {
    const message = createBaseVector3D();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.z = object.z ?? 0;
    return message;
  },
};

function createBaseBoundingBox3D(): BoundingBox3D {
  return { width: 0, height: 0, length: 0 };
}

export const BoundingBox3D = {
  encode(message: BoundingBox3D, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.width !== 0) {
      writer.uint32(9).double(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(17).double(message.height);
    }
    if (message.length !== 0) {
      writer.uint32(25).double(message.length);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BoundingBox3D {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBoundingBox3D();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.width = reader.double();
          break;
        case 2:
          message.height = reader.double();
          break;
        case 3:
          message.length = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BoundingBox3D {
    return {
      width: isSet(object.width) ? Number(object.width) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
      length: isSet(object.length) ? Number(object.length) : 0,
    };
  },

  toJSON(message: BoundingBox3D): unknown {
    const obj: any = {};
    message.width !== undefined && (obj.width = message.width);
    message.height !== undefined && (obj.height = message.height);
    message.length !== undefined && (obj.length = message.length);
    return obj;
  },

  create(base?: DeepPartial<BoundingBox3D>): BoundingBox3D {
    return BoundingBox3D.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<BoundingBox3D>): BoundingBox3D {
    const message = createBaseBoundingBox3D();
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    message.length = object.length ?? 0;
    return message;
  },
};

function createBaseOriginBoundingBox(): OriginBoundingBox {
  return { origin: undefined, bbox: undefined };
}

export const OriginBoundingBox = {
  encode(message: OriginBoundingBox, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.origin !== undefined) {
      Vector3D.encode(message.origin, writer.uint32(10).fork()).ldelim();
    }
    if (message.bbox !== undefined) {
      BoundingBox3D.encode(message.bbox, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OriginBoundingBox {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOriginBoundingBox();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.origin = Vector3D.decode(reader, reader.uint32());
          break;
        case 2:
          message.bbox = BoundingBox3D.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OriginBoundingBox {
    return {
      origin: isSet(object.origin) ? Vector3D.fromJSON(object.origin) : undefined,
      bbox: isSet(object.bbox) ? BoundingBox3D.fromJSON(object.bbox) : undefined,
    };
  },

  toJSON(message: OriginBoundingBox): unknown {
    const obj: any = {};
    message.origin !== undefined && (obj.origin = message.origin ? Vector3D.toJSON(message.origin) : undefined);
    message.bbox !== undefined && (obj.bbox = message.bbox ? BoundingBox3D.toJSON(message.bbox) : undefined);
    return obj;
  },

  create(base?: DeepPartial<OriginBoundingBox>): OriginBoundingBox {
    return OriginBoundingBox.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<OriginBoundingBox>): OriginBoundingBox {
    const message = createBaseOriginBoundingBox();
    message.origin = (object.origin !== undefined && object.origin !== null)
      ? Vector3D.fromPartial(object.origin)
      : undefined;
    message.bbox = (object.bbox !== undefined && object.bbox !== null)
      ? BoundingBox3D.fromPartial(object.bbox)
      : undefined;
    return message;
  },
};

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
    "name": "io/restorecommerce/geometry.proto",
    "package": "io.restorecommerce.geometry",
    "dependency": ["io/restorecommerce/options.proto"],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "Vector3D",
      "field": [{
        "name": "x",
        "number": 1,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "x",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "y",
        "number": 2,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "y",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "z",
        "number": 3,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "z",
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
      "name": "BoundingBox3D",
      "field": [{
        "name": "width",
        "number": 1,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "width",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "height",
        "number": 2,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "height",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "length",
        "number": 3,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "length",
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
      "name": "OriginBoundingBox",
      "field": [{
        "name": "origin",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.geometry.Vector3D",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "origin",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "bbox",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.geometry.BoundingBox3D",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "bbox",
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
    "service": [],
    "extension": [],
    "options": undefined,
    "sourceCodeInfo": { "location": [] },
    "syntax": "proto3",
  }),
  references: {
    ".io.restorecommerce.geometry.Vector3D": Vector3D,
    ".io.restorecommerce.geometry.BoundingBox3D": BoundingBox3D,
    ".io.restorecommerce.geometry.OriginBoundingBox": OriginBoundingBox,
  },
  dependencies: [protoMetadata1],
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
