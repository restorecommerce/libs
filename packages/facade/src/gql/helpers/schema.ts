import { GraphQLBoolean, GraphQLFieldConfig, GraphQLFloat, GraphQLID, GraphQLInputObjectType, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLOutputType } from 'graphql';
import { StatusType, FilterOptionsInputType, SortInputType, ScopeInputType } from '../types/index';

const capitalize = (s: string) => {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export interface OutputWithStatusTypeArgs {
  name: string;
  description: string;
  payloadType: GraphQLOutputType;
}

export function createSchemaOutputWithStatusType({ name, description, payloadType }: OutputWithStatusTypeArgs) {
  return new GraphQLObjectType({
    name,
    description,
    fields: () => ({
      payload: {
        type: payloadType,
      },
      status: {
        type: new GraphQLNonNull(StatusType),
      },
    }),
  });
}

export interface ReadResourcesFieldArgs {
  resourceName: string;
  outputType: GraphQLObjectType;
}

export function createSchemaReadResourcesField({resourceName, outputType}: ReadResourcesFieldArgs): GraphQLFieldConfig<any, any> {
  return {
    type: createSchemaOutputWithStatusType({
      name: "Read" + capitalize(resourceName),
      description: 'TODO',
      payloadType: new GraphQLList(new GraphQLNonNull(outputType))
    }),
    args: {
      input: {
        type: new GraphQLNonNull(new GraphQLInputObjectType({
          name: "ReadResources" + capitalize(resourceName) + 'Input',
          fields: {
            limit: { type: GraphQLInt },
            offset: { type: GraphQLInt },
            filter: { type: new GraphQLList(new GraphQLNonNull(FilterOptionsInputType)) },
            sort: { type: SortInputType },
            scope: { type: ScopeInputType }
          }
        })),
      }
    },
  }
}

export interface CreateSchemaCreateResourcesFieldArgs {
  resourceName: string;
  inputType: GraphQLInputObjectType;
  outputType: GraphQLObjectType;
}

export function createSchemaCreateResourcesField({resourceName, inputType, outputType}: CreateSchemaCreateResourcesFieldArgs): GraphQLFieldConfig<any, any> {
  return {
    type: createSchemaOutputWithStatusType({
      name: "CreateResources" + capitalize(resourceName),
      description: 'TODO',
      payloadType: new GraphQLList(new GraphQLNonNull(outputType))
    }),
    args: {
      input: {
        type: new GraphQLNonNull(new GraphQLInputObjectType({
          name: "CreateResources" + capitalize(resourceName) + 'Input',
          fields: {
            items: {
              type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(inputType)))
            }
          }
        }))
      }
    },
  }
}

export interface CreateSchemaDeleteResourcesFieldArgs {
  resourceName: string;
}

export function createSchemaDeleteResourcesField({resourceName}: CreateSchemaDeleteResourcesFieldArgs): GraphQLFieldConfig<any, any> {
  return {
    type: createSchemaOutputWithStatusType({
      name: "DeleteResources" + capitalize(resourceName),
      description: 'TODO',
      payloadType: GraphQLBoolean
    }),
    args: {
      input: {
        type: new GraphQLNonNull(new GraphQLInputObjectType({
          name: 'DeleteResources' + capitalize(resourceName) + 'Input',
          fields: {
            ids: {
              type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(GraphQLID)))
            }
          }
        }))
      }
    },
  }
}

export interface CreateSchemaUpdateResourcesFieldArgs {
  resourceName: string;
  inputType: GraphQLInputObjectType;
  outputType: GraphQLObjectType;
}

export function createSchemaUpdateResourcesField({resourceName, inputType, outputType}: CreateSchemaUpdateResourcesFieldArgs): GraphQLFieldConfig<any, any> {
  return {
    type: createSchemaOutputWithStatusType({
      name: "UpdateResources" + capitalize(resourceName),
      description: 'TODO',
      payloadType: new GraphQLList(new GraphQLNonNull(outputType))
    }),
    args: {
      input: {
        type: new GraphQLNonNull(new GraphQLInputObjectType({
          name: "UpdateResources" + capitalize(resourceName) + 'Input',
          fields: {
            items: {
              type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(inputType)))
            }
          }
        }))
      }
    },
  }
}

export interface CreateSchemaCRUDFieldsArgs {
  resourceName: string;
  create: {
    fn: string;
    inputType: GraphQLInputObjectType;
    outputType: GraphQLObjectType;
  },
  read: {
    fn: string;
    outputType: GraphQLObjectType;
  },
  update: {
    fn: string;
    inputType: GraphQLInputObjectType;
    outputType: GraphQLObjectType;
  },
  delete: {
    fn: string;
  }
}

export function createSchemaCRUDFields(args: CreateSchemaCRUDFieldsArgs) {
  return {
    queryFields: {
      [args.read.fn]: createSchemaReadResourcesField({resourceName: args.resourceName, outputType: args.read.outputType })
    },
    mutationFields: {
      [args.create.fn]: createSchemaCreateResourcesField({resourceName: args.resourceName, inputType: args.create.inputType, outputType: args.create.outputType }),
      [args.update.fn]: createSchemaUpdateResourcesField({resourceName: args.resourceName, inputType: args.create.inputType, outputType: args.create.outputType }),
      [args.delete.fn]: createSchemaDeleteResourcesField({resourceName: args.resourceName})
    }
  }
}
