import {
  GraphQLInputObjectType, GraphQLString,
  GraphQLEnumType, GraphQLObjectType
} from 'graphql';


const filterFields = () => ({
  field: {
    type: GraphQLString,
    description: 'Field names based on which the filtering needs to be done',
  },
  operation: {
    type: filterOperation,
    description: 'Filter Operation options',
  },
  value: {
    type: GraphQLString,
    description: 'Field value',
  },
  type: {
    type: fieldValue,
    description: 'Value type (optional, default is STRING)',
  }
});

export const FilterType = new GraphQLObjectType({
  name: 'FilterOpts',
  description: 'Filter options',
  fields: filterFields
});
export const inputFilterType = new GraphQLInputObjectType({
  name: 'FilterOptsInput',
  description: 'Filter options',
  fields: filterFields,
});

const filterOperation = new GraphQLEnumType({
  name: 'FilterOperation',
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


const fieldValue = new GraphQLEnumType({
  name: 'FilterFieldValue',
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
