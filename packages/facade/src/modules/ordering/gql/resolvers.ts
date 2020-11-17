import { Resolvers } from './schema.generated';
import { OrderingContext } from "@modules/ordering/interfaces";
import { getGQLResolverFunctions } from "../../../gql/protos";
import {
  metaPackageIoRestorecommerceOrder,
  metaService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/order";
import { OrderingSrvGrpcClient } from "@restorecommerce/rc-grpc-clients";
import { mutations, queries } from "./utils";

const query = getGQLResolverFunctions<OrderingSrvGrpcClient, OrderingContext>(metaService, metaPackageIoRestorecommerceOrder, 'ordering', 'ordering', key => queries.has(key));
const mutation = getGQLResolverFunctions<OrderingSrvGrpcClient, OrderingContext>(metaService, metaPackageIoRestorecommerceOrder, 'ordering', 'ordering', key => mutations.has(key));

export const resolvers: Resolvers = {
  Query: query
};

if (mutations.size > 0) {
  resolvers.Mutation = mutation;
}
