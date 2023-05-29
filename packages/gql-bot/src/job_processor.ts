import * as _ from 'lodash';
import * as ps from 'promise-streams';
import { Readable } from 'stream';
import * as through2 from 'through2';
import readdirp from 'readdirp';
import * as path from 'path';
import { EventEmitter } from 'events';
import { stringToChalk, processResponse } from './utils';

export class ReadArrayStream extends Readable {
  array: any[];

  constructor(opts: any, array: any[]) {
    super(opts);
    this.array = _.clone(array);
  }

  _read(): void {
    if (this.array && this.array.length > 0) {
      const data = this.array.shift();
      this.push(data);
    } else {
      this.push(null);
    }
  }
}

/*
 * A class to represent a job and its end result as promise.
 * It also reports the progress as event emitter.
 */
export class Job extends EventEmitter {
  opts: any;
  done = false;
  error = undefined;

  constructor(opts?: any) {
    super();
    this.setMaxListeners(100);
    this.opts = opts || {};
    this.once('done', () => this.done = true);
    this.once('error', (err) => this.error = err);
  }

  async wait() {
    if (this.error) {
      throw this.error;
    }

    if (this.done) {
      return;
    }

    return new Promise((resolve, reject) => {
      this.once('done', resolve);
      this.once('error', reject);
    });
  }
}

export class JobProcessor {
  jobInfo: any;
  processedTasks: number;
  taskStream: ps.PromiseStream<any>;

  constructor(jobInfo: any) {
    this.jobInfo = jobInfo;

    _.defaults(this.jobInfo, {
      concurrency: 3,
      processor: null
    });
  }

  async start(tasks?: any, job?: Job, verbose = false, ignoreErrors = false, ignoreSelfSigned = false): Promise<any> {
    job = job || new Job();
    tasks = tasks || this.jobInfo.tasks;

    const concurrency = this.jobInfo.options.concurrency;
    this.taskStream = ps.map({concurrent: concurrency}, (task: any) => {
      return this.jobInfo.options.processor.process(task, verbose, ignoreErrors, ignoreSelfSigned).then((body) => {
        const logColor = stringToChalk(task.name);

        if (verbose) {
          const processed = processResponse(body);
          console.log(`[${logColor(task.name)}] Completed`, JSON.stringify(processed));
        } else {
          console.log(`[${logColor(task.name)}] Completed`);
        }

        task.inputTask.processing--;
        task.progress.value = 100; // task complete
        job.emit('progress', task);
      });
    });

    this.taskStream.setMaxListeners(100);
    const inputTaskStream = new ReadArrayStream({
      objectMode: true
    }, tasks);

    inputTaskStream.pipe(through2.obj(async (task, enc, cb) => {
      const operation = task.operation;
      await this[operation].apply(this, [task, job]);
      cb();
    }));

    await ps.wait(inputTaskStream);

    this.taskStream.on('error', (err) => {
      job.emit('error', err);
    });

    const tasksStreamEnded = ps.wait(this.taskStream);

    // Wait until the task stream emitted 'end'
    tasksStreamEnded.then(() => {
      job.emit('done');
    });

    return job;
  }

  async sync(task: any, job: Job): Promise<any> {
    const pathOptions = {
      fileFilter: (entry) => {
        return true;
      },
      depth: 1,
      lstat: true
    };
    const pathSegments = [process.cwd()];
    if (!_.isUndefined(this.jobInfo.base)) {
      pathSegments.push(this.jobInfo.base);
    }
    if (!_.isUndefined(task.src)) {
      pathSegments.push(task.src);
    }

    pathOptions.fileFilter = task.filter || pathOptions.fileFilter;

    if (task.depth) {
      pathOptions.depth = task.depth;
    } else {
      delete pathOptions.depth;
    }

    const fileItemStream = readdirp(path.join.apply(this, pathSegments), pathOptions);

    await new Promise((resolve, reject) => {
      fileItemStream
        .on('warn', (warn) => {
          job.emit('warn', warn);
        })
        .on('error', (err) => {
          job.emit('error', err);
        })
        .on('data', (fileItem) => {
          fileItem.progress = {
            value: 0
          };
          _.merge(fileItem, task);
          if (!task.processing) {
            task.processing = 0;
          }
          task.processing++;
          fileItem.inputTask = task;
          job.emit('progress', fileItem);
          resolve(job);
        })
        .on('end', () => {
          if (!this.processedTasks) {
            this.processedTasks = 0;
          }
          this.processedTasks++;
          // Check processedTasks tasks
          // Manually emit `end` event for all tasks finished
          if (this.processedTasks === this.jobInfo.tasks.length) {
            this.taskStream._flush(() => {
            });
            this.taskStream.end();
          }
        })
        .pipe(this.taskStream, {end: false});
    });
  }
}
