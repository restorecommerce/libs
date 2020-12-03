import { GrpcClientConfig } from '@restorecommerce/grpc-client';
import { IdentitySrvGrpcClient } from '@restorecommerce/rc-grpc-clients';
import { FacadeContext, FacadeModule } from '../../interfaces';
import { OIDCConfig } from './oidc';

export interface IdentityConfig {
  identitySrvClientConfig: GrpcClientConfig;
  oidc?: OIDCConfig;
}

export interface IdentityContext extends FacadeContext {
  identitySrvClient: IdentitySrvGrpcClient;
};

export type IdentityModule = FacadeModule<IdentityContext>;
