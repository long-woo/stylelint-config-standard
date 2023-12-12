const postcssHTML = require('postcss-html')();

module.exports = {
  overrides: [{
    files: ['*.vue', '**/*.vue'],
    customSyntax: postcssHTML,
    rules: {
    }
  }, {
    files: ['*.html', '**/*.html'],
    customSyntax: postcssHTML,
    rules: {
    }
  }],
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier-scss'],
  rules: {
    'color-named': 'never',
    'selector-pseudo-element-no-unknown': [true, {
      // Vue 2
      ignorePseudoElements: ['v-deep']
    }],
    'at-rule-no-unknown': [true, {
      ignoreAtRules: ['mixin', 'include', 'use', 'extend', 'forward']
    }],
    "selector-pseudo-class-no-unknown": [true, {
      // :deep(<inner-selector>)，:global(<inner-selector>)，:slotted(<inner-selector>)
      "ignorePseudoClasses": ["deep", "global", "slotted"]
    }],
    'color-function-notation': 'legacy'
  }
}
