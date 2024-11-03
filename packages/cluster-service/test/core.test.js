const ClusterServer = require('../index');
import { it, describe } from 'vitest';

const prodOptions = {
  mode: 'production'
};

describe('the cluster service', function() {
  it('should be able to start a server in development mode', () => {
    const cluster = new ClusterServer();
    cluster.run('./test/service.js');
    cluster.stop();
  });
  it('should be able to start a server in production mode', () => {
    const cluster = new ClusterServer(prodOptions);
    cluster.run('./test/service.js');
    cluster.stop();
  });
});
