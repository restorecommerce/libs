import {
  Resource
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/resource_base.js';

export {
  Resource,
  ResourceList,
  ReadRequest,
  Filter,
  FilterOp,
  Filter_ValueType as FilterValueType,
  Filter_Operation as FilterOperation,
  FilterOp_Operator as OperatorType,
  Sort_SortOrder as SortOrder,
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/resource_base.js';

export {
  Meta as DocumentMetadata
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/meta.js';

export {
  Options_Direction as Direction,
  Options as TraversalOptions,
  Filter as GraphFilter,
  Filters as GraphFilters,
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/graph.js';

export type BaseDocument = Resource & Record<string, any>;

export interface DateTimeConfig {
  fields: string[];
  entities: string[];
}

