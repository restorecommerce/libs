import { Resolvers } from './schema.generated';
import { OrderingContext } from "@modules/ordering/interfaces";
import { getGQLResolverFunctions } from "../../../gql/protos";
import { metaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/order";
import { OrderingSrvGrpcClient } from "@restorecommerce/rc-grpc-clients";

export const resolvers: Resolvers = {
  Query: {
    // TODO Whitelist/Blacklist based on config
    // TODO Separate to Mutations and Queries
    ...getGQLResolverFunctions<OrderingSrvGrpcClient, OrderingContext>(metaService, 'ordering', 'ordering'),
  }
}
