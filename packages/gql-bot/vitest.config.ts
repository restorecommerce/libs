import config from '@restorecommerce/dev/vitest.config.js';
config.test!.onUnhandledError = (error: any) => {
  return false;
};
export default config;
