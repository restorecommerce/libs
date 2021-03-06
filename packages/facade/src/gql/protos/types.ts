import { GrpcClientConfig } from "@restorecommerce/grpc-client";
import { FileDescriptorProto, ServiceDescriptorProto } from "ts-proto-descriptors/google/protobuf/descriptor";

export const authSubjectType = '.io.restorecommerce.auth.Subject';

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto;
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
  service: ServiceDescriptorProto;
  name: string;
  queries: string[]
}
