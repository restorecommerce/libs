import { createLogger, Logger } from '@restorecommerce/logger';
import { cfg } from './config.js';

let __logger__: Logger;
export function getLogger(): Logger {
  if (__logger__) {
    return __logger__;
  }
  const loggerCfg = cfg.get('logger');
  
  loggerCfg.esTransformer = (msg: any) => {
    msg.fields = JSON.stringify(msg.fields);
    return msg;
  };

  __logger__ = createLogger(loggerCfg);
  return __logger__;
}

export function setLogger(logger: Logger) {
  __logger__ = logger;
}

export default getLogger();
