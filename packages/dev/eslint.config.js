import preferArrowFunctions from 'eslint-plugin-prefer-arrow-functions';
import unicorn from 'eslint-plugin-unicorn';
import fileExtensionInImportTS from 'eslint-plugin-file-extension-in-import-ts';
import tsParser from '@typescript-eslint/parser';
import { plugin as tesLintPlugin } from 'typescript-eslint';
import { fixupPluginRules } from "@eslint/compat";

export default [
  {
    ignores: [
      'node_modules',
      '**/*.d.ts',
      '**/schema.generated.ts'
    ]
  },
  {
    ignores: ['**/*.d.ts'],
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: [
          'tsconfig-base.json',
        ],
        sourceType: 'module'
      },
    },
    plugins: {
      '@typescript-eslint': tesLintPlugin,
      'prefer-arrow-functions': fixupPluginRules(preferArrowFunctions),
      'unicorn': unicorn,
      'file-extension-in-import-ts': fileExtensionInImportTS
    },
    rules: {
      '@typescript-eslint/adjacent-overload-signatures': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          'selector': 'class',
          'format': ['PascalCase']
        },
        {
          'selector': 'interface',
          'format': ['PascalCase']
        }
      ],
      '@typescript-eslint/indent': ['error', 2],
      '@typescript-eslint/member-delimiter-style': [
        'error',
        {
          'multiline': {
            'delimiter': 'semi',
            'requireLast': true
          },
          'singleline': {
            'delimiter': 'semi',
            'requireLast': false
          }
        }
      ],
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/no-use-before-define': [2, {'functions': true, 'classes': true}],
      '@typescript-eslint/prefer-namespace-keyword': 'error',
      '@typescript-eslint/semi': [
        'error',
        'always'
      ],
      '@typescript-eslint/type-annotation-spacing': 'error',
      'arrow-parens': [
        'off',
        'as-needed'
      ],
      'capitalized-comments': 0,
      'quotes': ['error', 'single', {'allowTemplateLiterals': true}],
      'no-trailing-spaces': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-arrow-functions/prefer-arrow-functions': [
        'warn',
        {
          'classPropertiesAllowed': false,
          'disallowPrototype': false,
          'returnStyle': 'unchanged',
          'singleReturnOnly': false
        }
      ],
      'prefer-arrow-callback': 'error',
      'quote-props': [
        'error',
        'as-needed'
      ],
      'spaced-comment': 'error',
      'unicorn/prefer-module': 'error',
      'unicorn/prefer-node-protocol': 'error',
      'file-extension-in-import-ts/file-extension-in-import-ts': 'error',
      // '@typescript-eslint/consistent-type-imports': [
      //   'error',
      //   {
      //     'prefer': 'type-imports',
      //     'disallowTypeAnnotations': true,
      //     'fixStyle': 'inline-type-imports'
      //   }
      // ],
      // '@typescript-eslint/consistent-type-exports': [
      //   'error',
      //   {
      //     'fixMixedExportsWithInlineTypeSpecifier': true
      //   }
      // ]
      '@typescript-eslint/consistent-type-imports': 0,
      '@typescript-eslint/consistent-type-exports': 0
    }
  }
];
