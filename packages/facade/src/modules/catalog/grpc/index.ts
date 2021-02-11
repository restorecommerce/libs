import { RestoreCommerceGrpcClient } from "@restorecommerce/rc-grpc-clients";
import {
  protoMetadata as productMetaService,
  protobufPackage as productProtobufPackage,
  Service as productService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/product";
import {
  protoMetadata as product_prototypeMetaService,
  protobufPackage as product_prototypeProtobufPackage,
  Service as product_prototypeService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/product_prototype";
import {
  protoMetadata as product_categoryMetaService,
  protobufPackage as product_categoryProtobufPackage,
  Service as product_categoryService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/product_category";
import {
  protoMetadata as price_groupMetaService,
  protobufPackage as price_groupProtobufPackage,
  Service as price_groupService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/price_group";
import {
  protoMetadata as manufacturerMetaService,
  protobufPackage as manufacturerProtobufPackage,
  Service as manufacturerService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/manufacturer";
import { getGRPCService } from "../../../gql/protos";
import { GrpcClientConfig } from "@restorecommerce/grpc-client";

export class CatalogSrvGrpcClient extends RestoreCommerceGrpcClient {
  constructor(cfg: GrpcClientConfig) {
    super(cfg);
  }

  product = getGRPCService<productService>(this, productProtobufPackage, productMetaService.fileDescriptor.service![0]);
  product_prototype = getGRPCService<product_prototypeService>(this, product_prototypeProtobufPackage, product_prototypeMetaService.fileDescriptor.service![0]);
  product_category = getGRPCService<product_categoryService>(this, product_categoryProtobufPackage, product_categoryMetaService.fileDescriptor.service![0]);
  price_group = getGRPCService<price_groupService>(this, price_groupProtobufPackage, price_groupMetaService.fileDescriptor.service![0]);
  manufacturer = getGRPCService<manufacturerService>(this, manufacturerProtobufPackage, manufacturerMetaService.fileDescriptor.service![0]);
}
