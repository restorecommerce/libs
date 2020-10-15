import { GrpcClientConfig } from "@restorecommerce/grpc-client";
import { ResourcesSrvGrpcClient } from "@restorecommerce/rc-grpc-clients";
import { FacadeModule, createFacadeModuleFactory, Facade } from "../../facade";
import { ResourcesSchema, FederatedResourcesSchema } from './gql/index';

export interface ResourcesConfig {
  client: GrpcClientConfig
}

export interface ResourcesContext {
  resources: {
    client: ResourcesSrvGrpcClient;
  }
};

export type ResourcesModule = FacadeModule<ResourcesContext>;


export const resourcesModule = createFacadeModuleFactory<ResourcesConfig, ResourcesModule>('resources', (facade, config) => {
  const resources = {
    client: new ResourcesSrvGrpcClient(config.client)
  };
  facade.addApolloService({
    name: 'resources',
    schema: FederatedResourcesSchema
  });

  facade.koa.use(async (ctx, next) => {
    ctx.resources = resources;
    await next();
  });
});
