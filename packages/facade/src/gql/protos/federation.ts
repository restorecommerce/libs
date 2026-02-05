import {
  type FederatedSchemaWithResolvers,
  type ProtoMetadata,
  type ServiceClient,
  type SubSpaceServiceConfig
} from './types.js';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { parse } from 'graphql';
import { type GraphQLSchema, printSchema, GraphQLObjectType, GraphQLList, GraphQLScalarType } from 'graphql';
import { generateSubServiceResolvers } from './resolvers.js';
import { GraphQLResolverMap } from '@apollo/subgraph/dist/schema-helper/resolverMap.js';

export const buildFederatedSubscriptionSchema = <T, M extends Record<string, any>, CTX extends ServiceClient<CTX, keyof CTX, M>>(subServices: ProtoMetadata[], config: SubSpaceServiceConfig, namespace: string, schema: GraphQLSchema): FederatedSchemaWithResolvers => {
  const resolvers: GraphQLResolverMap<any> = generateSubServiceResolvers(subServices, config, namespace);

  // TODO There is currently no way of building a federated schema from GraphQLSchema Object
  // See https://github.com/apollographql/apollo-server/pull/4310
  const federatedSchema = buildSubgraphSchema([{
    typeDefs: parse(printSchema(schema)),
    resolvers
  }]);

  return {
    federatedSchema,
    resolvers
  };
};

export const mergeSubscribeIntoSchema = (schema: GraphQLObjectType | GraphQLList<any> | null | undefined, resolvers: GraphQLResolverMap<any>[string]) => {
  if (!schema || !resolvers) {
    return;
  }

  Object.entries(resolvers).forEach(([key, val]) => {
    if (schema instanceof GraphQLList) {
      mergeSubscribeIntoSchema(schema.ofType, val);
      return;
    }

    const field = schema.getFields()[key];
    if (!field) {
      return;
    }

    if ('resolve' in val || 'subscribe' in val) {
      field.subscribe = val['subscribe'] || field.subscribe;
      field.resolve = val['resolve'] || field.resolve;
      return;
    }

    const fieldType = field.type;
    if (fieldType instanceof GraphQLScalarType) {
      field.subscribe = val['subscribe'];
    } else if (fieldType instanceof GraphQLObjectType) {
      mergeSubscribeIntoSchema(fieldType, val);
    }
  });
};
