'use strict';

import * as mocha from 'mocha';
import { GraphResourcesServiceBase } from '../lib';
import { ResourcesAPIBase } from '../lib';
import { ServiceBase } from '../lib';
import * as chassis from '@restorecommerce/chassis-srv';
import { GrpcClient } from '@restorecommerce/grpc-client';
import { Database } from 'arangojs';
import { createServiceConfig } from '@restorecommerce/service-config';
import { createLogger } from '@restorecommerce/logger';
import * as should from 'should';
import * as _ from 'lodash';

const database = chassis.database;
let cfg = createServiceConfig(process.cwd() + '/test');
let server = new chassis.Server(cfg.get('server'));
/*
 * Note: To run this test, a running ArangoDB is required.
 */

/* global describe it before after beforeEach */

const testProvider = (providerCfg) => {
  describe('GraphServiceBase', () => {
    let db: any;
    let client: GrpcClient;
    let testService;
    let testResourceBaseService;
    let graphCfg;
    let resourcesList;
    before(async () => {
      db = await providerCfg.init();
      // graph Service
      const graphAPIService = new GraphResourcesServiceBase(db,
        cfg.get('fieldHandlers:bufferFields'), createLogger(cfg.get('server:logger')));
      await server.bind('graphsTestService', graphAPIService);

      await server.start();

      client = new GrpcClient(cfg.get('client:graphsTestService'), server.logger);
      testService = client.graphsTestService;

      // Start resource base server for the graph services
      graphCfg = cfg.get('graph');
      resourcesList = Object.keys(graphCfg.vertices);

      let resourceBaseClient = new GrpcClient(cfg.get('client:test'), server.logger);
      testResourceBaseService = resourceBaseClient.test;
    });
    after(async () => {
      await client.close();
      await server.stop();
    });

    describe('Graphs Collection API', () => {
      let result_1, result_2, result_3;
      let service_1, service_2, service_3;
      let meta;
      it('should create a vertex collection and insert data into it', async () => {
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
          orgCollection, null, graphCfg.vertices[orgCollection], graphName);
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
        async () => {
          const traversalRequest = {
            start_vertex: `persons/${result_1.items[0].payload.id}`,
            opts: { direction: 'outbound' },
            path: true
          };
          const expectedVertices = [{ name: 'Alice', id: 'a', car_id: 'c' },
            { car: 'bmw', id: 'c', org_id: 'e' },
            { org: 'Bayern', id: 'e' }];
          let result = await testService.traversal(traversalRequest);
          let traversalResponse = { data: [], paths: [] };
          // let traversalResponseStream = call.getResponseStream();
          await new Promise((resolve, reject) => {
            result.on('data', (partResp) => {
              if ((partResp && partResp.data && partResp.data.value)) {
                Object.assign(traversalResponse.data, JSON.parse(partResp.data.value.toString()));
              }
              if ((partResp && partResp.paths && partResp.paths.value)) {
                Object.assign(traversalResponse.paths, JSON.parse(partResp.paths.value.toString()));
              }
            });
            result.on('end', () => {
              should.exist(traversalResponse.paths);
              should.exist(traversalResponse.data);
              traversalResponse.paths.should.have.size(2);
              traversalResponse.data.should.have.size(3);
              let finalVertices: any = [];
              for (let eachVertice of traversalResponse.data) {
                finalVertices.push(_.omit(eachVertice, ['_id', 'meta']));
              }
              finalVertices =
                _.sortBy(finalVertices, [(o) => { return o.id; }]);
              finalVertices.should.deepEqual(expectedVertices);
              resolve(traversalResponse);
            });
          });

          // compare data
          should.exist(traversalResponse.paths);
          should.exist(traversalResponse.data);
          traversalResponse.paths.should.have.size(2);
          traversalResponse.data.should.have.size(3);
          let finalVertices: any = [];
          for (let eachVertice of traversalResponse.data) {
            finalVertices.push(_.omit(eachVertice, ['_id', 'meta']));
          }
          finalVertices =
            _.sortBy(finalVertices, [(o) => { return o.id; }]);
          finalVertices.should.deepEqual(expectedVertices);
        });

      it('should traverse by excluding specified vertices using filter in the graph',
        async () => {
          const traversalRequest = {
            start_vertex: `persons/${result_1.items[0].payload.id}`,
            opts: {
              direction: 'OUTBOUND',
              exclude_vertex: ['cars']
            },
            path: true
          };
          const expectedVertices = [{ name: 'Alice', id: 'a', car_id: 'c' },
            { org: 'Bayern', id: 'e' }];
          let call = await testService.traversal(traversalRequest);
          let traversalResponse = { data: [], paths: [] };

          await new Promise((resolve, reject) => {
            call.on('data', (partResp) => {
              if (partResp && partResp.data && partResp.data.value) {
                traversalResponse.data = JSON.parse(partResp.data.value.toString());
              }
              if (partResp && partResp.paths && partResp.paths.value) {
                traversalResponse.paths = JSON.parse(partResp.paths.value.toString());
              }
            });
            call.on('end', () => {
              // compare data
              traversalResponse.paths.should.have.size(2);
              traversalResponse.data.should.have.size(3);
              let finalVertices = [];
              for (let eachVertice of traversalResponse.data) {
                finalVertices.push(_.omit(eachVertice, ['_id', 'meta']));
              }
              finalVertices =
                _.sortBy(finalVertices, [(o) => { return o.id; }]);
              finalVertices.should.deepEqual(expectedVertices);
              resolve(traversalResponse);
            });
          });
          // compare data
          traversalResponse.paths.should.have.size(2);
          traversalResponse.data.should.have.size(2);
          let finalVertices = [];
          for (let eachVertice of traversalResponse.data) {
            finalVertices.push(_.omit(eachVertice, ['_id', 'meta']));
          }
          finalVertices =
            _.sortBy(finalVertices, [(o) => { return o.id; }]);
          finalVertices.should.deepEqual(expectedVertices);
        });

      it('should traverse by including only specified edges using expander in the graph',
        async () => {
          const traversalRequest = {
            start_vertex: `persons/${result_1.items[0].payload.id}`,
            opts: {
              direction: 'OUTBOUND',
              include_edge: ['person_has_car']
            },
            path: true
          };
          const expectedVertices = [{ name: 'Alice', id: 'a', car_id: 'c' },
            { car: 'bmw', id: 'c', org_id: 'e' }];
          let traversalResponse = { data: [], paths: [] };
          let call = await testService.traversal(traversalRequest);
          // let traversalResponseStream = call.getResponseStream();
          await new Promise((resolve, reject) => {
            call.on('data', (partResp) => {
              if (partResp && partResp.data && partResp.data.value) {
                traversalResponse.data = JSON.parse(partResp.data.value.toString());
              }
              if (partResp && partResp.paths && partResp.paths.value) {
                traversalResponse.paths = JSON.parse(partResp.paths.value.toString());
              }
            });
            call.on('end', () => {
              // compare data
              traversalResponse.paths.should.have.size(2);
              traversalResponse.data.should.have.size(2);
              let finalVertices = [];
              for (let eachVertice of traversalResponse.data) {
                finalVertices.push(_.omit(eachVertice, ['_id', 'meta']));
              }
              finalVertices =
                _.sortBy(finalVertices, [(o) => { return o.id; }]);
              finalVertices.should.deepEqual(expectedVertices);
              resolve(traversalResponse);
            });
          });
          // compare data
          traversalResponse.paths.should.have.size(2);
          traversalResponse.data.should.have.size(2);
          let finalVertices = [];
          for (let eachVertice of traversalResponse.data) {
            finalVertices.push(_.omit(eachVertice, ['_id', 'meta']));
          }
          finalVertices =
            _.sortBy(finalVertices, [(o) => { return o.id; }]);
          finalVertices.should.deepEqual(expectedVertices);
        });

      it('delete vertices, should delete the edges associated as well',
        async () => {
          // Deleting the ids of vertexCollection 'cars' should remove
          // both 'person_has_car'  and 'car_has_org' both edges
          await service_2.delete({ request: { collection: 'cars' } });
          // await service_2.delete({ request: { ids: ['c', 'd'] } });
        });
    });
  });
};

const providers = [
  {
    name: 'arango',
    init: async (): Promise<any> => {
      const dbHost: string = cfg.get('database:testdb:host');
      const dbPort: string = cfg.get('database:testdb:port');
      const dbName: string = cfg.get('database:testdb:database');
      const db = new Database('http://' + dbHost + ':' + dbPort);
      await db.dropDatabase(dbName);
      return database.get(cfg.get('database:testdb'), server.logger, 'testGraph',
        cfg.get('graph:edgeDefinitions'));
    }
  }
];
providers.forEach((providerCfg) => {
  describe(`with database provider ${providerCfg.name}`, () => {
    testProvider(providerCfg);
  });
});
