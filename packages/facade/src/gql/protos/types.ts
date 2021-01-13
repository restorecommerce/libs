import { GrpcClientConfig } from "@restorecommerce/grpc-client";

export interface MetaBase {
  readonly kind: 'object' | 'array' | 'map' | 'union' | 'builtin';
}

export interface MetaMessage extends MetaBase {
  readonly kind: 'object';
  readonly type: string;
  readonly name: string;
}

export interface MetaArray extends MetaBase {
  readonly kind: 'array';
  readonly type: MetaBase | string;
}

export interface MetaMap extends MetaBase {
  readonly kind: 'map';
  readonly key: string;
  readonly value: MetaBase | string;
}

export interface MetaUnion extends MetaBase {
  readonly kind: 'union';
  readonly choices: Array<MetaBase | string | undefined>;
}

export interface MetaService<T, R> {
  readonly request: MetaMessage;
  readonly response: MetaMessage;
  readonly clientStreaming: boolean;
  readonly serverStreaming: boolean;
  readonly encodeRequest?: (message: T, writer: any) => any;
  readonly decodeResponse?: (input: Uint8Array | any, length?: number) => R;
}

export interface MetaPrimitive extends MetaBase {
  readonly kind: 'builtin';
  readonly type: string;
  readonly original: string;
}

export type MetaPS = ['service', string, any, { [key: string]: MetaService<any, any> }];
export type MetaPE = ['enum', string, any, any];
export type MetaPM = ['message', string, any, { [key: string]: MetaBase | string }];
export type MetaPTypes = MetaPS | MetaPE | MetaPM

export type MetaP = {
  [key: string]: MetaPTypes
};

export interface MethodConfig {
  whitelist?: string[]
  blacklist?: string[]
}

export interface ServiceConfig {
  client: GrpcClientConfig;
  methods?: MethodConfig;
}
