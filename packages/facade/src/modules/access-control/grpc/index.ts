import { RestoreCommerceGrpcClient } from '@restorecommerce/rc-grpc-clients';
import {
  ServiceClient as access_controlClient,
  ServiceDefinition as access_controlService
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/access_control';
import {
  ServiceClient as policyClient,
  ServiceDefinition as policyService
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/policy';
import {
  ServiceClient as ruleClient,
  ServiceDefinition as ruleService
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/rule';
import {
  ServiceClient as policy_setClient,
  ServiceDefinition as policy_setService
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/policy_set';
import { GrpcClientConfig } from '@restorecommerce/grpc-client';

export class AccessControlSrvGrpcClient extends RestoreCommerceGrpcClient {

  readonly access_control: access_controlClient;
  readonly policy: policyClient;
  readonly rule: ruleClient;
  readonly policy_set: policy_setClient;

  constructor(address: string, cfg: GrpcClientConfig) {
    super(address, cfg);

    this.access_control = this.createClient(cfg, access_controlService, this.channel);
    this.policy = this.createClient(cfg, policyService, this.channel);
    this.rule = this.createClient(cfg, ruleService, this.channel);
    this.policy_set = this.createClient(cfg, policy_setService, this.channel);
  }

}
