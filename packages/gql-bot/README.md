# gql-bot

[![Version][version]](https://www.npmjs.com/package/@restorecommerce/gql-bot)[![Build Status][build]](https://travis-ci.org/restorecommerce/gql-bot?branch=master)[![Dependencies][depend]](https://david-dm.org/restorecommerce/gql-bot)[![Coverage Status][cover]](https://coveralls.io/github/restorecommerce/gql-bot?branch=master)

[version]: http://img.shields.io/npm/v/@restorecommerce/gql-bot.svg?style=flat-square
[build]: http://img.shields.io/travis/restorecommerce/gql-bot/master.svg?style=flat-square
[depend]: https://img.shields.io/david/restorecommerce/gql-bot.svg?style=flat-square
[cover]: http://img.shields.io/coveralls/restorecommerce/gql-bot/master.svg?style=flat-square

This is an automated [GraphQL](http://graphql.org/) API client.

Example use cases:

- Mass data imports.
- Seeding of GraphQL based services.
- Reset (deletion and re-import of data) of GraphQL based services.

Supported data format: `YAML`.

The jobs are defined as JSON files whose syntax can be seen in a [test job](test/job1.json).

## Usage

The module mainly consists of two usable components.

### GraphQL Client

A wrapper around [graphql-request](https://github.com/graphcool/graphql-request).
It is used to connect to a GraphQL endpoint with custom headers, further
prepare the mutation parameters based on job specifications and parsed resources,
and for making the mutations/queries requests.
Such resources are described in a YAML file, and they are
initially parsed by the Job Processor before handing them to the Client.

### Job Processor

The job processor implements a pipeline mechanism to process JSON-based job
files, which can contain one or more tasks, which can be run concurrently or
sequentially. The job can have different options such as the maximum number of
concurrent tasks and each task contains useful information for the GraphQL Client,
such as the file path filter (e.g: 'create*.yaml'), the desired operation,
batching, or useful metadata. Currently, the only implemented operation is 'sync'.
There is a GraphQL-based processor, which performs calls to the GraphQL client 
and a generic processor, to which the GraphQL-specific processor is provided.

### Batching
After reading the resources from the `.yaml` file, splitting of documents is done
in streaming fashion, using
[yaml-document-stream](https://www.npmjs.com/package/yaml-document-stream),
(which internally uses `js-yaml` for single document parsing), and then gathered
into a single payload or optionally batched if the property `batchSize` is
provided inside the job's task properties. This way, a larger amount of data can
be imported as-well, by making subsequent GraphQL requests.


Example:

```js
import { GraphQLProcessor, JobProcessor, Job } from 'gql-bot';

const jobInfo = JSON.parse(fs.readFileSync('./test/job1.json', 'utf8'));

// instantiating a job processor
jobInfo.options.processor = new GraphQLProcessor({
    entry: 'http://example.com/graphql',
    apiKey: 'apiKey'
  });
const jobProcessor = new JobProcessor(jobInfo);

// starting a job
const job = new Job(); // an extension of EventEmitter which can receive job-related options
job.on('progress', (task) => {
  console.log('Progress:', task.name, task.progress);
});
job.on('done', () => {
  done();
});
await jobProcessor.start(jobInfo, job);
```

Refer to [tests](./test) for more details.

## Events

The following events are issued by the `Job` object:

- `progress` (contains info specific with the task progress percentage and the task's description)
- `warn`
- `error`
- `done`
