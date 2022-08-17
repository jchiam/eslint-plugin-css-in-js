[![npm](https://img.shields.io/npm/v/@jchiam/eslint-plugin-css-in-js.svg)](https://npmjs.org/package/eslint-plugin-css-in-js)
[![Codecov](https://img.shields.io/codecov/c/github/jchiam/eslint-plugin-css-in-js.svg)]()
[![GitHub last commit](https://img.shields.io/github/last-commit/jchiam/eslint-plugin-css-in-js.svg)](https://github.com/jchiam/eslint-plugin-css-in-js/)
[![license](https://img.shields.io/github/license/jchiam/eslint-plugin-css-in-js.svg)](https://opensource.org/licenses/MIT)

# eslint-plugin-css-in-js

This plugin provides a collection of ESLint rules that help with linting CSS-in-JS codebases.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint, @jchiam/eslint-plugin-css-in-js --save-dev
```

Add the plugin to your ESLint config file (e.g. `.eslintrc`):

```json
{
  "plugins": [
    ...,
    "@jchiam/eslint-plugin-css-in-js"
  ]
}
```

## Usage

The plugin does not enable any rule out of the box. To add a rule, add them manually to the rules section in your ESLint config file.

```json
{
  "rules": {
    "@jchiam/css-in-js/css-concentric-order": "warn"
  }
}
```

## Supported Rules

- [css-concentric-order](https://github.com/jchiam/eslint-plugin-css-in-js/tree/master/src/rules/css-concentric-order#readme)
