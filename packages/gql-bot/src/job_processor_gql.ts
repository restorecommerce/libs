import * as _ from 'lodash';
import * as fs from 'fs';
import { Client } from './index';
import { YamlStreamReadTransformer } from 'yaml-document-stream';
import { stringToChalk } from './utils';

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

  async process(task: any, verbose = false, ignoreErrors = false): Promise<any> {
    let yamlStream = new YamlStreamReadTransformer();
    let jobPath = task.path;
    let data = false;
    const logColor = stringToChalk(task.name);
    switch (task.operation) {
      case 'sync': {  //  synchronous operation
        return new Promise<any>((resolve, reject) => {
          try {
            yamlStream.on('error', (err) => {
              !ignoreErrors && reject(err);
            });

            const fileStream = fs.createReadStream(task.fullPath);
            fileStream.pipe(yamlStream);
            let batchsize;
            if (task.batchSize) {
              batchsize = task.batchSize;
              console.log(`[${logColor(task.name)}] Batch size:`, batchsize);
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
              if (batchsize) {
                docArr.push(doc);
                counter++;

                if (counter === batchsize) {
                  counter = 0;
                  let batchText = '';
                  if (batchsize > 0) {
                    const from = batchCounter * batchsize;
                    const to = from + (docArr.length - 1);
                    batchText = from == to ? ` (${from})` : ` (${from} - ${to})`;
                  }
                  batchCounter++;
                  console.log(`[${logColor(task.name)}] Processing batch: ${batchCounter}${batchText}`);
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
              try {
                resultArr.push(await this.client.post(docArr, task, verbose));
                yamlStream.resume();
              } catch (e) {
                !ignoreErrors && reject(e);
              }
            });

            let runOnResume: undefined | (() => void);
            yamlStream.on('resume', async () => {
              if (runOnResume) {
                runOnResume();
              }
            });

            // On 'end' if we still have data accumulated inside the 'docArr'
            // dataset, we create a final post request to import this data as-well,
            // store the response inside the array and finally resolve this as a
            // Promise to return all the responses back to the initial caller.
            const endFunc = async () => {
              if (data === false) {
                throw new Error(`Could not import resources from ${jobPath}. Readable stream is empty. Please provide a file with YAML multi-document format.`);
              }

              if (docArr && !_.isEmpty(docArr)) {
                let batchText = '';
                if (batchsize > 0) {
                  const from = batchCounter * batchsize;
                  const to = from + (docArr.length - 1);
                  batchText = from == to ? ` (${from})` : ` (${from} - ${to})`;
                }
                batchCounter++;
                console.log(`[${logColor(task.name)}] Processing batch: ${batchCounter}${batchText}`);
                try {
                  resultArr.push(await this.client.post(docArr, task, verbose));
                } catch (e) {
                  !ignoreErrors && reject(e);
                }
                docArr = [];
              }

              resolve(resultArr as any);
            };

            yamlStream.on('end', () => {
              if (yamlStream.isPaused()) {
                runOnResume = endFunc;
              } else {
                endFunc();
              }
            });
          } catch (e) {
            !ignoreErrors && reject(e);
          }
        });
      }
      default: {
        throw new Error('Unsupported job operation');
      }
    }
  }
}
