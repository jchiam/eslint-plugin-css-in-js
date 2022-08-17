import { ESLintUtils, TSESLint, TSESTree, ASTUtils } from '@typescript-eslint/utils';

import { cssPropertiesIdxMap } from './concentric-order';

const createRule = ESLintUtils.RuleCreator(name => `${name}/PLACEHOLDER_README.md`);

export const messageId = 'css-concentric-order';

type NodeStack = {
  upper: NodeStack | null;
  prevName: string | null;
}

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
      if (stack) {
        stack = stack.upper;
      }
    },

    SpreadElement(node) {
      if (stack && node.parent?.type === TSESTree.AST_NODE_TYPES.ObjectExpression) {
        stack.prevName = null;
      }
    },

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
    }
  };
};

export const rule = createRule({
  create: ruleFn,
  name: 'css-concentric-order',
  meta: {
    docs: {
      description: 'CSS-in-JS properties should follow concentric order.',
      recommended: 'warn'
    },
    messages: {
      'css-concentric-order': 'Expected css object key \'{{currentKey}}\' to be before \'{{prevKey}}\'.'
    },
    type: 'layout',
    schema: []
  },
  defaultOptions: []
});
