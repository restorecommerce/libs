import { CatalogSrvGrpcClient } from "./grpc";
import { ServiceConfig } from "../../gql/protos";
import { FacadeModule, FacadeContext } from "../../interfaces";

export interface CatalogServiceConfig extends ServiceConfig {
  root: boolean;
}

export interface CatalogConfig {
  config: CatalogServiceConfig;
}

export interface CatalogContext extends FacadeContext {
  catalog: {
    client: CatalogSrvGrpcClient;
  }
}

export type CatalogModule = FacadeModule<CatalogContext>;

export const namespace = 'catalog';
