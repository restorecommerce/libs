import { type ResourceSrvGrpcClient } from './grpc/index.js';
import { type ServiceConfig } from '../../gql/protos/index.js';
import { type FacadeModule, type FacadeContext } from '../../interfaces.js';

export interface ResourceServiceConfig extends ServiceConfig {
  root: boolean;
}

export interface ResourceConfig {
  config: ResourceServiceConfig;
}

export interface ResourceContext extends FacadeContext {
  master_data: {
    client: ResourceSrvGrpcClient;
  };
}

export type ResourceModule = FacadeModule<ResourceContext>;

export const namespace = 'master_data';
