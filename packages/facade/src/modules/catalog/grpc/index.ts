import { RestoreCommerceGrpcClient } from "@restorecommerce/rc-grpc-clients";
import {
  metaService as productMetaService,
  protobufPackage as productProtobufPackage,
  Service as productService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/product";
import {
  metaService as product_prototypeMetaService,
  protobufPackage as product_prototypeProtobufPackage,
  Service as product_prototypeService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/product_prototype";
import {
  metaService as product_categoryMetaService,
  protobufPackage as product_categoryProtobufPackage,
  Service as product_categoryService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/product_category";
import {
  metaService as price_groupMetaService,
  protobufPackage as price_groupProtobufPackage,
  Service as price_groupService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/price_group";
import {
  metaService as manufacturerMetaService,
  protobufPackage as manufacturerProtobufPackage,
  Service as manufacturerService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/manufacturer";
import { getGRPCService } from "../../../gql/protos";
import { GrpcClientConfig } from "@restorecommerce/grpc-client";

export class CatalogSrvGrpcClient extends RestoreCommerceGrpcClient {
  constructor(cfg: GrpcClientConfig) {
    super(cfg);
  }

  product = getGRPCService<productService>(this, productProtobufPackage, 'Service', productMetaService);
  product_prototype = getGRPCService<product_prototypeService>(this, product_prototypeProtobufPackage, 'Service', product_prototypeMetaService);
  product_category = getGRPCService<product_categoryService>(this, product_categoryProtobufPackage, 'Service', product_categoryMetaService);
  price_group = getGRPCService<price_groupService>(this, price_groupProtobufPackage, 'Service', price_groupMetaService);
  manufacturer = getGRPCService<manufacturerService>(this, manufacturerProtobufPackage, 'Service', manufacturerMetaService);
}
