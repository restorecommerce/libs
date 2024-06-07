import { createServiceConfig } from '@restorecommerce/service-config';
import { createLogger } from '@restorecommerce/logger';
import { isNumber } from 'node:util';
import intoStream from 'into-stream';
import { Transform } from 'node:stream';
import pkg from 'lodash';
const { isEmpty } = pkg;

const cfg = createServiceConfig(process.cwd());
const loggerCfg = cfg.get('logger');
if (loggerCfg) {
  loggerCfg.esTransformer = (msg: any) => {
    msg.fields = JSON.stringify(msg.fields);
    return msg;
  };
}

let logger = createLogger(loggerCfg);

const dlQueryParamExist = (ctx: any): boolean => {
  // check if URL contains query parameter 'dl'
  let filePath, hostName;
  if (ctx && ctx.request && ctx.request.url) {
    filePath = ctx.request.url;
  }
  if (ctx && ctx.request && ctx.request.header
    && ctx.request.header.host) {
    hostName = ctx.request.header.host;
  }
  const completeUrl = 'http://' + hostName + filePath;
  const reqURL = new URL(completeUrl);
  return reqURL.searchParams.has('dl');
};

export const handleGetFile = async (bucket: string, key: string, ctx: any, client: any): Promise<any> => {
  try {
    let download = false;
    download = dlQueryParamExist(ctx);
    // get the target orgKey from the ostorage meta and set it before making ACS request
    let req: any = { bucket, key, download };
    logger.debug('Received download request', { bucket, key });
    const ostorageSrv = client['ostorage'];
    req = { bucket, key, download, subject: ctx.subject };
    let grpcGetStream = await ostorageSrv.get(req);
    const readStream = intoStream.object(grpcGetStream);
    let streamData: any = {
      key: '', object: {}, url: '', options: {}
    };
    readStream.on('error', (err: any) => {
      if (err.message.includes('NotFound')) {
        err.code = 404;
      } else if (err.message.includes('PermissionDenied')) {
        err.code = 403;
      } else {
        err.code = 500;
      }
      ctx.response.status = err.code;
      logger.error('Error streaming request', { message: err.message });
      ctx.res.end(err.message);
    });

    readStream.on('end', (data: any) => {
      ctx.response.status = 200;
      logger.info(`File ${key} download completed successfully from bucket ${bucket}`);
    });


    const transformGrpcObjToBuffer = () => {
      return new Transform({
        objectMode: true,
        transform: (chunk, _, done) => {
          // set options if its not set already
          if (isEmpty(streamData.options)) {
            streamData.options = chunk.response?.payload?.options;
            // set Last-Modified
            if (chunk?.response?.payload?.meta?.modified) {
              ctx.response.set('Last-Modified', chunk?.response?.payload?.meta?.modified);
            }
            if (!streamData.options) {
              logger.silly(`File ${key} from bucket ${bucket} does have empty options`, streamData.options);
            } else {
              // set response headers on ctx response received from ostorage-srv
              let {
                encoding,
                content_type,
                content_language,
                content_disposition,
                length,
                version,
                md5
              } = streamData.options;
              if (encoding) {
                ctx.response.set('Content-Encoding', encoding);
              }
              if (content_type) {
                ctx.response.set('Content-Type', content_type);
              }
              if (content_language) {
                ctx.response.set('Content-Language', content_language);
              }
              const name = streamData.key;
              if (content_disposition) {
                ctx.response.set('Content-Disposition', `${content_disposition};filename=${name}`);
              }
              if (length) {
                ctx.response.set('Content-Length', length);
              }
              if (version) {
                ctx.response.set('ETag', version);
              }
              if (md5) {
                ctx.response.set('Content-MD5', md5);
              }
            }
          }
          // object buffer
          if (chunk.response?.status?.code && chunk.response?.status.code != 200) {
            ctx.response.status = chunk.response.status.code;
            logger.error('Error streaming request', { message: chunk.response });
            ctx.res.end(chunk.response.status.message);
          }
          done(null, chunk?.response?.payload?.object);
        }
      });
    };

    // assigning the grpcStream object through transform to Koa ctx response
    ctx.response.body = readStream.pipe(transformGrpcObjToBuffer());
    if (streamData.error && streamData.error.message) {
      ctx.response.status = 404;
      ctx.response.body = 'Object does not exist';
      return;
    }
    return ctx.response;
  } catch (error) {
    logger.error(`Error downloading file ${key}`, { code: (error as any).code, message: (error as any).message, stack: (error as any).stack });
    ctx.response.body = (error as any).message;
    ctx.response.status = isNumber((error as any).code) ? (error as any).code : 500;
    return ctx.response;
  }
};