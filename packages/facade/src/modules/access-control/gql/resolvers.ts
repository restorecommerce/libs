import { Resolvers } from './schema.generated';
import { namespace, AccessControlServiceConfig, AccessControlContext } from "../interfaces";
import {
  generateResolver,
  getGQLResolverFunctions,
  getWhitelistBlacklistConfig,
  registerResolverFunction,
} from "../../../gql/protos";
import { protoMetadata as access_controlMeta, } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/access_control";
import { protoMetadata as policyMeta, } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/policy";
import { protoMetadata as ruleMeta, } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/rule";
import { protoMetadata as policy_setMeta } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/policy_set";
import { AccessControlSrvGrpcClient } from "../grpc";

export const resolvers: (cfg: AccessControlServiceConfig) => Resolvers = (cfg: AccessControlServiceConfig) => {
  const subServices = [
    [access_controlMeta.fileDescriptor.service![0], 'access_control', ['IsAllowed', 'WhatIsAllowed']],
    [policyMeta.fileDescriptor.service![0], 'policy', ['Read']],
    [ruleMeta.fileDescriptor.service![0], 'rule', ['Read']],
    [policy_setMeta.fileDescriptor.service![0], 'policy_set', ['Read']],
  ];

  subServices.forEach(([meta, subspace, queryList]: any) => {
    const {mutations, queries} = getWhitelistBlacklistConfig(meta, queryList, cfg)

    const func = getGQLResolverFunctions<AccessControlSrvGrpcClient, AccessControlContext>(meta, namespace, subspace || namespace);

    Object.keys(func).forEach(k => {
      registerResolverFunction(cfg.root ? subspace : namespace, k, func[k], !queries.has(k) && mutations.has(k), cfg.root ? undefined : subspace);
    });
  });

  if (cfg.root) {
    return generateResolver(...subServices.map(srv => srv[2] as string));
  }

  return generateResolver(namespace);
}
