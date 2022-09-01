const {nodeExternalsPlugin} = require('esbuild-node-externals');

require('esbuild')
    .build({
        entryPoints: ['index.jsx'],
        bundle: true,
        outfile: 'dist/index.js',
        platform: 'node',
        external: ['cors', 'kcors'],
        plugins: [
            nodeExternalsPlugin({
                dependencies: false,
            }),
        ],
    })
    .catch((err) => {
        console.log(err);
        process.exit(1);
    });
