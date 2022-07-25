import { FederatedNotificationSchema } from './gql/federation';
import { namespace, NotificationConfig, NotificationModule } from "./interfaces";
import { NotificationSrvGrpcClient } from "./grpc";
import { createFacadeModuleFactory } from "../../utils";

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
