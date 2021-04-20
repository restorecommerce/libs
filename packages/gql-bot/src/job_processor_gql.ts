import * as _ from 'lodash';
import * as fs from 'fs';
import { Client } from './index';
const {YamlStreamReadTransformer} = require('yaml-document-stream');

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
    let yamlStream = new YamlStreamReadTransformer();
    switch (job.operation) {
      case 'sync': {  //  synchronous operation
        const fileStream = fs.createReadStream(job.fullPath);
        fileStream.pipe(yamlStream);
        let batchsize;
        if (job.batchSize) {
          batchsize = job.batchSize;
        }

        let promiseArray: any;
        let counter = 0;
        let batchCounter = 0;
        let docArr: any[] = [];

        console.log('Batch size=', batchsize);
        const myPromise = await new Promise<void>((resolve, reject) => {
          yamlStream.on('data', (doc) => {
            if (batchsize && batchsize != undefined) {
              docArr.push(doc);
              counter++;

              if (counter === batchsize) {
                yamlStream.cork();

                counter = 0;
                batchCounter++;
                console.log('Processing batch number:', batchCounter);

                this.client.post(docArr, job);
                docArr = [];

                yamlStream.uncork();
              }
            } else {
              docArr.push(doc);
            }
          });

          yamlStream.on('end', async () => {
            let result;
            if (docArr && !_.isEmpty(docArr)) {
              result = await this.client.post(docArr, job);
              docArr = [];
            }
            resolve(result);
          });
        });

        return myPromise;
      }
      default: {
        throw new Error('Unsupported job operation');
      }
    }
  }
}
