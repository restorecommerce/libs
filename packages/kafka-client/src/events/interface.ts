
export type Listener = (message?: any, context?: any, config?: any, eventName?: any) => void | Promise<void>;

export interface Topic {
  commitCurrentOffsets(): Promise<void>;
  $wait(arg0: bigint): Promise<void>;
  $offset(arg0: bigint): Promise<bigint>;
  $reset(eventName: string, offset: bigint): Promise<void>;
  $resetConsumer(eventNames: string[], offset: bigint): Promise<void>;
  emit(eventName: string, msg: any): Promise<void>;
  on(eventName: string, listener: Listener, config?: any): Promise<void>;
  listenerCount(eventName: string): Promise<number>;
  removeListener(eventName: string, listener: Listener): Promise<void>;
  removeAllListeners(eventName: string): Promise<void>;
  stop(): Promise<void>;
  hasListeners(eventName?: string): Promise<boolean>;
  get subscribed(): string[];
}

export interface EventProvider {
  topic(name: string, config: any, manualOffset?: boolean): Promise<Topic>;
  stop(): Promise<void>;
  start(): Promise<void>;
  delete(topics: string[]): Promise<void>;
  deleteAll(): Promise<void>;
}