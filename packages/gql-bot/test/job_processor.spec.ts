import * as fs from 'fs';
import nock from 'nock';
import should from 'should';

import { GraphQLProcessor, JobProcessor, Job } from '../src';

describe('jobproc-grapqhl-proc:', (): void => {
  beforeEach(() => {
    nock.cleanAll();
    nock.abortPendingRequests();
  });

  it('a job processor can be instantiated', () => {
    const job1 = JSON.parse(fs.readFileSync('./test/job1.json', 'utf8'));
    job1.options.processor = new GraphQLProcessor({
      entry: 'http://example.com/graphql'
    });

    const jobProcessor = new JobProcessor(job1);
    should.exist(jobProcessor);
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

      nock('http://example.com').persist()
        .post('/graphql').reply(200, respMessage);

      let jobResult = new Job();

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
      await jobResult.wait();

      should(filesFound).equal(filesToBeFound);
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

      nock('http://example.com').persist()
        .post('/graphql')
        .reply(200, (_, body) => {
          return (body as any).query.indexOf('createOrganizations') >= 0 ? createOrgsRespMessage : createUsersRespMessage;
        });

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

      should(filesFound).equal(filesToBeFound);
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

      nock('http://example.com').persist()
        .post('/graphql').reply(200, createUsersRespMessage);

      const jobProcessor = new JobProcessor(job3);
      const jobResult = new Job();

      jobResult.on('progress', (task) => {
        if (task.progress.value === 0) {
          filesFound++;
        }
      });

      await jobProcessor.start(null, jobResult, true);
      await jobResult.wait();

      should(filesFound).equal(filesToBeFound);
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

      nock('http://example.com').persist()
        .post('/graphql').reply(200, createUsersRespMessage);

      const jobProcessor = new JobProcessor(job3);
      const jobResult = new Job();

      await jobProcessor.start(null, jobResult, true);

      const resultError = await jobResult.wait().catch(err => err);

      should(resultError).not.undefined();
      should((resultError as Error).message).equal('{"code":403,"message":"Access denied"}');
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

      nock('http://example.com').persist()
        .post('/graphql').reply(200, createUsersRespMessage);

      const jobProcessor = new JobProcessor(job3);
      const jobResult = new Job();

      await jobProcessor.start(null, jobResult, true);

      const resultError = await jobResult.wait().catch(err => err);

      should(resultError).not.undefined();
      should((resultError as Error).message).equal('{"code":403,"message":"Access denied"}');
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

      should(resultError).not.undefined();
      should((resultError as Error).message).match(/Network error: request to https:\/\/self-signed\.badssl\.com\/ failed, reason: self.signed certificate/);
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

      should(resultError).not.undefined();
      should((resultError as Error).message).equal('Network error: Unexpected token < in JSON at position 0');
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

      nock('http://example.com')
        .post('/graphql').reply(200, userMessage)
        .post('/graphql').reply(200, userMessage)
        .post('/graphql').reply(200, successMessage)
        .post('/graphql').reply(200, errorMessage)
        .post('/graphql').reply(200, errorMessage)
        .post('/graphql').reply(200, successMessage);

      const jobProcessor = new JobProcessor(job2);
      const jobResult = new Job();

      await jobProcessor.start(null, jobResult, true, true);

      const resultError = await jobResult.wait().catch(err => err);

      should(resultError).undefined();
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

      should(resultError).not.undefined();
      should((resultError as Error).message).match(/^Network error: request to http:\/\/localhost:65534\/ failed, reason: connect ECONNREFUSED .+$/);
    });
});
