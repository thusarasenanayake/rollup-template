// rollup.config.js
import { nodeResolve } from "@rollup/plugin-node-resolve";
import jsonResolve from "@rollup/plugin-json";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

export default [
	{
		input: "src/index.ts",
		output: [
			{
				file: "dist/bundle.cjs.js",
				format: "cjs",
			},
			{
				file: "dist/bundle.es.js",
				format: "es",
			},
			{
				file: "dist/bundle.umd.js",
				format: "umd",
				name: "test",
			},
		],
		plugins: [
			commonjs(),
			nodeResolve({
				browser: true,
			}),
			jsonResolve(),
			typescript(),
			babel({ babelHelpers: "bundled", exclude: "node_modules/**" }),
			terser(),
		],
	},
];
