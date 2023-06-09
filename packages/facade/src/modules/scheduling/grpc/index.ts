import { RestoreCommerceGrpcClient } from '@restorecommerce/rc-grpc-clients';
import {
  type JobServiceClient,
  JobServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/job.js';
import { type GrpcClientConfig } from '@restorecommerce/grpc-client';

export class SchedulingSrvGrpcClient extends RestoreCommerceGrpcClient {

  readonly job: JobServiceClient;

  constructor(address: string, cfg: GrpcClientConfig) {
    super(address, cfg);

    this.job = this.createClient(cfg, JobServiceDefinition, this.channel);
  }

}
