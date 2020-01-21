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
    'valid-typeof': 'error',
    'no-template-curly-in-string': 'error',
    'no-console': [
      'error',
      {
        'allow': ['warn'],
      },
    ],
    'no-empty': 'error',
  },
};
