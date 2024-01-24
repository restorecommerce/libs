import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { IdentityContext } from '../interfaces.js';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  GoogleProtobufAnyValue: { input: any; output: any; }
  IDateTime: { input: any; output: any; }
  MapScalar: { input: any; output: any; }
};

export type Query = {
  __typename?: 'Query';
  identity: IdentityQuery;
};

export type IdentityQuery = {
  __typename?: 'IdentityQuery';
  user: IdentityUserQuery;
  role: IdentityRoleQuery;
  authentication_log: IdentityAuthenticationLogQuery;
  token: IdentityTokenQuery;
};

export type IdentityUserQuery = {
  __typename?: 'IdentityUserQuery';
  Read?: Maybe<ProtoIoRestorecommerceUserUserListWithRoleResponse>;
  Find?: Maybe<ProtoIoRestorecommerceUserUserListResponse>;
  FindByRole?: Maybe<ProtoIoRestorecommerceUserUserListResponse>;
  FindByToken?: Maybe<ProtoIoRestorecommerceUserUserResponse>;
};


export type IdentityUserQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};


export type IdentityUserQueryFindArgs = {
  input: IIoRestorecommerceUserFindRequest;
};


export type IdentityUserQueryFindByRoleArgs = {
  input: IIoRestorecommerceUserFindByRoleRequest;
};


export type IdentityUserQueryFindByTokenArgs = {
  input: IIoRestorecommerceUserFindByTokenRequest;
};

export type ProtoIoRestorecommerceUserUserListWithRoleResponse = {
  __typename?: 'ProtoIoRestorecommerceUserUserListWithRoleResponse';
  details?: Maybe<IoRestorecommerceUserUserListWithRoleResponse>;
};

export type IoRestorecommerceUserUserListWithRoleResponse = {
  __typename?: 'IoRestorecommerceUserUserListWithRoleResponse';
  items?: Maybe<Array<IoRestorecommerceUserUserRoleResponse>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceUserUserRoleResponse = {
  __typename?: 'IoRestorecommerceUserUserRoleResponse';
  payload?: Maybe<IoRestorecommerceUserUserRole>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceUserUserRole = {
  __typename?: 'IoRestorecommerceUserUserRole';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  newEmail?: Maybe<Scalars['String']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  activationCode?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  passwordHash?: Maybe<Scalars['String']['output']>;
  roleAssociations?: Maybe<Array<IoRestorecommerceAuthRoleAssociation>>;
  timezoneId?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<IoRestorecommerceTimezoneTimezone>;
  localeId?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<IoRestorecommerceLocaleLocale>;
  defaultScope?: Maybe<Scalars['String']['output']>;
  guest?: Maybe<Scalars['Boolean']['output']>;
  image?: Maybe<IoRestorecommerceImageImage>;
  userType?: Maybe<IoRestorecommerceUserUserType>;
  invite?: Maybe<Scalars['Boolean']['output']>;
  invitedByUserName?: Maybe<Scalars['String']['output']>;
  invitedByUserFirstName?: Maybe<Scalars['String']['output']>;
  invitedByUserLastName?: Maybe<Scalars['String']['output']>;
  tokens?: Maybe<Array<IoRestorecommerceAuthTokens>>;
  lastAccess?: Maybe<Scalars['DateTime']['output']>;
  properties?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  data?: Maybe<GoogleProtobufAny>;
  roles?: Maybe<Array<IoRestorecommerceRoleRole>>;
};

export type IoRestorecommerceMetaMeta = {
  __typename?: 'IoRestorecommerceMetaMeta';
  created?: Maybe<Scalars['DateTime']['output']>;
  modified?: Maybe<Scalars['DateTime']['output']>;
  modifiedBy?: Maybe<Scalars['String']['output']>;
  owners?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  acls?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  createdBy?: Maybe<Scalars['String']['output']>;
};

export type IoRestorecommerceAttributeAttribute = {
  __typename?: 'IoRestorecommerceAttributeAttribute';
  id?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
  attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
};

export type IoRestorecommerceAuthRoleAssociation = {
  __typename?: 'IoRestorecommerceAuthRoleAssociation';
  role?: Maybe<Scalars['String']['output']>;
  attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  id?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
};

export type IoRestorecommerceTimezoneTimezone = {
  __typename?: 'IoRestorecommerceTimezoneTimezone';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  description?: Maybe<Scalars['String']['output']>;
};

export type IoRestorecommerceLocaleLocale = {
  __typename?: 'IoRestorecommerceLocaleLocale';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  value?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
};

export type IoRestorecommerceImageImage = {
  __typename?: 'IoRestorecommerceImageImage';
  id?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  contentType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  length?: Maybe<Scalars['Float']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  index?: Maybe<Scalars['Int']['output']>;
};

export enum IoRestorecommerceUserUserType {
  OrgUser = 0,
  IndividualUser = 1,
  Guest = 2,
  TechnicalUser = 3
}

export type IoRestorecommerceAuthTokens = {
  __typename?: 'IoRestorecommerceAuthTokens';
  name?: Maybe<Scalars['String']['output']>;
  expiresIn?: Maybe<Scalars['DateTime']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  scopes?: Maybe<Array<Scalars['String']['output']>>;
  type?: Maybe<Scalars['String']['output']>;
  interactive?: Maybe<Scalars['Boolean']['output']>;
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  clientId?: Maybe<Scalars['String']['output']>;
};

export type GoogleProtobufAny = {
  __typename?: 'GoogleProtobufAny';
  typeUrl?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['GoogleProtobufAnyValue']['output']>;
};

export type IoRestorecommerceRoleRole = {
  __typename?: 'IoRestorecommerceRoleRole';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  assignableByRoles?: Maybe<Array<Scalars['String']['output']>>;
};

export type IoRestorecommerceStatusStatus = {
  __typename?: 'IoRestorecommerceStatusStatus';
  id?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type IoRestorecommerceStatusOperationStatus = {
  __typename?: 'IoRestorecommerceStatusOperationStatus';
  code?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type IIoRestorecommerceResourcebaseReadRequest = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sorts?: InputMaybe<Array<IIoRestorecommerceResourcebaseSort>>;
  filters?: InputMaybe<Array<IIoRestorecommerceResourcebaseFilterOp>>;
  fields?: InputMaybe<Array<IIoRestorecommerceResourcebaseFieldFilter>>;
  localesLimiter?: InputMaybe<Array<Scalars['String']['input']>>;
  customQueries?: InputMaybe<Array<Scalars['String']['input']>>;
  customArguments?: InputMaybe<IGoogleProtobufAny>;
  search?: InputMaybe<IIoRestorecommerceResourcebaseSearch>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceResourcebaseSort = {
  field?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<IoRestorecommerceResourcebaseSortSortOrder>;
};

export enum IoRestorecommerceResourcebaseSortSortOrder {
  Unsorted = 0,
  Ascending = 1,
  Descending = 2
}

export type IIoRestorecommerceResourcebaseFilterOp = {
  filters?: InputMaybe<Array<IIoRestorecommerceResourcebaseFilter>>;
  operator?: InputMaybe<IoRestorecommerceResourcebaseFilterOpOperator>;
};

export type IIoRestorecommerceResourcebaseFilter = {
  field?: InputMaybe<Scalars['String']['input']>;
  operation?: InputMaybe<IoRestorecommerceResourcebaseFilterOperation>;
  value?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<IoRestorecommerceResourcebaseFilterValueType>;
  filters?: InputMaybe<Array<IIoRestorecommerceFilterFilterOp>>;
};

export enum IoRestorecommerceResourcebaseFilterOperation {
  Eq = 0,
  Lt = 1,
  Lte = 2,
  Gt = 3,
  Gte = 4,
  IsEmpty = 5,
  ILike = 6,
  In = 7,
  Neq = 8
}

export enum IoRestorecommerceResourcebaseFilterValueType {
  String = 0,
  Number = 1,
  Boolean = 2,
  Date = 3,
  Array = 4
}

export type IIoRestorecommerceFilterFilterOp = {
  filters?: InputMaybe<Array<IIoRestorecommerceFilterFilter>>;
  operator?: InputMaybe<IoRestorecommerceFilterFilterOpOperator>;
};

export type IIoRestorecommerceFilterFilter = {
  field?: InputMaybe<Scalars['String']['input']>;
  operation?: InputMaybe<IoRestorecommerceFilterFilterOperation>;
  value?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<IoRestorecommerceFilterFilterValueType>;
  filters?: InputMaybe<Array<IIoRestorecommerceFilterFilterOp>>;
};

export enum IoRestorecommerceFilterFilterOperation {
  Eq = 0,
  Lt = 1,
  Lte = 2,
  Gt = 3,
  Gte = 4,
  IsEmpty = 5,
  ILike = 6,
  In = 7,
  Neq = 8
}

export enum IoRestorecommerceFilterFilterValueType {
  String = 0,
  Number = 1,
  Boolean = 2,
  Date = 3,
  Array = 4
}

export enum IoRestorecommerceFilterFilterOpOperator {
  And = 0,
  Or = 1
}

export enum IoRestorecommerceResourcebaseFilterOpOperator {
  And = 0,
  Or = 1
}

export type IIoRestorecommerceResourcebaseFieldFilter = {
  name?: InputMaybe<Scalars['String']['input']>;
  include?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IGoogleProtobufAny = {
  typeUrl?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['GoogleProtobufAnyValue']['input']>;
};

export type IIoRestorecommerceResourcebaseSearch = {
  search?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<Scalars['String']['input']>>;
  caseSensitive?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProtoIoRestorecommerceUserUserListResponse = {
  __typename?: 'ProtoIoRestorecommerceUserUserListResponse';
  details?: Maybe<IoRestorecommerceUserUserListResponse>;
};

export type IoRestorecommerceUserUserListResponse = {
  __typename?: 'IoRestorecommerceUserUserListResponse';
  items?: Maybe<Array<IoRestorecommerceUserUserResponse>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceUserUserResponse = {
  __typename?: 'IoRestorecommerceUserUserResponse';
  payload?: Maybe<IoRestorecommerceUserUser>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceUserUser = {
  __typename?: 'IoRestorecommerceUserUser';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  newEmail?: Maybe<Scalars['String']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  activationCode?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  passwordHash?: Maybe<Scalars['String']['output']>;
  roleAssociations?: Maybe<Array<IoRestorecommerceAuthRoleAssociation>>;
  timezoneId?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<IoRestorecommerceTimezoneTimezone>;
  localeId?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<IoRestorecommerceLocaleLocale>;
  defaultScope?: Maybe<Scalars['String']['output']>;
  guest?: Maybe<Scalars['Boolean']['output']>;
  image?: Maybe<IoRestorecommerceImageImage>;
  userType?: Maybe<IoRestorecommerceUserUserType>;
  invite?: Maybe<Scalars['Boolean']['output']>;
  invitedByUserName?: Maybe<Scalars['String']['output']>;
  invitedByUserFirstName?: Maybe<Scalars['String']['output']>;
  invitedByUserLastName?: Maybe<Scalars['String']['output']>;
  tokens?: Maybe<Array<IoRestorecommerceAuthTokens>>;
  lastAccess?: Maybe<Scalars['DateTime']['output']>;
  properties?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  data?: Maybe<GoogleProtobufAny>;
};

export type IIoRestorecommerceUserFindRequest = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceUserFindByRoleRequest = {
  role?: InputMaybe<Scalars['String']['input']>;
  attributes?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
};

export type IIoRestorecommerceAttributeAttribute = {
  id?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  attributes?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
};

export type ProtoIoRestorecommerceUserUserResponse = {
  __typename?: 'ProtoIoRestorecommerceUserUserResponse';
  details?: Maybe<IoRestorecommerceUserUserResponse>;
};

export type IIoRestorecommerceUserFindByTokenRequest = {
  token?: InputMaybe<Scalars['String']['input']>;
};

export type IdentityRoleQuery = {
  __typename?: 'IdentityRoleQuery';
  Read?: Maybe<ProtoIoRestorecommerceRoleRoleListResponse>;
};


export type IdentityRoleQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceRoleRoleListResponse = {
  __typename?: 'ProtoIoRestorecommerceRoleRoleListResponse';
  details?: Maybe<IoRestorecommerceRoleRoleListResponse>;
};

export type IoRestorecommerceRoleRoleListResponse = {
  __typename?: 'IoRestorecommerceRoleRoleListResponse';
  items?: Maybe<Array<IoRestorecommerceRoleRoleResponse>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceRoleRoleResponse = {
  __typename?: 'IoRestorecommerceRoleRoleResponse';
  payload?: Maybe<IoRestorecommerceRoleRole>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IdentityAuthenticationLogQuery = {
  __typename?: 'IdentityAuthenticationLogQuery';
  Read?: Maybe<ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse>;
};


export type IdentityAuthenticationLogQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse = {
  __typename?: 'ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse';
  details?: Maybe<IoRestorecommerceAuthenticationLogAuthenticationLogListResponse>;
};

export type IoRestorecommerceAuthenticationLogAuthenticationLogListResponse = {
  __typename?: 'IoRestorecommerceAuthenticationLogAuthenticationLogListResponse';
  items?: Maybe<Array<IoRestorecommerceAuthenticationLogAuthenticationLogResponse>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceAuthenticationLogAuthenticationLogResponse = {
  __typename?: 'IoRestorecommerceAuthenticationLogAuthenticationLogResponse';
  payload?: Maybe<IoRestorecommerceAuthenticationLogAuthenticationLog>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceAuthenticationLogAuthenticationLog = {
  __typename?: 'IoRestorecommerceAuthenticationLogAuthenticationLog';
  id?: Maybe<Scalars['String']['output']>;
  ipv4Address?: Maybe<Scalars['String']['output']>;
  ipv6Address?: Maybe<Scalars['String']['output']>;
  operatingSystem?: Maybe<Scalars['String']['output']>;
  userAgent?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  activity?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  subjectId?: Maybe<Scalars['String']['output']>;
  tokenName?: Maybe<Scalars['String']['output']>;
};

export type IdentityTokenQuery = {
  __typename?: 'IdentityTokenQuery';
  find?: Maybe<ProtoGoogleProtobufAny>;
};


export type IdentityTokenQueryFindArgs = {
  input: IIoRestorecommerceTokenIdentifier;
};

export type ProtoGoogleProtobufAny = {
  __typename?: 'ProtoGoogleProtobufAny';
  details?: Maybe<GoogleProtobufAny>;
};

export type IIoRestorecommerceTokenIdentifier = {
  id?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  identity: IdentityMutation;
};

export type IdentityMutation = {
  __typename?: 'IdentityMutation';
  user: IdentityUserMutation;
  role: IdentityRoleMutation;
  authentication_log: IdentityAuthenticationLogMutation;
  token: IdentityTokenMutation;
  o_auth: IdentityOAuthMutation;
};

export type IdentityUserMutation = {
  __typename?: 'IdentityUserMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceUserUserListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Register?: Maybe<ProtoIoRestorecommerceUserUserResponse>;
  Activate?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
  ChangePassword?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
  RequestPasswordChange?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
  RequestEmailChange?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
  ConfirmPasswordChange?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
  ConfirmEmailChange?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
  Unregister?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
  Login?: Maybe<ProtoIoRestorecommerceUserUserResponse>;
  DeleteUsersByOrg?: Maybe<ProtoIoRestorecommerceUserDeleteUsersByOrgResponse>;
  ConfirmUserInvitation?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
  SendInvitationEmail?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
  SendActivationEmail?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
  GetUnauthenticatedSubjectTokenForTenant?: Maybe<ProtoIoRestorecommerceUserTenantResponse>;
};


export type IdentityUserMutationMutateArgs = {
  input: IIoRestorecommerceUserUserList;
};


export type IdentityUserMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type IdentityUserMutationRegisterArgs = {
  input: IIoRestorecommerceUserRegisterRequest;
};


export type IdentityUserMutationActivateArgs = {
  input: IIoRestorecommerceUserActivateRequest;
};


export type IdentityUserMutationChangePasswordArgs = {
  input: IIoRestorecommerceUserChangePasswordRequest;
};


export type IdentityUserMutationRequestPasswordChangeArgs = {
  input: IIoRestorecommerceUserRequestPasswordChangeRequest;
};


export type IdentityUserMutationRequestEmailChangeArgs = {
  input: IIoRestorecommerceUserChangeEmailRequest;
};


export type IdentityUserMutationConfirmPasswordChangeArgs = {
  input: IIoRestorecommerceUserConfirmPasswordChangeRequest;
};


export type IdentityUserMutationConfirmEmailChangeArgs = {
  input: IIoRestorecommerceUserConfirmEmailChangeRequest;
};


export type IdentityUserMutationUnregisterArgs = {
  input: IIoRestorecommerceUserUnregisterRequest;
};


export type IdentityUserMutationLoginArgs = {
  input: IIoRestorecommerceUserLoginRequest;
};


export type IdentityUserMutationDeleteUsersByOrgArgs = {
  input: IIoRestorecommerceUserOrgIdRequest;
};


export type IdentityUserMutationConfirmUserInvitationArgs = {
  input: IIoRestorecommerceUserConfirmUserInvitationRequest;
};


export type IdentityUserMutationSendInvitationEmailArgs = {
  input: IIoRestorecommerceUserSendInvitationEmailRequest;
};


export type IdentityUserMutationSendActivationEmailArgs = {
  input: IIoRestorecommerceUserSendActivationEmailRequest;
};


export type IdentityUserMutationGetUnauthenticatedSubjectTokenForTenantArgs = {
  input: IIoRestorecommerceUserTenantRequest;
};

export type IIoRestorecommerceUserUserList = {
  items?: InputMaybe<Array<IIoRestorecommerceUserUser>>;
  totalCount?: InputMaybe<Scalars['Int']['input']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceUserUser = {
  id?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  newEmail?: InputMaybe<Scalars['String']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  activationCode?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  passwordHash?: InputMaybe<Scalars['String']['input']>;
  roleAssociations?: InputMaybe<Array<IIoRestorecommerceAuthRoleAssociation>>;
  timezoneId?: InputMaybe<Scalars['String']['input']>;
  localeId?: InputMaybe<Scalars['String']['input']>;
  defaultScope?: InputMaybe<Scalars['String']['input']>;
  guest?: InputMaybe<Scalars['Boolean']['input']>;
  image?: InputMaybe<IIoRestorecommerceImageImage>;
  userType?: InputMaybe<IoRestorecommerceUserUserType>;
  invite?: InputMaybe<Scalars['Boolean']['input']>;
  invitedByUserName?: InputMaybe<Scalars['String']['input']>;
  invitedByUserFirstName?: InputMaybe<Scalars['String']['input']>;
  invitedByUserLastName?: InputMaybe<Scalars['String']['input']>;
  tokens?: InputMaybe<Array<IIoRestorecommerceAuthTokens>>;
  lastAccess?: InputMaybe<Scalars['IDateTime']['input']>;
  properties?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
  data?: InputMaybe<IGoogleProtobufAny>;
};

export type IIoRestorecommerceMetaMeta = {
  created?: InputMaybe<Scalars['IDateTime']['input']>;
  modified?: InputMaybe<Scalars['IDateTime']['input']>;
  modifiedBy?: InputMaybe<Scalars['String']['input']>;
  owners?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
  acls?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceAuthRoleAssociation = {
  role?: InputMaybe<Scalars['String']['input']>;
  attributes?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
  id?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['IDateTime']['input']>;
};

export type IIoRestorecommerceImageImage = {
  id?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  index?: InputMaybe<Scalars['Int']['input']>;
};

export type IIoRestorecommerceAuthTokens = {
  name?: InputMaybe<Scalars['String']['input']>;
  expiresIn?: InputMaybe<Scalars['IDateTime']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  scopes?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<Scalars['String']['input']>;
  interactive?: InputMaybe<Scalars['Boolean']['input']>;
  lastLogin?: InputMaybe<Scalars['IDateTime']['input']>;
  clientId?: InputMaybe<Scalars['String']['input']>;
};

export enum ModeType {
  Create = 'CREATE',
  Update = 'UPDATE',
  Upsert = 'UPSERT'
}

export type ProtoIoRestorecommerceResourcebaseDeleteResponse = {
  __typename?: 'ProtoIoRestorecommerceResourcebaseDeleteResponse';
  details?: Maybe<IoRestorecommerceResourcebaseDeleteResponse>;
};

export type IoRestorecommerceResourcebaseDeleteResponse = {
  __typename?: 'IoRestorecommerceResourcebaseDeleteResponse';
  status?: Maybe<Array<IoRestorecommerceStatusStatus>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IIoRestorecommerceResourcebaseDeleteRequest = {
  collection?: InputMaybe<Scalars['Boolean']['input']>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  views?: InputMaybe<Array<Scalars['String']['input']>>;
  analyzers?: InputMaybe<Array<Scalars['String']['input']>>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceUserRegisterRequest = {
  id?: InputMaybe<Scalars['String']['input']>;
  guest?: InputMaybe<Scalars['Boolean']['input']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  timezoneId?: InputMaybe<Scalars['String']['input']>;
  localeId?: InputMaybe<Scalars['String']['input']>;
  defaultScope?: InputMaybe<Scalars['String']['input']>;
  userType?: InputMaybe<IoRestorecommerceUserUserType>;
  captchaCode?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<IGoogleProtobufAny>;
};

export type ProtoIoRestorecommerceStatusOperationStatusObj = {
  __typename?: 'ProtoIoRestorecommerceStatusOperationStatusObj';
  details?: Maybe<IoRestorecommerceStatusOperationStatusObj>;
};

export type IoRestorecommerceStatusOperationStatusObj = {
  __typename?: 'IoRestorecommerceStatusOperationStatusObj';
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IIoRestorecommerceUserActivateRequest = {
  identifier?: InputMaybe<Scalars['String']['input']>;
  activationCode?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceUserChangePasswordRequest = {
  password?: InputMaybe<Scalars['String']['input']>;
  newPassword?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceUserRequestPasswordChangeRequest = {
  identifier?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceUserChangeEmailRequest = {
  identifier?: InputMaybe<Scalars['String']['input']>;
  newEmail?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceUserConfirmPasswordChangeRequest = {
  identifier?: InputMaybe<Scalars['String']['input']>;
  activationCode?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceUserConfirmEmailChangeRequest = {
  identifier?: InputMaybe<Scalars['String']['input']>;
  activationCode?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceUserUnregisterRequest = {
  identifier?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceUserLoginRequest = {
  identifier?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

export type ProtoIoRestorecommerceUserDeleteUsersByOrgResponse = {
  __typename?: 'ProtoIoRestorecommerceUserDeleteUsersByOrgResponse';
  details?: Maybe<IoRestorecommerceUserDeleteUsersByOrgResponse>;
};

export type IoRestorecommerceUserDeleteUsersByOrgResponse = {
  __typename?: 'IoRestorecommerceUserDeleteUsersByOrgResponse';
  userIds?: Maybe<Array<Scalars['String']['output']>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IIoRestorecommerceUserOrgIdRequest = {
  orgIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type IIoRestorecommerceUserConfirmUserInvitationRequest = {
  identifier?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  activationCode?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceUserSendInvitationEmailRequest = {
  identifier?: InputMaybe<Scalars['String']['input']>;
  invitedByUserIdentifier?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceUserSendActivationEmailRequest = {
  identifier?: InputMaybe<Scalars['String']['input']>;
};

export type ProtoIoRestorecommerceUserTenantResponse = {
  __typename?: 'ProtoIoRestorecommerceUserTenantResponse';
  details?: Maybe<IoRestorecommerceUserTenantResponse>;
};

export type IoRestorecommerceUserTenantResponse = {
  __typename?: 'IoRestorecommerceUserTenantResponse';
  token?: Maybe<Scalars['String']['output']>;
};

export type IIoRestorecommerceUserTenantRequest = {
  domain?: InputMaybe<Scalars['String']['input']>;
};

export type IdentityRoleMutation = {
  __typename?: 'IdentityRoleMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceRoleRoleListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type IdentityRoleMutationMutateArgs = {
  input: IIoRestorecommerceRoleRoleList;
};


export type IdentityRoleMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceRoleRoleList = {
  items?: InputMaybe<Array<IIoRestorecommerceRoleRole>>;
  totalCount?: InputMaybe<Scalars['Int']['input']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceRoleRole = {
  id?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  assignableByRoles?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type IdentityAuthenticationLogMutation = {
  __typename?: 'IdentityAuthenticationLogMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type IdentityAuthenticationLogMutationMutateArgs = {
  input: IIoRestorecommerceAuthenticationLogAuthenticationLogList;
};


export type IdentityAuthenticationLogMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceAuthenticationLogAuthenticationLogList = {
  items?: InputMaybe<Array<IIoRestorecommerceAuthenticationLogAuthenticationLog>>;
  totalCount?: InputMaybe<Scalars['Int']['input']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceAuthenticationLogAuthenticationLog = {
  id?: InputMaybe<Scalars['String']['input']>;
  ipv4Address?: InputMaybe<Scalars['String']['input']>;
  ipv6Address?: InputMaybe<Scalars['String']['input']>;
  operatingSystem?: InputMaybe<Scalars['String']['input']>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['IDateTime']['input']>;
  activity?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  subjectId?: InputMaybe<Scalars['String']['input']>;
  tokenName?: InputMaybe<Scalars['String']['input']>;
};

export type IdentityTokenMutation = {
  __typename?: 'IdentityTokenMutation';
  upsert?: Maybe<ProtoGoogleProtobufAny>;
  destroy?: Maybe<ProtoGoogleProtobufAny>;
  revokeByGrantId?: Maybe<ProtoGoogleProtobufAny>;
  consume?: Maybe<ProtoGoogleProtobufAny>;
};


export type IdentityTokenMutationUpsertArgs = {
  input: IIoRestorecommerceTokenTokenData;
};


export type IdentityTokenMutationDestroyArgs = {
  input: IIoRestorecommerceTokenIdentifier;
};


export type IdentityTokenMutationRevokeByGrantIdArgs = {
  input: IIoRestorecommerceTokenGrantId;
};


export type IdentityTokenMutationConsumeArgs = {
  input: IIoRestorecommerceTokenIdentifier;
};

export type IIoRestorecommerceTokenTokenData = {
  id?: InputMaybe<Scalars['String']['input']>;
  payload?: InputMaybe<IGoogleProtobufAny>;
  expiresIn?: InputMaybe<Scalars['IDateTime']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceTokenGrantId = {
  grantId?: InputMaybe<Scalars['String']['input']>;
};

export type IdentityOAuthMutation = {
  __typename?: 'IdentityOAuthMutation';
  AvailableServices?: Maybe<ProtoIoRestorecommerceOauthServicesResponse>;
  GenerateLinks?: Maybe<ProtoIoRestorecommerceOauthGenerateLinksResponse>;
  ExchangeCode?: Maybe<ProtoIoRestorecommerceOauthExchangeCodeResponse>;
  GetToken?: Maybe<ProtoIoRestorecommerceOauthGetTokenResponse>;
};


export type IdentityOAuthMutationExchangeCodeArgs = {
  input: IIoRestorecommerceOauthExchangeCodeRequest;
};


export type IdentityOAuthMutationGetTokenArgs = {
  input: IIoRestorecommerceOauthGetTokenRequest;
};

export type ProtoIoRestorecommerceOauthServicesResponse = {
  __typename?: 'ProtoIoRestorecommerceOauthServicesResponse';
  details?: Maybe<IoRestorecommerceOauthServicesResponse>;
};

export type IoRestorecommerceOauthServicesResponse = {
  __typename?: 'IoRestorecommerceOauthServicesResponse';
  services?: Maybe<Array<Scalars['String']['output']>>;
};

export type ProtoIoRestorecommerceOauthGenerateLinksResponse = {
  __typename?: 'ProtoIoRestorecommerceOauthGenerateLinksResponse';
  details?: Maybe<IoRestorecommerceOauthGenerateLinksResponse>;
};

export type IoRestorecommerceOauthGenerateLinksResponse = {
  __typename?: 'IoRestorecommerceOauthGenerateLinksResponse';
  links?: Maybe<Scalars['MapScalar']['output']>;
};

export type ProtoIoRestorecommerceOauthExchangeCodeResponse = {
  __typename?: 'ProtoIoRestorecommerceOauthExchangeCodeResponse';
  details?: Maybe<IoRestorecommerceOauthExchangeCodeResponse>;
};

export type IoRestorecommerceOauthExchangeCodeResponse = {
  __typename?: 'IoRestorecommerceOauthExchangeCodeResponse';
  user?: Maybe<IoRestorecommerceUserUserResponse>;
  email?: Maybe<Scalars['String']['output']>;
  token?: Maybe<IoRestorecommerceAuthTokens>;
};

export type IIoRestorecommerceOauthExchangeCodeRequest = {
  service?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
};

export type ProtoIoRestorecommerceOauthGetTokenResponse = {
  __typename?: 'ProtoIoRestorecommerceOauthGetTokenResponse';
  details?: Maybe<IoRestorecommerceOauthGetTokenResponse>;
};

export type IoRestorecommerceOauthGetTokenResponse = {
  __typename?: 'IoRestorecommerceOauthGetTokenResponse';
  status?: Maybe<IoRestorecommerceStatusStatus>;
  token?: Maybe<Scalars['String']['output']>;
};

export type IIoRestorecommerceOauthGetTokenRequest = {
  service?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  orderingOrders?: Maybe<SubscriptionOutput>;
  catalogProducts?: Maybe<SubscriptionOutput>;
  invoicingInvoices?: Maybe<SubscriptionOutput>;
  fulfillmentFulfillments?: Maybe<SubscriptionOutput>;
  fulfillmentFulfillmentCouriers?: Maybe<SubscriptionOutput>;
  fulfillmentFulfillment_products?: Maybe<SubscriptionOutput>;
  identityUsers?: Maybe<SubscriptionOutput>;
};


export type SubscriptionOrderingOrdersArgs = {
  action?: InputMaybe<SubscriptionAction>;
};


export type SubscriptionCatalogProductsArgs = {
  action?: InputMaybe<SubscriptionAction>;
};


export type SubscriptionInvoicingInvoicesArgs = {
  action?: InputMaybe<SubscriptionAction>;
};


export type SubscriptionFulfillmentFulfillmentsArgs = {
  action?: InputMaybe<SubscriptionAction>;
};


export type SubscriptionFulfillmentFulfillmentCouriersArgs = {
  action?: InputMaybe<SubscriptionAction>;
};


export type SubscriptionFulfillmentFulfillment_ProductsArgs = {
  action?: InputMaybe<SubscriptionAction>;
};


export type SubscriptionIdentityUsersArgs = {
  action?: InputMaybe<SubscriptionAction>;
};

export type SubscriptionOutput = {
  __typename?: 'SubscriptionOutput';
  id?: Maybe<Scalars['String']['output']>;
};

export enum SubscriptionAction {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED'
}

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  IdentityQuery: ResolverTypeWrapper<IdentityQuery>;
  IdentityUserQuery: ResolverTypeWrapper<IdentityUserQuery>;
  ProtoIoRestorecommerceUserUserListWithRoleResponse: ResolverTypeWrapper<ProtoIoRestorecommerceUserUserListWithRoleResponse>;
  IoRestorecommerceUserUserListWithRoleResponse: ResolverTypeWrapper<IoRestorecommerceUserUserListWithRoleResponse>;
  IoRestorecommerceUserUserRoleResponse: ResolverTypeWrapper<IoRestorecommerceUserUserRoleResponse>;
  IoRestorecommerceUserUserRole: ResolverTypeWrapper<IoRestorecommerceUserUserRole>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  IoRestorecommerceMetaMeta: ResolverTypeWrapper<IoRestorecommerceMetaMeta>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  IoRestorecommerceAttributeAttribute: ResolverTypeWrapper<IoRestorecommerceAttributeAttribute>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  IoRestorecommerceAuthRoleAssociation: ResolverTypeWrapper<IoRestorecommerceAuthRoleAssociation>;
  IoRestorecommerceTimezoneTimezone: ResolverTypeWrapper<IoRestorecommerceTimezoneTimezone>;
  IoRestorecommerceLocaleLocale: ResolverTypeWrapper<IoRestorecommerceLocaleLocale>;
  IoRestorecommerceImageImage: ResolverTypeWrapper<IoRestorecommerceImageImage>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  IoRestorecommerceUserUserType: IoRestorecommerceUserUserType;
  IoRestorecommerceAuthTokens: ResolverTypeWrapper<IoRestorecommerceAuthTokens>;
  GoogleProtobufAny: ResolverTypeWrapper<GoogleProtobufAny>;
  GoogleProtobufAnyValue: ResolverTypeWrapper<Scalars['GoogleProtobufAnyValue']['output']>;
  IoRestorecommerceRoleRole: ResolverTypeWrapper<IoRestorecommerceRoleRole>;
  IoRestorecommerceStatusStatus: ResolverTypeWrapper<IoRestorecommerceStatusStatus>;
  IoRestorecommerceStatusOperationStatus: ResolverTypeWrapper<IoRestorecommerceStatusOperationStatus>;
  IIoRestorecommerceResourcebaseReadRequest: IIoRestorecommerceResourcebaseReadRequest;
  IIoRestorecommerceResourcebaseSort: IIoRestorecommerceResourcebaseSort;
  IoRestorecommerceResourcebaseSortSortOrder: IoRestorecommerceResourcebaseSortSortOrder;
  IIoRestorecommerceResourcebaseFilterOp: IIoRestorecommerceResourcebaseFilterOp;
  IIoRestorecommerceResourcebaseFilter: IIoRestorecommerceResourcebaseFilter;
  IoRestorecommerceResourcebaseFilterOperation: IoRestorecommerceResourcebaseFilterOperation;
  IoRestorecommerceResourcebaseFilterValueType: IoRestorecommerceResourcebaseFilterValueType;
  IIoRestorecommerceFilterFilterOp: IIoRestorecommerceFilterFilterOp;
  IIoRestorecommerceFilterFilter: IIoRestorecommerceFilterFilter;
  IoRestorecommerceFilterFilterOperation: IoRestorecommerceFilterFilterOperation;
  IoRestorecommerceFilterFilterValueType: IoRestorecommerceFilterFilterValueType;
  IoRestorecommerceFilterFilterOpOperator: IoRestorecommerceFilterFilterOpOperator;
  IoRestorecommerceResourcebaseFilterOpOperator: IoRestorecommerceResourcebaseFilterOpOperator;
  IIoRestorecommerceResourcebaseFieldFilter: IIoRestorecommerceResourcebaseFieldFilter;
  IGoogleProtobufAny: IGoogleProtobufAny;
  IIoRestorecommerceResourcebaseSearch: IIoRestorecommerceResourcebaseSearch;
  ProtoIoRestorecommerceUserUserListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceUserUserListResponse>;
  IoRestorecommerceUserUserListResponse: ResolverTypeWrapper<IoRestorecommerceUserUserListResponse>;
  IoRestorecommerceUserUserResponse: ResolverTypeWrapper<IoRestorecommerceUserUserResponse>;
  IoRestorecommerceUserUser: ResolverTypeWrapper<IoRestorecommerceUserUser>;
  IIoRestorecommerceUserFindRequest: IIoRestorecommerceUserFindRequest;
  IIoRestorecommerceUserFindByRoleRequest: IIoRestorecommerceUserFindByRoleRequest;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  ProtoIoRestorecommerceUserUserResponse: ResolverTypeWrapper<ProtoIoRestorecommerceUserUserResponse>;
  IIoRestorecommerceUserFindByTokenRequest: IIoRestorecommerceUserFindByTokenRequest;
  IdentityRoleQuery: ResolverTypeWrapper<IdentityRoleQuery>;
  ProtoIoRestorecommerceRoleRoleListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceRoleRoleListResponse>;
  IoRestorecommerceRoleRoleListResponse: ResolverTypeWrapper<IoRestorecommerceRoleRoleListResponse>;
  IoRestorecommerceRoleRoleResponse: ResolverTypeWrapper<IoRestorecommerceRoleRoleResponse>;
  IdentityAuthenticationLogQuery: ResolverTypeWrapper<IdentityAuthenticationLogQuery>;
  ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse>;
  IoRestorecommerceAuthenticationLogAuthenticationLogListResponse: ResolverTypeWrapper<IoRestorecommerceAuthenticationLogAuthenticationLogListResponse>;
  IoRestorecommerceAuthenticationLogAuthenticationLogResponse: ResolverTypeWrapper<IoRestorecommerceAuthenticationLogAuthenticationLogResponse>;
  IoRestorecommerceAuthenticationLogAuthenticationLog: ResolverTypeWrapper<IoRestorecommerceAuthenticationLogAuthenticationLog>;
  IdentityTokenQuery: ResolverTypeWrapper<IdentityTokenQuery>;
  ProtoGoogleProtobufAny: ResolverTypeWrapper<ProtoGoogleProtobufAny>;
  IIoRestorecommerceTokenIdentifier: IIoRestorecommerceTokenIdentifier;
  Mutation: ResolverTypeWrapper<{}>;
  IdentityMutation: ResolverTypeWrapper<IdentityMutation>;
  IdentityUserMutation: ResolverTypeWrapper<IdentityUserMutation>;
  IIoRestorecommerceUserUserList: IIoRestorecommerceUserUserList;
  IIoRestorecommerceUserUser: IIoRestorecommerceUserUser;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IDateTime: ResolverTypeWrapper<Scalars['IDateTime']['output']>;
  IIoRestorecommerceAuthRoleAssociation: IIoRestorecommerceAuthRoleAssociation;
  IIoRestorecommerceImageImage: IIoRestorecommerceImageImage;
  IIoRestorecommerceAuthTokens: IIoRestorecommerceAuthTokens;
  ModeType: ModeType;
  ProtoIoRestorecommerceResourcebaseDeleteResponse: ResolverTypeWrapper<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  IoRestorecommerceResourcebaseDeleteResponse: ResolverTypeWrapper<IoRestorecommerceResourcebaseDeleteResponse>;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
  IIoRestorecommerceUserRegisterRequest: IIoRestorecommerceUserRegisterRequest;
  ProtoIoRestorecommerceStatusOperationStatusObj: ResolverTypeWrapper<ProtoIoRestorecommerceStatusOperationStatusObj>;
  IoRestorecommerceStatusOperationStatusObj: ResolverTypeWrapper<IoRestorecommerceStatusOperationStatusObj>;
  IIoRestorecommerceUserActivateRequest: IIoRestorecommerceUserActivateRequest;
  IIoRestorecommerceUserChangePasswordRequest: IIoRestorecommerceUserChangePasswordRequest;
  IIoRestorecommerceUserRequestPasswordChangeRequest: IIoRestorecommerceUserRequestPasswordChangeRequest;
  IIoRestorecommerceUserChangeEmailRequest: IIoRestorecommerceUserChangeEmailRequest;
  IIoRestorecommerceUserConfirmPasswordChangeRequest: IIoRestorecommerceUserConfirmPasswordChangeRequest;
  IIoRestorecommerceUserConfirmEmailChangeRequest: IIoRestorecommerceUserConfirmEmailChangeRequest;
  IIoRestorecommerceUserUnregisterRequest: IIoRestorecommerceUserUnregisterRequest;
  IIoRestorecommerceUserLoginRequest: IIoRestorecommerceUserLoginRequest;
  ProtoIoRestorecommerceUserDeleteUsersByOrgResponse: ResolverTypeWrapper<ProtoIoRestorecommerceUserDeleteUsersByOrgResponse>;
  IoRestorecommerceUserDeleteUsersByOrgResponse: ResolverTypeWrapper<IoRestorecommerceUserDeleteUsersByOrgResponse>;
  IIoRestorecommerceUserOrgIDRequest: IIoRestorecommerceUserOrgIdRequest;
  IIoRestorecommerceUserConfirmUserInvitationRequest: IIoRestorecommerceUserConfirmUserInvitationRequest;
  IIoRestorecommerceUserSendInvitationEmailRequest: IIoRestorecommerceUserSendInvitationEmailRequest;
  IIoRestorecommerceUserSendActivationEmailRequest: IIoRestorecommerceUserSendActivationEmailRequest;
  ProtoIoRestorecommerceUserTenantResponse: ResolverTypeWrapper<ProtoIoRestorecommerceUserTenantResponse>;
  IoRestorecommerceUserTenantResponse: ResolverTypeWrapper<IoRestorecommerceUserTenantResponse>;
  IIoRestorecommerceUserTenantRequest: IIoRestorecommerceUserTenantRequest;
  IdentityRoleMutation: ResolverTypeWrapper<IdentityRoleMutation>;
  IIoRestorecommerceRoleRoleList: IIoRestorecommerceRoleRoleList;
  IIoRestorecommerceRoleRole: IIoRestorecommerceRoleRole;
  IdentityAuthenticationLogMutation: ResolverTypeWrapper<IdentityAuthenticationLogMutation>;
  IIoRestorecommerceAuthenticationLogAuthenticationLogList: IIoRestorecommerceAuthenticationLogAuthenticationLogList;
  IIoRestorecommerceAuthenticationLogAuthenticationLog: IIoRestorecommerceAuthenticationLogAuthenticationLog;
  IdentityTokenMutation: ResolverTypeWrapper<IdentityTokenMutation>;
  IIoRestorecommerceTokenTokenData: IIoRestorecommerceTokenTokenData;
  IIoRestorecommerceTokenGrantId: IIoRestorecommerceTokenGrantId;
  IdentityOAuthMutation: ResolverTypeWrapper<IdentityOAuthMutation>;
  ProtoIoRestorecommerceOauthServicesResponse: ResolverTypeWrapper<ProtoIoRestorecommerceOauthServicesResponse>;
  IoRestorecommerceOauthServicesResponse: ResolverTypeWrapper<IoRestorecommerceOauthServicesResponse>;
  ProtoIoRestorecommerceOauthGenerateLinksResponse: ResolverTypeWrapper<ProtoIoRestorecommerceOauthGenerateLinksResponse>;
  IoRestorecommerceOauthGenerateLinksResponse: ResolverTypeWrapper<IoRestorecommerceOauthGenerateLinksResponse>;
  MapScalar: ResolverTypeWrapper<Scalars['MapScalar']['output']>;
  ProtoIoRestorecommerceOauthExchangeCodeResponse: ResolverTypeWrapper<ProtoIoRestorecommerceOauthExchangeCodeResponse>;
  IoRestorecommerceOauthExchangeCodeResponse: ResolverTypeWrapper<IoRestorecommerceOauthExchangeCodeResponse>;
  IIoRestorecommerceOauthExchangeCodeRequest: IIoRestorecommerceOauthExchangeCodeRequest;
  ProtoIoRestorecommerceOauthGetTokenResponse: ResolverTypeWrapper<ProtoIoRestorecommerceOauthGetTokenResponse>;
  IoRestorecommerceOauthGetTokenResponse: ResolverTypeWrapper<IoRestorecommerceOauthGetTokenResponse>;
  IIoRestorecommerceOauthGetTokenRequest: IIoRestorecommerceOauthGetTokenRequest;
  Subscription: ResolverTypeWrapper<{}>;
  SubscriptionOutput: ResolverTypeWrapper<SubscriptionOutput>;
  SubscriptionAction: SubscriptionAction;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  IdentityQuery: IdentityQuery;
  IdentityUserQuery: IdentityUserQuery;
  ProtoIoRestorecommerceUserUserListWithRoleResponse: ProtoIoRestorecommerceUserUserListWithRoleResponse;
  IoRestorecommerceUserUserListWithRoleResponse: IoRestorecommerceUserUserListWithRoleResponse;
  IoRestorecommerceUserUserRoleResponse: IoRestorecommerceUserUserRoleResponse;
  IoRestorecommerceUserUserRole: IoRestorecommerceUserUserRole;
  String: Scalars['String']['output'];
  IoRestorecommerceMetaMeta: IoRestorecommerceMetaMeta;
  DateTime: Scalars['DateTime']['output'];
  IoRestorecommerceAttributeAttribute: IoRestorecommerceAttributeAttribute;
  Boolean: Scalars['Boolean']['output'];
  IoRestorecommerceAuthRoleAssociation: IoRestorecommerceAuthRoleAssociation;
  IoRestorecommerceTimezoneTimezone: IoRestorecommerceTimezoneTimezone;
  IoRestorecommerceLocaleLocale: IoRestorecommerceLocaleLocale;
  IoRestorecommerceImageImage: IoRestorecommerceImageImage;
  Float: Scalars['Float']['output'];
  Int: Scalars['Int']['output'];
  IoRestorecommerceAuthTokens: IoRestorecommerceAuthTokens;
  GoogleProtobufAny: GoogleProtobufAny;
  GoogleProtobufAnyValue: Scalars['GoogleProtobufAnyValue']['output'];
  IoRestorecommerceRoleRole: IoRestorecommerceRoleRole;
  IoRestorecommerceStatusStatus: IoRestorecommerceStatusStatus;
  IoRestorecommerceStatusOperationStatus: IoRestorecommerceStatusOperationStatus;
  IIoRestorecommerceResourcebaseReadRequest: IIoRestorecommerceResourcebaseReadRequest;
  IIoRestorecommerceResourcebaseSort: IIoRestorecommerceResourcebaseSort;
  IIoRestorecommerceResourcebaseFilterOp: IIoRestorecommerceResourcebaseFilterOp;
  IIoRestorecommerceResourcebaseFilter: IIoRestorecommerceResourcebaseFilter;
  IIoRestorecommerceFilterFilterOp: IIoRestorecommerceFilterFilterOp;
  IIoRestorecommerceFilterFilter: IIoRestorecommerceFilterFilter;
  IIoRestorecommerceResourcebaseFieldFilter: IIoRestorecommerceResourcebaseFieldFilter;
  IGoogleProtobufAny: IGoogleProtobufAny;
  IIoRestorecommerceResourcebaseSearch: IIoRestorecommerceResourcebaseSearch;
  ProtoIoRestorecommerceUserUserListResponse: ProtoIoRestorecommerceUserUserListResponse;
  IoRestorecommerceUserUserListResponse: IoRestorecommerceUserUserListResponse;
  IoRestorecommerceUserUserResponse: IoRestorecommerceUserUserResponse;
  IoRestorecommerceUserUser: IoRestorecommerceUserUser;
  IIoRestorecommerceUserFindRequest: IIoRestorecommerceUserFindRequest;
  IIoRestorecommerceUserFindByRoleRequest: IIoRestorecommerceUserFindByRoleRequest;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  ProtoIoRestorecommerceUserUserResponse: ProtoIoRestorecommerceUserUserResponse;
  IIoRestorecommerceUserFindByTokenRequest: IIoRestorecommerceUserFindByTokenRequest;
  IdentityRoleQuery: IdentityRoleQuery;
  ProtoIoRestorecommerceRoleRoleListResponse: ProtoIoRestorecommerceRoleRoleListResponse;
  IoRestorecommerceRoleRoleListResponse: IoRestorecommerceRoleRoleListResponse;
  IoRestorecommerceRoleRoleResponse: IoRestorecommerceRoleRoleResponse;
  IdentityAuthenticationLogQuery: IdentityAuthenticationLogQuery;
  ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse: ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse;
  IoRestorecommerceAuthenticationLogAuthenticationLogListResponse: IoRestorecommerceAuthenticationLogAuthenticationLogListResponse;
  IoRestorecommerceAuthenticationLogAuthenticationLogResponse: IoRestorecommerceAuthenticationLogAuthenticationLogResponse;
  IoRestorecommerceAuthenticationLogAuthenticationLog: IoRestorecommerceAuthenticationLogAuthenticationLog;
  IdentityTokenQuery: IdentityTokenQuery;
  ProtoGoogleProtobufAny: ProtoGoogleProtobufAny;
  IIoRestorecommerceTokenIdentifier: IIoRestorecommerceTokenIdentifier;
  Mutation: {};
  IdentityMutation: IdentityMutation;
  IdentityUserMutation: IdentityUserMutation;
  IIoRestorecommerceUserUserList: IIoRestorecommerceUserUserList;
  IIoRestorecommerceUserUser: IIoRestorecommerceUserUser;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IDateTime: Scalars['IDateTime']['output'];
  IIoRestorecommerceAuthRoleAssociation: IIoRestorecommerceAuthRoleAssociation;
  IIoRestorecommerceImageImage: IIoRestorecommerceImageImage;
  IIoRestorecommerceAuthTokens: IIoRestorecommerceAuthTokens;
  ProtoIoRestorecommerceResourcebaseDeleteResponse: ProtoIoRestorecommerceResourcebaseDeleteResponse;
  IoRestorecommerceResourcebaseDeleteResponse: IoRestorecommerceResourcebaseDeleteResponse;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
  IIoRestorecommerceUserRegisterRequest: IIoRestorecommerceUserRegisterRequest;
  ProtoIoRestorecommerceStatusOperationStatusObj: ProtoIoRestorecommerceStatusOperationStatusObj;
  IoRestorecommerceStatusOperationStatusObj: IoRestorecommerceStatusOperationStatusObj;
  IIoRestorecommerceUserActivateRequest: IIoRestorecommerceUserActivateRequest;
  IIoRestorecommerceUserChangePasswordRequest: IIoRestorecommerceUserChangePasswordRequest;
  IIoRestorecommerceUserRequestPasswordChangeRequest: IIoRestorecommerceUserRequestPasswordChangeRequest;
  IIoRestorecommerceUserChangeEmailRequest: IIoRestorecommerceUserChangeEmailRequest;
  IIoRestorecommerceUserConfirmPasswordChangeRequest: IIoRestorecommerceUserConfirmPasswordChangeRequest;
  IIoRestorecommerceUserConfirmEmailChangeRequest: IIoRestorecommerceUserConfirmEmailChangeRequest;
  IIoRestorecommerceUserUnregisterRequest: IIoRestorecommerceUserUnregisterRequest;
  IIoRestorecommerceUserLoginRequest: IIoRestorecommerceUserLoginRequest;
  ProtoIoRestorecommerceUserDeleteUsersByOrgResponse: ProtoIoRestorecommerceUserDeleteUsersByOrgResponse;
  IoRestorecommerceUserDeleteUsersByOrgResponse: IoRestorecommerceUserDeleteUsersByOrgResponse;
  IIoRestorecommerceUserOrgIDRequest: IIoRestorecommerceUserOrgIdRequest;
  IIoRestorecommerceUserConfirmUserInvitationRequest: IIoRestorecommerceUserConfirmUserInvitationRequest;
  IIoRestorecommerceUserSendInvitationEmailRequest: IIoRestorecommerceUserSendInvitationEmailRequest;
  IIoRestorecommerceUserSendActivationEmailRequest: IIoRestorecommerceUserSendActivationEmailRequest;
  ProtoIoRestorecommerceUserTenantResponse: ProtoIoRestorecommerceUserTenantResponse;
  IoRestorecommerceUserTenantResponse: IoRestorecommerceUserTenantResponse;
  IIoRestorecommerceUserTenantRequest: IIoRestorecommerceUserTenantRequest;
  IdentityRoleMutation: IdentityRoleMutation;
  IIoRestorecommerceRoleRoleList: IIoRestorecommerceRoleRoleList;
  IIoRestorecommerceRoleRole: IIoRestorecommerceRoleRole;
  IdentityAuthenticationLogMutation: IdentityAuthenticationLogMutation;
  IIoRestorecommerceAuthenticationLogAuthenticationLogList: IIoRestorecommerceAuthenticationLogAuthenticationLogList;
  IIoRestorecommerceAuthenticationLogAuthenticationLog: IIoRestorecommerceAuthenticationLogAuthenticationLog;
  IdentityTokenMutation: IdentityTokenMutation;
  IIoRestorecommerceTokenTokenData: IIoRestorecommerceTokenTokenData;
  IIoRestorecommerceTokenGrantId: IIoRestorecommerceTokenGrantId;
  IdentityOAuthMutation: IdentityOAuthMutation;
  ProtoIoRestorecommerceOauthServicesResponse: ProtoIoRestorecommerceOauthServicesResponse;
  IoRestorecommerceOauthServicesResponse: IoRestorecommerceOauthServicesResponse;
  ProtoIoRestorecommerceOauthGenerateLinksResponse: ProtoIoRestorecommerceOauthGenerateLinksResponse;
  IoRestorecommerceOauthGenerateLinksResponse: IoRestorecommerceOauthGenerateLinksResponse;
  MapScalar: Scalars['MapScalar']['output'];
  ProtoIoRestorecommerceOauthExchangeCodeResponse: ProtoIoRestorecommerceOauthExchangeCodeResponse;
  IoRestorecommerceOauthExchangeCodeResponse: IoRestorecommerceOauthExchangeCodeResponse;
  IIoRestorecommerceOauthExchangeCodeRequest: IIoRestorecommerceOauthExchangeCodeRequest;
  ProtoIoRestorecommerceOauthGetTokenResponse: ProtoIoRestorecommerceOauthGetTokenResponse;
  IoRestorecommerceOauthGetTokenResponse: IoRestorecommerceOauthGetTokenResponse;
  IIoRestorecommerceOauthGetTokenRequest: IIoRestorecommerceOauthGetTokenRequest;
  Subscription: {};
  SubscriptionOutput: SubscriptionOutput;
}>;

export type QueryResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  identity?: Resolver<ResolversTypes['IdentityQuery'], ParentType, ContextType>;
}>;

export type IdentityQueryResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IdentityQuery'] = ResolversParentTypes['IdentityQuery']> = ResolversObject<{
  user?: Resolver<ResolversTypes['IdentityUserQuery'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['IdentityRoleQuery'], ParentType, ContextType>;
  authentication_log?: Resolver<ResolversTypes['IdentityAuthenticationLogQuery'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['IdentityTokenQuery'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IdentityUserQueryResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IdentityUserQuery'] = ResolversParentTypes['IdentityUserQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceUserUserListWithRoleResponse']>, ParentType, ContextType, RequireFields<IdentityUserQueryReadArgs, 'input'>>;
  Find?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceUserUserListResponse']>, ParentType, ContextType, RequireFields<IdentityUserQueryFindArgs, 'input'>>;
  FindByRole?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceUserUserListResponse']>, ParentType, ContextType, RequireFields<IdentityUserQueryFindByRoleArgs, 'input'>>;
  FindByToken?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceUserUserResponse']>, ParentType, ContextType, RequireFields<IdentityUserQueryFindByTokenArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceUserUserListWithRoleResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceUserUserListWithRoleResponse'] = ResolversParentTypes['ProtoIoRestorecommerceUserUserListWithRoleResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceUserUserListWithRoleResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceUserUserListWithRoleResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceUserUserListWithRoleResponse'] = ResolversParentTypes['IoRestorecommerceUserUserListWithRoleResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceUserUserRoleResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceUserUserRoleResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceUserUserRoleResponse'] = ResolversParentTypes['IoRestorecommerceUserUserRoleResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceUserUserRole']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceUserUserRoleResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceUserUserRole'] = ResolversParentTypes['IoRestorecommerceUserUserRole']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  newEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  activationCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  passwordHash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roleAssociations?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAuthRoleAssociation']>>, ParentType, ContextType>;
  timezoneId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['IoRestorecommerceTimezoneTimezone']>, ParentType, ContextType>;
  localeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['IoRestorecommerceLocaleLocale']>, ParentType, ContextType>;
  defaultScope?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  guest?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['IoRestorecommerceImageImage']>, ParentType, ContextType>;
  userType?: Resolver<Maybe<ResolversTypes['IoRestorecommerceUserUserType']>, ParentType, ContextType>;
  invite?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  invitedByUserName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  invitedByUserFirstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  invitedByUserLastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tokens?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAuthTokens']>>, ParentType, ContextType>;
  lastAccess?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  properties?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['GoogleProtobufAny']>, ParentType, ContextType>;
  roles?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceRoleRole']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceMetaMetaResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceMetaMeta'] = ResolversParentTypes['IoRestorecommerceMetaMeta']> = ResolversObject<{
  created?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  modified?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  modifiedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owners?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  acls?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type IoRestorecommerceAttributeAttributeResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttribute'] = ResolversParentTypes['IoRestorecommerceAttributeAttribute']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attributes?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthRoleAssociationResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthRoleAssociation'] = ResolversParentTypes['IoRestorecommerceAuthRoleAssociation']> = ResolversObject<{
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attributes?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceTimezoneTimezoneResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceTimezoneTimezone'] = ResolversParentTypes['IoRestorecommerceTimezoneTimezone']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceLocaleLocaleResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceLocaleLocale'] = ResolversParentTypes['IoRestorecommerceLocaleLocale']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceImageImageResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceImageImage'] = ResolversParentTypes['IoRestorecommerceImageImage']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  filename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  index?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceUserUserTypeResolvers = { ORG_USER: 0, INDIVIDUAL_USER: 1, GUEST: 2, TECHNICAL_USER: 3 };

export type IoRestorecommerceAuthTokensResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthTokens'] = ResolversParentTypes['IoRestorecommerceAuthTokens']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expiresIn?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  scopes?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  interactive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastLogin?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  clientId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GoogleProtobufAnyResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['GoogleProtobufAny'] = ResolversParentTypes['GoogleProtobufAny']> = ResolversObject<{
  typeUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['GoogleProtobufAnyValue']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface GoogleProtobufAnyValueScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GoogleProtobufAnyValue'], any> {
  name: 'GoogleProtobufAnyValue';
}

export type IoRestorecommerceRoleRoleResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceRoleRole'] = ResolversParentTypes['IoRestorecommerceRoleRole']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  assignableByRoles?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceStatusStatusResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusStatus'] = ResolversParentTypes['IoRestorecommerceStatusStatus']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceStatusOperationStatusResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusOperationStatus'] = ResolversParentTypes['IoRestorecommerceStatusOperationStatus']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceResourcebaseSortSortOrderResolvers = { UNSORTED: 0, ASCENDING: 1, DESCENDING: 2 };

export type IoRestorecommerceResourcebaseFilterOperationResolvers = { eq: 0, lt: 1, lte: 2, gt: 3, gte: 4, isEmpty: 5, iLike: 6, in: 7, neq: 8 };

export type IoRestorecommerceResourcebaseFilterValueTypeResolvers = { STRING: 0, NUMBER: 1, BOOLEAN: 2, DATE: 3, ARRAY: 4 };

export type IoRestorecommerceFilterFilterOperationResolvers = { eq: 0, lt: 1, lte: 2, gt: 3, gte: 4, isEmpty: 5, iLike: 6, in: 7, neq: 8 };

export type IoRestorecommerceFilterFilterValueTypeResolvers = { STRING: 0, NUMBER: 1, BOOLEAN: 2, DATE: 3, ARRAY: 4 };

export type IoRestorecommerceFilterFilterOpOperatorResolvers = { and: 0, or: 1 };

export type IoRestorecommerceResourcebaseFilterOpOperatorResolvers = { and: 0, or: 1 };

export type ProtoIoRestorecommerceUserUserListResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceUserUserListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceUserUserListResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceUserUserListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceUserUserListResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceUserUserListResponse'] = ResolversParentTypes['IoRestorecommerceUserUserListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceUserUserResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceUserUserResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceUserUserResponse'] = ResolversParentTypes['IoRestorecommerceUserUserResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceUserUser']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceUserUserResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceUserUser'] = ResolversParentTypes['IoRestorecommerceUserUser']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  newEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  activationCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  passwordHash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roleAssociations?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAuthRoleAssociation']>>, ParentType, ContextType>;
  timezoneId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['IoRestorecommerceTimezoneTimezone']>, ParentType, ContextType>;
  localeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['IoRestorecommerceLocaleLocale']>, ParentType, ContextType>;
  defaultScope?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  guest?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['IoRestorecommerceImageImage']>, ParentType, ContextType>;
  userType?: Resolver<Maybe<ResolversTypes['IoRestorecommerceUserUserType']>, ParentType, ContextType>;
  invite?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  invitedByUserName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  invitedByUserFirstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  invitedByUserLastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tokens?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAuthTokens']>>, ParentType, ContextType>;
  lastAccess?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  properties?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['GoogleProtobufAny']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceUserUserResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceUserUserResponse'] = ResolversParentTypes['ProtoIoRestorecommerceUserUserResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceUserUserResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IdentityRoleQueryResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IdentityRoleQuery'] = ResolversParentTypes['IdentityRoleQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceRoleRoleListResponse']>, ParentType, ContextType, RequireFields<IdentityRoleQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceRoleRoleListResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceRoleRoleListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceRoleRoleListResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceRoleRoleListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceRoleRoleListResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceRoleRoleListResponse'] = ResolversParentTypes['IoRestorecommerceRoleRoleListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceRoleRoleResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceRoleRoleResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceRoleRoleResponse'] = ResolversParentTypes['IoRestorecommerceRoleRoleResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceRoleRole']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IdentityAuthenticationLogQueryResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IdentityAuthenticationLogQuery'] = ResolversParentTypes['IdentityAuthenticationLogQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse']>, ParentType, ContextType, RequireFields<IdentityAuthenticationLogQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAuthenticationLogAuthenticationLogListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthenticationLogAuthenticationLogListResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthenticationLogAuthenticationLogListResponse'] = ResolversParentTypes['IoRestorecommerceAuthenticationLogAuthenticationLogListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAuthenticationLogAuthenticationLogResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthenticationLogAuthenticationLogResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthenticationLogAuthenticationLogResponse'] = ResolversParentTypes['IoRestorecommerceAuthenticationLogAuthenticationLogResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAuthenticationLogAuthenticationLog']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthenticationLogAuthenticationLogResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthenticationLogAuthenticationLog'] = ResolversParentTypes['IoRestorecommerceAuthenticationLogAuthenticationLog']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ipv4Address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ipv6Address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  operatingSystem?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userAgent?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  activity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  subjectId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tokenName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IdentityTokenQueryResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IdentityTokenQuery'] = ResolversParentTypes['IdentityTokenQuery']> = ResolversObject<{
  find?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufAny']>, ParentType, ContextType, RequireFields<IdentityTokenQueryFindArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoGoogleProtobufAnyResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['ProtoGoogleProtobufAny'] = ResolversParentTypes['ProtoGoogleProtobufAny']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['GoogleProtobufAny']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  identity?: Resolver<ResolversTypes['IdentityMutation'], ParentType, ContextType>;
}>;

export type IdentityMutationResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IdentityMutation'] = ResolversParentTypes['IdentityMutation']> = ResolversObject<{
  user?: Resolver<ResolversTypes['IdentityUserMutation'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['IdentityRoleMutation'], ParentType, ContextType>;
  authentication_log?: Resolver<ResolversTypes['IdentityAuthenticationLogMutation'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['IdentityTokenMutation'], ParentType, ContextType>;
  o_auth?: Resolver<ResolversTypes['IdentityOAuthMutation'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IdentityUserMutationResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IdentityUserMutation'] = ResolversParentTypes['IdentityUserMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceUserUserListResponse']>, ParentType, ContextType, RequireFields<IdentityUserMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<IdentityUserMutationDeleteArgs, 'input'>>;
  Register?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceUserUserResponse']>, ParentType, ContextType, RequireFields<IdentityUserMutationRegisterArgs, 'input'>>;
  Activate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusOperationStatusObj']>, ParentType, ContextType, RequireFields<IdentityUserMutationActivateArgs, 'input'>>;
  ChangePassword?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusOperationStatusObj']>, ParentType, ContextType, RequireFields<IdentityUserMutationChangePasswordArgs, 'input'>>;
  RequestPasswordChange?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusOperationStatusObj']>, ParentType, ContextType, RequireFields<IdentityUserMutationRequestPasswordChangeArgs, 'input'>>;
  RequestEmailChange?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusOperationStatusObj']>, ParentType, ContextType, RequireFields<IdentityUserMutationRequestEmailChangeArgs, 'input'>>;
  ConfirmPasswordChange?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusOperationStatusObj']>, ParentType, ContextType, RequireFields<IdentityUserMutationConfirmPasswordChangeArgs, 'input'>>;
  ConfirmEmailChange?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusOperationStatusObj']>, ParentType, ContextType, RequireFields<IdentityUserMutationConfirmEmailChangeArgs, 'input'>>;
  Unregister?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusOperationStatusObj']>, ParentType, ContextType, RequireFields<IdentityUserMutationUnregisterArgs, 'input'>>;
  Login?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceUserUserResponse']>, ParentType, ContextType, RequireFields<IdentityUserMutationLoginArgs, 'input'>>;
  DeleteUsersByOrg?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceUserDeleteUsersByOrgResponse']>, ParentType, ContextType, RequireFields<IdentityUserMutationDeleteUsersByOrgArgs, 'input'>>;
  ConfirmUserInvitation?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusOperationStatusObj']>, ParentType, ContextType, RequireFields<IdentityUserMutationConfirmUserInvitationArgs, 'input'>>;
  SendInvitationEmail?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusOperationStatusObj']>, ParentType, ContextType, RequireFields<IdentityUserMutationSendInvitationEmailArgs, 'input'>>;
  SendActivationEmail?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusOperationStatusObj']>, ParentType, ContextType, RequireFields<IdentityUserMutationSendActivationEmailArgs, 'input'>>;
  GetUnauthenticatedSubjectTokenForTenant?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceUserTenantResponse']>, ParentType, ContextType, RequireFields<IdentityUserMutationGetUnauthenticatedSubjectTokenForTenantArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface IDateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IDateTime'], any> {
  name: 'IDateTime';
}

export type ProtoIoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse'] = ResolversParentTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceResourcebaseDeleteResponse'] = ResolversParentTypes['IoRestorecommerceResourcebaseDeleteResponse']> = ResolversObject<{
  status?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceStatusStatus']>>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceStatusOperationStatusObjResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceStatusOperationStatusObj'] = ResolversParentTypes['ProtoIoRestorecommerceStatusOperationStatusObj']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatusObj']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceStatusOperationStatusObjResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusOperationStatusObj'] = ResolversParentTypes['IoRestorecommerceStatusOperationStatusObj']> = ResolversObject<{
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceUserDeleteUsersByOrgResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceUserDeleteUsersByOrgResponse'] = ResolversParentTypes['ProtoIoRestorecommerceUserDeleteUsersByOrgResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceUserDeleteUsersByOrgResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceUserDeleteUsersByOrgResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceUserDeleteUsersByOrgResponse'] = ResolversParentTypes['IoRestorecommerceUserDeleteUsersByOrgResponse']> = ResolversObject<{
  userIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceUserTenantResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceUserTenantResponse'] = ResolversParentTypes['ProtoIoRestorecommerceUserTenantResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceUserTenantResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceUserTenantResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceUserTenantResponse'] = ResolversParentTypes['IoRestorecommerceUserTenantResponse']> = ResolversObject<{
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IdentityRoleMutationResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IdentityRoleMutation'] = ResolversParentTypes['IdentityRoleMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceRoleRoleListResponse']>, ParentType, ContextType, RequireFields<IdentityRoleMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<IdentityRoleMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IdentityAuthenticationLogMutationResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IdentityAuthenticationLogMutation'] = ResolversParentTypes['IdentityAuthenticationLogMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse']>, ParentType, ContextType, RequireFields<IdentityAuthenticationLogMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<IdentityAuthenticationLogMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IdentityTokenMutationResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IdentityTokenMutation'] = ResolversParentTypes['IdentityTokenMutation']> = ResolversObject<{
  upsert?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufAny']>, ParentType, ContextType, RequireFields<IdentityTokenMutationUpsertArgs, 'input'>>;
  destroy?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufAny']>, ParentType, ContextType, RequireFields<IdentityTokenMutationDestroyArgs, 'input'>>;
  revokeByGrantId?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufAny']>, ParentType, ContextType, RequireFields<IdentityTokenMutationRevokeByGrantIdArgs, 'input'>>;
  consume?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufAny']>, ParentType, ContextType, RequireFields<IdentityTokenMutationConsumeArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IdentityOAuthMutationResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IdentityOAuthMutation'] = ResolversParentTypes['IdentityOAuthMutation']> = ResolversObject<{
  AvailableServices?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOauthServicesResponse']>, ParentType, ContextType>;
  GenerateLinks?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOauthGenerateLinksResponse']>, ParentType, ContextType>;
  ExchangeCode?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOauthExchangeCodeResponse']>, ParentType, ContextType, RequireFields<IdentityOAuthMutationExchangeCodeArgs, 'input'>>;
  GetToken?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOauthGetTokenResponse']>, ParentType, ContextType, RequireFields<IdentityOAuthMutationGetTokenArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceOauthServicesResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceOauthServicesResponse'] = ResolversParentTypes['ProtoIoRestorecommerceOauthServicesResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOauthServicesResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOauthServicesResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceOauthServicesResponse'] = ResolversParentTypes['IoRestorecommerceOauthServicesResponse']> = ResolversObject<{
  services?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceOauthGenerateLinksResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceOauthGenerateLinksResponse'] = ResolversParentTypes['ProtoIoRestorecommerceOauthGenerateLinksResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOauthGenerateLinksResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOauthGenerateLinksResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceOauthGenerateLinksResponse'] = ResolversParentTypes['IoRestorecommerceOauthGenerateLinksResponse']> = ResolversObject<{
  links?: Resolver<Maybe<ResolversTypes['MapScalar']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface MapScalarScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['MapScalar'], any> {
  name: 'MapScalar';
}

export type ProtoIoRestorecommerceOauthExchangeCodeResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceOauthExchangeCodeResponse'] = ResolversParentTypes['ProtoIoRestorecommerceOauthExchangeCodeResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOauthExchangeCodeResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOauthExchangeCodeResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceOauthExchangeCodeResponse'] = ResolversParentTypes['IoRestorecommerceOauthExchangeCodeResponse']> = ResolversObject<{
  user?: Resolver<Maybe<ResolversTypes['IoRestorecommerceUserUserResponse']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAuthTokens']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceOauthGetTokenResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceOauthGetTokenResponse'] = ResolversParentTypes['ProtoIoRestorecommerceOauthGetTokenResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOauthGetTokenResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOauthGetTokenResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceOauthGetTokenResponse'] = ResolversParentTypes['IoRestorecommerceOauthGetTokenResponse']> = ResolversObject<{
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  orderingOrders?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "orderingOrders", ParentType, ContextType, Partial<SubscriptionOrderingOrdersArgs>>;
  catalogProducts?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "catalogProducts", ParentType, ContextType, Partial<SubscriptionCatalogProductsArgs>>;
  invoicingInvoices?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "invoicingInvoices", ParentType, ContextType, Partial<SubscriptionInvoicingInvoicesArgs>>;
  fulfillmentFulfillments?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "fulfillmentFulfillments", ParentType, ContextType, Partial<SubscriptionFulfillmentFulfillmentsArgs>>;
  fulfillmentFulfillmentCouriers?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "fulfillmentFulfillmentCouriers", ParentType, ContextType, Partial<SubscriptionFulfillmentFulfillmentCouriersArgs>>;
  fulfillmentFulfillment_products?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "fulfillmentFulfillment_products", ParentType, ContextType, Partial<SubscriptionFulfillmentFulfillment_ProductsArgs>>;
  identityUsers?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "identityUsers", ParentType, ContextType, Partial<SubscriptionIdentityUsersArgs>>;
}>;

export type SubscriptionOutputResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['SubscriptionOutput'] = ResolversParentTypes['SubscriptionOutput']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = IdentityContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  IdentityQuery?: IdentityQueryResolvers<ContextType>;
  IdentityUserQuery?: IdentityUserQueryResolvers<ContextType>;
  ProtoIoRestorecommerceUserUserListWithRoleResponse?: ProtoIoRestorecommerceUserUserListWithRoleResponseResolvers<ContextType>;
  IoRestorecommerceUserUserListWithRoleResponse?: IoRestorecommerceUserUserListWithRoleResponseResolvers<ContextType>;
  IoRestorecommerceUserUserRoleResponse?: IoRestorecommerceUserUserRoleResponseResolvers<ContextType>;
  IoRestorecommerceUserUserRole?: IoRestorecommerceUserUserRoleResolvers<ContextType>;
  IoRestorecommerceMetaMeta?: IoRestorecommerceMetaMetaResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  IoRestorecommerceAttributeAttribute?: IoRestorecommerceAttributeAttributeResolvers<ContextType>;
  IoRestorecommerceAuthRoleAssociation?: IoRestorecommerceAuthRoleAssociationResolvers<ContextType>;
  IoRestorecommerceTimezoneTimezone?: IoRestorecommerceTimezoneTimezoneResolvers<ContextType>;
  IoRestorecommerceLocaleLocale?: IoRestorecommerceLocaleLocaleResolvers<ContextType>;
  IoRestorecommerceImageImage?: IoRestorecommerceImageImageResolvers<ContextType>;
  IoRestorecommerceUserUserType?: IoRestorecommerceUserUserTypeResolvers;
  IoRestorecommerceAuthTokens?: IoRestorecommerceAuthTokensResolvers<ContextType>;
  GoogleProtobufAny?: GoogleProtobufAnyResolvers<ContextType>;
  GoogleProtobufAnyValue?: GraphQLScalarType;
  IoRestorecommerceRoleRole?: IoRestorecommerceRoleRoleResolvers<ContextType>;
  IoRestorecommerceStatusStatus?: IoRestorecommerceStatusStatusResolvers<ContextType>;
  IoRestorecommerceStatusOperationStatus?: IoRestorecommerceStatusOperationStatusResolvers<ContextType>;
  IoRestorecommerceResourcebaseSortSortOrder?: IoRestorecommerceResourcebaseSortSortOrderResolvers;
  IoRestorecommerceResourcebaseFilterOperation?: IoRestorecommerceResourcebaseFilterOperationResolvers;
  IoRestorecommerceResourcebaseFilterValueType?: IoRestorecommerceResourcebaseFilterValueTypeResolvers;
  IoRestorecommerceFilterFilterOperation?: IoRestorecommerceFilterFilterOperationResolvers;
  IoRestorecommerceFilterFilterValueType?: IoRestorecommerceFilterFilterValueTypeResolvers;
  IoRestorecommerceFilterFilterOpOperator?: IoRestorecommerceFilterFilterOpOperatorResolvers;
  IoRestorecommerceResourcebaseFilterOpOperator?: IoRestorecommerceResourcebaseFilterOpOperatorResolvers;
  ProtoIoRestorecommerceUserUserListResponse?: ProtoIoRestorecommerceUserUserListResponseResolvers<ContextType>;
  IoRestorecommerceUserUserListResponse?: IoRestorecommerceUserUserListResponseResolvers<ContextType>;
  IoRestorecommerceUserUserResponse?: IoRestorecommerceUserUserResponseResolvers<ContextType>;
  IoRestorecommerceUserUser?: IoRestorecommerceUserUserResolvers<ContextType>;
  ProtoIoRestorecommerceUserUserResponse?: ProtoIoRestorecommerceUserUserResponseResolvers<ContextType>;
  IdentityRoleQuery?: IdentityRoleQueryResolvers<ContextType>;
  ProtoIoRestorecommerceRoleRoleListResponse?: ProtoIoRestorecommerceRoleRoleListResponseResolvers<ContextType>;
  IoRestorecommerceRoleRoleListResponse?: IoRestorecommerceRoleRoleListResponseResolvers<ContextType>;
  IoRestorecommerceRoleRoleResponse?: IoRestorecommerceRoleRoleResponseResolvers<ContextType>;
  IdentityAuthenticationLogQuery?: IdentityAuthenticationLogQueryResolvers<ContextType>;
  ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse?: ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponseResolvers<ContextType>;
  IoRestorecommerceAuthenticationLogAuthenticationLogListResponse?: IoRestorecommerceAuthenticationLogAuthenticationLogListResponseResolvers<ContextType>;
  IoRestorecommerceAuthenticationLogAuthenticationLogResponse?: IoRestorecommerceAuthenticationLogAuthenticationLogResponseResolvers<ContextType>;
  IoRestorecommerceAuthenticationLogAuthenticationLog?: IoRestorecommerceAuthenticationLogAuthenticationLogResolvers<ContextType>;
  IdentityTokenQuery?: IdentityTokenQueryResolvers<ContextType>;
  ProtoGoogleProtobufAny?: ProtoGoogleProtobufAnyResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  IdentityMutation?: IdentityMutationResolvers<ContextType>;
  IdentityUserMutation?: IdentityUserMutationResolvers<ContextType>;
  IDateTime?: GraphQLScalarType;
  ProtoIoRestorecommerceResourcebaseDeleteResponse?: ProtoIoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType>;
  IoRestorecommerceResourcebaseDeleteResponse?: IoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType>;
  ProtoIoRestorecommerceStatusOperationStatusObj?: ProtoIoRestorecommerceStatusOperationStatusObjResolvers<ContextType>;
  IoRestorecommerceStatusOperationStatusObj?: IoRestorecommerceStatusOperationStatusObjResolvers<ContextType>;
  ProtoIoRestorecommerceUserDeleteUsersByOrgResponse?: ProtoIoRestorecommerceUserDeleteUsersByOrgResponseResolvers<ContextType>;
  IoRestorecommerceUserDeleteUsersByOrgResponse?: IoRestorecommerceUserDeleteUsersByOrgResponseResolvers<ContextType>;
  ProtoIoRestorecommerceUserTenantResponse?: ProtoIoRestorecommerceUserTenantResponseResolvers<ContextType>;
  IoRestorecommerceUserTenantResponse?: IoRestorecommerceUserTenantResponseResolvers<ContextType>;
  IdentityRoleMutation?: IdentityRoleMutationResolvers<ContextType>;
  IdentityAuthenticationLogMutation?: IdentityAuthenticationLogMutationResolvers<ContextType>;
  IdentityTokenMutation?: IdentityTokenMutationResolvers<ContextType>;
  IdentityOAuthMutation?: IdentityOAuthMutationResolvers<ContextType>;
  ProtoIoRestorecommerceOauthServicesResponse?: ProtoIoRestorecommerceOauthServicesResponseResolvers<ContextType>;
  IoRestorecommerceOauthServicesResponse?: IoRestorecommerceOauthServicesResponseResolvers<ContextType>;
  ProtoIoRestorecommerceOauthGenerateLinksResponse?: ProtoIoRestorecommerceOauthGenerateLinksResponseResolvers<ContextType>;
  IoRestorecommerceOauthGenerateLinksResponse?: IoRestorecommerceOauthGenerateLinksResponseResolvers<ContextType>;
  MapScalar?: GraphQLScalarType;
  ProtoIoRestorecommerceOauthExchangeCodeResponse?: ProtoIoRestorecommerceOauthExchangeCodeResponseResolvers<ContextType>;
  IoRestorecommerceOauthExchangeCodeResponse?: IoRestorecommerceOauthExchangeCodeResponseResolvers<ContextType>;
  ProtoIoRestorecommerceOauthGetTokenResponse?: ProtoIoRestorecommerceOauthGetTokenResponseResolvers<ContextType>;
  IoRestorecommerceOauthGetTokenResponse?: IoRestorecommerceOauthGetTokenResponseResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  SubscriptionOutput?: SubscriptionOutputResolvers<ContextType>;
}>;

