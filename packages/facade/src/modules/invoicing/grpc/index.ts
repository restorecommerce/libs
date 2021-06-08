import { RestoreCommerceGrpcClient } from "@restorecommerce/rc-grpc-clients";
import {
  protoMetadata,
  protobufPackage,
  Service
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/invoice";
import { getGRPCService } from "../../../gql/protos";
import { GrpcClientConfig } from "@restorecommerce/grpc-client";
import { Logger } from "winston";

export class InvoicingSrvGrpcClient extends RestoreCommerceGrpcClient {
  constructor(cfg: GrpcClientConfig, logger: Logger) {
    super(cfg, logger);
  }
  invoice = getGRPCService<Service>(this, protobufPackage, protoMetadata.fileDescriptor.service![0]);
}
