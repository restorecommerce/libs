import { RestoreCommerceGrpcClient } from '@restorecommerce/rc-grpc-clients';
import {
  ServiceClient,
  ServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/ostorage';
import { GrpcClientConfig } from '@restorecommerce/grpc-client';

export class OstorageSrvGrpcClient extends RestoreCommerceGrpcClient {

  readonly ostorage: ServiceClient;

  constructor(address: string, cfg: GrpcClientConfig) {
    super(address, cfg);

    this.ostorage = this.createClient(cfg, ServiceDefinition, this.channel);
  }

}
