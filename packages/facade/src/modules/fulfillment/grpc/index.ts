import { RestoreCommerceGrpcClient } from '@restorecommerce/rc-grpc-clients';
import {
  type FulfillmentServiceClient,
  FulfillmentServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/fulfillment.js';
import {
  type FulfillmentCourierServiceClient,
  FulfillmentCourierServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/fulfillment_courier.js';
import { type GrpcClientConfig } from '@restorecommerce/grpc-client';

export class FulfillmentSrvGrpcClient extends RestoreCommerceGrpcClient {

  readonly fulfillment: FulfillmentServiceClient;
  readonly fulfillment_courier: FulfillmentCourierServiceClient;

  constructor(address: string, cfg: GrpcClientConfig) {
    super(address, cfg);

    this.fulfillment = this.createClient(cfg, FulfillmentServiceDefinition, this.channel);
    this.fulfillment_courier = this.createClient(cfg, FulfillmentCourierServiceDefinition, this.channel);
  }

}
