import { JobsOptions } from 'bullmq';

import { Data } from '../rc-grpc-clients/dist/generated-server/io/restorecommerce/job';

export enum Priority {
  NORMAL = 100,
  LOW = 1000,
  MEDIUM = 50,
  HIGH = 25,
  CRITICAL = 1,
}

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

export enum SortOrder {
  ASCENDING = 'ASCENDING',
  DESCENDING = 'DESCENDING',
}
