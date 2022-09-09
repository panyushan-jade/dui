module.exports = {
  parser: "@typescript-eslint/parser", // 指定ESLint解析器
  extends: [
    "plugin:react/recommended", // 使用来自 @eslint-plugin-react 的推荐规则
    "plugin:@typescript-eslint/recommended", // 使用来自@typescript-eslint/eslint-plugin的推荐规则
    // 'prettier/@typescript-eslint',  // 使用 ESLint -config-prettier 禁用来自@typescript-eslint/ ESLint 与 prettier 冲突的 ESLint 规则
    // 'plugin:prettier/recommended',  // 使用eslint-plugin-prettier默认规范 来配合eslint 防止冲突
    //直接使用prettier就可以(版本升级了)
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 2018, // 允许解析最新的 ECMAScript 特性
    sourceType: "module", // 允许使用 import
    ecmaFeatures: {
      jsx: true, // 允许对JSX进行解析
    },
  },
  rules: {
    // 自定义规则
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-vars": [2], //禁止出现未使用的变量
    "no-var": 2,
    "arrow-spacing": [2, { before: true, after: true }], //箭头函数前后空格
    "@typescript-eslint/no-non-null-assertion": "off", //非空断言
    // "comma-dangle": [2, "never"],  // 禁止对象最后一项是逗号
  },
  settings: {
    react: {
      version: "detect", // 告诉 eslint-plugin-react 自动检测 React 的版本
    },
  },
};
