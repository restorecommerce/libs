import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TimezoneContext } from '../interfaces';
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
  Date: any;
};

/** The root of all queries */
export type Query = {
  __typename?: 'Query';
  readTimezones?: Maybe<ReadTimezone>;
};


/** The root of all queries */
export type QueryReadTimezonesArgs = {
  input: ReadResourcesTimezoneInput;
};

/** TODO */
export type ReadTimezone = {
  __typename?: 'ReadTimezone';
  payload?: Maybe<Array<TimezoneType>>;
  status: StatusType;
};

/** Timezone proto description */
export type TimezoneType = {
  __typename?: 'TimezoneType';
  id: Scalars['ID'];
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

export type ReadResourcesTimezoneInput = {
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
  String = 'string',
  Boolean = 'boolean',
  Number = 'number',
  Date = 'date'
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
  Asc = 'asc',
  /** Sort in Descending order */
  Desc = 'desc'
}

/** A role scope */
export type ScopeInputType = {
  entity?: Maybe<Scalars['String']>;
  instance?: Maybe<Scalars['String']>;
};

/** The root of all queries */
export type Mutation = {
  __typename?: 'Mutation';
  createTimezones?: Maybe<CreateResourcesTimezone>;
  updateTimezones?: Maybe<UpdateResourcesTimezone>;
  deleteTimezones?: Maybe<DeleteResourcesTimezone>;
};


/** The root of all queries */
export type MutationCreateTimezonesArgs = {
  input: CreateResourcesTimezoneInput;
};


/** The root of all queries */
export type MutationUpdateTimezonesArgs = {
  input: UpdateResourcesTimezoneInput;
};


/** The root of all queries */
export type MutationDeleteTimezonesArgs = {
  input: DeleteResourcesTimezoneInput;
};

/** TODO */
export type CreateResourcesTimezone = {
  __typename?: 'CreateResourcesTimezone';
  payload?: Maybe<Array<TimezoneType>>;
  status: StatusType;
};

export type CreateResourcesTimezoneInput = {
  items: Array<TimezoneInputType>;
};

/** Timezone proto description */
export type TimezoneInputType = {
  id: Scalars['ID'];
  value: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  owner?: Maybe<Array<Maybe<InputAttribute>>>;
};

/** Attribute from a Target property */
export type InputAttribute = {
  /** Attribute ID */
  id: Scalars['String'];
  /** Attribute value */
  value: Scalars['String'];
};

/** TODO */
export type UpdateResourcesTimezone = {
  __typename?: 'UpdateResourcesTimezone';
  payload?: Maybe<Array<TimezoneType>>;
  status: StatusType;
};

export type UpdateResourcesTimezoneInput = {
  items: Array<TimezoneInputType>;
};

/** TODO */
export type DeleteResourcesTimezone = {
  __typename?: 'DeleteResourcesTimezone';
  payload?: Maybe<Scalars['Boolean']>;
  status: StatusType;
};

export type DeleteResourcesTimezoneInput = {
  ids: Array<Scalars['ID']>;
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
  ReadTimezone: ResolverTypeWrapper<ReadTimezone>;
  TimezoneType: ResolverTypeWrapper<TimezoneType>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  MetaType: ResolverTypeWrapper<MetaType>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Attribute: ResolverTypeWrapper<Attribute>;
  StatusType: ResolverTypeWrapper<StatusType>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  ReadResourcesTimezoneInput: ReadResourcesTimezoneInput;
  FilterOptionsInputType: FilterOptionsInputType;
  FilterOperationEnumType: FilterOperationEnumType;
  FilterFieldValueEnumType: FilterFieldValueEnumType;
  SortInputType: SortInputType;
  SortEnumType: SortEnumType;
  ScopeInputType: ScopeInputType;
  Mutation: ResolverTypeWrapper<{}>;
  CreateResourcesTimezone: ResolverTypeWrapper<CreateResourcesTimezone>;
  CreateResourcesTimezoneInput: CreateResourcesTimezoneInput;
  TimezoneInputType: TimezoneInputType;
  InputAttribute: InputAttribute;
  UpdateResourcesTimezone: ResolverTypeWrapper<UpdateResourcesTimezone>;
  UpdateResourcesTimezoneInput: UpdateResourcesTimezoneInput;
  DeleteResourcesTimezone: ResolverTypeWrapper<DeleteResourcesTimezone>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  DeleteResourcesTimezoneInput: DeleteResourcesTimezoneInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  ReadTimezone: ReadTimezone;
  TimezoneType: TimezoneType;
  ID: Scalars['ID'];
  String: Scalars['String'];
  MetaType: MetaType;
  Date: Scalars['Date'];
  Attribute: Attribute;
  StatusType: StatusType;
  Int: Scalars['Int'];
  ReadResourcesTimezoneInput: ReadResourcesTimezoneInput;
  FilterOptionsInputType: FilterOptionsInputType;
  SortInputType: SortInputType;
  ScopeInputType: ScopeInputType;
  Mutation: {};
  CreateResourcesTimezone: CreateResourcesTimezone;
  CreateResourcesTimezoneInput: CreateResourcesTimezoneInput;
  TimezoneInputType: TimezoneInputType;
  InputAttribute: InputAttribute;
  UpdateResourcesTimezone: UpdateResourcesTimezone;
  UpdateResourcesTimezoneInput: UpdateResourcesTimezoneInput;
  DeleteResourcesTimezone: DeleteResourcesTimezone;
  Boolean: Scalars['Boolean'];
  DeleteResourcesTimezoneInput: DeleteResourcesTimezoneInput;
}>;

export type QueryResolvers<ContextType = TimezoneContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  readTimezones?: Resolver<Maybe<ResolversTypes['ReadTimezone']>, ParentType, ContextType, RequireFields<QueryReadTimezonesArgs, 'input'>>;
}>;

export type ReadTimezoneResolvers<ContextType = TimezoneContext, ParentType extends ResolversParentTypes['ReadTimezone'] = ResolversParentTypes['ReadTimezone']> = ResolversObject<{
  payload?: Resolver<Maybe<Array<ResolversTypes['TimezoneType']>>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TimezoneTypeResolvers<ContextType = TimezoneContext, ParentType extends ResolversParentTypes['TimezoneType'] = ResolversParentTypes['TimezoneType']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['MetaType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MetaTypeResolvers<ContextType = TimezoneContext, ParentType extends ResolversParentTypes['MetaType'] = ResolversParentTypes['MetaType']> = ResolversObject<{
  created?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  modified?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  modified_by?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<Array<ResolversTypes['Attribute']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type AttributeResolvers<ContextType = TimezoneContext, ParentType extends ResolversParentTypes['Attribute'] = ResolversParentTypes['Attribute']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StatusTypeResolvers<ContextType = TimezoneContext, ParentType extends ResolversParentTypes['StatusType'] = ResolversParentTypes['StatusType']> = ResolversObject<{
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FilterFieldValueEnumTypeResolvers = { STRING: 'string', BOOLEAN: 'boolean', NUMBER: 'number', DATE: 'date' };

export type SortEnumTypeResolvers = { ASC: 'asc', DESC: 'desc' };

export type MutationResolvers<ContextType = TimezoneContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createTimezones?: Resolver<Maybe<ResolversTypes['CreateResourcesTimezone']>, ParentType, ContextType, RequireFields<MutationCreateTimezonesArgs, 'input'>>;
  updateTimezones?: Resolver<Maybe<ResolversTypes['UpdateResourcesTimezone']>, ParentType, ContextType, RequireFields<MutationUpdateTimezonesArgs, 'input'>>;
  deleteTimezones?: Resolver<Maybe<ResolversTypes['DeleteResourcesTimezone']>, ParentType, ContextType, RequireFields<MutationDeleteTimezonesArgs, 'input'>>;
}>;

export type CreateResourcesTimezoneResolvers<ContextType = TimezoneContext, ParentType extends ResolversParentTypes['CreateResourcesTimezone'] = ResolversParentTypes['CreateResourcesTimezone']> = ResolversObject<{
  payload?: Resolver<Maybe<Array<ResolversTypes['TimezoneType']>>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateResourcesTimezoneResolvers<ContextType = TimezoneContext, ParentType extends ResolversParentTypes['UpdateResourcesTimezone'] = ResolversParentTypes['UpdateResourcesTimezone']> = ResolversObject<{
  payload?: Resolver<Maybe<Array<ResolversTypes['TimezoneType']>>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DeleteResourcesTimezoneResolvers<ContextType = TimezoneContext, ParentType extends ResolversParentTypes['DeleteResourcesTimezone'] = ResolversParentTypes['DeleteResourcesTimezone']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = TimezoneContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  ReadTimezone?: ReadTimezoneResolvers<ContextType>;
  TimezoneType?: TimezoneTypeResolvers<ContextType>;
  MetaType?: MetaTypeResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Attribute?: AttributeResolvers<ContextType>;
  StatusType?: StatusTypeResolvers<ContextType>;
  FilterFieldValueEnumType?: FilterFieldValueEnumTypeResolvers;
  SortEnumType?: SortEnumTypeResolvers;
  Mutation?: MutationResolvers<ContextType>;
  CreateResourcesTimezone?: CreateResourcesTimezoneResolvers<ContextType>;
  UpdateResourcesTimezone?: UpdateResourcesTimezoneResolvers<ContextType>;
  DeleteResourcesTimezone?: DeleteResourcesTimezoneResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = TimezoneContext> = Resolvers<ContextType>;
