import { registerTypings } from "./types";
import {
  generateSchema,
  getGQLSchemas,
  getWhitelistBlacklistConfig,
  registerResolverSchema
} from "../../../gql/protos";
import { protoMetadata as userMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/user";
import { protoMetadata as roleMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/role";
import { protoMetadata as authentication_logMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/authentication_log";
import { protoMetadata as tokenMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/token";
import { namespace, IdentityServiceConfig } from "../interfaces";

registerTypings();

export const schema = (cfg: IdentityServiceConfig) => {
  const subServices = [
    [userMetaService.fileDescriptor.service![0], 'user', ['Read', 'Find', 'FindByRole', 'FindByToken']],
    [roleMetaService.fileDescriptor.service![0], 'role', ['Read']],
    [authentication_logMetaService.fileDescriptor.service![0], 'authentication_log', ['Read']],
    [tokenMetaService.fileDescriptor.service![0], 'token', ['find']],
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
        prefix: 'Identity' + name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase(),
        namespace: name
      } as any
    }));
  }

  return generateSchema([{prefix: 'Identity', namespace}]);
}
