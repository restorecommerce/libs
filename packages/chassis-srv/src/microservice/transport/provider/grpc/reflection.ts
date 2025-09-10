import { ServiceImplementation } from 'nice-grpc';
import {
  FileDescriptorSet,
  FileDescriptorProto as FileDescriptorProtoGoogle
} from 'google-protobuf/google/protobuf/descriptor_pb';
import { ServerReflection, } from 'nice-grpc-server-reflection';
import { FileDescriptorProto } from '@restorecommerce/rc-grpc-clients/dist/generated/google/protobuf/descriptor';
import {
  IServerReflectionService
} from 'nice-grpc-server-reflection/lib/proto/grpc/reflection/v1alpha/reflection_grpc_pb';

export const buildReflectionService = (services: {
  descriptor: any;
  name?: string;
}[]): ServiceImplementation<IServerReflectionService> => {
  const set = new FileDescriptorSet();
  const names = [];
  services.forEach((service, i) => {
    const serialized = FileDescriptorProto.encode(service.descriptor).finish();
    set.addFile(FileDescriptorProtoGoogle.deserializeBinary(serialized), i);
    names.push(service.name || service.descriptor.name + '.Service');
  });
  return ServerReflection(set.serializeBinary(), names);
};
