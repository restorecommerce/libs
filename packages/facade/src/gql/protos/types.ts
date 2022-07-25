import { GrpcClientConfig } from "@restorecommerce/grpc-client";
import { FileDescriptorProto } from "ts-proto-descriptors";

export const authSubjectType = '.io.restorecommerce.auth.Subject';

export type ProtoMetaMessageOptions = {
  options?: {
    [key: string]: any;
  };
  fields?: {
    [key: string]: {
      [key: string]: any;
    };
  };
  oneof?: {
    [key: string]: {
      [key: string]: any;
    };
  };
  nested?: {
    [key: string]: ProtoMetaMessageOptions;
  };
};

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
  options?: {
    options?: {
      [key: string]: any;
    };
    services?: {
      [key: string]: {
        options?: {
          [key: string]: any;
        };
        methods?: {
          [key: string]: {
            [key: string]: any;
          };
        };
      };
    };
    messages?: {
      [key: string]: ProtoMetaMessageOptions;
    };
    enums?: {
      [key: string]: {
        options?: {
          [key: string]: any;
        };
        values?: {
          [key: string]: {
            [key: string]: any;
          };
        };
      };
    };
  };
}

export interface BlackListWhiteListConfig {
  whitelist?: string[]
  blacklist?: string[]
}

export interface MethodConfig {
  methods?: BlackListWhiteListConfig;
}

export interface ServiceConfig {
  client: Omit<GrpcClientConfig, 'logger'> & { address: string };
  [key: string]: any;
}

export interface SubSpaceServiceConfig extends ServiceConfig {
  root: boolean;
}
