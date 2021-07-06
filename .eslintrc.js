module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'google',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    "project": "tsconfig.json",
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    '@typescript-eslint'
  ],
  'rules': {
    'complexity': 2,
    'arrow-parens': [
      'error',
      'always'
    ],
    'no-debugger': 'error',
    'no-empty': 'error',
    'require-jsdoc': 'off'
  }
};
