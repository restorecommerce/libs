import {
  GraphQLInputObjectType, GraphQLString,
  GraphQLList
} from 'graphql';
import { jobTypes } from './JobType';

export const jobsFilterType = new GraphQLInputObjectType({
  name: 'JobFilterOpts',
  description: 'Jobs filter options',
  fields: () => ({
    type: {
      type: jobTypes,
      description: 'Job type',
    },
    job_ids: {
      type: new GraphQLList(GraphQLString)
    }
  }),
});
