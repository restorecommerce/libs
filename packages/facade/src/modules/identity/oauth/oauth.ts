import type KoaRouter from 'koa-router';
import { type IdentityContext } from '../interfaces.js';
import { type IdentitySrvGrpcClient } from '../grpc/index.js';
import { readFile } from 'node:fs';
import path, { resolve as resolvePath } from 'node:path';
import hbs from 'handlebars';
import { marshallProtobufAny } from '../oidc/utils.js';
import * as uuid from 'uuid';
import {
  RegisterRequest,
  type User,
  UserType
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/user.js';
import * as jose from 'jose';
import * as url from 'node:url';
import Router from 'koa-router';
import { koaBody as bodyParser } from 'koa-body';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const upsertUserToken = async (ids: IdentitySrvGrpcClient, accountId: string | undefined): Promise<string> => {
  const token = new jose.UnsecuredJWT({})
    .setIssuedAt()
    .setExpirationTime('30d')
    .encode();

  // 1 Month
  const expiresIn = new Date(Date.now() + (1000 * 60 * 60 * 24 * 30));

  await ids.token.upsert({
    id: uuid.v4().replace(/-/g, ''),
    type: 'access_token',
    expiresIn,
    payload: marshallProtobufAny({
      accountId,
      exp: expiresIn.getTime(),
      jti: token
    })
  });

  return token;
};

let layoutHbs: HandlebarsTemplateDelegate;
export const layout = async (context: { body: string; title: string }) => {
  if (!layoutHbs) {
    const layoutTpl = await new Promise<string>((resolve, reject) => {
      readFile(resolvePath(__dirname, 'views/layout.hbs'), (err, data) => err ? reject(err) : resolve(data.toString()));
    });
    layoutHbs = hbs.compile(layoutTpl);
  }
  return layoutHbs(context);
};

let registerHbs: HandlebarsTemplateDelegate;
export const register = async (email: string) => {
  if (!registerHbs) {
    const registerTpl = await new Promise<string>((resolve, reject) => {
      readFile(resolvePath(__dirname, 'views/register.hbs'), (err, data) => err ? reject(err) : resolve(data.toString()));
    });
    registerHbs = hbs.compile(registerTpl);
  }

  return layout({
    title: 'Register',
    body: registerHbs({email})
  });
};

let loginHbs: HandlebarsTemplateDelegate;
export const login = async (links: any) => {
  if (!loginHbs) {
    const loginTpl = await new Promise<string>((resolve, reject) => {
      readFile(resolvePath(__dirname, 'views/login.hbs'), (err, data) => err ? reject(err) : resolve(data.toString()));
    });
    loginHbs = hbs.compile(loginTpl);
  }

  return layout({
    title: 'Login',
    body: loginHbs({links})
  });
};

let accountHbs: HandlebarsTemplateDelegate;
export const account = async (user: User) => {
  if (!accountHbs) {
    const accountTpl = await new Promise<string>((resolve, reject) => {
      readFile(resolvePath(__dirname, 'views/account.hbs'), (err, data) => err ? reject(err) : resolve(data.toString()));
    });
    accountHbs = hbs.compile(accountTpl);
  }

  return layout({
    title: 'Account',
    body: accountHbs({user})
  });
};


export const createOAuth = (): KoaRouter<{}, IdentityContext> => {
  const router = new Router() as KoaRouter<{}, IdentityContext>;

  router.use(bodyParser({multipart: true}));

  router.get('/oauth2-login', async (ctx, next) => {
    ctx.type = 'html';
    ctx.body = await login((await ctx.identitySrvClient.oauth.generateLinks({})).links);
    return next();
  });

  router.get('/oauth2-logout', async (ctx, next) => {
    ctx.cookies.set('token', undefined);
    ctx.status = 303;
    ctx.redirect('/oauth2-login');
    ctx.body = 'Redirecting to login page';
    return next();
  });

  router.get('/oauth2-urls', async (ctx, next) => {
    ctx.body = (await ctx.identitySrvClient.oauth.generateLinks({})).links;
    return next();
  });

  router.get('/oauth2-account', async (ctx, next) => {
    const token = ctx.cookies.get('token');
    if (!token) {
      ctx.body = 'user not logged in';
      return next();
    }

    const ids = ctx.identitySrvClient as IdentitySrvGrpcClient;

    const user = await ids.user.findByToken({
      token
    });

    if (!user || !user.payload) {
      ctx.body = 'user not logged in';
      return next();
    }

    ctx.type = 'html';
    ctx.body = await account(user.payload);
    return next();
  });

  router.post('/oauth2-register', async (ctx, next) => {
    const ids = ctx.identitySrvClient as IdentitySrvGrpcClient;
    const body: any = ctx.request.body;

    const user = await ids.user.register(RegisterRequest.fromPartial({
      email: body.email,
      name: body.username,
      firstName: body.first_name,
      lastName: body.last_name,
      password: body.password,
      userType: UserType.INDIVIDUAL_USER,
      guest: false,
    }));

    if (user.payload) {
      const token = await upsertUserToken(ids, user.payload.id);
      ctx.cookies.set('token', token);

      ctx.status = 303;
      ctx.redirect('/oauth2-account');
      ctx.body = 'Redirecting to account page';
      return next();
    }

    if (user.status) {
      ctx.body = user.status.message;
    }

    return next();
  });

  router.get('/oauth2/:service', async (ctx, next) => {
    const ids = ctx.identitySrvClient as IdentitySrvGrpcClient;
    const user = await ids.oauth.exchangeCode({
      service: ctx.params.service,
      code: ctx.request.query['code'] as string,
      state: ctx.request.query['state'] as string
    });

    if (!user.user || !user.user.payload || !user.token || (user.user.status && user.user.status.code !== 200)) {
      ctx.type = 'html';
      ctx.body = await register(user.email || '');
      return next();
    }

    ctx.cookies.set('token', user.token.token);

    ctx.status = 303;
    ctx.redirect('/oauth2-account');
    ctx.body = 'Redirecting to account page';
    return next();
  });

  return router;
};
