module.exports = {
  overrides: [{
    files: ['*.(html|vue)', '**/*.(html|vue)'],
    customSyntax: require('postcss-html')()
  }],
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier-scss'],
  rules: {
    indentation: [
      'tab',
      {
        baseIndentLevel: 0
      }
    ],
    'color-named': 'never',
    'declaration-block-semicolon-newline-after': 'always',
    'selector-pseudo-element-no-unknown': [true, {
      // Vue 2
      ignorePseudoElements: ['v-deep']
    }],
    'at-rule-no-unknown': [true, {
      ignoreAtRules: ['mixin', 'include', 'use']
    }],
    'block-opening-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always'
  }
}
