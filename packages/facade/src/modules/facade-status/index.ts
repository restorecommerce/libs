import {  createFacadeModule } from "../../utils";

import { FacadeStatusModule } from "./interfaces";
import { FederatedExampleSchema } from "./gql/index";

export const facadeStatusModule = createFacadeModule<FacadeStatusModule>('facade-status', (facade) => {
  facade.addApolloService({
    name: 'status',
    schema: FederatedExampleSchema
  });
});
