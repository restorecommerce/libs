/* eslint-disable */
import { Subject, ApiKey, HierarchicalScope, RoleAssociation, Tokens } from '../../io/restorecommerce/auth';
import { Meta } from '../../io/restorecommerce/meta';
import { Attribute } from '../../io/restorecommerce/attribute';
import { Image } from '../../io/restorecommerce/image';
import { ReadRequest, DeleteRequest } from '../../io/restorecommerce/resource_base';
import { Empty } from '../../google/protobuf/empty';
import { Writer, Reader } from 'protobufjs/minimal';


/**
 * *
 *  Request to verify password and retrieve the user's info.
 *  Either name or email can be provided.
 */
export interface LoginRequest {
  /**
   *  User name or email
   */
  identifier: string;
  /**
   *  Raw password
   */
  password: string;
  token: string;
}

export interface OrgIDRequest {
  orgIds: string[];
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
}

export interface UserIDs {
  userIds: string[];
}

export interface HierarchicalScopesRequest {
  subjectId: string;
  token: string;
}

export interface HierarchicalScopesResponse {
  subjectId: string;
  hierarchicalScopes: HierarchicalScope[];
  token: string;
}

export interface PopulateRoleAssocCacheRequest {
  /**
   * / User ID
   */
  id: string;
  token: string;
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
}

export interface FindRequest {
  /**
   * / User ID
   */
  id: string;
  name: string;
  email: string;
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
}

export interface RegisterRequest {
  id: string;
  guest: boolean;
  meta?: Meta;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  timezoneId: string;
  localeId: string;
  roleAssociations: RoleAssociation[];
  /**
   *  default hierarchical scope
   */
  defaultScope: string;
  userType: UserType;
  captchaCode: string;
}

export interface ActivateRequest {
  /**
   * / User name (unique)
   */
  name: string;
  activationCode: string;
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
}

export interface ConfirmUserInvitationRequest {
  name: string;
  password: string;
  activationCode: string;
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
}

export interface SendInvitationEmailRequest {
  userId: string;
  invitedByUserId: string;
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
}

export interface ChangePasswordRequest {
  /**
   * / User ID
   */
  id: string;
  password: string;
  newPassword: string;
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
}

export interface RequestPasswordChangeRequest {
  name: string | undefined;
  email: string | undefined;
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
}

export interface ConfirmPasswordChangeRequest {
  name: string;
  activationCode: string;
  password: string;
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
}

export interface ChangeEmailRequest {
  /**
   * / User ID
   */
  id: string;
  email: string;
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
}

export interface ConfirmEmailChangeRequest {
  name: string;
  activationCode: string;
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
}

export interface UnregisterRequest {
  /**
   * / User ID
   */
  id: string;
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
}

/**
 * *
 *  User deletion event.
 *  Send when a user was deleted or unregistered.
 *
 *  Events:
 *  usersDeleted,
 *  unregistered,
 */
export interface Deleted {
  id: string;
}

/**
 * *
 *  User password changed event.
 *
 *  Events:
 *  passwordChanged,
 */
export interface PasswordChanged {
  /**
   * / User ID
   */
  id: string;
  passwordHash: string;
}

export interface PasswordChangeRequested {
  /**
   *  User ID
   */
  id: string;
}

/**
 * *
 *  User email id changed event.
 */
export interface EmailChangeRequested {
  id: string;
  activationCode: string;
  newEmail: string;
}

export interface EmailChangeConfirmed {
  /**
   * / User ID
   */
  id: string;
  email: string;
}

/**
 * *
 *  A list of User.
 */
export interface UserList {
  items: User[];
  totalCount: number;
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
}

/**
 * *
 *  User activation request.
 */
export interface Activate {
  /**
   * / User ID
   */
  id: string;
}

export interface FindByRoleRequest {
  role: string;
  attributes: Attribute[];
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
}

/**
 * *
 *  A User resource.
 */
export interface User {
  /**
   * / User ID, unique, key
   */
  id: string;
  meta?: Meta;
  /**
   *  The name of the user, can be used for login
   */
  name: string;
  firstName: string;
  lastName: string;
  /**
   * / Email address, can be used for login
   */
  email: string;
  /**
   * / New email address; set by `requestEmailChange` and overrides actual email upon `confirmEmailChange`
   */
  newEmail: string;
  /**
   * / If the user was activated via the activation process
   */
  active: boolean;
  /**
   * / Activation code used in the activation process
   */
  activationCode: string;
  /**
   * / Raw password, not stored
   */
  password: string;
  /**
   * / Encrypted password, stored
   */
  passwordHash: string;
  /**
   *  A user can have multiple roles and different attributes coupled with each role
   */
  roleAssociations: RoleAssociation[];
  /**
   *  timezone_id specifications
   */
  timezoneId: string;
  /**
   *  locale specifications
   */
  localeId: string;
  /**
   *  default hierarchical scope
   */
  defaultScope: string;
  /**
   *  true in case in case of `register`; set to false after activation
   */
  unauthenticated: boolean;
  /**
   * / Is the user a guest. A guest is a automatically generated user which can later be turned in a non-guest user.
   */
  guest: boolean;
  image?: Image;
  userType: UserType;
  /**
   *  For user invitation
   */
  invite: boolean;
  /**
   *  user who is inviting
   */
  invitedByUserName: string;
  /**
   *  First name of user inviting
   */
  invitedByUserFirstName: string;
  /**
   *  Last name of user inviting
   */
  invitedByUserLastName: string;
  tokens: Tokens[];
  lastLogin: number;
  lastAccess: number;
}

const baseLoginRequest: object = {
  identifier: "",
  password: "",
  token: "",
};

const baseOrgIDRequest: object = {
  orgIds: "",
};

const baseUserIDs: object = {
  userIds: "",
};

const baseHierarchicalScopesRequest: object = {
  subjectId: "",
  token: "",
};

const baseHierarchicalScopesResponse: object = {
  subjectId: "",
  token: "",
};

const basePopulateRoleAssocCacheRequest: object = {
  id: "",
  token: "",
};

const baseFindRequest: object = {
  id: "",
  name: "",
  email: "",
};

const baseRegisterRequest: object = {
  id: "",
  guest: false,
  name: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  timezoneId: "",
  localeId: "",
  defaultScope: "",
  userType: 0,
  captchaCode: "",
};

const baseActivateRequest: object = {
  name: "",
  activationCode: "",
};

const baseConfirmUserInvitationRequest: object = {
  name: "",
  password: "",
  activationCode: "",
};

const baseSendInvitationEmailRequest: object = {
  userId: "",
  invitedByUserId: "",
};

const baseChangePasswordRequest: object = {
  id: "",
  password: "",
  newPassword: "",
};

const baseRequestPasswordChangeRequest: object = {
};

const baseConfirmPasswordChangeRequest: object = {
  name: "",
  activationCode: "",
  password: "",
};

const baseChangeEmailRequest: object = {
  id: "",
  email: "",
};

const baseConfirmEmailChangeRequest: object = {
  name: "",
  activationCode: "",
};

const baseUnregisterRequest: object = {
  id: "",
};

const baseDeleted: object = {
  id: "",
};

const basePasswordChanged: object = {
  id: "",
  passwordHash: "",
};

const basePasswordChangeRequested: object = {
  id: "",
};

const baseEmailChangeRequested: object = {
  id: "",
  activationCode: "",
  newEmail: "",
};

const baseEmailChangeConfirmed: object = {
  id: "",
  email: "",
};

const baseUserList: object = {
  totalCount: 0,
};

const baseActivate: object = {
  id: "",
};

const baseFindByRoleRequest: object = {
  role: "",
};

const baseUser: object = {
  id: "",
  name: "",
  firstName: "",
  lastName: "",
  email: "",
  newEmail: "",
  active: false,
  activationCode: "",
  password: "",
  passwordHash: "",
  timezoneId: "",
  localeId: "",
  defaultScope: "",
  unauthenticated: false,
  guest: false,
  userType: 0,
  invite: false,
  invitedByUserName: "",
  invitedByUserFirstName: "",
  invitedByUserLastName: "",
  lastLogin: 0,
  lastAccess: 0,
};

/**
 * *
 *  The microservice for the user resource.
 */
export interface Service {

  Read(request: ReadRequest): Promise<UserList>;

  Create(request: UserList): Promise<UserList>;

  Delete(request: DeleteRequest): Promise<Empty>;

  Update(request: UserList): Promise<UserList>;

  Upsert(request: UserList): Promise<UserList>;

  Find(request: FindRequest): Promise<UserList>;

  Register(request: RegisterRequest): Promise<User>;

  Activate(request: ActivateRequest): Promise<Empty>;

  ChangePassword(request: ChangePasswordRequest): Promise<Empty>;

  RequestPasswordChange(request: RequestPasswordChangeRequest): Promise<Empty>;

  RequestEmailChange(request: ChangeEmailRequest): Promise<Empty>;

  ConfirmPasswordChange(request: ConfirmPasswordChangeRequest): Promise<Empty>;

  ConfirmEmailChange(request: ConfirmEmailChangeRequest): Promise<Empty>;

  Unregister(request: UnregisterRequest): Promise<Empty>;

  Login(request: LoginRequest): Promise<User>;

  FindByRole(request: FindByRoleRequest): Promise<UserList>;

  DeleteUsersByOrg(request: OrgIDRequest): Promise<UserIDs>;

  ConfirmUserInvitation(request: ConfirmUserInvitationRequest): Promise<Empty>;

  SendInvitationEmail(request: SendInvitationEmailRequest): Promise<Empty>;

  populateRoleAssocCache(request: PopulateRoleAssocCacheRequest): Promise<Empty>;

}

export const protobufPackage = 'io.restorecommerce.user'

export enum UserType {
  ORG_USER = 0,
  INDIVIDUAL_USER = 1,
  GUEST = 2,
  TECHNICAL_USER = 3,
  UNRECOGNIZED = -1,
}

export function userTypeFromJSON(object: any): UserType {
  switch (object) {
    case 0:
    case "ORG_USER":
      return UserType.ORG_USER;
    case 1:
    case "INDIVIDUAL_USER":
      return UserType.INDIVIDUAL_USER;
    case 2:
    case "GUEST":
      return UserType.GUEST;
    case 3:
    case "TECHNICAL_USER":
      return UserType.TECHNICAL_USER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UserType.UNRECOGNIZED;
  }
}

export function userTypeToJSON(object: UserType): string {
  switch (object) {
    case UserType.ORG_USER:
      return "ORG_USER";
    case UserType.INDIVIDUAL_USER:
      return "INDIVIDUAL_USER";
    case UserType.GUEST:
      return "GUEST";
    case UserType.TECHNICAL_USER:
      return "TECHNICAL_USER";
    default:
      return "UNKNOWN";
  }
}

export const LoginRequest = {
  encode(message: LoginRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.identifier);
    writer.uint32(18).string(message.password);
    writer.uint32(26).string(message.token);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): LoginRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLoginRequest } as LoginRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;
        case 2:
          message.password = reader.string();
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
  fromJSON(object: any): LoginRequest {
    const message = { ...baseLoginRequest } as LoginRequest;
    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = String(object.identifier);
    } else {
      message.identifier = "";
    }
    if (object.password !== undefined && object.password !== null) {
      message.password = String(object.password);
    } else {
      message.password = "";
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<LoginRequest>): LoginRequest {
    const message = { ...baseLoginRequest } as LoginRequest;
    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = object.identifier;
    } else {
      message.identifier = "";
    }
    if (object.password !== undefined && object.password !== null) {
      message.password = object.password;
    } else {
      message.password = "";
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    return message;
  },
  toJSON(message: LoginRequest): unknown {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.password !== undefined && (obj.password = message.password);
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },
};

export const OrgIDRequest = {
  encode(message: OrgIDRequest, writer: Writer = Writer.create()): Writer {
    for (const v of message.orgIds) {
      writer.uint32(10).string(v!);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(18).fork()).ldelim();
    }
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): OrgIDRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOrgIDRequest } as OrgIDRequest;
    message.orgIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orgIds.push(reader.string());
          break;
        case 2:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        case 3:
          message.apiKey = ApiKey.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OrgIDRequest {
    const message = { ...baseOrgIDRequest } as OrgIDRequest;
    message.orgIds = [];
    if (object.orgIds !== undefined && object.orgIds !== null) {
      for (const e of object.orgIds) {
        message.orgIds.push(String(e));
      }
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromJSON(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<OrgIDRequest>): OrgIDRequest {
    const message = { ...baseOrgIDRequest } as OrgIDRequest;
    message.orgIds = [];
    if (object.orgIds !== undefined && object.orgIds !== null) {
      for (const e of object.orgIds) {
        message.orgIds.push(e);
      }
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromPartial(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  toJSON(message: OrgIDRequest): unknown {
    const obj: any = {};
    if (message.orgIds) {
      obj.orgIds = message.orgIds.map(e => e);
    } else {
      obj.orgIds = [];
    }
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    message.apiKey !== undefined && (obj.apiKey = message.apiKey ? ApiKey.toJSON(message.apiKey) : undefined);
    return obj;
  },
};

export const UserIDs = {
  encode(message: UserIDs, writer: Writer = Writer.create()): Writer {
    for (const v of message.userIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): UserIDs {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUserIDs } as UserIDs;
    message.userIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UserIDs {
    const message = { ...baseUserIDs } as UserIDs;
    message.userIds = [];
    if (object.userIds !== undefined && object.userIds !== null) {
      for (const e of object.userIds) {
        message.userIds.push(String(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<UserIDs>): UserIDs {
    const message = { ...baseUserIDs } as UserIDs;
    message.userIds = [];
    if (object.userIds !== undefined && object.userIds !== null) {
      for (const e of object.userIds) {
        message.userIds.push(e);
      }
    }
    return message;
  },
  toJSON(message: UserIDs): unknown {
    const obj: any = {};
    if (message.userIds) {
      obj.userIds = message.userIds.map(e => e);
    } else {
      obj.userIds = [];
    }
    return obj;
  },
};

export const HierarchicalScopesRequest = {
  encode(message: HierarchicalScopesRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.subjectId);
    writer.uint32(18).string(message.token);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): HierarchicalScopesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHierarchicalScopesRequest } as HierarchicalScopesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subjectId = reader.string();
          break;
        case 2:
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
    const message = { ...baseHierarchicalScopesRequest } as HierarchicalScopesRequest;
    if (object.subjectId !== undefined && object.subjectId !== null) {
      message.subjectId = String(object.subjectId);
    } else {
      message.subjectId = "";
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<HierarchicalScopesRequest>): HierarchicalScopesRequest {
    const message = { ...baseHierarchicalScopesRequest } as HierarchicalScopesRequest;
    if (object.subjectId !== undefined && object.subjectId !== null) {
      message.subjectId = object.subjectId;
    } else {
      message.subjectId = "";
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    return message;
  },
  toJSON(message: HierarchicalScopesRequest): unknown {
    const obj: any = {};
    message.subjectId !== undefined && (obj.subjectId = message.subjectId);
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },
};

export const HierarchicalScopesResponse = {
  encode(message: HierarchicalScopesResponse, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.subjectId);
    for (const v of message.hierarchicalScopes) {
      HierarchicalScope.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.token);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): HierarchicalScopesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHierarchicalScopesResponse } as HierarchicalScopesResponse;
    message.hierarchicalScopes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subjectId = reader.string();
          break;
        case 2:
          message.hierarchicalScopes.push(HierarchicalScope.decode(reader, reader.uint32()));
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
    const message = { ...baseHierarchicalScopesResponse } as HierarchicalScopesResponse;
    message.hierarchicalScopes = [];
    if (object.subjectId !== undefined && object.subjectId !== null) {
      message.subjectId = String(object.subjectId);
    } else {
      message.subjectId = "";
    }
    if (object.hierarchicalScopes !== undefined && object.hierarchicalScopes !== null) {
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
  fromPartial(object: DeepPartial<HierarchicalScopesResponse>): HierarchicalScopesResponse {
    const message = { ...baseHierarchicalScopesResponse } as HierarchicalScopesResponse;
    message.hierarchicalScopes = [];
    if (object.subjectId !== undefined && object.subjectId !== null) {
      message.subjectId = object.subjectId;
    } else {
      message.subjectId = "";
    }
    if (object.hierarchicalScopes !== undefined && object.hierarchicalScopes !== null) {
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
      obj.hierarchicalScopes = message.hierarchicalScopes.map(e => e ? HierarchicalScope.toJSON(e) : undefined);
    } else {
      obj.hierarchicalScopes = [];
    }
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },
};

export const PopulateRoleAssocCacheRequest = {
  encode(message: PopulateRoleAssocCacheRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    writer.uint32(18).string(message.token);
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PopulateRoleAssocCacheRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePopulateRoleAssocCacheRequest } as PopulateRoleAssocCacheRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.token = reader.string();
          break;
        case 3:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        case 4:
          message.apiKey = ApiKey.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PopulateRoleAssocCacheRequest {
    const message = { ...basePopulateRoleAssocCacheRequest } as PopulateRoleAssocCacheRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromJSON(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<PopulateRoleAssocCacheRequest>): PopulateRoleAssocCacheRequest {
    const message = { ...basePopulateRoleAssocCacheRequest } as PopulateRoleAssocCacheRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromPartial(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  toJSON(message: PopulateRoleAssocCacheRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.token !== undefined && (obj.token = message.token);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    message.apiKey !== undefined && (obj.apiKey = message.apiKey ? ApiKey.toJSON(message.apiKey) : undefined);
    return obj;
  },
};

export const FindRequest = {
  encode(message: FindRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    writer.uint32(18).string(message.name);
    writer.uint32(26).string(message.email);
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(34).fork()).ldelim();
    }
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): FindRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFindRequest } as FindRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.email = reader.string();
          break;
        case 4:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        case 5:
          message.apiKey = ApiKey.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FindRequest {
    const message = { ...baseFindRequest } as FindRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = String(object.email);
    } else {
      message.email = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromJSON(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<FindRequest>): FindRequest {
    const message = { ...baseFindRequest } as FindRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromPartial(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  toJSON(message: FindRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.email !== undefined && (obj.email = message.email);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    message.apiKey !== undefined && (obj.apiKey = message.apiKey ? ApiKey.toJSON(message.apiKey) : undefined);
    return obj;
  },
};

export const RegisterRequest = {
  encode(message: RegisterRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    writer.uint32(16).bool(message.guest);
    if (message.meta !== undefined && message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(34).string(message.name);
    writer.uint32(42).string(message.firstName);
    writer.uint32(50).string(message.lastName);
    writer.uint32(58).string(message.email);
    writer.uint32(66).string(message.password);
    writer.uint32(74).string(message.timezoneId);
    writer.uint32(82).string(message.localeId);
    for (const v of message.roleAssociations) {
      RoleAssociation.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    writer.uint32(98).string(message.defaultScope);
    writer.uint32(104).int32(message.userType);
    writer.uint32(114).string(message.captchaCode);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): RegisterRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRegisterRequest } as RegisterRequest;
    message.roleAssociations = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.guest = reader.bool();
          break;
        case 3:
          message.meta = Meta.decode(reader, reader.uint32());
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.firstName = reader.string();
          break;
        case 6:
          message.lastName = reader.string();
          break;
        case 7:
          message.email = reader.string();
          break;
        case 8:
          message.password = reader.string();
          break;
        case 9:
          message.timezoneId = reader.string();
          break;
        case 10:
          message.localeId = reader.string();
          break;
        case 11:
          message.roleAssociations.push(RoleAssociation.decode(reader, reader.uint32()));
          break;
        case 12:
          message.defaultScope = reader.string();
          break;
        case 13:
          message.userType = reader.int32() as any;
          break;
        case 14:
          message.captchaCode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RegisterRequest {
    const message = { ...baseRegisterRequest } as RegisterRequest;
    message.roleAssociations = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.guest !== undefined && object.guest !== null) {
      message.guest = Boolean(object.guest);
    } else {
      message.guest = false;
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
    if (object.firstName !== undefined && object.firstName !== null) {
      message.firstName = String(object.firstName);
    } else {
      message.firstName = "";
    }
    if (object.lastName !== undefined && object.lastName !== null) {
      message.lastName = String(object.lastName);
    } else {
      message.lastName = "";
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = String(object.email);
    } else {
      message.email = "";
    }
    if (object.password !== undefined && object.password !== null) {
      message.password = String(object.password);
    } else {
      message.password = "";
    }
    if (object.timezoneId !== undefined && object.timezoneId !== null) {
      message.timezoneId = String(object.timezoneId);
    } else {
      message.timezoneId = "";
    }
    if (object.localeId !== undefined && object.localeId !== null) {
      message.localeId = String(object.localeId);
    } else {
      message.localeId = "";
    }
    if (object.roleAssociations !== undefined && object.roleAssociations !== null) {
      for (const e of object.roleAssociations) {
        message.roleAssociations.push(RoleAssociation.fromJSON(e));
      }
    }
    if (object.defaultScope !== undefined && object.defaultScope !== null) {
      message.defaultScope = String(object.defaultScope);
    } else {
      message.defaultScope = "";
    }
    if (object.userType !== undefined && object.userType !== null) {
      message.userType = userTypeFromJSON(object.userType);
    } else {
      message.userType = 0;
    }
    if (object.captchaCode !== undefined && object.captchaCode !== null) {
      message.captchaCode = String(object.captchaCode);
    } else {
      message.captchaCode = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<RegisterRequest>): RegisterRequest {
    const message = { ...baseRegisterRequest } as RegisterRequest;
    message.roleAssociations = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.guest !== undefined && object.guest !== null) {
      message.guest = object.guest;
    } else {
      message.guest = false;
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
    if (object.firstName !== undefined && object.firstName !== null) {
      message.firstName = object.firstName;
    } else {
      message.firstName = "";
    }
    if (object.lastName !== undefined && object.lastName !== null) {
      message.lastName = object.lastName;
    } else {
      message.lastName = "";
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = "";
    }
    if (object.password !== undefined && object.password !== null) {
      message.password = object.password;
    } else {
      message.password = "";
    }
    if (object.timezoneId !== undefined && object.timezoneId !== null) {
      message.timezoneId = object.timezoneId;
    } else {
      message.timezoneId = "";
    }
    if (object.localeId !== undefined && object.localeId !== null) {
      message.localeId = object.localeId;
    } else {
      message.localeId = "";
    }
    if (object.roleAssociations !== undefined && object.roleAssociations !== null) {
      for (const e of object.roleAssociations) {
        message.roleAssociations.push(RoleAssociation.fromPartial(e));
      }
    }
    if (object.defaultScope !== undefined && object.defaultScope !== null) {
      message.defaultScope = object.defaultScope;
    } else {
      message.defaultScope = "";
    }
    if (object.userType !== undefined && object.userType !== null) {
      message.userType = object.userType;
    } else {
      message.userType = 0;
    }
    if (object.captchaCode !== undefined && object.captchaCode !== null) {
      message.captchaCode = object.captchaCode;
    } else {
      message.captchaCode = "";
    }
    return message;
  },
  toJSON(message: RegisterRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.guest !== undefined && (obj.guest = message.guest);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.firstName !== undefined && (obj.firstName = message.firstName);
    message.lastName !== undefined && (obj.lastName = message.lastName);
    message.email !== undefined && (obj.email = message.email);
    message.password !== undefined && (obj.password = message.password);
    message.timezoneId !== undefined && (obj.timezoneId = message.timezoneId);
    message.localeId !== undefined && (obj.localeId = message.localeId);
    if (message.roleAssociations) {
      obj.roleAssociations = message.roleAssociations.map(e => e ? RoleAssociation.toJSON(e) : undefined);
    } else {
      obj.roleAssociations = [];
    }
    message.defaultScope !== undefined && (obj.defaultScope = message.defaultScope);
    message.userType !== undefined && (obj.userType = userTypeToJSON(message.userType));
    message.captchaCode !== undefined && (obj.captchaCode = message.captchaCode);
    return obj;
  },
};

export const ActivateRequest = {
  encode(message: ActivateRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.name);
    writer.uint32(18).string(message.activationCode);
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ActivateRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseActivateRequest } as ActivateRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.activationCode = reader.string();
          break;
        case 3:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        case 4:
          message.apiKey = ApiKey.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ActivateRequest {
    const message = { ...baseActivateRequest } as ActivateRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.activationCode !== undefined && object.activationCode !== null) {
      message.activationCode = String(object.activationCode);
    } else {
      message.activationCode = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromJSON(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<ActivateRequest>): ActivateRequest {
    const message = { ...baseActivateRequest } as ActivateRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.activationCode !== undefined && object.activationCode !== null) {
      message.activationCode = object.activationCode;
    } else {
      message.activationCode = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromPartial(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  toJSON(message: ActivateRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.activationCode !== undefined && (obj.activationCode = message.activationCode);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    message.apiKey !== undefined && (obj.apiKey = message.apiKey ? ApiKey.toJSON(message.apiKey) : undefined);
    return obj;
  },
};

export const ConfirmUserInvitationRequest = {
  encode(message: ConfirmUserInvitationRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.name);
    writer.uint32(18).string(message.password);
    writer.uint32(26).string(message.activationCode);
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(34).fork()).ldelim();
    }
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ConfirmUserInvitationRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConfirmUserInvitationRequest } as ConfirmUserInvitationRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.password = reader.string();
          break;
        case 3:
          message.activationCode = reader.string();
          break;
        case 4:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        case 5:
          message.apiKey = ApiKey.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConfirmUserInvitationRequest {
    const message = { ...baseConfirmUserInvitationRequest } as ConfirmUserInvitationRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.password !== undefined && object.password !== null) {
      message.password = String(object.password);
    } else {
      message.password = "";
    }
    if (object.activationCode !== undefined && object.activationCode !== null) {
      message.activationCode = String(object.activationCode);
    } else {
      message.activationCode = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromJSON(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<ConfirmUserInvitationRequest>): ConfirmUserInvitationRequest {
    const message = { ...baseConfirmUserInvitationRequest } as ConfirmUserInvitationRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.password !== undefined && object.password !== null) {
      message.password = object.password;
    } else {
      message.password = "";
    }
    if (object.activationCode !== undefined && object.activationCode !== null) {
      message.activationCode = object.activationCode;
    } else {
      message.activationCode = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromPartial(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  toJSON(message: ConfirmUserInvitationRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.password !== undefined && (obj.password = message.password);
    message.activationCode !== undefined && (obj.activationCode = message.activationCode);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    message.apiKey !== undefined && (obj.apiKey = message.apiKey ? ApiKey.toJSON(message.apiKey) : undefined);
    return obj;
  },
};

export const SendInvitationEmailRequest = {
  encode(message: SendInvitationEmailRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.userId);
    writer.uint32(18).string(message.invitedByUserId);
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(34).fork()).ldelim();
    }
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): SendInvitationEmailRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSendInvitationEmailRequest } as SendInvitationEmailRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.string();
          break;
        case 2:
          message.invitedByUserId = reader.string();
          break;
        case 4:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        case 5:
          message.apiKey = ApiKey.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SendInvitationEmailRequest {
    const message = { ...baseSendInvitationEmailRequest } as SendInvitationEmailRequest;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = String(object.userId);
    } else {
      message.userId = "";
    }
    if (object.invitedByUserId !== undefined && object.invitedByUserId !== null) {
      message.invitedByUserId = String(object.invitedByUserId);
    } else {
      message.invitedByUserId = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromJSON(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<SendInvitationEmailRequest>): SendInvitationEmailRequest {
    const message = { ...baseSendInvitationEmailRequest } as SendInvitationEmailRequest;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = object.userId;
    } else {
      message.userId = "";
    }
    if (object.invitedByUserId !== undefined && object.invitedByUserId !== null) {
      message.invitedByUserId = object.invitedByUserId;
    } else {
      message.invitedByUserId = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromPartial(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  toJSON(message: SendInvitationEmailRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.invitedByUserId !== undefined && (obj.invitedByUserId = message.invitedByUserId);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    message.apiKey !== undefined && (obj.apiKey = message.apiKey ? ApiKey.toJSON(message.apiKey) : undefined);
    return obj;
  },
};

export const ChangePasswordRequest = {
  encode(message: ChangePasswordRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    writer.uint32(18).string(message.password);
    writer.uint32(26).string(message.newPassword);
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(34).fork()).ldelim();
    }
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ChangePasswordRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseChangePasswordRequest } as ChangePasswordRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.password = reader.string();
          break;
        case 3:
          message.newPassword = reader.string();
          break;
        case 4:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        case 5:
          message.apiKey = ApiKey.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ChangePasswordRequest {
    const message = { ...baseChangePasswordRequest } as ChangePasswordRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.password !== undefined && object.password !== null) {
      message.password = String(object.password);
    } else {
      message.password = "";
    }
    if (object.newPassword !== undefined && object.newPassword !== null) {
      message.newPassword = String(object.newPassword);
    } else {
      message.newPassword = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromJSON(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<ChangePasswordRequest>): ChangePasswordRequest {
    const message = { ...baseChangePasswordRequest } as ChangePasswordRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.password !== undefined && object.password !== null) {
      message.password = object.password;
    } else {
      message.password = "";
    }
    if (object.newPassword !== undefined && object.newPassword !== null) {
      message.newPassword = object.newPassword;
    } else {
      message.newPassword = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromPartial(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  toJSON(message: ChangePasswordRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.password !== undefined && (obj.password = message.password);
    message.newPassword !== undefined && (obj.newPassword = message.newPassword);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    message.apiKey !== undefined && (obj.apiKey = message.apiKey ? ApiKey.toJSON(message.apiKey) : undefined);
    return obj;
  },
};

export const RequestPasswordChangeRequest = {
  encode(message: RequestPasswordChangeRequest, writer: Writer = Writer.create()): Writer {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.email !== undefined) {
      writer.uint32(18).string(message.email);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): RequestPasswordChangeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRequestPasswordChangeRequest } as RequestPasswordChangeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.email = reader.string();
          break;
        case 3:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        case 4:
          message.apiKey = ApiKey.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RequestPasswordChangeRequest {
    const message = { ...baseRequestPasswordChangeRequest } as RequestPasswordChangeRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = undefined;
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = String(object.email);
    } else {
      message.email = undefined;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromJSON(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<RequestPasswordChangeRequest>): RequestPasswordChangeRequest {
    const message = { ...baseRequestPasswordChangeRequest } as RequestPasswordChangeRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = undefined;
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = undefined;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromPartial(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  toJSON(message: RequestPasswordChangeRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.email !== undefined && (obj.email = message.email);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    message.apiKey !== undefined && (obj.apiKey = message.apiKey ? ApiKey.toJSON(message.apiKey) : undefined);
    return obj;
  },
};

export const ConfirmPasswordChangeRequest = {
  encode(message: ConfirmPasswordChangeRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.name);
    writer.uint32(18).string(message.activationCode);
    writer.uint32(26).string(message.password);
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(34).fork()).ldelim();
    }
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ConfirmPasswordChangeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConfirmPasswordChangeRequest } as ConfirmPasswordChangeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.activationCode = reader.string();
          break;
        case 3:
          message.password = reader.string();
          break;
        case 4:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        case 5:
          message.apiKey = ApiKey.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConfirmPasswordChangeRequest {
    const message = { ...baseConfirmPasswordChangeRequest } as ConfirmPasswordChangeRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.activationCode !== undefined && object.activationCode !== null) {
      message.activationCode = String(object.activationCode);
    } else {
      message.activationCode = "";
    }
    if (object.password !== undefined && object.password !== null) {
      message.password = String(object.password);
    } else {
      message.password = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromJSON(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<ConfirmPasswordChangeRequest>): ConfirmPasswordChangeRequest {
    const message = { ...baseConfirmPasswordChangeRequest } as ConfirmPasswordChangeRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.activationCode !== undefined && object.activationCode !== null) {
      message.activationCode = object.activationCode;
    } else {
      message.activationCode = "";
    }
    if (object.password !== undefined && object.password !== null) {
      message.password = object.password;
    } else {
      message.password = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromPartial(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  toJSON(message: ConfirmPasswordChangeRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.activationCode !== undefined && (obj.activationCode = message.activationCode);
    message.password !== undefined && (obj.password = message.password);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    message.apiKey !== undefined && (obj.apiKey = message.apiKey ? ApiKey.toJSON(message.apiKey) : undefined);
    return obj;
  },
};

export const ChangeEmailRequest = {
  encode(message: ChangeEmailRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    writer.uint32(18).string(message.email);
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ChangeEmailRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseChangeEmailRequest } as ChangeEmailRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.email = reader.string();
          break;
        case 3:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        case 4:
          message.apiKey = ApiKey.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ChangeEmailRequest {
    const message = { ...baseChangeEmailRequest } as ChangeEmailRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = String(object.email);
    } else {
      message.email = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromJSON(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<ChangeEmailRequest>): ChangeEmailRequest {
    const message = { ...baseChangeEmailRequest } as ChangeEmailRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromPartial(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  toJSON(message: ChangeEmailRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.email !== undefined && (obj.email = message.email);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    message.apiKey !== undefined && (obj.apiKey = message.apiKey ? ApiKey.toJSON(message.apiKey) : undefined);
    return obj;
  },
};

export const ConfirmEmailChangeRequest = {
  encode(message: ConfirmEmailChangeRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.name);
    writer.uint32(18).string(message.activationCode);
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ConfirmEmailChangeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConfirmEmailChangeRequest } as ConfirmEmailChangeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.activationCode = reader.string();
          break;
        case 3:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        case 4:
          message.apiKey = ApiKey.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConfirmEmailChangeRequest {
    const message = { ...baseConfirmEmailChangeRequest } as ConfirmEmailChangeRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.activationCode !== undefined && object.activationCode !== null) {
      message.activationCode = String(object.activationCode);
    } else {
      message.activationCode = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromJSON(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<ConfirmEmailChangeRequest>): ConfirmEmailChangeRequest {
    const message = { ...baseConfirmEmailChangeRequest } as ConfirmEmailChangeRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.activationCode !== undefined && object.activationCode !== null) {
      message.activationCode = object.activationCode;
    } else {
      message.activationCode = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromPartial(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  toJSON(message: ConfirmEmailChangeRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.activationCode !== undefined && (obj.activationCode = message.activationCode);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    message.apiKey !== undefined && (obj.apiKey = message.apiKey ? ApiKey.toJSON(message.apiKey) : undefined);
    return obj;
  },
};

export const UnregisterRequest = {
  encode(message: UnregisterRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(18).fork()).ldelim();
    }
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): UnregisterRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUnregisterRequest } as UnregisterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        case 3:
          message.apiKey = ApiKey.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UnregisterRequest {
    const message = { ...baseUnregisterRequest } as UnregisterRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromJSON(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<UnregisterRequest>): UnregisterRequest {
    const message = { ...baseUnregisterRequest } as UnregisterRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromPartial(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  toJSON(message: UnregisterRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    message.apiKey !== undefined && (obj.apiKey = message.apiKey ? ApiKey.toJSON(message.apiKey) : undefined);
    return obj;
  },
};

export const Deleted = {
  encode(message: Deleted, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Deleted {
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

export const PasswordChanged = {
  encode(message: PasswordChanged, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    writer.uint32(18).string(message.passwordHash);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PasswordChanged {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePasswordChanged } as PasswordChanged;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.passwordHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PasswordChanged {
    const message = { ...basePasswordChanged } as PasswordChanged;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.passwordHash !== undefined && object.passwordHash !== null) {
      message.passwordHash = String(object.passwordHash);
    } else {
      message.passwordHash = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<PasswordChanged>): PasswordChanged {
    const message = { ...basePasswordChanged } as PasswordChanged;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.passwordHash !== undefined && object.passwordHash !== null) {
      message.passwordHash = object.passwordHash;
    } else {
      message.passwordHash = "";
    }
    return message;
  },
  toJSON(message: PasswordChanged): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.passwordHash !== undefined && (obj.passwordHash = message.passwordHash);
    return obj;
  },
};

export const PasswordChangeRequested = {
  encode(message: PasswordChangeRequested, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PasswordChangeRequested {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePasswordChangeRequested } as PasswordChangeRequested;
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
  fromJSON(object: any): PasswordChangeRequested {
    const message = { ...basePasswordChangeRequested } as PasswordChangeRequested;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<PasswordChangeRequested>): PasswordChangeRequested {
    const message = { ...basePasswordChangeRequested } as PasswordChangeRequested;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
  toJSON(message: PasswordChangeRequested): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
};

export const EmailChangeRequested = {
  encode(message: EmailChangeRequested, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    writer.uint32(18).string(message.activationCode);
    writer.uint32(26).string(message.newEmail);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): EmailChangeRequested {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEmailChangeRequested } as EmailChangeRequested;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.activationCode = reader.string();
          break;
        case 3:
          message.newEmail = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EmailChangeRequested {
    const message = { ...baseEmailChangeRequested } as EmailChangeRequested;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.activationCode !== undefined && object.activationCode !== null) {
      message.activationCode = String(object.activationCode);
    } else {
      message.activationCode = "";
    }
    if (object.newEmail !== undefined && object.newEmail !== null) {
      message.newEmail = String(object.newEmail);
    } else {
      message.newEmail = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<EmailChangeRequested>): EmailChangeRequested {
    const message = { ...baseEmailChangeRequested } as EmailChangeRequested;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.activationCode !== undefined && object.activationCode !== null) {
      message.activationCode = object.activationCode;
    } else {
      message.activationCode = "";
    }
    if (object.newEmail !== undefined && object.newEmail !== null) {
      message.newEmail = object.newEmail;
    } else {
      message.newEmail = "";
    }
    return message;
  },
  toJSON(message: EmailChangeRequested): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.activationCode !== undefined && (obj.activationCode = message.activationCode);
    message.newEmail !== undefined && (obj.newEmail = message.newEmail);
    return obj;
  },
};

export const EmailChangeConfirmed = {
  encode(message: EmailChangeConfirmed, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    writer.uint32(18).string(message.email);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): EmailChangeConfirmed {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEmailChangeConfirmed } as EmailChangeConfirmed;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.email = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EmailChangeConfirmed {
    const message = { ...baseEmailChangeConfirmed } as EmailChangeConfirmed;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = String(object.email);
    } else {
      message.email = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<EmailChangeConfirmed>): EmailChangeConfirmed {
    const message = { ...baseEmailChangeConfirmed } as EmailChangeConfirmed;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = "";
    }
    return message;
  },
  toJSON(message: EmailChangeConfirmed): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.email !== undefined && (obj.email = message.email);
    return obj;
  },
};

export const UserList = {
  encode(message: UserList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      User.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(16).uint32(message.totalCount);
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): UserList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUserList } as UserList;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(User.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalCount = reader.uint32();
          break;
        case 3:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        case 4:
          message.apiKey = ApiKey.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UserList {
    const message = { ...baseUserList } as UserList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(User.fromJSON(e));
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
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromJSON(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<UserList>): UserList {
    const message = { ...baseUserList } as UserList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(User.fromPartial(e));
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
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromPartial(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  toJSON(message: UserList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map(e => e ? User.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    message.apiKey !== undefined && (obj.apiKey = message.apiKey ? ApiKey.toJSON(message.apiKey) : undefined);
    return obj;
  },
};

export const Activate = {
  encode(message: Activate, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Activate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseActivate } as Activate;
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
  fromJSON(object: any): Activate {
    const message = { ...baseActivate } as Activate;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Activate>): Activate {
    const message = { ...baseActivate } as Activate;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
  toJSON(message: Activate): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
};

export const FindByRoleRequest = {
  encode(message: FindByRoleRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.role);
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): FindByRoleRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFindByRoleRequest } as FindByRoleRequest;
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
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        case 4:
          message.apiKey = ApiKey.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FindByRoleRequest {
    const message = { ...baseFindByRoleRequest } as FindByRoleRequest;
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
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromJSON(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<FindByRoleRequest>): FindByRoleRequest {
    const message = { ...baseFindByRoleRequest } as FindByRoleRequest;
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
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    if (object.apiKey !== undefined && object.apiKey !== null) {
      message.apiKey = ApiKey.fromPartial(object.apiKey);
    } else {
      message.apiKey = undefined;
    }
    return message;
  },
  toJSON(message: FindByRoleRequest): unknown {
    const obj: any = {};
    message.role !== undefined && (obj.role = message.role);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    message.apiKey !== undefined && (obj.apiKey = message.apiKey ? ApiKey.toJSON(message.apiKey) : undefined);
    return obj;
  },
};

export const User = {
  encode(message: User, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    if (message.meta !== undefined && message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.name);
    writer.uint32(34).string(message.firstName);
    writer.uint32(42).string(message.lastName);
    writer.uint32(50).string(message.email);
    writer.uint32(58).string(message.newEmail);
    writer.uint32(64).bool(message.active);
    writer.uint32(74).string(message.activationCode);
    writer.uint32(82).string(message.password);
    writer.uint32(90).string(message.passwordHash);
    for (const v of message.roleAssociations) {
      RoleAssociation.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    writer.uint32(106).string(message.timezoneId);
    writer.uint32(114).string(message.localeId);
    writer.uint32(122).string(message.defaultScope);
    writer.uint32(128).bool(message.unauthenticated);
    writer.uint32(136).bool(message.guest);
    if (message.image !== undefined && message.image !== undefined) {
      Image.encode(message.image, writer.uint32(146).fork()).ldelim();
    }
    writer.uint32(152).int32(message.userType);
    writer.uint32(160).bool(message.invite);
    writer.uint32(170).string(message.invitedByUserName);
    writer.uint32(178).string(message.invitedByUserFirstName);
    writer.uint32(186).string(message.invitedByUserLastName);
    for (const v of message.tokens) {
      Tokens.encode(v!, writer.uint32(194).fork()).ldelim();
    }
    writer.uint32(201).double(message.lastLogin);
    writer.uint32(209).double(message.lastAccess);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): User {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUser } as User;
    message.roleAssociations = [];
    message.tokens = [];
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
          message.firstName = reader.string();
          break;
        case 5:
          message.lastName = reader.string();
          break;
        case 6:
          message.email = reader.string();
          break;
        case 7:
          message.newEmail = reader.string();
          break;
        case 8:
          message.active = reader.bool();
          break;
        case 9:
          message.activationCode = reader.string();
          break;
        case 10:
          message.password = reader.string();
          break;
        case 11:
          message.passwordHash = reader.string();
          break;
        case 12:
          message.roleAssociations.push(RoleAssociation.decode(reader, reader.uint32()));
          break;
        case 13:
          message.timezoneId = reader.string();
          break;
        case 14:
          message.localeId = reader.string();
          break;
        case 15:
          message.defaultScope = reader.string();
          break;
        case 16:
          message.unauthenticated = reader.bool();
          break;
        case 17:
          message.guest = reader.bool();
          break;
        case 18:
          message.image = Image.decode(reader, reader.uint32());
          break;
        case 19:
          message.userType = reader.int32() as any;
          break;
        case 20:
          message.invite = reader.bool();
          break;
        case 21:
          message.invitedByUserName = reader.string();
          break;
        case 22:
          message.invitedByUserFirstName = reader.string();
          break;
        case 23:
          message.invitedByUserLastName = reader.string();
          break;
        case 24:
          message.tokens.push(Tokens.decode(reader, reader.uint32()));
          break;
        case 25:
          message.lastLogin = reader.double();
          break;
        case 26:
          message.lastAccess = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): User {
    const message = { ...baseUser } as User;
    message.roleAssociations = [];
    message.tokens = [];
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
    if (object.firstName !== undefined && object.firstName !== null) {
      message.firstName = String(object.firstName);
    } else {
      message.firstName = "";
    }
    if (object.lastName !== undefined && object.lastName !== null) {
      message.lastName = String(object.lastName);
    } else {
      message.lastName = "";
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = String(object.email);
    } else {
      message.email = "";
    }
    if (object.newEmail !== undefined && object.newEmail !== null) {
      message.newEmail = String(object.newEmail);
    } else {
      message.newEmail = "";
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = Boolean(object.active);
    } else {
      message.active = false;
    }
    if (object.activationCode !== undefined && object.activationCode !== null) {
      message.activationCode = String(object.activationCode);
    } else {
      message.activationCode = "";
    }
    if (object.password !== undefined && object.password !== null) {
      message.password = String(object.password);
    } else {
      message.password = "";
    }
    if (object.passwordHash !== undefined && object.passwordHash !== null) {
      message.passwordHash = String(object.passwordHash);
    } else {
      message.passwordHash = "";
    }
    if (object.roleAssociations !== undefined && object.roleAssociations !== null) {
      for (const e of object.roleAssociations) {
        message.roleAssociations.push(RoleAssociation.fromJSON(e));
      }
    }
    if (object.timezoneId !== undefined && object.timezoneId !== null) {
      message.timezoneId = String(object.timezoneId);
    } else {
      message.timezoneId = "";
    }
    if (object.localeId !== undefined && object.localeId !== null) {
      message.localeId = String(object.localeId);
    } else {
      message.localeId = "";
    }
    if (object.defaultScope !== undefined && object.defaultScope !== null) {
      message.defaultScope = String(object.defaultScope);
    } else {
      message.defaultScope = "";
    }
    if (object.unauthenticated !== undefined && object.unauthenticated !== null) {
      message.unauthenticated = Boolean(object.unauthenticated);
    } else {
      message.unauthenticated = false;
    }
    if (object.guest !== undefined && object.guest !== null) {
      message.guest = Boolean(object.guest);
    } else {
      message.guest = false;
    }
    if (object.image !== undefined && object.image !== null) {
      message.image = Image.fromJSON(object.image);
    } else {
      message.image = undefined;
    }
    if (object.userType !== undefined && object.userType !== null) {
      message.userType = userTypeFromJSON(object.userType);
    } else {
      message.userType = 0;
    }
    if (object.invite !== undefined && object.invite !== null) {
      message.invite = Boolean(object.invite);
    } else {
      message.invite = false;
    }
    if (object.invitedByUserName !== undefined && object.invitedByUserName !== null) {
      message.invitedByUserName = String(object.invitedByUserName);
    } else {
      message.invitedByUserName = "";
    }
    if (object.invitedByUserFirstName !== undefined && object.invitedByUserFirstName !== null) {
      message.invitedByUserFirstName = String(object.invitedByUserFirstName);
    } else {
      message.invitedByUserFirstName = "";
    }
    if (object.invitedByUserLastName !== undefined && object.invitedByUserLastName !== null) {
      message.invitedByUserLastName = String(object.invitedByUserLastName);
    } else {
      message.invitedByUserLastName = "";
    }
    if (object.tokens !== undefined && object.tokens !== null) {
      for (const e of object.tokens) {
        message.tokens.push(Tokens.fromJSON(e));
      }
    }
    if (object.lastLogin !== undefined && object.lastLogin !== null) {
      message.lastLogin = Number(object.lastLogin);
    } else {
      message.lastLogin = 0;
    }
    if (object.lastAccess !== undefined && object.lastAccess !== null) {
      message.lastAccess = Number(object.lastAccess);
    } else {
      message.lastAccess = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<User>): User {
    const message = { ...baseUser } as User;
    message.roleAssociations = [];
    message.tokens = [];
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
    if (object.firstName !== undefined && object.firstName !== null) {
      message.firstName = object.firstName;
    } else {
      message.firstName = "";
    }
    if (object.lastName !== undefined && object.lastName !== null) {
      message.lastName = object.lastName;
    } else {
      message.lastName = "";
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = "";
    }
    if (object.newEmail !== undefined && object.newEmail !== null) {
      message.newEmail = object.newEmail;
    } else {
      message.newEmail = "";
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    } else {
      message.active = false;
    }
    if (object.activationCode !== undefined && object.activationCode !== null) {
      message.activationCode = object.activationCode;
    } else {
      message.activationCode = "";
    }
    if (object.password !== undefined && object.password !== null) {
      message.password = object.password;
    } else {
      message.password = "";
    }
    if (object.passwordHash !== undefined && object.passwordHash !== null) {
      message.passwordHash = object.passwordHash;
    } else {
      message.passwordHash = "";
    }
    if (object.roleAssociations !== undefined && object.roleAssociations !== null) {
      for (const e of object.roleAssociations) {
        message.roleAssociations.push(RoleAssociation.fromPartial(e));
      }
    }
    if (object.timezoneId !== undefined && object.timezoneId !== null) {
      message.timezoneId = object.timezoneId;
    } else {
      message.timezoneId = "";
    }
    if (object.localeId !== undefined && object.localeId !== null) {
      message.localeId = object.localeId;
    } else {
      message.localeId = "";
    }
    if (object.defaultScope !== undefined && object.defaultScope !== null) {
      message.defaultScope = object.defaultScope;
    } else {
      message.defaultScope = "";
    }
    if (object.unauthenticated !== undefined && object.unauthenticated !== null) {
      message.unauthenticated = object.unauthenticated;
    } else {
      message.unauthenticated = false;
    }
    if (object.guest !== undefined && object.guest !== null) {
      message.guest = object.guest;
    } else {
      message.guest = false;
    }
    if (object.image !== undefined && object.image !== null) {
      message.image = Image.fromPartial(object.image);
    } else {
      message.image = undefined;
    }
    if (object.userType !== undefined && object.userType !== null) {
      message.userType = object.userType;
    } else {
      message.userType = 0;
    }
    if (object.invite !== undefined && object.invite !== null) {
      message.invite = object.invite;
    } else {
      message.invite = false;
    }
    if (object.invitedByUserName !== undefined && object.invitedByUserName !== null) {
      message.invitedByUserName = object.invitedByUserName;
    } else {
      message.invitedByUserName = "";
    }
    if (object.invitedByUserFirstName !== undefined && object.invitedByUserFirstName !== null) {
      message.invitedByUserFirstName = object.invitedByUserFirstName;
    } else {
      message.invitedByUserFirstName = "";
    }
    if (object.invitedByUserLastName !== undefined && object.invitedByUserLastName !== null) {
      message.invitedByUserLastName = object.invitedByUserLastName;
    } else {
      message.invitedByUserLastName = "";
    }
    if (object.tokens !== undefined && object.tokens !== null) {
      for (const e of object.tokens) {
        message.tokens.push(Tokens.fromPartial(e));
      }
    }
    if (object.lastLogin !== undefined && object.lastLogin !== null) {
      message.lastLogin = object.lastLogin;
    } else {
      message.lastLogin = 0;
    }
    if (object.lastAccess !== undefined && object.lastAccess !== null) {
      message.lastAccess = object.lastAccess;
    } else {
      message.lastAccess = 0;
    }
    return message;
  },
  toJSON(message: User): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.firstName !== undefined && (obj.firstName = message.firstName);
    message.lastName !== undefined && (obj.lastName = message.lastName);
    message.email !== undefined && (obj.email = message.email);
    message.newEmail !== undefined && (obj.newEmail = message.newEmail);
    message.active !== undefined && (obj.active = message.active);
    message.activationCode !== undefined && (obj.activationCode = message.activationCode);
    message.password !== undefined && (obj.password = message.password);
    message.passwordHash !== undefined && (obj.passwordHash = message.passwordHash);
    if (message.roleAssociations) {
      obj.roleAssociations = message.roleAssociations.map(e => e ? RoleAssociation.toJSON(e) : undefined);
    } else {
      obj.roleAssociations = [];
    }
    message.timezoneId !== undefined && (obj.timezoneId = message.timezoneId);
    message.localeId !== undefined && (obj.localeId = message.localeId);
    message.defaultScope !== undefined && (obj.defaultScope = message.defaultScope);
    message.unauthenticated !== undefined && (obj.unauthenticated = message.unauthenticated);
    message.guest !== undefined && (obj.guest = message.guest);
    message.image !== undefined && (obj.image = message.image ? Image.toJSON(message.image) : undefined);
    message.userType !== undefined && (obj.userType = userTypeToJSON(message.userType));
    message.invite !== undefined && (obj.invite = message.invite);
    message.invitedByUserName !== undefined && (obj.invitedByUserName = message.invitedByUserName);
    message.invitedByUserFirstName !== undefined && (obj.invitedByUserFirstName = message.invitedByUserFirstName);
    message.invitedByUserLastName !== undefined && (obj.invitedByUserLastName = message.invitedByUserLastName);
    if (message.tokens) {
      obj.tokens = message.tokens.map(e => e ? Tokens.toJSON(e) : undefined);
    } else {
      obj.tokens = [];
    }
    message.lastLogin !== undefined && (obj.lastLogin = message.lastLogin);
    message.lastAccess !== undefined && (obj.lastAccess = message.lastAccess);
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