const postcssHTML = require('postcss-html')();

module.exports = {
  overrides: [{
    files: ['*.vue', '**/*.vue'],
    customSyntax: postcssHTML,
    rules: {
      indentation: ['tab', {
        baseIndentLevel: 0
      }]
    }
  }, {
    files: ['*.html', '**/*.html'],
    customSyntax: postcssHTML,
    rules: {
      indentation: ['tab', {
        baseIndentLevel: 3
      }]
    }
  }],
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier-scss'],
  rules: {
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
