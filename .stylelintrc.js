module.exports = {
  plugins: ["stylelint-scss"],
  extends: ["stylelint-config-standard", "stylelint-config-standard-scss"],
  // extends: "stylelint-config-standard-scss",
  ignoreFiles: ["**/*.js", "**/*.jsx", "**/*.tsx", "**/*.ts"],
  rules: {
    // "selector-class-pattern":"^([a-z][a-z0-9]*)(_[a-z0-9]+)*$",  //classname命名方式
    // "block-no-empty": null, // 禁止空块
    // "comment-no-empty": null, // 禁止空注释
    // "no-empty-source": null, // 禁止空第一行
    // "dollar-variable-empty-line-before": null,
    // "max-empty-lines": 100,
    // "dollar-variable-empty-line-before": false,
    "scss/no-global-function-names": null,
    "function-no-unknown": null,
    "scss/double-slash-comment-whitespace-inside": null,
    "no-descending-specificity": null,
  },
};
