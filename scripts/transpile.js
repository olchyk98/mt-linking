/* eslint-disable @typescript-eslint/no-require-imports */
const esbuild = require('esbuild')

// Some packages that are used in the project and getting
// bundled have the issue of imports, where they import something
// like "node:fs" instead of "fs". For those cases, we introduce
// this middleware, which normalizes the import. This makes the
// experience consistent and supported on bigger amount of machines.
const stripNodeProtocol = {
  name: 'strip-node-protocol',
  setup (build) {
    build.onResolve({ filter: /^node:/ }, (args) => {
      const bare = args.path.slice(5)
      return { path: bare, external: true }
    })
  },
}

esbuild.build({
  entryPoints: [ './index.ts' ],
  outdir: 'dist',
  format: 'cjs',
  bundle: true,
  platform: 'node',
  plugins: [ stripNodeProtocol ],
})
