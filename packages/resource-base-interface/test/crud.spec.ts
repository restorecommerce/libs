import { ResourcesAPIBase, ServiceBase, toObject } from '../src/index.js';
import * as chassis from '@restorecommerce/chassis-srv';
import { Channel, createChannel, createClient } from '@restorecommerce/grpc-client';
import { Events, registerProtoMeta, Topic } from '@restorecommerce/kafka-client';
import { createServiceConfig } from '@restorecommerce/service-config';
import * as should from 'should';
import { forEach, drop, sortBy, dropLast, filter, prop } from 'remeda';
import {
  Filter_Operation,
  Filter_ValueType,
  ReadRequest,
  protoMetadata as resourceProto,
  Sort_SortOrder,
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/resource_base.js';
import {
  protoMetadata as testProto,
  CRUDDefinition,
  CRUDClient
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/test/test.js';
import { FilterOp_Operator } from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/filter.js';
import { it, describe, beforeAll, afterAll, beforeEach } from 'vitest';

registerProtoMeta(
  resourceProto,
  testProto
);

/*
 * Note: To run this test, a running ArangoDB and Kafka instance is required.
 * (Kafka is needed only if 'events:enableEvents' config is enabled)
 */

const meta = () => {
  return {
    created: new Date(),
    modified: new Date(),
    created_by: 'Admin',
    modified_by: 'Admin',
    owners: [{
      id: 'urn:restorecommerce:acs:names:ownerIndicatoryEntity',
      value: 'urn:restorecommerce:acs:model:user.User',
      attributes: [{
        id: 'urn:restorecommerce:acs:names:ownerInstance',
        value: 'Admin'
      }]
    }]
  };
}

/* global describe it before after beforeEach */
describe('converting to filter to object', () => {
  it('should convert proto filter to valid DB filter object', () => {
    const protoFilter = ReadRequest.fromPartial({
      filters: [{
        filters: [
          {
            field: 'device_id',
            operation: Filter_Operation.eq,
            value: '12345'
          },
          {
            field: 'overall_status',
            operation: Filter_Operation.in,
            value: '["BAD", "GOOD"]',
            type: Filter_ValueType.ARRAY,
          },
          {
            field: 'device_active',
            operation: Filter_Operation.eq,
            value: 'true',
            type: Filter_ValueType.BOOLEAN,
          },
          {
            filters: [{
              filters: [{
                field: 'firstname',
                operation: Filter_Operation.eq,
                value: 'test_first'
              }, {
                field: 'lastname',
                operation: Filter_Operation.eq,
                value: 'test_last'
              }, {
                field: 'middleName',
                operation: Filter_Operation.eq,
                value: 'test_middle'
              }],
              operator: FilterOp_Operator.and,
            }],
          }
        ], // Default And case
        operator: FilterOp_Operator.or,
      }]
    });
    /* eslint-disable */
    const expectedDBObject = { "$or": [{ "device_id": "12345" }, { "overall_status": { "$in": ["BAD", "GOOD"] } }, { "device_active": true }, { "$and": [{ "firstname": "test_first" }, { "lastname": "test_last" }, { "middleName": "test_middle" }] }] };
    const dbFilter = toObject(protoFilter);
    should.exist(dbFilter);
    dbFilter.should.deepEqual(expectedDBObject);
  });

  it('should convert nested proto filter to valid DB filter object', () => {
    const protoFilter = ReadRequest.fromPartial({
      filters: [
        {
          filters: [
            {
              filters: [
                {
                  filters: [
                    {
                      field: 'user_type',
                      operation: Filter_Operation.neq,
                      value: 'TECHNICAL_USER'
                    },
                    {
                      field: 'first_name',
                      operation: Filter_Operation.iLike,
                      value: '%test%'
                    },
                    {
                      field: 'last_name',
                      operation: Filter_Operation.iLike,
                      value: '%test%'
                    }
                  ],
                  operator: FilterOp_Operator.and,
                }
              ]
            },
            {
              filters: [
                {
                  filters: [
                    {
                      field: 'state',
                      operation: Filter_Operation.eq,
                      value: 'BW'
                    },
                    {
                      field: 'city',
                      operation: Filter_Operation.eq,
                      value: 'Stuttgart'
                    },
                  ],
                  operator: FilterOp_Operator.and,
                }
              ]
            }
          ],
          operator: FilterOp_Operator.or, // Final Or operator
        }
      ]
    });
    /* eslint-disable */
    const expectedDBObject = { "$or": [{ "$and": [{ "user_type": { "$not": { "$eq": "TECHNICAL_USER" } } }, { "first_name": { "$iLike": "%test%" } }, { "last_name": { "$iLike": "%test%" } }] }, { "$and": [{ "state": "BW" }, { "city": "Stuttgart" }] }] }
    const dbFilter = toObject(protoFilter);
    should.exist(dbFilter);
    dbFilter.should.deepEqual(expectedDBObject);
  });

  it('should convert filters array to valid DB filter object', () => {
    const protoFilter = ReadRequest.fromPartial({
      filters: [
        {
          filters: [
            {
              field: 'id',
              operation: Filter_Operation.in,
              value: 'test1',
            }
          ],
          operator: FilterOp_Operator.and,
        },
        {
          filters: [
            {
              field: 'id',
              operation: Filter_Operation.eq,
              value: 'test2',
            }
          ],
          operator: FilterOp_Operator.or,
        }
      ]
    });
    /* eslint-disable */
    const expectedDBObject = [{ "$and": [{ "id": { "$in": "test1" } }] }, { "$or": [{ "id": "test2" }] }]
    const dbFilter = toObject(protoFilter);
    should.exist(dbFilter);
    dbFilter.should.deepEqual(expectedDBObject);
  });

});

describe('ServiceBase', () => {
  let db: chassis.GraphDatabaseProvider;
  let server: chassis.Server;
  let bufferedServer: chassis.Server;
  let events: Events;
  let channel: Channel;
  let testService: CRUDClient;
  let testData: any;
  let cfg: any;

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  beforeAll(async () => {
    // Load test config from chassis service config
    cfg = createServiceConfig(process.cwd() + '/test');

    server = new chassis.Server(cfg.get('server'));
    bufferedServer = new chassis.Server(cfg.get('bufferedServer'));

    events = new Events(cfg.get('events:testevents'), server.logger);
    await events.start();
    const resourceName = 'resource';
    const testEvents: Topic = await events.topic('test');
    db = await chassis.database.get(cfg.get('database:testdb'), server.logger) as chassis.GraphDatabaseProvider;
    db.registerCustomQuery!('testFilter', 'filter node.value < @customArguments.testParam', 'filter');

    const bufferHandlerConfig: any = cfg.get('fieldHandlers:bufferFields');
    const entitiesNames = Object.keys(bufferHandlerConfig);
    const requiredFieldsConfig: any = cfg.get('fieldHandlers:requiredFields');
    const timeStampFieldsConfigs: any = cfg.get('fieldHandlers:timeStampFields');
    let resourceFieldConfig: any = {};
    if (bufferHandlerConfig && entitiesNames.includes(resourceName)) {
      resourceFieldConfig['bufferFields'] = bufferHandlerConfig[resourceName];
    }
    if (requiredFieldsConfig && (resourceName in requiredFieldsConfig)) {
      resourceFieldConfig['requiredFields'] = requiredFieldsConfig;
    }
    resourceFieldConfig['timeStampFields'] = [];
    for (let timeStampFiledConfig of timeStampFieldsConfigs) {
      if (timeStampFiledConfig.entities.includes(resourceName)) {
        resourceFieldConfig['timeStampFields'].push(...timeStampFiledConfig.fields);
      }
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

    const bufferResourceName = 'testBufferedData';
    if (bufferHandlerConfig && entitiesNames.includes(bufferResourceName)) {
      if (!resourceFieldConfig) {
        resourceFieldConfig = {};
      }
      resourceFieldConfig['bufferFields'] = bufferHandlerConfig[bufferResourceName];
    }

    // Create buffered service and bind it to gRPC server
    const resourceBufferAPI: ResourcesAPIBase = new ResourcesAPIBase(db, `${bufferResourceName}s`, resourceFieldConfig);
    const bufferService = new ServiceBase<any, any>(bufferResourceName, testEvents,
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
  afterAll(async () => {
    await channel.close();
    await server.stop();
    await bufferedServer.stop();
    await events.stop();
  });
  describe('endpoints', () => {
    beforeEach(async () => {
      db = await chassis.database.get(cfg.get('database:testdb'), server.logger) as chassis.GraphDatabaseProvider;
      await db.truncate();

      testData = [
        { id: 'test_xy', meta: meta(), value: 1, text: 'first simple sentence for searching', active: true, created: today, status: 'GOOD' },
        { id: 'test_xyz', meta: meta(), value: 3, text: 'second test data', active: false, created: tomorrow, status: 'BAD' },
        { id: 'test_zy', meta: meta(), value: 12, text: 'third search data string', active: false, created: tomorrow, status: 'UNKNOWN' }];
      // await db.insert('resources', testData);
      await testService.create({ items: testData, subject: { id: 'Admin' } });
    });
    describe('read', () => {
      it('should return all three elements with no arguments', async () => {
        const result = await testService.read({});
        should.exist(result);
        should.exist(result.items);
        should.exist(result.total_count);
        result.total_count!.should.be.equal(3);
        result.items!.should.be.Array();
        result.items!.should.length(3);
        for (let data of testData) {
          delete data?.meta?.modified;
        }
        forEach(result.items, (item) => {
          // delete modified field as it will be changed when creating
          delete item!.payload!.meta!.modified;
          testData.should.matchAny(item.payload);
        });
        should.exist(result.operation_status);
        result.operation_status!.code!.should.equal(200);
        result.operation_status!.message!.should.equal('success');
      });
      it('should return two elements with offset 1', async () => {
        const compareData = drop((await testService.read({})).items, 1);
        const result = await testService.read({
          offset: 1,
        });
        should.exist(result);
        should.exist(result.items);
        should.exist(result.total_count);
        result.total_count!.should.be.equal(compareData.length);
        result.items!.should.be.Array();
        result.items!.should.length(2);

        sortBy(result.items, prop('payload', 'id')).should.deepEqual(sortBy(compareData, prop('payload', 'id')));
        result.operation_status!.code!.should.equal(200);
        result.operation_status!.message!.should.equal('success');
      });
      it('should return two elements with limit 2', async () => {
        const compareData = dropLast((await testService.read({})).items, 1);
        const result = await testService.read({
          limit: 2,
        });
        should.exist(result);
        should.exist(result.items);
        should.exist(result.total_count);
        result.total_count!.should.be.equal(compareData.length);
        result.items!.should.be.Array();
        result.items!.should.length(2);
        sortBy(result.items, prop('payload', 'id')).should.deepEqual(sortBy(compareData, prop('payload', 'id')));
        result.operation_status!.code!.should.equal(200);
        result.operation_status!.message!.should.equal('success');
      });
      it('should return elements sorted', async () => {
        const result = await testService.read({
          sorts: [{
            field: 'value',
            order: Sort_SortOrder.DESCENDING,
          }],
        });
        should.exist(result);
        should.exist(result.items);
        should.exist(result.total_count);
        result.total_count!.should.be.equal(3);
        result.items!.should.be.Array();
        result.items!.should.length(3);
        const testDataDescending = testData.sort((a: any, b: any) => {
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
        for (let i = 0; i < result.items!.length; i++) {
          result.items![i].payload!.should.deepEqual(testDataDescending[i]);
        }
        result.operation_status!.code!.should.equal(200);
        result.operation_status!.message!.should.equal('success');
      });
      it('should return only resources with value higher than 10', async () => {
        const filters = [{
          filters: [{
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
        result.total_count!.should.be.equal(1);
        result.items!.should.be.Array();
        result.items!.should.length(1);
        result.items![0].payload!.should.deepEqual(testData[2]); // testData[2] is object with value > 10
        result.operation_status!.code!.should.equal(200);
        result.operation_status!.message!.should.equal('success');
      });
      it('should return only resources with string filter value equal to id', async () => {
        const filters = [{
          filters: [{
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
        result.total_count!.should.be.equal(1);
        result.items!.should.be.Array();
        result.items!.should.length(1);
        result.items![0].payload!.should.deepEqual(testData[0]); // testData[9] is object with value 'test_xy'
        result.operation_status!.code!.should.equal(200);
        result.operation_status!.message!.should.equal('success');
      });
      it('should return only resources matching boolean filter', async () => {
        const filters = [{
          filters: [{
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
        result.total_count!.should.be.equal(1);
        result.items!.should.be.Array();
        result.items!.should.length(1);
        result.items![0].payload!.should.deepEqual(testData[0]);
        result.operation_status!.code!.should.equal(200);
        result.operation_status!.message!.should.equal('success');
      });
      it('should return resources matching date filter', async () => {
        const todayDatePlusOneMin = new Date();
        todayDatePlusOneMin.setSeconds(todayDatePlusOneMin.getSeconds() + 60);
        // timeObject.setSeconds(timeObject.getSeconds() + 60);
        const filters = [{
          filters: [{
            field: 'created',
            operation: Filter_Operation.lt,
            value: todayDatePlusOneMin.toString(),
            type: Filter_ValueType.DATE,
          }]
        }];
        const result = await testService.read({
          filters
        });
        should.exist(result);
        should.exist(result.items);
        should.exist(result.total_count);
        result.total_count!.should.be.equal(1);
        result.items!.should.be.Array();
        result.items!.should.length(1);
        const resultPayload = result.items!.map(item => item.payload);
        sortBy(resultPayload, prop('id')).should.deepEqual(sortBy(filter(testData, (data) => {
          return data.created <= today.getTime();
        }), prop('id')));
        result.operation_status!.code!.should.equal(200);
        result.operation_status!.message!.should.equal('success');
      });
      it('should return resources matching array filter', async () => {
        const filters = [{
          filters: [{
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
        result.total_count!.should.be.equal(2);
        result.items!.should.be.Array();
        result.items!.should.length(2);
        const resultPayload = result.items!.map(item => {
          delete item.payload!.meta?.modified;
          return item.payload;
        });
        sortBy(resultPayload, prop('id')).should.deepEqual(sortBy(filter(testData, (data) => {
          // data.created = new Date(data.created);
          delete data.meta!.modified;
          return (data.status === "BAD" || data.status === "UNKNOWN");
        }), prop('id')));
        result.operation_status!.code!.should.equal(200);
        result.operation_status!.message!.should.equal('success');
      });
      it('should return only resources with not equal filter', async () => {
        const filters = [{
          filters: [{
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
        result.total_count!.should.be.equal(2);
        result.items!.should.be.Array();
        result.items!.should.length(2);
        // delete modified property
        const resultPayload = result.items!.map(item => {
          delete item.payload!.meta?.modified;
          return item.payload;
        });
        sortBy(resultPayload, prop('id')).should.deepEqual(sortBy(filter(testData, (data) => {
          delete data.meta!.modified;
          return data.id != 'test_xy';
        }), prop('id')));
        result.operation_status!.code!.should.equal(200);
        result.operation_status!.message!.should.equal('success');
      }, 4000);
      it('should return elements only with field value', async () => {
        const result = await testService.read({
          fields: [{
            name: 'value',
            include: true,
          }],
        });
        should.exist(result);
        should.exist(result.items);
        should.exist(result.total_count);
        result.total_count!.should.be.equal(3);
        result.items!.should.be.Array();
        result.items!.should.length(3);
        const testDataReduced = [
          { value: testData[0].value },
          { value: testData[1].value },
          { value: testData[2].value },
        ];
        const resultPayload = result.items!.map(item => item.payload);
        sortBy(resultPayload, prop('value')).should.deepEqual(sortBy(testDataReduced, prop('value')));
        result.operation_status!.code!.should.equal(200);
        result.operation_status!.message!.should.equal('success');
      });
      it('should apply a custom filter', async () => {
        const result = await testService.read({
          fields: [{
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
        
        result.total_count!.should.be.equal(2);
        result.items!.should.be.Array();
        result.items!.should.length(2);
        
        const testDataReduced = [
          { value: testData[0].value },
          { value: testData[1].value },
        ];
        const resultPayload = result.items!.map(item => {
          delete item.payload!.meta?.modified;
          return item.payload;
        });
        sortBy(resultPayload, prop('value')).should.deepEqual(sortBy(testDataReduced, prop('value')));
        result.operation_status!.code!.should.equal(200);
        result.operation_status!.message!.should.equal('success');
      });
      it('fulltext search - should return only matching documents as per search string (default case insensitive)', async () => {
        await new Promise((resolve, reject) => {
          setTimeout(resolve, 2000);
        });
        const result = await testService.read({
          search: {
            search: 'EaRc' // will match search text from above `text` data and return 2 documents
          }
        });
        result.items!.length.should.equal(2);
        result.items![0].payload!.id!.should.equal('test_xy');
        result.items![0].payload!.text!.should.equal('first simple sentence for searching');
        result.items![1].payload!.id!.should.equal('test_zy');
        result.items![1].payload!.text!.should.equal('third search data string');
      }, 5000);

      it('fulltext search - should return only matching documents as per search string (default case insensitive)', async () => {
        await new Promise((resolve, reject) => {
          setTimeout(resolve, 2000);
        });
        const result = await testService.read({
          search: {
            search: 'data' // will match search text from above `text` data and return 2 documents
          }
        });
        result.items!.length.should.equal(2);
        result.items![0].payload!.id!.should.equal('test_xyz');
        result.items![0].payload!.text!.should.equal('second test data');
        result.items![1].payload!.id!.should.equal('test_zy');
        result.items![1].payload!.text!.should.equal('third search data string');
      }, 5000);

      it('fulltext search - should not return any matching documents as per search string with case sensitive search', async () => {
        await new Promise((resolve, reject) => {
          setTimeout(resolve, 2000);
        });
        const result = await testService.read({
          search: {
            search: 'DATA', // will not match search text from above `text` data and should not return any documents
            case_sensitive: true
          }
        });
        should.not.exist(result.items);
      }, 5000);
    });
    describe('create', () => {
      it('should create new documents and validate duplicate element error', async () => {
        const meta = {
          acl: [] as any[],
          created_by: 'Admin',
          modified_by: 'Admin',
          owners: [{
            id: 'urn:restorecommerce:acs:names:ownerIndicatoryEntity',
            value: 'urn:restorecommerce:acs:model:user.User',
            attributes: [{
              attribute: [] as any[],
              id: 'urn:restorecommerce:acs:names:ownerInstance',
              value: 'Admin'
            }]
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
        const result = await testService.create({ items: newTestData, subject: { id: 'Admin' } });
        should.exist(result);
        should.exist(result.items);
        result.items!.should.be.length(3);
        result.items!.should.matchEach((e) => {
          if (e.payload) { // since there is one element with payload undefined for duplicate element with error status
            return e.payload!.value === -10 && e.payload!.text.length > 0;
          }
        });
        // validate overall status
        should.exist(result.operation_status);
        result.operation_status!.code!.should.equal(207);
        // validate error status for duplicate element
        result.items![2].status!.message!.should.equal(
          `unique constraint violated - in index primary of type primary over '_key'; conflicting key: test_newdata2`
        );
        result.items![2].status!.code!.should.equal(409);
        const allTestData = await testService.read({});
        should.exist(allTestData);
        should.exist(allTestData.operation_status);
        // total 5 items should exist (3 from beginning, 2 from this test case)
        allTestData.items!.length.should.equal(5);

        const compareData = [...testData, ...result.items.map((item) => item.payload)];
        // delete modified property from meta data
        for (let data of compareData) {
          delete data?.meta?.modified;
        }
        forEach(allTestData.items, (e) => {
          delete e.payload?.meta?.modified;
          compareData.should.matchAny(e.payload!);
        });
      });
    });
    describe('delete', () => {
      it('should delete collection when requested', async () => {
        const result = await testService.delete({ collection: true });
        should.exist(result);
        should.exist(result.operation_status);
        result.operation_status!.code!.should.equal(200);
        result.operation_status!.message!.should.equal('success');

        const allTestData = await testService.read({});
        should.exist(allTestData);
        should.exist(allTestData.operation_status);
        should.not.exist(allTestData.items);
        allTestData.operation_status!.code!.should.equal(200);
        allTestData.operation_status!.message!.should.equal('success');
      });
      it('should delete specified documents and return error if document does not exist', async () => {
        const result = await testService.delete({ ids: [testData[1].id, 'invalidID'] });
        should.exist(result);
        should.exist(result.status);
        // success for 1st id and failure message for second invalid id
        result.status![0].code!.should.equal(200);
        result.status![0].message!.should.equal('success');
        result.status![1].code!.should.equal(404);
        result.status![1].message!.should.equal('document not found');
        should.exist(result.operation_status);
        result.operation_status!.code!.should.equal(207);

        const allTestData = await testService.read({});
        should.exist(allTestData);
        should.exist(allTestData.operation_status);
        should.exist(allTestData);
        should.exist(allTestData.items);
        allTestData.items!.should.length(2);
        allTestData.operation_status!.code!.should.equal(200);
        allTestData.operation_status!.message!.should.equal('success');
        const resultPayload = allTestData.items!.map(item => {
          delete item.payload!.meta?.modified;
          return item.payload;
        });
        // delete modified property for testData[0] and testData[2]
        delete testData[0]?.meta?.modified;
        delete testData[2]?.meta?.modified;
        sortBy(resultPayload, prop('id'))
          .should.deepEqual(sortBy([testData[0], testData[2]], prop('id')));
      });
    });
    describe('update', () => {
      it('should update all specified documents and validate status message', async () => {
        const patch = testData.map((data: any) => {
          data.value = 100;
          data.text = 'test-patch';
          return data;
        });
        const result = await testService.update({ items: patch, subject: { id: 'Admin' } });
        should.exist(result);
        should.exist(result.operation_status);
        should.exist(result.items);
        result.items!.should.matchEach((e) => {
          return e.payload!.value === 100 && e.payload!.text.length === 10;
        });
        result.operation_status!.code!.should.equal(200);
        result.operation_status!.message!.should.equal('success');

        const allTestData = await testService.read({});
        should.exist(allTestData);
        should.exist(allTestData.items);
        should.exist(allTestData.operation_status);
        allTestData.items!.length.should.equal(3);
        result.items!.should.matchEach((e) => {
          return e.payload!.value === 100 && e.payload!.text.length === 10;
        });
      });
      it('should return an error when trying to update invalid document', async () => {
        const patch = [{
          id: 'invalidDocument',
          value: 2,
          text: 'new value'
        }];
        const result = await testService.update({ items: patch, subject: { id: 'Admin' } });
        result.items!.should.length(1);
        should.exist(result.operation_status);
        // validate status of item
        result.items![0].status!.code!.should.equal(404);
        result.items![0].status!.message!.should.equal('document not found');
        // overall status
        result.operation_status!.code!.should.equal(207);
      });
    });
    describe('upsert', () => {
      it('should create or update specified documents', async () => {
        const now = new Date();
        const newID = crypto.randomUUID();
        const replace = [{
          id: 'test_xy',
          value: 0,
          text: 'updated',
        }, {
          id: 'test_xyz',
          value: 0,
          text: 'updated',
        }, {
          id: newID,
          value: 0,
          text: 'created',
        }];
        const result = await testService.upsert({ items: replace, subject: { id: 'Admin' } });
        should.exist(result);
        result.items!.length.should.equal(3);
        result.items![0].payload!.id!.should.equal('test_xy');
        should.exist(result.items![0].payload!.meta!.modified); // since it was updated it should have a modified timestamp.
        result.items![0].payload!.meta!.modified!.getTime().should.be.greaterThan(now.getTime());

        should.exist(result.items![2].payload!.meta!.created);
        result.items![2].payload!.id!.should.equal(newID);
        result.items![2].payload!.meta!.created!.getTime().should.be.greaterThan(now.getTime());
        should.exist(result.operation_status);
        should.exist(result.items);
        result.items!.should.matchEach((e) => {
          return e.payload!.value === 0;
        });
        // overall status
        result.operation_status!.code!.should.equal(200);
        result.operation_status!.message!.should.equal('success');

        
      });
    });
    // Test to check required field
    describe('check required fileds', () => {
      it('should return an error when trying to insert with missing requried fields', async () => {
        let result = await testService.delete({ collection: true });
        should.exist(result);
        should.exist(result.operation_status);
        result.operation_status!.code!.should.equal(200);
        const objectMissingField = [
          { id: 'test_xy', value: 1, meta: meta() },
          { id: 'test_xyz', value: 3, meta: meta() },
          { id: 'test_zy', value: 12, meta: meta() }];
        const result2 = await testService.create({ items: objectMissingField, subject: { id: 'Admin' } });
        should.exist(result2);
        should.exist(result2.operation_status);
        should.exist(result2.items);
        result2.items!.should.length(3);
        for (let item of result2.items!) {
          item.status!.code!.should.equal(400);
          item.status!.message!.should.startWith('Field text is necessary for resource in document');
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
            { value: 1, data: bufData, meta: meta(), text: 'test1' },
            { value: 2, data: bufData, meta: meta(), text: 'test2' }];
          let resp = await testService.create({ items: bufferObjects, subject: { id: 'Admin' } });
          // Read directly from DB and compare the JSON data
          // because normal read() operation again encodes and sends the data back.
          // This way, we check if the data was actually encoded by reading it from the DB.
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
