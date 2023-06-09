import { type NotificationSrvGrpcClient } from './grpc/index.js';
import { type ServiceConfig } from '../../gql/protos/index.js';
import { type FacadeModule, type FacadeContext } from '../../interfaces.js';

export interface NotificationServiceConfig extends ServiceConfig {
  root: boolean;
}

export interface NotificationConfig {
  config: NotificationServiceConfig;
}

export interface NotificationContext extends FacadeContext {
  notification: {
    client: NotificationSrvGrpcClient;
  };
}

export type NotificationModule = FacadeModule<NotificationContext>;

export const namespace = 'notification';
