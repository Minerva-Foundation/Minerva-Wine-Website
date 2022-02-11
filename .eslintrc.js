module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': 'warn',
    'no-unused-vars': 'warn',
    'space-in-parens': 'off',
    'computed-property-spacing': 'off',
    'no-console': 'off'
  },
}