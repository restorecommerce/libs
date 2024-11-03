'use strict';

const fetch = require('isomorphic-fetch');
const Koa = require('koa');
let reqResLogger = require('../lib/index');
const assert = require('assert');
const bodyParser = require('koa-bodyparser');
import { it, describe, beforeAll, beforeEach } from 'vitest';

reqResLogger = reqResLogger.default;

let loggedLines = [];

function lineLogger(verbosity) {
  return (...line) => {
    loggedLines.push({
      verbosity,
      line
    })
  }
}

const testLogger = {};

for(let verbosity of ['error', 'warn', 'info', 'http', 'verbose', 'debug', 'silly']) {
  testLogger[verbosity] = lineLogger(verbosity);
}

const sampleGraphQLBody = {
  operationName: 'Hello',
  query: 'query Hello { world }',
  variables: {foo: 'bar'}
};

let server;

function setupServer(bodyParsing = false, bodyBeforeLogging = true) {
  const app = new Koa();

  if (bodyParsing && bodyBeforeLogging) {
    app.use(bodyParser());
  }

  app.use(reqResLogger({
    logger: testLogger,
    logGraphQL: true,
    logGraphQLVariables: true
  }));

  if (bodyParsing && !bodyBeforeLogging) {
    app.use(bodyParser());
  }

  server = app.listen();
  console.log('started');
}

describe('GraphQL Request and Response logging', () => {

  beforeAll(() => {
    setupServer();
  })

  beforeEach(() => {
    loggedLines = [];
  });

  it('should log a simple request', () => {
    return fetch('http://localhost:' + server.address().port)
    .then(() => {
      assertLogBase(loggedLines, 'GET')
    });
  });

});

describe('simple Request and Response logging', () => {
  beforeEach(() => {
    loggedLines = [];
  });

  describe('having body parser before logger', () => {
    beforeAll(() => {
      setupServer(true, true);
    })

    it('should log a GraphQL request', () => {
      return fetch('http://localhost:' + server.address().port, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(sampleGraphQLBody)
      })
      .then(() => {
        assertLogBase(loggedLines, 'POST')
        assert('graphql' in loggedLines[0].line[1]);
        assert.deepStrictEqual(loggedLines[0].line[1].graphql, sampleGraphQLBody)
      });
    });
  })

  describe('having body parser after logger', () => {
    beforeAll(() => {
      setupServer(true, false);
    })

    it('should log a GraphQL request', () => {
      return fetch('http://localhost:' + server.address().port, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(sampleGraphQLBody)
      })
      .then(() => {
        assertLogBase(loggedLines, 'POST')
        assert('graphql' in loggedLines[1].line[1]);
        assert.deepStrictEqual(loggedLines[1].line[1].graphql, sampleGraphQLBody)
      });
    });
  })
});

function assertLogBase(loggedLines, method) {
  assert.equal(loggedLines.length, 2);

  const requestLine = loggedLines[0].line;
  const responseLine = loggedLines[1].line;

  assert.equal(requestLine.length, 2);
  assert.equal(responseLine.length, 2);

  assert.equal(requestLine[0], 'Request');
  assert('header' in requestLine[1]);
  assert(typeof(requestLine[1].header), 'object');
  assert.equal(requestLine[1].method, method);
  assert.equal(requestLine[1].url, '/');

  assert.equal(responseLine[0], 'Response');
  assert('proc_time' in responseLine[1]);
  assert(typeof(responseLine[1].procTime), 'number');
  assert('header' in responseLine[1]);
  assert(typeof(responseLine[1].header), 'object');
  assert.equal(responseLine[1].status, '404');
}
