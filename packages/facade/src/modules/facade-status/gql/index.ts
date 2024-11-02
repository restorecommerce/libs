import { buildSubgraphSchema } from '@apollo/subgraph';
import { gql } from 'graphql-tag';
import { printSchema } from 'graphql';
import { resolvers } from './resolvers.js';
import { schema } from './schema.js';

// TODO There is currently no way of building a federated schema from GraphQLSchema Object
// See https://github.com/apollographql/apollo-server/pull/4310
export const FederatedExampleSchema = buildSubgraphSchema({
  typeDefs: gql(printSchema(schema)),
  resolvers
});
