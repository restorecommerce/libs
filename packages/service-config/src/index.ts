import * as path from 'path';
import { ICallbackFunction, Provider } from 'nconf';

class ServiceConfigProvider extends Provider {
  public override get<T = any>(key: string, callback?: ICallbackFunction) {
    return super.get(key, callback) as T;
  }
};

export type ServiceConfig = Provider & ServiceConfigProvider;

export interface ServiceConfigLogger {
  verbose(...args: any[]): any;
}

// log config file usages
function logConfigFile(configFile: string, logger?: ServiceConfigLogger) {
  let message: string;
  if (process.env.WORKER_ID !== undefined) {
    message = `Worker ${process.env.WORKER_ID} uses configuration file: ${configFile}`;
  } else {
    message = `Supervisor uses configuration file: ${configFile}`;
  }
  if (logger?.verbose) {
    logger.verbose(message);
  } else {
    // eslint-disable-next-line no-console
    console.log(message);
  }
}

export interface ServiceConfigOptions {
  stageVar?: string;
  logger?: ServiceConfigLogger;
}

// read the layered configurations and merge into one
export function createServiceConfig(
  baseDir: string,
  opts?: ServiceConfigOptions,
  defaults?: any,
): ServiceConfig {
  const nconfInstance = new ServiceConfigProvider();
  const logger = opts?.logger;
  // static data from runtime
  const STAGE_VAR = opts?.stageVar ?? 'NODE_ENV';
  defaults ??= {};
  defaults[STAGE_VAR] = 'development';
  nconfInstance.argv({
    separator: '__',
    parseValues: true,
  }); // import `process.argv` as highest priority
  nconfInstance.env({
    separator: '__',
    parseValues: true,
  }); // import `process.env` as second highest priority
  // Set defaults with second lowest priority
  nconfInstance.defaults(defaults);

  // apply the existing config file
  const parts = nconfInstance.get<string>(STAGE_VAR).split(':');
  for (let i = parts.length - 1; i >= 0; i--) { // eslint-disable-line no-plusplus
    const filename = parts.slice(0, i + 1).join('_');
    const configFile = path.resolve(baseDir, 'cfg', `config_${filename}.json`);
    logConfigFile(configFile, logger);
    nconfInstance.file(filename, configFile);
  }
  const configFile = path.resolve(baseDir, 'cfg', 'config.json');
  logConfigFile(configFile, logger);
  nconfInstance.file('default', configFile);

  return nconfInstance;
};
