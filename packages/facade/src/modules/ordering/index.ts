import { FederatedOrderingSchema } from './gql/federation';
import { namespace, OrderingConfig, OrderingModule } from "./interfaces";
import { OrderingSrvGrpcClient } from "./grpc";
import { createFacadeModuleFactory } from "../../utils";

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
