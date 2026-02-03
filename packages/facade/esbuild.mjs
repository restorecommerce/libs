import * as esbuild from 'esbuild'
import { commonifierPlugin } from '@restorecommerce/dev'

await esbuild.build({
  entryPoints: ['./tests/server.ts'],
  bundle: true,
  platform: 'node',
  outfile: './tests/build/server.cjs',
  minify: true,
  keepNames: true,
  treeShaking: true,
  sourcemap: 'linked',
  plugins: [commonifierPlugin],
});