import { RestoreCommerceGrpcClient } from "@restorecommerce/rc-grpc-clients";
import {
  metaService,
  protobufPackage,
  Service
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/invoice";
import { getGRPCService } from "../../../gql/protos";
import { GrpcClientConfig } from "@restorecommerce/grpc-client";

export class InvoicingSrvGrpcClient extends RestoreCommerceGrpcClient {
  constructor(cfg: GrpcClientConfig) {
    super(cfg);
  }
  invoice = getGRPCService<Service>(this, protobufPackage, 'Service', metaService);
}
