import { ESLintUtils } from '@typescript-eslint/utils';

import { rule, messageId } from './index';

const ruleTester = new ESLintUtils.RuleTester({
  parser: '@typescript-eslint/parser'
});

ruleTester.run('css-concentric-order', rule, {
  valid: [
    {
      // correctly-ordered styles in multiple classes
      code: `const useStyles = makeStyles({
        masthead: {
          display: 'flex',
          position: 'relative',
          justifyContent: 'center',
          ...shorthands.padding('4px', customTokens.contentLeftRightPadding),
          lineHeight: 1.6,
          fontSize: '10px'
        },
        mastheadContent: {
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          maxWidth: customTokens.contentMaxWidth
        },
        icon: {
          backgroundRepeat: 'no-repeat',
          height: '11px'
        },
        link: {
          marginLeft: '16px',
          textDecorationLine: 'none',
          color: tokens.colorNeutralForeground1,
          ':hover': {
            color: tokens.colorNeutralForeground1Hover
          }
        }
      });`
    },
    {
      // correctly-ordered styles in a class
      code: `const test = {
        container: {
          display: 'flex',
          position: 'relative',
          justifyContent: 'center',
          lineHeight: 1.6,
          fontSize: '10px'
        }
      };`
    },
    {
      // FluentUI, Griffel shorthands follows ordering
      code: `const test = {
        container: {
          display: 'flex',
          position: 'relative',
          justifyContent: 'center',
          ...shorthands.margin('4px', 0),
          ...shorthands.padding('4px', 0),
          lineHeight: 1.6,
          fontSize: '10px'
        }
      };`
    },
    {
      // irrelevant object keys are ignored
      code: `const test = {
        container: 'test',
        others: 'test',
      };`
    },
    {
      // mixed keys with correct ordering
      code: `const test = {
        display: 'flex',
        fontSize: '10px',
        container: 'test'
      };`
    },
    {
      // blank lines between object keys are supported
      code: `const test = {
        container: {
          display: 'flex',
          position: 'relative',

          justifyContent: 'center',
          lineHeight: 1.6,
          fontSize: '10px'
        }
      };`
    }
  ],
  invalid: [
    {
      // incorrectly-ordered styles in a class
      code: `const test = {
        container: {
          fontSize: '10px',
          display: 'flex',
          position: 'relative',
          justifyContent: 'center',
          lineHeight: 1.6
        }
      };`,
      errors: [{ messageId }]
    },
    {
      // mixed keys with incorrect ordering
      code: `const test = {
        fontSize: '10px',
        container: 'test',
        display: 'flex'
      };`,
      errors: [{ messageId }]
    },
    {
      // blank lines between object keys are supported
      code: `const test = {
        container: {
          display: 'flex',
          justifyContent: 'center',

          position: 'relative',
          lineHeight: 1.6,
          fontSize: '10px'
        }
      };`,
      errors: [{ messageId }]
    },
    {
      // FluentUI, Griffel shorthands follows ordering - comparison between shorthand and property
      code: `const test = {
        container: {
          display: 'flex',
          position: 'relative',
          justifyContent: 'center',
          lineHeight: 1.6,
          fontSize: '10px',
          ...shorthands.padding('4px', customTokens.contentLeftRightPadding)
        }
      };`,
      errors: [{ messageId }]
    },
    {
      // FluentUI, Griffel shorthands follows ordering - comparison between shorthands
      code: `const test = {
        container: {
          display: 'flex',
          position: 'relative',
          justifyContent: 'center',
          ...shorthands.padding('4px', customTokens.contentLeftRightPadding),
          ...shorthands.margin('4px', 0),
          lineHeight: 1.6,
          fontSize: '10px'
        }
      };`,
      errors: [{ messageId }]
    }
  ]
});
