import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { IndexingContext } from '../interfaces';
export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
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
};

export type Query = {
  __typename?: 'Query';
  indexing: IndexingQuery;
};

export type IndexingQuery = {
  __typename?: 'IndexingQuery';
  Search?: Maybe<ProtoIoRestorecommerceSearchSearchResponse>;
};


export type IndexingQuerySearchArgs = {
  input: IIoRestorecommerceSearchSearchRequest;
};

export type ProtoIoRestorecommerceSearchSearchResponse = {
  __typename?: 'ProtoIoRestorecommerceSearchSearchResponse';
  details?: Maybe<IoRestorecommerceSearchSearchResponse>;
};

export type IoRestorecommerceSearchSearchResponse = {
  __typename?: 'IoRestorecommerceSearchSearchResponse';
  data?: Maybe<Array<GoogleProtobufAny>>;
};

export type GoogleProtobufAny = {
  __typename?: 'GoogleProtobufAny';
  typeUrl?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['TodoScalar']>;
};

export type IIoRestorecommerceSearchSearchRequest = {
  collection?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  acl?: InputMaybe<Array<Scalars['String']>>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
};

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
  IndexingQuery: ResolverTypeWrapper<IndexingQuery>;
  ProtoIoRestorecommerceSearchSearchResponse: ResolverTypeWrapper<ProtoIoRestorecommerceSearchSearchResponse>;
  IoRestorecommerceSearchSearchResponse: ResolverTypeWrapper<IoRestorecommerceSearchSearchResponse>;
  GoogleProtobufAny: ResolverTypeWrapper<GoogleProtobufAny>;
  String: ResolverTypeWrapper<Scalars['String']>;
  TodoScalar: ResolverTypeWrapper<Scalars['TodoScalar']>;
  IIoRestorecommerceSearchSearchRequest: IIoRestorecommerceSearchSearchRequest;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  IndexingQuery: IndexingQuery;
  ProtoIoRestorecommerceSearchSearchResponse: ProtoIoRestorecommerceSearchSearchResponse;
  IoRestorecommerceSearchSearchResponse: IoRestorecommerceSearchSearchResponse;
  GoogleProtobufAny: GoogleProtobufAny;
  String: Scalars['String'];
  TodoScalar: Scalars['TodoScalar'];
  IIoRestorecommerceSearchSearchRequest: IIoRestorecommerceSearchSearchRequest;
  Boolean: Scalars['Boolean'];
}>;

export type QueryResolvers<ContextType = IndexingContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  indexing?: Resolver<ResolversTypes['IndexingQuery'], ParentType, ContextType>;
}>;

export type IndexingQueryResolvers<ContextType = IndexingContext, ParentType extends ResolversParentTypes['IndexingQuery'] = ResolversParentTypes['IndexingQuery']> = ResolversObject<{
  Search?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceSearchSearchResponse']>, ParentType, ContextType, RequireFields<IndexingQuerySearchArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceSearchSearchResponseResolvers<ContextType = IndexingContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceSearchSearchResponse'] = ResolversParentTypes['ProtoIoRestorecommerceSearchSearchResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceSearchSearchResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceSearchSearchResponseResolvers<ContextType = IndexingContext, ParentType extends ResolversParentTypes['IoRestorecommerceSearchSearchResponse'] = ResolversParentTypes['IoRestorecommerceSearchSearchResponse']> = ResolversObject<{
  data?: Resolver<Maybe<Array<ResolversTypes['GoogleProtobufAny']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GoogleProtobufAnyResolvers<ContextType = IndexingContext, ParentType extends ResolversParentTypes['GoogleProtobufAny'] = ResolversParentTypes['GoogleProtobufAny']> = ResolversObject<{
  typeUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['TodoScalar']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface TodoScalarScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['TodoScalar'], any> {
  name: 'TodoScalar';
}

export type Resolvers<ContextType = IndexingContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  IndexingQuery?: IndexingQueryResolvers<ContextType>;
  ProtoIoRestorecommerceSearchSearchResponse?: ProtoIoRestorecommerceSearchSearchResponseResolvers<ContextType>;
  IoRestorecommerceSearchSearchResponse?: IoRestorecommerceSearchSearchResponseResolvers<ContextType>;
  GoogleProtobufAny?: GoogleProtobufAnyResolvers<ContextType>;
  TodoScalar?: GraphQLScalarType;
}>;

