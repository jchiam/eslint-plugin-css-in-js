[![npm](https://img.shields.io/npm/v/@jchiam/eslint-plugin-css-in-js.svg)](https://npmjs.org/package/@jchiam/eslint-plugin-css-in-js)
[![Codecov](https://img.shields.io/codecov/c/github/jchiam/eslint-plugin-css-in-js.svg)](https://github.com/jchiam/eslint-plugin-css-in-js)
[![GitHub last commit](https://img.shields.io/github/last-commit/jchiam/eslint-plugin-css-in-js.svg)](https://github.com/jchiam/eslint-plugin-css-in-js/)
[![license](https://img.shields.io/github/license/jchiam/eslint-plugin-css-in-js.svg)](https://opensource.org/licenses/MIT)

# eslint-plugin-css-in-js

This plugin provides a collection of ESLint rules that help with linting CSS-in-JS codebases.

## Requirements

- ESLint 9 or 10
- Node.js >= 22

## Installation

```sh
npm i -D eslint @jchiam/eslint-plugin-css-in-js
```

## Usage

Add the plugin to your `eslint.config.js`:

```js
import cssInJs from '@jchiam/eslint-plugin-css-in-js';

export default [
  {
    plugins: {
      '@jchiam/css-in-js': cssInJs
    },
    rules: {
      '@jchiam/css-in-js/css-concentric-order': 'warn'
    }
  }
];
```

No rules are enabled by default — add only the rules you need.

## Supported Rules

- [css-concentric-order](https://github.com/jchiam/eslint-plugin-css-in-js/tree/master/src/rules/css-concentric-order#readme) — enforce concentric ordering of CSS-in-JS properties

## Breaking Changes

### v0 (legacy) to current

Migrated to [ESLint flat config](https://eslint.org/docs/latest/use/configure/configuration-files) (required for ESLint 9+). The `.eslintrc` format is no longer supported.

Plugin registration changes from `.eslintrc`:

```json
{
  "plugins": ["@jchiam/eslint-plugin-css-in-js"],
  "rules": {
    "@jchiam/css-in-js/css-concentric-order": "warn"
  }
}
```

To `eslint.config.js`:

```js
import cssInJs from '@jchiam/eslint-plugin-css-in-js';

export default [
  {
    plugins: { '@jchiam/css-in-js': cssInJs },
    rules: { '@jchiam/css-in-js/css-concentric-order': 'warn' }
  }
];
```