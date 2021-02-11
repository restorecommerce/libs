import { RestoreCommerceGrpcClient } from "@restorecommerce/rc-grpc-clients";
import {
  protoMetadata as fulfillmentMetaService,
  protobufPackage as fulfillmentProtobufPackage,
  Service as fulfillmentService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/fulfillment";
import {
  protoMetadata as fulfillment_courierMetaService,
  protobufPackage as fulfillment_courierProtobufPackage,
  Service as fulfillment_courierService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/fulfillment_courier";
import { getGRPCService } from "../../../gql/protos";
import { GrpcClientConfig } from "@restorecommerce/grpc-client";

export class FulfillmentSrvGrpcClient extends RestoreCommerceGrpcClient {
  constructor(cfg: GrpcClientConfig) {
    super(cfg);
  }
  fulfillment = getGRPCService<fulfillmentService>(this, fulfillmentProtobufPackage, fulfillmentMetaService.fileDescriptor.service![0]);
  fulfillment_courier = getGRPCService<fulfillment_courierService>(this, fulfillment_courierProtobufPackage, fulfillment_courierMetaService.fileDescriptor.service![0]);
}
