import { RestoreCommerceGrpcClient } from '@restorecommerce/rc-grpc-clients';
import {
  type InvoiceServiceClient,
  InvoiceServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/invoice.js';
import { type GrpcClientConfig } from '@restorecommerce/grpc-client';

export class InvoicingSrvGrpcClient extends RestoreCommerceGrpcClient {

  readonly invoice: InvoiceServiceClient;

  constructor(address: string, cfg: GrpcClientConfig) {
    super(address, cfg);

    this.invoice = this.createClient(cfg, InvoiceServiceDefinition, this.channel);
  }

}
