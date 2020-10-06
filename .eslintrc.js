module.exports = {
  root: true,
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  plugins: ["@typescript-eslint", "jest"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/recommended",
    "plugin:jest/recommended",
    "prettier",
  ],
  env: {
    browser: true,
    node: true,
    "jest/globals": true,
  },
  rules: {
    // override/add rules settings here:
    // mostly turning off styling rules that conflict with prettier
    "vue/singleline-html-element-content-newline": "off",
    "vue/max-attributes-per-line": "off",
    "vue/html-self-closing": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/html-closing-bracket-newline": "off",
    "vue/html-indent": "off",
    "vue/require-v-for-key": "warning",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/camelcase": "off",
    "jest/no-try-expect": "off",
  },
};
