import { RestoreCommerceGrpcClient } from '@restorecommerce/rc-grpc-clients';
import {
  SearchServiceClient,
  SearchServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/search';
import { GrpcClientConfig } from '@restorecommerce/grpc-client';

export class IndexingSrvGrpcClient extends RestoreCommerceGrpcClient {

  readonly search: SearchServiceClient;

  constructor(address: string, cfg: GrpcClientConfig) {
    super(address, cfg);

    this.search = this.createClient(cfg, SearchServiceDefinition, this.channel);
  }

}
