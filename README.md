# resource-base-interface
<img src="http://img.shields.io/npm/v/%40restorecommerce%2Fresource%2Dbase%2Dinterface.svg?style=flat-square" alt="">[![Build Status][build]](https://travis-ci.org/restorecommerce/resource-base-interface?branch=master)[![Dependencies][depend]](https://david-dm.org/restorecommerce/resource-base-interface)[![Coverage Status][cover]](https://coveralls.io/github/restorecommerce/resource-base-interface?branch=master)

[version]: http://img.shields.io/npm/v/resource-base-interface.svg?style=flat-square
[build]: http://img.shields.io/travis/restorecommerce/resource-base-interface/master.svg?style=flat-square
[depend]: https://img.shields.io/david/restorecommerce/resource-base-interface.svg?style=flat-square
[cover]: http://img.shields.io/coveralls/restorecommerce/resource-base-interface/master.svg?style=flat-square

The `resource-base-interface` describes resource CRUD operations which can be bound to a service. Such operations are described via a [gRPC](https://grpc.io/docs/) interface with the message structures therefore being defined using [Protocol Buffers](https://developers.google.com/protocol-buffers/). This interface can be bound with any protobuf definition as long as it contains the endpoints defined in the [resource-base.proto](https://github.com/restorecommerce/protos/blob/master/io/restorecommerce/resource_base.proto) file (note that any resource message structure can be defined).

The exposed gRPC methods are implemented by the `ServiceBase` object which uses a `ResourceAPI` instance to perform operations with a database provider. The exposed interface is therefore agnostic to a specific database implementation.
However, a valid database provider is required. A set of such providers is implemented in [chassis-srv](https://github.com/restorecommerce/chassis-srv/).
This interface emits resource-related messages to [Apache Kafka](https://kafka.apache.org) which can be enabled or disabled at the `ServiceBase`'s constructor.


Methods for managing and traversing graph databases are supported for the [`ArangoDB provider`](https://docs.arangodb.com/3.3/HTTP/Gharial/)

## gRPC Interface

This interface describes the following gRPC endpoints for a generic resource of type `Resource`.

`io.restorecommerce.resourcebase.Resource`

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | string | required | identifier for the resource |
| meta | io.restorecommerce.meta.Meta meta | optional | Meta information common to all Restore Commerce resources |
| value | number | optional | value for the resource |
| text | string | optional | textual data for the resource |

### Create

This operation is used for inserting resources to the database.
Requests are performed by providing a list of resources which are returned in the response. A [`meta`](https://github.com/restorecommerce/protos/blob/master/io/restorecommerce/meta.proto) should be present, containing relevant resource ownership information. Timestamps for creation and modification are then appended automatically to this property upon a `Create` request.
The resource is stored as a normal collection document by default.
If there is a [graph configuration](test/cfg/config.json#L11) specified for the resource then it is stored as a vertex collection along with the edge definitions provided in the configuration.

`io.restorecommerce.resourcebase.ResourceList`

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| items | [ ] `io.restorecommerce.resourcebase.Resource` | required | list of resources |
| total_count | number | optional | total number of resources |

### Read

This operation returns resources based on provided filter and options.
Requests are performed using `io.restorecommerce.resourcebase.ReadRequest` and responses are a list of resources.

`google.protobuf.Struct`

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fields | map<string, Value> | optional | Unordered map of dynamically typed values. |


`io.restorecommerce.resourcebase.Sort`

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| field | string | optional | field to be sorted upon |
| SortOrder | enum | optional | sorting order, `UNSORTED`, `ASCENDING` or `DESCENDING` |


`io.restorecommerce.resourcebase.FieldFilter`

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | string | optional | field name |
| include | bool | optional | include or exclude field |


`io.restorecommerce.resourcebase.ScopeFilter`

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| scope | string | optional | scope to operate on |
| instance | string | optional | value to compare |


`io.restorecommerce.resourcebase.ReadRequest`

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| offset | number | optional | offset of the resource |
| limit | number | optional | limit, default value is `1000` |
| filter | google.protobuf.Struct | optional | filter based on field values, multiple filters can be combined with `AND` and `OR` operators  |
| sort | [ ]`io.restorecommerce.resourcebase.Sort` | optional | sort the resources |
| field | [ ] `io.restorecommerce.resourcebase.FieldFilter` | optional | fields selector, list of fields to be included or excluded, by default we get all the fields |
| search | [ ]string | optional | word search, not yet implemeneted |
| locales_limiter | [ ]string | optional | querying based on locales, not yet implemented |
| scope | `io.restorecommerce.resourcebase.ScopeFilter` | optional | scope to operate on, not yet implemented |

### Update

This operation is used for updating resources in the database.
Requests are performed by providing a list of resources and all updated items are returned within the response. Note that the only required properties on each resource are its `id` and the properties which are meant to be modified.
It is possible to specify in the configuration multiple edge definitions for one vertex. These edges are automatically updated when vertex documents are updated.

### Upsert

This operation is used for updating resources in the database or creating them if they do not exist.
Requests are performed  by providing a resource list, which is returned in the response.

### Delete

This operation is used for deleting resources in the database.
Requests are performed using `io.restorecommerce.resourcebase.DeleteRequest` and responses are `google.protobuf.Empty` messages.
If a graph vertex is deleted, all connected edges are also deleted.

`io.restorecommerce.resourcebase.DeleteRequest`

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| collection | string | required | Name of the target collection |
| ids | [ ]string | optional | List of resource identifiers to be deleted; if empty or not provided, the whole collection is truncated |

### Traversal

This operation is used for traversing graph resource in the database.
Requests are performed using `io.restorecommerce.graph.TraversalRequest` and respone is `io.restorecommerce.graph.TraversalResponse` message.

`io.restorecommerce.graph.TraversalRequest`

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| start_vertex | string | required | this can be either the `_id` or the `_key` of a vertex in the collection |
| opts | `io.restorecommerce.graph.Options` | optional | List of options for graph traversal |
| collection_name | string | optional | starting vertex's Collection name |

`io.restorecommerce.graph.Options`

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| direction | string | optional | Graph traversal direction, possible values are `outbound` or `inbound`, if not provided by default it is `outbound` traversal |
| filter | [ ] `io.restorecommerce.graph.Filter` | optional | List Vertexes to be filtered out, i.e. these vertices are not traversed |
| expander | [ ] `io.restorecommerce.graph.Expander` | optional | List of edges to be included in the traversal, by default all edges are included in traversal |
| sort | string | optional | JS code of custom comparison function for the edges |
| min_depth | uint32 | optional | visits only vertices in atleast the give depth |
| start_vertex | string | optional | id of the start vertex |
| visitor | string | optional | JS code of custom visitor function |
| init | string | optional | JS code of custom result initialization function |
| item_order | string | optional | item iteration order, possible values are either `forward` or `backward` |
| strategy | string | optional | traversal strategy, possible values are either `depthfirst` or `breadthfirst` |
| max_iterations | uint32 | optional | maximum number of iterations in each traversal, this is used to prevent endless loops in cyclic graphs |
| max_depth | uint32 | optional | visits nodes in at most the given depth |
| uniqueness | `io.restorecommerce.graph.Uniqueness` | optional | specifiy uniqueness for vertices and edges visited |
| order | string | optional | traversal order, possible values are `preorder`, `postorder` or `preorder-expander` |
| graph_name | string | optional | name of graph that contain the edges |
| edge_collection | string | optional | name of the collection that contains the edges |

`io.restorecommerce.graph.Filter`

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| vertex | string | optional | vertex would be excluded on traversal |

`io.restorecommerce.graph.Expander`

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| edge | string | optional | expand this edge |
| direction | string | optional | direction of traversal, either `outbound` or `inbound` |

`io.restorecommerce.graph.Uniqueness`

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| vertices | string | optional | specifies uniqueness for vertices visited, possible values are `none`, `global` or `path` |
| edges | string | optional | specifies uniqueness for edges visited, possible values are `none`, `global` or `path` |

`io.restorecommerce.graph.TraversalResponse`

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| vertex_fields | [ ] `io.restorecommerce.graph.VertexFields` | required | Object containing vertex metadata: `id`, `_id`, `_key` and `_rev` values |
| paths | `google.protobuf.Any` | required | buffered data, contains the list of visited paths |
| data | `google.protobuf.Any` | required | buffered data, contains all the data from the visited vertices |

## Kafka Events

A kafka [`Topic`](https://github.com/restorecommerce/kafka-client/blob/master/src/events/provider/kafka/index.ts) can be provided when instantiating a `ServiceBase`. If `enableEvents` is set to true, a list of events is then emitted to Kafka by this microservice for each document of each CRUD request :
- <ResourceName>Created
- <ResourceName>Read
- <ResourceName>Modified
- <ResourceName>Deleted

The events emitted to Kafka can be used for restoring the system in case of failure by implementing a [command-interface](https://github.com/restorecommerce/chassis-srv/blob/master/command-interface.md) in the used microservice. For usage details please see [command-interface tests](https://github.com/restorecommerce/chassis-srv/blob/master/test/command_test.ts).

## Fields Configuration

It is possible to pass a fields [`configuration object`](test/cfg/config.json#L235) to `ResourceAPI` in order to enable some special field handlers.

### Field Generators

The `strategies` property can be used to specify fields within each resource which should be generated automatically. Such autogeneration feature currently includes UUIDs, timestamps and sequential counters. The latter one is particularly useful for fields such as a customer or an item number, which can have a type of sequential logic. In these cases, a [Redis](https://redis.io/) database is used to generate and read these values efficiently.

### Buffer Fields

Buffer-encoded fields can be decoded before being stored in the database. It is possible to specify within the `bufferFields` property what fields of each resource should be specially handled this way. The values are also encoded into a buffer again when read from the database.

### Required Fields

It is possible to specify which fields are required for each document of each resource on the `requiredFields` config.
An `InvalidArgument` error is thrown if one of these fields is missing when attempting to store a document.

## Usage

See [tests](test/).
