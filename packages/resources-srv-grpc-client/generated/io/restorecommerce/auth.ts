/* eslint-disable */
import { Attribute } from '../../io/restorecommerce/attribute';
import { Writer, Reader } from 'protobufjs/minimal';


/**
 * *
 *  Subject of creating User
 */
export interface Subject {
  /**
   *  user id
   */
  id: string;
  /**
   *  target scope
   */
  scope: string;
  /**
   *   role_associations of user creating the user
   */
  roleAssociations: RoleAssociation[];
  /**
   *  HR scope of user creating the User
   */
  hierarchicalScopes: HierarchicalScope[];
  /**
   *  for unauthenticated context
   */
  unauthenticated: boolean;
  tokenName: string;
}

/**
 * *
 *  Api Key
 */
export interface ApiKey {
  /**
   *  ApiKey
   */
  value: string;
}

export interface Tokens {
  /**
   *  token name
   */
  name: string;
  /**
   *  expiration date for token
   */
  expiresAt: number;
  /**
   *  token
   */
  token: string;
  /**
   *  identifier for role_association
   */
  scopes: string[];
}

export interface HierarchicalScope {
  /**
   *  root node
   */
  id: string;
  /**
   *  children nodes
   */
  children: HierarchicalScope[];
  /**
   *  role identifier associated with root node scope
   */
  role: string;
}

export interface RoleAssociation {
  /**
   *  role ID
   */
  role: string;
  /**
   *  useful attributes for RBAC/ABAC like organizational scope
   */
  attributes: Attribute[];
  /**
   *  identifier for role_association
   */
  id: string;
}

const baseSubject: object = {
  id: "",
  scope: "",
  unauthenticated: false,
  tokenName: "",
};

const baseApiKey: object = {
  value: "",
};

const baseTokens: object = {
  name: "",
  expiresAt: 0,
  token: "",
  scopes: "",
};

const baseHierarchicalScope: object = {
  id: "",
  role: "",
};

const baseRoleAssociation: object = {
  role: "",
  id: "",
};

export const Subject = {
  encode(message: Subject, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    writer.uint32(18).string(message.scope);
    for (const v of message.roleAssociations) {
      RoleAssociation.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.hierarchicalScopes) {
      HierarchicalScope.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    writer.uint32(40).bool(message.unauthenticated);
    writer.uint32(50).string(message.tokenName);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Subject {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSubject } as Subject;
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
          message.roleAssociations.push(RoleAssociation.decode(reader, reader.uint32()));
          break;
        case 4:
          message.hierarchicalScopes.push(HierarchicalScope.decode(reader, reader.uint32()));
          break;
        case 5:
          message.unauthenticated = reader.bool();
          break;
        case 6:
          message.tokenName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const ApiKey = {
  encode(message: ApiKey, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.value);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ApiKey {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseApiKey } as ApiKey;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const Tokens = {
  encode(message: Tokens, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.name);
    writer.uint32(17).double(message.expiresAt);
    writer.uint32(26).string(message.token);
    for (const v of message.scopes) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Tokens {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTokens } as Tokens;
    message.scopes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.expiresAt = reader.double();
          break;
        case 3:
          message.token = reader.string();
          break;
        case 4:
          message.scopes.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const HierarchicalScope = {
  encode(message: HierarchicalScope, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    for (const v of message.children) {
      HierarchicalScope.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.role);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): HierarchicalScope {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHierarchicalScope } as HierarchicalScope;
    message.children = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.children.push(HierarchicalScope.decode(reader, reader.uint32()));
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
};

export const RoleAssociation = {
  encode(message: RoleAssociation, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.role);
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.id);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): RoleAssociation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRoleAssociation } as RoleAssociation;
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};
