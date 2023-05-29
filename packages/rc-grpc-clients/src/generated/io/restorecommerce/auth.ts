/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto } from "ts-proto-descriptors";
import { Attribute, protoMetadata as protoMetadata1 } from "./attribute";

export const protobufPackage = "io.restorecommerce.auth";

/** Subject of creating User */
export interface Subject {
  /** user id */
  id?:
    | string
    | undefined;
  /** target scope (ID of the target scoping entity) */
  scope?:
    | string
    | undefined;
  /** for unauthenticated context */
  unauthenticated?: boolean | undefined;
  token?: string | undefined;
}

export interface Tokens {
  /** token name */
  name?:
    | string
    | undefined;
  /** expiration date for token */
  expiresIn?:
    | number
    | undefined;
  /** token */
  token?:
    | string
    | undefined;
  /** identifier for role_association */
  scopes: string[];
  /** type of token eg: access_token, refresh_token */
  type?: string | undefined;
  interactive?: boolean | undefined;
  lastLogin?: number | undefined;
}

export interface HierarchicalScope {
  /** root node */
  id?:
    | string
    | undefined;
  /** children nodes */
  children: HierarchicalScope[];
  /** role identifier associated with root node scope */
  role?: string | undefined;
}

export interface RoleAssociation {
  /** role ID */
  role?:
    | string
    | undefined;
  /** useful attributes for RBAC/ABAC like organizational scope */
  attributes: Attribute[];
  /** identifier for role_association */
  id?:
    | string
    | undefined;
  /** timestamp when the role was created */
  created?: number | undefined;
}

export interface HierarchicalScopesRequest {
  token: string;
}

export interface HierarchicalScopesResponse {
  subjectId: string;
  hierarchicalScopes: HierarchicalScope[];
  token: string;
}

function createBaseSubject(): Subject {
  return { id: undefined, scope: undefined, unauthenticated: undefined, token: undefined };
}

export const Subject = {
  encode(message: Subject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.scope !== undefined) {
      writer.uint32(18).string(message.scope);
    }
    if (message.unauthenticated !== undefined) {
      writer.uint32(24).bool(message.unauthenticated);
    }
    if (message.token !== undefined) {
      writer.uint32(34).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Subject {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubject();
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
          if (tag !== 18) {
            break;
          }

          message.scope = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.unauthenticated = reader.bool();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.token = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Subject {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      scope: isSet(object.scope) ? String(object.scope) : undefined,
      unauthenticated: isSet(object.unauthenticated) ? Boolean(object.unauthenticated) : undefined,
      token: isSet(object.token) ? String(object.token) : undefined,
    };
  },

  toJSON(message: Subject): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.scope !== undefined && (obj.scope = message.scope);
    message.unauthenticated !== undefined && (obj.unauthenticated = message.unauthenticated);
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  create(base?: DeepPartial<Subject>): Subject {
    return Subject.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Subject>): Subject {
    const message = createBaseSubject();
    message.id = object.id ?? undefined;
    message.scope = object.scope ?? undefined;
    message.unauthenticated = object.unauthenticated ?? undefined;
    message.token = object.token ?? undefined;
    return message;
  },
};

function createBaseTokens(): Tokens {
  return {
    name: undefined,
    expiresIn: undefined,
    token: undefined,
    scopes: [],
    type: undefined,
    interactive: undefined,
    lastLogin: undefined,
  };
}

export const Tokens = {
  encode(message: Tokens, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.expiresIn !== undefined) {
      writer.uint32(17).double(message.expiresIn);
    }
    if (message.token !== undefined) {
      writer.uint32(26).string(message.token);
    }
    for (const v of message.scopes) {
      writer.uint32(34).string(v!);
    }
    if (message.type !== undefined) {
      writer.uint32(42).string(message.type);
    }
    if (message.interactive !== undefined) {
      writer.uint32(48).bool(message.interactive);
    }
    if (message.lastLogin !== undefined) {
      writer.uint32(57).double(message.lastLogin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Tokens {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.expiresIn = reader.double();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.token = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.scopes.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.type = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.interactive = reader.bool();
          continue;
        case 7:
          if (tag !== 57) {
            break;
          }

          message.lastLogin = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Tokens {
    return {
      name: isSet(object.name) ? String(object.name) : undefined,
      expiresIn: isSet(object.expiresIn) ? Number(object.expiresIn) : undefined,
      token: isSet(object.token) ? String(object.token) : undefined,
      scopes: Array.isArray(object?.scopes) ? object.scopes.map((e: any) => String(e)) : [],
      type: isSet(object.type) ? String(object.type) : undefined,
      interactive: isSet(object.interactive) ? Boolean(object.interactive) : undefined,
      lastLogin: isSet(object.lastLogin) ? Number(object.lastLogin) : undefined,
    };
  },

  toJSON(message: Tokens): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.expiresIn !== undefined && (obj.expiresIn = message.expiresIn);
    message.token !== undefined && (obj.token = message.token);
    if (message.scopes) {
      obj.scopes = message.scopes.map((e) => e);
    } else {
      obj.scopes = [];
    }
    message.type !== undefined && (obj.type = message.type);
    message.interactive !== undefined && (obj.interactive = message.interactive);
    message.lastLogin !== undefined && (obj.lastLogin = message.lastLogin);
    return obj;
  },

  create(base?: DeepPartial<Tokens>): Tokens {
    return Tokens.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Tokens>): Tokens {
    const message = createBaseTokens();
    message.name = object.name ?? undefined;
    message.expiresIn = object.expiresIn ?? undefined;
    message.token = object.token ?? undefined;
    message.scopes = object.scopes?.map((e) => e) || [];
    message.type = object.type ?? undefined;
    message.interactive = object.interactive ?? undefined;
    message.lastLogin = object.lastLogin ?? undefined;
    return message;
  },
};

function createBaseHierarchicalScope(): HierarchicalScope {
  return { id: undefined, children: [], role: undefined };
}

export const HierarchicalScope = {
  encode(message: HierarchicalScope, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.children) {
      HierarchicalScope.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.role !== undefined) {
      writer.uint32(26).string(message.role);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HierarchicalScope {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHierarchicalScope();
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
          if (tag !== 18) {
            break;
          }

          message.children.push(HierarchicalScope.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.role = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HierarchicalScope {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      children: Array.isArray(object?.children) ? object.children.map((e: any) => HierarchicalScope.fromJSON(e)) : [],
      role: isSet(object.role) ? String(object.role) : undefined,
    };
  },

  toJSON(message: HierarchicalScope): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.children) {
      obj.children = message.children.map((e) => e ? HierarchicalScope.toJSON(e) : undefined);
    } else {
      obj.children = [];
    }
    message.role !== undefined && (obj.role = message.role);
    return obj;
  },

  create(base?: DeepPartial<HierarchicalScope>): HierarchicalScope {
    return HierarchicalScope.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<HierarchicalScope>): HierarchicalScope {
    const message = createBaseHierarchicalScope();
    message.id = object.id ?? undefined;
    message.children = object.children?.map((e) => HierarchicalScope.fromPartial(e)) || [];
    message.role = object.role ?? undefined;
    return message;
  },
};

function createBaseRoleAssociation(): RoleAssociation {
  return { role: undefined, attributes: [], id: undefined, created: undefined };
}

export const RoleAssociation = {
  encode(message: RoleAssociation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.role !== undefined) {
      writer.uint32(10).string(message.role);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.id !== undefined) {
      writer.uint32(26).string(message.id);
    }
    if (message.created !== undefined) {
      writer.uint32(33).double(message.created);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoleAssociation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoleAssociation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.role = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.id = reader.string();
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.created = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RoleAssociation {
    return {
      role: isSet(object.role) ? String(object.role) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : [],
      id: isSet(object.id) ? String(object.id) : undefined,
      created: isSet(object.created) ? Number(object.created) : undefined,
    };
  },

  toJSON(message: RoleAssociation): unknown {
    const obj: any = {};
    message.role !== undefined && (obj.role = message.role);
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    message.id !== undefined && (obj.id = message.id);
    message.created !== undefined && (obj.created = message.created);
    return obj;
  },

  create(base?: DeepPartial<RoleAssociation>): RoleAssociation {
    return RoleAssociation.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RoleAssociation>): RoleAssociation {
    const message = createBaseRoleAssociation();
    message.role = object.role ?? undefined;
    message.attributes = object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    message.id = object.id ?? undefined;
    message.created = object.created ?? undefined;
    return message;
  },
};

function createBaseHierarchicalScopesRequest(): HierarchicalScopesRequest {
  return { token: "" };
}

export const HierarchicalScopesRequest = {
  encode(message: HierarchicalScopesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HierarchicalScopesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHierarchicalScopesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HierarchicalScopesRequest {
    return { token: isSet(object.token) ? String(object.token) : "" };
  },

  toJSON(message: HierarchicalScopesRequest): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  create(base?: DeepPartial<HierarchicalScopesRequest>): HierarchicalScopesRequest {
    return HierarchicalScopesRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<HierarchicalScopesRequest>): HierarchicalScopesRequest {
    const message = createBaseHierarchicalScopesRequest();
    message.token = object.token ?? "";
    return message;
  },
};

function createBaseHierarchicalScopesResponse(): HierarchicalScopesResponse {
  return { subjectId: "", hierarchicalScopes: [], token: "" };
}

export const HierarchicalScopesResponse = {
  encode(message: HierarchicalScopesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subjectId !== "") {
      writer.uint32(10).string(message.subjectId);
    }
    for (const v of message.hierarchicalScopes) {
      HierarchicalScope.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HierarchicalScopesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHierarchicalScopesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subjectId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.hierarchicalScopes.push(HierarchicalScope.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.token = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HierarchicalScopesResponse {
    return {
      subjectId: isSet(object.subjectId) ? String(object.subjectId) : "",
      hierarchicalScopes: Array.isArray(object?.hierarchicalScopes)
        ? object.hierarchicalScopes.map((e: any) => HierarchicalScope.fromJSON(e))
        : [],
      token: isSet(object.token) ? String(object.token) : "",
    };
  },

  toJSON(message: HierarchicalScopesResponse): unknown {
    const obj: any = {};
    message.subjectId !== undefined && (obj.subjectId = message.subjectId);
    if (message.hierarchicalScopes) {
      obj.hierarchicalScopes = message.hierarchicalScopes.map((e) => e ? HierarchicalScope.toJSON(e) : undefined);
    } else {
      obj.hierarchicalScopes = [];
    }
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  create(base?: DeepPartial<HierarchicalScopesResponse>): HierarchicalScopesResponse {
    return HierarchicalScopesResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<HierarchicalScopesResponse>): HierarchicalScopesResponse {
    const message = createBaseHierarchicalScopesResponse();
    message.subjectId = object.subjectId ?? "";
    message.hierarchicalScopes = object.hierarchicalScopes?.map((e) => HierarchicalScope.fromPartial(e)) || [];
    message.token = object.token ?? "";
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
    "name": "io/restorecommerce/auth.proto",
    "package": "io.restorecommerce.auth",
    "dependency": ["io/restorecommerce/attribute.proto"],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "Subject",
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
        "name": "scope",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "scope",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "unauthenticated",
        "number": 3,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "unauthenticated",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "token",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "token",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_id", "options": undefined }, { "name": "_scope", "options": undefined }, {
        "name": "_unauthenticated",
        "options": undefined,
      }, { "name": "_token", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "Tokens",
      "field": [{
        "name": "name",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "expires_in",
        "number": 2,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "expiresIn",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "token",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "token",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "scopes",
        "number": 4,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "scopes",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "type",
        "number": 5,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "type",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "interactive",
        "number": 6,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "interactive",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "last_login",
        "number": 7,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 5,
        "jsonName": "lastLogin",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "_name", "options": undefined },
        { "name": "_expires_in", "options": undefined },
        { "name": "_token", "options": undefined },
        { "name": "_type", "options": undefined },
        { "name": "_interactive", "options": undefined },
        { "name": "_last_login", "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "HierarchicalScope",
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
        "name": "children",
        "number": 2,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.auth.HierarchicalScope",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "children",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "role",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "role",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_id", "options": undefined }, { "name": "_role", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "RoleAssociation",
      "field": [{
        "name": "role",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "role",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "attributes",
        "number": 2,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.attribute.Attribute",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "attributes",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "id",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "id",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "created",
        "number": 4,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "created",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_role", "options": undefined }, { "name": "_id", "options": undefined }, {
        "name": "_created",
        "options": undefined,
      }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "HierarchicalScopesRequest",
      "field": [{
        "name": "token",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "token",
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
      "name": "HierarchicalScopesResponse",
      "field": [{
        "name": "subject_id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "subjectId",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "hierarchical_scopes",
        "number": 2,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.auth.HierarchicalScope",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "hierarchicalScopes",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "token",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "token",
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
    "sourceCodeInfo": {
      "location": [{
        "path": [4, 0],
        "span": [8, 0, 13, 1],
        "leadingComments": "*\n Subject of creating User\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0, 2, 0],
        "span": [9, 2, 25],
        "leadingComments": "",
        "trailingComments": " user id\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0, 2, 1],
        "span": [10, 2, 28],
        "leadingComments": "",
        "trailingComments": " target scope (ID of the target scoping entity)\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0, 2, 2],
        "span": [11, 2, 36],
        "leadingComments": "",
        "trailingComments": " for unauthenticated context\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 0],
        "span": [16, 2, 27],
        "leadingComments": "",
        "trailingComments": " token name\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 1],
        "span": [17, 2, 33],
        "leadingComments": "",
        "trailingComments": " expiration date for token\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 2],
        "span": [18, 2, 28],
        "leadingComments": "",
        "trailingComments": " token\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 3],
        "span": [19, 2, 29],
        "leadingComments": "",
        "trailingComments": " identifier for role_association\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 4],
        "span": [20, 2, 27],
        "leadingComments": "",
        "trailingComments": " type of token eg: access_token, refresh_token\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 2, 2, 0],
        "span": [26, 2, 25],
        "leadingComments": "",
        "trailingComments": " root node\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 2, 2, 1],
        "span": [27, 2, 42],
        "leadingComments": "",
        "trailingComments": " children nodes\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 2, 2, 2],
        "span": [28, 2, 27],
        "leadingComments": "",
        "trailingComments": " role identifier associated with root node scope\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 3, 2, 0],
        "span": [32, 2, 27],
        "leadingComments": "",
        "trailingComments": " role ID\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 3, 2, 1],
        "span": [33, 2, 65],
        "leadingComments": "",
        "trailingComments": " useful attributes for RBAC/ABAC like organizational scope\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 3, 2, 2],
        "span": [34, 2, 25],
        "leadingComments": "",
        "trailingComments": " identifier for role_association\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 3, 2, 3],
        "span": [35, 2, 30],
        "leadingComments": "",
        "trailingComments": " timestamp when the role was created\n",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {
    ".io.restorecommerce.auth.Subject": Subject,
    ".io.restorecommerce.auth.Tokens": Tokens,
    ".io.restorecommerce.auth.HierarchicalScope": HierarchicalScope,
    ".io.restorecommerce.auth.RoleAssociation": RoleAssociation,
    ".io.restorecommerce.auth.HierarchicalScopesRequest": HierarchicalScopesRequest,
    ".io.restorecommerce.auth.HierarchicalScopesResponse": HierarchicalScopesResponse,
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
