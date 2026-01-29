import { createFacade, reqResLogger, type FacadeContext, identityModule } from '../src/index.js';
import { createServiceConfig } from '@restorecommerce/service-config';
import { createLogger } from '@restorecommerce/logger';

import * as fs from 'node:fs';

const jwks = JSON.parse(fs.readFileSync('./tests/jwks.json').toString());

const createTestFacade = () => {
  const serviceConfig = createServiceConfig(process.cwd());

  const cfg = {
    env: serviceConfig.get('NODE_ENV'),
    logger: serviceConfig.get('logger'),
    facade: serviceConfig.get('facade'),
    resources: serviceConfig.get('resources'),
    identity: serviceConfig.get('identity'),
    example: {message: 'foo'},
    oidc: serviceConfig.get('oidc')
  };

  const logger = createLogger(cfg.logger);

  return createFacade({
    ...cfg.facade,
    env: cfg.env,
    logger
  })
    .useModule(identityModule({
      identitySrvClientConfig: cfg.identity.client,
      config: cfg.identity,
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
        ...cfg.oidc,
      }
    }))
    .useMiddleware(reqResLogger({logger}));
};

export const facade = createTestFacade();
export type TestFacadeContext = FacadeContext<typeof facade>;
