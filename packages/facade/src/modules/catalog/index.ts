import { FederatedCatalogSchema } from './gql/federation';
import { namespace, CatalogConfig, CatalogModule } from "./interfaces";
import { CatalogSrvGrpcClient } from "./grpc";
import { createFacadeModuleFactory } from "../../utils";

export const catalogModule = createFacadeModuleFactory<CatalogConfig, CatalogModule>(namespace, (facade, config) => {
  const catalog = {
    client: new CatalogSrvGrpcClient(config.config.client, facade.logger)
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
