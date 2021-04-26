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
    let jobPath = job.path;
    let data = false;
    switch (job.operation) {
      case 'sync': {  //  synchronous operation
        const fileStream = fs.createReadStream(job.fullPath);
        fileStream.pipe(yamlStream);
        let batchsize;
        if (job.batchSize) {
          batchsize = job.batchSize;
          console.log('Batch size:', batchsize);
        }

        let counter = 0;
        let batchCounter = 0;
        let docArr: any[] = [];
        let resultArr: any[] = [];

        // Here we read from the readable stream each yaml document parsed
        // as an object, and if we have batching enabled we first batch this
        // documents into smaller sets. When a dataset is ready to be imported,
        // we pause the readable stream and emit a 'pause' event and
        // right after that we reset the dataset object 'docArr'.
        yamlStream.on('data', (doc) => {
          data = true;
          if (batchsize && batchsize != undefined) {
            docArr.push(doc);
            counter++;

            if (counter === batchsize) {
              counter = 0;
              batchCounter++;
              console.log('Processing batch:', batchCounter);
              yamlStream.pause();
              docArr = [];
            }
          } else {
            docArr.push(doc);
          }
        });

        // On 'pause' event we create a post request using the GQL Client
        // using the accumulated resources inside the 'docArr' dataset,
        // we wait for the response, store the response inside an array and
        // only then we emit a 'resume' event, resuming reading from the
        // 'yamlStream' readable stream.
        yamlStream.on('pause', async () => {
          let result = await this.client.post(docArr, job);
          resultArr.push(result);
          yamlStream.resume();
        });

        // On 'end' if we still have data accumulated inside the 'docArr'
        // dataset, we create a final post request to import this data as-well,
        // store the response inside the array and finally resolve this as a
        // Promise to return all the responses back to the initial caller.
        return new Promise<any>((resolve, reject) => {
          yamlStream.on('end', async () => {
            if (data === false) {
              throw new Error(`Could not import resources from ${jobPath}. Readable stream is empty. Please provide a file with YAML multi-document format.`);
            }

            if (docArr && !_.isEmpty(docArr)) {
              batchCounter++;
              console.log('Processing batch:', batchCounter);
              let result = await this.client.post(docArr, job);
              resultArr.push(result);
              docArr = [];

              resolve(resultArr as any);
            }
          });
        });

      }
      default: {
        throw new Error('Unsupported job operation');
      }
    }
  }
}
