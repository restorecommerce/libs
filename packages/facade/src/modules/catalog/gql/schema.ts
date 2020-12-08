import { registerTypings } from "./types";
import {
  generateSchema,
  getGQLSchemas,
  getWhitelistBlacklistConfig,
  registerResolverSchema
} from "../../../gql/protos";
import { metaService as productMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/product";
import { metaService as product_prototypeMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/product_prototype";
import { metaService as product_categoryMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/product_category";
import { metaService as price_groupMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/price_group";
import { metaService as manufacturerMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/manufacturer";
import { namespace, CatalogServiceConfig } from "../interfaces";

registerTypings();

export const schema = (cfg: CatalogServiceConfig) => {
  const subServices = [
    [productMetaService, 'product', ['Read']],
    [product_prototypeMetaService, 'product_prototype', ['Read']],
    [product_categoryMetaService, 'product_category', ['Read']],
    [price_groupMetaService, 'price_group', ['Read']],
    [manufacturerMetaService, 'manufacturer', ['Read']],
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
        prefix: 'Catalog' + name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase(),
        namespace: name
      } as any
    }));
  }

  return generateSchema([{prefix: 'Catalog', namespace}]);
}
