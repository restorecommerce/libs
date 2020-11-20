import {  timezonesModule } from "../timezone/index";
import {  createFacadeModuleFactory } from "../../src/index";

import { ExampleConfig, ExampleModule } from "./interfaces";
import { FederatedExampleSchema } from "./gql/index";

export { ExampleModule, ExampleContext } from './interfaces';

export const exampleModule = createFacadeModuleFactory<ExampleConfig, ExampleModule>('example', (facade, config) => {
  if (!facade.supportsModule(timezonesModule)) {
    throw new Error('Example module requires the timezones module');
  }

  // Can access timezoneservice
  // facade.koa.use(ctx => ctx.timezoneService);

  facade.koa.use(async (ctx, next) => {
    ctx.example = config.message;
    await next();
  });
  facade.addApolloService({
    name: 'example',
    schema: FederatedExampleSchema
  });
});
