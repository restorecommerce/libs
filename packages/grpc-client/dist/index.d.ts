import { Channel, Client, DefaultCallOptions, createChannel, Metadata, type CallContext } from 'nice-grpc';
import { CompatServiceDefinition, NormalizedServiceDefinition } from 'nice-grpc/lib/service-definitions';
import { createLogger } from '@restorecommerce/logger';
export interface GrpcClientConfig {
    logger: ReturnType<typeof createLogger>;
    timeout?: number;
    omittedFields?: any;
}
export declare function createClient<Service extends CompatServiceDefinition>(config: GrpcClientConfig, definition: Service, channel: Channel, defaultCallOptions?: DefaultCallOptions<NormalizedServiceDefinition<Service>>): Client<Service>;
export { Client, Channel, createChannel, CallContext, Metadata };
//# sourceMappingURL=index.d.ts.map