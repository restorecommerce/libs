const ClusterServer = require('../index');

const prodOptions = {
  mode: 'production'
};

describe('the cluster service', function() {
  it('should be able to start a server in development mode', function(done) {
    const cluster = new ClusterServer();
    cluster.run('./test/service.js');
    cluster.stop();
    done();
  });
  it('should be able to start a server in production mode', function(done) {
    const cluster = new ClusterServer(prodOptions);
    cluster.run('./test/service.js');
    cluster.stop();
    done();
  });
});
