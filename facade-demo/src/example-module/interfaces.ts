import { FacadeModule, FacadeContext, IdentityModule, test } from "@restorecommerce/facade";

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

export type ExampleModule = FacadeModule<ExampleContext, ExampleNamespace>;


export type ExampleContextUnion = FacadeContext<[ExampleModule, IdentityModule]>;

export type x = test<[ExampleModule, IdentityModule]>;


