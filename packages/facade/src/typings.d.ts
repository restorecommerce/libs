declare module '*.graphql' {
  import { DocumentNode } from 'graphql'
  const Schema: DocumentNode

  export = Schema
}


declare module '@restorecommerce/koa-req-res-logger';
// declare module 'koa';
declare module 'koa-helmet';
