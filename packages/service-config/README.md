# @restorecommerce/service-config

An opinionated wrapper of
[nconf](https://github.com/indexzero/nconf).

Configuration settings are obtain from the following sources in the given order:

1. Command argument
2. Environment variables
3. Configuration files

1.) and 2.) support passing nested object properties with the following pattern:

```json
# Original Configuration JSON file
{
  "someObject": {
    "paramA": "A"
  }
}
```

Can be overridden via env var or command line parameter `someObject__paramA`.
So the nesting is designated by a double underscore.

3.) tries to load the following configuration files from the
`cfg` folder:

- Default configuration file `config.json`
- Additional sub-variants added to the value of the environment variable
`NODE_ENV` for example a value `development:development` would try to load
`config_development.json`

## Usage

```ts
import { createServiceConfig } from '@restorecommerce/service-config';

...

const cfg = createServiceConfig('./test', { stageVar: 'NODE_ENV', logger: logger});
const testSetting = cfg.get('test');
```
