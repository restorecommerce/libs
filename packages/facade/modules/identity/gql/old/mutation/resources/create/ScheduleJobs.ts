import { GraphQLString, GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { errors } from '../../../config';
import { jobType } from '../../../types/JobType';
import tryRequest, { parseResourceList } from '../../../iam/resolver';
import logger from '../../../logger';
import { builder } from '../../../builder';
import { ErrorType } from '../../../types/ErrorType';

export default mutationWithClientMutationId({
  name: 'ScheduleJob',
  inputFields: {
    listOfJobs: {
      type: new GraphQLList(jobType),
    },
  },
  mutateAndGetPayload: async ({ listOfJobs }, ctx: RestoreCommerceContext) => {
    listOfJobs = parseResourceList(listOfJobs, 'create', 'job', ctx);
    return tryRequest('create', listOfJobs, ctx, async () => {
      const output = {
        status: '',
        error: {
          code: [],
          message: []
        }
      };

      let job = [];
      let i = 0;

      for (let resource of listOfJobs) {
        job[i] = resource.instance;
        try {
          if (job[i].data && job[i].data.payload) {
            // marshalling data for google.protobuf.Any
            const stringified = JSON.stringify(job[i].data.payload);
            const encodedValue = Buffer.from(stringified);
            job[i].data.payload = {
              type_url: '',
              value: encodedValue
            };
          }

          if (job[i].when) {
            // when can be date string ex: Jan 15, 2018 10:30:00
            job[i].when = new Date(job[i].when).toISOString();
          }
          i += 1;
        } catch (err) {
          logger.error(err);
          output.error.code.push(errors.INVALID_JOB_DATA.code);
          output.error.message.push(err.message || errors.INVALID_JOB_DATA.message);
        }
      }

      // To convert pseudo object to object
      // let jobStr = JSON.stringify(job);
      // job = JSON.parse(jobStr);
      logger.info('The job sent to create method is :', JSON.stringify(job));

      const jobsTopic = builder.getTopic('jobs');
      await jobsTopic.emit('createJobs', { items: job });

      output.status = 'Jobs scheduled successfully';

      return output;
    });
  },
  outputFields: {
    status: {
      type: GraphQLString,
      resolve: ({ status }) => status
    },
    error: {
      type: ErrorType,
      resolve: ({ error }) => error
    }
  },
});

