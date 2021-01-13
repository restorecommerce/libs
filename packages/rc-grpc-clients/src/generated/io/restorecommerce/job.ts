/* eslint-disable */
import { Subject } from '../../io/restorecommerce/auth';
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
  subject?: Subject;
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
  subject?: Subject;
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

export interface MetaBase {
  readonly kind: 'object' | 'array' | 'map' | 'union' | 'builtin';
}

export interface MetaMessage extends MetaBase {
  readonly kind: 'object';
  readonly type: string;
  readonly name: string;
}

export interface MetaArray extends MetaBase {
  readonly kind: 'array';
  readonly type: MetaBase | string;
}

export interface MetaMap extends MetaBase {
  readonly kind: 'map';
  readonly key: string;
  readonly value: MetaBase | string;
}

export interface MetaUnion extends MetaBase {
  readonly kind: 'union';
  readonly choices: Array<MetaBase | string | undefined>;
}

export interface MetaService<T, R> {
  readonly request: MetaMessage;
  readonly response: MetaMessage;
  readonly clientStreaming: boolean;
  readonly serverStreaming: boolean;
  readonly encodeRequest?: (message: T, writer: Writer) => Writer;
  readonly decodeResponse?: (input: Uint8Array | Reader, length?: number) => R;
}

export interface MetaPrimitive extends MetaBase {
  readonly kind: 'builtin';
  readonly type: string;
  readonly original: string;
}

export const protobufPackage = 'io.restorecommerce.job'

export enum JobOptions_Priority {
  NORMAL = 0,
  LOW = 10,
  MEDIUM = -5,
  HIGH = -10,
  CRITICAL = -15,
  UNRECOGNIZED = -1,
}

export function jobOptions_PriorityFromJSON(object: any): JobOptions_Priority {
  switch (object) {
    case 0:
    case "NORMAL":
      return JobOptions_Priority.NORMAL;
    case 10:
    case "LOW":
      return JobOptions_Priority.LOW;
    case -5:
    case "MEDIUM":
      return JobOptions_Priority.MEDIUM;
    case -10:
    case "HIGH":
      return JobOptions_Priority.HIGH;
    case -15:
    case "CRITICAL":
      return JobOptions_Priority.CRITICAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return JobOptions_Priority.UNRECOGNIZED;
  }
}

export function jobOptions_PriorityToJSON(object: JobOptions_Priority): string {
  switch (object) {
    case JobOptions_Priority.NORMAL:
      return "NORMAL";
    case JobOptions_Priority.LOW:
      return "LOW";
    case JobOptions_Priority.MEDIUM:
      return "MEDIUM";
    case JobOptions_Priority.HIGH:
      return "HIGH";
    case JobOptions_Priority.CRITICAL:
      return "CRITICAL";
    default:
      return "UNKNOWN";
  }
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

export function backoff_TypeFromJSON(object: any): Backoff_Type {
  switch (object) {
    case 0:
    case "FIXED":
      return Backoff_Type.FIXED;
    case 1:
    case "EXPONENTIAL":
      return Backoff_Type.EXPONENTIAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Backoff_Type.UNRECOGNIZED;
  }
}

export function backoff_TypeToJSON(object: Backoff_Type): string {
  switch (object) {
    case Backoff_Type.FIXED:
      return "FIXED";
    case Backoff_Type.EXPONENTIAL:
      return "EXPONENTIAL";
    default:
      return "UNKNOWN";
  }
}

/**  only possible to sort jobs by creation date
 */
export enum JobReadRequest_SortOrder {
  UNSORTED = 0,
  ASCENDING = 1,
  DESCENDING = 2,
  UNRECOGNIZED = -1,
}

export function jobReadRequest_SortOrderFromJSON(object: any): JobReadRequest_SortOrder {
  switch (object) {
    case 0:
    case "UNSORTED":
      return JobReadRequest_SortOrder.UNSORTED;
    case 1:
    case "ASCENDING":
      return JobReadRequest_SortOrder.ASCENDING;
    case 2:
    case "DESCENDING":
      return JobReadRequest_SortOrder.DESCENDING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return JobReadRequest_SortOrder.UNRECOGNIZED;
  }
}

export function jobReadRequest_SortOrderToJSON(object: JobReadRequest_SortOrder): string {
  switch (object) {
    case JobReadRequest_SortOrder.UNSORTED:
      return "UNSORTED";
    case JobReadRequest_SortOrder.ASCENDING:
      return "ASCENDING";
    case JobReadRequest_SortOrder.DESCENDING:
      return "DESCENDING";
    default:
      return "UNKNOWN";
  }
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
  fromJSON(object: any): Deleted {
    const message = { ...baseDeleted } as Deleted;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Deleted>): Deleted {
    const message = { ...baseDeleted } as Deleted;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
  toJSON(message: Deleted): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
};

export const JobList = {
  encode(message: JobList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      Job.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(16).uint32(message.totalCount);
    if (message.subject !== undefined && message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): JobList {
    const message = { ...baseJobList } as JobList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Job.fromJSON(e));
      }
    }
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = Number(object.totalCount);
    } else {
      message.totalCount = 0;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<JobList>): JobList {
    const message = { ...baseJobList } as JobList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Job.fromPartial(e));
      }
    }
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = object.totalCount;
    } else {
      message.totalCount = 0;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },
  toJSON(message: JobList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map(e => e ? Job.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
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
  fromJSON(object: any): Job {
    const message = { ...baseJob } as Job;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Data.fromJSON(object.data);
    } else {
      message.data = undefined;
    }
    if (object.when !== undefined && object.when !== null) {
      message.when = String(object.when);
    } else {
      message.when = "";
    }
    if (object.options !== undefined && object.options !== null) {
      message.options = JobOptions.fromJSON(object.options);
    } else {
      message.options = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<Job>): Job {
    const message = { ...baseJob } as Job;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Data.fromPartial(object.data);
    } else {
      message.data = undefined;
    }
    if (object.when !== undefined && object.when !== null) {
      message.when = object.when;
    } else {
      message.when = "";
    }
    if (object.options !== undefined && object.options !== null) {
      message.options = JobOptions.fromPartial(object.options);
    } else {
      message.options = undefined;
    }
    return message;
  },
  toJSON(message: Job): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.type !== undefined && (obj.type = message.type);
    message.data !== undefined && (obj.data = message.data ? Data.toJSON(message.data) : undefined);
    message.when !== undefined && (obj.when = message.when);
    message.options !== undefined && (obj.options = message.options ? JobOptions.toJSON(message.options) : undefined);
    return obj;
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
  fromJSON(object: any): JobOptions {
    const message = { ...baseJobOptions } as JobOptions;
    if (object.priority !== undefined && object.priority !== null) {
      message.priority = jobOptions_PriorityFromJSON(object.priority);
    } else {
      message.priority = 0;
    }
    if (object.attempts !== undefined && object.attempts !== null) {
      message.attempts = Number(object.attempts);
    } else {
      message.attempts = 0;
    }
    if (object.backoff !== undefined && object.backoff !== null) {
      message.backoff = Backoff.fromJSON(object.backoff);
    } else {
      message.backoff = undefined;
    }
    if (object.timeout !== undefined && object.timeout !== null) {
      message.timeout = Number(object.timeout);
    } else {
      message.timeout = 0;
    }
    if (object.repeat !== undefined && object.repeat !== null) {
      message.repeat = Repeat.fromJSON(object.repeat);
    } else {
      message.repeat = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<JobOptions>): JobOptions {
    const message = { ...baseJobOptions } as JobOptions;
    if (object.priority !== undefined && object.priority !== null) {
      message.priority = object.priority;
    } else {
      message.priority = 0;
    }
    if (object.attempts !== undefined && object.attempts !== null) {
      message.attempts = object.attempts;
    } else {
      message.attempts = 0;
    }
    if (object.backoff !== undefined && object.backoff !== null) {
      message.backoff = Backoff.fromPartial(object.backoff);
    } else {
      message.backoff = undefined;
    }
    if (object.timeout !== undefined && object.timeout !== null) {
      message.timeout = object.timeout;
    } else {
      message.timeout = 0;
    }
    if (object.repeat !== undefined && object.repeat !== null) {
      message.repeat = Repeat.fromPartial(object.repeat);
    } else {
      message.repeat = undefined;
    }
    return message;
  },
  toJSON(message: JobOptions): unknown {
    const obj: any = {};
    message.priority !== undefined && (obj.priority = jobOptions_PriorityToJSON(message.priority));
    message.attempts !== undefined && (obj.attempts = message.attempts);
    message.backoff !== undefined && (obj.backoff = message.backoff ? Backoff.toJSON(message.backoff) : undefined);
    message.timeout !== undefined && (obj.timeout = message.timeout);
    message.repeat !== undefined && (obj.repeat = message.repeat ? Repeat.toJSON(message.repeat) : undefined);
    return obj;
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
  fromJSON(object: any): Repeat {
    const message = { ...baseRepeat } as Repeat;
    if (object.every !== undefined && object.every !== null) {
      message.every = Number(object.every);
    } else {
      message.every = 0;
    }
    if (object.cron !== undefined && object.cron !== null) {
      message.cron = String(object.cron);
    } else {
      message.cron = "";
    }
    if (object.startDate !== undefined && object.startDate !== null) {
      message.startDate = String(object.startDate);
    } else {
      message.startDate = "";
    }
    if (object.endDate !== undefined && object.endDate !== null) {
      message.endDate = String(object.endDate);
    } else {
      message.endDate = "";
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = Number(object.count);
    } else {
      message.count = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<Repeat>): Repeat {
    const message = { ...baseRepeat } as Repeat;
    if (object.every !== undefined && object.every !== null) {
      message.every = object.every;
    } else {
      message.every = 0;
    }
    if (object.cron !== undefined && object.cron !== null) {
      message.cron = object.cron;
    } else {
      message.cron = "";
    }
    if (object.startDate !== undefined && object.startDate !== null) {
      message.startDate = object.startDate;
    } else {
      message.startDate = "";
    }
    if (object.endDate !== undefined && object.endDate !== null) {
      message.endDate = object.endDate;
    } else {
      message.endDate = "";
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    } else {
      message.count = 0;
    }
    return message;
  },
  toJSON(message: Repeat): unknown {
    const obj: any = {};
    message.every !== undefined && (obj.every = message.every);
    message.cron !== undefined && (obj.cron = message.cron);
    message.startDate !== undefined && (obj.startDate = message.startDate);
    message.endDate !== undefined && (obj.endDate = message.endDate);
    message.count !== undefined && (obj.count = message.count);
    return obj;
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
  fromJSON(object: any): Data {
    const message = { ...baseData } as Data;
    if (object.timezone !== undefined && object.timezone !== null) {
      message.timezone = String(object.timezone);
    } else {
      message.timezone = "";
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = Any.fromJSON(object.payload);
    } else {
      message.payload = undefined;
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromJSON(object.meta);
    } else {
      message.meta = undefined;
    }
    if (object.subjectId !== undefined && object.subjectId !== null) {
      message.subjectId = String(object.subjectId);
    } else {
      message.subjectId = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Data>): Data {
    const message = { ...baseData } as Data;
    if (object.timezone !== undefined && object.timezone !== null) {
      message.timezone = object.timezone;
    } else {
      message.timezone = "";
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = Any.fromPartial(object.payload);
    } else {
      message.payload = undefined;
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromPartial(object.meta);
    } else {
      message.meta = undefined;
    }
    if (object.subjectId !== undefined && object.subjectId !== null) {
      message.subjectId = object.subjectId;
    } else {
      message.subjectId = "";
    }
    return message;
  },
  toJSON(message: Data): unknown {
    const obj: any = {};
    message.timezone !== undefined && (obj.timezone = message.timezone);
    message.payload !== undefined && (obj.payload = message.payload ? Any.toJSON(message.payload) : undefined);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.subjectId !== undefined && (obj.subjectId = message.subjectId);
    return obj;
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
  fromJSON(object: any): ScheduledJob {
    const message = { ...baseScheduledJob } as ScheduledJob;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Data.fromJSON(object.data);
    } else {
      message.data = undefined;
    }
    if (object.scheduleType !== undefined && object.scheduleType !== null) {
      message.scheduleType = String(object.scheduleType);
    } else {
      message.scheduleType = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<ScheduledJob>): ScheduledJob {
    const message = { ...baseScheduledJob } as ScheduledJob;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Data.fromPartial(object.data);
    } else {
      message.data = undefined;
    }
    if (object.scheduleType !== undefined && object.scheduleType !== null) {
      message.scheduleType = object.scheduleType;
    } else {
      message.scheduleType = "";
    }
    return message;
  },
  toJSON(message: ScheduledJob): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.type !== undefined && (obj.type = message.type);
    message.data !== undefined && (obj.data = message.data ? Data.toJSON(message.data) : undefined);
    message.scheduleType !== undefined && (obj.scheduleType = message.scheduleType);
    return obj;
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
  fromJSON(object: any): JobDone {
    const message = { ...baseJobDone } as JobDone;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.scheduleType !== undefined && object.scheduleType !== null) {
      message.scheduleType = String(object.scheduleType);
    } else {
      message.scheduleType = "";
    }
    if (object.deleteScheduled !== undefined && object.deleteScheduled !== null) {
      message.deleteScheduled = Boolean(object.deleteScheduled);
    } else {
      message.deleteScheduled = false;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = Any.fromJSON(object.result);
    } else {
      message.result = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<JobDone>): JobDone {
    const message = { ...baseJobDone } as JobDone;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.scheduleType !== undefined && object.scheduleType !== null) {
      message.scheduleType = object.scheduleType;
    } else {
      message.scheduleType = "";
    }
    if (object.deleteScheduled !== undefined && object.deleteScheduled !== null) {
      message.deleteScheduled = object.deleteScheduled;
    } else {
      message.deleteScheduled = false;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = Any.fromPartial(object.result);
    } else {
      message.result = undefined;
    }
    return message;
  },
  toJSON(message: JobDone): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.scheduleType !== undefined && (obj.scheduleType = message.scheduleType);
    message.deleteScheduled !== undefined && (obj.deleteScheduled = message.deleteScheduled);
    message.type !== undefined && (obj.type = message.type);
    message.result !== undefined && (obj.result = message.result ? Any.toJSON(message.result) : undefined);
    return obj;
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
  fromJSON(object: any): JobFailed {
    const message = { ...baseJobFailed } as JobFailed;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = String(object.error);
    } else {
      message.error = "";
    }
    if (object.scheduleType !== undefined && object.scheduleType !== null) {
      message.scheduleType = String(object.scheduleType);
    } else {
      message.scheduleType = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<JobFailed>): JobFailed {
    const message = { ...baseJobFailed } as JobFailed;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    } else {
      message.error = "";
    }
    if (object.scheduleType !== undefined && object.scheduleType !== null) {
      message.scheduleType = object.scheduleType;
    } else {
      message.scheduleType = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    return message;
  },
  toJSON(message: JobFailed): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.error !== undefined && (obj.error = message.error);
    message.scheduleType !== undefined && (obj.scheduleType = message.scheduleType);
    message.type !== undefined && (obj.type = message.type);
    return obj;
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
  fromJSON(object: any): Backoff {
    const message = { ...baseBackoff } as Backoff;
    if (object.delay !== undefined && object.delay !== null) {
      message.delay = Number(object.delay);
    } else {
      message.delay = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = backoff_TypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<Backoff>): Backoff {
    const message = { ...baseBackoff } as Backoff;
    if (object.delay !== undefined && object.delay !== null) {
      message.delay = object.delay;
    } else {
      message.delay = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    return message;
  },
  toJSON(message: Backoff): unknown {
    const obj: any = {};
    message.delay !== undefined && (obj.delay = message.delay);
    message.type !== undefined && (obj.type = backoff_TypeToJSON(message.type));
    return obj;
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
    if (message.subject !== undefined && message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(42).fork()).ldelim();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): JobReadRequest {
    const message = { ...baseJobReadRequest } as JobReadRequest;
    message.field = [];
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = Number(object.limit);
    } else {
      message.limit = 0;
    }
    if (object.sort !== undefined && object.sort !== null) {
      message.sort = jobReadRequest_SortOrderFromJSON(object.sort);
    } else {
      message.sort = 0;
    }
    if (object.filter !== undefined && object.filter !== null) {
      message.filter = JobFilter.fromJSON(object.filter);
    } else {
      message.filter = undefined;
    }
    if (object.field !== undefined && object.field !== null) {
      for (const e of object.field) {
        message.field.push(FieldFilter.fromJSON(e));
      }
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<JobReadRequest>): JobReadRequest {
    const message = { ...baseJobReadRequest } as JobReadRequest;
    message.field = [];
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = object.limit;
    } else {
      message.limit = 0;
    }
    if (object.sort !== undefined && object.sort !== null) {
      message.sort = object.sort;
    } else {
      message.sort = 0;
    }
    if (object.filter !== undefined && object.filter !== null) {
      message.filter = JobFilter.fromPartial(object.filter);
    } else {
      message.filter = undefined;
    }
    if (object.field !== undefined && object.field !== null) {
      for (const e of object.field) {
        message.field.push(FieldFilter.fromPartial(e));
      }
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },
  toJSON(message: JobReadRequest): unknown {
    const obj: any = {};
    message.limit !== undefined && (obj.limit = message.limit);
    message.sort !== undefined && (obj.sort = jobReadRequest_SortOrderToJSON(message.sort));
    message.filter !== undefined && (obj.filter = message.filter ? JobFilter.toJSON(message.filter) : undefined);
    if (message.field) {
      obj.field = message.field.map(e => e ? FieldFilter.toJSON(e) : undefined);
    } else {
      obj.field = [];
    }
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
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
  fromJSON(object: any): JobFilter {
    const message = { ...baseJobFilter } as JobFilter;
    message.jobIds = [];
    if (object.jobIds !== undefined && object.jobIds !== null) {
      for (const e of object.jobIds) {
        message.jobIds.push(String(e));
      }
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<JobFilter>): JobFilter {
    const message = { ...baseJobFilter } as JobFilter;
    message.jobIds = [];
    if (object.jobIds !== undefined && object.jobIds !== null) {
      for (const e of object.jobIds) {
        message.jobIds.push(e);
      }
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    return message;
  },
  toJSON(message: JobFilter): unknown {
    const obj: any = {};
    if (message.jobIds) {
      obj.jobIds = message.jobIds.map(e => e);
    } else {
      obj.jobIds = [];
    }
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },
};

export const metaDeleted: { [key in keyof Required<Deleted>]: MetaBase | string } = {
  id: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
}
export const metaJobList: { [key in keyof Required<JobList>]: MetaBase | string } = {
  items: {kind:'array', type:{kind:'object', type:'.io.restorecommerce.job.Job', name:'Job'} as MetaMessage} as MetaArray,
  totalCount: {kind:'builtin', type:'number', original:'uint32'} as MetaPrimitive,
  subject: {kind:'object', type:'.io.restorecommerce.auth.Subject', name:'Subject'} as MetaMessage,
}
export const metaJob: { [key in keyof Required<Job>]: MetaBase | string } = {
  id: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  type: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  data: {kind:'object', type:'.io.restorecommerce.job.Data', name:'Data'} as MetaMessage,
  when: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  options: {kind:'object', type:'.io.restorecommerce.job.JobOptions', name:'JobOptions'} as MetaMessage,
}
export const metaJobOptions: { [key in keyof Required<JobOptions>]: MetaBase | string } = {
  priority: {kind:'object', type:'.io.restorecommerce.job.JobOptions.Priority', name:'JobOptions_Priority'} as MetaMessage,
  attempts: {kind:'builtin', type:'number', original:'uint32'} as MetaPrimitive,
  backoff: {kind:'object', type:'.io.restorecommerce.job.Backoff', name:'Backoff'} as MetaMessage,
  timeout: {kind:'builtin', type:'number', original:'uint32'} as MetaPrimitive,
  repeat: {kind:'object', type:'.io.restorecommerce.job.Repeat', name:'Repeat'} as MetaMessage,
}
export const metaRepeat: { [key in keyof Required<Repeat>]: MetaBase | string } = {
  every: {kind:'builtin', type:'number', original:'uint32'} as MetaPrimitive,
  cron: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  startDate: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  endDate: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  count: {kind:'builtin', type:'number', original:'uint32'} as MetaPrimitive,
}
export const metaData: { [key in keyof Required<Data>]: MetaBase | string } = {
  timezone: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  payload: {kind:'object', type:'.google.protobuf.Any', name:'Any'} as MetaMessage,
  meta: {kind:'object', type:'.io.restorecommerce.meta.Meta', name:'Meta'} as MetaMessage,
  subjectId: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
}
export const metaScheduledJob: { [key in keyof Required<ScheduledJob>]: MetaBase | string } = {
  id: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  type: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  data: {kind:'object', type:'.io.restorecommerce.job.Data', name:'Data'} as MetaMessage,
  scheduleType: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
}
export const metaJobDone: { [key in keyof Required<JobDone>]: MetaBase | string } = {
  id: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  scheduleType: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  deleteScheduled: {kind:'builtin', type:'boolean', original:'bool'} as MetaPrimitive,
  type: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  result: {kind:'object', type:'.google.protobuf.Any', name:'Any'} as MetaMessage,
}
export const metaJobFailed: { [key in keyof Required<JobFailed>]: MetaBase | string } = {
  id: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  error: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  scheduleType: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  type: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
}
export const metaBackoff: { [key in keyof Required<Backoff>]: MetaBase | string } = {
  delay: {kind:'builtin', type:'number', original:'double'} as MetaPrimitive,
  type: {kind:'object', type:'.io.restorecommerce.job.Backoff.Type', name:'Backoff_Type'} as MetaMessage,
}
export const metaJobReadRequest: { [key in keyof Required<JobReadRequest>]: MetaBase | string } = {
  limit: {kind:'builtin', type:'number', original:'uint32'} as MetaPrimitive,
  sort: {kind:'object', type:'.io.restorecommerce.job.JobReadRequest.SortOrder', name:'JobReadRequest_SortOrder'} as MetaMessage,
  filter: {kind:'object', type:'.io.restorecommerce.job.JobFilter', name:'JobFilter'} as MetaMessage,
  field: {kind:'array', type:{kind:'object', type:'.io.restorecommerce.resourcebase.FieldFilter', name:'FieldFilter'} as MetaMessage} as MetaArray,
  subject: {kind:'object', type:'.io.restorecommerce.auth.Subject', name:'Subject'} as MetaMessage,
}
export const metaJobFilter: { [key in keyof Required<JobFilter>]: MetaBase | string } = {
  jobIds: {kind:'array', type:{kind:'builtin', type:'string', original:'string'} as MetaPrimitive} as MetaArray,
  type: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
}
export const metaService: { [key in keyof Service]: MetaService<any, any> } = {
  Read: {request: {kind:'object', type:'.io.restorecommerce.job.JobReadRequest', name:'JobReadRequest'} as MetaMessage, response: {kind:'object', type:'.io.restorecommerce.job.JobList', name:'JobList'} as MetaMessage, clientStreaming: false, serverStreaming: false, encodeRequest: JobReadRequest.encode, decodeResponse: JobList.decode} as MetaService<JobReadRequest, JobList>,
  Create: {request: {kind:'object', type:'.io.restorecommerce.job.JobList', name:'JobList'} as MetaMessage, response: {kind:'object', type:'.io.restorecommerce.job.JobList', name:'JobList'} as MetaMessage, clientStreaming: false, serverStreaming: false, encodeRequest: JobList.encode, decodeResponse: JobList.decode} as MetaService<JobList, JobList>,
  Delete: {request: {kind:'object', type:'.io.restorecommerce.resourcebase.DeleteRequest', name:'DeleteRequest'} as MetaMessage, response: {kind:'object', type:'.google.protobuf.Empty', name:'Empty'} as MetaMessage, clientStreaming: false, serverStreaming: false, encodeRequest: DeleteRequest.encode, decodeResponse: Empty.decode} as MetaService<DeleteRequest, Empty>,
  Update: {request: {kind:'object', type:'.io.restorecommerce.job.JobList', name:'JobList'} as MetaMessage, response: {kind:'object', type:'.io.restorecommerce.job.JobList', name:'JobList'} as MetaMessage, clientStreaming: false, serverStreaming: false, encodeRequest: JobList.encode, decodeResponse: JobList.decode} as MetaService<JobList, JobList>,
  Upsert: {request: {kind:'object', type:'.io.restorecommerce.job.JobList', name:'JobList'} as MetaMessage, response: {kind:'object', type:'.io.restorecommerce.job.JobList', name:'JobList'} as MetaMessage, clientStreaming: false, serverStreaming: false, encodeRequest: JobList.encode, decodeResponse: JobList.decode} as MetaService<JobList, JobList>,
}
export const metadata: { [key: string]: ['service', string, any, { [key: string]: MetaService<any, any> }] | ['enum', string, any, any] | ['message', string, any, { [key: string]: MetaBase | string }] } = {
  Deleted: ['message', '.io.restorecommerce.job.Deleted', Deleted, metaDeleted],
  JobList: ['message', '.io.restorecommerce.job.JobList', JobList, metaJobList],
  Job: ['message', '.io.restorecommerce.job.Job', Job, metaJob],
  JobOptions: ['message', '.io.restorecommerce.job.JobOptions', JobOptions, metaJobOptions],
  JobOptions_Priority: ['enum', '.io.restorecommerce.job.JobOptions.Priority', JobOptions_Priority, undefined],
  Repeat: ['message', '.io.restorecommerce.job.Repeat', Repeat, metaRepeat],
  Data: ['message', '.io.restorecommerce.job.Data', Data, metaData],
  ScheduledJob: ['message', '.io.restorecommerce.job.ScheduledJob', ScheduledJob, metaScheduledJob],
  JobDone: ['message', '.io.restorecommerce.job.JobDone', JobDone, metaJobDone],
  JobFailed: ['message', '.io.restorecommerce.job.JobFailed', JobFailed, metaJobFailed],
  Backoff: ['message', '.io.restorecommerce.job.Backoff', Backoff, metaBackoff],
  Backoff_Type: ['enum', '.io.restorecommerce.job.Backoff.Type', Backoff_Type, undefined],
  JobReadRequest: ['message', '.io.restorecommerce.job.JobReadRequest', JobReadRequest, metaJobReadRequest],
  JobReadRequest_SortOrder: ['enum', '.io.restorecommerce.job.JobReadRequest.SortOrder', JobReadRequest_SortOrder, undefined],
  JobFilter: ['message', '.io.restorecommerce.job.JobFilter', JobFilter, metaJobFilter],
  Service: ['service', '.io.restorecommerce.job.Service', undefined, metaService],
}
type Builtin = Date | Function | Uint8Array | string | number | undefined;
type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;