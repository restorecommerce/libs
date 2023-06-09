import { RestoreCommerceGrpcClient } from '@restorecommerce/rc-grpc-clients';
import {
  type PaymentServiceClient,
  PaymentServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/payment.js';
import { type GrpcClientConfig } from '@restorecommerce/grpc-client';

export class PaymentSrvGrpcClient extends RestoreCommerceGrpcClient {

  readonly service: PaymentServiceClient;

  constructor(address: string, cfg: GrpcClientConfig) {
    super(address, cfg);

    this.service = this.createClient(cfg, PaymentServiceDefinition, this.channel);
  }

}
