import * as _ from 'lodash';
import * as fs from 'fs';

import * as MemoryStream from 'memorystream';
import { Client } from './index';

/**
 * GraphQL-specific job processor.
 */
export class GraphQLProcessor {
  opts: any;
  client: Client;
  constructor(opts: any) {
    if (_.isNil(opts)) {
      throw new Error('Missing options parameter');
    }
    const defaults = {
      diffBase: 'md5'
    };
    _.defaults(opts, defaults);
    this.opts = opts;
    this.client = new Client(opts);
  }

  async process(job: any): Promise<any> {
    const memoryStream = new MemoryStream(null, { readable: false });
    switch (job.operation) {
      case 'sync': {  //  synchronous operation
        const fileStream = fs.createReadStream(job.fullPath);
        fileStream.pipe(memoryStream);

        const payload = await new Promise((resolve, reject) => {
          fileStream.on('end', async () => {
            const buf = memoryStream.toBuffer().toString();
            resolve(buf);
          });
        });
        return this.client.post(payload, job);
      }
      default: {
        throw new Error('Unsupported job operation');
      }
    }
  }
}
