import { MethodDescriptorProto, ServiceDescriptorProto } from 'ts-proto-descriptors';
import { ProtoMetadata, ServiceConfig, SubSpaceServiceConfig } from './types';
import {
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  ThunkObjMap,
  GraphQLInputObjectType, GraphQLEnumType
} from 'graphql';
import flat from 'array.prototype.flat';
import { getWhitelistBlacklistConfig, Mutate } from './graphql';
import { GraphQLFieldConfig, GraphQLFieldConfigArgumentMap, GraphQLFieldConfigMap } from 'graphql/type/definition';
import { capitalize, capitalizeProtoName, useSubscriptions } from './utils';
import { getTyping } from './registry';

const typeCache = new Map<string, GraphQLObjectType>();

const subscriptionAction = new GraphQLEnumType({
  name: 'SubscriptionAction',
  values: {
    CREATED: {value: 'CREATED'},
    UPDATED: {value: 'UPDATED'},
    DELETED: {value: 'DELETED'}
  }
});

const subscriptionInput: GraphQLFieldConfigArgumentMap = {
  action: {
    type: subscriptionAction
  }
};

const subscriptionOutput = new GraphQLObjectType({
  name: 'SubscriptionOutput',
  fields: {
    id: {
      type: GraphQLString
    }
  }
})

export const getGQLSchema = <TSource, TContext>
(method: MethodDescriptorProto): GraphQLFieldConfig<TSource, TContext> => {
  const fields: any = {}

  const responseTyping = getTyping(method.outputType!);
  if (!responseTyping) {
    throw Error('Method doesn\'t have registered typings: ' + method.outputType!);
  }

  if (method.outputType! !== '.google.protobuf.Empty') {
    fields['details'] = {
      type: responseTyping.output,
    }
  }

  const outName = 'Proto' + capitalizeProtoName(method.outputType!);

  let out = typeCache.get(outName);
  if (!out) {
    out = new GraphQLObjectType({
      name: outName,
      fields,
    });
    typeCache.set(outName, out);
  }

  const typing = getTyping(method.inputType!);
  if (!typing) {
    throw Error('Method doesn\'t have registered typings: ' + method.inputType!);
  }

  return {
    type: out,
    args: method.inputType! === '.google.protobuf.Empty' ? undefined : {
      input: {
        type: new GraphQLNonNull(typing.input!)
      }
    }
  }
}

export const getGQLSchemas = <TSource, TContext>(service: ServiceDescriptorProto): GraphQLFieldConfigMap<TSource, TContext> => {
  return service.method?.reduce((obj, method) => {
    obj[method.name!] = getGQLSchema(method);
    return obj;
  }, {} as any);
}

type SchemaBaseOrSub =
  ThunkObjMap<GraphQLFieldConfig<any, any>>
  | Map<string, ThunkObjMap<GraphQLFieldConfig<any, any>>>;
const namespaceResolverSchemaRegistry = new Map<string, Map<boolean, Map<string, SchemaBaseOrSub>>>();

const subscriptionFields: GraphQLFieldConfigMap<any, GraphQLFieldConfig<any, any>> = {};

export const registerResolverSchema = (namespace: string, name: string, schema: SchemaBaseOrSub, mutation: boolean = false, subspace: string | undefined = undefined, config: ServiceConfig) => {
  if (!namespaceResolverSchemaRegistry.has(namespace)) {
    namespaceResolverSchemaRegistry.set(namespace, new Map());
  }

  if ( subspace && (config as any)[subspace]) {
    const blacklistMethods = (config as any)[subspace].methods.blacklist;
    if (blacklistMethods.includes(name)) {
      return;
    }
  }

  if (!namespaceResolverSchemaRegistry.get(namespace)!.has(mutation)) {
    namespaceResolverSchemaRegistry.get(namespace)!.set(mutation, new Map());
  }

  let space = namespaceResolverSchemaRegistry.get(namespace)!.get(mutation)!;
  if (subspace) {
    if (!space.has(subspace)) {
      space.set(subspace, new Map());
    }
    space = space.get(subspace)! as Map<string, ThunkObjMap<GraphQLFieldConfig<any, any>>>;
  }

  if (space.has(name)) {
    if (subspace) {
      throw new Error(`Namespace "${namespace}"."${subspace}" already contains a schema: ${name} (mutation: ${mutation})`);
    } else {
      throw new Error(`Namespace "${namespace}" already contains a schema: ${name} (mutation: ${mutation})`);
    }
  }

  // register create, update and upsert with Mutate
  if (Mutate.indexOf(name) > -1) {
    name = 'Mutate';
  }
  space.set(name, schema);
}

export const generateSchema = (setup: { prefix: string, namespace: string }[]) => {
  const queryFields: GraphQLFieldConfigMap<any, any> = {};
  const mutationFields: GraphQLFieldConfigMap<any, any> = {};

  setup.forEach(s => {
    if (!namespaceResolverSchemaRegistry.has(s.namespace)) {
      throw new Error(`Namespace "${s.namespace}" has no registered schemas`)
    }

    if (namespaceResolverSchemaRegistry.get(s.namespace)!.has(false)) {
      const fields: GraphQLFieldConfigMap<any, any> = {};

      namespaceResolverSchemaRegistry.get(s.namespace)!.get(false)!.forEach((value, key) => {
        if (value instanceof Map) {
          const capitalName = capitalizeProtoName(key);
          fields[key] = {
            type: new GraphQLNonNull(new GraphQLObjectType({
              name: s.prefix + capitalName + 'Query',
              fields: Object.fromEntries(value) as unknown as GraphQLFieldConfigMap<any, any>,
            }))
          };
        } else {
          fields[key] = value as any;
        }
      });

      queryFields[s.namespace] = {
        type: new GraphQLNonNull(new GraphQLObjectType({
          name: s.prefix + 'Query',
          fields
        }))
      };
    }

    if (namespaceResolverSchemaRegistry.get(s.namespace)!.has(true)) {
      const fields: GraphQLFieldConfigMap<any, any> = {};

      namespaceResolverSchemaRegistry.get(s.namespace)!.get(true)!.forEach((value, key) => {
        if (value instanceof Map) {
          const capitalName = capitalizeProtoName(key);
          fields[key] = {
            type: new GraphQLNonNull(new GraphQLObjectType({
              name: s.prefix + capitalName + 'Mutation',
              fields: Object.fromEntries(value) as unknown as GraphQLFieldConfigMap<any, any>,
            }))
          };
        } else {
          fields[key] = value as any;
        }
      });

      mutationFields[s.namespace] = {
        type: new GraphQLNonNull(new GraphQLObjectType({
          name: s.prefix + 'Mutation',
          fields
        }))
      }
    }
  });

  const config: any = {};

  if (Object.keys(queryFields).length > 0) {
    config.query = new GraphQLObjectType({
      name: 'Query',
      fields: queryFields
    });
  }

  if (Object.keys(mutationFields).length > 0) {
    config.mutation = new GraphQLObjectType({
      name: 'Mutation',
      fields: mutationFields
    });
  }

  if (Object.keys(subscriptionFields).length > 0) {
    config.subscription = new GraphQLObjectType({
      name: 'Subscription',
      fields: subscriptionFields
    });
  }

  return new GraphQLSchema({
    ...config,
  });
}

export const generateSubServiceSchemas = (subServices: ProtoMetadata[], config: SubSpaceServiceConfig, namespace: string, prefix: string): GraphQLSchema => {
  subServices.forEach((meta) => {
    meta.fileDescriptor.service.forEach(service => {
      if (service.name) {
        // const subName = meta.options.services[service.name].options!['service_name'];
        const subName = service.name;
        const {mutations, queries} = getWhitelistBlacklistConfig(service, config, meta, subName)

        const schemas = getGQLSchemas(service);

        Object.keys(schemas).forEach(key => {
          registerResolverSchema(config.root ? subName : namespace, key, schemas[key] as any, !queries.has(key) && mutations.has(key), config.root ? undefined : subName, config)
        })
      }
    });

    if (useSubscriptions) {
      Object.entries(meta.options?.messages || {}).forEach(([messageName, option]) => {
        if (option.options && 'kafka_subscriber' in option.options) {
          const fieldName = namespace + capitalize(option.options.kafka_subscriber.plural);
          const typing = getTyping('.' + meta.fileDescriptor.package + '.' + messageName);

          if (typing) {
            subscriptionFields[fieldName] = {
              // TODO Implement user lookup
              // type: typing?.output!,
              type: subscriptionOutput,
              args: subscriptionInput
            }
          }
        }
      });
    }
  });

  if (config.root) {
    return generateSchema(flat(subServices.map(meta => {
      return meta.fileDescriptor.service.map(service => {
        if (meta.options && meta.options.services && meta.options.services[service.name]) {
          const subName = meta.options.services[service.name].options!['service_name'];

          return ({
            prefix: prefix + subName.substring(0, 1).toUpperCase() + subName.substring(1).toLowerCase(),
            namespace: subName
          } as any);
        }
        return null;
      }).filter(s => s !== null);
    })));
  }

  return generateSchema([{prefix, namespace}]);
}
