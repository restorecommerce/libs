import { type OstorageSrvGrpcClient } from './grpc/index.js';
import { type FacadeModule, type FacadeContext } from '../../interfaces.js';
import { type ServiceConfig } from '../../gql/protos/index.js';

export interface OstorageServiceConfig extends ServiceConfig {
  root: boolean;
}

export interface OstorageConfig {
  config: OstorageServiceConfig;
}

export interface OstorageContext extends FacadeContext {
  ostorage: {
    client: OstorageSrvGrpcClient;
  };
}

export type OstorageModule = FacadeModule<OstorageContext>;

export const namespace = 'ostorage';
