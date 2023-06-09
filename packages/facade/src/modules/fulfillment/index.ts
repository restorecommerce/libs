import { FederatedFulfillmentSchema } from './gql/federation.js';
import { namespace, type FulfillmentConfig, type FulfillmentModule } from './interfaces.js';
import { FulfillmentSrvGrpcClient } from './grpc/index.js';
import { createFacadeModuleFactory } from '../../utils.js';

export const fulfillmentModule = createFacadeModuleFactory<FulfillmentConfig, FulfillmentModule>(namespace, (facade, config) => {
  const fulfillment = {
    client: new FulfillmentSrvGrpcClient(config.config.client.address, {
      ...config.config.client,
      logger: facade.logger,
    })
  };

  facade.addApolloService({
    name: namespace,
    schema: FederatedFulfillmentSchema(config.config)
  });

  facade.koa.use(async (ctx, next) => {
    ctx.fulfillment = fulfillment;
    await next();
  });
});
