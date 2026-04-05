import { ESLintUtils, TSESLint, TSESTree, ASTUtils } from '@typescript-eslint/utils';

import { cssPropertiesIdxMap } from './concentric-order.js';
import { griffelShorthandCSSPropertiesSet } from './griffel-shorthands.js';

const createRule = ESLintUtils.RuleCreator(name => `${name}/PLACEHOLDER_README.md`);

export const messageId = 'css-concentric-order';

type NodeStack = {
  upper: NodeStack | null;
  prevName: string | null;
};

const isValidOrder = (prevName: string, currentName: string) => {
  const prevOrder = cssPropertiesIdxMap.get(prevName);
  const currentOrder = cssPropertiesIdxMap.get(currentName);
  if (prevOrder !== undefined && currentOrder !== undefined) {
    if (prevOrder > currentOrder) {
      return false;
    }
    return true;
  } else if (prevOrder !== undefined || prevOrder === undefined && currentOrder === undefined) {
    return true;
  }
  return false;
};

const ruleFn = (context: TSESLint.RuleContext<string, Array<string>>): TSESLint.RuleListener => {
  let stack: NodeStack | null = null;

  return {
    ObjectExpression() {
      stack = {
        upper: stack,
        prevName: null
      };
    },

    'ObjectExpression:exit'() {
      // c8 ignore next -- stack is always non-null inside ObjectExpression:exit (set on entry above)
      if (stack) {
        stack = stack.upper;
      }
    },

    // regular property
    Property(node) {
      if (stack == null) {
        return;
      }

      if (node.parent?.type === TSESTree.AST_NODE_TYPES.ObjectPattern) {
        return;
      }

      const { prevName } = stack;
      const thisName = ASTUtils.getPropertyName(node);

      if (thisName !== null) {
        stack.prevName = thisName;
      }

      if (prevName === null || thisName === null) {
        return;
      }

      if (!isValidOrder(prevName, thisName)) {
        context.report({
          data: {
            currentKey: thisName,
            prevKey: prevName
          },
          loc: node.key.loc,
          messageId
        });
      }
    },

    // identifier from spread element
    // griffel shorthands: ...shorthands.margin(...), ...shorthands.padding(...)
    Identifier(node) {
      if (stack == null) {
        return;
      }

      if (
        // checks for SpreadElement -> CallExpression -> MemberExpression
        node.parent?.type !== TSESTree.AST_NODE_TYPES.MemberExpression ||
        node.parent.parent?.type !== TSESTree.AST_NODE_TYPES.CallExpression ||
        node.parent.parent.parent?.type !== TSESTree.AST_NODE_TYPES.SpreadElement ||

        // checks that Identifier name is one of Griffel shorthand CSS properties
        !griffelShorthandCSSPropertiesSet.has(node.name)
      ) {
        return;
      }

      const { prevName } = stack;
      const thisName = node.name;

      // c8 ignore next -- Identifier.name is typed as string in the AST spec, never null
      if (thisName !== null) {
        stack.prevName = thisName;
      }

      if (prevName === null || thisName === null) {
        return;
      }

      if (!isValidOrder(prevName, thisName)) {
        context.report({
          data: {
            currentKey: thisName,
            prevKey: prevName
          },
          loc: node.loc,
          messageId
        });
      }
    }
  };
};

export const rule = createRule({
  create: ruleFn,
  name: 'css-concentric-order',
  meta: {
    docs: {
      description: 'CSS-in-JS properties should follow concentric order.'
    },
    messages: {
      'css-concentric-order': 'Expected css object key \'{{currentKey}}\' to be before \'{{prevKey}}\'.'
    },
    type: 'layout',
    schema: []
  },
  defaultOptions: []
});
