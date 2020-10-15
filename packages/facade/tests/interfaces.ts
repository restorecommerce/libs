import { IdentityModule, FacadeContext } from '../src/index';
import { ExampleModule } from './example-module/index';

export type AppFacadeModules = [IdentityModule, ExampleModule];
export type AppFacadeContext = FacadeContext<AppFacadeModules>;
