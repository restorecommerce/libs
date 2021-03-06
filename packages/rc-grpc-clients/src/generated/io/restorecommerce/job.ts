/* eslint-disable */
import { FileDescriptorProto } from "ts-proto-descriptors/google/protobuf/descriptor";
import {
  Subject,
  protoMetadata as protoMetadata5,
} from "../../io/restorecommerce/auth";
import {
  Any,
  protoMetadata as protoMetadata2,
} from "../../google/protobuf/any";
import {
  Meta,
  protoMetadata as protoMetadata4,
} from "../../io/restorecommerce/meta";
import {
  protoMetadata as protoMetadata1,
  FieldFilter,
  DeleteRequest,
} from "../../io/restorecommerce/resource_base";
import {
  protoMetadata as protoMetadata3,
  Empty,
} from "../../google/protobuf/empty";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "io.restorecommerce.job";

/**
 * A Kafka event.
 * Send when a job resource got deleted.
 */
export interface Deleted {
  id: string;
}

/** A list of jobs. */
export interface JobList {
  items: Job[];
  totalCount: number;
  subject?: Subject;
}

/** A Job resource */
export interface Job {
  /** Job ID */
  id: string;
  /** Job type */
  type: string;
  /** Job-specific data with variable payload */
  data?: Data;
  /** Used to specify the time at which the job is run */
  when: string;
  /** The job options */
  options?: JobOptions;
}

/** Job Options */
export interface JobOptions {
  /** Job priority */
  priority: JobOptions_Priority;
  /** Amount of possible failing runs until job fails */
  attempts: number;
  /** Delay settings between failed job runs */
  backoff?: Backoff;
  /** The timeout of the job */
  timeout: number;
  /** Used for periodic jobs */
  repeat?: Repeat;
}

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

export interface Repeat {
  every: number;
  cron: string;
  startDate: string;
  endDate: string;
  count: number;
}

/** Data which is stored within a job instance */
export interface Data {
  timezone: string;
  /** optional variable payload */
  payload?: Any;
  meta?: Meta;
  /** id of job creator */
  subjectId: string;
}

/**
 * A scheduled Job.
 * Emitted to Kafka by the scheduling service with event name 'queuedJob' and retreived by a service which processes this job.
 */
export interface ScheduledJob {
  /** Job instance ID */
  id: string;
  type: string;
  /** Job-specific data with variable payload */
  data?: Data;
  /** Type of schedule (ONCE, RECURR, etc) */
  scheduleType: string;
}

/**
 * A finished scheduled Job.
 * Emitted to Kafka by the service which processed the job with event name 'done' and retrieved by the scheduling service.
 */
export interface JobDone {
  /** Job instance ID */
  id: string;
  /** Type of schedule (ONCE, RECURR, etc) */
  scheduleType: string;
  /** Whether to delete scheduled job */
  deleteScheduled: boolean;
  /** Job type */
  type: string;
  result?: Any;
}

/**
 * A failed scheduled Job event from the Job Service.
 * Emitted to Kafka by the service which processed the Job and retrieved by the scheduling service.
 */
export interface JobFailed {
  /** Job instance ID */
  id: string;
  /** Error message */
  error: string;
  /** Type of job ex: ONCE, RECURR etc. */
  scheduleType: string;
  /** Job type */
  type: string;
}

/** Delay between retries. */
export interface Backoff {
  /** Time until retry in milliseconds */
  delay: number;
  /** Calculation of the delay */
  type: Backoff_Type;
}

export enum Backoff_Type {
  /** FIXED - Retry with the same delay */
  FIXED = 0,
  /** EXPONENTIAL - Exponential delay increase between retries */
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

/** Job-specific read request */
export interface JobReadRequest {
  limit: number;
  sort: JobReadRequest_SortOrder;
  /** Filter based on fieldName|operation, value|list */
  filter?: JobFilter;
  /** Fields selector */
  field: FieldFilter[];
  subject?: Subject;
}

/** only possible to sort jobs by creation date */
export enum JobReadRequest_SortOrder {
  UNSORTED = 0,
  ASCENDING = 1,
  DESCENDING = 2,
  UNRECOGNIZED = -1,
}

export function jobReadRequest_SortOrderFromJSON(
  object: any
): JobReadRequest_SortOrder {
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

export function jobReadRequest_SortOrderToJSON(
  object: JobReadRequest_SortOrder
): string {
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

/** filter */
export interface JobFilter {
  jobIds: string[];
  type: string;
}

const baseDeleted: object = { id: "" };

export const Deleted = {
  encode(message: Deleted, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Deleted {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseDeleted) as Deleted;
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
    const message = globalThis.Object.create(baseDeleted) as Deleted;
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

const baseJobList: object = { totalCount: 0 };

export const JobList = {
  encode(message: JobList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      Job.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): JobList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseJobList) as JobList;
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
    const message = globalThis.Object.create(baseJobList) as JobList;
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
      obj.items = message.items.map((e) => (e ? Job.toJSON(e) : undefined));
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseJob: object = { id: "", type: "", when: "" };

export const Job = {
  encode(message: Job, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.type !== "") {
      writer.uint32(90).string(message.type);
    }
    if (message.data !== undefined) {
      Data.encode(message.data, writer.uint32(98).fork()).ldelim();
    }
    if (message.when !== "") {
      writer.uint32(170).string(message.when);
    }
    if (message.options !== undefined) {
      JobOptions.encode(message.options, writer.uint32(242).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Job {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseJob) as Job;
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
    const message = globalThis.Object.create(baseJob) as Job;
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
    message.data !== undefined &&
      (obj.data = message.data ? Data.toJSON(message.data) : undefined);
    message.when !== undefined && (obj.when = message.when);
    message.options !== undefined &&
      (obj.options = message.options
        ? JobOptions.toJSON(message.options)
        : undefined);
    return obj;
  },
};

const baseJobOptions: object = { priority: 0, attempts: 0, timeout: 0 };

export const JobOptions = {
  encode(message: JobOptions, writer: Writer = Writer.create()): Writer {
    if (message.priority !== 0) {
      writer.uint32(104).int32(message.priority);
    }
    if (message.attempts !== 0) {
      writer.uint32(112).uint32(message.attempts);
    }
    if (message.backoff !== undefined) {
      Backoff.encode(message.backoff, writer.uint32(122).fork()).ldelim();
    }
    if (message.timeout !== 0) {
      writer.uint32(128).uint32(message.timeout);
    }
    if (message.repeat !== undefined) {
      Repeat.encode(message.repeat, writer.uint32(162).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): JobOptions {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseJobOptions) as JobOptions;
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
    const message = globalThis.Object.create(baseJobOptions) as JobOptions;
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
    message.priority !== undefined &&
      (obj.priority = jobOptions_PriorityToJSON(message.priority));
    message.attempts !== undefined && (obj.attempts = message.attempts);
    message.backoff !== undefined &&
      (obj.backoff = message.backoff
        ? Backoff.toJSON(message.backoff)
        : undefined);
    message.timeout !== undefined && (obj.timeout = message.timeout);
    message.repeat !== undefined &&
      (obj.repeat = message.repeat ? Repeat.toJSON(message.repeat) : undefined);
    return obj;
  },
};

const baseRepeat: object = {
  every: 0,
  cron: "",
  startDate: "",
  endDate: "",
  count: 0,
};

export const Repeat = {
  encode(message: Repeat, writer: Writer = Writer.create()): Writer {
    if (message.every !== 0) {
      writer.uint32(8).uint32(message.every);
    }
    if (message.cron !== "") {
      writer.uint32(18).string(message.cron);
    }
    if (message.startDate !== "") {
      writer.uint32(26).string(message.startDate);
    }
    if (message.endDate !== "") {
      writer.uint32(34).string(message.endDate);
    }
    if (message.count !== 0) {
      writer.uint32(40).uint32(message.count);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Repeat {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseRepeat) as Repeat;
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
    const message = globalThis.Object.create(baseRepeat) as Repeat;
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

const baseData: object = { timezone: "", subjectId: "" };

export const Data = {
  encode(message: Data, writer: Writer = Writer.create()): Writer {
    if (message.timezone !== "") {
      writer.uint32(10).string(message.timezone);
    }
    if (message.payload !== undefined) {
      Any.encode(message.payload, writer.uint32(18).fork()).ldelim();
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(26).fork()).ldelim();
    }
    if (message.subjectId !== "") {
      writer.uint32(34).string(message.subjectId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Data {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseData) as Data;
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
    const message = globalThis.Object.create(baseData) as Data;
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
    message.payload !== undefined &&
      (obj.payload = message.payload ? Any.toJSON(message.payload) : undefined);
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.subjectId !== undefined && (obj.subjectId = message.subjectId);
    return obj;
  },
};

const baseScheduledJob: object = { id: "", type: "", scheduleType: "" };

export const ScheduledJob = {
  encode(message: ScheduledJob, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    if (message.data !== undefined) {
      Data.encode(message.data, writer.uint32(26).fork()).ldelim();
    }
    if (message.scheduleType !== "") {
      writer.uint32(34).string(message.scheduleType);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ScheduledJob {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseScheduledJob) as ScheduledJob;
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
    const message = globalThis.Object.create(baseScheduledJob) as ScheduledJob;
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
    message.data !== undefined &&
      (obj.data = message.data ? Data.toJSON(message.data) : undefined);
    message.scheduleType !== undefined &&
      (obj.scheduleType = message.scheduleType);
    return obj;
  },
};

const baseJobDone: object = {
  id: "",
  scheduleType: "",
  deleteScheduled: false,
  type: "",
};

export const JobDone = {
  encode(message: JobDone, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.scheduleType !== "") {
      writer.uint32(18).string(message.scheduleType);
    }
    if (message.deleteScheduled === true) {
      writer.uint32(24).bool(message.deleteScheduled);
    }
    if (message.type !== "") {
      writer.uint32(34).string(message.type);
    }
    if (message.result !== undefined) {
      Any.encode(message.result, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): JobDone {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseJobDone) as JobDone;
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
    const message = globalThis.Object.create(baseJobDone) as JobDone;
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
    if (
      object.deleteScheduled !== undefined &&
      object.deleteScheduled !== null
    ) {
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
    if (
      object.deleteScheduled !== undefined &&
      object.deleteScheduled !== null
    ) {
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
    message.scheduleType !== undefined &&
      (obj.scheduleType = message.scheduleType);
    message.deleteScheduled !== undefined &&
      (obj.deleteScheduled = message.deleteScheduled);
    message.type !== undefined && (obj.type = message.type);
    message.result !== undefined &&
      (obj.result = message.result ? Any.toJSON(message.result) : undefined);
    return obj;
  },
};

const baseJobFailed: object = { id: "", error: "", scheduleType: "", type: "" };

export const JobFailed = {
  encode(message: JobFailed, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.error !== "") {
      writer.uint32(18).string(message.error);
    }
    if (message.scheduleType !== "") {
      writer.uint32(26).string(message.scheduleType);
    }
    if (message.type !== "") {
      writer.uint32(34).string(message.type);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): JobFailed {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseJobFailed) as JobFailed;
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
    const message = globalThis.Object.create(baseJobFailed) as JobFailed;
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
    message.scheduleType !== undefined &&
      (obj.scheduleType = message.scheduleType);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },
};

const baseBackoff: object = { delay: 0, type: 0 };

export const Backoff = {
  encode(message: Backoff, writer: Writer = Writer.create()): Writer {
    if (message.delay !== 0) {
      writer.uint32(9).double(message.delay);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Backoff {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseBackoff) as Backoff;
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
    const message = globalThis.Object.create(baseBackoff) as Backoff;
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

const baseJobReadRequest: object = { limit: 0, sort: 0 };

export const JobReadRequest = {
  encode(message: JobReadRequest, writer: Writer = Writer.create()): Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint32(message.limit);
    }
    if (message.sort !== 0) {
      writer.uint32(16).int32(message.sort);
    }
    if (message.filter !== undefined) {
      JobFilter.encode(message.filter, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.field) {
      FieldFilter.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): JobReadRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseJobReadRequest
    ) as JobReadRequest;
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
    const message = globalThis.Object.create(
      baseJobReadRequest
    ) as JobReadRequest;
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
    message.sort !== undefined &&
      (obj.sort = jobReadRequest_SortOrderToJSON(message.sort));
    message.filter !== undefined &&
      (obj.filter = message.filter
        ? JobFilter.toJSON(message.filter)
        : undefined);
    if (message.field) {
      obj.field = message.field.map((e) =>
        e ? FieldFilter.toJSON(e) : undefined
      );
    } else {
      obj.field = [];
    }
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseJobFilter: object = { jobIds: "", type: "" };

export const JobFilter = {
  encode(message: JobFilter, writer: Writer = Writer.create()): Writer {
    for (const v of message.jobIds) {
      writer.uint32(10).string(v!);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): JobFilter {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseJobFilter) as JobFilter;
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
    const message = globalThis.Object.create(baseJobFilter) as JobFilter;
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
      obj.jobIds = message.jobIds.map((e) => e);
    } else {
      obj.jobIds = [];
    }
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },
};

/**
 * The microservice for scheduling jobs.
 * Provides CRUD operations.
 */
export interface Service {
  Read(request: JobReadRequest): Promise<JobList>;
  Create(request: JobList): Promise<JobList>;
  Delete(request: DeleteRequest): Promise<Empty>;
  Update(request: JobList): Promise<JobList>;
  Upsert(request: JobList): Promise<JobList>;
}

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto.fromPartial({
    dependency: [
      "io/restorecommerce/resource_base.proto",
      "google/protobuf/any.proto",
      "google/protobuf/empty.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
    ],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        field: [{ name: "id", number: 1, label: 1, type: 9, jsonName: "id" }],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Deleted",
      },
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.job.Job",
            jsonName: "items",
          },
          {
            name: "total_count",
            number: 2,
            label: 1,
            type: 13,
            jsonName: "totalCount",
          },
          {
            name: "subject",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            jsonName: "subject",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "JobList",
      },
      {
        field: [
          { name: "id", number: 1, label: 1, type: 9, jsonName: "id" },
          { name: "type", number: 11, label: 1, type: 9, jsonName: "type" },
          {
            name: "data",
            number: 12,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.job.Data",
            jsonName: "data",
          },
          { name: "when", number: 21, label: 1, type: 9, jsonName: "when" },
          {
            name: "options",
            number: 30,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.job.JobOptions",
            jsonName: "options",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Job",
      },
      {
        field: [
          {
            name: "priority",
            number: 13,
            label: 1,
            type: 14,
            typeName: ".io.restorecommerce.job.JobOptions.Priority",
            jsonName: "priority",
          },
          {
            name: "attempts",
            number: 14,
            label: 1,
            type: 13,
            jsonName: "attempts",
          },
          {
            name: "backoff",
            number: 15,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.job.Backoff",
            jsonName: "backoff",
          },
          {
            name: "timeout",
            number: 16,
            label: 1,
            type: 13,
            jsonName: "timeout",
          },
          {
            name: "repeat",
            number: 20,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.job.Repeat",
            jsonName: "repeat",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [
          {
            value: [
              { name: "NORMAL", number: 0 },
              { name: "LOW", number: 10 },
              { name: "MEDIUM", number: -5 },
              { name: "HIGH", number: -10 },
              { name: "CRITICAL", number: -15 },
            ],
            reservedRange: [],
            reservedName: [],
            name: "Priority",
          },
        ],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "JobOptions",
      },
      {
        field: [
          { name: "every", number: 1, label: 1, type: 13, jsonName: "every" },
          { name: "cron", number: 2, label: 1, type: 9, jsonName: "cron" },
          {
            name: "startDate",
            number: 3,
            label: 1,
            type: 9,
            jsonName: "startDate",
          },
          {
            name: "endDate",
            number: 4,
            label: 1,
            type: 9,
            jsonName: "endDate",
          },
          { name: "count", number: 5, label: 1, type: 13, jsonName: "count" },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Repeat",
      },
      {
        field: [
          {
            name: "timezone",
            number: 1,
            label: 1,
            type: 9,
            jsonName: "timezone",
          },
          {
            name: "payload",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".google.protobuf.Any",
            jsonName: "payload",
          },
          {
            name: "meta",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.meta.Meta",
            jsonName: "meta",
          },
          {
            name: "subject_id",
            number: 4,
            label: 1,
            type: 9,
            jsonName: "subjectId",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Data",
      },
      {
        field: [
          { name: "id", number: 1, label: 1, type: 9, jsonName: "id" },
          { name: "type", number: 2, label: 1, type: 9, jsonName: "type" },
          {
            name: "data",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.job.Data",
            jsonName: "data",
          },
          {
            name: "schedule_type",
            number: 4,
            label: 1,
            type: 9,
            jsonName: "scheduleType",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "ScheduledJob",
      },
      {
        field: [
          { name: "id", number: 1, label: 1, type: 9, jsonName: "id" },
          {
            name: "schedule_type",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "scheduleType",
          },
          {
            name: "delete_scheduled",
            number: 3,
            label: 1,
            type: 8,
            jsonName: "deleteScheduled",
          },
          { name: "type", number: 4, label: 1, type: 9, jsonName: "type" },
          {
            name: "result",
            number: 5,
            label: 1,
            type: 11,
            typeName: ".google.protobuf.Any",
            jsonName: "result",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "JobDone",
      },
      {
        field: [
          { name: "id", number: 1, label: 1, type: 9, jsonName: "id" },
          { name: "error", number: 2, label: 1, type: 9, jsonName: "error" },
          {
            name: "schedule_type",
            number: 3,
            label: 1,
            type: 9,
            jsonName: "scheduleType",
          },
          { name: "type", number: 4, label: 1, type: 9, jsonName: "type" },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "JobFailed",
      },
      {
        field: [
          { name: "delay", number: 1, label: 1, type: 1, jsonName: "delay" },
          {
            name: "type",
            number: 2,
            label: 1,
            type: 14,
            typeName: ".io.restorecommerce.job.Backoff.Type",
            jsonName: "type",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [
          {
            value: [
              { name: "FIXED", number: 0 },
              { name: "EXPONENTIAL", number: 1 },
            ],
            reservedRange: [],
            reservedName: [],
            name: "Type",
          },
        ],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Backoff",
      },
      {
        field: [
          { name: "limit", number: 1, label: 1, type: 13, jsonName: "limit" },
          {
            name: "sort",
            number: 2,
            label: 1,
            type: 14,
            typeName: ".io.restorecommerce.job.JobReadRequest.SortOrder",
            jsonName: "sort",
          },
          {
            name: "filter",
            number: 4,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.job.JobFilter",
            jsonName: "filter",
          },
          {
            name: "field",
            number: 3,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.resourcebase.FieldFilter",
            jsonName: "field",
          },
          {
            name: "subject",
            number: 5,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            jsonName: "subject",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [
          {
            value: [
              { name: "UNSORTED", number: 0 },
              { name: "ASCENDING", number: 1 },
              { name: "DESCENDING", number: 2 },
            ],
            reservedRange: [],
            reservedName: [],
            name: "SortOrder",
          },
        ],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "JobReadRequest",
      },
      {
        field: [
          { name: "job_ids", number: 1, label: 3, type: 9, jsonName: "jobIds" },
          { name: "type", number: 2, label: 1, type: 9, jsonName: "type" },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "JobFilter",
      },
    ],
    enumType: [],
    service: [
      {
        method: [
          {
            name: "Read",
            inputType: ".io.restorecommerce.job.JobReadRequest",
            outputType: ".io.restorecommerce.job.JobList",
          },
          {
            name: "Create",
            inputType: ".io.restorecommerce.job.JobList",
            outputType: ".io.restorecommerce.job.JobList",
          },
          {
            name: "Delete",
            inputType: ".io.restorecommerce.resourcebase.DeleteRequest",
            outputType: ".google.protobuf.Empty",
          },
          {
            name: "Update",
            inputType: ".io.restorecommerce.job.JobList",
            outputType: ".io.restorecommerce.job.JobList",
          },
          {
            name: "Upsert",
            inputType: ".io.restorecommerce.job.JobList",
            outputType: ".io.restorecommerce.job.JobList",
          },
        ],
        name: "Service",
      },
    ],
    extension: [],
    name: "io/restorecommerce/job.proto",
    package: "io.restorecommerce.job",
    sourceCodeInfo: {
      location: [
        {
          path: [6, 0],
          span: [14, 0, 20, 1],
          leadingDetachedComments: [],
          leadingComments:
            "*\n The microservice for scheduling jobs.\n Provides CRUD operations.\n",
        },
        {
          path: [4, 0],
          span: [26, 0, 28, 1],
          leadingDetachedComments: [],
          leadingComments:
            "*\n A Kafka event.\n Send when a job resource got deleted.\n",
        },
        {
          path: [4, 1],
          span: [33, 0, 37, 1],
          leadingDetachedComments: [],
          leadingComments: "*\n A list of jobs.\n",
        },
        {
          path: [4, 2],
          span: [42, 0, 51, 1],
          leadingDetachedComments: [],
          leadingComments: "*\n A Job resource\n",
        },
        {
          path: [4, 2, 2, 0],
          span: [43, 2, 16],
          leadingDetachedComments: [],
          trailingComments: " Job ID\n",
        },
        {
          path: [4, 2, 2, 1],
          span: [45, 2, 19],
          leadingDetachedComments: [],
          trailingComments: " Job type\n",
        },
        {
          path: [4, 2, 2, 2],
          span: [46, 2, 17],
          leadingDetachedComments: [],
          trailingComments: " Job-specific data with variable payload\n",
        },
        {
          path: [4, 2, 2, 3],
          span: [48, 2, 19],
          leadingDetachedComments: [],
          trailingComments:
            " Used to specify the time at which the job is run\n",
        },
        {
          path: [4, 2, 2, 4],
          span: [50, 2, 26],
          leadingDetachedComments: [],
          trailingComments: " The job options\n",
        },
        {
          path: [4, 3],
          span: [56, 0, 71, 1],
          leadingDetachedComments: [],
          leadingComments: "*\n Job Options\n",
        },
        {
          path: [4, 3, 2, 0],
          span: [65, 2, 25],
          leadingDetachedComments: [],
          trailingComments: " Job priority\n",
        },
        {
          path: [4, 3, 2, 1],
          span: [66, 2, 23],
          leadingDetachedComments: [],
          trailingComments:
            " Amount of possible failing runs until job fails\n",
        },
        {
          path: [4, 3, 2, 2],
          span: [67, 2, 23],
          leadingDetachedComments: [],
          trailingComments: " Delay settings between failed job runs\n",
        },
        {
          path: [4, 3, 2, 3],
          span: [68, 2, 22],
          leadingDetachedComments: [],
          trailingComments: " The timeout of the job\n",
        },
        {
          path: [4, 3, 2, 4],
          span: [70, 2, 21],
          leadingDetachedComments: [],
          trailingComments: " Used for periodic jobs\n",
        },
        {
          path: [4, 5],
          span: [82, 0, 87, 1],
          leadingDetachedComments: [],
          leadingComments: " Data which is stored within a job instance\n",
        },
        {
          path: [4, 5, 2, 1],
          span: [84, 2, 34],
          leadingDetachedComments: [],
          trailingComments: " optional variable payload\n",
        },
        {
          path: [4, 5, 2, 3],
          span: [86, 2, 24],
          leadingDetachedComments: [],
          trailingComments: " id of job creator\n",
        },
        {
          path: [4, 6],
          span: [93, 0, 98, 1],
          leadingDetachedComments: [],
          leadingComments:
            "*\n A scheduled Job.\n Emitted to Kafka by the scheduling service with event name 'queuedJob' and retreived by a service which processes this job.\n",
        },
        {
          path: [4, 6, 2, 0],
          span: [94, 2, 16],
          leadingDetachedComments: [],
          trailingComments: " Job instance ID\n",
        },
        {
          path: [4, 6, 2, 2],
          span: [96, 2, 16],
          leadingDetachedComments: [],
          trailingComments: " Job-specific data with variable payload\n",
        },
        {
          path: [4, 6, 2, 3],
          span: [97, 2, 27],
          leadingDetachedComments: [],
          trailingComments: " Type of schedule (ONCE, RECURR, etc)\n",
        },
        {
          path: [4, 7],
          span: [104, 0, 110, 1],
          leadingDetachedComments: [],
          leadingComments:
            "*\n A finished scheduled Job.\n Emitted to Kafka by the service which processed the job with event name 'done' and retrieved by the scheduling service.\n",
        },
        {
          path: [4, 7, 2, 0],
          span: [105, 2, 16],
          leadingDetachedComments: [],
          trailingComments: " Job instance ID\n",
        },
        {
          path: [4, 7, 2, 1],
          span: [106, 2, 27],
          leadingDetachedComments: [],
          trailingComments: " Type of schedule (ONCE, RECURR, etc)\n",
        },
        {
          path: [4, 7, 2, 2],
          span: [107, 2, 28],
          leadingDetachedComments: [],
          trailingComments: " Whether to delete scheduled job\n",
        },
        {
          path: [4, 7, 2, 3],
          span: [108, 2, 18],
          leadingDetachedComments: [],
          trailingComments: " Job type\n",
        },
        {
          path: [4, 8],
          span: [116, 0, 121, 1],
          leadingDetachedComments: [],
          leadingComments:
            "*\n A failed scheduled Job event from the Job Service.\n Emitted to Kafka by the service which processed the Job and retrieved by the scheduling service.\n",
        },
        {
          path: [4, 8, 2, 0],
          span: [117, 2, 16],
          leadingDetachedComments: [],
          trailingComments: " Job instance ID\n",
        },
        {
          path: [4, 8, 2, 1],
          span: [118, 2, 19],
          leadingDetachedComments: [],
          trailingComments: " Error message\n",
        },
        {
          path: [4, 8, 2, 2],
          span: [119, 2, 27],
          leadingDetachedComments: [],
          trailingComments: " Type of job ex: ONCE, RECURR etc.\n",
        },
        {
          path: [4, 8, 2, 3],
          span: [120, 2, 18],
          leadingDetachedComments: [],
          trailingComments: " Job type\n",
        },
        {
          path: [4, 9],
          span: [126, 0, 133, 1],
          leadingDetachedComments: [],
          leadingComments: "*\n Delay between retries.\n",
        },
        {
          path: [4, 9, 4, 0, 2, 0],
          span: [128, 4, 14],
          leadingDetachedComments: [],
          trailingComments: " Retry with the same delay\n",
        },
        {
          path: [4, 9, 4, 0, 2, 1],
          span: [129, 4, 20],
          leadingDetachedComments: [],
          trailingComments: " Exponential delay increase between retries\n",
        },
        {
          path: [4, 9, 2, 0],
          span: [131, 2, 19],
          leadingDetachedComments: [],
          trailingComments: " Time until retry in milliseconds\n",
        },
        {
          path: [4, 9, 2, 1],
          span: [132, 2, 16],
          leadingDetachedComments: [],
          trailingComments: " Calculation of the delay\n",
        },
        {
          path: [4, 10],
          span: [136, 0, 152, 1],
          leadingDetachedComments: [],
          leadingComments: " Job-specific read request\n",
        },
        {
          path: [4, 10, 4, 0],
          span: [139, 2, 143, 3],
          leadingDetachedComments: [],
          leadingComments: " only possible to sort jobs by creation date\n",
        },
        {
          path: [4, 10, 2, 2],
          span: [147, 2, 23],
          leadingDetachedComments: [],
          leadingComments: " Filter based on fieldName|operation, value|list\n",
        },
        {
          path: [4, 10, 2, 3],
          span: [150, 2, 65],
          leadingDetachedComments: [],
          leadingComments: " Fields selector\n",
        },
        {
          path: [4, 11],
          span: [155, 0, 158, 1],
          leadingDetachedComments: [],
          leadingComments: " filter\n",
        },
      ],
    },
    syntax: "proto3",
  }),
  references: {
    ".io.restorecommerce.job.Deleted": Deleted,
    ".io.restorecommerce.job.JobList": JobList,
    ".io.restorecommerce.job.Job": Job,
    ".io.restorecommerce.job.JobOptions": JobOptions,
    ".io.restorecommerce.job.JobOptions.Priority": JobOptions_Priority,
    ".io.restorecommerce.job.Repeat": Repeat,
    ".io.restorecommerce.job.Data": Data,
    ".io.restorecommerce.job.ScheduledJob": ScheduledJob,
    ".io.restorecommerce.job.JobDone": JobDone,
    ".io.restorecommerce.job.JobFailed": JobFailed,
    ".io.restorecommerce.job.Backoff": Backoff,
    ".io.restorecommerce.job.Backoff.Type": Backoff_Type,
    ".io.restorecommerce.job.JobReadRequest": JobReadRequest,
    ".io.restorecommerce.job.JobReadRequest.SortOrder": JobReadRequest_SortOrder,
    ".io.restorecommerce.job.JobFilter": JobFilter,
  },
  dependencies: [
    protoMetadata1,
    protoMetadata2,
    protoMetadata3,
    protoMetadata4,
    protoMetadata5,
  ],
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
