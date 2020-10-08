/**
 * Koa middleware using the RestoreCommerce implementation for `iam-authn`.
 */

import * as _ from '@restorecommerce/facade/modules/identity/gql/old/types/node_modules/lodash';
import { InvalidTokenError } from '@restorecommerce/iam-authn';
import { KoaJwtStore } from '@restorecommerce/iam-koa';
import * as Koa from 'koa';
import { errors } from '../config';

import { authN, initAuthN, getSessionMetaInfo } from './authn';
import { initAuthZ, authZ } from './authz';
import { BootstrapData, UserSessionData } from './interfaces';
import logger from '../logger';
import { getRedisCache } from './redis';
import { RestoreCommerceContext } from './interfaces';
import { JwtMeta } from '@restorecommerce/iam-authn';

export default () => {
  initAuthN();
  initAuthZ();

  return async (ctx: Koa.Context, next) => {
    const newCtx = ctx as RestoreCommerceContext;

    newCtx.jwtStore = new KoaJwtStore(ctx, {
      cookiePrefix: 'restorecommerce',
      secureCookie: false // TODO: make configurable!!!
    });

    newCtx.authN = authN; // stateless
    newCtx.authZ = authZ;

    const tokens = await newCtx.jwtStore.read();

    if (tokens) {
      let data: UserSessionData | BootstrapData;
      try {
        const { jwt, jti, rt } = tokens;

        newCtx.session = await newCtx.authN.authenticate({
          type: 'jwt',
          jwt,
          jti,
          rt
        });
        data = newCtx.session.data;

        // Persist() takes JwtStore class instance as input object
        await newCtx.session.persist(newCtx.jwtStore);
      } catch (ex) {
        if (ex instanceof InvalidTokenError) {
          logger.error('Invalid token was provided; destroying session');

          const meta: JwtMeta = getSessionMetaInfo(newCtx.session);
          await newCtx.jwtStore.destroy();
          if (data && data['id']) {
            await getRedisCache().remove(data['id'], meta);
          }
        }
        if (typeof ex == 'string' && errors[ex]) {
          logger.error(errors[ex]);
        } else {
          logger.error('Unexpected error:', { message: ex.message });
        }
        newCtx.session = undefined;
      }
    } else {
      newCtx.session = undefined;
    }

    ctx = newCtx;

    await next();
  };
};
