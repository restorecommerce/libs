"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFacade = exports.FacadeImpl = void 0;
const koa_1 = __importDefault(require("koa"));
const logger_1 = require("@restorecommerce/logger");
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const reqResLogger = __importStar(require("@restorecommerce/koa-req-res-logger"));
const helmet = __importStar(require("koa-helmet"));
const cors_1 = __importDefault(require("@koa/cors"));
const apollo_server_koa_1 = require("apollo-server-koa");
const federation_1 = require("@apollo/federation");
__exportStar(require("./modules/index"), exports);
__exportStar(require("./interfaces"), exports);
class FacadeImpl {
    constructor({ koa, logger, port, hostname }) {
        this._initialized = false;
        this.loadedModules = [];
        this.logger = logger;
        this.port = port !== null && port !== void 0 ? port : 5000;
        this.hostname = hostname !== null && hostname !== void 0 ? hostname : '127.0.0.1';
        this.koa = koa;
        this.modules = {};
    }
    get server() {
        return this._server;
    }
    get address() {
        return this._server && this._server.address();
    }
    addModule(module, config) {
        if (this.loadedModules.includes(module.key)) {
            throw new Error('TODO');
        }
        this.loadedModules.push(module.key);
        module.initialize(this, config);
        return this;
    }
    supportsModule(module) {
        return this.loadedModules.includes(module.key);
    }
    federation() {
    }
    start() {
        if (!this._initialized) {
            this._initialized = true;
            this.mountApolloServer();
        }
        return new Promise((resolve) => {
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
        const schema = federation_1.buildFederatedSchema({
            typeDefs: []
        });
        schema;
        const typeDefs = apollo_server_koa_1.gql `
    # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

    # This "Book" type defines the queryable fields for every book in our data source.
    type Book {
      title: String
      author: String
    }

    # The "Query" type is special: it lists all of the available queries that
    # clients can execute, along with the return type for each. In this
    # case, the "books" query returns an array of zero or more Books (defined above).
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
            typeDefs: typeDefs,
            resolvers,
            // introspection: this.config.env === 'development',
            // playground: this.config.env === 'development',
            // executor: this.executor,
            // would add upload options here if not for apollo-server #3703
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
            path: '/graphql'
        });
        this.koa.use(middleware);
    }
}
exports.FacadeImpl = FacadeImpl;
function createFacade(config) {
    var _a;
    const koa = new koa_1.default();
    koa.env = config.env;
    koa.keys = config.keys;
    const logger = (_a = config.logger) !== null && _a !== void 0 ? _a : logger_1.createLogger(config.logger);
    // middleware
    koa.use(koa_bodyparser_1.default());
    koa.use(reqResLogger({ logger }));
    koa.use(cors_1.default({
        credentials: true,
        exposeHeaders: ['x-jwt']
        // origin: TODO
    }));
    koa.use(helmet());
    const facade = new FacadeImpl({
        koa,
        logger,
        port: config.port,
        hostname: config.hostname
    });
    return facade;
}
exports.createFacade = createFacade;
