import { GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { ContactPointUpdateInputType } from '../../../types/ContactPointType';
import { EndpointHandler } from '../../../EndpointHandler';
import tryRequest, { parseResourceList } from '../../../iam/resolver';

export default mutationWithClientMutationId({
  name: 'updateContactPoints',
  inputFields: {
    listOfContactPoints: {
      type: new GraphQLList(ContactPointUpdateInputType),
    }
  },
  mutateAndGetPayload: async ({ listOfContactPoints }, ctx: RestoreCommerceContext) => {
    return tryRequest('modify', parseResourceList(listOfContactPoints, 'modify', 'contact_point', ctx), ctx);
  },
  outputFields: EndpointHandler.buildOutputFields(),
});

