import { Resolvers } from './schema.generated';
import { namespace, CatalogServiceConfig, CatalogContext } from "../interfaces";
import {
  generateResolver,
  getGQLResolverFunctions,
  getWhitelistBlacklistConfig,
  registerResolverFunction,
} from "../../../gql/protos";
import {
  metaService as productMetaService,
  metadata as metaPackageIoRestorecommerceProduct
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/product";
import {
  metaService as product_prototypeMetaService,
  metadata as metaPackageIoRestorecommerceProduct_prototype
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/product_prototype";
import {
  metaService as product_categoryMetaService,
  metadata as metaPackageIoRestorecommerceProduct_category
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/product_category";
import {
  metaService as price_groupMetaService,
  metadata as metaPackageIoRestorecommercePrice_group
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/price_group";
import {
  metaService as manufacturerMetaService,
  metadata as metaPackageIoRestorecommerceManufacturer
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/manufacturer";
import { CatalogSrvGrpcClient } from "../grpc";

export const resolvers: (cfg: CatalogServiceConfig) => Resolvers = (cfg: CatalogServiceConfig) => {
  const subServices = [
    [productMetaService, metaPackageIoRestorecommerceProduct, 'product', ['Read']],
    [product_prototypeMetaService, metaPackageIoRestorecommerceProduct_prototype, 'product_prototype', ['Read']],
    [product_categoryMetaService, metaPackageIoRestorecommerceProduct_category, 'product_category', ['Read']],
    [price_groupMetaService, metaPackageIoRestorecommercePrice_group, 'price_group', ['Read']],
    [manufacturerMetaService, metaPackageIoRestorecommerceManufacturer, 'manufacturer', ['Read']],
  ];

  subServices.forEach(([meta, pack, subspace, queryList]: any) => {
    const {mutations, queries} = getWhitelistBlacklistConfig(meta, queryList, cfg)

    const func = getGQLResolverFunctions<CatalogSrvGrpcClient, CatalogContext>(meta, pack, namespace, subspace || namespace);

    Object.keys(func).forEach(k => {
      registerResolverFunction(cfg.root ? subspace : namespace, k, func[k], !queries.has(k) && mutations.has(k), cfg.root ? undefined : subspace);
    });
  });

  if (cfg.root) {
    return generateResolver(...subServices.map(srv => srv[2] as string));
  }

  return generateResolver(namespace);
}
