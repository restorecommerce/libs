import { Resolvers } from './schema.generated';
import { PaymentContext } from "../interfaces";
import { generateResolver, getGQLResolverFunctions, registerResolverFunction } from "../../../gql/protos";
import {
  metaPackageIoRestorecommercePayment,
  metaService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/payment";
import { mutations, queries } from "./utils";
import { PaymentSrvGrpcClient } from "../grpc";

const namespace = 'payment';

const func = getGQLResolverFunctions<PaymentSrvGrpcClient, PaymentContext>(metaService, metaPackageIoRestorecommercePayment, namespace, namespace);

Object.keys(func).forEach(key => {
  registerResolverFunction(namespace, key, func[key], !queries.has(key) && mutations.has(key));
});

export const resolvers: Resolvers = generateResolver(namespace)
