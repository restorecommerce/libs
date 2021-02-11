import { registerTypings } from "./types";
import {
  generateSchema,
  getGQLSchemas,
  getWhitelistBlacklistConfig,
  registerResolverSchema
} from "../../../gql/protos";
import { protoMetadata as access_controlMeta } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/access_control";
import { protoMetadata as policyMeta } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/policy";
import { protoMetadata as ruleMeta } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/rule";
import { protoMetadata as policy_setMeta } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/policy_set";
import { namespace, AccessControlServiceConfig } from "../interfaces";

registerTypings();

export const schema = (cfg: AccessControlServiceConfig) => {
  const subServices = [
    [access_controlMeta.fileDescriptor.service![0], 'access_control', ['IsAllowed', 'WhatIsAllowed']],
    [policyMeta.fileDescriptor.service![0], 'policy', ['Read']],
    [ruleMeta.fileDescriptor.service![0], 'rule', ['Read']],
    [policy_setMeta.fileDescriptor.service![0], 'policy_set', ['Read']],
  ];

  subServices.forEach(([service, subspace, queryList]: any) => {
    const {mutations, queries} = getWhitelistBlacklistConfig(service, queryList, cfg)

    const schemas = getGQLSchemas(service);

    Object.keys(schemas).forEach(key => {
      registerResolverSchema(cfg.root ? subspace : namespace, key, schemas[key], !queries.has(key) && mutations.has(key), cfg.root ? undefined : subspace)
    })
  });

  if (cfg.root) {
    return generateSchema(subServices.map(srv => {
      const name = srv[1] as string;
      return {
        prefix: 'AccessControl' + name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase(),
        namespace: name
      } as any
    }));
  }

  return generateSchema([{prefix: 'AccessControl', namespace}]);
}
