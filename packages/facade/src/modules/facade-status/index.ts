import {  createFacadeModule } from '../../utils.js';

import { type FacadeStatusModule } from './interfaces.js';
import { FederatedExampleSchema } from './gql/index.js';

export const facadeStatusModule = createFacadeModule<FacadeStatusModule>('facade-status', (facade) => {
  facade.addApolloService({
    name: 'status',
    schema: FederatedExampleSchema
  });
});
