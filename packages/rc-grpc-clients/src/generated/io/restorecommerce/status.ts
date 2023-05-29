/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto } from "ts-proto-descriptors";

export const protobufPackage = "io.restorecommerce.status";

export interface Status {
  id?: string | undefined;
  code?: number | undefined;
  message?: string | undefined;
}

export interface StatusArray {
  status: Status[];
}

export interface StatusObj {
  status?: Status | undefined;
}

export interface OperationStatusObj {
  operationStatus?: OperationStatus | undefined;
}

export interface OperationStatus {
  code?: number | undefined;
  message?: string | undefined;
}

export interface StatusListResponse {
  status: Status[];
  operationStatus?: OperationStatus | undefined;
}

function createBaseStatus(): Status {
  return { id: undefined, code: undefined, message: undefined };
}

export const Status = {
  encode(message: Status, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.code !== undefined) {
      writer.uint32(16).uint32(message.code);
    }
    if (message.message !== undefined) {
      writer.uint32(26).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Status {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.code = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Status {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      code: isSet(object.code) ? Number(object.code) : undefined,
      message: isSet(object.message) ? String(object.message) : undefined,
    };
  },

  toJSON(message: Status): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  create(base?: DeepPartial<Status>): Status {
    return Status.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Status>): Status {
    const message = createBaseStatus();
    message.id = object.id ?? undefined;
    message.code = object.code ?? undefined;
    message.message = object.message ?? undefined;
    return message;
  },
};

function createBaseStatusArray(): StatusArray {
  return { status: [] };
}

export const StatusArray = {
  encode(message: StatusArray, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.status) {
      Status.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StatusArray {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusArray();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.status.push(Status.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StatusArray {
    return { status: Array.isArray(object?.status) ? object.status.map((e: any) => Status.fromJSON(e)) : [] };
  },

  toJSON(message: StatusArray): unknown {
    const obj: any = {};
    if (message.status) {
      obj.status = message.status.map((e) => e ? Status.toJSON(e) : undefined);
    } else {
      obj.status = [];
    }
    return obj;
  },

  create(base?: DeepPartial<StatusArray>): StatusArray {
    return StatusArray.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<StatusArray>): StatusArray {
    const message = createBaseStatusArray();
    message.status = object.status?.map((e) => Status.fromPartial(e)) || [];
    return message;
  },
};

function createBaseStatusObj(): StatusObj {
  return { status: undefined };
}

export const StatusObj = {
  encode(message: StatusObj, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StatusObj {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusObj();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.status = Status.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StatusObj {
    return { status: isSet(object.status) ? Status.fromJSON(object.status) : undefined };
  },

  toJSON(message: StatusObj): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<StatusObj>): StatusObj {
    return StatusObj.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<StatusObj>): StatusObj {
    const message = createBaseStatusObj();
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBaseOperationStatusObj(): OperationStatusObj {
  return { operationStatus: undefined };
}

export const OperationStatusObj = {
  encode(message: OperationStatusObj, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operationStatus !== undefined) {
      OperationStatus.encode(message.operationStatus, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperationStatusObj {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperationStatusObj();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.operationStatus = OperationStatus.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperationStatusObj {
    return {
      operationStatus: isSet(object.operationStatus) ? OperationStatus.fromJSON(object.operationStatus) : undefined,
    };
  },

  toJSON(message: OperationStatusObj): unknown {
    const obj: any = {};
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus ? OperationStatus.toJSON(message.operationStatus) : undefined);
    return obj;
  },

  create(base?: DeepPartial<OperationStatusObj>): OperationStatusObj {
    return OperationStatusObj.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<OperationStatusObj>): OperationStatusObj {
    const message = createBaseOperationStatusObj();
    message.operationStatus = (object.operationStatus !== undefined && object.operationStatus !== null)
      ? OperationStatus.fromPartial(object.operationStatus)
      : undefined;
    return message;
  },
};

function createBaseOperationStatus(): OperationStatus {
  return { code: undefined, message: undefined };
}

export const OperationStatus = {
  encode(message: OperationStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== undefined) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.message !== undefined) {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperationStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperationStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.code = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperationStatus {
    return {
      code: isSet(object.code) ? Number(object.code) : undefined,
      message: isSet(object.message) ? String(object.message) : undefined,
    };
  },

  toJSON(message: OperationStatus): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  create(base?: DeepPartial<OperationStatus>): OperationStatus {
    return OperationStatus.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<OperationStatus>): OperationStatus {
    const message = createBaseOperationStatus();
    message.code = object.code ?? undefined;
    message.message = object.message ?? undefined;
    return message;
  },
};

function createBaseStatusListResponse(): StatusListResponse {
  return { status: [], operationStatus: undefined };
}

export const StatusListResponse = {
  encode(message: StatusListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.status) {
      Status.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.operationStatus !== undefined) {
      OperationStatus.encode(message.operationStatus, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StatusListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.status.push(Status.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.operationStatus = OperationStatus.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StatusListResponse {
    return {
      status: Array.isArray(object?.status) ? object.status.map((e: any) => Status.fromJSON(e)) : [],
      operationStatus: isSet(object.operationStatus) ? OperationStatus.fromJSON(object.operationStatus) : undefined,
    };
  },

  toJSON(message: StatusListResponse): unknown {
    const obj: any = {};
    if (message.status) {
      obj.status = message.status.map((e) => e ? Status.toJSON(e) : undefined);
    } else {
      obj.status = [];
    }
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus ? OperationStatus.toJSON(message.operationStatus) : undefined);
    return obj;
  },

  create(base?: DeepPartial<StatusListResponse>): StatusListResponse {
    return StatusListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<StatusListResponse>): StatusListResponse {
    const message = createBaseStatusListResponse();
    message.status = object.status?.map((e) => Status.fromPartial(e)) || [];
    message.operationStatus = (object.operationStatus !== undefined && object.operationStatus !== null)
      ? OperationStatus.fromPartial(object.operationStatus)
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
  fileDescriptor: FileDescriptorProto;
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
  fileDescriptor: FileDescriptorProto.fromPartial({
    "name": "io/restorecommerce/status.proto",
    "package": "io.restorecommerce.status",
    "dependency": [],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "Status",
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
        "proto3Optional": true,
      }, {
        "name": "code",
        "number": 2,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "code",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "message",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "message",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_id", "options": undefined }, { "name": "_code", "options": undefined }, {
        "name": "_message",
        "options": undefined,
      }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "StatusArray",
      "field": [{
        "name": "status",
        "number": 1,
        "label": 3,
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
      "name": "StatusObj",
      "field": [{
        "name": "status",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.status.Status",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "status",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_status", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "OperationStatusObj",
      "field": [{
        "name": "operation_status",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.status.OperationStatus",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "operationStatus",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_operation_status", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "OperationStatus",
      "field": [{
        "name": "code",
        "number": 1,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "code",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "message",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "message",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_code", "options": undefined }, { "name": "_message", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "StatusListResponse",
      "field": [{
        "name": "status",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.status.Status",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "status",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "operation_status",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.status.OperationStatus",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "operationStatus",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_operation_status", "options": undefined }],
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
    ".io.restorecommerce.status.Status": Status,
    ".io.restorecommerce.status.StatusArray": StatusArray,
    ".io.restorecommerce.status.StatusObj": StatusObj,
    ".io.restorecommerce.status.OperationStatusObj": OperationStatusObj,
    ".io.restorecommerce.status.OperationStatus": OperationStatus,
    ".io.restorecommerce.status.StatusListResponse": StatusListResponse,
  },
  dependencies: [],
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
