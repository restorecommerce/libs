import { RestoreCommerceGrpcClient } from "@restorecommerce/rc-grpc-clients";
import {
  metaService as userMetaService,
  protobufPackage as userProtobufPackage,
  Service as userService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/user";
import {
  metaService as roleMetaService,
  protobufPackage as roleProtobufPackage,
  Service as roleService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/role";
import {
  metaService as authentication_logMetaService,
  protobufPackage as authentication_logProtobufPackage,
  Service as authentication_logService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/authentication_log";
import {
  metaService as tokenMetaService,
  protobufPackage as tokenProtobufPackage,
  Service as tokenService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/token";
import { getGRPCService } from "../../../gql/protos";
import { GrpcClientConfig } from "@restorecommerce/grpc-client";

export class IdentitySrvGrpcClient extends RestoreCommerceGrpcClient {
  constructor(cfg: GrpcClientConfig) {
    super(cfg);
  }

  user = getGRPCService<userService>(this, userProtobufPackage, 'Service', userMetaService);
  role = getGRPCService<roleService>(this, roleProtobufPackage, 'Service', roleMetaService);
  authentication_log = getGRPCService<authentication_logService>(this, authentication_logProtobufPackage, 'Service', authentication_logMetaService);
  token = getGRPCService<tokenService>(this, tokenProtobufPackage, 'Service', tokenMetaService);
}
