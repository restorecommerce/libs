import * as Koa from 'koa';

import { Credentials, JwtSession, JwtStore } from '@restorecommerce/iam-authn';
import {
  Action, Resource, AuthZ, Target,
  Response, Request, Decision
} from '@restorecommerce/facade/modules/identity/gql/old/mutation/resources/delete/node_modules/@restorecommerce/iam-authz';
import { RestoreCommerceAuthN } from './authn';
import { RestoreCommerceAuthZ, RestoreCommerceBootstrapAuthZ } from './authz';

export declare type AuthZAction = Action | 'login' | 'logout' | 'execute' | 'session' | 'permissions' | 'search';

export interface AuthZSubject {
  id: string; // entity ('user', 'service', etc) ID
  role_associations: RoleAssociation[];
  hierarchical_scope?: HierarchicalScope[];
}

export interface HierarchicalScope {
  id: string;
  children?: HierarchicalScope[];
}

export type AuthZTarget = Target<UserSessionData, Resource, AuthZAction>;
export type NoAuthTarget = Target<UnauthenticatedData, Resource, AuthZAction>;

export type AuthZWhatIsAllowedTarget = Target<UserSessionData, Resource, AuthZAction[]>;

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

export interface IAuthZ extends AuthZ<AuthZSubject | UnauthenticatedData, AuthZContext, Resource, AuthZAction> {
  whatIsAllowed: (request: Request<AuthZWhatIsAllowedTarget, AuthZContext>) => Promise<PolicySetRQ>;
}

export interface UserCredentials extends Credentials {
  identifier: string;
  password: string;
}

export interface BootstrapCredentials extends Credentials {
  apiKey: string;
}

export interface BootstrapData {
  id?: string;
  apiKey?: boolean;
}

export interface IRestoreCommerceAuthZ extends AuthZ<AuthZSubject, AuthZContext, Resource, AuthZAction> {
  whatIsAllowed(subject: AuthZSubject, resources: Resource[], context: AuthZContext): Promise<any>;
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

export interface RestoreCommerceContext extends Koa.Context {
  authN: RestoreCommerceAuthN;
  authZ: RestoreCommerceAuthZ | RestoreCommerceBootstrapAuthZ;
  session: JwtSession<UserSessionData | BootstrapData>;
  jwtStore: JwtStore;
}

export interface Attribute {
  id: string;
  value: string;
}

export interface RoleAssociation {
  role: string;
  attributes?: Attribute[];
}

// complete user interface
export interface RestoreCommerceUser extends UserSessionData {
  meta: MetaInfo;
  activation_code: string;
  active: true;
  password_hash: string;
  unauthenticated?: boolean;
  guest: boolean;
}

export interface MetaInfo {
  created: number;
  modified: number;
  modified_by: string;
  owner: Attribute[]; // list of entities who own a resource
}


export interface UserSessionData {
  id: string;
  name: string;
  email: string;
  first_name: string;
  last_name: string;
  timezone_id: string;
  locale_id: string;
  role_associations: RoleAssociation[];
  unauthenticated?: boolean;
  scope?: UserScope; // org instance
  default_scope?: string;
}

export interface UserScope {
  role_associations: RoleAssociation[];
  // the ID from the chosen organization; defaults to `default_scope`
  scopeOrganization: string;
}

// Reverse query response
export interface PolicySetRQ extends AccessControlObjectInterface {
  combining_algorithm: string;
  policies?: PolicyRQ[];
}

export interface PolicyRQ extends AccessControlObjectInterface {
  rules?: RuleRQ[];
  has_rules?: boolean;
  combining_algorithm?: string;
}

export interface RuleRQ extends AccessControlObjectInterface { }

export interface AccessControlObjectInterface {
  id?: string;
  name?: string;
  description?: string;
  target?: AttributeTarget;
  effect?: Effect;
}

export interface AttributeTarget {
  // each map is an attribute with (key, value) pairs
  subject: Attribute[];
  resources: Attribute[];
  action: Attribute[];
}

export enum Effect {
  PERMIT = 'PERMIT',
  DENY = 'DENY'
}
