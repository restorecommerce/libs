import { identityModule, createFacadeModuleFactory } from "../../src/index";

import { ExampleConfig, ExampleModule } from "./interfaces";
import { FederatedExampleSchema } from "./gql/index";

export { ExampleModule, ExampleContext } from './interfaces';

export const exampleModule = createFacadeModuleFactory<ExampleConfig, ExampleModule>('example', (facade, config) => {
  if (!facade.supportsModule(identityModule)) {
    throw new Error('Example module requires IdentityModule');
  }

  facade.koa.use(async (ctx, next) => {
    ctx.example = config.message;
    await next();
  });
  facade.addApolloService({
    name: 'example',
    schema: FederatedExampleSchema
  });
});
