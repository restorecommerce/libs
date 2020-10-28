import { TimezoneService } from "@restorecommerce/rc-grpc-clients";
import { FacadeModule, createFacadeModuleFactory } from "../../src";
import { FederatedResourcesSchema } from './gql/index';

export interface TimezoneConfig {
  timezoneService: TimezoneService;
}

export interface TimezoneContext {
  timezoneService: TimezoneService;
};

export type TimezoneModule = FacadeModule<TimezoneContext>;

export const timezonesModule = createFacadeModuleFactory<TimezoneConfig, TimezoneModule>('timezone', (facade, config) => {
  facade.addApolloService({
    name: 'timezones',
    schema: FederatedResourcesSchema
  });

  facade.koa.use(async (ctx, next) => {
    ctx.timezoneService = config.timezoneService;
    await next();
  });
});
