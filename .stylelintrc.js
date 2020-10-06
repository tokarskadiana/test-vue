module.exports = {
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-prettier",
    "stylelint-config-rational-order",
  ],
  rules: {
    "plugin/rational-order": [
      true,
      {
        "empty-line-between-groups": true,
      },
    ],
  },
};
