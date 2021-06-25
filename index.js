module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    indentation: [
      2,
      {
        baseIndentLevel: 0
      }
    ],
    'declaration-block-semicolon-newline-after': 'always',
    'selector-pseudo-element-no-unknown': [true, {
      ignorePseudoElements: ['v-deep']
    }],
    'at-rule-no-unknown': [true, {
      ignoreAtRules: ['mixin', 'include']
    }]
  }
}
