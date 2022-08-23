'use strict';

import { ResourcesAPIBase, ServiceBase, toObject } from '../lib';
import * as chassis from '@restorecommerce/chassis-srv';
import { Channel, createChannel, createClient } from '@restorecommerce/grpc-client';
import { Events, registerProtoMeta, Topic } from '@restorecommerce/kafka-client';
import { createServiceConfig } from '@restorecommerce/service-config';
import * as should from 'should';
import * as _ from 'lodash';
import {
  Filter_Operation,
  Filter_ValueType,
  protoMetadata as resourceProto,
  Sort_SortOrder
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/resource_base';
import {
  protoMetadata as testProto,
  CRUDDefinition,
  CRUDClient
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/test/test';

registerProtoMeta(
  resourceProto,
  testProto
);

/*
 * Note: To run this test, a running ArangoDB and Kafka instance is required.
 * (Kafka is needed only if 'events:enableEvents' config is enabled)
 */

/* global describe it before after beforeEach */
describe('converting to filter to object', () => {
  it('should convert proto filter to valid DB filter object', () => {
    const protoFilter =
    {
      filters: [{
        filter: [
          {
            field: 'device_id',
            operation: 'eq',
            value: '12345'
          },
          {
            field: 'overall_status',
            operation: 'in',
            value: '["BAD", "GOOD"]',
            type: 'ARRAY'
          },
          {
            field: 'device_active',
            operation: 'eq',
            value: 'true',
            type: 'BOOLEAN'
          },
          {
            filters: {
              filter: [{
                field: 'firstname',
                operation: 'eq',
                value: 'test_first'
              }, {
                field: 'lastname',
                operation: 'eq',
                value: 'test_last'
              }, {
                field: 'middleName',
                operation: 'eq',
                value: 'test_middle'
              }],
              operator: 'and'
            },
          }
        ], // Default And case
        operator: 'or'
      }]
    };
    /* eslint-disable */
    const expectedDBObject = { "$or": [{ "device_id": "12345" }, { "overall_status": { "$in": ["BAD", "GOOD"] } }, { "device_active": true }, { "$and": [{ "firstname": "test_first" }, { "lastname": "test_last" }, { "middleName": "test_middle" }] }] };
    const dbFilter = toObject(protoFilter);
    dbFilter.should.deepEqual(expectedDBObject);
  });

  it('should convert nested proto filter to valid DB filter object', () => {
    const protoFilter =
    {
      filters: [
        {
          filter: [
            {
              filters: [
                {
                  filter: [
                    {
                      field: 'user_type',
                      operation: 'neq',
                      value: 'TECHNICAL_USER'
                    },
                    {
                      filters: {
                        filter: [
                          {
                            field: 'first_name',
                            operation: 'iLike',
                            value: '%test%'
                          },
                          {
                            field: 'last_name',
                            operation: 'iLike',
                            value: '%test%'
                          }
                        ],
                        operator: 'or'
                      }
                    }
                  ],
                  operator: 'and'
                }
              ]
            },
            {
              filters: [
                {
                  filter: [
                    {
                      field: 'state',
                      operation: 'eq',
                      value: 'BW'
                    },
                    {
                      field: 'city',
                      operation: 'eq',
                      value: 'Stuttgart'
                    },
                  ],
                  operator: 'and'
                }
              ]
            }
          ],
          operator: 'or' // Final Or operator
        }
      ]
    };
    /* eslint-disable */
    const expectedDBObject = { "$or": [{ "$and": [{ "user_type": { "$not": { "$eq": "TECHNICAL_USER" } } }, { "$or": [{ "first_name": { "$iLike": "%test%" } }, { "last_name": { "$iLike": "%test%" } }] }] }, { "$and": [{ "state": "BW" }, { "city": "Stuttgart" }] }] }
    const dbFilter = toObject(protoFilter);
    dbFilter.should.deepEqual(expectedDBObject);
  });

  it('should convert filters array to valid DB filter object', () => {
    const protoFilter =
    {
      filters: [
        {
          filter: [
            {
              field: 'id',
              operation: 'in',
              value: 'test1'
            }
          ],
          operator: 'and'
        },
        {
          filter: [
            {
              field: 'id',
              operation: 'eq',
              value: 'test2'
            }
          ],
          operator: 'or'
        }
      ]
    };
    /* eslint-disable */
    const expectedDBObject = [{ "$and": [{ "id": { "$in": "test1" } }] }, { "$or": [{ "id": "test2" }] }]
    const dbFilter = toObject(protoFilter);
    dbFilter.should.deepEqual(expectedDBObject);
  });

});

const now = Date.now();
let meta = {
  acl: [],
  created: now,
  modified: now,
  modified_by: 'Admin',
  owner: [{
    attribute: [],
    id: 'urn:restorecommerce:acs:names:ownerIndicatoryEntity',
    value: 'urn:restorecommerce:acs:model:user.User'
  },
  {
    attribute: [],
    id: 'urn:restorecommerce:acs:names:ownerInstance',
    value: 'Admin'
  }]
};


describe('ServiceBase', () => {
  let db: chassis.GraphDatabaseProvider;
  let server: chassis.Server;
  let bufferedServer: chassis.Server;
  let events: Events;
  let channel: Channel;
  let testService: CRUDClient;
  let testData: any;
  let cfg;
  const today = new Date();
  const tomorrow = new Date(((new Date()).getDate() + 1));
  before(async () => {
    // Load test config from chassis service config
    cfg = createServiceConfig(process.cwd() + '/test');

    server = new chassis.Server(cfg.get('server'));
    bufferedServer = new chassis.Server(cfg.get('bufferedServer'));

    events = new Events(cfg.get('events:testevents'), server.logger);
    await events.start();
    const resourceName = 'resource';
    const testEvents: Topic = await events.topic('test');
    db = await chassis.database.get(cfg.get('database:testdb'), server.logger) as chassis.GraphDatabaseProvider;
    db.registerCustomQuery('testFilter', 'filter node.value < @testParam', 'filter');

    const bufferHandlerConfig: any = cfg.get('fieldHandlers:bufferFields');
    const requiredFieldsConfig: any = cfg.get('fieldHandlers:requiredFields');
    let resourceFieldConfig: any;
    if (bufferHandlerConfig && ('testBufferedData' in bufferHandlerConfig)) {
      if (!resourceFieldConfig) {
        resourceFieldConfig = {};
      }
      resourceFieldConfig['bufferField'] = bufferHandlerConfig['testBufferedData'];
    }
    if (requiredFieldsConfig && (resourceName in requiredFieldsConfig)) {
      if (!resourceFieldConfig) {
        resourceFieldConfig = {};
      }
      resourceFieldConfig['requiredFields'] = requiredFieldsConfig;
    }

    const resourceAPI: ResourcesAPIBase = new ResourcesAPIBase(db, `${resourceName}s`, resourceFieldConfig);
    let isEventsEnabled = cfg.get('events:enableEvents');
    if (isEventsEnabled === 'true') {
      isEventsEnabled = true;
    } else { // Undefined means events not enabled
      isEventsEnabled = false;
    }
    const service = new ServiceBase<any, any>('Resource', testEvents,
      server.logger, resourceAPI, isEventsEnabled);
    await server.bind('test', {
      service: CRUDDefinition,
      implementation: service as any
    });

    // Create buffered service and bind it to gRPC server
    const resourceBufferAPI: ResourcesAPIBase = new ResourcesAPIBase(db, 'testBufferedDatas', resourceFieldConfig);
    const bufferService = new ServiceBase<any, any>('testBufferedData', testEvents,
      bufferedServer.logger, resourceBufferAPI, isEventsEnabled);
    await bufferedServer.bind('testBufferedService', {
      service: CRUDDefinition,
      implementation: bufferService as any
    });

    await server.start();
    await bufferedServer.start();

    channel = createChannel(cfg.get('client:test').address);
    testService = createClient({
      ...cfg.get('client:test'),
      logger: server.logger
    }, CRUDDefinition, channel);
  });
  after(async () => {
    await channel.close();
    await server.stop();
    await bufferedServer.stop();
    await events.stop();
  });
  describe('endpoints', () => {
    beforeEach(async () => {
      db = await chassis.database.get(cfg.get('database:testdb'), server.logger) as chassis.GraphDatabaseProvider;
      await db.truncate();
      const now: number = Date.now();
      testData = [
        { id: 'test_xy', meta, value: 1, text: 'a xy', active: true, created: today.getTime(), status: 'GOOD', data: undefined },
        { id: 'test_xyz', meta, value: 3, text: 'second test data', active: false, created: tomorrow.getTime(), status: 'BAD', data: undefined },
        { id: 'test_zy', meta, value: 12, text: 'yz test data', active: false, created: tomorrow.getTime(), status: 'UNKNOWN', data: undefined }];
      await db.insert('resources', testData);
    });
    describe('read', () => {
      it('should return all three elements with no arguments', async () => {
        const result = await testService.read({});
        should.exist(result);
        should.exist(result.items);
        should.exist(result.total_count);
        result.total_count.should.be.equal(3);
        result.items.should.be.Array();
        result.items.should.length(3);
        _.forEach(result.items, (item) => {
          testData.should.matchAny(item.payload);
        });
        should.exist(result.operation_status);
        result.operation_status.code.should.equal(200);
        result.operation_status.message.should.equal('success');
      });
      it('should return two elements with offset 1', async () => {
        const compareData = _.drop((await testService.read({})).items, 1);
        const result = await testService.read({
          offset: 1,
        });
        should.exist(result);
        should.exist(result.items);
        should.exist(result.total_count);
        result.total_count.should.be.equal(compareData.length);
        result.items.should.be.Array();
        result.items.should.length(2);
        _.sortBy(result.items, 'id').should.deepEqual(_.sortBy(compareData, 'id'));
        result.operation_status.code.should.equal(200);
        result.operation_status.message.should.equal('success');
      });
      it('should return two elements with limit 2', async () => {
        const compareData = _.dropRight((await testService.read({})).items, 1);
        const result = await testService.read({
          limit: 2,
        });
        should.exist(result);
        should.exist(result.items);
        should.exist(result.total_count);
        result.total_count.should.be.equal(compareData.length);
        result.items.should.be.Array();
        result.items.should.length(2);
        _.sortBy(result.items, 'id').should.deepEqual(_.sortBy(compareData, 'id'));
        result.operation_status.code.should.equal(200);
        result.operation_status.message.should.equal('success');
      });
      it('should return elements sorted', async () => {
        const result = await testService.read({
          sort: [{
            field: 'id',
            order: Sort_SortOrder.DESCENDING,
          }],
        });
        should.exist(result);
        should.exist(result.items);
        should.exist(result.total_count);
        result.total_count.should.be.equal(3);
        result.items.should.be.Array();
        result.items.should.length(3);
        const testDataDescending = testData.sort((a, b) => {
          if (a.value > b.value) {
            return -1;
          }
          if (a.value < b.value) {
            return 1;
          }
          // a must be equal to b
          return 0;
        });
        // match the descending order
        for (let i = 0; i < result.items.length; i++) {
          result.items[i].payload.should.deepEqual(testDataDescending[i]);
        }
        result.operation_status.code.should.equal(200);
        result.operation_status.message.should.equal('success');
      });
      it('should return only resources with value higher than 10', async () => {
        const filters = [{
          filter: [{
            field: 'value',
            operation: Filter_Operation.gt,
            value: '10',
            type: Filter_ValueType.NUMBER
          }]
        }];
        const result = await testService.read({
          filters
        });
        should.exist(result);
        should.exist(result.items);
        should.exist(result.total_count);
        result.total_count.should.be.equal(1);
        result.items.should.be.Array();
        result.items.should.length(1);
        result.items[0].payload.should.deepEqual(testData[2]); // testData[2] is object with value > 10
        result.operation_status.code.should.equal(200);
        result.operation_status.message.should.equal('success');
      });
      it('should return only resources with string filter value equal to id', async () => {
        const filters = [{
          filter: [{
            field: 'id',
            operation: Filter_Operation.eq,
            value: 'test_xy'
          }]
        }];
        const result = await testService.read({
          filters
        });
        should.exist(result);
        should.exist(result.items);
        should.exist(result.total_count);
        result.total_count.should.be.equal(1);
        result.items.should.be.Array();
        result.items.should.length(1);
        result.items[0].payload.should.deepEqual(testData[0]); // testData[9] is object with value 'test_xy'
        result.operation_status.code.should.equal(200);
        result.operation_status.message.should.equal('success');
      });
      it('should return only resources matching boolean filter', async () => {
        const filters = [{
          filter: [{
            field: 'active',
            operation: Filter_Operation.eq,
            value: 'true',
            type: Filter_ValueType.BOOLEAN
          }]
        }];
        const result = await testService.read({
          filters
        });
        should.exist(result);
        should.exist(result.items);
        should.exist(result.total_count);
        result.total_count.should.be.equal(1);
        result.items.should.be.Array();
        result.items.should.length(1);
        result.items[0].payload.should.deepEqual(testData[0]);
        result.operation_status.code.should.equal(200);
        result.operation_status.message.should.equal('success');
      });
      it('should return resources matching date filter', async () => {
        const filters = [{
          filter: [{
            field: 'created',
            operation: Filter_Operation.lt,
            value: today.toString(),
            type: Filter_ValueType.DATE,
          }]
        }];
        const result = await testService.read({
          filters
        });
        should.exist(result);
        should.exist(result.items);
        should.exist(result.total_count);
        result.total_count.should.be.equal(2);
        result.items.should.be.Array();
        result.items.should.length(2);
        let resultPayload = [];
        for (let item of result.items) {
          resultPayload.push(item.payload);
        }
        _.sortBy(resultPayload, 'id').should.deepEqual(_.sortBy(_.filter(testData, (data) => {
          return data.created < today.getTime();
        }), 'id'));
        result.operation_status.code.should.equal(200);
        result.operation_status.message.should.equal('success');
      });
      it('should return resources matching array filter', async () => {
        const filters = [{
          filter: [{
            field: 'status',
            operation: Filter_Operation.in,
            value: '["BAD", "UNKNOWN"]',
            type: Filter_ValueType.ARRAY,
          }]
        }];
        const result = await testService.read({
          filters
        });
        should.exist(result);
        should.exist(result.items);
        should.exist(result.total_count);
        result.total_count.should.be.equal(2);
        result.items.should.be.Array();
        result.items.should.length(2);
        let resultPayload = [];
        for (let item of result.items) {
          resultPayload.push(item.payload);
        }
        _.sortBy(resultPayload, 'id').should.deepEqual(_.sortBy(_.filter(testData, (data) => {
          return (data.status === "BAD" || data.status === "UNKNOWN");
        }), 'id'));
        result.operation_status.code.should.equal(200);
        result.operation_status.message.should.equal('success');
      });
      it('should return only resources with not equal filter', async () => {
        const filters = [{
          filter: [{
            field: 'id',
            operation: Filter_Operation.neq,
            value: 'test_xy',
          }]
        }];
        const result = await testService.read({
          filters
        });
        should.exist(result);
        should.exist(result.items);
        should.exist(result.total_count);
        result.total_count.should.be.equal(2);
        result.items.should.be.Array();
        result.items.should.length(2);
        let resultPayload = [];
        for (let item of result.items) {
          resultPayload.push(item.payload);
        }
        _.sortBy(resultPayload, 'id').should.deepEqual(_.sortBy(_.filter(testData, (data) => {
          return data.id != 'test_xy';
        }), 'id'));
        result.operation_status.code.should.equal(200);
        result.operation_status.message.should.equal('success');
      });
      it('should return elements only with field value', async () => {
        const result = await testService.read({
          field: [{
            name: 'value',
            include: true,
          }],
        });
        should.exist(result);
        should.exist(result.items);
        should.exist(result.total_count);
        result.total_count.should.be.equal(3);
        result.items.should.be.Array();
        result.items.should.length(3);
        const testDataReduced = [
          { id: '', text: '', meta: undefined, value: testData[0].value, active: false, created: 0, status: '', data: undefined },
          { id: '', text: '', meta: undefined, value: testData[1].value, active: false, created: 0, status: '', data: undefined },
          { id: '', text: '', meta: undefined, value: testData[2].value, active: false, created: 0, status: '', data: undefined },
        ];
        let resultPayload = [];
        for (let item of result.items) {
          resultPayload.push(item.payload);
        }
        _.sortBy(resultPayload, 'value').should.deepEqual(_.sortBy(testDataReduced, 'value'));
        result.operation_status.code.should.equal(200);
        result.operation_status.message.should.equal('success');
      });
      it('should apply a custom filter', async () => {
        const result = await testService.read({
          field: [{
            name: 'value',
            include: true,
          }],
          custom_queries: ['testFilter'],
          custom_arguments: {
            value: Buffer.from(JSON.stringify({ testParam: 12 }))
          }
        });
        should.exist(result);
        should.exist(result.items);
        should.exist(result.total_count);

        result.total_count.should.be.equal(2);
        result.items.should.be.Array();
        result.items.should.length(2);

        const testDataReduced = [
          { id: '', text: '', meta: undefined, value: testData[0].value, active: false, created: 0, status: '', data: undefined },
          { id: '', text: '', meta: undefined, value: testData[1].value, active: false, created: 0, status: '', data: undefined },
        ];
        let resultPayload = [];
        for (let item of result.items) {
          resultPayload.push(item.payload);
        }
        _.sortBy(resultPayload, 'value').should.deepEqual(_.sortBy(testDataReduced, 'value'));
        result.operation_status.code.should.equal(200);
        result.operation_status.message.should.equal('success');
      });
    });
    describe('create', () => {
      it('should create new documents and validate duplicate element error', async () => {
        const meta = {
          acl: [],
          modified_by: 'Admin',
          owner: [{
            attribute: [],
            id: 'urn:restorecommerce:acs:names:ownerIndicatoryEntity',
            value: 'urn:restorecommerce:acs:model:user.User'
          },
          {
            attribute: [],
            id: 'urn:restorecommerce:acs:names:ownerInstance',
            value: 'Admin'
          }]
        };
        const newTestDataFirst = {
          id: 'test_newdata',
          value: -10,
          text: 'new data',
          meta
        };
        const newTestDataSecond = {
          id: 'test_newdata2',
          value: -10,
          text: 'new second data',
          meta
        };
        const testDuplicate = {
          id: 'test_newdata2',
          value: -10,
          text: 'new second data',
          meta
        };
        const newTestData = [newTestDataFirst, newTestDataSecond, testDuplicate];
        const result = await testService.create({ items: newTestData });
        should.exist(result);
        should.exist(result.items);
        result.items.should.be.length(3);
        result.items.should.matchEach((e) => {
          if (e.payload) { // since there is one element with payload undefined for duplicate element with error status
            return e.payload.value === -10 && e.payload.text.length > 0;
          }
        });

        // validate overall status
        should.exist(result.operation_status);
        result.operation_status.code.should.equal(200);
        result.operation_status.message.should.equal('success');
        // validate error status for duplicate element
        result.items[2].status.message.should.equal(`unique constraint violated - in index primary of type primary over '_key'; conflicting key: test_newdata2`);
        result.items[2].status.code.should.equal(409);
        const allTestData = await testService.read({});
        should.exist(allTestData);
        should.exist(allTestData.operation_status);
        // total 5 items should exist (3 from beginning, 2 from this test case)
        allTestData.items.length.should.equal(5);

        const compareData = _.concat(testData, _.map(result.items, (item) => item.payload));
        _.forEach(allTestData.items, (e) => {
          compareData.should.matchAny(e.payload);
        });
      });
    });
    describe('delete', () => {
      it('should delete collection when requested', async () => {
        const result = await testService.delete({ collection: true });
        should.exist(result);
        should.exist(result.status);
        result.status.length.should.equal(3);
        result.status.should.matchEach((status) => {
          return status.code = 200 && status.message === 'success';
        });
        should.exist(result.operation_status);
        result.operation_status.code.should.equal(200);
        result.operation_status.message.should.equal('success');

        const allTestData = await testService.read({});
        should.exist(allTestData);
        should.exist(allTestData.operation_status);
        should.exist(allTestData.items);
        allTestData.items.should.length(0);
        allTestData.operation_status.code.should.equal(200);
        allTestData.operation_status.message.should.equal('success');
      });
      it('should delete specified documents and return error if document does not exist', async () => {
        const result = await testService.delete({ ids: [testData[1].id, 'invalidID'] });
        should.exist(result);
        should.exist(result.status);
        // success for 1st id and failure message for second invalid id
        result.status[0].code.should.equal(200);
        result.status[0].message.should.equal('success');
        result.status[1].code.should.equal(404);
        result.status[1].message.should.equal('document not found');
        should.exist(result.operation_status);
        result.operation_status.code.should.equal(200);
        result.operation_status.message.should.equal('success');

        const allTestData = await testService.read({});
        should.exist(allTestData);
        should.exist(allTestData.operation_status);
        should.exist(allTestData);
        should.exist(allTestData.items);
        allTestData.items.should.length(2);
        allTestData.operation_status.code.should.equal(200);
        allTestData.operation_status.message.should.equal('success');
        let resultPayload = [];
        for (let item of allTestData.items) {
          resultPayload.push(item.payload);
        }
        _.sortBy(resultPayload, 'id')
          .should.deepEqual(_.sortBy([testData[0], testData[2]], 'id'));
      });
    });
    describe('update', () => {
      it('should update all specified documents and validate status message', async () => {
        const patch = _.map(testData, (data) => {
          data.value = 100;
          data.text = 'test-patch';
          return data;
        });
        const result = await testService.update({ items: patch });
        should.exist(result);
        should.exist(result.operation_status);
        should.exist(result.items);
        result.items.should.matchEach((e) => {
          return e.payload.value === 100 && e.payload.text.length === 10;
        });
        result.operation_status.code.should.equal(200);
        result.operation_status.message.should.equal('success');

        const allTestData = await testService.read({});
        should.exist(allTestData);
        should.exist(allTestData.items);
        should.exist(allTestData.operation_status);
        allTestData.items.length.should.equal(3);
        result.items.should.matchEach((e) => {
          return e.payload.value === 100 && e.payload.text.length === 10;
        });
      });
      it('should return an error when trying to update invalid document', async () => {
        const patch = [{
          id: 'invalidDocument',
          value: 2,
          text: 'new value'
        }];
        const result = await testService.update({ items: patch });
        result.items.should.length(1);
        should.exist(result.operation_status);
        // validate status of item
        result.items[0].status.code.should.equal(404);
        result.items[0].status.message.should.equal('document not found');
        // overall status
        result.operation_status.code.should.equal(200);
        result.operation_status.message.should.equal('success');
      });
    });
    describe('upsert', () => {
      it('should create or update specified documents', async () => {
        const now = Date.now();
        const replace = [{
          id: testData[2].id,
          value: 0,
          text: '',
          meta
        }, {
          id: testData[0].id,
          value: 0,
          text: 'patched',
          meta
        }, {
          id: 'test_newput',
          value: 0,
          text: '',
          meta
        }];
        const result = await testService.upsert({ items: replace });
        should.exist(result);
        result.items.length.should.equal(3);
        result.items[0].payload.id.should.equal('test_newput');
        should.exist(result.operation_status);
        should.exist(result.items);
        result.items.should.matchEach((e) => {
          return e.payload.value === 0;
        });
        // overall status
        result.operation_status.code.should.equal(200);
        result.operation_status.message.should.equal('success');
        const allTestData = await testService.read({});
        should.exist(allTestData);
        should.exist(allTestData.operation_status);
        should.exist(allTestData.items);
      });
    });
    // Test to check required field
    describe('check required fileds', () => {
      it('should return an error when trying to insert with missing requried fields', async () => {
        let result = await testService.delete({ collection: true });
        should.exist(result);
        should.exist(result.operation_status);
        result.operation_status.code.should.equal(200);
        result.operation_status.message.should.equal('success');
        const objectMissingField = [
          { id: 'test_xy', value: 1, meta },
          { id: 'test_xyz', value: 3, meta },
          { id: 'test_zy', value: 12, meta }];
        const result2 = await testService.create({ items: objectMissingField });
        should.exist(result2);
        should.exist(result2.operation_status);
        should.exist(result2.items);
        result2.items.should.length(3);
        for (let item of result2.items) {
          item.status.code.should.equal(400);
          item.status.message.should.startWith('Field text is necessary for resource for documentID');
        }
      });
    });
    // Test to check buffered fields
    describe('check buffered fileds', () => {
      it('should decode the buffered field before storing in DB',
        async () => {
          // delete existing data and create new bufferdata message
          await testService.delete({ collection: true });
          const bufData = {
            type_url: '',
            value: Buffer.from(JSON.stringify({ testkey: 'testValue' }))
          };
          const bufferObjects = [
            { value: 1, data: bufData, meta, text: 'test1' },
            { value: 2, data: bufData, meta, text: 'test2' }];
          let resp = await testService.create({ items: bufferObjects });
          // Read directly from DB and compare the JSON data
          // because normal read() operation again encodes and sends the data back.
          // This way, we check if the data was actually encoded by reading it fromt the DB.
          const result = await db.find('resources');
          should.exist(result);
          should.exist(result[0]);
          should.exist(result[0].data.testkey);
          result[0].data.testkey.should.equal('testValue');
          // delete the collection
          await db.truncate('resources');
        });
    });
  });
});
