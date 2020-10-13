/// <reference types="koa-bodyparser" />
/// <reference types="node" />
import Koa from 'koa';
import { Logger } from '@restorecommerce/logger';
import { Server } from 'http';
import { Facade, FacadeModule } from './interfaces';
export * from './modules/index';
export * from './middlewares/index';
export * from './interfaces';
interface FacadeImplConfig {
    koa: Koa<any, any>;
    logger: Logger;
    port?: number;
    hostname?: string;
}
export declare class FacadeImpl implements Facade {
    private _server?;
    private _initialized;
    readonly logger: Logger;
    readonly port: number;
    readonly hostname: string;
    readonly koa: Koa<any, any>;
    readonly modules: any;
    constructor({ koa, logger, port, hostname }: FacadeImplConfig);
    get server(): Server;
    get address(): string | import("net").AddressInfo;
    private loadedModules;
    useMiddleware<TNewState extends object = {}, TNewContext extends object = {}>(middleware: Koa.Middleware<TNewState, TNewContext>): any;
    useModule<TModule extends FacadeModule>(module: TModule): any;
    supportsModule<TSupportedModule extends FacadeModule>(module: TSupportedModule): this is Facade<[TSupportedModule]>;
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
