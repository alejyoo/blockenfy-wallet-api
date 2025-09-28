import { build } from 'esbuild'

build({
  entryPoints: ['src/main.ts'],
  outdir: 'dist',
  bundle: true,
  format: 'cjs',
  platform: 'node',
  target: 'node18',
  sourcemap: true,
  minify: true,
  alias: {
    '@': './src'
  }
}).catch(() => process.exit(1))
