import { initAuthZ } from './authz';

/**
 * Koa middleware using the BMSLSA implementation for `iam-authn`.
 */
export const acsClientMiddleware = (config?: any) => {
  return async (ctx: any, next) => {
    ctx.authZ = initAuthZ(config);
    await next();
  };
};
