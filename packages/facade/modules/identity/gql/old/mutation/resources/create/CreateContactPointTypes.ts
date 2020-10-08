import {GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { TypeOfContactPointInputType, TypeOfContactPointType } from '../../../types/TypeOfContactPointType';
import { EndpointHandler } from '../../../EndpointHandler';
import tryRequest, { parseResourceList } from '../../../iam/resolver';

export default mutationWithClientMutationId({
  name: 'createContactPointTypes',
  inputFields: {
    listOfContactPointTypes: {
      type: new GraphQLList(TypeOfContactPointInputType),
    }
  },
  mutateAndGetPayload: async ({ listOfContactPointTypes }, ctx: RestoreCommerceContext) => {
    return tryRequest('create', parseResourceList(listOfContactPointTypes, 'create', 'contact_point_type', ctx), ctx);
  },
  outputFields: EndpointHandler.buildCreateMutationOutput(TypeOfContactPointType),
});

