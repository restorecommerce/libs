import type Koa from 'koa';
import { type Logger } from '@restorecommerce/logger';
import { type Server } from 'node:http';
import { type AddressInfo } from 'node:net';

type RequireAtLeastOne<T, Keys extends keyof T> =
  Pick<T, Exclude<keyof T, Keys>> & {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>
  }[Keys];

export interface FacadeBaseContext extends Koa.Context {
  logger: Logger;
  facade: Facade;
}

export interface FacadeModuleBase<TContext extends FacadeBaseContext = FacadeBaseContext> {
  moduleName: string;
};

export interface FacadeModule<TContext extends FacadeBaseContext = FacadeBaseContext> extends FacadeModuleBase<TContext> {
  (facade: Facade<[FacadeModule<TContext>]>): void;
};

export interface FacadeModuleFactory<TConfig = any, TContext extends FacadeBaseContext = FacadeBaseContext> extends FacadeModuleBase<TContext> {
  (config: TConfig): FacadeModule<TContext>;
};

// Extract module context
export type ExtractModuleContext<TModule> =
    TModule extends FacadeModuleFactory<infer TConfig, infer TContext> ? TContext :
      TModule extends FacadeModule<infer TContext> ? TContext :
        never;

export type FacadeModulesContext<T extends FacadeModuleBase[]> = 
(T[0] extends FacadeModuleBase ? ExtractModuleContext<T[0]> : FacadeBaseContext) &
(T[1] extends FacadeModuleBase ? ExtractModuleContext<T[1]> : FacadeBaseContext) &
(T[2] extends FacadeModuleBase ? ExtractModuleContext<T[2]> : FacadeBaseContext) &
(T[3] extends FacadeModuleBase ? ExtractModuleContext<T[3]> : FacadeBaseContext) &
(T[4] extends FacadeModuleBase ? ExtractModuleContext<T[4]> : FacadeBaseContext) &
(T[5] extends FacadeModuleBase ? ExtractModuleContext<T[5]> : FacadeBaseContext) &
(T[6] extends FacadeModuleBase ? ExtractModuleContext<T[6]> : FacadeBaseContext) &
(T[7] extends FacadeModuleBase ? ExtractModuleContext<T[7]> : FacadeBaseContext) &
(T[8] extends FacadeModuleBase ? ExtractModuleContext<T[8]> : FacadeBaseContext) &
(T[9] extends FacadeModuleBase ? ExtractModuleContext<T[9]> : FacadeBaseContext);


export type FacadeContext<T extends FacadeModuleBase[] | Facade<any> = []> =
  T extends FacadeModuleBase[] ? FacadeModulesContext<T> :
    T extends Facade<infer TFacadeModules> ? FacadeModulesContext<TFacadeModules> :
      FacadeBaseContext;

export interface Facade<TModules extends FacadeModuleBase[] = []> {
  readonly logger: Logger;
  readonly koa: Koa<any, FacadeModulesContext<TModules>>;
  readonly server?: Server;
  readonly address?: string | AddressInfo;
  readonly listening: boolean;
  readonly env: string;
  start(): Promise<void>;
  onStart(fn: () => Promise<void>): void;
  onStop(fn: () => Promise<void>): void;
  stop(): Promise<void>;
  addApolloService({name, schema, url}: RequireAtLeastOne<{name: string; url: string; schema: any}, 'url' | 'schema'>): void;
  useMiddleware<TNewState extends object = {}, TNewContext extends object = {}>(middleware: Koa.Middleware<TNewState, TNewContext & FacadeModulesContext<TModules>>):
  Facade<TModules>;
  useModule<TNewModule extends FacadeModule>(mod: TNewModule):
  Facade<[...TModules, TNewModule]>;
  supportsModule<TSupportedModule extends FacadeModuleBase>(mod: TSupportedModule):
    this is Facade<[TSupportedModule, ...TModules]> /* Required for type completion */ & Facade<[...TModules]>;
}

export interface FileUploadOptionsConfig {
  fileUploadOptions: FileUploadOptions;
};

interface FileUploadOptions {
  maxFileSize: number;
  maxFiles: number;
};

