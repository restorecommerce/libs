import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    fileParallelism: false,
    testTimeout: 60000,
    coverage: {
      enabled: true,
      provider: 'v8',
      reporter: ['text', 'lcovonly'],
    },
    reporters: [
      'verbose',
      'hanging-process'
    ]
  },
  resolve: {
    alias: {
      graphql: 'graphql/index.js'
    }
  }
});
