import * as fs from 'fs';
import {expect, it, describe, beforeAll, afterEach} from 'vitest';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

import { GraphQLProcessor, JobProcessor, Job } from '../src';

const server = setupServer();

describe('jobproc-grapqhl-proc:', (): void => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  it('a job processor can be instantiated', () => {
    const job1 = JSON.parse(fs.readFileSync('./test/job1.json', 'utf8'));
    job1.options.processor = new GraphQLProcessor({
      entry: 'http://example.com/graphql'
    });

    const jobProcessor = new JobProcessor(job1);
    expect(jobProcessor).not.toBe(undefined);
  });

  it('a job should start and process import Users jobs and should run to completion',
    async (): Promise<void> => {
      const respMessage = {
        data: {
          createUsers: {
            regStatus: ['users registered successfully'],
            error: [],
            __typename: 'Sample'
          }
        }
      };

      const filesToBeFound = 1;
      let filesFound = 0;

      server.use(http.post('http://example.com/graphql', () => HttpResponse.json(respMessage)));

      const jobResult = new Job();

      jobResult.on('progress', (task) => {
        if (task.progress.value === 0) {
          filesFound++;
        }
      });

      const job1 = JSON.parse(fs.readFileSync('./test/job1.json', 'utf8'));
      job1.options.processor = new GraphQLProcessor({
        entry: 'http://example.com/graphql'
      });

      const jobProcessor = new JobProcessor(job1);

      await jobProcessor.start(null, jobResult, true);
      await jobResult.wait().catch((err: Error) => {
        throw err;
      });

      expect(filesFound).to.equal(filesToBeFound);
    });

  it('a job should start and process multiple tasks and should run to completion',
    async (): Promise<void> => {
      const createUsersRespMessage = {
        data: {
          createUsers: {
            regStatus: ['All users registered successfully'],
            error: [],
            __typename: 'Sample'
          }
        }
      };

      const createOrgsRespMessage = {
        data: {
          createOrganizations: {
            regStatus: ['All Organizations registered successfully'],
            error: [],
            __typename: 'Sample'
          }
        }
      };

      const filesToBeFound = 2;
      let filesFound = 0;

      server.use(http.post('http://example.com/graphql', async ({ request }) => HttpResponse.json(
        (await request.json() as any).query.indexOf('createOrganizations') >= 0 ? createOrgsRespMessage : createUsersRespMessage
      )));

      const job2 = JSON.parse(fs.readFileSync('./test/job2.json', 'utf8'));
      job2.options.processor = new GraphQLProcessor({
        entry: 'http://example.com/graphql'
      });

      const jobProcessor = new JobProcessor(job2);
      const jobResult = new Job();

      jobResult.on('progress', (task) => {
        if (task.progress.value === 0) {
          filesFound++;
        }
      });

      await jobProcessor.start(null, jobResult, true);
      await jobResult.wait();

      expect(filesFound).to.equal(filesToBeFound);
    });

  it('a job should start and process yml tasks and should run to completion',
    async (): Promise<void> => {
      const filesToBeFound = 1;
      let filesFound = 0;

      const createUsersRespMessage = {
        data: {
          createUsers: {
            regStatus: ['All users imported successfully'],
            error: [],
            __typename: 'Sample'
          }
        }
      };

      const job3 = JSON.parse(fs.readFileSync('./test/job3.json', 'utf8'));
      job3.options.processor = new GraphQLProcessor({
        entry: 'http://example.com/graphql'
      });

      server.use(http.post('http://example.com/graphql', () => HttpResponse.json(createUsersRespMessage)));

      const jobProcessor = new JobProcessor(job3);
      const jobResult = new Job();

      jobResult.on('progress', (task) => {
        if (task.progress.value === 0) {
          filesFound++;
        }
      });

      await jobProcessor.start(null, jobResult, true);
      await jobResult.wait();

      expect(filesFound).to.equal(filesToBeFound);
    });

  it('a job should error when encountering IoRestorecommerceStatusOperationStatus',
    async (): Promise<void> => {
      const createUsersRespMessage = {
        data: {
          createUsers: {
            regStatus: ['Failed to import users'],
            error: {
              code: 403,
              message: 'Access denied',
              __typename: 'IoRestorecommerceStatusOperationStatus'
            },
            __typename: 'Sample'
          }
        }
      };

      const job3 = JSON.parse(fs.readFileSync('./test/job3.json', 'utf8'));
      job3.options.processor = new GraphQLProcessor({
        entry: 'http://example.com/graphql'
      });

      server.use(http.post('http://example.com/graphql', () => HttpResponse.json(createUsersRespMessage)));

      const jobProcessor = new JobProcessor(job3);
      const jobResult = new Job();

      await jobProcessor.start(null, jobResult, true);

      const resultError = await jobResult.wait().catch(err => err);

      expect(resultError).not.toBe(undefined);
      expect((resultError as Error).message).to.equal('{"code":403,"message":"Access denied"}');
    });

  it('a job should error when encountering IoRestorecommerceStatusStatus',
    async (): Promise<void> => {
      const createUsersRespMessage = {
        data: {
          createUsers: {
            regStatus: ['Failed to import users'],
            error: {
              code: 403,
              message: 'Access denied',
              __typename: 'IoRestorecommerceStatusStatus'
            },
            __typename: 'Sample'
          }
        }
      };

      const job3 = JSON.parse(fs.readFileSync('./test/job3.json', 'utf8'));
      job3.options.processor = new GraphQLProcessor({
        entry: 'http://example.com/graphql'
      });

      server.use(http.post('http://example.com/graphql', () => HttpResponse.json(createUsersRespMessage)));

      const jobProcessor = new JobProcessor(job3);
      const jobResult = new Job();

      await jobProcessor.start(null, jobResult, true);

      const resultError = await jobResult.wait().catch(err => err);

      expect(resultError).not.toBe(undefined);
      expect((resultError as Error).message).to.equal('{"code":403,"message":"Access denied"}');
    });

  it('a job should error when encountering a self-signed certificate',
    async (): Promise<void> => {
      const job3 = JSON.parse(fs.readFileSync('./test/job3.json', 'utf8'));
      job3.options.processor = new GraphQLProcessor({
        entry: 'https://self-signed.badssl.com/'
      });

      const jobProcessor = new JobProcessor(job3);
      const jobResult = new Job();

      await jobProcessor.start(null, jobResult, true);

      const resultError = await jobResult.wait().catch(err => err);

      expect(resultError).not.toBe(undefined);

      server.listen();
    });

  it('a job should pass when ignoring a self-signed certificate',
    async (): Promise<void> => {
      const job3 = JSON.parse(fs.readFileSync('./test/job3.json', 'utf8'));
      job3.options.processor = new GraphQLProcessor({
        entry: 'https://self-signed.badssl.com/'
      });

      const jobProcessor = new JobProcessor(job3);
      const jobResult = new Job();

      await jobProcessor.start(null, jobResult, true, false, true);

      const resultError = await jobResult.wait().catch(err => err);

      expect(resultError).not.toBe(undefined);
    });

  it('a job should skip errors when ignored',
    async (): Promise<void> => {
      const userMessage = {
        data: {
          createUsers: {
            regStatus: ['All users imported successfully'],
            error: [],
            __typename: 'Sample'
          }
        }
      };

      const successMessage = {
        data: {
          createOrganizations: {
            regStatus: ['All organizations imported successfully'],
            error: [],
            __typename: 'Sample'
          }
        }
      };

      const errorMessage = {
        data: {
          createOrganizations: {
            regStatus: ['Failed to import organizations'],
            error: {
              code: 403,
              message: 'Access denied',
              __typename: 'IoRestorecommerceStatusStatus'
            },
            __typename: 'Sample'
          }
        }
      };

      const job2 = JSON.parse(fs.readFileSync('./test/job2.json', 'utf8'));
      job2.options.processor = new GraphQLProcessor({
        entry: 'http://example.com/graphql'
      });
      job2.options.concurrency = 1;
      job2.tasks[1].batchSize = 1;

      let i = 0;
      const responses = [
        userMessage,
        userMessage,
        successMessage,
        errorMessage,
        errorMessage,
        successMessage,
      ];
      server.use(http.post('http://example.com/graphql', () => HttpResponse.json(responses[i++])));

      const jobProcessor = new JobProcessor(job2);
      const jobResult = new Job();

      await jobProcessor.start(null, jobResult, true, true);

      const resultError = await jobResult.wait().catch(err => err);

      expect(resultError).toBe(undefined);
    });

  it('a job should error when backend does not exist',
    async (): Promise<void> => {
      const job3 = JSON.parse(fs.readFileSync('./test/job3.json', 'utf8'));
      job3.options.processor = new GraphQLProcessor({
        entry: 'http://localhost:65534/'
      });

      const jobProcessor = new JobProcessor(job3);
      const jobResult = new Job();

      await jobProcessor.start(null, jobResult, true);

      const resultError = await jobResult.wait().catch(err => err);

      expect(resultError).not.toBe(undefined);
    });
});
