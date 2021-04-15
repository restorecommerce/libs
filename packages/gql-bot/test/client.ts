import * as fs from 'fs';
import * as nock from 'nock';
import * as mocha from 'mocha';
import * as should from 'should';

import { Client } from '../lib';

// For test we are using createUsers json file, for processing mutliple jobs
// use the jobproc_grapqhql_proc tests
const createUsersMutation = 'test/folder/createUsers.json';
let client;

describe('client', () => {

  it('should succeed', async function (): Promise<any> {
    const fileData = fs.readFileSync(createUsersMutation).toString();
    // Users registered successfully
    const respMessage = 'registered successfully';

    const compResp = {
      data: {
        createUsers: {
          regStatus: ['registered successfully'], error: []
        }
      }
    };

    nock('http://example.com').post('/graphql').reply(200, compResp);

    client = new Client({
      entry: 'http://example.com/graphql'
    });
    const response = await client.post(fileData);
    should.exist(response);
    should.exist(response.data.createUsers);
    should.exist(response.data.createUsers.regStatus);
    response.data.createUsers.regStatus.forEach(function (status: any): any {
      status.toString().should.equal(respMessage);
    }, this);
  });

  it('should return a proper error code', async function () {
    const fileData = fs.readFileSync(createUsersMutation).toString();
    // Users already exists response code
    const respMsg = 'already exist';
    const errorMsg = {
      code: ['003', '003'], message:
      ['Input user test1 already exist', 'Input user test2 already exist']
    };

    const compResp = {
      data: {
        createUsers: {
          regStatus: [], error: [errorMsg]
        }
      }
    };

    nock('http://example.com').post('/graphql').reply(200, compResp);

    const response = await client.post(fileData);
    should.exist(response);
    should.exist(response.data.createUsers);
    should.exist(response.data.createUsers.error);
    response.data.createUsers.error.forEach((error) => {
      should.exist(error);
      should.exist(error.code);
      should.exist(error.message);
      error.code.forEach(code => {
        code.should.equal('003');
      });
      error.message.forEach(msg => {
        msg.should.containEql(respMsg);
      });
    });
  });
});
