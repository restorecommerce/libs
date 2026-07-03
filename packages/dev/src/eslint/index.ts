// @ts-check
import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export const rc_lint_config = defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    "rules": {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "prefer-rest-params": "off",
    }
  }
);
