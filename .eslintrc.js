module.exports = {
  "env": {
    "browser": false,
    "es6": true,
    "node": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "tsconfig.json",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "@typescript-eslint/eslint-plugin",
    "prefer-arrow-functions"
  ],
  "rules": {
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/class-name-casing": "error",
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        "multiline": {
          "delimiter": "semi",
          "requireLast": true
        },
        "singleline": {
          "delimiter": "semi",
          "requireLast": false
        }
      }
    ],
    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/no-use-before-define": [2, {"functions": true, "classes": true}],
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/semi": [
      "error",
      "always"
    ],
    "@typescript-eslint/type-annotation-spacing": "error",
    "arrow-parens": [
      "off",
      "as-needed"
    ],
    "capitalized-comments": 0,
    "quotes": ["error", "single", { "allowTemplateLiterals": true }],
    "no-trailing-spaces": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-arrow-functions/prefer-arrow-functions": [
      "warn",
      {
        "classPropertiesAllowed": false,
        "disallowPrototype": false,
        "returnStyle": "unchanged",
        "singleReturnOnly": false
      }
    ],
    "prefer-arrow-callback": "error",
    "quote-props": [
      "error",
      "as-needed"
    ],
    "spaced-comment": "error"
  }
};
