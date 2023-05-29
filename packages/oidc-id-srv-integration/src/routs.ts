import * as assert from 'assert';
import bodyParser from 'koa-bodyparser';
import * as Router from 'koa-router';
import Provider, { InteractionResults, AccountClaims } from 'oidc-provider';
import { Config } from './interfaces';

const debug = (obj: any) => JSON.stringify(obj);
const body = bodyParser(); // todo

export const setupRouts = (provider: Provider, router: Router, config: Config) => {
  const { pathPrefix, authenticate } = config;

  router.get(`${pathPrefix}/interaction/:uid`, async (ctx: any, next: any) => {
    const { uid, prompt, params, session } = await provider.interactionDetails(ctx.req, ctx.res);
    const client = await provider.Client.find(params.client_id as string);

    switch (prompt.name) {
      case 'select_account' as string: {
        if (!session) {
          return provider.interactionFinished(ctx.req, ctx.res, {
            select_account: {},
          }, { mergeWithLastSubmission: false });
        }

        const account = await provider.Account.findAccount(ctx, session.accountId);
        const { email } = await account?.claims('prompt', 'email', { email: null }, []) as AccountClaims;

        return ctx.render('select_account', {
          client,
          uid,
          email,
          details: prompt.details,
          params,
          title: 'Sign-in',
          session: session ? debug(session) : undefined,
          dbg: {
            params: debug(params),
            prompt: debug(prompt),
          },
        });
      }
      case 'login': {
        return ctx.render('login', {
          client,
          uid,
          details: prompt.details,
          params,
          title: 'Sign-in',
          session: session ? debug(session) : undefined,
          dbg: {
            params: debug(params),
            prompt: debug(prompt),
          },
        });
      }
      case 'consent': {
        return ctx.render('interaction', {
          client,
          uid,
          details: prompt.details,
          params,
          title: 'Authorize',
          session: session ? debug(session) : undefined,
          dbg: {
            params: debug(params),
            prompt: debug(prompt),
          },
        });
      }
      default: {
        return next();
      }
    }
  });

  router.post(`${pathPrefix}/interaction/:uid/login`, body, async (ctx: any, next: any) => {
    try {
      const { uid, prompt, params, session } = await provider.interactionDetails(ctx.req, ctx.res);
      const client = await provider.Client.find(params.client_id as string);

      assert.equal(prompt.name, 'login');

      const account = await authenticate('name', ctx.request.body.login, ctx.request.body.password);

      if (!account) {
        return ctx.render('login', {
          client,
          uid,
          details: prompt.details,
          params: {
            ...params,
            login_hint: ctx.request.body.login,
          },
          title: 'Sign-in',
          flash: 'Invalid email or password.',
          session: session ? debug(session) : undefined,
          dbg: {
            params: debug(params),
            prompt: debug(prompt),
          },
        });
      }

      const result: InteractionResults = {
        login: {
          accountId: account.accountId,
        },
        consent: { // skipping confirm step, Scopes and Claims need to be implemented manually
          rejectedScopes: [], // < uncomment and add rejections here
          rejectedClaims: [], // < uncomment and add rejections here
        },
      };

      return provider.interactionFinished(ctx.req, ctx.res, result, {
        mergeWithLastSubmission: false,
      });
    } catch (err) {
      return next(err);
    }
  });

  router.post(`${pathPrefix}/interaction/:uid/confirm`, body, async (ctx: any, next: any) => {
    const { prompt: { name } } = await provider.interactionDetails(ctx.req, ctx.res); // name, details
    assert.equal(name, 'consent');

    try {
      const result = {
        consent: {
          rejectedScopes: [], // < uncomment and add rejections here
          rejectedClaims: [], // < uncomment and add rejections here
        },
      };
      return await provider.interactionFinished(ctx.req, ctx.res, result, { mergeWithLastSubmission: true });
    } catch (err) {
      return next(err);
    }
  });

  router.get(`${pathPrefix}/interaction/:uid/abort`, async (ctx: any) => {
    const result = {
      error: 'access_denied',
      error_description: 'End-User aborted interaction',
    };

    return provider.interactionFinished(ctx.req, ctx.res, result, {
      mergeWithLastSubmission: false,
    });
  });
};
