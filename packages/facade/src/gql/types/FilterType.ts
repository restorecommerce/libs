import {
  GraphQLInputObjectType, GraphQLString,
  GraphQLEnumType, GraphQLNonNull
} from 'graphql';


const FilterOperationEnumType = new GraphQLEnumType({
  name: 'FilterOperationEnumType',
  description: 'Filters the fields based on the operation specified',
  values: {
    lt: {
      value: 'lt',
      description: 'Filter fields lesser than the the specified value',
    },
    lte: {
      value: 'lte',
      description: 'Filter fields lesser than or equal to the the specified value',
    },
    gt: {
      value: 'gt',
      description: 'Filter fields greater than the the specified value',
    },
    gte: {
      value: 'gte',
      description: 'Filter fields greater than or equal to the the specified value',
    },
    eq: {
      value: 'eq',
      description: 'Filter fields exactly equal to the the specified value',
    },
    isEmpty: {
      value: 'isEmpty',
      description: 'Filter fields exactly equal to the the specified value',
    },
  }
});

const FilterFieldValueEnumType = new GraphQLEnumType({
  name: 'FilterFieldValueEnumType',
  description: '',
  values: {
    STRING: {
      value: 'string'
    },
    BOOLEAN: {
      value: 'boolean'
    },
    NUMBER: {
      value: 'number'
    },
    DATE: {
      value: 'date'
    }
  }
});

export const FilterOptionsInputType = new GraphQLInputObjectType({
  name: 'FilterOptionsInputType',
  description: 'Filter options',
  fields: {
    field: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Field names based on which the filtering needs to be done',
    },
    operation: {
      type: new GraphQLNonNull(FilterOperationEnumType),
      description: 'Filter Operation options',
    },
    value: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Field value',
    },
    type: {
      type: FilterFieldValueEnumType,
      description: 'Value type (optional, default is STRING)',
      defaultValue: 'string'
    }
  }
});
