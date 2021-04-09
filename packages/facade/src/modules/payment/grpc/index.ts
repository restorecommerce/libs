import { RestoreCommerceGrpcClient } from "@restorecommerce/rc-grpc-clients";
import {
  protoMetadata,
  protobufPackage,
  Service
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/payment";
import { getGRPCService } from "../../../gql/protos";
import { GrpcClientConfig } from "@restorecommerce/grpc-client";

export class PaymentSrvGrpcClient extends RestoreCommerceGrpcClient {
  constructor(cfg: GrpcClientConfig) {
    super(cfg);
  }
  service = getGRPCService<Service>(this, protobufPackage, protoMetadata.fileDescriptor.service![0]);
}
