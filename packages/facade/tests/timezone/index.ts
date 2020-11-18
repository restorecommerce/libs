import { createFacadeModuleFactory } from "../../src";
import { FederatedResourcesSchema } from './gql/index';
import { TimezoneConfig, TimezoneModule } from './interfaces';

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
