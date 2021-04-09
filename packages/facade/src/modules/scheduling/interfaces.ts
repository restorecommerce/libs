import { SchedulingSrvGrpcClient } from "./grpc";
import { ServiceConfig } from "../../gql/protos";
import { FacadeModule, FacadeContext } from "../../interfaces";

export interface SchedulingServiceConfig extends ServiceConfig {
  root: boolean;
}

export interface SchedulingConfig {
  config: SchedulingServiceConfig;
}

export interface SchedulingContext extends FacadeContext {
  scheduling: {
    client: SchedulingSrvGrpcClient;
  }
}

export type SchedulingModule = FacadeModule<SchedulingContext>;

export const namespace = 'scheduling';
