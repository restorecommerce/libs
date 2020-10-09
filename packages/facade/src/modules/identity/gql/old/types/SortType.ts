import { GraphQLInputObjectType, GraphQLString, GraphQLEnumType } from 'graphql';

export const sortType =  new GraphQLInputObjectType({
  name: 'SortOpts',
  description: 'For sotring based on fileds',
  fields: () => ({
    field: {
      type: GraphQLString,
      description: 'Field names to be sorted on',
    },
    order: { // 1 for Ascending and 2 for Descending
      type: sortEnum,
      description: 'Sorting Options',
    },
  }),
});

export const sortEnum = new GraphQLEnumType({
  name: 'SortingOrder',
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
