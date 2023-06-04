# resource-base-interface

[![Version][version]](https://www.npmjs.com/package/@restorecommerce/resource-base-interface)[![Build Status][build]](https://travis-ci.org/restorecommerce/resource-base-interface?branch=master)[![Dependencies][depend]](https://david-dm.org/restorecommerce/resource-base-interface)[![Coverage Status][cover]](https://coveralls.io/github/restorecommerce/resource-base-interface?branch=master)

[version]: http://img.shields.io/npm/v/@restorecommerce/resource-base-interface.svg?style=flat-square
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
| id | string | optional | identifier for the resource |
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

`io.restorecommerce.resourcebase.ReadRequest`

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| offset | number | optional | offset of the resource |
| limit | number | optional | limit, default value is `1000` |
| filters | `io.restorecommerce.filter.FilterOp` | optional | nested filters based on field values, multiple filters can be combined with `AND` and `OR` operators  |
| sorts | [ ]`io.restorecommerce.resourcebase.Sort` | optional | sort the resources |
| fields | [ ] `io.restorecommerce.resourcebase.FieldFilter` | optional | fields selector, list of fields to be included or excluded, by default we get all the fields |
| search | [ ]string | optional | word search, not yet implemeneted |
| locales_limiter | [ ]string | optional | querying based on locales, not yet implemented |

`io.restorecommerce.filter.FilterOp`

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| filters | `io.restorecommerce.filter.Filter` | optional | nested filters |
| operator | enum | optional | operator `and`, or `or` |

`io.restorecommerce.graph.Filter`

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| field | string | required | filter based on field |
| operation | enum | optional | operator `eq`, `lt`, `lte`, `gt`, `gte`, `isEmpty`, `ilike`, `in`, `neq`, default value is `eq` |
| value | string | required | filter based on value |
| type | enum | optional | value type `STRING`, `NUMBER`, `BOOLEAN`, `DATE` or `ARRAY`, default value is `STRING` |
| filters | [ ] `io.restorecommerce.filter.FilterOp` | required | nested filters |

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
| collection | string | optional | Name of the target collection |
| ids | [ ]string | optional | List of resource identifiers to be deleted; if empty or not provided, the whole collection is truncated |

### Traversal

This operation is used for traversing graph resource in the database.
Requests are performed using `io.restorecommerce.graph.TraversalRequest` and respone is `io.restorecommerce.graph.TraversalResponse` message.

`io.restorecommerce.graph.TraversalRequest`

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| vertices | [ ]`io.restorecommerce.graph.Vertices` | optional | list of vertices for traversal |
| collection | `io.restorecommerce.graph.Collection` | optional | collection data for traversal |
| opts | `io.restorecommerce.graph.Options` | optional | List of options for graph traversal |
| path | bool | optional | if set to `true` only the traversed paths are returned |
| subject | `io.restorecommerce.auth.Subject` | required | Subject details |
| filters | `io.restorecommerce.graph.Filters` | optional | filters |

`io.restorecommerce.graph.Vertices`

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| collection_name | string | required | collection name |
| start_vertex_ids | [ ] string | required | list of start vertex ids |

`io.restorecommerce.graph.Collection`

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| collection_name | string | required | collection name |
| limit | [ ] number | optional | limit |
| sorts | [ ] `io.restorecommerce.resourcebase.Sort` | optional | sorting based on fields |

`io.restorecommerce.graph.Filters`

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| entity | string | optional | entity name |
| edge | string | optional | edge name |
| filters | `io.restorecommerce.graph.Filter` | optional | Filter |
| operator | enum | optional | operator, `and` or `or`, default is `and` |

`io.restorecommerce.graph.Options`

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| include_vertexs | [ ] string | optional | list of vertex's to be included in traversal |
| exclude_vertexs | [ ] string | optional | list of vertex's to be excluded in traversal |
| include_edges | [ ] string | optional | list of edge's to be included in traversal |
| exclude_edges | [ ] string | optional | list of edge's to be excluded in traversal |
| direction | enum | optional | direction of traversal, `OUTBOUND` or `INBOUND`, default is `OUTBOUND` |

`io.restorecommerce.graph.TraversalResponse`

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| paths | `google.protobuf.Any` | required | buffered data, contains the list of visited paths |
| data | `google.protobuf.Any` | required | buffered data, contains all the data from the visited vertices |
| operation_status | `io.restorecommerce.status.OperationStatus` | required | operation status |

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

## Development

### Tests

See [tests](test/). To execute the tests a set of _backing services_ are needed.
Refer to [System](https://github.com/restorecommerce/system) repository to start the backing-services before running the tests.

- To run tests

```sh
npm run test
```

## Usage

- Install dependencies

```sh
npm install
```

- Build

```sh
# compile the code
npm run build
```