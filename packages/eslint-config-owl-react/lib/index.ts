module.exports = {
  root: true,
  extends: [
    'owl',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
};
