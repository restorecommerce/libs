import { gql } from 'graphql-tag';
import { buildSubgraphSchema } from '@apollo/federation';
import { schema } from './schema.js';
import { generateSubServiceResolvers, type SubSpaceServiceConfig } from '../../../gql/protos/index.js';
import { type IndexingSrvGrpcClient } from '../grpc/index.js';
import { type IndexingContext, namespace } from '../interfaces.js';
import { printSchema } from 'graphql';
import { type Resolvers } from './schema.generated.js';
import { subServices } from '../../access-control/gql/types.js';

// TODO There is currently no way of building a federated schema from GraphQLSchema Object
// See https://github.com/apollographql/apollo-server/pull/4310
export const FederatedIndexingSchema = (cfg: SubSpaceServiceConfig) => buildSubgraphSchema({
  typeDefs: gql(printSchema(schema(cfg))),
  resolvers: generateSubServiceResolvers<Resolvers, IndexingSrvGrpcClient, IndexingContext>(subServices, cfg, namespace)
});
