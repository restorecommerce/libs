import { RestoreCommerceGrpcClient } from '@restorecommerce/rc-grpc-clients';
import {
  type ObjectServiceClient,
  ObjectServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/ostorage.js';
import { type GrpcClientConfig } from '@restorecommerce/grpc-client';

export class OstorageSrvGrpcClient extends RestoreCommerceGrpcClient {

  readonly ostorage: ObjectServiceClient;

  constructor(address: string, cfg: GrpcClientConfig) {
    super(address, cfg);

    this.ostorage = this.createClient(cfg, ObjectServiceDefinition, this.channel);
  }

}
