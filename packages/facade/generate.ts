import { generateSchemaTypings } from "./utils/gql";
import { schema as resourcesSchema } from "./src/modules/resources/gql/schema";
import { schema as identitySchema } from "./src/modules/identity/gql/schema";


generateSchemaTypings(resourcesSchema, './src/modules/resources/gql/schema.generated.ts', '../interfaces#ResourcesContext');
generateSchemaTypings(identitySchema, './src/modules/identity/gql/schema.generated.ts', '../interfaces#IdentityContext');
