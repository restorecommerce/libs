import { GrpcClientConfig } from "@restorecommerce/grpc-client";
import { FileDescriptorProto, ServiceDescriptorProto } from "ts-proto-descriptors";

export const authSubjectType = '.io.restorecommerce.auth.Subject';

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
}

export interface BlackListWhiteListConfig {
  whitelist?: string[]
  blacklist?: string[]
}

export interface MethodConfig {
  methods?: BlackListWhiteListConfig;
}

export interface ServiceConfig {
  client: GrpcClientConfig;
  [key: string]: any;
}

export interface SubSpaceServiceConfig extends ServiceConfig {
  root: boolean;
}

export interface SubService {
  service: ServiceDescriptorProto;
  name: string;
  queries: string[]
}
