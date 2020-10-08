import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import {  } from '../../../interfaces';
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

export type RootQuery = {
  __typename?: 'RootQuery';
  getAllTimezones: OutputTimezoneType;
};


export type RootQueryGetAllTimezonesArgs = {
  input?: Maybe<DefaultListQueryArgsInput>;
};

export type DefaultListQueryArgsInput = {
  filter?: Maybe<Array<FilterOptsInput>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortOptsInput>;
  scope?: Maybe<ScopeInput>;
};

/** A role scope */
export type ScopeInput = {
  entity?: Maybe<Scalars['String']>;
  instance?: Maybe<Scalars['String']>;
};

/** Filter options */
export type FilterOptsInput = {
  /** Field names based on which the filtering needs to be done */
  field: Scalars['String'];
  /** Filter Operation options */
  operation: FilterOperation;
  /** Field value */
  value: Scalars['String'];
  /** Value type (optional, default is STRING) */
  type?: Maybe<FilterFieldValue>;
};

/** Filters the fields based on the operation specified */
export enum FilterOperation {
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
  /** Filter fields which are empty */
  IsEmpty = 'isEmpty',
  /** Filter fields which are in */
  In = 'in',
  /** Filter fields which are like the specified value but match case-insensitive */
  ILike = 'iLike'
}

export enum FilterFieldValue {
  String = 'STRING',
  Boolean = 'BOOLEAN',
  Number = 'NUMBER',
  Date = 'DATE',
  Array = 'ARRAY'
}

/** For string based on fileds */
export type SortOptsInput = {
  /** Field names to be sorted on */
  field: Scalars['String'];
  /** Sorting Options */
  order?: Maybe<SortingOrder>;
};

/** Sorts the fields in either Ascending or Descending order */
export enum SortingOrder {
  /** Sort in Ascending order */
  Asc = 'ASC',
  /** Sort in Descending order */
  Desc = 'DESC'
}

export type OutputTimezoneType = {
  __typename?: 'OutputTimezoneType';
  payload: Array<TimezoneType>;
  status: Status;
  meta: Meta;
};

export type TimezoneType = {
  __typename?: 'TimezoneType';
  id: Scalars['String'];
  value: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  meta: Meta;
};

/** Status of a response */
export type Status = {
  __typename?: 'Status';
  key: Scalars['String'];
  code: Scalars['Int'];
  message?: Maybe<Scalars['String']>;
};

/** Meta information about a resource */
export type Meta = {
  __typename?: 'Meta';
  /** Creation timestamp */
  created?: Maybe<Scalars['Date']>;
  /** Last-modification timestamp */
  modified?: Maybe<Scalars['Date']>;
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

export type Mutation = {
  __typename?: 'Mutation';
  x?: Maybe<Scalars['String']>;
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
  RootQuery: ResolverTypeWrapper<{}>;
  DefaultListQueryArgsInput: DefaultListQueryArgsInput;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  ScopeInput: ScopeInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  FilterOptsInput: FilterOptsInput;
  FilterOperation: FilterOperation;
  FilterFieldValue: FilterFieldValue;
  SortOptsInput: SortOptsInput;
  SortingOrder: SortingOrder;
  OutputTimezoneType: ResolverTypeWrapper<OutputTimezoneType>;
  TimezoneType: ResolverTypeWrapper<TimezoneType>;
  Status: ResolverTypeWrapper<Status>;
  Meta: ResolverTypeWrapper<Meta>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Attribute: ResolverTypeWrapper<Attribute>;
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  RootQuery: {};
  DefaultListQueryArgsInput: DefaultListQueryArgsInput;
  Int: Scalars['Int'];
  ScopeInput: ScopeInput;
  String: Scalars['String'];
  FilterOptsInput: FilterOptsInput;
  SortOptsInput: SortOptsInput;
  OutputTimezoneType: OutputTimezoneType;
  TimezoneType: TimezoneType;
  Status: Status;
  Meta: Meta;
  Date: Scalars['Date'];
  Attribute: Attribute;
  Mutation: {};
  Boolean: Scalars['Boolean'];
};

export type RootQueryResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['RootQuery'] = ResolversParentTypes['RootQuery']> = {
  getAllTimezones?: Resolver<ResolversTypes['OutputTimezoneType'], ParentType, ContextType, RequireFields<RootQueryGetAllTimezonesArgs, never>>;
};

export type OutputTimezoneTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['OutputTimezoneType'] = ResolversParentTypes['OutputTimezoneType']> = {
  payload?: Resolver<Array<ResolversTypes['TimezoneType']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Status'], ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['Meta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TimezoneTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['TimezoneType'] = ResolversParentTypes['TimezoneType']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['Meta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StatusResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['Status'] = ResolversParentTypes['Status']> = {
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MetaResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['Meta'] = ResolversParentTypes['Meta']> = {
  created?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  modified?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  modified_by?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<Array<ResolversTypes['Attribute']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type AttributeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['Attribute'] = ResolversParentTypes['Attribute']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  x?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type Resolvers<ContextType = RestoreCommerceBaseContext> = {
  RootQuery?: RootQueryResolvers<ContextType>;
  OutputTimezoneType?: OutputTimezoneTypeResolvers<ContextType>;
  TimezoneType?: TimezoneTypeResolvers<ContextType>;
  Status?: StatusResolvers<ContextType>;
  Meta?: MetaResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Attribute?: AttributeResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = RestoreCommerceBaseContext> = Resolvers<ContextType>;
