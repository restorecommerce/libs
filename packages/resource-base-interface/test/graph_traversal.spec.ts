import { GraphResourcesServiceBase } from '../src/index.js';
import { ResourcesAPIBase } from '../src/index.js';
import { ServiceBase } from '../src/index.js';
import * as chassis from '@restorecommerce/chassis-srv';
import { createClient, createChannel, Channel } from '@restorecommerce/grpc-client';
import { registerProtoMeta } from '@restorecommerce/kafka-client';
import { Database } from 'arangojs';
import { createServiceConfig } from '@restorecommerce/service-config';
import { createLogger } from '@restorecommerce/logger';
import * as should from 'should';
import * as _ from 'lodash';
import {
  GraphServiceDefinition,
  GraphServiceClient,
  TraversalRequest,
  Filter_Operation as FilterOperation,
  Filters_Operator as OperatorType,
  Options_Direction as Direction,
  protoMetadata,
  TraversalResponse
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/graph.js';
import {
  Sort_SortOrder
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/resource_base.js';
import { it, describe, beforeAll, afterAll } from 'vitest';

registerProtoMeta(protoMetadata);

const database = chassis.database;
let cfg = createServiceConfig(process.cwd() + '/test');
let server = new chassis.Server(cfg.get('server'));
/*
 * Note: To run this test, a running ArangoDB is required.
 */

/* global describe it before after beforeEach */

const fetchAndEquals = async (result: AsyncIterable<TraversalResponse>, expectedVertices: any[], pathCount = 0) => {
  let traversalResponse = { data: new Array<any>(), paths: new Array<any>() };
  for await (const partResp of result) {
    if ((partResp && partResp.data && partResp.data.value)) {
      traversalResponse.data.push(...JSON.parse(partResp.data.value.toString()));
    }
    if ((partResp && partResp.paths && !_.isEmpty(partResp.paths.value))) {
      traversalResponse.paths.push(...JSON.parse(partResp.paths!.value!.toString()));
    }
  }

  let finalVertices: any = [];
  should.exist(traversalResponse.paths);
  should.exist(traversalResponse.data);
  traversalResponse.paths.should.have.size(pathCount);
  traversalResponse.data.should.have.size(expectedVertices.length);
  for (let eachVertice of traversalResponse.data) {
    finalVertices.push(_.omit(eachVertice, ['_id', 'meta']));
  }
  finalVertices =
    _.sortBy(finalVertices, [(o) => { return o.id; }]);
  finalVertices.should.deepEqual(expectedVertices);
};

const testProvider = (providerCfg) => {
  describe('GraphServiceBase', () => {
    let db: any;
    let channel: Channel;
    let testService: GraphServiceClient;
    let testResourceBaseService: GraphServiceClient;
    let graphCfg;
    let resourcesList;
    beforeAll(async () => {
      db = await providerCfg.init();
      // graph Service
      const graphAPIService = new GraphResourcesServiceBase(db,
        cfg.get('fieldHandlers:bufferFields'), createLogger(cfg.get('server:logger')));
      let z: chassis.grpc.BindConfig<GraphServiceDefinition> = {
        service: GraphServiceDefinition,
        implementation: graphAPIService as any
      };
      await server.bind('graphsTestService', z);

      await server.start();

      channel = createChannel(cfg.get('client:graphsTestService').address);
      testService = createClient({
        ...cfg.get('client:graphsTestService'),
        logger: server.logger
      }, GraphServiceDefinition, channel);

      // Start resource base server for the graph services
      graphCfg = cfg.get('graph');
      resourcesList = Object.keys(graphCfg.vertices);

      channel = createChannel(cfg.get('client:test').address);
      testResourceBaseService = createClient({
        ...cfg.get('client:test'),
        logger: server.logger
      }, GraphServiceDefinition, channel);
    });
    afterAll(async () => {
      // drop DB
      const dbHost: string = cfg.get('database:testdb:host');
      const dbPort: string = cfg.get('database:testdb:port');
      const dbName: string = cfg.get('database:testdb:database');
      const db = new Database('http://' + dbHost + ':' + dbPort);
      // await db.dropDatabase(dbName);
      await channel.close();
      await server.stop();
    });

    describe('Graphs Collection API', () => {
      //  STATE <-- lives PERSON has --> CAR belongsto --> PLACE resides --> STATE
      let result_1: any, result_2: any, result_3: any, result_4: any;
      let service_1: any, service_2: any, service_3: any, service_4: any;
      let meta: any;
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
          stateCollection, undefined, graphCfg.vertices[stateCollection], graphName);
        service_4 = new ServiceBase(stateCollection, undefined,
          server.logger, resourceAPI4, false);
        result_4 = await service_4.create({ items: statesVertices });

        const resourceAPI3: ResourcesAPIBase = new ResourcesAPIBase(db,
          placeCollection, undefined, graphCfg.vertices[placeCollection], graphName);
        service_3 = new ServiceBase(placeCollection, undefined,
          server.logger, resourceAPI3, false);
        result_3 = await service_3.create({ items: placesVertices });

        const resourceAPI2: ResourcesAPIBase = new ResourcesAPIBase(db,
          carCollection, undefined, graphCfg.vertices[carCollection], graphName);
        service_2 = new ServiceBase(carCollection, undefined,
          server.logger, resourceAPI2, false);
        result_2 = await service_2.create({ items: carsVertices });

        const resourceAPI1: ResourcesAPIBase = new ResourcesAPIBase(db,
          personCollection, undefined, graphCfg.vertices[personCollection], graphName);
        service_1 = new ServiceBase(personCollection, undefined,
          server.logger, resourceAPI1, false);
        result_1 = await service_1.create({ items: personsVertices });
      });
      // test error handling
      it('should throw an error for graph traversal for missing collection name / start_vertex', async () => {
        // missing collection name in vertices
        let result = testService.traversal({ vertices: { start_vertex_ids: ['a'] } });
        for await (const partResp of result) {
          partResp.operation_status!.code!.should.equal(500);
          partResp.operation_status!.message!.should.equal('missing collection name for vertex id a');
        }

        result = testService.traversal({ vertices: { collection_name: 'person' } });
        for await (const partResp of result) {
          partResp.operation_status!.code!.should.equal(500);
          partResp.operation_status!.message!.should.equal('missing vertex id for collection_name person');
        }

        // empty collection name for collections
        result = testService.traversal({ collection: { collection_name: '' } });
        for await (const partResp of result) {
          partResp.operation_status!.code!.should.equal(500);
          partResp.operation_status!.message!.should.equal('One of the Vertices or Collection should be defined');
        }
      });

      // traversal without path flag
      it('should traverse the graph and return only vertices for Person A', async () => {
        const traversalRequest = TraversalRequest.fromPartial({
          vertices: {
            collection_name: 'persons',
            start_vertex_ids: ['a']
          },
          opts: { direction: Direction.OUTBOUND },
          path: false
        });
        const expectedVertices = [
          { name: 'Alice', id: 'a', car_id: 'c', state_id: 'i' },
          { car: 'bmw', id: 'c', place_id: 'e' },
          { place: 'Munich', id: 'e', state_id: 'g' },
          { state: 'Bayern', id: 'g' },
          { state: 'BW', id: 'i' }
        ];
        // traverse graph
        await fetchAndEquals(testService.traversal(traversalRequest), expectedVertices);
      });

      // traversal with path flag
      it('should traverse the graph and return both vertices and paths when paths flag is set to true', async () => {
        const traversalRequest = TraversalRequest.fromPartial({
          vertices: {
            collection_name: 'persons',
            start_vertex_ids: ['a']
          },
          opts: { direction: Direction.OUTBOUND },
          path: true
        });
        const expectedVertices = [
          { name: 'Alice', id: 'a', car_id: 'c', state_id: 'i' },
          { car: 'bmw', id: 'c', place_id: 'e' },
          { place: 'Munich', id: 'e', state_id: 'g' },
          { state: 'Bayern', id: 'g' },
          { state: 'BW', id: 'i' }
        ];
        // traverse graph
        await fetchAndEquals(testService.traversal(traversalRequest), expectedVertices, 4);
      });

      // include vertices
      it('should traverse the graph with included vertices options and return only the included vertices', async () => {
        const traversalRequest = TraversalRequest.fromPartial({
          vertices: {
            collection_name: 'persons',
            start_vertex_ids: ['a']
          },
          opts: { direction: Direction.OUTBOUND, include_vertexs: ['cars'] },
          path: true
        });
        const expectedVertices = [
          { name: 'Alice', id: 'a', car_id: 'c', state_id: 'i' },
          { car: 'bmw', id: 'c', place_id: 'e' }
        ];
        // traverse graph
        await fetchAndEquals(testService.traversal(traversalRequest), expectedVertices, 1);
      });

      // exclude vertices
      it('should traverse the graph with excluded vertices options and return only traversed data with excluded vertices', async () => {
        const traversalRequest = TraversalRequest.fromPartial({
          vertices: {
            collection_name: 'persons',
            start_vertex_ids: ['a']
          },
          opts: { direction: Direction.OUTBOUND, exclude_vertexs: ['cars'] },
          path: true
        });
        const expectedVertices = [
          { name: 'Alice', id: 'a', car_id: 'c', state_id: 'i' },
          { place: 'Munich', id: 'e', state_id: 'g' },
          { state: 'Bayern', id: 'g' },
          { state: 'BW', id: 'i' }
        ];
        // traverse graph
        await fetchAndEquals(testService.traversal(traversalRequest), expectedVertices, 3);
      });

      // include edges
      it('should traverse the graph with included edges options and return vertices from included edges', async () => {
        const traversalRequest = TraversalRequest.fromPartial({
          vertices: {
            collection_name: 'persons',
            start_vertex_ids: ['a']
          },
          opts: { direction: Direction.OUTBOUND, include_edges: ['has'] },
          path: true
        });
        const expectedVertices = [
          { name: 'Alice', id: 'a', car_id: 'c', state_id: 'i' },
          { car: 'bmw', id: 'c', place_id: 'e' }
        ];
        // traverse graph
        await fetchAndEquals(testService.traversal(traversalRequest), expectedVertices, 1);
      });

      // exclude edges
      it('should traverse the graph with exclude edges options and return vertices from excluded edges', async () => {
        const traversalRequest = TraversalRequest.fromPartial({
          vertices: {
            collection_name: 'persons',
            start_vertex_ids: ['a']
          },
          opts: { direction: Direction.OUTBOUND, exclude_edges: ['belongs'] },
          path: true
        });
        const expectedVertices = [
          { name: 'Alice', id: 'a', car_id: 'c', state_id: 'i' },
          { car: 'bmw', id: 'c', place_id: 'e' },
          { state: 'Bayern', id: 'g' },
          { state: 'BW', id: 'i' }
        ];
        // traverse graph
        await fetchAndEquals(testService.traversal(traversalRequest), expectedVertices, 3);
      });

      // exclude one edge and include another edge of same entity
      it('for 2 entities should exclude one entity edge and include another entity edge', async () => {
        const traversalRequest = TraversalRequest.fromPartial({
          vertices: {
            collection_name: 'persons',
            start_vertex_ids: ['a']
          },
          opts: { direction: Direction.OUTBOUND, exclude_edges: ['resides'], include_edges: ['lives'] },
          path: true
        });
        const expectedVertices = [
          { name: 'Alice', id: 'a', car_id: 'c', state_id: 'i' },
          { state: 'BW', id: 'i' }
        ];
        // traverse graph
        await fetchAndEquals(testService.traversal(traversalRequest), expectedVertices, 1);
      });

      // collection traversal
      it('should traverse the entire collection and return data from all traversed entities', async () => {
        const traversalRequest = TraversalRequest.fromPartial({
          collection: {
            collection_name: 'persons'
          },
          opts: { direction: Direction.OUTBOUND },
          path: true
        });
        const expectedVertices = [
          { name: 'Alice', id: 'a', car_id: 'c', state_id: 'i' },
          { name: 'Bob', id: 'b', car_id: 'd', state_id: 'j' },
          { car: 'bmw', id: 'c', place_id: 'e' },
          { car: 'vw', id: 'd', place_id: 'f' },
          { place: 'Munich', id: 'e', state_id: 'g' },
          { place: 'wolfsburg', id: 'f', state_id: 'h' },
          { state: 'Bayern', id: 'g' },
          { state: 'Saxony', id: 'h' },
          { state: 'BW', id: 'i' },
          { state: 'Hessen', id: 'j' }
        ];

        // traverse graph
        await fetchAndEquals(testService.traversal(traversalRequest), expectedVertices, 8);
      });

      // Filter tests for collection traversal
      it('with filters should traverse the collection and return data with filtering applied on respective entities', async () => {
        const traversalRequest = TraversalRequest.fromPartial({
          collection: {
            collection_name: 'persons'
          },
          opts: { direction: Direction.OUTBOUND },
          filters: [{
            filters: [{ field: 'car', operation: FilterOperation.eq, value: 'bmw' }],
            entity: 'cars'
          }, {
            filters: [{ field: 'place', operation: FilterOperation.eq, value: 'Munich' }],
            operator: OperatorType.or,
            entity: 'places'
          }],
          path: true
        });
        const expectedVertices = [{ name: 'Alice', id: 'a', car_id: 'c', state_id: 'i' },
        { name: 'Bob', id: 'b', car_id: 'd', state_id: 'j' },
        { car: 'bmw', id: 'c', place_id: 'e' },
        { place: 'Munich', id: 'e', state_id: 'g' },
        { state: 'Bayern', id: 'g' },
        { state: 'Saxony', id: 'h' },
        { state: 'BW', id: 'i' },
        { state: 'Hessen', id: 'j' }];

        // traverse graph
        await fetchAndEquals(testService.traversal(traversalRequest), expectedVertices, 6);
      });

      // filters with include vertices
      it('should traverse the graph with filters and included vertices options and return only the filtered and included vertices', async () => {
        const traversalRequest = TraversalRequest.fromPartial({
          collection: {
            collection_name: 'persons'
          },
          opts: { direction: Direction.OUTBOUND, include_vertexs: ['cars'] },
          filters: [{
            filters: [{ field: 'car', operation: FilterOperation.eq, value: 'bmw' }, { field: 'car', operation: FilterOperation.eq, value: 'vw' }],
            operator: OperatorType.or,
            entity: 'cars'
          }],
          path: true
        });
        const expectedVertices = [
          { name: 'Alice', id: 'a', car_id: 'c', state_id: 'i' },
          { name: 'Bob', id: 'b', car_id: 'd', state_id: 'j' },
          { car: 'bmw', id: 'c', place_id: 'e' },
          { car: 'vw', id: 'd', place_id: 'f' }
        ];

        // traverse graph
        await fetchAndEquals(testService.traversal(traversalRequest), expectedVertices, 2);
      });

      // filter with exclude vertices
      it('should traverse the graph with filters and excluded vertices options and return only the filtered and excluded vertices', async () => {
        const traversalRequest = TraversalRequest.fromPartial({
          collection: {
            collection_name: 'persons'
          },
          opts: { direction: Direction.OUTBOUND, exclude_vertexs: ['cars'] },
          filters: [{
            filters: [{ field: 'state', operation: FilterOperation.eq, value: 'BW' }, { field: 'state', operation: FilterOperation.eq, value: 'Hessen' }],
            operator: OperatorType.or, // Default is AND operation
            entity: 'state'
          }],
          path: true
        });
        const expectedVertices = [
          { name: 'Alice', id: 'a', car_id: 'c', state_id: 'i' },
          { name: 'Bob', id: 'b', car_id: 'd', state_id: 'j' },
          { place: 'Munich', id: 'e', state_id: 'g' },
          { place: 'wolfsburg', id: 'f', state_id: 'h' },
          { state: 'Bayern', id: 'g' },
          { state: 'Saxony', id: 'h' },
          { state: 'BW', id: 'i' },
          { state: 'Hessen', id: 'j' }];

        // traverse graph
        await fetchAndEquals(testService.traversal(traversalRequest), expectedVertices, 6);
      });

      // filter with exclude edges
      it('for 2 entities should exclude one entity edge and include another entity edge with filtering enabled on second edge entity', async () => {
        const traversalRequest = TraversalRequest.fromPartial({
          collection: {
            collection_name: 'persons'
          },
          opts: { direction: Direction.OUTBOUND, exclude_edges: ['resides'] },
          filters: [{
            filters: [{ field: 'state', operation: FilterOperation.eq, value: 'BW' }, { field: 'state', operation: FilterOperation.eq, value: 'Hessen' }],
            operator: OperatorType.or, // Default is AND operation
            edge: 'lives'
          }],
          path: true
        });
        const expectedVertices = [
          { name: 'Alice', id: 'a', car_id: 'c', state_id: 'i' },
          { name: 'Bob', id: 'b', car_id: 'd', state_id: 'j' },
          { car: 'bmw', id: 'c', place_id: 'e' },
          { car: 'vw', id: 'd', place_id: 'f' },
          { place: 'Munich', id: 'e', state_id: 'g' },
          { place: 'wolfsburg', id: 'f', state_id: 'h' },
          { state: 'BW', id: 'i' },
          { state: 'Hessen', id: 'j' }];

        // traverse graph
        await fetchAndEquals(testService.traversal(traversalRequest), expectedVertices, 6);
      });

      // filter with include edges
      it('should traverse the graph with filters and included edges and return only the filtered and included edge vertices data', async () => {
        const traversalRequest = TraversalRequest.fromPartial({
          collection: {
            collection_name: 'persons'
          },
          opts: { direction: Direction.OUTBOUND, include_edges: ['has', 'lives'] },
          filters: [{
            filters: [{ field: 'state', operation: FilterOperation.eq, value: 'BW' }, { field: 'state', operation: FilterOperation.eq, value: 'Hessen' }],
            operator: OperatorType.or, // Default is AND operation
            edge: 'lives'
          }],
          path: true
        });
        const expectedVertices = [
          { name: 'Alice', id: 'a', car_id: 'c', state_id: 'i' },
          { name: 'Bob', id: 'b', car_id: 'd', state_id: 'j' },
          { car: 'bmw', id: 'c', place_id: 'e' },
          { car: 'vw', id: 'd', place_id: 'f' },
          { state: 'BW', id: 'i' },
          { state: 'Hessen', id: 'j' }];

        // traverse graph
        await fetchAndEquals(testService.traversal(traversalRequest), expectedVertices, 4);
      });

      // pagination - with limit should traverse along only the limit entities
      it('pagination - should traverse the graph through only first entity when limit filter is specified for root entity', async () => {
        const traversalRequest = TraversalRequest.fromPartial({
          collection: {
            collection_name: 'persons',
            limit: 1
          },
          opts: { direction: Direction.OUTBOUND },
          path: true
        });
        const expectedVertices = [
          { name: 'Alice', id: 'a', car_id: 'c', state_id: 'i' },
          { car: 'bmw', id: 'c', place_id: 'e' },
          { place: 'Munich', id: 'e', state_id: 'g' },
          { state: 'Bayern', id: 'g' },
          { state: 'BW', id: 'i' }];

        // traverse graph
        await fetchAndEquals(testService.traversal(traversalRequest), expectedVertices, 4);
      });

      // pagination with both limit and offset
      it('pagination - should traverse the graph through only from second entity when limit and offset filter is specified for root entity', async () => {
        const traversalRequest = TraversalRequest.fromPartial({
          collection: {
            collection_name: 'persons',
            limit: 1,
            offset: 1
          },
          opts: { direction: Direction.OUTBOUND },
          path: true
        });
        const expectedVertices = [
          { name: 'Bob', id: 'b', car_id: 'd', state_id: 'j' },
          { car: 'vw', id: 'd', place_id: 'f' },
          { place: 'wolfsburg', id: 'f', state_id: 'h' },
          { state: 'Saxony', id: 'h' },
          { state: 'Hessen', id: 'j' }];

        // traverse graph
        await fetchAndEquals(testService.traversal(traversalRequest), expectedVertices, 4);
      });

      // traversal through list of vertices
      it('array start vertices - should traverse the graph through list of specified start vertices', async () => {
        const traversalRequest = TraversalRequest.fromPartial({
          vertices: {
            collection_name: 'persons',
            start_vertex_ids: ['a', 'b']
          },
          opts: { direction: Direction.OUTBOUND },
          path: true
        });
        const expectedVertices = [
          { name: 'Alice', id: 'a', car_id: 'c', state_id: 'i' },
          { name: 'Bob', id: 'b', car_id: 'd', state_id: 'j' },
          { car: 'bmw', id: 'c', place_id: 'e' },
          { car: 'vw', id: 'd', place_id: 'f' },
          { place: 'Munich', id: 'e', state_id: 'g' },
          { place: 'wolfsburg', id: 'f', state_id: 'h' },
          { state: 'Bayern', id: 'g' },
          { state: 'Saxony', id: 'h' },
          { state: 'BW', id: 'i' },
          { state: 'Hessen', id: 'j' }];

        // traverse graph
        await fetchAndEquals(testService.traversal(traversalRequest), expectedVertices, 8);
      });

      // traversal from Car entity with specified vertices
      it('car entity - should traverse the graph from Car vertice and return list of traversed entities from Car entity', async () => {
        const traversalRequest = TraversalRequest.fromPartial({
          vertices: {
            collection_name: 'cars',
            start_vertex_ids: ['c']
          },
          opts: { direction: Direction.OUTBOUND },
          path: true
        });
        const expectedVertices = [
          { car: 'bmw', id: 'c', place_id: 'e' },
          { place: 'Munich', id: 'e', state_id: 'g' },
          { state: 'Bayern', id: 'g' }];

        // traverse graph
        await fetchAndEquals(testService.traversal(traversalRequest), expectedVertices, 2);
      });

      // collection traversal from car entity
      it('car entity - should traverse the graph from Car Collection and return all list of traversed entities from Car entity', async () => {
        const traversalRequest = TraversalRequest.fromPartial({
          collection: {
            collection_name: 'cars'
          },
          opts: { direction: Direction.OUTBOUND },
          path: true
        });
        const expectedVertices = [
          { car: 'bmw', id: 'c', place_id: 'e' },
          { car: 'vw', id: 'd', place_id: 'f' },
          { place: 'Munich', id: 'e', state_id: 'g' },
          { place: 'wolfsburg', id: 'f', state_id: 'h' },
          { state: 'Bayern', id: 'g' },
          { state: 'Saxony', id: 'h' }];

        // traverse graph
        await fetchAndEquals(testService.traversal(traversalRequest), expectedVertices, 4);
      });

      // traversal from Place entity with inbound vertices
      it('inbound traversal - should traverse the graph from Place vertice in inbound direction and return list of traversed entities from Place entity', async () => {
        const traversalRequest = TraversalRequest.fromPartial({
          vertices: {
            collection_name: 'places',
            start_vertex_ids: ['e']
          },
          opts: { direction: Direction.INBOUND },
          path: true
        });
        const expectedVertices = [
          { name: 'Alice', id: 'a', car_id: 'c', state_id: 'i' },
          { car: 'bmw', id: 'c', place_id: 'e' },
          { place: 'Munich', id: 'e', state_id: 'g' }];

        // traverse graph
        await fetchAndEquals(testService.traversal(traversalRequest), expectedVertices, 2);
      });

      // traversal from Place Collection with inbound vertices
      it('inbound traversal - should traverse the graph from Place collection in inbound direction and return list of all traversed entities from Place entity', async () => {
        const traversalRequest = TraversalRequest.fromPartial({
          collection: {
            collection_name: 'places'
          },
          opts: { direction: Direction.INBOUND },
          path: true
        });
        const expectedVertices = [
          { name: 'Alice', id: 'a', car_id: 'c', state_id: 'i' },
          { name: 'Bob', id: 'b', car_id: 'd', state_id: 'j' },
          { car: 'bmw', id: 'c', place_id: 'e' },
          { car: 'vw', id: 'd', place_id: 'f' },
          { place: 'Munich', id: 'e', state_id: 'g' },
          { place: 'wolfsburg', id: 'f', state_id: 'h' }];

        // traverse graph
        await fetchAndEquals(testService.traversal(traversalRequest), expectedVertices, 4);
      });

      // sort root collection in DESC order
      it('should sort the root collection in descending order and return data from all traversed entities', async () => {
        const traversalRequest = TraversalRequest.fromPartial({
          collection: {
            collection_name: 'persons',
            sorts: [{ field: 'name', order: Sort_SortOrder.DESCENDING }]
          },
          opts: { direction: Direction.OUTBOUND },
          path: true
        });
        // traverse graph
        let result = testService.traversal(traversalRequest);

        let traversalResponse = { data: new Array<any>(), paths: new Array<any>() };
        for await (const partResp of result) {
          if ((partResp && partResp.data && partResp.data.value)) {
            traversalResponse.data.push(...JSON.parse(partResp.data.value.toString()));
          }
          if ((partResp && partResp.paths && partResp.paths.value)) {
            traversalResponse.paths.push(...JSON.parse(partResp.paths.value.toString()));
          }
        }

        should.exist(traversalResponse.paths);
        should.exist(traversalResponse.data);
        // Descending order for persons entity
        traversalResponse.data[0].name.should.equal('Bob');
        traversalResponse.data[1].name.should.equal('Alice');
      });

      // update the edge data for car_id for persons
      // then do a traversal request for Alice Person and for Bob person 
      // separately and verify the cars are interchanged
      it('should validate update person vertices with updated car id', async () => {
        // update meta as well
        const meta = {
          owner: [{ owner_entity: 'urn:restorecommerce:acs:model:User', owner_id: 'NewAdmin' }]
        };
        const updatedPersonsVertices = [
          { name: 'Alice', id: 'a', car_id: 'd', state_id: 'i', meta },
          { name: 'Bob', id: 'b', car_id: 'c', state_id: 'j', meta }
        ];
        result_1 = await service_1.update({ items: updatedPersonsVertices });

        // Alice traversal request
        const traversalRequest = TraversalRequest.fromPartial({
          vertices: {
            collection_name: 'persons',
            start_vertex_ids: ['a']
          },
          opts: { direction: Direction.OUTBOUND, include_vertexs: ['cars'] },
          path: true
        });
        const expectedVertices = [
          { name: 'Alice', id: 'a', car_id: 'd', state_id: 'i' },
          { car: 'vw', id: 'd', place_id: 'f' }
        ];

        // traverse graph
        await fetchAndEquals(testService.traversal(traversalRequest), expectedVertices, 1);

        // Bob traversal request
        const traversalRequest1 = TraversalRequest.fromPartial({
          vertices: {
            collection_name: 'persons',
            start_vertex_ids: ['b']
          },
          opts: { direction: Direction.OUTBOUND, include_vertexs: ['cars'] },
          path: true
        });
        const expectedVertices1 = [
          { name: 'Bob', id: 'b', car_id: 'c', state_id: 'j' },
          { car: 'bmw', id: 'c', place_id: 'e' }];

        // traverse graph
        await fetchAndEquals(testService.traversal(traversalRequest1), expectedVertices1, 1);
      });

      // do an upsert api for Person with interchanging the car_id again and then inserting a new person
      // Read Alice again and verify it has old car
      // Read new Person and only person should exist
      it('should validate upsert person vertices with updated car id and inserting new person vertice', async () => {
        // update meta as well
        const meta = {
          owner: [{ owner_entity: 'urn:restorecommerce:acs:model:User', owner_id: 'Admin' }]
        };
        const upsertedPersonsVertices = [
          { name: 'Alice', id: 'a', car_id: 'c', state_id: 'i', meta },
          { name: 'Bob', id: 'b', car_id: 'd', state_id: 'j', meta },
          { name: 'NewPerson', id: 'newPersonID', car_id: 'c', state_id: 'i', meta }
        ];
        result_1 = await service_1.upsert({ items: upsertedPersonsVertices });

        // Alice traversal request to verify car_id is reverted
        const traversalRequest = TraversalRequest.fromPartial({
          vertices: {
            collection_name: 'persons',
            start_vertex_ids: ['a']
          },
          opts: { direction: Direction.OUTBOUND, include_vertexs: ['cars'] },
          path: true
        });
        const expectedVertices = [
          { name: 'Alice', id: 'a', car_id: 'c', state_id: 'i' },
          { car: 'bmw', id: 'c', place_id: 'e' }];

        // traverse graph
        await fetchAndEquals(testService.traversal(traversalRequest), expectedVertices, 1);

        // NewPerson traversal request to verify connected edges
        const traversalRequest1 = TraversalRequest.fromPartial({
          vertices: {
            collection_name: 'persons',
            start_vertex_ids: ['newPersonID']
          },
          opts: { direction: Direction.OUTBOUND },
          path: true
        });
        const expectedVertices1 = [
          { car: 'bmw', id: 'c', place_id: 'e' },
          { place: 'Munich', id: 'e', state_id: 'g' },
          { state: 'Bayern', id: 'g' },
          { state: 'BW', id: 'i' },
          { name: 'NewPerson', id: 'newPersonID', car_id: 'c', state_id: 'i' }];

        // traverse graph
        await fetchAndEquals(testService.traversal(traversalRequest1), expectedVertices1, 4);
      });

      it('delete vertices, should delete the edges associated as well',
        async () => {
          // Deleting the ids of vertexCollection 'cars' should remove
          // both 'person_has_car'  and 'car_has_org' both edges
          await service_2.delete({ collection: 'cars' });
          // await service_2.delete({ ids: ['c', 'd'] });
        });
    });
  });
};

const providers = [
  {
    name: 'arango',
    init: async (): Promise<any> => {
      return database.get(
        cfg.get('database:testdb'),
        server.logger,
        'testGraph',
        cfg.get('graph:edgeDefinitions')
      );
    }
  }
];
providers.forEach((providerCfg) => {
  describe(`with database provider ${providerCfg.name}`, () => {
    testProvider(providerCfg);
  });
});
