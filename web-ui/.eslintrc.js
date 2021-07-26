module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'standard',
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
    'plugin:vue/recommended',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'vue/singleline-html-element-content-newline': 'off',
  },
}
