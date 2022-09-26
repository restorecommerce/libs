import { RestoreCommerceGrpcClient } from '@restorecommerce/rc-grpc-clients';
import {
  ServiceClient,
  ServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/search';
import { GrpcClientConfig } from '@restorecommerce/grpc-client';

export class IndexingSrvGrpcClient extends RestoreCommerceGrpcClient {

  readonly search: ServiceClient;

  constructor(address: string, cfg: GrpcClientConfig) {
    super(address, cfg);

    this.search = this.createClient(cfg, ServiceDefinition, this.channel);
  }

}
