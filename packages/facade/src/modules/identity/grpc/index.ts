import { RestoreCommerceGrpcClient } from '@restorecommerce/rc-grpc-clients';
import {
  type UserServiceClient,
  UserServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/user.js';
import {
  type RoleServiceClient,
  RoleServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/role.js';
import {
  type AuthenticationLogServiceClient,
  AuthenticationLogServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/authentication_log.js';
import {
  type TokenServiceClient,
  TokenServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/token.js';
import {
  type OAuthServiceClient,
  OAuthServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/oauth.js';
import { type GrpcClientConfig } from '@restorecommerce/grpc-client';

export class IdentitySrvGrpcClient extends RestoreCommerceGrpcClient {

  readonly user: UserServiceClient;
  readonly role: RoleServiceClient;
  readonly authentication_log: AuthenticationLogServiceClient;
  readonly token: TokenServiceClient;
  readonly oauth: OAuthServiceClient;

  constructor(address: string, cfg: GrpcClientConfig) {
    super(address, cfg);

    this.user = this.createClient(cfg, UserServiceDefinition, this.channel);
    this.role = this.createClient(cfg, RoleServiceDefinition, this.channel);
    this.authentication_log = this.createClient(cfg, AuthenticationLogServiceDefinition, this.channel);
    this.token = this.createClient(cfg, TokenServiceDefinition, this.channel);
    this.oauth = this.createClient(cfg, OAuthServiceDefinition, this.channel);
  }

}
