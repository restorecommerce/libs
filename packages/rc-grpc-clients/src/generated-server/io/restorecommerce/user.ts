/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { Any, protoMetadata as protoMetadata7 } from "../../google/protobuf/any";
import { Attribute, protoMetadata as protoMetadata4 } from "./attribute";
import { protoMetadata as protoMetadata3, RoleAssociation, Subject, Tokens } from "./auth";
import { Image, protoMetadata as protoMetadata5 } from "./image";
import { protoMetadata as protoMetadata11 } from "./locale";
import { Meta, protoMetadata as protoMetadata2 } from "./meta";
import { KafkaSubscription, protoMetadata as protoMetadata9, Resolver } from "./options";
import { DeleteRequest, DeleteResponse, protoMetadata as protoMetadata1, ReadRequest } from "./resource_base";
import { protoMetadata as protoMetadata8, Role } from "./role";
import { OperationStatus, OperationStatusObj, protoMetadata as protoMetadata6, Status } from "./status";
import { protoMetadata as protoMetadata10 } from "./timezone";

export const protobufPackage = "io.restorecommerce.user";

export enum UserType {
  ORG_USER = "ORG_USER",
  INDIVIDUAL_USER = "INDIVIDUAL_USER",
  GUEST = "GUEST",
  TECHNICAL_USER = "TECHNICAL_USER",
  UNRECOGNIZED = "UNRECOGNIZED",
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
    case UserType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function userTypeToNumber(object: UserType): number {
  switch (object) {
    case UserType.ORG_USER:
      return 0;
    case UserType.INDIVIDUAL_USER:
      return 1;
    case UserType.GUEST:
      return 2;
    case UserType.TECHNICAL_USER:
      return 3;
    case UserType.UNRECOGNIZED:
    default:
      return -1;
  }
}

/**
 * Request to verify password and retrieve the user's info.
 * Either name or email can be provided.
 */
export interface LoginRequest {
  /** User name or email */
  identifier: string;
  /** Raw password */
  password?: string | undefined;
  token?: string | undefined;
}

export interface OrgIDRequest {
  org_ids: string[];
  subject?: Subject;
}

export interface DeleteUsersByOrgResponse {
  user_ids: string[];
  operation_status?: OperationStatus;
}

export interface FindRequest {
  /** / User ID */
  id?: string | undefined;
  name?: string | undefined;
  email?: string | undefined;
  subject?: Subject;
}

export interface FindByTokenRequest {
  token: string;
}

export interface RegisterRequest {
  id?: string | undefined;
  guest?: boolean | undefined;
  meta?: Meta | undefined;
  name?: string | undefined;
  first_name?: string | undefined;
  last_name?: string | undefined;
  email?: string | undefined;
  password?: string | undefined;
  timezone_id?: string | undefined;
  locale_id?:
    | string
    | undefined;
  /** default hierarchical scope */
  default_scope?: string | undefined;
  user_type?: UserType | undefined;
  captcha_code?: string | undefined;
}

export interface ActivateRequest {
  /** / user name or email */
  identifier: string;
  activation_code: string;
  subject?: Subject;
}

export interface ConfirmUserInvitationRequest {
  /** user name or email */
  identifier: string;
  password: string;
  activation_code: string;
  subject?: Subject;
}

export interface SendInvitationEmailRequest {
  /** user name or email */
  identifier: string;
  invited_by_user_identifier: string;
  subject?: Subject;
}

export interface ChangePasswordRequest {
  password: string;
  new_password: string;
  subject?: Subject;
}

export interface RequestPasswordChangeRequest {
  /** user name or email */
  identifier: string;
  subject?: Subject;
}

export interface ConfirmPasswordChangeRequest {
  /** user name or email */
  identifier: string;
  activation_code: string;
  password: string;
  subject?: Subject;
}

export interface ChangeEmailRequest {
  /** user name or email */
  identifier: string;
  new_email: string;
  subject?: Subject;
}

export interface ConfirmEmailChangeRequest {
  /** user name or email */
  identifier: string;
  activation_code: string;
  subject?: Subject;
}

export interface UnregisterRequest {
  /** / User ID */
  identifier: string;
  subject?: Subject;
}

export interface SendActivationEmailRequest {
  /** / User name or email */
  identifier: string;
  subject?: Subject;
}

/**
 * User deletion event.
 * Send when a user was deleted or unregistered.
 *
 * Events:
 * usersDeleted,
 * unregistered,
 */
export interface Deleted {
  id: string;
}

/**
 * User password changed event.
 *
 * Events:
 * passwordChanged,
 */
export interface PasswordChanged {
  /** / User ID */
  id: string;
  password_hash: string;
}

export interface PasswordChangeRequested {
  /** User ID */
  id: string;
}

/** User email id changed event. */
export interface EmailChangeRequested {
  id: string;
  activation_code: string;
  new_email: string;
}

export interface EmailChangeConfirmed {
  /** / User ID */
  id: string;
  email: string;
}

/** A list of User. */
export interface UserList {
  items: User[];
  total_count?: number | undefined;
  subject?: Subject;
}

export interface UserListWithRoleResponse {
  items: UserRoleResponse[];
  total_count: number;
  operation_status?: OperationStatus;
}

export interface UserRoleResponse {
  payload?: UserRole;
  status?: Status;
}

export interface UserListResponse {
  items: UserResponse[];
  total_count: number;
  operation_status?: OperationStatus;
}

export interface UserResponse {
  payload?: User;
  status?: Status;
}

/** User activation request. */
export interface Activate {
  /** / User ID */
  id: string;
}

export interface FindByRoleRequest {
  role: string;
  attributes: Attribute[];
  subject?: Subject;
}

/** A User resource. */
export interface User {
  /** / User ID, unique, key */
  id?: string | undefined;
  meta?:
    | Meta
    | undefined;
  /** The name of the user, can be used for login */
  name?: string | undefined;
  first_name?: string | undefined;
  last_name?:
    | string
    | undefined;
  /** / Email address, can be used for login */
  email?:
    | string
    | undefined;
  /** / New email address; set by `requestEmailChange` and overrides actual email upon `confirmEmailChange` */
  new_email?:
    | string
    | undefined;
  /** / If the user was activated via the activation process */
  active?:
    | boolean
    | undefined;
  /** / Activation code used in the activation process */
  activation_code?:
    | string
    | undefined;
  /** / Raw password, not stored */
  password?:
    | string
    | undefined;
  /** / Encrypted password, stored */
  password_hash?:
    | string
    | undefined;
  /** A user can have multiple roles and different attributes coupled with each role */
  role_associations: RoleAssociation[];
  /** timezone_id specifications */
  timezone_id?:
    | string
    | undefined;
  /** locale specifications */
  locale_id?:
    | string
    | undefined;
  /** default hierarchical scope */
  default_scope?:
    | string
    | undefined;
  /** true in case in case of `register`; set to false after activation */
  unauthenticated?:
    | boolean
    | undefined;
  /** / Is the user a guest. A guest is a automatically generated user which can later be turned in a non-guest user. */
  guest?: boolean | undefined;
  image?: Image | undefined;
  user_type?:
    | UserType
    | undefined;
  /** For user invitation */
  invite?:
    | boolean
    | undefined;
  /** user who is inviting */
  invited_by_user_name?:
    | string
    | undefined;
  /** First name of user inviting */
  invited_by_user_first_name?:
    | string
    | undefined;
  /** Last name of user inviting */
  invited_by_user_last_name?: string | undefined;
  tokens: Tokens[];
  last_access?:
    | number
    | undefined;
  /** / additional data */
  data?: Any | undefined;
}

/** A User resource with role */
export interface UserRole {
  /** / User ID, unique, key */
  id: string;
  meta?: Meta;
  /** The name of the user, can be used for login */
  name: string;
  first_name: string;
  last_name: string;
  /** / Email address, can be used for login */
  email: string;
  /** / New email address; set by `requestEmailChange` and overrides actual email upon `confirmEmailChange` */
  new_email: string;
  /** / If the user was activated via the activation process */
  active: boolean;
  /** / Activation code used in the activation process */
  activation_code: string;
  /** / Raw password, not stored */
  password: string;
  /** / Encrypted password, stored */
  password_hash: string;
  /** A user can have multiple roles and different attributes coupled with each role */
  role_associations: RoleAssociation[];
  /** timezone_id specifications */
  timezone_id: string;
  /** locale specifications */
  locale_id: string;
  /** default hierarchical scope */
  default_scope: string;
  /** true in case in case of `register`; set to false after activation */
  unauthenticated: boolean;
  /** / Is the user a guest. A guest is a automatically generated user which can later be turned in a non-guest user. */
  guest: boolean;
  image?: Image;
  user_type: UserType;
  /** For user invitation */
  invite: boolean;
  /** user who is inviting */
  invited_by_user_name: string;
  /** First name of user inviting */
  invited_by_user_first_name: string;
  /** Last name of user inviting */
  invited_by_user_last_name: string;
  tokens: Tokens[];
  last_access: number;
  /** / additional data */
  data?: Any;
  roles: Role[];
}

function createBaseLoginRequest(): LoginRequest {
  return { identifier: "", password: undefined, token: undefined };
}

export const LoginRequest = {
  encode(message: LoginRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    if (message.password !== undefined) {
      writer.uint32(18).string(message.password);
    }
    if (message.token !== undefined) {
      writer.uint32(26).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.identifier = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.password = reader.string();
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

  fromJSON(object: any): LoginRequest {
    return {
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
      password: isSet(object.password) ? String(object.password) : undefined,
      token: isSet(object.token) ? String(object.token) : undefined,
    };
  },

  toJSON(message: LoginRequest): unknown {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.password !== undefined && (obj.password = message.password);
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  create(base?: DeepPartial<LoginRequest>): LoginRequest {
    return LoginRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<LoginRequest>): LoginRequest {
    const message = createBaseLoginRequest();
    message.identifier = object.identifier ?? "";
    message.password = object.password ?? undefined;
    message.token = object.token ?? undefined;
    return message;
  },
};

function createBaseOrgIDRequest(): OrgIDRequest {
  return { org_ids: [], subject: undefined };
}

export const OrgIDRequest = {
  encode(message: OrgIDRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.org_ids) {
      writer.uint32(10).string(v!);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrgIDRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrgIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.org_ids.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OrgIDRequest {
    return {
      org_ids: Array.isArray(object?.org_ids) ? object.org_ids.map((e: any) => String(e)) : [],
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: OrgIDRequest): unknown {
    const obj: any = {};
    if (message.org_ids) {
      obj.org_ids = message.org_ids.map((e) => e);
    } else {
      obj.org_ids = [];
    }
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<OrgIDRequest>): OrgIDRequest {
    return OrgIDRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<OrgIDRequest>): OrgIDRequest {
    const message = createBaseOrgIDRequest();
    message.org_ids = object.org_ids?.map((e) => e) || [];
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseDeleteUsersByOrgResponse(): DeleteUsersByOrgResponse {
  return { user_ids: [], operation_status: undefined };
}

export const DeleteUsersByOrgResponse = {
  encode(message: DeleteUsersByOrgResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.user_ids) {
      writer.uint32(10).string(v!);
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(message.operation_status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteUsersByOrgResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteUsersByOrgResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user_ids.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.operation_status = OperationStatus.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteUsersByOrgResponse {
    return {
      user_ids: Array.isArray(object?.user_ids) ? object.user_ids.map((e: any) => String(e)) : [],
      operation_status: isSet(object.operation_status) ? OperationStatus.fromJSON(object.operation_status) : undefined,
    };
  },

  toJSON(message: DeleteUsersByOrgResponse): unknown {
    const obj: any = {};
    if (message.user_ids) {
      obj.user_ids = message.user_ids.map((e) => e);
    } else {
      obj.user_ids = [];
    }
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status ? OperationStatus.toJSON(message.operation_status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<DeleteUsersByOrgResponse>): DeleteUsersByOrgResponse {
    return DeleteUsersByOrgResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DeleteUsersByOrgResponse>): DeleteUsersByOrgResponse {
    const message = createBaseDeleteUsersByOrgResponse();
    message.user_ids = object.user_ids?.map((e) => e) || [];
    message.operation_status = (object.operation_status !== undefined && object.operation_status !== null)
      ? OperationStatus.fromPartial(object.operation_status)
      : undefined;
    return message;
  },
};

function createBaseFindRequest(): FindRequest {
  return { id: undefined, name: undefined, email: undefined, subject: undefined };
}

export const FindRequest = {
  encode(message: FindRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    if (message.email !== undefined) {
      writer.uint32(26).string(message.email);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindRequest();
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

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.email = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FindRequest {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      email: isSet(object.email) ? String(object.email) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: FindRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.email !== undefined && (obj.email = message.email);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<FindRequest>): FindRequest {
    return FindRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FindRequest>): FindRequest {
    const message = createBaseFindRequest();
    message.id = object.id ?? undefined;
    message.name = object.name ?? undefined;
    message.email = object.email ?? undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseFindByTokenRequest(): FindByTokenRequest {
  return { token: "" };
}

export const FindByTokenRequest = {
  encode(message: FindByTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindByTokenRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindByTokenRequest();
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

  fromJSON(object: any): FindByTokenRequest {
    return { token: isSet(object.token) ? String(object.token) : "" };
  },

  toJSON(message: FindByTokenRequest): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  create(base?: DeepPartial<FindByTokenRequest>): FindByTokenRequest {
    return FindByTokenRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FindByTokenRequest>): FindByTokenRequest {
    const message = createBaseFindByTokenRequest();
    message.token = object.token ?? "";
    return message;
  },
};

function createBaseRegisterRequest(): RegisterRequest {
  return {
    id: undefined,
    guest: undefined,
    meta: undefined,
    name: undefined,
    first_name: undefined,
    last_name: undefined,
    email: undefined,
    password: undefined,
    timezone_id: undefined,
    locale_id: undefined,
    default_scope: undefined,
    user_type: undefined,
    captcha_code: undefined,
  };
}

export const RegisterRequest = {
  encode(message: RegisterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.guest !== undefined) {
      writer.uint32(16).bool(message.guest);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(26).fork()).ldelim();
    }
    if (message.name !== undefined) {
      writer.uint32(34).string(message.name);
    }
    if (message.first_name !== undefined) {
      writer.uint32(42).string(message.first_name);
    }
    if (message.last_name !== undefined) {
      writer.uint32(50).string(message.last_name);
    }
    if (message.email !== undefined) {
      writer.uint32(58).string(message.email);
    }
    if (message.password !== undefined) {
      writer.uint32(66).string(message.password);
    }
    if (message.timezone_id !== undefined) {
      writer.uint32(74).string(message.timezone_id);
    }
    if (message.locale_id !== undefined) {
      writer.uint32(82).string(message.locale_id);
    }
    if (message.default_scope !== undefined) {
      writer.uint32(90).string(message.default_scope);
    }
    if (message.user_type !== undefined) {
      writer.uint32(96).int32(userTypeToNumber(message.user_type));
    }
    if (message.captcha_code !== undefined) {
      writer.uint32(106).string(message.captcha_code);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterRequest();
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

          message.guest = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.meta = Meta.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.first_name = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.last_name = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.email = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.password = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.timezone_id = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.locale_id = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.default_scope = reader.string();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.user_type = userTypeFromJSON(reader.int32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.captcha_code = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RegisterRequest {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      guest: isSet(object.guest) ? Boolean(object.guest) : undefined,
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      first_name: isSet(object.first_name) ? String(object.first_name) : undefined,
      last_name: isSet(object.last_name) ? String(object.last_name) : undefined,
      email: isSet(object.email) ? String(object.email) : undefined,
      password: isSet(object.password) ? String(object.password) : undefined,
      timezone_id: isSet(object.timezone_id) ? String(object.timezone_id) : undefined,
      locale_id: isSet(object.locale_id) ? String(object.locale_id) : undefined,
      default_scope: isSet(object.default_scope) ? String(object.default_scope) : undefined,
      user_type: isSet(object.user_type) ? userTypeFromJSON(object.user_type) : undefined,
      captcha_code: isSet(object.captcha_code) ? String(object.captcha_code) : undefined,
    };
  },

  toJSON(message: RegisterRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.guest !== undefined && (obj.guest = message.guest);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.first_name !== undefined && (obj.first_name = message.first_name);
    message.last_name !== undefined && (obj.last_name = message.last_name);
    message.email !== undefined && (obj.email = message.email);
    message.password !== undefined && (obj.password = message.password);
    message.timezone_id !== undefined && (obj.timezone_id = message.timezone_id);
    message.locale_id !== undefined && (obj.locale_id = message.locale_id);
    message.default_scope !== undefined && (obj.default_scope = message.default_scope);
    message.user_type !== undefined &&
      (obj.user_type = message.user_type !== undefined ? userTypeToJSON(message.user_type) : undefined);
    message.captcha_code !== undefined && (obj.captcha_code = message.captcha_code);
    return obj;
  },

  create(base?: DeepPartial<RegisterRequest>): RegisterRequest {
    return RegisterRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RegisterRequest>): RegisterRequest {
    const message = createBaseRegisterRequest();
    message.id = object.id ?? undefined;
    message.guest = object.guest ?? undefined;
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    message.name = object.name ?? undefined;
    message.first_name = object.first_name ?? undefined;
    message.last_name = object.last_name ?? undefined;
    message.email = object.email ?? undefined;
    message.password = object.password ?? undefined;
    message.timezone_id = object.timezone_id ?? undefined;
    message.locale_id = object.locale_id ?? undefined;
    message.default_scope = object.default_scope ?? undefined;
    message.user_type = object.user_type ?? undefined;
    message.captcha_code = object.captcha_code ?? undefined;
    return message;
  },
};

function createBaseActivateRequest(): ActivateRequest {
  return { identifier: "", activation_code: "", subject: undefined };
}

export const ActivateRequest = {
  encode(message: ActivateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    if (message.activation_code !== "") {
      writer.uint32(18).string(message.activation_code);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActivateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActivateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.identifier = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.activation_code = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ActivateRequest {
    return {
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
      activation_code: isSet(object.activation_code) ? String(object.activation_code) : "",
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: ActivateRequest): unknown {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.activation_code !== undefined && (obj.activation_code = message.activation_code);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ActivateRequest>): ActivateRequest {
    return ActivateRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ActivateRequest>): ActivateRequest {
    const message = createBaseActivateRequest();
    message.identifier = object.identifier ?? "";
    message.activation_code = object.activation_code ?? "";
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseConfirmUserInvitationRequest(): ConfirmUserInvitationRequest {
  return { identifier: "", password: "", activation_code: "", subject: undefined };
}

export const ConfirmUserInvitationRequest = {
  encode(message: ConfirmUserInvitationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    if (message.activation_code !== "") {
      writer.uint32(26).string(message.activation_code);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmUserInvitationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfirmUserInvitationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.identifier = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.password = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.activation_code = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConfirmUserInvitationRequest {
    return {
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
      password: isSet(object.password) ? String(object.password) : "",
      activation_code: isSet(object.activation_code) ? String(object.activation_code) : "",
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: ConfirmUserInvitationRequest): unknown {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.password !== undefined && (obj.password = message.password);
    message.activation_code !== undefined && (obj.activation_code = message.activation_code);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ConfirmUserInvitationRequest>): ConfirmUserInvitationRequest {
    return ConfirmUserInvitationRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ConfirmUserInvitationRequest>): ConfirmUserInvitationRequest {
    const message = createBaseConfirmUserInvitationRequest();
    message.identifier = object.identifier ?? "";
    message.password = object.password ?? "";
    message.activation_code = object.activation_code ?? "";
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseSendInvitationEmailRequest(): SendInvitationEmailRequest {
  return { identifier: "", invited_by_user_identifier: "", subject: undefined };
}

export const SendInvitationEmailRequest = {
  encode(message: SendInvitationEmailRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    if (message.invited_by_user_identifier !== "") {
      writer.uint32(18).string(message.invited_by_user_identifier);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendInvitationEmailRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendInvitationEmailRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.identifier = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.invited_by_user_identifier = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SendInvitationEmailRequest {
    return {
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
      invited_by_user_identifier: isSet(object.invited_by_user_identifier)
        ? String(object.invited_by_user_identifier)
        : "",
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: SendInvitationEmailRequest): unknown {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.invited_by_user_identifier !== undefined &&
      (obj.invited_by_user_identifier = message.invited_by_user_identifier);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<SendInvitationEmailRequest>): SendInvitationEmailRequest {
    return SendInvitationEmailRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SendInvitationEmailRequest>): SendInvitationEmailRequest {
    const message = createBaseSendInvitationEmailRequest();
    message.identifier = object.identifier ?? "";
    message.invited_by_user_identifier = object.invited_by_user_identifier ?? "";
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseChangePasswordRequest(): ChangePasswordRequest {
  return { password: "", new_password: "", subject: undefined };
}

export const ChangePasswordRequest = {
  encode(message: ChangePasswordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    if (message.new_password !== "") {
      writer.uint32(26).string(message.new_password);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChangePasswordRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChangePasswordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.password = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.new_password = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChangePasswordRequest {
    return {
      password: isSet(object.password) ? String(object.password) : "",
      new_password: isSet(object.new_password) ? String(object.new_password) : "",
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: ChangePasswordRequest): unknown {
    const obj: any = {};
    message.password !== undefined && (obj.password = message.password);
    message.new_password !== undefined && (obj.new_password = message.new_password);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ChangePasswordRequest>): ChangePasswordRequest {
    return ChangePasswordRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ChangePasswordRequest>): ChangePasswordRequest {
    const message = createBaseChangePasswordRequest();
    message.password = object.password ?? "";
    message.new_password = object.new_password ?? "";
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseRequestPasswordChangeRequest(): RequestPasswordChangeRequest {
  return { identifier: "", subject: undefined };
}

export const RequestPasswordChangeRequest = {
  encode(message: RequestPasswordChangeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestPasswordChangeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestPasswordChangeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.identifier = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RequestPasswordChangeRequest {
    return {
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: RequestPasswordChangeRequest): unknown {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<RequestPasswordChangeRequest>): RequestPasswordChangeRequest {
    return RequestPasswordChangeRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RequestPasswordChangeRequest>): RequestPasswordChangeRequest {
    const message = createBaseRequestPasswordChangeRequest();
    message.identifier = object.identifier ?? "";
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseConfirmPasswordChangeRequest(): ConfirmPasswordChangeRequest {
  return { identifier: "", activation_code: "", password: "", subject: undefined };
}

export const ConfirmPasswordChangeRequest = {
  encode(message: ConfirmPasswordChangeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    if (message.activation_code !== "") {
      writer.uint32(18).string(message.activation_code);
    }
    if (message.password !== "") {
      writer.uint32(26).string(message.password);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmPasswordChangeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfirmPasswordChangeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.identifier = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.activation_code = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.password = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConfirmPasswordChangeRequest {
    return {
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
      activation_code: isSet(object.activation_code) ? String(object.activation_code) : "",
      password: isSet(object.password) ? String(object.password) : "",
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: ConfirmPasswordChangeRequest): unknown {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.activation_code !== undefined && (obj.activation_code = message.activation_code);
    message.password !== undefined && (obj.password = message.password);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ConfirmPasswordChangeRequest>): ConfirmPasswordChangeRequest {
    return ConfirmPasswordChangeRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ConfirmPasswordChangeRequest>): ConfirmPasswordChangeRequest {
    const message = createBaseConfirmPasswordChangeRequest();
    message.identifier = object.identifier ?? "";
    message.activation_code = object.activation_code ?? "";
    message.password = object.password ?? "";
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseChangeEmailRequest(): ChangeEmailRequest {
  return { identifier: "", new_email: "", subject: undefined };
}

export const ChangeEmailRequest = {
  encode(message: ChangeEmailRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    if (message.new_email !== "") {
      writer.uint32(18).string(message.new_email);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChangeEmailRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChangeEmailRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.identifier = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.new_email = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChangeEmailRequest {
    return {
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
      new_email: isSet(object.new_email) ? String(object.new_email) : "",
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: ChangeEmailRequest): unknown {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.new_email !== undefined && (obj.new_email = message.new_email);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ChangeEmailRequest>): ChangeEmailRequest {
    return ChangeEmailRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ChangeEmailRequest>): ChangeEmailRequest {
    const message = createBaseChangeEmailRequest();
    message.identifier = object.identifier ?? "";
    message.new_email = object.new_email ?? "";
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseConfirmEmailChangeRequest(): ConfirmEmailChangeRequest {
  return { identifier: "", activation_code: "", subject: undefined };
}

export const ConfirmEmailChangeRequest = {
  encode(message: ConfirmEmailChangeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    if (message.activation_code !== "") {
      writer.uint32(18).string(message.activation_code);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmEmailChangeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfirmEmailChangeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.identifier = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.activation_code = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConfirmEmailChangeRequest {
    return {
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
      activation_code: isSet(object.activation_code) ? String(object.activation_code) : "",
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: ConfirmEmailChangeRequest): unknown {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.activation_code !== undefined && (obj.activation_code = message.activation_code);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ConfirmEmailChangeRequest>): ConfirmEmailChangeRequest {
    return ConfirmEmailChangeRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ConfirmEmailChangeRequest>): ConfirmEmailChangeRequest {
    const message = createBaseConfirmEmailChangeRequest();
    message.identifier = object.identifier ?? "";
    message.activation_code = object.activation_code ?? "";
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseUnregisterRequest(): UnregisterRequest {
  return { identifier: "", subject: undefined };
}

export const UnregisterRequest = {
  encode(message: UnregisterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnregisterRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnregisterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.identifier = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UnregisterRequest {
    return {
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: UnregisterRequest): unknown {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<UnregisterRequest>): UnregisterRequest {
    return UnregisterRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UnregisterRequest>): UnregisterRequest {
    const message = createBaseUnregisterRequest();
    message.identifier = object.identifier ?? "";
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseSendActivationEmailRequest(): SendActivationEmailRequest {
  return { identifier: "", subject: undefined };
}

export const SendActivationEmailRequest = {
  encode(message: SendActivationEmailRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendActivationEmailRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendActivationEmailRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.identifier = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SendActivationEmailRequest {
    return {
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: SendActivationEmailRequest): unknown {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<SendActivationEmailRequest>): SendActivationEmailRequest {
    return SendActivationEmailRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SendActivationEmailRequest>): SendActivationEmailRequest {
    const message = createBaseSendActivationEmailRequest();
    message.identifier = object.identifier ?? "";
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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

function createBasePasswordChanged(): PasswordChanged {
  return { id: "", password_hash: "" };
}

export const PasswordChanged = {
  encode(message: PasswordChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.password_hash !== "") {
      writer.uint32(18).string(message.password_hash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PasswordChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePasswordChanged();
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

          message.password_hash = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PasswordChanged {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      password_hash: isSet(object.password_hash) ? String(object.password_hash) : "",
    };
  },

  toJSON(message: PasswordChanged): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.password_hash !== undefined && (obj.password_hash = message.password_hash);
    return obj;
  },

  create(base?: DeepPartial<PasswordChanged>): PasswordChanged {
    return PasswordChanged.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PasswordChanged>): PasswordChanged {
    const message = createBasePasswordChanged();
    message.id = object.id ?? "";
    message.password_hash = object.password_hash ?? "";
    return message;
  },
};

function createBasePasswordChangeRequested(): PasswordChangeRequested {
  return { id: "" };
}

export const PasswordChangeRequested = {
  encode(message: PasswordChangeRequested, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PasswordChangeRequested {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePasswordChangeRequested();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PasswordChangeRequested {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: PasswordChangeRequested): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create(base?: DeepPartial<PasswordChangeRequested>): PasswordChangeRequested {
    return PasswordChangeRequested.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PasswordChangeRequested>): PasswordChangeRequested {
    const message = createBasePasswordChangeRequested();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseEmailChangeRequested(): EmailChangeRequested {
  return { id: "", activation_code: "", new_email: "" };
}

export const EmailChangeRequested = {
  encode(message: EmailChangeRequested, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.activation_code !== "") {
      writer.uint32(18).string(message.activation_code);
    }
    if (message.new_email !== "") {
      writer.uint32(26).string(message.new_email);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EmailChangeRequested {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmailChangeRequested();
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

          message.activation_code = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.new_email = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EmailChangeRequested {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      activation_code: isSet(object.activation_code) ? String(object.activation_code) : "",
      new_email: isSet(object.new_email) ? String(object.new_email) : "",
    };
  },

  toJSON(message: EmailChangeRequested): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.activation_code !== undefined && (obj.activation_code = message.activation_code);
    message.new_email !== undefined && (obj.new_email = message.new_email);
    return obj;
  },

  create(base?: DeepPartial<EmailChangeRequested>): EmailChangeRequested {
    return EmailChangeRequested.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<EmailChangeRequested>): EmailChangeRequested {
    const message = createBaseEmailChangeRequested();
    message.id = object.id ?? "";
    message.activation_code = object.activation_code ?? "";
    message.new_email = object.new_email ?? "";
    return message;
  },
};

function createBaseEmailChangeConfirmed(): EmailChangeConfirmed {
  return { id: "", email: "" };
}

export const EmailChangeConfirmed = {
  encode(message: EmailChangeConfirmed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EmailChangeConfirmed {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmailChangeConfirmed();
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

          message.email = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EmailChangeConfirmed {
    return { id: isSet(object.id) ? String(object.id) : "", email: isSet(object.email) ? String(object.email) : "" };
  },

  toJSON(message: EmailChangeConfirmed): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.email !== undefined && (obj.email = message.email);
    return obj;
  },

  create(base?: DeepPartial<EmailChangeConfirmed>): EmailChangeConfirmed {
    return EmailChangeConfirmed.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<EmailChangeConfirmed>): EmailChangeConfirmed {
    const message = createBaseEmailChangeConfirmed();
    message.id = object.id ?? "";
    message.email = object.email ?? "";
    return message;
  },
};

function createBaseUserList(): UserList {
  return { items: [], total_count: undefined, subject: undefined };
}

export const UserList = {
  encode(message: UserList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      User.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== undefined) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(User.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.total_count = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => User.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: UserList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? User.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<UserList>): UserList {
    return UserList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UserList>): UserList {
    const message = createBaseUserList();
    message.items = object.items?.map((e) => User.fromPartial(e)) || [];
    message.total_count = object.total_count ?? undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseUserListWithRoleResponse(): UserListWithRoleResponse {
  return { items: [], total_count: 0, operation_status: undefined };
}

export const UserListWithRoleResponse = {
  encode(message: UserListWithRoleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      UserRoleResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(message.operation_status, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserListWithRoleResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserListWithRoleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(UserRoleResponse.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.total_count = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.operation_status = OperationStatus.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserListWithRoleResponse {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => UserRoleResponse.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      operation_status: isSet(object.operation_status) ? OperationStatus.fromJSON(object.operation_status) : undefined,
    };
  },

  toJSON(message: UserListWithRoleResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? UserRoleResponse.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status ? OperationStatus.toJSON(message.operation_status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<UserListWithRoleResponse>): UserListWithRoleResponse {
    return UserListWithRoleResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UserListWithRoleResponse>): UserListWithRoleResponse {
    const message = createBaseUserListWithRoleResponse();
    message.items = object.items?.map((e) => UserRoleResponse.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.operation_status = (object.operation_status !== undefined && object.operation_status !== null)
      ? OperationStatus.fromPartial(object.operation_status)
      : undefined;
    return message;
  },
};

function createBaseUserRoleResponse(): UserRoleResponse {
  return { payload: undefined, status: undefined };
}

export const UserRoleResponse = {
  encode(message: UserRoleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      UserRole.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserRoleResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserRoleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payload = UserRole.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): UserRoleResponse {
    return {
      payload: isSet(object.payload) ? UserRole.fromJSON(object.payload) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: UserRoleResponse): unknown {
    const obj: any = {};
    message.payload !== undefined && (obj.payload = message.payload ? UserRole.toJSON(message.payload) : undefined);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<UserRoleResponse>): UserRoleResponse {
    return UserRoleResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UserRoleResponse>): UserRoleResponse {
    const message = createBaseUserRoleResponse();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? UserRole.fromPartial(object.payload)
      : undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBaseUserListResponse(): UserListResponse {
  return { items: [], total_count: 0, operation_status: undefined };
}

export const UserListResponse = {
  encode(message: UserListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      UserResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(message.operation_status, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(UserResponse.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.total_count = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.operation_status = OperationStatus.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserListResponse {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => UserResponse.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      operation_status: isSet(object.operation_status) ? OperationStatus.fromJSON(object.operation_status) : undefined,
    };
  },

  toJSON(message: UserListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? UserResponse.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status ? OperationStatus.toJSON(message.operation_status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<UserListResponse>): UserListResponse {
    return UserListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UserListResponse>): UserListResponse {
    const message = createBaseUserListResponse();
    message.items = object.items?.map((e) => UserResponse.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.operation_status = (object.operation_status !== undefined && object.operation_status !== null)
      ? OperationStatus.fromPartial(object.operation_status)
      : undefined;
    return message;
  },
};

function createBaseUserResponse(): UserResponse {
  return { payload: undefined, status: undefined };
}

export const UserResponse = {
  encode(message: UserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      User.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payload = User.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): UserResponse {
    return {
      payload: isSet(object.payload) ? User.fromJSON(object.payload) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: UserResponse): unknown {
    const obj: any = {};
    message.payload !== undefined && (obj.payload = message.payload ? User.toJSON(message.payload) : undefined);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<UserResponse>): UserResponse {
    return UserResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UserResponse>): UserResponse {
    const message = createBaseUserResponse();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? User.fromPartial(object.payload)
      : undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBaseActivate(): Activate {
  return { id: "" };
}

export const Activate = {
  encode(message: Activate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Activate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActivate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Activate {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: Activate): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create(base?: DeepPartial<Activate>): Activate {
    return Activate.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Activate>): Activate {
    const message = createBaseActivate();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseFindByRoleRequest(): FindByRoleRequest {
  return { role: "", attributes: [], subject: undefined };
}

export const FindByRoleRequest = {
  encode(message: FindByRoleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.role !== "") {
      writer.uint32(10).string(message.role);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindByRoleRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindByRoleRequest();
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

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FindByRoleRequest {
    return {
      role: isSet(object.role) ? String(object.role) : "",
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : [],
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: FindByRoleRequest): unknown {
    const obj: any = {};
    message.role !== undefined && (obj.role = message.role);
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<FindByRoleRequest>): FindByRoleRequest {
    return FindByRoleRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FindByRoleRequest>): FindByRoleRequest {
    const message = createBaseFindByRoleRequest();
    message.role = object.role ?? "";
    message.attributes = object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseUser(): User {
  return {
    id: undefined,
    meta: undefined,
    name: undefined,
    first_name: undefined,
    last_name: undefined,
    email: undefined,
    new_email: undefined,
    active: undefined,
    activation_code: undefined,
    password: undefined,
    password_hash: undefined,
    role_associations: [],
    timezone_id: undefined,
    locale_id: undefined,
    default_scope: undefined,
    unauthenticated: undefined,
    guest: undefined,
    image: undefined,
    user_type: undefined,
    invite: undefined,
    invited_by_user_name: undefined,
    invited_by_user_first_name: undefined,
    invited_by_user_last_name: undefined,
    tokens: [],
    last_access: undefined,
    data: undefined,
  };
}

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    if (message.name !== undefined) {
      writer.uint32(26).string(message.name);
    }
    if (message.first_name !== undefined) {
      writer.uint32(34).string(message.first_name);
    }
    if (message.last_name !== undefined) {
      writer.uint32(42).string(message.last_name);
    }
    if (message.email !== undefined) {
      writer.uint32(50).string(message.email);
    }
    if (message.new_email !== undefined) {
      writer.uint32(58).string(message.new_email);
    }
    if (message.active !== undefined) {
      writer.uint32(64).bool(message.active);
    }
    if (message.activation_code !== undefined) {
      writer.uint32(74).string(message.activation_code);
    }
    if (message.password !== undefined) {
      writer.uint32(82).string(message.password);
    }
    if (message.password_hash !== undefined) {
      writer.uint32(90).string(message.password_hash);
    }
    for (const v of message.role_associations) {
      RoleAssociation.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.timezone_id !== undefined) {
      writer.uint32(106).string(message.timezone_id);
    }
    if (message.locale_id !== undefined) {
      writer.uint32(114).string(message.locale_id);
    }
    if (message.default_scope !== undefined) {
      writer.uint32(122).string(message.default_scope);
    }
    if (message.unauthenticated !== undefined) {
      writer.uint32(128).bool(message.unauthenticated);
    }
    if (message.guest !== undefined) {
      writer.uint32(136).bool(message.guest);
    }
    if (message.image !== undefined) {
      Image.encode(message.image, writer.uint32(146).fork()).ldelim();
    }
    if (message.user_type !== undefined) {
      writer.uint32(152).int32(userTypeToNumber(message.user_type));
    }
    if (message.invite !== undefined) {
      writer.uint32(160).bool(message.invite);
    }
    if (message.invited_by_user_name !== undefined) {
      writer.uint32(170).string(message.invited_by_user_name);
    }
    if (message.invited_by_user_first_name !== undefined) {
      writer.uint32(178).string(message.invited_by_user_first_name);
    }
    if (message.invited_by_user_last_name !== undefined) {
      writer.uint32(186).string(message.invited_by_user_last_name);
    }
    for (const v of message.tokens) {
      Tokens.encode(v!, writer.uint32(194).fork()).ldelim();
    }
    if (message.last_access !== undefined) {
      writer.uint32(201).double(message.last_access);
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(210).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
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

          message.meta = Meta.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.first_name = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.last_name = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.email = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.new_email = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.active = reader.bool();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.activation_code = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.password = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.password_hash = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.role_associations.push(RoleAssociation.decode(reader, reader.uint32()));
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.timezone_id = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.locale_id = reader.string();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.default_scope = reader.string();
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.unauthenticated = reader.bool();
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.guest = reader.bool();
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.image = Image.decode(reader, reader.uint32());
          continue;
        case 19:
          if (tag !== 152) {
            break;
          }

          message.user_type = userTypeFromJSON(reader.int32());
          continue;
        case 20:
          if (tag !== 160) {
            break;
          }

          message.invite = reader.bool();
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.invited_by_user_name = reader.string();
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.invited_by_user_first_name = reader.string();
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.invited_by_user_last_name = reader.string();
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.tokens.push(Tokens.decode(reader, reader.uint32()));
          continue;
        case 25:
          if (tag !== 201) {
            break;
          }

          message.last_access = reader.double();
          continue;
        case 26:
          if (tag !== 210) {
            break;
          }

          message.data = Any.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): User {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      first_name: isSet(object.first_name) ? String(object.first_name) : undefined,
      last_name: isSet(object.last_name) ? String(object.last_name) : undefined,
      email: isSet(object.email) ? String(object.email) : undefined,
      new_email: isSet(object.new_email) ? String(object.new_email) : undefined,
      active: isSet(object.active) ? Boolean(object.active) : undefined,
      activation_code: isSet(object.activation_code) ? String(object.activation_code) : undefined,
      password: isSet(object.password) ? String(object.password) : undefined,
      password_hash: isSet(object.password_hash) ? String(object.password_hash) : undefined,
      role_associations: Array.isArray(object?.role_associations)
        ? object.role_associations.map((e: any) => RoleAssociation.fromJSON(e))
        : [],
      timezone_id: isSet(object.timezone_id) ? String(object.timezone_id) : undefined,
      locale_id: isSet(object.locale_id) ? String(object.locale_id) : undefined,
      default_scope: isSet(object.default_scope) ? String(object.default_scope) : undefined,
      unauthenticated: isSet(object.unauthenticated) ? Boolean(object.unauthenticated) : undefined,
      guest: isSet(object.guest) ? Boolean(object.guest) : undefined,
      image: isSet(object.image) ? Image.fromJSON(object.image) : undefined,
      user_type: isSet(object.user_type) ? userTypeFromJSON(object.user_type) : undefined,
      invite: isSet(object.invite) ? Boolean(object.invite) : undefined,
      invited_by_user_name: isSet(object.invited_by_user_name) ? String(object.invited_by_user_name) : undefined,
      invited_by_user_first_name: isSet(object.invited_by_user_first_name)
        ? String(object.invited_by_user_first_name)
        : undefined,
      invited_by_user_last_name: isSet(object.invited_by_user_last_name)
        ? String(object.invited_by_user_last_name)
        : undefined,
      tokens: Array.isArray(object?.tokens) ? object.tokens.map((e: any) => Tokens.fromJSON(e)) : [],
      last_access: isSet(object.last_access) ? Number(object.last_access) : undefined,
      data: isSet(object.data) ? Any.fromJSON(object.data) : undefined,
    };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.first_name !== undefined && (obj.first_name = message.first_name);
    message.last_name !== undefined && (obj.last_name = message.last_name);
    message.email !== undefined && (obj.email = message.email);
    message.new_email !== undefined && (obj.new_email = message.new_email);
    message.active !== undefined && (obj.active = message.active);
    message.activation_code !== undefined && (obj.activation_code = message.activation_code);
    message.password !== undefined && (obj.password = message.password);
    message.password_hash !== undefined && (obj.password_hash = message.password_hash);
    if (message.role_associations) {
      obj.role_associations = message.role_associations.map((e) => e ? RoleAssociation.toJSON(e) : undefined);
    } else {
      obj.role_associations = [];
    }
    message.timezone_id !== undefined && (obj.timezone_id = message.timezone_id);
    message.locale_id !== undefined && (obj.locale_id = message.locale_id);
    message.default_scope !== undefined && (obj.default_scope = message.default_scope);
    message.unauthenticated !== undefined && (obj.unauthenticated = message.unauthenticated);
    message.guest !== undefined && (obj.guest = message.guest);
    message.image !== undefined && (obj.image = message.image ? Image.toJSON(message.image) : undefined);
    message.user_type !== undefined &&
      (obj.user_type = message.user_type !== undefined ? userTypeToJSON(message.user_type) : undefined);
    message.invite !== undefined && (obj.invite = message.invite);
    message.invited_by_user_name !== undefined && (obj.invited_by_user_name = message.invited_by_user_name);
    message.invited_by_user_first_name !== undefined &&
      (obj.invited_by_user_first_name = message.invited_by_user_first_name);
    message.invited_by_user_last_name !== undefined &&
      (obj.invited_by_user_last_name = message.invited_by_user_last_name);
    if (message.tokens) {
      obj.tokens = message.tokens.map((e) => e ? Tokens.toJSON(e) : undefined);
    } else {
      obj.tokens = [];
    }
    message.last_access !== undefined && (obj.last_access = message.last_access);
    message.data !== undefined && (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    return obj;
  },

  create(base?: DeepPartial<User>): User {
    return User.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<User>): User {
    const message = createBaseUser();
    message.id = object.id ?? undefined;
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    message.name = object.name ?? undefined;
    message.first_name = object.first_name ?? undefined;
    message.last_name = object.last_name ?? undefined;
    message.email = object.email ?? undefined;
    message.new_email = object.new_email ?? undefined;
    message.active = object.active ?? undefined;
    message.activation_code = object.activation_code ?? undefined;
    message.password = object.password ?? undefined;
    message.password_hash = object.password_hash ?? undefined;
    message.role_associations = object.role_associations?.map((e) => RoleAssociation.fromPartial(e)) || [];
    message.timezone_id = object.timezone_id ?? undefined;
    message.locale_id = object.locale_id ?? undefined;
    message.default_scope = object.default_scope ?? undefined;
    message.unauthenticated = object.unauthenticated ?? undefined;
    message.guest = object.guest ?? undefined;
    message.image = (object.image !== undefined && object.image !== null) ? Image.fromPartial(object.image) : undefined;
    message.user_type = object.user_type ?? undefined;
    message.invite = object.invite ?? undefined;
    message.invited_by_user_name = object.invited_by_user_name ?? undefined;
    message.invited_by_user_first_name = object.invited_by_user_first_name ?? undefined;
    message.invited_by_user_last_name = object.invited_by_user_last_name ?? undefined;
    message.tokens = object.tokens?.map((e) => Tokens.fromPartial(e)) || [];
    message.last_access = object.last_access ?? undefined;
    message.data = (object.data !== undefined && object.data !== null) ? Any.fromPartial(object.data) : undefined;
    return message;
  },
};

function createBaseUserRole(): UserRole {
  return {
    id: "",
    meta: undefined,
    name: "",
    first_name: "",
    last_name: "",
    email: "",
    new_email: "",
    active: false,
    activation_code: "",
    password: "",
    password_hash: "",
    role_associations: [],
    timezone_id: "",
    locale_id: "",
    default_scope: "",
    unauthenticated: false,
    guest: false,
    image: undefined,
    user_type: UserType.ORG_USER,
    invite: false,
    invited_by_user_name: "",
    invited_by_user_first_name: "",
    invited_by_user_last_name: "",
    tokens: [],
    last_access: 0,
    data: undefined,
    roles: [],
  };
}

export const UserRole = {
  encode(message: UserRole, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.first_name !== "") {
      writer.uint32(34).string(message.first_name);
    }
    if (message.last_name !== "") {
      writer.uint32(42).string(message.last_name);
    }
    if (message.email !== "") {
      writer.uint32(50).string(message.email);
    }
    if (message.new_email !== "") {
      writer.uint32(58).string(message.new_email);
    }
    if (message.active === true) {
      writer.uint32(64).bool(message.active);
    }
    if (message.activation_code !== "") {
      writer.uint32(74).string(message.activation_code);
    }
    if (message.password !== "") {
      writer.uint32(82).string(message.password);
    }
    if (message.password_hash !== "") {
      writer.uint32(90).string(message.password_hash);
    }
    for (const v of message.role_associations) {
      RoleAssociation.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.timezone_id !== "") {
      writer.uint32(106).string(message.timezone_id);
    }
    if (message.locale_id !== "") {
      writer.uint32(114).string(message.locale_id);
    }
    if (message.default_scope !== "") {
      writer.uint32(122).string(message.default_scope);
    }
    if (message.unauthenticated === true) {
      writer.uint32(128).bool(message.unauthenticated);
    }
    if (message.guest === true) {
      writer.uint32(136).bool(message.guest);
    }
    if (message.image !== undefined) {
      Image.encode(message.image, writer.uint32(146).fork()).ldelim();
    }
    if (message.user_type !== UserType.ORG_USER) {
      writer.uint32(152).int32(userTypeToNumber(message.user_type));
    }
    if (message.invite === true) {
      writer.uint32(160).bool(message.invite);
    }
    if (message.invited_by_user_name !== "") {
      writer.uint32(170).string(message.invited_by_user_name);
    }
    if (message.invited_by_user_first_name !== "") {
      writer.uint32(178).string(message.invited_by_user_first_name);
    }
    if (message.invited_by_user_last_name !== "") {
      writer.uint32(186).string(message.invited_by_user_last_name);
    }
    for (const v of message.tokens) {
      Tokens.encode(v!, writer.uint32(194).fork()).ldelim();
    }
    if (message.last_access !== 0) {
      writer.uint32(201).double(message.last_access);
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(210).fork()).ldelim();
    }
    for (const v of message.roles) {
      Role.encode(v!, writer.uint32(218).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserRole {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserRole();
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

          message.meta = Meta.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.first_name = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.last_name = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.email = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.new_email = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.active = reader.bool();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.activation_code = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.password = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.password_hash = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.role_associations.push(RoleAssociation.decode(reader, reader.uint32()));
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.timezone_id = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.locale_id = reader.string();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.default_scope = reader.string();
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.unauthenticated = reader.bool();
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.guest = reader.bool();
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.image = Image.decode(reader, reader.uint32());
          continue;
        case 19:
          if (tag !== 152) {
            break;
          }

          message.user_type = userTypeFromJSON(reader.int32());
          continue;
        case 20:
          if (tag !== 160) {
            break;
          }

          message.invite = reader.bool();
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.invited_by_user_name = reader.string();
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.invited_by_user_first_name = reader.string();
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.invited_by_user_last_name = reader.string();
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.tokens.push(Tokens.decode(reader, reader.uint32()));
          continue;
        case 25:
          if (tag !== 201) {
            break;
          }

          message.last_access = reader.double();
          continue;
        case 26:
          if (tag !== 210) {
            break;
          }

          message.data = Any.decode(reader, reader.uint32());
          continue;
        case 27:
          if (tag !== 218) {
            break;
          }

          message.roles.push(Role.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserRole {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      first_name: isSet(object.first_name) ? String(object.first_name) : "",
      last_name: isSet(object.last_name) ? String(object.last_name) : "",
      email: isSet(object.email) ? String(object.email) : "",
      new_email: isSet(object.new_email) ? String(object.new_email) : "",
      active: isSet(object.active) ? Boolean(object.active) : false,
      activation_code: isSet(object.activation_code) ? String(object.activation_code) : "",
      password: isSet(object.password) ? String(object.password) : "",
      password_hash: isSet(object.password_hash) ? String(object.password_hash) : "",
      role_associations: Array.isArray(object?.role_associations)
        ? object.role_associations.map((e: any) => RoleAssociation.fromJSON(e))
        : [],
      timezone_id: isSet(object.timezone_id) ? String(object.timezone_id) : "",
      locale_id: isSet(object.locale_id) ? String(object.locale_id) : "",
      default_scope: isSet(object.default_scope) ? String(object.default_scope) : "",
      unauthenticated: isSet(object.unauthenticated) ? Boolean(object.unauthenticated) : false,
      guest: isSet(object.guest) ? Boolean(object.guest) : false,
      image: isSet(object.image) ? Image.fromJSON(object.image) : undefined,
      user_type: isSet(object.user_type) ? userTypeFromJSON(object.user_type) : UserType.ORG_USER,
      invite: isSet(object.invite) ? Boolean(object.invite) : false,
      invited_by_user_name: isSet(object.invited_by_user_name) ? String(object.invited_by_user_name) : "",
      invited_by_user_first_name: isSet(object.invited_by_user_first_name)
        ? String(object.invited_by_user_first_name)
        : "",
      invited_by_user_last_name: isSet(object.invited_by_user_last_name)
        ? String(object.invited_by_user_last_name)
        : "",
      tokens: Array.isArray(object?.tokens) ? object.tokens.map((e: any) => Tokens.fromJSON(e)) : [],
      last_access: isSet(object.last_access) ? Number(object.last_access) : 0,
      data: isSet(object.data) ? Any.fromJSON(object.data) : undefined,
      roles: Array.isArray(object?.roles) ? object.roles.map((e: any) => Role.fromJSON(e)) : [],
    };
  },

  toJSON(message: UserRole): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.first_name !== undefined && (obj.first_name = message.first_name);
    message.last_name !== undefined && (obj.last_name = message.last_name);
    message.email !== undefined && (obj.email = message.email);
    message.new_email !== undefined && (obj.new_email = message.new_email);
    message.active !== undefined && (obj.active = message.active);
    message.activation_code !== undefined && (obj.activation_code = message.activation_code);
    message.password !== undefined && (obj.password = message.password);
    message.password_hash !== undefined && (obj.password_hash = message.password_hash);
    if (message.role_associations) {
      obj.role_associations = message.role_associations.map((e) => e ? RoleAssociation.toJSON(e) : undefined);
    } else {
      obj.role_associations = [];
    }
    message.timezone_id !== undefined && (obj.timezone_id = message.timezone_id);
    message.locale_id !== undefined && (obj.locale_id = message.locale_id);
    message.default_scope !== undefined && (obj.default_scope = message.default_scope);
    message.unauthenticated !== undefined && (obj.unauthenticated = message.unauthenticated);
    message.guest !== undefined && (obj.guest = message.guest);
    message.image !== undefined && (obj.image = message.image ? Image.toJSON(message.image) : undefined);
    message.user_type !== undefined && (obj.user_type = userTypeToJSON(message.user_type));
    message.invite !== undefined && (obj.invite = message.invite);
    message.invited_by_user_name !== undefined && (obj.invited_by_user_name = message.invited_by_user_name);
    message.invited_by_user_first_name !== undefined &&
      (obj.invited_by_user_first_name = message.invited_by_user_first_name);
    message.invited_by_user_last_name !== undefined &&
      (obj.invited_by_user_last_name = message.invited_by_user_last_name);
    if (message.tokens) {
      obj.tokens = message.tokens.map((e) => e ? Tokens.toJSON(e) : undefined);
    } else {
      obj.tokens = [];
    }
    message.last_access !== undefined && (obj.last_access = message.last_access);
    message.data !== undefined && (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    if (message.roles) {
      obj.roles = message.roles.map((e) => e ? Role.toJSON(e) : undefined);
    } else {
      obj.roles = [];
    }
    return obj;
  },

  create(base?: DeepPartial<UserRole>): UserRole {
    return UserRole.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UserRole>): UserRole {
    const message = createBaseUserRole();
    message.id = object.id ?? "";
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    message.name = object.name ?? "";
    message.first_name = object.first_name ?? "";
    message.last_name = object.last_name ?? "";
    message.email = object.email ?? "";
    message.new_email = object.new_email ?? "";
    message.active = object.active ?? false;
    message.activation_code = object.activation_code ?? "";
    message.password = object.password ?? "";
    message.password_hash = object.password_hash ?? "";
    message.role_associations = object.role_associations?.map((e) => RoleAssociation.fromPartial(e)) || [];
    message.timezone_id = object.timezone_id ?? "";
    message.locale_id = object.locale_id ?? "";
    message.default_scope = object.default_scope ?? "";
    message.unauthenticated = object.unauthenticated ?? false;
    message.guest = object.guest ?? false;
    message.image = (object.image !== undefined && object.image !== null) ? Image.fromPartial(object.image) : undefined;
    message.user_type = object.user_type ?? UserType.ORG_USER;
    message.invite = object.invite ?? false;
    message.invited_by_user_name = object.invited_by_user_name ?? "";
    message.invited_by_user_first_name = object.invited_by_user_first_name ?? "";
    message.invited_by_user_last_name = object.invited_by_user_last_name ?? "";
    message.tokens = object.tokens?.map((e) => Tokens.fromPartial(e)) || [];
    message.last_access = object.last_access ?? 0;
    message.data = (object.data !== undefined && object.data !== null) ? Any.fromPartial(object.data) : undefined;
    message.roles = object.roles?.map((e) => Role.fromPartial(e)) || [];
    return message;
  },
};

/** The microservice for the user resource. */
export type UserServiceDefinition = typeof UserServiceDefinition;
export const UserServiceDefinition = {
  name: "UserService",
  fullName: "io.restorecommerce.user.UserService",
  methods: {
    read: {
      name: "Read",
      requestType: ReadRequest,
      requestStream: false,
      responseType: UserListWithRoleResponse,
      responseStream: false,
      options: { _unknownFields: { 248008: [Buffer.from([1])] } },
    },
    create: {
      name: "Create",
      requestType: UserList,
      requestStream: false,
      responseType: UserListResponse,
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
      requestType: UserList,
      requestStream: false,
      responseType: UserListResponse,
      responseStream: false,
      options: {},
    },
    upsert: {
      name: "Upsert",
      requestType: UserList,
      requestStream: false,
      responseType: UserListResponse,
      responseStream: false,
      options: {},
    },
    find: {
      name: "Find",
      requestType: FindRequest,
      requestStream: false,
      responseType: UserListResponse,
      responseStream: false,
      options: { _unknownFields: { 248008: [Buffer.from([1])] } },
    },
    register: {
      name: "Register",
      requestType: RegisterRequest,
      requestStream: false,
      responseType: UserResponse,
      responseStream: false,
      options: {},
    },
    activate: {
      name: "Activate",
      requestType: ActivateRequest,
      requestStream: false,
      responseType: OperationStatusObj,
      responseStream: false,
      options: {},
    },
    changePassword: {
      name: "ChangePassword",
      requestType: ChangePasswordRequest,
      requestStream: false,
      responseType: OperationStatusObj,
      responseStream: false,
      options: {},
    },
    requestPasswordChange: {
      name: "RequestPasswordChange",
      requestType: RequestPasswordChangeRequest,
      requestStream: false,
      responseType: OperationStatusObj,
      responseStream: false,
      options: {},
    },
    requestEmailChange: {
      name: "RequestEmailChange",
      requestType: ChangeEmailRequest,
      requestStream: false,
      responseType: OperationStatusObj,
      responseStream: false,
      options: {},
    },
    confirmPasswordChange: {
      name: "ConfirmPasswordChange",
      requestType: ConfirmPasswordChangeRequest,
      requestStream: false,
      responseType: OperationStatusObj,
      responseStream: false,
      options: {},
    },
    confirmEmailChange: {
      name: "ConfirmEmailChange",
      requestType: ConfirmEmailChangeRequest,
      requestStream: false,
      responseType: OperationStatusObj,
      responseStream: false,
      options: {},
    },
    unregister: {
      name: "Unregister",
      requestType: UnregisterRequest,
      requestStream: false,
      responseType: OperationStatusObj,
      responseStream: false,
      options: {},
    },
    login: {
      name: "Login",
      requestType: LoginRequest,
      requestStream: false,
      responseType: UserResponse,
      responseStream: false,
      options: {},
    },
    findByRole: {
      name: "FindByRole",
      requestType: FindByRoleRequest,
      requestStream: false,
      responseType: UserListResponse,
      responseStream: false,
      options: { _unknownFields: { 248008: [Buffer.from([1])] } },
    },
    deleteUsersByOrg: {
      name: "DeleteUsersByOrg",
      requestType: OrgIDRequest,
      requestStream: false,
      responseType: DeleteUsersByOrgResponse,
      responseStream: false,
      options: {},
    },
    confirmUserInvitation: {
      name: "ConfirmUserInvitation",
      requestType: ConfirmUserInvitationRequest,
      requestStream: false,
      responseType: OperationStatusObj,
      responseStream: false,
      options: {},
    },
    sendInvitationEmail: {
      name: "SendInvitationEmail",
      requestType: SendInvitationEmailRequest,
      requestStream: false,
      responseType: OperationStatusObj,
      responseStream: false,
      options: {},
    },
    findByToken: {
      name: "FindByToken",
      requestType: FindByTokenRequest,
      requestStream: false,
      responseType: UserResponse,
      responseStream: false,
      options: { _unknownFields: { 248008: [Buffer.from([1])] } },
    },
    sendActivationEmail: {
      name: "SendActivationEmail",
      requestType: SendActivationEmailRequest,
      requestStream: false,
      responseType: OperationStatusObj,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface UserServiceImplementation<CallContextExt = {}> {
  read(request: ReadRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UserListWithRoleResponse>>;
  create(request: UserList, context: CallContext & CallContextExt): Promise<DeepPartial<UserListResponse>>;
  delete(request: DeleteRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteResponse>>;
  update(request: UserList, context: CallContext & CallContextExt): Promise<DeepPartial<UserListResponse>>;
  upsert(request: UserList, context: CallContext & CallContextExt): Promise<DeepPartial<UserListResponse>>;
  find(request: FindRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UserListResponse>>;
  register(request: RegisterRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UserResponse>>;
  activate(request: ActivateRequest, context: CallContext & CallContextExt): Promise<DeepPartial<OperationStatusObj>>;
  changePassword(
    request: ChangePasswordRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<OperationStatusObj>>;
  requestPasswordChange(
    request: RequestPasswordChangeRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<OperationStatusObj>>;
  requestEmailChange(
    request: ChangeEmailRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<OperationStatusObj>>;
  confirmPasswordChange(
    request: ConfirmPasswordChangeRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<OperationStatusObj>>;
  confirmEmailChange(
    request: ConfirmEmailChangeRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<OperationStatusObj>>;
  unregister(
    request: UnregisterRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<OperationStatusObj>>;
  login(request: LoginRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UserResponse>>;
  findByRole(request: FindByRoleRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UserListResponse>>;
  deleteUsersByOrg(
    request: OrgIDRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<DeleteUsersByOrgResponse>>;
  confirmUserInvitation(
    request: ConfirmUserInvitationRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<OperationStatusObj>>;
  sendInvitationEmail(
    request: SendInvitationEmailRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<OperationStatusObj>>;
  findByToken(request: FindByTokenRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UserResponse>>;
  sendActivationEmail(
    request: SendActivationEmailRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<OperationStatusObj>>;
}

export interface UserServiceClient<CallOptionsExt = {}> {
  read(request: DeepPartial<ReadRequest>, options?: CallOptions & CallOptionsExt): Promise<UserListWithRoleResponse>;
  create(request: DeepPartial<UserList>, options?: CallOptions & CallOptionsExt): Promise<UserListResponse>;
  delete(request: DeepPartial<DeleteRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteResponse>;
  update(request: DeepPartial<UserList>, options?: CallOptions & CallOptionsExt): Promise<UserListResponse>;
  upsert(request: DeepPartial<UserList>, options?: CallOptions & CallOptionsExt): Promise<UserListResponse>;
  find(request: DeepPartial<FindRequest>, options?: CallOptions & CallOptionsExt): Promise<UserListResponse>;
  register(request: DeepPartial<RegisterRequest>, options?: CallOptions & CallOptionsExt): Promise<UserResponse>;
  activate(request: DeepPartial<ActivateRequest>, options?: CallOptions & CallOptionsExt): Promise<OperationStatusObj>;
  changePassword(
    request: DeepPartial<ChangePasswordRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<OperationStatusObj>;
  requestPasswordChange(
    request: DeepPartial<RequestPasswordChangeRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<OperationStatusObj>;
  requestEmailChange(
    request: DeepPartial<ChangeEmailRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<OperationStatusObj>;
  confirmPasswordChange(
    request: DeepPartial<ConfirmPasswordChangeRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<OperationStatusObj>;
  confirmEmailChange(
    request: DeepPartial<ConfirmEmailChangeRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<OperationStatusObj>;
  unregister(
    request: DeepPartial<UnregisterRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<OperationStatusObj>;
  login(request: DeepPartial<LoginRequest>, options?: CallOptions & CallOptionsExt): Promise<UserResponse>;
  findByRole(
    request: DeepPartial<FindByRoleRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<UserListResponse>;
  deleteUsersByOrg(
    request: DeepPartial<OrgIDRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<DeleteUsersByOrgResponse>;
  confirmUserInvitation(
    request: DeepPartial<ConfirmUserInvitationRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<OperationStatusObj>;
  sendInvitationEmail(
    request: DeepPartial<SendInvitationEmailRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<OperationStatusObj>;
  findByToken(request: DeepPartial<FindByTokenRequest>, options?: CallOptions & CallOptionsExt): Promise<UserResponse>;
  sendActivationEmail(
    request: DeepPartial<SendActivationEmailRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<OperationStatusObj>;
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
    "name": "io/restorecommerce/user.proto",
    "package": "io.restorecommerce.user",
    "dependency": [
      "io/restorecommerce/resource_base.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/attribute.proto",
      "io/restorecommerce/image.proto",
      "io/restorecommerce/status.proto",
      "google/protobuf/any.proto",
      "io/restorecommerce/role.proto",
      "io/restorecommerce/options.proto",
      "io/restorecommerce/timezone.proto",
      "io/restorecommerce/locale.proto",
    ],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "LoginRequest",
      "field": [{
        "name": "identifier",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "identifier",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "password",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "password",
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
        "oneofIndex": 1,
        "jsonName": "token",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_password", "options": undefined }, { "name": "_token", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "OrgIDRequest",
      "field": [{
        "name": "org_ids",
        "number": 1,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "orgIds",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "subject",
        "number": 2,
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
      "name": "DeleteUsersByOrgResponse",
      "field": [{
        "name": "user_ids",
        "number": 1,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "userIds",
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
      "name": "FindRequest",
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
        "name": "name",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "email",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "email",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "subject",
        "number": 4,
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
      "oneofDecl": [{ "name": "_id", "options": undefined }, { "name": "_name", "options": undefined }, {
        "name": "_email",
        "options": undefined,
      }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "FindByTokenRequest",
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
      "name": "RegisterRequest",
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
        "name": "guest",
        "number": 2,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "guest",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "meta",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.meta.Meta",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "meta",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "name",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "first_name",
        "number": 5,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "firstName",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "last_name",
        "number": 6,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 5,
        "jsonName": "lastName",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "email",
        "number": 7,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 6,
        "jsonName": "email",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "password",
        "number": 8,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 7,
        "jsonName": "password",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "timezone_id",
        "number": 9,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 8,
        "jsonName": "timezoneId",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "locale_id",
        "number": 10,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 9,
        "jsonName": "localeId",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "default_scope",
        "number": 11,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 10,
        "jsonName": "defaultScope",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "user_type",
        "number": 12,
        "label": 1,
        "type": 14,
        "typeName": ".io.restorecommerce.user.UserType",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 11,
        "jsonName": "userType",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "captcha_code",
        "number": 13,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 12,
        "jsonName": "captchaCode",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "_id", "options": undefined },
        { "name": "_guest", "options": undefined },
        { "name": "_meta", "options": undefined },
        { "name": "_name", "options": undefined },
        { "name": "_first_name", "options": undefined },
        { "name": "_last_name", "options": undefined },
        { "name": "_email", "options": undefined },
        { "name": "_password", "options": undefined },
        { "name": "_timezone_id", "options": undefined },
        { "name": "_locale_id", "options": undefined },
        { "name": "_default_scope", "options": undefined },
        { "name": "_user_type", "options": undefined },
        { "name": "_captcha_code", "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ActivateRequest",
      "field": [{
        "name": "identifier",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "identifier",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "activation_code",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "activationCode",
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
      "name": "ConfirmUserInvitationRequest",
      "field": [{
        "name": "identifier",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "identifier",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "password",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "password",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "activation_code",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "activationCode",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "subject",
        "number": 4,
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
      "name": "SendInvitationEmailRequest",
      "field": [{
        "name": "identifier",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "identifier",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "invited_by_user_identifier",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "invitedByUserIdentifier",
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
      "name": "ChangePasswordRequest",
      "field": [{
        "name": "password",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "password",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "new_password",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "newPassword",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "subject",
        "number": 4,
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
      "name": "RequestPasswordChangeRequest",
      "field": [{
        "name": "identifier",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "identifier",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "subject",
        "number": 2,
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
      "name": "ConfirmPasswordChangeRequest",
      "field": [{
        "name": "identifier",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "identifier",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "activation_code",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "activationCode",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "password",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "password",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "subject",
        "number": 4,
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
      "name": "ChangeEmailRequest",
      "field": [{
        "name": "identifier",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "identifier",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "new_email",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "newEmail",
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
      "name": "ConfirmEmailChangeRequest",
      "field": [{
        "name": "identifier",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "identifier",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "activation_code",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "activationCode",
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
      "name": "UnregisterRequest",
      "field": [{
        "name": "identifier",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "identifier",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "subject",
        "number": 2,
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
      "name": "SendActivationEmailRequest",
      "field": [{
        "name": "identifier",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "identifier",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "subject",
        "number": 2,
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
      "name": "PasswordChanged",
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
        "name": "password_hash",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "passwordHash",
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
      "name": "PasswordChangeRequested",
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
      "name": "EmailChangeRequested",
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
        "name": "activation_code",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "activationCode",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "new_email",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "newEmail",
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
      "name": "EmailChangeConfirmed",
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
        "name": "email",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "email",
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
      "name": "UserList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.user.User",
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
        "proto3Optional": true,
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
      "oneofDecl": [{ "name": "_total_count", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "UserListWithRoleResponse",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.user.UserRoleResponse",
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
      "name": "UserRoleResponse",
      "field": [{
        "name": "payload",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.user.UserRole",
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
      "name": "UserListResponse",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.user.UserResponse",
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
      "name": "UserResponse",
      "field": [{
        "name": "payload",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.user.User",
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
      "name": "Activate",
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
      "name": "FindByRoleRequest",
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
        "proto3Optional": false,
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
      "name": "User",
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
        "name": "meta",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.meta.Meta",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "meta",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "name",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "first_name",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "firstName",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "last_name",
        "number": 5,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "lastName",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "email",
        "number": 6,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 5,
        "jsonName": "email",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "new_email",
        "number": 7,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 6,
        "jsonName": "newEmail",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "active",
        "number": 8,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 7,
        "jsonName": "active",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "activation_code",
        "number": 9,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 8,
        "jsonName": "activationCode",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "password",
        "number": 10,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 9,
        "jsonName": "password",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "password_hash",
        "number": 11,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 10,
        "jsonName": "passwordHash",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "role_associations",
        "number": 12,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.auth.RoleAssociation",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "roleAssociations",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "timezone_id",
        "number": 13,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 11,
        "jsonName": "timezoneId",
        "options": {
          "ctype": 0,
          "packed": false,
          "jstype": 0,
          "lazy": false,
          "deprecated": false,
          "weak": false,
          "uninterpretedOption": [],
        },
        "proto3Optional": true,
      }, {
        "name": "locale_id",
        "number": 14,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 12,
        "jsonName": "localeId",
        "options": {
          "ctype": 0,
          "packed": false,
          "jstype": 0,
          "lazy": false,
          "deprecated": false,
          "weak": false,
          "uninterpretedOption": [],
        },
        "proto3Optional": true,
      }, {
        "name": "default_scope",
        "number": 15,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 13,
        "jsonName": "defaultScope",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "unauthenticated",
        "number": 16,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 14,
        "jsonName": "unauthenticated",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "guest",
        "number": 17,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 15,
        "jsonName": "guest",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "image",
        "number": 18,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.image.Image",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 16,
        "jsonName": "image",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "user_type",
        "number": 19,
        "label": 1,
        "type": 14,
        "typeName": ".io.restorecommerce.user.UserType",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 17,
        "jsonName": "userType",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "invite",
        "number": 20,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 18,
        "jsonName": "invite",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "invited_by_user_name",
        "number": 21,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 19,
        "jsonName": "invitedByUserName",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "invited_by_user_first_name",
        "number": 22,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 20,
        "jsonName": "invitedByUserFirstName",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "invited_by_user_last_name",
        "number": 23,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 21,
        "jsonName": "invitedByUserLastName",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "tokens",
        "number": 24,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.auth.Tokens",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "tokens",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "last_access",
        "number": 25,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 22,
        "jsonName": "lastAccess",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "data",
        "number": 26,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.Any",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 23,
        "jsonName": "data",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "_id", "options": undefined },
        { "name": "_meta", "options": undefined },
        { "name": "_name", "options": undefined },
        { "name": "_first_name", "options": undefined },
        { "name": "_last_name", "options": undefined },
        { "name": "_email", "options": undefined },
        { "name": "_new_email", "options": undefined },
        { "name": "_active", "options": undefined },
        { "name": "_activation_code", "options": undefined },
        { "name": "_password", "options": undefined },
        { "name": "_password_hash", "options": undefined },
        { "name": "_timezone_id", "options": undefined },
        { "name": "_locale_id", "options": undefined },
        { "name": "_default_scope", "options": undefined },
        { "name": "_unauthenticated", "options": undefined },
        { "name": "_guest", "options": undefined },
        { "name": "_image", "options": undefined },
        { "name": "_user_type", "options": undefined },
        { "name": "_invite", "options": undefined },
        { "name": "_invited_by_user_name", "options": undefined },
        { "name": "_invited_by_user_first_name", "options": undefined },
        { "name": "_invited_by_user_last_name", "options": undefined },
        { "name": "_last_access", "options": undefined },
        { "name": "_data", "options": undefined },
      ],
      "options": {
        "messageSetWireFormat": false,
        "noStandardDescriptorAccessor": false,
        "deprecated": false,
        "mapEntry": false,
        "uninterpretedOption": [],
      },
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "UserRole",
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
        "name": "first_name",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "firstName",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "last_name",
        "number": 5,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "lastName",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "email",
        "number": 6,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "email",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "new_email",
        "number": 7,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "newEmail",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "active",
        "number": 8,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "active",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "activation_code",
        "number": 9,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "activationCode",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "password",
        "number": 10,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "password",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "password_hash",
        "number": 11,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "passwordHash",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "role_associations",
        "number": 12,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.auth.RoleAssociation",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "roleAssociations",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "timezone_id",
        "number": 13,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "timezoneId",
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
        "name": "locale_id",
        "number": 14,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "localeId",
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
        "name": "default_scope",
        "number": 15,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "defaultScope",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "unauthenticated",
        "number": 16,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "unauthenticated",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "guest",
        "number": 17,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "guest",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "image",
        "number": 18,
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
        "name": "user_type",
        "number": 19,
        "label": 1,
        "type": 14,
        "typeName": ".io.restorecommerce.user.UserType",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "userType",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "invite",
        "number": 20,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "invite",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "invited_by_user_name",
        "number": 21,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "invitedByUserName",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "invited_by_user_first_name",
        "number": 22,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "invitedByUserFirstName",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "invited_by_user_last_name",
        "number": 23,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "invitedByUserLastName",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "tokens",
        "number": 24,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.auth.Tokens",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "tokens",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "last_access",
        "number": 25,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "lastAccess",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "data",
        "number": 26,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.Any",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "data",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "roles",
        "number": 27,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.role.Role",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "roles",
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
    "enumType": [{
      "name": "UserType",
      "value": [
        { "name": "ORG_USER", "number": 0, "options": undefined },
        { "name": "INDIVIDUAL_USER", "number": 1, "options": undefined },
        { "name": "GUEST", "number": 2, "options": undefined },
        { "name": "TECHNICAL_USER", "number": 3, "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "service": [{
      "name": "UserService",
      "method": [{
        "name": "Read",
        "inputType": ".io.restorecommerce.resourcebase.ReadRequest",
        "outputType": ".io.restorecommerce.user.UserListWithRoleResponse",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Create",
        "inputType": ".io.restorecommerce.user.UserList",
        "outputType": ".io.restorecommerce.user.UserListResponse",
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
        "inputType": ".io.restorecommerce.user.UserList",
        "outputType": ".io.restorecommerce.user.UserListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Upsert",
        "inputType": ".io.restorecommerce.user.UserList",
        "outputType": ".io.restorecommerce.user.UserListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Find",
        "inputType": ".io.restorecommerce.user.FindRequest",
        "outputType": ".io.restorecommerce.user.UserListResponse",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Register",
        "inputType": ".io.restorecommerce.user.RegisterRequest",
        "outputType": ".io.restorecommerce.user.UserResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Activate",
        "inputType": ".io.restorecommerce.user.ActivateRequest",
        "outputType": ".io.restorecommerce.status.OperationStatusObj",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "ChangePassword",
        "inputType": ".io.restorecommerce.user.ChangePasswordRequest",
        "outputType": ".io.restorecommerce.status.OperationStatusObj",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "RequestPasswordChange",
        "inputType": ".io.restorecommerce.user.RequestPasswordChangeRequest",
        "outputType": ".io.restorecommerce.status.OperationStatusObj",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "RequestEmailChange",
        "inputType": ".io.restorecommerce.user.ChangeEmailRequest",
        "outputType": ".io.restorecommerce.status.OperationStatusObj",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "ConfirmPasswordChange",
        "inputType": ".io.restorecommerce.user.ConfirmPasswordChangeRequest",
        "outputType": ".io.restorecommerce.status.OperationStatusObj",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "ConfirmEmailChange",
        "inputType": ".io.restorecommerce.user.ConfirmEmailChangeRequest",
        "outputType": ".io.restorecommerce.status.OperationStatusObj",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Unregister",
        "inputType": ".io.restorecommerce.user.UnregisterRequest",
        "outputType": ".io.restorecommerce.status.OperationStatusObj",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Login",
        "inputType": ".io.restorecommerce.user.LoginRequest",
        "outputType": ".io.restorecommerce.user.UserResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "FindByRole",
        "inputType": ".io.restorecommerce.user.FindByRoleRequest",
        "outputType": ".io.restorecommerce.user.UserListResponse",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "DeleteUsersByOrg",
        "inputType": ".io.restorecommerce.user.OrgIDRequest",
        "outputType": ".io.restorecommerce.user.DeleteUsersByOrgResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "ConfirmUserInvitation",
        "inputType": ".io.restorecommerce.user.ConfirmUserInvitationRequest",
        "outputType": ".io.restorecommerce.status.OperationStatusObj",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "SendInvitationEmail",
        "inputType": ".io.restorecommerce.user.SendInvitationEmailRequest",
        "outputType": ".io.restorecommerce.status.OperationStatusObj",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "FindByToken",
        "inputType": ".io.restorecommerce.user.FindByTokenRequest",
        "outputType": ".io.restorecommerce.user.UserResponse",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "SendActivationEmail",
        "inputType": ".io.restorecommerce.user.SendActivationEmailRequest",
        "outputType": ".io.restorecommerce.status.OperationStatusObj",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }],
      "options": undefined,
    }],
    "extension": [],
    "options": undefined,
    "sourceCodeInfo": {
      "location": [{
        "path": [3, 9],
        "span": [15, 0, 43],
        "leadingComments": " Used by resolvers\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0],
        "span": [21, 0, 52, 1],
        "leadingComments": "*\n The microservice for the user resource.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0],
        "span": [58, 0, 62, 1],
        "leadingComments":
          "*\n Request to verify password and retrieve the user's info.\n Either name or email can be provided.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0, 2, 0],
        "span": [59, 2, 24],
        "leadingComments": "",
        "trailingComments": " User name or email\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0, 2, 1],
        "span": [60, 2, 31],
        "leadingComments": "",
        "trailingComments": " Raw password\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 3, 2, 0],
        "span": [75, 2, 25],
        "leadingComments": "",
        "trailingComments": "/ User ID\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 5, 2, 10],
        "span": [104, 2, 37],
        "leadingComments": "",
        "trailingComments": " default hierarchical scope\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 6, 2, 0],
        "span": [110, 2, 24],
        "leadingComments": "",
        "trailingComments": "/ user name or email\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 7, 2, 0],
        "span": [116, 2, 24],
        "leadingComments": "",
        "trailingComments": " user name or email\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 8, 2, 0],
        "span": [123, 2, 24],
        "leadingComments": "",
        "trailingComments": " user name or email\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 10, 2, 0],
        "span": [135, 2, 24],
        "leadingComments": "",
        "trailingComments": " user name or email\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 11, 2, 0],
        "span": [140, 2, 24],
        "leadingComments": "",
        "trailingComments": " user name or email\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 12, 2, 0],
        "span": [147, 2, 24],
        "leadingComments": "",
        "trailingComments": " user name or email\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 13, 2, 0],
        "span": [153, 2, 24],
        "leadingComments": "",
        "trailingComments": " user name or email\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 14, 2, 0],
        "span": [159, 2, 24],
        "leadingComments": "",
        "trailingComments": "/ User ID\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 15, 2, 0],
        "span": [164, 2, 24],
        "leadingComments": "",
        "trailingComments": "/ User name or email\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 16],
        "span": [176, 0, 178, 1],
        "leadingComments":
          "*\n User deletion event.\n Send when a user was deleted or unregistered.\n\n Events:\n usersDeleted,\n unregistered,\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 17],
        "span": [186, 0, 189, 1],
        "leadingComments": "*\n User password changed event.\n\n Events:\n passwordChanged,\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 17, 2, 0],
        "span": [187, 2, 16],
        "leadingComments": "",
        "trailingComments": "/ User ID\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 18, 2, 0],
        "span": [192, 2, 16],
        "leadingComments": "",
        "trailingComments": " User ID\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 19],
        "span": [198, 0, 202, 1],
        "leadingComments": "*\n User email id changed event.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 20, 2, 0],
        "span": [205, 2, 16],
        "leadingComments": "",
        "trailingComments": "/ User ID\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 21],
        "span": [212, 0, 216, 1],
        "leadingComments": "*\n A list of User.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 26],
        "span": [243, 0, 245, 1],
        "leadingComments": "*\n User activation request.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 26, 2, 0],
        "span": [244, 2, 16],
        "leadingComments": "",
        "trailingComments": "/ User ID\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 28],
        "span": [256, 0, 307, 1],
        "leadingComments": "*\n A User resource.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 28, 2, 0],
        "span": [265, 2, 25],
        "leadingComments": "",
        "trailingComments": "/ User ID, unique, key\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 28, 2, 2],
        "span": [267, 2, 27],
        "leadingComments": "",
        "trailingComments": " The name of the user, can be used for login\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 28, 2, 5],
        "span": [270, 2, 28],
        "leadingComments": "",
        "trailingComments": "/ Email address, can be used for login\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 28, 2, 6],
        "span": [271, 2, 32],
        "leadingComments": "",
        "trailingComments":
          "/ New email address; set by `requestEmailChange` and overrides actual email upon `confirmEmailChange`\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 28, 2, 7],
        "span": [272, 2, 27],
        "leadingComments": "",
        "trailingComments": "/ If the user was activated via the activation process\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 28, 2, 8],
        "span": [273, 2, 38],
        "leadingComments": "",
        "trailingComments": "/ Activation code used in the activation process\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 28, 2, 9],
        "span": [274, 2, 32],
        "leadingComments": "",
        "trailingComments": "/ Raw password, not stored\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 28, 2, 10],
        "span": [275, 2, 37],
        "leadingComments": "",
        "trailingComments": "/ Encrypted password, stored\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 28, 2, 11],
        "span": [276, 2, 74],
        "leadingComments": "",
        "trailingComments": " A user can have multiple roles and different attributes coupled with each role\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 28, 2, 12],
        "span": [277, 2, 285, 4],
        "leadingComments": "",
        "trailingComments": " timezone_id specifications\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 28, 2, 13],
        "span": [286, 2, 294, 4],
        "leadingComments": "",
        "trailingComments": " locale specifications\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 28, 2, 14],
        "span": [295, 2, 37],
        "leadingComments": "",
        "trailingComments": " default hierarchical scope\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 28, 2, 15],
        "span": [296, 2, 37],
        "leadingComments": "",
        "trailingComments": " true in case in case of `register`; set to false after activation\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 28, 2, 16],
        "span": [297, 2, 27],
        "leadingComments": "",
        "trailingComments":
          "/ Is the user a guest. A guest is a automatically generated user which can later be turned in a non-guest user.\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 28, 2, 19],
        "span": [300, 2, 28],
        "leadingComments": "",
        "trailingComments": " For user invitation\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 28, 2, 20],
        "span": [301, 2, 44],
        "leadingComments": "",
        "trailingComments": " user who is inviting\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 28, 2, 21],
        "span": [302, 2, 50],
        "leadingComments": "",
        "trailingComments": " First name of user inviting\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 28, 2, 22],
        "span": [303, 2, 49],
        "leadingComments": "",
        "trailingComments": " Last name of user inviting\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 28, 2, 25],
        "span": [306, 2, 41],
        "leadingComments": "",
        "trailingComments": "/ additional data\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 29],
        "span": [312, 0, 356, 1],
        "leadingComments": "*\n A User resource with role\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 29, 2, 0],
        "span": [313, 2, 16],
        "leadingComments": "",
        "trailingComments": "/ User ID, unique, key\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 29, 2, 2],
        "span": [315, 2, 18],
        "leadingComments": "",
        "trailingComments": " The name of the user, can be used for login\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 29, 2, 5],
        "span": [318, 2, 19],
        "leadingComments": "",
        "trailingComments": "/ Email address, can be used for login\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 29, 2, 6],
        "span": [319, 2, 23],
        "leadingComments": "",
        "trailingComments":
          "/ New email address; set by `requestEmailChange` and overrides actual email upon `confirmEmailChange`\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 29, 2, 7],
        "span": [320, 2, 18],
        "leadingComments": "",
        "trailingComments": "/ If the user was activated via the activation process\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 29, 2, 8],
        "span": [321, 2, 29],
        "leadingComments": "",
        "trailingComments": "/ Activation code used in the activation process\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 29, 2, 9],
        "span": [322, 2, 23],
        "leadingComments": "",
        "trailingComments": "/ Raw password, not stored\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 29, 2, 10],
        "span": [323, 2, 28],
        "leadingComments": "",
        "trailingComments": "/ Encrypted password, stored\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 29, 2, 11],
        "span": [324, 2, 74],
        "leadingComments": "",
        "trailingComments": " A user can have multiple roles and different attributes coupled with each role\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 29, 2, 12],
        "span": [325, 2, 333, 4],
        "leadingComments": "",
        "trailingComments": " timezone_id specifications\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 29, 2, 13],
        "span": [334, 2, 342, 4],
        "leadingComments": "",
        "trailingComments": " locale specifications\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 29, 2, 14],
        "span": [343, 2, 28],
        "leadingComments": "",
        "trailingComments": " default hierarchical scope\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 29, 2, 15],
        "span": [344, 2, 28],
        "leadingComments": "",
        "trailingComments": " true in case in case of `register`; set to false after activation\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 29, 2, 16],
        "span": [345, 2, 18],
        "leadingComments": "",
        "trailingComments":
          "/ Is the user a guest. A guest is a automatically generated user which can later be turned in a non-guest user.\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 29, 2, 19],
        "span": [348, 2, 19],
        "leadingComments": "",
        "trailingComments": " For user invitation\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 29, 2, 20],
        "span": [349, 2, 35],
        "leadingComments": "",
        "trailingComments": " user who is inviting\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 29, 2, 21],
        "span": [350, 2, 41],
        "leadingComments": "",
        "trailingComments": " First name of user inviting\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 29, 2, 22],
        "span": [351, 2, 40],
        "leadingComments": "",
        "trailingComments": " Last name of user inviting\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 29, 2, 25],
        "span": [354, 2, 32],
        "leadingComments": "",
        "trailingComments": "/ additional data\n",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {
    ".io.restorecommerce.user.UserType": UserType,
    ".io.restorecommerce.user.LoginRequest": LoginRequest,
    ".io.restorecommerce.user.OrgIDRequest": OrgIDRequest,
    ".io.restorecommerce.user.DeleteUsersByOrgResponse": DeleteUsersByOrgResponse,
    ".io.restorecommerce.user.FindRequest": FindRequest,
    ".io.restorecommerce.user.FindByTokenRequest": FindByTokenRequest,
    ".io.restorecommerce.user.RegisterRequest": RegisterRequest,
    ".io.restorecommerce.user.ActivateRequest": ActivateRequest,
    ".io.restorecommerce.user.ConfirmUserInvitationRequest": ConfirmUserInvitationRequest,
    ".io.restorecommerce.user.SendInvitationEmailRequest": SendInvitationEmailRequest,
    ".io.restorecommerce.user.ChangePasswordRequest": ChangePasswordRequest,
    ".io.restorecommerce.user.RequestPasswordChangeRequest": RequestPasswordChangeRequest,
    ".io.restorecommerce.user.ConfirmPasswordChangeRequest": ConfirmPasswordChangeRequest,
    ".io.restorecommerce.user.ChangeEmailRequest": ChangeEmailRequest,
    ".io.restorecommerce.user.ConfirmEmailChangeRequest": ConfirmEmailChangeRequest,
    ".io.restorecommerce.user.UnregisterRequest": UnregisterRequest,
    ".io.restorecommerce.user.SendActivationEmailRequest": SendActivationEmailRequest,
    ".io.restorecommerce.user.Deleted": Deleted,
    ".io.restorecommerce.user.PasswordChanged": PasswordChanged,
    ".io.restorecommerce.user.PasswordChangeRequested": PasswordChangeRequested,
    ".io.restorecommerce.user.EmailChangeRequested": EmailChangeRequested,
    ".io.restorecommerce.user.EmailChangeConfirmed": EmailChangeConfirmed,
    ".io.restorecommerce.user.UserList": UserList,
    ".io.restorecommerce.user.UserListWithRoleResponse": UserListWithRoleResponse,
    ".io.restorecommerce.user.UserRoleResponse": UserRoleResponse,
    ".io.restorecommerce.user.UserListResponse": UserListResponse,
    ".io.restorecommerce.user.UserResponse": UserResponse,
    ".io.restorecommerce.user.Activate": Activate,
    ".io.restorecommerce.user.FindByRoleRequest": FindByRoleRequest,
    ".io.restorecommerce.user.User": User,
    ".io.restorecommerce.user.UserRole": UserRole,
  },
  dependencies: [
    protoMetadata1,
    protoMetadata2,
    protoMetadata3,
    protoMetadata4,
    protoMetadata5,
    protoMetadata6,
    protoMetadata7,
    protoMetadata8,
    protoMetadata9,
    protoMetadata10,
    protoMetadata11,
  ],
  options: {
    messages: {
      "User": {
        options: {
          "kafka_subscriber": KafkaSubscription.decode(
            Buffer.from(
              "CgV1c2VycxIhaW8ucmVzdG9yZWNvbW1lcmNlLnVzZXJzLnJlc291cmNlGgt1c2VyQ3JlYXRlZCILdXNlclVwZGF0ZWQqC3VzZXJEZWxldGVk",
              "base64",
            ),
          ),
        },
        fields: {
          "timezone_id": {
            "resolver": Resolver.decode(
              Buffer.from(
                "CiUuaW8ucmVzdG9yZWNvbW1lcmNlLnRpbWV6b25lLlRpbWV6b25lEghyZXNvdXJjZRoIdGltZXpvbmUiBFJlYWQqCHRpbWV6b25l",
                "base64",
              ),
            ),
          },
          "locale_id": {
            "resolver": Resolver.decode(
              Buffer.from(
                "CiEuaW8ucmVzdG9yZWNvbW1lcmNlLmxvY2FsZS5Mb2NhbGUSCHJlc291cmNlGgZsb2NhbGUiBFJlYWQqBmxvY2FsZQ==",
                "base64",
              ),
            ),
          },
        },
      },
      "UserRole": {
        fields: {
          "timezone_id": {
            "resolver": Resolver.decode(
              Buffer.from(
                "CiUuaW8ucmVzdG9yZWNvbW1lcmNlLnRpbWV6b25lLlRpbWV6b25lEghyZXNvdXJjZRoIdGltZXpvbmUiBFJlYWQqCHRpbWV6b25l",
                "base64",
              ),
            ),
          },
          "locale_id": {
            "resolver": Resolver.decode(
              Buffer.from(
                "CiEuaW8ucmVzdG9yZWNvbW1lcmNlLmxvY2FsZS5Mb2NhbGUSCHJlc291cmNlGgZsb2NhbGUiBFJlYWQqBmxvY2FsZQ==",
                "base64",
              ),
            ),
          },
        },
      },
    },
    services: {
      "UserService": {
        options: undefined,
        methods: {
          "Read": { "is_query": true },
          "Find": { "is_query": true },
          "FindByRole": { "is_query": true },
          "FindByToken": { "is_query": true },
        },
      },
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
