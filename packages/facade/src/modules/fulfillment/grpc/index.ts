import { RestoreCommerceGrpcClient } from '@restorecommerce/rc-grpc-clients';
import {
  FulfillmentServiceClient,
  FulfillmentServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/fulfillment';
import {
  FulfillmentCourierServiceClient,
  FulfillmentCourierServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/fulfillment_courier';
import { GrpcClientConfig } from '@restorecommerce/grpc-client';

export class FulfillmentSrvGrpcClient extends RestoreCommerceGrpcClient {

  readonly fulfillment: FulfillmentServiceClient;
  readonly fulfillment_courier: FulfillmentCourierServiceClient;

  constructor(address: string, cfg: GrpcClientConfig) {
    super(address, cfg);

    this.fulfillment = this.createClient(cfg, FulfillmentServiceDefinition, this.channel);
    this.fulfillment_courier = this.createClient(cfg, FulfillmentCourierServiceDefinition, this.channel);
  }

}
