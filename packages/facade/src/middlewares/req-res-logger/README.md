# req-res-logger

A GraphQL aware request/ response logger for Koa 2.

The logger accepts an option `logger` which must be a winston compatible logger.
If not provided, a default winston logger is used.

The generated log data has the following structure:

```ts
// **Request** log structure
interface Request {
  method: string;           // HTTP request method
  url: string;              // requested URL
  header: object;           // HTTP request headers
  graphql?: {               // If request is a GraphQL request and is enabled in options
    operationName?: string; // GraphQL operation name if exists
    query?: string;         // GraphQL query if exists
    variables?: object;     // GraphQL variables if exist and is enabled in options
  }
}

// **Response** log structure
interface Response {
  procTime: number;         // processing time for of the middleware stack
  status: number;           // HTTP status code
  header: object;           // HTTP headers
  graphql?: {               // If request is a GraphQL request and is enabled in options
    operationName?: string; // GraphQL operation name if exists
    query?: string;         // GraphQL query if exists
    variables?: object;     // GraphQL variables if exist and is enabled in options
  }
}
```

## GraphQL Logging

The GraphQL request data will be only included in one of the logs.
Logging GraphQL data requires that the body of this request has been read.
If the body has not been read when it reaches the request log, it will be logged in the response.

## Usage

see [test.js](test/test.js).

## Options

- `logger` Winston compatible logger like [Restore Logger](https://github.com/restorecommerce/libs/packages/logger).
- `logResBody` [`false`] Whether the response body should be logged or not.
- `logGraphQL` [`false`] Whether graphql-specific data should be logged or not.
- `logGraphQLVariables` [`false`] Whether graphql request variables should be logged or not.
