import { GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { TimezoneInputType, TimezoneType } from '../../../types/TimezoneType';
import { EndpointHandler } from '../../../EndpointHandler';
import tryRequest, { parseResourceList } from '../../../iam/resolver';

export default mutationWithClientMutationId({
  name: 'createTimezones',
  inputFields: {
    listOfTimezones: {
      type: new GraphQLList(TimezoneInputType),
    },
  },
  mutateAndGetPayload: async ({ listOfTimezones }, ctx: RestoreCommerceContext) => {
    return tryRequest('create', parseResourceList(listOfTimezones, 'create', 'timezone', ctx), ctx);

  },
  outputFields: EndpointHandler.buildCreateMutationOutput(TimezoneType),
});

