'use strict';

import * as mocha from 'mocha';
import { GraphResourcesServiceBase } from '../lib/core/GraphResourcesServiceBase';
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
 * Note: To run this test, a running ArangoDB and Kafka instance is required.
 * (Kafka is needed only if 'events:enableEvents' config is enabled)
 */

/* global describe it before after beforeEach */

const providers = [
  {
    name: 'arango',
    init: async function init(): Promise<any> {
      const dbHost: string = cfg.get('database:testdb:host');
      const dbPort: string = cfg.get('database:testdb:port');
      const dbName: string = cfg.get('database:testdb:database');
      const dbCfg = cfg.get('database:testdb')
      const db = new Database('http://' + dbHost + ':' + dbPort);
      await
      await db.dropDatabase(dbName);
      return database.get(cfg.get('database:testdb'), server.logger);
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
    const vertexCollectionName = 'person';
    const edgeCollectionName = 'has_car';
    const edgeCollectionName_1 = 'has_headquartesrs_in';
    const vertexCollectionName_1 = 'car';
    const vertexCollectionName_2 = 'location';
    before(async function before() {
      db = await providerCfg.init();
      // create graph with a graph name
      const graph = await db.createGraphDB('test-graph');
      // create person vertex collection
      await db.addVertexCollection(vertexCollectionName);
      await db.addVertexCollection(vertexCollectionName_1);
      await db.addVertexCollection(vertexCollectionName_2);
      // create edge definition edgeCollectionName, fromVerticeCollection,
      // toVerticeCollection
      await db.addEdgeDefinition(edgeCollectionName,
        [vertexCollectionName],
        [vertexCollectionName_1]);
      await db.addEdgeDefinition(edgeCollectionName_1,
        [vertexCollectionName_1],
        [vertexCollectionName_2]);
      should.exist(db);

      // graph Service
      const graphAPIService = new GraphResourcesServiceBase(db);
      await server.bind('graphsTestService', graphAPIService);

      await server.start();

      client = new Client(cfg.get('client:graphsTestService'), server.logger);
      testService = await client.connect();
    });
    after(async function after() {
      await client.end();
      await server.stop();
    });

    describe('Graphs Collection API', () => {
      let result, result1, result2;
      let edgeResult;
      it('should create a vertex collection and insert data into it', async function
    createVertices() {
        const personVertices = [
          { name: 'Alice', id: 'a' },
          { name: 'Bob', id: 'b' }
        ];
        const carVertices = [
          { car: 'bmw', id: 'c' },
          { car: 'vw', id: 'd' }
        ];
        const orgVertices = [
          { org: 'Bayern', id: 'e' },
          { org: 'wolfsburg', id: 'f' }
        ];
        result = await db.createVertex(vertexCollectionName, personVertices);
        result1 = await db.createVertex(vertexCollectionName_1, carVertices);
        result2 = await db.createVertex(vertexCollectionName_2, orgVertices);

        // verify the data from DB
        let insertedVertices = await db.find(vertexCollectionName);
        insertedVertices = _.sortBy(insertedVertices, [function (o) { return o.name; }]);
        should.exist(insertedVertices);
        insertedVertices.should.deepEqual(personVertices);
      });
      it('should create an edge collection and insert data into it', async function
      createEdges() {
        let edges: any = [
          { info: 'Alice has BMW car', _from: result[0]._id, _to: result1[0]._id },
          { info: 'Bob has VW car', _from: result[1]._id, _to: result1[1]._id }];

        let edges_1: any = [{ info: 'BMW has head quarters in Bayern', _from: result1[0]._id, _to: result2[0]._id },
        { info: 'VW has head quarters in Wolfsburg', _from: result1[1]._id, _to: result2[1]._id }
        ];

        await db.createEdge(edgeCollectionName, edges[0]);
        await db.createEdge(edgeCollectionName, edges[1]);
        await db.createEdge(edgeCollectionName_1, edges_1[0]);
        await db.createEdge(edgeCollectionName_1, edges_1[1]);
        let insertedEdges: any = await db.find(edgeCollectionName);
        let insertedEdges_1: any = await db.find(edgeCollectionName_1);
        should.exist(insertedEdges);
        should.exist(insertedEdges_1);
        insertedEdges.should.have.size(2);
        insertedEdges_1.should.have.size(2);
        edges = _.sortBy(edges, [function (o) { return o.info; }]);
        insertedEdges = _.sortBy(insertedEdges, [function (o) { return o.info; }]);
        insertedEdges.should.deepEqual(edges);
        edges_1 = _.sortBy(edges_1, [function (o) { return o.info; }]);
        insertedEdges_1 = _.sortBy(insertedEdges_1, [function (o) { return o.info; }]);
        insertedEdges_1.should.deepEqual(edges_1);
      });
      // Test for graph traversal
      it('should traverse all vertices and edges in the graph',
        async function checkGraphTraversal() {
          const traversalRequest = {
            start_vertex: result[0]._id,
            opts: { direction: 'outbound' }
          };
          const expectedVertices = [{ name: 'Alice', id: 'a' },
          { car: 'bmw', id: 'c' },
          { org: 'Bayern', id: 'e' }];
          let traversalResponse = await testService.traversal(traversalRequest);
          // compare data
          traversalResponse = traversalResponse.data;
          if (traversalResponse && traversalResponse.data) {
            const decodedData = JSON.parse(Buffer.from(traversalResponse.data.value).toString());
            traversalResponse.data = decodedData;
          }
          if (traversalResponse && traversalResponse.paths) {
            const decodedPath = JSON.parse(Buffer.from(traversalResponse.paths.value).toString())
            traversalResponse.paths = decodedPath;
          }
          traversalResponse.paths.should.have.size(3);
          traversalResponse.data.should.have.size(3);
          let finalVertices = [];
          for (let eachVertice of traversalResponse.data) {
            finalVertices.push(_.omit(eachVertice, '_id'));
          }
          finalVertices =
            _.sortBy(finalVertices, [function (o) { return o.id; }]);
          finalVertices.should.deepEqual(expectedVertices);
        });

      it('should traverse by excluding specified vertices using filter in the graph',
        async function checkGraphTraversal() {
          const traversalRequest = {
            start_vertex: result[0]._id,
            opts: {
              direction: 'outbound',
              filter: [{ vertex: 'car' }]
            }
          };
          const expectedVertices = [{ name: 'Alice', id: 'a' },
          { org: 'Bayern', id: 'e' }];
          let traversalResponse = await testService.traversal(traversalRequest);
          // compare data
          traversalResponse = traversalResponse.data;
          if (traversalResponse && traversalResponse.data) {
            const decodedData = JSON.parse(Buffer.from(traversalResponse.data.value).toString());
            traversalResponse.data = decodedData;
          }
          if (traversalResponse && traversalResponse.paths) {
            const decodedPath = JSON.parse(Buffer.from(traversalResponse.paths.value).toString())
            traversalResponse.paths = decodedPath;
          }
          traversalResponse.paths.should.have.size(2);
          traversalResponse.data.should.have.size(2);
          let finalVertices = [];
          for (let eachVertice of traversalResponse.data) {
            finalVertices.push(_.omit(eachVertice, '_id'));
          }
          finalVertices =
            _.sortBy(finalVertices, [function (o) { return o.id; }]);
          finalVertices.should.deepEqual(expectedVertices);
        });

      it('should traverse by including only specified edges using expander in the graph',
        async function checkGraphTraversal() {
          const traversalRequest = {
            start_vertex: result[0]._id,
            opts: {
              expander: [{ edge: 'car', direction: 'outbound' }]
            }
          };
          const expectedVertices = [{ name: 'Alice', id: 'a' },
          { car: 'bmw', id: 'c' }];
          let traversalResponse = await testService.traversal(traversalRequest);
          // compare data
          traversalResponse = traversalResponse.data;
          if (traversalResponse && traversalResponse.data) {
            const decodedData = JSON.parse(Buffer.from(traversalResponse.data.value).toString());
            traversalResponse.data = decodedData;
          }
          if (traversalResponse && traversalResponse.paths) {
            const decodedPath = JSON.parse(Buffer.from(traversalResponse.paths.value).toString())
            traversalResponse.paths = decodedPath;
          }
          traversalResponse.paths.should.have.size(2);
          traversalResponse.data.should.have.size(2);
          let finalVertices = [];
          for (let eachVertice of traversalResponse.data) {
            finalVertices.push(_.omit(eachVertice, '_id'));
          }
          finalVertices =
            _.sortBy(finalVertices, [function (o) { return o.id; }]);
          finalVertices.should.deepEqual(expectedVertices);
        });
    });
  });
}
