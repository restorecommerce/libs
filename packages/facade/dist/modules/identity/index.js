"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.identityModule = void 0;
const dist_1 = require("../../../../rc-grpc-clients/dist");
const facade_1 = require("../../facade");
;
;
exports.identityModule = facade_1.createFacadeModuleFactory('identity', (facade, config) => {
    const identity = {
        client: new dist_1.IdentitySrvGrpcClient(config.client)
    };
    facade.modules.identity = identity;
    facade.koa.use(ctx => ctx.identity = identity);
});
