import { Empty } from "./generated/google/protobuf/empty";
import {
  protobufPackage as userPackageName,
  ActivateRequest,
  ChangeEmailRequest,
  ChangePasswordRequest,
  ConfirmEmailChangeRequest,
  ConfirmPasswordChangeRequest,
  ConfirmUserInvitationRequest,
  FindByRoleRequest,
  FindRequest,
  LoginRequest,
  OrgIDRequest,
  RegisterRequest,
  RequestPasswordChangeRequest,
  SendInvitationEmailRequest,
  Service as UserService,
  UnregisterRequest,
  User,
  UserIDs,
  UserList,
  UserType,
  FindByTokenRequest
} from "./generated/io/restorecommerce/user";
import {
  GrantId,
  Identifier,
  Service as TokenService, TokenData,
  protobufPackage as tokenPackageName
} from "./generated/io/restorecommerce/token";
import {
  Subject
} from "./generated/io/restorecommerce/auth";
import { protobufPackage as rolePackageName, RoleList, Service as RoleService } from "./generated/io/restorecommerce/role";
import { RestoreCommerceGrpcClient } from "./grpc-client";
import { Any } from './generated/google/protobuf/any';

export {
  UserService,
  UserType,
  RoleService,
  Empty,
  ActivateRequest,
  ChangeEmailRequest,
  ChangePasswordRequest,
  ConfirmEmailChangeRequest,
  ConfirmPasswordChangeRequest,
  ConfirmUserInvitationRequest,
  FindByRoleRequest,
  FindRequest,
  LoginRequest,
  OrgIDRequest,
  RegisterRequest,
  RequestPasswordChangeRequest,
  SendInvitationEmailRequest,
  UnregisterRequest,
  User,
  UserIDs,
  UserList,
  TokenService,
  Subject
};

export class IdentitySrvGrpcClient extends RestoreCommerceGrpcClient {
  token = this.createService<TokenService>({
    packageName: tokenPackageName,
    serviceName: 'Service',
    methods: {
      consume: {
        type: 'unary',
        serialize: Identifier.encode,
        deserialize: Any.decode
      },
      destroy: {
        type: 'unary',
        serialize: Identifier.encode,
        deserialize: Any.decode
      },
      find: {
        type: 'unary',
        serialize: Identifier.encode,
        deserialize: Any.decode
      },
      revokeByGrantId: {
        type: 'unary',
        serialize: GrantId.encode,
        deserialize: Any.decode
      },
      upsert: {
        type: 'unary',
        serialize: TokenData.encode,
        deserialize: Any.decode
      },
    }
  })

  user = this.createService<UserService>({
    packageName: userPackageName,
    serviceName: 'Service',
    methods: {
      ...this.createCRUDMethods(UserList),
      Activate: {
        type: 'unary',
        serialize: ActivateRequest.encode,
        deserialize: Empty.decode
      },
      ChangePassword: {
        type: 'unary',
        serialize: ChangePasswordRequest.encode,
        deserialize: Empty.decode
      },
      ConfirmEmailChange: {
        type: 'unary',
        serialize: ConfirmEmailChangeRequest.encode,
        deserialize: Empty.decode
      },
      ConfirmPasswordChange: {
        type: 'unary',
        serialize: ConfirmPasswordChangeRequest.encode,
        deserialize: Empty.decode
      },
      ConfirmUserInvitation: {
        type: 'unary',
        serialize: ConfirmUserInvitationRequest.encode,
        deserialize: Empty.decode
      },
      DeleteUsersByOrg: {
        type: 'unary',
        serialize: OrgIDRequest.encode,
        deserialize: UserIDs.decode
      },
      Find: {
        type: 'unary',
        serialize: FindRequest.encode,
        deserialize: UserList.decode
      },
      FindByRole: {
        type: 'unary',
        serialize: FindByRoleRequest.encode,
        deserialize: UserList.decode
      },
      Login: {
        type: 'unary',
        serialize: LoginRequest.encode,
        deserialize: User.decode
      },
      Register: {
        type: 'unary',
        serialize: RegisterRequest.encode,
        deserialize: User.decode
      },
      RequestEmailChange: {
        type: 'unary',
        serialize: ChangeEmailRequest.encode,
        deserialize: Empty.decode
      },
      RequestPasswordChange: {
        type: 'unary',
        serialize: RequestPasswordChangeRequest.encode,
        deserialize: Empty.decode
      },
      SendInvitationEmail: {
        type: 'unary',
        serialize: SendInvitationEmailRequest.encode,
        deserialize: Empty.decode
      },
      Unregister: {
        type: 'unary',
        serialize: UnregisterRequest.encode,
        deserialize: Empty.decode
      },
      FindByToken: {
        type: 'unary',
        serialize: FindByTokenRequest.encode,
        deserialize: User.decode
      }
    }
  });

  role = this.createService<RoleService>({
    packageName: rolePackageName,
    serviceName: 'Service',
    methods: this.createCRUDMethods(RoleList)
  });
}
