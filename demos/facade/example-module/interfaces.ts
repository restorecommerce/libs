import { FacadeModule, FacadeContext, IdentityModule } from "@restorecommerce/facade";

// Example module
export interface ExampleConfig {
  message: string;
}

export interface ExampleContext {
  example: string;
}

export interface ExampleNamespace {
  example: string;
}

export type ExampleModule = FacadeModule<ExampleConfig, ExampleContext, ExampleNamespace>;


export type ExampleContextUnion = FacadeContext<[ExampleModule, IdentityModule]>;
