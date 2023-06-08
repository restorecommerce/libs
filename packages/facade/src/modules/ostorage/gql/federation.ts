import { gql } from 'graphql-tag';
import { buildSubgraphSchema } from '@apollo/federation';
import { schema } from './schema.js';
import { generateSubServiceResolvers } from '../../../gql/protos/index.js';
import { namespace, type OstorageServiceConfig } from '../interfaces.js';
import { subServices } from './types.js';
import { printSchema } from 'graphql';

// TODO There is currently no way of building a federated schema from GraphQLSchema Object
// See https://github.com/apollographql/apollo-server/pull/4310
export const FederatedOstorageSchema = (cfg: OstorageServiceConfig) => buildSubgraphSchema({
  typeDefs: gql(printSchema(schema(cfg))),
  resolvers: generateSubServiceResolvers(subServices, cfg, namespace)
});
