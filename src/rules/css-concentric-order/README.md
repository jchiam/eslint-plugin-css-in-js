# css-concentric-order

This rule seeks to validate the ordering of any JavaScript object that contains keys that matches any CSS properties. The ordering is based on the concept of [concentric css](https://rhodesmill.org/brandon/2011/concentric-css/) and the list and ordering of CSS properties can be found [here](https://github.com/jchiam/eslint-plugin-css-in-js/tree/master/src/rules/css-concentric-order/concentric-order.ts).

## Rule Details

This rule validates JavaScript object based on the following:
1. When comparing two keys, if both are CSS properties, order them based on concentric css ordering.
1. If only one of them is a CSS property, the CSS property should take precedence.
1. If neither are CSS properties, retain the current ordering.

See [tests](https://github.com/jchiam/eslint-plugin-css-in-js/tree/master/src/rules/css-concentric-order/index.spec.ts) for examples of valid and invalid object key ordering.

## Options

This rule takes no options.
