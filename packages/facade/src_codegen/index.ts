
import * as fs from 'node:fs';
import * as typescriptPlugin from '@graphql-codegen/typescript';
import * as typescriptResolversPlugin from '@graphql-codegen/typescript-resolvers';
import { codegen } from '@graphql-codegen/core';

export interface GenerateSchemaTypingsArgs {
  schema: any;
  outputFile: string;
  typescript?: {
    [key: string]: any;
  };
  typescriptResolvers?: {
    contextType?: string;
    [key: string]: any;
  };
}

export const generateSchemaTypings = async ({schema, outputFile, typescript, typescriptResolvers}: GenerateSchemaTypingsArgs) => {
  try {
    const codegenConfig: any /* typings wrong?  */ = {
      // used by a plugin internally, although the 'typescript' plugin currently
      // returns the string output, rather than writing to a file
      filename: outputFile,
      schemaAst: schema,
      documents: [],
      plugins: [
        {
          typescript: {
            maybeValue: 'T | null | undefined',
            inputMaybeValue: 'T | null | undefined',
            ...(typescript ?? {})
          },
        },
        {
          typescriptResolvers: {
            noSchemaStitching: true,
            useIndexSignature: true,
            federation: true,
            ...(typescriptResolvers ?? {})
          },
        },
      ],
      pluginMap: {
        typescript: typescriptPlugin,
        typescriptResolvers: typescriptResolversPlugin,
      },
      emitLegacyCommonJSImports: false
    };

    const output = await codegen(codegenConfig);
    fs.writeFileSync(outputFile, output);
    console.log('Schema typings generated in' + outputFile);
  } catch(ex) {
    console.error(ex);
  }
};
