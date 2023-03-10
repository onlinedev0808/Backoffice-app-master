module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    // general
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    'block-spacing': 'error',
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    camelcase: 0,
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error', { after: true, before: false }],
    'comma-style': ['error', 'last'],
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    eqeqeq: ['error', 'always'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'keyword-spacing': ['error', { after: true, before: true }],
    'newline-after-var': 'error',
    'no-async-promise-executor': 'error',
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error',
    'no-var': 'error',
    'object-curly-spacing': ['error', 'always'],
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'error',
    'prefer-template': 'error',
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'space-before-blocks': 'error',
    'space-before-function-paren': 'error',
    'no-unused-vars': 'warn',
    'no-debugger': 'warn',
    'no-unreachable': 'warn',

    // vue
    'vue/array-bracket-spacing': ['error', 'never'],
    'vue/arrow-spacing': 'error',
    'vue/block-spacing': 'error',
    'vue/block-tag-newline': ['error', { maxEmptyLines: 1,  multiline: 'always', singleline: 'always' }],
    'vue/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'vue/comma-dangle': 'error',
    'vue/comma-spacing': ['error', { after: true, before: false }],
    'vue/comma-style': ['error', 'last'],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/component-options-name-casing': 'error',
    'vue/component-tags-order': ['error', { order: ['template', 'script[setup]', 'script:not([setup])', 'style:not([scoped])', 'style[scoped]'] }],
    'vue/custom-event-name-casing': 'error',
    'vue/define-macros-order': 'error',
    'vue/dot-location': ['error', 'property'],
    'vue/dot-notation': 'error',
    'vue/eqeqeq': 'error',
    'vue/html-comment-content-newline': 'error',
    'vue/html-comment-content-spacing': 'error',
    'vue/html-comment-indent': 'error',
    'vue/match-component-file-name': ['error', { extensions: ['vue'], shouldMatchCase: false }],
    'vue/match-component-import-name': 'error',
    'vue/max-attributes-per-line': ['error', { singleline: 2 }],
    'vue/no-child-content': 'error',
    'vue/no-multiple-objects-in-class': 'error',
    'vue/no-potential-component-option-typo': ['error', { custom: [], presets: ['vue'], threshold: 1 }],
    'vue/no-reserved-component-names': 'error',
    'vue/no-static-inline-styles': 'warn',
    'vue/no-this-in-before-route-enter': 'error',
    'vue/no-unsupported-features': ['error', { ignores: [], version: '^3.0.0' }],
    'vue/no-unused-properties': 'warn',
    'vue/no-unused-refs': 'warn',
    'vue/no-unused-vars': 'warn',
    'vue/no-use-computed-property-like-method': 'error',
    'vue/no-useless-mustaches': 'error',
    'vue/no-v-html': 0,
    'vue/no-v-text-v-html-on-component': 'error',
    'vue/object-curly-spacing': ['warn', 'always', { arraysInObjects: true, objectsInObjects: true }],
    'vue/padding-line-between-blocks': 'error',
    'vue/prefer-import-from-vue': 'error',
    'vue/prefer-separate-static-class': 'error',
    'vue/prefer-true-attribute-shorthand': 'error',
    'vue/require-direct-export': 'error',
    'vue/require-name-property': 'error',
    'vue/v-on-function-call': 'error'
  }
}