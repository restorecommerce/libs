import { identityModule, createFacadeModuleFactory } from "@restorecommerce/facade";
import { ExampleConfig, ExampleModule } from "./interfaces";
import { ExampleSchema } from "./gql/index";

export { ExampleModule, ExampleContext } from './interfaces';

export const exampleModule = createFacadeModuleFactory<ExampleConfig, ExampleModule>('example', (facade, config) => {
  if (!facade.supportsModule(identityModule)) {
    throw new Error('Example module requires IdentityModule');
  }
  facade.modules.identity;
  facade.koa.use(async (ctx, next) => {
    ctx.example = config.message;
    await next();
  });
  facade.addLocalApolloService('example', ExampleSchema);
  facade.modules.example = 'example';
});
