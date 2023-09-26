import { RestoreCommerceGrpcClient } from '@restorecommerce/rc-grpc-clients';
import {
  type ProductServiceClient,
  ProductServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/product.js';
import {
  type ProductPrototypeServiceClient,
  ProductPrototypeServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/product_prototype.js';
import {
  type ProductCategoryServiceClient,
  ProductCategoryServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/product_category.js';
import {
  type PriceGroupServiceClient,
  PriceGroupServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/price_group.js';
import {
  type ManufacturerServiceClient,
  ManufacturerServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/manufacturer.js';
import {
  type CodeServiceClient,
  CodeServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/code.js';
import { type GrpcClientConfig } from '@restorecommerce/grpc-client';

export class CatalogSrvGrpcClient extends RestoreCommerceGrpcClient {

  readonly product: ProductServiceClient;
  readonly product_prototype: ProductPrototypeServiceClient;
  readonly product_category: ProductCategoryServiceClient;
  readonly price_group: PriceGroupServiceClient;
  readonly manufacturer: ManufacturerServiceClient;
  readonly code: CodeServiceClient;

  constructor(address: string, cfg: GrpcClientConfig) {
    super(address, cfg);

    this.product = this.createClient(cfg, ProductServiceDefinition, this.channel);
    this.product_prototype = this.createClient(cfg, ProductPrototypeServiceDefinition, this.channel);
    this.product_category = this.createClient(cfg, ProductCategoryServiceDefinition, this.channel);
    this.price_group = this.createClient(cfg, PriceGroupServiceDefinition, this.channel);
    this.manufacturer = this.createClient(cfg, ManufacturerServiceDefinition, this.channel);
    this.code = this.createClient(cfg, CodeServiceDefinition, this.channel);
  }

}
