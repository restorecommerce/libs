import {
  GraphQLInputObjectType, GraphQLString, GraphQLInt, GraphQLObjectType,
  GraphQLEnumType, GraphQLList, GraphQLBoolean
} from 'graphql';
import { ErrorListType } from './ErrorType';
import { GraphQLJSON } from 'graphql-type-json';
import { MetaType } from './MetaType';
import { unmarshalAny } from '../utils';

export const jobType = new GraphQLInputObjectType({
  name: 'JobScheduler',
  description: 'to schedule a job to Scheduling Service',
  fields: () => ({
    type: {
      type: jobTypes,
      description: 'Job type',
    },
    data: {
      type: jobData,
      description: 'Job data to be stored (timezone, meta info and job-specific payload data)',
    },
    priority: { // 10 for LOW and -15 for critical
      type: jobPriority,
      description: 'job priority options',
    },
    attempts: {
      type: GraphQLInt,
      description: 'amount of possible failing runs until job fails',
    },
    backoff: {
      type: backOffType,
      description: 'delay settings between failed job runs',
    },
    parallel: {
      type: GraphQLInt,
      description: 'number of parallel jobs to run, default is 1',
    },
    interval: {
      type: GraphQLString,
      description: 'Runs a given job instance every after a given human-readable interval'
        + ' like `2 seconds`',
    },
    when: {
      type: GraphQLString,
      description: 'Can be either a date instance or a human-readable string '
        + 'like `tomorrow at 5am` or `2 seconds from now` ',
    },
    now: {
      type: GraphQLBoolean,
      description: 'If true the job is scheduled immediately',
    }
  }),
});

const jobPriority = new GraphQLEnumType({
  name: 'JobPriority',
  description: 'the priority of the job to be scheduled',
  values: {
    NORMAL: {
      value: 0,
      description: 'normal priority',
    },
    LOW: {
      value: 10,
      description: 'low priority',
    },
    MEDIUM: {
      value: -5,
      description: 'medium priority',
    },
    HIGH: {
      value: -10,
      description: 'high priority',
    },
    CRITICAL: {
      value: -15,
      description: 'critical priority',
    },
  }
});

export const jobTypes = new GraphQLEnumType({
  name: 'JobTypes',
  description: 'the type of the job',
  values: {
    FLUSH_PENDING_NOTIFICATIONS_JOB: {
      value: 'flushPendingNotificationsJob',
      description: 'Job to flush any pending notification'
    },
    FULFILLMENT_TRACKING_JOB: {
      value: 'fulfillmentTrackingJob',
      description: 'Job to track fulfillments'
    }
  }
});

const jobData = new GraphQLInputObjectType({
  name: 'JobData',
  description: 'payload data for the job',
  fields: () => ({
    timezone: {
      type: GraphQLString,
      description: 'timezone ex: Europe/Amsterdam',
    },
    payload: {
      type: GraphQLJSON,
      description: 'payload for the job depends on the job type',
    },
  }),
});

const jobDataOutput = new GraphQLObjectType({
  name: 'JobDataOutputType',
  description: 'timezone and payload data for the job',
  fields: () => ({
    timezone: {
      type: GraphQLString,
      description: 'timezone ex: Europe/Berlin',
    },
    payload: {
      type: GraphQLJSON,
      description: 'Payload of any data type',
      resolve: ({ payload }) => unmarshalAny(payload)
    },
    meta: {
      type: MetaType,
      description: 'Meta info'
    },
  }),
});

const backOffEnumType = new GraphQLEnumType({
  name: 'BackOffEnum',
  description: 'backOff enum type',
  values: {
    FIXED: {
      value: 0,
      description: 'retry with same delay',
    },
    EXPONENTIAL: {
      value: 1,
      description: 'retry with exponential delay',
    },
  }
});

const backOffType = new GraphQLInputObjectType({
  name: 'BackOff',
  description: 'Delay between retries',
  fields: () => ({
    type: {
      type: backOffEnumType,
      description: 'Fixed or Exponential delay',
    },
    delay: {
      type: GraphQLInt,
      description: 'time until retry in milliseconds',
    },
  }),
});

export const outputJobList = new GraphQLObjectType({
  name: 'JobsList',
  description: 'jobs list output type',
  fields: () => ({
    details: {
      type: new GraphQLList(outputJobType),
    },
    error: {
      type: ErrorListType,
    },
  }),
});

export const outputJobType = new GraphQLObjectType({
  name: 'Jobs',
  description: 'job output type',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'Job ID (auto-generated)',
    },
    type: {
      type: jobTypes,
      description: 'Job type',
    },
    data: {
      type: jobDataOutput,
      description: 'Job data to be stored (timezone, meta info and job-specific payload data)',
    },
    priority: {
      type: jobPriority,
      description: 'job priority options',
    },
    attempts: {
      type: GraphQLInt,
      description: 'amount of possible failing runs until job fails',
    },
    interval: {
      type: GraphQLString,
      description: 'Runs a given job instance every after a given human-readable interval'
        + ' like `2 seconds`',
    },
    when: {
      type: GraphQLString,
      description: 'Can be either a date instance or a human-readable string '
        + 'like `tomorrow at 5am` or `2 seconds from now` ',
    },
  }),
});
