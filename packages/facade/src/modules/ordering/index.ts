import { createFacadeModuleFactory } from "../../facade";
import { FederatedOrderingSchema } from './gql/index';
import { OrderingConfig, OrderingModule } from "@modules/ordering/interfaces";
import { OrderingSrvGrpcClient } from "./grpc";

const moduleName = 'ordering';

export const orderingModule = createFacadeModuleFactory<OrderingConfig, OrderingModule>(moduleName, (facade, config) => {
  const ordering = {
    client: new OrderingSrvGrpcClient(config.config.client)
  };

  facade.addApolloService({
    name: moduleName,
    schema: FederatedOrderingSchema
  });

  facade.koa.use(async (ctx, next) => {
    ctx.ordering = ordering;
    await next();
  });
});
