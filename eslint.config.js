import recommended from '@jchiam/eslint-config/recommended.js';

export default [
  ...recommended,
  {
    ignores: ['lib/', 'coverage/']
  },
  {
    // eslint-plugin-import doesn't understand TypeScript's NodeNext .js→.ts
    // mapping; TypeScript itself validates module resolution via tsc.
    rules: {
      'import/no-unresolved': 'off'
    }
  }
];
