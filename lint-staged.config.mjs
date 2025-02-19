/** @author Ka Pui (August) Cheung */
// @ts-check

const lintStagedConfig = {
  "*.{js,jsx,ts,tsx}":
    "eslint --fix --cache --cache-location ./node_modules/.cache/eslint",
  "*.{css,scss}":
    "stylelint --fix --cache --cache-location ./node_modules/.cache/stylelint",
  "*": "prettier --write --ignore-unknown --no-error-on-unmatched-pattern --cache",
};

export default lintStagedConfig;
