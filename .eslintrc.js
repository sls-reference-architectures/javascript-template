module.exports = {
  env: {
    jest: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['no-only-tests'],
  root: true,
  rules: {
    'import/extensions': 0,
    'no-use-before-define': 'off',
    'no-only-tests/no-only-tests': 'error',
    'no-console': 2,
  },
  settings: {
    'import/resolver': 'node',
  },
};