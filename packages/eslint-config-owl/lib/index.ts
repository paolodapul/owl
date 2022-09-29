import path from 'path';

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    tsconfigRootDir: path.resolve(__dirname, '../../tsconfig'),
    project: ['base.json', '../../apps/*/tsconfig.json'],
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['.eslintrc.js', '/packages/**/*'],
};
