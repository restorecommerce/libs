import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { OstorageContext } from '../interfaces';
export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  TodoScalar: any;
  MapScalar: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  ostorage: OstorageQuery;
};

export type OstorageQuery = {
  __typename?: 'OstorageQuery';
  Get?: Maybe<ProtoIoRestorecommerceOstorageObject>;
  List?: Maybe<ProtoIoRestorecommerceOstorageObjectsData>;
};


export type OstorageQueryGetArgs = {
  input: IIoRestorecommerceOstorageGetRequest;
};


export type OstorageQueryListArgs = {
  input: IIoRestorecommerceOstorageListRequest;
};

export type ProtoIoRestorecommerceOstorageObject = {
  __typename?: 'ProtoIoRestorecommerceOstorageObject';
  status: StatusType;
  payload?: Maybe<IoRestorecommerceOstorageObject>;
};

/** Objects with error returned for GraphQL operations */
export type StatusType = {
  __typename?: 'StatusType';
  /** Status key */
  key: Scalars['String'];
  /** Status code */
  code: Scalars['Int'];
  /** Status message description */
  message?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceOstorageObject = {
  __typename?: 'IoRestorecommerceOstorageObject';
  key: Scalars['String'];
  bucket: Scalars['String'];
  object: Scalars['TodoScalar'];
  meta: IoRestorecommerceMetaMeta;
  url: Scalars['String'];
  options: IoRestorecommerceOstorageOptions;
  subject: IoRestorecommerceAuthSubject;
};


export type IoRestorecommerceMetaMeta = {
  __typename?: 'IoRestorecommerceMetaMeta';
  created: Scalars['Float'];
  modified: Scalars['Float'];
  modifiedBy: Scalars['String'];
  owner: Array<IoRestorecommerceAttributeAttribute>;
};

export type IoRestorecommerceAttributeAttribute = {
  __typename?: 'IoRestorecommerceAttributeAttribute';
  id: Scalars['String'];
  value: Scalars['String'];
};

export type IoRestorecommerceOstorageOptions = {
  __typename?: 'IoRestorecommerceOstorageOptions';
  encoding: Scalars['String'];
  contentType: Scalars['String'];
  contentLanguage: Scalars['String'];
  contentDisposition: Scalars['String'];
  length: Scalars['Int'];
  version: Scalars['String'];
  md5: Scalars['String'];
  tags: Array<IoRestorecommerceAttributeAttribute>;
  data: GoogleProtobufAny;
};

export type GoogleProtobufAny = {
  __typename?: 'GoogleProtobufAny';
  typeUrl: Scalars['String'];
  value: Scalars['TodoScalar'];
};

export type IoRestorecommerceAuthSubject = {
  __typename?: 'IoRestorecommerceAuthSubject';
  id: Scalars['String'];
  scope: Scalars['String'];
  roleAssociations: Array<IoRestorecommerceAuthRoleAssociation>;
  hierarchicalScopes: Array<IoRestorecommerceAuthHierarchicalScope>;
  unauthenticated: Scalars['Boolean'];
  token: Scalars['String'];
};

export type IoRestorecommerceAuthRoleAssociation = {
  __typename?: 'IoRestorecommerceAuthRoleAssociation';
  role: Scalars['String'];
  attributes: Array<IoRestorecommerceAttributeAttribute>;
  id: Scalars['String'];
};

export type IoRestorecommerceAuthHierarchicalScope = {
  __typename?: 'IoRestorecommerceAuthHierarchicalScope';
  id: Scalars['String'];
  children: Array<IoRestorecommerceAuthHierarchicalScope>;
  role: Scalars['String'];
};

export type IIoRestorecommerceOstorageGetRequest = {
  key: Scalars['String'];
  bucket: Scalars['String'];
  download: Scalars['Boolean'];
  subject: IIoRestorecommerceAuthSubject;
};

export type IIoRestorecommerceAuthSubject = {
  id: Scalars['String'];
  scope: Scalars['String'];
  roleAssociations: Array<IIoRestorecommerceAuthRoleAssociation>;
  hierarchicalScopes: Array<IIoRestorecommerceAuthHierarchicalScope>;
  unauthenticated: Scalars['Boolean'];
  token: Scalars['String'];
};

export type IIoRestorecommerceAuthRoleAssociation = {
  role: Scalars['String'];
  attributes: Array<IIoRestorecommerceAttributeAttribute>;
  id: Scalars['String'];
};

export type IIoRestorecommerceAttributeAttribute = {
  id: Scalars['String'];
  value: Scalars['String'];
};

export type IIoRestorecommerceAuthHierarchicalScope = {
  id: Scalars['String'];
  children: Array<IIoRestorecommerceAuthHierarchicalScope>;
  role: Scalars['String'];
};

export type ProtoIoRestorecommerceOstorageObjectsData = {
  __typename?: 'ProtoIoRestorecommerceOstorageObjectsData';
  status: StatusType;
  payload?: Maybe<IoRestorecommerceOstorageObjectsData>;
};

export type IoRestorecommerceOstorageObjectsData = {
  __typename?: 'IoRestorecommerceOstorageObjectsData';
  objectData: Array<IoRestorecommerceOstorageObjectData>;
};

export type IoRestorecommerceOstorageObjectData = {
  __typename?: 'IoRestorecommerceOstorageObjectData';
  objectName: Scalars['String'];
  url: Scalars['String'];
  meta: IoRestorecommerceMetaMeta;
};

export type IIoRestorecommerceOstorageListRequest = {
  bucket: Scalars['String'];
  filter: IGoogleProtobufStruct;
  subject: IIoRestorecommerceAuthSubject;
};

export type IGoogleProtobufStruct = {
  fields: Scalars['MapScalar'];
};


export type Mutation = {
  __typename?: 'Mutation';
  ostorage: OstorageMutation;
};

export type OstorageMutation = {
  __typename?: 'OstorageMutation';
  Put?: Maybe<ProtoIoRestorecommerceOstorageResponse>;
  Delete?: Maybe<ProtoGoogleProtobufEmpty>;
  Copy?: Maybe<ProtoIoRestorecommerceOstorageCopyResponse>;
};


export type OstorageMutationPutArgs = {
  input: IIoRestorecommerceOstorageObject;
};


export type OstorageMutationDeleteArgs = {
  input: IIoRestorecommerceOstorageDeleteRequest;
};


export type OstorageMutationCopyArgs = {
  input: IIoRestorecommerceOstorageCopyRequest;
};

export type ProtoIoRestorecommerceOstorageResponse = {
  __typename?: 'ProtoIoRestorecommerceOstorageResponse';
  status: StatusType;
  payload?: Maybe<IoRestorecommerceOstorageResponse>;
};

export type IoRestorecommerceOstorageResponse = {
  __typename?: 'IoRestorecommerceOstorageResponse';
  url: Scalars['String'];
  bucket: Scalars['String'];
  key: Scalars['String'];
  meta: IoRestorecommerceMetaMeta;
  tags: Array<IoRestorecommerceAttributeAttribute>;
  length: Scalars['Int'];
};

export type IIoRestorecommerceOstorageObject = {
  key: Scalars['String'];
  bucket: Scalars['String'];
  object: Scalars['Upload'];
  meta: IIoRestorecommerceMetaMeta;
  url: Scalars['String'];
  options: IIoRestorecommerceOstorageOptions;
  subject: IIoRestorecommerceAuthSubject;
};


export type IIoRestorecommerceMetaMeta = {
  created: Scalars['Float'];
  modified: Scalars['Float'];
  modifiedBy: Scalars['String'];
  owner: Array<IIoRestorecommerceAttributeAttribute>;
};

export type IIoRestorecommerceOstorageOptions = {
  encoding: Scalars['String'];
  contentType: Scalars['String'];
  contentLanguage: Scalars['String'];
  contentDisposition: Scalars['String'];
  length: Scalars['Int'];
  version: Scalars['String'];
  md5: Scalars['String'];
  tags: Array<IIoRestorecommerceAttributeAttribute>;
  data: IGoogleProtobufAny;
};

export type IGoogleProtobufAny = {
  typeUrl: Scalars['String'];
  value: Scalars['Upload'];
};

export type ProtoGoogleProtobufEmpty = {
  __typename?: 'ProtoGoogleProtobufEmpty';
  status: StatusType;
};

export type IIoRestorecommerceOstorageDeleteRequest = {
  key: Scalars['String'];
  bucket: Scalars['String'];
  subject: IIoRestorecommerceAuthSubject;
};

export type ProtoIoRestorecommerceOstorageCopyResponse = {
  __typename?: 'ProtoIoRestorecommerceOstorageCopyResponse';
  status: StatusType;
  payload?: Maybe<IoRestorecommerceOstorageCopyResponse>;
};

export type IoRestorecommerceOstorageCopyResponse = {
  __typename?: 'IoRestorecommerceOstorageCopyResponse';
  response: Array<IoRestorecommerceOstorageCopyResponseItem>;
};

export type IoRestorecommerceOstorageCopyResponseItem = {
  __typename?: 'IoRestorecommerceOstorageCopyResponseItem';
  bucket: Scalars['String'];
  copySource: Scalars['String'];
  key: Scalars['String'];
  meta: IoRestorecommerceMetaMeta;
  options: IoRestorecommerceOstorageOptions;
};

export type IIoRestorecommerceOstorageCopyRequest = {
  items: Array<IIoRestorecommerceOstorageCopyRequestItem>;
  subject: IIoRestorecommerceAuthSubject;
};

export type IIoRestorecommerceOstorageCopyRequestItem = {
  bucket: Scalars['String'];
  copySource: Scalars['String'];
  key: Scalars['String'];
  meta: IIoRestorecommerceMetaMeta;
  options: IIoRestorecommerceOstorageOptions;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs>;

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
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

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
  OstorageQuery: ResolverTypeWrapper<OstorageQuery>;
  ProtoIoRestorecommerceOstorageObject: ResolverTypeWrapper<ProtoIoRestorecommerceOstorageObject>;
  StatusType: ResolverTypeWrapper<StatusType>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IoRestorecommerceOstorageObject: ResolverTypeWrapper<IoRestorecommerceOstorageObject>;
  TodoScalar: ResolverTypeWrapper<Scalars['TodoScalar']>;
  IoRestorecommerceMetaMeta: ResolverTypeWrapper<IoRestorecommerceMetaMeta>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  IoRestorecommerceAttributeAttribute: ResolverTypeWrapper<IoRestorecommerceAttributeAttribute>;
  IoRestorecommerceOstorageOptions: ResolverTypeWrapper<IoRestorecommerceOstorageOptions>;
  GoogleProtobufAny: ResolverTypeWrapper<GoogleProtobufAny>;
  IoRestorecommerceAuthSubject: ResolverTypeWrapper<IoRestorecommerceAuthSubject>;
  IoRestorecommerceAuthRoleAssociation: ResolverTypeWrapper<IoRestorecommerceAuthRoleAssociation>;
  IoRestorecommerceAuthHierarchicalScope: ResolverTypeWrapper<IoRestorecommerceAuthHierarchicalScope>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  IIoRestorecommerceOstorageGetRequest: IIoRestorecommerceOstorageGetRequest;
  IIoRestorecommerceAuthSubject: IIoRestorecommerceAuthSubject;
  IIoRestorecommerceAuthRoleAssociation: IIoRestorecommerceAuthRoleAssociation;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceAuthHierarchicalScope: IIoRestorecommerceAuthHierarchicalScope;
  ProtoIoRestorecommerceOstorageObjectsData: ResolverTypeWrapper<ProtoIoRestorecommerceOstorageObjectsData>;
  IoRestorecommerceOstorageObjectsData: ResolverTypeWrapper<IoRestorecommerceOstorageObjectsData>;
  IoRestorecommerceOstorageObjectData: ResolverTypeWrapper<IoRestorecommerceOstorageObjectData>;
  IIoRestorecommerceOstorageListRequest: IIoRestorecommerceOstorageListRequest;
  IGoogleProtobufStruct: IGoogleProtobufStruct;
  MapScalar: ResolverTypeWrapper<Scalars['MapScalar']>;
  Mutation: ResolverTypeWrapper<{}>;
  OstorageMutation: ResolverTypeWrapper<OstorageMutation>;
  ProtoIoRestorecommerceOstorageResponse: ResolverTypeWrapper<ProtoIoRestorecommerceOstorageResponse>;
  IoRestorecommerceOstorageResponse: ResolverTypeWrapper<IoRestorecommerceOstorageResponse>;
  IIoRestorecommerceOstorageObject: IIoRestorecommerceOstorageObject;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IIoRestorecommerceOstorageOptions: IIoRestorecommerceOstorageOptions;
  IGoogleProtobufAny: IGoogleProtobufAny;
  ProtoGoogleProtobufEmpty: ResolverTypeWrapper<ProtoGoogleProtobufEmpty>;
  IIoRestorecommerceOstorageDeleteRequest: IIoRestorecommerceOstorageDeleteRequest;
  ProtoIoRestorecommerceOstorageCopyResponse: ResolverTypeWrapper<ProtoIoRestorecommerceOstorageCopyResponse>;
  IoRestorecommerceOstorageCopyResponse: ResolverTypeWrapper<IoRestorecommerceOstorageCopyResponse>;
  IoRestorecommerceOstorageCopyResponseItem: ResolverTypeWrapper<IoRestorecommerceOstorageCopyResponseItem>;
  IIoRestorecommerceOstorageCopyRequest: IIoRestorecommerceOstorageCopyRequest;
  IIoRestorecommerceOstorageCopyRequestItem: IIoRestorecommerceOstorageCopyRequestItem;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  OstorageQuery: OstorageQuery;
  ProtoIoRestorecommerceOstorageObject: ProtoIoRestorecommerceOstorageObject;
  StatusType: StatusType;
  String: Scalars['String'];
  Int: Scalars['Int'];
  IoRestorecommerceOstorageObject: IoRestorecommerceOstorageObject;
  TodoScalar: Scalars['TodoScalar'];
  IoRestorecommerceMetaMeta: IoRestorecommerceMetaMeta;
  Float: Scalars['Float'];
  IoRestorecommerceAttributeAttribute: IoRestorecommerceAttributeAttribute;
  IoRestorecommerceOstorageOptions: IoRestorecommerceOstorageOptions;
  GoogleProtobufAny: GoogleProtobufAny;
  IoRestorecommerceAuthSubject: IoRestorecommerceAuthSubject;
  IoRestorecommerceAuthRoleAssociation: IoRestorecommerceAuthRoleAssociation;
  IoRestorecommerceAuthHierarchicalScope: IoRestorecommerceAuthHierarchicalScope;
  Boolean: Scalars['Boolean'];
  IIoRestorecommerceOstorageGetRequest: IIoRestorecommerceOstorageGetRequest;
  IIoRestorecommerceAuthSubject: IIoRestorecommerceAuthSubject;
  IIoRestorecommerceAuthRoleAssociation: IIoRestorecommerceAuthRoleAssociation;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceAuthHierarchicalScope: IIoRestorecommerceAuthHierarchicalScope;
  ProtoIoRestorecommerceOstorageObjectsData: ProtoIoRestorecommerceOstorageObjectsData;
  IoRestorecommerceOstorageObjectsData: IoRestorecommerceOstorageObjectsData;
  IoRestorecommerceOstorageObjectData: IoRestorecommerceOstorageObjectData;
  IIoRestorecommerceOstorageListRequest: IIoRestorecommerceOstorageListRequest;
  IGoogleProtobufStruct: IGoogleProtobufStruct;
  MapScalar: Scalars['MapScalar'];
  Mutation: {};
  OstorageMutation: OstorageMutation;
  ProtoIoRestorecommerceOstorageResponse: ProtoIoRestorecommerceOstorageResponse;
  IoRestorecommerceOstorageResponse: IoRestorecommerceOstorageResponse;
  IIoRestorecommerceOstorageObject: IIoRestorecommerceOstorageObject;
  Upload: Scalars['Upload'];
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IIoRestorecommerceOstorageOptions: IIoRestorecommerceOstorageOptions;
  IGoogleProtobufAny: IGoogleProtobufAny;
  ProtoGoogleProtobufEmpty: ProtoGoogleProtobufEmpty;
  IIoRestorecommerceOstorageDeleteRequest: IIoRestorecommerceOstorageDeleteRequest;
  ProtoIoRestorecommerceOstorageCopyResponse: ProtoIoRestorecommerceOstorageCopyResponse;
  IoRestorecommerceOstorageCopyResponse: IoRestorecommerceOstorageCopyResponse;
  IoRestorecommerceOstorageCopyResponseItem: IoRestorecommerceOstorageCopyResponseItem;
  IIoRestorecommerceOstorageCopyRequest: IIoRestorecommerceOstorageCopyRequest;
  IIoRestorecommerceOstorageCopyRequestItem: IIoRestorecommerceOstorageCopyRequestItem;
}>;

export type QueryResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  ostorage?: Resolver<ResolversTypes['OstorageQuery'], ParentType, ContextType>;
}>;

export type OstorageQueryResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['OstorageQuery'] = ResolversParentTypes['OstorageQuery']> = ResolversObject<{
  Get?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOstorageObject']>, ParentType, ContextType, RequireFields<OstorageQueryGetArgs, 'input'>>;
  List?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOstorageObjectsData']>, ParentType, ContextType, RequireFields<OstorageQueryListArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceOstorageObjectResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceOstorageObject'] = ResolversParentTypes['ProtoIoRestorecommerceOstorageObject']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOstorageObject']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StatusTypeResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['StatusType'] = ResolversParentTypes['StatusType']> = ResolversObject<{
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOstorageObjectResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceOstorageObject'] = ResolversParentTypes['IoRestorecommerceOstorageObject']> = ResolversObject<{
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bucket?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  object?: Resolver<ResolversTypes['TodoScalar'], ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['IoRestorecommerceMetaMeta'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  options?: Resolver<ResolversTypes['IoRestorecommerceOstorageOptions'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['IoRestorecommerceAuthSubject'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface TodoScalarScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['TodoScalar'], any> {
  name: 'TodoScalar';
}

export type IoRestorecommerceMetaMetaResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceMetaMeta'] = ResolversParentTypes['IoRestorecommerceMetaMeta']> = ResolversObject<{
  created?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  modified?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  modifiedBy?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAttributeAttributeResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttribute'] = ResolversParentTypes['IoRestorecommerceAttributeAttribute']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOstorageOptionsResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceOstorageOptions'] = ResolversParentTypes['IoRestorecommerceOstorageOptions']> = ResolversObject<{
  encoding?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contentType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contentLanguage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contentDisposition?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  length?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  md5?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>, ParentType, ContextType>;
  data?: Resolver<ResolversTypes['GoogleProtobufAny'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GoogleProtobufAnyResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['GoogleProtobufAny'] = ResolversParentTypes['GoogleProtobufAny']> = ResolversObject<{
  typeUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['TodoScalar'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthSubjectResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthSubject'] = ResolversParentTypes['IoRestorecommerceAuthSubject']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  scope?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  roleAssociations?: Resolver<Array<ResolversTypes['IoRestorecommerceAuthRoleAssociation']>, ParentType, ContextType>;
  hierarchicalScopes?: Resolver<Array<ResolversTypes['IoRestorecommerceAuthHierarchicalScope']>, ParentType, ContextType>;
  unauthenticated?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthRoleAssociationResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthRoleAssociation'] = ResolversParentTypes['IoRestorecommerceAuthRoleAssociation']> = ResolversObject<{
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  attributes?: Resolver<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthHierarchicalScopeResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthHierarchicalScope'] = ResolversParentTypes['IoRestorecommerceAuthHierarchicalScope']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['IoRestorecommerceAuthHierarchicalScope']>, ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceOstorageObjectsDataResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceOstorageObjectsData'] = ResolversParentTypes['ProtoIoRestorecommerceOstorageObjectsData']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOstorageObjectsData']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOstorageObjectsDataResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceOstorageObjectsData'] = ResolversParentTypes['IoRestorecommerceOstorageObjectsData']> = ResolversObject<{
  objectData?: Resolver<Array<ResolversTypes['IoRestorecommerceOstorageObjectData']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOstorageObjectDataResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceOstorageObjectData'] = ResolversParentTypes['IoRestorecommerceOstorageObjectData']> = ResolversObject<{
  objectName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['IoRestorecommerceMetaMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface MapScalarScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['MapScalar'], any> {
  name: 'MapScalar';
}

export type MutationResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  ostorage?: Resolver<ResolversTypes['OstorageMutation'], ParentType, ContextType>;
}>;

export type OstorageMutationResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['OstorageMutation'] = ResolversParentTypes['OstorageMutation']> = ResolversObject<{
  Put?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOstorageResponse']>, ParentType, ContextType, RequireFields<OstorageMutationPutArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufEmpty']>, ParentType, ContextType, RequireFields<OstorageMutationDeleteArgs, 'input'>>;
  Copy?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOstorageCopyResponse']>, ParentType, ContextType, RequireFields<OstorageMutationCopyArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceOstorageResponseResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceOstorageResponse'] = ResolversParentTypes['ProtoIoRestorecommerceOstorageResponse']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOstorageResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOstorageResponseResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceOstorageResponse'] = ResolversParentTypes['IoRestorecommerceOstorageResponse']> = ResolversObject<{
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bucket?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['IoRestorecommerceMetaMeta'], ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>, ParentType, ContextType>;
  length?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type ProtoGoogleProtobufEmptyResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['ProtoGoogleProtobufEmpty'] = ResolversParentTypes['ProtoGoogleProtobufEmpty']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceOstorageCopyResponseResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceOstorageCopyResponse'] = ResolversParentTypes['ProtoIoRestorecommerceOstorageCopyResponse']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOstorageCopyResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOstorageCopyResponseResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceOstorageCopyResponse'] = ResolversParentTypes['IoRestorecommerceOstorageCopyResponse']> = ResolversObject<{
  response?: Resolver<Array<ResolversTypes['IoRestorecommerceOstorageCopyResponseItem']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOstorageCopyResponseItemResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceOstorageCopyResponseItem'] = ResolversParentTypes['IoRestorecommerceOstorageCopyResponseItem']> = ResolversObject<{
  bucket?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  copySource?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['IoRestorecommerceMetaMeta'], ParentType, ContextType>;
  options?: Resolver<ResolversTypes['IoRestorecommerceOstorageOptions'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = OstorageContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  OstorageQuery?: OstorageQueryResolvers<ContextType>;
  ProtoIoRestorecommerceOstorageObject?: ProtoIoRestorecommerceOstorageObjectResolvers<ContextType>;
  StatusType?: StatusTypeResolvers<ContextType>;
  IoRestorecommerceOstorageObject?: IoRestorecommerceOstorageObjectResolvers<ContextType>;
  TodoScalar?: GraphQLScalarType;
  IoRestorecommerceMetaMeta?: IoRestorecommerceMetaMetaResolvers<ContextType>;
  IoRestorecommerceAttributeAttribute?: IoRestorecommerceAttributeAttributeResolvers<ContextType>;
  IoRestorecommerceOstorageOptions?: IoRestorecommerceOstorageOptionsResolvers<ContextType>;
  GoogleProtobufAny?: GoogleProtobufAnyResolvers<ContextType>;
  IoRestorecommerceAuthSubject?: IoRestorecommerceAuthSubjectResolvers<ContextType>;
  IoRestorecommerceAuthRoleAssociation?: IoRestorecommerceAuthRoleAssociationResolvers<ContextType>;
  IoRestorecommerceAuthHierarchicalScope?: IoRestorecommerceAuthHierarchicalScopeResolvers<ContextType>;
  ProtoIoRestorecommerceOstorageObjectsData?: ProtoIoRestorecommerceOstorageObjectsDataResolvers<ContextType>;
  IoRestorecommerceOstorageObjectsData?: IoRestorecommerceOstorageObjectsDataResolvers<ContextType>;
  IoRestorecommerceOstorageObjectData?: IoRestorecommerceOstorageObjectDataResolvers<ContextType>;
  MapScalar?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  OstorageMutation?: OstorageMutationResolvers<ContextType>;
  ProtoIoRestorecommerceOstorageResponse?: ProtoIoRestorecommerceOstorageResponseResolvers<ContextType>;
  IoRestorecommerceOstorageResponse?: IoRestorecommerceOstorageResponseResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  ProtoGoogleProtobufEmpty?: ProtoGoogleProtobufEmptyResolvers<ContextType>;
  ProtoIoRestorecommerceOstorageCopyResponse?: ProtoIoRestorecommerceOstorageCopyResponseResolvers<ContextType>;
  IoRestorecommerceOstorageCopyResponse?: IoRestorecommerceOstorageCopyResponseResolvers<ContextType>;
  IoRestorecommerceOstorageCopyResponseItem?: IoRestorecommerceOstorageCopyResponseItemResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = OstorageContext> = Resolvers<ContextType>;
