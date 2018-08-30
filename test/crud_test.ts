'use strict';

import * as mocha from 'mocha';
import { ServiceBase } from '..';
import { ResourcesAPIBase } from '../';
import { toStruct } from '../';
import { toObject } from './../';
import * as chassis from '@restorecommerce/chassis-srv';
import { Client } from '@restorecommerce/grpc-client';
import { Events, Topic } from '@restorecommerce/kafka-client';
import * as srvConfig from '@restorecommerce/service-config';
import * as should from 'should';
import * as _ from 'lodash';

/*
 * Note: To run this test, a running ArangoDB and Kafka instance is required.
 * (Kafka is needed only if 'events:enableEvents' config is enabled)
 */

/* global describe it before after beforeEach */
describe('converting to struct back to object', () => {
  it('should result in the same object', () => {
    const obj = {
      aNumber: {
        $GT: 10,
      },
      $OR: [
        { id: '/test/testdata' },
        { id: '/test/testnew' },
      ],
    };
    const struct = toStruct(obj);
    obj.should.deepEqual(toObject(struct));
  });
});

const now = Date.now();
let meta = {
  created: now,
  modified: now,
  modified_by: 'Admin',
  owner: [{
    "id": "urn:restorecommerce:acs:names:ownerIndicatoryEntity",
    "value": "urn:restorecommerce:acs:model:user.User"
  },
  {
    "id": "urn:restorecommerce:acs:names:ownerInstance",
    "value": "Admin"
  }]
};


describe('ServiceBase', () => {
  let db: any;
  let server: chassis.Server;
  let events: Events;
  let client: Client;
  let testService;
  let testData: any;
  let cfg;
  before(async function before() {
    // Load test config from chassis service config
    cfg = srvConfig(process.cwd() + '/test');
    server = new chassis.Server(cfg.get('server'));
    events = new Events(cfg.get('events:testevents'), server.logger);
    await events.start();
    const resourceName = 'resource';
    const testEvents: Topic = events.topic('test');
    db = await chassis.database.get(cfg.get('database:testdb'), server.logger);

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
    const bufferService: ServiceBase = new ServiceBase('BufferResource', testEvents,
      server.logger, resourceBufferAPI, isEventsEnabled);
    await server.bind('testBufferedService', bufferService);

    await server.start();

    client = new Client(cfg.get('client:test'), server.logger);
    testService = await client.connect();
  });
  after(async function after() {
    await client.end();
    await server.stop();
    await events.stop();
  });
  describe('endpoints', () => {
    beforeEach(async function restoreDB() {
      db = await chassis.database.get(cfg.get('database:testdb'), server.logger);
      await db.truncate();
      const now: number = Date.now();
      testData = [
        { id: '/test/xy', meta, value: 1, text: 'a xy' },
        { id: '/test/xyz', meta, value: 3, text: 'second test data' },
        { id: '/test/zy', meta, value: 12, text: 'yz test data' }];
      await db.insert('resources', testData);
    });
    describe('read', () => {
      it('should return all three elements with no arguments', async function checkRead() {
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
      it('should return two elements with offset 1', async function checkRead() {
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
      it('should return two elements with limit 2', async function checkRead() {
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
      it('should return elements sorted', async function checkRead() {
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
      it('should return only resources with value higher than 10', async function checkRead() {
        const filter = toStruct({
          value: {
            $gt: 10,
          },
        });
        const result = await testService.read({
          filter,
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
      it('should return elements only with field value', async function checkRead() {
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
          { id: '', text: '', meta: null, value: testData[0].value },
          { id: '', text: '', meta: null, value: testData[1].value },
          { id: '', text: '', meta: null, value: testData[2].value },
        ];
        _.sortBy(result.data.items, 'value').should.deepEqual(_.sortBy(testDataReduced, 'value'));
      });
    });
    describe('create', () => {
      it('should create new documents', async function checkCreate() {
        const meta = {
          modified_by: 'Admin',
          owner: [{
            "id": "urn:restorecommerce:acs:names:ownerIndicatoryEntity",
            "value": "urn:restorecommerce:acs:model:user.User"
          },
          {
            "id": "urn:restorecommerce:acs:names:ownerInstance",
            "value": "Admin"
          }]
        };
        const newTestDataFirst = {
          id: '/test/newdata',
          value: -10,
          text: 'new data',
          meta
        };
        const newTestDataSecond = {
          id: '/test/newdata2',
          value: -10,
          text: 'new second data',
          meta
        };
        const newTestData = [newTestDataFirst, newTestDataSecond];
        const result = await testService.create({ items: newTestData });
        should.exist(result);
        should.not.exist(result.error);
        should.exist(result.data);
        should.exist(result.data.items);
        result.data.items.should.be.length(2);
        result.data.items.should.matchEach((e) => {
          return e.value === -10 && e.text.length > 0;
        });

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
      it('should delete collection when requested', async function checkDelete() {
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
      it('should delete all specified documents', async function checkDelete() {
        const result = await testService.delete({ ids: [testData[1].id] });
        should.exist(result);
        should.not.exist(result.error);

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
      it('should update all specified documents', async function
        checkUpdate() {
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

        const allTestData = await testService.read();
        should.exist(allTestData);
        should.not.exist(allTestData.error);
        should.exist(allTestData.data);
        result.data.items.should.matchEach((e) => {
          return e.value === 100 && e.text.length === 10;
        });
      });
    });
    describe('upsert', () => {
      it('should create or updae specified documents', async function
        checkUpsert() {
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
          id: '/test/newput',
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
      it('should throw an error when trying to add ', async function checkget() {
        let result = await testService.delete({ collection: true });
        should.exist(result);
        should.not.exist(result.error);
        const allTestData = await testService.read();
        const objectMissingField = [
          { id: '/test/xy', value: 1, meta },
          { id: '/test/xyz', value: 3, meta },
          { id: '/test/zy', value: 12, meta }];
        result = await testService.create({ items: objectMissingField });
        should.exist(result);
        should.exist(result);
        should.exist(result.error);
        should.exist(result.error.details);
        result.error.details.should.containEql('invalid argument');
      });
    });
    // Test to check buffered fields
    describe('check buffered fileds', () => {
      it('should decode the buffered field before storing in DB',
        async function checkBufferedData() {
          client = new Client(cfg.get('client:testBufferedService'), server.logger);
          let testBufferService = await client.connect();
          const bufData = {
            type_url: '',
            value: Buffer.from(JSON.stringify({ testkey: "testValue" }))
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
          // delete the data
          await db.delete('testBufferedDatas');
        });
    });
  });
});
