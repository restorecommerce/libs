// @ts-check
import { commonifierPlugin } from '@restorecommerce/dev'

const config = {
  entryPoints: ['./debug.ts'],
  bundle: true,
  platform: 'node',
  outfile: './build/debug.cjs',
  minify: true,
  keepNames: true,
  treeShaking: true,
  sourcemap: 'linked',
  plugins: [commonifierPlugin],
  target: 'es2025',
  tsconfig: './tsconfig.build.json',
  external: ['@platformatic'],
};

export default config;