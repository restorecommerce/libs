import { RestoreCommerceGrpcClient } from '@restorecommerce/rc-grpc-clients';
import {
  ServiceClient as productClient,
  ServiceDefinition as productService
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/product';
import {
  ServiceClient as product_prototypeClient,
  ServiceDefinition as product_prototypeService
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/product_prototype';
import {
  ServiceClient as product_categoryClient,
  ServiceDefinition as product_categoryService
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/product_category';
import {
  ServiceClient as price_groupClient,
  ServiceDefinition as price_groupService
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/price_group';
import {
  ServiceClient as manufacturerClient,
  ServiceDefinition as manufacturerService
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/manufacturer';
import { GrpcClientConfig } from '@restorecommerce/grpc-client';

export class CatalogSrvGrpcClient extends RestoreCommerceGrpcClient {

  readonly product: productClient;
  readonly product_prototype: product_prototypeClient;
  readonly product_category: product_categoryClient;
  readonly price_group: price_groupClient;
  readonly manufacturer: manufacturerClient;

  constructor(address: string, cfg: GrpcClientConfig) {
    super(address, cfg);

    this.product = this.createClient(cfg, productService, this.channel);
    this.product_prototype = this.createClient(cfg, product_prototypeService, this.channel);
    this.product_category = this.createClient(cfg, product_categoryService, this.channel);
    this.price_group = this.createClient(cfg, price_groupService, this.channel);
    this.manufacturer = this.createClient(cfg, manufacturerService, this.channel);
  }

}
