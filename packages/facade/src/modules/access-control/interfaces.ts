import { AccessControlSrvGrpcClient } from "./grpc";
import { ServiceConfig } from "../../gql/protos";
import { FacadeModule, FacadeContext } from "../../interfaces";

export interface AccessControlServiceConfig extends ServiceConfig {
  root: boolean;
}

export interface AccessControlConfig {
  config: AccessControlServiceConfig;
}

export interface AccessControlContext extends FacadeContext {
  access_control: {
    client: AccessControlSrvGrpcClient;
  }
}

export type AccessControlModule = FacadeModule<AccessControlContext>;

export const namespace = 'access_control';
