module.exports = {
  'root': true,
  'env': {
    'browser': false,
    'es6': true,
    'node': true
  },
  'parserOptions': {
    'project': [
      'tsconfig-base.json',
    ],
    'sourceType': 'module'
  },
  'parser': '@typescript-eslint/parser',
  'plugins': [
    '@typescript-eslint',
    '@typescript-eslint/eslint-plugin',
    'prefer-arrow-functions',
    'unicorn',
    'file-extension-in-import-ts'
  ],
  'rules': {
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
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        'prefer': 'type-imports',
        'disallowTypeAnnotations': true,
        'fixStyle': 'inline-type-imports'
      }
    ],
    '@typescript-eslint/consistent-type-exports': [
      'error',
      {
        'fixMixedExportsWithInlineTypeSpecifier': true
      }
    ]
  }
};
