import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import * as _ from 'lodash';
import { ErrorType } from './ErrorType';
import { MetaType } from './MetaType';

export const FileList = new GraphQLObjectType({
  name: 'FileList',
  description: 'File list output type',
  fields: () => ({
    file_name: {
      type: GraphQLString
    },
    url:
    {
      type: GraphQLString
    },
    meta: {
      type: MetaType,
      description: 'Meta info'
    }
  })
});

export const outputFileListType = new GraphQLObjectType({
  name: 'outputFileListType',
  description: 'File List',
  fields: () => ({
    details: {
      type: new GraphQLList(FileList),
    },
    error: {
      type: ErrorType,
    },
  }),
});
