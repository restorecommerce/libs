import * as fs from 'fs';
import * as nock from 'nock';
import * as mocha from 'mocha';
import * as should from 'should';

import { GraphQLProcessor, JobProcessor, Job } from '../lib';

let jobProcessor;

describe('jobproc-grapqhl-proc:', (): void => {
  it('a job processor can be instantiated', () => {

    const job1 = JSON.parse(fs.readFileSync('./test/job1.json', 'utf8'));
    job1.options.processor = new GraphQLProcessor({
      entry: 'http://example.com/graphql'
    });

    jobProcessor = new JobProcessor(job1);
    should.exist(jobProcessor);
  });

  it('a job should start and process import Users jobs and should run to completion',
    async function (): Promise<void> {
      const respMessage = {
        data: {
          createUsers: {
            regStatus: ['users registered successfully'], error: []
          }
        }
      };
      nock('http://example.com').post('/graphql').reply(200, respMessage);
      let jobResult = new Job();

      jobResult.on('progress', (task) => {
        console.log('Progress:', task.name, task.progress);
      });

      jobResult = await jobProcessor.start(null, jobResult);
    });

  it('a job should start and process multiple tasks and should run to completion',
    async function (): Promise<void> {
      const createUsersRespMessage = {
        data: {
          createUsers: {
            regStatus: ['All users registered successfully'], error: []
          }
        }
      };

      const createOrgsRespMessage = {
        data: {
          createOrganizations: {
            regStatus: ['All Organizations registered successfully'], error: []
          }
        }
      };

      const filesToBeFound = 2;
      let filesFound = 0;

      nock('http://example.com').post('/graphql')
        .reply(200, createUsersRespMessage).post('/graphql')
        .reply(200, createOrgsRespMessage);

      const job3 = JSON.parse(fs.readFileSync('./test/job3.json', 'utf8'));
      job3.options.processor = new GraphQLProcessor({
        entry: 'http://example.com/graphql'
      });

      jobProcessor = new JobProcessor(job3);
      let jobResult = new Job();

      jobResult.on('progress', (task) => {
        console.log('Progress:', task.name, task.progress);
        if (task.progress.value === 0) {
          filesFound++;
        }
      });

      await jobProcessor.start(null, jobResult);
    });

  it('a job should start and process yml tasks and should run to completion',
    async function (): Promise<void> {
      const filesToBeFound = 1;
      let filesFound = 0;

      const createRulesRespMessage = {
        data: {
          createUsers: {
            regStatus: ['All Rules imported successfully'], error: []
          }
        }
      };

      const job4 = JSON.parse(fs.readFileSync('./test/job4.json', 'utf8'));
      job4.options.processor = new GraphQLProcessor({
        entry: 'http://example.com/graphql'
      });
      nock('http://example.com').post('/graphql')
      .reply(200, createRulesRespMessage);

      jobProcessor = new JobProcessor(job4);
      let jobResult = new Job();

      jobResult.on('progress', (task) => {
        console.log('Progress:', task.name, task.progress);
        if (task.progress.value === 0) {
          filesFound++;
        }
      });

      await jobProcessor.start(null, jobResult);
    });
});
