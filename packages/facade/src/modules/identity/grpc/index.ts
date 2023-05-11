import { RestoreCommerceGrpcClient } from '@restorecommerce/rc-grpc-clients';
import {
  UserServiceClient,
  UserServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/user';
import {
  RoleServiceClient,
  RoleServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/role';
import {
  AuthenticationLogServiceClient,
  AuthenticationLogServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/authentication_log';
import {
  TokenServiceClient,
  TokenServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/token';
import {
  OAuthServiceClient,
  OAuthServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/oauth';
import { GrpcClientConfig } from '@restorecommerce/grpc-client';

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
