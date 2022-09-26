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
  GoogleProtobufAnyValue: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  indexing: IndexingMutation;
};

export type IndexingMutation = {
  __typename?: 'IndexingMutation';
  search: IndexingSearchMutation;
};

export type IndexingSearchMutation = {
  __typename?: 'IndexingSearchMutation';
  Search?: Maybe<ProtoIoRestorecommerceSearchSearchResponse>;
};


export type IndexingSearchMutationSearchArgs = {
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
  value?: Maybe<Scalars['GoogleProtobufAnyValue']>;
};

export type IIoRestorecommerceSearchSearchRequest = {
  collection?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  acl?: InputMaybe<Array<Scalars['String']>>;
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
  Mutation: ResolverTypeWrapper<{}>;
  IndexingMutation: ResolverTypeWrapper<IndexingMutation>;
  IndexingSearchMutation: ResolverTypeWrapper<IndexingSearchMutation>;
  ProtoIoRestorecommerceSearchSearchResponse: ResolverTypeWrapper<ProtoIoRestorecommerceSearchSearchResponse>;
  IoRestorecommerceSearchSearchResponse: ResolverTypeWrapper<IoRestorecommerceSearchSearchResponse>;
  GoogleProtobufAny: ResolverTypeWrapper<GoogleProtobufAny>;
  String: ResolverTypeWrapper<Scalars['String']>;
  GoogleProtobufAnyValue: ResolverTypeWrapper<Scalars['GoogleProtobufAnyValue']>;
  IIoRestorecommerceSearchSearchRequest: IIoRestorecommerceSearchSearchRequest;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Mutation: {};
  IndexingMutation: IndexingMutation;
  IndexingSearchMutation: IndexingSearchMutation;
  ProtoIoRestorecommerceSearchSearchResponse: ProtoIoRestorecommerceSearchSearchResponse;
  IoRestorecommerceSearchSearchResponse: IoRestorecommerceSearchSearchResponse;
  GoogleProtobufAny: GoogleProtobufAny;
  String: Scalars['String'];
  GoogleProtobufAnyValue: Scalars['GoogleProtobufAnyValue'];
  IIoRestorecommerceSearchSearchRequest: IIoRestorecommerceSearchSearchRequest;
  Boolean: Scalars['Boolean'];
}>;

export type MutationResolvers<ContextType = IndexingContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  indexing?: Resolver<ResolversTypes['IndexingMutation'], ParentType, ContextType>;
}>;

export type IndexingMutationResolvers<ContextType = IndexingContext, ParentType extends ResolversParentTypes['IndexingMutation'] = ResolversParentTypes['IndexingMutation']> = ResolversObject<{
  search?: Resolver<ResolversTypes['IndexingSearchMutation'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IndexingSearchMutationResolvers<ContextType = IndexingContext, ParentType extends ResolversParentTypes['IndexingSearchMutation'] = ResolversParentTypes['IndexingSearchMutation']> = ResolversObject<{
  Search?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceSearchSearchResponse']>, ParentType, ContextType, RequireFields<IndexingSearchMutationSearchArgs, 'input'>>;
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
  value?: Resolver<Maybe<ResolversTypes['GoogleProtobufAnyValue']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface GoogleProtobufAnyValueScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GoogleProtobufAnyValue'], any> {
  name: 'GoogleProtobufAnyValue';
}

export type Resolvers<ContextType = IndexingContext> = ResolversObject<{
  Mutation?: MutationResolvers<ContextType>;
  IndexingMutation?: IndexingMutationResolvers<ContextType>;
  IndexingSearchMutation?: IndexingSearchMutationResolvers<ContextType>;
  ProtoIoRestorecommerceSearchSearchResponse?: ProtoIoRestorecommerceSearchSearchResponseResolvers<ContextType>;
  IoRestorecommerceSearchSearchResponse?: IoRestorecommerceSearchSearchResponseResolvers<ContextType>;
  GoogleProtobufAny?: GoogleProtobufAnyResolvers<ContextType>;
  GoogleProtobufAnyValue?: GraphQLScalarType;
}>;

