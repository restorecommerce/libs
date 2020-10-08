import * as _ from 'lodash';
import { RestoreCommerceContext, PolicySetRQ } from '../iam/interfaces';
import { isUserSessionData } from '../iam/authn';
import { cfg } from '../config';
import { Resource } from '@restorecommerce/iam-authz';
import { makeResource, parsePermissions } from '../utils';
import tryRequest, { Output, isAllowed } from '../iam/resolver';
import logger from '../logger';

export async function getAllPermissions (root, args, ctx: RestoreCommerceContext) {
  let output = {
    details: {},
    error: {
      code: '',
      message: ''
    }
  };

  let orgID: string | undefined;
  if (ctx.session && ctx.session.data && isUserSessionData(ctx.session.data) && !!ctx.session.data.scope) {
    orgID = ctx.session.data.scope.scopeOrganization;
  }

  const urns = cfg.get('authorization:urns');
  let resourcesList: Resource[] = [];
  const resources = cfg.get('resources');
  for (let resourceType in resources) {
    const resourceCfg = resources[resourceType];
    const resourceSrvList = resourceCfg.resources;
    for (let resSrv in resourceSrvList) {
      const list: string[] = resourceSrvList[resSrv];
      resourcesList = resourcesList.concat(list.map(makeResource));
    }
  }
  const operations = cfg.get('execute:operations') || [];
  resourcesList = resourcesList.concat(operations.map(makeResource));

  const response = await tryRequest('permissions', resourcesList, ctx) as Output | PolicySetRQ;
  if ('error' in response) {
    output.error.code = response.error.code[0];
    output.error.message = response.error.message[0];
    return output;
  }

  if (_.isEmpty((response as PolicySetRQ).policies)) {
    return {};
  }

  const permissions = await parsePermissions(response as PolicySetRQ);

  // special handling for user resource since it has a condition
  const testUser: Resource = {
    instance: _.merge({}, ctx.session.data, {
      id: 'test'
    }, {
      meta: {
        owner: !orgID ? [] : [
          {
            id: urns.ownerIndicatoryEntity,
            value: urns.orgScope
          },
          {
            id: urns.ownerInstance,
            value: orgID
          }
        ]
      }
    }),
    type: 'user',
    fields: []
  };

  try {
    const fakeCtx = _.merge({}, ctx, {
      session: {
        data: testUser.instance
      }
    });

    const result: any = await isAllowed(fakeCtx, 'create', [testUser]);
    if (result && result.decision === 'PERMIT') {
      permissions.user.create = true;
      permissions.user.modify = true;
      permissions.user.delete = true;
    } else if (permissions) {
      permissions.user.create = false;
      permissions.user.modify = false;
      permissions.user.delete = false;
    }
  } catch (err) {
    logger.error('Error calling isAllowed :', { err });
    output.error.code = err.code;
    output.error.message = err.message;
  }
  output.details = permissions;
  return output;
}
