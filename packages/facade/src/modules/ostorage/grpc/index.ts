import { RestoreCommerceGrpcClient } from "@restorecommerce/rc-grpc-clients";
import {
  metaService,
  protobufPackage,
  Service
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/ostorage";
import { getGRPCService } from "../../../gql/protos";
import { GrpcClientConfig } from "@restorecommerce/grpc-client";

export class OstorageSrvGrpcClient extends RestoreCommerceGrpcClient {
  constructor(cfg: GrpcClientConfig) {
    super(cfg);
  }
  ostorage = getGRPCService<Service>(this, protobufPackage, 'Service', metaService);
}
