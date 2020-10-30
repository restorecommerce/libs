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
  PopulateRoleAssocCacheRequest
} from "./generated/io/restorecommerce/user";
import { protobufPackage as rolePackageName, RoleList, Service as RoleService } from "./generated/io/restorecommerce/role";
import { RestoreCommerceGrpcClient } from "./grpc-client";

export {
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
  PopulateRoleAssocCacheRequest
};

export class IdentitySrvGrpcClient extends RestoreCommerceGrpcClient {

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
      populateRoleAssocCache: {
        type: 'unary',
        serialize: PopulateRoleAssocCacheRequest.encode,
        deserialize: Empty.decode
      },
    }
  });

  role = this.createService<RoleService>({
    packageName: rolePackageName,
    serviceName: 'Service',
    methods: this.createCRUDMethods(RoleList)
  });
}
