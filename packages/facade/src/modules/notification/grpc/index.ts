import { RestoreCommerceGrpcClient } from '@restorecommerce/rc-grpc-clients';
import {
  ServiceClient,
  ServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/notification';
import { GrpcClientConfig } from '@restorecommerce/grpc-client';

export class NotificationSrvGrpcClient extends RestoreCommerceGrpcClient {

  readonly service: ServiceClient;

  constructor(address: string, cfg: GrpcClientConfig) {
    super(address, cfg);

    this.service = this.createClient(cfg, ServiceDefinition, this.channel);
  }

}
