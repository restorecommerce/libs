import Koa from 'koa';
import { Logger } from '@restorecommerce/logger';

export interface FacadeModuleBase<TModuleName extends string = string, TContext extends object = {}, TNamespace extends object = {}> {
  moduleName: TModuleName;
};

export interface FacadeModule<TModuleName extends string = string, TContext extends object = {}, TNamespace extends object = {}> extends FacadeModuleBase<TModuleName, TContext, TNamespace> {
  (facade: Facade<[FacadeModule<TModuleName, TContext, TNamespace>]>): void;
};

export interface FacadeModuleFactory<TConfig = any, TModuleName extends string = string, TContext extends object = {}, TNamespace extends object = {}> extends FacadeModuleBase<TModuleName, TContext, TNamespace> {
  (config: TConfig): FacadeModule<TModuleName, TContext, TNamespace>;
};

export interface FacadeBaseContext<TModules extends FacadeModule[] = []> extends Koa.Context {
  logger: Logger;
  facade: Facade<TModules>;
}

// Extract module context
export type ExtractModuleContext<TModule extends FacadeModuleBase> =
    TModule extends FacadeModuleFactory<infer TConfig, infer TModuleName, infer TContext, infer TContext> ? TContext :
    TModule extends FacadeModule<infer TModuleName, infer TContext> ? TContext :
    {};

// Extract module namespace
export type ExtractModuleNamespace<TModule extends FacadeModuleBase> =
    TModule extends FacadeModuleFactory<infer TConfig, infer TModuleName, infer TContext, infer TNamespace> ? Record<TModuleName, TNamespace> :
    TModule extends FacadeModule<infer TModuleName, infer TContext, infer TNamespace> ? Record<TModuleName, TNamespace> :
    Record<string, any>;

export type ExtractModulesContext<T extends FacadeModuleBase[]> = (T[0] extends FacadeModuleBase ? ExtractModuleContext<T[0]> : {}) &
                                                           (T[1] extends FacadeModuleBase ? ExtractModuleContext<T[1]> : {}) &
                                                           (T[2] extends FacadeModuleBase ? ExtractModuleContext<T[2]> : {}) &
                                                           (T[3] extends FacadeModuleBase ? ExtractModuleContext<T[3]> : {}) &
                                                           (T[4] extends FacadeModuleBase ? ExtractModuleContext<T[4]> : {}) &
                                                           (T[5] extends FacadeModuleBase ? ExtractModuleContext<T[5]> : {}) &
                                                           (T[6] extends FacadeModuleBase ? ExtractModuleContext<T[6]> : {}) &
                                                           (T[7] extends FacadeModuleBase ? ExtractModuleContext<T[7]> : {}) &
                                                           (T[8] extends FacadeModuleBase ? ExtractModuleContext<T[8]> : {}) &
                                                           (T[9] extends FacadeModuleBase ? ExtractModuleContext<T[9]> : {});

export  type ExtractModulesNamespace<T extends FacadeModuleBase[]> = (T[0] extends FacadeModuleBase ? ExtractModuleNamespace<T[0]> : {}) &
                                                                     (T[1] extends FacadeModuleBase ? ExtractModuleNamespace<T[1]> : {}) &
                                                                     (T[2] extends FacadeModuleBase ? ExtractModuleNamespace<T[2]> : {}) &
                                                                     (T[3] extends FacadeModuleBase ? ExtractModuleNamespace<T[3]> : {}) &
                                                                     (T[4] extends FacadeModuleBase ? ExtractModuleNamespace<T[4]> : {}) &
                                                                     (T[5] extends FacadeModuleBase ? ExtractModuleNamespace<T[5]> : {}) &
                                                                     (T[6] extends FacadeModuleBase ? ExtractModuleNamespace<T[6]> : {}) &
                                                                     (T[7] extends FacadeModuleBase ? ExtractModuleNamespace<T[7]> : {}) &
                                                                     (T[8] extends FacadeModuleBase ? ExtractModuleNamespace<T[8]> : {}) &
                                                                     (T[9] extends FacadeModuleBase ? ExtractModuleNamespace<T[9]> : {});


export type FacadeContext<T extends FacadeModuleBase[] | Facade> =
  T extends FacadeModuleBase[] ? ExtractModulesContext<T> :
  (T extends Facade<infer TFacadeModules> ? ExtractModulesContext<TFacadeModules> : {});

export interface Facade<TModules extends FacadeModuleBase[] = []> {
  readonly logger: Logger;
  readonly koa: Koa<any, ExtractModulesContext<TModules>>;
  readonly modules: ExtractModulesNamespace<TModules> & {[key: string]: any};
  start(): Promise<void>;
  stop(): Promise<void>;
  addLocalApolloService(name: string, schema: any);
  addRemoteApolloService(name: string, url: string);
  useMiddleware<TNewState extends object = {}, TNewContext extends object = {}>(middleware: Koa.Middleware<TNewState, TNewContext>):
    Facade<TModules>;
  useModule<TNewModule extends FacadeModule>(module: TNewModule):
    Facade<[...TModules, TNewModule]>;
  supportsModule<TSupportedModule extends FacadeModuleBase>(module: TSupportedModule):
    this is Facade<[...TModules, TSupportedModule]>;
}

export function createFacadeModuleFactory<TConfig = any, TModule extends FacadeModule = FacadeModule>(moduleName: string, fn: {(facade: Facade<[TModule]>, config: TConfig): void})  {
  const facadeModuleFactory: FacadeModuleFactory<TConfig, ExtractModuleContext<TModule>, ExtractModuleNamespace<TModule>> = (config) => {
    const facadeModule: TModule = ((facade) => fn(facade, config)) as TModule;
    facadeModule.moduleName = moduleName;
    return facadeModule;
  }
  facadeModuleFactory.moduleName = moduleName;
  return facadeModuleFactory;
}

export function createFacadeModule<TModule extends FacadeModule = FacadeModule, TModuleName extends string = string>(moduleName: TModuleName, fn: {(facade: Facade<[TModule]>): void})  {
  const facadeModule: TModule = ((facade) => fn(facade)) as TModule;
  facadeModule.moduleName = moduleName;
  return facadeModule;
}




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

export type ExampleModule = FacadeModule<ExampleContext, ExampleNamespace, 'example'>;


export type ExampleContextUnion = FacadeContext<[ExampleModule]>;

// export type x = ExtractModuleNamespace<ExampleModule>;
// const m: ExampleModule;
// m.moduleName = 'example';


// type S<T extends string> = Record<T, number>;

const f: Facade<[ExampleModule]>;

f.modules.example
