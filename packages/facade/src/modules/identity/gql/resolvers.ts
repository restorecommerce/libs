import { Resolvers } from './schema.generated';
import { namespace, IdentityServiceConfig, IdentityContext } from "../interfaces";
import {
  generateResolver,
  getGQLResolverFunctions,
  getWhitelistBlacklistConfig,
  registerResolverFunction,
} from "../../../gql/protos";
import {
  metadata as metaPackageIoRestorecommerceUser,
  metaService as userMetaService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/user";
import {
  metadata as metaPackageIoRestorecommerceRole,
  metaService as roleMetaService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/role";
import {
  metadata as metaPackageIoRestorecommerceAuthentication_log,
  metaService as authentication_logMetaService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/authentication_log";
import {
  metadata as metaPackageIoRestorecommerceToken,
  metaService as tokenMetaService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/token";
import { IdentitySrvGrpcClient } from "../grpc";

export const resolvers: (cfg: IdentityServiceConfig) => Resolvers = (cfg: IdentityServiceConfig) => {
  const subServices = [
    [userMetaService, metaPackageIoRestorecommerceUser, 'user', ['Read']],
    [roleMetaService, metaPackageIoRestorecommerceRole, 'role', ['Read']],
    [authentication_logMetaService, metaPackageIoRestorecommerceAuthentication_log, 'authentication_log', ['Read']],
    [tokenMetaService, metaPackageIoRestorecommerceToken, 'token', ['Read']],
  ];

  subServices.forEach(([meta, pack, subspace, queryList]: any) => {
    const {mutations, queries} = getWhitelistBlacklistConfig(meta, queryList, cfg)

    const func = getGQLResolverFunctions<IdentitySrvGrpcClient, IdentityContext>(meta, pack, namespace, subspace || namespace);

    Object.keys(func).forEach(k => {
      registerResolverFunction(cfg.root ? subspace : namespace, k, func[k], !queries.has(k) && mutations.has(k), cfg.root ? undefined : subspace);
    });
  });

  if (cfg.root) {
    return generateResolver(...subServices.map(srv => srv[2] as string));
  }

  return generateResolver(namespace);
}
