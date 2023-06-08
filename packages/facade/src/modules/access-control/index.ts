import { FederatedAccessControlSchema } from './gql/federation.js';
import { namespace, type AccessControlConfig, type AccessControlModule } from './interfaces.js';
import { AccessControlSrvGrpcClient } from './grpc/index.js';
import { createFacadeModuleFactory } from '../../utils.js';

export const accessControlModule = createFacadeModuleFactory<AccessControlConfig, AccessControlModule>(namespace, (facade, config) => {
  const accessControl = {
    client: new AccessControlSrvGrpcClient(config.config.client.address, {
      ...config.config.client,
      logger: facade.logger,
    })
  };

  facade.addApolloService({
    name: namespace,
    schema: FederatedAccessControlSchema(config.config)
  });

  facade.koa.use(async (ctx, next) => {
    ctx.access_control = accessControl;
    await next();
  });
});
