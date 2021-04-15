import { createServiceConfig } from '@restorecommerce/service-config';
// Export cfg Object
export let cfg: any = createServiceConfig(process.cwd());
// errors mapped to code and message
export const errors = cfg.get('errors');

export const updateConfig = (config: any) => {
  cfg = config;
};
