const path = require('path')

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    tsconfigRootDir: path.join(__dirname, '../tsconfig'),
    project: ['base.json', '../../apps/*/tsconfig.json'],
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  ignorePatterns: [
    '.eslintrc.js',
    '/packages/eslint-config-owl/index.js',
    '/packages/eslint-config-owl-react/index.js',
    '/packages/eslint-config-owl-node/index.js',
  ],
}
