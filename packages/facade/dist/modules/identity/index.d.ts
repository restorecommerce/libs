import { IdentitySrvGrpcClient } from "@restorecommerce/grpc-clients-generated";
import { GrpcClientConfig } from "@restorecommerce/grpc-client";
import { FacadeModule } from "../../interfaces";
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
export declare type IdentityModule = FacadeModule<IdentityConfig, IdentityContext, IdentityNamespace>;
export declare const identityModule: IdentityModule;
