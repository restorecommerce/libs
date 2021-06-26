import { should } from 'chai';
import { HealthChecker, LivenessCheck, ShutdownCheck, StartupCheck } from '@cloudnative/health';
import { HealthEndpoint, LivenessEndpoint, ReadinessEndpoint } from '../lib'
import { mockContext } from './test-helper';
import * as koa from 'koa';

should();

const noop = () => {
};

function validateResult(ctx: koa.Context, expectedStatus: number, expectedBody: string) {
  const status = ctx.response.status;
  const body = ctx.response.body;
  (status).should.equals(expectedStatus, `Should return: ${expectedStatus}, but returned: ${status}`);
  (body).should.equals(expectedBody, `Should return: ${expectedBody}, but returned: ${body}`);
}

describe('Koa Connect Cloud Health test suite', function () {

  it('Liveness returns 200 OK on startup check starting', async function () {
    const cloudHealth = new HealthChecker();
    cloudHealth.registerStartupCheck(
      new StartupCheck('startup', () => new Promise<void>(function (resolve) {
        setTimeout(resolve, 100);
      })
    ));

    const ctx = mockContext();
    await LivenessEndpoint(cloudHealth)(ctx, noop);
    validateResult(ctx, 200, '{"status":"UP","checks":[]}');
  });

  it('Liveness returns 200 OK and UP on liveness success', async function () {
    const cloudHealth = new HealthChecker();
    cloudHealth.registerLivenessCheck(
      new LivenessCheck('test1', () => new Promise<void>(function (resolve) {
        resolve();
      }))
    );

    const ctx = mockContext();
    await LivenessEndpoint(cloudHealth)(ctx, noop);
    console.log(ctx.body);
    validateResult(ctx, 200, '{"status":"UP","checks":[{"name":"test1","state":"UP","data":{"reason":""}}]}');
  });

  it('Liveness returns 503 Unavailable and DOWN on liveness fail', async function () {
    const cloudHealth = new HealthChecker();
    cloudHealth.registerLivenessCheck(
      new LivenessCheck('test1', () => new Promise<void>(() => {
        throw new Error('Liveness Failure');
      }))
    );

    const ctx = mockContext();
    await LivenessEndpoint(cloudHealth)(ctx, noop);

    validateResult(ctx, 503, '{"status":"DOWN","checks":[{"name":"test1","state":"DOWN","data":{"reason":"Liveness Failure"}}]}');
  });

  it('Liveness returns 503 Unavailable and STOPPING on STOPPING', function (done) {
    process.removeAllListeners('SIGTERM');
    const cloudHealth = new HealthChecker();
    cloudHealth.registerShutdownCheck(
      new ShutdownCheck('test1', () => new Promise<void>(function () {
        return new Promise(function (resolve) {
          setTimeout(resolve, 100, 'foo');
        })
      }))
    );

    process.once('SIGTERM', async () => {
      const ctx = mockContext();
      await LivenessEndpoint(cloudHealth)(ctx, noop);

      validateResult(ctx, 503, '{"status":"STOPPING","checks":[{"name":"test1","state":"STOPPING","data":{"reason":""}}]}');

      done()
    });
    process.kill(process.pid, 'SIGTERM')
  });

  it('Liveness returns 503 Unavailable and STOPPED on STOPPED', function (done) {
    process.removeAllListeners('SIGTERM');
    const cloudHealth = new HealthChecker();
    const promiseone = () => new Promise<void>((resolve) => {
      setTimeout(resolve, 1);
    });
    const checkone = new ShutdownCheck('test1', promiseone);
    cloudHealth.registerShutdownCheck(checkone);

    process.once('SIGTERM', async () => {
      await setTimeout(async () => {
        const ctx = mockContext();
        await LivenessEndpoint(cloudHealth)(ctx, noop);

        validateResult(ctx, 503, '{"status":"STOPPED","checks":[{"name":"test1","state":"STOPPED","data":{"reason":""}}]}');

        done()
      }, 100);
    });
    process.kill(process.pid, 'SIGTERM')

  });

  it('Readiness returns 503 Unavailable and DOWN on startup fail', function (done) {
    let cloudHealth = new HealthChecker();
    cloudHealth.registerStartupCheck(
      new StartupCheck('test1', () => new Promise<void>(function () {
        throw new Error('Startup Failure');
      }))
    ).then(async () => {
      const ctx = mockContext();
      await ReadinessEndpoint(cloudHealth)(ctx, noop);

      validateResult(ctx, 503, '{"status":"DOWN","checks":[{"name":"test1","state":"DOWN","data":{"reason":"Startup Failure"}}]}');

      done()
    });
  });

  it('Readiness returns 503 Unavailable on startup check starting', async function () {
    const cloudHealth = new HealthChecker();
    cloudHealth.registerStartupCheck(
      new StartupCheck('startup', () => new Promise<void>(function (resolve, reject) {
        setTimeout(reject, 100, 'reason');
      }))
    );

    const ctx = mockContext();
    await ReadinessEndpoint(cloudHealth)(ctx, noop);

    validateResult(ctx, 503, '{"status":"DOWN","checks":[{"name":"startup","state":"DOWN","data":{"reason":"reason"}}]}');
  });

  it('Readiness returns 200 OK and UP on startup and liveness checks', function (done) {
    let cloudHealth = new HealthChecker();
    cloudHealth.registerStartupCheck(
      new StartupCheck('startup', () => new Promise<void>(function (resolve) {
        resolve();
      }))
    ).then(async () => {
      const ctx = mockContext();
      await ReadinessEndpoint(cloudHealth)(ctx, noop);

      validateResult(ctx, 200, '{"status":"UP","checks":[{"name":"readiness","state":"UP","data":{"reason":""}}]}');

      done()
    });
    cloudHealth.registerReadinessCheck(
      new LivenessCheck('readiness', () => new Promise<void>(function (resolve) {
        resolve();
      }))
    );
  });

  it('Readiness returns 503 Unavailable and STOPPING on STOPPING', function (done) {
    process.removeAllListeners('SIGTERM');
    const cloudHealth = new HealthChecker();
    cloudHealth.registerShutdownCheck(
      new ShutdownCheck('test1', () => new Promise<void>(function () {
        return new Promise(function (resolve) {
          setTimeout(resolve, 100, 'foo');
        })
      }))
    );

    process.once('SIGTERM', async () => {
      const ctx = mockContext();
      await ReadinessEndpoint(cloudHealth)(ctx, noop);

      validateResult(ctx, 503, '{"status":"STOPPING","checks":[{"name":"test1","state":"STOPPING","data":{"reason":""}}]}');

      done()
    });
    process.kill(process.pid, 'SIGTERM')
  });

  it('Readiness returns 503 Unavailable and STOPPED on STOPPED', function (done) {
    process.removeAllListeners('SIGTERM');
    const cloudHealth = new HealthChecker();
    const promiseone = () => new Promise<void>((resolve) => {
      setTimeout(resolve, 1);
    });
    const checkone = new ShutdownCheck('test1', promiseone);
    cloudHealth.registerShutdownCheck(checkone);

    process.once('SIGTERM', async () => {
      await setTimeout(async () => {
        const ctx = mockContext();
        await ReadinessEndpoint(cloudHealth)(ctx, noop);

        validateResult(ctx, 503, '{"status":"STOPPED","checks":[{"name":"test1","state":"STOPPED","data":{"reason":""}}]}');

        done()
      }, 100);
    });
    process.kill(process.pid, 'SIGTERM')
  });

  it('Health returns 503 Unavailable and STARTING on startup check starting', async function () {
    const cloudHealth = new HealthChecker();
    cloudHealth.registerStartupCheck(
      new StartupCheck('startup', () => new Promise<void>(function (resolve) {
        resolve();
      }))
    );

    const ctx = mockContext();
    await HealthEndpoint(cloudHealth)(ctx, noop);

    validateResult(ctx, 503, '{"status":"STARTING","checks":[{"name":"startup","state":"STARTING","data":{"reason":""}}]}');
  });

  it('Health returns 200 OK and UP on liveness success', async function () {
    const cloudHealth = new HealthChecker();
    cloudHealth.registerLivenessCheck(
      new LivenessCheck('test1', () => new Promise<void>(function (resolve) {
        resolve();
      }))
    );

    const ctx = mockContext();
    await HealthEndpoint(cloudHealth)(ctx, noop);

    validateResult(ctx, 200, '{"status":"UP","checks":[{"name":"test1","state":"UP","data":{"reason":""}}]}');
  });

  it('Health returns 503 Unavailable and DOWN on liveness fail', async function () {
    const cloudHealth = new HealthChecker();
    cloudHealth.registerLivenessCheck(
      new LivenessCheck('test1', () => new Promise<void>(function () {
        throw new Error('Liveness Failure');
      }))
    );

    const ctx = mockContext();
    await HealthEndpoint(cloudHealth)(ctx, noop);

    validateResult(ctx, 503, '{"status":"DOWN","checks":[{"name":"test1","state":"DOWN","data":{"reason":"Liveness Failure"}}]}');
  });

  it('Health returns 503 Unavailable and STOPPING on STOPPING', function (done) {
    process.removeAllListeners('SIGTERM');
    const cloudHealth = new HealthChecker();
    cloudHealth.registerShutdownCheck(
      new ShutdownCheck('test1', () => new Promise<void>(function () {
        return new Promise(function (resolve) {
          setTimeout(resolve, 100, 'foo');
        })
      }))
    );

    process.once('SIGTERM', async () => {
      const ctx = mockContext();
      await HealthEndpoint(cloudHealth)(ctx, noop);

      validateResult(ctx, 503, '{"status":"STOPPING","checks":[{"name":"test1","state":"STOPPING","data":{"reason":""}}]}');

      done();
    });
    process.kill(process.pid, 'SIGTERM')
  });

  it('Health returns 503 Unavailable and STOPPED on STOPPED', function (done) {
    process.removeAllListeners('SIGTERM');
    const cloudHealth = new HealthChecker();
    const promiseone = () => new Promise<void>((resolve) => {
      setTimeout(resolve, 1);
    });
    const checkone = new ShutdownCheck('test1', promiseone);
    cloudHealth.registerShutdownCheck(checkone);

    process.once('SIGTERM', async () => {
      await setTimeout(async () => {
        const ctx = mockContext();
        await HealthEndpoint(cloudHealth)(ctx, noop);

        validateResult(ctx, 503, '{"status":"STOPPED","checks":[{"name":"test1","state":"STOPPED","data":{"reason":""}}]}');

        done();
      }, 100);
    });
    process.kill(process.pid, 'SIGTERM')

  });

});
