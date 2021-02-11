import { GrpcClientConfig } from "@restorecommerce/grpc-client";
import { IFileDescriptorProto, IServiceDescriptorProto } from "protobufjs/ext/descriptor";

export interface ProtoMetadata {
  fileDescriptor: IFileDescriptorProto;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
}

export interface MethodConfig {
  whitelist?: string[]
  blacklist?: string[]
}

export interface ServiceConfig {
  client: GrpcClientConfig;
  methods?: MethodConfig;
}

export interface SubSpaceServiceConfig extends ServiceConfig {
  root: boolean;
}

export interface SubService {
  service: IServiceDescriptorProto;
  name: string;
  queries: string[]
}
