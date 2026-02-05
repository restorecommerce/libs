import { GraphQLResolverMap } from '@apollo/subgraph/dist/schema-helper/resolverMap.js';
import { type GrpcClientConfig } from '@restorecommerce/grpc-client';
import { type GraphQLSchema, type GraphQLFieldResolver, type GraphQLScalarType } from 'graphql';
export {
  type ProtoMetadata,
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/resource_base.js';

export const authSubjectType = '.io.restorecommerce.auth.Subject';

export type ProtoMetaMessageOptions = {
  options?: {
    [key: string]: any;
  };
  fields?: {
    [key: string]: {
      [key: string]: any;
    };
  };
  oneof?: {
    [key: string]: {
      [key: string]: any;
    };
  };
  nested?: {
    [key: string]: ProtoMetaMessageOptions;
  };
};

export interface BlackListWhiteListConfig {
  whitelist?: string[];
  blacklist?: string[];
}

export interface MethodConfig {
  methods?: BlackListWhiteListConfig;
}

export interface ServiceConfig {
  client: Omit<GrpcClientConfig, 'logger'> & { address: string };
  [key: string]: any;
}

export interface SubSpaceServiceConfig extends ServiceConfig {
  root: boolean;
}

export type ServiceClient<Context extends Pick<Context, Key>, Key extends keyof Context, T extends Record<string, any>> = {
  [V in Key]: {
    client: T;
  };
};

export type FederatedSchemaWithResolvers = {
  federatedSchema: GraphQLSchema;
  resolvers: GraphQLResolverMap<any>;
};
