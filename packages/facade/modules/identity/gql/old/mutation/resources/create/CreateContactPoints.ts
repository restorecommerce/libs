import {GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { ContactPointInputType, ContactPointType } from '../../../types/ContactPointType';
import { EndpointHandler } from '../../../EndpointHandler';
import tryRequest, { parseResourceList } from '../../../iam/resolver';

export default mutationWithClientMutationId({
  name: 'createContactPoints',
  inputFields: {
    listOfContactPoints: {
      type: new GraphQLList(ContactPointInputType),
    }
  },
  mutateAndGetPayload: async ({ listOfContactPoints }, ctx: RestoreCommerceContext) => {
    return tryRequest('create', parseResourceList(listOfContactPoints, 'create', 'contact_point', ctx), ctx);
  },
  outputFields: EndpointHandler.buildCreateMutationOutput(ContactPointType),
});

