import { GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { TimezoneUpdateInputType } from '../../../types/TimezoneType';
import { EndpointHandler } from '../../../EndpointHandler';
import tryRequest, { parseResourceList } from '../../../iam/resolver';

export default mutationWithClientMutationId({
  name: 'updateTimezones',
  inputFields: {
    listOfTimezones: {
      type: new GraphQLList(TimezoneUpdateInputType),
    },
  },
  mutateAndGetPayload: async ({ listOfTimezones }, ctx: RestoreCommerceContext) => {
    return tryRequest('modify', parseResourceList(listOfTimezones, 'modify', 'timezone', ctx), ctx);
  },
  outputFields: EndpointHandler.buildOutputFields(),
});

