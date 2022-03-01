import { GrpcClientRpcMethodDefinition, GrpcService, GrpcServiceMethods } from "@restorecommerce/grpc-client";
import { RestoreCommerceGrpcClient } from "@restorecommerce/rc-grpc-clients";
import { ServiceDescriptorProto, MethodDescriptorProto } from "ts-proto-descriptors";
import { getTyping } from "./registry";

export const getProtoFunction = (method: MethodDescriptorProto): GrpcClientRpcMethodDefinition<any, any> => {
  const inputMessage = getTyping(method.inputType!);
  const outputMessage = getTyping(method.outputType!);

  if (!inputMessage) {
    throw Error(`Method '${method.name}' could not find input type: ${method.inputType}`);
  }

  if (!outputMessage) {
    throw Error(`Method '${method.name}' could not find output type: ${method.outputType}`);
  }

  if (!inputMessage.processor || !outputMessage.processor) {
    throw Error("Method does not contain encodeRequest or decodeResponse metadata");
  }

  if (!('encode' in inputMessage.processor)) {
    throw Error(`Method ${method.name} input type '${method.inputType}' does not contain 'encode' function`);
  }

  if (!('decode' in outputMessage.processor)) {
    throw Error(`Method ${method.name} output type '${method.inputType}' does not contain 'decode' function`);
  }

  let type: 'unary' | 'clientStream' | 'serverStream' | 'bidiStream' = 'unary';
  if (method.clientStreaming && method.serverStreaming) {
    type = 'bidiStream';
  } else if (method.clientStreaming) {
    type = 'clientStream';
  } else if (method.serverStreaming) {
    type = 'serverStream';
  }

  return {
    type,
    serialize: inputMessage.processor.encode,
    deserialize: outputMessage.processor.decode
  };
}

export const getProtoFunctions = <M extends GrpcService = any>(service: ServiceDescriptorProto): GrpcServiceMethods<M> => {
  return service.method?.reduce((obj, method) => {
    obj[method.name!] = getProtoFunction(method);
    return obj;
  }, {} as any);
}

export const getGRPCService = <T extends Record<string, any>>(self: RestoreCommerceGrpcClient, packageName: string, service: ServiceDescriptorProto): T => {
  return self['createService']<T>({
    packageName,
    serviceName: service.name!,
    methods: getProtoFunctions<T>(service)
  });
}
