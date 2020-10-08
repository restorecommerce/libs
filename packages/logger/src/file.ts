import { transports } from "winston";

export interface RestoreLoggerFileTransportOptions extends transports.FileTransportOptions { }

export function createFileTransport(opts: RestoreLoggerFileTransportOptions) {
  return new transports.File({
    ...opts,
  });
}
