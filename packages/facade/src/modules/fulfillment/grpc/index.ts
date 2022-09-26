import { RestoreCommerceGrpcClient } from '@restorecommerce/rc-grpc-clients';
import {
  ServiceClient as fulfillmentClient,
  ServiceDefinition as fulfillmentService
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/fulfillment';
import {
  ServiceClient as fulfillment_courierClient,
  ServiceDefinition as fulfillment_courierService
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/fulfillment_courier';
import { GrpcClientConfig } from '@restorecommerce/grpc-client';

export class FulfillmentSrvGrpcClient extends RestoreCommerceGrpcClient {

  readonly fulfillment: fulfillmentClient;
  readonly fulfillment_courier: fulfillment_courierClient;

  constructor(address: string, cfg: GrpcClientConfig) {
    super(address, cfg);

    this.fulfillment = this.createClient(cfg, fulfillmentService, this.channel);
    this.fulfillment_courier = this.createClient(cfg, fulfillment_courierService, this.channel);
  }

}
