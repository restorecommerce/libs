/* eslint-disable */
import { FileDescriptorProto } from "ts-proto-descriptors/google/protobuf/descriptor";
import {
  Subject,
  protoMetadata as protoMetadata4,
  RoleAssociation,
  Tokens,
} from "../../io/restorecommerce/auth";
import {
  Meta,
  protoMetadata as protoMetadata3,
} from "../../io/restorecommerce/meta";
import {
  Image,
  protoMetadata as protoMetadata6,
} from "../../io/restorecommerce/image";
import {
  protoMetadata as protoMetadata1,
  ReadRequest,
  DeleteRequest,
} from "../../io/restorecommerce/resource_base";
import {
  protoMetadata as protoMetadata2,
  Empty,
} from "../../google/protobuf/empty";
import {
  protoMetadata as protoMetadata5,
  Attribute,
} from "../../io/restorecommerce/attribute";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "io.restorecommerce.user";

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

export interface UserIDs {
  userIds: string[];
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
  roleAssociations: RoleAssociation[];
  /** default hierarchical scope */
  defaultScope: string;
  userType: UserType;
  captchaCode: string;
}

export interface ActivateRequest {
  /** / User name (unique) */
  name: string;
  activationCode: string;
  subject?: Subject;
}

export interface ConfirmUserInvitationRequest {
  name: string;
  password: string;
  activationCode: string;
  subject?: Subject;
}

export interface SendInvitationEmailRequest {
  userId: string;
  invitedByUserId: string;
  subject?: Subject;
}

export interface ChangePasswordRequest {
  /** / User ID */
  id: string;
  password: string;
  newPassword: string;
  subject?: Subject;
}

export interface RequestPasswordChangeRequest {
  name: string | undefined;
  email: string | undefined;
  subject?: Subject;
}

export interface ConfirmPasswordChangeRequest {
  name: string;
  activationCode: string;
  password: string;
  subject?: Subject;
}

export interface ChangeEmailRequest {
  /** / User ID */
  id: string;
  email: string;
  subject?: Subject;
}

export interface ConfirmEmailChangeRequest {
  name: string;
  activationCode: string;
  subject?: Subject;
}

export interface UnregisterRequest {
  /** / User ID */
  id: string;
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
  lastLogin: number;
  lastAccess: number;
}

const baseLoginRequest: object = { identifier: "", password: "", token: "" };

export const LoginRequest = {
  encode(message: LoginRequest, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): LoginRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseLoginRequest) as LoginRequest;
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
    const message = globalThis.Object.create(baseLoginRequest) as LoginRequest;
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

const baseOrgIDRequest: object = { orgIds: "" };

export const OrgIDRequest = {
  encode(message: OrgIDRequest, writer: Writer = Writer.create()): Writer {
    for (const v of message.orgIds) {
      writer.uint32(10).string(v!);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): OrgIDRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseOrgIDRequest) as OrgIDRequest;
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrgIDRequest {
    const message = globalThis.Object.create(baseOrgIDRequest) as OrgIDRequest;
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
    return message;
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
};

const baseUserIDs: object = { userIds: "" };

export const UserIDs = {
  encode(message: UserIDs, writer: Writer = Writer.create()): Writer {
    for (const v of message.userIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): UserIDs {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseUserIDs) as UserIDs;
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
    const message = globalThis.Object.create(baseUserIDs) as UserIDs;
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
      obj.userIds = message.userIds.map((e) => e);
    } else {
      obj.userIds = [];
    }
    return obj;
  },
};

const baseFindRequest: object = { id: "", name: "", email: "" };

export const FindRequest = {
  encode(message: FindRequest, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): FindRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseFindRequest) as FindRequest;
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
    const message = globalThis.Object.create(baseFindRequest) as FindRequest;
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
    return message;
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
};

const baseFindByTokenRequest: object = { token: "" };

export const FindByTokenRequest = {
  encode(
    message: FindByTokenRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): FindByTokenRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseFindByTokenRequest
    ) as FindByTokenRequest;
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
    const message = globalThis.Object.create(
      baseFindByTokenRequest
    ) as FindByTokenRequest;
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<FindByTokenRequest>): FindByTokenRequest {
    const message = { ...baseFindByTokenRequest } as FindByTokenRequest;
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    return message;
  },

  toJSON(message: FindByTokenRequest): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },
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

export const RegisterRequest = {
  encode(message: RegisterRequest, writer: Writer = Writer.create()): Writer {
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
    for (const v of message.roleAssociations) {
      RoleAssociation.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.defaultScope !== "") {
      writer.uint32(98).string(message.defaultScope);
    }
    if (message.userType !== 0) {
      writer.uint32(104).int32(message.userType);
    }
    if (message.captchaCode !== "") {
      writer.uint32(114).string(message.captchaCode);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): RegisterRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseRegisterRequest
    ) as RegisterRequest;
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
          message.roleAssociations.push(
            RoleAssociation.decode(reader, reader.uint32())
          );
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
    const message = globalThis.Object.create(
      baseRegisterRequest
    ) as RegisterRequest;
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
    if (
      object.roleAssociations !== undefined &&
      object.roleAssociations !== null
    ) {
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
    if (
      object.roleAssociations !== undefined &&
      object.roleAssociations !== null
    ) {
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
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.firstName !== undefined && (obj.firstName = message.firstName);
    message.lastName !== undefined && (obj.lastName = message.lastName);
    message.email !== undefined && (obj.email = message.email);
    message.password !== undefined && (obj.password = message.password);
    message.timezoneId !== undefined && (obj.timezoneId = message.timezoneId);
    message.localeId !== undefined && (obj.localeId = message.localeId);
    if (message.roleAssociations) {
      obj.roleAssociations = message.roleAssociations.map((e) =>
        e ? RoleAssociation.toJSON(e) : undefined
      );
    } else {
      obj.roleAssociations = [];
    }
    message.defaultScope !== undefined &&
      (obj.defaultScope = message.defaultScope);
    message.userType !== undefined &&
      (obj.userType = userTypeToJSON(message.userType));
    message.captchaCode !== undefined &&
      (obj.captchaCode = message.captchaCode);
    return obj;
  },
};

const baseActivateRequest: object = { name: "", activationCode: "" };

export const ActivateRequest = {
  encode(message: ActivateRequest, writer: Writer = Writer.create()): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.activationCode !== "") {
      writer.uint32(18).string(message.activationCode);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ActivateRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseActivateRequest
    ) as ActivateRequest;
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActivateRequest {
    const message = globalThis.Object.create(
      baseActivateRequest
    ) as ActivateRequest;
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
    return message;
  },

  toJSON(message: ActivateRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.activationCode !== undefined &&
      (obj.activationCode = message.activationCode);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseConfirmUserInvitationRequest: object = {
  name: "",
  password: "",
  activationCode: "",
};

export const ConfirmUserInvitationRequest = {
  encode(
    message: ConfirmUserInvitationRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
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
    input: Reader | Uint8Array,
    length?: number
  ): ConfirmUserInvitationRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseConfirmUserInvitationRequest
    ) as ConfirmUserInvitationRequest;
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConfirmUserInvitationRequest {
    const message = globalThis.Object.create(
      baseConfirmUserInvitationRequest
    ) as ConfirmUserInvitationRequest;
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
    return message;
  },

  fromPartial(
    object: DeepPartial<ConfirmUserInvitationRequest>
  ): ConfirmUserInvitationRequest {
    const message = {
      ...baseConfirmUserInvitationRequest,
    } as ConfirmUserInvitationRequest;
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
    return message;
  },

  toJSON(message: ConfirmUserInvitationRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.password !== undefined && (obj.password = message.password);
    message.activationCode !== undefined &&
      (obj.activationCode = message.activationCode);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseSendInvitationEmailRequest: object = {
  userId: "",
  invitedByUserId: "",
};

export const SendInvitationEmailRequest = {
  encode(
    message: SendInvitationEmailRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.invitedByUserId !== "") {
      writer.uint32(18).string(message.invitedByUserId);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): SendInvitationEmailRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseSendInvitationEmailRequest
    ) as SendInvitationEmailRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.string();
          break;
        case 2:
          message.invitedByUserId = reader.string();
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
    const message = globalThis.Object.create(
      baseSendInvitationEmailRequest
    ) as SendInvitationEmailRequest;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = String(object.userId);
    } else {
      message.userId = "";
    }
    if (
      object.invitedByUserId !== undefined &&
      object.invitedByUserId !== null
    ) {
      message.invitedByUserId = String(object.invitedByUserId);
    } else {
      message.invitedByUserId = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<SendInvitationEmailRequest>
  ): SendInvitationEmailRequest {
    const message = {
      ...baseSendInvitationEmailRequest,
    } as SendInvitationEmailRequest;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = object.userId;
    } else {
      message.userId = "";
    }
    if (
      object.invitedByUserId !== undefined &&
      object.invitedByUserId !== null
    ) {
      message.invitedByUserId = object.invitedByUserId;
    } else {
      message.invitedByUserId = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  toJSON(message: SendInvitationEmailRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.invitedByUserId !== undefined &&
      (obj.invitedByUserId = message.invitedByUserId);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseChangePasswordRequest: object = {
  id: "",
  password: "",
  newPassword: "",
};

export const ChangePasswordRequest = {
  encode(
    message: ChangePasswordRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
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

  decode(input: Reader | Uint8Array, length?: number): ChangePasswordRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseChangePasswordRequest
    ) as ChangePasswordRequest;
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChangePasswordRequest {
    const message = globalThis.Object.create(
      baseChangePasswordRequest
    ) as ChangePasswordRequest;
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
    return message;
  },

  fromPartial(
    object: DeepPartial<ChangePasswordRequest>
  ): ChangePasswordRequest {
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
    return message;
  },

  toJSON(message: ChangePasswordRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.password !== undefined && (obj.password = message.password);
    message.newPassword !== undefined &&
      (obj.newPassword = message.newPassword);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseRequestPasswordChangeRequest: object = {};

export const RequestPasswordChangeRequest = {
  encode(
    message: RequestPasswordChangeRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.email !== undefined) {
      writer.uint32(18).string(message.email);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): RequestPasswordChangeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseRequestPasswordChangeRequest
    ) as RequestPasswordChangeRequest;
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestPasswordChangeRequest {
    const message = globalThis.Object.create(
      baseRequestPasswordChangeRequest
    ) as RequestPasswordChangeRequest;
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
    return message;
  },

  fromPartial(
    object: DeepPartial<RequestPasswordChangeRequest>
  ): RequestPasswordChangeRequest {
    const message = {
      ...baseRequestPasswordChangeRequest,
    } as RequestPasswordChangeRequest;
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
    return message;
  },

  toJSON(message: RequestPasswordChangeRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.email !== undefined && (obj.email = message.email);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseConfirmPasswordChangeRequest: object = {
  name: "",
  activationCode: "",
  password: "",
};

export const ConfirmPasswordChangeRequest = {
  encode(
    message: ConfirmPasswordChangeRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
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
    input: Reader | Uint8Array,
    length?: number
  ): ConfirmPasswordChangeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseConfirmPasswordChangeRequest
    ) as ConfirmPasswordChangeRequest;
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConfirmPasswordChangeRequest {
    const message = globalThis.Object.create(
      baseConfirmPasswordChangeRequest
    ) as ConfirmPasswordChangeRequest;
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
    return message;
  },

  fromPartial(
    object: DeepPartial<ConfirmPasswordChangeRequest>
  ): ConfirmPasswordChangeRequest {
    const message = {
      ...baseConfirmPasswordChangeRequest,
    } as ConfirmPasswordChangeRequest;
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
    return message;
  },

  toJSON(message: ConfirmPasswordChangeRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.activationCode !== undefined &&
      (obj.activationCode = message.activationCode);
    message.password !== undefined && (obj.password = message.password);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseChangeEmailRequest: object = { id: "", email: "" };

export const ChangeEmailRequest = {
  encode(
    message: ChangeEmailRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ChangeEmailRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseChangeEmailRequest
    ) as ChangeEmailRequest;
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChangeEmailRequest {
    const message = globalThis.Object.create(
      baseChangeEmailRequest
    ) as ChangeEmailRequest;
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
    return message;
  },

  toJSON(message: ChangeEmailRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.email !== undefined && (obj.email = message.email);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseConfirmEmailChangeRequest: object = { name: "", activationCode: "" };

export const ConfirmEmailChangeRequest = {
  encode(
    message: ConfirmEmailChangeRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
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
    input: Reader | Uint8Array,
    length?: number
  ): ConfirmEmailChangeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseConfirmEmailChangeRequest
    ) as ConfirmEmailChangeRequest;
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConfirmEmailChangeRequest {
    const message = globalThis.Object.create(
      baseConfirmEmailChangeRequest
    ) as ConfirmEmailChangeRequest;
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
    return message;
  },

  fromPartial(
    object: DeepPartial<ConfirmEmailChangeRequest>
  ): ConfirmEmailChangeRequest {
    const message = {
      ...baseConfirmEmailChangeRequest,
    } as ConfirmEmailChangeRequest;
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
    return message;
  },

  toJSON(message: ConfirmEmailChangeRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.activationCode !== undefined &&
      (obj.activationCode = message.activationCode);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseUnregisterRequest: object = { id: "" };

export const UnregisterRequest = {
  encode(message: UnregisterRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): UnregisterRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseUnregisterRequest
    ) as UnregisterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
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
    const message = globalThis.Object.create(
      baseUnregisterRequest
    ) as UnregisterRequest;
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
    return message;
  },

  toJSON(message: UnregisterRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseDeleted: object = { id: "" };

export const Deleted = {
  encode(message: Deleted, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Deleted {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseDeleted) as Deleted;
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
    const message = globalThis.Object.create(baseDeleted) as Deleted;
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

const basePasswordChanged: object = { id: "", passwordHash: "" };

export const PasswordChanged = {
  encode(message: PasswordChanged, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.passwordHash !== "") {
      writer.uint32(18).string(message.passwordHash);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PasswordChanged {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      basePasswordChanged
    ) as PasswordChanged;
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
    const message = globalThis.Object.create(
      basePasswordChanged
    ) as PasswordChanged;
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
    message.passwordHash !== undefined &&
      (obj.passwordHash = message.passwordHash);
    return obj;
  },
};

const basePasswordChangeRequested: object = { id: "" };

export const PasswordChangeRequested = {
  encode(
    message: PasswordChangeRequested,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PasswordChangeRequested {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      basePasswordChangeRequested
    ) as PasswordChangeRequested;
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
    const message = globalThis.Object.create(
      basePasswordChangeRequested
    ) as PasswordChangeRequested;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<PasswordChangeRequested>
  ): PasswordChangeRequested {
    const message = {
      ...basePasswordChangeRequested,
    } as PasswordChangeRequested;
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

const baseEmailChangeRequested: object = {
  id: "",
  activationCode: "",
  newEmail: "",
};

export const EmailChangeRequested = {
  encode(
    message: EmailChangeRequested,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): EmailChangeRequested {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseEmailChangeRequested
    ) as EmailChangeRequested;
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
    const message = globalThis.Object.create(
      baseEmailChangeRequested
    ) as EmailChangeRequested;
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
    message.activationCode !== undefined &&
      (obj.activationCode = message.activationCode);
    message.newEmail !== undefined && (obj.newEmail = message.newEmail);
    return obj;
  },
};

const baseEmailChangeConfirmed: object = { id: "", email: "" };

export const EmailChangeConfirmed = {
  encode(
    message: EmailChangeConfirmed,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EmailChangeConfirmed {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseEmailChangeConfirmed
    ) as EmailChangeConfirmed;
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
    const message = globalThis.Object.create(
      baseEmailChangeConfirmed
    ) as EmailChangeConfirmed;
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

const baseUserList: object = { totalCount: 0 };

export const UserList = {
  encode(message: UserList, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): UserList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseUserList) as UserList;
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserList {
    const message = globalThis.Object.create(baseUserList) as UserList;
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
    return message;
  },

  toJSON(message: UserList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => (e ? User.toJSON(e) : undefined));
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseActivate: object = { id: "" };

export const Activate = {
  encode(message: Activate, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Activate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseActivate) as Activate;
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
    const message = globalThis.Object.create(baseActivate) as Activate;
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

const baseFindByRoleRequest: object = { role: "" };

export const FindByRoleRequest = {
  encode(message: FindByRoleRequest, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): FindByRoleRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseFindByRoleRequest
    ) as FindByRoleRequest;
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FindByRoleRequest {
    const message = globalThis.Object.create(
      baseFindByRoleRequest
    ) as FindByRoleRequest;
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
    return message;
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

export const User = {
  encode(message: User, writer: Writer = Writer.create()): Writer {
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
    if (message.userType !== 0) {
      writer.uint32(152).int32(message.userType);
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
    if (message.lastLogin !== 0) {
      writer.uint32(201).double(message.lastLogin);
    }
    if (message.lastAccess !== 0) {
      writer.uint32(209).double(message.lastAccess);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): User {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseUser) as User;
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
    const message = globalThis.Object.create(baseUser) as User;
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
    if (
      object.roleAssociations !== undefined &&
      object.roleAssociations !== null
    ) {
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
    if (
      object.unauthenticated !== undefined &&
      object.unauthenticated !== null
    ) {
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
    if (
      object.invitedByUserName !== undefined &&
      object.invitedByUserName !== null
    ) {
      message.invitedByUserName = String(object.invitedByUserName);
    } else {
      message.invitedByUserName = "";
    }
    if (
      object.invitedByUserFirstName !== undefined &&
      object.invitedByUserFirstName !== null
    ) {
      message.invitedByUserFirstName = String(object.invitedByUserFirstName);
    } else {
      message.invitedByUserFirstName = "";
    }
    if (
      object.invitedByUserLastName !== undefined &&
      object.invitedByUserLastName !== null
    ) {
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
    if (
      object.roleAssociations !== undefined &&
      object.roleAssociations !== null
    ) {
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
    if (
      object.unauthenticated !== undefined &&
      object.unauthenticated !== null
    ) {
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
    if (
      object.invitedByUserName !== undefined &&
      object.invitedByUserName !== null
    ) {
      message.invitedByUserName = object.invitedByUserName;
    } else {
      message.invitedByUserName = "";
    }
    if (
      object.invitedByUserFirstName !== undefined &&
      object.invitedByUserFirstName !== null
    ) {
      message.invitedByUserFirstName = object.invitedByUserFirstName;
    } else {
      message.invitedByUserFirstName = "";
    }
    if (
      object.invitedByUserLastName !== undefined &&
      object.invitedByUserLastName !== null
    ) {
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
    message.lastLogin !== undefined && (obj.lastLogin = message.lastLogin);
    message.lastAccess !== undefined && (obj.lastAccess = message.lastAccess);
    return obj;
  },
};

/** The microservice for the user resource. */
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
  FindByToken(request: FindByTokenRequest): Promise<User>;
}

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto.fromPartial({
    dependency: [
      "io/restorecommerce/resource_base.proto",
      "google/protobuf/empty.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/attribute.proto",
      "io/restorecommerce/image.proto",
    ],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        field: [
          {
            name: "identifier",
            number: 1,
            label: 1,
            type: 9,
            jsonName: "identifier",
          },
          {
            name: "password",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "password",
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
        name: "LoginRequest",
      },
      {
        field: [
          { name: "org_ids", number: 1, label: 3, type: 9, jsonName: "orgIds" },
          {
            name: "subject",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            jsonName: "subject",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "OrgIDRequest",
      },
      {
        field: [
          {
            name: "user_ids",
            number: 1,
            label: 3,
            type: 9,
            jsonName: "userIds",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "UserIDs",
      },
      {
        field: [
          { name: "id", number: 1, label: 1, type: 9, jsonName: "id" },
          { name: "name", number: 2, label: 1, type: 9, jsonName: "name" },
          { name: "email", number: 3, label: 1, type: 9, jsonName: "email" },
          {
            name: "subject",
            number: 4,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            jsonName: "subject",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "FindRequest",
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
        name: "FindByTokenRequest",
      },
      {
        field: [
          { name: "id", number: 1, label: 1, type: 9, jsonName: "id" },
          { name: "guest", number: 2, label: 1, type: 8, jsonName: "guest" },
          {
            name: "meta",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.meta.Meta",
            jsonName: "meta",
          },
          { name: "name", number: 4, label: 1, type: 9, jsonName: "name" },
          {
            name: "first_name",
            number: 5,
            label: 1,
            type: 9,
            jsonName: "firstName",
          },
          {
            name: "last_name",
            number: 6,
            label: 1,
            type: 9,
            jsonName: "lastName",
          },
          { name: "email", number: 7, label: 1, type: 9, jsonName: "email" },
          {
            name: "password",
            number: 8,
            label: 1,
            type: 9,
            jsonName: "password",
          },
          {
            name: "timezone_id",
            number: 9,
            label: 1,
            type: 9,
            jsonName: "timezoneId",
          },
          {
            name: "locale_id",
            number: 10,
            label: 1,
            type: 9,
            jsonName: "localeId",
          },
          {
            name: "role_associations",
            number: 11,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.auth.RoleAssociation",
            jsonName: "roleAssociations",
          },
          {
            name: "default_scope",
            number: 12,
            label: 1,
            type: 9,
            jsonName: "defaultScope",
          },
          {
            name: "user_type",
            number: 13,
            label: 1,
            type: 14,
            typeName: ".io.restorecommerce.user.UserType",
            jsonName: "userType",
          },
          {
            name: "captcha_code",
            number: 14,
            label: 1,
            type: 9,
            jsonName: "captchaCode",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "RegisterRequest",
      },
      {
        field: [
          { name: "name", number: 1, label: 1, type: 9, jsonName: "name" },
          {
            name: "activation_code",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "activationCode",
          },
          {
            name: "subject",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            jsonName: "subject",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "ActivateRequest",
      },
      {
        field: [
          { name: "name", number: 1, label: 1, type: 9, jsonName: "name" },
          {
            name: "password",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "password",
          },
          {
            name: "activation_code",
            number: 3,
            label: 1,
            type: 9,
            jsonName: "activationCode",
          },
          {
            name: "subject",
            number: 4,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            jsonName: "subject",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "ConfirmUserInvitationRequest",
      },
      {
        field: [
          { name: "user_id", number: 1, label: 1, type: 9, jsonName: "userId" },
          {
            name: "invited_by_user_id",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "invitedByUserId",
          },
          {
            name: "subject",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            jsonName: "subject",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "SendInvitationEmailRequest",
      },
      {
        field: [
          { name: "id", number: 1, label: 1, type: 9, jsonName: "id" },
          {
            name: "password",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "password",
          },
          {
            name: "new_password",
            number: 3,
            label: 1,
            type: 9,
            jsonName: "newPassword",
          },
          {
            name: "subject",
            number: 4,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            jsonName: "subject",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "ChangePasswordRequest",
      },
      {
        field: [
          {
            name: "name",
            number: 1,
            label: 1,
            type: 9,
            oneofIndex: 0,
            jsonName: "name",
          },
          {
            name: "email",
            number: 2,
            label: 1,
            type: 9,
            oneofIndex: 0,
            jsonName: "email",
          },
          {
            name: "subject",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            jsonName: "subject",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [{ name: "input_field" }],
        reservedRange: [],
        reservedName: [],
        name: "RequestPasswordChangeRequest",
      },
      {
        field: [
          { name: "name", number: 1, label: 1, type: 9, jsonName: "name" },
          {
            name: "activation_code",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "activationCode",
          },
          {
            name: "password",
            number: 3,
            label: 1,
            type: 9,
            jsonName: "password",
          },
          {
            name: "subject",
            number: 4,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            jsonName: "subject",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "ConfirmPasswordChangeRequest",
      },
      {
        field: [
          { name: "id", number: 1, label: 1, type: 9, jsonName: "id" },
          { name: "email", number: 2, label: 1, type: 9, jsonName: "email" },
          {
            name: "subject",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            jsonName: "subject",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "ChangeEmailRequest",
      },
      {
        field: [
          { name: "name", number: 1, label: 1, type: 9, jsonName: "name" },
          {
            name: "activation_code",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "activationCode",
          },
          {
            name: "subject",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            jsonName: "subject",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "ConfirmEmailChangeRequest",
      },
      {
        field: [
          { name: "id", number: 1, label: 1, type: 9, jsonName: "id" },
          {
            name: "subject",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            jsonName: "subject",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "UnregisterRequest",
      },
      {
        field: [{ name: "id", number: 1, label: 1, type: 9, jsonName: "id" }],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Deleted",
      },
      {
        field: [
          { name: "id", number: 1, label: 1, type: 9, jsonName: "id" },
          {
            name: "password_hash",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "passwordHash",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "PasswordChanged",
      },
      {
        field: [{ name: "id", number: 1, label: 1, type: 9, jsonName: "id" }],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "PasswordChangeRequested",
      },
      {
        field: [
          { name: "id", number: 1, label: 1, type: 9, jsonName: "id" },
          {
            name: "activation_code",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "activationCode",
          },
          {
            name: "new_email",
            number: 3,
            label: 1,
            type: 9,
            jsonName: "newEmail",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "EmailChangeRequested",
      },
      {
        field: [
          { name: "id", number: 1, label: 1, type: 9, jsonName: "id" },
          { name: "email", number: 2, label: 1, type: 9, jsonName: "email" },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "EmailChangeConfirmed",
      },
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.user.User",
            jsonName: "items",
          },
          {
            name: "total_count",
            number: 2,
            label: 1,
            type: 13,
            jsonName: "totalCount",
          },
          {
            name: "subject",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            jsonName: "subject",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "UserList",
      },
      {
        field: [{ name: "id", number: 1, label: 1, type: 9, jsonName: "id" }],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Activate",
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
          {
            name: "subject",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            jsonName: "subject",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "FindByRoleRequest",
      },
      {
        field: [
          { name: "id", number: 1, label: 1, type: 9, jsonName: "id" },
          {
            name: "meta",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.meta.Meta",
            jsonName: "meta",
          },
          { name: "name", number: 3, label: 1, type: 9, jsonName: "name" },
          {
            name: "first_name",
            number: 4,
            label: 1,
            type: 9,
            jsonName: "firstName",
          },
          {
            name: "last_name",
            number: 5,
            label: 1,
            type: 9,
            jsonName: "lastName",
          },
          { name: "email", number: 6, label: 1, type: 9, jsonName: "email" },
          {
            name: "new_email",
            number: 7,
            label: 1,
            type: 9,
            jsonName: "newEmail",
          },
          { name: "active", number: 8, label: 1, type: 8, jsonName: "active" },
          {
            name: "activation_code",
            number: 9,
            label: 1,
            type: 9,
            jsonName: "activationCode",
          },
          {
            name: "password",
            number: 10,
            label: 1,
            type: 9,
            jsonName: "password",
          },
          {
            name: "password_hash",
            number: 11,
            label: 1,
            type: 9,
            jsonName: "passwordHash",
          },
          {
            name: "role_associations",
            number: 12,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.auth.RoleAssociation",
            jsonName: "roleAssociations",
          },
          {
            name: "timezone_id",
            number: 13,
            label: 1,
            type: 9,
            jsonName: "timezoneId",
          },
          {
            name: "locale_id",
            number: 14,
            label: 1,
            type: 9,
            jsonName: "localeId",
          },
          {
            name: "default_scope",
            number: 15,
            label: 1,
            type: 9,
            jsonName: "defaultScope",
          },
          {
            name: "unauthenticated",
            number: 16,
            label: 1,
            type: 8,
            jsonName: "unauthenticated",
          },
          { name: "guest", number: 17, label: 1, type: 8, jsonName: "guest" },
          {
            name: "image",
            number: 18,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.image.Image",
            jsonName: "image",
          },
          {
            name: "user_type",
            number: 19,
            label: 1,
            type: 14,
            typeName: ".io.restorecommerce.user.UserType",
            jsonName: "userType",
          },
          { name: "invite", number: 20, label: 1, type: 8, jsonName: "invite" },
          {
            name: "invited_by_user_name",
            number: 21,
            label: 1,
            type: 9,
            jsonName: "invitedByUserName",
          },
          {
            name: "invited_by_user_first_name",
            number: 22,
            label: 1,
            type: 9,
            jsonName: "invitedByUserFirstName",
          },
          {
            name: "invited_by_user_last_name",
            number: 23,
            label: 1,
            type: 9,
            jsonName: "invitedByUserLastName",
          },
          {
            name: "tokens",
            number: 24,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.auth.Tokens",
            jsonName: "tokens",
          },
          {
            name: "last_login",
            number: 25,
            label: 1,
            type: 1,
            jsonName: "lastLogin",
          },
          {
            name: "last_access",
            number: 26,
            label: 1,
            type: 1,
            jsonName: "lastAccess",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "User",
      },
    ],
    enumType: [
      {
        value: [
          { name: "ORG_USER", number: 0 },
          { name: "INDIVIDUAL_USER", number: 1 },
          { name: "GUEST", number: 2 },
          { name: "TECHNICAL_USER", number: 3 },
        ],
        reservedRange: [],
        reservedName: [],
        name: "UserType",
      },
    ],
    service: [
      {
        method: [
          {
            name: "Read",
            inputType: ".io.restorecommerce.resourcebase.ReadRequest",
            outputType: ".io.restorecommerce.user.UserList",
          },
          {
            name: "Create",
            inputType: ".io.restorecommerce.user.UserList",
            outputType: ".io.restorecommerce.user.UserList",
          },
          {
            name: "Delete",
            inputType: ".io.restorecommerce.resourcebase.DeleteRequest",
            outputType: ".google.protobuf.Empty",
          },
          {
            name: "Update",
            inputType: ".io.restorecommerce.user.UserList",
            outputType: ".io.restorecommerce.user.UserList",
          },
          {
            name: "Upsert",
            inputType: ".io.restorecommerce.user.UserList",
            outputType: ".io.restorecommerce.user.UserList",
          },
          {
            name: "Find",
            inputType: ".io.restorecommerce.user.FindRequest",
            outputType: ".io.restorecommerce.user.UserList",
          },
          {
            name: "Register",
            inputType: ".io.restorecommerce.user.RegisterRequest",
            outputType: ".io.restorecommerce.user.User",
          },
          {
            name: "Activate",
            inputType: ".io.restorecommerce.user.ActivateRequest",
            outputType: ".google.protobuf.Empty",
          },
          {
            name: "ChangePassword",
            inputType: ".io.restorecommerce.user.ChangePasswordRequest",
            outputType: ".google.protobuf.Empty",
          },
          {
            name: "RequestPasswordChange",
            inputType: ".io.restorecommerce.user.RequestPasswordChangeRequest",
            outputType: ".google.protobuf.Empty",
          },
          {
            name: "RequestEmailChange",
            inputType: ".io.restorecommerce.user.ChangeEmailRequest",
            outputType: ".google.protobuf.Empty",
          },
          {
            name: "ConfirmPasswordChange",
            inputType: ".io.restorecommerce.user.ConfirmPasswordChangeRequest",
            outputType: ".google.protobuf.Empty",
          },
          {
            name: "ConfirmEmailChange",
            inputType: ".io.restorecommerce.user.ConfirmEmailChangeRequest",
            outputType: ".google.protobuf.Empty",
          },
          {
            name: "Unregister",
            inputType: ".io.restorecommerce.user.UnregisterRequest",
            outputType: ".google.protobuf.Empty",
          },
          {
            name: "Login",
            inputType: ".io.restorecommerce.user.LoginRequest",
            outputType: ".io.restorecommerce.user.User",
          },
          {
            name: "FindByRole",
            inputType: ".io.restorecommerce.user.FindByRoleRequest",
            outputType: ".io.restorecommerce.user.UserList",
          },
          {
            name: "DeleteUsersByOrg",
            inputType: ".io.restorecommerce.user.OrgIDRequest",
            outputType: ".io.restorecommerce.user.UserIDs",
          },
          {
            name: "ConfirmUserInvitation",
            inputType: ".io.restorecommerce.user.ConfirmUserInvitationRequest",
            outputType: ".google.protobuf.Empty",
          },
          {
            name: "SendInvitationEmail",
            inputType: ".io.restorecommerce.user.SendInvitationEmailRequest",
            outputType: ".google.protobuf.Empty",
          },
          {
            name: "FindByToken",
            inputType: ".io.restorecommerce.user.FindByTokenRequest",
            outputType: ".io.restorecommerce.user.User",
          },
        ],
        name: "Service",
      },
    ],
    extension: [],
    name: "io/restorecommerce/user.proto",
    package: "io.restorecommerce.user",
    sourceCodeInfo: {
      location: [
        {
          path: [6, 0],
          span: [14, 0, 36, 1],
          leadingDetachedComments: [],
          leadingComments: "*\n The microservice for the user resource.\n",
        },
        {
          path: [4, 0],
          span: [42, 0, 46, 1],
          leadingDetachedComments: [],
          leadingComments:
            "*\n Request to verify password and retrieve the user's info.\n Either name or email can be provided.\n",
        },
        {
          path: [4, 0, 2, 0],
          span: [43, 2, 24],
          leadingDetachedComments: [],
          trailingComments: " User name or email\n",
        },
        {
          path: [4, 0, 2, 1],
          span: [44, 2, 22],
          leadingDetachedComments: [],
          trailingComments: " Raw password\n",
        },
        {
          path: [4, 3, 2, 0],
          span: [58, 2, 16],
          leadingDetachedComments: [],
          trailingComments: "/ User ID\n",
        },
        {
          path: [4, 5, 2, 11],
          span: [88, 2, 28],
          leadingDetachedComments: [],
          trailingComments: " default hierarchical scope\n",
        },
        {
          path: [4, 6, 2, 0],
          span: [94, 2, 18],
          leadingDetachedComments: [],
          trailingComments: "/ User name (unique)\n",
        },
        {
          path: [4, 9, 2, 0],
          span: [113, 2, 16],
          leadingDetachedComments: [],
          trailingComments: "/ User ID\n",
        },
        {
          path: [4, 12, 2, 0],
          span: [135, 2, 16],
          leadingDetachedComments: [],
          trailingComments: "/ User ID\n",
        },
        {
          path: [4, 14, 2, 0],
          span: [147, 2, 16],
          leadingDetachedComments: [],
          trailingComments: "/ User ID\n",
        },
        {
          path: [4, 15],
          span: [159, 0, 161, 1],
          leadingDetachedComments: [],
          leadingComments:
            "*\n User deletion event.\n Send when a user was deleted or unregistered.\n\n Events:\n usersDeleted,\n unregistered,\n",
        },
        {
          path: [4, 16],
          span: [169, 0, 172, 1],
          leadingDetachedComments: [],
          leadingComments:
            "*\n User password changed event.\n\n Events:\n passwordChanged,\n",
        },
        {
          path: [4, 16, 2, 0],
          span: [170, 2, 16],
          leadingDetachedComments: [],
          trailingComments: "/ User ID\n",
        },
        {
          path: [4, 17, 2, 0],
          span: [175, 2, 16],
          leadingDetachedComments: [],
          trailingComments: " User ID\n",
        },
        {
          path: [4, 18],
          span: [181, 0, 185, 1],
          leadingDetachedComments: [],
          leadingComments: "*\n User email id changed event.\n",
        },
        {
          path: [4, 19, 2, 0],
          span: [188, 2, 16],
          leadingDetachedComments: [],
          trailingComments: "/ User ID\n",
        },
        {
          path: [4, 20],
          span: [195, 0, 199, 1],
          leadingDetachedComments: [],
          leadingComments: "*\n A list of User.\n",
        },
        {
          path: [4, 21],
          span: [204, 0, 206, 1],
          leadingDetachedComments: [],
          leadingComments: "*\n User activation request.\n",
        },
        {
          path: [4, 21, 2, 0],
          span: [205, 2, 16],
          leadingDetachedComments: [],
          trailingComments: "/ User ID\n",
        },
        {
          path: [4, 23],
          span: [217, 0, 244, 1],
          leadingDetachedComments: [],
          leadingComments: "*\n A User resource.\n",
        },
        {
          path: [4, 23, 2, 0],
          span: [218, 2, 16],
          leadingDetachedComments: [],
          trailingComments: "/ User ID, unique, key\n",
        },
        {
          path: [4, 23, 2, 2],
          span: [220, 2, 18],
          leadingDetachedComments: [],
          trailingComments: " The name of the user, can be used for login\n",
        },
        {
          path: [4, 23, 2, 5],
          span: [223, 2, 19],
          leadingDetachedComments: [],
          trailingComments: "/ Email address, can be used for login\n",
        },
        {
          path: [4, 23, 2, 6],
          span: [224, 2, 23],
          leadingDetachedComments: [],
          trailingComments:
            "/ New email address; set by `requestEmailChange` and overrides actual email upon `confirmEmailChange`\n",
        },
        {
          path: [4, 23, 2, 7],
          span: [225, 2, 18],
          leadingDetachedComments: [],
          trailingComments:
            "/ If the user was activated via the activation process\n",
        },
        {
          path: [4, 23, 2, 8],
          span: [226, 2, 29],
          leadingDetachedComments: [],
          trailingComments:
            "/ Activation code used in the activation process\n",
        },
        {
          path: [4, 23, 2, 9],
          span: [227, 2, 23],
          leadingDetachedComments: [],
          trailingComments: "/ Raw password, not stored\n",
        },
        {
          path: [4, 23, 2, 10],
          span: [228, 2, 28],
          leadingDetachedComments: [],
          trailingComments: "/ Encrypted password, stored\n",
        },
        {
          path: [4, 23, 2, 11],
          span: [229, 2, 74],
          leadingDetachedComments: [],
          trailingComments:
            " A user can have multiple roles and different attributes coupled with each role\n",
        },
        {
          path: [4, 23, 2, 12],
          span: [230, 2, 26],
          leadingDetachedComments: [],
          trailingComments: " timezone_id specifications\n",
        },
        {
          path: [4, 23, 2, 13],
          span: [231, 2, 24],
          leadingDetachedComments: [],
          trailingComments: " locale specifications\n",
        },
        {
          path: [4, 23, 2, 14],
          span: [232, 2, 28],
          leadingDetachedComments: [],
          trailingComments: " default hierarchical scope\n",
        },
        {
          path: [4, 23, 2, 15],
          span: [233, 2, 28],
          leadingDetachedComments: [],
          trailingComments:
            " true in case in case of `register`; set to false after activation\n",
        },
        {
          path: [4, 23, 2, 16],
          span: [234, 2, 18],
          leadingDetachedComments: [],
          trailingComments:
            "/ Is the user a guest. A guest is a automatically generated user which can later be turned in a non-guest user.\n",
        },
        {
          path: [4, 23, 2, 19],
          span: [237, 2, 19],
          leadingDetachedComments: [],
          trailingComments: " For user invitation\n",
        },
        {
          path: [4, 23, 2, 20],
          span: [238, 2, 35],
          leadingDetachedComments: [],
          trailingComments: " user who is inviting\n",
        },
        {
          path: [4, 23, 2, 21],
          span: [239, 2, 41],
          leadingDetachedComments: [],
          trailingComments: " First name of user inviting\n",
        },
        {
          path: [4, 23, 2, 22],
          span: [240, 2, 40],
          leadingDetachedComments: [],
          trailingComments: " Last name of user inviting\n",
        },
      ],
    },
    syntax: "proto3",
  }),
  references: {
    ".io.restorecommerce.user.UserType": UserType,
    ".io.restorecommerce.user.LoginRequest": LoginRequest,
    ".io.restorecommerce.user.OrgIDRequest": OrgIDRequest,
    ".io.restorecommerce.user.UserIDs": UserIDs,
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
    ".io.restorecommerce.user.Deleted": Deleted,
    ".io.restorecommerce.user.PasswordChanged": PasswordChanged,
    ".io.restorecommerce.user.PasswordChangeRequested": PasswordChangeRequested,
    ".io.restorecommerce.user.EmailChangeRequested": EmailChangeRequested,
    ".io.restorecommerce.user.EmailChangeConfirmed": EmailChangeConfirmed,
    ".io.restorecommerce.user.UserList": UserList,
    ".io.restorecommerce.user.Activate": Activate,
    ".io.restorecommerce.user.FindByRoleRequest": FindByRoleRequest,
    ".io.restorecommerce.user.User": User,
  },
  dependencies: [
    protoMetadata1,
    protoMetadata2,
    protoMetadata3,
    protoMetadata4,
    protoMetadata5,
    protoMetadata6,
  ],
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
