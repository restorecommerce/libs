import { ResourcesSrvGrpcClient } from '../src/index';

describe('resources client', () => {
  it('can be instantiated', (done) => {
    let logger = new ResourcesSrvGrpcClient({
      address: '127.0.0.1:50000'
    });
    expect(logger).toBeInstanceOf(ResourcesSrvGrpcClient);
    done();
  });

});
