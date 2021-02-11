import { Resolvers } from './schema.generated';
import { namespace, CatalogServiceConfig, CatalogContext } from "../interfaces";
import {
  generateResolver,
  getGQLResolverFunctions,
  getWhitelistBlacklistConfig,
  registerResolverFunction,
} from "../../../gql/protos";
import { protoMetadata as productMeta, } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/product";
import { protoMetadata as product_prototypeMeta, } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/product_prototype";
import { protoMetadata as product_categoryMeta, } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/product_category";
import { protoMetadata as price_groupMeta, } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/price_group";
import { protoMetadata as manufacturerMeta, } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/manufacturer";
import { CatalogSrvGrpcClient } from "../grpc";

export const resolvers: (cfg: CatalogServiceConfig) => Resolvers = (cfg: CatalogServiceConfig) => {
  const subServices = [
    [productMeta.fileDescriptor.service![0], 'product', ['Read']],
    [product_prototypeMeta.fileDescriptor.service![0], 'product_prototype', ['Read']],
    [product_categoryMeta.fileDescriptor.service![0], 'product_category', ['Read']],
    [price_groupMeta.fileDescriptor.service![0], 'price_group', ['Read']],
    [manufacturerMeta.fileDescriptor.service![0], 'manufacturer', ['Read']],
  ];

  subServices.forEach(([meta, subspace, queryList]: any) => {
    const {mutations, queries} = getWhitelistBlacklistConfig(meta, queryList, cfg)

    const func = getGQLResolverFunctions<CatalogSrvGrpcClient, CatalogContext>(meta, namespace, subspace || namespace);

    Object.keys(func).forEach(k => {
      registerResolverFunction(cfg.root ? subspace : namespace, k, func[k], !queries.has(k) && mutations.has(k), cfg.root ? undefined : subspace);
    });
  });

  if (cfg.root) {
    return generateResolver(...subServices.map(srv => srv[2] as string));
  }

  return generateResolver(namespace);
}
