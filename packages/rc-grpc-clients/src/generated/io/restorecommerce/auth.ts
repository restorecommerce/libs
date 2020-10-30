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
  token: string;
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
  token: "",
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

export interface MetaI {
  readonly meta: 'object' | 'array' | 'map' | 'union';
}

export interface MetaO extends MetaI {
  readonly meta: 'object';
  readonly type: string;
  readonly name: string;
}

export interface MetaA extends MetaI {
  readonly meta: 'array';
  readonly type: MetaI | string;
}

export interface MetaM extends MetaI {
  readonly meta: 'map';
  readonly key: string;
  readonly value: MetaI | string;
}

export interface MetaU extends MetaI {
  readonly meta: 'union';
  readonly choices: Array<MetaI | string | undefined>;
}

export const metaSubject: { [key in keyof Subject]: MetaI | string } = {
  id: 'string',
  scope: 'string',
  roleAssociations: {meta:'array', type:{meta:'object', type:'.io.restorecommerce.auth.RoleAssociation', name:'RoleAssociation'} as MetaO} as MetaA,
  hierarchicalScopes: {meta:'array', type:{meta:'object', type:'.io.restorecommerce.auth.HierarchicalScope', name:'HierarchicalScope'} as MetaO} as MetaA,
  unauthenticated: 'boolean',
  token: 'string',
};

export const metaApiKey: { [key in keyof ApiKey]: MetaI | string } = {
  value: 'string',
};

export const metaTokens: { [key in keyof Tokens]: MetaI | string } = {
  name: 'string',
  expiresAt: 'number',
  token: 'string',
  scopes: {meta:'array', type:'string'} as MetaA,
};

export const metaHierarchicalScope: { [key in keyof HierarchicalScope]: MetaI | string } = {
  id: 'string',
  children: {meta:'array', type:{meta:'object', type:'.io.restorecommerce.auth.HierarchicalScope', name:'HierarchicalScope'} as MetaO} as MetaA,
  role: 'string',
};

export const metaRoleAssociation: { [key in keyof RoleAssociation]: MetaI | string } = {
  role: 'string',
  attributes: {meta:'array', type:{meta:'object', type:'.io.restorecommerce.attribute.Attribute', name:'Attribute'} as MetaO} as MetaA,
  id: 'string',
};

export const protobufPackage = 'io.restorecommerce.auth'

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
    writer.uint32(50).string(message.token);
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
    const message = { ...baseSubject } as Subject;
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
    if (object.roleAssociations !== undefined && object.roleAssociations !== null) {
      for (const e of object.roleAssociations) {
        message.roleAssociations.push(RoleAssociation.fromJSON(e));
      }
    }
    if (object.hierarchicalScopes !== undefined && object.hierarchicalScopes !== null) {
      for (const e of object.hierarchicalScopes) {
        message.hierarchicalScopes.push(HierarchicalScope.fromJSON(e));
      }
    }
    if (object.unauthenticated !== undefined && object.unauthenticated !== null) {
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
    if (object.roleAssociations !== undefined && object.roleAssociations !== null) {
      for (const e of object.roleAssociations) {
        message.roleAssociations.push(RoleAssociation.fromPartial(e));
      }
    }
    if (object.hierarchicalScopes !== undefined && object.hierarchicalScopes !== null) {
      for (const e of object.hierarchicalScopes) {
        message.hierarchicalScopes.push(HierarchicalScope.fromPartial(e));
      }
    }
    if (object.unauthenticated !== undefined && object.unauthenticated !== null) {
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
      obj.roleAssociations = message.roleAssociations.map(e => e ? RoleAssociation.toJSON(e) : undefined);
    } else {
      obj.roleAssociations = [];
    }
    if (message.hierarchicalScopes) {
      obj.hierarchicalScopes = message.hierarchicalScopes.map(e => e ? HierarchicalScope.toJSON(e) : undefined);
    } else {
      obj.hierarchicalScopes = [];
    }
    message.unauthenticated !== undefined && (obj.unauthenticated = message.unauthenticated);
    message.token !== undefined && (obj.token = message.token);
    return obj;
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
  fromJSON(object: any): ApiKey {
    const message = { ...baseApiKey } as ApiKey;
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<ApiKey>): ApiKey {
    const message = { ...baseApiKey } as ApiKey;
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
  toJSON(message: ApiKey): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
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
  fromJSON(object: any): Tokens {
    const message = { ...baseTokens } as Tokens;
    message.scopes = [];
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.expiresAt !== undefined && object.expiresAt !== null) {
      message.expiresAt = Number(object.expiresAt);
    } else {
      message.expiresAt = 0;
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
    if (object.expiresAt !== undefined && object.expiresAt !== null) {
      message.expiresAt = object.expiresAt;
    } else {
      message.expiresAt = 0;
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
    return message;
  },
  toJSON(message: Tokens): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.expiresAt !== undefined && (obj.expiresAt = message.expiresAt);
    message.token !== undefined && (obj.token = message.token);
    if (message.scopes) {
      obj.scopes = message.scopes.map(e => e);
    } else {
      obj.scopes = [];
    }
    return obj;
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
  fromJSON(object: any): HierarchicalScope {
    const message = { ...baseHierarchicalScope } as HierarchicalScope;
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
      obj.children = message.children.map(e => e ? HierarchicalScope.toJSON(e) : undefined);
    } else {
      obj.children = [];
    }
    message.role !== undefined && (obj.role = message.role);
    return obj;
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
  fromJSON(object: any): RoleAssociation {
    const message = { ...baseRoleAssociation } as RoleAssociation;
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
    return message;
  },
  toJSON(message: RoleAssociation): unknown {
    const obj: any = {};
    message.role !== undefined && (obj.role = message.role);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;