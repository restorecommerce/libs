import { initAuthZ } from './authz.js';

/**
 * Koa middleware using the BMSLSA implementation for `iam-authn`.
 */
export const acsClientMiddleware = (config?: any) => {
  return async (ctx: any, next: any) => {
    ctx.authZ = initAuthZ(config);
    await next();
  };
};
