import { FacadeModule, FacadeContext, IdentityModule } from "../../src/index";

// Example module
export interface ExampleConfig {
  message: string;
}

export interface ExampleContext {
  example: string;
}

export type ExampleModule = FacadeModule<ExampleContext>;


export type ExampleContextUnion = FacadeContext<[ExampleModule, IdentityModule]>;
