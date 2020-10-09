import { GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { OrganizationInputType, OrganizationType } from '../../../types/OrganizationType';
import { EndpointHandler } from '../../../EndpointHandler';
import tryRequest, { parseResourceList } from '../../../iam/resolver';
import { marshalOrganizations, linkHierarchicalResource } from '../../../utils';

export default mutationWithClientMutationId({
  name: 'createOrganizations',
  inputFields: {
    listOfOrganizations: {
      type: new GraphQLList(OrganizationInputType),
    }
  },
  mutateAndGetPayload: async ({ listOfOrganizations }, ctx: RestoreCommerceContext) => {
    listOfOrganizations = parseResourceList(listOfOrganizations, 'create', 'organization', ctx);
    return tryRequest('create', listOfOrganizations, ctx, async () => {
      const endpointHandler = new EndpointHandler('organization');
      const output = {
        details: [],
        error: {
          code: [],
          message: []
        }
      };
      const organizationService = endpointHandler.getResourceService();
      const organizations = marshalOrganizations(listOfOrganizations.map(organization => organization.instance));
      const result = await organizationService.create({ items: organizations });
      if (result.data && result.data.items) {
        await linkHierarchicalResource('organization', output.details);
      }
      endpointHandler.handleCreateResourcesErrors(result, output);
      return output;
    });
  },
  outputFields: EndpointHandler.buildCreateMutationOutput(OrganizationType),
});
