import * as _ from 'lodash';
import { EndpointHandler } from '../EndpointHandler';
import logger from '../logger';
import { errors } from '../config';

export const getAllScheduledJobs = async (args) => {
  const { filter, limit, sort } = args;
  const service = new EndpointHandler('job').getResourceService();
  const result = await service.read({
    filter, limit, sort
  });

  if (result.error) {
    logger.error('Error while retrieving schedules jobs', { error: result.error });
    if (result.error && result.error.name) {
      if (errors[result.error.name]) {
        return {
          error: {
            code: [errors[result.error.name].code],
            message: [errors[result.error.name].message],
          }
        };
      } else {
        return {
          error: {
            code: [errors.SYSTEM_ERROR.code],
            message: [errors.SYSTEM_ERROR.message],
          }
        };
      }
    }
  }
  return {
    details: _.map(result.data.items, (job) => {
      if (job.data && job.data.payload && job.data.payload.value) {
        job.data.payload = JSON.parse(job.data.payload.value.toString());
      }
      if (!_.isNil(job.now)) {
        delete job.now;
      }

      if (!_.isNil(JobPriority[job.priority])) {
        job.priority = JobPriority[job.priority];
      }
      return job;
    })
  };
};

const JobPriority = {
  NORMAL: 0,
  LOW: 10,
  MEDIUM: -5,
  HIGH: -10,
  CRITICAL: -15
};
