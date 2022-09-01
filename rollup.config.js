import ts from 'rollup-plugin-ts';
import commonjs from 'rollup-plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
    // 核心选项
    input: './index.ts',

    plugins: [
        ts({
            tsconfig: "tsconfig.json"
        }),
        nodeResolve(),
        commonjs({
            include: 'node_modules/**',
        }),
    ],

    output: {
        // 核心选项
        file: './dist/index.js',
        format: 'cjs',
    },
};
