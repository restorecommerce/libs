import Koa from 'koa';
import { Logger } from '@restorecommerce/logger';
import { Server } from 'http';
import { AddressInfo } from 'net';

type RequireAtLeastOne<T, Keys extends keyof T> =
  Pick<T, Exclude<keyof T, Keys>> & {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>
  }[Keys];


export interface FacadeModuleBase<TContext extends object = {}> {
  moduleName: string;
};

export interface FacadeModule<TContext extends object = {}> extends FacadeModuleBase<TContext> {
  (facade: Facade<[FacadeModule<TContext>]>): void;
};

export interface FacadeModuleFactory<TConfig = any, TContext extends object = {}> extends FacadeModuleBase<TContext> {
  (config: TConfig): FacadeModule<TContext>;
};

export interface FacadeBaseContext<TModules extends FacadeModule[] = []> extends Koa.Context {
  logger: Logger;
  facade: Facade<TModules>;
}

// Extract module context
export type ExtractModuleContext<TModule> =
    TModule extends FacadeModuleFactory<infer TConfig, infer TContext> ? TContext :
    TModule extends FacadeModule<infer TContext> ? TContext :
    never;



export type FacadeModulesContext<T extends FacadeModuleBase[]> = (T[0] extends FacadeModuleBase ? ExtractModuleContext<T[0]> : {}) &
                                                           (T[1] extends FacadeModuleBase ? ExtractModuleContext<T[1]> : {}) &
                                                           (T[2] extends FacadeModuleBase ? ExtractModuleContext<T[2]> : {}) &
                                                           (T[3] extends FacadeModuleBase ? ExtractModuleContext<T[3]> : {}) &
                                                           (T[4] extends FacadeModuleBase ? ExtractModuleContext<T[4]> : {}) &
                                                           (T[5] extends FacadeModuleBase ? ExtractModuleContext<T[5]> : {}) &
                                                           (T[6] extends FacadeModuleBase ? ExtractModuleContext<T[6]> : {}) &
                                                           (T[7] extends FacadeModuleBase ? ExtractModuleContext<T[7]> : {}) &
                                                           (T[8] extends FacadeModuleBase ? ExtractModuleContext<T[8]> : {}) &
                                                           (T[9] extends FacadeModuleBase ? ExtractModuleContext<T[9]> : {});


export type FacadeContext<T extends FacadeModuleBase[] | Facade> =
  T extends FacadeModuleBase[] ? FacadeModulesContext<T> :
  (T extends Facade<infer TFacadeModules> ? FacadeModulesContext<TFacadeModules> : {});

export interface Facade<TModules extends FacadeModuleBase[] = any> {
  readonly logger: Logger;
  readonly koa: Koa<any, FacadeModulesContext<TModules>>;
  readonly server?: Server;
  readonly address?: string | AddressInfo;
  readonly listening: boolean;
  start(): Promise<void>;
  stop(): Promise<void>;
  addApolloService({name, schema, url}: RequireAtLeastOne<{name: string, url: string, schema: any}, 'url' | 'schema'>): void;
  useMiddleware<TNewState extends object = {}, TNewContext extends object = {}>(middleware: Koa.Middleware<TNewState, TNewContext & FacadeModulesContext<TModules>>):
    Facade<TModules>;
  useModule<TNewModule extends FacadeModule>(module: TNewModule):
    Facade<[...TModules, TNewModule]>;
  supportsModule<TSupportedModule extends FacadeModuleBase>(module: TSupportedModule):
    this is Facade<[...TModules, TSupportedModule]> & Facade<TModules>;
}

export function createFacadeModuleFactory<TConfig = any, TModule extends FacadeModule = FacadeModule>(moduleName: string, fn: {(facade: Facade<[TModule]>, config: TConfig): void})  {
  const facadeModuleFactory: FacadeModuleFactory<TConfig, ExtractModuleContext<TModule>> = (config) => {
    const facadeModule: TModule = ((facade) => fn(facade, config)) as TModule;
    facadeModule.moduleName = moduleName;
    return facadeModule;
  }
  facadeModuleFactory.moduleName = moduleName;
  return facadeModuleFactory;
}

export function createFacadeModule<TModule extends FacadeModule = FacadeModule>(moduleName: string, fn: {(facade: Facade<[TModule]>): void})  {
  const facadeModule: TModule = ((facade) => fn(facade)) as TModule;
  facadeModule.moduleName = moduleName;
  return facadeModule;
}
