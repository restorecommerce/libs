import { RestoreCommerceGrpcClient } from '@restorecommerce/rc-grpc-clients';
import {
  ProductServiceClient,
  ProductServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/product';
import {
  ProductPrototypeServiceClient,
  ProductPrototypeServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/product_prototype';
import {
  ProductCategoryServiceClient,
  ProductCategoryServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/product_category';
import {
  PriceGroupServiceClient,
  PriceGroupServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/price_group';
import {
  ManufacturerServiceClient,
  ManufacturerServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/manufacturer';
import { GrpcClientConfig } from '@restorecommerce/grpc-client';

export class CatalogSrvGrpcClient extends RestoreCommerceGrpcClient {

  readonly product: ProductServiceClient;
  readonly product_prototype: ProductPrototypeServiceClient;
  readonly product_category: ProductCategoryServiceClient;
  readonly price_group: PriceGroupServiceClient;
  readonly manufacturer: ManufacturerServiceClient;

  constructor(address: string, cfg: GrpcClientConfig) {
    super(address, cfg);

    this.product = this.createClient(cfg, ProductServiceDefinition, this.channel);
    this.product_prototype = this.createClient(cfg, ProductPrototypeServiceDefinition, this.channel);
    this.product_category = this.createClient(cfg, ProductCategoryServiceDefinition, this.channel);
    this.price_group = this.createClient(cfg, PriceGroupServiceDefinition, this.channel);
    this.manufacturer = this.createClient(cfg, ManufacturerServiceDefinition, this.channel);
  }

}
