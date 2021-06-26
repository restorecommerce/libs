import { HealthChecker, State } from '@cloudnative/health';
import { Context } from 'koa';

enum StateCode {
  OK = 200,
  DOWN = 503,
  ERRORED = 500
}

export const HealthEndpoint = (checker: HealthChecker): (ctx: Context, next: () => void) => void => {
  return async (ctx: Context, next: () => void) => {
    return checker.getStatus().then(async (status) => {
      switch (status.status) {
        case State.STARTING: ctx.status = StateCode.DOWN; break;
        case State.UP: ctx.status = StateCode.OK; break;
        case State.DOWN: ctx.status = StateCode.DOWN; break;
        case State.STOPPING: ctx.status = StateCode.DOWN; break;
        case State.STOPPED: ctx.status = StateCode.DOWN; break;
        default: ctx.status = StateCode.ERRORED; break;
      }
      ctx.type = 'application/json';
      ctx.body = JSON.stringify(status);
      await next();
    }).catch(async () => { await next(); });
  };
};


export const LivenessEndpoint = (checker: HealthChecker): (ctx: Context, next: () => void) => void => {
  return async (ctx: Context, next: () => void) => {
    return checker.getLivenessStatus().then(async (status) => {
      switch (status.status) {
        case State.STARTING: ctx.status = StateCode.OK; break;
        case State.UP: ctx.status = StateCode.OK; break;
        case State.DOWN: ctx.status = StateCode.DOWN; break;
        case State.STOPPING: ctx.status = StateCode.DOWN; break;
        case State.STOPPED: ctx.status = StateCode.DOWN; break;
        default: ctx.status = StateCode.ERRORED; break;
      }
      ctx.type = 'application/json';
      ctx.body = JSON.stringify(status);
      await next();
    }).catch(async () => { await next(); });
  };
};


export const ReadinessEndpoint = (checker: HealthChecker): (ctx: Context, next: () => void) => void => {
  return async (ctx: Context, next: () => void) => {
    return checker.getReadinessStatus().then(async (status) => {
      ctx.status = StateCode.OK; // Default
      switch (status.status) {
        case State.STARTING: ctx.status = StateCode.DOWN; break;
        case State.UP: ctx.status = StateCode.OK; break;
        case State.DOWN: ctx.status = StateCode.DOWN; break;
        case State.STOPPING: ctx.status = StateCode.DOWN; break;
        case State.STOPPED: ctx.status = StateCode.DOWN; break;
      }
      ctx.type = 'application/json';
      ctx.body = JSON.stringify(status);
      await next();
    }).catch(async () => { await next(); });
  };
};
