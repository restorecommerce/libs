"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.identityModule = void 0;
const grpc_clients_generated_1 = require("@restorecommerce/grpc-clients-generated");
;
;
exports.identityModule = (config) => {
    return (facade) => {
        const identity = {
            client: new grpc_clients_generated_1.IdentitySrvGrpcClient(config.client)
        };
        facade.modules.identity = identity;
        facade.koa.use(ctx => ctx.identity = identity);
    };
};
exports.identityModule.key = 'identity';
