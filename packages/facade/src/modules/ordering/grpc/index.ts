import { RestoreCommerceGrpcClient } from '@restorecommerce/rc-grpc-clients';
import {
  OrderServiceClient,
  OrderServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/order';
import { GrpcClientConfig } from '@restorecommerce/grpc-client';

export class OrderingSrvGrpcClient extends RestoreCommerceGrpcClient {

  readonly order: OrderServiceClient;

  constructor(address: string, cfg: GrpcClientConfig) {
    super(address, cfg);

    this.order = this.createClient(cfg, OrderServiceDefinition, this.channel);
  }

}
