import { Resolvers } from './schema.generated';
import { namespace, SchedulingContext } from "../interfaces";
import { getAndGenerateResolvers, ServiceConfig, } from "../../../gql/protos";
import {
  metadata as metaPackageIoRestorecommerceJob,
  metaService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/job";
import { SchedulingSrvGrpcClient } from "../grpc";

export const resolvers: (cfg: ServiceConfig) => Resolvers = (cfg: ServiceConfig) => {
  return getAndGenerateResolvers<SchedulingSrvGrpcClient, SchedulingContext>(metaService, metaPackageIoRestorecommerceJob, namespace, cfg, ['Read'], undefined, 'job');
}
