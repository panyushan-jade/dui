import commonjs from "@rollup/plugin-commonjs"; // 用于处理npm包(有的包是CommonJS)
import resolve from "@rollup/plugin-node-resolve"; //将我们编写的源码与依赖的第三方库进行合并 除external外
import strip from "@rollup/plugin-strip"; // 用于从代码中删除 debugger 语句和函数。包括 assert.equal、console.log 等等
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import autoprefixer from "autoprefixer"; // 加厂商前缀
import cssnano from "cssnano"; // css 压缩
import postcss from "rollup-plugin-postcss";
import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser"; // 压缩js

import babel from "rollup-plugin-babel"; // 转换代码

export default {
  input: "./src/index.tsx",
  output: [
    {
      dir: "dist",
      format: "es",
      name: "jadedui",
      // exports: 'named', // 指定导出模式（自动、默认、命名、无）
      preserveModules: true, // 保留模块结构
      preserveModulesRoot: "src", // 将保留的模块放在根级别的此路径下
      compact: true, // 打包后进行压缩 该选项用于压缩 Rollup 产生的额外代码( 不是自己的js代码 自己的js代码要用 rollup-plugin-babel)
    },
    // { file: pkg.module, format: 'es',name:'jadedui' },
    // { file: pkg.main, format: 'umd',name:'jadedui' }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      outDir: "dist/",
      declaration: true,
      declarationDir: "dist/",
    }),
    postcss({
      plugins: [autoprefixer(), cssnano()],
      extract: true,
    }),
    babel(),
    json(),
    strip(),
    terser(),
  ],
};
