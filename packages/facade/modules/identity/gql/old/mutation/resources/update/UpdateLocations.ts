import { GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { LocationUpdateInputType } from '../../../types/LocationType';
import { EndpointHandler } from '../../../EndpointHandler';
import tryRequest, { parseResourceList } from '../../../iam/resolver';
import { marshalLocations } from '../../../utils';

export default mutationWithClientMutationId({
  name: 'updateLocations',
  inputFields: {
    listOfLocations: {
      type: new GraphQLList(LocationUpdateInputType),
    }
  },
  mutateAndGetPayload: async ({ listOfLocations }, ctx: RestoreCommerceContext) => {
    listOfLocations = parseResourceList(listOfLocations, 'modify', 'location', ctx);
    return tryRequest('modify', listOfLocations, ctx, async () => {
      const endpointHandler = new EndpointHandler('location');
      const output = {
        status: [],
        error: {
          code: [],
          message: []
        }
      };
      const locationService = endpointHandler.getResourceService();
      let locations = listOfLocations.map(location => location.instance);
      locations = marshalLocations(locations);
      const result = await locationService.update({ items: locations });

      if (result.error) {
        endpointHandler.parseError(result.error, output);
      } else {
        output.status.push(`Documents of entity location updated successfully`);
      }
      return output;
    });
  },
  outputFields: EndpointHandler.buildOutputFields(),
});

