import { GraphQLResolveInfo } from 'graphql';
import { ResourcesContext } from '../interfaces';

export type Maybe<T> = T | null | undefined;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };

export type Resolver<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

/** Sorts the fields in either Ascending or Descending order */
export enum SortEnumType {
  /** Sort in Ascending order */
  Asc = 1,
  /** Sort in Descending order */
  Desc = 2
}

/** For sotring based on fileds */
export type SortInputType = {
  /** Field names to be sorted on */
  field: Scalars['String'];
  /** Sorting Options */
  order?: Maybe<SortEnumType>;
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

/** A role scope */
export type ScopeInputType = {
  entity?: Maybe<Scalars['String']>;
  instance?: Maybe<Scalars['String']>;
};

export type QueryAllInputType = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<Array<FilterOptionsInputType>>;
  sort?: Maybe<SortInputType>;
  scope?: Maybe<ScopeInputType>;
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


export type OutputReadType<T> = {
  payload?: Maybe<Array<Maybe<T>>>;
  status?: Maybe<StatusType>;
};

export type ReadResolver<TType, TParentType = any> = Resolver<Maybe<OutputReadType<TType>>, TParentType, ResourcesContext, RequireFields<QueryAllInputType, never>>;
