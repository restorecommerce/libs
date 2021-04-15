import { createServiceConfig } from '@restorecommerce/service-config';
// Export cfg Object
export const cfg = createServiceConfig(process.cwd());
// errors mapped to code and message
export const errors = cfg.get('errors');