import { createLogger } from '@restorecommerce/logger';
import { cfg } from './config';

const loggerCfg = cfg.get('logger');

loggerCfg.esTransformer = (msg: any) => {
  msg.fields = JSON.stringify(msg.fields);
  return msg;
};

export default createLogger(loggerCfg);
