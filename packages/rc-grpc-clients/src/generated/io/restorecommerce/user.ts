/* eslint-disable */
import { FileDescriptorProto } from "ts-proto-descriptors/google/protobuf/descriptor";
import {
  Subject,
  protoMetadata as protoMetadata3,
  RoleAssociation,
  Tokens,
} from "../../io/restorecommerce/auth";
import {
  OperationStatus,
  Status,
  protoMetadata as protoMetadata6,
  OperationStatusObj,
} from "../../io/restorecommerce/status";
import {
  Meta,
  protoMetadata as protoMetadata2,
} from "../../io/restorecommerce/meta";
import {
  Image,
  protoMetadata as protoMetadata5,
} from "../../io/restorecommerce/image";
import {
  protoMetadata as protoMetadata1,
  DeleteResponse,
  ReadRequest,
  DeleteRequest,
} from "../../io/restorecommerce/resource_base";
import {
  protoMetadata as protoMetadata4,
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
  org_ids: string[];
  subject?: Subject;
}

export interface DeleteUsersByOrgResponse {
  user_ids: string[];
  operation_status?: OperationStatus;
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
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  timezone_id: string;
  locale_id: string;
  /** default hierarchical scope */
  default_scope: string;
  user_type: UserType;
  captcha_code: string;
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
  /** / user name or email */
  identifier: string;
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
  total_count: number;
  subject?: Subject;
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

const baseOrgIDRequest: object = { org_ids: "" };

export const OrgIDRequest = {
  encode(message: OrgIDRequest, writer: Writer = Writer.create()): Writer {
    for (const v of message.org_ids) {
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
    message.org_ids = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.org_ids.push(reader.string());
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
    message.org_ids = [];
    if (object.org_ids !== undefined && object.org_ids !== null) {
      for (const e of object.org_ids) {
        message.org_ids.push(String(e));
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
    message.org_ids = [];
    if (object.org_ids !== undefined && object.org_ids !== null) {
      for (const e of object.org_ids) {
        message.org_ids.push(e);
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
    if (message.org_ids) {
      obj.org_ids = message.org_ids.map((e) => e);
    } else {
      obj.org_ids = [];
    }
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseDeleteUsersByOrgResponse: object = { user_ids: "" };

export const DeleteUsersByOrgResponse = {
  encode(
    message: DeleteUsersByOrgResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.user_ids) {
      writer.uint32(10).string(v!);
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(
        message.operation_status,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): DeleteUsersByOrgResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseDeleteUsersByOrgResponse
    ) as DeleteUsersByOrgResponse;
    message.user_ids = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user_ids.push(reader.string());
          break;
        case 2:
          message.operation_status = OperationStatus.decode(
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
    const message = globalThis.Object.create(
      baseDeleteUsersByOrgResponse
    ) as DeleteUsersByOrgResponse;
    message.user_ids = [];
    if (object.user_ids !== undefined && object.user_ids !== null) {
      for (const e of object.user_ids) {
        message.user_ids.push(String(e));
      }
    }
    if (
      object.operation_status !== undefined &&
      object.operation_status !== null
    ) {
      message.operation_status = OperationStatus.fromJSON(
        object.operation_status
      );
    } else {
      message.operation_status = undefined;
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<DeleteUsersByOrgResponse>
  ): DeleteUsersByOrgResponse {
    const message = {
      ...baseDeleteUsersByOrgResponse,
    } as DeleteUsersByOrgResponse;
    message.user_ids = [];
    if (object.user_ids !== undefined && object.user_ids !== null) {
      for (const e of object.user_ids) {
        message.user_ids.push(e);
      }
    }
    if (
      object.operation_status !== undefined &&
      object.operation_status !== null
    ) {
      message.operation_status = OperationStatus.fromPartial(
        object.operation_status
      );
    } else {
      message.operation_status = undefined;
    }
    return message;
  },

  toJSON(message: DeleteUsersByOrgResponse): unknown {
    const obj: any = {};
    if (message.user_ids) {
      obj.user_ids = message.user_ids.map((e) => e);
    } else {
      obj.user_ids = [];
    }
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status
        ? OperationStatus.toJSON(message.operation_status)
        : undefined);
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
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  timezone_id: "",
  locale_id: "",
  default_scope: "",
  user_type: 0,
  captcha_code: "",
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
    if (message.first_name !== "") {
      writer.uint32(42).string(message.first_name);
    }
    if (message.last_name !== "") {
      writer.uint32(50).string(message.last_name);
    }
    if (message.email !== "") {
      writer.uint32(58).string(message.email);
    }
    if (message.password !== "") {
      writer.uint32(66).string(message.password);
    }
    if (message.timezone_id !== "") {
      writer.uint32(74).string(message.timezone_id);
    }
    if (message.locale_id !== "") {
      writer.uint32(82).string(message.locale_id);
    }
    if (message.default_scope !== "") {
      writer.uint32(90).string(message.default_scope);
    }
    if (message.user_type !== 0) {
      writer.uint32(96).int32(message.user_type);
    }
    if (message.captcha_code !== "") {
      writer.uint32(106).string(message.captcha_code);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): RegisterRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseRegisterRequest
    ) as RegisterRequest;
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
          message.first_name = reader.string();
          break;
        case 6:
          message.last_name = reader.string();
          break;
        case 7:
          message.email = reader.string();
          break;
        case 8:
          message.password = reader.string();
          break;
        case 9:
          message.timezone_id = reader.string();
          break;
        case 10:
          message.locale_id = reader.string();
          break;
        case 11:
          message.default_scope = reader.string();
          break;
        case 12:
          message.user_type = reader.int32() as any;
          break;
        case 13:
          message.captcha_code = reader.string();
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
    if (object.first_name !== undefined && object.first_name !== null) {
      message.first_name = String(object.first_name);
    } else {
      message.first_name = "";
    }
    if (object.last_name !== undefined && object.last_name !== null) {
      message.last_name = String(object.last_name);
    } else {
      message.last_name = "";
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
    if (object.timezone_id !== undefined && object.timezone_id !== null) {
      message.timezone_id = String(object.timezone_id);
    } else {
      message.timezone_id = "";
    }
    if (object.locale_id !== undefined && object.locale_id !== null) {
      message.locale_id = String(object.locale_id);
    } else {
      message.locale_id = "";
    }
    if (object.default_scope !== undefined && object.default_scope !== null) {
      message.default_scope = String(object.default_scope);
    } else {
      message.default_scope = "";
    }
    if (object.user_type !== undefined && object.user_type !== null) {
      message.user_type = userTypeFromJSON(object.user_type);
    } else {
      message.user_type = 0;
    }
    if (object.captcha_code !== undefined && object.captcha_code !== null) {
      message.captcha_code = String(object.captcha_code);
    } else {
      message.captcha_code = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<RegisterRequest>): RegisterRequest {
    const message = { ...baseRegisterRequest } as RegisterRequest;
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
    if (object.first_name !== undefined && object.first_name !== null) {
      message.first_name = object.first_name;
    } else {
      message.first_name = "";
    }
    if (object.last_name !== undefined && object.last_name !== null) {
      message.last_name = object.last_name;
    } else {
      message.last_name = "";
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
    if (object.timezone_id !== undefined && object.timezone_id !== null) {
      message.timezone_id = object.timezone_id;
    } else {
      message.timezone_id = "";
    }
    if (object.locale_id !== undefined && object.locale_id !== null) {
      message.locale_id = object.locale_id;
    } else {
      message.locale_id = "";
    }
    if (object.default_scope !== undefined && object.default_scope !== null) {
      message.default_scope = object.default_scope;
    } else {
      message.default_scope = "";
    }
    if (object.user_type !== undefined && object.user_type !== null) {
      message.user_type = object.user_type;
    } else {
      message.user_type = 0;
    }
    if (object.captcha_code !== undefined && object.captcha_code !== null) {
      message.captcha_code = object.captcha_code;
    } else {
      message.captcha_code = "";
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
    message.first_name !== undefined && (obj.first_name = message.first_name);
    message.last_name !== undefined && (obj.last_name = message.last_name);
    message.email !== undefined && (obj.email = message.email);
    message.password !== undefined && (obj.password = message.password);
    message.timezone_id !== undefined &&
      (obj.timezone_id = message.timezone_id);
    message.locale_id !== undefined && (obj.locale_id = message.locale_id);
    message.default_scope !== undefined &&
      (obj.default_scope = message.default_scope);
    message.user_type !== undefined &&
      (obj.user_type = userTypeToJSON(message.user_type));
    message.captcha_code !== undefined &&
      (obj.captcha_code = message.captcha_code);
    return obj;
  },
};

const baseActivateRequest: object = { identifier: "", activation_code: "" };

export const ActivateRequest = {
  encode(message: ActivateRequest, writer: Writer = Writer.create()): Writer {
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
          message.identifier = reader.string();
          break;
        case 2:
          message.activation_code = reader.string();
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
    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = String(object.identifier);
    } else {
      message.identifier = "";
    }
    if (
      object.activation_code !== undefined &&
      object.activation_code !== null
    ) {
      message.activation_code = String(object.activation_code);
    } else {
      message.activation_code = "";
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
    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = object.identifier;
    } else {
      message.identifier = "";
    }
    if (
      object.activation_code !== undefined &&
      object.activation_code !== null
    ) {
      message.activation_code = object.activation_code;
    } else {
      message.activation_code = "";
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
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.activation_code !== undefined &&
      (obj.activation_code = message.activation_code);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseConfirmUserInvitationRequest: object = {
  identifier: "",
  password: "",
  activation_code: "",
};

export const ConfirmUserInvitationRequest = {
  encode(
    message: ConfirmUserInvitationRequest,
    writer: Writer = Writer.create()
  ): Writer {
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
          message.identifier = reader.string();
          break;
        case 2:
          message.password = reader.string();
          break;
        case 3:
          message.activation_code = reader.string();
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
    if (
      object.activation_code !== undefined &&
      object.activation_code !== null
    ) {
      message.activation_code = String(object.activation_code);
    } else {
      message.activation_code = "";
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
    if (
      object.activation_code !== undefined &&
      object.activation_code !== null
    ) {
      message.activation_code = object.activation_code;
    } else {
      message.activation_code = "";
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
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.password !== undefined && (obj.password = message.password);
    message.activation_code !== undefined &&
      (obj.activation_code = message.activation_code);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseSendInvitationEmailRequest: object = {
  identifier: "",
  invited_by_user_identifier: "",
};

export const SendInvitationEmailRequest = {
  encode(
    message: SendInvitationEmailRequest,
    writer: Writer = Writer.create()
  ): Writer {
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
          message.identifier = reader.string();
          break;
        case 2:
          message.invited_by_user_identifier = reader.string();
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
    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = String(object.identifier);
    } else {
      message.identifier = "";
    }
    if (
      object.invited_by_user_identifier !== undefined &&
      object.invited_by_user_identifier !== null
    ) {
      message.invited_by_user_identifier = String(
        object.invited_by_user_identifier
      );
    } else {
      message.invited_by_user_identifier = "";
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
    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = object.identifier;
    } else {
      message.identifier = "";
    }
    if (
      object.invited_by_user_identifier !== undefined &&
      object.invited_by_user_identifier !== null
    ) {
      message.invited_by_user_identifier = object.invited_by_user_identifier;
    } else {
      message.invited_by_user_identifier = "";
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
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.invited_by_user_identifier !== undefined &&
      (obj.invited_by_user_identifier = message.invited_by_user_identifier);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseChangePasswordRequest: object = {
  identifier: "",
  password: "",
  new_password: "",
};

export const ChangePasswordRequest = {
  encode(
    message: ChangePasswordRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
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
          message.identifier = reader.string();
          break;
        case 2:
          message.password = reader.string();
          break;
        case 3:
          message.new_password = reader.string();
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
    if (object.new_password !== undefined && object.new_password !== null) {
      message.new_password = String(object.new_password);
    } else {
      message.new_password = "";
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
    if (object.new_password !== undefined && object.new_password !== null) {
      message.new_password = object.new_password;
    } else {
      message.new_password = "";
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
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.password !== undefined && (obj.password = message.password);
    message.new_password !== undefined &&
      (obj.new_password = message.new_password);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseRequestPasswordChangeRequest: object = { identifier: "" };

export const RequestPasswordChangeRequest = {
  encode(
    message: RequestPasswordChangeRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(18).fork()).ldelim();
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
    const message = globalThis.Object.create(
      baseRequestPasswordChangeRequest
    ) as RequestPasswordChangeRequest;
    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = String(object.identifier);
    } else {
      message.identifier = "";
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
    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = object.identifier;
    } else {
      message.identifier = "";
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
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseConfirmPasswordChangeRequest: object = {
  identifier: "",
  activation_code: "",
  password: "",
};

export const ConfirmPasswordChangeRequest = {
  encode(
    message: ConfirmPasswordChangeRequest,
    writer: Writer = Writer.create()
  ): Writer {
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
          message.identifier = reader.string();
          break;
        case 2:
          message.activation_code = reader.string();
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
    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = String(object.identifier);
    } else {
      message.identifier = "";
    }
    if (
      object.activation_code !== undefined &&
      object.activation_code !== null
    ) {
      message.activation_code = String(object.activation_code);
    } else {
      message.activation_code = "";
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
    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = object.identifier;
    } else {
      message.identifier = "";
    }
    if (
      object.activation_code !== undefined &&
      object.activation_code !== null
    ) {
      message.activation_code = object.activation_code;
    } else {
      message.activation_code = "";
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
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.activation_code !== undefined &&
      (obj.activation_code = message.activation_code);
    message.password !== undefined && (obj.password = message.password);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseChangeEmailRequest: object = { identifier: "", new_email: "" };

export const ChangeEmailRequest = {
  encode(
    message: ChangeEmailRequest,
    writer: Writer = Writer.create()
  ): Writer {
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
          message.identifier = reader.string();
          break;
        case 2:
          message.new_email = reader.string();
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
    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = String(object.identifier);
    } else {
      message.identifier = "";
    }
    if (object.new_email !== undefined && object.new_email !== null) {
      message.new_email = String(object.new_email);
    } else {
      message.new_email = "";
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
    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = object.identifier;
    } else {
      message.identifier = "";
    }
    if (object.new_email !== undefined && object.new_email !== null) {
      message.new_email = object.new_email;
    } else {
      message.new_email = "";
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
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.new_email !== undefined && (obj.new_email = message.new_email);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseConfirmEmailChangeRequest: object = {
  identifier: "",
  activation_code: "",
};

export const ConfirmEmailChangeRequest = {
  encode(
    message: ConfirmEmailChangeRequest,
    writer: Writer = Writer.create()
  ): Writer {
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
          message.identifier = reader.string();
          break;
        case 2:
          message.activation_code = reader.string();
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
    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = String(object.identifier);
    } else {
      message.identifier = "";
    }
    if (
      object.activation_code !== undefined &&
      object.activation_code !== null
    ) {
      message.activation_code = String(object.activation_code);
    } else {
      message.activation_code = "";
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
    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = object.identifier;
    } else {
      message.identifier = "";
    }
    if (
      object.activation_code !== undefined &&
      object.activation_code !== null
    ) {
      message.activation_code = object.activation_code;
    } else {
      message.activation_code = "";
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
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.activation_code !== undefined &&
      (obj.activation_code = message.activation_code);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseUnregisterRequest: object = { identifier: "" };

export const UnregisterRequest = {
  encode(message: UnregisterRequest, writer: Writer = Writer.create()): Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
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
    const message = globalThis.Object.create(
      baseUnregisterRequest
    ) as UnregisterRequest;
    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = String(object.identifier);
    } else {
      message.identifier = "";
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
    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = object.identifier;
    } else {
      message.identifier = "";
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
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseSendActivationEmailRequest: object = { identifier: "" };

export const SendActivationEmailRequest = {
  encode(
    message: SendActivationEmailRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): SendActivationEmailRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseSendActivationEmailRequest
    ) as SendActivationEmailRequest;
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
    const message = globalThis.Object.create(
      baseSendActivationEmailRequest
    ) as SendActivationEmailRequest;
    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = String(object.identifier);
    } else {
      message.identifier = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<SendActivationEmailRequest>
  ): SendActivationEmailRequest {
    const message = {
      ...baseSendActivationEmailRequest,
    } as SendActivationEmailRequest;
    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = object.identifier;
    } else {
      message.identifier = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
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

const basePasswordChanged: object = { id: "", password_hash: "" };

export const PasswordChanged = {
  encode(message: PasswordChanged, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.password_hash !== "") {
      writer.uint32(18).string(message.password_hash);
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
          message.password_hash = reader.string();
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
    if (object.password_hash !== undefined && object.password_hash !== null) {
      message.password_hash = String(object.password_hash);
    } else {
      message.password_hash = "";
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
    if (object.password_hash !== undefined && object.password_hash !== null) {
      message.password_hash = object.password_hash;
    } else {
      message.password_hash = "";
    }
    return message;
  },

  toJSON(message: PasswordChanged): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.password_hash !== undefined &&
      (obj.password_hash = message.password_hash);
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
  activation_code: "",
  new_email: "",
};

export const EmailChangeRequested = {
  encode(
    message: EmailChangeRequested,
    writer: Writer = Writer.create()
  ): Writer {
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
          message.activation_code = reader.string();
          break;
        case 3:
          message.new_email = reader.string();
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
    if (
      object.activation_code !== undefined &&
      object.activation_code !== null
    ) {
      message.activation_code = String(object.activation_code);
    } else {
      message.activation_code = "";
    }
    if (object.new_email !== undefined && object.new_email !== null) {
      message.new_email = String(object.new_email);
    } else {
      message.new_email = "";
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
    if (
      object.activation_code !== undefined &&
      object.activation_code !== null
    ) {
      message.activation_code = object.activation_code;
    } else {
      message.activation_code = "";
    }
    if (object.new_email !== undefined && object.new_email !== null) {
      message.new_email = object.new_email;
    } else {
      message.new_email = "";
    }
    return message;
  },

  toJSON(message: EmailChangeRequested): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.activation_code !== undefined &&
      (obj.activation_code = message.activation_code);
    message.new_email !== undefined && (obj.new_email = message.new_email);
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

const baseUserList: object = { total_count: 0 };

export const UserList = {
  encode(message: UserList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      User.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
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
          message.total_count = reader.uint32();
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
    if (object.total_count !== undefined && object.total_count !== null) {
      message.total_count = Number(object.total_count);
    } else {
      message.total_count = 0;
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
    if (object.total_count !== undefined && object.total_count !== null) {
      message.total_count = object.total_count;
    } else {
      message.total_count = 0;
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
    message.total_count !== undefined &&
      (obj.total_count = message.total_count);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseUserListResponse: object = { total_count: 0 };

export const UserListResponse = {
  encode(message: UserListResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      UserResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(
        message.operation_status,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): UserListResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseUserListResponse
    ) as UserListResponse;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(UserResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.total_count = reader.uint32();
          break;
        case 3:
          message.operation_status = OperationStatus.decode(
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
    const message = globalThis.Object.create(
      baseUserListResponse
    ) as UserListResponse;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(UserResponse.fromJSON(e));
      }
    }
    if (object.total_count !== undefined && object.total_count !== null) {
      message.total_count = Number(object.total_count);
    } else {
      message.total_count = 0;
    }
    if (
      object.operation_status !== undefined &&
      object.operation_status !== null
    ) {
      message.operation_status = OperationStatus.fromJSON(
        object.operation_status
      );
    } else {
      message.operation_status = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<UserListResponse>): UserListResponse {
    const message = { ...baseUserListResponse } as UserListResponse;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(UserResponse.fromPartial(e));
      }
    }
    if (object.total_count !== undefined && object.total_count !== null) {
      message.total_count = object.total_count;
    } else {
      message.total_count = 0;
    }
    if (
      object.operation_status !== undefined &&
      object.operation_status !== null
    ) {
      message.operation_status = OperationStatus.fromPartial(
        object.operation_status
      );
    } else {
      message.operation_status = undefined;
    }
    return message;
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
    message.total_count !== undefined &&
      (obj.total_count = message.total_count);
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status
        ? OperationStatus.toJSON(message.operation_status)
        : undefined);
    return obj;
  },
};

const baseUserResponse: object = {};

export const UserResponse = {
  encode(message: UserResponse, writer: Writer = Writer.create()): Writer {
    if (message.payload !== undefined) {
      User.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): UserResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseUserResponse) as UserResponse;
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
    const message = globalThis.Object.create(baseUserResponse) as UserResponse;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = User.fromJSON(object.payload);
    } else {
      message.payload = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromJSON(object.status);
    } else {
      message.status = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<UserResponse>): UserResponse {
    const message = { ...baseUserResponse } as UserResponse;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = User.fromPartial(object.payload);
    } else {
      message.payload = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromPartial(object.status);
    } else {
      message.status = undefined;
    }
    return message;
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
  first_name: "",
  last_name: "",
  email: "",
  new_email: "",
  active: false,
  activation_code: "",
  password: "",
  password_hash: "",
  timezone_id: "",
  locale_id: "",
  default_scope: "",
  unauthenticated: false,
  guest: false,
  user_type: 0,
  invite: false,
  invited_by_user_name: "",
  invited_by_user_first_name: "",
  invited_by_user_last_name: "",
  last_access: 0,
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
    if (message.user_type !== 0) {
      writer.uint32(152).int32(message.user_type);
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
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): User {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseUser) as User;
    message.role_associations = [];
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
          message.first_name = reader.string();
          break;
        case 5:
          message.last_name = reader.string();
          break;
        case 6:
          message.email = reader.string();
          break;
        case 7:
          message.new_email = reader.string();
          break;
        case 8:
          message.active = reader.bool();
          break;
        case 9:
          message.activation_code = reader.string();
          break;
        case 10:
          message.password = reader.string();
          break;
        case 11:
          message.password_hash = reader.string();
          break;
        case 12:
          message.role_associations.push(
            RoleAssociation.decode(reader, reader.uint32())
          );
          break;
        case 13:
          message.timezone_id = reader.string();
          break;
        case 14:
          message.locale_id = reader.string();
          break;
        case 15:
          message.default_scope = reader.string();
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
          message.user_type = reader.int32() as any;
          break;
        case 20:
          message.invite = reader.bool();
          break;
        case 21:
          message.invited_by_user_name = reader.string();
          break;
        case 22:
          message.invited_by_user_first_name = reader.string();
          break;
        case 23:
          message.invited_by_user_last_name = reader.string();
          break;
        case 24:
          message.tokens.push(Tokens.decode(reader, reader.uint32()));
          break;
        case 25:
          message.last_access = reader.double();
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
    message.role_associations = [];
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
    if (object.first_name !== undefined && object.first_name !== null) {
      message.first_name = String(object.first_name);
    } else {
      message.first_name = "";
    }
    if (object.last_name !== undefined && object.last_name !== null) {
      message.last_name = String(object.last_name);
    } else {
      message.last_name = "";
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = String(object.email);
    } else {
      message.email = "";
    }
    if (object.new_email !== undefined && object.new_email !== null) {
      message.new_email = String(object.new_email);
    } else {
      message.new_email = "";
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = Boolean(object.active);
    } else {
      message.active = false;
    }
    if (
      object.activation_code !== undefined &&
      object.activation_code !== null
    ) {
      message.activation_code = String(object.activation_code);
    } else {
      message.activation_code = "";
    }
    if (object.password !== undefined && object.password !== null) {
      message.password = String(object.password);
    } else {
      message.password = "";
    }
    if (object.password_hash !== undefined && object.password_hash !== null) {
      message.password_hash = String(object.password_hash);
    } else {
      message.password_hash = "";
    }
    if (
      object.role_associations !== undefined &&
      object.role_associations !== null
    ) {
      for (const e of object.role_associations) {
        message.role_associations.push(RoleAssociation.fromJSON(e));
      }
    }
    if (object.timezone_id !== undefined && object.timezone_id !== null) {
      message.timezone_id = String(object.timezone_id);
    } else {
      message.timezone_id = "";
    }
    if (object.locale_id !== undefined && object.locale_id !== null) {
      message.locale_id = String(object.locale_id);
    } else {
      message.locale_id = "";
    }
    if (object.default_scope !== undefined && object.default_scope !== null) {
      message.default_scope = String(object.default_scope);
    } else {
      message.default_scope = "";
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
    if (object.user_type !== undefined && object.user_type !== null) {
      message.user_type = userTypeFromJSON(object.user_type);
    } else {
      message.user_type = 0;
    }
    if (object.invite !== undefined && object.invite !== null) {
      message.invite = Boolean(object.invite);
    } else {
      message.invite = false;
    }
    if (
      object.invited_by_user_name !== undefined &&
      object.invited_by_user_name !== null
    ) {
      message.invited_by_user_name = String(object.invited_by_user_name);
    } else {
      message.invited_by_user_name = "";
    }
    if (
      object.invited_by_user_first_name !== undefined &&
      object.invited_by_user_first_name !== null
    ) {
      message.invited_by_user_first_name = String(
        object.invited_by_user_first_name
      );
    } else {
      message.invited_by_user_first_name = "";
    }
    if (
      object.invited_by_user_last_name !== undefined &&
      object.invited_by_user_last_name !== null
    ) {
      message.invited_by_user_last_name = String(
        object.invited_by_user_last_name
      );
    } else {
      message.invited_by_user_last_name = "";
    }
    if (object.tokens !== undefined && object.tokens !== null) {
      for (const e of object.tokens) {
        message.tokens.push(Tokens.fromJSON(e));
      }
    }
    if (object.last_access !== undefined && object.last_access !== null) {
      message.last_access = Number(object.last_access);
    } else {
      message.last_access = 0;
    }
    return message;
  },

  fromPartial(object: DeepPartial<User>): User {
    const message = { ...baseUser } as User;
    message.role_associations = [];
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
    if (object.first_name !== undefined && object.first_name !== null) {
      message.first_name = object.first_name;
    } else {
      message.first_name = "";
    }
    if (object.last_name !== undefined && object.last_name !== null) {
      message.last_name = object.last_name;
    } else {
      message.last_name = "";
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = "";
    }
    if (object.new_email !== undefined && object.new_email !== null) {
      message.new_email = object.new_email;
    } else {
      message.new_email = "";
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    } else {
      message.active = false;
    }
    if (
      object.activation_code !== undefined &&
      object.activation_code !== null
    ) {
      message.activation_code = object.activation_code;
    } else {
      message.activation_code = "";
    }
    if (object.password !== undefined && object.password !== null) {
      message.password = object.password;
    } else {
      message.password = "";
    }
    if (object.password_hash !== undefined && object.password_hash !== null) {
      message.password_hash = object.password_hash;
    } else {
      message.password_hash = "";
    }
    if (
      object.role_associations !== undefined &&
      object.role_associations !== null
    ) {
      for (const e of object.role_associations) {
        message.role_associations.push(RoleAssociation.fromPartial(e));
      }
    }
    if (object.timezone_id !== undefined && object.timezone_id !== null) {
      message.timezone_id = object.timezone_id;
    } else {
      message.timezone_id = "";
    }
    if (object.locale_id !== undefined && object.locale_id !== null) {
      message.locale_id = object.locale_id;
    } else {
      message.locale_id = "";
    }
    if (object.default_scope !== undefined && object.default_scope !== null) {
      message.default_scope = object.default_scope;
    } else {
      message.default_scope = "";
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
    if (object.user_type !== undefined && object.user_type !== null) {
      message.user_type = object.user_type;
    } else {
      message.user_type = 0;
    }
    if (object.invite !== undefined && object.invite !== null) {
      message.invite = object.invite;
    } else {
      message.invite = false;
    }
    if (
      object.invited_by_user_name !== undefined &&
      object.invited_by_user_name !== null
    ) {
      message.invited_by_user_name = object.invited_by_user_name;
    } else {
      message.invited_by_user_name = "";
    }
    if (
      object.invited_by_user_first_name !== undefined &&
      object.invited_by_user_first_name !== null
    ) {
      message.invited_by_user_first_name = object.invited_by_user_first_name;
    } else {
      message.invited_by_user_first_name = "";
    }
    if (
      object.invited_by_user_last_name !== undefined &&
      object.invited_by_user_last_name !== null
    ) {
      message.invited_by_user_last_name = object.invited_by_user_last_name;
    } else {
      message.invited_by_user_last_name = "";
    }
    if (object.tokens !== undefined && object.tokens !== null) {
      for (const e of object.tokens) {
        message.tokens.push(Tokens.fromPartial(e));
      }
    }
    if (object.last_access !== undefined && object.last_access !== null) {
      message.last_access = object.last_access;
    } else {
      message.last_access = 0;
    }
    return message;
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.first_name !== undefined && (obj.first_name = message.first_name);
    message.last_name !== undefined && (obj.last_name = message.last_name);
    message.email !== undefined && (obj.email = message.email);
    message.new_email !== undefined && (obj.new_email = message.new_email);
    message.active !== undefined && (obj.active = message.active);
    message.activation_code !== undefined &&
      (obj.activation_code = message.activation_code);
    message.password !== undefined && (obj.password = message.password);
    message.password_hash !== undefined &&
      (obj.password_hash = message.password_hash);
    if (message.role_associations) {
      obj.role_associations = message.role_associations.map((e) =>
        e ? RoleAssociation.toJSON(e) : undefined
      );
    } else {
      obj.role_associations = [];
    }
    message.timezone_id !== undefined &&
      (obj.timezone_id = message.timezone_id);
    message.locale_id !== undefined && (obj.locale_id = message.locale_id);
    message.default_scope !== undefined &&
      (obj.default_scope = message.default_scope);
    message.unauthenticated !== undefined &&
      (obj.unauthenticated = message.unauthenticated);
    message.guest !== undefined && (obj.guest = message.guest);
    message.image !== undefined &&
      (obj.image = message.image ? Image.toJSON(message.image) : undefined);
    message.user_type !== undefined &&
      (obj.user_type = userTypeToJSON(message.user_type));
    message.invite !== undefined && (obj.invite = message.invite);
    message.invited_by_user_name !== undefined &&
      (obj.invited_by_user_name = message.invited_by_user_name);
    message.invited_by_user_first_name !== undefined &&
      (obj.invited_by_user_first_name = message.invited_by_user_first_name);
    message.invited_by_user_last_name !== undefined &&
      (obj.invited_by_user_last_name = message.invited_by_user_last_name);
    if (message.tokens) {
      obj.tokens = message.tokens.map((e) =>
        e ? Tokens.toJSON(e) : undefined
      );
    } else {
      obj.tokens = [];
    }
    message.last_access !== undefined &&
      (obj.last_access = message.last_access);
    return obj;
  },
};

/** The microservice for the user resource. */
export interface Service {
  Read(request: ReadRequest): Promise<UserListResponse>;
  Create(request: UserList): Promise<UserListResponse>;
  Delete(request: DeleteRequest): Promise<DeleteResponse>;
  Update(request: UserList): Promise<UserListResponse>;
  Upsert(request: UserList): Promise<UserListResponse>;
  Find(request: FindRequest): Promise<UserListResponse>;
  Register(request: RegisterRequest): Promise<UserResponse>;
  Activate(request: ActivateRequest): Promise<OperationStatusObj>;
  ChangePassword(request: ChangePasswordRequest): Promise<OperationStatusObj>;
  RequestPasswordChange(
    request: RequestPasswordChangeRequest
  ): Promise<OperationStatusObj>;
  RequestEmailChange(request: ChangeEmailRequest): Promise<OperationStatusObj>;
  ConfirmPasswordChange(
    request: ConfirmPasswordChangeRequest
  ): Promise<OperationStatusObj>;
  ConfirmEmailChange(
    request: ConfirmEmailChangeRequest
  ): Promise<OperationStatusObj>;
  Unregister(request: UnregisterRequest): Promise<OperationStatusObj>;
  Login(request: LoginRequest): Promise<UserResponse>;
  FindByRole(request: FindByRoleRequest): Promise<UserListResponse>;
  DeleteUsersByOrg(request: OrgIDRequest): Promise<DeleteUsersByOrgResponse>;
  ConfirmUserInvitation(
    request: ConfirmUserInvitationRequest
  ): Promise<OperationStatusObj>;
  SendInvitationEmail(
    request: SendInvitationEmailRequest
  ): Promise<OperationStatusObj>;
  FindByToken(request: FindByTokenRequest): Promise<UserResponse>;
  SendActivationEmail(
    request: SendActivationEmailRequest
  ): Promise<OperationStatusObj>;
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
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/attribute.proto",
      "io/restorecommerce/image.proto",
      "io/restorecommerce/status.proto",
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
          {
            name: "operation_status",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.OperationStatus",
            jsonName: "operationStatus",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "DeleteUsersByOrgResponse",
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
            name: "default_scope",
            number: 11,
            label: 1,
            type: 9,
            jsonName: "defaultScope",
          },
          {
            name: "user_type",
            number: 12,
            label: 1,
            type: 14,
            typeName: ".io.restorecommerce.user.UserType",
            jsonName: "userType",
          },
          {
            name: "captcha_code",
            number: 13,
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
          {
            name: "identifier",
            number: 1,
            label: 1,
            type: 9,
            jsonName: "identifier",
          },
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
          {
            name: "identifier",
            number: 1,
            label: 1,
            type: 9,
            jsonName: "identifier",
          },
          {
            name: "invited_by_user_identifier",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "invitedByUserIdentifier",
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
            name: "identifier",
            number: 1,
            label: 1,
            type: 9,
            jsonName: "identifier",
          },
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
        name: "RequestPasswordChangeRequest",
      },
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
          {
            name: "identifier",
            number: 1,
            label: 1,
            type: 9,
            jsonName: "identifier",
          },
          {
            name: "new_email",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "newEmail",
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
        name: "ChangeEmailRequest",
      },
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
          {
            name: "identifier",
            number: 1,
            label: 1,
            type: 9,
            jsonName: "identifier",
          },
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
        field: [
          {
            name: "identifier",
            number: 1,
            label: 1,
            type: 9,
            jsonName: "identifier",
          },
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
        name: "SendActivationEmailRequest",
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
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.user.UserResponse",
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
            name: "operation_status",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.OperationStatus",
            jsonName: "operationStatus",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "UserListResponse",
      },
      {
        field: [
          {
            name: "payload",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.user.User",
            jsonName: "payload",
          },
          {
            name: "status",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.Status",
            jsonName: "status",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "UserResponse",
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
            name: "last_access",
            number: 25,
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
            outputType: ".io.restorecommerce.user.UserListResponse",
          },
          {
            name: "Create",
            inputType: ".io.restorecommerce.user.UserList",
            outputType: ".io.restorecommerce.user.UserListResponse",
          },
          {
            name: "Delete",
            inputType: ".io.restorecommerce.resourcebase.DeleteRequest",
            outputType: ".io.restorecommerce.resourcebase.DeleteResponse",
          },
          {
            name: "Update",
            inputType: ".io.restorecommerce.user.UserList",
            outputType: ".io.restorecommerce.user.UserListResponse",
          },
          {
            name: "Upsert",
            inputType: ".io.restorecommerce.user.UserList",
            outputType: ".io.restorecommerce.user.UserListResponse",
          },
          {
            name: "Find",
            inputType: ".io.restorecommerce.user.FindRequest",
            outputType: ".io.restorecommerce.user.UserListResponse",
          },
          {
            name: "Register",
            inputType: ".io.restorecommerce.user.RegisterRequest",
            outputType: ".io.restorecommerce.user.UserResponse",
          },
          {
            name: "Activate",
            inputType: ".io.restorecommerce.user.ActivateRequest",
            outputType: ".io.restorecommerce.status.OperationStatusObj",
          },
          {
            name: "ChangePassword",
            inputType: ".io.restorecommerce.user.ChangePasswordRequest",
            outputType: ".io.restorecommerce.status.OperationStatusObj",
          },
          {
            name: "RequestPasswordChange",
            inputType: ".io.restorecommerce.user.RequestPasswordChangeRequest",
            outputType: ".io.restorecommerce.status.OperationStatusObj",
          },
          {
            name: "RequestEmailChange",
            inputType: ".io.restorecommerce.user.ChangeEmailRequest",
            outputType: ".io.restorecommerce.status.OperationStatusObj",
          },
          {
            name: "ConfirmPasswordChange",
            inputType: ".io.restorecommerce.user.ConfirmPasswordChangeRequest",
            outputType: ".io.restorecommerce.status.OperationStatusObj",
          },
          {
            name: "ConfirmEmailChange",
            inputType: ".io.restorecommerce.user.ConfirmEmailChangeRequest",
            outputType: ".io.restorecommerce.status.OperationStatusObj",
          },
          {
            name: "Unregister",
            inputType: ".io.restorecommerce.user.UnregisterRequest",
            outputType: ".io.restorecommerce.status.OperationStatusObj",
          },
          {
            name: "Login",
            inputType: ".io.restorecommerce.user.LoginRequest",
            outputType: ".io.restorecommerce.user.UserResponse",
          },
          {
            name: "FindByRole",
            inputType: ".io.restorecommerce.user.FindByRoleRequest",
            outputType: ".io.restorecommerce.user.UserListResponse",
          },
          {
            name: "DeleteUsersByOrg",
            inputType: ".io.restorecommerce.user.OrgIDRequest",
            outputType: ".io.restorecommerce.user.DeleteUsersByOrgResponse",
          },
          {
            name: "ConfirmUserInvitation",
            inputType: ".io.restorecommerce.user.ConfirmUserInvitationRequest",
            outputType: ".io.restorecommerce.status.OperationStatusObj",
          },
          {
            name: "SendInvitationEmail",
            inputType: ".io.restorecommerce.user.SendInvitationEmailRequest",
            outputType: ".io.restorecommerce.status.OperationStatusObj",
          },
          {
            name: "FindByToken",
            inputType: ".io.restorecommerce.user.FindByTokenRequest",
            outputType: ".io.restorecommerce.user.UserResponse",
          },
          {
            name: "SendActivationEmail",
            inputType: ".io.restorecommerce.user.SendActivationEmailRequest",
            outputType: ".io.restorecommerce.status.OperationStatusObj",
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
          span: [14, 0, 37, 1],
          leadingDetachedComments: [],
          leadingComments: "*\n The microservice for the user resource.\n",
        },
        {
          path: [4, 0],
          span: [43, 0, 47, 1],
          leadingDetachedComments: [],
          leadingComments:
            "*\n Request to verify password and retrieve the user's info.\n Either name or email can be provided.\n",
        },
        {
          path: [4, 0, 2, 0],
          span: [44, 2, 24],
          leadingDetachedComments: [],
          trailingComments: " User name or email\n",
        },
        {
          path: [4, 0, 2, 1],
          span: [45, 2, 22],
          leadingDetachedComments: [],
          trailingComments: " Raw password\n",
        },
        {
          path: [4, 3, 2, 0],
          span: [60, 2, 16],
          leadingDetachedComments: [],
          trailingComments: "/ User ID\n",
        },
        {
          path: [4, 5, 2, 10],
          span: [89, 2, 28],
          leadingDetachedComments: [],
          trailingComments: " default hierarchical scope\n",
        },
        {
          path: [4, 6, 2, 0],
          span: [95, 2, 24],
          leadingDetachedComments: [],
          trailingComments: "/ user name or email\n",
        },
        {
          path: [4, 7, 2, 0],
          span: [101, 2, 24],
          leadingDetachedComments: [],
          trailingComments: " user name or email\n",
        },
        {
          path: [4, 8, 2, 0],
          span: [108, 2, 24],
          leadingDetachedComments: [],
          trailingComments: " user name or email\n",
        },
        {
          path: [4, 9, 2, 0],
          span: [114, 2, 24],
          leadingDetachedComments: [],
          trailingComments: "/ user name or email\n",
        },
        {
          path: [4, 10, 2, 0],
          span: [121, 2, 24],
          leadingDetachedComments: [],
          trailingComments: " user name or email\n",
        },
        {
          path: [4, 11, 2, 0],
          span: [126, 2, 24],
          leadingDetachedComments: [],
          trailingComments: " user name or email\n",
        },
        {
          path: [4, 12, 2, 0],
          span: [133, 2, 24],
          leadingDetachedComments: [],
          trailingComments: " user name or email\n",
        },
        {
          path: [4, 13, 2, 0],
          span: [139, 2, 24],
          leadingDetachedComments: [],
          trailingComments: " user name or email\n",
        },
        {
          path: [4, 14, 2, 0],
          span: [145, 2, 24],
          leadingDetachedComments: [],
          trailingComments: "/ User ID\n",
        },
        {
          path: [4, 15, 2, 0],
          span: [150, 2, 24],
          leadingDetachedComments: [],
          trailingComments: "/ User name or email\n",
        },
        {
          path: [4, 16],
          span: [162, 0, 164, 1],
          leadingDetachedComments: [],
          leadingComments:
            "*\n User deletion event.\n Send when a user was deleted or unregistered.\n\n Events:\n usersDeleted,\n unregistered,\n",
        },
        {
          path: [4, 17],
          span: [172, 0, 175, 1],
          leadingDetachedComments: [],
          leadingComments:
            "*\n User password changed event.\n\n Events:\n passwordChanged,\n",
        },
        {
          path: [4, 17, 2, 0],
          span: [173, 2, 16],
          leadingDetachedComments: [],
          trailingComments: "/ User ID\n",
        },
        {
          path: [4, 18, 2, 0],
          span: [178, 2, 16],
          leadingDetachedComments: [],
          trailingComments: " User ID\n",
        },
        {
          path: [4, 19],
          span: [184, 0, 188, 1],
          leadingDetachedComments: [],
          leadingComments: "*\n User email id changed event.\n",
        },
        {
          path: [4, 20, 2, 0],
          span: [191, 2, 16],
          leadingDetachedComments: [],
          trailingComments: "/ User ID\n",
        },
        {
          path: [4, 21],
          span: [198, 0, 202, 1],
          leadingDetachedComments: [],
          leadingComments: "*\n A list of User.\n",
        },
        {
          path: [4, 24],
          span: [218, 0, 220, 1],
          leadingDetachedComments: [],
          leadingComments: "*\n User activation request.\n",
        },
        {
          path: [4, 24, 2, 0],
          span: [219, 2, 16],
          leadingDetachedComments: [],
          trailingComments: "/ User ID\n",
        },
        {
          path: [4, 26],
          span: [231, 0, 257, 1],
          leadingDetachedComments: [],
          leadingComments: "*\n A User resource.\n",
        },
        {
          path: [4, 26, 2, 0],
          span: [232, 2, 16],
          leadingDetachedComments: [],
          trailingComments: "/ User ID, unique, key\n",
        },
        {
          path: [4, 26, 2, 2],
          span: [234, 2, 18],
          leadingDetachedComments: [],
          trailingComments: " The name of the user, can be used for login\n",
        },
        {
          path: [4, 26, 2, 5],
          span: [237, 2, 19],
          leadingDetachedComments: [],
          trailingComments: "/ Email address, can be used for login\n",
        },
        {
          path: [4, 26, 2, 6],
          span: [238, 2, 23],
          leadingDetachedComments: [],
          trailingComments:
            "/ New email address; set by `requestEmailChange` and overrides actual email upon `confirmEmailChange`\n",
        },
        {
          path: [4, 26, 2, 7],
          span: [239, 2, 18],
          leadingDetachedComments: [],
          trailingComments:
            "/ If the user was activated via the activation process\n",
        },
        {
          path: [4, 26, 2, 8],
          span: [240, 2, 29],
          leadingDetachedComments: [],
          trailingComments:
            "/ Activation code used in the activation process\n",
        },
        {
          path: [4, 26, 2, 9],
          span: [241, 2, 23],
          leadingDetachedComments: [],
          trailingComments: "/ Raw password, not stored\n",
        },
        {
          path: [4, 26, 2, 10],
          span: [242, 2, 28],
          leadingDetachedComments: [],
          trailingComments: "/ Encrypted password, stored\n",
        },
        {
          path: [4, 26, 2, 11],
          span: [243, 2, 74],
          leadingDetachedComments: [],
          trailingComments:
            " A user can have multiple roles and different attributes coupled with each role\n",
        },
        {
          path: [4, 26, 2, 12],
          span: [244, 2, 26],
          leadingDetachedComments: [],
          trailingComments: " timezone_id specifications\n",
        },
        {
          path: [4, 26, 2, 13],
          span: [245, 2, 24],
          leadingDetachedComments: [],
          trailingComments: " locale specifications\n",
        },
        {
          path: [4, 26, 2, 14],
          span: [246, 2, 28],
          leadingDetachedComments: [],
          trailingComments: " default hierarchical scope\n",
        },
        {
          path: [4, 26, 2, 15],
          span: [247, 2, 28],
          leadingDetachedComments: [],
          trailingComments:
            " true in case in case of `register`; set to false after activation\n",
        },
        {
          path: [4, 26, 2, 16],
          span: [248, 2, 18],
          leadingDetachedComments: [],
          trailingComments:
            "/ Is the user a guest. A guest is a automatically generated user which can later be turned in a non-guest user.\n",
        },
        {
          path: [4, 26, 2, 19],
          span: [251, 2, 19],
          leadingDetachedComments: [],
          trailingComments: " For user invitation\n",
        },
        {
          path: [4, 26, 2, 20],
          span: [252, 2, 35],
          leadingDetachedComments: [],
          trailingComments: " user who is inviting\n",
        },
        {
          path: [4, 26, 2, 21],
          span: [253, 2, 41],
          leadingDetachedComments: [],
          trailingComments: " First name of user inviting\n",
        },
        {
          path: [4, 26, 2, 22],
          span: [254, 2, 40],
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
    ".io.restorecommerce.user.UserListResponse": UserListResponse,
    ".io.restorecommerce.user.UserResponse": UserResponse,
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
