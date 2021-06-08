import { FederatedAccessControlSchema } from './gql/federation';
import { namespace, AccessControlConfig, AccessControlModule } from "./interfaces";
import { AccessControlSrvGrpcClient } from "./grpc";
import { createFacadeModuleFactory } from "../../utils";

export const accessControlModule = createFacadeModuleFactory<AccessControlConfig, AccessControlModule>(namespace, (facade, config) => {
  const accessControl = {
    client: new AccessControlSrvGrpcClient(config.config.client, facade.logger)
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
