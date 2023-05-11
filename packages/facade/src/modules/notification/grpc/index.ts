import { RestoreCommerceGrpcClient } from '@restorecommerce/rc-grpc-clients';
import {
  NotificationServiceClient,
  NotificationServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/notification';
import { GrpcClientConfig } from '@restorecommerce/grpc-client';

export class NotificationSrvGrpcClient extends RestoreCommerceGrpcClient {

  readonly service: NotificationServiceClient;

  constructor(address: string, cfg: GrpcClientConfig) {
    super(address, cfg);

    this.service = this.createClient(cfg, NotificationServiceDefinition, this.channel);
  }

}
