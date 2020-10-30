// import * as fs from 'fs';
// import { printSchema, parse, GraphQLSchema } from 'graphql';
// import * as typescriptPlugin from '@graphql-codegen/typescript';
// import * as typescriptResolversPlugin from '@graphql-codegen/typescript-resolvers';
// import { codegen } from '@graphql-codegen/core';

// export async function generateSchemaTypings(schema: GraphQLSchema, outputFile: string, contextType?: string) {
//   try {
//     const config: any /* typings wrong?  */ = {
//       // used by a plugin internally, although the 'typescript' plugin currently
//       // returns the string output, rather than writing to a file
//       filename: outputFile,
//       schema: parse(printSchema(schema)),
//       plugins: [
//         {
//           typescript: {},
//         },
//         {
//           typescriptResolvers: {
//             contextType
//           },
//         },
//       ],
//       pluginMap: {
//         typescript: typescriptPlugin,
//         typescriptResolvers: typescriptResolversPlugin,
//       },
//     };

//     const output = await codegen(config);
//     fs.writeFileSync(outputFile, output);
//     console.log('Schema typings generated in' + outputFile);
//   } catch(ex) {
//     console.error(ex);
//   }
// }

