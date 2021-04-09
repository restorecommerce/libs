import { OstorageSrvGrpcClient } from "./grpc";
import { FacadeModule, FacadeContext } from "../../interfaces";
import { ServiceConfig } from "../../gql/protos";

export interface OstorageServiceConfig extends ServiceConfig {
  root: boolean;
}

export interface OstorageConfig {
  config: OstorageServiceConfig;
}

export interface OstorageContext extends FacadeContext {
  ostorage: {
    client: OstorageSrvGrpcClient;
  }
}

export type OstorageModule = FacadeModule<OstorageContext>;

export const namespace = 'ostorage';
