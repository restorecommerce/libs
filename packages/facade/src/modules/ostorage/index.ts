import { FederatedOstorageSchema } from './gql/federation.js';
import { namespace, type OstorageConfig, type OstorageModule } from './interfaces.js';
import { OstorageSrvGrpcClient } from './grpc/index.js';
import { createFacadeModuleFactory } from '../../utils.js';

export const ostorageModule = createFacadeModuleFactory<OstorageConfig, OstorageModule>(namespace, (facade, config) => {
  const ostorage = {
    client: new OstorageSrvGrpcClient(config.config.client.address, {
      ...config.config.client,
      logger: facade.logger,
    })
  };

  facade.addApolloService({
    name: namespace,
    schema: FederatedOstorageSchema(config.config)
  });

  facade.koa.use(async (ctx, next) => {
    ctx.ostorage = ostorage;
    await next();
  });
});
