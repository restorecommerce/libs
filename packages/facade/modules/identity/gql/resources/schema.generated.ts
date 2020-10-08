import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { IdentityContext } from '../interfaces';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  Date: any;
};

/** The root of all queries */
export type Query = {
  __typename?: 'Query';
  getAllTimezones?: Maybe<OutputTimezoneType>;
};


/** The root of all queries */
export type QueryGetAllTimezonesArgs = {
  input?: Maybe<QueryAllInputType>;
};

/** Timezone output description */
export type OutputTimezoneType = {
  __typename?: 'OutputTimezoneType';
  payload: Array<TimezoneType>;
  status?: Maybe<StatusType>;
};

/** Timezone proto description */
export type TimezoneType = {
  __typename?: 'TimezoneType';
  id: Scalars['String'];
  value: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  /** Meta info */
  meta?: Maybe<MetaType>;
};

/** Meta info common to all resources */
export type MetaType = {
  __typename?: 'MetaType';
  /** Creation timestamp */
  created: Scalars['Date'];
  /** Last-modification timestamp */
  modified: Scalars['Date'];
  /** UUID from last User who modified the resource */
  modified_by?: Maybe<Scalars['String']>;
  /** A list of attributes describing the owner's entities */
  owner?: Maybe<Array<Attribute>>;
};


/** An ID-value attribute */
export type Attribute = {
  __typename?: 'Attribute';
  /** Attribute ID */
  id: Scalars['String'];
  /** Attribute value */
  value: Scalars['String'];
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

export type QueryAllInputType = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<Array<FilterOptionsInputType>>;
  sort?: Maybe<SortInputType>;
  scope?: Maybe<ScopeInputType>;
};

/** Filter options */
export type FilterOptionsInputType = {
  /** Field names based on which the filtering needs to be done */
  field: Scalars['String'];
  /** Filter Operation options */
  operation: FilterOperationEnumType;
  /** Field value */
  value: Scalars['String'];
  /** Value type (optional, default is STRING) */
  type?: Maybe<FilterFieldValueEnumType>;
};

/** Filters the fields based on the operation specified */
export enum FilterOperationEnumType {
  /** Filter fields lesser than the the specified value */
  Lt = 'lt',
  /** Filter fields lesser than or equal to the the specified value */
  Lte = 'lte',
  /** Filter fields greater than the the specified value */
  Gt = 'gt',
  /** Filter fields greater than or equal to the the specified value */
  Gte = 'gte',
  /** Filter fields exactly equal to the the specified value */
  Eq = 'eq',
  /** Filter fields exactly equal to the the specified value */
  IsEmpty = 'isEmpty'
}

export enum FilterFieldValueEnumType {
  String = 'STRING',
  Boolean = 'BOOLEAN',
  Number = 'NUMBER',
  Date = 'DATE'
}

/** For sotring based on fileds */
export type SortInputType = {
  /** Field names to be sorted on */
  field: Scalars['String'];
  /** Sorting Options */
  order?: Maybe<SortEnumType>;
};

/** Sorts the fields in either Ascending or Descending order */
export enum SortEnumType {
  /** Sort in Ascending order */
  Asc = 'ASC',
  /** Sort in Descending order */
  Desc = 'DESC'
}

/** A role scope */
export type ScopeInputType = {
  entity?: Maybe<Scalars['String']>;
  instance?: Maybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

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
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  OutputTimezoneType: ResolverTypeWrapper<OutputTimezoneType>;
  TimezoneType: ResolverTypeWrapper<TimezoneType>;
  String: ResolverTypeWrapper<Scalars['String']>;
  MetaType: ResolverTypeWrapper<MetaType>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Attribute: ResolverTypeWrapper<Attribute>;
  StatusType: ResolverTypeWrapper<StatusType>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  QueryAllInputType: QueryAllInputType;
  FilterOptionsInputType: FilterOptionsInputType;
  FilterOperationEnumType: FilterOperationEnumType;
  FilterFieldValueEnumType: FilterFieldValueEnumType;
  SortInputType: SortInputType;
  SortEnumType: SortEnumType;
  ScopeInputType: ScopeInputType;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  OutputTimezoneType: OutputTimezoneType;
  TimezoneType: TimezoneType;
  String: Scalars['String'];
  MetaType: MetaType;
  Date: Scalars['Date'];
  Attribute: Attribute;
  StatusType: StatusType;
  Int: Scalars['Int'];
  QueryAllInputType: QueryAllInputType;
  FilterOptionsInputType: FilterOptionsInputType;
  SortInputType: SortInputType;
  ScopeInputType: ScopeInputType;
  Boolean: Scalars['Boolean'];
};

export type QueryResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getAllTimezones?: Resolver<Maybe<ResolversTypes['OutputTimezoneType']>, ParentType, ContextType, RequireFields<QueryGetAllTimezonesArgs, never>>;
};

export type OutputTimezoneTypeResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['OutputTimezoneType'] = ResolversParentTypes['OutputTimezoneType']> = {
  payload?: Resolver<Array<ResolversTypes['TimezoneType']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['StatusType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TimezoneTypeResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['TimezoneType'] = ResolversParentTypes['TimezoneType']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['MetaType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MetaTypeResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['MetaType'] = ResolversParentTypes['MetaType']> = {
  created?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  modified?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  modified_by?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<Array<ResolversTypes['Attribute']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type AttributeResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['Attribute'] = ResolversParentTypes['Attribute']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StatusTypeResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['StatusType'] = ResolversParentTypes['StatusType']> = {
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = IdentityContext> = {
  Query?: QueryResolvers<ContextType>;
  OutputTimezoneType?: OutputTimezoneTypeResolvers<ContextType>;
  TimezoneType?: TimezoneTypeResolvers<ContextType>;
  MetaType?: MetaTypeResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Attribute?: AttributeResolvers<ContextType>;
  StatusType?: StatusTypeResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = IdentityContext> = Resolvers<ContextType>;
