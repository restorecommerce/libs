import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { CatalogContext } from '../interfaces';
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
  MapScalar: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
  TodoScalar: any;
};

export type Query = {
  __typename?: 'Query';
  catalog: CatalogQuery;
};

export type CatalogQuery = {
  __typename?: 'CatalogQuery';
  product: CatalogProductQuery;
  product_prototype: CatalogProduct_PrototypeQuery;
  product_category: CatalogProduct_CategoryQuery;
  price_group: CatalogPrice_GroupQuery;
  manufacturer: CatalogManufacturerQuery;
};

export type CatalogProductQuery = {
  __typename?: 'CatalogProductQuery';
  Read?: Maybe<ProtoIoRestorecommerceProductProductList>;
};


export type CatalogProductQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceProductProductList = {
  __typename?: 'ProtoIoRestorecommerceProductProductList';
  status: StatusType;
  payload?: Maybe<IoRestorecommerceProductProductList>;
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

export type IoRestorecommerceProductProductList = {
  __typename?: 'IoRestorecommerceProductProductList';
  items: Array<IoRestorecommerceProductMainProduct>;
  totalCount: Scalars['Int'];
  subject: IoRestorecommerceAuthSubject;
};

export type IoRestorecommerceProductMainProduct = {
  __typename?: 'IoRestorecommerceProductMainProduct';
  id: Scalars['String'];
  product: IoRestorecommerceProductProduct;
  bundle: IoRestorecommerceProductBundle;
  active: Scalars['Boolean'];
  meta: IoRestorecommerceMetaMeta;
};

export type IoRestorecommerceProductProduct = {
  __typename?: 'IoRestorecommerceProductProduct';
  id: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  manufacturerId: Scalars['String'];
  taricCode: Scalars['String'];
  prototype: IoRestorecommerceProductIdentifier;
  category: IoRestorecommerceProductIdentifier;
  taxTypeId: Array<Scalars['String']>;
  variants: Array<IoRestorecommerceProductVariant>;
  gtin: Scalars['String'];
};

export type IoRestorecommerceProductIdentifier = {
  __typename?: 'IoRestorecommerceProductIdentifier';
  id: Scalars['String'];
};

export type IoRestorecommerceProductVariant = {
  __typename?: 'IoRestorecommerceProductVariant';
  id: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  stockLevel: Scalars['Int'];
  price: Scalars['Float'];
  sale: Scalars['Boolean'];
  salePrice: Scalars['Float'];
  image: Array<IoRestorecommerceImageImage>;
  stockKeepingUnit: Scalars['String'];
  attributes: Array<IoRestorecommerceProductVariantAttribute>;
};

export type IoRestorecommerceImageImage = {
  __typename?: 'IoRestorecommerceImageImage';
  id: Scalars['String'];
  caption: Scalars['String'];
  filename: Scalars['String'];
  contentType: Scalars['String'];
  url: Scalars['String'];
  width: Scalars['Float'];
  height: Scalars['Float'];
  length: Scalars['Float'];
};

export type IoRestorecommerceProductVariantAttribute = {
  __typename?: 'IoRestorecommerceProductVariantAttribute';
  key: Scalars['String'];
  values: Array<Scalars['String']>;
};

export type IoRestorecommerceProductBundle = {
  __typename?: 'IoRestorecommerceProductBundle';
  id: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  image: Array<IoRestorecommerceImageImage>;
  product: Array<IoRestorecommerceProductBundleProduct>;
  price: Scalars['Float'];
};

export type IoRestorecommerceProductBundleProduct = {
  __typename?: 'IoRestorecommerceProductBundleProduct';
  productId: Scalars['String'];
  quantity: Scalars['Int'];
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

export type IIoRestorecommerceResourcebaseReadRequest = {
  offset: Scalars['Int'];
  limit: Scalars['Int'];
  sort: Array<IIoRestorecommerceResourcebaseSort>;
  filter: IGoogleProtobufStruct;
  field: Array<IIoRestorecommerceResourcebaseFieldFilter>;
  search: Array<Scalars['String']>;
  localesLimiter: Array<Scalars['String']>;
  customQueries: Array<Scalars['String']>;
  customArguments: IGoogleProtobufAny;
  subject: IIoRestorecommerceAuthSubject;
};

export type IIoRestorecommerceResourcebaseSort = {
  field: Scalars['String'];
  order: IoRestorecommerceResourcebaseSortSortOrder;
};

export enum IoRestorecommerceResourcebaseSortSortOrder {
  Unsorted = 0,
  Ascending = 1,
  Descending = 2,
  Unrecognized = -1
}

export type IGoogleProtobufStruct = {
  fields: Scalars['MapScalar'];
};


export type IIoRestorecommerceResourcebaseFieldFilter = {
  name: Scalars['String'];
  include: Scalars['Boolean'];
};

export type IGoogleProtobufAny = {
  typeUrl: Scalars['String'];
  value: Scalars['Upload'];
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

export type CatalogProduct_PrototypeQuery = {
  __typename?: 'CatalogProduct_prototypeQuery';
  Read?: Maybe<ProtoIoRestorecommerceProduct_PrototypeProductPrototypeList>;
};


export type CatalogProduct_PrototypeQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceProduct_PrototypeProductPrototypeList = {
  __typename?: 'ProtoIoRestorecommerceProduct_prototypeProductPrototypeList';
  status: StatusType;
  payload?: Maybe<IoRestorecommerceProduct_PrototypeProductPrototypeList>;
};

export type IoRestorecommerceProduct_PrototypeProductPrototypeList = {
  __typename?: 'IoRestorecommerceProduct_prototypeProductPrototypeList';
  items: Array<IoRestorecommerceProduct_PrototypeProductPrototype>;
  totalCount: Scalars['Int'];
  subject: IoRestorecommerceAuthSubject;
};

export type IoRestorecommerceProduct_PrototypeProductPrototype = {
  __typename?: 'IoRestorecommerceProduct_prototypeProductPrototype';
  id: Scalars['String'];
  meta: IoRestorecommerceMetaMeta;
  name: Scalars['String'];
  version: Scalars['String'];
  description: Scalars['String'];
  categoryId: Scalars['String'];
};

export type CatalogProduct_CategoryQuery = {
  __typename?: 'CatalogProduct_categoryQuery';
  Read?: Maybe<ProtoIoRestorecommerceProduct_CategoryProductCategoryList>;
};


export type CatalogProduct_CategoryQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceProduct_CategoryProductCategoryList = {
  __typename?: 'ProtoIoRestorecommerceProduct_categoryProductCategoryList';
  status: StatusType;
  payload?: Maybe<IoRestorecommerceProduct_CategoryProductCategoryList>;
};

export type IoRestorecommerceProduct_CategoryProductCategoryList = {
  __typename?: 'IoRestorecommerceProduct_categoryProductCategoryList';
  items: Array<IoRestorecommerceProduct_CategoryProductCategory>;
  totalCount: Scalars['Int'];
  subject: IoRestorecommerceAuthSubject;
};

export type IoRestorecommerceProduct_CategoryProductCategory = {
  __typename?: 'IoRestorecommerceProduct_categoryProductCategory';
  id: Scalars['String'];
  meta: IoRestorecommerceMetaMeta;
  name: Scalars['String'];
  description: Scalars['String'];
  priceGroupId: Scalars['String'];
  image: IoRestorecommerceImageImage;
  parent: IoRestorecommerceProduct_CategoryParent;
};

export type IoRestorecommerceProduct_CategoryParent = {
  __typename?: 'IoRestorecommerceProduct_categoryParent';
  parentId: Scalars['String'];
};

export type CatalogPrice_GroupQuery = {
  __typename?: 'CatalogPrice_groupQuery';
  Read?: Maybe<ProtoIoRestorecommercePrice_GroupPriceGroupList>;
};


export type CatalogPrice_GroupQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommercePrice_GroupPriceGroupList = {
  __typename?: 'ProtoIoRestorecommercePrice_groupPriceGroupList';
  status: StatusType;
  payload?: Maybe<IoRestorecommercePrice_GroupPriceGroupList>;
};

export type IoRestorecommercePrice_GroupPriceGroupList = {
  __typename?: 'IoRestorecommercePrice_groupPriceGroupList';
  items: Array<IoRestorecommercePrice_GroupPriceGroup>;
  totalCount: Scalars['Int'];
  subject: IoRestorecommerceAuthSubject;
};

export type IoRestorecommercePrice_GroupPriceGroup = {
  __typename?: 'IoRestorecommercePrice_groupPriceGroup';
  id: Scalars['String'];
  meta: IoRestorecommerceMetaMeta;
  name: Scalars['String'];
  description: Scalars['String'];
};

export type CatalogManufacturerQuery = {
  __typename?: 'CatalogManufacturerQuery';
  Read?: Maybe<ProtoIoRestorecommerceManufacturerManufacturerList>;
};


export type CatalogManufacturerQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceManufacturerManufacturerList = {
  __typename?: 'ProtoIoRestorecommerceManufacturerManufacturerList';
  status: StatusType;
  payload?: Maybe<IoRestorecommerceManufacturerManufacturerList>;
};

export type IoRestorecommerceManufacturerManufacturerList = {
  __typename?: 'IoRestorecommerceManufacturerManufacturerList';
  items: Array<IoRestorecommerceManufacturerManufacturer>;
  totalCount: Scalars['Int'];
  subject: IoRestorecommerceAuthSubject;
};

export type IoRestorecommerceManufacturerManufacturer = {
  __typename?: 'IoRestorecommerceManufacturerManufacturer';
  id: Scalars['String'];
  meta: IoRestorecommerceMetaMeta;
  name: Scalars['String'];
  description: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  catalog: CatalogMutation;
};

export type CatalogMutation = {
  __typename?: 'CatalogMutation';
  product: CatalogProductMutation;
  product_prototype: CatalogProduct_PrototypeMutation;
  product_category: CatalogProduct_CategoryMutation;
  price_group: CatalogPrice_GroupMutation;
  manufacturer: CatalogManufacturerMutation;
};

export type CatalogProductMutation = {
  __typename?: 'CatalogProductMutation';
  Create?: Maybe<ProtoIoRestorecommerceProductProductList>;
  Delete?: Maybe<ProtoGoogleProtobufEmpty>;
  Update?: Maybe<ProtoIoRestorecommerceProductProductList>;
  Upsert?: Maybe<ProtoIoRestorecommerceProductProductList>;
};


export type CatalogProductMutationCreateArgs = {
  input: IIoRestorecommerceProductProductList;
};


export type CatalogProductMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type CatalogProductMutationUpdateArgs = {
  input: IIoRestorecommerceProductProductList;
};


export type CatalogProductMutationUpsertArgs = {
  input: IIoRestorecommerceProductProductList;
};

export type IIoRestorecommerceProductProductList = {
  items: Array<IIoRestorecommerceProductMainProduct>;
  totalCount: Scalars['Int'];
  subject: IIoRestorecommerceAuthSubject;
};

export type IIoRestorecommerceProductMainProduct = {
  id: Scalars['String'];
  product: Scalars['TodoScalar'];
  bundle: Scalars['TodoScalar'];
  active: Scalars['Boolean'];
  meta: IIoRestorecommerceMetaMeta;
};


export type IIoRestorecommerceMetaMeta = {
  created: Scalars['Float'];
  modified: Scalars['Float'];
  modifiedBy: Scalars['String'];
  owner: Array<IIoRestorecommerceAttributeAttribute>;
};

export type ProtoGoogleProtobufEmpty = {
  __typename?: 'ProtoGoogleProtobufEmpty';
  status: StatusType;
};

export type IIoRestorecommerceResourcebaseDeleteRequest = {
  collection: Scalars['Boolean'];
  ids: Array<Scalars['String']>;
  subject: IIoRestorecommerceAuthSubject;
};

export type CatalogProduct_PrototypeMutation = {
  __typename?: 'CatalogProduct_prototypeMutation';
  Create?: Maybe<ProtoIoRestorecommerceProduct_PrototypeProductPrototypeList>;
  Delete?: Maybe<ProtoGoogleProtobufEmpty>;
  Update?: Maybe<ProtoIoRestorecommerceProduct_PrototypeProductPrototypeList>;
  Upsert?: Maybe<ProtoIoRestorecommerceProduct_PrototypeProductPrototypeList>;
};


export type CatalogProduct_PrototypeMutationCreateArgs = {
  input: IIoRestorecommerceProduct_PrototypeProductPrototypeList;
};


export type CatalogProduct_PrototypeMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type CatalogProduct_PrototypeMutationUpdateArgs = {
  input: IIoRestorecommerceProduct_PrototypeProductPrototypeList;
};


export type CatalogProduct_PrototypeMutationUpsertArgs = {
  input: IIoRestorecommerceProduct_PrototypeProductPrototypeList;
};

export type IIoRestorecommerceProduct_PrototypeProductPrototypeList = {
  items: Array<IIoRestorecommerceProduct_PrototypeProductPrototype>;
  totalCount: Scalars['Int'];
  subject: IIoRestorecommerceAuthSubject;
};

export type IIoRestorecommerceProduct_PrototypeProductPrototype = {
  id: Scalars['String'];
  meta: IIoRestorecommerceMetaMeta;
  name: Scalars['String'];
  version: Scalars['String'];
  description: Scalars['String'];
  categoryId: Scalars['String'];
};

export type CatalogProduct_CategoryMutation = {
  __typename?: 'CatalogProduct_categoryMutation';
  Create?: Maybe<ProtoIoRestorecommerceProduct_CategoryProductCategoryList>;
  Delete?: Maybe<ProtoGoogleProtobufEmpty>;
  Update?: Maybe<ProtoIoRestorecommerceProduct_CategoryProductCategoryList>;
  Upsert?: Maybe<ProtoIoRestorecommerceProduct_CategoryProductCategoryList>;
};


export type CatalogProduct_CategoryMutationCreateArgs = {
  input: IIoRestorecommerceProduct_CategoryProductCategoryList;
};


export type CatalogProduct_CategoryMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type CatalogProduct_CategoryMutationUpdateArgs = {
  input: IIoRestorecommerceProduct_CategoryProductCategoryList;
};


export type CatalogProduct_CategoryMutationUpsertArgs = {
  input: IIoRestorecommerceProduct_CategoryProductCategoryList;
};

export type IIoRestorecommerceProduct_CategoryProductCategoryList = {
  items: Array<IIoRestorecommerceProduct_CategoryProductCategory>;
  totalCount: Scalars['Int'];
  subject: IIoRestorecommerceAuthSubject;
};

export type IIoRestorecommerceProduct_CategoryProductCategory = {
  id: Scalars['String'];
  meta: IIoRestorecommerceMetaMeta;
  name: Scalars['String'];
  description: Scalars['String'];
  priceGroupId: Scalars['String'];
  image: IIoRestorecommerceImageImage;
  parent: IIoRestorecommerceProduct_CategoryParent;
};

export type IIoRestorecommerceImageImage = {
  id: Scalars['String'];
  caption: Scalars['String'];
  filename: Scalars['String'];
  contentType: Scalars['String'];
  url: Scalars['String'];
  width: Scalars['Float'];
  height: Scalars['Float'];
  length: Scalars['Float'];
};

export type IIoRestorecommerceProduct_CategoryParent = {
  parentId: Scalars['String'];
};

export type CatalogPrice_GroupMutation = {
  __typename?: 'CatalogPrice_groupMutation';
  Create?: Maybe<ProtoIoRestorecommercePrice_GroupPriceGroupList>;
  Delete?: Maybe<ProtoGoogleProtobufEmpty>;
  Update?: Maybe<ProtoIoRestorecommercePrice_GroupPriceGroupList>;
  Upsert?: Maybe<ProtoIoRestorecommercePrice_GroupPriceGroupList>;
};


export type CatalogPrice_GroupMutationCreateArgs = {
  input: IIoRestorecommercePrice_GroupPriceGroupList;
};


export type CatalogPrice_GroupMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type CatalogPrice_GroupMutationUpdateArgs = {
  input: IIoRestorecommercePrice_GroupPriceGroupList;
};


export type CatalogPrice_GroupMutationUpsertArgs = {
  input: IIoRestorecommercePrice_GroupPriceGroupList;
};

export type IIoRestorecommercePrice_GroupPriceGroupList = {
  items: Array<IIoRestorecommercePrice_GroupPriceGroup>;
  totalCount: Scalars['Int'];
  subject: IIoRestorecommerceAuthSubject;
};

export type IIoRestorecommercePrice_GroupPriceGroup = {
  id: Scalars['String'];
  meta: IIoRestorecommerceMetaMeta;
  name: Scalars['String'];
  description: Scalars['String'];
};

export type CatalogManufacturerMutation = {
  __typename?: 'CatalogManufacturerMutation';
  Create?: Maybe<ProtoIoRestorecommerceManufacturerManufacturerList>;
  Delete?: Maybe<ProtoGoogleProtobufEmpty>;
  Update?: Maybe<ProtoIoRestorecommerceManufacturerManufacturerList>;
  Upsert?: Maybe<ProtoIoRestorecommerceManufacturerManufacturerList>;
};


export type CatalogManufacturerMutationCreateArgs = {
  input: IIoRestorecommerceManufacturerManufacturerList;
};


export type CatalogManufacturerMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type CatalogManufacturerMutationUpdateArgs = {
  input: IIoRestorecommerceManufacturerManufacturerList;
};


export type CatalogManufacturerMutationUpsertArgs = {
  input: IIoRestorecommerceManufacturerManufacturerList;
};

export type IIoRestorecommerceManufacturerManufacturerList = {
  items: Array<IIoRestorecommerceManufacturerManufacturer>;
  totalCount: Scalars['Int'];
  subject: IIoRestorecommerceAuthSubject;
};

export type IIoRestorecommerceManufacturerManufacturer = {
  id: Scalars['String'];
  meta: IIoRestorecommerceMetaMeta;
  name: Scalars['String'];
  description: Scalars['String'];
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
  ProtoIoRestorecommerceProductProductList: ResolverTypeWrapper<ProtoIoRestorecommerceProductProductList>;
  StatusType: ResolverTypeWrapper<StatusType>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IoRestorecommerceProductProductList: ResolverTypeWrapper<IoRestorecommerceProductProductList>;
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
  IoRestorecommerceAuthSubject: ResolverTypeWrapper<IoRestorecommerceAuthSubject>;
  IoRestorecommerceAuthRoleAssociation: ResolverTypeWrapper<IoRestorecommerceAuthRoleAssociation>;
  IoRestorecommerceAuthHierarchicalScope: ResolverTypeWrapper<IoRestorecommerceAuthHierarchicalScope>;
  IIoRestorecommerceResourcebaseReadRequest: IIoRestorecommerceResourcebaseReadRequest;
  IIoRestorecommerceResourcebaseSort: IIoRestorecommerceResourcebaseSort;
  IoRestorecommerceResourcebaseSortSortOrder: IoRestorecommerceResourcebaseSortSortOrder;
  IGoogleProtobufStruct: IGoogleProtobufStruct;
  MapScalar: ResolverTypeWrapper<Scalars['MapScalar']>;
  IIoRestorecommerceResourcebaseFieldFilter: IIoRestorecommerceResourcebaseFieldFilter;
  IGoogleProtobufAny: IGoogleProtobufAny;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  IIoRestorecommerceAuthSubject: IIoRestorecommerceAuthSubject;
  IIoRestorecommerceAuthRoleAssociation: IIoRestorecommerceAuthRoleAssociation;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceAuthHierarchicalScope: IIoRestorecommerceAuthHierarchicalScope;
  CatalogProduct_prototypeQuery: ResolverTypeWrapper<CatalogProduct_PrototypeQuery>;
  ProtoIoRestorecommerceProduct_prototypeProductPrototypeList: ResolverTypeWrapper<ProtoIoRestorecommerceProduct_PrototypeProductPrototypeList>;
  IoRestorecommerceProduct_prototypeProductPrototypeList: ResolverTypeWrapper<IoRestorecommerceProduct_PrototypeProductPrototypeList>;
  IoRestorecommerceProduct_prototypeProductPrototype: ResolverTypeWrapper<IoRestorecommerceProduct_PrototypeProductPrototype>;
  CatalogProduct_categoryQuery: ResolverTypeWrapper<CatalogProduct_CategoryQuery>;
  ProtoIoRestorecommerceProduct_categoryProductCategoryList: ResolverTypeWrapper<ProtoIoRestorecommerceProduct_CategoryProductCategoryList>;
  IoRestorecommerceProduct_categoryProductCategoryList: ResolverTypeWrapper<IoRestorecommerceProduct_CategoryProductCategoryList>;
  IoRestorecommerceProduct_categoryProductCategory: ResolverTypeWrapper<IoRestorecommerceProduct_CategoryProductCategory>;
  IoRestorecommerceProduct_categoryParent: ResolverTypeWrapper<IoRestorecommerceProduct_CategoryParent>;
  CatalogPrice_groupQuery: ResolverTypeWrapper<CatalogPrice_GroupQuery>;
  ProtoIoRestorecommercePrice_groupPriceGroupList: ResolverTypeWrapper<ProtoIoRestorecommercePrice_GroupPriceGroupList>;
  IoRestorecommercePrice_groupPriceGroupList: ResolverTypeWrapper<IoRestorecommercePrice_GroupPriceGroupList>;
  IoRestorecommercePrice_groupPriceGroup: ResolverTypeWrapper<IoRestorecommercePrice_GroupPriceGroup>;
  CatalogManufacturerQuery: ResolverTypeWrapper<CatalogManufacturerQuery>;
  ProtoIoRestorecommerceManufacturerManufacturerList: ResolverTypeWrapper<ProtoIoRestorecommerceManufacturerManufacturerList>;
  IoRestorecommerceManufacturerManufacturerList: ResolverTypeWrapper<IoRestorecommerceManufacturerManufacturerList>;
  IoRestorecommerceManufacturerManufacturer: ResolverTypeWrapper<IoRestorecommerceManufacturerManufacturer>;
  Mutation: ResolverTypeWrapper<{}>;
  CatalogMutation: ResolverTypeWrapper<CatalogMutation>;
  CatalogProductMutation: ResolverTypeWrapper<CatalogProductMutation>;
  IIoRestorecommerceProductProductList: IIoRestorecommerceProductProductList;
  IIoRestorecommerceProductMainProduct: IIoRestorecommerceProductMainProduct;
  TodoScalar: ResolverTypeWrapper<Scalars['TodoScalar']>;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  ProtoGoogleProtobufEmpty: ResolverTypeWrapper<ProtoGoogleProtobufEmpty>;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
  CatalogProduct_prototypeMutation: ResolverTypeWrapper<CatalogProduct_PrototypeMutation>;
  IIoRestorecommerceProduct_prototypeProductPrototypeList: IIoRestorecommerceProduct_PrototypeProductPrototypeList;
  IIoRestorecommerceProduct_prototypeProductPrototype: IIoRestorecommerceProduct_PrototypeProductPrototype;
  CatalogProduct_categoryMutation: ResolverTypeWrapper<CatalogProduct_CategoryMutation>;
  IIoRestorecommerceProduct_categoryProductCategoryList: IIoRestorecommerceProduct_CategoryProductCategoryList;
  IIoRestorecommerceProduct_categoryProductCategory: IIoRestorecommerceProduct_CategoryProductCategory;
  IIoRestorecommerceImageImage: IIoRestorecommerceImageImage;
  IIoRestorecommerceProduct_categoryParent: IIoRestorecommerceProduct_CategoryParent;
  CatalogPrice_groupMutation: ResolverTypeWrapper<CatalogPrice_GroupMutation>;
  IIoRestorecommercePrice_groupPriceGroupList: IIoRestorecommercePrice_GroupPriceGroupList;
  IIoRestorecommercePrice_groupPriceGroup: IIoRestorecommercePrice_GroupPriceGroup;
  CatalogManufacturerMutation: ResolverTypeWrapper<CatalogManufacturerMutation>;
  IIoRestorecommerceManufacturerManufacturerList: IIoRestorecommerceManufacturerManufacturerList;
  IIoRestorecommerceManufacturerManufacturer: IIoRestorecommerceManufacturerManufacturer;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  CatalogQuery: CatalogQuery;
  CatalogProductQuery: CatalogProductQuery;
  ProtoIoRestorecommerceProductProductList: ProtoIoRestorecommerceProductProductList;
  StatusType: StatusType;
  String: Scalars['String'];
  Int: Scalars['Int'];
  IoRestorecommerceProductProductList: IoRestorecommerceProductProductList;
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
  IoRestorecommerceAuthSubject: IoRestorecommerceAuthSubject;
  IoRestorecommerceAuthRoleAssociation: IoRestorecommerceAuthRoleAssociation;
  IoRestorecommerceAuthHierarchicalScope: IoRestorecommerceAuthHierarchicalScope;
  IIoRestorecommerceResourcebaseReadRequest: IIoRestorecommerceResourcebaseReadRequest;
  IIoRestorecommerceResourcebaseSort: IIoRestorecommerceResourcebaseSort;
  IGoogleProtobufStruct: IGoogleProtobufStruct;
  MapScalar: Scalars['MapScalar'];
  IIoRestorecommerceResourcebaseFieldFilter: IIoRestorecommerceResourcebaseFieldFilter;
  IGoogleProtobufAny: IGoogleProtobufAny;
  Upload: Scalars['Upload'];
  IIoRestorecommerceAuthSubject: IIoRestorecommerceAuthSubject;
  IIoRestorecommerceAuthRoleAssociation: IIoRestorecommerceAuthRoleAssociation;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceAuthHierarchicalScope: IIoRestorecommerceAuthHierarchicalScope;
  CatalogProduct_prototypeQuery: CatalogProduct_PrototypeQuery;
  ProtoIoRestorecommerceProduct_prototypeProductPrototypeList: ProtoIoRestorecommerceProduct_PrototypeProductPrototypeList;
  IoRestorecommerceProduct_prototypeProductPrototypeList: IoRestorecommerceProduct_PrototypeProductPrototypeList;
  IoRestorecommerceProduct_prototypeProductPrototype: IoRestorecommerceProduct_PrototypeProductPrototype;
  CatalogProduct_categoryQuery: CatalogProduct_CategoryQuery;
  ProtoIoRestorecommerceProduct_categoryProductCategoryList: ProtoIoRestorecommerceProduct_CategoryProductCategoryList;
  IoRestorecommerceProduct_categoryProductCategoryList: IoRestorecommerceProduct_CategoryProductCategoryList;
  IoRestorecommerceProduct_categoryProductCategory: IoRestorecommerceProduct_CategoryProductCategory;
  IoRestorecommerceProduct_categoryParent: IoRestorecommerceProduct_CategoryParent;
  CatalogPrice_groupQuery: CatalogPrice_GroupQuery;
  ProtoIoRestorecommercePrice_groupPriceGroupList: ProtoIoRestorecommercePrice_GroupPriceGroupList;
  IoRestorecommercePrice_groupPriceGroupList: IoRestorecommercePrice_GroupPriceGroupList;
  IoRestorecommercePrice_groupPriceGroup: IoRestorecommercePrice_GroupPriceGroup;
  CatalogManufacturerQuery: CatalogManufacturerQuery;
  ProtoIoRestorecommerceManufacturerManufacturerList: ProtoIoRestorecommerceManufacturerManufacturerList;
  IoRestorecommerceManufacturerManufacturerList: IoRestorecommerceManufacturerManufacturerList;
  IoRestorecommerceManufacturerManufacturer: IoRestorecommerceManufacturerManufacturer;
  Mutation: {};
  CatalogMutation: CatalogMutation;
  CatalogProductMutation: CatalogProductMutation;
  IIoRestorecommerceProductProductList: IIoRestorecommerceProductProductList;
  IIoRestorecommerceProductMainProduct: IIoRestorecommerceProductMainProduct;
  TodoScalar: Scalars['TodoScalar'];
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  ProtoGoogleProtobufEmpty: ProtoGoogleProtobufEmpty;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
  CatalogProduct_prototypeMutation: CatalogProduct_PrototypeMutation;
  IIoRestorecommerceProduct_prototypeProductPrototypeList: IIoRestorecommerceProduct_PrototypeProductPrototypeList;
  IIoRestorecommerceProduct_prototypeProductPrototype: IIoRestorecommerceProduct_PrototypeProductPrototype;
  CatalogProduct_categoryMutation: CatalogProduct_CategoryMutation;
  IIoRestorecommerceProduct_categoryProductCategoryList: IIoRestorecommerceProduct_CategoryProductCategoryList;
  IIoRestorecommerceProduct_categoryProductCategory: IIoRestorecommerceProduct_CategoryProductCategory;
  IIoRestorecommerceImageImage: IIoRestorecommerceImageImage;
  IIoRestorecommerceProduct_categoryParent: IIoRestorecommerceProduct_CategoryParent;
  CatalogPrice_groupMutation: CatalogPrice_GroupMutation;
  IIoRestorecommercePrice_groupPriceGroupList: IIoRestorecommercePrice_GroupPriceGroupList;
  IIoRestorecommercePrice_groupPriceGroup: IIoRestorecommercePrice_GroupPriceGroup;
  CatalogManufacturerMutation: CatalogManufacturerMutation;
  IIoRestorecommerceManufacturerManufacturerList: IIoRestorecommerceManufacturerManufacturerList;
  IIoRestorecommerceManufacturerManufacturer: IIoRestorecommerceManufacturerManufacturer;
}>;

export type QueryResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  catalog?: Resolver<ResolversTypes['CatalogQuery'], ParentType, ContextType>;
}>;

export type CatalogQueryResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['CatalogQuery'] = ResolversParentTypes['CatalogQuery']> = ResolversObject<{
  product?: Resolver<ResolversTypes['CatalogProductQuery'], ParentType, ContextType>;
  product_prototype?: Resolver<ResolversTypes['CatalogProduct_prototypeQuery'], ParentType, ContextType>;
  product_category?: Resolver<ResolversTypes['CatalogProduct_categoryQuery'], ParentType, ContextType>;
  price_group?: Resolver<ResolversTypes['CatalogPrice_groupQuery'], ParentType, ContextType>;
  manufacturer?: Resolver<ResolversTypes['CatalogManufacturerQuery'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogProductQueryResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['CatalogProductQuery'] = ResolversParentTypes['CatalogProductQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceProductProductList']>, ParentType, ContextType, RequireFields<CatalogProductQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceProductProductListResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceProductProductList'] = ResolversParentTypes['ProtoIoRestorecommerceProductProductList']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductProductList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StatusTypeResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['StatusType'] = ResolversParentTypes['StatusType']> = ResolversObject<{
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductProductListResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductProductList'] = ResolversParentTypes['IoRestorecommerceProductProductList']> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['IoRestorecommerceProductMainProduct']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['IoRestorecommerceAuthSubject'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductMainProductResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductMainProduct'] = ResolversParentTypes['IoRestorecommerceProductMainProduct']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  product?: Resolver<ResolversTypes['IoRestorecommerceProductProduct'], ParentType, ContextType>;
  bundle?: Resolver<ResolversTypes['IoRestorecommerceProductBundle'], ParentType, ContextType>;
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['IoRestorecommerceMetaMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductProductResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductProduct'] = ResolversParentTypes['IoRestorecommerceProductProduct']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  manufacturerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  taricCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  prototype?: Resolver<ResolversTypes['IoRestorecommerceProductIdentifier'], ParentType, ContextType>;
  category?: Resolver<ResolversTypes['IoRestorecommerceProductIdentifier'], ParentType, ContextType>;
  taxTypeId?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  variants?: Resolver<Array<ResolversTypes['IoRestorecommerceProductVariant']>, ParentType, ContextType>;
  gtin?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductIdentifierResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductIdentifier'] = ResolversParentTypes['IoRestorecommerceProductIdentifier']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductVariantResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductVariant'] = ResolversParentTypes['IoRestorecommerceProductVariant']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stockLevel?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  sale?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  salePrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  image?: Resolver<Array<ResolversTypes['IoRestorecommerceImageImage']>, ParentType, ContextType>;
  stockKeepingUnit?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  attributes?: Resolver<Array<ResolversTypes['IoRestorecommerceProductVariantAttribute']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceImageImageResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceImageImage'] = ResolversParentTypes['IoRestorecommerceImageImage']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  caption?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contentType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  width?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  length?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductVariantAttributeResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductVariantAttribute'] = ResolversParentTypes['IoRestorecommerceProductVariantAttribute']> = ResolversObject<{
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  values?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductBundleResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductBundle'] = ResolversParentTypes['IoRestorecommerceProductBundle']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<Array<ResolversTypes['IoRestorecommerceImageImage']>, ParentType, ContextType>;
  product?: Resolver<Array<ResolversTypes['IoRestorecommerceProductBundleProduct']>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductBundleProductResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductBundleProduct'] = ResolversParentTypes['IoRestorecommerceProductBundleProduct']> = ResolversObject<{
  productId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceMetaMetaResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceMetaMeta'] = ResolversParentTypes['IoRestorecommerceMetaMeta']> = ResolversObject<{
  created?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  modified?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  modifiedBy?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAttributeAttributeResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttribute'] = ResolversParentTypes['IoRestorecommerceAttributeAttribute']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthSubjectResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthSubject'] = ResolversParentTypes['IoRestorecommerceAuthSubject']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  scope?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  roleAssociations?: Resolver<Array<ResolversTypes['IoRestorecommerceAuthRoleAssociation']>, ParentType, ContextType>;
  hierarchicalScopes?: Resolver<Array<ResolversTypes['IoRestorecommerceAuthHierarchicalScope']>, ParentType, ContextType>;
  unauthenticated?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthRoleAssociationResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthRoleAssociation'] = ResolversParentTypes['IoRestorecommerceAuthRoleAssociation']> = ResolversObject<{
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  attributes?: Resolver<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthHierarchicalScopeResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthHierarchicalScope'] = ResolversParentTypes['IoRestorecommerceAuthHierarchicalScope']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['IoRestorecommerceAuthHierarchicalScope']>, ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceResourcebaseSortSortOrderResolvers = { UNSORTED: 'undefined', ASCENDING: 1, DESCENDING: 2, UNRECOGNIZED: -1 };

export interface MapScalarScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['MapScalar'], any> {
  name: 'MapScalar';
}

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type CatalogProduct_PrototypeQueryResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['CatalogProduct_prototypeQuery'] = ResolversParentTypes['CatalogProduct_prototypeQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceProduct_prototypeProductPrototypeList']>, ParentType, ContextType, RequireFields<CatalogProduct_PrototypeQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceProduct_PrototypeProductPrototypeListResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceProduct_prototypeProductPrototypeList'] = ResolversParentTypes['ProtoIoRestorecommerceProduct_prototypeProductPrototypeList']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProduct_prototypeProductPrototypeList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProduct_PrototypeProductPrototypeListResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProduct_prototypeProductPrototypeList'] = ResolversParentTypes['IoRestorecommerceProduct_prototypeProductPrototypeList']> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['IoRestorecommerceProduct_prototypeProductPrototype']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['IoRestorecommerceAuthSubject'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProduct_PrototypeProductPrototypeResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProduct_prototypeProductPrototype'] = ResolversParentTypes['IoRestorecommerceProduct_prototypeProductPrototype']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['IoRestorecommerceMetaMeta'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  categoryId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogProduct_CategoryQueryResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['CatalogProduct_categoryQuery'] = ResolversParentTypes['CatalogProduct_categoryQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceProduct_categoryProductCategoryList']>, ParentType, ContextType, RequireFields<CatalogProduct_CategoryQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceProduct_CategoryProductCategoryListResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceProduct_categoryProductCategoryList'] = ResolversParentTypes['ProtoIoRestorecommerceProduct_categoryProductCategoryList']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProduct_categoryProductCategoryList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProduct_CategoryProductCategoryListResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProduct_categoryProductCategoryList'] = ResolversParentTypes['IoRestorecommerceProduct_categoryProductCategoryList']> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['IoRestorecommerceProduct_categoryProductCategory']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['IoRestorecommerceAuthSubject'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProduct_CategoryProductCategoryResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProduct_categoryProductCategory'] = ResolversParentTypes['IoRestorecommerceProduct_categoryProductCategory']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['IoRestorecommerceMetaMeta'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  priceGroupId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['IoRestorecommerceImageImage'], ParentType, ContextType>;
  parent?: Resolver<ResolversTypes['IoRestorecommerceProduct_categoryParent'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProduct_CategoryParentResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProduct_categoryParent'] = ResolversParentTypes['IoRestorecommerceProduct_categoryParent']> = ResolversObject<{
  parentId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogPrice_GroupQueryResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['CatalogPrice_groupQuery'] = ResolversParentTypes['CatalogPrice_groupQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommercePrice_groupPriceGroupList']>, ParentType, ContextType, RequireFields<CatalogPrice_GroupQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommercePrice_GroupPriceGroupListResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommercePrice_groupPriceGroupList'] = ResolversParentTypes['ProtoIoRestorecommercePrice_groupPriceGroupList']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommercePrice_groupPriceGroupList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePrice_GroupPriceGroupListResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommercePrice_groupPriceGroupList'] = ResolversParentTypes['IoRestorecommercePrice_groupPriceGroupList']> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['IoRestorecommercePrice_groupPriceGroup']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['IoRestorecommerceAuthSubject'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePrice_GroupPriceGroupResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommercePrice_groupPriceGroup'] = ResolversParentTypes['IoRestorecommercePrice_groupPriceGroup']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['IoRestorecommerceMetaMeta'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogManufacturerQueryResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['CatalogManufacturerQuery'] = ResolversParentTypes['CatalogManufacturerQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceManufacturerManufacturerList']>, ParentType, ContextType, RequireFields<CatalogManufacturerQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceManufacturerManufacturerListResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceManufacturerManufacturerList'] = ResolversParentTypes['ProtoIoRestorecommerceManufacturerManufacturerList']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceManufacturerManufacturerList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceManufacturerManufacturerListResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceManufacturerManufacturerList'] = ResolversParentTypes['IoRestorecommerceManufacturerManufacturerList']> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['IoRestorecommerceManufacturerManufacturer']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['IoRestorecommerceAuthSubject'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceManufacturerManufacturerResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceManufacturerManufacturer'] = ResolversParentTypes['IoRestorecommerceManufacturerManufacturer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['IoRestorecommerceMetaMeta'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  catalog?: Resolver<ResolversTypes['CatalogMutation'], ParentType, ContextType>;
}>;

export type CatalogMutationResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['CatalogMutation'] = ResolversParentTypes['CatalogMutation']> = ResolversObject<{
  product?: Resolver<ResolversTypes['CatalogProductMutation'], ParentType, ContextType>;
  product_prototype?: Resolver<ResolversTypes['CatalogProduct_prototypeMutation'], ParentType, ContextType>;
  product_category?: Resolver<ResolversTypes['CatalogProduct_categoryMutation'], ParentType, ContextType>;
  price_group?: Resolver<ResolversTypes['CatalogPrice_groupMutation'], ParentType, ContextType>;
  manufacturer?: Resolver<ResolversTypes['CatalogManufacturerMutation'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogProductMutationResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['CatalogProductMutation'] = ResolversParentTypes['CatalogProductMutation']> = ResolversObject<{
  Create?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceProductProductList']>, ParentType, ContextType, RequireFields<CatalogProductMutationCreateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufEmpty']>, ParentType, ContextType, RequireFields<CatalogProductMutationDeleteArgs, 'input'>>;
  Update?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceProductProductList']>, ParentType, ContextType, RequireFields<CatalogProductMutationUpdateArgs, 'input'>>;
  Upsert?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceProductProductList']>, ParentType, ContextType, RequireFields<CatalogProductMutationUpsertArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface TodoScalarScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['TodoScalar'], any> {
  name: 'TodoScalar';
}

export type ProtoGoogleProtobufEmptyResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['ProtoGoogleProtobufEmpty'] = ResolversParentTypes['ProtoGoogleProtobufEmpty']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogProduct_PrototypeMutationResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['CatalogProduct_prototypeMutation'] = ResolversParentTypes['CatalogProduct_prototypeMutation']> = ResolversObject<{
  Create?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceProduct_prototypeProductPrototypeList']>, ParentType, ContextType, RequireFields<CatalogProduct_PrototypeMutationCreateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufEmpty']>, ParentType, ContextType, RequireFields<CatalogProduct_PrototypeMutationDeleteArgs, 'input'>>;
  Update?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceProduct_prototypeProductPrototypeList']>, ParentType, ContextType, RequireFields<CatalogProduct_PrototypeMutationUpdateArgs, 'input'>>;
  Upsert?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceProduct_prototypeProductPrototypeList']>, ParentType, ContextType, RequireFields<CatalogProduct_PrototypeMutationUpsertArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogProduct_CategoryMutationResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['CatalogProduct_categoryMutation'] = ResolversParentTypes['CatalogProduct_categoryMutation']> = ResolversObject<{
  Create?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceProduct_categoryProductCategoryList']>, ParentType, ContextType, RequireFields<CatalogProduct_CategoryMutationCreateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufEmpty']>, ParentType, ContextType, RequireFields<CatalogProduct_CategoryMutationDeleteArgs, 'input'>>;
  Update?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceProduct_categoryProductCategoryList']>, ParentType, ContextType, RequireFields<CatalogProduct_CategoryMutationUpdateArgs, 'input'>>;
  Upsert?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceProduct_categoryProductCategoryList']>, ParentType, ContextType, RequireFields<CatalogProduct_CategoryMutationUpsertArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogPrice_GroupMutationResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['CatalogPrice_groupMutation'] = ResolversParentTypes['CatalogPrice_groupMutation']> = ResolversObject<{
  Create?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommercePrice_groupPriceGroupList']>, ParentType, ContextType, RequireFields<CatalogPrice_GroupMutationCreateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufEmpty']>, ParentType, ContextType, RequireFields<CatalogPrice_GroupMutationDeleteArgs, 'input'>>;
  Update?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommercePrice_groupPriceGroupList']>, ParentType, ContextType, RequireFields<CatalogPrice_GroupMutationUpdateArgs, 'input'>>;
  Upsert?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommercePrice_groupPriceGroupList']>, ParentType, ContextType, RequireFields<CatalogPrice_GroupMutationUpsertArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogManufacturerMutationResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['CatalogManufacturerMutation'] = ResolversParentTypes['CatalogManufacturerMutation']> = ResolversObject<{
  Create?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceManufacturerManufacturerList']>, ParentType, ContextType, RequireFields<CatalogManufacturerMutationCreateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufEmpty']>, ParentType, ContextType, RequireFields<CatalogManufacturerMutationDeleteArgs, 'input'>>;
  Update?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceManufacturerManufacturerList']>, ParentType, ContextType, RequireFields<CatalogManufacturerMutationUpdateArgs, 'input'>>;
  Upsert?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceManufacturerManufacturerList']>, ParentType, ContextType, RequireFields<CatalogManufacturerMutationUpsertArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = CatalogContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  CatalogQuery?: CatalogQueryResolvers<ContextType>;
  CatalogProductQuery?: CatalogProductQueryResolvers<ContextType>;
  ProtoIoRestorecommerceProductProductList?: ProtoIoRestorecommerceProductProductListResolvers<ContextType>;
  StatusType?: StatusTypeResolvers<ContextType>;
  IoRestorecommerceProductProductList?: IoRestorecommerceProductProductListResolvers<ContextType>;
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
  IoRestorecommerceAuthSubject?: IoRestorecommerceAuthSubjectResolvers<ContextType>;
  IoRestorecommerceAuthRoleAssociation?: IoRestorecommerceAuthRoleAssociationResolvers<ContextType>;
  IoRestorecommerceAuthHierarchicalScope?: IoRestorecommerceAuthHierarchicalScopeResolvers<ContextType>;
  IoRestorecommerceResourcebaseSortSortOrder?: IoRestorecommerceResourcebaseSortSortOrderResolvers;
  MapScalar?: GraphQLScalarType;
  Upload?: GraphQLScalarType;
  CatalogProduct_prototypeQuery?: CatalogProduct_PrototypeQueryResolvers<ContextType>;
  ProtoIoRestorecommerceProduct_prototypeProductPrototypeList?: ProtoIoRestorecommerceProduct_PrototypeProductPrototypeListResolvers<ContextType>;
  IoRestorecommerceProduct_prototypeProductPrototypeList?: IoRestorecommerceProduct_PrototypeProductPrototypeListResolvers<ContextType>;
  IoRestorecommerceProduct_prototypeProductPrototype?: IoRestorecommerceProduct_PrototypeProductPrototypeResolvers<ContextType>;
  CatalogProduct_categoryQuery?: CatalogProduct_CategoryQueryResolvers<ContextType>;
  ProtoIoRestorecommerceProduct_categoryProductCategoryList?: ProtoIoRestorecommerceProduct_CategoryProductCategoryListResolvers<ContextType>;
  IoRestorecommerceProduct_categoryProductCategoryList?: IoRestorecommerceProduct_CategoryProductCategoryListResolvers<ContextType>;
  IoRestorecommerceProduct_categoryProductCategory?: IoRestorecommerceProduct_CategoryProductCategoryResolvers<ContextType>;
  IoRestorecommerceProduct_categoryParent?: IoRestorecommerceProduct_CategoryParentResolvers<ContextType>;
  CatalogPrice_groupQuery?: CatalogPrice_GroupQueryResolvers<ContextType>;
  ProtoIoRestorecommercePrice_groupPriceGroupList?: ProtoIoRestorecommercePrice_GroupPriceGroupListResolvers<ContextType>;
  IoRestorecommercePrice_groupPriceGroupList?: IoRestorecommercePrice_GroupPriceGroupListResolvers<ContextType>;
  IoRestorecommercePrice_groupPriceGroup?: IoRestorecommercePrice_GroupPriceGroupResolvers<ContextType>;
  CatalogManufacturerQuery?: CatalogManufacturerQueryResolvers<ContextType>;
  ProtoIoRestorecommerceManufacturerManufacturerList?: ProtoIoRestorecommerceManufacturerManufacturerListResolvers<ContextType>;
  IoRestorecommerceManufacturerManufacturerList?: IoRestorecommerceManufacturerManufacturerListResolvers<ContextType>;
  IoRestorecommerceManufacturerManufacturer?: IoRestorecommerceManufacturerManufacturerResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  CatalogMutation?: CatalogMutationResolvers<ContextType>;
  CatalogProductMutation?: CatalogProductMutationResolvers<ContextType>;
  TodoScalar?: GraphQLScalarType;
  ProtoGoogleProtobufEmpty?: ProtoGoogleProtobufEmptyResolvers<ContextType>;
  CatalogProduct_prototypeMutation?: CatalogProduct_PrototypeMutationResolvers<ContextType>;
  CatalogProduct_categoryMutation?: CatalogProduct_CategoryMutationResolvers<ContextType>;
  CatalogPrice_groupMutation?: CatalogPrice_GroupMutationResolvers<ContextType>;
  CatalogManufacturerMutation?: CatalogManufacturerMutationResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = CatalogContext> = Resolvers<ContextType>;
