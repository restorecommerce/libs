import { FederatedOrderingSchema } from './gql/federation.js';
import { namespace, type OrderingConfig, type OrderingModule } from './interfaces.js';
import { OrderingSrvGrpcClient } from './grpc/index.js';
import { createFacadeModuleFactory } from '../../utils.js';

export const orderingModule = createFacadeModuleFactory<OrderingConfig, OrderingModule>(namespace, (facade, config) => {
  const ordering = {
    client: new OrderingSrvGrpcClient(config.config.client.address, {
      ...config.config.client,
      logger: facade.logger,
    })
  };

  facade.addApolloService({
    name: namespace,
    schema: FederatedOrderingSchema(config.config)
  });

  facade.koa.use(async (ctx, next) => {
    ctx.ordering = ordering;
    await next();
  });
});
