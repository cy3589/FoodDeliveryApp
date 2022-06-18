module.exports = {
  env: {jest: true},
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {project: './tsconfig.json'},
  extends: [
    'eslint:recommended',
    '@react-native-community',
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'react/jsx-filename-extension': [
      2,
      {extensions: ['.js', '.jsx', '.ts', '.tsx']},
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {js: 'never', jsx: 'never', ts: 'never', tsx: 'never', json: 'never'},
    ],
    'react/function-component-definition': [
      2,
      {namedComponents: 'arrow-function', unnamedComponents: 'arrow-function'},
    ],
    'react/jsx-props-no-spreading': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-use-before-define': [
      'error',
      {functions: true, classes: true, variables: false},
    ],
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
      node: {extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']},
    },
  },
};
