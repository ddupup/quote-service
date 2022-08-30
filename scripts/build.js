require('esbuild')
    .build({
        entryPoints: ['index.jsx'],
        bundle: true,
        outfile: 'dist/index.js',
        platform: 'node',
    })
    .catch(() => process.exit(1));
