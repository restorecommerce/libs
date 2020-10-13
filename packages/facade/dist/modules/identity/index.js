"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.identityModule = void 0;
const grpc_clients_generated_1 = require("@restorecommerce/grpc-clients-generated");
const facade_1 = require("../../facade");
;
;
exports.identityModule = facade_1.createFacadeModuleFactory('identity', (facade, config) => {
    const identity = {
        client: new grpc_clients_generated_1.IdentitySrvGrpcClient(config.client)
    };
    facade.modules.identity = identity;
    facade.koa.use(ctx => ctx.identity = identity);
});
