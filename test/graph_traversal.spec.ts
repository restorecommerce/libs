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
import { TraversalRequest, FilterOperation, OperatorType, Direction } from '../lib/core/interfaces';

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
      //  STATE <-- lives PERSON has --> CAR belongsto --> PLACE resides --> STATE
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

      // traversal without path flag
      it('should traverse the graph and return only vertices for Person A', async () => {
        const traversalRequest: TraversalRequest = {
          vertices: {
            collection_name: 'persons',
            start_vertex_id: ['a']
          },
          opts: { direction: Direction.OUTBOUND },
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
        await new Promise((resolve, reject) => {
          result.on('data', (partResp) => {
            if ((partResp && partResp.data && partResp.data.value)) {
              traversalResponse.data.push(...JSON.parse(partResp.data.value.toString()));
            }
            if ((partResp && partResp.paths && !_.isEmpty(partResp.paths.value))) {
              traversalResponse.paths.push(...JSON.parse(partResp.paths.value.toString()));
              traversalResponse.paths.push(...JSON.parse(partResp.paths.value.toString()));
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

      // traversal with path flag
      it('should traverse the graph and return both vertices and paths when paths flag is set to true', async () => {
        const traversalRequest: TraversalRequest = {
          vertices: {
            collection_name: 'persons',
            start_vertex_id: ['a']
          },
          opts: { direction: Direction.OUTBOUND },
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
        await new Promise((resolve, reject) => {
          result.on('data', (partResp) => {
            if ((partResp && partResp.data && partResp.data.value)) {
              traversalResponse.data.push(...JSON.parse(partResp.data.value.toString()));
            }
            if ((partResp && partResp.paths && partResp.paths.value)) {
              traversalResponse.paths.push(...JSON.parse(partResp.paths.value.toString()));
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

      // include vertices
      it('should traverse the graph with included vertices options and return only the included vertices', async () => {
        const traversalRequest: TraversalRequest = {
          vertices: {
            collection_name: 'persons',
            start_vertex_id: ['a']
          },
          opts: { direction: Direction.OUTBOUND, include_vertex: ['cars'] },
          path: true
        };
        const expectedVertices = [
          { "name": "Alice", "id": "a", "car_id": "c", "state_id": "i" },
          { "car": "bmw", "id": "c", "place_id": "e" }
        ];
        // traverse graph
        let result = await testService.traversal(traversalRequest);

        let traversalResponse = { data: [], paths: [] };
        await new Promise((resolve, reject) => {
          result.on('data', (partResp) => {
            if ((partResp && partResp.data && partResp.data.value)) {
              traversalResponse.data.push(...JSON.parse(partResp.data.value.toString()));
            }
            if ((partResp && partResp.paths && partResp.paths.value)) {
              traversalResponse.paths.push(...JSON.parse(partResp.paths.value.toString()));
            }
          });
          let finalVertices: any = [];
          result.on('end', () => {
            should.exist(traversalResponse.paths);
            should.exist(traversalResponse.data);
            traversalResponse.paths.should.have.size(1);
            traversalResponse.data.should.have.size(2);
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

      // exclude vertices
      it('should traverse the graph with excluded vertices options and return only traversed data with excluded vertices', async () => {
        const traversalRequest: TraversalRequest = {
          vertices: {
            collection_name: 'persons',
            start_vertex_id: ['a']
          },
          opts: { direction: Direction.OUTBOUND, exclude_vertex: ['cars'] },
          path: true
        };
        const expectedVertices = [
          { "name": "Alice", "id": "a", "car_id": "c", "state_id": "i" },
          { "place": "Munich", "id": "e", "state_id": "g" },
          { "state": "Bayern", "id": "g" },
          { "state": "BW", "id": "i" }
        ];
        // traverse graph
        let result = await testService.traversal(traversalRequest);

        let traversalResponse = { data: [], paths: [] };
        await new Promise((resolve, reject) => {
          result.on('data', (partResp) => {
            if ((partResp && partResp.data && partResp.data.value)) {
              traversalResponse.data.push(...JSON.parse(partResp.data.value.toString()));
            }
            if ((partResp && partResp.paths && partResp.paths.value)) {
              traversalResponse.paths.push(...JSON.parse(partResp.paths.value.toString()));
            }
          });
          let finalVertices: any = [];
          result.on('end', () => {
            should.exist(traversalResponse.paths);
            should.exist(traversalResponse.data);
            traversalResponse.paths.should.have.size(3);
            traversalResponse.data.should.have.size(4);
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

      // include edges
      it('should traverse the graph with included edges options and return vertices from included edges', async () => {
        const traversalRequest: TraversalRequest = {
          vertices: {
            collection_name: 'persons',
            start_vertex_id: ['a']
          },
          opts: { direction: Direction.OUTBOUND, include_edge: ['has'] },
          path: true
        };
        const expectedVertices = [
          { "name": "Alice", "id": "a", "car_id": "c", "state_id": "i" },
          { "car": "bmw", "id": "c", "place_id": "e" }
        ];
        // traverse graph
        let result = await testService.traversal(traversalRequest);

        let traversalResponse = { data: [], paths: [] };
        await new Promise((resolve, reject) => {
          result.on('data', (partResp) => {
            if ((partResp && partResp.data && partResp.data.value)) {
              traversalResponse.data.push(...JSON.parse(partResp.data.value.toString()));
            }
            if ((partResp && partResp.paths && partResp.paths.value)) {
              traversalResponse.paths.push(...JSON.parse(partResp.paths.value.toString()));
            }
          });
          let finalVertices: any = [];
          result.on('end', () => {
            should.exist(traversalResponse.paths);
            should.exist(traversalResponse.data);
            traversalResponse.paths.should.have.size(1);
            traversalResponse.data.should.have.size(2);
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

      // exclude edges
      it('should traverse the graph with exclude edges options and return vertices from excluded edges', async () => {
        const traversalRequest: TraversalRequest = {
          vertices: {
            collection_name: 'persons',
            start_vertex_id: ['a']
          },
          opts: { direction: Direction.OUTBOUND, exclude_edge: ['belongs'] },
          path: true
        };
        const expectedVertices = [
          { "name": "Alice", "id": "a", "car_id": "c", "state_id": "i" },
          { "car": "bmw", "id": "c", "place_id": "e" },
          { "state": "Bayern", "id": "g" },
          { "state": "BW", "id": "i" }
        ];
        // traverse graph
        let result = await testService.traversal(traversalRequest);

        let traversalResponse = { data: [], paths: [] };
        await new Promise((resolve, reject) => {
          result.on('data', (partResp) => {
            if ((partResp && partResp.data && partResp.data.value)) {
              traversalResponse.data.push(...JSON.parse(partResp.data.value.toString()));
            }
            if ((partResp && partResp.paths && partResp.paths.value)) {
              traversalResponse.paths.push(...JSON.parse(partResp.paths.value.toString()));
            }
          });
          let finalVertices: any = [];
          result.on('end', () => {
            should.exist(traversalResponse.paths);
            should.exist(traversalResponse.data);
            traversalResponse.paths.should.have.size(3);
            traversalResponse.data.should.have.size(4);
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

      // exclude one edge and include another edge of same entity
      it('for 2 entities should exclude one entity edge and include another entity edge', async () => {
        const traversalRequest: TraversalRequest = {
          vertices: {
            collection_name: 'persons',
            start_vertex_id: ['a']
          },
          opts: { direction: Direction.OUTBOUND, exclude_edge: ['resides'], include_edge: ['lives'] },
          path: true
        };
        const expectedVertices = [
          { "name": "Alice", "id": "a", "car_id": "c", "state_id": "i" },
          { "state": "BW", "id": "i" }
        ];
        // traverse graph
        let result = await testService.traversal(traversalRequest);

        let traversalResponse = { data: [], paths: [] };
        await new Promise((resolve, reject) => {
          result.on('data', (partResp) => {
            if ((partResp && partResp.data && partResp.data.value)) {
              traversalResponse.data.push(...JSON.parse(partResp.data.value.toString()));
            }
            if ((partResp && partResp.paths && partResp.paths.value)) {
              traversalResponse.paths.push(...JSON.parse(partResp.paths.value.toString()));
            }
          });
          let finalVertices: any = [];
          result.on('end', () => {
            should.exist(traversalResponse.paths);
            should.exist(traversalResponse.data);
            traversalResponse.paths.should.have.size(1);
            traversalResponse.data.should.have.size(2);
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

      // collection traversal
      it('should traverse the entire collection and return data from all traversed entities', async () => {
        const traversalRequest: TraversalRequest = {
          collection: {
            collection_name: 'persons'
          },
          opts: { direction: Direction.OUTBOUND },
          path: true
        };
        const expectedVertices = [
          { "name": "Alice", "id": "a", "car_id": "c", "state_id": "i" },
          { "name": "Bob", "id": "b", "car_id": "d", "state_id": "j" },
          { "car": "bmw", "id": "c", "place_id": "e" },
          { "car": "vw", "id": "d", "place_id": "f" },
          { "place": "Munich", "id": "e", "state_id": "g" },
          { "place": "wolfsburg", "id": "f", "state_id": "h" },
          { "state": "Bayern", "id": "g" },
          { "state": "Saxony", "id": "h" },
          { "state": "BW", "id": "i" },
          { "state": "Hessen", "id": "j" }
        ];

        // traverse graph
        let result = await testService.traversal(traversalRequest);

        let traversalResponse = { data: [], paths: [] };
        await new Promise((resolve, reject) => {
          result.on('data', (partResp) => {
            if ((partResp && partResp.data && partResp.data.value)) {
              traversalResponse.data.push(...JSON.parse(partResp.data.value.toString()));
            }
            if ((partResp && partResp.paths && partResp.paths.value)) {
              traversalResponse.paths.push(...JSON.parse(partResp.paths.value.toString()));
            }
          });
          let finalVertices: any = [];
          result.on('end', () => {
            should.exist(traversalResponse.paths);
            should.exist(traversalResponse.data);
            traversalResponse.paths.should.have.size(8); // 8 edges
            traversalResponse.data.should.have.size(10); // 10 vertices - 2 persons, 2 cars, 2 places and 4 states
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

      // Filter tests for collection traversal
      it('with filters should traverse the collection and return data with filtering applied on respective entities', async () => {
        const traversalRequest: TraversalRequest = {
          collection: {
            collection_name: 'persons'
          },
          opts: { direction: Direction.OUTBOUND },
          filters: [{
            filter: [{ field: 'car', operation: FilterOperation.eq, value: 'bmw' }],
            entity: 'cars'
          }, {
            filter: [{ field: 'place', operation: FilterOperation.eq, value: 'Munich' }],
            operator: OperatorType.or,
            entity: 'places'
          }],
          path: true
        };
        const expectedVertices = [{ "name": "Alice", "id": "a", "car_id": "c", "state_id": "i" },
        { "name": "Bob", "id": "b", "car_id": "d", "state_id": "j" },
        { "car": "bmw", "id": "c", "place_id": "e" },
        { "place": "Munich", "id": "e", "state_id": "g" },
        { "state": "Bayern", "id": "g" },
        { "state": "Saxony", "id": "h" },
        { "state": "BW", "id": "i" },
        { "state": "Hessen", "id": "j" }]

        // traverse graph
        let result = await testService.traversal(traversalRequest);

        let traversalResponse = { data: [], paths: [] };
        await new Promise((resolve, reject) => {
          result.on('data', (partResp) => {
            if ((partResp && partResp.data && partResp.data.value)) {
              traversalResponse.data.push(...JSON.parse(partResp.data.value.toString()));
            }
            if ((partResp && partResp.paths && partResp.paths.value)) {
              traversalResponse.paths.push(...JSON.parse(partResp.paths.value.toString()));
            }
          });
          let finalVertices: any = [];
          result.on('end', () => {
            should.exist(traversalResponse.paths);
            should.exist(traversalResponse.data);
            traversalResponse.paths.should.have.size(6); // 8 edges
            traversalResponse.data.should.have.size(8); // 8 vertices - 2 person, 1 car, 1 place, 4 states
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

      // filters with include vertices
      it('should traverse the graph with filters and included vertices options and return only the filtered and included vertices', async () => {
        const traversalRequest: TraversalRequest = {
          collection: {
            collection_name: 'persons'
          },
          opts: { direction: Direction.OUTBOUND, include_vertex: ['cars'] },
          filters: [{
            filter: [{ field: 'car', operation: FilterOperation.eq, value: 'bmw' }, { field: 'car', operation: FilterOperation.eq, value: 'vw' }],
            operator: OperatorType.or,
            entity: 'cars'
          }],
          path: true
        };
        const expectedVertices = [
          { "name": "Alice", "id": "a", "car_id": "c", "state_id": "i" },
          { "name": "Bob", "id": "b", "car_id": "d", "state_id": "j" },
          { "car": "bmw", "id": "c", "place_id": "e" },
          { "car": "vw", "id": "d", "place_id": "f" }
        ];

        // traverse graph
        let result = await testService.traversal(traversalRequest);

        let traversalResponse = { data: [], paths: [] };
        await new Promise((resolve, reject) => {
          result.on('data', (partResp) => {
            if ((partResp && partResp.data && partResp.data.value)) {
              traversalResponse.data.push(...JSON.parse(partResp.data.value.toString()));
            }
            if ((partResp && partResp.paths && partResp.paths.value)) {
              traversalResponse.paths.push(...JSON.parse(partResp.paths.value.toString()));
            }
          });
          let finalVertices: any = [];
          result.on('end', () => {
            should.exist(traversalResponse.paths);
            should.exist(traversalResponse.data);
            traversalResponse.paths.should.have.size(2); // 2 edges
            traversalResponse.data.should.have.size(4); // 4 vertices - 2 persons and 2 cars
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

      // filter with exclude vertices
      it('should traverse the graph with filters and excluded vertices options and return only the filtered and excluded vertices', async () => {
        const traversalRequest: TraversalRequest = {
          collection: {
            collection_name: 'persons'
          },
          opts: { direction: Direction.OUTBOUND, exclude_vertex: ['cars'] },
          filters: [{
            filter: [{ field: 'state', operation: FilterOperation.eq, value: 'BW' }, { field: 'state', operation: FilterOperation.eq, value: 'Hessen' }],
            operator: OperatorType.or, // Default is AND operation
            entity: 'state'
          }],
          path: true
        };
        const expectedVertices = [
          { "name": "Alice", "id": "a", "car_id": "c", "state_id": "i" },
          { "name": "Bob", "id": "b", "car_id": "d", "state_id": "j" },
          { "place": "Munich", "id": "e", "state_id": "g" },
          { "place": "wolfsburg", "id": "f", "state_id": "h" },
          { "state": "Bayern", "id": "g" },
          { "state": "Saxony", "id": "h" },
          { "state": "BW", "id": "i" },
          { "state": "Hessen", "id": "j" }];

        // traverse graph
        let result = await testService.traversal(traversalRequest);

        let traversalResponse = { data: [], paths: [] };
        await new Promise((resolve, reject) => {
          result.on('data', (partResp) => {
            if ((partResp && partResp.data && partResp.data.value)) {
              traversalResponse.data.push(...JSON.parse(partResp.data.value.toString()));
            }
            if ((partResp && partResp.paths && partResp.paths.value)) {
              traversalResponse.paths.push(...JSON.parse(partResp.paths.value.toString()));
            }
          });
          let finalVertices: any = [];
          result.on('end', () => {
            should.exist(traversalResponse.paths);
            should.exist(traversalResponse.data);
            traversalResponse.paths.should.have.size(6); // 2 edges
            traversalResponse.data.should.have.size(8); // 8 vertices - 2 persons, 2 places, 4 states
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

      // filter with exclude edges
      it('for 2 entities should exclude one entity edge and include another entity edge with filtering enabled on second edge entity', async () => {
        const traversalRequest: TraversalRequest = {
          collection: {
            collection_name: 'persons'
          },
          opts: { direction: Direction.OUTBOUND, exclude_edge: ['resides'] },
          filters: [{
            filter: [{ field: 'state', operation: FilterOperation.eq, value: 'BW' }, { field: 'state', operation: FilterOperation.eq, value: 'Hessen' }],
            operator: OperatorType.or, // Default is AND operation
            edge: 'lives'
          }],
          path: true
        };
        const expectedVertices = [
          { "name": "Alice", "id": "a", "car_id": "c", "state_id": "i" },
          { "name": "Bob", "id": "b", "car_id": "d", "state_id": "j" },
          { "car": "bmw", "id": "c", "place_id": "e" },
          { "car": "vw", "id": "d", "place_id": "f" },
          { "place": "Munich", "id": "e", "state_id": "g" },
          { "place": "wolfsburg", "id": "f", "state_id": "h" },
          { "state": "BW", "id": "i" },
          { "state": "Hessen", "id": "j" }];

        // traverse graph
        let result = await testService.traversal(traversalRequest);

        let traversalResponse = { data: [], paths: [] };
        await new Promise((resolve, reject) => {
          result.on('data', (partResp) => {
            if ((partResp && partResp.data && partResp.data.value)) {
              traversalResponse.data.push(...JSON.parse(partResp.data.value.toString()));
            }
            if ((partResp && partResp.paths && partResp.paths.value)) {
              traversalResponse.paths.push(...JSON.parse(partResp.paths.value.toString()));
            }
          });
          let finalVertices: any = [];
          result.on('end', () => {
            should.exist(traversalResponse.paths);
            should.exist(traversalResponse.data);
            traversalResponse.paths.should.have.size(6); // 2 edges
            traversalResponse.data.should.have.size(8); // 8 vertices - 2 persons, 2 cars, 2 places, 2 states
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

      // filter with include edges
      it('should traverse the graph with filters and included edges and return only the filtered and included edge vertices data', async () => {
        const traversalRequest: TraversalRequest = {
          collection: {
            collection_name: 'persons'
          },
          opts: { direction: Direction.OUTBOUND, include_edge: ['has', 'lives'] },
          filters: [{
            filter: [{ field: 'state', operation: FilterOperation.eq, value: 'BW' }, { field: 'state', operation: FilterOperation.eq, value: 'Hessen' }],
            operator: OperatorType.or, // Default is AND operation
            edge: 'lives'
          }],
          path: true
        };
        const expectedVertices = [
          { "name": "Alice", "id": "a", "car_id": "c", "state_id": "i" },
          { "name": "Bob", "id": "b", "car_id": "d", "state_id": "j" },
          { "car": "bmw", "id": "c", "place_id": "e" },
          { "car": "vw", "id": "d", "place_id": "f" },
          { "state": "BW", "id": "i" },
          { "state": "Hessen", "id": "j" }];

        // traverse graph
        let result = await testService.traversal(traversalRequest);

        let traversalResponse = { data: [], paths: [] };
        await new Promise((resolve, reject) => {
          result.on('data', (partResp) => {
            if ((partResp && partResp.data && partResp.data.value)) {
              traversalResponse.data.push(...JSON.parse(partResp.data.value.toString()));
            }
            if ((partResp && partResp.paths && partResp.paths.value)) {
              traversalResponse.paths.push(...JSON.parse(partResp.paths.value.toString()));
            }
          });
          let finalVertices: any = [];
          result.on('end', () => {
            should.exist(traversalResponse.paths);
            should.exist(traversalResponse.data);
            traversalResponse.paths.should.have.size(4); // 4 edges
            traversalResponse.data.should.have.size(6); // 6 vertices - 2 persons, 2 cars, 2 states
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
