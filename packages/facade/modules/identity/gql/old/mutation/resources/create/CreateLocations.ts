import { GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { LocationInputType, LocationType } from '../../../types/LocationType';
import { EndpointHandler } from '../../../EndpointHandler';
import tryRequest, { parseResourceList } from '../../../iam/resolver';
import { marshalLocations, linkHierarchicalResource } from '../../../utils';

export default mutationWithClientMutationId({
  name: 'createLocations',
  inputFields: {
    listOfLocations: {
      type: new GraphQLList(LocationInputType),
    }
  },
  mutateAndGetPayload: async ({ listOfLocations }, ctx: RestoreCommerceContext) => {
    listOfLocations = parseResourceList(listOfLocations, 'create', 'location', ctx);
    return tryRequest('create', listOfLocations, ctx, async () => {
      const endpointHandler = new EndpointHandler('location');
      const output = {
        details: [],
        error: {
          code: [],
          message: []
        }
      };
      const locationService = endpointHandler.getResourceService();
      const locationList = marshalLocations(listOfLocations.map(location => location.instance));
      const result = await locationService.create({ items: locationList });

      endpointHandler.handleCreateResourcesErrors(result, output);

      if (output.details.length > 0) {
        await linkHierarchicalResource('location', output.details);
      }
      return output;
    });
  },
  outputFields: EndpointHandler.buildCreateMutationOutput(LocationType)
});

