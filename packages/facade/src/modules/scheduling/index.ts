import { FederatedSchedulingSchema } from './gql/federation';
import { namespace, SchedulingConfig, SchedulingModule } from "./interfaces";
import { SchedulingSrvGrpcClient } from "./grpc";
import { createFacadeModuleFactory } from "../../utils";

export const schedulingModule = createFacadeModuleFactory<SchedulingConfig, SchedulingModule>(namespace, (facade, config) => {
  const scheduling = {
    client: new SchedulingSrvGrpcClient(config.config.client, facade.logger)
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
