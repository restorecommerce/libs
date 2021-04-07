import Router from 'koa-router';
import { InteractionResults, Provider } from 'oidc-provider';
import bodyParser from 'koa-body';
import { Logger } from 'winston';
import { IdentityContext } from '../interfaces';
import { OIDCTemplateEngine, OIDCTemplateError } from './templates';
// import { AuthUser, loginUser } from './user';
import { OIDCError, OIDCHbsTemplates, OIDCBodyLoginFn } from './interfaces';

export interface CreateOIDCRouterArgs {
  logger: Logger;
  provider: Provider;
  env?: string;
  templates?: OIDCHbsTemplates;
  loginFn: OIDCBodyLoginFn;
}

export function createOIDCRouter({logger, loginFn, provider, env, templates }: CreateOIDCRouterArgs): Router<{}, IdentityContext> {

  const dev = env === 'development';

  const tplEngine = new OIDCTemplateEngine(templates);

  const router = new Router<{}, IdentityContext>();

  router.get('/interaction/:uid', async (ctx, next) => {
    const {
      uid, prompt, params, session,
    } = await provider.interactionDetails(ctx.req, ctx.res);
    const client = await provider.Client.find((params as any).client_id);

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
      case 'consent': {
        console.log('consent', prompt.details);

        const { prompt: { name, details } } = await provider.interactionDetails(ctx.req, ctx.res);

        const consent: any = {};
        consent.rejectedScopes = [];

        // replace = false means previously rejected scopes and claims remain rejected
        // changing this to true will remove those rejections in favour of just what you rejected above
        consent.replace = false;
        const result = { consent };
        return provider.interactionFinished(ctx.req, ctx.res, result, {
          mergeWithLastSubmission: true,
        });

        // ctx.type = 'html';
        // ctx.body = await tplEngine.consent({
        //   title: 'Authorize',
        //   dev,
        //   uid,
        //   details: prompt.details,
        //   dbg: {
        //     params,
        //     prompt,
        //     session
        //   }
        // });
        // return;
      }
      default:
        return next();
    }
  });

  // router.post('/interaction/:uid/confirm', bodyParser({
  //   text: false, json: false
  // }), async (ctx) => {
  //   const { prompt: { name, details } } = await provider.interactionDetails(ctx.req, ctx.res);

  //   const consent: any = {};
  //   consent.rejectedScopes = [];

  //   // replace = false means previously rejected scopes and claims remain rejected
  //   // changing this to true will remove those rejections in favour of just what you rejected above
  //   consent.replace = false;
  //   const result = { consent };
  //   return provider.interactionFinished(ctx.req, ctx.res, result, {
  //     mergeWithLastSubmission: true,
  //   });
  // });

  router.post('/interaction/:uid/login', bodyParser({
    text: false, json: false
  }), async (ctx) => {
    const { prompt, uid, params, session } = await provider.interactionDetails(ctx.req, ctx.res);

    if (prompt.name !== 'login') {
      throw new Error('INVALID_PROMPT');
    }

    const render = async ({error, identifier, remember}: {error?: OIDCError, identifier?: string, remember?: boolean} = {}) => {
      ctx.response.type = 'html';
      ctx.response.body = await tplEngine.login({
        title: 'Login',
        uid,
        identifier,
        remember,
        error: error ?? {
          key: 'ERROR',
          message: 'Error'
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

    const body = typeof ctx.request.body === 'object' && ctx.request.body ? ctx.request.body : undefined;

    if (!body) {
      logger.error('OIDC login invalid body', body);

      return render();
    }
    const { error, user, identifier, remember }  = await loginFn(ctx, body);

    if (error || !user) {
      logger.error('OIDC login callback error', error);
      return render({
        error,
        identifier,
        remember
      });
    }

    if (!user) {
      return render({
        error: {
          key: 'INVALID_IDENTIFIER_OR_PASSWORD',
          message: 'Invalid identifier or password'
        },
        identifier,
        remember
      })
    }

    const result: InteractionResults = {
      select_account: {}, // make sure its skipped by the interaction policy since we just logged in
      login: {
        remember,
        accountId: user.id,
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

  // router.get('/session', async (ctx) => {
  //   const _ctx = provider.app.createContext(ctx.req, ctx.res);
  //   // const session = await provider.Session.get(_ctx)
  //   const x = new provider.OIDCContext(ctx)

  //   // new provider.OIDCContext(ctx)

  //   ctx.response.body = {
  //     ats: x.getAccessToken(),
  //     at: provider.AccessToken.find(x.getAccessToken()),
  //     // session
  //   };
  // });

  return router;
};
