import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { OstorageContext } from '../interfaces';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  TodoScalar: any;
  GoogleProtobufAnyValue: any;
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  ostorage: OstorageQuery;
};

export type OstorageQuery = {
  __typename?: 'OstorageQuery';
  object: OstorageObjectQuery;
};

export type OstorageObjectQuery = {
  __typename?: 'OstorageObjectQuery';
  Get?: Maybe<ProtoIoRestorecommerceOstorageObjectResponse>;
  List?: Maybe<ProtoIoRestorecommerceOstorageListResponse>;
};


export type OstorageObjectQueryGetArgs = {
  input: IIoRestorecommerceOstorageGetRequest;
};


export type OstorageObjectQueryListArgs = {
  input: IIoRestorecommerceOstorageListRequest;
};

export type ProtoIoRestorecommerceOstorageObjectResponse = {
  __typename?: 'ProtoIoRestorecommerceOstorageObjectResponse';
  details?: Maybe<IoRestorecommerceOstorageObjectResponse>;
};

export type IoRestorecommerceOstorageObjectResponse = {
  __typename?: 'IoRestorecommerceOstorageObjectResponse';
  response?: Maybe<IoRestorecommerceOstorageObjectResponsePayloadWithStatus>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceOstorageObjectResponsePayloadWithStatus = {
  __typename?: 'IoRestorecommerceOstorageObjectResponsePayloadWithStatus';
  payload?: Maybe<IoRestorecommerceOstorageObjectResponsePayload>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceOstorageObjectResponsePayload = {
  __typename?: 'IoRestorecommerceOstorageObjectResponsePayload';
  key?: Maybe<Scalars['String']>;
  bucket?: Maybe<Scalars['String']>;
  object?: Maybe<Scalars['TodoScalar']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  url?: Maybe<Scalars['String']>;
  options?: Maybe<IoRestorecommerceOstorageOptions>;
};

export type IoRestorecommerceMetaMeta = {
  __typename?: 'IoRestorecommerceMetaMeta';
  created?: Maybe<Scalars['Float']>;
  modified?: Maybe<Scalars['Float']>;
  modifiedBy?: Maybe<Scalars['String']>;
  owners?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  acls?: Maybe<Array<IoRestorecommerceAttributeAttributeObj>>;
};

export type IoRestorecommerceAttributeAttribute = {
  __typename?: 'IoRestorecommerceAttributeAttribute';
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
};

export type IoRestorecommerceAttributeAttributeObj = {
  __typename?: 'IoRestorecommerceAttributeAttributeObj';
  attributes?: Maybe<IoRestorecommerceAttributeAttribute>;
};

export type IoRestorecommerceOstorageOptions = {
  __typename?: 'IoRestorecommerceOstorageOptions';
  encoding?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  contentLanguage?: Maybe<Scalars['String']>;
  contentDisposition?: Maybe<Scalars['String']>;
  length?: Maybe<Scalars['Int']>;
  version?: Maybe<Scalars['String']>;
  md5?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  data?: Maybe<GoogleProtobufAny>;
};

export type GoogleProtobufAny = {
  __typename?: 'GoogleProtobufAny';
  typeUrl?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['GoogleProtobufAnyValue']>;
};

export type IoRestorecommerceStatusStatus = {
  __typename?: 'IoRestorecommerceStatusStatus';
  id?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceStatusOperationStatus = {
  __typename?: 'IoRestorecommerceStatusOperationStatus';
  code?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceOstorageGetRequest = {
  key?: InputMaybe<Scalars['String']>;
  bucket?: InputMaybe<Scalars['String']>;
  download?: InputMaybe<Scalars['Boolean']>;
};

export type ProtoIoRestorecommerceOstorageListResponse = {
  __typename?: 'ProtoIoRestorecommerceOstorageListResponse';
  details?: Maybe<IoRestorecommerceOstorageListResponse>;
};

export type IoRestorecommerceOstorageListResponse = {
  __typename?: 'IoRestorecommerceOstorageListResponse';
  responses?: Maybe<Array<IoRestorecommerceOstorageObjectsDataWithPayloadStatus>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceOstorageObjectsDataWithPayloadStatus = {
  __typename?: 'IoRestorecommerceOstorageObjectsDataWithPayloadStatus';
  payload?: Maybe<IoRestorecommerceOstorageObjectData>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceOstorageObjectData = {
  __typename?: 'IoRestorecommerceOstorageObjectData';
  objectName?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
};

export type IIoRestorecommerceOstorageListRequest = {
  bucket?: InputMaybe<Scalars['String']>;
  filters?: InputMaybe<IIoRestorecommerceFilterFilterOp>;
  maxKeys?: InputMaybe<Scalars['Int']>;
  prefix?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceFilterFilterOp = {
  filters?: InputMaybe<Array<IIoRestorecommerceFilterFilter>>;
  operator?: InputMaybe<IoRestorecommerceFilterFilterOpOperator>;
};

export type IIoRestorecommerceFilterFilter = {
  field?: InputMaybe<Scalars['String']>;
  operation?: InputMaybe<IoRestorecommerceFilterFilterOperation>;
  value?: InputMaybe<Scalars['String']>;
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

export type Mutation = {
  __typename?: 'Mutation';
  ostorage: OstorageMutation;
};

export type OstorageMutation = {
  __typename?: 'OstorageMutation';
  object: OstorageObjectMutation;
};

export type OstorageObjectMutation = {
  __typename?: 'OstorageObjectMutation';
  Put?: Maybe<ProtoIoRestorecommerceOstoragePutResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Copy?: Maybe<ProtoIoRestorecommerceOstorageCopyResponseList>;
  Move?: Maybe<ProtoIoRestorecommerceOstorageMoveResponseList>;
};


export type OstorageObjectMutationPutArgs = {
  input: IIoRestorecommerceOstorageObject;
};


export type OstorageObjectMutationDeleteArgs = {
  input: IIoRestorecommerceOstorageDeleteRequest;
};


export type OstorageObjectMutationCopyArgs = {
  input: IIoRestorecommerceOstorageCopyRequestList;
};


export type OstorageObjectMutationMoveArgs = {
  input: IIoRestorecommerceOstorageMoveRequestList;
};

export type ProtoIoRestorecommerceOstoragePutResponse = {
  __typename?: 'ProtoIoRestorecommerceOstoragePutResponse';
  details?: Maybe<IoRestorecommerceOstoragePutResponse>;
};

export type IoRestorecommerceOstoragePutResponse = {
  __typename?: 'IoRestorecommerceOstoragePutResponse';
  response?: Maybe<IoRestorecommerceOstoragePutResponseWithPayloadStatus>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceOstoragePutResponseWithPayloadStatus = {
  __typename?: 'IoRestorecommerceOstoragePutResponseWithPayloadStatus';
  payload?: Maybe<IoRestorecommerceOstorageResponse>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceOstorageResponse = {
  __typename?: 'IoRestorecommerceOstorageResponse';
  url?: Maybe<Scalars['String']>;
  bucket?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  tags?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  length?: Maybe<Scalars['Int']>;
};

export type IIoRestorecommerceOstorageObject = {
  key?: InputMaybe<Scalars['String']>;
  bucket?: InputMaybe<Scalars['String']>;
  object?: InputMaybe<Scalars['Upload']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  url?: InputMaybe<Scalars['String']>;
  options?: InputMaybe<IIoRestorecommerceOstorageOptions>;
};

export type IIoRestorecommerceMetaMeta = {
  created?: InputMaybe<Scalars['Float']>;
  modified?: InputMaybe<Scalars['Float']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  owners?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
  acls?: InputMaybe<Array<IIoRestorecommerceAttributeAttributeObj>>;
};

export type IIoRestorecommerceAttributeAttribute = {
  id?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
  attributes?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
};

export type IIoRestorecommerceAttributeAttributeObj = {
  attributes?: InputMaybe<IIoRestorecommerceAttributeAttribute>;
};

export type IIoRestorecommerceOstorageOptions = {
  encoding?: InputMaybe<Scalars['String']>;
  contentType?: InputMaybe<Scalars['String']>;
  contentLanguage?: InputMaybe<Scalars['String']>;
  contentDisposition?: InputMaybe<Scalars['String']>;
  length?: InputMaybe<Scalars['Int']>;
  version?: InputMaybe<Scalars['String']>;
  md5?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
  data?: InputMaybe<IGoogleProtobufAny>;
};

export type IGoogleProtobufAny = {
  typeUrl?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['GoogleProtobufAnyValue']>;
};

export type ProtoIoRestorecommerceResourcebaseDeleteResponse = {
  __typename?: 'ProtoIoRestorecommerceResourcebaseDeleteResponse';
  details?: Maybe<IoRestorecommerceResourcebaseDeleteResponse>;
};

export type IoRestorecommerceResourcebaseDeleteResponse = {
  __typename?: 'IoRestorecommerceResourcebaseDeleteResponse';
  status?: Maybe<Array<IoRestorecommerceStatusStatus>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IIoRestorecommerceOstorageDeleteRequest = {
  key?: InputMaybe<Scalars['String']>;
  bucket?: InputMaybe<Scalars['String']>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
};

export type ProtoIoRestorecommerceOstorageCopyResponseList = {
  __typename?: 'ProtoIoRestorecommerceOstorageCopyResponseList';
  details?: Maybe<IoRestorecommerceOstorageCopyResponseList>;
};

export type IoRestorecommerceOstorageCopyResponseList = {
  __typename?: 'IoRestorecommerceOstorageCopyResponseList';
  responses?: Maybe<Array<IoRestorecommerceOstorageCopyResponsePayloadWithStatus>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceOstorageCopyResponsePayloadWithStatus = {
  __typename?: 'IoRestorecommerceOstorageCopyResponsePayloadWithStatus';
  payload?: Maybe<IoRestorecommerceOstorageCopyResponseItem>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceOstorageCopyResponseItem = {
  __typename?: 'IoRestorecommerceOstorageCopyResponseItem';
  bucket?: Maybe<Scalars['String']>;
  copySource?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  options?: Maybe<IoRestorecommerceOstorageOptions>;
};

export type IIoRestorecommerceOstorageCopyRequestList = {
  items?: InputMaybe<Array<IIoRestorecommerceOstorageCopyRequestItem>>;
};

export type IIoRestorecommerceOstorageCopyRequestItem = {
  bucket?: InputMaybe<Scalars['String']>;
  copySource?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  options?: InputMaybe<IIoRestorecommerceOstorageOptions>;
};

export type ProtoIoRestorecommerceOstorageMoveResponseList = {
  __typename?: 'ProtoIoRestorecommerceOstorageMoveResponseList';
  details?: Maybe<IoRestorecommerceOstorageMoveResponseList>;
};

export type IoRestorecommerceOstorageMoveResponseList = {
  __typename?: 'IoRestorecommerceOstorageMoveResponseList';
  responses?: Maybe<Array<IoRestorecommerceOstorageMoveResponsePayloadWithStatus>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceOstorageMoveResponsePayloadWithStatus = {
  __typename?: 'IoRestorecommerceOstorageMoveResponsePayloadWithStatus';
  payload?: Maybe<IoRestorecommerceOstorageMoveResponseItem>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceOstorageMoveResponseItem = {
  __typename?: 'IoRestorecommerceOstorageMoveResponseItem';
  bucket?: Maybe<Scalars['String']>;
  sourceObject?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  options?: Maybe<IoRestorecommerceOstorageOptions>;
};

export type IIoRestorecommerceOstorageMoveRequestList = {
  items?: InputMaybe<Array<IIoRestorecommerceOstorageMoveRequestItem>>;
};

export type IIoRestorecommerceOstorageMoveRequestItem = {
  bucket?: InputMaybe<Scalars['String']>;
  sourceObject?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  options?: InputMaybe<IIoRestorecommerceOstorageOptions>;
};

export type Subscription = {
  __typename?: 'Subscription';
  orderingOrders?: Maybe<SubscriptionOutput>;
  catalogProducts?: Maybe<SubscriptionOutput>;
  fulfillmentFulfillments?: Maybe<SubscriptionOutput>;
  fulfillmentFulfillmentCouriers?: Maybe<SubscriptionOutput>;
  fulfillmentFulfillment_products?: Maybe<SubscriptionOutput>;
};


export type SubscriptionOrderingOrdersArgs = {
  action?: InputMaybe<SubscriptionAction>;
};


export type SubscriptionCatalogProductsArgs = {
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

export type SubscriptionOutput = {
  __typename?: 'SubscriptionOutput';
  id?: Maybe<Scalars['String']>;
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
  OstorageQuery: ResolverTypeWrapper<OstorageQuery>;
  OstorageObjectQuery: ResolverTypeWrapper<OstorageObjectQuery>;
  ProtoIoRestorecommerceOstorageObjectResponse: ResolverTypeWrapper<ProtoIoRestorecommerceOstorageObjectResponse>;
  IoRestorecommerceOstorageObjectResponse: ResolverTypeWrapper<IoRestorecommerceOstorageObjectResponse>;
  IoRestorecommerceOstorageObjectResponsePayloadWithStatus: ResolverTypeWrapper<IoRestorecommerceOstorageObjectResponsePayloadWithStatus>;
  IoRestorecommerceOstorageObjectResponsePayload: ResolverTypeWrapper<IoRestorecommerceOstorageObjectResponsePayload>;
  String: ResolverTypeWrapper<Scalars['String']>;
  TodoScalar: ResolverTypeWrapper<Scalars['TodoScalar']>;
  IoRestorecommerceMetaMeta: ResolverTypeWrapper<IoRestorecommerceMetaMeta>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  IoRestorecommerceAttributeAttribute: ResolverTypeWrapper<IoRestorecommerceAttributeAttribute>;
  IoRestorecommerceAttributeAttributeObj: ResolverTypeWrapper<IoRestorecommerceAttributeAttributeObj>;
  IoRestorecommerceOstorageOptions: ResolverTypeWrapper<IoRestorecommerceOstorageOptions>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  GoogleProtobufAny: ResolverTypeWrapper<GoogleProtobufAny>;
  GoogleProtobufAnyValue: ResolverTypeWrapper<Scalars['GoogleProtobufAnyValue']>;
  IoRestorecommerceStatusStatus: ResolverTypeWrapper<IoRestorecommerceStatusStatus>;
  IoRestorecommerceStatusOperationStatus: ResolverTypeWrapper<IoRestorecommerceStatusOperationStatus>;
  IIoRestorecommerceOstorageGetRequest: IIoRestorecommerceOstorageGetRequest;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ProtoIoRestorecommerceOstorageListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceOstorageListResponse>;
  IoRestorecommerceOstorageListResponse: ResolverTypeWrapper<IoRestorecommerceOstorageListResponse>;
  IoRestorecommerceOstorageObjectsDataWithPayloadStatus: ResolverTypeWrapper<IoRestorecommerceOstorageObjectsDataWithPayloadStatus>;
  IoRestorecommerceOstorageObjectData: ResolverTypeWrapper<IoRestorecommerceOstorageObjectData>;
  IIoRestorecommerceOstorageListRequest: IIoRestorecommerceOstorageListRequest;
  IIoRestorecommerceFilterFilterOp: IIoRestorecommerceFilterFilterOp;
  IIoRestorecommerceFilterFilter: IIoRestorecommerceFilterFilter;
  IoRestorecommerceFilterFilterOperation: IoRestorecommerceFilterFilterOperation;
  IoRestorecommerceFilterFilterValueType: IoRestorecommerceFilterFilterValueType;
  IoRestorecommerceFilterFilterOpOperator: IoRestorecommerceFilterFilterOpOperator;
  Mutation: ResolverTypeWrapper<{}>;
  OstorageMutation: ResolverTypeWrapper<OstorageMutation>;
  OstorageObjectMutation: ResolverTypeWrapper<OstorageObjectMutation>;
  ProtoIoRestorecommerceOstoragePutResponse: ResolverTypeWrapper<ProtoIoRestorecommerceOstoragePutResponse>;
  IoRestorecommerceOstoragePutResponse: ResolverTypeWrapper<IoRestorecommerceOstoragePutResponse>;
  IoRestorecommerceOstoragePutResponseWithPayloadStatus: ResolverTypeWrapper<IoRestorecommerceOstoragePutResponseWithPayloadStatus>;
  IoRestorecommerceOstorageResponse: ResolverTypeWrapper<IoRestorecommerceOstorageResponse>;
  IIoRestorecommerceOstorageObject: IIoRestorecommerceOstorageObject;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceAttributeAttributeObj: IIoRestorecommerceAttributeAttributeObj;
  IIoRestorecommerceOstorageOptions: IIoRestorecommerceOstorageOptions;
  IGoogleProtobufAny: IGoogleProtobufAny;
  ProtoIoRestorecommerceResourcebaseDeleteResponse: ResolverTypeWrapper<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  IoRestorecommerceResourcebaseDeleteResponse: ResolverTypeWrapper<IoRestorecommerceResourcebaseDeleteResponse>;
  IIoRestorecommerceOstorageDeleteRequest: IIoRestorecommerceOstorageDeleteRequest;
  ProtoIoRestorecommerceOstorageCopyResponseList: ResolverTypeWrapper<ProtoIoRestorecommerceOstorageCopyResponseList>;
  IoRestorecommerceOstorageCopyResponseList: ResolverTypeWrapper<IoRestorecommerceOstorageCopyResponseList>;
  IoRestorecommerceOstorageCopyResponsePayloadWithStatus: ResolverTypeWrapper<IoRestorecommerceOstorageCopyResponsePayloadWithStatus>;
  IoRestorecommerceOstorageCopyResponseItem: ResolverTypeWrapper<IoRestorecommerceOstorageCopyResponseItem>;
  IIoRestorecommerceOstorageCopyRequestList: IIoRestorecommerceOstorageCopyRequestList;
  IIoRestorecommerceOstorageCopyRequestItem: IIoRestorecommerceOstorageCopyRequestItem;
  ProtoIoRestorecommerceOstorageMoveResponseList: ResolverTypeWrapper<ProtoIoRestorecommerceOstorageMoveResponseList>;
  IoRestorecommerceOstorageMoveResponseList: ResolverTypeWrapper<IoRestorecommerceOstorageMoveResponseList>;
  IoRestorecommerceOstorageMoveResponsePayloadWithStatus: ResolverTypeWrapper<IoRestorecommerceOstorageMoveResponsePayloadWithStatus>;
  IoRestorecommerceOstorageMoveResponseItem: ResolverTypeWrapper<IoRestorecommerceOstorageMoveResponseItem>;
  IIoRestorecommerceOstorageMoveRequestList: IIoRestorecommerceOstorageMoveRequestList;
  IIoRestorecommerceOstorageMoveRequestItem: IIoRestorecommerceOstorageMoveRequestItem;
  Subscription: ResolverTypeWrapper<{}>;
  SubscriptionOutput: ResolverTypeWrapper<SubscriptionOutput>;
  SubscriptionAction: SubscriptionAction;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  OstorageQuery: OstorageQuery;
  OstorageObjectQuery: OstorageObjectQuery;
  ProtoIoRestorecommerceOstorageObjectResponse: ProtoIoRestorecommerceOstorageObjectResponse;
  IoRestorecommerceOstorageObjectResponse: IoRestorecommerceOstorageObjectResponse;
  IoRestorecommerceOstorageObjectResponsePayloadWithStatus: IoRestorecommerceOstorageObjectResponsePayloadWithStatus;
  IoRestorecommerceOstorageObjectResponsePayload: IoRestorecommerceOstorageObjectResponsePayload;
  String: Scalars['String'];
  TodoScalar: Scalars['TodoScalar'];
  IoRestorecommerceMetaMeta: IoRestorecommerceMetaMeta;
  Float: Scalars['Float'];
  IoRestorecommerceAttributeAttribute: IoRestorecommerceAttributeAttribute;
  IoRestorecommerceAttributeAttributeObj: IoRestorecommerceAttributeAttributeObj;
  IoRestorecommerceOstorageOptions: IoRestorecommerceOstorageOptions;
  Int: Scalars['Int'];
  GoogleProtobufAny: GoogleProtobufAny;
  GoogleProtobufAnyValue: Scalars['GoogleProtobufAnyValue'];
  IoRestorecommerceStatusStatus: IoRestorecommerceStatusStatus;
  IoRestorecommerceStatusOperationStatus: IoRestorecommerceStatusOperationStatus;
  IIoRestorecommerceOstorageGetRequest: IIoRestorecommerceOstorageGetRequest;
  Boolean: Scalars['Boolean'];
  ProtoIoRestorecommerceOstorageListResponse: ProtoIoRestorecommerceOstorageListResponse;
  IoRestorecommerceOstorageListResponse: IoRestorecommerceOstorageListResponse;
  IoRestorecommerceOstorageObjectsDataWithPayloadStatus: IoRestorecommerceOstorageObjectsDataWithPayloadStatus;
  IoRestorecommerceOstorageObjectData: IoRestorecommerceOstorageObjectData;
  IIoRestorecommerceOstorageListRequest: IIoRestorecommerceOstorageListRequest;
  IIoRestorecommerceFilterFilterOp: IIoRestorecommerceFilterFilterOp;
  IIoRestorecommerceFilterFilter: IIoRestorecommerceFilterFilter;
  Mutation: {};
  OstorageMutation: OstorageMutation;
  OstorageObjectMutation: OstorageObjectMutation;
  ProtoIoRestorecommerceOstoragePutResponse: ProtoIoRestorecommerceOstoragePutResponse;
  IoRestorecommerceOstoragePutResponse: IoRestorecommerceOstoragePutResponse;
  IoRestorecommerceOstoragePutResponseWithPayloadStatus: IoRestorecommerceOstoragePutResponseWithPayloadStatus;
  IoRestorecommerceOstorageResponse: IoRestorecommerceOstorageResponse;
  IIoRestorecommerceOstorageObject: IIoRestorecommerceOstorageObject;
  Upload: Scalars['Upload'];
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceAttributeAttributeObj: IIoRestorecommerceAttributeAttributeObj;
  IIoRestorecommerceOstorageOptions: IIoRestorecommerceOstorageOptions;
  IGoogleProtobufAny: IGoogleProtobufAny;
  ProtoIoRestorecommerceResourcebaseDeleteResponse: ProtoIoRestorecommerceResourcebaseDeleteResponse;
  IoRestorecommerceResourcebaseDeleteResponse: IoRestorecommerceResourcebaseDeleteResponse;
  IIoRestorecommerceOstorageDeleteRequest: IIoRestorecommerceOstorageDeleteRequest;
  ProtoIoRestorecommerceOstorageCopyResponseList: ProtoIoRestorecommerceOstorageCopyResponseList;
  IoRestorecommerceOstorageCopyResponseList: IoRestorecommerceOstorageCopyResponseList;
  IoRestorecommerceOstorageCopyResponsePayloadWithStatus: IoRestorecommerceOstorageCopyResponsePayloadWithStatus;
  IoRestorecommerceOstorageCopyResponseItem: IoRestorecommerceOstorageCopyResponseItem;
  IIoRestorecommerceOstorageCopyRequestList: IIoRestorecommerceOstorageCopyRequestList;
  IIoRestorecommerceOstorageCopyRequestItem: IIoRestorecommerceOstorageCopyRequestItem;
  ProtoIoRestorecommerceOstorageMoveResponseList: ProtoIoRestorecommerceOstorageMoveResponseList;
  IoRestorecommerceOstorageMoveResponseList: IoRestorecommerceOstorageMoveResponseList;
  IoRestorecommerceOstorageMoveResponsePayloadWithStatus: IoRestorecommerceOstorageMoveResponsePayloadWithStatus;
  IoRestorecommerceOstorageMoveResponseItem: IoRestorecommerceOstorageMoveResponseItem;
  IIoRestorecommerceOstorageMoveRequestList: IIoRestorecommerceOstorageMoveRequestList;
  IIoRestorecommerceOstorageMoveRequestItem: IIoRestorecommerceOstorageMoveRequestItem;
  Subscription: {};
  SubscriptionOutput: SubscriptionOutput;
}>;

export type QueryResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  ostorage?: Resolver<ResolversTypes['OstorageQuery'], ParentType, ContextType>;
}>;

export type OstorageQueryResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['OstorageQuery'] = ResolversParentTypes['OstorageQuery']> = ResolversObject<{
  object?: Resolver<ResolversTypes['OstorageObjectQuery'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OstorageObjectQueryResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['OstorageObjectQuery'] = ResolversParentTypes['OstorageObjectQuery']> = ResolversObject<{
  Get?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOstorageObjectResponse']>, ParentType, ContextType, RequireFields<OstorageObjectQueryGetArgs, 'input'>>;
  List?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOstorageListResponse']>, ParentType, ContextType, RequireFields<OstorageObjectQueryListArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceOstorageObjectResponseResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceOstorageObjectResponse'] = ResolversParentTypes['ProtoIoRestorecommerceOstorageObjectResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOstorageObjectResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOstorageObjectResponseResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceOstorageObjectResponse'] = ResolversParentTypes['IoRestorecommerceOstorageObjectResponse']> = ResolversObject<{
  response?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOstorageObjectResponsePayloadWithStatus']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOstorageObjectResponsePayloadWithStatusResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceOstorageObjectResponsePayloadWithStatus'] = ResolversParentTypes['IoRestorecommerceOstorageObjectResponsePayloadWithStatus']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOstorageObjectResponsePayload']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOstorageObjectResponsePayloadResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceOstorageObjectResponsePayload'] = ResolversParentTypes['IoRestorecommerceOstorageObjectResponsePayload']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bucket?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  object?: Resolver<Maybe<ResolversTypes['TodoScalar']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  options?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOstorageOptions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface TodoScalarScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['TodoScalar'], any> {
  name: 'TodoScalar';
}

export type IoRestorecommerceMetaMetaResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceMetaMeta'] = ResolversParentTypes['IoRestorecommerceMetaMeta']> = ResolversObject<{
  created?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  modified?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  modifiedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owners?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  acls?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttributeObj']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAttributeAttributeResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttribute'] = ResolversParentTypes['IoRestorecommerceAttributeAttribute']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attributes?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAttributeAttributeObjResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttributeObj'] = ResolversParentTypes['IoRestorecommerceAttributeAttributeObj']> = ResolversObject<{
  attributes?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAttributeAttribute']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOstorageOptionsResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceOstorageOptions'] = ResolversParentTypes['IoRestorecommerceOstorageOptions']> = ResolversObject<{
  encoding?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentLanguage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentDisposition?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  md5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['GoogleProtobufAny']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GoogleProtobufAnyResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['GoogleProtobufAny'] = ResolversParentTypes['GoogleProtobufAny']> = ResolversObject<{
  typeUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['GoogleProtobufAnyValue']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface GoogleProtobufAnyValueScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GoogleProtobufAnyValue'], any> {
  name: 'GoogleProtobufAnyValue';
}

export type IoRestorecommerceStatusStatusResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusStatus'] = ResolversParentTypes['IoRestorecommerceStatusStatus']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceStatusOperationStatusResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusOperationStatus'] = ResolversParentTypes['IoRestorecommerceStatusOperationStatus']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceOstorageListResponseResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceOstorageListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceOstorageListResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOstorageListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOstorageListResponseResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceOstorageListResponse'] = ResolversParentTypes['IoRestorecommerceOstorageListResponse']> = ResolversObject<{
  responses?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceOstorageObjectsDataWithPayloadStatus']>>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOstorageObjectsDataWithPayloadStatusResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceOstorageObjectsDataWithPayloadStatus'] = ResolversParentTypes['IoRestorecommerceOstorageObjectsDataWithPayloadStatus']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOstorageObjectData']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOstorageObjectDataResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceOstorageObjectData'] = ResolversParentTypes['IoRestorecommerceOstorageObjectData']> = ResolversObject<{
  objectName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFilterFilterOperationResolvers = { eq: 0, lt: 1, lte: 2, gt: 3, gte: 4, isEmpty: 5, iLike: 6, in: 7, neq: 8 };

export type IoRestorecommerceFilterFilterValueTypeResolvers = { STRING: 0, NUMBER: 1, BOOLEAN: 2, DATE: 3, ARRAY: 4 };

export type IoRestorecommerceFilterFilterOpOperatorResolvers = { and: 0, or: 1 };

export type MutationResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  ostorage?: Resolver<ResolversTypes['OstorageMutation'], ParentType, ContextType>;
}>;

export type OstorageMutationResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['OstorageMutation'] = ResolversParentTypes['OstorageMutation']> = ResolversObject<{
  object?: Resolver<ResolversTypes['OstorageObjectMutation'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OstorageObjectMutationResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['OstorageObjectMutation'] = ResolversParentTypes['OstorageObjectMutation']> = ResolversObject<{
  Put?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOstoragePutResponse']>, ParentType, ContextType, RequireFields<OstorageObjectMutationPutArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<OstorageObjectMutationDeleteArgs, 'input'>>;
  Copy?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOstorageCopyResponseList']>, ParentType, ContextType, RequireFields<OstorageObjectMutationCopyArgs, 'input'>>;
  Move?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOstorageMoveResponseList']>, ParentType, ContextType, RequireFields<OstorageObjectMutationMoveArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceOstoragePutResponseResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceOstoragePutResponse'] = ResolversParentTypes['ProtoIoRestorecommerceOstoragePutResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOstoragePutResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOstoragePutResponseResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceOstoragePutResponse'] = ResolversParentTypes['IoRestorecommerceOstoragePutResponse']> = ResolversObject<{
  response?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOstoragePutResponseWithPayloadStatus']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOstoragePutResponseWithPayloadStatusResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceOstoragePutResponseWithPayloadStatus'] = ResolversParentTypes['IoRestorecommerceOstoragePutResponseWithPayloadStatus']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOstorageResponse']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOstorageResponseResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceOstorageResponse'] = ResolversParentTypes['IoRestorecommerceOstorageResponse']> = ResolversObject<{
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bucket?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type ProtoIoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse'] = ResolversParentTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceResourcebaseDeleteResponse'] = ResolversParentTypes['IoRestorecommerceResourcebaseDeleteResponse']> = ResolversObject<{
  status?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceStatusStatus']>>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceOstorageCopyResponseListResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceOstorageCopyResponseList'] = ResolversParentTypes['ProtoIoRestorecommerceOstorageCopyResponseList']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOstorageCopyResponseList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOstorageCopyResponseListResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceOstorageCopyResponseList'] = ResolversParentTypes['IoRestorecommerceOstorageCopyResponseList']> = ResolversObject<{
  responses?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceOstorageCopyResponsePayloadWithStatus']>>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOstorageCopyResponsePayloadWithStatusResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceOstorageCopyResponsePayloadWithStatus'] = ResolversParentTypes['IoRestorecommerceOstorageCopyResponsePayloadWithStatus']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOstorageCopyResponseItem']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOstorageCopyResponseItemResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceOstorageCopyResponseItem'] = ResolversParentTypes['IoRestorecommerceOstorageCopyResponseItem']> = ResolversObject<{
  bucket?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  copySource?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  options?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOstorageOptions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceOstorageMoveResponseListResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceOstorageMoveResponseList'] = ResolversParentTypes['ProtoIoRestorecommerceOstorageMoveResponseList']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOstorageMoveResponseList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOstorageMoveResponseListResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceOstorageMoveResponseList'] = ResolversParentTypes['IoRestorecommerceOstorageMoveResponseList']> = ResolversObject<{
  responses?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceOstorageMoveResponsePayloadWithStatus']>>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOstorageMoveResponsePayloadWithStatusResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceOstorageMoveResponsePayloadWithStatus'] = ResolversParentTypes['IoRestorecommerceOstorageMoveResponsePayloadWithStatus']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOstorageMoveResponseItem']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOstorageMoveResponseItemResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceOstorageMoveResponseItem'] = ResolversParentTypes['IoRestorecommerceOstorageMoveResponseItem']> = ResolversObject<{
  bucket?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sourceObject?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  options?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOstorageOptions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  orderingOrders?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "orderingOrders", ParentType, ContextType, Partial<SubscriptionOrderingOrdersArgs>>;
  catalogProducts?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "catalogProducts", ParentType, ContextType, Partial<SubscriptionCatalogProductsArgs>>;
  fulfillmentFulfillments?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "fulfillmentFulfillments", ParentType, ContextType, Partial<SubscriptionFulfillmentFulfillmentsArgs>>;
  fulfillmentFulfillmentCouriers?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "fulfillmentFulfillmentCouriers", ParentType, ContextType, Partial<SubscriptionFulfillmentFulfillmentCouriersArgs>>;
  fulfillmentFulfillment_products?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "fulfillmentFulfillment_products", ParentType, ContextType, Partial<SubscriptionFulfillmentFulfillment_ProductsArgs>>;
}>;

export type SubscriptionOutputResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['SubscriptionOutput'] = ResolversParentTypes['SubscriptionOutput']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = OstorageContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  OstorageQuery?: OstorageQueryResolvers<ContextType>;
  OstorageObjectQuery?: OstorageObjectQueryResolvers<ContextType>;
  ProtoIoRestorecommerceOstorageObjectResponse?: ProtoIoRestorecommerceOstorageObjectResponseResolvers<ContextType>;
  IoRestorecommerceOstorageObjectResponse?: IoRestorecommerceOstorageObjectResponseResolvers<ContextType>;
  IoRestorecommerceOstorageObjectResponsePayloadWithStatus?: IoRestorecommerceOstorageObjectResponsePayloadWithStatusResolvers<ContextType>;
  IoRestorecommerceOstorageObjectResponsePayload?: IoRestorecommerceOstorageObjectResponsePayloadResolvers<ContextType>;
  TodoScalar?: GraphQLScalarType;
  IoRestorecommerceMetaMeta?: IoRestorecommerceMetaMetaResolvers<ContextType>;
  IoRestorecommerceAttributeAttribute?: IoRestorecommerceAttributeAttributeResolvers<ContextType>;
  IoRestorecommerceAttributeAttributeObj?: IoRestorecommerceAttributeAttributeObjResolvers<ContextType>;
  IoRestorecommerceOstorageOptions?: IoRestorecommerceOstorageOptionsResolvers<ContextType>;
  GoogleProtobufAny?: GoogleProtobufAnyResolvers<ContextType>;
  GoogleProtobufAnyValue?: GraphQLScalarType;
  IoRestorecommerceStatusStatus?: IoRestorecommerceStatusStatusResolvers<ContextType>;
  IoRestorecommerceStatusOperationStatus?: IoRestorecommerceStatusOperationStatusResolvers<ContextType>;
  ProtoIoRestorecommerceOstorageListResponse?: ProtoIoRestorecommerceOstorageListResponseResolvers<ContextType>;
  IoRestorecommerceOstorageListResponse?: IoRestorecommerceOstorageListResponseResolvers<ContextType>;
  IoRestorecommerceOstorageObjectsDataWithPayloadStatus?: IoRestorecommerceOstorageObjectsDataWithPayloadStatusResolvers<ContextType>;
  IoRestorecommerceOstorageObjectData?: IoRestorecommerceOstorageObjectDataResolvers<ContextType>;
  IoRestorecommerceFilterFilterOperation?: IoRestorecommerceFilterFilterOperationResolvers;
  IoRestorecommerceFilterFilterValueType?: IoRestorecommerceFilterFilterValueTypeResolvers;
  IoRestorecommerceFilterFilterOpOperator?: IoRestorecommerceFilterFilterOpOperatorResolvers;
  Mutation?: MutationResolvers<ContextType>;
  OstorageMutation?: OstorageMutationResolvers<ContextType>;
  OstorageObjectMutation?: OstorageObjectMutationResolvers<ContextType>;
  ProtoIoRestorecommerceOstoragePutResponse?: ProtoIoRestorecommerceOstoragePutResponseResolvers<ContextType>;
  IoRestorecommerceOstoragePutResponse?: IoRestorecommerceOstoragePutResponseResolvers<ContextType>;
  IoRestorecommerceOstoragePutResponseWithPayloadStatus?: IoRestorecommerceOstoragePutResponseWithPayloadStatusResolvers<ContextType>;
  IoRestorecommerceOstorageResponse?: IoRestorecommerceOstorageResponseResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  ProtoIoRestorecommerceResourcebaseDeleteResponse?: ProtoIoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType>;
  IoRestorecommerceResourcebaseDeleteResponse?: IoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType>;
  ProtoIoRestorecommerceOstorageCopyResponseList?: ProtoIoRestorecommerceOstorageCopyResponseListResolvers<ContextType>;
  IoRestorecommerceOstorageCopyResponseList?: IoRestorecommerceOstorageCopyResponseListResolvers<ContextType>;
  IoRestorecommerceOstorageCopyResponsePayloadWithStatus?: IoRestorecommerceOstorageCopyResponsePayloadWithStatusResolvers<ContextType>;
  IoRestorecommerceOstorageCopyResponseItem?: IoRestorecommerceOstorageCopyResponseItemResolvers<ContextType>;
  ProtoIoRestorecommerceOstorageMoveResponseList?: ProtoIoRestorecommerceOstorageMoveResponseListResolvers<ContextType>;
  IoRestorecommerceOstorageMoveResponseList?: IoRestorecommerceOstorageMoveResponseListResolvers<ContextType>;
  IoRestorecommerceOstorageMoveResponsePayloadWithStatus?: IoRestorecommerceOstorageMoveResponsePayloadWithStatusResolvers<ContextType>;
  IoRestorecommerceOstorageMoveResponseItem?: IoRestorecommerceOstorageMoveResponseItemResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  SubscriptionOutput?: SubscriptionOutputResolvers<ContextType>;
}>;

