import { gql } from "apollo-server-koa";
import { buildFederatedSchema } from "@apollo/federation";
import { schema } from "./schema";
import { generateSubServiceResolvers, SubSpaceServiceConfig } from '../../../gql/protos';
import { IndexingSrvGrpcClient } from "../grpc";
import { IndexingContext, namespace } from "../interfaces";
import { printSchema } from "graphql";
import { Resolvers } from './schema.generated';
import { subServices } from '../../access-control/gql/types';

// TODO There is currently no way of building a federated schema from GraphQLSchema Object
// See https://github.com/apollographql/apollo-server/pull/4310
export const FederatedIndexingSchema = (cfg: SubSpaceServiceConfig) => buildFederatedSchema({
  typeDefs: gql(printSchema(schema(cfg))),
  resolvers: generateSubServiceResolvers<Resolvers, IndexingSrvGrpcClient, IndexingContext>(subServices, cfg, namespace)
});
