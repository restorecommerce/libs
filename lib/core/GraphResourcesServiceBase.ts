'use strict';

import * as _ from 'lodash';

/**
 * Graph Resource API base provides functions for graph Operations such as
 * creating or modifying Vertices/Edges, graph traversal etc.
 */
export class GraphResourcesServiceBase {
  db: any;
  /**
   * @constructor
   * @param  {object} db Chassis arangodb provider.
   */
  constructor(db: any) {
    this.db = db;
  }

  async traversal(call: any, context: any): Promise<any> {
    const collection_name = call.request.collection_name;
    let start_vertex = call.request.start_vertex;
    const opts = call.request.opts;
    if (_.isNil(start_vertex)) {
      throw new Error('missing start vertex');
    }
    const traversalResult = await this.db.traversal(start_vertex, opts,
      collection_name);
    return traversalResult;
  }
}
