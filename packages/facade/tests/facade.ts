import { createFacade, reqResLogger, type FacadeContext, identityModule } from '../src/index.js';
import { cfg, logger } from './utils.js';
import * as fs from 'node:fs';

const jwks = JSON.parse(fs.readFileSync('./tests/jwks.json').toString());

const createTestFacade = () => {
  const config = {
    env: cfg.get('NODE_ENV'),
    logger: cfg.get('logger'),
    facade: cfg.get('facade'),
    resources: cfg.get('resources'),
    identity: cfg.get('identity'),
    example: {message: 'foo'},
    oidc: cfg.get('oidc')
  };

  return createFacade({
    ...config.facade,
    env: config.env,
    logger
  })
    .useModule(identityModule({
      identitySrvClientConfig: config.identity.client,
      config: config.identity,
      oidc: {
        client_id: 'TEST_CLIENT_ID',
        client_secret: 'TEST_CLIENT_SECRET',
        cookies: {
          keys: ['TEST_COOKIE_SECRET']
        },
        issuer: 'http://localhost:5000',
        redirect_uris: [
          'http://localhost:5000/session',
          'http://localhost:4200'
        ],
        post_logout_redirect_uris: [
          'http://localhost:4200'
        ],
        jwks,
        ...config.oidc,
      }
    }))
    .useMiddleware(reqResLogger({logger}));
};

export const facade = createTestFacade();
export type TestFacadeContext = FacadeContext<typeof facade>;
