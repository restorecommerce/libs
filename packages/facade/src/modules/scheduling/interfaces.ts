import { SchedulingSrvGrpcClient } from "./grpc";
import { ServiceConfig } from "../../gql/protos";
import { FacadeModule, FacadeContext } from "../../interfaces";

export interface SchedulingConfig {
  config: ServiceConfig;
}

export interface SchedulingContext extends FacadeContext {
  scheduling: {
    client: SchedulingSrvGrpcClient;
  }
}

export type SchedulingModule = FacadeModule<SchedulingContext>;

export const namespace = 'scheduling';
