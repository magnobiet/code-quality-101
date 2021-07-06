module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-idiomatic-order'],
  plugins: [
    'stylelint-scss'
  ],
  rules: {
    'at-rule-no-unknown': null,
    'color-hex-length': 'long',
    'number-leading-zero': 'never',
    'scss/at-rule-no-unknown': true
  }
};
