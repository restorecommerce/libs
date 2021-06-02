'use strict';

import * as mocha from 'mocha';
import { ServiceBase } from '../lib';
import { ResourcesAPIBase } from '../lib';
import { FilterOperation, FilterValueType } from '../lib/core/interfaces';
import { toObject } from '../lib';
import * as chassis from '@restorecommerce/chassis-srv';
import { Client } from '@restorecommerce/grpc-client';
import { Events, Topic } from '@restorecommerce/kafka-client';
import { createServiceConfig } from '@restorecommerce/service-config';
import * as should from 'should';
import * as _ from 'lodash';

/*
 * Note: To run this test, a running ArangoDB and Kafka instance is required.
 * (Kafka is needed only if 'events:enableEvents' config is enabled)
 */

/* global describe it before after beforeEach */
describe('converting to filter to object', () => {
  it('should convert proto filter to valid DB filter object', () => {
    const protoFilter =
    {
      filters: {
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
      }
    };
    /* eslint-disable */
    const expectedDBObject = { "$or": [{ "device_id": "12345" }, { "overall_status": { "$in": ["BAD", "GOOD"] } }, { "device_active": true }, { "$and": [{ "firstname": "test_first" }, { "lastname": "test_last" }, { "middleName": "test_middle" }] }] };
    const dbFilter = toObject(protoFilter);
    dbFilter.should.deepEqual(expectedDBObject);
  });
});

const now = Date.now();
let meta = {
  created: now,
  modified: now,
  modified_by: 'Admin',
  owner: [{
    id: 'urn:restorecommerce:acs:names:ownerIndicatoryEntity',
    value: 'urn:restorecommerce:acs:model:user.User'
  },
  {
    id: 'urn:restorecommerce:acs:names:ownerInstance',
    value: 'Admin'
  }]
};


describe('ServiceBase', () => {
  let db: chassis.GraphDatabaseProvider;
  let server: chassis.Server;
  let events: Events;
  let client: Client;
  let testService;
  let testData: any;
  let cfg;
  const today = new Date();
  const tomorrow = new Date(((new Date()).getDate() + 1));
  before(async () => {
    // Load test config from chassis service config
    cfg = createServiceConfig(process.cwd() + '/test');
    server = new chassis.Server(cfg.get('server'));
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
    const service: ServiceBase = new ServiceBase('Resource', testEvents,
      server.logger, resourceAPI, isEventsEnabled);
    await server.bind('test', service);

    // Create buffered service and bind it to gRPC server
    const resourceBufferAPI: ResourcesAPIBase = new ResourcesAPIBase(db, 'testBufferedDatas', resourceFieldConfig);
    const bufferService: ServiceBase = new ServiceBase('testBufferedData', testEvents,
      server.logger, resourceBufferAPI, isEventsEnabled);
    await server.bind('testBufferedService', bufferService);

    await server.start();

    client = new Client(cfg.get('client:test'), server.logger);
    testService = await client.connect();
  });
  after(async () => {
    await client.end();
    await server.stop();
    await events.stop();
  });
  describe('endpoints', () => {
    beforeEach(async () => {
      db = await chassis.database.get(cfg.get('database:testdb'), server.logger) as chassis.GraphDatabaseProvider;
      await db.truncate();
      const now: number = Date.now();
      testData = [
        { id: '/test/xy', meta, value: 1, text: 'a xy', active: true, created: today.getTime(), status: 'GOOD' },
        { id: '/test/xyz', meta, value: 3, text: 'second test data', active: false, created: tomorrow.getTime(), status: 'BAD' },
        { id: '/test/zy', meta, value: 12, text: 'yz test data', active: false, created: tomorrow.getTime(), status: 'UNKNOWN' }];
      await db.insert('resources', testData);
    });
    describe('read', () => {
      it('should return all three elements with no arguments', async () => {
        const result = await testService.read({});
        should.exist(result);
        should.not.exist(result.error);
        should.exist(result.data);
        should.exist(result.data.items);
        should.exist(result.data.total_count);
        result.data.total_count.should.be.equal(3);
        result.data.items.should.be.Array();
        result.data.items.should.length(3);
        _.sortBy(result.data.items, 'id').should.deepEqual(_.sortBy(testData, 'id'));
      });
      it('should return two elements with offset 1', async () => {
        const compareData = _.drop((await testService.read({})).data.items, 1);
        const result = await testService.read({
          offset: 1,
        });
        should.exist(result);
        should.not.exist(result.error);
        should.exist(result.data);
        should.exist(result.data.items);
        should.exist(result.data.total_count);
        result.data.total_count.should.be.equal(compareData.length);
        result.data.items.should.be.Array();
        result.data.items.should.length(2);
        _.sortBy(result.data.items, 'id').should.deepEqual(_.sortBy(compareData, 'id'));
      });
      it('should return two elements with limit 2', async () => {
        const compareData = _.dropRight((await testService.read({})).data.items, 1);
        const result = await testService.read({
          limit: 2,
        });
        should.exist(result);
        should.not.exist(result.error);
        should.exist(result.data);
        should.exist(result.data.items);
        should.exist(result.data.total_count);
        result.data.total_count.should.be.equal(compareData.length);
        result.data.items.should.be.Array();
        result.data.items.should.length(2);
        _.sortBy(result.data.items, 'id').should.deepEqual(_.sortBy(compareData, 'id'));
      });
      it('should return elements sorted', async () => {
        const result = await testService.read({
          sort: [{
            field: 'id',
            order: 2, // DESCENDING
          }],
        });
        should.exist(result);
        should.not.exist(result.error);
        should.exist(result.data);
        should.exist(result.data.items);
        should.exist(result.data.total_count);
        result.data.total_count.should.be.equal(3);
        result.data.items.should.be.Array();
        result.data.items.should.length(3);
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
        result.data.items.should.deepEqual(testDataDescending);
      });
      it('should return only resources with value higher than 10', async () => {
        const filters = {
          filter: {
            field: 'value',
            operation: FilterOperation.gt,
            value: '10',
            type: FilterValueType.NUMBER
          }
        };
        const result = await testService.read({
          filters
        });
        should.exist(result);
        should.not.exist(result.error);
        should.exist(result.data);
        should.exist(result.data.items);
        should.exist(result.data.total_count);
        result.data.total_count.should.be.equal(1);
        result.data.items.should.be.Array();
        result.data.items.should.length(1);
        _.sortBy(result.data.items, 'id').should.deepEqual(_.sortBy(_.filter(testData, (data) => {
          return data.value > 10;
        }), 'id'));
      });
      it('should return only resources with string filter value equal to id', async () => {
        const filters = {
          filter: {
            field: 'id',
            operation: FilterOperation.eq,
            value: '/test/xy',
          }
        };
        const result = await testService.read({
          filters
        });
        should.exist(result);
        should.not.exist(result.error);
        should.exist(result.data);
        should.exist(result.data.items);
        should.exist(result.data.total_count);
        result.data.total_count.should.be.equal(1);
        result.data.items.should.be.Array();
        result.data.items.should.length(1);
        _.sortBy(result.data.items, 'id').should.deepEqual(_.sortBy(_.filter(testData, (data) => {
          return data.id === '/test/xy';
        }), 'id'));
      });
      it('should return only resources matching boolean filter', async () => {
        const filters = {
          filter: {
            field: 'active',
            operation: FilterOperation.eq,
            value: 'true',
            type: FilterValueType.BOOLEAN
          }
        };
        const result = await testService.read({
          filters
        });
        should.exist(result);
        should.not.exist(result.error);
        should.exist(result.data);
        should.exist(result.data.items);
        should.exist(result.data.total_count);
        result.data.total_count.should.be.equal(1);
        result.data.items.should.be.Array();
        result.data.items.should.length(1);
        _.sortBy(result.data.items, 'id').should.deepEqual(_.sortBy(_.filter(testData, (data) => {
          return data.active === true;
        }), 'id'));
      });
      it('should return resources matching date filter', async () => {
        const filters = {
          filter: {
            field: 'created',
            operation: FilterOperation.lt,
            value: today.toString(),
            type: FilterValueType.DATE,
          }
        };
        const result = await testService.read({
          filters
        });
        should.exist(result);
        should.not.exist(result.error);
        should.exist(result.data);
        should.exist(result.data.items);
        should.exist(result.data.total_count);
        result.data.total_count.should.be.equal(2);
        result.data.items.should.be.Array();
        result.data.items.should.length(2);
        _.sortBy(result.data.items, 'id').should.deepEqual(_.sortBy(_.filter(testData, (data) => {
          return data.created < today.getTime();
        }), 'id'));
      });
      it('should return resources matching array filter', async () => {
        const filters = {
          filter: {
            field: 'status',
            operation: FilterOperation.in,
            value: '["BAD", "UNKNOWN"]',
            type: FilterValueType.ARRAY,
          }
        };
        const result = await testService.read({
          filters
        });
        should.exist(result);
        should.not.exist(result.error);
        should.exist(result.data);
        should.exist(result.data.items);
        should.exist(result.data.total_count);
        result.data.total_count.should.be.equal(2);
        result.data.items.should.be.Array();
        result.data.items.should.length(2);
        _.sortBy(result.data.items, 'id').should.deepEqual(_.sortBy(_.filter(testData, (data) => {
          return (data.status === "BAD" || data.status === "UNKNOWN");
        }), 'id'));
      });
      it('should return only resources with not equal filter', async () => {
        const filters = {
          filter: {
            field: 'id',
            operation: FilterOperation.neq,
            value: '/test/xy',
          }
        };
        const result = await testService.read({
          filters
        });
        should.exist(result);
        should.not.exist(result.error);
        should.exist(result.data);
        should.exist(result.data.items);
        should.exist(result.data.total_count);
        result.data.total_count.should.be.equal(2);
        result.data.items.should.be.Array();
        result.data.items.should.length(2);
        _.sortBy(result.data.items, 'id').should.deepEqual(_.sortBy(_.filter(testData, (data) => {
          return data.id != '/test/xy';
        }), 'id'));
      });
      it('should return elements only with field value', async () => {
        const result = await testService.read({
          field: [{
            name: 'value',
            include: true,
          }],
        });
        should.exist(result);
        should.not.exist(result.error);
        should.exist(result.data);
        should.exist(result.data.items);
        should.exist(result.data.total_count);
        result.data.total_count.should.be.equal(3);
        result.data.items.should.be.Array();
        result.data.items.should.length(3);
        const testDataReduced = [
          { id: '', text: '', meta: null, value: testData[0].value, active: false, created: 0, status: '' },
          { id: '', text: '', meta: null, value: testData[1].value, active: false, created: 0, status: '' },
          { id: '', text: '', meta: null, value: testData[2].value, active: false, created: 0, status: '' },
        ];
        _.sortBy(result.data.items, 'value').should.deepEqual(_.sortBy(testDataReduced, 'value'));
      });
      it('should apply a custom filter', async () => {
        const result = await testService.read({
          field: [{
            name: 'value',
            include: true,
          }],
          custom_queries: 'testFilter',
          custom_arguments: {
            value: Buffer.from(JSON.stringify({ testParam: 12 }))
          }
        });
        should.exist(result);
        should.not.exist(result.error);
        should.exist(result.data);
        should.exist(result.data.items);
        should.exist(result.data.total_count);

        result.data.total_count.should.be.equal(2);
        result.data.items.should.be.Array();
        result.data.items.should.length(2);

        const testDataReduced = [
          { id: '', text: '', meta: null, value: testData[0].value, active: false, created: 0, status: '' },
          { id: '', text: '', meta: null, value: testData[1].value, active: false, created: 0, status: '' },
        ];
        _.sortBy(result.data.items, 'value').should.deepEqual(_.sortBy(testDataReduced, 'value'));
      });
    });
    describe('create', () => {
      it('should create new documents and validate duplicate element error', async () => {
        const meta = {
          modified_by: 'Admin',
          owner: [{
            id: 'urn:restorecommerce:acs:names:ownerIndicatoryEntity',
            value: 'urn:restorecommerce:acs:model:user.User'
          },
          {
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
        should.not.exist(result.error);
        should.exist(result.data);
        should.exist(result.data.items);
        result.data.items.should.be.length(2);
        result.data.items.should.matchEach((e) => {
          return e.value === -10 && e.text.length > 0;
        });

        // validate error for testDuplicate element
        should.exist(result.data.status);
        result.data.status.should.be.length(3);
        result.data.status[2].message.should.equal(`unique constraint violated - in index primary of type primary over '_key'; conflicting key: test_newdata2`);
        const allTestData = await testService.read();
        should.exist(allTestData);
        should.not.exist(allTestData.error);
        should.exist(allTestData.data);

        const compareData = _.concat(testData, result.data.items);
        _.forEach(allTestData.data.items, (e) => {
          compareData.should.matchAny(e);
        });
      });
    });
    describe('delete', () => {
      it('should delete collection when requested', async () => {
        const result = await testService.delete({ collection: true });
        should.exist(result);
        should.not.exist(result.error);

        const allTestData = await testService.read({});
        should.exist(allTestData);
        should.not.exist(allTestData.error);
        should.exist(allTestData.data);
        should.exist(allTestData.data.items);
        allTestData.data.items.should.length(0);
      });
      it('should delete specified documents and return error if document does not exist', async () => {
        const result = await testService.delete({ ids: [testData[1].id, 'invalidID'] });
        should.exist(result);
        should.not.exist(result.error);
        // success for 1st id and failure message for second invalid id
        result.data.status[0].code.should.equal(200);
        result.data.status[0].message.should.equal('success');
        result.data.status[1].code.should.equal(404);
        result.data.status[1].message.should.equal('document not found');

        const allTestData = await testService.read({});
        should.exist(allTestData);
        should.not.exist(allTestData.error);
        should.exist(allTestData.data);
        should.exist(allTestData.data.items);
        allTestData.data.items.should.length(2);
        _.sortBy(allTestData.data.items, 'id')
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
        should.not.exist(result.error);
        should.exist(result.data);
        should.exist(result.data.items);
        result.data.items.should.matchEach((e) => {
          return e.value === 100 && e.text.length === 10;
        });

        result.data.status.should.matchEach((status) => {
          return status.code = 200 && status.message === 'success';
        });

        const allTestData = await testService.read();
        should.exist(allTestData);
        should.not.exist(allTestData.error);
        should.exist(allTestData.data);
        result.data.items.should.matchEach((e) => {
          return e.value === 100 && e.text.length === 10;
        });
      });
      it('should return an error when trying to update invalid document', async () => {
        const patch = {
          id: 'invalidDocument',
          value: 2,
          text: 'new value'
        };
        const result = await testService.update({ items: patch });
        result.data.items.should.length(0);
        result.data.status.should.length(1);
        result.data.status[0].id.should.equal('invalidDocument');
        result.data.status[0].code.should.equal(404);
        result.data.status[0].message.should.equal('document not found');
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
        should.not.exist(result.error);
        should.exist(result.data);
        result.data.items.should.matchEach((e) => {
          return e.value === 0;
        });

        result.data.status.should.matchEach((status) => {
          return status.code = 200 && status.message === 'success';
        });
        const allTestData = await testService.read();
        should.exist(allTestData);
        should.not.exist(allTestData.error);
        should.exist(allTestData.data);

        let replaced = _.find(allTestData.data.items, { id: replace[0].id });
        should.exist(replaced);

        replaced = _.find(allTestData.data.items, { id: replace[1].id });
        should.exist(replaced);

        const inserted = _.find(allTestData.data.items, { id: replace[2].id });
        should.exist(inserted);
      });
    });
    // Test to check required field
    describe('check required fileds', () => {
      it('should return an error when trying to insert with missing requried fields', async () => {
        let result = await testService.delete({ collection: true });
        should.exist(result);
        should.not.exist(result.error);
        await testService.read();
        const objectMissingField = [
          { id: 'test_xy', value: 1, meta },
          { id: 'test_xyz', value: 3, meta },
          { id: 'test_zy', value: 12, meta }];
        result = await testService.create({ items: objectMissingField });
        should.exist(result);
        should.exist(result.data);
        result.data.items.should.length(0);
        result.data.status[0].message.should.equal('Field text is necessary\n            for resource');
      });
    });
    // Test to check buffered fields
    describe('check buffered fileds', () => {
      it('should decode the buffered field before storing in DB',
        async () => {
          client = new Client(cfg.get('client:testBufferedService'), server.logger);
          let testBufferService = await client.connect();
          const bufData = {
            type_url: '',
            value: Buffer.from(JSON.stringify({ testkey: 'testValue' }))
          };
          const bufferObjects = [
            { value: 'testValue1', count: 1, data: bufData, meta },
            { value: 'testValue2', count: 1, data: bufData, meta }];
          await testBufferService.create({ items: bufferObjects });
          // Read directly from DB and compare the JSON data
          // because normal read() operation again encodes and sends the data back.
          // This way, we check if the data was actually encoded by reading it fromt the DB.
          const result = await db.find('testBufferedDatas');
          should.exist(result);
          should.exist(result[0].data);
          should.exist(result[0].data.testkey);
          result[0].data.testkey.should.equal('testValue');
          // delete the collection
          await db.truncate('testBufferedDatas');
        });
    });
  });
});
