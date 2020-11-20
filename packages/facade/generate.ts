import { generateSchemaTypings } from "./src_codegen/index";
import { schema as facadeStatusSchema } from "./src/modules/facade-status/gql/schema";
import { schema as exampleSchema } from "./tests/example/gql/schema";
import { schema as timezoneSchema } from "./tests/timezone/gql/schema";
import { schema as identitySchema } from "./src/modules/identity/gql/schema";
import { schema as orderingSchema } from "./src/modules/ordering/gql/schema";

generateSchemaTypings({
  schema: facadeStatusSchema,
  outputFile: './src/modules/facade-status/gql/schema.generated.ts',
  typescriptResolvers: {
    contextType: '../interfaces#FacadeStatusContext'
  }
});

generateSchemaTypings({
  schema: exampleSchema,
  outputFile: './tests/example/gql/schema.generated.ts',
  typescriptResolvers: {
    contextType: '../interfaces#ExampleContext'
  }
});

generateSchemaTypings({
  schema: timezoneSchema,
  outputFile: './tests/timezone/gql/schema.generated.ts',
  typescriptResolvers: {
    contextType: '../interfaces#TimezoneContext'
  }
});



generateSchemaTypings({
  schema: orderingSchema,
  outputFile: './src/modules/ordering/gql/schema.generated.ts',
  typescriptResolvers: {
    contextType: '../interfaces#OrderingContext'
  }
});
