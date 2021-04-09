import { NotificationSrvGrpcClient } from "./grpc";
import { ServiceConfig } from "../../gql/protos";
import { FacadeModule, FacadeContext } from "../../interfaces";

export interface NotificationServiceConfig extends ServiceConfig {
  root: boolean;
}

export interface NotificationConfig {
  config: NotificationServiceConfig;
}

export interface NotificationContext extends FacadeContext {
  notification: {
    client: NotificationSrvGrpcClient;
  }
}

export type NotificationModule = FacadeModule<NotificationContext>;

export const namespace = 'notification';
