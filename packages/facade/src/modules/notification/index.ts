import { FederatedNotificationSchema } from './gql/federation.js';
import { namespace, type NotificationConfig, type NotificationModule } from './interfaces.js';
import { NotificationSrvGrpcClient } from './grpc/index.js';
import { createFacadeModuleFactory } from '../../utils.js';

export const notificationModule = createFacadeModuleFactory<NotificationConfig, NotificationModule>(namespace, (facade, config) => {
  const notification = {
    client: new NotificationSrvGrpcClient(config.config.client.address, {
      ...config.config.client,
      logger: facade.logger,
    })
  };

  facade.addApolloService({
    name: namespace,
    schema: FederatedNotificationSchema(config.config)
  });

  facade.koa.use(async (ctx, next) => {
    ctx.notification = notification;
    await next();
  });
});
