import { transports } from 'winston';

export interface RestoreLoggerFileTransportOptions extends transports.FileTransportOptions {
  sourcePointer?: boolean;
}

export function createFileTransport(opts: RestoreLoggerFileTransportOptions) {
  return new transports.File({
    ...opts,
  });
}
