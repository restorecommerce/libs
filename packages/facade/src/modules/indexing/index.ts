import { FederatedIndexingSchema } from './gql/federation.js';
import { namespace, type IndexingConfig, type IndexingModule } from './interfaces.js';
import { IndexingSrvGrpcClient } from './grpc/index.js';
import { createFacadeModuleFactory } from '../../utils.js';

export const indexingModule = createFacadeModuleFactory<IndexingConfig, IndexingModule>(namespace, (facade, config) => {
  const indexing = {
    client: new IndexingSrvGrpcClient(config.config.client.address, {
      ...config.config.client,
      logger: facade.logger,
    })
  };

  facade.addApolloService({
    name: namespace,
    schema: FederatedIndexingSchema(config.config)
  });

  facade.koa.use(async (ctx, next) => {
    ctx.indexing = indexing;
    await next();
  });
});
