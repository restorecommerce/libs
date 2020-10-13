import Koa from 'koa';
import { Logger } from '@restorecommerce/logger';

export interface FacadeModuleBase<TContext extends object, TNamespace extends object> {
  moduleName: string;
};

export interface FacadeModuleFn<TContext extends object = {}, TNamespace extends object = {}> extends FacadeModuleBase<TContext, TNamespace> {
  (facade: Facade<[FacadeModule<any, TContext, TNamespace>]>): void;
};

export interface FacadeModule<TConfig = any, TContext extends object = {}, TNamespace extends object = {}> extends FacadeModuleBase<TContext, TNamespace> {
  (config: TConfig): FacadeModuleFn<FacadeModule<TConfig, TContext, TNamespace>>;
};

function createFacadeModule<TConfig = any, TContext extends object = {}, TNamespace extends object = {}>(moduleName: string, fn: {(facade: Facade<[FacadeModule<TConfig, TContext, TNamespace>]>, config: TConfig): void})  {
  const facadeModule: FacadeModule<TConfig, TContext, TNamespace> = (config) => {
    const facadeModuleFn: FacadeModuleFn<TContext, TNamespace> = (facade) => fn(facade, config);
    facadeModuleFn.moduleName=  moduleName;
    facadeModuleFn.moduleName=  moduleName;
    return facadeModuleFn;
  }
  facadeModule.moduleName = moduleName;
  return facadeModule;
}

createFacadeModule('test', (facade, config) => {

});



export interface FacadeBaseContext<TModules extends FacadeModule[] = []> extends Koa.Context {
  logger: Logger;
  facade: Facade<TModules>;
}

// type ExtractModuleConfig<TModule extends FacadeModule> = TModule extends FacadeModule<infer TConfig> ? TConfig : {};

// Extract module
type ExtractModule<TModuleFn extends FacadeModuleFn> =
    TModuleFn extends FacadeModuleFn<infer TModule> ? TModule : {};

// Extract module context
type ExtractModuleContext<TModule extends FacadeModule> =
    TModule extends FacadeModule<infer TConfig, infer TContext> ? TContext : {};

    // Extract module namespace
type ExtractModuleNamespace<TModule extends FacadeModule> =
    TModule extends FacadeModule<infer TConfig, infer TContext, infer TNamespace> ? TNamespace : {};

type ExtractModulesContext<T extends FacadeModule[]> = (T[0] extends FacadeModule ? ExtractModuleContext<T[0]> : {}) &
                                                       (T[1] extends FacadeModule ? ExtractModuleContext<T[1]> : {}) &
                                                       (T[2] extends FacadeModule ? ExtractModuleContext<T[2]> : {}) &
                                                       (T[3] extends FacadeModule ? ExtractModuleContext<T[3]> : {}) &
                                                       (T[4] extends FacadeModule ? ExtractModuleContext<T[4]> : {}) &
                                                       (T[5] extends FacadeModule ? ExtractModuleContext<T[5]> : {}) &
                                                       (T[6] extends FacadeModule ? ExtractModuleContext<T[6]> : {}) &
                                                       (T[7] extends FacadeModule ? ExtractModuleContext<T[7]> : {}) &
                                                       (T[8] extends FacadeModule ? ExtractModuleContext<T[8]> : {}) &
                                                       (T[9] extends FacadeModule ? ExtractModuleContext<T[9]> : {});

type ExtractModulesNamespace<T extends FacadeModule[]> = (T[0] extends FacadeModule ? ExtractModuleNamespace<T[0]> : {}) &
                                                         (T[1] extends FacadeModule ? ExtractModuleNamespace<T[1]> : {}) &
                                                         (T[2] extends FacadeModule ? ExtractModuleNamespace<T[2]> : {}) &
                                                         (T[3] extends FacadeModule ? ExtractModuleNamespace<T[3]> : {}) &
                                                         (T[4] extends FacadeModule ? ExtractModuleNamespace<T[4]> : {}) &
                                                         (T[5] extends FacadeModule ? ExtractModuleNamespace<T[5]> : {}) &
                                                         (T[6] extends FacadeModule ? ExtractModuleNamespace<T[6]> : {}) &
                                                         (T[7] extends FacadeModule ? ExtractModuleNamespace<T[7]> : {}) &
                                                         (T[8] extends FacadeModule ? ExtractModuleNamespace<T[8]> : {}) &
                                                         (T[9] extends FacadeModule ? ExtractModuleNamespace<T[9]> : {});


export type FacadeContext<T extends FacadeModule[] | Facade> =
  T extends FacadeModule[] ? ExtractModulesContext<T> :
    (T extends Facade<infer TFacadeModules> ? ExtractModulesContext<TFacadeModules> : {});

export interface Facade<TModules extends FacadeModule[] = []> {
  readonly logger: Logger;
  readonly koa: Koa<any, ExtractModulesContext<TModules>>;
  readonly modules: ExtractModulesNamespace<TModules> & {[key: string]: any};
  start(): Promise<void>;
  stop(): Promise<void>;
  useMiddleware<TNewState extends object = {}, TNewContext extends object = {}>(middleware: Koa.Middleware<TNewState, TNewContext>):
    Facade<[...TModules, FacadeModule<TNewState, TNewContext>]>;
  useModule<TNewModuleFn extends FacadeModuleFn>(moduleFn: TNewModuleFn):
    Facade<[...TModules, ExtractModule<TNewModuleFn>]>;
  supportsModule<TSupportedModule extends FacadeModule>(module: TSupportedModule):
    this is Facade<[...TModules, TSupportedModule]>;
}
