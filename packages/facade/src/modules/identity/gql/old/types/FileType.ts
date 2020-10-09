import {
  GraphQLObjectType, GraphQLString} from 'graphql';
import * as _ from 'lodash';
import { ErrorListType } from './ErrorType';

const fields = {
  key: {
    type: GraphQLString
  },
  bucket: {
    type: GraphQLString
  },
  url:
  {
    type: GraphQLString
  },
  object: {
    type: GraphQLString
  }
};

export const outputFileType = new GraphQLObjectType({
  name: 'outputFileType',
  description: 'File output description',
  fields: () => (_.merge({}, fields, {
    error: {
      type: ErrorListType,
    }
  }))
});
