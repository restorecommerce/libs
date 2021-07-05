import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { CatalogContext } from '../interfaces';
export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  catalog: CatalogQuery;
};

export type CatalogQuery = {
  __typename?: 'CatalogQuery';
  product: CatalogProductQuery;
  product_prototype: CatalogProductPrototypeQuery;
  product_category: CatalogProductCategoryQuery;
  price_group: CatalogPriceGroupQuery;
  manufacturer: CatalogManufacturerQuery;
};

export type CatalogProductQuery = {
  __typename?: 'CatalogProductQuery';
  Read?: Maybe<ProtoIoRestorecommerceProductProductListResponse>;
};


export type CatalogProductQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceProductProductListResponse = {
  __typename?: 'ProtoIoRestorecommerceProductProductListResponse';
  status: StatusType;
  details?: Maybe<IoRestorecommerceProductProductListResponse>;
};

/** Objects with error returned for GraphQL operations */
export type StatusType = {
  __typename?: 'StatusType';
  /** Status ID */
  id: Scalars['String'];
  /** Status code */
  code: Scalars['Int'];
  /** Status message description */
  message?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceProductProductListResponse = {
  __typename?: 'IoRestorecommerceProductProductListResponse';
  items?: Maybe<Array<IoRestorecommerceProductProductResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceProductProductResponse = {
  __typename?: 'IoRestorecommerceProductProductResponse';
  payload?: Maybe<IoRestorecommerceProductMainProduct>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceProductMainProduct = {
  __typename?: 'IoRestorecommerceProductMainProduct';
  id?: Maybe<Scalars['String']>;
  product?: Maybe<IoRestorecommerceProductProduct>;
  bundle?: Maybe<IoRestorecommerceProductBundle>;
  active?: Maybe<Scalars['Boolean']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
};

export type IoRestorecommerceProductProduct = {
  __typename?: 'IoRestorecommerceProductProduct';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  manufacturerId?: Maybe<Scalars['String']>;
  taricCode?: Maybe<Scalars['String']>;
  prototype?: Maybe<IoRestorecommerceProductIdentifier>;
  category?: Maybe<IoRestorecommerceProductIdentifier>;
  taxTypeId?: Maybe<Array<Scalars['String']>>;
  variants?: Maybe<Array<IoRestorecommerceProductVariant>>;
  gtin?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceProductIdentifier = {
  __typename?: 'IoRestorecommerceProductIdentifier';
  id?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceProductVariant = {
  __typename?: 'IoRestorecommerceProductVariant';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  stockLevel?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  sale?: Maybe<Scalars['Boolean']>;
  salePrice?: Maybe<Scalars['Float']>;
  image?: Maybe<Array<IoRestorecommerceImageImage>>;
  stockKeepingUnit?: Maybe<Scalars['String']>;
  attributes?: Maybe<Array<IoRestorecommerceProductVariantAttribute>>;
};

export type IoRestorecommerceImageImage = {
  __typename?: 'IoRestorecommerceImageImage';
  id?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
};

export type IoRestorecommerceProductVariantAttribute = {
  __typename?: 'IoRestorecommerceProductVariantAttribute';
  key?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Scalars['String']>>;
};

export type IoRestorecommerceProductBundle = {
  __typename?: 'IoRestorecommerceProductBundle';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Array<IoRestorecommerceImageImage>>;
  product?: Maybe<Array<IoRestorecommerceProductBundleProduct>>;
  price?: Maybe<Scalars['Float']>;
};

export type IoRestorecommerceProductBundleProduct = {
  __typename?: 'IoRestorecommerceProductBundleProduct';
  productId?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type IoRestorecommerceMetaMeta = {
  __typename?: 'IoRestorecommerceMetaMeta';
  created?: Maybe<Scalars['Float']>;
  modified?: Maybe<Scalars['Float']>;
  modifiedBy?: Maybe<Scalars['String']>;
  owner?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
};

export type IoRestorecommerceAttributeAttribute = {
  __typename?: 'IoRestorecommerceAttributeAttribute';
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceStatusStatus = {
  __typename?: 'IoRestorecommerceStatusStatus';
  id?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceResourcebaseReadRequest = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<IIoRestorecommerceResourcebaseSort>>;
  filters?: Maybe<Array<IIoRestorecommerceResourcebaseFilterOp>>;
  field?: Maybe<Array<IIoRestorecommerceResourcebaseFieldFilter>>;
  search?: Maybe<Array<Scalars['String']>>;
  localesLimiter?: Maybe<Array<Scalars['String']>>;
  customQueries?: Maybe<Array<Scalars['String']>>;
  customArguments?: Maybe<IGoogleProtobufAny>;
};

export type IIoRestorecommerceResourcebaseSort = {
  field?: Maybe<Scalars['String']>;
  order?: Maybe<IoRestorecommerceResourcebaseSortSortOrder>;
};

export enum IoRestorecommerceResourcebaseSortSortOrder {
  Unsorted = 0,
  Ascending = 1,
  Descending = 2
}

export type IIoRestorecommerceResourcebaseFilterOp = {
  filter?: Maybe<Array<IIoRestorecommerceResourcebaseFilter>>;
};

export type IIoRestorecommerceResourcebaseFilter = {
  field?: Maybe<Scalars['String']>;
  operation?: Maybe<IoRestorecommerceResourcebaseFilterOperation>;
  value?: Maybe<Scalars['String']>;
  type?: Maybe<IoRestorecommerceResourcebaseFilterValueType>;
  filters?: Maybe<Array<IIoRestorecommerceResourcebaseFilterOp>>;
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

export type IIoRestorecommerceResourcebaseFieldFilter = {
  name?: Maybe<Scalars['String']>;
  include?: Maybe<Scalars['Boolean']>;
};

export type IGoogleProtobufAny = {
  typeUrl?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Upload']>;
};


export type CatalogProductPrototypeQuery = {
  __typename?: 'CatalogProductPrototypeQuery';
  Read?: Maybe<ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse>;
};


export type CatalogProductPrototypeQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse = {
  __typename?: 'ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse';
  status: StatusType;
  details?: Maybe<IoRestorecommerceProductPrototypeProductPrototypeListResponse>;
};

export type IoRestorecommerceProductPrototypeProductPrototypeListResponse = {
  __typename?: 'IoRestorecommerceProductPrototypeProductPrototypeListResponse';
  items?: Maybe<Array<IoRestorecommerceProductPrototypeProductPrototypeResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceProductPrototypeProductPrototypeResponse = {
  __typename?: 'IoRestorecommerceProductPrototypeProductPrototypeResponse';
  payload?: Maybe<IoRestorecommerceProductPrototypeProductPrototype>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceProductPrototypeProductPrototype = {
  __typename?: 'IoRestorecommerceProductPrototypeProductPrototype';
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['String']>;
};

export type CatalogProductCategoryQuery = {
  __typename?: 'CatalogProductCategoryQuery';
  Read?: Maybe<ProtoIoRestorecommerceProductCategoryProductCategoryListResponse>;
};


export type CatalogProductCategoryQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceProductCategoryProductCategoryListResponse = {
  __typename?: 'ProtoIoRestorecommerceProductCategoryProductCategoryListResponse';
  status: StatusType;
  details?: Maybe<IoRestorecommerceProductCategoryProductCategoryListResponse>;
};

export type IoRestorecommerceProductCategoryProductCategoryListResponse = {
  __typename?: 'IoRestorecommerceProductCategoryProductCategoryListResponse';
  items?: Maybe<Array<IoRestorecommerceProductCategoryProductCategoryResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceProductCategoryProductCategoryResponse = {
  __typename?: 'IoRestorecommerceProductCategoryProductCategoryResponse';
  payload?: Maybe<IoRestorecommerceProductCategoryProductCategory>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceProductCategoryProductCategory = {
  __typename?: 'IoRestorecommerceProductCategoryProductCategory';
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  priceGroupId?: Maybe<Scalars['String']>;
  image?: Maybe<IoRestorecommerceImageImage>;
  parent?: Maybe<IoRestorecommerceProductCategoryParent>;
};

export type IoRestorecommerceProductCategoryParent = {
  __typename?: 'IoRestorecommerceProductCategoryParent';
  parentId?: Maybe<Scalars['String']>;
};

export type CatalogPriceGroupQuery = {
  __typename?: 'CatalogPriceGroupQuery';
  Read?: Maybe<ProtoIoRestorecommercePriceGroupPriceGroupListResponse>;
};


export type CatalogPriceGroupQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommercePriceGroupPriceGroupListResponse = {
  __typename?: 'ProtoIoRestorecommercePriceGroupPriceGroupListResponse';
  status: StatusType;
  details?: Maybe<IoRestorecommercePriceGroupPriceGroupListResponse>;
};

export type IoRestorecommercePriceGroupPriceGroupListResponse = {
  __typename?: 'IoRestorecommercePriceGroupPriceGroupListResponse';
  items?: Maybe<Array<IoRestorecommercePriceGroupPriceGroupResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommercePriceGroupPriceGroupResponse = {
  __typename?: 'IoRestorecommercePriceGroupPriceGroupResponse';
  payload?: Maybe<IoRestorecommercePriceGroupPriceGroup>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommercePriceGroupPriceGroup = {
  __typename?: 'IoRestorecommercePriceGroupPriceGroup';
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type CatalogManufacturerQuery = {
  __typename?: 'CatalogManufacturerQuery';
  Read?: Maybe<ProtoIoRestorecommerceManufacturerManufacturerListResponse>;
};


export type CatalogManufacturerQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceManufacturerManufacturerListResponse = {
  __typename?: 'ProtoIoRestorecommerceManufacturerManufacturerListResponse';
  status: StatusType;
  details?: Maybe<IoRestorecommerceManufacturerManufacturerListResponse>;
};

export type IoRestorecommerceManufacturerManufacturerListResponse = {
  __typename?: 'IoRestorecommerceManufacturerManufacturerListResponse';
  items?: Maybe<Array<IoRestorecommerceManufacturerManufacturerResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceManufacturerManufacturerResponse = {
  __typename?: 'IoRestorecommerceManufacturerManufacturerResponse';
  payload?: Maybe<IoRestorecommerceManufacturerManufacturer>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceManufacturerManufacturer = {
  __typename?: 'IoRestorecommerceManufacturerManufacturer';
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  catalog: CatalogMutation;
};

export type CatalogMutation = {
  __typename?: 'CatalogMutation';
  product: CatalogProductMutation;
  product_prototype: CatalogProductPrototypeMutation;
  product_category: CatalogProductCategoryMutation;
  price_group: CatalogPriceGroupMutation;
  manufacturer: CatalogManufacturerMutation;
};

export type CatalogProductMutation = {
  __typename?: 'CatalogProductMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceProductProductListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceStatusStatusArray>;
};


export type CatalogProductMutationMutateArgs = {
  input: IIoRestorecommerceProductProductList;
};


export type CatalogProductMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceProductProductList = {
  items?: Maybe<Array<IIoRestorecommerceProductMainProduct>>;
  totalCount?: Maybe<Scalars['Int']>;
  mode?: Maybe<ModeType>;
};

export type IIoRestorecommerceProductMainProduct = {
  id?: Maybe<Scalars['String']>;
  product?: Maybe<IIoRestorecommerceProductProduct>;
  bundle?: Maybe<IIoRestorecommerceProductBundle>;
  active?: Maybe<Scalars['Boolean']>;
  meta?: Maybe<IIoRestorecommerceMetaMeta>;
};

export type IIoRestorecommerceProductProduct = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  manufacturerId?: Maybe<Scalars['String']>;
  taricCode?: Maybe<Scalars['String']>;
  prototype?: Maybe<IIoRestorecommerceProductIdentifier>;
  category?: Maybe<IIoRestorecommerceProductIdentifier>;
  taxTypeId?: Maybe<Array<Scalars['String']>>;
  variants?: Maybe<Array<IIoRestorecommerceProductVariant>>;
  gtin?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceProductIdentifier = {
  id?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceProductVariant = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  stockLevel?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  sale?: Maybe<Scalars['Boolean']>;
  salePrice?: Maybe<Scalars['Float']>;
  image?: Maybe<Array<IIoRestorecommerceImageImage>>;
  stockKeepingUnit?: Maybe<Scalars['String']>;
  attributes?: Maybe<Array<IIoRestorecommerceProductVariantAttribute>>;
};

export type IIoRestorecommerceImageImage = {
  id?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
};

export type IIoRestorecommerceProductVariantAttribute = {
  key?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Scalars['String']>>;
};

export type IIoRestorecommerceProductBundle = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Array<IIoRestorecommerceImageImage>>;
  product?: Maybe<Array<IIoRestorecommerceProductBundleProduct>>;
  price?: Maybe<Scalars['Float']>;
};

export type IIoRestorecommerceProductBundleProduct = {
  productId?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type IIoRestorecommerceMetaMeta = {
  created?: Maybe<Scalars['Float']>;
  modified?: Maybe<Scalars['Float']>;
  modifiedBy?: Maybe<Scalars['String']>;
  owner?: Maybe<Array<IIoRestorecommerceAttributeAttribute>>;
};

export type IIoRestorecommerceAttributeAttribute = {
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export enum ModeType {
  Create = 'CREATE',
  Update = 'UPDATE',
  Upsert = 'UPSERT'
}

export type ProtoIoRestorecommerceStatusStatusArray = {
  __typename?: 'ProtoIoRestorecommerceStatusStatusArray';
  status: StatusType;
  details?: Maybe<IoRestorecommerceStatusStatusArray>;
};

export type IoRestorecommerceStatusStatusArray = {
  __typename?: 'IoRestorecommerceStatusStatusArray';
  status?: Maybe<Array<IoRestorecommerceStatusStatus>>;
};

export type IIoRestorecommerceResourcebaseDeleteRequest = {
  collection?: Maybe<Scalars['Boolean']>;
  ids?: Maybe<Array<Scalars['String']>>;
};

export type CatalogProductPrototypeMutation = {
  __typename?: 'CatalogProductPrototypeMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceStatusStatusArray>;
};


export type CatalogProductPrototypeMutationMutateArgs = {
  input: IIoRestorecommerceProductPrototypeProductPrototypeList;
};


export type CatalogProductPrototypeMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceProductPrototypeProductPrototypeList = {
  items?: Maybe<Array<IIoRestorecommerceProductPrototypeProductPrototype>>;
  totalCount?: Maybe<Scalars['Int']>;
  mode?: Maybe<ModeType>;
};

export type IIoRestorecommerceProductPrototypeProductPrototype = {
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IIoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['String']>;
};

export type CatalogProductCategoryMutation = {
  __typename?: 'CatalogProductCategoryMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceProductCategoryProductCategoryListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceStatusStatusArray>;
};


export type CatalogProductCategoryMutationMutateArgs = {
  input: IIoRestorecommerceProductCategoryProductCategoryList;
};


export type CatalogProductCategoryMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceProductCategoryProductCategoryList = {
  items?: Maybe<Array<IIoRestorecommerceProductCategoryProductCategory>>;
  totalCount?: Maybe<Scalars['Int']>;
  mode?: Maybe<ModeType>;
};

export type IIoRestorecommerceProductCategoryProductCategory = {
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IIoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  priceGroupId?: Maybe<Scalars['String']>;
  image?: Maybe<IIoRestorecommerceImageImage>;
  parent?: Maybe<IIoRestorecommerceProductCategoryParent>;
};

export type IIoRestorecommerceProductCategoryParent = {
  parentId?: Maybe<Scalars['String']>;
};

export type CatalogPriceGroupMutation = {
  __typename?: 'CatalogPriceGroupMutation';
  Mutate?: Maybe<ProtoIoRestorecommercePriceGroupPriceGroupListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceStatusStatusArray>;
};


export type CatalogPriceGroupMutationMutateArgs = {
  input: IIoRestorecommercePriceGroupPriceGroupList;
};


export type CatalogPriceGroupMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommercePriceGroupPriceGroupList = {
  items?: Maybe<Array<IIoRestorecommercePriceGroupPriceGroup>>;
  totalCount?: Maybe<Scalars['Int']>;
  mode?: Maybe<ModeType>;
};

export type IIoRestorecommercePriceGroupPriceGroup = {
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IIoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type CatalogManufacturerMutation = {
  __typename?: 'CatalogManufacturerMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceManufacturerManufacturerListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceStatusStatusArray>;
};


export type CatalogManufacturerMutationMutateArgs = {
  input: IIoRestorecommerceManufacturerManufacturerList;
};


export type CatalogManufacturerMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceManufacturerManufacturerList = {
  items?: Maybe<Array<IIoRestorecommerceManufacturerManufacturer>>;
  totalCount?: Maybe<Scalars['Int']>;
  mode?: Maybe<ModeType>;
};

export type IIoRestorecommerceManufacturerManufacturer = {
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IIoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
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
  CatalogQuery: ResolverTypeWrapper<CatalogQuery>;
  CatalogProductQuery: ResolverTypeWrapper<CatalogProductQuery>;
  ProtoIoRestorecommerceProductProductListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceProductProductListResponse>;
  StatusType: ResolverTypeWrapper<StatusType>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IoRestorecommerceProductProductListResponse: ResolverTypeWrapper<IoRestorecommerceProductProductListResponse>;
  IoRestorecommerceProductProductResponse: ResolverTypeWrapper<IoRestorecommerceProductProductResponse>;
  IoRestorecommerceProductMainProduct: ResolverTypeWrapper<IoRestorecommerceProductMainProduct>;
  IoRestorecommerceProductProduct: ResolverTypeWrapper<IoRestorecommerceProductProduct>;
  IoRestorecommerceProductIdentifier: ResolverTypeWrapper<IoRestorecommerceProductIdentifier>;
  IoRestorecommerceProductVariant: ResolverTypeWrapper<IoRestorecommerceProductVariant>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  IoRestorecommerceImageImage: ResolverTypeWrapper<IoRestorecommerceImageImage>;
  IoRestorecommerceProductVariantAttribute: ResolverTypeWrapper<IoRestorecommerceProductVariantAttribute>;
  IoRestorecommerceProductBundle: ResolverTypeWrapper<IoRestorecommerceProductBundle>;
  IoRestorecommerceProductBundleProduct: ResolverTypeWrapper<IoRestorecommerceProductBundleProduct>;
  IoRestorecommerceMetaMeta: ResolverTypeWrapper<IoRestorecommerceMetaMeta>;
  IoRestorecommerceAttributeAttribute: ResolverTypeWrapper<IoRestorecommerceAttributeAttribute>;
  IoRestorecommerceStatusStatus: ResolverTypeWrapper<IoRestorecommerceStatusStatus>;
  IIoRestorecommerceResourcebaseReadRequest: IIoRestorecommerceResourcebaseReadRequest;
  IIoRestorecommerceResourcebaseSort: IIoRestorecommerceResourcebaseSort;
  IoRestorecommerceResourcebaseSortSortOrder: IoRestorecommerceResourcebaseSortSortOrder;
  IIoRestorecommerceResourcebaseFilterOp: IIoRestorecommerceResourcebaseFilterOp;
  IIoRestorecommerceResourcebaseFilter: IIoRestorecommerceResourcebaseFilter;
  IoRestorecommerceResourcebaseFilterOperation: IoRestorecommerceResourcebaseFilterOperation;
  IoRestorecommerceResourcebaseFilterValueType: IoRestorecommerceResourcebaseFilterValueType;
  IIoRestorecommerceResourcebaseFieldFilter: IIoRestorecommerceResourcebaseFieldFilter;
  IGoogleProtobufAny: IGoogleProtobufAny;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  CatalogProductPrototypeQuery: ResolverTypeWrapper<CatalogProductPrototypeQuery>;
  ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse>;
  IoRestorecommerceProductPrototypeProductPrototypeListResponse: ResolverTypeWrapper<IoRestorecommerceProductPrototypeProductPrototypeListResponse>;
  IoRestorecommerceProductPrototypeProductPrototypeResponse: ResolverTypeWrapper<IoRestorecommerceProductPrototypeProductPrototypeResponse>;
  IoRestorecommerceProductPrototypeProductPrototype: ResolverTypeWrapper<IoRestorecommerceProductPrototypeProductPrototype>;
  CatalogProductCategoryQuery: ResolverTypeWrapper<CatalogProductCategoryQuery>;
  ProtoIoRestorecommerceProductCategoryProductCategoryListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceProductCategoryProductCategoryListResponse>;
  IoRestorecommerceProductCategoryProductCategoryListResponse: ResolverTypeWrapper<IoRestorecommerceProductCategoryProductCategoryListResponse>;
  IoRestorecommerceProductCategoryProductCategoryResponse: ResolverTypeWrapper<IoRestorecommerceProductCategoryProductCategoryResponse>;
  IoRestorecommerceProductCategoryProductCategory: ResolverTypeWrapper<IoRestorecommerceProductCategoryProductCategory>;
  IoRestorecommerceProductCategoryParent: ResolverTypeWrapper<IoRestorecommerceProductCategoryParent>;
  CatalogPriceGroupQuery: ResolverTypeWrapper<CatalogPriceGroupQuery>;
  ProtoIoRestorecommercePriceGroupPriceGroupListResponse: ResolverTypeWrapper<ProtoIoRestorecommercePriceGroupPriceGroupListResponse>;
  IoRestorecommercePriceGroupPriceGroupListResponse: ResolverTypeWrapper<IoRestorecommercePriceGroupPriceGroupListResponse>;
  IoRestorecommercePriceGroupPriceGroupResponse: ResolverTypeWrapper<IoRestorecommercePriceGroupPriceGroupResponse>;
  IoRestorecommercePriceGroupPriceGroup: ResolverTypeWrapper<IoRestorecommercePriceGroupPriceGroup>;
  CatalogManufacturerQuery: ResolverTypeWrapper<CatalogManufacturerQuery>;
  ProtoIoRestorecommerceManufacturerManufacturerListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceManufacturerManufacturerListResponse>;
  IoRestorecommerceManufacturerManufacturerListResponse: ResolverTypeWrapper<IoRestorecommerceManufacturerManufacturerListResponse>;
  IoRestorecommerceManufacturerManufacturerResponse: ResolverTypeWrapper<IoRestorecommerceManufacturerManufacturerResponse>;
  IoRestorecommerceManufacturerManufacturer: ResolverTypeWrapper<IoRestorecommerceManufacturerManufacturer>;
  Mutation: ResolverTypeWrapper<{}>;
  CatalogMutation: ResolverTypeWrapper<CatalogMutation>;
  CatalogProductMutation: ResolverTypeWrapper<CatalogProductMutation>;
  IIoRestorecommerceProductProductList: IIoRestorecommerceProductProductList;
  IIoRestorecommerceProductMainProduct: IIoRestorecommerceProductMainProduct;
  IIoRestorecommerceProductProduct: IIoRestorecommerceProductProduct;
  IIoRestorecommerceProductIdentifier: IIoRestorecommerceProductIdentifier;
  IIoRestorecommerceProductVariant: IIoRestorecommerceProductVariant;
  IIoRestorecommerceImageImage: IIoRestorecommerceImageImage;
  IIoRestorecommerceProductVariantAttribute: IIoRestorecommerceProductVariantAttribute;
  IIoRestorecommerceProductBundle: IIoRestorecommerceProductBundle;
  IIoRestorecommerceProductBundleProduct: IIoRestorecommerceProductBundleProduct;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  ModeType: ModeType;
  ProtoIoRestorecommerceStatusStatusArray: ResolverTypeWrapper<ProtoIoRestorecommerceStatusStatusArray>;
  IoRestorecommerceStatusStatusArray: ResolverTypeWrapper<IoRestorecommerceStatusStatusArray>;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
  CatalogProductPrototypeMutation: ResolverTypeWrapper<CatalogProductPrototypeMutation>;
  IIoRestorecommerceProductPrototypeProductPrototypeList: IIoRestorecommerceProductPrototypeProductPrototypeList;
  IIoRestorecommerceProductPrototypeProductPrototype: IIoRestorecommerceProductPrototypeProductPrototype;
  CatalogProductCategoryMutation: ResolverTypeWrapper<CatalogProductCategoryMutation>;
  IIoRestorecommerceProductCategoryProductCategoryList: IIoRestorecommerceProductCategoryProductCategoryList;
  IIoRestorecommerceProductCategoryProductCategory: IIoRestorecommerceProductCategoryProductCategory;
  IIoRestorecommerceProductCategoryParent: IIoRestorecommerceProductCategoryParent;
  CatalogPriceGroupMutation: ResolverTypeWrapper<CatalogPriceGroupMutation>;
  IIoRestorecommercePriceGroupPriceGroupList: IIoRestorecommercePriceGroupPriceGroupList;
  IIoRestorecommercePriceGroupPriceGroup: IIoRestorecommercePriceGroupPriceGroup;
  CatalogManufacturerMutation: ResolverTypeWrapper<CatalogManufacturerMutation>;
  IIoRestorecommerceManufacturerManufacturerList: IIoRestorecommerceManufacturerManufacturerList;
  IIoRestorecommerceManufacturerManufacturer: IIoRestorecommerceManufacturerManufacturer;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  CatalogQuery: CatalogQuery;
  CatalogProductQuery: CatalogProductQuery;
  ProtoIoRestorecommerceProductProductListResponse: ProtoIoRestorecommerceProductProductListResponse;
  StatusType: StatusType;
  String: Scalars['String'];
  Int: Scalars['Int'];
  IoRestorecommerceProductProductListResponse: IoRestorecommerceProductProductListResponse;
  IoRestorecommerceProductProductResponse: IoRestorecommerceProductProductResponse;
  IoRestorecommerceProductMainProduct: IoRestorecommerceProductMainProduct;
  IoRestorecommerceProductProduct: IoRestorecommerceProductProduct;
  IoRestorecommerceProductIdentifier: IoRestorecommerceProductIdentifier;
  IoRestorecommerceProductVariant: IoRestorecommerceProductVariant;
  Float: Scalars['Float'];
  Boolean: Scalars['Boolean'];
  IoRestorecommerceImageImage: IoRestorecommerceImageImage;
  IoRestorecommerceProductVariantAttribute: IoRestorecommerceProductVariantAttribute;
  IoRestorecommerceProductBundle: IoRestorecommerceProductBundle;
  IoRestorecommerceProductBundleProduct: IoRestorecommerceProductBundleProduct;
  IoRestorecommerceMetaMeta: IoRestorecommerceMetaMeta;
  IoRestorecommerceAttributeAttribute: IoRestorecommerceAttributeAttribute;
  IoRestorecommerceStatusStatus: IoRestorecommerceStatusStatus;
  IIoRestorecommerceResourcebaseReadRequest: IIoRestorecommerceResourcebaseReadRequest;
  IIoRestorecommerceResourcebaseSort: IIoRestorecommerceResourcebaseSort;
  IIoRestorecommerceResourcebaseFilterOp: IIoRestorecommerceResourcebaseFilterOp;
  IIoRestorecommerceResourcebaseFilter: IIoRestorecommerceResourcebaseFilter;
  IIoRestorecommerceResourcebaseFieldFilter: IIoRestorecommerceResourcebaseFieldFilter;
  IGoogleProtobufAny: IGoogleProtobufAny;
  Upload: Scalars['Upload'];
  CatalogProductPrototypeQuery: CatalogProductPrototypeQuery;
  ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse: ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse;
  IoRestorecommerceProductPrototypeProductPrototypeListResponse: IoRestorecommerceProductPrototypeProductPrototypeListResponse;
  IoRestorecommerceProductPrototypeProductPrototypeResponse: IoRestorecommerceProductPrototypeProductPrototypeResponse;
  IoRestorecommerceProductPrototypeProductPrototype: IoRestorecommerceProductPrototypeProductPrototype;
  CatalogProductCategoryQuery: CatalogProductCategoryQuery;
  ProtoIoRestorecommerceProductCategoryProductCategoryListResponse: ProtoIoRestorecommerceProductCategoryProductCategoryListResponse;
  IoRestorecommerceProductCategoryProductCategoryListResponse: IoRestorecommerceProductCategoryProductCategoryListResponse;
  IoRestorecommerceProductCategoryProductCategoryResponse: IoRestorecommerceProductCategoryProductCategoryResponse;
  IoRestorecommerceProductCategoryProductCategory: IoRestorecommerceProductCategoryProductCategory;
  IoRestorecommerceProductCategoryParent: IoRestorecommerceProductCategoryParent;
  CatalogPriceGroupQuery: CatalogPriceGroupQuery;
  ProtoIoRestorecommercePriceGroupPriceGroupListResponse: ProtoIoRestorecommercePriceGroupPriceGroupListResponse;
  IoRestorecommercePriceGroupPriceGroupListResponse: IoRestorecommercePriceGroupPriceGroupListResponse;
  IoRestorecommercePriceGroupPriceGroupResponse: IoRestorecommercePriceGroupPriceGroupResponse;
  IoRestorecommercePriceGroupPriceGroup: IoRestorecommercePriceGroupPriceGroup;
  CatalogManufacturerQuery: CatalogManufacturerQuery;
  ProtoIoRestorecommerceManufacturerManufacturerListResponse: ProtoIoRestorecommerceManufacturerManufacturerListResponse;
  IoRestorecommerceManufacturerManufacturerListResponse: IoRestorecommerceManufacturerManufacturerListResponse;
  IoRestorecommerceManufacturerManufacturerResponse: IoRestorecommerceManufacturerManufacturerResponse;
  IoRestorecommerceManufacturerManufacturer: IoRestorecommerceManufacturerManufacturer;
  Mutation: {};
  CatalogMutation: CatalogMutation;
  CatalogProductMutation: CatalogProductMutation;
  IIoRestorecommerceProductProductList: IIoRestorecommerceProductProductList;
  IIoRestorecommerceProductMainProduct: IIoRestorecommerceProductMainProduct;
  IIoRestorecommerceProductProduct: IIoRestorecommerceProductProduct;
  IIoRestorecommerceProductIdentifier: IIoRestorecommerceProductIdentifier;
  IIoRestorecommerceProductVariant: IIoRestorecommerceProductVariant;
  IIoRestorecommerceImageImage: IIoRestorecommerceImageImage;
  IIoRestorecommerceProductVariantAttribute: IIoRestorecommerceProductVariantAttribute;
  IIoRestorecommerceProductBundle: IIoRestorecommerceProductBundle;
  IIoRestorecommerceProductBundleProduct: IIoRestorecommerceProductBundleProduct;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  ProtoIoRestorecommerceStatusStatusArray: ProtoIoRestorecommerceStatusStatusArray;
  IoRestorecommerceStatusStatusArray: IoRestorecommerceStatusStatusArray;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
  CatalogProductPrototypeMutation: CatalogProductPrototypeMutation;
  IIoRestorecommerceProductPrototypeProductPrototypeList: IIoRestorecommerceProductPrototypeProductPrototypeList;
  IIoRestorecommerceProductPrototypeProductPrototype: IIoRestorecommerceProductPrototypeProductPrototype;
  CatalogProductCategoryMutation: CatalogProductCategoryMutation;
  IIoRestorecommerceProductCategoryProductCategoryList: IIoRestorecommerceProductCategoryProductCategoryList;
  IIoRestorecommerceProductCategoryProductCategory: IIoRestorecommerceProductCategoryProductCategory;
  IIoRestorecommerceProductCategoryParent: IIoRestorecommerceProductCategoryParent;
  CatalogPriceGroupMutation: CatalogPriceGroupMutation;
  IIoRestorecommercePriceGroupPriceGroupList: IIoRestorecommercePriceGroupPriceGroupList;
  IIoRestorecommercePriceGroupPriceGroup: IIoRestorecommercePriceGroupPriceGroup;
  CatalogManufacturerMutation: CatalogManufacturerMutation;
  IIoRestorecommerceManufacturerManufacturerList: IIoRestorecommerceManufacturerManufacturerList;
  IIoRestorecommerceManufacturerManufacturer: IIoRestorecommerceManufacturerManufacturer;
}>;

export type QueryResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  catalog?: Resolver<ResolversTypes['CatalogQuery'], ParentType, ContextType>;
}>;

export type CatalogQueryResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['CatalogQuery'] = ResolversParentTypes['CatalogQuery']> = ResolversObject<{
  product?: Resolver<ResolversTypes['CatalogProductQuery'], ParentType, ContextType>;
  product_prototype?: Resolver<ResolversTypes['CatalogProductPrototypeQuery'], ParentType, ContextType>;
  product_category?: Resolver<ResolversTypes['CatalogProductCategoryQuery'], ParentType, ContextType>;
  price_group?: Resolver<ResolversTypes['CatalogPriceGroupQuery'], ParentType, ContextType>;
  manufacturer?: Resolver<ResolversTypes['CatalogManufacturerQuery'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogProductQueryResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['CatalogProductQuery'] = ResolversParentTypes['CatalogProductQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceProductProductListResponse']>, ParentType, ContextType, RequireFields<CatalogProductQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceProductProductListResponseResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceProductProductListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceProductProductListResponse']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductProductListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StatusTypeResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['StatusType'] = ResolversParentTypes['StatusType']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductProductListResponseResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductProductListResponse'] = ResolversParentTypes['IoRestorecommerceProductProductListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceProductProductResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductProductResponseResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductProductResponse'] = ResolversParentTypes['IoRestorecommerceProductProductResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductMainProduct']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductMainProductResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductMainProduct'] = ResolversParentTypes['IoRestorecommerceProductMainProduct']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductProduct']>, ParentType, ContextType>;
  bundle?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductBundle']>, ParentType, ContextType>;
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductProductResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductProduct'] = ResolversParentTypes['IoRestorecommerceProductProduct']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manufacturerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  taricCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prototype?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductIdentifier']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductIdentifier']>, ParentType, ContextType>;
  taxTypeId?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  variants?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceProductVariant']>>, ParentType, ContextType>;
  gtin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductIdentifierResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductIdentifier'] = ResolversParentTypes['IoRestorecommerceProductIdentifier']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductVariantResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductVariant'] = ResolversParentTypes['IoRestorecommerceProductVariant']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stockLevel?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sale?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  salePrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  image?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceImageImage']>>, ParentType, ContextType>;
  stockKeepingUnit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attributes?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceProductVariantAttribute']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceImageImageResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceImageImage'] = ResolversParentTypes['IoRestorecommerceImageImage']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  filename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductVariantAttributeResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductVariantAttribute'] = ResolversParentTypes['IoRestorecommerceProductVariantAttribute']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  values?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductBundleResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductBundle'] = ResolversParentTypes['IoRestorecommerceProductBundle']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceImageImage']>>, ParentType, ContextType>;
  product?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceProductBundleProduct']>>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductBundleProductResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductBundleProduct'] = ResolversParentTypes['IoRestorecommerceProductBundleProduct']> = ResolversObject<{
  productId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceMetaMetaResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceMetaMeta'] = ResolversParentTypes['IoRestorecommerceMetaMeta']> = ResolversObject<{
  created?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  modified?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  modifiedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAttributeAttributeResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttribute'] = ResolversParentTypes['IoRestorecommerceAttributeAttribute']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceStatusStatusResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusStatus'] = ResolversParentTypes['IoRestorecommerceStatusStatus']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceResourcebaseSortSortOrderResolvers = { UNSORTED: 'undefined', ASCENDING: 1, DESCENDING: 2 };

export type IoRestorecommerceResourcebaseFilterOperationResolvers = { eq: 'undefined', lt: 1, lte: 2, gt: 3, gte: 4, isEmpty: 5, iLike: 6, in: 7, neq: 8 };

export type IoRestorecommerceResourcebaseFilterValueTypeResolvers = { STRING: 'undefined', NUMBER: 1, BOOLEAN: 2, DATE: 3, ARRAY: 4 };

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type CatalogProductPrototypeQueryResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['CatalogProductPrototypeQuery'] = ResolversParentTypes['CatalogProductPrototypeQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse']>, ParentType, ContextType, RequireFields<CatalogProductPrototypeQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponseResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductPrototypeProductPrototypeListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductPrototypeProductPrototypeListResponseResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductPrototypeProductPrototypeListResponse'] = ResolversParentTypes['IoRestorecommerceProductPrototypeProductPrototypeListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceProductPrototypeProductPrototypeResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductPrototypeProductPrototypeResponseResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductPrototypeProductPrototypeResponse'] = ResolversParentTypes['IoRestorecommerceProductPrototypeProductPrototypeResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductPrototypeProductPrototype']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductPrototypeProductPrototypeResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductPrototypeProductPrototype'] = ResolversParentTypes['IoRestorecommerceProductPrototypeProductPrototype']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categoryId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogProductCategoryQueryResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['CatalogProductCategoryQuery'] = ResolversParentTypes['CatalogProductCategoryQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceProductCategoryProductCategoryListResponse']>, ParentType, ContextType, RequireFields<CatalogProductCategoryQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceProductCategoryProductCategoryListResponseResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceProductCategoryProductCategoryListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceProductCategoryProductCategoryListResponse']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductCategoryProductCategoryListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductCategoryProductCategoryListResponseResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductCategoryProductCategoryListResponse'] = ResolversParentTypes['IoRestorecommerceProductCategoryProductCategoryListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceProductCategoryProductCategoryResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductCategoryProductCategoryResponseResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductCategoryProductCategoryResponse'] = ResolversParentTypes['IoRestorecommerceProductCategoryProductCategoryResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductCategoryProductCategory']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductCategoryProductCategoryResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductCategoryProductCategory'] = ResolversParentTypes['IoRestorecommerceProductCategoryProductCategory']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  priceGroupId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['IoRestorecommerceImageImage']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductCategoryParent']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductCategoryParentResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductCategoryParent'] = ResolversParentTypes['IoRestorecommerceProductCategoryParent']> = ResolversObject<{
  parentId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogPriceGroupQueryResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['CatalogPriceGroupQuery'] = ResolversParentTypes['CatalogPriceGroupQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommercePriceGroupPriceGroupListResponse']>, ParentType, ContextType, RequireFields<CatalogPriceGroupQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommercePriceGroupPriceGroupListResponseResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommercePriceGroupPriceGroupListResponse'] = ResolversParentTypes['ProtoIoRestorecommercePriceGroupPriceGroupListResponse']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommercePriceGroupPriceGroupListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePriceGroupPriceGroupListResponseResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommercePriceGroupPriceGroupListResponse'] = ResolversParentTypes['IoRestorecommercePriceGroupPriceGroupListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommercePriceGroupPriceGroupResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePriceGroupPriceGroupResponseResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommercePriceGroupPriceGroupResponse'] = ResolversParentTypes['IoRestorecommercePriceGroupPriceGroupResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommercePriceGroupPriceGroup']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePriceGroupPriceGroupResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommercePriceGroupPriceGroup'] = ResolversParentTypes['IoRestorecommercePriceGroupPriceGroup']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogManufacturerQueryResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['CatalogManufacturerQuery'] = ResolversParentTypes['CatalogManufacturerQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceManufacturerManufacturerListResponse']>, ParentType, ContextType, RequireFields<CatalogManufacturerQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceManufacturerManufacturerListResponseResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceManufacturerManufacturerListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceManufacturerManufacturerListResponse']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceManufacturerManufacturerListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceManufacturerManufacturerListResponseResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceManufacturerManufacturerListResponse'] = ResolversParentTypes['IoRestorecommerceManufacturerManufacturerListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceManufacturerManufacturerResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceManufacturerManufacturerResponseResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceManufacturerManufacturerResponse'] = ResolversParentTypes['IoRestorecommerceManufacturerManufacturerResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceManufacturerManufacturer']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceManufacturerManufacturerResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceManufacturerManufacturer'] = ResolversParentTypes['IoRestorecommerceManufacturerManufacturer']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  catalog?: Resolver<ResolversTypes['CatalogMutation'], ParentType, ContextType>;
}>;

export type CatalogMutationResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['CatalogMutation'] = ResolversParentTypes['CatalogMutation']> = ResolversObject<{
  product?: Resolver<ResolversTypes['CatalogProductMutation'], ParentType, ContextType>;
  product_prototype?: Resolver<ResolversTypes['CatalogProductPrototypeMutation'], ParentType, ContextType>;
  product_category?: Resolver<ResolversTypes['CatalogProductCategoryMutation'], ParentType, ContextType>;
  price_group?: Resolver<ResolversTypes['CatalogPriceGroupMutation'], ParentType, ContextType>;
  manufacturer?: Resolver<ResolversTypes['CatalogManufacturerMutation'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogProductMutationResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['CatalogProductMutation'] = ResolversParentTypes['CatalogProductMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceProductProductListResponse']>, ParentType, ContextType, RequireFields<CatalogProductMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusStatusArray']>, ParentType, ContextType, RequireFields<CatalogProductMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceStatusStatusArrayResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceStatusStatusArray'] = ResolversParentTypes['ProtoIoRestorecommerceStatusStatusArray']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatusArray']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceStatusStatusArrayResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusStatusArray'] = ResolversParentTypes['IoRestorecommerceStatusStatusArray']> = ResolversObject<{
  status?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceStatusStatus']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogProductPrototypeMutationResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['CatalogProductPrototypeMutation'] = ResolversParentTypes['CatalogProductPrototypeMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse']>, ParentType, ContextType, RequireFields<CatalogProductPrototypeMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusStatusArray']>, ParentType, ContextType, RequireFields<CatalogProductPrototypeMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogProductCategoryMutationResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['CatalogProductCategoryMutation'] = ResolversParentTypes['CatalogProductCategoryMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceProductCategoryProductCategoryListResponse']>, ParentType, ContextType, RequireFields<CatalogProductCategoryMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusStatusArray']>, ParentType, ContextType, RequireFields<CatalogProductCategoryMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogPriceGroupMutationResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['CatalogPriceGroupMutation'] = ResolversParentTypes['CatalogPriceGroupMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommercePriceGroupPriceGroupListResponse']>, ParentType, ContextType, RequireFields<CatalogPriceGroupMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusStatusArray']>, ParentType, ContextType, RequireFields<CatalogPriceGroupMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogManufacturerMutationResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['CatalogManufacturerMutation'] = ResolversParentTypes['CatalogManufacturerMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceManufacturerManufacturerListResponse']>, ParentType, ContextType, RequireFields<CatalogManufacturerMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusStatusArray']>, ParentType, ContextType, RequireFields<CatalogManufacturerMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = CatalogContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  CatalogQuery?: CatalogQueryResolvers<ContextType>;
  CatalogProductQuery?: CatalogProductQueryResolvers<ContextType>;
  ProtoIoRestorecommerceProductProductListResponse?: ProtoIoRestorecommerceProductProductListResponseResolvers<ContextType>;
  StatusType?: StatusTypeResolvers<ContextType>;
  IoRestorecommerceProductProductListResponse?: IoRestorecommerceProductProductListResponseResolvers<ContextType>;
  IoRestorecommerceProductProductResponse?: IoRestorecommerceProductProductResponseResolvers<ContextType>;
  IoRestorecommerceProductMainProduct?: IoRestorecommerceProductMainProductResolvers<ContextType>;
  IoRestorecommerceProductProduct?: IoRestorecommerceProductProductResolvers<ContextType>;
  IoRestorecommerceProductIdentifier?: IoRestorecommerceProductIdentifierResolvers<ContextType>;
  IoRestorecommerceProductVariant?: IoRestorecommerceProductVariantResolvers<ContextType>;
  IoRestorecommerceImageImage?: IoRestorecommerceImageImageResolvers<ContextType>;
  IoRestorecommerceProductVariantAttribute?: IoRestorecommerceProductVariantAttributeResolvers<ContextType>;
  IoRestorecommerceProductBundle?: IoRestorecommerceProductBundleResolvers<ContextType>;
  IoRestorecommerceProductBundleProduct?: IoRestorecommerceProductBundleProductResolvers<ContextType>;
  IoRestorecommerceMetaMeta?: IoRestorecommerceMetaMetaResolvers<ContextType>;
  IoRestorecommerceAttributeAttribute?: IoRestorecommerceAttributeAttributeResolvers<ContextType>;
  IoRestorecommerceStatusStatus?: IoRestorecommerceStatusStatusResolvers<ContextType>;
  IoRestorecommerceResourcebaseSortSortOrder?: IoRestorecommerceResourcebaseSortSortOrderResolvers;
  IoRestorecommerceResourcebaseFilterOperation?: IoRestorecommerceResourcebaseFilterOperationResolvers;
  IoRestorecommerceResourcebaseFilterValueType?: IoRestorecommerceResourcebaseFilterValueTypeResolvers;
  Upload?: GraphQLScalarType;
  CatalogProductPrototypeQuery?: CatalogProductPrototypeQueryResolvers<ContextType>;
  ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse?: ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponseResolvers<ContextType>;
  IoRestorecommerceProductPrototypeProductPrototypeListResponse?: IoRestorecommerceProductPrototypeProductPrototypeListResponseResolvers<ContextType>;
  IoRestorecommerceProductPrototypeProductPrototypeResponse?: IoRestorecommerceProductPrototypeProductPrototypeResponseResolvers<ContextType>;
  IoRestorecommerceProductPrototypeProductPrototype?: IoRestorecommerceProductPrototypeProductPrototypeResolvers<ContextType>;
  CatalogProductCategoryQuery?: CatalogProductCategoryQueryResolvers<ContextType>;
  ProtoIoRestorecommerceProductCategoryProductCategoryListResponse?: ProtoIoRestorecommerceProductCategoryProductCategoryListResponseResolvers<ContextType>;
  IoRestorecommerceProductCategoryProductCategoryListResponse?: IoRestorecommerceProductCategoryProductCategoryListResponseResolvers<ContextType>;
  IoRestorecommerceProductCategoryProductCategoryResponse?: IoRestorecommerceProductCategoryProductCategoryResponseResolvers<ContextType>;
  IoRestorecommerceProductCategoryProductCategory?: IoRestorecommerceProductCategoryProductCategoryResolvers<ContextType>;
  IoRestorecommerceProductCategoryParent?: IoRestorecommerceProductCategoryParentResolvers<ContextType>;
  CatalogPriceGroupQuery?: CatalogPriceGroupQueryResolvers<ContextType>;
  ProtoIoRestorecommercePriceGroupPriceGroupListResponse?: ProtoIoRestorecommercePriceGroupPriceGroupListResponseResolvers<ContextType>;
  IoRestorecommercePriceGroupPriceGroupListResponse?: IoRestorecommercePriceGroupPriceGroupListResponseResolvers<ContextType>;
  IoRestorecommercePriceGroupPriceGroupResponse?: IoRestorecommercePriceGroupPriceGroupResponseResolvers<ContextType>;
  IoRestorecommercePriceGroupPriceGroup?: IoRestorecommercePriceGroupPriceGroupResolvers<ContextType>;
  CatalogManufacturerQuery?: CatalogManufacturerQueryResolvers<ContextType>;
  ProtoIoRestorecommerceManufacturerManufacturerListResponse?: ProtoIoRestorecommerceManufacturerManufacturerListResponseResolvers<ContextType>;
  IoRestorecommerceManufacturerManufacturerListResponse?: IoRestorecommerceManufacturerManufacturerListResponseResolvers<ContextType>;
  IoRestorecommerceManufacturerManufacturerResponse?: IoRestorecommerceManufacturerManufacturerResponseResolvers<ContextType>;
  IoRestorecommerceManufacturerManufacturer?: IoRestorecommerceManufacturerManufacturerResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  CatalogMutation?: CatalogMutationResolvers<ContextType>;
  CatalogProductMutation?: CatalogProductMutationResolvers<ContextType>;
  ProtoIoRestorecommerceStatusStatusArray?: ProtoIoRestorecommerceStatusStatusArrayResolvers<ContextType>;
  IoRestorecommerceStatusStatusArray?: IoRestorecommerceStatusStatusArrayResolvers<ContextType>;
  CatalogProductPrototypeMutation?: CatalogProductPrototypeMutationResolvers<ContextType>;
  CatalogProductCategoryMutation?: CatalogProductCategoryMutationResolvers<ContextType>;
  CatalogPriceGroupMutation?: CatalogPriceGroupMutationResolvers<ContextType>;
  CatalogManufacturerMutation?: CatalogManufacturerMutationResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = CatalogContext> = Resolvers<ContextType>;
