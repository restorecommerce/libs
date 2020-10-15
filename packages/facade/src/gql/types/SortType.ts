import { GraphQLInputObjectType, GraphQLString, GraphQLEnumType, GraphQLNonNull } from 'graphql';

export const SortEnumType = new GraphQLEnumType({
  name: 'SortEnumType',
  description: 'Sorts the fields in either Ascending or Descending order',
  values: {
    ASC: {
      value: 1,
      description: 'Sort in Ascending order',
    },
    DESC: {
      value: 2,
      description: 'Sort in Descending order',
    },
  }
});

export const SortInputType =  new GraphQLInputObjectType({
  name: 'SortInputType',
  description: 'For sotring based on fileds',
  fields: () => ({
    field: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Field names to be sorted on',
    },
    order: { // 1 for Ascending and 2 for Descending
      type: SortEnumType,
      description: 'Sorting Options',
      defaultValue: 1
    },
  }),
});
