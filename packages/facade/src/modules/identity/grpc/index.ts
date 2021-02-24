import { RestoreCommerceGrpcClient } from "@restorecommerce/rc-grpc-clients";
import {
  protoMetadata as userMetaService,
  protobufPackage as userProtobufPackage,
  Service as userService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/user";
import {
  protoMetadata as roleMetaService,
  protobufPackage as roleProtobufPackage,
  Service as roleService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/role";
import {
  protoMetadata as authentication_logMetaService,
  protobufPackage as authentication_logProtobufPackage,
  Service as authentication_logService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/authentication_log";
import {
  protoMetadata as tokenMetaService,
  protobufPackage as tokenProtobufPackage,
  Service as tokenService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/token";
import { getGRPCService } from "../../../gql/protos";
import { GrpcClientConfig } from "@restorecommerce/grpc-client";

export class IdentitySrvGrpcClient extends RestoreCommerceGrpcClient {
  constructor(cfg: GrpcClientConfig) {
    super(cfg);
  }

  user = getGRPCService<userService>(this, userProtobufPackage, userMetaService.fileDescriptor.service![0]);
  role = getGRPCService<roleService>(this, roleProtobufPackage, roleMetaService.fileDescriptor.service![0]);
  authentication_log = getGRPCService<authentication_logService>(this, authentication_logProtobufPackage, authentication_logMetaService.fileDescriptor.service![0]);
  token = getGRPCService<tokenService>(this, tokenProtobufPackage, tokenMetaService.fileDescriptor.service![0]);
}
