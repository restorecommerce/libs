import * as should from 'should';
import * as _ from 'lodash';
import { createLogger } from '@restorecommerce/logger';
import { Database } from 'arangojs';
import * as chassis from '../src';
import { DatabaseProvider } from '../src/database';
const config = chassis.config;
const database = chassis.database;

let db: DatabaseProvider;

/* global describe context it beforeEach */

const providers = [
  {
    name: 'arango',
    init: async (): Promise<DatabaseProvider> => {
      await config.load(process.cwd() + '/test');
      const cfg = await config.get();
      const logger = createLogger(cfg.get('logger'));
      return database.get(cfg.get('database:arango'), logger);
    },
    drop: async (): Promise<any> => {
      await config.load(process.cwd() + '/test');
      const cfg = await config.get();

      const dbHost: string = cfg.get('database:arango:host');
      const dbPort: string = cfg.get('database:arango:port');
      const dbName: string = cfg.get('database:arango:database');

      const db = new Database('http://' + dbHost + ':' + dbPort);
      await db.dropDatabase(dbName);
    },
    custom: () => {
      describe('testing custom queries', () => {
        it('should register a custom query', () => {
          const script = 'return "Hello World"';
          db.registerCustomQuery('helloWorld', script, 'query');
          const queries = db.listCustomQueries();
          should.exist(queries);
          queries.should.have.length(1);
          should.exist(queries[0][0]);
          queries[0][0].should.equal('helloWorld');

          should.exist(queries[0][1]);
          should.exist(queries[0][1].code);
          queries[0][1].code.should.equal(script);
          should.exist(queries[0][1].type);
          queries[0][1].type.should.equal('query');
        });
        it('should unregister a custom query', async () => {
          const script = 'return "Hello World";';
          db.registerCustomQuery('helloWorld', script, 'query');
          let functions = db.listCustomQueries();
          should.exist(functions);
          functions.should.have.length(1);

          db.unregisterCustomQuery('helloWorld');
          functions = db.listCustomQueries();
          should.exist(functions);
          functions.should.have.length(0);
        });
        it('should execute a custom query', async () => {
          const script = `return "Hello World"`;
          await db.registerCustomQuery('helloWorld', script, 'query');
          const result = await db.find('test', {}, {
            customQueries: ['helloWorld']
          });
          should.exist(result);
          result.should.have.length(1);
          result[0].should.equal('Hello World');
        });
        it('should execute a custom query with custom parameters', async () => {
          const script = `return @param`;
          await db.registerCustomQuery('helloWorld', script, 'query');
          const result = await db.find('test', {}, {
            customQueries: ['helloWorld'],
            customArguments: {
              param: 'Hello World'
            }
          });
          should.exist(result);
          result.should.have.length(1);
          result[0].should.equal('Hello World');
        });
        it('should execute a custom query which accesses the database', async () => {
          const script = `for t in test return t`;
          await db.registerCustomQuery('script', script, 'query');
          const result = await db.find('test', {}, {
            customQueries: ['script']
          });
          should.exist(result);
          result.should.have.length(8);
        });
        it('should apply a custom filter within a `find` query', async () => {
          const script = `filter node.id == @customArguments.param`;
          await db.registerCustomQuery('script', script, 'filter');
          const result = await db.find('test', {}, {
            customQueries: ['script'],
            customArguments: {
              param: '/test/sort0'
            }
          });

          should.exist(result);
          result.should.have.length(1);

          should.exist(result[0].id);
          result[0].id.should.equal('/test/sort0');
          should.exist(result[0].include);
          result[0].include.should.equal(true);
          should.exist(result[0].value);
          result[0].value.should.equal('c');
        });
        it('should combine a custom filter with normal filters', async () => {
          const script = `filter node.value != @customArguments.param`;
          await db.registerCustomQuery('script', script, 'filter');
          const result = await db.find('test', {
            include: {
              $eq: true
            }
          },
            {
              customQueries: ['script'],
              customArguments: {
                param: 'a'
              }
            });

          should.exist(result);
          result.should.have.length(2);

          const sorted = _.sortBy(result, ['id']);

          should.exist(sorted[0].id);
          sorted[0].id.should.equal('/test/sort0');
          should.exist(sorted[0].include);
          sorted[0].include.should.equal(true);
          should.exist(sorted[0].value);
          sorted[0].value.should.equal('c');

          should.exist(sorted[1].id);
          sorted[1].id.should.equal('/test/sort4');
          should.exist(sorted[1].include);
          sorted[1].include.should.equal(true);
          should.exist(sorted[1].value);
          sorted[1].value.should.equal('b');
        });
      });
    }
  },
  {
    name: 'nedb',
    init: async (): Promise<DatabaseProvider> => {
      await config.load(process.cwd() + '/test');
      const cfg = await config.get();
      const logger = createLogger(cfg.get('logger'));
      return database.get(cfg.get('database:nedb'), logger);
    },
    drop: async (): Promise<any> => { },
    custom: () => { return () => { }; }
  }
];

const testProvider = (providerCfg) => {
  const collection = 'test';
  const testData = [
    { id: '/test/sort0', value: 'c', include: true },
    { id: '/test/sort1', include: false },
    { id: '/test/sort2', include: false },
    { id: '/test/sort3', value: 'a', include: true },
    { id: '/test/sort4', value: 'b', include: true },
    { id: '/test/sort5', include: false },
    { id: '/test/somethingDifferent', include: false },
    { id: '/test/sortDifferent', include: false },
  ];
  const document = testData[4];

  // users data
  const userCollection = 'users';
  const userData = [
    { id: '1', first_name: 'Jenny', last_name: 'Brookes' },
    { id: '2', first_name: 'Michael', last_name: 'Goldsmith' },
    { id: '3', first_name: 'Michela', last_name: 'Smith' },
    { id: '4', first_name: 'Michael', last_name: 'Bowden' },
    { id: '5', first_name: 'Stephanie', last_name: 'Stokes' },
    { id: '6', first_name: 'David', last_name: 'Müller' }
  ];

  // address data
  const addressCollection = 'addresss';
  const addressData = [
    { id: '1', city: 'Stuttgart', country: 'Germany' },
    { id: '2', city: 'Berlin', country: 'Germany' },
    { id: '3', city: 'Munich', country: 'Germany' },
    { id: '4', city: 'Bern', country: 'Switzerland' },
    { id: '5', city: 'Zurich', country: 'Switzerland' },
    { id: '6', city: 'Basel', country: 'Switzerland' }
  ];
  beforeEach(async () => {
    db = await providerCfg.init();
    await db.insert(collection, testData);
    should.exist(db);
    const result = await db.count(collection, {});
    // insert user collection for full text search testcase
    if (providerCfg.name === 'arango') {
      await db.insert(userCollection, userData);
      await db.insert(addressCollection, addressData);
    }
  });

  afterEach(async () => {
    await providerCfg.drop();
  });
  describe('upsert', () => {
    it('should insert a new document if it does not exist with upsert operation', async () => {
      const newDoc = {
        id: '/test/testupsert',
        name: 'test',
      };
      let result = await db.upsert(collection, newDoc);
      should.exist(result);
      result.should.deepEqual([newDoc]);
      newDoc.name = 'changed';
      result = await db.upsert(collection, newDoc);
      result.should.deepEqual([newDoc]);
    });
    it('should update existing document with upsert operation', async () => {
      const newDoc = {
        id: '/test/testupsert',
        name: 'changedAgain',
      };
      let result = await db.upsert(collection, newDoc);
      should.exist(result);
      result.should.deepEqual([newDoc]);
    });
  });
  describe('count', () => {
    it(`should return the number of documents
    in the collection with blank filter`, async () => {
      const result = await db.count(collection, {});
      should.exist(result);
      result.should.equal(testData.length);
    });
    it('should return one for filtering based on id', async () => {
      const result = await db.count(collection, { id: testData[0].id });
      should.exist(result);
      result.should.equal(1);
    });
  });
  describe('truncate', () => {
    it('should delete all collection', async () => {
      await db.truncate();
      const result = await db.count(collection, {});
      should.exist(result);
      result.should.equal(0);
    });
    it('should delete all documents in provided collection', async () => {
      await db.truncate(collection);
      const result = await db.count(collection, {});
      should.exist(result);
      result.should.equal(0);
    });
  });
  describe('findByID', () => {
    it('should find documents', async () => {
      const result = await db.findByID(collection, document.id);
      should.exist(result);
      result.should.be.length(1);
      result[0].should.deepEqual(document);
    });
  });
  describe('find', () => {
    context('with id filter', () => {
      it('should return a document', async () => {
        const result = await db.find(collection, {
          id: document.id,
        });
        result.should.be.length(1);
        result[0].should.deepEqual(document);
      });
    });

    describe('find', () => {
      context('with iLike filter', () => {
        it('should return one filtering based on iLike', async () => {

          const result = await db.find('test', {
            id: {
              $iLike: '%sOrT%'
            }
          });
          result.should.be.length(7);
        });
      });
    });

    context('with sort', () => {
      it('should return documents sorted in ascending order',
        async () => {
          let sortOrderKey;
          if (providerCfg.name == 'arango') {
            sortOrderKey = 'ASC';
          } else if (providerCfg.name == 'nedb') {
            sortOrderKey = 1;
          }
          const result = await db.find(collection,
            { include: true },
            { sort: { value: sortOrderKey } }); // sort ascending
          should.exist(result);
          result.should.deepEqual([testData[3], testData[4], testData[0]]);
        });
      it('should return documents sorted in descending order',
        async () => {
          let sortOrderKey;
          if (providerCfg.name == 'arango') {
            sortOrderKey = 'DESC';
          } else if (providerCfg.name == 'nedb') {
            sortOrderKey = -1;
          }
          const result = await db.find(collection,
            { include: true },
            { sort: { value: sortOrderKey } }); // sort descending
          should.exist(result);
          result.should.deepEqual([testData[0], testData[4], testData[3]]);
        });
    });
    context('with field limiting', () => {
      it('should return documents with selected fields', async () => {
        const result = await db.find(collection,
          { include: true },
          // 0 is exclude and 1 is to include that particular key
          { fields: { include: 0 } }); // exclude field 'include'
        should.exist(result);
        const resultKeep = await db.find(collection,
          { include: true },
          { fields: { id: 1, value: 1 } }); // include only id and value fields
        resultKeep.should.deepEqual(result);
        // Not to modify the original data which is used in next test case
        // to add and delete in beforeEach and afterEach
        const clonedData = _.cloneDeep([testData[3], testData[4], testData[0]]);
        const compareData = _.map(clonedData, (e) => {
          _.unset(e, 'include');
          return e;
        });
        _.sortBy(result, 'id').should.deepEqual(_.sortBy(compareData, 'id'));
      });
    });
    context('with limit', () => {
      it('should return one document', async () => {
        const result: Object = await db.find(collection, {
          id: document.id,
        },
          {
            limit: 1
          });
        should.exist(result);
        result.should.be.length(1);
        result[0].should.deepEqual(document);
      });
    });
  });
  context('with filter operator', () => {
    it('should return a document', async () => {
      let result = await db.find(collection, {
        $or: [
          { id: document.id },
          { value: 'new' }
        ]
      });
      should.exist(result);
      result.should.be.length(1);
      result[0].should.deepEqual(document);

      result = await db.find(collection, {
        $or: [
          {
            id: document.id,
          },
          {
            $and: [
              {
                name: {
                  $in: ['test'],
                },
              },
              {
                value: {
                  $not: {
                    $gt: 10,
                  },
                },
              },
            ],
          },
        ],
      });
      should.exist(result);
      result.should.be.length(1);
      result[0].should.deepEqual(document);

      result = await db.find(collection, {
        id: document.id,
      },
        {
          limit: 1,
          offset: 1,
        });
      result.should.be.empty();

      result = await db.find(collection, {
        id: {
          $startswith: '/test',
        },
      });
      result.should.be.length(testData.length);

      result = await db.find(collection, {
        id: {
          $endswith: '0',
        },
      });
      result.should.be.length(1);
      result[0].should.deepEqual(testData[0]);

      result = await db.find(collection, {
        value: {
          $isEmpty: null,
        },
      });
      // 3 fields with value as an empty field
      should.exist(result);
    });
  });
  describe('inserting a document', () => {
    it('should store a document', async () => {
      const newDoc = {
        id: 'testnew',
        name: 'test',
      };
      let insertResp = await db.insert(collection, newDoc);
      insertResp[0].should.deepEqual(newDoc);
    });
    it('should return an error response when inserting same document twice', async () => {
      // inserting newDoc since in afterEach we drop .i.e. for every it() -> DB is dropped
      const newDoc = {
        id: 'testnew',
        name: 'test',
      };
      let insertResp = await db.insert(collection, newDoc);
      insertResp[0].should.deepEqual(newDoc);
      insertResp = await db.insert(collection, newDoc);
      should.exist(insertResp);
      insertResp[0].error.should.equal(true);
    });
  });
  describe('update', () => {
    it('should update document', async () => {
      const newDoc = _.clone(document);
      newDoc.value = 'new';
      await db.update(collection, [newDoc]);
      let result = await db.findByID(collection, document.id);
      result = result[0];
      result.should.deepEqual(newDoc);
    });
    it('should return error response when updating document which does not exist', async () => {
      const invalidDoc = { id: 'invlaid', include: false };
      let updateResp = await db.update(collection, [invalidDoc]);
      should.exist(updateResp);
      updateResp[0].error.should.equal(true);
      updateResp[0].errorMessage.should.equal('document not found');
    });
  });
  describe('delete', () => {
    it('should delete document and also return a response for missing / invalid doc ID', async () => {
      let deleteResp = await db.delete(collection, [document.id, 'invalid']);
      should.exist(deleteResp);
      deleteResp.should.be.length(2);
      should.exist(deleteResp[0]._id);
      deleteResp[1].error.should.equal(true);
      const result = await db.findByID(collection, document.id);
      result.should.be.Array();
      result.should.be.length(0);
    });
  });
  describe('query by date', () => {
    it('should be able to query document by its time stamp', async () => {
      const currentDate = new Date();
      const timeStamp1 = currentDate.setFullYear(currentDate.getFullYear());
      const timeStamp2 = currentDate.setFullYear(currentDate.getFullYear() + 1);
      const timeStamp3 = currentDate.setFullYear(currentDate.getFullYear() + 2);
      const timeData = [
        { id: 'a', created: timeStamp1 },
        { id: 'b', created: timeStamp2 },
        { id: 'c', created: timeStamp3 }
      ];
      await db.insert(collection, timeData);
      // should return first two documents
      let result = await db.find(collection, {
        $and: [
          {
            created: {
              $gte: timeStamp1
            }
          },
          {
            created: {
              $lte: timeStamp2
            }
          }
        ],
      });
      should.exist(result);
      result.should.be.Array();
      result.should.be.length(2);
      timeData.splice(2, 1);
      result = _.sortBy(result, [(o) => { return o.id; }]);
      result.should.deepEqual(timeData);
      // truncate test DB
      await db.truncate();
    });

    if (providerCfg.name === 'arango') {
      describe('full text search', () => {
        it('should return all test docs ignorning search string when analayzer or view config not set', async () => {
          let testDocs = await db.find(collection, {}, { search: { search: 'test' } });
          testDocs.length.should.equal(8);
        });

        it('should search with default case insensitive based on first name and last name', async () => {
          // delay is added since the index takes a second (since we delete and create users in beforeEach and afterEach)
          await new Promise((resolve, reject) => {
            setTimeout(resolve, 2000);
          });
          let usersFound = await db.find(userCollection, {}, { search: { search: 'Ich oWd' } });
          usersFound.length.should.equal(3);
          usersFound[0].id.should.equal('4');
          usersFound[0].first_name.should.equal('Michael');
          usersFound[0].last_name.should.equal('Bowden');
          usersFound[1].id.should.equal('2');
          usersFound[1].first_name.startsWith('Mich').should.equal(true);
          usersFound[1].last_name.endsWith('mith').should.equal(true);
          usersFound[2].id.should.equal('3');
          usersFound[2].first_name.startsWith('Mich').should.equal(true);
          usersFound[2].last_name.endsWith('mith').should.equal(true);
        }).timeout(5000);

        it('should search with default case insensitive based on city name and country name', async () => {
          // delay is added since the index takes a second (since we delete and create users in beforeEach and afterEach)
          await new Promise((resolve, reject) => {
            setTimeout(resolve, 2000);
          });
          let addressFound = await db.find(addressCollection, {}, { search: { search: 'ber man' } });
          addressFound.length.should.equal(4);
          addressFound[0].city.should.equal('Berlin'); // Berlin, Germany (both terms match)
          addressFound[1].city.should.equal('Bern');
          addressFound[2].country.should.equal('Germany'); // match becasue of Country Germany with search string `man`
          addressFound[3].country.should.equal('Germany'); // match becasue of Country Germany with search string `man`
        }).timeout(5000);

        it('should search with case sensitive based on first name and last name', async () => {
          // delay is added since the index takes a second (since we delete and create users in beforeEach and afterEach)
          await new Promise((resolve, reject) => {
            setTimeout(resolve, 2000);
          });
          let usersFound = await db.find(userCollection, {}, { search: { search: 'Ich oWd', case_sensitive: true } });
          usersFound.length.should.equal(0);
          usersFound = await db.find(userCollection, {}, { search: { search: 'Mic Bow', case_sensitive: true } });
          usersFound.length.should.equal(3);
          usersFound[0].id.should.equal('4');
          usersFound[0].first_name.should.equal('Michael');
          usersFound[0].last_name.should.equal('Bowden');
          usersFound[1].id.should.equal('2');
          usersFound[1].first_name.startsWith('Mich').should.equal(true);
          usersFound[1].last_name.endsWith('mith').should.equal(true);
          usersFound[2].id.should.equal('3');
          usersFound[2].first_name.startsWith('Mich').should.equal(true);
          usersFound[2].last_name.endsWith('mith').should.equal(true);
        }).timeout(5000);

        it('should search for umlauts', async () => {
          // delay is added since the index takes a second (since we delete and create users in beforeEach and afterEach)
          await new Promise((resolve, reject) => {
            setTimeout(resolve, 2000);
          });
          let usersFound = await db.find(userCollection, {}, { search: { search: 'müll' } });
          usersFound.length.should.equal(1);
          usersFound[0].first_name.should.equal('David');
          usersFound[0].last_name.should.equal('Müller');
        }).timeout(5000);

        it('should not return any result for any match of the search string', async () => {
          // delay is added since the index takes a second (since we delete and create users in beforeEach and afterEach)
          await new Promise((resolve, reject) => {
            setTimeout(resolve, 2000);
          });
          let usersFound = await db.find(userCollection, {}, { search: { search: 'does not exist' } });
          usersFound.length.should.equal(0);
        }).timeout(5000);

        it('should search with filter', async () => {
          // delay is added since the index takes a second (since we delete and create users in beforeEach and afterEach)
          await new Promise((resolve, reject) => {
            setTimeout(resolve, 2000);
          });
          let usersFound = await db.find(userCollection, { last_name: { $iLike: '%bow%' } }, { search: { search: 'mic' } });
          usersFound.length.should.equal(1);
          usersFound[0].first_name.should.equal('Michael');
          usersFound[0].last_name.should.equal('Bowden');
        }).timeout(5000);

        it('should return an error deleting analyzer since the view still exists', async () => {
          // delay is added since the index takes a second (since we delete and create users in beforeEach and afterEach)
          await new Promise((resolve, reject) => {
            setTimeout(resolve, 2000);
          });
          let resp = await db.deleteAnalyzer(['trigram', 'trigram_norm']);
          resp.length.should.equal(2);
          resp[0].id.should.equal('trigram');
          resp[0].code.should.equal(409);
          resp[0].message.should.equal("analyzer in-use while removing arangosearch analyzer 'chassis-test::trigram'");
          resp[1].id.should.equal('trigram_norm');
          resp[1].code.should.equal(409);
          resp[1].message.should.equal("analyzer in-use while removing arangosearch analyzer 'chassis-test::trigram_norm'");
        }).timeout(5000);

        it('should return an error dropping view which does not exist', async () => {
          // delay is added since the index takes a second (since we delete and create users in beforeEach and afterEach)
          await new Promise((resolve, reject) => {
            setTimeout(resolve, 2000);
          });
          let resp = await db.dropView(['test']);
          resp.length.should.equal(1);
          resp[0].id.should.equal('test');
          resp[0].code.should.equal(404);
          resp[0].message.should.equal('collection or view not found');
        }).timeout(5000);

        it('should drop view', async () => {
          // delay is added since the index takes a second (since we delete and create users in beforeEach and afterEach)
          await new Promise((resolve, reject) => {
            setTimeout(resolve, 2000);
          });
          let resp = await db.dropView(['users_view']);
          resp.length.should.equal(1);
          resp[0].id.should.equal('users_view');
          resp[0].code.should.equal(200);
          resp[0].message.should.equal('View users_view dropped successfully');
        }).timeout(5000);

        it('should delete analyzers', async () => {
          // delay is added since the index takes a second (since we delete and create users in beforeEach and afterEach)
          await new Promise((resolve, reject) => {
            setTimeout(resolve, 2000);
          });
          // drop view and then analyzer
          await db.dropView(['users_view', 'addresss_view']);
          let resp = await db.deleteAnalyzer(['trigram', 'trigram_norm']);
          resp.length.should.equal(2);
          resp[0].id.should.equal('trigram');
          resp[0].code.should.equal(200);
          resp[0].message.should.equal('Analyzer trigram deleted successfully');
          resp[1].id.should.equal('trigram_norm');
          resp[1].code.should.equal(200);
          resp[1].message.should.equal('Analyzer trigram_norm deleted successfully');
        }).timeout(5000);

      });
    }
  });
  describe('custom tests', () => providerCfg.custom());
};

providers.forEach((providerCfg) => {
  describe(`with database provider ${providerCfg.name}`, () => {
    testProvider(providerCfg);
  });
});
