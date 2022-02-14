/* eslint-disable */
import { FileDescriptorProto } from "ts-proto-descriptors/google/protobuf/descriptor";
import {
  protoMetadata as protoMetadata1,
  Attribute,
} from "../../io/restorecommerce/attribute";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "io.restorecommerce.auth";

/** Subject of creating User */
export interface Subject {
  /** user id */
  id: string;
  /** target scope */
  scope: string;
  /** role_associations of user creating the user */
  roleAssociations: RoleAssociation[];
  /** HR scope of user creating the User */
  hierarchicalScopes: HierarchicalScope[];
  /** for unauthenticated context */
  unauthenticated: boolean;
  token: string;
}

export interface Tokens {
  /** token name */
  name: string;
  /** expiration date for token */
  expiresIn: number;
  /** token */
  token: string;
  /** identifier for role_association */
  scopes: string[];
  /** type of token eg: access_token, refresh_token */
  type: string;
  interactive: boolean;
  lastLogin: number;
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
  subjectId: string;
  hierarchicalScopes: HierarchicalScope[];
  token: string;
}

const baseSubject: object = {
  id: "",
  scope: "",
  unauthenticated: false,
  token: "",
};

export const Subject = {
  encode(message: Subject, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.scope !== "") {
      writer.uint32(18).string(message.scope);
    }
    for (const v of message.roleAssociations) {
      RoleAssociation.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.hierarchicalScopes) {
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

  decode(input: Reader | Uint8Array, length?: number): Subject {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseSubject) as Subject;
    message.roleAssociations = [];
    message.hierarchicalScopes = [];
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
          message.roleAssociations.push(
            RoleAssociation.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.hierarchicalScopes.push(
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
    const message = globalThis.Object.create(baseSubject) as Subject;
    message.roleAssociations = [];
    message.hierarchicalScopes = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = String(object.scope);
    } else {
      message.scope = "";
    }
    if (
      object.roleAssociations !== undefined &&
      object.roleAssociations !== null
    ) {
      for (const e of object.roleAssociations) {
        message.roleAssociations.push(RoleAssociation.fromJSON(e));
      }
    }
    if (
      object.hierarchicalScopes !== undefined &&
      object.hierarchicalScopes !== null
    ) {
      for (const e of object.hierarchicalScopes) {
        message.hierarchicalScopes.push(HierarchicalScope.fromJSON(e));
      }
    }
    if (
      object.unauthenticated !== undefined &&
      object.unauthenticated !== null
    ) {
      message.unauthenticated = Boolean(object.unauthenticated);
    } else {
      message.unauthenticated = false;
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<Subject>): Subject {
    const message = { ...baseSubject } as Subject;
    message.roleAssociations = [];
    message.hierarchicalScopes = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = object.scope;
    } else {
      message.scope = "";
    }
    if (
      object.roleAssociations !== undefined &&
      object.roleAssociations !== null
    ) {
      for (const e of object.roleAssociations) {
        message.roleAssociations.push(RoleAssociation.fromPartial(e));
      }
    }
    if (
      object.hierarchicalScopes !== undefined &&
      object.hierarchicalScopes !== null
    ) {
      for (const e of object.hierarchicalScopes) {
        message.hierarchicalScopes.push(HierarchicalScope.fromPartial(e));
      }
    }
    if (
      object.unauthenticated !== undefined &&
      object.unauthenticated !== null
    ) {
      message.unauthenticated = object.unauthenticated;
    } else {
      message.unauthenticated = false;
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    return message;
  },

  toJSON(message: Subject): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.scope !== undefined && (obj.scope = message.scope);
    if (message.roleAssociations) {
      obj.roleAssociations = message.roleAssociations.map((e) =>
        e ? RoleAssociation.toJSON(e) : undefined
      );
    } else {
      obj.roleAssociations = [];
    }
    if (message.hierarchicalScopes) {
      obj.hierarchicalScopes = message.hierarchicalScopes.map((e) =>
        e ? HierarchicalScope.toJSON(e) : undefined
      );
    } else {
      obj.hierarchicalScopes = [];
    }
    message.unauthenticated !== undefined &&
      (obj.unauthenticated = message.unauthenticated);
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },
};

const baseTokens: object = {
  name: "",
  expiresIn: 0,
  token: "",
  scopes: "",
  type: "",
  interactive: false,
  lastLogin: 0,
};

export const Tokens = {
  encode(message: Tokens, writer: Writer = Writer.create()): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.expiresIn !== 0) {
      writer.uint32(17).double(message.expiresIn);
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
    if (message.lastLogin !== 0) {
      writer.uint32(57).double(message.lastLogin);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Tokens {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseTokens) as Tokens;
    message.scopes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.expiresIn = reader.double();
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
          message.lastLogin = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Tokens {
    const message = globalThis.Object.create(baseTokens) as Tokens;
    message.scopes = [];
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.expiresIn !== undefined && object.expiresIn !== null) {
      message.expiresIn = Number(object.expiresIn);
    } else {
      message.expiresIn = 0;
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    if (object.scopes !== undefined && object.scopes !== null) {
      for (const e of object.scopes) {
        message.scopes.push(String(e));
      }
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    if (object.interactive !== undefined && object.interactive !== null) {
      message.interactive = Boolean(object.interactive);
    } else {
      message.interactive = false;
    }
    if (object.lastLogin !== undefined && object.lastLogin !== null) {
      message.lastLogin = Number(object.lastLogin);
    } else {
      message.lastLogin = 0;
    }
    return message;
  },

  fromPartial(object: DeepPartial<Tokens>): Tokens {
    const message = { ...baseTokens } as Tokens;
    message.scopes = [];
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.expiresIn !== undefined && object.expiresIn !== null) {
      message.expiresIn = object.expiresIn;
    } else {
      message.expiresIn = 0;
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    if (object.scopes !== undefined && object.scopes !== null) {
      for (const e of object.scopes) {
        message.scopes.push(e);
      }
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    if (object.interactive !== undefined && object.interactive !== null) {
      message.interactive = object.interactive;
    } else {
      message.interactive = false;
    }
    if (object.lastLogin !== undefined && object.lastLogin !== null) {
      message.lastLogin = object.lastLogin;
    } else {
      message.lastLogin = 0;
    }
    return message;
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
    message.interactive !== undefined &&
      (obj.interactive = message.interactive);
    message.lastLogin !== undefined && (obj.lastLogin = message.lastLogin);
    return obj;
  },
};

const baseHierarchicalScope: object = { id: "", role: "" };

export const HierarchicalScope = {
  encode(message: HierarchicalScope, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): HierarchicalScope {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseHierarchicalScope
    ) as HierarchicalScope;
    message.children = [];
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
    const message = globalThis.Object.create(
      baseHierarchicalScope
    ) as HierarchicalScope;
    message.children = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.children !== undefined && object.children !== null) {
      for (const e of object.children) {
        message.children.push(HierarchicalScope.fromJSON(e));
      }
    }
    if (object.role !== undefined && object.role !== null) {
      message.role = String(object.role);
    } else {
      message.role = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<HierarchicalScope>): HierarchicalScope {
    const message = { ...baseHierarchicalScope } as HierarchicalScope;
    message.children = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.children !== undefined && object.children !== null) {
      for (const e of object.children) {
        message.children.push(HierarchicalScope.fromPartial(e));
      }
    }
    if (object.role !== undefined && object.role !== null) {
      message.role = object.role;
    } else {
      message.role = "";
    }
    return message;
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
};

const baseRoleAssociation: object = { role: "", id: "", created: 0 };

export const RoleAssociation = {
  encode(message: RoleAssociation, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): RoleAssociation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseRoleAssociation
    ) as RoleAssociation;
    message.attributes = [];
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
    const message = globalThis.Object.create(
      baseRoleAssociation
    ) as RoleAssociation;
    message.attributes = [];
    if (object.role !== undefined && object.role !== null) {
      message.role = String(object.role);
    } else {
      message.role = "";
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      for (const e of object.attributes) {
        message.attributes.push(Attribute.fromJSON(e));
      }
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.created !== undefined && object.created !== null) {
      message.created = Number(object.created);
    } else {
      message.created = 0;
    }
    return message;
  },

  fromPartial(object: DeepPartial<RoleAssociation>): RoleAssociation {
    const message = { ...baseRoleAssociation } as RoleAssociation;
    message.attributes = [];
    if (object.role !== undefined && object.role !== null) {
      message.role = object.role;
    } else {
      message.role = "";
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      for (const e of object.attributes) {
        message.attributes.push(Attribute.fromPartial(e));
      }
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.created !== undefined && object.created !== null) {
      message.created = object.created;
    } else {
      message.created = 0;
    }
    return message;
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
};

const baseHierarchicalScopesRequest: object = { token: "" };

export const HierarchicalScopesRequest = {
  encode(
    message: HierarchicalScopesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): HierarchicalScopesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseHierarchicalScopesRequest
    ) as HierarchicalScopesRequest;
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
    const message = globalThis.Object.create(
      baseHierarchicalScopesRequest
    ) as HierarchicalScopesRequest;
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<HierarchicalScopesRequest>
  ): HierarchicalScopesRequest {
    const message = {
      ...baseHierarchicalScopesRequest,
    } as HierarchicalScopesRequest;
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    return message;
  },

  toJSON(message: HierarchicalScopesRequest): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },
};

const baseHierarchicalScopesResponse: object = { subjectId: "", token: "" };

export const HierarchicalScopesResponse = {
  encode(
    message: HierarchicalScopesResponse,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): HierarchicalScopesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseHierarchicalScopesResponse
    ) as HierarchicalScopesResponse;
    message.hierarchicalScopes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subjectId = reader.string();
          break;
        case 2:
          message.hierarchicalScopes.push(
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
    const message = globalThis.Object.create(
      baseHierarchicalScopesResponse
    ) as HierarchicalScopesResponse;
    message.hierarchicalScopes = [];
    if (object.subjectId !== undefined && object.subjectId !== null) {
      message.subjectId = String(object.subjectId);
    } else {
      message.subjectId = "";
    }
    if (
      object.hierarchicalScopes !== undefined &&
      object.hierarchicalScopes !== null
    ) {
      for (const e of object.hierarchicalScopes) {
        message.hierarchicalScopes.push(HierarchicalScope.fromJSON(e));
      }
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<HierarchicalScopesResponse>
  ): HierarchicalScopesResponse {
    const message = {
      ...baseHierarchicalScopesResponse,
    } as HierarchicalScopesResponse;
    message.hierarchicalScopes = [];
    if (object.subjectId !== undefined && object.subjectId !== null) {
      message.subjectId = object.subjectId;
    } else {
      message.subjectId = "";
    }
    if (
      object.hierarchicalScopes !== undefined &&
      object.hierarchicalScopes !== null
    ) {
      for (const e of object.hierarchicalScopes) {
        message.hierarchicalScopes.push(HierarchicalScope.fromPartial(e));
      }
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    return message;
  },

  toJSON(message: HierarchicalScopesResponse): unknown {
    const obj: any = {};
    message.subjectId !== undefined && (obj.subjectId = message.subjectId);
    if (message.hierarchicalScopes) {
      obj.hierarchicalScopes = message.hierarchicalScopes.map((e) =>
        e ? HierarchicalScope.toJSON(e) : undefined
      );
    } else {
      obj.hierarchicalScopes = [];
    }
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },
};

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto.fromPartial({
    dependency: ["io/restorecommerce/attribute.proto"],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        field: [
          { name: "id", number: 1, label: 1, type: 9, jsonName: "id" },
          { name: "scope", number: 2, label: 1, type: 9, jsonName: "scope" },
          {
            name: "role_associations",
            number: 3,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.auth.RoleAssociation",
            jsonName: "roleAssociations",
          },
          {
            name: "hierarchical_scopes",
            number: 4,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.auth.HierarchicalScope",
            jsonName: "hierarchicalScopes",
          },
          {
            name: "unauthenticated",
            number: 5,
            label: 1,
            type: 8,
            jsonName: "unauthenticated",
          },
          { name: "token", number: 6, label: 1, type: 9, jsonName: "token" },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Subject",
      },
      {
        field: [
          { name: "name", number: 1, label: 1, type: 9, jsonName: "name" },
          {
            name: "expires_in",
            number: 2,
            label: 1,
            type: 1,
            jsonName: "expiresIn",
          },
          { name: "token", number: 3, label: 1, type: 9, jsonName: "token" },
          { name: "scopes", number: 4, label: 3, type: 9, jsonName: "scopes" },
          { name: "type", number: 5, label: 1, type: 9, jsonName: "type" },
          {
            name: "interactive",
            number: 6,
            label: 1,
            type: 8,
            jsonName: "interactive",
          },
          {
            name: "last_login",
            number: 7,
            label: 1,
            type: 1,
            jsonName: "lastLogin",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Tokens",
      },
      {
        field: [
          { name: "id", number: 1, label: 1, type: 9, jsonName: "id" },
          {
            name: "children",
            number: 2,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.auth.HierarchicalScope",
            jsonName: "children",
          },
          { name: "role", number: 3, label: 1, type: 9, jsonName: "role" },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "HierarchicalScope",
      },
      {
        field: [
          { name: "role", number: 1, label: 1, type: 9, jsonName: "role" },
          {
            name: "attributes",
            number: 2,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.attribute.Attribute",
            jsonName: "attributes",
          },
          { name: "id", number: 3, label: 1, type: 9, jsonName: "id" },
          {
            name: "created",
            number: 4,
            label: 1,
            type: 1,
            jsonName: "created",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "RoleAssociation",
      },
      {
        field: [
          { name: "token", number: 1, label: 1, type: 9, jsonName: "token" },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "HierarchicalScopesRequest",
      },
      {
        field: [
          {
            name: "subject_id",
            number: 1,
            label: 1,
            type: 9,
            jsonName: "subjectId",
          },
          {
            name: "hierarchical_scopes",
            number: 2,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.auth.HierarchicalScope",
            jsonName: "hierarchicalScopes",
          },
          { name: "token", number: 3, label: 1, type: 9, jsonName: "token" },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "HierarchicalScopesResponse",
      },
    ],
    enumType: [],
    service: [],
    extension: [],
    name: "io/restorecommerce/auth.proto",
    package: "io.restorecommerce.auth",
    sourceCodeInfo: {
      location: [
        {
          path: [4, 0],
          span: [8, 0, 15, 1],
          leadingDetachedComments: [],
          leadingComments: "*\n Subject of creating User\n",
        },
        {
          path: [4, 0, 2, 0],
          span: [9, 2, 16],
          leadingDetachedComments: [],
          trailingComments: " user id\n",
        },
        {
          path: [4, 0, 2, 1],
          span: [10, 2, 19],
          leadingDetachedComments: [],
          trailingComments: " target scope\n",
        },
        {
          path: [4, 0, 2, 2],
          span: [11, 2, 49],
          leadingDetachedComments: [],
          trailingComments: "  role_associations of user creating the user\n",
        },
        {
          path: [4, 0, 2, 3],
          span: [12, 2, 53],
          leadingDetachedComments: [],
          trailingComments: " HR scope of user creating the User\n",
        },
        {
          path: [4, 0, 2, 4],
          span: [13, 2, 27],
          leadingDetachedComments: [],
          trailingComments: " for unauthenticated context\n",
        },
        {
          path: [4, 1, 2, 0],
          span: [18, 2, 18],
          leadingDetachedComments: [],
          trailingComments: " token name\n",
        },
        {
          path: [4, 1, 2, 1],
          span: [19, 2, 24],
          leadingDetachedComments: [],
          trailingComments: " expiration date for token\n",
        },
        {
          path: [4, 1, 2, 2],
          span: [20, 2, 19],
          leadingDetachedComments: [],
          trailingComments: " token\n",
        },
        {
          path: [4, 1, 2, 3],
          span: [21, 2, 29],
          leadingDetachedComments: [],
          trailingComments: " identifier for role_association\n",
        },
        {
          path: [4, 1, 2, 4],
          span: [22, 2, 18],
          leadingDetachedComments: [],
          trailingComments: " type of token eg: access_token, refresh_token\n",
        },
        {
          path: [4, 2, 2, 0],
          span: [28, 2, 16],
          leadingDetachedComments: [],
          trailingComments: " root node\n",
        },
        {
          path: [4, 2, 2, 1],
          span: [29, 2, 42],
          leadingDetachedComments: [],
          trailingComments: " children nodes\n",
        },
        {
          path: [4, 2, 2, 2],
          span: [30, 2, 18],
          leadingDetachedComments: [],
          trailingComments:
            " role identifier associated with root node scope\n",
        },
        {
          path: [4, 3, 2, 0],
          span: [34, 2, 18],
          leadingDetachedComments: [],
          trailingComments: " role ID\n",
        },
        {
          path: [4, 3, 2, 1],
          span: [35, 2, 65],
          leadingDetachedComments: [],
          trailingComments:
            " useful attributes for RBAC/ABAC like organizational scope\n",
        },
        {
          path: [4, 3, 2, 2],
          span: [36, 2, 16],
          leadingDetachedComments: [],
          trailingComments: " identifier for role_association\n",
        },
        {
          path: [4, 3, 2, 3],
          span: [37, 2, 21],
          leadingDetachedComments: [],
          trailingComments: " timestamp when the role was created\n",
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
    ".io.restorecommerce.auth.HierarchicalScopesRequest": HierarchicalScopesRequest,
    ".io.restorecommerce.auth.HierarchicalScopesResponse": HierarchicalScopesResponse,
  },
  dependencies: [protoMetadata1],
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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
