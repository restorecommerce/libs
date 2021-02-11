import { registerTypings } from "./types";
import {
  generateSchema,
  getGQLSchemas,
  getWhitelistBlacklistConfig,
  registerResolverSchema
} from "../../../gql/protos";
import { protoMetadata as productMeta } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/product";
import { protoMetadata as product_prototypeMeta } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/product_prototype";
import { protoMetadata as product_categoryMeta } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/product_category";
import { protoMetadata as price_groupMeta } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/price_group";
import { protoMetadata as manufacturerMeta } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/manufacturer";
import { namespace, CatalogServiceConfig } from "../interfaces";

registerTypings();

export const schema = (cfg: CatalogServiceConfig) => {
  const subServices = [
    [productMeta.fileDescriptor.service![0], 'product', ['Read']],
    [product_prototypeMeta.fileDescriptor.service![0], 'product_prototype', ['Read']],
    [product_categoryMeta.fileDescriptor.service![0], 'product_category', ['Read']],
    [price_groupMeta.fileDescriptor.service![0], 'price_group', ['Read']],
    [manufacturerMeta.fileDescriptor.service![0], 'manufacturer', ['Read']],
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
