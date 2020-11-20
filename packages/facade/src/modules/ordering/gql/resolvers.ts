import { Resolvers } from './schema.generated';
import { OrderingContext } from "../interfaces";
import { generateResolver, getGQLResolverFunctions, registerResolverFunction } from "../../../gql/protos";
import {
  metaPackageIoRestorecommerceOrder,
  metaService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/order";
import { mutations, queries } from "./utils";
import { OrderingSrvGrpcClient } from "../grpc";

const namespace = 'ordering';

const func = getGQLResolverFunctions<OrderingSrvGrpcClient, OrderingContext>(metaService, metaPackageIoRestorecommerceOrder, namespace, namespace);

Object.keys(func).forEach(key => {
  registerResolverFunction(namespace, key, func[key], !queries.has(key) && mutations.has(key));
});

export const resolvers: Resolvers = generateResolver(namespace)
