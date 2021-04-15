import { createLogger } from '@restorecommerce/logger';
import { cfg } from './config';

export default createLogger(cfg.get('logger'));
