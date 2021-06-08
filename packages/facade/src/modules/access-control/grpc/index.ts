import { RestoreCommerceGrpcClient } from "@restorecommerce/rc-grpc-clients";
import {
  protoMetadata as access_controlMetaService,
  protobufPackage as access_controlProtobufPackage,
  Service as access_controlService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/access_control";
import {
  protoMetadata as policyMetaService,
  protobufPackage as policyProtobufPackage,
  Service as policyService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/policy";
import {
  protoMetadata as ruleMetaService,
  protobufPackage as ruleProtobufPackage,
  Service as ruleService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/rule";
import {
  protoMetadata as policy_setMetaService,
  protobufPackage as policy_setProtobufPackage,
  Service as policy_setService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/policy_set";
import { getGRPCService } from "../../../gql/protos";
import { GrpcClientConfig } from "@restorecommerce/grpc-client";
import { Logger } from "winston";

export class AccessControlSrvGrpcClient extends RestoreCommerceGrpcClient {
  constructor(cfg: GrpcClientConfig, logger: Logger) {
    super(cfg, logger);
  }

  access_control = getGRPCService<access_controlService>(this, access_controlProtobufPackage, access_controlMetaService.fileDescriptor.service![0]);
  policy = getGRPCService<policyService>(this, policyProtobufPackage, policyMetaService.fileDescriptor.service![0]);
  rule = getGRPCService<ruleService>(this, ruleProtobufPackage, ruleMetaService.fileDescriptor.service![0]);
  policy_set = getGRPCService<policy_setService>(this, policy_setProtobufPackage, policy_setMetaService.fileDescriptor.service![0]);
}
