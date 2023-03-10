### Upgrade commit

In package.json, add `"types": "module"`
Change .eslintrc.js to .eslintrc.cjs
In .eslintrc.cjs, make it look something like:

```javascript
module.exports = {
  env: {
    jest: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['no-only-tests'],
  root: true,
  rules: {
    'import/extensions': 0,
    'no-use-before-define': 'off',
    'no-only-tests/no-only-tests': 'error',
    'no-console': 2,
  },
};
```

Change .prettierrc.js to .prettierrc.cjs
Follow the bouncing ball to turn `require` into `import`
