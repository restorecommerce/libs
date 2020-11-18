import Router from 'koa-router';
import { InteractionResults, Provider } from 'oidc-provider';
import bodyParser from 'koa-body';
import { Logger } from '@restorecommerce/logger';
import { IdentityContext } from '../interfaces';
import { OIDCTemplateEngine } from './templates';
import { AuthUser, loginUser } from './user';
import { OIDCHbsTemplates } from './interfaces';


export interface CreateOIDCRouterArgs {
  logger: Logger;
  provider: Provider;
  env?: string;
  templates?: OIDCHbsTemplates;
}

export function createOIDCRouter({logger, provider, env, templates }: CreateOIDCRouterArgs): Router<{}, IdentityContext> {

  const dev = env === 'development';

  const tplEngine = new OIDCTemplateEngine(templates);

  const router = new Router<{}, IdentityContext>();

  router.get('/interaction/:uid', async (ctx, next) => {
    const {
      uid, prompt, params, session,
    } = await provider.interactionDetails(ctx.req, ctx.res);
    const client = await provider.Client.find(params.client_id);

    switch (prompt.name) {
      case 'login': {
        ctx.type = 'html';
        ctx.body = await tplEngine.login({
          title: 'Login',
          dev,
          uid,
          dbg: {
            params,
            prompt,
            session
          }
        });
        return;
      }
      default:
        return next();
    }
  });

  router.post('/interaction/:uid/login', bodyParser({
    text: false, json: false
  }), async (ctx) => {
    const { prompt, uid, params, session } = await provider.interactionDetails(ctx.req, ctx.res);

    if (prompt.name !== 'login') {
      throw new Error('INVALID_PROMPT');
    }

    const body = ctx.request.body;

    const identifier = typeof body?.identifier === 'string' ? body.identifier : undefined;
    const password = typeof body?.password === 'string' ? body.password : undefined;
    const remember = !!(body?.remember);

    if (!identifier || !password) {
      ctx.type = 'html';
      ctx.response.body = await tplEngine.login({
        title: 'Login',
        uid,
        identifier,
        error: {
          key: 'NO_IDENTIFIER_OR_PASSWORD',
          message: 'No identifier or password'
        },
        dev,
        dbg: {
          params,
          prompt,
          session
        }
      });
      return;
    }

    let user: AuthUser | undefined = undefined;

    try {
      user = await loginUser(ctx.identity.client.user, identifier, password);
    } catch (error) {
      console.error(error);
    }

    if (!user) {
      ctx.type = 'html';
      ctx.response.body = await tplEngine.login({
        title: 'Login',
        dev,
        uid,
        identifier,
        error: {
          key: 'INVALID_IDENTIFIER_OR_PASSWORD',
          message: 'Invalid identifier or password'
        },
        dbg: {
          params,
          prompt,
          session
        }
      });
      return;
    }

    const result: InteractionResults = {
      select_account: {}, // make sure its skipped by the interaction policy since we just logged in
      consent: {  // no need for consent atm
        rejectedScopes: [],
        rejectedClaims: [],
      },
      login: {
        remember,
        account: user.id,
      },
      meta: {}
    };

    return provider.interactionFinished(ctx.req, ctx.res, result, {
      mergeWithLastSubmission: false,
    });
  });

  router.get('/interaction/:uid/abort', async (ctx) => {
    const result: InteractionResults = {
      error: 'access_denied',
      error_description: 'End-User aborted interaction',
    };

    return provider.interactionFinished(ctx.req, ctx.res, result, {
      mergeWithLastSubmission: false,
    });
  });

  router.get('/session', async (ctx) => {
    const _ctx = provider.app.createContext(ctx.req, ctx.res);
    // const session = await provider.Session.get(_ctx)
    const x = new provider.OIDCContext(ctx)

    // new provider.OIDCContext(ctx)

    ctx.response.body = {
      ats: x.getAccessToken(),
      at: provider.AccessToken.find(x.getAccessToken()),
      // session
    };
  });

  return router;
};
