import { registerTypings } from "./types";
import {
  generateSchema,
  getGQLSchemas,
  getWhitelistBlacklistConfig,
  registerResolverSchema
} from "../../../gql/protos";
import { protoMetadata as fulfillmentMeta } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/fulfillment";
import { protoMetadata as fulfillment_courierMeta } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/fulfillment_courier";
import { namespace, FulfillmentServiceConfig } from "../interfaces";

registerTypings();

export const schema = (cfg: FulfillmentServiceConfig) => {
  const subServices = [
    [fulfillmentMeta.fileDescriptor.service![0], 'fulfillment', ['getAllFulfillments', 'getLabels', 'trackFulfillment']],
    [fulfillment_courierMeta.fileDescriptor.service![0], 'fulfillment_courier', ['Read']],
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
        prefix: 'Fulfillment' + name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase(),
        namespace: name
      } as any
    }));
  }

  return generateSchema([{prefix: 'Fulfillment', namespace}]);
}
