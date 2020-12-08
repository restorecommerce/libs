import { RestoreCommerceGrpcClient } from "@restorecommerce/rc-grpc-clients";
import {
  metaService,
  protobufPackage,
  Service
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/job";
import { getGRPCService } from "../../../gql/protos";
import { GrpcClientConfig } from "@restorecommerce/grpc-client";

export class SchedulingSrvGrpcClient extends RestoreCommerceGrpcClient {
  constructor(cfg: GrpcClientConfig) {
    super(cfg);
  }
  job = getGRPCService<Service>(this, protobufPackage, 'Service', metaService);
}
