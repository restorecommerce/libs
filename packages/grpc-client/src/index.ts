import { Observable } from "rxjs";
import { Client, credentials, ServiceDefinition, Metadata } from '@grpc/grpc-js';
import { loadSync as protoLoaderLoadSync } from '@grpc/proto-loader';
import { Writer } from 'protobufjs/minimal';
import { Logger } from 'winston';
import * as rTracer from 'cls-rtracer';

export interface GrpcClientLoadProtoConfig {
  protoRoot?: string;
  protoPath: string | string[];
  services: {
    [key: string]: {
      packageName: string;
      serviceName: string;
    };
  };
}

export type UnwrapType<T> = (T extends Promise<infer U> ? U : ((T extends Observable<infer W> ? W : (T))));

export interface GrpcClientConfig {
  address: string;
  timeout?: number;
  proto?: GrpcClientLoadProtoConfig;
  bufferFields?: any;
}

// A service must only have functions that that take an argument and return a Promise or Observable
export interface GrpcService {
  [key: string]: { (req: Object): Promise<Object> | Observable<Object> };
}

export type Optional<T> = {
  [P in keyof T]?: T[P];
}

export interface GrpcClientCreateServiceConfig<TService extends GrpcService> {
  packageName: string;
  serviceName: string;
  methods: GrpcServiceMethods<TService>;
}

export interface RequestArgs<TArguments, TResponse> {
  methodPath: string;
  serialize: (value: TArguments, writer?: Writer) => Buffer;
  deserialize: (value: Buffer, length?: number) => TResponse;
}

export interface UnaryArgs<TArguments, TResponse> extends RequestArgs<TArguments, TResponse> {
  data: TArguments;
}

export interface ServerStreamArgs<TArguments = any, TResponse = any> extends RequestArgs<TArguments, TResponse> {
  data: TArguments
}

export interface ClientStreamArgs<TArguments = any, TResponse = any> extends RequestArgs<TArguments, TResponse> {
  data: Observable<TArguments>
}

export interface BidiStreamArgs<TArguments = any, TResponse = any> extends RequestArgs<TArguments, TResponse> {
  data: Observable<TArguments>
}

export interface GrpcClientRpcMethodDefinition<TArguments extends Object, TResponse extends Object> {
  method?: string;
  type: 'unary' | 'clientStream' | 'serverStream' | 'bidiStream';
  serialize: (value: TArguments, writer?: Writer) => Writer;
  deserialize: (value: Buffer, length?: number) => TResponse;
}


export type FirstArgType<T extends { (arg: any): any }> = Parameters<T>[0];

// Extract the argument of a rpc call
export type ExtractRpcArgument<T extends { (arg: any): any }> = UnwrapType<FirstArgType<T>>;
// Extract the return type of a rpc call
export type ExtractRpcReturnType<T extends { (arg: any): any }> = (UnwrapType<ReturnType<T>>);

export type GrpcServiceMethods<TService extends GrpcService> = {
  [P in keyof TService]: GrpcClientRpcMethodDefinition<ExtractRpcArgument<TService[P]>, ExtractRpcReturnType<TService[P]>>;
}

/**
 * Basic wrapper for grpc
 */
export class GrpcClient {
  readonly timeout: number;
  readonly client: Client;
  readonly [key: string]: any;
  readonly logger: Logger;
  readonly bufferFields: any;

  constructor(grpcCientConfig: GrpcClientConfig, logger: Logger) {
    let address, timeout, proto, bufferFields;
    if (!grpcCientConfig) {
      throw new Error('Grpc client configuration missing');
    }
    address = grpcCientConfig.address;
    proto = grpcCientConfig.proto ? grpcCientConfig.proto : undefined;
    timeout = grpcCientConfig.timeout ? grpcCientConfig.timeout : undefined;
    bufferFields = grpcCientConfig.bufferFields ? grpcCientConfig.bufferFields : undefined;
    // address and proto are generated dynamically, so its not initialized in config
    // if (!address) {
    //   throw new Error('endpoint configuration missing');
    // }
    // if (!proto) {
    //   throw new Error('proto configuration definition missing');
    // }
    if (!logger) {
      throw new Error('missing logger configuration');
    }
    this.timeout = timeout ?? 100000;
    this.client = new Client(address, credentials.createInsecure());
    if (proto) {
      const protoServices = this.loadProtoServices(proto);
      Object.assign(this, protoServices);
    }
    this.logger = logger;
    this.bufferFields = bufferFields;
  }

  async unary<TArguments = any, TResponse = any>(
    { methodPath, serialize, deserialize, data }: UnaryArgs<TArguments, TResponse>
  ): Promise<TResponse> {
    return new Promise<TResponse>((resolve, reject) => {
      this.logger.info(`Invoking Unary endpoint ${methodPath}`);
      this.logRequestMessage(data, methodPath);
      const options = {
        deadline: Date.now() + this.timeout
      };
      const meta = new Metadata();
      const rid: any = rTracer.id();
      if (rid) {
        meta.add('rid', rid);
      }
      this.client.makeUnaryRequest<TArguments, TResponse>(
        methodPath,
        serialize,
        deserialize,
        data,
        meta,
        options,
        (err, value) => {
          if (err) {
            this.logger.error('Error serving unary request', { message: err.message });
            this.logger.error('Error stack', { stack: err.stack });
            return resolve({
              operation_status: {
                code: err.code,
                message: err.message
              }
            } as any);
          } else {
            return resolve(value!)
          }
        }
      );
    });
  }

  serverStream<TArguments = any, TResponse = any>(
    { methodPath, serialize, deserialize, data }: ServerStreamArgs<TArguments, TResponse>
  ): Observable<TResponse> {
    return new Observable<TResponse>((subscriber) => {
      this.logger.info(`Invoking Server Stream endpoint ${methodPath}`);
      this.logRequestMessage(data, methodPath);
      const options = {
        deadline: Date.now() + this.timeout
      };
      const meta = new Metadata();
      const rid: any = rTracer.id();
      if (rid) {
        meta.add('rid', rid);
      }
      const serverStream =
        this.client.makeServerStreamRequest<TArguments, TResponse>(
          methodPath,
          serialize,
          deserialize,
          data,
          meta,
          options
        );
      serverStream.on('data', value => subscriber.next(value))
      serverStream.on('error', err => subscriber.error(err))
      serverStream.on('end', () => subscriber.complete())
      return () => {
        serverStream.cancel();
      }
    });
  }

  async clientStream<TArguments = any, TResponse = any>(
    { methodPath, serialize, deserialize, data }: ClientStreamArgs<TArguments, TResponse>
  ): Promise<TResponse> {
    return new Promise<TResponse>((resolve, reject) => {
      this.logger.info(`Invoking Client Stream endpoint ${methodPath}`);
      this.logRequestMessage(data, methodPath);
      const options = {
        deadline: Date.now() + this.timeout
      };
      const meta = new Metadata();
      const rid: any = rTracer.id();
      if (rid) {
        meta.add('rid', rid);
      }
      const clientStream =
        this.client.makeClientStreamRequest<TArguments, TResponse>(
          methodPath,
          serialize,
          deserialize,
          meta,
          options,
          (err, value) => {
            if (err) {
              this.logger.error('Error client stream request', { message: err.message });
              this.logger.error('Error stack', { stack: err.stack });
              return resolve({
                operation_status: {
                    code: err.code,
                    message: err.message
                }
              } as any);
            } else {
              return resolve(value!)
            }
          }
        );
      const sub = data?.subscribe(_data => {
        clientStream.write(_data);
      }, undefined, () => clientStream.end());

      clientStream.on('close', () => sub?.unsubscribe());
      clientStream.on('end', () => sub?.unsubscribe());
      clientStream.on('error', (err) => {
        sub?.unsubscribe();
        reject(err);
      });
    });
  }

  bidiStream<TArguments = any, TResponse = any>(
    { methodPath, serialize, deserialize, data }: BidiStreamArgs<TArguments, TResponse>
  ): Observable<TResponse> {
    return new Observable<TResponse>((subscriber) => {
      this.logger.info(`Invoking Bidirectional Stream endpoint ${methodPath}`);
      this.logRequestMessage(data, methodPath);
      const options = {
        deadline: Date.now() + this.timeout
      };
      const meta = new Metadata();
      const rid: any = rTracer.id();
      if (rid) {
        meta.add('rid', rid);
      }
      const bidiStream =
        this.client.makeBidiStreamRequest<TArguments, TResponse>(
          methodPath,
          serialize,
          deserialize,
          meta,
          options
        );

      const sub = data?.subscribe(_data => {
        bidiStream.write(_data);
      }, undefined, () => bidiStream.end());

      bidiStream.on('data', value => subscriber.next(value))
      bidiStream.on('error', err => subscriber.error(err))
      bidiStream.on('end', () => subscriber.complete())
      return () => {
        sub?.unsubscribe();
        bidiStream.cancel();
      }
    });
  }

  close() {
    this.client.close();
  }

  private loadProtoServices({ protoPath, protoRoot, services }: GrpcClientLoadProtoConfig) {
    const packageDefinition = protoLoaderLoadSync(
      protoPath,
      {
        includeDirs: protoRoot ? [protoRoot] : [],
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
      });

    return Object.keys(services).reduce((aggr, key) => {
      const { packageName, serviceName } = services[key];
      const servicePath = `${packageName}.${serviceName}`;
      const serviceDefinition = packageDefinition[servicePath] as ServiceDefinition;

      if (!serviceDefinition) {
        throw new Error(`Service ${servicePath} not found`);
      }


      const service = Object.keys(serviceDefinition).reduce((service, key) => {
        const methodDefinition = serviceDefinition[key];
        let method = methodDefinition.originalName;

        if (!method) {
          return service;
        }

        if (!methodDefinition.requestStream && !methodDefinition.responseStream) {
          return {
            ...service,
            [method]: (data: any) => this.unary({ methodPath: methodDefinition.path, deserialize: methodDefinition.responseDeserialize, serialize: methodDefinition.requestSerialize, data })
          }
        } else if (methodDefinition.requestStream && !methodDefinition.responseStream) {
          return {
            ...service,
            [method]: (data: any) => this.clientStream({ methodPath: methodDefinition.path, deserialize: methodDefinition.responseDeserialize, serialize: methodDefinition.requestSerialize, data })
          }
        } else if (!methodDefinition.requestStream && methodDefinition.responseStream) {
          return {
            ...service,
            [method]: (data: any) => this.serverStream({ methodPath: methodDefinition.path, deserialize: methodDefinition.responseDeserialize, serialize: methodDefinition.requestSerialize, data })
          }
        } else if (methodDefinition.requestStream && methodDefinition.responseStream) {
          return {
            ...service,
            [method]: (data: any) => this.bidiStream({ methodPath: methodDefinition.path, deserialize: methodDefinition.responseDeserialize, serialize: methodDefinition.requestSerialize, data })
          }
        } else {
          throw new Error(`Invalid method ${method}`);
        }
      }, {} as any);

      return {
        ...aggr,
        [key]: service
      };
    }, {} as any);
  }

  protected createService<TService extends Record<string, any> = any>({ methods, serviceName, packageName }: GrpcClientCreateServiceConfig<TService>): TService {
    return Object.keys(methods).reduce((service, method) => {
      const methodDefinition = methods[method];
      const methodPath = `/${packageName}.${serviceName}/${methodDefinition.method ?? method}`;

      if (methodDefinition.type === 'unary') {
        return {
          ...service,
          [method]: (data: any) => this.unary({ methodPath, deserialize: methodDefinition.deserialize, serialize: (value) => Buffer.from(methodDefinition.serialize(value).finish()), data })
        }
      } else if (methodDefinition.type === 'clientStream') {
        return {
          ...service,
          [method]: (data: any) => this.clientStream({ methodPath, deserialize: methodDefinition.deserialize, serialize: (value) => Buffer.from(methodDefinition.serialize(value).finish()), data })
        }
      } else if (methodDefinition.type === 'serverStream') {
        return {
          ...service,
          [method]: (data: any) => this.serverStream({ methodPath, deserialize: methodDefinition.deserialize, serialize: (value) => Buffer.from(methodDefinition.serialize(value).finish()), data })
        }
      } else if (methodDefinition.type === 'bidiStream') {
        return {
          ...service,
          [method]: (data: any) => this.bidiStream({ methodPath, deserialize: methodDefinition.deserialize, serialize: (value) => Buffer.from(methodDefinition.serialize(value).finish()), data })
        }
      }

      return service;
    }, {} as TService);
  }

  private logRequestMessage(data: any, method: string) {
    let cloned = Object.assign({}, data);
    if (this.bufferFields) {
      const keys = Object.keys(this.bufferFields);
      for (let key of keys) {
        const bufferField = this.bufferFields[key];
        if (Array.isArray(bufferField)) {
          for (let eachBufField of bufferField) {
            delete cloned[eachBufField];
          }
        } else if (cloned[bufferField]) {
          delete cloned[bufferField];
        }
      }
    }
    this.logger.debug(`invoking ${method} endpoint with data:`, { request: cloned });
  }
}
