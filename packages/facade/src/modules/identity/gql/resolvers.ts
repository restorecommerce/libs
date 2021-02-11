import { Resolvers } from './schema.generated';
import { namespace, IdentityServiceConfig, IdentityContext } from "../interfaces";
import {
  generateResolver,
  getGQLResolverFunctions,
  getWhitelistBlacklistConfig,
  registerResolverFunction,
} from "../../../gql/protos";
import { protoMetadata as userMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/user";
import { protoMetadata as roleMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/role";
import { protoMetadata as authentication_logMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/authentication_log";
import { protoMetadata as tokenMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/token";
import { IdentitySrvGrpcClient } from "../grpc";

export const resolvers: (cfg: IdentityServiceConfig) => Resolvers = (cfg: IdentityServiceConfig) => {
  const subServices = [
    [userMetaService.fileDescriptor.service![0], 'user', ['Read']],
    [roleMetaService.fileDescriptor.service![0], 'role', ['Read']],
    [authentication_logMetaService.fileDescriptor.service![0], 'authentication_log', ['Read']],
    [tokenMetaService.fileDescriptor.service![0], 'token', ['Read']],
  ];

  subServices.forEach(([meta, subspace, queryList]: any) => {
    const {mutations, queries} = getWhitelistBlacklistConfig(meta, queryList, cfg)

    const func = getGQLResolverFunctions<IdentitySrvGrpcClient, IdentityContext>(meta, namespace, subspace || namespace);

    Object.keys(func).forEach(k => {
      registerResolverFunction(cfg.root ? subspace : namespace, k, func[k], !queries.has(k) && mutations.has(k), cfg.root ? undefined : subspace);
    });
  });

  if (cfg.root) {
    return generateResolver(...subServices.map(srv => srv[2] as string));
  }

  return generateResolver(namespace);
}
