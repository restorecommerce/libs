import { Resolvers } from './schema.generated';
import { namespace, SchedulingContext } from "../interfaces";
import { getAndGenerateResolvers, ServiceConfig, } from "../../../gql/protos";
import { protoMetadata } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/job";
import { SchedulingSrvGrpcClient } from "../grpc";

export const resolvers: (cfg: ServiceConfig) => Resolvers = (cfg: ServiceConfig) => {
  return getAndGenerateResolvers<SchedulingSrvGrpcClient, SchedulingContext>(protoMetadata.fileDescriptor.service![0], namespace, cfg, ['Read'], undefined, 'job');
}
