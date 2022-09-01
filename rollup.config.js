import ts from 'rollup-plugin-ts';
import sourceMaps from "rollup-plugin-sourcemaps";
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
    // 核心选项
    input: './index.ts',

    plugins: [
        ts({
            tsconfig: "tsconfig.json"
        }),
        sourceMaps(),
        nodeResolve(),
    ],

    output: {
        // 核心选项
        file: './dist/index.js',
        format: 'cjs',
    },
};
