import { RestoreCommerceGrpcClient } from '@restorecommerce/rc-grpc-clients';
import {
  ServiceClient,
  ServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/invoice';
import { GrpcClientConfig } from '@restorecommerce/grpc-client';

export class InvoicingSrvGrpcClient extends RestoreCommerceGrpcClient {

  readonly invoice: ServiceClient;

  constructor(address: string, cfg: GrpcClientConfig) {
    super(address, cfg);

    this.invoice = this.createClient(cfg, ServiceDefinition, this.channel);
  }

}
