# cluster-service

<img src="http://img.shields.io/npm/v/%40restorecommerce%2Fgql%2Dbot.svg?style=flat-square" alt="">[![Build Status][build]](https://travis-ci.org/restorecommerce/cluster-service?branch=master)[![Dependencies][depend]](https://david-dm.org/restorecommerce/cluster-service)[![Coverage Status][cover]](https://coveralls.io/github/restorecommerce/cluster-service?branch=master)

[version]: http://img.shields.io/npm/v/cluster-service.svg?style=flat-square
[build]: http://img.shields.io/travis/restorecommerce/cluster-service/master.svg?style=flat-square
[depend]: https://img.shields.io/david/restorecommerce/cluster-service.svg?style=flat-square
[cover]: http://img.shields.io/coveralls/restorecommerce/cluster-service/master.svg?style=flat-square

A service launcher supporting two modes, **development** and
**production**.

In development mode (default),
[forever-monitor](https://github.com/foreverjs/forever-monitor)
is used to launch a **single instance** and keep it alive.

In production mode,
[recluster](https://github.com/doxout/recluster) is used
to launch a [node.js cluster](https://nodejs.org/api/cluster.html) of
a given service.
A PID file is created in `os.tmpdir()` with the file name `${pidDir}/cluster-serverice-master-${serviceName}.pid`.
By default, as many workers are stated as CPU cores can be detected.
The cluster also listens to `SIGUSR2` and `SIGTERM` signals.

## Usage

```js
const cluster = new ClusterServer(options);
cluster.run('./service.js');
done();
```

## Options

- `logger` Winston compatible logger like [Restore Logger](https://github.com/restorecommerce/logger).
- `serviceName` [`srv`] name of the service (used to build PID file ).
- `mode` [`development`] the mode name, `development` or `production`.
- `pidDir` [`os.tmpdir()`] Directory where to store the PID file .
- `workerCount` [number of cores] The number of workers to launch in production mode.
- `nodeOptions` [] command line options to node for development mode.
