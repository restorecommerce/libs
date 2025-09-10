import { createServiceConfig } from '@restorecommerce/service-config';

// singleton
let config;

/**
 * Loads the configuration and stores it in the config singleton.
 * @param {string} baseDir Directory which contains the folder cfg with the config files.
 * @param [Logger] logger
 */
export const load = async(baseDir: string, logger?: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    config = createServiceConfig(baseDir, {logger});
    resolve(config);
  });
};

/**
 * Get config from singleton.
 * If singleton is undefined load id from current working directory.
 * @param [Logger] logger
 * @return {Object} nconf configuration object
 */
export const get = async(logger?: any): Promise<any> => {
  if (config) {
    return config;
  }
  config = await load(process.cwd(), logger);
  return config;
};
