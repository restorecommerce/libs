'use strict';

const fs = require('fs');
const os = require('os');

/**
 Cluster Server
 @class
 @classdesc ClusterService
 @param {Object} [opts] - configuration object
 */
class ClusterService {
  constructor(opts = {}) {
    this.opts = opts;
    this.logger = opts.logger;
    this.serviceName = opts.serviceName || 'srv';
    this.mode = opts.mode || 'development';
    this.pidDir = opts.pidDir || os.tmpdir();
    this.workerCount = opts.workerCount || undefined;
    this.nodeOptions = opts.nodeOptions || '';
  }

  run(path) {
    if (this.mode.startsWith('production')) {
      this.runProduction(path);
    } else {
      this.runDevelopment(path);
    }
  }

  runProduction(path) {
    const recluster = require('recluster');

    const opts = {
      workers: this.workerCount,
      backoff: true,
      logger: this.logger
    };

    const cluster = recluster(path, opts);
    cluster.run();

    process.on('SIGUSR2', () => {
      this.logger.info('Master received reload signal (SIGUSR2), instructing workers to reload.');
      cluster.reload();
    });

    process.on('SIGTERM', () => {
      this.logger.info('Master received kill signal (SIGTERM), instructing workers to terminate.');
      cluster.terminate();
    });

    this.cluster = cluster;
    this.pid = process.pid;
    this.writePid();
  }

  runDevelopment(path) {
    const opts = {
      silent: false,
      killTree: true,
      watch: false,
      watchDirectory: '.',
      watchIgnoreDotFiles: true,
      command: `node${this.nodeOptions}`,
      env: { WORKER_ID: 1 }
    };
    this.forever = require('forever-monitor');
    const child = this.forever.start(path, opts);
    this.foreverChild = child;
    this.pid = child.child.pid;
  }

  stop() {
    if (this.mode.startsWith('development')) {
      this.foreverChild.stop();
    } else {
      this.cluster.terminate(() => {
      });
    }
  }

  writePid() {
    fs.writeFileSync(`${this.pidDir}/cluster-serverice-master-${this.serviceName}.pid`, process.pid, 'utf8');
  }
}

module.exports = ClusterService;
