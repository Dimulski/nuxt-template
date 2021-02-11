module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'vue/no-lone-template': 0,
    eqeqeq: 'off',
    'space-before-function-paren': ['error', 'never'],
    semi: ['error', 'always']
  }
};
