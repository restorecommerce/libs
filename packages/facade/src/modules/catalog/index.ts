import { FederatedCatalogSchema } from './gql/federation.js';
import { namespace, type CatalogConfig, type CatalogModule } from './interfaces.js';
import { CatalogSrvGrpcClient } from './grpc/index.js';
import { createFacadeModuleFactory } from '../../utils.js';

export const catalogModule = createFacadeModuleFactory<CatalogConfig, CatalogModule>(namespace, (facade, config) => {
  const catalog = {
    client: new CatalogSrvGrpcClient(config.config.client.address, {
      ...config.config.client,
      logger: facade.logger,
    })
  };

  facade.addApolloService({
    name: namespace,
    schema: FederatedCatalogSchema(config.config)
  });

  facade.koa.use(async (ctx, next) => {
    ctx.catalog = catalog;
    await next();
  });
});
