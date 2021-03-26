import { GrpcClientConfig } from '@restorecommerce/grpc-client';
import { FacadeContext, FacadeModule } from '../../interfaces';
import { OIDCConfig } from './oidc';
import { ServiceConfig } from "../../gql/protos";
import { IdentitySrvGrpcClient } from "./grpc";

export interface IdentityServiceConfig extends ServiceConfig {
  root: boolean;
}

export interface IdentityConfig  {
  config: IdentityServiceConfig;
  identitySrvClientConfig: GrpcClientConfig;
  oidc?: OIDCConfig;
  apiKey?: boolean | string;
}

export interface IdentityContext extends FacadeContext {
  identity: {
    client: IdentitySrvGrpcClient;
  }
}

export type IdentityModule = FacadeModule<IdentityContext>;

export const namespace = 'identity';
