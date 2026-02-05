import * as esbuild from 'esbuild'
import { commonifierPlugin } from '@restorecommerce/dev'

await esbuild.build({
  entryPoints: ['./debug.ts'],
  bundle: true,
  platform: 'node',
  outfile: './build/debug.cjs',
  minify: true,
  keepNames: true,
  treeShaking: true,
  sourcemap: 'linked',
  plugins: [commonifierPlugin],
});