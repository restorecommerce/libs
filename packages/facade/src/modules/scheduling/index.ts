import { FederatedSchedulingSchema } from './gql/federation.js';
import { namespace, type SchedulingConfig, type SchedulingModule } from './interfaces.js';
import { SchedulingSrvGrpcClient } from './grpc/index.js';
import { createFacadeModuleFactory } from '../../utils.js';

export const schedulingModule = createFacadeModuleFactory<SchedulingConfig, SchedulingModule>(namespace, (facade, config) => {
  const scheduling = {
    client: new SchedulingSrvGrpcClient(config.config.client.address, {
      ...config.config.client,
      logger: facade.logger,
    })
  };

  facade.addApolloService({
    name: namespace,
    schema: FederatedSchedulingSchema(config.config)
  });

  facade.koa.use(async (ctx, next) => {
    ctx.scheduling = scheduling;
    await next();
  });
});
