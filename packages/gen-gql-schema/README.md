
# @restorecommerce/gen-gql-schema

Generates gql resolver typings

## Example

```ts
import { generateSchemaTypings } from "@restorecommerce/gen-gql-schema";
import { schema } from "./src/gql/schema";

generateSchemaTypings(schema, './src/gql/schema.generated.ts', '../interfaces#MyContext');
```

## Build notes

`npm run build` has a pre/post install script that installs/uninstalls graphql.
This is to avoid having multiple grpc instances in (symlinked) node_modules folders when using lerna.
