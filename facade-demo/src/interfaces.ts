import { Facade, IdentityModule, FacadeContext } from '@restorecommerce/facade';
import { ExampleModule } from './example-module/index';

export type AppFacadeModules = [IdentityModule, ExampleModule];
export type AppFacade = Facade<AppFacadeModules>;
export type AppFacadeContext = FacadeContext<AppFacadeModules>;
