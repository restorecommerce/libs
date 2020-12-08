import { RestoreCommerceGrpcClient } from "@restorecommerce/rc-grpc-clients";
import {
  metaService as access_controlMetaService,
  protobufPackage as access_controlProtobufPackage,
  Service as access_controlService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/access_control";
import {
  metaService as policyMetaService,
  protobufPackage as policyProtobufPackage,
  Service as policyService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/policy";
import {
  metaService as ruleMetaService,
  protobufPackage as ruleProtobufPackage,
  Service as ruleService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/rule";
import {
  metaService as policy_setMetaService,
  protobufPackage as policy_setProtobufPackage,
  Service as policy_setService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/policy_set";
import { getGRPCService } from "../../../gql/protos";
import { GrpcClientConfig } from "@restorecommerce/grpc-client";

export class AccessControlSrvGrpcClient extends RestoreCommerceGrpcClient {
  constructor(cfg: GrpcClientConfig) {
    super(cfg);
  }

  access_control = getGRPCService<access_controlService>(this, access_controlProtobufPackage, 'Service', access_controlMetaService);
  policy = getGRPCService<policyService>(this, policyProtobufPackage, 'Service', policyMetaService);
  rule = getGRPCService<ruleService>(this, ruleProtobufPackage, 'Service', ruleMetaService);
  policy_set = getGRPCService<policy_setService>(this, policy_setProtobufPackage, 'Service', policy_setMetaService);
}
