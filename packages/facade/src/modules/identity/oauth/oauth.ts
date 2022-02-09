import Router from "koa-router";
import { IdentityContext } from "../interfaces";
import { IdentitySrvGrpcClient } from "../grpc";
import fs from "fs";
import path from "path";
import hbs from "handlebars";
import { marshallProtobufAny, nanoid } from "../oidc/utils";
import * as uuid from 'uuid';
import {
  RegisterRequest,
  User,
  UserType
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/user";
import koaBody from "koa-body";

export const createOAuth = (): Router<{}, IdentityContext> => {
  const router = new Router<{}, IdentityContext>();

  router.use(koaBody({multipart: true}));

  router.get('/oauth2-login', async (ctx, next) => {
    ctx.type = 'html';
    ctx.body = await login((await ctx.identitySrvClient.oauth.GenerateLinks({})).links);
    return next();
  });

  router.get('/oauth2-urls', async (ctx, next) => {
    ctx.body = (await ctx.identitySrvClient.oauth.GenerateLinks({})).links;
    return next();
  });

  router.post('/oauth2-register', async (ctx, next) => {
    const ids = ctx.identitySrvClient as IdentitySrvGrpcClient;
    const body = ctx.request.body;

    const user = await ids.user.Register(RegisterRequest.fromPartial({
      email: body.email,
      name: body.username,
      firstName: body.first_name,
      lastName: body.last_name,
      password: body.password,
      userType: UserType.INDIVIDUAL_USER,
      guest: false,
    }));

    if (user.payload) {
      ctx.type = 'html';
      ctx.body = await account(user.payload);
      return next();
    }

    if (user.status) {
      ctx.body = user.status.message;
    }

    return next();
  });

  router.get('/oauth2/:service', async (ctx, next) => {
    const ids = ctx.identitySrvClient as IdentitySrvGrpcClient;
    const user = await ids.oauth.ExchangeCode({
      service: ctx.params.service,
      code: ctx.request.query['code'] as string,
      state: ctx.request.query['state'] as string
    });

    console.log(user);
    if (!user.user || !user.user.payload || (user.user.status && user.user.status.code !== 200)) {
      if (user.email) {
        ctx.type = 'html';
        ctx.body = await register(user.email);
        return next();
      } else {
        ctx.body = 'Internal Error';
        return next();
      }
    }

    const token = nanoid();

    // 1 Month
    const expiresIn = Date.now() + (1000 * 60 * 60 * 24 * 30);

    await ids.token.upsert({
      id: uuid.v4().replace(/-/g, ''),
      type: 'access_token',
      expiresIn: expiresIn,
      payload: marshallProtobufAny({
        accountId: user.user.payload.id,
        exp: expiresIn,
        jti: token
      })
    });

    ctx.type = 'html';
    ctx.body = await account(user.user.payload);
    return next();
  });

  return router;
}

let layoutHbs: HandlebarsTemplateDelegate;
export const layout = async (context: { body: string; title: string }) => {
  if (!layoutHbs) {
    const layoutTpl = await new Promise<string>((resolve, reject) => {
      fs.readFile(path.resolve(__dirname, 'views/layout.hbs'), (err, data) => err ? reject(err) : resolve(data.toString()));
    });
    layoutHbs = hbs.compile(layoutTpl);
  }
  return layoutHbs(context);
}

let registerHbs: HandlebarsTemplateDelegate;
export const register = async (email: string) => {
  if (!registerHbs) {
    const registerTpl = await new Promise<string>((resolve, reject) => {
      fs.readFile(path.resolve(__dirname, 'views/register.hbs'), (err, data) => err ? reject(err) : resolve(data.toString()));
    });
    registerHbs = hbs.compile(registerTpl);
  }

  return layout({
    title: 'Register',
    body: registerHbs({email})
  });
}

let loginHbs: HandlebarsTemplateDelegate;
export const login = async (links: any) => {
  if (!loginHbs) {
    const loginTpl = await new Promise<string>((resolve, reject) => {
      fs.readFile(path.resolve(__dirname, 'views/login.hbs'), (err, data) => err ? reject(err) : resolve(data.toString()));
    });
    loginHbs = hbs.compile(loginTpl);
  }

  return layout({
    title: 'Login',
    body: loginHbs({links})
  });
}

let accountHbs: HandlebarsTemplateDelegate;
export const account = async (user: User) => {
  if (!accountHbs) {
    const accountTpl = await new Promise<string>((resolve, reject) => {
      fs.readFile(path.resolve(__dirname, 'views/account.hbs'), (err, data) => err ? reject(err) : resolve(data.toString()));
    });
    accountHbs = hbs.compile(accountTpl);
  }

  return layout({
    title: 'Account',
    body: accountHbs({user})
  });
}
