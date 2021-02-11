import { Resolvers } from './schema.generated';
import { namespace, FulfillmentServiceConfig, FulfillmentContext } from "../interfaces";
import {
  generateResolver,
  getGQLResolverFunctions,
  getWhitelistBlacklistConfig,
  registerResolverFunction,
} from "../../../gql/protos";
import { protoMetadata as fulfillmentMeta } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/fulfillment";
import { protoMetadata as fulfillment_courierMeta } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/fulfillment_courier";
import { FulfillmentSrvGrpcClient } from "../grpc";

export const resolvers: (cfg: FulfillmentServiceConfig) => Resolvers = (cfg: FulfillmentServiceConfig) => {
  const subServices = [
    [fulfillmentMeta.fileDescriptor.service![0], 'fulfillment', ['getAllFulfillments', 'getLabels', 'trackFulfillment']],
    [fulfillment_courierMeta.fileDescriptor.service![0], 'fulfillment_courier', ['Read']],
  ];

  subServices.forEach(([meta, subspace, queryList]: any) => {
    const {mutations, queries} = getWhitelistBlacklistConfig(meta, queryList, cfg)

    const func = getGQLResolverFunctions<FulfillmentSrvGrpcClient, FulfillmentContext>(meta, namespace, subspace || namespace);

    Object.keys(func).forEach(k => {
      registerResolverFunction(cfg.root ? subspace : namespace, k, func[k], !queries.has(k) && mutations.has(k), cfg.root ? undefined : subspace);
    });
  });

  if (cfg.root) {
    return generateResolver(...subServices.map(srv => srv[2] as string));
  }

  return generateResolver(namespace);
}
