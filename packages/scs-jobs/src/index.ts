import type { FilterOpts, Data } from './types.js';
import { createClient as createRedisClient } from 'redis';
import type { Events } from '@restorecommerce/kafka-client';
import type { ServiceConfig } from '@restorecommerce/service-config';
import type { Logger } from '@restorecommerce/logger';
import type { Processor } from 'bullmq';
import { Worker } from 'bullmq';


export const decomposeError = (err: any): {
  code?: number,
  message?: string,
  details?: string,
  stack?: Error['stack']
} => {
  const { code, message, details, stack } = err;
  return { code, message, details, stack };
}

export const marshallProtobufAny = (msg: any): any => {
  return {
    value: Buffer.from(JSON.stringify(msg))
  };
};

export const unmarshallProtobufAny = (msg: any, logger: any): any => {
  try {
    if (msg.value) {
      return JSON.parse(msg.value.toString());
    }
  } catch (error) {
    logger.error('Error unmarshalling JSON', msg);
  }
};

export const _filterJobData = (data: Data, encode: boolean, logger: Logger) => {
  const picked = {
    payload: data?.payload,
    meta: data?.meta,
    subject_id: data.subject_id,
  };

  if (encode) {
    if (picked?.payload?.value && typeof picked.payload.value === 'string') {
      picked.payload = marshallProtobufAny(unmarshallProtobufAny(picked.payload, logger));
    }
  }

  if (picked?.meta?.created && typeof picked.meta.created === 'string') {
    picked.meta.created = new Date(picked.meta.created);
  }

  if (picked?.meta?.modified && typeof picked.meta.modified === 'string') {
    picked.meta.modified = new Date(picked.meta.modified);
  }

  return picked;
};

export const _filterQueuedJob = <T extends FilterOpts>(job: T, logger: Logger) => {
  if (job && !job.type) {
    (job as any).type = (job as any).name;
  }
  const picked = {
    id: job?.id,
    type: job?.type,
    name: job?.name,
    opts: job?.opts,
    data: job?.data,
  };

  if (picked?.data) {
    picked.data = _filterJobData(picked.data, false, logger);
    if (picked?.data?.payload?.value) {
      picked.data.payload.value = Buffer.from(picked.data.payload.value);
    }
  }

  return picked;
};

export const runWorker = async (
  queue: string,
  concurrency: number,
  cfg: ServiceConfig,
  logger: Logger,
  events: Events,
  cb: Processor
): Promise<Worker> => {
  // Get a redis connection
  const redisConfig = cfg.get('redis');
  // below config is used for bull queu options and it still uses db config
  redisConfig.db = cfg.get('redis:db-indexes:db-jobStore');

  const reccurTimeCfg = cfg.get('redis');
  reccurTimeCfg.database = cfg.get('redis:db-indexes:db-reccurTime');
  const redisClient = createRedisClient(reccurTimeCfg);
  redisClient.on('error', (err) => logger.error('Redis client error in recurring time store', decomposeError(err)));
  await redisClient.connect();

  if ('keyPrefix' in redisConfig) {
    delete redisConfig.keyPrefix;
  }

  const jobEvents = await events.topic('io.restorecommerce.jobs');
  const redisURL = new URL(redisConfig.url);

  logger.info(`Registering worker for queue ${queue}`);
  const worker = new Worker(queue, async job => {
    const filteredJob = _filterQueuedJob(job, logger);
    // For recurring job add time so if service goes down we can fire jobs
    // for the missed schedules comparing the last run time
    let lastRunTime;
    if (filteredJob?.opts?.repeat &&
      (filteredJob.opts.repeat?.every ||
        filteredJob.opts.repeat?.pattern)) {
      if (filteredJob?.data) {
        // adding time to payload data for recurring jobs
        const dateTime = new Date();
        lastRunTime = JSON.stringify({ time: dateTime });
        const bufObj = Buffer.from(JSON.stringify({ time: dateTime }));
        if (filteredJob?.data?.payload) {
          if (filteredJob?.data?.payload?.value) {
            let jobBufferObj;
            try {
              jobBufferObj = JSON.parse(filteredJob.data.payload.value.toString());
            } catch (error: any) {
              logger.error('Error parsing job payload', decomposeError(error));
            }

            if (!jobBufferObj) {
              jobBufferObj = {};
            }
            const jobTimeObj = Object.assign(jobBufferObj, { time: dateTime });
            // set last run time on DB index 7 with jobType identifier
            await redisClient.set(filteredJob.name, lastRunTime);
            filteredJob.data.payload.value = Buffer.from(JSON.stringify(jobTimeObj));
          } else {
            await redisClient.set(filteredJob.name, lastRunTime);
            filteredJob.data.payload = { value: bufObj, type_url: '' };
          }
        } else {
          await redisClient.set(filteredJob.name, lastRunTime);
          filteredJob.data = {
            subject_id: filteredJob.data.subject_id,
            payload: { value: bufObj, type_url: '' }
          };
        }
      }
    }

    logger.verbose(`job@${filteredJob.name}#${filteredJob.id} started execution`, filteredJob);
    const start = Date.now();
    const result = await cb(job);
    logger.verbose(`job@${filteredJob.name}#${filteredJob.id} completed in ${Date.now() - start}ms`, filteredJob);
    let marshalledResult: any;
    if (result)
      marshalledResult = marshallProtobufAny(result);
    await jobEvents.emit('jobDone', {
      id: job.id,
      type: job.name,
      schedule_type: job.data.schedule_type,
      result: marshalledResult
    });

    return result;
  }, {
    connection: {
      ...redisConfig,
      host: redisURL.hostname,
      port: parseInt(redisURL.port)
    },
    concurrency,
    autorun: false
  });
  worker.setMaxListeners(100); // default 10 is too low!
  worker.on('error', err => logger.error(`worker#${queue} error`, decomposeError(err)));
  worker.on('closed', () => logger.verbose(`worker#${queue} closed`));
  worker.on('progress', (j, p) => logger.debug(`worker#${queue} job#${j.id} progress`, p));
  worker.on('failed', async (j, err) => {
    logger.error(`worker#${queue} job#${j.id} failed`, decomposeError(err));
    await jobEvents.emit(
      'jobFailed', 
      {
        id: j.id,
        schedule_type: j.data.schedule_type,
        error: err.message,
        type: j.name }
      ).catch(err => {
        logger.error(`Error emitting jobFailed event for ${j.name}`, decomposeError(err));
      }
    );
  });
  worker.on('closing', msg => logger.verbose(`worker#${queue} closing: ${msg}`));
  worker.on('completed', j => logger.info(`worker#${queue} job#${j.id} completed`));
  worker.on('stalled', j => logger.warn(`worker#${queue} job#${j} stalled`));
  worker.on('drained', () => logger.verbose(`worker#${queue} drained`));
  worker.on('paused', () => logger.verbose(`worker#${queue} paused`));
  worker.on('ready', () => logger.verbose(`worker#${queue} ready`));
  worker.on('resumed', () => logger.verbose(`worker#${queue} resumed`));

  worker.run().catch(err => logger.error(`worker#${queue} run error`, decomposeError(err)));
  await worker.waitUntilReady();
  return worker;
};

export type RunWorkerFunc = typeof runWorker;
export type DefaultExportFunc = (
  cfg: ServiceConfig,
  logger: Logger,
  events: Events,
  runWorker: RunWorkerFunc,
) => Promise<void>;
export * from './types.js';
