module.exports = {
  globals: {
    'ts-jest': {
      diagnostics: true,
      tsconfig: 'tsconfig.jest.json'
    }
  },
  "collectCoverage": true,
  "moduleFileExtensions": ["js", "ts"],
  "transform": {
    "^.+\\.ts$": "ts-jest"
  },
  "testMatch": [
    "**/*spec.ts"
  ]
}
