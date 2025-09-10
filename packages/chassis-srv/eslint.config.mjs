// @ts-check

import eslint from '@eslint/js';
import { RuleTester } from 'eslint';
import tseslint from 'typescript-eslint';

const rules = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
);

rules.push(
  {
    "rules": {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "prefer-rest-params": "off",
    }
  }
);

export default rules;
