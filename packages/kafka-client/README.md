# kafka-client

[![Version][version]](https://www.npmjs.com/package/@restorecommerce/kafka-client)[![Build Status][build]](https://travis-ci.org/restorecommerce/kafka-client?branch=master)[![Dependencies][depend]](https://david-dm.org/restorecommerce/kafka-client)[![Coverage Status][cover]](https://coveralls.io/github/restorecommerce/kafka-client?branch=master)

[version]: http://img.shields.io/npm/v/%40restorecommerce%2Fkafka%2Dclient.svg?style=flat-square
[build]: http://img.shields.io/travis/restorecommerce/kafka-client/master.svg?style=flat-square
[depend]: https://img.shields.io/david/restorecommerce/kafka-client.svg?style=flat-square
[cover]: http://img.shields.io/coveralls/restorecommerce/kafka-client/master.svg?style=flat-square


A Node.js client for [Apache Kafka](https://kafka.apache.org/) based on [kafka-node](https://github.com/SOHU-Co/kafka-node). 
Event messages structures are defined using [Protocol Buffers](https://developers.google.com/protocol-buffers) with message encoding/decoding being achieved using [protobufjs](https://github.com/dcodeIO/protobuf.js).

With this module, it is possible to have a fine grained control over which Kafka topics and event names the client can subscribe to. There could be multiple event names associated for the same message.
Internally message events are emitted to local listeners using [Node.js Events](https://nodejs.org/api/events.html), which decode protobuf messages and execute the intended listeners. 

This client includes a Provider object, which packages events and distributes them to the respective listeners. Currently, the following event providers are implemented:
- Kafka
- Local (in-process events, designed for testing)

When subscribing to a given event name, options can be passed. Currently, the supported subscription options are:
- `startingOffset` - value for the starting offset to process messages; default is `-1` (latest offset);
- `queue` - a boolean flag; if set to `true`, messages are queued and processed synchronously;
- `forceOffset` - a boolean flag; if set to `true`, `startingOffset` is considered above any other provided offset or configuration parameter.

## Development

### Tests

See [tests](test/). To execute the tests a set of _backing services_ are needed.
Refer to [System](https://github.com/restorecommerce/system) repository to start the backing-services before running the tests.

- To run tests

```sh
npm run test
```

## Usage

- Install dependencies

```sh
npm install
```

- Build

```sh
# compile the code
npm run build
```