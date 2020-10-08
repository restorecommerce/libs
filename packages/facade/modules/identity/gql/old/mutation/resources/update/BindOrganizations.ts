import { GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { ErrorType } from '../../../types/ErrorType';

import tryRequest from '../../../iam/resolver';
import { bindHierarchicalResources } from '../../../utils';

export default mutationWithClientMutationId({
  name: 'bindOrganizations',
  inputFields: {
    parent: {
      type: GraphQLString,
    },
    child: {
      type: GraphQLString
    }
  },
  mutateAndGetPayload: async ({ parent, child }, ctx: RestoreCommerceContext) => {
    return tryRequest('modify', [{
      instance: { id: parent },
      type: 'organization',
      fields: ['children_ids']
    }, {
      instance: { id: child },
      type: 'organization',
      fields: ['parent_id']
    }], ctx, async () => bindHierarchicalResources('organization', parent.id, child.id, ctx));
  },
  outputFields: {
    status: {
      type: GraphQLString,
      resolve: ({ status }) => status
    },
    error: {
      type: ErrorType,
      resolve: ({ error }) => error
    }
  }
});

