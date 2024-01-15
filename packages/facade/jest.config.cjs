/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest/presets/default-esm',
  resolver: 'ts-jest-resolver',
  verbose: true,
  testEnvironment: 'node',
  collectCoverage: true,
  coverageReporters: ["json", "html"],
  moduleNameMapper: {
    "^jose/(.*)$": "<rootDir>/node_modules/jose/dist/node/cjs/$1"
  },
  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    '^.+\\.[tj]sx?$': [
      'ts-jest',
      {
        useESM: true,
        tsconfig: 'tsconfig.test.json',
        isolatedModules: true,
        // tsconfig: {
        //   module: 'NodeNext'
        // }
      },
    ],
  },
};
