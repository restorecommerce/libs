import {
  ExtractRpcArgument,
  ExtractRpcReturnType,
  GrpcClientRpcMethodDefinition,
  GrpcService, GrpcServiceMethods
} from "@restorecommerce/grpc-client";
import { MetaS } from "./types";
import { RestoreCommerceGrpcClient } from "@restorecommerce/rc-grpc-clients";

export const getProtoFunction = <T extends GrpcService, M extends keyof T>
(service: { [key in keyof T]: MetaS<any, any> }, method: M):
  GrpcClientRpcMethodDefinition<ExtractRpcArgument<T[M]>, ExtractRpcReturnType<T[M]>> => {
  const m = service[method];
  if (!m.encodeRequest || !m.decodeResponse) {
    throw Error("Method does not contain encodeRequest or decodeResponse metadata");
  }

  let type: 'unary' | 'clientStream' | 'serverStream' | 'bidiStream' = 'unary';
  if (m.clientStreaming && m.serverStreaming) {
    type = 'bidiStream';
  } else if (m.clientStreaming) {
    type = 'clientStream';
  } else if (m.serverStreaming) {
    type = 'serverStream';
  }

  return {
    type,
    serialize: m.encodeRequest!,
    deserialize: m.decodeResponse!
  };
}

export const getProtoFunctions = <T, M extends GrpcService = any>(service: { [key in keyof T]: MetaS<any, any> }): GrpcServiceMethods<M> => {
  return Object.keys(service).reduce((obj, methodName) => {
    obj[methodName] = getProtoFunction(service, methodName);
    return obj;
  }, {} as any)
}

export const getGRPCService = <T extends Record<string, any>>(self: RestoreCommerceGrpcClient, packageName: string, serviceName: string, service: { [key in keyof T]: MetaS<any, any> }): T => {
  return self['createService']<T>({
    packageName,
    serviceName,
    methods: getProtoFunctions<T>(service)
  });
}
