import * as _ from 'lodash';
import { RestoreCommerceContext, UserSessionData } from '../iam/interfaces';
import tryRequest from '../iam/resolver';
import { EndpointHandler } from '../EndpointHandler';
import { errors, cfg } from '../config';
import logger from '../logger';
import { getSubTreeOrgs } from '../utils';

export const fullTextSearch = async (root, args, ctx: RestoreCommerceContext) => {
  const { collection, text } = args;
  return tryRequest('search', {
    entity: collection,
    args: {}
  }, ctx, async (policySet: any) => {
    const roleIDs = new Set<String>();
    const urns = cfg.get('authorization:urns');

    if (policySet && policySet.policies) {
      // Iterate through all the policies
      // Note: it is assumed that there is only one policy set
      const policies = policySet.policies;
      for (let policy of policies) {
        // get list of rules
        const rules = policy.rules;
        // get Rule's target->subject roleID (only if it contains a role scoping Entity)
        for (let rule of rules) {
          if (rule.target && rule.target.subject) {
            const ruleSub = rule.target.subject;
            let foundRole = false;
            let roleID;
            for (let subAttribute of ruleSub) {
              if (subAttribute.id === urns.role) {
                roleID = subAttribute.value;
                foundRole = true;
              }
              if (subAttribute.id === urns.roleScopingEntity && foundRole) {
                if (roleID) {
                  roleIDs.add(roleID);
                }
                foundRole = false;
                roleID = undefined;
              }
            }
          }
        }
      }
    }

    const aclSet = new Set<String>();
    // a) Make whatIsAllowed Request and get the roles for reading
    if (ctx && ctx.session && ctx.session.data) {
      const user = (ctx.session.data) as UserSessionData;
      const roleAssociations = user.role_associations;
      if (_.isArray(roleAssociations)) {
        for (let role of roleAssociations) {
          if (roleIDs.has(role.role)) {
            // check if it contains roleScopingEntity as Org, if so get the
            // roleScopingInstance and then the complete subOrgTree and multiply both
            let foundRole = false;
            for (let attribute of role.attributes) {
              if (attribute.id === 'urn:restorecommerce:acs:names:roleScopingEntity' &&
                attribute.value === 'urn:restorecommerce:acs:model:organization.Organization') {
                foundRole = true;
              }
              if (foundRole && attribute.id === 'urn:restorecommerce:acs:names:roleScopingInstance') {
                let orgInstance = attribute.value;
                // get subOrgTree for above org
                const orgsList = await getSubTreeOrgs(orgInstance, roleAssociations);
                for (let org of orgsList) {
                  aclSet.add(`${role.role}@${org}`);
                }
              }
            }
          }
        }
      }
    }
    const searchService = EndpointHandler.getSearchService();
    const acl = Array.from(aclSet);

    const result = await searchService.search({ collection, text, acl });
    if (result.error) {
      logger.error(`Error ocurred performing fulltext search on resource ${collection}`, { error: result.error });

      if (result.error.name && errors[result.error.name]) {
        const error = errors[result.error.name];
        return {
          error: {
            code: error.code,
            message: error.message + ' ' + result.error.message
          }
        };
      } else {
        return {
          error: {
            code: errors.SYSTEM_ERROR.code,
            message: errors.SYSTEM_ERROR.message + ': ' + result.error.details
          }
        };
      }
    }

    if (_.isEmpty(result.data) || _.isEmpty(result.data.data)) {
      return {
        data: []
      };
    }
    return {
      data: result.data.data.map((document) => {
        return JSON.parse(document.value.toString());
      })
    };
  });
};
