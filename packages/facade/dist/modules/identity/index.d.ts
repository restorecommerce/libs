import { IdentitySrvGrpcClient } from "../../../../rc-grpc-clients/dist";
import { GrpcClientConfig } from "@restorecommerce/grpc-client";
import { FacadeModule } from "../../facade";
export interface IdentityConfig {
    client: GrpcClientConfig;
}
export interface IdentityContext {
    identity: {
        client: IdentitySrvGrpcClient;
    };
}
export interface IdentityNamespace extends IdentityContext {
}
export declare type IdentityModule = FacadeModule<IdentityContext, IdentityNamespace>;
export declare const identityModule: import("../../facade").FacadeModuleFactory<IdentityConfig, IdentityContext, IdentityNamespace>;
