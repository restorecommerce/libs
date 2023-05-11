import { RestoreCommerceGrpcClient } from '@restorecommerce/rc-grpc-clients';
import {
  JobServiceClient,
  JobServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/job';
import { GrpcClientConfig } from '@restorecommerce/grpc-client';

export class SchedulingSrvGrpcClient extends RestoreCommerceGrpcClient {

  readonly job: JobServiceClient;

  constructor(address: string, cfg: GrpcClientConfig) {
    super(address, cfg);

    this.job = this.createClient(cfg, JobServiceDefinition, this.channel);
  }

}
