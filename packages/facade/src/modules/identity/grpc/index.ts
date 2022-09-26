import { RestoreCommerceGrpcClient } from '@restorecommerce/rc-grpc-clients';
import {
  ServiceClient as userClient,
  ServiceDefinition as userService
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/user';
import {
  ServiceClient as roleClient,
  ServiceDefinition as roleService
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/role';
import {
  ServiceClient as authentication_logClient,
  ServiceDefinition as authentication_logService
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/authentication_log';
import {
  ServiceClient as tokenClient,
  ServiceDefinition as tokenService
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/token';
import {
  ServiceClient as oauthClient,
  ServiceDefinition as oauthService
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/oauth';
import { GrpcClientConfig } from '@restorecommerce/grpc-client';

export class IdentitySrvGrpcClient extends RestoreCommerceGrpcClient {

  readonly user: userClient;
  readonly role: roleClient;
  readonly authentication_log: authentication_logClient;
  readonly token: tokenClient;
  readonly oauth: oauthClient;

  constructor(address: string, cfg: GrpcClientConfig) {
    super(address, cfg);

    this.user = this.createClient(cfg, userService, this.channel);
    this.role = this.createClient(cfg, roleService, this.channel);
    this.authentication_log = this.createClient(cfg, authentication_logService, this.channel);
    this.token = this.createClient(cfg, tokenService, this.channel);
    this.oauth = this.createClient(cfg, oauthService, this.channel);
  }

}
