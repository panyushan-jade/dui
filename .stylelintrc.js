module.exports = {
  plugins: ['stylelint-scss'],
  extends: ["stylelint-config-standard","stylelint-config-standard-scss"],
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
  rules:{
    // "selector-class-pattern":"^([a-z][a-z0-9]*)(_[a-z0-9]+)*$",  //classname命名方式
    'block-no-empty': true, // 禁止空块
    "comment-no-empty": true, // 禁止空注释
    "no-empty-first-line": true // 禁止空第一行
   }
};