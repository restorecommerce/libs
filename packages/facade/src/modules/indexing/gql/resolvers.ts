import { Resolvers } from './schema.generated';
import { namespace, IndexingContext } from "../interfaces";
import { getAndGenerateResolvers, ServiceConfig, } from "../../../gql/protos";
import {
  metaPackageIoRestorecommerceSearch,
  metaService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/search";
import { IndexingSrvGrpcClient } from "../grpc";

export const resolvers: (cfg: ServiceConfig) => Resolvers = (cfg: ServiceConfig) => {
  return getAndGenerateResolvers<IndexingSrvGrpcClient, IndexingContext>(metaService, metaPackageIoRestorecommerceSearch, namespace, cfg, ['Search'], undefined, 'search');
}
