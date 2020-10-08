import {
  GraphQLInputObjectType, GraphQLObjectType, GraphQLEnumType,
  GraphQLString, GraphQLList
} from 'graphql';
import { ErrorListType } from './ErrorType';
import { GraphQLJSON } from 'graphql-type-json';
import { MetaType } from './MetaType';
import { parseCommandParameterProperties } from '../utils';
import { InputAttribute } from './AccessControlTypes';

export const CommandUpdateInputType = new GraphQLInputObjectType({
  name: 'CommandUpdateInputType',
  description: 'Generic command resource.',
  fields: () => ({
    name: {
      type: GraphQLString,
      description: 'Command name.',
    },
    parameters: {
      type: new GraphQLList(CommandInputParameter),
      description: 'Command-specific parameters.',
    },
    description: {
      type: GraphQLString,
      description: 'Command description.',
    }
  }),
});


export const CommandInputType = new GraphQLInputObjectType({
  name: 'CommandInputType',
  description: 'Generic command resource.',
  fields: () => ({
    name: {
      type: GraphQLString,
      description: 'Command name.',
    },
    parameters: {
      type: new GraphQLList(CommandInputParameter),
      description: 'Command-specific parameters.',
    },
    description: {
      type: GraphQLString,
      description: 'Command description.',
    },
    owner: {
      type: new GraphQLList(InputAttribute)
    }
  }),
});

export const CommandType = new GraphQLObjectType({
  name: 'CommandType',
  description: 'Generic command resource.',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'Command resource ID.',
    },
    meta: {
      type: MetaType,
      description: 'Meta info'
    },
    name: {
      type: GraphQLString,
      description: 'Command name.',
    },
    parameters: {
      type: new GraphQLList(CommandParameter),
      description: 'Command-specific parameters.',
    },
    description: {
      type: GraphQLString,
      description: 'Command description.',
    }
  }),
});

export const outputCommandType = new GraphQLObjectType({
  name: 'outputCommandType',
  description: ' commands output description',
  fields: () => ({
    details: {
      type: new GraphQLList(CommandType),
    },
    error: {
      type: ErrorListType,
    },
  }),
});

export const CommandInputParameter = new GraphQLInputObjectType({
  name: 'CommandInputParameter',
  description: 'A parameter of a system command.',
  fields: () => ({
    field: {
      type: GraphQLString,
      description: 'Command field.',
    },
    description: {
      type: GraphQLString,
      description: 'Field description',
    },
    type: {
      type: CommandParameterFieldType,
      description: 'Field data type'
    },
    properties: {
      type: GraphQLJSON,
      description: 'Nested parameters for `object_value`'
    }
  }),
});

export const CommandParameter = new GraphQLObjectType({
  name: 'CommandParameter',
  description: 'A parameter of a system command.',
  fields: () => ({
    field: {
      type: GraphQLString,
      description: 'Command field.',
    },
    description: {
      type: GraphQLString,
      description: 'Field description',
    },
    type: {
      type: CommandParameterFieldType,
      description: 'Field data type'
    },
    properties: {
      type: GraphQLJSON,
      description: 'Nested parameters for `object_value`',
      resolve: ({ properties }) => parseCommandParameterProperties(properties)
    }
  }),
});

export const CommandParameterFieldType = new GraphQLEnumType({
  name: 'CommandParameterFieldType',
  values: {
    boolean_value: {
      value: 'boolean_value'
    },
    object_value: {
      value: 'object_value'
    },
    array_value: {
      value: 'array_value'
    },
    number_value: {
      value: 'number_value'
    },
    string_value: {
      value: 'string_value'
    },
  }
});
