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
      let result_1, result_2, result_3, result_4;
      let service_1, service_2, service_3, service_4;
      let meta;
      it('should create a vertex collection and insert data into it', async () => {
        let meta = {
          owner: [{ owner_entity: 'urn:restorecommerce:acs:model:User', owner_id: 'Admin' }]
        };
        const personsVertices = [
          { name: 'Alice', id: 'a', car_id: 'c', state_id: 'i', meta },
          { name: 'Bob', id: 'b', car_id: 'd', state_id: 'j', meta }
        ];
        const carsVertices = [
          { car: 'bmw', id: 'c', place_id: 'e', meta },
          { car: 'vw', id: 'd', place_id: 'f', meta }
        ];
        const placesVertices = [
          { place: 'Munich', id: 'e', state_id: 'g', meta },
          { place: 'wolfsburg', id: 'f', state_id: 'h', meta }
        ];
        const statesVertices = [
          { state: 'Bayern', id: 'g', meta },
          { state: 'Saxony', id: 'h', meta },
          { state: 'BW', id: 'i', meta },
          { state: 'Hessen', id: 'j', meta },
        ];
        const graphName = cfg.get('graph:graphName');
        const personCollection = 'persons';
        const carCollection = 'cars';
        const placeCollection = 'places';
        const stateCollection = 'states';

        const resourceAPI4: ResourcesAPIBase = new ResourcesAPIBase(db,
          stateCollection, null, graphCfg.vertices[stateCollection], graphName);
        service_4 = new ServiceBase(stateCollection, null,
          server.logger, resourceAPI4, false);
        result_4 = await service_4.create({ request: { items: statesVertices } });

        const resourceAPI3: ResourcesAPIBase = new ResourcesAPIBase(db,
          placeCollection, null, graphCfg.vertices[placeCollection], graphName);
        service_3 = new ServiceBase(placeCollection, null,
          server.logger, resourceAPI3, false);
        result_3 = await service_3.create({ request: { items: placesVertices } });

        const resourceAPI2: ResourcesAPIBase = new ResourcesAPIBase(db,
          carCollection, null, graphCfg.vertices[carCollection], graphName);
        service_2 = new ServiceBase(carCollection, null,
          server.logger, resourceAPI2, false);
        result_2 = await service_2.create({ request: { items: carsVertices } });

        const resourceAPI1: ResourcesAPIBase = new ResourcesAPIBase(db,
          personCollection, null, graphCfg.vertices[personCollection], graphName);
        service_1 = new ServiceBase(personCollection, null,
          server.logger, resourceAPI1, false);
        result_1 = await service_1.create({ request: { items: personsVertices } });
      });

      it('should traverse the graph and return only vertices for Person A', async () => {
        const traversalRequest = {
          start_vertex: `persons/a`,
          opts: { direction: 'outbound' },
          path: false
        };
        const expectedVertices = [
          { "name": "Alice", "id": "a", "car_id": "c", "state_id": "i" },
          { "car": "bmw", "id": "c", "place_id": "e" },
          { "place": "Munich", "id": "e", "state_id": "g" },
          { "state": "Bayern", "id": "g" },
          { "state": "BW", "id": "i" }
        ];
        // traverse graph
        let result = await testService.traversal(traversalRequest);

        let traversalResponse = { data: [], paths: [] };
        // let traversalResponseStream = call.getResponseStream();
        await new Promise((resolve, reject) => {
          result.on('data', (partResp) => {
            if ((partResp && partResp.data && partResp.data.value)) {
              Object.assign(traversalResponse.data, JSON.parse(partResp.data.value.toString()));
            }
            if ((partResp && partResp.paths && !_.isEmpty(partResp.paths.value))) {
              console.log('Paths are....', partResp.paths.value);
              Object.assign(traversalResponse.paths, JSON.parse(partResp.paths.value.toString()));
            }
          });
          let finalVertices: any = [];
          result.on('end', () => {
            should.exist(traversalResponse.paths);
            should.exist(traversalResponse.data);
            traversalResponse.paths.should.be.empty();
            traversalResponse.data.should.have.size(5);
            for (let eachVertice of traversalResponse.data) {
              finalVertices.push(_.omit(eachVertice, ['_id', 'meta']));
            }
            finalVertices =
              _.sortBy(finalVertices, [(o) => { return o.id; }]);
            finalVertices.should.deepEqual(expectedVertices);
            resolve(traversalResponse);
          });
        });
      });

      it('should traverse the graph and return both vertices and paths when paths flag is set to true', async () => {
        const traversalRequest = {
          start_vertex: `persons/a`,
          opts: { direction: 'outbound' },
          path: true
        };
        const expectedVertices = [
          { "name": "Alice", "id": "a", "car_id": "c", "state_id": "i" },
          { "car": "bmw", "id": "c", "place_id": "e" },
          { "place": "Munich", "id": "e", "state_id": "g" },
          { "state": "Bayern", "id": "g" },
          { "state": "BW", "id": "i" }
        ];
        // traverse graph
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
          let finalVertices: any = [];
          result.on('end', () => {
            should.exist(traversalResponse.paths);
            should.exist(traversalResponse.data);
            traversalResponse.paths.should.have.size(4);
            traversalResponse.data.should.have.size(5);
            for (let eachVertice of traversalResponse.data) {
              finalVertices.push(_.omit(eachVertice, ['_id', 'meta']));
            }
            finalVertices =
              _.sortBy(finalVertices, [(o) => { return o.id; }]);
            finalVertices.should.deepEqual(expectedVertices);
            resolve(traversalResponse);
          });
        });
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
