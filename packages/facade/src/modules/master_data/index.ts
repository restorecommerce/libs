import { FederatedResourceSchema } from './gql/federation.js';
import { namespace, type ResourceConfig, type ResourceModule } from './interfaces.js';
import { ResourceSrvGrpcClient } from './grpc/index.js';
import { createFacadeModuleFactory } from '../../utils.js';

export const resourceModule = createFacadeModuleFactory<ResourceConfig, ResourceModule>(namespace, (facade, config) => {
  const resource = {
    client: new ResourceSrvGrpcClient(
      config.config.client.address,
      {
        ...config.config.client,
        logger: facade.logger,
      }
    )
  };

  facade.addApolloService({
    name: namespace,
    schema: FederatedResourceSchema(config.config)
  });

  facade.koa.use(async (ctx, next) => {
    ctx.master_data = resource;
    await next();
  });
});
