import { AccessControlSrvGrpcClient } from "./grpc";
import { SubSpaceServiceConfig } from "../../gql/protos";
import { FacadeModule, FacadeContext } from "../../interfaces";

export interface AccessControlServiceConfig extends SubSpaceServiceConfig {
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
