/* eslint-disable */
import { Subject, ApiKey } from '../../io/restorecommerce/auth';
import { Any } from '../../google/protobuf/any';
import { Meta } from '../../io/restorecommerce/meta';
import { FieldFilter, DeleteRequest } from '../../io/restorecommerce/resource_base';
import { Empty } from '../../google/protobuf/empty';
import { Writer, Reader } from 'protobufjs/minimal';


/**
 * *
 *  A Kafka event.
 *  Send when a job resource got deleted.
 */
export interface Deleted {
  id: string;
}

/**
 * *
 *  A list of jobs.
 */
export interface JobList {
  items: Job[];
  totalCount: number;
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
}

/**
 * *
 *  A Job resource
 */
export interface Job {
  /**
   *  Job ID
   */
  id: string;
  /**
   *  Job type
   */
  type: string;
  /**
   *  Job-specific data with variable payload
   */
  data?: Data;
  /**
   *  Used to specify the time at which the job is run
   */
  when: string;
  /**
   *  The job options
   */
  options?: JobOptions;
}

/**
 * *
 *  Job Options
 */
export interface JobOptions {
  /**
   *  Job priority
   */
  priority: JobOptions_Priority;
  /**
   *  Amount of possible failing runs until job fails
   */
  attempts: number;
  /**
   *  Delay settings between failed job runs
   */
  backoff?: Backoff;
  /**
   *  The timeout of the job
   */
  timeout: number;
  /**
   *  Used for periodic jobs
   */
  repeat?: Repeat;
}

export interface Repeat {
  every: number;
  cron: string;
  startDate: string;
  endDate: string;
  count: number;
}

/**
 *  Data which is stored within a job instance
 */
export interface Data {
  timezone: string;
  /**
   *  optional variable payload
   */
  payload?: Any;
  meta?: Meta;
  /**
   *  id of job creator
   */
  subjectId: string;
}

/**
 * *
 *  A scheduled Job.
 *  Emitted to Kafka by the scheduling service with event name 'queuedJob' and retreived by a service which processes this job.
 */
export interface ScheduledJob {
  /**
   *  Job instance ID
   */
  id: string;
  type: string;
  /**
   *  Job-specific data with variable payload
   */
  data?: Data;
  /**
   *  Type of schedule (ONCE, RECURR, etc)
   */
  scheduleType: string;
}

/**
 * *
 *  A finished scheduled Job.
 *  Emitted to Kafka by the service which processed the job with event name 'done' and retrieved by the scheduling service.
 */
export interface JobDone {
  /**
   *  Job instance ID
   */
  id: string;
  /**
   *  Type of schedule (ONCE, RECURR, etc)
   */
  scheduleType: string;
  /**
   *  Whether to delete scheduled job
   */
  deleteScheduled: boolean;
  /**
   *  Job type
   */
  type: string;
  result?: Any;
}

/**
 * *
 *  A failed scheduled Job event from the Job Service.
 *  Emitted to Kafka by the service which processed the Job and retrieved by the scheduling service.
 */
export interface JobFailed {
  /**
   *  Job instance ID
   */
  id: string;
  /**
   *  Error message
   */
  error: string;
  /**
   *  Type of job ex: ONCE, RECURR etc.
   */
  scheduleType: string;
  /**
   *  Job type
   */
  type: string;
}

/**
 * *
 *  Delay between retries.
 */
export interface Backoff {
  /**
   *  Time until retry in milliseconds
   */
  delay: number;
  /**
   *  Calculation of the delay
   */
  type: Backoff_Type;
}

/**
 *  Job-specific read request
 */
export interface JobReadRequest {
  limit: number;
  sort: JobReadRequest_SortOrder;
  /**
   *  Filter based on fieldName|operation, value|list
   */
  filter?: JobFilter;
  /**
   *  Fields selector
   */
  field: FieldFilter[];
  subject?: Subject | undefined;
  apiKey?: ApiKey | undefined;
}

/**
 *  filter
 */
export interface JobFilter {
  jobIds: string[];
  type: string;
}

const baseDeleted: object = {
  id: "",
};

const baseJobList: object = {
  totalCount: 0,
};

const baseJob: object = {
  id: "",
  type: "",
  when: "",
};

const baseJobOptions: object = {
  priority: 0,
  attempts: 0,
  timeout: 0,
};

const baseRepeat: object = {
  every: 0,
  cron: "",
  startDate: "",
  endDate: "",
  count: 0,
};

const baseData: object = {
  timezone: "",
  subjectId: "",
};

const baseScheduledJob: object = {
  id: "",
  type: "",
  scheduleType: "",
};

const baseJobDone: object = {
  id: "",
  scheduleType: "",
  deleteScheduled: false,
  type: "",
};

const baseJobFailed: object = {
  id: "",
  error: "",
  scheduleType: "",
  type: "",
};

const baseBackoff: object = {
  delay: 0,
  type: 0,
};

const baseJobReadRequest: object = {
  limit: 0,
  sort: 0,
};

const baseJobFilter: object = {
  jobIds: "",
  type: "",
};

/**
 * *
 *  The microservice for scheduling jobs.
 *  Provides CRUD operations.
 */
export interface Service {

  Read(request: JobReadRequest): Promise<JobList>;

  Create(request: JobList): Promise<JobList>;

  Delete(request: DeleteRequest): Promise<Empty>;

  Update(request: JobList): Promise<JobList>;

  Upsert(request: JobList): Promise<JobList>;

}

export enum JobOptions_Priority {
  NORMAL = 0,
  LOW = 10,
  MEDIUM = -5,
  HIGH = -10,
  CRITICAL = -15,
  UNRECOGNIZED = -1,
}

export enum Backoff_Type {
  /** FIXED -  Retry with the same delay
   */
  FIXED = 0,
  /** EXPONENTIAL -  Exponential delay increase between retries
   */
  EXPONENTIAL = 1,
  UNRECOGNIZED = -1,
}

/**  only possible to sort jobs by creation date
 */
export enum JobReadRequest_SortOrder {
  UNSORTED = 0,
  ASCENDING = 1,
  DESCENDING = 2,
  UNRECOGNIZED = -1,
}

export const Deleted = {
  encode(message: Deleted, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Deleted {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleted } as Deleted;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const JobList = {
  encode(message: JobList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      Job.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(16).uint32(message.totalCount);
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): JobList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseJobList } as JobList;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Job.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalCount = reader.uint32();
          break;
        case 3:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        case 4:
          message.apiKey = ApiKey.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const Job = {
  encode(message: Job, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    writer.uint32(90).string(message.type);
    if (message.data !== undefined && message.data !== undefined) {
      Data.encode(message.data, writer.uint32(98).fork()).ldelim();
    }
    writer.uint32(170).string(message.when);
    if (message.options !== undefined && message.options !== undefined) {
      JobOptions.encode(message.options, writer.uint32(242).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Job {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseJob } as Job;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 11:
          message.type = reader.string();
          break;
        case 12:
          message.data = Data.decode(reader, reader.uint32());
          break;
        case 21:
          message.when = reader.string();
          break;
        case 30:
          message.options = JobOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const JobOptions = {
  encode(message: JobOptions, writer: Writer = Writer.create()): Writer {
    writer.uint32(104).int32(message.priority);
    writer.uint32(112).uint32(message.attempts);
    if (message.backoff !== undefined && message.backoff !== undefined) {
      Backoff.encode(message.backoff, writer.uint32(122).fork()).ldelim();
    }
    writer.uint32(128).uint32(message.timeout);
    if (message.repeat !== undefined && message.repeat !== undefined) {
      Repeat.encode(message.repeat, writer.uint32(162).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): JobOptions {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseJobOptions } as JobOptions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 13:
          message.priority = reader.int32() as any;
          break;
        case 14:
          message.attempts = reader.uint32();
          break;
        case 15:
          message.backoff = Backoff.decode(reader, reader.uint32());
          break;
        case 16:
          message.timeout = reader.uint32();
          break;
        case 20:
          message.repeat = Repeat.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const Repeat = {
  encode(message: Repeat, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint32(message.every);
    writer.uint32(18).string(message.cron);
    writer.uint32(26).string(message.startDate);
    writer.uint32(34).string(message.endDate);
    writer.uint32(40).uint32(message.count);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Repeat {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRepeat } as Repeat;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.every = reader.uint32();
          break;
        case 2:
          message.cron = reader.string();
          break;
        case 3:
          message.startDate = reader.string();
          break;
        case 4:
          message.endDate = reader.string();
          break;
        case 5:
          message.count = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const Data = {
  encode(message: Data, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.timezone);
    if (message.payload !== undefined && message.payload !== undefined) {
      Any.encode(message.payload, writer.uint32(18).fork()).ldelim();
    }
    if (message.meta !== undefined && message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(34).string(message.subjectId);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Data {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseData } as Data;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timezone = reader.string();
          break;
        case 2:
          message.payload = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.meta = Meta.decode(reader, reader.uint32());
          break;
        case 4:
          message.subjectId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const ScheduledJob = {
  encode(message: ScheduledJob, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    writer.uint32(18).string(message.type);
    if (message.data !== undefined && message.data !== undefined) {
      Data.encode(message.data, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(34).string(message.scheduleType);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ScheduledJob {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseScheduledJob } as ScheduledJob;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.type = reader.string();
          break;
        case 3:
          message.data = Data.decode(reader, reader.uint32());
          break;
        case 4:
          message.scheduleType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const JobDone = {
  encode(message: JobDone, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    writer.uint32(18).string(message.scheduleType);
    writer.uint32(24).bool(message.deleteScheduled);
    writer.uint32(34).string(message.type);
    if (message.result !== undefined && message.result !== undefined) {
      Any.encode(message.result, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): JobDone {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseJobDone } as JobDone;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.scheduleType = reader.string();
          break;
        case 3:
          message.deleteScheduled = reader.bool();
          break;
        case 4:
          message.type = reader.string();
          break;
        case 5:
          message.result = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const JobFailed = {
  encode(message: JobFailed, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    writer.uint32(18).string(message.error);
    writer.uint32(26).string(message.scheduleType);
    writer.uint32(34).string(message.type);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): JobFailed {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseJobFailed } as JobFailed;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.error = reader.string();
          break;
        case 3:
          message.scheduleType = reader.string();
          break;
        case 4:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const Backoff = {
  encode(message: Backoff, writer: Writer = Writer.create()): Writer {
    writer.uint32(9).double(message.delay);
    writer.uint32(16).int32(message.type);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Backoff {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBackoff } as Backoff;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delay = reader.double();
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const JobReadRequest = {
  encode(message: JobReadRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint32(message.limit);
    writer.uint32(16).int32(message.sort);
    if (message.filter !== undefined && message.filter !== undefined) {
      JobFilter.encode(message.filter, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.field) {
      FieldFilter.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(42).fork()).ldelim();
    }
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): JobReadRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseJobReadRequest } as JobReadRequest;
    message.field = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.limit = reader.uint32();
          break;
        case 2:
          message.sort = reader.int32() as any;
          break;
        case 4:
          message.filter = JobFilter.decode(reader, reader.uint32());
          break;
        case 3:
          message.field.push(FieldFilter.decode(reader, reader.uint32()));
          break;
        case 5:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        case 6:
          message.apiKey = ApiKey.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const JobFilter = {
  encode(message: JobFilter, writer: Writer = Writer.create()): Writer {
    for (const v of message.jobIds) {
      writer.uint32(10).string(v!);
    }
    writer.uint32(18).string(message.type);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): JobFilter {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseJobFilter } as JobFilter;
    message.jobIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.jobIds.push(reader.string());
          break;
        case 2:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};
