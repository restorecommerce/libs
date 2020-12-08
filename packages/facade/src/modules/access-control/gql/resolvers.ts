import { Resolvers } from './schema.generated';
import { namespace, AccessControlServiceConfig, AccessControlContext } from "../interfaces";
import {
  generateResolver,
  getGQLResolverFunctions,
  getWhitelistBlacklistConfig,
  registerResolverFunction,
} from "../../../gql/protos";
import {
  metaService as access_controlMetaService,
  metaPackageIoRestorecommerceAccess_control
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/access_control";
import {
  metaService as policyMetaService,
  metaPackageIoRestorecommercePolicy
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/policy";
import {
  metaService as ruleMetaService,
  metaPackageIoRestorecommerceRule
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/rule";
import {
  metaService as policy_setMetaService,
  metaPackageIoRestorecommercePolicy_set
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/policy_set";
import { AccessControlSrvGrpcClient } from "../grpc";

export const resolvers: (cfg: AccessControlServiceConfig) => Resolvers = (cfg: AccessControlServiceConfig) => {
  const subServices = [
    [access_controlMetaService, metaPackageIoRestorecommerceAccess_control, 'access_control', ['IsAllowed', 'WhatIsAllowed']],
    [policyMetaService, metaPackageIoRestorecommercePolicy, 'policy', ['Read']],
    [ruleMetaService, metaPackageIoRestorecommerceRule, 'rule', ['Read']],
    [policy_setMetaService, metaPackageIoRestorecommercePolicy_set, 'policy_set', ['Read']],
  ];

  subServices.forEach(([meta, pack, subspace, queryList]: any) => {
    const {mutations, queries} = getWhitelistBlacklistConfig(meta, queryList, cfg)

    const func = getGQLResolverFunctions<AccessControlSrvGrpcClient, AccessControlContext>(meta, pack, namespace, subspace || namespace);

    Object.keys(func).forEach(k => {
      registerResolverFunction(cfg.root ? subspace : namespace, k, func[k], !queries.has(k) && mutations.has(k), cfg.root ? undefined : subspace);
    });
  });

  if (cfg.root) {
    return generateResolver(...subServices.map(srv => srv[2] as string));
  }

  return generateResolver(namespace);
}
