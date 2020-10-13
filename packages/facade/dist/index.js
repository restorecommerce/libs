"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFacade = exports.RestoreCommerceFacade = void 0;
const koa_1 = __importDefault(require("koa"));
const logger_1 = require("@restorecommerce/logger");
const apollo_server_koa_1 = require("apollo-server-koa");
__exportStar(require("./modules/index"), exports);
__exportStar(require("./middlewares/index"), exports);
__exportStar(require("./facade"), exports);
class RestoreCommerceFacade {
    constructor({ koa, logger, port, hostname, env }) {
        this._initialized = false;
        this.loadedModules = [];
        this.logger = logger;
        this.port = port !== null && port !== void 0 ? port : 5000;
        this.hostname = hostname !== null && hostname !== void 0 ? hostname : '127.0.0.1';
        this.koa = koa;
        this.modules = {};
        this.env = env !== null && env !== void 0 ? env : 'development';
    }
    get server() {
        return this._server;
    }
    get address() {
        return this._server && this._server.address();
    }
    useMiddleware(middleware) {
        this.koa.use(middleware);
        return this;
    }
    useModule(module) {
        if (this.loadedModules.includes(module.moduleName)) {
            throw new Error(`module ${module.moduleName} already loaded`);
        }
        this.loadedModules.push(module.moduleName);
        module(this);
        return this;
    }
    supportsModule(module) {
        return this.loadedModules.includes(module.moduleName);
    }
    federation() {
    }
    start() {
        if (!this._initialized) {
            this._initialized = true;
            this.mountApolloServer();
        }
        return new Promise((resolve, reject) => {
            try {
                this._server = this.koa.listen(this.port, this.hostname, () => {
                    const address = this.address;
                    if (typeof address === 'string') {
                        this.logger.info(`Service is listening on ${address}`);
                    }
                    else if (address) {
                        this.logger.info(`Service is listening on ${address.address}:${address.port}`);
                    }
                    resolve();
                });
            }
            catch (err) {
                reject(err);
            }
        });
    }
    stop() {
        return new Promise((resolve, reject) => {
            this.server.close((err) => {
                if (err) {
                    this.logger.error(`Error stopping service`, err);
                    reject(err);
                }
                else {
                    this.logger.info(`Service stopped`);
                    this._server = undefined;
                    resolve();
                }
            });
        });
    }
    mountApolloServer() {
        // const schema = buildFederatedSchema({
        //   typeDefs: []
        // })
        // schema;
        const typeDefs = apollo_server_koa_1.gql `
        type Book {
          title: String
          author: String
        }
        type Query {
          books: [Book]
        }
      `;
        const resolvers = {
            Query: {
                books: () => {
                    return [];
                },
            },
        };
        const gqlServer = new apollo_server_koa_1.ApolloServer({
            // schema: buildFederatedSchema([{ typeDefs, resolvers }]),
            typeDefs,
            resolvers,
            introspection: this.koa.env === 'development',
            playground: this.koa.env === 'development',
            // executor: this.executor,
            subscriptions: false,
            formatError: (error) => {
                this.logger.error('Error while processing request', { message: error.message });
                return {
                    message: error.message,
                    locations: error.locations,
                    stack: error.stack,
                };
            },
            context: ({ ctx }) => ctx
        });
        const middleware = gqlServer.getMiddleware({
            path: '/graphql',
            cors: true,
            bodyParserConfig: true,
        });
        this.koa.use(middleware);
    }
}
exports.RestoreCommerceFacade = RestoreCommerceFacade;
function createFacade(config) {
    var _a;
    const koa = new koa_1.default();
    koa.env = config.env;
    koa.keys = config.keys;
    const logger = (_a = config.logger) !== null && _a !== void 0 ? _a : logger_1.createLogger(config.logger);
    // console.log(helmet);
    // middleware
    // koa.use(bodyParser());
    // koa.use(kcors({
    // credentials: true,
    // exposeHeaders: ['x-jwt']
    // origin: TODO
    // }));
    // koa.use(helmet());
    return new RestoreCommerceFacade({
        koa,
        logger,
        port: config.port,
        hostname: config.hostname,
        env: config.env
    });
}
exports.createFacade = createFacade;
