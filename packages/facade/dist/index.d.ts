/// <reference types="koa-bodyparser" />
/// <reference types="node" />
import Koa from 'koa';
import { Logger } from '@restorecommerce/logger';
import { Server } from 'http';
import { Facade, FacadeModule, FacadeModuleBase } from './facade';
export * from './modules/index';
export * from './middlewares/index';
export * from './facade';
interface RestoreCommerceFacadeImplConfig {
    koa: Koa<any, any>;
    logger: Logger;
    port?: number;
    hostname?: string;
    env?: string;
}
export declare class RestoreCommerceFacade implements Facade {
    private _server?;
    private _initialized;
    readonly logger: Logger;
    readonly port: number;
    readonly hostname: string;
    readonly koa: Koa;
    readonly env: string;
    modules: {
        [key: string]: any;
    };
    constructor({ koa, logger, port, hostname, env }: RestoreCommerceFacadeImplConfig);
    get server(): Server;
    get address(): string | import("net").AddressInfo;
    private loadedModules;
    useMiddleware<TNewState extends object = {}, TNewContext extends object = {}>(middleware: Koa.Middleware<TNewState, TNewContext>): any;
    useModule<TNewModule extends FacadeModule>(module: TNewModule): any;
    supportsModule<TSupportedModule extends FacadeModuleBase>(module: TSupportedModule): this is Facade<[TSupportedModule]>;
    federation(): void;
    start(): Promise<void>;
    stop(): Promise<void>;
    private mountApolloServer;
}
export interface FacadeConfig {
    port: number;
    logger?: Logger;
    hostname?: string;
    env?: string;
    keys?: string[];
}
export declare function createFacade(config: FacadeConfig): Facade;
