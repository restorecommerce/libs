/* eslint-disable */
import { HierarchicalScope, RoleAssociation, Tokens } from '../../io/restorecommerce/auth';
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
  tokenName: string;
}

export interface HierarchicalScopesResponse {
  subjectId: string;
  hierarchicalScopes: HierarchicalScope[];
  tokenName: string;
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
  tokenName: "",
};

const baseHierarchicalScopesResponse: object = {
  subjectId: "",
  tokenName: "",
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

const baseSubject: object = {
  id: "",
  scope: "",
  unauthenticated: false,
  tokenName: "",
};

const baseApiKey: object = {
  value: "",
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

}

export enum UserType {
  PRIVATE_USER = 0,
  ORG_USER = 1,
  GUEST = 2,
  TECHNICAL_USER = 3,
  UNRECOGNIZED = -1,
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
};

export const HierarchicalScopesRequest = {
  encode(message: HierarchicalScopesRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.subjectId);
    writer.uint32(18).string(message.tokenName);
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

export const HierarchicalScopesResponse = {
  encode(message: HierarchicalScopesResponse, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.subjectId);
    for (const v of message.hierarchicalScopes) {
      HierarchicalScope.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.tokenName);
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};
