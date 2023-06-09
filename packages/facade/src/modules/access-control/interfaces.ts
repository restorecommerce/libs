import { type AccessControlSrvGrpcClient } from './grpc/index.js';
import { type SubSpaceServiceConfig } from '../../gql/protos/index.js';
import { type FacadeModule, type FacadeContext } from '../../interfaces.js';

export interface AccessControlServiceConfig extends SubSpaceServiceConfig {
}

export interface AccessControlConfig {
  config: AccessControlServiceConfig;
}

export interface AccessControlContext extends FacadeContext {
  access_control: {
    client: AccessControlSrvGrpcClient;
  };
}

export type AccessControlModule = FacadeModule<AccessControlContext>;

export const namespace = 'access_control';
