import * as Koa from 'koa';
import { Logger } from '@restorecommerce/logger';

export interface FacadeModule<TConfig = any, TContext extends object = {}, TNamespace extends object = {}> {
  key: string;
  initialize(facade: Facade<[FacadeModule<TConfig, TContext, TNamespace>]>, config: TConfig): void;
};

export interface FacadeBaseContext<TModules extends FacadeModule[] = []> extends Koa.Context {
  logger: Logger;
  facade: Facade<TModules>;
}

type ExtractModuleConfig<TModule extends FacadeModule> = TModule extends FacadeModule<infer TConfig> ? TConfig : {};

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
  addModule<TNewModule extends FacadeModule>(module: TNewModule, config?: ExtractModuleConfig<TNewModule>):
    Facade<[...TModules, TNewModule]>;
  supportsModule<TSupportedModule extends FacadeModule>(module: TSupportedModule):
    this is  Facade<[...TModules, TSupportedModule]>;
}
