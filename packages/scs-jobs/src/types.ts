import { type JobsOptions } from 'bullmq';

import {
  type Data,
  JobOptions_Priority as Priority,
  JobReadRequest_SortOrder as SortOrder,
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/job.js';

export {
  Data,
  Priority,
  SortOrder
};

export interface FilterOpts {
  id?: number | string;
  type?: string;
  data?: Data;
  opts?: JobsOptions;
  name?: string;
}

export interface KafkaOpts {
  id: number | string;
  type?: string;
  data?: Data;
  options?: JobsOptions;
  when?: string;
}

export interface JobType {
  id: number | string;
  type?: string;
  name?: string;
  data?: Data;
  when?: string;
  options?: JobsOptions;
  opts?: JobsOptions;
}

export interface NewJob {
  type: string;
  options: JobsOptions;
  when?: string;
  data: Data;
  id?: string; // mapped to jobId of bull
}
