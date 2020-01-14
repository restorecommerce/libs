'use strict';

import * as mocha from 'mocha';
import { GraphResourcesServiceBase } from '../src';
import { ResourcesAPIBase } from '../src';
import { ServiceBase } from '../src';
import * as chassis from '@restorecommerce/chassis-srv';
import { Client } from '@restorecommerce/grpc-client';
import { Database } from 'arangojs';
import * as srvConfig from '@restorecommerce/service-config';
import * as should from 'should';
import * as _ from 'lodash';
import * as co from 'co';

const config = chassis.config;
const database = chassis.database;
let cfg = srvConfig(process.cwd() + '/test');
let server = new chassis.Server(cfg.get('server'));
/*
 * Note: To run this test, a running ArangoDB is required.
 */

/* global describe it before after beforeEach */

const providers = [
  {
    name: 'arango',
    init: async function init(): Promise<any> {
      const dbHost: string = cfg.get('database:testdb:host');
      const dbPort: string = cfg.get('database:testdb:port');
      const dbName: string = cfg.get('database:testdb:database');
      const db = new Database('http://' + dbHost + ':' + dbPort);
      await db.dropDatabase(dbName);
      return database.get(cfg.get('database:testdb'), server.logger, 'testGraph');
    }
  }
];
providers.forEach((providerCfg) => {
  describe(`with database provider ${providerCfg.name}`, () => {
    testProvider(providerCfg);
  });
});

function testProvider(providerCfg) {
  describe('GraphServiceBase', () => {
    let db: any;
    let client: Client;
    let testService;
    let testResourceBaseService;
    let graphCfg;
    let resourcesList;
    before(async function before() {
      db = await providerCfg.init();
      // graph Service
      const graphAPIService = new GraphResourcesServiceBase(db,
        cfg.get('fieldHandlers:bufferFields'));
      await server.bind('graphsTestService', graphAPIService);

      await server.start();

      client = new Client(cfg.get('client:graphsTestService'), server.logger);
      testService = await client.connect();

      // Start resource base server for the graph services
      graphCfg = cfg.get('graph');
      resourcesList = Object.keys(graphCfg.vertices);

      let resourceBaseClient = new Client(cfg.get('client:test'), server.logger);
      testResourceBaseService = await resourceBaseClient.connect();
    });
    after(async function after() {
      await client.end();
      await server.stop();
    });

    describe('Graphs Collection API', () => {
      let result_1, result_2, result_3;
      let service_1, service_2, service_3;
      let meta;
      it('should create a vertex collection and insert data into it', async function
        createVertices() {
        let meta = {
          owner: [{ owner_entity: 'urn:restorecommerce:acs:model:User', owner_id: 'Admin' }]
        };
        const personVertices = [
          { name: 'Alice', id: 'a', car_id: 'c', meta },
          { name: 'Bob', id: 'b', car_id: 'd', meta }
        ];
        const carVertices = [
          { car: 'bmw', id: 'c', org_id: 'e', meta },
          { car: 'vw', id: 'd', org_id: 'f', meta }
        ];
        const orgVertices = [
          { org: 'Bayern', id: 'e', meta },
          { org: 'wolfsburg', id: 'f', meta }
        ];
        const graphName = cfg.get('graph:graphName');
        const personCollection = 'persons';
        const carsCollection = 'cars';
        const orgCollection = 'organizations';

        const resourceAPI1: ResourcesAPIBase = new ResourcesAPIBase(db,
          orgCollection, null, orgCollection, graphName);
        service_3 = new ServiceBase('organizations', null,
          server.logger, resourceAPI1, false);
        result_3 = await service_3.create({ request: { items: orgVertices } });

        const resourceAPI2: ResourcesAPIBase = new ResourcesAPIBase(db,
          carsCollection, null, graphCfg.vertices[carsCollection], graphName);
        service_2 = new ServiceBase('cars', null,
          server.logger, resourceAPI2, false);
        result_2 = await service_2.create({ request: { items: carVertices } });

        const resourceAPI3: ResourcesAPIBase = new ResourcesAPIBase(db,
          personCollection, null, graphCfg.vertices[personCollection], graphName);
        service_1 = new ServiceBase('persons', null,
          server.logger, resourceAPI3, false);
        result_1 = await service_1.create({ request: { items: personVertices } });
      });
      // Test for graph traversal
      it('should traverse all vertices and edges in the graph',
        async function checkGraphTraversal() {
          const traversalRequest = {
            start_vertex: `persons/${result_1.items[0].id}`,
            opts: { direction: 'outbound' },
            data: true,
            path: true
          };
          const expectedVertices = [{ name: 'Alice', id: 'a', car_id: 'c' },
          { car: 'bmw', id: 'c', org_id: 'e' },
          { org: 'Bayern', id: 'e' }];
          let result = await testService.traversal(traversalRequest);
          let traversalResponse = { data: [], paths: [] };
          while (result.read) {
            const resp = await result.read();
            // Promisify the callback containing result
            const partResp: any = await new Promise((resolve, reject) => {
              resp((err, response) => {
                if (err) {
                  if (err.message === 'stream end') {
                    resolve(null);
                  }
                  reject(err);
                }
                resolve(response);
              });
            });
            if (!partResp) {
              break;
            }
            if ((partResp && partResp.data && partResp.data.value)) {
              Object.assign(traversalResponse.data, JSON.parse(partResp.data.value.toString()));
            }
            if ((partResp && partResp.paths && partResp.paths.value)) {
              Object.assign(traversalResponse.paths, JSON.parse(partResp.paths.value.toString()));
            }
          }
          // compare data
          should.exist(traversalResponse.paths);
          should.exist(traversalResponse.data);
          traversalResponse.paths.should.have.size(3);
          traversalResponse.data.should.have.size(3);
          let finalVertices: any = [];
          for (let eachVertice of traversalResponse.data) {
            finalVertices.push(_.omit(eachVertice, ['_id', 'meta']));
          }
          finalVertices =
            _.sortBy(finalVertices, [function (o) { return o.id; }]);
          finalVertices.should.deepEqual(expectedVertices);
        });

      it('should traverse by excluding specified vertices using filter in the graph',
        async function checkGraphTraversal() {
          const traversalRequest = {
            start_vertex: `persons/${result_1.items[0].id}`,
            opts: {
              direction: 'outbound',
              filter: [{ vertex: 'cars' }]
            },
            data: true,
            path: true
          };
          const expectedVertices = [{ name: 'Alice', id: 'a', car_id: 'c' },
          { org: 'Bayern', id: 'e' }];
          let result = await testService.traversal(traversalRequest);
          let traversalResponse = { data: [], paths: [] };
          while (result.read) {
            const resp = await result.read();
            let partResp: any = await new Promise((resolve, reject) => {
              resp((err, response) => {
                if (err) {
                  if (err.message === 'stream end') {
                    resolve(null);
                  }
                  reject(err);
                }
                resolve(response);
              });
            });
            if (!partResp) {
              break;
            }
            if (partResp && partResp.data && partResp.data.value) {
              traversalResponse.data = JSON.parse(partResp.data.value.toString());
            }
            if (partResp && partResp.paths && partResp.paths.value) {
              traversalResponse.paths = JSON.parse(partResp.paths.value.toString());
            }
          }
          // compare data
          traversalResponse.paths.should.have.size(2);
          traversalResponse.data.should.have.size(2);
          let finalVertices = [];
          for (let eachVertice of traversalResponse.data) {
            finalVertices.push(_.omit(eachVertice, ['_id', 'meta']));
          }
          finalVertices =
            _.sortBy(finalVertices, [function (o) { return o.id; }]);
          finalVertices.should.deepEqual(expectedVertices);
        });

      it('should traverse by including only specified edges using expander in the graph',
        async function checkGraphTraversal() {
          const traversalRequest = {
            start_vertex: `persons/${result_1.items[0].id}`,
            opts: {
              expander: [{ edge: 'has_car', direction: 'outbound' }]
            },
            path: true,
            data: true
          };
          const expectedVertices = [{ name: 'Alice', id: 'a', car_id: 'c' },
          { car: 'bmw', id: 'c', org_id: 'e' }];
          let traversalResponse = { data: [], paths: [] };
          let result = await testService.traversal(traversalRequest);

          while (result.read) {
            let resp = await result.read();
            let partResp: any = await new Promise((resolve, reject) => {
              resp((err, response) => {
                if (err) {
                  if (err.message === 'stream end') {
                    resolve(null);
                  }
                  reject(err);
                }
                resolve(response);
              });
            });
            if (!partResp) {
              break;
            }
            if (partResp && partResp.data && partResp.data.value) {
              traversalResponse.data = JSON.parse(partResp.data.value.toString());
            }
            if (partResp && partResp.paths && partResp.paths.value) {
              traversalResponse.paths = JSON.parse(partResp.paths.value.toString());
            }
          }
          // compare data
          traversalResponse.paths.should.have.size(2);
          traversalResponse.data.should.have.size(2);
          let finalVertices = [];
          for (let eachVertice of traversalResponse.data) {
            finalVertices.push(_.omit(eachVertice, ['_id', 'meta']));
          }
          finalVertices =
            _.sortBy(finalVertices, [function (o) { return o.id; }]);
          finalVertices.should.deepEqual(expectedVertices);
        });

      it('delete vertices, should delete the edges associated as well',
        async function deleteAllEdges() {
          // Deleting the ids of vertexCollection 'cars' should remove
          // both 'person_has_car'  and 'car_has_org' both edges
          await service_2.delete({ request: { collection: 'cars' } });
          // await service_2.delete({ request: { ids: ['c', 'd'] } });
        });
    });
  });
}
