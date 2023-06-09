import { type GrpcClientConfig } from '@restorecommerce/grpc-client';
import { type FileDescriptorProto } from 'ts-proto-descriptors';
import { type GraphQLSchema, type GraphQLFieldResolver, type GraphQLScalarType } from 'graphql';

export interface GraphQLResolverMap<TContext = {}> {
  [typeName: string]:
  | {
    [fieldName: string]:
    | GraphQLFieldResolver<any, TContext, any>
    | {
      requires?: string;
      resolve: GraphQLFieldResolver<any, TContext, any>;
    };
  }
  | GraphQLScalarType
  | {
    [enumValue: string]: string | number;
  };
}


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

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
  options?: {
    options?: {
      [key: string]: any;
    };
    services?: {
      [key: string]: {
        options?: {
          [key: string]: any;
        };
        methods?: {
          [key: string]: {
            [key: string]: any;
          };
        };
      };
    };
    messages?: {
      [key: string]: ProtoMetaMessageOptions;
    };
    enums?: {
      [key: string]: {
        options?: {
          [key: string]: any;
        };
        values?: {
          [key: string]: {
            [key: string]: any;
          };
        };
      };
    };
  };
}

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
