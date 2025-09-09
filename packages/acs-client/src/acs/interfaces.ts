import { Attribute } from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/attribute.js';
import {
  RoleAssociation,
  Subject,
  DeepPartial
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/auth.js';
import { Meta } from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/meta.js';
import { FilterOp } from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/resource_base.js';
import {
  Response_Decision,
  ReverseQuery,
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/access_control.js';
import { Effect } from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/rule.js';
import {
  PolicySetRQ,
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/policy_set.js';
import {
  PolicyRQ,
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/policy.js';
import {
  RuleRQ,
  Target as AttributeTarget,
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/rule.js';
import {
  Response_Decision as Decision,
  Context,
  Response,
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/access_control.js';

export {
  Decision,
  Context,
  RuleRQ,
  PolicyRQ,
  PolicySetRQ,
  Response as ACSResponse,
  AttributeTarget,
};

export enum AuthZAction {
  CREATE = 'CREATE',
  READ = 'READ',
  MODIFY = 'MODIFY',
  DELETE = 'DELETE',
  EXECUTE = 'EXECUTE',
  DROP = 'DROP',
  ALL = '*'
}

export enum Operation {
  isAllowed = 'isAllowed',
  whatIsAllowed = 'whatIsAllowed'
}

export interface ACSResource {
  resource: string;
  id?: string | string[]; // for what is allowed operation id is not mandatory
  property?: string[];
}

export interface CtxResource {
  id: string;
  meta: {
    created?: Date;
    modified?: Date;
    modified_by?: string;
    owners: Attribute[]; // id owner is mandatory in resource others are optional
  };
  [key: string]: any;
}

export interface ACSClientContext {
  subject?: DeepPartial<Subject>;
  resources?: CtxResource[];
}

export interface Database {
  database: 'arangoDB' | 'postgres';
};

export interface AuthZSubject {
  id: string; // entity ('user', 'service', etc) ID
  // role_associations: RoleAssociation[];
  // hierarchical_scopes?: HierarchicalScope[];
}

export interface HierarchicalScope {
  id: string;
  role?: string;
  children?: HierarchicalScope[];
}

export interface ResolvedSubject {
  id: string;
  scope: string; // target scope
  token: string;
  role_associations?: RoleAssociation[];
  hierarchical_scopes?: HierarchicalScope[]; // HR scope for user
}

export interface Obligation {
  resource: string;
  property: string[];
}

export type DecisionResponse = Response & {
  obligations?: Obligation[];
};

export interface Target<TSubject, TResource, TAction> {
  subjects: TSubject;
  resources: TResource;
  actions: TAction;
}

export interface Request<TTarget, TContext> {
  target: TTarget;
  context: TContext;
}

/**
 * isAllowed Authorization interface
 */
export interface AuthZ<TSubject, TContext = any, TResource = ACSResource, TAction = AuthZAction> {
  /**
   * Check is the subject is allowed to do an action on a specific resource
   */
  isAllowed(request: Request<Target<TSubject, TResource, TAction>, TContext>,
    ctx: ACSClientContext, useCache: boolean, roleScopingEntityURN: string): Promise<DecisionResponse>;
}

export interface Credentials {
  type: string;
  [key: string]: any;
}

export type AuthZTarget = Target<Subject, ACSResource[], AuthZAction>;
export type NoAuthTarget = Target<UnauthenticatedData, ACSResource[], AuthZAction>;

export type AuthZWhatIsAllowedTarget = Target<Subject, ACSResource[], AuthZAction>;
export type NoAuthWhatIsAllowedTarget = Target<UnauthenticatedData, ACSResource[], AuthZAction>;

export interface AuthZContext {
  // session-related tokens
  security: any;
}

export interface ResourceData {
  id: string;
  meta: Meta;
  [key: string]: any; // any other fields
}

export interface AuthZRequest extends Request<AuthZTarget, AuthZContext> {
  target: AuthZTarget;
  context: AuthZContext;
}

export interface AuthZResponse extends Response {
  decision: Response_Decision;
  obligation: string;
}

export interface IAuthZ extends AuthZ<Subject | UnauthenticatedData, AuthZContext, ACSResource[], AuthZAction> {
  whatIsAllowed: (
    request: Request<AuthZWhatIsAllowedTarget | NoAuthWhatIsAllowedTarget, AuthZContext>,
    ctx: ACSClientContext,
    useCache: boolean,
    roleScopingEntityURN: string
  ) => Promise<PolicySetRQResponse>;
}

export interface UserCredentials extends Credentials {
  identifier: string;
  password: string;
}

export interface OwnerAttribute {
  id: string;
  value: string;
}

export interface UnauthenticatedContext {
  session: UnauthenticatedSession;
}

export interface UnauthenticatedSession {
  data: UnauthenticatedData;
}

export interface UnauthenticatedData {
  unauthenticated: true;
}

export interface UserScope {
  role_associations: RoleAssociation[];
  // the ID from the chosen organization; defaults to `default_scope`
  scopeOrganization: string;
}

export interface AccessControlObjectInterface {
  id?: string;
  name?: string;
  description?: string;
  target?: AttributeTarget;
  effect?: Effect;
  condition?: string;
}


export interface ResourceFilterMap {
  resource: string;
  filters: FilterOp[];
}

export interface CustomQueryArgs {
  resource: string;
  custom_queries: string[];
  custom_arguments: any;
}

// Reverse query response
export type PolicySetRQResponse = ReverseQuery & {
  filters?: ResourceFilterMap[];
  custom_query_args?: CustomQueryArgs[];
  obligations?: Obligation[];
  decision?: Response_Decision;
};

export interface TargetReq {
  subjects: Attribute[];
  resources: Attribute[];
  actions: Attribute[];
}

export interface ACSClientOptions {
  operation?: Operation;
  database?: 'arangoDB' | 'postgres';
  useCache?: boolean; // default value is true
}