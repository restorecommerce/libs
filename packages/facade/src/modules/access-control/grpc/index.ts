import { RestoreCommerceGrpcClient } from '@restorecommerce/rc-grpc-clients';
import {
  type AccessControlServiceClient,
  AccessControlServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/access_control.js';
import {
  type PolicyServiceClient,
  PolicyServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/policy.js';
import {
  type RuleServiceClient,
  RuleServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/rule.js';
import {
  type PolicySetServiceClient,
  PolicySetServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/policy_set.js';
import {
  type OwnershipDomainServiceClient,
  OwnershipDomainServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/ownership_domain.js';
import { type GrpcClientConfig } from '@restorecommerce/grpc-client';

export class AccessControlSrvGrpcClient extends RestoreCommerceGrpcClient {

  readonly access_control: AccessControlServiceClient;
  readonly policy: PolicyServiceClient;
  readonly rule: RuleServiceClient;
  readonly policy_set: PolicySetServiceClient;
  readonly ownership_domain: OwnershipDomainServiceClient;

  constructor(address: string, cfg: GrpcClientConfig) {
    super(address, cfg);

    this.access_control = this.createClient(cfg, AccessControlServiceDefinition, this.channel);
    this.policy = this.createClient(cfg, PolicyServiceDefinition, this.channel);
    this.rule = this.createClient(cfg, RuleServiceDefinition, this.channel);
    this.policy_set = this.createClient(cfg, PolicySetServiceDefinition, this.channel);
    this.ownership_domain = this.createClient(cfg, OwnershipDomainServiceDefinition, this.channel);
  }

}
