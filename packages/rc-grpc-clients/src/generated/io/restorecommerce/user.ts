/* eslint-disable */
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import {
  Subject,
  protoMetadata as protoMetadata3,
  RoleAssociation,
  Tokens,
} from "./auth";
import {
  OperationStatus,
  Status,
  protoMetadata as protoMetadata6,
  OperationStatusObj,
} from "./status";
import { Meta, protoMetadata as protoMetadata2 } from "./meta";
import { Image, protoMetadata as protoMetadata5 } from "./image";
import {
  Any,
  protoMetadata as protoMetadata7,
} from "../../google/protobuf/any";
import { CallContext, CallOptions } from "nice-grpc-common";
import {
  protoMetadata as protoMetadata1,
  ReadRequest,
  DeleteRequest,
  DeleteResponse,
} from "./resource_base";
import { protoMetadata as protoMetadata4, Attribute } from "./attribute";
import { protoMetadata as protoMetadata8, Role } from "./role";
import {
  protoMetadata as protoMetadata9,
  KafkaSubscription,
  Resolver,
} from "./options";
import { protoMetadata as protoMetadata10 } from "./timezone";
import { protoMetadata as protoMetadata11 } from "./locale";
import * as _m0 from "protobufjs/minimal";

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
  password: string;
  token: string;
}

export interface OrgIDRequest {
  orgIds: string[];
  subject?: Subject;
}

export interface DeleteUsersByOrgResponse {
  userIds: string[];
  operationStatus?: OperationStatus;
}

export interface FindRequest {
  /** / User ID */
  id: string;
  name: string;
  email: string;
  subject?: Subject;
}

export interface FindByTokenRequest {
  token: string;
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
  /** default hierarchical scope */
  defaultScope: string;
  userType: UserType;
  captchaCode: string;
}

export interface ActivateRequest {
  /** / user name or email */
  identifier: string;
  activationCode: string;
  subject?: Subject;
}

export interface ConfirmUserInvitationRequest {
  /** user name or email */
  identifier: string;
  password: string;
  activationCode: string;
  subject?: Subject;
}

export interface SendInvitationEmailRequest {
  /** user name or email */
  identifier: string;
  invitedByUserIdentifier: string;
  subject?: Subject;
}

export interface ChangePasswordRequest {
  password: string;
  newPassword: string;
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
  activationCode: string;
  password: string;
  subject?: Subject;
}

export interface ChangeEmailRequest {
  /** user name or email */
  identifier: string;
  newEmail: string;
  subject?: Subject;
}

export interface ConfirmEmailChangeRequest {
  /** user name or email */
  identifier: string;
  activationCode: string;
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
  passwordHash: string;
}

export interface PasswordChangeRequested {
  /** User ID */
  id: string;
}

/** User email id changed event. */
export interface EmailChangeRequested {
  id: string;
  activationCode: string;
  newEmail: string;
}

export interface EmailChangeConfirmed {
  /** / User ID */
  id: string;
  email: string;
}

/** A list of User. */
export interface UserList {
  items: User[];
  totalCount: number;
  subject?: Subject;
}

export interface UserListWithRoleResponse {
  items: UserRoleResponse[];
  totalCount: number;
  operationStatus?: OperationStatus;
}

export interface UserRoleResponse {
  payload?: UserRole;
  status?: Status;
}

export interface UserListResponse {
  items: UserResponse[];
  totalCount: number;
  operationStatus?: OperationStatus;
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
  id: string;
  meta?: Meta;
  /** The name of the user, can be used for login */
  name: string;
  firstName: string;
  lastName: string;
  /** / Email address, can be used for login */
  email: string;
  /** / New email address; set by `requestEmailChange` and overrides actual email upon `confirmEmailChange` */
  newEmail: string;
  /** / If the user was activated via the activation process */
  active: boolean;
  /** / Activation code used in the activation process */
  activationCode: string;
  /** / Raw password, not stored */
  password: string;
  /** / Encrypted password, stored */
  passwordHash: string;
  /** A user can have multiple roles and different attributes coupled with each role */
  roleAssociations: RoleAssociation[];
  /** timezone_id specifications */
  timezoneId: string;
  /** locale specifications */
  localeId: string;
  /** default hierarchical scope */
  defaultScope: string;
  /** true in case in case of `register`; set to false after activation */
  unauthenticated: boolean;
  /** / Is the user a guest. A guest is a automatically generated user which can later be turned in a non-guest user. */
  guest: boolean;
  image?: Image;
  userType: UserType;
  /** For user invitation */
  invite: boolean;
  /** user who is inviting */
  invitedByUserName: string;
  /** First name of user inviting */
  invitedByUserFirstName: string;
  /** Last name of user inviting */
  invitedByUserLastName: string;
  tokens: Tokens[];
  lastAccess: number;
  /** / additional data */
  data?: Any;
}

/** A User resource with role */
export interface UserRole {
  /** / User ID, unique, key */
  id: string;
  meta?: Meta;
  /** The name of the user, can be used for login */
  name: string;
  firstName: string;
  lastName: string;
  /** / Email address, can be used for login */
  email: string;
  /** / New email address; set by `requestEmailChange` and overrides actual email upon `confirmEmailChange` */
  newEmail: string;
  /** / If the user was activated via the activation process */
  active: boolean;
  /** / Activation code used in the activation process */
  activationCode: string;
  /** / Raw password, not stored */
  password: string;
  /** / Encrypted password, stored */
  passwordHash: string;
  /** A user can have multiple roles and different attributes coupled with each role */
  roleAssociations: RoleAssociation[];
  /** timezone_id specifications */
  timezoneId: string;
  /** locale specifications */
  localeId: string;
  /** default hierarchical scope */
  defaultScope: string;
  /** true in case in case of `register`; set to false after activation */
  unauthenticated: boolean;
  /** / Is the user a guest. A guest is a automatically generated user which can later be turned in a non-guest user. */
  guest: boolean;
  image?: Image;
  userType: UserType;
  /** For user invitation */
  invite: boolean;
  /** user who is inviting */
  invitedByUserName: string;
  /** First name of user inviting */
  invitedByUserFirstName: string;
  /** Last name of user inviting */
  invitedByUserLastName: string;
  tokens: Tokens[];
  lastAccess: number;
  /** / additional data */
  data?: Any;
  role: Role[];
}

function createBaseLoginRequest(): LoginRequest {
  return { identifier: "", password: "", token: "" };
}

export const LoginRequest = {
  encode(
    message: LoginRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginRequest();
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
    return {
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
      password: isSet(object.password) ? String(object.password) : "",
      token: isSet(object.token) ? String(object.token) : "",
    };
  },

  toJSON(message: LoginRequest): unknown {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.password !== undefined && (obj.password = message.password);
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  fromPartial(object: DeepPartial<LoginRequest>): LoginRequest {
    const message = createBaseLoginRequest();
    message.identifier = object.identifier ?? "";
    message.password = object.password ?? "";
    message.token = object.token ?? "";
    return message;
  },
};

function createBaseOrgIDRequest(): OrgIDRequest {
  return { orgIds: [], subject: undefined };
}

export const OrgIDRequest = {
  encode(
    message: OrgIDRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.orgIds) {
      writer.uint32(10).string(v!);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrgIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrgIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orgIds.push(reader.string());
          break;
        case 2:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrgIDRequest {
    return {
      orgIds: Array.isArray(object?.orgIds)
        ? object.orgIds.map((e: any) => String(e))
        : [],
      subject: isSet(object.subject)
        ? Subject.fromJSON(object.subject)
        : undefined,
    };
  },

  toJSON(message: OrgIDRequest): unknown {
    const obj: any = {};
    if (message.orgIds) {
      obj.orgIds = message.orgIds.map((e) => e);
    } else {
      obj.orgIds = [];
    }
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<OrgIDRequest>): OrgIDRequest {
    const message = createBaseOrgIDRequest();
    message.orgIds = object.orgIds?.map((e) => e) || [];
    message.subject =
      object.subject !== undefined && object.subject !== null
        ? Subject.fromPartial(object.subject)
        : undefined;
    return message;
  },
};

function createBaseDeleteUsersByOrgResponse(): DeleteUsersByOrgResponse {
  return { userIds: [], operationStatus: undefined };
}

export const DeleteUsersByOrgResponse = {
  encode(
    message: DeleteUsersByOrgResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.userIds) {
      writer.uint32(10).string(v!);
    }
    if (message.operationStatus !== undefined) {
      OperationStatus.encode(
        message.operationStatus,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteUsersByOrgResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteUsersByOrgResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userIds.push(reader.string());
          break;
        case 2:
          message.operationStatus = OperationStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteUsersByOrgResponse {
    return {
      userIds: Array.isArray(object?.userIds)
        ? object.userIds.map((e: any) => String(e))
        : [],
      operationStatus: isSet(object.operationStatus)
        ? OperationStatus.fromJSON(object.operationStatus)
        : undefined,
    };
  },

  toJSON(message: DeleteUsersByOrgResponse): unknown {
    const obj: any = {};
    if (message.userIds) {
      obj.userIds = message.userIds.map((e) => e);
    } else {
      obj.userIds = [];
    }
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus
        ? OperationStatus.toJSON(message.operationStatus)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeleteUsersByOrgResponse>
  ): DeleteUsersByOrgResponse {
    const message = createBaseDeleteUsersByOrgResponse();
    message.userIds = object.userIds?.map((e) => e) || [];
    message.operationStatus =
      object.operationStatus !== undefined && object.operationStatus !== null
        ? OperationStatus.fromPartial(object.operationStatus)
        : undefined;
    return message;
  },
};

function createBaseFindRequest(): FindRequest {
  return { id: "", name: "", email: "", subject: undefined };
}

export const FindRequest = {
  encode(
    message: FindRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(26).string(message.email);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindRequest();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FindRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      email: isSet(object.email) ? String(object.email) : "",
      subject: isSet(object.subject)
        ? Subject.fromJSON(object.subject)
        : undefined,
    };
  },

  toJSON(message: FindRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.email !== undefined && (obj.email = message.email);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<FindRequest>): FindRequest {
    const message = createBaseFindRequest();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.email = object.email ?? "";
    message.subject =
      object.subject !== undefined && object.subject !== null
        ? Subject.fromPartial(object.subject)
        : undefined;
    return message;
  },
};

function createBaseFindByTokenRequest(): FindByTokenRequest {
  return { token: "" };
}

export const FindByTokenRequest = {
  encode(
    message: FindByTokenRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindByTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindByTokenRequest();
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

  fromJSON(object: any): FindByTokenRequest {
    return {
      token: isSet(object.token) ? String(object.token) : "",
    };
  },

  toJSON(message: FindByTokenRequest): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  fromPartial(object: DeepPartial<FindByTokenRequest>): FindByTokenRequest {
    const message = createBaseFindByTokenRequest();
    message.token = object.token ?? "";
    return message;
  },
};

function createBaseRegisterRequest(): RegisterRequest {
  return {
    id: "",
    guest: false,
    meta: undefined,
    name: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    timezoneId: "",
    localeId: "",
    defaultScope: "",
    userType: UserType.ORG_USER,
    captchaCode: "",
  };
}

export const RegisterRequest = {
  encode(
    message: RegisterRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.guest === true) {
      writer.uint32(16).bool(message.guest);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(26).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.firstName !== "") {
      writer.uint32(42).string(message.firstName);
    }
    if (message.lastName !== "") {
      writer.uint32(50).string(message.lastName);
    }
    if (message.email !== "") {
      writer.uint32(58).string(message.email);
    }
    if (message.password !== "") {
      writer.uint32(66).string(message.password);
    }
    if (message.timezoneId !== "") {
      writer.uint32(74).string(message.timezoneId);
    }
    if (message.localeId !== "") {
      writer.uint32(82).string(message.localeId);
    }
    if (message.defaultScope !== "") {
      writer.uint32(90).string(message.defaultScope);
    }
    if (message.userType !== UserType.ORG_USER) {
      writer.uint32(96).int32(userTypeToNumber(message.userType));
    }
    if (message.captchaCode !== "") {
      writer.uint32(106).string(message.captchaCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterRequest();
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
          message.defaultScope = reader.string();
          break;
        case 12:
          message.userType = userTypeFromJSON(reader.int32());
          break;
        case 13:
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
    return {
      id: isSet(object.id) ? String(object.id) : "",
      guest: isSet(object.guest) ? Boolean(object.guest) : false,
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      firstName: isSet(object.firstName) ? String(object.firstName) : "",
      lastName: isSet(object.lastName) ? String(object.lastName) : "",
      email: isSet(object.email) ? String(object.email) : "",
      password: isSet(object.password) ? String(object.password) : "",
      timezoneId: isSet(object.timezoneId) ? String(object.timezoneId) : "",
      localeId: isSet(object.localeId) ? String(object.localeId) : "",
      defaultScope: isSet(object.defaultScope)
        ? String(object.defaultScope)
        : "",
      userType: isSet(object.userType)
        ? userTypeFromJSON(object.userType)
        : UserType.ORG_USER,
      captchaCode: isSet(object.captchaCode) ? String(object.captchaCode) : "",
    };
  },

  toJSON(message: RegisterRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.guest !== undefined && (obj.guest = message.guest);
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.firstName !== undefined && (obj.firstName = message.firstName);
    message.lastName !== undefined && (obj.lastName = message.lastName);
    message.email !== undefined && (obj.email = message.email);
    message.password !== undefined && (obj.password = message.password);
    message.timezoneId !== undefined && (obj.timezoneId = message.timezoneId);
    message.localeId !== undefined && (obj.localeId = message.localeId);
    message.defaultScope !== undefined &&
      (obj.defaultScope = message.defaultScope);
    message.userType !== undefined &&
      (obj.userType = userTypeToJSON(message.userType));
    message.captchaCode !== undefined &&
      (obj.captchaCode = message.captchaCode);
    return obj;
  },

  fromPartial(object: DeepPartial<RegisterRequest>): RegisterRequest {
    const message = createBaseRegisterRequest();
    message.id = object.id ?? "";
    message.guest = object.guest ?? false;
    message.meta =
      object.meta !== undefined && object.meta !== null
        ? Meta.fromPartial(object.meta)
        : undefined;
    message.name = object.name ?? "";
    message.firstName = object.firstName ?? "";
    message.lastName = object.lastName ?? "";
    message.email = object.email ?? "";
    message.password = object.password ?? "";
    message.timezoneId = object.timezoneId ?? "";
    message.localeId = object.localeId ?? "";
    message.defaultScope = object.defaultScope ?? "";
    message.userType = object.userType ?? UserType.ORG_USER;
    message.captchaCode = object.captchaCode ?? "";
    return message;
  },
};

function createBaseActivateRequest(): ActivateRequest {
  return { identifier: "", activationCode: "", subject: undefined };
}

export const ActivateRequest = {
  encode(
    message: ActivateRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    if (message.activationCode !== "") {
      writer.uint32(18).string(message.activationCode);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActivateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActivateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;
        case 2:
          message.activationCode = reader.string();
          break;
        case 3:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActivateRequest {
    return {
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
      activationCode: isSet(object.activationCode)
        ? String(object.activationCode)
        : "",
      subject: isSet(object.subject)
        ? Subject.fromJSON(object.subject)
        : undefined,
    };
  },

  toJSON(message: ActivateRequest): unknown {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.activationCode !== undefined &&
      (obj.activationCode = message.activationCode);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ActivateRequest>): ActivateRequest {
    const message = createBaseActivateRequest();
    message.identifier = object.identifier ?? "";
    message.activationCode = object.activationCode ?? "";
    message.subject =
      object.subject !== undefined && object.subject !== null
        ? Subject.fromPartial(object.subject)
        : undefined;
    return message;
  },
};

function createBaseConfirmUserInvitationRequest(): ConfirmUserInvitationRequest {
  return {
    identifier: "",
    password: "",
    activationCode: "",
    subject: undefined,
  };
}

export const ConfirmUserInvitationRequest = {
  encode(
    message: ConfirmUserInvitationRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    if (message.activationCode !== "") {
      writer.uint32(26).string(message.activationCode);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ConfirmUserInvitationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfirmUserInvitationRequest();
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
          message.activationCode = reader.string();
          break;
        case 4:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConfirmUserInvitationRequest {
    return {
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
      password: isSet(object.password) ? String(object.password) : "",
      activationCode: isSet(object.activationCode)
        ? String(object.activationCode)
        : "",
      subject: isSet(object.subject)
        ? Subject.fromJSON(object.subject)
        : undefined,
    };
  },

  toJSON(message: ConfirmUserInvitationRequest): unknown {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.password !== undefined && (obj.password = message.password);
    message.activationCode !== undefined &&
      (obj.activationCode = message.activationCode);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ConfirmUserInvitationRequest>
  ): ConfirmUserInvitationRequest {
    const message = createBaseConfirmUserInvitationRequest();
    message.identifier = object.identifier ?? "";
    message.password = object.password ?? "";
    message.activationCode = object.activationCode ?? "";
    message.subject =
      object.subject !== undefined && object.subject !== null
        ? Subject.fromPartial(object.subject)
        : undefined;
    return message;
  },
};

function createBaseSendInvitationEmailRequest(): SendInvitationEmailRequest {
  return { identifier: "", invitedByUserIdentifier: "", subject: undefined };
}

export const SendInvitationEmailRequest = {
  encode(
    message: SendInvitationEmailRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    if (message.invitedByUserIdentifier !== "") {
      writer.uint32(18).string(message.invitedByUserIdentifier);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SendInvitationEmailRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendInvitationEmailRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;
        case 2:
          message.invitedByUserIdentifier = reader.string();
          break;
        case 3:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SendInvitationEmailRequest {
    return {
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
      invitedByUserIdentifier: isSet(object.invitedByUserIdentifier)
        ? String(object.invitedByUserIdentifier)
        : "",
      subject: isSet(object.subject)
        ? Subject.fromJSON(object.subject)
        : undefined,
    };
  },

  toJSON(message: SendInvitationEmailRequest): unknown {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.invitedByUserIdentifier !== undefined &&
      (obj.invitedByUserIdentifier = message.invitedByUserIdentifier);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SendInvitationEmailRequest>
  ): SendInvitationEmailRequest {
    const message = createBaseSendInvitationEmailRequest();
    message.identifier = object.identifier ?? "";
    message.invitedByUserIdentifier = object.invitedByUserIdentifier ?? "";
    message.subject =
      object.subject !== undefined && object.subject !== null
        ? Subject.fromPartial(object.subject)
        : undefined;
    return message;
  },
};

function createBaseChangePasswordRequest(): ChangePasswordRequest {
  return { password: "", newPassword: "", subject: undefined };
}

export const ChangePasswordRequest = {
  encode(
    message: ChangePasswordRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    if (message.newPassword !== "") {
      writer.uint32(26).string(message.newPassword);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ChangePasswordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChangePasswordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.password = reader.string();
          break;
        case 3:
          message.newPassword = reader.string();
          break;
        case 4:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChangePasswordRequest {
    return {
      password: isSet(object.password) ? String(object.password) : "",
      newPassword: isSet(object.newPassword) ? String(object.newPassword) : "",
      subject: isSet(object.subject)
        ? Subject.fromJSON(object.subject)
        : undefined,
    };
  },

  toJSON(message: ChangePasswordRequest): unknown {
    const obj: any = {};
    message.password !== undefined && (obj.password = message.password);
    message.newPassword !== undefined &&
      (obj.newPassword = message.newPassword);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ChangePasswordRequest>
  ): ChangePasswordRequest {
    const message = createBaseChangePasswordRequest();
    message.password = object.password ?? "";
    message.newPassword = object.newPassword ?? "";
    message.subject =
      object.subject !== undefined && object.subject !== null
        ? Subject.fromPartial(object.subject)
        : undefined;
    return message;
  },
};

function createBaseRequestPasswordChangeRequest(): RequestPasswordChangeRequest {
  return { identifier: "", subject: undefined };
}

export const RequestPasswordChangeRequest = {
  encode(
    message: RequestPasswordChangeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RequestPasswordChangeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestPasswordChangeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;
        case 2:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestPasswordChangeRequest {
    return {
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
      subject: isSet(object.subject)
        ? Subject.fromJSON(object.subject)
        : undefined,
    };
  },

  toJSON(message: RequestPasswordChangeRequest): unknown {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RequestPasswordChangeRequest>
  ): RequestPasswordChangeRequest {
    const message = createBaseRequestPasswordChangeRequest();
    message.identifier = object.identifier ?? "";
    message.subject =
      object.subject !== undefined && object.subject !== null
        ? Subject.fromPartial(object.subject)
        : undefined;
    return message;
  },
};

function createBaseConfirmPasswordChangeRequest(): ConfirmPasswordChangeRequest {
  return {
    identifier: "",
    activationCode: "",
    password: "",
    subject: undefined,
  };
}

export const ConfirmPasswordChangeRequest = {
  encode(
    message: ConfirmPasswordChangeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    if (message.activationCode !== "") {
      writer.uint32(18).string(message.activationCode);
    }
    if (message.password !== "") {
      writer.uint32(26).string(message.password);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ConfirmPasswordChangeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfirmPasswordChangeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConfirmPasswordChangeRequest {
    return {
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
      activationCode: isSet(object.activationCode)
        ? String(object.activationCode)
        : "",
      password: isSet(object.password) ? String(object.password) : "",
      subject: isSet(object.subject)
        ? Subject.fromJSON(object.subject)
        : undefined,
    };
  },

  toJSON(message: ConfirmPasswordChangeRequest): unknown {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.activationCode !== undefined &&
      (obj.activationCode = message.activationCode);
    message.password !== undefined && (obj.password = message.password);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ConfirmPasswordChangeRequest>
  ): ConfirmPasswordChangeRequest {
    const message = createBaseConfirmPasswordChangeRequest();
    message.identifier = object.identifier ?? "";
    message.activationCode = object.activationCode ?? "";
    message.password = object.password ?? "";
    message.subject =
      object.subject !== undefined && object.subject !== null
        ? Subject.fromPartial(object.subject)
        : undefined;
    return message;
  },
};

function createBaseChangeEmailRequest(): ChangeEmailRequest {
  return { identifier: "", newEmail: "", subject: undefined };
}

export const ChangeEmailRequest = {
  encode(
    message: ChangeEmailRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    if (message.newEmail !== "") {
      writer.uint32(18).string(message.newEmail);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChangeEmailRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChangeEmailRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;
        case 2:
          message.newEmail = reader.string();
          break;
        case 3:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChangeEmailRequest {
    return {
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
      newEmail: isSet(object.newEmail) ? String(object.newEmail) : "",
      subject: isSet(object.subject)
        ? Subject.fromJSON(object.subject)
        : undefined,
    };
  },

  toJSON(message: ChangeEmailRequest): unknown {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.newEmail !== undefined && (obj.newEmail = message.newEmail);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ChangeEmailRequest>): ChangeEmailRequest {
    const message = createBaseChangeEmailRequest();
    message.identifier = object.identifier ?? "";
    message.newEmail = object.newEmail ?? "";
    message.subject =
      object.subject !== undefined && object.subject !== null
        ? Subject.fromPartial(object.subject)
        : undefined;
    return message;
  },
};

function createBaseConfirmEmailChangeRequest(): ConfirmEmailChangeRequest {
  return { identifier: "", activationCode: "", subject: undefined };
}

export const ConfirmEmailChangeRequest = {
  encode(
    message: ConfirmEmailChangeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    if (message.activationCode !== "") {
      writer.uint32(18).string(message.activationCode);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ConfirmEmailChangeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfirmEmailChangeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;
        case 2:
          message.activationCode = reader.string();
          break;
        case 3:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConfirmEmailChangeRequest {
    return {
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
      activationCode: isSet(object.activationCode)
        ? String(object.activationCode)
        : "",
      subject: isSet(object.subject)
        ? Subject.fromJSON(object.subject)
        : undefined,
    };
  },

  toJSON(message: ConfirmEmailChangeRequest): unknown {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.activationCode !== undefined &&
      (obj.activationCode = message.activationCode);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ConfirmEmailChangeRequest>
  ): ConfirmEmailChangeRequest {
    const message = createBaseConfirmEmailChangeRequest();
    message.identifier = object.identifier ?? "";
    message.activationCode = object.activationCode ?? "";
    message.subject =
      object.subject !== undefined && object.subject !== null
        ? Subject.fromPartial(object.subject)
        : undefined;
    return message;
  },
};

function createBaseUnregisterRequest(): UnregisterRequest {
  return { identifier: "", subject: undefined };
}

export const UnregisterRequest = {
  encode(
    message: UnregisterRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnregisterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnregisterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;
        case 2:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnregisterRequest {
    return {
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
      subject: isSet(object.subject)
        ? Subject.fromJSON(object.subject)
        : undefined,
    };
  },

  toJSON(message: UnregisterRequest): unknown {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<UnregisterRequest>): UnregisterRequest {
    const message = createBaseUnregisterRequest();
    message.identifier = object.identifier ?? "";
    message.subject =
      object.subject !== undefined && object.subject !== null
        ? Subject.fromPartial(object.subject)
        : undefined;
    return message;
  },
};

function createBaseSendActivationEmailRequest(): SendActivationEmailRequest {
  return { identifier: "", subject: undefined };
}

export const SendActivationEmailRequest = {
  encode(
    message: SendActivationEmailRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SendActivationEmailRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendActivationEmailRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;
        case 2:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SendActivationEmailRequest {
    return {
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
      subject: isSet(object.subject)
        ? Subject.fromJSON(object.subject)
        : undefined,
    };
  },

  toJSON(message: SendActivationEmailRequest): unknown {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SendActivationEmailRequest>
  ): SendActivationEmailRequest {
    const message = createBaseSendActivationEmailRequest();
    message.identifier = object.identifier ?? "";
    message.subject =
      object.subject !== undefined && object.subject !== null
        ? Subject.fromPartial(object.subject)
        : undefined;
    return message;
  },
};

function createBaseDeleted(): Deleted {
  return { id: "" };
}

export const Deleted = {
  encode(
    message: Deleted,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Deleted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleted();
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
    return {
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: Deleted): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<Deleted>): Deleted {
    const message = createBaseDeleted();
    message.id = object.id ?? "";
    return message;
  },
};

function createBasePasswordChanged(): PasswordChanged {
  return { id: "", passwordHash: "" };
}

export const PasswordChanged = {
  encode(
    message: PasswordChanged,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.passwordHash !== "") {
      writer.uint32(18).string(message.passwordHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PasswordChanged {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePasswordChanged();
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
    return {
      id: isSet(object.id) ? String(object.id) : "",
      passwordHash: isSet(object.passwordHash)
        ? String(object.passwordHash)
        : "",
    };
  },

  toJSON(message: PasswordChanged): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.passwordHash !== undefined &&
      (obj.passwordHash = message.passwordHash);
    return obj;
  },

  fromPartial(object: DeepPartial<PasswordChanged>): PasswordChanged {
    const message = createBasePasswordChanged();
    message.id = object.id ?? "";
    message.passwordHash = object.passwordHash ?? "";
    return message;
  },
};

function createBasePasswordChangeRequested(): PasswordChangeRequested {
  return { id: "" };
}

export const PasswordChangeRequested = {
  encode(
    message: PasswordChangeRequested,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PasswordChangeRequested {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePasswordChangeRequested();
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
    return {
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: PasswordChangeRequested): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<PasswordChangeRequested>
  ): PasswordChangeRequested {
    const message = createBasePasswordChangeRequested();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseEmailChangeRequested(): EmailChangeRequested {
  return { id: "", activationCode: "", newEmail: "" };
}

export const EmailChangeRequested = {
  encode(
    message: EmailChangeRequested,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.activationCode !== "") {
      writer.uint32(18).string(message.activationCode);
    }
    if (message.newEmail !== "") {
      writer.uint32(26).string(message.newEmail);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EmailChangeRequested {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmailChangeRequested();
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
    return {
      id: isSet(object.id) ? String(object.id) : "",
      activationCode: isSet(object.activationCode)
        ? String(object.activationCode)
        : "",
      newEmail: isSet(object.newEmail) ? String(object.newEmail) : "",
    };
  },

  toJSON(message: EmailChangeRequested): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.activationCode !== undefined &&
      (obj.activationCode = message.activationCode);
    message.newEmail !== undefined && (obj.newEmail = message.newEmail);
    return obj;
  },

  fromPartial(object: DeepPartial<EmailChangeRequested>): EmailChangeRequested {
    const message = createBaseEmailChangeRequested();
    message.id = object.id ?? "";
    message.activationCode = object.activationCode ?? "";
    message.newEmail = object.newEmail ?? "";
    return message;
  },
};

function createBaseEmailChangeConfirmed(): EmailChangeConfirmed {
  return { id: "", email: "" };
}

export const EmailChangeConfirmed = {
  encode(
    message: EmailChangeConfirmed,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EmailChangeConfirmed {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmailChangeConfirmed();
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
    return {
      id: isSet(object.id) ? String(object.id) : "",
      email: isSet(object.email) ? String(object.email) : "",
    };
  },

  toJSON(message: EmailChangeConfirmed): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.email !== undefined && (obj.email = message.email);
    return obj;
  },

  fromPartial(object: DeepPartial<EmailChangeConfirmed>): EmailChangeConfirmed {
    const message = createBaseEmailChangeConfirmed();
    message.id = object.id ?? "";
    message.email = object.email ?? "";
    return message;
  },
};

function createBaseUserList(): UserList {
  return { items: [], totalCount: 0, subject: undefined };
}

export const UserList = {
  encode(
    message: UserList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      User.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserList();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserList {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => User.fromJSON(e))
        : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
      subject: isSet(object.subject)
        ? Subject.fromJSON(object.subject)
        : undefined,
    };
  },

  toJSON(message: UserList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => (e ? User.toJSON(e) : undefined));
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined &&
      (obj.totalCount = Math.round(message.totalCount));
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<UserList>): UserList {
    const message = createBaseUserList();
    message.items = object.items?.map((e) => User.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    message.subject =
      object.subject !== undefined && object.subject !== null
        ? Subject.fromPartial(object.subject)
        : undefined;
    return message;
  },
};

function createBaseUserListWithRoleResponse(): UserListWithRoleResponse {
  return { items: [], totalCount: 0, operationStatus: undefined };
}

export const UserListWithRoleResponse = {
  encode(
    message: UserListWithRoleResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      UserRoleResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.operationStatus !== undefined) {
      OperationStatus.encode(
        message.operationStatus,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UserListWithRoleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserListWithRoleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(UserRoleResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalCount = reader.uint32();
          break;
        case 3:
          message.operationStatus = OperationStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserListWithRoleResponse {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => UserRoleResponse.fromJSON(e))
        : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
      operationStatus: isSet(object.operationStatus)
        ? OperationStatus.fromJSON(object.operationStatus)
        : undefined,
    };
  },

  toJSON(message: UserListWithRoleResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? UserRoleResponse.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined &&
      (obj.totalCount = Math.round(message.totalCount));
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus
        ? OperationStatus.toJSON(message.operationStatus)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UserListWithRoleResponse>
  ): UserListWithRoleResponse {
    const message = createBaseUserListWithRoleResponse();
    message.items =
      object.items?.map((e) => UserRoleResponse.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    message.operationStatus =
      object.operationStatus !== undefined && object.operationStatus !== null
        ? OperationStatus.fromPartial(object.operationStatus)
        : undefined;
    return message;
  },
};

function createBaseUserRoleResponse(): UserRoleResponse {
  return { payload: undefined, status: undefined };
}

export const UserRoleResponse = {
  encode(
    message: UserRoleResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.payload !== undefined) {
      UserRole.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserRoleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserRoleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = UserRole.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = Status.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserRoleResponse {
    return {
      payload: isSet(object.payload)
        ? UserRole.fromJSON(object.payload)
        : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: UserRoleResponse): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload
        ? UserRole.toJSON(message.payload)
        : undefined);
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<UserRoleResponse>): UserRoleResponse {
    const message = createBaseUserRoleResponse();
    message.payload =
      object.payload !== undefined && object.payload !== null
        ? UserRole.fromPartial(object.payload)
        : undefined;
    message.status =
      object.status !== undefined && object.status !== null
        ? Status.fromPartial(object.status)
        : undefined;
    return message;
  },
};

function createBaseUserListResponse(): UserListResponse {
  return { items: [], totalCount: 0, operationStatus: undefined };
}

export const UserListResponse = {
  encode(
    message: UserListResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      UserResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.operationStatus !== undefined) {
      OperationStatus.encode(
        message.operationStatus,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(UserResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalCount = reader.uint32();
          break;
        case 3:
          message.operationStatus = OperationStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserListResponse {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => UserResponse.fromJSON(e))
        : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
      operationStatus: isSet(object.operationStatus)
        ? OperationStatus.fromJSON(object.operationStatus)
        : undefined,
    };
  },

  toJSON(message: UserListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? UserResponse.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined &&
      (obj.totalCount = Math.round(message.totalCount));
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus
        ? OperationStatus.toJSON(message.operationStatus)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<UserListResponse>): UserListResponse {
    const message = createBaseUserListResponse();
    message.items = object.items?.map((e) => UserResponse.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    message.operationStatus =
      object.operationStatus !== undefined && object.operationStatus !== null
        ? OperationStatus.fromPartial(object.operationStatus)
        : undefined;
    return message;
  },
};

function createBaseUserResponse(): UserResponse {
  return { payload: undefined, status: undefined };
}

export const UserResponse = {
  encode(
    message: UserResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.payload !== undefined) {
      User.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = User.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = Status.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserResponse {
    return {
      payload: isSet(object.payload)
        ? User.fromJSON(object.payload)
        : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: UserResponse): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload
        ? User.toJSON(message.payload)
        : undefined);
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<UserResponse>): UserResponse {
    const message = createBaseUserResponse();
    message.payload =
      object.payload !== undefined && object.payload !== null
        ? User.fromPartial(object.payload)
        : undefined;
    message.status =
      object.status !== undefined && object.status !== null
        ? Status.fromPartial(object.status)
        : undefined;
    return message;
  },
};

function createBaseActivate(): Activate {
  return { id: "" };
}

export const Activate = {
  encode(
    message: Activate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Activate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActivate();
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
    return {
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: Activate): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
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
  encode(
    message: FindByRoleRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindByRoleRequest();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FindByRoleRequest {
    return {
      role: isSet(object.role) ? String(object.role) : "",
      attributes: Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => Attribute.fromJSON(e))
        : [],
      subject: isSet(object.subject)
        ? Subject.fromJSON(object.subject)
        : undefined,
    };
  },

  toJSON(message: FindByRoleRequest): unknown {
    const obj: any = {};
    message.role !== undefined && (obj.role = message.role);
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) =>
        e ? Attribute.toJSON(e) : undefined
      );
    } else {
      obj.attributes = [];
    }
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<FindByRoleRequest>): FindByRoleRequest {
    const message = createBaseFindByRoleRequest();
    message.role = object.role ?? "";
    message.attributes =
      object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    message.subject =
      object.subject !== undefined && object.subject !== null
        ? Subject.fromPartial(object.subject)
        : undefined;
    return message;
  },
};

function createBaseUser(): User {
  return {
    id: "",
    meta: undefined,
    name: "",
    firstName: "",
    lastName: "",
    email: "",
    newEmail: "",
    active: false,
    activationCode: "",
    password: "",
    passwordHash: "",
    roleAssociations: [],
    timezoneId: "",
    localeId: "",
    defaultScope: "",
    unauthenticated: false,
    guest: false,
    image: undefined,
    userType: UserType.ORG_USER,
    invite: false,
    invitedByUserName: "",
    invitedByUserFirstName: "",
    invitedByUserLastName: "",
    tokens: [],
    lastAccess: 0,
    data: undefined,
  };
}

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.firstName !== "") {
      writer.uint32(34).string(message.firstName);
    }
    if (message.lastName !== "") {
      writer.uint32(42).string(message.lastName);
    }
    if (message.email !== "") {
      writer.uint32(50).string(message.email);
    }
    if (message.newEmail !== "") {
      writer.uint32(58).string(message.newEmail);
    }
    if (message.active === true) {
      writer.uint32(64).bool(message.active);
    }
    if (message.activationCode !== "") {
      writer.uint32(74).string(message.activationCode);
    }
    if (message.password !== "") {
      writer.uint32(82).string(message.password);
    }
    if (message.passwordHash !== "") {
      writer.uint32(90).string(message.passwordHash);
    }
    for (const v of message.roleAssociations) {
      RoleAssociation.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.timezoneId !== "") {
      writer.uint32(106).string(message.timezoneId);
    }
    if (message.localeId !== "") {
      writer.uint32(114).string(message.localeId);
    }
    if (message.defaultScope !== "") {
      writer.uint32(122).string(message.defaultScope);
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
    if (message.userType !== UserType.ORG_USER) {
      writer.uint32(152).int32(userTypeToNumber(message.userType));
    }
    if (message.invite === true) {
      writer.uint32(160).bool(message.invite);
    }
    if (message.invitedByUserName !== "") {
      writer.uint32(170).string(message.invitedByUserName);
    }
    if (message.invitedByUserFirstName !== "") {
      writer.uint32(178).string(message.invitedByUserFirstName);
    }
    if (message.invitedByUserLastName !== "") {
      writer.uint32(186).string(message.invitedByUserLastName);
    }
    for (const v of message.tokens) {
      Tokens.encode(v!, writer.uint32(194).fork()).ldelim();
    }
    if (message.lastAccess !== 0) {
      writer.uint32(201).double(message.lastAccess);
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(210).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
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
          message.roleAssociations.push(
            RoleAssociation.decode(reader, reader.uint32())
          );
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
          message.userType = userTypeFromJSON(reader.int32());
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
          message.lastAccess = reader.double();
          break;
        case 26:
          message.data = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): User {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      firstName: isSet(object.firstName) ? String(object.firstName) : "",
      lastName: isSet(object.lastName) ? String(object.lastName) : "",
      email: isSet(object.email) ? String(object.email) : "",
      newEmail: isSet(object.newEmail) ? String(object.newEmail) : "",
      active: isSet(object.active) ? Boolean(object.active) : false,
      activationCode: isSet(object.activationCode)
        ? String(object.activationCode)
        : "",
      password: isSet(object.password) ? String(object.password) : "",
      passwordHash: isSet(object.passwordHash)
        ? String(object.passwordHash)
        : "",
      roleAssociations: Array.isArray(object?.roleAssociations)
        ? object.roleAssociations.map((e: any) => RoleAssociation.fromJSON(e))
        : [],
      timezoneId: isSet(object.timezoneId) ? String(object.timezoneId) : "",
      localeId: isSet(object.localeId) ? String(object.localeId) : "",
      defaultScope: isSet(object.defaultScope)
        ? String(object.defaultScope)
        : "",
      unauthenticated: isSet(object.unauthenticated)
        ? Boolean(object.unauthenticated)
        : false,
      guest: isSet(object.guest) ? Boolean(object.guest) : false,
      image: isSet(object.image) ? Image.fromJSON(object.image) : undefined,
      userType: isSet(object.userType)
        ? userTypeFromJSON(object.userType)
        : UserType.ORG_USER,
      invite: isSet(object.invite) ? Boolean(object.invite) : false,
      invitedByUserName: isSet(object.invitedByUserName)
        ? String(object.invitedByUserName)
        : "",
      invitedByUserFirstName: isSet(object.invitedByUserFirstName)
        ? String(object.invitedByUserFirstName)
        : "",
      invitedByUserLastName: isSet(object.invitedByUserLastName)
        ? String(object.invitedByUserLastName)
        : "",
      tokens: Array.isArray(object?.tokens)
        ? object.tokens.map((e: any) => Tokens.fromJSON(e))
        : [],
      lastAccess: isSet(object.lastAccess) ? Number(object.lastAccess) : 0,
      data: isSet(object.data) ? Any.fromJSON(object.data) : undefined,
    };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.firstName !== undefined && (obj.firstName = message.firstName);
    message.lastName !== undefined && (obj.lastName = message.lastName);
    message.email !== undefined && (obj.email = message.email);
    message.newEmail !== undefined && (obj.newEmail = message.newEmail);
    message.active !== undefined && (obj.active = message.active);
    message.activationCode !== undefined &&
      (obj.activationCode = message.activationCode);
    message.password !== undefined && (obj.password = message.password);
    message.passwordHash !== undefined &&
      (obj.passwordHash = message.passwordHash);
    if (message.roleAssociations) {
      obj.roleAssociations = message.roleAssociations.map((e) =>
        e ? RoleAssociation.toJSON(e) : undefined
      );
    } else {
      obj.roleAssociations = [];
    }
    message.timezoneId !== undefined && (obj.timezoneId = message.timezoneId);
    message.localeId !== undefined && (obj.localeId = message.localeId);
    message.defaultScope !== undefined &&
      (obj.defaultScope = message.defaultScope);
    message.unauthenticated !== undefined &&
      (obj.unauthenticated = message.unauthenticated);
    message.guest !== undefined && (obj.guest = message.guest);
    message.image !== undefined &&
      (obj.image = message.image ? Image.toJSON(message.image) : undefined);
    message.userType !== undefined &&
      (obj.userType = userTypeToJSON(message.userType));
    message.invite !== undefined && (obj.invite = message.invite);
    message.invitedByUserName !== undefined &&
      (obj.invitedByUserName = message.invitedByUserName);
    message.invitedByUserFirstName !== undefined &&
      (obj.invitedByUserFirstName = message.invitedByUserFirstName);
    message.invitedByUserLastName !== undefined &&
      (obj.invitedByUserLastName = message.invitedByUserLastName);
    if (message.tokens) {
      obj.tokens = message.tokens.map((e) =>
        e ? Tokens.toJSON(e) : undefined
      );
    } else {
      obj.tokens = [];
    }
    message.lastAccess !== undefined && (obj.lastAccess = message.lastAccess);
    message.data !== undefined &&
      (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<User>): User {
    const message = createBaseUser();
    message.id = object.id ?? "";
    message.meta =
      object.meta !== undefined && object.meta !== null
        ? Meta.fromPartial(object.meta)
        : undefined;
    message.name = object.name ?? "";
    message.firstName = object.firstName ?? "";
    message.lastName = object.lastName ?? "";
    message.email = object.email ?? "";
    message.newEmail = object.newEmail ?? "";
    message.active = object.active ?? false;
    message.activationCode = object.activationCode ?? "";
    message.password = object.password ?? "";
    message.passwordHash = object.passwordHash ?? "";
    message.roleAssociations =
      object.roleAssociations?.map((e) => RoleAssociation.fromPartial(e)) || [];
    message.timezoneId = object.timezoneId ?? "";
    message.localeId = object.localeId ?? "";
    message.defaultScope = object.defaultScope ?? "";
    message.unauthenticated = object.unauthenticated ?? false;
    message.guest = object.guest ?? false;
    message.image =
      object.image !== undefined && object.image !== null
        ? Image.fromPartial(object.image)
        : undefined;
    message.userType = object.userType ?? UserType.ORG_USER;
    message.invite = object.invite ?? false;
    message.invitedByUserName = object.invitedByUserName ?? "";
    message.invitedByUserFirstName = object.invitedByUserFirstName ?? "";
    message.invitedByUserLastName = object.invitedByUserLastName ?? "";
    message.tokens = object.tokens?.map((e) => Tokens.fromPartial(e)) || [];
    message.lastAccess = object.lastAccess ?? 0;
    message.data =
      object.data !== undefined && object.data !== null
        ? Any.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseUserRole(): UserRole {
  return {
    id: "",
    meta: undefined,
    name: "",
    firstName: "",
    lastName: "",
    email: "",
    newEmail: "",
    active: false,
    activationCode: "",
    password: "",
    passwordHash: "",
    roleAssociations: [],
    timezoneId: "",
    localeId: "",
    defaultScope: "",
    unauthenticated: false,
    guest: false,
    image: undefined,
    userType: UserType.ORG_USER,
    invite: false,
    invitedByUserName: "",
    invitedByUserFirstName: "",
    invitedByUserLastName: "",
    tokens: [],
    lastAccess: 0,
    data: undefined,
    role: [],
  };
}

export const UserRole = {
  encode(
    message: UserRole,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.firstName !== "") {
      writer.uint32(34).string(message.firstName);
    }
    if (message.lastName !== "") {
      writer.uint32(42).string(message.lastName);
    }
    if (message.email !== "") {
      writer.uint32(50).string(message.email);
    }
    if (message.newEmail !== "") {
      writer.uint32(58).string(message.newEmail);
    }
    if (message.active === true) {
      writer.uint32(64).bool(message.active);
    }
    if (message.activationCode !== "") {
      writer.uint32(74).string(message.activationCode);
    }
    if (message.password !== "") {
      writer.uint32(82).string(message.password);
    }
    if (message.passwordHash !== "") {
      writer.uint32(90).string(message.passwordHash);
    }
    for (const v of message.roleAssociations) {
      RoleAssociation.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.timezoneId !== "") {
      writer.uint32(106).string(message.timezoneId);
    }
    if (message.localeId !== "") {
      writer.uint32(114).string(message.localeId);
    }
    if (message.defaultScope !== "") {
      writer.uint32(122).string(message.defaultScope);
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
    if (message.userType !== UserType.ORG_USER) {
      writer.uint32(152).int32(userTypeToNumber(message.userType));
    }
    if (message.invite === true) {
      writer.uint32(160).bool(message.invite);
    }
    if (message.invitedByUserName !== "") {
      writer.uint32(170).string(message.invitedByUserName);
    }
    if (message.invitedByUserFirstName !== "") {
      writer.uint32(178).string(message.invitedByUserFirstName);
    }
    if (message.invitedByUserLastName !== "") {
      writer.uint32(186).string(message.invitedByUserLastName);
    }
    for (const v of message.tokens) {
      Tokens.encode(v!, writer.uint32(194).fork()).ldelim();
    }
    if (message.lastAccess !== 0) {
      writer.uint32(201).double(message.lastAccess);
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(210).fork()).ldelim();
    }
    for (const v of message.role) {
      Role.encode(v!, writer.uint32(218).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserRole {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserRole();
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
          message.roleAssociations.push(
            RoleAssociation.decode(reader, reader.uint32())
          );
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
          message.userType = userTypeFromJSON(reader.int32());
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
          message.lastAccess = reader.double();
          break;
        case 26:
          message.data = Any.decode(reader, reader.uint32());
          break;
        case 27:
          message.role.push(Role.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserRole {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      firstName: isSet(object.firstName) ? String(object.firstName) : "",
      lastName: isSet(object.lastName) ? String(object.lastName) : "",
      email: isSet(object.email) ? String(object.email) : "",
      newEmail: isSet(object.newEmail) ? String(object.newEmail) : "",
      active: isSet(object.active) ? Boolean(object.active) : false,
      activationCode: isSet(object.activationCode)
        ? String(object.activationCode)
        : "",
      password: isSet(object.password) ? String(object.password) : "",
      passwordHash: isSet(object.passwordHash)
        ? String(object.passwordHash)
        : "",
      roleAssociations: Array.isArray(object?.roleAssociations)
        ? object.roleAssociations.map((e: any) => RoleAssociation.fromJSON(e))
        : [],
      timezoneId: isSet(object.timezoneId) ? String(object.timezoneId) : "",
      localeId: isSet(object.localeId) ? String(object.localeId) : "",
      defaultScope: isSet(object.defaultScope)
        ? String(object.defaultScope)
        : "",
      unauthenticated: isSet(object.unauthenticated)
        ? Boolean(object.unauthenticated)
        : false,
      guest: isSet(object.guest) ? Boolean(object.guest) : false,
      image: isSet(object.image) ? Image.fromJSON(object.image) : undefined,
      userType: isSet(object.userType)
        ? userTypeFromJSON(object.userType)
        : UserType.ORG_USER,
      invite: isSet(object.invite) ? Boolean(object.invite) : false,
      invitedByUserName: isSet(object.invitedByUserName)
        ? String(object.invitedByUserName)
        : "",
      invitedByUserFirstName: isSet(object.invitedByUserFirstName)
        ? String(object.invitedByUserFirstName)
        : "",
      invitedByUserLastName: isSet(object.invitedByUserLastName)
        ? String(object.invitedByUserLastName)
        : "",
      tokens: Array.isArray(object?.tokens)
        ? object.tokens.map((e: any) => Tokens.fromJSON(e))
        : [],
      lastAccess: isSet(object.lastAccess) ? Number(object.lastAccess) : 0,
      data: isSet(object.data) ? Any.fromJSON(object.data) : undefined,
      role: Array.isArray(object?.role)
        ? object.role.map((e: any) => Role.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UserRole): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.firstName !== undefined && (obj.firstName = message.firstName);
    message.lastName !== undefined && (obj.lastName = message.lastName);
    message.email !== undefined && (obj.email = message.email);
    message.newEmail !== undefined && (obj.newEmail = message.newEmail);
    message.active !== undefined && (obj.active = message.active);
    message.activationCode !== undefined &&
      (obj.activationCode = message.activationCode);
    message.password !== undefined && (obj.password = message.password);
    message.passwordHash !== undefined &&
      (obj.passwordHash = message.passwordHash);
    if (message.roleAssociations) {
      obj.roleAssociations = message.roleAssociations.map((e) =>
        e ? RoleAssociation.toJSON(e) : undefined
      );
    } else {
      obj.roleAssociations = [];
    }
    message.timezoneId !== undefined && (obj.timezoneId = message.timezoneId);
    message.localeId !== undefined && (obj.localeId = message.localeId);
    message.defaultScope !== undefined &&
      (obj.defaultScope = message.defaultScope);
    message.unauthenticated !== undefined &&
      (obj.unauthenticated = message.unauthenticated);
    message.guest !== undefined && (obj.guest = message.guest);
    message.image !== undefined &&
      (obj.image = message.image ? Image.toJSON(message.image) : undefined);
    message.userType !== undefined &&
      (obj.userType = userTypeToJSON(message.userType));
    message.invite !== undefined && (obj.invite = message.invite);
    message.invitedByUserName !== undefined &&
      (obj.invitedByUserName = message.invitedByUserName);
    message.invitedByUserFirstName !== undefined &&
      (obj.invitedByUserFirstName = message.invitedByUserFirstName);
    message.invitedByUserLastName !== undefined &&
      (obj.invitedByUserLastName = message.invitedByUserLastName);
    if (message.tokens) {
      obj.tokens = message.tokens.map((e) =>
        e ? Tokens.toJSON(e) : undefined
      );
    } else {
      obj.tokens = [];
    }
    message.lastAccess !== undefined && (obj.lastAccess = message.lastAccess);
    message.data !== undefined &&
      (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    if (message.role) {
      obj.role = message.role.map((e) => (e ? Role.toJSON(e) : undefined));
    } else {
      obj.role = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<UserRole>): UserRole {
    const message = createBaseUserRole();
    message.id = object.id ?? "";
    message.meta =
      object.meta !== undefined && object.meta !== null
        ? Meta.fromPartial(object.meta)
        : undefined;
    message.name = object.name ?? "";
    message.firstName = object.firstName ?? "";
    message.lastName = object.lastName ?? "";
    message.email = object.email ?? "";
    message.newEmail = object.newEmail ?? "";
    message.active = object.active ?? false;
    message.activationCode = object.activationCode ?? "";
    message.password = object.password ?? "";
    message.passwordHash = object.passwordHash ?? "";
    message.roleAssociations =
      object.roleAssociations?.map((e) => RoleAssociation.fromPartial(e)) || [];
    message.timezoneId = object.timezoneId ?? "";
    message.localeId = object.localeId ?? "";
    message.defaultScope = object.defaultScope ?? "";
    message.unauthenticated = object.unauthenticated ?? false;
    message.guest = object.guest ?? false;
    message.image =
      object.image !== undefined && object.image !== null
        ? Image.fromPartial(object.image)
        : undefined;
    message.userType = object.userType ?? UserType.ORG_USER;
    message.invite = object.invite ?? false;
    message.invitedByUserName = object.invitedByUserName ?? "";
    message.invitedByUserFirstName = object.invitedByUserFirstName ?? "";
    message.invitedByUserLastName = object.invitedByUserLastName ?? "";
    message.tokens = object.tokens?.map((e) => Tokens.fromPartial(e)) || [];
    message.lastAccess = object.lastAccess ?? 0;
    message.data =
      object.data !== undefined && object.data !== null
        ? Any.fromPartial(object.data)
        : undefined;
    message.role = object.role?.map((e) => Role.fromPartial(e)) || [];
    return message;
  },
};

/** The microservice for the user resource. */
export type ServiceDefinition = typeof ServiceDefinition;
export const ServiceDefinition = {
  name: "Service",
  fullName: "io.restorecommerce.user.Service",
  methods: {
    read: {
      name: "Read",
      requestType: ReadRequest,
      requestStream: false,
      responseType: UserListWithRoleResponse,
      responseStream: false,
      options: {},
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
      options: {},
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
      options: {},
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
      options: {},
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

export interface ServiceServiceImplementation<CallContextExt = {}> {
  read(
    request: ReadRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<UserListWithRoleResponse>>;
  create(
    request: UserList,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<UserListResponse>>;
  delete(
    request: DeleteRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<DeleteResponse>>;
  update(
    request: UserList,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<UserListResponse>>;
  upsert(
    request: UserList,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<UserListResponse>>;
  find(
    request: FindRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<UserListResponse>>;
  register(
    request: RegisterRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<UserResponse>>;
  activate(
    request: ActivateRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<OperationStatusObj>>;
  changePassword(
    request: ChangePasswordRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<OperationStatusObj>>;
  requestPasswordChange(
    request: RequestPasswordChangeRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<OperationStatusObj>>;
  requestEmailChange(
    request: ChangeEmailRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<OperationStatusObj>>;
  confirmPasswordChange(
    request: ConfirmPasswordChangeRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<OperationStatusObj>>;
  confirmEmailChange(
    request: ConfirmEmailChangeRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<OperationStatusObj>>;
  unregister(
    request: UnregisterRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<OperationStatusObj>>;
  login(
    request: LoginRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<UserResponse>>;
  findByRole(
    request: FindByRoleRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<UserListResponse>>;
  deleteUsersByOrg(
    request: OrgIDRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<DeleteUsersByOrgResponse>>;
  confirmUserInvitation(
    request: ConfirmUserInvitationRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<OperationStatusObj>>;
  sendInvitationEmail(
    request: SendInvitationEmailRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<OperationStatusObj>>;
  findByToken(
    request: FindByTokenRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<UserResponse>>;
  sendActivationEmail(
    request: SendActivationEmailRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<OperationStatusObj>>;
}

export interface ServiceClient<CallOptionsExt = {}> {
  read(
    request: DeepPartial<ReadRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<UserListWithRoleResponse>;
  create(
    request: DeepPartial<UserList>,
    options?: CallOptions & CallOptionsExt
  ): Promise<UserListResponse>;
  delete(
    request: DeepPartial<DeleteRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<DeleteResponse>;
  update(
    request: DeepPartial<UserList>,
    options?: CallOptions & CallOptionsExt
  ): Promise<UserListResponse>;
  upsert(
    request: DeepPartial<UserList>,
    options?: CallOptions & CallOptionsExt
  ): Promise<UserListResponse>;
  find(
    request: DeepPartial<FindRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<UserListResponse>;
  register(
    request: DeepPartial<RegisterRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<UserResponse>;
  activate(
    request: DeepPartial<ActivateRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<OperationStatusObj>;
  changePassword(
    request: DeepPartial<ChangePasswordRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<OperationStatusObj>;
  requestPasswordChange(
    request: DeepPartial<RequestPasswordChangeRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<OperationStatusObj>;
  requestEmailChange(
    request: DeepPartial<ChangeEmailRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<OperationStatusObj>;
  confirmPasswordChange(
    request: DeepPartial<ConfirmPasswordChangeRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<OperationStatusObj>;
  confirmEmailChange(
    request: DeepPartial<ConfirmEmailChangeRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<OperationStatusObj>;
  unregister(
    request: DeepPartial<UnregisterRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<OperationStatusObj>;
  login(
    request: DeepPartial<LoginRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<UserResponse>;
  findByRole(
    request: DeepPartial<FindByRoleRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<UserListResponse>;
  deleteUsersByOrg(
    request: DeepPartial<OrgIDRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<DeleteUsersByOrgResponse>;
  confirmUserInvitation(
    request: DeepPartial<ConfirmUserInvitationRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<OperationStatusObj>;
  sendInvitationEmail(
    request: DeepPartial<SendInvitationEmailRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<OperationStatusObj>;
  findByToken(
    request: DeepPartial<FindByTokenRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<UserResponse>;
  sendActivationEmail(
    request: DeepPartial<SendActivationEmailRequest>,
    options?: CallOptions & CallOptionsExt
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
  fileDescriptor: FileDescriptorProto1.fromPartial({
    name: "io/restorecommerce/user.proto",
    package: "io.restorecommerce.user",
    dependency: [
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
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        name: "LoginRequest",
        field: [
          {
            name: "identifier",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "identifier",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "password",
            number: 2,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "password",
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
      {
        name: "OrgIDRequest",
        field: [
          {
            name: "org_ids",
            number: 1,
            label: 3,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "orgIds",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "subject",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "subject",
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
        name: "DeleteUsersByOrgResponse",
        field: [
          {
            name: "user_ids",
            number: 1,
            label: 3,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "userIds",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "operation_status",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.OperationStatus",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "operationStatus",
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
        name: "FindRequest",
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
            name: "name",
            number: 2,
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
            name: "email",
            number: 3,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "email",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "subject",
            number: 4,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "subject",
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
        name: "FindByTokenRequest",
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
        name: "RegisterRequest",
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
            name: "guest",
            number: 2,
            label: 1,
            type: 8,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "guest",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "meta",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.meta.Meta",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "meta",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "name",
            number: 4,
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
            name: "first_name",
            number: 5,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "firstName",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "last_name",
            number: 6,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "lastName",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "email",
            number: 7,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "email",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "password",
            number: 8,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "password",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "timezone_id",
            number: 9,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "timezoneId",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "locale_id",
            number: 10,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "localeId",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "default_scope",
            number: 11,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "defaultScope",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "user_type",
            number: 12,
            label: 1,
            type: 14,
            typeName: ".io.restorecommerce.user.UserType",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "userType",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "captcha_code",
            number: 13,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "captchaCode",
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
        name: "ActivateRequest",
        field: [
          {
            name: "identifier",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "identifier",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "activation_code",
            number: 2,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "activationCode",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "subject",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "subject",
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
        name: "ConfirmUserInvitationRequest",
        field: [
          {
            name: "identifier",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "identifier",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "password",
            number: 2,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "password",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "activation_code",
            number: 3,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "activationCode",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "subject",
            number: 4,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "subject",
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
        name: "SendInvitationEmailRequest",
        field: [
          {
            name: "identifier",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "identifier",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "invited_by_user_identifier",
            number: 2,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "invitedByUserIdentifier",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "subject",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "subject",
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
        name: "ChangePasswordRequest",
        field: [
          {
            name: "password",
            number: 2,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "password",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "new_password",
            number: 3,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "newPassword",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "subject",
            number: 4,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "subject",
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
        name: "RequestPasswordChangeRequest",
        field: [
          {
            name: "identifier",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "identifier",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "subject",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "subject",
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
        name: "ConfirmPasswordChangeRequest",
        field: [
          {
            name: "identifier",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "identifier",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "activation_code",
            number: 2,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "activationCode",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "password",
            number: 3,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "password",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "subject",
            number: 4,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "subject",
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
        name: "ChangeEmailRequest",
        field: [
          {
            name: "identifier",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "identifier",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "new_email",
            number: 2,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "newEmail",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "subject",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "subject",
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
        name: "ConfirmEmailChangeRequest",
        field: [
          {
            name: "identifier",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "identifier",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "activation_code",
            number: 2,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "activationCode",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "subject",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "subject",
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
        name: "UnregisterRequest",
        field: [
          {
            name: "identifier",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "identifier",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "subject",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "subject",
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
        name: "SendActivationEmailRequest",
        field: [
          {
            name: "identifier",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "identifier",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "subject",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "subject",
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
        name: "Deleted",
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
        name: "PasswordChanged",
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
            name: "password_hash",
            number: 2,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "passwordHash",
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
        name: "PasswordChangeRequested",
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
        name: "EmailChangeRequested",
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
            name: "activation_code",
            number: 2,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "activationCode",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "new_email",
            number: 3,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "newEmail",
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
        name: "EmailChangeConfirmed",
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
            name: "email",
            number: 2,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "email",
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
        name: "UserList",
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.user.User",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "items",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "total_count",
            number: 2,
            label: 1,
            type: 13,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "totalCount",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "subject",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "subject",
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
        name: "UserListWithRoleResponse",
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.user.UserRoleResponse",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "items",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "total_count",
            number: 2,
            label: 1,
            type: 13,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "totalCount",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "operation_status",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.OperationStatus",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "operationStatus",
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
        name: "UserRoleResponse",
        field: [
          {
            name: "payload",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.user.UserRole",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "payload",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "status",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.Status",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "status",
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
        name: "UserListResponse",
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.user.UserResponse",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "items",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "total_count",
            number: 2,
            label: 1,
            type: 13,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "totalCount",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "operation_status",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.OperationStatus",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "operationStatus",
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
        name: "UserResponse",
        field: [
          {
            name: "payload",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.user.User",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "payload",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "status",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.Status",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "status",
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
        name: "Activate",
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
        name: "FindByRoleRequest",
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
            name: "subject",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "subject",
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
        name: "User",
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
            name: "meta",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.meta.Meta",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "meta",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "name",
            number: 3,
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
            name: "first_name",
            number: 4,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "firstName",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "last_name",
            number: 5,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "lastName",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "email",
            number: 6,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "email",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "new_email",
            number: 7,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "newEmail",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "active",
            number: 8,
            label: 1,
            type: 8,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "active",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "activation_code",
            number: 9,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "activationCode",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "password",
            number: 10,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "password",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "password_hash",
            number: 11,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "passwordHash",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "role_associations",
            number: 12,
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
            name: "timezone_id",
            number: 13,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "timezoneId",
            options: {
              ctype: 0,
              packed: false,
              jstype: 0,
              lazy: false,
              deprecated: false,
              weak: false,
              uninterpretedOption: [],
            },
            proto3Optional: false,
          },
          {
            name: "locale_id",
            number: 14,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "localeId",
            options: {
              ctype: 0,
              packed: false,
              jstype: 0,
              lazy: false,
              deprecated: false,
              weak: false,
              uninterpretedOption: [],
            },
            proto3Optional: false,
          },
          {
            name: "default_scope",
            number: 15,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "defaultScope",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "unauthenticated",
            number: 16,
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
            name: "guest",
            number: 17,
            label: 1,
            type: 8,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "guest",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "image",
            number: 18,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.image.Image",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "image",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "user_type",
            number: 19,
            label: 1,
            type: 14,
            typeName: ".io.restorecommerce.user.UserType",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "userType",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "invite",
            number: 20,
            label: 1,
            type: 8,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "invite",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "invited_by_user_name",
            number: 21,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "invitedByUserName",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "invited_by_user_first_name",
            number: 22,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "invitedByUserFirstName",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "invited_by_user_last_name",
            number: 23,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "invitedByUserLastName",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "tokens",
            number: 24,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.auth.Tokens",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "tokens",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "last_access",
            number: 25,
            label: 1,
            type: 1,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "lastAccess",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "data",
            number: 26,
            label: 1,
            type: 11,
            typeName: ".google.protobuf.Any",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "data",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: {
          messageSetWireFormat: false,
          noStandardDescriptorAccessor: false,
          deprecated: false,
          mapEntry: false,
          uninterpretedOption: [],
        },
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "UserRole",
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
            name: "meta",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.meta.Meta",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "meta",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "name",
            number: 3,
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
            name: "first_name",
            number: 4,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "firstName",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "last_name",
            number: 5,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "lastName",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "email",
            number: 6,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "email",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "new_email",
            number: 7,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "newEmail",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "active",
            number: 8,
            label: 1,
            type: 8,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "active",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "activation_code",
            number: 9,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "activationCode",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "password",
            number: 10,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "password",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "password_hash",
            number: 11,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "passwordHash",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "role_associations",
            number: 12,
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
            name: "timezone_id",
            number: 13,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "timezoneId",
            options: {
              ctype: 0,
              packed: false,
              jstype: 0,
              lazy: false,
              deprecated: false,
              weak: false,
              uninterpretedOption: [],
            },
            proto3Optional: false,
          },
          {
            name: "locale_id",
            number: 14,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "localeId",
            options: {
              ctype: 0,
              packed: false,
              jstype: 0,
              lazy: false,
              deprecated: false,
              weak: false,
              uninterpretedOption: [],
            },
            proto3Optional: false,
          },
          {
            name: "default_scope",
            number: 15,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "defaultScope",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "unauthenticated",
            number: 16,
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
            name: "guest",
            number: 17,
            label: 1,
            type: 8,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "guest",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "image",
            number: 18,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.image.Image",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "image",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "user_type",
            number: 19,
            label: 1,
            type: 14,
            typeName: ".io.restorecommerce.user.UserType",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "userType",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "invite",
            number: 20,
            label: 1,
            type: 8,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "invite",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "invited_by_user_name",
            number: 21,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "invitedByUserName",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "invited_by_user_first_name",
            number: 22,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "invitedByUserFirstName",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "invited_by_user_last_name",
            number: 23,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "invitedByUserLastName",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "tokens",
            number: 24,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.auth.Tokens",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "tokens",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "last_access",
            number: 25,
            label: 1,
            type: 1,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "lastAccess",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "data",
            number: 26,
            label: 1,
            type: 11,
            typeName: ".google.protobuf.Any",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "data",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "role",
            number: 27,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.role.Role",
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
    ],
    enumType: [
      {
        name: "UserType",
        value: [
          { name: "ORG_USER", number: 0, options: undefined },
          { name: "INDIVIDUAL_USER", number: 1, options: undefined },
          { name: "GUEST", number: 2, options: undefined },
          { name: "TECHNICAL_USER", number: 3, options: undefined },
        ],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
    ],
    service: [
      {
        name: "Service",
        method: [
          {
            name: "Read",
            inputType: ".io.restorecommerce.resourcebase.ReadRequest",
            outputType: ".io.restorecommerce.user.UserListWithRoleResponse",
            options: {
              deprecated: false,
              idempotencyLevel: 0,
              uninterpretedOption: [],
            },
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Create",
            inputType: ".io.restorecommerce.user.UserList",
            outputType: ".io.restorecommerce.user.UserListResponse",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Delete",
            inputType: ".io.restorecommerce.resourcebase.DeleteRequest",
            outputType: ".io.restorecommerce.resourcebase.DeleteResponse",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Update",
            inputType: ".io.restorecommerce.user.UserList",
            outputType: ".io.restorecommerce.user.UserListResponse",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Upsert",
            inputType: ".io.restorecommerce.user.UserList",
            outputType: ".io.restorecommerce.user.UserListResponse",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Find",
            inputType: ".io.restorecommerce.user.FindRequest",
            outputType: ".io.restorecommerce.user.UserListResponse",
            options: {
              deprecated: false,
              idempotencyLevel: 0,
              uninterpretedOption: [],
            },
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Register",
            inputType: ".io.restorecommerce.user.RegisterRequest",
            outputType: ".io.restorecommerce.user.UserResponse",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Activate",
            inputType: ".io.restorecommerce.user.ActivateRequest",
            outputType: ".io.restorecommerce.status.OperationStatusObj",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "ChangePassword",
            inputType: ".io.restorecommerce.user.ChangePasswordRequest",
            outputType: ".io.restorecommerce.status.OperationStatusObj",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "RequestPasswordChange",
            inputType: ".io.restorecommerce.user.RequestPasswordChangeRequest",
            outputType: ".io.restorecommerce.status.OperationStatusObj",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "RequestEmailChange",
            inputType: ".io.restorecommerce.user.ChangeEmailRequest",
            outputType: ".io.restorecommerce.status.OperationStatusObj",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "ConfirmPasswordChange",
            inputType: ".io.restorecommerce.user.ConfirmPasswordChangeRequest",
            outputType: ".io.restorecommerce.status.OperationStatusObj",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "ConfirmEmailChange",
            inputType: ".io.restorecommerce.user.ConfirmEmailChangeRequest",
            outputType: ".io.restorecommerce.status.OperationStatusObj",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Unregister",
            inputType: ".io.restorecommerce.user.UnregisterRequest",
            outputType: ".io.restorecommerce.status.OperationStatusObj",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Login",
            inputType: ".io.restorecommerce.user.LoginRequest",
            outputType: ".io.restorecommerce.user.UserResponse",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "FindByRole",
            inputType: ".io.restorecommerce.user.FindByRoleRequest",
            outputType: ".io.restorecommerce.user.UserListResponse",
            options: {
              deprecated: false,
              idempotencyLevel: 0,
              uninterpretedOption: [],
            },
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "DeleteUsersByOrg",
            inputType: ".io.restorecommerce.user.OrgIDRequest",
            outputType: ".io.restorecommerce.user.DeleteUsersByOrgResponse",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "ConfirmUserInvitation",
            inputType: ".io.restorecommerce.user.ConfirmUserInvitationRequest",
            outputType: ".io.restorecommerce.status.OperationStatusObj",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "SendInvitationEmail",
            inputType: ".io.restorecommerce.user.SendInvitationEmailRequest",
            outputType: ".io.restorecommerce.status.OperationStatusObj",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "FindByToken",
            inputType: ".io.restorecommerce.user.FindByTokenRequest",
            outputType: ".io.restorecommerce.user.UserResponse",
            options: {
              deprecated: false,
              idempotencyLevel: 0,
              uninterpretedOption: [],
            },
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "SendActivationEmail",
            inputType: ".io.restorecommerce.user.SendActivationEmailRequest",
            outputType: ".io.restorecommerce.status.OperationStatusObj",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
        ],
        options: { deprecated: false, uninterpretedOption: [] },
      },
    ],
    extension: [],
    options: undefined,
    sourceCodeInfo: {
      location: [
        {
          path: [3, 9],
          span: [15, 0, 43],
          leadingComments: " Used by resolvers\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [6, 0],
          span: [21, 0, 54, 1],
          leadingComments: "*\n The microservice for the user resource.\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [4, 0],
          span: [60, 0, 64, 1],
          leadingComments:
            "*\n Request to verify password and retrieve the user's info.\n Either name or email can be provided.\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [4, 0, 2, 0],
          span: [61, 2, 24],
          leadingComments: "",
          trailingComments: " User name or email\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 0, 2, 1],
          span: [62, 2, 22],
          leadingComments: "",
          trailingComments: " Raw password\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 3, 2, 0],
          span: [77, 2, 16],
          leadingComments: "",
          trailingComments: "/ User ID\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 5, 2, 10],
          span: [106, 2, 28],
          leadingComments: "",
          trailingComments: " default hierarchical scope\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 6, 2, 0],
          span: [112, 2, 24],
          leadingComments: "",
          trailingComments: "/ user name or email\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 7, 2, 0],
          span: [118, 2, 24],
          leadingComments: "",
          trailingComments: " user name or email\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 8, 2, 0],
          span: [125, 2, 24],
          leadingComments: "",
          trailingComments: " user name or email\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 10, 2, 0],
          span: [137, 2, 24],
          leadingComments: "",
          trailingComments: " user name or email\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 11, 2, 0],
          span: [142, 2, 24],
          leadingComments: "",
          trailingComments: " user name or email\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 12, 2, 0],
          span: [149, 2, 24],
          leadingComments: "",
          trailingComments: " user name or email\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 13, 2, 0],
          span: [155, 2, 24],
          leadingComments: "",
          trailingComments: " user name or email\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 14, 2, 0],
          span: [161, 2, 24],
          leadingComments: "",
          trailingComments: "/ User ID\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 15, 2, 0],
          span: [166, 2, 24],
          leadingComments: "",
          trailingComments: "/ User name or email\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 16],
          span: [178, 0, 180, 1],
          leadingComments:
            "*\n User deletion event.\n Send when a user was deleted or unregistered.\n\n Events:\n usersDeleted,\n unregistered,\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [4, 17],
          span: [188, 0, 191, 1],
          leadingComments:
            "*\n User password changed event.\n\n Events:\n passwordChanged,\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [4, 17, 2, 0],
          span: [189, 2, 16],
          leadingComments: "",
          trailingComments: "/ User ID\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 18, 2, 0],
          span: [194, 2, 16],
          leadingComments: "",
          trailingComments: " User ID\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 19],
          span: [200, 0, 204, 1],
          leadingComments: "*\n User email id changed event.\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [4, 20, 2, 0],
          span: [207, 2, 16],
          leadingComments: "",
          trailingComments: "/ User ID\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 21],
          span: [214, 0, 218, 1],
          leadingComments: "*\n A list of User.\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [4, 26],
          span: [245, 0, 247, 1],
          leadingComments: "*\n User activation request.\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [4, 26, 2, 0],
          span: [246, 2, 16],
          leadingComments: "",
          trailingComments: "/ User ID\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 28],
          span: [258, 0, 309, 1],
          leadingComments: "*\n A User resource.\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [4, 28, 2, 0],
          span: [267, 2, 16],
          leadingComments: "",
          trailingComments: "/ User ID, unique, key\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 28, 2, 2],
          span: [269, 2, 18],
          leadingComments: "",
          trailingComments: " The name of the user, can be used for login\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 28, 2, 5],
          span: [272, 2, 19],
          leadingComments: "",
          trailingComments: "/ Email address, can be used for login\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 28, 2, 6],
          span: [273, 2, 23],
          leadingComments: "",
          trailingComments:
            "/ New email address; set by `requestEmailChange` and overrides actual email upon `confirmEmailChange`\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 28, 2, 7],
          span: [274, 2, 18],
          leadingComments: "",
          trailingComments:
            "/ If the user was activated via the activation process\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 28, 2, 8],
          span: [275, 2, 29],
          leadingComments: "",
          trailingComments:
            "/ Activation code used in the activation process\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 28, 2, 9],
          span: [276, 2, 23],
          leadingComments: "",
          trailingComments: "/ Raw password, not stored\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 28, 2, 10],
          span: [277, 2, 28],
          leadingComments: "",
          trailingComments: "/ Encrypted password, stored\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 28, 2, 11],
          span: [278, 2, 74],
          leadingComments: "",
          trailingComments:
            " A user can have multiple roles and different attributes coupled with each role\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 28, 2, 12],
          span: [279, 2, 287, 4],
          leadingComments: "",
          trailingComments: " timezone_id specifications\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 28, 2, 13],
          span: [288, 2, 296, 4],
          leadingComments: "",
          trailingComments: " locale specifications\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 28, 2, 14],
          span: [297, 2, 28],
          leadingComments: "",
          trailingComments: " default hierarchical scope\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 28, 2, 15],
          span: [298, 2, 28],
          leadingComments: "",
          trailingComments:
            " true in case in case of `register`; set to false after activation\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 28, 2, 16],
          span: [299, 2, 18],
          leadingComments: "",
          trailingComments:
            "/ Is the user a guest. A guest is a automatically generated user which can later be turned in a non-guest user.\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 28, 2, 19],
          span: [302, 2, 19],
          leadingComments: "",
          trailingComments: " For user invitation\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 28, 2, 20],
          span: [303, 2, 35],
          leadingComments: "",
          trailingComments: " user who is inviting\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 28, 2, 21],
          span: [304, 2, 41],
          leadingComments: "",
          trailingComments: " First name of user inviting\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 28, 2, 22],
          span: [305, 2, 40],
          leadingComments: "",
          trailingComments: " Last name of user inviting\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 28, 2, 25],
          span: [308, 2, 32],
          leadingComments: "",
          trailingComments: "/ additional data\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 29],
          span: [314, 0, 358, 1],
          leadingComments: "*\n A User resource with role\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
        {
          path: [4, 29, 2, 0],
          span: [315, 2, 16],
          leadingComments: "",
          trailingComments: "/ User ID, unique, key\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 29, 2, 2],
          span: [317, 2, 18],
          leadingComments: "",
          trailingComments: " The name of the user, can be used for login\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 29, 2, 5],
          span: [320, 2, 19],
          leadingComments: "",
          trailingComments: "/ Email address, can be used for login\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 29, 2, 6],
          span: [321, 2, 23],
          leadingComments: "",
          trailingComments:
            "/ New email address; set by `requestEmailChange` and overrides actual email upon `confirmEmailChange`\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 29, 2, 7],
          span: [322, 2, 18],
          leadingComments: "",
          trailingComments:
            "/ If the user was activated via the activation process\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 29, 2, 8],
          span: [323, 2, 29],
          leadingComments: "",
          trailingComments:
            "/ Activation code used in the activation process\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 29, 2, 9],
          span: [324, 2, 23],
          leadingComments: "",
          trailingComments: "/ Raw password, not stored\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 29, 2, 10],
          span: [325, 2, 28],
          leadingComments: "",
          trailingComments: "/ Encrypted password, stored\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 29, 2, 11],
          span: [326, 2, 74],
          leadingComments: "",
          trailingComments:
            " A user can have multiple roles and different attributes coupled with each role\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 29, 2, 12],
          span: [327, 2, 335, 4],
          leadingComments: "",
          trailingComments: " timezone_id specifications\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 29, 2, 13],
          span: [336, 2, 344, 4],
          leadingComments: "",
          trailingComments: " locale specifications\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 29, 2, 14],
          span: [345, 2, 28],
          leadingComments: "",
          trailingComments: " default hierarchical scope\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 29, 2, 15],
          span: [346, 2, 28],
          leadingComments: "",
          trailingComments:
            " true in case in case of `register`; set to false after activation\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 29, 2, 16],
          span: [347, 2, 18],
          leadingComments: "",
          trailingComments:
            "/ Is the user a guest. A guest is a automatically generated user which can later be turned in a non-guest user.\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 29, 2, 19],
          span: [350, 2, 19],
          leadingComments: "",
          trailingComments: " For user invitation\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 29, 2, 20],
          span: [351, 2, 35],
          leadingComments: "",
          trailingComments: " user who is inviting\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 29, 2, 21],
          span: [352, 2, 41],
          leadingComments: "",
          trailingComments: " First name of user inviting\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 29, 2, 22],
          span: [353, 2, 40],
          leadingComments: "",
          trailingComments: " Last name of user inviting\n",
          leadingDetachedComments: [],
        },
        {
          path: [4, 29, 2, 25],
          span: [356, 2, 32],
          leadingComments: "",
          trailingComments: "/ additional data\n",
          leadingDetachedComments: [],
        },
      ],
    },
    syntax: "proto3",
  }),
  references: {
    ".io.restorecommerce.user.UserType": UserType,
    ".io.restorecommerce.user.LoginRequest": LoginRequest,
    ".io.restorecommerce.user.OrgIDRequest": OrgIDRequest,
    ".io.restorecommerce.user.DeleteUsersByOrgResponse":
      DeleteUsersByOrgResponse,
    ".io.restorecommerce.user.FindRequest": FindRequest,
    ".io.restorecommerce.user.FindByTokenRequest": FindByTokenRequest,
    ".io.restorecommerce.user.RegisterRequest": RegisterRequest,
    ".io.restorecommerce.user.ActivateRequest": ActivateRequest,
    ".io.restorecommerce.user.ConfirmUserInvitationRequest":
      ConfirmUserInvitationRequest,
    ".io.restorecommerce.user.SendInvitationEmailRequest":
      SendInvitationEmailRequest,
    ".io.restorecommerce.user.ChangePasswordRequest": ChangePasswordRequest,
    ".io.restorecommerce.user.RequestPasswordChangeRequest":
      RequestPasswordChangeRequest,
    ".io.restorecommerce.user.ConfirmPasswordChangeRequest":
      ConfirmPasswordChangeRequest,
    ".io.restorecommerce.user.ChangeEmailRequest": ChangeEmailRequest,
    ".io.restorecommerce.user.ConfirmEmailChangeRequest":
      ConfirmEmailChangeRequest,
    ".io.restorecommerce.user.UnregisterRequest": UnregisterRequest,
    ".io.restorecommerce.user.SendActivationEmailRequest":
      SendActivationEmailRequest,
    ".io.restorecommerce.user.Deleted": Deleted,
    ".io.restorecommerce.user.PasswordChanged": PasswordChanged,
    ".io.restorecommerce.user.PasswordChangeRequested": PasswordChangeRequested,
    ".io.restorecommerce.user.EmailChangeRequested": EmailChangeRequested,
    ".io.restorecommerce.user.EmailChangeConfirmed": EmailChangeConfirmed,
    ".io.restorecommerce.user.UserList": UserList,
    ".io.restorecommerce.user.UserListWithRoleResponse":
      UserListWithRoleResponse,
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
      User: {
        options: {
          kafka_subscriber: KafkaSubscription.decode(
            Buffer.from(
              "CgV1c2VycxIhaW8ucmVzdG9yZWNvbW1lcmNlLnVzZXJzLnJlc291cmNlGgt1c2VyQ3JlYXRlZCILdXNlclVwZGF0ZWQqC3VzZXJEZWxldGVk",
              "base64"
            )
          ),
        },
        fields: {
          timezone_id: {
            resolver: Resolver.decode(
              Buffer.from(
                "CiUuaW8ucmVzdG9yZWNvbW1lcmNlLnRpbWV6b25lLlRpbWV6b25lEghyZXNvdXJjZRoIdGltZXpvbmUiBFJlYWQqCHRpbWV6b25l",
                "base64"
              )
            ),
          },
          locale_id: {
            resolver: Resolver.decode(
              Buffer.from(
                "CiEuaW8ucmVzdG9yZWNvbW1lcmNlLmxvY2FsZS5Mb2NhbGUSCHJlc291cmNlGgZsb2NhbGUiBFJlYWQqBmxvY2FsZQ==",
                "base64"
              )
            ),
          },
        },
      },
      UserRole: {
        fields: {
          timezone_id: {
            resolver: Resolver.decode(
              Buffer.from(
                "CiUuaW8ucmVzdG9yZWNvbW1lcmNlLnRpbWV6b25lLlRpbWV6b25lEghyZXNvdXJjZRoIdGltZXpvbmUiBFJlYWQqCHRpbWV6b25l",
                "base64"
              )
            ),
          },
          locale_id: {
            resolver: Resolver.decode(
              Buffer.from(
                "CiEuaW8ucmVzdG9yZWNvbW1lcmNlLmxvY2FsZS5Mb2NhbGUSCHJlc291cmNlGgZsb2NhbGUiBFJlYWQqBmxvY2FsZQ==",
                "base64"
              )
            ),
          },
        },
      },
    },
    services: {
      Service: {
        options: { service_name: "user" },
        methods: {
          Read: { is_query: true },
          Find: { is_query: true },
          FindByRole: { is_query: true },
          FindByToken: { is_query: true },
        },
      },
    },
  },
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
