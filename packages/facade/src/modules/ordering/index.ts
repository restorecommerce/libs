import { OrderingSrvGrpcClient } from "@restorecommerce/rc-grpc-clients";
import { createFacadeModuleFactory } from "../../facade";
import { FederatedOrderingSchema } from './gql/index';
import { OrderingConfig, OrderingModule } from "@modules/ordering/interfaces";

export const orderingModule = createFacadeModuleFactory<OrderingConfig, OrderingModule>('ordering', (facade, config) => {
  const ordering = {
    client: new OrderingSrvGrpcClient(config.config)
  };

  facade.addApolloService({
    name: 'ordering',
    schema: FederatedOrderingSchema
  });

  facade.koa.use(async (ctx, next) => {
    ctx.ordering = ordering;
    await next();
  });
});
