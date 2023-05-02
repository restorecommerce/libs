import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { CatalogContext } from '../interfaces';
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
  GoogleProtobufAnyValue: any;
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
  details?: Maybe<IoRestorecommerceProductProductListResponse>;
};

export type IoRestorecommerceProductProductListResponse = {
  __typename?: 'IoRestorecommerceProductProductListResponse';
  items?: Maybe<Array<IoRestorecommerceProductProductResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
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
  manufacturer?: Maybe<IoRestorecommerceManufacturerManufacturer>;
  taricCode?: Maybe<Scalars['String']>;
  prototype?: Maybe<IoRestorecommerceProductIdentifier>;
  category?: Maybe<IoRestorecommerceProductIdentifier>;
  taxId?: Maybe<Array<Scalars['String']>>;
  variants?: Maybe<Array<IoRestorecommerceProductVariant>>;
  gtin?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceManufacturerManufacturer = {
  __typename?: 'IoRestorecommerceManufacturerManufacturer';
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceMetaMeta = {
  __typename?: 'IoRestorecommerceMetaMeta';
  created?: Maybe<Scalars['Float']>;
  modified?: Maybe<Scalars['Float']>;
  modifiedBy?: Maybe<Scalars['String']>;
  owner?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  acl?: Maybe<Array<IoRestorecommerceAttributeAttributeObj>>;
};

export type IoRestorecommerceAttributeAttribute = {
  __typename?: 'IoRestorecommerceAttributeAttribute';
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  attribute?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
};

export type IoRestorecommerceAttributeAttributeObj = {
  __typename?: 'IoRestorecommerceAttributeAttributeObj';
  attribute?: Maybe<IoRestorecommerceAttributeAttribute>;
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
  templateVariant?: Maybe<Scalars['String']>;
  attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
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

export type IIoRestorecommerceResourcebaseReadRequest = {
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<IIoRestorecommerceResourcebaseSort>>;
  filters?: InputMaybe<Array<IIoRestorecommerceResourcebaseFilterOp>>;
  field?: InputMaybe<Array<IIoRestorecommerceResourcebaseFieldFilter>>;
  localesLimiter?: InputMaybe<Array<Scalars['String']>>;
  customQueries?: InputMaybe<Array<Scalars['String']>>;
  customArguments?: InputMaybe<IGoogleProtobufAny>;
  search?: InputMaybe<IIoRestorecommerceResourcebaseSearch>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceResourcebaseSort = {
  field?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<IoRestorecommerceResourcebaseSortSortOrder>;
};

export enum IoRestorecommerceResourcebaseSortSortOrder {
  Unsorted = 0,
  Ascending = 1,
  Descending = 2
}

export type IIoRestorecommerceResourcebaseFilterOp = {
  filter?: InputMaybe<Array<IIoRestorecommerceResourcebaseFilter>>;
  operator?: InputMaybe<IoRestorecommerceResourcebaseFilterOpOperator>;
};

export type IIoRestorecommerceResourcebaseFilter = {
  field?: InputMaybe<Scalars['String']>;
  operation?: InputMaybe<IoRestorecommerceResourcebaseFilterOperation>;
  value?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<IoRestorecommerceResourcebaseFilterValueType>;
  filters?: InputMaybe<Array<IIoRestorecommerceFilterFilterOp>>;
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

export type IIoRestorecommerceFilterFilterOp = {
  filter?: InputMaybe<Array<IIoRestorecommerceFilterFilter>>;
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

export enum IoRestorecommerceResourcebaseFilterOpOperator {
  And = 0,
  Or = 1
}

export type IIoRestorecommerceResourcebaseFieldFilter = {
  name?: InputMaybe<Scalars['String']>;
  include?: InputMaybe<Scalars['Boolean']>;
};

export type IGoogleProtobufAny = {
  typeUrl?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['GoogleProtobufAnyValue']>;
};

export type IIoRestorecommerceResourcebaseSearch = {
  search?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<Array<Scalars['String']>>;
  caseSensitive?: InputMaybe<Scalars['Boolean']>;
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
  details?: Maybe<IoRestorecommerceProductPrototypeProductPrototypeListResponse>;
};

export type IoRestorecommerceProductPrototypeProductPrototypeListResponse = {
  __typename?: 'IoRestorecommerceProductPrototypeProductPrototypeListResponse';
  items?: Maybe<Array<IoRestorecommerceProductPrototypeProductPrototypeResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
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
  details?: Maybe<IoRestorecommerceProductCategoryProductCategoryListResponse>;
};

export type IoRestorecommerceProductCategoryProductCategoryListResponse = {
  __typename?: 'IoRestorecommerceProductCategoryProductCategoryListResponse';
  items?: Maybe<Array<IoRestorecommerceProductCategoryProductCategoryResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
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
  priceGroup?: Maybe<IoRestorecommercePriceGroupPriceGroup>;
  image?: Maybe<IoRestorecommerceImageImage>;
  parent?: Maybe<IoRestorecommerceProductCategoryParent>;
};

export type IoRestorecommercePriceGroupPriceGroup = {
  __typename?: 'IoRestorecommercePriceGroupPriceGroup';
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
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
  details?: Maybe<IoRestorecommercePriceGroupPriceGroupListResponse>;
};

export type IoRestorecommercePriceGroupPriceGroupListResponse = {
  __typename?: 'IoRestorecommercePriceGroupPriceGroupListResponse';
  items?: Maybe<Array<IoRestorecommercePriceGroupPriceGroupResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommercePriceGroupPriceGroupResponse = {
  __typename?: 'IoRestorecommercePriceGroupPriceGroupResponse';
  payload?: Maybe<IoRestorecommercePriceGroupPriceGroup>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
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
  details?: Maybe<IoRestorecommerceManufacturerManufacturerListResponse>;
};

export type IoRestorecommerceManufacturerManufacturerListResponse = {
  __typename?: 'IoRestorecommerceManufacturerManufacturerListResponse';
  items?: Maybe<Array<IoRestorecommerceManufacturerManufacturerResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceManufacturerManufacturerResponse = {
  __typename?: 'IoRestorecommerceManufacturerManufacturerResponse';
  payload?: Maybe<IoRestorecommerceManufacturerManufacturer>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
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
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type CatalogProductMutationMutateArgs = {
  input: IIoRestorecommerceProductProductList;
};


export type CatalogProductMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceProductProductList = {
  items?: InputMaybe<Array<IIoRestorecommerceProductMainProduct>>;
  totalCount?: InputMaybe<Scalars['Int']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceProductMainProduct = {
  id?: InputMaybe<Scalars['String']>;
  product?: InputMaybe<IIoRestorecommerceProductProduct>;
  bundle?: InputMaybe<IIoRestorecommerceProductBundle>;
  active?: InputMaybe<Scalars['Boolean']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
};

export type IIoRestorecommerceProductProduct = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  manufacturerId?: InputMaybe<Scalars['String']>;
  taricCode?: InputMaybe<Scalars['String']>;
  prototype?: InputMaybe<IIoRestorecommerceProductIdentifier>;
  category?: InputMaybe<IIoRestorecommerceProductIdentifier>;
  taxId?: InputMaybe<Array<Scalars['String']>>;
  variants?: InputMaybe<Array<IIoRestorecommerceProductVariant>>;
  gtin?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceProductIdentifier = {
  id?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceProductVariant = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  stockLevel?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Float']>;
  sale?: InputMaybe<Scalars['Boolean']>;
  salePrice?: InputMaybe<Scalars['Float']>;
  image?: InputMaybe<Array<IIoRestorecommerceImageImage>>;
  stockKeepingUnit?: InputMaybe<Scalars['String']>;
  templateVariant?: InputMaybe<Scalars['String']>;
  attributes?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
};

export type IIoRestorecommerceImageImage = {
  id?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  filename?: InputMaybe<Scalars['String']>;
  contentType?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  length?: InputMaybe<Scalars['Float']>;
};

export type IIoRestorecommerceAttributeAttribute = {
  id?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
  attribute?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
};

export type IIoRestorecommerceProductBundle = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Array<IIoRestorecommerceImageImage>>;
  product?: InputMaybe<Array<IIoRestorecommerceProductBundleProduct>>;
  price?: InputMaybe<Scalars['Float']>;
};

export type IIoRestorecommerceProductBundleProduct = {
  productId?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommerceMetaMeta = {
  created?: InputMaybe<Scalars['Float']>;
  modified?: InputMaybe<Scalars['Float']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
  acl?: InputMaybe<Array<IIoRestorecommerceAttributeAttributeObj>>;
};

export type IIoRestorecommerceAttributeAttributeObj = {
  attribute?: InputMaybe<IIoRestorecommerceAttributeAttribute>;
};

export enum ModeType {
  Create = 'CREATE',
  Update = 'UPDATE',
  Upsert = 'UPSERT'
}

export type ProtoIoRestorecommerceResourcebaseDeleteResponse = {
  __typename?: 'ProtoIoRestorecommerceResourcebaseDeleteResponse';
  details?: Maybe<IoRestorecommerceResourcebaseDeleteResponse>;
};

export type IoRestorecommerceResourcebaseDeleteResponse = {
  __typename?: 'IoRestorecommerceResourcebaseDeleteResponse';
  status?: Maybe<Array<IoRestorecommerceStatusStatus>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IIoRestorecommerceResourcebaseDeleteRequest = {
  collection?: InputMaybe<Scalars['Boolean']>;
  ids?: InputMaybe<Array<Scalars['String']>>;
  view?: InputMaybe<Array<Scalars['String']>>;
  analyzer?: InputMaybe<Array<Scalars['String']>>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
};

export type CatalogProductPrototypeMutation = {
  __typename?: 'CatalogProductPrototypeMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type CatalogProductPrototypeMutationMutateArgs = {
  input: IIoRestorecommerceProductPrototypeProductPrototypeList;
};


export type CatalogProductPrototypeMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceProductPrototypeProductPrototypeList = {
  items?: InputMaybe<Array<IIoRestorecommerceProductPrototypeProductPrototype>>;
  totalCount?: InputMaybe<Scalars['Int']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceProductPrototypeProductPrototype = {
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  categoryId?: InputMaybe<Scalars['String']>;
};

export type CatalogProductCategoryMutation = {
  __typename?: 'CatalogProductCategoryMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceProductCategoryProductCategoryListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type CatalogProductCategoryMutationMutateArgs = {
  input: IIoRestorecommerceProductCategoryProductCategoryList;
};


export type CatalogProductCategoryMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceProductCategoryProductCategoryList = {
  items?: InputMaybe<Array<IIoRestorecommerceProductCategoryProductCategory>>;
  totalCount?: InputMaybe<Scalars['Int']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceProductCategoryProductCategory = {
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  priceGroupId?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<IIoRestorecommerceImageImage>;
  parent?: InputMaybe<IIoRestorecommerceProductCategoryParent>;
};

export type IIoRestorecommerceProductCategoryParent = {
  parentId?: InputMaybe<Scalars['String']>;
};

export type CatalogPriceGroupMutation = {
  __typename?: 'CatalogPriceGroupMutation';
  Mutate?: Maybe<ProtoIoRestorecommercePriceGroupPriceGroupListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type CatalogPriceGroupMutationMutateArgs = {
  input: IIoRestorecommercePriceGroupPriceGroupList;
};


export type CatalogPriceGroupMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommercePriceGroupPriceGroupList = {
  items?: InputMaybe<Array<IIoRestorecommercePriceGroupPriceGroup>>;
  totalCount?: InputMaybe<Scalars['Int']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommercePriceGroupPriceGroup = {
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
};

export type CatalogManufacturerMutation = {
  __typename?: 'CatalogManufacturerMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceManufacturerManufacturerListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type CatalogManufacturerMutationMutateArgs = {
  input: IIoRestorecommerceManufacturerManufacturerList;
};


export type CatalogManufacturerMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceManufacturerManufacturerList = {
  items?: InputMaybe<Array<IIoRestorecommerceManufacturerManufacturer>>;
  totalCount?: InputMaybe<Scalars['Int']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceManufacturerManufacturer = {
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  orderingOrders?: Maybe<SubscriptionOutput>;
};


export type SubscriptionOrderingOrdersArgs = {
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
  CatalogQuery: ResolverTypeWrapper<CatalogQuery>;
  CatalogProductQuery: ResolverTypeWrapper<CatalogProductQuery>;
  ProtoIoRestorecommerceProductProductListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceProductProductListResponse>;
  IoRestorecommerceProductProductListResponse: ResolverTypeWrapper<IoRestorecommerceProductProductListResponse>;
  IoRestorecommerceProductProductResponse: ResolverTypeWrapper<IoRestorecommerceProductProductResponse>;
  IoRestorecommerceProductMainProduct: ResolverTypeWrapper<IoRestorecommerceProductMainProduct>;
  String: ResolverTypeWrapper<Scalars['String']>;
  IoRestorecommerceProductProduct: ResolverTypeWrapper<IoRestorecommerceProductProduct>;
  IoRestorecommerceManufacturerManufacturer: ResolverTypeWrapper<IoRestorecommerceManufacturerManufacturer>;
  IoRestorecommerceMetaMeta: ResolverTypeWrapper<IoRestorecommerceMetaMeta>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  IoRestorecommerceAttributeAttribute: ResolverTypeWrapper<IoRestorecommerceAttributeAttribute>;
  IoRestorecommerceAttributeAttributeObj: ResolverTypeWrapper<IoRestorecommerceAttributeAttributeObj>;
  IoRestorecommerceProductIdentifier: ResolverTypeWrapper<IoRestorecommerceProductIdentifier>;
  IoRestorecommerceProductVariant: ResolverTypeWrapper<IoRestorecommerceProductVariant>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  IoRestorecommerceImageImage: ResolverTypeWrapper<IoRestorecommerceImageImage>;
  IoRestorecommerceProductBundle: ResolverTypeWrapper<IoRestorecommerceProductBundle>;
  IoRestorecommerceProductBundleProduct: ResolverTypeWrapper<IoRestorecommerceProductBundleProduct>;
  IoRestorecommerceStatusStatus: ResolverTypeWrapper<IoRestorecommerceStatusStatus>;
  IoRestorecommerceStatusOperationStatus: ResolverTypeWrapper<IoRestorecommerceStatusOperationStatus>;
  IIoRestorecommerceResourcebaseReadRequest: IIoRestorecommerceResourcebaseReadRequest;
  IIoRestorecommerceResourcebaseSort: IIoRestorecommerceResourcebaseSort;
  IoRestorecommerceResourcebaseSortSortOrder: IoRestorecommerceResourcebaseSortSortOrder;
  IIoRestorecommerceResourcebaseFilterOp: IIoRestorecommerceResourcebaseFilterOp;
  IIoRestorecommerceResourcebaseFilter: IIoRestorecommerceResourcebaseFilter;
  IoRestorecommerceResourcebaseFilterOperation: IoRestorecommerceResourcebaseFilterOperation;
  IoRestorecommerceResourcebaseFilterValueType: IoRestorecommerceResourcebaseFilterValueType;
  IIoRestorecommerceFilterFilterOp: IIoRestorecommerceFilterFilterOp;
  IIoRestorecommerceFilterFilter: IIoRestorecommerceFilterFilter;
  IoRestorecommerceFilterFilterOperation: IoRestorecommerceFilterFilterOperation;
  IoRestorecommerceFilterFilterValueType: IoRestorecommerceFilterFilterValueType;
  IoRestorecommerceFilterFilterOpOperator: IoRestorecommerceFilterFilterOpOperator;
  IoRestorecommerceResourcebaseFilterOpOperator: IoRestorecommerceResourcebaseFilterOpOperator;
  IIoRestorecommerceResourcebaseFieldFilter: IIoRestorecommerceResourcebaseFieldFilter;
  IGoogleProtobufAny: IGoogleProtobufAny;
  GoogleProtobufAnyValue: ResolverTypeWrapper<Scalars['GoogleProtobufAnyValue']>;
  IIoRestorecommerceResourcebaseSearch: IIoRestorecommerceResourcebaseSearch;
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
  IoRestorecommercePriceGroupPriceGroup: ResolverTypeWrapper<IoRestorecommercePriceGroupPriceGroup>;
  IoRestorecommerceProductCategoryParent: ResolverTypeWrapper<IoRestorecommerceProductCategoryParent>;
  CatalogPriceGroupQuery: ResolverTypeWrapper<CatalogPriceGroupQuery>;
  ProtoIoRestorecommercePriceGroupPriceGroupListResponse: ResolverTypeWrapper<ProtoIoRestorecommercePriceGroupPriceGroupListResponse>;
  IoRestorecommercePriceGroupPriceGroupListResponse: ResolverTypeWrapper<IoRestorecommercePriceGroupPriceGroupListResponse>;
  IoRestorecommercePriceGroupPriceGroupResponse: ResolverTypeWrapper<IoRestorecommercePriceGroupPriceGroupResponse>;
  CatalogManufacturerQuery: ResolverTypeWrapper<CatalogManufacturerQuery>;
  ProtoIoRestorecommerceManufacturerManufacturerListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceManufacturerManufacturerListResponse>;
  IoRestorecommerceManufacturerManufacturerListResponse: ResolverTypeWrapper<IoRestorecommerceManufacturerManufacturerListResponse>;
  IoRestorecommerceManufacturerManufacturerResponse: ResolverTypeWrapper<IoRestorecommerceManufacturerManufacturerResponse>;
  Mutation: ResolverTypeWrapper<{}>;
  CatalogMutation: ResolverTypeWrapper<CatalogMutation>;
  CatalogProductMutation: ResolverTypeWrapper<CatalogProductMutation>;
  IIoRestorecommerceProductProductList: IIoRestorecommerceProductProductList;
  IIoRestorecommerceProductMainProduct: IIoRestorecommerceProductMainProduct;
  IIoRestorecommerceProductProduct: IIoRestorecommerceProductProduct;
  IIoRestorecommerceProductIdentifier: IIoRestorecommerceProductIdentifier;
  IIoRestorecommerceProductVariant: IIoRestorecommerceProductVariant;
  IIoRestorecommerceImageImage: IIoRestorecommerceImageImage;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceProductBundle: IIoRestorecommerceProductBundle;
  IIoRestorecommerceProductBundleProduct: IIoRestorecommerceProductBundleProduct;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IIoRestorecommerceAttributeAttributeObj: IIoRestorecommerceAttributeAttributeObj;
  ModeType: ModeType;
  ProtoIoRestorecommerceResourcebaseDeleteResponse: ResolverTypeWrapper<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  IoRestorecommerceResourcebaseDeleteResponse: ResolverTypeWrapper<IoRestorecommerceResourcebaseDeleteResponse>;
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
  Subscription: ResolverTypeWrapper<{}>;
  SubscriptionOutput: ResolverTypeWrapper<SubscriptionOutput>;
  SubscriptionAction: SubscriptionAction;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  CatalogQuery: CatalogQuery;
  CatalogProductQuery: CatalogProductQuery;
  ProtoIoRestorecommerceProductProductListResponse: ProtoIoRestorecommerceProductProductListResponse;
  IoRestorecommerceProductProductListResponse: IoRestorecommerceProductProductListResponse;
  IoRestorecommerceProductProductResponse: IoRestorecommerceProductProductResponse;
  IoRestorecommerceProductMainProduct: IoRestorecommerceProductMainProduct;
  String: Scalars['String'];
  IoRestorecommerceProductProduct: IoRestorecommerceProductProduct;
  IoRestorecommerceManufacturerManufacturer: IoRestorecommerceManufacturerManufacturer;
  IoRestorecommerceMetaMeta: IoRestorecommerceMetaMeta;
  Float: Scalars['Float'];
  IoRestorecommerceAttributeAttribute: IoRestorecommerceAttributeAttribute;
  IoRestorecommerceAttributeAttributeObj: IoRestorecommerceAttributeAttributeObj;
  IoRestorecommerceProductIdentifier: IoRestorecommerceProductIdentifier;
  IoRestorecommerceProductVariant: IoRestorecommerceProductVariant;
  Int: Scalars['Int'];
  Boolean: Scalars['Boolean'];
  IoRestorecommerceImageImage: IoRestorecommerceImageImage;
  IoRestorecommerceProductBundle: IoRestorecommerceProductBundle;
  IoRestorecommerceProductBundleProduct: IoRestorecommerceProductBundleProduct;
  IoRestorecommerceStatusStatus: IoRestorecommerceStatusStatus;
  IoRestorecommerceStatusOperationStatus: IoRestorecommerceStatusOperationStatus;
  IIoRestorecommerceResourcebaseReadRequest: IIoRestorecommerceResourcebaseReadRequest;
  IIoRestorecommerceResourcebaseSort: IIoRestorecommerceResourcebaseSort;
  IIoRestorecommerceResourcebaseFilterOp: IIoRestorecommerceResourcebaseFilterOp;
  IIoRestorecommerceResourcebaseFilter: IIoRestorecommerceResourcebaseFilter;
  IIoRestorecommerceFilterFilterOp: IIoRestorecommerceFilterFilterOp;
  IIoRestorecommerceFilterFilter: IIoRestorecommerceFilterFilter;
  IIoRestorecommerceResourcebaseFieldFilter: IIoRestorecommerceResourcebaseFieldFilter;
  IGoogleProtobufAny: IGoogleProtobufAny;
  GoogleProtobufAnyValue: Scalars['GoogleProtobufAnyValue'];
  IIoRestorecommerceResourcebaseSearch: IIoRestorecommerceResourcebaseSearch;
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
  IoRestorecommercePriceGroupPriceGroup: IoRestorecommercePriceGroupPriceGroup;
  IoRestorecommerceProductCategoryParent: IoRestorecommerceProductCategoryParent;
  CatalogPriceGroupQuery: CatalogPriceGroupQuery;
  ProtoIoRestorecommercePriceGroupPriceGroupListResponse: ProtoIoRestorecommercePriceGroupPriceGroupListResponse;
  IoRestorecommercePriceGroupPriceGroupListResponse: IoRestorecommercePriceGroupPriceGroupListResponse;
  IoRestorecommercePriceGroupPriceGroupResponse: IoRestorecommercePriceGroupPriceGroupResponse;
  CatalogManufacturerQuery: CatalogManufacturerQuery;
  ProtoIoRestorecommerceManufacturerManufacturerListResponse: ProtoIoRestorecommerceManufacturerManufacturerListResponse;
  IoRestorecommerceManufacturerManufacturerListResponse: IoRestorecommerceManufacturerManufacturerListResponse;
  IoRestorecommerceManufacturerManufacturerResponse: IoRestorecommerceManufacturerManufacturerResponse;
  Mutation: {};
  CatalogMutation: CatalogMutation;
  CatalogProductMutation: CatalogProductMutation;
  IIoRestorecommerceProductProductList: IIoRestorecommerceProductProductList;
  IIoRestorecommerceProductMainProduct: IIoRestorecommerceProductMainProduct;
  IIoRestorecommerceProductProduct: IIoRestorecommerceProductProduct;
  IIoRestorecommerceProductIdentifier: IIoRestorecommerceProductIdentifier;
  IIoRestorecommerceProductVariant: IIoRestorecommerceProductVariant;
  IIoRestorecommerceImageImage: IIoRestorecommerceImageImage;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceProductBundle: IIoRestorecommerceProductBundle;
  IIoRestorecommerceProductBundleProduct: IIoRestorecommerceProductBundleProduct;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IIoRestorecommerceAttributeAttributeObj: IIoRestorecommerceAttributeAttributeObj;
  ProtoIoRestorecommerceResourcebaseDeleteResponse: ProtoIoRestorecommerceResourcebaseDeleteResponse;
  IoRestorecommerceResourcebaseDeleteResponse: IoRestorecommerceResourcebaseDeleteResponse;
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
  Subscription: {};
  SubscriptionOutput: SubscriptionOutput;
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
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductProductListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductProductListResponseResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductProductListResponse'] = ResolversParentTypes['IoRestorecommerceProductProductListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceProductProductResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
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
  manufacturer?: Resolver<Maybe<ResolversTypes['IoRestorecommerceManufacturerManufacturer']>, ParentType, ContextType>;
  taricCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prototype?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductIdentifier']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductIdentifier']>, ParentType, ContextType>;
  taxId?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  variants?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceProductVariant']>>, ParentType, ContextType>;
  gtin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceManufacturerManufacturerResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceManufacturerManufacturer'] = ResolversParentTypes['IoRestorecommerceManufacturerManufacturer']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceMetaMetaResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceMetaMeta'] = ResolversParentTypes['IoRestorecommerceMetaMeta']> = ResolversObject<{
  created?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  modified?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  modifiedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  acl?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttributeObj']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAttributeAttributeResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttribute'] = ResolversParentTypes['IoRestorecommerceAttributeAttribute']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attribute?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAttributeAttributeObjResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttributeObj'] = ResolversParentTypes['IoRestorecommerceAttributeAttributeObj']> = ResolversObject<{
  attribute?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAttributeAttribute']>, ParentType, ContextType>;
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
  templateVariant?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attributes?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
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

export type IoRestorecommerceStatusStatusResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusStatus'] = ResolversParentTypes['IoRestorecommerceStatusStatus']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceStatusOperationStatusResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusOperationStatus'] = ResolversParentTypes['IoRestorecommerceStatusOperationStatus']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceResourcebaseSortSortOrderResolvers = { UNSORTED: 0, ASCENDING: 1, DESCENDING: 2 };

export type IoRestorecommerceResourcebaseFilterOperationResolvers = { eq: 0, lt: 1, lte: 2, gt: 3, gte: 4, isEmpty: 5, iLike: 6, in: 7, neq: 8 };

export type IoRestorecommerceResourcebaseFilterValueTypeResolvers = { STRING: 0, NUMBER: 1, BOOLEAN: 2, DATE: 3, ARRAY: 4 };

export type IoRestorecommerceFilterFilterOperationResolvers = { eq: 0, lt: 1, lte: 2, gt: 3, gte: 4, isEmpty: 5, iLike: 6, in: 7, neq: 8 };

export type IoRestorecommerceFilterFilterValueTypeResolvers = { STRING: 0, NUMBER: 1, BOOLEAN: 2, DATE: 3, ARRAY: 4 };

export type IoRestorecommerceFilterFilterOpOperatorResolvers = { and: 0, or: 1 };

export type IoRestorecommerceResourcebaseFilterOpOperatorResolvers = { and: 0, or: 1 };

export interface GoogleProtobufAnyValueScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GoogleProtobufAnyValue'], any> {
  name: 'GoogleProtobufAnyValue';
}

export type CatalogProductPrototypeQueryResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['CatalogProductPrototypeQuery'] = ResolversParentTypes['CatalogProductPrototypeQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse']>, ParentType, ContextType, RequireFields<CatalogProductPrototypeQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponseResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductPrototypeProductPrototypeListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductPrototypeProductPrototypeListResponseResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductPrototypeProductPrototypeListResponse'] = ResolversParentTypes['IoRestorecommerceProductPrototypeProductPrototypeListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceProductPrototypeProductPrototypeResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
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
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductCategoryProductCategoryListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductCategoryProductCategoryListResponseResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductCategoryProductCategoryListResponse'] = ResolversParentTypes['IoRestorecommerceProductCategoryProductCategoryListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceProductCategoryProductCategoryResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
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
  priceGroup?: Resolver<Maybe<ResolversTypes['IoRestorecommercePriceGroupPriceGroup']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['IoRestorecommerceImageImage']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductCategoryParent']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePriceGroupPriceGroupResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommercePriceGroupPriceGroup'] = ResolversParentTypes['IoRestorecommercePriceGroupPriceGroup']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommercePriceGroupPriceGroupListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePriceGroupPriceGroupListResponseResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommercePriceGroupPriceGroupListResponse'] = ResolversParentTypes['IoRestorecommercePriceGroupPriceGroupListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommercePriceGroupPriceGroupResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePriceGroupPriceGroupResponseResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommercePriceGroupPriceGroupResponse'] = ResolversParentTypes['IoRestorecommercePriceGroupPriceGroupResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommercePriceGroupPriceGroup']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogManufacturerQueryResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['CatalogManufacturerQuery'] = ResolversParentTypes['CatalogManufacturerQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceManufacturerManufacturerListResponse']>, ParentType, ContextType, RequireFields<CatalogManufacturerQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceManufacturerManufacturerListResponseResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceManufacturerManufacturerListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceManufacturerManufacturerListResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceManufacturerManufacturerListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceManufacturerManufacturerListResponseResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceManufacturerManufacturerListResponse'] = ResolversParentTypes['IoRestorecommerceManufacturerManufacturerListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceManufacturerManufacturerResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceManufacturerManufacturerResponseResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceManufacturerManufacturerResponse'] = ResolversParentTypes['IoRestorecommerceManufacturerManufacturerResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceManufacturerManufacturer']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
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
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<CatalogProductMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse'] = ResolversParentTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceResourcebaseDeleteResponse'] = ResolversParentTypes['IoRestorecommerceResourcebaseDeleteResponse']> = ResolversObject<{
  status?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceStatusStatus']>>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogProductPrototypeMutationResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['CatalogProductPrototypeMutation'] = ResolversParentTypes['CatalogProductPrototypeMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse']>, ParentType, ContextType, RequireFields<CatalogProductPrototypeMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<CatalogProductPrototypeMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogProductCategoryMutationResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['CatalogProductCategoryMutation'] = ResolversParentTypes['CatalogProductCategoryMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceProductCategoryProductCategoryListResponse']>, ParentType, ContextType, RequireFields<CatalogProductCategoryMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<CatalogProductCategoryMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogPriceGroupMutationResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['CatalogPriceGroupMutation'] = ResolversParentTypes['CatalogPriceGroupMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommercePriceGroupPriceGroupListResponse']>, ParentType, ContextType, RequireFields<CatalogPriceGroupMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<CatalogPriceGroupMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogManufacturerMutationResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['CatalogManufacturerMutation'] = ResolversParentTypes['CatalogManufacturerMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceManufacturerManufacturerListResponse']>, ParentType, ContextType, RequireFields<CatalogManufacturerMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<CatalogManufacturerMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  orderingOrders?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "orderingOrders", ParentType, ContextType, Partial<SubscriptionOrderingOrdersArgs>>;
}>;

export type SubscriptionOutputResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['SubscriptionOutput'] = ResolversParentTypes['SubscriptionOutput']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = CatalogContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  CatalogQuery?: CatalogQueryResolvers<ContextType>;
  CatalogProductQuery?: CatalogProductQueryResolvers<ContextType>;
  ProtoIoRestorecommerceProductProductListResponse?: ProtoIoRestorecommerceProductProductListResponseResolvers<ContextType>;
  IoRestorecommerceProductProductListResponse?: IoRestorecommerceProductProductListResponseResolvers<ContextType>;
  IoRestorecommerceProductProductResponse?: IoRestorecommerceProductProductResponseResolvers<ContextType>;
  IoRestorecommerceProductMainProduct?: IoRestorecommerceProductMainProductResolvers<ContextType>;
  IoRestorecommerceProductProduct?: IoRestorecommerceProductProductResolvers<ContextType>;
  IoRestorecommerceManufacturerManufacturer?: IoRestorecommerceManufacturerManufacturerResolvers<ContextType>;
  IoRestorecommerceMetaMeta?: IoRestorecommerceMetaMetaResolvers<ContextType>;
  IoRestorecommerceAttributeAttribute?: IoRestorecommerceAttributeAttributeResolvers<ContextType>;
  IoRestorecommerceAttributeAttributeObj?: IoRestorecommerceAttributeAttributeObjResolvers<ContextType>;
  IoRestorecommerceProductIdentifier?: IoRestorecommerceProductIdentifierResolvers<ContextType>;
  IoRestorecommerceProductVariant?: IoRestorecommerceProductVariantResolvers<ContextType>;
  IoRestorecommerceImageImage?: IoRestorecommerceImageImageResolvers<ContextType>;
  IoRestorecommerceProductBundle?: IoRestorecommerceProductBundleResolvers<ContextType>;
  IoRestorecommerceProductBundleProduct?: IoRestorecommerceProductBundleProductResolvers<ContextType>;
  IoRestorecommerceStatusStatus?: IoRestorecommerceStatusStatusResolvers<ContextType>;
  IoRestorecommerceStatusOperationStatus?: IoRestorecommerceStatusOperationStatusResolvers<ContextType>;
  IoRestorecommerceResourcebaseSortSortOrder?: IoRestorecommerceResourcebaseSortSortOrderResolvers;
  IoRestorecommerceResourcebaseFilterOperation?: IoRestorecommerceResourcebaseFilterOperationResolvers;
  IoRestorecommerceResourcebaseFilterValueType?: IoRestorecommerceResourcebaseFilterValueTypeResolvers;
  IoRestorecommerceFilterFilterOperation?: IoRestorecommerceFilterFilterOperationResolvers;
  IoRestorecommerceFilterFilterValueType?: IoRestorecommerceFilterFilterValueTypeResolvers;
  IoRestorecommerceFilterFilterOpOperator?: IoRestorecommerceFilterFilterOpOperatorResolvers;
  IoRestorecommerceResourcebaseFilterOpOperator?: IoRestorecommerceResourcebaseFilterOpOperatorResolvers;
  GoogleProtobufAnyValue?: GraphQLScalarType;
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
  IoRestorecommercePriceGroupPriceGroup?: IoRestorecommercePriceGroupPriceGroupResolvers<ContextType>;
  IoRestorecommerceProductCategoryParent?: IoRestorecommerceProductCategoryParentResolvers<ContextType>;
  CatalogPriceGroupQuery?: CatalogPriceGroupQueryResolvers<ContextType>;
  ProtoIoRestorecommercePriceGroupPriceGroupListResponse?: ProtoIoRestorecommercePriceGroupPriceGroupListResponseResolvers<ContextType>;
  IoRestorecommercePriceGroupPriceGroupListResponse?: IoRestorecommercePriceGroupPriceGroupListResponseResolvers<ContextType>;
  IoRestorecommercePriceGroupPriceGroupResponse?: IoRestorecommercePriceGroupPriceGroupResponseResolvers<ContextType>;
  CatalogManufacturerQuery?: CatalogManufacturerQueryResolvers<ContextType>;
  ProtoIoRestorecommerceManufacturerManufacturerListResponse?: ProtoIoRestorecommerceManufacturerManufacturerListResponseResolvers<ContextType>;
  IoRestorecommerceManufacturerManufacturerListResponse?: IoRestorecommerceManufacturerManufacturerListResponseResolvers<ContextType>;
  IoRestorecommerceManufacturerManufacturerResponse?: IoRestorecommerceManufacturerManufacturerResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  CatalogMutation?: CatalogMutationResolvers<ContextType>;
  CatalogProductMutation?: CatalogProductMutationResolvers<ContextType>;
  ProtoIoRestorecommerceResourcebaseDeleteResponse?: ProtoIoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType>;
  IoRestorecommerceResourcebaseDeleteResponse?: IoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType>;
  CatalogProductPrototypeMutation?: CatalogProductPrototypeMutationResolvers<ContextType>;
  CatalogProductCategoryMutation?: CatalogProductCategoryMutationResolvers<ContextType>;
  CatalogPriceGroupMutation?: CatalogPriceGroupMutationResolvers<ContextType>;
  CatalogManufacturerMutation?: CatalogManufacturerMutationResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  SubscriptionOutput?: SubscriptionOutputResolvers<ContextType>;
}>;

