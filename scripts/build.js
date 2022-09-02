const {nodeExternalsPlugin} = require('esbuild-node-externals');

require('esbuild')
    .build({
        entryPoints: ['./dist/index.js'],
        bundle: true,
        outfile: 'build/index.js',
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
