import { GrpcClientConfig } from "@restorecommerce/grpc-client";

export interface MetaI {
  readonly meta: 'object' | 'array' | 'map' | 'union' | 'builtin';
}

export interface MetaO extends MetaI {
  readonly meta: 'object';
  readonly type: string;
  readonly name: string;
}

export interface MetaA extends MetaI {
  readonly meta: 'array';
  readonly type: MetaI | string;
}

export interface MetaM extends MetaI {
  readonly meta: 'map';
  readonly key: string;
  readonly value: MetaI | string;
}

export interface MetaU extends MetaI {
  readonly meta: 'union';
  readonly choices: Array<MetaI | string | undefined>;
}

export interface MetaS<T, R> {
  readonly request: MetaO;
  readonly response: MetaO;
  readonly clientStreaming: boolean;
  readonly serverStreaming: boolean;
  readonly encodeRequest?: (message: T, writer: any) => any;
  readonly decodeResponse?: (input: Uint8Array | any, length?: number) => R;
}

export interface MetaB extends MetaI {
  readonly meta: 'builtin';
  readonly type: string;
  readonly original: string;
}

export type MetaPS = ['service', string, any, { [key: string]: MetaS<any, any> }];
export type MetaPE = ['enum', string, any, any];
export type MetaPM = ['message', string, any, { [key: string]: MetaI | string }];
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
