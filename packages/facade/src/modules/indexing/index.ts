import { FederatedIndexingSchema } from './gql/federation';
import { namespace, IndexingConfig, IndexingModule } from "./interfaces";
import { IndexingSrvGrpcClient } from "./grpc";
import { createFacadeModuleFactory } from "../../utils";

export const indexingModule = createFacadeModuleFactory<IndexingConfig, IndexingModule>(namespace, (facade, config) => {
  const indexing = {
    client: new IndexingSrvGrpcClient(config.config.client, facade.logger)
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
