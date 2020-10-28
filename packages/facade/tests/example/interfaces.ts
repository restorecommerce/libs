import { FacadeModule, FacadeContext, IdentityModule } from "../../src/index";

// Example module
export interface ExampleConfig {
  message: string;
}

export interface ExampleContext extends FacadeContext<[IdentityModule]> {
  example: string;
}

export type ExampleModule = FacadeModule<ExampleContext>;
