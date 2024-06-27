import { type GrpcClientConfig } from '@restorecommerce/grpc-client';
import { type FacadeContext, type FacadeModule } from '../../interfaces.js';
import { type OIDCConfig } from './oidc/index.js';
import { type ServiceConfig } from '../../gql/protos/index.js';
import { type IdentitySrvGrpcClient } from './grpc/index.js';

export interface IdentityServiceConfig extends ServiceConfig {
  root: boolean;
}

export interface IdentityConfig  {
  config: IdentityServiceConfig;
  identitySrvClientConfig: GrpcClientConfig;
  oidc?: OIDCConfig;
  oauth?: boolean;
}

export interface IdentityContext extends FacadeContext {
  identity: {
    client: IdentitySrvGrpcClient;
  };
}

export type IdentityModule = FacadeModule<IdentityContext>;

export const namespace = 'identity';
