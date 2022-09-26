import { FederatedResourceSchema } from './gql/federation';
import { namespace, ResourceConfig, ResourceModule } from "./interfaces";
import { ResourceSrvGrpcClient } from "./grpc";
import { createFacadeModuleFactory } from "../../utils";

export const resourceModule = createFacadeModuleFactory<ResourceConfig, ResourceModule>(namespace, (facade, config) => {
  const resource = {
    client: new ResourceSrvGrpcClient(config.config.client.address, {
      ...config.config.client,
      logger: facade.logger,
    })
  };

  facade.addApolloService({
    name: namespace,
    schema: FederatedResourceSchema(config.config)
  });

  facade.koa.use(async (ctx, next) => {
    ctx.resource = resource;
    await next();
  });
});
