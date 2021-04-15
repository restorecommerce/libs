import { initAuthZ, authZ } from './authz';

/**
 * Koa middleware using the BMSLSA implementation for `iam-authn`.
 */
export const acsClientMiddleware = (config?: any) => {
  initAuthZ(config);

  return async (ctx: any, next) => {
    ctx.authZ = authZ;
    await next();
  };
};
