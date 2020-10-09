import { GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { OrganizationUpdateInputType } from '../../../types/OrganizationType';
import { EndpointHandler } from '../../../EndpointHandler';
import tryRequest, { parseResourceList } from '../../../iam/resolver';
import { marshalOrganizations } from '../../../utils';

export default mutationWithClientMutationId({
  name: 'updateOrganizations',
  inputFields: {
    listOfOrganizations: {
      type: new GraphQLList(OrganizationUpdateInputType),
    }
  },
  mutateAndGetPayload: async ({ listOfOrganizations }, ctx: RestoreCommerceContext) => {
    listOfOrganizations = parseResourceList(listOfOrganizations, 'modify', 'organization', ctx);
    return tryRequest('modify', listOfOrganizations, ctx, async () => {
      const endpointHandler = new EndpointHandler('organization');
      const output = {
        status: [],
        error: {
          code: [],
          message: []
        }
      };
      const organizationService = endpointHandler.getResourceService();
      let organizations = listOfOrganizations.map(org => org.instance);
      organizations = marshalOrganizations(organizations);
      const result = await organizationService.update({ items: organizations });
      if (result.error) {
        endpointHandler.parseError(result.error, output);
      } else {
        output.status.push(`Documents of entity organization updated successfully`);
      }
      return output;
    });
  },
  outputFields: EndpointHandler.buildOutputFields(),
});

