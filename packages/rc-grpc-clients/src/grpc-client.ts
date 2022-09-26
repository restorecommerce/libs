import { Channel, createClient, GrpcClientConfig } from '@restorecommerce/grpc-client';
import {
  DeleteRequest,
  ReadRequest,
  Sort,
  Sort_SortOrder,
  FieldFilter
} from './generated/io/restorecommerce/resource_base';
import { ServiceDefinition, ServiceClient } from './generated/io/restorecommerce/commandinterface';
import { createChannel } from 'nice-grpc';

export { DeleteRequest, ReadRequest, Sort, Sort_SortOrder, FieldFilter };

export class RestoreCommerceGrpcClient {

  protected channel: Channel;

  readonly command: ServiceClient;

  constructor(address: string, cfg: GrpcClientConfig) {
    this.channel = createChannel(address);
    this.command = createClient(cfg, ServiceDefinition, this.channel);
  }

  protected createClient = createClient;

}
