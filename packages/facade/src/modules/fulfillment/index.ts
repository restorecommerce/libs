import { FederatedFulfillmentSchema } from './gql/federation';
import { namespace, FulfillmentConfig, FulfillmentModule } from "./interfaces";
import { FulfillmentSrvGrpcClient } from "./grpc";
import { createFacadeModuleFactory } from "../../utils";

export const fulfillmentModule = createFacadeModuleFactory<FulfillmentConfig, FulfillmentModule>(namespace, (facade, config) => {
  const fulfillment = {
    client: new FulfillmentSrvGrpcClient(config.config.client)
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
