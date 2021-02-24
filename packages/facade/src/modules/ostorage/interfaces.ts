import { OstorageSrvGrpcClient } from "./grpc";
import { ServiceConfig } from "../../gql/protos";
import { FacadeModule, FacadeContext } from "../../interfaces";

export interface OstorageConfig {
  config: ServiceConfig;
}

export interface OstorageContext extends FacadeContext {
  ostorage: {
    client: OstorageSrvGrpcClient;
  }
}

export type OstorageModule = FacadeModule<OstorageContext>;

export const namespace = 'ostorage';
