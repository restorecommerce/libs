import { identityModule } from "@restorecommerce/facade";
import { ExampleModule } from "./interfaces";
import { ExampleSchema } from "./gql/index";

export { ExampleModule, ExampleContext } from './interfaces';

export const exampleModule: ExampleModule = {
  key: 'example',
  initialize(facade, config) {
    if (!facade.supportsModule(identityModule)) {
      throw new Error('Example module requires IdentityModule module');
    }
    facade.koa.use(ctx => ctx.example = config.message)
    facade.modules.example = 'example';
    // facade.addScheme(ExampleSchema);
  }
};
