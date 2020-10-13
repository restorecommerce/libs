import Koa from 'koa';
import { Logger } from '@restorecommerce/logger';

export interface FacadeModuleBase<TContext extends object = {}, TNamespace extends object = {}> {
  moduleName: string;
};

export interface FacadeModule<TContext extends object = {}, TNamespace extends object = {}> extends FacadeModuleBase<TContext, TNamespace> {
  (facade: Facade<[FacadeModule<TContext, TNamespace>]>): void;
};

export interface FacadeModuleFactory<TConfig = any, TContext extends object = {}, TNamespace extends object = {}> extends FacadeModuleBase<TContext, TNamespace> {
  (config: TConfig): FacadeModule<TContext>;
};

export interface FacadeBaseContext<TModules extends FacadeModule[] = []> extends Koa.Context {
  logger: Logger;
  facade: Facade<TModules>;
}

// Extract module context
export type ExtractModuleContext<TModule extends FacadeModuleBase> =
    TModule extends FacadeModuleFactory<infer TConfig, infer TContext, infer TContext> ? TContext :
    TModule extends FacadeModule<infer TContext> ? TContext :
    {};

// Extract module namespace
export type ExtractModuleNamespace<TModule extends FacadeModuleBase> =
    TModule extends FacadeModuleFactory<infer TConfig, infer TContext, infer TNamespace> ? TNamespace :
    TModule extends FacadeModule<infer TContext, infer TNamespace> ? TNamespace :
    {};

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
  useMiddleware<TNewState extends object = {}, TNewContext extends object = {}>(middleware: Koa.Middleware<TNewState, TNewContext>):
    Facade<TModules>;
  useModule<TNewModule extends FacadeModule>(module: TNewModule):
    Facade<[...TModules, TNewModule]>;
  supportsModule<TSupportedModule extends FacadeModuleBase>(module: TSupportedModule):
    this is Facade<[...TModules, TSupportedModule]>;
}

export function createFacadeModuleFactory<TConfig = any, TModule extends FacadeModule = FacadeModule>(moduleName: string, fn: {(facade: Facade<[TModule]>, config: TConfig): void})  {
  const facadeModuleFactory: FacadeModuleFactory<TConfig, ExtractModuleContext<TModule>, ExtractModuleNamespace<TModule>> = (config) => {
    const facadeModule: TModule = ((facade) => fn(facade, config)) as any;
    facadeModule.moduleName = moduleName;
    return facadeModule;
  }
  facadeModuleFactory.moduleName = moduleName;
  return facadeModuleFactory;
}
