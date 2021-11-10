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

export interface Entity {
  entity: string,
  id?: string | string[], // for what is allowed operation id is not mandatory
  property?: string[]
}

export interface ACSClientContext {
  subject: Subject;
  resources?: {
    [key: string]: any;
  };
}

export interface Database {
 database: 'arangoDB' | 'postgres'
};

export interface AuthZSubject {
  id: string; // entity ('user', 'service', etc) ID
  role_associations: RoleAssociation[];
  hierarchical_scopes?: HierarchicalScope[];
}

export interface HierarchicalScope {
  id: string;
  role?: string;
  children?: HierarchicalScope[];
}

export interface Subject {
  id?: string;
  scope?: string; // target scope
  unauthenticated?: boolean;
  token?: string;
  role_associations?: RoleAssociation[];
  hierarchical_scopes?: HierarchicalScope[]; // HR scope for user
}

export enum Decision {
  PERMIT = 'PERMIT',
  DENY = 'DENY',
  INDETERMINATE = 'INDETERMINATE'
}

export interface DecisionResponse {
  decision: Decision;
  obligation?: string;
  operation_status: {
    code: number;
    message: string;
  };
};

export interface Resource {
  type: string;
  fields?: string[];
  instance?: any;
  namespace?: string;
}

export interface Target<TSubject, TEntity, TAction> {
  subject: TSubject;
  entity: TEntity;
  action: TAction;
}

export interface Request<TTarget, TContext> {
  target: TTarget;
  context: TContext;
}

export interface Response {
  decision: Decision;
}

/**
 * isAllowed Authorization interface
 */
export interface AuthZ<TSubject, TContext = any, TEntity = Entity, TAction = AuthZAction> {
  /**
   * Check is the subject is allowed to do an action on a specific resource
   */
  isAllowed(request: Request<Target<TSubject, TEntity, TAction>, TContext>,
    ctx: ACSClientContext, useCache: boolean): Promise<DecisionResponse>;
}

export interface Credentials {
  type: string;
  [key: string]: any;
}

export type AuthZTarget = Target<Subject, Entity[], AuthZAction>;
export type NoAuthTarget = Target<UnauthenticatedData, Entity[], AuthZAction>;

export type AuthZWhatIsAllowedTarget = Target<Subject, Entity[], AuthZAction>;
export type NoAuthWhatIsAllowedTarget = Target<UnauthenticatedData, Entity[], AuthZAction>;

export interface AuthZContext {
  // session-related tokens
  security: any;
}

export interface ResourceData {
  id: string;
  meta: MetaInfo;
  [key: string]: any; // any other fields
}

export interface AuthZRequest extends Request<AuthZTarget, AuthZContext> {
  target: AuthZTarget;
  context: AuthZContext;
}

export interface AuthZResponse extends Response {
  decision: Decision;
  obligation: string;
}

export interface IAuthZ extends AuthZ<AuthZSubject | UnauthenticatedData, AuthZContext, Entity[], AuthZAction> {
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

export interface Attribute {
  id: string;
  value: string;
}

export interface RoleAssociation {
  role: string;
  attributes?: Attribute[];
}

export interface MetaInfo {
  created: number;
  modified: number;
  modified_by: string;
  owner: Attribute[]; // list of entities who own a resource
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

export interface EnityFilterMap {
  entity: string;
  filters: any; // TODO add typing
}

// Reverse query response
export interface PolicySetRQResponse extends AccessControlObjectInterface {
  policy_sets?: PolicySetRQ[];
  filters?: EnityFilterMap[]; // TODO add custom query Args
  decision: Decision;
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
  subject: Attribute[];
  resources: Attribute[];
  action: Attribute[];
}

export enum Effect {
  PERMIT = 'PERMIT',
  DENY = 'DENY',
  INDETERMINATE = 'INDETERMINATE'
}

export interface ACSRequest {
  target: TargetReq;
  context: Context;
}

export interface TargetReq {
  subject: Attribute[];
  resources: Attribute[];
  action: Attribute[];
}

export interface Context {
  subject: any;
  resources: any[];
  security: any;
}

export enum FilterOperation {
  eq = 0,
  lt = 1,
  lte = 2,
  gt = 3,
  gte = 4,
  isEmpty = 5,
  iLike = 6,
  in = 7,
  neq = 8
};

export enum OperatorType {
  and = 0,
  or = 1,
};