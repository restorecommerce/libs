import { ServiceImplementation } from 'nice-grpc';
import { FileDescriptorSet, FileDescriptorProto } from '@restorecommerce/rc-grpc-clients/dist/generated/google/protobuf/descriptor.js';
import { ServerReflection, } from 'nice-grpc-server-reflection';
import { IServerReflectionService } from "nice-grpc-server-reflection/lib/proto/grpc/reflection/v1/reflection_grpc_pb.js";

export const buildReflectionService = (services: {
  descriptor: any;
  name?: string;
}[]): ServiceImplementation<IServerReflectionService> => {
  const files: FileDescriptorProto[] = [];
  const names: string[] = [];
  services.forEach((service, i) => {
    files.push(service.descriptor);
    names.push(service.name || service.descriptor.name + '.Service');
  });
  return ServerReflection(FileDescriptorSet.encode({
    file: files
  }).finish(), names);
};
