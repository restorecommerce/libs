import { gql } from 'graphql-tag';
import { buildSubgraphSchema } from '@apollo/federation';
import { schema } from './schema.js';
import { type AccessControlContext, type AccessControlServiceConfig, namespace } from '../interfaces.js';
import { generateSubServiceResolvers } from '../../../gql/protos/index.js';
import { type Resolvers } from './schema.generated.js';
import { subServices } from './types.js';
import { type AccessControlSrvGrpcClient } from '../grpc/index.js';
import { printSchema } from 'graphql';

// TODO There is currently no way of building a federated schema from GraphQLSchema Object
// See https://github.com/apollographql/apollo-server/pull/4310
export const FederatedAccessControlSchema = (cfg: AccessControlServiceConfig) => buildSubgraphSchema({
  typeDefs: gql(printSchema(schema(cfg))),
  resolvers: generateSubServiceResolvers<Resolvers, AccessControlSrvGrpcClient, AccessControlContext>(subServices, cfg, namespace)
});
