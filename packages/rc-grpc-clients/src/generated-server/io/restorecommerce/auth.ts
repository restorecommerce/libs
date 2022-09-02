/* eslint-disable */
import { FileDescriptorProto } from "ts-proto-descriptors";
import { protoMetadata as protoMetadata1, Attribute } from "./attribute";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "io.restorecommerce.auth";

/** Subject of creating User */
export interface Subject {
  /** user id */
  id: string;
  /** target scope */
  scope: string;
  /** role_associations of user creating the user */
  role_associations: RoleAssociation[];
  /** HR scope of user creating the User */
  hierarchical_scopes: HierarchicalScope[];
  /** for unauthenticated context */
  unauthenticated: boolean;
  token: string;
}

export interface Tokens {
  /** token name */
  name: string;
  /** expiration date for token */
  expires_in: number;
  /** token */
  token: string;
  /** identifier for role_association */
  scopes: string[];
  /** type of token eg: access_token, refresh_token */
  type: string;
  interactive: boolean;
  last_login: number;
}

export interface HierarchicalScope {
  /** root node */
  id: string;
  /** children nodes */
  children: HierarchicalScope[];
  /** role identifier associated with root node scope */
  role: string;
}

export interface RoleAssociation {
  /** role ID */
  role: string;
  /** useful attributes for RBAC/ABAC like organizational scope */
  attributes: Attribute[];
  /** identifier for role_association */
  id: string;
  /** timestamp when the role was created */
  created: number;
}

export interface HierarchicalScopesRequest {
  token: string;
}

export interface HierarchicalScopesResponse {
  subject_id: string;
  hierarchical_scopes: HierarchicalScope[];
  token: string;
}

function createBaseSubject(): Subject {
  return {
    id: "",
    scope: "",
    role_associations: [],
    hierarchical_scopes: [],
    unauthenticated: false,
    token: "",
  };
}

export const Subject = {
  encode(
    message: Subject,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.scope !== "") {
      writer.uint32(18).string(message.scope);
    }
    for (const v of message.role_associations) {
      RoleAssociation.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.hierarchical_scopes) {
      HierarchicalScope.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.unauthenticated === true) {
      writer.uint32(40).bool(message.unauthenticated);
    }
    if (message.token !== "") {
      writer.uint32(50).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Subject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.scope = reader.string();
          break;
        case 3:
          message.role_associations.push(
            RoleAssociation.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.hierarchical_scopes.push(
            HierarchicalScope.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.unauthenticated = reader.bool();
          break;
        case 6:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Subject {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      scope: isSet(object.scope) ? String(object.scope) : "",
      role_associations: Array.isArray(object?.role_associations)
        ? object.role_associations.map((e: any) => RoleAssociation.fromJSON(e))
        : [],
      hierarchical_scopes: Array.isArray(object?.hierarchical_scopes)
        ? object.hierarchical_scopes.map((e: any) =>
            HierarchicalScope.fromJSON(e)
          )
        : [],
      unauthenticated: isSet(object.unauthenticated)
        ? Boolean(object.unauthenticated)
        : false,
      token: isSet(object.token) ? String(object.token) : "",
    };
  },

  toJSON(message: Subject): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.scope !== undefined && (obj.scope = message.scope);
    if (message.role_associations) {
      obj.role_associations = message.role_associations.map((e) =>
        e ? RoleAssociation.toJSON(e) : undefined
      );
    } else {
      obj.role_associations = [];
    }
    if (message.hierarchical_scopes) {
      obj.hierarchical_scopes = message.hierarchical_scopes.map((e) =>
        e ? HierarchicalScope.toJSON(e) : undefined
      );
    } else {
      obj.hierarchical_scopes = [];
    }
    message.unauthenticated !== undefined &&
      (obj.unauthenticated = message.unauthenticated);
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  fromPartial(object: DeepPartial<Subject>): Subject {
    const message = createBaseSubject();
    message.id = object.id ?? "";
    message.scope = object.scope ?? "";
    message.role_associations =
      object.role_associations?.map((e) => RoleAssociation.fromPartial(e)) ||
      [];
    message.hierarchical_scopes =
      object.hierarchical_scopes?.map((e) =>
        HierarchicalScope.fromPartial(e)
      ) || [];
    message.unauthenticated = object.unauthenticated ?? false;
    message.token = object.token ?? "";
    return message;
  },
};

function createBaseTokens(): Tokens {
  return {
    name: "",
    expires_in: 0,
    token: "",
    scopes: [],
    type: "",
    interactive: false,
    last_login: 0,
  };
}

export const Tokens = {
  encode(
    message: Tokens,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.expires_in !== 0) {
      writer.uint32(17).double(message.expires_in);
    }
    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }
    for (const v of message.scopes) {
      writer.uint32(34).string(v!);
    }
    if (message.type !== "") {
      writer.uint32(42).string(message.type);
    }
    if (message.interactive === true) {
      writer.uint32(48).bool(message.interactive);
    }
    if (message.last_login !== 0) {
      writer.uint32(57).double(message.last_login);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Tokens {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.expires_in = reader.double();
          break;
        case 3:
          message.token = reader.string();
          break;
        case 4:
          message.scopes.push(reader.string());
          break;
        case 5:
          message.type = reader.string();
          break;
        case 6:
          message.interactive = reader.bool();
          break;
        case 7:
          message.last_login = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Tokens {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      expires_in: isSet(object.expires_in) ? Number(object.expires_in) : 0,
      token: isSet(object.token) ? String(object.token) : "",
      scopes: Array.isArray(object?.scopes)
        ? object.scopes.map((e: any) => String(e))
        : [],
      type: isSet(object.type) ? String(object.type) : "",
      interactive: isSet(object.interactive)
        ? Boolean(object.interactive)
        : false,
      last_login: isSet(object.last_login) ? Number(object.last_login) : 0,
    };
  },

  toJSON(message: Tokens): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.expires_in !== undefined && (obj.expires_in = message.expires_in);
    message.token !== undefined && (obj.token = message.token);
    if (message.scopes) {
      obj.scopes = message.scopes.map((e) => e);
    } else {
      obj.scopes = [];
    }
    message.type !== undefined && (obj.type = message.type);
    message.interactive !== undefined &&
      (obj.interactive = message.interactive);
    message.last_login !== undefined && (obj.last_login = message.last_login);
    return obj;
  },

  fromPartial(object: DeepPartial<Tokens>): Tokens {
    const message = createBaseTokens();
    message.name = object.name ?? "";
    message.expires_in = object.expires_in ?? 0;
    message.token = object.token ?? "";
    message.scopes = object.scopes?.map((e) => e) || [];
    message.type = object.type ?? "";
    message.interactive = object.interactive ?? false;
    message.last_login = object.last_login ?? 0;
    return message;
  },
};

function createBaseHierarchicalScope(): HierarchicalScope {
  return { id: "", children: [], role: "" };
}

export const HierarchicalScope = {
  encode(
    message: HierarchicalScope,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.children) {
      HierarchicalScope.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.role !== "") {
      writer.uint32(26).string(message.role);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HierarchicalScope {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHierarchicalScope();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.children.push(
            HierarchicalScope.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.role = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HierarchicalScope {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      children: Array.isArray(object?.children)
        ? object.children.map((e: any) => HierarchicalScope.fromJSON(e))
        : [],
      role: isSet(object.role) ? String(object.role) : "",
    };
  },

  toJSON(message: HierarchicalScope): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.children) {
      obj.children = message.children.map((e) =>
        e ? HierarchicalScope.toJSON(e) : undefined
      );
    } else {
      obj.children = [];
    }
    message.role !== undefined && (obj.role = message.role);
    return obj;
  },

  fromPartial(object: DeepPartial<HierarchicalScope>): HierarchicalScope {
    const message = createBaseHierarchicalScope();
    message.id = object.id ?? "";
    message.children =
      object.children?.map((e) => HierarchicalScope.fromPartial(e)) || [];
    message.role = object.role ?? "";
    return message;
  },
};

function createBaseRoleAssociation(): RoleAssociation {
  return { role: "", attributes: [], id: "", created: 0 };
}

export const RoleAssociation = {
  encode(
    message: RoleAssociation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.role !== "") {
      writer.uint32(10).string(message.role);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    if (message.created !== 0) {
      writer.uint32(33).double(message.created);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoleAssociation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoleAssociation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.role = reader.string();
          break;
        case 2:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        case 3:
          message.id = reader.string();
          break;
        case 4:
          message.created = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RoleAssociation {
    return {
      role: isSet(object.role) ? String(object.role) : "",
      attributes: Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => Attribute.fromJSON(e))
        : [],
      id: isSet(object.id) ? String(object.id) : "",
      created: isSet(object.created) ? Number(object.created) : 0,
    };
  },

  toJSON(message: RoleAssociation): unknown {
    const obj: any = {};
    message.role !== undefined && (obj.role = message.role);
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) =>
        e ? Attribute.toJSON(e) : undefined
      );
    } else {
      obj.attributes = [];
    }
    message.id !== undefined && (obj.id = message.id);
    message.created !== undefined && (obj.created = message.created);
    return obj;
  },

  fromPartial(object: DeepPartial<RoleAssociation>): RoleAssociation {
    const message = createBaseRoleAssociation();
    message.role = object.role ?? "";
    message.attributes =
      object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    message.id = object.id ?? "";
    message.created = object.created ?? 0;
    return message;
  },
};

function createBaseHierarchicalScopesRequest(): HierarchicalScopesRequest {
  return { token: "" };
}

export const HierarchicalScopesRequest = {
  encode(
    message: HierarchicalScopesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): HierarchicalScopesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHierarchicalScopesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HierarchicalScopesRequest {
    return {
      token: isSet(object.token) ? String(object.token) : "",
    };
  },

  toJSON(message: HierarchicalScopesRequest): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  fromPartial(
    object: DeepPartial<HierarchicalScopesRequest>
  ): HierarchicalScopesRequest {
    const message = createBaseHierarchicalScopesRequest();
    message.token = object.token ?? "";
    return message;
  },
};

function createBaseHierarchicalScopesResponse(): HierarchicalScopesResponse {
  return { subject_id: "", hierarchical_scopes: [], token: "" };
}

export const HierarchicalScopesResponse = {
  encode(
    message: HierarchicalScopesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subject_id !== "") {
      writer.uint32(10).string(message.subject_id);
    }
    for (const v of message.hierarchical_scopes) {
      HierarchicalScope.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): HierarchicalScopesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHierarchicalScopesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subject_id = reader.string();
          break;
        case 2:
          message.hierarchical_scopes.push(
            HierarchicalScope.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HierarchicalScopesResponse {
    return {
      subject_id: isSet(object.subject_id) ? String(object.subject_id) : "",
      hierarchical_scopes: Array.isArray(object?.hierarchical_scopes)
        ? object.hierarchical_scopes.map((e: any) =>
            HierarchicalScope.fromJSON(e)
          )
        : [],
      token: isSet(object.token) ? String(object.token) : "",
    };
  },

  toJSON(message: HierarchicalScopesResponse): unknown {
    const obj: any = {};
    message.subject_id !== undefined && (obj.subject_id = message.subject_id);
    if (message.hierarchical_scopes) {
      obj.hierarchical_scopes = message.hierarchical_scopes.map((e) =>
        e ? HierarchicalScope.toJSON(e) : undefined
      );
    } else {
      obj.hierarchical_scopes = [];
    }
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  fromPartial(
    object: DeepPartial<HierarchicalScopesResponse>
  ): HierarchicalScopesResponse {
    const message = createBaseHierarchicalScopesResponse();
    message.subject_id = object.subject_id ?? "";
    message.hierarchical_scopes =
      object.hierarchical_scopes?.map((e) =>
        HierarchicalScope.fromPartial(e)
      ) || [];
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
      [key: string]: {
        options?: { [key: string]: any };
        methods?: { [key: string]: { [key: string]: any } };
      };
    };
    messages?: {
      [key: string]: ProtoMetaMessageOptions;
    };
    enums?: {
      [key: string]: {
        options?: { [key: string]: any };
        values?: { [key: string]: { [key: string]: any } };
      };
    };
  };
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto.fromPartial({
    name: "io/restorecommerce/auth.proto",
    package: "io.restorecommerce.auth",
    dependency: ["io/restorecommerce/attribute.proto"],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        name: "Subject",
        field: [
          {
            name: "id",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "id",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "scope",
            number: 2,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "scope",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "role_associations",
            number: 3,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.auth.RoleAssociation",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "roleAssociations",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "hierarchical_scopes",
            number: 4,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.auth.HierarchicalScope",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "hierarchicalScopes",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "unauthenticated",
            number: 5,
            label: 1,
            type: 8,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "unauthenticated",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "token",
            number: 6,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "token",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "Tokens",
        field: [
          {
            name: "name",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "name",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "expires_in",
            number: 2,
            label: 1,
            type: 1,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "expiresIn",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "token",
            number: 3,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "token",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "scopes",
            number: 4,
            label: 3,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "scopes",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "type",
            number: 5,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "type",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "interactive",
            number: 6,
            label: 1,
            type: 8,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "interactive",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "last_login",
            number: 7,
            label: 1,
            type: 1,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "lastLogin",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "HierarchicalScope",
        field: [
          {
            name: "id",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "id",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "children",
            number: 2,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.auth.HierarchicalScope",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "children",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "role",
            number: 3,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "role",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "RoleAssociation",
        field: [
          {
            name: "role",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "role",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "attributes",
            number: 2,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.attribute.Attribute",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "attributes",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "id",
            number: 3,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "id",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "created",
            number: 4,
            label: 1,
            type: 1,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "created",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "HierarchicalScopesRequest",
        field: [
          {
            name: "token",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "token",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "HierarchicalScopesResponse",
        field: [
          {
            name: "subject_id",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "subjectId",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "hierarchical_scopes",
            number: 2,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.auth.HierarchicalScope",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "hierarchicalScopes",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "token",
            number: 3,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "token",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
    ],
    enumType: [],
    service: [],
    extension: [],
    options: undefined,
    sourceCodeInfo: {
      location: [
        {
          path: [4, 0],
          span: [8, 0, 15, 1],
          leadingComments: "*\n Subject of creating User\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [4, 0, 2, 0],
          span: [9, 2, 16],
          leadingComments: "",
          trailingComments: " user id\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 0, 2, 1],
          span: [10, 2, 19],
          leadingComments: "",
          trailingComments: " target scope\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 0, 2, 2],
          span: [11, 2, 49],
          leadingComments: "",
          trailingComments: "  role_associations of user creating the user\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 0, 2, 3],
          span: [12, 2, 53],
          leadingComments: "",
          trailingComments: " HR scope of user creating the User\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 0, 2, 4],
          span: [13, 2, 27],
          leadingComments: "",
          trailingComments: " for unauthenticated context\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 1, 2, 0],
          span: [18, 2, 18],
          leadingComments: "",
          trailingComments: " token name\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 1, 2, 1],
          span: [19, 2, 24],
          leadingComments: "",
          trailingComments: " expiration date for token\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 1, 2, 2],
          span: [20, 2, 19],
          leadingComments: "",
          trailingComments: " token\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 1, 2, 3],
          span: [21, 2, 29],
          leadingComments: "",
          trailingComments: " identifier for role_association\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 1, 2, 4],
          span: [22, 2, 18],
          leadingComments: "",
          trailingComments: " type of token eg: access_token, refresh_token\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 2, 2, 0],
          span: [28, 2, 16],
          leadingComments: "",
          trailingComments: " root node\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 2, 2, 1],
          span: [29, 2, 42],
          leadingComments: "",
          trailingComments: " children nodes\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 2, 2, 2],
          span: [30, 2, 18],
          leadingComments: "",
          trailingComments:
            " role identifier associated with root node scope\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 3, 2, 0],
          span: [34, 2, 18],
          leadingComments: "",
          trailingComments: " role ID\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 3, 2, 1],
          span: [35, 2, 65],
          leadingComments: "",
          trailingComments:
            " useful attributes for RBAC/ABAC like organizational scope\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 3, 2, 2],
          span: [36, 2, 16],
          leadingComments: "",
          trailingComments: " identifier for role_association\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 3, 2, 3],
          span: [37, 2, 21],
          leadingComments: "",
          trailingComments: " timestamp when the role was created\n",
          leadingDetachedComments: [],
        },
      ],
    },
    syntax: "proto3",
  }),
  references: {
    ".io.restorecommerce.auth.Subject": Subject,
    ".io.restorecommerce.auth.Tokens": Tokens,
    ".io.restorecommerce.auth.HierarchicalScope": HierarchicalScope,
    ".io.restorecommerce.auth.RoleAssociation": RoleAssociation,
    ".io.restorecommerce.auth.HierarchicalScopesRequest":
      HierarchicalScopesRequest,
    ".io.restorecommerce.auth.HierarchicalScopesResponse":
      HierarchicalScopesResponse,
  },
  dependencies: [protoMetadata1],
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}