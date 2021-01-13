import { Resolvers } from './schema.generated';
import { namespace, OstorageContext } from "../interfaces";
import { getAndGenerateResolvers, ServiceConfig, } from "../../../gql/protos";
import {
  metadata as metaPackageIoRestorecommerceOstorage,
  metaService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/ostorage";
import { OstorageSrvGrpcClient } from "../grpc";

export const resolvers: (cfg: ServiceConfig) => Resolvers = (cfg: ServiceConfig) => {
  return getAndGenerateResolvers<OstorageSrvGrpcClient, OstorageContext>(metaService, metaPackageIoRestorecommerceOstorage, namespace, cfg, ['Get', 'List']);
}
