const {nodeExternalsPlugin} = require('esbuild-node-externals');

require('esbuild')
    .build({
        entryPoints: ['./dist-ts/index.js'],
        bundle: true,
        outfile: 'dist/index.js',
        platform: 'node',
        plugins: [
            nodeExternalsPlugin({
                dependencies: false,
            }),
        ],
        external: ['cors', 'kcors'],
    })
    .catch((err) => {
        console.log(err);
        process.exit(1);
    });
