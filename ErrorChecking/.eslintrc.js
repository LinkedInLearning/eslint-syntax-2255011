module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-dupe-args': 'error',
    'no-func-assign': 'error',
    'for-direction': 'error',
    'no-dupe-else-if': 'error',
    'no-empty': 'error',
    'no-debugger': 'error',
    'no-console': [
      'error',
      {
        'allow': ['error'],
      },
    ],
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-cond-assign': 'error',
    'no-constant-condition': 'error',
    'valid-typeof': 'error',
  },
};
