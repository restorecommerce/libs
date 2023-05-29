import { Attribute } from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/attribute';
import {
  RoleAssociation,
  Subject,
  DeepPartial
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/auth';
import { Meta } from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/meta';
import { FilterOp } from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/resource_base';
import {
  Response_Decision
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/access_control';
import { Effect } from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/rule';

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

export interface Resource {
  resource: string;
  id?: string | string[]; // for what is allowed operation id is not mandatory
  property?: string[];
}

export interface CtxResource {
  id: string;
  meta: {
    created?: number;
    modified?: number;
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

export interface DecisionResponse {
  decision: Response_Decision;
  obligation?: Obligation[];
  operation_status: {
    code?: number;
    message?: string;
  };
};

export interface Target<TSubject, TResource, TAction> {
  subject: TSubject;
  resource: TResource;
  action: TAction;
}

export interface Request<TTarget, TContext> {
  target: TTarget;
  context: TContext;
}

export interface Response {
  decision: Response_Decision;
}

/**
 * isAllowed Authorization interface
 */
export interface AuthZ<TSubject, TContext = any, TResource = Resource, TAction = AuthZAction> {
  /**
   * Check is the subject is allowed to do an action on a specific resource
   */
  isAllowed(request: Request<Target<TSubject, TResource, TAction>, TContext>,
    ctx: ACSClientContext, useCache: boolean): Promise<DecisionResponse>;
}

export interface Credentials {
  type: string;
  [key: string]: any;
}

export type AuthZTarget = Target<Subject, Resource[], AuthZAction>;
export type NoAuthTarget = Target<UnauthenticatedData, Resource[], AuthZAction>;

export type AuthZWhatIsAllowedTarget = Target<Subject, Resource[], AuthZAction>;
export type NoAuthWhatIsAllowedTarget = Target<UnauthenticatedData, Resource[], AuthZAction>;

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

export interface IAuthZ extends AuthZ<Subject | UnauthenticatedData, AuthZContext, Resource[], AuthZAction> {
  whatIsAllowed: (request: Request<AuthZWhatIsAllowedTarget | NoAuthWhatIsAllowedTarget, AuthZContext>,
    ctx: ACSClientContext, useCache: boolean) => Promise<PolicySetRQResponse>;
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

export interface PolicySetRQ extends AccessControlObjectInterface {
  // CA and policies
  combining_algorithm?: string;
  policies?: PolicyRQ[];
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
export interface PolicySetRQResponse extends AccessControlObjectInterface {
  policy_sets?: PolicySetRQ[];
  filters?: ResourceFilterMap[];
  custom_query_args?: CustomQueryArgs[];
  obligation?: Obligation[];
  decision: Response_Decision;
  operation_status: {
    code: number;
    message: string;
  };
}

export interface PolicyRQ extends AccessControlObjectInterface {
  rules?: RuleRQ[];
  has_rules?: boolean;
  combining_algorithm?: string;
}

export interface RuleRQ extends AccessControlObjectInterface { }

export interface AttributeTarget {
  // each map is an attribute with (key, value) pairs
  subjects: Attribute[];
  resources: Attribute[];
  actions: Attribute[];
}

export interface TargetReq {
  subjects: Attribute[];
  resources: Attribute[];
  actions: Attribute[];
}

export interface Context {
  subject: any;
  resources: any[];
  security: any;
}
