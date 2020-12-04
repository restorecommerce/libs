import { ResourceSrvGrpcClient } from "./grpc";
import { ServiceConfig } from "../../gql/protos";
import { FacadeModule, FacadeContext } from "../../interfaces";

export interface ResourceConfig {
  config: ServiceConfig;
}

export interface ResourceContext extends FacadeContext {
  resource: {
    client: ResourceSrvGrpcClient;
  }
}

export type ResourceModule = FacadeModule<ResourceContext>;

export const namespace = 'resource';
