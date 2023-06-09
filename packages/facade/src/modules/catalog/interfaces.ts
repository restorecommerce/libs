import { type CatalogSrvGrpcClient } from './grpc/index.js';
import { type ServiceConfig } from '../../gql/protos/index.js';
import { type FacadeModule, type FacadeContext } from '../../interfaces.js';

export interface CatalogServiceConfig extends ServiceConfig {
  root: boolean;
}

export interface CatalogConfig {
  config: CatalogServiceConfig;
}

export interface CatalogContext extends FacadeContext {
  catalog: {
    client: CatalogSrvGrpcClient;
  };
}

export type CatalogModule = FacadeModule<CatalogContext>;

export const namespace = 'catalog';
