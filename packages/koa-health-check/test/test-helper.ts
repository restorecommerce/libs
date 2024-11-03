import * as koa from 'koa';
import Stream from 'stream';
import Koa from 'koa';

export function mockContext(req?: koa.Request, res?, app?): koa.Context {
  const socket = new Stream.Duplex();
  req = Object.assign({ headers: {}, socket }, Stream.Readable.prototype, req);
  res = Object.assign({ _headers: {}, socket }, Stream.Writable.prototype, res);
  // @ts-ignore
  req.socket.remoteAddress = req.socket.remoteAddress || '127.0.0.1';
  app = app || new Koa();
  res.getHeader = k => res._headers[k.toLowerCase()];
  res.setHeader = (k, v) => res._headers[k.toLowerCase()] = v;
  res.removeHeader = (k, v) => delete res._headers[k.toLowerCase()];
  return app.createContext(req, res);
}
